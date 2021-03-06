/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */ ! function (a, b) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");
    return b(a)
  } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
  "use strict";
  var c = [],
    d = a.document,
    e = Object.getPrototypeOf,
    f = c.slice,
    g = c.concat,
    h = c.push,
    i = c.indexOf,
    j = {},
    k = j.toString,
    l = j.hasOwnProperty,
    m = l.toString,
    n = m.call(Object),
    o = {};

  function p(a, b) {
    b = b || d;
    var c = b.createElement("script");
    c.text = a, b.head.appendChild(c).parentNode.removeChild(c)
  }
  var q = "3.2.1",
    r = function (a, b) {
      return new r.fn.init(a, b)
    },
    s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    t = /^-ms-/,
    u = /-([a-z])/g,
    v = function (a, b) {
      return b.toUpperCase()
    };
  r.fn = r.prototype = {
    jquery: q,
    constructor: r,
    length: 0,
    toArray: function () {
      return f.call(this)
    },
    get: function (a) {
      return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a]
    },
    pushStack: function (a) {
      var b = r.merge(this.constructor(), a);
      return b.prevObject = this, b
    },
    each: function (a) {
      return r.each(this, a)
    },
    map: function (a) {
      return this.pushStack(r.map(this, function (b, c) {
        return a.call(b, c, b)
      }))
    },
    slice: function () {
      return this.pushStack(f.apply(this, arguments))
    },
    first: function () {
      return this.eq(0)
    },
    last: function () {
      return this.eq(-1)
    },
    eq: function (a) {
      var b = this.length,
        c = +a + (a < 0 ? b : 0);
      return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
    },
    end: function () {
      return this.prevObject || this.constructor()
    },
    push: h,
    sort: c.sort,
    splice: c.splice
  }, r.extend = r.fn.extend = function () {
    var a, b, c, d, e, f, g = arguments[0] || {},
      h = 1,
      i = arguments.length,
      j = !1;
    for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++)
      if (null != (a = arguments[h]))
        for (b in a) c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = Array.isArray(d))) ? (e ? (e = !1, f = c && Array.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
    return g
  }, r.extend({
    expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function (a) {
      throw new Error(a)
    },
    noop: function () {},
    isFunction: function (a) {
      return "function" === r.type(a)
    },
    isWindow: function (a) {
      return null != a && a === a.window
    },
    isNumeric: function (a) {
      var b = r.type(a);
      return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a))
    },
    isPlainObject: function (a) {
      var b, c;
      return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n))
    },
    isEmptyObject: function (a) {
      var b;
      for (b in a) return !1;
      return !0
    },
    type: function (a) {
      return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[k.call(a)] || "object" : typeof a
    },
    globalEval: function (a) {
      p(a)
    },
    camelCase: function (a) {
      return a.replace(t, "ms-").replace(u, v)
    },
    each: function (a, b) {
      var c, d = 0;
      if (w(a)) {
        for (c = a.length; d < c; d++)
          if (b.call(a[d], d, a[d]) === !1) break
      } else
        for (d in a)
          if (b.call(a[d], d, a[d]) === !1) break;
      return a
    },
    trim: function (a) {
      return null == a ? "" : (a + "").replace(s, "")
    },
    makeArray: function (a, b) {
      var c = b || [];
      return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c
    },
    inArray: function (a, b, c) {
      return null == b ? -1 : i.call(b, a, c)
    },
    merge: function (a, b) {
      for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
      return a.length = e, a
    },
    grep: function (a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
      return e
    },
    map: function (a, b, c) {
      var d, e, f = 0,
        h = [];
      if (w(a))
        for (d = a.length; f < d; f++) e = b(a[f], f, c), null != e && h.push(e);
      else
        for (f in a) e = b(a[f], f, c), null != e && h.push(e);
      return g.apply([], h)
    },
    guid: 1,
    proxy: function (a, b) {
      var c, d, e;
      if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), e = function () {
        return a.apply(b || this, d.concat(f.call(arguments)))
      }, e.guid = a.guid = a.guid || r.guid++, e
    },
    now: Date.now,
    support: o
  }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
    j["[object " + b + "]"] = b.toLowerCase()
  });

  function w(a) {
    var b = !!a && "length" in a && a.length,
      c = r.type(a);
    return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
  }
  var x = function (a) {
    var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
      v = a.document,
      w = 0,
      x = 0,
      y = ha(),
      z = ha(),
      A = ha(),
      B = function (a, b) {
        return a === b && (l = !0), 0
      },
      C = {}.hasOwnProperty,
      D = [],
      E = D.pop,
      F = D.push,
      G = D.push,
      H = D.slice,
      I = function (a, b) {
        for (var c = 0, d = a.length; c < d; c++)
          if (a[c] === b) return c;
        return -1
      },
      J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      K = "[\\x20\\t\\r\\n\\f]",
      L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
      N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
      O = new RegExp(K + "+", "g"),
      P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
      Q = new RegExp("^" + K + "*," + K + "*"),
      R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
      S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
      T = new RegExp(N),
      U = new RegExp("^" + L + "$"),
      V = {
        ID: new RegExp("^#(" + L + ")"),
        CLASS: new RegExp("^\\.(" + L + ")"),
        TAG: new RegExp("^(" + L + "|[*])"),
        ATTR: new RegExp("^" + M),
        PSEUDO: new RegExp("^" + N),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + J + ")$", "i"),
        needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")
      },
      W = /^(?:input|select|textarea|button)$/i,
      X = /^h\d$/i,
      Y = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      $ = /[+~]/,
      _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
      aa = function (a, b, c) {
        var d = "0x" + b - 65536;
        return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
      },
      ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ca = function (a, b) {
        return b ? "\0" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a
      },
      da = function () {
        m()
      },
      ea = ta(function (a) {
        return a.disabled === !0 && ("form" in a || "label" in a)
      }, {
        dir: "parentNode",
        next: "legend"
      });
    try {
      G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType
    } catch (fa) {
      G = {
        apply: D.length ? function (a, b) {
          F.apply(a, H.call(b))
        } : function (a, b) {
          var c = a.length,
            d = 0;
          while (a[c++] = b[d++]);
          a.length = c - 1
        }
      }
    }

    function ga(a, b, d, e) {
      var f, h, j, k, l, o, r, s = b && b.ownerDocument,
        w = b ? b.nodeType : 9;
      if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;
      if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
        if (11 !== w && (l = Z.exec(a)))
          if (f = l[1]) {
            if (9 === w) {
              if (!(j = b.getElementById(f))) return d;
              if (j.id === f) return d.push(j), d
            } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
          } else {
            if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;
            if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d
          } if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== w) s = b, r = a;
          else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id")) ? k = k.replace(ba, ca): b.setAttribute("id", k = u), o = g(a), h = o.length;
            while (h--) o[h] = "#" + k + " " + sa(o[h]);
            r = o.join(","), s = $.test(a) && qa(b.parentNode) || b
          }
          if (r) try {
            return G.apply(d, s.querySelectorAll(r)), d
          } catch (x) {} finally {
            k === u && b.removeAttribute("id")
          }
        }
      }
      return i(a.replace(P, "$1"), b, d, e)
    }

    function ha() {
      var a = [];

      function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
      }
      return b
    }

    function ia(a) {
      return a[u] = !0, a
    }

    function ja(a) {
      var b = n.createElement("fieldset");
      try {
        return !!a(b)
      } catch (c) {
        return !1
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null
      }
    }

    function ka(a, b) {
      var c = a.split("|"),
        e = c.length;
      while (e--) d.attrHandle[c[e]] = b
    }

    function la(a, b) {
      var c = b && a,
        d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
      if (d) return d;
      if (c)
        while (c = c.nextSibling)
          if (c === b) return -1;
      return a ? 1 : -1
    }

    function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a
      }
    }

    function na(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a
      }
    }

    function oa(a) {
      return function (b) {
        return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a
      }
    }

    function pa(a) {
      return ia(function (b) {
        return b = +b, ia(function (c, d) {
          var e, f = a([], c.length, b),
            g = f.length;
          while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
        })
      })
    }

    function qa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a
    }
    c = ga.support = {}, f = ga.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;
      return !!b && "HTML" !== b.nodeName
    }, m = ga.setDocument = function (a) {
      var b, e, g = a ? a.ownerDocument || a : v;
      return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function (a) {
        return a.className = "i", !a.getAttribute("className")
      }), c.getElementsByTagName = ja(function (a) {
        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
      }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function (a) {
        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
      }), c.getById ? (d.filter.ID = function (a) {
        var b = a.replace(_, aa);
        return function (a) {
          return a.getAttribute("id") === b
        }
      }, d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = b.getElementById(a);
          return c ? [c] : []
        }
      }) : (d.filter.ID = function (a) {
        var b = a.replace(_, aa);
        return function (a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
          return c && c.value === b
        }
      }, d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c, d, e, f = b.getElementById(a);
          if (f) {
            if (c = f.getAttributeNode("id"), c && c.value === a) return [f];
            e = b.getElementsByName(a), d = 0;
            while (f = e[d++])
              if (c = f.getAttributeNode("id"), c && c.value === a) return [f]
          }
          return []
        }
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
      } : function (a, b) {
        var c, d = [],
          e = 0,
          f = b.getElementsByTagName(a);
        if ("*" === a) {
          while (c = f[e++]) 1 === c.nodeType && d.push(c);
          return d
        }
        return f
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a)
      }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function (a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
      }), ja(function (a) {
        a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var b = n.createElement("input");
        b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
      })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
        c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N)
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
          d = b && b.parentNode;
        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
      } : function (a, b) {
        if (b)
          while (b = b.parentNode)
            if (b === a) return !0;
        return !1
      }, B = b ? function (a, b) {
        if (a === b) return l = !0, 0;
        var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
        return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1)
      } : function (a, b) {
        if (a === b) return l = !0, 0;
        var c, d = 0,
          e = a.parentNode,
          f = b.parentNode,
          g = [a],
          h = [b];
        if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;
        if (e === f) return la(a, b);
        c = a;
        while (c = c.parentNode) g.unshift(c);
        c = b;
        while (c = c.parentNode) h.unshift(c);
        while (g[d] === h[d]) d++;
        return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
      }, n) : n
    }, ga.matches = function (a, b) {
      return ga(a, null, null, b)
    }, ga.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
        var d = s.call(a, b);
        if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
      } catch (e) {}
      return ga(b, n, null, [a]).length > 0
    }, ga.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b)
    }, ga.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);
      var e = d.attrHandle[b.toLowerCase()],
        f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
      return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
    }, ga.escape = function (a) {
      return (a + "").replace(ba, ca)
    }, ga.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a)
    }, ga.uniqueSort = function (a) {
      var b, d = [],
        e = 0,
        f = 0;
      if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) b === a[f] && (e = d.push(f));
        while (e--) a.splice(d[e], 1)
      }
      return k = null, a
    }, e = ga.getText = function (a) {
      var b, c = "",
        d = 0,
        f = a.nodeType;
      if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;
          for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
        } else if (3 === f || 4 === f) return a.nodeValue
      } else
        while (b = a[d++]) c += e(b);
      return c
    }, d = ga.selectors = {
      cacheLength: 50,
      createPseudo: ia,
      match: V,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function (a) {
          return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
        },
        CHILD: function (a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
        },
        PSEUDO: function (a) {
          var b, c = !a[6] && a[2];
          return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
        }
      },
      filter: {
        TAG: function (a) {
          var b = a.replace(_, aa).toLowerCase();
          return "*" === a ? function () {
            return !0
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b
          }
        },
        CLASS: function (a) {
          var b = y[a + " "];
          return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function (a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
          })
        },
        ATTR: function (a, b, c) {
          return function (d) {
            var e = ga.attr(d, a);
            return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"))
          }
        },
        CHILD: function (a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
            g = "last" !== a.slice(-4),
            h = "of-type" === b;
          return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode
          } : function (b, c, i) {
            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
              q = b.parentNode,
              r = h && b.nodeName.toLowerCase(),
              s = !i && !h,
              t = !1;
            if (q) {
              if (f) {
                while (p) {
                  m = b;
                  while (m = m[p])
                    if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                  o = p = "only" === a && !o && "nextSibling"
                }
                return !0
              }
              if (o = [g ? q.firstChild : q.lastChild], g && s) {
                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                  if (1 === m.nodeType && ++t && m === b) {
                    k[a] = [w, n, t];
                    break
                  }
              } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                  if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
              return t -= e, t === d || t % d === 0 && t / d >= 0
            }
          }
        },
        PSEUDO: function (a, b) {
          var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
          return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
            var d, f = e(a, b),
              g = f.length;
            while (g--) d = I(a, f[g]), a[d] = !(c[d] = f[g])
          }) : function (a) {
            return e(a, 0, c)
          }) : e
        }
      },
      pseudos: {
        not: ia(function (a) {
          var b = [],
            c = [],
            d = h(a.replace(P, "$1"));
          return d[u] ? ia(function (a, b, c, e) {
            var f, g = d(a, null, e, []),
              h = a.length;
            while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
          }
        }),
        has: ia(function (a) {
          return function (b) {
            return ga(a, b).length > 0
          }
        }),
        contains: ia(function (a) {
          return a = a.replace(_, aa),
            function (b) {
              return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
            }
        }),
        lang: ia(function (a) {
          return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(),
            function (b) {
              var c;
              do
                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
              return !1
            }
        }),
        target: function (b) {
          var c = a.location && a.location.hash;
          return c && c.slice(1) === b.id
        },
        root: function (a) {
          return a === o
        },
        focus: function (a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
        },
        enabled: oa(!1),
        disabled: oa(!0),
        checked: function (a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && !!a.checked || "option" === b && !!a.selected
        },
        selected: function (a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
        },
        empty: function (a) {
          for (a = a.firstChild; a; a = a.nextSibling)
            if (a.nodeType < 6) return !1;
          return !0
        },
        parent: function (a) {
          return !d.pseudos.empty(a)
        },
        header: function (a) {
          return X.test(a.nodeName)
        },
        input: function (a) {
          return W.test(a.nodeName)
        },
        button: function (a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && "button" === a.type || "button" === b
        },
        text: function (a) {
          var b;
          return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
        },
        first: pa(function () {
          return [0]
        }),
        last: pa(function (a, b) {
          return [b - 1]
        }),
        eq: pa(function (a, b, c) {
          return [c < 0 ? c + b : c]
        }),
        even: pa(function (a, b) {
          for (var c = 0; c < b; c += 2) a.push(c);
          return a
        }),
        odd: pa(function (a, b) {
          for (var c = 1; c < b; c += 2) a.push(c);
          return a
        }),
        lt: pa(function (a, b, c) {
          for (var d = c < 0 ? c + b : c; --d >= 0;) a.push(d);
          return a
        }),
        gt: pa(function (a, b, c) {
          for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d);
          return a
        })
      }
    }, d.pseudos.nth = d.pseudos.eq;
    for (b in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) d.pseudos[b] = ma(b);
    for (b in {
        submit: !0,
        reset: !0
      }) d.pseudos[b] = na(b);

    function ra() {}
    ra.prototype = d.filters = d.pseudos, d.setFilters = new ra, g = ga.tokenize = function (a, b) {
      var c, e, f, g, h, i, j, k = z[a + " "];
      if (k) return b ? 0 : k.slice(0);
      h = a, i = [], j = d.preFilter;
      while (h) {
        c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({
          value: c,
          type: e[0].replace(P, " ")
        }), h = h.slice(c.length));
        for (g in d.filter) !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
          value: c,
          type: g,
          matches: e
        }), h = h.slice(c.length));
        if (!c) break
      }
      return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
    };

    function sa(a) {
      for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
      return d
    }

    function ta(a, b, c) {
      var d = b.dir,
        e = b.next,
        f = e || d,
        g = c && "parentNode" === f,
        h = x++;
      return b.first ? function (b, c, e) {
        while (b = b[d])
          if (1 === b.nodeType || g) return a(b, c, e);
        return !1
      } : function (b, c, i) {
        var j, k, l, m = [w, h];
        if (i) {
          while (b = b[d])
            if ((1 === b.nodeType || g) && a(b, c, i)) return !0
        } else
          while (b = b[d])
            if (1 === b.nodeType || g)
              if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;
              else {
                if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];
                if (k[f] = m, m[2] = a(b, c, i)) return !0
              } return !1
      }
    }

    function ua(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;
        while (e--)
          if (!a[e](b, c, d)) return !1;
        return !0
      } : a[0]
    }

    function va(a, b, c) {
      for (var d = 0, e = b.length; d < e; d++) ga(a, b[d], c);
      return c
    }

    function wa(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
      return g
    }

    function xa(a, b, c, d, e, f) {
      return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function (f, g, h, i) {
        var j, k, l, m = [],
          n = [],
          o = g.length,
          p = f || va(b || "*", h.nodeType ? [h] : h, []),
          q = !a || !f && b ? p : wa(p, m, a, h, i),
          r = c ? e || (f ? a : o || d) ? [] : g : q;
        if (c && c(q, r, h, i), d) {
          j = wa(r, n), d(j, [], h, i), k = j.length;
          while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
        }
        if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;
              while (k--)(l = r[k]) && j.push(q[k] = l);
              e(null, r = [], j, i)
            }
            k = r.length;
            while (k--)(l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
          }
        } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r)
      })
    }

    function ya(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function (a) {
          return a === b
        }, h, !0), l = ta(function (a) {
          return I(b, a) > -1
        }, h, !0), m = [function (a, c, d) {
          var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
          return b = null, e
        }]; i < f; i++)
        if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];
        else {
          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
            for (e = ++i; e < f; e++)
              if (d.relative[a[e].type]) break;
            return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({
              value: " " === a[i - 2].type ? "*" : ""
            })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a))
          }
          m.push(c)
        } return ua(m)
    }

    function za(a, b) {
      var c = b.length > 0,
        e = a.length > 0,
        f = function (f, g, h, i, k) {
          var l, o, q, r = 0,
            s = "0",
            t = f && [],
            u = [],
            v = j,
            x = f || e && d.find.TAG("*", k),
            y = w += null == v ? 1 : Math.random() || .1,
            z = x.length;
          for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
            if (e && l) {
              o = 0, g || l.ownerDocument === n || (m(l), h = !p);
              while (q = a[o++])
                if (q(l, g || n, h)) {
                  i.push(l);
                  break
                } k && (w = y)
            }
            c && ((l = !q && l) && r--, f && t.push(l))
          }
          if (r += s, c && s !== r) {
            o = 0;
            while (q = b[o++]) q(t, u, g, h);
            if (f) {
              if (r > 0)
                while (s--) t[s] || u[s] || (u[s] = E.call(i));
              u = wa(u)
            }
            G.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i)
          }
          return k && (w = y, j = v), t
        };
      return c ? ia(f) : f
    }
    return h = ga.compile = function (a, b) {
      var c, d = [],
        e = [],
        f = A[a + " "];
      if (!f) {
        b || (b = g(a)), c = b.length;
        while (c--) f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
        f = A(a, za(e, d)), f.selector = a
      }
      return f
    }, i = ga.select = function (a, b, c, e) {
      var f, i, j, k, l, m = "function" == typeof a && a,
        n = !e && g(a = m.selector || a);
      if (c = c || [], 1 === n.length) {
        if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
          if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b) return c;
          m && (b = b.parentNode), a = a.slice(i.shift().value.length)
        }
        f = V.needsContext.test(a) ? 0 : i.length;
        while (f--) {
          if (j = i[f], d.relative[k = j.type]) break;
          if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) {
            if (i.splice(f, 1), a = e.length && sa(i), !a) return G.apply(c, e), c;
            break
          }
        }
      }
      return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("fieldset"))
    }), ja(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
    }) || ka("type|href|height|width", function (a, b, c) {
      if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
    }), c.attributes && ja(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
    }) || ka("value", function (a, b, c) {
      if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue
    }), ja(function (a) {
      return null == a.getAttribute("disabled")
    }) || ka(J, function (a, b, c) {
      var d;
      if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
    }), ga
  }(a);
  r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;
  var y = function (a, b, c) {
      var d = [],
        e = void 0 !== c;
      while ((a = a[b]) && 9 !== a.nodeType)
        if (1 === a.nodeType) {
          if (e && r(a).is(c)) break;
          d.push(a)
        } return d
    },
    z = function (a, b) {
      for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
      return c
    },
    A = r.expr.match.needsContext;

  function B(a, b) {
    return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
  }
  var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
    D = /^.[^:#\[\.,]*$/;

  function E(a, b, c) {
    return r.isFunction(b) ? r.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c
    }) : b.nodeType ? r.grep(a, function (a) {
      return a === b !== c
    }) : "string" != typeof b ? r.grep(a, function (a) {
      return i.call(b, a) > -1 !== c
    }) : D.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function (a) {
      return i.call(b, a) > -1 !== c && 1 === a.nodeType
    }))
  }
  r.filter = function (a, b, c) {
    var d = b[0];
    return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function (a) {
      return 1 === a.nodeType
    }))
  }, r.fn.extend({
    find: function (a) {
      var b, c, d = this.length,
        e = this;
      if ("string" != typeof a) return this.pushStack(r(a).filter(function () {
        for (b = 0; b < d; b++)
          if (r.contains(e[b], this)) return !0
      }));
      for (c = this.pushStack([]), b = 0; b < d; b++) r.find(a, e[b], c);
      return d > 1 ? r.uniqueSort(c) : c
    },
    filter: function (a) {
      return this.pushStack(E(this, a || [], !1))
    },
    not: function (a) {
      return this.pushStack(E(this, a || [], !0))
    },
    is: function (a) {
      return !!E(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length
    }
  });
  var F, G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
    H = r.fn.init = function (a, b, c) {
      var e, f;
      if (!a) return this;
      if (c = c || F, "string" == typeof a) {
        if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : G.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
        if (e[1]) {
          if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), C.test(e[1]) && r.isPlainObject(b))
            for (e in b) r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
          return this
        }
        return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this
      }
      return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this)
    };
  H.prototype = r.fn, F = r(d);
  var I = /^(?:parents|prev(?:Until|All))/,
    J = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  r.fn.extend({
    has: function (a) {
      var b = r(a, this),
        c = b.length;
      return this.filter(function () {
        for (var a = 0; a < c; a++)
          if (r.contains(this, b[a])) return !0
      })
    },
    closest: function (a, b) {
      var c, d = 0,
        e = this.length,
        f = [],
        g = "string" != typeof a && r(a);
      if (!A.test(a))
        for (; d < e; d++)
          for (c = this[d]; c && c !== b; c = c.parentNode)
            if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
              f.push(c);
              break
            } return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f)
    },
    index: function (a) {
      return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function (a, b) {
      return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))))
    },
    addBack: function (a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    }
  });

  function K(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType);
    return a
  }
  r.each({
    parent: function (a) {
      var b = a.parentNode;
      return b && 11 !== b.nodeType ? b : null
    },
    parents: function (a) {
      return y(a, "parentNode")
    },
    parentsUntil: function (a, b, c) {
      return y(a, "parentNode", c)
    },
    next: function (a) {
      return K(a, "nextSibling")
    },
    prev: function (a) {
      return K(a, "previousSibling")
    },
    nextAll: function (a) {
      return y(a, "nextSibling")
    },
    prevAll: function (a) {
      return y(a, "previousSibling")
    },
    nextUntil: function (a, b, c) {
      return y(a, "nextSibling", c)
    },
    prevUntil: function (a, b, c) {
      return y(a, "previousSibling", c)
    },
    siblings: function (a) {
      return z((a.parentNode || {}).firstChild, a)
    },
    children: function (a) {
      return z(a.firstChild)
    },
    contents: function (a) {
      return B(a, "iframe") ? a.contentDocument : (B(a, "template") && (a = a.content || a), r.merge([], a.childNodes))
    }
  }, function (a, b) {
    r.fn[a] = function (c, d) {
      var e = r.map(this, b, c);
      return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (J[a] || r.uniqueSort(e), I.test(a) && e.reverse()), this.pushStack(e)
    }
  });
  var L = /[^\x20\t\r\n\f]+/g;

  function M(a) {
    var b = {};
    return r.each(a.match(L) || [], function (a, c) {
      b[c] = !0
    }), b
  }
  r.Callbacks = function (a) {
    a = "string" == typeof a ? M(a) : r.extend({}, a);
    var b, c, d, e, f = [],
      g = [],
      h = -1,
      i = function () {
        for (e = e || a.once, d = b = !0; g.length; h = -1) {
          c = g.shift();
          while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
        }
        a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
      },
      j = {
        add: function () {
          return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
            r.each(b, function (b, c) {
              r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c)
            })
          }(arguments), c && !b && i()), this
        },
        remove: function () {
          return r.each(arguments, function (a, b) {
            var c;
            while ((c = r.inArray(b, f, c)) > -1) f.splice(c, 1), c <= h && h--
          }), this
        },
        has: function (a) {
          return a ? r.inArray(a, f) > -1 : f.length > 0
        },
        empty: function () {
          return f && (f = []), this
        },
        disable: function () {
          return e = g = [], f = c = "", this
        },
        disabled: function () {
          return !f
        },
        lock: function () {
          return e = g = [], c || b || (f = c = ""), this
        },
        locked: function () {
          return !!e
        },
        fireWith: function (a, c) {
          return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
        },
        fire: function () {
          return j.fireWith(this, arguments), this
        },
        fired: function () {
          return !!d
        }
      };
    return j
  };

  function N(a) {
    return a
  }

  function O(a) {
    throw a
  }

  function P(a, b, c, d) {
    var e;
    try {
      a && r.isFunction(e = a.promise) ? e.call(a).done(b).fail(c) : a && r.isFunction(e = a.then) ? e.call(a, b, c) : b.apply(void 0, [a].slice(d))
    } catch (a) {
      c.apply(void 0, [a])
    }
  }
  r.extend({
    Deferred: function (b) {
      var c = [
          ["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2],
          ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"],
          ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]
        ],
        d = "pending",
        e = {
          state: function () {
            return d
          },
          always: function () {
            return f.done(arguments).fail(arguments), this
          },
          "catch": function (a) {
            return e.then(null, a)
          },
          pipe: function () {
            var a = arguments;
            return r.Deferred(function (b) {
              r.each(c, function (c, d) {
                var e = r.isFunction(a[d[4]]) && a[d[4]];
                f[d[1]](function () {
                  var a = e && e.apply(this, arguments);
                  a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments)
                })
              }), a = null
            }).promise()
          },
          then: function (b, d, e) {
            var f = 0;

            function g(b, c, d, e) {
              return function () {
                var h = this,
                  i = arguments,
                  j = function () {
                    var a, j;
                    if (!(b < f)) {
                      if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");
                      j = a && ("object" == typeof a || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, N, e), g(f, c, O, e)) : (f++, j.call(a, g(f, c, N, e), g(f, c, O, e), g(f, c, N, c.notifyWith))) : (d !== N && (h = void 0, i = [a]), (e || c.resolveWith)(h, i))
                    }
                  },
                  k = e ? j : function () {
                    try {
                      j()
                    } catch (a) {
                      r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== O && (h = void 0, i = [a]), c.rejectWith(h, i))
                    }
                  };
                b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k))
              }
            }
            return r.Deferred(function (a) {
              c[0][3].add(g(0, a, r.isFunction(e) ? e : N, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : N)), c[2][3].add(g(0, a, r.isFunction(d) ? d : O))
            }).promise()
          },
          promise: function (a) {
            return null != a ? r.extend(a, e) : e
          }
        },
        f = {};
      return r.each(c, function (a, b) {
        var g = b[2],
          h = b[5];
        e[b[1]] = g.add, h && g.add(function () {
          d = h
        }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function () {
          return f[b[0] + "With"](this === f ? void 0 : this, arguments), this
        }, f[b[0] + "With"] = g.fireWith
      }), e.promise(f), b && b.call(f, f), f
    },
    when: function (a) {
      var b = arguments.length,
        c = b,
        d = Array(c),
        e = f.call(arguments),
        g = r.Deferred(),
        h = function (a) {
          return function (c) {
            d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e)
          }
        };
      if (b <= 1 && (P(a, g.done(h(c)).resolve, g.reject, !b), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();
      while (c--) P(e[c], h(c), g.reject);
      return g.promise()
    }
  });
  var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  r.Deferred.exceptionHook = function (b, c) {
    a.console && a.console.warn && b && Q.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c)
  }, r.readyException = function (b) {
    a.setTimeout(function () {
      throw b
    })
  };
  var R = r.Deferred();
  r.fn.ready = function (a) {
    return R.then(a)["catch"](function (a) {
      r.readyException(a)
    }), this
  }, r.extend({
    isReady: !1,
    readyWait: 1,
    ready: function (a) {
      (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || R.resolveWith(d, [r]))
    }
  }), r.ready.then = R.then;

  function S() {
    d.removeEventListener("DOMContentLoaded", S),
      a.removeEventListener("load", S), r.ready()
  }
  "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", S), a.addEventListener("load", S));
  var T = function (a, b, c, d, e, f, g) {
      var h = 0,
        i = a.length,
        j = null == c;
      if ("object" === r.type(c)) {
        e = !0;
        for (h in c) T(a, b, h, c[h], !0, f, g)
      } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
          return j.call(r(a), c)
        })), b))
        for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    },
    U = function (a) {
      return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };

  function V() {
    this.expando = r.expando + V.uid++
  }
  V.uid = 1, V.prototype = {
    cache: function (a) {
      var b = a[this.expando];
      return b || (b = {}, U(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
        value: b,
        configurable: !0
      }))), b
    },
    set: function (a, b, c) {
      var d, e = this.cache(a);
      if ("string" == typeof b) e[r.camelCase(b)] = c;
      else
        for (d in b) e[r.camelCase(d)] = b[d];
      return e
    },
    get: function (a, b) {
      return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)]
    },
    access: function (a, b, c) {
      return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b)
    },
    remove: function (a, b) {
      var c, d = a[this.expando];
      if (void 0 !== d) {
        if (void 0 !== b) {
          Array.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(L) || []), c = b.length;
          while (c--) delete d[b[c]]
        }(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
      }
    },
    hasData: function (a) {
      var b = a[this.expando];
      return void 0 !== b && !r.isEmptyObject(b)
    }
  };
  var W = new V,
    X = new V,
    Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Z = /[A-Z]/g;

  function $(a) {
    return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : Y.test(a) ? JSON.parse(a) : a)
  }

  function _(a, b, c) {
    var d;
    if (void 0 === c && 1 === a.nodeType)
      if (d = "data-" + b.replace(Z, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
        try {
          c = $(c)
        } catch (e) {}
        X.set(a, b, c)
      } else c = void 0;
    return c
  }
  r.extend({
    hasData: function (a) {
      return X.hasData(a) || W.hasData(a)
    },
    data: function (a, b, c) {
      return X.access(a, b, c)
    },
    removeData: function (a, b) {
      X.remove(a, b)
    },
    _data: function (a, b, c) {
      return W.access(a, b, c)
    },
    _removeData: function (a, b) {
      W.remove(a, b)
    }
  }), r.fn.extend({
    data: function (a, b) {
      var c, d, e, f = this[0],
        g = f && f.attributes;
      if (void 0 === a) {
        if (this.length && (e = X.get(f), 1 === f.nodeType && !W.get(f, "hasDataAttrs"))) {
          c = g.length;
          while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), _(f, d, e[d])));
          W.set(f, "hasDataAttrs", !0)
        }
        return e
      }
      return "object" == typeof a ? this.each(function () {
        X.set(this, a)
      }) : T(this, function (b) {
        var c;
        if (f && void 0 === b) {
          if (c = X.get(f, a), void 0 !== c) return c;
          if (c = _(f, a), void 0 !== c) return c
        } else this.each(function () {
          X.set(this, a, b)
        })
      }, null, b, arguments.length > 1, null, !0)
    },
    removeData: function (a) {
      return this.each(function () {
        X.remove(this, a)
      })
    }
  }), r.extend({
    queue: function (a, b, c) {
      var d;
      if (a) return b = (b || "fx") + "queue", d = W.get(a, b), c && (!d || Array.isArray(c) ? d = W.access(a, b, r.makeArray(c)) : d.push(c)), d || []
    },
    dequeue: function (a, b) {
      b = b || "fx";
      var c = r.queue(a, b),
        d = c.length,
        e = c.shift(),
        f = r._queueHooks(a, b),
        g = function () {
          r.dequeue(a, b)
        };
      "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
    },
    _queueHooks: function (a, b) {
      var c = b + "queueHooks";
      return W.get(a, c) || W.access(a, c, {
        empty: r.Callbacks("once memory").add(function () {
          W.remove(a, [b + "queue", c])
        })
      })
    }
  }), r.fn.extend({
    queue: function (a, b) {
      var c = 2;
      return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = r.queue(this, a, b);
        r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a)
      })
    },
    dequeue: function (a) {
      return this.each(function () {
        r.dequeue(this, a)
      })
    },
    clearQueue: function (a) {
      return this.queue(a || "fx", [])
    },
    promise: function (a, b) {
      var c, d = 1,
        e = r.Deferred(),
        f = this,
        g = this.length,
        h = function () {
          --d || e.resolveWith(f, [f])
        };
      "string" != typeof a && (b = a, a = void 0), a = a || "fx";
      while (g--) c = W.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      return h(), e.promise(b)
    }
  });
  var aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ba = new RegExp("^(?:([+-])=|)(" + aa + ")([a-z%]*)$", "i"),
    ca = ["Top", "Right", "Bottom", "Left"],
    da = function (a, b) {
      return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display")
    },
    ea = function (a, b, c, d) {
      var e, f, g = {};
      for (f in b) g[f] = a.style[f], a.style[f] = b[f];
      e = c.apply(a, d || []);
      for (f in b) a.style[f] = g[f];
      return e
    };

  function fa(a, b, c, d) {
    var e, f = 1,
      g = 20,
      h = d ? function () {
        return d.cur()
      } : function () {
        return r.css(a, b, "")
      },
      i = h(),
      j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
      k = (r.cssNumber[b] || "px" !== j && +i) && ba.exec(r.css(a, b));
    if (k && k[3] !== j) {
      j = j || k[3], c = c || [], k = +i || 1;
      do f = f || ".5", k /= f, r.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
    }
    return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
  }
  var ga = {};

  function ha(a) {
    var b, c = a.ownerDocument,
      d = a.nodeName,
      e = ga[d];
    return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), ga[d] = e, e)
  }

  function ia(a, b) {
    for (var c, d, e = [], f = 0, g = a.length; f < g; f++) d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = W.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && da(d) && (e[f] = ha(d))) : "none" !== c && (e[f] = "none", W.set(d, "display", c)));
    for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]);
    return a
  }
  r.fn.extend({
    show: function () {
      return ia(this, !0)
    },
    hide: function () {
      return ia(this)
    },
    toggle: function (a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        da(this) ? r(this).show() : r(this).hide()
      })
    }
  });
  var ja = /^(?:checkbox|radio)$/i,
    ka = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    la = /^$|\/(?:java|ecma)script/i,
    ma = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
  ma.optgroup = ma.option, ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead, ma.th = ma.td;

  function na(a, b) {
    var c;
    return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && B(a, b) ? r.merge([a], c) : c
  }

  function oa(a, b) {
    for (var c = 0, d = a.length; c < d; c++) W.set(a[c], "globalEval", !b || W.get(b[c], "globalEval"))
  }
  var pa = /<|&#?\w+;/;

  function qa(a, b, c, d, e) {
    for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++)
      if (f = a[n], f || 0 === f)
        if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);
        else if (pa.test(f)) {
      g = g || l.appendChild(b.createElement("div")), h = (ka.exec(f) || ["", ""])[1].toLowerCase(), i = ma[h] || ma._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];
      while (k--) g = g.lastChild;
      r.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
    } else m.push(b.createTextNode(f));
    l.textContent = "", n = 0;
    while (f = m[n++])
      if (d && r.inArray(f, d) > -1) e && e.push(f);
      else if (j = r.contains(f.ownerDocument, f), g = na(l.appendChild(f), "script"), j && oa(g), c) {
      k = 0;
      while (f = g[k++]) la.test(f.type || "") && c.push(f)
    }
    return l
  }! function () {
    var a = d.createDocumentFragment(),
      b = a.appendChild(d.createElement("div")),
      c = d.createElement("input");
    c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
  }();
  var ra = d.documentElement,
    sa = /^key/,
    ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    ua = /^([^.]*)(?:\.(.+)|)/;

  function va() {
    return !0
  }

  function wa() {
    return !1
  }

  function xa() {
    try {
      return d.activeElement
    } catch (a) {}
  }

  function ya(a, b, c, d, e, f) {
    var g, h;
    if ("object" == typeof b) {
      "string" != typeof c && (d = d || c, c = void 0);
      for (h in b) ya(a, h, c, d, b[h], f);
      return a
    }
    if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = wa;
    else if (!e) return a;
    return 1 === f && (g = e, e = function (a) {
      return r().off(a), g.apply(this, arguments)
    }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function () {
      r.event.add(this, b, e, d, c)
    })
  }
  r.event = {
    global: {},
    add: function (a, b, c, d, e) {
      var f, g, h, i, j, k, l, m, n, o, p, q = W.get(a);
      if (q) {
        c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(ra, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
          return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0
        }), b = (b || "").match(L) || [""], j = b.length;
        while (j--) h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({
          type: n,
          origType: p,
          data: d,
          handler: c,
          guid: c.guid,
          selector: e,
          needsContext: e && r.expr.match.needsContext.test(e),
          namespace: o.join(".")
        }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0)
      }
    },
    remove: function (a, b, c, d, e) {
      var f, g, h, i, j, k, l, m, n, o, p, q = W.hasData(a) && W.get(a);
      if (q && (i = q.events)) {
        b = (b || "").match(L) || [""], j = b.length;
        while (j--)
          if (h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
            l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
            while (f--) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
            g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n])
          } else
            for (n in i) r.event.remove(a, n + b[j], c, d, !0);
        r.isEmptyObject(i) && W.remove(a, "handle events")
      }
    },
    dispatch: function (a) {
      var b = r.event.fix(a),
        c, d, e, f, g, h, i = new Array(arguments.length),
        j = (W.get(this, "events") || {})[b.type] || [],
        k = r.event.special[b.type] || {};
      for (i[0] = b, c = 1; c < arguments.length; c++) i[c] = arguments[c];
      if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
        h = r.event.handlers.call(this, b, j), c = 0;
        while ((f = h[c++]) && !b.isPropagationStopped()) {
          b.currentTarget = f.elem, d = 0;
          while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()))
        }
        return k.postDispatch && k.postDispatch.call(this, b), b.result
      }
    },
    handlers: function (a, b) {
      var c, d, e, f, g, h = [],
        i = b.delegateCount,
        j = a.target;
      if (i && j.nodeType && !("click" === a.type && a.button >= 1))
        for (; j !== this; j = j.parentNode || this)
          if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
            for (f = [], g = {}, c = 0; c < i; c++) d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d);
            f.length && h.push({
              elem: j,
              handlers: f
            })
          } return j = this, i < b.length && h.push({
        elem: j,
        handlers: b.slice(i)
      }), h
    },
    addProp: function (a, b) {
      Object.defineProperty(r.Event.prototype, a, {
        enumerable: !0,
        configurable: !0,
        get: r.isFunction(b) ? function () {
          if (this.originalEvent) return b(this.originalEvent)
        } : function () {
          if (this.originalEvent) return this.originalEvent[a]
        },
        set: function (b) {
          Object.defineProperty(this, a, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: b
          })
        }
      })
    },
    fix: function (a) {
      return a[r.expando] ? a : new r.Event(a)
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function () {
          if (this !== xa() && this.focus) return this.focus(), !1
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function () {
          if (this === xa() && this.blur) return this.blur(), !1
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function () {
          if ("checkbox" === this.type && this.click && B(this, "input")) return this.click(), !1
        },
        _default: function (a) {
          return B(a.target, "a")
        }
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
        }
      }
    }
  }, r.removeEvent = function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c)
  }, r.Event = function (a, b) {
    return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? va : wa, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void(this[r.expando] = !0)) : new r.Event(a, b)
  }, r.Event.prototype = {
    constructor: r.Event,
    isDefaultPrevented: wa,
    isPropagationStopped: wa,
    isImmediatePropagationStopped: wa,
    isSimulated: !1,
    preventDefault: function () {
      var a = this.originalEvent;
      this.isDefaultPrevented = va, a && !this.isSimulated && a.preventDefault()
    },
    stopPropagation: function () {
      var a = this.originalEvent;
      this.isPropagationStopped = va, a && !this.isSimulated && a.stopPropagation()
    },
    stopImmediatePropagation: function () {
      var a = this.originalEvent;
      this.isImmediatePropagationStopped = va, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
    }
  }, r.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function (a) {
      var b = a.button;
      return null == a.which && sa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ta.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which
    }
  }, r.event.addProp), r.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (a, b) {
    r.event.special[a] = {
      delegateType: b,
      bindType: b,
      handle: function (a) {
        var c, d = this,
          e = a.relatedTarget,
          f = a.handleObj;
        return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
      }
    }
  }), r.fn.extend({
    on: function (a, b, c, d) {
      return ya(this, a, b, c, d)
    },
    one: function (a, b, c, d) {
      return ya(this, a, b, c, d, 1)
    },
    off: function (a, b, c) {
      var d, e;
      if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
      if ("object" == typeof a) {
        for (e in a) this.off(e, b, a[e]);
        return this
      }
      return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = wa), this.each(function () {
        r.event.remove(this, a, c, b)
      })
    }
  });
  var za = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    Aa = /<script|<style|<link/i,
    Ba = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ca = /^true\/(.*)/,
    Da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function Ea(a, b) {
    return B(a, "table") && B(11 !== b.nodeType ? b : b.firstChild, "tr") ? r(">tbody", a)[0] || a : a
  }

  function Fa(a) {
    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
  }

  function Ga(a) {
    var b = Ca.exec(a.type);
    return b ? a.type = b[1] : a.removeAttribute("type"), a
  }

  function Ha(a, b) {
    var c, d, e, f, g, h, i, j;
    if (1 === b.nodeType) {
      if (W.hasData(a) && (f = W.access(a), g = W.set(b, f), j = f.events)) {
        delete g.handle, g.events = {};
        for (e in j)
          for (c = 0, d = j[e].length; c < d; c++) r.event.add(b, e, j[e][c])
      }
      X.hasData(a) && (h = X.access(a), i = r.extend({}, h), X.set(b, i))
    }
  }

  function Ia(a, b) {
    var c = b.nodeName.toLowerCase();
    "input" === c && ja.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
  }

  function Ja(a, b, c, d) {
    b = g.apply([], b);
    var e, f, h, i, j, k, l = 0,
      m = a.length,
      n = m - 1,
      q = b[0],
      s = r.isFunction(q);
    if (s || m > 1 && "string" == typeof q && !o.checkClone && Ba.test(q)) return a.each(function (e) {
      var f = a.eq(e);
      s && (b[0] = q.call(this, e, f.html())), Ja(f, b, c, d)
    });
    if (m && (e = qa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
      for (h = r.map(na(e, "script"), Fa), i = h.length; l < m; l++) j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, na(j, "script"))), c.call(a[l], j, l);
      if (i)
        for (k = h[h.length - 1].ownerDocument, r.map(h, Ga), l = 0; l < i; l++) j = h[l], la.test(j.type || "") && !W.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Da, ""), k))
    }
    return a
  }

  function Ka(a, b, c) {
    for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || r.cleanData(na(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && oa(na(d, "script")), d.parentNode.removeChild(d));
    return a
  }
  r.extend({
    htmlPrefilter: function (a) {
      return a.replace(za, "<$1></$2>")
    },
    clone: function (a, b, c) {
      var d, e, f, g, h = a.cloneNode(!0),
        i = r.contains(a.ownerDocument, a);
      if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a)))
        for (g = na(h), f = na(a), d = 0, e = f.length; d < e; d++) Ia(f[d], g[d]);
      if (b)
        if (c)
          for (f = f || na(a), g = g || na(h), d = 0, e = f.length; d < e; d++) Ha(f[d], g[d]);
        else Ha(a, h);
      return g = na(h, "script"), g.length > 0 && oa(g, !i && na(a, "script")), h
    },
    cleanData: function (a) {
      for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++)
        if (U(c)) {
          if (b = c[W.expando]) {
            if (b.events)
              for (d in b.events) e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
            c[W.expando] = void 0
          }
          c[X.expando] && (c[X.expando] = void 0)
        }
    }
  }), r.fn.extend({
    detach: function (a) {
      return Ka(this, a, !0)
    },
    remove: function (a) {
      return Ka(this, a)
    },
    text: function (a) {
      return T(this, function (a) {
        return void 0 === a ? r.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
        })
      }, null, a, arguments.length)
    },
    append: function () {
      return Ja(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Ea(this, a);
          b.appendChild(a)
        }
      })
    },
    prepend: function () {
      return Ja(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Ea(this, a);
          b.insertBefore(a, b.firstChild)
        }
      })
    },
    before: function () {
      return Ja(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this)
      })
    },
    after: function () {
      return Ja(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
      })
    },
    empty: function () {
      for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (r.cleanData(na(a, !1)), a.textContent = "");
      return this
    },
    clone: function (a, b) {
      return a = null != a && a, b = null == b ? a : b, this.map(function () {
        return r.clone(this, a, b)
      })
    },
    html: function (a) {
      return T(this, function (a) {
        var b = this[0] || {},
          c = 0,
          d = this.length;
        if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
        if ("string" == typeof a && !Aa.test(a) && !ma[(ka.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = r.htmlPrefilter(a);
          try {
            for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && (r.cleanData(na(b, !1)), b.innerHTML = a);
            b = 0
          } catch (e) {}
        }
        b && this.empty().append(a)
      }, null, a, arguments.length)
    },
    replaceWith: function () {
      var a = [];
      return Ja(this, arguments, function (b) {
        var c = this.parentNode;
        r.inArray(this, a) < 0 && (r.cleanData(na(this)), c && c.replaceChild(b, this))
      }, a)
    }
  }), r.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (a, b) {
    r.fn[a] = function (a) {
      for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());
      return this.pushStack(d)
    }
  });
  var La = /^margin/,
    Ma = new RegExp("^(" + aa + ")(?!px)[a-z%]+$", "i"),
    Na = function (b) {
      var c = b.ownerDocument.defaultView;
      return c && c.opener || (c = a), c.getComputedStyle(b)
    };
  ! function () {
    function b() {
      if (i) {
        i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", ra.appendChild(h);
        var b = a.getComputedStyle(i);
        c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, ra.removeChild(h), i = null
      }
    }
    var c, e, f, g, h = d.createElement("div"),
      i = d.createElement("div");
    i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, {
      pixelPosition: function () {
        return b(), c
      },
      boxSizingReliable: function () {
        return b(), e
      },
      pixelMarginRight: function () {
        return b(), f
      },
      reliableMarginLeft: function () {
        return b(), g
      }
    }))
  }();

  function Oa(a, b, c) {
    var d, e, f, g, h = a.style;
    return c = c || Na(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && Ma.test(g) && La.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
  }

  function Pa(a, b) {
    return {
      get: function () {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments)
      }
    }
  }
  var Qa = /^(none|table(?!-c[ea]).+)/,
    Ra = /^--/,
    Sa = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    Ta = {
      letterSpacing: "0",
      fontWeight: "400"
    },
    Ua = ["Webkit", "Moz", "ms"],
    Va = d.createElement("div").style;

  function Wa(a) {
    if (a in Va) return a;
    var b = a[0].toUpperCase() + a.slice(1),
      c = Ua.length;
    while (c--)
      if (a = Ua[c] + b, a in Va) return a
  }

  function Xa(a) {
    var b = r.cssProps[a];
    return b || (b = r.cssProps[a] = Wa(a) || a), b
  }

  function Ya(a, b, c) {
    var d = ba.exec(b);
    return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
  }

  function Za(a, b, c, d, e) {
    var f, g = 0;
    for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2) "margin" === c && (g += r.css(a, c + ca[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + ca[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ca[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ca[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ca[f] + "Width", !0, e)));
    return g
  }

  function $a(a, b, c) {
    var d, e = Na(a),
      f = Oa(a, b, e),
      g = "border-box" === r.css(a, "boxSizing", !1, e);
    return Ma.test(f) ? f : (d = g && (o.boxSizingReliable() || f === a.style[b]), "auto" === f && (f = a["offset" + b[0].toUpperCase() + b.slice(1)]), f = parseFloat(f) || 0, f + Za(a, b, c || (g ? "border" : "content"), d, e) + "px")
  }
  r.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = Oa(a, "opacity");
            return "" === c ? "1" : c
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": "cssFloat"
    },
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e, f, g, h = r.camelCase(b),
          i = Ra.test(b),
          j = a.style;
        return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : j[b] : (f = typeof c, "string" === f && (e = ba.exec(c)) && e[1] && (c = fa(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (j[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i ? j.setProperty(b, c) : j[b] = c)), void 0)
      }
    },
    css: function (a, b, c, d) {
      var e, f, g, h = r.camelCase(b),
        i = Ra.test(b);
      return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Oa(a, b, d)), "normal" === e && b in Ta && (e = Ta[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
    }
  }), r.each(["height", "width"], function (a, b) {
    r.cssHooks[b] = {
      get: function (a, c, d) {
        if (c) return !Qa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? $a(a, b, d) : ea(a, Sa, function () {
          return $a(a, b, d)
        })
      },
      set: function (a, c, d) {
        var e, f = d && Na(a),
          g = d && Za(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);
        return g && (e = ba.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Ya(a, c, g)
      }
    }
  }), r.cssHooks.marginLeft = Pa(o.reliableMarginLeft, function (a, b) {
    if (b) return (parseFloat(Oa(a, "marginLeft")) || a.getBoundingClientRect().left - ea(a, {
      marginLeft: 0
    }, function () {
      return a.getBoundingClientRect().left
    })) + "px"
  }), r.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (a, b) {
    r.cssHooks[a + b] = {
      expand: function (c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) e[a + ca[d] + b] = f[d] || f[d - 2] || f[0];
        return e
      }
    }, La.test(a) || (r.cssHooks[a + b].set = Ya)
  }), r.fn.extend({
    css: function (a, b) {
      return T(this, function (a, b, c) {
        var d, e, f = {},
          g = 0;
        if (Array.isArray(b)) {
          for (d = Na(a), e = b.length; g < e; g++) f[b[g]] = r.css(a, b[g], !1, d);
          return f
        }
        return void 0 !== c ? r.style(a, b, c) : r.css(a, b)
      }, a, b, arguments.length > 1)
    }
  });

  function _a(a, b, c, d, e) {
    return new _a.prototype.init(a, b, c, d, e)
  }
  r.Tween = _a, _a.prototype = {
    constructor: _a,
    init: function (a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px")
    },
    cur: function () {
      var a = _a.propHooks[this.prop];
      return a && a.get ? a.get(this) : _a.propHooks._default.get(this)
    },
    run: function (a) {
      var b, c = _a.propHooks[this.prop];
      return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : _a.propHooks._default.set(this), this
    }
  }, _a.prototype.init.prototype = _a.prototype, _a.propHooks = {
    _default: {
      get: function (a) {
        var b;
        return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
      },
      set: function (a) {
        r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit)
      }
    }
  }, _a.propHooks.scrollTop = _a.propHooks.scrollLeft = {
    set: function (a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
    }
  }, r.easing = {
    linear: function (a) {
      return a
    },
    swing: function (a) {
      return .5 - Math.cos(a * Math.PI) / 2
    },
    _default: "swing"
  }, r.fx = _a.prototype.init, r.fx.step = {};
  var ab, bb, cb = /^(?:toggle|show|hide)$/,
    db = /queueHooks$/;

  function eb() {
    bb && (d.hidden === !1 && a.requestAnimationFrame ? a.requestAnimationFrame(eb) : a.setTimeout(eb, r.fx.interval), r.fx.tick())
  }

  function fb() {
    return a.setTimeout(function () {
      ab = void 0
    }), ab = r.now()
  }

  function gb(a, b) {
    var c, d = 0,
      e = {
        height: a
      };
    for (b = b ? 1 : 0; d < 4; d += 2 - b) c = ca[d], e["margin" + c] = e["padding" + c] = a;
    return b && (e.opacity = e.width = a), e
  }

  function hb(a, b, c) {
    for (var d, e = (kb.tweeners[b] || []).concat(kb.tweeners["*"]), f = 0, g = e.length; f < g; f++)
      if (d = e[f].call(c, b, a)) return d
  }

  function ib(a, b, c) {
    var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b,
      m = this,
      n = {},
      o = a.style,
      p = a.nodeType && da(a),
      q = W.get(a, "fxshow");
    c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function () {
      g.unqueued || h()
    }), g.unqueued++, m.always(function () {
      m.always(function () {
        g.unqueued--, r.queue(a, "fx").length || g.empty.fire()
      })
    }));
    for (d in b)
      if (e = b[d], cb.test(e)) {
        if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
          if ("show" !== e || !q || void 0 === q[d]) continue;
          p = !0
        }
        n[d] = q && q[d] || r.style(a, d)
      } if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) {
      l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = W.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ia([a], !0), j = a.style.display || j, k = r.css(a, "display"), ia([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function () {
        o.display = j
      }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function () {
        o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
      })), i = !1;
      for (d in n) i || (q ? "hidden" in q && (p = q.hidden) : q = W.access(a, "fxshow", {
        display: j
      }), f && (q.hidden = !p), p && ia([a], !0), m.done(function () {
        p || ia([a]), W.remove(a, "fxshow");
        for (d in n) r.style(a, d, n[d])
      })), i = hb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0))
    }
  }

  function jb(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (d = r.camelCase(c), e = b[d], f = a[c], Array.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) {
        f = g.expand(f), delete a[d];
        for (c in f) c in a || (a[c] = f[c], b[c] = e)
      } else b[d] = e
  }

  function kb(a, b, c) {
    var d, e, f = 0,
      g = kb.prefilters.length,
      h = r.Deferred().always(function () {
        delete i.elem
      }),
      i = function () {
        if (e) return !1;
        for (var b = ab || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f);
        return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (i || h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j]), !1)
      },
      j = h.promise({
        elem: a,
        props: r.extend({}, b),
        opts: r.extend(!0, {
          specialEasing: {},
          easing: r.easing._default
        }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: ab || fb(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c) {
          var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
          return j.tweens.push(d), d
        },
        stop: function (b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; c < d; c++) j.tweens[c].run(1);
          return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
        }
      }),
      k = j.props;
    for (jb(k, j.opts.specialEasing); f < g; f++)
      if (d = kb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
    return r.map(k, hb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always), r.fx.timer(r.extend(i, {
      elem: a,
      anim: j,
      queue: j.opts.queue
    })), j
  }
  r.Animation = r.extend(kb, {
      tweeners: {
        "*": [function (a, b) {
          var c = this.createTween(a, b);
          return fa(c.elem, a, ba.exec(b), c), c
        }]
      },
      tweener: function (a, b) {
        r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(L);
        for (var c, d = 0, e = a.length; d < e; d++) c = a[d], kb.tweeners[c] = kb.tweeners[c] || [], kb.tweeners[c].unshift(b)
      },
      prefilters: [ib],
      prefilter: function (a, b) {
        b ? kb.prefilters.unshift(a) : kb.prefilters.push(a)
      }
    }), r.speed = function (a, b, c) {
      var d = a && "object" == typeof a ? r.extend({}, a) : {
        complete: c || !c && b || r.isFunction(a) && a,
        duration: a,
        easing: c && b || b && !r.isFunction(b) && b
      };
      return r.fx.off ? d.duration = 0 : "number" != typeof d.duration && (d.duration in r.fx.speeds ? d.duration = r.fx.speeds[d.duration] : d.duration = r.fx.speeds._default), null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
        r.isFunction(d.old) && d.old.call(this), d.queue && r.dequeue(this, d.queue)
      }, d
    }, r.fn.extend({
      fadeTo: function (a, b, c, d) {
        return this.filter(da).css("opacity", 0).show().end().animate({
          opacity: b
        }, a, c, d)
      },
      animate: function (a, b, c, d) {
        var e = r.isEmptyObject(a),
          f = r.speed(b, c, d),
          g = function () {
            var b = kb(this, r.extend({}, a), f);
            (e || W.get(this, "finish")) && b.stop(!0)
          };
        return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
      },
      stop: function (a, b, c) {
        var d = function (a) {
          var b = a.stop;
          delete a.stop, b(c)
        };
        return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
          var b = !0,
            e = null != a && a + "queueHooks",
            f = r.timers,
            g = W.get(this);
          if (e) g[e] && g[e].stop && d(g[e]);
          else
            for (e in g) g[e] && g[e].stop && db.test(e) && d(g[e]);
          for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
          !b && c || r.dequeue(this, a)
        })
      },
      finish: function (a) {
        return a !== !1 && (a = a || "fx"), this.each(function () {
          var b, c = W.get(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = r.timers,
            g = d ? d.length : 0;
          for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
          for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
          delete c.finish
        })
      }
    }), r.each(["toggle", "show", "hide"], function (a, b) {
      var c = r.fn[b];
      r.fn[b] = function (a, d, e) {
        return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e)
      }
    }), r.each({
      slideDown: gb("show"),
      slideUp: gb("hide"),
      slideToggle: gb("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function (a, b) {
      r.fn[a] = function (a, c, d) {
        return this.animate(b, a, c, d)
      }
    }), r.timers = [], r.fx.tick = function () {
      var a, b = 0,
        c = r.timers;
      for (ab = r.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
      c.length || r.fx.stop(), ab = void 0
    }, r.fx.timer = function (a) {
      r.timers.push(a), r.fx.start()
    }, r.fx.interval = 13, r.fx.start = function () {
      bb || (bb = !0, eb())
    }, r.fx.stop = function () {
      bb = null
    }, r.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, r.fn.delay = function (b, c) {
      return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
        var e = a.setTimeout(c, b);
        d.stop = function () {
          a.clearTimeout(e)
        }
      })
    },
    function () {
      var a = d.createElement("input"),
        b = d.createElement("select"),
        c = b.appendChild(d.createElement("option"));
      a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value
    }();
  var lb, mb = r.expr.attrHandle;
  r.fn.extend({
    attr: function (a, b) {
      return T(this, r.attr, a, b, arguments.length > 1)
    },
    removeAttr: function (a) {
      return this.each(function () {
        r.removeAttr(this, a)
      })
    }
  }), r.extend({
    attr: function (a, b, c) {
      var d, e, f = a.nodeType;
      if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? lb : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b),
        null == d ? void 0 : d))
    },
    attrHooks: {
      type: {
        set: function (a, b) {
          if (!o.radioValue && "radio" === b && B(a, "input")) {
            var c = a.value;
            return a.setAttribute("type", b), c && (a.value = c), b
          }
        }
      }
    },
    removeAttr: function (a, b) {
      var c, d = 0,
        e = b && b.match(L);
      if (e && 1 === a.nodeType)
        while (c = e[d++]) a.removeAttribute(c)
    }
  }), lb = {
    set: function (a, b, c) {
      return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c
    }
  }, r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = mb[b] || r.find.attr;
    mb[b] = function (a, b, d) {
      var e, f, g = b.toLowerCase();
      return d || (f = mb[g], mb[g] = e, e = null != c(a, b, d) ? g : null, mb[g] = f), e
    }
  });
  var nb = /^(?:input|select|textarea|button)$/i,
    ob = /^(?:a|area)$/i;
  r.fn.extend({
    prop: function (a, b) {
      return T(this, r.prop, a, b, arguments.length > 1)
    },
    removeProp: function (a) {
      return this.each(function () {
        delete this[r.propFix[a] || a]
      })
    }
  }), r.extend({
    prop: function (a, b, c) {
      var d, e, f = a.nodeType;
      if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
    },
    propHooks: {
      tabIndex: {
        get: function (a) {
          var b = r.find.attr(a, "tabindex");
          return b ? parseInt(b, 10) : nb.test(a.nodeName) || ob.test(a.nodeName) && a.href ? 0 : -1
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), o.optSelected || (r.propHooks.selected = {
    get: function (a) {
      var b = a.parentNode;
      return b && b.parentNode && b.parentNode.selectedIndex, null
    },
    set: function (a) {
      var b = a.parentNode;
      b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
    }
  }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    r.propFix[this.toLowerCase()] = this
  });

  function pb(a) {
    var b = a.match(L) || [];
    return b.join(" ")
  }

  function qb(a) {
    return a.getAttribute && a.getAttribute("class") || ""
  }
  r.fn.extend({
    addClass: function (a) {
      var b, c, d, e, f, g, h, i = 0;
      if (r.isFunction(a)) return this.each(function (b) {
        r(this).addClass(a.call(this, b, qb(this)))
      });
      if ("string" == typeof a && a) {
        b = a.match(L) || [];
        while (c = this[i++])
          if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
            g = 0;
            while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            h = pb(d), e !== h && c.setAttribute("class", h)
          }
      }
      return this
    },
    removeClass: function (a) {
      var b, c, d, e, f, g, h, i = 0;
      if (r.isFunction(a)) return this.each(function (b) {
        r(this).removeClass(a.call(this, b, qb(this)))
      });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof a && a) {
        b = a.match(L) || [];
        while (c = this[i++])
          if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
            g = 0;
            while (f = b[g++])
              while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
            h = pb(d), e !== h && c.setAttribute("class", h)
          }
      }
      return this
    },
    toggleClass: function (a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function (c) {
        r(this).toggleClass(a.call(this, c, qb(this), b), b)
      }) : this.each(function () {
        var b, d, e, f;
        if ("string" === c) {
          d = 0, e = r(this), f = a.match(L) || [];
          while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
        } else void 0 !== a && "boolean" !== c || (b = qb(this), b && W.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : W.get(this, "__className__") || ""))
      })
    },
    hasClass: function (a) {
      var b, c, d = 0;
      b = " " + a + " ";
      while (c = this[d++])
        if (1 === c.nodeType && (" " + pb(qb(c)) + " ").indexOf(b) > -1) return !0;
      return !1
    }
  });
  var rb = /\r/g;
  r.fn.extend({
    val: function (a) {
      var b, c, d, e = this[0]; {
        if (arguments.length) return d = r.isFunction(a), this.each(function (c) {
          var e;
          1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = r.map(e, function (a) {
            return null == a ? "" : a + ""
          })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
        });
        if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
      }
    }
  }), r.extend({
    valHooks: {
      option: {
        get: function (a) {
          var b = r.find.attr(a, "value");
          return null != b ? b : pb(r.text(a))
        }
      },
      select: {
        get: function (a) {
          var b, c, d, e = a.options,
            f = a.selectedIndex,
            g = "select-one" === a.type,
            h = g ? null : [],
            i = g ? f + 1 : e.length;
          for (d = f < 0 ? i : g ? f : 0; d < i; d++)
            if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !B(c.parentNode, "optgroup"))) {
              if (b = r(c).val(), g) return b;
              h.push(b)
            } return h
        },
        set: function (a, b) {
          var c, d, e = a.options,
            f = r.makeArray(b),
            g = e.length;
          while (g--) d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
          return c || (a.selectedIndex = -1), f
        }
      }
    }
  }), r.each(["radio", "checkbox"], function () {
    r.valHooks[this] = {
      set: function (a, b) {
        if (Array.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1
      }
    }, o.checkOn || (r.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value
    })
  });
  var sb = /^(?:focusinfocus|focusoutblur)$/;
  r.extend(r.event, {
    trigger: function (b, c, e, f) {
      var g, h, i, j, k, m, n, o = [e || d],
        p = l.call(b, "type") ? b.type : b,
        q = l.call(b, "namespace") ? b.namespace.split(".") : [];
      if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !sb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
        if (!f && !n.noBubble && !r.isWindow(e)) {
          for (j = n.delegateType || p, sb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), i = h;
          i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a)
        }
        g = 0;
        while ((h = o[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : n.bindType || p, m = (W.get(h, "events") || {})[b.type] && W.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && U(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
        return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !U(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result
      }
    },
    simulate: function (a, b, c) {
      var d = r.extend(new r.Event, c, {
        type: a,
        isSimulated: !0
      });
      r.event.trigger(d, null, b)
    }
  }), r.fn.extend({
    trigger: function (a, b) {
      return this.each(function () {
        r.event.trigger(a, b, this)
      })
    },
    triggerHandler: function (a, b) {
      var c = this[0];
      if (c) return r.event.trigger(a, b, c, !0)
    }
  }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) {
    r.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
    }
  }), r.fn.extend({
    hover: function (a, b) {
      return this.mouseenter(a).mouseleave(b || a)
    }
  }), o.focusin = "onfocusin" in a, o.focusin || r.each({
    focus: "focusin",
    blur: "focusout"
  }, function (a, b) {
    var c = function (a) {
      r.event.simulate(b, a.target, r.event.fix(a))
    };
    r.event.special[b] = {
      setup: function () {
        var d = this.ownerDocument || this,
          e = W.access(d, b);
        e || d.addEventListener(a, c, !0), W.access(d, b, (e || 0) + 1)
      },
      teardown: function () {
        var d = this.ownerDocument || this,
          e = W.access(d, b) - 1;
        e ? W.access(d, b, e) : (d.removeEventListener(a, c, !0), W.remove(d, b))
      }
    }
  });
  var tb = a.location,
    ub = r.now(),
    vb = /\?/;
  r.parseXML = function (b) {
    var c;
    if (!b || "string" != typeof b) return null;
    try {
      c = (new a.DOMParser).parseFromString(b, "text/xml")
    } catch (d) {
      c = void 0
    }
    return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c
  };
  var wb = /\[\]$/,
    xb = /\r?\n/g,
    yb = /^(?:submit|button|image|reset|file)$/i,
    zb = /^(?:input|select|textarea|keygen)/i;

  function Ab(a, b, c, d) {
    var e;
    if (Array.isArray(b)) r.each(b, function (b, e) {
      c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
    });
    else if (c || "object" !== r.type(b)) d(a, b);
    else
      for (e in b) Ab(a + "[" + e + "]", b[e], c, d)
  }
  r.param = function (a, b) {
    var c, d = [],
      e = function (a, b) {
        var c = r.isFunction(b) ? b() : b;
        d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c)
      };
    if (Array.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function () {
      e(this.name, this.value)
    });
    else
      for (c in a) Ab(c, a[c], b, e);
    return d.join("&")
  }, r.fn.extend({
    serialize: function () {
      return r.param(this.serializeArray())
    },
    serializeArray: function () {
      return this.map(function () {
        var a = r.prop(this, "elements");
        return a ? r.makeArray(a) : this
      }).filter(function () {
        var a = this.type;
        return this.name && !r(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !ja.test(a))
      }).map(function (a, b) {
        var c = r(this).val();
        return null == c ? null : Array.isArray(c) ? r.map(c, function (a) {
          return {
            name: b.name,
            value: a.replace(xb, "\r\n")
          }
        }) : {
          name: b.name,
          value: c.replace(xb, "\r\n")
        }
      }).get()
    }
  });
  var Bb = /%20/g,
    Cb = /#.*$/,
    Db = /([?&])_=[^&]*/,
    Eb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Fb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Gb = /^(?:GET|HEAD)$/,
    Hb = /^\/\//,
    Ib = {},
    Jb = {},
    Kb = "*/".concat("*"),
    Lb = d.createElement("a");
  Lb.href = tb.href;

  function Mb(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");
      var d, e = 0,
        f = b.toLowerCase().match(L) || [];
      if (r.isFunction(c))
        while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
    }
  }

  function Nb(a, b, c, d) {
    var e = {},
      f = a === Jb;

    function g(h) {
      var i;
      return e[h] = !0, r.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);
        return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
      }), i
    }
    return g(b.dataTypes[0]) || !e["*"] && g("*")
  }

  function Ob(a, b) {
    var c, d, e = r.ajaxSettings.flatOptions || {};
    for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    return d && r.extend(!0, a, d), a
  }

  function Pb(a, b, c) {
    var d, e, f, g, h = a.contents,
      i = a.dataTypes;
    while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    if (d)
      for (e in h)
        if (h[e] && h[e].test(d)) {
          i.unshift(e);
          break
        } if (i[0] in c) f = i[0];
    else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;
          break
        }
        g || (g = e)
      }
      f = f || g
    }
    if (f) return f !== i[0] && i.unshift(f), c[f]
  }

  function Qb(a, b, c, d) {
    var e, f, g, h, i, j = {},
      k = a.dataTypes.slice();
    if (k[1])
      for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f)
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
        if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
      if (g = j[i + " " + f] || j["* " + f], !g)
        for (e in j)
          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
            break
          } if (g !== !0)
        if (g && a["throws"]) b = g(b);
        else try {
          b = g(b)
        } catch (l) {
          return {
            state: "parsererror",
            error: g ? l : "No conversion from " + i + " to " + f
          }
        }
    }
    return {
      state: "success",
      data: b
    }
  }
  r.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: tb.href,
      type: "GET",
      isLocal: Fb.test(tb.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Kb,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": r.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function (a, b) {
      return b ? Ob(Ob(a, r.ajaxSettings), b) : Ob(r.ajaxSettings, a)
    },
    ajaxPrefilter: Mb(Ib),
    ajaxTransport: Mb(Jb),
    ajax: function (b, c) {
      "object" == typeof b && (c = b, b = void 0), c = c || {};
      var e, f, g, h, i, j, k, l, m, n, o = r.ajaxSetup({}, c),
        p = o.context || o,
        q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
        s = r.Deferred(),
        t = r.Callbacks("once memory"),
        u = o.statusCode || {},
        v = {},
        w = {},
        x = "canceled",
        y = {
          readyState: 0,
          getResponseHeader: function (a) {
            var b;
            if (k) {
              if (!h) {
                h = {};
                while (b = Eb.exec(g)) h[b[1].toLowerCase()] = b[2]
              }
              b = h[a.toLowerCase()]
            }
            return null == b ? null : b
          },
          getAllResponseHeaders: function () {
            return k ? g : null
          },
          setRequestHeader: function (a, b) {
            return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this
          },
          overrideMimeType: function (a) {
            return null == k && (o.mimeType = a), this
          },
          statusCode: function (a) {
            var b;
            if (a)
              if (k) y.always(a[y.status]);
              else
                for (b in a) u[b] = [u[b], a[b]];
            return this
          },
          abort: function (a) {
            var b = a || x;
            return e && e.abort(b), A(0, b), this
          }
        };
      if (s.promise(y), o.url = ((b || o.url || tb.href) + "").replace(Hb, tb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(L) || [""], null == o.crossDomain) {
        j = d.createElement("a");
        try {
          j.href = o.url, j.href = j.href, o.crossDomain = Lb.protocol + "//" + Lb.host != j.protocol + "//" + j.host
        } catch (z) {
          o.crossDomain = !0
        }
      }
      if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Nb(Ib, o, c, y), k) return y;
      l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Gb.test(o.type), f = o.url.replace(Cb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Bb, "+")) : (n = o.url.slice(f.length), o.data && (f += (vb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Db, "$1"), n = (vb.test(f) ? "&" : "?") + "_=" + ub++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Kb + "; q=0.01" : "") : o.accepts["*"]);
      for (m in o.headers) y.setRequestHeader(m, o.headers[m]);
      if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();
      if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Nb(Jb, o, c, y)) {
        if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;
        o.async && o.timeout > 0 && (i = a.setTimeout(function () {
          y.abort("timeout")
        }, o.timeout));
        try {
          k = !1, e.send(v, A)
        } catch (z) {
          if (k) throw z;
          A(-1, z)
        }
      } else A(-1, "No Transport");

      function A(b, c, d, h) {
        var j, m, n, v, w, x = c;
        k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Pb(o, y, d)), v = Qb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")))
      }
      return y
    },
    getJSON: function (a, b, c) {
      return r.get(a, b, c, "json")
    },
    getScript: function (a, b) {
      return r.get(a, void 0, b, "script")
    }
  }), r.each(["get", "post"], function (a, b) {
    r[b] = function (a, c, d, e) {
      return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({
        url: a,
        type: b,
        dataType: e,
        data: c,
        success: d
      }, r.isPlainObject(a) && a))
    }
  }), r._evalUrl = function (a) {
    return r.ajax({
      url: a,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      "throws": !0
    })
  }, r.fn.extend({
    wrapAll: function (a) {
      var b;
      return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
        var a = this;
        while (a.firstElementChild) a = a.firstElementChild;
        return a
      }).append(this)), this
    },
    wrapInner: function (a) {
      return r.isFunction(a) ? this.each(function (b) {
        r(this).wrapInner(a.call(this, b))
      }) : this.each(function () {
        var b = r(this),
          c = b.contents();
        c.length ? c.wrapAll(a) : b.append(a)
      })
    },
    wrap: function (a) {
      var b = r.isFunction(a);
      return this.each(function (c) {
        r(this).wrapAll(b ? a.call(this, c) : a)
      })
    },
    unwrap: function (a) {
      return this.parent(a).not("body").each(function () {
        r(this).replaceWith(this.childNodes)
      }), this
    }
  }), r.expr.pseudos.hidden = function (a) {
    return !r.expr.pseudos.visible(a)
  }, r.expr.pseudos.visible = function (a) {
    return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
  }, r.ajaxSettings.xhr = function () {
    try {
      return new a.XMLHttpRequest
    } catch (b) {}
  };
  var Rb = {
      0: 200,
      1223: 204
    },
    Sb = r.ajaxSettings.xhr();
  o.cors = !!Sb && "withCredentials" in Sb, o.ajax = Sb = !!Sb, r.ajaxTransport(function (b) {
    var c, d;
    if (o.cors || Sb && !b.crossDomain) return {
      send: function (e, f) {
        var g, h = b.xhr();
        if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
          for (g in b.xhrFields) h[g] = b.xhrFields[g];
        b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
        for (g in e) h.setRequestHeader(g, e[g]);
        c = function (a) {
          return function () {
            c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Rb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
              binary: h.response
            } : {
              text: h.responseText
            }, h.getAllResponseHeaders()))
          }
        }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
          4 === h.readyState && a.setTimeout(function () {
            c && d()
          })
        }, c = c("abort");
        try {
          h.send(b.hasContent && b.data || null)
        } catch (i) {
          if (c) throw i
        }
      },
      abort: function () {
        c && c()
      }
    }
  }), r.ajaxPrefilter(function (a) {
    a.crossDomain && (a.contents.script = !1)
  }), r.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function (a) {
        return r.globalEval(a), a
      }
    }
  }), r.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
  }), r.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b, c;
      return {
        send: function (e, f) {
          b = r("<script>").prop({
            charset: a.scriptCharset,
            src: a.url
          }).on("load error", c = function (a) {
            b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type)
          }), d.head.appendChild(b[0])
        },
        abort: function () {
          c && c()
        }
      }
    }
  });
  var Tb = [],
    Ub = /(=)\?(?=&|$)|\?\?/;
  r.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var a = Tb.pop() || r.expando + "_" + ub++;
      return this[a] = !0, a
    }
  }), r.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e, f, g, h = b.jsonp !== !1 && (Ub.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Ub.test(b.data) && "data");
    if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Ub, "$1" + e) : b.jsonp !== !1 && (b.url += (vb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || r.error(e + " was not called"), g[0]
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments
    }, d.always(function () {
      void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Tb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0
    }), "script"
  }), o.createHTMLDocument = function () {
    var a = d.implementation.createHTMLDocument("").body;
    return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length
  }(), r.parseHTML = function (a, b, c) {
    if ("string" != typeof a) return [];
    "boolean" == typeof b && (c = b, b = !1);
    var e, f, g;
    return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = C.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = qa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes))
  }, r.fn.load = function (a, b, c) {
    var d, e, f, g = this,
      h = a.indexOf(" ");
    return h > -1 && (d = pb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && r.ajax({
      url: a,
      type: e || "GET",
      dataType: "html",
      data: b
    }).done(function (a) {
      f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a)
    }).always(c && function (a, b) {
      g.each(function () {
        c.apply(this, f || [a.responseText, b, a])
      })
    }), this
  }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    r.fn[b] = function (a) {
      return this.on(b, a)
    }
  }), r.expr.pseudos.animated = function (a) {
    return r.grep(r.timers, function (b) {
      return a === b.elem
    }).length
  }, r.offset = {
    setOffset: function (a, b, c) {
      var d, e, f, g, h, i, j, k = r.css(a, "position"),
        l = r(a),
        m = {};
      "static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
    }
  }, r.fn.extend({
    offset: function (a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        r.offset.setOffset(this, a, b)
      });
      var b, c, d, e, f = this[0];
      if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), b = f.ownerDocument, c = b.documentElement, e = b.defaultView, {
        top: d.top + e.pageYOffset - c.clientTop,
        left: d.left + e.pageXOffset - c.clientLeft
      }) : {
        top: 0,
        left: 0
      }
    },
    position: function () {
      if (this[0]) {
        var a, b, c = this[0],
          d = {
            top: 0,
            left: 0
          };
        return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), B(a[0], "html") || (d = a.offset()), d = {
          top: d.top + r.css(a[0], "borderTopWidth", !0),
          left: d.left + r.css(a[0], "borderLeftWidth", !0)
        }), {
          top: b.top - d.top - r.css(c, "marginTop", !0),
          left: b.left - d.left - r.css(c, "marginLeft", !0)
        }
      }
    },
    offsetParent: function () {
      return this.map(function () {
        var a = this.offsetParent;
        while (a && "static" === r.css(a, "position")) a = a.offsetParent;
        return a || ra
      })
    }
  }), r.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (a, b) {
    var c = "pageYOffset" === b;
    r.fn[a] = function (d) {
      return T(this, function (a, d, e) {
        var f;
        return r.isWindow(a) ? f = a : 9 === a.nodeType && (f = a.defaultView), void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
      }, a, d, arguments.length)
    }
  }), r.each(["top", "left"], function (a, b) {
    r.cssHooks[b] = Pa(o.pixelPosition, function (a, c) {
      if (c) return c = Oa(a, b), Ma.test(c) ? r(a).position()[b] + "px" : c
    })
  }), r.each({
    Height: "height",
    Width: "width"
  }, function (a, b) {
    r.each({
      padding: "inner" + a,
      content: b,
      "": "outer" + a
    }, function (c, d) {
      r.fn[d] = function (e, f) {
        var g = arguments.length && (c || "boolean" != typeof e),
          h = c || (e === !0 || f === !0 ? "margin" : "border");
        return T(this, function (b, c, e) {
          var f;
          return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h)
        }, b, g ? e : void 0, g)
      }
    })
  }), r.fn.extend({
    bind: function (a, b, c) {
      return this.on(a, null, b, c)
    },
    unbind: function (a, b) {
      return this.off(a, null, b)
    },
    delegate: function (a, b, c, d) {
      return this.on(b, a, c, d)
    },
    undelegate: function (a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
    }
  }), r.holdReady = function (a) {
    a ? r.readyWait++ : r.ready(!0)
  }, r.isArray = Array.isArray, r.parseJSON = JSON.parse, r.nodeName = B, "function" == typeof define && define.amd && define("jquery", [], function () {
    return r
  });
  var Vb = a.jQuery,
    Wb = a.$;
  return r.noConflict = function (b) {
    return a.$ === r && (a.$ = Wb), b && a.jQuery === r && (a.jQuery = Vb), r
  }, b || (a.jQuery = a.$ = r), r
});


