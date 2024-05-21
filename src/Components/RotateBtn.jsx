const RotateBtn = () => {
  return (
    <div className="w-full">
      <div className="aspect-square rounded-full relative flex justify-center items-center animate-[spin_5s_linear_infinite] z-40 bg-[conic-gradient(white_0deg,white_300deg,transparent_270deg,transparent_360deg)] before:animate-[spin_5s_linear_infinite] before:absolute before:w-[60%] before:aspect-square before:rounded-full before:z-[80] before:bg-[conic-gradient(white_0deg,white_270deg,transparent_180deg,transparent_360deg)] after:absolute after:w-3/4 after:aspect-square after:rounded-full after:z-[60] after:animate-[spin_6s_linear_infinite] after:bg-[conic-gradient(#b8c0ff_0deg,#b8c0ff_180deg,transparent_180deg,transparent_360deg)]">
        <span className="absolute w-[85%] aspect-square rounded-full z-[60] animate-[spin_8s_linear_infinite] bg-[conic-gradient(#6d597a_0deg,#6d597a_180deg,transparent_180deg,transparent_360deg)]"></span>
      </div>
    </div>
  );
};

export default RotateBtn;
