import Button from './Components/Button';
import Card from './Components/Card';
import './Styles/index.css';

function App() {
  return (
    <div>
      <Button text='hover on me'/>
      <Card header='hello this is header' text='hello this is text'/>
      <div className='responsive-test'>responsive test</div>
    </div>
  );
}

export default App;
