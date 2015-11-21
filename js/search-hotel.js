var link = document.querySelector(".link-to-btn");
var popup = document.querySelector(".search-hotel-form");
var form = document.querySelector(".search-form");
var arrival = popup.querySelector("[name=arrival-date]");
var departure = popup.querySelector("[name=departure-date]");
var adults = popup.querySelector("[name=adults]");
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

form.addEventListener("submit", function(event) {
  if (!arrival.value || !departure.value || !(adults.value > 0)) {
      event.preventDefault();
      popup.classList.remove("search-hotel-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("search-hotel-error");
  }
});
