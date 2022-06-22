import React, { useRef, useState } from 'react'
import {Link, useNavigate} from "react-router-dom"

import http from "../services/http/http"

function Login({setToken}) {
    const fullNameRef = useRef();
    const passwordRef = useRef();
    const  navigation = useNavigate();
    const [war, setWar] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        http.post('/user/sign-in', {
            fullName: fullNameRef.current.value,
            password: passwordRef.current.value
        })
        .then((res) => {
            setToken(res.data.data.token);
            window.localStorage.setItem("token", res.data.data.token);
            navigation('/');
        }).catch(e => {
            setWar(e.message)
        })
    }

  return (
    <div className='max-w-7xl h-screen mx-auto my-4'>
        <div className="p-4 max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-6" onSubmit={handleSubmit}>
                {war &&  <div className="bg-red-100 mb-4 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <p className="font-bold">Informational message</p>
                    <p className="text-sm">{war}</p>
                </div>}

                <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
                    <input type="text" ref={fullNameRef}  id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required=""/>
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                    <input type="password" ref={passwordRef} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required=""/>
                </div>
                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Not registered? <Link to="/sign" className="text-blue-700 hover:underline dark:text-blue-500">Create account</Link>
                </div>
            </form>
        </div>

    </div>
  )
}

export default Login