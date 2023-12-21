import Vue from 'vue';
import Vuex from 'vuex';
import paymentModule from "@/store/module/payment";
import pageManagementModule from "@/store/module/pageManagement";
import loaderModule from "@/store/module/loaderModule";

Vue.use(Vuex)

const modules = {
    paymentModule,
    pageManagementModule,
    loaderModule
}
export default new Vuex.Store({
    modules: modules
});