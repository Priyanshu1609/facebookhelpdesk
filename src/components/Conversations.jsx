import React from 'react'

import { HiOutlineBars3CenterLeft } from "react-icons/hi2"
import { FaArrowRotateRight } from "react-icons/fa6"
import ConversationBox from './ConversationBox'
import Skeleton from './UI/Skeleton'
import { cn } from '@/lib/utils'

const Conversations = ({ messages, activeMessage, setActiveMessage, pageId, fetchPageDetails, isLoading }) => {

    console.log(messages)

    return (
        <div className='flex flex-col items-center w-[25%] h-screen'>
            <div className='flex items-center px-2 py-4 border-b-2 justify-between w-full'>
                <div className='flex items-center'>
                    <HiOutlineBars3CenterLeft className='w-4 h-4 font-semibold rotate-0' />
                    <p className='font-semibold text-xl ml-2'>Conversations</p>
                </div>
                <FaArrowRotateRight onClick={() => fetchPageDetails()} className={cn(`text-gray-600 w-4 h-4 cursor-pointer ${isLoading && "animate-spin"}`)} />
            </div>

            {
                isLoading ? <div className='w-full'>
                    <Skeleton className='h-28 w-full border-b-2 ' />
                    <Skeleton className='h-28 w-full border-b-2 ' />
                    <Skeleton className='h-28 w-full border-b-2 ' />
                </div> :
                    messages.map((message, index) => (

                        <ConversationBox key={index} message={message} pageId={pageId} activeMessage={activeMessage} setActiveMessage={setActiveMessage} />
                    ))
            }
        </div>
    )
}

export default Conversations