import React from 'react'
import { Link } from 'react-router-dom'
import ExploremoreImg from "../../assets/Exploremore.jpg"
const ExploreMore = () => {
  return (
    <div>
        <section className="text-gray-600 body-font">
        <div className="flex flex-col justify-center items-center mt-24">
              <div className="text-xl md:text-3xl  font-bold uppercase">
                Join our <span className="text-[#20b486]">Community Today</span>
              </div>
              <div className="border-b-4 border-[#20b486] mt-2">
                {" "}
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              </div>
            </div>
  <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded-[20px]" alt="hero" src={ExploremoreImg}/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
    
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-[#20b486]/[0.8] border-0 py-2 px-6 focus:outline-none hover:bg-[#20b489]/[1] rounded text-lg text-[15px] md:text-xl">Explore Courses</button>
        <Link to={'/signup'}>
        
        <button className="ml-4 inline-flex bg-gray-100 border-0 py-4 md:py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-[#20b486] text-[15px] md:text-xl ">Sign up for free</button>
        </Link>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default ExploreMore