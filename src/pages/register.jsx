import React, { useState } from 'react'
import { useUserContext } from '@/context/UserContext';
import { useRouter } from 'next/router';
import axios from 'axios';

const Register = () => {
    const router = useRouter();
    const { user } = useUserContext();


    const [isLoading, setIsLoading] = useState(false);
    const [userDetails, setUserDetails] = useState({
        email: "",
        password: "",
        name: ""
    })

    const handleChange = (e) => {
        setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value
        })
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);

            let data = JSON.stringify({
                "username": userDetails.name,
                "email": userDetails.email,
                "password": userDetails.password
            });

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'https://facebookhelpdeskbackend.vercel.app/api/auth/register',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };


            const res = await axios.request(config);
            setUser(res.data.user);
            setAccessToken(res.data.accessToken);

            localStorage.setItem("user", JSON.stringify(res.data.user));
            localStorage.setItem("accessToken", JSON.stringify(res.data.accessToken));

            router.push("/")

        } catch (error) {
            console.error(error);
            alert(error.response.data);
        } finally {
            setIsLoading(false);
        }
    }


    useEffect(() => {
        if (user) {
            router.push("/");
        }

    }, [user])

    return (
        <main className='bg-[#1E4D91] h-screen w-full flex items-center justify-center'>
            <div className="flex  flex-col justify-center px-6 pt-10 pb-6 lg:px-8 bg-white rounded-xl mx-4 sm:max-w-sm sm:w-full">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className=" text-center text-xl font-medium leading-9 tracking-tight text-gray-900">Create Account</h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-3" action="#" method="POST">
                        <div>
                            <label for="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                            <div className="mt-2">
                                <input value={userDetails.name} onChange={(e) => handleChange(e)} id="name" name="name" type="text" autoComplete="name" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#1E4D91] sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div className="mt-2">
                                <input value={userDetails.email} onChange={(e) => handleChange(e)} id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#1E4D91] sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-[#1E4D91] hover:text-[#1E4D91]">Forgot password?</a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input value={userDetails.password} onChange={(e) => handleChange(e)} id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#1E4D91] sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <button onClick={(e) => handleRegister(e)} type="submit" className="hover:opacity-60 mt-10 flex w-full justify-center rounded-md bg-[#1E4D91] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#1E4D91] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E4D91]">{isLoading ? "Loading.." : "Register"}</button>
                        </div>
                    </form>


                    <p className="mt-10 text-center text-sm text-gray-500">
                        <span className='mr-1'>
                            Already have an account?
                        </span>
                        <button onClick={() => router.push("/login")} className="hover:opacity-60 font-semibold leading-6 text-[#1E4D91] hover:text-[#1E4D91]"> Login</button>
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Register