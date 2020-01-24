<template>
  <div class="scene">
    <div class="scene__buttons">
      <SceneButton v-for="(active, name, index) in popups" :key="index" :name="name" :type="active ? 'active' : null" @click="togglePopup(name)">
        <IconManager name="window-type" />
      </SceneButton>
    </div>
    <div class="scene__popups">
      <ScenePopup v-for="(active, name, index) in popups" :key="index" :name="name" v-show="active" @close="togglePopup(name)">
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
    </div>
    <LivingRoom v-if="current === 'livingroom'" class="scene__bg" />
    <BedRoom v-if="current === 'bedroom'" class="scene__bg" />
    <KidsRoom v-if="current === 'kidsroom'" class="scene__bg" />
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
    [name: string]: boolean
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
      'Room': false,
      'Color': false
    }
  }

  togglePopup (name: string) {
    this.popups[name] = !this.popups[name]
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

    &__bg {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center top;
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
    }

    &-button {
      & + & {
        border-top: 1px solid #f9f9f9;
      }
    }
  }
</style>
