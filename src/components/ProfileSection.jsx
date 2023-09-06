import React from 'react'
import { MdOutlineLocalPhone } from "react-icons/md";
import { CgProfile } from "react-icons/cg"

const ProfileSection = () => {
    return (
        <div className="flex flex-col justify-start items-start w-[25%] h-screen border-x-2 bg-gray-100">
            <div className='w-full py-6 border-b-2 bg-white '>
                <div className="mx-auto ">
                    <img className="w-20 mx-auto rounded-full  border-8 border-white" src="https://avatars.githubusercontent.com/u/67946056?v=4" alt="" />
                    <div className="text-center mt-2 text-lg font-semibold">Ajo Alex</div>
                    <div className="text-center text-gray-500 mt font-light text-xs flex items-center justify-center ">
                        <div className='h-2 w-2 rounded-full bg-gray-300 mr-2' />
                        <p className='font-medium'>Offline</p>
                    </div>
                </div>
                <div className='flex items-center justify-center space-x-4 mt-6 text-sm'>
                    <button className='border-2 px-4 py-1 rounded-md w-24 flex items-center justify-center'>
                        <MdOutlineLocalPhone className='h-4 mr-1 rotate-90' />
                        Call
                    </button>
                    <button className='border-2 px-4 py-1 rounded-md w-24 flex items-center justify-center'>
                        <CgProfile className='h-4 mr-1' />
                        Profile
                    </button>
                </div>
            </div>

            <div className='p-3 w-full text-sm'>
                <div className='bg-white w-full h-full p-3 border-2 rounded-md'>
                    <p className='font-semibold'>Customer details</p>
                    <div className='flex items-center justify-between mt-2'>
                        <p className='text-gray-500'>Email</p>
                        <p className='font-medium'>amit@richpanel.com</p>
                    </div>
                    <div className='flex items-center justify-between mt-2'>
                        <p className='text-gray-500'>First Name</p>
                        <p className='font-medium'>Amit</p>
                    </div>
                    <div className='flex items-center justify-between mt-2'>
                        <p className='text-gray-500'>Last Name</p>
                        <p className='font-medium'>RG</p>
                    </div>
                    <div className="font-semibold mt-3 leading-6 text-[#1E4D91] hover:text-[#1E4D91]"> View more details
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProfileSection