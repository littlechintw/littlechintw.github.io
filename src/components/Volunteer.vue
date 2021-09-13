<template>
  <v-container>
    <v-card>
      <v-card-text style="text-align: left; line-height: 30px">
        <h1>Volunteer</h1>
        <v-divider />
        <br />
        <!-- <h3 v-for="volunteer in volunteer_list" :key="volunteer">
          <v-chip small chip class="ma-2" color="orange" text-color="white">
            {{ volunteer.date }}
          </v-chip>
          <v-chip
            x-small
            chip
            class="ma-2"
            color="green"
            text-color="white"
            v-show="volunteer.active"
          >
            Now
          </v-chip>
          {{ volunteer.title }}
        </h3> -->
        <v-timeline :reverse="reverse" dense>
          <v-timeline-item
            v-for="volunteer in volunteer_list"
            :key="volunteer"
            fill-dot
            small
            :color="activeColor(volunteer.active)"
          >
            <v-card class="elevation-2">
              <v-card-title class="text-h5">{{ volunteer.title }}</v-card-title>
              <v-card-text>
                {{ volunteer.date }}
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Intro",
  components: {},
  data: () => ({
    volunteer_list: [
      {
        title: "HITCON 2021 平面攝影組 組員",
        date: "2021/05 ~ 2021/11",
        active: true,
      },
      {
        title: "COSCUP 2021 紀錄組 組員",
        date: "2021/03 ~ 2021/07",
        active: false,
      },
      {
        title: "SITCON 2021 攝影組 組員",
        date: "2020/11 ~ 2021/09",
        active: false,
      },
      {
        title: "SITCON 2020 場務組 組員",
        date: "2019/10 ~ 2020/08",
        active: false,
      },
    ],
  }),
  methods: {
    activeColor(active) {
      if (active) {
        return "#4DBB3B";
      }
      return "#D3D3D3";
    },
  },
};
</script>