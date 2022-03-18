'use strict';

// all variable
let number = document.querySelector('.number');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const checkButton = document.querySelector('.check');
const message = document.querySelector('.message');
let scoreResutl = 20;
const highScore = document.querySelector('.highscore');
let highScoreResult = 0;
const again = document.querySelector('.again');


function displayMessage(messshowContent){
    message.textContent = messshowContent;
}


checkButton.addEventListener('click', function(){
    let guessNumber = document.querySelector('.guess').value;

    if(!guessNumber){
        displayMessage("This is not a number!");
    } else if(secretNumber == guessNumber){
        displayMessage("Your number is correct!");
        number.textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = "#60b347";


        if( scoreResutl >  highScoreResult){
            highScoreResult = scoreResutl;
            highScore.textContent = highScoreResult;
        }


    } else{
        scoreResutl--;
        if(scoreResutl > -1){
          document.querySelector('.score').textContent = scoreResutl;
        }

        if(scoreResutl > 1){

        let gussNumberPosition = secretNumber < guessNumber ?`The correct Number is lower than ${guessNumber}` : `The correct Number is higher than ${guessNumber}`;
           
         displayMessage(gussNumberPosition);
        } else{
            message.textContent = `YOu lost the game`;
        }
        
    }
});

again.addEventListener('click', function(){
    scoreResutl = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    number.textContent = "?";
    document.querySelector('body').style.backgroundColor = "#222";
    displayMessage("Start guessing....");
    document.querySelector('.score').textContent = scoreResutl;
    document.querySelector('.guess').value = "";
})
