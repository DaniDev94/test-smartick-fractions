<template>
  <div class="b-content-icon">
    <img class="b-content-icon__img" src="@/assets/images/icons/project.svg" alt="project-icon" />
  </div>
</template>

<script>
export default {
  name: "ProjectIcon",
  setup() {},
};
</script>

<style scoped lang="scss">
@import "~@/assets/styles/index.scss";

.b-content-icon {
  padding: 3rem;
  background-image: radial-gradient(100% 100% at 100% 0, $other-orange-soft 0, $other-orange 100%);
  border: 0.5rem solid #ffffff;
  border-radius: 10rem;
  box-shadow: $primary-blue-lightest 0px 0px 0px 1px inset, $secondary-grey-dark 0px 0px 0px 2px;
  &__img {
    width: 100%;
    min-width: 180px;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
}

@media (max-width: 576px) {
  .b-content-icon {
    padding: 2.5rem;
    &__img {
      min-width: 140px;
    }
  }
}
</style>
