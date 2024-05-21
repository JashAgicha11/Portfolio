import { ReactTyped } from "react-typed";
import logo from "../assets/plain.webm";

const Hero = () => {
  return (
    <div
      name="Hero"
      className=" bg-dark-gray relative flex jus sm:justify-between rounded-[1rem] mx-[15px] sm:mx-[25px] sm:h-[72vh] h-[100vh] sm:top-[40px] top-[25px] select-none shadow-[0px_0px_3px_3px] shadow-slate-gray "
    >
      <section className="sm:w-2/4 sm:h-full h-full relative flex items-center sm:border-none flex-col">
        <div className="relative w-full sm-flex sm:items-start flex items-center flex-col sm:w-3/4 padding-t tracking-wide sm:leading-10 font-rajdhani sm:text-3xl cursor-text">
          <h1 className="text-white text-4xl">I'm Jash Agicha</h1>
          <h1 className="font-technor font-extrabold text-3xl ">
            <ReactTyped
              className="text-[#90e0ef] tracking-wider "
              strings={["Web Developer", "Web Designer"]}
              typeSpeed={100}
              backSpeed={30}
              loop
            ></ReactTyped>
          </h1>
        </div>

        <div className="sm:hidden w-[250px] h-[250px]">
          <video src={logo} muted controls={false} autoPlay loop />
        </div>

        <div className="pt-4 w-3/4 h-2/4 flex flex-col justify-around">
          <p className="font-poppins text-white cursor-text">
            As a creative Frontend Developer proficient in{" "}
            <span className="text-yellow-400 text-lg">
              <a target="_blank" href="https://www.javascript.com/">
                JavaScript
              </a>
            </span>{" "}
            ,{" "}
            <span className="text-[#3fc1c0] text-lg">
              <a target="_blank" href="https://react.dev/">
                ReactJS
              </a>
            </span>{" "}
            and{" "}
            <span className="text-sky-400 text-lg">
              <a target="_blank" href="https://tailwindcss.com/">
                Tailwind CSS
              </a>
            </span>{" "}
            , I specialize in crafting visually stunning and highly interactive
            web applications. Explore my portfolio to witness innovative
            solutions that push the boundaries of user experience.
          </p>
          <div className="flex justify-center sm:justify-start">
            <a
              href="https://www.upwork.com/freelancers/~017e669895842ff978"
              target="_blank"
            >
              <button className="sm:top-4 cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700">
                Hire ME
              </button>
            </a>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center w-0 sm:w-2/4 ">
        <video
          src={logo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full sm:transition ease-in duration-300"
        />
      </section>
    </div>
  );
};

export default Hero;
