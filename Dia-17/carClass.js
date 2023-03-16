class Car {
  // Tu código aquí 👈

  constructor(brand, model, year, mileage, state) {
    this.brand = brand,
      this.model = model,
      this.year = year,
      this.mileage = mileage,
      this.state = false
  }

  turnOn() {
    return this.state = true;
  }

  turnOff() {
    return this.state = false;
  }

  drive(kilometers) {
    if (this.state === false) {
      throw new Error("El auto está apagado")
    } else {
      return this.mileage += kilometers
    }
  }

};

const toyota = new Car("Toyota", "Corolla", 2020, 0);

toyota.drive(100);
toyota.mileage
console.log(toyota)