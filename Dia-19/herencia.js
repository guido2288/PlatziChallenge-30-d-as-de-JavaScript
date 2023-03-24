class Animal {
  // Tu código aquí 👈
  constructor(name, age, specie) {
    this.name = name,
      this.age = age,
      this.specie = specie
  };

  getInfo() {
    return this
  }
}

class Mammal extends Animal {
  // Tu código aquí 👈
  constructor(name, age, specie, hasFur) {
    super(name, age, specie);
    this.hasFur = hasFur
  }

  getInfo() {
    return { ...this, ...this.hasFur }
  }
}

class Dog extends Mammal {
  // Tu código aquí 👈
  constructor(name, age, breed, hasFur, specie = 'dog') {
    super(name, age, specie, hasFur);
    this.breed = breed
  };

  getInfo() {
    return this
  }

  bark() {
    return "woof!"
  }
}
