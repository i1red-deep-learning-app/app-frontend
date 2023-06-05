import axios from "axios";
import { API_PREFIX } from "./settings";

export const axiosInstance = axios.create({baseURL: API_PREFIX});
