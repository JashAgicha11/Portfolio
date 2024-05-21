import React from "react";
import BoxImage from "./BoxImage";
import BoxVideo from "./BoxVideo";
import { useState } from "react";

const CardHover = ({ img, video }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="h-full w-full transition duration-200  ease-linear hover:opacity-60 durat transform hover:scale-105"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover ? <BoxVideo video={video} /> : <BoxImage img={img} />}
    </div>
  );
};

export default CardHover;
