<template>
  <div class="food-item">
    <div class="left">
      <img :src="sfoodInfo.food_img" alt="food image">
    </div>
    <div class="right">
      <h4 class="title">{{sfoodInfo.food_name}}</h4>
      <b-card-text class="b-text-font">
                  主要原料：{{sfoodInfo.food_description}}
                </b-card-text>
                <div class="b-text-font">
                  ￥:{{sfoodInfo.food_price}}
                  <span>
                    <span class="icon" @click="decrease">-</span>
                    {{sfoodInfo.food_discount}}
                    <span class="icon" @click="increase">+</span>
                  </span>
                </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Food",
  props: ['sfoodInfo'],
  methods: {
    decrease() {
      return this.foodData.num>0?this.foodData.num--:false;
    },
    increase() {
      return this.foodData.num++;
    }
  }
}
</script>

<style scoped>
.food-item {
  margin: 10px;
  width: 250px;
  display: flex;
  justify-content: space-between;
}
.left>img{
  width: 5rem;
  height: 5rem;
}
.right {
  padding: .6rem 1.25rem;
  border: 1px solid #333333;
}
.b-text-font {
  font-size: .5rem;
  padding: .25rem;
}

.icon {
  display: inline-block;
  width: 15px;
  height: 15px;
  background: #2a63ff;
  border-radius: 50%;
  color: #fff;
  text-align: center;
  cursor: pointer;
  line-height: 12px;
}
</style>