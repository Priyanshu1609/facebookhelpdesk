import ChatBox from '@/components/ChatBox'
import Conversations from '@/components/Conversations'
import ProfileSection from '@/components/ProfileSection'
import SideBar from '@/components/SideBar'
import React from 'react'

const Dashboard = () => {
    return (
        <main className='flex items-center w-full'>
            <SideBar />
            <Conversations />
            <ChatBox />
            <ProfileSection />
        </main>
    )
}

export default Dashboard