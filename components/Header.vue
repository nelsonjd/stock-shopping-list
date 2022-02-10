<template>
  <header class="header">
    <h1 class="header-item">Stock Shopping List</h1>
    <NuxtLink v-if="shopLinkVisible" to="/shop" class="header-item">Shop</NuxtLink>
    <NuxtLink v-if="listLinkVisible" to="/" class="header-item">List</NuxtLink>
  </header>
</template>

<script>
export default {
  props: {
    routeName: {
      type: String,
      required: true
    }
  },
  computed: {
    shopLinkVisible() {
      return this.routeName !== 'shop';
    },
    listLinkVisible() {
      return this.routeName !== 'index';
    }
  }
}
</script>


<style lang="scss" scoped>
@use '@/assets/scss/colors.scss';

.header {
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;

  box-shadow: rgb(0 0 0 / 10%) 0px 8px 8px -8px;
  
  h1 {
    font-weight: normal; 
  }
}
</style>

