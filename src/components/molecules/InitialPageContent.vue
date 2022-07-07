<template>
  <div class="d-flex flex-column justify-content-center align-items-center">
    <ProjectIcon/>
    <ProjectName/>
  </div>
</template>

<script>
import ProjectIcon from "../atoms/ProjectIcon.vue";
import ProjectName from "../atoms/ProjectName.vue";
export default {
  name: "InitialPageContent",
  components: {
    ProjectIcon,
    ProjectName,
  },
  setup() {},
};
</script>

<style scoped lang="scss">
// @import "~@/assets/styles/index.scss";
</style>
