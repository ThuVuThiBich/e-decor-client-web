import axiosClient from "./axiosClient";

const cartApi = {
  get: () => {
    const url = `/cart-items`;
    return axiosClient.get(url);
  },

  add: (data) => {
    const url = `/cart-items`;
    return axiosClient.post(url, data);
  },

  update: (id, data) => {
    const url = `/cart-items/${id}`;
    return axiosClient.put(url, data);
  },

  delete: (id) => {
    const url = `/cart-items/${id}`;
    return axiosClient.delete(url);
  },
};

export default cartApi;
