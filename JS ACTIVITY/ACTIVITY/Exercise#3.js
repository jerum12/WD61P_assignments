// let students= ['Elen', 'Sam', 'Piolo', 'Dingdong', 'Pia', 'Barbie', 'Luis', 'Robi', 'Marian']

//Using loop, iterate through this array and console.log all the students


const arrayStudents= ['Elen', 'Sam', 'Piolo', 'Dingdong', 'Pia', 'Barbie', 'Luis', 'Robi', 'Marian'];
const gender= ['female', 'female', 'male', 'male', 'female,', 'female', 'male', 'male', 'female'];

for (let i = 0; i < arrayStudents.length; i++){
    console.log('i--', arrayStudents[i]);
}

//Write the command to remove Robi from the array

const index =arrayStudents.indexOf(deletedUser);
arrayStudents.splice(index,7);
console.log('arrayStudents');

//Write command that gives the index of where pia is located

const piaIndex = arrayStudents.indexOf('Pia');
console.log({piaIndex});

//Write the command to add your name to the end of the array

arrayStudents.push('Kristine Joy');
console.log();

//Write the command that return all the girls name in the array of student

const genderIndex = gender.indexOf('female');
