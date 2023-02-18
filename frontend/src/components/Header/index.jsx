import {AiOutlineLock} from 'react-icons/ai'

const Header = () => {
  return (
    <div className='md:flex items-center  w-full md:justify-around md:items-center mx-auto  h-[80px] md:shadow-sm '>
        <div >
            <h1 className='text-center text-[#20b486] font-bold text-2xl'>Practice</h1>
        </div>
        <div className='md:flex'>
            <li className='md:flex flex flex-col items-center md:flex-row list-none md:gap-6 text-gray-500 '>
                <ul className='hover:cursor-pointer hover:text-[#20b486] hover:transition-all delay-600 '>Home</ul>
                <ul className='hover:cursor-pointer hover:text-[#20b486] hover:transition-all delay-600'>About</ul>
                <ul className='hover:cursor-pointer hover:text-[#20b486] hover:transition-all delay-600'>Courses</ul>
                <ul className='hover:cursor-pointer hover:text-[#20b486] hover:transition-all delay-600'>Blog</ul>
                <ul className='hover:cursor-pointer hover:text-[#20b486] hover:transition-all delay-600'>Contact</ul>
            </li>
        </div>
        <div className=' flex flex-col md:flex md:flex-row  gap-6 items-center transition duration-500 ease-in-out'>
            <div className='flex item-center md:w-18  justify-center gap-2 px-12 py-2 border border-[#20b486] rounded-md hover:bg-[#20b486] hover:text-white hover:border transition duration-500 ease-in-out'><AiOutlineLock className='text-2xl'/><span>Login</span></div>
            <div className='text-white px-6 md:w-18  border py-2 bg-[#20b486] rounded-md hover:bg-transparent hover:text-[#20b486] hover:border-[#20b486] transition duration-500 ease-in-out'>Sign up for Free</div>
        </div>

    </div>
  )
}

export default Header