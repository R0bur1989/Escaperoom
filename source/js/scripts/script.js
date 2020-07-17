(function () {
  "use strict";
var pageHeader = document.querySelector('.page-header');
var headerToggle = document.querySelector('.page-header__toggle');
var overlayMenu = document.querySelector(".overlay-menu");
var footer = document.querySelector(".page-footer");

pageHeader.classList.remove('page-header--nojs');

headerToggle.addEventListener('click', function () {
  if (pageHeader.classList.contains('page-header--closed')) {
    pageHeader.classList.remove('page-header--closed');
    pageHeader.classList.add('page-header--opened');
    headerToggle.style.backgroundImage = "url('img/close.svg')";
    overlayMenu.classList.add("modal-show");
    footer.style.display = "flex";
  } else {
    pageHeader.classList.add('page-header--closed');
    pageHeader.classList.remove('page-header--opened');
    headerToggle.style.backgroundImage = "url('img/burger.svg')";
    overlayMenu.classList.remove("modal-show");
    footer.style.display = "none";
  }
});
})();
