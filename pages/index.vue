<template>
  <div class="container">
    <div class="hero">
      <div class="hero-kylo-ren">
        <img src="~assets/img/homem-bonito-que-vende.jpg" alt="Homem bonito que vende. É o Adam Driver, galã feio sex simbol que vai ajudar o seu negócio a ir para o espaço.">
      </div>
      <div class="hero-cliente-satisfeito">
        <img src="~assets/img/titulo.svg" alt="Marketing Agressivo, clientes felizes. Este é a nossa motivação, agir com agressividade e impulsividade para que os clientes fiquem convencidos que nós vamos dar conta. Só marcar local e hora.">
      </div>
      <p>Olá Cliente! Somos uma empresa de copymarketing que foca em resultados rápidos e testados pelo mercado. Atendemos todos os clientes de A a E, sem distinção de gênero, religião, real, dolar ou euro.</p>
    </div>
    <Clientes />
    <div class="donate">
      <h2>Não deixe uma criança triste deste dia das crianças!</h2>
      <p>Doe para o projeto <strong>Almirkting Esperança!</strong>.</p>
      <div class="field-action">
        <nuxt-link to="/contato" class="button">Doe para o projeto Almirkting Esperança</nuxt-link>
        <p>Certificado pela LGPD</p>
      </div>
    </div>
  </div>
</template>

<script>
const Clientes = () => import('~/components/Clientes')
export default {
  layout: 'pagina',
  components: {
    Clientes
  }
}
</script>

<style>
.hero {
  width: calc(100% - 40px);
  margin: 0 auto;
  height: 800px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center
}
.hero div {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-bottom: 40px;
}
.hero p {
  max-width: 800px;
  text-align: center;
}

</style>
