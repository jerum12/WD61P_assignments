let students = ["Elen","Sam","Piolo","Dingdong","Pia","Barbie","Jessie","Luis","Robi","Marian"]
let gender = ["f","f","m","m","f","f","f","m","m","f"]

let numberOfSudents = students.length;

//Using loop, iterate through this array and console log

for (let i = 0; i<numberOfSudents; i++) {
  console.log(students[i]);
}

//Command to remove Robi

let removeRobi = students.indexOf('Robi');
students.splice(removeRobi,1);
gender.splice(removeRobi,1);
console.log("Robi is removed: "+students);

//Command that gives the IndexOf where Pia is located

console.log("The index of Pia is "+students.indexOf("Pia"));

//Command to add your name to the end of the array

students.push("Kervi");
gender.push("m");
console.log(students);

//Command that return all the girls name in the array

for (let i = 0; i<numberOfSudents; i++) {
  let ig = "f";
  if (ig===gender[i]) {
  console.log(students[i]);
  }
}