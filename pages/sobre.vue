<template>
  <div class="container">
      <div class="sobre">
        <h2>Sobre</h2>
        <p>Somos uma agência que atende B2B, B2C, você e todo mundo que vem aqui querer presença digital. Nosso foco é oferecer soluções testadas e aprovadas pela concorrência, botando nossas cores e a sua logo. Focamos em copymarketing e pastemarketing, que oferece resultados em tempo real e de qualidade para seu projeto.</p>
        <p>Temos 15 anos de experiência no mercado, sendo uma agência global que tem clientes em São Paulo, Rio de Janeiro, Nova Iorque, São José dos Ausentes e Não-me-Toque/RS.</p>
        <h3>Nosso método de trabalho</h3>
        <p>Nosso foco é na captura das leads. Com um avançado sistema de logística de geolocalização, capturamos a lead na rua e levamos na sua loja. O ROI deste processo é elevadíssimo, com poucas baixas e clientes plenamente satisfeitos. Não deixamos nenhuma lead escapar!!!</p>
        <h3>Método "Ready to production right now"</h3>
        <p>Desenvolvemos um método revolucionário para que o cliente participe ativamente das decisões do projeto. Chama-se <strong>Método Ready To Production Right Now</strong>. É simples: subimos o site do cliente, e temos o feedback em tempo real. Eficiencia na velocidade da luz!</p>
        <h3>Quer trabalhar na Almirkting?</h3>
        <p>Preencha este formulário com seus dados e portfólio. Desenvolve projeto pixel-perfect? Gosta de layout responsivo? Este é seu lugar!!! Aceitamos projetos que você copiou da Foguete Sofá.</p>
        <div class="field-action">
          <nuxt-link to="/contato" class="button">Envie seu currículo pra gente, meu querido!</nuxt-link>
        </div>
      </div>
      <Clientes />
      <div class="target">
        <h2>Público Alvo</h2>
        <img src="~assets/img/o-alvo-e-sempre-eh-o-cliente.jpg" alt="Miramos sempre no cliente pois ele nos ajuda a pagar as nossas contas. Bem no meio dele, para atingir nossos objetivos.">
        <p>Todos serão muito bem atendidos pela Almirkting! Venha fazer um orçamento. Só marcar local e data que estaremos lá.</p>
        <div class="field-action">
          <nuxt-link to="/contato" class="button">Venha fazer um orçamento</nuxt-link>
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
  },
  data () {
    return  {
      post: {}
    }
  },
  head () {
    return {
      title: 'Sobre'
    }
  }
}
</script>

<style>
.target img {
  max-width: 100%;
  height: auto;
  display: block;
}

</style>
