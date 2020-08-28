<template>
  <div>
    <v-row>
      <v-col lg="12" md="12" sm="12" xs="12">
        <v-carousel
          hide-delimiters
          cycle
          class="rounded-xl"
          :height="$vuetify.breakpoint.mobile ? '190' : '500'"
          show-arrows-on-hover
        >
          <v-carousel-item
            v-for="(item, index) in items"
            :key="index"
            reverse-transition="fade-transition"
            transition="fade-transition"
          >
            <v-img :src="item.src" contain sizes></v-img>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src

import banner from "../../assets/apparel.jpg";
import banner2 from "../../assets/apparel2.jpg";
export default {
  data() {
    return {
      items: [
        {
          src: banner2
        },
        {
          src: banner
        }
      ]
    };
  }
};
</script>
