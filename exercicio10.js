let numeroSecreto = Math.floor(Math.random() * 100) + 1

let qtdTentativas = 0

let verificarBotao = document.getElementById("vereficarBotao");
let tentativaEntrada = document.getElementById("tentativa");
let dica = document.getElementById("dica");

verificarBotao.addEventListener("click" , function(){

    cont tentativa = parseInt(tentativaEntrada.value);

    If(tentativa === numeroSecreto){
       dica.textContent = "Parabéns! Vocẽ acertou em ${qtdtentativas}.";
       vereficarBotao.disabled = true;
    }
    else if (tentativa < numeroSecreto){
        dica.textContent = "Tente um numero maior";
        gtdTentativas++;
    }else{
        dica.textContent = "Tente um numero menor";
        gtdTentativas
    }
})
