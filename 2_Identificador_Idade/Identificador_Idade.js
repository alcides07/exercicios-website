var imagem = document.createElement("img");

document.getElementsByTagName("body")[0].addEventListener('keydown', function(event) {
    var tecla = event.key;
    if (tecla == "Enter"){
        verificar();
    }
});

function verificar(){
    var data_nascimento = document.getElementById("nascimento").value;
    var data = new Date();

    var ano_atual = data.getFullYear();
    var mes_atual = data.getMonth() + 1;
    var dia_atual = data.getDate();
    var TemMeses = false;
    var TemDias = false;
    var teveErro = false;

    var ano_nascimento = "";
    var mes_nascimento = parseInt(data_nascimento[5] + data_nascimento[6]);
    var dia_nascimento = parseInt(data_nascimento[8] + data_nascimento[9]);
    
    for (var i = 0; i < 4; i++){
        ano_nascimento += data_nascimento[i];
    }
    
    //Se houve algum erro com o ano digitado
    if (ano_nascimento > ano_atual || ano_nascimento.length != 4 || ano_nascimento < ano_atual - 130){
       alert("A data digitada é inválida! Revise e tente novamente!");
       teveErro = true;
    }

    else{
        var idade = parseInt(ano_atual - ano_nascimento);

        var qtd_dias_mes = new Date(ano_atual, mes_atual, 0);
        qtd_dias_mes = qtd_dias_mes.getDate(); //Pegando a quantidade de dias que tem no mês atual

        //alert(`O mês ${mes_atual} tem ${qtd_dias_mes} dias!`);

        //Nasceu no ano atual
        if (idade == 0 && ano_atual == ano_nascimento){
            //Data no futuro
            if(mes_nascimento > mes_atual){
                alert("A data digitada é inválida! Revise e tente novamente!"); 
                teveErro = true;
            }

            //Possível nascimento no mes atual
            else if(mes_nascimento == mes_atual){
                if (dia_nascimento > dia_atual){ //Data no futuro
                    alert("A data digitada é inválida! Revise e tente novamente!"); 
                    teveErro = true;
                }

                //Nascimento no mês atual
                else{
                    TemMeses = false;
                    TemDias = true;
                    idade = dia_atual - dia_nascimento; //Tem 1 mês ou menos
                    if (idade == 0){
                        idade = 1;
                    }
                }
            }

            //Nasceu meses antes no ano atual
            else{
                idade = mes_atual - mes_nascimento;
                alert(idade);
                TemMeses = true;
                if (idade == 1){
                    if (dia_nascimento < dia_atual){ //Tem mais de um mês
                        idade--;
                        if (idade == 0){
                            idade = 1;
                        }
                    }

                    else{ //Tem menos de um mês
                        TemMeses = false;
                        TemDias = true;
                        idade = (qtd_dias_mes - dia_nascimento) + dia_atual;
                    }
                }
                
                else{ //Tem mais de 1 mês de vida
                    if (dia_nascimento > dia_atual){ //Se ainda não fez aniversário naquele mês
                        idade--;
                    }
                }
            }
        }
        
        //Nasceu no ano passado e tem 1 ano ou menos
        else if(idade == 1){
            if (12 - mes_nascimento + mes_atual <= 12){ //Se tem menos de 1 ano
                idade = (12 - mes_nascimento) + mes_atual;
                TemMeses = true;
                if (dia_atual < dia_nascimento){
                    idade--; //11 meses ou menos
                }
    
                if (idade == 12){ //Se tem 1 ano
                    idade = 1;
                    TemMeses = false;
                }
            }
            else{ //Se tem 1 ano
                idade = 1;
            }
        }

        else if (idade >= 2){
            if (mes_nascimento > mes_atual){ //Ainda não fez aniversário naquele ano
                idade--;
            }

            else{ //Está no mês do aniversário
                if (dia_nascimento > dia_atual){ //Ainda não fez aniversário naquele mês
                    idade--;
                }
            }
        }
    }
    
    if (teveErro == false){
        var OpcaoSexo = document.getElementsByName("radioSexo");
        var FaixaEt = "";
        
        imagem.setAttribute("id", "foto");
        imagem.style.width = "10em";
        imagem.style.height = "10em";
        imagem.style.borderRadius = "5em";

        if (OpcaoSexo[0].checked){ // É homem
            
            if (idade <= 2 || TemMeses || TemDias){ //Bebê
                imagem.setAttribute("src", "1_Masculino_Bebe.png");
                FaixaEt = "Bebê"; 
            }

            else if (idade <= 12){  //Criança
                imagem.setAttribute("src", "2_Masculino_Crianca.png");
                FaixaEt = "Criança"; 
            }

            else if (idade <= 20){ //Adolescente/Jovem
                imagem.setAttribute("src", "3_Masculino_Adolescente.png");
                FaixaEt = "Jovem"; 
            }

            else if (idade <= 45){ //Adulto + novo
                imagem.setAttribute("src", "4_Masculino_AdultoNovo.png");
                FaixaEt = "Adulto"; 
            }

            else if (idade <= 60){ //Adulto + velho
                imagem.setAttribute("src", "5_Masculino_AdultoVelho.png");
                FaixaEt = "Adulto"; 
            }

            else{ //Idoso
                imagem.setAttribute("src", "6_Masculino_Idoso.png");
                FaixaEt = "Idoso"; 
            }
        }

        else{ // É mulher 

            if (idade <= 2 || TemMeses || TemDias){ //Bebê
                imagem.setAttribute("src", "1_Feminino_Bebe.png");
                FaixaEt = "Bebê";
            }

            else if (idade <= 12){  //Criança
                imagem.setAttribute("src", "2_Feminino_Crianca.png");
                FaixaEt = "Criança";
            }

            else if (idade <= 20){ //Adolescente/Jovem
                imagem.setAttribute("src", "3_Feminino_Adolescente.png");
                FaixaEt = "Jovem";
            }

            else if (idade <= 45){ //Adulto + novo
                imagem.setAttribute("src", "4_Feminino_AdultoNovo.png");
                FaixaEt = "Adulta";
            }

            else if (idade <= 60){ //Adulto + velho
                imagem.setAttribute("src", "5_Feminino_AdultoVelho.png");
                FaixaEt = "Adulta";
            }

            else{ //Idosa
                imagem.setAttribute("src", "6_Feminino_Idoso.png");
                FaixaEt = "Idosa";
            }
        }

        var texto = document.getElementById("texto_resultado");
        if (TemMeses){ //O bebê tem entre 1 e 11 meses
            texto.innerHTML = `Detectamos um ${FaixaEt} de ${idade} mes(es).`;
        }

        else if (TemDias){ //O bebê tem menos de 1 mês
            texto.innerHTML = `Detectamos um ${FaixaEt} de ${idade} dia(s) de vida.`;
        }

        else{ //A pessoa tem 1 ano ou mais.
            texto.innerHTML = `Detectamos um(a) ${FaixaEt} de ${idade} ano(s).`;
        }
        
        texto.style.fontWeight = "bold";
        document.getElementById("resultado").appendChild(imagem);
    } 
}