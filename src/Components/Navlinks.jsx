import { Link } from "react-scroll";
const Navlinks = ({ tag, link, offset }) => {
  return (
    <>
      <Link
        className="hover:hover-links normal-links"
        to={link}
        spy={true}
        smooth={true}
        offset={offset}
        duration={500}
      >
        {tag}
      </Link>
    </>
  );
};

export default Navlinks;
