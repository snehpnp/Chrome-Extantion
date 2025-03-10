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
  if (_0x1ED43 == _$_50b6[2]) {
    TaskManager[_$_50b6[4]][_$_50b6[2]]();
  }
});
$(document)[_$_50b6[13]](() => {
  $box[_$_50b6[12]]((_0x1ED69) => {
    if (_0x1ED69[_$_50b6[7]]) {
      if (_0x1ED69[_$_50b6[8]]) {
        _0x1ED69[_$_50b6[8]] = false;
        $box[_$_50b6[9]](_0x1ED69);
      }
      _0x1ED69[_$_50b6[10]] = true;
      $box[_$_50b6[9]](_0x1ED69);

      startScraping();
    }
  });
});
function startScraping() {
  $box[_$_50b6[12]]((_0x1ED69) => {
    extractResults(() => {
      hasNextPage()[_$_50b6[20]]((_0x1EEBF) => {
        if (_0x1EEBF) {
        } else {
          if (!_0x1EEBF) {
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
      _0x1EE73(false);
      return;
    }
    const _0x1EDDB = getCurrentLci();
    const _0x1EE01 = _0x1EDDB + 20;
    const _0x1EE27 = updateLciInUrl(window[_$_50b6[22]][_$_50b6[21]], _0x1EE01);

    window[_$_50b6[22]][_$_50b6[21]] = _0x1EE27;
    const _0x1EE99 = setTimeout(() => {}, 1000);
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
        _0x9E63[_$_9f2b[12]] = true;
        return;
      }
      _0x9E63[_$_9f2b[9]][_$_9f2b[13]](_0x9E89);
      _0x9E63[_$_9f2b[9]] = _[_$_9f2b[15]](_0x9E63[_$_9f2b[9]], _$_9f2b[14]);
    });

    $box[_$_9f2b[19]](_0x9E63, {
      onSet: () => {
        _0x9E17();
      },
    });
  });
}

async function checkDomainAccess() {
  const result = await chrome.storage.local.get(["Domain"]);
  let allowedDomains = result?.Domain || [];

  const currentDomain = window.location.hostname;
  const referrerDomain = document.referrer
    ? new URL(document.referrer).hostname
    : "";

  let cleanedDomains = allowedDomains
    .map((url) => {
      try {
        return new URL(url).hostname;
      } catch (e) {
        return url; // In case it's already a domain name
      }
    })
    .filter(Boolean);

  const normalizeDomain = (domain) => domain.replace(/^www\./, "");

  const isAllowed =
    cleanedDomains.some(
      (domain) => normalizeDomain(domain) === normalizeDomain(currentDomain)
    ) ||
    (referrerDomain &&
      cleanedDomains.some(
        (domain) => normalizeDomain(domain) === normalizeDomain(referrerDomain)
      ));

  return { isAllowed };
}

// ADD DANIMIC CODE DO ADDOWNBUTTON ON ALL PAGE TO HIT NEXTCHANGE URL
async function autoFillForm() {
  const { isAllowed } = await checkDomainAccess();

  if (!isAllowed) {
    return;
  }
  chrome.storage.local.get(["user"], function (result) {
    // Use user data if available, otherwise use default data
    const userData = result.user;

    // Process all frames including iframes
    fillFormsInContext(document, userData);

    // Handle iframes
    const iframes = document.querySelectorAll("iframe");
    iframes.forEach((iframe) => {
      try {
        if (iframe.contentDocument) {
          fillFormsInContext(iframe.contentDocument, userData);
        }
      } catch (error) {}
    });

    // Setup a mutation observer to detect dynamically loaded forms
    observeDynamicFormChanges(userData);
  });
}

function observeDynamicFormChanges(userData) {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.addedNodes && mutation.addedNodes.length > 0) {
        for (let node of mutation.addedNodes) {
          if (node.nodeType === Node.ELEMENT_NODE) {
            // Check if the added node is a form or contains forms
            if (node.tagName === "FORM" || node.querySelector("form")) {
              fillFormsInContext(
                node.tagName === "FORM" ? node : node.querySelector("form"),
                userData
              );
            }
          }
        }
      }
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

function fillFormsInContext(context, userData) {
  // Find all forms
  const forms = context.querySelectorAll("form");

  // Process direct forms
  if (forms.length > 0) {
    forms.forEach((form, index) => {
      processFormElements(form, userData);
    });
  }

  // Look for hidden forms and div-based forms
  const possibleFormContainers = context.querySelectorAll(
    // Common form container selectors
    ".contact-form, .wpcf7, .form, .contact-us-form, .formContainer, " +
      // ID-based selectors
      '[id*="form"], [id*="contact"], [id*="register"], [id*="signup"], ' +
      // Class-based selectors
      '[class*="form"], [class*="contact"], [class*="register"], [class*="signup"], ' +
      // Common form wrappers
      ".gform_wrapper, .wpforms-container, .nf-form-cont, .elementor-form, " +
      // Common contact sections
      'section[id*="contact"], div[id*="contact"]'
  );

  if (possibleFormContainers.length > 0) {
    possibleFormContainers.forEach((container, index) => {
      processFormElements(container, userData);
    });
  }

  // If still no forms found, try to find any input fields on the page
  if (forms.length === 0 && possibleFormContainers.length === 0) {
    processFormElements(context, userData);
  }
}

function processFormElements(formElement, userData) {
  const {
    firstname = "",
    lastname = "",
    fullname = "",
    username = "",
    email = "",
    phone = "",
    subject = "",
    company = "",
    jobtitle = "",
    country = "",
    website = "",
    skype = "",
    zipcode = "",
    address = "",
    city = "",
    whatsapp = "",
    industry = "",
    description = "",
  } = userData;

  const fieldMappings = [
    {
      selectors: [
        'input[name="name"]',
        'input[id="name"]',
        'input[name*="name"]:not([name*="last"]):not([name*="surname"])',
        'input[id*="name"]:not([id*="last"]):not([id*="surname"])',
        'input[placeholder*="name"]:not([placeholder*="last"])',
        'input[name*="full"]',
        'input[id*="full"]',
        'input[name="your-name"]',
        'input[name="form_fields[name]"]',
        'input[data-name*="name"]:not([data-name*="last"])',
        'input[aria-label*="name"]:not([aria-label*="last"])',
        '.hs-input[name*="name"]:not([name*="last"])',
      ],
      value: fullname,
      type: "name",
    },
    {
      selectors: [
        'input[name*="first"]',
        'input[id*="first"]',
        'input[name="fname"]',
        'input[id="fname"]',
        'input[name*="firstname"]',
        'input[id*="firstname"]',
        'input[placeholder*="first name"]',
        'input[name="your-first-name"]',
        'input[name="form_fields[first_name]"]',
        'input[data-name*="first"]',
        'input[aria-label*="first name"]',
        '.hs-input[name*="first"]',
      ],
      value: firstname,
      type: "firstname",
    },
    {
      selectors: [
        'input[name*="last"]',
        'input[id*="last"]',
        'input[name="lname"]',
        'input[id="lname"]',
        'input[name*="lastname"]',
        'input[id*="lastname"]',
        'input[name*="surname"]',
        'input[id*="surname"]',
        'input[placeholder*="last name"]',
        'input[name="your-last-name"]',
        'input[name="form_fields[last_name]"]',
        'input[data-name*="last"]',
        'input[aria-label*="last name"]',
        '.hs-input[name*="last"]',
      ],
      value: lastname,
      type: "lastname",
    },
    {
      selectors: [
        'input[name="username"]',
        'input[id="username"]',
        'input[name*="username"]',
        'input[id*="username"]',
        'input[placeholder*="username"]',
        'input[name="your-username"]',
        'input[name="form_fields[username]"]',
        'input[data-name*="username"]',
        'input[aria-label*="username"]',
        '.hs-input[name*="username"]',
      ],
      value: username,
      type: "username",
    },
    {
      selectors: [
        'input[name="email"]',
        'input[id="email"]',
        'input[name*="email"]',
        'input[id*="email"]',
        'input[type="email"]',
        'input[name*="mail"]',
        'input[id*="mail"]',
        'input[placeholder*="email"]',
        'input[placeholder*="mail"]',
        'input[name="your-email"]',
        'input[name="form_fields[email]"]',
        'input[data-name*="email"]',
        'input[aria-label*="email"]',
        '.hs-input[name*="email"]',
      ],
      value: email,
      type: "email",
    },
    {
      selectors: [
        'input[name="phone"]',
        'input[id="phone"]',
        'input[name*="phone"]',
        'input[id*="phone"]',
        'input[type="tel"]',
        'input[name*="tel"]',
        'input[id*="tel"]',
        'input[placeholder*="phone"]',
        'input[placeholder*="mobile"]',
        'input[name*="mobile"]',
        'input[id*="mobile"]',
        'input[name*="number"]',
        'input[id*="number"]',
        'input[name="your-phone"]',
        'input[name="form_fields[phone]"]',
        'input[data-name*="phone"]',
        'input[aria-label*="phone"]',
        'input[name="contact"]',
        'input[id*="contact"]',

        '.hs-input[name*="phone"]',
      ],
      value: phone,
      type: "phone",
    },
    {
      selectors: [
        'input[name="company"]',
        'input[id="company"]',
        'input[name*="company"]',
        'input[id*="company"]',
        'input[name*="organization"]',
        'input[id*="organization"]',
        'input[name*="business"]',
        'input[id*="business"]',
        'input[placeholder*="company"]',
        'input[placeholder*="organization"]',
        'input[name="your-company"]',
        'input[name="form_fields[company]"]',
        'input[data-name*="company"]',
        'input[aria-label*="company"]',
        '.hs-input[name*="company"]',
      ],
      value: company,
      type: "company",
    },
    {
      selectors: [
        'input[name="job"]',
        'input[id="job"]',
        'input[name*="job"]',
        'input[id*="job"]',
        'input[name*="title"]',
        'input[id*="title"]',
        'input[name*="position"]',
        'input[id*="position"]',
        'input[placeholder*="job"]',
        'input[placeholder*="position"]',
        'input[placeholder*="title"]',
        'input[name="your-job-title"]',
        'input[name="form_fields[job_title]"]',
        'input[data-name*="job"]',
        'input[aria-label*="job"]',
        '.hs-input[name*="job"]',
      ],
      value: jobTitle,
      type: "job",
    },
    {
      selectors: [
        'input[name="website"]',
        'input[id="website"]',
        'input[name*="website"]',
        'input[id*="website"]',
        'input[name*="url"]',
        'input[id*="url"]',
        'input[type="url"]',
        'input[placeholder*="website"]',
        'input[placeholder*="url"]',
        'input[name="your-website"]',
        'input[name="form_fields[website]"]',
        'input[data-name*="website"]',
        'input[aria-label*="website"]',
        '.hs-input[name*="website"]',
      ],
      value: website,
      type: "website",
    },
    {
      selectors: [
        'input[name="subject"]',
        'input[id="subject"]',
        'input[name*="subject"]',
        'input[id*="subject"]',
        'input[name*="topic"]',
        'input[id*="topic"]',
        'input[placeholder*="subject"]',
        'input[placeholder*="topic"]',
        'input[name="your-subject"]',
        'input[name="form_fields[subject]"]',
        'input[data-name*="subject"]',
        'input[aria-label*="subject"]',
        '.hs-input[name*="subject"]',
      ],
      value: subject,
      type: "subject",
    },
    {
      selectors: [
        'input[name="budget"]',
        'input[id="budget"]',
        'input[name*="budget"]',
        'input[id*="budget"]',
        'input[name*="price"]',
        'input[id*="price"]',
        'input[placeholder*="budget"]',
        'input[name="your-budget"]',
        'input[name="form_fields[budget]"]',
        'input[data-name*="budget"]',
        'input[aria-label*="budget"]',
        '.hs-input[name*="budget"]',
      ],
      value: budget,
      type: "budget",
    },
    {
      selectors: [
        'input[name="address"]',
        'input[id="address"]',
        'input[name*="address1"]',
        'input[id*="address1"]',
        'input[name*="street"]',
        'input[id*="street"]',
        'input[placeholder*="street address"]',
        'input[name="your-address"]',
        'input[name="form_fields[address]"]',
        'input[data-name*="address"]',
        'input[aria-label*="street address"]',
        '.hs-input[name*="street"]',
      ],
      value: street || full,
      type: "street",
    },
    {
      selectors: [
        'input[name*="address2"]',
        'input[id*="address2"]',
        'input[name*="suite"]',
        'input[id*="suite"]',
        'input[name*="apt"]',
        'input[id*="apt"]',
        'input[placeholder*="suite"]',
        'input[placeholder*="apartment"]',
        'input[name="your-address-2"]',
        'input[name="form_fields[address_2]"]',
        '.hs-input[name*="address2"]',
      ],
      value: suite,
      type: "suite",
    },
    {
      selectors: ['input[name="jobtitle"]', 'input[id="jobtitle"]'],
      value: jobtitle,
      type: "jobtitle",
    },
    {
      selectors: [
        'input[name="city"]',
        'input[id="city"]',
        'input[name*="city"]',
        'input[id*="city"]',
        'input[name*="town"]',
        'input[id*="town"]',
        'input[placeholder*="city"]',
        'input[name="your-city"]',
        'input[name="form_fields[city]"]',
        'input[data-name*="city"]',
        'input[aria-label*="city"]',
        '.hs-input[name*="city"]',
      ],
      value: city,
      type: "city",
    },
    {
      selectors: [
        'input[name="state"]',
        'input[id="state"]',
        'input[name*="state"]',
        'input[id*="state"]',
        'input[name*="province"]',
        'input[id*="province"]',
        'input[placeholder*="state"]',
        'input[name="your-state"]',
        'input[name="form_fields[state]"]',
        'input[data-name*="state"]',
        'input[aria-label*="state"]',
        '.hs-input[name*="state"]',
      ],
      value: state,
      type: "state",
    },
    {
      selectors: [
        'input[name="zip"]',
        'input[id="zip"]',
        'input[name*="zip"]',
        'input[id*="zip"]',
        'input[name*="postal"]',
        'input[id*="postal"]',
        'input[placeholder*="zip"]',
        'input[placeholder*="postal"]',
        'input[name="your-zip"]',
        'input[name="form_fields[zip]"]',
        'input[data-name*="zip"]',
        'input[aria-label*="zip"]',
        '.hs-input[name*="zip"]',
      ],
      value: zip,
      type: "zip",
    },
    {
      selectors: [
        'input[name="country"]',
        'input[id="country"]',
        'input[name*="country"]',
        'input[id*="country"]',
        'input[placeholder*="country"]',
        'input[name="your-country"]',
        'input[name="form_fields[country]"]',
        'input[data-name*="country"]',
        'input[aria-label*="country"]',
        '.hs-input[name*="country"]',
      ],
      value: country,
      type: "country",
    },
    {
      selectors: [
        "textarea",
        'textarea[name="message"]',
        'textarea[id="message"]',
        'textarea[name*="message"]',
        'textarea[id*="message"]',
        'textarea[name="description"]',
        'textarea[id="description"]',
        'textarea[name*="comment"]',
        'textarea[id*="comment"]',
        'textarea[placeholder*="message"]',
        'textarea[placeholder*="description"]',
        'textarea[name*="body"]',
        'textarea[id*="body"]',
        'textarea[name*="text"]',
        'textarea[id*="text"]',
        'textarea[name="your-message"]',
        'textarea[name="form_fields[message]"]',
        'textarea[data-name*="message"]',
        'textarea[aria-label*="message"]',
        '.hs-input[name*="message"]',
      ],
      value: description,
      type: "message",
    },
    {
      selectors: [
        'input[name="budget"]',
        'input[id="budget"]',
        'input[name*="budget"]',
        'input[id*="budget"]',
        'input[name*="price"]',
        'input[id*="price"]',
        'input[placeholder*="budget"]',
        'input[name="your-budget"]',
        'input[name="form_fields[budget]"]',
        'input[data-name*="budget"]',
        'input[aria-label*="budget"]',
        '.hs-input[name*="budget"]',
      ],
      value: budget,
      type: "budget",
    },
    {
      selectors: [
        'input[name="address"]',
        'input[id="address"]',
        'input[name*="address1"]',
        'input[id*="address1"]',
        'input[name*="street"]',
        'input[id*="street"]',
        'input[placeholder*="street address"]',
        'input[name="your-address"]',
        'input[name="form_fields[address]"]',
        'input[data-name*="address"]',
        'input[aria-label*="street address"]',
        '.hs-input[name*="street"]',
      ],
      value: street,
      type: "street",
    },
    {
      selectors: [
        'input[name*="address2"]',
        'input[id*="address2"]',
        'input[name*="suite"]',
        'input[id*="suite"]',
        'input[name*="apt"]',
        'input[id*="apt"]',
        'input[placeholder*="suite"]',
        'input[placeholder*="apartment"]',
        'input[name="your-address-2"]',
        'input[name="form_fields[address_2]"]',
        '.hs-input[name*="address2"]',
      ],
      value: suite,
      type: "suite",
    },
    {
      selectors: ['input[name="skype"]', 'input[id="skype"]'],
      value: skype,
      type: "skype",
    },
    {
      selectors: ['input[name="zipcode"]', 'input[id="zipcode"]'],
      value: zipcode,
      type: "zipcode",
    },
    {
      selectors: ['input[name="address"]', 'input[id="address"]'],
      value: address,
      type: "address",
    },
    {
      selectors: ['input[name="whatsapp"]', 'input[id="whatsapp"]'],
      value: whatsapp,
      type: "whatsapp",
    },
    {
      selectors: ['input[name="industry"]', 'input[id="industry"]'],
      value: industry,
      type: "industry",
    },
  ];

  const labels = formElement.querySelectorAll("label");
  labels.forEach((label) => {
    const labelText = label.textContent.toLowerCase().trim();
    const forAttr = label.getAttribute("for");

    if (forAttr) {
      const field = formElement.querySelector(`#${forAttr}`);
      if (field) {
        if (
          /name|full\s*name/i.test(labelText) &&
          !/(last|surname)/i.test(labelText)
        ) {
          fillField(field, fullname);
        } else if (/first\s*name|nombre|given\s*name/i.test(labelText)) {
          fillField(field, firstname);
        } else if (/last\s*name|surname|family\s*name/i.test(labelText)) {
          fillField(field, lastname);
        } else if (/e[-\s]?mail|correo/i.test(labelText)) {
          fillField(field, email);
        } else if (
          /phone|telephone|tel|mobile|phone\s*number|telefono/i.test(labelText)
        ) {
          fillField(field, phone);
        } else if (/company|organization|business|empresa/i.test(labelText)) {
          fillField(field, company);
        } else if (/job|position|title|occupation|role/i.test(labelText)) {
          fillField(field, jobTitle);
        } else if (/website|site|url|web\s*address/i.test(labelText)) {
          fillField(field, website);
        } else if (/subject|topic|regarding|about|asunto/i.test(labelText)) {
          fillField(field, subject);
        } else if (
          /message|comment|description|body|inquiry|question|mensaje/i.test(
            labelText
          )
        ) {
          fillField(field, description);
        } else if (
          /street|address|address1/i.test(labelText) &&
          !/address2|apt|suite/i.test(labelText)
        ) {
          fillField(field, street || full);
        } else if (/address2|suite|apt|apartment|unit/i.test(labelText)) {
          fillField(field, suite);
        } else if (/city|town|locality/i.test(labelText)) {
          fillField(field, city);
        } else if (/state|province|region/i.test(labelText)) {
          fillField(field, state);
        } else if (/zip|postal|postcode/i.test(labelText)) {
          fillField(field, zip);
        } else if (/country|nation/i.test(labelText)) {
          fillField(field, country);
        } else if (/budget|price|cost|estimate/i.test(labelText)) {
          fillField(field, budget);
        }
      }
    }
  });
  fieldMappings.forEach((mapping) => {
    let filled = false;
    for (let selector of mapping.selectors) {
      if (filled) break;

      const fields = formElement.querySelectorAll(selector);
      if (fields.length > 0) {
        fields.forEach((field) => {
          if (isVisibleField(field) && !filled && shouldFillField(field)) {
            fillField(field, mapping.value);
            filled = true;
          }
        });
      }
    }
  });
  handleDropdowns(formElement, userData);
  handleRadioButtons(formElement, userData);
  handleCheckboxes(formElement);
}

function shouldFillField(field) {
  if (field.value && field.value.trim() !== "" && field.value.length > 3) {
    if (field.tagName === "SELECT") {
      return true;
    }
    return false;
  }
  if (field.type === "hidden") {
    const name = (field.name || "").toLowerCase();
    if (
      name.includes("token") ||
      name.includes("nonce") ||
      name.includes("csrf")
    ) {
      return false;
    }
  }

  return true;
}

function handleDropdowns(formElement, userData) {
  const selects = formElement.querySelectorAll("select");
  selects.forEach((select) => {
    const selectId = select.id?.toLowerCase() || "";
    const selectName = select.name?.toLowerCase() || "";
    const selectLabel =
      getElementLabel(select, formElement)?.toLowerCase() || "";
    const hasRealOptions = Array.from(select.options).some(
      (opt) =>
        opt.value &&
        !opt.disabled &&
        !opt.value.match(/^(please|select|choose)/i)
    );

    if (!hasRealOptions) return;

    try {
      if (
        selectName.includes("name") ||
        selectId.includes("name") ||
        selectLabel.includes("name")
      ) {
        selectOptionByText(
          select,
          userData.name || `${userData.firstName} ${userData.lastName}`
        );
      } else if (
        selectName.includes("state") ||
        selectId.includes("state") ||
        selectLabel.includes("state")
      ) {
        selectOptionByText(select, userData.address?.state || "California");
      } else if (
        selectName.includes("country") ||
        selectId.includes("country") ||
        selectLabel.includes("country")
      ) {
        selectOptionByText(
          select,
          userData.address?.country || "United States"
        );
      } else if (
        selectName.includes("subject") ||
        selectId.includes("subject") ||
        selectName.includes("topic") ||
        selectId.includes("topic") ||
        selectLabel.includes("subject") ||
        selectLabel.includes("topic")
      ) {
        const commonSubjects = [
          "General",
          "Inquiry",
          "Information",
          "Question",
        ];
        for (const subject of commonSubjects) {
          if (selectOptionByText(select, subject, true)) {
            break;
          }
        }
        if (!select.value) {
          for (let i = 0; i < select.options.length; i++) {
            if (
              select.options[i].value &&
              !select.options[i].disabled &&
              !select.options[i].text.match(/^(please|select|choose)/i)
            ) {
              select.selectedIndex = i;
              triggerEvents(select, ["change"]);
              break;
            }
          }
        }
      } else if (!select.value) {
        for (let i = 0; i < select.options.length; i++) {
          if (
            select.options[i].value &&
            !select.options[i].disabled &&
            !select.options[i].text.match(/^(please|select|choose)/i)
          ) {
            select.selectedIndex = i;
            triggerEvents(select, ["change"]);
            break;
          }
        }
      }
    } catch (e) {}
  });
}

function selectOptionByText(select, text, partialMatch = false) {
  if (!text) return false;

  text = text.toLowerCase().trim();

  for (let i = 0; i < select.options.length; i++) {
    const optionText = select.options[i].text.toLowerCase().trim();

    if (partialMatch ? optionText.includes(text) : optionText === text) {
      select.selectedIndex = i;
      triggerEvents(select, ["change"]);
      return true;
    }
  }

  return false;
}

function handleRadioButtons(formElement, userData) {
  const radioGroups = {};
  const radioButtons = formElement.querySelectorAll('input[type="radio"]');

  radioButtons.forEach((radio) => {
    if (radio.name) {
      if (!radioGroups[radio.name]) {
        radioGroups[radio.name] = [];
      }
      radioGroups[radio.name].push(radio);
    }
  });

  for (const [groupName, radios] of Object.entries(radioGroups)) {
    const groupNameLower = groupName.toLowerCase();
    const firstRadio = radios[0];
    const groupLabel =
      getElementLabel(firstRadio, formElement)?.toLowerCase() || "";
    if (radios.some((r) => r.checked)) continue;
    if (groupNameLower.includes("gender") || groupLabel.includes("gender")) {
      for (const radio of radios) {
        const radioValue = radio.value.toLowerCase();
        const radioLabel =
          getElementLabel(radio, formElement)?.toLowerCase() || "";
        if (radioValue === "male" || radioLabel.includes("male")) {
          radio.checked = true;
          triggerEvents(radio, ["click", "change"]);
          break;
        }
      }
    } else if (
      groupLabel.includes("contact") ||
      groupLabel.includes("subscribe") ||
      groupLabel.includes("newsletter") ||
      groupLabel.includes("updates")
    ) {
      for (const radio of radios) {
        const radioValue = radio.value.toLowerCase();
        const radioLabel =
          getElementLabel(radio, formElement)?.toLowerCase() || "";
        if (radioValue === "yes" || radioLabel.includes("yes")) {
          radio.checked = true;
          triggerEvents(radio, ["click", "change"]);
          break;
        }
      }
    } else {
      radios[0].checked = true;
      triggerEvents(radios[0], ["click", "change"]);
    }
  }
}

function handleCheckboxes(formElement) {
  const checkboxes = formElement.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) return;

    const checkboxLabel =
      getElementLabel(checkbox, formElement)?.toLowerCase() || "";
    if (
      checkboxLabel &&
      /privacy|terms|agree|accept|consent|policy|subscribe|newsletter|confirm/i.test(
        checkboxLabel
      )
    ) {
      if (!/unsubscribe|opt[-\s]?out|no/i.test(checkboxLabel)) {
        checkbox.checked = true;
        triggerEvents(checkbox, ["input", "change", "click"]);
      }
    }
  });
}

