/*Crear un programa que solicite al usuario su 
nombre por prompt y devuelva el siguiente saludo: 
"Hola nombre, saludos desde javascript". 
Nota: El saludo puede ser mostrado por consola o 
por html.*/

//var nombre=prompt('Ingresa tu nombre: ');

//document.write('Hola '+nombre+', saludos desde Javascript');

/*2.- Crear un programa que solicite 2 números 
por prompt. Mandar esos dos valores a una función 
por parámetros para realizar las operaciones 
aritméticas básicas( suma, resta, multiplicación 
y división), y mostrar el resultado.
Nota: El resultado puede ser mostrado por consola 
o por html.
*/
function operaciones(n1,n2){
    var suma=n1+n2;
    document.write("Esta es la suma: ",suma,"<br>");
    var resta=n1-n2;
    document.write("Esta es la resta: ",resta,"<br>");
    var multi=n1*n2;
    document.write("Esta es la multiplicación: ",multi,"<br>");
    if(n2==0){
        document.write("La división no se pudo hacer porque intentas dividir por cero.")
    }else{
        var div=n1/n2;
        document.write("Esta es la división: ",div);
    }
}

var num1=parseInt(prompt("Ingresa el primer número"));
var num2=parseInt(prompt("Ingresa el segundo número"));
operaciones(num1,num2);
