import React, { useEffect } from 'react'
import { GrStatusGood } from "react-icons/gr";
import { ToastContainer, toast } from 'react-toastify';

function Submitted() {

  useEffect(()=>{
    toast.success('form Submitted')
  }, [])
  return (
    <div className='submitted'>
      <div>
        <GrStatusGood style={{color:'green' , fontSize:'3.5rem'}}/>
        <h1>Form Submitted</h1>
      </div>
    </div>
  )
}

export default Submitted