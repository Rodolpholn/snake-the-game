var canvas = document.getElementById("snake");
var context = canvas.getContext("2d");
var box = 32;

var snake = [];
var direction = "right";
var food = {};
var jogo; // Variável para o setInterval

function configurarJogo() {
  snake = [];
  snake[0] = { x: 8 * box, y: 8 * box };
  direction = "right";
  food = {
    x: Math.floor(Math.random() * 16) * box,
    y: Math.floor(Math.random() * 16) * box,
  };
}

// Adicione isso no final do config.js para o campo aparecer vazio ao carregar
window.onload = function () {
  context.fillStyle = "lightgreen";
  context.fillRect(0, 0, 16 * box, 16 * box);
};

// Áudios do jogo
var musicaFundo = new Audio("./src/sound/background3.mp3");
musicaFundo.loop = true; // Faz a música tocar sem parar
musicaFundo.volume = 0.4; // Volume um pouco mais baixo para não incomodar

var somComer = new Audio("./src/sound/crunch.mp3");

var somLose = new Audio("./src/sound/lose.mp3");
somLose.volume = 0.7; // Volume para ser bem nítido
