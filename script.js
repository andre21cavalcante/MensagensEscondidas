//botão
function btn(){
    var passos = document.querySelector(".rotacao");
    if(document.querySelector("#opcao").value == "base"){
        base64();
        }else if(document.querySelector("#opcao").value == "cifra"){
            cesar(passos)
       
        }
}

//base64
function base64(){
    var base = document.querySelector(".recebe").value;

    if(document.querySelector(".codificar").checked) {
        event.preventDefault
        var final = btoa(base);
        document.querySelector(".resultado").innerHTML = final;
    }else if (document.querySelector(".decodificar").checked){
        event.preventDefault
        var final = atob(base);
        document.querySelector(".resultado").innerHTML = final;
    }
}

//cifra de cesar

function cesar(passos) {
    var passinho = document.querySelector(".rotacao").value;
    passinho %= 26;

    if (document.querySelector(".decodificar").checked) {
        passinho *= (-1);
    }

    var entrou = document.querySelector(".recebe").value;
    var saiu = document.querySelector(".resultado");
    var muda = "";
    saiu.innerHTML = "";

    for (var i = 0; i < entrou.length; i++) {
        muda = entrou.charCodeAt(i);
        // Maiusculo
        if (muda >= 65 && muda <= 90) {
            muda += passinho;
            if (muda > 90) {
                muda -= 26;
            } else if (muda < 65) {
                muda += 26;
            }
        }
        // Minusculo 
        if (muda >= 97 && muda <= 122) {
            muda += passinho;
            if (muda > 122) {
                muda -= 26;
            } else if (muda < 97) {
                muda += 26;
            }
        }
        saiu.innerHTML += String.fromCharCode(muda);
    }
}

