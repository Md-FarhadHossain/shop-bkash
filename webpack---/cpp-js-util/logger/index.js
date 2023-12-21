import {
    Logger
} from "./Logger";
const lodash = require('lodash');

export default {
    install(Vue, options) {
        let {
            enableLogging
        } = options;

        Vue.prototype.$logger = new Logger(enableLogging);
        Vue.prototype.$lodash = lodash;
    }
}