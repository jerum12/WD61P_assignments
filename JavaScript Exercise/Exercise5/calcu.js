
/* ADDING OF INPUTS */

const enterOne = () => {
    const dispFormula = document.querySelector("#display-formula");
    if (dispFormula.innerHTML === "0") {
        dispFormula.innerHTML = 1;
    } else if (dispFormula.innerHTML.length == 15) {
        dispFormula.innerHTML += "";
    } else {
        dispFormula.innerHTML += 1;
    }
}
const enterTwo = () => {
    const dispFormula = document.querySelector("#display-formula");
    if (dispFormula.innerHTML === "0") {
        dispFormula.innerHTML = 2;
    } else if (dispFormula.innerHTML.length == 15) {
        dispFormula.innerHTML += "";
    } else {
        dispFormula.innerHTML += 2;
    }
}
const enterThree = () => {
    const dispFormula = document.querySelector("#display-formula");
    if (dispFormula.innerHTML === "0") {
        dispFormula.innerHTML = 3;
    } else if (dispFormula.innerHTML.length == 15) {
        dispFormula.innerHTML += "";
    } else {
        dispFormula.innerHTML += 3;
    }
}
const enterFour = () => {
    const dispFormula = document.querySelector("#display-formula");
    if (dispFormula.innerHTML === "0") {
        dispFormula.innerHTML = 4;
    } else if (dispFormula.innerHTML.length == 15) {
        dispFormula.innerHTML += "";
    } else {
        dispFormula.innerHTML += 4;
    }
}
const enterFive = () => {
    const dispFormula = document.querySelector("#display-formula");
    if (dispFormula.innerHTML === "0") {
        dispFormula.innerHTML = 5;
    } else if (dispFormula.innerHTML.length == 15) {
        dispFormula.innerHTML += "";
    } else {
        dispFormula.innerHTML += 5;
    }
}
const enterSix = () => {
    const dispFormula = document.querySelector("#display-formula");
    if (dispFormula.innerHTML === "0") {
        dispFormula.innerHTML = 6;
    } else if (dispFormula.innerHTML.length == 15) {
        dispFormula.innerHTML += "";
    } else {
        dispFormula.innerHTML += 6;
    }
}
const enterSeven = () => {
    const dispFormula = document.querySelector("#display-formula");
    if (dispFormula.innerHTML === "0") {
        dispFormula.innerHTML = 7;
    } else if (dispFormula.innerHTML.length == 15) {
        dispFormula.innerHTML += "";
    } else {
        dispFormula.innerHTML += 7;
    }
}
const enterEight = () => {
    const dispFormula = document.querySelector("#display-formula");
    if (dispFormula.innerHTML === "0") {
        dispFormula.innerHTML = 8;
    } else if (dispFormula.innerHTML.length == 15) {
        dispFormula.innerHTML += "";
    } else {
        dispFormula.innerHTML += 8;
    }
}
const enterNine = () => {
    const dispFormula = document.querySelector("#display-formula");
    if (dispFormula.innerHTML === "0") {
        dispFormula.innerHTML = 9;
    } else if (dispFormula.innerHTML.length == 15) {
        dispFormula.innerHTML += "";
    } else {
        dispFormula.innerHTML += 9;
    }
}
const enterZero = () => {
    const dispFormula = document.querySelector("#display-formula");
    if (dispFormula.innerHTML === "") {
        dispFormula.innerHTML = 0;
    } else if (dispFormula.innerHTML.charAt(0) == 0) {
        dispFormula.innerHTML += "";
    } else if (dispFormula.innerHTML.length == 15) {
        dispFormula.innerHTML += "";
    } else {
        dispFormula.innerHTML += 0;
    }
}
const enterDot = () => {
    const dispFormula = document.querySelector("#display-formula");
    const myNumbers = dispFormula.innerHTML.split(/[-+*\/]+/);
    
    if (dispFormula.innerHTML === "0") {
        dispFormula.innerHTML = ".";
    } else if (myNumbers.length + 1 > dispFormula.innerHTML.split(".").length) {
        dispFormula.innerHTML += ".";
    } else if (dispFormula.innerHTML.includes(".") || myOperators.includes(dispFormula.innerHTML.charAt(dispFormula.innerHTML.length - 1))) {
        dispFormula.innerHTML += "";
    } else if (dispFormula.innerHTML.length == 15) {
        dispFormula.innerHTML += "";
    } else {
        dispFormula.innerHTML += ".";
    }
}
const allClear = () => {
    const dispFormula = document.querySelector("#display-formula");
    const dispAnswer = document.querySelector("#display-answer");
    dispFormula.innerHTML = "0";
    dispAnswer.innerHTML= "";
}

