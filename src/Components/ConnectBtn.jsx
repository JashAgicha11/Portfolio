import React from "react";
// import { linkedin } from '../assets'

const ConnectBtn = ({ img, tag, link }) => {
  return (
    <div>
      <section className="flex justify-center items-center">
        <a href={link} target="_blank">
          <button
            href="/"
            className="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
          >
            <img
              className="hover:rounded-[50%] transition-all ease-in-out duration-500 sm:w-[40px] w-[50px] "
              src={img}
              alt={tag}
            />
            <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-white- group-hover:text-sm group-hover:-translate-y-10 duration-700">
              {tag}
            </span>
          </button>
        </a>
      </section>
    </div>
  );
};

export default ConnectBtn;
