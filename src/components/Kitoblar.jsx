import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import http from "../services/http/http"

function Kitoblar() {
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);
    const [token] = useState(window.localStorage.getItem('token'))


    useEffect(() => {
        http.get("/user/book?page=1&limit=5")
        .then(res => {
            setLoad(true);
            setData(res.data.data.data);
        })
    }, [])

  return (
    <div className='w-full p-2 flex flex-wrap items-start justify-center md:justify-between'>
        {load ? data.map((d) => (
            <div key={d._id} className="sm:w-1/2 overflow-hidden p-2 md:max-w-sm m-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <Link to="#" className='w-96 h-48 p-2 flex items-center justify-center'>
                    <img className="rounded-t-lg w-full object-cover" src={d.imgUrl} alt="kitob rasmi" />
                </Link>
                <div className="p-5">
                    <Link to="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {d.name}
                        </h5>
                    </Link>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {d.description}
                    </p>
                    <Link to={token ? `/book/${d._id}` : "/login"} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                </div>
            </div>
        )) : <h1 className='font-bold text-2xl text-white'>
                Loading....
            </h1>
        }
    </div>
  )
}

export default Kitoblar