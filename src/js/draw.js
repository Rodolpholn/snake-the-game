function criarBG() {
  // Fundo principal escuro (estilo Dark Mode moderno)
  context.fillStyle = "#1e272e";
  context.fillRect(0, 0, 16 * box, 16 * box);

  // Desenha uma grade sutil ao fundo
  context.strokeStyle = "#2f3542";
  context.lineWidth = 1;

  for (let i = 0; i <= 16 * box; i += box) {
    // Linhas verticais
    context.beginPath();
    context.moveTo(i, 0);
    context.lineTo(i, 16 * box);
    context.stroke();

    // Linhas horizontais
    context.beginPath();
    context.moveTo(0, i);
    context.lineTo(16 * box, i);
    context.stroke();
  }
}

function criarCobrinha() {
  for (let i = 0; i < snake.length; i++) {
    // Criar um gradiente para cada gomo
    let gradient = context.createLinearGradient(
      snake[i].x,
      snake[i].y,
      snake[i].x + box,
      snake[i].y + box
    );
    gradient.addColorStop(0, "#2ecc71"); // Verde claro
    gradient.addColorStop(1, "#27ae60"); // Verde escuro

    context.fillStyle = gradient;

    // Desenha gomos arredondados em vez de quadrados secos
    drawRoundedRect(context, snake[i].x, snake[i].y, box - 2, box - 2, 8);

    // Adiciona um brilho na cabeça
    if (i === 0) {
      context.shadowBlur = 15;
      context.shadowColor = "#2ecc71";
    } else {
      context.shadowBlur = 0;
    }
  }
}

// Função auxiliar para arredondar os cantos no Canvas
function drawRoundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  ctx.fill();
}

// Desenha a comida com estilo aprimorado
function downFood() {
  context.shadowBlur = 20;
  context.shadowColor = "#e74c3c"; // Brilho vermelho
  context.fillStyle = "#ff4757"; // Cor principal da comida

  // Desenha a comida como um círculo (maçã moderna)
  context.beginPath();
  let centerX = food.x + box / 2;
  let centerY = food.y + box / 2;
  let radius = box / 2 - 4;
  context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  context.fill();

  // Reseta o brilho para não afetar outros desenhos
  context.shadowBlur = 0;
}
