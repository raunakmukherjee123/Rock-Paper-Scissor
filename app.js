let userScore=0;
let machineScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.getElementById("msg");
const userScorePara=document.getElementById("user-score");
const machineScorePara=document.getElementById("machine-score");

const generateMachineChoice=()=>{
  const options=["rock","paper","scissor"];
const randomId=Math.floor(Math.random()*3);
return options[randomId];
}


const drawGame=()=>{
  msg.innerText="Match is draw"
   msg.classList.remove("win","lose");
}

const showWinner=(userWin)=>{
  if(userWin===true)
  {
    msg.innerText="You win !!"
    msg.classList.add("win");
    userScore++;
    userScorePara.innerText=userScore;
  }
  else
  {
     msg.innerText="You lose"
     msg.classList.add("lose")
     machineScore++;
     machineScorePara.innerText=machineScore;
  }
}


const playGame=(userChoice)=>{
const machineChoice=generateMachineChoice();

if(userChoice===machineChoice)
{
   drawGame();
}
else
{
  let userWin=true;
  if(userChoice==="rock")
  {
    userWin=machineChoice==="paper"?false:true;
  }
  else if(userChoice==="paper")
  {
    userWin=machineChoice==="scissor"?false:true;
  }
  else
  {
    userWin=machineChoice==="rock"?false:true;
  }

  showWinner(userWin);
}
}

choices.forEach((choice)=>{
  choice.addEventListener("click",(e)=>{
    const userChoice=choice.getAttribute("id");
    playGame(userChoice);
  })
})