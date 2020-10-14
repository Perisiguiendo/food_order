<template>
  <div>
    <b-row>
      <b-col>
        <order-food></order-food>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <btm-navbar></btm-navbar>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import btmnavbar from '@/components/BtmNavBar'
import orderfood from '@/components/OrderFood'
export default {
  name: "Order",
  components: {
    'btm-navbar': btmnavbar,
    'order-food': orderfood
  }
}
</script>

<style scoped>

</style>