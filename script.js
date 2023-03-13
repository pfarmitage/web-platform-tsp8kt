// List of words associated with the theme
//import { wordList,themeList } from './wordlist.js';
const wordList = [
  'apple',
  'apricot',
  'avocado',
  'banana',
  'blackberry',
  'blueberry',
  'boysenberry',
  'cantaloupe',
  'cherry',
  'coconut',
  'cranberry',
  'date',
  'dragonfruit',
  'elderberry',
  'fig',
  'grape',
  'grapefruit',
  'guava',
  'honeydew',
  'kiwi',
  'lemon',
  'lime',
  'lychee',
  'mango',
  'melon',
  'orange',
  'papaya',
  'passionfruit',
  'peach',
  'pear',
  'pineapple',
  'plum',
  'pomegranate',
  'raspberry',
  'strawberry',
  'tangerine',
  'watermelon',
  'artichoke',
  'asparagus',
  'beet',
  'broccoli',
  'cabbage',
  'carrot',
  'cauliflower',
  'celery',
  'corn',
  'cucumber',
  'eggplant',
  'garlic',
  'ginger',
  'kale',
  'leek',
  'lettuce',
  'mushroom',
  'onion',
  'pepper',
  'potato',
  'pumpkin',
  'radish',
  'spinach',
  'squash',
  'swede',
  'tomato',
  'turnip',
  'yam',
  'zucchini',
  'antelope',
  'badger',
  'bat',
  'bear',
  'beaver',
  'buffalo',
  'camel',
  'cat',
  'cheetah',
  'chipmunk',
  'cougar',
  'cow',
  'coyote',
  'deer',
  'dog',
  'dolphin',
  'donkey',
  'elephant',
  'elk',
  'ferret',
  'fox',
  'gazelle',
  'giraffe',
  'goat',
  'goose',
  'gorilla',
  'hamster',
  'hare',
  'hedgehog',
  'hippopotamus',
  'horse',
  'hyena',
  'jackal',
  'jaguar',
  'kangaroo',
  'koala',
  'leopard',
  'lion',
  'llama',
  'lynx',
  'meerkat',
  'moose',
  'mouse',
  'otter',
  'panda',
  'panther',
  'penguin',
  'pig',
  'porcupine',
  'rabbit',
  'raccoon',
  'rat',
  'rhinoceros',
  'seal',
  'sheep',
  'skunk',
  'sloth',
  'snake',
  'squirrel',
  'tiger',
  'walrus',
  'weasel',
  'whale',
  'wolf',
  'wombat',
  'zebra',
  'amsterdam',
  'barcelona',
  'berlin',
  'boston',
  'chicago',
  'dublin',
  'istanbul',
  'london',
  'madrid',
  'miami',
  'moscow',
  'paris',
  'rome',
  'seattle',
  'sydney',
  'tokyo',
  'toronto',
  'basketball',
  'baseball',
  'bowling',
  'cycling',
  'football',
  'golf',
  'hiking',
  'hockey',
  'karate',
  'running',
  'skiing',
  'swimming',
  'tennis',
  'volleyball',
  'bed',
  'chair',
  'couch',
  'desk',
  'dresser',
  'lamp',
  'mirror',
  'rug',
  'table',
  'bookcase',
  'cabinet',
  'chest',
  'counter',
  'futon',
  'headboard',
  'hutch',
  'loveseat',
  'nightstand',
  'ottoman',
  'recliner',
  'sofa',
  'stool',
  'wardrobe',
];

const themeList = [
  'fruit',
  'fruit',
  'fruit',
  'fruit',
  'fruit',
  'fruit',
  'fruit',
  'fruit',
  'fruit',
  'fruit',
  'fruit',
  'fruit',
  'fruit',
  'fruit',
  'fruit',
  'fruit',
  'fruit',
  'fruit',
  'fruit',
  'fruit',
  'fruit',
  'fruit',
  'fruit',
  'fruit',
  'fruit',
  'fruit',
  'fruit',
  'fruit',
  'fruit',
  'fruit',
  'fruit',
  'fruit',
  'fruit',
  'fruit',
  'fruit',
  'fruit',
  'fruit',
  'vegetable',
  'vegetable',
  'vegetable',
  'vegetable',
  'vegetable',
  'vegetable',
  'vegetable',
  'vegetable',
  'vegetable',
  'vegetable',
  'vegetable',
  'vegetable',
  'vegetable',
  'vegetable',
  'vegetable',
  'vegetable',
  'vegetable',
  'vegetable',
  'vegetable',
  'vegetable',
  'vegetable',
  'vegetable',
  'vegetable',
  'vegetable',
  'vegetable',
  'vegetable',
  'vegetable',
  'vegetable',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'animal',
  'city',
  'city',
  'city',
  'city',
  'city',
  'city',
  'city',
  'city',
  'city',
  'city',
  'city',
  'city',
  'city',
  'city',
  'city',
  'city',
  'city',
  'city',
  'sport',
  'sport',
  'sport',
  'sport',
  'sport',
  'sport',
  'sport',
  'sport',
  'sport',
  'sport',
  'sport',
  'sport',
  'sport',
  'sport',
  'furniture',
  'furniture',
  'furniture',
  'furniture',
  'furniture',
  'furniture',
  'furniture',
  'furniture',
  'furniture',
  'furniture',
  'furniture',
  'furniture',
  'furniture',
  'furniture',
  'furniture',
  'furniture',
  'furniture',
  'furniture',
  'furniture',
  'furniture',
  'furniture',
  'furniture',
  'furniture',
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
    themes += theme + ' ';
  } else {
    i--;
  }
}

