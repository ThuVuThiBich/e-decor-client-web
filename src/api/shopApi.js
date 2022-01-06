import axiosClient from "./axiosClient";

const shopApi = {
  create: (data) => {
    const url = "/shops/login";
    return axiosClient.post(url, data);
  },

  getShops: (params) => {
    const url = "/shops";
    return axiosClient.get(url);
  },

  getMyShop: () => {
    const url = "/shops/my-shop";
    return axiosClient.get(url);
  },
};

export default shopApi;
