<template>
  <div class="b-content-initial d-flex justify-content-center" :class="{ 'background-content': show }">
    <LoadingSpinner :load="loading" :class="{ 'opacity-content': show }" />
  </div>
</template>

<script>
import LoadingSpinner from "../atoms/common/LoadingSpinner.vue";
export default {
  name: "GamePage",
  components: {
    LoadingSpinner,
  },
  data() {
    return {
      loading: false,
      show: false,
    };
  },
  mounted() {
    this.loading = true;
    setTimeout(() => {
      this.show = true;
    }, 2000);
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  },
};
</script>

<style scoped lang="scss">
@import "~@/assets/styles/index.scss";

.b-content-initial {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(16deg, $primary-blue-medium-soft 0%, $primary-blue 80%);
}

.background-content {
  -webkit-animation: background-content 1.2s ease-out 1s both;
  animation: background-content 1.2s ease-out 1s both;
}

@-webkit-keyframes background-content {
  0% {
    height: 100vh;
  }
  100% {
    height: 0vh;
  }
}

@keyframes background-content {
  100% {
    height: 0vh;
  }
  0% {
    height: 100vh;
  }
}

.opacity-content {
  -webkit-animation: remove-opacity 1s ease-out 0.1s both;
  animation: remove-opacity 1s ease-out 0.1s both;
}

@-webkit-keyframes remove-opacity {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes remove-opacity {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
