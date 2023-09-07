import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSession } from 'next-auth/react'

import ChatBox from '@/components/ChatBox'
import Conversations from '@/components/Conversations'
import ProfileSection from '@/components/ProfileSection'
import SideBar from '@/components/SideBar'
import { useUserContext } from '@/context/UserContext'
import { useRouter } from 'next/router'

// { "text": "Hello, new customer!" }

const Dashboard = () => {
    const { data: session, status } = useSession();
    const { user } = useUserContext();
    const router = useRouter();

    const [messages, setMessages] = useState([]);
    const [activeMessage, setActiveMessage] = useState(null);
    const [pageId, setPageId] = useState(null);

    console.log({ activeMessage });

    const fetchPageDetails = async () => {
        if (!session?.accessToken) return;
        try {
            console.log("called fetch details")
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `https://graph.facebook.com/v17.0/me/accounts?access_token=${session?.accessToken}`,
                headers: {}
            };

            const res = await axios.request(config);
            setPageId(res.data.data[0].id);

            let messageConfig = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `https://graph.facebook.com/v17.0/${res.data.data[0].id}/conversations?fields=participants%2Cunread_count%2Csubject%2Cupdated_time%2Cid%2Cmessages%7Bcreated_time%2Cfrom%2Cid%2Cis_unsupported%2Cmessage%2Cto%7D%2Cmessage_count%2Clink%2Cname%2Csenders%2Cis_subscribed&&access_token=${res.data.data[0].access_token}`,
                headers: {}
            };

            const data = await axios.request(messageConfig);

            setMessages(data.data.data);
            setActiveMessage(data.data.data[0]);


        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchPageDetails()
    }, [session?.accessToken])

    useEffect(() => {
        if (!user) {
            router.push("/login");
        }
    }, [user])

    return (
        <main className='flex items-center w-full'>
            <SideBar />
            <Conversations messages={messages} activeMessage={activeMessage} setActiveMessage={setActiveMessage} pageId={pageId} fetchPageDetails={fetchPageDetails} />
            <ChatBox activeMessage={activeMessage} pageId={pageId} fetchPageDetails={fetchPageDetails} />
            <ProfileSection activeMessage={activeMessage} pageId={pageId} />
        </main>
    )
}

export default Dashboard