function findLargestPalindrome(words) {

  // Tu código aquí 👈

  let re = /[^A-Za-z0-9]/g;

  let polindromos = [];

  for (let i = 0; i < words.length; i++) {

    words[i] = words[i].toLowerCase().replace(re, '');

    let reverseWords = words[i].split('').reverse().join('');

    if (words[i] === reverseWords) {
      polindromos.push(words[i])
    };


  };

  if (polindromos.length === 0) {
    return console.log(null)
  };

  console.log(polindromos)

  let respuesta = '';

  for (let i = 0; i < polindromos.length; i++) {


    if (respuesta.length < polindromos[i].length) {
      respuesta = polindromos[i]
    }


  }

  return console.log(respuesta)


};





findLargestPalindrome(["wow", "madam", "racecar", "level", "world", "hello"])

// findLargestPalindrome("world")