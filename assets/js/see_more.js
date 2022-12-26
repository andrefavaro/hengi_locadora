let seeMoreBtn = document.querySelector("#see_more");
let currentItem = 6;

seeMoreBtn.onclick = () => {
  let boxes = [...document.querySelectorAll(".machine__item")];
  for (var i = currentItem; i < currentItem + 3; i++) {
    boxes[i].style.display = "flex";
  }
  currentItem += 3;

  if (currentItem >= boxes.length) {
    seeMoreBtn.style.display = "none";
  }
};
