<template>
  <v-container>
    <v-card>
      <v-card-text style="text-align: left; line-height: 30px">
        <h1>Works</h1>
        <v-divider />
        <br />
        <h3 v-for="works in works_list" :key="works">
          <v-chip outlined small chip class="ma-2" color="#0ABAB5" text-color="black">
            {{ works.date }}
          </v-chip>
          <v-chip
            x-small
            chip
            class="ma-2"
            color="green"
            text-color="white"
            v-show="works.active"
          >
            Now
          </v-chip>
          <a target="_blank" :href="works.href" style="color: black">{{ works.title }}</a>
        </h3>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
var config = require("../../config.json");

export default {
  name: "Works",
  components: {},
  data: () => ({
    works_list: [],
  }),
  methods: {
    activeColor(active) {
      if (active) {
        return "#4DBB3B";
      }
      return "#D3D3D3";
    },
  },
  mounted: function () {
    this.works_list = config.works;
  },
};
</script>
