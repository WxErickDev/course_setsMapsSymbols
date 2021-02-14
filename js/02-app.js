// WeakSet

const weakset = new WeakSet();

const cliente = {
   nombre: 'Juan',
   saldo: 100,
};

const nombre = 'Juan';

weakset.add(cliente);
// weakset.add(nombre); // Error

// console.log(weakset.has(cliente2));

// weakset.delete(cliente);

console.log(cliente.size);

console.log(weakset);
