// Los objetos se guardan en la memoria HEAP
// Los primitivos se guardan en la memoria STACK
// lo que enrealidad se guarda en la memoria HEAP es la referencia al objeto
// un POINTER es una referencia a un espacio en memoria

const juan = {
  nombre: "Juan",
  age: 18,
  approvedCourses: ["Curso 1", "Curso 2"],
  addCourse(newCourse) {
    console.log("this", this);
    console.log("this.approvedCourses", this.approvedCourses);
    this.approvedCourses.push(newCourse);
  },
};
// no aparece con Object.keys // no se puede editar ni eliminar
Object.defineProperty(juan, "NASA", {
  value: "extraterrestre",
  writable: false,
  enumerable: false,
  configurable: false,
});
// esto no se listara cuando se use Object.keys // se puede editar y eliminar
Object.defineProperty(juan, "navigator", {
  value: "chrome",
  writable: true,
  enumerable: false,
  configurable: true,
});
// se listara en Object.keys // no se puede editar y eliminar
Object.defineProperty(juan, "editor", {
  value: "vscode",
  writable: false,
  enumerable: true,
  configurable: true,
});
// se lista en Object.keys // se puede editar y no se puede borrar
Object.defineProperty(juan, "terminal", {
  value: "bash",
  writable: true,
  enumerable: true,
  configurable: false,
});
// todos los atributos tienen el configable en false por defecto
Object.seal(juan);
// todos los atributos tienen el configable y el writable en false por defecto
Object.freeze(juan);
console.log(Object.getOwnPropertyDescriptors(juan));

// no sirve esto
// Object.entries(juan)[3][1]("Curso 3");
