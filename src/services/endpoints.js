const apikey = "d61ca0998c8a152c6556e310a4a8e4db";
const apitotal = "?api_key=" + apikey + "&language=pt-BR";

export const endpoints = {
  API_URL: "https://api.themoviedb.org/3/",
  trendingAll: "trending/all/day?api_key=" + apikey,
  movie: "https://api.themoviedb.org/3/movie/",
  person: "https://api.themoviedb.org/3/person/",
  tv: "https://api.themoviedb.org/3/tv/",
  apiTotal: apitotal,
  image: "https://image.tmdb.org/t/p/original",
  search: "search/",
};
