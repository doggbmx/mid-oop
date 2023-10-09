// const obj1 = {
//   a: "a",
//   b: "b",
//   c: {
//     d: "d",
//     e: "e",
//   },
// };

// let obj2 = {};

// // basicamente no modifica el objeto original
// // si hay objetos anidados, el objeto original y todo se va a modificar
// for (prop in obj1) {
//   obj2[prop] = obj1[prop];
// }

// // nuevo metodo de shallow copy
// // este asigna los valores de obj1 a obj3, obj3 se ve afectado por los cambios de obj1
// const obj3 = Object.assign({}, obj1);
// // este asigna los valores de obj1 a obj4, parece vacio pero en realidad
// // su prototipo es obj1, se puede modificar obj4, sin afectar al obj1
// // pero si modificas obj1, obj4 se vera afectado
// const obj4 = Object.create(obj1);

// function recursiva() {
//   if (/* validacion */) {
//     return recursiva();
//   } else {
//     return /* valor */;
//   }
// }

const numeritos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let numerio = 0;
// for (let index = 0; index < numeritos.length; index++) {
//   numerio = numeritos[index];
//   console.log({ index, numerio });
// }

// HERE GOES THE FUN PART

function recursiva(arrayNumeros) {
  if (arrayNumeros.length != 0) {
    const firstNumber = arrayNumeros[0];
    console.log(firstNumber);

    arrayNumeros.shift();
    recursiva(arrayNumeros);
  }
}
