import { useState } from 'react';
import './App.css';
import BaristaForm from './components/BaristaForm';
import coffee from './assets/coffee.png';


function App() {

  return (
    <div className='title-container'>
      <div className='title'>
        <img src={coffee} alt='coffee' className='image'/>
        <h1>On My Grind</h1>
      </div>
      <p> So you think you can barista? Let's put that to the test...</p>
      <BaristaForm/>
    
    </div>
  )
}

export default App