/* ADDING OF MATHEMATICAL OPERATORS */
const myOperators = ["+", "-", "*", "/", "%", "--"];
let myAddition = 0;
let mySubtraction = 0;
let myMultiplication = 1;
let myDivision = 1;

const enterPlus = () => {
    const dispFormula = document.querySelector("#display-formula");
    if (dispFormula.innerHTML === "" || dispFormula.innerHTML === "+") {
        dispFormula.innerHTML = "";
    } else if (myOperators.includes(dispFormula.innerHTML.charAt(dispFormula.innerHTML.length - 1))) {
        dispFormula.innerHTML += "";
    } else if (dispFormula.innerHTML.length == 15) {
        dispFormula.innerHTML += "";
    } else {
        dispFormula.innerHTML += "+";
    }
}
const enterSubtract = () => {
    const dispFormula = document.querySelector("#display-formula");
    if (dispFormula.innerHTML === "") {
        dispFormula.innerHTML = "-";
    } else if (dispFormula.innerHTML === "-" || myOperators.includes(dispFormula.innerHTML.charAt(dispFormula.innerHTML.length - 1))) {
        dispFormula.innerHTML += "";
    } else if (dispFormula.innerHTML.length == 15) {
        dispFormula.innerHTML += "";
    } else {
        dispFormula.innerHTML += "-";
    }
}
const enterMultiply = () => {
    const dispFormula = document.querySelector("#display-formula");
    if (dispFormula.innerHTML === "" || dispFormula.innerHTML === "*") {
        dispFormula.innerHTML = "";
    } else if (myOperators.includes(dispFormula.innerHTML.charAt(dispFormula.innerHTML.length - 1))) {
        dispFormula.innerHTML += "";
    } else if (dispFormula.innerHTML.length == 15) {
        dispFormula.innerHTML += "";
    } else {
        dispFormula.innerHTML += "*";
    }
}
const enterDivide = () => {
    const dispFormula = document.querySelector("#display-formula");
    if (dispFormula.innerHTML === "" || dispFormula.innerHTML === "/") {
        dispFormula.innerHTML = "";
    } else if (myOperators.includes(dispFormula.innerHTML.charAt(dispFormula.innerHTML.length - 1))) {
        dispFormula.innerHTML += "";
    } else if (dispFormula.innerHTML.length == 15) {
        dispFormula.innerHTML += "";
    } else {
        dispFormula.innerHTML += "/";
    }
}
const enterPercent = () => {
    const dispFormula = document.querySelector("#display-formula");
    if (dispFormula.innerHTML === "" || dispFormula.innerHTML === "%") {
        dispFormula.innerHTML = "";
    } else if (myOperators.includes(dispFormula.innerHTML.charAt(dispFormula.innerHTML.length - 1))) {
        dispFormula.innerHTML += "";
    } else if (dispFormula.innerHTML.length == 15) {
        dispFormula.innerHTML += "";
    } else {
        dispFormula.innerHTML += "%";
    }
}

const plusMinus = () => {
    const dispFormula = document.querySelector("#display-formula");
    if (dispFormula.innerHTML.charAt(0) != "-") {
        dispFormula.innerHTML = "-" + dispFormula.innerHTML;
    } else {
        dispFormula.innerHTML = dispFormula.innerHTML.substring(1);
    }

}

/* CALCULATE THE FORMULA */

const pressEqual = () => {
    const theFormula = document.querySelector("#display-formula");
    const theAnswer = document.querySelector("#display-answer");
    const dispArray = theFormula.innerHTML.split("");

    console.log(dispArray);

    const realOperator = myOperators;
    if (realOperator.length > 4) {
        realOperator.pop();
        console.log(realOperator);
    }
    console.log(theFormula.innerHTML.charAt(theFormula.innerHTML.length - 1));
    for (let i in dispArray) {
        if (realOperator.includes(theFormula.innerHTML.charAt(theFormula.innerHTML.length - 1))) {
            return
        } else {
            if (realOperator.includes(dispArray[i])) {
                theAnswer.innerHTML = eval(theFormula.innerHTML);
                theFormula.innerHTML = 0;
                break;
            }
        }
    }

    
}

