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

console.log(Object.keys(juan));
console.log(Object.getOwnPropertyNames(juan));
console.log(Object.entries(juan));

console.log(Object.getOwnPropertyDescriptors(juan));
Object.defineProperty(juan, "test", {
  value: "extraterrestre",
  writable: false,
  enumerable: false,
  configurable: false,
});
// no sirve esto
// Object.entries(juan)[3][1]("Curso 3");
