function getStudentAverage(students) {
  // Tu código aquí 👈
  let result = {
    classAverage: 0,
    students: []
  };

  let promedioGeneral = 0;

  for (let i = 0; i < students.length; i++) {

    let sumatoria = 0;



    students[i].grades.forEach(element => {

      sumatoria += element

    });

    let promedio = Number((sumatoria / students[i].grades.length).toFixed(2));

    promedioGeneral += promedio

    let estudiante = { name: `${students[i].name}`, average: promedio }


    result.students.push(estudiante)
  }

  result.classAverage = Number((promedioGeneral / result.students.length).toFixed(2))

  return result;

};

// let average = {
//   classAverage: 0,
//   students: []
// };

// average.classAverage = 88.17;
// average.students.push('Pedro');


getStudentAverage([
  {
    name: "Pedro",
    grades: [90, 87, 88, 90],
  },
  {
    name: "Jose",
    grades: [99, 71, 88, 96],
  },
  {
    name: "Maria",
    grades: [92, 81, 80, 96],
  },
])
