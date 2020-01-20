<template>
  <div class="sidebar">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
const mock = require('@/data.mock.json')

@Component
export default class Sidebar extends Vue {
  data: any[];

  constructor (props: any) {
    super(props)
    this.data = mock.sidebar
  }

  addItemsCounter = (tab: any) => tab.name + ' (' + tab.items.length + ')'
}
</script>

<style lang="scss" scoped></style>
