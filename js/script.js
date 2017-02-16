var openCloseForm = document.querySelector(".find-hotel");
var popUp = document.querySelector(".hotel-search");
popUp.classList.add("hotel-search-hide");

openCloseForm.addEventListener("click", function(event) {
  event.preventDefault();
  popUp.classList.toggle("hotel-search-hide");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (!popUp.classList.contains("hotel-search-hide")) {
      popUp.classList.add("hotel-search-hide");
    }
  }
});
