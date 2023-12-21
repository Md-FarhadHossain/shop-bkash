<template>
  <div class="container payment-page">
    <v-dialog v-model="zoomImage" width="unset">
      <v-card style="padding: 20px">
        <v-card-title style="display: flex; justify-content: flex-end">
          <v-icon @click="zoomImage = false">mdi-close</v-icon>
        </v-card-title>
        <v-card-content style="justify-content: center; display: flex;">
          <img class="zoom-image" :src="this.pageInfo.image" />
        </v-card-content>
      </v-card>
    </v-dialog>

    <v-card class="card-container">
      <img src="../../assets/img/bkash-logo.png" class="bkash-logo" />
      <div class="payment-link-info">
        <div
          v-if="this.pageInfo.image"
          style="margin-right: 16px"
          class="image-box"
        >
          <img
            class="product-image"
            :src="this.pageInfo.image"
            @load="onImageLoad"
            alt="Logo"
            @click="zoomImage = true"
          />
        </div>
        <div>
          <div class="merchant-info">
            <img
              class="merchant-logo"
              :src="this.pageInfo.merchantLogo"
              alt="Logo"
            />
            <span class="merchant-name">{{ this.pageInfo.merchantName }}</span>
          </div>
          <div v-if="this.pageInfo.productName" class="description-block">
            <span class="product-name">{{ this.pageInfo.productName }}</span>
          </div>
          <div v-if="this.pageInfo.description" :class="computedClassName">
            <span class="description-text" :class="{ hide: readMore }">{{
              this.pageInfo.description
            }}</span>
            <span class="see-more" @click="readMore = !readMore">
              {{ selectButtonNameBasedOnDescriptionLength() }}
            </span>
          </div>
          <div style="text-align: left;">
            <!-- <span style="font-size: 15px; color: #707070;">Amount</span>
            <br> -->
            <span class="product-price">৳{{ this.pageInfo.amount }}</span>
          </div>
        </div>
      </div>
      <v-divider style="margin-bottom: 32px;"></v-divider>
      <v-form ref="form" v-model="isValid" v-on:submit.prevent>
        <div v-for="(reference, index) in mandatoryField" :key="index">
          <span class="input-field-title"
            >{{ capitalizeLabel(reference) }}
            <span class="asterisk">*</span></span
          >
          <v-text-field
            v-model="reference.value"
            style="margin-top: 10px; margin-bottom: -5px;"
            dense
            required
            type="text"
            height="48"
            class="inputNumber"
            :rules="typeRules.mandatory[reference.fieldType]"
            outlined
          >
          </v-text-field>
        </div>
        <div v-for="(reference, index) in optionalField" :key="index + 10">
          <span class="input-field-title">{{
            capitalizeLabel(reference) + " (Optional)"
          }}</span>
          <v-text-field
            v-model="reference.value"
            style="margin-top: 10px; margin-bottom: -5px;"
            placeholder="Enter Value"
            dense
            type="text"
            :rules="typeRules.optional[reference.fieldType]"
            height="48"
            class="inputNumber"
            outlined
          >
          </v-text-field>
        </div>
        <span class="input-field-title">Payment Reference (Optional)</span>
        <v-text-field
          style="margin-top: 10px; margin-bottom: -20px;"
          placeholder="Enter Payment Reference"
          dense
          required
          oninput="if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          type="text"
          maxlength="65"
          name="customerReference"
          height="48px"
          @input="handleCustomerInput"
          class="inputNumber"
          outlined
        >
        </v-text-field>

        <v-checkbox
          color="#ffcb15"
          :ripple="false"
          v-model="useWalletAsContact"
          @click="handleWalletAsContact"
          :false-value="false"
          :true-value="true"
          style="margin: 0px"
        >
          <span slot="label" class="use-wallet-text">
            Use bKash wallet number as your contact number
          </span>
        </v-checkbox>
        <div v-if="!useWalletAsContact">
          <span style="margin-bottom: 8px;" class="input-field-title"
            >Contact Number<span class="asterisk">*</span></span
          >
          <v-text-field
            v-if="!useWalletAsContact"
            placeholder="Enter Contact Number"
            @input="handleCustomerInput"
            type="number"
            class="inputNumber"
            height="48px"
            name="customerPhoneNumber"
            :rules="[rules.required, rules.numberValidation]"
            dense
            required
            outlined
          >
          </v-text-field>
        </div>
      </v-form>
      <br />
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-btn
            :elevation="hover ? 24 : 6"
            color="primary"
            :disabled="!isPaymentValid"
            height="48px"
            width="100%"
            style="font-size: 20px; font-weight: normal; margin-top: -10px; border-radius: 8px; font-weight: 500;"
            @click="confirmPayment"
          >
            Pay Now
          </v-btn>
        </template>
      </v-hover>
      <button id="bKash_button" style="display: none"></button>
      <div style="display: flex; flex-direction: column; margin-top: 25px">
        <div class="terms-text">
          By proceeding further you are agreeing our
          <a @click="goToTerms" style="color: #e2136e">terms & conditions</a>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import { PHONE_NUMBER_RULE, EMAIL_RULE } from "cpp-js-util/CppUtil";
