## Vuetify Notes

### Basic layout

Every vuetify app should have this structure:

```javascript
<div id="app">
  <v-app>
    <v-app-bar></v-app-bar>
    <v-nav-bar></v-nav-bar>
    <v-content> <!-- Sizes your content based upon application components -->
      <v-container> <!-- Provides the application the proper gutter -->
        <v-row align="center" justify="center">
          <v-col></v-col>
          <v-col></v-col>
          <v-col></v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</div>
```

Within a <v-container>, these are some typical structures:

```javascript
<v-row class="fill-height" align="center" justify="center">
  <v-col cols="12" md="4">
    <v-card>
      <v-img src="foo.img" height="125px"> <!-- background image -->
        <v-card-title>
        </v-card-title>
        <v-card-text>
        </v-card-text>
        <v-card-actions>
        </v-card-actions>
      </v-img>
    </v-card>
  </v-col>
</v-row>
```

Here's the way to activate a hover (<v-expand-transition>):

```javascript
<v-hover v-slot:default="{ hover }">
  <v-card class="mx-auto" color="grey lighten-4" max-width="600">
    <v-img :aspect-ratio="16/9" src="https://cdn.vuetifyjs.com/images/cards/kitchen.png">
      <v-expand-transition>
        <div
          v-if="hover"
          class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
          style="height: 100%;"
        >
          $14.99
        </div>
      </v-expand-transition>
    </v-img>
    
    <v-card-text
      class="pt-6"
      style="position: relative;"
    >
      <v-btn
        absolute
        color="orange"
        class="white--text"
        fab
        large
        right
        top
      >
        <v-icon>mdi-cart</v-icon>
      </v-btn>
      <div class="font-weight-light grey--text title mb-2">For the perfect meal</div>
      <h3 class="display-1 font-weight-light orange--text mb-2">QW cooking utensils</h3>
      <div class="font-weight-light title mb-2">
        Our Vintage kitchen utensils delight any chef.<br>
        Made of bamboo by hand
      </div>
    </v-card-text>
  </v-card>
</v-hover>

```