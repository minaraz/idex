

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
var Gallery = document.getElementById('pics-gallery');
var Contact = document.getElementById('contact');
var footer = document.getElementById('footer');

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
