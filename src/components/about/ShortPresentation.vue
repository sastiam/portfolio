<template>
  <section class="short-presentation">
    <span>Logo!</span>
    <div class="short-presentation__content">
      <div class="short-presentation__content__title">
        <p>Hi, I’m Sebastian a</p>
        <badge-text
          title="Software Developer"
          size="medium"
          type="primary"
        />
      </div>
      <p>based in Peru.</p>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>

.short-presentation {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    width: -moz-fit-content;
    width: fit-content;
    align-items: center;
    margin: 0 auto;

    &__content {
        white-space: pre;

        &__title {
            align-items: center;
            display: flex;
            flex-wrap: wrap;
            gap: 2px;
            justify-content: space-evenly;
        }

        p {
            font-size: 2em;
            font-weight: 600;
            white-space: pre;
            text-align: center;
        }
    }
}

</style>
