<template>
  <b-container class="wrap">
    <b-row class="row-money">
      <b-col cols="4">
        <div class="all-selected">
          <span class="iconfont">&#xe60f;</span>
          全选
        </div>
      </b-col>
      <b-col cols="8" class="pay">
        <span>合计:
          <em>￥</em>
          <span>0</span>
        </span>
        <span class="pay-bill">结算</span>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
name: "TotalMoney"
}
</script>

<style scoped>
.all-selected {

}
.pay-bill {
  display: inline-block;
  width: 5rem;
  height: 2rem;
  border-radius: 20px;
  background: #215af5;
  line-height: 1.9rem;
  text-align: center;
  color: #ffffff;
}
.pay {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.row-money {
  display: flex;
  align-items: center;
}
</style>