<template>
  <b-container>
    <b-row>
      <b-col>
        <btm-navbar></btm-navbar>
      </b-col>
    </b-row>
  </b-container>

</template>

<script>
import btmnavbar from '@/components/BtmNavBar'
export default {
  name: "Profile",
  components: {
    'btm-navbar': btmnavbar,
  }
}
</script>

<style scoped>

</style>