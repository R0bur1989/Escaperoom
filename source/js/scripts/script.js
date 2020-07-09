'use strict';
console.log("sdfasfsadfsdfsdf");
var pageHeader = document.querySelector('.page-header');
var headerToggle = document.querySelector('.page-header__toggle');
var intro =  document.querySelector('.intro');
var footer = document.querySelector('.page-footer');

pageHeader.classList.remove('page-header--nojs');

headerToggle.addEventListener('click', function () {
  if (pageHeader.classList.contains('page-header--closed')) {
    pageHeader.classList.remove('page-header--closed');
    pageHeader.classList.add('page-header--opened');

    headerToggle.style.backgroundImage = "url('../img/icon-close.svg')";
    intro.style.display = "none";
    footer.style.display = "flex";
  } else {
    pageHeader.classList.add('page-header--closed');
    pageHeader.classList.remove('page-header--opened');

    headerToggle.style.backgroundImage = "url('../img/burger.svg')";
    intro.style.display = "block";
    footer.style.display = "none";
  }
});
