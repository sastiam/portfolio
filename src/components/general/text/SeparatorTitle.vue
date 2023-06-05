<template>
  <h1>{{ title }}</h1>
</template>

<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<style lang="scss" scoped>
h1 {
    background-color: aqua;
    width: auto;
    height: auto;
}
</style>
