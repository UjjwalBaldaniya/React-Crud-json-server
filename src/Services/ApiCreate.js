import axios from "axios";

const ApiCreate = axios.create({
  baseURL: `http://localhost:4000`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// axiosClient.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     let res = error.response;
//     if (res.status === 401) {
//       window.location.href = `https://jsonplaceholder.typicode.com/todos`;
//     }
//     console.log(`Looks like there was a problem. Status Code: ` + res.status);
//     return Promise.reject(error);
//   }
// );

export default ApiCreate;
