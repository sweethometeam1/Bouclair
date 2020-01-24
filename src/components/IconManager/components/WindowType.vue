<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" :fill="fill" viewBox="0 0 29 31"><g><g><path d="M18 2h1v5h-1zm-6 12h5v1h-5zM4 28h4v1H4zM29.031 3v25a3 3 0 0 1-3 3h-23a3 3 0 0 1-3-3V17H0v-1h.031V3a3 3 0 0 1 3-3h23a3 3 0 0 1 3 3zM10 30h16.031a2 2 0 0 0 2-2V17H10zm18.031-14V3a2 2 0 0 0-2-2H21v15zm-27 12a2 2 0 0 0 2 2H9V17H1.031zm2-27a2 2 0 0 0-2 2v13H20V1z"/></g></g></svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class WindowType extends Vue {
  @Prop({ default: 29 }) private width!: string | number;
  @Prop({ default: 31 }) private height!: string | number;
  @Prop() private fill?: string | number;
}
</script>
