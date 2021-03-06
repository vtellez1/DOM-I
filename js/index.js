const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Nav

let navlinks = document.querySelectorAll("a");

navlinks[0].textContent = siteContent.nav["nav-item-1"];
navlinks[1].textContent = siteContent.nav["nav-item-2"];
navlinks[2].textContent = siteContent.nav["nav-item-3"];
navlinks[3].textContent = siteContent.nav["nav-item-4"];
navlinks[4].textContent = siteContent.nav["nav-item-5"];
navlinks[5].textContent = siteContent.nav["nav-item-6"];



//Header Content
document.querySelector('h1').textContent =siteContent.cta["h1"];
document.querySelector('button').textContent = siteContent.cta['button'];

let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"]);


//Main Content

let headingList = document.querySelectorAll("h4");
headingList[0].textContent = siteContent["main-content"]["features-h4"];
headingList[1].textContent = siteContent["main-content"]["about-h4"];
headingList[2].textContent = siteContent["main-content"]["services-h4"];
headingList[3].textContent = siteContent["main-content"]["product-h4"];
headingList[4].textContent = siteContent["main-content"]["vision-h4"];

let mainParagraphs = document.querySelectorAll("text-content, p")
mainParagraphs[0].textContent = siteContent["main-content"]["features-content"]
mainParagraphs[1].textContent = siteContent["main-content"]["about-content"]
mainParagraphs[2].textContent = siteContent["main-content"]["services-content"]
mainParagraphs[3].textContent = siteContent["main-content"]["product-content"]
mainParagraphs[4].textContent = siteContent["main-content"]["vision-content"]

let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//Contact
headingList[5].textContent = siteContent["contact"]["contact-h4"]

let contactInfo = document.querySelectorAll("contact, p")
contactInfo[5].textContent = siteContent["contact"]["address"]
contactInfo[6].textContent = siteContent["contact"]["phone"]
contactInfo[7].textContent = siteContent["contact"]["email"]
contactInfo[8].textContent = siteContent["footer"]["copyright"];


//Green Links

let navColor = document.querySelectorAll("nav a");

navColor.forEach(links => {
  links.style.color = "green"
});

//Two New Items to Nav

const newItem = document.createElement("a");
newItem.textContent = "blog";
const newNavItem = document.querySelector("nav")
newNavItem.appendChild(newItem);

const newItem2 = document.createElement("a");
newItem2.textContent = "Videos";
const newNavItem2 = document.querySelector("nav")
newNavItem2.prepend(newItem2);