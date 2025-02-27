var _$_50b6 = [
  "Message received : ",
  "log",
  "stop",
  "Stopping",
  "container",
  "on",
  "Content.js loaded",
  "status",
  "isStop",
  "setLocal",
  "keywordWait",
  "Starting Process",
  "getLocal",
  "ready",
  "** Extracting data...",
  "** End of list reached, opening new search query...",
  "shift",
  "taskList",
  "start",
  "send",
  "then",
  "href",
  "location",
  "** Navigating to next page:",
  "search",
  "lci",
  "get",
  "set",
  "searchParams",
  "toString",
  "div.LOBMz > div:last-child > div > button",
  "querySelector",
  "trim",
  "innerText",
  "Next >",
  "** Next button not found. Assuming no next page.",
  "** Page did not load in time, assuming no next page.",
];
$box[_$_50b6[5]]((_0x1ED43, _0x1ED1D) => {
  console[_$_50b6[1]](_$_50b6[0] + _0x1ED43);
  if (_0x1ED43 == _$_50b6[2]) {
    console[_$_50b6[1]](_$_50b6[3]);
    TaskManager[_$_50b6[4]][_$_50b6[2]]();
  }
});
$(document)[_$_50b6[13]](() => {
  // console[_$_50b6[1]](_$_50b6[6]);
  $box[_$_50b6[12]]((_0x1ED69) => {
    if (_0x1ED69[_$_50b6[7]]) {
      if (_0x1ED69[_$_50b6[8]]) {
        _0x1ED69[_$_50b6[8]] = false;
        $box[_$_50b6[9]](_0x1ED69);
      }
      _0x1ED69[_$_50b6[10]] = true;
      $box[_$_50b6[9]](_0x1ED69);
      console[_$_50b6[1]](_$_50b6[11]);
      startScraping();
    }
  });
});
function startScraping() {
  $box[_$_50b6[12]]((_0x1ED69) => {
    console[_$_50b6[1]](_$_50b6[14]);
    extractResults(() => {
      hasNextPage()[_$_50b6[20]]((_0x1EEBF) => {
        if (_0x1EEBF) {
        } else {
          if (!_0x1EEBF) {
            console[_$_50b6[1]](_$_50b6[15]);
            _0x1ED69[_$_50b6[17]][_$_50b6[16]]();
            $box[_$_50b6[9]](_0x1ED69);
            $box[_$_50b6[19]](_$_50b6[18]);
          }
        }
      });
    });
  });
}
function goToNextPage() {
  $box[_$_50b6[12]]((_0x1ED69) => {
    const _0x1EDDB = getCurrentLci();
    const _0x1EE01 = _0x1EDDB + 20;
    const _0x1EE27 = updateLciInUrl(window[_$_50b6[22]][_$_50b6[21]], _0x1EE01);
    console[_$_50b6[1]](_$_50b6[23], _0x1EE27);
    window[_$_50b6[22]][_$_50b6[21]] = _0x1EE27;
  });
}
function getCurrentLci() {
  const _0x1EDB5 = new URLSearchParams(window[_$_50b6[22]][_$_50b6[24]]);
  const _0x1ED8F = _0x1EDB5[_$_50b6[26]](_$_50b6[25]);
  return _0x1ED8F ? parseInt(_0x1ED8F) : 0;
}
function updateLciInUrl(_0x1EF31, _0x1EEE5) {
  let _0x1EF0B = new URL(_0x1EF31);
  _0x1EF0B[_$_50b6[28]][_$_50b6[27]](_$_50b6[25], _0x1EEE5);
  return _0x1EF0B[_$_50b6[29]]();
}
function hasNextPage() {
  return new Promise((_0x1EE73) => {
    const _0x1EE4D = document[_$_50b6[31]](_$_50b6[30]);
    if (!_0x1EE4D || _0x1EE4D[_$_50b6[33]][_$_50b6[32]]() !== _$_50b6[34]) {
      console[_$_50b6[1]](_$_50b6[35]);
      _0x1EE73(false);
      return;
    }
    const _0x1EDDB = getCurrentLci();
    const _0x1EE01 = _0x1EDDB + 20;
    const _0x1EE27 = updateLciInUrl(window[_$_50b6[22]][_$_50b6[21]], _0x1EE01);
    console[_$_50b6[1]](_$_50b6[23], _0x1EE27);
    window[_$_50b6[22]][_$_50b6[21]] = _0x1EE27;
    const _0x1EE99 = setTimeout(() => {
      console[_$_50b6[1]](_$_50b6[36]);
    }, 1000);
  });
}

