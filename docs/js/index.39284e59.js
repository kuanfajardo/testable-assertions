(function(e) {
  function t(t) {
      for (var r, n, a = t[0], h = t[1], s = t[2], u = 0, l = []; u < a.length; u++) n = a[u], Object.prototype.hasOwnProperty.call(o, n) && o[n] && l.push(o[n][0]), o[n] = 0;
      for (r in h) Object.prototype.hasOwnProperty.call(h, r) && (e[r] = h[r]);
      g && g(t);
      while (l.length) l.shift()();
      return c.push.apply(c, s || []), i()
  }

  function i() {
      for (var e, t = 0; t < c.length; t++) {
          for (var i = c[t], r = !0, n = 1; n < i.length; n++) {
              var a = i[n];
              0 !== o[a] && (r = !1)
          }
          r && (c.splice(t--, 1), e = h(h.s = i[0]))
      }
      return e
  }
  var r = {},
      n = {
          index: 0
      },
      o = {
          index: 0
      },
      c = [];

  function a(e) {
      return h.p + "js/" + ({
          "documentation-topic~topic~tutorials-overview": "documentation-topic~topic~tutorials-overview",
          "documentation-topic": "documentation-topic",
          topic: "topic",
          "tutorials-overview": "tutorials-overview",
          "highlight-js-1c": "highlight-js-1c",
          "highlight-js-asciidoc": "highlight-js-asciidoc",
          "highlight-js-bash": "highlight-js-bash",
          "highlight-js-basic": "highlight-js-basic",
          "highlight-js-c": "highlight-js-c",
          "highlight-js-c-like": "highlight-js-c-like",
          "highlight-js-cpp": "highlight-js-cpp",
          "highlight-js-css": "highlight-js-css",
          "highlight-js-custom-markdown": "highlight-js-custom-markdown",
          "highlight-js-custom-swift": "highlight-js-custom-swift",
          "highlight-js-diff": "highlight-js-diff",
          "highlight-js-http": "highlight-js-http",
          "highlight-js-java": "highlight-js-java",
          "highlight-js-javascript": "highlight-js-javascript",
          "highlight-js-json": "highlight-js-json",
          "highlight-js-llvm": "highlight-js-llvm",
          "highlight-js-markdown": "highlight-js-markdown",
          "highlight-js-objectivec": "highlight-js-objectivec",
          "highlight-js-perl": "highlight-js-perl",
          "highlight-js-php": "highlight-js-php",
          "highlight-js-purebasic": "highlight-js-purebasic",
          "highlight-js-python": "highlight-js-python",
          "highlight-js-ruby": "highlight-js-ruby",
          "highlight-js-scss": "highlight-js-scss",
          "highlight-js-swift": "highlight-js-swift",
          "highlight-js-xml": "highlight-js-xml"
      } [e] || e) + "." + {
          "documentation-topic~topic~tutorials-overview": "5ca5b123",
          "documentation-topic": "415a54af",
          topic: "0015e906",
          "tutorials-overview": "822496a2",
          "chunk-2d0d3105": "459bf725",
          "highlight-js-1c": "2c59dca0",
          "highlight-js-asciidoc": "7f40cd30",
          "highlight-js-bash": "92be885d",
          "highlight-js-basic": "2d843289",
          "highlight-js-c": "59774b44",
          "highlight-js-c-like": "58918e6f",
          "highlight-js-cpp": "c058fcc1",
          "highlight-js-css": "e32da283",
          "highlight-js-custom-markdown": "4eb36d67",
          "highlight-js-custom-swift": "b1c7f5a8",
          "highlight-js-diff": "8da5bb44",
          "highlight-js-http": "ae4c6f22",
          "highlight-js-java": "52580cb9",
          "highlight-js-javascript": "fe24b836",
          "highlight-js-json": "0682e56b",
          "highlight-js-llvm": "ddaa176e",
          "highlight-js-markdown": "451c845b",
          "highlight-js-objectivec": "39b4c2e9",
          "highlight-js-perl": "13b84c62",
          "highlight-js-php": "6e724b55",
          "highlight-js-purebasic": "0b69840f",
          "highlight-js-python": "7d8498b9",
          "highlight-js-ruby": "9cfa3f9d",
          "highlight-js-scss": "1aaa4301",
          "highlight-js-swift": "da974c00",
          "highlight-js-xml": "b9e88ce3"
      } [e] + ".js"
  }

  function h(t) {
      if (r[t]) return r[t].exports;
      var i = r[t] = {
          i: t,
          l: !1,
          exports: {}
      };
      return e[t].call(i.exports, i, i.exports, h), i.l = !0, i.exports
  }
  h.e = function(e) {
      var t = [],
          i = {
              "documentation-topic~topic~tutorials-overview": 1,
              "documentation-topic": 1,
              topic: 1,
              "tutorials-overview": 1
          };
      n[e] ? t.push(n[e]) : 0 !== n[e] && i[e] && t.push(n[e] = new Promise((function(t, i) {
          for (var r = "css/" + ({
                  "documentation-topic~topic~tutorials-overview": "documentation-topic~topic~tutorials-overview",
                  "documentation-topic": "documentation-topic",
                  topic: "topic",
                  "tutorials-overview": "tutorials-overview",
                  "highlight-js-1c": "highlight-js-1c",
                  "highlight-js-asciidoc": "highlight-js-asciidoc",
                  "highlight-js-bash": "highlight-js-bash",
                  "highlight-js-basic": "highlight-js-basic",
                  "highlight-js-c": "highlight-js-c",
                  "highlight-js-c-like": "highlight-js-c-like",
                  "highlight-js-cpp": "highlight-js-cpp",
                  "highlight-js-css": "highlight-js-css",
                  "highlight-js-custom-markdown": "highlight-js-custom-markdown",
                  "highlight-js-custom-swift": "highlight-js-custom-swift",
                  "highlight-js-diff": "highlight-js-diff",
                  "highlight-js-http": "highlight-js-http",
                  "highlight-js-java": "highlight-js-java",
                  "highlight-js-javascript": "highlight-js-javascript",
                  "highlight-js-json": "highlight-js-json",
                  "highlight-js-llvm": "highlight-js-llvm",
                  "highlight-js-markdown": "highlight-js-markdown",
                  "highlight-js-objectivec": "highlight-js-objectivec",
                  "highlight-js-perl": "highlight-js-perl",
                  "highlight-js-php": "highlight-js-php",
                  "highlight-js-purebasic": "highlight-js-purebasic",
                  "highlight-js-python": "highlight-js-python",
                  "highlight-js-ruby": "highlight-js-ruby",
                  "highlight-js-scss": "highlight-js-scss",
                  "highlight-js-swift": "highlight-js-swift",
                  "highlight-js-xml": "highlight-js-xml"
              } [e] || e) + "." + {
                  "documentation-topic~topic~tutorials-overview": "e5f069f7",
                  "documentation-topic": "a4cce634",
                  topic: "d4e7daee",
                  "tutorials-overview": "c95b1de1",
                  "chunk-2d0d3105": "31d6cfe0",
                  "highlight-js-1c": "31d6cfe0",
                  "highlight-js-asciidoc": "31d6cfe0",
                  "highlight-js-bash": "31d6cfe0",
                  "highlight-js-basic": "31d6cfe0",
                  "highlight-js-c": "31d6cfe0",
                  "highlight-js-c-like": "31d6cfe0",
                  "highlight-js-cpp": "31d6cfe0",
                  "highlight-js-css": "31d6cfe0",
                  "highlight-js-custom-markdown": "31d6cfe0",
                  "highlight-js-custom-swift": "31d6cfe0",
                  "highlight-js-diff": "31d6cfe0",
                  "highlight-js-http": "31d6cfe0",
                  "highlight-js-java": "31d6cfe0",
                  "highlight-js-javascript": "31d6cfe0",
                  "highlight-js-json": "31d6cfe0",
                  "highlight-js-llvm": "31d6cfe0",
                  "highlight-js-markdown": "31d6cfe0",
                  "highlight-js-objectivec": "31d6cfe0",
                  "highlight-js-perl": "31d6cfe0",
                  "highlight-js-php": "31d6cfe0",
                  "highlight-js-purebasic": "31d6cfe0",
                  "highlight-js-python": "31d6cfe0",
                  "highlight-js-ruby": "31d6cfe0",
                  "highlight-js-scss": "31d6cfe0",
                  "highlight-js-swift": "31d6cfe0",
                  "highlight-js-xml": "31d6cfe0"
              } [e] + ".css", o = h.p + r, c = document.getElementsByTagName("link"), a = 0; a < c.length; a++) {
              var s = c[a],
                  u = s.getAttribute("data-href") || s.getAttribute("href");
              if ("stylesheet" === s.rel && (u === r || u === o)) return t()
          }
          var l = document.getElementsByTagName("style");
          for (a = 0; a < l.length; a++) {
              s = l[a], u = s.getAttribute("data-href");
              if (u === r || u === o) return t()
          }
          var g = document.createElement("link");
          g.rel = "stylesheet", g.type = "text/css", g.onload = t, g.onerror = function(t) {
              var r = t && t.target && t.target.src || o,
                  c = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
              c.code = "CSS_CHUNK_LOAD_FAILED", c.request = r, delete n[e], g.parentNode.removeChild(g), i(c)
          }, g.href = o;
          var f = document.getElementsByTagName("head")[0];
          f.appendChild(g)
      })).then((function() {
          n[e] = 0
      })));
      var r = o[e];
      if (0 !== r)
          if (r) t.push(r[2]);
          else {
              var c = new Promise((function(t, i) {
                  r = o[e] = [t, i]
              }));
              t.push(r[2] = c);
              var s, u = document.createElement("script");
              u.charset = "utf-8", u.timeout = 120, h.nc && u.setAttribute("nonce", h.nc), u.src = a(e);
              var l = new Error;
              s = function(t) {
                  u.onerror = u.onload = null, clearTimeout(g);
                  var i = o[e];
                  if (0 !== i) {
                      if (i) {
                          var r = t && ("load" === t.type ? "missing" : t.type),
                              n = t && t.target && t.target.src;
                          l.message = "Loading chunk " + e + " failed.\n(" + r + ": " + n + ")", l.name = "ChunkLoadError", l.type = r, l.request = n, i[1](l)
                      }
                      o[e] = void 0
                  }
              };
              var g = setTimeout((function() {
                  s({
                      type: "timeout",
                      target: u
                  })
              }), 12e4);
              u.onerror = u.onload = s, document.head.appendChild(u)
          } return Promise.all(t)
  }, h.m = e, h.c = r, h.d = function(e, t, i) {
      h.o(e, t) || Object.defineProperty(e, t, {
          enumerable: !0,
          get: i
      })
  }, h.r = function(e) {
      "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
      }), Object.defineProperty(e, "__esModule", {
          value: !0
      })
  }, h.t = function(e, t) {
      if (1 & t && (e = h(e)), 8 & t) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (h.r(i), Object.defineProperty(i, "default", {
              enumerable: !0,
              value: e
          }), 2 & t && "string" != typeof e)
          for (var r in e) h.d(i, r, function(t) {
              return e[t]
          }.bind(null, r));
      return i
  }, h.n = function(e) {
      var t = e && e.__esModule ? function() {
          return e["default"]
      } : function() {
          return e
      };
      return h.d(t, "a", t), t
  }, h.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
  }, h.p = "/testable-assertions/", h.oe = function(e) {
      throw console.error(e), e
  };
  var s = window["webpackJsonp"] = window["webpackJsonp"] || [],
      u = s.push.bind(s);
  s.push = t, s = s.slice();
  for (var l = 0; l < s.length; l++) t(s[l]);
  var g = u;
  c.push([0, "chunk-vendors"]), i()
})({
  0: function(e, t, i) {
      e.exports = i("f161")
  },
  "002d": function(e, t, i) {
      "use strict";
      i.d(t, "a", (function() {
          return a
      })), i.d(t, "c", (function() {
          return h
      })), i.d(t, "d", (function() {
          return s
      })), i.d(t, "b", (function() {
          return u
      }));
      var r = i("768b"),
          n = (i("a481"), /(?:\s+|[`"<>])/g),
          o = /^-+/,
          c = /["'&<>]/g;

      function a(e) {
          return e.trim().replace(n, "-").replace(o, "").toLowerCase()
      }

      function h(e) {
          var t = function(e) {
              return {
                  '"': "&quot;",
                  "'": "&apos;",
                  "&": "&amp;",
                  "<": "&lt;",
                  ">": "&gt;"
              } [e] || e
          };
          return e.replace(c, t)
      }

      function s(e) {
          return 1 === e.length ? "" : "s"
      }

      function u(e) {
          var t = /#(\d)(.*)/.exec(e);
          if (null === t) return e;
          var i = t.slice(1),
              n = Object(r["a"])(i, 2),
              o = n[0],
              c = n[1],
              a = "\\3".concat(o, " ");
          return "#".concat(a).concat(c)
      }
  },
  1412: function(e, t, i) {},
  "1fad": function(e, t, i) {
      "use strict";
      i("1412")
  },
  3908: function(e, t, i) {
      "use strict";

      function r(e) {
          var t = null,
              i = e - 1,
              r = new Promise((function(e) {
                  t = e
              }));
          return requestAnimationFrame((function e() {
              i -= 1, i <= 0 ? t() : requestAnimationFrame(e)
          })), r
      }
      i.d(t, "a", (function() {
          return r
      }))
  },
  "3ac0": function(e, t, i) {
      "use strict";
      i("4be3")
  },
  "3d4f": function(e, t, i) {},
  "4be3": function(e, t, i) {},
  "5c0b": function(e, t, i) {
      "use strict";
      i("e332")
  },
  6842: function(e, t, i) {
      "use strict";
      i.d(t, "c", (function() {
          return o
      })), i.d(t, "a", (function() {
          return c
      })), i.d(t, "b", (function() {
          return h
      }));
      i("96cf");
      var r = i("3b8d");

      function n(e, t, i) {
          var r, n = e,
              o = t;
          for ("string" === typeof o && (o = [o]), r = 0; r < o.length; r += 1) {
              if ("undefined" === typeof n[o[r]]) return i;
              n = n[o[r]]
          }
          return n
      }
      var o = {
          meta: {},
          theme: {},
          features: {}
      };

      function c() {
          return a.apply(this, arguments)
      }

      function a() {
          return a = Object(r["a"])(regeneratorRuntime.mark((function e() {
              var t;
              return regeneratorRuntime.wrap((function(e) {
                  while (1) switch (e.prev = e.next) {
                      case 0:
                          return t = new URL("".concat("", "theme-settings.json"), window.location.href), e.abrupt("return", fetch(t.href).then((function(e) {
                              return e.json()
                          })).catch((function() {
                              return {}
                          })));
                      case 2:
                      case "end":
                          return e.stop()
                  }
              }), e)
          }))), a.apply(this, arguments)
      }
      var h = function(e, t) {
          return n(o, e, t)
      }
  },
  "6c4a": function(e, t, i) {},
  "6f8a": function(e, t, i) {},
  "821b": function(e, t, i) {
      "use strict";
      t["a"] = {
          auto: {
              label: "Auto",
              value: "auto"
          },
          dark: {
              label: "Dark",
              value: "dark"
          },
          light: {
              label: "Light",
              value: "light"
          }
      }
  },
  "8a44": function(e, t, i) {
      "use strict";
      i("6c4a")
  },
  "90dd": function(e, t, i) {
      "use strict";
      i("3d4f")
  },
  9895: function(e, t, i) {
      "use strict";
      i.d(t, "b", (function() {
          return r
      })), i.d(t, "a", (function() {
          return n
      }));
      var r = "not-found",
          n = "documentation-topic"
  },
  c12e: function(e, t, i) {
      "use strict";
      i("6f8a")
  },
  d26a: function(e, t, i) {
      "use strict";
      i.d(t, "c", (function() {
          return s
      })), i.d(t, "b", (function() {
          return u
      })), i.d(t, "a", (function() {
          return l
      }));
      i("c5f6"), i("ac4d"), i("8a81");
      var r = i("53ca"),
          n = i("a8db"),
          o = (i("4917"), i("28a5"), i("768b")),
          c = (i("ac6a"), i("ffc1"), {
              input: "input",
              tags: "tags"
          });

      function a(e) {
          var t = h(e, "string");
          return "symbol" === Object(r["a"])(t) ? t : String(t)
      }

      function h(e, t) {
          if ("object" !== Object(r["a"])(e) || null === e) return e;
          var i = e[Symbol.toPrimitive];
          if (void 0 !== i) {
              var n = i.call(e, t || "default");
              if ("object" !== Object(r["a"])(n)) return n;
              throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === t ? String : Number)(e)
      }

      function s() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Object.entries(e).reduce((function(e, t) {
              var i = Object(o["a"])(t, 2),
                  r = i[0],
                  n = i[1];
              return n ? e.concat("".concat(encodeURIComponent(r), "=").concat(encodeURIComponent(n))) : e
          }), []).join("&")
      }

      function u(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              i = t.changes,
              r = t.language,
              n = e.split("#"),
              c = Object(o["a"])(n, 2),
              a = c[0],
              h = c[1],
              u = a.match(/\?.*/),
              l = s({
                  changes: i,
                  language: r
              }),
              g = u ? "&" : "?",
              f = h ? a : e,
              d = l ? "".concat(g).concat(l) : "",
              p = h ? "#".concat(h) : "";
          return "".concat(f).concat(d).concat(p)
      }

      function l(e, t) {
          var i = e.query;
          i = void 0 === i ? {} : i;
          var r = c.input,
              o = c.tags,
              h = (i.changes, i[r], i[o], Object(n["a"])(i, ["changes", r, o].map(a))),
              s = t.query;
          s = void 0 === s ? {} : s;
          var u = c.input,
              l = c.tags,
              g = (s.changes, s[u], s[l], Object(n["a"])(s, ["changes", u, l].map(a)));
          return e.name === t.name && JSON.stringify({
              path: e.path,
              query: h
          }) === JSON.stringify({
              path: t.path,
              query: g
          })
      }
  },
  d369: function(e, t, i) {
      "use strict";
      i("8e6e");
      var r = i("bd86");
      i("ac6a"), i("456d");

      function n(e, t) {
          var i = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              t && (r = r.filter((function(t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable
              }))), i.push.apply(i, r)
          }
          return i
      }

      function o(e) {
          for (var t = 1; t < arguments.length; t++) {
              var i = null != arguments[t] ? arguments[t] : {};
              t % 2 ? n(Object(i), !0).forEach((function(t) {
                  Object(r["a"])(e, t, i[t])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : n(Object(i)).forEach((function(t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
              }))
          }
          return e
      }
      var c = {
              getItem: function(e) {
                  try {
                      return localStorage.getItem(e)
                  } catch (t) {
                      return null
                  }
              },
              setItem: function(e, t) {
                  try {
                      localStorage.setItem(e, t)
                  } catch (i) {}
              }
          },
          a = {
              preferredColorScheme: "developer.setting.preferredColorScheme",
              preferredLanguage: "docs.setting.preferredLanguage"
          },
          h = {
              preferredColorScheme: "docs.setting.preferredColorScheme"
          };
      t["a"] = Object.defineProperties({}, Object.keys(a).reduce((function(e, t) {
          return o(o({}, e), {}, Object(r["a"])({}, t, {
              get: function() {
                  var e = h[t],
                      i = c.getItem(a[t]);
                  return e ? i || c.getItem(e) : i
              },
              set: function(e) {
                  return c.setItem(a[t], e)
              }
          }))
      }), {}))
  },
  e332: function(e, t, i) {},
  e425: function(e, t, i) {
      "use strict";
      var r = i("821b"),
          n = i("d369"),
          o = "undefined" !== typeof window.matchMedia && [r["a"].light.value, r["a"].dark.value, "no-preference"].some((function(e) {
              return window.matchMedia("(prefers-color-scheme: ".concat(e, ")")).matches
          })),
          c = o ? r["a"].auto : r["a"].light;
      t["a"] = {
          state: {
              preferredColorScheme: n["a"].preferredColorScheme || c.value,
              supportsAutoColorScheme: o,
              systemColorScheme: r["a"].light.value
          },
          setPreferredColorScheme: function(e) {
              this.state.preferredColorScheme = e, n["a"].preferredColorScheme = e
          },
          setSystemColorScheme: function(e) {
              this.state.systemColorScheme = e
          }
      }
  },
  f161: function(e, t, i) {
      "use strict";
      i.r(t);
      i("cadf"), i("551c"), i("f751"), i("097d");
      var r = i("2b0e"),
          n = i("8c4f"),
          o = function() {
              var e = this,
                  t = e.$createElement,
                  i = e._self._c || t;
              return i("div", {
                  class: {
                      fromkeyboard: e.fromKeyboard
                  },
                  attrs: {
                      id: "app"
                  }
              }, [i("a", {
                  attrs: {
                      href: "#main",
                      id: "skip-nav"
                  }
              }, [e._v("Skip Navigation")]), i("InitialLoadingPlaceholder"), e._t("default", [i("router-view"), i("Footer")], {
                  isTargetIDE: e.isTargetIDE
              })], 2)
          },
          c = [],
          a = i("768b"),
          h = (i("ffc1"), i("ac6a"), i("96cf"), i("3b8d")),
          s = i("e425"),
          u = i("821b"),
          l = function() {
              var e = this,
                  t = e.$createElement,
                  i = e._self._c || t;
              return i("footer", {
                  staticClass: "footer"
              }, [i("div", {
                  staticClass: "row"
              }, [i("ColorSchemeToggle")], 1)])
          },
          g = [],
          f = function() {
              var e = this,
                  t = e.$createElement,
                  i = e._self._c || t;
              return i("div", {
                  staticClass: "color-scheme-toggle",
                  attrs: {
                      "aria-label": "Select a color scheme preference",
                      role: "radiogroup",
                      tabindex: "0"
                  }
              }, e._l(e.options, (function(t) {
                  return i("label", {
                      key: t.value
                  }, [i("input", {
                      attrs: {
                          type: "radio"
                      },
                      domProps: {
                          checked: t.value == e.preferredColorScheme,
                          value: t.value
                      },
                      on: {
                          input: e.setPreferredColorScheme
                      }
                  }), i("div", {
                      staticClass: "text"
                  }, [e._v(e._s(t.label))])])
              })), 0)
          },
          d = [],
          p = i("75fc"),
          m = {
              name: "ColorSchemeToggle",
              data: function() {
                  return {
                      appState: s["a"].state
                  }
              },
              computed: {
                  options: function(e) {
                      var t = e.supportsAutoColorScheme;
                      return [u["a"].light, u["a"].dark].concat(Object(p["a"])(t ? [u["a"].auto] : []))
                  },
                  preferredColorScheme: function(e) {
                      var t = e.appState;
                      return t.preferredColorScheme
                  },
                  supportsAutoColorScheme: function(e) {
                      var t = e.appState;
                      return t.supportsAutoColorScheme
                  }
              },
              methods: {
                  setPreferredColorScheme: function(e) {
                      s["a"].setPreferredColorScheme(e.target.value)
                  }
              },
              watch: {
                  preferredColorScheme: {
                      immediate: !0,
                      handler: function(e) {
                          document.body.dataset.colorScheme = e
                      }
                  }
              }
          },
          j = m,
          v = (i("1fad"), i("2877")),
          b = Object(v["a"])(j, f, d, !1, null, "19ac6542", null),
          w = b.exports,
          y = {
              name: "Footer",
              components: {
                  ColorSchemeToggle: w
              }
          },
          O = y,
          S = (i("c12e"), Object(v["a"])(O, l, g, !1, null, "5abaec28", null)),
          E = S.exports,
          k = function() {
              var e = this,
                  t = e.$createElement,
                  i = e._self._c || t;
              return e.loaded ? e._e() : i("div", {
                  staticClass: "InitialLoadingPlaceholder",
                  attrs: {
                      id: "loading-placeholder"
                  }
              })
          },
          P = [],
          C = {
              name: "InitialLoadingPlaceholder",
              data: function() {
                  return {
                      loaded: !1
                  }
              },
              created: function() {
                  var e = this;
                  this.$router.onReady((function() {
                      e.loaded = !0
                  }))
              }
          },
          _ = C,
          x = (i("8a44"), Object(v["a"])(_, k, P, !1, null, "d9970b1a", null)),
          T = x.exports,
          D = i("6842"),
          L = i("7618");

      function A(e, t) {
          return e && "object" === Object(L["a"])(e) && Object.prototype.hasOwnProperty.call(e, t) && "string" === typeof e[t]
      }

      function R(e, t, i, r) {
          if (!t || "object" !== Object(L["a"])(t) || r && (A(t, "light") || A(t, "dark"))) {
              var n = t;
              if (A(t, r) && (n = t[r]), "object" === Object(L["a"])(n)) return;
              i[e] = n
          } else Object.entries(t).forEach((function(t) {
              var n = Object(a["a"])(t, 2),
                  o = n[0],
                  c = n[1],
                  h = [e, o].join("-");
              R(h, c, i, r)
          }))
      }

      function I(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "light",
              i = {},
              r = e || {};
          return R("-", r, i, t), i
      }
      var N = {
              name: "CoreApp",
              components: {
                  Footer: E,
                  InitialLoadingPlaceholder: T
              },
              provide: function() {
                  return {
                      isTargetIDE: this.isTargetIDE,
                      performanceMetricsEnabled: "true" === Object({
                          NODE_ENV: "production",
                          VUE_APP_TITLE: "Documentation",
                          BASE_URL: "/testable-assertions/"
                      }).VUE_APP_PERFORMANCE_ENABLED
                  }
              },
              data: function() {
                  return {
                      appState: s["a"].state,
                      fromKeyboard: !1,
                      isTargetIDE: "ide" === Object({
                          NODE_ENV: "production",
                          VUE_APP_TITLE: "Documentation",
                          BASE_URL: "/testable-assertions/"
                      }).VUE_APP_TARGET,
                      themeSettings: D["c"]
                  }
              },
              computed: {
                  currentColorScheme: function(e) {
                      var t = e.appState;
                      return t.systemColorScheme
                  },
                  CSSCustomProperties: function(e) {
                      var t = e.themeSettings,
                          i = e.currentColorScheme;
                      return I(t.theme, i)
                  }
              },
              props: {
                  enableThemeSettings: {
                      type: Boolean,
                      default: !0
                  }
              },
              watch: {
                  CSSCustomProperties: {
                      immediate: !0,
                      handler: function(e) {
                          this.detachStylesFromRoot(e), this.attachStylesToRoot(e)
                      }
                  }
              },
              created: function() {
                  var e = Object(h["a"])(regeneratorRuntime.mark((function e() {
                      return regeneratorRuntime.wrap((function(e) {
                          while (1) switch (e.prev = e.next) {
                              case 0:
                                  if (window.addEventListener("keydown", this.onKeyDown), this.$bridge.on("navigation", this.handleNavigationRequest), !this.enableThemeSettings) {
                                      e.next = 9;
                                      break
                                  }
                                  return e.t0 = Object, e.t1 = this.themeSettings, e.next = 7, Object(D["a"])();
                              case 7:
                                  e.t2 = e.sent, e.t0.assign.call(e.t0, e.t1, e.t2);
                              case 9:
                              case "end":
                                  return e.stop()
                          }
                      }), e, this)
                  })));

                  function t() {
                      return e.apply(this, arguments)
                  }
                  return t
              }(),
              mounted: function() {
                  (document.querySelector(".footer-current-year") || {}).innerText = (new Date).getFullYear(), this.attachColorSchemeListeners()
              },
              beforeDestroy: function() {
                  this.fromKeyboard ? window.removeEventListener("mousedown", this.onMouseDown) : window.removeEventListener("keydown", this.onKeyDown), this.$bridge.off("navigation", this.handleNavigationRequest), this.detachStylesFromRoot(this.CSSCustomProperties)
              },
              methods: {
                  onKeyDown: function() {
                      this.fromKeyboard = !0, window.addEventListener("mousedown", this.onMouseDown), window.removeEventListener("keydown", this.onKeyDown)
                  },
                  onMouseDown: function() {
                      this.fromKeyboard = !1, window.addEventListener("keydown", this.onKeyDown), window.removeEventListener("mousedown", this.onMouseDown)
                  },
                  handleNavigationRequest: function(e) {
                      this.$router.push(e)
                  },
                  attachColorSchemeListeners: function() {
                      var e = this;
                      if (window.matchMedia) {
                          var t = window.matchMedia("(prefers-color-scheme: dark)");
                          t.addListener(this.onColorSchemePreferenceChange), this.$once("hook:beforeDestroy", (function() {
                              t.removeListener(e.onColorSchemePreferenceChange)
                          })), this.onColorSchemePreferenceChange(t)
                      }
                  },
                  onColorSchemePreferenceChange: function(e) {
                      var t = e.matches,
                          i = t ? u["a"].dark : u["a"].light;
                      s["a"].setSystemColorScheme(i.value)
                  },
                  attachStylesToRoot: function(e) {
                      var t = document.documentElement;
                      Object.entries(e).filter((function(e) {
                          var t = Object(a["a"])(e, 2),
                              i = t[1];
                          return Boolean(i)
                      })).forEach((function(e) {
                          var i = Object(a["a"])(e, 2),
                              r = i[0],
                              n = i[1];
                          t.style.setProperty(r, n)
                      }))
                  },
                  detachStylesFromRoot: function(e) {
                      var t = document.documentElement;
                      Object.entries(e).forEach((function(e) {
                          var i = Object(a["a"])(e, 1),
                              r = i[0];
                          t.style.removeProperty(r)
                      }))
                  }
              }
          },
          $ = N,
          M = (i("5c0b"), i("90dd"), Object(v["a"])($, o, c, !1, null, "5df41514", null)),
          U = M.exports,
          q = (i("5df3"), i("4f7f"), i("d225")),
          F = i("b0b4"),
          V = function() {
              function e() {
                  Object(q["a"])(this, e), this.$send = function() {}
              }
              return Object(F["a"])(e, [{
                  key: "send",
                  value: function(e) {
                      this.$send(e)
                  }
              }]), e
          }(),
          B = function() {
              function e() {
                  Object(q["a"])(this, e);
                  var t = window,
                      i = t.webkit;
                  i = void 0 === i ? {} : i;
                  var r = i.messageHandlers;
                  r = void 0 === r ? {} : r;
                  var n = r.bridge,
                      o = void 0 === n ? {} : n;
                  this.bridge = o;
                  var c = o.postMessage,
                      a = void 0 === c ? function() {} : c;
                  this.$send = a.bind(o)
              }
              return Object(F["a"])(e, [{
                  key: "send",
                  value: function(e) {
                      this.$send(e)
                  }
              }]), e
          }(),
          K = function() {
              function e() {
                  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new V;
                  Object(q["a"])(this, e), this.backend = t, this.listeners = {}
              }
              return Object(F["a"])(e, [{
                  key: "send",
                  value: function(e) {
                      this.backend.send(e)
                  }
              }, {
                  key: "receive",
                  value: function(e) {
                      this.emit(e.type, e.data)
                  }
              }, {
                  key: "emit",
                  value: function(e, t) {
                      this.listeners[e] && this.listeners[e].forEach((function(e) {
                          return e(t)
                      }))
                  }
              }, {
                  key: "on",
                  value: function(e, t) {
                      this.listeners[e] || (this.listeners[e] = new Set), this.listeners[e].add(t)
                  }
              }, {
                  key: "off",
                  value: function(e, t) {
                      this.listeners[e] && this.listeners[e].delete(t)
                  }
              }]), e
          }(),
          G = {
              install: function(e, t) {
                  var i;
                  i = t.performanceMetricsEnabled || "ide" === t.appTarget ? new B : new V, e.prototype.$bridge = new K(i)
              }
          };

      function J(e, t) {
          var i = t.value,
              r = void 0 !== i && i;
          e.style.display = r ? "none" : ""
      }
      var H = {
          hide: J
      };

      function Y(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              i = t.performanceMetrics,
              r = void 0 !== i && i;
          e.config.productionTip = !1, e.directive("hide", H.hide), e.use(G, {
              appTarget: Object({
                  NODE_ENV: "production",
                  VUE_APP_TITLE: "Documentation",
                  BASE_URL: "/testable-assertions/"
              }).VUE_APP_TARGET,
              performanceMetricsEnabled: r
          }), window.bridge = e.prototype.$bridge, e.config.performance = r
      }
      i("8e6e"), i("456d"), i("a481");
      var X = i("bd86"),
          z = (i("6762"), i("2fdb"), i("386d"), 52),
          Q = i("9895"),
          W = i("3908"),
          Z = i("002d"),
          ee = i("d26a");

      function te() {
          var e = window,
              t = e.location;
          return t.pathname + t.search + t.hash
      }

      function ie(e, t, i) {
          return re.apply(this, arguments)
      }

      function re() {
          return re = Object(h["a"])(regeneratorRuntime.mark((function e(t, i, r) {
              var n, o, c, a, h, s, u, l;
              return regeneratorRuntime.wrap((function(e) {
                  while (1) switch (e.prev = e.next) {
                      case 0:
                          if (!r) {
                              e.next = 4;
                              break
                          }
                          return e.next = 3, this.app.$nextTick();
                      case 3:
                          return e.abrupt("return", r);
                      case 4:
                          if (!t.hash) {
                              e.next = 12;
                              break
                          }
                          return n = t.name, o = t.query, c = t.hash, a = n.includes(Q["a"]), h = !!o.changes, s = a && h ? z : 0, u = z + s, l = "ide" === Object({
                              NODE_ENV: "production",
                              VUE_APP_TITLE: "Documentation",
                              BASE_URL: "/testable-assertions"
                          }).VUE_APP_TARGET ? 0 : u, e.abrupt("return", {
                              selector: Object(Z["b"])(c),
                              offset: {
                                  x: 0,
                                  y: l
                              }
                          });
                      case 12:
                          if (!Object(ee["a"])(t, i)) {
                              e.next = 14;
                              break
                          }
                          return e.abrupt("return", void 0);
                      case 14:
                          return e.abrupt("return", {
                              x: 0,
                              y: 0
                          });
                      case 15:
                      case "end":
                          return e.stop()
                  }
              }), e, this)
          }))), re.apply(this, arguments)
      }

      function ne() {
          return oe.apply(this, arguments)
      }

      function oe() {
          return oe = Object(h["a"])(regeneratorRuntime.mark((function e() {
              var t;
              return regeneratorRuntime.wrap((function(e) {
                  while (1) switch (e.prev = e.next) {
                      case 0:
                          if (t = window.sessionStorage.getItem("scrollPosition"), t) {
                              e.next = 3;
                              break
                          }
                          return e.abrupt("return");
                      case 3:
                          e.prev = 3, t = JSON.parse(t), e.next = 11;
                          break;
                      case 7:
                          return e.prev = 7, e.t0 = e["catch"](3), console.error("Error parsing scrollPosition from sessionStorage", e.t0), e.abrupt("return");
                      case 11:
                          if (te() !== t.location) {
                              e.next = 15;
                              break
                          }
                          return e.next = 14, Object(W["a"])(2);
                      case 14:
                          window.scrollTo(t.x, t.y);
                      case 15:
                      case "end":
                          return e.stop()
                  }
              }), e, null, [
                  [3, 7]
              ])
          }))), oe.apply(this, arguments)
      }

      function ce() {
          window.location.hash || sessionStorage.setItem("scrollPosition", JSON.stringify({
              x: window.pageXOffset,
              y: window.pageYOffset,
              location: te()
          }))
      }
      var ae = function() {
              var e = this,
                  t = e.$createElement,
                  i = e._self._c || t;
              return i("GenericError")
          },
          he = [],
          se = function() {
              var e = this,
                  t = e.$createElement,
                  i = e._self._c || t;
              return i("div", {
                  staticClass: "generic-error"
              }, [i("div", {
                  staticClass: "container"
              }, [i("h1", {
                  staticClass: "title error-content"
              }, [e._v(e._s(e.message))]), e._t("default")], 2)])
          },
          ue = [],
          le = {
              name: "GenericError",
              props: {
                  message: {
                      type: String,
                      default: "An unknown error occurred."
                  }
              }
          },
          ge = le,
          fe = (i("3ac0"), Object(v["a"])(ge, se, ue, !1, null, "14cd934e", null)),
          de = fe.exports,
          pe = {
              name: "ServerError",
              components: {
                  GenericError: de
              }
          },
          me = pe,
          je = Object(v["a"])(me, ae, he, !1, null, null, null),
          ve = je.exports,
          be = function() {
              var e = this,
                  t = e.$createElement,
                  i = e._self._c || t;
              return i("GenericError", {
                  attrs: {
                      message: "The page you’re looking for can’t be found."
                  }
              }, [e._t("default")], 2)
          },
          we = [],
          ye = {
              name: "NotFound",
              components: {
                  GenericError: de
              }
          },
          Oe = ye,
          Se = Object(v["a"])(Oe, be, we, !1, null, null, null),
          Ee = Se.exports,
          ke = [{
              path: "/tutorials/:id",
              name: "tutorials-overview",
              component: function() {
                  return Promise.all([i.e("documentation-topic~topic~tutorials-overview"), i.e("tutorials-overview")]).then(i.bind(null, "f025"))
              }
          }, {
              path: "/tutorials/:id/*",
              name: "topic",
              component: function() {
                  return Promise.all([i.e("documentation-topic~topic~tutorials-overview"), i.e("topic")]).then(i.bind(null, "3213"))
              }
          }, {
              path: "/documentation/*",
              name: Q["a"],
              component: function() {
                  return Promise.all([i.e("documentation-topic~topic~tutorials-overview"), i.e("documentation-topic")]).then(i.bind(null, "f8ac"))
              }
          }, {
              path: "*",
              name: Q["b"],
              component: Ee
          }, {
              path: "*",
              name: "server-error",
              component: ve
          }];

      function Pe(e, t) {
          var i = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              t && (r = r.filter((function(t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable
              }))), i.push.apply(i, r)
          }
          return i
      }

      function Ce(e) {
          for (var t = 1; t < arguments.length; t++) {
              var i = null != arguments[t] ? arguments[t] : {};
              t % 2 ? Pe(Object(i), !0).forEach((function(t) {
                  Object(X["a"])(e, t, i[t])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : Pe(Object(i)).forEach((function(t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
              }))
          }
          return e
      }

      function _e() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              t = new n["a"](Ce(Ce({
                  mode: "history",
                  base: "/testable-assertions/",
                  scrollBehavior: ie
              }, e), {}, {
                  routes: e.routes || ke
              }));
          return t.onReady((function() {
              "scrollRestoration" in window.history && (window.history.scrollRestoration = "manual"), ne()
          })), t.onError((function(e) {
              var i = e.route,
                  r = void 0 === i ? {
                      path: "/testable-assertions/"
                  } : i;
              t.replace({
                  name: "server-error",
                  params: [r.path]
              })
              console.log(e.route)
              console.log(e.path)
              console.log(i)
              console.log(t)
          })), window.addEventListener("unload", ce), t
      }
      r["default"].use(Y), r["default"].use(n["a"]), new r["default"]({
          router: _e(),
          render: function(e) {
              return e(U)
          }
      }).$mount("#app")
  }
});