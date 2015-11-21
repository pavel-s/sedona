var link = document.querySelector(".link-to-btn");
var popup = document.querySelector(".search-hotel-form");
var arrival = popup.querySelector("[name=arrival-date]");
var map = document.querySelector(".map");

link.addEventListener("click", function(event) {
  if (!popup.classList.contains("search-hotel-form-show")) {
    event.preventDefault();
    map.classList.add("map-hide");
    popup.classList.add("search-hotel-form-show");
    arrival.focus();
  } else {
    event.preventDefault();
    popup.classList.remove("search-hotel-form-show");
    map.classList.remove("map-hide");
  }
});
