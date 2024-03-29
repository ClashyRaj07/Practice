import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import BaseUrl  from '../../constant'

const SignUp = () => {
    const navigate = useNavigate();
    const [response, setResponse] = useState('')
    const [isCreated, setIsCreated] = useState(false)
    const [Data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const handleFormChange = (e) => {
        setData((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }
    const RegisterSubmmitHandler = async (e) => {
        e.preventDefault();
        
        await axios.post(`${BaseUrl}/api/auth/createuser`, { ...Data }).then(res => {
            if (res.data.success) {
                setIsCreated(true);
                localStorage.setItem("token",res.data.authToken);
            }
            setResponse(res.data)

        });

    }
    useEffect(() => {
        if (isCreated) {
            navigate('/courses')
        }
        else {

        }

    }, [isCreated, navigate])

    return (
        <div>
            <div className="flex justify-center">
                <div className="flex flex-col justify-center items-center md:flex-row shadow-md rounded-xl max-w-7xl min-h-[30vw] w-[90%]  m-2">
                    <div className=" w-full md:w-2/4">
                        <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0 py-4">

                            <h1 className="font-semibold text-xl md:text-5xl text-gray-600 m-2">Sign Up for Free </h1>

                        </div>
                        <div className="flex flex-col justify-center items-center m-2 space-y-6 md:space-y-8">
                            <div className="">
                                <input type="text" placeholder="Full Name" onChange={handleFormChange} name="name" value={Data.fullName}
                                    className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]" />
                            </div>

                            <div className="">
                                <input type="email" placeholder="Email" onChange={handleFormChange} name="email" value={Data.email}
                                    className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]" />
                            </div>

                            <div className="">
                                <input type="password" placeholder="Password" onChange={handleFormChange} name="password" value={Data.password}
                                    className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]" />
                            </div>


                            <div className="">
                                <input type="password" placeholder="Confirm password" onChange={handleFormChange} name="confirmPassword" value={Data.confirmPassword}
                                    className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]" />
                            </div>

                        </div>
                        <div className="text-center mt-7">
                            <button onClick={RegisterSubmmitHandler}
                                className=" px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-gradient-to-l from-[#20b486] to-emerald-400  font-medium m-2 mb-6 ">Create Account</button>
                        </div>

                    </div>
                    <div
                        className="h-[80%] w-full md:w-1/3  bg-gradient-to-l from-[#20b486] to-emerald-400  items-center flex justify-center rounded-md">

                        <div className="text-white text-base font-semibold text-center my-10 space-y-2 m-2">
                            <h1 className="text-4xl">Already have an account ?</h1>
                            <h1 className="">Login  and discover new oppurtinities here</h1><Link to={'/login'}>
                                <button className="bg-white rounded-2xl px-4 text-[#20b486] hover:text-[#114736]  py-1">Login</button></Link>
                        </div>

                    </div>

                </div>
            </div>
            {/* <script src="https://cdn.tailwindcss.com"></script>
                                        <script src="https://kit.fontawesome.com/290d4f0eb4.js" crossorigin="anonymous"></script>
                                        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
                                        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script> */}

        </div>
    )
}

export default SignUp