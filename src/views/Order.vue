<template>
  <b-container>
    <b-row>
      <b-col>
        <order-food></order-food>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <total-money></total-money>
        <btm-navbar></btm-navbar>
      </b-col>
    </b-row>
<!--    <b-row>-->
<!--      <b-col>-->
<!--      </b-col>-->
<!--    </b-row>-->
  </b-container>
</template>

<script>
import btmnavbar from '@/components/BtmNavBar'
import orderfood from '@/components/OrderFood'
import totalmoney from '@/components/Order/TotalMoney'
export default {
  name: "Order",
  components: {
    'btm-navbar': btmnavbar,
    'order-food': orderfood,
    'total-money': totalmoney
  }
}
</script>

<style scoped>

</style>