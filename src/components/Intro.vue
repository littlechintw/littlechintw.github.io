<template>
  <v-container>
    <v-card class="mx-auto">
      <v-card-text>
        <img
          src="https://www.gravatar.com/avatar/c87cbee0a4a96655bd7366b56be7a18a"
          style="border-radius: 20%"
        />
        <h1>littlechin</h1>
        <br />
        <v-divider />
        <br />
        <h3 style="text-align: center">
          我是<strong>小群</strong>，但，你怎麼在這？
        </h3>
        <br />
        <v-tooltip color="black" bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-chip outlined target="_blank" href="/resume" v-bind="attrs" v-on="on">
              簡歷 / Resume
            </v-chip>
          </template>
          <span>開啟新視窗</span>
        </v-tooltip>
        <br /><br />
        <v-divider />
        <br />
        <v-card elevation="0">
          <v-tooltip color="black" bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn text icon v-for="link in links" :key="link" target="_blank" :href="link.link" v-bind="attrs" v-on="on">
                <v-icon>mdi-{{ link.category }}</v-icon>
              </v-btn>
            </template>
            <span>開啟新視窗</span>
          </v-tooltip>
          
        </v-card>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Intro",
  components: {},
  data: () => ({
    links: [
      {
        link: "https://www.linkedin.com/in/littlechin",
        category: "linkedin",
      },
      {
        link: "https://github.com/littlechintw",
        category: "github",
      },
      {
        link: "https://www.facebook.com/littlechinright",
        category: "facebook",
      },
      {
        link: "https://www.instagram.com/littlechintw",
        category: "instagram",
      },
      {
        link: "mailto:littlechintw+page@gmail.com",
        category: "email",
      },
    ],
  }),
};
</script>