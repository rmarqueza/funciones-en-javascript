/*
  La funcion saludar() envia un mensaje a la consola
*/
function saludar(){
  console.log("Hello World!");
}

//Para que una funcion se ejecute,
//esta debe ser invocada (llamada por su nombre y parentesis)
//A continuacion se llama a la funcion saludar()
saludar();

/*
La funcion saludar2() no envia mensajes a consola
 a diferencia de la funcion saludar()
 Es recomendable que las funciones retornen valores
 tal como lo hace saludar2() a traves de return
*/
function saludar2(){
  return "Hello Javascript!";
}
//Para ver resultados de saludar2() se tiene que
//invocar a la funcion, en este caso dentro de un log()
console.log(saludar2());

/*
  Es posible que las funciones necesiten de variables para 
  resolver un problema, en la funcion saludar3()
  se indica que recibe la variable nombre 
  (en las funcioenes se llaman parametros)
  y la funcion retorna el mensaje Hola + el valor de la variable nombre
*/
function saludar3(nombre){
  return "Hola " + nombre;
}

console.info(saludar3("Juan"));

