<template>
  <div>
    <b-nav vertical justified class="nav-bar">
      <b-nav-item active>膳食</b-nav-item>
      <b-nav-item>肉类</b-nav-item>
      <b-nav-item>肉类</b-nav-item>
      <b-nav-item>肉类</b-nav-item>
      <b-nav-item>肉类</b-nav-item>
    </b-nav>
  </div>

</template>

<script>
export default {
  data() {
    return {
      foodCatalogue: ['肉类', '素材', '膳食'],
      activeKey: 0
    }
  },
  mounted() {
    this.showMoviesFromDRF();
  },
  methods: {
    showMoviesFromDRF() {
      // const obj = this;
      // const url = "/order/api/foodcat";
      // this.$axios.get(url).then(
      //     (response) => {
      //       obj.foodCatalogue = response.data.results;
      //       console.log(obj.foodCatalogue)
      //     }
      // )
    },
  }
}
</script>

<style scoped>
.nav-bar {
  box-shadow: 2px 2px 5px #eee;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  color: #666;
  font-size: 1rem;
  background: #f1f1f1;
  padding: 1rem 0;
}

</style>