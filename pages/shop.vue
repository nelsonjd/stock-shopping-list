<template>
  <div>
    <Header :currentPath="getCurrentPath()" />
    <div>
      <input type="text" />
    </div>
    <button type="submit">Save</button>
  </div>
</template>

<script>
export default {
  name: "ShopPage",
  methods: {
    getCurrentPath() {
      return this.$router.currentRoute.path;
    },
  },
};
</script>

<style scoped>
</style>