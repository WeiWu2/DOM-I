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
//Nav
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
let navFirstLink = document.querySelector('nav a');
let navSecondLink = navFirstLink.nextElementSibling;
let navThirdLink = navSecondLink.nextElementSibling;
let navFourthLink = navThirdLink.nextElementSibling;
let navFifthLink = navFourthLink.nextElementSibling;
let navSixthLink = navFifthLink.nextElementSibling;
navFirstLink.textContent = siteContent.nav["nav-item-1"];
navSecondLink.textContent = siteContent.nav["nav-item-2"];
navThirdLink.textContent = siteContent.nav["nav-item-3"];
navFourthLink.textContent = siteContent.nav["nav-item-4"];
navFifthLink.textContent = siteContent.nav["nav-item-5"];
navSixthLink.textContent = siteContent.nav["nav-item-6"];

//Header
let ctaText = document.querySelector(".cta-text h1");
ctaText.innerHTML = "DOM <br> Is <br> Awesome"
let ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent.cta['button'];
let ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent.cta['img-src'];

//main content
let topTextHeading = document.querySelector(".main-content .top-content .text-content h4");
topTextHeading.textContent = siteContent["main-content"]["features-h4"];
let topText = topTextHeading.nextElementSibling;
topText.textContent = siteContent["main-content"]["features-content"];
let topAbout = document.querySelector(".main-content .top-content .text-content:last-child h4")
topAbout.textContent = siteContent["main-content"]["about-h4"];
let topAboutContent = topAbout.nextElementSibling;
topAboutContent.textContent = siteContent["main-content"]["about-content"];
let middleImg = document.querySelector('#middle-img');
middleImg.src =siteContent["main-content"]["middle-img-src"];

// bottom content

let services = document.querySelector(".bottom-content .text-content h4");
services.textContent = siteContent["main-content"]["services-h4"];
let servicesText = services.nextElementSibling;
servicesText.textContent = siteContent["main-content"]["services-content"];
let product = document.querySelector(".bottom-content .text-content:nth-child(2) h4");
product.textContent = siteContent["main-content"]["product-h4"];
let productText = product.nextElementSibling;
productText.textContent = siteContent["main-content"]["product-content"];
let vision = document.querySelector(".bottom-content .text-content:last-child h4");
vision.textContent = siteContent["main-content"]["vision-h4"];
let visionText = vision.nextElementSibling;
visionText.textContent = siteContent["main-content"]["vision-content"];

//contact
let contact = document.querySelector(".contact h4");
contact.textContent = siteContent.contact["contact-h4"];
let contactAddress = contact.nextElementSibling;
contactAddress.innerHTML = "123 Way 456 Street <br> Somewhere, USA"
let contactPhone = contactAddress.nextElementSibling;
contactPhone.textContent = siteContent.contact["phone"];
let contactEmail = contactPhone.nextElementSibling;
contactEmail.textContent = siteContent.contact["email"];

//footer
let footer = document.querySelector("footer p")
footer.textContent = siteContent.footer['copyright'];