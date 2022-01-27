import axiosClient, { publicRequest } from "./axiosClient";

const authApi = {
  login: (data) => {
    const url = "/auth/login";
    return publicRequest.post(url, data);
  },
  signUp: (data) => {
    const url = "/auth/register";
    return publicRequest.post(url, data);
  },
  getInfo: () => {
    const url = "/users";
    return axiosClient.get(url);
  },
  updateInfo: (data) => {
    const url = "/users";
    return axiosClient.put(url, data);
  },
};

export default authApi;
