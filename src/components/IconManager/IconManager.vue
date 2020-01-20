<template>
  <WindowType v-if="name === 'window-type'" :width="width" :height="height" :fill="fill"></WindowType>
  <Roller v-else-if="name === 'roller'" :width="width" :height="height" :fill="fill"></Roller>
  <ChevronRight v-else-if="name === 'chevron-right'" :width="width" :height="height" :fill="fill"></ChevronRight>
  <ChevronLeft v-else-if="name === 'chevron-left'" :width="width" :height="height" :fill="fill"></ChevronLeft>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import WindowType from './components/WindowType.vue'
import Roller from './components/Roller.vue'
import ChevronRight from './components/ChevronRight.vue'
import ChevronLeft from './components/ChevronLeft.vue'

@Component({
  components: {
    WindowType,
    Roller,
    ChevronRight,
    ChevronLeft
  }
})
export default class IconManager extends Vue {
  @Prop() private name!: string;
  @Prop() private width?: string | number;
  @Prop() private height?: string | number;
  @Prop() private fill?: string | number;
}
</script>
