<template>
  <div class="food-item">
    <b-card :img-src="foodData.avatar" img-alt="Card image" img-left class="mb-3">
      <b-card-body class="b-card-left" title="Horizontal Card">
        <b-card-text class="food-desc">
          主要原料：牛肉
        </b-card-text>
        <div class="b-text-font">
          ￥:{{foodData.price}}
          <span>
            <span class="icon" @click="decrease">-</span>
            {{foodData.num}}
            <span class="icon" @click="increase">+</span>
          </span>
        </div>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "OrderFood",
  data() {
    return {
      foodData: {
        avatar: require('@/assets/img/6.jpg'),
        title: '风味牛排饭',
        price: 14.9,
        num: 0
      }
    }
  },
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
  width: 20rem;
  height: 5rem;
}

.b-text-font {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  font-size: .5rem;
  padding: .25rem;
}
.b-card-left {
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

.card-body {
  padding: .2rem;
}
</style>