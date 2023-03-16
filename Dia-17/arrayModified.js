function arrayModified() {
  // Tu código aquí 👈

  Array.prototype.myFilter = function (exprecion) {

    let new_arr = []

    for (let i = 0; i < this.length; i++) {

      if (exprecion(this[i])) {
        new_arr.push(this[i])
      };

    };
    return new_arr;
  }

};

const array = [1, 2, 3, 4, 5]

array.myFilter(num => num % 2 === 0)


