const slider = document.querySelector(".slider-wrapper");

slider.addEventListener("click", event => {
  const leftArrow = event.target;
  const rightArrow = event.target;
  if (rightArrow.className === "right-arrow") {
    leftArrow.parentElement.classList.remove("active");
    if (leftArrow.parentElement.nextElementSibling == undefined) {
      leftArrow.parentElement.parentElement.firstElementChild.classList.add(
        "active"
      );
    } else leftArrow.parentElement.nextElementSibling.classList.add("active");
  }

  if (leftArrow.className === "left-arrow") {
    leftArrow.parentElement.classList.remove("active");
    if (leftArrow.parentElement.previousElementSibling == undefined) {
      leftArrow.parentElement.parentElement.lastElementChild.classList.add(
        "active"
      );
    } else
      leftArrow.parentElement.previousElementSibling.classList.add("active");
  }
});
