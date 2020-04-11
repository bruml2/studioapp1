<template>
  <!-- TitleTimeAxisTab.vue  Master v0.3  Apr 10 -->
    <v-container>
      <v-card width="20%" class="my-2 mx-auto" color="red" raised>This is the Master</v-card>

      <v-card width="40rem" class="my-8 mx-auto" color="blue-grey lighten-5" raised>
        <v-card-title class="title">Title/subtitle and Time Axis
          <!-- <span class="headline font-weight-bold">Title/subtitle and Time Axis</span> -->
        </v-card-title>

        <v-card-text>
          <!-- <p class="title">The timeline's main title: for example, "United States History: "</p> -->
          <v-text-field label="Title" v-model="title" outlined dense data-j="title"/>
          <!-- <p class="title">The timeline's subtitle: for example, "the 20th Century"</p> -->
          <v-text-field label="Subtitle" v-model="subtitle" placeholder="type here" outlined dense />

          <div id="tvHeader" class="tvHeader">
            <span class="tlTitle">{{ title }}</span> &nbsp; &nbsp;
              <span class="tlSubtitle">{{ subtitle }}</span>
          </div>

          <v-row>
            <v-col cols="2">
              <v-text-field label="Start Year" v-model.number="startYear" outlined dense width="10rem" />
            </v-col>
            <v-col cols="2">
              <v-text-field label="Stop Year" v-model.number="stopYear" outlined dense />
            </v-col>
            <v-col cols="8">
              Tick Interval:
              <v-radio-group v-model="tickInterval" row>
                <v-radio
                  v-for="n in [5, 10, 20, 25, 50, 100]"
                  :key="n"
                  :label="n.toString()"
                  :value="n"
                ></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
          <TimeAxisView :timeAxisPropObj="timeAxisPropObj" />
        </v-card-text>
      </v-card>
    </v-container>
</template>

<script>
import TimeAxisView from "../../../../HistoryTimelineStudio/timelineviewcomp/src/components/TimeAxisView.vue"

export default {
  name: 'TitleTimeAxisTab',
  components: { TimeAxisView },
  props: ["tl"], // empty object for new timeline;
	data() {
		return {
      title: "",
      subtitle: "",
      startYear: undefined,
      stopYear: undefined,
      tickInterval: undefined
		}
  },
  computed: {
    timeAxisPropObj() {
      // let svgWidthAdj = document.getElementsByClassName('tvHeader')[0].offsetWidth
      // console.log(svgWidthAdj)
      return {
        startYear: this.startYear,
        stopYear:  this.stopYear,
        tickInterval: this.tickInterval,
        svgWidth: 700
      }
    }
  }
}
</script>

<style>
.tvHeader {
	font-family: Palatino, "New Time Roman", serif;
  position: relative; /* parent container for positioning */
  box-sizing: border-box;
  width: 98%;
  margin: 10px auto;
  padding: 17px 20px 10px; /* centered visually */
  text-align: left;
  font-weight: bold;
  border: 3px solid #C11B17;
}
.tlTitle {
  font-size: 24px;
  color: #0404B4;
}
.tlSubtitle {
  font-size: 20px;
}
</style>
