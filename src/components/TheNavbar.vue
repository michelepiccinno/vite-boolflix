<script>
export default {
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    onEnter() {
      this.$emit("search", this.searchText);
    },
  },
};
</script>

<template>
  <div class="search-box bg-warning">
    <input type="text" v-model="searchText" @keyup.enter="OnEnter" />
  </div>
</template>

<style>
.search-box{
/*  background-color: red;*/
  height: 50px;
}
</style>