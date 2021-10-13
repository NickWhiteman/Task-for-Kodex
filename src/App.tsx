import { useState } from 'react';
import { HybridComponent } from './components/HybridComponent';
import { NumberComponent } from './components/NumberComponent';
import { StringComponent } from './components/StringComponent';
import './style/style.css';

function App() {
  const stringArray: string[] = [];
  const numberArray: number[] = [];
  const hybridArray: string[] = [];
  const [words, setWord] = useState(stringArray);
  const [numbers, setNumbers] = useState(numberArray);
  const [hybrid, setHybrid] = useState(hybridArray);

  const inputChangeHandler = (event: any) => {
    const value = event.target.value
    const temp: number = Number(value);
    if (event.key === "Enter") {
      if (value.match(/[0-9]/) && isNaN(temp)) {
        hybridArray.push(value);
        setHybrid(hybridArray);
        console.log(hybridArray);
        
      } else if (typeof temp === 'number' && !value.match(/[A-Za-zА-Яа-я]/)) {
        numberArray.push(temp);
        setNumbers(numberArray)
        console.log(numberArray);

      } else if (isNaN(temp)) {
        stringArray.push(value);
        setWord(stringArray);
        console.log(stringArray);
        
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
          <StringComponent stringData={ words } />
        </div>
        <div className="numberData">
          <NumberComponent numberData={ numbers } />
        </div>
        <div className="hybridData">
          <HybridComponent hybridData={ hybrid }/>
        </div>
      </div>
    </div>
  );
}

export default App;
