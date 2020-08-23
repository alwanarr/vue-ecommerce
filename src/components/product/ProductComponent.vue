<template>
  <v-container>
    <h1>Featured</h1>
    <v-row>
      <template v-for="product in getProducts">
        <v-col md="4" lg="4" :key="product.id">
          <v-card outlined hover @click="redirectTo('card', product.slug)">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              lazy-src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
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
                style="margin-top: -80px;"
                @click.stop="redirectTo('cart', product)"
              >
                <v-icon>{{shoppingCart}}</v-icon>
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
                  style="margin-left: -5px !important"
                ></v-rating>
                <div class="grey--text ml-4">{{ product.rating }}</div>
              </v-row>
              <h3 class="green--text my-2">Rp.{{ product.price }}</h3>

              <div class="subtitle-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                enim sint vitae, ad laudantium reprehenderit?
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import { mdiShopping } from "@mdi/js";

export default {
  computed: {
    ...mapGetters("product", ["getProducts"])
  },
  data() {
    return {
      shoppingCart: mdiShopping
    };
  },
  methods: {
    redirectTo(type, data) {
      if (type == "cart") {
        this.$store.dispatch("product/addToCart", data);
      } else if (type == "card") {
        this.$router.push({ name: "product.detail", params: { id: data } });
      }
    }
  }
};
</script>

<style></style>
