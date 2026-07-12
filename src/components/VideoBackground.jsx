import React from 'react';
import './VideoBackground.css';

const VideoBackground = () => {
  return (
    <div className="video-background-container">
      <div className="video-overlay"></div>
      {/* 
        This video uses /bg.mp4 from the public directory. 
        If it's missing, the background will be black.
      */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="video-element"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;
