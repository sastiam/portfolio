<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="layout-header">
    <top-navbar />
  </div>
  <div class="layout-container">
    <router-view v-slot="{Component}">
      <component :is="Component" />
    </router-view>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

.layout-container {
    display: flex;
    flex-direction: column;
    gap: 45px;
    flex-wrap: nowrap;
}

</style>
