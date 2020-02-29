<template>
  <v-container id="ErasTabComp" tag="section">
    <v-row align-center justify-center>
      <v-col cols="6">
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title class="display-1">Eras</v-toolbar-title>
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
            <v-spacer></v-spacer>
            <v-btn dark color="green lighten-2">Apply</v-btn>
            <v-btn dark color="primary lighten-2" @click="changeTab(1)">Next<v-icon right>mdi-arrow-right-thick</v-icon></v-btn>
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
      inputStartYear: "",
      inputStopYear: "",
      inputLabel: ""
    }
  },
  methods: {
    titleHdlr() {
      console.log("Title is: " + this.inputTitle)
      this.$emit('newtlvalue', { title: this.inputTitle })
    },
    subtitleHdlr() {
      console.log(this.inputSubtitle)
      this.$emit('newtlvalue', { subtitle: this.inputSubtitle })
    },
    changeTab(val) {
      console.log("Changing tab to: " + val)
      this.$emit('changeTab', val)
    }
  }
  
}
</script>

<style scoped>
#ErasTabComp {
  width: 300px;
  height: 300px;
}
</style>
