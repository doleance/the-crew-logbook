import './App.scss';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import Playfield from './components/playfield/Playfield';

function App() {
  return (
    <div className="page-container">
      <Header />
      <div className="main-container">
        <Playfield />
        <Navigation />
      </div>
    </div>
  );
}

export default App;
