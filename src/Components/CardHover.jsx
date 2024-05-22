import React from "react";
import BoxImage from "./BoxImage";
import BoxVideo from "./BoxVideo";
import { useState } from "react";

const CardHover = ({ img, video ,link}) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="h-full w-full transition duration-200  ease-linear hover:opacity-60 durat transform hover:scale-105"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <a href={link}>
        {hover ? <BoxVideo video={video} /> : <BoxImage img={img} />}
      </a>
      
    </div>
  );
};

export default CardHover;
