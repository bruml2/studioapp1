<template>
  <v-container id="TimeAxisTabComp" tag="section">
    <v-row align-center justify-center>
      <v-col cols="6">
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title class="display-1">Time Axis</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form class="mt-2">
              <v-row>
              <v-col cols="4">
              <v-text-field
                v-model.number="inputStartYear"
                @input="startYearHdlr"
                label="Start Year"
                placeholder="type here"
                outlined
                autofocus
              ></v-text-field>
              </v-col>
                <!-- dense -->
              <v-col cols="4">
              <v-text-field
                v-model.number="inputStopYear"
                @input="stopYearHdlr"
                label="Stop Year"
                placeholder="type here"
                outlined
              ></v-text-field>
              </v-col>
              </v-row>

              <v-container fluid>
                <p>Tick Interval</p>
                <v-radio-group id="tickInterval" label="Tick Interval: "
                    v-model="inputTickInterval"
                    row dense mandatory>
                  <v-radio v-for="val in ['5','10','20','25','50','100','200']"
                           :key="val" :label="val" :value="val" @change="newTI(val)">
                  </v-radio>
                </v-radio-group>
              </v-container>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn dark color="primary lighten-2">Prev<v-icon left>mdi-arrow-left-thick</v-icon></v-btn>
            <v-spacer></v-spacer>
            <v-btn dark color="green lighten-2">Apply</v-btn>
            <v-btn dark color="primary lighten-2">Next<v-icon right>mdi-arrow-right-thick</v-icon></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="5">
        <v-card class="pa-3">
          <p>From prop: {{timeline.startYear}}, {{ timeline.stopYear }} and {{ timeline.tickInterval }}</p>
          <p>From data: {{ inputStartYear }}, {{ inputStopYear }} and {{ inputTickInterval }}</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "TimeAxisTabComponent",
  props: [ "timeline" ],
  data() {
    return {
      inputStartYear: this.timeline.startYear,
      inputStopYear: this.timeline.stopYear,
      inputTickInterval: this.timeline.tickInterval.toString()
    }
  },
  methods: {
    startYearHdlr() {
      console.log("Start Year is: " + this.inputStartYear)
      this.$emit('newtlvalue', { startYear: this.inputStartYear })
    },
    stopYearHdlr() {
      console.log(this.inputStopYear)
      this.$emit('newtlvalue', { subtitle: this.inputStopYear })
    },
    newTI(val) {
      console.log("Radio button: " + val)
    }
  }
  
}
</script>

<style scoped>
#TimeAxisTabComp {
  width: 800px;
  /* height: 800px; */
  margin-bottom: 1rem;
}
#tickInterval {
  color: red;
}
</style>