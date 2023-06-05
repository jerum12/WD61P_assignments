// var bootcampName = "Kodego";
// var maleStudents = 30;
// var femaleStudents = 20;
// var lecture = "Data Type and Variables";
// var areThereMoreMaleStudentsThanFemale = true;

var bootcampName = "Kodego";
var maleStudents = 30;
var femaleStudents = 20;
var lecture = "Data Type and Variables";
var areThereMoreMaleStudentsThanFemale = true;

console.log(typeof bootcampName);
console.log(typeof maleStudents);
console.log(typeof femaleStudents);
console.log(typeof lecture);
console.log(typeof areThereMoreMaleStudentsThanFemale);

// let male = 30;
// let female = 20;
// let areThereMoreMaleStudentsThanFemale = male > female;

// console.log(male > female);

// console.log(typeof "bootcampName");

// function areThereMoreMaleStudentsThanFemale(){}

// Exercise
// let students = ['Elen', 'Sam', 'Piolo', 'Dingdong', 'Pia', 'Barbie', 'Jessie', 'Luis', 'Robi', 'Marian']
// 1. Using a loop, iterate through this array and console.log all the students.
// 2. Write the command to remove Robi from the array.
// 3. Write the command that gives the indexOf where Pia is located.
// 4. Write the command to add your name to the end of the array.
// 5. Write the command that return all the girls name in the array of students.
let students = [
  "Elen",
  "Sam",
  "Piolo",
  "Dingdong",
  "Pia",
  "Barbie",
  "Jessie",
  "Luis",
  "Robi",
  "Marian",
];

// 1. Using a loop, iterate through this array and console.log all the students.
for (let i = 0; i < students.length; i++) {
  console.log("i--", students[i]);
}

// 2. Write the command to remove Robi from the array.
let stringToRemove = "Robi";

for (let i = 0; i < students.length; i++) {
  if (students[i] === stringToRemove) {
    students.splice(i, 1);
    break;
  }
}
console.log(students);

// 3. Write the command that gives the indexOf where Pia is located.

let index = students.indexOf("Pia");

console.log("Index of Pia:", index);

// 4. Write the command to add your name to the end of the array.

students.push("Marwin");
console.log(students);

// 5. Write the command that return all the girls name in the array of students.

let girlsNames = students.filter(function (name) {
  return (
    name.endsWith("a") ||
    name.endsWith("ie") ||
    name.endsWith("en") ||
    name.endsWith("an")
  );
});

console.log(girlsNames);
