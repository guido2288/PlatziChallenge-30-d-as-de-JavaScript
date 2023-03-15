function findFamousCats(cats) {
  // Tu código aquí 👈
  let max = 0;
  let famousCats = []; // array con suma de followers

  cats.forEach(cat => {

    let follower = (cat.followers.reduce(function (acumulador, numero) {
      return acumulador + numero
    }));

    if (max < follower) {
      famousCats = [cat.name];
      max = follower
    } else if (max === follower) {
      famousCats.push(cat.name)
    }


  });



  return famousCats;



};


findFamousCats([
  {
    name: "Mimi",
    followers: [320, 120, 70]
  },
  {
    name: "Milo",
    followers: [400, 300, 100, 200]
  },
  {
    name: "Gizmo",
    followers: [250, 750]
  }
])

