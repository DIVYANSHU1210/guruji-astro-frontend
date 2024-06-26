import { useState } from 'react'
import Personal_Info from './Components/personal_info'
import { Routes, Route } from 'react-router-dom'
import Address_Info from './Components/address_info'
import Review_Info from './Components/review_info'
import Navbar from './Components/navbar'
import Submitted from './Components/submitted'
import { ToastContainer } from "react-toastify";

function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Personal_Info/>}/>
        <Route path='/address_info' element={<Address_Info/>}/>
        <Route path='/review_info' element={<Review_Info/>}/>
        <Route path='/submitted' element={<Submitted/>}></Route>
      </Routes>
    </>
  )
}

export default App
