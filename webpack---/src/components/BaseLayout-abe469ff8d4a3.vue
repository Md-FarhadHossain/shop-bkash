<template>
  <div :style="{ display: showDisplay }">
    <nav-bar
      v-if="isCustomPage"
      :google-play-store-link="googlePlayStoreLink"
      :apple-store-link="appleAppStoreLink"
      :merchant-logo="merchantLogo"
      :merchant-name="merchantName"
      @homeClick="goToHome"
      :translation="false"
    ></nav-bar>
    <NavBar2 v-if="isFixedPayment"></NavBar2>
    <v-app style="background-color: #f5f5f5;">
      <router-view v-if="mounted"></router-view>
    </v-app>
    <Footer
      v-if="isCustomPage"
      :terms-and-condition-link="termsAndConditionLink"
      :merchant-registration-link="merchantRegistrationLink"
    />
  </div>
</template>

<script>
import NavBar from "cpp-js-util/components/common/NavBar";
import NavBar2 from "./NavBar.vue";

export default {
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      let isDefault = false;
      let requestBody = {
        basePath: vm.$route.params.basePath,
        urlFragment: vm.$route.params.urlFragment,
        payAmount: vm.$route.params.payAmount,
        hash: vm.$route.params.hash,
      };
      next();
      vm.$feedback.showLoading();
      if (
        requestBody.urlFragment === "pay" &&
        requestBody.payAmount &&
        requestBody.hash
      ) {
        let urlPath =
          requestBody.urlFragment +
          "/" +
          requestBody.payAmount +
          "/" +
          requestBody.hash;
        vm.showDisplay = "";
        vm.$store.commit("setPaymentBody", {
          key: "basePath",
          value: requestBody.basePath,
        });
        vm.$store.commit("setPaymentBody", {
          key: "urlFragment",
          value: urlPath,
        });

        requestBody.urlPath =
          requestBody.basePath +
          "/" +
          requestBody.urlFragment +
          "/" +
          requestBody.payAmount +
          "/" +
          requestBody.hash;
        vm.$cppClient
          .post("/payment-link/get", requestBody)
          .then(({ data }) => {
            let template = data?.type;
            vm.$store.commit("setTemplateType", template);
            vm.$store.commit("setPageInfo", data);
            vm.$store.commit("setPaymentBody", {
              key: "amount",
              value: data.amount,
            });
            vm.$store.commit("setPaymentBody", {
              key: "price",
              value: data.amount,
            });
            vm.$store.commit("setPaymentBody", {
              key: "sourceType",
              value: "payment-link",
            });
            if (template === "fixed") {
              vm.$store.commit("setPaymentBody", {
                key: "references",
                value: data?.references ? data.references : [],
              });
            }
            next();
            vm.mounted = true;
            vm.$feedback.hideLoading();
          })
          .catch(() => {
            vm.$feedback.hideLoading();
            vm.$router.push({ name: "error" });
          })
          .finally(() => {
            if (!isDefault) {
              vm.$feedback.hideLoading();
            }
          });
      } else {
        vm.$cppClient
          .post("/page/get", requestBody)
          .then(({ data }) => {
            //we will get the "template" value from the
            let template = data?.template;
            vm.$store.commit("setCustomPage", data);
            vm.$store.commit("setTemplateType", template);
            vm.showDisplay = "";
            vm.$store.commit("setPageInfo", data);
            vm.$store.commit("setPaymentBody", {
              key: "basePath",
              value: requestBody.basePath,
            });
            vm.$store.commit("setPaymentBody", {
              key: "urlFragment",
              value: requestBody.urlFragment,
            });
            document.title =
              template === "payment"
                ? vm.$route.params.basePath + " | Payment Link"
                : vm.$route.params.urlFragment ||
                  vm.$route.params.basePath + " | " + document.title;

            if (template === "payment") {
              isDefault = true;
              if (to.name === "default-payment") {
                // If reloading on payment page
                vm.mounted = true;
              } else {
                // If started with homepage then force redirect to payment page.
                vm.$feedback.showLoading();
                let currentRoute = vm.$route.path;
                if (currentRoute) {
                  let forwardingRoute =
                    currentRoute.slice(-1) === "/"
                      ? currentRoute + "default-payment"
                      : currentRoute + "/default-payment";
                  vm.$router.replace(forwardingRoute, () => {
                    vm.mounted = true;
                  });
                } else {
                  this.$feedback.showAutoErrorMessage(
                    "পেমেন্ট লিঙ্কটি সঠিকভাবে কাজ করছে না"
                  );
                }
              }
              vm.$feedback.hideLoading();
            } else {
              next();
              vm.mounted = true;
            }
          })
          .catch(() => {
            // you can use () parameterized like (response) to get error
            vm.$feedback.hideLoading();
            vm.$router.push({ name: "error" });
          })
          .finally(() => {
            if (!isDefault) {
              vm.$feedback.hideLoading();
            }
          });
      }
    });
  },
  components: {
    NavBar,
    NavBar2,
  },
  computed: {
    pageInfo() {
      return this.$store.getters.getPageInfo;
    },
    merchantLogo() {
      return this.pageInfo.merchantLogo;
    },
    merchantName() {
      return this.pageInfo.merchantName;
    },
    termsAndConditionLink() {
      return process.env.VUE_APP_TERMS_AND_CONDITION_URL;
    },
    merchantRegistrationLink() {
      return process.env.VUE_APP_MERCHANT_REGISTRATION_URL;
    },
    googlePlayStoreLink() {
      return process.env.VUE_APP_BKASH_APP_PLAY_STORE_URL;
    },
    appleAppStoreLink() {
      return process.env.VUE_APP_BKASH_APP_APPLE_STORE_URL;
    },
    isCustomPage() {
      return this.pageInfo.template === "home";
    },
    isFixedPayment() {
      return this.pageInfo.type === "fixed";
    },
  },
  data() {
    return {
      mounted: false,
      showDisplay: "none",
    };
  },
  methods: {
    goToHome() {
      if (this.$store.getters.getTemplateType === "home") {
        this.$router.push({ name: "home" });
      }
    },
  },
};
</script>
