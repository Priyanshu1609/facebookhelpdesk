import React from 'react'
import { MdOutlineLocalPhone } from "react-icons/md";
import { CgProfile } from "react-icons/cg"
import { getFirstName, getLastName, getMailId } from '@/lib/utils';
import Skeleton from './UI/Skeleton';

const ProfileSection = ({ activeMessage, pageId, isLoading }) => {
    return (
        <div className="flex flex-col justify-start items-start w-[22%] h-screen border-x-2 bg-[#EFF2F7]">
            <div className='w-full py-6 border-b-2 bg-white '>
                <div className="mx-auto ">
                    <img className="w-20 mx-auto rounded-full  border-8 border-white" src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${activeMessage?.participants.data[0].name}`} alt="" />
                    {/* <img className="w-20 mx-auto rounded-full  border-8 border-white" src="https://www.rattanhospital.in/wp-content/uploads/2020/03/user-dummy-pic.png" alt="" /> */}
                    <div className="text-center mt-2 text-lg font-semibold">
                        {
                            isLoading ? <div className='w-full'>
                                <Skeleton className='h-6 w-24 mx-auto' />
                            </div> :
                                activeMessage?.participants.data[0].name
                        }
                    </div>
                    <div className="text-center text-gray-500 mt font-light text-xs flex items-center justify-center ">
                        <div className='h-2 w-2 rounded-full bg-gray-300 mr-2' />
                        <p className='font-medium'>Offline</p>
                    </div>
                </div>
                <div className='flex items-center justify-center space-x-4 mt-6 text-sm'>
                    <button className='border-2 px-4 py-1 rounded-md w-24 flex items-center justify-center hover:opacity-60'>
                        <MdOutlineLocalPhone className='h-4 mr-1 rotate-90' />
                        Call
                    </button>
                    <button className='border-2 px-4 py-1 rounded-md w-24 flex items-center justify-center hover:opacity-60'>
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
                        <p className='font-medium'>{getMailId(activeMessage?.participants.data[0].name)}</p>
                    </div>
                    <div className='flex items-center justify-between mt-2'>
                        <p className='text-gray-500'>First Name</p>
                        <p className='font-medium'>{getFirstName(activeMessage?.participants.data[0].name)}</p>
                    </div>
                    <div className='flex items-center justify-between mt-2'>
                        <p className='text-gray-500'>Last Name</p>
                        <p className='font-medium'>{getLastName(activeMessage?.participants.data[0].name)}</p>
                    </div>
                    <div className="font-semibold mt-3 leading-6 text-[#1E4D91] hover:text-[#1E4D91] cursor-pointer"> View more details
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProfileSection