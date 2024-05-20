const objeto = { a: true, b: 42, c: false };

function getBooleanos(objeto) {
  const arr = [];
  for (const property in objeto) {
    if (objeto[property] === true || objeto[property] === false) {
      arr.push(property);
    }
  }
  return arr;
}

console.log(getBooleanos(objeto));
