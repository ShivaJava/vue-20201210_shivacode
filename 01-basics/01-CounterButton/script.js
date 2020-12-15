import Vue from './vue.esm.browser.js';

const app = new Vue({
  el: '#app',
  data: () => ({
    counter: 0
  }),
  methods: {
    countHandle() {
      ++this.counter
    }
  }
})
// Рекомендуется использовать МЕТОД в качестве обработчика события
