// Declare and assign a variable for each item in the list
const bootcampName = "kodego";
const maleStudents = 30;
const femaleStudents = 20;
const lecture = "data types and variables";
const areThereMoreMaleStudentsThanFemale = true;

// Print out the type of each variable
console.log("The type of bootcampName is " + typeof bootcampName);
console.log("The type of maleStudents is " + typeof maleStudents);
console.log("The type of femaleStudents is " + typeof femaleStudents);
console.log("The type of lecture is " + typeof lecture);
console.log("The type of areThereMoreMaleStudentsThanFemale is " + typeof areThereMoreMaleStudentsThanFemale);

// Print out a sentence that says
// "The (Name of the bootcamp) Bootcamp program enrolls mostly () students.
// Studens studying (lecture) include (Female) & and (Males) males"
console.log(`
The ${bootcampName} Bootcamp program enrolls mostly ${areThereMoreMaleStudentsThanFemale ? "male" : "female"} students.
Students studying ${lecture} include ${femaleStudents} females & and ${maleStudents} males.
`);