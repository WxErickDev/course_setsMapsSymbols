const carrito = new Set();

// Agregamos
carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');

// Eliminar un elemento del set
// carrito.delete('Disco #3');

// Si es false no elimina nada
console.log(carrito.delete('Guitarra'));

// Verificamos si el valor existe
console.log(carrito.has('Guitarra'));

// Ver el tamaño del sets
console.log(carrito.size);

// Limpiar todos los elementos
// carrito.clear();

carrito.forEach((producto, index, pertenece) => {
   // console.log(producto);
   // console.log(index);
   console.log(pertenece);
});

console.log(carrito);

// Del siguiente arreglo, eliminar los duplicados
// const numeros = [10, 20, 30, 40, 50, 10, 20];

// const noDuplicados = new Set(numeros);

// console.log(noDuplicados);

/**
 * PRÁCTICA
 */

/* const mySet1 = new Set();

console.log(mySet1.add(1)); // Set [1]
console.log(mySet1.add(5)); // Set [1,5]
console.log(mySet1.add(5)); // Set [1,5]
console.log(mySet1.add('some text')); // Set[1,5,'some text']

const o = { a: 1, b: 2 };

console.log(mySet1.add(o));

console.log(mySet1.add({ a: 1, b: 2 }));

// const o2 = { a: 1, b: 2 };
// console.log(mySet1.add(o2)); 

// Uso de has
console.log(mySet1.has(1));
console.log(mySet1.has(3));
console.log(mySet1.has(5));
console.log(mySet1.has(Math.sqrt(25)));
console.log(mySet1.has('Some Text'.toLowerCase()));
console.log(mySet1.has('Some Text'.toUpperCase()));
console.log(mySet1.has(o));

console.log(mySet1.size);

mySet1.delete(5);

mySet1.has(5);

console.log(mySet1.size);

console.log(mySet1);

console.log('================================');

// Iteradores para Set
for (const item of mySet1) {
   console.log(item);
}
 */
