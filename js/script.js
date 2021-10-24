
//default elements
const currentTheme = document.querySelector('.currentTheme');
const redBtn = document.querySelector('.redTheme');
const greenBtn = document.querySelector('.greenTheme');
const flatBtn = document.querySelector('.flatBlueTheme');
const nBtn = document.querySelector('.normalTheme');
const blur = document.querySelector('.blur');

//Theme changing functionallity
currentTheme.addEventListener('click' , ()=>{
    document.querySelector('.otherThemes').classList.toggle('theme')
})


//normal theme
nBtn.addEventListener('click', () =>{
    document.querySelector('.otherThemes').classList.toggle('theme')

    document.querySelectorAll('button').forEach(el => {
        el.style.backgroundColor="#fa255e"
        el.style.color="white"
    });
    document.querySelectorAll('.turnSection').forEach(el => {
        el.style.backgroundColor="#fa255e"
        el.style.color="white"
    });
    document.querySelectorAll('.statusBar').forEach(el => {
        el.style.backgroundColor="#fa255e"
        el.style.color="white"
    });
    document.querySelector('body').style.backgroundImage="none";
    document.querySelector('body').style.backgroundColor="#000";

 

    document.querySelector('.gameScreen').style.backgroundImage="none";
    document.querySelector('.gameScreen').style.backgroundColor="#000";

    document.querySelectorAll('h1').forEach(el => {
        el.style.color="white"
    });
    document.querySelectorAll('.settingsScreen').forEach(el => {
        el.style.backgroundColor="#161616"
    });
    document.querySelectorAll('.nameSelector').forEach(el => {
        el.style.backgroundColor="#161616"
    });
    document.querySelectorAll('select').forEach(el => {
        el.style.backgroundColor="#121212"
    });
    document.querySelectorAll('.lastGamesScreen').forEach(el => {
        el.style.backgroundColor="#161616"
    });
    document.querySelectorAll('.currentTheme').forEach(el => {
        el.style.backgroundColor="#000"
    });
    document.querySelectorAll('.name').forEach(el => {
        el.style.backgroundColor="#222222"
    });
})


// orange green theme
redBtn.addEventListener('click', () =>{
    document.querySelector('.otherThemes').classList.toggle('theme')

    document.querySelectorAll('button').forEach(el => {
        el.style.backgroundColor="#1db955"
        el.style.color="#FFF"
    });
    document.querySelectorAll('body').forEach(el => {
        el.style.backgroundImage="linear-gradient(45deg,sandybrown,lightcoral)"
        el.style.color="#FFF"
    });
    document.querySelectorAll('.gameScreen').forEach(el => {
        el.style.backgroundImage="linear-gradient(45deg,sandybrown,lightcoral)"
        el.style.color="#FFF"
    });
    document.querySelectorAll('h1').forEach(el => {
        el.style.color="#fff"
    });
    document.querySelectorAll('p').forEach(el => {
        el.style.color="#fff"
    });
    document.querySelectorAll('.settingsScreen').forEach(el => {
        el.style.backgroundColor="#66DE93"
    });
    document.querySelectorAll('.statusBar').forEach(el => {
        el.style.backgroundColor="#66DE93"
    });
    document.querySelectorAll('.winnerbox').forEach(el => {
        el.style.backgroundColor="#66DE93"
    });
    document.querySelectorAll('.turnSection').forEach(el => {
        el.style.backgroundColor="#66DE93"
    });
    document.querySelectorAll('.nameSelector').forEach(el => {
        el.style.backgroundColor="#66DE93"
    });
    document.querySelectorAll('select').forEach(el => {
        el.style.backgroundColor="#30de60"
    });
    document.querySelectorAll('.lastGamesScreen').forEach(el => {
        el.style.backgroundColor="#66DE93"
    });
    document.querySelectorAll('.currentTheme').forEach(el => {
        el.style.backgroundColor="sandybrown"
    });
    
})

