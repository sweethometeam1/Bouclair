<template>
  <div id="app">
    <Header />
    <Container>
      <Scene type="livingroom" />
      <Sidebar />
    </Container>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Container from '@/components/Container.vue'
import Scene from '@/components/Scene/Scene.vue'
import Sidebar from '@/components/Sidebar.vue'

@Component({
  components: {
    Header,
    Footer,
    Container,
    Scene,
    Sidebar
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import '@/assets/styles/index.scss';
#app {
  font-family: 'CircularStd', sans-serif;
  color: #000000;
}

* {
  box-sizing: border-box;
}

button {
  cursor: pointer;
  outline: none;
}

.container {
  margin-top: 55px;
  margin-bottom: 62px;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
}

.scene {}

.sidebar {
  min-width: 300px;
  width: 300px;
  margin-left: 40px;
}
</style>
