<template>
  <div>
    <img :src="merchant.avatar" class="bg-blur" alt="image">
    <div class="merchant">
      dffd
    </div>
  </div>
</template>

<script>
export default {
  name: "TopHeader",
  data() {
    return {
      merchant: {
        avatar: require('@/assets/img/3.jpg'),
      }
    }
  }
}
</script>

<style scoped>
.bg-blur {
  position: absolute;
  width: 100%;
  height: 9rem;
  top: 0;
  left: 0;
  filter: blur(5px);
  z-index: -1;
}
.merchant {
  width: 100%;
  height: 8rem;
  background: #ddd;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 40px;
}
</style>