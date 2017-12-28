!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.vuedux = e() : t.vuedux = e();
}(this, function() {
    /******/
    return function(t) {
        /******/
        /******/
        // The require function
        /******/
        function e(n) {
            /******/
            /******/
            // Check if module is in cache
            /******/
            if (r[n]) /******/
            return r[n].exports;
            /******/
            // Create a new module (and put it into the cache)
            /******/
            var o = r[n] = {
                /******/
                i: n,
                /******/
                l: !1,
                /******/
                exports: {}
            };
            /******/
            /******/
            // Return the exports of the module
            /******/
            /******/
            /******/
            // Execute the module function
            /******/
            /******/
            /******/
            // Flag the module as loaded
            /******/
            return t[n].call(o.exports, o, o.exports, e), o.l = !0, o.exports;
        }
        // webpackBootstrap
        /******/
        // The module cache
        /******/
        var r = {};
        /******/
        /******/
        // Load entry module and return exports
        /******/
        /******/
        /******/
        /******/
        // expose the modules object (__webpack_modules__)
        /******/
        /******/
        /******/
        // expose the module cache
        /******/
        /******/
        /******/
        // identity function for calling harmony imports with the correct context
        /******/
        /******/
        /******/
        // define getter function for harmony exports
        /******/
        /******/
        /******/
        // getDefaultExport function for compatibility with non-harmony modules
        /******/
        /******/
        /******/
        // Object.prototype.hasOwnProperty.call
        /******/
        /******/
        /******/
        // __webpack_public_path__
        /******/
        return e.m = t, e.c = r, e.i = function(t) {
            return t;
        }, e.d = function(t, r, n) {
            /******/
            e.o(t, r) || /******/
            Object.defineProperty(t, r, {
                /******/
                configurable: !1,
                /******/
                enumerable: !0,
                /******/
                get: n
            });
        }, e.n = function(t) {
            /******/
            var r = t && t.__esModule ? /******/
            function() {
                return t.default;
            } : /******/
            function() {
                return t;
            };
            /******/
            /******/
            return e.d(r, "a", r), r;
        }, e.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }, e.p = "", e(e.s = 2);
    }([ /* 0 */
    /***/
    function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
        }, o = r(3), u = function(t, e) {
            return function(r) {
                return {
                    name: "connect-" + r.name,
                    inject: [ "store" ],
                    data: function() {
                        return {
                            state: null
                        };
                    },
                    props: n({}, (0, o.normalizeProps)((0, o.getOptions)(r).props)),
                    render: function(t) {
                        return t(r, {
                            on: this._events,
                            props: n({}, this.$options.propsData, this.stateToProps, this.dispatchToProps),
                            scopedSlots: this.$scopedSlots
                        }, this.$slots.default);
                    },
                    computed: {
                        stateToProps: function() {
                            return t ? t(this.state, this.$options.propsData) : {};
                        },
                        dispatchToProps: function() {
                            return e ? e(this.store.dispatch, this.$options.propsData) : {};
                        }
                    },
                    methods: {
                        updateState: function() {
                            this.state = this.store.getState();
                        }
                    },
                    created: function() {
                        if (t) {
                            var e = this.updateState;
                            this.unsubscribe = this.store.subscribe(e), e();
                        }
                    },
                    destroyed: function() {
                        this.unsubscribe && this.unsubscribe();
                    }
                };
            };
        };
        e.default = u;
    }, /* 1 */
    /***/
    function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = {
            name: "Provider",
            provide: function() {
                return {
                    store: this.store
                };
            },
            props: {
                store: {
                    type: Object,
                    required: !0,
                    validator: function(t) {
                        return Boolean(t.subscribe) && Boolean(t.dispatch) && Boolean(t.getState);
                    }
                }
            },
            render: function(t) {
                if (1 !== this.$slots.default.length) throw new Error("Provider should have one child!");
                return this.$slots.default[0];
            }
        };
        e.default = n;
    }, /* 2 */
    /***/
    function(t, e, r) {
        "use strict";
        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = r(1);
        Object.defineProperty(e, "Provider", {
            enumerable: !0,
            get: function() {
                return n(o).default;
            }
        });
        var u = r(0);
        Object.defineProperty(e, "connect", {
            enumerable: !0,
            get: function() {
                return n(u).default;
            }
        });
    }, /* 3 */
    /***/
    function(t, e, r) {
        "use strict";
        function n(t, e, r) {
            return e in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r, t;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
        };
        e.getOptions = function(t) {
            return "function" == typeof t ? t.options : t;
        }, e.normalizeProps = function(t) {
            return Array.isArray(t) ? t.reduce(function(t, e) {
                return o({}, t, n({}, e, {
                    type: null
                }));
            }, {}) : t;
        };
    } ]);
});
//# sourceMappingURL=vuedux.js.map