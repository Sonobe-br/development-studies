//var mensagem = 'Seja bem vindo ao meu site de nutrição';
//alert (mensagem);
//console.log("Fui carregado de um arquivo externo");
var titulo = document.querySelector(".titulo");
titulo.textContent = "Drª Aparecida Nutricionista Esportiva";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
var paciente = pacientes[i]; 

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoValido = validaPeso(peso); //true or false
var alturaValida = validaAltura(altura); //true or false 
 
if(!pesoValido){
    console.log("Peso inválido");
    pesoValido = false;
    tdImc.textContent = "Peso inválido";
    paciente.classList.add("paciente-invalido"); 
}

if(!alturaValida){
    console.log("Altura inválida");
    alturaValida = false;
    tdImc.textContent = "Altura inválida";
    paciente.classList.add("paciente-invalido");
}

if(pesoValido && alturaValida){
    var imc = calculaImc(peso, altura); 
    tdImc.textContent = imc;
}
}

function validaPeso(peso){
    if (peso > 0 && peso < 1000){
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura){
    if (altura > 0 && altura <= 2.50){
        return true;
    } else {
        return false;
    }

}


titulo.addEventListener("click", function (){
   console.log("fui clicado");
});

function calculaImc(peso,altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

//var imc = peso / (altura * altura);
//tdImc.textContent = imc;

//console.log(paciente); //contém o paciente = tr 
//console.log(tdPeso); //contém o peso = td 
//console.log(peso);
//console.log(altura);
//console.log(imc);

