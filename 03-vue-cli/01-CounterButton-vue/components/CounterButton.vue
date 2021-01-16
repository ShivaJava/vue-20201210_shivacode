<template>
  <button @click="increment">{{ count }}</button>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      default: 0
    }
  },
  model: {
    prop: 'count',
    event: 'increment',
  },
  methods: {
    increment() {
      // При клике на кнопку порождаем событие и отправляем новое значение
      this.$emit('increment', this.count + 1);
    },
  }
};
</script>

<style></style>
