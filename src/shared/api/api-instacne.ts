import axios from "axios";

export const apiInstance = axios.create({
  baseURL: import.meta.env.SERVER_URL || "http://localhost:3000",
  headers: {
    "Content-type": "application/json",
  },
});
