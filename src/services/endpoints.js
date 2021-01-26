const apikey = "d61ca0998c8a152c6556e310a4a8e4db";
const apitotal = "?api_key=" + apikey + "&language=pt-BR";

export const endpoints = {
  API_URL: "https://api.themoviedb.org/3/",
  trendingAll: "trending/all/day?api_key=" + apikey,
  apiTotal: apitotal,
  image: "https://image.tmdb.org/t/p/original",
  searchMovie: (queryParams) => "search/movie/" + apitotal + `&${queryParams}`,
  searchTV: (queryParams) => "search/tv/" + apitotal + `&${queryParams}`,
  searchPerson: (queryParams) =>
    "search/person/" + apitotal + `&${queryParams}`,
};
