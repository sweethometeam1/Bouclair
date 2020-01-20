<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" :fill="fill" viewBox="0 0 8 16"><g><g transform="rotate(-0 4 8)"><path d="M.212 8.565l6.514 7.187a.686.686 0 0 0 1.035 0 .866.866 0 0 0 0-1.14L1.764 7.994 7.76 1.377a.867.867 0 0 0 0-1.141.686.686 0 0 0-1.036 0L.211 7.423a.876.876 0 0 0 0 1.142z"/></g></g></svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class ChevronLeft extends Vue {
  @Prop({ default: 8 }) private width!: string | number;
  @Prop({ default: 16 }) private height!: string | number;
  @Prop({ default: '#323232' }) private fill!: string | number;
}
</script>
