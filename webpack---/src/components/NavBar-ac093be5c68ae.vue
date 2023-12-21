<template>
  <v-card class="header-container">
    <div class="container item-container">
      <img alt="img" class="bkash-logo" src="@/assets/img/bkash-logo.png" />
    </div>
  </v-card>
</template>

<script>
export default {
  name: "NavBar",
  computed: {
    pageInfo() {
      return this.$store.getters.getPageInfo;
    },
  },
  methods: {
    downloadBkash() {
      if (navigator.userAgent.match(/iPhone|Mac|iPod|iPad/)) {
        window.open(process.env.VUE_APP_BKASH_APP_DOWNLOAD_APPSTORE_URL);
      } else window.open(process.env.VUE_APP_BKASH_APP_DOWNLOAD_URL);
    },
    getHomePage() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style scoped lang="scss">
$LaptopW: 1440px;
$tabLS: 900px;
$mobileW: 750px;

.header-container {
  background-color: white;
  width: 100%;
  border-radius: 0%;
  display: none;
  justify-content: center;

  @media (max-width: $tabLS) {
    display: flex;
  }

  .item-container {
    display: flex;
    max-width: 94%;
    height: 86px;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    margin: 0;
    @media (max-width: $mobileW) {
      height: 46px;
    }
  }
}

@media only screen and (max-width: 662px) {
  .bkash-logo {
    height: 30px;
    margin-right: 10px;
    margin-left: 1px;
  }
}
</style>
