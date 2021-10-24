const startButton = document.querySelector('.start');
const lasButton = document.querySelector('.games');
const settingButton = document.querySelector('.setting');

const backButton2 = document.querySelector('.lback');
const backButton = document.querySelector('.backName');

const bac = document.querySelector('.set');

//Names Screen comning animation

startButton.addEventListener('click' , () =>{

    const nsc = gsap.timeline({ defaults: { ease: "power1.out" } });

    nsc.to(".form,center", { y: "-5%",transform :"scale(0.7)",x:"-100vw", duration: 0.26});
  nsc.fromTo(".nameSelector", { opacity: 0,transform: "translateX(100vw)"}, { opacity: 1,zIndex:"120",transform:"translateX(0vw)", duration: 0.2},"-=0.05");
 


})  ;


//Names Screen going animation

backButton.addEventListener('click',()=>{
    const nsg = gsap.timeline({ defaults: { ease: "power1.out" } });

    nsg.to(".nameSelector", { y: "-5%",transform :"scale(0.7)",x:"100vw", duration: 0.26});
  nsg.fromTo(".form,center", { opacity: 0,transform: "translateX(-100vw)"}, { opacity: 1,zIndex:"120",transform:"translateX(0vw)", duration: 0.2},"-=0.05");
 


})  ;

//last gams Screen comning animation

lasButton.addEventListener('click' , () =>{

    const gsc = gsap.timeline({ defaults: { ease: "power1.out" } });

    gsc.to(".form,center", { y: "-5%",transform :"scale(0.7)",x:"-100vw", duration: 0.20});
  gsc.fromTo(".lastGamesScreen", { opacity: 0,transform: "translateX(100vw)"}, { opacity: 1,zIndex:"100",transform:"translateX(0vw)", duration: 0.1},"-=0.1");
 


})  ;


//last games Screen going animation

backButton2.addEventListener('click',()=>{
    const gsg = gsap.timeline({ defaults: { ease: "power1.out" } });

    gsg.to(".lastGamesScreen", { y: "-5%",transform :"scale(0.7)",x:"100vw", duration: 0.2});
  gsg.fromTo(".form,center", { opacity: 0,transform: "translateX(-100vw)"}, { opacity: 1,zIndex:"120",transform:"translateX(0vw)", duration: 0.1},"-=0.05");
 


})  ;








bac.addEventListener('click', () =>{
    const ssg = gsap.timeline({ defaults: { ease: "power1.out" } });

    ssg.to(".settingsScreen", { y: "-5%",transform :"scale(0.7)",x:"100vw", duration: 0.2});
  ssg.fromTo(".form,center", { opacity: 0,transform: "translateX(-100vw)"}, { opacity: 1,zIndex:"120",transform:"translateX(0vw)", duration: 0.1},"-=0.05");
 


})  ;

//setting Screen comning animation

settingButton.addEventListener('click' , () =>{

    const ssc = gsap.timeline({ defaults: { ease: "power1.out" } });

    ssc.to(".form,center", { y: "-5%",transform :"scale(0.7)",x:"-100vw", duration: 0.2});
  ssc.fromTo(".settingsScreen", { opacity: 0,transform: "translateX(100vw)"}, { opacity: 1,zIndex:"100",transform:"translateX(0vw)", duration: 0.1});
 


})  ;


//setting Screen going animation






//nsc.to(".intro", { y: "-100%", duration: 1 }, "-=1");
    