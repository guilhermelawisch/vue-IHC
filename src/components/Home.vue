<template>
  <header>
    <h3>Problemática</h3>
    <h2>Interface Humano Computador</h2>
    <h3>Adequada</h3>
  </header>
  <main>
    <div class="left">
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
    <div class="right">
      <form action="">
        <div class="names">
          <div>
            <label for="name">Nome:</label>
            <input type="text" name="name" id="name" placeholder="nome">
          </div>
          <div>
            <label for="surname">Sobrenome:</label>
            <input type="text" name="surname" id="surname" placeholder="sobrenome">
          </div>
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
        <div class="address">
          <div>
            <label for="street number">Número:</label>
            <input type="text" name="street number" id="street number" placeholder="">
          </div>
          <div>
            <label for="complement">Complemento:</label>
            <input type="text" name="complement" id="complement" placeholder="">
          </div>
        </div>
        <div class="local">
          <div>
            <label for="province">Estado:</label>
            <input type="text" name="province" id="province" placeholder="">
          </div>
          <div>
            <label for="country">País:</label>
            <input type="text" name="country" id="country" placeholder="">
          </div>
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
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 10vw;

    background: #f0f0f5;
    border-bottom: 1px solid rgba(0,0,0,0.2)
  }

  main {
    margin: 15vh;

    display: flex;
    gap: 5%;
  }
  main .left {
    width: 47.5%;
  }
  main .right {
    width: 47.5%; 
  }
  main .right div {
    text-align: left;
    margin: 5px 0;
  }
  main .right .names {
    display: flex;
    gap: 8px;
  }
  main .right .address {
    display: flex;
    gap: 8px;
  }
  main .right .address div:first-child {
    flex: 1;
  }
  main .right .address div:last-child {
    flex: 2;
  }
  main .right .local {
    display: flex;
    gap: 8px;
  }
  main .right .local div:first-child {
    flex: 2;
  }
  main .right .local div:last-child {
    flex: 1;
  }
  main .right div input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
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

    background: #f0f0f5;
    border-top: 1px solid rgba(0,0,0,0.2)
  }
  footer a {
    text-decoration: none;
    color: rgb(0,0,0)
  }
</style>
