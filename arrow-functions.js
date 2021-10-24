/*
Las arrow functions (funciones flechas) han sido introducidas en ES6.
Este tipo de funciones son mas limpias y concisas.
Las funciones flechas no requieren de la palabra function
La sintaxis de una funcion flecha es:
  const constante = (parametros) => {
    instruccion1;
    instruccion2;
    instruccion3;
    return valor;
  }

Para ejecutar una funcion, basta con llamar a la constante y 
pasar los parametros en caso de ser requeridos.
 */

//creando una arrow function
const saludar4 = (/*Los parametros son opcionales*/) => {
  return "Hola Mundo> Saludo con Arrow Function! ;) ";
}

//llamando a la funcion flecha
console.log(saludar4());

/*
Arrow function con parametros
 */
const saludar5 = (nombre) => {
  return "Hola " + nombre + ", te saludo desde una funcion flecha";
}
//llamando a la funcion saludar5
console.log(saludar5("Pedro"));

const saludar6 = (nombre, edad) => {
  return "Soy " + nombre + " y tengo " + edad + " de edad";
}

console.log(saludar6("Maria",19));


/*
Los template literals permiten incrustar variables
directamente en un mensaje. En este caso no se utilizan Las
comillas dobles o simples (" <= esa, o esta => ')
En su lugar se utilizan estas: ` para definir el principio 
y fin del mensaje, por ejemplo
  `Este es un mensaje`
 */
const saludar7 = (nombre, edad, pais) => {
  return `Hola mucho gusto, soy ${nombre}, tengo ${edad} y soy de ${pais}`;
}

console.log(saludar7("Juan",21,"El Salvador"));



const sumar = (num1, num2) => {
  return (num1 + num2);
}

console.log(`El resultado de 1 + 2 = ${sumar(1,2)}. 
Desde los template literal tambien se pueden llamar a las funcioes.
Ademas, los template literal pueden ser multilineas ;) `);

