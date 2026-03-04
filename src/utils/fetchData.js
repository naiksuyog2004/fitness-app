// export const exerciseOptions = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
//       'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//     }
// };

// export const youtubeOptions = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
//     'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
//   }
// };

// export const fetchData = async (url, options) => {
//     const response = await fetch(url, options);
//     const data = await response.json();

//     return data;
// }

// Base headers (LATEST RapidAPI format)
const rapidApiHeaders = {
  'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
};

// ExerciseDB API options
export const exerciseOptions = {
  method: 'GET',
  headers: {
    ...rapidApiHeaders,
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
  },
};

// YouTube Search API options
export const youtubeOptions = {
  method: 'GET',
  headers: {
    ...rapidApiHeaders,
    'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

// Safe fetch function with error handling
export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Fetch failed:", error.message);
    return null;
  }
};
