class Pay {
  // Tu código aquí 👈

  makePay(quantity) {
    return {
      realized: true,
      quantity: quantity
    }
  }
};


class PayPal extends Pay {
  // Tu código aquí 👈
  constructor(email) {
    super();
    this.email = email;
  }

  makePay(quantity) {
    return {
      ...super.makePay(quantity),
      platform: "PayPal",
      email: this.email
    }
  }


};


class Card extends Pay {
  // Tu código aquí 👈
  constructor(cardNumber) {
    super();
    this.cardNumbers = cardNumber
  }

  makePay(quantity) {

    if (this.cardNumber.length === 16) {
      return {
        ...super.makePay(quantity),
        lastCardNumber: this.cardNumber.slice(-4)
      }
    } else {
      throw Error('No tiene 16 dígitos')
    }

  }
};


class Cash extends Pay {
  // Tu código aquí 👈
  makePay(quantity) {
    return super.makePay(quantity)
  }
}


function processPay(method, quantity) {
  // Tu código aquí 👈
  return method.makePay(quantity)
}
