// // Create an array of words
// const word = ['steelers', 'redskins', 'eagles', 'saints', 'packers']
// // choose word randomly
// let randNum = Math.floor(Math.random() * word.length)
// let chosenword = word[randNum]
// let rightWord = [ ];
// let wrongWord = [ ];
// let underscore = [ ];
// //testing
// console.log(chosenword)
// // create undersocres based on length of word
// let generateUnderscore = () => {
//   for (let i = 0; i < chosenword.length; i++) {
//       underscore.push('_')
//   }
//   return underscore
// }
// console.log(generateUnderscore())
// // get users guess
// document.addEventListener('keypress' , (event) => {
//   let keyword = String.fromCharCode(event.keyCode)
//   // if users guess is right
//   if (chosenword.indexOf(keyword)  > -1){
// // add to right word array
//       rightWord.push(keyword)
//       // replace underscore with right letter
//       underscore[chosenword.indexOf(keyword)] = keyword
//       // checks to see if user word matches guesses
//       if(underscore.join(' ') == chosenword){
//             alert('You win')
//       }
//     }
//     else
//     wrongWord.push(keyword)
//     console.log(keyword)
// })
// // check if guess is right
// // if right push to right array
// // if wrong push to wrong array

// //=================================================
// function DrawUnderscores(num) {
//   // var underscoreDiv = ;
//   underscoreDiv.innerHTML = "";
//   for (let index = 0; index < num; index++) {
//     // underscoreDiv.innerHTML += "_";
//     document.getElementsByClassName("underscore").innerHTML  +="_";
//     console.log(num);
//   }
// }
// //Declaring variables
// var randNum
 
// var winCount
// var lossCount
// var rightGuess
// var wrongGuess
// var underscore
// var reset

// // Generate random letter
//  // console.log('aa');
// var random = words[Math.floor(Math.random() * words.length)];

//   DrawUnderscores(random);
//   //console.log('a');

//Generate random letter
window.onload = function () {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var categories;         // Array of topics
  var chosenCategory;     // Selected catagory
  var getHint;            // Word getHint
  var word;               // Selected word
  var guess;              // Geuss
  var geusses = [];       // Stored geusses
  var lives;              // Lives
  var counter;            // Count correct geusses
  var space;              // Number of spaces in word '-'

  // Get elements
  var showLives = document.getElementById("mylives");
  var showCatagory = document.getElementById("scatagory");
  var getHint = document.getElementById("hint");
  var showClue = document.getElementById("clue");



  // create alphabet ul
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }


  // Select Catagory
  var selectCat = function () {
    if (chosenCategory === categories[0]) {
      catagoryName.innerHTML = "The Chosen Category Is Premier League Football Teams";
    } else if (chosenCategory === categories[1]) {
      catagoryName.innerHTML = "The Chosen Category Is Films";
    } else if (chosenCategory === categories[2]) {
      catagoryName.innerHTML = "The Chosen Category Is Cities";
    }
  }

  // Create geusses ul
  result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      geusses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }

  // Show lives
  comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  }

  // OnClick Function
  check = function () {
    list.onclick = function () {
      var geuss = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          geusses[i].innerHTML = geuss;
          counter += 1;
        }
      }
      var j = (word.indexOf(geuss));
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    }
  }


  // Play
  play = function () {
    categories = [
      ["everton", "liverpool", "swansea", "chelsea", "hull", "manchester-city", "newcastle-united"],
      ["alien", "dirty-harry", "gladiator", "finding-nemo", "jaws"],
      ["manchester", "milan", "madrid", "amsterdam", "prague"]
    ];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    geusses = [];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
    canvas();
  }

  play();

  // Hint

  
 
  // Reset

  document.getElementById('reset').onclick = function () {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    context.clearRect(0, 0, 400, 400);
    play();
  }
}










