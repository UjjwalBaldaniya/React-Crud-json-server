import React, { useState } from "react";
import '../Styles/login.css'
import { useNavigate } from "react-router-dom";

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
        console.log(inputField);
        navigate('/')
        setInputField({
            email: '',
            password: ''
        })
        localStorage.setItem('user', JSON.stringify(inputField));
    }

    return (
        <>
            <div className="employee-form">
                <div className="login_container">
                    <h1 className="login_title">Log In</h1>

                    <form className="login_form" onSubmit={handleSubmit}>
                        <div className="input-div">
                            <label>Email id :- </label>
                            <input type="email" placeholder="enter email..." name="email" value={inputField.email} onChange={handleChange} />
                        </div>
                        <div className="input-div">
                            <label>Password :- </label>
                            <input type="password" placeholder="enter password..." name="password" value={inputField.password} onChange={handleChange} />
                        </div>
                        <button type="submit" className="login_btn" disabled={!inputField.password.length}>Login</button>
                    </form>
                </div>
            </div>
        </>
    )
};

export default Login;
