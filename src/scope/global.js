// La palabra 'var' permite el error humano de
// declarar dos veces la misma variable y cambiar su valor
// 'let' no lo permite

// en este archivo se ejemplifican errores que no se deben hacer

var hello = "Hello";
var hello = "Hello +";
let world = "World";
const helloWorld = "Hello World!";

const anotherFunction = () => {
  console.log(hello);
  console.log(world);
  console.log(helloWorld);
};

anotherFunction();

const helloWorld = () => {
  globalVar = "im global";
};

helloWorld();
console.log(globalVar);

const anotherFunction = () => {
  var localVar = (globalVar = "im Global");
};
