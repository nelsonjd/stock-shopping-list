<template>
<div class="app">
  <Header :currentPath="getCurrentPath()"/>
</div>
</template>

<script>
export default {
  name: 'IndexPage',
  methods: {
    getCurrentPath() {
      return this.$router.currentRoute.path;
    }
  }
}
</script>


<style lang="scss" scoped>

</style>
