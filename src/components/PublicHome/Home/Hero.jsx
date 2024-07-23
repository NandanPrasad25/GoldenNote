/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import Carousel from "./Carousel";


const Hero = () => {


  return (
    <div className="bg-slate-900 text-yellow-200 flex flex-1 flex-col items-center px-7 py-16 text-center max-w-screen-2xl">

      <h1 className="text-[40px] font-semibold mb-3 xl:text-[43px]">
        Welcome to GoldenNote !
      </h1>

      <p className="text-xl text-slate-300 mb-14">
        The Digital Note taking Solution with minimalistic UI to simply focus on
        your valuable notes and not about anything else
      </p>

      <Carousel />

{/* Signup Link */}
      <NavLink
        to="/signup"
        type="button"
        className="text-slate-800 font-semibold bg-blue-700 hover:bg-blue-800 focus:ring-4 inline-flex w-[30%] justify-center focus:outline-none focus:ring-blue-300 rounded-lg text-lg px-4 py-2 mt-9 text-center dark:bg-slate-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Create Your Free Account
      </NavLink>
    </div>
  );
};

export default Hero;
