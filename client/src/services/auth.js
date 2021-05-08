import axios from "axios"

let apiURL;
const apiURLS = {
  production: "Dummy URL",
  development: "http://localhost:3000"
};

if (window.location.hostname === "localhost") {
  apiURL = apiURLS.development;
}else {
    apiURL = apiURLS.production;
  }



const api = axios.create({
  baseURL: apiURL,
});

export const signInUser = async (formData) => {
  const res = await api.post("api/v1/auth", formData)
  localStorage.setItem("authToken", res.data.token);
  api.defaults.headers.common.authorization = `Bearer ${res.data.token}`;
  return res.data;
};

export const signUpUser = async (formData) => {
  const res = await api.post("/users", formData)
};

export const verifyUser = async () => {
  const token = localStorage.getItem("authToken");
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const res = await api.get("/api/v1/auth");
    return res.data;
  } else
    return false;
}

