<template>
  <div>
    <Header :routeName="this.$route.name" />
    <div class="form-page">
      <h1>{{ ticker }}</h1>
      <input class="form-input" type="text" name="price" />
      <label for="price">Target Price</label>
      <textarea class="form-input"></textarea>
      <div>
        <button>Save</button>
      </div>
    </div>
  </div>
</template>

<script>
import { tickerStore } from "@/models/tickerStore";
export default {
  data() {
    const ticker = tickerStore.state.ticker;
    tickerStore.clearTickerAction();

    return {
      ticker: ticker,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/colors";

.form-page {
  padding: 0 0.5em;
}

h1 {
  font-weight: 400;
}

.form-input {
  margin: 1em 0;
  border: 2px solid colors.$color-purple;
  background-color: #f8f8f8;
  border-radius: 2px;
  padding: 6px 6px;
}
textarea {
  width: 90%;
  height: 150px;

  resize: none;
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
  border-color: colors.$color-light-blue;
}
</style>