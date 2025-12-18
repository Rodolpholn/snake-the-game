document.addEventListener("keydown", update); // Evento para capturar as teclas pressionadas

// Função para atualizar a direção da cobra com base na tecla pressionada
function update(event) {
  if (event.keyCode == 37 && direction != "right") direction = "left"; // Tecla para esquerda
  if (event.keyCode == 38 && direction != "down") direction = "up"; // Tecla para cima
  if (event.keyCode == 39 && direction != "left") direction = "right"; // Tecla para direita
  if (event.keyCode == 40 && direction != "up") direction = "down"; // Tecla para baixo
}
