let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");



const gencompchoice = () => {
    const option=["rock","paper","scissors"]
const randomIdx =  Math.floor(Math.random()*3);
return option[randomIdx];
//rock,paper,scissors
};

const drawgame = () => {
     msg.innerText = "game was draw.play again.";
     msg.style.backgroundColor = "#081b31";
};




    const showwinner = (userwin, userChoice, compchoice)  => {
    if (userwin) { 
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `you win!  your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else {
         compscore++ ;
        compScorePara.innerText = compscore;
        msg .innerText = `you lost.  ${compchoice} beats your ${userChoice}`;
        msg .style.backgroundColor = "red";
    }
    };


const playgame=(userChoice) => {
 console.log("userChoice=",userChoice);
  //Generate computer choice
  const compchoice=gencompchoice();
   console.log("compchoice=",compchoice);
   if(userChoice === compchoice){
    //draw game
    drawgame();
   }else{
    let userwin=true;
    if(userChoice==="rock"){
        //scissors,paper
       userwin= compchoice==="paper" ? false : true;
    }else if(userChoice==="paper"){
        //rock,scissors
        userwin=compchoice==="scissors" ? false : true;
    }else {
        //rock,paper
        userwin=compchoice==="rock" ? false : true;
    }
    showwinner(userwin, userChoice, compchoice);
   }
};




choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
    
});
