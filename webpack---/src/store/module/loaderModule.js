const loaderModule = {
    state: {
        show: false
    },
    getters: {
        getLoaderState(state) {
            return state.show;
        }
    },
    mutations: {
        setLoaderState(state, payload) {
            state.show = payload;
        }
    },
    actions: {
        showFullPageLoader(context, payload) {
            context.commit("setLoaderState", payload);
        }
    }
};
export default loaderModule;