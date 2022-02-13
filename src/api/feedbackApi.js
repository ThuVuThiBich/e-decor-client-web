import axiosClient from "./axiosClient";

const feedbackApi = {
  getAll: (id, params) => {
    const url = `/products/${id}/feedbacks`;
    return axiosClient.get(url, { params });
  },

  create: (id, data) => {
    const url = `/products/${id}/feedbacks`;
    return axiosClient.post(url, data);
  },

  delete: (id) => {
    const url = `/feedbacks/${id}`;
    return axiosClient.delete(url);
  },
};

export default feedbackApi;
