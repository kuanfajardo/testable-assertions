(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["documentation-topic~topic~tutorials-overview"], {
      "01c8": function(e, t, n) {
          "use strict";
          n.d(t, "a", (function() {
              return o
          }));
          var r = n("178b"),
              i = n("3953"),
              a = n("e630"),
              s = n("1df6");

          function o(e) {
              return Object(r["a"])(e) || Object(i["a"])(e) || Object(a["a"])(e) || Object(s["a"])()
          }
      },
      "0293": function(e, t, n) {
          var r = n("241e"),
              i = n("53e2");
          n("ce7e")("getPrototypeOf", (function() {
              return function(e) {
                  return i(r(e))
              }
          }))
      },
      "029f": function(e, t, n) {},
      "037e": function(e, t, n) {},
      "061b": function(e, t, n) {
          e.exports = n("fa99")
      },
      "0a49": function(e, t, n) {
          var r = n("9b43"),
              i = n("626a"),
              a = n("4bf8"),
              s = n("9def"),
              o = n("cd1c");
          e.exports = function(e, t) {
              var n = 1 == e,
                  c = 2 == e,
                  u = 3 == e,
                  l = 4 == e,
                  f = 6 == e,
                  h = 5 == e || f,
                  d = t || o;
              return function(t, o, p) {
                  for (var g, b, m = a(t), v = i(m), y = r(o, p, 3), w = s(v.length), j = 0, x = n ? d(t, w) : c ? d(t, 0) : void 0; w > j; j++)
                      if ((h || j in v) && (g = v[j], b = y(g, j, m), e))
                          if (n) x[j] = b;
                          else if (b) switch (e) {
                      case 3:
                          return !0;
                      case 5:
                          return g;
                      case 6:
                          return j;
                      case 2:
                          x.push(g)
                  } else if (l) return !1;
                  return f ? -1 : u || l ? l : x
              }
          }
      },
      "0b64": function(e, t, n) {
          var r = n("f772"),
              i = n("9003"),
              a = n("5168")("species");
          e.exports = function(e) {
              var t;
              return i(e) && (t = e.constructor, "function" != typeof t || t !== Array && !i(t.prototype) || (t = void 0), r(t) && (t = t[a], null === t && (t = void 0))), void 0 === t ? Array : t
          }
      },
      "0c7e": function(e, t, n) {
          "use strict";
          n("e6f0")
      },
      "0f00": function(e, t, n) {
          "use strict";
          var r = function() {
                  var e = this,
                      t = e.$createElement,
                      n = e._self._c || t;
                  return n("div", {
                      staticClass: "row"
                  }, [e._t("default")], 2)
              },
              i = [],
              a = {
                  name: "GridRow"
              },
              s = a,
              o = (n("5fda"), n("2877")),
              c = Object(o["a"])(s, r, i, !1, null, "738fb199", null);
          t["a"] = c.exports
      },
      1020: function(e, t) {
          function n(e) {
              return e instanceof Map ? e.clear = e.delete = e.set = function() {
                  throw new Error("map is read-only")
              } : e instanceof Set && (e.add = e.clear = e.delete = function() {
                  throw new Error("set is read-only")
              }), Object.freeze(e), Object.getOwnPropertyNames(e).forEach((function(t) {
                  var r = e[t];
                  "object" != typeof r || Object.isFrozen(r) || n(r)
              })), e
          }
          var r = n,
              i = n;
          r.default = i;
          class a {
              constructor(e) {
                  void 0 === e.data && (e.data = {}), this.data = e.data, this.isMatchIgnored = !1
              }
              ignoreMatch() {
                  this.isMatchIgnored = !0
              }
          }

          function s(e) {
              return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
          }

          function o(e, ...t) {
              const n = Object.create(null);
              for (const r in e) n[r] = e[r];
              return t.forEach((function(e) {
                  for (const t in e) n[t] = e[t]
              })), n
          }
          const c = "</span>",
              u = e => !!e.kind;
          class l {
              constructor(e, t) {
                  this.buffer = "", this.classPrefix = t.classPrefix, e.walk(this)
              }
              addText(e) {
                  this.buffer += s(e)
              }
              openNode(e) {
                  if (!u(e)) return;
                  let t = e.kind;
                  e.sublanguage || (t = `${this.classPrefix}${t}`), this.span(t)
              }
              closeNode(e) {
                  u(e) && (this.buffer += c)
              }
              value() {
                  return this.buffer
              }
              span(e) {
                  this.buffer += `<span class="${e}">`
              }
          }
          class f {
              constructor() {
                  this.rootNode = {
                      children: []
                  }, this.stack = [this.rootNode]
              }
              get top() {
                  return this.stack[this.stack.length - 1]
              }
              get root() {
                  return this.rootNode
              }
              add(e) {
                  this.top.children.push(e)
              }
              openNode(e) {
                  const t = {
                      kind: e,
                      children: []
                  };
                  this.add(t), this.stack.push(t)
              }
              closeNode() {
                  if (this.stack.length > 1) return this.stack.pop()
              }
              closeAllNodes() {
                  while (this.closeNode());
              }
              toJSON() {
                  return JSON.stringify(this.rootNode, null, 4)
              }
              walk(e) {
                  return this.constructor._walk(e, this.rootNode)
              }
              static _walk(e, t) {
                  return "string" === typeof t ? e.addText(t) : t.children && (e.openNode(t), t.children.forEach(t => this._walk(e, t)), e.closeNode(t)), e
              }
              static _collapse(e) {
                  "string" !== typeof e && e.children && (e.children.every(e => "string" === typeof e) ? e.children = [e.children.join("")] : e.children.forEach(e => {
                      f._collapse(e)
                  }))
              }
          }
          class h extends f {
              constructor(e) {
                  super(), this.options = e
              }
              addKeyword(e, t) {
                  "" !== e && (this.openNode(t), this.addText(e), this.closeNode())
              }
              addText(e) {
                  "" !== e && this.add(e)
              }
              addSublanguage(e, t) {
                  const n = e.root;
                  n.kind = t, n.sublanguage = !0, this.add(n)
              }
              toHTML() {
                  const e = new l(this, this.options);
                  return e.value()
              }
              finalize() {
                  return !0
              }
          }

          function d(e) {
              return new RegExp(e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"), "m")
          }

          function p(e) {
              return e ? "string" === typeof e ? e : e.source : null
          }

          function g(...e) {
              const t = e.map(e => p(e)).join("");
              return t
          }

          function b(...e) {
              const t = "(" + e.map(e => p(e)).join("|") + ")";
              return t
          }

          function m(e) {
              return new RegExp(e.toString() + "|").exec("").length - 1
          }

          function v(e, t) {
              const n = e && e.exec(t);
              return n && 0 === n.index
          }
          const y = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

          function w(e, t = "|") {
              let n = 0;
              return e.map(e => {
                  n += 1;
                  const t = n;
                  let r = p(e),
                      i = "";
                  while (r.length > 0) {
                      const e = y.exec(r);
                      if (!e) {
                          i += r;
                          break
                      }
                      i += r.substring(0, e.index), r = r.substring(e.index + e[0].length), "\\" === e[0][0] && e[1] ? i += "\\" + String(Number(e[1]) + t) : (i += e[0], "(" === e[0] && n++)
                  }
                  return i
              }).map(e => `(${e})`).join(t)
          }
          const j = /\b\B/,
              x = "[a-zA-Z]\\w*",
              O = "[a-zA-Z_]\\w*",
              _ = "\\b\\d+(\\.\\d+)?",
              E = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
              k = "\\b(0b[01]+)",
              T = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
              C = (e = {}) => {
                  const t = /^#![ ]*\//;
                  return e.binary && (e.begin = g(t, /.*\b/, e.binary, /\b.*/)), o({
                      className: "meta",
                      begin: t,
                      end: /$/,
                      relevance: 0,
                      "on:begin": (e, t) => {
                          0 !== e.index && t.ignoreMatch()
                      }
                  }, e)
              },
              S = {
                  begin: "\\\\[\\s\\S]",
                  relevance: 0
              },
              N = {
                  className: "string",
                  begin: "'",
                  end: "'",
                  illegal: "\\n",
                  contains: [S]
              },
              R = {
                  className: "string",
                  begin: '"',
                  end: '"',
                  illegal: "\\n",
                  contains: [S]
              },
              L = {
                  begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
              },
              A = function(e, t, n = {}) {
                  const r = o({
                      className: "comment",
                      begin: e,
                      end: t,
                      contains: []
                  }, n);
                  return r.contains.push(L), r.contains.push({
                      className: "doctag",
                      begin: "(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",
                      relevance: 0
                  }), r
              },
              I = A("//", "$"),
              B = A("/\\*", "\\*/"),
              M = A("#", "$"),
              P = {
                  className: "number",
                  begin: _,
                  relevance: 0
              },
              D = {
                  className: "number",
                  begin: E,
                  relevance: 0
              },
              $ = {
                  className: "number",
                  begin: k,
                  relevance: 0
              },
              F = {
                  className: "number",
                  begin: _ + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
                  relevance: 0
              },
              q = {
                  begin: /(?=\/[^/\n]*\/)/,
                  contains: [{
                      className: "regexp",
                      begin: /\//,
                      end: /\/[gimuy]*/,
                      illegal: /\n/,
                      contains: [S, {
                          begin: /\[/,
                          end: /\]/,
                          relevance: 0,
                          contains: [S]
                      }]
                  }]
              },
              H = {
                  className: "title",
                  begin: x,
                  relevance: 0
              },
              V = {
                  className: "title",
                  begin: O,
                  relevance: 0
              },
              W = {
                  begin: "\\.\\s*" + O,
                  relevance: 0
              },
              z = function(e) {
                  return Object.assign(e, {
                      "on:begin": (e, t) => {
                          t.data._beginMatch = e[1]
                      },
                      "on:end": (e, t) => {
                          t.data._beginMatch !== e[1] && t.ignoreMatch()
                      }
                  })
              };
          var U = Object.freeze({
              __proto__: null,
              MATCH_NOTHING_RE: j,
              IDENT_RE: x,
              UNDERSCORE_IDENT_RE: O,
              NUMBER_RE: _,
              C_NUMBER_RE: E,
              BINARY_NUMBER_RE: k,
              RE_STARTERS_RE: T,
              SHEBANG: C,
              BACKSLASH_ESCAPE: S,
              APOS_STRING_MODE: N,
              QUOTE_STRING_MODE: R,
              PHRASAL_WORDS_MODE: L,
              COMMENT: A,
              C_LINE_COMMENT_MODE: I,
              C_BLOCK_COMMENT_MODE: B,
              HASH_COMMENT_MODE: M,
              NUMBER_MODE: P,
              C_NUMBER_MODE: D,
              BINARY_NUMBER_MODE: $,
              CSS_NUMBER_MODE: F,
              REGEXP_MODE: q,
              TITLE_MODE: H,
              UNDERSCORE_TITLE_MODE: V,
              METHOD_GUARD: W,
              END_SAME_AS_BEGIN: z
          });

          function G(e, t) {
              const n = e.input[e.index - 1];
              "." === n && t.ignoreMatch()
          }

          function K(e, t) {
              t && e.beginKeywords && (e.begin = "\\b(" + e.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", e.__beforeBegin = G, e.keywords = e.keywords || e.beginKeywords, delete e.beginKeywords, void 0 === e.relevance && (e.relevance = 0))
          }

          function Y(e, t) {
              Array.isArray(e.illegal) && (e.illegal = b(...e.illegal))
          }

          function J(e, t) {
              if (e.match) {
                  if (e.begin || e.end) throw new Error("begin & end are not supported with match");
                  e.begin = e.match, delete e.match
              }
          }

          function X(e, t) {
              void 0 === e.relevance && (e.relevance = 1)
          }
          const Q = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"],
              Z = "keyword";

          function ee(e, t, n = Z) {
              const r = {};
              return "string" === typeof e ? i(n, e.split(" ")) : Array.isArray(e) ? i(n, e) : Object.keys(e).forEach((function(n) {
                  Object.assign(r, ee(e[n], t, n))
              })), r;

              function i(e, n) {
                  t && (n = n.map(e => e.toLowerCase())), n.forEach((function(t) {
                      const n = t.split("|");
                      r[n[0]] = [e, te(n[0], n[1])]
                  }))
              }
          }

          function te(e, t) {
              return t ? Number(t) : ne(e) ? 0 : 1
          }

          function ne(e) {
              return Q.includes(e.toLowerCase())
          }

          function re(e, {
              plugins: t
          }) {
              function n(t, n) {
                  return new RegExp(p(t), "m" + (e.case_insensitive ? "i" : "") + (n ? "g" : ""))
              }
              class r {
                  constructor() {
                      this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
                  }
                  addRule(e, t) {
                      t.position = this.position++, this.matchIndexes[this.matchAt] = t, this.regexes.push([t, e]), this.matchAt += m(e) + 1
                  }
                  compile() {
                      0 === this.regexes.length && (this.exec = () => null);
                      const e = this.regexes.map(e => e[1]);
                      this.matcherRe = n(w(e), !0), this.lastIndex = 0
                  }
                  exec(e) {
                      this.matcherRe.lastIndex = this.lastIndex;
                      const t = this.matcherRe.exec(e);
                      if (!t) return null;
                      const n = t.findIndex((e, t) => t > 0 && void 0 !== e),
                          r = this.matchIndexes[n];
                      return t.splice(0, n), Object.assign(t, r)
                  }
              }
              class i {
                  constructor() {
                      this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
                  }
                  getMatcher(e) {
                      if (this.multiRegexes[e]) return this.multiRegexes[e];
                      const t = new r;
                      return this.rules.slice(e).forEach(([e, n]) => t.addRule(e, n)), t.compile(), this.multiRegexes[e] = t, t
                  }
                  resumingScanAtSamePosition() {
                      return 0 !== this.regexIndex
                  }
                  considerAll() {
                      this.regexIndex = 0
                  }
                  addRule(e, t) {
                      this.rules.push([e, t]), "begin" === t.type && this.count++
                  }
                  exec(e) {
                      const t = this.getMatcher(this.regexIndex);
                      t.lastIndex = this.lastIndex;
                      let n = t.exec(e);
                      if (this.resumingScanAtSamePosition())
                          if (n && n.index === this.lastIndex);
                          else {
                              const t = this.getMatcher(0);
                              t.lastIndex = this.lastIndex + 1, n = t.exec(e)
                          } return n && (this.regexIndex += n.position + 1, this.regexIndex === this.count && this.considerAll()), n
                  }
              }

              function a(e) {
                  const t = new i;
                  return e.contains.forEach(e => t.addRule(e.begin, {
                      rule: e,
                      type: "begin"
                  })), e.terminatorEnd && t.addRule(e.terminatorEnd, {
                      type: "end"
                  }), e.illegal && t.addRule(e.illegal, {
                      type: "illegal"
                  }), t
              }

              function s(t, r) {
                  const i = t;
                  if (t.isCompiled) return i;
                  [J].forEach(e => e(t, r)), e.compilerExtensions.forEach(e => e(t, r)), t.__beforeBegin = null, [K, Y, X].forEach(e => e(t, r)), t.isCompiled = !0;
                  let o = null;
                  if ("object" === typeof t.keywords && (o = t.keywords.$pattern, delete t.keywords.$pattern), t.keywords && (t.keywords = ee(t.keywords, e.case_insensitive)), t.lexemes && o) throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");
                  return o = o || t.lexemes || /\w+/, i.keywordPatternRe = n(o, !0), r && (t.begin || (t.begin = /\B|\b/), i.beginRe = n(t.begin), t.endSameAsBegin && (t.end = t.begin), t.end || t.endsWithParent || (t.end = /\B|\b/), t.end && (i.endRe = n(t.end)), i.terminatorEnd = p(t.end) || "", t.endsWithParent && r.terminatorEnd && (i.terminatorEnd += (t.end ? "|" : "") + r.terminatorEnd)), t.illegal && (i.illegalRe = n(t.illegal)), t.contains || (t.contains = []), t.contains = [].concat(...t.contains.map((function(e) {
                      return ae("self" === e ? t : e)
                  }))), t.contains.forEach((function(e) {
                      s(e, i)
                  })), t.starts && s(t.starts, r), i.matcher = a(i), i
              }
              if (e.compilerExtensions || (e.compilerExtensions = []), e.contains && e.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
              return e.classNameAliases = o(e.classNameAliases || {}), s(e)
          }

          function ie(e) {
              return !!e && (e.endsWithParent || ie(e.starts))
          }

          function ae(e) {
              return e.variants && !e.cachedVariants && (e.cachedVariants = e.variants.map((function(t) {
                  return o(e, {
                      variants: null
                  }, t)
              }))), e.cachedVariants ? e.cachedVariants : ie(e) ? o(e, {
                  starts: e.starts ? o(e.starts) : null
              }) : Object.isFrozen(e) ? o(e) : e
          }
          var se = "10.7.2";

          function oe(e) {
              return Boolean(e || "" === e)
          }

          function ce(e) {
              const t = {
                      props: ["language", "code", "autodetect"],
                      data: function() {
                          return {
                              detectedLanguage: "",
                              unknownLanguage: !1
                          }
                      },
                      computed: {
                          className() {
                              return this.unknownLanguage ? "" : "hljs " + this.detectedLanguage
                          },
                          highlighted() {
                              if (!this.autoDetect && !e.getLanguage(this.language)) return console.warn(`The language "${this.language}" you specified could not be found.`), this.unknownLanguage = !0, s(this.code);
                              let t = {};
                              return this.autoDetect ? (t = e.highlightAuto(this.code), this.detectedLanguage = t.language) : (t = e.highlight(this.language, this.code, this.ignoreIllegals), this.detectedLanguage = this.language), t.value
                          },
                          autoDetect() {
                              return !this.language || oe(this.autodetect)
                          },
                          ignoreIllegals() {
                              return !0
                          }
                      },
                      render(e) {
                          return e("pre", {}, [e("code", {
                              class: this.className,
                              domProps: {
                                  innerHTML: this.highlighted
                              }
                          })])
                      }
                  },
                  n = {
                      install(e) {
                          e.component("highlightjs", t)
                      }
                  };
              return {
                  Component: t,
                  VuePlugin: n
              }
          }
          const ue = {
              "after:highlightElement": ({
                  el: e,
                  result: t,
                  text: n
              }) => {
                  const r = fe(e);
                  if (!r.length) return;
                  const i = document.createElement("div");
                  i.innerHTML = t.value, t.value = he(r, fe(i), n)
              }
          };

          function le(e) {
              return e.nodeName.toLowerCase()
          }

          function fe(e) {
              const t = [];
              return function e(n, r) {
                  for (let i = n.firstChild; i; i = i.nextSibling) 3 === i.nodeType ? r += i.nodeValue.length : 1 === i.nodeType && (t.push({
                      event: "start",
                      offset: r,
                      node: i
                  }), r = e(i, r), le(i).match(/br|hr|img|input/) || t.push({
                      event: "stop",
                      offset: r,
                      node: i
                  }));
                  return r
              }(e, 0), t
          }

          function he(e, t, n) {
              let r = 0,
                  i = "";
              const a = [];

              function o() {
                  return e.length && t.length ? e[0].offset !== t[0].offset ? e[0].offset < t[0].offset ? e : t : "start" === t[0].event ? e : t : e.length ? e : t
              }

              function c(e) {
                  function t(e) {
                      return " " + e.nodeName + '="' + s(e.value) + '"'
                  }
                  i += "<" + le(e) + [].map.call(e.attributes, t).join("") + ">"
              }

              function u(e) {
                  i += "</" + le(e) + ">"
              }

              function l(e) {
                  ("start" === e.event ? c : u)(e.node)
              }
              while (e.length || t.length) {
                  let t = o();
                  if (i += s(n.substring(r, t[0].offset)), r = t[0].offset, t === e) {
                      a.reverse().forEach(u);
                      do {
                          l(t.splice(0, 1)[0]), t = o()
                      } while (t === e && t.length && t[0].offset === r);
                      a.reverse().forEach(c)
                  } else "start" === t[0].event ? a.push(t[0].node) : a.pop(), l(t.splice(0, 1)[0])
              }
              return i + s(n.substr(r))
          }
          const de = {},
              pe = e => {
                  console.error(e)
              },
              ge = (e, ...t) => {
                  console.log("WARN: " + e, ...t)
              },
              be = (e, t) => {
                  de[`${e}/${t}`] || (console.log(`Deprecated as of ${e}. ${t}`), de[`${e}/${t}`] = !0)
              },
              me = s,
              ve = o,
              ye = Symbol("nomatch"),
              we = function(e) {
                  const t = Object.create(null),
                      n = Object.create(null),
                      i = [];
                  let s = !0;
                  const o = /(^(<[^>]+>|\t|)+|\n)/gm,
                      c = "Could not find the language '{}', did you forget to load/include a language module?",
                      u = {
                          disableAutodetect: !0,
                          name: "Plain text",
                          contains: []
                      };
                  let l = {
                      noHighlightRe: /^(no-?highlight)$/i,
                      languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
                      classPrefix: "hljs-",
                      tabReplace: null,
                      useBR: !1,
                      languages: null,
                      __emitter: h
                  };

                  function f(e) {
                      return l.noHighlightRe.test(e)
                  }

                  function p(e) {
                      let t = e.className + " ";
                      t += e.parentNode ? e.parentNode.className : "";
                      const n = l.languageDetectRe.exec(t);
                      if (n) {
                          const t = M(n[1]);
                          return t || (ge(c.replace("{}", n[1])), ge("Falling back to no-highlight mode for this block.", e)), t ? n[1] : "no-highlight"
                      }
                      return t.split(/\s+/).find(e => f(e) || M(e))
                  }

                  function g(e, t, n, r) {
                      let i = "",
                          a = "";
                      "object" === typeof t ? (i = e, n = t.ignoreIllegals, a = t.language, r = void 0) : (be("10.7.0", "highlight(lang, code, ...args) has been deprecated."), be("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), a = e, i = t);
                      const s = {
                          code: i,
                          language: a
                      };
                      q("before:highlight", s);
                      const o = s.result ? s.result : b(s.language, s.code, n, r);
                      return o.code = s.code, q("after:highlight", o), o
                  }

                  function b(e, n, r, o) {
                      function u(e, t) {
                          const n = k.case_insensitive ? t[0].toLowerCase() : t[0];
                          return Object.prototype.hasOwnProperty.call(e.keywords, n) && e.keywords[n]
                      }

                      function f() {
                          if (!S.keywords) return void R.addText(L);
                          let e = 0;
                          S.keywordPatternRe.lastIndex = 0;
                          let t = S.keywordPatternRe.exec(L),
                              n = "";
                          while (t) {
                              n += L.substring(e, t.index);
                              const r = u(S, t);
                              if (r) {
                                  const [e, i] = r;
                                  if (R.addText(n), n = "", A += i, e.startsWith("_")) n += t[0];
                                  else {
                                      const n = k.classNameAliases[e] || e;
                                      R.addKeyword(t[0], n)
                                  }
                              } else n += t[0];
                              e = S.keywordPatternRe.lastIndex, t = S.keywordPatternRe.exec(L)
                          }
                          n += L.substr(e), R.addText(n)
                      }

                      function h() {
                          if ("" === L) return;
                          let e = null;
                          if ("string" === typeof S.subLanguage) {
                              if (!t[S.subLanguage]) return void R.addText(L);
                              e = b(S.subLanguage, L, !0, N[S.subLanguage]), N[S.subLanguage] = e.top
                          } else e = y(L, S.subLanguage.length ? S.subLanguage : null);
                          S.relevance > 0 && (A += e.relevance), R.addSublanguage(e.emitter, e.language)
                      }

                      function p() {
                          null != S.subLanguage ? h() : f(), L = ""
                      }

                      function g(e) {
                          return e.className && R.openNode(k.classNameAliases[e.className] || e.className), S = Object.create(e, {
                              parent: {
                                  value: S
                              }
                          }), S
                      }

                      function m(e, t, n) {
                          let r = v(e.endRe, n);
                          if (r) {
                              if (e["on:end"]) {
                                  const n = new a(e);
                                  e["on:end"](t, n), n.isMatchIgnored && (r = !1)
                              }
                              if (r) {
                                  while (e.endsParent && e.parent) e = e.parent;
                                  return e
                              }
                          }
                          if (e.endsWithParent) return m(e.parent, t, n)
                      }

                      function w(e) {
                          return 0 === S.matcher.regexIndex ? (L += e[0], 1) : (P = !0, 0)
                      }

                      function j(e) {
                          const t = e[0],
                              n = e.rule,
                              r = new a(n),
                              i = [n.__beforeBegin, n["on:begin"]];
                          for (const a of i)
                              if (a && (a(e, r), r.isMatchIgnored)) return w(t);
                          return n && n.endSameAsBegin && (n.endRe = d(t)), n.skip ? L += t : (n.excludeBegin && (L += t), p(), n.returnBegin || n.excludeBegin || (L = t)), g(n), n.returnBegin ? 0 : t.length
                      }

                      function x(e) {
                          const t = e[0],
                              r = n.substr(e.index),
                              i = m(S, e, r);
                          if (!i) return ye;
                          const a = S;
                          a.skip ? L += t : (a.returnEnd || a.excludeEnd || (L += t), p(), a.excludeEnd && (L = t));
                          do {
                              S.className && R.closeNode(), S.skip || S.subLanguage || (A += S.relevance), S = S.parent
                          } while (S !== i.parent);
                          return i.starts && (i.endSameAsBegin && (i.starts.endRe = i.endRe), g(i.starts)), a.returnEnd ? 0 : t.length
                      }

                      function O() {
                          const e = [];
                          for (let t = S; t !== k; t = t.parent) t.className && e.unshift(t.className);
                          e.forEach(e => R.openNode(e))
                      }
                      let _ = {};

                      function E(t, i) {
                          const a = i && i[0];
                          if (L += t, null == a) return p(), 0;
                          if ("begin" === _.type && "end" === i.type && _.index === i.index && "" === a) {
                              if (L += n.slice(i.index, i.index + 1), !s) {
                                  const t = new Error("0 width match regex");
                                  throw t.languageName = e, t.badRule = _.rule, t
                              }
                              return 1
                          }
                          if (_ = i, "begin" === i.type) return j(i);
                          if ("illegal" === i.type && !r) {
                              const e = new Error('Illegal lexeme "' + a + '" for mode "' + (S.className || "<unnamed>") + '"');
                              throw e.mode = S, e
                          }
                          if ("end" === i.type) {
                              const e = x(i);
                              if (e !== ye) return e
                          }
                          if ("illegal" === i.type && "" === a) return 1;
                          if (B > 1e5 && B > 3 * i.index) {
                              const e = new Error("potential infinite loop, way more iterations than matches");
                              throw e
                          }
                          return L += a, a.length
                      }
                      const k = M(e);
                      if (!k) throw pe(c.replace("{}", e)), new Error('Unknown language: "' + e + '"');
                      const T = re(k, {
                          plugins: i
                      });
                      let C = "",
                          S = o || T;
                      const N = {},
                          R = new l.__emitter(l);
                      O();
                      let L = "",
                          A = 0,
                          I = 0,
                          B = 0,
                          P = !1;
                      try {
                          for (S.matcher.considerAll();;) {
                              B++, P ? P = !1 : S.matcher.considerAll(), S.matcher.lastIndex = I;
                              const e = S.matcher.exec(n);
                              if (!e) break;
                              const t = n.substring(I, e.index),
                                  r = E(t, e);
                              I = e.index + r
                          }
                          return E(n.substr(I)), R.closeAllNodes(), R.finalize(), C = R.toHTML(), {
                              relevance: Math.floor(A),
                              value: C,
                              language: e,
                              illegal: !1,
                              emitter: R,
                              top: S
                          }
                      } catch (D) {
                          if (D.message && D.message.includes("Illegal")) return {
                              illegal: !0,
                              illegalBy: {
                                  msg: D.message,
                                  context: n.slice(I - 100, I + 100),
                                  mode: D.mode
                              },
                              sofar: C,
                              relevance: 0,
                              value: me(n),
                              emitter: R
                          };
                          if (s) return {
                              illegal: !1,
                              relevance: 0,
                              value: me(n),
                              emitter: R,
                              language: e,
                              top: S,
                              errorRaised: D
                          };
                          throw D
                      }
                  }

                  function m(e) {
                      const t = {
                          relevance: 0,
                          emitter: new l.__emitter(l),
                          value: me(e),
                          illegal: !1,
                          top: u
                      };
                      return t.emitter.addText(e), t
                  }

                  function y(e, n) {
                      n = n || l.languages || Object.keys(t);
                      const r = m(e),
                          i = n.filter(M).filter(D).map(t => b(t, e, !1));
                      i.unshift(r);
                      const a = i.sort((e, t) => {
                              if (e.relevance !== t.relevance) return t.relevance - e.relevance;
                              if (e.language && t.language) {
                                  if (M(e.language).supersetOf === t.language) return 1;
                                  if (M(t.language).supersetOf === e.language) return -1
                              }
                              return 0
                          }),
                          [s, o] = a,
                          c = s;
                      return c.second_best = o, c
                  }

                  function w(e) {
                      return l.tabReplace || l.useBR ? e.replace(o, e => "\n" === e ? l.useBR ? "<br>" : e : l.tabReplace ? e.replace(/\t/g, l.tabReplace) : e) : e
                  }

                  function j(e, t, r) {
                      const i = t ? n[t] : r;
                      e.classList.add("hljs"), i && e.classList.add(i)
                  }
                  const x = {
                          "before:highlightElement": ({
                              el: e
                          }) => {
                              l.useBR && (e.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ /]*>/g, "\n"))
                          },
                          "after:highlightElement": ({
                              result: e
                          }) => {
                              l.useBR && (e.value = e.value.replace(/\n/g, "<br>"))
                          }
                      },
                      O = /^(<[^>]+>|\t)+/gm,
                      _ = {
                          "after:highlightElement": ({
                              result: e
                          }) => {
                              l.tabReplace && (e.value = e.value.replace(O, e => e.replace(/\t/g, l.tabReplace)))
                          }
                      };

                  function E(e) {
                      let t = null;
                      const n = p(e);
                      if (f(n)) return;
                      q("before:highlightElement", {
                          el: e,
                          language: n
                      }), t = e;
                      const r = t.textContent,
                          i = n ? g(r, {
                              language: n,
                              ignoreIllegals: !0
                          }) : y(r);
                      q("after:highlightElement", {
                          el: e,
                          result: i,
                          text: r
                      }), e.innerHTML = i.value, j(e, n, i.language), e.result = {
                          language: i.language,
                          re: i.relevance,
                          relavance: i.relevance
                      }, i.second_best && (e.second_best = {
                          language: i.second_best.language,
                          re: i.second_best.relevance,
                          relavance: i.second_best.relevance
                      })
                  }

                  function k(e) {
                      e.useBR && (be("10.3.0", "'useBR' will be removed entirely in v11.0"), be("10.3.0", "Please see https://github.com/highlightjs/highlight.js/issues/2559")), l = ve(l, e)
                  }
                  const T = () => {
                      if (T.called) return;
                      T.called = !0, be("10.6.0", "initHighlighting() is deprecated.  Use highlightAll() instead.");
                      const e = document.querySelectorAll("pre code");
                      e.forEach(E)
                  };

                  function C() {
                      be("10.6.0", "initHighlightingOnLoad() is deprecated.  Use highlightAll() instead."), S = !0
                  }
                  let S = !1;

                  function N() {
                      if ("loading" === document.readyState) return void(S = !0);
                      const e = document.querySelectorAll("pre code");
                      e.forEach(E)
                  }

                  function R() {
                      S && N()
                  }

                  function L(n, r) {
                      let i = null;
                      try {
                          i = r(e)
                      } catch (a) {
                          if (pe("Language definition for '{}' could not be registered.".replace("{}", n)), !s) throw a;
                          pe(a), i = u
                      }
                      i.name || (i.name = n), t[n] = i, i.rawDefinition = r.bind(null, e), i.aliases && P(i.aliases, {
                          languageName: n
                      })
                  }

                  function A(e) {
                      delete t[e];
                      for (const t of Object.keys(n)) n[t] === e && delete n[t]
                  }

                  function I() {
                      return Object.keys(t)
                  }

                  function B(e) {
                      be("10.4.0", "requireLanguage will be removed entirely in v11."), be("10.4.0", "Please see https://github.com/highlightjs/highlight.js/pull/2844");
                      const t = M(e);
                      if (t) return t;
                      const n = new Error("The '{}' language is required, but not loaded.".replace("{}", e));
                      throw n
                  }

                  function M(e) {
                      return e = (e || "").toLowerCase(), t[e] || t[n[e]]
                  }

                  function P(e, {
                      languageName: t
                  }) {
                      "string" === typeof e && (e = [e]), e.forEach(e => {
                          n[e.toLowerCase()] = t
                      })
                  }

                  function D(e) {
                      const t = M(e);
                      return t && !t.disableAutodetect
                  }

                  function $(e) {
                      e["before:highlightBlock"] && !e["before:highlightElement"] && (e["before:highlightElement"] = t => {
                          e["before:highlightBlock"](Object.assign({
                              block: t.el
                          }, t))
                      }), e["after:highlightBlock"] && !e["after:highlightElement"] && (e["after:highlightElement"] = t => {
                          e["after:highlightBlock"](Object.assign({
                              block: t.el
                          }, t))
                      })
                  }

                  function F(e) {
                      $(e), i.push(e)
                  }

                  function q(e, t) {
                      const n = e;
                      i.forEach((function(e) {
                          e[n] && e[n](t)
                      }))
                  }

                  function H(e) {
                      return be("10.2.0", "fixMarkup will be removed entirely in v11.0"), be("10.2.0", "Please see https://github.com/highlightjs/highlight.js/issues/2534"), w(e)
                  }

                  function V(e) {
                      return be("10.7.0", "highlightBlock will be removed entirely in v12.0"), be("10.7.0", "Please use highlightElement now."), E(e)
                  }
                  "undefined" !== typeof window && window.addEventListener && window.addEventListener("DOMContentLoaded", R, !1), Object.assign(e, {
                      highlight: g,
                      highlightAuto: y,
                      highlightAll: N,
                      fixMarkup: H,
                      highlightElement: E,
                      highlightBlock: V,
                      configure: k,
                      initHighlighting: T,
                      initHighlightingOnLoad: C,
                      registerLanguage: L,
                      unregisterLanguage: A,
                      listLanguages: I,
                      getLanguage: M,
                      registerAliases: P,
                      requireLanguage: B,
                      autoDetection: D,
                      inherit: ve,
                      addPlugin: F,
                      vuePlugin: ce(e).VuePlugin
                  }), e.debugMode = function() {
                      s = !1
                  }, e.safeMode = function() {
                      s = !0
                  }, e.versionString = se;
                  for (const a in U) "object" === typeof U[a] && r(U[a]);
                  return Object.assign(e, U), e.addPlugin(x), e.addPlugin(ue), e.addPlugin(_), e
              };
          var je = we({});
          e.exports = je
      },
      1417: function(e, t, n) {
          var r = {
              "./markdown": ["84cb", "highlight-js-custom-markdown"],
              "./markdown.js": ["84cb", "highlight-js-custom-markdown"],
              "./swift": ["81c8", "highlight-js-custom-swift"],
              "./swift.js": ["81c8", "highlight-js-custom-swift"]
          };

          function i(e) {
              if (!n.o(r, e)) return Promise.resolve().then((function() {
                  var t = new Error("Cannot find module '" + e + "'");
                  throw t.code = "MODULE_NOT_FOUND", t
              }));
              var t = r[e],
                  i = t[0];
              return n.e(t[1]).then((function() {
                  return n(i)
              }))
          }
          i.keys = function() {
              return Object.keys(r)
          }, i.id = "1417", e.exports = i
      },
      "146e": function(e, t, n) {
          "use strict";
          n("96cf");
          var r = n("3b8d"),
              i = n("3908"),
              a = n("8a61");
          t["a"] = {
              mixins: [a["a"]],
              mounted: function() {
                  var e = Object(r["a"])(regeneratorRuntime.mark((function e() {
                      return regeneratorRuntime.wrap((function(e) {
                          while (1) switch (e.prev = e.next) {
                              case 0:
                                  if (!this.$route.hash) {
                                      e.next = 4;
                                      break
                                  }
                                  return e.next = 3, Object(i["a"])(8);
                              case 3:
                                  this.scrollToElement(this.$route.hash);
                              case 4:
                              case "end":
                                  return e.stop()
                          }
                      }), e, this)
                  })));

                  function t() {
                      return e.apply(this, arguments)
                  }
                  return t
              }()
          }
      },
      "17db": function(e, t, n) {
          "use strict";
          n("327b")
      },
      "1c4c": function(e, t, n) {
          "use strict";
          var r = n("9b43"),
              i = n("5ca1"),
              a = n("4bf8"),
              s = n("1fa8"),
              o = n("33a4"),
              c = n("9def"),
              u = n("f1ae"),
              l = n("27ee");
          i(i.S + i.F * !n("5cc5")((function(e) {
              Array.from(e)
          })), "Array", {
              from: function(e) {
                  var t, n, i, f, h = a(e),
                      d = "function" == typeof this ? this : Array,
                      p = arguments.length,
                      g = p > 1 ? arguments[1] : void 0,
                      b = void 0 !== g,
                      m = 0,
                      v = l(h);
                  if (b && (g = r(g, p > 2 ? arguments[2] : void 0, 2)), void 0 == v || d == Array && o(v))
                      for (t = c(h.length), n = new d(t); t > m; m++) u(n, m, b ? g(h[m], m) : h[m]);
                  else
                      for (f = v.call(h), n = new d; !(i = f.next()).done; m++) u(n, m, b ? s(f, g, [i.value, m], !0) : i.value);
                  return n.length = m, n
              }
          })
      },
      "1df8": function(e, t, n) {
          var r = n("63b6");
          r(r.S, "Object", {
              setPrototypeOf: n("ead6").set
          })
      },
      2263: function(e, t, n) {},
      2397: function(e, t, n) {
          var r = n("5ca1"),
              i = n("2aeb"),
              a = n("d8e8"),
              s = n("cb7c"),
              o = n("d3f4"),
              c = n("79e5"),
              u = n("f0c1"),
              l = (n("7726").Reflect || {}).construct,
              f = c((function() {
                  function e() {}
                  return !(l((function() {}), [], e) instanceof e)
              })),
              h = !c((function() {
                  l((function() {}))
              }));
          r(r.S + r.F * (f || h), "Reflect", {
              construct: function(e, t) {
                  a(e), s(t);
                  var n = arguments.length < 3 ? e : a(arguments[2]);
                  if (h && !f) return l(e, t, n);
                  if (e == n) {
                      switch (t.length) {
                          case 0:
                              return new e;
                          case 1:
                              return new e(t[0]);
                          case 2:
                              return new e(t[0], t[1]);
                          case 3:
                              return new e(t[0], t[1], t[2]);
                          case 4:
                              return new e(t[0], t[1], t[2], t[3])
                      }
                      var r = [null];
                      return r.push.apply(r, t), new(u.apply(e, r))
                  }
                  var c = n.prototype,
                      d = i(o(c) ? c : Object.prototype),
                      p = Function.apply.call(e, d, t);
                  return o(p) ? p : d
              }
          })
      },
      "259c": function(e, t, n) {
          "use strict";
          n("c739")
      },
      "25a9": function(e, t, n) {
          "use strict";
          n.d(t, "a", (function() {
              return L
          })), n.d(t, "b", (function() {
              return I
          }));
          n("8e6e"), n("ac6a"), n("456d"), n("6b54"), n("2397"), n("bd86"), n("96cf"), n("a481");
          var r = n("3b8d"),
              i = n("d225"),
              a = n("4aa6"),
              s = n.n(a),
              o = n("4d16"),
              c = n.n(o);

          function u(e, t) {
              return u = c.a || function(e, t) {
                  return e.__proto__ = t, e
              }, u(e, t)
          }

          function l(e, t) {
              if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
              e.prototype = s()(t && t.prototype, {
                  constructor: {
                      value: e,
                      writable: !0,
                      configurable: !0
                  }
              }), t && u(e, t)
          }
          var f = n("7618");

          function h(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
          }

          function d(e, t) {
              return !t || "object" !== Object(f["a"])(t) && "function" !== typeof t ? h(e) : t
          }
          var p = n("061b"),
              g = n.n(p);

          function b(e) {
              return b = c.a ? g.a : function(e) {
                  return e.__proto__ || g()(e)
              }, b(e)
          }
          var m = n("2d7d"),
              v = n.n(m);

          function y(e) {
              return -1 !== Function.toString.call(e).indexOf("[native code]")
          }
          var w = n("a5b2"),
              j = n.n(w);

          function x() {
              if ("undefined" === typeof Reflect || !j.a) return !1;
              if (j.a.sham) return !1;
              if ("function" === typeof Proxy) return !0;
              try {
                  return Date.prototype.toString.call(j()(Date, [], (function() {}))), !0
              } catch (e) {
                  return !1
              }
          }

          function O(e, t, n) {
              return O = x() ? j.a : function(e, t, n) {
                  var r = [null];
                  r.push.apply(r, t);
                  var i = Function.bind.apply(e, r),
                      a = new i;
                  return n && u(a, n.prototype), a
              }, O.apply(null, arguments)
          }

          function _(e) {
              var t = "function" === typeof v.a ? new v.a : void 0;
              return _ = function(e) {
                  if (null === e || !y(e)) return e;
                  if ("function" !== typeof e) throw new TypeError("Super expression must either be null or a function");
                  if ("undefined" !== typeof t) {
                      if (t.has(e)) return t.get(e);
                      t.set(e, n)
                  }

                  function n() {
                      return O(e, arguments, b(this).constructor)
                  }
                  return n.prototype = s()(e.prototype, {
                      constructor: {
                          value: n,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0
                      }
                  }), u(n, e)
              }, _(e)
          }
          var E = n("d26a");

          function k(e) {
              var t = T();
              return function() {
                  var n, r = b(e);
                  if (t) {
                      var i = b(this).constructor;
                      n = Reflect.construct(r, arguments, i)
                  } else n = r.apply(this, arguments);
                  return d(this, n)
              }
          }

          function T() {
              if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" === typeof Proxy) return !0;
              try {
                  return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
              } catch (e) {
                  return !1
              }
          }
          var C = function(e) {
              l(n, e);
              var t = k(n);

              function n(e) {
                  var r;
                  return Object(i["a"])(this, n), r = t.call(this, "Unable to fetch data"), r.route = e, r
              }
              return n
          }(_(Error));

          function S(e) {
              return N.apply(this, arguments)
          }

          function N() {
              return N = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
                  var n, r, i, a, s, o = arguments;
                  return regeneratorRuntime.wrap((function(e) {
                      while (1) switch (e.prev = e.next) {
                          case 0:
                              return r = function(e) {
                                  return ("ide" !== Object({
                                      NODE_ENV: "production",
                                      VUE_APP_TITLE: "Documentation",
                                      BASE_URL: "/"
                                  }).VUE_APP_TARGET || 0 !== e.status) && !e.ok
                              }, n = o.length > 1 && void 0 !== o[1] ? o[1] : {}, i = new URL(t, window.location.href), a = Object(E["c"])(n), a && (i.search = a), e.next = 7, fetch(i);
                          case 7:
                              if (s = e.sent, !r(s)) {
                                  e.next = 10;
                                  break
                              }
                              throw s;
                          case 10:
                              return e.abrupt("return", s.json());
                          case 11:
                          case "end":
                              return e.stop()
                      }
                  }), e)
              }))), N.apply(this, arguments)
          }

          function R(e) {
              var t = e.replace(/\/$/, "");
              return "".concat("/testable-assertions/", "data").concat(t, ".json")
          }

          function L(e, t, n) {
              return A.apply(this, arguments)
          }

          function A() {
              return A = Object(r["a"])(regeneratorRuntime.mark((function e(t, n, r) {
                  var i, a;
                  return regeneratorRuntime.wrap((function(e) {
                      while (1) switch (e.prev = e.next) {
                          case 0:
                              return i = R(t.path), e.prev = 1, e.next = 4, S(i, t.query);
                          case 4:
                              a = e.sent, e.next = 13;
                              break;
                          case 7:
                              if (e.prev = 7, e.t0 = e["catch"](1), "ide" !== Object({
                                      NODE_ENV: "production",
                                      VUE_APP_TITLE: "Documentation",
                                      BASE_URL: "/"
                                  }).VUE_APP_TARGET) {
                                  e.next = 12;
                                  break
                              }
                              throw console.error(e.t0), !1;
                          case 12:
                              e.t0.status && 404 === e.t0.status ? r({
                                  name: "not-found",
                                  params: [t.path]
                              }) : r(new C(t));
                          case 13:
                              return e.abrupt("return", a);
                          case 14:
                          case "end":
                              return e.stop()
                      }
                  }), e, null, [
                      [1, 7]
                  ])
              }))), A.apply(this, arguments)
          }

          function I(e, t) {
              return !Object(E["a"])(e, t)
          }
      },
      "25b0": function(e, t, n) {
          n("1df8"), e.exports = n("584a").Object.setPrototypeOf
      },
      "26d2": function(e, t, n) {},
      "27c0": function(e, t, n) {},
      "2d7d": function(e, t, n) {
          e.exports = n("5037")
      },
      "327b": function(e, t, n) {},
      "32b3": function(e, t, n) {
          var r = {
              "./1c": ["f71c", "highlight-js-1c"],
              "./1c.js": ["f71c", "highlight-js-1c"],
              "./asciidoc": ["0290", "highlight-js-asciidoc"],
              "./asciidoc.js": ["0290", "highlight-js-asciidoc"],
              "./bash": ["f0f8", "highlight-js-bash"],
              "./bash.js": ["f0f8", "highlight-js-bash"],
              "./basic": ["a15a", "highlight-js-basic"],
              "./basic.js": ["a15a", "highlight-js-basic"],
              "./c": ["1fe5", "highlight-js-c"],
              "./c-like": ["af9a", "highlight-js-c-like"],
              "./c-like.js": ["af9a", "highlight-js-c-like"],
              "./c.js": ["1fe5", "highlight-js-c"],
              "./cpp": ["0209", "highlight-js-cpp"],
              "./cpp.js": ["0209", "highlight-js-cpp"],
              "./css": ["ee8c", "highlight-js-css"],
              "./css.js": ["ee8c", "highlight-js-css"],
              "./diff": ["48b8", "highlight-js-diff"],
              "./diff.js": ["48b8", "highlight-js-diff"],
              "./http": ["c01d", "highlight-js-http"],
              "./http.js": ["c01d", "highlight-js-http"],
              "./java": ["332f", "highlight-js-java"],
              "./java.js": ["332f", "highlight-js-java"],
              "./javascript": ["4dd1", "highlight-js-javascript"],
              "./javascript.js": ["4dd1", "highlight-js-javascript"],
              "./json": ["5ad2", "highlight-js-json"],
              "./json.js": ["5ad2", "highlight-js-json"],
              "./llvm": ["7c30", "highlight-js-llvm"],
              "./llvm.js": ["7c30", "highlight-js-llvm"],
              "./markdown": ["04b0", "highlight-js-markdown"],
              "./markdown.js": ["04b0", "highlight-js-markdown"],
              "./objectivec": ["9bf2", "highlight-js-objectivec"],
              "./objectivec.js": ["9bf2", "highlight-js-objectivec"],
              "./perl": ["6a51", "highlight-js-perl"],
              "./perl.js": ["6a51", "highlight-js-perl"],
              "./php": ["2907", "highlight-js-php"],
              "./php.js": ["2907", "highlight-js-php"],
              "./purebasic": ["1b02", "highlight-js-purebasic"],
              "./purebasic.js": ["1b02", "highlight-js-purebasic"],
              "./python": ["9510", "highlight-js-python"],
              "./python.js": ["9510", "highlight-js-python"],
              "./ruby": ["82cb", "highlight-js-ruby"],
              "./ruby.js": ["82cb", "highlight-js-ruby"],
              "./scss": ["6113", "highlight-js-scss"],
              "./scss.js": ["6113", "highlight-js-scss"],
              "./swift": ["2a39", "highlight-js-swift"],
              "./swift.js": ["2a39", "highlight-js-swift"],
              "./xml": ["8dcb", "highlight-js-xml"],
              "./xml.js": ["8dcb", "highlight-js-xml"]
          };

          function i(e) {
              if (!n.o(r, e)) return Promise.resolve().then((function() {
                  var t = new Error("Cannot find module '" + e + "'");
                  throw t.code = "MODULE_NOT_FOUND", t
              }));
              var t = r[e],
                  i = t[0];
              return n.e(t[1]).then((function() {
                  return n.t(i, 7)
              }))
          }
          i.keys = function() {
              return Object.keys(r)
          }, i.id = "32b3", e.exports = i
      },
      "32fe": function(e, t, n) {},
      "34b0": function(e, t, n) {
          "use strict";
          var r = function() {
                  var e = this,
                      t = e.$createElement,
                      n = e._self._c || t;
                  return n("SVGIcon", {
                      staticClass: "inline-chevron-right-icon",
                      attrs: {
                          viewBox: "0 0 14 14"
                      }
                  }, [n("path", {
                      attrs: {
                          d: "M2.964 1.366l0.649-0.76 7.426 6.343-7.423 6.445-0.655-0.755 6.545-5.683-6.542-5.59z"
                      }
                  })])
              },
              i = [],
              a = n("be08"),
              s = {
                  name: "InlineChevronRightIcon",
                  components: {
                      SVGIcon: a["a"]
                  }
              },
              o = s,
              c = n("2877"),
              u = Object(c["a"])(o, r, i, !1, null, null, null);
          t["a"] = u.exports
      },
      3846: function(e, t, n) {
          n("9e1e") && "g" != /./g.flags && n("86cc").f(RegExp.prototype, "flags", {
              configurable: !0,
              get: n("0bfb")
          })
      },
      "386b": function(e, t, n) {
          var r = n("5ca1"),
              i = n("79e5"),
              a = n("be13"),
              s = /"/g,
              o = function(e, t, n, r) {
                  var i = String(a(e)),
                      o = "<" + t;
                  return "" !== n && (o += " " + n + '="' + String(r).replace(s, "&quot;") + '"'), o + ">" + i + "</" + t + ">"
              };
          e.exports = function(e, t) {
              var n = {};
              n[e] = t(o), r(r.P + r.F * i((function() {
                  var t = "" [e]('"');
                  return t !== t.toLowerCase() || t.split('"').length > 3
              })), "String", n)
          }
      },
      "3b2b": function(e, t, n) {
          var r = n("7726"),
              i = n("5dbc"),
              a = n("86cc").f,
              s = n("9093").f,
              o = n("aae3"),
              c = n("0bfb"),
              u = r.RegExp,
              l = u,
              f = u.prototype,
              h = /a/g,
              d = /a/g,
              p = new u(h) !== h;
          if (n("9e1e") && (!p || n("79e5")((function() {
                  return d[n("2b4c")("match")] = !1, u(h) != h || u(d) == d || "/a/i" != u(h, "i")
              })))) {
              u = function(e, t) {
                  var n = this instanceof u,
                      r = o(e),
                      a = void 0 === t;
                  return !n && r && e.constructor === u && a ? e : i(p ? new l(r && !a ? e.source : e, t) : l((r = e instanceof u) ? e.source : e, r && a ? c.call(e) : t), n ? this : f, u)
              };
              for (var g = function(e) {
                      e in u || a(u, e, {
                          configurable: !0,
                          get: function() {
                              return l[e]
                          },
                          set: function(t) {
                              l[e] = t
                          }
                      })
                  }, b = s(l), m = 0; b.length > m;) g(b[m++]);
              f.constructor = u, u.prototype = f, n("2aba")(r, "RegExp", u)
          }
          n("7a56")("RegExp")
      },
      "3bb8": function(e, t, n) {},
      4517: function(e, t, n) {
          var r = n("a22a");
          e.exports = function(e, t) {
              var n = [];
              return r(e, !1, n.push, n, t), n
          }
      },
      "4aa6": function(e, t, n) {
          e.exports = n("dc62")
      },
      "4d16": function(e, t, n) {
          e.exports = n("25b0")
      },
      5037: function(e, t, n) {
          n("c207"), n("1654"), n("6c1c"), n("837d"), n("5cb6"), n("fe1e"), n("7554"), e.exports = n("584a").Map
      },
      "52e4": function(e, t, n) {
          "use strict";
          var r = function() {
                  var e = this,
                      t = e.$createElement,
                      n = e._self._c || t;
                  return n("WordBreak", {
                      attrs: {
                          tag: "code"
                      }
                  }, [e._t("default")], 2)
              },
              i = [],
              a = n("7b1f"),
              s = {
                  name: "CodeVoice",
                  components: {
                      WordBreak: a["a"]
                  }
              },
              o = s,
              c = (n("6ea2"), n("2877")),
              u = Object(c["a"])(o, r, i, !1, null, "508d573c", null);
          t["a"] = u.exports
      },
      5376: function(e, t, n) {},
      5677: function(e, t, n) {
          "use strict";
          n("8e6e"), n("456d"), n("ac6a");
          var r = n("bd86"),
              i = (n("8449"), n("a8db")),
              a = n("75fc"),
              s = n("01c8"),
              o = n("e3ab"),
              c = n("7b69"),
              u = n("52e4"),
              l = function() {
                  var e = this,
                      t = e.$createElement,
                      n = e._self._c || t;
                  return n("div", {
                      staticClass: "DictionaryExample"
                  }, [e._t("default"), n("CollapsibleCodeListing", {
                      attrs: {
                          content: e.example.content,
                          showLineNumbers: ""
                      }
                  })], 2)
              },
              f = [],
              h = function() {
                  var e = this,
                      t = e.$createElement,
                      n = e._self._c || t;
                  return n("div", {
                      staticClass: "collapsible-code-listing",
                      class: {
                          "single-line": 1 === e.content[0].code.length
                      }
                  }, [n("pre", [n("div", e._l(this.content, (function(t, r) {
                      return n("div", {
                          key: r,
                          class: ["container-general", {
                              collapsible: !0 === t.collapsible
                          }, {
                              collapsed: !0 === t.collapsible && e.collapsed
                          }]
                      }, e._l(t.code, (function(t, r) {
                          return n("code", {
                              key: r,
                              staticClass: "code-line-container"
                          }, [e._v("\n    "), n("div", {
                              directives: [{
                                  name: "show",
                                  rawName: "v-show",
                                  value: e.showLineNumbers,
                                  expression: "showLineNumbers"
                              }],
                              staticClass: "code-number"
                          }), e._v("\n    "), n("div", {
                              staticClass: "code-line"
                          }, [e._v(e._s(t))]), e._v("\n  ")])
                      })), 0)
                  })), 0)])])
              },
              d = [],
              p = {
                  name: "CollapsibleCodeListing",
                  props: {
                      collapsed: {
                          type: Boolean,
                          required: !1
                      },
                      content: {
                          type: Array,
                          required: !0
                      },
                      showLineNumbers: {
                          type: Boolean,
                          default: function() {
                              return !0
                          }
                      }
                  }
              },
              g = p,
              b = (n("17db"), n("2877")),
              m = Object(b["a"])(g, h, d, !1, null, "ca646a22", null),
              v = m.exports,
              y = {
                  name: "DictionaryExample",
                  components: {
                      CollapsibleCodeListing: v
                  },
                  props: {
                      example: {
                          type: Object,
                          required: !0
                      }
                  }
              },
              w = y,
              j = Object(b["a"])(w, l, f, !1, null, null, null),
              x = j.exports,
              O = function() {
                  var e = this,
                      t = e.$createElement,
                      n = e._self._c || t;
                  return n("Row", {
                      staticClass: "endpoint-example"
                  }, [n("Column", {
                      staticClass: "example-code"
                  }, [e._t("default"), n("Tabnav", {
                      model: {
                          value: e.currentTab,
                          callback: function(t) {
                              e.currentTab = t
                          },
                          expression: "currentTab"
                      }
                  }, [n("TabnavItem", {
                      attrs: {
                          value: e.Tab.request
                      }
                  }, [e._v(e._s(e.Tab.request))]), n("TabnavItem", {
                      attrs: {
                          value: e.Tab.response
                      }
                  }, [e._v(e._s(e.Tab.response))])], 1), n("div", {
                      staticClass: "output"
                  }, [e.isCurrent(e.Tab.request) ? n("div", {
                      staticClass: "code"
                  }, [n("CollapsibleCodeListing", e._b({
                      attrs: {
                          collapsed: e.isCollapsed,
                          showLineNumbers: ""
                      }
                  }, "CollapsibleCodeListing", e.request, !1))], 1) : e._e(), e.isCurrent(e.Tab.response) ? n("div", {
                      staticClass: "code"
                  }, [n("CollapsibleCodeListing", e._b({
                      attrs: {
                          collapsed: e.isCollapsed,
                          showLineNumbers: ""
                      }
                  }, "CollapsibleCodeListing", e.response, !1))], 1) : e._e()]), e.isCollapsible ? n("div", {
                      staticClass: "controls"
                  }, [e.isCollapsed ? n("a", {
                      staticClass: "toggle",
                      attrs: {
                          href: "#"
                      },
                      on: {
                          click: function(t) {
                              return t.preventDefault(), e.showMore(t)
                          }
                      }
                  }, [n("InlinePlusCircleSolidIcon", {
                      staticClass: "control-icon icon-inline"
                  }), e._v("\n        More\n      ")], 1) : n("a", {
                      staticClass: "toggle",
                      attrs: {
                          href: "#"
                      },
                      on: {
                          click: function(t) {
                              return t.preventDefault(), e.showLess(t)
                          }
                      }
                  }, [n("InlineMinusCircleSolidIcon", {
                      staticClass: "control-icon icon-inline"
                  }), e._v("\n        Less\n      ")], 1)]) : e._e()], 2)], 1)
              },
              _ = [],
              E = n("0f00"),
              k = n("620a"),
              T = function() {
                  var e = this,
                      t = e.$createElement,
                      n = e._self._c || t;
                  return n("nav", {
                      staticClass: "tabnav"
                  }, [n("ul", {
                      staticClass: "tabnav-items"
                  }, [e._t("default")], 2)])
              },
              C = [],
              S = "tabnavData",
              N = {
                  name: "Tabnav",
                  constants: {
                      ProvideKey: S
                  },
                  provide: function() {
                      var e = this,
                          t = {
                              selectTab: this.selectTab
                          };
                      return Object.defineProperty(t, "activeTab", {
                          enumerable: !0,
                          get: function() {
                              return e.value
                          }
                      }), Object(r["a"])({}, S, t)
                  },
                  props: {
                      value: {
                          type: String,
                          required: !0
                      }
                  },
                  methods: {
                      selectTab: function(e) {
                          this.$emit("input", e)
                      }
                  }
              },
              R = N,
              L = (n("a662"), Object(b["a"])(R, T, C, !1, null, "c7042d42", null)),
              A = L.exports,
              I = function() {
                  var e = this,
                      t = e.$createElement,
                      n = e._self._c || t;
                  return n("li", {
                      staticClass: "tabnav-item"
                  }, [n("a", {
                      staticClass: "tabnav-link",
                      class: {
                          active: e.isActive
                      },
                      attrs: {
                          href: "#"
                      },
                      on: {
                          click: function(t) {
                              t.preventDefault(), e.tabnavData.selectTab(e.value)
                          }
                      }
                  }, [e._t("default")], 2)])
              },
              B = [],
              M = {
                  name: "TabnavItem",
                  inject: {
                      tabnavData: {
                          default: {
                              activeTab: null,
                              selectTab: function() {}
                          }
                      }
                  },
                  props: {
                      value: {
                          type: String,
                          default: ""
                      }
                  },
                  computed: {
                      isActive: function(e) {
                          var t = e.tabnavData,
                              n = e.value;
                          return t.activeTab === n
                      }
                  }
              },
              P = M,
              D = (n("bf33"), Object(b["a"])(P, I, B, !1, null, "355e7217", null)),
              $ = D.exports,
              F = function() {
                  var e = this,
                      t = e.$createElement,
                      n = e._self._c || t;
                  return n("SVGIcon", {
                      staticClass: "inline-plus-circle-solid-icon",
                      attrs: {
                          viewBox: "0 0 14 14"
                      }
                  }, [n("path", {
                      attrs: {
                          d: "M7.005 0.5h-0.008c-1.791 0.004-3.412 0.729-4.589 1.9l0-0c-1.179 1.177-1.908 2.803-1.908 4.6 0 3.59 2.91 6.5 6.5 6.5s6.5-2.91 6.5-6.5c0-3.587-2.906-6.496-6.492-6.5h-0zM4.005 7.52v-1h2.5v-2.51h1v2.51h2.5v1h-2.501v2.49h-1v-2.49z"
                      }
                  })])
              },
              q = [],
              H = n("be08"),
              V = {
                  name: "InlinePlusCircleSolidIcon",
                  components: {
                      SVGIcon: H["a"]
                  }
              },
              W = V,
              z = Object(b["a"])(W, F, q, !1, null, null, null),
              U = z.exports,
              G = function() {
                  var e = this,
                      t = e.$createElement,
                      n = e._self._c || t;
                  return n("SVGIcon", {
                      staticClass: "inline-minus-circle-solid-icon",
                      attrs: {
                          viewBox: "0 0 14 14"
                      }
                  }, [n("path", {
                      attrs: {
                          d: "m6.98999129.48999129c3.58985091 0 6.50000001 2.91014913 6.50000001 6.5 0 3.58985091-2.9101491 6.50000001-6.50000001 6.50000001-3.58985087 0-6.5-2.9101491-6.5-6.50000001 0-3.58985087 2.91014913-6.5 6.5-6.5zm3 6.02001742h-6v1h6z",
                          "fill-rule": "evenodd"
                      }
                  })])
              },
              K = [],
              Y = {
                  name: "InlineMinusCircleSolidIcon",
                  components: {
                      SVGIcon: H["a"]
                  }
              },
              J = Y,
              X = Object(b["a"])(J, G, K, !1, null, null, null),
              Q = X.exports,
              Z = {
                  request: "Request",
                  response: "Response"
              },
              ee = {
                  name: "EndpointExample",
                  components: {
                      InlineMinusCircleSolidIcon: Q,
                      InlinePlusCircleSolidIcon: U,
                      TabnavItem: $,
                      Tabnav: A,
                      CollapsibleCodeListing: v,
                      Row: E["a"],
                      Column: k["a"]
                  },
                  constants: {
                      Tab: Z
                  },
                  props: {
                      request: {
                          type: Object,
                          required: !0
                      },
                      response: {
                          type: Object,
                          required: !0
                      }
                  },
                  data: function() {
                      return {
                          isCollapsed: !0,
                          currentTab: Z.request
                      }
                  },
                  computed: {
                      Tab: function() {
                          return Z
                      },
                      isCollapsible: function(e) {
                          var t, n = e.response,
                              i = e.request,
                              a = e.currentTab,
                              s = (t = {}, Object(r["a"])(t, Z.request, i.content), Object(r["a"])(t, Z.response, n.content), t)[a] || [];
                          return s.some((function(e) {
                              var t = e.collapsible;
                              return t
                          }))
                      }
                  },
                  methods: {
                      isCurrent: function(e) {
                          return this.currentTab === e
                      },
                      showMore: function() {
                          this.isCollapsed = !1
                      },
                      showLess: function() {
                          this.isCollapsed = !0
                      }
                  }
              },
              te = ee,
              ne = (n("d2dc"), Object(b["a"])(te, O, _, !1, null, "d2aeae84", null)),
              re = ne.exports,
              ie = function() {
                  var e = this,
                      t = e.$createElement,
                      n = e._self._c || t;
                  return n("figure", {
                      attrs: {
                          id: e.anchor
                      }
                  }, [e._t("default")], 2)
              },
              ae = [],
              se = {
                  name: "Figure",
                  props: {
                      anchor: {
                          type: String,
                          required: !0
                      }
                  }
              },
              oe = se,
              ce = (n("fec5"), Object(b["a"])(oe, ie, ae, !1, null, "7bf080cc", null)),
              ue = ce.exports,
              le = function() {
                  var e = this,
                      t = e.$createElement,
                      n = e._self._c || t;
                  return n("figcaption", {
                      staticClass: "caption"
                  }, [n("strong", [e._v(e._s(e.title))]), e._v(" "), e._t("default")], 2)
              },
              fe = [],
              he = {
                  name: "FigureCaption",
                  props: {
                      title: {
                          type: String,
                          required: !0
                      }
                  }
              },
              de = he,
              pe = (n("e510"), Object(b["a"])(de, le, fe, !1, null, "103f3049", null)),
              ge = pe.exports,
              be = function() {
                  var e = this,
                      t = e.$createElement,
                      n = e._self._c || t;
                  return n("ImageAsset", {
                      attrs: {
                          alt: e.alt,
                          variants: e.variants
                      }
                  })
              },
              me = [],
              ve = n("8bd9"),
              ye = {
                  name: "InlineImage",
                  components: {
                      ImageAsset: ve["a"]
                  },
                  props: {
                      alt: {
                          type: String,
                          default: ""
                      },
                      variants: {
                          type: Array,
                          required: !0
                      }
                  }
              },
              we = ye,
              je = (n("259c"), Object(b["a"])(we, be, me, !1, null, "017dcbe6", null)),
              xe = je.exports,
              Oe = n("86d8"),
              _e = function() {
                  var e = this,
                      t = e.$createElement,
                      n = e._self._c || t;
                  return n("div", {
                      staticClass: "table-wrapper"
                  }, [n("table", [e._t("default")], 2)])
              },
              Ee = [],
              ke = {
                  name: "Table"
              },
              Te = ke,
              Ce = (n("72af"), n("87fa"), Object(b["a"])(Te, _e, Ee, !1, null, "518887e1", null)),
              Se = Ce.exports,
              Ne = function() {
                  var e = this,
                      t = e.$createElement,
                      n = e._self._c || t;
                  return n("s", [e._t("default")], 2)
              },
              Re = [],
              Le = {
                  name: "StrikeThrough"
              },
              Ae = Le,
              Ie = (n("0c7e"), Object(b["a"])(Ae, Ne, Re, !1, null, "e8407702", null)),
              Be = Ie.exports;

          function Me(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  t && (r = r.filter((function(t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable
                  }))), n.push.apply(n, r)
              }
              return n
          }

          function Pe(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2 ? Me(Object(n), !0).forEach((function(t) {
                      Object(r["a"])(e, t, n[t])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Me(Object(n)).forEach((function(t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                  }))
              }
              return e
          }
          var De = {
                  aside: "aside",
                  codeListing: "codeListing",
                  endpointExample: "endpointExample",
                  heading: "heading",
                  orderedList: "orderedList",
                  paragraph: "paragraph",
                  table: "table",
                  termList: "termList",
                  unorderedList: "unorderedList",
                  dictionaryExample: "dictionaryExample"
              },
              $e = {
                  codeVoice: "codeVoice",
                  emphasis: "emphasis",
                  image: "image",
                  inlineHead: "inlineHead",
                  link: "link",
                  newTerm: "newTerm",
                  reference: "reference",
                  strong: "strong",
                  text: "text",
                  superscript: "superscript",
                  subscript: "subscript",
                  strikethrough: "strikethrough"
              },
              Fe = {
                  both: "both",
                  column: "column",
                  none: "none",
                  row: "row"
              };

          function qe(e, t) {
              var n = function(n) {
                      return n.map(qe(e, t))
                  },
                  r = function(t) {
                      return t.map((function(t) {
                          return e("li", {}, n(t.content))
                      }))
                  },
                  l = function(t) {
                      var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Fe.none;
                      switch (r) {
                          case Fe.both:
                              var i = Object(s["a"])(t),
                                  o = i[0],
                                  c = i.slice(1);
                              return [e("thead", {}, [e("tr", {}, o.map((function(t) {
                                  return e("th", {
                                      attrs: {
                                          scope: "col"
                                      }
                                  }, n(t))
                              })))]), e("tbody", {}, c.map((function(t) {
                                  var r = Object(s["a"])(t),
                                      i = r[0],
                                      o = r.slice(1);
                                  return e("tr", {}, [e("th", {
                                      attrs: {
                                          scope: "row"
                                      }
                                  }, n(i))].concat(Object(a["a"])(o.map((function(t) {
                                      return e("td", {}, n(t))
                                  })))))
                              })))];
                          case Fe.column:
                              return [e("tbody", {}, t.map((function(t) {
                                  var r = Object(s["a"])(t),
                                      i = r[0],
                                      o = r.slice(1);
                                  return e("tr", {}, [e("th", {
                                      attrs: {
                                          scope: "row"
                                      }
                                  }, n(i))].concat(Object(a["a"])(o.map((function(t) {
                                      return e("td", {}, n(t))
                                  })))))
                              })))];
                          case Fe.row:
                              var u = Object(s["a"])(t),
                                  l = u[0],
                                  f = u.slice(1);
                              return [e("thead", {}, [e("tr", {}, l.map((function(t) {
                                  return e("th", {
                                      attrs: {
                                          scope: "col"
                                      }
                                  }, n(t))
                              })))]), e("tbody", {}, f.map((function(t) {
                                  return e("tr", {}, t.map((function(t) {
                                      return e("td", {}, n(t))
                                  })))
                              })))];
                          default:
                              return [e("tbody", {}, t.map((function(t) {
                                  return e("tr", {}, t.map((function(t) {
                                      return e("td", {}, n(t))
                                  })))
                              })))]
                      }
                  },
                  f = function(t) {
                      var r = t.metadata,
                          s = r.abstract,
                          o = r.anchor,
                          c = r.title,
                          u = Object(i["a"])(t, ["metadata"]);
                      return e(ue, {
                          props: {
                              anchor: o
                          }
                      }, [].concat(Object(a["a"])(c && s && s.length ? [e(ge, {
                          props: {
                              title: c
                          }
                      }, n(s))] : []), [n([u])]))
                  };
              return function(i) {
                  switch (i.type) {
                      case De.aside:
                          var a = {
                              kind: i.style,
                              name: i.name
                          };
                          return e(o["a"], {
                              props: a
                          }, n(i.content));
                      case De.codeListing:
                          if (i.metadata && i.metadata.anchor) return f(i);
                          var s = {
                              syntax: i.syntax,
                              fileType: i.fileType,
                              content: i.code,
                              showLineNumbers: i.showLineNumbers
                          };
                          return e(c["a"], {
                              props: s
                          });
                      case De.endpointExample:
                          var h = {
                              request: i.request,
                              response: i.response
                          };
                          return e(re, {
                              props: h
                          }, n(i.summary || []));
                      case De.heading:
                          return e("h".concat(i.level), {
                              attrs: {
                                  id: i.anchor
                              }
                          }, i.text);
                      case De.orderedList:
                          return e("ol", {}, r(i.items));
                      case De.paragraph:
                          return e("p", {}, n(i.inlineContent));
                      case De.table:
                          return i.metadata && i.metadata.anchor ? f(i) : e(Se, {}, l(i.rows, i.header));
                      case De.termList:
                          return e("dl", {}, i.items.map((function(t) {
                              var r = t.term,
                                  i = t.definition;
                              return [e("dt", {}, n(r.inlineContent)), e("dd", {}, n(i.content))]
                          })));
                      case De.unorderedList:
                          return e("ul", {}, r(i.items));
                      case De.dictionaryExample:
                          var d = {
                              example: i.example
                          };
                          return e(x, {
                              props: d
                          }, n(i.summary || []));
                      case $e.codeVoice:
                          return e(u["a"], {}, i.code);
                      case $e.emphasis:
                      case $e.newTerm:
                          return e("em", n(i.inlineContent));
                      case $e.image:
                          if (i.metadata && i.metadata.anchor) return f(i);
                          var p = t[i.identifier];
                          return p ? e(xe, {
                              props: {
                                  alt: p.alt,
                                  variants: p.variants
                              }
                          }) : null;
                      case $e.link:
                          return e("a", {
                              attrs: {
                                  href: i.destination
                              }
                          }, i.title);
                      case $e.reference:
                          var g = t[i.identifier];
                          if (!g) return null;
                          var b = i.overridingTitleInlineContent || g.titleInlineContent,
                              m = i.overridingTitle || g.title;
                          return e(Oe["a"], {
                              props: {
                                  url: g.url,
                                  kind: g.kind,
                                  role: g.role,
                                  isActive: i.isActive
                              }
                          }, b ? n(b) : m);
                      case $e.strong:
                      case $e.inlineHead:
                          return e("strong", n(i.inlineContent));
                      case $e.text:
                          return i.text;
                      case $e.superscript:
                          return e("sup", n(i.inlineContent));
                      case $e.subscript:
                          return e("sub", n(i.inlineContent));
                      case $e.strikethrough:
                          return e(Be, n(i.inlineContent));
                      default:
                          return null
                  }
              }
          }
          var He, Ve, We = {
                  name: "ContentNode",
                  constants: {
                      TableHeaderStyle: Fe
                  },
                  render: function(e) {
                      return e(this.tag, {
                          class: "content"
                      }, this.content.map(qe(e, this.references), this))
                  },
                  inject: {
                      references: {
                          default: function() {
                              return {}
                          }
                      }
                  },
                  props: {
                      content: {
                          type: Array,
                          required: !0
                      },
                      tag: {
                          type: String,
                          default: function() {
                              return "div"
                          }
                      }
                  },
                  methods: {
                      map: function(e) {
                          function t() {
                              var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                              return n.map((function(n) {
                                  switch (n.type) {
                                      case De.aside:
                                          return e(Pe(Pe({}, n), {}, {
                                              content: t(n.content)
                                          }));
                                      case De.dictionaryExample:
                                          return e(Pe(Pe({}, n), {}, {
                                              summary: t(n.summary)
                                          }));
                                      case De.paragraph:
                                      case $e.emphasis:
                                      case $e.strong:
                                      case $e.inlineHead:
                                      case $e.superscript:
                                      case $e.subscript:
                                      case $e.strikethrough:
                                      case $e.newTerm:
                                          return e(Pe(Pe({}, n), {}, {
                                              inlineContent: t(n.inlineContent)
                                          }));
                                      case De.orderedList:
                                      case De.unorderedList:
                                          return e(Pe(Pe({}, n), {}, {
                                              items: n.items.map((function(e) {
                                                  return Pe(Pe({}, e), {}, {
                                                      content: t(e.content)
                                                  })
                                              }))
                                          }));
                                      case De.table:
                                          return e(Pe(Pe({}, n), {}, {
                                              rows: n.rows.map((function(e) {
                                                  return e.map(t)
                                              }))
                                          }));
                                      case De.termList:
                                          return e(Pe(Pe({}, n), {}, {
                                              items: n.items.map((function(e) {
                                                  return Pe(Pe({}, e), {}, {
                                                      term: {
                                                          inlineContent: t(e.term.inlineContent)
                                                      },
                                                      definition: {
                                                          content: t(e.definition.content)
                                                      }
                                                  })
                                              }))
                                          }));
                                      default:
                                          return e(n)
                                  }
                              }))
                          }
                          return t(this.content)
                      },
                      forEach: function(e) {
                          function t() {
                              var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                              n.forEach((function(n) {
                                  switch (e(n), n.type) {
                                      case De.aside:
                                          t(n.content);
                                          break;
                                      case De.paragraph:
                                      case $e.emphasis:
                                      case $e.strong:
                                      case $e.inlineHead:
                                      case $e.newTerm:
                                      case $e.superscript:
                                      case $e.subscript:
                                      case $e.strikethrough:
                                          t(n.inlineContent);
                                          break;
                                      case De.orderedList:
                                      case De.unorderedList:
                                          n.items.forEach((function(e) {
                                              return t(e.content)
                                          }));
                                          break;
                                      case De.dictionaryExample:
                                          t(n.summary);
                                          break;
                                      case De.table:
                                          n.rows.forEach((function(e) {
                                              e.forEach(t)
                                          }));
                                          break;
                                      case De.termList:
                                          n.items.forEach((function(e) {
                                              t(e.term.inlineContent), t(e.definition.content)
                                          }));
                                          break
                                  }
                              }))
                          }
                          return t(this.content)
                      }
                  },
                  BlockType: De,
                  InlineType: $e
              },
              ze = We,
              Ue = Object(b["a"])(ze, He, Ve, !1, null, null, null);
          t["a"] = Ue.exports
      },
      "57b1": function(e, t, n) {
          var r = n("d864"),
              i = n("335c"),
              a = n("241e"),
              s = n("b447"),
              o = n("bfac");
          e.exports = function(e, t) {
              var n = 1 == e,
                  c = 2 == e,
                  u = 3 == e,
                  l = 4 == e,
                  f = 6 == e,
                  h = 5 == e || f,
                  d = t || o;
              return function(t, o, p) {
                  for (var g, b, m = a(t), v = i(m), y = r(o, p, 3), w = s(v.length), j = 0, x = n ? d(t, w) : c ? d(t, 0) : void 0; w > j; j++)
                      if ((h || j in v) && (g = v[j], b = y(g, j, m), e))
                          if (n) x[j] = b;
                          else if (b) switch (e) {
                      case 3:
                          return !0;
                      case 5:
                          return g;
                      case 6:
                          return j;
                      case 2:
                          x.push(g)
                  } else if (l) return !1;
                  return f ? -1 : u || l ? l : x
              }
          }
      },
      "5aee": function(e, t, n) {
          "use strict";
          var r = n("d9f6").f,
              i = n("a159"),
              a = n("5c95"),
              s = n("d864"),
              o = n("1173"),
              c = n("a22a"),
              u = n("30f1"),
              l = n("50ed"),
              f = n("4c95"),
              h = n("8e60"),
              d = n("ebfd").fastKey,
              p = n("9f79"),
              g = h ? "_s" : "size",
              b = function(e, t) {
                  var n, r = d(t);
                  if ("F" !== r) return e._i[r];
                  for (n = e._f; n; n = n.n)
                      if (n.k == t) return n
              };
          e.exports = {
              getConstructor: function(e, t, n, u) {
                  var l = e((function(e, r) {
                      o(e, l, t, "_i"), e._t = t, e._i = i(null), e._f = void 0, e._l = void 0, e[g] = 0, void 0 != r && c(r, n, e[u], e)
                  }));
                  return a(l.prototype, {
                      clear: function() {
                          for (var e = p(this, t), n = e._i, r = e._f; r; r = r.n) r.r = !0, r.p && (r.p = r.p.n = void 0), delete n[r.i];
                          e._f = e._l = void 0, e[g] = 0
                      },
                      delete: function(e) {
                          var n = p(this, t),
                              r = b(n, e);
                          if (r) {
                              var i = r.n,
                                  a = r.p;
                              delete n._i[r.i], r.r = !0, a && (a.n = i), i && (i.p = a), n._f == r && (n._f = i), n._l == r && (n._l = a), n[g]--
                          }
                          return !!r
                      },
                      forEach: function(e) {
                          p(this, t);
                          var n, r = s(e, arguments.length > 1 ? arguments[1] : void 0, 3);
                          while (n = n ? n.n : this._f) {
                              r(n.v, n.k, this);
                              while (n && n.r) n = n.p
                          }
                      },
                      has: function(e) {
                          return !!b(p(this, t), e)
                      }
                  }), h && r(l.prototype, "size", {
                      get: function() {
                          return p(this, t)[g]
                      }
                  }), l
              },
              def: function(e, t, n) {
                  var r, i, a = b(e, t);
                  return a ? a.v = n : (e._l = a = {
                      i: i = d(t, !0),
                      k: t,
                      v: n,
                      p: r = e._l,
                      n: void 0,
                      r: !1
                  }, e._f || (e._f = a), r && (r.n = a), e[g]++, "F" !== i && (e._i[i] = a)), e
              },
              getEntry: b,
              setStrong: function(e, t, n) {
                  u(e, t, (function(e, n) {
                      this._t = p(e, t), this._k = n, this._l = void 0
                  }), (function() {
                      var e = this,
                          t = e._k,
                          n = e._l;
                      while (n && n.r) n = n.p;
                      return e._t && (e._l = n = n ? n.n : e._t._f) ? l(0, "keys" == t ? n.k : "values" == t ? n.v : [n.k, n.v]) : (e._t = void 0, l(1))
                  }), n ? "entries" : "values", !n, !0), f(t)
              }
          }
      },
      "5c27": function(e, t, n) {},
      "5cb6": function(e, t, n) {
          var r = n("63b6");
          r(r.P + r.R, "Map", {
              toJSON: n("f228")("Map")
          })
      },
      "5fda": function(e, t, n) {
          "use strict";
          n("68aa")
      },
      "620a": function(e, t, n) {
          "use strict";
          var r = function() {
                  var e = this,
                      t = e.$createElement,
                      n = e._self._c || t;
                  return n("div", {
                      staticClass: "col",
                      class: e.classes
                  }, [e._t("default")], 2)
              },
              i = [],
              a = (n("8e6e"), n("f386"), n("bd86"));
          n("456d"), n("ac6a"), n("5df3"), n("4f7f");

          function s(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  t && (r = r.filter((function(t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable
                  }))), n.push.apply(n, r)
              }
              return n
          }

          function o(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2 ? s(Object(n), !0).forEach((function(t) {
                      Object(a["a"])(e, t, n[t])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                  }))
              }
              return e
          }
          var c = 0,
              u = 12,
              l = new Set(["large", "medium", "small"]),
              f = function(e) {
                  return {
                      type: Object,
                      default: function() {
                          return {}
                      },
                      validator: function(t) {
                          return Object.keys(t).every((function(n) {
                              return l.has(n) && e(t[n])
                          }))
                      }
                  }
              },
              h = f((function(e) {
                  return "boolean" === typeof e
              })),
              d = f((function(e) {
                  return "number" === typeof e && e >= c && e <= u
              })),
              p = {
                  name: "GridColumn",
                  props: {
                      isCentered: h,
                      isUnCentered: h,
                      span: o(o({}, d), {}, {
                          default: function() {
                              return {
                                  large: u
                              }
                          }
                      })
                  },
                  computed: {
                      classes: function() {
                          var e;
                          return e = {}, Object(a["a"])(e, "large-".concat(this.span.large), void 0 !== this.span.large), Object(a["a"])(e, "medium-".concat(this.span.medium), void 0 !== this.span.medium), Object(a["a"])(e, "small-".concat(this.span.small), void 0 !== this.span.small), Object(a["a"])(e, "large-centered", !!this.isCentered.large), Object(a["a"])(e, "medium-centered", !!this.isCentered.medium), Object(a["a"])(e, "small-centered", !!this.isCentered.small), Object(a["a"])(e, "large-uncentered", !!this.isUnCentered.large), Object(a["a"])(e, "medium-uncentered", !!this.isUnCentered.medium), Object(a["a"])(e, "small-uncentered", !!this.isUnCentered.small), e
                      }
                  }
              },
              g = p,
              b = (n("c108"), n("2877")),
              m = Object(b["a"])(g, r, i, !1, null, "d824be08", null);
          t["a"] = m.exports
      },
      "63b8": function(e, t, n) {
          "use strict";
          n.d(t, "a", (function() {
              return a
          })), n.d(t, "b", (function() {
              return o
          }));
          var r, i = n("bd86"),
              a = {
                  large: "large",
                  medium: "medium",
                  small: "small"
              },
              s = (r = {}, Object(i["a"])(r, a.small, 0), Object(i["a"])(r, a.medium, 1), Object(i["a"])(r, a.large, 2), r);

          function o(e, t) {
              return s[e] > s[t]
          }
      },
      "66cd": function(e, t, n) {
          "use strict";
          n.d(t, "a", (function() {
              return r
          }));
          var r = {
              article: "article",
              codeListing: "codeListing",
              collection: "collection",
              collectionGroup: "collectionGroup",
              containerSymbol: "containerSymbol",
              devLink: "devLink",
              dictionarySymbol: "dictionarySymbol",
              generic: "generic",
              link: "link",
              media: "media",
              pseudoCollection: "pseudoCollection",
              pseudoSymbol: "pseudoSymbol",
              restRequestSymbol: "restRequestSymbol",
              sampleCode: "sampleCode",
              symbol: "symbol",
              table: "table",
              learn: "learn",
              overview: "overview",
              project: "project",
              tutorial: "tutorial",
              resources: "resources"
          }
      },
      "68aa": function(e, t, n) {},
      "68f7": function(e, t, n) {
          "use strict";
          var r = n("63b6"),
              i = n("79aa"),
              a = n("d864"),
              s = n("a22a");
          e.exports = function(e) {
              r(r.S, e, {
                  from: function(e) {
                      var t, n, r, o, c = arguments[1];
                      return i(this), t = void 0 !== c, t && i(c), void 0 == e ? new this : (n = [], t ? (r = 0, o = a(c, arguments[2], 2), s(e, !1, (function(e) {
                          n.push(o(e, r++))
                      }))) : s(e, !1, n.push, n), new this(n))
                  }
              })
          }
      },
      "6b54": function(e, t, n) {
          "use strict";
          n("3846");
          var r = n("cb7c"),
              i = n("0bfb"),
              a = n("9e1e"),
              s = "toString",
              o = /./ [s],
              c = function(e) {
                  n("2aba")(RegExp.prototype, s, e, !0)
              };
          n("79e5")((function() {
              return "/a/b" != o.call({
                  source: "a",
                  flags: "b"
              })
          })) ? c((function() {
              var e = r(this);
              return "/".concat(e.source, "/", "flags" in e ? e.flags : !a && e instanceof RegExp ? i.call(e) : void 0)
          })) : o.name != s && c((function() {
              return o.call(this)
          }))
      },
      "6ea2": function(e, t, n) {
          "use strict";
          n("e44b")
      },
      7075: function(e, t, n) {
          "use strict";
          var r = n("63b6");
          e.exports = function(e) {
              r(r.S, e, {
                  of: function() {
                      var e = arguments.length,
                          t = new Array(e);
                      while (e--) t[e] = arguments[e];
                      return new this(t)
                  }
              })
          }
      },
      "72af": function(e, t, n) {
          "use strict";
          n("951c")
      },
      "72e7": function(e, t, n) {
          "use strict";
          n("ac6a"), n("96cf");
          var r = n("3b8d"),
              i = {
                  up: "up",
                  down: "down"
              };
          t["a"] = {
              constants: {
                  IntersectionDirections: i
              },
              data: function() {
                  return {
                      intersectionObserver: null,
                      intersectionPreviousScrollY: 0,
                      intersectionScrollDirection: i.down
                  }
              },
              computed: {
                  intersectionThreshold: function() {
                      for (var e = [], t = 0; t <= 1; t += .01) e.push(t);
                      return e
                  },
                  intersectionRoot: function() {
                      return null
                  },
                  intersectionRootMargin: function() {
                      return "0px 0px 0px 0px"
                  },
                  intersectionObserverOptions: function() {
                      return {
                          root: this.intersectionRoot,
                          rootMargin: this.intersectionRootMargin,
                          threshold: this.intersectionThreshold
                      }
                  }
              },
              mounted: function() {
                  var e = Object(r["a"])(regeneratorRuntime.mark((function e() {
                      var t = this;
                      return regeneratorRuntime.wrap((function(e) {
                          while (1) switch (e.prev = e.next) {
                              case 0:
                                  return e.next = 2, n.e("chunk-2d0d3105").then(n.t.bind(null, "5abe", 7));
                              case 2:
                                  this.intersectionObserver = new IntersectionObserver((function(e) {
                                      t.detectIntersectionScrollDirection();
                                      var n = t.onIntersect;
                                      n ? e.forEach(n) : console.warn("onIntersect not implemented")
                                  }), this.intersectionObserverOptions), this.getIntersectionTargets().forEach((function(e) {
                                      t.intersectionObserver.observe(e)
                                  }));
                              case 4:
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
              beforeDestroy: function() {
                  this.intersectionObserver && this.intersectionObserver.disconnect()
              },
              methods: {
                  getIntersectionTargets: function() {
                      return [this.$el]
                  },
                  detectIntersectionScrollDirection: function() {
                      window.scrollY < this.intersectionPreviousScrollY ? this.intersectionScrollDirection = i.down : window.scrollY > this.intersectionPreviousScrollY && (this.intersectionScrollDirection = i.up), this.intersectionPreviousScrollY = window.scrollY
                  }
              }
          }
      },
      "733c": function(e, t, n) {
          var r = n("63b6"),
              i = n("a159"),
              a = n("79aa"),
              s = n("e4ae"),
              o = n("f772"),
              c = n("294c"),
              u = n("c189"),
              l = (n("e53d").Reflect || {}).construct,
              f = c((function() {
                  function e() {}
                  return !(l((function() {}), [], e) instanceof e)
              })),
              h = !c((function() {
                  l((function() {}))
              }));
          r(r.S + r.F * (f || h), "Reflect", {
              construct: function(e, t) {
                  a(e), s(t);
                  var n = arguments.length < 3 ? e : a(arguments[2]);
                  if (h && !f) return l(e, t, n);
                  if (e == n) {
                      switch (t.length) {
                          case 0:
                              return new e;
                          case 1:
                              return new e(t[0]);
                          case 2:
                              return new e(t[0], t[1]);
                          case 3:
                              return new e(t[0], t[1], t[2]);
                          case 4:
                              return new e(t[0], t[1], t[2], t[3])
                      }
                      var r = [null];
                      return r.push.apply(r, t), new(u.apply(e, r))
                  }
                  var c = n.prototype,
                      d = i(o(c) ? c : Object.prototype),
                      p = Function.apply.call(e, d, t);
                  return o(p) ? p : d
              }
          })
      },
      "748c": function(e, t, n) {
          "use strict";
          n.d(t, "b", (function() {
              return r
          })), n.d(t, "a", (function() {
              return i
          }));
          n("7514"), n("6762"), n("2fdb");

          function r(e) {
              return e.reduce((function(e, t) {
                  return t.traits.includes("dark") ? e.dark.push(t) : e.light.push(t), e
              }), {
                  light: [],
                  dark: []
              })
          }

          function i(e) {
              var t = ["1x", "2x", "3x"];
              return t.reduce((function(t, n) {
                  var r = e.find((function(e) {
                      return e.traits.includes(n)
                  }));
                  return r ? t.concat({
                      density: n,
                      src: r.url,
                      size: r.size
                  }) : t
              }), [])
          }
      },
      7514: function(e, t, n) {
          "use strict";
          var r = n("5ca1"),
              i = n("0a49")(5),
              a = "find",
              s = !0;
          a in [] && Array(1)[a]((function() {
              s = !1
          })), r(r.P + r.F * s, "Array", {
              find: function(e) {
                  return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
              }
          }), n("9c6c")(a)
      },
      7554: function(e, t, n) {
          n("68f7")("Map")
      },
      "76ab": function(e, t, n) {
          "use strict";
          var r = function() {
                  var e = this,
                      t = e.$createElement,
                      n = e._self._c || t;
                  return n(e.resolvedComponent, e._b({
                      tag: "component",
                      staticClass: "button-cta",
                      class: {
                          "is-dark": e.isDark
                      }
                  }, "component", e.componentProps, !1), [e._t("default")], 2)
              },
              i = [],
              a = n("86d8"),
              s = {
                  name: "ButtonLink",
                  components: {
                      Reference: a["a"]
                  },
                  props: {
                      url: {
                          type: String,
                          required: !1
                      },
                      isDark: {
                          type: Boolean,
                          default: !1
                      }
                  },
                  computed: {
                      resolvedComponent: function(e) {
                          var t = e.url;
                          return t ? a["a"] : "button"
                      },
                      componentProps: function(e) {
                          var t = e.url;
                          return t ? {
                              url: t
                          } : {}
                      }
                  }
              },
              o = s,
              c = (n("f7a6"), n("2877")),
              u = Object(c["a"])(o, r, i, !1, null, "1aec424c", null);
          t["a"] = u.exports
      },
      "77f5": function(e, t, n) {
          "use strict";
          n("a5a1")
      },
      "7b1f": function(e, t, n) {
          "use strict";
          n("3b2b");
          var r, i, a = {
                  functional: !0,
                  name: "WordBreak",
                  render: function(e, t) {
                      var n = t.props,
                          r = t.slots,
                          i = t.data,
                          a = r().default || [],
                          s = a.filter((function(e) {
                              return e.text && !e.tag
                          }));
                      if (0 === s.length || s.length !== a.length) return e(n.tag, i, a);
                      var o = s.map((function(e) {
                              var t = e.text;
                              return t
                          })).join(),
                          c = [],
                          u = null,
                          l = 0;
                      while (null !== (u = n.safeBoundaryPattern.exec(o))) {
                          var f = u.index + 1;
                          c.push(o.slice(l, f)), c.push(e("wbr", {
                              key: u.index
                          })), l = f
                      }
                      return c.push(o.slice(l, o.length)), e(n.tag, i, c)
                  },
                  props: {
                      safeBoundaryPattern: {
                          type: RegExp,
                          default: function() {
                              return /([a-z](?=[A-Z])|(:)\w|\w(?=[._]\w))/g
                          }
                      },
                      tag: {
                          type: String,
                          default: function() {
                              return "span"
                          }
                      }
                  }
              },
              s = a,
              o = n("2877"),
              c = Object(o["a"])(s, r, i, !1, null, null, null);
          t["a"] = c.exports
      },
      "7b69": function(e, t, n) {
          "use strict";
          var r = function() {
                  var e = this,
                      t = e.$createElement,
                      n = e._self._c || t;
                  return n("div", {
                      staticClass: "code-listing",
                      class: {
                          "single-line": 1 === e.syntaxHighlightedLines.length
                      },
                      attrs: {
                          "data-syntax": e.syntaxNameNormalized
                      }
                  }, [e.fileName ? n("Filename", {
                      attrs: {
                          isActionable: e.isFileNameActionable,
                          fileType: e.fileType
                      },
                      on: {
                          click: function(t) {
                              e.$emit("file-name-click")
                          }
                      }
                  }, [e._v(e._s(e.fileName) + "\n    ")]) : e._e(), n("div", {
                      staticClass: "container-general"
                  }, [n("pre", [n("code", e._l(e.syntaxHighlightedLines, (function(t, r) {
                      return n("span", {
                          key: r,
                          class: ["code-line-container", {
                              highlighted: e.isHighlighted(r)
                          }]
                      }, [n("span", {
                          directives: [{
                              name: "show",
                              rawName: "v-show",
                              value: e.showLineNumbers,
                              expression: "showLineNumbers"
                          }],
                          staticClass: "code-number",
                          attrs: {
                              "data-line-number": e.lineNumberFor(r)
                          }
                      }), e._v("\n"), n("span", {
                          staticClass: "code-line",
                          domProps: {
                              innerHTML: e._s(t)
                          }
                      })])
                  })), 0)])])], 1)
              },
              i = [],
              a = (n("96cf"), n("3b8d")),
              s = (n("ac6a"), n("5df3"), n("4f7f"), n("c5f6"), n("002d")),
              o = n("8649"),
              c = (n("1c4c"), n("4917"), n("28a5"), n("6762"), n("2fdb"), n("768b")),
              u = (n("7514"), n("75fc")),
              l = (n("f400"), n("456d"), n("ffc1"), n("1020")),
              f = n.n(l),
              h = {
                  bash: ["sh", "zsh"],
                  c: ["h"],
                  cpp: ["cc", "c++", "h++", "hpp", "hh", "hxx", "cxx"],
                  css: [],
                  diff: ["patch"],
                  http: ["https"],
                  java: ["jsp"],
                  javascript: ["js", "jsx", "mjs", "cjs"],
                  json: [],
                  llvm: [],
                  markdown: ["md", "mkdown", "mkd"],
                  objectivec: ["mm", "objc", "obj-c"],
                  perl: ["pl", "pm"],
                  php: ["php", "php3", "php4", "php5", "php6", "php7"],
                  python: ["py", "gyp", "ipython"],
                  ruby: ["rb", "gemspec", "podspec", "thor", "irb"],
                  scss: [],
                  swift: [],
                  xml: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist", "wsf", "svg"]
              },
              d = new Set(["markdown", "swift"]),
              p = {
                  c: ["c-like", "c"],
                  cpp: ["c-like", "cpp"]
              },
              g = Object.entries(h),
              b = new Set(Object.keys(h)),
              m = new Map;

          function v(e) {
              return y.apply(this, arguments)
          }

          function y() {
              return y = Object(a["a"])(regeneratorRuntime.mark((function e(t) {
                  var r;
                  return regeneratorRuntime.wrap((function(e) {
                      while (1) switch (e.prev = e.next) {
                          case 0:
                              return r = p[t] || [t], e.prev = 1, e.next = 4, r.reduce(function() {
                                  var e = Object(a["a"])(regeneratorRuntime.mark((function e(t, r) {
                                      var i;
                                      return regeneratorRuntime.wrap((function(e) {
                                          while (1) switch (e.prev = e.next) {
                                              case 0:
                                                  return e.next = 2, t;
                                              case 2:
                                                  if (!d.has(r)) {
                                                      e.next = 8;
                                                      break
                                                  }
                                                  return e.next = 5, n("1417")("./".concat(r));
                                              case 5:
                                                  i = e.sent, e.next = 11;
                                                  break;
                                              case 8:
                                                  return e.next = 10, n("32b3")("./".concat(r));
                                              case 10:
                                                  i = e.sent;
                                              case 11:
                                                  f.a.registerLanguage(r, i.default);
                                              case 12:
                                              case "end":
                                                  return e.stop()
                                          }
                                      }), e)
                                  })));
                                  return function(t, n) {
                                      return e.apply(this, arguments)
                                  }
                              }(), Promise.resolve());
                          case 4:
                              return e.abrupt("return", !0);
                          case 7:
                              return e.prev = 7, e.t0 = e["catch"](1), console.error("Could not load ".concat(t, " file")), e.abrupt("return", !1);
                          case 11:
                          case "end":
                              return e.stop()
                      }
                  }), e, null, [
                      [1, 7]
                  ])
              }))), y.apply(this, arguments)
          }

          function w(e) {
              if (b.has(e)) return e;
              var t = g.find((function(t) {
                  var n = Object(c["a"])(t, 2),
                      r = n[1];
                  return r.includes(e)
              }));
              return t ? t[0] : null
          }

          function j(e) {
              if (m.has(e)) return m.get(e);
              var t = w(e);
              return m.set(e, t), t
          }
          f.a.configure({
              classPrefix: "syntax-",
              languages: Object(u["a"])(b)
          });
          var x = function() {
                  var e = Object(a["a"])(regeneratorRuntime.mark((function e(t) {
                      var n;
                      return regeneratorRuntime.wrap((function(e) {
                          while (1) switch (e.prev = e.next) {
                              case 0:
                                  if (n = j(t), n && !f.a.listLanguages().includes(n)) {
                                      e.next = 3;
                                      break
                                  }
                                  return e.abrupt("return", !1);
                              case 3:
                                  return e.abrupt("return", v(n));
                              case 4:
                              case "end":
                                  return e.stop()
                          }
                      }), e)
                  })));
                  return function(t) {
                      return e.apply(this, arguments)
                  }
              }(),
              O = /\r\n|\r|\n/g;

          function _(e) {
              return 0 === e.length ? [] : e.split(O)
          }

          function E(e) {
              return (e.trim().match(O) || []).length
          }

          function k(e) {
              var t = e.className;
              if (/syntax-/.test(t)) {
                  var n = _(e.innerHTML),
                      r = n.reduce((function(e, n) {
                          return "".concat(e, '<span class="').concat(t, '">').concat(n, "</span>\n")
                      }), "");
                  e.outerHTML = r.trim()
              }
          }

          function T(e) {
              Array.from(e.childNodes).forEach((function(e) {
                  E(e.textContent) > 0 && (e.childNodes.length > 0 ? T(e) : k(e.parentNode))
              }))
          }

          function C(e, t) {
              if (!f.a.getLanguage(t)) throw new Error("Unsupported language for syntax highlighting: ".concat(t));
              return f.a.highlight(e, {
                  language: t,
                  ignoreIllegals: !0
              }).value
          }

          function S(e, t) {
              var n = e.join("\n"),
                  r = C(n, t),
                  i = document.createElement("code");
              return i.innerHTML = r, T(i), i.innerHTML.split("\n")
          }
          var N = function() {
                  var e = this,
                      t = e.$createElement,
                      n = e._self._c || t;
                  return n("span", {
                      staticClass: "filename"
                  }, [e.isActionable ? n("a", {
                      attrs: {
                          href: "#"
                      },
                      on: {
                          click: function(t) {
                              t.preventDefault(), e.$emit("click")
                          }
                      }
                  }, [n("FileIcon", {
                      attrs: {
                          fileType: e.fileType
                      }
                  }), e._t("default")], 2) : n("span", [n("FileIcon", {
                      attrs: {
                          fileType: e.fileType
                      }
                  }), e._t("default")], 2)])
              },
              R = [],
              L = function() {
                  var e = this,
                      t = e.$createElement,
                      n = e._self._c || t;
                  return "swift" === e.fileType ? n("SwiftFileIcon", {
                      staticClass: "file-icon"
                  }) : n("GenericFileIcon", {
                      staticClass: "file-icon"
                  })
              },
              A = [],
              I = function() {
                  var e = this,
                      t = e.$createElement,
                      n = e._self._c || t;
                  return n("SVGIcon", {
                      staticClass: "swift-file-icon",
                      attrs: {
                          viewBox: "0 0 14 14"
                      }
                  }, [n("path", {
                      attrs: {
                          d: "M8.033 1l3.967 4.015v7.985h-10v-12zM7.615 2h-4.615v10h8v-6.574z"
                      }
                  }), n("path", {
                      attrs: {
                          d: "M7 1h1v4h-1z"
                      }
                  }), n("path", {
                      attrs: {
                          d: "M7 5h5v1h-5z"
                      }
                  })])
              },
              B = [],
              M = n("be08"),
              P = {
                  name: "SwiftFileIcon",
                  components: {
                      SVGIcon: M["a"]
                  }
              },
              D = P,
              $ = n("2877"),
              F = Object($["a"])(D, I, B, !1, null, null, null),
              q = F.exports,
              H = function() {
                  var e = this,
                      t = e.$createElement,
                      n = e._self._c || t;
                  return n("SVGIcon", {
                      staticClass: "generic-file-icon",
                      attrs: {
                          viewBox: "0 0 14 14"
                      }
                  }, [n("path", {
                      attrs: {
                          d: "M8.033 1l3.967 4.015v7.985h-10v-12zM7.615 2h-4.615v10h8v-6.574z"
                      }
                  }), n("path", {
                      attrs: {
                          d: "M7 1h1v4h-1z"
                      }
                  }), n("path", {
                      attrs: {
                          d: "M7 5h5v1h-5z"
                      }
                  })])
              },
              V = [],
              W = {
                  name: "GenericFileIcon",
                  components: {
                      SVGIcon: M["a"]
                  }
              },
              z = W,
              U = Object($["a"])(z, H, V, !1, null, null, null),
              G = U.exports,
              K = {
                  name: "CodeListingFileIcon",
                  components: {
                      SwiftFileIcon: q,
                      GenericFileIcon: G
                  },
                  props: {
                      fileType: String
                  }
              },
              Y = K,
              J = (n("aff9"), Object($["a"])(Y, L, A, !1, null, "4dcf8844", null)),
              X = J.exports,
              Q = {
                  name: "CodeListingFilename",
                  components: {
                      FileIcon: X
                  },
                  props: {
                      isActionable: {
                          type: Boolean,
                          default: function() {
                              return !1
                          }
                      },
                      fileType: String
                  }
              },
              Z = Q,
              ee = (n("bf27"), Object($["a"])(Z, N, R, !1, null, "646af8ee", null)),
              te = ee.exports,
              ne = {
                  name: "CodeListing",
                  components: {
                      Filename: te
                  },
                  data: function() {
                      return {
                          syntaxHighlightedLines: []
                      }
                  },
                  props: {
                      fileName: String,
                      isFileNameActionable: {
                          type: Boolean,
                          default: function() {
                              return !1
                          }
                      },
                      syntax: String,
                      fileType: String,
                      content: {
                          type: Array,
                          required: !0
                      },
                      startLineNumber: {
                          type: Number,
                          default: function() {
                              return 1
                          }
                      },
                      highlights: {
                          type: Array,
                          default: function() {
                              return []
                          }
                      },
                      showLineNumbers: {
                          type: Boolean,
                          default: function() {
                              return !1
                          }
                      }
                  },
                  computed: {
                      escapedContent: function(e) {
                          var t = e.content;
                          return t.map(s["c"])
                      },
                      highlightedLineNumbers: function() {
                          return new Set(this.highlights.map((function(e) {
                              var t = e.line;
                              return t
                          })))
                      },
                      syntaxNameNormalized: function() {
                          var e = {
                              occ: o["a"].objectiveC.key.url
                          };
                          return e[this.syntax] || this.syntax
                      }
                  },
                  watch: {
                      content: {
                          handler: "syntaxHighlightLines",
                          immediate: !0
                      }
                  },
                  methods: {
                      isHighlighted: function(e) {
                          return this.highlightedLineNumbers.has(this.lineNumberFor(e))
                      },
                      lineNumberFor: function(e) {
                          return this.startLineNumber + e
                      },
                      syntaxHighlightLines: function() {
                          var e = Object(a["a"])(regeneratorRuntime.mark((function e() {
                              var t;
                              return regeneratorRuntime.wrap((function(e) {
                                  while (1) switch (e.prev = e.next) {
                                      case 0:
                                          return e.prev = 0, e.next = 3, x(this.syntaxNameNormalized);
                                      case 3:
                                          t = S(this.content, this.syntaxNameNormalized), e.next = 9;
                                          break;
                                      case 6:
                                          e.prev = 6, e.t0 = e["catch"](0), t = this.escapedContent;
                                      case 9:
                                          this.syntaxHighlightedLines = t.map((function(e) {
                                              return "" === e ? "\n" : e
                                          }));
                                      case 10:
                                      case "end":
                                          return e.stop()
                                  }
                              }), e, this, [
                                  [0, 6]
                              ])
                          })));

                          function t() {
                              return e.apply(this, arguments)
                          }
                          return t
                      }()
                  }
              },
              re = ne,
              ie = (n("c0d4"), Object($["a"])(re, r, i, !1, null, "0b3be4d2", null));
          t["a"] = ie.exports
      },
      "7d77": function(e, t, n) {},
      "837d": function(e, t, n) {
          "use strict";
          var r = n("5aee"),
              i = n("9f79"),
              a = "Map";
          e.exports = n("ada4")(a, (function(e) {
              return function() {
                  return e(this, arguments.length > 0 ? arguments[0] : void 0)
              }
          }), {
              get: function(e) {
                  var t = r.getEntry(i(this, a), e);
                  return t && t.v
              },
              set: function(e, t) {
                  return r.def(i(this, a), 0 === e ? 0 : e, t)
              }
          }, r, !0)
      },
      8449: function(e, t, n) {
          "use strict";
          n("386b")("anchor", (function(e) {
              return function(t) {
                  return e(this, "a", "name", t)
              }
          }))
      },
      8649: function(e, t, n) {
          "use strict";
          t["a"] = {
              objectiveC: {
                  name: "Objective-C",
                  key: {
                      api: "occ",
                      url: "objc"
                  }
              },
              swift: {
                  name: "Swift",
                  key: {
                      api: "swift",
                      url: "swift"
                  }
              }
          }
      },
      "86d8": function(e, t, n) {
          "use strict";
          var r = function() {
                  var e = this,
                      t = e.$createElement,
                      n = e._self._c || t;
                  return n(e.refComponent, {
                      tag: "component",
                      attrs: {
                          url: e.urlWithParams,
                          "is-active": e.isActive
                      }
                  }, [e._t("default")], 2)
              },
              i = [],
              a = (n("f559"), n("d26a")),
              s = n("66cd"),
              o = n("9895"),
              c = function() {
                  var e = this,
                      t = e.$createElement,
                      n = e._self._c || t;
                  return e.isActive ? n("a", {
                      attrs: {
                          href: e.url
                      }
                  }, [e._t("default")], 2) : n("span", [e._t("default")], 2)
              },
              u = [],
              l = {
                  name: "ReferenceExternal",
                  props: {
                      url: {
                          type: String,
                          required: !0
                      },
                      isActive: {
                          type: Boolean,
                          default: !0
                      }
                  }
              },
              f = l,
              h = n("2877"),
              d = Object(h["a"])(f, c, u, !1, null, null, null),
              p = d.exports,
              g = function() {
                  var e = this,
                      t = e.$createElement,
                      n = e._self._c || t;
                  return n("ReferenceInternal", e._b({}, "ReferenceInternal", e.$props, !1), [n("CodeVoice", [e._t("default")], 2)], 1)
              },
              b = [],
              m = function() {
                  var e = this,
                      t = e.$createElement,
                      n = e._self._c || t;
                  return e.isActive ? n("router-link", {
                      attrs: {
                          to: e.url
                      }
                  }, [e._t("default")], 2) : n("span", [e._t("default")], 2)
              },
              v = [],
              y = {
                  name: "ReferenceInternal",
                  props: {
                      url: {
                          type: String,
                          required: !0
                      },
                      isActive: {
                          type: Boolean,
                          default: !0
                      }
                  }
              },
              w = y,
              j = Object(h["a"])(w, m, v, !1, null, null, null),
              x = j.exports,
              O = n("52e4"),
              _ = {
                  name: "ReferenceInternalSymbol",
                  props: x.props,
                  components: {
                      ReferenceInternal: x,
                      CodeVoice: O["a"]
                  }
              },
              E = _,
              k = Object(h["a"])(E, g, b, !1, null, null, null),
              T = k.exports,
              C = {
                  name: "Reference",
                  computed: {
                      isInternal: function(e) {
                          var t = e.url;
                          if (!t.startsWith("/") && !t.startsWith("#")) return !1;
                          var n = this.$router.resolve(t) || {},
                              r = n.resolved;
                          r = void 0 === r ? {} : r;
                          var i = r.name;
                          return i !== o["b"]
                      },
                      isSymbolReference: function() {
                          return "symbol" === this.kind && (this.role === s["a"].symbol || this.role === s["a"].dictionarySymbol)
                      },
                      refComponent: function() {
                          return this.isInternal ? this.isSymbolReference ? T : x : p
                      },
                      urlWithParams: function() {
                          return Object(a["b"])(this.url, this.$route.query)
                      }
                  },
                  props: {
                      url: {
                          type: String,
                          required: !0
                      },
                      kind: {
                          type: String,
                          required: !1
                      },
                      role: {
                          type: String,
                          required: !1
                      },
                      isActive: {
                          type: Boolean,
                          required: !1,
                          default: !0
                      }
                  }
              },
              S = C,
              N = Object(h["a"])(S, r, i, !1, null, null, null);
          t["a"] = N.exports
      },
      "87fa": function(e, t, n) {
          "use strict";
          n("5c27")
      },
      "8a61": function(e, t, n) {
          "use strict";
          t["a"] = {
              methods: {
                  scrollToElement: function(e) {
                      var t = this.$router.resolve({
                          hash: e
                      });
                      return this.$router.options.scrollBehavior(t.route).then((function(e) {
                          var t = e.selector,
                              n = e.offset,
                              r = document.querySelector(t);
                          return r ? (r.scrollIntoView(), window.scrollBy(-n.x, -n.y), r) : null
                      }))
                  }
              }
          }
      },
      "8bd9": function(e, t, n) {
          "use strict";
          var r = function() {
                  var e = this,
                      t = e.$createElement,
                      n = e._self._c || t;
                  return n("picture", [e.prefersAuto && e.darkVariantAttributes ? n("source", {
                      attrs: {
                          media: "(prefers-color-scheme: dark)",
                          srcset: e.darkVariantAttributes.srcSet
                      }
                  }) : e._e(), e.prefersDark && e.darkVariantAttributes ? n("img", e._b({
                      attrs: {
                          alt: e.alt
                      }
                  }, "img", e.darkVariantAttributes, !1)) : n("img", e._b({
                      attrs: {
                          alt: e.alt
                      }
                  }, "img", e.defaultAttributes, !1))])
              },
              i = [],
              a = n("748c"),
              s = {
                  props: {
                      variants: {
                          type: Array,
                          required: !0
                      }
                  },
                  computed: {
                      variantsGroupedByAppearance: function() {
                          return Object(a["b"])(this.variants)
                      },
                      lightVariants: function() {
                          return Object(a["a"])(this.variantsGroupedByAppearance.light)
                      },
                      darkVariants: function() {
                          return Object(a["a"])(this.variantsGroupedByAppearance.dark)
                      }
                  }
              },
              o = n("e425"),
              c = n("821b");

          function u(e) {
              if (!e.length) return null;
              var t = e.map((function(e) {
                      return "".concat(e.src, " ").concat(e.density)
                  })).join(", "),
                  n = e[0],
                  r = {
                      srcSet: t,
                      src: n.src
                  },
                  i = n.size || {
                      width: null
                  },
                  a = i.width;
              return a && (r.width = a, r.height = "auto"), r
          }
          var l = {
                  name: "ImageAsset",
                  mixins: [s],
                  data: function() {
                      return {
                          appState: o["a"].state
                      }
                  },
                  computed: {
                      defaultAttributes: function(e) {
                          var t = e.lightVariantAttributes,
                              n = e.darkVariantAttributes;
                          return t || n
                      },
                      darkVariantAttributes: function(e) {
                          var t = e.darkVariants;
                          return u(t)
                      },
                      lightVariantAttributes: function(e) {
                          var t = e.lightVariants;
                          return u(t)
                      },
                      preferredColorScheme: function(e) {
                          var t = e.appState;
                          return t.preferredColorScheme
                      },
                      prefersAuto: function(e) {
                          var t = e.preferredColorScheme;
                          return t === c["a"].auto.value
                      },
                      prefersDark: function(e) {
                          var t = e.preferredColorScheme;
                          return t === c["a"].dark.value
                      }
                  },
                  props: {
                      alt: {
                          type: String,
                          default: ""
                      },
                      variants: {
                          type: Array,
                          required: !0
                      }
                  }
              },
              f = l,
              h = n("2877"),
              d = Object(h["a"])(f, r, i, !1, null, null, null);
          t["a"] = d.exports
      },
      9427: function(e, t, n) {
          var r = n("63b6");
          r(r.S, "Object", {
              create: n("a159")
          })
      },
      "951c": function(e, t, n) {},
      "95da": function(e, t, n) {
          "use strict";

          function r(e, t) {
              var n = document.body,
                  i = e,
                  a = e;
              while (i = i.previousElementSibling) t(i);
              while (a = a.nextElementSibling) t(a);
              e.parentElement && e.parentElement !== n && r(e.parentElement, t)
          }
          var i = "data-original-",
              a = "aria-hidden",
              s = i + a,
              o = function(e) {
                  var t = e.getAttribute(s);
                  t || (t = e.getAttribute(a) || "", e.setAttribute(s, t)), e.setAttribute(a, "true")
              },
              c = function(e) {
                  var t = e.getAttribute(s);
                  "string" === typeof t && (t.length ? e.setAttribute(a, t) : e.removeAttribute(a)), e.removeAttribute(s)
              };
          t["a"] = {
              hide: function(e) {
                  r(e, o)
              },
              show: function(e) {
                  r(e, c)
              }
          }
      },
      "9b30": function(e, t, n) {
          "use strict";
          var r = function() {
                  var e = this,
                      t = e.$createElement,
                      n = e._self._c || t;
                  return n("ul", {
                      staticClass: "nav-menu-items",
                      attrs: {
                          "data-previous-menu-children-count": e.previousSiblingChildren
                      }
                  }, [e._t("default")], 2)
              },
              i = [],
              a = (n("c5f6"), {
                  name: "NavMenuItems",
                  props: {
                      previousSiblingChildren: {
                          type: Number,
                          default: 0
                      }
                  }
              }),
              s = a,
              o = (n("c009"), n("2877")),
              c = Object(o["a"])(s, r, i, !1, null, "51c28cf9", null);
          t["a"] = c.exports
      },
      "9f79": function(e, t, n) {
          var r = n("f772");
          e.exports = function(e, t) {
              if (!r(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!");
              return e
          }
      },
      a350: function(e, t, n) {
          "use strict";
          n("7d77")
      },
      a5a1: function(e, t, n) {},
      a5b2: function(e, t, n) {
          e.exports = n("aa28")
      },
      a662: function(e, t, n) {
          "use strict";
          n("d303")
      },
      a8e2: function(e, t, n) {},
      a97e: function(e, t, n) {
          "use strict";
          var r, i, a, s = n("768b"),
              o = (n("ffc1"), n("ac6a"), n("bd86")),
              c = (n("f386"), n("63b8")),
              u = {
                  default: "default",
                  nav: "nav"
              },
              l = (a = {}, Object(o["a"])(a, u.default, (r = {}, Object(o["a"])(r, c["a"].large, {
                  minWidth: 1069,
                  contentWidth: 980
              }), Object(o["a"])(r, c["a"].medium, {
                  minWidth: 736,
                  maxWidth: 1068,
                  contentWidth: 692
              }), Object(o["a"])(r, c["a"].small, {
                  minWidth: 320,
                  maxWidth: 735,
                  contentWidth: 280
              }), r)), Object(o["a"])(a, u.nav, (i = {}, Object(o["a"])(i, c["a"].large, {
                  minWidth: 1024
              }), Object(o["a"])(i, c["a"].medium, {
                  minWidth: 768,
                  maxWidth: 1023
              }), Object(o["a"])(i, c["a"].small, {
                  minWidth: 320,
                  maxWidth: 767
              }), i)), a),
              f = function(e) {
                  return e ? "(max-width: ".concat(e, "px)") : ""
              },
              h = function(e) {
                  return e ? "(min-width: ".concat(e, "px)") : ""
              };

          function d(e) {
              var t = e.minWidth,
                  n = e.maxWidth;
              return ["only screen", h(t), f(n)].filter(Boolean).join(" and ")
          }

          function p(e) {
              var t = e.maxWidth,
                  n = e.minWidth;
              return window.matchMedia(d({
                  minWidth: n,
                  maxWidth: t
              }))
          }
          var g, b, m = {
                  name: "BreakpointEmitter",
                  constants: {
                      BreakpointAttributes: l,
                      BreakpointName: c["a"],
                      BreakpointScopes: u
                  },
                  props: {
                      scope: {
                          type: String,
                          default: function() {
                              return u.default
                          },
                          validator: function(e) {
                              return e in u
                          }
                      }
                  },
                  render: function() {
                      return this.$scopedSlots.default ? this.$scopedSlots.default({
                          matchingBreakpoint: this.matchingBreakpoint
                      }) : null
                  },
                  data: function() {
                      return {
                          matchingBreakpoint: null
                      }
                  },
                  methods: {
                      initMediaQuery: function(e, t) {
                          var n = this,
                              r = p(t),
                              i = function(t) {
                                  return n.handleMediaQueryChange(t, e)
                              };
                          r.addListener(i), this.$once("hook:beforeDestroy", (function() {
                              r.removeListener(i)
                          })), i(r)
                      },
                      handleMediaQueryChange: function(e, t) {
                          e.matches && (this.matchingBreakpoint = t, this.$emit("change", t))
                      }
                  },
                  mounted: function() {
                      var e = this,
                          t = l[this.scope] || {};
                      Object.entries(t).forEach((function(t) {
                          var n = Object(s["a"])(t, 2),
                              r = n[0],
                              i = n[1];
                          e.initMediaQuery(r, i)
                      }))
                  }
              },
              v = m,
              y = n("2877"),
              w = Object(y["a"])(v, g, b, !1, null, null, null);
          t["a"] = w.exports
      },
      aa28: function(e, t, n) {
          n("733c"), e.exports = n("584a").Reflect.construct
      },
      ada4: function(e, t, n) {
          "use strict";
          var r = n("e53d"),
              i = n("63b6"),
              a = n("ebfd"),
              s = n("294c"),
              o = n("35e8"),
              c = n("5c95"),
              u = n("a22a"),
              l = n("1173"),
              f = n("f772"),
              h = n("45f2"),
              d = n("d9f6").f,
              p = n("57b1")(0),
              g = n("8e60");
          e.exports = function(e, t, n, b, m, v) {
              var y = r[e],
                  w = y,
                  j = m ? "set" : "add",
                  x = w && w.prototype,
                  O = {};
              return g && "function" == typeof w && (v || x.forEach && !s((function() {
                  (new w).entries().next()
              }))) ? (w = t((function(t, n) {
                  l(t, w, e, "_c"), t._c = new y, void 0 != n && u(n, m, t[j], t)
              })), p("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), (function(e) {
                  var t = "add" == e || "set" == e;
                  !(e in x) || v && "clear" == e || o(w.prototype, e, (function(n, r) {
                      if (l(this, w, e), !t && v && !f(n)) return "get" == e && void 0;
                      var i = this._c[e](0 === n ? 0 : n, r);
                      return t ? this : i
                  }))
              })), v || d(w.prototype, "size", {
                  get: function() {
                      return this._c.size
                  }
              })) : (w = b.getConstructor(t, e, m, j), c(w.prototype, n), a.NEED = !0), h(w, e), O[e] = w, i(i.G + i.W + i.F, O), v || b.setStrong(w, e, m), w
          }
      },
      aff9: function(e, t, n) {
          "use strict";
          n("5376")
      },
      bb52: function(e, t, n) {
          "use strict";
          t["a"] = {
              inject: {
                  performanceMetricsEnabled: {
                      default: !1
                  },
                  isTargetIDE: {
                      default: !1
                  }
              },
              methods: {
                  newContentMounted: function() {
                      var e;
                      this.performanceMetricsEnabled && (e = Math.round(window.performance.now()), window.renderedTimes || (window.renderedTimes = []), window.renderedTimes.push(e)), this.$bridge.send({
                          type: "rendered",
                          data: {
                              time: e
                          }
                      })
                  }
              }
          }
      },
      be08: function(e, t, n) {
          "use strict";
          var r = function() {
                  var e = this,
                      t = e.$createElement,
                      n = e._self._c || t;
                  return n("svg", {
                      staticClass: "svg-icon",
                      attrs: {
                          "aria-hidden": "true",
                          xmlns: "http://www.w3.org/2000/svg"
                      }
                  }, [e._t("default")], 2)
              },
              i = [],
              a = {
                  name: "SVGIcon"
              },
              s = a,
              o = (n("e1e7"), n("2877")),
              c = Object(o["a"])(s, r, i, !1, null, "5187dcac", null);
          t["a"] = c.exports
      },
      bf27: function(e, t, n) {
          "use strict";
          n("3bb8")
      },
      bf33: function(e, t, n) {
          "use strict";
          n("f768")
      },
      bfac: function(e, t, n) {
          var r = n("0b64");
          e.exports = function(e, t) {
              return new(r(e))(t)
          }
      },
      c009: function(e, t, n) {
          "use strict";
          n("27c0")
      },
      c081: function(e, t, n) {
          "use strict";
          var r, i, a = function() {
                  var e = this,
                      t = e.$createElement,
                      n = e._self._c || t;
                  return e.action ? n("DestinationDataProvider", {
                      attrs: {
                          destination: e.action
                      },
                      scopedSlots: e._u([{
                          key: "default",
                          fn: function(t) {
                              var r = t.url,
                                  i = t.title;
                              return n("ButtonLink", {
                                  attrs: {
                                      url: r,
                                      isDark: e.isDark
                                  }
                              }, [e._v("\n    " + e._s(i) + "\n  ")])
                          }
                      }])
                  }) : e._e()
              },
              s = [],
              o = n("76ab"),
              c = n("bd86"),
              u = {
                  link: "link",
                  reference: "reference"
              },
              l = {
                  name: "DestinationDataProvider",
                  props: {
                      destination: {
                          type: Object,
                          required: !0
                      }
                  },
                  inject: {
                      references: {
                          default: function() {
                              return {}
                          }
                      },
                      isTargetIDE: {
                          default: function() {
                              return !1
                          }
                      }
                  },
                  constants: {
                      DestinationType: u
                  },
                  computed: {
                      isExternal: function(e) {
                          var t = e.reference,
                              n = e.destination;
                          return t.type === u.link || n.type === u.link
                      },
                      shouldAppendOpensInBrowser: function(e) {
                          var t = e.isExternal,
                              n = e.isTargetIDE;
                          return t && n
                      },
                      reference: function(e) {
                          var t = e.references,
                              n = e.destination;
                          return t[n.identifier] || {}
                      },
                      linkUrl: function(e) {
                          var t, n = e.destination,
                              r = e.reference;
                          return (t = {}, Object(c["a"])(t, u.link, n.destination), Object(c["a"])(t, u.reference, r.url), t)[n.type]
                      },
                      linkTitle: function(e) {
                          var t, n = e.reference,
                              r = e.destination;
                          return (t = {}, Object(c["a"])(t, u.link, r.title), Object(c["a"])(t, u.reference, r.overridingTitle || n.title), t)[r.type]
                      }
                  },
                  methods: {
                      formatAriaLabel: function(e) {
                          return this.shouldAppendOpensInBrowser ? "".concat(e, " (opens in browser)") : e
                      }
                  },
                  render: function() {
                      return this.$scopedSlots.default({
                          url: this.linkUrl,
                          title: this.linkTitle,
                          formatAriaLabel: this.formatAriaLabel,
                          isExternal: this.isExternal
                      })
                  }
              },
              f = l,
              h = n("2877"),
              d = Object(h["a"])(f, r, i, !1, null, null, null),
              p = d.exports,
              g = {
                  name: "CallToActionButton",
                  components: {
                      DestinationDataProvider: p,
                      ButtonLink: o["a"]
                  },
                  props: {
                      action: {
                          type: Object,
                          required: !0
                      },
                      isDark: {
                          type: Boolean,
                          default: !1
                      }
                  }
              },
              b = g,
              m = Object(h["a"])(b, a, s, !1, null, null, null);
          t["a"] = m.exports
      },
      c0d4: function(e, t, n) {
          "use strict";
          n("ccbb")
      },
      c108: function(e, t, n) {
          "use strict";
          n("a8e2")
      },
      c189: function(e, t, n) {
          "use strict";
          var r = n("79aa"),
              i = n("f772"),
              a = n("3024"),
              s = [].slice,
              o = {},
              c = function(e, t, n) {
                  if (!(t in o)) {
                      for (var r = [], i = 0; i < t; i++) r[i] = "a[" + i + "]";
                      o[t] = Function("F,a", "return new F(" + r.join(",") + ")")
                  }
                  return o[t](e, n)
              };
          e.exports = Function.bind || function(e) {
              var t = r(this),
                  n = s.call(arguments, 1),
                  o = function() {
                      var r = n.concat(s.call(arguments));
                      return this instanceof o ? c(t, r.length, r) : a(t, r, e)
                  };
              return i(t.prototype) && (o.prototype = t.prototype), o
          }
      },
      c739: function(e, t, n) {},
      c8e2: function(e, t, n) {
          "use strict";
          n.d(t, "a", (function() {
              return u
          }));
          var r = n("d225"),
              i = n("b0b4"),
              a = n("bd86"),
              s = (n("6762"), n("c5f6"), n("ee1d"), ["input", "select", "textarea", "button", "optgroup", "option", "menuitem", "fieldset", "object", "a[href]", "*[tabindex]", "*[contenteditable]"]),
              o = s.join(","),
              c = {
                  getTabbableElements: function(e) {
                      var t, n = e.querySelectorAll(o),
                          r = n.length,
                          i = [];
                      for (t = 0; t < r; t += 1) this.isTabbableElement(n[t]) && i.push(n[t]);
                      return i
                  },
                  isTabbableElement: function(e) {
                      if (!e.offsetParent) return !1;
                      var t = parseFloat(e.getAttribute("tabindex"));
                      return Number.isNaN(t) ? this.isFocusableElement(e) : t >= 0
                  },
                  isFocusableElement: function(e) {
                      var t = e.nodeName.toLowerCase(),
                          n = s.includes(t);
                      return !("a" !== t || !e.getAttribute("href")) || (n ? !e.disabled : "true" === e.getAttribute("contenteditable") || !Number.isNaN(parseFloat(e.getAttribute("tabindex"))))
                  }
              },
              u = function() {
                  function e(t) {
                      Object(r["a"])(this, e), Object(a["a"])(this, "focusContainer", null), Object(a["a"])(this, "tabTargets", []), Object(a["a"])(this, "firstTabTarget", null), Object(a["a"])(this, "lastTabTarget", null), Object(a["a"])(this, "lastFocusedElement", null), this.focusContainer = t, this.onFocus = this.onFocus.bind(this)
                  }
                  return Object(i["a"])(e, [{
                      key: "updateFocusContainer",
                      value: function(e) {
                          this.focusContainer = e
                      }
                  }, {
                      key: "start",
                      value: function() {
                          this.collectTabTargets(), this.firstTabTarget ? this.focusContainer.contains(document.activeElement) || this.firstTabTarget.focus() : console.warn("There are no focusable elements. FocusTrap needs at least one."), this.lastFocusedElement = document.activeElement, document.addEventListener("focus", this.onFocus, !0)
                      }
                  }, {
                      key: "stop",
                      value: function() {
                          document.removeEventListener("focus", this.onFocus, !0)
                      }
                  }, {
                      key: "collectTabTargets",
                      value: function() {
                          this.tabTargets = c.getTabbableElements(this.focusContainer), this.firstTabTarget = this.tabTargets[0], this.lastTabTarget = this.tabTargets[this.tabTargets.length - 1]
                      }
                  }, {
                      key: "onFocus",
                      value: function(e) {
                          if (this.focusContainer.contains(e.target)) this.lastFocusedElement = e.target;
                          else {
                              if (e.preventDefault(), this.collectTabTargets(), this.lastFocusedElement === this.lastTabTarget || !this.lastFocusedElement) return this.firstTabTarget.focus(), void(this.lastFocusedElement = this.firstTabTarget);
                              this.lastFocusedElement === this.firstTabTarget && (this.lastTabTarget.focus(), this.lastFocusedElement = this.lastTabTarget)
                          }
                      }
                  }, {
                      key: "destroy",
                      value: function() {
                          this.stop(), this.focusContainer = null, this.tabTargets = [], this.firstTabTarget = null, this.lastTabTarget = null, this.lastFocusedElement = null
                      }
                  }]), e
              }()
      },
      cbcf: function(e, t, n) {
          "use strict";
          var r = function() {
                  var e = this,
                      t = e.$createElement,
                      n = e._self._c || t;
                  return n("nav", {
                      ref: "nav",
                      staticClass: "nav",
                      class: e.rootClasses,
                      attrs: {
                          role: "navigation"
                      }
                  }, [n("div", {
                      ref: "wrapper",
                      staticClass: "nav__wrapper"
                  }, [n("div", {
                      staticClass: "nav__background"
                  }), e.hasOverlay ? n("div", {
                      staticClass: "nav-overlay",
                      on: {
                          click: e.closeNav
                      }
                  }) : e._e(), n("div", {
                      staticClass: "nav-content"
                  }, [e.$slots.default ? n("div", {
                      staticClass: "nav-title"
                  }, [e._t("default")], 2) : e._e(), e._t("after-title"), n("div", {
                      staticClass: "nav-menu"
                  }, [n("a", {
                      ref: "axToggle",
                      staticClass: "nav-ax-toggle",
                      attrs: {
                          href: "#",
                          role: "button"
                      },
                      on: {
                          click: function(t) {
                              return t.preventDefault(), e.toggleNav(t)
                          }
                      }
                  }, [n("span", {
                      staticClass: "visuallyhidden"
                  }, [e.isOpen ? [e._v("Close Menu")] : [e._v("Open Menu")]], 2)]), n("div", {
                      ref: "tray",
                      staticClass: "nav-menu-tray",
                      on: {
                          transitionend: function(t) {
                              return t.target !== t.currentTarget ? null : e.onTransitionEnd(t)
                          },
                          click: e.handleTrayClick
                      }
                  }, [e._t("tray", [n("NavMenuItems", [e._t("menu-items")], 2)])], 2)]), n("div", {
                      staticClass: "nav-actions"
                  }, [n("a", {
                      staticClass: "nav-menucta",
                      attrs: {
                          href: "#",
                          tabindex: "-1",
                          "aria-hidden": "true"
                      },
                      on: {
                          click: function(t) {
                              return t.preventDefault(), e.toggleNav(t)
                          }
                      }
                  }, [n("span", {
                      staticClass: "nav-menucta-chevron"
                  })])])], 2), e._t("after-content")], 2), n("BreakpointEmitter", {
                      attrs: {
                          scope: e.BreakpointScopes.nav
                      },
                      on: {
                          change: e.onBreakpointChange
                      }
                  })], 1)
              },
              i = [],
              a = (n("96cf"), n("3b8d")),
              s = n("bd86"),
              o = (n("f386"), n("72e7")),
              c = n("9b30"),
              u = n("a97e"),
              l = n("c8e2"),
              f = n("f2af"),
              h = n("63b8"),
              d = n("95da"),
              p = u["a"].constants,
              g = p.BreakpointName,
              b = p.BreakpointScopes,
              m = {
                  isDark: "theme-dark",
                  isOpen: "nav--is-open",
                  inBreakpoint: "nav--in-breakpoint-range",
                  isTransitioning: "nav--is-opening",
                  isSticking: "nav--is-sticking",
                  hasSolidBackground: "nav--solid-background",
                  hasNoBorder: "nav--noborder",
                  hasFullWidthBorder: "nav--fullwidth-border"
              },
              v = {
                  name: "NavBase",
                  components: {
                      NavMenuItems: c["a"],
                      BreakpointEmitter: u["a"]
                  },
                  constants: {
                      NavStateClasses: m
                  },
                  props: {
                      breakpoint: {
                          type: String,
                          default: g.small
                      },
                      hasOverlay: {
                          type: Boolean,
                          default: !0
                      },
                      hasSolidBackground: {
                          type: Boolean,
                          default: !1
                      },
                      hasNoBorder: {
                          type: Boolean,
                          default: !1
                      },
                      hasFullWidthBorder: {
                          type: Boolean,
                          default: !1
                      },
                      isDark: {
                          type: Boolean,
                          default: !1
                      }
                  },
                  mixins: [o["a"]],
                  data: function() {
                      return {
                          isOpen: !1,
                          inBreakpoint: !1,
                          isTransitioning: !1,
                          isSticking: !1,
                          focusTrapInstance: null
                      }
                  },
                  computed: {
                      BreakpointScopes: function() {
                          return b
                      },
                      rootClasses: function(e) {
                          var t, n = e.isOpen,
                              r = e.inBreakpoint,
                              i = e.isTransitioning,
                              a = e.isSticking,
                              o = e.hasSolidBackground,
                              c = e.hasNoBorder,
                              u = e.hasFullWidthBorder,
                              l = e.isDark;
                          return t = {}, Object(s["a"])(t, m.isDark, l), Object(s["a"])(t, m.isOpen, n), Object(s["a"])(t, m.inBreakpoint, r), Object(s["a"])(t, m.isTransitioning, i), Object(s["a"])(t, m.isSticking, a), Object(s["a"])(t, m.hasSolidBackground, o), Object(s["a"])(t, m.hasNoBorder, c), Object(s["a"])(t, m.hasFullWidthBorder, u), t
                      },
                      intersectionRootMargin: function() {
                          return "-1px 0px 0px 0px"
                      }
                  },
                  watch: {
                      isOpen: function(e) {
                          this.$emit("change", e), e ? this.onExpand() : this.onClose()
                      }
                  },
                  mounted: function() {
                      var e = Object(a["a"])(regeneratorRuntime.mark((function e() {
                          return regeneratorRuntime.wrap((function(e) {
                              while (1) switch (e.prev = e.next) {
                                  case 0:
                                      return window.addEventListener("keydown", this.onEscape), window.addEventListener("popstate", this.closeNav), window.addEventListener("orientationchange", this.closeNav), document.addEventListener("click", this.handleClickOutside), e.next = 6, this.$nextTick();
                                  case 6:
                                      this.focusTrapInstance = new l["a"](this.$refs.wrapper);
                                  case 7:
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
                  beforeDestroy: function() {
                      window.removeEventListener("keydown", this.onEscape), window.removeEventListener("popstate", this.closeNav), window.removeEventListener("orientationchange", this.closeNav), document.removeEventListener("click", this.handleClickOutside), this.isOpen && this.toggleScrollLock(!1), this.focusTrapInstance.destroy()
                  },
                  methods: {
                      toggleNav: function() {
                          this.isOpen = !this.isOpen, this.isTransitioning = !0
                      },
                      closeNav: function() {
                          this.isOpen = !1
                      },
                      onTransitionEnd: function() {
                          var e = Object(a["a"])(regeneratorRuntime.mark((function e(t) {
                              var n;
                              return regeneratorRuntime.wrap((function(e) {
                                  while (1) switch (e.prev = e.next) {
                                      case 0:
                                          if (n = t.propertyName, "max-height" === n) {
                                              e.next = 3;
                                              break
                                          }
                                          return e.abrupt("return");
                                      case 3:
                                          this.$emit("changed", this.isOpen), this.isTransitioning = !1, this.isOpen ? (this.$emit("opened"), this.toggleScrollLock(!0)) : this.$emit("closed");
                                      case 6:
                                      case "end":
                                          return e.stop()
                                  }
                              }), e, this)
                          })));

                          function t(t) {
                              return e.apply(this, arguments)
                          }
                          return t
                      }(),
                      onBreakpointChange: function(e) {
                          var t = Object(h["b"])(e, this.breakpoint);
                          this.inBreakpoint = !t, t && this.closeNav()
                      },
                      onIntersect: function(e) {
                          var t = e.intersectionRatio;
                          this.isSticking = 1 !== t
                      },
                      onEscape: function(e) {
                          var t = e.key;
                          "Escape" === t && this.isOpen && (this.closeNav(), this.$refs.axToggle.focus())
                      },
                      handleTrayClick: function(e) {
                          var t = e.target;
                          t.href && this.closeNav()
                      },
                      handleClickOutside: function(e) {
                          var t = e.target;
                          this.$refs.nav.contains(t) || this.closeNav()
                      },
                      toggleScrollLock: function(e) {
                          e ? f["a"].lockScroll(this.$refs.tray) : f["a"].unlockScroll(this.$refs.tray)
                      },
                      onExpand: function() {
                          this.$emit("open"), this.focusTrapInstance.start(), d["a"].hide(this.$refs.wrapper)
                      },
                      onClose: function() {
                          this.$emit("close"), this.toggleScrollLock(!1), this.focusTrapInstance.stop(), d["a"].show(this.$refs.wrapper)
                      }
                  }
              },
              y = v,
              w = (n("a350"), n("2877")),
              j = Object(w["a"])(y, r, i, !1, null, "6f600f73", null);
          t["a"] = j.exports
      },
      ccbb: function(e, t, n) {},
      cd1c: function(e, t, n) {
          var r = n("e853");
          e.exports = function(e, t) {
              return new(r(e))(t)
          }
      },
      d2dc: function(e, t, n) {
          "use strict";
          n("26d2")
      },
      d303: function(e, t, n) {},
      d8ce: function(e, t, n) {
          "use strict";
          var r = n("6842");
          t["a"] = {
              created: function() {
                  if (this.pageTitle) {
                      var e = Object(r["b"])(["meta", "title"], "Documentation"),
                          t = [this.pageTitle, e].filter(Boolean);
                      document.title = t.join(" | ")
                  }
              }
          }
      },
      dc62: function(e, t, n) {
          n("9427");
          var r = n("584a").Object;
          e.exports = function(e, t) {
              return r.create(e, t)
          }
      },
      e1e7: function(e, t, n) {
          "use strict";
          n("029f")
      },
      e3ab: function(e, t, n) {
          "use strict";
          var r = function() {
                  var e = this,
                      t = e.$createElement,
                      n = e._self._c || t;
                  return n("aside", {
                      class: e.kind,
                      attrs: {
                          "aria-label": e.kind
                      }
                  }, [n("p", {
                      staticClass: "label"
                  }, [e._v(e._s(e.label))]), e._t("default")], 2)
              },
              i = [],
              a = n("bd86"),
              s = {
                  deprecated: "deprecated",
                  experiment: "experiment",
                  important: "important",
                  note: "note",
                  tip: "tip",
                  warning: "warning"
              },
              o = {
                  name: "Aside",
                  props: {
                      kind: {
                          type: String,
                          required: !0,
                          validator: function(e) {
                              return Object.prototype.hasOwnProperty.call(s, e)
                          }
                      },
                      name: {
                          type: String,
                          required: !1
                      }
                  },
                  computed: {
                      label: function(e) {
                          var t, n = e.kind,
                              r = e.name;
                          return r || (t = {}, Object(a["a"])(t, s.deprecated, "Deprecated"), Object(a["a"])(t, s.experiment, "Experiment"), Object(a["a"])(t, s.important, "Important"), Object(a["a"])(t, s.note, "Note"), Object(a["a"])(t, s.tip, "Tip"), Object(a["a"])(t, s.warning, "Warning"), t)[n]
                      }
                  }
              },
              c = o,
              u = (n("77f5"), n("2877")),
              l = Object(u["a"])(c, r, i, !1, null, "2a2893f3", null);
          t["a"] = l.exports
      },
      e44b: function(e, t, n) {},
      e510: function(e, t, n) {
          "use strict";
          n("2263")
      },
      e6f0: function(e, t, n) {},
      e853: function(e, t, n) {
          var r = n("d3f4"),
              i = n("1169"),
              a = n("2b4c")("species");
          e.exports = function(e) {
              var t;
              return i(e) && (t = e.constructor, "function" != typeof t || t !== Array && !i(t.prototype) || (t = void 0), r(t) && (t = t[a], null === t && (t = void 0))), void 0 === t ? Array : t
          }
      },
      ead6: function(e, t, n) {
          var r = n("f772"),
              i = n("e4ae"),
              a = function(e, t) {
                  if (i(e), !r(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
              };
          e.exports = {
              set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, r) {
                  try {
                      r = n("d864")(Function.call, n("bf0b").f(Object.prototype, "__proto__").set, 2), r(e, []), t = !(e instanceof Array)
                  } catch (i) {
                      t = !0
                  }
                  return function(e, n) {
                      return a(e, n), t ? e.__proto__ = n : r(e, n), e
                  }
              }({}, !1) : void 0),
              check: a
          }
      },
      ee1d: function(e, t, n) {
          var r = n("5ca1");
          r(r.S, "Number", {
              isNaN: function(e) {
                  return e != e
              }
          })
      },
      f0c1: function(e, t, n) {
          "use strict";
          var r = n("d8e8"),
              i = n("d3f4"),
              a = n("31f4"),
              s = [].slice,
              o = {},
              c = function(e, t, n) {
                  if (!(t in o)) {
                      for (var r = [], i = 0; i < t; i++) r[i] = "a[" + i + "]";
                      o[t] = Function("F,a", "return new F(" + r.join(",") + ")")
                  }
                  return o[t](e, n)
              };
          e.exports = Function.bind || function(e) {
              var t = r(this),
                  n = s.call(arguments, 1),
                  o = function() {
                      var r = n.concat(s.call(arguments));
                      return this instanceof o ? c(t, r.length, r) : a(t, r, e)
                  };
              return i(t.prototype) && (o.prototype = t.prototype), o
          }
      },
      f228: function(e, t, n) {
          var r = n("40c3"),
              i = n("4517");
          e.exports = function(e) {
              return function() {
                  if (r(this) != e) throw TypeError(e + "#toJSON isn't generic");
                  return i(this)
              }
          }
      },
      f2af: function(e, t, n) {
          "use strict";
          var r = !1,
              i = -1,
              a = function() {
                  return window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || "MacIntel" === window.navigator.platform && window.navigator.maxTouchPoints > 1)
              };

          function s(e) {
              e.touches.length > 1 || e.preventDefault()
          }
          var o = function(e) {
              return !!e && e.scrollHeight - e.scrollTop <= e.clientHeight
          };

          function c() {
              document.body.style.overflow = "hidden"
          }

          function u(e) {
              e.ontouchstart = null, e.ontouchmove = null, document.removeEventListener("touchmove", s)
          }

          function l(e, t) {
              var n = e.targetTouches[0].clientY - i;
              return 0 === t.scrollTop && n > 0 || o(t) && n < 0 ? s(e) : (e.stopPropagation(), !0)
          }

          function f(e) {
              e.ontouchstart = function(e) {
                  1 === e.targetTouches.length && (i = e.targetTouches[0].clientY)
              }, e.ontouchmove = function(t) {
                  1 === t.targetTouches.length && l(t, e)
              }, document.addEventListener("touchmove", s, {
                  passive: !1
              })
          }
          t["a"] = {
              lockScroll: function(e) {
                  r || (a() ? f(e) : c(), r = !0)
              },
              unlockScroll: function(e) {
                  r && (a() ? u(e) : document.body.style.cssText = "", r = !1)
              }
          }
      },
      f386: function(e, t, n) {
          "use strict";
          n("386b")("small", (function(e) {
              return function() {
                  return e(this, "small", "", "")
              }
          }))
      },
      f400: function(e, t, n) {
          "use strict";
          var r = n("c26b"),
              i = n("b39a"),
              a = "Map";
          e.exports = n("e0b8")(a, (function(e) {
              return function() {
                  return e(this, arguments.length > 0 ? arguments[0] : void 0)
              }
          }), {
              get: function(e) {
                  var t = r.getEntry(i(this, a), e);
                  return t && t.v
              },
              set: function(e, t) {
                  return r.def(i(this, a), 0 === e ? 0 : e, t)
              }
          }, r, !0)
      },
      f559: function(e, t, n) {
          "use strict";
          var r = n("5ca1"),
              i = n("9def"),
              a = n("d2c8"),
              s = "startsWith",
              o = "" [s];
          r(r.P + r.F * n("5147")(s), "String", {
              startsWith: function(e) {
                  var t = a(this, e, s),
                      n = i(Math.min(arguments.length > 1 ? arguments[1] : void 0, t.length)),
                      r = String(e);
                  return o ? o.call(t, r, n) : t.slice(n, n + r.length) === r
              }
          })
      },
      f768: function(e, t, n) {},
      f7a6: function(e, t, n) {
          "use strict";
          n("32fe")
      },
      fa99: function(e, t, n) {
          n("0293"), e.exports = n("584a").Object.getPrototypeOf
      },
      fe1e: function(e, t, n) {
          n("7075")("Map")
      },
      fec5: function(e, t, n) {
          "use strict";
          n("037e")
      }
  }
]);