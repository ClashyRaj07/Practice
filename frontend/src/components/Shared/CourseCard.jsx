import React from 'react'
import {Link} from 'react-router-dom'
const CourseCard = ({data}) => {
  return (
   <Link to={'/dsa'}> <div className='relative md:rounded-lg w-[20rem] hover:shadow-md h-[22rem] hover:scale-110 overflow-hidden transition ease-in-out duration-500 cursor-pointer'>
        <span className='absolute top-3 left-3 px-6 py-2 bg-[#FFFF]/[0.8] rounded-md'>DSA</span>
        <img src="https://tse4.mm.bing.net/th?id=OIP.UQkj4tPcBRMYAhrpVF6gxgHaEf&pid=Api&P=0" className='rounded-[14px 0 14px 0]' alt="" />
        <p className='my-4 px-2 text-2xl text-[#363A3D]'>Lorem ipsum dolora ffsit...</p>
        <div className='my-4 px-2 text-2xl text-[#363A3D]'>Views: <span className='text-[#20b486]'>350</span></div>
    </div>
    </Link>
  )
}

export default CourseCard