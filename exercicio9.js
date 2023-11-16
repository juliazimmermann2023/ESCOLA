const mensagensDivertidas = [
"Por que os químicos são ótimos em resolver problemas? Porque eles têm todas as soluções!",
"Por que o desenvolvedor faliu? Porque ele usou todo o seu cache." ,
"Você já ouviu falar do cara que roubou o calendário? Ele pegou 12 meses!",
"O que ganha o melhor dentista do mundo? Uma pequena placa.",
"Meus professores me disseram que eu nunca seria muito porque procrastino muito. Eu disse a eles: “Esperem para ver!",
"Minha memória ficou tão ruim que realmente me fez perder o emprego. Ainda estou empregado. Só não consigo lembrar onde.",
"Quando em uma candidatura a emprego perguntam quem deve ser notificado em caso de emergência, sempre escrevo: “Um médico muito bom.",
"Por que o médico está sempre calmo? Porque ele tem muitos pacientes.",
"Por que o livro de matemática parece tão triste? Por causa de todos os seus problemas.",
"Qual é a comida favorita de um lobisomem? Lobisomens não são reais.",
"Como chamar um cão mágico? Um Labracadabrador.",

]
let botaoDivertido = document.getElementById("botaoDivertido");
let mensagemDivertida = document.getElementById("mensagemDivertida");

 botaoDivertido.addEventListener('click', function(){
    //Math.floor(x) retorna o menor número ingteiro dentre o número "x"
    //Math.randdom() retorna um número pseudo-aleatório no intervalo
    const mensagemAleatoria = mensagensDivertidas[Math.floor(Math.random() *mensagensDivertidas.length)]
    mensagemDivertida.textContent = mensagemAleatoria
 })
