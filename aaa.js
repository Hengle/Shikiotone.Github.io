webpackJsonp([17], {
    "+4U8": function(t, i, e) {
        i = t.exports = e("FZ+f")(!1),
        i.push([t.i, ".security-left[data-v-ee13a7d2]{float:left;width:150px;height:100%;overflow:hidden}.security-title[data-v-ee13a7d2]{display:block;width:150px;height:50px;text-align:center;line-height:50px;font-size:16px;color:#99a2aa;cursor:default;border-bottom:1px solid #e1e2e5}.security-ul[data-v-ee13a7d2]{border-bottom:1px solid #e1e2e5}.security-list[data-v-ee13a7d2]{width:150px;height:48px;line-height:48px}.security-list[data-v-ee13a7d2]:hover{background:#e1e4ea;cursor:pointer}.security-icon[data-v-ee13a7d2]{vertical-align:middle;display:inline-block;width:18px;height:36px;margin-left:32px;background:url(" + e("cZeY") + ")}.security-left .on[data-v-ee13a7d2]{background-color:#00a1d7!important}.security-left .on .security-nav-name[data-v-ee13a7d2]{color:#fff}.security-nav-name[data-v-ee13a7d2]{margin-left:12px;font-size:14px;color:#222}.security-list-link[data-v-ee13a7d2]{display:block;height:100%}.security-list-link-jump[data-v-ee13a7d2]{display:block;height:100%;color:#222;font-size:16px;text-align:center;line-height:43px}.icon-0[data-v-ee13a7d2]{background-position:-23px -15px}.icon-1[data-v-ee13a7d2]{background-position:-23px -975px}.icon-2[data-v-ee13a7d2]{background-position:-23px -1231px}.icon-3[data-v-ee13a7d2]{background-position:-23px -80px}.icon-4[data-v-ee13a7d2]{background-position:-23px -144px}.icon-5[data-v-ee13a7d2]{background-position:-23px -207px}.icon-6[data-v-ee13a7d2]{background-position:-23px -272px}.icon-7[data-v-ee13a7d2]{background-position:-727px -237px}.icon-8[data-v-ee13a7d2]{background-position:-23px -335px}.icon-9[data-v-ee13a7d2]{background-position:-23px -398px}.icon-10[data-v-ee13a7d2]{background-position:-23px -463px}.icon-11[data-v-ee13a7d2]{background-position:-23px -592px}.security-left .on .icon-0[data-v-ee13a7d2]{background-position:-87px -15px!important}.security-left .on .icon-1[data-v-ee13a7d2]{background-position:-87px -975px!important}.security-left .on .icon-2[data-v-ee13a7d2]{background-position:-87px -1231px!important}.security-left .on .icon-3[data-v-ee13a7d2]{background-position:-87px -80px!important}.security-left .on .icon-4[data-v-ee13a7d2]{background-position:-87px -144px!important}.security-left .on .icon-5[data-v-ee13a7d2]{background-position:-87px -207px!important}.security-left .on .icon-6[data-v-ee13a7d2]{background-position:-87px -272px!important}.security-left .on .icon-7[data-v-ee13a7d2]{background-position:-792px -237px!important}.security-left .on .icon-8[data-v-ee13a7d2]{background-position:-87px -335px!important}.security-left .on .icon-9[data-v-ee13a7d2]{background-position:-87px -398px!important}.security-left .on .icon-10[data-v-ee13a7d2]{background-position:-87px -463px!important}.security-left .on .icon-11[data-v-ee13a7d2]{background-position:-87px -592px!important}.security-list-jump[data-v-ee13a7d2]{width:150px;height:43px;border-bottom:1px solid #e1e2e5;position:relative}.security-list-jump[data-v-ee13a7d2]:hover{background:#e1e4ea;cursor:pointer}.security-list-jump-icon[data-v-ee13a7d2]{display:inline-block;width:12px;height:12px;background:url(" + e("cZeY") + ");background-position:-26px -731px;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);right:14px}", ""])
    },
    "+Lym": function(t, i, e) {
        "use strict";
        function a(t) {
            e("5AIU")
        }
        var o = e("JUGE"),
        s = e("/5J/"),
        n = e("VU/8"),
        r = a,
        c = n(o.a, s.a, r, "data-v-e459a6d2", null);
        i.a = c.exports
    },
    "+f1a": function(t, i, e) {
        "use strict";
        var a = function() {
            var t = this,
            i = t.$createElement,
            e = t._self._c || i;
            return e("div", {
                staticClass: "security-left"
            },
            [e("span", {
                staticClass: "security-title"
            },
            [t._v("个人中心")]), t._v(" "), e("ul", {
                staticClass: "security-ul",
                attrs: {
                    id: "ser-ul"
                }
            },
            t._l(t.navData,
            function(i, a) {
                return e("router-link", {
                    key: a,
                    staticClass: "security-list",
                    attrs: {
                        tag: "li",
                        to: {
                            name: i.to
                        }
                    },
                    nativeOn: {
                        click: function(e) {
                            t.handleisOutLink(i, a)
                        }
                    }
                },
                [e("i", {
                    staticClass: "security-icon",
                    class: t.getCls(i, a)
                }), t._v(" "), e("span", {
                    staticClass: "security-nav-name",
                    domProps: {
                        innerHTML: t._s(i.name)
                    }
                })])
            })), t._v(" "), e("ul", {
                staticClass: "security-ul report-wrap-module",
                attrs: {
                    id: "securityOutLink"
                }
            },
            t._l(t.navLink,
            function(i, a) {
                return e("li", {
                    key: a,
                    staticClass: "security-list-jump"
                },
                [e("a", {
                    staticClass: "security-list-link-jump",
                    attrs: {
                        href: i.to,
                        target: "_blank"
                    }
                },
                [t._v("\n        " + t._s(i.name) + "\n        "), e("i", {
                    staticClass: "security-list-jump-icon"
                })])])
            }))])
        },
        o = [],
        s = {
            render: a,
            staticRenderFns: o
        };
        i.a = s
    },
    "/5J/": function(t, i, e) {
        "use strict";
        var a = function() {
            var t = this,
            i = t.$createElement,
            e = t._self._c || i;
            return e("transition", {
                attrs: {
                    name: "fade"
                }
            },
            [t.show ? e("div", {
                staticClass: "toast-box"
            },
            [t._v("\n    " + t._s(t.text) + "\n  ")]) : t._e()])
        },
        o = [],
        s = {
            render: a,
            staticRenderFns: o
        };
        i.a = s
    },
    "1EUd": function(t, i, e) {
        var a = e("CgdQ");
        "string" == typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        e("rjj0")("ddae154e", a, !0)
    },
    "1jxg": function(t, i, e) {
        "use strict";
        i.a = {
            name: "top-header"
        }
    },
    "4RHz": function(t, i, e) {
        "use strict";
        function a(t) {
            e("1EUd")
        }
        var o = e("1jxg"),
        s = e("Zsxo"),
        n = e("VU/8"),
        r = a,
        c = n(o.a, s.a, r, "data-v-3a7309c0", null);
        i.a = c.exports
    },
    "4Rt5": function(t, i, e) {
        "use strict";
        function a(t) {
            e("eNH9")
        }
        var o = e("YItF"),
        s = e("+f1a"),
        n = e("VU/8"),
        r = a,
        c = n(o.a, s.a, r, "data-v-ee13a7d2", null);
        i.a = c.exports
    },
    "5AIU": function(t, i, e) {
        var a = e("vokv");
        "string" == typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        e("rjj0")("10d9f561", a, !0)
    },
    "8+vA": function(t, i, e) {
        i = t.exports = e("FZ+f")(!1),
        i.push([t.i, ".container[data-v-4418ac1b]{float:left;width:829px;border-left:1px solid #ddd;min-height:850px;background:#fff}.container .upload-box[data-v-4418ac1b]{position:relative}.container .go-back[data-v-4418ac1b]{font-size:12px;padding:20px}.container .go-back a[data-v-4418ac1b]{color:#00a1d6}", ""])
    },
    "9e8E": function(t, i, e) {
        "use strict";
        var a = function() {
            var t = this,
            i = t.$createElement,
            e = t._self._c || i;
            return e("div", {
                staticClass: "crop-wrap",
                on: {
                    mousedown: function(i) {
                        i.preventDefault(),
                        t.wrapMouseDown(i)
                    }
                }
            },
            [e("div", {
                staticClass: "shadow-box",
                style: t.recStyle
            },
            [e("img", {
                staticClass: "shadow-img",
                style: t.imgStyle,
                attrs: {
                    src: t.img
                }
            })]), t._v(" "), e("div", {
                staticClass: "crop-box",
                class: t.showBox ? "show": "",
                style: t.recStyle,
                on: {
                    mousedown: t.boxMouseDown
                }
            },
            [e("span", {
                staticClass: "drag-point point-lt",
                on: {
                    mousedown: function(i) {
                        t.pointMouseDown("drag-lt", i)
                    }
                }
            }), t._v(" "), e("span", {
                staticClass: "drag-point point-lb",
                on: {
                    mousedown: function(i) {
                        t.pointMouseDown("drag-lb", i)
                    }
                }
            }), t._v(" "), e("span", {
                staticClass: "drag-point point-rt",
                on: {
                    mousedown: function(i) {
                        t.pointMouseDown("drag-rt", i)
                    }
                }
            }), t._v(" "), e("span", {
                staticClass: "drag-point point-rb",
                on: {
                    mousedown: function(i) {
                        t.pointMouseDown("drag-rb", i)
                    }
                }
            })])])
        },
        o = [],
        s = {
            render: a,
            staticRenderFns: o
        };
        i.a = s
    },
    AHHf: function(t, i, e) {
        "use strict";
        function a(t) {
            e("CZfi")
        }
        var o = e("aEAk"),
        s = e("9e8E"),
        n = e("VU/8"),
        r = a,
        c = n(o.a, s.a, r, "data-v-305fb1c4", null);
        i.a = c.exports
    },
    CCfu: function(t, i, e) {
        t.exports = e.p + "static/img/rl_top.35edfde.png"
    },
    CZfi: function(t, i, e) {
        var a = e("l7Oq");
        "string" == typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        e("rjj0")("c27e2a8c", a, !0)
    },
    CgdQ: function(t, i, e) {
        i = t.exports = e("FZ+f")(!1),
        i.push([t.i, ".top-header[data-v-3a7309c0]{width:100%;height:106px;background:url(" + e("yBl4") + ") repeat-x;z-index:10}.top-img[data-v-3a7309c0]{width:980px;height:106px;margin:0 auto;background:url(" + e("CCfu") + ") no-repeat}", ""])
    },
    EtAx: function(t, i, e) {
        i = t.exports = e("FZ+f")(!1),
        i.push([t.i, ".cropper-modal .modal[data-v-15325571]{width:830px;text-align:center}.modal-head[data-v-15325571]{position:relative;text-align:center;padding:0 20px;border-bottom:1px solid #e5e9ef}.modal-head a[data-v-15325571]{color:#6d757a}.modal-head a[data-v-15325571]:hover{color:#00a1d6}.head-wrap[data-v-15325571]{position:relative;font-size:14px;color:#222;height:50px;line-height:50px;text-align:left}.modal-content[data-v-15325571]{padding:80px 20px 56px;display:inline-block}.img-clip-wrap[data-v-15325571]{float:left;position:relative;margin-right:40px}.border-line[data-v-15325571]{height:182px;width:1px;background:#e5e9ef;float:left}.container-bg[data-v-15325571]{width:180px;height:180px;background-color:#000;border-radius:4px;border:1px solid #e5e9ef}.img-container[data-v-15325571]{position:relative;height:0;margin:auto}.img-container img[data-v-15325571]{position:relative;width:100%;height:100%}.img-container .shadow-box[data-v-15325571]{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);z-index:1}.reset-img[data-v-15325571]{position:absolute;bottom:-28px;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%)}.reset-img label[data-v-15325571]{font-size:12px;color:#6d757a;cursor:pointer}.reset-img label i[data-v-15325571]{display:inline-block;width:18px;height:18px;vertical-align:bottom;background-image:url(" + e("cZeY") + ");background-position:-23px -1303px;cursor:pointer}.reset-img label[data-v-15325571]:hover{color:#00b5e5}.reset-img label:hover i[data-v-15325571]{background-position:-87px -1303px}#file_input[data-v-15325571]{display:none}.first-change-lb[data-v-15325571]{cursor:pointer;background:#f1f2f5;width:180px;height:180px;position:absolute;top:0;left:0;border:1px solid #e5e9ef;border-radius:4px;-webkit-transition:all .6s ease;transition:all .6s ease}.first-change-lb[data-v-15325571]:hover{background:#e5e9ef}.first-change-lb span[data-v-15325571]{display:block;font-family:MicrosoftYaHei;font-size:16px;color:#6d757a;line-height:20px;margin-top:10px;padding:0 12px;letter-spacing:0}.first-change-lb i[data-v-15325571]{margin:52px auto 0;width:54px;height:46px;display:block;background:url(" + e("cZeY") + ');background-position:-101px -1065px}.img-preview-wrap[data-v-15325571]{margin-left:40px;margin-top:30px;float:left}.pre-container[data-v-15325571]{width:96px;height:96px;overflow:hidden;border-radius:50%;border:1px solid #e6eaf0;background-size:cover}.pre-container img[data-v-15325571]{position:relative;width:100%;height:100%;border-radius:4px}.pre-info[data-v-15325571]{margin-top:20px;font-size:12px;color:#99a2aa}.clearfix[data-v-15325571]:after,.clearfix[data-v-15325571]:before{content:" ";display:table}.clearfix[data-v-15325571]:after{clear:both}.modal-footer[data-v-15325571]{text-align:center;margin-top:40px}.modal-btn[data-v-15325571]{display:inline-block;width:140px;height:40px;font-size:14px;line-height:32px;border-radius:4px;cursor:pointer;text-decoration:none}.descript[data-v-15325571]{line-height:16px;color:#99a2aa}.btn-confirm[data-v-15325571]{border:1px solid #00a1d6;color:#fff;background-color:#00a1d6}.btn-confirm[data-v-15325571]:hover{background-color:#00b5e5;border-color:#00b5e5}.btn-confirm.disabled[data-v-15325571]{background:#f4f5f7;border-color:#f4f5f7;color:#ccd0d7;cursor:auto}', ""])
    },
    GDB7: function(t, i, e) {
        "use strict";
        function a(t) {
            e("MSB6")
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var o = e("o3eR"),
        s = e("HB6E"),
        n = e("VU/8"),
        r = a,
        c = n(o.a, s.a, r, "data-v-4418ac1b", null);
        i.
    default = c.exports
    },
    HB6E: function(t, i, e) {
        "use strict";
        var a = function() {
            var t = this,
            i = t.$createElement,
            e = t._self._c || i;
            return e("div", [e("top-header"), t._v(" "), e("div", {
                staticClass: "security_content"
            },
            [e("security-nav"), t._v(" "), e("div", {
                staticClass: "container"
            },
            [e("div", {
                staticClass: "upload-box"
            },
            [e("custom-cropper")], 1)])], 1)], 1)
        },
        o = [],
        s = {
            render: a,
            staticRenderFns: o
        };
        i.a = s
    },
    JUGE: function(t, i, e) {
        "use strict";
        i.a = {
            name: "toast",
            props: ["text", "show"],
            watch: {
                show: function(t) {
                    var i = this; ! 0 === t && setTimeout(function() {
                        i.$emit("close-toast", {
                            show: !1
                        })
                    },
                    3e3)
                }
            }
        }
    },
    MSB6: function(t, i, e) {
        var a = e("8+vA");
        "string" == typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        e("rjj0")("1b8d745d", a, !0)
    },
    YItF: function(t, i, e) {
        "use strict";
        i.a = {
            name: "security-nav",
            data: function() {
                return {
                    navData: [{
                        to: "home",
                        name: '首<b style="width:28px; display:inline-block"></b>页',
                        isOutLink: !1
                    },
                    {
                        to: "big",
                        name: '<span style="letter-spacing: 7px;">大会员</span>',
                        isOutLink: !1
                    },
                    {
                        to: "points",
                        name: "会员积分",
                        isOutLink: !1
                    },
                    {
                        to: "setting",
                        name: "我的信息",
                        isOutLink: !1
                    },
                    {
                        to: "face",
                        name: "我的头像",
                        isOutLink: !1
                    },
                    {
                        to: "nameplate",
                        name: "我的勋章",
                        isOutLink: !0,
                        outLink: "https://account.bilibili.com/site/nameplate.html"
                    },
                    {
                        to: "site",
                        name: "账号安全",
                        isOutLink: !0,
                        outLink: "https://passport.bilibili.com/account/security",
                        isopen: !0
                    },
                    {
                        to: "blacklist",
                        name: "黑名单管理",
                        isOutLink: !1
                    },
                    {
                        to: "coin",
                        name: "我的硬币",
                        isOutLink: !1
                    },
                    {
                        to: "record",
                        name: "我的记录",
                        isOutLink: !1
                    },
                    {
                        to: "identification",
                        name: "实名认证",
                        isOutLink: !0,
                        outLink: "https://account.bilibili.com/site/identification.html"
                    },
                    {
                        to: "invitation",
                        name: "邀请注册",
                        isOutLink: !1
                    }],
                    navLink: [{
                        name: "个人空间",
                        to: "//space.bilibili.com"
                    },
                    {
                        name: "我的钱包",
                        to: "https://pay.bilibili.com/bb_balance.html"
                    },
                    {
                        name: "创作中心",
                        to: "https://member.bilibili.com/v2#/home"
                    },
                    {
                        name: "直播中心",
                        to: "//live.bilibili.com/i"
                    }]
                }
            },
            methods: {
                getCls: function(t, i) {
                    return "icon-" + i
                },
                handleisOutLink: function(t, i) {
                    if (t.isOutLink) {
                        var e = this.navData[i].outLink;
                        window.reportMsgObj.securityNavLink = i + 1,
                        window.reportObserver && window.reportObserver.forceCommit(),
                        t.isopen ? window.open(e) : location.href = e
                    } else this.$router.push({
                        name: t.to
                    })
                }
            }
        }
    },
    YT2P: function(t, i, e) {
        var a = e("EtAx");
        "string" == typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        e("rjj0")("933a3808", a, !0)
    },
    Zsxo: function(t, i, e) {
        "use strict";
        var a = function() {
            var t = this,
            i = t.$createElement;
            t._self._c;
            return t._m(0)
        },
        o = [function() {
            var t = this,
            i = t.$createElement,
            e = t._self._c || i;
            return e("div", {
                staticClass: "top-header"
            },
            [e("div", {
                staticClass: "top-img"
            })])
        }],
        s = {
            render: a,
            staticRenderFns: o
        };
        i.a = s
    },
    aEAk: function(t, i, e) {
        "use strict";
        i.a = {
            props: {
                ratio: {},
                img: {},
                srcSize: {}
            },
            data: function() {
                return {
                    rec: {
                        w: 0,
                        h: 0,
                        l: 0,
                        t: 0
                    },
                    pl: 0,
                    pt: 0,
                    action: "",
                    actionPoint: {
                        x: 0,
                        y: 0
                    },
                    referPoint: {
                        x: 0,
                        y: 0
                    },
                    $rec: null
                }
            },
            computed: {
                showBox: function() {
                    return this.rec.w && this.rec.h
                },
                imgStyle: function() {
                    return "width:" + this.srcSize.w + "px;height:" + this.srcSize.h + "px;top:" + -this.rec.t + "px;left:" + -this.rec.l + "px;"
                },
                recStyle: function() {
                    return "width:" + this.rec.w + "px;height:" + this.rec.h + "px;left:" + this.rec.l + "px;top:" + this.rec.t + "px;"
                }
            },
            mounted: function() {
                window.addEventListener("mouseup", this.disableDrag),
                window.addEventListener("mousemove", this.updateRec)
            },
            beforeDestroy: function() {
                window.removeEventListener("mouseup", this.disableDrag),
                window.removeEventListener("mousemove", this.updateRec)
            },
            methods: {
                getLeft: function(t) {
                    for (var i = t.offsetLeft,
                    e = t.offsetParent; e;) i += e.offsetLeft,
                    e = e.offsetParent;
                    return i
                },
                getTop: function(t) {
                    for (var i = t.offsetTop,
                    e = t.offsetParent; e;) i += e.offsetTop,
                    e = e.offsetParent;
                    return i
                },
                initAction: function(t, i, e) {
                    this.action = t,
                    this.pl = this.getLeft(this.$el),
                    this.pt = this.getTop(this.$el),
                    this.actionPoint = {
                        x: i,
                        y: e
                    },
                    this.referPoint = {
                        x: this.rec.l,
                        y: this.rec.t
                    },
                    "drag-lt" === t ? this.referPoint = {
                        x: this.rec.l + this.rec.w,
                        y: this.rec.t + this.rec.h
                    }: "drag-lb" === t ? this.referPoint = {
                        x: this.rec.l + this.rec.w,
                        y: this.rec.t
                    }: "drag-rt" === t ? this.referPoint = {
                        x: this.rec.l,
                        y: this.rec.t + this.rec.h
                    }: "drag-rb" === t && (this.referPoint = {
                        x: this.rec.l,
                        y: this.rec.t
                    })
                },
                pointMouseDown: function(t, i) {
                    this.initAction(t, i.pageX, i.pageY),
                    i.stopPropagation()
                },
                boxMouseDown: function(t) {
                    this.initAction("move", t.pageX, t.pageY),
                    t.stopPropagation()
                },
                wrapMouseDown: function(t) {
                    this.rec.w && this.rec.h || (this.initAction("cross", t.pageX, t.pageY), this.rec = {
                        w: 0,
                        h: 0,
                        l: t.pageX - this.pl,
                        t: t.pageY - this.pt
                    },
                    t.stopPropagation())
                },
                disableDrag: function() {
                    this.action && (this.action = "", this.$emit("selectEnd"))
                },
                clearRec: function() {
                    this.action = "",
                    this.rec = {
                        w: 0,
                        h: 0,
                        l: 0,
                        t: 0
                    }
                },
                updateRec: function(t) {
                    if (this.action) {
                        var i = this.$el.offsetWidth,
                        e = this.$el.offsetHeight,
                        a = t.pageX - this.actionPoint.x,
                        o = t.pageY - this.actionPoint.y,
                        s = t.pageX,
                        n = t.pageY,
                        r = 0,
                        c = 0,
                        l = 0,
                        d = 0;
                        0 === a && 0 === o || ("move" === this.action ? (l = o + this.referPoint.y, d = a + this.referPoint.x, l <= 0 ? l = 0 : l + this.rec.h >= e && (l = e - this.rec.h), d <= 0 ? d = 0 : d + this.rec.w >= i && (d = i - this.rec.w), this.rec.l = d, this.rec.t = l) : "cross" === this.action ? a > 0 && o > 0 ? (r = a + this.rec.l >= i ? i - this.rec.l: a, c = r / this.ratio, c + this.rec.t > e && (c = e - this.rec.t, r = c * this.ratio), this.rec.w = r, this.rec.h = c) : a > 0 && o < 0 ? (r = a + this.referPoint.x >= i ? i - this.referPoint.x: a, c = r / this.ratio, c >= this.referPoint.y && (c = this.referPoint.y, r = c * this.ratio), this.rec.t = this.referPoint.y - c, this.rec.w = r, this.rec.h = c) : a < 0 && o < 0 ? (r = a + this.referPoint.x <= 0 ? this.referPoint.x: -a, c = r / this.ratio, c >= this.referPoint.y && (c = this.referPoint.y, r = c * this.ratio), this.rec.t = this.referPoint.y - c, this.rec.l = this.referPoint.x - r, this.rec.w = r, this.rec.h = c) : a < 0 && o > 0 && (r = a + this.referPoint.x <= 0 ? this.referPoint.x: -a, c = r / this.ratio, c + this.referPoint.y >= e && (c = e - this.referPoint.y, r = c * this.ratio), this.rec.l = this.referPoint.x - r, this.rec.w = r, this.rec.h = c) : "drag-lt" !== this.action && "drag-rt" !== this.action && "drag-lb" !== this.action && "drag-rb" !== this.action || (r = s - (this.referPoint.x + this.pl), c = n - (this.referPoint.y + this.pt), r < 0 && c < 0 ? (r = -1 * r >= this.referPoint.x ? this.referPoint.x: -1 * r, c = r / this.ratio, c >= this.referPoint.y && (c = this.referPoint.y, r = c * this.ratio), this.rec.l = this.referPoint.x - r, this.rec.t = this.referPoint.y - c) : r < 0 && c > 0 ? (r = -1 * r >= this.referPoint.x ? this.referPoint.x: -1 * r, c = r / this.ratio, c >= e - this.referPoint.y && (c = e - this.referPoint.y, r = c * this.ratio), this.rec.l = this.referPoint.x - r, this.rec.t = this.referPoint.y) : r > 0 && c < 0 ? (r = r >= i - this.referPoint.x ? i - this.referPoint.x: r, c = r / this.ratio, c >= this.referPoint.y && (c = this.referPoint.y, r = c * this.ratio), this.rec.l = this.referPoint.x, this.rec.t = this.referPoint.y - c) : r > 0 && c > 0 && (r = r >= i - this.referPoint.x ? i - this.referPoint.x: r, c = r / this.ratio, c >= e - this.referPoint.y && (c = e - this.referPoint.y, r = c * this.ratio), this.rec.l = this.referPoint.x, this.rec.t = this.referPoint.y), this.rec.w = r, this.rec.h = c), this.$emit("selectChange"), t.preventDefault())
                    }
                }
            }
        }
    },
    ao0s: function(t, i, e) {
        "use strict";
        var a = function() {
            var t = this,
            i = t.$createElement,
            e = t._self._c || i;
            return e("div", {
                staticClass: "cropper-modal"
            },
            [e("div", {
                staticClass: "overlay"
            }), t._v(" "), e("div", {
                staticClass: "modal"
            },
            [t._m(0), t._v(" "), e("div", {
                staticClass: "modal-content clearfix"
            },
            [e("div", {
                staticClass: "img-clip-wrap"
            },
            [e("div", {
                staticClass: "container-bg"
            },
            [e("div", {
                staticClass: "img-container"
            },
            [e("img", {
                attrs: {
                    id: "clip_src_img",
                    src: t.img
                },
                on: {
                    load: t.srcImgLoaded
                }
            }), t._v(" "), e("div", {
                staticClass: "shadow-box"
            }), t._v(" "), e("Select-Box", {
                ref: "box",
                attrs: {
                    srcSize: t.imgSize,
                    ratio: t.ratio,
                    img: t.img
                },
                on: {
                    selectEnd: t.selectEnd,
                    selectChange: t.selectChange
                }
            })], 1)]), t._v(" "), e("label", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.img,
                    expression: "!img"
                }],
                staticClass: "first-change-lb",
                attrs: {
                    for: "file_input"
                }
            },
            [e("i"), t._v(" "), e("span", [t._v("选择图片")])]), t._v(" "), e("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.img,
                    expression: "img"
                }],
                staticClass: "reset-img"
            },
            [t._m(1)]), t._v(" "), e("input", {
                attrs: {
                    type: "file",
                    id: "file_input",
                    accept: "image/png,image/jpg,image/jpeg"
                },
                on: {
                    change: t.fileChange
                }
            })]), t._v(" "), e("div", {
                staticClass: "border-line"
            }), t._v(" "), e("div", {
                staticClass: "img-preview-wrap"
            },
            [e("div", {
                staticClass: "pre-container",
                style: {
                    "background-image": "url(" + (t.img ? "": t.oldFace) + ")"
                }
            },
            [e("img", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.img,
                    expression: "img"
                }],
                attrs: {
                    id: "clip_res_img",
                    src: t.img
                }
            })]), t._v(" "), e("div", {
                staticClass: "pre-info"
            },
            [t._v(t._s(t.img ? "预览头像": "当前头像"))])])]), t._v(" "), e("p", {
                staticClass: "descript"
            },
            [t._v("请选择图片上传：大小180 * 180像素支持JPG、PNG等格式，图片需小于2M")]), t._v(" "), e("div", {
                staticClass: "modal-footer"
            },
            [e("input", {
                class: {
                    "modal-btn": !0,
                    "btn-confirm": !0,
                    disabled: !t.img
                },
                attrs: {
                    type: "button",
                    value: "更新"
                },
                on: {
                    click: t.uploadFn
                }
            })])]), t._v(" "), e("toast", {
                attrs: {
                    text: t.responseMsg,
                    show: t.toastFlag
                },
                on: {
                    "close-toast": t.closeToast
                }
            })], 1)
        },
        o = [function() {
            var t = this,
            i = t.$createElement,
            e = t._self._c || i;
            return e("div", {
                staticClass: "modal-head"
            },
            [e("div", {
                staticClass: "head-wrap"
            },
            [e("a", {
                attrs: {
                    href: "//account.bilibili.com/site/face.html"
                }
            },
            [t._v("我的头像")]), t._v(" > 更换头像")])])
        },
        function() {
            var t = this,
            i = t.$createElement,
            e = t._self._c || i;
            return e("label", {
                attrs: {
                    for: "file_input"
                }
            },
            [e("i"), t._v(" 重新选择")])
        }],
        s = {
            render: a,
            staticRenderFns: o
        };
        i.a = s
    },
    cZeY: function(t, i, e) {
        t.exports = e.p + "static/img/icons_m_2.57e5263.png"
    },
    eNH9: function(t, i, e) {
        var a = e("+4U8");
        "string" == typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        e("rjj0")("0ed0d2dd", a, !0)
    },
    hft6: function(t, i, e) {
        "use strict";
        function a(t) {
            e("YT2P")
        }
        var o = e("oHe8"),
        s = e("ao0s"),
        n = e("VU/8"),
        r = a,
        c = n(o.a, s.a, r, "data-v-15325571", null);
        i.a = c.exports
    },
    l7Oq: function(t, i, e) {
        i = t.exports = e("FZ+f")(!1),
        i.push([t.i, ".crop-wrap[data-v-305fb1c4]{width:100%;height:100%;position:absolute;top:0;left:0;z-index:10;cursor:crosshair}.crop-box[data-v-305fb1c4]{position:absolute;display:none;top:0;left:0;width:0;height:0;cursor:move;border:1px solid #fff;z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box}.crop-box.show[data-v-305fb1c4]{display:block}.drag-point[data-v-305fb1c4]{display:inline-block;width:10px;height:10px;border:1px solid #fff;position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box}.point-lt[data-v-305fb1c4]{top:-10px;left:-10px;cursor:nw-resize}.point-lb[data-v-305fb1c4]{left:-10px;bottom:-10px;cursor:sw-resize}.point-rt[data-v-305fb1c4]{right:-10px;top:-10px;cursor:ne-resize}.point-rb[data-v-305fb1c4]{right:-10px;bottom:-10px;cursor:se-resize}.shadow-box[data-v-305fb1c4]{overflow:hidden;z-index:1}.shadow-box[data-v-305fb1c4],.shadow-img[data-v-305fb1c4]{position:absolute;top:0;left:0}.shadow-box[data-v-305fb1c4]::-moz-selection,.shadow-img[data-v-305fb1c4]::-moz-selection{background-color:transparent}.shadow-box[data-v-305fb1c4]::selection,.shadow-img[data-v-305fb1c4]::selection{background-color:transparent}", ""])
    },
    o3eR: function(t, i, e) {
        "use strict";
        var a, o = e("bOdI"),
        s = e.n(o),
        n = e("4RHz"),
        r = e("4Rt5"),
        c = e("hft6");
        i.a = {
            components: (a = {
                CustomCropper: c.a
            },
            s()(a, n.a.name, n.a), s()(a, r.a.name, r.a), a)
        }
    },
    oHe8: function(t, i, e) {
        "use strict";
        var a = e("AHHf"),
        o = e("+Lym"),
        s = e("JA8L"),
        n = e("mtWM"),
        r = e.n(n),
        c = e("7c2P");
        i.a = {
            components: {
                SelectBox: a.a,
                Toast: o.a
            },
            data: function() {
                return {
                    img: null,
                    $srcImg: null,
                    $resImg: null,
                    $input: null,
                    $imgContainer: null,
                    $preContainer: null,
                    nw: 0,
                    nh: 0,
                    clipData: null,
                    ratio: 1,
                    imgSize: {
                        w: 0,
                        h: 0
                    },
                    containerTop: 0,
                    blobObj: null,
                    oldFace: "",
                    responseMsg: "",
                    toastFlag: !1,
                    IdentityDialogFlag: !1,
                    uploadFlag: !0
                }
            },
            mounted: function() {
                this.$input = this.$el.querySelectorAll("#file_input")[0],
                this.$srcImg = this.$el.querySelectorAll("#clip_src_img")[0],
                this.$resImg = this.$el.querySelectorAll("#clip_res_img")[0],
                this.$imgContainer = this.$el.querySelectorAll(".img-container")[0],
                this.$preContainer = this.$el.querySelectorAll(".pre-container")[0],
                this.$containerBox = this.$el.querySelectorAll(".container-bg")[0];
                var t = this;
                s.F().then(function(i) {
                    var a = i.data;
                    t.oldFace = e.i(c.d)(a.data.face) + "@150w_150h.png"
                })
            },
            methods: {
                selectChange: function() {
                    var t = this.$refs.box.rec;
                    t.w > 0 && t.h > 0 && this.updatePreview()
                },
                selectEnd: function() {
                    var t = this.$refs.box.rec;
                    t.w > 0 && t.h > 0 && this.clip()
                },
                fileChange: function() {
                    var t = this,
                    i = new FileReader;
                    i.onloadend = function() {
                        t.img = i.result
                    },
                    this.$input.files && this.$input.files[0] && i.readAsDataURL(this.$input.files[0])
                },
                srcImgLoaded: function() {
                    this.nw = this.$srcImg.naturalWidth,
                    this.nh = this.$srcImg.naturalHeight,
                    this.clearSelect(),
                    this.setImgSize(),
                    this.updatePreview(),
                    this.clip()
                },
                clearSelect: function() {
                    this.$refs.box.clearRec(),
                    this.clipData = null
                },
                setImgSize: function() {
                    var t = this.nw / this.nh,
                    i = this.$containerBox.clientWidth,
                    e = this.$containerBox.clientHeight,
                    a = 0,
                    o = 0;
                    t >= this.ratio ? (this.imgSize.w = i, this.imgSize.h = i / t, this.containerTop = (e - this.imgSize.h) / 2, o = this.imgSize.h, a = o * this.ratio) : (this.imgSize.h = e, this.imgSize.w = e * t, this.containerTop = 0, a = this.imgSize.w, o = a / this.ratio),
                    this.$srcImg.setAttribute("style", "width:" + this.imgSize.w + "px;height:" + this.imgSize.h + "px;"),
                    this.$imgContainer.setAttribute("style", "width:" + this.imgSize.w + "px;height:" + this.imgSize.h + "px;top:" + this.containerTop + "px;"),
                    this.$refs.box.rec = {
                        w: a,
                        h: o,
                        l: 0,
                        t: 0
                    }
                },
                getComputedRec: function(t) {
                    var i = this.$imgContainer.offsetWidth,
                    e = this.$imgContainer.offsetHeight,
                    a = i / this.nw,
                    o = e / this.nh;
                    return {
                        l: t.l / a,
                        t: t.t / o,
                        w: t.w / a,
                        h: t.h / o
                    }
                },
                updatePreview: function() {
                    var t = this.$refs.box.rec,
                    i = this.$preContainer.offsetWidth,
                    e = this.$preContainer.offsetHeight,
                    a = i / t.w,
                    o = e / t.h,
                    s = a * this.$imgContainer.offsetWidth,
                    n = o * this.$imgContainer.offsetHeight,
                    r = -t.l * a,
                    c = -t.t * o;
                    this.$resImg.setAttribute("style", "width:" + s + "px;height:" + n + "px;top:" + c + "px;left:" + r + "px;")
                },
                clip: function() {
                    var t = this.$refs.box.rec;
                    if (t.w && t.h) {
                        var i = document.createElement("canvas"),
                        e = i.getContext("2d"),
                        a = this.getComputedRec(t);
                        i.width = a.w,
                        i.height = a.h,
                        e.fillStyle = "#fff",
                        e.fillRect( - a.l, -a.t, this.nw, this.nh),
                        e.drawImage(this.$srcImg, -a.l, -a.t, this.nw, this.nh),
                        this.clipData = i.toDataURL("image/png", 1),
                        this.blobObj = this.dataURLtoBlob(this.clipData)
                    }
                },
                dataURLtoBlob: function(t) {
                    for (var i = t.split(","), e = i[0].match(/:(.*?);/)[1], a = atob(i[1]), o = a.length, s = new Uint8Array(o); o--;) s[o] = a.charCodeAt(o);
                    return new Blob([s], {
                        type: e
                    })
                },
                uploadFn: function() {
                    if (null !== this.blobObj && this.uploadFlag) {
                        this.uploadFlag = !1;
                        var t = this,
                        i = new FormData;
                        i.append("dopost", "save"),
                        i.append("DisplayRank", "10000"),
                        i.append("face", this.blobObj),
                        r.a.post("//api.bilibili.com/x/member/web/face/update?csrf=" + c.a.get("bili_jct"), i, {
                            withCredentials: !0,
                            headers: {
                                "Content-Type": "multipart/form-data, boundary=AaB03x"
                            }
                        }).then(function(i) {
                            var e = i.data;
                            t.uploadFlag = !0,
                            0 === e.code ? (t.uploadFlag = !1, t.toastFlag = !0, t.responseMsg = "更新成功", setTimeout(function() {
                                window.location.href = "http://account.bilibili.com/site/face.html"
                            },
                            1e3)) : 40012 === e.code ? (t.toastFlag = !0, t.responseMsg = "头像格式错误") : 40013 === e.code ? (t.toastFlag = !0, t.responseMsg = "头像大小不能超过2M") : 61001 === e.code || 61002 === e.code ? t.IdentityDialogFlag ? IdentityDialog(e.code) : (t.IdentityDialogFlag = !0, new IdentityDialog(e.code)) : (t.toastFlag = !0, t.responseMsg = e.message)
                        }).
                        catch(function() {
                            t.uploadFlag = !0
                        })
                    }
                },
                closeToast: function(t) {
                    this.toastFlag = t.show,
                    this.responseMsg = ""
                }
            }
        }
    },
    vokv: function(t, i, e) {
        i = t.exports = e("FZ+f")(!1),
        i.push([t.i, ".toast-box[data-v-e459a6d2]{position:fixed;left:50%;top:50%;z-index:999999;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border-radius:4px;font-size:14px;line-height:18px;padding:12px 30px;background:rgba(0,0,0,.8);color:#fff;opacity:1}.fade-enter-active[data-v-e459a6d2],.fade-leave-active[data-v-e459a6d2]{-webkit-transition:all .3s ease;transition:all .3s ease}.fade-enter[data-v-e459a6d2],.fade-leave-to[data-v-e459a6d2]{opacity:0;margin-top:-8px}", ""])
    },
    yBl4: function(t, i) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAABWCAYAAADlqUfFAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAbSURBVCiRY2RYcOM/AwMDAxMDFIwyRhkjjQEAc4gDI5wD87YAAAAASUVORK5CYII="
    }
});