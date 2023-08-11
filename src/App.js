import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import UserList from "./Pages/UserList";
import EditData from "./Pages/EditData";
import AddData from "./Pages/AddData";
import Navbar from "./Pages/Navbar";
import Login from "./Pages/Login";
import PrivateRoute from "./auth/PrivateRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<UserList />} />
            <Route path="/home" element={<UserList />} />
            <Route path="/addData" element={<AddData />} />
            <Route path="/editData/:id" element={<EditData />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
