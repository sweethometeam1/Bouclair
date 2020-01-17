<template>
  <header class="header"></header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
  .header {
    width: 100%;
    height: 121px;
    background: center / cover no-repeat url('../assets/images/header/top.jpg');
  }
</style>
