let students = ["Ellen","Sam","Piolo","Dingdong","Pia","Barbie","Jessie","Luis","Robi","Marian",];

//Using loop, iterate through this array and console log
for (let x in students) {
    console.log(students[x])};

//write the command to remove Robi from Array
let y = students.indexOf('Robi');
students.splice(y,1);
console.log("Robi is removed: "+students);

//Write the command that gives the IndexOf where Pia is located
let piaIndex = students.indexOf("Pia");
console.log("Index of Pia is : " + piaIndex);

//Write the command to add your name to the end of the array
students.push("Tiffany");
console.log(students);

//Write the command that return all the girls name in the array
const femaleStudents = () =>
{
for (i = 0 ; i < students.length ; i++){
if (students[i] === 'Elen' || students[i] === 'Sam' || students[i] === 'Pia' || students[i] === 'Barbie' || students[i] === 'Jessie' || students[i] === 'Marian'  || students[i] === 'Tiffany')
        {console.log(students[i], 'is Female');}else 
         console.log(students[i], 'is Male');}
}
femaleStudents();