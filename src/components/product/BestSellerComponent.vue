<template>
  <v-container
    :fluid="$vuetify.breakpoint.mobile ? true : false"
    ref="removeContainer"
  >
    <v-row>
      <v-col md="12" lg="12" sm="12" xs="12">
        <h1 class="d-flex justify-center">Best Seller</h1>
        <v-sheet class="mx-auto" elevation="0" max-width="100%">
          <v-slide-group
            v-model="model"
            class="pa-4"
            mandatory
            :show-arrows="$vuetify.breakpoint.mobile ? true : false"
          >
            <v-slide-item
              v-for="product in getBestSellers"
              :key="product.id"
              v-slot:default="{ active }"
            >
              <v-col md="4" lg="4" :key="product.id" v-if="loadingSk">
                <v-skeleton-loader
                  class="mx-auto"
                  max-width="900"
                  type="card"
                  :key="product.name"
                ></v-skeleton-loader>
              </v-col>
              <v-card
                v-else
                class="ma-4"
                width="300"
                hover
                outlined
                v-on:click="redirectTo('card', product.slug)"
              >
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                  height="200px"
                ></v-img>

                <v-card-title>
                  <h4>{{ product.name }}</h4>
                  <v-btn
                    color="pink"
                    fab
                    dark
                    medium
                    absolute
                    center
                    right
                    style="margin-top: -80px; "
                    v-on:click.stop="redirectTo('cart', product)"
                  >
                    <v-icon>{{ shoppingCart }}</v-icon>
                  </v-btn>
                </v-card-title>

                <v-card-text>
                  <v-row align="start" class="mx-0">
                    <v-rating
                      :value="product.rating"
                      color="amber"
                      dense
                      half-increments
                      readonly
                      size="20"
                    ></v-rating>
                    <div class="grey--text ml-4">{{ product.rating }}</div>
                  </v-row>
                  <h3 class="green--text my-2">Rp.{{ product.price }}</h3>

                  <div class="subtitle-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum enim sint vitae, ad laudantium reprehenderit?
                  </div>
                </v-card-text>

                <v-row class="fill-height" align="center" justify="center">
                  <v-scale-transition>
                    <v-icon
                      v-if="active"
                      color="white"
                      size="48"
                      v-text="'mdi-close-circle-outline'"
                    ></v-icon>
                  </v-scale-transition>
                </v-row>
              </v-card>
              <!-- </v-hover> -->
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import { mdiShopping } from "@mdi/js";

export default {
  computed: {
    ...mapGetters("product", ["getBestSellers", "getProducts"])
  },
  data: () => ({
    model: null,
    shoppingCart: mdiShopping,
    loadingSk: false
  }),
  mounted() {
    if (this.$vuetify.breakpoint.mobile) {
      this.$refs.removeContainer.classList.remove("container");
    }
  },
  created() {
    this.loading();
  },
  methods: {
    redirectTo(type, data) {
      if (type == "cart") {
        //send into parent component
        this.$emit("feedbackShoppingCart", true);

        this.$store.dispatch("product/addToCart", data);
      } else if (type == "card") {
        this.$router.push({ name: "product.detail", params: { id: data } });
      }
    },
    loading() {
      this.loadingSk = true;
      let self = this;
      //tunggu sampai 4 detik
      setTimeout(function() {
        self.loadingSk = false;
      }, 4000);
    }
  }
};
</script>
