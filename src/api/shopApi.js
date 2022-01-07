import axiosClient from "./axiosClient";

const shopApi = {
  createShop: (data) => {
    const url = "/shops";
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
