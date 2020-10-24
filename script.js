let secretNumber=Math.floor(Math.random()*20)+1;
let highscore=0;
let score=20;


document.querySelector(".check").addEventListener("click", function(){
    const guess=Number(document.querySelector(".guess").value);
    console.log(guess , typeof(guess));

    if(guess==0){
        document.querySelector(".message").textContent="😣 No number";
    }else if(guess == secretNumber){
        document.querySelector(".message").textContent="Correct Number";
        document.querySelector("h1").textContent="YOU WON";
        document.querySelector("body").style.backgroundColor="green";
        document.querySelector(".number").textContent=secretNumber;

        if(score>highscore){
            highscore=score;
            document.querySelector(".highscore").textContent=highscore;
        }
    }else if(score>0){
        
            document.querySelector(".message").textContent= guess > secretNumber ? "Too High" : "Too Low";
            score--;
        
        }else if(score==0){
        document.querySelector(".message").textContent="You lost the game";
    }
    

    document.querySelector(".score").textContent=score;
})

document.querySelector(".again").addEventListener("click" , function(){
    score=20;
    document.querySelector(".score").textContent=score;
    secretNumber=Math.floor(Math.random()*20)+1;
    document.querySelector(".message").textContent="Start guessing";
    document.querySelector(".number").textContent="?";
    document.querySelector(".guess").value="";
    document.querySelector("body").style.backgroundColor="black";

})