import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../Styles/uselist.css'
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

const UserList = () => {
    const navigation = useNavigate()
    const [employeeData, setEmployeeData] = useState([]);
    const [isError, setIsError] = useState('');


    const ApiData = async () => {
        try {
            const res = await axios.get('http://localhost:4000/employees')
            setEmployeeData(res.data)
            console.log(res.data);

        } catch (error) {
            console.log(error);
            setIsError(error.message)
        }
    }

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/employees/${id}`)
        } catch (error) {
            console.log(error);
        }
        const deleteData = employeeData.filter((element) => element.id !== id)
        setEmployeeData(deleteData)
    }

    const handleEdit = (id) => {
        console.log(id);
        navigation(`/editData/${id}`)
    }

    useEffect(() => {
        ApiData()
    }, [])

    return (
        <>
            <div className="userlist">
                <div className="userlist-container">
                    <h1 className="userlist-title"><u>Employee Data List</u></h1>
                    <button onClick={() => navigation('/addData')} className="userlist-btn">Add Employee Data</button>

                    {isError !== "" && <h1>{isError}</h1>}
                    {employeeData.length > 0 ?
                        <table className="table">
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
                                    <tr key={element.id}>
                                        <td>{element.name}</td>
                                        <td>{element.location}</td>
                                        <td>{element.designation}</td>
                                        <td onClick={() => handleEdit(element.id)}><FaEdit color="#10558d" fontSize="1.5em" /></td>
                                        <td onClick={() => handleDelete(element.id)}><AiFillDelete color="red" fontSize="1.5em" /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        : <h2 className="userlist-title" style={{ color: '#ff2e2e' }}>no data found</h2>
                    }
                </div>
            </div>
        </>
    )
};

export default UserList;
