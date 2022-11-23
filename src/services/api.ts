import axios from "axios";

const ipOfc = process.env.IP_OFC

const api = axios.create({
  // baseURL: "http://192.168.11.79:8000",
  baseURL: ipOfc,
  //baseURL: `http://192.168.11.105:3000`
});

export { api };