<template>
  <div id="app">
    <Home msg="Hello World"/>
  </div>
</template>

<script>
/* eslint-disable */
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
/*eslint-enable */
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background: #f0f0f5;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
