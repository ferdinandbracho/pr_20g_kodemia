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

const koder = {
    fisrtName: "Luis",
    lastName: "Rdz",
    isActive: true
  };
  
koder.modules = { html: true, css: true };
koder.test = {test: 'esto es una prueba' };


// for (propiedad in koder) {
//   console.log(propiedad, ': ', koder[propiedad]);


// //   console.log(`${propiedad} :  ${koder[propiedad]}`);
// }


// [1,2,4,[1,2]].forEach((cv) =>{
//     console.log(cv)
// })

// console.log(koder['fisrtName'])

let iteracion = 1
for (cv in koder){
    console.log('cv es igual a: ',cv, 'en la iteracion', iteracion)
    console.log('el valor de cv es: ',koder[cv])
    iteracion++
}