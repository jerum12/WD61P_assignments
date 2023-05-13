const nameOfBootcamp = 'Kodego';
var MaleStudents = 30;
var FemaleStudents = 20;
var Lecture = 'Data Types & Variables';

var Majority
if (MaleStudents>FemaleStudents) {
  var condition = true
  console.log('Are there more males than females? '+condition)
  Majority = 'male';
}else {
  var condition = false
  console.log('Are there more males than females? '+condition)
  Majority = 'female';
}

let nameType = typeof(nameOfBootcamp);
console.log('The variable type for Name of Bootcamp is '+nameType+'.');

let maleType = typeof(MaleStudents);
console.log('The variable type for number of male students is '+maleType+'.');

let femaleType = typeof(FemaleStudents);
console.log('The variable type for number of female students is '+femaleType+'.');

let lectType = typeof(Lecture);
console.log('The variable type for the lecture is '+lectType+'.');

let condType = typeof(condition);
console.log('The variable type for the comparison of students is '+condType+'.');

console.log('The '+nameOfBootcamp+' Bootcamp program enrolls mostly '+Majority+' students. Students studying '+Lecture+' include '+FemaleStudents+' females & '+MaleStudents+' males.')