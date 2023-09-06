import React from 'react'

import { HiOutlineBars3CenterLeft } from "react-icons/hi2"
import { FaArrowRotateRight } from "react-icons/fa6"
import ConversationBox from './ConversationBox'

const Conversations = () => {
    return (
        <div className='flex flex-col items-center w-[25%] h-screen'>
            <div className='flex items-center px-2 py-4 border-b-2 justify-between w-full'>
                <div className='flex items-center'>
                    <HiOutlineBars3CenterLeft className='w-4 h-4 font-semibold rotate-0' />
                    <p className='font-semibold text-xl ml-2'>Conversations</p>
                </div>
                <FaArrowRotateRight className='text-gray-600 w-4 h-4' />
            </div>

            <ConversationBox />
            <ConversationBox />
        </div>
    )
}

export default Conversations