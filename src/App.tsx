import { useDispatch } from 'react-redux';
import { HybridComponent } from './components/HybridComponent';
import { NumberComponent } from './components/NumberComponent';
import { StringComponent } from './components/StringComponent';
import { AppAction } from './reducer';
import './style/style.css';

function App() {
  const dispatch = useDispatch();

  const valueValidation = (value: string) => {
    const temp: number = Number(value);

    if (value.match(/[0-9]/) && isNaN(temp)) {
      dispatch(AppAction.setHybrids(value));        
    } else if (typeof temp === 'number' && !value.match(/[A-Za-zА-Яа-я]/)) {
      dispatch(AppAction.setNumbers(temp));
    } else if (isNaN(temp)) {
      dispatch(AppAction.setWords(value));        
    };
  };

  const inputChangeHandler = (event: any) => {
    if (event.key === "Enter")
      valueValidation(event.target.value);
  };

  return (
    <div className='app'>
      <div className='header'>
        <select>
          <option disabled>Sorts</option>
          <option>Sort by time of addition</option>
          <option>Sort alphabetically</option>
        </select>
      </div>
      <div className="appBoard">
        <div className="inputData">
          <input type="text" onKeyDown={(event) => {inputChangeHandler(event)}} />
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
