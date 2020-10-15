<template>
  <div class="home-body">
    <b-container class="bv-example-row">
      <b-row class="header">
        <b-col>
          <top-header></top-header>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="2">
          <navbar></navbar>
        </b-col>
        <b-col cols="10">
          <food-list></food-list>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="1">
          <btm-navbar></btm-navbar>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>
import top_header from '@/components/TopHeader'
import navbar from "@/components/NavBar";
import btmnavbar from '@/components/BtmNavBar'
import foodlist from '@/components/FoodList'

export default {
  name: 'Home',
  components: {
    'top-header': top_header,
    navbar,
    'btm-navbar': btmnavbar,
    'food-list': foodlist
  }
}
</script>

<style scoped>
.header {
  margin-bottom: 1rem;
}
.home-body::-webkit-scrollbar { width: 0 !important; overflow-y: hidden }
.home-body { -ms-overflow-style: none; }
.home-body { overflow: -moz-scrollbars-none; }
</style>
