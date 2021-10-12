import { HybridComponent } from './components/HybridComponent';
import { NumberComponent } from './components/NumberComponent';
import { StringComponent } from './components/StringComponent';
import './style/style.css';

function App() {
  return (
    <div className='app'>
      <div className='header'></div>
      <div className="appBoard">
        <div className="inputData">
          <input type="text" />
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
