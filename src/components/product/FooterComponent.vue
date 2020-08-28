<template>
  <v-card :height="400" elevation="0" width="100vw">
    <v-footer
      :absolute="$vuetify.breakpoint.mobile ? false: true"
      color="pink darken-1 "
      class="mt-5"
      dark
    >
      <v-container>
        <v-row>
          <v-col md="3" :xs="12" :cols="true">
            <v-row>
              <v-col md="12" xs="12" :cols="true">
                <h2>ABOUT</h2>
              </v-col>
              <v-col md="12" xs="12" sm="12" :cols="true">
                <p
                  class="mt-5 text-left"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eum odio quae, nobis quisquam ratione?</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col md="3" :xs="12" :cols="true">
            <v-row>
              <v-col md="12" xs="12" sm="12" :cols="true">
                <h2>CATEGORIES</h2>
              </v-col>
              <v-col md="12" xs="12" sm="12" :cols="true">
                <v-list dense color="pink darken-1">
                  <v-list-item-group color="primary">
                    <v-list-item v-for="(item, i) in categories" :key="i">
                      <v-list-item-content>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-col>
            </v-row>
          </v-col>
          <v-col md="3" :xs="12" :cols="true">
            <v-row>
              <v-col md="12" xs="12" sm="12" :cols="true">
                <h2>INFORMATION</h2>
              </v-col>
              <v-col md="12" xs="12" sm="12" :cols="true">
                <v-list dense color="pink darken-1">
                  <v-list-item-group color="primary">
                    <v-list-item v-for="(item, i) in informations" :key="i">
                      <v-list-item-content>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-col>
            </v-row>
          </v-col>
          <v-col md="3" :xs="12" :cols="true">
            <v-row justify="start">
              <v-col md="12" xs="12" sm="12" :cols="true">
                <h2>CONTACT</h2>
              </v-col>
              <v-col md="12" xs="12" sm="12" :cols="true">
                <v-icon>{{map}}</v-icon>

                <span class="ml-2">Address : XYZ, Abcde</span>
                <v-divider class="mt-5 mb-3"></v-divider>
                <v-icon>{{phone}}</v-icon>
                <span class="ml-2">111333445</span>
                <v-divider class="mt-5 mb-3"></v-divider>

                <v-icon>{{email}}</v-icon>
                <span class="ml-2">email@email.com</span>
                <v-divider class="mt-5 mb-3"></v-divider>
                <v-icon>{{facebook}}</v-icon>
                <v-icon>{{instagram}}</v-icon>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-card>
</template>

<script>
import {
  mdiGoogleMaps,
  mdiDeskphone,
  mdiEmail,
  mdiFacebook,
  mdiInstagram
} from "@mdi/js";
export default {
  data() {
    return {
      items: [
        { text: "Real-Time" },
        { text: "Audience" },
        { text: "Conversions" }
      ],
      categories: [
        { text: "T-Shirt" },
        { text: "Celana" },
        { text: "Jaket" },
        { text: "Hoodie" },
        { text: "Kemeja" }
      ],
      informations: [
        { text: "About Us" },
        { text: "Contact Us" },
        { text: "Terms and Condition" },
        { text: "Private Policy" }
      ],
      map: mdiGoogleMaps,
      phone: mdiDeskphone,
      email: mdiEmail,
      facebook: mdiFacebook,
      instagram: mdiInstagram
    };
  }
};
</script>

<style>
</style>