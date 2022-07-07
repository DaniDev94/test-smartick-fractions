<template>
  <!-- Initial page -->
  <div class="b-content-initial d-flex justify-content-center" :class="{ 'background-content': show }">
    <InitialPageContent :class="{ 'opacity-content': show }" />
  </div>
  <!-- Home page -->
  <div>
    <p class="text-danger">Hello world...</p>
    <button>Hola</button>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import InitialPageContent from "../molecules/initial/InitialContent.vue";

export default {
  name: "HomePage",
  components: {
    InitialPageContent,
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
@import "~@/assets/styles/_colors.scss";

.b-content-initial {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: $primary-blue;
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
