// WeakMap -> Las llaves siempre son objetos y los valores son arbitrarios

const producto = {
   idProducto: 10,
};

const weakmap = new WeakMap();

weakmap.set(producto, 'Monitor');

// console.log(weakmap.has(producto));
console.log(weakmap.get(producto));
// console.log(weakmap.delete(producto));
// console.log(weakmap.size); // No es valido el size

console.log(weakmap);
