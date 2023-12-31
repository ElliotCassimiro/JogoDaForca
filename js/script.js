// Array de palavras para adivinhar
var words = [
    "html",
    "css",
    "javascript",
    "react",
    "jquery",
    "bootstrap",
    "react",
    "vue",
    "angular",
    "node",
    "mongodb",
    "mysql",
    "postgresql",
    "oracle",
    "firefox", 
    "chrome",
    "safari",
    "opera",
    "edge",
    "windows",
    "mac",
    "linux",
    "ubuntu",
  ];
  
  // Adiciona imagens do jogo
  var hangmanImages = [
    "images/forca0.png",
    "images/forca1.png",
    "images/forca2.png",
    "images/forca3.png",
    "images/forca4.png",
    "images/forca5.png",
    "images/forcaF.png",
  ];

  var hangmanImage = document.getElementById("hangman-image");
  hangmanImage.src = hangmanImages[0];
  

  // Seleciona uma palavra aleatória do array
  var word = words[Math.floor(Math.random() * words.length)];
  
  // Cria um array com underscore (_) para representar as letras da palavra
  var underscores = Array(word.length).fill("_");
  
  // Exibe a palavra inicialmente com underscores
  document.getElementById("word").textContent = underscores.join(" ");
  
  // Inicializa o número de tentativas e exibe na tela
  var guesses = 6;
  document.getElementById("guesses").textContent = "Tentativas restantes: " + guesses;
  hangmanImage.src = hangmanImages[0];

  
  // Captura o botão de palpite e adiciona um listener para o evento de clique
  var guessBtn = document.getElementById("guess-btn");
  guessBtn.addEventListener("click", checkGuess);
  
  // Função para verificar o palpite do jogador
  function checkGuess() {
    var guess = document.getElementById("guess-input").value.toLowerCase();
  
    if (guess.length !== 1) {
      alert("Por favor, digite apenas uma letra.");
      return;
    }
  
    // Verifica se a letra está presente na palavra
    var found = false;
    for (var i = 0; i < word.length; i++) {
      if (word[i] === guess) {
        underscores[i] = guess;
        found = true;
      }
    }
  
    if (!found) {
      guesses--;
      document.getElementById("guesses").textContent = "Tentativas restantes: " + guesses;

      // Atualiza a imagem da forca
        var hangmanImage = document.getElementById("hangman-image");
        hangmanImage.src = "images/forca" + (6 - guesses) + ".png";
  
        if (guesses === 0) {
          hangmanImage.src = hangmanImages[6]; // Exibe a penúltima imagem da forca
          setTimeout(function() {
            hangmanImage.src = hangmanImages[7]; // Exibe a última imagem da forca após um intervalo de tempo
            alert("Você perdeu! A palavra era " + word);
            resetGame();
          }, 500);
          return;
        }
    }
  
    // Verifica se todas as letras foram adivinhadas
    if (!underscores.includes("_")) {
      alert("Parabéns! Você venceu!");
      resetGame();
      return;
    }
  
    // Atualiza a exibição da palavra e limpa o campo de entrada
    document.getElementById("word").textContent = underscores.join(" ");
    document.getElementById("guess-input").value = "";
  }
  
  // Função para reiniciar o jogo
  function resetGame() {
    word = words[Math.floor(Math.random() * words.length)];
    underscores = Array(word.length).fill("_");
    guesses = 6;
  
    document.getElementById("word").textContent = underscores.join(" ");
    document.getElementById("guesses").textContent = "Tentativas restantes: " + guesses;
    hangmanImage.src = hangmanImages[0]; // Redefinir a imagem da forca para a inicial
    document.getElementById("guess-input").value = "";
  }

  window.addEventListener("DOMContentLoaded", function() {
    // Seleciona automaticamente a caixa de texto quando a página é carregada
    document.getElementById("guess-input").focus();
  });
  
  var guessBtn = document.getElementById("guess-btn");
  guessBtn.addEventListener("click", function() {
    // Retorna automaticamente para a caixa de texto após clicar em "enviar"
    document.getElementById("guess-input").focus();
  });

  