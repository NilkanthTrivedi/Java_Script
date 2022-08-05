// 'use strict'

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = "Coreect Number";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener('click', function() {
    const guess= Number(document.querySelector('.guess').value);
    console.log(guess);
// When There Is No Input
    if(!guess){
        document.querySelector('.message').textContent = "😒 No Number";
    }
    // When Player Wins
    else if (guess === secretNumber){
        document.querySelector('.message').textContent = "🎊 Correct Number 🎉";
        document.querySelector('.number').textContent= secretNumber;

        document.querySelector('body').style.backgroundColor= "green";
        document.querySelector('.number').style.width= "250px";
        document.querySelector('.number').style.fontSize= "50px";

        if(score>highscore){
            highscore = score;
            document.querySelector('.highscore').textContent= score;
        }
      

    }
    else if (guess > secretNumber){
        if(score >1){
            document.querySelector('.message').textContent = " 📈 Too High";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = " 💀 Game Over";
            document.querySelector('.score').textContent = 0;
        }
       
    }
    else if (guess < secretNumber){
        if(score >1){
            document.querySelector('.message').textContent = " 📉 Too Low";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = " 💀 Game Over";
            document.querySelector('.score').textContent = 0;
        }
    }

    document.querySelector('.again').addEventListener('click', function () {

        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;

        document.querySelector('.message').textContent = "💭 Start guessing... 🤔";
        document.querySelector('.score').textContent = score;

        document.querySelector('.number').textContent = '?';

        document.querySelector('body').style.backgroundColor= "black";
        document.querySelector('.number').style.width= "150px";
        document.querySelector('.number').style.fontSize= "40px";
        if(score>document.querySelector('.highscore')){
            document.querySelector('.highscore').textContent = score;
           }


    })
     



} );

