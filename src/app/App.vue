<template>
  <div id="app">
    <Header />
    <Container class="app-container">
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
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-container {
  flex: 1 0 auto;
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

@media screen and (max-width: 768px) {
  .app-container {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    margin-left: 0;
  }
}

@media screen and (min-width: 640px) and (max-width: 768px) and (orientation: landscape) {
  .app-container {
    flex-direction: row;
  }

  .sidebar {
    margin-left: 15px;
  }
}
</style>
