const ServiceCard = ({ img, headline, desc }) => {
  return (
    <div className="box ">
      <div className=" progress-box">
        <div className="sm:h-[45%] h-[40%] w-[50%] sm:w-full">
          <img
            src={img}
            className="object-contain h-full select-none"
            alt={headline}
          />
        </div>
        <div className="h-[10%] w-full font-semibold sm:text-3xl text-2xl pl-2 font-general text-white sm:mb-2">
          <p>{headline}</p>
        </div>
        <div className="sm:h-[45%] h-[45%] relative sm:top-0 top-5 w-[95%] sm:p-2 text-[15px]  sm:text-[15px] text-left font-poppins text-white sm-pl-0 pl-2">
          {desc}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
