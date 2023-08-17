import React from "react";

const InputField = ({ lable, handleChange, name, type, placeholder, value, }) => {
    return (
        <>
            <div className="input-div">
                <label>{lable}</label>
                <input name={name} type={type} placeholder={placeholder} value={value} onChange={handleChange} />
            </div>
        </>
    )
};

export default InputField;
