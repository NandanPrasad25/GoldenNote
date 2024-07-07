/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import logo from "../../../assets/freepik-export-20240705145406n7cJ.png";

const Header = ({ heading, paragraph, linkName, linkUrl = "#" }) => {
  return (
    <div className="mb-10">
      <div className="flex justify-center">
        <img src={logo} alt="logo" className="h-14 w-14" />
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-grey-900">
        {heading}
      </h2>
      <p className="mt-2 text-center text-sm text-grey-600 mb-5">
        {paragraph}{" "}
        <Link
          to={linkUrl}
          className="font-medium text-purple-600 hover:text-purple-500"
        >
          {linkName}
        </Link>
      </p>
    </div>
  );
};

export default Header;
