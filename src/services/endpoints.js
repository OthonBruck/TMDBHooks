const apikey = "d61ca0998c8a152c6556e310a4a8e4db";
const apitotal = "?api_key=" + apikey + "&language=pt-BR";

export const endpoints = {
  API_URL: "https://api.themoviedb.org/3/",
  trendingAll: "trending/all/day?api_key=" + apikey,
  apiTotal: apitotal,
  image: "https://image.tmdb.org/t/p/original",
  movie: "https://api.themoviedb.org/3/movie/",
  person: "https://api.themoviedb.org/3/person/",
  tv: "https://api.themoviedb.org/3/tv/",

  //Pesquisa uma categoria especifica
  searchMovie: (queryParams) => "search/movie/" + apitotal + `&${queryParams}`,
  searchTV: (queryParams) => "search/tv/" + apitotal + `&${queryParams}`,
  searchPerson: (queryParams) =>
    "search/person/" + apitotal + `&${queryParams}`,
  youtubeUrl: "https://www.youtube.com/watch?v=",

  //Renderiza os trailer
  movieVideo: (id) =>
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=d61ca0998c8a152c6556e310a4a8e4db&language=pt-BR `,
  tvVideo: (id) =>
    `https://api.themoviedb.org/3/tv/${id}/videos?api_key=d61ca0998c8a152c6556e310a4a8e4db&language=pt-BR `,
};
