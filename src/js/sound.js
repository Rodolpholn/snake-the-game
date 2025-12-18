// Áudios do jogo MENU
var musicaMenu = new Audio("./src/sound/background.mp3");
musicaMenu.loop = true; // Faz a música tocar sem parar
musicaMenu.volume = 0.1; // Volume baixo para não incomodar
musicaMenu.paused = true; // Garante que esteja pausada

// Áudios quando inicia o  jogo
var musicaFundo = new Audio("./src/sound/background3.mp3");
musicaFundo.loop = true; // Faz a música tocar sem parar
musicaFundo.volume = 0.4; // Volume um pouco mais baixo para não incomodar

// Sons de efeitos comida
var somComer = new Audio("./src/sound/crunch.mp3");

// som quando perde
var somLose = new Audio("./src/sound/lose.mp3");
somLose.volume = 0.7; // Volume para ser bem nítido
