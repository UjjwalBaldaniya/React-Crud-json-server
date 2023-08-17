import React, { useEffect, useState } from "react";
import FormTable from "../Components/FormTable";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditData = () => {
    const params = useParams()
    const navigation = useNavigate()
    const [inputField, setInputField] = useState([]);

    const fetchData = async () => {
        try {
            const res = await axios.get(`http://localhost:4000/employees/${params.id}`)
            setInputField(res.data)
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const updateData = async () => {
        try {
            const res = await axios.patch(`http://localhost:4000/employees/${params.id}`, inputField)
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputField);
        updateData()
        navigation('/')
    }

    const handleChange = (e) => {
        setInputField({
            ...inputField,
            [e.target.name]: e.target.value
        })
    }

    const handleNavigate = () => {
        navigation('/')
    }

    return (
        <>
            <FormTable handleSubmit={handleSubmit} handleChange={handleChange} inputField={inputField} name={'Edit'} handleNavigate={handleNavigate} />
        </>
    )
};

export default EditData;


// export const getEmployee=(id)=>`http://localhost:4000/employees${id}`