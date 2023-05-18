let outputtop = document.querySelector("#top");
let outputbottom = document.querySelector("#bottom");


function pressNum(e) {
  if (outputbottom.innerHTML === "0") {
    outputbottom.innerHTML = e.innerHTML;
  } else {
    outputbottom.innerHTML += e.innerHTML;
  }
}


function pressAllClear() {
  outputtop.innerHTML = "";
  outputbottom.innerHTML = "0";
}


function pressClear() {
  outputbottom.innerHTML = outputbottom.innerHTML.slice(0, -1);
}


function pressEqual() {
  let exp = outputbottom.innerHTML;
  outputtop.innerHTML = exp;
  exp = exp.replace(/×/g, "*").replace(/÷/g, "/");
  let result;
  try {
    result = eval(exp);
    
    if (result.toString().indexOf(".") !== -1) {
      result = result.toFixed(4);
    }
  } catch (e) {
    result = "walang ganon mars";
  }
  outputbottom.innerHTML = result;
}

function pressOperator(e) {
    outputbottom.innerHTML += e.innerHTML;
}

function pressDot() {
  outputbottom.innerHTML += ".";
}

function pressBracket(e) {
  outputbottom.innerHTML += e.innerHTML;
}

;