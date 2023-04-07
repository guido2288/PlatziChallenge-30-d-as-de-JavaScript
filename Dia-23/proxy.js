class Messages {
  // No debes editar este código ❌
  constructor() {
    this.history = [];
  }

  sendMessage(text) {
    this.history.push(text);
  }

  getHistory() {
    return this.history;
  }
};

class User {
  constructor(name) {
    // Tu código aquí 👈
    this.name = name;
    this.isLogged = false
  }

  login() {
    // Tu código aquí 👈
    return this.isLogged = true
  }

  logout() {
    // Tu código aquí 👈
    return this.isLogged = false
  }

  isLoggedIn() {
    // Tu código aquí 👈
    return this.isLogged
  }
};

export class MessagesProxy {
  constructor(messages, user) {
    this.messages = messages,
      this.user = user
  }
  validateUserLogin(user) {
    if (!user) {
      throw new Error("Usuario no registrado")
    } else {
      return true
    }
  }
  sendMessage(text) {
    this.validateUserLogin(this.user.isLoggedIn()) && this.messages.sendMessage(text)
  }
  getHistory() {
    return this.validateUserLogin(this.user.isLoggedIn()) && this.messages.getHistory()
  }
}

const user = new User('Guido');
const messages = new Messages()
const messagesProxy = new MessagesProxy(messages, user)

user.login()
messagesProxy.sendMessage("Hola")
console.log(messagesProxy.getHistory())