<template>
  <div>
    <img :src="merchant.avatar" class="bg-blur" alt="image">
    <div class="merchant">
      <div class="up">
        <div class="up-left">
          <h3>川崎牛排饭（白塔店）</h3>
          <h6>xxxxxxxxxxxxxxxxxxxxx</h6>
        </div>
        <div class="up-right">
          <img class="logo" src="../assets/img/4.jpg" alt="">
        </div>
      </div>
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
  filter: blur(.4rem);
  z-index: -1;
}
.merchant {
  width: 90%;
  margin: 2rem auto 0 auto;
  height: 8rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 5px #dddddd;
}

.up {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.up-left {
  height: 5rem;
}

.logo {
  width: 5rem;
  height: 5rem;
}
</style>