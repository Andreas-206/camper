import axios from 'axios';
axios.defaults.baseURL = ''

export const getCampers = async (page = 1) => {
const {data} = await axios.get(`/adverts?page=${page}&limit=4`)
return data
}