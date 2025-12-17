// Pegamos os elementos que existem no seu HTML
const gameCover = document.getElementById("gameCover");
const startButtonCover = document.getElementById("startButtonCover");
const gameContainer = document.getElementById("gameContainer");
const restartButton = document.getElementById("restartButton");

// --- Função Principal para Iniciar o Jogo ---
function startGame() {
  // 1. Troca as telas usando as classes do seu CSS
  gameCover.classList.add("cover-hidden");
  gameContainer.classList.remove("game-hidden");
  gameContainer.classList.add("game-visible");

  // 2. Inicia a lógica técnica
  musicaFundo.play();
  iniciarNovoCiclo();
}

// --- Função para Resetar os Dados ---
function iniciarNovoCiclo() {
  if (typeof jogo !== "undefined") clearInterval(jogo);

  configurarJogo(); // Reseta posição da cobra (config.js)

  // Inicia o loop (engine.js)
  jogo = setInterval(iniciarjogo, 100);

  // Desenha o estado inicial para não ficar em branco
  criarBG();
  criarCobrinha();
  downFood();

  // Reseta o placar visual
  document.getElementById("scoreBoard").innerHTML = "Score: 0";
}

// --- Event Listeners ---
// Quando clica no botão verde da capa
startButtonCover.addEventListener("click", startGame);

// Quando clica no botão vermelho de reiniciar
restartButton.addEventListener("click", iniciarNovoCiclo);

// Adicione ao final do seu button.js
const modal = document.getElementById("gameOverModal");
const btnRestart = document.getElementById("btnRestart");
const btnCancel = document.getElementById("btnCancel");

// Botão REINICIAR do Popup
btnRestart.addEventListener("click", function () {
  modal.classList.add("hidden"); // Esconde o popup
  iniciarNovoCiclo(); // Começa o jogo novamente
});

// Botão CANCELAR do Popup
btnCancel.addEventListener("click", function () {
  modal.classList.add("hidden"); // Esconde o popup
  gameContainer.classList.add("game-hidden"); // Esconde o jogo
  gameContainer.classList.remove("game-visible");
  gameCover.classList.remove("cover-hidden"); // Volta para a capa
  gameCover.classList.add("cover-visible");
});
