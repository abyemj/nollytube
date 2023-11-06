import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search';

// const options = {
//   url: BASE_URL,
//   params: {
//     maxResults: 50,
//   },
//   headers: {
//     'X-RapidAPI-Key': '930b28932fmshb82057fce399cdap16f00bjsn5a0b566c2410',
//     'X-RapidAPI-Host': 'youtube-v38.p.rapidapi.com',
//   },
// };

// const options = {
//     method: 'GET',
//     url: 'https://youtube-v38.p.rapidapi.com',
//     params: {
//       q: 'despacito',
//       hl: 'en',
//       gl: 'US'
//     },
//     headers: {
//       'X-RapidAPI-Key': '930b28932fmshb82057fce399cdap16f00bjsn5a0b566c2410',
//       'X-RapidAPI-Host': 'youtube-v38.p.rapidapi.com'
//     }
//   };
  
//   try {
//       const response = await axios.get(`${BASE_URL}`,options);
//       console.log(response.data);
//   } catch (error) {
//       console.error(error);
//   }



const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    q: 'music',
    part: 'snippet,id',
    regionCode: 'US',
    maxResults: '50',
    order: 'date'
  },
  headers: {
    'X-RapidAPI-Key': '930b28932fmshb82057fce399cdap16f00bjsn5a0b566c2410',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

// try {
// 	const response = await axios.get(`https://youtube-v31.p.rapidapi.com/search`, options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }


export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`https://youtube-v31.p.rapidapi.com/search`, options);
  console.log(data)
  return data;
  
};