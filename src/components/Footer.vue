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
    flex: 0 0 auto;

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
  }

  @media screen and (max-width: 768px) {
    .footer {
      position: fixed;
      left: 0;
      bottom: 0;
      z-index: 1;
    }
  }

  @media screen and (max-width: 370px) {
    .footer {
      &-container__item {
        width: 50%;
      }

      &-button {
        width: 100%;
      }
    }
  }
</style>
