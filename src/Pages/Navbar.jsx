import React from "react";
import '../Styles/navbar.css'
import { Link, Outlet, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        localStorage.removeItem('user')
        navigate('/login')
    }

    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <Link to="/">CRUD</Link>
                </div>
                <div className="menu">
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/addData">Form</Link></li>
                    </ul>
                </div>
                <div className="logout">
                    <h2 onClick={handleClick}>Log Out</h2>
                </div>
            </div>
            <Outlet />
        </>
    )
};

export default Navbar;
