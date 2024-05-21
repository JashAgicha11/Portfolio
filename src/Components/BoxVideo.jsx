import React from "react";
// import video from "../assets/intro.mp4";

const BoxVideo = ({ video }) => {
  return (
    <>
      <video
        src={video}
        className="box hover:hover-video"
        autoPlay
        controls={false}
        loop
        muted
      />
    </>
  );
};

export default BoxVideo;
