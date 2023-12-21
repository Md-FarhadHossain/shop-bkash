(function(e) {
    function t(t) {
        for (var a, r, i = t[0], c = t[1], u = t[2], l = 0, d = []; l < i.length; l++) r = i[l], Object.prototype.hasOwnProperty.call(o, r) && o[r] && d.push(o[r][0]), o[r] = 0;
        for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (e[a] = c[a]);
        f && f(t);
        while (d.length) d.shift()();
        return s.push.apply(s, u || []), n()
    }

    function n() {
        for (var e, t = 0; t < s.length; t++) {
            for (var n = s[t], a = !0, r = 1; r < n.length; r++) {
                var i = n[r];
                0 !== o[i] && (a = !1)
            }
            a && (s.splice(t--, 1), e = c(c.s = n[0]))
        }
        return e
    }
    var a = {},
        r = {
            index: 0
        },
        o = {
            index: 0
        },
        s = [];

    function i(e) {
        return c.p + "" + ({}[e] || e) + ".e8d3c7953e94e493fd8b.js"
    }

    function c(t) {
        if (a[t]) return a[t].exports;
        var n = a[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, c), n.l = !0, n.exports
    }
    c.e = function(e) {
        var t = [],
            n = {
                "chunk-2c5219ce": 1,
                "chunk-3295c7cc": 1,
                "chunk-5e82d468": 1,
                "chunk-987618d4": 1,
                "chunk-6073062f": 1,
                "chunk-6a1dd466": 1,
                "chunk-bc3e2fc8": 1
            };
        r[e] ? t.push(r[e]) : 0 !== r[e] && n[e] && t.push(r[e] = new Promise((function(t, n) {
            for (var a = "css/" + ({}[e] || e) + "." + {
                    "chunk-2c5219ce": "f803e2ba",
                    "chunk-3295c7cc": "2a354e6f",
                    "chunk-5ffb7c5a": "31d6cfe0",
                    "chunk-5e82d468": "54c8da8f",
                    "chunk-987618d4": "1651ec7f",
                    "chunk-6073062f": "425882e2",
                    "chunk-6a1dd466": "9fe1a031",
                    "chunk-bc3e2fc8": "8c78f7e2"
                }[e] + ".css", o = c.p + a, s = document.getElementsByTagName("link"), i = 0; i < s.length; i++) {
                var u = s[i],
                    l = u.getAttribute("data-href") || u.getAttribute("href");
                if ("stylesheet" === u.rel && (l === a || l === o)) return t()
            }
            var d = document.getElementsByTagName("style");
            for (i = 0; i < d.length; i++) {
                u = d[i], l = u.getAttribute("data-href");
                if (l === a || l === o) return t()
            }
            var f = document.createElement("link");
            f.rel = "stylesheet", f.type = "text/css", f.onload = t, f.onerror = function(t) {
                var a = t && t.target && t.target.src || o,
                    s = new Error("Loading CSS chunk " + e + " failed.\n(" + a + ")");
                s.code = "CSS_CHUNK_LOAD_FAILED", s.request = a, delete r[e], f.parentNode.removeChild(f), n(s)
            }, f.href = o;
            var m = document.getElementsByTagName("head")[0];
            m.appendChild(f)
        })).then((function() {
            r[e] = 0
        })));
        var a = o[e];
        if (0 !== a)
            if (a) t.push(a[2]);
            else {
                var s = new Promise((function(t, n) {
                    a = o[e] = [t, n]
                }));
                t.push(a[2] = s);
                var u, l = document.createElement("script");
                l.charset = "utf-8", l.timeout = 120, c.nc && l.setAttribute("nonce", c.nc), l.src = i(e);
                var d = new Error;
                u = function(t) {
                    l.onerror = l.onload = null, clearTimeout(f);
                    var n = o[e];
                    if (0 !== n) {
                        if (n) {
                            var a = t && ("load" === t.type ? "missing" : t.type),
                                r = t && t.target && t.target.src;
                            d.message = "Loading chunk " + e + " failed.\n(" + a + ": " + r + ")", d.name = "ChunkLoadError", d.type = a, d.request = r, n[1](d)
                        }
                        o[e] = void 0
                    }
                };
                var f = setTimeout((function() {
                    u({
                        type: "timeout",
                        target: l
                    })
                }), 12e4);
                l.onerror = l.onload = u, document.head.appendChild(l)
            }
        return Promise.all(t)
    }, c.m = e, c.c = a, c.d = function(e, t, n) {
        c.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, c.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, c.t = function(e, t) {
        if (1 & t && (e = c(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (c.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var a in e) c.d(n, a, function(t) {
                return e[t]
            }.bind(null, a));
        return n
    }, c.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return c.d(t, "a", t), t
    }, c.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, c.p = "/", c.oe = function(e) {
        throw console.error(e), e
    };
    var u = window["webpackJsonp"] = window["webpackJsonp"] || [],
        l = u.push.bind(u);
    u.push = t, u = u.slice();
    for (var d = 0; d < u.length; d++) t(u[d]);
    var f = l;
    s.push([0, "chunk-vendors"]), n()
})({
    0: function(e, t, n) {
        e.exports = n("56d7")
    },
    "1e89": function(e, t, n) {
        var a = {
            "./af": "5348",
            "./af.js": "5348",
            "./ar": "21f5",
            "./ar-dz": "e635",
            "./ar-dz.js": "e635",
            "./ar-kw": "09fd",
            "./ar-kw.js": "09fd",
            "./ar-ly": "6d31",
            "./ar-ly.js": "6d31",
            "./ar-ma": "ebd0",
            "./ar-ma.js": "ebd0",
            "./ar-sa": "8578",
            "./ar-sa.js": "8578",
            "./ar-tn": "22aa",
            "./ar-tn.js": "22aa",
            "./ar.js": "21f5",
            "./az": "c6aa",
            "./az.js": "c6aa",
            "./be": "7959",
            "./be.js": "7959",
            "./bg": "a90c",
            "./bg.js": "a90c",
            "./bm": "417f",
            "./bm.js": "417f",
            "./bn": "5e8b",
            "./bn-bd": "9af4",
            "./bn-bd.js": "9af4",
            "./bn.js": "5e8b",
            "./bo": "dd9a",
            "./bo.js": "dd9a",
            "./br": "60dc",
            "./br.js": "60dc",
            "./bs": "2b0a",
            "./bs.js": "2b0a",
            "./ca": "85a3",
            "./ca.js": "85a3",
            "./cs": "a4df",
            "./cs.js": "a4df",
            "./cv": "4c28",
            "./cv.js": "4c28",
            "./cy": "2e34",
            "./cy.js": "2e34",
            "./da": "c65c",
            "./da.js": "c65c",
            "./de": "5e5c",
            "./de-at": "4c1a",
            "./de-at.js": "4c1a",
            "./de-ch": "789e",
            "./de-ch.js": "789e",
            "./de.js": "5e5c",
            "./dv": "5a6e",
            "./dv.js": "5a6e",
            "./el": "fbdb",
            "./el.js": "fbdb",
            "./en-au": "a14a",
            "./en-au.js": "a14a",
            "./en-ca": "56cb",
            "./en-ca.js": "56cb",
            "./en-gb": "51a7",
            "./en-gb.js": "51a7",
            "./en-ie": "cb07",
            "./en-ie.js": "cb07",
            "./en-il": "98aa",
            "./en-il.js": "98aa",
            "./en-in": "1f5e",
            "./en-in.js": "1f5e",
            "./en-nz": "1787",
            "./en-nz.js": "1787",
            "./en-sg": "8f8e",
            "./en-sg.js": "8f8e",
            "./eo": "1a3d",
            "./eo.js": "1a3d",
            "./es": "c545",
            "./es-do": "aa87",
            "./es-do.js": "aa87",
            "./es-mx": "07b9",
            "./es-mx.js": "07b9",
            "./es-us": "9137",
            "./es-us.js": "9137",
            "./es.js": "c545",
            "./et": "8fca",
            "./et.js": "8fca",
            "./eu": "bf84",
            "./eu.js": "bf84",
            "./fa": "f853",
            "./fa.js": "f853",
            "./fi": "21f0",
            "./fi.js": "21f0",
            "./fil": "194e",
            "./fil.js": "194e",
            "./fo": "58d3",
            "./fo.js": "58d3",
            "./fr": "45e4",
            "./fr-ca": "126e",
            "./fr-ca.js": "126e",
            "./fr-ch": "e2dc",
            "./fr-ch.js": "e2dc",
            "./fr.js": "45e4",
            "./fy": "5236",
            "./fy.js": "5236",
            "./ga": "61c0",
            "./ga.js": "61c0",
            "./gd": "062e",
            "./gd.js": "062e",
            "./gl": "f95c",
            "./gl.js": "f95c",
            "./gom-deva": "9584",
            "./gom-deva.js": "9584",
            "./gom-latn": "aa39",
            "./gom-latn.js": "aa39",
            "./gu": "dd15",
            "./gu.js": "dd15",
            "./he": "7199",
            "./he.js": "7199",
            "./hi": "3006",
            "./hi.js": "3006",
            "./hr": "6b32",
            "./hr.js": "6b32",
            "./hu": "b311",
            "./hu.js": "b311",
            "./hy-am": "2213",
            "./hy-am.js": "2213",
            "./id": "6246",
            "./id.js": "6246",
            "./is": "3518",
            "./is.js": "3518",
            "./it": "dd92",
            "./it-ch": "0415",
            "./it-ch.js": "0415",
            "./it.js": "dd92",
            "./ja": "8b76",
            "./ja.js": "8b76",
            "./jv": "bfe8",
            "./jv.js": "bfe8",
            "./ka": "bd4f",
            "./ka.js": "bd4f",
            "./kk": "9cf4",
            "./kk.js": "9cf4",
            "./km": "9811",
            "./km.js": "9811",
            "./kn": "d5e1",
            "./kn.js": "d5e1",
            "./ko": "110f",
            "./ko.js": "110f",
            "./ku": "14a0",
            "./ku.js": "14a0",
            "./ky": "316c",
            "./ky.js": "316c",
            "./lb": "12ed",
            "./lb.js": "12ed",
            "./lo": "9638",
            "./lo.js": "9638",
            "./lt": "d55d",
            "./lt.js": "d55d",
            "./lv": "c4cc",
            "./lv.js": "c4cc",
            "./me": "d400",
            "./me.js": "d400",
            "./mi": "481a",
            "./mi.js": "481a",
            "./mk": "e2d6",
            "./mk.js": "e2d6",
            "./ml": "600a",
            "./ml.js": "600a",
            "./mn": "d9b1",
            "./mn.js": "d9b1",
            "./mr": "ee4e",
            "./mr.js": "ee4e",
            "./ms": "71f2",
            "./ms-my": "107e",
            "./ms-my.js": "107e",
            "./ms.js": "71f2",
            "./mt": "dd9d",
            "./mt.js": "dd9d",
            "./my": "433e",
            "./my.js": "433e",
            "./nb": "4bc7",
            "./nb.js": "4bc7",
            "./ne": "ba85",
            "./ne.js": "ba85",
            "./nl": "e120",
            "./nl-be": "865e",
            "./nl-be.js": "865e",
            "./nl.js": "e120",
            "./nn": "ea15",
            "./nn.js": "ea15",
            "./oc-lnc": "bb99",
            "./oc-lnc.js": "bb99",
            "./pa-in": "2059",
            "./pa-in.js": "2059",
            "./pl": "6e84",
            "./pl.js": "6e84",
            "./pt": "694a",
            "./pt-br": "f1ff",
            "./pt-br.js": "f1ff",
            "./pt.js": "694a",
            "./ro": "4c80",
            "./ro.js": "4c80",
            "./ru": "0139",
            "./ru.js": "0139",
            "./sd": "7a38",
            "./sd.js": "7a38",
            "./se": "d285",
            "./se.js": "d285",
            "./si": "4cc0",
            "./si.js": "4cc0",
            "./sk": "830a",
            "./sk.js": "830a",
            "./sl": "6641",
            "./sl.js": "6641",
            "./sq": "0d4a",
            "./sq.js": "0d4a",
            "./sr": "6d94",
            "./sr-cyrl": "92ee",
            "./sr-cyrl.js": "92ee",
            "./sr.js": "6d94",
            "./ss": "e81b",
            "./ss.js": "e81b",
            "./sv": "3121",
            "./sv.js": "3121",
            "./sw": "c477",
            "./sw.js": "c477",
            "./ta": "c6d9",
            "./ta.js": "c6d9",
            "./te": "7ac2",
            "./te.js": "7ac2",
            "./tet": "cfca",
            "./tet.js": "cfca",
            "./tg": "65f2",
            "./tg.js": "65f2",
            "./th": "7f59",
            "./th.js": "7f59",
            "./tk": "dd6c",
            "./tk.js": "dd6c",
            "./tl-ph": "0f5e",
            "./tl-ph.js": "0f5e",
            "./tlh": "8371",
            "./tlh.js": "8371",
            "./tr": "210b",
            "./tr.js": "210b",
            "./tzl": "065e",
            "./tzl.js": "065e",
            "./tzm": "9ed3",
            "./tzm-latn": "7dbe",
            "./tzm-latn.js": "7dbe",
            "./tzm.js": "9ed3",
            "./ug-cn": "ded9",
            "./ug-cn.js": "ded9",
            "./uk": "7e55",
            "./uk.js": "7e55",
            "./ur": "1405",
            "./ur.js": "1405",
            "./uz": "901b",
            "./uz-latn": "e3c6",
            "./uz-latn.js": "e3c6",
            "./uz.js": "901b",
            "./vi": "d152",
            "./vi.js": "d152",
            "./x-pseudo": "d073",
            "./x-pseudo.js": "d073",
            "./yo": "778f",
            "./yo.js": "778f",
            "./zh-cn": "5b10",
            "./zh-cn.js": "5b10",
            "./zh-hk": "2700",
            "./zh-hk.js": "2700",
            "./zh-mo": "a8ba",
            "./zh-mo.js": "a8ba",
            "./zh-tw": "7fc3",
            "./zh-tw.js": "7fc3"
        };

        function r(e) {
            var t = o(e);
            return n(t)
        }

        function o(e) {
            if (!n.o(a, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return a[e]
        }
        r.keys = function() {
            return Object.keys(a)
        }, r.resolve = o, e.exports = r, r.id = "1e89"
    },
    3148: function(e, t, n) {
        n("a15b"), n("d81d"), n("d3b7"), n("25f0"), n("2ca0"), n("96cf");
        var a = n("c973"),
            r = n("448a"),
            o = n("9fc4"),
            s = n("b4c5");
        e.exports = {
            genRanHex: function(e) {
                return r(Array(e)).map((function() {
                    return Math.floor(16 * Math.random()).toString(16)
                })).join("")
            },
            TRACE_ID_HEADER: "X-B3-TraceId",
            SPAN_ID_HEADER: "X-B3-SpanId",
            CLIENT_IP_HEADER: "X-User-Ip-Address",
            getReportFileName: function() {
                return "TransactionReport-" + o().format("DD-MM-yyyy") + ".pdf"
            },
            getWebhookReportFileName: function(e) {
                return "wh-" + e + ".xlsx"
            },
            getReasonReportFileName: function(e) {
                return e + "-" + o().format("DD-MM-yyyy") + ".pdf"
            },
            getIdAddress: function() {
                return a(regeneratorRuntime.mark((function e() {
                    var t;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, s.get("https://api.ipify.org/?format=json").then((function(e) {
                                    var n = e.data;
                                    t = n.ip
                                })).catch((function(e) {
                                    return console.debug(e)
                                }));
                            case 2:
                                return e.abrupt("return", t);
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))()
            },
            isRemoteLogo: function(e) {
                return !!e && !(!e.startsWith("https://") && !e.startsWith("http://"))
            },
            PASSWORD_POLICY: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])(?=.{8,})/,
            EMAIL_RULE: /.+@.+\..+/,
            PHONE_NUMBER_RULE: /^(?=\d{11}$)(01)\d+/,
            URL_RULE: /^(https:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
            URL_FACEBOOK_RULES: /^(https:\/\/)(www\.)?[(facebook.com|fb.com)|(fb.com)].+$/,
            URL_BASE_PATH_RULE: /^[A-Za-z0-9]+$/,
            TRANSACTION_ID_RULE: /^[A-Z-0-9]{10}$/,
            DECIMAL_ABOVE_ZERO_RULE: /^(?=.*[1-9])\d+(?:\.\d{1,2})?$/,
            DECIMAL_ABOVE_ZERO_BELOW_ONE_MILLION_RULE: /^(?=.*[1-9])\d{1,6}(?:\.\d{1,2})?$/,
            PIN_RULE: /^\d{4,5}$/,
            DIGITS_RULE: /^\d+$/,
            DIGITS_ONLY_INPUT_RULE: /[^\d]/g,
            INTEGER_ONLY: /^[1-9]\d*$/,
            EMAIL_ADDRESS_RULE: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        }
    },
    "3c90": function(e, t, n) {},
    5193: function(e, t, n) {
        "use strict";
        var a = n("3c90"),
            r = n.n(a);
        r.a
    },
    "56d7": function(e, t, n) {
        "use strict";
        n.r(t);
        n("96cf");
        var a = n("1da1"),
            r = (n("e260"), n("e6cf"), n("cca6"), n("a79d"), n("2b0e")),
            o = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("v-app", [n("div", {
                    ref: "main_app",
                    staticClass: "root_font",
                    attrs: {
                        id: "app"
                    }
                }, [n("Loader"), n("router-view")], 1)])
            },
            s = [],
            i = {
                name: "App"
            },
            c = i,
            u = (n("5c0b"), n("2877")),
            l = Object(u["a"])(c, o, s, !1, null, null, null),
            d = l.exports,
            f = n("ce5b"),
            m = n.n(f),
            h = (n("bf40"), n("d3b7"), function() {
                return n.e("chunk-6a1dd466").then(n.bind(null, "2824"))
            }),
            p = [{
                path: "/:basePath/:urlFragment/",
                component: h,
                children: [{
                    name: "home",
                    path: "/",
                    component: function() {
                        return n.e("chunk-2c5219ce").then(n.bind(null, "ccde"))
                    }
                }, {
                    name: "payment",
                    path: "payment",
                    component: function() {
                        return Promise.all([n.e("chunk-5ffb7c5a"), n.e("chunk-5e82d468")]).then(n.bind(null, "9718"))
                    }
                }, {
                    name: "default-payment",
                    path: "default-payment",
                    component: function() {
                        return n.e("chunk-6073062f").then(n.bind(null, "ab32"))
                    }
                }, {
                    name: "fixed-payment",
                    path: ":payAmount/:hash",
                    component: function() {
                        return n.e("chunk-bc3e2fc8").then(n.bind(null, "a4b2"))
                    }
                }, {
                    name: "payment-success",
                    path: "payment-success",
                    component: function() {
                        return Promise.all([n.e("chunk-5ffb7c5a"), n.e("chunk-987618d4")]).then(n.bind(null, "b4bf"))
                    }
                }]
            }, {
                path: "*",
                name: "error",
                component: function() {
                    return n.e("chunk-3295c7cc").then(n.bind(null, "b658"))
                }
            }],
            g = n("8c4f"),
            b = n("2f62"),
            j = {
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
                        references: []
                    }
                },
                getters: {
                    getPaymentInfo: function(e) {
                        return e.paymentInfo
                    },
                    getPaymentBody: function(e) {
                        return e.paymentBody
                    }
                },
                mutations: {
                    clearPaymentBody: function(e) {
                        e.paymentBody = Object.assign(e.paymentBody, {
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
                            sourceType: null
                        })
                    },
                    setSuccessfulPaymentInfo: function(e, t) {
                        e.paymentInfo = t
                    },
                    setPaymentBody: function(e, t) {
                        var n = t.key,
                            a = t.value;
                        e.paymentBody[n] = a
                    }
                }
            },
            v = j,
            y = (n("99af"), n("4de4"), n("2909")),
            w = {
                state: {
                    pageInfo: {},
                    templateType: "",
                    currentSetupStep: "",
                    customPage: {}
                },
                getters: {
                    getPageInfoPropertyValue: function(e) {
                        return function(t) {
                            return e.pageInfo[t]
                        }
                    },
                    getPageInfo: function(e) {
                        return e.pageInfo
                    },
                    getTemplateType: function(e) {
                        return e.templateType
                    },
                    getCurrentSetupStep: function(e) {
                        return e.currentSetupStep
                    },
                    getCustomPage: function(e) {
                        return e.customPage
                    }
                },
                mutations: {
                    setPageInfo: function(e, t) {
                        e.pageInfo = t
                    },
                    setTemplateType: function(e, t) {
                        e.templateType = t
                    },
                    setCurrentSetupStep: function(e, t) {
                        e.currentSetupStep = t
                    },
                    setCustomPage: function(e, t) {
                        e.customPage = t, e.customPage.products && e.customPage.products.filter((function(e) {
                            return e.isPopular
                        })).length > 0 && (e.customPage.productCategories = [{
                            name: "Popular",
                            productCategoryId: "1000"
                        }].concat(Object(y["a"])(e.customPage.productCategories)))
                    }
                }
            },
            k = w,
            E = {
                state: {
                    show: !1
                },
                getters: {
                    getLoaderState: function(e) {
                        return e.show
                    }
                },
                mutations: {
                    setLoaderState: function(e, t) {
                        e.show = t
                    }
                },
                actions: {
                    showFullPageLoader: function(e, t) {
                        e.commit("setLoaderState", t)
                    }
                }
            },
            _ = E;
        r["default"].use(b["a"]);
        var O = {
                paymentModule: v,
                pageManagementModule: k,
                loaderModule: _
            },
            L = new b["a"].Store({
                modules: O
            }),
            x = {
                en: {
                    menu: {
                        home: "Home"
                    },
                    setup: {
                        left: {
                            title: "Welcome to bKash Online Payment",
                            sub: "Register for bKash Online Payment and accept payment easily"
                        },
                        right: {
                            title: "bKash Online Payment Registration Requirement",
                            list1: "bKash Merchant Account Number Verification",
                            list2: "Email Verification",
                            form: {
                                wallet_entry: {
                                    title: "Enter your bKash Merchant Account number"
                                }
                            }
                        },
                        coming_soon: {
                            title: "Coming soon!",
                            sub: "Registration feature to accept bKash Online Payment’ is currently under development. You will be able to register soon to accept bKash payments online. Click the link below to apply for registration right now.",
                            btn: {
                                register: "Apply for registration",
                                home: "Back to home"
                            }
                        },
                        copyright: "Copyright © bKash 2021 Limited"
                    }
                },
                bn: {
                    menu: {
                        home: "হোম"
                    },
                    setup: {
                        left: {
                            title: "বিকাশ অনলাইন পেমেন্টে আপনাকে স্বাগতম",
                            sub: "বিকাশ অনলাইন পেমেন্টের জন্য রেজিস্ট্রেশন করে পেমেন্ট গ্রহণ করুন সহজেই "
                        },
                        right: {
                            title: "বিকাশ অনলাইন পেমেন্ট রেজিস্ট্রেশন করতে যা যা প্রয়োজন",
                            list1: "বিকাশ মার্চেন্ট একাউন্ট নাম্বার ভেরিফিকেশন",
                            list2: "ই-মেইল ভেরিফিকেশন",
                            form: {
                                wallet_entry: {
                                    title: "আপনার বিকাশ মার্চেন্ট একাউন্ট নাম্বার দিন"
                                }
                            }
                        },
                        coming_soon: {
                            title: "শীঘ্রই আসছে!",
                            sub: "বর্তমানে ‘অনলাইনে বিকাশ পেমেন্ট গ্রহণের জন্য রেজিস্ট্রেশন’ ফিচারটির কাজ চলছে। খুব শীঘ্রই আপনারা অনলাইনে পেমেন্ট গ্রহণের জন্য রেজিস্ট্রেশন করতে পারবেন। এই মূহুর্তে রেজিস্ট্রেশন আবেদন করার জন্য নীচের লিংকে ক্লিক করুন।",
                            btn: {
                                register: "রেজিস্ট্রেশনের আবেদন করুন",
                                home: "হোম-এ ফিরে যান"
                            }
                        },
                        copyright: "কপিরাইট © বিকাশ ২০২১ লিমিটেড"
                    }
                }
            },
            I = x,
            C = (n("4160"), n("159b"), n("ddce")),
            T = n.n(C),
            A = n("539c"),
            R = n.n(A),
            P = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("vue-element-loading", {
                    attrs: {
                        active: e.loaderStore.showLoader,
                        "is-full-screen": !0,
                        "background-color": "rgba(0, 0, 0, 0.37)"
                    }
                }, [n("div", {
                    staticClass: "bkash__loader"
                }, [n("img", {
                    staticClass: "loader__bird",
                    attrs: {
                        src: e.bkashLoader,
                        alt: ""
                    }
                })])])
            },
            S = [],
            B = n("4f5b"),
            M = n.n(B),
            N = n("a7ba"),
            D = n.n(N),
            z = {
                name: "Loader",
                components: {
                    VueElementLoading: M.a
                },
                data: function() {
                    return {
                        bkashLoader: D.a
                    }
                }
            },
            U = z,
            $ = (n("5193"), Object(u["a"])(U, P, S, !1, null, "4084ba6c", null)),
            F = $.exports,
            H = {
                showLoader: !1,
                displayLoader: function(e) {
                    this.showLoader = e
                }
            },
            K = H,
            W = {
                install: function(e, t) {
                    e.component("Loader", F), e.mixin({
                        data: function() {
                            return {
                                loaderStore: K
                            }
                        }
                    }), Object.defineProperty(e.prototype, "$loader", {
                        get: function() {
                            return this.$root.loaderStore
                        }
                    })
                },
                showLoader: function() {
                    K.displayLoader(!0)
                },
                hideLoader: function() {
                    K.displayLoader(!1)
                }
            },
            V = T.a.mixin({
                toast: !0,
                icon: "success",
                title: "Success",
                animation: !1,
                position: "top-right",
                showConfirmButton: !1,
                allowOutsideClick: !1,
                timer: 3e3,
                timerProgressBar: !0,
                didOpen: function(e) {
                    e.addEventListener("mouseenter", T.a.stopTimer), e.addEventListener("mouseleave", T.a.resumeTimer)
                }
            }),
            q = {
                showLoading: function() {
                    W.showLoader()
                },
                hideLoading: function() {
                    W.hideLoader()
                },
                showFailed: function(e) {
                    W.hideLoader();
                    var t = R.a.get(e, "data.errorMessageEn", "Something went wrong. Please try again!"),
                        n = R.a.get(e, "data.validationErrors", []);
                    n || (n = []);
                    var a = "";
                    n.forEach((function(e) {
                        a += "<li>".concat(e.field, ": ").concat(e.errorMessageEn, "</li>")
                    }));
                    "<div>".concat(t, '</div><div class="validation-errors"><ul>').concat(a, "</ul></div>");
                    return T.a.fire({
                        titleText: "Failed!",
                        html: "<div>".concat(t, '</div><div class="validation-errors"><ul>').concat(a, "</ul></div>"),
                        allowOutsideClick: !1,
                        icon: "error"
                    })
                },
                getConfirmation: function() {
                    return T.a.fire({
                        icon: "warning",
                        iconColor: "#b3dc10",
                        titleText: "Are you sure!",
                        text: "Are you sure you want to do this?",
                        allowOutsideClick: !1,
                        reverseButtons: !0,
                        showDenyButton: !0,
                        showConfirmButton: !0,
                        confirmButtonText: "Yes"
                    }).then((function(e) {
                        var t = e.value;
                        return !!t
                    }))
                },
                getRouteLeaveConfimation: function() {
                    return T.a.fire({
                        icon: "warning",
                        iconColor: "#b3dc10",
                        titleText: "Are you sure!",
                        text: "Are you sure you want to leave",
                        allowOutsideClick: !1,
                        reverseButtons: !0,
                        showDenyButton: !0,
                        showConfirmButton: !0,
                        confirmButtonText: "Yes"
                    })
                },
                showSuccessMessage: function(e) {
                    return W.hideLoader(), T.a.fire({
                        titleText: "Successful!",
                        text: e,
                        allowOutsideClick: !1,
                        icon: "success"
                    })
                },
                showErrorMessage: function(e, t, n) {
                    return W.hideLoader(), T.a.fire({
                        icon: "error",
                        title: e,
                        text: t,
                        footer: n,
                        allowOutsideClick: !1
                    })
                },
                showAutoFailed: function(e, t) {
                    var n, a, r, o, s;
                    W.hideLoader();
                    var i = "কিছু সমস্যা হয়েছে। আবার চেষ্টা করুন!";
                    if (i = R.a.get(e, "data.errorMessageBn", null), null != i && "" !== i || (i = R.a.get(e, "data.errorMessageEn", "কিছু সমস্যা হয়েছে। আবার চেষ্টা করুন!")), "MERCHANT_ONBOARDING_COMPLETED" !== (null === e || void 0 === e || null === (n = e.data) || void 0 === n ? void 0 : n.internalCode) && "ONBOARDING_IN_PROCESS" !== (null === e || void 0 === e || null === (a = e.data) || void 0 === a ? void 0 : a.internalCode) && "MERCHANT_ONBOARDING_ABORTED" !== (null === e || void 0 === e || null === (r = e.data) || void 0 === r ? void 0 : r.internalCode) && "EMAIL_VERIFICATION_COMPLETED" !== (null === e || void 0 === e || null === (o = e.data) || void 0 === o ? void 0 : o.internalCode) && "RETRY_LIMIT_EXCEEDED" !== (null === e || void 0 === e || null === (s = e.data) || void 0 === s ? void 0 : s.internalCode)) {
                        var c = R.a.get(e, "data.validationErrors", []);
                        c || (c = []);
                        var u = "";
                        c.forEach((function(e) {
                            var t = e.errorMessageBn ? e.errorMessageBn : e.errorMessageEn;
                            u += "<li>".concat(e.field, ": ").concat(t, "</li>")
                        }));
                        var l = "<div>".concat(i, '</div><div class="validation-errors"><ul>').concat(u, "</ul></div>");
                        return T.a.fire({
                            title: "ব্যর্থ হয়েছে!",
                            html: l,
                            icon: "error",
                            confirmButtonText: "ঠিক আছে",
                            cancelButtonText: "না",
                            allowOutsideClick: !1
                        })
                    }
                    this.showAutoWarningMessage("সতর্কীকরণ", i), void 0 !== t && t()
                },
                getAutoConfirmation: function() {
                    return T.a.fire({
                        icon: "warning",
                        iconColor: "#b3dc10",
                        titleText: "আপনি কি নিশ্চিত?",
                        text: "আপনি কি নিশ্চিত যে আপনি এটি করতে চান?",
                        reverseButtons: !0,
                        showDenyButton: !0,
                        showConfirmButton: !0,
                        allowOutsideClick: !1,
                        confirmButtonText: "ঠিক আছে",
                        cancelButtonText: "না"
                    }).then((function(e) {
                        var t = e.value;
                        return !!t
                    }))
                },
                showAutoSuccessMessage: function(e) {
                    return W.hideLoader(), T.a.fire({
                        icon: "success",
                        title: "সফল!",
                        text: e,
                        confirmButtonText: "ঠিক আছে",
                        cancelButtonText: "না",
                        allowOutsideClick: !1
                    })
                },
                showSubtleErrorToast: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3e3;
                    return V.fire({
                        animation: !0,
                        position: "bottom-end",
                        title: e,
                        icon: "error",
                        timer: t
                    })
                },
                showAutoErrorMessage: function(e, t, n) {
                    return W.hideLoader(), T.a.fire({
                        icon: "error",
                        title: e,
                        text: t,
                        footer: n,
                        confirmButtonText: "ঠিক আছে",
                        cancelButtonText: "না",
                        allowOutsideClick: !1
                    })
                },
                showAutoWarningMessage: function(e, t, n) {
                    return W.hideLoader(), T.a.fire({
                        icon: "warning",
                        title: e,
                        text: t,
                        footer: n,
                        confirmButtonText: "ঠিক আছে",
                        cancelButtonText: "না",
                        allowOutsideClick: !1
                    })
                },
                showShortToast: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3e3;
                    return V.fire({
                        animation: !0,
                        title: e,
                        timer: t
                    })
                }
            },
            Y = n("d4ec"),
            Z = n("bee2"),
            G = n("ade3"),
            X = n("bc3a"),
            J = n.n(X),
            Q = n("3148"),
            ee = function() {
                function e(t, n) {
                    Object(Y["a"])(this, e), Object(G["a"])(this, "basePath", void 0), this.basePath = t, this.localStorage = n, this.axios = J.a.create({
                        baseURL: t,
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                }
                return Object(Z["a"])(e, [{
                    key: "post",
                    value: function() {
                        var e = Object(a["a"])(regeneratorRuntime.mark((function e(t, n) {
                            var a, r, o = arguments;
                            return regeneratorRuntime.wrap((function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return a = o.length > 2 && void 0 !== o[2] ? o[2] : null, e.next = 3, Object(Q["getIdAddress"])();
                                    case 3:
                                        return r = e.sent, this.axios.defaults.headers.common[Q["CLIENT_IP_HEADER"]] = r, localStorage.getItem("visitorId") && (this.axios.defaults.headers.common["visitor-id"] = localStorage.getItem("visitorId")), a && (this.axios.defaults.headers.common["captcha-response"] = a), this.axios.defaults.baseURL = this.basePath, e.abrupt("return", this.axios.post(t, n));
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));

                        function t(t, n) {
                            return e.apply(this, arguments)
                        }
                        return t
                    }()
                }, {
                    key: "download",
                    value: function() {
                        var e = Object(a["a"])(regeneratorRuntime.mark((function e(t, n) {
                            var a;
                            return regeneratorRuntime.wrap((function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Object(Q["getIdAddress"])();
                                    case 2:
                                        return a = e.sent, e.abrupt("return", this.axios.post(t, n, {
                                            responseType: "arraybuffer",
                                            headers: {
                                                X_FORWARDED_FOR: a
                                            }
                                        }));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));

                        function t(t, n) {
                            return e.apply(this, arguments)
                        }
                        return t
                    }()
                }]), e
            }(),
            te = function() {
                function e(t) {
                    Object(Y["a"])(this, e), Object(G["a"])(this, "_isLoggingEnabled", void 0), Object(G["a"])(this, "_msg", void 0), Object(G["a"])(this, "_loggableObj", void 0), this._isLoggingEnabled = t
                }
                return Object(Z["a"])(e, [{
                    key: "loggable",
                    value: function(e, t) {
                        return this._loggableObj = t ? this.$lodash.get(e, t) : e, this
                    }
                }, {
                    key: "message",
                    value: function(e) {
                        return this._msg = e, this
                    }
                }, {
                    key: "log",
                    value: function() {
                        this._isLoggingEnabled && (this._msg ? console.log(this._msg, JSON.stringify(this._loggableObj, null, 2)) : console.log(JSON.stringify(this._loggableObj, null, 2)))
                    }
                }]), e
            }(),
            ne = n("539c"),
            ae = {
                install: function(e, t) {
                    var n = t.enableLogging;
                    e.prototype.$logger = new te(n), e.prototype.$lodash = ne
                }
            },
            re = n("a925"),
            oe = n("cc46"),
            se = n.n(oe),
            ie = n("6ad0"),
            ce = n.n(ie),
            ue = n("a584"),
            le = n("a5bb");
        r["default"].use(W), r["default"].component("v-otp-input", se.a), r["default"].component("VueElementLoading", ce.a), r["default"].use(re["a"]), r["default"].use(ae, {
            enableLogging: !1
        }), r["default"].config.productionTip = !1, r["default"].prototype.$cppClient = new ee("https://cpp.bka.sh/customer-portal-middleware", localStorage);
        var de = new m.a({
            theme: {
                themes: {
                    light: {
                        primary: "#e2136e",
                        secondary: "#b0bec5",
                        accent: "#8c9eff",
                        error: "#b71c1c"
                    }
                }
            }
        });
        r["default"].prototype.$feedback = q, r["default"].use(g["a"]), r["default"].use(m.a);
        var fe = le["a"].load();
        Object(a["a"])(regeneratorRuntime.mark((function e() {
            var t, n, a;
            return regeneratorRuntime.wrap((function(e) {
                while (1) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, fe;
                    case 2:
                        return t = e.sent, e.next = 5, t.get();
                    case 5:
                        n = e.sent, a = localStorage.getItem("visitorId"), a || localStorage.setItem("visitorId", n.visitorId + (new Date).getTime()), console.log("guestId", localStorage.getItem("visitorId"));
                    case 9:
                    case "end":
                        return e.stop()
                }
            }), e)
        })))();
        var me = new g["a"]({
            routes: p,
            mode: "history"
        });
        r["default"].use(ue["a"], {
            config: {
                id: "UA-199229918-1"
            },
            appName: "CPP Customer Portal"
        }, me);
        var he = localStorage.getItem("lang"),
            pe = new re["a"]({
                locale: he || "bn",
                fallbackLocale: "en",
                messages: I
            });
        new r["default"]({
            router: me,
            store: L,
            vuetify: de,
            i18n: pe,
            render: function(e) {
                return e(d)
            }
        }).$mount("#app")
    },
    "5c0b": function(e, t, n) {
        "use strict";
        var a = n("9c0c"),
            r = n.n(a);
        r.a
    },
    "9c0c": function(e, t, n) {},
    a7ba: function(e, t, n) {
        e.exports = n.p + "https://shop.bkash.com/img/bkash-loader.6dfcaecf.svg"
    }
});
//# sourceMappingURL=index.e8d3c7953e94e493fd8b.js.map