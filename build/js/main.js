!function(){"use strict";var e=document.querySelector(".jsQuestion"),s=document.querySelector(".jsCity"),o=document.querySelector(".overlay"),t=document.querySelector(".modal--city"),r=document.querySelector(".modal--question"),a=Array.prototype.slice.call(document.querySelectorAll(".modal__close")),l=document.querySelector("body"),c=Array.prototype.slice.call(t.querySelectorAll(".modal__list-item")),i=Array.prototype.slice.call(document.querySelectorAll(".input-title"));console.log(l);var n=!0,d="",u="",m=r.querySelector("form"),v=m.querySelector("[name=user-name]"),L=m.querySelector("[name=user-email]"),y=m.querySelector("[name=user-question]"),h=m.querySelector("#agreement");s&&s.addEventListener("click",function(e){e.preventDefault(),l.classList.add("overflow-hidden"),o.classList.add("modal-show"),t.classList.add("modal-show")}),e&&e.addEventListener("click",function(e){e.preventDefault(),l.classList.add("overflow-hidden"),o.classList.add("modal-show"),r.classList.add("modal-show");try{d=localStorage.getItem("user-name"),u=localStorage.getItem("user-email")}catch(e){n=!1}d?(v.value=d,L.focus(),u&&(L.value=u,y.focus())):v.focus()}),c&&c.forEach(function(e){e.addEventListener("click",function(){c.forEach(function(e){e.classList.remove("modal__list-item--active")}),e.classList.add("modal__list-item--active")})}),a&&a.forEach(function(e){e.addEventListener("click",function(){o.classList.remove("modal-show"),t.classList.remove("modal-show"),r.classList.remove("modal-show"),l.classList.remove("overflow-hidden"),v.classList.remove("input-correct"),v.classList.remove("input-error"),L.classList.remove("input-error"),i.forEach(function(e){e.style.display="none"})})}),window.addEventListener("keydown",function(e){27===e.keyCode&&o.classList.contains("modal-show")&&(o.classList.remove("modal-show"),t.classList.remove("modal-show"),r.classList.remove("modal-show"),l.classList.remove("overflow-hidden"),v.classList.remove("input-correct"),v.classList.remove("input-error"),L.classList.remove("input-error"),i.forEach(function(e){e.style.display="none"}))}),o.addEventListener("click",function(e){e.target.classList.contains("modal")||(o.classList.remove("modal-show"),t.classList.remove("modal-show"),r.classList.remove("modal-show"),l.classList.remove("overflow-hidden"),v.classList.remove("input-correct"),v.classList.remove("input-error"),L.classList.remove("input-error"),i.forEach(function(e){e.style.display="none"}))}),m&&m.addEventListener("submit",function(e){return e.preventDefault(),h.checked?(s=L.value,0==/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(s)?(1<=v.value.length?(v.classList.remove("input-error"),v.classList.add("input-correct")):(v.classList.remove("input-correct"),v.classList.add("input-error")),y.focus(),i.forEach(function(e){e.style.display="block"}),void L.classList.add("input-error")):(o.classList.remove("modal-show"),t.classList.remove("modal-show"),r.classList.remove("modal-show"),l.classList.remove("overflow-hidden"),v.classList.remove("input-correct"),v.classList.remove("input-error"),L.classList.remove("input-error"),i.forEach(function(e){e.style.display="none"}),void(n&&(localStorage.setItem("user-name",v.value),localStorage.setItem("user-email",L.value))))):alert("Нужно Ваше согласие на обработку персональных данных");var s})}(),function(){"use strict";var e=document.querySelector(".page-header"),s=document.querySelector(".page-header__toggle"),o=document.querySelector(".overlay-menu"),t=document.querySelector(".page-footer"),r=document.querySelector("body");e.classList.remove("page-header--nojs"),s.addEventListener("click",function(){e.classList.contains("page-header--closed")?(e.classList.remove("page-header--closed"),e.classList.add("page-header--opened"),s.style.backgroundImage="url('img/close.svg')",o.classList.add("modal-show"),t.style.display="flex",r.classList.add("overflow-hidden")):(e.classList.add("page-header--closed"),e.classList.remove("page-header--opened"),s.style.backgroundImage="url('img/burger.svg')",o.classList.remove("modal-show"),t.style.display="none",r.classList.remove("overflow-hidden"))})}();