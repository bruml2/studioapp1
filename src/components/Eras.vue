<template>
  <v-container id="ErasTabComp" tag="section">
          <v-toolbar dark dense color="primary">
            <v-toolbar-title class="title">Eras</v-toolbar-title>
          </v-toolbar>
    <v-row align-center justify-center>

    <v-card>
    <v-simple-table dense>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Start</th>
          <th class="text-left">Stop</th>
           <th class="text-left">Label</th>
           <th class="text-left">Color</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(era, idx) in timeline.erasArr" :key="idx">
          <td>{{ era.start }}</td>
          <td>{{ era.stop }}</td>
          <td>{{ era.label }}</td>
          <td><div :style="[erabgcolorsize, {'background-color': era.bgcolor}]"></div></td>
        </tr>
      </tbody>
    </template>
    </v-simple-table>
    </v-card>

    </v-row>


    <v-row align-center justify-center>
      <v-col cols="6">
        <v-card class="elevation-12">
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

              <v-row>
                <v-col cols="6">
                  <v-text-field
                    v-model.number="inputLabel"
                    @input="labelHdlr"
                    label="Era Label"
                    placeholder="type here"
                    outlined
                  > </v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn dark color="primary lighten-2" @click="changeTab(1)"><v-icon left>mdi-arrow-left-thick</v-icon>Prev</v-btn>
            <v-spacer></v-spacer>
            <v-btn dark color="green lighten-2">Apply</v-btn>
            <v-btn dark color="primary lighten-2" @click="changeTab(3)">Next<v-icon right>mdi-arrow-right-thick</v-icon></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card>
          <p>From prop: {{timeline.title}}</p>
          <p>From data: {{ inputStartYear }}</p>
          <p>From data: {{ inputStopYear }}</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ErasTabComponent",
  props: [ "timeline" ],
  data() {
    return {
      currEra: 1,
      inputStartYear: "",
      inputStopYear: "",
      inputLabel: "",
      erabgcolorsize: {
        height: "12px",
        width: "20px",
      }
    }
  },
  methods: {
    changeTab(val) {
      console.log("Changing tab to: " + val)
      this.$emit('changeTab', val)
    },
    startYearHdlr() {
      console.log("Title is: " + this.inputStartYear)
      this.$emit('newtlvalue', { title: this.inputStartYear })
    },
    stopYearHdlr() {
      console.log(this.inputStopYear)
      this.$emit('newtlvalue', { subtitle: this.inputStopYear })
    },
    labelHdlr() {
      console.log(this.inputLabel)
      this.$emit('newtlvalue', { subtitle: this.inputLabel })
    },
  }
  
}
</script>

<style scoped>
#ErasTabComp {
  width: 800px;
  /* height: 800px; */
  margin-bottom: 1rem;
}
</style>
