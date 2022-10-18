<template>
  <v-container>
    <v-card>
      <v-card-text style="text-align: left; line-height: 30px">
        <h1>Works</h1>
        <v-divider />
        <br />
        <!-- <a
          v-for="works in works_list"
          :key="works"
          target="_blank"
          :href="works.href"
        >
          {{ works.title }}
          <br />
        </a> -->
        <v-chip-group active-class="primary--text" column>
          <v-chip v-for="works in works_list" :key="works" target="_blank" :href="works.href">
            <h3>{{ works.title }}</h3>
          </v-chip>
        </v-chip-group>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Intro",
  components: {},
  data: () => ({
    works_list: [
      {
        title: "Short Text Tool",
        href: "https://s.littlechin.tw/",
      },
      {
        title: "NTPU 課程試排",
        href: "https://ntpu-timetable.littlechin.tw/",
      },
      {
        title: "NTPU Notifications (Telegram Channel)",
        href: "https://t.me/ntpu_notifications",
      },
      {
        title: "NTPU Tool",
        href: "https://ntpu-tool.netlify.app/",
      },
      {
        title: "NTPU All Star Game 2020",
        href: "https://ntpu-allstar.littlechin.tw/",
      },
    ],
  }),
};
</script>