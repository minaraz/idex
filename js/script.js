

//this will show the menu//
var menuButton = document.getElementById('menuButton');
var menu = document.getElementById('menu');
var homePage = document.getElementById('home');
var aboutButton = document.getElementById('aboutButton');
menuButton.onclick = function() {
  homePage.classList.remove('selected');
  menu.classList.add('selected');

};
// this will hide the menu//
var hideMenu = function() {
  menu.classList.remove('selected');
  homePage.classList.add('selected');

}
