<template>
  <div class="container">
    <div class="status-form">
      <h2>Tá atrasado! volte sempre</h2>
      <p><button type="button" @click.prevent="logoff" class="button">Sair daqui</button></p>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'pagina',
  middleware: 'login',
  methods: {
    logoff () {
      this.$store.dispatch('login/logoff')
    }
  }
}
</script>

<style>
.forms {
  width: 600px;
  position: relative;
  z-index: 1;
}
.field{
  width: 100%;
  margin: 0 0 20px;
}
.field label, .field input[type="text"], .field input[type="password"], .field input[type="email"], .field input[type="tel"], .field textarea, .field select {
  width: 100%;
}
.field input[type="text"], .field input[type="password"], .field input[type="email"], .field input[type="tel"], .field select {
  padding: 8px 12px;
  font-size: 16px;
}
.field textarea {
  height: 200px;
}
.status-form {
  width: 300px;
  margin: 0 auto;
}
.forms-loading, .forms-result {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #b0b0ca;
  visibility: hidden;
  opacity: 0;
  z-index: 100;
  transition: all .2s ease-in-out;
}
.forms-loading.active, .forms-result.active {
  visibility: visible;
  opacity: 1;
  transition: all .2s ease-in-out;
}
.forms-loading p {
  color: #fe1050;
  font-size: 50px;
  position: sticky;
  top: 50%;
  left: 0;
}
</style>
