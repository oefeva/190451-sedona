var openCloseForm = document.querySelector(".request");
var popUp = document.querySelector(".hotel-search");

openCloseForm.addEventListener("click", function (event) {
  event.preventDefault();
  popUp.classList.toggle("hotel-search-show");
});

window.addEventListener("keydown", function(event) {
   if (event.keyCode === 27) {
     if (popUp.classList.contains("hotel-search-show")) {
       popUp.classList.remove("hotel-search-show");
     }
   }
 });
