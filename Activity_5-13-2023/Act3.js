let students = ['Elen','Sam','Piolo','Dingdong','Pia','Barbie','Jessie','Luis','Robi','Marian'] 

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}
students.splice(8,1)
console.log(students);

let result = students.indexOf('Pia');
console.log(result);

students.push('Vina');
console.log(students);

console.log(students[0],students[4],students[5],students[6],students[8],students[9]);