<script>
import MovieCard from "./components/MovieCard.vue";
import TheNavbar from "./components/TheNavbar.vue";

export default {
  components: {
    MovieCard,
    TheNavbar
  },
  data() {
    return {
    };
  },
};
</script>


<template>
  <TheNavbar></TheNavbar>
<MovieCard></MovieCard>
</template>


<style lang="scss"></style>
