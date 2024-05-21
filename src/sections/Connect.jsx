import { useState } from "react";
import ConnectBtn from "../Components/ConnectBtn";
import HeroVideo from "../assets/plain.webm";
import ConnectHover from "../Components/ConnectHover";
import { github, insta, linkedin } from "../assets";

const Connect = () => {
  const [bg, setBg] = useState(false);
  return (
    <div name="Connect" className="sm:size-full bg-dark-gray">
      <video
        src={HeroVideo}
        className={bg ? "connect-visible" : "connect-hidden"}
        autoPlay
        muted
        loop
        controls={false}
      />
      <div className="sm:size-full  padding z-0 relative bg-dark-gray sm:top-0 top-[100px]">
        <div className=" sm:h-full h-[70vh] w-full border-b ">
          <div className="sm:h-2/4 h-[35%] w-full flex justify-start items-center text-[5rem] sm:text-[9rem] text-white font-rajdhani font-bold sm:leading-none leading-[4.5rem] ">
            Let's get in touch!
          </div>
          <div className="sm:h-1/4 h-[30%]  sm:w-[70%] w-full font-poppins text-xl sm:text-2xl text-white relative top-4">
            I’d be delighted to connect with you, discuss potential
            collaboration, answer any questions you may have, or just have a
            friendly chat.
          </div>
          <div className="sm:h-1/4 h-[30%]  flex  sm:w-2/4 justify-around flex-col sm:flex-row sm:justify-around items-center leading-7 select-none ">
            <div className="flex justify-around sm:w-2/4 w-full ">
              <ConnectBtn
                img={linkedin}
                tag={"Linkedin"}
                link={"https://www.linkedin.com/in/jash-agicha-2aa112271/"}
              />
              <ConnectBtn
                img={github}
                tag={"Github"}
                link={"https://github.com/JashAgicha11"}
              />
              <ConnectBtn
                img={insta}
                tag={"Instagram"}
                link={"https://www.instagram.com/_.jassh_.11/"}
              />
            </div>
            <ConnectHover />
          </div>
          <div className="font-poppins w-full flex justify-center items-center relative top-[50px]  text-white select-none">
            <p className=" hover:text-sky-300"> © 2024 Jash Agicha</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
