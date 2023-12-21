import Loader from "./components/common/Loader";
import LoaderStore from "./LoaderStore";

export default {
    install(Vue, options) {
        Vue.component('Loader', Loader);
        Vue.mixin({
            data() {
                return {
                    loaderStore: LoaderStore
                }
            }
        });

        Object.defineProperty(Vue.prototype, '$loader', {
            get() {
                return this.$root.loaderStore;
            }
        });
    },
    showLoader() {
        LoaderStore.displayLoader(true);
    },

    hideLoader() {
        LoaderStore.displayLoader(false);
    }
}