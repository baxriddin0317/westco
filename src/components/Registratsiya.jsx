import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import http from '../services/http/http';

function Registratsiya({setToken}) {
    const  navigation = useNavigate();
    const fullNameRef = useRef();
    const passwordRef = useRef();
    const [war, setWar] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        http.post('/user/sign-up', {
            "fullName": fullNameRef.current.value,
            "password": passwordRef.current.value
        })
        .then((res) => {
           setToken(res.data.data.token);
           window.localStorage.setItem("token", res.data.data.token);
           navigation('/')
        }).catch(e => {
            setWar(e.message)
        })
    }

  return (
    <div className='max-w-7xl h-screen mx-auto my-4'>
        <div className="p-4 max-w-xl mx-auto bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
        
            <form onSubmit={handleSubmit}>
                {war &&  <div className="bg-red-100 mb-4 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <p className="font-bold">Informational message</p>
                        <p className="text-sm">{war}</p>
                    </div>}
                <div className="relative z-0 w-full mb-6 group">
                    <input 
                        type="text"  
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                        placeholder=" "
                        ref={fullNameRef}
                        required />
                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full name</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input 
                        type="password" 
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                        placeholder=" "
                        ref={passwordRef}
                        required />
                    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                </div>
                {/* <div className="relative z-0 w-full mb-6 group">
                    <input type="password" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                </div> */}

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
            
        </div>
    </div>
  )
}

export default Registratsiya