'use strict';
console.log("hello");

let secretNumber=Math.trunc(Math.random()*20)+1;
console.log(secretNumber);
let score=20;
let highScore=0;

document.querySelector(".check").addEventListener('click',function(){
    const guess=+document.querySelector('.guess').value;
    console.log( guess, typeof guess);
    if(!guess){
        document.querySelector('.message').textContent='⛔ No Number !';
    } else if (guess === secretNumber){
        document.querySelector('.message').textContent='🔥 Correct !';
        document.querySelector('.number').textContent=secretNumber;
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
        if(score>highScore){
            highScore=score;
            document.querySelector('.highscore').textContent=highScore;
        }
    } else if(guess > secretNumber) {
        if(score>0){
        document.querySelector('.message').textContent='📈 To high !';
        score--;
        document.querySelector('.score').textContent=score
    } else {
        document.querySelector('.message').textContent='⛔ You lost the game! ⛔';
    }
    } else if (guess < secretNumber) {
        if(score>0){
            document.querySelector('.message').textContent='📉 To Low !';
            score--;
            document.querySelector('.score').textContent=score
        } else {
            document.querySelector('.message').textContent='⛔ You lost the game! ⛔';
        }
    }
})

document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('body').style.backgroundColor='black';
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.number').textContent='?';
    score=20;
    document.querySelector('.score').textContent=score;
    secretNumber=Math.trunc(Math.random()*20)+1;
    console.log(secretNumber);
    document.querySelector('.guess').value='';
})