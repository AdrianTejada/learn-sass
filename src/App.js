import Button from './Components/Button';
import Card from './Components/Card';
import './Styles/index.css';

function App() {
  return (
    <div className='container'>
      <Button text='hover on me'/>
      <div className='responsive-test'>responsive test</div>
      <div className='row gap-1 justify-center'>
        <div className='col-12-xs col-5-sm col-3-xl'>
          <Card/>
        </div>
        <div className='col-12-xs col-5-sm col-3-xl'>
          <Card/>
        </div>
        <div className='col-12-xs col-5-sm col-3-xl'>
          <Card/>
        </div>
        <div className='col-12-xs col-5-sm col-3-xl'>
          <Card/>
        </div>
        <div className='col-12-xs col-5-sm col-3-xl'>
          <Card/>
        </div>
      </div>

    </div>
  );
}

export default App;
