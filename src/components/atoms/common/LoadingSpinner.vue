<template>
  <div v-if="load" class="d-flex align-items-center justify-content-center vw-100 vh-100 font-roboto py-5 px-5">
    <div class="b-content-spinner d-flex">
      <div class="b-content-spinner__1">
        <div class="d-flex flex-column align-items-start mt-3">
          <img class="mb-5 ms-4" src="@/assets/images/logos/smartick-white.png" alt="smartick-logo" width="200" />
          <img src="@/assets/images/layout/rocket-background-loading.png" alt="" width="190" />
        </div>
      </div>
      <div class="b-content-spinner__2 d-flex justify-content-center align-items-center">
        <div class="d-flex flex-column justify-content-center bg-white">
          <div class="b-txt-level mb-2 text-center">Nivel</div>
          <div class="d-flex align-items-center justify-content-center position-relative spinner-container">
            <img
              :src="require('@/assets/images/layout/loading-spinner.png')"
              alt="loading-spinner"
              class="spinner rotate position-absolute"
            />
            <h2 class="spinner-level">{{level}}</h2>
          </div>
          <div class="b-text mt-3">
            {{ loadingTitle || "Cargando..." }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadingSpinner",
  components: {},
  props: ["load", "level"],
  setup() {
    return {};
  },
};
</script>

<style scoped lang="scss">
@import "~@/assets/styles/index.scss";

.b-content-spinner {
  background-color: rgb(255, 255, 255);
  border-radius: 2rem;
  width: 100%;
  max-width: 60rem;
  height: 40rem;
  &__1 {
    width: 40%;
    border-bottom-left-radius: 2rem;
    border-top-left-radius: 2rem;
    background-image: -webkit-linear-gradient(-15deg, #fba62d 60%, #ffffff 60%);
  }
  &__2 {
    width: 100%;
  }
}

.b-txt-level {
  font-size: 40px;
  color: $primary-blue;
  font-weight: 700;
  letter-spacing: 1px;
}

.b-text {
  font-size: 29px;
  color: $primary-blue;
  font-weight: 700;
  letter-spacing: 1px;
}

.spinner-container {
  height: 200px;
}

.spinner {
  height: 200px;
  width: 200px;
}

.spinner-level {
  font-size: 80px;
  font-weight: 900;
  background-clip: text;
  -webkit-text-stroke: 1.4px $primary-blue;
  -webkit-text-fill-color: $secondary-yellow;
  -webkit-animation: spinner-level 0.7s ease-in-out both;
  animation: spinner-level 0.7s ease-in-out both;
}

//Animation number level
@-webkit-keyframes spinner-level {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes spinner-level {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.rotate {
  -webkit-animation: spin 4s linear infinite;
  -moz-animation: spin 4s linear infinite;
  animation: spin 4s linear infinite;
}

@-moz-keyframes spin {
  100% {
    -moz-transform: rotate(360deg);
  }
}

@-webkit-keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

</style>
