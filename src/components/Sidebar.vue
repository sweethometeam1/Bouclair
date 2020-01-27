<template>
  <div class="sidebar">
    <Tabs :showCounters="true" @changed="tabsChanged">
      <Tab v-for="(tab, index) in data" :key="index" :name="tab.name" :color="tab.color">
        <Tabs>
          <Tab v-for="(tab, index) in tab.items" :key="index" :name="addItemsCounter(tab)">
            <div class="products">
              <Product v-for="(product, index) in tab.items" :key="index"  :data="product"/>
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
import Product from './Product.vue'
const mock = require('@/data.mock.json')

@Component({
  components: {
    Tabs,
    Tab,
    Product
  }
})
export default class Sidebar extends Vue {
  activeTab: number;
  data: any[];

  constructor (props: any) {
    super(props)
    this.data = mock.sidebar
    this.activeTab = 0

    // initialize main tabs store
    this.$store.commit('setMainTabIndex', this.activeTab)
    this.$store.commit('setMainTabLength', this.data.length)
  }

  mounted () {
    this.$store.watch(
      state => state.mainTabIndex,
      (index, oldIndex) => {
        this.$emit('setTabsIndex', index)
      }
    )
  }

  addItemsCounter = (tab: any) => tab.name + ' (' + tab.items.length + ')'

  tabsChanged (current: number) {
    // to prevent recurrence
    if (this.activeTab !== current) {
      this.activeTab = current
      this.$store.commit('setMainTabIndex', current)
    }
  }
}
</script>

<style lang="scss" scoped>
  .products {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 30px;
    grid-column-gap: 30px;
    padding-top: 40px;
    overflow-y: auto;
    max-height: 554px;
  }
</style>
