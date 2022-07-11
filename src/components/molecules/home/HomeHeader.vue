<template>
  <div class="b-header-content bg-white d-flex justify-content-between align-items-center font-cairo">
    <div class="b-header-content__logo">
      <img class="custom-width-logo" src="@/assets/images/logos/smartick-blue.png" alt="smartick-blue" />
    </div>
    <div class="b-header-content__audio d-flex flex-wrap justify-content-md-center justify-content-between mx-4">
      <audio ref="playAmbientSound" loop>
        <source :src="require('@/assets/sounds/ambiental.mp3')" type="audio/mp3" />
      </audio>
      <div class="d-flex align-items-center">
        <img class="audio-img-info" src="@/assets/images/icons/question.svg" alt="question-icon" />
        <p class="audio-txt-info m-0 ms-3 text-nowrap">Prueba a darle a play para poner música a tu introducción.</p>
      </div>
      <div class="b-audio-buttons d-flex justify-content-around me-4">
        <button class="btn-audio-custom mx-3" @click="playAmbientSound.play()">
          <img class="btn-audio-custom__icons" src="@/assets/images/icons/audio/audio-play.svg" alt="audio-play" />
        </button>
        <button class="btn-audio-custom mx-3" @click="playAmbientSound.pause()">
          <img class="btn-audio-custom__icons" src="@/assets/images/icons/audio/audio-pause.svg" alt="audio-pause" />
        </button>
        <button
          class="btn-audio-custom mx-3"
          @click="playAmbientSound.play === true ? '' : (playAmbientSound.volume += 0.1)"
        >
          <img class="btn-audio-custom__icons" src="@/assets/images/icons/audio/audio-plus.svg" alt="audio-plus" />
        </button>
        <button
          class="btn-audio-custom mx-3"
          @click="playAmbientSound.play === true ? '' : (playAmbientSound.volume -= 0.1)"
        >
          <img class="btn-audio-custom__icons" src="@/assets/images/icons/audio/audio-minus.svg" alt="audio-minus" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "HomeHeader",
  components: {},
  setup() {
    const playAmbientSound = ref(null);

    return {
      playAmbientSound,
    };
  },
};
</script>

<style scoped lang="scss">
@import "~@/assets/styles/index.scss";

.b-header-content {
  border-radius: 0.6rem;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  &__logo {
    border-right: 2.5px solid $secondary-grey-lightest;
    padding: 10px 20px;
  }
  &__audio {
    width: 100%;
  }
}

.audio-img-info {
  width: 3rem;
  cursor: pointer;
  &:hover {
    -webkit-animation: audio-img-info 0.7s ease-in-out both;
    animation: audio-img-info 0.7s ease-in-out both;
    @-webkit-keyframes audio-img-info {
      0% {
        -webkit-transform: rotate(0);
        transform: rotate(0);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
    @keyframes audio-img-info {
      0% {
        -webkit-transform: rotate(0);
        transform: rotate(0);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  }
}

.audio-txt-info {
  color: $secondary-grey;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.109);
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 1px;
}

.custom-width-logo {
  width: 18rem;
  cursor: pointer;
}

.btn-audio-custom {
  height: 50px;
  display: inline-flex;
  align-items: center;
  padding: 0 16px;
  border: 0;
  border-radius: 6px;
  box-sizing: border-box;
  background-image: radial-gradient(100% 100% at 100% 0, $secondary-purple-lightest 0, $secondary-purple 100%);
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
    rgba(87, 58, 111, 0.5) 0 -3px 0 inset;
  cursor: pointer;
  transition: box-shadow 0.15s, transform 0.15s;
  &__icons {
    min-width: 2.1rem;
  }
}

.btn-audio-custom:focus {
  box-shadow: $secondary-purple-dark 0 0 0 1.5px inset, rgba(67, 55, 93, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, $secondary-purple-dark 0 -3px 0 inset;
}

.btn-audio-custom:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, $secondary-purple 0 -3px 0 inset;
  transform: translateY(-2px);
}

.btn-audio-custom:active {
  box-shadow: $secondary-purple-dark 0 3px 7px inset;
  transform: translateY(2px);
}

@media (max-width: 1330px) {
  .audio-img-info {
    display: none;
  }
  .audio-txt-info {
    margin: 0 0 13px 0 !important;
    font-size: 1.1rem;
  }
  .b-audio-buttons {
    margin: 0 !important;
  }
  .b-header-content {
    &__audio {
      margin: 1rem 4.3rem !important;
    }
  }
}

@media (max-width: 1090px) {
  .audio-txt-info {
    font-size: 1rem;
  }
  .b-header-content {
    &__audio {
      margin: 1rem 0rem !important;
    }
  }
  .btn-audio-custom {
    height: 40px;
    &__icons {
      min-width: 1.7rem;
    }
  }
}

@media (max-width: 992px) {
  .audio-txt-info {
    white-space: normal !important;
    text-align: center;
  }
  .b-header-content {
    &__audio {
      margin: 1rem 2rem !important;
    }
  }
  .custom-width-logo {
    width: 16rem;
  }
}

@media (max-width: 783px) {
  .b-header-content {
    justify-content: center !important;
    &__logo {
      border-right: none;
    }
    &__audio {
      display: none !important;
    }
  }
}
</style>
