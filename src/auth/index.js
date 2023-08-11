export const isLoggin = () => {
  let data = JSON.parse(localStorage.getItem("user"));
  if (data != null) {
    return true;
  } else {
    return false;
  }
};
