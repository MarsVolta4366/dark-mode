// Activity: https://dev.to/joefstack/how-to-do-dark-mode-with-react-hooks-23gi
import './App.css';
import ThemeToggle from './ThemeToggle';

function App() {

  return (
    <div>
      <header className="App-header">
        <h1>Title Goes Here</h1>
        <p>Text goes here</p>
        <ThemeToggle />
      </header>
    </div>
  )
}

export default App
