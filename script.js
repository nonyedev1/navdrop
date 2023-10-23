const arrowUp = document.querySelectorAll(".arrowUp");
const arrowDown = document.querySelectorAll(".arrowDown");
const toDisplay = document.querySelectorAll(".toDisplay");

for (let i = 0; i < arrowDown.length; i++) {
  arrowDown[i].addEventListener("click", () => {
    arrowDown[i].classList.toggle("hide");
    arrowUp[i].classList.toggle("hide");
    toDisplay[i].classList.add("hide");
  });
}
for (let i = 0; i < arrowUp.length; i++) {
  arrowUp[i].addEventListener("click", () => {
    arrowUp[i].classList.toggle("hide");
    arrowDown[i].classList.toggle("hide");
    toDisplay[i].classList.remove("hide");
  });
}
