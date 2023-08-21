import React, { useState } from "react";
import '../Styles/form.css'
import { useNavigate } from "react-router-dom";
import FormTable from "../Components/FormTable";
import { postEmployee } from "../Services/Api";

const AddData = () => {
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
        navigation('/')
        postEmployee(inputField)
    }
    
    const handleNavigate = () => {
        navigation('/home')
    }

    return (
        <>
            <FormTable handleSubmit={handleSubmit} handleChange={handleChange} inputField={inputField} btnName={'Add'} handleNavigate={handleNavigate} disabled={!inputField.name.length || !inputField.location.length || !inputField.designation.length} />
        </>
    )
};

export default AddData;
