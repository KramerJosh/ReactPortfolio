import { Link, useLocation } from "react-router-dom";
import { baseLinkStyle } from "../styles";


function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <div id="move-Right" className="w-full">
    <ul className="flex flex-row space-x-6 items-center bg-primary-color text-secondary-color h-16">
      <li className="flex-1">
        <Link
          to="/"
          className={`${currentPage === "/" ? "active" : ""} ${baseLinkStyle}`}
        >
          About
        </Link>
      </li>
      <li className="flex-1">
        <Link
          to="/Portfolio"
          className={`${currentPage === "/Portfolio" ? "active" : ""} ${baseLinkStyle}`}
        >
          Portfolio
        </Link>
      </li>
      <li className="flex-1">
        <Link
          to="/Contact"
          className={`${currentPage === "/Contact" ? "active" : ""} ${baseLinkStyle}`}
        >
          Contact
        </Link>
      </li>
      <li className="flex-1">
        <Link
          to="/Resume"
          className={`${currentPage === "/Resume" ? "active" : ""} ${baseLinkStyle}`}
        >
          Resume
        </Link>
      </li>
    </ul>
    </div>
  );
}

export default NavTabs;
