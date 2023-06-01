let students = ['Elen', 'Sam', 'Piolo', 'Dingdong', 'Pia', 'Barbie', 'Jessie', 'Luis', 'Robi', 'Marian'];

// 1. Iterate through the array and console.log all the students
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

// 2. Remove 'Robi' from the array
let index = students.indexOf('Robi');
if (index > -1) {
    students.splice(index, 1);
}

// 3. Get the index of 'Pia'
console.log(students.indexOf('Pia'));

// 4. Add your name to the end of the array
students.push('Julyza');

// 5. Return all the girls' names in the array of students
let girls = students.filter(student => !['Sam', 'Dingdong', 'Luis'].includes(student));
console.log(girls);
