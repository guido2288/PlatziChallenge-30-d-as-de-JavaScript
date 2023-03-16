function Animal() {

};

Animal.prototype.especie = 'Canino';

function Perro() {

};

Perro.prototype = Object.create(Animal.prototype);
Perro.prototype.ladrar = function () { console.log('Guauuu!') }

const perro = new Perro();

perro.ladrar();
console.log(perro.especie)