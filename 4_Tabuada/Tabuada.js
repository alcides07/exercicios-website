document.getElementsByTagName("body")[0].addEventListener('keydown', function(event) {
    var tecla = event.key;
    if (tecla == "Enter"){
        tabuada();
    }
});

var sel_mul = document.createElement("select");
sel_mul.setAttribute("class", "caixas_select");

var sel_div = document.createElement("select");
sel_div.setAttribute("class", "caixas_select");

var sel_adi = document.createElement("select");
sel_adi.setAttribute("class", "caixas_select");

var sel_sub = document.createElement("select");
sel_sub.setAttribute("class", "caixas_select");

function tabuada(){
    sel_mul.innerHTML = "";
    sel_div.innerHTML = "";
    sel_adi.innerHTML = "";
    sel_sub.innerHTML = "";
    var txtnum = document.getElementById("input_numero");
    var numero = parseInt(txtnum.value);
   
    if (txtnum.value.length == 0 || numero <= 0 || numero > 80000000){
        document.getElementById("secao_geral_selects").style.height = "12em";
        sel_mul.size = "0";
        sel_div.size = "0";
        sel_adi.size = "0";
        sel_sub.size = "0";
        alert("Por favor, digite um número válido!");
    }

    else{  
        document.getElementById("secao_geral_selects").style.height = "32em";
        txt_mul.innerHTML = "Multiplicação";
        txt_div.innerHTML = "Divisão";
        txt_adi.innerHTML = "Adição";
        txt_sub.innerHTML = "Subtração";

        sel_mul.size = "10";
        sel_div.size = "10";
        sel_adi.size = "10";
        sel_sub.size = "10";
        document.getElementById("multiplicacao").appendChild(sel_mul);
        document.getElementById("divisao").appendChild(sel_div);
        document.getElementById("adicao").appendChild(sel_adi);
        document.getElementById("subtracao").appendChild(sel_sub);

        for (var i = 1; i <= 10; i++){
            var item = document.createElement("option");
            item.text = `${numero} x ${i} = ${numero * i}`;
            sel_mul.appendChild(item);
        }

        for (var i = numero; i <= numero * 10; i += numero){
            var item = document.createElement("option");
            item.text = `${i} ÷ ${numero} = ${i / numero}`;
            sel_div.appendChild(item);
        }

        for (var i = 1; i <= 10; i ++){
            var item = document.createElement("option");
            item.text = `${numero} + ${i} = ${numero + i}`;
            sel_adi.appendChild(item);
        }

        for (var i = numero + 1; i <= numero + 10; i++){
            var item = document.createElement("option");
            item.text = `${i} - ${numero} = ${i - numero}`;
            sel_sub.appendChild(item);
        }
    }
}