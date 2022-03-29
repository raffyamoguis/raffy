
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './component/Navigation'
import './css/myStyle.css'

function App() {
  return (

    <div className='container'>
      <div className='row'>
        <div className='col-md-4'><Navigation /></div>
        <div className='col-md-8'>Content</div>
      </div>
    </div>

  );
}

export default App;
