import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
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
        .get(`http://localhost:5000/api/courses/get/${id}`)
        .then((res) => {
          setCourseData(res.data.courseData);
          console.log(courseData);
        }).catch(error => setError(true));

    const Chapters = async () =>
      await axios
        .get(`http://localhost:5000/api/chapters/get/${id}`)
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
                <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
                  <div className="overflow-hidden w-full m-4 shadow-sm flex flex-col md:flex-row justify-center">
                    <div className="flex flex-col md:flex-row items-center">
                      <div className=" w-full overflow-hidden">
                        {" "}
                        <img
                          src="https://cdn-images-1.medium.com/max/1200/1*9QRFQdpO2f59GsN2KsE9XA.png"
                          alt=""
                          className="w-full"
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
                          <div className="m-2">
                            {" "}
                            <img
                              src="https://source.unsplash.com/50x50/?man"
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
                <div className="flex flex-col gap-4">
                  {data.length < 1 ? <h1 className="flex items-center justify-center p-4 text-4xl">No Chapter Currently Available</h1> :
                    data.map((chapter) => (
                      <Link key={chapter._id} to={chapter.url}>
                        <div className="flex cursor-pointer border  bg-[#20b486]/[.4] px-4">
                          <div className="m-2">
                            {" "}
                            <img
                              src="https://source.unsplash.com/50x50/?man"
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
