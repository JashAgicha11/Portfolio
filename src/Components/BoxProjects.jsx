import HeroImage from "../assets/HeroImage.png";
import CardHover from "./CardHover";
import {
  scorer,
  quiz,
  naranpura,
  sindhucup,
  filmempire,
  FilmEmpire,
  ScoreKeeper,
  Quiz,
  SindhuCup,
  Naranpura,
} from "../assets";

const BoxProjects = () => {
  return (
    <div className="h-full">
      <div className="sm:flex h-full justify-around overflow-hidden">
        <div className="sm:w-3/6 h-full">
          <div className="h-3/6 w-full ">
            <CardHover img={scorer} video={ScoreKeeper} link={"https://volleyballscorer.netlify.app/"} />
          </div>
          <div className="sm:flex justify-around h-3/6 w-full">
            <div className="h-full sm:w-3/6 w-full ">
              <CardHover img={quiz} video={Quiz} link={"https://collegequiz.netlify.app/"} />
            </div>
            <div className="h-full sm:w-3/6 ">
              <CardHover img={sindhucup} video={SindhuCup} />
            </div>
          </div>
        </div>
        <div className="sm:w-3/6 h-full sm:flex jutify-around flex-col">
          <div className="sm:h-4/6 h-3/6 sm:w-full ">
            <CardHover img={filmempire} video={FilmEmpire} link={"https://filmempiree.netlify.app/"} />
          </div>
          <div className="h-3/6 sm:h-2/6 sm:w-full">
            <CardHover img={naranpura} video={Naranpura} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxProjects;
