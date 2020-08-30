<template>
  <v-container :fluid="true" ref="wrapper">
    <carousel-component />
    <v-row style="position: fixed; bottom: 0; right: 40px; z-index: 10">
      <v-alert type="success" v-show="feedbackMessage">Add products to shopping carts</v-alert>
    </v-row>
    <bestseller-component @feedbackShoppingCart="feedback" />
    <product-component @feedbackShoppingCart="feedback" />
    <div></div>
    <!-- <footer-component /> -->
  </v-container>
</template>

<script>
// @ is an alias to /src

import { mdiAccount, mdiAccountAlert } from "@mdi/js";
import Carousel from "../components/product/CarouselComponent.vue";
import BestSeller from "../components/product/BestSellerComponent.vue";
import Product from "../components/product/ProductComponent.vue";
// import Footer from "../components/product/FooterComponent.vue";
// import Vue from "vue";
export default {
  name: "Home",
  components: {
    "carousel-component": Carousel,
    "bestseller-component": BestSeller,
    "product-component": Product
    // "footer-component": Footer
  },
  data() {
    return {
      icons: [
        {
          icon: mdiAccount
        },
        {
          icon: mdiAccountAlert
        }
      ],
      feedbackMessage: false
    };
  },
  mounted() {
    this.$refs.wrapper.classList.remove("container");
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      this.$store.dispatch("product/getProducts");
    },
    feedback() {
      this.feedbackMessage = true;
      let self = this;
      setTimeout(function() {
        self.feedbackMessage = false;
      }, 3000);
    }
  }
};
</script>
