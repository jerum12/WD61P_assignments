let students = ['Elen','Sam','Piolo','Dingdong','Pia','Barbie','Jessie','Luis','Robi','Marian']
let studentsGender = ['f','f','m','m','f','f','f','m','m','f']

let numberOfSudents = students.length;
//1
for (let i = 0; i<numberOfSudents; i++) {
  console.log(students[i]);
}

//2
let removeRobi = students.indexOf('Robi');
students.splice(removeRobi,1);
studentsGender.splice(removeRobi,1);
console.log('Robi is removed: '+students);

//3
console.log('The index of Pia is '+students.indexOf('Pia'));

//4
students.push('Kervi');
studentsGender.push('m');
console.log(students);

//5
for (let i = 0; i<numberOfSudents; i++) {
  let ig = 'f';
  if (ig===studentsGender[i]) {
  console.log(students[i]);
  }
}