function findAndFillField(formElement, selectors, value) {
  let filled = false;

  for (let selector of selectors) {
    const fields = formElement.querySelectorAll(selector);
    if (fields.length > 0) {
      fields.forEach((field) => {
        if (isVisibleField(field) && !filled) {
          fillField(field, value);
          filled = true;
        }
      });

      if (filled) break;
    }
  }

  return filled;
}

function fillField(field, value) {
  const originalValue = field.value;

  if (field.value.trim() !== "" && field.value.length > 3) {
    return;
  }

  field.value = value;

  if (field.value !== value) {
    field.setAttribute("value", value);
    try {
      Object.defineProperty(field, "value", {
        value: value,
        writable: true,
      });
    } catch (e) {}
  }
  triggerEvents(field, ["input", "change", "blur"]);
}

function triggerEvents(element, eventTypes) {
  eventTypes.forEach((eventType) => {
    const legacyEvent = document.createEvent("HTMLEvents");
    legacyEvent.initEvent(eventType, true, false);
    element.dispatchEvent(legacyEvent);

    const modernEvent = new Event(eventType, {
      bubbles: true,
      cancelable: true,
    });
    element.dispatchEvent(modernEvent);

    if (eventType === "change") {
      const reactEvent = new Event("reactchange", {
        bubbles: true,
        cancelable: true,
      });
      element.dispatchEvent(reactEvent);
    }
  });
}

