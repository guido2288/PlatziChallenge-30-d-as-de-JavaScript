function groupProducts(products, category) {
  // Tu código aquí

  let filter = products.filter(product => product.category == category)
  let filterProducts = [];
  let filterTotalPrice = 0;

  filter.forEach(element => {
    filterProducts.push(element.name)
    filterTotalPrice += element.price
  });

  let result = {
    products: filterProducts.join(', '),
    totalPrice: filterTotalPrice
  };
  return result;

};

const products = [
  { name: "Smartphone", category: "Electronics", price: 800 },
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "Shirt", category: "Clothing", price: 50 },
  { name: "Pants", category: "Clothing", price: 100 },
];

console.log(groupProducts(products, "Clothing"));