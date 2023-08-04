import React, { useState } from "react";
import '../Styles/form.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FormTable from "../Components/FormTable";

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
            <FormTable handleSubmit={handleSubmit} handleChange={handleChange} inputField={inputField} name={'Add'} disabled={!inputField.name.length || !inputField.location.length || !inputField.designation.length} />
        </>
    )
};

export default AddData;
