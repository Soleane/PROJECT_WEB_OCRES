import React from 'react';
import Card1 from './card1.js';
import Card2 from './card2.js';
import Card3 from './card3.js';
import Card4 from './card4.js';
import Card5 from './card5.js';
import Card6 from './card6.js';



export default class Dashboard extends React.Component {
    render(){
        return(
            <div>
                <Card1/>
                <Card2/>
                <Card3/>
                <Card4/>
                <Card5/>
                <Card6/>
            </div>
        )
    }
}