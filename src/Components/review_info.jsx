import React, { useEffect, useState } from "react";
import CustomInput from "./Common-Componets/customInput";
import { useFormData } from "../infoContext";
import { useNavigate } from "react-router-dom";

function Review_Info() {
  const {formData} = useFormData();

  return (
    <div className="ri">
      <h1>Review Info</h1>
      <div>
        <h2>Personal Info</h2>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Phone: {formData.phone}</p>
      </div>
      <div>
        <h2>Address Info</h2>
        <p>Address Line 1: {formData.address_1}</p>
        <p>Address Line 2: {formData.address_2}</p>
        <p>City: {formData.city}</p>
        <p>State: {formData.state}</p>
        <p>Zip-Code: {formData.zip}</p>
      </div>
    </div>
  );
}

export default Review_Info;
