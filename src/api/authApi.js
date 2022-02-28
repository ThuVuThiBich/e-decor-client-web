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

  verifyEmail: (data) => {
    const url = "/auth/verify-email";
    return publicRequest.post(url, data);
  },

  forgotPass: (data) => {
    const url = "/auth/forgot-password";
    return publicRequest.post(url, data);
  },

  resetPass: (data) => {
    const url = "/auth/reset-password";
    return publicRequest.post(url, data);
  },

  updatePass: (data) => {
    const url = "/users";
    return axiosClient.patch(url, data);
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
