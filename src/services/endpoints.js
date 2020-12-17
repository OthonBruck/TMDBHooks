const apikey = "d61ca0998c8a152c6556e310a4a8e4db";

export const endpoints = {
  API_URL: "https://api.themoviedb.org/3/",
  searchPeople: "search/person?api_key=" + apikey + "&language=pt-BR&query=",
  searchMovie: "search/movie?api_key=" + apikey + "&language=pt-BR&query=",
  searchTV: "search/tv?api_key=" + apikey + "&language=pt-BR&page=1&query=",
  trendingAll: "trending/all/day?api_key=" + apikey,
};
