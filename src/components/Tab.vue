<template>
  <div class="tabs-content" :color="color" :name="name" v-if="active">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Tab extends Vue {
  @Prop() private name!: string;
  @Prop() private color?: string;

  public active: boolean

  constructor (props: any) {
    super(props)
    this.active = false
  }
}
</script>
