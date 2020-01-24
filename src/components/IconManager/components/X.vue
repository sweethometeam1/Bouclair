<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" :fill="fill" viewBox="0 0 10 10"><g><g><path d="M5.728 5.007L9.838.915a.496.496 0 0 0 0-.706.506.506 0 0 0-.713 0L5.02 4.297.875.147a.503.503 0 0 0-.713 0 .507.507 0 0 0 0 .716L4.304 5.01.147 9.147a.497.497 0 0 0 0 .707.506.506 0 0 0 .713 0l4.152-4.135L9.14 9.852a.503.503 0 0 0 .713 0 .507.507 0 0 0 0-.715z"/></g></g></svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class X extends Vue {
  @Prop({ default: 10 }) private width!: string | number;
  @Prop({ default: 10 }) private height!: string | number;
  @Prop() private fill?: string | number;
}
</script>
