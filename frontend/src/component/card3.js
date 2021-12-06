import React from "react";

export default class Card3 extends React.Component {
	constructor(props){
	   super(props);
	   this.state = {
            date: new Date(),
        }
    }

    componentDidMount() { 
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
            <div className="card3">
                <div className="App-.card3">
                    <h2> Date et heure </h2>
                    <div className ="containerCard3">
                        <h3> {this.state.date.toLocaleDateString()} </h3>
                        <h3> {this.state.date.toLocaleTimeString()} </h3>
                    </div>    
                </div>
            </div>
        )
    }
}