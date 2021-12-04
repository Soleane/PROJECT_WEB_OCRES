import React from "react";
import axios from 'axios';

//API KEY: 4fa22870f4233e24dc25c2741af4c7c3

// Clé api
const API_KEY = "4081444b7b90198136fefe6ed4ccf35b";
// Url API
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
// Base source icon
const API_URL_ICON = "http://openweathermap.org/img/wn/";


export default class Card3 extends React.Component 
{
	constructor(props)
	{
	   super(props);
	   this.state = {
            recherche : "Paris",
            meteo : undefined,
            date: new Date()
        }
    }
   

    getmeteo()
    {
        axios.get(`${API_URL}?q=${this.city}&units=metric&appid=${API_KEY}`)
        .then(res => {
            const meteo = res.data;
            this.setState({ meteo : meteo });
        })
    }
    componentDidMount() { 
        this.getmeteo();
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
        return(
            <div>
                <div className="card3">
                <div className="App-.card3">
                    <h3> {this.state.date.toLocaleDateString()} </h3>
                    <h3>{this.state.date.toLocaleTimeString()}. h </h3>
                </div>
            </div>               
            </div>
        )
    }
}