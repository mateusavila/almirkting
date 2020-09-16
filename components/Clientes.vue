<template>
  <div class="clients">
    <h2>Clientes Satisfeitos</h2>
    <div class="clients-list">
      <div class="clients-item">
        <p>Foguete <br>Sofá</p>
      </div>
      <div class="clients-item">
        <p>Pelado <br>Bank</p>
      </div>
      <div class="clients-item">
        <p>Banco <br>Grêmio</p>
      </div>
      <div class="clients-item">
        <p>Piq <br>Pague</p>
      </div>
      <div class="clients-item">
        <p>Banco <br>Xenon</p>
      </div>
      <div class="clients-item">
        <p>Padaria <br>Pimpão</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Clientes'
  }
</script>

<style>
.clients {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 30px 0;
}
.clients-list {
  width: calc(100% - 40px);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.clients-item {
  color: #ff0000;
  font-size: 2rem;
  margin: 0
}
</style>
