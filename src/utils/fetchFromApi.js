import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "x-rapidapi-key": "7c3a3df4a5msh548f42319ac7166p11ba78jsn8eedcb3ca395",
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromApi = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.error(error);
  }
};
