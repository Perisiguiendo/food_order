<template>
  <div class="nav-div">
    <Router-link to="/home">店铺</Router-link>
    <Router-link to="/order">订单</Router-link>
    <Router-link to="/profile">我的</Router-link>
  </div>
</template>

<script>
export default {
  name: "BtmNavBar",
}
</script>

<style scoped>
.nav-div {
  width: 100%;
  height: 2.4rem;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #ddd;
  z-index: 2;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>