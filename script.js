let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
  x: 8 * box,
  y: 8 * box,
};
let direction = "right";

//função para criar o fundo do jogo
function CriarBG() {
  context.fillStyle = "lightgreen";
  context.fillRect(0, 0, 16 * box, 16 * box);
}

//função para criar a cobrinha
function criarCobrinha() {
  //se der errado remover aqui o let
  for (let i = 0; i < snake.length; i++) {
    context.fillStyle = "green";
    context.fillRect(snake[i].x, snake[i].y, box, box);
  }
}

//evento para capturar a direção da cobrinha
document.addEventListener("keydown", update);

//função para atualizar a direção da cobrinha
function update(event) {
  if (event.keyCode == 37 && direction != "right") direction = "left";
  if (event.keyCode == 38 && direction != "down") direction = "up";
  if (event.keyCode == 39 && direction != "left") direction = "right";
  if (event.keyCode == 40 && direction != "up") direction = "down";
}

function iniciarjogo() {
  //função para a cobrinha atravessar as paredes
  if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
  if (snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
  if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
  if (snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

  //função para a cobrinha colidir com ela mesma
  for (let i = 1; i < snake.length; i++) {
    if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
      clearInterval(jogo);
      alert("Game Over :(");
    }
    //fim da função
  }
  //fim da função

  //desenhar o fundo e a cobrinha
  criarBG();
  criarCobrinha();

  //movimento da cobrinha
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  //definir a direção
  if (direction == "right") snakeX += box;
  if (direction == "left") snakeX -= box;
  if (direction == "up") snakeY -= box;
  if (direction == "down") snakeY += box;

  //remover a cauda da cobrinha
  snake.pop();

  //adicionar nova cabeça na cobrinha
  let newHead = {
    x: snakeX,
    y: snakeY,
  };

  //adicionar a nova cabeça no início do array
  snake.unshift(newHead);
}

//iniciar o jogo
let jogo = setInterval(iniciarjogo, 100);
