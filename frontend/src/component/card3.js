import React from "react";
import axios from 'axios';

//API_KEY: 4fa22870f4233e24dc25c2741af4c7c3

// Clé api
const API_KEY = "4081444b7b90198136fefe6ed4ccf35b";
// Url API
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
// Base source icon
const API_URL_ICON = "http://openweathermap.org/img/wn/";


export default class Card3 extends React.Component {
	constructor(props){
	   super(props);
	   this.state = {
            city : "Paris",
            date: new Date(),
            main: '',
            description : '',
            temp : 0,
            icon: undefined
        }
    }

    getHTMLElementFromIcon(icon){
        return `<img src=${API_URL_ICON}${icon}@2x.png class="weather-icon"/>`
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
        console.log(this.state.meteo, this.state.city);
    }

    componentDidMount() { 
        this.getMeteo();
        this.timerID = setInterval(
            () => this.tick(), 
            1000 
        ); 
    } 
    
    componentWillUnmount() { 
        clearInterval(this.timerID); 
    } 
    
    tick() { 
        this.setState({ 
            date: new Date() 
        }); 
    } 

    render()    {
        const icono = `${API_URL_ICON}${this.state.icon}@2x.png`;
        return(
            <div className="card3">
                <div className="App-.card3">
                    <h3> {this.state.date.toLocaleDateString()} </h3>
                    <h3>{this.state.date.toLocaleTimeString()}. h </h3>
                    <p>Temps :{this.state.main}</p>
                    <p>Description : {this.state.description} </p>
                    <p>Température : {this.state.temp}°C</p>
                    <img src={icono} class="weather-icon" alt='logo temps'></img>
                </div>
            </div>
        )
    }
}