// Array de palavras para adivinhar
var words = [
    "HTML",
    "CSS",
    "PHP",
    "MySQL",
    "Bootstrap",
    "jQuery",
    "Node",
    "React",
    "Angular",
    "Vue",
    "Laravel",
    "Java",
    "Python",
    "Ruby",
    "Scala",
    "Go",
    "Scala",
    "Kotlin",
    "Swift",
    "Rust",
    "Docker",
    "Linux",
    "Windows",
    "MacOS",
    "Unix",
    "Android",
    "iOS",
    "Linux",
    "Div",
    "Span",
    "VsCode",
    "Eclipse",
    "IntelliJ",
    "NetBeans",
    "Powershell",
    "Git",
    "GitHub",
    "Bitbucket",

  ];
  
  // Adiciona imagens do jogo
  var hangmanImages = [
    "images/forca0.png",
    "images/forca1.png",
    "images/forca2.png",
    "images/forca3.png",
    "images/forca4.png",
    "images/forca5.png",
    "images/forca6.png",
    "images/forca7.png",
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
        hangmanImage.src = "images/forca7.png";
        alert("Vocé perdeu! A palavra era " + word);  
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
  