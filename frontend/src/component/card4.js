import React from "react";
import Plot from "react-plotly.js";

export default class Card4 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            valeurEnX : [],
            valeurEnY: []
        }
    }

    componentDidMount(){ 
        this.fetchStock();
    }

    fetchStock(){
        const pointerToThis = this;
        const API_KEY = 'UBYQXJP3MAF7COTW';
        let companySymbol = 'IBM';
        let API_URL ='https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol='+companySymbol+'&outputsize=full&apikey='+API_KEY;
        
        let fonctionValeurEnX = [];
        let fonctionValeurEnY = [];

        fetch(API_URL)
            .then(
                function(response) {
                    return(response.json());
                }
            )
            .then(
                function(data){
                    console.log(data);
                    for(var i in data['Time Series (Daily)']){
                        fonctionValeurEnX.push(i);
                        fonctionValeurEnY.push(data['Time Series (Daily)'][i]['1. open']);
                    }

                    //console.log(fonctionValeurEnX);
                    pointerToThis.setState({
                        valeurEnX : fonctionValeurEnX,
                        valeurEnY : fonctionValeurEnY
                    });
                }
            )
    }

    render() {
        return(
            <div>
                <div className="card4">
                    <div className="App-.card4">
                        <h3> -  Time / Day : </h3>
                        <div class ="containerCard4"> 
                        <Plot
                            data = {[
                                {
                                    x: this.state.valeurEnX,
                                    y: this.state.valeurEnY,
                                    type: 'scatter',
                                    mode: 'lines+markers',
                                    marker: {color : 'red'} 
                                }
                            ]}
                            layout = {{width: 910, height: 300, title: "Evolution des actions d'IBM"}}
                        />
                        </div>
                    </div>
                </div>             
            </div>
        );
    }
}