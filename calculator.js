let runningTotal = 0;
let buffer = "0";
let previousOperatorl;
const screen = document.querySelector(".screen");

function buttonClick(value) {
  if (isNaN(parseInt(value))) {
    handleSymbol(value); //la consola marca que esta mal esta linea
  } else {
    handleNumber(value);
  }
  rerender();
}

function handleNumber(value) {
  if (buffer === "0") {
    buffer += value;
  } else {
    buffer = value;
  }
}

function handleMath(value) {
  if (buffer === "0") {
    return;
  }
  const intBuffer = parseInt(buffer);
  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer); // es lo que va hacer la matematica
  }

  previousOperatorl = value;

  buffer = "0";
}

function flushOperation(intBuffer) {
  if (previousOperatorl === "+") {
    runningTotal += intBuffer;
  } else if (previousOperatorl === "-") {
    runningTotal -= intBuffer;
  } else if (previousOperatorl === "×;") {
    runningTotal *= intBuffer;
  } else {
    runningTotal /= intBuffer;
  }
}

function handleSymbol(symbol) {
  switch (symbol) {
    case "C":
      buffer = "0";
      runningTotal = 0;
      break;
    case "=":
      if (previousOperatorl === null) {
        // need two numbers to do math
        return;
      }
      flushOperation(parseInt(buffer));
      previousOperatorl = null;
      buffer = runningTotal;
      runningTotal = 0;
      break;
    case "←":
      if (buffer.length === 1) {
        buffer = "0";
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      break;
    case "+":
    case "-":
    case "←":
    case "÷":
    case "✖":
      handleMath(symbol);
      break;
  }
}

function rerender() {
  screen.innerText = buffer;
}

function init() {
  document.querySelector(".calc-buttons").addEventListener("click", function (event) {
    buttonClick(event.target.innerText);
  });
}

init();
