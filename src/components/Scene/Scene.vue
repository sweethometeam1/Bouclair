<template>
  <div class="scene">
    <LivingRoom v-if="type === 'livingroom'" class="scene__bg" />
    <BedRoom v-if="type === 'bedroom'" class="scene__bg" />
    <KidsRoom v-if="type === 'kidsroom'" class="scene__bg" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import LivingRoom from './components/LivingRoom.vue'
import BedRoom from './components/BedRoom.vue'
import KidsRoom from './components/KidsRoom.vue'

@Component({
  components: {
    LivingRoom,
    BedRoom,
    KidsRoom
  }
})
export default class Scene extends Vue {
  @Prop({ default: 'livingroom' }) private type!: string
}
</script>

<style lang="scss" scoped>
  .scene {
    width: 100%;
    height: 650px;
    font-size: 0;

    &__bg {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center top;
    }
  }
</style>
