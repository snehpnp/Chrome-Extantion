document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  const overlay = document.getElementById("overlay");
  const openFormBtn = document.getElementById("openFormBtn");
  const closeFormBtn = document.getElementById("closeFormBtn");
  const submitForm = document.getElementById("submitForm");
  const save = document.getElementById("save");
  let contactDetails = JSON.parse(localStorage.getItem("contactDetails"));

  function showForm() {
    form.style.display = "block";
    overlay.style.display = "block";
    if (contactDetails) {
      document.getElementById("name").value = contactDetails.name ;
      document.getElementById("email").value = contactDetails.email;
      document.getElementById("phone").value = contactDetails.phone;
      document.getElementById("description").value = contactDetails.description;
    }else{
      document.getElementById("name").value = "Demo";
      document.getElementById("email").value = "demo@gmail.com";
      document.getElementById("phone").value = "1233214543";
      document.getElementById("description").value = "Hello";
    }
  }

  function hideForm() {
    form.style.display = "none";
    overlay.style.display = "none";
  }

  async function storeFormData(name, email, phone, description) {
    console.warn('name: ', name, 'email: ', email, 'phone: ', phone, 'description: ', description);
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
        Domain: UrlData.map((item) => item.website),
        currentIndex:0
      },
      function () {
 
      }
    );
  }

  if (openFormBtn) {
    openFormBtn.addEventListener("click", showForm);
  }

  if (overlay) {
    overlay.addEventListener("click", hideForm);
  }

  if (submitForm) {
    submitForm.addEventListener("click", function (event) {
      event.preventDefault();

      if (!contactDetails) {
        localStorage.setItem("contactDetails", JSON.stringify({ name: "Demo", email: "demo@gmail.com", phone: "1233214543", description: "Hello" }));
        contactDetails = JSON.parse(localStorage.getItem("contactDetails"));
      }
      storeFormData(contactDetails.name, contactDetails.email, contactDetails.phone, contactDetails.description);
      openNextContactForm();
    });
  }

  if (save) {
    save.addEventListener("submit", async function (event) {
      event.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone")?.value.trim();
      const description = document.getElementById("description")?.value.trim();

      if (!name || !email || !phone || !description) {
        return alert("Please fill in all fields.");
      }
      localStorage.setItem("contactDetails", JSON.stringify({ name, email, phone, description }));
      try {
        const result = await chrome.storage.local.get(["Morphy_Leads_Finder_local_default"]);
        let UrlData = result?.Morphy_Leads_Finder_local_default?.collect || [];

        await chrome.storage.local.set({
          user: { name, email, phone, description },
          urls: UrlData,
          Domain: UrlData.map(item => item.website),
          currentIndex: 0
        });

        hideForm();
        location.reload();
      } catch (error) {
        console.error("Error saving to Chrome storage:", error);
        alert("Failed to save data to Chrome storage. Please try again.");
      }
    });
  }

  window.alert = function (message) {
    createCustomAlert(message);
  };

  // Function to create and show custom modal alert dynamically
  function createCustomAlert(message) {
    // Check if modal already exists, if yes, remove it
    let existingModal = document.getElementById("customAlertModal");
    if (existingModal) {
      existingModal.remove();
    }

    // Create modal container
    let modalContainer = document.createElement("div");
    modalContainer.id = "customAlertModal";
    modalContainer.style.position = "fixed";
    modalContainer.style.top = "0";
    modalContainer.style.left = "0";
    modalContainer.style.width = "100%";
    modalContainer.style.height = "100%";
    modalContainer.style.background = "rgba(0, 0, 0, 0.5)";
    modalContainer.style.display = "flex";
    modalContainer.style.justifyContent = "center";
    modalContainer.style.alignItems = "center";
    modalContainer.style.zIndex = "9999";

    // Create modal box
    let modalBox = document.createElement("div");
    modalBox.style.background = "white";
    modalBox.style.padding = "20px";
    modalBox.style.borderRadius = "5px";
    modalBox.style.textAlign = "center";
    modalBox.style.width = "300px";
    modalBox.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.3)";

    // Create message paragraph
    let modalMessage = document.createElement("p");
    modalMessage.innerText = message;
    modalMessage.style.fontSize = "16px";
    modalMessage.style.marginBottom = "15px";

    // Create OK button
    let modalButton = document.createElement("button");
    modalButton.innerText = "OK";
    modalButton.style.padding = "10px 20px";
    modalButton.style.border = "none";
    modalButton.style.background = "#007bff";
    modalButton.style.color = "white";
    modalButton.style.cursor = "pointer";
    modalButton.style.borderRadius = "5px";

    // Button hover effect
    modalButton.onmouseover = function () {
      modalButton.style.background = "#0056b3";
    };
    modalButton.onmouseout = function () {
      modalButton.style.background = "#007bff";
    };

    // Close modal on button click
    modalButton.onclick = function () {
      document.body.removeChild(modalContainer);
    };

    // Append elements together
    modalBox.appendChild(modalMessage);
    modalBox.appendChild(modalButton);
    modalContainer.appendChild(modalBox);
    document.body.appendChild(modalContainer);
  }

  // Add function to show toast notifications
  function showToastNotification(message, type = "info") {
    // Remove any existing toast
    const existingToast = document.getElementById("toast-notification");
    if (existingToast) {
      existingToast.remove();
    }

    // Create toast container
    const toast = document.createElement("div");
    toast.id = "toast-notification";
    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.right = "20px";
    toast.style.backgroundColor = type === "error" ? "#f44336" : "#4CAF50";
    toast.style.color = "white";
    toast.style.padding = "16px";
    toast.style.borderRadius = "4px";
    toast.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";
    toast.style.zIndex = "10000";
    toast.style.minWidth = "250px";
    toast.style.transition = "opacity 0.3s ease";

    // Add message
    toast.textContent = message;

    // Add to DOM
    document.body.appendChild(toast);

    // Remove after 3 seconds
    setTimeout(() => {
      toast.style.opacity = "0";
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
    if (message.action === "openNextUrl") {
      await openNextContactForm();
    }
  });

  async function skipUrl(currentIndex) {
    await chrome.storage.local.set({ currentIndex: currentIndex + 1 });
    return openNextContactForm();
  }

  async function openNextContactForm() {
    try {
      const { Morphy_Leads_Finder_local_default, currentIndex = 0 } =
        await chrome.storage.local.get([
          "Morphy_Leads_Finder_local_default",
          "currentIndex",
        ]);
      const UrlData = Morphy_Leads_Finder_local_default?.collect || [];

      if (currentIndex >= UrlData.length) {
        alert("No more URLs to open!");
        return;
      }

      const website = UrlData[currentIndex]?.website;
      if (!website || !website.startsWith("http")) {
        console.warn("Skipping invalid URL:", website);
        showToastNotification(`Skipping invalid URL: ${website}`, "error");
        return skipUrl(currentIndex);
      }

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      let response;
      try {
        showToastNotification(`Checking website: ${website}`, "info");
        // response = await fetch(website, { signal: controller.signal });
        response = await fetch(website);

        if (!response.ok) {
          console.log(`Website not reachable: ${website}, skipping...`);
          showToastNotification(`Website not reachable: ${website}, skipping...`, "error");
          return skipUrl(currentIndex);
        }
      } catch (error) {
        console.log(`Fetch failed for ${website}`, error);
        showToastNotification(`Fetch failed for ${website}`, "error");
        return skipUrl(currentIndex);
      } finally {
        clearTimeout(timeoutId);
      }

      const htmlText = await response.text();
      const parser = new DOMParser();


      const doc = parser.parseFromString(htmlText, "text/html");

      const keywords = [
        "contact-us",
        "contact",
        "support",
        "help",
        "customer",
        "service",
        "issue",
      ];
      const contactLinks = Array.from(doc.querySelectorAll("a"))
        .filter((link) =>
          keywords.some((k) => link.textContent.toLowerCase().includes(k))
        )
        .map((link) => link.href);


      if (contactLinks.length) {
        console.log(contactLinks);
        let contactUrl =
          contactLinks.find((link) => link.includes("contact")) ||
          website;
        if (contactUrl.startsWith("http")) {
          showToastNotification(`Found contact page for ${website}, opening...`, "info");
          chrome.tabs.create({ url: contactUrl }, (tab) => {
            chrome.storage.local.set({
              currentTabId: tab.id,
              currentIndex: currentIndex + 1,
            });
          });
        } else {
          console.warn("Invalid contact URL:", contactUrl);
          showToastNotification(`Invalid contact URL: ${contactUrl}`, "error");
          return skipUrl(currentIndex);
        }
      } else {


        console.log(`No contact links found for ${website}, skipping...`);
        showToastNotification(`No contact links found for ${website}, skipping...`, "error");
        return skipUrl(currentIndex);
      }
    } catch (error) {
      console.log("Error processing URL:", error);
      showToastNotification("Error processing URL", "error");
      const { currentIndex = 0 } = await chrome.storage.local.get([
        "currentIndex",
      ]);
      return skipUrl(currentIndex);
    }
  }
});