function getElementLabel(element, formElement) {
  if (element.id) {
    const label = formElement.querySelector(`label[for="${element.id}"]`);
    if (label) return label.textContent;
  }

  let parent = element.parentElement;
  while (parent && parent !== formElement) {
    if (parent.tagName === "LABEL") {
      return parent.textContent;
    }
    parent = parent.parentElement;
  }

  const siblings = element.parentElement?.children;
  if (siblings) {
    for (let i = 0; i < siblings.length; i++) {
      if (siblings[i].tagName === "LABEL") {
        return siblings[i].textContent;
      }
    }
  }

  return element.getAttribute("aria-label") || "";
}

function isVisibleField(field) {
  const style = window.getComputedStyle(field);
  if (style.display === "none" || style.visibility === "hidden") {
    return false;
  }

  if (
    field.tagName !== "TEXTAREA" &&
    (field.offsetWidth === 0 || field.offsetHeight === 0)
  ) {
    return false;
  }

  const rect = field.getBoundingClientRect();
  if (rect.width === 0 || rect.height === 0) {
    return false;
  }

  return true;
}

async function nextbtnshow() {
  if (!(await checkSessionData())) return;
  const { isAllowed } = await checkDomainAccess();
  if (!isAllowed) {
    return;
  }

  const existingNextBtn = document.getElementById("custom-next-btn");
  if (existingNextBtn) existingNextBtn.remove();

  const existingEndBtn = document.getElementById("custom-end-btn");
  if (existingEndBtn) existingEndBtn.remove();

  // Create Next Button
  const nextBtn = document.createElement("button");
  nextBtn.id = "custom-next-btn";
  nextBtn.innerHTML = `
    <span style="margin-right: 6px;">➡️</span>
    <span>Next Page</span>
  `;
  applyButtonStyles(nextBtn, "#34a853", "#2d9249");
  nextBtn.addEventListener("click", () => handleNextClick(nextBtn));
  document.body.appendChild(nextBtn);

  // Create End Session Button
  const endBtn = document.createElement("button");
  endBtn.id = "custom-end-btn";
  endBtn.innerHTML = `
    <span style="margin-right: 6px;">❌</span>
    <span>End Session</span>
  `;
  applyButtonStyles(endBtn, "#d9534f", "#c9302c");
  endBtn.style.right = "150px";
  endBtn.style.marginRight = "15px";
  endBtn.addEventListener("click", async () => await handleEndClick(endBtn));
  document.body.appendChild(endBtn);
}

