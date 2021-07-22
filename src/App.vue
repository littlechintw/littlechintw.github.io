<template>
  <div id="app">
    <v-app>
      <!-- <v-app-bar app color="primary" dark>
    </v-app-bar> -->

      <v-main>
        <div id="router">
          <router-view />
        </div>
      </v-main>

      <v-footer padless class="font-weight-medium">
        <v-col class="text-center" cols="12" style="font-size: 14px">
          &copy; 2019 - {{ new Date().getFullYear() }} Copyright
          <a href="https://littlechin.tw">littlechin.tw</a>. All rights
          reserved.
        </v-col>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: "App",

  components: {
    // HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
@import "./assets/font/font.css"; 
#app {
  font-family: Open Huninn;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #2c3e50;
  padding-top: 15px;
}
</style>