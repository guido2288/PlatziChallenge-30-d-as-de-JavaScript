class Subscriber {
  // Tu código aquí 👈
  constructor(email) {
    this.email = email
  }

  receive(article) {
    return console.log(`${this.email} ha recibido el artículo: ${article}`)
  }

}


class Newsletter {
  // Tu código aquí 👈

  constructor() {
    this.suscriptores = []
  }

  subscribe(subscriber) {
    this.suscriptores.push(subscriber)
  }

  unsubscribe(email) {

    const index = this.suscriptores.indexOf(email);

    this.suscriptores.splice(index, 1);

  }

  post(article) {

    this.suscriptores.forEach(suscriptor => {
      suscriptor.receive(article.content)
    })

  }


}


const newsletter = new Newsletter();
const subscriber1 = new Subscriber("pepe@mail.com");
const subscriber2 = new Subscriber("juanito@mail.com");
const subscriber3 = new Subscriber("pedro@mail.com");

const article = {
  title: "30 días de js",
  content: "Aprende js en 30 días"
}

newsletter.subscribe(subscriber1);
newsletter.subscribe(subscriber2);
newsletter.subscribe(subscriber3);

newsletter.post(article);



