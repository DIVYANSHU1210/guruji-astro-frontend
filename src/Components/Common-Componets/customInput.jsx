import React from "react";
import './common-comp-style.css'
function CustomInput({
  type,
  id,
  label,
  placeholder,
  value,
  onChangeFunc,
  required,
}) {
  return (
    <div className="custom-input">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChangeFunc(e.target.value)}
        required={required}
      />
    </div>
  );
}

export default CustomInput;
