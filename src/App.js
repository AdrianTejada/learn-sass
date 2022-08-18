import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import './Styles/HoverButton.css';

function App() {
  return (
    <div>
      <NavBar/>
      <button className='hello'>hello</button>
      <button className='hover-button'>hover on me</button>
    </div>
  );
}

export default App;