! function (t, e, n, o) {
  "use strict";

  function i(t) {
    var e = t.currentTarget,
      o = t.data ? t.data.options : {},
      i = o.selector ? n(o.selector) : t.data ? t.data.items : [],
      a = n(e).attr("data-fancybox") || "",
      s = 0,
      r = n.fancybox.getInstance();
    t.preventDefault(), r && r.current.opts.$orig.is(e) || (a ? (i = i.length ? i.filter('[data-fancybox="' + a + '"]') : n('[data-fancybox="' + a + '"]'), s = i.index(e), s < 0 && (s = 0)) : i = [e], n.fancybox.open(i, o, s))
  }
  if (n) {
    if (n.fn.fancybox) return void n.error("fancyBox already initialized");
    var a = {
        loop: !1,
        margin: [44, 0],
        gutter: 50,
        keyboard: !0,
        arrows: !0,
        infobar: !1,
        toolbar: !0,
        buttons: ["slideShow", "fullScreen", "thumbs", "close"],
        idleTime: 4,
        smallBtn: "auto",
        protect: !1,
        modal: !1,
        image: {
          preload: "auto"
        },
        ajax: {
          settings: {
            data: {
              fancybox: !0
            }
          }
        },
        iframe: {
          tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
          preload: !0,
          css: {},
          attr: {
            scrolling: "auto"
          }
        },
        animationEffect: "zoom",
        animationDuration: 366,
        zoomOpacity: "auto",
        transitionEffect: "fade",
        transitionDuration: 366,
        slideClass: "",
        baseClass: "",
        baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><button data-fancybox-prev title="{{PREV}}" class="fancybox-button fancybox-button--left"></button><div class="fancybox-infobar__body"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><button data-fancybox-next title="{{NEXT}}" class="fancybox-button fancybox-button--right"></button></div><div class="fancybox-toolbar">{{BUTTONS}}</div><div class="fancybox-navigation"><button data-fancybox-prev title="{{PREV}}" class="fancybox-arrow fancybox-arrow--left" /><button data-fancybox-next title="{{NEXT}}" class="fancybox-arrow fancybox-arrow--right" /></div><div class="fancybox-stage"></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div></div>',
        spinnerTpl: '<div class="fancybox-loading"></div>',
        errorTpl: '<div class="fancybox-error"><p>{{ERROR}}<p></div>',
        btnTpl: {
          slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"></button>',
          fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"></button>',
          thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"></button>',
          close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="Закрыть"></button>',
          smallBtn: '<button data-fancybox-close class="fancybox-close-small" title="Закрыть"></button>'
        },
        parentEl: "body",
        autoFocus: !0,
        backFocus: !0,
        trapFocus: !0,
        fullScreen: {
          autoStart: !1
        },
        touch: {
          vertical: !0,
          momentum: !0
        },
        hash: null,
        media: {},
        slideShow: {
          autoStart: !1,
          speed: 4e3
        },
        thumbs: {
          autoStart: !1,
          hideOnClose: !0
        },
        onInit: n.noop,
        beforeLoad: n.noop,
        afterLoad: n.noop,
        beforeShow: n.noop,
        afterShow: n.noop,
        beforeClose: n.noop,
        afterClose: n.noop,
        onActivate: n.noop,
        onDeactivate: n.noop,
        clickContent: function (t, e) {
          return "image" === t.type && "zoom"
        },
        clickSlide: "close",
        clickOutside: "close",
        dblclickContent: !1,
        dblclickSlide: !1,
        dblclickOutside: !1,
        mobile: {
          clickContent: function (t, e) {
            return "image" === t.type && "toggleControls"
          },
          clickSlide: function (t, e) {
            return "image" === t.type ? "toggleControls" : "close"
          },
          dblclickContent: function (t, e) {
            return "image" === t.type && "zoom"
          },
          dblclickSlide: function (t, e) {
            return "image" === t.type && "zoom"
          }
        },
        lang: "en",
        i18n: {
          en: {
            CLOSE: "Close",
            NEXT: "Next",
            PREV: "Previous",
            ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
            PLAY_START: "Start slideshow",
            PLAY_STOP: "Pause slideshow",
            FULL_SCREEN: "Full screen",
            THUMBS: "Thumbnails"
          },
          de: {
            CLOSE: "Schliessen",
            NEXT: "Weiter",
            PREV: "Zurück",
            ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",
            PLAY_START: "Diaschau starten",
            PLAY_STOP: "Diaschau beenden",
            FULL_SCREEN: "Vollbild",
            THUMBS: "Vorschaubilder"
          }
        }
      },
      s = n(t),
      r = n(e),
      c = 0,
      l = function (t) {
        return t && t.hasOwnProperty && t instanceof n
      },
      u = function () {
        return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function (e) {
          return t.setTimeout(e, 1e3 / 60)
        }
      }(),
      d = function () {
        var t, n = e.createElement("fakeelement"),
          i = {
            transition: "transitionend",
            OTransition: "oTransitionEnd",
            MozTransition: "transitionend",
            WebkitTransition: "webkitTransitionEnd"
          };
        for (t in i)
          if (n.style[t] !== o) return i[t]
      }(),
      f = function (t) {
        return t && t.length && t[0].offsetHeight
      },
      h = function (t, o, i) {
        var s = this;
        s.opts = n.extend(!0, {
          index: i
        }, a, o || {}), o && n.isArray(o.buttons) && (s.opts.buttons = o.buttons), s.id = s.opts.id || ++c, s.group = [], s.currIndex = parseInt(s.opts.index, 10) || 0, s.prevIndex = null, s.prevPos = null, s.currPos = 0, s.firstRun = null, s.createGroup(t), s.group.length && (s.$lastFocus = n(e.activeElement).blur(), s.slides = {}, s.init(t))
      };
    n.extend(h.prototype, {
      init: function () {
        var t, e, o, i = this,
          a = i.group[i.currIndex].opts;
        i.scrollTop = r.scrollTop(), i.scrollLeft = r.scrollLeft(), n.fancybox.getInstance() || n.fancybox.isMobile || "hidden" === n("body").css("overflow") || (t = n("body").width(), n("html").addClass("fancybox-enabled"), t = n("body").width() - t, t > 1 && n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar, .fancybox-enabled body { margin-right: ' + t + "px; }</style>")), o = "", n.each(a.buttons, function (t, e) {
          o += a.btnTpl[e] || ""
        }), e = n(i.translate(i, a.baseTpl.replace("{{BUTTONS}}", o))).addClass("fancybox-is-hidden").attr("id", "fancybox-container-" + i.id).addClass(a.baseClass).data("FancyBox", i).prependTo(a.parentEl), i.$refs = {
          container: e
        }, ["bg", "inner", "infobar", "toolbar", "stage", "caption"].forEach(function (t) {
          i.$refs[t] = e.find(".fancybox-" + t)
        }), (!a.arrows || i.group.length < 2) && e.find(".fancybox-navigation").remove(), a.infobar || i.$refs.infobar.remove(), a.toolbar || i.$refs.toolbar.remove(), i.trigger("onInit"), i.activate(), i.jumpTo(i.currIndex)
      },
      translate: function (t, e) {
        var n = t.opts.i18n[t.opts.lang];
        return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
          var i = n[e];
          return i === o ? t : i
        })
      },
      createGroup: function (t) {
        var e = this,
          i = n.makeArray(t);
        n.each(i, function (t, i) {
          var a, s, r, c, l = {},
            u = {},
            d = [];
          n.isPlainObject(i) ? (l = i, u = i.opts || i) : "object" === n.type(i) && n(i).length ? (a = n(i), d = a.data(), u = "options" in d ? d.options : {}, u = "object" === n.type(u) ? u : {}, l.src = "src" in d ? d.src : u.src || a.attr("href"), ["width", "height", "thumb", "type", "filter"].forEach(function (t) {
            t in d && (u[t] = d[t])
          }), "srcset" in d && (u.image = {
            srcset: d.srcset
          }), u.$orig = a, l.type || l.src || (l.type = "inline", l.src = i)) : l = {
            type: "html",
            src: i + ""
          }, l.opts = n.extend(!0, {}, e.opts, u), n.fancybox.isMobile && (l.opts = n.extend(!0, {}, l.opts, l.opts.mobile)), s = l.type || l.opts.type, r = l.src || "", !s && r && (r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? s = "image" : r.match(/\.(pdf)((\?|#).*)?$/i) ? s = "pdf" : "#" === r.charAt(0) && (s = "inline")), l.type = s, l.index = e.group.length, l.opts.$orig && !l.opts.$orig.length && delete l.opts.$orig, !l.opts.$thumb && l.opts.$orig && (l.opts.$thumb = l.opts.$orig.find("img:first")), l.opts.$thumb && !l.opts.$thumb.length && delete l.opts.$thumb, "function" === n.type(l.opts.caption) ? l.opts.caption = l.opts.caption.apply(i, [e, l]) : "caption" in d && (l.opts.caption = d.caption), l.opts.caption = l.opts.caption === o ? "" : l.opts.caption + "", "ajax" === s && (c = r.split(/\s+/, 2), c.length > 1 && (l.src = c.shift(), l.opts.filter = c.shift())), "auto" == l.opts.smallBtn && (n.inArray(s, ["html", "inline", "ajax"]) > -1 ? (l.opts.toolbar = !1, l.opts.smallBtn = !0) : l.opts.smallBtn = !1), "pdf" === s && (l.type = "iframe", l.opts.iframe.preload = !1), l.opts.modal && (l.opts = n.extend(!0, l.opts, {
            infobar: 0,
            toolbar: 0,
            smallBtn: 0,
            keyboard: 0,
            slideShow: 0,
            fullScreen: 0,
            thumbs: 0,
            touch: 0,
            clickContent: !1,
            clickSlide: !1,
            clickOutside: !1,
            dblclickContent: !1,
            dblclickSlide: !1,
            dblclickOutside: !1
          })), e.group.push(l)
        })
      },
      addEvents: function () {
        var o = this;
        o.removeEvents(), o.$refs.container.on("click.fb-close", "[data-fancybox-close]", function (t) {
          t.stopPropagation(), t.preventDefault(), o.close(t)
        }).on("click.fb-prev touchend.fb-prev", "[data-fancybox-prev]", function (t) {
          t.stopPropagation(), t.preventDefault(), o.previous()
        }).on("click.fb-next touchend.fb-next", "[data-fancybox-next]", function (t) {
          t.stopPropagation(), t.preventDefault(), o.next()
        }), s.on("orientationchange.fb resize.fb", function (t) {
          t && t.originalEvent && "resize" === t.originalEvent.type ? u(function () {
            o.update()
          }) : (o.$refs.stage.hide(), setTimeout(function () {
            o.$refs.stage.show(), o.update()
          }, 500))
        }), r.on("focusin.fb", function (t) {
          var i = n.fancybox ? n.fancybox.getInstance() : null;
          i.isClosing || !i.current || !i.current.opts.trapFocus || n(t.target).hasClass("fancybox-container") || n(t.target).is(e) || i && "fixed" !== n(t.target).css("position") && !i.$refs.container.has(t.target).length && (t.stopPropagation(), i.focus(), s.scrollTop(o.scrollTop).scrollLeft(o.scrollLeft))
        }), r.on("keydown.fb", function (t) {
          var e = o.current,
            i = t.keyCode || t.which;
          if (e && e.opts.keyboard && !n(t.target).is("input") && !n(t.target).is("textarea")) return 8 === i || 27 === i ? (t.preventDefault(), void o.close(t)) : 37 === i || 38 === i ? (t.preventDefault(), void o.previous()) : 39 === i || 40 === i ? (t.preventDefault(), void o.next()) : void o.trigger("afterKeydown", t, i)
        }), o.group[o.currIndex].opts.idleTime && (o.idleSecondsCounter = 0, r.on("mousemove.fb-idle mouseenter.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function () {
          o.idleSecondsCounter = 0, o.isIdle && o.showControls(), o.isIdle = !1
        }), o.idleInterval = t.setInterval(function () {
          o.idleSecondsCounter++, o.idleSecondsCounter >= o.group[o.currIndex].opts.idleTime && (o.isIdle = !0, o.idleSecondsCounter = 0, o.hideControls())
        }, 1e3))
      },
      removeEvents: function () {
        var e = this;
        s.off("orientationchange.fb resize.fb"), r.off("focusin.fb keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), e.idleInterval && (t.clearInterval(e.idleInterval), e.idleInterval = null)
      },
      previous: function (t) {
        return this.jumpTo(this.currPos - 1, t)
      },
      next: function (t) {
        return this.jumpTo(this.currPos + 1, t)
      },
      jumpTo: function (t, e, i) {
        var a, s, r, c, l, u, d, h = this,
          p = h.group.length;
        if (!(h.isSliding || h.isClosing || h.isAnimating && h.firstRun)) {
          if (t = parseInt(t, 10), s = h.current ? h.current.opts.loop : h.opts.loop, !s && (t < 0 || t >= p)) return !1;
          if (a = h.firstRun = null === h.firstRun, !(p < 2 && !a && h.isSliding)) {
            if (c = h.current, h.prevIndex = h.currIndex, h.prevPos = h.currPos, r = h.createSlide(t), p > 1 && ((s || r.index > 0) && h.createSlide(t - 1), (s || r.index < p - 1) && h.createSlide(t + 1)), h.current = r, h.currIndex = r.index, h.currPos = r.pos, h.trigger("beforeShow", a), h.updateControls(), u = n.fancybox.getTranslate(r.$slide), r.isMoved = (0 !== u.left || 0 !== u.top) && !r.$slide.hasClass("fancybox-animated"), r.forcedDuration = o, n.isNumeric(e) ? r.forcedDuration = e : e = r.opts[a ? "animationDuration" : "transitionDuration"], e = parseInt(e, 10), a) return r.opts.animationEffect && e && h.$refs.container.css("transition-duration", e + "ms"), h.$refs.container.removeClass("fancybox-is-hidden"), f(h.$refs.container), h.$refs.container.addClass("fancybox-is-open"), r.$slide.addClass("fancybox-slide--current"), h.loadSlide(r), void h.preload();
            n.each(h.slides, function (t, e) {
              n.fancybox.stop(e.$slide)
            }), r.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"), r.isMoved ? (l = Math.round(r.$slide.width()), n.each(h.slides, function (t, o) {
              var i = o.pos - r.pos;
              n.fancybox.animate(o.$slide, {
                top: 0,
                left: i * l + i * o.opts.gutter
              }, e, function () {
                o.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"), o.pos === h.currPos && (r.isMoved = !1, h.complete())
              })
            })) : h.$refs.stage.children().removeAttr("style"), r.isLoaded ? h.revealContent(r) : h.loadSlide(r), h.preload(), c.pos !== r.pos && (d = "fancybox-slide--" + (c.pos > r.pos ? "next" : "previous"), c.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"), c.isComplete = !1, e && (r.isMoved || r.opts.transitionEffect) && (r.isMoved ? c.$slide.addClass(d) : (d = "fancybox-animated " + d + " fancybox-fx-" + r.opts.transitionEffect, n.fancybox.animate(c.$slide, d, e, function () {
              c.$slide.removeClass(d).removeAttr("style")
            }))))
          }
        }
      },
      createSlide: function (t) {
        var e, o, i = this;
        return o = t % i.group.length, o = o < 0 ? i.group.length + o : o, !i.slides[t] && i.group[o] && (e = n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage), i.slides[t] = n.extend(!0, {}, i.group[o], {
          pos: t,
          $slide: e,
          isLoaded: !1
        }), i.updateSlide(i.slides[t])), i.slides[t]
      },
      scaleToActual: function (t, e, i) {
        var a, s, r, c, l, u = this,
          d = u.current,
          f = d.$content,
          h = parseInt(d.$slide.width(), 10),
          p = parseInt(d.$slide.height(), 10),
          g = d.width,
          b = d.height;
        "image" != d.type || d.hasError || !f || u.isAnimating || (n.fancybox.stop(f), u.isAnimating = !0, t = t === o ? .5 * h : t, e = e === o ? .5 * p : e, a = n.fancybox.getTranslate(f), c = g / a.width, l = b / a.height, s = .5 * h - .5 * g, r = .5 * p - .5 * b, g > h && (s = a.left * c - (t * c - t), s > 0 && (s = 0), s < h - g && (s = h - g)), b > p && (r = a.top * l - (e * l - e), r > 0 && (r = 0), r < p - b && (r = p - b)), u.updateCursor(g, b), n.fancybox.animate(f, {
          top: r,
          left: s,
          scaleX: c,
          scaleY: l
        }, i || 330, function () {
          u.isAnimating = !1
        }), u.SlideShow && u.SlideShow.isActive && u.SlideShow.stop())
      },
      scaleToFit: function (t) {
        var e, o = this,
          i = o.current,
          a = i.$content;
        "image" != i.type || i.hasError || !a || o.isAnimating || (n.fancybox.stop(a), o.isAnimating = !0, e = o.getFitPos(i), o.updateCursor(e.width, e.height), n.fancybox.animate(a, {
          top: e.top,
          left: e.left,
          scaleX: e.width / a.width(),
          scaleY: e.height / a.height()
        }, t || 330, function () {
          o.isAnimating = !1
        }))
      },
      getFitPos: function (t) {
        var e, o, i, a, r, c = this,
          l = t.$content,
          u = t.width,
          d = t.height,
          f = t.opts.margin;
        return !(!l || !l.length || !u && !d) && ("number" === n.type(f) && (f = [f, f]), 2 == f.length && (f = [f[0], f[1], f[0], f[1]]), s.width() < 800 && (f = [0, 0, 0, 0]), e = parseInt(c.$refs.stage.width(), 10) - (f[1] + f[3]), o = parseInt(c.$refs.stage.height(), 10) - (f[0] + f[2]), i = Math.min(1, e / u, o / d), a = Math.floor(i * u), r = Math.floor(i * d), {
          top: Math.floor(.5 * (o - r)) + f[0],
          left: Math.floor(.5 * (e - a)) + f[3],
          width: a,
          height: r
        })
      },
      update: function () {
        var t = this;
        n.each(t.slides, function (e, n) {
          t.updateSlide(n)
        })
      },
      updateSlide: function (t) {
        var e = this,
          o = t.$content;
        o && (t.width || t.height) && (n.fancybox.stop(o), n.fancybox.setTranslate(o, e.getFitPos(t)), t.pos === e.currPos && e.updateCursor()), t.$slide.trigger("refresh"), e.trigger("onUpdate", t)
      },
      updateCursor: function (t, e) {
        var n, i = this,
          a = i.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");
        i.current && !i.isClosing && (i.isZoomable() ? (a.addClass("fancybox-is-zoomable"), n = t !== o && e !== o ? t < i.current.width && e < i.current.height : i.isScaledDown(), n ? a.addClass("fancybox-can-zoomIn") : i.current.opts.touch ? a.addClass("fancybox-can-drag") : a.addClass("fancybox-can-zoomOut")) : i.current.opts.touch && a.addClass("fancybox-can-drag"))
      },
      isZoomable: function () {
        var t, e = this,
          o = e.current;
        if (o && !e.isClosing) return !!("image" === o.type && o.isLoaded && !o.hasError && ("zoom" === o.opts.clickContent || n.isFunction(o.opts.clickContent) && "zoom" === o.opts.clickContent(o)) && (t = e.getFitPos(o), o.width > t.width || o.height > t.height))
      },
      isScaledDown: function () {
        var t = this,
          e = t.current,
          o = e.$content,
          i = !1;
        return o && (i = n.fancybox.getTranslate(o), i = i.width < e.width || i.height < e.height), i
      },
      canPan: function () {
        var t = this,
          e = t.current,
          n = e.$content,
          o = !1;
        return n && (o = t.getFitPos(e), o = Math.abs(n.width() - o.width) > 1 || Math.abs(n.height() - o.height) > 1), o
      },
      loadSlide: function (t) {
        var e, o, i, a = this;
        if (!t.isLoading && !t.isLoaded) {
          switch (t.isLoading = !0, a.trigger("beforeLoad", t), e = t.type, o = t.$slide, o.off("refresh").trigger("onReset").addClass("fancybox-slide--" + (e || "unknown")).addClass(t.opts.slideClass), e) {
            case "image":
              a.setImage(t);
              break;
            case "iframe":
              a.setIframe(t);
              break;
            case "html":
              a.setContent(t, t.src || t.content);
              break;
            case "inline":
              n(t.src).length ? a.setContent(t, n(t.src)) : a.setError(t);
              break;
            case "ajax":
              a.showLoading(t), i = n.ajax(n.extend({}, t.opts.ajax.settings, {
                url: t.src,
                success: function (e, n) {
                  "success" === n && a.setContent(t, e)
                },
                error: function (e, n) {
                  e && "abort" !== n && a.setError(t)
                }
              })), o.one("onReset", function () {
                i.abort()
              });
              break;
            default:
              a.setError(t)
          }
          return !0
        }
      },
      setImage: function (e) {
        var o, i, a, s, r = this,
          c = e.opts.image.srcset;
        if (c) {
          a = t.devicePixelRatio || 1, s = t.innerWidth * a, i = c.split(",").map(function (t) {
            var e = {};
            return t.trim().split(/\s+/).forEach(function (t, n) {
              var o = parseInt(t.substring(0, t.length - 1), 10);
              return 0 === n ? e.url = t : void(o && (e.value = o, e.postfix = t[t.length - 1]))
            }), e
          }), i.sort(function (t, e) {
            return t.value - e.value
          });
          for (var l = 0; l < i.length; l++) {
            var u = i[l];
            if ("w" === u.postfix && u.value >= s || "x" === u.postfix && u.value >= a) {
              o = u;
              break
            }
          }!o && i.length && (o = i[i.length - 1]), o && (e.src = o.url, e.width && e.height && "w" == o.postfix && (e.height = e.width / e.height * o.value, e.width = o.value))
        }
        e.$content = n('<div class="fancybox-image-wrap"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide), e.opts.preload !== !1 && e.opts.width && e.opts.height && (e.opts.thumb || e.opts.$thumb) ? (e.width = e.opts.width, e.height = e.opts.height, e.$ghost = n("<img />").one("error", function () {
          n(this).remove(), e.$ghost = null, r.setBigImage(e)
        }).one("load", function () {
          r.afterLoad(e), r.setBigImage(e)
        }).addClass("fancybox-image").appendTo(e.$content).attr("src", e.opts.thumb || e.opts.$thumb.attr("src"))) : r.setBigImage(e)
      },
      setBigImage: function (t) {
        var e = this,
          o = n("<img />");
        t.$image = o.one("error", function () {
          e.setError(t)
        }).one("load", function () {
          clearTimeout(t.timouts), t.timouts = null, e.isClosing || (t.width = this.naturalWidth, t.height = this.naturalHeight, t.opts.image.srcset && o.attr("sizes", "100vw").attr("srcset", t.opts.image.srcset), e.hideLoading(t), t.$ghost ? t.timouts = setTimeout(function () {
            t.timouts = null, t.$ghost.hide()
          }, Math.min(300, Math.max(1e3, t.height / 1600))) : e.afterLoad(t))
        }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (o[0].complete || "complete" == o[0].readyState) && o[0].naturalWidth && o[0].naturalHeight ? o.trigger("load") : o[0].error ? o.trigger("error") : t.timouts = setTimeout(function () {
          o[0].complete || t.hasError || e.showLoading(t)
        }, 100)
      },
      setIframe: function (t) {
        var e, i = this,
          a = t.opts.iframe,
          s = t.$slide;
        t.$content = n('<div class="fancybox-content' + (a.preload ? " fancybox-is-hidden" : "") + '"></div>').css(a.css).appendTo(s), e = n(a.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(a.attr).appendTo(t.$content), a.preload ? (i.showLoading(t), e.on("load.fb error.fb", function (e) {
          this.isReady = 1, t.$slide.trigger("refresh"), i.afterLoad(t)
        }), s.on("refresh.fb", function () {
          var n, i, s, r = t.$content,
            c = a.css.width,
            l = a.css.height;
          if (1 === e[0].isReady) {
            try {
              i = e.contents(), s = i.find("body")
            } catch (t) {}
            s && s.length && (c === o && (n = e[0].contentWindow.document.documentElement.scrollWidth, c = Math.ceil(s.outerWidth(!0) + (r.width() - n)), c += r.outerWidth() - r.innerWidth()), l === o && (l = Math.ceil(s.outerHeight(!0)), l += r.outerHeight() - r.innerHeight()), c && r.width(c), l && r.height(l)), r.removeClass("fancybox-is-hidden")
          }
        })) : this.afterLoad(t), e.attr("src", t.src), t.opts.smallBtn === !0 && t.$content.prepend(i.translate(t, t.opts.btnTpl.smallBtn)), s.one("onReset", function () {
          try {
            n(this).find("iframe").hide().attr("src", "//about:blank")
          } catch (t) {}
          n(this).empty(), t.isLoaded = !1
        })
      },
      setContent: function (t, e) {
        var o = this;
        o.isClosing || (o.hideLoading(t), t.$slide.empty(), l(e) && e.parent().length ? (e.parent(".fancybox-slide--inline").trigger("onReset"), t.$placeholder = n("<div></div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === n.type(e) && (e = n("<div>").append(n.trim(e)).contents(), 3 === e[0].nodeType && (e = n("<div>").html(e))), t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", function () {
          t.$placeholder && (t.$placeholder.after(e.hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (n(this).empty(), t.isLoaded = !1)
        }), t.$content = n(e).appendTo(t.$slide), t.opts.smallBtn && !t.$smallBtn && (t.$smallBtn = n(o.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content.filter("div").first())), this.afterLoad(t))
      },
      setError: function (t) {
        t.hasError = !0, t.$slide.removeClass("fancybox-slide--" + t.type), this.setContent(t, this.translate(t, t.opts.errorTpl))
      },
      showLoading: function (t) {
        var e = this;
        t = t || e.current, t && !t.$spinner && (t.$spinner = n(e.opts.spinnerTpl).appendTo(t.$slide))
      },
      hideLoading: function (t) {
        var e = this;
        t = t || e.current, t && t.$spinner && (t.$spinner.remove(), delete t.$spinner)
      },
      afterLoad: function (t) {
        var e = this;
        e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger("afterLoad", t), e.hideLoading(t), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function (t) {
          return 2 == t.button && t.preventDefault(), !0
        }), "image" === t.type && n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), e.revealContent(t))
      },
      revealContent: function (t) {
        var e, i, a, s, r, c = this,
          l = t.$slide,
          u = !1;
        return e = t.opts[c.firstRun ? "animationEffect" : "transitionEffect"], a = t.opts[c.firstRun ? "animationDuration" : "transitionDuration"], a = parseInt(t.forcedDuration === o ? a : t.forcedDuration, 10), !t.isMoved && t.pos === c.currPos && a || (e = !1), "zoom" !== e || t.pos === c.currPos && a && "image" === t.type && !t.hasError && (u = c.getThumbPos(t)) || (e = "fade"), "zoom" === e ? (r = c.getFitPos(t), r.scaleX = r.width / u.width, r.scaleY = r.height / u.height, delete r.width, delete r.height, s = t.opts.zoomOpacity, "auto" == s && (s = Math.abs(t.width / t.height - u.width / u.height) > .1), s && (u.opacity = .1, r.opacity = 1), n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), u), f(t.$content), void n.fancybox.animate(t.$content, r, a, function () {
          c.complete()
        })) : (c.updateSlide(t), e ? (n.fancybox.stop(l), i = "fancybox-animated fancybox-slide--" + (t.pos > c.prevPos ? "next" : "previous") + " fancybox-fx-" + e, l.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(i), t.$content.removeClass("fancybox-is-hidden"), f(l), void n.fancybox.animate(l, "fancybox-slide--current", a, function (e) {
          l.removeClass(i).removeAttr("style"), t.pos === c.currPos && c.complete()
        }, !0)) : (f(l), t.$content.removeClass("fancybox-is-hidden"), void(t.pos === c.currPos && c.complete())))
      },
      getThumbPos: function (o) {
        var i, a = this,
          s = !1,
          r = function (e) {
            for (var o, i = e[0], a = i.getBoundingClientRect(), s = []; null !== i.parentElement;) "hidden" !== n(i.parentElement).css("overflow") && "auto" !== n(i.parentElement).css("overflow") || s.push(i.parentElement.getBoundingClientRect()), i = i.parentElement;
            return o = s.every(function (t) {
              var e = Math.min(a.right, t.right) - Math.max(a.left, t.left),
                n = Math.min(a.bottom, t.bottom) - Math.max(a.top, t.top);
              return e > 0 && n > 0
            }), o && a.bottom > 0 && a.right > 0 && a.left < n(t).width() && a.top < n(t).height()
          },
          c = o.opts.$thumb,
          l = c ? c.offset() : 0;
        return l && c[0].ownerDocument === e && r(c) && (i = a.$refs.stage.offset(), s = {
          top: l.top - i.top + parseFloat(c.css("border-top-width") || 0),
          left: l.left - i.left + parseFloat(c.css("border-left-width") || 0),
          width: c.width(),
          height: c.height(),
          scaleX: 1,
          scaleY: 1
        }), s
      },
      complete: function () {
        var t = this,
          o = t.current,
          i = {};
        o.isMoved || !o.isLoaded || o.isComplete || (o.isComplete = !0, o.$slide.siblings().trigger("onReset"), f(o.$slide), o.$slide.addClass("fancybox-slide--complete"), n.each(t.slides, function (e, o) {
          o.pos >= t.currPos - 1 && o.pos <= t.currPos + 1 ? i[o.pos] = o : o && (n.fancybox.stop(o.$slide), o.$slide.off().remove())
        }), t.slides = i, t.updateCursor(), t.trigger("afterShow"), (n(e.activeElement).is("[disabled]") || o.opts.autoFocus && "image" != o.type && "iframe" !== o.type) && t.focus())
      },
      preload: function () {
        var t, e, n = this;
        n.group.length < 2 || (t = n.slides[n.currPos + 1], e = n.slides[n.currPos - 1], t && "image" === t.type && n.loadSlide(t), e && "image" === e.type && n.loadSlide(e))
      },
      focus: function () {
        var t, e = this.current;
        this.isClosing || (e && e.isComplete && (t = e.$slide.find("input[autofocus]:enabled:visible:first"), t.length || (t = e.$slide.find("button,:input,[tabindex],a").filter(":enabled:visible:first"))), t = t && t.length ? t : this.$refs.container, t.focus())
      },
      activate: function () {
        var t = this;
        n(".fancybox-container").each(function () {
          var e = n(this).data("FancyBox");
          e && e.uid !== t.uid && !e.isClosing && e.trigger("onDeactivate")
        }), t.current && (t.$refs.container.index() > 0 && t.$refs.container.prependTo(e.body), t.updateControls()), t.trigger("onActivate"), t.addEvents()
      },
      close: function (t, e) {
        var o, i, a, s, r, c, l = this,
          f = l.current,
          h = function () {
            l.cleanUp(t)
          };
        return !l.isClosing && (l.isClosing = !0, l.trigger("beforeClose", t) === !1 ? (l.isClosing = !1, u(function () {
          l.update()
        }), !1) : (l.removeEvents(), f.timouts && clearTimeout(f.timouts), a = f.$content, o = f.opts.animationEffect, i = n.isNumeric(e) ? e : o ? f.opts.animationDuration : 0, f.$slide.off(d).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), f.$slide.siblings().trigger("onReset").remove(), i && l.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"), l.hideLoading(f), l.hideControls(), l.updateCursor(), "zoom" !== o || t !== !0 && a && i && "image" === f.type && !f.hasError && (c = l.getThumbPos(f)) || (o = "fade"), "zoom" === o ? (n.fancybox.stop(a), r = n.fancybox.getTranslate(a), r.width = r.width * r.scaleX, r.height = r.height * r.scaleY, s = f.opts.zoomOpacity, "auto" == s && (s = Math.abs(f.width / f.height - c.width / c.height) > .1), s && (c.opacity = 0), r.scaleX = r.width / c.width, r.scaleY = r.height / c.height, r.width = c.width, r.height = c.height, n.fancybox.setTranslate(f.$content, r), n.fancybox.animate(f.$content, c, i, h), !0) : (o && i ? t === !0 ? setTimeout(h, i) : n.fancybox.animate(f.$slide.removeClass("fancybox-slide--current"), "fancybox-animated fancybox-slide--previous fancybox-fx-" + o, i, h) : h(), !0)))
      },
      cleanUp: function (t) {
        var e, o = this;
        o.current.$slide.trigger("onReset"), o.$refs.container.empty().remove(), o.trigger("afterClose", t), o.$lastFocus && o.current.opts.backFocus && o.$lastFocus.focus(), o.current = null, e = n.fancybox.getInstance(), e ? e.activate() : (s.scrollTop(o.scrollTop).scrollLeft(o.scrollLeft), n("html").removeClass("fancybox-enabled"), n("#fancybox-style-noscroll").remove())
      },
      trigger: function (t, e) {
        var o, i = Array.prototype.slice.call(arguments, 1),
          a = this,
          s = e && e.opts ? e : a.current;
        return s ? i.unshift(s) : s = a, i.unshift(a), n.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, i)), o === !1 ? o : void("afterClose" === t ? r.trigger(t + ".fb", i) : a.$refs.container.trigger(t + ".fb", i))
      },
      updateControls: function (t) {
        var e = this,
          o = e.current,
          i = o.index,
          a = o.opts,
          s = a.caption,
          r = e.$refs.caption;
        o.$slide.trigger("refresh"), e.$caption = s && s.length ? r.html(s) : null, e.isHiddenControls || e.showControls(), n("[data-fancybox-count]").html(e.group.length), n("[data-fancybox-index]").html(i + 1), n("[data-fancybox-prev]").prop("disabled", !a.loop && i <= 0), n("[data-fancybox-next]").prop("disabled", !a.loop && i >= e.group.length - 1)
      },
      hideControls: function () {
        this.isHiddenControls = !0, this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav")
      },
      showControls: function () {
        var t = this,
          e = t.current ? t.current.opts : t.opts,
          n = t.$refs.container;
        t.isHiddenControls = !1, t.idleSecondsCounter = 0, n.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1)).toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1)).toggleClass("fancybox-is-modal", !!e.modal), t.$caption ? n.addClass("fancybox-show-caption ") : n.removeClass("fancybox-show-caption")
      },
      toggleControls: function () {
        this.isHiddenControls ? this.showControls() : this.hideControls()
      }
    }), n.fancybox = {
      version: "3.1.28",
      defaults: a,
      getInstance: function (t) {
        var e = n('.fancybox-container:not(".fancybox-is-closing"):first').data("FancyBox"),
          o = Array.prototype.slice.call(arguments, 1);
        return e instanceof h && ("string" === n.type(t) ? e[t].apply(e, o) : "function" === n.type(t) && t.apply(e, o), e)
      },
      open: function (t, e, n) {
        return new h(t, e, n)
      },
      close: function (t) {
        var e = this.getInstance();
        e && (e.close(), t === !0 && this.close())
      },
      destroy: function () {
        this.close(!0), r.off("click.fb-start")
      },
      isMobile: e.createTouch !== o && /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),
      use3d: function () {
        var n = e.createElement("div");
        return t.getComputedStyle && t.getComputedStyle(n).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11)
      }(),
      getTranslate: function (t) {
        var e;
        if (!t || !t.length) return !1;
        if (e = t.eq(0).css("transform"), e && e.indexOf("matrix") !== -1 ? (e = e.split("(")[1], e = e.split(")")[0], e = e.split(",")) : e = [], e.length) e = e.length > 10 ? [e[13], e[12], e[0], e[5]] : [e[5], e[4], e[0], e[3]], e = e.map(parseFloat);
        else {
          e = [0, 0, 1, 1];
          var n = /\.*translate\((.*)px,(.*)px\)/i,
            o = n.exec(t.eq(0).attr("style"));
          o && (e[0] = parseFloat(o[2]), e[1] = parseFloat(o[1]))
        }
        return {
          top: e[0],
          left: e[1],
          scaleX: e[2],
          scaleY: e[3],
          opacity: parseFloat(t.css("opacity")),
          width: t.width(),
          height: t.height()
        }
      },
      setTranslate: function (t, e) {
        var n = "",
          i = {};
        if (t && e) return e.left === o && e.top === o || (n = (e.left === o ? t.position().left : e.left) + "px, " + (e.top === o ? t.position().top : e.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), e.scaleX !== o && e.scaleY !== o && (n = (n.length ? n + " " : "") + "scale(" + e.scaleX + ", " + e.scaleY + ")"), n.length && (i.transform = n), e.opacity !== o && (i.opacity = e.opacity), e.width !== o && (i.width = e.width), e.height !== o && (i.height = e.height), t.css(i)
      },
      animate: function (t, e, i, a, s) {
        var r = d || "transitionend";
        n.isFunction(i) && (a = i, i = null), n.isPlainObject(e) || t.removeAttr("style"), t.on(r, function (i) {
          (!i || !i.originalEvent || t.is(i.originalEvent.target) && "z-index" != i.originalEvent.propertyName) && (t.off(r), n.isPlainObject(e) ? e.scaleX !== o && e.scaleY !== o && (t.css("transition-duration", "0ms"), e.width = Math.round(t.width() * e.scaleX), e.height = Math.round(t.height() * e.scaleY), e.scaleX = 1, e.scaleY = 1, n.fancybox.setTranslate(t, e)) : s !== !0 && t.removeClass(e), n.isFunction(a) && a(i))
        }), n.isNumeric(i) && t.css("transition-duration", i + "ms"), n.isPlainObject(e) ? n.fancybox.setTranslate(t, e) : t.addClass(e), t.data("timer", setTimeout(function () {
          t.trigger("transitionend")
        }, i + 16))
      },
      stop: function (t) {
        clearTimeout(t.data("timer")), t.off(d)
      }
    }, n.fn.fancybox = function (t) {
      var e;
      return t = t || {}, e = t.selector || !1, e ? n("body").off("click.fb-start", e).on("click.fb-start", e, {
        options: t
      }, i) : this.off("click.fb-start").on("click.fb-start", {
        items: this,
        options: t
      }, i), this
    }, r.on("click.fb-start", "[data-fancybox]", i)
  }
}(window, document, window.jQuery || jQuery),
function (t) {
  "use strict";
  var e = function (e, n, o) {
      if (e) return o = o || "", "object" === t.type(o) && (o = t.param(o, !0)), t.each(n, function (t, n) {
        e = e.replace("$" + t, n || "")
      }), o.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + o), e
    },
    n = {
      youtube: {
        matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
        params: {
          autoplay: 1,
          autohide: 1,
          fs: 1,
          rel: 0,
          hd: 1,
          wmode: "transparent",
          enablejsapi: 1,
          html5: 1
        },
        paramPlace: 8,
        type: "iframe",
        url: "//www.youtube.com/embed/$4",
        thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
      },
      vimeo: {
        matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
        params: {
          autoplay: 1,
          hd: 1,
          show_title: 1,
          show_byline: 1,
          show_portrait: 0,
          fullscreen: 1,
          api: 1
        },
        paramPlace: 3,
        type: "iframe",
        url: "//player.vimeo.com/video/$2"
      },
      metacafe: {
        matcher: /metacafe.com\/watch\/(\d+)\/(.*)?/,
        type: "iframe",
        url: "//www.metacafe.com/embed/$1/?ap=1"
      },
      dailymotion: {
        matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
        params: {
          additionalInfos: 0,
          autoStart: 1
        },
        type: "iframe",
        url: "//www.dailymotion.com/embed/video/$1"
      },
      vine: {
        matcher: /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,
        type: "iframe",
        url: "//vine.co/v/$1/embed/simple"
      },
      instagram: {
        matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
        type: "image",
        url: "//$1/p/$2/media/?size=l"
      },
      gmap_place: {
        matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
        type: "iframe",
        url: function (t) {
          return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12]) + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
        }
      },
      gmap_search: {
        matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
        type: "iframe",
        url: function (t) {
          return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
        }
      }
    };
  t(document).on("onInit.fb", function (o, i) {
    t.each(i.group, function (o, i) {
      var a, s, r, c, l, u, d, f = i.src || "",
        h = !1;
      i.type || (a = t.extend(!0, {}, n, i.opts.media), t.each(a, function (n, o) {
        if (r = f.match(o.matcher), u = {}, d = n, r) {
          if (h = o.type, o.paramPlace && r[o.paramPlace]) {
            l = r[o.paramPlace], "?" == l[0] && (l = l.substring(1)), l = l.split("&");
            for (var a = 0; a < l.length; ++a) {
              var p = l[a].split("=", 2);
              2 == p.length && (u[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " ")))
            }
          }
          return c = t.extend(!0, {}, o.params, i.opts[n], u), f = "function" === t.type(o.url) ? o.url.call(this, r, c, i) : e(o.url, r, c), s = "function" === t.type(o.thumb) ? o.thumb.call(this, r, c, i) : e(o.thumb, r), "vimeo" === d && (f = f.replace("&%23", "#")), !1
        }
      }), h ? (i.src = f, i.type = h, i.opts.thumb || i.opts.$thumb && i.opts.$thumb.length || (i.opts.thumb = s), "iframe" === h && (t.extend(!0, i.opts, {
        iframe: {
          preload: !1,
          attr: {
            scrolling: "no"
          }
        }
      }), i.contentProvider = d, i.opts.slideClass += " fancybox-slide--" + ("gmap_place" == d || "gmap_search" == d ? "map" : "video"))) : i.type = "image")
    })
  })
}(window.jQuery),
function (t, e, n) {
  "use strict";
  var o = function () {
      return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function (e) {
        return t.setTimeout(e, 1e3 / 60)
      }
    }(),
    i = function () {
      return t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function (e) {
        t.clearTimeout(e)
      }
    }(),
    a = function (e) {
      var n = [];
      e = e.originalEvent || e || t.e, e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];
      for (var o in e) e[o].pageX ? n.push({
        x: e[o].pageX,
        y: e[o].pageY
      }) : e[o].clientX && n.push({
        x: e[o].clientX,
        y: e[o].clientY
      });
      return n
    },
    s = function (t, e, n) {
      return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
    },
    r = function (t) {
      if (t.is("a,button,input,select,textarea,label") || n.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;
      for (var e = 0, o = t[0].attributes, i = o.length; e < i; e++)
        if ("data-fancybox-" === o[e].nodeName.substr(0, 14)) return !0;
      return !1
    },
    c = function (e) {
      var n = t.getComputedStyle(e)["overflow-y"],
        o = t.getComputedStyle(e)["overflow-x"],
        i = ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight,
        a = ("scroll" === o || "auto" === o) && e.scrollWidth > e.clientWidth;
      return i || a
    },
    l = function (t) {
      for (var e = !1;;) {
        if (e = c(t.get(0))) break;
        if (t = t.parent(), !t.length || t.hasClass("fancybox-stage") || t.is("body")) break
      }
      return e
    },
    u = function (t) {
      var e = this;
      e.instance = t, e.$bg = t.$refs.bg, e.$stage = t.$refs.stage, e.$container = t.$refs.container, e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(e, "ontouchstart"))
    };
  u.prototype.destroy = function () {
    this.$container.off(".fb.touch")
  }, u.prototype.ontouchstart = function (o) {
    var i = this,
      c = n(o.target),
      u = i.instance,
      d = u.current,
      f = d.$content,
      h = "touchstart" == o.type;
    if (h && i.$container.off("mousedown.fb.touch"), !d || i.instance.isAnimating || i.instance.isClosing) return o.stopPropagation(), void o.preventDefault();
    if ((!o.originalEvent || 2 != o.originalEvent.button) && c.length && !r(c) && !r(c.parent()) && !(o.originalEvent.clientX > c[0].clientWidth + c.offset().left) && (i.startPoints = a(o), i.startPoints && !(i.startPoints.length > 1 && u.isSliding))) {
      if (i.$target = c, i.$content = f, i.canTap = !0, n(e).off(".fb.touch"), n(e).on(h ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(i, "ontouchend")), n(e).on(h ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(i, "ontouchmove")), !u.current.opts.touch && !u.canPan() || !c.is(i.$stage) && !i.$stage.find(c).length) return void(c.is("img") && o.preventDefault());
      o.stopPropagation(), n.fancybox.isMobile && (l(i.$target) || l(i.$target.parent())) || o.preventDefault(), i.canvasWidth = Math.round(d.$slide[0].clientWidth), i.canvasHeight = Math.round(d.$slide[0].clientHeight), i.startTime = (new Date).getTime(), i.distanceX = i.distanceY = i.distance = 0, i.isPanning = !1, i.isSwiping = !1, i.isZooming = !1, i.sliderStartPos = i.sliderLastPos || {
        top: 0,
        left: 0
      }, i.contentStartPos = n.fancybox.getTranslate(i.$content), i.contentLastPos = null, 1 !== i.startPoints.length || i.isZooming || (i.canTap = !u.isSliding, "image" === d.type && (i.contentStartPos.width > i.canvasWidth + 1 || i.contentStartPos.height > i.canvasHeight + 1) ? (n.fancybox.stop(i.$content), i.$content.css("transition-duration", "0ms"), i.isPanning = !0) : i.isSwiping = !0, i.$container.addClass("fancybox-controls--isGrabbing")), 2 !== i.startPoints.length || u.isAnimating || d.hasError || "image" !== d.type || !d.isLoaded && !d.$ghost || (i.isZooming = !0, i.isSwiping = !1, i.isPanning = !1, n.fancybox.stop(i.$content), i.$content.css("transition-duration", "0ms"), i.centerPointStartX = .5 * (i.startPoints[0].x + i.startPoints[1].x) - n(t).scrollLeft(), i.centerPointStartY = .5 * (i.startPoints[0].y + i.startPoints[1].y) - n(t).scrollTop(), i.percentageOfImageAtPinchPointX = (i.centerPointStartX - i.contentStartPos.left) / i.contentStartPos.width, i.percentageOfImageAtPinchPointY = (i.centerPointStartY - i.contentStartPos.top) / i.contentStartPos.height, i.startDistanceBetweenFingers = s(i.startPoints[0], i.startPoints[1]))
    }
  }, u.prototype.ontouchmove = function (t) {
    var e = this;
    if (e.newPoints = a(t), n.fancybox.isMobile && (l(e.$target) || l(e.$target.parent()))) return t.stopPropagation(), void(e.canTap = !1);
    if ((e.instance.current.opts.touch || e.instance.canPan()) && e.newPoints && e.newPoints.length && (e.distanceX = s(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = s(e.newPoints[0], e.startPoints[0], "y"), e.distance = s(e.newPoints[0], e.startPoints[0]), e.distance > 0)) {
      if (!e.$target.is(e.$stage) && !e.$stage.find(e.$target).length) return;
      t.stopPropagation(), t.preventDefault(), e.isSwiping ? e.onSwipe() : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()
    }
  }, u.prototype.onSwipe = function () {
    var e, a = this,
      s = a.isSwiping,
      r = a.sliderStartPos.left || 0;
    s === !0 ? Math.abs(a.distance) > 10 && (a.canTap = !1, a.instance.group.length < 2 && a.instance.opts.touch.vertical ? a.isSwiping = "y" : a.instance.isSliding || a.instance.opts.touch.vertical === !1 || "auto" === a.instance.opts.touch.vertical && n(t).width() > 800 ? a.isSwiping = "x" : (e = Math.abs(180 * Math.atan2(a.distanceY, a.distanceX) / Math.PI), a.isSwiping = e > 45 && e < 135 ? "y" : "x"), a.instance.isSliding = a.isSwiping, a.startPoints = a.newPoints, n.each(a.instance.slides, function (t, e) {
      n.fancybox.stop(e.$slide), e.$slide.css("transition-duration", "0ms"), e.inTransition = !1, e.pos === a.instance.current.pos && (a.sliderStartPos.left = n.fancybox.getTranslate(e.$slide).left)
    }), a.instance.SlideShow && a.instance.SlideShow.isActive && a.instance.SlideShow.stop()) : ("x" == s && (a.distanceX > 0 && (a.instance.group.length < 2 || 0 === a.instance.current.index && !a.instance.current.opts.loop) ? r += Math.pow(a.distanceX, .8) : a.distanceX < 0 && (a.instance.group.length < 2 || a.instance.current.index === a.instance.group.length - 1 && !a.instance.current.opts.loop) ? r -= Math.pow(-a.distanceX, .8) : r += a.distanceX), a.sliderLastPos = {
      top: "x" == s ? 0 : a.sliderStartPos.top + a.distanceY,
      left: r
    }, a.requestId && (i(a.requestId), a.requestId = null), a.requestId = o(function () {
      a.sliderLastPos && (n.each(a.instance.slides, function (t, e) {
        var o = e.pos - a.instance.currPos;
        n.fancybox.setTranslate(e.$slide, {
          top: a.sliderLastPos.top,
          left: a.sliderLastPos.left + o * a.canvasWidth + o * e.opts.gutter
        })
      }), a.$container.addClass("fancybox-is-sliding"))
    }))
  }, u.prototype.onPan = function () {
    var t, e, a, s = this;
    s.canTap = !1, t = s.contentStartPos.width > s.canvasWidth ? s.contentStartPos.left + s.distanceX : s.contentStartPos.left, e = s.contentStartPos.top + s.distanceY, a = s.limitMovement(t, e, s.contentStartPos.width, s.contentStartPos.height), a.scaleX = s.contentStartPos.scaleX, a.scaleY = s.contentStartPos.scaleY, s.contentLastPos = a, s.requestId && (i(s.requestId), s.requestId = null), s.requestId = o(function () {
      n.fancybox.setTranslate(s.$content, s.contentLastPos)
    })
  }, u.prototype.limitMovement = function (t, e, n, o) {
    var i, a, s, r, c = this,
      l = c.canvasWidth,
      u = c.canvasHeight,
      d = c.contentStartPos.left,
      f = c.contentStartPos.top,
      h = c.distanceX,
      p = c.distanceY;
    return i = Math.max(0, .5 * l - .5 * n), a = Math.max(0, .5 * u - .5 * o), s = Math.min(l - n, .5 * l - .5 * n), r = Math.min(u - o, .5 * u - .5 * o), n > l && (h > 0 && t > i && (t = i - 1 + Math.pow(-i + d + h, .8) || 0), h < 0 && t < s && (t = s + 1 - Math.pow(s - d - h, .8) || 0)), o > u && (p > 0 && e > a && (e = a - 1 + Math.pow(-a + f + p, .8) || 0), p < 0 && e < r && (e = r + 1 - Math.pow(r - f - p, .8) || 0)), {
      top: e,
      left: t
    }
  }, u.prototype.limitPosition = function (t, e, n, o) {
    var i = this,
      a = i.canvasWidth,
      s = i.canvasHeight;
    return n > a ? (t = t > 0 ? 0 : t, t = t < a - n ? a - n : t) : t = Math.max(0, a / 2 - n / 2), o > s ? (e = e > 0 ? 0 : e, e = e < s - o ? s - o : e) : e = Math.max(0, s / 2 - o / 2), {
      top: e,
      left: t
    }
  }, u.prototype.onZoom = function () {
    var e = this,
      a = e.contentStartPos.width,
      r = e.contentStartPos.height,
      c = e.contentStartPos.left,
      l = e.contentStartPos.top,
      u = s(e.newPoints[0], e.newPoints[1]),
      d = u / e.startDistanceBetweenFingers,
      f = Math.floor(a * d),
      h = Math.floor(r * d),
      p = (a - f) * e.percentageOfImageAtPinchPointX,
      g = (r - h) * e.percentageOfImageAtPinchPointY,
      b = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
      m = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
      y = b - e.centerPointStartX,
      v = m - e.centerPointStartY,
      x = c + (p + y),
      w = l + (g + v),
      $ = {
        top: w,
        left: x,
        scaleX: e.contentStartPos.scaleX * d,
        scaleY: e.contentStartPos.scaleY * d
      };
    e.canTap = !1, e.newWidth = f, e.newHeight = h, e.contentLastPos = $, e.requestId && (i(e.requestId), e.requestId = null), e.requestId = o(function () {
      n.fancybox.setTranslate(e.$content, e.contentLastPos)
    })
  }, u.prototype.ontouchend = function (t) {
    var o = this,
      s = Math.max((new Date).getTime() - o.startTime, 1),
      r = o.isSwiping,
      c = o.isPanning,
      l = o.isZooming;
    return o.endPoints = a(t), o.$container.removeClass("fancybox-controls--isGrabbing"), n(e).off(".fb.touch"), o.requestId && (i(o.requestId), o.requestId = null), o.isSwiping = !1, o.isPanning = !1, o.isZooming = !1, o.canTap ? o.onTap(t) : (o.speed = 366, o.velocityX = o.distanceX / s * .5, o.velocityY = o.distanceY / s * .5, o.speedX = Math.max(.5 * o.speed, Math.min(1.5 * o.speed, 1 / Math.abs(o.velocityX) * o.speed)), void(c ? o.endPanning() : l ? o.endZooming() : o.endSwiping(r)))
  }, u.prototype.endSwiping = function (t) {
    var e = this,
      o = !1;
    e.instance.isSliding = !1, e.sliderLastPos = null, "y" == t && Math.abs(e.distanceY) > 50 ? (n.fancybox.animate(e.instance.current.$slide, {
      top: e.sliderStartPos.top + e.distanceY + 150 * e.velocityY,
      opacity: 0
    }, 150), o = e.instance.close(!0, 300)) : "x" == t && e.distanceX > 50 && e.instance.group.length > 1 ? o = e.instance.previous(e.speedX) : "x" == t && e.distanceX < -50 && e.instance.group.length > 1 && (o = e.instance.next(e.speedX)), o !== !1 || "x" != t && "y" != t || e.instance.jumpTo(e.instance.current.index, 150), e.$container.removeClass("fancybox-is-sliding")
  }, u.prototype.endPanning = function () {
    var t, e, o, i = this;
    i.contentLastPos && (i.instance.current.opts.touch.momentum === !1 ? (t = i.contentLastPos.left, e = i.contentLastPos.top) : (t = i.contentLastPos.left + i.velocityX * i.speed, e = i.contentLastPos.top + i.velocityY * i.speed), o = i.limitPosition(t, e, i.contentStartPos.width, i.contentStartPos.height), o.width = i.contentStartPos.width, o.height = i.contentStartPos.height, n.fancybox.animate(i.$content, o, 330))
  }, u.prototype.endZooming = function () {
    var t, e, o, i, a = this,
      s = a.instance.current,
      r = a.newWidth,
      c = a.newHeight;
    a.contentLastPos && (t = a.contentLastPos.left, e = a.contentLastPos.top, i = {
      top: e,
      left: t,
      width: r,
      height: c,
      scaleX: 1,
      scaleY: 1
    }, n.fancybox.setTranslate(a.$content, i), r < a.canvasWidth && c < a.canvasHeight ? a.instance.scaleToFit(150) : r > s.width || c > s.height ? a.instance.scaleToActual(a.centerPointStartX, a.centerPointStartY, 150) : (o = a.limitPosition(t, e, r, c), n.fancybox.setTranslate(a.content, n.fancybox.getTranslate(a.$content)), n.fancybox.animate(a.$content, o, 150)))
  }, u.prototype.onTap = function (t) {
    var e, o = this,
      i = n(t.target),
      s = o.instance,
      r = s.current,
      c = t && a(t) || o.startPoints,
      l = c[0] ? c[0].x - o.$stage.offset().left : 0,
      u = c[0] ? c[0].y - o.$stage.offset().top : 0,
      d = function (e) {
        var i = r.opts[e];
        if (n.isFunction(i) && (i = i.apply(s, [r, t])), i) switch (i) {
          case "close":
            s.close(o.startEvent);
            break;
          case "toggleControls":
            s.toggleControls(!0);
            break;
          case "next":
            s.next();
            break;
          case "nextOrClose":
            s.group.length > 1 ? s.next() : s.close(o.startEvent);
            break;
          case "zoom":
            "image" == r.type && (r.isLoaded || r.$ghost) && (s.canPan() ? s.scaleToFit() : s.isScaledDown() ? s.scaleToActual(l, u) : s.group.length < 2 && s.close(o.startEvent))
        }
      };
    if (!(t.originalEvent && 2 == t.originalEvent.button || s.isSliding || l > i[0].clientWidth + i.offset().left)) {
      if (i.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) e = "Outside";
      else if (i.is(".fancybox-slide")) e = "Slide";
      else {
        if (!s.current.$content || !s.current.$content.has(t.target).length) return;
        e = "Content"
      }
      if (o.tapped) {
        if (clearTimeout(o.tapped), o.tapped = null, Math.abs(l - o.tapX) > 50 || Math.abs(u - o.tapY) > 50 || s.isSliding) return this;
        d("dblclick" + e)
      } else o.tapX = l, o.tapY = u, r.opts["dblclick" + e] && r.opts["dblclick" + e] !== r.opts["click" + e] ? o.tapped = setTimeout(function () {
        o.tapped = null, d("click" + e)
      }, 300) : d("click" + e);
      return this
    }
  }, n(e).on("onActivate.fb", function (t, e) {
    e && !e.Guestures && (e.Guestures = new u(e))
  }), n(e).on("beforeClose.fb", function (t, e) {
    e && e.Guestures && e.Guestures.destroy()
  })
}(window, document, window.jQuery),
function (t, e) {
  "use strict";
  var n = function (t) {
    this.instance = t, this.init()
  };
  e.extend(n.prototype, {
    timer: null,
    isActive: !1,
    $button: null,
    speed: 3e3,
    init: function () {
      var t = this;
      t.$button = t.instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
        t.toggle()
      }), (t.instance.group.length < 2 || !t.instance.group[t.instance.currIndex].opts.slideShow) && t.$button.hide()
    },
    set: function () {
      var t = this;
      t.instance && t.instance.current && (t.instance.current.opts.loop || t.instance.currIndex < t.instance.group.length - 1) ? t.timer = setTimeout(function () {
        t.instance.next()
      }, t.instance.current.opts.slideShow.speed || t.speed) : (t.stop(), t.instance.idleSecondsCounter = 0, t.instance.showControls())
    },
    clear: function () {
      var t = this;
      clearTimeout(t.timer), t.timer = null
    },
    start: function () {
      var t = this,
        e = t.instance.current;
      t.instance && e && (e.opts.loop || e.index < t.instance.group.length - 1) && (t.isActive = !0, t.$button.attr("title", e.opts.i18n[e.opts.lang].PLAY_STOP).addClass("fancybox-button--pause"), e.isComplete && t.set())
    },
    stop: function () {
      var t = this,
        e = t.instance.current;
      t.clear(), t.$button.attr("title", e.opts.i18n[e.opts.lang].PLAY_START).removeClass("fancybox-button--pause"), t.isActive = !1
    },
    toggle: function () {
      var t = this;
      t.isActive ? t.stop() : t.start()
    }
  }), e(t).on({
    "onInit.fb": function (t, e) {
      e && !e.SlideShow && (e.SlideShow = new n(e))
    },
    "beforeShow.fb": function (t, e, n, o) {
      var i = e && e.SlideShow;
      o ? i && n.opts.slideShow.autoStart && i.start() : i && i.isActive && i.clear()
    },
    "afterShow.fb": function (t, e, n) {
      var o = e && e.SlideShow;
      o && o.isActive && o.set()
    },
    "afterKeydown.fb": function (n, o, i, a, s) {
      var r = o && o.SlideShow;
      !r || !i.opts.slideShow || 80 !== s && 32 !== s || e(t.activeElement).is("button,a,input") || (a.preventDefault(), r.toggle())
    },
    "beforeClose.fb onDeactivate.fb": function (t, e) {
      var n = e && e.SlideShow;
      n && n.stop()
    }
  }), e(t).on("visibilitychange", function () {
    var n = e.fancybox.getInstance(),
      o = n && n.SlideShow;
    o && o.isActive && (t.hidden ? o.clear() : o.set())
  })
}(document, window.jQuery),
function (t, e) {
  "use strict";
  var n = function () {
    var e, n, o, i = [
        ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
        ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
        ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
        ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
        ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
      ],
      a = {};
    for (n = 0; n < i.length; n++)
      if (e = i[n], e && e[1] in t) {
        for (o = 0; o < e.length; o++) a[i[0][o]] = e[o];
        return a
      } return !1
  }();
  if (!n) return void(e && e.fancybox && (e.fancybox.defaults.btnTpl.fullScreen = !1));
  var o = {
    request: function (e) {
      e = e || t.documentElement, e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
    },
    exit: function () {
      t[n.exitFullscreen]()
    },
    toggle: function (e) {
      e = e || t.documentElement, this.isFullscreen() ? this.exit() : this.request(e)
    },
    isFullscreen: function () {
      return Boolean(t[n.fullscreenElement])
    },
    enabled: function () {
      return Boolean(t[n.fullscreenEnabled])
    }
  };
  e(t).on({
    "onInit.fb": function (t, e) {
      var n, i = e.$refs.toolbar.find("[data-fancybox-fullscreen]");
      e && !e.FullScreen && e.group[e.currIndex].opts.fullScreen ? (n = e.$refs.container, n.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (t) {
        t.stopPropagation(), t.preventDefault(), o.toggle(n[0])
      }), e.opts.fullScreen && e.opts.fullScreen.autoStart === !0 && o.request(n[0]), e.FullScreen = o) : i.hide()
    },
    "afterKeydown.fb": function (t, e, n, o, i) {
      e && e.FullScreen && 70 === i && (o.preventDefault(), e.FullScreen.toggle(e.$refs.container[0]))
    },
    "beforeClose.fb": function (t) {
      t && t.FullScreen && o.exit()
    }
  }), e(t).on(n.fullscreenchange, function () {
    var t = e.fancybox.getInstance();
    t.current && "image" === t.current.type && t.isAnimating && (t.current.$content.css("transition", "none"), t.isAnimating = !1, t.update(!0, !0, 0)), t.trigger("onFullscreenChange", o.isFullscreen())
  })
}(document, window.jQuery),
function (t, e) {
  "use strict";
  var n = function (t) {
    this.instance = t, this.init()
  };
  e.extend(n.prototype, {
    $button: null,
    $grid: null,
    $list: null,
    isVisible: !1,
    init: function () {
      var t = this,
        e = t.instance.group[0],
        n = t.instance.group[1];
      t.$button = t.instance.$refs.toolbar.find("[data-fancybox-thumbs]"), t.instance.group.length > 1 && t.instance.group[t.instance.currIndex].opts.thumbs && ("image" == e.type || e.opts.thumb || e.opts.$thumb) && ("image" == n.type || n.opts.thumb || n.opts.$thumb) ? (t.$button.on("click", function () {
        t.toggle()
      }), t.isActive = !0) : (t.$button.hide(), t.isActive = !1)
    },
    create: function () {
      var t, n, o = this.instance;
      this.$grid = e('<div class="fancybox-thumbs"></div>').appendTo(o.$refs.container), t = "<ul>", e.each(o.group, function (e, o) {
        n = o.opts.thumb || (o.opts.$thumb ? o.opts.$thumb.attr("src") : null), n || "image" !== o.type || (n = o.src), n && n.length && (t += '<li data-index="' + e + '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' + n + '" /></li>')
      }), t += "</ul>", this.$list = e(t).appendTo(this.$grid).on("click", "li", function () {
        o.jumpTo(e(this).data("index"))
      }), this.$list.find("img").hide().one("load", function () {
        var t, n, o, i, a = e(this).parent().removeClass("fancybox-thumbs-loading"),
          s = a.outerWidth(),
          r = a.outerHeight();
        t = this.naturalWidth || this.width, n = this.naturalHeight || this.height, o = t / s, i = n / r, o >= 1 && i >= 1 && (o > i ? (t /= i, n = r) : (t = s, n /= o)), e(this).css({
          width: Math.floor(t),
          height: Math.floor(n),
          "margin-top": Math.min(0, Math.floor(.3 * r - .3 * n)),
          "margin-left": Math.min(0, Math.floor(.5 * s - .5 * t))
        }).show()
      }).each(function () {
        this.src = e(this).data("src")
      })
    },
    focus: function () {
      this.instance.current && this.$list.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + this.instance.current.index + '"]').addClass("fancybox-thumbs-active").focus()
    },
    close: function () {
      this.$grid.hide()
    },
    update: function () {
      this.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), this.isVisible ? (this.$grid || this.create(), this.instance.trigger("onThumbsShow"), this.focus()) : this.$grid && this.instance.trigger("onThumbsHide"), this.instance.update()
    },
    hide: function () {
      this.isVisible = !1, this.update()
    },
    show: function () {
      this.isVisible = !0, this.update()
    },
    toggle: function () {
      this.isVisible = !this.isVisible, this.update()
    }
  }), e(t).on({
    "onInit.fb": function (t, e) {
      e && !e.Thumbs && (e.Thumbs = new n(e))
    },
    "beforeShow.fb": function (t, e, n, o) {
      var i = e && e.Thumbs;
      if (i && i.isActive) {
        if (n.modal) return i.$button.hide(), void i.hide();
        o && n.opts.thumbs.autoStart === !0 && i.show(), i.isVisible && i.focus()
      }
    },
    "afterKeydown.fb": function (t, e, n, o, i) {
      var a = e && e.Thumbs;
      a && a.isActive && 71 === i && (o.preventDefault(), a.toggle())
    },
    "beforeClose.fb": function (t, e) {
      var n = e && e.Thumbs;
      n && n.isVisible && e.opts.thumbs.hideOnClose !== !1 && n.close()
    }
  })
}(document, window.jQuery),
function (t, e, n) {
  "use strict";

  function o() {
    var t = e.location.hash.substr(1),
      n = t.split("-"),
      o = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) ? parseInt(n.pop(-1), 10) || 1 : 1,
      i = n.join("-");
    return o < 1 && (o = 1), {
      hash: t,
      index: o,
      gallery: i
    }
  }

  function i(t) {
    var e;
    "" !== t.gallery && (e = n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(t.index - 1), e.length || (e = n("#" + n.escapeSelector(t.gallery))), e.length && (s = !1, e.trigger("click")))
  }

  function a(t) {
    var e;
    return !!t && (e = t.current ? t.current.opts : t.opts, e.hash || (e.$orig ? e.$orig.data("fancybox") : ""))
  }
  n.escapeSelector || (n.escapeSelector = function (t) {
    var e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
      n = function (t, e) {
        return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
      };
    return (t + "").replace(e, n)
  });
  var s = !0,
    r = null,
    c = null;
  n(function () {
    setTimeout(function () {
      n.fancybox.defaults.hash !== !1 && (n(t).on({
        "onInit.fb": function (t, e) {
          var n, i;
          e.group[e.currIndex].opts.hash !== !1 && (n = o(), i = a(e), i && n.gallery && i == n.gallery && (e.currIndex = n.index - 1))
        },
        "beforeShow.fb": function (n, o, i) {
          var l;
          i && i.opts.hash !== !1 && (l = a(o), l && "" !== l && (e.location.hash.indexOf(l) < 0 && (o.opts.origHash = e.location.hash), r = l + (o.group.length > 1 ? "-" + (i.index + 1) : ""), "replaceState" in e.history ? (c && clearTimeout(c), c = setTimeout(function () {
            e.history[s ? "pushState" : "replaceState"]({}, t.title, e.location.pathname + e.location.search + "#" + r), c = null, s = !1
          }, 300)) : e.location.hash = r))
        },
        "beforeClose.fb": function (o, i, s) {
          var l, u;
          c && clearTimeout(c), s.opts.hash !== !1 && (l = a(i), u = i && i.opts.origHash ? i.opts.origHash : "", l && "" !== l && ("replaceState" in history ? e.history.replaceState({}, t.title, e.location.pathname + e.location.search + u) : (e.location.hash = u, n(e).scrollTop(i.scrollTop).scrollLeft(i.scrollLeft))), r = null)
        }
      }), n(e).on("hashchange.fb", function () {
        var t = o();
        n.fancybox.getInstance() ? !r || r === t.gallery + "-" + t.index || 1 === t.index && r == t.gallery || (r = null, n.fancybox.close()) : "" !== t.gallery && i(t)
      }), i(o()))
    }, 50)
  })
}(document, window, window.jQuery);

