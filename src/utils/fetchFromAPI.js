import axios from 'axios';

export const BASE_URL ='https://youtube-v31.p.rapidapi.com';
const options = {
  params: {
    maxResults: 50,
    // videoId: 'M7FIvfx5J10',
  },
  headers: {
    'X-RapidAPI-Key':'c3364fa543mshb98eb21ca643587p1e3ea6jsn1a633235316e',
    'X-RapidAPI-Host':'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
 // console.log(`${BASE_URL}/${url}`, options)
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};


// const options = {
//   method: 'GET',
//   url: 'https://youtube-v31.p.rapidapi.com/captions',
//   params: {
//     part: 'snippet',
//     videoId: 'M7FIvfx5J10'
//   },
//   headers: {
//     'X-RapidAPI-Key': 'c3364fa543mshb98eb21ca643587p1e3ea6jsn1a633235316e',
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }