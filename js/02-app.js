// WeakSet: Solo almacena objetos
const weakset = new WeakSet();

const cliente = {
   nombre: 'Juan',
   saldo: 100,
};

const nombre = 'Juan';

weakset.add(cliente);
// weakset.add(nombre); // Error

// console.log(weakset.has(cliente));
// console.log(weakset.has(cliente2)); // Error

// weakset.delete(cliente);

// console.log(weakset.size); // No valido para WeakSet

console.log(weakset);
