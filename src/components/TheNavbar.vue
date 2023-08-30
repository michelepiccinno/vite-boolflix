<script>
import { state, fetchData } from "../state";
export default {
  data() {
    return {
      state
    };
  },
  methods: {
    fetchData
  },
};
</script>

<template>
  <div class="container mt-5">
    <div class="search-box">
      <input type="text" v-model="state.searchText" @keyup.enter="fetchData" />
    </div>
  </div>
</template>

<style lang="scss">
.search-box {
  /*  background-color: red;*/
  height: 50px;
}
</style>