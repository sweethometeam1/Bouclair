<template>
  <WindowType v-if="name === 'window-type'" :width="width" :height="height" :fill="fill"></WindowType>
  <Roller v-else-if="name === 'roller'" :width="width" :height="height" :fill="fill"></Roller>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import WindowType from './components/WindowType.vue'
import Roller from './components/Roller.vue'

@Component({
  components: {
    WindowType,
    Roller
  }
})
export default class IconManager extends Vue {
  @Prop() private name!: string;
  @Prop() private width?: string | number;
  @Prop() private height?: string | number;
  @Prop() private fill?: string | number;
}
</script>
