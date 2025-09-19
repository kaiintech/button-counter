const counterDisplay = document.querySelector(".update-counter");
const decreaseBtn = document.querySelector(".decrease");
const increaseBtn = document.querySelector(".increase");
const resetBtn = document.querySelector(".reset");

let count = 0;

increaseBtn.addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});

decreaseBtn.addEventListener("click", () => {
  count--;
  counterDisplay.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  counterDisplay.textContent = count;
});
