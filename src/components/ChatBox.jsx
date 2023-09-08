import React, { useEffect, useRef, useState } from 'react'

import { Loader, getFirstLetter, timeFormat } from '@/lib/utils'
import { useSession } from 'next-auth/react'
import axios from 'axios'
import Skeleton from './UI/Skeleton'


const MessageSent = ({ username, message, time }) => (
    <div className="col-start-1 col-end-8 px-3 pt-2 rounded-lg">
        <div className="flex flex-row items-center">
            <div
                className="mr-3 -mt-4 flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
            >
                {getFirstLetter(username)}
            </div>
            <div>

                <div
                    className=" text-sm bg-white py-2 px-4 shadow rounded-md"
                >
                    <div className='font-medium'>{message}</div>
                </div>
                <div className='w-full text-[0.5rem] pt-1  px-3'>{username}{" - "}{timeFormat(time)}</div>
            </div>
        </div>
    </div>
)

const MessageReceived = ({ username, message, time }) => (
    <div className="col-start-6 col-end-13 px-3 pt-6 w-full rounded-lg ">
        <div className="flex items-center justify-start flex-row-reverse">
            <div
                className="flex items-center -mt-4  justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
            >
                {getFirstLetter(username)}
            </div>
            <div className=''>

                <div
                    className=" mr-3 text-sm bg-white py-2 px-4 shadow rounded-md"
                >
                    <div className='font-medium'>{message}</div>
                </div>
                <div className='w-full text-[0.5rem] pt-1  px-3'>{username}{" - "}{timeFormat(time)}</div>
            </div>
        </div>
    </div>
)

const ChatBox = ({ activeMessage, pageId, fetchPageDetails, isLoading: messageLoading }) => {
    // console.log({ activeMessage });

    const messages = activeMessage?.messages.data.sort((a, b) => new Date(a.created_time) - new Date(b.created_time));
    const { data: session, status } = useSession();

    const [message, setMessage] = useState("");
    const divRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (divRef.current) {
            divRef.current.scrollIntoView(
                {
                    behavior: 'smooth',
                    block: 'end',
                    inline: 'nearest'
                })
        }
    }, [activeMessage]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        if (!message) return;
        try {
            let configToken = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `https://graph.facebook.com/v17.0/me/accounts?access_token=${session?.accessToken}`,
                headers: {}
            };

            const response = await axios.request(configToken);

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: `https://graph.facebook.com/v17.0/${pageId}/messages?recipient=%7Bid%3A${activeMessage?.participants.data[0].id}%7D&message=%7B%20%22text%22%3A%20%22${encodeURIComponent(message)}%22%20%7D&messaging_type=RESPONSE&access_token=${response.data.data[0].access_token}`,
                headers: {}
            };

            const res = await axios.request(config);
            console.log(res.data);
            await fetchPageDetails();
            setMessage("");
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }


    return (
        <div className="flex flex-col justify-start items-start w-[53%] h-screen border-x-2">
            <div className='flex items-center px-2 py-4 h-[3.9rem] border-b-2  justify-between w-full'>
                <div className='flex items-center'>
                    <p className='font-semibold text-xl ml-2'>{activeMessage?.participants.data[0].name}</p>
                </div>
            </div>

            <div

                className="flex flex-col flex-auto  bg-gray-100  w-full overflow-y-scroll "
            >
                <div className="flex flex-col   mb-4 w-full">
                    <div className="flex flex-col ">
                        <div ref={divRef} className="grid grid-cols-12 gap-y-0">

                            {
                                messageLoading ? <div className='w-full'>
                                    <Skeleton className='col-start-1 col-end-8 p-3 rounded-lg h-12  w-96 ' />
                                </div> :
                                    messages?.map((message, index) => (
                                        message.from.id === pageId ?
                                            <MessageReceived key={index} time={message.created_time} username={message.from.name} message={message.message} />
                                            :
                                            <MessageSent time={message.created_time} key={index} username={message.from.name} message={message.message} />
                                    ))
                            }


                        </div>
                    </div>
                </div>
                {/* send buttons */}
                <form
                    className="flex flex-row items-center mt-auto h-16 rounded-md w-full px-4"
                    onSubmit={(e) => handleSendMessage(e)}
                >

                    <div className="flex-grow mb-2">
                        <div className="relative w-full flex">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="flex w-full border rounded-md focus:outline-none focus:border-indigo-300 pl-4 h-10"
                                placeholder="Write message..."
                            />

                            <button
                                type='submit'
                                className=" w-24 flex items-center justify-center bg-primary ml-2 rounded-xl text-white px-4 py-1 flex-shrink-0 pb hover:opacity-60"
                            >
                                {isLoading ?
                                    <Loader /> :
                                    <>
                                        <span>Send</span>
                                        <span className="ml-2 mb-1">
                                            <svg
                                                class="w-4 h-4 transform rotate-45"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                                ></path>
                                            </svg>
                                        </span>
                                    </>}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ChatBox