var _$_5920 = [
  ")",
  "querySelector",
  "div.DyM7H",
  "div.deyx8d > div > div",
  "push",
  "log",
  "child1",
  "map",
  "child2",
  "random",
  "floor",
  "has",
  "add",
  "length",
  "min",
  "No data at lead# :",
];
var startTime = new Date();
function scrollThroughParentsAndStoreSelectors() {
  let _0x75D9 = [];
  for (let _0x7465 = 1; _0x7465 <= 39; _0x7465 += 2) {
    let _0x75BA =
      ".YhtaGd.aQOEkf .jq95K c-wiz > div > div > div.Jtakfe > c-wiz > div > div:nth-child(" +
      _0x7465 +
      _$_5920[0];
    let _0x759B = document[_$_5920[1]](_0x75BA);
    if (_0x759B) {
      let _0x755D = _0x759B[_$_5920[1]](_$_5920[2]);
      let _0x757C = _0x759B[_$_5920[1]](_$_5920[3]);
      _0x75D9[_$_5920[4]]({ child1: _0x757C, child2: _0x755D });
    }
  }
  console[_$_5920[5]](_0x75D9);
  return _0x75D9;
}
let cidCounter = 1000;
async function extractResults(_0x73E9) {
  let _0x7500 = [];
  const _0x74C2 = scrollThroughParentsAndStoreSelectors();
  const _0x74A3 = _0x74C2[_$_5920[7]]((_0x753E) => {
    return _0x753E[_$_5920[6]];
  });
  const _0x74E1 = _0x74C2[_$_5920[7]]((_0x753E) => {
    return _0x753E[_$_5920[8]];
  });
  const _0x751F = new Set();
  function _0x7446() {
    let _0x7408;
    do {
      _0x7408 = Math[_$_5920[10]](Math[_$_5920[9]]() * 999000) + 1000;
    } while (_0x751F[_$_5920[11]](_0x7408));
    _0x751F[_$_5920[12]](_0x7408);
    return _0x7408;
  }
  const _0x7484 = Math[_$_5920[14]](
    _0x74A3[_$_5920[13]],
    _0x74E1[_$_5920[13]],
    20
  );
  for (let _0x7465 = 0; _0x7465 < _0x7484; _0x7465++) {
    let _0x7408 = _0x7446();
    let _0x7427 = extractDataFromListing(
      _0x74A3[_0x7465],
      _0x74E1[_0x7465],
      _0x7408
    );
    if (_0x7427) {
      _0x7500[_$_5920[4]](_0x7427);
    } else {
      console[_$_5920[5]](_$_5920[15], _0x7500[_$_5920[13]]);
    }
  }
  setTimeout(saveToLocal, 4000, _0x7500, _0x73E9);
}

