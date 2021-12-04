import React from 'react';

export default function Aside(){
    return(
    <div>
      <aside className="App-aside">
        <img src="./assets/P.png" alt="logo p" className = "App-image2"></img>
        <h2> Alexis </h2>

        <div className="r1"> 
          <img src="./assets/Recherche.png" alt="logo recherche" className = "App-image"></img>
          <div className = "space"></div>
          <p>Dashboard</p>
        </div>

        <div className="r2"> 
          <img src="./assets/Account.png" alt="logo account" className = "App-image"></img>
          <div className = "space"></div>
          <p>Account Setting</p>
        </div>

        <div className="r3"> 
          <img src="./assets/Parametre.png" alt="logo parametre" className = "App-image"></img>
          <div className = "space"></div>
          <p>Configuration</p>
        </div>

        <div className="r4"> 
          <img src="./assets/Payment.png" alt="logo payement" className = "App-image"></img>
          <div className = "space"></div>
          <p>Payement</p>
        </div>

        <div className="r5"> 
          <img src="./assets/Horloge.png" alt="logo horloge" className = "App-image"></img>
          <div className = "space"></div>
          <p>History</p>
        </div>
      </aside>
    </div>
    );
}