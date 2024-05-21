import MsgCard from "../Components/MsgCard";
import Progress from "../Components/Progress";
import ServiceCard from "../Components/ServiceCard";
import { Program, review } from "../assets";
import {
  react,
  html,
  python,
  adobe,
  js1,
  tailwind,
  javascript,
} from "../assets";
import { Spotify } from "react-spotify-embed";

const Services = () => {
  return (
    <div name="Services" className="sm:size-full sm:flex ">
      <div className="sm:w-4/6 ">
        <div className="h-[92vh] sm:h-3/4 w-full ">
          <div className="h-1/4 w-full  padding-l flex flex-col justify-center sm:items-start">
            <h1 className="text-md font-poppins font-semibold text-slate-gray leading-7">
              WHAT I DO BEST
            </h1>
            <h3 className="text-6xl font-trench  text-white tracking-wide">
              Services
            </h3>
          </div>

          <div className="w-full sm:h-3/4 h-[45vh] sm:flex sm:pl-3 justify-around items-center relative bottom-10 sm:bottom-0">
            <div className=" sm:size-full h-[80%] ">
              <ServiceCard
                img={review}
                headline={"Front-End Development"}
                desc={
                  "Experience user-friendly website development with React and Tailwind. We blend React's dynamism with Tailwind's sleek design for visually appealing sites."
                }
              />
            </div>
            <div className="sm:size-full h-[80%]">
              <ServiceCard
                img={Program}
                headline={"Web Design"}
                desc={
                  "Explore the magic of great web design. Get websites that are customized, user- friendly, and easy on the eyes giving - your business the digital boost it deserves."
                }
              />
            </div>
          </div>
        </div>
        <div className=" sm:h-1/4 h-[10vh] sm:flex sm:justify-between sm:items-center justify-center">
          <div className="w-full  sm:h-full sm:flex sm:justify-center sm:items-center sm:w-2/4">
            <MsgCard />
          </div>

          <div className="sm:w-2/4 w-0 h-full flex items-center justify-center">
            <Spotify
              className="select-none h-full sm:w-full px-5 w-0 "
              link="https://open.spotify.com/track/3APdIdF8H0jsxSuGOqXedS?si=f6561dd35d5e485e"
            />
          </div>
        </div>
      </div>

      <div className="sm:w-2/6 w-6/6  sm:h-full h-[50vh] relative sm:top-0 top-[120px]">
        <div className="h-1/5 w-full  padding-l flex flex-col justify-center items-start  ">
          <h1 className="text-sm font-poppins font-semibold text-slate-gray leading-7">
            WHAT I MASTERED
          </h1>
          <h3 className="text-6xl font-trench  text-white tracking-wider">
            Skills
          </h3>
        </div>
        <div className=" sm:h-4/5 sm:w-[95%] h-[53vh]  relative sm:top-0 top-10 w-full  px-3 py-2 flex justify-center items-center select-none">
          <div className="progress-box w-[90%] transition ease-linear duration-500">
            <Progress percentage={70} img={react} tag={"React"} />
            <Progress percentage={90} img={javascript} tag={"JavaScript"} />
            <Progress percentage={90} img={tailwind} tag={"Tailwind CSS"} />
            <Progress percentage={60} img={adobe} tag={"Adobe Illustrator"} />
            <Progress percentage={90} img={html} tag={"HTML/CSS"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
