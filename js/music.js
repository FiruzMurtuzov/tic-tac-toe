const val = document.querySelector('.range');
var audio1 = document.createElement('audio');

audio1.loop=true;
function lol(){
audio1.volume= (val.value)/100;
}

var mann = "./sounds/music1.mp3";
var upp = "./sounds/music2.mp3";
var mcc= "./sounds/mc.mp3";



var select = document.querySelector('select')
select.addEventListener('focusout',()=>{
    if(select.value==1){
     audio1.src='';
     audio1.pause()
    }
    if(select.value==2){
        audio1.src=mann;
        audio1.play()
        
       }  if(select.value==3){
        audio1.src=mcc;
        audio1.play()
       }  if(select.value==4){
        audio1.src=upp;
        audio1.play()
       }
})