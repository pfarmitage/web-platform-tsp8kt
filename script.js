// List of words associated with the theme
let wordList = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon", "mango", "orange", "papaya", "peach", "pear", "pineapple", "plum", "pomegranate", "raspberry", "strawberry", "watermelon", "carrot", "celery", "cucumber", "garlic", "ginger", "lettuce", "onion", "pepper", "potato", "pumpkin", "spinach", "squash", "swede", "tomato", "yam", "zucchini", "cat", "dog", "elephant", "giraffe", "hippopotamus", "kangaroo", "koala", "lion", "monkey", "panda", "tiger", "zebra"];
let themeList = [
  "Fruit", "Fruit", "Fruit", "Fruit", "Fruit", "Fruit", "Fruit", "Fruit", "Fruit", "Fruit",
  "Fruit", "Fruit", "Fruit", "Fruit", "Fruit", "Fruit", "Fruit", "Fruit", "Fruit", "Fruit",
  "Fruit", "Vegetable", "Vegetable", "Vegetable", "Vegetable", "Vegetable", "Vegetable", "Vegetable", "Vegetable", "Vegetable",
  "Vegetable", "Vegetable", "Vegetable", "Vegetable", "Vegetable", "Vegetable", "Vegetable", "Animal", "Animal", "Animal",
  "Animal", "Animal", "Animal", "Animal", "Animal", "Animal", "Animal", "Animal", "Animal"
];
//Pick three words 
let words = [];
let themes = [];
let wordCount = 2;
for (let i = 0; i < wordCount; i++) {
  let randomIndex = Math.floor(Math.random() * wordList.length);
  let word = wordList[randomIndex];
  let theme = themeList[randomIndex];
  if (!words.includes(word)) {
    words.push(word);
    themes += theme+" ";
    console.log(themes);
  } else {
    i--;
  }
}
document.getElementById("themes").innerHTML = "Clue: " + themes;
console.log(words);
//Add scores for each letter
const letterScores = {
  "A": 1,"B": 3,"C": 3,"D": 2,"E": 1,"F": 4,"G": 2,"H": 4,"I": 1,"J": 8,"K": 5,"L": 1,"M": 3,
  "N": 1,"O": 1,"P": 3,"Q": 10,"R": 1,"S": 1,"T": 1,"U": 1,"V": 4,"W": 4,"X": 8,"Y": 4,"Z": 10
};

// Generate a list of all letters required for the words
let letters = {};
let targetScore = 0;
for (let i = 0; i < words.length; i++) {
  let word = words[i];
  for (let j = 0; j < word.length; j++) {
    let letter = word[j].toUpperCase();
    
    targetScore += letterScores[letter];
    console.log(letter + targetScore);
    if (letter in letters) {
      letters[letter]++;
    } else {
      letters[letter] = 1;
    }
  }
}
document.getElementById("targetScore").innerHTML = "Target: " + targetScore;

// Display the letter tiles and counts
let letterTiles = document.getElementById("letter-tiles");
let tileOrder = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
shuffleArray(tileOrder);
for (let i = 0; i < tileOrder.length; i++) {
  let letter = tileOrder[i];
  if (letter in letters) {
    let count = letters[letter];
    let tile = document.createElement("div");
    tile.innerHTML = letter;
    tile.className = "letter-tile";
    tile.id = "tile-" + letter;
    let countLabel = document.createElement("div");
    countLabel.innerHTML = count + " (" + letterScores[letter] + ")";
    countLabel.className = "count-label";
    tile.appendChild(countLabel);
    letterTiles.appendChild(tile);
  }
}

// Shuffle the array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Function to submit a word and update the score
let score = 0;
let percent = 0;
let submittedWords = [];
function isValidWord(word) {
  if (submittedWords.includes(word)) {
    return false;
  }
  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    if (!(letter in letters) || letters[letter] == 0) {
      return false;
    }
  }
  return true;
}

function submitWord() {
  let wordInput = document.getElementById("word-input");
  let word = wordInput.value.toUpperCase();
  if (isValidWord(word)) {
    submittedWords.push(word);
    let wordScore = 0;
    for (let i = 0; i < word.length; i++) {
      let letter = word[i];
      wordScore += letterScores[letter];
    }
    score += wordScore;
    percent = parseInt((score / targetScore)*100);
    let wordList = document.getElementById("word-list");
    let listItem = document.createElement("li");
    listItem.innerHTML = word + "("+wordScore+")";
    wordList.appendChild(listItem);
    if (percent >= 100) {
      document.getElementById("score").innerHTML = "You Win!";
    } else {
      document.getElementById("score").innerHTML = "Score: " + score + " (" + percent + "%)";
    }
    updateLetterCounts(word);
    wordInput.value = "";
  } else {
    alert("Not enough letters or not in word list!");
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
    countLabel.innerHTML = letters[letter]+ " (" + letterScores[letter] + ")";
  }
}
