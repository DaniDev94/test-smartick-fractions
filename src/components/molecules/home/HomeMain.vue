<template>
  <div class="d-flex align-items-center justify-content-center flex-column w-100 mt-4 py-3 px-5">
    <div class="b-content-main bg-white col-12 col-lg-9 m-2 py-4 px-3 d-flex justify-content-center font-cairo">
      <div class="b-info-text text-center m-2 p-3">
        <h2 class="b-info-text__title font-roboto mb-4">Te damos la bienvenida a Fraccióname</h2>
        <p class="b-info-text__txt mb-1">
          Con este juego interactivo podrás practicar fracciones de una forma fácil, ágil y divertida.
        </p>
        <p class="b-info-text__txt">Aprender a fraccionar nunca fue tan sencillo.</p>
        <p class="b-info-text__txt mb-4">
          Accede muchas más formas de aprender matemáticas y lectura haciendo clic en el siguiente botón.
        </p>
        <a class="text-decoration-none" href="https://www.smartick.es/?f=1" target="_blank"
          ><button class="btn-info-custom">
            <img
              class="btn-info-custom__img"
              src="../../../assets/images/icons/go.svg"
              alt="go-icon"
              width="60"
            /></button
        ></a>
      </div>
    </div>
    <div class="mt-5">
      <audio ref="gameStartSound">
        <source :src="require('@/assets/sounds/start.mp3')" type="audio/mpeg" />
      </audio>
      <button @click="readyToNavigate" class="btn-custom-start font-cairo text-center text-capitalize">Start</button>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { ref, watch } from "vue";

export default {
  name: "HomeMain",
  components: {},
  setup() {
    const gameStartSound = ref(null);

    //Delay loading navigation
    const goNavigate = ref(false);
    const router = useRouter();

    const navigate = () => {
      if (goNavigate.value === false) goNavigate.value = true;
    };

    const readyToNavigate = () => {
      gameStartSound.value.play();
      setTimeout(navigate, 700);
    };

    watch(() => {
      if (goNavigate.value === true) {
        router.push({ name: "gamePage" });
      }
    });

    return {
      gameStartSound,
      readyToNavigate,
    };
  },
};
</script>

<style scoped lang="scss">
@import "~@/assets/styles/index.scss";

.b-content-main {
  border: 5px solid $primary-blue;
  border-radius: 0.6rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
}

.b-info-text {
  width: 100%;
  max-width: 42.4rem;
  &__title {
    text-shadow: 0px 2px 3px rgba(35, 141, 216, 0.491);
    color: $primary-blue;
    font-size: 2.2rem;
    font-weight: 600;
    letter-spacing: 1px;
  }
  &__txt {
    color: $secondary-grey-soft;
    font-size: 1.19rem;
    font-weight: 600;
    letter-spacing: 1px;
  }
}

.btn-info-custom {
  padding: 7px 25px !important;
  display: inline-flex;
  align-items: center;
  padding: 0 16px;
  border: 0;
  border-radius: 6px;
  box-sizing: border-box;
  background-image: radial-gradient(100% 100% at 100% 0, $other-green-soft 0, $other-green 100%);
  box-shadow: rgba(35, 66, 48, 0.4) 0 2px 4px, rgba(35, 66, 46, 0.3) 0 7px 13px -3px,
    rgba(58, 111, 74, 0.5) 0 -3px 0 inset;
  cursor: pointer;
  transition: box-shadow 0.15s, transform 0.15s;
  &__img {
    width: 2.7rem;
  }
}

.btn-info-custom:focus {
  box-shadow: $other-green-dark 0 0 0 1.5px inset, rgba(55, 93, 72, 0.4) 0 2px 4px,
    rgba(35, 66, 45, 0.3) 0 7px 13px -3px, $other-green-dark 0 -3px 0 inset;
}

.btn-info-custom:hover {
  box-shadow: rgba(35, 66, 47, 0.4) 0 4px 8px, rgba(35, 66, 47, 0.3) 0 7px 13px -3px, $other-green-dark 0 -3px 0 inset;
  transform: translateY(-2px);
}

.btn-info-custom:active {
  box-shadow: $other-green-dark 0 3px 7px inset;
  transform: translateY(2px);
}

.btn-custom-start {
  padding: 4px 120px !important;
  display: inline-flex;
  align-items: center;
  border: 0;
  border-radius: 6px;
  box-sizing: border-box;
  color: #ffffff;
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: 1.5px;
  background-image: radial-gradient(100% 100% at 100% 0, $other-orange-soft 0, $other-orange 100%);
  box-shadow: rgba(66, 46, 35, 0.4) 0 2px 4px, rgba(66, 44, 35, 0.3) 0 7px 13px -3px,
    rgba(111, 80, 58, 0.5) 0 -3px 0 inset;
  cursor: pointer;
  transition: box-shadow 0.15s, transform 0.15s;
}

.btn-custom-start:focus {
  box-shadow: $other-orange-dark 0 0 0 1.5px inset, rgba(93, 70, 55, 0.4) 0 2px 4px,
    rgba(66, 47, 35, 0.3) 0 7px 13px -3px, $other-orange-dark 0 -3px 0 inset;
}

.btn-custom-start:hover {
  box-shadow: rgba(66, 49, 35, 0.4) 0 4px 8px, rgba(66, 48, 35, 0.3) 0 7px 13px -3px, $other-orange 0 -3px 0 inset;
  transform: translateY(-2px);
}

.btn-custom-start:active {
  box-shadow: $other-orange-dark 0 3px 7px inset;
  transform: translateY(2px);
}
</style>
