console.log("Exercise3");

//1
let students = ['Elen', 'Sam', 'Piolo', 'Dingdong','Pia', 'Barbie', 'Jessie', 'Luis', 'Robi', 'Marian'];

for(let i = 0; i < students.length; i++){
    console.log(students[i]);
}

//2
students.splice(8, 8);
console.log(students);

//3
let res = students.indexOf("Pia");
console.log("The index of Pia is "+res);

//4
students.push("Lea Grace");
console.log(students);

//5

const girls = students.filter(checkGirls);
console.log(girls);

function checkGirls(students) {
return students !== "Piolo" && students !== "Dingdong" && students !== "Luis";
}
