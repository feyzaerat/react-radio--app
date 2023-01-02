import React, {useState, useEffect} from 'react';
import { DATA } from './Data';
import './App.css';



function App() {
  return (
    <div>
    <div className='header'>Radio</div>
        <div className = "App">
      <div className='radio-station card-shadow'>
      <div className='logo-back'>
        <img src="https://www.radyo45lik.com/images/radyo-45lik-logo1aa-768x4881-1-600x600.png"/>
        </div>
        <a className='play-icon'><i className='icons ion-ios-play'></i></a>
      </div>
      <div className='radio-station card-shadow'>
        <div className='logo-back'>
        <img src="https://www.slowturk.com.tr/assets/img/logo-slowturk.png"/>
        </div>
        <a className='play-icon'><i className='icons ion-ios-play'></i></a>
      </div>
      <div className='radio-station card-shadow'>
        <div className='logo-back'>
        <img src="https://static.wikia.nocookie.net/logopedia/images/3/36/Alem_fm_logo_2.png"/>
         </div>
         <a className='play-icon'><i className='icons ion-ios-play'></i></a>
      </div>
      <div className='radio-station card-shadow'>
      <div className='logo-back'>
        <img src="https://upload.wikimedia.org/wikipedia/tr/6/61/JoyTurk_logosu.png"/>
        </div>
        <a className='play-icon'><i className='icons ion-ios-play'></i></a>
      </div>
      <div className='radio-station card-shadow'>
       <div className='logo-back'>
        <img src="https://www.numberone.com.tr/wp-content/uploads/2015/12/N1_FM-1.png"/>
      </div>
        <a className='play-icon'><i className='icons ion-ios-play'></i></a>
      </div>
      <div className='radio-station card-shadow'>
       <div className='logo-back'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/TRT_FM_logo.svg/1200px-TRT_FM_logo.svg.png"/>
      </div>
        <a className='play-icon'><i className='icons ion-ios-play'></i></a>
      </div>
      <div className='radio-station card-shadow'>
       <div className='logo-back'>
        <img src="https://www.onlineradyodinle.com.tr/kanal/super-fm.png"/>
      </div>
        <a className='play-icon'><i className='icons ion-ios-play'></i></a>
      </div>
      <div className='radio-station card-shadow'>
       <div className='logo-back'>
        <img src="https://www.canliradyodinle.fm/wp-content/uploads/pal-nostalji-dinle.png"/>
      </div>
        <a className='play-icon'><i className='icons ion-ios-play'></i></a>
      </div>
      <div className='radio-station card-shadow'>
       <div className='logo-back'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Best_FM.png/230px-Best_FM.png"/>
      </div>
        <a className='play-icon'><i className='icons ion-ios-play'></i></a>
      </div>
      <div className='radio-station card-shadow'>
       <div className='logo-back'>
        <img src="https://upload.wikimedia.org/wikipedia/en/d/d2/Metro_FM_%282013_Logo%29.gif"/>
      </div>
        <a className='play-icon'><i className='icons ion-ios-play'></i></a>
      </div>
      
    </div>
    </div>
    
    
  ) 
}

export default App;
