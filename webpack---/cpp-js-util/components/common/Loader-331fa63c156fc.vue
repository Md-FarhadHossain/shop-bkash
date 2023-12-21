<template>
  <vue-element-loading :active="loaderStore.showLoader" :is-full-screen="true" background-color="rgba(0, 0, 0, 0.37)">
    <div class="bkash__loader">
      <img :src="bkashLoader" alt="" class="loader__bird">
    </div>

  </vue-element-loading>

</template>

<script>
import VueElementLoading from "vue-element-loading";
import BkashLoader from "./img/bkash-loader.svg";

export default {
  name: "Loader",
  components: {
    VueElementLoading
  },
  data() {
    return {
      bkashLoader: BkashLoader
    }
  },
}
</script>

<style scoped>
.loader__bird {
  width: 116px;
}

.bkash__loader {
  width: 116px;
  height: 116px;
  border-radius: 5px;
  background-color: #fff;
}

@media screen and (min-width: 360px) {
  .bkash__loader {
    margin-top: -30px;
  }
}

@media screen and (min-width: 1001px) {
  .bkash__loader {
    margin-top: unset;
  }
}

@media screen and (min-width: 1400px) {
  .bkash__loader {
    margin-top: -80px;
  }
}

</style>