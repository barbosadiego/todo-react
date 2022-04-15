import React from 'react';
import './FormFild.css'

const FormFild = ({ name, type, label, placeholder, onChange, value }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default FormFild;
