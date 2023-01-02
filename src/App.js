import React, {useState, useEffect} from 'react';
import { DATA } from './Data';
import  Audioplayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './App.css';



function App() {

const [url, setUrl] = useState(null)
const changeUrl = (url) => {
  setUrl(url);
}

  return (
    <div>
     <div className='header'>Radio</div>
     <div className = "App">
      {DATA.map((item) => {return (
        <div className='radio-station card-shadow'>
      <div className='logo-back'>
        <img src={item.image}/>
        </div>
        <a onClick={() =>setUrl(item.url)} className='play-icon'><i className='icons ion-ios-play'></i></a>
      </div>
      )})}
      
     </div>
     <div>
     <Audioplayer
     showJumpControls={false}
    src={url}
    onPlay={e => console.log("onPlay")}
    // other props here
  />
     </div>
    </div>
  ) 
  
}

export default App;
