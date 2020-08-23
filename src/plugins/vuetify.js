import Vue from "vue";
// import Vuetify from "vuetify/lib";
// import "@mdi/font/css/materialdesignicons.css";
import Vuetify, {
  VAppBar,
  VAppBarNavIcon,
  VMenu,
  VBtn,
  VIcon,
  VRating,
  VToolbar,
  VContainer,
  VApp,
  VMain,
  VToolbarTitle,
  VSpacer,
  VFlex,
  VRow,
  VCol,
  VHover,
  //List
  VList,
  VListItem,
  VListItemTitle,

  //carousel
  VCarousel,
  VCarouselItem,

  //image
  VImg,

  //bestSeller
  VSheet,
  VSlideGroup,
  VSlideItem,
  VScaleTransition,

  //Card
  VCard,
  VCardActions,
  VCardTitle,
  VCardText,
  VCardSubtitle,

  //floating button
  VSpeedDial,

  //VDialog
  VDialog,

  //badges
  VBadge,

  //alert
  VAlert,
} from "vuetify/lib";
Vue.use(Vuetify, {
  components: {
    VApp,
    VAppBar,
    VAppBarNavIcon,
    VMenu,
    VMain,

    VCard,
    VCardActions,
    VCardTitle,
    VCardText,
    VCardSubtitle,

    VRating,
    VToolbar,
    VBtn,
    VContainer,
    VIcon,
    VSpacer,
    VToolbarTitle,
    VFlex,
    VRow,
    VCol,
    VHover,
    //list
    VList,
    VListItem,
    VListItemTitle,

    //carousel
    VCarousel,
    VCarouselItem,

    //image
    VImg,

    //bestSeller
    VSheet,
    VSlideGroup,
    VSlideItem,
    VScaleTransition,

    //floating button
    VSpeedDial,

    VDialog,
    VBadge,
    VAlert,
  },
});

const opts = {
  icons: {
    iconfont: "mdiSvg",
  },
};

export default new Vuetify(opts);
