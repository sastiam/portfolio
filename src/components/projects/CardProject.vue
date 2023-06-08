<template>
  <div class="card-project">
    <h1 class="card-project_name">
      {{ name }}
    </h1>
    <div class="card-project_tags">
      <li
        v-for="tag in tags"
        :key="tag"
      >
        {{ tag }}
      </li>
    </div>
  </div>
</template>

<script setup lang="ts">

withDefaults(
    defineProps<{
        name: string
        tags: Array<string>
    }>(),
    {
        name: 'Lorem Ipsum',
        tags: () => ['typescript', 'vue', 'aws']
    }
);

</script>

<style lang="scss" scoped>

</style>