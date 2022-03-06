import axiosClient from "./axiosClient";

const blogApi = {
  getMyPosts: (params) => {
    const url = `/blogs`;
    return axiosClient.get(url, { params });
  },

  getPosts: (body, params) => {
    const url = `/blogs`;
    return axiosClient.get(url, body, { params });
  },

  get: (id) => {
    const url = `/blogs/${id}`;
    return axiosClient.get(url);
  },

  create: (data) => {
    const url = `/blogs`;
    return axiosClient.post(url, data);
  },

  update: (id, data) => {
    const url = `/blogs/${id}`;
    return axiosClient.put(url, data);
  },

  delete: (id) => {
    const url = `/blogs/${id}`;
    return axiosClient.delete(url);
  },
};

export default blogApi;
