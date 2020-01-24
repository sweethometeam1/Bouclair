<template>
  <button class="btn" :class="'btn_' + type" @click="onClick()"><slot /></button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Button extends Vue {
  @Prop({ default: 'dark' }) private type!: string

  onClick () {
    this.$emit('click')
  }
}
</script>

<style lang="scss" scoped>
  $btn-dark-bg: #323232;
  $btn-dark-c: #ffffff;

  .btn {
    width: 100%;
    display: inline-flex;
    border: 0;
    background: transparent;
    padding: 17px 20px 15px;
    line-height: 12px;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;

    &#{&}_dark {
      background: $btn-dark-bg;
      color: $btn-dark-c;
    }

    &#{&}_dark-round {
      background: $btn-dark-bg;
      color: $btn-dark-c;
      padding: 10px;
      border-radius: 15px;

      svg {
        fill: $btn-dark-c;
      }
    }
  }
</style>
