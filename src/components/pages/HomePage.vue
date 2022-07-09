<template>
  <!-- Initial page -->
  <div class="b-content-initial d-flex justify-content-center" :class="{ 'background-content': show }">
    <InitialMain :class="{ 'opacity-content': show }" />
  </div>
  <!-- Home page -->
  <HomeContent/>
</template>

<script>
import { ref, onMounted } from "vue";
import InitialMain from "../molecules/initial/InitialMain.vue";
import HomeContent from "../organisms/home/HomeContent.vue";

export default {
  name: "HomePage",
  components: {
    InitialMain,
    HomeContent
  },
  setup() {
    const show = ref(false);

    onMounted(() => {
      setTimeout(() => {
        show.value = true;
      }, 2000);
    });

    return {
      show,
    };
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

// Initial page animation
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