import { loadScript } from "@/util/ExternalFileLoader";

export default {
  name: "FixedPayment",
  components: {},
  beforeRouteEnter(to, from, next) {
    loadScript(process.env.VUE_APP_PGW_JQUERY_SCRIPT)
      .then(() => {
        return loadScript(process.env.VUE_APP_PGW_CHECKOUT_SCRIPT);
      })
      .then(() => {
        next();
      })
      .catch(() => {
        alert("Failed to load pgw scripts");
        next(false);
      });
  },
  created() {
    // eslint-disable-next-line no-undef
    bKash.init({
      paymentMode: "checkout",
      paymentRequest: Object.assign({ intent: "sale" }, this.paymentBody),
      // eslint-disable-next-line no-unused-vars
      createRequest: (request) => {
        this.$feedback.showLoading();

        this.$cppClient
          .post("create-payment", request)
          .then(({ data }) => {
            this.$feedback.hideLoading();
            if (data && data.paymentID != null) {
              this.paymentId = data.paymentID;
              this.transactionId = data.transactionId;
              // eslint-disable-next-line no-undef
              bKash.create().onSuccess(data);
            } else {
              // eslint-disable-next-line no-undef
              bKash.create().onError();
            }
          })
          .catch(({ response }) => {
            this.$logger.loggable(response).log();
            this.$feedback.showFailed(response);
            // eslint-disable-next-line no-undef
            bKash.create().onError();

            this.$gtag.exception({
              description: JSON.stringify(response),
              fatal: false,
            });
            this.$gtag.event("Payment creation failed", {
              event_category: "paymentlink",
              event_label: JSON.stringify(response),
            });
          });
      },
      executeRequestOnAuthorization: () => {
        this.$cppClient
          .post("execute-payment", {
            transactionId: this.transactionId,
          })
          .then(({ data }) => {
            if (
              data &&
              data.paymentId != null &&
              this.paymentId === data.paymentId
            ) {
              this.$store.commit("setSuccessfulPaymentInfo", data);
              this.$router.push({ name: "payment-success" });

              this.$gtag.event("made fixed payment successfully", {
                event_category: "payment success",
              });
            } else {
              // eslint-disable-next-line no-undef
              bKash.execute().onError();
            }
          })
          .catch(({ response }) => {
            this.$refs.form.reset();
            this.$logger.loggable(response).log();
            this.$feedback.showFailed(response);
            // eslint-disable-next-line no-undef
            bKash.create().onError();

            this.$gtag.exception({
              description: JSON.stringify(response),
              fatal: false,
            });
            this.$gtag.event("made payment failed", {
              event_category: "payment failed",
              event_label: JSON.stringify(response),
            });
          });
      },
      onClose: () => {
        console.log("bkash pgw closed");
      },
    });
  },
  watch: {
    paymentOption() {
      this.$store.commit("setPaymentBody", {
        key: "amount",
        value: "",
      });
      this.$store.commit("setPaymentBody", {
        key: "price",
        value: "",
      });
      this.$store.commit("setPaymentBody", {
        key: "packageName",
        value: "",
      });
      this.$store.commit("setPaymentBody", {
        key: "trxType",
        value: "AMOUNT",
      });
    },
  },
  computed: {
    pageInfo() {
      return this.$store.getters.getPageInfo;
    },
    pageType() {
      return this.$store.getters.getTemplateType;
    },
    paymentBody() {
      return this.$store.getters.getPaymentBody;
    },
    termsAndConditionLink() {
      return process.env.VUE_APP_TERMS_AND_CONDITION_URL;
    },
    isPaymentValid() {
      return this.isValid;
    },
    mandatoryField() {
      return this.paymentBody.references.filter(
        (reference) => reference.required
      );
    },
    optionalField() {
      return this.paymentBody.references.filter(
        (reference) => !reference.required
      );
    },
    computedClassName() {
      return this.imageLoaded? "description-block" : "description-block-full-width";
    }
  },
  data() {
    return {
      isValid: false,
      zoomImage: false,
      readMore: true,
      imageLoaded: false,
      amount: "",
      paymentOption: "amount",
      useWalletAsContact: true,
      maxAllowedDescriptionLengthForButtonEnable: 100,
      typeRules: {
        mandatory: {
          LARGE_TEXT: [
            (v) => !!v || "Value is required",
            (v) =>
              (v && v.length < 250) ||
              "Text length must be less than 250 characters",
          ],
          SMALL_TEXT: [
            (v) => !!v || "Value is required",
            (v) =>
              (v && v.length < 40) ||
              "Text length must be less than 40 characters",
          ],
          EMAIL: [
            (v) => !!v || "Value is required",
            (v) =>
              (v && EMAIL_RULE.test(v)) ||
              "Please provide a valid email address",
            (v) =>
              (v && v.length < 100) ||
              "Text length must be less than 100 characters",
          ],
          NUMBER: [
            (v) => !!v || "Value is required",
            (v) =>
              (v && PHONE_NUMBER_RULE.test(v)) ||
              "Please provide a valid mobile number",
          ],
        },
        optional: {
          LARGE_TEXT: [
            (v) =>
              v.length < 250 || "Text length must be less than 250 characters",
          ],
          SMALL_TEXT: [
            (v) =>
              v.length < 40 || "Text length must be less than 40 characters",
          ],
          EMAIL: [
            (v) =>
              !v ||
              EMAIL_RULE.test(v) ||
              "Please provide a valid email address",
            (v) =>
              v.length < 100 || "Text length must be less than 100 characters",
          ],
          NUMBER: [
            (v) =>
              !v ||
              PHONE_NUMBER_RULE.test(v) ||
              "Please provide a valid mobile number",
          ],
        },
      },
      rules: {
        required: (v) => !!v || "Value is required",
        maxAmount: (v) =>
          (v && v.length < 10) || "Amount must be less than 10 digits",
        minAmount: (v) => v > 0 || "Amount must be greater than 0",
        numberValidation: (v) =>
          (v && PHONE_NUMBER_RULE.test(v)) ||
          "Please provide a valid mobile number",
        emailValidation: (v) =>
          (v && EMAIL_RULE.test(v)) || "Please provide a valid email address",
      },
      paymentId: "",
      transactionId: "",
    };
  },
  methods: {
    confirmPayment() {
      if (!this.paymentBody.amount) return;

      // eslint-disable-next-line no-undef
      bKash.reconfigure({
        paymentRequest: Object.assign({ intent: "sale" }, this.paymentBody),
      });
      // eslint-disable-next-line no-undef
      $("#bKash_button").click();
      console.log("payment clicked ", this.paymentBody.amount);
      this.$gtag.event("confirm fixed payment - button clicked", {
        event_category: "CTA - Button",
        value: 1,
      });
    },
    handleCustomerInput(val) {
      let key = event.target.name;
      this.$store.commit("setPaymentBody", { key: key, value: val });
    },
    handleWalletAsContact() {
      this.$store.commit("setPaymentBody", {
        key: "useWalletAsContact",
        value: this.useWalletAsContact,
      });
    },
    goToTerms() {
      window.open(this.termsAndConditionLink);
    },
    capitalizeLabel(reference) {
      return (
        reference.fieldName[0].toUpperCase() + reference.fieldName.substring(1)
      );
    },
    selectButtonNameBasedOnDescriptionLength() {
      return this.pageInfo.description.length <=
        this.maxAllowedDescriptionLengthForButtonEnable
        ? ""
        : this.readMore
        ? "See more"
        : "See less";
    },
    onImageLoad() {
      this.imageLoaded = true;
    }
  },
  mounted() {
    this.$gtag.event("landed on payment link entry page", {
      event_category: "visit",
    });
    this.handleWalletAsContact();
  },
  destroyed() {
    this.$store.commit("setPaymentBody", { key: "amount", value: 0 });
    this.$store.commit("setPaymentBody", { key: "price", value: 0 });
  },
};
</script>

