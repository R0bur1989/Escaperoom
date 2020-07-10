(function () {
  "use strict";
  var question = document.querySelector(".jsQuestion");
  var city = document.querySelector(".jsCity");
  var overlay = document.querySelector(".overlay");
  var popup = document.querySelector(".modal--city");
  var popup2 = document.querySelector(".modal--question");
  var closeButton = Array.prototype.slice.call(document.querySelectorAll(".modal__close"));
  var body =  document.querySelector("body");
  var locations =  Array.prototype.slice.call(popup.querySelectorAll(".modal__list-item"));



  var isStorageSupport = true;
  var storageName = "";
  var storageEmail = "";

  var form = popup2.querySelector("form");
  var userName = form.querySelector("[name=user-name]");
  var userEmail = form.querySelector("[name=user-email]");
  var check = form.querySelector("#agreement");


  try {
    storageName = localStorage.getItem("user-name");
    storageEmail = localStorage.getItem("user-email");
  } catch (err) {
    isStorageSupport = false;
  }

  if (city) {
    city.addEventListener("click", function (evt) {
      evt.preventDefault();
      body.classList.add("overflow-hidden");
      overlay.classList.add("modal-show");
      popup.classList.add("modal-show");
    });
  }

  if (question) {
    question.addEventListener("click", function (evt) {
      evt.preventDefault();
      body.classList.add("overflow-hidden");
      overlay.classList.add("modal-show");
      popup2.classList.add("modal-show");
      if (storageName) {
        userName.value = storageName;
        userEmail.focus();
        if (storageEmail) {
          userEmail.value = storageEmail;
        }
      } else {
        userName.focus();
      }
    });
  }

  if (locations) {
    locations.forEach(function(el) {
      el.addEventListener("click", function() {
        locations.forEach(function(elem) {
          elem.classList.remove("modal__list-item--active");
        });
        el.classList.add("modal__list-item--active");
      })
    })
  }

  if (closeButton) {
    closeButton.forEach(function(el) {
      el.addEventListener("click", function () {
        overlay.classList.remove("modal-show");
        popup.classList.remove("modal-show");
        popup2.classList.remove("modal-show");
        body.classList.remove("overflow-hidden");
      });
    })
  }

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (overlay.classList.contains("modal-show")) {
        overlay.classList.remove("modal-show");
        popup.classList.remove("modal-show");
        popup2.classList.remove("modal-show");
        body.classList.remove("overflow-hidden");
      }
    }
  });

  overlay.addEventListener("click", function (evt) {
    var target = evt.target;
    if (target.classList.contains("modal")) return;
    overlay.classList.remove("modal-show");
    popup.classList.remove("modal-show");
    popup2.classList.remove("modal-show");
    body.classList.remove("overflow-hidden");
  });

  if (form) {
       form.addEventListener("submit", function (evt) {
        evt.preventDefault();
        if (!check.checked) {
          return alert("Нужно Ваше согласие на обработку персональных данных");
        }
        overlay.classList.remove("modal-show");
        popup.classList.remove("modal-show");
        popup2.classList.remove("modal-show");
        body.classList.remove("overflow-hidden");

        if (isStorageSupport) {
          localStorage.setItem("user-name", userName.value);
          localStorage.setItem("user-email", userEmail.value);
        }
      });
  }
})();
