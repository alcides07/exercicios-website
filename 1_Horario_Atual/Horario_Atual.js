var foto = document.createElement("img");
foto.setAttribute("id", "foto");
document.getElementById("quadro_foto").appendChild(foto);
carregamento();
setInterval(carregamento, 1000);

function carregamento(){
    var data = new Date();
    var hora_atual = insere_zero(data.getHours());
    var minuto_atual = insere_zero(data.getMinutes());
    var mensagem = document.getElementById("horario");
    mensagem.innerHTML = `${hora_atual}:${minuto_atual}:${insere_zero(data.getSeconds())}`;     

    if (hora_atual >= 5 && hora_atual <= 11){
        document.body.style.backgroundColor = "rgb(158, 138, 56)"; //Manhã
        foto.setAttribute("src", "Manha.png");
    }

    else if (hora_atual >= 12 && hora_atual <= 17){
        document.body.style.backgroundColor = "rgb(182, 105, 54)"; //Tarde
        foto.setAttribute("src", "Tarde.png");
    }

    else{
        document.body.style.backgroundColor = "rgb(12, 1, 54)"; //Noite
        foto.setAttribute("src", "Noite.png");
    }
}

function insere_zero(i){
    return (i <= 9) ? '0' + i : i;
}