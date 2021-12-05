import React from "react";
import SearchBar from './Searchbar';
import youtube from './youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

export default class Card6 extends React.Component {

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
        return (
            <div>
                <div className="card6">
                <div className="App-.card6">
                <h5>- Enter search keyword to load...</h5>
                <div class ="containerCard6"> 
                    <SearchBar handleFormSubmit={this.handleSubmit}/>
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="two wide column">
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
