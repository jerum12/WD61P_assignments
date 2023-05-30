// In this activity I rather used const rather than let and var because of the main reason of immutability
// attributes of const since it cannot be reassigned and redeclared or in other words it is intended to
// remain constant and not be modified during the code process.
const bootcampName = "Kodego";
const maleStudents = 30;
const femaleStudents = 20;
const lecture = "Data Types & Variables";
const moreMaleStudents = true;

console.log(typeof bootcampName); //string
console.log(typeof maleStudents); //number
console.log(typeof femaleStudents); //number
console.log(typeof lecture); //string
console.log(typeof moreMaleStudents); //boolean

console.log("The " + bootcampName + " Bootcamp program enrolls mostly " + (maleStudents + femaleStudents) + " students. Students studying " + lecture + " include " + femaleStudents + " females & " + maleStudents + " males.");

//The Kodego Bootcamp program enrolls mostly 50 students. Students studying Data Types & Variables include 20 females & 30 males.
