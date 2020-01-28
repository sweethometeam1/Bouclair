<template>
  <!-- <img src="@/assets/images/scene/livingroom/bg.jpg" alt=""> -->
  <div class="room">
    <div class="room__bg">
      <div class="room-bg">
        <i class="room-bg__wall" :style="{backgroundColor: wallColor}"></i>
        <i class="room-bg__item"></i>
      </div>
    </div>
    <div class="room__main">
      <div class="room-main">
        <i class="room-main__window"></i>
        <div class="room-main__curtain">
          <div class="room-main-curtain">
            <!-- <img :src="curtain.old" alt="old curtain" class="room-main-curtain__item"> -->
            <img :src="curtain.new" alt="new curtain" class="room-main-curtain__item">
          </div>
        </div>
        <i class="room-main__rod"></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class LivingRoom extends Vue {
  wallColor: string
  curtain: {
    new: string,
    old: string,
    loaded: boolean
  }

  constructor (props: any) {
    super(props)

    this.curtain = {
      new: this.$store.state.sceneCurtain,
      old: '',
      loaded: false
    }

    this.wallColor = this.$store.state.sceneWallColor
  }

  mounted () {
    this.$store.watch(
      state => state.sceneCurtain,
      (url: string, old: string) => {
        this.curtain.loaded = false
        this.curtain.new = url
        this.curtain.old = old
      }
    )

    this.$store.watch(
      state => state.sceneWallColor,
      (color: string) => {
        this.wallColor = color
      }
    )
  }
}
</script>

<style lang="scss" scoped>
  // todo: transform px to rem, em or %
  $src-assets: './../../../assets/';
  @mixin abs ($w: 100%, $h: 100%, $t: 0, $l: 0) {
    position: absolute;
    top: $t;
    left: $l;
    width: $w;
    height: $h
  }

  .room {
    @include abs;
    overflow: hidden;
    // pointer-events: none;

    // &__bg {}

    // &__main {}

    &-bg {
      @include abs;

      &__wall {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-image: url($src-assets + 'images/scene/livingroom/wall.png');
        background-size: cover;
      }

      &__item {
        $offset: -150px;

        width: 100%;
        height: 100%;
        position: absolute;
        right: 0;
        bottom: $offset;
        background-image: url($src-assets + 'images/scene/livingroom/bg.png');
        background-size: contain;
        background-position: 100% 100%;
        background-repeat: no-repeat;
        z-index: 1;
      }
    }

    &-main {
      @include abs(640px, 100%, 20px);
      &__window {
        @include abs(85%, 100%, 22px, 60px);
        background-image: url($src-assets + 'images/scene/livingroom/window.jpg');
        background-size: 100% auto;
        background-position: top center;
        background-repeat: no-repeat;
      }

      &__curtain {
        @include abs(615px, 100%, 0, 20px);
        background-size: 100% auto;
        background-position: top center;
        background-repeat: no-repeat;
      }

      // &__rod {}

      &-curtain {
        @include abs;

        &__item {
          @include abs(100%, auto);
        }
      }
    }
  }
</style>
