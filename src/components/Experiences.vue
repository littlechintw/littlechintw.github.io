<template>
  <v-container>
    <v-card>
      <v-card-text style="text-align: left; line-height: 30px">
        <h1>Experiences</h1>
        <v-divider />
        <br />
        <h3 v-for="experiences in experiences_list" :key="experiences" style="padding-bottom: 10px">
          <v-icon x-small>mdi-circle</v-icon> 
          <a target="_blank" :href="experiences.href">
            <v-tooltip color="black" bottom>
              <template v-slot:activator="{ on, attrs }">
                <span style="color: black" v-bind="attrs" v-on="on">{{ experiences.title }}</span>
              </template>
              <span>開啟新視窗</span>
            </v-tooltip>
          </a>
          <h4 v-for="detail in experiences.detailList" :key="detail" style="padding-left: 30px">
            <v-chip :outlined="!detail.active" small chip class="ma-2" color="#0ABAB5" text-color="black">
            {{ detail.date }}
            </v-chip>
            {{ detail.title }}
          </h4>
        </h3>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
var config = require("../../config.json");

export default {
  name: "Intro",
  components: {},
  data: () => ({
    experiences_list: []
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
    this.experiences_list = config.experiences;
  },
};
</script>
