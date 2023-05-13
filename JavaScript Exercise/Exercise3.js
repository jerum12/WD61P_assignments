let students = [
  "Ellen",
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

/* USING THE LOOP, ITERATE ITERATE THROUGH THIS ARRAY AND CONSOLE.LOG ALL THE STUDENTS */
for (let v in students) {
    console.log(students[v]);
}

/* WRITE THE COMMAND TO REMOVE ROBI FROM THE ARRAY */
const removeSomeone = (name = "Robi") => {
    const robiIndex = students.indexOf(name);
    students.splice(robiIndex, 1);
}
removeSomeone();
console.log(students);

/* WRITE THE COMMAND THAT GIVES THE INDEX OF WHERE PIA IS LOCATED */
let piaIndex = students.indexOf("Pia");
console.log("Index of Pia is : " + piaIndex);

/* WRITE THE COMMAND TO ADD YOUR NAME TO THE END OF THE ARRAY */
students.push("Johnskyle");
console.log(students);

/* WRITE THE COMMAND THAT RETURN ALL THE GIRLS NAME IN THE ARRAY OF STUDENTS */
const girlsNames = () => {
    const girlsIndex = [0, 1, 4, 5, 6, 8];

    for (let v in girlsIndex) {
        console.log(students[girlsIndex[v]]);
    }
}
girlsNames();