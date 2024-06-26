import React, { useState } from "react";
import CustomInput from "./Common-Componets/customInput";
import "./comp-style.css";
import { useFormData } from "../infoContext";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function Personal_Info() {
  const {formData , setFormData} = useFormData();
  const [name, setName] = useState(formData.name);
  const [email, setEmail] = useState(formData.email);
  const [phone, setPhone] = useState(formData.phone);
  const navigate =useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(name && email && phone){
      setFormData({...formData, name, email, phone})
      const personal_Info = {name, email, phone};
      localStorage.setItem('Personal_Info', JSON.stringify(personal_Info))
      toast.success('Personal Info Saved Successfully')
      navigate('/address_info');
    }else{
      toast.error('Please fill all fields')
    }
    
  }
  return (
    <div className="pi"> 
      <h1>Personal Info</h1>
      <form onSubmit={(e)=>handleSubmit(e)} className="pi-form">
        <CustomInput
          type="text"
          id="name"
          label={"Name"}
          placeholder={"Jacob Jones"}
          value={name}
          onChangeFunc={setName}
          required={true}
        />
        <CustomInput
          type="email"
          id="email"
          label={"Email"}
          placeholder={"jacobjones@email.com"}
          value={email}
          onChangeFunc={setEmail}
          required={true}
        />
        <CustomInput
          type="text"
          id="phone"
          label={"Phone"}
          placeholder={"9562146235"}
          value={phone}
          onChangeFunc={setPhone}
          required={true}
        />
        <button type="submit">Save and Next</button>
      </form>
    </div>
  );
}

export default Personal_Info;
