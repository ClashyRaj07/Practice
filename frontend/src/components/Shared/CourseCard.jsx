import React from 'react'

const CourseCard = ({data}) => {
  return (
    <div className='relative md:rounded-lg w-[20rem] '>
        <span className='absolute top-3 left-3 px-6 py-2 bg-[#FFFF]/[0.8] rounded-md'>DSA</span>
        <img src="https://tse4.mm.bing.net/th?id=OIP.UQkj4tPcBRMYAhrpVF6gxgHaEf&pid=Api&P=0" className='rounded-[14px]' alt="" />
        <p className='my-4 text-2xl text-[#363A3D]'>Lorem ipsum dolora ffsit...</p>
        <div className='my-4 text-2xl text-[#363A3D]'>Views: <span className='text-[#20b486]'>350</span></div>
    </div>
  )
}

export default CourseCard