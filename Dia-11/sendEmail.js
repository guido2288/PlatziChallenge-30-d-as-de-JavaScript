function sendEmail(email, subject, body) {
  // Tu código aquí 👈
  let respuesta = {
    email,
    subject,
    body
  }

  return new Promise((resolve, reject) => {

    if (!respuesta.email || !respuesta.subject || !respuesta.body) {
      reject(new Error("Error: Hacen falta campos para enviar el email"));

    } else {

      setTimeout(() => {

        resolve(respuesta)
      }, 2000)
    }


  })
};


sendEmail(
  "test@mail.com",
  "",
  "Únete a los 30 días de JS"
)
  .then(result => console.log(result))
  .catch(error => console.log(error))
