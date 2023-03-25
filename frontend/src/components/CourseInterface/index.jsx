import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import BaseUrl from "../../constant";
import Loader from "../Loader";

const CourseInterface = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [courseData, setCourseData] = useState('');
  const [error, setError] = useState(false)
  useEffect(() => {
    if (error) {
      navigate('/notfount')
    }

    setLoading(true);
    if (!localStorage.getItem("token")) {
      navigate('/login?redirect=courses')
    }

    const CourseDetail = async () =>
      await axios
        .get(`${BaseUrl}/api/courses/get/${id}`)
        .then((res) => {
          setCourseData(res.data.courseData);
          console.log(courseData);
        }).catch(error => setError(true));

    const Chapters = async () =>
      await axios
        .get(`${BaseUrl}/api/chapters/get/${id}`)
        .then((res) => {
          setData(res.data.chapterData);

          setLoading(false);
        }).catch(error => setError(true));
    ;

    CourseDetail();
    Chapters();

  }, [id, error]);
  return (
    <>
      {
        loading ? <Loader />
          :
          <div>
            <div className="flex justify-center">
              <div className="flex flex-col justify-center">
                <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center px-4">
                  <div className="overflow-hidden w-full m-4 shadow-sm flex flex-col md:flex-row justify-center">
                    <div className="flex flex-col md:flex-row items-center">
                      <div className="w-full overflow-hidden">
                        {" "}
                        <img
                          src={courseData && courseData.course_banner_url}
                          alt=""
                          className="h-80 w-full object-cover"
                        />{" "}
                      </div>
                      <div className="md:w-2/3 m-4 ">
                        <div className="flex text-gray-500 text-sm m-2">
                          <div className="m-1 font-bold">Posted On: </div>
                          <div className="m-1">{courseData && courseData?.date?.split('T')[0]}</div>
                        </div>
                        <div className="font-bold text-black text-xl m-2">
                          Course : {courseData.title}
                        </div>
                        <div className="text-sm text-gray-500 mt-4 m-2">
                          <a href="#">
                            Description :  {
                              courseData.description
                            }
                          </a>
                        </div>
                        <div className="flex cursor-pointer">
                          <div className="m-2 h-12 w-12 aspect-square">
                            {" "}
                            <img
                              src={courseData?.user?.profile_url}
                              alt=""
                              className=" rounded-full"
                            />{" "}
                          </div>
                          <div className="grid m-1">
                            <div className="font-bold text-sm hover:text-gray-600 mt-2">
                              {courseData?.user?.name}
                            </div>
                            <div className=" text-sm hover:text-gray-600">
                              {courseData?.user?.email}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* //Chapters */}
                <div className="flex flex-wrap gap-4 p-8 border-t-2 border-[#20b486]-400 w-[75vw] ">
                  {data.length < 1 ? <h1 className="flex items-center justify-center p-4 text-4xl">No Chapter Currently Available</h1> :
                    data.map((chapter) => (
                      <Link key={chapter._id} to={chapter.url}>
                        <div className="flex cursor-pointer w-[80vw] md:w-full  border bg-[#20b486]/[.4] hover:bg-[#20b486]/[.8] transition-all duration-300 px-4 rounded-md" >
                          <div className="m-2 h-10 w-10">
                            {" "}
                            <img
                              src='https://tse2.mm.bing.net/th?id=OIP.YyCbttZazARxvTUORQKK4AHaHa&pid=Api&P=0'
                              alt=""
                              className=" rounded-full"
                            />{" "}
                          </div>
                          <div className="grid m-1 my-auto">
                            <div className="font-bold text-sm hover:text-gray-800 ">
                              {chapter.title}
                            </div>
                          </div>
                        </div>
                      </Link>
                      
                    ))}

                    

                    
                </div>
              </div>
            </div>
          </div>
      }
    </>
  );
};

export default CourseInterface;
