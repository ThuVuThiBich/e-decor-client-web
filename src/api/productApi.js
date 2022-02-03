import axiosClient from "./axiosClient";

const productApi = {
  getProducts: (params) => {
    const url = `products`;
    return axiosClient.get(url, { params });
  },
  getShopProducts: (id, params) => {
    const url = `shops/${id}/products`;
    return axiosClient.get(url, { params });
  },

  get: (id) => {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },

  create: (data) => {
    const url = `/products`;
    return axiosClient.post(url, data);
  },

  update: (id, data) => {
    const url = `/products/${id}`;
    return axiosClient.put(url, data);
  },

  delete: (id) => {
    const url = `/products/${id}`;
    return axiosClient.delete(url);
  },
};

export default productApi;
