import { useState } from 'react';
import { HybridComponent } from './components/HybridComponent';
import { NumberComponent } from './components/NumberComponent';
import { StringComponent } from './components/StringComponent';
import './style/style.css';

function App() {
  const [words, setWords] = useState([]);
  const [numbers, setNumbers] = useState([]);
  const [hybrid, setHybrid] = useState([]);

  const inputChangeHandler = (event: any) => {
    if (event.key === "Enter") {
      if (event.target.value === /[0-9]/) {
        console.log('number', event.target.value);
      } else if (event.target.value === /[0-9A-Za-z]/) {
        console.log('hybrid', event.target.value)
      } else {
        console.log('string', event.target.value);
      };
    };
  };

  return (
    <div className='app'>
      <div className='header'></div>
      <div className="appBoard">
        <div className="inputData">
          <input type="text" onKeyPress={(event) => {inputChangeHandler(event)}} />
        </div>
        <div className="stringData">
          <StringComponent />
        </div>
        <div className="numberData">
          <NumberComponent />
        </div>
        <div className="hybridData">
          <HybridComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