/*! jQuery Migrate v3.0.1 | (c) jQuery Foundation and other contributors | jquery.org/license */

$('a.fancybox').fancybox();

void 0 === jQuery.migrateMute && (jQuery.migrateMute = !0),
  function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], window, e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery"), window) : e(jQuery, window);
  }(function (e, t) {
    "use strict";

    function r(r) {
      var n = t.console;
      o[r] || (o[r] = !0, e.migrateWarnings.push(r), n && n.warn && !e.migrateMute && (n.warn("JQMIGRATE: " + r),
        e.migrateTrace && n.trace && n.trace()));
    }

    function n(e, t, n, a) {
      Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return r(a), n;
        },
        set: function (e) {
          r(a), n = e;
        }
      });
    }

    function a(e, t, n, a) {
      e[t] = function () {
        return r(a), n.apply(this, arguments);
      };
    }
    e.migrateVersion = "3.0.1",
      function () {
        var r = /^[12]\./;
        t.console && t.console.log && (e && !r.test(e.fn.jquery) || t.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),
          e.migrateWarnings && t.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),
          t.console.log("JQMIGRATE: Migrate is installed" + (e.migrateMute ? "" : " with logging active") + ", version " + e.migrateVersion));
      }();
    var o = {};
    e.migrateWarnings = [], void 0 === e.migrateTrace && (e.migrateTrace = !0), e.migrateReset = function () {
      o = {}, e.migrateWarnings.length = 0;
    }, "BackCompat" === t.document.compatMode && r("jQuery is not compatible with Quirks Mode");
    var i = e.fn.init,
      s = e.isNumeric,
      u = e.find,
      c = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
      l = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;
    e.fn.init = function (e) {
      var t = Array.prototype.slice.call(arguments);
      return "string" == typeof e && "#" === e && (r("jQuery( '#' ) is not a valid selector"),
        t[0] = []), i.apply(this, t);
    }, e.fn.init.prototype = e.fn, e.find = function (e) {
      var n = Array.prototype.slice.call(arguments);
      if ("string" == typeof e && c.test(e)) try {
        t.document.querySelector(e);
      } catch (a) {
        e = e.replace(l, function (e, t, r, n) {
          return "[" + t + r + '"' + n + '"]';
        });
        try {
          t.document.querySelector(e), r("Attribute selector with '#' must be quoted: " + n[0]),
            n[0] = e;
        } catch (e) {
          r("Attribute selector with '#' was not fixed: " + n[0]);
        }
      }
      return u.apply(this, n);
    };
    var d;
    for (d in u) Object.prototype.hasOwnProperty.call(u, d) && (e.find[d] = u[d]);
    e.fn.size = function () {
        return r("jQuery.fn.size() is deprecated and removed; use the .length property"),
          this.length;
      }, e.parseJSON = function () {
        return r("jQuery.parseJSON is deprecated; use JSON.parse"), JSON.parse.apply(null, arguments);
      }, e.isNumeric = function (t) {
        var n = s(t),
          a = function (t) {
            var r = t && t.toString();
            return !e.isArray(t) && r - parseFloat(r) + 1 >= 0;
          }(t);
        return n !== a && r("jQuery.isNumeric() should not be called on constructed objects"),
          a;
      }, a(e, "holdReady", e.holdReady, "jQuery.holdReady is deprecated"), a(e, "unique", e.uniqueSort, "jQuery.unique is deprecated; use jQuery.uniqueSort"),
      n(e.expr, "filters", e.expr.pseudos, "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),
      n(e.expr, ":", e.expr.pseudos, "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos");
    var p = e.ajax;
    e.ajax = function () {
      var e = p.apply(this, arguments);
      return e.promise && (a(e, "success", e.done, "jQXHR.success is deprecated and removed"),
          a(e, "error", e.fail, "jQXHR.error is deprecated and removed"), a(e, "complete", e.always, "jQXHR.complete is deprecated and removed")),
        e;
    };
    var f = e.fn.removeAttr,
      y = e.fn.toggleClass,
      m = /\S+/g;
    e.fn.removeAttr = function (t) {
      var n = this;
      return e.each(t.match(m), function (t, a) {
        e.expr.match.bool.test(a) && (r("jQuery.fn.removeAttr no longer sets boolean properties: " + a),
          n.prop(a, !1));
      }), f.apply(this, arguments);
    }, e.fn.toggleClass = function (t) {
      return void 0 !== t && "boolean" != typeof t ? y.apply(this, arguments) : (r("jQuery.fn.toggleClass( boolean ) is deprecated"),
        this.each(function () {
          var r = this.getAttribute && this.getAttribute("class") || "";
          r && e.data(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : e.data(this, "__className__") || "");
        }));
    };
    var h = !1;
    e.swap && e.each(["height", "width", "reliableMarginRight"], function (t, r) {
      var n = e.cssHooks[r] && e.cssHooks[r].get;
      n && (e.cssHooks[r].get = function () {
        var e;
        return h = !0, e = n.apply(this, arguments), h = !1, e;
      });
    }), e.swap = function (e, t, n, a) {
      var o, i, s = {};
      h || r("jQuery.swap() is undocumented and deprecated");
      for (i in t) s[i] = e.style[i], e.style[i] = t[i];
      o = n.apply(e, a || []);
      for (i in t) e.style[i] = s[i];
      return o;
    };
    var g = e.data;
    e.data = function (t, n, a) {
      var o;
      if (n && "object" == typeof n && 2 === arguments.length) {
        o = e.hasData(t) && g.call(this, t);
        var i = {};
        for (var s in n) s !== e.camelCase(s) ? (r("jQuery.data() always sets/gets camelCased names: " + s),
          o[s] = n[s]) : i[s] = n[s];
        return g.call(this, t, i), n;
      }
      return n && "string" == typeof n && n !== e.camelCase(n) && (o = e.hasData(t) && g.call(this, t)) && n in o ? (r("jQuery.data() always sets/gets camelCased names: " + n),
        arguments.length > 2 && (o[n] = a), o[n]) : g.apply(this, arguments);
    };
    var v = e.Tween.prototype.run,
      j = function (e) {
        return e;
      };
    e.Tween.prototype.run = function () {
      e.easing[this.easing].length > 1 && (r("'jQuery.easing." + this.easing.toString() + "' should use only one argument"),
        e.easing[this.easing] = j), v.apply(this, arguments);
    }, e.fx.interval = e.fx.interval || 13, t.requestAnimationFrame && n(e.fx, "interval", e.fx.interval, "jQuery.fx.interval is deprecated");
    var Q = e.fn.load,
      b = e.event.add,
      w = e.event.fix;
    e.event.props = [], e.event.fixHooks = {}, n(e.event.props, "concat", e.event.props.concat, "jQuery.event.props.concat() is deprecated and removed"),
      e.event.fix = function (t) {
        var n, a = t.type,
          o = this.fixHooks[a],
          i = e.event.props;
        if (i.length)
          for (r("jQuery.event.props are deprecated and removed: " + i.join()); i.length;) e.event.addProp(i.pop());
        if (o && !o._migrated_ && (o._migrated_ = !0, r("jQuery.event.fixHooks are deprecated and removed: " + a),
            (i = o.props) && i.length))
          for (; i.length;) e.event.addProp(i.pop());
        return n = w.call(this, t), o && o.filter ? o.filter(n, t) : n;
      }, e.event.add = function (e, n) {
        return e === t && "load" === n && "complete" === t.document.readyState && r("jQuery(window).on('load'...) called after load event occurred"),
          b.apply(this, arguments);
      }, e.each(["load", "unload", "error"], function (t, n) {
        e.fn[n] = function () {
          var e = Array.prototype.slice.call(arguments, 0);
          return "load" === n && "string" == typeof e[0] ? Q.apply(this, e) : (r("jQuery.fn." + n + "() is deprecated"),
            e.splice(0, 0, n), arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e),
              this));
        };
      }), e.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, n) {
        e.fn[n] = function (e, t) {
          return r("jQuery.fn." + n + "() event shorthand is deprecated"), arguments.length > 0 ? this.on(n, null, e, t) : this.trigger(n);
        };
      }), e(function () {
        e(t.document).triggerHandler("ready");
      }), e.event.special.ready = {
        setup: function () {
          this === t.document && r("'ready' event is deprecated");
        }
      }, e.fn.extend({
        bind: function (e, t, n) {
          return r("jQuery.fn.bind() is deprecated"), this.on(e, null, t, n);
        },
        unbind: function (e, t) {
          return r("jQuery.fn.unbind() is deprecated"), this.off(e, null, t);
        },
        delegate: function (e, t, n, a) {
          return r("jQuery.fn.delegate() is deprecated"), this.on(t, e, n, a);
        },
        undelegate: function (e, t, n) {
          return r("jQuery.fn.undelegate() is deprecated"), 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        },
        hover: function (e, t) {
          return r("jQuery.fn.hover() is deprecated"), this.on("mouseenter", e).on("mouseleave", t || e);
        }
      });
    var x = e.fn.offset;
    e.fn.offset = function () {
      var n, a = this[0],
        o = {
          top: 0,
          left: 0
        };
      return a && a.nodeType ? (n = (a.ownerDocument || t.document).documentElement, e.contains(n, a) ? x.apply(this, arguments) : (r("jQuery.fn.offset() requires an element connected to a document"),
        o)) : (r("jQuery.fn.offset() requires a valid DOM element"), o);
    };
    var k = e.param;
    e.param = function (t, n) {
      var a = e.ajaxSettings && e.ajaxSettings.traditional;
      return void 0 === n && a && (r("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),
        n = a), k.call(this, t, n);
    };
    var A = e.fn.andSelf || e.fn.addBack;
    e.fn.andSelf = function () {
      return r("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),
        A.apply(this, arguments);
    };
    var S = e.Deferred,
      q = [
        ["resolve", "done", e.Callbacks("once memory"), e.Callbacks("once memory"), "resolved"],
        ["reject", "fail", e.Callbacks("once memory"), e.Callbacks("once memory"), "rejected"],
        ["notify", "progress", e.Callbacks("memory"), e.Callbacks("memory")]
      ];
    return e.Deferred = function (t) {
      var n = S(),
        a = n.promise();
      return n.pipe = a.pipe = function () {
        var t = arguments;
        return r("deferred.pipe() is deprecated"), e.Deferred(function (r) {
          e.each(q, function (o, i) {
            var s = e.isFunction(t[o]) && t[o];
            n[i[1]](function () {
              var t = s && s.apply(this, arguments);
              t && e.isFunction(t.promise) ? t.promise().done(r.resolve).fail(r.reject).progress(r.notify) : r[i[0] + "With"](this === a ? r.promise() : this, s ? [t] : arguments);
            });
          }), t = null;
        }).promise();
      }, t && t.call(n, n), n;
    }, e.Deferred.exceptionHook = S.exceptionHook, e;
  });
