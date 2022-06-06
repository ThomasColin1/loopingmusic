import logo from './logo.svg';
import './App.css';
import feuille1 from './media/feuille1.png'
import feuille2 from './media/feuille2.png'

function App() {
  return (
    <div id="App">
      <img src={feuille1} alt="feuille1" id="feuille1"></img>
      <img src={feuille2} alt="feuille2" id="feuille2"></img>

      <button class="c0 l0"><p>A</p></button>
      <button class="c1 l0"><p>Z</p></button>
      <button class="c2 l0"><p>E</p></button>
      <button class="c3 l0"><p>R</p></button>
      <button class="c0 l1"><p>Q</p></button>
      <button class="c1 l1"><p>S</p></button>
      <button class="c2 l1"><p>D</p></button>
      <button class="c3 l1"><p>F</p></button>

      
      <p id="credits">Github : @ThomasColin1</p>

    </div>
  );
}

export default App;
