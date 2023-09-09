import Image from 'next/image'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import { useSession, getProviders, signOut, signIn, ClientSafeProvider, LiteralUnion } from 'next-auth/react';
import { useUserContext } from '@/context/UserContext';

export default function Home() {

  const router = useRouter();
  const [providers, setproviders] = useState();
  const { data: session, status } = useSession();
  const { user } = useUserContext();


  useEffect(() => {
    const setTheProviders = async () => {
      const setupProviders = await getProviders();
      setproviders(setupProviders);
    };
    setTheProviders();
  }, []);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user])

  let loaded = false;
  useEffect(() => {
    if (!loaded) {
      router.prefetch("/dashboard");
      loaded = true;
    }
  }, [])



  return (
    <main
      className='bg-[#1E4D91] h-screen w-full flex items-center justify-center'
    >
      {
        (status !== "authenticated") ? (
          <div className='flex  flex-col justify-center px-6 pt-10 pb-6 lg:px-8 bg-white rounded-xl mx-4 sm:max-w-sm sm:w-full text-center'>
            <p>Facebook Page Integration</p>

            <button onClick={() => signIn("facebook")} type="submit" className="hover:opacity-60 mt-10 flex w-full justify-center rounded-md bg-[#1E4D91] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#1E4D91] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E4D91]">{status === 'loading' ? "Loading .." : "Connect Page"}</button>
          </div>
        ) :
          <div className='flex  flex-col justify-center px-6 pt-10 pb-6 lg:px-8  bg-white rounded-xl mx-4 sm:max-w-sm sm:w-full text-center'>
            <p>Facebook Page Integration</p>
            <p className='mt-2'>Integrated Page : <span className='font-semibold'>Help Desk Business</span></p>
            <button onClick={() => signOut()} type="submit" className="hover:opacity-60 mt-10 flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700">{status === 'loading' ? "Loading .." : "Delete Integration"}</button>
            <button onClick={() => router.push("/dashboard")} type="submit" className="hover:opacity-60 mt-4 flex w-full justify-center rounded-md bg-[#1E4D91] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#1E4D91] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E4D91]">{status === 'loading' ? "Loading .." : "Reply To Messages"}</button>
          </div>
      }


    </main>
  )
}
