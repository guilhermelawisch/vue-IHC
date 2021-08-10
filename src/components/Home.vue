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
          <label for="incorrect-name">Nome:* </label>
          <input type="text" name="incorrect-name" id="incorrect-name">
        </div>
        <div>
          <label for="incorrect-surname">Sobrenome:* </label>
          <input type="text" name="incorrect-surname" id="incorrect-surname">
        </div>
        <div>
          <label for="incorrect-email">Email:* </label>
          <input type="text" name="incorrect-email" id="incorrect-email" placeholder="">
        </div>
        <div>
          <label for="incorrect-phone">Phone: </label>
          <input type="text" name="incorrect-phone" id="incorrect-phone" placeholder="">
        </div>
        <div>
          <label for="incorrect-cep">CEP:* </label>
          <input type="text" name="incorrect-cep" id="incorrect-cep" placeholder="">
        </div>
        <div>
          <label for="incorrect-street address">Rua:* </label>
          <input type="text" name="incorrect-street-address" id="incorrect-street address" placeholder="">
        </div>
        <div>
          <label for="incorrect-street number">Número:* </label>
          <input type="text" name="incorrect-street-number" id="incorrect-street number" placeholder="">
        </div>
        <div>
          <label for="incorrect-complement">Complemento: </label>
          <input type="text" name="incorrect-complement" id="incorrect-complement" placeholder="">
        </div>
        <div>
          <label for="incorrect-city">Cidade:* </label>
          <input type="text" name="incorrect-city" id="incorrect-city" placeholder="">
        </div>
        <div>
          <label for="incorrect-province">Estado:* </label>
          <input type="text" name="incorrect-province" id="incorrect-province" placeholder="">
        </div>
        <div>
          <label for="incorrect-country">País:* </label>
          <input type="text" name="incorrect-country" id="incorrect-country" placeholder="">
        </div>
        <div>
          <label for="incorrect-linkedin">LinkedIn: </label>
          <input type="text" name="incorrect-linkedin" id="incorrect-linkedin" placeholder="">
        </div>
        <div class="submit">
          <p><span>*</span> campos obrigatórios</p>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
    <div class="right">
      <form action="">
        <div class="names">
          <div>
            <label for="name">Nome:<span>*</span></label>
            <input type="text" name="name" id="name" placeholder="seu nome">
          </div>
          <div>
            <label for="surname">Sobrenome:<span>*</span></label>
            <input type="text" name="surname" id="surname" placeholder="seu sobrenome">
          </div>
        </div>
        <div class="born-and-phone">
          <div>
            <label for="phone">Phone:</label>
            <input type="text" name="phone" id="phone" placeholder="11 4002 8922">
          </div>
          <div>
            <label for="birth-date">Data de Nascimento:<span>*</span></label>
            <input type="date" name="birth-date" id="birth-date">
          </div>
        </div>
        <div>
          <label for="email">Email:<span>*</span></label>
          <input type="text" name="email" id="email" placeholder="noreply@exemplo.com">
        </div>
        <div class="cep">
          <label for="cep">CEP:<span>*</span></label>
          <div>
            <input type="text" name="cep" id="cep" placeholder="00000-000" v-model="cep">
            <button @click="getAddress(event)">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
                <path d="M496.131 435.698l-121.276-103.147c-12.537-11.283-25.945-16.463-36.776-15.963 28.628-33.534 45.921-77.039 45.921-124.588 0-106.039-85.961-192-192-192s-192 85.961-192 192 85.961 192 192 192c47.549 0 91.054-17.293 124.588-45.922-0.5 10.831 4.68 24.239 15.963 36.776l103.147 121.276c17.661 19.623 46.511 21.277 64.11 3.678s15.946-46.449-3.677-64.11zM192 320c-70.692 0-128-57.308-128-128s57.308-128 128-128 128 57.308 128 128-57.307 128-128 128z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="address-one">
          <div>
            <label for="street address">Rua:<span>*</span></label>
            <input type="text" name="street address" id="street address" placeholder="rua exemplo" v-model="address.street">
          </div>
          <div>
            <label for="street number">Número:<span>*</span></label>
            <input type="text" name="street number" id="street number" placeholder="100">
          </div>
        </div>
        <div class="address-two">
          <div>
            <label for="complement">Complemento:</label>
            <input type="text" name="complement" id="complement" placeholder="apto 500 torre 5">
          </div>
          <div>
            <label for="city">Cidade:<span>*</span></label>
            <input type="text" name="city" id="city" placeholder="sua cidade" v-model="address.city">
          </div>
        </div>
        <div class="local">
          <div>
            <label for="province">Estado:<span>*</span></label>
            <input type="text" name="province" id="province" placeholder="seu estado" v-model="address.province">
          </div>
          <div>
            <label for="country">País:<span>*</span></label>
            <input type="text" name="country" id="country" placeholder="seu país" v-model="address.country">
          </div>
        </div>
        <div>
          <label for="linkedin">LinkedIn:</label>
          <input type="link" name="linkedin" id="linkedin" placeholder="https://linkedin/in/exemplo">
        </div>
        <div class="submit">
          <p><span>*</span> campos obrigatórios</p>
          <button type="submit">Save</button>
        </div>
      </form>
      <div class="arrows" id="arrows">
        <i class="arrow down one">
          <svg height="22" width="32">
            <polyline points="5,5 15,15 25,5" />
            Sorry, your browser does not support inline SVG.
          </svg>
        </i>
        <i class="arrow down two">
          <svg height="22" width="32">
            <polyline points="5,5 15,15 25,5" />
            Sorry, your browser does not support inline SVG.
          </svg>
        </i>
      </div>
    </div>
  </main>
  <footer>
    <a href="https://guilhermelawisch.vercel.app" target="_blank" rel="noopener noreferrer">by Guilherme Lawisch Machado &copy</a>
  </footer>
