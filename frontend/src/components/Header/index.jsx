import { useEffect, useState } from "react";
import { AiOutlineLock } from "react-icons/ai";

import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {

  const navigate = useNavigate();
  const [burger, setBurger] = useState(false);

  const setVisibleHandler = () => setBurger(false)
  let token = localStorage.getItem("token")

  const handleLogout = () => {
    if (token) {
      localStorage.removeItem("token");

    }
    if (!token) {
      navigate('/login')
    }
  }
  useEffect(() => {
    token = localStorage.getItem("token")
  }, [token])

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
        {!token ? <Link to={"/login"}><div className="flex item-center md:w-18  justify-center gap-2 px-12 py-2 border border-[#20b486] rounded-md hover:bg-[#20b486] hover:text-white hover:border transition duration-500 ease-in-out">
          <AiOutlineLock className="text-2xl" />
          <span>Login</span>

        </div></Link>
          :
          <>
            <img
              className="w-10 h-10 rounded-lg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAB/CAMAAADxY+0hAAAAY1BMVEX///8AAAD6+vrV1dU3Nzfc3Nzw8PDNzc3FxcXS0tKurq7l5eW7u7uGhoZYWFg6OjpPT0+cnJxsbGwbGxuoqKhhYWE/Pz8lJSUyMjK1tbWOjo5HR0cQEBAtLS10dHQWFhZ9fX0MZjZhAAAEu0lEQVRoge1b15brIAw0JO4lzU51sv7/r9z1JrnB1KFkfe45mXcYbIQ0EiKKPvjgg/8PNCkXaZZl6aJM6N8y523dLQmLZVe3+V+sIsnqPVFhX2fJW8mr7qAkv+PQVe9aQlwfDeR3HOv4DexVA5Hf0VSB2U87C/YRu1M4clqtLNlHrKpA52GxdmAfsV4EYKdnR/YRZ+9fkC/NLBoscz/6jRf7iI0He7L1pidk6+yP4ksAekIuju4oDcI+InWhPwWjJ8TBGRUB6Qkp5qW3XkDIn3+H1RbkwekJsfBEcf8G/h4+hkmYc8/jgjqiEF5Phi1G7+/zVYBiwTts7wnABqlfwNVjadYDPnLDjLOJfvFWekIMkoziWu96K9KfxI8maXG7wqPW+h2o0Hm2GTsRzeAzq88MQKF9E31ZfMOGrnT0YNiRfwP473SBCMpy1io/mkDGs1PTQ1+wVVsQhaxAbQFIitnpDJh2wAyNanQMDL7qzw9FTqIqENceY22+oZYPTYDygjmCAdHzKDdgwPoACYGIF7kFAraDqFhAOXfShZtKS4R8IQoq+TLOc5DNk5nXrTAcDoAZZ27DsDwOyBtlH6IuK/4DVs2g5on2TqOWEH0UAQpO/BJAdoL6GdHvohBtzYOM4u0BQEK2wiDA/NBSDuACRQMEvE9AftEDAUYT8P8LpgyYf0j7Ew5AAozRSkcGiIjlPXAJjAnnfwgpuUFQ3hPM/4p5EDQoWPwRPwWIfoT0UPyFijd8BIT4Q+kPZ/6L2QIpVjzi+cFibxD9OYLffzTvN12puM4Dnf8fHA35B3ZFKJ5/xP/9otHmX/AlIX+SIKf1i5uGH6wBEIkrxcteF/7fPVHidVNRyiGZ6wM7Rf3B4o5UjP+Q13zCo/5yh+jJAf03WcHUgWRW7DL9Z1127W9FWiY0KdPiZl2vF/UvfgBCQHKIgfwnGCT5j50BekImJLAISNbDsJUftF03DGD5Vpb/Avk/WT0EwGLgLa4fHhGlANSnNP83e6Br8TKbpG1e6z007WtGWhhrYNL6h7H+M3CrLvNiUw/1psg5h5wMhpnk/lNf/7raXCKn2l+gqH9pT4Cm6iqDthKrktGa2qF9F4NGhylrmEr1YH19HWl0sLL+q7RAp/4BpaTV3IDIHYtrD4s8pGnq//L7D5mzwiB1qdqLeInzEkM1Domo0CfxogWgRQ85xFKI/v5LuP9be9FHkTCfwY/w+YtvMyOfVxhb0qZ/zL+PcLqj5t2c3H+rXQUO1qkB99/sqd2FaOSMGacCeZKX5+7dj/4L2UuqgFGEiV1unpcF44XR+iF7heTZP8juJtz/MgnEflvAemALY2JDl0vsfYKNwVZbyQYiXcKvB5sUWrbgsStvVAm/HiV78r0a8A4ubrA6+NBzWsC6iXTauurUjJ1PcpyNjQCmE/XZOx7iaf8rm/0Y2KcZkGv/q9D/uz9B9efTNJN37/+NBBV/NT4tiGsu9fHpf44k/d+XjXo38w1fgfPt/5b2v/ddkZZTY6BlWnRiFci//z1S9P9f981wbk9VVZ3a89DsZQlnkP7/aPb3DyNmff/xi3nfv4yY9/3PiHnfP92XMOf7rwfmfP/GrGK2938ffPBBGHwDC1s8lJFOq84AAAAASUVORK5CYII=" alt="" />
          </>
        }
        <Link to={token ? "#" : "/signup"} onClick={handleLogout}> <div className="text-white px-6 py-2 md:w-18  border  bg-[#20b486] rounded-md hover:bg-transparent hover:text-[#20b486] hover:border-[#20b486] transition duration-500 ease-in-out">
          {token ? "Logout" : "Sign Up for Free"}
        </div></Link>
      </div>
      <div
        onClick={setVisibleHandler}
        className={`bg-gray-300 md:hidden transiti duration-500 ${burger ? "translate-y-[0%]" : "translate-y-[-300%]"
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
{!token &&          <Link to={'/login'}> <div className="flex item-center w-[50vw]  justify-center gap-2 px-12 py-2 border border-[#20b486] rounded-md hover:bg-[#20b486] hover:text-white hover:border transition duration-500 ease-in-out">
            <AiOutlineLock className="text-2xl" />
            <span>Login</span>
          </div>
          </Link>}
          <Link to={'/signup'} onClick={handleLogout}>
            <div className="text-white px-6 w-[50vw] item-center border py-2 bg-[#20b486] rounded-md hover:bg-transparent hover:text-[#20b486] hover:border-[#20b486] transition duration-500 ease-in-out mb-10 text-center">
             {token ? "Logout" : "Sign up for Free"}
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
