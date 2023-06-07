<template>
  <div 
    :class="['bagde-text', type]"
  >
    <span :class="['bagde-text__content', size]">{{ title }}</span>
  </div>
</template>

<script setup lang="ts">

withDefaults(
    defineProps<{
        title: string
        size?: 'small' | 'medium' | 'large' | 'huge'
        type?: 'primary' | 'secondary' | 'accent'
    }>(),
    {
        title: '',
        size: 'medium',
        type: 'primary',
    }
);

</script>

<style lang="scss" scoped>
.bagde-text {
    border-radius: .75em;
    width: fit-content;
    padding: 0 .65em;
    margin: .25em;
    &.primary {
        background-color: $primary;
    }
    &.secondary {
        background-color: $secondary;
    }
    &.accent {
        background-color: $accent;
    }

    &__content {
        margin: 0;
        font-family: 'Oswald';
        font-weight: 700;
        &.small {
            font-size: .75em;
        }
        &.medium {
            font-size: 1.65em;
        }
        &.large {
            font-size: 2.75em;
        }
        &.huge {
            font-size: 3.25em;
        }
    }
}


</style>
