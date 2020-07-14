(function () {
  "use strict";
var pageHeader = document.querySelector('.page-header');
var headerToggle = document.querySelector('.page-header__toggle');
var intro =  document.querySelector('.intro');
var footer = document.querySelector('.page-footer');
var pageBody =  document.querySelector("body");
var pageBodyIndex = document.querySelector(".index");

pageHeader.classList.remove('page-header--nojs');

headerToggle.addEventListener('click', function () {
  if (pageHeader.classList.contains('page-header--closed')) {
    pageHeader.classList.remove('page-header--closed');
    pageHeader.classList.add('page-header--opened');

    headerToggle.style.backgroundImage = "url('../img/close.svg')";
    pageBody.backgroundImage = "url('../img/menuOpenBg.jpg')";
    pageBodyIndex.backgroundImage = "url('../img/menuOpenBg.jpg')";
    intro.style.display = "none";
    footer.style.display = "flex";
  } else {
    pageHeader.classList.add('page-header--closed');
    pageHeader.classList.remove('page-header--opened');

    pageBody.backgroundImage = "url('../img/mainBg-mobile.jpg')";
    pageBodyIndex.backgroundImage = "url('../img/mainBg-mobile.jpg')";
    headerToggle.style.backgroundImage = "url('../img/burger.svg')";
    intro.style.display = "block";
    footer.style.display = "none";
  }
});
})();
