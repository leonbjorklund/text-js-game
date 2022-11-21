window.addEventListener("DOMContentLoaded", main);

/** @type {HTMLElement} - element to contain other HTML-elements */
let firstScene = document.getElementById('first-scene');
/** @type {HTMLHeadElement} - h1-element to display scene message */
let welcomeText = document.getElementById("welcome-text");
/** @type {HTMLButtonElement} - button that goes to the next scene */
let startButton = document.getElementById('start-button');
/** @type {HTMLElement} - element to contain other HTML-elements */
let secondScene = document.getElementById('second-scene');
/** @type {HTMLHeadElement} - h1-element to display scene message */
let chooseName = document.getElementById('choose-name');
/** @type {HTMLInputElement} - element to get user input */
let inputUsername = document.getElementById("username-input")
/** @type {HTMLElement} - element to contain other HTML-elements */
let thirdScene = document.getElementById('third-scene');
/** @type {HTMLHeadElement} - h1-element to display scene message */
let wakeMessage = document.getElementById("wake-message");
/** @type {HTMLHeadElement} - h1-element to display scene message */
let wakeAgain = document.getElementById("wake-again");
/** @type {HTMLButtonElement} - button that goes to the next scene */
let leftButton = document.getElementById("left");
/** @type {HTMLButtonElement} - button that repeats the current scene with a delay */
let rightButton = document.getElementById("right");
/** @type {HTMLElement} - element to contain other HTML-elements */
let fourthScene = document.getElementById('fourth-scene');
/** @type {HTMLElement} - element that gives username to a text */
let addUserName = document.getElementById("username-placeholder");
/** @type {HTMLElement} - element to contain other HTML-elements */
let fifthScene = document.getElementById('fifth-scene');
/** @type {HTMLStringElement} - string that has value 1*/
let oneValue = document.getElementById("one").value;
/** @type {HTMLStringElement} - string that has value 2*/
let twoValue = document.getElementById("two").value;
/** @type {HTMLStringElement} - string that has value 3*/
let threeValue = document.getElementById("three").value;
/** @type {HTMLStringElement} - string that has value 4*/
let fourValue = document.getElementById("four").value;
/** @type {HTMLStringElement} - string that has value 5*/
let fiveValue = document.getElementById("five").value;
/** @type {HTMLStringElement} - string that has value 6*/
let sixValue = document.getElementById("six").value;
/** @type {HTMLStringElement} - string that has value 7*/
let sevenValue = document.getElementById("seven").value;
/** @type {HTMLStringElement} - string that has value 8*/
let eightValue = document.getElementById("eight").value;
/** @type {HTMLStringElement} - string that has value 9*/
let nineValue = document.getElementById("nine").value;
/** @type {HTMLParagraphElement} - p-tag placeholder for passcode nr1 */
let onePlaceHolder =  document.getElementById("n1");
/** @type {HTMLParagraphElement} - p-tag placeholder for passcode nr2 */
let twoPlaceHolder = document.getElementById("n2");
/** @type {HTMLParagraphElement} - p-tag placeholder for passcode nr3 */
let threePlaceHolder = document.getElementById("n3");
/** @type {HTMLParagraphElement} - p-tag placeholder for passcode nr4 */
let fourPlaceHolder = document.getElementById("n4");
/** @type {HTMLButtonElement} - button that goes to the rock-paper-scissor scene */
let rpsButton = document.getElementById("rps-button");
/** @type {HTMLButtonElement} - button that goes to the trolley-problem scene */
let trolleyButton = document.getElementById("trolley-button");
/** @type {HTMLButtonElement} - button that goes to the math-problem scene */
let mathButton = document.getElementById("math-button");
/** @type {HTMLButtonElement} - button that goes to the translate-something scene */
let translateButton = document.getElementById("translate-button");
/** @type {String} - String that contains first passcode-digit */
let passcodeOne = "1";
/** @type {String} - String that contains second passcode-digit */
let passcodeTwo = "3";
/** @type {String} - String that contains third passcode-digit */
let passcodeThree = "3";
/** @type {String} - String that contains fourth passcode-digit */
let passcodeFour = "7";
/** @type {HTMLElement} - element that contains the HTML elements for rock-paper-scissors scene */
let rpsCanvas = document.getElementById("rps-canvas");
/** @type {HTMLElement} - element that contains the HTML elements for trolley-problem scene */
let trolleyCanvas = document.getElementById("trolley-canvas");
/** @type {HTMLHeadElement} - h1-element to display scene message */
let finishText = document.getElementById("trolley-message");
/** @type {HTMLButtonElement} - option-button that returns A*/
let optionA = document.getElementById("option-A");
/** @type {HTMLButtonElement} - option-button that returns B*/
let optionB = document.getElementById("option-B");
/** @type {HTMLButtonElement} - option-button that goes to the next scene*/
let goNext = document.getElementById("go-next");
/** @type {HTMLElement} - element that contains the HTML elements for math-problem scene */
let mathCanvas = document.getElementById("math-canvas");
/** @type {HTMLHeadElement} - h1-element to display scene message */
let mathMessage = document.getElementById("math-question");
/** @type {HTMLInputElement} - element to get user input */
let mathInput  = document.getElementById("math-input");
/** @type {HTMLButtonElement} - option-button that goes to the next scene*/
let mathGoNext = document.getElementById("math-next");
/** @type {HTMLElement} - element that contains the HTML elements for translate-something scene */
let translateCanvas = document.getElementById("translate-canvas");
/** @type {HTMLElement} - element that creates a list of languages to translate from using google translate API */
let googleTranslate = document.getElementById("google_translate_element");
/** @type {HTMLInputElement} - element to get user input */
let translationInput = document.getElementById("translate-input");
/** @type {HTMLHeadElement} - h1-element to display scene message */
let correctTranslationMessage = document.getElementById("translate-instructions");
let translationGoNext = document.getElementById("translate-next");
/** @type {HTMLButtonElement} - option-button that goes to the next scene*/
let finishedScene = document.getElementById("finished-canvas");
/** @type {HTMLSpanElement} - element that will be given string and displayed */
let placeTime = document.getElementById("time");

