
let inicio = document.getElementById("inicio");
let respuesta = document.getElementById("respuesta");
let oneBtn = document.getElementById("uno");
let twoBtn = document.getElementById("dos");
let threeBtn = document.getElementById("tres");
let fourBtn = document.getElementById("cuatro");
let fiveBtn = document.getElementById("cinco");
let numero = document.getElementById("number");
let valorSpan = "";

// Dar valores para el span
oneBtn.addEventListener('click', e =>{
    valorSpan = "1";
})
twoBtn.addEventListener('click', e=>{
    valorSpan = "2"
})
threeBtn.addEventListener('click',e=>{
    valorSpan = "3";
})
fourBtn.addEventListener('click', e=>{
    valorSpan = "4";
})
fiveBtn.addEventListener('click', e=>{
    valorSpan = "5";
})

// Ejecutar sumbit

function newView(contenedor){

    contenedor.addEventListener('click',e =>{
        numero.innerText = valorSpan;
        inicio.style.display = "none";
        respuesta.style.display = "block";

      })
}
document.addEventListener("DOMContentLoaded", () =>{
    let contenedor = document.getElementById("enviar");
    newView(contenedor);
})