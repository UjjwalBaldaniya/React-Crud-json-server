import React, { useState } from "react";
import '../Styles/login.css'
import { useNavigate } from "react-router-dom";
import InputField from "../Components/InputField";
import Navbar from "./Navbar";

const inputs = [
    {
        id: 1,
        name: "email",
        type: "email",
        placeholder: "enter email...",
        lable: "Email id :- "
    },
    {
        id: 2,
        name: "password",
        type: "password",
        placeholder: "enter password...",
        lable: "Password :- "
    },
]

const Login = () => {
    const navigate = useNavigate()

    const [inputField, setInputField] = useState({
        name: "",
        password: "",
    });

    const handleChange = (e) => {
        setInputField({
            ...inputField,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(inputField);'
        navigate('/')
        setInputField({
            email: '',
            password: ''
        })
        localStorage.setItem('user', JSON.stringify(inputField));
    }

    return (
        <>
            <Navbar />
            <div className="employee-form">
                <div className="login_container">
                    <h1 className="login_title">Log In</h1>

                    <form className="login_form" onSubmit={handleSubmit}>
                        {
                            inputs.map((input) => (
                                <InputField key={input.id} name={input.name} type={input.type} placeholder={input.placeholder} lable={input.lable} value={inputField[input.name]} handleChange={handleChange} />
                            ))
                        }
                        <button type="submit" className="login_btn" disabled={!inputField.password.length}>Login</button>
                    </form>
                </div>
            </div>
        </>
    )
};

export default Login;
