import axios from 'axios';
axios.defaults.baseURL = 'https://66852ad0b3f57b06dd4ba5b9.mockapi.io/advert'

export const getCampers = async (page = 1) => {
const {data} = await axios.get(`/adverts?page=${page}&limit=4`)
return data
}