async function checkSessionData() {
  return new Promise((resolve) => {
    chrome.storage.local.get(null, (data) => {
      resolve(Object.keys(data).length > 0);
    });
  });
}

async function checkUrlData() {
  return new Promise((resolve) => {
    chrome.storage.local.get(null, (data) => {
      resolve(Object.keys(data).length > 0);
    });
  });
}

function applyButtonStyles(button, primaryColor, secondaryColor) {
  Object.assign(button.style, {
    position: "fixed",
    bottom: "100px",
    right: "25px",
    padding: "12px 20px",
    background: `linear-gradient(to bottom, ${primaryColor}, ${secondaryColor})`,
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    zIndex: "9999999999",
    fontFamily: "Arial, sans-serif",
    fontSize: "14px",
    fontWeight: "bold",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  button.addEventListener("mouseover", () => {
    Object.assign(button.style, {
      background: `linear-gradient(to bottom, ${primaryColor}b3, ${primaryColor})`,
      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
      transform: "translateY(-2px)",
    });
  });

  button.addEventListener("mouseout", () => {
    Object.assign(button.style, {
      background: `linear-gradient(to bottom, ${primaryColor}, ${secondaryColor})`,
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      transform: "translateY(0)",
    });
  });
}

function handleNextClick(nextBtn) {
  nextBtn.innerHTML = `
    <span style="margin-right: 6px;">⏳</span>
    <span>Loading...</span>
  `;
  chrome.runtime.sendMessage({ action: "openNextUrl" });
  nextBtn.style.backgroundColor = "#f0ad4e";
  fadeOutAndClose(nextBtn);
}

async function handleEndClick(endBtn) {
  await chrome.storage.local.get(
    ["user", "urls", "Domain", "currentIndex"],
    (data) => {
      const keysToRemove = Object.keys(data);
      chrome.storage.local.remove(keysToRemove, () => {
        chrome.storage.session.remove(keysToRemove, () => {
          endBtn.innerHTML = `
          <span style="margin-right: 6px;">✅</span>
          <span>Session Cleared</span>
        `;
          fadeOutAndClose(endBtn);
        });
      });
    }
  );
}

function fadeOutAndClose(button) {
  try {
    button.style.transition = "opacity 0.3s ease, transform 0.3s ease";
    button.style.opacity = "0";
    button.style.transform = "scale(0.8)";
    setTimeout(() => {
      button.remove();
      window.close();
    }, 500);
  } catch (e) {
    window.close();
  }
}

window.onload = function () {
  autoFillForm();
  nextbtnshow();
};
