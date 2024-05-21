import { useState } from "react";
import Sign from "../assets/Sign-1.png";
import Navlinks from "./Navlinks";
import { Link } from "react-scroll";

const Nav = () => {
  const [navbar, setNavbar] = useState(false);

  const changebg = () => {
    if (window.scrollY >= 200) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changebg);
  return (
    <div className={navbar ? "nav-change" : "nav-bar"}>
      <section className="sm:w-1/5 w-2/6 h-full flex items-center z-50">
        <Link
          to={"Hero"}
          spy={true}
          smooth={true}
          offset={-1000}
          duration={500}
          className="w-full h-full cursor-pointer"
        >
          <img
            src={Sign}
            alt="Logo"
            className="w-4/5  sm:w-4/5 sm:h-full h-[4rem] padding-l select-none object-cover"
          />
        </Link>
      </section>

      <div className="sm:w-2/5 w-3/5">
        <ul className="flex justify-between sm:w-full padding-r hover:text-gray-400  transition duration-300 ease-linear text-white w-full ">
          <li className="w-1/5">
            <Navlinks tag={"Projects"} link={"Projects"} offset={-40} />
          </li>
          <li className="w-1/5">
            <Navlinks tag={"Services"} link={"Services"} offset={-120} />
          </li>
          <li className="w-1/5">
            <Navlinks tag={"Connect"} link={"Connect"} offset={100} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
