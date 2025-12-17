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
