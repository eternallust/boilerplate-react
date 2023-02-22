import axios from "axios";
import { interceptResponse } from "./interceptor";

export const host = axios.create({
  headers: { "Access-Control-Allow-Origin": "*", crossorigin: true },
  baseURL: import.meta.env.VITE_BASE_URL,
});

interceptResponse(host);

const api = {
  // Landing Page
  checkProxy: () => axios.get("flagProxy/todos/1"),
};

export default api;
