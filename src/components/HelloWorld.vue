<script setup lang="ts">

defineProps<{ msg: string }>();

</script>

<template>
  <badge-text
    :title="msg"
    :size="'large'"
    :type="'accent'"
  />
</template>

<style lang="scss" scoped>
</style>
