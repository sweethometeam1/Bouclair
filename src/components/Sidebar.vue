<template>
  <div class="sidebar">
    <Tabs :showCounters="true">
      <Tab v-for="(tab, index) in data" :key="index" :name="tab.name" :color="tab.color">
        <Tabs>
          <Tab v-for="(tab, index) in tab.items" :key="index" :name="addItemsCounter(tab)">
            <div v-for="(product, index) in tab.items" :key="index">
              {{ product }}
              <img :src="product.img" alt="" :title="product">
            </div>
          </Tab>
        </Tabs>
      </Tab>
    </Tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Tabs from './Tabs.vue'
import Tab from './Tab.vue'
const mock = require('@/data.mock.json')

@Component({
  components: {
    Tabs,
    Tab
  }
})
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
