<template>
  <v-app>

    <v-toolbar dark height="40" color="indigo">
      <v-toolbar-title class="headline text-uppercase font-weight-bold ml-3">
        <span>History Timeline Studio &nbsp;</span>
        <span class="font-weight-light text-lowercase ml-4">a work in progress</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text class="indigo" href="userguide.html" target="_blank">
        <span class="mr-2">User Guide</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <v-btn text href="https://github.com/bruml2/studioapp1" target="_blank">
        <span class="mr-2">GitHub Repo</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <TabUI />
      <TabsInterface />
    </v-content>

  </v-app>
</template>

<script>
import TabUI from './components/TabUI.vue';
import TabsInterface from './components/TabsInterface.vue';

export default {
  name: 'App',
  components: {
    TabUI,
    TabsInterface
  }
}
</script>
