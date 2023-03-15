function sortByAvailabilityAndPrice(products) {
  // Tu código aquí 👈


  let inStock = products.filter(product => product.inStock == true);
  inStock.sort((a, b) => a.price - b.price);

  let notInStock = products.filter(product => product.inStock == false);
  notInStock.sort((a, b) => a.price - b.price);

  let objeto = inStock.concat(notInStock)
  return objeto

}

const products = [
  { name: "product1", price: 10, inStock: true },
  { name: "product2", price: 20, inStock: false },
  { name: "product3", price: 5, inStock: true },
  { name: "product4", price: 5, inStock: false },
];


console.log(sortByAvailabilityAndPrice(products))