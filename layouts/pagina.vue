<template>
  <div>
    <Header />
    <main>
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
const Header = () => import('~/components/Header')
const Footer = () => import('~/components/Footer')
export default {
  name: 'pagina',
  components: {
    Header, Footer
  }
}
</script>

<style>
*, *:before, *:after {
  box-sizing: border-box;
}
html, body {
  padding: 0;
  margin: 0;
  background-color: #b0b0ca;
  font-family: "Comic Sans MS", cursive, sans-serif;
}
main .container {
  width: calc(100% - 40px);
  margin: 0 auto;
}
main .container p {
  margin: 20px 0;
}
.button {
  background: #fff;
  padding: 0 16px;
  display: inline-flex;
  height: 43px;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-transform: uppercase;
  text-decoration: none;
  color: #012012;
  border: none;
  cursor: pointer;
}
.field-action {
  width: 100%;
  margin: 30px 0;
}
</style>
