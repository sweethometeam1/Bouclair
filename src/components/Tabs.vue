<template>
  <section class="tabs">
    <div class="tabs__header">
      <button
        class="tabs-btn tabs-btn_abs tabs-btn_prev"
        title="previous tab"
        @click="prev()"
        v-show="active > 0"
      ><IconManager class="tabs-btn__ico" name="chevron-left" /></button>
      <ul class="tabs-header" :class="[showCounters ? 'tabs-header_counter' : '']">
        <li class="tabs-header__item" v-for="(tab, index) in tabs" :key="index">
          <button
            class="tab"
            :class="[showCounters ? 'tab_counter' : '', active === index ? 'tab_active' : '']"
            @click="setActiveTab(index)"
          >
            <div class="tab__name" :style="tab.color ? 'color:' + tab.color : ''">{{ tab.name }}</div>
            <div class="tab__counter" v-if="showCounters" :style="tab.color ? 'background-color:' + tab.color : ''">{{ '0' + (index + 1) }}</div>
          </button>
        </li>
        <li class="tabs-header__item" style="width: 100%">
          <div class="tab tab_fake" :class="[showCounters ? 'tab_counter' : '']">
            <div class="tab__name">.</div>
          </div>
        </li>
      </ul>
      <button
        class="tabs-btn tabs-btn_abs tabs-btn_next"
        title="next tab"
        @click="next()"
        v-show="active < tabs.length - 1"
      ><IconManager class="tabs-btn__ico" name="chevron-right" /></button>
    </div>
    <div class="tabs__content">
      <slot />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import IconManager from './IconManager/IconManager.vue'
import { VNode } from 'vue'
import * as animate from '@/assets/libs/animate.ts'

interface TabData {
  name: string,
  color?: string
}

@Component({
  components: {
    IconManager
  }
})
export default class Tabs extends Vue {
  @Prop({ default: false }) private showCounters!: boolean;

  active: number;
  tabs: TabData[];
  $tabs: Vue[];

  constructor (props: any) {
    super(props)
    this.active = -1
    this.tabs = []
    this.$tabs = []
  }

  mounted () {
    this.$tabs = this.$children.filter($tab => $tab.$vnode.componentOptions && $tab.$vnode.componentOptions.tag === 'Tab')

    if (this.$tabs.length) {
      this.tabs = this.$tabs.map($tab => ({
        name: $tab.$props.name,
        color: $tab.$props.color
      }))

      setTimeout(() => this.setActiveTab(0))
    }
  }

  scrollToTab (index: number) {
    const parent = this.$el.querySelector('.tabs-header')

    if (parent) {
      const children = parent.querySelectorAll('.tabs-header__item')

      if (children && children[index]) {
        const child = children[index] as HTMLElement
        const offsetGap = parent.scrollLeft
        const offsetLeft = child.offsetLeft

        animate.start((progress: number) => {
          parent.scrollTo(offsetGap + (offsetLeft - offsetGap) * progress, 0)
        }, 300, animate.f.linear)
      }
    }
  }

  prev () {
    this.setActiveTab(this.active - 1)
  }

  next () {
    this.setActiveTab(this.active + 1)
  }

  setActiveTab (index: number) {
    if (index > -1 && this.$tabs[index]) {
      this.active = index

      this.$tabs.map(($tab: any, i) => {
        $tab.active = index === i
      })

      this.scrollToTab(index)
    }
  }
}
</script>

<style lang="scss" scoped>
  // colors
  $c-white: #ffffff;
  $c-grey: #f1f1f1;
  $c-accent: #63af67;
  $c-black: #000000;
  $c-black-l: #323232;
  $c-txt: $c-black;
  $c-txt-light: $c-black-l;
  $c-txt-alt: $c-white;
  $c-btn-bg: $c-grey;
  $c-btn: $c-txt;
  $c-tab: $c-txt-light;
  $c-tab-active: $c-txt;
  $c-border: $c-grey;
  $c-border-dark: $c-black;
  $c-counter-bg: $c-accent;
  $c-counter: $c-txt-alt;

  // sizes
  $s-border: 2px;
  $s-counter: 24px;
  $s-counter-w: $s-counter;
  $s-counter-h: $s-counter;
  $s-counter-pt: 5px;
  $s-counter-pr: 6px;
  $s-counter-pb: 4px;
  $s-counter-pl: $s-counter-pr;

  // transition
  $t-duration: .3s;
  $t-function: linear;

  .tabs {
    &__header {
      position: relative;
    }

    // &__content

    &-header {
      display: block;
      padding: 0;
      margin: 0;
      font-size: 0;
      white-space: nowrap;
      overflow: hidden;

      &__item {
        display: inline-block;
      }

      &#{&}_counter {
        margin-top: -$s-counter-h;
      }

      &#{&}_counter &__item {
        padding-top: $s-counter-h;
      }
    }

    &-btn {
      font-size: 0;
      border: 0;
      display: inline-block;
      width: 30px;
      height: 45px;
      background-color: $c-btn-bg;
      color: $c-btn;
      padding: 0;

      &#{&}_abs {
        position: absolute;
        z-index: 1;
        // height: 100%;
      }

      &#{&}_prev {
        bottom: $s-border;
        left: 0;
      }

      &#{&}_next {
        bottom: $s-border;
        right: 0;
      }

      &__ico {
        width: 8px;
        height: 16px;
      }
    }
  }

  .tab {
    border: 0;
    background-color: transparent;
    padding: 10px 16px;
    font-size: 0;
    position: relative;
    border-bottom: $s-border solid $c-border;
    color: $c-tab;
    transition: color $t-duration $t-function;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 100%;
      width: 0%;
      transition: width $t-duration $t-function, background-color $t-duration $t-function;
      height: $s-border;
      background-color: $c-border;
    }

    &__name {
      font-size: 12px;
      font-weight: 300;
      line-height: 25px;
    }

    &__counter {
      font-size: 12px;
      line-height: $s-counter-h - $s-counter-pt - $s-counter-pb;
      font-weight: 500;
      position: absolute;
      bottom: 100%;
      left: 0;
      margin-bottom: $s-border;
      background-color: $c-counter-bg;
      color: $c-counter;
      padding-top: $s-counter-pt;
      padding-right: $s-counter-pr;
      padding-bottom: $s-counter-pb;
      padding-left: $s-counter-pl;
      min-width: $s-counter-w;
      opacity: 0;
      transition: opacity $t-duration $t-function;
    }

    &#{&}_fake {
      color: transparent;
      pointer-events: none;
    }

    &#{&}_counter {
      border-top: $s-border solid $c-border;

      &::before {
        bottom: 100%;
        top: auto;
      }
    }

    &#{&}_counter &__name {
      font-size: 14px;
      font-weight: 700;
    }

    &#{&}_active {
      color: $c-tab-active;

      &::before {
        width: 100%;
        background-color: $c-border-dark;
      }
    }

    &#{&}_active &__name {
      font-weight: 700;
    }

    &#{&}_active &__counter {
      opacity: 1;
    }
  }
</style>
