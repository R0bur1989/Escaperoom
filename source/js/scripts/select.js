(function () {
  "use strict";
  var items = Array.prototype.slice.call(document.querySelectorAll(".select__item"));

  if (items) {
    items.forEach(function(el) {
      el.addEventListener("click", function() {
        items.forEach(function(elem) {
          elem.classList.remove("select__item--active");
        });
        el.classList.add("select__item--active");
      })
    })
  }
})();
