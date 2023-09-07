import React from 'react'

import { MdPeopleAlt } from "react-icons/md";
import { GiNetworkBars } from "react-icons/gi";
import { BsFillInboxFill } from "react-icons/bs";
import { useRouter } from 'next/router';

const SideBar = () => {
    const router = useRouter();
    return (
        <div className="flex flex-col items-center w-12 h-screen py-8 space-y-8 bg-primary">
            <button onClick={() => router.push("/")} href="#">
                <img className="w-auto h-6 hover:opacity-60" src="/logo.jpg" alt="" />
            </button>

            <a href="#" className="p-1.5 w-full h-12 flex items-center justify-center text-primary transition-colors duration-200 bg-white">
                <BsFillInboxFill className='w-6 h-6 rotate-0' />
            </a>

            <a href="#" className="p-1.5 text-white transition-colors duration-200  rounded-lg">
                <MdPeopleAlt className='w-6 h-6 rotate-0' />
            </a>

            <a href="#" className="p-1.5 text-white transition-colors duration-200  rounded-lg">
                <GiNetworkBars className='w-6 h-6 rotate-0' />
            </a>

            <a href="#" className="p-1.5 text-white transition-colors duration-200  rounded-lg">
                <MdPeopleAlt className='w-6 h-6 rotate-0' />
            </a>


        </div>
    )
}

export default SideBar