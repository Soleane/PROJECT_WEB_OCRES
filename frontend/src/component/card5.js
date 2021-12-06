
import React from "react"


export default class Card5 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            id : 0,
            photo : '',
            description : ''
        }
    }
    
    componentDidMount(){
        this.fetchCharacters();
    }

    fetchCharacters(){
        const pointerToThis = this;
        const API_Key = '19b852e09fa9c1ba447c0b3047dbd203';
        const hash = '2e1b62adcd00d186e108ca7380149562';
        let nom = 'Hulk';
        const API_URL = `https://gateway.marvel.com/v1/public/characters?ts=1&name=${nom}&apikey=${API_Key}&hash=${hash}`;

        fetch(API_URL)
            .then(
                function(response){
                    return(response.json());
                }
            )
            .then(
                function(res){
                    console.log(res);

                    pointerToThis.setState({
                        name : res.data.results[0].name,
                        id : res.data.results[0].id,
                        photo : res.data.results[0].thumbnail.path,
                        description : res.data.results[0].description  
                    });
                }
            )
    }


    render() {
        return(
            <div className="card5">
                <div className="App-.card5">
                    <h3> Marvel Character </h3>
                    <div className ="containerCard5">
                        <h4>Name: {this.state.name} </h4>
                        <p>ID: {this.state.id} </p>
                    </div>
                    <div className ="containerCard5b">
                    <p>Description: {this.state.description} </p>
                    </div>
                </div>
            </div>            
        );
    }
}