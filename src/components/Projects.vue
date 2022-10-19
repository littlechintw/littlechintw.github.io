<template>
  <v-container>
    <v-card>
      <v-card-text style="text-align: left; line-height: 30px">
        <h1>Projects</h1>
        <v-divider />
        <br />
        <!-- <a
          v-for="projects in projects_list"
          :key="projects"
          target="_blank"
          :href="projects.href"
        >
          {{ projects.title }}
          <br />
        </a> -->
        <v-chip-group active-class="primary--text" column>
          <v-chip v-for="projects in projects_list" :key="projects" target="_blank" :href="projects.href">
            <h3>{{ projects.title }}</h3>
          </v-chip>
        </v-chip-group>
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
    projects_list: [],
  }),
  mounted: function () {
    this.projects_list = config.projects;
  },
};
</script>