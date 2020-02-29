<template>
  <v-container id="TitleTabComp" tag="section">
    <v-row align-center justify-center>
      <v-col cols="6">
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title class="display-1">Title and Subtitle</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form class="mt-2">
              <v-text-field
                v-model="inputTitle"
                @input="titleHdlr"
                label="Timeline Title"
                placeholder="type here"
                outlined
                autofocus
              ></v-text-field>
                <!-- dense -->
              <v-text-field
                v-model="inputSubtitle"
                @input="subtitleHdlr"
                label="Timeline Subtitle"
                placeholder="type here"
                outlined
              ></v-text-field>
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
          <p>From data: {{ inputTitle }}</p>
          <p>From data: {{ inputSubtitle }}</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "TitleTabComponent",
  props: [ "timeline" ],
  data() {
    return {
      inputTitle: this.timeline.title,
      inputSubtitle: "no longer",
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
#titleTabComp {
  width: 300px;
  height: 300px;
}
</style>