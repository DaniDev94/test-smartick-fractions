<template>
  <!-- Loading new fraction -->
  <div id="top" class="b-content-initial d-flex justify-content-center" :class="{ 'background-content': show }" />
  <!-- Game -->
  <div class="b-content w-100 min-vh-100 py-3 px-4">
    <div class="m-2 p-1">
      <h1 class="custom-title font-cairo text-center">
        Añade divisiones al rectángulo (denominador) y pinta cada división (numerador) hasta que coincida con la
        fracción dada. Pueden ser fracciones equivalentes.
      </h1>
    </div>
    <div class="b-content__game bg-white col-lg col-lg-12 mb-4">
      <div class="d-flex justify-content-center align-items-center flex-column p-4">
        <!-- Fraction -->
        <RandomFraction :numerator="randomNumerator" :denominator="randomDenominator" />
        <!-- Fraction box -->
        <div class="container mt-4">
          <div class="row d-flex justify-content-center">
            <div class="col-md-10 col-md-offset-1">
              <div
                class="d-flex p-3"
                :class="[
                  success === true ? 'success-box-border' : 'initial-box-border',
                  error === true ? 'error-box-border' : 'initial-box-border',
                ]"
              >
                <div
                  v-for="(box, index) in boxDenominator"
                  :key="index"
                  class="w-100"
                  :class="boxNumerator <= index ? 'division-denominator-box' : 'division-numerator-box'"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <!-- Increment and decrement buttons -->
        <div
          v-if="!showInfoSuccess"
          class="container mt-sm-4 mt-md-3 mt-lg-4 mt-xl-5 mb-sm-2 mb-md-1 mb-lg-2 mb-xl-4 font-cairo"
        >
          <div class="d-flex justify-content-evenly flex-wrap">
            <div class="col-12 col-lg-4 b-buttons-content d-flex flex-column">
              <span class="b-buttons-content__title text-center">Numerador</span>
              <div class="d-flex justify-content-sm-center justify-content-md-center justify-content-evenly mt-2">
                <button
                  @click="addColorNumerator"
                  :class="
                    boxDenominator === 0 || boxNumerator === 10 || boxNumerator >= boxDenominator
                      ? 'disabled-split-button'
                      : 'split-button'
                  "
                >
                  <img class="split-button__icon" src="../../assets/images/icons/plus.svg" alt="plus-icon" />
                </button>
                <button
                  @click="deleteColorNumerator"
                  :class="boxDenominator === 0 || boxNumerator === 0 ? 'disabled-split-button' : 'split-button'"
                >
                  <img class="split-button__icon" src="../../assets/images/icons/minus.svg" alt="minus-icon" />
                </button>
              </div>
            </div>
            <div class="col-12 col-lg-4 b-buttons-content d-flex flex-column">
              <span class="b-buttons-content__title text-center">Denominador</span>
              <div class="d-flex justify-content-sm-center justify-content-md-center justify-content-evenly mt-2">
                <button
                  @click="addBoxDenominator"
                  :class="boxDenominator === 10 ? 'disabled-split-button' : 'split-button'"
                >
                  <img class="split-button__icon" src="../../assets/images/icons/plus.svg" alt="plus-icon" />
                </button>
                <button
                  @click="deleteBoxDenominator"
                  :class="boxDenominator > 0 ? 'split-button' : 'disabled-split-button'"
                >
                  <img class="split-button__icon" src="../../assets/images/icons/minus.svg" alt="minus-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="container mt-5 mb-4 font-cairo" v-else>
          <div class="b-success-text d-flex justify-content-center align-items-center">
            <h2 class="b-success-text__word">¡Correcto!</h2>
          </div>
        </div>
        <!-- Add and delete button sounds -->
        <audio ref="addDivAndColor">
          <source :src="require('@/assets/sounds/add.mp3')" type="audio/mpeg" />
        </audio>
        <audio ref="deleteDivAndColor">
          <source :src="require('@/assets/sounds/delete.mp3')" type="audio/mpeg" />
        </audio>
      </div>
    </div>
    <div v-if="!showInfoSuccess" class="mt-4 mb-2 d-flex justify-content-center">
      <button @click="validateExercise" class="btn-check-exercise text-center mt-2">
        <img class="btn-check-exercise__icon" src="../../assets/images/icons/paper-plane.svg" alt="plus-icon" />
      </button>
    </div>
    <div v-else class="mt-4 mb-2 d-flex justify-content-center">
      <button @click="readyToNavigate" class="btn-next-exercise font-cairo text-center text-capitalize mt-2">
        Next level
      </button>
    </div>
    <!-- success, error and next franction sounds -->
    <audio ref="exerciseSuccess">
      <source :src="require('@/assets/sounds/success.mp3')" type="audio/mpeg" />
    </audio>
    <audio ref="exerciseError">
      <source :src="require('@/assets/sounds/error.mp3')" type="audio/mpeg" />
    </audio>
    <audio ref="exerciseNext">
      <source :src="require('@/assets/sounds/next-level.mp3')" type="audio/mpeg" />
    </audio>
  </div>
