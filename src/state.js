import axios from "axios";
import { reactive } from "vue";

export const state = reactive({
  searchText: "",
  movies: [],
  serieTv: []
})

export function fetchData() {
  axios
    .get(`https://api.themoviedb.org/3/search/movie`, {
      params: {
        api_key: "2eb9078bd67d9d05d1087874ecb09554",
        query: state.searchText,
      }
    })
    .then((response) => {
      state.movies = response.data.results;
      console.log(state.movies);
    }),
    axios
    .get(`https://api.themoviedb.org/3/search/tv`, {
      params: {
        api_key: "2eb9078bd67d9d05d1087874ecb09554",
        query: state.searchText,
      }
    })
    .then((response) => {
      state.serieTv = response.data.results;
      console.log(state.serieTv);
    })
}