/*
 Copyright (C) Federico Zivolo 2017
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */
(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t()
})(this, function () {
  'use strict';

  function e(e) {
    return e && '[object Function]' === {}.toString.call(e)
  }

  function t(e, t) {
    if (1 !== e.nodeType) return [];
    var o = getComputedStyle(e, null);
    return t ? o[t] : o
  }

  function o(e) {
    return 'HTML' === e.nodeName ? e : e.parentNode || e.host
  }

  function n(e) {
    if (!e) return document.body;
    switch (e.nodeName) {
      case 'HTML':
      case 'BODY':
        return e.ownerDocument.body;
      case '#document':
        return e.body;
    }
    var i = t(e),
      r = i.overflow,
      p = i.overflowX,
      s = i.overflowY;
    return /(auto|scroll)/.test(r + s + p) ? e : n(o(e))
  }

  function r(e) {
    var o = e && e.offsetParent,
      i = o && o.nodeName;
    return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TD', 'TABLE'].indexOf(o.nodeName) && 'static' === t(o, 'position') ? r(o) : o : e ? e.ownerDocument.documentElement : document.documentElement
  }

  function p(e) {
    var t = e.nodeName;
    return 'BODY' !== t && ('HTML' === t || r(e.firstElementChild) === e)
  }

  function s(e) {
    return null === e.parentNode ? e : s(e.parentNode)
  }

  function d(e, t) {
    if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
    var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
      i = o ? e : t,
      n = o ? t : e,
      a = document.createRange();
    a.setStart(i, 0), a.setEnd(n, 0);
    var l = a.commonAncestorContainer;
    if (e !== l && t !== l || i.contains(n)) return p(l) ? l : r(l);
    var f = s(e);
    return f.host ? d(f.host, t) : d(e, s(t).host)
  }

  function a(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
      o = 'top' === t ? 'scrollTop' : 'scrollLeft',
      i = e.nodeName;
    if ('BODY' === i || 'HTML' === i) {
      var n = e.ownerDocument.documentElement,
        r = e.ownerDocument.scrollingElement || n;
      return r[o]
    }
    return e[o]
  }

  function l(e, t) {
    var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
      i = a(t, 'top'),
      n = a(t, 'left'),
      r = o ? -1 : 1;
    return e.top += i * r, e.bottom += i * r, e.left += n * r, e.right += n * r, e
  }

  function f(e, t) {
    var o = 'x' === t ? 'Left' : 'Top',
      i = 'Left' == o ? 'Right' : 'Bottom';
    return parseFloat(e['border' + o + 'Width'], 10) + parseFloat(e['border' + i + 'Width'], 10)
  }

  function m(e, t, o, i) {
    return J(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], ie() ? o['offset' + e] + i['margin' + ('Height' === e ? 'Top' : 'Left')] + i['margin' + ('Height' === e ? 'Bottom' : 'Right')] : 0)
  }

  function h() {
    var e = document.body,
      t = document.documentElement,
      o = ie() && getComputedStyle(t);
    return {
      height: m('Height', e, t, o),
      width: m('Width', e, t, o)
    }
  }

  function c(e) {
    return se({}, e, {
      right: e.left + e.width,
      bottom: e.top + e.height
    })
  }

  function g(e) {
    var o = {};
    if (ie()) try {
      o = e.getBoundingClientRect();
      var i = a(e, 'top'),
        n = a(e, 'left');
      o.top += i, o.left += n, o.bottom += i, o.right += n
    } catch (e) {} else o = e.getBoundingClientRect();
    var r = {
        left: o.left,
        top: o.top,
        width: o.right - o.left,
        height: o.bottom - o.top
      },
      p = 'HTML' === e.nodeName ? h() : {},
      s = p.width || e.clientWidth || r.right - r.left,
      d = p.height || e.clientHeight || r.bottom - r.top,
      l = e.offsetWidth - s,
      m = e.offsetHeight - d;
    if (l || m) {
      var g = t(e);
      l -= f(g, 'x'), m -= f(g, 'y'), r.width -= l, r.height -= m
    }
    return c(r)
  }

  function u(e, o) {
    var i = ie(),
      r = 'HTML' === o.nodeName,
      p = g(e),
      s = g(o),
      d = n(e),
      a = t(o),
      f = parseFloat(a.borderTopWidth, 10),
      m = parseFloat(a.borderLeftWidth, 10),
      h = c({
        top: p.top - s.top - f,
        left: p.left - s.left - m,
        width: p.width,
        height: p.height
      });
    if (h.marginTop = 0, h.marginLeft = 0, !i && r) {
      var u = parseFloat(a.marginTop, 10),
        b = parseFloat(a.marginLeft, 10);
      h.top -= f - u, h.bottom -= f - u, h.left -= m - b, h.right -= m - b, h.marginTop = u, h.marginLeft = b
    }
    return (i ? o.contains(d) : o === d && 'BODY' !== d.nodeName) && (h = l(h, o)), h
  }

  function b(e) {
    var t = e.ownerDocument.documentElement,
      o = u(e, t),
      i = J(t.clientWidth, window.innerWidth || 0),
      n = J(t.clientHeight, window.innerHeight || 0),
      r = a(t),
      p = a(t, 'left'),
      s = {
        top: r - o.top + o.marginTop,
        left: p - o.left + o.marginLeft,
        width: i,
        height: n
      };
    return c(s)
  }

  function w(e) {
    var i = e.nodeName;
    return 'BODY' === i || 'HTML' === i ? !1 : 'fixed' === t(e, 'position') || w(o(e))
  }

  function y(e, t, i, r) {
    var p = {
        top: 0,
        left: 0
      },
      s = d(e, t);
    if ('viewport' === r) p = b(s);
    else {
      var a;
      'scrollParent' === r ? (a = n(o(t)), 'BODY' === a.nodeName && (a = e.ownerDocument.documentElement)) : 'window' === r ? a = e.ownerDocument.documentElement : a = r;
      var l = u(a, s);
      if ('HTML' === a.nodeName && !w(s)) {
        var f = h(),
          m = f.height,
          c = f.width;
        p.top += l.top - l.marginTop, p.bottom = m + l.top, p.left += l.left - l.marginLeft, p.right = c + l.left
      } else p = l
    }
    return p.left += i, p.top += i, p.right -= i, p.bottom -= i, p
  }

  function E(e) {
    var t = e.width,
      o = e.height;
    return t * o
  }

  function v(e, t, o, i, n) {
    var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === e.indexOf('auto')) return e;
    var p = y(o, i, r, n),
      s = {
        top: {
          width: p.width,
          height: t.top - p.top
        },
        right: {
          width: p.right - t.right,
          height: p.height
        },
        bottom: {
          width: p.width,
          height: p.bottom - t.bottom
        },
        left: {
          width: t.left - p.left,
          height: p.height
        }
      },
      d = Object.keys(s).map(function (e) {
        return se({
          key: e
        }, s[e], {
          area: E(s[e])
        })
      }).sort(function (e, t) {
        return t.area - e.area
      }),
      a = d.filter(function (e) {
        var t = e.width,
          i = e.height;
        return t >= o.clientWidth && i >= o.clientHeight
      }),
      l = 0 < a.length ? a[0].key : d[0].key,
      f = e.split('-')[1];
    return l + (f ? '-' + f : '')
  }

  function O(e, t, o) {
    var i = d(t, o);
    return u(o, i)
  }

  function L(e) {
    var t = getComputedStyle(e),
      o = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
      i = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
      n = {
        width: e.offsetWidth + i,
        height: e.offsetHeight + o
      };
    return n
  }

  function x(e) {
    var t = {
      left: 'right',
      right: 'left',
      bottom: 'top',
      top: 'bottom'
    };
    return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e]
    })
  }

  function S(e, t, o) {
    o = o.split('-')[0];
    var i = L(e),
      n = {
        width: i.width,
        height: i.height
      },
      r = -1 !== ['right', 'left'].indexOf(o),
      p = r ? 'top' : 'left',
      s = r ? 'left' : 'top',
      d = r ? 'height' : 'width',
      a = r ? 'width' : 'height';
    return n[p] = t[p] + t[d] / 2 - i[d] / 2, n[s] = o === s ? t[s] - i[a] : t[x(s)], n
  }

  function T(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0]
  }

  function D(e, t, o) {
    if (Array.prototype.findIndex) return e.findIndex(function (e) {
      return e[t] === o
    });
    var i = T(e, function (e) {
      return e[t] === o
    });
    return e.indexOf(i)
  }

  function C(t, o, i) {
    var n = void 0 === i ? t : t.slice(0, D(t, 'name', i));
    return n.forEach(function (t) {
      t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
      var i = t['function'] || t.fn;
      t.enabled && e(i) && (o.offsets.popper = c(o.offsets.popper), o.offsets.reference = c(o.offsets.reference), o = i(o, t))
    }), o
  }

  function N() {
    if (!this.state.isDestroyed) {
      var e = {
        instance: this,
        styles: {},
        arrowStyles: {},
        attributes: {},
        flipped: !1,
        offsets: {}
      };
      e.offsets.reference = O(this.state, this.popper, this.reference), e.placement = v(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.offsets.popper = S(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = 'absolute', e = C(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
    }
  }

  function k(e, t) {
    return e.some(function (e) {
      var o = e.name,
        i = e.enabled;
      return i && o === t
    })
  }

  function W(e) {
    for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length - 1; n++) {
      var i = t[n],
        r = i ? '' + i + o : e;
      if ('undefined' != typeof document.body.style[r]) return r
    }
    return null
  }

  function P() {
    return this.state.isDestroyed = !0, k(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.left = '', this.popper.style.position = '', this.popper.style.top = '', this.popper.style[W('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
  }

  function B(e) {
    var t = e.ownerDocument;
    return t ? t.defaultView : window
  }

  function H(e, t, o, i) {
    var r = 'BODY' === e.nodeName,
      p = r ? e.ownerDocument.defaultView : e;
    p.addEventListener(t, o, {
      passive: !0
    }), r || H(n(p.parentNode), t, o, i), i.push(p)
  }

  function A(e, t, o, i) {
    o.updateBound = i, B(e).addEventListener('resize', o.updateBound, {
      passive: !0
    });
    var r = n(e);
    return H(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o
  }

  function I() {
    this.state.eventsEnabled || (this.state = A(this.reference, this.options, this.state, this.scheduleUpdate))
  }

  function M(e, t) {
    return B(e).removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function (e) {
      e.removeEventListener('scroll', t.updateBound)
    }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
  }

  function R() {
    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = M(this.reference, this.state))
  }

  function U(e) {
    return '' !== e && !isNaN(parseFloat(e)) && isFinite(e)
  }

  function Y(e, t) {
    Object.keys(t).forEach(function (o) {
      var i = ''; - 1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && U(t[o]) && (i = 'px'), e.style[o] = t[o] + i
    })
  }

  function j(e, t) {
    Object.keys(t).forEach(function (o) {
      var i = t[o];
      !1 === i ? e.removeAttribute(o) : e.setAttribute(o, t[o])
    })
  }

  function F(e, t, o) {
    var i = T(e, function (e) {
        var o = e.name;
        return o === t
      }),
      n = !!i && e.some(function (e) {
        return e.name === o && e.enabled && e.order < i.order
      });
    if (!n) {
      var r = '`' + t + '`';
      console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!')
    }
    return n
  }

  function K(e) {
    return 'end' === e ? 'start' : 'start' === e ? 'end' : e
  }

  function q(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
      o = ae.indexOf(e),
      i = ae.slice(o + 1).concat(ae.slice(0, o));
    return t ? i.reverse() : i
  }

  function V(e, t, o, i) {
    var n = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
      r = +n[1],
      p = n[2];
    if (!r) return e;
    if (0 === p.indexOf('%')) {
      var s;
      switch (p) {
        case '%p':
          s = o;
          break;
        case '%':
        case '%r':
        default:
          s = i;
      }
      var d = c(s);
      return d[t] / 100 * r
    }
    if ('vh' === p || 'vw' === p) {
      var a;
      return a = 'vh' === p ? J(document.documentElement.clientHeight, window.innerHeight || 0) : J(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r
    }
    return r
  }

  function z(e, t, o, i) {
    var n = [0, 0],
      r = -1 !== ['right', 'left'].indexOf(i),
      p = e.split(/(\+|\-)/).map(function (e) {
        return e.trim()
      }),
      s = p.indexOf(T(p, function (e) {
        return -1 !== e.search(/,|\s/)
      }));
    p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
    var d = /\s*,\s*|\s+/,
      a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
    return a = a.map(function (e, i) {
      var n = (1 === i ? !r : r) ? 'height' : 'width',
        p = !1;
      return e.reduce(function (e, t) {
        return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t)
      }, []).map(function (e) {
        return V(e, n, t, o)
      })
    }), a.forEach(function (e, t) {
      e.forEach(function (o, i) {
        U(o) && (n[t] += o * ('-' === e[i - 1] ? -1 : 1))
      })
    }), n
  }

  function G(e, t) {
    var o, i = t.offset,
      n = e.placement,
      r = e.offsets,
      p = r.popper,
      s = r.reference,
      d = n.split('-')[0];
    return o = U(+i) ? [+i, 0] : z(i, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e
  }
  for (var _ = Math.min, X = Math.floor, J = Math.max, Q = 'undefined' != typeof window && 'undefined' != typeof document, Z = ['Edge', 'Trident', 'Firefox'], $ = 0, ee = 0; ee < Z.length; ee += 1)
    if (Q && 0 <= navigator.userAgent.indexOf(Z[ee])) {
      $ = 1;
      break
    } var i, te = Q && window.Promise,
    oe = te ? function (e) {
      var t = !1;
      return function () {
        t || (t = !0, window.Promise.resolve().then(function () {
          t = !1, e()
        }))
      }
    } : function (e) {
      var t = !1;
      return function () {
        t || (t = !0, setTimeout(function () {
          t = !1, e()
        }, $))
      }
    },
    ie = function () {
      return void 0 == i && (i = -1 !== navigator.appVersion.indexOf('MSIE 10')), i
    },
    ne = function (e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    },
    re = function () {
      function e(e, t) {
        for (var o, n = 0; n < t.length; n++) o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
      }
      return function (t, o, i) {
        return o && e(t.prototype, o), i && e(t, i), t
      }
    }(),
    pe = function (e, t, o) {
      return t in e ? Object.defineProperty(e, t, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = o, e
    },
    se = Object.assign || function (e) {
      for (var t, o = 1; o < arguments.length; o++)
        for (var i in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
      return e
    },
    de = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
    ae = de.slice(3),
    le = {
      FLIP: 'flip',
      CLOCKWISE: 'clockwise',
      COUNTERCLOCKWISE: 'counterclockwise'
    },
    fe = function () {
      function t(o, i) {
        var n = this,
          r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        ne(this, t), this.scheduleUpdate = function () {
          return requestAnimationFrame(n.update)
        }, this.update = oe(this.update.bind(this)), this.options = se({}, t.Defaults, r), this.state = {
          isDestroyed: !1,
          isCreated: !1,
          scrollParents: []
        }, this.reference = o && o.jquery ? o[0] : o, this.popper = i && i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys(se({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) {
          n.options.modifiers[e] = se({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
        }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
          return se({
            name: e
          }, n.options.modifiers[e])
        }).sort(function (e, t) {
          return e.order - t.order
        }), this.modifiers.forEach(function (t) {
          t.enabled && e(t.onLoad) && t.onLoad(n.reference, n.popper, n.options, t, n.state)
        }), this.update();
        var p = this.options.eventsEnabled;
        p && this.enableEventListeners(), this.state.eventsEnabled = p
      }
      return re(t, [{
        key: 'update',
        value: function () {
          return N.call(this)
        }
      }, {
        key: 'destroy',
        value: function () {
          return P.call(this)
        }
      }, {
        key: 'enableEventListeners',
        value: function () {
          return I.call(this)
        }
      }, {
        key: 'disableEventListeners',
        value: function () {
          return R.call(this)
        }
      }]), t
    }();
  return fe.Utils = ('undefined' == typeof window ? global : window).PopperUtils, fe.placements = de, fe.Defaults = {
    placement: 'bottom',
    eventsEnabled: !0,
    removeOnDestroy: !1,
    onCreate: function () {},
    onUpdate: function () {},
    modifiers: {
      shift: {
        order: 100,
        enabled: !0,
        fn: function (e) {
          var t = e.placement,
            o = t.split('-')[0],
            i = t.split('-')[1];
          if (i) {
            var n = e.offsets,
              r = n.reference,
              p = n.popper,
              s = -1 !== ['bottom', 'top'].indexOf(o),
              d = s ? 'left' : 'top',
              a = s ? 'width' : 'height',
              l = {
                start: pe({}, d, r[d]),
                end: pe({}, d, r[d] + r[a] - p[a])
              };
            e.offsets.popper = se({}, p, l[i])
          }
          return e
        }
      },
      offset: {
        order: 200,
        enabled: !0,
        fn: G,
        offset: 0
      },
      preventOverflow: {
        order: 300,
        enabled: !0,
        fn: function (e, t) {
          var o = t.boundariesElement || r(e.instance.popper);
          e.instance.reference === o && (o = r(o));
          var i = y(e.instance.popper, e.instance.reference, t.padding, o);
          t.boundaries = i;
          var n = t.priority,
            p = e.offsets.popper,
            s = {
              primary: function (e) {
                var o = p[e];
                return p[e] < i[e] && !t.escapeWithReference && (o = J(p[e], i[e])), pe({}, e, o)
              },
              secondary: function (e) {
                var o = 'right' === e ? 'left' : 'top',
                  n = p[o];
                return p[e] > i[e] && !t.escapeWithReference && (n = _(p[o], i[e] - ('right' === e ? p.width : p.height))), pe({}, o, n)
              }
            };
          return n.forEach(function (e) {
            var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
            p = se({}, p, s[t](e))
          }), e.offsets.popper = p, e
        },
        priority: ['left', 'right', 'top', 'bottom'],
        padding: 5,
        boundariesElement: 'scrollParent'
      },
      keepTogether: {
        order: 400,
        enabled: !0,
        fn: function (e) {
          var t = e.offsets,
            o = t.popper,
            i = t.reference,
            n = e.placement.split('-')[0],
            r = X,
            p = -1 !== ['top', 'bottom'].indexOf(n),
            s = p ? 'right' : 'bottom',
            d = p ? 'left' : 'top',
            a = p ? 'width' : 'height';
          return o[s] < r(i[d]) && (e.offsets.popper[d] = r(i[d]) - o[a]), o[d] > r(i[s]) && (e.offsets.popper[d] = r(i[s])), e
        }
      },
      arrow: {
        order: 500,
        enabled: !0,
        fn: function (e, o) {
          var i;
          if (!F(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
          var n = o.element;
          if ('string' == typeof n) {
            if (n = e.instance.popper.querySelector(n), !n) return e;
          } else if (!e.instance.popper.contains(n)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;
          var r = e.placement.split('-')[0],
            p = e.offsets,
            s = p.popper,
            d = p.reference,
            a = -1 !== ['left', 'right'].indexOf(r),
            l = a ? 'height' : 'width',
            f = a ? 'Top' : 'Left',
            m = f.toLowerCase(),
            h = a ? 'left' : 'top',
            g = a ? 'bottom' : 'right',
            u = L(n)[l];
          d[g] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[g] - u)), d[m] + u > s[g] && (e.offsets.popper[m] += d[m] + u - s[g]), e.offsets.popper = c(e.offsets.popper);
          var b = d[m] + d[l] / 2 - u / 2,
            w = t(e.instance.popper),
            y = parseFloat(w['margin' + f], 10),
            E = parseFloat(w['border' + f + 'Width'], 10),
            v = b - e.offsets.popper[m] - y - E;
          return v = J(_(s[l] - u, v), 0), e.arrowElement = n, e.offsets.arrow = (i = {}, pe(i, m, Math.round(v)), pe(i, h, ''), i), e
        },
        element: '[x-arrow]'
      },
      flip: {
        order: 600,
        enabled: !0,
        fn: function (e, t) {
          if (k(e.instance.modifiers, 'inner')) return e;
          if (e.flipped && e.placement === e.originalPlacement) return e;
          var o = y(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement),
            i = e.placement.split('-')[0],
            n = x(i),
            r = e.placement.split('-')[1] || '',
            p = [];
          switch (t.behavior) {
            case le.FLIP:
              p = [i, n];
              break;
            case le.CLOCKWISE:
              p = q(i);
              break;
            case le.COUNTERCLOCKWISE:
              p = q(i, !0);
              break;
            default:
              p = t.behavior;
          }
          return p.forEach(function (s, d) {
            if (i !== s || p.length === d + 1) return e;
            i = e.placement.split('-')[0], n = x(i);
            var a = e.offsets.popper,
              l = e.offsets.reference,
              f = X,
              m = 'left' === i && f(a.right) > f(l.left) || 'right' === i && f(a.left) < f(l.right) || 'top' === i && f(a.bottom) > f(l.top) || 'bottom' === i && f(a.top) < f(l.bottom),
              h = f(a.left) < f(o.left),
              c = f(a.right) > f(o.right),
              g = f(a.top) < f(o.top),
              u = f(a.bottom) > f(o.bottom),
              b = 'left' === i && h || 'right' === i && c || 'top' === i && g || 'bottom' === i && u,
              w = -1 !== ['top', 'bottom'].indexOf(i),
              y = !!t.flipVariations && (w && 'start' === r && h || w && 'end' === r && c || !w && 'start' === r && g || !w && 'end' === r && u);
            (m || b || y) && (e.flipped = !0, (m || b) && (i = p[d + 1]), y && (r = K(r)), e.placement = i + (r ? '-' + r : ''), e.offsets.popper = se({}, e.offsets.popper, S(e.instance.popper, e.offsets.reference, e.placement)), e = C(e.instance.modifiers, e, 'flip'))
          }), e
        },
        behavior: 'flip',
        padding: 5,
        boundariesElement: 'viewport'
      },
      inner: {
        order: 700,
        enabled: !1,
        fn: function (e) {
          var t = e.placement,
            o = t.split('-')[0],
            i = e.offsets,
            n = i.popper,
            r = i.reference,
            p = -1 !== ['left', 'right'].indexOf(o),
            s = -1 === ['top', 'left'].indexOf(o);
          return n[p ? 'left' : 'top'] = r[o] - (s ? n[p ? 'width' : 'height'] : 0), e.placement = x(t), e.offsets.popper = c(n), e
        }
      },
      hide: {
        order: 800,
        enabled: !0,
        fn: function (e) {
          if (!F(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
          var t = e.offsets.reference,
            o = T(e.instance.modifiers, function (e) {
              return 'preventOverflow' === e.name
            }).boundaries;
          if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
            if (!0 === e.hide) return e;
            e.hide = !0, e.attributes['x-out-of-boundaries'] = ''
          } else {
            if (!1 === e.hide) return e;
            e.hide = !1, e.attributes['x-out-of-boundaries'] = !1
          }
          return e
        }
      },
      computeStyle: {
        order: 850,
        enabled: !0,
        fn: function (e, t) {
          var o = t.x,
            i = t.y,
            n = e.offsets.popper,
            p = T(e.instance.modifiers, function (e) {
              return 'applyStyle' === e.name
            }).gpuAcceleration;
          void 0 !== p && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
          var s, d, a = void 0 === p ? t.gpuAcceleration : p,
            l = r(e.instance.popper),
            f = g(l),
            m = {
              position: n.position
            },
            h = {
              left: X(n.left),
              top: X(n.top),
              bottom: X(n.bottom),
              right: X(n.right)
            },
            c = 'bottom' === o ? 'top' : 'bottom',
            u = 'right' === i ? 'left' : 'right',
            b = W('transform');
          if (d = 'bottom' == c ? -f.height + h.bottom : h.top, s = 'right' == u ? -f.width + h.right : h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[u] = 0, m.willChange = 'transform';
          else {
            var w = 'bottom' == c ? -1 : 1,
              y = 'right' == u ? -1 : 1;
            m[c] = d * w, m[u] = s * y, m.willChange = c + ', ' + u
          }
          var E = {
            "x-placement": e.placement
          };
          return e.attributes = se({}, E, e.attributes), e.styles = se({}, m, e.styles), e.arrowStyles = se({}, e.offsets.arrow, e.arrowStyles), e
        },
        gpuAcceleration: !0,
        x: 'bottom',
        y: 'right'
      },
      applyStyle: {
        order: 900,
        enabled: !0,
        fn: function (e) {
          return Y(e.instance.popper, e.styles), j(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && Y(e.arrowElement, e.arrowStyles), e
        },
        onLoad: function (e, t, o, i, n) {
          var r = O(n, t, e),
            p = v(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
          return t.setAttribute('x-placement', p), Y(t, {
            position: 'absolute'
          }), o
        },
        gpuAcceleration: void 0
      }
    }
  }, fe
});
//# sourceMappingURL=popper.min.js.map

/*!
 * Bootstrap v4.0.0-beta.3 (https://getbootstrap.com)
 * Copyright 2011-2017 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
! function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper)
}(this, function (t, e, n) {
  "use strict";

  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
    }
  }

  function s(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t
  }

  function r() {
    return (r = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
      }
      return t
    }).apply(this, arguments)
  }
  e = e && e.hasOwnProperty("default") ? e.default : e, n = n && n.hasOwnProperty("default") ? n.default : n;
  var o = function (t) {
      function e(t) {
        return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
      }

      function n(e) {
        var n = this,
          i = !1;
        return t(this).one(s.TRANSITION_END, function () {
          i = !0
        }), setTimeout(function () {
          i || s.triggerTransitionEnd(n)
        }, e), this
      }
      var i = !1,
        s = {
          TRANSITION_END: "bsTransitionEnd",
          getUID: function (t) {
            do {
              t += ~~(1e6 * Math.random())
            } while (document.getElementById(t));
            return t
          },
          getSelectorFromElement: function (e) {
            var n = e.getAttribute("data-target");
            n && "#" !== n || (n = e.getAttribute("href") || ""), "#" === n.charAt(0) && (n = function (e) {
              return e = "function" == typeof t.escapeSelector ? t.escapeSelector(e).substr(1) : e.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1")
            }(n));
            try {
              return t(document).find(n).length > 0 ? n : null
            } catch (t) {
              return null
            }
          },
          reflow: function (t) {
            return t.offsetHeight
          },
          triggerTransitionEnd: function (e) {
            t(e).trigger(i.end)
          },
          supportsTransitionEnd: function () {
            return Boolean(i)
          },
          isElement: function (t) {
            return (t[0] || t).nodeType
          },
          typeCheckConfig: function (t, n, i) {
            for (var r in i)
              if (Object.prototype.hasOwnProperty.call(i, r)) {
                var o = i[r],
                  a = n[r],
                  l = a && s.isElement(a) ? "element" : e(a);
                if (!new RegExp(o).test(l)) throw new Error(t.toUpperCase() + ': Option "' + r + '" provided type "' + l + '" but expected type "' + o + '".')
              }
          }
        };
      return i = !window.QUnit && {
        end: "transitionend"
      }, t.fn.emulateTransitionEnd = n, s.supportsTransitionEnd() && (t.event.special[s.TRANSITION_END] = {
        bindType: i.end,
        delegateType: i.end,
        handle: function (e) {
          if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
        }
      }), s
    }(e),
    a = function (t) {
      var e = "alert",
        n = "bs.alert",
        i = "." + n,
        r = t.fn[e],
        a = {
          CLOSE: "close" + i,
          CLOSED: "closed" + i,
          CLICK_DATA_API: "click" + i + ".data-api"
        },
        l = "alert",
        h = "fade",
        c = "show",
        u = function () {
          function e(t) {
            this._element = t
          }
          var i = e.prototype;
          return i.close = function (t) {
            t = t || this._element;
            var e = this._getRootElement(t);
            this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
          }, i.dispose = function () {
            t.removeData(this._element, n), this._element = null
          }, i._getRootElement = function (e) {
            var n = o.getSelectorFromElement(e),
              i = !1;
            return n && (i = t(n)[0]), i || (i = t(e).closest("." + l)[0]), i
          }, i._triggerCloseEvent = function (e) {
            var n = t.Event(a.CLOSE);
            return t(e).trigger(n), n
          }, i._removeElement = function (e) {
            var n = this;
            t(e).removeClass(c), o.supportsTransitionEnd() && t(e).hasClass(h) ? t(e).one(o.TRANSITION_END, function (t) {
              return n._destroyElement(e, t)
            }).emulateTransitionEnd(150) : this._destroyElement(e)
          }, i._destroyElement = function (e) {
            t(e).detach().trigger(a.CLOSED).remove()
          }, e._jQueryInterface = function (i) {
            return this.each(function () {
              var s = t(this),
                r = s.data(n);
              r || (r = new e(this), s.data(n, r)), "close" === i && r[i](this)
            })
          }, e._handleDismiss = function (t) {
            return function (e) {
              e && e.preventDefault(), t.close(this)
            }
          }, s(e, null, [{
            key: "VERSION",
            get: function () {
              return "4.0.0-beta.3"
            }
          }]), e
        }();
      return t(document).on(a.CLICK_DATA_API, '[data-dismiss="alert"]', u._handleDismiss(new u)), t.fn[e] = u._jQueryInterface, t.fn[e].Constructor = u, t.fn[e].noConflict = function () {
        return t.fn[e] = r, u._jQueryInterface
      }, u
    }(e),
    l = function (t) {
      var e = "button",
        n = "bs.button",
        i = "." + n,
        r = ".data-api",
        o = t.fn[e],
        a = "active",
        l = "btn",
        h = "focus",
        c = '[data-toggle^="button"]',
        u = '[data-toggle="buttons"]',
        f = "input",
        d = ".active",
        _ = ".btn",
        g = {
          CLICK_DATA_API: "click" + i + r,
          FOCUS_BLUR_DATA_API: "focus" + i + r + " blur" + i + r
        },
        m = function () {
          function e(t) {
            this._element = t
          }
          var i = e.prototype;
          return i.toggle = function () {
            var e = !0,
              n = !0,
              i = t(this._element).closest(u)[0];
            if (i) {
              var s = t(this._element).find(f)[0];
              if (s) {
                if ("radio" === s.type)
                  if (s.checked && t(this._element).hasClass(a)) e = !1;
                  else {
                    var r = t(i).find(d)[0];
                    r && t(r).removeClass(a)
                  } if (e) {
                  if (s.hasAttribute("disabled") || i.hasAttribute("disabled") || s.classList.contains("disabled") || i.classList.contains("disabled")) return;
                  s.checked = !t(this._element).hasClass(a), t(s).trigger("change")
                }
                s.focus(), n = !1
              }
            }
            n && this._element.setAttribute("aria-pressed", !t(this._element).hasClass(a)), e && t(this._element).toggleClass(a)
          }, i.dispose = function () {
            t.removeData(this._element, n), this._element = null
          }, e._jQueryInterface = function (i) {
            return this.each(function () {
              var s = t(this).data(n);
              s || (s = new e(this), t(this).data(n, s)), "toggle" === i && s[i]()
            })
          }, s(e, null, [{
            key: "VERSION",
            get: function () {
              return "4.0.0-beta.3"
            }
          }]), e
        }();
      return t(document).on(g.CLICK_DATA_API, c, function (e) {
        e.preventDefault();
        var n = e.target;
        t(n).hasClass(l) || (n = t(n).closest(_)), m._jQueryInterface.call(t(n), "toggle")
      }).on(g.FOCUS_BLUR_DATA_API, c, function (e) {
        var n = t(e.target).closest(_)[0];
        t(n).toggleClass(h, /^focus(in)?$/.test(e.type))
      }), t.fn[e] = m._jQueryInterface, t.fn[e].Constructor = m, t.fn[e].noConflict = function () {
        return t.fn[e] = o, m._jQueryInterface
      }, m
    }(e),
    h = function (t) {
      var e = "carousel",
        n = "bs.carousel",
        i = "." + n,
        a = t.fn[e],
        l = {
          interval: 5e3,
          keyboard: !0,
          slide: !1,
          pause: "hover",
          wrap: !0
        },
        h = {
          interval: "(number|boolean)",
          keyboard: "boolean",
          slide: "(boolean|string)",
          pause: "(string|boolean)",
          wrap: "boolean"
        },
        c = "next",
        u = "prev",
        f = "left",
        d = "right",
        _ = {
          SLIDE: "slide" + i,
          SLID: "slid" + i,
          KEYDOWN: "keydown" + i,
          MOUSEENTER: "mouseenter" + i,
          MOUSELEAVE: "mouseleave" + i,
          TOUCHEND: "touchend" + i,
          LOAD_DATA_API: "load" + i + ".data-api",
          CLICK_DATA_API: "click" + i + ".data-api"
        },
        g = "carousel",
        m = "active",
        p = "slide",
        v = "carousel-item-right",
        E = "carousel-item-left",
        T = "carousel-item-next",
        y = "carousel-item-prev",
        C = {
          ACTIVE: ".active",
          ACTIVE_ITEM: ".active.carousel-item",
          ITEM: ".carousel-item",
          NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
          INDICATORS: ".carousel-indicators",
          DATA_SLIDE: "[data-slide], [data-slide-to]",
          DATA_RIDE: '[data-ride="carousel"]'
        },
        I = function () {
          function a(e, n) {
            this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = t(e)[0], this._indicatorsElement = t(this._element).find(C.INDICATORS)[0], this._addEventListeners()
          }
          var I = a.prototype;
          return I.next = function () {
            this._isSliding || this._slide(c)
          }, I.nextWhenVisible = function () {
            !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
          }, I.prev = function () {
            this._isSliding || this._slide(u)
          }, I.pause = function (e) {
            e || (this._isPaused = !0), t(this._element).find(C.NEXT_PREV)[0] && o.supportsTransitionEnd() && (o.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
          }, I.cycle = function (t) {
            t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
          }, I.to = function (e) {
            var n = this;
            this._activeElement = t(this._element).find(C.ACTIVE_ITEM)[0];
            var i = this._getItemIndex(this._activeElement);
            if (!(e > this._items.length - 1 || e < 0))
              if (this._isSliding) t(this._element).one(_.SLID, function () {
                return n.to(e)
              });
              else {
                if (i === e) return this.pause(), void this.cycle();
                var s = e > i ? c : u;
                this._slide(s, this._items[e])
              }
          }, I.dispose = function () {
            t(this._element).off(i), t.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
          }, I._getConfig = function (t) {
            return t = r({}, l, t), o.typeCheckConfig(e, t, h), t
          }, I._addEventListeners = function () {
            var e = this;
            this._config.keyboard && t(this._element).on(_.KEYDOWN, function (t) {
              return e._keydown(t)
            }), "hover" === this._config.pause && (t(this._element).on(_.MOUSEENTER, function (t) {
              return e.pause(t)
            }).on(_.MOUSELEAVE, function (t) {
              return e.cycle(t)
            }), "ontouchstart" in document.documentElement && t(this._element).on(_.TOUCHEND, function () {
              e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
                return e.cycle(t)
              }, 500 + e._config.interval)
            }))
          }, I._keydown = function (t) {
            if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
              case 37:
                t.preventDefault(), this.prev();
                break;
              case 39:
                t.preventDefault(), this.next();
                break;
              default:
                return
            }
          }, I._getItemIndex = function (e) {
            return this._items = t.makeArray(t(e).parent().find(C.ITEM)), this._items.indexOf(e)
          }, I._getItemByDirection = function (t, e) {
            var n = t === c,
              i = t === u,
              s = this._getItemIndex(e),
              r = this._items.length - 1;
            if ((i && 0 === s || n && s === r) && !this._config.wrap) return e;
            var o = (s + (t === u ? -1 : 1)) % this._items.length;
            return -1 === o ? this._items[this._items.length - 1] : this._items[o]
          }, I._triggerSlideEvent = function (e, n) {
            var i = this._getItemIndex(e),
              s = this._getItemIndex(t(this._element).find(C.ACTIVE_ITEM)[0]),
              r = t.Event(_.SLIDE, {
                relatedTarget: e,
                direction: n,
                from: s,
                to: i
              });
            return t(this._element).trigger(r), r
          }, I._setActiveIndicatorElement = function (e) {
            if (this._indicatorsElement) {
              t(this._indicatorsElement).find(C.ACTIVE).removeClass(m);
              var n = this._indicatorsElement.children[this._getItemIndex(e)];
              n && t(n).addClass(m)
            }
          }, I._slide = function (e, n) {
            var i, s, r, a = this,
              l = t(this._element).find(C.ACTIVE_ITEM)[0],
              h = this._getItemIndex(l),
              u = n || l && this._getItemByDirection(e, l),
              g = this._getItemIndex(u),
              I = Boolean(this._interval);
            if (e === c ? (i = E, s = T, r = f) : (i = v, s = y, r = d), u && t(u).hasClass(m)) this._isSliding = !1;
            else {
              if (!this._triggerSlideEvent(u, r).isDefaultPrevented() && l && u) {
                this._isSliding = !0, I && this.pause(), this._setActiveIndicatorElement(u);
                var A = t.Event(_.SLID, {
                  relatedTarget: u,
                  direction: r,
                  from: h,
                  to: g
                });
                o.supportsTransitionEnd() && t(this._element).hasClass(p) ? (t(u).addClass(s), o.reflow(u), t(l).addClass(i), t(u).addClass(i), t(l).one(o.TRANSITION_END, function () {
                  t(u).removeClass(i + " " + s).addClass(m), t(l).removeClass(m + " " + s + " " + i), a._isSliding = !1, setTimeout(function () {
                    return t(a._element).trigger(A)
                  }, 0)
                }).emulateTransitionEnd(600)) : (t(l).removeClass(m), t(u).addClass(m), this._isSliding = !1, t(this._element).trigger(A)), I && this.cycle()
              }
            }
          }, a._jQueryInterface = function (e) {
            return this.each(function () {
              var i = t(this).data(n),
                s = r({}, l, t(this).data());
              "object" == typeof e && (s = r({}, s, e));
              var o = "string" == typeof e ? e : s.slide;
              if (i || (i = new a(this, s), t(this).data(n, i)), "number" == typeof e) i.to(e);
              else if ("string" == typeof o) {
                if ("undefined" == typeof i[o]) throw new Error('No method named "' + o + '"');
                i[o]()
              } else s.interval && (i.pause(), i.cycle())
            })
          }, a._dataApiClickHandler = function (e) {
            var i = o.getSelectorFromElement(this);
            if (i) {
              var s = t(i)[0];
              if (s && t(s).hasClass(g)) {
                var l = r({}, t(s).data(), t(this).data()),
                  h = this.getAttribute("data-slide-to");
                h && (l.interval = !1), a._jQueryInterface.call(t(s), l), h && t(s).data(n).to(h), e.preventDefault()
              }
            }
          }, s(a, null, [{
            key: "VERSION",
            get: function () {
              return "4.0.0-beta.3"
            }
          }, {
            key: "Default",
            get: function () {
              return l
            }
          }]), a
        }();
      return t(document).on(_.CLICK_DATA_API, C.DATA_SLIDE, I._dataApiClickHandler), t(window).on(_.LOAD_DATA_API, function () {
        t(C.DATA_RIDE).each(function () {
          var e = t(this);
          I._jQueryInterface.call(e, e.data())
        })
      }), t.fn[e] = I._jQueryInterface, t.fn[e].Constructor = I, t.fn[e].noConflict = function () {
        return t.fn[e] = a, I._jQueryInterface
      }, I
    }(e),
    c = function (t) {
      var e = "collapse",
        n = "bs.collapse",
        i = "." + n,
        a = t.fn[e],
        l = {
          toggle: !0,
          parent: ""
        },
        h = {
          toggle: "boolean",
          parent: "(string|element)"
        },
        c = {
          SHOW: "show" + i,
          SHOWN: "shown" + i,
          HIDE: "hide" + i,
          HIDDEN: "hidden" + i,
          CLICK_DATA_API: "click" + i + ".data-api"
        },
        u = "show",
        f = "collapse",
        d = "collapsing",
        _ = "collapsed",
        g = "width",
        m = "height",
        p = {
          ACTIVES: ".show, .collapsing",
          DATA_TOGGLE: '[data-toggle="collapse"]'
        },
        v = function () {
          function i(e, n) {
            this._isTransitioning = !1, this._element = e, this._config = this._getConfig(n), this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
            for (var i = t(p.DATA_TOGGLE), s = 0; s < i.length; s++) {
              var r = i[s],
                a = o.getSelectorFromElement(r);
              null !== a && t(a).filter(e).length > 0 && this._triggerArray.push(r)
            }
            this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
          }
          var a = i.prototype;
          return a.toggle = function () {
            t(this._element).hasClass(u) ? this.hide() : this.show()
          }, a.show = function () {
            var e = this;
            if (!this._isTransitioning && !t(this._element).hasClass(u)) {
              var s, r;
              if (this._parent && ((s = t.makeArray(t(this._parent).children().children(p.ACTIVES))).length || (s = null)), !(s && (r = t(s).data(n)) && r._isTransitioning)) {
                var a = t.Event(c.SHOW);
                if (t(this._element).trigger(a), !a.isDefaultPrevented()) {
                  s && (i._jQueryInterface.call(t(s), "hide"), r || t(s).data(n, null));
                  var l = this._getDimension();
                  t(this._element).removeClass(f).addClass(d), this._element.style[l] = 0, this._triggerArray.length && t(this._triggerArray).removeClass(_).attr("aria-expanded", !0), this.setTransitioning(!0);
                  var h = function () {
                    t(e._element).removeClass(d).addClass(f).addClass(u), e._element.style[l] = "", e.setTransitioning(!1), t(e._element).trigger(c.SHOWN)
                  };
                  if (o.supportsTransitionEnd()) {
                    var g = "scroll" + (l[0].toUpperCase() + l.slice(1));
                    t(this._element).one(o.TRANSITION_END, h).emulateTransitionEnd(600), this._element.style[l] = this._element[g] + "px"
                  } else h()
                }
              }
            }
          }, a.hide = function () {
            var e = this;
            if (!this._isTransitioning && t(this._element).hasClass(u)) {
              var n = t.Event(c.HIDE);
              if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                var i = this._getDimension();
                if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", o.reflow(this._element), t(this._element).addClass(d).removeClass(f).removeClass(u), this._triggerArray.length)
                  for (var s = 0; s < this._triggerArray.length; s++) {
                    var r = this._triggerArray[s],
                      a = o.getSelectorFromElement(r);
                    if (null !== a) {
                      t(a).hasClass(u) || t(r).addClass(_).attr("aria-expanded", !1)
                    }
                  }
                this.setTransitioning(!0);
                var l = function () {
                  e.setTransitioning(!1), t(e._element).removeClass(d).addClass(f).trigger(c.HIDDEN)
                };
                this._element.style[i] = "", o.supportsTransitionEnd() ? t(this._element).one(o.TRANSITION_END, l).emulateTransitionEnd(600) : l()
              }
            }
          }, a.setTransitioning = function (t) {
            this._isTransitioning = t
          }, a.dispose = function () {
            t.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
          }, a._getConfig = function (t) {
            return t = r({}, l, t), t.toggle = Boolean(t.toggle), o.typeCheckConfig(e, t, h), t
          }, a._getDimension = function () {
            return t(this._element).hasClass(g) ? g : m
          }, a._getParent = function () {
            var e = this,
              n = null;
            o.isElement(this._config.parent) ? (n = this._config.parent, "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : n = t(this._config.parent)[0];
            var s = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
            return t(n).find(s).each(function (t, n) {
              e._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n])
            }), n
          }, a._addAriaAndCollapsedClass = function (e, n) {
            if (e) {
              var i = t(e).hasClass(u);
              n.length && t(n).toggleClass(_, !i).attr("aria-expanded", i)
            }
          }, i._getTargetFromElement = function (e) {
            var n = o.getSelectorFromElement(e);
            return n ? t(n)[0] : null
          }, i._jQueryInterface = function (e) {
            return this.each(function () {
              var s = t(this),
                o = s.data(n),
                a = r({}, l, s.data(), "object" == typeof e && e);
              if (!o && a.toggle && /show|hide/.test(e) && (a.toggle = !1), o || (o = new i(this, a), s.data(n, o)), "string" == typeof e) {
                if ("undefined" == typeof o[e]) throw new Error('No method named "' + e + '"');
                o[e]()
              }
            })
          }, s(i, null, [{
            key: "VERSION",
            get: function () {
              return "4.0.0-beta.3"
            }
          }, {
            key: "Default",
            get: function () {
              return l
            }
          }]), i
        }();
      return t(document).on(c.CLICK_DATA_API, p.DATA_TOGGLE, function (e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var i = t(this),
          s = o.getSelectorFromElement(this);
        t(s).each(function () {
          var e = t(this),
            s = e.data(n) ? "toggle" : i.data();
          v._jQueryInterface.call(e, s)
        })
      }), t.fn[e] = v._jQueryInterface, t.fn[e].Constructor = v, t.fn[e].noConflict = function () {
        return t.fn[e] = a, v._jQueryInterface
      }, v
    }(e),
    u = function (t) {
      var e = "dropdown",
        i = "bs.dropdown",
        a = "." + i,
        l = ".data-api",
        h = t.fn[e],
        c = new RegExp("38|40|27"),
        u = {
          HIDE: "hide" + a,
          HIDDEN: "hidden" + a,
          SHOW: "show" + a,
          SHOWN: "shown" + a,
          CLICK: "click" + a,
          CLICK_DATA_API: "click" + a + l,
          KEYDOWN_DATA_API: "keydown" + a + l,
          KEYUP_DATA_API: "keyup" + a + l
        },
        f = "disabled",
        d = "show",
        _ = "dropup",
        g = "dropright",
        m = "dropleft",
        p = "dropdown-menu-right",
        v = "dropdown-menu-left",
        E = "position-static",
        T = '[data-toggle="dropdown"]',
        y = ".dropdown form",
        C = ".dropdown-menu",
        I = ".navbar-nav",
        A = ".dropdown-menu .dropdown-item:not(.disabled)",
        b = "top-start",
        D = "top-end",
        S = "bottom-start",
        w = "bottom-end",
        N = "right-start",
        O = "left-start",
        k = {
          offset: 0,
          flip: !0,
          boundary: "scrollParent"
        },
        P = {
          offset: "(number|string|function)",
          flip: "boolean",
          boundary: "(string|element)"
        },
        L = function () {
          function l(t, e) {
            this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
          }
          var h = l.prototype;
          return h.toggle = function () {
            if (!this._element.disabled && !t(this._element).hasClass(f)) {
              var e = l._getParentFromElement(this._element),
                i = t(this._menu).hasClass(d);
              if (l._clearMenus(), !i) {
                var s = {
                    relatedTarget: this._element
                  },
                  r = t.Event(u.SHOW, s);
                if (t(e).trigger(r), !r.isDefaultPrevented()) {
                  if (!this._inNavbar) {
                    if ("undefined" == typeof n) throw new Error("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                    var o = this._element;
                    t(e).hasClass(_) && (t(this._menu).hasClass(v) || t(this._menu).hasClass(p)) && (o = e), "scrollParent" !== this._config.boundary && t(e).addClass(E), this._popper = new n(o, this._menu, this._getPopperConfig())
                  }
                  "ontouchstart" in document.documentElement && !t(e).closest(I).length && t("body").children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(d), t(e).toggleClass(d).trigger(t.Event(u.SHOWN, s))
                }
              }
            }
          }, h.dispose = function () {
            t.removeData(this._element, i), t(this._element).off(a), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
          }, h.update = function () {
            this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
          }, h._addEventListeners = function () {
            var e = this;
            t(this._element).on(u.CLICK, function (t) {
              t.preventDefault(), t.stopPropagation(), e.toggle()
            })
          }, h._getConfig = function (n) {
            return n = r({}, this.constructor.Default, t(this._element).data(), n), o.typeCheckConfig(e, n, this.constructor.DefaultType), n
          }, h._getMenuElement = function () {
            if (!this._menu) {
              var e = l._getParentFromElement(this._element);
              this._menu = t(e).find(C)[0]
            }
            return this._menu
          }, h._getPlacement = function () {
            var e = t(this._element).parent(),
              n = S;
            return e.hasClass(_) ? (n = b, t(this._menu).hasClass(p) && (n = D)) : e.hasClass(g) ? n = N : e.hasClass(m) ? n = O : t(this._menu).hasClass(p) && (n = w), n
          }, h._detectNavbar = function () {
            return t(this._element).closest(".navbar").length > 0
          }, h._getPopperConfig = function () {
            var t = this,
              e = {};
            "function" == typeof this._config.offset ? e.fn = function (e) {
              return e.offsets = r({}, e.offsets, t._config.offset(e.offsets) || {}), e
            } : e.offset = this._config.offset;
            return {
              placement: this._getPlacement(),
              modifiers: {
                offset: e,
                flip: {
                  enabled: this._config.flip
                },
                preventOverflow: {
                  boundariesElement: this._config.boundary
                }
              }
            }
          }, l._jQueryInterface = function (e) {
            return this.each(function () {
              var n = t(this).data(i);
              if (n || (n = new l(this, "object" == typeof e ? e : null), t(this).data(i, n)), "string" == typeof e) {
                if ("undefined" == typeof n[e]) throw new Error('No method named "' + e + '"');
                n[e]()
              }
            })
          }, l._clearMenus = function (e) {
            if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
              for (var n = t.makeArray(t(T)), s = 0; s < n.length; s++) {
                var r = l._getParentFromElement(n[s]),
                  o = t(n[s]).data(i),
                  a = {
                    relatedTarget: n[s]
                  };
                if (o) {
                  var h = o._menu;
                  if (t(r).hasClass(d) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && t.contains(r, e.target))) {
                    var c = t.Event(u.HIDE, a);
                    t(r).trigger(c), c.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), n[s].setAttribute("aria-expanded", "false"), t(h).removeClass(d), t(r).removeClass(d).trigger(t.Event(u.HIDDEN, a)))
                  }
                }
              }
          }, l._getParentFromElement = function (e) {
            var n, i = o.getSelectorFromElement(e);
            return i && (n = t(i)[0]), n || e.parentNode
          }, l._dataApiKeydownHandler = function (e) {
            if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || t(e.target).closest(C).length)) : c.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !t(this).hasClass(f))) {
              var n = l._getParentFromElement(this),
                i = t(n).hasClass(d);
              if ((i || 27 === e.which && 32 === e.which) && (!i || 27 !== e.which && 32 !== e.which)) {
                var s = t(n).find(A).get();
                if (s.length) {
                  var r = s.indexOf(e.target);
                  38 === e.which && r > 0 && r--, 40 === e.which && r < s.length - 1 && r++, r < 0 && (r = 0), s[r].focus()
                }
              } else {
                if (27 === e.which) {
                  var o = t(n).find(T)[0];
                  t(o).trigger("focus")
                }
                t(this).trigger("click")
              }
            }
          }, s(l, null, [{
            key: "VERSION",
            get: function () {
              return "4.0.0-beta.3"
            }
          }, {
            key: "Default",
            get: function () {
              return k
            }
          }, {
            key: "DefaultType",
            get: function () {
              return P
            }
          }]), l
        }();
      return t(document).on(u.KEYDOWN_DATA_API, T, L._dataApiKeydownHandler).on(u.KEYDOWN_DATA_API, C, L._dataApiKeydownHandler).on(u.CLICK_DATA_API + " " + u.KEYUP_DATA_API, L._clearMenus).on(u.CLICK_DATA_API, T, function (e) {
        e.preventDefault(), e.stopPropagation(), L._jQueryInterface.call(t(this), "toggle")
      }).on(u.CLICK_DATA_API, y, function (t) {
        t.stopPropagation()
      }), t.fn[e] = L._jQueryInterface, t.fn[e].Constructor = L, t.fn[e].noConflict = function () {
        return t.fn[e] = h, L._jQueryInterface
      }, L
    }(e),
    f = function (t) {
      var e = "modal",
        n = "bs.modal",
        i = "." + n,
        a = t.fn.modal,
        l = {
          backdrop: !0,
          keyboard: !0,
          focus: !0,
          show: !0
        },
        h = {
          backdrop: "(boolean|string)",
          keyboard: "boolean",
          focus: "boolean",
          show: "boolean"
        },
        c = {
          HIDE: "hide" + i,
          HIDDEN: "hidden" + i,
          SHOW: "show" + i,
          SHOWN: "shown" + i,
          FOCUSIN: "focusin" + i,
          RESIZE: "resize" + i,
          CLICK_DISMISS: "click.dismiss" + i,
          KEYDOWN_DISMISS: "keydown.dismiss" + i,
          MOUSEUP_DISMISS: "mouseup.dismiss" + i,
          MOUSEDOWN_DISMISS: "mousedown.dismiss" + i,
          CLICK_DATA_API: "click" + i + ".data-api"
        },
        u = "modal-scrollbar-measure",
        f = "modal-backdrop",
        d = "modal-open",
        _ = "fade",
        g = "show",
        m = {
          DIALOG: ".modal-dialog",
          DATA_TOGGLE: '[data-toggle="modal"]',
          DATA_DISMISS: '[data-dismiss="modal"]',
          FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
          STICKY_CONTENT: ".sticky-top",
          NAVBAR_TOGGLER: ".navbar-toggler"
        },
        p = function () {
          function a(e, n) {
            this._config = this._getConfig(n), this._element = e, this._dialog = t(e).find(m.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
          }
          var p = a.prototype;
          return p.toggle = function (t) {
            return this._isShown ? this.hide() : this.show(t)
          }, p.show = function (e) {
            var n = this;
            if (!this._isTransitioning && !this._isShown) {
              o.supportsTransitionEnd() && t(this._element).hasClass(_) && (this._isTransitioning = !0);
              var i = t.Event(c.SHOW, {
                relatedTarget: e
              });
              t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), t(document.body).addClass(d), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(c.CLICK_DISMISS, m.DATA_DISMISS, function (t) {
                return n.hide(t)
              }), t(this._dialog).on(c.MOUSEDOWN_DISMISS, function () {
                t(n._element).one(c.MOUSEUP_DISMISS, function (e) {
                  t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
                })
              }), this._showBackdrop(function () {
                return n._showElement(e)
              }))
            }
          }, p.hide = function (e) {
            var n = this;
            if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
              var i = t.Event(c.HIDE);
              if (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                this._isShown = !1;
                var s = o.supportsTransitionEnd() && t(this._element).hasClass(_);
                s && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(c.FOCUSIN), t(this._element).removeClass(g), t(this._element).off(c.CLICK_DISMISS), t(this._dialog).off(c.MOUSEDOWN_DISMISS), s ? t(this._element).one(o.TRANSITION_END, function (t) {
                  return n._hideModal(t)
                }).emulateTransitionEnd(300) : this._hideModal()
              }
            }
          }, p.dispose = function () {
            t.removeData(this._element, n), t(window, document, this._element, this._backdrop).off(i), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
          }, p.handleUpdate = function () {
            this._adjustDialog()
          }, p._getConfig = function (t) {
            return t = r({}, l, t), o.typeCheckConfig(e, t, h), t
          }, p._showElement = function (e) {
            var n = this,
              i = o.supportsTransitionEnd() && t(this._element).hasClass(_);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && o.reflow(this._element), t(this._element).addClass(g), this._config.focus && this._enforceFocus();
            var s = t.Event(c.SHOWN, {
                relatedTarget: e
              }),
              r = function () {
                n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(s)
              };
            i ? t(this._dialog).one(o.TRANSITION_END, r).emulateTransitionEnd(300) : r()
          }, p._enforceFocus = function () {
            var e = this;
            t(document).off(c.FOCUSIN).on(c.FOCUSIN, function (n) {
              document === n.target || e._element === n.target || t(e._element).has(n.target).length || e._element.focus()
            })
          }, p._setEscapeEvent = function () {
            var e = this;
            this._isShown && this._config.keyboard ? t(this._element).on(c.KEYDOWN_DISMISS, function (t) {
              27 === t.which && (t.preventDefault(), e.hide())
            }) : this._isShown || t(this._element).off(c.KEYDOWN_DISMISS)
          }, p._setResizeEvent = function () {
            var e = this;
            this._isShown ? t(window).on(c.RESIZE, function (t) {
              return e.handleUpdate(t)
            }) : t(window).off(c.RESIZE)
          }, p._hideModal = function () {
            var e = this;
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
              t(document.body).removeClass(d), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(c.HIDDEN)
            })
          }, p._removeBackdrop = function () {
            this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
          }, p._showBackdrop = function (e) {
            var n = this,
              i = t(this._element).hasClass(_) ? _ : "";
            if (this._isShown && this._config.backdrop) {
              var s = o.supportsTransitionEnd() && i;
              if (this._backdrop = document.createElement("div"), this._backdrop.className = f, i && t(this._backdrop).addClass(i), t(this._backdrop).appendTo(document.body), t(this._element).on(c.CLICK_DISMISS, function (t) {
                  n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                }), s && o.reflow(this._backdrop), t(this._backdrop).addClass(g), !e) return;
              if (!s) return void e();
              t(this._backdrop).one(o.TRANSITION_END, e).emulateTransitionEnd(150)
            } else if (!this._isShown && this._backdrop) {
              t(this._backdrop).removeClass(g);
              var r = function () {
                n._removeBackdrop(), e && e()
              };
              o.supportsTransitionEnd() && t(this._element).hasClass(_) ? t(this._backdrop).one(o.TRANSITION_END, r).emulateTransitionEnd(150) : r()
            } else e && e()
          }, p._adjustDialog = function () {
            var t = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
          }, p._resetAdjustments = function () {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
          }, p._checkScrollbar = function () {
            var t = document.body.getBoundingClientRect();
            this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
          }, p._setScrollbar = function () {
            var e = this;
            if (this._isBodyOverflowing) {
              t(m.FIXED_CONTENT).each(function (n, i) {
                var s = t(i)[0].style.paddingRight,
                  r = t(i).css("padding-right");
                t(i).data("padding-right", s).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px")
              }), t(m.STICKY_CONTENT).each(function (n, i) {
                var s = t(i)[0].style.marginRight,
                  r = t(i).css("margin-right");
                t(i).data("margin-right", s).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px")
              }), t(m.NAVBAR_TOGGLER).each(function (n, i) {
                var s = t(i)[0].style.marginRight,
                  r = t(i).css("margin-right");
                t(i).data("margin-right", s).css("margin-right", parseFloat(r) + e._scrollbarWidth + "px")
              });
              var n = document.body.style.paddingRight,
                i = t("body").css("padding-right");
              t("body").data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
            }
          }, p._resetScrollbar = function () {
            t(m.FIXED_CONTENT).each(function (e, n) {
              var i = t(n).data("padding-right");
              "undefined" != typeof i && t(n).css("padding-right", i).removeData("padding-right")
            }), t(m.STICKY_CONTENT + ", " + m.NAVBAR_TOGGLER).each(function (e, n) {
              var i = t(n).data("margin-right");
              "undefined" != typeof i && t(n).css("margin-right", i).removeData("margin-right")
            });
            var e = t("body").data("padding-right");
            "undefined" != typeof e && t("body").css("padding-right", e).removeData("padding-right")
          }, p._getScrollbarWidth = function () {
            var t = document.createElement("div");
            t.className = u, document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t), e
          }, a._jQueryInterface = function (e, i) {
            return this.each(function () {
              var s = t(this).data(n),
                o = r({}, a.Default, t(this).data(), "object" == typeof e && e);
              if (s || (s = new a(this, o), t(this).data(n, s)), "string" == typeof e) {
                if ("undefined" == typeof s[e]) throw new Error('No method named "' + e + '"');
                s[e](i)
              } else o.show && s.show(i)
            })
          }, s(a, null, [{
            key: "VERSION",
            get: function () {
              return "4.0.0-beta.3"
            }
          }, {
            key: "Default",
            get: function () {
              return l
            }
          }]), a
        }();
      return t(document).on(c.CLICK_DATA_API, m.DATA_TOGGLE, function (e) {
        var i, s = this,
          a = o.getSelectorFromElement(this);
        a && (i = t(a)[0]);
        var l = t(i).data(n) ? "toggle" : r({}, t(i).data(), t(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
        var h = t(i).one(c.SHOW, function (e) {
          e.isDefaultPrevented() || h.one(c.HIDDEN, function () {
            t(s).is(":visible") && s.focus()
          })
        });
        p._jQueryInterface.call(t(i), l, this)
      }), t.fn.modal = p._jQueryInterface, t.fn.modal.Constructor = p, t.fn.modal.noConflict = function () {
        return t.fn.modal = a, p._jQueryInterface
      }, p
    }(e),
    d = function (t) {
      var e = "tooltip",
        i = "bs.tooltip",
        a = "." + i,
        l = t.fn[e],
        h = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        c = {
          animation: "boolean",
          template: "string",
          title: "(string|element|function)",
          trigger: "string",
          delay: "(number|object)",
          html: "boolean",
          selector: "(string|boolean)",
          placement: "(string|function)",
          offset: "(number|string)",
          container: "(string|element|boolean)",
          fallbackPlacement: "(string|array)",
          boundary: "(string|element)"
        },
        u = {
          AUTO: "auto",
          TOP: "top",
          RIGHT: "right",
          BOTTOM: "bottom",
          LEFT: "left"
        },
        f = {
          animation: !0,
          template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
          trigger: "hover focus",
          title: "",
          delay: 0,
          html: !1,
          selector: !1,
          placement: "top",
          offset: 0,
          container: !1,
          fallbackPlacement: "flip",
          boundary: "scrollParent"
        },
        d = "show",
        _ = "out",
        g = {
          HIDE: "hide" + a,
          HIDDEN: "hidden" + a,
          SHOW: "show" + a,
          SHOWN: "shown" + a,
          INSERTED: "inserted" + a,
          CLICK: "click" + a,
          FOCUSIN: "focusin" + a,
          FOCUSOUT: "focusout" + a,
          MOUSEENTER: "mouseenter" + a,
          MOUSELEAVE: "mouseleave" + a
        },
        m = "fade",
        p = "show",
        v = ".tooltip-inner",
        E = ".arrow",
        T = "hover",
        y = "focus",
        C = "click",
        I = "manual",
        A = function () {
          function l(t, e) {
            if ("undefined" == typeof n) throw new Error("Bootstrap tooltips require Popper.js (https://popper.js.org)");
            this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
          }
          var A = l.prototype;
          return A.enable = function () {
            this._isEnabled = !0
          }, A.disable = function () {
            this._isEnabled = !1
          }, A.toggleEnabled = function () {
            this._isEnabled = !this._isEnabled
          }, A.toggle = function (e) {
            if (this._isEnabled)
              if (e) {
                var n = this.constructor.DATA_KEY,
                  i = t(e.currentTarget).data(n);
                i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
              } else {
                if (t(this.getTipElement()).hasClass(p)) return void this._leave(null, this);
                this._enter(null, this)
              }
          }, A.dispose = function () {
            clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
          }, A.show = function () {
            var e = this;
            if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
            var i = t.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
              t(this.element).trigger(i);
              var s = t.contains(this.element.ownerDocument.documentElement, this.element);
              if (i.isDefaultPrevented() || !s) return;
              var r = this.getTipElement(),
                a = o.getUID(this.constructor.NAME);
              r.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && t(r).addClass(m);
              var h = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
                c = this._getAttachment(h);
              this.addAttachmentClass(c);
              var u = !1 === this.config.container ? document.body : t(this.config.container);
              t(r).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(r).appendTo(u), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, r, {
                placement: c,
                modifiers: {
                  offset: {
                    offset: this.config.offset
                  },
                  flip: {
                    behavior: this.config.fallbackPlacement
                  },
                  arrow: {
                    element: E
                  },
                  preventOverflow: {
                    boundariesElement: this.config.boundary
                  }
                },
                onCreate: function (t) {
                  t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                },
                onUpdate: function (t) {
                  e._handlePopperPlacementChange(t)
                }
              }), t(r).addClass(p), "ontouchstart" in document.documentElement && t("body").children().on("mouseover", null, t.noop);
              var f = function () {
                e.config.animation && e._fixTransition();
                var n = e._hoverState;
                e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), n === _ && e._leave(null, e)
              };
              o.supportsTransitionEnd() && t(this.tip).hasClass(m) ? t(this.tip).one(o.TRANSITION_END, f).emulateTransitionEnd(l._TRANSITION_DURATION) : f()
            }
          }, A.hide = function (e) {
            var n = this,
              i = this.getTipElement(),
              s = t.Event(this.constructor.Event.HIDE),
              r = function () {
                n._hoverState !== d && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e()
              };
            t(this.element).trigger(s), s.isDefaultPrevented() || (t(i).removeClass(p), "ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), this._activeTrigger[C] = !1, this._activeTrigger[y] = !1, this._activeTrigger[T] = !1, o.supportsTransitionEnd() && t(this.tip).hasClass(m) ? t(i).one(o.TRANSITION_END, r).emulateTransitionEnd(150) : r(), this._hoverState = "")
          }, A.update = function () {
            null !== this._popper && this._popper.scheduleUpdate()
          }, A.isWithContent = function () {
            return Boolean(this.getTitle())
          }, A.addAttachmentClass = function (e) {
            t(this.getTipElement()).addClass("bs-tooltip-" + e)
          }, A.getTipElement = function () {
            return this.tip = this.tip || t(this.config.template)[0], this.tip
          }, A.setContent = function () {
            var e = t(this.getTipElement());
            this.setElementContent(e.find(v), this.getTitle()), e.removeClass(m + " " + p)
          }, A.setElementContent = function (e, n) {
            var i = this.config.html;
            "object" == typeof n && (n.nodeType || n.jquery) ? i ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()) : e[i ? "html" : "text"](n)
          }, A.getTitle = function () {
            var t = this.element.getAttribute("data-original-title");
            return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
          }, A._getAttachment = function (t) {
            return u[t.toUpperCase()]
          }, A._setListeners = function () {
            var e = this;
            this.config.trigger.split(" ").forEach(function (n) {
              if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
                return e.toggle(t)
              });
              else if (n !== I) {
                var i = n === T ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                  s = n === T ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                t(e.element).on(i, e.config.selector, function (t) {
                  return e._enter(t)
                }).on(s, e.config.selector, function (t) {
                  return e._leave(t)
                })
              }
              t(e.element).closest(".modal").on("hide.bs.modal", function () {
                return e.hide()
              })
            }), this.config.selector ? this.config = r({}, this.config, {
              trigger: "manual",
              selector: ""
            }) : this._fixTitle()
          }, A._fixTitle = function () {
            var t = typeof this.element.getAttribute("data-original-title");
            (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
          }, A._enter = function (e, n) {
            var i = this.constructor.DATA_KEY;
            (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? y : T] = !0), t(n.getTipElement()).hasClass(p) || n._hoverState === d ? n._hoverState = d : (clearTimeout(n._timeout), n._hoverState = d, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () {
              n._hoverState === d && n.show()
            }, n.config.delay.show) : n.show())
          }, A._leave = function (e, n) {
            var i = this.constructor.DATA_KEY;
            (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? y : T] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = _, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () {
              n._hoverState === _ && n.hide()
            }, n.config.delay.hide) : n.hide())
          }, A._isWithActiveTrigger = function () {
            for (var t in this._activeTrigger)
              if (this._activeTrigger[t]) return !0;
            return !1
          }, A._getConfig = function (n) {
            return "number" == typeof (n = r({}, this.constructor.Default, t(this.element).data(), n)).delay && (n.delay = {
              show: n.delay,
              hide: n.delay
            }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), o.typeCheckConfig(e, n, this.constructor.DefaultType), n
          }, A._getDelegateConfig = function () {
            var t = {};
            if (this.config)
              for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
            return t
          }, A._cleanTipClass = function () {
            var e = t(this.getTipElement()),
              n = e.attr("class").match(h);
            null !== n && n.length > 0 && e.removeClass(n.join(""))
          }, A._handlePopperPlacementChange = function (t) {
            this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
          }, A._fixTransition = function () {
            var e = this.getTipElement(),
              n = this.config.animation;
            null === e.getAttribute("x-placement") && (t(e).removeClass(m), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
          }, l._jQueryInterface = function (e) {
            return this.each(function () {
              var n = t(this).data(i),
                s = "object" == typeof e && e;
              if ((n || !/dispose|hide/.test(e)) && (n || (n = new l(this, s), t(this).data(i, n)), "string" == typeof e)) {
                if ("undefined" == typeof n[e]) throw new Error('No method named "' + e + '"');
                n[e]()
              }
            })
          }, s(l, null, [{
            key: "VERSION",
            get: function () {
              return "4.0.0-beta.3"
            }
          }, {
            key: "Default",
            get: function () {
              return f
            }
          }, {
            key: "NAME",
            get: function () {
              return e
            }
          }, {
            key: "DATA_KEY",
            get: function () {
              return i
            }
          }, {
            key: "Event",
            get: function () {
              return g
            }
          }, {
            key: "EVENT_KEY",
            get: function () {
              return a
            }
          }, {
            key: "DefaultType",
            get: function () {
              return c
            }
          }]), l
        }();
      return t.fn[e] = A._jQueryInterface, t.fn[e].Constructor = A, t.fn[e].noConflict = function () {
        return t.fn[e] = l, A._jQueryInterface
      }, A
    }(e),
    _ = function (t) {
      var e = "popover",
        n = "bs.popover",
        i = "." + n,
        o = t.fn[e],
        a = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        l = r({}, d.Default, {
          placement: "right",
          trigger: "click",
          content: "",
          template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        h = r({}, d.DefaultType, {
          content: "(string|element|function)"
        }),
        c = "fade",
        u = "show",
        f = ".popover-header",
        _ = ".popover-body",
        g = {
          HIDE: "hide" + i,
          HIDDEN: "hidden" + i,
          SHOW: "show" + i,
          SHOWN: "shown" + i,
          INSERTED: "inserted" + i,
          CLICK: "click" + i,
          FOCUSIN: "focusin" + i,
          FOCUSOUT: "focusout" + i,
          MOUSEENTER: "mouseenter" + i,
          MOUSELEAVE: "mouseleave" + i
        },
        m = function (r) {
          function o() {
            return r.apply(this, arguments) || this
          }! function (t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
          }(o, r);
          var d = o.prototype;
          return d.isWithContent = function () {
            return this.getTitle() || this._getContent()
          }, d.addAttachmentClass = function (e) {
            t(this.getTipElement()).addClass("bs-popover-" + e)
          }, d.getTipElement = function () {
            return this.tip = this.tip || t(this.config.template)[0], this.tip
          }, d.setContent = function () {
            var e = t(this.getTipElement());
            this.setElementContent(e.find(f), this.getTitle());
            var n = this._getContent();
            "function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(_), n), e.removeClass(c + " " + u)
          }, d._getContent = function () {
            return this.element.getAttribute("data-content") || this.config.content
          }, d._cleanTipClass = function () {
            var e = t(this.getTipElement()),
              n = e.attr("class").match(a);
            null !== n && n.length > 0 && e.removeClass(n.join(""))
          }, o._jQueryInterface = function (e) {
            return this.each(function () {
              var i = t(this).data(n),
                s = "object" == typeof e ? e : null;
              if ((i || !/destroy|hide/.test(e)) && (i || (i = new o(this, s), t(this).data(n, i)), "string" == typeof e)) {
                if ("undefined" == typeof i[e]) throw new Error('No method named "' + e + '"');
                i[e]()
              }
            })
          }, s(o, null, [{
            key: "VERSION",
            get: function () {
              return "4.0.0-beta.3"
            }
          }, {
            key: "Default",
            get: function () {
              return l
            }
          }, {
            key: "NAME",
            get: function () {
              return e
            }
          }, {
            key: "DATA_KEY",
            get: function () {
              return n
            }
          }, {
            key: "Event",
            get: function () {
              return g
            }
          }, {
            key: "EVENT_KEY",
            get: function () {
              return i
            }
          }, {
            key: "DefaultType",
            get: function () {
              return h
            }
          }]), o
        }(d);
      return t.fn[e] = m._jQueryInterface, t.fn[e].Constructor = m, t.fn[e].noConflict = function () {
        return t.fn[e] = o, m._jQueryInterface
      }, m
    }(e),
    g = function (t) {
      var e = "scrollspy",
        n = "bs.scrollspy",
        i = "." + n,
        a = t.fn[e],
        l = {
          offset: 10,
          method: "auto",
          target: ""
        },
        h = {
          offset: "number",
          method: "string",
          target: "(string|element)"
        },
        c = {
          ACTIVATE: "activate" + i,
          SCROLL: "scroll" + i,
          LOAD_DATA_API: "load" + i + ".data-api"
        },
        u = "dropdown-item",
        f = "active",
        d = {
          DATA_SPY: '[data-spy="scroll"]',
          ACTIVE: ".active",
          NAV_LIST_GROUP: ".nav, .list-group",
          NAV_LINKS: ".nav-link",
          NAV_ITEMS: ".nav-item",
          LIST_ITEMS: ".list-group-item",
          DROPDOWN: ".dropdown",
          DROPDOWN_ITEMS: ".dropdown-item",
          DROPDOWN_TOGGLE: ".dropdown-toggle"
        },
        _ = "offset",
        g = "position",
        m = function () {
          function a(e, n) {
            var i = this;
            this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " " + d.NAV_LINKS + "," + this._config.target + " " + d.LIST_ITEMS + "," + this._config.target + " " + d.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(c.SCROLL, function (t) {
              return i._process(t)
            }), this.refresh(), this._process()
          }
          var m = a.prototype;
          return m.refresh = function () {
            var e = this,
              n = this._scrollElement !== this._scrollElement.window ? g : _,
              i = "auto" === this._config.method ? n : this._config.method,
              s = i === g ? this._getScrollTop() : 0;
            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight();
            t.makeArray(t(this._selector)).map(function (e) {
              var n, r = o.getSelectorFromElement(e);
              if (r && (n = t(r)[0]), n) {
                var a = n.getBoundingClientRect();
                if (a.width || a.height) return [t(n)[i]().top + s, r]
              }
              return null
            }).filter(function (t) {
              return t
            }).sort(function (t, e) {
              return t[0] - e[0]
            }).forEach(function (t) {
              e._offsets.push(t[0]), e._targets.push(t[1])
            })
          }, m.dispose = function () {
            t.removeData(this._element, n), t(this._scrollElement).off(i), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
          }, m._getConfig = function (n) {
            if ("string" != typeof (n = r({}, l, n)).target) {
              var i = t(n.target).attr("id");
              i || (i = o.getUID(e), t(n.target).attr("id", i)), n.target = "#" + i
            }
            return o.typeCheckConfig(e, n, h), n
          }, m._getScrollTop = function () {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
          }, m._getScrollHeight = function () {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
          }, m._getOffsetHeight = function () {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
          }, m._process = function () {
            var t = this._getScrollTop() + this._config.offset,
              e = this._getScrollHeight(),
              n = this._config.offset + e - this._getOffsetHeight();
            if (this._scrollHeight !== e && this.refresh(), t >= n) {
              var i = this._targets[this._targets.length - 1];
              this._activeTarget !== i && this._activate(i)
            } else {
              if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
              for (var s = this._offsets.length; s--;) {
                this._activeTarget !== this._targets[s] && t >= this._offsets[s] && ("undefined" == typeof this._offsets[s + 1] || t < this._offsets[s + 1]) && this._activate(this._targets[s])
              }
            }
          }, m._activate = function (e) {
            this._activeTarget = e, this._clear();
            var n = this._selector.split(",");
            n = n.map(function (t) {
              return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
            });
            var i = t(n.join(","));
            i.hasClass(u) ? (i.closest(d.DROPDOWN).find(d.DROPDOWN_TOGGLE).addClass(f), i.addClass(f)) : (i.addClass(f), i.parents(d.NAV_LIST_GROUP).prev(d.NAV_LINKS + ", " + d.LIST_ITEMS).addClass(f), i.parents(d.NAV_LIST_GROUP).prev(d.NAV_ITEMS).children(d.NAV_LINKS).addClass(f)), t(this._scrollElement).trigger(c.ACTIVATE, {
              relatedTarget: e
            })
          }, m._clear = function () {
            t(this._selector).filter(d.ACTIVE).removeClass(f)
          }, a._jQueryInterface = function (e) {
            return this.each(function () {
              var i = t(this).data(n);
              if (i || (i = new a(this, "object" == typeof e && e), t(this).data(n, i)), "string" == typeof e) {
                if ("undefined" == typeof i[e]) throw new Error('No method named "' + e + '"');
                i[e]()
              }
            })
          }, s(a, null, [{
            key: "VERSION",
            get: function () {
              return "4.0.0-beta.3"
            }
          }, {
            key: "Default",
            get: function () {
              return l
            }
          }]), a
        }();
      return t(window).on(c.LOAD_DATA_API, function () {
        for (var e = t.makeArray(t(d.DATA_SPY)), n = e.length; n--;) {
          var i = t(e[n]);
          m._jQueryInterface.call(i, i.data())
        }
      }), t.fn[e] = m._jQueryInterface, t.fn[e].Constructor = m, t.fn[e].noConflict = function () {
        return t.fn[e] = a, m._jQueryInterface
      }, m
    }(e),
    m = function (t) {
      var e = "bs.tab",
        n = "." + e,
        i = t.fn.tab,
        r = {
          HIDE: "hide" + n,
          HIDDEN: "hidden" + n,
          SHOW: "show" + n,
          SHOWN: "shown" + n,
          CLICK_DATA_API: "click.bs.tab.data-api"
        },
        a = "dropdown-menu",
        l = "active",
        h = "disabled",
        c = "fade",
        u = "show",
        f = ".dropdown",
        d = ".nav, .list-group",
        _ = ".active",
        g = "> li > .active",
        m = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        p = ".dropdown-toggle",
        v = "> .dropdown-menu .active",
        E = function () {
          function n(t) {
            this._element = t
          }
          var i = n.prototype;
          return i.show = function () {
            var e = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(l) || t(this._element).hasClass(h))) {
              var n, i, s = t(this._element).closest(d)[0],
                a = o.getSelectorFromElement(this._element);
              if (s) {
                var c = "UL" === s.nodeName ? g : _;
                i = (i = t.makeArray(t(s).find(c)))[i.length - 1]
              }
              var u = t.Event(r.HIDE, {
                  relatedTarget: this._element
                }),
                f = t.Event(r.SHOW, {
                  relatedTarget: i
                });
              if (i && t(i).trigger(u), t(this._element).trigger(f), !f.isDefaultPrevented() && !u.isDefaultPrevented()) {
                a && (n = t(a)[0]), this._activate(this._element, s);
                var m = function () {
                  var n = t.Event(r.HIDDEN, {
                      relatedTarget: e._element
                    }),
                    s = t.Event(r.SHOWN, {
                      relatedTarget: i
                    });
                  t(i).trigger(n), t(e._element).trigger(s)
                };
                n ? this._activate(n, n.parentNode, m) : m()
              }
            }
          }, i.dispose = function () {
            t.removeData(this._element, e), this._element = null
          }, i._activate = function (e, n, i) {
            var s = this,
              r = ("UL" === n.nodeName ? t(n).find(g) : t(n).children(_))[0],
              a = i && o.supportsTransitionEnd() && r && t(r).hasClass(c),
              l = function () {
                return s._transitionComplete(e, r, i)
              };
            r && a ? t(r).one(o.TRANSITION_END, l).emulateTransitionEnd(150) : l()
          }, i._transitionComplete = function (e, n, i) {
            if (n) {
              t(n).removeClass(u + " " + l);
              var s = t(n.parentNode).find(v)[0];
              s && t(s).removeClass(l), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
            }
            if (t(e).addClass(l), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), o.reflow(e), t(e).addClass(u), e.parentNode && t(e.parentNode).hasClass(a)) {
              var r = t(e).closest(f)[0];
              r && t(r).find(p).addClass(l), e.setAttribute("aria-expanded", !0)
            }
            i && i()
          }, n._jQueryInterface = function (i) {
            return this.each(function () {
              var s = t(this),
                r = s.data(e);
              if (r || (r = new n(this), s.data(e, r)), "string" == typeof i) {
                if ("undefined" == typeof r[i]) throw new Error('No method named "' + i + '"');
                r[i]()
              }
            })
          }, s(n, null, [{
            key: "VERSION",
            get: function () {
              return "4.0.0-beta.3"
            }
          }]), n
        }();
      return t(document).on(r.CLICK_DATA_API, m, function (e) {
        e.preventDefault(), E._jQueryInterface.call(t(this), "show")
      }), t.fn.tab = E._jQueryInterface, t.fn.tab.Constructor = E, t.fn.tab.noConflict = function () {
        return t.fn.tab = i, E._jQueryInterface
      }, E
    }(e);
  ! function (t) {
    if ("undefined" == typeof t) throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
  }(e), t.Util = o, t.Alert = a, t.Button = l, t.Carousel = h, t.Collapse = c, t.Dropdown = u, t.Modal = f, t.Popover = _, t.Scrollspy = g, t.Tab = m, t.Tooltip = d, Object.defineProperty(t, "__esModule", {
    value: !0
  })
});
//# sourceMappingURL=bootstrap.min.js.map
// jQuery Mask Plugin v1.14.13
// github.com/igorescobar/jQuery-Mask-Plugin
var $jscomp = {
  scope: {},
  findInternal: function (a, l, d) {
    a instanceof String && (a = String(a));
    for (var p = a.length, h = 0; h < p; h++) {
      var b = a[h];
      if (l.call(d, b, h, a)) return {
        i: h,
        v: b
      }
    }
    return {
      i: -1,
      v: void 0
    }
  }
};
$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, l, d) {
  if (d.get || d.set) throw new TypeError("ES3 does not support getters and setters.");
  a != Array.prototype && a != Object.prototype && (a[l] = d.value)
};
$jscomp.getGlobal = function (a) {
  return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function (a, l, d, p) {
  if (l) {
    d = $jscomp.global;
    a = a.split(".");
    for (p = 0; p < a.length - 1; p++) {
      var h = a[p];
      h in d || (d[h] = {});
      d = d[h]
    }
    a = a[a.length - 1];
    p = d[a];
    l = l(p);
    l != p && null != l && $jscomp.defineProperty(d, a, {
      configurable: !0,
      writable: !0,
      value: l
    })
  }
};
$jscomp.polyfill("Array.prototype.find", function (a) {
  return a ? a : function (a, d) {
    return $jscomp.findInternal(this, a, d).v
  }
}, "es6-impl", "es3");
(function (a, l, d) {
  "function" === typeof define && define.amd ? define(["jquery"], a) : "object" === typeof exports ? module.exports = a(require("jquery")) : a(l || d)
})(function (a) {
  var l = function (b, e, f) {
    var c = {
      invalid: [],
      getCaret: function () {
        try {
          var a, r = 0,
            g = b.get(0),
            e = document.selection,
            f = g.selectionStart;
          if (e && -1 === navigator.appVersion.indexOf("MSIE 10")) a = e.createRange(), a.moveStart("character", -c.val().length), r = a.text.length;
          else if (f || "0" === f) r = f;
          return r
        } catch (C) {}
      },
      setCaret: function (a) {
        try {
          if (b.is(":focus")) {
            var c,
              g = b.get(0);
            g.setSelectionRange ? g.setSelectionRange(a, a) : (c = g.createTextRange(), c.collapse(!0), c.moveEnd("character", a), c.moveStart("character", a), c.select())
          }
        } catch (B) {}
      },
      events: function () {
        b.on("keydown.mask", function (a) {
          b.data("mask-keycode", a.keyCode || a.which);
          b.data("mask-previus-value", b.val());
          b.data("mask-previus-caret-pos", c.getCaret());
          c.maskDigitPosMapOld = c.maskDigitPosMap
        }).on(a.jMaskGlobals.useInput ? "input.mask" : "keyup.mask", c.behaviour).on("paste.mask drop.mask", function () {
          setTimeout(function () {
              b.keydown().keyup()
            },
            100)
        }).on("change.mask", function () {
          b.data("changed", !0)
        }).on("blur.mask", function () {
          d === c.val() || b.data("changed") || b.trigger("change");
          b.data("changed", !1)
        }).on("blur.mask", function () {
          d = c.val()
        }).on("focus.mask", function (b) {
          !0 === f.selectOnFocus && a(b.target).select()
        }).on("focusout.mask", function () {
          f.clearIfNotMatch && !h.test(c.val()) && c.val("")
        })
      },
      getRegexMask: function () {
        for (var a = [], b, c, f, n, d = 0; d < e.length; d++)(b = m.translation[e.charAt(d)]) ? (c = b.pattern.toString().replace(/.{1}$|^.{1}/g, ""), f = b.optional,
          (b = b.recursive) ? (a.push(e.charAt(d)), n = {
            digit: e.charAt(d),
            pattern: c
          }) : a.push(f || b ? c + "?" : c)) : a.push(e.charAt(d).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
        a = a.join("");
        n && (a = a.replace(new RegExp("(" + n.digit + "(.*" + n.digit + ")?)"), "($1)?").replace(new RegExp(n.digit, "g"), n.pattern));
        return new RegExp(a)
      },
      destroyEvents: function () {
        b.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))
      },
      val: function (a) {
        var c = b.is("input") ? "val" : "text";
        if (0 < arguments.length) {
          if (b[c]() !== a) b[c](a);
          c = b
        } else c = b[c]();
        return c
      },
      calculateCaretPosition: function () {
        var a = b.data("mask-previus-value") || "",
          e = c.getMasked(),
          g = c.getCaret();
        if (a !== e) {
          var f = b.data("mask-previus-caret-pos") || 0,
            e = e.length,
            d = a.length,
            m = a = 0,
            h = 0,
            l = 0,
            k;
          for (k = g; k < e && c.maskDigitPosMap[k]; k++) m++;
          for (k = g - 1; 0 <= k && c.maskDigitPosMap[k]; k--) a++;
          for (k = g - 1; 0 <= k; k--) c.maskDigitPosMap[k] && h++;
          for (k = f - 1; 0 <= k; k--) c.maskDigitPosMapOld[k] && l++;
          g > d ? g = 10 * e : f >= g && f !== d ? c.maskDigitPosMapOld[g] || (f = g, g = g - (l - h) - a, c.maskDigitPosMap[g] && (g = f)) : g > f &&
            (g = g + (h - l) + m)
        }
        return g
      },
      behaviour: function (f) {
        f = f || window.event;
        c.invalid = [];
        var e = b.data("mask-keycode");
        if (-1 === a.inArray(e, m.byPassKeys)) {
          var e = c.getMasked(),
            g = c.getCaret();
          setTimeout(function () {
            c.setCaret(c.calculateCaretPosition())
          }, 10);
          c.val(e);
          c.setCaret(g);
          return c.callbacks(f)
        }
      },
      getMasked: function (a, b) {
        var g = [],
          d = void 0 === b ? c.val() : b + "",
          n = 0,
          h = e.length,
          q = 0,
          l = d.length,
          k = 1,
          r = "push",
          p = -1,
          t = 0,
          y = [],
          v, z;
        f.reverse ? (r = "unshift", k = -1, v = 0, n = h - 1, q = l - 1, z = function () {
          return -1 < n && -1 < q
        }) : (v = h - 1, z = function () {
          return n <
            h && q < l
        });
        for (var A; z();) {
          var x = e.charAt(n),
            w = d.charAt(q),
            u = m.translation[x];
          if (u) w.match(u.pattern) ? (g[r](w), u.recursive && (-1 === p ? p = n : n === v && n !== p && (n = p - k), v === p && (n -= k)), n += k) : w === A ? (t--, A = void 0) : u.optional ? (n += k, q -= k) : u.fallback ? (g[r](u.fallback), n += k, q -= k) : c.invalid.push({
            p: q,
            v: w,
            e: u.pattern
          }), q += k;
          else {
            if (!a) g[r](x);
            w === x ? (y.push(q), q += k) : (A = x, y.push(q + t), t++);
            n += k
          }
        }
        d = e.charAt(v);
        h !== l + 1 || m.translation[d] || g.push(d);
        g = g.join("");
        c.mapMaskdigitPositions(g, y, l);
        return g
      },
      mapMaskdigitPositions: function (a,
        b, e) {
        a = f.reverse ? a.length - e : 0;
        c.maskDigitPosMap = {};
        for (e = 0; e < b.length; e++) c.maskDigitPosMap[b[e] + a] = 1
      },
      callbacks: function (a) {
        var h = c.val(),
          g = h !== d,
          m = [h, a, b, f],
          q = function (a, b, c) {
            "function" === typeof f[a] && b && f[a].apply(this, c)
          };
        q("onChange", !0 === g, m);
        q("onKeyPress", !0 === g, m);
        q("onComplete", h.length === e.length, m);
        q("onInvalid", 0 < c.invalid.length, [h, a, b, c.invalid, f])
      }
    };
    b = a(b);
    var m = this,
      d = c.val(),
      h;
    e = "function" === typeof e ? e(c.val(), void 0, b, f) : e;
    m.mask = e;
    m.options = f;
    m.remove = function () {
      var a = c.getCaret();
      c.destroyEvents();
      c.val(m.getCleanVal());
      c.setCaret(a);
      return b
    };
    m.getCleanVal = function () {
      return c.getMasked(!0)
    };
    m.getMaskedVal = function (a) {
      return c.getMasked(!1, a)
    };
    m.init = function (d) {
      d = d || !1;
      f = f || {};
      m.clearIfNotMatch = a.jMaskGlobals.clearIfNotMatch;
      m.byPassKeys = a.jMaskGlobals.byPassKeys;
      m.translation = a.extend({}, a.jMaskGlobals.translation, f.translation);
      m = a.extend(!0, {}, m, f);
      h = c.getRegexMask();
      if (d) c.events(), c.val(c.getMasked());
      else {
        f.placeholder && b.attr("placeholder", f.placeholder);
        b.data("mask") &&
          b.attr("autocomplete", "off");
        d = 0;
        for (var l = !0; d < e.length; d++) {
          var g = m.translation[e.charAt(d)];
          if (g && g.recursive) {
            l = !1;
            break
          }
        }
        l && b.attr("maxlength", e.length);
        c.destroyEvents();
        c.events();
        d = c.getCaret();
        c.val(c.getMasked());
        c.setCaret(d)
      }
    };
    m.init(!b.is("input"))
  };
  a.maskWatchers = {};
  var d = function () {
      var b = a(this),
        e = {},
        f = b.attr("data-mask");
      b.attr("data-mask-reverse") && (e.reverse = !0);
      b.attr("data-mask-clearifnotmatch") && (e.clearIfNotMatch = !0);
      "true" === b.attr("data-mask-selectonfocus") && (e.selectOnFocus = !0);
      if (p(b, f, e)) return b.data("mask", new l(this, f, e))
    },
    p = function (b, e, f) {
      f = f || {};
      var c = a(b).data("mask"),
        d = JSON.stringify;
      b = a(b).val() || a(b).text();
      try {
        return "function" === typeof e && (e = e(b)), "object" !== typeof c || d(c.options) !== d(f) || c.mask !== e
      } catch (t) {}
    },
    h = function (a) {
      var b = document.createElement("div"),
        d;
      a = "on" + a;
      d = a in b;
      d || (b.setAttribute(a, "return;"), d = "function" === typeof b[a]);
      return d
    };
  a.fn.mask = function (b, d) {
    d = d || {};
    var e = this.selector,
      c = a.jMaskGlobals,
      h = c.watchInterval,
      c = d.watchInputs || c.watchInputs,
      t = function () {
        if (p(this, b, d)) return a(this).data("mask", new l(this, b, d))
      };
    a(this).each(t);
    e && "" !== e && c && (clearInterval(a.maskWatchers[e]), a.maskWatchers[e] = setInterval(function () {
      a(document).find(e).each(t)
    }, h));
    return this
  };
  a.fn.masked = function (a) {
    return this.data("mask").getMaskedVal(a)
  };
  a.fn.unmask = function () {
    clearInterval(a.maskWatchers[this.selector]);
    delete a.maskWatchers[this.selector];
    return this.each(function () {
      var b = a(this).data("mask");
      b && b.remove().removeData("mask")
    })
  };
  a.fn.cleanVal = function () {
    return this.data("mask").getCleanVal()
  };
  a.applyDataMask = function (b) {
    b = b || a.jMaskGlobals.maskElements;
    (b instanceof a ? b : a(b)).filter(a.jMaskGlobals.dataMaskAttr).each(d)
  };
  h = {
    maskElements: "input,td,span,div",
    dataMaskAttr: "*[data-mask]",
    dataMask: !0,
    watchInterval: 300,
    watchInputs: !0,
    useInput: !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && h("input"),
    watchDataMask: !1,
    byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
    translation: {
      0: {
        pattern: /\d/
      },
      9: {
        pattern: /\d/,
        optional: !0
      },
      "#": {
        pattern: /\d/,
        recursive: !0
      },
      A: {
        pattern: /[a-zA-Z0-9]/
      },
      S: {
        pattern: /[a-zA-Z]/
      }
    }
  };
  a.jMaskGlobals = a.jMaskGlobals || {};
  h = a.jMaskGlobals = a.extend(!0, {}, h, a.jMaskGlobals);
  h.dataMask && a.applyDataMask();
  setInterval(function () {
    a.jMaskGlobals.watchDataMask && a.applyDataMask()
  }, h.watchInterval)
}, window.jQuery, window.Zepto);

/*!
 * scrollup v2.4.1
 * Url: http://markgoodyear.com/labs/scrollup/
 * Copyright (c) Mark Goodyear — @markgdyr — http://markgoodyear.com
 * License: MIT
 */
! function (l, o, e) {
  "use strict";
  l.fn.scrollUp = function (o) {
    l.data(e.body, "scrollUp") || (l.data(e.body, "scrollUp", !0), l.fn.scrollUp.init(o))
  }, l.fn.scrollUp.init = function (r) {
    var s, t, c, i, n, a, d, p = l.fn.scrollUp.settings = l.extend({}, l.fn.scrollUp.defaults, r),
      f = !1;
    switch (d = p.scrollTrigger ? l(p.scrollTrigger) : l("<a/>", {
      id: p.scrollName,
      href: "#top"
    }), p.scrollTitle && d.attr("title", p.scrollTitle), d.appendTo("body"), p.scrollImg || p.scrollTrigger || d.html(p.scrollText), d.css({
      display: "none",
      position: "fixed",
      zIndex: p.zIndex
    }), p.activeOverlay && l("<div/>", {
      id: p.scrollName + "-active"
    }).css({
      position: "absolute",
      top: p.scrollDistance + "px",
      width: "100%",
      borderTop: "1px dotted" + p.activeOverlay,
      zIndex: p.zIndex
    }).appendTo("body"), p.animation) {
      case "fade":
        s = "fadeIn", t = "fadeOut", c = p.animationSpeed;
        break;
      case "slide":
        s = "slideDown", t = "slideUp", c = p.animationSpeed;
        break;
      default:
        s = "show", t = "hide", c = 0
    }
    i = "top" === p.scrollFrom ? p.scrollDistance : l(e).height() - l(o).height() - p.scrollDistance, n = l(o).scroll(function () {
      l(o).scrollTop() > i ? f || (d[s](c), f = !0) : f && (d[t](c), f = !1)
    }), p.scrollTarget ? "number" == typeof p.scrollTarget ? a = p.scrollTarget : "string" == typeof p.scrollTarget && (a = Math.floor(l(p.scrollTarget).offset().top)) : a = 0, d.click(function (o) {
      o.preventDefault(), l("html, body").animate({
        scrollTop: a
      }, p.scrollSpeed, p.easingType)
    })
  }, l.fn.scrollUp.defaults = {
    scrollName: "scrollUp",
    scrollDistance: 300,
    scrollFrom: "top",
    scrollSpeed: 300,
    easingType: "linear",
    animation: "fade",
    animationSpeed: 200,
    scrollTrigger: !1,
    scrollTarget: !1,
    scrollText: "Scroll to top",
    scrollTitle: !1,
    scrollImg: !1,
    activeOverlay: !1,
    zIndex: 2147483647
  }, l.fn.scrollUp.destroy = function (r) {
    l.removeData(e.body, "scrollUp"), l("#" + l.fn.scrollUp.settings.scrollName).remove(), l("#" + l.fn.scrollUp.settings.scrollName + "-active").remove(), l.fn.jquery.split(".")[1] >= 7 ? l(o).off("scroll", r) : l(o).unbind("scroll", r)
  }, l.scrollUp = l.fn.scrollUp
}(jQuery, window, document);
/**
 * Owl Carousel v2.2.0
 * Copyright 2013-2016 David Deutsch
 * Licensed under MIT (https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE)
 */
! function (a, b, c, d) {
  function e(b, c) {
    this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
      time: null,
      target: null,
      pointer: null,
      stage: {
        start: null,
        current: null
      },
      direction: null
    }, this._states = {
      current: {},
      tags: {
        initializing: ["busy"],
        animating: ["busy"],
        dragging: ["interacting"]
      }
    }, a.each(["onResize", "onThrottledResize"], a.proxy(function (b, c) {
      this._handlers[c] = a.proxy(this[c], this)
    }, this)), a.each(e.Plugins, a.proxy(function (a, b) {
      this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
    }, this)), a.each(e.Workers, a.proxy(function (b, c) {
      this._pipe.push({
        filter: c.filter,
        run: a.proxy(c.run, this)
      })
    }, this)), this.setup(), this.initialize()
  }
  e.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    rewind: !1,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: b,
    fallbackEasing: "swing",
    info: !1,
    nestedItemSelector: !1,
    itemElement: "div",
    stageElement: "div",
    refreshClass: "owl-refresh",
    loadedClass: "owl-loaded",
    loadingClass: "owl-loading",
    rtlClass: "owl-rtl",
    responsiveClass: "owl-responsive",
    dragClass: "owl-drag",
    itemClass: "owl-item",
    stageClass: "owl-stage",
    stageOuterClass: "owl-stage-outer",
    grabClass: "owl-grab"
  }, e.Width = {
    Default: "default",
    Inner: "inner",
    Outer: "outer"
  }, e.Type = {
    Event: "event",
    State: "state"
  }, e.Plugins = {}, e.Workers = [{
    filter: ["width", "settings"],
    run: function () {
      this._width = this.$element.width()
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function (a) {
      a.current = this._items && this._items[this.relative(this._current)]
    }
  }, {
    filter: ["items", "settings"],
    run: function () {
      this.$stage.children(".cloned").remove()
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function (a) {
      var b = this.settings.margin || "",
        c = !this.settings.autoWidth,
        d = this.settings.rtl,
        e = {
          width: "auto",
          "margin-left": d ? b : "",
          "margin-right": d ? "" : b
        };
      !c && this.$stage.children().css(e), a.css = e
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function (a) {
      var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
        c = null,
        d = this._items.length,
        e = !this.settings.autoWidth,
        f = [];
      for (a.items = {
          merge: !1,
          width: b
        }; d--;) c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
      this._widths = f
    }
  }, {
    filter: ["items", "settings"],
    run: function () {
      var b = [],
        c = this._items,
        d = this.settings,
        e = Math.max(2 * d.items, 4),
        f = 2 * Math.ceil(c.length / 2),
        g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
        h = "",
        i = "";
      for (g /= 2; g--;) b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i;
      this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage)
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function () {
      for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
      this._coordinates = f
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function () {
      var a = this.settings.stagePadding,
        b = this._coordinates,
        c = {
          width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
          "padding-left": a || "",
          "padding-right": a || ""
        };
      this.$stage.css(c)
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function (a) {
      var b = this._coordinates.length,
        c = !this.settings.autoWidth,
        d = this.$stage.children();
      if (c && a.items.merge)
        for (; b--;) a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
      else c && (a.css.width = a.items.width, d.css(a.css))
    }
  }, {
    filter: ["items"],
    run: function () {
      this._coordinates.length < 1 && this.$stage.removeAttr("style")
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function (a) {
      a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current)
    }
  }, {
    filter: ["position"],
    run: function () {
      this.animate(this.coordinates(this._current))
    }
  }, {
    filter: ["width", "position", "items", "settings"],
    run: function () {
      var a, b, c, d, e = this.settings.rtl ? 1 : -1,
        f = 2 * this.settings.stagePadding,
        g = this.coordinates(this.current()) + f,
        h = g + this.width() * e,
        i = [];
      for (c = 0, d = this._coordinates.length; d > c; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
      this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
    }
  }], e.prototype.initialize = function () {
    if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
      var b, c, e;
      b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && 0 >= e && this.preloadAutoWidthImages(b)
    }
    this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
  }, e.prototype.setup = function () {
    var b = this.viewport(),
      c = this.options.responsive,
      d = -1,
      e = null;
    c ? (a.each(c, function (a) {
      b >= a && a > d && (d = Number(a))
    }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", {
      property: {
        name: "settings",
        value: e
      }
    }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
      property: {
        name: "settings",
        value: this.settings
      }
    })
  }, e.prototype.optionsLogic = function () {
    this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
  }, e.prototype.prepare = function (b) {
    var c = this.trigger("prepare", {
      content: b
    });
    return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", {
      content: c.data
    }), c.data
  }, e.prototype.update = function () {
    for (var b = 0, c = this._pipe.length, d = a.proxy(function (a) {
        return this[a]
      }, this._invalidated), e = {}; c > b;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
    this._invalidated = {}, !this.is("valid") && this.enter("valid")
  }, e.prototype.width = function (a) {
    switch (a = a || e.Width.Default) {
      case e.Width.Inner:
      case e.Width.Outer:
        return this._width;
      default:
        return this._width - 2 * this.settings.stagePadding + this.settings.margin
    }
  }, e.prototype.refresh = function () {
    this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
  }, e.prototype.onThrottledResize = function () {
    b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
  }, e.prototype.onResize = function () {
    return this._items.length ? this._width === this.$element.width() ? !1 : this.$element.is(":visible") ? (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized"))) : !1 : !1
  }, e.prototype.registerEventHandlers = function () {
    a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
      return !1
    })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
  }, e.prototype.onDragStart = function (b) {
    var d = null;
    3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = {
      x: d[16 === d.length ? 12 : 4],
      y: d[16 === d.length ? 13 : 5]
    }) : (d = this.$stage.position(), d = {
      x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
      y: d.top
    }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function (b) {
      var d = this.difference(this._drag.pointer, this.pointer(b));
      a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"))
    }, this)))
  }, e.prototype.onDragMove = function (a) {
    var b = null,
      c = null,
      d = null,
      e = this.difference(this._drag.pointer, this.pointer(a)),
      f = this.difference(this._drag.stage.start, e);
    this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x))
  }, e.prototype.onDragEnd = function (b) {
    var d = this.difference(this._drag.pointer, this.pointer(b)),
      e = this._drag.stage.current,
      f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
    a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
      return !1
    })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
  }, e.prototype.closest = function (b, c) {
    var d = -1,
      e = 30,
      f = this.width(),
      g = this.coordinates();
    return this.settings.freeDrag || a.each(g, a.proxy(function (a, h) {
      return "left" === c && b > h - e && h + e > b ? d = a : "right" === c && b > h - f - e && h - f + e > b ? d = a + 1 : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a), -1 === d
    }, this)), this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? d = b = this.minimum() : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())), d
  }, e.prototype.animate = function (b) {
    var c = this.speed() > 0;
    this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
      transform: "translate3d(" + b + "px,0px,0px)",
      transition: this.speed() / 1e3 + "s"
    }) : c ? this.$stage.animate({
      left: b + "px"
    }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
      left: b + "px"
    })
  }, e.prototype.is = function (a) {
    return this._states.current[a] && this._states.current[a] > 0
  }, e.prototype.current = function (a) {
    if (a === d) return this._current;
    if (0 === this._items.length) return d;
    if (a = this.normalize(a), this._current !== a) {
      var b = this.trigger("change", {
        property: {
          name: "position",
          value: a
        }
      });
      b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
        property: {
          name: "position",
          value: this._current
        }
      })
    }
    return this._current
  }, e.prototype.invalidate = function (b) {
    return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function (a, b) {
      return b
    })
  }, e.prototype.reset = function (a) {
    a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
  }, e.prototype.normalize = function (a, b) {
    var c = this._items.length,
      e = b ? 0 : this._clones.length;
    return !this.isNumeric(a) || 1 > c ? a = d : (0 > a || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a
  }, e.prototype.relative = function (a) {
    return a -= this._clones.length / 2, this.normalize(a, !0)
  }, e.prototype.maximum = function (a) {
    var b, c, d, e = this.settings,
      f = this._coordinates.length;
    if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
    else if (e.autoWidth || e.merge) {
      for (b = this._items.length, c = this._items[--b].width(), d = this.$element.width(); b-- && (c += this._items[b].width() + this.settings.margin, !(c > d)););
      f = b + 1
    } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
    return a && (f -= this._clones.length / 2), Math.max(f, 0)
  }, e.prototype.minimum = function (a) {
    return a ? 0 : this._clones.length / 2
  }, e.prototype.items = function (a) {
    return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
  }, e.prototype.mergers = function (a) {
    return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
  }, e.prototype.clones = function (b) {
    var c = this._clones.length / 2,
      e = c + this._items.length,
      f = function (a) {
        return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
      };
    return b === d ? a.map(this._clones, function (a, b) {
      return f(b)
    }) : a.map(this._clones, function (a, c) {
      return a === b ? f(c) : null
    })
  }, e.prototype.speed = function (a) {
    return a !== d && (this._speed = a), this._speed
  }, e.prototype.coordinates = function (b) {
    var c, e = 1,
      f = b - 1;
    return b === d ? a.map(this._coordinates, a.proxy(function (a, b) {
      return this.coordinates(b)
    }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c))
  }, e.prototype.duration = function (a, b, c) {
    return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
  }, e.prototype.to = function (a, b) {
    var c = this.current(),
      d = null,
      e = a - this.relative(c),
      f = (e > 0) - (0 > e),
      g = this._items.length,
      h = this.minimum(),
      i = this.maximum();
    this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g), a = c + e, d = ((a - h) % g + g) % g + h, d !== a && i >= d - e && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.$element.is(":visible") && this.update()
  }, e.prototype.next = function (a) {
    a = a || !1, this.to(this.relative(this.current()) + 1, a)
  }, e.prototype.prev = function (a) {
    a = a || !1, this.to(this.relative(this.current()) - 1, a)
  }, e.prototype.onTransitionEnd = function (a) {
    return a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)) ? !1 : (this.leave("animating"), void this.trigger("translated"))
  }, e.prototype.viewport = function () {
    var d;
    if (this.options.responsiveBaseElement !== b) d = a(this.options.responsiveBaseElement).width();
    else if (b.innerWidth) d = b.innerWidth;
    else {
      if (!c.documentElement || !c.documentElement.clientWidth) throw "Can not detect viewport width.";
      d = c.documentElement.clientWidth
    }
    return d
  }, e.prototype.replace = function (b) {
    this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function () {
      return 1 === this.nodeType
    }).each(a.proxy(function (a, b) {
      b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
    }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
  }, e.prototype.add = function (b, c) {
    var e = this.relative(this._current);
    c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {
      content: b,
      position: c
    }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {
      content: b,
      position: c
    })
  }, e.prototype.remove = function (a) {
    a = this.normalize(a, !0), a !== d && (this.trigger("remove", {
      content: this._items[a],
      position: a
    }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
      content: null,
      position: a
    }))
  }, e.prototype.preloadAutoWidthImages = function (b) {
    b.each(a.proxy(function (b, c) {
      this.enter("pre-loading"), c = a(c), a(new Image).one("load", a.proxy(function (a) {
        c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
      }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
    }, this))
  }, e.prototype.destroy = function () {
    this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
    for (var d in this._plugins) this._plugins[d].destroy();
    this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
  }, e.prototype.op = function (a, b, c) {
    var d = this.settings.rtl;
    switch (b) {
      case "<":
        return d ? a > c : c > a;
      case ">":
        return d ? c > a : a > c;
      case ">=":
        return d ? c >= a : a >= c;
      case "<=":
        return d ? a >= c : c >= a
    }
  }, e.prototype.on = function (a, b, c, d) {
    a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
  }, e.prototype.off = function (a, b, c, d) {
    a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
  }, e.prototype.trigger = function (b, c, d, f, g) {
    var h = {
        item: {
          count: this._items.length,
          index: this.current()
        }
      },
      i = a.camelCase(a.grep(["on", b, d], function (a) {
        return a
      }).join("-").toLowerCase()),
      j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
        relatedTarget: this
      }, h, c));
    return this._supress[b] || (a.each(this._plugins, function (a, b) {
      b.onTrigger && b.onTrigger(j)
    }), this.register({
      type: e.Type.Event,
      name: b
    }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j
  }, e.prototype.enter = function (b) {
    a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
      this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++
    }, this))
  }, e.prototype.leave = function (b) {
    a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
      this._states.current[b]--
    }, this))
  }, e.prototype.register = function (b) {
    if (b.type === e.Type.Event) {
      if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
        var c = a.event.special[b.name]._default;
        a.event.special[b.name]._default = function (a) {
          return !c || !c.apply || a.namespace && -1 !== a.namespace.indexOf("owl") ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
        }, a.event.special[b.name].owl = !0
      }
    } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function (c, d) {
      return a.inArray(c, this._states.tags[b.name]) === d
    }, this)))
  }, e.prototype.suppress = function (b) {
    a.each(b, a.proxy(function (a, b) {
      this._supress[b] = !0
    }, this))
  }, e.prototype.release = function (b) {
    a.each(b, a.proxy(function (a, b) {
      delete this._supress[b]
    }, this))
  }, e.prototype.pointer = function (a) {
    var c = {
      x: null,
      y: null
    };
    return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c
  }, e.prototype.isNumeric = function (a) {
    return !isNaN(parseFloat(a))
  }, e.prototype.difference = function (a, b) {
    return {
      x: a.x - b.x,
      y: a.y - b.y
    }
  }, a.fn.owlCarousel = function (b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return this.each(function () {
      var d = a(this),
        f = d.data("owl.carousel");
      f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (b, c) {
        f.register({
          type: e.Type.Event,
          name: c
        }), f.$element.on(c + ".owl.carousel.core", a.proxy(function (a) {
          a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]))
        }, f))
      })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
    })
  }, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
  var e = function (b) {
    this._core = b, this._interval = null, this._visible = null, this._handlers = {
      "initialized.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.autoRefresh && this.watch()
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
  };
  e.Defaults = {
    autoRefresh: !0,
    autoRefreshInterval: 500
  }, e.prototype.watch = function () {
    this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
  }, e.prototype.refresh = function () {
    this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
  }, e.prototype.destroy = function () {
    var a, c;
    b.clearInterval(this._interval);
    for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
    for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
  var e = function (b) {
    this._core = b, this._loaded = [], this._handlers = {
      "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (b) {
        if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
          for (var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && -1 * e || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function (a, b) {
              this.load(b)
            }, this); f++ < e;) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
  };
  e.Defaults = {
    lazyLoad: !1
  }, e.prototype.load = function (c) {
    var d = this._core.$stage.children().eq(c),
      e = d && d.find(".owl-lazy");
    !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function (c, d) {
      var e, f = a(d),
        g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
      this._core.trigger("load", {
        element: f,
        url: g
      }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function () {
        f.css("opacity", 1), this._core.trigger("loaded", {
          element: f,
          url: g
        }, "lazy")
      }, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function () {
        f.css({
          "background-image": "url(" + g + ")",
          opacity: "1"
        }), this._core.trigger("loaded", {
          element: f,
          url: g
        }, "lazy")
      }, this), e.src = g)
    }, this)), this._loaded.push(d.get(0)))
  }, e.prototype.destroy = function () {
    var a, b;
    for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
    for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
  var e = function (b) {
    this._core = b, this._handlers = {
      "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.autoHeight && this.update()
      }, this),
      "changed.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update()
      }, this),
      "loaded.owl.lazy": a.proxy(function (a) {
        a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
  };
  e.Defaults = {
    autoHeight: !1,
    autoHeightClass: "owl-height"
  }, e.prototype.update = function () {
    var b = this._core._current,
      c = b + this._core.settings.items,
      d = this._core.$stage.children().toArray().slice(b, c),
      e = [],
      f = 0;
    a.each(d, function (b, c) {
      e.push(a(c).height())
    }), f = Math.max.apply(null, e), this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)
  }, e.prototype.destroy = function () {
    var a, b;
    for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
    for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
  var e = function (b) {
    this._core = b, this._videos = {}, this._playing = null, this._handlers = {
      "initialized.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.register({
          type: "state",
          name: "playing",
          tags: ["interacting"]
        })
      }, this),
      "resize.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
      }, this),
      "refreshed.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
      }, this),
      "changed.owl.carousel": a.proxy(function (a) {
        a.namespace && "position" === a.property.name && this._playing && this.stop()
      }, this),
      "prepared.owl.carousel": a.proxy(function (b) {
        if (b.namespace) {
          var c = a(b.content).find(".owl-video");
          c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
        }
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function (a) {
      this.play(a)
    }, this))
  };
  e.Defaults = {
    video: !1,
    videoHeight: !1,
    videoWidth: !1
  }, e.prototype.fetch = function (a, b) {
    var c = function () {
        return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube"
      }(),
      d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
      e = a.attr("data-width") || this._core.settings.videoWidth,
      f = a.attr("data-height") || this._core.settings.videoHeight,
      g = a.attr("href");
    if (!g) throw new Error("Missing video URL.");
    if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
    else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
    else {
      if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
      c = "vzaar"
    }
    d = d[6], this._videos[g] = {
      type: c,
      id: d,
      width: e,
      height: f
    }, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
  }, e.prototype.thumbnail = function (b, c) {
    var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
      h = b.find("img"),
      i = "src",
      j = "",
      k = this._core.settings,
      l = function (a) {
        e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e)
      };
    return b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length ? (l(h.attr(i)), h.remove(), !1) : void("youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({
      type: "GET",
      url: "//vimeo.com/api/v2/video/" + c.id + ".json",
      jsonp: "callback",
      dataType: "jsonp",
      success: function (a) {
        f = a[0].thumbnail_large, l(f)
      }
    }) : "vzaar" === c.type && a.ajax({
      type: "GET",
      url: "//vzaar.com/api/videos/" + c.id + ".json",
      jsonp: "callback",
      dataType: "jsonp",
      success: function (a) {
        f = a.framegrab_url, l(f)
      }
    }))
  }, e.prototype.stop = function () {
    this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
  }, e.prototype.play = function (b) {
    var c, d = a(b.target),
      e = d.closest("." + this._core.settings.itemClass),
      f = this._videos[e.attr("data-video")],
      g = f.width || "100%",
      h = f.height || this._core.$stage.height();
    this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'), a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"))
  }, e.prototype.isInFullScreen = function () {
    var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
    return b && a(b).parent().hasClass("owl-video-frame")
  }, e.prototype.destroy = function () {
    var a, b;
    this._core.$element.off("click.owl.video");
    for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
    for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.Video = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
  var e = function (b) {
    this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
      "change.owl.carousel": a.proxy(function (a) {
        a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
      }, this),
      "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
        a.namespace && (this.swapping = "translated" == a.type)
      }, this),
      "translate.owl.carousel": a.proxy(function (a) {
        a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
      }, this)
    }, this.core.$element.on(this.handlers)
  };
  e.Defaults = {
    animateOut: !1,
    animateIn: !1
  }, e.prototype.swap = function () {
    if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
      this.core.speed(0);
      var b, c = a.proxy(this.clear, this),
        d = this.core.$stage.children().eq(this.previous),
        e = this.core.$stage.children().eq(this.next),
        f = this.core.settings.animateIn,
        g = this.core.settings.animateOut;
      this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({
        left: b + "px"
      }).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
    }
  }, e.prototype.clear = function (b) {
    a(b.target).css({
      left: ""
    }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
  }, e.prototype.destroy = function () {
    var a, b;
    for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
    for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
  }, a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
  var e = function (b) {
    this._core = b, this._timeout = null, this._paused = !1, this._handlers = {
      "changed.owl.carousel": a.proxy(function (a) {
        a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
      }, this),
      "initialized.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.autoplay && this.play()
      }, this),
      "play.owl.autoplay": a.proxy(function (a, b, c) {
        a.namespace && this.play(b, c)
      }, this),
      "stop.owl.autoplay": a.proxy(function (a) {
        a.namespace && this.stop()
      }, this),
      "mouseover.owl.autoplay": a.proxy(function () {
        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
      }, this),
      "mouseleave.owl.autoplay": a.proxy(function () {
        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
      }, this),
      "touchstart.owl.core": a.proxy(function () {
        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
      }, this),
      "touchend.owl.core": a.proxy(function () {
        this._core.settings.autoplayHoverPause && this.play()
      }, this)
    }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options)
  };
  e.Defaults = {
    autoplay: !1,
    autoplayTimeout: 5e3,
    autoplayHoverPause: !1,
    autoplaySpeed: !1
  }, e.prototype.play = function (a, b) {
    this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
  }, e.prototype._getNextTimeout = function (d, e) {
    return this._timeout && b.clearTimeout(this._timeout), b.setTimeout(a.proxy(function () {
      this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed)
    }, this), d || this._core.settings.autoplayTimeout)
  }, e.prototype._setAutoPlayInterval = function () {
    this._timeout = this._getNextTimeout()
  }, e.prototype.stop = function () {
    this._core.is("rotating") && (b.clearTimeout(this._timeout), this._core.leave("rotating"))
  }, e.prototype.pause = function () {
    this._core.is("rotating") && (this._paused = !0)
  }, e.prototype.destroy = function () {
    var a, b;
    this.stop();
    for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
    for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
  "use strict";
  var e = function (b) {
    this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
      next: this._core.next,
      prev: this._core.prev,
      to: this._core.to
    }, this._handlers = {
      "prepared.owl.carousel": a.proxy(function (b) {
        b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
      }, this),
      "added.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
      }, this),
      "remove.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
      }, this),
      "changed.owl.carousel": a.proxy(function (a) {
        a.namespace && "position" == a.property.name && this.draw()
      }, this),
      "initialized.owl.carousel": a.proxy(function (a) {
        a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
      }, this),
      "refreshed.owl.carousel": a.proxy(function (a) {
        a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
  };
  e.Defaults = {
    nav: !1,
    navText: ["prev", "next"],
    navSpeed: !1,
    navElement: "div",
    navContainer: !1,
    navContainerClass: "owl-nav",
    navClass: ["owl-prev", "owl-next"],
    slideBy: 1,
    dotClass: "owl-dot",
    dotsClass: "owl-dots",
    dots: !0,
    dotsEach: !1,
    dotsData: !1,
    dotsSpeed: !1,
    dotsContainer: !1
  }, e.prototype.initialize = function () {
    var b, c = this._core.settings;
    this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function (a) {
      this.prev(c.navSpeed)
    }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function (a) {
      this.next(c.navSpeed)
    }, this)), c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", a.proxy(function (b) {
      var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
      b.preventDefault(), this.to(d, c.dotsSpeed)
    }, this));
    for (b in this._overrides) this._core[b] = a.proxy(this[b], this)
  }, e.prototype.destroy = function () {
    var a, b, c, d;
    for (a in this._handlers) this.$element.off(a, this._handlers[a]);
    for (b in this._controls) this._controls[b].remove();
    for (d in this.overides) this._core[d] = this._overrides[d];
    for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
  }, e.prototype.update = function () {
    var a, b, c, d = this._core.clones().length / 2,
      e = d + this._core.items().length,
      f = this._core.maximum(!0),
      g = this._core.settings,
      h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
    if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy)
      for (this._pages = [], a = d, b = 0, c = 0; e > a; a++) {
        if (b >= h || 0 === b) {
          if (this._pages.push({
              start: Math.min(f, a - d),
              end: a - d + h - 1
            }), Math.min(f, a - d) === f) break;
          b = 0, ++c
        }
        b += this._core.mergers(this._core.relative(a))
      }
  }, e.prototype.draw = function () {
    var b, c = this._core.settings,
      d = this._core.items().length <= c.items,
      e = this._core.relative(this._core.current()),
      f = c.loop || c.rewind;
    this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : 0 > b && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
  }, e.prototype.onTrigger = function (b) {
    var c = this._core.settings;
    b.page = {
      index: a.inArray(this.current(), this._pages),
      count: this._pages.length,
      size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
    }
  }, e.prototype.current = function () {
    var b = this._core.relative(this._core.current());
    return a.grep(this._pages, a.proxy(function (a, c) {
      return a.start <= b && a.end >= b
    }, this)).pop()
  }, e.prototype.getPosition = function (b) {
    var c, d, e = this._core.settings;
    return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
  }, e.prototype.next = function (b) {
    a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
  }, e.prototype.prev = function (b) {
    a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
  }, e.prototype.to = function (b, c, d) {
    var e;
    !d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c)
  }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
  "use strict";
  var e = function (c) {
    this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
      "initialized.owl.carousel": a.proxy(function (c) {
        c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
      }, this),
      "prepared.owl.carousel": a.proxy(function (b) {
        if (b.namespace) {
          var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
          if (!c) return;
          this._hashes[c] = b.content
        }
      }, this),
      "changed.owl.carousel": a.proxy(function (c) {
        if (c.namespace && "position" === c.property.name) {
          var d = this._core.items(this._core.relative(this._core.current())),
            e = a.map(this._hashes, function (a, b) {
              return a === d ? b : null
            }).join();
          if (!e || b.location.hash.slice(1) === e) return;
          b.location.hash = e
        }
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function (a) {
      var c = b.location.hash.substring(1),
        e = this._core.$stage.children(),
        f = this._hashes[c] && e.index(this._hashes[c]);
      f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
    }, this))
  };
  e.Defaults = {
    URLhashListener: !1
  }, e.prototype.destroy = function () {
    var c, d;
    a(b).off("hashchange.owl.navigation");
    for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
    for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
  function e(b, c) {
    var e = !1,
      f = b.charAt(0).toUpperCase() + b.slice(1);
    return a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
      return g[b] !== d ? (e = c ? b : !0, !1) : void 0
    }), e
  }

  function f(a) {
    return e(a, !0)
  }
  var g = a("<support>").get(0).style,
    h = "Webkit Moz O ms".split(" "),
    i = {
      transition: {
        end: {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd",
          transition: "transitionend"
        }
      },
      animation: {
        end: {
          WebkitAnimation: "webkitAnimationEnd",
          MozAnimation: "animationend",
          OAnimation: "oAnimationEnd",
          animation: "animationend"
        }
      }
    },
    j = {
      csstransforms: function () {
        return !!e("transform")
      },
      csstransforms3d: function () {
        return !!e("perspective")
      },
      csstransitions: function () {
        return !!e("transition")
      },
      cssanimations: function () {
        return !!e("animation")
      }
    };
  j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);
