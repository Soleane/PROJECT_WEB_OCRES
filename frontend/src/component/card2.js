import React from "react";
import axios from 'axios';



//const API_KEY = "4081444b7b90198136fefe6ed4ccf35b";
// Url API
//const API_URL = "https://api.openweathermap.org/data/2.5/weather";
// Base source icon
//const API_URL_ICON = "http://openweathermap.org/img/wn/";

//const API_URL_THREE = "https://api.openweathermap.org/data/2.5/forecast/"

const API_KEY = "4fa22870f4233e24dc25c2741af4c7c3";
const API_URL = "http.api.openweathermap.org/data/2.5/weather"


export default class card2 extends React.Component {
    constructor(props)
    {
       super(props);
       this.state = {
            recherche : "Paris",
            meteo : undefined,
            date: new Date()
        }
    }
   

    getMeteo() {
        axios.get(`${API_URL}?q=${this.state}&units=metric&appid=${API_KEY}`)
        .then(res => {
            const meteo = res.data;
            this.setState({ meteo : meteo });
        })
    }
    handleChange = (e) => {
        this.setState({recherche : e.target.value})
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


    handleSubmit = (e) => {
        e.preventDefault();
        this.getmeteo();
    }

    render()
    {
        return(
            <div className="card2">
            &nbsp;
                <div className = "containerCard2">
                    <h1>Météo de {!!this.state.meteo &&(<>{this.state.meteo.name}</>)}</h1>
                    &nbsp;
                    <div>
                        <div > 
                         &nbsp;       
                            <div className = "jesersarien" >   
                                <h3>{!!this.state.meteo &&(<>{this.state.meteo.weather[0].main}</>)}</h3>
                                <h5>{!!this.state.meteo &&(<>{this.state.meteo.weather[0].description}</>)}</h5>
                                <h1>{!!this.state.meteo &&(<>{this.state.meteo.main.temp}</>)} °C </h1>
                            </div>
                        </div>
                        <div className = "heure col-6">    
                            <h3>Température maximale :<h2>{!!this.state.meteo &&(<>{this.state.meteo.main.temp_max}</>)} °C</h2> </h3>
                            <h3>Température minimale :<h2>{!!this.state.meteo &&(<>{this.state.meteo.main.temp_min}</>)} °C</h2> </h3> 
                        </div>
                    </div>
                    &nbsp;
                    <h2>Nous sommes le: {this.state.date.toLocaleDateString()} et il est: {this.state.date.toLocaleTimeString()}.</h2>
                </div>
            </div> 
        );
    }
}