import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <br />
      <br />
      <Button bg='blue' onClick={() => {
        alert('Yay!')
      }}> Click me! </Button>
      <Button bg='red' onClick={() => {
        alert('no!')
      }}>
        Don't click me!
      </Button>
    </div>
  );
}

export default App;