'use strict';

$('.partners').owlCarousel({
  loop: true,
  responsiveClass: true,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    465: {
      items: 2
    },
    768: {
      items: 4,
      loop: false
    }
  }
})
$('.services__slider').owlCarousel({
  loop: false,
  dots: true,
  nav: true,
  responsive: {
    0: {
      items: 1,
      loop: true,
      center: true
    },
    610: {
      loop: true,
      items: 1
    },
    768: {
      margin: 0,
      loop: true,
      items: 1
    },

    1210: {
      slideBy: 1,
      loop: true,
      autoWidth: true,
      items: 1
    }
  },
  onInitialized: function () {
    var dot = document.querySelectorAll('.services .owl-dot');
    var maxDot = Math.max(dot.length);

    var sliderAct = document.querySelectorAll('.services .owl-item.active');
    sliderAct[0].classList.add('custom-act');

    for (var i = 0; i < dot.length; i++) {
      dot[i].innerHTML = '<b>' + '0' + (1 + i) + '</b> ' + '<span class="max-number">' + ' / 0' + maxDot + '</span>';
    }
  },
  onTranslated: function () {
    var sliderAct = document.querySelectorAll('.services .owl-item.active');
    var slideClone = document.querySelectorAll('.services .owl-item.cloned');
    var sliderCust = document.querySelectorAll('.services .owl-item');

    for (var i = 0; i < sliderCust.length; i++) {
      sliderCust[i].classList.remove('custom-act');
    }

    if (sliderAct[0].classList.contains('active') || slideClone[0].classList.contains('cloned')) {
      sliderAct[0].classList.add('custom-act');
    }

  },
  onChanged: function (e) {
    var idx = e.item.index - 2;
    if (idx === -1) {
      idx = $('.doing__block').length - 1;
    }
    if (idx === e.item.count) {
      idx = 0;
    }
    if (idx >= 0) {
      $('.doing__block').removeClass('active');
      $('.doing__block[data-number="' + idx + '"]').addClass('active')
    }
  }
})

