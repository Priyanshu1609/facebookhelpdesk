import React from 'react'

const ChatBox = () => {
    return (
        <div className="flex flex-col justify-start items-start w-[53%] h-screen border-x-2">
            <div className='flex items-center px-2 py-4 border-b-2  justify-between w-full'>
                <div className='flex items-center'>
                    <p className='font-semibold text-xl ml-2'>Amit RG</p>
                </div>
            </div>

            <div
                className="flex flex-col flex-auto  bg-gray-100  "
            >
                <div className="flex flex-col  overflow-x-auto mb-4">
                    <div className="flex flex-col ">
                        <div className="grid grid-cols-12 gap-y-2">
                            <div className="col-start-1 col-end-8 p-3 rounded-lg">
                                <div className="flex flex-row items-center">
                                    <div
                                        className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                                    >
                                        P
                                    </div>
                                    <div
                                        className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-md"
                                    >
                                        <div>Hey How are you today?</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-start-1 col-end-8 p-3 rounded-lg">
                                <div className="flex flex-row items-center">
                                    <div
                                        className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                                    >
                                        A
                                    </div>
                                    <div
                                        className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-md"
                                    >
                                        <div>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit. Vel ipsa commodi illum saepe numquam maxime
                                            asperiores voluptate sit, minima perspiciatis.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-start-6 col-end-13 p-3 rounded-lg">
                                <div className="flex items-center justify-start flex-row-reverse">
                                    <div
                                        className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                                    >
                                        A
                                    </div>
                                    <div
                                        className="relative mr-3 text-sm bg-white py-2 px-4 shadow rounded-md"
                                    >
                                        <div>I'm ok what about you?</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-start-6 col-end-13 p-3 rounded-lg">
                                <div className="flex items-center justify-start flex-row-reverse">
                                    <div
                                        className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                                    >
                                        A
                                    </div>
                                    <div
                                        className="relative mr-3 text-sm bg-white py-2 px-4 shadow rounded-md"
                                    >
                                        <div>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing. ?
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-start-1 col-end-8 p-3 rounded-lg">
                                <div className="flex flex-row items-center">
                                    <div
                                        className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                                    >
                                        A
                                    </div>
                                    <div
                                        className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-md"
                                    >
                                        <div>Lorem ipsum dolor sit amet !</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-start-6 col-end-13 p-3 rounded-lg">
                                <div className="flex items-center justify-start flex-row-reverse">
                                    <div
                                        className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                                    >
                                        A
                                    </div>
                                    <div
                                        className="relative mr-3 text-sm bg-white py-2 px-4 shadow rounded-md"
                                    >
                                        <div>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing. ?
                                        </div>
                                        <div
                                            className="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500"
                                        >
                                            Seen
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-start-1 col-end-8 p-3 rounded-lg">
                                <div className="flex flex-row items-center">
                                    <div
                                        className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                                    >
                                        A
                                    </div>
                                    <div
                                        className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-md"
                                    >
                                        <div>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Perspiciatis, in.
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* send buttons */}
                <div
                    className="flex flex-row items-center h-16 rounded-md w-full px-4"
                >

                    <div className="flex-grow ml-4">
                        <div className="relative w-full">
                            <input
                                type="text"
                                className="flex w-full border rounded-md focus:outline-none focus:border-indigo-300 pl-4 h-10"
                                placeholder="Write message..."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatBox