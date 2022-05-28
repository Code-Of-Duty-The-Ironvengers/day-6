hello();
// anon();

function hello() {
  // function declaration
  console.log("i love you wont you tell me your name");
}

// anonymous function

const anon = function () {
  // function expression
  console.log("Something");
};

anon();

const students = [
  {
    name: "Ethan",
  },
  { name: "Guillermo", from: "Spain", age: 28, livesIn: "Avila", height: 179 },

  {
    name: "Asem",
    age: 37,
    from: "Syria",
    livesIn: "Berlin",
    height: 173,
  },
  {
    name: "Daiane",
    age: 36,
    from: "Brazil",
    livesIn: "Fundao",
    height: 158,
  },
  {
    name: "Pelayo",
    age: 39,
    from: "Spain",
    livesIn: "Huelva",
    height: 177,
  },
  {
    name: "Tony",
    age: 32,
    from: "Netherlands",
    livesIn: "Amstels something",
    height: 190,
  },
  {
    name: "Nico",
    age: 30,
    from: "Germany",
    livesIn: "Paris",
    height: 183,
  },
  {
    name: "Maxime",
    age: 40, // this sounds like im being played
    from: "Netherlands",
    livesIn: "Hip Amsterdam Noord",
    height: 165,
  },
  {
    name: "Elvan",
    age: 50,
    from: "Germany",
    livesIn: "Hamburg",
    height: 175,
  },
  { name: "Nuno", age: 19, from: "Portugal", livesIn: "Porto", height: 170 },
  { name: "Diana", age: 29, from: "Lebanon", livesIn: "Paris", height: 168 },
  {
    name: "Tiffany",
    age: 27,
    from: "Taiwan",
    livesIn: "Paris",
    height: 163,
  },
  {
    name: "Soumia",
    from: "Morocco",
    livesIn: "Amsterdam",
    age: 34,
    height: 165,
  },
  { name: "Joao", from: "Portugal", livesIn: "Peniche", age: 26, height: 180 },
  {
    name: "Aderemi",
    livesIn: "Berlin",
    from: "Nigeria",
    age: 27,
    height: 170,
  },
  {
    name: "Vincent",
    from: "Germany",
    livesIn: "Berlin",
    age: 31,
    height: 168,
  },
  {
    name: "Abhijeet",
    age: 39,
    from: "India",
    livesIn: "Paris",
    height: 177,
  },
  {
    name: "Filipe",
    age: 25,
    from: "Portugal (Madeira Island)",
    livesIn: "Goth in a burg",
    height: 175,
  },
  {
    name: "Dani",
    from: "Spain",
    age: 38,
    livesIn: "Granda",
    height: 187,
  },
  {
    name: "Andre",
    from: "Portugal",
    age: 27,
    livesIn: "Amsterdam",
    height: 186,
  },
];
// box with students

const studentsBelow170 = [];
// if (students[height] > 170) {
//   studentsBelow170.push(student);
// }

for (const student of students) {
  if (student.height < 170) {
    studentsBelow170.push(student);
  }
}

console.log(studentsBelow170);

const studentsFromSpain = [];
// new box with elements that we are going to add

for (const student of students) {
  if (student.from === "Spain") {
    studentsFromSpain.push(student);
  }
}
console.log("studentsFromSpain:", studentsFromSpain);

function filterSpeciallyForWhatIWant(array, functino) {
  const whateverINeed = [];
  //
  for (let i = 0; i < array.length; i++) {
    //
    const isTruthy = functino(array[i]);
    //
    if (isTruthy) {
      //
      whateverINeed.push(array[i], i);
      //
    }
  }
  //
  return whateverINeed;
}

// // the basis of functional programming
// const studentsFromSpainSpecial = filterSpeciallyForWhatIWant(
//   students,
//   function (student) {
//     return student.from === "Spain";
//   }
// );

// console.log(
//   filterSpeciallyForWhatIWant(students, function (student) {
//     return student.height < 170;
//   })
// );

const studentsLessThan170 = students.filter(function (student) {
  //   console.log("student:", student);
  return student.height < 170;
});

console.clear();
// const studentsFromEspain = students.filter(function (student, index, array) {
const studentsFromEspain = students.filter(function (student) {
  console.log("student:", student);
  console.log("------");
  return student.from === "Spain";
});

const studentsInEvenIndexes = console.log(
  "studentsFromEspain:",
  studentsFromEspain
);
console.log(studentsLessThan170);

// console.log("studentsFromSpainSpecial:", studentsFromSpainSpecial);

const filterOutHumansGetOnlyGhosts = students.filter(function (student) {
  return !student.height;
});
console.log("filterOutHumansGetOnlyGhosts:", filterOutHumansGetOnlyGhosts);

const peopleThatAreLyingAboutTheirAge = students.filter(function (student) {
  return (
    student.name === "Maxime" ||
    student.name === "Daiane" ||
    student.name === "Pelayo" ||
    student.name === "Elvan"
  );
});

console.log(
  "peopleThatAreLyingAboutTheirAge:",
  peopleThatAreLyingAboutTheirAge
);

console.clear();

function myFind(array, functino) {
  //
  for (let i = 0; i < array.length; i++) {
    //
    const truthyValue = functino(array[i], i, array);
    //
    if (truthyValue) {
      //
      return truthyValue;
      //
    }
    //
  }
  //

  return undefined;
}

const tiffany = students.find(function (student) {
  return student.name === "Tiffany";
});

console.log("tiffany:", tiffany);

console.clear();

const justStudentNames = [];

for (const student of students) {
  justStudentNames.push(student.name);
}

console.log("justStudentNames:", justStudentNames);

function iterateOverEverything(array, functino) {
  const targetArray = [];

  for (let i = 0; i < array.length; i++) {
    //
    const result = functino(array[i], i, array);
    //
    targetArray.push(result);
  }

  return targetArray;
}

const justStudentNamesSpecial = iterateOverEverything(
  students,
  function (student) {
    return student.name;
  }
);
console.log("justStudentNamesSpecial:", justStudentNamesSpecial);

console.clear();
// map

const mappedStudentNames = students.map(function (student) {
  return student.age;
});
console.log("mappedStudentNames:", mappedStudentNames);

console.clear();

function makeCopy(array, startingValue, endValue) {
  const copy = [];

  const start = startingValue || 0;
  const end = endValue || array.length;

  for (let i = start; i < end; i++) {
    copy.push(array[i]);
  }

  return copy;
}

const copyOfStudents = students.slice(3, 7);
console.log("copyOfStudents:", copyOfStudents);
