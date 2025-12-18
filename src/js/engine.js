// --- Função Principal do Jogo ---
function iniciarjogo() {
  // Colisão com o corpo
  for (let i = 1; i < snake.length; i++) {
    if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
      clearInterval(jogo); // Para o loop do jogo

      // Áudio de game over
      musicaFundo.pause();
      musicaFundo.currentTime = 0; // Reseta a música
      somLose.play(); // Toca o som de perder
      // MOSTRAR POPUP
      const modal = document.getElementById("gameOverModal"); // Popup de game over
      const finalScoreText = document.getElementById("finalScore"); // Texto de pontuação final

      // Mostra a pontuação real baseada no tamanho da cobra
      finalScoreText.innerHTML = "Pontos: " + (snake.length - 1); // Subtrai 1 para não contar o bloco inicial
      modal.classList.remove("hidden"); // Mostra o popup de game over
      return; // Interrompe a função para não desenhar o próximo passo
    }
  }

  // Desenho
  criarBG(); // Cria o fundo
  criarCobrinha(); // Desenha a cobrinha
  downFood(); // Desenha a comida

  let snakeX = snake[0].x; // Posição X da cabeça da cobra
  let snakeY = snake[0].y; // Posição Y da cabeça da cobra

  if (direction == "right") snakeX += box; // Move para a direita
  if (direction == "left") snakeX -= box; // Move para a esquerda
  if (direction == "up") snakeY -= box; // Move para cima
  if (direction == "down") snakeY += box; // Move para baixo

  // Atravessar paredes
  if (snakeX > 15 * box) snakeX = 0; // Se passar da direita, aparece na esquerda
  if (snakeX < 0) snakeX = 15 * box; // Se passar da esquerda, aparece na direita
  if (snakeY > 15 * box) snakeY = 0; // Se passar de baixo, aparece em cima
  if (snakeY < 0) snakeY = 15 * box; // Se passar de cima, aparece embaixo

  // Comida
  if (snakeX == food.x && snakeY == food.y) {
    // Se a cobra comer a comida
    somComer.play(); // Toca o som de comer

    food.x = Math.floor(Math.random() * 16) * box; // Nova posição X da comida
    food.y = Math.floor(Math.random() * 16) * box; // Nova posição Y da comida

    let score = snake.length; // Calcula a pontuação baseada no tamanho da cobra
    document.getElementById("scoreBoard").innerHTML = "Score: " + score; // Atualiza o placar
  } else {
    snake.pop(); // Remove o último quadrado da cobra
  }

  let newHead = { x: snakeX, y: snakeY }; // Cria a nova cabeça da cobra
  snake.unshift(newHead); // Adiciona a nova cabeça no início do array
}
