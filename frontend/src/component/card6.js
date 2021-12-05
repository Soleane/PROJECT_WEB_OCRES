import React from "react";
import youtube from './youtube';

import '../style/video.css';

//=====SearchBar============================================

class SearchBar extends React.Component {
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        
        return (
            <div>
                <h2  style={{textAlign:"center"}}>
                    <img style={{width:'70px', height:'50px',justifyContent:'center'}} src='assets/youtube.png' alt="youtube logo"></img>
                </h2>
                <div class = "space"></div>
                <div className='search-bar ui segment'>
                    <form onSubmit={this.handleSubmit} className='ui form'>
                        <div className='field'>
                            <label htmlFor="video-search">Video Search </label>
                            <input onChange={this.handleChange} name='video-search' type="text" placeholder="Search.."/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

//=====VideoDetail==========================================

const VideoDetail = ({ video }) => {
    if (!video) {
      return <div>
         <br></br>
      </div>;
    }
  
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(typeof video);
    return (
      <div>
        <div className="ui embed">
          <iframe src={videoSrc} allowFullScreen title="Video player" />
        </div>
        <div className="ui segment">
          <h5 className="ui header">{video.snippet.title}</h5>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    );
  };

//=====VideoItem==========================================

const VideoItem = ({video , handleVideoSelect}) => {
    return (
        <div onClick={ () => handleVideoSelect(video)} className=' video-item item'>
            <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div className='content'>
                <div className='header '>{video.snippet.title}</div>
            </div>
        </div>
    )
};

//=====VideoList==========================================

const VideoList = ({videos , handleVideoSelect}) => {
    const renderedVideos =  videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
        // console.log(video.id);
    });

    return <div className='ui relaxed divided list'>{renderedVideos}</div>;
};

//=====Card6================================================

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
                    <div className = "space"></div>
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="four wide column">
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
