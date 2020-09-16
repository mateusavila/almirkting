<template>
  <header>
    <div class="container">
      <nuxt-link to="/">
        <img src="~assets/img/logo.svg" alt="Logo">
      </nuxt-link>
      <nav>
        <ul>
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/sobre">Sobre</nuxt-link></li>
          <li><nuxt-link to="/contato">Contatos</nuxt-link></li>
          <li><nuxt-link to="/status">Status do Projeto</nuxt-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style>
header {
  width: 100%;
  height: 100px;
}
header .container {
  width: calc(100% - 40px);
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}

nav {
  width: 320px;
}
nav ul {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  list-style-type: none;
}
nav a {
  color: #fe1050;
  text-decoration: none;
}
nav a.nuxt-link-exact-active {
  color: #000;
}
</style>
