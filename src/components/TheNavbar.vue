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
  <div class="search-box bg-warning">
    <input type="text" v-model="state.searchText" @keyup.enter="fetchData" />
  </div>
</template>

<style lang="scss">
.search-box{
/*  background-color: red;*/
  height: 50px;
}
</style>