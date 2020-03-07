<template>
  <v-container>
    <v-card width="98%" class="my-10 mx-auto" color="blue-grey lighten-4" raised>
      <!-- note vertical, grow, height(just the tab itself), show-arrows attributes -->
      <!-- see v-window for auto animation amoung windows -->
      <v-tabs vertical>
        <v-tab>Select Timeline</v-tab>
        <v-tab>Titles and Time Axis</v-tab>
        <v-tab>Eras</v-tab>
        <v-tab>Ranges</v-tab>
        <v-tab>Events</v-tab>
        <v-tab>People</v-tab>
        
        <v-tab-item><SelectTimelineTab @fetchTL="fetchTL" /></v-tab-item>
        <v-tab-item><TitleTimeAxisTab :tl="tl" /></v-tab-item>
      </v-tabs>
    </v-card>
  </v-container>
</template>

<script>
import SelectTimelineTab from './SelectTimelineTab.vue'
import TitleTimeAxisTab from './TitleTimeAxisTab.vue'

export default {
  name: 'TabUI',
  components: {
    SelectTimelineTab,
    TitleTimeAxisTab
  },
  data() {
    return {
      tl: {
        title: "United States History:",
        subtitle: "the 20th Century",
        startYear: 1900,
        stopYear:  2000,
        tickInterval: 20
      }
    }
  },
  methods: {
    fetchTL(msg) {
      console.log(msg)
      // if (msg == "new") then nothing;
    }
  }
};
</script>
