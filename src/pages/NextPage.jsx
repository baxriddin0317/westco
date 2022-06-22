import React from 'react'
import Kurslar from "../components/Kurslar"
import Kitoblar from "../components/Kitoblar"
import Login from "../components/Login"
import Nav from "../components/Nav"
import Registratsiya from '../components/Registratsiya'
import { Route, Routes } from 'react-router-dom'

function NextPage({setToken}) {
  return (
    <div className="w-full h-full">
    <Nav />

        <main className="w-full ">
        <Routes>
            <Route path='/' element={<Kurslar />} />
            <Route path='/kitoblar' element={<Kitoblar />} />
            <Route path='/login' element={<Login setToken={setToken} />} />
            <Route path='/sign' element={<Registratsiya setToken={setToken} />} />
        </Routes>
        </main>
  </div>
  )
}

export default NextPage