"use strict";console.log("sdfasfsadfsdfsdf");var pageHeader=document.querySelector(".page-header"),headerToggle=document.querySelector(".page-header__toggle"),intro=document.querySelector(".intro"),footer=document.querySelector(".page-footer");pageHeader.classList.remove("page-header--nojs"),headerToggle.addEventListener("click",function(){pageHeader.classList.contains("page-header--closed")?(pageHeader.classList.remove("page-header--closed"),pageHeader.classList.add("page-header--opened"),intro.style.display="none",footer.style.display="flex"):(pageHeader.classList.add("page-header--closed"),pageHeader.classList.remove("page-header--opened"),intro.style.display="block",footer.style.display="none")});