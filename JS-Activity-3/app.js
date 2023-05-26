let students = ['Elen', 'Sam', 'Piolo', 'Dingdong', 'Pia', 'Barbie', 'Jessie', 'Luis', 'Robi', 'Marian'];

//1. using a loop, iterate throught this array and console.log all the students
for(let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

//2. command to remove Robi from the array
const removeRobi = students.findIndex(student => student === 'Robi');
if(removeRobi > -1) {
    students.splice(removeRobi, 1);
}
console.log(students);

//3.