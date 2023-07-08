let secretNumber = Math.floor(Math.random()*20)+1;
let userInput;
let score=20;

document.querySelector(".check").addEventListener("click",e =>
{
    userInput = document.querySelector(".guess").value;
    document.querySelector("body").style.backgroundColor="#222";
    document.querySelector(".number").textContent="?"

    
    if(!userInput){
        document.querySelector(".message").textContent="No number entered"
    }
    
   else if(userInput>secretNumber)
   {if(score>0){
    document.querySelector(".message").textContent="Number is too high"
    score--;
    document.querySelector(".score").textContent=score;}
    else{
        document.querySelector(".message").textContent="Game Over"
    }
   }

   else if(userInput<secretNumber)
   {if(score>0){
    document.querySelector(".message").textContent="Number is too low"
    score--;
    document.querySelector(".score").textContent=score;}
    else{
        document.querySelector(".message").textContent="Game Over"
    }
   }

   else{
    document.querySelector(".message").textContent="You won"
    document.querySelector("body").style.backgroundColor="#60b347";
    document.querySelector(".highscore").textContent= secretNumber;
    document.querySelector(".number").textContent=secretNumber;
   }

})

document.querySelector(".again").addEventListener("click", e =>{
    secretNumber = Math.floor(Math.random()*20)+1;
    document.querySelector(".message").textContent="Star Guessing..."
    score=20;
    document.querySelector(".score").textContent=score;
    document.querySelector(".highscore").textContent=0;
    document.querySelector(".number").textContent="?"
    document.querySelector("body").style.backgroundColor="#222"

})


