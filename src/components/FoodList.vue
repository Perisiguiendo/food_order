<template>
  <div class="food-list">
    <orderfood></orderfood>

    <orderfood></orderfood>
    <orderfood></orderfood>
    <orderfood></orderfood>
    <orderfood></orderfood>
    <orderfood></orderfood>
<!--    <orderfood></orderfood>-->
<!--    <orderfood></orderfood>-->
    <!--    <div v-for="item in food_list">-->
<!--      <Food :sfoodInfo="item"></Food>-->
<!--    </div>-->


  </div>
</template>

<script>
import food from '@/components/Food'
import orderfood from '@/components/OrderFood'
export default {
  name: "FoodList",
  // data() {
  //   return {
  //     food_list: []
  //   }
  // },
  // mounted() {
  //   this.showFoodInfo();
  // },
  // methods: {
  //   showFoodInfo() {
      // const obj = this;
      // const url = "/order/api/Food";
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
    // },
  // },
  components: {
    food,
    orderfood
  }
}
</script>

<style scoped>
.food-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  /*align-items: center;*/
  /*justify-content: space-around;*/
}
/*.movies {*/
/*  margin-top: 20px;*/
/*  float: left;*/
/*}*/
/*.card_x {*/
/*  float: left;*/
/*  margin: 10px;*/
/*}*/
/*.hii {*/
/*  height: 20px;*/
/*  background: #2a63ff;*/
/*  width: 100px;*/
/*}*/
</style>