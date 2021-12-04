import React from "react";

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

export default VideoDetail;