document.getElementById('themes').innerHTML = 'Clue: ' + themes;
console.log(words);
//Add scores for each letter
const letterScores = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10,
};

// Generate a list of all letters required for the words
let letters = {};
let originalLetters = {};
let targetScore = 0;
for (let i = 0; i < words.length; i++) {
  let word = words[i];
  for (let j = 0; j < word.length; j++) {
    let letter = word[j].toUpperCase();

    targetScore += letterScores[letter];
    console.log(letter + targetScore);
    if (letter in letters) {
      letters[letter]++;
      originalLetters[letter]++;
    } else {
      letters[letter] = 1;
      originalLetters[letter] = 1;
    }
  }
}

//add target score to page
document.getElementById('targetScore').innerHTML = 'Target: ' + targetScore;

// Display the letter tiles and counts
let letterTiles = document.getElementById('letter-tiles');
let tileOrder = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('');
shuffleArray(tileOrder);
for (let i = 0; i < tileOrder.length; i++) {
  let letter = tileOrder[i];
  if (letter in letters) {
    let count = letters[letter];
    let tile = document.createElement('div');
    tile.innerHTML = letter;
    tile.className = 'letter-tile';
    tile.id = 'tile-' + letter;
    let countLabel = document.createElement('div');
    countLabel.innerHTML = count + ' (' + letterScores[letter] + ')';
    countLabel.className = 'count-label';
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

//Timer
let startTime, endTime, elapsedTime;
let seconds = 0;
let timerInterval;

function startTimer() {
  startTime = new Date().getTime();
  timerInterval = setInterval(function () {
    seconds++;
    document.getElementById('timer').innerHTML = seconds + ' seconds';
  }, 1000);
  document.getElementById('game-board').style.display = 'block';
}

function stopTimer() {
  endTime = new Date().getTime();
  elapsedTime = (endTime - startTime) / 1000; // in seconds
}

function submitWord() {
  let wordInput = document.getElementById('word-input');
  let word = wordInput.value.toUpperCase();
  if (isValidWord(word)) {
    submittedWords.push(word);
    let wordScore = 0;
    for (let i = 0; i < word.length; i++) {
      let letter = word[i];
      wordScore += letterScores[letter];
    }
    score += wordScore;
    percent = parseInt((score / targetScore) * 100);
    let wordList = document.getElementById('word-list');
    let listItem = document.createElement('li');
    listItem.innerHTML = word + '(' + wordScore + ')';
    wordList.appendChild(listItem);
    if (percent >= 100) {
      stopTimer();
      document.getElementById('score').innerHTML =
        'You Win! Time: ' + elapsedTime + 's';
    } else {
      document.getElementById('score').innerHTML =
        'Score: ' + score + ' (' + percent + '%)';
    }
    updateLetterCounts(word);
    wordInput.value = '';
  } else {
    //alert('Not enough letters or not in word list!');
  }
}

// Function to check if a word is valid
function isValidWord(word) {
  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    if (!(letter in letters) || letters[letter] == 0) {
      console.log(letters)
      alert('Not enough letters');
      return false;
    }
  }
  // Check if the word is in the word list
  let lowerCaseWord = word.toLowerCase();
  if (!wordList.includes(lowerCaseWord)) {
    alert("Not in word list!")
    return false;
  }
  return true;
}

// Function to update the letter counts after a word is submitted
function updateLetterCounts(word) {
  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    letters[letter]--;
    let countLabel = document
      .getElementById('tile-' + letter)
      .getElementsByClassName('count-label')[0];
    countLabel.innerHTML = letters[letter] + ' (' + letterScores[letter] + ')';
    if (letters[letter] === 0) {
      let letterTile = document.getElementById('tile-' + letter);
      letterTile.style.backgroundColor = '#ccc';
    }
  }
}

// Reset the game
function resetGame() {
  // Reset all variables to their initial values
  score = 0;
  percent = 0;
  submittedWords = [];
  // Update the UI to reflect the reset values
  document.getElementById('score').innerHTML = 'Score: 0 (0%)';
  document.getElementById('word-list').innerHTML = '';
  resetLetterCounts();
}

// Function to reset the letter counts after a word is submitted
function resetLetterCounts() {
  console.log(originalLetters);
  Object.keys(originalLetters).forEach(([letter, count]) => {
    count = originalLetters[letter];
    console.log(letter + '-' + count);
    let letterTile = document.getElementById('tile-' + letter);
    let countLabel = document
      .getElementById('tile-' + letter)
      .getElementsByClassName('count-label')[0];
    countLabel.innerHTML = count + ' (' + letterScores[letter] + ')';
    letterTile.style.backgroundColor = 'var(--secondary-color)';
  });
  letters = originalLetters;
}

// Add a click event listener to the "Try Again" button
document.getElementById('try-again').addEventListener('click', resetGame);
