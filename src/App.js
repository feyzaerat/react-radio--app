import React, {useState, useEffect} from 'react';
import { DATA } from './Data';
import './App.css';



function App() {
  return (
    <div>
     <div className='header'>Radio</div>
     <div className = "App">
      {DATA.map((item) => {return (
        <div className='radio-station card-shadow'>
      <div className='logo-back'>
        <img src={item.image}/>
        </div>
        <a className='play-icon'><i className='icons ion-ios-play'></i></a>
      </div>
      )})}
     </div>
    </div>
  ) 
}

export default App;
