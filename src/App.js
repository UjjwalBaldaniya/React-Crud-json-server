import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import UserList from "./Pages/UserList";
import Form from "./Pages/Form";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
