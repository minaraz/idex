

//this will show the menu//
var menuButton = document.getElementById('menuButton');
var menu = document.getElementById('menu');
menuButton.onclick = function() {
  menu.style.display = 'block';
};
// this will hide the menu//
var hideMenu = function() {
  menu.style.display = 'none';
}
