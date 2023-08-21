import React, { useEffect, useState } from "react";
import FormTable from "../Components/FormTable";
import { useNavigate, useParams } from "react-router-dom";
import { patchEmployee, patchGetEmployee } from "../Services/Api";

const EditData = () => {
    const params = useParams()
    const navigation = useNavigate()
    const [inputField, setInputField] = useState({
        name: "",
        location: "",
        designation: "",
    });

    useEffect(() => {
        patchGetEmployee(params.id).then((res) => {
            setInputField(res.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [params.id])

    const handleSubmit = (e) => {
        e.preventDefault()
        navigation('/')

        patchEmployee(params.id, inputField).then((res) => {
            console.log(res)
        }).catch((error) => {
            console.log(error)
        })
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
            <FormTable handleSubmit={handleSubmit} handleChange={handleChange} inputField={inputField} btnName={'Edit'} handleNavigate={handleNavigate} />
        </>
    )
};

export default EditData;