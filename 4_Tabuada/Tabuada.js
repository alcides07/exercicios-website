document.getElementsByTagName("body")[0].addEventListener('keydown', function(event) {
    var tecla = event.key;
    if (tecla == "Enter"){
        tabuada();
    }
});

var sel_tabuada = document.createElement("select");
sel_tabuada.setAttribute("id", "sel_tabuada");

function tabuada(){
    sel_tabuada.innerHTML = "";
    var numero = document.getElementById("numero").value;
   
    if (numero.length == 0){
        sel_tabuada.size = "0";
        alert("Por favor, digite um número!");
    }

    else{  
        sel_tabuada.size = "10";
        document.getElementById("caixa_tab").appendChild(sel_tabuada);
        for (var i = 1; i <= 10; i++){
            var item = document.createElement("option");
            item.text = `${numero} X ${i} = ${numero * i}`;
            sel_tabuada.appendChild(item);
        }
    }
}