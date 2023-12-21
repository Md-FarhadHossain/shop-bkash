const paymentModule = {
    state: {
        paymentInfo: {},
        paymentBody: {
            basePath: "",
            urlFragment: "",
            trxType: "AMOUNT",
            amount: "",
            price: "",
            packageName: "",
            quantity: 0,
            customerName: "",
            customerPhoneNumber: "",
            customerEmail: "",
            customerReference: "",
            customerAddress: "",
            customerMembershipId: "",
            customerBillMonth: "",
            references: [],
        },
    },
    getters: {
        getPaymentInfo(state) {
            return state.paymentInfo;
        },
        getPaymentBody(state) {
            return state.paymentBody;
        },
    },
    mutations: {
        clearPaymentBody(state) {
            state.paymentBody = Object.assign(state.paymentBody, {
                trxType: "AMOUNT",
                amount: "",
                price: "",
                packageName: "",
                quantity: 0,
                customerName: "",
                customerPhoneNumber: "",
                customerEmail: "",
                customerReference: "",
                customerAddress: "",
                customerMembershipId: "",
                customerBillMonth: "",
                references: [],
                urlFragment: "paymentlink",
                sourceType: null,
            });
        },
        setSuccessfulPaymentInfo(state, payload) {
            state.paymentInfo = payload;
        },
        setPaymentBody(state, {
            key,
            value
        }) {
            state.paymentBody[key] = value;
        },
    },
};
export default paymentModule;