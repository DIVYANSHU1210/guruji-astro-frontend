import React, { useState } from "react";
import CustomInput from "./Common-Componets/customInput";
import "./comp-style.css";
import { useFormData } from "../infoContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Address_Info() {
  const { formData, setFormData } = useFormData();
  const [address_1, setAddress_1] = useState(formData.address_1);
  const [address_2, setAddress_2] = useState(formData.address_2);
  const [city, setCity] = useState(formData.city);
  const [state, setState] = useState(formData.state);
  const [zip, setZip] = useState(formData.zip);
  const navigate = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(address_1 &&  city && state && zip){
      setFormData({...formData, address_1, address_2, city, state, zip});
      const address_info = {address_1, address_2, city, state, zip}
      localStorage.setItem('Address_Info', JSON.stringify(address_info));
      toast.success('Address Info Saved Successfully')
      navigate('/review_info');
    }
    else{
      toast.error('please fill all mendatory fields');
    }
  
  }  

  return (
    <div className="ai">
      <h1>Address Info</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="ai-form">
        <CustomInput
          type="text"
          id="address_1"
          label={"Address Line 1"}
          placeholder={"Beverly Hills Colorado"}
          value={address_1}
          onChangeFunc={setAddress_1}
          required={true}
        />
        <CustomInput
          type="text"
          id="address_2"
          label={"Address Line 2"}
          placeholder={"Chicago Calafornia"}
          value={address_2}
          onChangeFunc={setAddress_2}
        />
        <CustomInput
          type="text"
          id="City"
          label={"City"}
          placeholder={"Delhi"}
          value={city}
          onChangeFunc={setCity}
          required={true}
        />
        <CustomInput
          type="text"
          id="State"
          label={"State"}
          placeholder={"Maharashtra"}
          value={state}
          onChangeFunc={setState}
          required={true}
        />
        <CustomInput
          type="text"
          id="zip"
          label={"Zip-Code"}
          placeholder={"123456"}
          value={zip}
          onChangeFunc={setZip}
          required={true}
        />
        <button type='submit'>Save and Next</button>

      </form>
    </div>
  );
}

export default Address_Info;
