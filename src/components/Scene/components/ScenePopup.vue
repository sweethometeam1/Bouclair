<template>
  <section class="scene-popup">
    <div class="scene-popup__x"><Button type="dark-round" @click="onClose()"><IconManager name="x" /></Button></div>
    <div class="scene-popup__content">
      <h4 class="scene-popup-title">{{ name }}</h4>
      <slot />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import IconManager from '@/components/IconManager/IconManager.vue'
import Button from '@/components/Button.vue'

@Component({
  components: {
    IconManager,
    Button
  }
})
export default class ScenePopup extends Vue {
  @Prop() private name?: string

  onClose () {
    this.$emit('close')
  }
}
</script>

<style lang="scss" scoped>
  .scene-popup {
    padding: 30px 35px;
    background-color: #ffffff;
    position: relative;

    &__x {
      position: absolute;
      top: 5px;
      right: 6px;
    }

    &-title {
      font-size: 20px;
      font-weight: 700;
      line-height: 25px;
      margin: 10px 0;

      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>
