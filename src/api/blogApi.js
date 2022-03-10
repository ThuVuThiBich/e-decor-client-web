import axiosClient from "./axiosClient";

const blogApi = {
  getMyPosts: (params) => {
    const url = `/blogs/my-blog`;
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

  // LIKE
  like: (data) => {
    const url = `/blogs/${data}/likes`;
    return axiosClient.post(url);
  },
  unlike: (data) => {
    const url = `/blogs/${data}/likes`;
    return axiosClient.delete(url);
  },
  getMyLikes: (params) => {
    const url = `/blogs/my-likes`;
    return axiosClient.get(url, { params });
  },

  // decor Themes
  getDecorThemes: (params) => {
    const url = `/blogs/decor-themes`;
    return axiosClient.get(url, { params });
  },
};

export default blogApi;
