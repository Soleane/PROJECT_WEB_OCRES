
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

    render() {
        return(
            <div className="card5">
                <card5 className="App-.card5">
                <h5>- Enter search keyword to load...</h5>
                <div class ="containerCard5"> 
                    <SearchBar handleFormSubmit={this.handleSubmit}/>
                </div>
                </card5>
            </div>            
        );
    }
}