<template>
  <div>
<!--    <div v-for="item in food_list">-->
<!--      <food :sfoodInfo="item"></food>-->
<!--    </div>-->
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>
    <div class="hii">hhhhhhhhh</div>

  </div>
</template>

<script>
import food from '@/components/Food'
export default {
  name: "FoodList",
  data() {
    return {
      food_list: []
    }
  },
  mounted() {
    this.showFoodInfo();
  },
  methods: {
    showFoodInfo() {
      // const obj = this;
      // const url = "/order/api/food";
      // this.$axios.get(url, {
      //   params: {
      //     page: 1
      //   }
      // }).then(
      //     (response) => {
      //       obj.food_list = response.data.results;
      //       console.log(obj.food_list)
      //     }
      // )
    },
  },
  components: {
    food
  }
}
</script>

<style scoped>
.movies {
  margin-top: 20px;
  float: left;
}
.card_x {
  float: left;
  margin: 10px;
}
.hii {
  height: 20px;
  background: #2a63ff;
  width: 100px;
}
</style>