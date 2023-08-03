import React, { useState } from "react";
import '../Styles/form.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Form = () => {
    const navigation = useNavigate()
    const [inputField, setInputField] = useState({
        name: "",
        location: "",
        designation: "",
    });

    const handleChange = (e) => {
        setInputField({
            ...inputField,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputField);
        navigation('/')
        postData()
    }

    const postData = () => {
        try {
            const postEmpData = axios.post('http://localhost:4000/employees', inputField)
            console.log(postEmpData);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="employee-form">
                <div class="container">
                    <h1 class="title">Form Table</h1>

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
                        <button type="submit" className="btn" disabled={!inputField.name.length || !inputField.location.length || !inputField.designation.length}>Add Employee</button>
                    </form>
                    <button className="btn" onClick={() => navigation('/')} style={{ backgroundColor: 'red' }}>Cancel</button>
                </div>
            </div>
        </>
    )
};

export default Form;
