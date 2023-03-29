class User {
  // Este código no debe ser editado ❌
  constructor(name) {
    this.name = name;
    this.messages = [];
  }

  receiveMessage(message) {
    this.messages.push(message);
  }
};


class Chat {
  // Tu código aquí 👈
  constructor() {
    if (!Chat.instance) {
      this.users = [];
      Chat.instance = Object.freeze(this)
    }
    return Chat.instance
  };

  sendMessage(message) {
    this.users.forEach(user => user.receiveMessage(message))
  };

  addUser(user) {
    if (user instanceof User) {
      this.users.push(user)
    }

  }

  removeUser(name) {
    const index = this.users.findIndex(user => user.name = name);
    if (index > -1) {
      this.users.splice(index, 1);
    }
  }


}


