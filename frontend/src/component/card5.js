import React from "react"
import SearchBar from './Searchbar';
import youtube from './youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

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

            <div> 
                <div className="card5">
                <card5 className="App-.card5">
                <div class ="containerCard5"> 
                    <SearchBar handleFormSubmit={this.handleSubmit}/>
                </div>
                </card5>
                </div>            
            </div>
        )
            
    }

}