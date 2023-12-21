const BaseLayout = () =>
    import ("@/components/BaseLayout");

export const routes = [{
        path: '/:basePath/:urlFragment/',
        component: BaseLayout,
        children: [{
                name: 'home',
                path: '/',
                component: () =>
                    import ("@/components/home/Home"),
            },
            {
                name: 'payment',
                path: 'payment',
                component: () =>
                    import ("@/components/paymentInfo/PaymentInfo"),
            },
            {
                name: 'default-payment',
                path: 'default-payment',
                component: () =>
                    import ("@/components/defaultPayment/DefaultPayment"),
            },
            {
                name: 'fixed-payment',
                path: ':payAmount/:hash',
                component: () =>
                    import ("@/components/fixedPayment/FixedPayment"),
            },
            {
                name: 'payment-success',
                path: 'payment-success',
                component: () =>
                    import ("@/components/PaymentSuccess"),
            }
        ]
    },
    {
        path: '*',
        name: 'error',
        component: () =>
            import ("@/components/ErrorPage")
    }
];