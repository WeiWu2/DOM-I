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
let ctatext = document.querySelector(".cta-text h1");
ctatext.textContent =siteContent.cta['h1'];
let ctabutton = document.querySelector(".cta-text button");
ctabutton.textContent = siteContent.cta['button'];
let ctaimg = document.querySelector('#cta-img');
ctaimg.src = siteContent.cta['img-src'];