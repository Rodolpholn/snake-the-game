// 1. Pegamos o botão e o elemento de texto do HTML
const btn = document.getElementById("startButton");

// 2. Criamos o evento de clique
btn.addEventListener("click", function () {
  // Se o jogo já estiver rodando, limpamos para não duplicar a velocidade
  if (typeof jogo !== "undefined") {
    clearInterval(jogo);
  }

  // Chamamos a função de configuração (para resetar a cobra)
  // Nota: Essa função precisa existir no seu script.js
  if (typeof configurarJogo === "function") {
    configurarJogo();
  }

  // Iniciamos o intervalo e guardamos na variável global 'jogo'
  jogo = setInterval(iniciarjogo, 100);

  // Opcional: Desativa o botão enquanto joga ou muda o texto
  btn.innerText = "Reiniciar Jogo";
});
