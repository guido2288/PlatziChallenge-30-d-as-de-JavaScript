class Account {
  constructor(accountNumber, balance, name) {
    this._accountNumber = accountNumber;
    this._balance = balance;
    this._name = name;
  }

  deposit(amount) {
    this._balance += amount;
  }

  withdraw(quantity) {
    if (quantity <= this._balance) {
      this._balance -= quantity;
    } else {
      console.log("Saldo insuficiente");
    }
  }

  getBalance() {
    return this._balance;
  }
};

const myAccount = new Account("123456789", 1000, "Juan");

console.log(myAccount.balance);