import Vue from 'vue'
import App from './App.vue'
import Vuetify from "vuetify";
import 'vuetify/dist/vuetify.min.css';
import {
    routes
} from './routes/index';
import VueRouter from "vue-router";
import store from './store';
import messages from "@/util/langDictionary";
import Feedback from "cpp-js-util/Feedback";
import CppClient from "@/util/CppClient";
import Logger from "cpp-js-util/logger";
import VueI18n from 'vue-i18n';
import OtpInput from "@bachdgvn/vue-otp-input";
import VueElementLoading from 'vue-element-loading'
import VueGtag from "vue-gtag";
import Loader from "cpp-js-util/Loader";
import FingerprintJS from '@fingerprintjs/fingerprintjs';
Vue.use(Loader);


Vue.component("v-otp-input", OtpInput);
Vue.component('VueElementLoading', VueElementLoading);
Vue.use(VueI18n);
Vue.use(Logger, {
    enableLogging: process.env.VUE_APP_LOGGER_STATE === 'true'
})
Vue.config.productionTip = false

Vue.prototype.$cppClient = new CppClient(
    process.env.VUE_APP_CUSTOMER_PORTAL_BG_URL, localStorage
);
const vuetify = new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#e2136e',
                secondary: '#b0bec5',
                accent: '#8c9eff',
                error: '#b71c1c',
            },
        },
    },
});
Vue.prototype.$feedback = Feedback;

Vue.use(VueRouter);
Vue.use(Vuetify);

const fpPromise = FingerprintJS.load();

(async () => {
    const fp = await fpPromise
    const result = await fp.get()
    const visitorId = localStorage.getItem("visitorId");
    if (!visitorId) localStorage.setItem("visitorId", result.visitorId + new Date().getTime());
    console.log("guestId", localStorage.getItem("visitorId"));
})()

const router = new VueRouter({
    routes,
    mode: 'history'
});

// using here as it requires router
Vue.use(VueGtag, {
    config: {
        id: process.env.VUE_APP_ANALYTICS_TAG_ID
    },
    appName: 'CPP Customer Portal'
}, router);

const currentLang = localStorage.getItem("lang");
const i18n = new VueI18n({
    locale: currentLang ? currentLang : 'bn',
    fallbackLocale: 'en',
    messages
});

new Vue({
    router,
    store,
    vuetify,
    i18n,
    render: h => h(App),
}).$mount('#app')