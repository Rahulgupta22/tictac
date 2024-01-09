let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turno= true;

const winPatterns= [
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [3,4,5],
        [6,7,8]
];

const resetGame = () =>{
    turno = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
 box.addEventListener("click",()=>{
  // console.log("box was clicked");
  box.innerText = "Abcd";
  if(turno==true){ // player0
    box.innerText ="0";
    turno=false;
  }
  else{  // playerX
    box.innerText ="X";
    turno=true;
  }
  box.disabled = true;
  
  checkWinner();
 });
});

const enableBoxes = () =>{
     for(let box of boxes){
        box.disabled = true;
        box.innerText="";
     }
}

const disableBoxes = () =>{
  for(let box of boxes){
     box.disabled = true;
  }
}


const showWinner = (winner) =>{
  msg.innerText = `Congratulations,Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
}

const checkWinner = () =>{
    for(let pattern of winPatterns)
    {
        let pos1Val= boxes[pattern[0]].innerText;
        let pos2Val= boxes[pattern[1]].innerText;
        let pos3Val= boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val !="" && pos3Val !=""){
            if(pos1Val === pos2Val && pos2Val ===pos3Val){
                // console.log("winner")
                showWinner(pos1Val);
            }
        }

    }
};

newGamebtn.addEventListener("click",resetGame)
resetbtn.addEventListener("click",resetGame)

