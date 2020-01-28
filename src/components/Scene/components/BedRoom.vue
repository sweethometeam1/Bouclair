<template>
  <img src="@/assets/images/scene/bedroom/bg.jpg" alt="" class="room">
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class BedRoom extends Vue {}
</script>

<style lang="scss" scoped>
  $src-assets: './../../../assets/';

  .room {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
