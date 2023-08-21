import React from "react";

const InputField = ({ lable, handleChange, ...rest }) => {
    return (
        <>
            <div className="input-div">
                <label>{lable}</label>
                <input onChange={handleChange} {...rest}/>
            </div>
        </>
    )
};

export default InputField;
