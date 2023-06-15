// Array de palavras para adivinhar
var words = [
    "cachorro",
    "gato",
    "elefante",
    "leao",
    "tigre",
    "girafa",
    "macaco",
    "cobra",
    "hipopotamo"
  ];
  
  // Seleciona uma palavra aleatória do array
  var word = words[Math.floor(Math.random() * words.length)];
  
  // Cria um array com underscore (_) para representar as letras da palavra
  var underscores = Array(word.length).fill("_");
  
  // Exibe a palavra inicialmente com underscores
  document.getElementById("word").textContent = underscores.join(" ");
  
  // Inicializa o número de tentativas e exibe na tela
  var guesses = 6;
  document.getElementById("guesses").textContent = "Tentativas restantes: " + guesses;
  
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
  
      if (guesses === 0) {
        alert("Você perdeu! A palavra era: " + word);
        resetGame();
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
  }
  