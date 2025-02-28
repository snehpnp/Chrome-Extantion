document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  const overlay = document.getElementById("overlay");
  const openFormBtn = document.getElementById("openFormBtn");
  const closeFormBtn = document.getElementById("closeFormBtn");
  const submitForm = document.getElementById("submitForm");

  const urls = [
    "http://www.gisindore.in/",
    "https://www.takshsheela.com/",
    "http://www.gisindore.in/",
    "https://www.takshsheela.com/",
    "http://www.gisindore.in/",
    "https://www.takshsheela.com/",
    "http://www.gisindore.in/",
    "https://www.takshsheela.com/",
  ];

  function showForm() {
    form.style.display = "block";
    overlay.style.display = "block";
  }

  function hideForm() {
    form.style.display = "none";
    overlay.style.display = "none";
  }

  async function storeFormData(name, email, phone, description) {
    const result = await chrome.storage.local.get([
      "Morphy_Leads_Finder_local_default",
    ]);

    let UrlData = result?.Morphy_Leads_Finder_local_default.collect;

    localStorage.setItem(
      "formData",
      JSON.stringify({ name, email, phone, description })
    );
    chrome.storage.local.set(
      {
        user: { name, email, phone, description },
        urls: UrlData,
      },
      function () {
        // console.log("User data saved!");
      }
    );
  }

  function getStoredFormData() {
    const storedData = localStorage.getItem("formData");
    return storedData ? JSON.parse(storedData) : null;
  }

  if (openFormBtn) {
    openFormBtn.addEventListener("click", showForm);
  }
  if (closeFormBtn) {
    closeFormBtn.addEventListener("click", hideForm);
  }
  if (overlay) {
    overlay.addEventListener("click", hideForm);
  }

  if (submitForm) {
    submitForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone")?.value.trim();
      const description = document.getElementById("description")?.value.trim();

      if (!name || !email || !phone || !description) {
        alert("Please fill in all fields.");
        return;
      }

      storeFormData(name, email, phone, description);

      alert("Form submitted successfully!");
      hideForm();
      submitForm.reset();
      openNextContactForm();
    });
  }


  chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
    if (message.action === "openNextUrl") {
        await openNextContactForm();
    }
});

async function openNextContactForm() {
    try {
        // Retrieve stored URLs and current index
        const result = await chrome.storage.local.get(["Morphy_Leads_Finder_local_default", "currentIndex"]);
        let UrlData = result?.Morphy_Leads_Finder_local_default?.collect || [];
        let currentIndex = result?.currentIndex || 0;  // ✅ Ensure currentIndex is always defined

        // If no more URLs, stop execution
        if (currentIndex >= UrlData.length) {
            alert("No more URLs to open!");
            return;
        }

        let website = UrlData[currentIndex]?.website;
        console.log("Opening contact form for:", website);

        // If website URL is missing or invalid, move to the next
        if (!website || !website.startsWith("http")) {
            await chrome.storage.local.set({ currentIndex: currentIndex + 1 });
            openNextContactForm();
            return;
        }

        // Fetch the page
        const response = await fetch(website);
        if (!response.ok) {
            console.warn(`Failed to fetch: ${website}, skipping...`);
            await chrome.storage.local.set({ currentIndex: currentIndex + 1 });
            openNextContactForm();
            return;
        }

        // Parse the page HTML
        const htmlText = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlText, "text/html");

        // Keywords to match
        const keywords = ["contact", "support", "help", "customer", "service", "issue"];
        const contactLinks = Array.from(doc.querySelectorAll("a"))
            .filter(link => keywords.some(keyword => link.textContent.toLowerCase().includes(keyword)))
            .map(link => link.href);

        // Open the first found contact-related URL
        if (contactLinks.length > 0) {
            let contactUrl = contactLinks.find(link => link.includes("contact")) || contactLinks[0];

            if (contactUrl.startsWith("http")) {
                chrome.tabs.create({ url: contactUrl }, function (tab) {
                    chrome.storage.local.set({ currentTabId: tab.id });
                    chrome.storage.local.set({ currentIndex: currentIndex + 1 });
                });
            } else {
                console.warn(`Invalid contact URL: ${contactUrl}, skipping...`);
                await chrome.storage.local.set({ currentIndex: currentIndex + 1 });
                openNextContactForm();
            }
        } else {
            console.log(`No contact links found for ${website}, skipping...`);
            await chrome.storage.local.set({ currentIndex: currentIndex + 1 });
            openNextContactForm();
        }
    } catch (error) {
        console.error("Error processing URL:", error);
        const result = await chrome.storage.local.get(["currentIndex"]); // ✅ Ensure we get the latest currentIndex
        let currentIndex = result?.currentIndex || 0;
        await chrome.storage.local.set({ currentIndex: currentIndex + 1 });
        openNextContactForm();
    }
}

});
