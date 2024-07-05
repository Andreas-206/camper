import axios from "axios";
axios.defaults.baseURL = "https://66320f90c51e14d695633edd.mockapi.io/api";

export const getCampars = async (page = 1) => {
  const { data } = await axios.get(`/adverts?page=${page}&limit=4`);
  return data;
};
