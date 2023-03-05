function createCalculator() {
  // Tu código aquí 👈
  let _contador = 0;

  function add(numero) {
    return _contador += numero;
  };

  function subtract(numero) {
    return _contador -= numero;
  };

  function multiply(numero) {
    return _contador *= numero;
  };

  function divide(numero) {
    return _contador /= numero;
  };

  function clear() {
    return _contador = 0;
  }

  function getTotal() {
    return _contador
  }

  return {
    add,
    subtract,
    multiply,
    divide,
    clear,
    getTotal
  }

}

const calculator = createCalculator();

calculator.add(10);

