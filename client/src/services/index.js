import axios from "axios"

let apiURL;
const apiURLS = {
  production: "https://radiant-falls-02117.herokuapp.com/",
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
  return res.data
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

export const getAllBacklogs = async() => {
  const res = await api.get(`/backlogs`)
  return res.data
}

export const getAllConsoles = async () => {
  const res = await api.get('/consoles')
  return res.data
}

export const getAllGames = async () => {
  const res = await api.get('/games')
  return res.data
}

export const getBacklog = async (id) => {
  const res = await api.get(`/backlogs/${id}`)
  return res.data
}

export const getConsole = async (id) => {
  const res = await api.get(`/consoles/${id}`)
  return res.data
}

export const getGame = async (id) => {
  const res = await api.get(`/games/${id}`)
  return res.data
}

export const updateBacklog = async (id, formData) => {
  const res = await api.put(`/backlogs/${id}`, formData)
  const updatedBacklog = res.data
  return updatedBacklog
}

export const updateConsole = async (id, formData) => {
  const res = await api.put(`/consoles/${id}`, formData)
  const updatedConsole = res.data
  return updatedConsole
}

export const updateGame = async (id, formData) => {
  const res = await api.put(`/games/${id}`, formData)
  const updatedGame = res.data
  return updatedGame
}

export const createBacklog = async (formData) => {
  const res = await api.post("/backlogs", { backlog: formData })
  return res.data
}

export const createConsole = async (formData) => {
  const res = await api.post("/consoles", { console: formData })
  return res.data
}

export const createGame = async (formData) => {
  const res = await api.post("/games", { game: formData })
  return res.data
}

export const deleteBacklog = async (id) => {
  await api.delete(`/backlogs/${id}`)
}

export const deleteConsole = async (id) => {
  await api.delete(`/consoles/${id}`)
}

export const deleteGame = async (id) => {
  await api.delete(`games/${id}`)
}