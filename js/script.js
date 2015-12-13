

//this will show the menu//
var menuButton = document.getElementById('menuButton');
var menu = document.getElementById('menu');
var mobileMenu = document.getElementById('mobile-menu');
var homePage = document.getElementById('home');
var aboutButton = document.getElementById('aboutButton');
var aboutPage = document.getElementById('about-us');
var backAbout = document.getElementById('back-about');
var servicesButton = document.getElementById('servicesButton');
var servicePage = document.getElementById('services');
var backServices = document.getElementById('back-services');
var contactButton = document.getElementById('contactButton');
var Contact = document.getElementById('contact');
var footer = document.getElementById('footer');
var homelink = document.getElementById('homeBtn');
var aboutlink = document.getElementById('aboutBtn');
var servicelink = document.getElementById('serviceBtn');
var contactlink = document.getElementById('contactBtn');
var serviceGallery = document.getElementById('SD');
var Gallery = document.getElementById('pics-gallery');
var closeGallery = document.getElementById('closeGallery');

serviceGallery.onclick = function() {
  servicePage.classList.remove('selected');
  Gallery.classList.add('selected');}

closeGallery.onclick = function() {
  Gallery.classList.remove('selected');
  servicePage.classList.add('selected');}

homelink.onclick = function() {
  Contact.classList.remove('selected');
  homePage.classList.add('selected');
  footer.classList.add('selected');}

aboutlink.onclick = function() {
  Contact.classList.remove('selected');
  aboutPage.classList.add('selected');
  footer.classList.add('selected');}

servicelink.onclick = function() {
  Contact.classList.remove('selected');
  servicePage.classList.add('selected');}

contactButton.onclick = function() {
  homePage.classList.remove('selected');
  Contact.classList.add('selected');
  footer.classList.add('selected');
}
servicesButton.onclick = function() {
  homePage.classList.remove('selected');
  services.classList.add('selected');
  footer.classList.add('selected');
};

backServices.onclick = function() {
  services.classList.remove('selected');
  homePage.classList.add('selected');
  mobileMenu.classList.add('selected');
}

menuButton.onclick = function() {
  homePage.classList.remove('selected');
  menu.classList.add('selected');
  mobileMenu.classList.add('selected');
};


aboutButton.onclick = function() {
  homePage.classList.remove('selected');
  mobileMenu.classList.remove('selected');
  aboutPage.classList.add('selected');
};

backAbout.onclick = function() {
  aboutPage.classList.remove('selected');
  homePage.classList.add('selected');
  mobileMenu.classList.add('selected');
};



// this will hide the menu//
var hideMenu = function() {
  menu.classList.remove('selected');
  homePage.classList.add('selected');
}
