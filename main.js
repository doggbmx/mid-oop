// const obj1 = {
//   a: "a",
//   b: "b",
//   c: {
//     d: "d",
//     e: "e",
//   },
//   editA() {
//     this.a = "AAA";
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

function isObject(subject) {
  return typeof subject == "object";
}
function isArray(subject) {
  // return typeof subject == "array";
  return Array.isArray(subject);
}

function deepCopy(subject) {
  let copySubject;
  const subjectIsArray = isArray(subject);
  const subjectIsObject = isObject(subject);

  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  for (key in subject) {
    const keyIsObject = isObject(subject[key]);
    if (keyIsObject) {
      copySubject[key] = deepCopy(subject[key]);
    } else {
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }

  return copySubject;
}

function requiredParam(param) {
  throw new Error(param + " es obligatorio");
}

function LearningPaths({ name = requiredParam("name"), courses = [] }) {
  this.name = name;
  this.courses = courses;

  const private = {
    _name: name,
    _courses: courses,
  };

  // const public = {
  //   get name() {
  //     return private["_name"];
  //   },
  //   set name(newName) {
  //     if (newName === private["_name"]) {
  //       console.warn("El nuevo nombre no puede ser igual al anterior");
  //     } else {
  //       private["_name"] = newName;
  //     }
  //   },
  //   get courses() {
  //     return private["_courses"];
  //   },
  // };

  // return public;
}

function Student({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  approvedCourses = [],
  learningPaths = [],
  twitter,
  instagram,
  facebook,
} = {}) {
  const private = {
    _name: name,
    _learningPaths: learningPaths,
  };

  this.name = name;
  this.email = email;
  this.age = age;
  this.approvedCourses = approvedCourses;
  this.socialMedia = {
    twitter,
    instagram,
    facebook,
  };

  Object.defineProperty(this, "learningPaths", {
    get() {
      return private["_learningPaths"];
    },
    set(newLP) {
      if (newLP instanceof LearningPaths) {
        private["_learningPaths"].push(newLP);
      } else {
        console.warn("No puedes hacer eso!");
      }
    },
  });

  if (isArray(learningPaths)) {
    this._learningPaths = [];

    for (learningPathIndex in learningPaths) {
      this.learningPaths = learningPaths[learningPathIndex];
    }
  }
  this._learningPaths = learningPaths;
}

const escuelaWeb = new LearningPaths({
  name: "Escuela de desarrollo web",
  courses: [
    "Curso definitivo de HTML y CSS",
    "Curso practico de HTML y CSS",
    "Curso de responsive design",
  ],
});
const juan = new Student({
  name: "Juan",
  email: "asd@asd.com",
  age: 18,
  twitter: "juan",
});
