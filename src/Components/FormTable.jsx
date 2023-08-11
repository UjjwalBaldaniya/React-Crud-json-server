import React from "react";

const FormTable = ({ handleSubmit, handleChange, inputField, name, disabled, handleNavigate }) => {
    return (
        <>
            <div className="employee-form">
                <div class="container">
                    <h1 class="title">Employee Form</h1>

                    <form id="form" onSubmit={handleSubmit}>
                        <div class="input-div">
                            <label>Name of Employee :- </label>
                            <input type="text" placeholder="Enter name" name="name" value={inputField.name} onChange={handleChange} />
                        </div>
                        <div class="input-div">
                            <label>Location :- </label>
                            <input type="text" placeholder="Enter location" name="location" value={inputField.location} onChange={handleChange} />
                        </div>
                        <div class="input-div">
                            <label>Designation :- </label>
                            <input type="text" placeholder="Enter designation" name="designation" value={inputField.designation} onChange={handleChange} />
                        </div>
                        <button type="submit" className="btn" disabled={disabled}>{name} Employee Data</button>
                    </form>
                    
                    <button className="btn" onClick={handleNavigate} style={{ backgroundColor: '#ff1d18' }}>Cancel</button>
                </div>
            </div>
        </>
    )
};

export default FormTable;