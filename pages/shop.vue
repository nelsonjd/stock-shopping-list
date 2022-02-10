<template>
  <div>
    <Header :routeName="this.$route.name" />
    <div>
      <input v-model="ticker" type="text" />
    </div>
    <button @click="onClick">Search</button>
  </div>
</template>

<script>
import { tickerStore } from '@/models/tickerStore';
export default {
  name: "ShopPage",
  methods: {
    onClick() {
      tickerStore.setTickerAction(this.ticker);
      this.$router.push('/cards/new')
    }
  },
  data() {
    return {
      ticker: ""
    };
  }
};
</script>

<style scoped>
button {
  margin-top: 2em;
}
</style>