import logo from './logo.svg'
import './App.css';

import feuille1 from './media/feuille1.png'
import feuille2 from './media/feuille2.png'
import React, { Component }  from 'react';
import a0 from './media/1/Melody.wav';
import a1 from './media/1/chords.wav';
import a2 from './media/1/chopchords.wav';
import a3 from './media/1/kicksnare.wav';
import a4 from './media/1/bass.wav';
import a5 from './media/1/ride.wav';
import a6 from './media/1/violin.wav';
import a7 from './media/1/clock.wav';

import loading from './media/Loading_2.gif';
var started = false;
var clicked = [false,false,false,false,false,false,false,false]
var audios = [a0,a1,a2,a3,a4,a5,a6,a7]
var a = [new Audio(),new Audio(),new Audio(),new Audio(),new Audio(),new Audio(),new Audio(),new Audio()]
var compteur = 0;
var update=100*20/11166;
var compteurRecommence = false;

function loop(){
  compteurRecommence=  true;
  for (let va = 0; va < 8; va ++){
    
    started = true;
    if(clicked[va]){
      a[va].pause();
      a[va]  = new Audio(audios[va]);
      a[va].play()
      document.getElementById(va).style.backgroundColor = "lightgreen";
      document.getElementsByClassName("loading")[va].style.visibility = "hidden";
      
  
    }else{
      a[va].pause();
      document.getElementById(va).style.backgroundColor = "white";
      document.getElementsByClassName("loading")[va].style.visibility = "hidden";
  
    }
  }
  setTimeout(() => {loop();} , 11166);
  
}

function timeBar(){
  //console.log(document.getElementById("progressInt").style.width);
    compteur = compteur+update;
  if(compteurRecommence === true){
    compteurRecommence=false;
    compteur = 0;
  }
  document.getElementById("progressInt").style.width = compteur+"%";
  setTimeout(() => {timeBar();} , 20);
}
function ye(va){
  

  if(!clicked[va]){
    document.getElementById(va).style.backgroundColor = "lightblue";
    document.getElementsByClassName("loading")[va].style.visibility = "visible";
  
    clicked[va]=true;
  }else{
    document.getElementById(va).style.backgroundColor = "lightgrey";
    document.getElementsByClassName("loading")[va].style.visibility = "hidden";
  

    clicked[va]=false;
  }

  if(!started){
    loop()
    timeBar();
  }
  
}
function App() {

  
  return (
    <div id="App">
      <div id="rotateFeuilles">
      <img src={feuille1} alt="feuille1" id="feuille1"></img>
      <img src={feuille2} alt="feuille2" id="feuille2"></img>
      </div>

      <a href = "https://www.youtube.com/watch?v=nZORa4h1PQg"><p id="songTitle">mania -- lofi hip-hop <br/>from riddiman</p></a>

      <button id="0" class="c0 l0" onClick= {() => ye(0)}><span>melody</span><img class="loading" src={loading} alt="loading..."></img><p>A</p></button>
      <button id="1" class="c1 l0" onClick= {() => ye(1)}><span>chords</span><img class="loading" src={loading} alt="loading..."></img><p>Z</p></button>
      <button id="2" class="c2 l0" onClick= {() => ye(2)}><span>chopped chords</span><img class="loading" src={loading} alt="loading..."></img><p>E</p></button>
      <button id="3" class="c3 l0" onClick= {() => ye(3)}><span>kick {"\u0026"} snare</span><img class="loading" src={loading} alt="loading..."></img><p>R</p></button>
      <button id="4" class="c0 l1" onClick= {() => ye(4)}><span>808</span><img class="loading" src={loading} alt="loading..."></img><p>Q</p></button>
      <button id="5" class="c1 l1" onClick= {() => ye(5)}><span>ride</span><img class="loading" src={loading} alt="loading..."></img><p>S</p></button>
      <button id="6" class="c2 l1" onClick= {() => ye(6)}><span>violin</span><img class="loading" src={loading} alt="loading..."></img><p>D</p></button>
      <button id="7" class="c3 l1" onClick= {() => ye(7)}><span>clock</span><img class="loading" src={loading} alt="loading..."></img><p>F</p></button>

      <div id="progressbar">
  <div id="progressInt"></div>
</div>
      
      <p id="credits">Github : @ThomasColin1</p>

    </div>
  );
}

document.addEventListener('keydown', (event) => {
  var name = event.key;
  if(name==="a"){
    document.getElementById("0").click();
  }else if(name==="z"){
    document.getElementById("1").click();
  }else if(name==="e"){
    document.getElementById("2").click();
  }else if(name==="r"){
    document.getElementById("3").click();
  }else if(name==="q"){
    document.getElementById("4").click();
  }else if(name==="s"){
    document.getElementById("5").click();
  }else if(name==="d"){
    document.getElementById("6").click();
  }else if(name==="f"){
    document.getElementById("7").click();
  }
}, false);





export default App;
