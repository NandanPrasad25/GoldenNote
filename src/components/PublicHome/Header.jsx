import logo from "../../assets/freepik-export-20240705145406n7cJ.png"

const Header = () => {
  return <div>
    <nav className="bg-white dark:bg-gray-900">
        <div className=" w-[94%] xl:w-[97%] max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto py-5  border-gray-500 border-b-2">
            <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src={logo} className="h-8" alt="Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">GoldenNote</span>
            </a>
            <div className="flex gap-x-4">
            <a href="#" type="button" className="text-slate-800 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-[0.9rem] px-4 py-2 text-center dark:bg-slate-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800 xl:px-7">Signup</a>
            <a href="#" type="button" className="text-slate-800 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-[0.9rem] px-4 py-2 text-center dark:bg-slate-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-3 xl:px-7">Login</a>
            </div>
            
        </div>
    </nav>
  </div>;
};

export default Header;
