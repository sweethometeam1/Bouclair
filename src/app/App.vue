<template>
  <div id="app">
    <Header />
    <Container>
      <Scene type="livingroom" />
    </Container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from '@/components/Header.vue'
import Container from '@/components/Container.vue'
import Scene from '@/components/Scene/Scene.vue'

@Component({
  components: {
    Header,
    Container,
    Scene
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import '../../node_modules/normalize.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
</style>