// blue white theme
greenBtn.addEventListener('click', () =>{
    document.querySelector('.otherThemes').classList.toggle('theme')

    document.querySelectorAll('button').forEach(el => {
        el.style.backgroundColor="#fff"
        el.style.color="dodgerblue"
    });
    document.querySelectorAll('start').forEach(el => {
        el.style.backgroundColor="mediumseagreen"
        el.style.color="#fff"
    });
    document.querySelectorAll('body').forEach(el => {
        el.style.backgroundImage="linear-gradient(45deg,dodgerblue,turquoise)"
        el.style.color="#29BB89"
    });
    document.querySelectorAll('.gameScreen').forEach(el => {
        el.style.backgroundImage="linear-gradient(45deg,dodgerblue,turquoise)"
        el.style.color="#29BB89"
    });
    document.querySelectorAll('h1').forEach(el => {
        el.style.color="#fff"
    });
    document.querySelectorAll('.settingsScreen').forEach(el => {
        el.style.backgroundColor="mediumseagreen"
    });
    document.querySelectorAll('.turnSection').forEach(el => {
        el.style.backgroundColor="mediumseagreen"
    });

    document.querySelectorAll('.statusBar').forEach(el => {
        el.style.backgroundColor="mediumseagreen"
    });
    document.querySelectorAll('.nameSelector').forEach(el => {
        el.style.backgroundColor="mediumseagreen"
    });
    document.querySelectorAll('select').forEach(el => {
        el.style.backgroundColor="#8ee0b3"
    });
    document.querySelectorAll('.settingP').forEach(el => {
        el.style.color="white"
    });
    document.querySelectorAll('.lastGamesScreen').forEach(el => {
        el.style.backgroundColor="mediumseagreen"
    });
    document.querySelectorAll('.currentTheme').forEach(el => {
        el.style.backgroundColor="dodgerblue"
    });
    document.querySelectorAll('.name').forEach(el => {
        el.style.backgroundColor="#8ee0b3"
    });
    
})


// white theme
flatBtn.addEventListener('click', () =>{
    document.querySelector('.otherThemes').classList.toggle('theme')

    document.querySelectorAll('button').forEach(el => {
        el.style.backgroundColor="#667270"
        el.style.color="#fff"
    });
    document.querySelectorAll('body').forEach(el => {
        el.style.backgroundImage="none"
        el.style.backgroundColor="#e3e0cf"
        el.style.color="#9fa8a3"
    });
    document.querySelectorAll('.gameScreen').forEach(el => {
        el.style.backgroundImage="none"
        el.style.backgroundColor="#e3e0cf"
        el.style.color="#9fa8a3"
    });
    document.querySelectorAll('h1').forEach(el => {
        el.style.color="#000"
    });
    document.querySelectorAll('p').forEach(el => {
        el.style.color="#000"
    });
    document.querySelectorAll('.settingsScreen').forEach(el => {
        el.style.backgroundColor="#c5d5cb"
    });
    document.querySelectorAll('.turnSection').forEach(el => {
        el.style.backgroundColor="#c5d5cb"
    });
    document.querySelectorAll('.statusBar').forEach(el => {
        el.style.backgroundColor="#c5d5cb"
    });
    document.querySelectorAll('.nameSelector').forEach(el => {
        el.style.backgroundColor="#c5d5cb"
    });
    document.querySelectorAll('select').forEach(el => {
        el.style.backgroundColor="#b9b9b9"
    });
    document.querySelectorAll('.lastGamesScreen').forEach(el => {
        el.style.backgroundColor="#c5d5cb"
    });
    document.querySelectorAll('.currentTheme').forEach(el => {
        el.style.backgroundColor="#9fa8a3"
    });
    document.querySelectorAll('.name').forEach(el => {
        el.style.backgroundColor="#b9b9b9"
    });
})


//RANDOM MUSIC SELECT AND VOLUME SETTINGS

// *** 



//INPUT FOCUSON ANIMATION

const player1 = document.getElementById('playerFirst');
player1.addEventListener('focusin',() =>{
   
        document.getElementById("label1").classList.add('vis')
      
})
player1.addEventListener('focusout',()=>{
    if(!player1.checkValidity()){
        document.getElementById("label1").classList.remove('vis')
    }else{
        document.getElementById("label1").classList.add('vis')
    }
})

const player2 = document.getElementById('playerSecond');
const lol2 = document.getElementById('playerSecond').innerHTML;
player2.addEventListener('focusin',() =>{
   
        document.getElementById("label2").classList.add('vis')
      
})
player2.addEventListener('focusout',()=>{
    
    
    if(!player1.checkValidity()){
        document.getElementById("label2").classList.remove('vis')

   
    }else{
        document.getElementById("label2").classList.add('vis')
        
    }
})
// ******






 