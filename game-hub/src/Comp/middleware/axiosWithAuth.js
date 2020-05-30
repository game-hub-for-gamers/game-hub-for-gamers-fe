import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token"); // getting our token from localstorage

  return axios.create({
    headers: {
      Authorization: token, // when we call axios we are makeing sure user is authorized with the correct token
    },
  });
};
