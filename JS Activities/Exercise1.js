var data = {
  nameOfBootcamp: `Kodego`,
  maleStudents: 30,
  femaleStudents: 20,
  lecture: "Data Types & Variables",
  moreMaleStudentsThanFemale: true,
};

for (var x in data) {
  console.log(typeof data[x]);
}

function students() {
  if (data.maleStudents > data.femaleStudents) {
    return `Male`;
  } else if (data.maleStudents === data.femaleStudents) {
    return `Male and Female`;
  } else {
    return `Female`;
  }
}

console.log(
  "The " +
    data.nameOfBootcamp +
    " Bootcamp program enrolls mostly " +
    students() +
    " Students. \nStudents studying " +
    data.lecture +
    " include " +
    data.femaleStudents +
    " females & " +
    data.maleStudents +
    " males."
);