/** main runs functions that get their eventlisteners from javaScript, 
 * as opposed other functions that have an onclick-event embeded in their HTML-element */
function main () {
  loadStartScene();
  inputEnter();
  clearPasscode();
  inputMath();
  inputTranslation();
}

/** nextStep takes two HTML-elements and hides one of them, and shows another.
 * @param {Element} currentScene - element that hides
 * @param {Element} nextScene - elementet that shows */
function loadNextScene(currentScene, nextScene) {
  currentScene.style.display = "none";
  nextScene.style.display = "block";
}

let startTime;
/** loadStartScene starts a timer, and gives a h1-element and a button some text.
 * The button gets a click-event to load the next scene. */
function loadStartScene() {
  startTime = new Date();
  welcomeText.textContent = "Hello, welcome to this text-based adventure!";
  startButton.textContent = "Start";
  startButton.addEventListener("click", ()=> loadNextScene(firstScene, secondScene));
}

let userName = inputUsername.value;
/** takeInput sets userName to whatever the username inputted,
 * and displays a message with the username. */
function takeInput() {
  userName = inputUsername.value;
  document.getElementById("wake-message").innerHTML =
    "Wake up " + userName + "!";
}

/** inputEnter sets an keypress-enter eventlistener to an input-field,
 * when enter is pressed, the input is stores as username,
 * next scene is loaded with a delay-effect  */
function inputEnter() {
  inputUsername.addEventListener("keyup", ({key}) => {
    if (key === "Enter") {
      takeInput();
      loadNextScene(secondScene, thirdScene);
      delayRender();
    }
  });
}

/** delayRender displays a message, then displays another message with delay,
 * then displays two option-buttons with a delay. */
function delayRender() {
  wakeMessage.style.display = "block";
  function myMessage() {
    wakeAgain.innerHTML = "WAKE UP!";
  }
  setTimeout(myMessage, 1000);

  function renderButtons() {
    leftButton.style.display = "block";
    rightButton.style.display = "block";
  }
  setTimeout(renderButtons, 2000);
}

/** keepSleeping first hides a scene, 
 * and then shows the same scene with a delay */
function keepSleeping() {
  thirdScene.style.display = "none";
  wakeAgain.style.display = "none";

  function displayThird() {
    thirdScene.style.display = "block";
  }
  setTimeout(displayThird, 1000);

  function displayThis() {
    wakeAgain.style.display = "block";
  }
  setTimeout(displayThis, 2000);

  leftButton.style.display = "none";
  rightButton.style.display = "none";

  function renderButtons() {
    leftButton.style.display = "block";
    rightButton.style.display = "block";
  }
  setTimeout(renderButtons, 3000);
}
/** wakeUp gives a username string to display */
function wakeUp() {
  addUserName.innerHTML = userName;
}

/** numberPress checks 4 string-elements if they have "*",
 * if string has "*", it gives a number-value to that string,
 * and then does the same thing for the next element.
 * @param {HTMLStringElement} value - value that will replace "*"-string */
function numberPress(value) {
  if (onePlaceHolder.innerHTML.includes("*")) {       
    onePlaceHolder.innerHTML = value;
  } 
  else if (twoPlaceHolder.innerHTML.includes("*")) {
  twoPlaceHolder.innerHTML = value;
  }
  else if (threePlaceHolder.innerHTML.includes("*")) {
    threePlaceHolder.innerHTML = value;
  }
  else if (fourPlaceHolder.innerHTML.includes("*")) {
    fourPlaceHolder.innerHTML = value;
  }
}

/** clearPasscode gives string-value "*" to four p-tags. */
function clearPasscode() {
  onePlaceHolder.innerHTML = "*";
  twoPlaceHolder.innerHTML = "*";
  threePlaceHolder.innerHTML = "*";
  fourPlaceHolder.innerHTML = "*";
}

/** checkPasscode checks four string-values in the correct order 
 * if string-values are correct and in order, the "final"-scene is loaded. */
