//Variables
let allPlaces = document.querySelectorAll(".Click");
let resetButton = document.querySelector("#Reset");
let youWon = document.querySelector("#prompt");
let turn = 0;let turns = 0;
const winning = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];
let XArray = [];let OArray = [];
let xwins=0;let owins=0;

//Eveent Listeners
for(let i=0;i<9;i++){
    allPlaces[i].addEventListener("click",() => {
        if(turn==0){
            allPlaces[i].innerHTML="X";
            turn=1;
            XArray.push(i);
        } else{
            allPlaces[i].innerHTML="O";
            turn=0;
            OArray.push(i);
        }
        allPlaces[i].setAttribute("disabled",true);
        turns++;
        if(turns>=5){
            if(checkSubset(XArray)){
                displayingWinner(0);
            }
            else if(checkSubset(OArray)){
                displayingWinner(1);
            }
        }
    })
}
resetButton.addEventListener("click",() => {
    for(let i=0;i<9;i++){
        allPlaces[i].innerHTML="";
        allPlaces[i].removeAttribute("disabled")
    }
    XArray=[];OArray=[];turns=0;turn = 0;
    youWon.style.display='none';
})

//functions
let displayingWinner = (XorO) => {
    if(XorO==0)
        xwins+=1;
    else
        owins+=1;
    youWon.style.display = 'block';
    youWon.innerHTML = `Player ${XorO==0?1:2} Won!<br>X    O<br>${xwins}    ${owins}`
    for(let j=0;j<9;j++) allPlaces[j].setAttribute("disabled",true);
}
let checkSubset = (subsetArray) => {
    for(let i=0;i<8;i++){
        let flag=0;
        for(let j=0;j<3;j++){
            if(!subsetArray.includes(winning[i][j]))flag = 1;
        }
        if(flag==0) return true;
    }
    return false;
}