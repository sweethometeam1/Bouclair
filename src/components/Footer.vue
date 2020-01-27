<template>
  <footer class="footer">
    <Container class="footer-container">
      <div class="footer-container__item">
        <div class="footer-counter">
          <span class="footer-counter__item">{{ $store.state.mainTabIndex + 1 }}</span>
          <span class="footer-counter__item"> / </span>
          <span class="footer-counter__item footer-counter__item_lg">{{ $store.state.mainTabLength }}</span>
        </div>
      </div>
      <div class="footer-container__item">
        <Button class="footer-button" type="dark" @click="next()">Continue</Button>
      </div>
    </Container>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Container from './Container.vue'
import Button from './Button.vue'

@Component({
  components: {
    Container,
    Button
  }
})
export default class Header extends Vue {
  next () {
    this.$store.commit('setMainTabIndex', this.$store.state.mainTabIndex + 1)
  }
}
</script>

<style lang="scss" scoped>
  $footer-bg: #f9f9f9;
  $c-black-l: #323232;

  .footer {
    width: 100%;
    background-color: $footer-bg;

    &-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    &-counter {
      display: inline-block;

      &__item {
        color: $c-black-l;
        font-weight: 300;
        font-size: 12px;

        &#{&}_lg {
          font-size: 16px;
        }
      }
    }

    &-button {
      width: 300px;
      justify-content: center;
    }

    @media screen and (max-width: 1170px) {
      padding: 0 15px;
    }

    @media screen and (max-width: 420px) {
      display: none;
    }
  }
</style>
