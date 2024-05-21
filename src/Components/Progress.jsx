import "./progress.css";
const Progress = ({ img, tag, percentage }) => {
  return (
    <div className="w-full pt-5 flex items-center flex-col text-white">
      <div className="flex w-[85%] justify-between pr-3 font-poppins transition-all duration-500 ease-linear ">
        <span className="flex justify-start items-end">
          <img className="w-[15%]" src={img} alt={tag} />
          <h1 className="text-xl pl-2">{tag}</h1>
        </span>
        {/* <i src={img}></i> */}
        <h1 className="flex items-end transition ease-linear duration-500">
          {percentage}%
        </h1>
      </div>
      <div className="w-full flex justify-center pt-3">
        <progress value={percentage} max={100} className="progressBar w-5/6" />
      </div>
    </div>
  );
};

export default Progress;