function checkPassode() {
  if (onePlaceHolder.innerHTML.includes("1") && 
      twoPlaceHolder.innerHTML.includes("3") &&
      threePlaceHolder.innerHTML.includes("3") && 
      fourPlaceHolder.innerHTML.includes("7")) 
      {loadFinalScene();}
}

/** finishChallenge changes text of a button, gives a hover effect to reveal passcode. 
 * @param {HTMLButtonElement} finishedButton - button that will get textchange and hover-effect
 * @param {HTMLStringElement} passcodeDigit - corresponding passcode digit that will be shown when button is hovered. */
function finishChallenge (finishedButton, passcodeDigit) {
  finishedButton.innerHTML = "Hover over me to see passcode!";
  finishedButton.addEventListener('mouseover', (event) => {
    finishedButton.innerHTML = "The first password digit is: " + passcodeDigit;
    finishedButton.addEventListener('mouseout', (event) => {
      finishedButton.innerHTML = "Hover over me to see password!";
      });
    });
}

/** rpsFinish runs finishChallenge above for it's corresponding button and passcode digit,
 * then loads the next scene. */
function rpsFinish() {
  finishChallenge(rpsButton, passcodeOne);
  loadNextScene(rpsCanvas, fifthScene);
}

  optionA.innerHTML = "A";
  optionB.innerHTML = "B";

/** trolleyFinish checks between two A and B-buttons that contains string A and B,
* if string includes B, it will hide the option-buttons and give a message with passcode digit,
* then it will show button that loads next scene.
* finishChallenge is also run to reveal passcode digit in corresponding button. 
* if string doesn't include B, a message will be given to try again.
* @param {HTMLButtonElement} whichOption - button which will be checked for string */
function trolleyFinish (whichOption) {
  if(whichOption.innerHTML.includes("B")) {
    optionA.style.display = "none";
    optionB.style.display = "none";
    finishText.innerHTML = "Correct! The next password digit is: 3";
    goNext.style.display = "block";
    finishChallenge(trolleyButton, passcodeTwo);
  }
  else {finishText.innerHTML = "Yikes! Try again! I wonder what the right choice could be!"}
}

let enteredAnswer = mathInput.value;

/** checkMath checks if userinput is correct and then shows message giving passcode digit,
 * shows a button to go to the next scene, also finishChallenge is run on the corresponding button to show passcode. 
 * if userinput is wrong, a "try-again"-message is displayed */
function checkMath() {
  enteredAnswer = mathInput.value;
  if (enteredAnswer === "5") {
    mathInput.style.display = "none";
    mathGoNext.style.display = "block";
    mathMessage.innerHTML = "Oh you're good! The third password digit is: 3";
    finishChallenge(mathButton, passcodeThree);
  }
  else {mathMessage.innerHTML = "Try again! What is 3 + 2*3 - 4?"}
}

/** inputMath adds an enter-keypress eventlistener to inputfield,
 * and then runs function checkMath to see if answer is correct */
function inputMath () {
  mathInput.addEventListener("keyup", ({key}) => {
      if (key === "Enter") {
        checkMath();
      }
    });
  }

/** inputTranslation adds an enter-keypress eventlistener to inputfield,
 * and then runs function checkTranslation to see if answer is correct */  
function inputTranslation () {
  translationInput.addEventListener("keyup", ({key}) => {
    if (key === "Enter") {
      checkTranslation();
    }
  });
}
let tip = document.getElementsByClassName("tip")[2];
let enteredTranslation = translationInput.value;
/** checkTranslation checks if userinput matches a string, if true then message with passcode digit is shown,
 * a button to go to the next scene, if userinput is wrong, a "try-again"-message is displayed */
function checkTranslation () {
  enteredTranslation = translationInput.value;
  if (enteredTranslation === "大家好！我喜欢冰淇淋！") {
    tip.style.display = "none";
    translationInput.style.display = "none";
    translationGoNext.style.display ="block";

    correctTranslationMessage.innerHTML = "Impressive! The fourth and final passcode digit is: 7";
  }
  else {correctTranslationMessage.innerHTML = "Try again!"}
}

/** googleTranslateElementInit creates a google translate-element to translate elements
 * to other languages using google translate API */
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}

/** translationFinish hides google translate-element, gives passcode to the corresponding button,
 * and loads the next scene.
 */
function translationFinish () {
  googleTranslate.style.display = "none";
  finishChallenge(translateButton, passcodeFour);
  loadNextScene(translateCanvas, fifthScene);
}

let elapsed; 

/** loadFinalScene loads the final scene,
 * and uses starTime and elapsed to see how long it took for the user to get to the final scene.
 * a message is displayed with the time in minutes and seconds.
 */
function loadFinalScene () {
  loadNextScene(fifthScene, finishedScene)
  elapsed = new Date() - startTime;
  let elapsedSeconds = elapsed/1000;
  let elapsedMinutes = elapsedSeconds/60;
  let remainingSeconds = elapsedSeconds%60;
  placeTime.innerHTML = elapsedMinutes.toFixed() + " minutes " + "and " + remainingSeconds.toFixed() + " seconds!";
}