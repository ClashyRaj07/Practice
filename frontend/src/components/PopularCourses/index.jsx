import React from "react";
import CourseCard from "../Shared/CourseCard";
const Courses = [
  {
    name: "HTML",
    image:
      "https://tse4.mm.bing.net/th?id=OIP.UQkj4tPcBRMYAhrpVF6gxgHaEf&pid=Api&P=0",
    desc: "Variosu verson insfsfafg fdf...",
    views: "1234",
  },
  {
    name: "HTML1",
    image:
      "https://tse4.mm.bing.net/th?id=OIP.UQkj4tPcBRMYAhrpVF6gxgHaEf&pid=Api&P=0",
    desc: "Variosu verson insfsfafg fdf...",
    views: "1234",
  },
  {
    name: "HTML2",
    image:
      "https://tse4.mm.bing.net/th?id=OIP.UQkj4tPcBRMYAhrpVF6gxgHaEf&pid=Api&P=0",
    desc: "Variosu verson insfsfafg fdf...",
    views: "1234",
  },
  {
    name: "HTML3",
    image:
      "https://tse4.mm.bing.net/th?id=OIP.UQkj4tPcBRMYAhrpVF6gxgHaEf&pid=Api&P=0",
    desc: "Variosu verson insfsfafg fdf...",
    views: "1234",
  },
];
const PopularCourses = () => {
  return (
    <div className="max-w-[600px]  md:max-w-[1480px]  px-6 mx-auto  ">
      {/* <div className='text-4xl font-bold'>Most Popular <span className=' text-[#20b486]'>Courses</span></div> */}
      <div className="flex flex-col justify-center items-center">
        <div className="text-xl md:text-3xl  font-bold uppercase">
          Most Popular <span className="text-[#20b486]">Courses</span>
        </div>
        <div className="border-b-4 border-[#20b486] mt-2">
          {" "}
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        </div>
      </div>
      <p className="my-6 text-gray-500 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="md:flex gap-10 my-2 items-center justify-center ">
        {/* // Courses.map(Course=>{ */}

        <CourseCard data={Courses} />
        <CourseCard data={Courses} />
        <CourseCard data={Courses} />
        <CourseCard data={Courses} />

        {/* // return <h1>{Course.name}</h1> */}
        {/* // }) */}
        {/* } */}
      </div>
    </div>
  );
};

export default PopularCourses;
