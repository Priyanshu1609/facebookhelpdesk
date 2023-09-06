import React from 'react'

const ConversationBox = () => {
    return (
        <div className='w-full bg-gray-100 h-28 px-4 py-3 text-sm border-b-2'>
            <div className='flex items-start justify-between'>
                <div className='flex space-x-3 items-center'>
                    <input type="checkbox" className="appearance-none rounded-[3px] checked:ring-0 focus:ring-0" />
                    <div className='flex flex-col text-xs '>
                        <p>Amit RG</p>
                        <p>Facebook DM</p>
                    </div>
                </div>
                <p className='text-xs'>10m</p>
            </div>
            <div className='mt-3'>
                <p className='font-medium text-sm'>Amazon Product</p>
                <p className='truncate text-xs'>Hey there, I probably did one the best ...</p>
            </div>
        </div>
    )
}

export default ConversationBox