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
        <div class="box">
          {{ singleMovie.title }}
        </div>
        <div class="box">
          LINGUA: <lang-flag :iso="singleMovie.original_language" />
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <h1>SERIE TV</h1>
    <div class="row row-cols-5 g-5">
      <div v-for="singleSerieTv in state.serieTv" :key="singleSerieTv.id">
        <div class="box col-1 bg-info">
          {{ singleSerieTv.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.box {
  border: 1px solid green;
}
</style>