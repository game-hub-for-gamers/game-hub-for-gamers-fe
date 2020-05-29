import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token"); // getting our token from localstorage

  return axios.create({
    headers: {
      Authorization: token,
    },
  });
};
