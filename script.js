// Come fare una divisione prendendo i valori in un array e un for javascript

const display = document.querySelector("#display");
const calc = document.querySelector("#calc");
const canc = document.querySelector("#canc");
const elimination = document.querySelector("#elimination");
const squareRoot = document.querySelector("#square-root");

let sumString;
let arrayNumber = [];
let sum = 0;

document.body.addEventListener("click", buttonValue);

function buttonValue(event) {
  if (event.target.value) {
    display.append(event.target.value);
    sumString = display.textContent;

    let operations = ["+", "-", "x", "÷", "^"];

    for (let i = 0; i < operations.length; i++) {
      if (sumString.includes(operations[i])) {
        arrayNumber = sumString.split(operations[i], sumString.length);
      }
    }
  }
}

// elimination elimina tutto il contenuto del display
elimination.addEventListener("click", () => {
  display.textContent = "";
});

// canc elimina tutto elimina solamente l'ultimo numero
canc.addEventListener("click", () => {
  display.textContent = display.textContent.slice(0, -1);
});

// calcola la radice quadrata
squareRoot.addEventListener("click", () => {
  display.textContent = Math.sqrt(sumString);
});

// Quando clicchiamo sull’uguale trova l'operazione e mi restituisce la somma
calc.addEventListener("click", () => {
  if (sumString.includes("+")) {
    addition();
  } else if (sumString.includes("-")) {
    subtraction();
  } else if (sumString.includes("x")) {
    Multiplication();
  } else if (sumString.includes("÷")) {
    division();
  } else if (sumString.includes("^")) {
    power();
  }
});

function addition() {
  for (let i = 0; i < arrayNumber.length; i++)
    sum += parseFloat(arrayNumber[i]);
  display.textContent = sum;
  sum = 0;
}

function subtraction() {
  for (let i = 0; i < arrayNumber.length; i++)
    sum = Math.abs(sum) - parseFloat(arrayNumber[i]);
  display.textContent = sum;
  sum = 0;
}

function Multiplication() {
  sum = 1;
  for (let i = 0; i < arrayNumber.length; i++)
    sum *= parseFloat(arrayNumber[i]);
  display.textContent = sum;
  sum = 0;
}

function division() {
  sum = parseFloat(arrayNumber[0]);
  for (let i = 1; i < arrayNumber.length; i++)
    sum /= parseFloat(arrayNumber[i]);
  display.textContent = sum;
  sum = 0;
}

function power() {
  sum = parseFloat(arrayNumber[0]);
  for (let i = 1; i < arrayNumber.length; i++)
    sum **= parseFloat(arrayNumber[i]);
  display.textContent = sum;
  sum = 0;
}
