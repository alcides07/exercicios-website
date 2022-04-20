document.getElementsByTagName("body")[0].addEventListener('keydown', function(event) {
    var tecla = event.key;
    if (tecla == "Enter"){
        contagem();
    }
});

var resposta = document.createElement("p");
var titulo_resposta = document.createElement("p");

function contagem(){
    var inicio = parseFloat(document.getElementById("inicio").value);
    var fim = parseFloat(document.getElementById("fim").value);
    var passo = parseFloat(document.getElementById("passo").value);
    var separador = document.getElementById("separador");
    var tamanho_inicio = inicio.toString().split('.')[1]; 

    if (tamanho_inicio != undefined){
        tamanho_inicio = tamanho_inicio.length;
    }

    var tamanho_passo = passo.toString().split('.')[1]; 
    if (tamanho_passo != undefined){
        tamanho_passo = tamanho_passo.length;
    }
    
    //Título textual acima da resposta
    resposta.setAttribute("id", "resposta");
    resposta.style.paddingTop = "0.5em";
    resposta.style.fontSize = "15pt";
    resposta.style.textAlign = "center";

    //Resposta com números
    titulo_resposta.setAttribute("id", "tituloRes");
    titulo_resposta.style.fontSize = "15pt";
    titulo_resposta.style.textAlign = "center";
    titulo_resposta.style.fontWeight = "bold";

    document.getElementById("enter").appendChild(resposta);
    
    // Inicío == fim
    if (inicio == fim){
        resposta.innerHTML = "O início informado é igual ao fim, não havendo valores entre eles!";
    }

    // Início ou fim vazios
    else if (isNaN(inicio) || isNaN(fim) || isNaN(passo)){
        resposta.innerHTML = "Impossível prosseguir! Algum dos campos está vazio!";
    }

    // Não há números entre eles com um determinado passo
    else if (Math.abs(fim - inicio) <= passo){
        resposta.innerHTML = "O passo informado excede o intervalo escolhido!";
    }

    else if (passo <= 0){
        resposta.innerHTML = `Não é possível gerar números com passo igual a ${passo}.`;
    }

    //Programa funciona corretamente
    else{ 
        var simbolo_sep = " " + String.fromCodePoint(0x27A1) + " ";
        if (separador.value == "espaco"){
            simbolo_sep = " ";
        }

        else if (separador.value == "virgula"){
            simbolo_sep = ", ";
        }
        
        var bandeira = " " + String.fromCodePoint(0x1F6A9);
        resposta.style.textAlign = "justify";
        resposta.innerHTML = "";
        resposta.style.paddingTop = "0em";
        document.getElementById("resposta").appendChild(titulo_resposta);
        titulo_resposta.innerHTML = `Números entre ${inicio} e ${fim} com passo ${passo}:`;
        
        if (inicio < fim){ //Vou crescendo
            if (tamanho_passo >= 1){ //Significa que quero dar passos FLUTUANTES
                for (var i = inicio + passo; i < fim; i += passo){
                    if (i >= fim - passo){ //Vou escrever o último valor
                        resposta.innerHTML += `${i.toFixed(tamanho_passo)}`;
                    }

                    else{ //Não estou no final, então coloco simbolo depois dos valores
                        resposta.innerHTML += `${i.toFixed(tamanho_passo) + simbolo_sep}`;
                    }
                }
            }

            else{ //Significa que quero dar passos INTEIROS
                for (var i = inicio + passo; i < fim; i += passo){
                    if (i >= fim - passo){ //Vou escrever o último valor
                        resposta.innerHTML += `${i.toFixed(tamanho_inicio)}`;
                    }

                    else{ //Não estou no final, então coloco simbolo depois dos valores
                        resposta.innerHTML += `${i.toFixed(tamanho_inicio) + simbolo_sep}`;
                    } 
                }
            }
        }
        
        else{ //Vou decrescendo
            if (tamanho_passo >= 1){ //Significa que quero dar passos FLUTUANTES
                for (var i = inicio - passo; i > fim; i -= passo){
                    if (i <= fim + passo){ //Vou escrever o último valor
                        resposta.innerHTML += `${i.toFixed(tamanho_passo)}`; 
                    }

                    else{ //Não estou no final, então coloco simbolo depois dos valores
                        resposta.innerHTML += `${i.toFixed(tamanho_passo) + simbolo_sep}`; 
                    } 
                }
            }

            else{ //Significa que quero dar passos INTEIROS
                for (var i = inicio - passo; i > fim; i -= passo){
                    if (i <= fim + passo){ //Vou escrever o último valor
                        resposta.innerHTML += `${i.toFixed(tamanho_inicio)}`; 
                    }

                    else{ //Não estou no final, então coloco simbolo depois dos valores
                        resposta.innerHTML += `${i.toFixed(tamanho_inicio) + simbolo_sep}`; 
                    }
                }
            }
        }
        resposta.innerHTML += bandeira;
    }
}