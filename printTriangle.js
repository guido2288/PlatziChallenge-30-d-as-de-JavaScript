function printTriangle(size, character) {

  let piso = '';

  let respuesta = '    *' + "\n" + '   **' + "\n" + '  ***' + "\n" + ' ****' + "\n" + '*****';

  for (let i = 0; i < size; i++) {

    for (let j = 1; j < size - 1; j++) {

      piso = piso + ' ';

    };

    for (let j = 0; j < i + 1; j++) {

      piso = piso + character + "\n"

    }

  };





  // for (let i = 0; i < size; i++) {

  //   for (let j = 0; j < size - i; j++) {
  //     piso = piso + ' ';

  //   };

  //   for (let j = 0; j < i + 1; j++) {
  //     piso = piso + character

  //   };
  //   console.log(piso)

  // };

  return piso


};


console.log(printTriangle(5, "*"))

// console.log('Hola soy' + "\n" + "Guido")