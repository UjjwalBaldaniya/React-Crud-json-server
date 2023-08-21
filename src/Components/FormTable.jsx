import React from "react";
import InputField from "./InputField";

const inputs = [
    {
        name: "name",
        type: "text",
        placeholder: "Enter name",
        lable: "Name of Employee :- "
    },
    {
        name: "location",
        type: "text",
        placeholder: "Enter location",
        lable: "location :- "
    },
    {
        name: "designation",
        type: "text",
        placeholder: "Enter designation",
        lable: "designation :- "
    },
]

const FormTable = ({ handleSubmit, handleChange, inputField, btnName, disabled, handleNavigate }) => {
    return (
        <>
            <div className="employee-form">
                <div className="container">
                    <h1 className="title">Employee Form</h1>

                    <form id="form" onSubmit={handleSubmit}>
                        {
                            inputs.map((input,index) => (
                                <InputField key={index+1} name={input.name} type={input.type} placeholder={input.placeholder} lable={input.lable} value={inputField[input.name]} handleChange={handleChange} />
                            ))
                        }
                        <button type="submit" className="btn" disabled={disabled}>{btnName} Employee Data</button>
                    </form>

                    <button className="btn" onClick={handleNavigate} style={{ backgroundColor: '#ff1d18' }}>Cancel</button>
                </div>
            </div>
        </>
    )
};

export default FormTable;