import api from "../../../services/api";
import { endpoints } from "../../../services/endpoints";

export function movie(page, query) {
  const queryParams = new URLSearchParams({ page, query }).toString();
  return api.get(endpoints.searchMovie(queryParams));
}
export function person(page, query) {
  const queryParams = new URLSearchParams({ page, query }).toString();
  return api.get(endpoints.searchPerson(queryParams));
}
export function tv(page, query) {
  const queryParams = new URLSearchParams({ page, query }).toString();
  return api.get(endpoints.searchTV(queryParams));
}
