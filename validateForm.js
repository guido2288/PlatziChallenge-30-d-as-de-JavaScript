function validateForm(formData, registeredUsers) {
  // Tú código aquí 👈

  let missingData = [];

  if (!formData.name) {
    missingData.push('name')
  };
  if (!formData.lastname) {
    missingData.push('lastname')
  };
  if (!formData.email) {
    missingData.push('email')
  };
  if (!formData.password) {
    missingData.push('password')
  };

  if (!missingData[0]) {

    let emailVerified = registeredUsers.find(user => user.email == formData.email)

    if (!emailVerified) {
      registeredUsers.push({
        'name': formData.name,
        'lastname': formData.lastname,
        'email': formData.email
      })
      return console.log(`Tu registro fue exitoso ${formData.name} ${formData.lastname}`)
    } else {

      throw new Error(`Email ${formData.email} duplicado`);
    }

  } else {

    throw new Error(`Faltan los siguientes campos: ${missingData}`);
  }

}


const formData = {
  name: "Juan",
  lastname: "Perez",
  email: "pedro1@example.com",
  password: "123456"
};

const registeredUsers = [
  { name: "Pedro", lastname: "Gomez", email: "pedro@example.com" },
  { name: "Maria", lastname: "Garcia", email: "maria@example.com" },
]

console.log(validateForm(formData, registeredUsers))
