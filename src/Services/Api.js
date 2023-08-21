import ApiCreate from "./ApiCreate";

const getEmployee = () => {
  return ApiCreate.get("/employees");
};

const postEmployee = (id) => {
  return ApiCreate.post("/employees", JSON.stringify(id));
};

const patchGetEmployee = (id) => {
  return ApiCreate.get(`/employees/${id}`);
};

const patchEmployee = (id, input) => {
  return ApiCreate.patch(`/employees/${id}`, JSON.stringify(input));
};

const deleteEmployee = (id) => {
  return ApiCreate.delete(`/employees/${id}`);
};

export {
  getEmployee,
  postEmployee,
  patchGetEmployee,
  patchEmployee,
  deleteEmployee,
};
