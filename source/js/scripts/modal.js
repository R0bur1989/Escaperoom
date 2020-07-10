(function () {
  "use strict";
  var question = document.querySelector(".jsQuestion");
  var overlay = document.querySelector(".overlay");
  var popup = document.querySelector(".modal--city");
  var popup2 = document.querySelector(".modal--question");
  var closeButton = Array.prototype.slice.call(document.querySelectorAll(".modal__close"));
  var body =  document.querySelector("body");


  // var isStorageSupport = true;
  // var storageName = "";
  // var storageTel = "";

  var form = popup2.querySelector("form");
  var userName = popup2.querySelector("[name=user-name]");
  var userEmail = popup2.querySelector("[name=user-email]");
  var check = popup2.querySelector("#agreement");

  // try {
  //   storageName = localStorage.getItem("name");
  //   storageTel = localStorage.getItem("tel");
  // } catch (err) {
  //   isStorageSupport = false;
  // }

  if (question) {
    question.addEventListener("click", function (evt) {
      evt.preventDefault();
      body.classList.add("overflow-hidden");
      overlay.classList.add("modal-show");
      popup2.classList.add("modal-show");
      // if (storageName) {
      //   userName.value = storageName;
      //   if (storageTel) {
      //     phone.value = storageTel;
      //     phone.focus();
      //   }
      // } else {
      //   userName.focus();
      // }
    });
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
})();
