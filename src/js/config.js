// Variáveis do jogo
var canvas = document.getElementById("snake"); // Canvas do jogo
var context = canvas.getContext("2d"); // Contexto 2D do canvas
var box = 32; // Tamanho de cada "quadrado" do jogo
var snake = []; // Array que representa a cobra
var direction = "right"; // Direção inicial da cobra
var food = {}; // Objeto que representa a comida
var jogo; // Variável para o loop do jogo
var velocidade = 100; // Velocidade inicial
var nivel = 1; // Nível inicial

// Configurações iniciais do jogo
function configurarJogo() {
  // Reseta posição da cobra e comida
  snake = []; // Reseta a cobra
  snake[0] = { x: 8 * box, y: 8 * box }; // Posição inicial da cobra no centro do canvas
  direction = "right"; // Direção inicial da cobra
  food = {
    x: Math.floor(Math.random() * 16) * box, // Posição aleatória da comida no eixo X
    y: Math.floor(Math.random() * 16) * box, // Posição aleatória da comida no eixo Y
  };
}

// Desenha o fundo do jogo
window.onload = function () {
  // Função para desenhar o fundo
  context.fillStyle = "lightgreen"; // Cor do fundo
  context.fillRect(0, 0, 16 * box, 16 * box); // Desenha o retângulo do fundo
};
