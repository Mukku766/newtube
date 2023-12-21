import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com"


const options = {
  params: {
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': '94c22745e1msh9ca8fb1c320d529p1fdd05jsn7abffe8f06c5',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};
  

 export  const fetchDataFromApi = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  }