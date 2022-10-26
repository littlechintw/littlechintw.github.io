<template>
  <v-container>
    <v-card>
      <v-card-text style="text-align: left; line-height: 30px;">
        <h1>Works</h1>
        <v-divider />
        <br />
        <h3 v-for="works in works_list" :key="works">
            <v-chip :outlined="!works.active" small chip class="ma-2" color="#0ABAB5" text-color="black">
              {{ works.date }}
            </v-chip>
            <!-- <v-chip
              x-small
              chip
              class="ma-2"
              color="green"
              text-color="white"
              v-show="works.active"
            >
              Now
            </v-chip> -->
            <a target="_blank" :href="works.href" >
              <v-tooltip color="black" bottom>
                <template v-slot:activator="{ on, attrs }">
                  <span style="color: black" v-bind="attrs" v-on="on">{{ works.title }}</span>
                </template>
                <span>開啟新視窗</span>
              </v-tooltip>
            </a>
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

<style scoped>
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

@media screen and (max-width: 600px) {
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