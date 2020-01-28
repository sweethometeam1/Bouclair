<template>
  <div class="scene">
    <div class="scene__room">
      <LivingRoom v-if="current === 'livingroom'" />
      <BedRoom v-if="current === 'bedroom'" />
      <KidsRoom v-if="current === 'kidsroom'" />
    </div>
    <div class="scene__buttons">
      <SceneButton v-for="(active, name, index) in popups" :key="index" :name="name" :type="active.active ? 'active' : null" @click="togglePopup(name)">
        <IconManager :name="active.ico" />
      </SceneButton>
    </div>
    <div class="scene__popups">
      <transition-group name="popup-fade">
        <ScenePopup v-for="(active, name, index) in popups" :key="index + 1" :name="name"
          v-show="active.active" @close="togglePopup(name)" :class="{'visible' : active.active}">
          <div v-if="name === 'Room'">
            <div class="scene-popup-room">
              <div class="scene-popup-room__btn">
                <SceneButton
                  v-for="(scene, index) in scenes"
                  :key="index"
                  type="alt"
                  :name="scene.name"
                  :active="current === scene.type"
                  @click="setScene(scene.type)"
                ></SceneButton>
              </div>
            </div>
          </div>
          <div v-else-if="name === 'Color'">
            Content
          </div>
        </ScenePopup>
      </transition-group>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import LivingRoom from './components/LivingRoom.vue'
import BedRoom from './components/BedRoom.vue'
import KidsRoom from './components/KidsRoom.vue'
import SceneButton from './components/SceneButton.vue'
import ScenePopup from './components/ScenePopup.vue'
import IconManager from '@/components/IconManager/IconManager.vue'

@Component({
  components: {
    LivingRoom,
    BedRoom,
    KidsRoom,
    SceneButton,
    ScenePopup,
    IconManager
  }
})
export default class Scene extends Vue {
  @Prop({ default: 'livingroom' }) private type!: string

  public scenes: {
    type: string,
    name: string
  }[]
  public current: string
  public popups: {
    [name: string]: {
      active: boolean,
      ico: string
    }
  }

  constructor (props: any) {
    super(props)

    this.scenes = [
      {
        type: 'livingroom',
        name: 'Living room'
      },
      {
        type: 'bedroom',
        name: 'Bedroom'
      },
      {
        type: 'kidsroom',
        name: 'Kids room'
      }
    ]
    this.current = this.type
    this.popups = {
      'Room': {
        active: false,
        ico: 'window-type'
      },
      'Color': {
        active: false,
        ico: 'roller'
      }
    }
  }

  togglePopup (name: string) {
    for (let popup in this.popups) {
      this.$set(
        this.popups[popup],
        'active',
        popup === name && !this.popups[popup].active
      )
    }
  }

  getActivePopup () {
    for (let popup in this.popups) {
      if (this.popups[popup].active) return this.popups[popup]
    }
  }

  setScene (name: string) {
    this.current = name
  }
}
</script>

<style lang="scss" scoped>
  .scene {
    width: 100%;
    height: 650px;
    font-size: 0;
    position: relative;

    &__room {
      width: 100%;
      height: 100%;
    }

    &__buttons {
      position: absolute;
      top: 20px;
      left: 20px;
      border-radius: 1px;
      overflow: hidden;
    }

    &__popups {
      position: absolute;
      top: 20px;
      left: 100px;
      z-index: 3;
    }

    &-button {
      & + & {
        border-top: 1px solid #f9f9f9;
      }
    }
  }

  .popup-fade-enter-active, .popup-fade-leave-active {
    transition: opacity .3s linear;
  }

  .popup-fade-enter, .popup-fade-leave-to {
    opacity: 0;
  }

  .popup-fade-leave-active, .popup-fade-leave-to {
    position: absolute;
    top: 0;
    left: 0;
  }

  @media screen and (max-width: 786px) and (orientation: portrait) {
    .scene {
      height: initial;

      &__room {
        height: 300px;
      }
    }
  }

  @media screen and (max-width: 640px) and (orientation: portrait) {
    .scene {
      height: initial;

      &__room {
        height: 100px;
      }

      &__buttons {
        position: static;
        display: flex;

        .scene-button {
          width: 50%;
          position: relative;
          min-height: 50px;

          & + & {
            border: none;
          }

          &:not(:last-child) {
            &::after {
              content: '';
              height: 100%;
              width: 2px;
              top: 0;
              right: 0;
              position: absolute;
              background-color: #f9f9f9;
            }
          }
        }
      }

      &__popups {
        width: 100%;
        top: 50px;
        left: 0;
      }

      &-popup {
        &-room {
          &__btn {
            display: flex;
            justify-content: space-around;
          }
        }
      }
    }

    .popup-fade-leave-active, .popup-fade-leave-to {
      position: absolute;
      top: 0;
      width: 100%;
    }
  }
</style>
