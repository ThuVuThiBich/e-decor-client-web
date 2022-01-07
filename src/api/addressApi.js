import axiosClient from "./axiosClient";

const addressApi = {
  getCities: () => {
    const url = "/address/cities";
    return axiosClient.get(url);
  },

  getDistricts: (params) => {
    const url = `/address/districts`;
    return axiosClient.get(url, { params });
  },

  getWards: (params) => {
    const url = `/address/wards`;
    return axiosClient.get(url, { params });
  },
};

export default addressApi;
