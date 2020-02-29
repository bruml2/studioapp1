<template>
  <v-app>
    <v-toolbar dark height="40" color="indigo">
      <v-toolbar-title class="headline text-uppercase font-weight-bold ml-3">
        <span>History Timeline Studio &nbsp;</span>
        <span class="font-weight-light text-lowercase ml-4">a work in progress</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text class="indigo"
        href="userguide.html"
        target="_blank"
      >
        <span class="mr-2">User Guide</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-toolbar>

    <!--
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="font-weight-bold display-1 ml-3">
        HISTORY TIMELINE STUDIO
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="userguide/userguide.html"
        target="_blank"
        text
      >
        <span class="mr-2">USER GUIDE</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    -->

    <v-content>
      <TabsInterface />
      <!-- <HelloWorld /> -->
    </v-content>
  </v-app>
</template>

<script>
import TabsInterface from './components/TabsInterface.vue';
// import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    TabsInterface,
    // HelloWorld
  },
};
</script>
