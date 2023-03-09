const objects = [{ name: 'John' }, { name: 'Jane' }, { name: 'Jim' }];


const allHaveName = objects.every(function (element) {
  return element.hasOwnProperty('name');
});

console.log(allHaveName);
