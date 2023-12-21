(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-bc3e2fc8"], {
        8739: function(e, t, n) {
            e.exports = n.p + "img/bkash-logo.be423de5.png"
        },
        a4b2: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", {
                        staticClass: "container payment-page"
                    }, [a("v-dialog", {
                        attrs: {
                            width: "unset"
                        },
                        model: {
                            value: e.zoomImage,
                            callback: function(t) {
                                e.zoomImage = t
                            },
                            expression: "zoomImage"
                        }
                    }, [a("v-card", {
                        staticStyle: {
                            padding: "20px"
                        }
                    }, [a("v-card-title", {
                        staticStyle: {
                            display: "flex",
                            "justify-content": "flex-end"
                        }
                    }, [a("v-icon", {
                        on: {
                            click: function(t) {
                                e.zoomImage = !1
                            }
                        }
                    }, [e._v("mdi-close")])], 1), a("v-card-content", {
                        staticStyle: {
                            "justify-content": "center",
                            display: "flex"
                        }
                    }, [a("img", {
                        staticClass: "zoom-image",
                        attrs: {
                            src: this.pageInfo.image
                        }
                    })])], 1)], 1), a("v-card", {
                        staticClass: "card-container"
                    }, [a("img", {
                        staticClass: "bkash-logo",
                        attrs: {
                            src: n("8739")
                        }
                    }), a("div", {
                        staticClass: "payment-link-info"
                    }, [this.pageInfo.image ? a("div", {
                        staticClass: "image-box",
                        staticStyle: {
                            "margin-right": "16px"
                        }
                    }, [a("img", {
                        staticClass: "product-image",
                        attrs: {
                            src: this.pageInfo.image,
                            alt: "Logo"
                        },
                        on: {
                            load: e.onImageLoad,
                            click: function(t) {
                                e.zoomImage = !0
                            }
                        }
                    })]) : e._e(), a("div", [a("div", {
                        staticClass: "merchant-info"
                    }, [a("img", {
                        staticClass: "merchant-logo",
                        attrs: {
                            src: this.pageInfo.merchantLogo,
                            alt: "Logo"
                        }
                    }), a("span", {
                        staticClass: "merchant-name"
                    }, [e._v(e._s(this.pageInfo.merchantName))])]), this.pageInfo.productName ? a("div", {
                        staticClass: "description-block"
                    }, [a("span", {
                        staticClass: "product-name"
                    }, [e._v(e._s(this.pageInfo.productName))])]) : e._e(), this.pageInfo.description ? a("div", {
                        class: e.computedClassName
                    }, [a("span", {
                        staticClass: "description-text",
                        class: {
                            hide: e.readMore
                        }
                    }, [e._v(e._s(this.pageInfo.description))]), a("span", {
                        staticClass: "see-more",
                        on: {
                            click: function(t) {
                                e.readMore = !e.readMore
                            }
                        }
                    }, [e._v(" " + e._s(e.selectButtonNameBasedOnDescriptionLength()) + " ")])]) : e._e(), a("div", {
                        staticStyle: {
                            "text-align": "left"
                        }
                    }, [a("span", {
                        staticClass: "product-price"
                    }, [e._v("৳" + e._s(this.pageInfo.amount))])])])]), a("v-divider", {
                        staticStyle: {
                            "margin-bottom": "32px"
                        }
                    }), a("v-form", {
                        ref: "form",
                        on: {
                            submit: function(e) {
                                e.preventDefault()
                            }
                        },
                        model: {
                            value: e.isValid,
                            callback: function(t) {
                                e.isValid = t
                            },
                            expression: "isValid"
                        }
                    }, [e._l(e.mandatoryField, (function(t, n) {
                        return a("div", {
                            key: n
                        }, [a("span", {
                            staticClass: "input-field-title"
                        }, [e._v(e._s(e.capitalizeLabel(t)) + " "), a("span", {
                            staticClass: "asterisk"
                        }, [e._v("*")])]), a("v-text-field", {
                            staticClass: "inputNumber",
                            staticStyle: {
                                "margin-top": "10px",
                                "margin-bottom": "-5px"
                            },
                            attrs: {
                                dense: "",
                                required: "",
                                type: "text",
                                height: "48",
                                rules: e.typeRules.mandatory[t.fieldType],
                                outlined: ""
                            },
                            model: {
                                value: t.value,
                                callback: function(n) {
                                    e.$set(t, "value", n)
                                },
                                expression: "reference.value"
                            }
                        })], 1)
                    })), e._l(e.optionalField, (function(t, n) {
                        return a("div", {
                            key: n + 10
                        }, [a("span", {
                            staticClass: "input-field-title"
                        }, [e._v(e._s(e.capitalizeLabel(t) + " (Optional)"))]), a("v-text-field", {
                            staticClass: "inputNumber",
                            staticStyle: {
                                "margin-top": "10px",
                                "margin-bottom": "-5px"
                            },
                            attrs: {
                                placeholder: "Enter Value",
                                dense: "",
                                type: "text",
                                rules: e.typeRules.optional[t.fieldType],
                                height: "48",
                                outlined: ""
                            },
                            model: {
                                value: t.value,
                                callback: function(n) {
                                    e.$set(t, "value", n)
                                },
                                expression: "reference.value"
                            }
                        })], 1)
                    })), a("span", {
                        staticClass: "input-field-title"
                    }, [e._v("Payment Reference (Optional)")]), a("v-text-field", {
                        staticClass: "inputNumber",
                        staticStyle: {
                            "margin-top": "10px",
                            "margin-bottom": "-20px"
                        },
                        attrs: {
                            placeholder: "Enter Payment Reference",
                            dense: "",
                            required: "",
                            oninput: "if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);",
                            type: "text",
                            maxlength: "65",
                            name: "customerReference",
                            height: "48px",
                            outlined: ""
                        },
                        on: {
                            input: e.handleCustomerInput
                        }
                    }), a("v-checkbox", {
                        staticStyle: {
                            margin: "0px"
                        },
                        attrs: {
                            color: "#ffcb15",
                            ripple: !1,
                            "false-value": !1,
                            "true-value": !0
                        },
                        on: {
                            click: e.handleWalletAsContact
                        },
                        model: {
                            value: e.useWalletAsContact,
                            callback: function(t) {
                                e.useWalletAsContact = t
                            },
                            expression: "useWalletAsContact"
                        }
                    }, [a("span", {
                        staticClass: "use-wallet-text",
                        attrs: {
                            slot: "label"
                        },
                        slot: "label"
                    }, [e._v(" Use bKash wallet number as your contact number ")])]), e.useWalletAsContact ? e._e() : a("div", [a("span", {
                        staticClass: "input-field-title",
                        staticStyle: {
                            "margin-bottom": "8px"
                        }
                    }, [e._v("Contact Number"), a("span", {
                        staticClass: "asterisk"
                    }, [e._v("*")])]), e.useWalletAsContact ? e._e() : a("v-text-field", {
                        staticClass: "inputNumber",
                        attrs: {
                            placeholder: "Enter Contact Number",
                            type: "number",
                            height: "48px",
                            name: "customerPhoneNumber",
                            rules: [e.rules.required, e.rules.numberValidation],
                            dense: "",
                            required: "",
                            outlined: ""
                        },
                        on: {
                            input: e.handleCustomerInput
                        }
                    })], 1)], 2), a("br"), a("v-hover", {
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                var n = t.hover;
                                return [a("v-btn", {
                                    staticStyle: {
                                        "font-size": "20px",
                                        "font-weight": "500",
                                        "margin-top": "-10px",
                                        "border-radius": "8px"
                                    },
                                    attrs: {
                                        elevation: n ? 24 : 6,
                                        color: "primary",
                                        disabled: !e.isPaymentValid,
                                        height: "48px",
                                        width: "100%"
                                    },
                                    on: {
                                        click: e.confirmPayment
                                    }
                                }, [e._v(" Pay Now ")])]
                            }
                        }])
                    }), a("button", {
                        staticStyle: {
                            display: "none"
                        },
                        attrs: {
                            id: "bKash_button"
                        }
                    }), a("div", {
                        staticStyle: {
                            display: "flex",
                            "flex-direction": "column",
                            "margin-top": "25px"
                        }
                    }, [a("div", {
                        staticClass: "terms-text"
                    }, [e._v(" By proceeding further you are agreeing our "), a("a", {
                        staticStyle: {
                            color: "#e2136e"
                        },
                        on: {
                            click: e.goToTerms
                        }
                    }, [e._v("terms & conditions")])])])], 1)], 1)
                },
                i = [],
                s = (n("a4d3"), n("e01a"), n("4de4"), n("b0c0"), n("3148")),
                o = n("e239"),
                r = {
                    name: "FixedPayment",
                    components: {},
                    beforeRouteEnter: function(e, t, n) {
                        Object(o["a"])("https://scripts.pay.bka.sh/resources/js/library/jquery-3.5.1.min.js").then((function() {
                            return Object(o["a"])("https://scripts.pay.bka.sh/versions/1.2.0-beta/checkout/bKash-checkout.js")
                        })).then((function() {
                            n()
                        })).catch((function() {
                            alert("Failed to load pgw scripts"), n(!1)
                        }))
                    },
                    created: function() {
                        var e = this;
                        bKash.init({
                            paymentMode: "checkout",
                            paymentRequest: Object.assign({
                                intent: "sale"
                            }, this.paymentBody),
                            createRequest: function(t) {
                                e.$feedback.showLoading(), e.$cppClient.post("create-payment", t).then((function(t) {
                                    var n = t.data;
                                    e.$feedback.hideLoading(), n && null != n.paymentID ? (e.paymentId = n.paymentID, e.transactionId = n.transactionId, bKash.create().onSuccess(n)) : bKash.create().onError()
                                })).catch((function(t) {
                                    var n = t.response;
                                    e.$logger.loggable(n).log(), e.$feedback.showFailed(n), bKash.create().onError(), e.$gtag.exception({
                                        description: JSON.stringify(n),
                                        fatal: !1
                                    }), e.$gtag.event("Payment creation failed", {
                                        event_category: "paymentlink",
                                        event_label: JSON.stringify(n)
                                    })
                                }))
                            },
                            executeRequestOnAuthorization: function() {
                                e.$cppClient.post("execute-payment", {
                                    transactionId: e.transactionId
                                }).then((function(t) {
                                    var n = t.data;
                                    n && null != n.paymentId && e.paymentId === n.paymentId ? (e.$store.commit("setSuccessfulPaymentInfo", n), e.$router.push({
                                        name: "payment-success"
                                    }), e.$gtag.event("made fixed payment successfully", {
                                        event_category: "payment success"
                                    })) : bKash.execute().onError()
                                })).catch((function(t) {
                                    var n = t.response;
                                    e.$refs.form.reset(), e.$logger.loggable(n).log(), e.$feedback.showFailed(n), bKash.create().onError(), e.$gtag.exception({
                                        description: JSON.stringify(n),
                                        fatal: !1
                                    }), e.$gtag.event("made payment failed", {
                                        event_category: "payment failed",
                                        event_label: JSON.stringify(n)
                                    })
                                }))
                            },
                            onClose: function() {
                                console.log("bkash pgw closed")
                            }
                        })
                    },
                    watch: {
                        paymentOption: function() {
                            this.$store.commit("setPaymentBody", {
                                key: "amount",
                                value: ""
                            }), this.$store.commit("setPaymentBody", {
                                key: "price",
                                value: ""
                            }), this.$store.commit("setPaymentBody", {
                                key: "packageName",
                                value: ""
                            }), this.$store.commit("setPaymentBody", {
                                key: "trxType",
                                value: "AMOUNT"
                            })
                        }
                    },
                    computed: {
                        pageInfo: function() {
                            return this.$store.getters.getPageInfo
                        },
                        pageType: function() {
                            return this.$store.getters.getTemplateType
                        },
                        paymentBody: function() {
                            return this.$store.getters.getPaymentBody
                        },
                        termsAndConditionLink: function() {
                            return "https://www.bkash.com/bn/terms-of-use-bkash-payment"
                        },
                        isPaymentValid: function() {
                            return this.isValid
                        },
                        mandatoryField: function() {
                            return this.paymentBody.references.filter((function(e) {
                                return e.required
                            }))
                        },
                        optionalField: function() {
                            return this.paymentBody.references.filter((function(e) {
                                return !e.required
                            }))
                        },
                        computedClassName: function() {
                            return this.imageLoaded ? "description-block" : "description-block-full-width"
                        }
                    },
                    data: function() {
                        return {
                            isValid: !1,
                            zoomImage: !1,
                            readMore: !0,
                            imageLoaded: !1,
                            amount: "",
                            paymentOption: "amount",
                            useWalletAsContact: !0,
                            maxAllowedDescriptionLengthForButtonEnable: 100,
                            typeRules: {
                                mandatory: {
                                    LARGE_TEXT: [function(e) {
                                        return !!e || "Value is required"
                                    }, function(e) {
                                        return e && e.length < 250 || "Text length must be less than 250 characters"
                                    }],
                                    SMALL_TEXT: [function(e) {
                                        return !!e || "Value is required"
                                    }, function(e) {
                                        return e && e.length < 40 || "Text length must be less than 40 characters"
                                    }],
                                    EMAIL: [function(e) {
                                        return !!e || "Value is required"
                                    }, function(e) {
                                        return e && s["EMAIL_RULE"].test(e) || "Please provide a valid email address"
                                    }, function(e) {
                                        return e && e.length < 100 || "Text length must be less than 100 characters"
                                    }],
                                    NUMBER: [function(e) {
                                        return !!e || "Value is required"
                                    }, function(e) {
                                        return e && s["PHONE_NUMBER_RULE"].test(e) || "Please provide a valid mobile number"
                                    }]
                                },
                                optional: {
                                    LARGE_TEXT: [function(e) {
                                        return e.length < 250 || "Text length must be less than 250 characters"
                                    }],
                                    SMALL_TEXT: [function(e) {
                                        return e.length < 40 || "Text length must be less than 40 characters"
                                    }],
                                    EMAIL: [function(e) {
                                        return !e || s["EMAIL_RULE"].test(e) || "Please provide a valid email address"
                                    }, function(e) {
                                        return e.length < 100 || "Text length must be less than 100 characters"
                                    }],
                                    NUMBER: [function(e) {
                                        return !e || s["PHONE_NUMBER_RULE"].test(e) || "Please provide a valid mobile number"
                                    }]
                                }
                            },
                            rules: {
                                required: function(e) {
                                    return !!e || "Value is required"
                                },
                                maxAmount: function(e) {
                                    return e && e.length < 10 || "Amount must be less than 10 digits"
                                },
                                minAmount: function(e) {
                                    return e > 0 || "Amount must be greater than 0"
                                },
                                numberValidation: function(e) {
                                    return e && s["PHONE_NUMBER_RULE"].test(e) || "Please provide a valid mobile number"
                                },
                                emailValidation: function(e) {
                                    return e && s["EMAIL_RULE"].test(e) || "Please provide a valid email address"
                                }
                            },
                            paymentId: "",
                            transactionId: ""
                        }
                    },
                    methods: {
                        confirmPayment: function() {
                            this.paymentBody.amount && (bKash.reconfigure({
                                paymentRequest: Object.assign({
                                    intent: "sale"
                                }, this.paymentBody)
                            }), $("#bKash_button").click(), console.log("payment clicked ", this.paymentBody.amount), this.$gtag.event("confirm fixed payment - button clicked", {
                                event_category: "CTA - Button",
                                value: 1
                            }))
                        },
                        handleCustomerInput: function(e) {
                            var t = event.target.name;
                            this.$store.commit("setPaymentBody", {
                                key: t,
                                value: e
                            })
                        },
                        handleWalletAsContact: function() {
                            this.$store.commit("setPaymentBody", {
                                key: "useWalletAsContact",
                                value: this.useWalletAsContact
                            })
                        },
                        goToTerms: function() {
                            window.open(this.termsAndConditionLink)
                        },
                        capitalizeLabel: function(e) {
                            return e.fieldName[0].toUpperCase() + e.fieldName.substring(1)
                        },
                        selectButtonNameBasedOnDescriptionLength: function() {
                            return this.pageInfo.description.length <= this.maxAllowedDescriptionLengthForButtonEnable ? "" : this.readMore ? "See more" : "See less"
                        },
                        onImageLoad: function() {
                            this.imageLoaded = !0
                        }
                    },
                    mounted: function() {
                        this.$gtag.event("landed on payment link entry page", {
                            event_category: "visit"
                        }), this.handleWalletAsContact()
                    },
                    destroyed: function() {
                        this.$store.commit("setPaymentBody", {
                            key: "amount",
                            value: 0
                        }), this.$store.commit("setPaymentBody", {
                            key: "price",
                            value: 0
                        })
                    }
                },
                c = r,
                l = (n("e708"), n("2877")),
                u = Object(l["a"])(c, a, i, !1, null, "557292d5", null);
            t["default"] = u.exports
        },
        a6a4: function(e, t, n) {},
        e239: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            n("d3b7");

            function a(e) {
                return new Promise((function(t, n) {
                    var a = document.createElement("script");
                    a.setAttribute("src", e), document.head.appendChild(a), a.addEventListener("load", (function() {
                        return t()
                    })), a.addEventListener("error", (function() {
                        return n()
                    })), a.addEventListener("abort", (function() {
                        return n()
                    }))
                }))
            }
        },
        e708: function(e, t, n) {
            "use strict";
            var a = n("a6a4"),
                i = n.n(a);
            i.a
        }
    }
]);
//# sourceMappingURL=chunk-bc3e2fc8.e8d3c7953e94e493fd8b.js.map