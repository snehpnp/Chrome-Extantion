document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const overlay = document.getElementById("overlay");
    const openFormBtn = document.getElementById("openFormBtn");
    const closeFormBtn = document.getElementById("closeFormBtn");
    const submitForm = document.getElementById("submitForm");

    const urls = [
        "http://www.gisindore.in/",
        "https://www.takshsheela.com/",
        // "http://www.diaspark.com/",
        // "https://www.thoughtwin.com/",
        // "https://nrewind.com/",
        // "https://www.betaitsolution.com/",
        // "https://codezilla.io/",
        // "	https://www.infobeans.com/"
    ];

    chrome.runtime.onInstalled.addListener(() => {
        chrome.storage.local.set({
            urls: urls,
            currentIndex: 0
        });
    });
    

    function showForm() {
        form.style.display = "block";
        overlay.style.display = "block";
    }

    function hideForm() {
        form.style.display = "none";
        overlay.style.display = "none";
    }


    function storeFormData(name, email, phone, description) {
        localStorage.setItem("formData", JSON.stringify({ name, email, phone, description }));
        chrome.storage.local.set({ 
            user: { name, email , phone, description }
        }, function () {
            // console.log("User data saved!");
        });
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

    function openNextContactForm() {
        let currentUrlIndex = parseInt(localStorage.getItem("currentUrlIndex") || "0", 10);
        if (currentUrlIndex < urls.length) {
            localStorage.setItem("currentUrlIndex", currentUrlIndex + 1);
            findAndFillContactForms(urls[currentUrlIndex]);
        } else {
            alert("All contact forms processed.");
            localStorage.removeItem("currentUrlIndex");
        }
    }

    async function findAndFillContactForms(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to load ${url}`);
            }
            const htmlText = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlText, "text/html");

            const forms = doc.querySelectorAll("form");
            if (forms.length > 0) {
                const newTab = window.open(url, '_blank');
                newTab.focus();
                newTab.onload = function () {
                    autoFillForm(newTab.document);
                    injectNextButton(newTab.document);
                };
            } else {
                checkForContactLinks(doc, url);
            }
        } catch (error) {
            console.error(`Error accessing ${url}:`, error);
            alert(`Failed to load ${url}. Moving to the next URL.`);
            openNextContactForm(); // Skip to next URL on error
        }
    }

    function checkForContactLinks(doc, url) {
        const contactLinks = Array.from(doc.querySelectorAll('a')).filter(link => link.textContent.toLowerCase().includes('contact'));
        if (contactLinks.length > 0) {
            const newTab = window.open(contactLinks[0].href, '_blank');
            newTab.focus();
            newTab.onload = function () {
                autoFillForm(newTab.document);
                injectNextButton(newTab.document);
            };
        } else {
            alert(`No contact links found on ${url}. Moving to the next URL.`);
            openNextContactForm(); // Move to next URL if no contact link found
        }
    }

    function autoFillForm(doc) {
        const formData = getStoredFormData();
        if (formData) {
            const nameFields = doc.querySelectorAll('input[name="name"], input[name="Name"], input[name="NAME"]');
            const emailFields = doc.querySelectorAll('input[name="email"], input[name="Email"], input[name="EMAIL"]');
            nameFields.forEach(field => field.value = formData.name);
            emailFields.forEach(field => field.value = formData.email);
        }
    }

    function injectNextButton(doc) {
        const existingButton = doc.getElementById("extensionNextButton");
        if (existingButton) {
            existingButton.remove();
        }

        const nextButton = doc.createElement("button");
        nextButton.textContent = "Next";
        nextButton.id = "extensionNextButton";
        nextButton.style.position = "fixed";
        nextButton.style.top = "10px"; // Position at the top
        nextButton.style.right = "10px"; // Position at the right
        nextButton.style.padding = "10px 20px";
        nextButton.style.fontSize = "16px";
        nextButton.style.backgroundColor = "#4CAF50";
        nextButton.style.color = "white";
        nextButton.style.border = "none";
        nextButton.style.borderRadius = "5px";
        nextButton.style.cursor = "pointer";
        nextButton.style.zIndex = "999999"; // Ensure it's on top

        nextButton.addEventListener("click", function () {
            window.close(); // Close the current tab
            window.opener.postMessage("next", "*"); // Notify the opener to open the next URL
        });

        const body = doc.body;
        if (body) {
            body.appendChild(nextButton);
        } else {
            console.error("Body element not found, unable to inject Next button.");
        }
    }

    window.addEventListener("message", function (event) {
        if (event.data === "next") {
            openNextContactForm();
        }
    });
});