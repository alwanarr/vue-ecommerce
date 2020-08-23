<template>
  <div>
    <v-toolbar color="pink darken-1">
      <v-toolbar-title
        class="white--text ml-4"
        @click="redirectToHome"
        style="cursor: pointer !important;"
      >Shopikk</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" persistent max-width="890">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon dark :elevation="0" v-bind="attrs" v-on="on" style="position: relative">
            <v-icon>{{ cart }}</v-icon>
            <span
              style="position: absolute; top: -3px; right: -3px; width: 20px"
              class="teal rounded-xl"
            >{{getCartCount}}</span>
          </v-btn>
        </template>
        <v-card>
          <v-card-title class="headline">Shopping Cart</v-card-title>
          <v-card-text>
            <template v-for="cart in getCart">
              <v-row align="center" :key="cart.id">
                <v-col md="3" lg="3" xs="3" sm="3">{{cart.name}}</v-col>
                <v-col md="3" lg="3" xs="3" sm="3">{{cart.price}}</v-col>
                <v-col md="2" lg="2" xs="2" sm="2">{{cart.quantity}}</v-col>
                <v-col md="3" lg="3" xs="3" sm="3">{{cart.totalPrice}}</v-col>
                <v-col md="1" lg="1" xs="1" sm="1">
                  <v-btn small depressed color="error" fab @click="remove(cart.id)">
                    <v-icon>{{deleteIcon}}</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </template>
            <v-container v-if="getCart.length">
              <v-row>
                <v-col md="8">
                  <v-row justify="end">
                    <h4 class="mr-2">TOTAl</h4>
                  </v-row>
                </v-col>
                <v-col md="3" class="pink white--text">
                  <v-row justify="start">
                    <span class="ml-3">{{total}}</span>
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
            <v-container v-if="getCart.length == 0">
              <h1>Lets Shopping</h1>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>
            <v-btn color="green darken-1" text @click="dialog = false">Agree</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- <router-link
        v-for="(item, index) in items"
        :key="index"
        :to="item.to"
        style="text-decoration: none;"
      >
        <v-btn
          depressed
          large
          :color="item.mandatory ? 'teal lighten-1' : 'pink darken-1'"
          class="white--text"
        >
          <span>{{ item.title }}</span>
        </v-btn>
      </router-link>-->
    </v-toolbar>

    <loading :active.sync="$root.loading" :can-cancel="true" :is-full-page="fullPage"></loading>
    <router-view v-if="$root.loading == false" />
  </div>
</template>

<script>
import {
  mdiHeart,
  mdiDotsVertical,
  mdiMagnify,
  mdiCart,
  mdiDelete
} from "@mdi/js";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import { mapState, mapGetters } from "vuex";

export default {
  components: {
    Loading
  },
  computed: {
    ...mapState(["isLoading"]),
    ...mapGetters("product", ["getCart", "getCartCount"]),
    total() {
      return this.getCart.reduce((curr, accu) => {
        return accu.totalPrice + curr;
      }, 0);
    }
  },
  data() {
    return {
      heart: mdiHeart,
      magnify: mdiMagnify,
      dot: mdiDotsVertical,
      cart: mdiCart,
      deleteIcon: mdiDelete,
      items: [
        {
          title: "home",
          to: "/",
          icon: "mdi-home"
        },
        {
          title: "About",
          to: "/about",
          icon: "mdi-about"
        },
        {
          title: "New",
          to: "/new",
          icon: "mdi-about"
        }
      ],
      fullPage: true,
      dialog: false
    };
  },
  methods: {
    redirectToHome() {
      this.$router.push("/");
    },
    remove(id) {
      this.$store.dispatch("product/removeCart", id);
    }
  }
};
</script>

<style></style>
