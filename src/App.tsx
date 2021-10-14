import { AppBoard } from './components/AppBoard';
import { AppHeader } from './components/AppHeader';
import './style/style.css';

function App() {
  return (
    <div className='app'>
      <AppHeader />
      <AppBoard />
    </div>
  );
}

export default App;
