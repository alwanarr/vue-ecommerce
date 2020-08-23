<template>
  <v-container :fluid="true" ref="wrapper">
    <carousel-component />
    <bestseller-component />
    <product-component />
    <h1 class="mt-5">Halo world</h1>
  </v-container>
</template>

<script>
// @ is an alias to /src

import { mdiAccount, mdiAccountAlert } from "@mdi/js";
import Carousel from "../components/product/CarouselComponent.vue";
import BestSeller from "../components/product/BestSellerComponent.vue";
import Product from "../components/product/ProductComponent.vue";
export default {
  name: "Home",
  components: {
    "carousel-component": Carousel,
    "bestseller-component": BestSeller,
    "product-component": Product,
  },
  data() {
    return {
      icons: [
        {
          icon: mdiAccount,
        },
        {
          icon: mdiAccountAlert,
        },
      ],
    };
  },
  mounted() {
    // this.$refs.wrapper.classList.remove("container");
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      this.$store.dispatch("product/getProducts");
    },
  },
};
</script>
