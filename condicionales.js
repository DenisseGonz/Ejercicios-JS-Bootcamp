/*var edad=prompt('¿Cúal es tú edad?');

if(edad>=18){
    document.write('Eres mayor de edad');
}else{
    document.write('Eres menor de edad');
}
*/
/*Preguntarle al usuario su edad por el prompt. Después hacer una condicional if con las siguientes situaciones, 
si el usuario es mayor o igual de 18 y menor o igual de 29 años mostrar mensaje 'Felicidades has sido aceptado en 
el bootcamp de generation', en caso contrario mostrar mensaje: No cumples con los requisitos del programa. */

var edad=prompt('¿Qué edad tienes?');

if(edad>=18 && edad<=29){
    document.write('Felicidades has sido aceptado en el bootcamp de generation');
} else {
    document.write('No cumples con los requisitos del programa');
}