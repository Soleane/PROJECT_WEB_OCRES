<<<<<<< HEAD
import React from "react"
import SearchBar from './Searchbar';
import youtube from './youtube';

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
import React from "react";

>>>>>>> fe6004d92e326c235bb9df164db52314e996b08d

export default class Card5 extends React.Component {

    render() {
        return(
            <div> 
                <div className="card5">
<<<<<<< HEAD
                <card5 className="App-.card5">
                <h5>- Enter search keyword to load...</h5>
                <div class ="containerCard5"> 
                    <SearchBar handleFormSubmit={this.handleSubmit}/>
                </div>
                </card5>
=======
                    <div className="App-.card5">
                        <h3>  -  Last video : </h3>
                        <div className ="containerCard5"> 
                        <img src="./assets/Video.png" alt="logo video" width="80" height="80"></img>
                        </div>
                    </div>
>>>>>>> fe6004d92e326c235bb9df164db52314e996b08d
                </div>            
            </div>
        );
    }
}