</template>


<script>
import RandomFraction from "../atoms/game/RandomFraction.vue";

export default {
  name: "GamePage",
  components: { RandomFraction },
  data() {
    return {
      show: false,
      error: false,
      success: false,
      showInfoSuccess: false,
      boxNumerator: 0,
      boxDenominator: 0,
      randomNumerator: 0,
      randomDenominator: 0,
    };
  },
  mounted() {
    this.generateRandomFraction();
    setTimeout(() => {
      this.show = true;
    }, 700);
  },
  methods: {
    generateRandomFraction() {
      let numerator = Math.floor(Math.random() * 10 - 1 + 1) + 1;
      let denominator = Math.floor(Math.random() * (Math.floor(10) - Math.ceil(2) + 1)) + Math.ceil(2);
      let gcd = function gcd(a, b) {
        return b ? gcd(b, a % b) : a;
      };
      gcd = gcd(numerator, denominator);
      if (denominator > numerator) {
        this.randomDenominator = denominator / gcd;
        this.randomNumerator = numerator / gcd;
      } else {
        this.randomNumerator = denominator / gcd;
        this.randomDenominator = numerator / gcd;
      }
    },
    addBoxDenominator() {
      this.boxDenominator += 1;
      if (this.boxDenominator > 0) this.$refs.addDivAndColor.play();
    },
    deleteBoxDenominator() {
      this.boxDenominator -= 1;
      if (this.boxDenominator >= 0) this.$refs.deleteDivAndColor.play();
      if (this.boxDenominator < this.boxNumerator) this.boxNumerator = this.boxDenominator;
    },
    addColorNumerator() {
      this.boxNumerator += 1;
      if (this.boxNumerator > 0) this.$refs.addDivAndColor.play();
    },
    deleteColorNumerator() {
      this.boxNumerator -= 1;
      if (this.boxNumerator >= 0) this.$refs.deleteDivAndColor.play();
    },
    validateExercise() {
      if (
        (this.randomNumerator === this.boxNumerator && this.randomDenominator === this.boxDenominator) ||
        this.randomNumerator / this.randomDenominator === this.boxNumerator / this.boxDenominator
      ) {
        this.success = true;
        setTimeout(() => {
          this.success = false;
        }, 700);
        this.showInfoSuccess = true;
        this.$refs.exerciseSuccess.play();
      } else {
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 700);
        this.$refs.exerciseError.play();
      }
    },
    //Delay loading navigation for next level
    reloadPage() {
      this.$router.go();
    },
    readyToNavigate() {
      this.$refs.exerciseNext.play();
      window.scrollTo(0, 0);
      setTimeout(this.reloadPage, 640);
    },
  },
};
</script>


<style scoped lang="scss">
@import "~@/assets/styles/index.scss";

// Loading
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

// Game
.b-content {
  background-color: $primary-blue-lightest;
  &__game {
    border-radius: 0.6rem;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }
}

.custom-title {
  color: $primary-blue;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 1.7px;
}

// Fraction box
.initial-box-border {
  width: 100%;
  height: 26.75rem;
  border: 8px solid $primary-blue;
  border-radius: 1rem;
  background-color: $primary-blue-lightest;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
}

.success-box-border {
  width: 100%;
  height: 26.75rem;
  border: 8px solid $table-border-success;
  border-radius: 1rem;
  background-color: $table-border-success-soft;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  animation: preloader 0.7s ease-in-out alternate;
}

@keyframes preloader {
  50% {
    transform: scale(1.3);
  }
}

