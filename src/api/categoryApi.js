import axiosClient from "./axiosClient";

const categoryApi = {
  getCategories: () => {
    const url = `/categories`;
    return axiosClient.get(url);
  },

  getShopCategories: (id) => {
    const url = `/categories/${id}`;
    return axiosClient.get(url);
  },
};

export default categoryApi;
