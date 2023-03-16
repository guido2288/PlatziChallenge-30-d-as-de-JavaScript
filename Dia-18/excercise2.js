class User {
  // Tu código aquí 👈



  constructor(name, age, friends, messages) {
    this._name = name,
      this._age = age,
      this._friends = [],
      this._messages = []
  };

  get name() {
    return this._name
  };

  set name(newName) {
    this._name = newName
  };

  get age() {
    return this._age
  };

  set age(newAge) {
    this._age = newAge
  };

  get friends() {
    return this._friends;
  };

  set friends(newFriends) {
    this._friends = newFriends
  };

  get messages() {
    return this._messages;
  };

  set messages(newMessages) {
    this._messages = newMessages
  };


  addFriend(friend) {
    this.friends.push(friend)
  };

  sendMessage(message, friend) {

    this.messages.push(message);

    for (let i = 0; i < this.friends.length; i++) {

      if (this.friends[i].name === friend.name) {

        this.friends[i].messages.push(message)

      }

    };

  };

  showMessages() {
    return this._messages
  }


};


const usuario1 = new User("Juan", 20);
const usuario2 = new User("Maria", 25);
const usuario3 = new User("Jose", 22);
const usuario4 = new User("Lucas", 32);
usuario1.addFriend(usuario2);
usuario1.addFriend(usuario3);
usuario1.addFriend(usuario4);
usuario1.sendMessage('Hola Maria', usuario2);
