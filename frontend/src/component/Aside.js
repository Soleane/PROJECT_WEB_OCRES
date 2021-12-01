import React from 'react';

export default function Aside(){
    return(
    <div>
        <aside className="App-aside">
        <img src="./assets/P.png" class = "App-image2"></img>
        <h2>
          Alexis
        </h2>

        <div className="r1"> 
        <img src="./assets/Recherche.png" class = "App-image"></img>
        <div class = "space"></div>
        <p>Dashboard</p>
        </div>

        <div className="r2"> 
        <img src="./assets/Account.png" class = "App-image"></img>
        <div class = "space"></div>
        <p>Account Setting</p>
        </div>

        <div className="r3"> 
        <img src="./assets/Parametre.png" class = "App-image"></img>
        <div class = "space"></div>
        <p>Configuration</p>
        </div>

        <div className="r4"> 
        <img src="./assets/Payment.png" class = "App-image"></img>
        <div class = "space"></div>
        <p>Payement</p>
        </div>

        <div className="r5"> 
        <img src="./assets/Horloge.png" class = "App-image"></img>
        <div class = "space"></div>
        <p>History</p>
        </div>
      </aside>
    </div>
    );
}