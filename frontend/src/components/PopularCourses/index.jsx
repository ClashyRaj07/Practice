import React, { useEffect, useState } from "react";
import CourseCard from "../Shared/CourseCard";
import axios from "axios";
import BaseUrl from "../../constant";

const PopularCourses = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoading(true)
    const Courses =async ()=>await axios
      .get(`${BaseUrl}/api/courses/all`)
      .then(res=>{
        res=res.data.courseData
        setData(res.slice(0,4))
        setLoading(false);
      })
    
    Courses();
  }, []);
  return (
    <>
      {loading ? (
        "Loading ..."
      ) : (
        <div className="max-w-[600px]  md:max-w-[1480px]  px-6 mx-auto  ">
          {/* <div className='text-4xl font-bold'>Most Popular <span className=' text-[#20b486]'>Courses</span></div> */}
          <div className="flex flex-col justify-center items-center">
            <div className="text-xl md:text-3xl  font-bold uppercase">
              Most Popular <span className="text-[#20b486]">Courses</span>
            </div>
            <div className="border-b-4 border-[#20b486] mt-2">
              {" "}
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </div>
          </div>
          <p className="my-6 text-gray-500 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="md:flex gap-10 my-2 items-center justify-center ">
            { console.log(data)}
            {
             
              data && 
              data?.map(course=><CourseCard  key={course._id} id={course._id} title={course.title} description={course.description.slice(0,50) + "..."} views={123}/>)
            }
          </div>
        </div>
      )}
    </>
  );
};

export default PopularCourses;
