import { useRoutes } from "react-router-dom";
import "./App.css";
import UserList from "./Pages/UserList";
import EditData from "./Pages/EditData";
import AddData from "./Pages/AddData";
import Login from "./Pages/Login";
import PrivateRoute from "./auth/PrivateRoute";

function App() {
  let MainRouting = useRoutes([
    {
      path: "/",
      element: <PrivateRoute />,
      children: [
        {
          path: "/",
          element: <UserList />,
        },
        {
          path: "/home",
          element: <UserList />,
        },
        {
          path: "/addData",
          element: <AddData />,
        },
        {
          path: "/editData/:id",
          element: <EditData />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return MainRouting;
}

export default App;

// <BrowserRouter>
//   <Routes>
//     <Route path="/" element={<PrivateRoute />}>
//       <Route path="/" element={<UserList />} />
//       <Route path="/home" element={<UserList />} />
//       <Route path="/addData" element={<AddData />} />
//       <Route path="/editData/:id" element={<EditData />} />
//     </Route>
//     <Route path="/login" element={<Login />} />
//   </Routes>
// </BrowserRouter>
