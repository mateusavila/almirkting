<template>
  <div class="container">
      <div class="sobre">
        <h2>Fale Conosco</h2>
        <p>Fizemos este formulário simples para você falar com a gente. Só preencher ele rapidinho! Pode ficar tranquilo!</p>
        <div class="forms">
          <div class="forms-loading">
            <p>CARREGANDO...</p>
          </div>
          <div class="forms-result">
            <p>Sua compra foi realizada com sucesso! Volte sempre.</p>
          </div>
          <form action="#" method="post" @submit.prevent="mandarPraMinhaConta">
            <div class="field">
              <label for="nome">Nome</label>
              <input v-model="form.nome" type="text" name="nome" value="" id="nome">
            </div>
            <div class="field">
              <label for="email">E-mail</label>
              <input v-model="form.email" type="email" name="email" value="" id="email">
            </div>
            <div class="field">
              <label for="tel">Telefone</label>
              <input v-model="form.telefone" type="tel" name="tel" value="" id="tel">
            </div>
            <div class="field">
              <label for="zapzap">Zap Zap</label>
              <input v-model="form.zap" type="tel" name="zapzap" value="" id="zapzap">
            </div>
            <div class="field">
              <label for="rg">RG</label>
              <input v-model="form.rg" type="text" name="rg" value="" id="rg">
            </div>
            <div class="field">
              <label for="cpf">CPF</label>
              <input v-model="form.cpf" type="text" name="cpf" value="" id="cpf">
            </div>
            <div class="field">
              <label for="credito">Número do Cartão de Crédito</label>
              <input v-model="form.credito" type="text" name="credito" value="" id="credito">
            </div>
            <div class="field">
              <label for="nome_credito">Nome no Cartão de Crédito</label>
              <input v-model="form.nome_cartao" type="text" name="nome_credito" value="" id="nome_credito">
            </div>
            <div class="field">
              <label for="cvv">CVV</label>
              <input v-model="form.cvv" type="text" name="cvv" value="" id="cvv">
            </div>
            <div class="field">
              <label for="mes_validade">Mês Validade</label>
              <input v-model="form.mes_validade" type="text" name="mes_validade" value="" id="mes_validade">
            </div>
            <div class="field">
              <label for="ano_validade">Ano Validade</label>
              <input v-model="form.ano_validade" type="text" name="ano_validade" value="" id="ano_validade">
            </div>
            <div class="field">
              <label for="parcelas">Quantas Parcelas</label>
              <select v-model="form.parcelas" class="parcelas" name="parcelas" id="parcelas">
                <option value="1">1x de R$ 10.000,00</option>
                <option value="2">2x de R$ 5.000,00</option>
                <option value="3">3x de R$ 3.333,34</option>
                <option value="4">4x de R$ 2.500,00</option>
                <option value="5">5x de R$ 2.000,00</option>
                <option value="6">6x de R$ 1.666,67</option>
                <option value="7">7x de R$ 1.428,57</option>
                <option value="8">8x de R$ 1.250,00</option>
                <option value="9">9x de R$ 1.111.12</option>
                <option value="10">10x de R$ 1.000.00</option>
              </select>
            </div>
            <div class="field">
              <label for="mensagem">Mensagem</label>
              <textarea v-model="form.mensagem" name="mensagem" id="mensagem"></textarea>
            </div>
            <div class="field checkbox">
              <label for="check">
                <input v-model="form.check" type="checkbox" name="check" id="check">
                <span>Salvaremos estes dados em plain text para você conferir depois.</span>
              </label>
            </div>
            <div class="field-action">
              <button type="submit" name="button" class="button">Faça seu pedido</button>
              <p>Certificado pela LGPD</p>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  layout: 'pagina',
  data() {
    return {
      form:  {
        nome: '',
        email: '',
        telefone: '',
        zap: '',
        rg: '',
        cpf: '',
        credito: '',
        nome_cartao: '',
        cvv: '',
        mes_validade: '',
        ano_validade: '',
        parcelas: '',
        mensagem: '',
        check: false
      }
    }
  }, 
  methods: {
    mandarPraMinhaConta () {
      // console.log(this.form)
      this.$store.dispatch('contato/queroDinheiro', this.form)
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
