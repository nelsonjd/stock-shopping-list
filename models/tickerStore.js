export const tickerStore = {
  state: {
    ticker: ''
  },
  setTickerAction(newValue) {
    this.state.ticker = newValue;
  },
  clearTickerAction() {
    this.state.ticker = '';
  }
};