<script setup lang="ts">
import SeparatorTitle from './general/text/SeparatorTitle.vue';


defineProps<{ msg: string }>();

</script>

<template>
  <SeparatorTitle :title="msg" />
</template>

<style lang="scss" scoped>
.read-the-docs {
  color: #888;
}
</style>