$('.video-rev__slider').owlCarousel({
  loop: false,
  dots: true,
  nav: true,
  responsive: {
    0: {
      rtl: true,
      margin: 15,
      loop: true,
      items: 1,
      center: true
    },
    480: {
      rtl: true,
      loop: true,
      autoWidth: true,
      center: true
    },
    768: {
      rtl: true,
      slideBy: 1,
      loop: true,
      autoWidth: true,
      items: 1
    }
  },
  onInitialized: function () {
    var dot = document.querySelectorAll('.video-rev .owl-dot');
    var maxDot = Math.max(dot.length);

    var sliderAct = document.querySelectorAll('.video-rev .owl-item.active');
    sliderAct[0].classList.add('custom-act');

    for (var i = 0; i < dot.length; i++) {
      dot[i].innerHTML = '<span class="max-number">' + '0' + maxDot + ' / </span>' + '<b>' + '0' + (1 + i) + '</b>';
    }
  },
  onTranslated: function () {
    var sliderAct = document.querySelectorAll('.video-rev .owl-item.active');
    var slideClone = document.querySelectorAll('.video-rev .owl-item.cloned');
    var sliderCust = document.querySelectorAll('.video-rev .owl-item');

    for (var i = 0; i < sliderCust.length; i++) {
      sliderCust[i].classList.remove('custom-act');
    }

    if (sliderAct[0].classList.contains('active') || slideClone[0].classList.contains('cloned')) {
      sliderAct[0].classList.add('custom-act');
    }

  },
  onChanged: function (e) {
    $('.video-rev__img').click(function (evt) {
      var video_link = $(this).attr('data-video');
      var video_id = $(this).attr('data-target');
      $(video_id).attr('data-video', video_link);
    });
  }
})

