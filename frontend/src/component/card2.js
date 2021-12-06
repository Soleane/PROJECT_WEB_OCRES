import React from "react";
import axios from 'axios';

//API_KEY: 4fa22870f4233e24dc25c2741af4c7c3

// Clé api
const API_KEY = "4081444b7b90198136fefe6ed4ccf35b";
// Url API
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
// Base source icon
const API_URL_ICON = "http://openweathermap.org/img/wn/";


export default class Card2 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
             city : "Paris",
             main: '',
             description : '',
             temp : 0,
             icon: undefined
         }
     }
 
     getMeteo() {
         axios.get(`${API_URL}?q=${this.state.city}&units=metric&appid=${API_KEY}`)
         .then(res => {
             console.log(res.data);
             this.setState({ 
                 main : res.data.weather[0].main,
                 description : res.data.weather[0].description,
                 temp : res.data.main.temp,
                 icon : res.data.weather[0].icon
             });
         });
     }
     componentDidMount() { 
        this.getMeteo();
     }

    render()    {
        const icono = `${API_URL_ICON}${this.state.icon}@2x.png`;
        return(
            <div className="card2">
                <div className="App-.card2">
                    <h3> Météo du jour </h3>
                    <p>Temps : {this.state.main}</p>
                    <p>Description : {this.state.description} </p>
                    <p>Température : {this.state.temp}°C </p>
                    <img src={icono} class="weather-icon" alt='logo temps'></img>
                </div>
            </div>
        )
    }
}