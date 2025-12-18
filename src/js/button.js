// Adicione ao início do seu button.js
const gameCover = document.getElementById("gameCover"); // Capa do jogo
const startButtonCover = document.getElementById("startButtonCover"); // Botão verde da capa
const gameContainer = document.getElementById("gameContainer"); // Container do jogo
const restartButton = document.getElementById("restartButton"); // Botão vermelho de reiniciar
const volumeIcon = document.getElementById("volumeIcon"); // Ícone de volume
let isMuted = true; // Começa mutado por padrão

// --- Lógica do Botão de Volume ---
volumeIcon.addEventListener("click", () => {
  if (isMuted) {
    musicaMenu.play(); // Toca a música do menu
    musicaMenu.volume = 0.1; // Restaura o volume
    volumeIcon.src = "./src/img/volume-on.png"; // Muda para ícone de som ligado
    isMuted = false; // Atualiza o estado para não mutado
  } else {
    musicaMenu.pause();
    musicaMenu.currentTime = 0; // Opcional: reseta a música ao mutar
    musicaMenu.volume = 0; // Garante que o volume seja 0
    volumeIcon.src = "./src/img/volume-off.png"; // Muda para ícone de som desligado
    isMuted = true; // Atualiza o estado para mutado
  }
});

// --- Função Principal para Iniciar o Jogo ---
function startGame() {
  // 1. Troca as telas usando as classes do seu CSS
  gameCover.classList.add("cover-hidden"); // Esconde a capa
  gameContainer.classList.remove("game-hidden"); // Mostra o jogo
  gameContainer.classList.add("game-visible"); // Anima a entrada do jogo

  // --- LÓGICA DE ÁUDIO MENU ---
  musicaMenu.pause(); // Para a música do menu
  musicaMenu.currentTime = 0; // Reseta para o início
  volumeIcon.classList.add("hidden"); // Esconde o ícone de volume na tela do jogo

  // Inicia a música do jogo, mas apenas se o usuário não mutou antes
  if (!isMuted) {
    // Verifica se não está mutado
    musicaFundo.play(); // Toca a música de fundo do jogo
  }
  // 2. Inicia a lógica técnica;
  iniciarNovoCiclo(); // Função para resetar os dados e iniciar o jogo
}

// --- Função para Resetar os Dados ---
function iniciarNovoCiclo() {
  // Reseta os dados e inicia um novo ciclo do jogo
  if (typeof jogo !== "undefined") clearInterval(jogo); // Limpa o loop anterior, se existir

  nivel = 1; // Volta ao nível 1
  velocidade = 100; // Volta à velocidade inicial
  configurarJogo(); // Reseta posição da cobra (config.js)

  // Inicia o loop (engine.js)
  jogo = setInterval(iniciarjogo, velocidade);

  // Desenha o estado inicial para não ficar em branco
  criarBG(); // Cria o fundo
  criarCobrinha(); // Desenha a cobrinha
  downFood(); // Desenha a comida

  // Reseta o placar visual
  document.getElementById("scoreBoard").innerHTML = "Score: 0";
}

// --- Event Listeners ---
// Quando clica no botão verde da capa
startButtonCover.addEventListener("click", startGame);

// Quando clica no botão vermelho de reiniciar
restartButton.addEventListener("click", iniciarNovoCiclo);

// Adicione ao final do seu button.js
const modal = document.getElementById("gameOverModal"); // Popup de game over
const btnRestart = document.getElementById("btnRestart"); // Botão REINICIAR do Popup
const btnCancel = document.getElementById("btnCancel"); // Botão CANCELAR do Popup

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

  // Mostra o ícone de volume novamente na tela inicial
  volumeIcon.classList.remove("hidden"); // Mostra o ícone de volume
  // Volta a música do menu, se não estiver mutada
  if (!isMuted) {
    // Verifica se não está mutado
    musicaMenu.play(); // Toca a música do menu
  }
});
