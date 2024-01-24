import axios from "axios";

const API_URL = "http://localhost:3000";

export const addUser = async (data) => {
  try {
    return await axios.post(`${API_URL}/users`, data);
  } catch (err) {
    console.log("Error while calling API ", err);
  }
};

export const getUsers = async () => {
  try {
    return await axios.get(`${API_URL}/users`);
  } catch (err) {
    console.log("Error While calling getUsers API", err.message);
  }
};

export const deleteUser = async (id) => {
  try {
    return await axios.delete(`${usersUrl}/${id}`);
  } catch (err) {
    console.log("Error While calling getUsers API", err.message);
  }
};

export const editUser = async (id, user) => {
  try {
    return await axios.put(`${usersUrl}/${id}`, user);
  } catch (err) {
    console.log("Error While calling getUsers API", err.message);
  }
};
