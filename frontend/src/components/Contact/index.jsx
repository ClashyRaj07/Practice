import React from 'react'

const ContactUs = () => {
  return (
    <div>
          <div className="grid md:block  ">
<div className="bg-gradient-to-r from-[#20b486] to-[#20b486] h-72 flex justify-center w-full">
    <div className="mt-10 text-white text-4xl font-bold">GET IN TOUCH</div>
</div>
<div className="bg-white h-auto flex justify-center ">
    <div className="bg-white  -mt-40 w-[90%] md:w-1/2 grid lg:flex justify-center rounded-md shadow-2xl">
        <div className="md:w-3/4 lg:w-2/3 ">
            <div className="text-lg font-medium text-[#20b486] m-6 ">Drop a Message</div>
            <div className=" flex lg:flex-row flex-col">
                <div className="m-10">
                    <p className="text-sm text-gray-500">Full Name</p> <input
                        className="border-b-2 border-stone-400 text-gray-500 w-45 outline-none" />
                    <p className="text-sm text-gray-500 mt-6">E-mail</p> <input
                        className="border-b-2 border-stone-400 text-gray-500 w-45 outline-none" />
                </div>
                <div className="m-10 ">
                    <p className="text-sm text-gray-500">Phone</p> <input
                        className="border-b-2 border-stone-400 text-gray-500 w-45 outline-none" />
                    <p className="text-sm text-gray-500 mt-6">Subject</p> <input
                        className="border-b-2 border-stone-400 text-gray-500 w-45 outline-none" />
                </div>
            </div>
            <div className="m-10 mb-20 ">
                <p className="text-sm text-gray-500 mt-6 ">Message</p> <input
                    className="border-b-2 border-stone-400 text-gray-500 w-45 outline-none"  />
                <div
                    className="my-4 mt-6  pt-1 pb-1 bg-[#1e8665] rounded-md text-white font-medium w-45  text-center outline-none cursor-pointer hover:bg-[#23926f] ">
                    Send Message</div>
            </div>
        </div>
        
    </div>
</div>
</div>
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </div>
  )
}

export default ContactUs