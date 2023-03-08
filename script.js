// List of words associated with the theme
let words = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon"];

// Generate a random theme
let themes = ["animals", "cities", "sports teams"];
let theme = themes[Math.floor(Math.random() * themes.length)];
document.getElementById("theme").innerHTML = theme.toUpperCase();

// Generate a list of all letters required for the words
let letters = {};
for (let i = 0; i < words.length; i++) {
  let word = words[i];
  for (let j = 0; j < word.length; j++) {
    let letter = word[j].toUpperCase();
    if (letter in letters) {
      letters[letter]++;
    } else {
      letters[letter] = 1;
    }
  }
}

// Display the letter tiles and counts
let letterTiles = document.getElementById("letter-tiles");
for (let letter in letters) {
  let count = letters[letter];
  let tile = document.createElement("div");
  tile.innerHTML = letter;
  tile.className = "letter-tile";
  tile.id = "tile-" + letter;
  let countLabel = document.createElement("div");
  countLabel.innerHTML = count;
  countLabel.className = "count-label";
  tile.appendChild(countLabel);
  letterTiles.appendChild(tile);
}

// Function to submit a word and update the score
let score = 0;
function submitWord() {
  let wordInput = document.getElementById("word-input");
  let word = wordInput.value.toUpperCase();
  if (isValidWord(word)) {
    let wordList = document.getElementById("word-list");
    let listItem = document.createElement("li");
    listItem.innerHTML = word;
    wordList.appendChild(listItem);
    score += word.length;
    document.getElementById("score").innerHTML = "Score: " + score;
    updateLetterCounts(word);
    wordInput.value = "";
  } else {
    alert("Invalid word!");
  }
}

// Function to check if a word is valid
function isValidWord(word) {
  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    if (!(letter in letters) || letters[letter] == 0) {
      return false;
    }
  }
  return true;
}

// Function to update the letter counts after a word is submitted
function updateLetterCounts(word) {
  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    letters[letter]--;
    let countLabel = document.getElementById("tile-" + letter).getElementsByClassName("count-label")[0];
    countLabel.innerHTML = letters[letter];
  }
}