.error-box-border {
  width: 100%;
  height: 26.75rem;
  border: 8px solid $table-border-error;
  border-radius: 1rem;
  background-color: $table-border-error-soft;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  animation: wiggle 1.4s linear;
}

@keyframes wiggle {
  10% {
    transform: rotateZ(0);
  }
  15% {
    transform: rotateZ(-15deg);
  }
  20% {
    transform: rotateZ(10deg);
  }
  25% {
    transform: rotateZ(-10deg);
  }
  30% {
    transform: rotateZ(6deg);
  }
  35% {
    transform: rotateZ(-4deg);
  }
  100% {
    transform: rotateZ(0);
  }
}

.division-denominator-box {
  width: 20%;
  min-height: 12rem;
  margin: -2.4px 0px;
  border: 1px solid $secondary-grey;
  background-color: $table-denominator;
  border-radius: 1rem;
  display: inline-block;
}

.division-numerator-box {
  width: 20%;
  min-height: 12rem;
  margin: -2.4px 0px;
  border: 1px solid $secondary-grey-dark;
  background-image: radial-gradient(100% 100% at 100% 0, $table-numerator 0, $primary-blue 100%);
  border-radius: 1rem;
  display: inline-block;
}

.b-buttons-content {
  border: 6px solid $primary-blue;
  border-radius: 1.5rem;
  padding: 0.3rem 4rem 1.2rem 4rem;
  background-color: $primary-blue-lightest;
  box-shadow: rgba(0, 0, 0, 0.181) 0px 1px 2px 0px, rgba(93, 93, 93, 0.37) 0px 4px 6px 2px;
  &:hover {
    transform: translateY(-02px);
    box-shadow: rgba(0, 0, 0, 0.178) 0px 19px 28px, rgba(0, 0, 0, 0.155) 0px 12px 14px;
  }
  &__title {
    font-size: 1.7rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: $primary-blue;
    -webkit-text-stroke: 1.3px $secondary-grey-dark;
  }
}

.split-button {
  padding: 0.5rem 2rem;
  margin: 1px 7px;
  border: 0;
  border-radius: 6px;
  box-sizing: border-box;
  background-image: radial-gradient(100% 100% at 100% 0, $other-orange-soft 0, $other-orange 100%);
  box-shadow: rgba(66, 46, 35, 0.4) 0 2px 4px, rgba(66, 44, 35, 0.3) 0 7px 13px -3px,
    rgba(111, 80, 58, 0.5) 0 -3px 0 inset;
  transition: box-shadow 0.15s, transform 0.15s;
  cursor: pointer;
  &__icon {
    width: 2rem;
    padding: 1px;
  }
}

.split-button:hover {
  box-shadow: rgba(66, 49, 35, 0.4) 0 4px 8px, rgba(66, 48, 35, 0.3) 0 7px 13px -3px, $other-orange 0 -3px 0 inset;
  transform: translateY(-2px);
}

.split-button:active {
  box-shadow: $other-orange-dark 0 3px 7px inset;
  transform: translateY(2px);
}

.disabled-split-button {
  padding: 0.5rem 2rem;
  margin: 1px 7px;
  border: 0;
  border-radius: 6px;
  box-sizing: border-box;
  background-image: radial-gradient(100% 100% at 100% 0, $other-orange-soft 0, $other-orange-soft 100%);
  box-shadow: rgba(66, 46, 35, 0.087) 0 2px 4px, rgba(66, 44, 35, 0.087) 0 7px 13px -3px,
    rgba(111, 80, 58, 0.229) 0 -3px 0 inset;
  transition: box-shadow 0.15s, transform 0.15s;
  pointer-events: none;
  &__icon {
    width: 100%;
    max-width: 2rem;
    padding: 1px;
  }
}

.b-success-text {
  width: 100%;
  height: 132.781px;
  &__word {
    color: $table-border-success;
    -webkit-text-stroke: 2px $secondary-grey-dark;
    font-size: 3.8rem;
    font-weight: 700;
    letter-spacing: 1px;
  }
}

.btn-check-exercise {
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
  background-image: radial-gradient(100% 100% at 100% 0, $other-green-soft 0, $other-green 100%);
  box-shadow: rgba(35, 66, 48, 0.4) 0 2px 4px, rgba(35, 66, 46, 0.3) 0 7px 13px -3px,
    rgba(58, 111, 74, 0.5) 0 -3px 0 inset;
  cursor: pointer;
  transition: box-shadow 0.15s, transform 0.15s;
  &__icon {
    width: 3.5rem;
    padding: 3px;
  }
}

