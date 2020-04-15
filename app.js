"use strict";
//Selectors
const screen = document.querySelector(".item-1");
let numbers = document.querySelectorAll("#number");
let operators = document.querySelectorAll("#operator");
let plus = document.querySelector(".item-13");
let firstOperand = [];
let secondOperand = [];
let integerTwo;
let integerOne;
let j = 0;
let z = "";
let i = 0;
let y = "";
let b = "";

//Adding Number
numbers.forEach(addNumber);
function addNumber(number) {
  number.addEventListener("click", () => {
    if (screen.value === operators[0].innerText || screen.value === y) {
      let m = number.innerHTML;
      secondOperand.push(m);
      y += secondOperand[j];
      screen.value = y;
      j++;
      integerTwo = parseInt(y, 10);
      console.log("y" + y);
      return;
    }
    if (screen.value === operators[4].innerText) {
      let m = number.innerHTML;
      secondOperand.push(m);
      y += secondOperand[j];
      screen.value = y;
      j++;
      integerTwo = parseInt(y, 10);
      console.log("y" + y);

      return;
    }
    if (screen.value === operators[3].innerText) {
      let m = number.innerHTML;
      secondOperand.push(m);
      y += secondOperand[j];
      screen.value = y;
      j++;
      integerTwo = parseInt(y, 10);
      console.log("y" + y);
      return;
    }
    if (screen.value === operators[2].innerText) {
      let m = number.innerHTML;
      secondOperand.push(m);
      y += secondOperand[j];
      screen.value = y;
      j++;
      integerTwo = parseInt(y, 10);
      console.log("y" + y);
      return;
    }
    if (screen.value === operators[1].innerText) {
      let m = number.innerHTML;
      secondOperand.push(m);
      y += secondOperand[j];
      screen.value = y;
      j++;
      integerTwo = parseInt(y, 10);
      console.log("y" + y);
      return;
    }

    let x = number.innerHTML;
    firstOperand.push(x);
    z += firstOperand[i];
    screen.value = z;
    i++;
    integerOne = parseInt(z, 10);
    console.log("z" + z);
  });
}
//Adding Operator
operators.forEach(addOperator);
function addOperator(operator) {
  operator.addEventListener("click", () => {
    b = operator.innerText;
    screen.value = operator.innerText;
    console.log(screen.value);
    //Rezultat ako se racuna +
    if (b === operators[4].innerText) {
      operators[5].addEventListener("click", () => {
        screen.value = integerOne + integerTwo;
      });
    }
    //Rezultat ako se racuna -
    if (b === operators[3].innerText) {
      operators[5].addEventListener("click", () => {
        screen.value = integerOne - integerTwo;
      });
    }
    //Rezultat ako se racuna *
    if (b === operators[2].innerText) {
      operators[5].addEventListener("click", () => {
        screen.value = integerOne * integerTwo;
      });
    }
    //rezultat ako se racune /
    if (b === operators[1].innerText) {
      operators[5].addEventListener("click", () => {
        screen.value = integerOne / integerTwo;
      });
    }
    //Ako pritisnes C sve ces obrisati
    if (screen.value === operators[0].innerText) {
      firstOperand = [];
      secondOperand = [];
      j = 0;
      z = "";
      i = 0;
      y = "";
      b = "";
      screen.value = 0;
    }
  });
}

screen.style.fontSize = "2rem";
