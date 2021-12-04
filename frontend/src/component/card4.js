import React from "react";
<<<<<<< HEAD
import youtube from './youtube';
import VideoList from './VideoList';
import SearchBar from './Searchbar';
import VideoDetail from "./VideoDetail";

export default class Dashboard extends React.Component 
{

    state = {
        videos: [],
        selectedVideo: null
    }
    handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })

        this.setState({
            videos: response.data.items
        })
        console.log("this is resp",response);
    };
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    render()
    {
        return(
=======
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
        let API_Call ='https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol='+companySymbol+'&outputsize=full&apikey='+API_KEY;
        
        let fonctionValeurEnX = [];
        let fonctionValeurEnY = [];

        fetch(API_Call)
            .then(
                function(response) {
                    return(response.json());
                }
            )
            .then(
                function(data){
                    console.log(data);
>>>>>>> fe6004d92e326c235bb9df164db52314e996b08d

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
<<<<<<< HEAD
                <card4 className="App-.card4">
                     <p>
                         -  Time / Day :
                     </p>

                    <div class ="containerCard4">
                    <div>
                            <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div>
                        <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                    </div>    
                    </div>
                </card4>
=======
                    <div className="App-.card4">
                        <h3> -  Time / Day : </h3>
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
                            layout = {{width: 720, height: 440, title: "Evolution des actions d'IBM"}}
                        />
                    </div>
>>>>>>> fe6004d92e326c235bb9df164db52314e996b08d
                </div>             
            </div>
        );
    }
}