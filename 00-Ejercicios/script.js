/* 
  1. Crear y manipular arrays
  Crea un array con los números del 1 al 10. 
  Usa push() para agregar el número 11 al final y 
  unshift() para agregar el número 0 al principio. 
  Imprime el array resultante. 
*/


let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numeros.push(11);
numeros.unshift(0);
console.log(numeros);

/*
  2. Eliminar y agregar elementos
  Crea un array con los nombres de 5 amigos. Usa pop() 
  para eliminar el último nombre y shift() para eliminar 
  el primero. Luego, usa push() y unshift() para agregar 
  dos nombres al final y al principio, respectivamente. 
  Imprime el array resultante.
*/

let amigos = ['emiliano', 'nico', 'maxi', 'ema', 'leo'];
amigos.pop();
amigos.shift();

console.log(amigos);

amigos.push('male', 'ale');
amigos.unshift('dante', 'gabi');

console.log(amigos);

let num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sliceNum = num2.slice(3, 7);
console.log(sliceNum);

let num3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let mapNum = num3.map(elem => elem * 3);

console.log('mapNum multiplica x3: ', mapNum);

let num4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filterNum = num4.filter(elem => elem % 2 == 0);

console.log('filterNum', filterNum);

let frutas = ['tomate', 'manzana', 'banana', 'kiwi'];
let filterFrutas = frutas.filter(element => element.includes('a'));

console.log(filterFrutas);

let num5 = [1, 24, 376, 4, 5, 62, 7, 868, 9, 10];
let everyNum = num5.every(element => element > 0);
let someNum = num5.some(elem => elem > 10);

console.log('everyNum', everyNum);
console.log('someNum', someNum);

let num6 = [1, 2, 3, 4, 5];
let reduceNum = num6.reduce((acc, currentValue) => {
  return acc + currentValue;
})

console.log(reduceNum);

let nombres = ['emiliano', 'nico', 'maxi', 'ema', 'leo'];
let abc = nombres.sort();
console.log(abc);

let num7 = [1, 2, 3, 4, 5];
let num8 = [6, 7, 8, 9, 10];

let concatNums = num7.concat(num8);
console.log('concatNum', concatNums);
let mapNun = concatNums.map(elem => elem * 2);
console.log(mapNum);

let num9 = [1, 2, 3, 4, 5];
num9.fill(99, 1, 4);
console.log('fillNum', num9);

let letras = ['a', 'b', 'c', 'd', 'e'];
letras.copyWithin(3, 1, 4);
console.log(letras);




