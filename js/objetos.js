// ! objetos - Colecciones de elementos (key calue paairs )
// ! una entidad -> objeto
//! Que tiene caracteristicas - > propiedades
//! Lleva a cabo acciones -> metodos

// first_name: "ferdinand";

// const coche = {
//     color: '',
//     maxSpeed : ''

// metodo1 = encender
// metodo2 = acelerar
// metodo3 = frenar
// }

// nissan {
//     color: verde
//     maxSpeed: 180km

// }

// ! los objetetos en js colecciones de datos almecenados en una sola variable

//! Declaracion de objeto multilinea
// let academia = {
//   nombreacademia: "kodemia",
//   clasesOnline: true,
//   numeroEstudiantes: 80,
//   areaEstudio: "Programacion",
//   numeroProfesores: 20,
//   materia: ["html", "CSS", "Linux", "JavaScript"],
//   materiaProfesor: {
//     html: "Alfredo",
//     backend: "Ale",
//     talleress: {
//       linux: "Alfred",
//       git: "Ferdinand",
//     },
//   },
// };

// ! Acceder a propiedades
// ! Bracket notation
// ! -> []
// Objeto[propiedad]
// console.log(academia["materiaProfesor"]["html"]);
// let academiaNombre = "nombre";

// console.log(academia[academiaNombre]);

// // ! Dot notations
// // ! -> .
// objeto.propiedad
// console.log(academia.nombre);

// console.log(academia["materiaProfesor"].html);

// console.log(academia.numeroEstudiantes + 100);

// if (academia.clasesOnline) {
//   console.log("Puede estudiar de donde sea..");
// }

// // ! Practica
// const player = {
//   score: 88888,
//   level: 7,
//   lives: 2,
//   vitalEnergy: 1,
//   isAlive: true,
// };

// console.log(player);

// // !Jugador recibe un golpe critico
// player.vitalEnergy -= 25;

// // ! Si la energia vital del jugador es menor a 0 pasado "isAlive" = false
// player.isAlive = false;

// // ! Revisamos nuestro jugador
// console.log(player);

// // ! Si No esta vivo pero tienen mas vidas entonces -> Puntaje = 0, Vida -1, nivel = 0, energia vital = 100
// if (player.isAlive === false) {
//   player.score = 0;
//   player.level = 0;
//   player.lives -= 1;
//   player.vitalEnergy = 100;
//   player.isAlive = true;
// }

// console.log(player);

// ! Agregar nuevas propiedas

// const koder = {
//   fisrtName: "Luis",
//   lastName: "Rdz",
// };

// koder.modules = { html: true, css: true };


// // koder.modules{}.html = true;
// koder.modules.html = false;
// // console.log(koder);

// ! Eliminar propiedades de objeto

// delete koder.modules;

// console.log(koder);

// ! iterar sobre objetos

// const koder = {
//     fisrtName: "Luis",
//     lastName: "Rdz",
//     isActive: true
//   };
  
// koder.modules = { html: true, css: true };
// koder.test = {test: 'esto es una prueba' };


// for (propiedad in koder) {
//   console.log(propiedad, ': ', koder[propiedad]);


// //   console.log(`${propiedad} :  ${koder[propiedad]}`);
// }


// [1,2,4,[1,2]].forEach((cv) =>{
//     console.log(cv)
// })

// console.log(koder['fisrtName'])

// let iteracion = 1
// for (cv in koder){
//     console.log('cv es igual a: ',cv, 'en la iteracion', iteracion)
//     console.log('el valor de cv es: ',koder[cv])
//     iteracion++
// }

// ! spread operator syntax 
// const a = {
//   first: 'first'
// }

// const b = {...a}

// b.first = 'second'

// console.log(b)

// console.log(a)

//! Demo suma notas diversos metodos apartir del Obj.values()
// const notas = {
//   1: 10,
//   2: 7,
//   3: 5
// }

// let arrNotas = Object.values(notas)

// console.log(arrNotas)

// // Suma de notas usando for -> silvestre 

// // let total = 0
// // for(let i = 0; i < arrNotas.length; i++){
// //   total += arrNotas[i]
// // }

// // console.log(total)


// // Suma de notas con forEach 

// let total = 0
// Object.values(notas).forEach(nota => total += nota)

// console.log(total)

// // Suma de la notas usando un reduce 

// // totalNotasSemestre = 58
// let total3 = Object.values(notas).reduce((acc, notas) => {
//   acc += notas
//   return acc
// },)

// console.log(total3)

// ! Metodos de objetos 
// Docs -> https://www.programiz.com/javascript/library/object
  // Keys ->  Christohper 
  // Create -> Eduardo Ram
  // Entries -> Adrian  
  // Seal -> Jose 
  // values -> Mariana
  // Assign -> Jonathan
  // Freeze
  // is - 

  
// const a = {
//   a: 'ferdi'
// }
// const b = Object.create(a)

// console.log(b)

// const objTest = {
//   a : 'a',
//   b: 'b',
//   c: 'a'
// }


// Object.freeze(objTest);

// objTest.a = 'vvvvvv'

// console.log(objTest)

// ! metodos de nuestros objetos 
// const mentor = {
//   firstName: "ferdinand",
//   lastName: "bracho",
//   module: {
//     javaScript: true,
//     git: true,
//     backend: false,
//   },
//   t: [1, 2, 3, 4],
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   }
//  };
//  console.log(mentor.fullName());
 

// ? This 
// ?https://www.geeksforgeeks.org/this-in-javascript/

// ! Funciones constructuras 
// function Mentor(nombre, apellido, edad, altura) {
//   this.nombre = nombre;
//   this.apellido = apellido;
//   this.edad = edad;
//   this.altura = altura;
//  }
  
//  ferdinand = new Mentor("ferdinand", "Bracho", 30, "1.79");
  
//  console.log(ferdinand);

//  ! Clases para contruir objetos 
// class Koder {
//   constructor(firstName, age){
//     this.firstName = firstName
//     this.age = age
//   }
//  }

//  let sofy = new Koder('Sofy', 0)
//  console.log(sofy)


//! Practica -> crear arrays de arrays apartir de un obj usando .map solución con .map()
// const makePairsMap = (obj) => {

//   return Object.keys(obj).map( (cv) => {
//               return [cv, obj[cv]]
//           })

//  }

//  let r = makePairsMap({ a: 1, b: 2 } )

//  console.log(r)