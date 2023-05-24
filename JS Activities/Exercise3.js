// const girls = [`Elen`, `Pia`, `Barbie`, `Jessie`, `Marian`];
// const boys = [`Sam`, `Piolo`, `Dingdong`, `Luis`, `Robi`];

// const students = girls.concat(boys);

let students = [
  `Elen`,
  `Sam`,
  `Piolo`,
  `Dingdong`,
  `Pia`,
  `Barbie`,
  `Jessie`,
  `Luis`,
  `Robi`,
  `Marian`,
];

//Number 1
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

//Number 2
let removeIndex = students.indexOf("Robi");
if (removeIndex !== -1) {
  students.splice(removeIndex, 1);
}
console.log(students);

//Number 3
let piaIndex = students.indexOf("Pia");
console.log("Pia: ", piaIndex);

//Number 4
students.push(`Jan`);
console.log(students);

//Number 5
removeStudents = [1, 2, 3, 7, 9];
const filtered = students.filter((value, index) => {
  return !removeStudents.includes(index);
});
console.log(`Girls Names: `, filtered);
