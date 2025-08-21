import axios from "axios";
import { RF_NODE_TYPES } from "../react-flow/nodes";

export const apiInstance = axios.create({
  baseURL: import.meta.env.SERVER_URL || "http://localhost:3000",
  headers: {
    "Content-type": "application/json",
  },
});
