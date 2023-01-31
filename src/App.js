import React, { useState, useEffect } from "react";
import { DATA } from "./Data";
import Audioplayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./App.css";

function App() {
  const [url, setUrl] = useState(null);
  const changeUrl = (url) => {
    setUrl(url);
  };
  const Year = new Date().getFullYear();

  return (
    <div>
      <div className="header">
        <a className="web-link" href="https://feyzaerat.com">
          FKE
        </a>{" "}
        Radio
      </div>
      <div className="App">
        {DATA.map((item) => {
          return (
            <div className="radio-station card-shadow">
              <div className="logo-back">
                <img src={item.image} />
              </div>
              <a onClick={() => setUrl(item.url)} className="play-icon">
                <i className="icons ion-ios-play"></i>
              </a>
            </div>
          );
        })}
      </div>

      <div>
        <Audioplayer
          onPlay={(e) => console.log("onPlay")}
          showJumpControls={false}
          src={url}
        />
        <div className="footer">
          <a>
            Copyright &copy; {Year}{" "}
            <span>
              <a className="web-target" href="https://feyzaerat.com">
                FKE
              </a>
            </span>
            , All rights reserved
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
