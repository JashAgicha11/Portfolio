import React from "react";

const MsgCard = () => {
  return (
    <div>
      <div className="card w-full h-full flex justify-center items-center">
        <div className="relative bg-black w-[300px] sm:w-[250px] group transition-all duration-700 aspect-video flex items-center justify-center">
          <div className="transition-all flex flex-col items-center py-5 justify-start duration-300 group-hover:duration-1000 bg-white w-[99%] h-[99%] absolute group-hover:-translate-y-20">
            <p className="text-xl sm:text-2xl font-semibold text-gray-500 font-serif">
              Thank You
            </p>
            <p className="px-5 font-poppins text-[10px] sm:text-[11px] text-gray-700 pt-3">
              I am pleasure to have you on Our Site
            </p>
            <p className="font-poppins text-[10px] sm:text-[11px] text-gray-700">
              Wishing you a fantastic day ahead!
            </p>
            <p className="font-serif font-semibold text-[14px] text-gray-700 pt-2">
              Jash Agicha
            </p>
          </div>
          <button className="seal bg-rose-500 text-white w-[3rem] aspect-square rounded-full z-40  text-[18px] flex items-center justify-center font-bold [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_20%_10%)] group-hover:opacity-0 transition-all duration-1000 group-hover:scale-0 group-hover:rotate-180 border-4 border-rose-900">
            AJ
          </button>
          <div className="tp transition-all duration-1000 group-hover:duration-100 bg-dark-gray absolute group-hover:[clip-path:polygon(50%_0%,_100%_0,_0_0)] w-full h-full [clip-path:polygon(50%_50%,_100%_0,_0_0)]"></div>
          <div className="lft transition-all duration-700 absolute w-full h-full bg-dark-gray [clip-path:polygon(50%_50%,_0_0,_0_100%)]"></div>
          <div className="rgt transition-all duration-700 absolute w-full h-full bg-dark-gray [clip-path:polygon(50%_50%,_100%_0,_100%_100%)]"></div>
          <div className="btm transition-all duration-700 absolute w-full h-full bg-dark-gray [clip-path:polygon(50%_50%,_100%_100%,_0_100%)]"></div>
        </div>
      </div>
    </div>
  );
};

export default MsgCard;
