import axios from "axios";
import React, { useEffect, useState } from "react";
import {AiOutlineArrowUp} from "react-icons/ai";
import {FiBookOpen} from "react-icons/fi";
import { Link } from "react-router-dom";
import BaseUrl from "../../constant";
const PopularCategories = () => {

  const [loading, setLoading] = useState(false);
const [data, setData] = useState([]);
useEffect(() => {
  setLoading(true)
  const Courses =async ()=>await axios
    .get(`${BaseUrl}/api/courses/all`)
    .then(res=>{
      res=res.data.courseData
      let a=[]
      res.map((el)=>{
        return a=[...a,el.tag]
      })
      // console.log(...new Set(a));
      setData([...new Set(a)])
      setLoading(false);
    })
  
  Courses();
}, []);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <div className="flex flex-col justify-center items-center ">
              <div className="text-xl md:text-3xl  font-bold uppercase">
                Most Popular <span className="text-[#20b486]">Categories</span>
              </div>
              <div className="border-b-4 border-[#20b486] mt-2">
                {" "}
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              </div>
            </div>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base my-4">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them.
            </p>
          </div>
          <div className="flex flex-wrap -m-2 ">
            {
              data && 
              data.map(item=>
                <Link to={`/courses?category=${item}`}>
            <div key={item} className="p-4  w-full ">
              <div className="h-full flex items-center border-gray-200 border p-2 rounded-lg hover:border hover:border-[#20b486] transition duration-500 ease-in-out">
                <FiBookOpen className="text-4xl  mx-6"/>
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font text-2xl">
                    {item}
                  </h2>
                </div>
                <div className=" mx-4 text-[#20b486] hover:bg-[#20b486] rounded-md transition duration-500 ease-in-out">
                <AiOutlineArrowUp className="text-5xl hover:text-white text-[#20b486] rotate-45"/>
                </div>
              </div>
            </div></Link>
              )
}
            
            
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopularCategories;
