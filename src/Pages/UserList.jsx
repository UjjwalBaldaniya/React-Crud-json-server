import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../Styles/uselist.css'

const UserList = () => {
    const navigation = useNavigate()
    const [employeeData, setEmployeeData] = useState([]);

    const ApiData = async () => {
        try {
            const res = await axios.get('http://localhost:4000/employees')
            // console.log(res.data);
            setEmployeeData(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    const handleDelete = async (id) => {
        try {
            // debugger
            await axios.delete(`http://localhost:4000/employees/${id}`)
            // console.log(deleteData);
        } catch (error) {
            console.log(error);
        }
        const deleteData = employeeData.filter((element) => element.id !== id)
        setEmployeeData(deleteData)
    }

    useEffect(() => {
        ApiData()
    }, [])

    return (
        <>
            <div className="userlist">
                <div className="userlist-container">
                    <h1 className="userlist-title">Crud Operation Using React Js</h1>
                    <button onClick={() => navigation('/form')} className="userlist-btn">Add Employee Data</button>
                    <h2 className="userlist-title">Employee Table Data</h2>

                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Location</th>
                                <th>Designation</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employeeData.map((element) => (
                                <tr>
                                    <td>{element.name}</td>
                                    <td>{element.location}</td>
                                    <td>{element.designation}</td>
                                    <td>Edit</td>
                                    <td onClick={() => handleDelete(element.id)}>Delete</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
};

export default UserList;
