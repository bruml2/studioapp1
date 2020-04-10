<template>
  <v-container>
    <v-card width="98%" class="my-10 mx-auto" color="blue-grey lighten-4" raised>
      <!-- note vertical, grow, height(just the tab itself), show-arrows attributes -->
      <!-- see v-window for auto animation amoung windows -->
      <v-tabs vertical v-model="currTab" slider-size="4">
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

<!--
    <v-card v-if="showTimeline">
      <TimelineView timelineID="currTimeline" :timeline="tl"
                    @newtlvalue="tl = Object.assign({}, tl, $event)" />
    </v-card>
-->
  </v-container>
</template>

<script>
import SelectTimelineTab from './SelectTimelineTab.vue'
import TitleTimeAxisTab from './TitleTimeAxisTab.vue'
// import TimelineView from '../../../studioTimelineView/src/components/TimelineView.vue'

export default {
  name: 'TabUI',
  components: {
    SelectTimelineTab,
    TitleTimeAxisTab,
    // TimelineView
  },
  data() {
    return {
      currTab: 0,
      showTimeline: false, // set by watcher;
      tl: {}
    }
  },
  watch: {
    tl: {
      deep: true,
      immediate: true,
      handler: function (newVal) {
        // sets showTimeline if tl has 4 required properties;
        const newValLen = Object.keys(newVal).length
        // console.log("In watcher for tl; length is: " + newValLen + "; keys: ", Object.keys(newVal))
        if (newValLen < 4) {
          this.showTimeline = false
        } else {
          let reqProperties = ["title","startYear","stopYear","tickInterval"]
          let keysArr = Object.keys(newVal)
          let haveReq = true
          reqProperties.forEach(prop => {if (!keysArr.includes(prop)) haveReq = false})
          this.showTimeline = haveReq
        }
      }
    }
  },
  methods: {
    fetchTL(obj) {
      // this event comes from SelectTimelineTab; sends an object
      //   with msg, url, and/or timelineID props (to do);
      console.log("in fetchTL handler: " + obj.msg)
      if (obj.msg == "new") {
        this.tl = {
          title: "Example Title",
          // subtitle: "needs to be bigger",
          // startYear: 1900,
          // stopYear: 2000,
          tickInterval: 10
        }
      }
      this.currTab = 1
    }
  }
};
</script>
