// Exercise (1st Activity in Js)
// 1. Declare and assign a variable for each item in the list above.
// 2. Print out the type of each variable
// 3. Print out a sentence that says "The ___ Bootcamp program enrolls mostyly ___ student. Student studying ___ include __ females & males."

// 1. Declare and assign a variable for each item in the list above.
var bootcampName = "Kodego";
var maleStudents = 30;
var femaleStudents = 20;
var lecture = "Data Type and Variables";
var areThereMoreMaleStudentsThanFemale = true;

// 2. Print out the type of each variable
console.log(typeof bootcampName);
console.log(typeof maleStudents);
console.log(typeof femaleStudents);
console.log(typeof lecture);
console.log(typeof areThereMoreMaleStudentsThanFemale);

// 3. Print out a sentence that says "The ___ Bootcamp program enrolls mostyly ___ student. Student studying ___ include __ females & males."
console.log(
  "The " +
    bootcampName +
    " bootcamp enroll most male students. Students studying " +
    lecture +
    " include " +
    femaleStudents +
    " females and " +
    maleStudents +
    " males."
);
