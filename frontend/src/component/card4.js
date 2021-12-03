import React from "react";
import youtube from './youtube';
import VideoList from './VideoList';

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
                <div className="card4">
                <card4 className="App-.card4">
                     <p>
                         -  Time / Day :
                     </p>
                    <div class ="containerCard4">
                        <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                    </div>
                </card4>
                </div>             
            </div>
        )
            
    }

}