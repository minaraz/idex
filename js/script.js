

//this will show the menu//
var menuButton = document.getElementById('menuButton');
var menu = document.getElementById('menu');
var homePage = document.getElementById('home');
var aboutButton = document.getElementById('aboutButton');
var aboutPage = document.getElementById('about-us');
var servicePage= document.getElementById('services');
var backServices = document.getElementById('back-services');
var Gallery = document.getElementById('pics-gallery');
var Contact = document.getElementById('contact');
var footer = document.getElementById('footer');


menuButton.onclick = function() {
  homePage.classList.remove('selected');
  menu.classList.add('selected');
};


aboutButton.onclick = function() {
  homePage.classList.remove('selected');
  menu.classList.remove('selected');
  aboutPage.class.add('selected')
};

// this will hide the menu//
var hideMenu = function() {
  menu.classList.remove('selected');
  homePage.classList.add('selected');

}
