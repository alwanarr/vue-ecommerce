<template>
  <v-container>
    <template v-for="product in getDetailProduct">
      <!-- <h2>{{ getDetailProduct }}</h2> -->
      <v-row :key="product.id" justify="center">
        <v-col lg="6" md="6" sm="12" xs="12">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            contain
            sizes
            max-width="600px"
          ></v-img>
        </v-col>
        <v-col lg="6" md="6" sm="12" xs="12">
          <v-card flat :elevation="0" class="px-3" outlined>
            <v-card-title>
              <h1>{{ product.name }}</h1>
            </v-card-title>
            <v-card-subtitle class="mt-2">
              <v-rating
                :value="product.rating"
                color="amber"
                dense
                half-increments
                readonly
                size="25"
              ></v-rating>
            </v-card-subtitle>
            <v-card-text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam ratione quis, pariatur assumenda officiis
              eveniet?
            </v-card-text>
            <v-card-actions>
              <v-btn medium dark color="pink darken-1">Beli</v-btn>
              <v-btn medium depressed @click="addToCart(product)">
                <v-icon>{{ shoppingIcon }}</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import { mdiShopping } from "@mdi/js";

export default {
  computed: {
    slug() {
      return this.$route.params.id;
    },
    getProducts() {
      return this.$store.state.product.allProducts;
    },
    ...mapGetters("product", ["getAllProducts"]),

    getDetailProduct() {
      return this.getProducts.filter(product => product.slug == this.slug);
    }
  },
  data() {
    return {
      shoppingIcon: mdiShopping
    };
  },
  methods: {
    addToCart(data) {
      this.$emit("feedbackShoppingCart", true);

      this.$store.dispatch("product/addToCart", data);
    }
  }
};
</script>

<style></style>