$('.modal').on('show.bs.modal', function () {
  var videoLink = this.dataset['video'];
  var $iframe = $('iframe', this);
  $iframe.attr('src', videoLink);
});

$('.modal').on('hide.bs.modal', function () {
  var $iframe = $('iframe', this);
  $iframe.attr('src', null);
});

$('.process-slider').owlCarousel({
  loop: false,
  dots: true,
  nav: true,
  center: true,
  items: 1,

  onInitialized: function (e) {
    var itemsSlider = document.querySelectorAll('.process-slider');
    var count = e.item.count;

    function amountDots(dot) {
      var maxDot = Math.max(dot.length);
      for (var i = 0; i < dot.length; i++) {
        dot[i].innerHTML = '<b>' + '0' + (1 + i) + '</b>' + '<span class="max-number"> / ' + '0' + maxDot + ' </span>';
      }
    }

    for (var i = 0; i < itemsSlider.length; i++) {
      var dot = itemsSlider[i].querySelectorAll('.owl-dot');
      amountDots(dot)
    }

    // переписал из за поддержки IE
    //   itemsSlider.forEach(function(i) {
    //     var dot = i.querySelectorAll('.owl-dot')
    //     amountDots(dot)
    //   })

    //   if ($(e.target).find('.item').length === 1) {
    //       $(e.target).find(".process__column").addClass('process__column--width_full')
    //   }
    if ($('.process-slider .item').length === 1) {
      $(".process__column").addClass('process__column--width_full')
    }
  }
})

