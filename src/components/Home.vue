<template>
  <header>
    <h2>Interface Humano Computador</h2>
  </header>
  <main>
  
  </main>
  <footer>
    <a href="https://guilhermelawisch.vercel.app">by Guilherme Lawisch Machado &copy</a>
  </footer>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header {
    position: fixed;
    top: 0;

    width: 100vw;
    height: 10vh;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    border-bottom: 1px solid rgba(0,0,0,0.2)
  }

  footer {
    position: fixed;
    bottom: 0;

    width: 100vw;
    height: 10vh;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    border-top: 1px solid rgba(0,0,0,0.2)
  }
  footer a {
    text-decoration: none;
    color: rgb(0,0,0)
  }
</style>