.btn-check-exercise:focus {
  box-shadow: $other-green-dark 0 0 0 1.5px inset, rgba(55, 93, 72, 0.4) 0 2px 4px,
    rgba(35, 66, 45, 0.3) 0 7px 13px -3px, $other-green-dark 0 -3px 0 inset;
}

.btn-check-exercise:hover {
  box-shadow: rgba(35, 66, 47, 0.4) 0 4px 8px, rgba(35, 66, 47, 0.3) 0 7px 13px -3px, $other-green-dark 0 -3px 0 inset;
  transform: translateY(-2px);
}

.btn-check-exercise:active {
  box-shadow: $other-green-dark 0 3px 7px inset;
  transform: translateY(2px);
}

.btn-next-exercise {
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

.btn-next-exercise:focus {
  box-shadow: $other-orange-dark 0 0 0 1.5px inset, rgba(93, 70, 55, 0.4) 0 2px 4px,
    rgba(66, 47, 35, 0.3) 0 7px 13px -3px, $other-orange-dark 0 -3px 0 inset;
}

.btn-next-exercise:hover {
  box-shadow: rgba(66, 49, 35, 0.4) 0 4px 8px, rgba(66, 48, 35, 0.3) 0 7px 13px -3px, $other-orange 0 -3px 0 inset;
  transform: translateY(-2px);
}

.btn-next-exercise:active {
  box-shadow: $other-orange-dark 0 3px 7px inset;
  transform: translateY(2px);
}


// All media queries
@media (max-width: 1200px) {
  .initial-box-border,
  .success-box-border,
  .error-box-border {
    height: 25rem;
  }
  .division-denominator-box,
  .division-numerator-box {
    min-height: 11.1rem;
  }
  .b-buttons-content {
    padding: 0.3rem 3rem 1.2rem 3rem;
    &__title {
      font-size: 1.5rem;
    }
  }
  .split-button {
    &__icon {
      width: 1.7rem;
    }
  }
  .b-success-text {
    height: 60px;
    &__word {
      font-size: 3rem;
    }
  }
  .btn-check-exercise {
    padding: 4px 100px !important;
  }
  .btn-next-exercise {
    padding: 2px 90px !important;
    font-size: 2.2rem;
  }
}

@media (max-width: 1030px) {
  .b-buttons-content {
    padding: 0.3rem 1rem 1.2rem 1rem;
  }
}

@media (max-width: 992px) {
  .custom-title {
    font-size: 1.6rem;
  }
  .initial-box-border,
  .success-box-border,
  .error-box-border {
    height: 20.7rem;
  }
  .division-denominator-box,
  .division-numerator-box {
    min-height: 9rem;
  }
  .b-buttons-content {
    width: 60%;
    margin: 0.7rem 0;
    &__title {
      font-size: 2rem;
    }
  }
  .b-success-text {
    height: 40px;
    &__word {
      font-size: 2.2rem;
    }
  }
  .btn-next-exercise {
    padding: 1px 70px !important;
    font-size: 2.2rem;
  }
}

@media (max-width: 767px) {
  .b-buttons-content {
    width: 100%;
    margin: 0.7rem 0;
    &__title {
      font-size: 2rem;
    }
  }
}

@media (max-width: 575px) {
  .initial-box-border,
  .success-box-border,
  .error-box-border {
    height: 16.8rem;
    margin-bottom: 1rem;
  }
  .division-denominator-box,
  .division-numerator-box {
    min-height: 7rem;
  }
  .b-buttons-content {
    width: 80%;
    margin: 0.7rem 0;
    &__title {
      font-size: 1.8rem;
    }
  }
}

@media (max-width: 480px) {
  .custom-title {
    font-size: 1.4rem;
  }
  .b-buttons-content {
    width: 100% !important;
    &__title {
      font-size: 1.7rem;
    }
  }
  .b-success-text {
    height: 20px;
    &__word {
      font-size: 2rem;
    }
  }
  .btn-check-exercise {
    &__icon {
      width: 2.7rem;
    }
  }
  .btn-next-exercise {
    padding: 1px 65px !important;
    font-size: 1.9rem;
  }
}
</style>
