import axiosClient from "./axiosClient";

const authApi = {
  login: (data) => {
    const url = "/auth/login";
    return axiosClient.post(url, data);
  },
  signUp: (data) => {
    const url = "/auth/register";
    return axiosClient.post(url, data);
  },
  getInfo: () => {
    const url = "/users";
    return axiosClient.get(url);
  },
};

export default authApi;
