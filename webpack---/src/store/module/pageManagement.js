const pageManagementModule = {
    state: {
        pageInfo: {},
        templateType: '',
        currentSetupStep: '',
        customPage: {},
    },
    getters: {
        getPageInfoPropertyValue: (state) => (key) => {
            return state.pageInfo[key];
        },
        getPageInfo(state) {
            return state.pageInfo;
        },
        getTemplateType(state) {
            return state.templateType;
        },
        getCurrentSetupStep(state) {
            return state.currentSetupStep;
        },
        getCustomPage(state) {
            return state.customPage;
        },
    },
    mutations: {
        setPageInfo(state, payload) {
            state.pageInfo = payload;
        },
        setTemplateType(state, payload) {
            state.templateType = payload;
        },
        setCurrentSetupStep(state, payload) {
            state.currentSetupStep = payload;
        },
        setCustomPage(state, payload) {
            state.customPage = payload;
            if (state.customPage.products && state.customPage.products.filter(val => val.isPopular).length > 0)
                state.customPage.productCategories = [{
                    name: "Popular",
                    productCategoryId: "1000"
                }, ...state.customPage.productCategories];
        },
    }

};
export default pageManagementModule;