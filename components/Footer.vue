<template>
  <footer>
    <div class="container">
      <p>All rights reserved. &copy; 2015</p>
      <a href="#" class="delete-cookies">
        <img src="~assets/img/apagar-os-cookies.png" alt="Apagar os Cookies">
      </a>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style>
footer {
  padding: 20px 0;
  width: 100%;
}
footer .container {
  width: calc(100% - 40px);
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}
.delete-cookies {
  width: 80px;
  height: 80px;
}
.delete-cookies img {
  width: 100%;
  height: auto;
  display: block;
}
</style>
