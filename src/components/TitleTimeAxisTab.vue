<template>
  <v-form>
    <v-container>
      <v-card width="50rem" class="my-3 mx-auto" color="blue-grey lighten-5" raised>
        <v-card-title>
          <h1 class="headline font-weight-bold">Titles and Time Axis</h1>
        </v-card-title>
        <v-card-text>
            <!-- <p class="title">The timeline's main title: for example, "United States History: "</p> -->
            <v-text-field label="Title" v-model="tl.title" outlined dense />
            <!-- <p class="title">The timeline's subtitle: for example, "the 20th Century"</p> -->
            <v-text-field label="Subtitle" v-model="tl.subtitle" outlined dense />

          <div class="tvHeader">
            <span class="tlTitle">{{ tl.title }}</span> &nbsp; &nbsp;
            <span class="tlSubtitle">{{ tl.subtitle }}</span>
          </div>

          <v-row>
            <v-col cols="2">
              <v-text-field label="Start Year" v-model.number="tl.startYear" outlined dense width="10rem" />
            </v-col>
            <v-col cols="2">
              <v-text-field label="Stop Year" v-model.number="tl.stopYear" outlined dense />
            </v-col>
            <v-col cols="8">
              Tick Interval:
              <v-radio-group v-model="tl.tickInterval" row>
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
  </v-form>
</template>

<script>
import TimeAxisView from "../../../studioTimelineView/src/components/TimeAxisView.vue"

export default {
  name: 'TitleTimeAxisTab',
  components: { TimeAxisView },
  props: ["tl"],
	data() {
		return {

		}
  },
  computed: {
    timeAxisPropObj() {
      return {
        startYear: this.tl.startYear,
        stopYear:  this.tl.stopYear,
        tickInterval: this.tl.tickInterval,
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
  padding: 15px 20px 10px; /* centered visually */
  text-align: left;
  font-weight: bold;
  border: 3px solid #C11B17;
}
.tlTitle {
  font-size: 24px;
  color: #0404B4;
}
.tlSubtitle {
  font-size: 18px;
}
</style>