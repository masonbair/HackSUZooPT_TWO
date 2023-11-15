<template>
  <img @click="state.count += 1" src="alpaca.jpg" />
  <p>Pets received: {{ state.count }}</p>
</template>

<script setup>
const state = reactive({
  count: 0,
});
</script>
