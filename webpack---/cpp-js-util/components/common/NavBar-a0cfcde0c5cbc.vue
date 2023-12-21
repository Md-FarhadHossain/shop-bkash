<template>
  <v-card class="header-container">
    <div class="container item-container">
      <div class="header-left-div">
        <img alt="img" class="earning-bkash-logo" src="./img/earning-bkash-logo.png">
      </div>

      <div v-if="translation" class="drop-down-div">
        <v-menu
            bottom
            transition="slide-y-transition">
          <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on" style="display: flex; flex-direction: row;">
              <span class="language-text">
                {{ lang }}
              </span>
              <img alt="img" class="drop-down-arrow" src="./img/drop-down-white-icon.svg">
            </div>
          </template>
          <v-list>
            <v-list-item
                v-for="(item, i) in languages"
                :key="i">
              <v-list-item-title class="drop-down-item" @click="changeLang(item)">
                {{ item }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>

  </v-card>
</template>

<script>
export default {
  name: "HeaderContainer",
  props: ["translation"],
  data() {
    return {
      languages: ['en', 'bn'],
      lang: 'bn'
    }
  },
  methods: {
    changeLang(language) {
      this.lang = language;
      this.$i18n.locale = language
    }
  },
}
</script>

<style lang="scss" scoped>
$LaptopW: 1440px;
$tabLS: 900px;
$mobileW: 750px;
.header-container {
  background-color: #e2136e;
  width: 100%;
  border-radius: 0%;
  display: flex;
  justify-content: center;

  .item-container {
    display: flex;
    max-width: 94%;
    height: 86px;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
    @media (max-width: $mobileW) {
      height: 46px;
    }

    .header-left-div {
      display: flex;
      flex-direction: row;
      align-items: center;


      .earning-bkash-logo {
        width: 116.7px;
        height: 53.6px;
        @media (max-width: $mobileW) {
          width: 60px;
          height: 30px;
        }
      }

      .dashboard-text {
        font-size: 23px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: normal;
        text-align: left;
        color: #FFFFFF;
        margin-left: 34px;
        cursor: pointer;
        @media (max-width: $mobileW) {
          font-size: 12px;
          margin-left: 5px;
        }
      }
    }

    .drop-down-div {
      display: flex;
      flex-direction: row;
      align-items: center;

      .language-text {
        text-transform: capitalize !important;
        font-size: 18px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1;
        letter-spacing: normal;
        text-align: left;
        color: #FFFFFF;
        margin-top: 5px;
      }

      .drop-down-arrow {
        height: 18px;
        width: 20px;
        margin: 5px;
        cursor: pointer;
      }
    }
  }
}

.drop-down-item {
  cursor: pointer;
  text-transform: capitalize !important;
}
</style>
