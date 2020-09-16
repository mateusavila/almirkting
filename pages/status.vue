<template>
  <div class="container">
    <div class="status-form">
      <form action="#" method="post" @click.prevent="login" autocomplete="off" novalidate="novalidate">
        <div class="field">
          <label for="login">Login (admin)</label>
          <input type="text" v-model="form.login" name="login" id="login" value="" autocomplete="new-password">
        </div>
        <div class="field">
          <label for="senha">Senha (admin)</label>
          <input type="password" v-model="form.password" name="password" id="password" value="" autocomplete="new-password">
        </div>
        <div class="field-action">
          <button type="submit" name="button" class="button">Ver meu projeto</button>
          <p>Certificado pela LGPD</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'pagina',
  data() {
    return {
      form: {
        login: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login/login', this.form)
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
