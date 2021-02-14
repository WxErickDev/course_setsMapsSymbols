const sym = Symbol('1');
const sym2 = Symbol('1');

// Nunca un Symbol es igual a otro
// console.log(Symbol() === Symbol());

/* if (sym === sym2) {
   console.log('Son iguales!!');
} else {
   console.log('Son diferentes');
} */

const nombre = Symbol();
const apellido = Symbol();

const persona = {};

// Agregar nombre y apellido como llaves del objeto
persona[nombre] = 'Juan';
persona[apellido] = 'De la torre';
persona.tipoCliente = 'Premium';
persona.saldo = 500;

// console.log(persona);
// console.log(persona.saldo);
// console.log(persona.nombre); // undefined
// console.log(persona[nombre]);

// Las propiedades que utilizan un symbol no son iterables
/* for (const i in persona) {
   console.log(i);
} */

// Definir una descripcion del symbol
const nombreCliente = Symbol('Nombre del Cliente');
const cliente = {};

cliente[nombreCliente] = 'Pedro';

console.log(cliente);
console.log(cliente[nombreCliente]);
console.log(nombreCliente);
