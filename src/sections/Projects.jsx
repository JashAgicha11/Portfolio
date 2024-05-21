import RotateBtn from "../Components/RotateBtn";
import BoxProjects from "../Components/BoxProjects";

const Projects = () => {
  return (
    <div name="Projects" className="sm:h-[80rem] ">
      <section className="h-2/6 bg-light-gray flex justify-start items-center padding-l">
        <div className="text-white text-3xl sm:text-6xl font-extrabold sm:w-6/6 w-[90%] border-b-[3px] pb-10 pr-2 sm:pr-10 sm:ml-5">
          <h1 className="sm:w-5/6 w-6/6 sm:leading-[4.5rem]">
            Elevating Websites into the Creative Verse
          </h1>
        </div>
        <div className="relative top-[90px] right-[100px] sm:w-32 w-0">
          <RotateBtn />
        </div>
      </section>

      <section className=" h-4/6 px-6 sm:pt-0 pt-10 select-none">
        <BoxProjects />
      </section>
    </div>
  );
};

export default Projects;
