let inicio = document.getElementById("inicio");
let valorForm = document.getElementsByName('button');
let respuesta = document.getElementById("respuesta");
let numero = document.getElementById("number");
let valueForm = 0;

function valorRadio () {
    for (let i = 0; i < valorForm.length; i++){
        if(valorForm[i].checked){
            valueForm = valorForm[i].value;
            break;
        }
    }
}

function newView(contenedor){

    contenedor.addEventListener('click',e =>{
        valorRadio();
        numero.innerText = valueForm;
        inicio.style.display = "none";
        respuesta.style.display = "block";

      })
}
document.addEventListener("DOMContentLoaded", () =>{
    let contenedor = document.getElementById("enviar");
    newView(contenedor);
})