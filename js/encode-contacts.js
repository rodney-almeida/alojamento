var encEmail = "Y2FzYWFydm9yYUBnbWFpbC5jb20=";
var encPhone = "KzM1MSA5MTQgODM5IDYzNg==";
var encPhoneNoSpace = "KzM1MTkxNDgzOTYzNg==";

const emailLink = document.getElementById("contact-email");
emailLink.setAttribute("href", "mailto:".concat(atob(encEmail)));

const emailElement = document.getElementById("contact-email-text");
emailElement.innerHTML = atob(encEmail);

const phoneLink = document.getElementById("contact-phone");
phoneLink.setAttribute("href", "tel://".concat(atob(encPhoneNoSpace)));

const phoneElement = document.getElementById("contact-phone-text");
phoneElement.innerHTML = atob(encPhone);