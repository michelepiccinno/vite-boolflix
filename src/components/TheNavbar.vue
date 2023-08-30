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
<input type="text" v-model="searchText" @keyup.enter="OnEnter" />
</template>