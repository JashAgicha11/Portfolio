import React from "react";

const ConnectHover = () => {
  return (
    <div>
      <a data-email="agichajash@gmail.com" href="mailto:agichajash@gmail.com">
        <button className="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-[2rem] text-xl font-bold cursor-pointer  z-10 group">
          <span className="text-2xl flex justify-center items-center w-full h-full relative bottom-[3px]">
            Connect
          </span>

          <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"></span>

          <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-4   00 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"></span>

          <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"></span>

          <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
            With Me
          </span>
        </button>
      </a>
    </div>
  );
};

export default ConnectHover;
