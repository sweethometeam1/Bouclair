<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" :fill="fill" viewBox="0 0 29 29"><g><g><path d="M27.97 28H1.027v-2H27.97zM13.98 14L14 25H5.02l-.021-11zm-8.981-1l.02-10H14l-.02 10zm18.96 1l.02 11h-8.981l-.02-11zm-8.982-1l.02-10h8.982l-.02 10zM3.025 1h22.948v24h-.997V2.5a.5.5 0 0 0-.499-.5H4.521a.5.5 0 0 0-.5.5V25h-.996zm25.444 24H26.97V.5a.5.5 0 0 0-.498-.5H2.526a.5.5 0 0 0-.499.5V25H.53a.5.5 0 0 0-.499.5v3a.5.5 0 0 0 .499.5h27.94a.5.5 0 0 0 .499-.5v-3a.5.5 0 0 0-.499-.5z"/></g></g></svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class WindowType extends Vue {
  @Prop({ default: 29 }) private width!: string | number;
  @Prop({ default: 29 }) private height!: string | number;
  @Prop() private fill?: string | number;
}
</script>
