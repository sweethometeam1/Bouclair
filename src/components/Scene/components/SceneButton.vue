<template>
  <button class="scene-button" :class="{['scene-button_' + type]: type, 'scene-button_active': active}" @click="onClick()">
    <i class="scene-button__ico" v-if="$slots.default">
      <slot />
    </i>
    <span class="scene-button__txt" v-if="name">{{ name }}</span>
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class SceneButton extends Vue {
  @Prop() private name?: string
  @Prop() private type?: string
  @Prop() private active?: boolean

  onClick () {
    this.$emit('click', name)
  }
}
</script>

<style lang="scss" scoped>
  .scene-button {
    background-color: #ffffff;
    color: #323232;
    padding: 0;
    margin: 0;
    border: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 70px;
    min-height: 80px;

    &__ico {
      width: 30px;
      height: 30px;
      fill: #323232;

      svg {
        width: 100%;
        height: 100%;
        fill: inherit;
      }
    }

    &__txt {
      font-size: 12px;
      line-height: 20px;
      font-weight: 300;
      margin-top: 4px;
    }

    // &:hover,
    &:active,
    &#{&}_active {
      background-color: #f9f9f9;
    }
  }

  @media screen and (max-width: 640px) and (orientation: portrait) {
    .scene__buttons {
      .scene-button {
        flex-direction: row;

        &__ico {
          margin-right: 10px;
        }
      }
    }
  }
</style>
