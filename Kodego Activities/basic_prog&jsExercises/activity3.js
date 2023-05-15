
let students = ['Elen', 'Sam', 'Piolo', 'Dingdong', 'Pia', ' Barbie', 'Jessie', 'Luis', 'Robi', 'Marian']

for (let i = 0; i < students.length; i++){
         console.log('i--', students[i]);
    }

console.log(students);
students.splice(8,1);
console.log(students);

let index = students.indexOf('Pia');
console.log(index);

console.log(students);
students.push('Ken');
console.log(students);

students.splice(1,3);
console.log(students);

students.splice(4,1);
console.log(students);

students.splice(5,1);
console.log(students);