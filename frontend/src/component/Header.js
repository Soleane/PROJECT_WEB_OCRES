import React from 'react';

export default function Header(){
  return(
      <header className="Header">
          <div className = "containerHeader">  
                    <img src="./assets/Wifi.png" alt="logo wifi" width="30" height="30"></img>
                    <div className = "space"></div>
                    <img src="./assets/Battery.png" alt= "logo battery" width="30" height="30"></img>
        </div>
      </header>
    );
}