function iniciarjogo() {
  // Colisão com o corpo
  for (let i = 1; i < snake.length; i++) {
    if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
      clearInterval(jogo);
      alert("Game Over :(");
      location.reload();
      return;
    }
  }

  // Desenho
  criarBG();
  criarCobrinha();
  downFood();

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if (direction == "right") snakeX += box;
  if (direction == "left") snakeX -= box;
  if (direction == "up") snakeY -= box;
  if (direction == "down") snakeY += box;

  // Atravessar paredes
  if (snakeX > 15 * box) snakeX = 0;
  if (snakeX < 0) snakeX = 15 * box;
  if (snakeY > 15 * box) snakeY = 0;
  if (snakeY < 0) snakeY = 15 * box;

  // Comida
  if (snakeX == food.x && snakeY == food.y) {
    food.x = Math.floor(Math.random() * 16) * box;
    food.y = Math.floor(Math.random() * 16) * box;

    let score = snake.length;
    document.getElementById("scoreBoard").innerHTML = "Score: " + score;
  } else {
    snake.pop();
  }

  let newHead = { x: snakeX, y: snakeY };
  snake.unshift(newHead);
}
