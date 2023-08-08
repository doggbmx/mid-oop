const obj1 = {
  a: "a",
  b: "b",
  c: {
    d: "d",
    e: "e",
  },
};

let obj2 = {};

// basicamente no modifica el objeto original
// si hay objetos anidados, el objeto original y todo se va a modificar
for (prop in obj1) {
  obj2[prop] = obj1[prop];
}

// nuevo metodo de shallow copy
// este asigna los valores de obj1 a obj3, obj3 se ve afectado por los cambios de obj1
const obj3 = Object.assign({}, obj1);
// este asigna los valores de obj1 a obj4, parece vacio pero en realidad
// su prototipo es obj1, se puede modificar obj4, sin afectar al obj1
// pero si modificas obj1, obj4 se vera afectado
const obj4 = Object.create(obj1);
