<template>
  <div class="my-md-1 my-xl-2 py-3">
    <div class="b-fraction-content d-flex flex-column justify-content-center align-items-center mt-md-2 mt-xl-3">
      <span class="b-fraction-content__num">{{ numerator }}</span>
      <div class="b-fraction-content__line"></div>
      <span class="b-fraction-content__num">{{ denominator }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "RandomFraction",
  props: ["numerator", "denominator"],
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
@import "~@/assets/styles/index.scss";

.b-fraction-content {
  width: 15rem;
  height: 15rem;
  background-image: radial-gradient(100% 100% at 100% 0, $other-orange-soft 0, $other-orange 100%);
  border: 0.5rem solid #ffffff;
  border-radius: 10rem;
  box-shadow: $primary-blue-lightest 0px 0px 0px 1px inset, $secondary-grey-dark 0px 0px 0px 2px;
  -webkit-animation: scale-up-center 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: scale-up-center 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  &__num {
    color: #fff;
    -webkit-text-stroke: 2px $secondary-grey-dark;
    font-size: 4rem;
    font-weight: 700;
    letter-spacing: 1px;
  }
  &__line {
    width: 100%;
    max-width: 7rem;
    padding: 2.2px;
    background-color: #ffffff;
    border: 2px solid $secondary-grey-dark;
  }
}

@-webkit-keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.2);
    transform: scale(0.2);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.2);
    transform: scale(0.2);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@media (max-width: 1200px) {
  .b-fraction-content {
    width: 13.5rem;
    height: 13.5rem;
    &__num {
      font-size: 3.5rem;
    }
    &__line {
      max-width: 6rem;
      padding: 2.1px;
    }
  }
}

@media (max-width: 992px) {
  .b-fraction-content {
    width: 12rem;
    height: 12rem;
    &__num {
      font-size: 3.2rem;
    }
    &__line {
      max-width: 5.3rem;
      padding: 2px;
    }
  }
}

@media (max-width: 575px) {
  .b-fraction-content {
    width: 10rem;
    height: 10rem;
    &__num {
      font-size: 2.7rem;
    }
    &__line {
      max-width: 4.9rem;
      padding: 1.8px;
    }
  }
}
</style>
