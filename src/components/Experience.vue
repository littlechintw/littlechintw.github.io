<template>
  <v-container>
    <v-card>
      <v-card-text style="text-align: left; line-height: 30px">
        <h1>Experience</h1>
        <v-divider />
        <br />
        <!-- <h3 v-for="experience in experience_list" :key="experience">
          <v-chip small chip class="ma-2" color="orange" text-color="white">
            {{ experience.date }}
          </v-chip>
          <v-chip
            x-small
            chip
            class="ma-2"
            color="green"
            text-color="white"
            v-show="experience.active"
          >
            Now
          </v-chip>
          {{ experience.title }}
        </h3> -->
        <v-timeline :reverse="reverse" dense>
          <v-timeline-item
            v-for="experience in experience_list"
            :key="experience"
            fill-dot
            small
            :color="activeColor(experience.active)"
          >
            <v-card class="elevation-2">
              <v-card-title class="text-h5">{{
                experience.title
              }}</v-card-title>
              <v-card-text>
                {{ experience.date }}
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
    experience_list: [
      {
        title: "行政院公共數位創新空間 PDIS Ray 5.0 見習生",
        date: "2021/07 ~ 2021/08",
        active: true,
      },
      {
        title:
          "第21屆 國立臺北大學 三峽校區學生會 NTPU Student Union 資訊部部長",
        date: "2020/07 ~ 2021/06",
        active: false,
      },
      {
        title:
          "109 年行政院國家資通安全網路攻防演練 攻擊手",
        date: "2020",
        active: false,
      },
      {
        title:
          "第20屆 國立臺北大學 三峽校區學生會 NTPU Student Union 資訊部副部長",
        date: "2019/07 ~ 2020/06",
        active: false,
      },
      {
        title: "DSC NTPU Lead 2019-2020",
        date: "2019/07 ~ 2020/06",
        active: false,
      },
      {
        title: "南一中小工具 作者",
        date: "2019 ~ Now",
        active: true,
      },
      {
        title: "第五屆臺南一中機器人社 教學長",
        date: "2017/08 ~ 2018/06",
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
