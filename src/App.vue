<script>
import axios from "axios";
import Hero from "./components/Hero.vue";
import TheNavbar from "./components/TheNavbar.vue";
/*import { store } from "../src/state";*/


export default {
  components: { 
    Hero, 
    TheNavbar 
  },
  data() {
    return {
      apiKey: "2eb9078bd67d9d05d1087874ecb09554",
      movies: [],
    };
  },

  methods: {
    fetchData(searchText) {
      axios
        .get(`https://api.themoviedb.org/3/search/movie?api_Key=${apiKey}&query==${searchText}`, {
          params: {
            apikey: "2eb9078bd67d9d05d1087874ecb09554",
            query: searchText,
          },
        })
        .then((resp) => {
          this.movies = resp.data.results;
          console.log(this.movies);
         } )
    },
  },
  mounted() {
    this.fetchData()
  },
};
</script>


<template>
  <TheNavbar @searchText="fetchData"></TheNavbar>

  <!-- ciclo stampa lista film-->
  <div></div>
</template>


<style lang="scss"></style>
