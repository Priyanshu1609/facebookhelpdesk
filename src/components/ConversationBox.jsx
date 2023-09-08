import React from 'react'
import { timeAgoFromISO } from '@/lib/utils'

const ConversationBox = ({ message, pageId, activeMessage, setActiveMessage }) => {


    function getLatestMessage(data) {
        if (!data || data.length === 0) {
            return null; // Return null if data is empty or undefined
        }

        let latestMessage = data[0]; // Initialize with the first message

        for (let i = 1; i < data.length; i++) {
            const currentMessage = data[i];
            if (currentMessage.created_time > latestMessage.created_time) {
                latestMessage = currentMessage; // Update if current message is newer
            }
        }

        return latestMessage;
    }


    const latestMessage = getLatestMessage(message.messages.data);

    return (
        <div onClick={() => setActiveMessage(message)} className={`w-full ${message === activeMessage ? "bg-gray-100 " : "bg-white"} appear h-28 px-4 py-3 text-sm border-b-2 cursor-pointer`}>
            <div className='flex items-start justify-between'>
                <div className='flex space-x-3 items-center'>
                    <input type="checkbox" className="appearance-none rounded-[3px] checked:ring-0 focus:ring-0" />
                    <div className='flex flex-col text-xs '>
                        <p>{message.participants.data[0].name}</p>
                        <p>Facebook DM</p>
                    </div>
                </div>
                <p className='text-xs'>{timeAgoFromISO(message?.updated_time)}</p>
            </div>
            <div className='mt-3 flex items-center justify-between'>
                <div>
                    <p className='font-medium text-sm'>Help Desk</p>
                    <p className='truncate text-xs'>{latestMessage.message}.</p>
                </div>
                <span className='text-sm text-primary'>{message?.unread_count !==0  && message?.unread_count}</span>
            </div>
        </div>
    )
}

export default ConversationBox