var form = document.querySelector(".search-form");
var btnShow = document.querySelector(".btn-show");
var btnShowHide = document.querySelector(".btn-show-hide");
//if (!document.querySelector("a.btn-show")) {
btnShow.classList.remove("btn-show");
btnShow.classList.add("btn-show-hide");

btnShowHide.classList.remove("btn-show-hide");
btnShowHide.classList.add("btn-show");
btnShowHide.classList.add("btn");