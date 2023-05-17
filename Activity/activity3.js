let students = ['Elen','Sam','Piolo','Dingdong','Pia','Barbie','Jessie','Luis','Robi','Marian']

for(let i = 0;i < students.length;i++){
    console.log(students[i])
}
// let position = students.findIndex(findRobi);
// function findRobi(value){
//     return value === "Robi"
// }
// console.log(position);

// let positionRobi = students.indexOf("Robi");
// console.log(positionRobi)

const deleteRobi = delete students[8]
console.log(deleteRobi)

let positionPia = students.indexOf("Pia");
console.log(positionPia)

let newStudents = students.push("Jireh")

let girlStudents = new Array('Elen','Sam','Pia','Barbie','Jessie','Marian')
console.log(girlStudents);



const girls = students.filter(filterStudents)

function filterStudents(name){
    return name !== 'Piolo' && name !== 'Dingdong' && name !== 'Luis' && name !== 'Robi' && name !== 'Jireh'
}

console.log("girsl list ",girls);

