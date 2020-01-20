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
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
  }
</style>
