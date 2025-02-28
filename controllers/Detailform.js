document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  const overlay = document.getElementById("overlay");
  const openFormBtn = document.getElementById("openFormBtn");
  const closeFormBtn = document.getElementById("closeFormBtn");
  const submitForm = document.getElementById("submitForm");



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

  // function getStoredFormData() {
  //   const storedData = localStorage.getItem("formData");
  //   return storedData ? JSON.parse(storedData) : null;
  // }

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

  // Override the default alert function to use custom modal
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



chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.action === "openNextUrl") {
      await openNextContactForm();
  }
});

async function openNextContactForm() {
  try {
      // 1️⃣ **Storage Data Ko Ek Hi Baar Fetch Karna**
      const result = await chrome.storage.local.get(["Morphy_Leads_Finder_local_default", "currentIndex"]);
      let UrlData = result?.Morphy_Leads_Finder_local_default?.collect || [];
      let currentIndex = result?.currentIndex || 0;

      // 2️⃣ **Check: Koi URL Bacha Hai Ya Nahi**
      if (currentIndex >= UrlData.length) {
          alert("No more URLs to open!");
          return;
      }

      let website = UrlData[currentIndex]?.website;
      console.log("Checking website:", website);

      // 3️⃣ **Invalid URL Ko Skip Karna**
      if (!website || !website.startsWith("http")) {
          console.warn("Skipping invalid URL:", website);
          await chrome.storage.local.set({ currentIndex: currentIndex + 1 });
          return openNextContactForm(); // ✅ Next URL Open Karo
      }

      // 4️⃣ **Fetch Request With Max 3 Seconds Timeout**
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000); // **3 sec timeout**

      let response;
      try {
          response = await fetch(website, { signal: controller.signal });

          // Agar Response `NXDOMAIN` ya Site Band Hai
          if (!response.ok) {
              console.warn(`Website not reachable: ${website} (Status: ${response.status}), skipping...`);
              await chrome.storage.local.set({ currentIndex: currentIndex + 1 });
              return openNextContactForm(); // ✅ Next URL Open Karo
          }

      } catch (error) {
          console.warn(`Fetch failed for ${website} (Possible DNS Error), skipping...`, error);
          await chrome.storage.local.set({ currentIndex: currentIndex + 1 });
          return openNextContactForm(); // ✅ Next URL Open Karo
      } finally {
          clearTimeout(timeoutId);
      }

      // 5️⃣ **HTML Parse Karna**
      const htmlText = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlText, "text/html");

      // 6️⃣ **Keywords Se Contact Page Dhundhna**
      const keywords = ["contact", "support", "help", "customer", "service", "issue"];
      const contactLinks = Array.from(doc.querySelectorAll("a"))
          .filter(link => keywords.some(keyword => link.textContent.toLowerCase().includes(keyword)))
          .map(link => link.href);

      // 7️⃣ **Agar Contact Link Milta Hai, Toh Open Karna**
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
              return openNextContactForm(); // ✅ Next URL Open Karo
          }
      } else {
          console.log(`No contact links found for ${website}, skipping...`);
          await chrome.storage.local.set({ currentIndex: currentIndex + 1 });
          return openNextContactForm(); // ✅ Next URL Open Karo
      }

  } catch (error) {
      console.error("Error processing URL:", error);
      const result = await chrome.storage.local.get(["currentIndex"]);
      let currentIndex = result?.currentIndex || 0;
      await chrome.storage.local.set({ currentIndex: currentIndex + 1 });
      return openNextContactForm(); // ✅ Next URL Open Karo
  }
}


});