</template>

<script>
/*eslint-disable */
import address from '../services/address'

let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
  if (scrollPos > 0) {
    document.getElementById('arrows').classList.add('off')
  } else {
    document.getElementById('arrows').classList.remove('off')
  }
}

document.addEventListener('scroll', function(e) {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});

export default {
  name: 'Home',
  props: {
    msg: String
  },
  data () {
    return {
      cep: '',
      address: {
        street: '',
        city: '',
        province: '',
        country: ''
      }
    }
  },
  mounted() {
  },
  watch: {
  },
  methods: {
    getAddress() {
      event.preventDefault()
      
      const cep = this.cep.replaceAll("-","");
      address.getCEP(cep).then(response => {
        this.address.street = response.data.logradouro
        this.address.city = response.data.localidade
        this.address.province = response.data.uf
        this.address.country = 'Brasil'
      })
    }
  }
}
/*eslint-enable */
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
    margin: 10vh 0;
    
    display: flex;
  }
  main .left {
    width: 50%;
    padding: 2.5vh;
    background: #ff471a;
    border-right: 1px solid rgb(0,0,0,0.2);
  }
  main .left div {
    margin: 12px 0;
  }
  main .left div label {
    font-size: 0.9rem;
  }
  main .left .submit p {
    font-size: 0.5rem;
  }
  main .right {
    width: 50%; 
    padding: 2.5vh;
    transition: 0.2s;
  }
  main .right .arrows {
    position: fixed;
    bottom: 12vh;
    right: 25vw;

    transform: translate(50%, 0);

    display: grid;
    grid-template-columns: 1fr;
  }
  main .right i.one {
    animation: spin 1s linear infinite;
  }
  main .right i.two {
    margin-top: -45px; 
    animation: spin 1s linear infinite;
  }
  main .right i.one svg polyline,
  main .right i.two svg polyline {
    fill: transparent;
    stroke: #404040;
    stroke-width:3;
    transition: 0.3s;
  }
  main .right .off i.one svg polyline,
  main .right .off i.two svg polyline {
    fill: transparent;
    stroke: transparent;
    stroke-width:3;
    transition: 0.3s;
  }
  /*  style="fill:transparent;stroke:black;stroke-width:3" */
  @keyframes spin {
    0% { transform: translate(0, 0%); }
    50% { transform: translate(0, 50%); }
  }
  main .right div {
    text-align: left;
    margin: 5px 0;
  }
  main .right .names {
    display: flex;
    gap: 8px;
  }
  main .right .names div:first-child {
    flex: 1;
  }
  main .right .names div:last-child {
    flex: 1;
  }
  main .right .born-and-phone {
    display: flex;
    gap: 8px;
  }
  main .right .born-and-phone div:first-child {
    flex: 2;
  }
  main .right .born-and-phone div:last-child {
    flex: 1;
  }
  main .right .born-and-phone div:last-child input {
    padding: 8px;
  }
  main .right .cep div {
    margin: 0;
    position: relative;
  }
  main .right .cep div button {
    position: absolute;
    right: 12px;
    margin: 16px 0;

    border: 0;
    background: rgba(0,0,0,0)
  }
  main .right .cep div button:hover {
    cursor: pointer;
  }
  main .right .address-one {
    display: flex;
    gap: 8px;
  }
  main .right .address-one div:first-child {
    flex: 3;
  }
  main .right .address-one div:last-child {
    flex: 1;
  }
  main .right .address-two {
    display: flex;
    gap: 8px;
  }
  main .right .address-two div:first-child {
    flex: 2;
  }
  main .right .address-two div:last-child {
    flex: 1;
  }
  main .right .local {
    display: flex;
    gap: 8px;
  }
  main .right .local div:first-child {
    flex: 1;
  }
  main .right .local div:last-child {
    flex: 1;
  }
  main .right .submit {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    
    margin: 16px 0;
  }
  main .right .submit button {
    width: 100px;
    padding: 10px 18px;
    margin-top: 16px;
    border: 1px solid #006d32;
    background: #26a641;
    color: #fff;
    border-radius: 5px;
    transition: 0.2s;
  }
  main .right .submit button:hover {
    cursor: pointer;
    background: #39d353;
  }
  main .right div input {
    width: 100%;
    padding: 10px 18px;
    margin-top: 8px;
    border: 1px solid rgba(0,0,0,0.3);
    border-radius: 5px;
    transition: 0.2s;
  }
  main .right div input:hover {
    background: rgba(0,0,0,0.01);
  }
  main .right span {
    color: red;
    font-size: 0.8rem;
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
