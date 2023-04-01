class Product {
  // Este código no debe ser editado ❌
  constructor(price) {
    this.price = price;
  }

  getPrice() {
    return this.price;
  }

  getDescription() {
    throw new Error("Este método debe ser implementado en las subclases");
  }
};


class BasicProduct extends Product {
  constructor(price, description) {
    // Tu código aquí 👈
    super();
    this.price = price;
    this.description = description;
  }

  getDescription() {
    // Tu código aquí 👈
    return this.description;
  }
};

class WarrantyDecorator extends Product {
  constructor(product) {
    // Tu código aquí 👈
    super();
    this.product = product;
  }

  getPrice() {
    // Tu código aquí 👈
    return this.product.getPrice() + 20
  }

  getDescription() {
    // Tu código aquí 👈
    return this.getDescription() + ' con garantía'
  }
};


class ShippingInsuranceDecorator extends Product {
  constructor(product) {
    // Tu código aquí 👈
    super();
    this.product = product
  }

  getPrice() {
    // Tu código aquí 👈
    return this.product.getPrice() + 20
  }

  getDescription() {
    // Tu código aquí 👈
    return this.getDescription() + ' con seguro de envío'
  }
}

