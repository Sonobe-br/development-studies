var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);
    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);
    console.log(erros);
    
    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }
   
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
        
    form.reset();

});
    
function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro")
    ul.innerHTML = "";
    
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li); 
    });
}

function obtemPacienteDoFormulario(form){
    
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
   
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td"); 
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

function montaTd(dado. classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return Td;
}

function validaPaciente(paciente){
    var erros = [];

    if(!validaPeso(paciente.peso)){
        erros.push("Peso Inválido!");
    }

    if(!validaAltura(paciente.altura)){
        erros.push("Altura Inválida!");
    }

    if(paciente.nome.length == 0){
        erros.push("Este nome é inválido");
    }

    if(paciente.gordura.length == 0){
        erros.push("A gordura não pode estar em branco");
    }
    
    if( paciente.altura.length == 0){
        erros.push("A altura não pode estar em branco");
    }
        return erros;
    
}
