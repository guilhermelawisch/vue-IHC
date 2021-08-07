<template>
  <header>
    <h3>Problemática</h3>
    <h2>Interface Humano Computador</h2>
    <h3>Adequada</h3>
  </header>
  <main>
    <div class="left">
      <form action="">
        div*11>label+input:text+span
      </form>
    </div>
    <div class="right">
      <form action="">
        <div>
          <label for="name">Nome:</label>
          <input type="text" name="name" id="name" placeholder="nome">
        </div>
        <div>
          <label for="surname">Sobrenome:</label>
          <input type="text" name="surname" id="surname" placeholder="sobrenome">
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="text" name="email" id="email" placeholder="">
        </div>
        <div>
          <label for="phone">Phone:</label>
          <input type="text" name="phone" id="phone" placeholder="">
        </div>
        <div>
          <label for="cep">CEP:</label>
          <input type="text" name="cep" id="cep" placeholder="">
        </div>
        <div>
          <label for="street address">Rua:</label>
          <input type="text" name="street address" id="street address" placeholder="">
        </div>
        <div>
          <label for="street number">Número:</label>
          <input type="text" name="street number" id="street number" placeholder="">
        </div>
        <div>
          <label for="complement">Complemento:</label>
          <input type="text" name="complement" id="complement" placeholder="">
        </div>
        <div>
          <label for="province">Estado:</label>
          <input type="text" name="province" id="province" placeholder="">
        </div>
        <div>
          <label for="country">País:</label>
          <input type="text" name="country" id="country" placeholder="">
        </div>
        <div>
          <label for="linkedin">LinkedIn:</label>
          <input type="text" name="linkedin" id="linkedin" placeholder="">
        </div>
      </form>
    </div>
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
    justify-content: space-around;
    text-align: center;

    border-bottom: 1px solid rgba(0,0,0,0.2)
  }
  main {
    margin: 10vh 0; 
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
