// Start by selecting the display Element.
const display = document.querySelector("#display");
//Select all buttons and store in buttons variable.
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => { //Kung ang mga button ay na-click, the associated code inside the event handler is executed.
    if (item.id == "clear") { //If the clear button is clicked the dsplay is cleared.
      display.innerText = "";
    } else if (item.id == "backspace") { //If the backspace button is clicked the last character entered is cleared or removed.
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText); //na-evaluate ang expression ug magdisplay sa result using eval() function kung dili empty ug matuplok ang = button.
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000); // kung walay input ug matuplok ang equal magdisplay ug Empty temporarily then mawala lang pud sya.
    } else {
      display.innerText += item.id; //Gina-display ang mga button based sa ilang mga id ex 1,2,3 and so forth.
    }
  };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => { //onclick is an event listener hehe...
  calculator.classList.toggle("dark");  //classlist.toggle() method allows switching between dark and light theme by clicking the dark class on the calculator element.
  themeToggleBtn.classList.toggle("active");  //Ang active class is defined sa CSS element para ma-change ang appearance ng theme toggler button when it is active.
  isDark = !isDark;
};