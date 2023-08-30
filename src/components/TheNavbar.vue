<script>
export default {
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    OnEnter() {
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

<style lang="scss">
.search-box{
/*  background-color: red;*/
  height: 50px;
}
</style>