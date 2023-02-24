import { useEffect, useState } from "react";
import { AiOutlineLock } from "react-icons/ai";

import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
const Header = () => {
  
  const [burger, setBurger] = useState(false);
  
  const setVisibleHandler=()=>setBurger(false)

  return (
    <div className=" md:flex w-full md:justify-around md:items-center mx-auto h-[60px] md:h-[70px] md:shadow-sm sticky top-0 left-0 bg-gray-300 z-10 ">
      <div>
        <h1 className=" text-[#20b486] font-bold text-2xl py-4 px-4">
          Practice
        </h1>
      </div>

      <div className="hidden md:flex justify-center bg-gray-300 ">
        <li className="md:flex items-center justify-center list-none md:gap-6 text-gray-500">
          <ul className="hover:cursor-pointer hover:text-[#20b486] hover:transition-all delay-600">
            <Link to="/" data-toggle="collapse"
      data-target="#navbarCollapse">Home</Link>
          </ul>
          <ul className="hover:cursor-pointer hover:text-[#20b486] hover:transition-all delay-600">
            <Link to="/about">About</Link>
          </ul>
          <ul className="hover:cursor-pointer hover:text-[#20b486] hover:transition-all delay-600">
            <Link to="/courses">Courses</Link>
          </ul>
          <ul className="hover:cursor-pointer hover:text-[#20b486] hover:transition-all delay-600">
            <Link to={"/blog"}>Blog</Link>
          </ul>
          <ul className="hover:cursor-pointer hover:text-[#20b486] hover:transition-all delay-600">
            <Link to={"/contact"}>Contact</Link>
          </ul>
        </li>
      </div>

      <div className="hidden md:flex gap-6 items-center transition duration-500 ease-in-out">
      <Link to={"/login"}><div className="flex item-center md:w-18  justify-center gap-2 px-12 py-2 border border-[#20b486] rounded-md hover:bg-[#20b486] hover:text-white hover:border transition duration-500 ease-in-out">
         <AiOutlineLock className="text-2xl" />
          <span>Login</span>
          
        </div></Link>
        <Link to={"/signup"}> <div className="text-white px-6 py-2 md:w-18  border  bg-[#20b486] rounded-md hover:bg-transparent hover:text-[#20b486] hover:border-[#20b486] transition duration-500 ease-in-out">
       Sign Up for Free
        </div></Link>
      </div>
      <div 
        onClick={setVisibleHandler}
        className={`bg-gray-300 md:hidden transiti duration-500 ${
          burger ? "translate-y-[0%]" : "translate-y-[-300%]"
        }`}
      >
        <div className={`md:flex justify-center bg-gray-300 `} >
          <li className="flex flex-col items-center justify-center list-none gap-4 text-gray-500 py-2">
           <Link to={'/'}> <ul className="hover:cursor-pointer hover:text-[#20b486] hover:transition-all delay-600">
              Home
            </ul></Link>

            <Link to={'/about'}><ul className="hover:cursor-pointer hover:text-[#20b486] hover:transition-all delay-600">
              About
            </ul></Link>


            <Link to={'/courses'}><ul className="hover:cursor-pointer hover:text-[#20b486] hover:transition-all delay-600">
              Courses
            </ul></Link>


            <Link to={'/blog'}><ul className="hover:cursor-pointer hover:text-[#20b486] hover:transition-all delay-600">
              Blog
            </ul></Link>


            <Link to={'/contact'}><ul className="hover:cursor-pointer hover:text-[#20b486] hover:transition-all delay-600">
              Contact
            </ul></Link>
          </li>
        </div>

        <div className="flex flex-col  gap-6 items-center transition duration-500 ease-in-out m-6">
         <Link to={'/login'}> <div className="flex item-center w-[50vw]  justify-center gap-2 px-12 py-2 border border-[#20b486] rounded-md hover:bg-[#20b486] hover:text-white hover:border transition duration-500 ease-in-out">
            <AiOutlineLock className="text-2xl" />
            <span>Login</span>
          </div>
          </Link>
          <Link to={'/signup'}>
          <div className="text-white px-6 w-[50vw] item-center border py-2 bg-[#20b486] rounded-md hover:bg-transparent hover:text-[#20b486] hover:border-[#20b486] transition duration-500 ease-in-out mb-10 text-center">
            Sign up for Free
          </div>
          </Link>
        </div>
      </div>

      {!burger ? (
        <RxHamburgerMenu
          className="md:hidden text-4xl absolute right-2 top-4"
          onClick={() => setBurger(!burger)}
        />
      ) : (
        <RxCross2
          className="md:hidden text-4xl absolute right-2 top-4"
          onClick={() => setBurger(!burger)}
        />
      )}
    </div>
  );
};

export default Header;
