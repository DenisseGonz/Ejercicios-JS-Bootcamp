
/*function suma(n1,n2){
    var nu1=parseInt(n1);
    var nu2=parseInt(n2);
    return nu1+nu2;
}

var num1=prompt('Ingresa el número 1');
var num2=prompt('Ingresa el número 2');

var resul=suma(num1,num2);
alert(resul);

Camila acaba de comenzar su nuevo rol como 
Desarrolladora Java Junior en un banco. 
Ella está trabajando en cuentas de clientes 
para una nueva aplicación de banca móvil. 
Se le pide que implemente una función que 
muestre la cantidad mayor de tres cantidades 
en la pantalla de inicio.*/

function mostrar(n1,n2,n3){
    var mayor,medio,menor;
    if(n1<n2 && n1<n3){
        //Comprueba que el 1 es el menor de los 3 numeros 
        menor=n1;
        if(n2<n3){
            //Comprueba si 3 es mayor que 2
            mayor=n3;
            medio=n2;
        }else{
            //Comprueba si 2 es mayor que 3
            mayor=n2;
            medio=n3;
        }
    } else if(n2<n1 && n2<n3){
        //Comprueba que 2 es el menor de los 3 numeros
        menor=n2;
        if(n1<n3){
            //Comprueba que 3 es mayor que 1
            mayor=n3;
            medio=n1;
        }else{
            //Comprueba que 1 es mayor que 3
            mayor=n1;
            medio=n3;
        }
    }else if(n3<n1 && n3<n2){
        //Comprueba que 3 es el menor de los 3 numeros
        menor=n3;
        if(n1<n2){
            //Comprueba que 2 es mayor que 1
            mayor=n2;
            medio=n1;
        }else{
            //Comprueba que 1 es mayor que 2
            mayor=n1;
            medio=n2;
        }
    }else{
        console.log("Tenemos un problema esponja");
    }
    cantidades.push(mayor);
    cantidades.push(medio);
    cantidades.push(menor);
    //console.log(n1,n2,n3)
    return cantidades[0];
}
var cantidades=[];
var num1=parseInt(prompt('Ingresa el número 1'));
var num2=parseInt(prompt('Ingresa el número 2'));
var num3=parseInt(prompt('Ingresa el número 3'));

//Verifica si hay numeros iguales
if(num1==num2&&num2==num3){
    console.log("Los números son iguales, entonces cualquiera es el mayor");
}else if(num1===num2){
    //Mandaremos solo 1 de los 2 numeros
    num2=num2-1;
    console.log(mostrar(num1,num2,num3));
}else if(num1===num3){
    num3=num3-1;
    console.log(mostrar(num1,num2,num3));
}else if(num1===num3){
    num3=num3-1;
    console.log(mostrar(num1,num2,num3));
}else{
console.log(mostrar(num1,num2,num3));
}