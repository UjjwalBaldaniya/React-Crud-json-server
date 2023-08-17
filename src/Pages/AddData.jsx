import React, { useState } from "react";
import '../Styles/form.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FormTable from "../Components/FormTable";
import { getUrl } from "../Services/Employees";

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
        // console.log(inputField);
        navigation('/')
        postData()
    }

    const postData = async () => {
        try {
            const postEmpData = await axios.post(`${getUrl}/employees`, inputField)
            console.log(postEmpData);
        } catch (error) {
            console.log(error);
        }
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
