let total = 0;
let buffer = "0";
let previousOperatorl;

const screen = document.getElementById("screen");

function buttonClick(value) {}

function init() {
  document.querySelector(".calc-button");
  addEventListener("click", function (event) {
    buttonClick(event.target.innerText);
  });
}
init();