var _$_3eea = [
  "",
  "replace",
  ",",
  "split",
  "match",
  "trim",
  "+",
  "%5Bnull,null,null,null,null,64,null,1%5D%5D",
  "&quot;,&quot;",
  "&quot;,null,null,null,",
  "&src=1",
  " ",
  "pop",
  "join",
  "slice",
  "length",
  ", ",
];
function createFormattedUrl(_0x19639) {
  let _0x195D1 = _0x19639[_$_3eea[1]](/^%.@.&quot;/, _$_3eea[0]);
  let _0x1966D = _0x195D1[_$_3eea[3]](_$_3eea[2]);
  let _0x196D5 = _0x1966D[0][_$_3eea[4]](/spp\\u003d([^"]+)/);
  let _0x196A1 = _0x196D5 ? _0x196D5[1] : _$_3eea[0];
  let _0x1959D = _0x1966D[1][_$_3eea[1]](/&quot;/g, _$_3eea[0])[_$_3eea[5]]();
  _0x1959D = encodeURIComponent(_0x1959D)[_$_3eea[1]](/%20/g, _$_3eea[6]);
  let _0x19569 = _$_3eea[7];
  let _0x19605 =
    "https://www.google.com/localservices/prolist?spp=" +
    _0x196A1 +
    _$_3eea[8] +
    _0x1959D +
    _$_3eea[8] +
    _0x1959D +
    _$_3eea[9] +
    _0x19569 +
    _$_3eea[10];
  return _0x19605;
}
function extractAddressComponents(_0x19709) {
  const _0x19875 = /daddr=([^&]+)/;
  const _0x1980D = _0x19709[_$_3eea[4]](_0x19875);
  if (_0x1980D && _0x1980D[1]) {
    const _0x197A5 = _0x1980D[1];
    _0x19709 = decodeURIComponent(_0x197A5[_$_3eea[1]](/%20/g, _$_3eea[11]));
  } else {
    return {
      address: _$_3eea[0],
      city: _$_3eea[0],
      state: _$_3eea[0],
      pincode: _$_3eea[0],
    };
  }
  _0x19709 = _0x19709[_$_3eea[1]](/\+/g, _$_3eea[11]);
  let _0x1973D = _0x19709[_$_3eea[3]](_$_3eea[2]);
  _0x1973D[_$_3eea[12]]()[_$_3eea[5]]();
  let _0x198DD = _0x1973D[_$_3eea[12]]()[_$_3eea[5]]()[_$_3eea[3]](_$_3eea[11]);
  let _0x198A9 = _0x198DD[_$_3eea[14]](0, -1)[_$_3eea[13]](_$_3eea[11]);
  let _0x19841 = _0x198DD[_0x198DD[_$_3eea[15]] - 1];
  let _0x19771 = _0x1973D[_$_3eea[12]]()[_$_3eea[5]]();
  let _0x197D9 = _0x1973D[_$_3eea[13]](_$_3eea[16])[_$_3eea[5]]();
  return {
    address: _0x197D9,
    city: _0x19771,
    state: _0x198A9,
    pincode: _0x19841,
  };
}

function extractDataFromListing(listing, parentElement, cid) {
  try {
    let companyName =
      listing
        .querySelector("div > div.NwqBmc > div:nth-child(1) > div")
        ?.innerText.trim() || "";
    let review =
      listing
        .querySelector(
          "div > div.NwqBmc > div:nth-child(2) > div > div.OJbIQb > div.rGaJuf"
        )
        ?.innerText.trim() || "";
    let category =
      listing
        .querySelector("div > div.NwqBmc > div:nth-child(2) > span")
        ?.innerText.trim() || "";
    let phones =
      listing
        .querySelector(
          "div > div.NwqBmc > div:nth-child(3) > span:nth-child(3)"
        )
        ?.innerText.trim() || "";
    let ratings =
      listing
        .querySelector("div > div.NwqBmc > div:nth-child(2) > div > div.leIgTe")
        ?.innerText.trim() || "";

    let websiteUrl =
      parentElement
        .querySelector("div[data-website-url]")
        ?.getAttribute("data-website-url") || "";
    let mapUrl =
      parentElement.querySelector("div[data-ed]")?.getAttribute("data-ed") ||
      "";

    let AddressUrl = "";
    const mapUrlElement1 = parentElement.querySelector(
      "div > div > div:nth-child(3) > div > a"
    );
    const mapUrlElement2 = parentElement.querySelector(
      "div > div > div:nth-child(2) > div > a"
    );
    const mapUrlElement3 = parentElement.querySelector(
      "div > div > div:nth-child(1) > div > a"
    );

    if (mapUrlElement1 && mapUrlElement1.getAttribute("href")) {
      AddressUrl = mapUrlElement1.getAttribute("href");
    } else if (mapUrlElement2 && mapUrlElement2.getAttribute("href")) {
      AddressUrl = mapUrlElement2.getAttribute("href");
    } else if (mapUrlElement3 && mapUrlElement3.getAttribute("href")) {
      AddressUrl = mapUrlElement3.getAttribute("href");
    }

    mapUrl = createFormattedUrl(mapUrl);

    let phoneNumber =
      parentElement
        .querySelector("a[data-phone-number]")
        ?.getAttribute("data-phone-number") || "";
    let numberRegex = /^[\d\s-()]+$/;

    function parsePhoneNumber(phoneNumber) {
      phoneNumber = phoneNumber.replace(/[^\d+]/g, "");

      if (phoneNumber.length < 10) {
        return { countryCode: "", localNumber: phoneNumber };
      }

      let localNumber = phoneNumber.slice(-10);

      let countryCode = phoneNumber.slice(0, -10).trim();

      if (countryCode.length > 0 && !countryCode.startsWith("+")) {
        countryCode = "+" + countryCode;
      }

      return {
        countryCode: countryCode || "",
        localNumber: localNumber,
      };
    }

    if (!phoneNumber) {
      let match = phones.match(numberRegex);
      if (match) {
        phoneNumber = phones;
      }
    }

    const parsedNumber = parsePhoneNumber(phoneNumber);
    let countryCode = parsedNumber.countryCode;
    phoneNumber = parsedNumber.localNumber;


    let ignoreMatch = ratings.match(
      /\b(Closed|Opens|closed|closes|opens|Open)\b/i
    );
    let service = ignoreMatch ? "" : ratings;

    const resultLocation = extractAddressComponents(AddressUrl);
    let City = "";
    let State = "";
    let address = "";
    let pincode = "";

    if (resultLocation) {
      address = resultLocation.address;
      State = resultLocation.state;
      City = resultLocation.city;
      pincode = resultLocation.pincode;
    }
    service = service.replace(/[()]/g, "");

    let data = {
      cid: cid,
      company_name: companyName || "",
      rating_count: service || "",
      review: review || "",
      category: category || "",
      website: websiteUrl,
      maplink: mapUrl,
      city: City,
      state: State,
      phone: phoneNumber || "",
      address: address || "",
      pincode: pincode || "",
      countryCode: countryCode,
    };

    return data;
  } catch (error) {
    console.error("Error extracting data from listing:", error);
    return null;
  }
}

var _$_9f2b = [
  "keyword",
  "trim",
  "~in~",
  "split",
  "taskList",
  "location",
  "hasValidKey",
  "_auth",
  "length",
  "collect",
  "** Exceeded free quota...",
  "log",
  "showLoginModal",
  "push",
  "company_name",
  "uniqBy",
  "forEach",
  "** Saving Data...",
  "** Data saved successfully...",
  "setLocal",
  "getLocal",
];
function saveToLocal(_0x9E3D, _0x9E17) {
  $box[_$_9f2b[20]]((_0x9E63) => {
    _0x9E3D[_$_9f2b[16]]((_0x9E89) => {
      _0x9E89[_$_9f2b[0]] = _0x9E63[_$_9f2b[4]][0]
        [_$_9f2b[3]](_$_9f2b[2])[0]
        [_$_9f2b[1]]();
      _0x9E89[_$_9f2b[5]] = _0x9E63[_$_9f2b[4]][0]
        [_$_9f2b[3]](_$_9f2b[2])[1]
        [_$_9f2b[1]]();
      if (
        !_0x9E63[_$_9f2b[7]][_$_9f2b[6]] &&
        _0x9E63[_$_9f2b[9]][_$_9f2b[8]] >= 50
      ) {
        console[_$_9f2b[11]](_$_9f2b[10]);
        _0x9E63[_$_9f2b[12]] = true;
        return;
      }
      _0x9E63[_$_9f2b[9]][_$_9f2b[13]](_0x9E89);
      _0x9E63[_$_9f2b[9]] = _[_$_9f2b[15]](_0x9E63[_$_9f2b[9]], _$_9f2b[14]);
    });
    console[_$_9f2b[11]](_$_9f2b[17]);
    $box[_$_9f2b[19]](_0x9E63, {
      onSet: () => {
        console[_$_9f2b[11]](_$_9f2b[18]);
        _0x9E17();
      },
    });
  });
}

// ADD DANIMIC CODE DO ADDOWNBUTTON ON ALL PAGE TO HIT NEXTCHANGE URL
function autoFillForm() {
  chrome.storage.local.get(["user"], function (result) {
    console.log("User Data:--------", result.user);

    let name = result.user.name;
    let email = result.user.email;
    let phone = result.user.phone;
    let description = result.user.description;

    // Find all forms on the page
    let forms = document.querySelectorAll("form");
    if (forms.length === 0) {
      return;
    }

    forms.forEach((form) => {
      let nameInput = form.querySelector(
        'input[name="name"], input[placeholder*="name"], input[type="text"], input[id*="name"]'
      );
      let emailInput = form.querySelector(
        'input[name="email"], input[placeholder*="email"], input[type="email"], input[id*="email"]'
      );

      let phoneInput = form.querySelector(
        'input[name="phone"], input[placeholder*="phone"], input[type="tel"], input[id*="phone"]'
      );

      let descriptionInput = form.querySelector(
        'textarea[name="description"], textarea[placeholder*="message"], textarea[id*="message"]'
      );


      if (nameInput) {
        nameInput.value = name;
        nameInput.dispatchEvent(new Event("input", { bubbles: true }));
        nameInput.dispatchEvent(new Event("change", { bubbles: true }));
      }
      if (emailInput) {
        emailInput.value = email;
        emailInput.dispatchEvent(new Event("input", { bubbles: true }));
        emailInput.dispatchEvent(new Event("change", { bubbles: true }));
      }

      if (phoneInput) {
        phoneInput.value = phone;
        phoneInput.dispatchEvent(new Event("input", { bubbles: true }));
        phoneInput.dispatchEvent(new Event("change", { bubbles: true }));
      }

      if (descriptionInput) {
        descriptionInput.value = description;
        descriptionInput.dispatchEvent(new Event("input", { bubbles: true }));
        descriptionInput.dispatchEvent(new Event("change", { bubbles: true }));
      }


    });
  });
}

// ADD DANIMIC CODE DO ADDOWNBUTTON ON ALL PAGE TO HIT NEXTCHANGE URL



function nextbtnshow() {
  // Create "Next" Button
  const nextBtn = document.createElement("button");

  nextBtn.id = "next-btn";
  nextBtn.innerText = "Next";
  nextBtn.style.position = "fixed";
  nextBtn.style.bottom = "150px";
  nextBtn.style.right = "20px";
  nextBtn.style.padding = "10px 20px";
  nextBtn.style.background = "#28a745";
  nextBtn.style.color = "white";
  nextBtn.style.border = "none";
  nextBtn.style.cursor = "pointer";

  document.body.appendChild(nextBtn);

  // Button Click Function (Now Async)
  nextBtn.addEventListener("click", async function () {
    try {
      const result = await chrome.storage.local.get(["urls", "currentIndex"]);
      console.log("URLs: ", result.urls);

      let urls = result.urls || [];
      let index = result.currentIndex || 0;

      if (index < urls.length - 1) {
        let nextUrl = urls[index + 1];

        await chrome.storage.local.set({ currentIndex: index + 1 });

        // Fetch the next page before redirecting
        const response = await fetch(nextUrl);
        if (!response.ok) {
          throw new Error(`Failed to load ${nextUrl}`);
        }

        const htmlText = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlText, "text/html");

        // Find Contact Us links
        const contactLinks = Array.from(doc.querySelectorAll("a")).filter(
          (link) => link.textContent.toLowerCase().includes("contact")
        );

        if (contactLinks.length > 0) {
          const newTab = window.open(contactLinks[0].href, "_blank");
          if (newTab) {
            newTab.focus();
          } else {
            alert("Popup blocked! Please allow popups for this site.");
          }
        }

        // Redirect to the next URL
        window.location.href = nextUrl;
      } else {
        alert("No more URLs!");
      }
    } catch (error) {
      console.error("Error in Next Button:", error);
    }
  });
}

window.onload = function () {
  autoFillForm();  // Pehla function chalayega
  nextbtnshow();   // Dusra function chalayega
};



