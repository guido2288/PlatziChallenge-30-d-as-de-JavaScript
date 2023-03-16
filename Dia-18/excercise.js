class Product {
  // No debes editar este archivo ❌
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  addToCart() {
    throw new Error(
      "La lógica de este método debe ser implementada por las clases hijas"
    );
  }
};


class Article extends Product {
  // Tu código aquí 👈
  constructor(name, price, quantity) {

    super(name, price, quantity);

  };

  addToCart() {
    return `Agregando ${this.quantity} unidades del artículo ${this.name} al carrito`
  };

};

class Service extends Product {
  // Tu código aquí 👈
  constructor(name, price, quantity) {

    super(name, price, quantity);

  };

  addToCart() {
    return `Agregando el servicio ${this.name} al carrito`
  };

};


class Cart {
  // Tu código aquí 👈

  cartList = []

  addProduct(product) {

    let item = {
      name: product.name,
      price: product.price,
      quantity: product.quantity
    };

    this.cartList.push(item)

  };

  deleteProduct(product) {

    let index = null;

    for (let i = 0; i < this.cartList.length; i++) {

      if (this.cartList[i].name === product.name) {
        index = i
      }

    };
    this.cartList.splice(index, 1)

  };

  calculateTotal() {

    let totalPrice = 0;

    for (let i = 0; i < this.cartList.length; i++) {
      totalPrice += (this.cartList[i].price * this.cartList[i].quantity);
    };

    return console.log(totalPrice);
  }

};


const book = new Article("Libro", 100, 2);
const course = new Service("Curso", 120, 1);
const cart = new Cart();


cart.addProduct(book);
cart.addProduct(course);
cart.calculateTotal();

