const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'; //guesses to choose from, one big string

// A lot of the syntax here may look mysterious, but don’t worry — 
// all you need to know is that this is the part of the code that calls 
// your functions and runs the game.

const WORDS = [ //correct words in a list
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

const numWrong = 0; //counter starts at 0

// Loop over the chars in `word` and create divs.
// The divs should be appended to the section with id="word-container".
const createDivsForChars = (word) => {
  
for (let i = 0; i < word.length; i += 1) {
  let chosenLetter = word[i]; 
  
  //figure out how to create divs
  // for isolated element (whether by class or id) in queryselector you enter the name of the element you want to isolate and follow it by .(name of id or class)
  //id are unique and show up 1x
  //only tell JS its a selector string...in qoutations...css does the work
  const container = document.querySelector('#word-container'); // this identifies the section that has the id word cont
  container.insertAdjacentHTML('beforeend', `<div class="letter-box ${chosenLetter}" ></div>`); //this appends the divs to that section
} //instead of single qoutes it needs to be back ticks ``...and the $ is needed to excape the template string

}; //DOM embeds html into JS
//template trings that dont get escaped, they try to put in verbatim 


//we call and create divs for chars in function_start_game...
//we can test 



// Loop over each letter in the alphabet and generate a button for each letter
// The buttons should be appended to the section with id="letter-buttons"
const generateLetterButtons = () => {
  // Replace this with your code
};

// Set the `disabled` property of `buttonEl` to `true.
//
// `buttonEl` is an `HTMLElement` object.
//
const disableLetterButton = (buttonEl) => {
  // Replace this with your code
};

// This is a helper function we will use in the future
// It should return `true` if `letter` is in the word
// For now, you should test it out to make sure it works

const isLetterInWord = (letter) => {
  // Replace this with your code
};

// This is like if __name__ == '__main__' in Python
// It will be called when the file is run (because
// we call the function on line 66)
(function startGame() {
  // For now, we'll hardcode the word that the user has to guess
  // You can change this to choose a random word from WORDS once you
  // finish this lab but we hard code it so we know what the word is
  // and can tell if things look correct for this word
  const word = 'hello'; 

  // call the function that makes an empty line for each letter in the word
  // Replace this line with the function call

  // call the function that makes a button for each letter in the alphabet
  // Replace this line with the function call

  // in the next lab, you will be adding functionality to handle when
  // someone clicks on a letter
})();
