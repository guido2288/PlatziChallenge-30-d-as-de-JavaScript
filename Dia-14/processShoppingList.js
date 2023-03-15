function processShoppingList(list) {
  // Tu código aquí 👈

  let price = 0;

  for (let i = 0; i < list.length; i++) {

    if (list[i].name.includes('oferta')) {
      list[i].price = (list[i].price - (list[i].price * 0.20)) * list[i].quantity
      price += list[i].price
    } else {
      list[i].price = list[i].price * list[i].quantity
      price += list[i].price
    };

    delete list[i].quantity

  };

  return price;

};

const shoppingList = [
  { name: "pan", price: 20, quantity: 2 }, //40
  { name: "leche", price: 25, quantity: 1 }, //20
  { name: "oferta manzanas", price: 10, quantity: 3 }, //24
]



console.log(processShoppingList(shoppingList));