<style scoped lang="scss">
$LaptopW: 1440px;
$tabLS: 900px;
$mobileW: 750px;

.payment-page {
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-left: 16px;
  padding-right: 16px;
  background-color: #f5f5f5;
}

.dialog-box {
  width: auto !important;
  max-width: auto !important;
}

.card-container {
  padding: 40px;
  min-width: 606px;

  @media (max-width: $tabLS) {
    padding: 12px;
  }
}

.bkash-logo {
  width: 98px;
  margin-bottom: 32px;

  @media (max-width: $tabLS) {
    display: none;
  }
}

.payment-link-info {
  display: flex;
  margin-bottom: 22px;
}

.product-image {
  max-width: 164px;
  max-height: 164px;
  cursor: pointer;
}

.description-block-common {
  text-align: left;
  margin-bottom: 3px;
}


.description-block {
  @extend .description-block-common;
  max-width: 338px;
}


.description-block-full-width {
  @extend .description-block-common;
  max-width : 526px;
}


.product-name {
  color: #464646;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (max-width: $tabLS) {
    font-size: 16px;
  }
}

.hide {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.merchant-logo {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}

.merchant-name {
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  color: #464646;
  margin-left: 5px;
}

.merchant-info {
  text-align: left;
  margin-bottom: 20px;
  display: flex;
  justify-content: left;
  align-items: center;
}

.input-field-title {
  justify-content: flex-start;
  display: flex;
  color: #777;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;

  @media (max-width: $tabLS) {
    font-size: 14px;
  }
}

.image-box {
  border-radius: 4px;
  border: 1px #9a9a9a;
  background: #f3f3f3;
  display: flex;
  width: 170px;
  height: 170px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7px;
  cursor: pointer;

  @media (max-width: $tabLS) {
    height: 164px;
    width: 100%;
    margin-bottom: 15px;
  }
}

.zoom-image {
  max-height: 725px;
  max-width: 725px;
  object-fit: contain;

  @media (max-width: $tabLS) {
    max-height: 80%;
    max-width: 80%;
  }
}

.terms-text {
  color: #464646;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px; /* 143.75% */
  text-align: left;

  @media (max-width: $tabLS) {
    font-size: 12px;
  }
}

.use-wallet-text {
  font-size: 13px;
}

.asterisk {
  color: #e2136e;
}

.description-text {
  font-size: 21px;

  @media (max-width: $tabLS) {
    font-size: 14px;
  }
}

.see-more {
  font-size: 16px;
  color: #e2136e;
  cursor: pointer;
  display: block;
  margin-top: 5px;

  @media (max-width: $tabLS) {
    font-size: 14px;
  }
}

.product-price {
  font-size: 24px;
  color: #e2136e;
  font-weight: 500;

  @media (max-width: $tabLS) {
    font-size: 18px;
  }
}
@media screen and (max-width: 768px) {
  .payment-page {
    margin-top: 0;
  }

  .card-container {
    min-width: 100%;
  }

  .payment-link-info {
    display: block;
  }
}

@media screen and (max-width: 535px) {
  .payment-page {
    margin-top: 0;
    width: 100%;
  }

  .use-wallet-text {
    font-size: 11px;
  }
}
</style>
