import axios from "axios";

const BASE = process.env.url;
const adminLogin = (data: object) =>
  axios.post(`${BASE}/v1/crm/user/login`, data);
const AuthOperations = {
  adminLogin,
};
export default AuthOperations;
