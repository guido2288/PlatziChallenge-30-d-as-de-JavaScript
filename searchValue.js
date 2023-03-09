function searchValue(array, value) {
  // Tu código aquí 👈

  let flatArray = array.flat();
  let includeValue = flatArray.includes(value);

  if (!includeValue) {
    throw new Error("Valor no encontrado")
  } else {

    let row = 0;
    let column = 0;

    for (let i = 0; i < array.length; i++) {

      if (array[i].includes(value)) {
        column = array[i].indexOf(value)
        row = i
      };

    };

    return {
      row,
      column
    }
  };

}



const array = [
  [1, 5, 3],
  [4, 2, 6],
  [7, 8, 9],
];

const value = 45;

console.log(searchValue(array, value));