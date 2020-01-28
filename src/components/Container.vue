<template>
  <div class="container">
    <slot/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Container extends Vue {}
</script>

<style lang="scss" scoped>
  .container {
    max-width: 1170px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (max-width: 1200px) {
    .container {
      padding: 0 15px;
    }
  }

  @media screen and (max-width: 768px) {
    .container {
      padding: 0 70px;
    }
  }

  @media screen and (max-width: 600px) {
    .container {
      padding: 0 15px;
    }
  }

  @media screen and (min-width: 640px) and (max-width: 768px) and (orientation: landscape) {
    .container {
      padding: 0 15px;
    }
  }
</style>
