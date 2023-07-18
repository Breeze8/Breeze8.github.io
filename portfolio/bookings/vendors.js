// dReadmore - jQuery plugin, Author: DSekon. Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php | Project home: http://DSekon.ru/dReadmore/ | Version:  1.0.0
!function (e) {
    function t(e) {
        var t = e.data("dReadmore").target, a = t.data("dReadmore").btn,
            d = parseFloat(t.css("min-height")) * parseFloat(t.css("line-height")) / parseFloat(t.css("font-size")),
            r = parseFloat(t.find(".d-readmove_text-wrapp").css("height")) / parseFloat(t.css("font-size"));
        t.data("dReadmore").closeIfChangeWidth && t.attr("d-readmore-expanded", t.data("dReadmore").expanded), "true" === t.attr("d-readmore-expanded") ? a.html(e.data("dReadmore").lessText) : a.html(e.data("dReadmore").moreText), parseFloat(t.css("min-height")) ? (t.css({
            height: ("true" === t.attr("d-readmore-expanded") ? r : d) + "em",
            "min-height": "none"
        }), a.css({display: ""})) : (t.css({
            height: "",
            "min-height": ""
        }), a.css({display: "none"})), e.data("dReadmore").heightMin = d, e.data("dReadmore").heightMax = r
    }

    function a(a) {
        a.attr("id", a.data("dReadmore").id), t(a), a.data("dReadmore").btn.on("click", function () {
            a.off("transitionend");
            var t = e("#" + a.data("dReadmore").id), d = "true" === t.attr("d-readmore-expanded");
            a.data("dReadmore").beforeToggle && "function" == typeof a.data("dReadmore").beforeToggle && a.data("dReadmore").beforeToggle(a, d), d ? (t.attr("d-readmore-expanded", !1).css({height: a.data("dReadmore").heightMin + "em"}), e(this).html(a.data("dReadmore").moreText)) : (t.attr("d-readmore-expanded", !0).css({height: a.data("dReadmore").heightMax + "em"}), e(this).html(a.data("dReadmore").lessText)), a.on("transitionend", function () {
                a.data("dReadmore").afterToggle && "function" == typeof a.data("dReadmore").afterToggle && a.data("dReadmore").afterToggle(a, !d), a.off("transitionend")
            })
        }), e(window).on("load resize", function () {
            var e, d, r;
            e = a, d = parseFloat(e.css("min-height")) * parseFloat(e.css("line-height")) / parseFloat(e.css("font-size")), r = parseFloat(e.find(".d-readmove_text-wrapp").css("height")), e.data("dReadmore").heightMin == d && e.data("dReadmore").heightMax == r || t(e)
        })
    }

    var d = {
        init: function (t) {
            return this.each(function (d) {
                var r = {
                    id: "d-readmore-" + d,
                    startOpen: !1,
                    moreText: "Show more",
                    lessText: "Close",
                    duration: 250,
                    timing: "ease",
                    returnInitialState: !1,
                    beforeToggle: function () {
                    },
                    afterToggle: function () {
                    }
                };
                t && e.extend(r, t);
                var o = e(this), i = o.parent().find(".d-readmore_btn").attr("d-readmore-controls-id", r.id);
                o.data("dReadmore", {
                    target: o,
                    id: r.id,
                    btn: i,
                    expanded: r.startOpen,
                    moreText: r.moreText,
                    lessText: r.lessText,
                    duration: r.duration,
                    closeIfChangeWidth: r.closeIfChangeWidth,
                    heightMin: 0,
                    heightMax: 0,
                    beforeToggle: r.beforeToggle,
                    afterToggle: r.afterToggle
                }).css({
                    "transition-property": "height, min-height",
                    "transition-duration": r.duration + "ms",
                    "transition-timing-function": r.timing
                }).wrapInner('<div class="d-readmove_text-wrapp"></div>'), a(o)
            })
        }, destroy: function () {
            return this.each(function () {
                var t = e(this);
                t.parent().find("." + t.data("dReadmore").btnClass).removeAttr("d-readmore-controls-id").unbind("click"), t.removeData("dReadmore"), t.css({
                    height: "",
                    "transition-property": "",
                    "transition-duration": "",
                    "transition-timing-function": ""
                }).removeAttr("id").removeAttr("d-readmore-expanded").html(t.find(".d-readmove_text-wrapp").html())
            })
        }
    };
    e.fn.dReadmore = function (t) {
        return d[t] ? d[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("The method named " + t + " does not exist for dReadmore") : d.init.apply(this, arguments)
    }
}(jQuery);