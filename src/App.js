import './App.css';
import Book1 from './Components/Book1/Book1';
import MusicGroup from './Components/MusicGroup/MusicGroup';
import Recipe from './Components/Recipe/Recipe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Learn React
          <br/>
          <Book1/>
          <MusicGroup/>
          <Recipe/>
      </header>
    </div>
  );
}

export default App;
