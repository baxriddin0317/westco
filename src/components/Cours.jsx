import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import http from '../services/http/http';

function Cours() {
    const {id} = useParams();
    const [book, setBook] = useState();
    const [load, setLoad] = useState(false);

    useEffect(() => {
        http.get("/user/course?limit=5&page=1")
        .then(res => {
            setBook(res.data.data.data.find(d => d._id === id));
            setLoad(true);
        })
    }, [id])
    
  return (
    <div className='max-w-4xl mx-auto'>
        {load ?  <div className="rounded overflow-hidden shadow-lg">
            <img className="w-full" src={book.imgUrl} alt="img url" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{book.name}</div>
                <p className="text-gray-700 text-base">
                {book.description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
            
            </div>
        </div> : <h1 className='font-bold text-2xl'>
                    Loading....
                </h1>
        }
    </div>
  )
}

export default Cours