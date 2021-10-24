val2 = document.querySelector('.range2');


var audioWin = document.createElement('audio');
audioWin.src="./sounds/winSound.wav";

var audioDraw = document.createElement('audio');
audioDraw.src="./sounds/drawSound.wav";

var audioClick = document.createElement('audio');
audioClick.src="./sounds/click2.wav";
function sdn(){audioClick.volume= (val2.value)/100;
  audioWin.volume= (val2.value)/100;
  
  audioDraw.volume= (val2.value)/100;
  }



const submitbtn = document.querySelector('.submit');
let x;
x=0;
const  statu = document.querySelector('.winnerbox');
const check = document.querySelector('.check');
const img = document.querySelector('.sword')
const nextMatch = document.querySelector('.retry');
const blurrr = document.getElementById('blur2')
function yehboy(){
    nextt()
    statuss()
    blurrr.classList.remove('blur3')
}




const winCombos= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
]
submitbtn.addEventListener('click',()=>{
    
const val1 = player1.checkValidity();



const val2 = player2.checkValidity();
    if(val1 && val2 && player1.value!=player2.value){
     
        startGame()
    }if(val1==false || val2==false){
       alert('Both names must contain at least 1 charachter')
        
    }if(player1.value == player2.value){
        alert("Names cant be the same")
        
        
    }
   
    
})








const oneBox = document.querySelectorAll('[data-cell]');

const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'

function handleClick(e) {
  audioClick.play()

 
  
    const cell = e.target
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
    placeMark(cell, currentClass)
    
   
    if (checkWin(currentClass)) {
        endGame(false)

      } else if (isDraw()) {
        endGame(true)
      } else {
        swapTurns()
    
      }
     

}
function isDraw() {
    return [...oneBox].every(cell => {
      return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    })
  }

  window.score1Box = document.querySelector('.player1Score');
  window.score2Box = document.querySelector('.player2Score');
  window.score1 = 0;
  window.score2 = 0;
  score1Box.innerHTML=score1
  score2Box.innerHTML=score2


  function nextt(){
   
    window.turn = document.querySelector('.turnSection');
    window.name1 = player1.value;
    window.name2 = player2.value;
    document.getElementById('xName').innerHTML=name1;
    document.getElementById('circleName').innerHTML=name2
    score1Box.innerHTML=score1
    score2Box.innerHTML=score2
  
currentPlayer = name1;

turn.innerHTML=currentPlayer+"'s turn";
   
   
    circleTurn = false
    oneBox.forEach(cell => {
      cell.classList.remove(X_CLASS)
      cell.classList.remove(CIRCLE_CLASS)
      cell.removeEventListener('click', handleClick)
      cell.addEventListener('click', handleClick, { once: true })
    
    })
  
  }
  
function startGame() {
    
    window.turn = document.querySelector('.turnSection');
    window.name1 = player1.value;
    window.name2 = player2.value;
    document.getElementById('xName').innerHTML=name1;
    document.getElementById('circleName').innerHTML=name2
  
currentPlayer = name1;

turn.innerHTML=currentPlayer+"'s turn";
   
    document.querySelector('.gameScreen').classList.toggle('yess')
    circleTurn = false
    oneBox.forEach(cell => {
      cell.classList.remove(X_CLASS)
      cell.classList.remove(CIRCLE_CLASS)
      cell.removeEventListener('click', handleClick)
      cell.addEventListener('click', handleClick, { once: true })
    })
   
  }


  function placeMark(cell, currentClass) {
      
    cell.classList.add(currentClass)
  }





  function swapTurns() {
    circleTurn = !circleTurn
    if(circleTurn){
       
        currentPlayer = name2;

    }else{
        currentPlayer = name1;
    }
    turn.innerHTML=currentPlayer+"'s turn";
  }
  function checkWin(currentClass) {
    return winCombos.some(combination => {
      return combination.every(index => {
        return oneBox[index].classList.contains(currentClass)
      })
    })
  }
 
  function statuss(){
    statu.classList.toggle('statu2');
 
 
 }
 var whole = []
        

  function endGame(draw) {
    
    if (draw) {
     audioDraw.play()
     check.textContent="DRAW"
     ico.style.display="none"
     ico2.style.display="block"
     
     img.appendChild(ico2)

     var localObject = {
       nameFirst:name1,
       nameSecond:name2,
       winStyle:"draw"
     }

     whole.push(localObject)
    

    } else {
    if(circleTurn){
        check.textContent=player2.value+' '+' WINS'
        score2++
        var localObject = {
          nameFirst:name1,
          nameSecond:name2,
          winStyle:"player2"
        }
        whole.push(localObject)
       
    }else{
      check.textContent=player1.value+' '+' WINS'
      score1++
      var localObject = {
        nameFirst:name1,
        nameSecond:name2,
        winStyle:"player1"
      }
      whole.push(localObject)
     
        
    }
    audioWin.play()

   
    ico2.style.display="none"
    ico.style.display="block"
     img.appendChild(ico)


   
    
    }  
    localStorage.setItem('oneMatch',JSON.stringify(whole))
    console.log(JSON.parse(localStorage.oneMatch))
    blurrr.classList.add('blur3')
    statuss()
  }

  const ico2 = document.createElement('IMG');
     ico2.src="./images/sword.png";
     const ico =  document.createElement('IMG');
     ico.src="./images/crown.svg";
     ico2.style.width="100%"
     ico.style.width="100%"

function imgSelecor(currentImage){
    

}
var allList = document.querySelector('.list');
function callStorage(){

if(localStorage.length==0){
  document.querySelector('.lolas').innerHTML="There is not recent Games";
}else{
  var showenStorage = JSON.parse(localStorage.oneMatch)
  
  for (let i = 0; i < showenStorage.length; i++) {
    var matchBox  = document.createElement('DIV');
    matchBox.className="oneMatch";
    
    var playerBox = document.createElement('div');
    playerBox.className="onePlayer";
   
    var playerBox2 = document.createElement('div');
    playerBox2.className="onePlayer";
    
    
    var firstName = document.createElement('div');
    firstName.className="namee";
    firstName.innerHTML=showenStorage[i].nameFirst;
    
    
    
    
    var SecondName = document.createElement('div');
    SecondName.className="namee";
    var vsBox = document.createElement('div');
    vsBox.className="vss";
    var vs = document.createElement('p');
    vs.innerHTML="VS"
    vs.className="vs"


    var winicon = document.createElement('p');
    winicon.className="win";
    winicon.innerHTML="WINNER";
    var drawIcon = document.createElement('div');
    drawIcon.className="dr";
    drawIcon.innerHTML="DRAW"
    
    SecondName.innerHTML=showenStorage[i].nameSecond;
allList.appendChild(matchBox);
matchBox.appendChild(playerBox);
matchBox.appendChild(vsBox)
matchBox.appendChild(playerBox2);
vsBox.appendChild(vs)
if(showenStorage[i].winStyle=="player1"){
  playerBox.appendChild(winicon);
}if(showenStorage[i].winStyle=='player2'){
  playerBox2.appendChild(winicon);
}if(showenStorage[i].winStyle=='draw'){
  vsBox.appendChild(drawIcon)
}
playerBox.appendChild(firstName);
playerBox2.appendChild(SecondName)


    
  }
}

}
