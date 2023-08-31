<script>
import { state, fetchData } from "../state";
import LangFlag from 'vue-lang-code-flags';
export default {
  components: {
    LangFlag,
  },
  data() {
    return {
      state
    }
  },
  methods: {
    fetchData
  },
}
</script>

<template>
  <div class="container">
    <h1>FILM</h1>
    <div class="row row-cols-5 g-5">
      <div v-for="singleMovie in state.movies" :key="singleMovie.id">
        <div class="card-box">
          <img :src="`http://image.tmdb.org/t/p/w200/${singleMovie.poster_path}`">
          <h6>Titolo: {{ singleMovie.title }}</h6>
          <h5>Original Title: {{ singleMovie.original_title }}</h5>
          <i v-for="star in Math.ceil((singleMovie.vote_average) / 10 * 5)" :key="star" class="fa-solid fa-star fa-lg"></i>
        </div>
        <div class="box">
          LINGUA: <lang-flag :iso="singleMovie.original_language" />
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <h1 class="mt-5">SERIE TV</h1>
    <div class="row row-cols-5 g-5">
      <div v-for="singleSerieTv in state.serieTv" :key="singleSerieTv.id">
        <div class="card-box">
          <img :src="`http://image.tmdb.org/t/p/w200/${singleSerieTv.poster_path}`">
          <h6>Titolo: {{ singleSerieTv.name }}</h6>
          <h5>Original Title: {{ singleSerieTv.original_name }}</h5>
          <i v-for="star in Math.ceil((singleSerieTv.vote_average) / 10 * 5)" :key="star" class="fa-solid fa-star fa-lg"></i>
        </div>
        <div class="box">
          LINGUA: <lang-flag :iso="singleSerieTv.original_language" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>