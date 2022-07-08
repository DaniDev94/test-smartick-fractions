<template>
  <div class="b-content w-100 min-vh-100 py-2 px-3">
    <div class="m-2 p-1">
      <!-- Nav -->
      <HomeHeader />
      <!-- Main -->
      <HomeMain />
    </div>
  </div>
</template>

<script>
import HomeHeader from "../../molecules/home/HomeHeader.vue";
import HomeMain from "../../molecules/home/HomeMain.vue";

export default {
  name: "HomePage",
  components: {
    HomeMain,
    HomeHeader,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped lang="scss">
@import "~@/assets/styles/index.scss";

.b-content {
  background-color: $primary-blue-lightest;
  background-image: url("../../../assets/images/layout/cloud-background-home.png");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
