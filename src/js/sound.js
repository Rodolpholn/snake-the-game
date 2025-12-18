// Áudios do jogo
var musicaFundo = new Audio("./src/sound/background3.mp3");
musicaFundo.loop = true; // Faz a música tocar sem parar
musicaFundo.volume = 0.4; // Volume um pouco mais baixo para não incomodar

var somComer = new Audio("./src/sound/crunch.mp3");

var somLose = new Audio("./src/sound/lose.mp3");
somLose.volume = 0.7; // Volume para ser bem nítido
