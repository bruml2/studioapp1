<template>
<v-container>
  <v-card>
    <v-tabs centered dark
      v-model="currTab"
      background-color="blue lighten-1"
      slider-size="4"
      slider-color="white"
    >
      <v-tab>Title</v-tab>
      <v-tab>Time Axis</v-tab>
      <v-tab>Eras</v-tab>
      <v-tab>Ranges</v-tab>
      <v-tab>Events</v-tab>
      <v-tab>People</v-tab>
      <v-tab>Controls</v-tab>
      <v-tab>Footer</v-tab>
      <v-tab-item class="Title"><TitleTab :timeline="timelineA" @changeTab="changeTab" /></v-tab-item>
      <v-tab-item class="TimeAxis"><TimeAxisTab :timeline="timelineA"></TimeAxisTab></v-tab-item>
      <v-tab-item class="Eras">Here is some text.<!-- <ErasTab :timeline="timelineA"></ErasTab> --></v-tab-item>
      <v-tab-item class="Ranges">Here is some text.</v-tab-item>
    </v-tabs>
  </v-card>
  
  <v-card class="ma-4">
    <v-card-text>Current tab: {{ currTab }}</v-card-text>
  </v-card>

  <v-card>
    <TimelineView timelineID="timelineA" :timeline="timelineA"
                  @newtlvalue="timelineA = Object.assign({}, timelineA, $event)"
                  :tvcWidth="tvcWidth" :showProlog="false" />
  </v-card>
</v-container>
</template>

<script>
import TimelineView from '../../../studioTimelineView/src/components/TimelineView.vue'
import TitleTab from '@/components/Title.vue'
import TimeAxisTab from '@/components/TimeAxis.vue'
// import ErasTab from '@/components/Eras.vue'

export default {
  name: "TabsInterfaceComponent",
  components: {
    TimelineView,
    TitleTab,
    TimeAxisTab,
    // ErasTab
  },
  data: () => ({
    currTab: "",
    timeline: {
      title: "Empty Timeline Object"
    },
    timelineA: {
      name: "TimelineA from TabsInterfaceComp",
      title: "Default Title",
      subtitle: "(default subtitle)",
      footerHTML: "",
      startYear:      1900,
      stopYear:       2000,
      tickInterval:   10,
      svgSideMargin:  25,
      erasArr: [
        {label: "Great War", start: 1914, stop: 1918, bgcolor: "#A9BCF5"},
        {label: "WWII", start: 1939, stop: 1945, bgcolor: "#A9E2F3"},
        {label: "Korean War", start: 1950, stop: 1953, bgcolor: "#D0D1E6"},
        {label: "Vietnam War", start: 1963, stop: 1975,
                topY: 0.5, height: 0.5, bgcolor: "#FFF8DC"},
        {label: "Gulf War", start: 1990, stop: 1991, bgcolor: "#ECE7F2"},
      ]
    },
    timelineC: {}, /* fetched from file system during mounted hook */
    tvcWidth: 1302, /* allows for temporary 1px border */
  }),
  mounted: function() {
    fetch("bibleoverview.json", {mode: 'no-cors'})
    .then(response => {
       if (!response.ok) { throw new Error("HTTP error " + response.status); }
       return response.json();
    })
    .then(json => {
       this.timelineC = json;
    })
    .catch(function (error) {
       // this.dataError = true;
       throw new Error("fetch error: " + error);
    })
  },
  methods: {
    updatetimeline(obj) {
      console.dir(obj)
    },
    changeTab(val) {
      console.log("recvd changeTab with arg of " + val)
      this.currTab = 1
    }
  }
}
</script>

<style lang="scss" scoped>

</style>