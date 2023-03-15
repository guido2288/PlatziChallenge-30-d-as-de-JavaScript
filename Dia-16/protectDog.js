function protectDog(dog) {
  // Tu código aquí 👈

  let propName = Object.getOwnPropertyNames(dog);
  const nuevoObjeto = Object.assign({}, dog)

  propName.forEach(function (name) {
    let prop = dog[name];

    if (typeof (prop) == 'object' && prop !== null) {
      Object.freeze(prop)
    };
  });

  Object.freeze(nuevoObjeto);

  return nuevoObjeto;

};



console.log(protectDog({
  name: "Romeo",
  age: 3,
  owner: { name: "Victor", phoneNumber: "555-555-5555" },
  favoriteFood: ["pollito", "croquetas"],
  activities: ["jugar", "caminar"],
}));