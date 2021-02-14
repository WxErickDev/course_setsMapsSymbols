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
   //    console.log(producto);
   //    console.log(index);
   //    console.log(pertenece);
});

console.log(carrito);

// Del siguiente arreglo, eliminar los duplicados
const numeros = [10, 20, 30, 40, 50, 10, 20];

const noDuplicados = new Set(numeros);

console.log(noDuplicados);
