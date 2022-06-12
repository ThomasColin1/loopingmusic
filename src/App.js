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
var started = false;
var clicked = [false,false,false,false,false,false,false,false]
var audios = [a0,a1,a2,a3,a4,a5,a6,a7]
var a = [new Audio(),new Audio(),new Audio(),new Audio(),new Audio(),new Audio(),new Audio(),new Audio()]

function loop(){
  for (let va = 0; va < 8; va ++){
    
    started = true;
    if(clicked[va]){
      a[va].pause();
      a[va]  = new Audio(audios[va]);
      a[va].play()
      document.getElementById(va).style.backgroundColor = "lightgreen";
    }else{
      a[va].pause();
      document.getElementById(va).style.backgroundColor = "white";
    }
  }
  setTimeout(() => {loop();} , 11166);
  
}
function ye(va){
  

  if(!clicked[va]){
    document.getElementById(va).style.backgroundColor = "lightblue";
    clicked[va]=true;
  }else{
    document.getElementById(va).style.backgroundColor = "lightgrey";
    clicked[va]=false;
  }

  if(!started){
    loop()
    
  }
  
}
function App() {

  
  return (
    <div id="App">
      <img src={feuille1} alt="feuille1" id="feuille1"></img>
      <img src={feuille2} alt="feuille2" id="feuille2"></img>

      <a href = "https://www.youtube.com/watch?v=nZORa4h1PQg"><p id="songTitle">mania -- lofi hip-hop <br/>from riddiman</p></a>

      <button id="0" class="c0 l0" onClick= {() => ye(0)}><span>melody</span><p>A</p></button>
      <button id="1" class="c1 l0" onClick= {() => ye(1)}><span>chords</span><p>Z</p></button>
      <button id="2" class="c2 l0" onClick= {() => ye(2)}><span>chopped chords</span><p>E</p></button>
      <button id="3" class="c3 l0" onClick= {() => ye(3)}><span>kick {"\u0026"} snare</span><p>R</p></button>
      <button id="4" class="c0 l1" onClick= {() => ye(4)}><span>808</span><p>Q</p></button>
      <button id="5" class="c1 l1" onClick= {() => ye(5)}><span>ride</span><p>S</p></button>
      <button id="6" class="c2 l1" onClick= {() => ye(6)}><span>violin</span><p>D</p></button>
      <button id="7" class="c3 l1" onClick= {() => ye(7)}><span>clock</span><p>F</p></button>

      
      <p id="credits">Github : @ThomasColin1</p>

    </div>
  );
}





export default App;
