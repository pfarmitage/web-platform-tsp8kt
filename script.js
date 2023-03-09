document.addEventListener("DOMContentLoaded", function() {

  const themes = [
    { name: "Fruits", words: ["apple", "banana", "cherry", "grape", "orange"] },
    { name: "Cities", words: ["london", "paris", "tokyo", "berlin", "rome"] },
    { name: "Sports", words: ["soccer", "basketball", "tennis", "golf", "swimming"] }
  ];

  let themeIndex = Math.floor(Math.random() * themes.length);
  let theme = themes[themeIndex];
  let words = theme.words.slice(0, 5);

  let letterCounts = {};
  let letterTiles = [];

  words.forEach((word) => {
    for (let i = 0; i < word.length; i++) {
      let letter = word.charAt(i);
      letterCounts[letter] = (letterCounts[letter] || 0) + 1;
    }
  });

  // Define tile order in QWERTY keyboard order
  const tileOrder = "qwertyuiopasdfghjklzxcvbnm".split("");

  tileOrder.forEach((letter) => {
    if (letterCounts[letter]) {
      let count = letterCounts[letter];
      let tile = document.createElement("div");
      tile.classList.add("letter-tile");
      tile.textContent = letter.toUpperCase();
      let countLabel = document.createElement("div");
      countLabel.classList.add("count-label");
      countLabel.textContent = count;
      tile.appendChild(countLabel);
      letterTiles.push(tile);
    }
  });

  let letterTilesContainer = document.getElementById("letter-tiles");
  letterTiles.forEach((tile) => {
    letterTilesContainer.appendChild(tile);
  });

  let wordForm = document.getElementById("word-form");
  let wordInput = document.getElementById("word-input");
  let wordList = document.getElementById("word-list");
  let scoreDisplay = document.getElementById("score");
  let score = 0;

  wordForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let word = wordInput.value.toLowerCase();
    if (words.includes(word)) {
      if (!wordList.querySelector(`li[data-word="${word}"]`)) {
        let li = document.createElement("li");
        li.textContent = word;
        li.setAttribute("data-word", word);
        wordList.appendChild(li);
        score += word.length;
        scoreDisplay.textContent = `Score: ${score}`;
        // Update tile count
        updateLetterCounts(word);
        //for (let i = 0; i < word.length; i++) {
        //  let letter = word.charAt(i);
        //  let tile = letterTiles.find((tile) => tile.textContent === letter.toUpperCase());
        //  if (tile) {
        //    let countLabel = tile.querySelector(".count-label");
        //    let count = parseInt(countLabel.textContent);
        //    countLabel.textContent = count - 1;
        //  }
        }
      }
    }
    wordInput.value = "";
  });

  // Function to update the letter counts after a word is submitted
function updateLetterCounts(word) {
  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    letters[letter]--;
    let countLabel = document.getElementById("tile-" + letter).getElementsByClassName("count-label")[0];
    countLabel.innerHTML = letters[letter];
  }
}

  document.getElementById("theme-name").textContent = theme.name;
});
