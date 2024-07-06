import image1 from "../../assets/carousel-1.jpeg";
import image2 from "../../assets/carousel-2.jpeg";
import image3 from "../../assets/carousel-3.jpeg";
import image4 from "../../assets/carousel-4.jpeg";
import image5 from "../../assets/carousel-5.jpeg";

const Hero = () => {
  return (
    <div className="bg-slate-900 text-yellow-200 flex flex-col items-center px-7 py-16 text-center max-w-screen-2xl mx-auto">
      <h1 className="text-[40px] font-semibold mb-3 xl:text-[43px]">
        Welcome to GoldenNote !
      </h1>
      <p className="text-xl text-slate-300 mb-14">
        The Digital Note taking Solution with minimalistic UI to simply focus on
        your valuable notes and not about anything else
      </p>

      <div
        id="animation-carousel"
        className="relative w-full"
        data-carousel="static"

      >
        <div className="relative h-[16rem] overflow-hidden rounded-lg md:h-96">
          <div className="duration-200 ease-linear" data-carousel-item>
            <img
              src={image1}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div className="duration-200 ease-linear" data-carousel-item>
            <img
              src={image2}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div className="duration-200 ease-linear" data-carousel-item="active">
            <img
              src={image3}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div className="duration-200 ease-linear" data-carousel-item>
            <img
              src={image4}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div className="duration-200 ease-linear" data-carousel-item>
            <img
              src={image5}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

      <a
        href="#"
        type="button"
        className="text-slate-800 font-semibold bg-blue-700 hover:bg-blue-800 focus:ring-4 inline-flex w-[30%] justify-center focus:outline-none focus:ring-blue-300 rounded-lg text-lg px-4 py-2 mt-9 text-center dark:bg-slate-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Create Your Free Account
      </a>
    </div>
  );
};

export default Hero;
