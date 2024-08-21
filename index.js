const cell1=document.getElementById("cell1");
const cell2=document.getElementById("cell2");
const cell3=document.getElementById("cell3");
const cell4=document.getElementById("cell4");
const cell5=document.getElementById("cell5");
const cell6=document.getElementById("cell6");
const cell7=document.getElementById("cell7");
const cell8=document.getElementById("cell8");
const cell9=document.getElementById("cell9");
const reset=document.getElementById("reset");
const start=document.getElementById("start");
const allcell=document.getElementsByClassName("cell");
const h4=document.getElementById("he4");

let turn=true; // true for X and false for O//
let gameover=false;
let start1=false;
let reset1=true;

reset.onclick=function()
{
    for (let i = 0; i < allcell.length; i++) {
        allcell[i].textContent = ""; 
        allcell[i].classList.remove('occupied', 'x', 'o');
        gameover=false;
    }
    turn=true;
    h4.textContent="";
    reset1=true;
   
}
start.onclick=function()
{
    if (reset1==false)
    {
        window.alert("Reset the board to start!");
        return;
    }
    h4.textContent="Player 1 turn!";
    start1=true;
    
}
function handleclick(cell)
{
    if (start1==false)
    {
        window.alert("You need to click the start button to start!");
        return;
    }
    if (gameover==true || cell.textContent !== "")
    {
        return;
    }
    
    if (cell.textContent==="")
        {
            if (turn)
            {
                cell.classList.add('x');
                cell.textContent="X";
                cell.classList.add('occupied');
                h4.textContent="Player 2 turn!";
                turn=!turn;
                reset1=false;
            }
            else
            {
                cell.classList.add('o');
                cell.textContent="O";
                h4.textContent="Player 1 turn!";
                cell.classList.add('occupied');
                turn=!turn;
                reset1=false;
            } 
            
        }
        winner();
        let allFilled = Array.from(allcell).every(cell => cell.textContent !== "");
if (allFilled && !gameover) {
    h4.textContent = "It's a draw!";
}
    
}
function winner() {
    // Check for Player 1 ("X")
    if (cell1.textContent === "X" && cell2.textContent === "X" && cell3.textContent === "X") {
        gameover = true;
        h4.textContent = "Player 1 won!";
    } 
    else if (cell1.textContent === "X" && cell4.textContent === "X" && cell7.textContent === "X") { //
        gameover = true;
        h4.textContent = "Player 1 won!";
    } 
    else if (cell2.textContent === "X" && cell5.textContent === "X" && cell8.textContent === "X") { //
        gameover = true;
        h4.textContent = "Player 1 won!";
    }

    else if (cell3.textContent === "X" && cell6.textContent === "X" && cell9.textContent === "X") {
        gameover = true;
        h4.textContent = "Player 1 won!";
    } 
    else if (cell7.textContent === "X" && cell8.textContent === "X" && cell9.textContent === "X") {
        gameover = true;
        h4.textContent = "Player 1 won!";
    } 
    else if (cell1.textContent === "X" && cell5.textContent === "X" && cell9.textContent === "X") {
        gameover = true;
        h4.textContent = "Player 1 won!";
    }
    else if (cell4.textContent === "X" && cell5.textContent === "X" && cell6.textContent === "X") {
        gameover = true;
        h4.textContent = "Player 1 won!";
    }
    else if (cell3.textContent === "X" && cell5.textContent === "X" && cell7.textContent === "X") {
        gameover = true;
        h4.textContent = "Player 1 won!";
    }

 
    else if (cell1.textContent === "O" && cell2.textContent === "O" && cell3.textContent === "O") {
        gameover = true;
        h4.textContent = "Player 2 won!";
    } 
    else if (cell1.textContent === "O" && cell4.textContent === "O" && cell7.textContent === "O") {
        gameover = true;
        h4.textContent = "Player 2 won!";
    } 
    else if (cell3.textContent === "O" && cell6.textContent === "O" && cell9.textContent === "O") {
        gameover = true;
        h4.textContent = "Player 2 won!";
    } 
    else if (cell7.textContent === "O" && cell8.textContent === "O" && cell9.textContent === "O") {
        gameover = true;
        h4.textContent = "Player 2 won!";
    } 
    else if (cell1.textContent === "O" && cell5.textContent === "O" && cell9.textContent === "O") {
        gameover = true;
        h4.textContent = "Player 2 won!";
    }
    else if (cell3.textContent === "O" && cell5.textContent === "O" && cell7.textContent === "O") {
        gameover = true;
        h4.textContent = "Player 2 won!";
    }
    else if (cell1.textContent === "O" && cell4.textContent === "O" && cell7.textContent === "O") { //
        gameover = true;
        h4.textContent = "Player 1 won!";
    } 
    else if (cell2.textContent === "O" && cell5.textContent === "O" && cell8.textContent === "O") { //
        gameover = true;
        h4.textContent = "Player 1 won!";
    }
    else if (cell4.textContent === "O" && cell5.textContent === "O" && cell6.textContent === "O") {
        gameover = true;
        h4.textContent = "Player 1 won!";
    }
}




cell1.onclick= ()=> handleclick(cell1)
cell2.onclick= ()=> handleclick(cell2)
cell3.onclick= ()=> handleclick(cell3)
cell4.onclick= ()=> handleclick(cell4)
cell5.onclick= ()=> handleclick(cell5)
cell6.onclick= ()=> handleclick(cell6)
cell7.onclick= ()=> handleclick(cell7)
cell8.onclick= ()=> handleclick(cell8)
cell9.onclick= ()=> handleclick(cell9)



