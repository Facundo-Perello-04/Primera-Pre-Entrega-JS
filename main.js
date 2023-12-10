let nombre = prompt("ingrese su nombre")//Pide el nombre al usuario
console.log(nombre)
let saludoCompleto = "hola "+ nombre;
var clienteSumaHoras= 0;//variable suma se va sumando arriba de la variable
var clientePromedioHoras=0; //variable donde se guarda el promedio
var clienteHoras=0 ;//varible donde se escriben las horas de cada cliente

alert(saludoCompleto);
alert("usted maneja un ciber, ¿cuantos clientes vinieron hoy?")


   
function horasCiber(){
    let personasCantidad = Number(prompt("ingrese la cantidad de clientes"))
if (personasCantidad<=0){
    alert("ERROR!! - Porfavor escriba un valor mayor a 0")//si se escribe un valor menor o igual a 0 tira error

}else{
    for (var i=1; i<=personasCantidad; i++){
        alert("cliente N°" + i);
        clienteHoras= Number(prompt("ingrese las horas del cliente"))
        clienteSumaHoras=clienteSumaHoras + clienteHoras;//se suman las horas 
       
}
alert("horas en total "+ clienteSumaHoras)
clientePromedioHoras= clienteSumaHoras/personasCantidad;

return alert("el promedio de horas es "+ clientePromedioHoras +" horas");


}
}

 
horasCiber()

