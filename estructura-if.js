/*

Las estructuras if comparan variables con valores especificos
o con otras variables. Estas comparaciones son logicas y booleanas
por lo que los resultados pueden ser Falsos o Verdaderos.
Una instruccion if sencilla contiene 1 o 2 partes.
Instruccion if con una sola partes  
  if(condicion){
    instrucciones
  }
Instrucion if con 2 partes
  if(condicion){
    instruciones en caso de condicion positiva
  }else{
    instrucciones en caso de condicion negativa
  }

  OJO: Las funciones se pueden almacenar como variables con let.
 */
let estadoDeTarea = (estado) =>{
  if (estado == false){
    return "Tarea pendiente.";
  }else{
    return "Tarea terminada.";
  }
}
console.log(estadoDeTarea(true));
console.log(estadoDeTarea(false));
console.log(estadoDeTarea(1));
console.log(estadoDeTarea(0));

let accionesSegunEstadoCivil = estadoCivil => {
  let accion = "";
  if (estadoCivil == "soltero"){
    accion = "Estudia y trabaja, aprende a vivir!";
  }else if(estadoCivil == "acompañado"){
    accion = "Cásate!";
  }else if(estadoCivil == "casado"){
    accion = "Trabaja y se responsable con tu familia.";
  }else if(estadoCivil == "divorciado"){
    accion = "Sigue trabajando, analiza lo que sucedio mal y reinicia!";
  }else if(estadoCivil == "viudo"){
    accion = "Conforta a otros y honra a quien te acompaño en tu vida";
  }else{
    accion = "Lo siento, solo reconozco los estados: soltero, casado, acompañado,divorciado y viudo.";
  }
  return accion;
}
console.log(accionesSegunEstadoCivil("soltero"));



let validarSiNumeroEsParImpar = numero => {
  let residuo = numero % 2;
  //El operado % devuelve el residuo de una division
  //Al dividir cualquier numero entre 2, se obtiene 
  //un residuo de 0 o de 1.
  //si es 1 significa que el numero es impar.
  //si devuelve 0, significa que el numero es par.
  let tipoNumero = "";
  if(residuo == 0){
    tipoNumero = "par";
  }else{
    tipoNumero = "impar";
  }
  return `El numero ${numero} es par`;
}
//Las variables pueden almacenar los valores retornados por una funcion
let mensajeTipoNumero = validarSiNumeroEsParImpar(3);
console.log(mensajeTipoNumero);
console.log(validarSiNumeroEsParImpar(4));