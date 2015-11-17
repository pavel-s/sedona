var link = document.querySelector(".link-to-btn");
var popup = document.querySelector(".search-hotel-form");
var arrival = popup.querySelector("[name=arrival-date]");

link.addEventListener("click", function(event) {
  if (!popup.classList.contains("search-hotel-form-show")) {
    event.preventDefault();
    popup.classList.add("search-hotel-form-show");
    arrival.focus();
  } else {
    event.preventDefault();
    popup.classList.remove("search-hotel-form-show");
  }
});
