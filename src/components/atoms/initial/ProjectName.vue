<template>
  <div class="mt-4">
    <div class="d-flex">
      <h1 class="b-title font-roboto text-uppercase m-0">Fraccióname</h1>
    </div>
    <div class="d-flex justify-content-center align-items-center mt-1">
      <span class="b-sub-title font-cairo me-1">Powered by</span>
      <img class="mb-2" src="@/assets/images/logos/smartick-white.png" alt="smartick-logo" width="107" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectName",
  setup() {
    return {
    };
  },
};
</script>

<style scoped lang="scss">
@import "~@/assets/styles/index.scss";

.b-title {
  font-size: 4rem;
  font-weight: 900;
  background-image: linear-gradient(
    -225deg,
    $other-beige 17%,
    $secondary-yellow 47%,
    $other-green-soft 67%,
    $secondary-yellow-lightest 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  background-clip: text;
  color: #fff;
  -webkit-text-stroke: 2px $secondary-grey-dark;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  animation: textclip 3.3s linear infinite;
  display: inline-block;
}

@keyframes textclip {
  to {
    background-position: 300% center;
  }
}

.b-sub-title {
  color: #ffffff;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.083);
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 1px;
}
</style>
