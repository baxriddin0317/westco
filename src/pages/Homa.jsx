import React from 'react'
import Kurslar from "../components/Kurslar"
import Kitoblar from "../components/Kitoblar"
import Navbar from "../components/Navbar"
import { Route, Routes } from 'react-router-dom'
import Cours from '../components/Cours'
import Book from '../components/Book'

function Homa() {
  return (
    <div className="w-full h-full">
    <Navbar />

        <main className="max-w-7xl mx-auto">
        <Routes>
            <Route path='/' element={<Kurslar />} />
            <Route path='/kitoblar' element={<Kitoblar />} />
            <Route path='/cours/:id' element={<Cours />} />
            <Route path='/book/:id' element={<Book />} />
        </Routes>
        </main>
  </div>
  )
}

export default Homa