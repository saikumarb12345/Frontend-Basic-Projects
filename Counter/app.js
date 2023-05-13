const value = document.getElementById("value");
const increment = document.getElementById("increase");
const decrement = document.getElementById("decrease");
const reset = document.getElementById("reset");
// const btns = document.getElementsByClassName("button-group");
let num = 0;
increment.addEventListener("click", () => {
  num++;
  value.innerText = num;
  if (num > 0) {
    value.style.color = "green";
  } else {
    value.style.color = "red";
  }
});
decrement.addEventListener("click", () => {
  num--;
  value.innerText = num;
  if (num > 0) {
    value.style.color = "green";
  } 
  else {
    value.style.color = "red";
  }
});
reset.addEventListener("click", () => {
  num = 0;
  value.innerText = num;
  if (num == 0) {
    value.style.color = "black";
  }
});
