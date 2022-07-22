
var result = document.querySelector(".result");
const next = document.querySelector(".next");
const previous = document.querySelector(".previous");
const reset = document.querySelector(".reset");
var counter = 0;
next.addEventListener("click", () => {
  result.innerHTML = ++counter;
});
previous.addEventListener("click", () => {
  if (counter <= 0) {
  } else {
    result.innerHTML = --counter;
  }
});
reset.addEventListener("click", () => {
  counter = 1;
  result.innerHTML = counter;
});
