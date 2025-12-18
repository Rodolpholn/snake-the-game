function criarBG() {
  // Fundo principal escuro (estilo Dark Mode moderno)
  context.fillStyle = "#1e272e"; // Cor de fundo escura
  context.fillRect(0, 0, 16 * box, 16 * box); // Desenha o retângulo do fundo

  // Desenha uma grade sutil ao fundo
  context.strokeStyle = "#2f3542"; // Cor da grade
  context.lineWidth = 1; // Largura da linha da grade

  for (let i = 0; i <= 16 * box; i += box) {
    // Passo de box em box
    // Linhas verticais
    context.beginPath(); // Inicia um novo caminho
    context.moveTo(i, 0); // Move para o topo
    context.lineTo(i, 16 * box); // Desce até o fundo
    context.stroke(); // Desenha a linha

    // Linhas horizontais
    context.beginPath(); // Inicia um novo caminho
    context.moveTo(0, i); // Move para a esquerda
    context.lineTo(16 * box, i); // Vai até a direita
    context.stroke(); // Desenha a linha
  }
}
// Desenha a cobrinha com cores dinâmicas baseadas no nível

function criarCobrinha() {
  const paletaCores = [
    { clara: "#2ecc71", escura: "#27ae60" }, // Nível 1: Verde
    { clara: "#27ae60", escura: "#1e8449" }, // Nível 2: Verde Floresta
    { clara: "#f1c40f", escura: "#f39c12" }, // Nível 3: Amarelo
    { clara: "#e67e22", escura: "#d35400" }, // Nível 4: Laranja
    { clara: "#e74c3c", escura: "#c0392b" }, // Nível 5: Vermelho
    { clara: "#9b59b6", escura: "#8e44ad" }, // Nível 6: Roxo
    { clara: "#3498db", escura: "#2980b9" }, // Nível 7: Azul
    { clara: "#1abc9c", escura: "#16a085" }, // Nível 8: Turquesa
    { clara: "#ecf0f1", escura: "#bdc3c7" }, // Nível 9: Prata
    { clara: "#34495e", escura: "#2c3e50" }, // Nível 10: Obsidiana/Preto Neon
  ];
  for (let i = 0; i < snake.length; i++) {
    // 1. DEFINIR AS CORES BASEADAS NO NÍVEL
    let indice = Math.min(nivel - 1, paletaCores.length - 1);
    let corClara = paletaCores[indice].clara;
    let corEscura = paletaCores[indice].escura;

    let gradient = context.createLinearGradient(
      snake[i].x,
      snake[i].y,
      snake[i].x + box,
      snake[i].y + box
    );
    gradient.addColorStop(0, corClara);
    gradient.addColorStop(1, corEscura);

    context.fillStyle = gradient;

    if (i === 0) {
      context.shadowBlur = 15;
      context.shadowColor = corClara;
    } else {
      context.shadowBlur = 0;
    }

    drawRoundedRect(context, snake[i].x, snake[i].y, box - 2, box - 2, 8);
    context.shadowBlur = 0;
  }
}

// Função auxiliar para arredondar os cantos no Canvas
function drawRoundedRect(ctx, x, y, width, height, radius) {
  // Desenha um retângulo com cantos arredondados
  ctx.beginPath(); // Inicia um novo caminho
  ctx.moveTo(x + radius, y); // Move para o canto superior esquerdo
  ctx.lineTo(x + width - radius, y); // Linha para o canto superior direito
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius); // Curva para o canto
  ctx.lineTo(x + width, y + height - radius); // Linha para o canto inferior direito
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height); // Curva para o canto
  ctx.lineTo(x + radius, y + height); // Linha para o canto inferior esquerdo
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

// Sistema de partículas para efeitos visuais ao comer a comida

function criarParticulas(x, y, cor) {
  // Criamos 10 pedacinhos
  for (let i = 0; i < 10; i++) {
    particulas.push({
      x: x + box / 2,
      y: y + box / 2,
      velX: (Math.random() - 0.5) * 8, // Velocidade aleatória
      velY: (Math.random() - 0.5) * 8,
      vida: 1.0,
      cor: cor,
    });
  }
}

function atualizarEDesenharParticulas() {
  context.save(); // SALVA o estado do pincel (importante!)

  for (let i = particulas.length - 1; i >= 0; i--) {
    let p = particulas[i];
    p.x += p.velX;
    p.y += p.velY;
    p.vida -= 0.05; // Diminui a vida

    if (p.vida <= 0) {
      particulas.splice(i, 1); // Remove se morreu
    } else {
      context.globalAlpha = p.vida; // Fica transparente
      context.fillStyle = p.cor;
      context.fillRect(p.x, p.y, 4, 4); // Desenha o pixel
    }
  }

  context.restore(); // RESTAURA o pincel ao normal
}
