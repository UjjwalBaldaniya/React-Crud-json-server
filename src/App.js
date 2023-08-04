import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import UserList from "./Pages/UserList";
import EditData from "./Pages/EditData";
import AddData from "./Pages/AddData";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/addData" element={<AddData />} />
          <Route path="/editData/:id" element={<EditData />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
