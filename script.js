const counterDisplay = document.querySelector(".update-counter");
const counterBtn = document.querySelector(".counter");
const resetBtn = document.querySelector(".reset");

let count = 0;

counterBtn.addEventListener("click", () => {
    count++;
    counterDisplay.textContent = count;
});

resetBtn.addEventListener("click", () => {
    count = 0;
    counterDisplay.textContent = count;
})