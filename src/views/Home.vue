<template>
  <div class="home">
    <div class="left-block">
      <Intro />
    </div>
    <div class="right-block">
      <Works />
      <Experiences />
      <Communities />
      <Projects />
      <br />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from "@/components/Intro.vue";
import Works from "@/components/Works.vue";
import Experiences from "@/components/Experiences.vue";
import Communities from "@/components/Communities.vue";
import Projects from "@/components/Projects.vue";

export default {
  name: "Home",
  components: {
    Intro,
    Works,
    Experiences,
    Communities,
    Projects,
  },
  data: () => ({}),
};
</script>

<style>
.left-block {
  margin-left: 5%;
  width: 20%;
  float: left;
}
.right-block {
  margin-left: 3%;
  width: 67%;
  float: left;
}

@media screen and (max-width: 960px) {
  .left-block {
    margin-left: 5%;
    width: 90%;
    margin-right: 5%;
    float: none;
  }

  .right-block {
    margin-left: 5%;
    width: 90%;
    margin-right: 5%;
  }
}
</style>