$('.doing__block:nth-child(1)').addClass('active');
$('.projects__item:nth-child(1) a').addClass('active');
/*$('#nav-tabContent .tab-pane').each(function(){
	if($(this).find('.main-works').length < 5) {
		$(this).find('.btn--more').hide();
	}	
});*/
$('#phone').mask('0 (000) 000 - 00 - 00');
/*$('#nav-tabContent .btn--more').click(function(){
$(this).parent().find('.main-works').each(function(){
	if($(this).not(":visible")) {
		$(this).fadeIn('fast').css('display', 'flex');
	}
});
$(this).hide();
});*/


(function () {

  var nav = $(".navigation__item .scroll");
  var linkDown = $("#link-down");

  function scroll(i) {
    i.click(function () {
      var elementClick = $(this).attr("href")
      var destination = $(elementClick).offset().top;
      jQuery("html:not(:animated),body:not(:animated)").animate({
        scrollTop: destination
      }, 800);
      document.body.style.overflow = 'auto';
      $('#nav-burger').removeClass('active');
      $('.menu-navigation').removeClass('menu-navigation--active');
      return false;
    });
  }

  scroll(linkDown);
  scroll(nav);
})();

// (function () {
//   var navBurger = document.querySelector('#nav-burger');
//   var nav = document.querySelector('#nav');

//   navBurger.addEventListener('click', function () {
//     navBurger.classList.toggle('active');
//     nav.classList.toggle('menu-navigation--active');

//     if (navBurger.classList.contains('active')) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }
//   });
// })();

(function () {
  var maychange = document.querySelectorAll('input[data-checkbox="may-change"]');

  maychange.forEach(function (i) {
    i.addEventListener('input', function () {
      var dataInput = this.getAttribute('data-input')
      if (this.value) {
        document.querySelector('div[data-input="' + dataInput + '"]').classList.add('active')
      } else {
        document.querySelector('div[data-input="' + dataInput + '"]').classList.remove('active')
      }
    })
  })

})();

$(document).ready(function () {


  var controls = {
    video: $("#video"),
    playpause: $("#playpause"),
    btn: $(".btn-play")

  };

  var video = controls.video[0];

  function videoPlay() {
    controls.btn.toggleClass("btn-play--close");

    //   if (video.paused || controls.btn.hasClass("btn-play--close")) {

    // var promise = document.querySelector('video').play();

    // if (promise !== undefined) {
    //   promise.then(_ => {
    //   	document.querySelector('video').play();
    //   }).catch(error => {
    //     // Autoplay was prevented.
    //     // Show a "Play" button so that user can start playback.
    //   });
    // }

    //   } else {
    //     document.querySelector('video').pause();
    //     controls.btn.css("z-index", "9");
    //   }
    if (video.paused || controls.btn.hasClass("btn-play--close")) {
      video.play();
      controls.btn.css("z-index", "-1");
    } else {
      video.pause();
      controls.btn.css("z-index", "9");
    }
  }

  controls.playpause.click(function () {
    videoPlay();
  });

  controls.btn.click(function () {
    videoPlay();
  });
});

// (function() {
//   if(!$("#video").length) {
//     return
//   }
//   var playpause = document.querySelector('#playpause');
//   var video = document.querySelector('#video');
//   var btnPlay = document.querySelector('.btn-play');

//   function playVideo(elem) {
//     elem.addEventListener('click', function() {
//     })
//   }

//   playVideo(playpause);
//   playVideo(btnPlay);

// })();

$(".sendform").submit(function (e) {
  var url = "/send.php"; // the script where you handle the form input.
  var sendform = $(this);
  $.ajax({
    type: "POST",
    url: url,
    data: $(this).serialize(), // serializes the form's elements.
    success: function (data) {
      sendform.html(data); // show response from the php script.
    }
  });
  e.preventDefault(); // avoid to execute the actual submit of the form.
});
$('.theme-btn').click(function () {
  $('.theme-modal').val($(this).attr('data-theme'));
});

(function () {
  if (window.innerWidth <= 480) {
    var works = document.querySelectorAll('.works');
    works.forEach(function (i) {
      i.querySelector('.works__column.works__column--4').addEventListener('click', function (evt) {
        i.classList.toggle('open-job');
      })
    })
  }
})();


! function (t) {
  var i = t(window);
  t.fn.visible = function (t, e, o) {
    if (!(this.length < 1)) {
      var r = this.length > 1 ? this.eq(0) : this,
        n = r.get(0),
        f = i.width(),
        h = i.height(),
        o = o ? o : "both",
        l = e === !0 ? n.offsetWidth * n.offsetHeight : !0;
      if ("function" == typeof n.getBoundingClientRect) {
        var g = n.getBoundingClientRect(),
          u = g.top >= 0 && g.top < h,
          s = g.bottom > 0 && g.bottom <= h,
          c = g.left >= 0 && g.left < f,
          a = g.right > 0 && g.right <= f,
          v = t ? u || s : u && s,
          b = t ? c || a : c && a;
        if ("both" === o) return l && v && b;
        if ("vertical" === o) return l && v;
        if ("horizontal" === o) return l && b
      } else {
        var d = i.scrollTop(),
          p = d + h,
          w = i.scrollLeft(),
          m = w + f,
          y = r.offset(),
          z = y.top,
          B = z + r.height(),
          C = y.left,
          R = C + r.width(),
          j = t === !0 ? B : z,
          q = t === !0 ? z : B,
          H = t === !0 ? R : C,
          L = t === !0 ? C : R;
        if ("both" === o) return !!l && p >= q && j >= d && m >= L && H >= w;
        if ("vertical" === o) return !!l && p >= q && j >= d;
        if ("horizontal" === o) return !!l && m >= L && H >= w
      }
    }
  }
}(jQuery);



function checkPosition() {
  if ($('#video').visible() == true) {
    if (!$('#video').next().hasClass('btn-play--close')) {
      $('#video').next().click();
    }
  }
}

$(document).ready(function () {
  //запускаем функцию проверки видимости элемента
  $(document).scroll(function () {
    checkPosition();
  });
  $(window).resize(function () {
    checkPosition();
  });
});

$(document).ready(function () {
  function mobiSlider() {
    if (screen.width < 481) {
      $('.works').addClass('owl-carousel');
      $('.works').owlCarousel({
        margin: 0,
        items: 1,
        autoWidth: false
      });
    }
  }
  mobiSlider();
  $(window).resize(function () {
    mobiSlider();
  });

  $(".projects .btn--more").on("click", function () {
    // временное решение, нужна загрузка после аякс
    setTimeout(function () {
      mobiSlider();
    }, 1000)
  })
});
