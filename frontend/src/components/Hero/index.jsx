import React from 'react'
import heroImg from '../../assets/Hero.jpeg';
const Hero = () => {
  return (
    <div className='flex justify-center items-center flex-col md:flex-row md:max-w-[1480px] mx-auto px-20 my-10 md:item-center justify-around '>
        <div className='md:flex md:flex-col justify-center item-center gap-2'>
            <h2 className='my-4 text-[#20b486]'>
                START TO SUCCESS
            </h2>
            <p className='text-3xl md:text-5xl w-[90vw] md:w-[30vw]'>Access To <span className='text-[#20b486] font-semi-bold'>50+</span> Courses from <span className='text-[#20b486] font-semi-bold'>50</span> youtube channels and <span className='text-[#20b486] font-semi-bold'>350+</span> students</p>
            <p className='my-4 text-light text-gray-500'>Various versions have evolved over the years, sometimes by accident,</p>
            <form className='my-6'>
                <input type="search" placeholder='What do you want to learn?' className=' w-[80vw] md:w-[25vw] shadow-md outline-none px-4 py-4 rounded-md'/>
            </form>
        </div>
        <div className='flex justify-center item-center'>
            <img src={heroImg} alt="hero" className='min-w-[90vw] bg-cover md:min-w-[45vw]'/>
        </div>
    </div>
  )
}

export default Hero