;(function(){
var f, aa = this;
function ba(a, b) {
  var c = a.split("."), d = aa;
  c[0] in d || !d.execScript || d.execScript("var " + c[0]);
  for (var e;c.length && (e = c.shift());) {
    c.length || void 0 === b ? d = d[e] ? d[e] : d[e] = {} : d[e] = b;
  }
}
function m(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
var ca = "closure_uid_" + (1E9 * Math.random() >>> 0), ea = 0;
function fa(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
;function ga(a, b) {
  null != a && this.append.apply(this, arguments);
}
ga.prototype.Ba = "";
ga.prototype.append = function(a, b, c) {
  this.Ba += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.Ba += arguments[d];
    }
  }
  return this;
};
ga.prototype.toString = function() {
  return this.Ba;
};
var ha, ia = null;
function ja() {
  return new q(null, 5, [ka, !0, la, !0, ma, !1, na, !1, oa, null], null);
}
function r(a) {
  return null != a && !1 !== a;
}
function ra(a) {
  return r(a) ? !1 : !0;
}
function s(a, b) {
  return a[m(null == b ? null : b)] ? !0 : a._ ? !0 : t ? !1 : null;
}
function sa(a) {
  return null == a ? null : a.constructor;
}
function u(a, b) {
  var c = sa(b), c = r(r(c) ? c.Qa : c) ? c.Pa : m(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function ta(a) {
  var b = a.Pa;
  return r(b) ? b : "" + w(a);
}
function x(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
var ua = {}, va = {};
function wa(a) {
  if (a ? a.I : a) {
    return a.I(a);
  }
  var b;
  b = wa[m(null == a ? null : a)];
  if (!b && (b = wa._, !b)) {
    throw u("ICounted.-count", a);
  }
  return b.call(null, a);
}
function xa(a) {
  if (a ? a.M : a) {
    return a.M(a);
  }
  var b;
  b = xa[m(null == a ? null : a)];
  if (!b && (b = xa._, !b)) {
    throw u("IEmptyableCollection.-empty", a);
  }
  return b.call(null, a);
}
function ya(a, b) {
  if (a ? a.H : a) {
    return a.H(a, b);
  }
  var c;
  c = ya[m(null == a ? null : a)];
  if (!c && (c = ya._, !c)) {
    throw u("ICollection.-conj", a);
  }
  return c.call(null, a, b);
}
var za = {}, y = function() {
  function a(a, b, c) {
    if (a ? a.Z : a) {
      return a.Z(a, b, c);
    }
    var h;
    h = y[m(null == a ? null : a)];
    if (!h && (h = y._, !h)) {
      throw u("IIndexed.-nth", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.N : a) {
      return a.N(a, b);
    }
    var c;
    c = y[m(null == a ? null : a)];
    if (!c && (c = y._, !c)) {
      throw u("IIndexed.-nth", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(d, c, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, d, c);
      case 3:
        return a.call(this, d, c, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), Aa = {};
function z(a) {
  if (a ? a.P : a) {
    return a.P(a);
  }
  var b;
  b = z[m(null == a ? null : a)];
  if (!b && (b = z._, !b)) {
    throw u("ISeq.-first", a);
  }
  return b.call(null, a);
}
function A(a) {
  if (a ? a.W : a) {
    return a.W(a);
  }
  var b;
  b = A[m(null == a ? null : a)];
  if (!b && (b = A._, !b)) {
    throw u("ISeq.-rest", a);
  }
  return b.call(null, a);
}
var Ba = {}, Ca = {}, B = function() {
  function a(a, b, c) {
    if (a ? a.K : a) {
      return a.K(a, b, c);
    }
    var h;
    h = B[m(null == a ? null : a)];
    if (!h && (h = B._, !h)) {
      throw u("ILookup.-lookup", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.J : a) {
      return a.J(a, b);
    }
    var c;
    c = B[m(null == a ? null : a)];
    if (!c && (c = B._, !c)) {
      throw u("ILookup.-lookup", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(d, c, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, d, c);
      case 3:
        return a.call(this, d, c, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function Da(a, b) {
  if (a ? a.Ua : a) {
    return a.Ua(a, b);
  }
  var c;
  c = Da[m(null == a ? null : a)];
  if (!c && (c = Da._, !c)) {
    throw u("IAssociative.-contains-key?", a);
  }
  return c.call(null, a, b);
}
function Ea(a, b, c) {
  if (a ? a.Ca : a) {
    return a.Ca(a, b, c);
  }
  var d;
  d = Ea[m(null == a ? null : a)];
  if (!d && (d = Ea._, !d)) {
    throw u("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var Fa = {};
function Ga(a, b) {
  if (a ? a.lb : a) {
    return a.lb(a, b);
  }
  var c;
  c = Ga[m(null == a ? null : a)];
  if (!c && (c = Ga._, !c)) {
    throw u("IMap.-dissoc", a);
  }
  return c.call(null, a, b);
}
var Ha = {};
function Ia(a) {
  if (a ? a.mb : a) {
    return a.mb();
  }
  var b;
  b = Ia[m(null == a ? null : a)];
  if (!b && (b = Ia._, !b)) {
    throw u("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function Ja(a) {
  if (a ? a.tb : a) {
    return a.tb();
  }
  var b;
  b = Ja[m(null == a ? null : a)];
  if (!b && (b = Ja._, !b)) {
    throw u("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
var Ka = {};
function La(a, b) {
  if (a ? a.vb : a) {
    return a.vb(0, b);
  }
  var c;
  c = La[m(null == a ? null : a)];
  if (!c && (c = La._, !c)) {
    throw u("ISet.-disjoin", a);
  }
  return c.call(null, a, b);
}
function Ma(a) {
  if (a ? a.Fa : a) {
    return a.Fa(a);
  }
  var b;
  b = Ma[m(null == a ? null : a)];
  if (!b && (b = Ma._, !b)) {
    throw u("IStack.-peek", a);
  }
  return b.call(null, a);
}
function Na(a) {
  if (a ? a.Ga : a) {
    return a.Ga(a);
  }
  var b;
  b = Na[m(null == a ? null : a)];
  if (!b && (b = Na._, !b)) {
    throw u("IStack.-pop", a);
  }
  return b.call(null, a);
}
var Oa = {};
function Pa(a, b, c) {
  if (a ? a.nb : a) {
    return a.nb(a, b, c);
  }
  var d;
  d = Pa[m(null == a ? null : a)];
  if (!d && (d = Pa._, !d)) {
    throw u("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
function Qa(a) {
  if (a ? a.Oa : a) {
    return a.Oa(a);
  }
  var b;
  b = Qa[m(null == a ? null : a)];
  if (!b && (b = Qa._, !b)) {
    throw u("IDeref.-deref", a);
  }
  return b.call(null, a);
}
var Ra = {};
function Sa(a) {
  if (a ? a.A : a) {
    return a.A(a);
  }
  var b;
  b = Sa[m(null == a ? null : a)];
  if (!b && (b = Sa._, !b)) {
    throw u("IMeta.-meta", a);
  }
  return b.call(null, a);
}
var Ta = {};
function Ua(a, b) {
  if (a ? a.C : a) {
    return a.C(a, b);
  }
  var c;
  c = Ua[m(null == a ? null : a)];
  if (!c && (c = Ua._, !c)) {
    throw u("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b);
}
var Wa = {}, Xa = function() {
  function a(a, b, c) {
    if (a ? a.R : a) {
      return a.R(a, b, c);
    }
    var h;
    h = Xa[m(null == a ? null : a)];
    if (!h && (h = Xa._, !h)) {
      throw u("IReduce.-reduce", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.Q : a) {
      return a.Q(a, b);
    }
    var c;
    c = Xa[m(null == a ? null : a)];
    if (!c && (c = Xa._, !c)) {
      throw u("IReduce.-reduce", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function Ya(a, b) {
  if (a ? a.v : a) {
    return a.v(a, b);
  }
  var c;
  c = Ya[m(null == a ? null : a)];
  if (!c && (c = Ya._, !c)) {
    throw u("IEquiv.-equiv", a);
  }
  return c.call(null, a, b);
}
function Za(a) {
  if (a ? a.w : a) {
    return a.w(a);
  }
  var b;
  b = Za[m(null == a ? null : a)];
  if (!b && (b = Za._, !b)) {
    throw u("IHash.-hash", a);
  }
  return b.call(null, a);
}
var $a = {};
function ab(a) {
  if (a ? a.B : a) {
    return a.B(a);
  }
  var b;
  b = ab[m(null == a ? null : a)];
  if (!b && (b = ab._, !b)) {
    throw u("ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var bb = {};
function C(a, b) {
  if (a ? a.yb : a) {
    return a.yb(0, b);
  }
  var c;
  c = C[m(null == a ? null : a)];
  if (!c && (c = C._, !c)) {
    throw u("IWriter.-write", a);
  }
  return c.call(null, a, b);
}
var cb = {};
function db(a, b, c) {
  if (a ? a.s : a) {
    return a.s(a, b, c);
  }
  var d;
  d = db[m(null == a ? null : a)];
  if (!d && (d = db._, !d)) {
    throw u("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function eb(a, b, c) {
  if (a ? a.xb : a) {
    return a.xb(0, b, c);
  }
  var d;
  d = eb[m(null == a ? null : a)];
  if (!d && (d = eb._, !d)) {
    throw u("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c);
}
function fb(a) {
  if (a ? a.Da : a) {
    return a.Da(a);
  }
  var b;
  b = fb[m(null == a ? null : a)];
  if (!b && (b = fb._, !b)) {
    throw u("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function gb(a, b) {
  if (a ? a.ra : a) {
    return a.ra(a, b);
  }
  var c;
  c = gb[m(null == a ? null : a)];
  if (!c && (c = gb._, !c)) {
    throw u("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function hb(a) {
  if (a ? a.sa : a) {
    return a.sa(a);
  }
  var b;
  b = hb[m(null == a ? null : a)];
  if (!b && (b = hb._, !b)) {
    throw u("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function ib(a, b, c) {
  if (a ? a.Ha : a) {
    return a.Ha(a, b, c);
  }
  var d;
  d = ib[m(null == a ? null : a)];
  if (!d && (d = ib._, !d)) {
    throw u("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function jb(a, b, c) {
  if (a ? a.wb : a) {
    return a.wb(0, b, c);
  }
  var d;
  d = jb[m(null == a ? null : a)];
  if (!d && (d = jb._, !d)) {
    throw u("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function kb(a) {
  if (a ? a.rb : a) {
    return a.rb();
  }
  var b;
  b = kb[m(null == a ? null : a)];
  if (!b && (b = kb._, !b)) {
    throw u("IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function lb(a) {
  if (a ? a.Wa : a) {
    return a.Wa(a);
  }
  var b;
  b = lb[m(null == a ? null : a)];
  if (!b && (b = lb._, !b)) {
    throw u("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function mb(a) {
  if (a ? a.Xa : a) {
    return a.Xa(a);
  }
  var b;
  b = mb[m(null == a ? null : a)];
  if (!b && (b = mb._, !b)) {
    throw u("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function nb(a) {
  if (a ? a.Va : a) {
    return a.Va(a);
  }
  var b;
  b = nb[m(null == a ? null : a)];
  if (!b && (b = nb._, !b)) {
    throw u("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function ob(a) {
  this.Sb = a;
  this.o = 0;
  this.g = 1073741824;
}
ob.prototype.yb = function(a, b) {
  return this.Sb.append(b);
};
function pb(a) {
  var b = new ga;
  a.s(null, new ob(b), ja());
  return "" + w(b);
}
function qb(a, b) {
  if (r(rb.a ? rb.a(a, b) : rb.call(null, a, b))) {
    return 0;
  }
  var c = ra(a.T);
  if (r(c ? b.T : c)) {
    return-1;
  }
  if (r(a.T)) {
    if (ra(b.T)) {
      return 1;
    }
    c = sb.a ? sb.a(a.T, b.T) : sb.call(null, a.T, b.T);
    return 0 === c ? sb.a ? sb.a(a.name, b.name) : sb.call(null, a.name, b.name) : c;
  }
  return tb ? sb.a ? sb.a(a.name, b.name) : sb.call(null, a.name, b.name) : null;
}
function D(a, b, c, d, e) {
  this.T = a;
  this.name = b;
  this.pa = c;
  this.qa = d;
  this.ba = e;
  this.g = 2154168321;
  this.o = 4096;
}
f = D.prototype;
f.s = function(a, b) {
  return C(b, this.pa);
};
f.w = function() {
  var a = this.qa;
  return null != a ? a : this.qa = a = ub.a ? ub.a(E.b ? E.b(this.T) : E.call(null, this.T), E.b ? E.b(this.name) : E.call(null, this.name)) : ub.call(null, E.b ? E.b(this.T) : E.call(null, this.T), E.b ? E.b(this.name) : E.call(null, this.name));
};
f.C = function(a, b) {
  return new D(this.T, this.name, this.pa, this.qa, b);
};
f.A = function() {
  return this.ba;
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return B.c(c, this, null);
      case 3:
        return B.c(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
f.b = function(a) {
  return B.c(a, this, null);
};
f.a = function(a, b) {
  return B.c(a, this, b);
};
f.v = function(a, b) {
  return b instanceof D ? this.pa === b.pa : !1;
};
f.toString = function() {
  return this.pa;
};
function F(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.g & 8388608 || a.Zb)) {
    return a.B(null);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new vb(a, 0);
  }
  if (s($a, a)) {
    return ab(a);
  }
  if (t) {
    throw Error([w(a), w("is not ISeqable")].join(""));
  }
  return null;
}
function G(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.g & 64 || a.Ea)) {
    return a.P(null);
  }
  a = F(a);
  return null == a ? null : z(a);
}
function J(a) {
  return null != a ? a && (a.g & 64 || a.Ea) ? a.W(null) : (a = F(a)) ? A(a) : L : L;
}
function M(a) {
  return null == a ? null : a && (a.g & 128 || a.ub) ? a.V(null) : F(J(a));
}
var rb = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || Ya(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (b.a(a, d)) {
          if (M(e)) {
            a = d, d = G(e), e = M(e);
          } else {
            return b.a(d, G(e));
          }
        } else {
          return!1;
        }
      }
    }
    a.m = 2;
    a.h = function(a) {
      var b = G(a);
      a = M(a);
      var d = G(a);
      a = J(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 2;
  b.h = c.h;
  b.b = function() {
    return!0;
  };
  b.a = a;
  b.e = c.e;
  return b;
}();
va["null"] = !0;
wa["null"] = function() {
  return 0;
};
Date.prototype.v = function(a, b) {
  return b instanceof Date && this.toString() === b.toString();
};
Ya.number = function(a, b) {
  return a === b;
};
Ra["function"] = !0;
Sa["function"] = function() {
  return null;
};
ua["function"] = !0;
Za._ = function(a) {
  return a[ca] || (a[ca] = ++ea);
};
function wb(a) {
  return a + 1;
}
var xb = function() {
  function a(a, b, c, d) {
    for (var l = wa(a);;) {
      if (d < l) {
        c = b.a ? b.a(c, y.a(a, d)) : b.call(null, c, y.a(a, d)), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = wa(a), l = 0;;) {
      if (l < d) {
        c = b.a ? b.a(c, y.a(a, l)) : b.call(null, c, y.a(a, l)), l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = wa(a);
    if (0 === c) {
      return b.k ? b.k() : b.call(null);
    }
    for (var d = y.a(a, 0), l = 1;;) {
      if (l < c) {
        d = b.a ? b.a(d, y.a(a, l)) : b.call(null, d, y.a(a, l)), l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, g, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, h);
      case 4:
        return a.call(this, d, g, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.c = b;
  d.j = a;
  return d;
}(), yb = function() {
  function a(a, b, c, d) {
    for (var l = a.length;;) {
      if (d < l) {
        c = b.a ? b.a(c, a[d]) : b.call(null, c, a[d]), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = a.length, l = 0;;) {
      if (l < d) {
        c = b.a ? b.a(c, a[l]) : b.call(null, c, a[l]), l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = a.length;
    if (0 === a.length) {
      return b.k ? b.k() : b.call(null);
    }
    for (var d = a[0], l = 1;;) {
      if (l < c) {
        d = b.a ? b.a(d, a[l]) : b.call(null, d, a[l]), l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, g, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, h);
      case 4:
        return a.call(this, d, g, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.c = b;
  d.j = a;
  return d;
}();
function zb(a) {
  return a ? a.g & 2 || a.Eb ? !0 : a.g ? !1 : s(va, a) : s(va, a);
}
function Ab(a) {
  return a ? a.g & 16 || a.sb ? !0 : a.g ? !1 : s(za, a) : s(za, a);
}
function vb(a, b) {
  this.d = a;
  this.n = b;
  this.g = 166199550;
  this.o = 8192;
}
f = vb.prototype;
f.w = function() {
  return Bb.b ? Bb.b(this) : Bb.call(null, this);
};
f.V = function() {
  return this.n + 1 < this.d.length ? new vb(this.d, this.n + 1) : null;
};
f.H = function(a, b) {
  return O.a ? O.a(b, this) : O.call(null, b, this);
};
f.toString = function() {
  return pb(this);
};
f.Q = function(a, b) {
  return yb.j(this.d, b, this.d[this.n], this.n + 1);
};
f.R = function(a, b, c) {
  return yb.j(this.d, b, c, this.n);
};
f.B = function() {
  return this;
};
f.I = function() {
  return this.d.length - this.n;
};
f.P = function() {
  return this.d[this.n];
};
f.W = function() {
  return this.n + 1 < this.d.length ? new vb(this.d, this.n + 1) : L;
};
f.v = function(a, b) {
  return Cb.a ? Cb.a(this, b) : Cb.call(null, this, b);
};
f.N = function(a, b) {
  var c = b + this.n;
  return c < this.d.length ? this.d[c] : null;
};
f.Z = function(a, b, c) {
  a = b + this.n;
  return a < this.d.length ? this.d[a] : c;
};
f.M = function() {
  return L;
};
var Db = function() {
  function a(a, b) {
    return b < a.length ? new vb(a, b) : null;
  }
  function b(a) {
    return c.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}(), N = function() {
  function a(a, b) {
    return Db.a(a, b);
  }
  function b(a) {
    return Db.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}();
Ya._ = function(a, b) {
  return a === b;
};
var Eb = function() {
  function a(a, b) {
    return null != a ? ya(a, b) : ya(L, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (r(e)) {
          a = b.a(a, d), d = G(e), e = M(e);
        } else {
          return b.a(a, d);
        }
      }
    }
    a.m = 2;
    a.h = function(a) {
      var b = G(a);
      a = M(a);
      var d = G(a);
      a = J(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 2;
  b.h = c.h;
  b.a = a;
  b.e = c.e;
  return b;
}();
function P(a) {
  if (null != a) {
    if (a && (a.g & 2 || a.Eb)) {
      a = a.I(null);
    } else {
      if (a instanceof Array) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (s(va, a)) {
            a = wa(a);
          } else {
            if (t) {
              a: {
                a = F(a);
                for (var b = 0;;) {
                  if (zb(a)) {
                    a = b + wa(a);
                    break a;
                  }
                  a = M(a);
                  b += 1;
                }
                a = void 0;
              }
            } else {
              a = null;
            }
          }
        }
      }
    }
  } else {
    a = 0;
  }
  return a;
}
var Fb = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return F(a) ? G(a) : c;
      }
      if (Ab(a)) {
        return y.c(a, b, c);
      }
      if (F(a)) {
        a = M(a), b -= 1;
      } else {
        return t ? c : null;
      }
    }
  }
  function b(a, b) {
    for (;;) {
      if (null == a) {
        throw Error("Index out of bounds");
      }
      if (0 === b) {
        if (F(a)) {
          return G(a);
        }
        throw Error("Index out of bounds");
      }
      if (Ab(a)) {
        return y.a(a, b);
      }
      if (F(a)) {
        var c = M(a), h = b - 1;
        a = c;
        b = h;
      } else {
        if (t) {
          throw Error("Index out of bounds");
        }
        return null;
      }
    }
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), Q = function() {
  function a(a, b, c) {
    if (null != a) {
      if (a && (a.g & 16 || a.sb)) {
        return a.Z(null, b, c);
      }
      if (a instanceof Array || "string" === typeof a) {
        return b < a.length ? a[b] : c;
      }
      if (s(za, a)) {
        return y.a(a, b);
      }
      if (t) {
        if (a ? a.g & 64 || a.Ea || (a.g ? 0 : s(Aa, a)) : s(Aa, a)) {
          return Fb.c(a, b, c);
        }
        throw Error([w("nth not supported on this type "), w(ta(sa(a)))].join(""));
      }
      return null;
    }
    return c;
  }
  function b(a, b) {
    if (null == a) {
      return null;
    }
    if (a && (a.g & 16 || a.sb)) {
      return a.N(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (s(za, a)) {
      return y.a(a, b);
    }
    if (t) {
      if (a ? a.g & 64 || a.Ea || (a.g ? 0 : s(Aa, a)) : s(Aa, a)) {
        return Fb.a(a, b);
      }
      throw Error([w("nth not supported on this type "), w(ta(sa(a)))].join(""));
    }
    return null;
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), R = function() {
  function a(a, b, c) {
    return null != a ? a && (a.g & 256 || a.Fb) ? a.K(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : s(Ca, a) ? B.c(a, b, c) : t ? c : null : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.g & 256 || a.Fb) ? a.J(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : s(Ca, a) ? B.a(a, b) : null;
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), Hb = function() {
  function a(a, b, c) {
    return null != a ? Ea(a, b, c) : Gb.a ? Gb.a([b], [c]) : Gb.call(null, [b], [c]);
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var n = null;
      3 < arguments.length && (n = N(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, n);
    }
    function c(a, d, e, l) {
      for (;;) {
        if (a = b.c(a, d, e), r(l)) {
          d = G(l), e = G(M(l)), l = M(M(l));
        } else {
          return a;
        }
      }
    }
    a.m = 3;
    a.h = function(a) {
      var b = G(a);
      a = M(a);
      var d = G(a);
      a = M(a);
      var l = G(a);
      a = J(a);
      return c(b, d, l, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, g, h) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, g);
      default:
        return c.e(b, e, g, N(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 3;
  b.h = c.h;
  b.c = a;
  b.e = c.e;
  return b;
}();
function Ib(a) {
  var b = "function" == m(a);
  return b ? b : a ? r(r(null) ? null : a.Db) ? !0 : a.dc ? !1 : s(ua, a) : s(ua, a);
}
var Kb = function Jb(b, c) {
  return Ib(b) && !(b ? b.g & 262144 || b.cc || (b.g ? 0 : s(Ta, b)) : s(Ta, b)) ? Jb(function() {
    "undefined" === typeof ha && (ha = function(b, c, g, h) {
      this.i = b;
      this.Ka = c;
      this.Ub = g;
      this.Qb = h;
      this.o = 0;
      this.g = 393217;
    }, ha.Qa = !0, ha.Pa = "cljs.core/t8883", ha.qb = function(b, c) {
      return C(c, "cljs.core/t8883");
    }, ha.prototype.call = function() {
      function b(d, h) {
        d = this;
        var k = null;
        1 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, d, k);
      }
      function c(b, d) {
        return T.a ? T.a(b.Ka, d) : T.call(null, b.Ka, d);
      }
      b.m = 1;
      b.h = function(b) {
        var d = G(b);
        b = J(b);
        return c(d, b);
      };
      b.e = c;
      return b;
    }(), ha.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(x(c)));
    }, ha.prototype.a = function() {
      function b(d) {
        var h = null;
        0 < arguments.length && (h = N(Array.prototype.slice.call(arguments, 0), 0));
        return c.call(this, h);
      }
      function c(b) {
        return T.a ? T.a(self__.Ka, b) : T.call(null, self__.Ka, b);
      }
      b.m = 0;
      b.h = function(b) {
        b = F(b);
        return c(b);
      };
      b.e = c;
      return b;
    }(), ha.prototype.Db = !0, ha.prototype.A = function() {
      return this.Qb;
    }, ha.prototype.C = function(b, c) {
      return new ha(this.i, this.Ka, this.Ub, c);
    });
    return new ha(c, b, Jb, null);
  }(), c) : null == b ? null : Ua(b, c);
};
function Lb(a) {
  var b = null != a;
  return(b ? a ? a.g & 131072 || a.Hb || (a.g ? 0 : s(Ra, a)) : s(Ra, a) : b) ? Sa(a) : null;
}
var Mb = function() {
  function a(a, b) {
    return null == a ? null : La(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (null == a) {
          return null;
        }
        a = b.a(a, d);
        if (r(e)) {
          d = G(e), e = M(e);
        } else {
          return a;
        }
      }
    }
    a.m = 2;
    a.h = function(a) {
      var b = G(a);
      a = M(a);
      var d = G(a);
      a = J(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 2;
  b.h = c.h;
  b.b = function(a) {
    return a;
  };
  b.a = a;
  b.e = c.e;
  return b;
}(), Nb = {}, Ob = 0;
function E(a) {
  if (a && (a.g & 4194304 || a.Xb)) {
    a = a.w(null);
  } else {
    if ("number" === typeof a) {
      a = Math.floor(a) % 2147483647;
    } else {
      if (!0 === a) {
        a = 1;
      } else {
        if (!1 === a) {
          a = 0;
        } else {
          if ("string" === typeof a) {
            255 < Ob && (Nb = {}, Ob = 0);
            var b = Nb[a];
            if ("number" !== typeof b) {
              for (var c = b = 0;c < a.length;++c) {
                b = 31 * b + a.charCodeAt(c), b %= 4294967296;
              }
              Nb[a] = b;
              Ob += 1;
            }
            a = b;
          } else {
            a = null == a ? 0 : t ? Za(a) : null;
          }
        }
      }
    }
  }
  return a;
}
function Pb(a) {
  return a ? a.g & 16777216 || a.$b ? !0 : a.g ? !1 : s(bb, a) : s(bb, a);
}
function Qb(a) {
  return a ? a.g & 16384 || a.bc ? !0 : a.g ? !1 : s(Oa, a) : s(Oa, a);
}
function Rb(a) {
  return a ? a.o & 512 || a.Vb ? !0 : !1 : !1;
}
function Sb(a) {
  var b = [];
  fa(a, function(a, d) {
    return b.push(d);
  });
  return b;
}
function Tb(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1;
  }
}
var Ub = {};
function Vb(a) {
  return null == a ? !1 : a ? a.g & 64 || a.Ea ? !0 : a.g ? !1 : s(Aa, a) : s(Aa, a);
}
function Wb(a) {
  return r(a) ? !0 : !1;
}
function sb(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (sa(a) === sa(b)) {
    return a && (a.o & 2048 || a.Ma) ? a.Na(null, b) : a > b ? 1 : a < b ? -1 : 0;
  }
  if (t) {
    throw Error("compare on non-nil objects of different types");
  }
  return null;
}
var Xb = function() {
  function a(a, b, c, h) {
    for (;;) {
      var k = sb(Q.a(a, h), Q.a(b, h));
      if (0 === k && h + 1 < c) {
        h += 1;
      } else {
        return k;
      }
    }
  }
  function b(a, b) {
    var g = P(a), h = P(b);
    return g < h ? -1 : g > h ? 1 : t ? c.j(a, b, g, 0) : null;
  }
  var c = null, c = function(c, e, g, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 4:
        return a.call(this, c, e, g, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.j = a;
  return c;
}(), Zb = function() {
  function a(a, b, c) {
    for (c = F(c);;) {
      if (c) {
        b = a.a ? a.a(b, G(c)) : a.call(null, b, G(c)), c = M(c);
      } else {
        return b;
      }
    }
  }
  function b(a, b) {
    var c = F(b);
    return c ? Yb.c ? Yb.c(a, G(c), M(c)) : Yb.call(null, a, G(c), M(c)) : a.k ? a.k() : a.call(null);
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), Yb = function() {
  function a(a, b, c) {
    return c && (c.g & 524288 || c.Jb) ? c.R(null, a, b) : c instanceof Array ? yb.c(c, a, b) : "string" === typeof c ? yb.c(c, a, b) : s(Wa, c) ? Xa.c(c, a, b) : t ? Zb.c(a, b, c) : null;
  }
  function b(a, b) {
    return b && (b.g & 524288 || b.Jb) ? b.Q(null, a) : b instanceof Array ? yb.a(b, a) : "string" === typeof b ? yb.a(b, a) : s(Wa, b) ? Xa.a(b, a) : t ? Zb.a(a, b) : null;
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), $b = function() {
  function a(a, b) {
    return a > b ? a : b;
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      return Yb.c(b, a > d ? a : d, e);
    }
    a.m = 2;
    a.h = function(a) {
      var b = G(a);
      a = M(a);
      var d = G(a);
      a = J(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 2;
  b.h = c.h;
  b.b = function(a) {
    return a;
  };
  b.a = a;
  b.e = c.e;
  return b;
}();
function ac(a) {
  return 0 <= a ? Math.floor.b ? Math.floor.b(a) : Math.floor.call(null, a) : Math.ceil.b ? Math.ceil.b(a) : Math.ceil.call(null, a);
}
var bc = function() {
  function a(a) {
    return a * c.k();
  }
  function b() {
    return Math.random.k ? Math.random.k() : Math.random.call(null);
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.k = b;
  c.b = a;
  return c;
}();
function cc(a) {
  return ac(bc.b(a));
}
function ec(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
var w = function() {
  function a(a) {
    return null == a ? "" : a.toString();
  }
  var b = null, c = function() {
    function a(b, d) {
      var k = null;
      1 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, k);
    }
    function c(a, d) {
      for (var e = new ga(b.b(a)), l = d;;) {
        if (r(l)) {
          e = e.append(b.b(G(l))), l = M(l);
        } else {
          return e.toString();
        }
      }
    }
    a.m = 1;
    a.h = function(a) {
      var b = G(a);
      a = J(a);
      return c(b, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 0:
        return "";
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, N(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 1;
  b.h = c.h;
  b.k = function() {
    return "";
  };
  b.b = a;
  b.e = c.e;
  return b;
}();
function Cb(a, b) {
  return Wb(Pb(b) ? function() {
    for (var c = F(a), d = F(b);;) {
      if (null == c) {
        return null == d;
      }
      if (null == d) {
        return!1;
      }
      if (rb.a(G(c), G(d))) {
        c = M(c), d = M(d);
      } else {
        return t ? !1 : null;
      }
    }
  }() : null);
}
function ub(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function Bb(a) {
  if (F(a)) {
    var b = E(G(a));
    for (a = M(a);;) {
      if (null == a) {
        return b;
      }
      b = ub(b, E(G(a)));
      a = M(a);
    }
  } else {
    return 0;
  }
}
function fc(a) {
  var b = 0;
  for (a = F(a);;) {
    if (a) {
      var c = G(a), b = (b + (E(gc.b ? gc.b(c) : gc.call(null, c)) ^ E(hc.b ? hc.b(c) : hc.call(null, c)))) % 4503599627370496;
      a = M(a);
    } else {
      return b;
    }
  }
}
function ic(a, b, c, d, e) {
  this.i = a;
  this.za = b;
  this.ja = c;
  this.count = d;
  this.l = e;
  this.g = 65937646;
  this.o = 8192;
}
f = ic.prototype;
f.w = function() {
  var a = this.l;
  return null != a ? a : this.l = a = Bb(this);
};
f.V = function() {
  return 1 === this.count ? null : this.ja;
};
f.H = function(a, b) {
  return new ic(this.i, b, this, this.count + 1, null);
};
f.toString = function() {
  return pb(this);
};
f.Q = function(a, b) {
  return Zb.a(b, this);
};
f.R = function(a, b, c) {
  return Zb.c(b, c, this);
};
f.B = function() {
  return this;
};
f.I = function() {
  return this.count;
};
f.Fa = function() {
  return this.za;
};
f.Ga = function() {
  return A(this);
};
f.P = function() {
  return this.za;
};
f.W = function() {
  return 1 === this.count ? L : this.ja;
};
f.v = function(a, b) {
  return Cb(this, b);
};
f.C = function(a, b) {
  return new ic(b, this.za, this.ja, this.count, this.l);
};
f.A = function() {
  return this.i;
};
f.M = function() {
  return L;
};
function jc(a) {
  this.i = a;
  this.g = 65937614;
  this.o = 8192;
}
f = jc.prototype;
f.w = function() {
  return 0;
};
f.V = function() {
  return null;
};
f.H = function(a, b) {
  return new ic(this.i, b, null, 1, null);
};
f.toString = function() {
  return pb(this);
};
f.Q = function(a, b) {
  return Zb.a(b, this);
};
f.R = function(a, b, c) {
  return Zb.c(b, c, this);
};
f.B = function() {
  return null;
};
f.I = function() {
  return 0;
};
f.Fa = function() {
  return null;
};
f.Ga = function() {
  throw Error("Can't pop empty list");
};
f.P = function() {
  return null;
};
f.W = function() {
  return L;
};
f.v = function(a, b) {
  return Cb(this, b);
};
f.C = function(a, b) {
  return new jc(b);
};
f.A = function() {
  return this.i;
};
f.M = function() {
  return this;
};
var L = new jc(null), kc = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (a instanceof vb && 0 === a.n) {
      b = a.d;
    } else {
      a: {
        for (b = [];;) {
          if (null != a) {
            b.push(a.P(null)), a = a.V(null);
          } else {
            break a;
          }
        }
        b = void 0;
      }
    }
    a = b.length;
    for (var e = L;;) {
      if (0 < a) {
        var g = a - 1, e = e.H(null, b[a - 1]);
        a = g;
      } else {
        return e;
      }
    }
  }
  a.m = 0;
  a.h = function(a) {
    a = F(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function lc(a, b, c, d) {
  this.i = a;
  this.za = b;
  this.ja = c;
  this.l = d;
  this.g = 65929452;
  this.o = 8192;
}
f = lc.prototype;
f.w = function() {
  var a = this.l;
  return null != a ? a : this.l = a = Bb(this);
};
f.V = function() {
  return null == this.ja ? null : F(this.ja);
};
f.H = function(a, b) {
  return new lc(null, b, this, this.l);
};
f.toString = function() {
  return pb(this);
};
f.Q = function(a, b) {
  return Zb.a(b, this);
};
f.R = function(a, b, c) {
  return Zb.c(b, c, this);
};
f.B = function() {
  return this;
};
f.P = function() {
  return this.za;
};
f.W = function() {
  return null == this.ja ? L : this.ja;
};
f.v = function(a, b) {
  return Cb(this, b);
};
f.C = function(a, b) {
  return new lc(b, this.za, this.ja, this.l);
};
f.A = function() {
  return this.i;
};
f.M = function() {
  return Kb(L, this.i);
};
function O(a, b) {
  var c = null == b;
  return(c ? c : b && (b.g & 64 || b.Ea)) ? new lc(null, a, b, null) : new lc(null, a, F(b), null);
}
function U(a, b, c, d) {
  this.T = a;
  this.name = b;
  this.ma = c;
  this.qa = d;
  this.g = 2153775105;
  this.o = 4096;
}
f = U.prototype;
f.s = function(a, b) {
  return C(b, [w(":"), w(this.ma)].join(""));
};
f.w = function() {
  null == this.qa && (this.qa = ub(E(this.T), E(this.name)) + 2654435769);
  return this.qa;
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return R.a(c, this);
      case 3:
        return R.c(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
f.b = function(a) {
  return R.a(a, this);
};
f.a = function(a, b) {
  return R.c(a, this, b);
};
f.v = function(a, b) {
  return b instanceof U ? this.ma === b.ma : !1;
};
f.toString = function() {
  return[w(":"), w(this.ma)].join("");
};
function mc(a, b) {
  return a === b ? !0 : a instanceof U && b instanceof U ? a.ma === b.ma : !1;
}
var oc = function() {
  function a(a, b) {
    return new U(a, b, [w(r(a) ? [w(a), w("/")].join("") : null), w(b)].join(""), null);
  }
  function b(a) {
    if (a instanceof U) {
      return a;
    }
    if (a instanceof D) {
      var b;
      if (a && (a.o & 4096 || a.Ib)) {
        b = a.T;
      } else {
        throw Error([w("Doesn't support namespace: "), w(a)].join(""));
      }
      return new U(b, nc.b ? nc.b(a) : nc.call(null, a), a.pa, null);
    }
    return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new U(b[0], b[1], a, null) : new U(null, b[0], a, null)) : null;
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}();
function V(a, b, c, d) {
  this.i = a;
  this.Aa = b;
  this.t = c;
  this.l = d;
  this.o = 0;
  this.g = 32374988;
}
f = V.prototype;
f.w = function() {
  var a = this.l;
  return null != a ? a : this.l = a = Bb(this);
};
f.V = function() {
  ab(this);
  return null == this.t ? null : M(this.t);
};
f.H = function(a, b) {
  return O(b, this);
};
f.toString = function() {
  return pb(this);
};
function pc(a) {
  null != a.Aa && (a.t = a.Aa.k ? a.Aa.k() : a.Aa.call(null), a.Aa = null);
  return a.t;
}
f.Q = function(a, b) {
  return Zb.a(b, this);
};
f.R = function(a, b, c) {
  return Zb.c(b, c, this);
};
f.B = function() {
  pc(this);
  if (null == this.t) {
    return null;
  }
  for (var a = this.t;;) {
    if (a instanceof V) {
      a = pc(a);
    } else {
      return this.t = a, F(this.t);
    }
  }
};
f.P = function() {
  ab(this);
  return null == this.t ? null : G(this.t);
};
f.W = function() {
  ab(this);
  return null != this.t ? J(this.t) : L;
};
f.v = function(a, b) {
  return Cb(this, b);
};
f.C = function(a, b) {
  return new V(b, this.Aa, this.t, this.l);
};
f.A = function() {
  return this.i;
};
f.M = function() {
  return Kb(L, this.i);
};
function qc(a, b) {
  this.U = a;
  this.end = b;
  this.o = 0;
  this.g = 2;
}
qc.prototype.I = function() {
  return this.end;
};
qc.prototype.add = function(a) {
  this.U[this.end] = a;
  return this.end += 1;
};
qc.prototype.L = function() {
  var a = new rc(this.U, 0, this.end);
  this.U = null;
  return a;
};
function sc(a) {
  return new qc(Array(a), 0);
}
function rc(a, b, c) {
  this.d = a;
  this.u = b;
  this.end = c;
  this.o = 0;
  this.g = 524306;
}
f = rc.prototype;
f.Q = function(a, b) {
  return yb.j(this.d, b, this.d[this.u], this.u + 1);
};
f.R = function(a, b, c) {
  return yb.j(this.d, b, c, this.u);
};
f.rb = function() {
  if (this.u === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new rc(this.d, this.u + 1, this.end);
};
f.N = function(a, b) {
  return this.d[this.u + b];
};
f.Z = function(a, b, c) {
  return 0 <= b && b < this.end - this.u ? this.d[this.u + b] : c;
};
f.I = function() {
  return this.end - this.u;
};
var tc = function() {
  function a(a, b, c) {
    return new rc(a, b, c);
  }
  function b(a, b) {
    return new rc(a, b, a.length);
  }
  function c(a) {
    return new rc(a, 0, a.length);
  }
  var d = null, d = function(d, g, h) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, g);
      case 3:
        return a.call(this, d, g, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.b = c;
  d.a = b;
  d.c = a;
  return d;
}();
function uc(a, b, c, d) {
  this.L = a;
  this.fa = b;
  this.i = c;
  this.l = d;
  this.g = 31850732;
  this.o = 1536;
}
f = uc.prototype;
f.w = function() {
  var a = this.l;
  return null != a ? a : this.l = a = Bb(this);
};
f.V = function() {
  if (1 < wa(this.L)) {
    return new uc(kb(this.L), this.fa, this.i, null);
  }
  var a = ab(this.fa);
  return null == a ? null : a;
};
f.H = function(a, b) {
  return O(b, this);
};
f.toString = function() {
  return pb(this);
};
f.B = function() {
  return this;
};
f.P = function() {
  return y.a(this.L, 0);
};
f.W = function() {
  return 1 < wa(this.L) ? new uc(kb(this.L), this.fa, this.i, null) : null == this.fa ? L : this.fa;
};
f.Va = function() {
  return null == this.fa ? null : this.fa;
};
f.v = function(a, b) {
  return Cb(this, b);
};
f.C = function(a, b) {
  return new uc(this.L, this.fa, b, this.l);
};
f.A = function() {
  return this.i;
};
f.M = function() {
  return Kb(L, this.i);
};
f.Wa = function() {
  return this.L;
};
f.Xa = function() {
  return null == this.fa ? L : this.fa;
};
function vc(a, b) {
  return 0 === wa(a) ? b : new uc(a, b, null, null);
}
function wc(a) {
  for (var b = [];;) {
    if (F(a)) {
      b.push(G(a)), a = M(a);
    } else {
      return b;
    }
  }
}
function xc(a, b) {
  if (zb(a)) {
    return P(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && F(c)) {
      c = M(c), d -= 1, e += 1;
    } else {
      return e;
    }
  }
}
var zc = function yc(b) {
  return null == b ? null : null == M(b) ? F(G(b)) : t ? O(G(b), yc(M(b))) : null;
}, Ac = function() {
  function a(a, b) {
    return new V(null, function() {
      var c = F(a);
      return c ? Rb(c) ? vc(lb(c), d.a(mb(c), b)) : O(G(c), d.a(J(c), b)) : b;
    }, null, null);
  }
  function b(a) {
    return new V(null, function() {
      return a;
    }, null, null);
  }
  function c() {
    return new V(null, function() {
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e) {
      var g = null;
      2 < arguments.length && (g = N(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, g);
    }
    function b(a, c, e) {
      return function v(a, b) {
        return new V(null, function() {
          var c = F(a);
          return c ? Rb(c) ? vc(lb(c), v(mb(c), b)) : O(G(c), v(J(c), b)) : r(b) ? v(G(b), M(b)) : null;
        }, null, null);
      }(d.a(a, c), e);
    }
    a.m = 2;
    a.h = function(a) {
      var c = G(a);
      a = M(a);
      var d = G(a);
      a = J(a);
      return b(c, d, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, h, k) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, h);
      default:
        return e.e(d, h, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.m = 2;
  d.h = e.h;
  d.k = c;
  d.b = b;
  d.a = a;
  d.e = e.e;
  return d;
}(), Bc = function() {
  function a(a, b, c, d) {
    return O(a, O(b, O(c, d)));
  }
  function b(a, b, c) {
    return O(a, O(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, n, p) {
      var v = null;
      4 < arguments.length && (v = N(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, n, v);
    }
    function b(a, c, d, e, g) {
      return O(a, O(c, O(d, O(e, zc(g)))));
    }
    a.m = 4;
    a.h = function(a) {
      var c = G(a);
      a = M(a);
      var d = G(a);
      a = M(a);
      var e = G(a);
      a = M(a);
      var p = G(a);
      a = J(a);
      return b(c, d, e, p, a);
    };
    a.e = b;
    return a;
  }(), c = function(c, g, h, k, l) {
    switch(arguments.length) {
      case 1:
        return F(c);
      case 2:
        return O(c, g);
      case 3:
        return b.call(this, c, g, h);
      case 4:
        return a.call(this, c, g, h, k);
      default:
        return d.e(c, g, h, k, N(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.m = 4;
  c.h = d.h;
  c.b = function(a) {
    return F(a);
  };
  c.a = function(a, b) {
    return O(a, b);
  };
  c.c = b;
  c.j = a;
  c.e = d.e;
  return c;
}();
function Cc(a) {
  return hb(a);
}
var Dc = function() {
  var a = null, b = function() {
    function a(c, g, h, k) {
      var l = null;
      3 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, g, h, l);
    }
    function b(a, c, d, k) {
      for (;;) {
        if (a = ib(a, c, d), r(k)) {
          c = G(k), d = G(M(k)), k = M(M(k));
        } else {
          return a;
        }
      }
    }
    a.m = 3;
    a.h = function(a) {
      var c = G(a);
      a = M(a);
      var h = G(a);
      a = M(a);
      var k = G(a);
      a = J(a);
      return b(c, h, k, a);
    };
    a.e = b;
    return a;
  }(), a = function(a, d, e, g) {
    switch(arguments.length) {
      case 3:
        return ib(a, d, e);
      default:
        return b.e(a, d, e, N(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.m = 3;
  a.h = b.h;
  a.c = function(a, b, e) {
    return ib(a, b, e);
  };
  a.e = b.e;
  return a;
}();
function Ec(a, b, c) {
  var d = F(c);
  if (0 === b) {
    return a.k ? a.k() : a.call(null);
  }
  c = z(d);
  var e = A(d);
  if (1 === b) {
    return a.b ? a.b(c) : a.b ? a.b(c) : a.call(null, c);
  }
  var d = z(e), g = A(e);
  if (2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d);
  }
  var e = z(g), h = A(g);
  if (3 === b) {
    return a.c ? a.c(c, d, e) : a.c ? a.c(c, d, e) : a.call(null, c, d, e);
  }
  var g = z(h), k = A(h);
  if (4 === b) {
    return a.j ? a.j(c, d, e, g) : a.j ? a.j(c, d, e, g) : a.call(null, c, d, e, g);
  }
  h = z(k);
  k = A(k);
  if (5 === b) {
    return a.D ? a.D(c, d, e, g, h) : a.D ? a.D(c, d, e, g, h) : a.call(null, c, d, e, g, h);
  }
  a = z(k);
  var l = A(k);
  if (6 === b) {
    return a.ga ? a.ga(c, d, e, g, h, a) : a.ga ? a.ga(c, d, e, g, h, a) : a.call(null, c, d, e, g, h, a);
  }
  var k = z(l), n = A(l);
  if (7 === b) {
    return a.va ? a.va(c, d, e, g, h, a, k) : a.va ? a.va(c, d, e, g, h, a, k) : a.call(null, c, d, e, g, h, a, k);
  }
  var l = z(n), p = A(n);
  if (8 === b) {
    return a.jb ? a.jb(c, d, e, g, h, a, k, l) : a.jb ? a.jb(c, d, e, g, h, a, k, l) : a.call(null, c, d, e, g, h, a, k, l);
  }
  var n = z(p), v = A(p);
  if (9 === b) {
    return a.kb ? a.kb(c, d, e, g, h, a, k, l, n) : a.kb ? a.kb(c, d, e, g, h, a, k, l, n) : a.call(null, c, d, e, g, h, a, k, l, n);
  }
  var p = z(v), H = A(v);
  if (10 === b) {
    return a.Ya ? a.Ya(c, d, e, g, h, a, k, l, n, p) : a.Ya ? a.Ya(c, d, e, g, h, a, k, l, n, p) : a.call(null, c, d, e, g, h, a, k, l, n, p);
  }
  var v = z(H), K = A(H);
  if (11 === b) {
    return a.Za ? a.Za(c, d, e, g, h, a, k, l, n, p, v) : a.Za ? a.Za(c, d, e, g, h, a, k, l, n, p, v) : a.call(null, c, d, e, g, h, a, k, l, n, p, v);
  }
  var H = z(K), I = A(K);
  if (12 === b) {
    return a.$a ? a.$a(c, d, e, g, h, a, k, l, n, p, v, H) : a.$a ? a.$a(c, d, e, g, h, a, k, l, n, p, v, H) : a.call(null, c, d, e, g, h, a, k, l, n, p, v, H);
  }
  var K = z(I), S = A(I);
  if (13 === b) {
    return a.ab ? a.ab(c, d, e, g, h, a, k, l, n, p, v, H, K) : a.ab ? a.ab(c, d, e, g, h, a, k, l, n, p, v, H, K) : a.call(null, c, d, e, g, h, a, k, l, n, p, v, H, K);
  }
  var I = z(S), da = A(S);
  if (14 === b) {
    return a.bb ? a.bb(c, d, e, g, h, a, k, l, n, p, v, H, K, I) : a.bb ? a.bb(c, d, e, g, h, a, k, l, n, p, v, H, K, I) : a.call(null, c, d, e, g, h, a, k, l, n, p, v, H, K, I);
  }
  var S = z(da), pa = A(da);
  if (15 === b) {
    return a.cb ? a.cb(c, d, e, g, h, a, k, l, n, p, v, H, K, I, S) : a.cb ? a.cb(c, d, e, g, h, a, k, l, n, p, v, H, K, I, S) : a.call(null, c, d, e, g, h, a, k, l, n, p, v, H, K, I, S);
  }
  var da = z(pa), qa = A(pa);
  if (16 === b) {
    return a.eb ? a.eb(c, d, e, g, h, a, k, l, n, p, v, H, K, I, S, da) : a.eb ? a.eb(c, d, e, g, h, a, k, l, n, p, v, H, K, I, S, da) : a.call(null, c, d, e, g, h, a, k, l, n, p, v, H, K, I, S, da);
  }
  var pa = z(qa), Va = A(qa);
  if (17 === b) {
    return a.fb ? a.fb(c, d, e, g, h, a, k, l, n, p, v, H, K, I, S, da, pa) : a.fb ? a.fb(c, d, e, g, h, a, k, l, n, p, v, H, K, I, S, da, pa) : a.call(null, c, d, e, g, h, a, k, l, n, p, v, H, K, I, S, da, pa);
  }
  var qa = z(Va), dc = A(Va);
  if (18 === b) {
    return a.gb ? a.gb(c, d, e, g, h, a, k, l, n, p, v, H, K, I, S, da, pa, qa) : a.gb ? a.gb(c, d, e, g, h, a, k, l, n, p, v, H, K, I, S, da, pa, qa) : a.call(null, c, d, e, g, h, a, k, l, n, p, v, H, K, I, S, da, pa, qa);
  }
  Va = z(dc);
  dc = A(dc);
  if (19 === b) {
    return a.hb ? a.hb(c, d, e, g, h, a, k, l, n, p, v, H, K, I, S, da, pa, qa, Va) : a.hb ? a.hb(c, d, e, g, h, a, k, l, n, p, v, H, K, I, S, da, pa, qa, Va) : a.call(null, c, d, e, g, h, a, k, l, n, p, v, H, K, I, S, da, pa, qa, Va);
  }
  var hd = z(dc);
  A(dc);
  if (20 === b) {
    return a.ib ? a.ib(c, d, e, g, h, a, k, l, n, p, v, H, K, I, S, da, pa, qa, Va, hd) : a.ib ? a.ib(c, d, e, g, h, a, k, l, n, p, v, H, K, I, S, da, pa, qa, Va, hd) : a.call(null, c, d, e, g, h, a, k, l, n, p, v, H, K, I, S, da, pa, qa, Va, hd);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var T = function() {
  function a(a, b, c, d, e) {
    b = Bc.j(b, c, d, e);
    c = a.m;
    return a.h ? (d = xc(b, c + 1), d <= c ? Ec(a, d, b) : a.h(b)) : a.apply(a, wc(b));
  }
  function b(a, b, c, d) {
    b = Bc.c(b, c, d);
    c = a.m;
    return a.h ? (d = xc(b, c + 1), d <= c ? Ec(a, d, b) : a.h(b)) : a.apply(a, wc(b));
  }
  function c(a, b, c) {
    b = Bc.a(b, c);
    c = a.m;
    if (a.h) {
      var d = xc(b, c + 1);
      return d <= c ? Ec(a, d, b) : a.h(b);
    }
    return a.apply(a, wc(b));
  }
  function d(a, b) {
    var c = a.m;
    if (a.h) {
      var d = xc(b, c + 1);
      return d <= c ? Ec(a, d, b) : a.h(b);
    }
    return a.apply(a, wc(b));
  }
  var e = null, g = function() {
    function a(c, d, e, g, h, K) {
      var I = null;
      5 < arguments.length && (I = N(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, g, h, I);
    }
    function b(a, c, d, e, g, h) {
      c = O(c, O(d, O(e, O(g, zc(h)))));
      d = a.m;
      return a.h ? (e = xc(c, d + 1), e <= d ? Ec(a, e, c) : a.h(c)) : a.apply(a, wc(c));
    }
    a.m = 5;
    a.h = function(a) {
      var c = G(a);
      a = M(a);
      var d = G(a);
      a = M(a);
      var e = G(a);
      a = M(a);
      var g = G(a);
      a = M(a);
      var h = G(a);
      a = J(a);
      return b(c, d, e, g, h, a);
    };
    a.e = b;
    return a;
  }(), e = function(e, k, l, n, p, v) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, n);
      case 5:
        return a.call(this, e, k, l, n, p);
      default:
        return g.e(e, k, l, n, p, N(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.m = 5;
  e.h = g.h;
  e.a = d;
  e.c = c;
  e.j = b;
  e.D = a;
  e.e = g.e;
  return e;
}(), Fc = function() {
  function a(a, b) {
    return!rb.a(a, b);
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      return ra(T.j(rb, a, c, d));
    }
    a.m = 2;
    a.h = function(a) {
      var c = G(a);
      a = M(a);
      var d = G(a);
      a = J(a);
      return b(c, d, a);
    };
    a.e = b;
    return a;
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 1:
        return!1;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 2;
  b.h = c.h;
  b.b = function() {
    return!1;
  };
  b.a = a;
  b.e = c.e;
  return b;
}();
function Gc(a, b) {
  for (;;) {
    if (null == F(b)) {
      return!0;
    }
    if (r(a.b ? a.b(G(b)) : a.call(null, G(b)))) {
      var c = a, d = M(b);
      a = c;
      b = d;
    } else {
      return t ? !1 : null;
    }
  }
}
function Hc(a) {
  for (var b = Ic;;) {
    if (F(a)) {
      var c = b.b ? b.b(G(a)) : b.call(null, G(a));
      if (r(c)) {
        return c;
      }
      a = M(a);
    } else {
      return null;
    }
  }
}
function Ic(a) {
  return a;
}
function Jc(a) {
  return function() {
    var b = null, c = function() {
      function b(a, d, k) {
        var l = null;
        2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
        return c.call(this, a, d, l);
      }
      function c(b, d, e) {
        return ra(T.j(a, b, d, e));
      }
      b.m = 2;
      b.h = function(a) {
        var b = G(a);
        a = M(a);
        var d = G(a);
        a = J(a);
        return c(b, d, a);
      };
      b.e = c;
      return b;
    }(), b = function(b, e, g) {
      switch(arguments.length) {
        case 0:
          return ra(a.k ? a.k() : a.call(null));
        case 1:
          return ra(a.b ? a.b(b) : a.call(null, b));
        case 2:
          return ra(a.a ? a.a(b, e) : a.call(null, b, e));
        default:
          return c.e(b, e, N(arguments, 2));
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.m = 2;
    b.h = c.h;
    return b;
  }();
}
var Kc = function() {
  function a(a, b, c, d) {
    return function() {
      function e(a) {
        var b = null;
        0 < arguments.length && (b = N(Array.prototype.slice.call(arguments, 0), 0));
        return p.call(this, b);
      }
      function p(e) {
        return T.D(a, b, c, d, e);
      }
      e.m = 0;
      e.h = function(a) {
        a = F(a);
        return p(a);
      };
      e.e = p;
      return e;
    }();
  }
  function b(a, b, c) {
    return function() {
      function d(a) {
        var b = null;
        0 < arguments.length && (b = N(Array.prototype.slice.call(arguments, 0), 0));
        return e.call(this, b);
      }
      function e(d) {
        return T.j(a, b, c, d);
      }
      d.m = 0;
      d.h = function(a) {
        a = F(a);
        return e(a);
      };
      d.e = e;
      return d;
    }();
  }
  function c(a, b) {
    return function() {
      function c(a) {
        var b = null;
        0 < arguments.length && (b = N(Array.prototype.slice.call(arguments, 0), 0));
        return d.call(this, b);
      }
      function d(c) {
        return T.c(a, b, c);
      }
      c.m = 0;
      c.h = function(a) {
        a = F(a);
        return d(a);
      };
      c.e = d;
      return c;
    }();
  }
  var d = null, e = function() {
    function a(c, d, e, g, v) {
      var H = null;
      4 < arguments.length && (H = N(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, g, H);
    }
    function b(a, c, d, e, g) {
      return function() {
        function b(a) {
          var c = null;
          0 < arguments.length && (c = N(Array.prototype.slice.call(arguments, 0), 0));
          return h.call(this, c);
        }
        function h(b) {
          return T.D(a, c, d, e, Ac.a(g, b));
        }
        b.m = 0;
        b.h = function(a) {
          a = F(a);
          return h(a);
        };
        b.e = h;
        return b;
      }();
    }
    a.m = 4;
    a.h = function(a) {
      var c = G(a);
      a = M(a);
      var d = G(a);
      a = M(a);
      var e = G(a);
      a = M(a);
      var g = G(a);
      a = J(a);
      return b(c, d, e, g, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, h, k, l, n) {
    switch(arguments.length) {
      case 1:
        return d;
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, k);
      case 4:
        return a.call(this, d, h, k, l);
      default:
        return e.e(d, h, k, l, N(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.m = 4;
  d.h = e.h;
  d.b = function(a) {
    return a;
  };
  d.a = c;
  d.c = b;
  d.j = a;
  d.e = e.e;
  return d;
}(), Lc = function() {
  function a(a, b, c, e) {
    return new V(null, function() {
      var n = F(b), p = F(c), v = F(e);
      return n && p && v ? O(a.c ? a.c(G(n), G(p), G(v)) : a.call(null, G(n), G(p), G(v)), d.j(a, J(n), J(p), J(v))) : null;
    }, null, null);
  }
  function b(a, b, c) {
    return new V(null, function() {
      var e = F(b), n = F(c);
      return e && n ? O(a.a ? a.a(G(e), G(n)) : a.call(null, G(e), G(n)), d.c(a, J(e), J(n))) : null;
    }, null, null);
  }
  function c(a, b) {
    return new V(null, function() {
      var c = F(b);
      if (c) {
        if (Rb(c)) {
          for (var e = lb(c), n = P(e), p = sc(n), v = 0;;) {
            if (v < n) {
              var H = a.b ? a.b(y.a(e, v)) : a.call(null, y.a(e, v));
              p.add(H);
              v += 1;
            } else {
              break;
            }
          }
          return vc(p.L(), d.a(a, mb(c)));
        }
        return O(a.b ? a.b(G(c)) : a.call(null, G(c)), d.a(a, J(c)));
      }
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e, g, v) {
      var H = null;
      4 < arguments.length && (H = N(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, g, H);
    }
    function b(a, c, e, g, h) {
      return d.a(function(b) {
        return T.a(a, b);
      }, function K(a) {
        return new V(null, function() {
          var b = d.a(F, a);
          return Gc(Ic, b) ? O(d.a(G, b), K(d.a(J, b))) : null;
        }, null, null);
      }(Eb.e(h, g, N([e, c], 0))));
    }
    a.m = 4;
    a.h = function(a) {
      var c = G(a);
      a = M(a);
      var d = G(a);
      a = M(a);
      var e = G(a);
      a = M(a);
      var g = G(a);
      a = J(a);
      return b(c, d, e, g, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, h, k, l, n) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, k);
      case 4:
        return a.call(this, d, h, k, l);
      default:
        return e.e(d, h, k, l, N(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.m = 4;
  d.h = e.h;
  d.a = c;
  d.c = b;
  d.j = a;
  d.e = e.e;
  return d;
}(), Nc = function Mc(b, c) {
  return new V(null, function() {
    if (0 < b) {
      var d = F(c);
      return d ? O(G(d), Mc(b - 1, J(d))) : null;
    }
    return null;
  }, null, null);
}, Oc = function() {
  function a(a, b) {
    return Nc(a, c.b(b));
  }
  function b(a) {
    return new V(null, function() {
      return O(a.k ? a.k() : a.call(null), c.b(a));
    }, null, null);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}();
function Pc(a) {
  return function c(a, e) {
    return new V(null, function() {
      var g = F(a);
      return g ? O(G(g), c(J(g), e)) : F(e) ? c(G(e), J(e)) : null;
    }, null, null);
  }(null, a);
}
var Qc = function() {
  function a(a, b) {
    return Pc(Lc.a(a, b));
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      return Pc(T.j(Lc, a, c, d));
    }
    a.m = 2;
    a.h = function(a) {
      var c = G(a);
      a = M(a);
      var d = G(a);
      a = J(a);
      return b(c, d, a);
    };
    a.e = b;
    return a;
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 2;
  b.h = c.h;
  b.a = a;
  b.e = c.e;
  return b;
}(), Sc = function Rc(b, c) {
  return new V(null, function() {
    var d = F(c);
    if (d) {
      if (Rb(d)) {
        for (var e = lb(d), g = P(e), h = sc(g), k = 0;;) {
          if (k < g) {
            if (r(b.b ? b.b(y.a(e, k)) : b.call(null, y.a(e, k)))) {
              var l = y.a(e, k);
              h.add(l);
            }
            k += 1;
          } else {
            break;
          }
        }
        return vc(h.L(), Rc(b, mb(d)));
      }
      e = G(d);
      d = J(d);
      return r(b.b ? b.b(e) : b.call(null, e)) ? O(e, Rc(b, d)) : Rc(b, d);
    }
    return null;
  }, null, null);
};
function Tc(a, b) {
  return Sc(Jc(a), b);
}
function Uc(a) {
  return function c(a) {
    return new V(null, function() {
      return O(a, r(Pb.b ? Pb.b(a) : Pb.call(null, a)) ? Qc.a(c, F.b ? F.b(a) : F.call(null, a)) : null);
    }, null, null);
  }(a);
}
function Vc(a) {
  return Sc(function(a) {
    return!Pb(a);
  }, J(Uc(a)));
}
function Wc(a, b) {
  return null != a ? a && (a.o & 4 || a.Wb) ? Cc(Yb.c(gb, fb(a), b)) : Yb.c(ya, a, b) : Yb.c(Eb, L, b);
}
function Xc(a, b) {
  this.q = a;
  this.d = b;
}
function Yc(a) {
  return new Xc(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function Zc(a) {
  return new Xc(a.q, x(a.d));
}
function $c(a) {
  a = a.f;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function ad(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = Yc(a);
    d.d[0] = c;
    c = d;
    b -= 5;
  }
}
var cd = function bd(b, c, d, e) {
  var g = Zc(d), h = b.f - 1 >>> c & 31;
  5 === c ? g.d[h] = e : (d = d.d[h], b = null != d ? bd(b, c - 5, d, e) : ad(null, c - 5, e), g.d[h] = b);
  return g;
};
function dd(a, b) {
  throw Error([w("No item "), w(a), w(" in vector of length "), w(b)].join(""));
}
function ed(a, b) {
  if (0 <= b && b < a.f) {
    if (b >= $c(a)) {
      return a.p;
    }
    for (var c = a.root, d = a.shift;;) {
      if (0 < d) {
        var e = d - 5, c = c.d[b >>> d & 31], d = e
      } else {
        return c.d;
      }
    }
  } else {
    return dd(b, a.f);
  }
}
var gd = function fd(b, c, d, e, g) {
  var h = Zc(d);
  if (0 === c) {
    h.d[e & 31] = g;
  } else {
    var k = e >>> c & 31;
    b = fd(b, c - 5, d.d[k], e, g);
    h.d[k] = b;
  }
  return h;
}, jd = function id(b, c, d) {
  var e = b.f - 2 >>> c & 31;
  if (5 < c) {
    b = id(b, c - 5, d.d[e]);
    if (null == b && 0 === e) {
      return null;
    }
    d = Zc(d);
    d.d[e] = b;
    return d;
  }
  return 0 === e ? null : t ? (d = Zc(d), d.d[e] = null, d) : null;
};
function W(a, b, c, d, e, g) {
  this.i = a;
  this.f = b;
  this.shift = c;
  this.root = d;
  this.p = e;
  this.l = g;
  this.o = 8196;
  this.g = 167668511;
}
f = W.prototype;
f.Da = function() {
  return new kd(this.f, this.shift, ld.b ? ld.b(this.root) : ld.call(null, this.root), md.b ? md.b(this.p) : md.call(null, this.p));
};
f.w = function() {
  var a = this.l;
  return null != a ? a : this.l = a = Bb(this);
};
f.J = function(a, b) {
  return y.c(this, b, null);
};
f.K = function(a, b, c) {
  return y.c(this, b, c);
};
f.Ca = function(a, b, c) {
  if (0 <= b && b < this.f) {
    return $c(this) <= b ? (a = x(this.p), a[b & 31] = c, new W(this.i, this.f, this.shift, this.root, a, null)) : new W(this.i, this.f, this.shift, gd(this, this.shift, this.root, b, c), this.p, null);
  }
  if (b === this.f) {
    return ya(this, c);
  }
  if (t) {
    throw Error([w("Index "), w(b), w(" out of bounds  [0,"), w(this.f), w("]")].join(""));
  }
  return null;
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.N(null, c);
      case 3:
        return this.Z(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
f.b = function(a) {
  return this.N(null, a);
};
f.a = function(a, b) {
  return this.Z(null, a, b);
};
f.H = function(a, b) {
  if (32 > this.f - $c(this)) {
    for (var c = this.p.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.p[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new W(this.i, this.f + 1, this.shift, this.root, d, null);
  }
  c = (d = this.f >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = Yc(null), d.d[0] = this.root, e = ad(null, this.shift, new Xc(null, this.p)), d.d[1] = e) : d = cd(this, this.shift, this.root, new Xc(null, this.p));
  return new W(this.i, this.f + 1, c, d, [b], null);
};
f.mb = function() {
  return y.a(this, 0);
};
f.tb = function() {
  return y.a(this, 1);
};
f.toString = function() {
  return pb(this);
};
f.Q = function(a, b) {
  return xb.a(this, b);
};
f.R = function(a, b, c) {
  return xb.c(this, b, c);
};
f.B = function() {
  return 0 === this.f ? null : 32 > this.f ? N.b(this.p) : t ? nd.c ? nd.c(this, 0, 0) : nd.call(null, this, 0, 0) : null;
};
f.I = function() {
  return this.f;
};
f.Fa = function() {
  return 0 < this.f ? y.a(this, this.f - 1) : null;
};
f.Ga = function() {
  if (0 === this.f) {
    throw Error("Can't pop empty vector");
  }
  if (1 === this.f) {
    return Ua(od, this.i);
  }
  if (1 < this.f - $c(this)) {
    return new W(this.i, this.f - 1, this.shift, this.root, this.p.slice(0, -1), null);
  }
  if (t) {
    var a = ed(this, this.f - 2), b = jd(this, this.shift, this.root), b = null == b ? X : b, c = this.f - 1;
    return 5 < this.shift && null == b.d[1] ? new W(this.i, c, this.shift - 5, b.d[0], a, null) : new W(this.i, c, this.shift, b, a, null);
  }
  return null;
};
f.nb = function(a, b, c) {
  return Ea(this, b, c);
};
f.v = function(a, b) {
  return Cb(this, b);
};
f.C = function(a, b) {
  return new W(b, this.f, this.shift, this.root, this.p, this.l);
};
f.A = function() {
  return this.i;
};
f.N = function(a, b) {
  return ed(this, b)[b & 31];
};
f.Z = function(a, b, c) {
  return 0 <= b && b < this.f ? y.a(this, b) : c;
};
f.M = function() {
  return Kb(od, this.i);
};
var X = new Xc(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), od = new W(null, 0, 5, X, [], 0);
function pd(a, b, c, d, e, g) {
  this.G = a;
  this.aa = b;
  this.n = c;
  this.u = d;
  this.i = e;
  this.l = g;
  this.g = 32243948;
  this.o = 1536;
}
f = pd.prototype;
f.w = function() {
  var a = this.l;
  return null != a ? a : this.l = a = Bb(this);
};
f.V = function() {
  if (this.u + 1 < this.aa.length) {
    var a = nd.j ? nd.j(this.G, this.aa, this.n, this.u + 1) : nd.call(null, this.G, this.aa, this.n, this.u + 1);
    return null == a ? null : a;
  }
  return nb(this);
};
f.H = function(a, b) {
  return O(b, this);
};
f.toString = function() {
  return pb(this);
};
f.Q = function(a, b) {
  return xb.a(qd.c ? qd.c(this.G, this.n + this.u, P(this.G)) : qd.call(null, this.G, this.n + this.u, P(this.G)), b);
};
f.R = function(a, b, c) {
  return xb.c(qd.c ? qd.c(this.G, this.n + this.u, P(this.G)) : qd.call(null, this.G, this.n + this.u, P(this.G)), b, c);
};
f.B = function() {
  return this;
};
f.P = function() {
  return this.aa[this.u];
};
f.W = function() {
  if (this.u + 1 < this.aa.length) {
    var a = nd.j ? nd.j(this.G, this.aa, this.n, this.u + 1) : nd.call(null, this.G, this.aa, this.n, this.u + 1);
    return null == a ? L : a;
  }
  return mb(this);
};
f.Va = function() {
  var a = this.aa.length, a = this.n + a < wa(this.G) ? nd.c ? nd.c(this.G, this.n + a, 0) : nd.call(null, this.G, this.n + a, 0) : null;
  return null == a ? null : a;
};
f.v = function(a, b) {
  return Cb(this, b);
};
f.C = function(a, b) {
  return nd.D ? nd.D(this.G, this.aa, this.n, this.u, b) : nd.call(null, this.G, this.aa, this.n, this.u, b);
};
f.M = function() {
  return Kb(od, this.i);
};
f.Wa = function() {
  return tc.a(this.aa, this.u);
};
f.Xa = function() {
  var a = this.aa.length, a = this.n + a < wa(this.G) ? nd.c ? nd.c(this.G, this.n + a, 0) : nd.call(null, this.G, this.n + a, 0) : null;
  return null == a ? L : a;
};
var nd = function() {
  function a(a, b, c, d, l) {
    return new pd(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new pd(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new pd(a, ed(a, b), b, c, null, null);
  }
  var d = null, d = function(d, g, h, k, l) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, g, h);
      case 4:
        return b.call(this, d, g, h, k);
      case 5:
        return a.call(this, d, g, h, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.c = c;
  d.j = b;
  d.D = a;
  return d;
}();
function rd(a, b, c, d, e) {
  this.i = a;
  this.Y = b;
  this.start = c;
  this.end = d;
  this.l = e;
  this.g = 32400159;
  this.o = 8192;
}
f = rd.prototype;
f.w = function() {
  var a = this.l;
  return null != a ? a : this.l = a = Bb(this);
};
f.J = function(a, b) {
  return y.c(this, b, null);
};
f.K = function(a, b, c) {
  return y.c(this, b, c);
};
f.Ca = function(a, b, c) {
  var d = this, e = d.start + b;
  return sd.D ? sd.D(d.i, Hb.c(d.Y, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null) : sd.call(null, d.i, Hb.c(d.Y, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null);
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.N(null, c);
      case 3:
        return this.Z(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
f.b = function(a) {
  return this.N(null, a);
};
f.a = function(a, b) {
  return this.Z(null, a, b);
};
f.H = function(a, b) {
  return sd.D ? sd.D(this.i, Pa(this.Y, this.end, b), this.start, this.end + 1, null) : sd.call(null, this.i, Pa(this.Y, this.end, b), this.start, this.end + 1, null);
};
f.toString = function() {
  return pb(this);
};
f.Q = function(a, b) {
  return xb.a(this, b);
};
f.R = function(a, b, c) {
  return xb.c(this, b, c);
};
f.B = function() {
  var a = this;
  return function c(d) {
    return d === a.end ? null : O(y.a(a.Y, d), new V(null, function() {
      return c(d + 1);
    }, null, null));
  }(a.start);
};
f.I = function() {
  return this.end - this.start;
};
f.Fa = function() {
  return y.a(this.Y, this.end - 1);
};
f.Ga = function() {
  if (this.start === this.end) {
    throw Error("Can't pop empty vector");
  }
  return sd.D ? sd.D(this.i, this.Y, this.start, this.end - 1, null) : sd.call(null, this.i, this.Y, this.start, this.end - 1, null);
};
f.nb = function(a, b, c) {
  return Ea(this, b, c);
};
f.v = function(a, b) {
  return Cb(this, b);
};
f.C = function(a, b) {
  return sd.D ? sd.D(b, this.Y, this.start, this.end, this.l) : sd.call(null, b, this.Y, this.start, this.end, this.l);
};
f.A = function() {
  return this.i;
};
f.N = function(a, b) {
  return 0 > b || this.end <= this.start + b ? dd(b, this.end - this.start) : y.a(this.Y, this.start + b);
};
f.Z = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : y.c(this.Y, this.start + b, c);
};
f.M = function() {
  return Kb(od, this.i);
};
function sd(a, b, c, d, e) {
  for (;;) {
    if (b instanceof rd) {
      c = b.start + c, d = b.start + d, b = b.Y;
    } else {
      var g = P(b);
      if (0 > c || 0 > d || c > g || d > g) {
        throw Error("Index out of bounds");
      }
      return new rd(a, b, c, d, e);
    }
  }
}
var qd = function() {
  function a(a, b, c) {
    return sd(null, a, b, c, null);
  }
  function b(a, b) {
    return c.c(a, b, P(a));
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function ld(a) {
  return new Xc({}, x(a.d));
}
function md(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  Tb(a, 0, b, 0, a.length);
  return b;
}
var ud = function td(b, c, d, e) {
  d = b.root.q === d.q ? d : new Xc(b.root.q, x(d.d));
  var g = b.f - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var h = d.d[g];
    b = null != h ? td(b, c - 5, h, e) : ad(b.root.q, c - 5, e);
  }
  d.d[g] = b;
  return d;
};
function kd(a, b, c, d) {
  this.f = a;
  this.shift = b;
  this.root = c;
  this.p = d;
  this.g = 275;
  this.o = 88;
}
f = kd.prototype;
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.J(null, c);
      case 3:
        return this.K(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
f.b = function(a) {
  return this.J(null, a);
};
f.a = function(a, b) {
  return this.K(null, a, b);
};
f.J = function(a, b) {
  return y.c(this, b, null);
};
f.K = function(a, b, c) {
  return y.c(this, b, c);
};
f.N = function(a, b) {
  if (this.root.q) {
    return ed(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
f.Z = function(a, b, c) {
  return 0 <= b && b < this.f ? y.a(this, b) : c;
};
f.I = function() {
  if (this.root.q) {
    return this.f;
  }
  throw Error("count after persistent!");
};
f.wb = function(a, b, c) {
  var d = this;
  if (d.root.q) {
    if (0 <= b && b < d.f) {
      return $c(this) <= b ? d.p[b & 31] = c : (a = function g(a, k) {
        var l = d.root.q === k.q ? k : new Xc(d.root.q, x(k.d));
        if (0 === a) {
          l.d[b & 31] = c;
        } else {
          var n = b >>> a & 31, p = g(a - 5, l.d[n]);
          l.d[n] = p;
        }
        return l;
      }.call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.f) {
      return gb(this, c);
    }
    if (t) {
      throw Error([w("Index "), w(b), w(" out of bounds for TransientVector of length"), w(d.f)].join(""));
    }
    return null;
  }
  throw Error("assoc! after persistent!");
};
f.Ha = function(a, b, c) {
  return jb(this, b, c);
};
f.ra = function(a, b) {
  if (this.root.q) {
    if (32 > this.f - $c(this)) {
      this.p[this.f & 31] = b;
    } else {
      var c = new Xc(this.root.q, this.p), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.p = d;
      if (this.f >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = ad(this.root.q, this.shift, c);
        this.root = new Xc(this.root.q, d);
        this.shift = e;
      } else {
        this.root = ud(this, this.shift, this.root, c);
      }
    }
    this.f += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
f.sa = function() {
  if (this.root.q) {
    this.root.q = null;
    var a = this.f - $c(this), b = Array(a);
    Tb(this.p, 0, b, 0, a);
    return new W(null, this.f, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function vd() {
  this.o = 0;
  this.g = 2097152;
}
vd.prototype.v = function() {
  return!1;
};
var wd = new vd;
function xd(a, b) {
  return Wb((null == b ? 0 : b ? b.g & 1024 || b.Yb || (b.g ? 0 : s(Fa, b)) : s(Fa, b)) ? P(a) === P(b) ? Gc(Ic, Lc.a(function(a) {
    return rb.a(R.c(b, G(a), wd), G(M(a)));
  }, a)) : null : null);
}
function yd(a, b) {
  var c = a.d;
  if (b instanceof U) {
    a: {
      for (var d = c.length, e = b.ma, g = 0;;) {
        if (d <= g) {
          c = -1;
          break a;
        }
        var h = c[g];
        if (h instanceof U && e === h.ma) {
          c = g;
          break a;
        }
        if (t) {
          g += 2;
        } else {
          c = null;
          break a;
        }
      }
      c = void 0;
    }
  } else {
    if ("string" == typeof b || "number" === typeof b) {
      a: {
        d = c.length;
        for (e = 0;;) {
          if (d <= e) {
            c = -1;
            break a;
          }
          if (b === c[e]) {
            c = e;
            break a;
          }
          if (t) {
            e += 2;
          } else {
            c = null;
            break a;
          }
        }
        c = void 0;
      }
    } else {
      if (b instanceof D) {
        a: {
          d = c.length;
          e = b.pa;
          for (g = 0;;) {
            if (d <= g) {
              c = -1;
              break a;
            }
            h = c[g];
            if (h instanceof D && e === h.pa) {
              c = g;
              break a;
            }
            if (t) {
              g += 2;
            } else {
              c = null;
              break a;
            }
          }
          c = void 0;
        }
      } else {
        if (null == b) {
          a: {
            d = c.length;
            for (e = 0;;) {
              if (d <= e) {
                c = -1;
                break a;
              }
              if (null == c[e]) {
                c = e;
                break a;
              }
              if (t) {
                e += 2;
              } else {
                c = null;
                break a;
              }
            }
            c = void 0;
          }
        } else {
          if (t) {
            a: {
              d = c.length;
              for (e = 0;;) {
                if (d <= e) {
                  c = -1;
                  break a;
                }
                if (rb.a(b, c[e])) {
                  c = e;
                  break a;
                }
                if (t) {
                  e += 2;
                } else {
                  c = null;
                  break a;
                }
              }
              c = void 0;
            }
          } else {
            c = null;
          }
        }
      }
    }
  }
  return c;
}
function zd(a, b, c) {
  this.d = a;
  this.n = b;
  this.ba = c;
  this.o = 0;
  this.g = 32374990;
}
f = zd.prototype;
f.w = function() {
  return Bb(this);
};
f.V = function() {
  return this.n < this.d.length - 2 ? new zd(this.d, this.n + 2, this.ba) : null;
};
f.H = function(a, b) {
  return O(b, this);
};
f.toString = function() {
  return pb(this);
};
f.Q = function(a, b) {
  return Zb.a(b, this);
};
f.R = function(a, b, c) {
  return Zb.c(b, c, this);
};
f.B = function() {
  return this;
};
f.I = function() {
  return(this.d.length - this.n) / 2;
};
f.P = function() {
  return new W(null, 2, 5, X, [this.d[this.n], this.d[this.n + 1]], null);
};
f.W = function() {
  return this.n < this.d.length - 2 ? new zd(this.d, this.n + 2, this.ba) : L;
};
f.v = function(a, b) {
  return Cb(this, b);
};
f.C = function(a, b) {
  return new zd(this.d, this.n, b);
};
f.A = function() {
  return this.ba;
};
f.M = function() {
  return Kb(L, this.ba);
};
function q(a, b, c, d) {
  this.i = a;
  this.f = b;
  this.d = c;
  this.l = d;
  this.o = 8196;
  this.g = 16123663;
}
f = q.prototype;
f.Da = function() {
  return new Ad({}, this.d.length, x(this.d));
};
f.w = function() {
  var a = this.l;
  return null != a ? a : this.l = a = fc(this);
};
f.J = function(a, b) {
  return B.c(this, b, null);
};
f.K = function(a, b, c) {
  a = yd(this, b);
  return-1 === a ? c : this.d[a + 1];
};
f.Ca = function(a, b, c) {
  a = yd(this, b);
  if (-1 === a) {
    if (this.f < Bd) {
      a = this.d;
      for (var d = a.length, e = Array(d + 2), g = 0;;) {
        if (g < d) {
          e[g] = a[g], g += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new q(this.i, this.f + 1, e, null);
    }
    return Ua(Ea(Wc(Cd, this), b, c), this.i);
  }
  return c === this.d[a + 1] ? this : t ? (b = x(this.d), b[a + 1] = c, new q(this.i, this.f, b, null)) : null;
};
f.Ua = function(a, b) {
  return-1 !== yd(this, b);
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.J(null, c);
      case 3:
        return this.K(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
f.b = function(a) {
  return this.J(null, a);
};
f.a = function(a, b) {
  return this.K(null, a, b);
};
f.H = function(a, b) {
  return Qb(b) ? Ea(this, y.a(b, 0), y.a(b, 1)) : Yb.c(ya, this, b);
};
f.toString = function() {
  return pb(this);
};
f.B = function() {
  return 0 <= this.d.length - 2 ? new zd(this.d, 0, null) : null;
};
f.I = function() {
  return this.f;
};
f.v = function(a, b) {
  return xd(this, b);
};
f.C = function(a, b) {
  return new q(b, this.f, this.d, this.l);
};
f.A = function() {
  return this.i;
};
f.M = function() {
  return Ua(Dd, this.i);
};
f.lb = function(a, b) {
  if (0 <= yd(this, b)) {
    var c = this.d.length, d = c - 2;
    if (0 === d) {
      return xa(this);
    }
    for (var d = Array(d), e = 0, g = 0;;) {
      if (e >= c) {
        return new q(this.i, this.f - 1, d, null);
      }
      if (rb.a(b, this.d[e])) {
        e += 2;
      } else {
        if (t) {
          d[g] = this.d[e], d[g + 1] = this.d[e + 1], g += 2, e += 2;
        } else {
          return null;
        }
      }
    }
  } else {
    return this;
  }
};
var Dd = new q(null, 0, [], null), Bd = 8;
function Ad(a, b, c) {
  this.wa = a;
  this.ia = b;
  this.d = c;
  this.o = 56;
  this.g = 258;
}
f = Ad.prototype;
f.Ha = function(a, b, c) {
  if (r(this.wa)) {
    a = yd(this, b);
    if (-1 === a) {
      return this.ia + 2 <= 2 * Bd ? (this.ia += 2, this.d.push(b), this.d.push(c), this) : Dc.c(Ed.a ? Ed.a(this.ia, this.d) : Ed.call(null, this.ia, this.d), b, c);
    }
    c !== this.d[a + 1] && (this.d[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
f.ra = function(a, b) {
  if (r(this.wa)) {
    if (b ? b.g & 2048 || b.Gb || (b.g ? 0 : s(Ha, b)) : s(Ha, b)) {
      return ib(this, gc.b ? gc.b(b) : gc.call(null, b), hc.b ? hc.b(b) : hc.call(null, b));
    }
    for (var c = F(b), d = this;;) {
      var e = G(c);
      if (r(e)) {
        c = M(c), d = ib(d, gc.b ? gc.b(e) : gc.call(null, e), hc.b ? hc.b(e) : hc.call(null, e));
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
f.sa = function() {
  if (r(this.wa)) {
    return this.wa = !1, new q(null, ac((this.ia - this.ia % 2) / 2), this.d, null);
  }
  throw Error("persistent! called twice");
};
f.J = function(a, b) {
  return B.c(this, b, null);
};
f.K = function(a, b, c) {
  if (r(this.wa)) {
    return a = yd(this, b), -1 === a ? c : this.d[a + 1];
  }
  throw Error("lookup after persistent!");
};
f.I = function() {
  if (r(this.wa)) {
    return ac((this.ia - this.ia % 2) / 2);
  }
  throw Error("count after persistent!");
};
function Ed(a, b) {
  for (var c = fb(Cd), d = 0;;) {
    if (d < a) {
      c = Dc.c(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function Fd() {
  this.F = !1;
}
function Gd(a, b) {
  return a === b ? !0 : mc(a, b) ? !0 : t ? rb.a(a, b) : null;
}
var Hd = function() {
  function a(a, b, c, h, k) {
    a = x(a);
    a[b] = c;
    a[h] = k;
    return a;
  }
  function b(a, b, c) {
    a = x(a);
    a[b] = c;
    return a;
  }
  var c = null, c = function(c, e, g, h, k) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, g);
      case 5:
        return a.call(this, c, e, g, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.D = a;
  return c;
}();
function Id(a, b) {
  var c = Array(a.length - 2);
  Tb(a, 0, c, 0, 2 * b);
  Tb(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
var Jd = function() {
  function a(a, b, c, h, k, l) {
    a = a.xa(b);
    a.d[c] = h;
    a.d[k] = l;
    return a;
  }
  function b(a, b, c, h) {
    a = a.xa(b);
    a.d[c] = h;
    return a;
  }
  var c = null, c = function(c, e, g, h, k, l) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, e, g, h);
      case 6:
        return a.call(this, c, e, g, h, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.j = b;
  c.ga = a;
  return c;
}();
function Kd(a, b, c) {
  this.q = a;
  this.r = b;
  this.d = c;
}
f = Kd.prototype;
f.da = function(a, b, c, d, e, g) {
  var h = 1 << (c >>> b & 31), k = ec(this.r & h - 1);
  if (0 === (this.r & h)) {
    var l = ec(this.r);
    if (2 * l < this.d.length) {
      a = this.xa(a);
      b = a.d;
      g.F = !0;
      a: {
        for (c = 2 * (l - k), g = 2 * k + (c - 1), l = 2 * (k + 1) + (c - 1);;) {
          if (0 === c) {
            break a;
          }
          b[l] = b[g];
          l -= 1;
          c -= 1;
          g -= 1;
        }
      }
      b[2 * k] = d;
      b[2 * k + 1] = e;
      a.r |= h;
      return a;
    }
    if (16 <= l) {
      k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      k[c >>> b & 31] = Ld.da(a, b + 5, c, d, e, g);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.r >>> d & 1) && (k[d] = null != this.d[e] ? Ld.da(a, b + 5, E(this.d[e]), this.d[e], this.d[e + 1], g) : this.d[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new Md(a, l + 1, k);
    }
    return t ? (b = Array(2 * (l + 4)), Tb(this.d, 0, b, 0, 2 * k), b[2 * k] = d, b[2 * k + 1] = e, Tb(this.d, 2 * k, b, 2 * (k + 1), 2 * (l - k)), g.F = !0, a = this.xa(a), a.d = b, a.r |= h, a) : null;
  }
  l = this.d[2 * k];
  h = this.d[2 * k + 1];
  return null == l ? (l = h.da(a, b + 5, c, d, e, g), l === h ? this : Jd.j(this, a, 2 * k + 1, l)) : Gd(d, l) ? e === h ? this : Jd.j(this, a, 2 * k + 1, e) : t ? (g.F = !0, Jd.ga(this, a, 2 * k, null, 2 * k + 1, Nd.va ? Nd.va(a, b + 5, l, h, c, d, e) : Nd.call(null, a, b + 5, l, h, c, d, e))) : null;
};
f.Ia = function() {
  return Od.b ? Od.b(this.d) : Od.call(null, this.d);
};
f.xa = function(a) {
  if (a === this.q) {
    return this;
  }
  var b = ec(this.r), c = Array(0 > b ? 4 : 2 * (b + 1));
  Tb(this.d, 0, c, 0, 2 * b);
  return new Kd(a, this.r, c);
};
f.Ja = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.r & d)) {
    return this;
  }
  var e = ec(this.r & d - 1), g = this.d[2 * e], h = this.d[2 * e + 1];
  return null == g ? (a = h.Ja(a + 5, b, c), a === h ? this : null != a ? new Kd(null, this.r, Hd.c(this.d, 2 * e + 1, a)) : this.r === d ? null : t ? new Kd(null, this.r ^ d, Id(this.d, e)) : null) : Gd(c, g) ? new Kd(null, this.r ^ d, Id(this.d, e)) : t ? this : null;
};
f.ca = function(a, b, c, d, e) {
  var g = 1 << (b >>> a & 31), h = ec(this.r & g - 1);
  if (0 === (this.r & g)) {
    var k = ec(this.r);
    if (16 <= k) {
      h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      h[b >>> a & 31] = Ld.ca(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.r >>> c & 1) && (h[c] = null != this.d[d] ? Ld.ca(a + 5, E(this.d[d]), this.d[d], this.d[d + 1], e) : this.d[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new Md(null, k + 1, h);
    }
    a = Array(2 * (k + 1));
    Tb(this.d, 0, a, 0, 2 * h);
    a[2 * h] = c;
    a[2 * h + 1] = d;
    Tb(this.d, 2 * h, a, 2 * (h + 1), 2 * (k - h));
    e.F = !0;
    return new Kd(null, this.r | g, a);
  }
  k = this.d[2 * h];
  g = this.d[2 * h + 1];
  return null == k ? (k = g.ca(a + 5, b, c, d, e), k === g ? this : new Kd(null, this.r, Hd.c(this.d, 2 * h + 1, k))) : Gd(c, k) ? d === g ? this : new Kd(null, this.r, Hd.c(this.d, 2 * h + 1, d)) : t ? (e.F = !0, new Kd(null, this.r, Hd.D(this.d, 2 * h, null, 2 * h + 1, Nd.ga ? Nd.ga(a + 5, k, g, b, c, d) : Nd.call(null, a + 5, k, g, b, c, d)))) : null;
};
f.na = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.r & e)) {
    return d;
  }
  var g = ec(this.r & e - 1), e = this.d[2 * g], g = this.d[2 * g + 1];
  return null == e ? g.na(a + 5, b, c, d) : Gd(c, e) ? g : t ? d : null;
};
var Ld = new Kd(null, 0, []);
function Md(a, b, c) {
  this.q = a;
  this.f = b;
  this.d = c;
}
f = Md.prototype;
f.da = function(a, b, c, d, e, g) {
  var h = c >>> b & 31, k = this.d[h];
  if (null == k) {
    return a = Jd.j(this, a, h, Ld.da(a, b + 5, c, d, e, g)), a.f += 1, a;
  }
  b = k.da(a, b + 5, c, d, e, g);
  return b === k ? this : Jd.j(this, a, h, b);
};
f.Ia = function() {
  return Pd.b ? Pd.b(this.d) : Pd.call(null, this.d);
};
f.xa = function(a) {
  return a === this.q ? this : new Md(a, this.f, x(this.d));
};
f.Ja = function(a, b, c) {
  var d = b >>> a & 31, e = this.d[d];
  if (null != e) {
    a = e.Ja(a + 5, b, c);
    if (a === e) {
      d = this;
    } else {
      if (null == a) {
        if (8 >= this.f) {
          a: {
            e = this.d;
            a = 2 * (this.f - 1);
            b = Array(a);
            c = 0;
            for (var g = 1, h = 0;;) {
              if (c < a) {
                c !== d && null != e[c] && (b[g] = e[c], g += 2, h |= 1 << c), c += 1;
              } else {
                d = new Kd(null, h, b);
                break a;
              }
            }
            d = void 0;
          }
        } else {
          d = new Md(null, this.f - 1, Hd.c(this.d, d, a));
        }
      } else {
        d = t ? new Md(null, this.f, Hd.c(this.d, d, a)) : null;
      }
    }
    return d;
  }
  return this;
};
f.ca = function(a, b, c, d, e) {
  var g = b >>> a & 31, h = this.d[g];
  if (null == h) {
    return new Md(null, this.f + 1, Hd.c(this.d, g, Ld.ca(a + 5, b, c, d, e)));
  }
  a = h.ca(a + 5, b, c, d, e);
  return a === h ? this : new Md(null, this.f, Hd.c(this.d, g, a));
};
f.na = function(a, b, c, d) {
  var e = this.d[b >>> a & 31];
  return null != e ? e.na(a + 5, b, c, d) : d;
};
function Qd(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (Gd(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function Rd(a, b, c, d) {
  this.q = a;
  this.ha = b;
  this.f = c;
  this.d = d;
}
f = Rd.prototype;
f.da = function(a, b, c, d, e, g) {
  if (c === this.ha) {
    b = Qd(this.d, this.f, d);
    if (-1 === b) {
      if (this.d.length > 2 * this.f) {
        return a = Jd.ga(this, a, 2 * this.f, d, 2 * this.f + 1, e), g.F = !0, a.f += 1, a;
      }
      c = this.d.length;
      b = Array(c + 2);
      Tb(this.d, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      g.F = !0;
      g = this.f + 1;
      a === this.q ? (this.d = b, this.f = g, a = this) : a = new Rd(this.q, this.ha, g, b);
      return a;
    }
    return this.d[b + 1] === e ? this : Jd.j(this, a, b + 1, e);
  }
  return(new Kd(a, 1 << (this.ha >>> b & 31), [null, this, null, null])).da(a, b, c, d, e, g);
};
f.Ia = function() {
  return Od.b ? Od.b(this.d) : Od.call(null, this.d);
};
f.xa = function(a) {
  if (a === this.q) {
    return this;
  }
  var b = Array(2 * (this.f + 1));
  Tb(this.d, 0, b, 0, 2 * this.f);
  return new Rd(a, this.ha, this.f, b);
};
f.Ja = function(a, b, c) {
  a = Qd(this.d, this.f, c);
  return-1 === a ? this : 1 === this.f ? null : t ? new Rd(null, this.ha, this.f - 1, Id(this.d, ac((a - a % 2) / 2))) : null;
};
f.ca = function(a, b, c, d, e) {
  return b === this.ha ? (a = Qd(this.d, this.f, c), -1 === a ? (a = 2 * this.f, b = Array(a + 2), Tb(this.d, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.F = !0, new Rd(null, this.ha, this.f + 1, b)) : rb.a(this.d[a], d) ? this : new Rd(null, this.ha, this.f, Hd.c(this.d, a + 1, d))) : (new Kd(null, 1 << (this.ha >>> a & 31), [null, this])).ca(a, b, c, d, e);
};
f.na = function(a, b, c, d) {
  a = Qd(this.d, this.f, c);
  return 0 > a ? d : Gd(c, this.d[a]) ? this.d[a + 1] : t ? d : null;
};
var Nd = function() {
  function a(a, b, c, h, k, l, n) {
    var p = E(c);
    if (p === k) {
      return new Rd(null, p, 2, [c, h, l, n]);
    }
    var v = new Fd;
    return Ld.da(a, b, p, c, h, v).da(a, b, k, l, n, v);
  }
  function b(a, b, c, h, k, l) {
    var n = E(b);
    if (n === h) {
      return new Rd(null, n, 2, [b, c, k, l]);
    }
    var p = new Fd;
    return Ld.ca(a, n, b, c, p).ca(a, h, k, l, p);
  }
  var c = null, c = function(c, e, g, h, k, l, n) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, g, h, k, l);
      case 7:
        return a.call(this, c, e, g, h, k, l, n);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.ga = b;
  c.va = a;
  return c;
}();
function Sd(a, b, c, d, e) {
  this.i = a;
  this.ea = b;
  this.n = c;
  this.t = d;
  this.l = e;
  this.o = 0;
  this.g = 32374860;
}
f = Sd.prototype;
f.w = function() {
  var a = this.l;
  return null != a ? a : this.l = a = Bb(this);
};
f.H = function(a, b) {
  return O(b, this);
};
f.toString = function() {
  return pb(this);
};
f.Q = function(a, b) {
  return Zb.a(b, this);
};
f.R = function(a, b, c) {
  return Zb.c(b, c, this);
};
f.B = function() {
  return this;
};
f.P = function() {
  return null == this.t ? new W(null, 2, 5, X, [this.ea[this.n], this.ea[this.n + 1]], null) : G(this.t);
};
f.W = function() {
  return null == this.t ? Od.c ? Od.c(this.ea, this.n + 2, null) : Od.call(null, this.ea, this.n + 2, null) : Od.c ? Od.c(this.ea, this.n, M(this.t)) : Od.call(null, this.ea, this.n, M(this.t));
};
f.v = function(a, b) {
  return Cb(this, b);
};
f.C = function(a, b) {
  return new Sd(b, this.ea, this.n, this.t, this.l);
};
f.A = function() {
  return this.i;
};
f.M = function() {
  return Kb(L, this.i);
};
var Od = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new Sd(null, a, b, null, null);
          }
          var h = a[b + 1];
          if (r(h) && (h = h.Ia(), r(h))) {
            return new Sd(null, a, b + 2, h, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new Sd(null, a, b, c, null);
    }
  }
  function b(a) {
    return c.c(a, 0, null);
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.c = a;
  return c;
}();
function Td(a, b, c, d, e) {
  this.i = a;
  this.ea = b;
  this.n = c;
  this.t = d;
  this.l = e;
  this.o = 0;
  this.g = 32374860;
}
f = Td.prototype;
f.w = function() {
  var a = this.l;
  return null != a ? a : this.l = a = Bb(this);
};
f.H = function(a, b) {
  return O(b, this);
};
f.toString = function() {
  return pb(this);
};
f.Q = function(a, b) {
  return Zb.a(b, this);
};
f.R = function(a, b, c) {
  return Zb.c(b, c, this);
};
f.B = function() {
  return this;
};
f.P = function() {
  return G(this.t);
};
f.W = function() {
  return Pd.j ? Pd.j(null, this.ea, this.n, M(this.t)) : Pd.call(null, null, this.ea, this.n, M(this.t));
};
f.v = function(a, b) {
  return Cb(this, b);
};
f.C = function(a, b) {
  return new Td(b, this.ea, this.n, this.t, this.l);
};
f.A = function() {
  return this.i;
};
f.M = function() {
  return Kb(L, this.i);
};
var Pd = function() {
  function a(a, b, c, h) {
    if (null == h) {
      for (h = b.length;;) {
        if (c < h) {
          var k = b[c];
          if (r(k) && (k = k.Ia(), r(k))) {
            return new Td(a, b, c + 1, k, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new Td(a, b, c, h, null);
    }
  }
  function b(a) {
    return c.j(null, a, 0, null);
  }
  var c = null, c = function(c, e, g, h) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, e, g, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.j = a;
  return c;
}();
function Ud(a, b, c, d, e, g) {
  this.i = a;
  this.f = b;
  this.root = c;
  this.S = d;
  this.X = e;
  this.l = g;
  this.o = 8196;
  this.g = 16123663;
}
f = Ud.prototype;
f.Da = function() {
  return new Vd({}, this.root, this.f, this.S, this.X);
};
f.w = function() {
  var a = this.l;
  return null != a ? a : this.l = a = fc(this);
};
f.J = function(a, b) {
  return B.c(this, b, null);
};
f.K = function(a, b, c) {
  return null == b ? this.S ? this.X : c : null == this.root ? c : t ? this.root.na(0, E(b), b, c) : null;
};
f.Ca = function(a, b, c) {
  if (null == b) {
    return this.S && c === this.X ? this : new Ud(this.i, this.S ? this.f : this.f + 1, this.root, !0, c, null);
  }
  a = new Fd;
  b = (null == this.root ? Ld : this.root).ca(0, E(b), b, c, a);
  return b === this.root ? this : new Ud(this.i, a.F ? this.f + 1 : this.f, b, this.S, this.X, null);
};
f.Ua = function(a, b) {
  return null == b ? this.S : null == this.root ? !1 : t ? this.root.na(0, E(b), b, Ub) !== Ub : null;
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.J(null, c);
      case 3:
        return this.K(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
f.b = function(a) {
  return this.J(null, a);
};
f.a = function(a, b) {
  return this.K(null, a, b);
};
f.H = function(a, b) {
  return Qb(b) ? Ea(this, y.a(b, 0), y.a(b, 1)) : Yb.c(ya, this, b);
};
f.toString = function() {
  return pb(this);
};
f.B = function() {
  if (0 < this.f) {
    var a = null != this.root ? this.root.Ia() : null;
    return this.S ? O(new W(null, 2, 5, X, [null, this.X], null), a) : a;
  }
  return null;
};
f.I = function() {
  return this.f;
};
f.v = function(a, b) {
  return xd(this, b);
};
f.C = function(a, b) {
  return new Ud(b, this.f, this.root, this.S, this.X, this.l);
};
f.A = function() {
  return this.i;
};
f.M = function() {
  return Ua(Cd, this.i);
};
f.lb = function(a, b) {
  if (null == b) {
    return this.S ? new Ud(this.i, this.f - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  if (t) {
    var c = this.root.Ja(0, E(b), b);
    return c === this.root ? this : new Ud(this.i, this.f - 1, c, this.S, this.X, null);
  }
  return null;
};
var Cd = new Ud(null, 0, null, !1, null, 0);
function Gb(a, b) {
  for (var c = a.length, d = 0, e = fb(Cd);;) {
    if (d < c) {
      var g = d + 1, e = e.Ha(null, a[d], b[d]), d = g
    } else {
      return hb(e);
    }
  }
}
function Vd(a, b, c, d, e) {
  this.q = a;
  this.root = b;
  this.count = c;
  this.S = d;
  this.X = e;
  this.o = 56;
  this.g = 258;
}
f = Vd.prototype;
f.Ha = function(a, b, c) {
  return Wd(this, b, c);
};
f.ra = function(a, b) {
  var c;
  a: {
    if (this.q) {
      if (b ? b.g & 2048 || b.Gb || (b.g ? 0 : s(Ha, b)) : s(Ha, b)) {
        c = Wd(this, gc.b ? gc.b(b) : gc.call(null, b), hc.b ? hc.b(b) : hc.call(null, b));
        break a;
      }
      c = F(b);
      for (var d = this;;) {
        var e = G(c);
        if (r(e)) {
          c = M(c), d = Wd(d, gc.b ? gc.b(e) : gc.call(null, e), hc.b ? hc.b(e) : hc.call(null, e));
        } else {
          c = d;
          break a;
        }
      }
    } else {
      throw Error("conj! after persistent");
    }
    c = void 0;
  }
  return c;
};
f.sa = function() {
  var a;
  if (this.q) {
    this.q = null, a = new Ud(null, this.count, this.root, this.S, this.X, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
f.J = function(a, b) {
  return null == b ? this.S ? this.X : null : null == this.root ? null : this.root.na(0, E(b), b);
};
f.K = function(a, b, c) {
  return null == b ? this.S ? this.X : c : null == this.root ? c : this.root.na(0, E(b), b, c);
};
f.I = function() {
  if (this.q) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function Wd(a, b, c) {
  if (a.q) {
    if (null == b) {
      a.X !== c && (a.X = c), a.S || (a.count += 1, a.S = !0);
    } else {
      var d = new Fd;
      b = (null == a.root ? Ld : a.root).da(a.q, 0, E(b), b, c, d);
      b !== a.root && (a.root = b);
      d.F && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
var Xd = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = F(a);
    for (var b = fb(Cd);;) {
      if (a) {
        var e = M(M(a)), b = Dc.c(b, G(a), G(M(a)));
        a = e;
      } else {
        return hb(b);
      }
    }
  }
  a.m = 0;
  a.h = function(a) {
    a = F(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function Yd(a, b) {
  this.oa = a;
  this.ba = b;
  this.o = 0;
  this.g = 32374988;
}
f = Yd.prototype;
f.w = function() {
  return Bb(this);
};
f.V = function() {
  var a = this.oa, a = (a ? a.g & 128 || a.ub || (a.g ? 0 : s(Ba, a)) : s(Ba, a)) ? this.oa.V(null) : M(this.oa);
  return null == a ? null : new Yd(a, this.ba);
};
f.H = function(a, b) {
  return O(b, this);
};
f.toString = function() {
  return pb(this);
};
f.Q = function(a, b) {
  return Zb.a(b, this);
};
f.R = function(a, b, c) {
  return Zb.c(b, c, this);
};
f.B = function() {
  return this;
};
f.P = function() {
  return this.oa.P(null).mb();
};
f.W = function() {
  var a = this.oa, a = (a ? a.g & 128 || a.ub || (a.g ? 0 : s(Ba, a)) : s(Ba, a)) ? this.oa.V(null) : M(this.oa);
  return null != a ? new Yd(a, this.ba) : L;
};
f.v = function(a, b) {
  return Cb(this, b);
};
f.C = function(a, b) {
  return new Yd(this.oa, b);
};
f.A = function() {
  return this.ba;
};
f.M = function() {
  return Kb(L, this.ba);
};
function gc(a) {
  return Ia(a);
}
function hc(a) {
  return Ja(a);
}
var Zd = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return r(Hc(a)) ? Yb.a(function(a, b) {
      return Eb.a(r(a) ? a : Dd, b);
    }, a) : null;
  }
  a.m = 0;
  a.h = function(a) {
    a = F(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function $d(a, b, c) {
  this.i = a;
  this.ta = b;
  this.l = c;
  this.o = 8196;
  this.g = 15077647;
}
f = $d.prototype;
f.Da = function() {
  return new ae(fb(this.ta));
};
f.w = function() {
  var a = this.l;
  if (null != a) {
    return a;
  }
  a: {
    for (var a = 0, b = F(this);;) {
      if (b) {
        var c = G(b), a = (a + E(c)) % 4503599627370496, b = M(b)
      } else {
        break a;
      }
    }
    a = void 0;
  }
  return this.l = a;
};
f.J = function(a, b) {
  return B.c(this, b, null);
};
f.K = function(a, b, c) {
  return Da(this.ta, b) ? b : c;
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.J(null, c);
      case 3:
        return this.K(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
f.b = function(a) {
  return this.J(null, a);
};
f.a = function(a, b) {
  return this.K(null, a, b);
};
f.H = function(a, b) {
  return new $d(this.i, Hb.c(this.ta, b, null), null);
};
f.toString = function() {
  return pb(this);
};
f.B = function() {
  var a = F(this.ta);
  return a ? new Yd(a, null) : null;
};
f.vb = function(a, b) {
  return new $d(this.i, Ga(this.ta, b), null);
};
f.I = function() {
  return wa(this.ta);
};
f.v = function(a, b) {
  var c = this;
  return(null == b ? !1 : b ? b.g & 4096 || b.ac ? !0 : b.g ? !1 : s(Ka, b) : s(Ka, b)) && P(c) === P(b) && Gc(function(a) {
    return R.c(c, a, Ub) === Ub ? !1 : !0;
  }, b);
};
f.C = function(a, b) {
  return new $d(b, this.ta, this.l);
};
f.A = function() {
  return this.i;
};
f.M = function() {
  return Kb(be, this.i);
};
var be = new $d(null, Dd, 0);
function ce(a) {
  var b = a.length;
  if (b <= Bd) {
    for (var c = 0, d = fb(Dd);;) {
      if (c < b) {
        var e = c + 1, d = ib(d, a[c], null), c = e
      } else {
        return new $d(null, hb(d), null);
      }
    }
  } else {
    for (c = 0, d = fb(be);;) {
      if (c < b) {
        e = c + 1, d = gb(d, a[c]), c = e;
      } else {
        return hb(d);
      }
    }
  }
}
function ae(a) {
  this.ka = a;
  this.g = 259;
  this.o = 136;
}
f = ae.prototype;
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return B.c(this.ka, c, Ub) === Ub ? null : c;
      case 3:
        return B.c(this.ka, c, Ub) === Ub ? d : c;
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
f.b = function(a) {
  return B.c(this.ka, a, Ub) === Ub ? null : a;
};
f.a = function(a, b) {
  return B.c(this.ka, a, Ub) === Ub ? b : a;
};
f.J = function(a, b) {
  return B.c(this, b, null);
};
f.K = function(a, b, c) {
  return B.c(this.ka, b, Ub) === Ub ? c : b;
};
f.I = function() {
  return P(this.ka);
};
f.ra = function(a, b) {
  this.ka = Dc.c(this.ka, b, null);
  return this;
};
f.sa = function() {
  return new $d(null, hb(this.ka), null);
};
function de(a) {
  a = F(a);
  if (null == a) {
    return be;
  }
  if (a instanceof vb && 0 === a.n) {
    a = a.d;
    a: {
      for (var b = 0, c = fb(be);;) {
        if (b < a.length) {
          var d = b + 1, c = c.ra(null, a[b]), b = d
        } else {
          a = c;
          break a;
        }
      }
      a = void 0;
    }
    return a.sa(null);
  }
  if (t) {
    for (d = fb(be);;) {
      if (null != a) {
        b = a.V(null), d = d.ra(null, a.P(null)), a = b;
      } else {
        return d.sa(null);
      }
    }
  } else {
    return null;
  }
}
function nc(a) {
  if (a && (a.o & 4096 || a.Ib)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([w("Doesn't support name: "), w(a)].join(""));
}
function ee(a, b, c, d, e) {
  this.i = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.l = e;
  this.g = 32375006;
  this.o = 8192;
}
f = ee.prototype;
f.w = function() {
  var a = this.l;
  return null != a ? a : this.l = a = Bb(this);
};
f.V = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new ee(this.i, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new ee(this.i, this.start + this.step, this.end, this.step, null) : null;
};
f.H = function(a, b) {
  return O(b, this);
};
f.toString = function() {
  return pb(this);
};
f.Q = function(a, b) {
  return xb.a(this, b);
};
f.R = function(a, b, c) {
  return xb.c(this, b, c);
};
f.B = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null;
};
f.I = function() {
  return ra(ab(this)) ? 0 : Math.ceil((this.end - this.start) / this.step);
};
f.P = function() {
  return null == ab(this) ? null : this.start;
};
f.W = function() {
  return null != ab(this) ? new ee(this.i, this.start + this.step, this.end, this.step, null) : L;
};
f.v = function(a, b) {
  return Cb(this, b);
};
f.C = function(a, b) {
  return new ee(b, this.start, this.end, this.step, this.l);
};
f.A = function() {
  return this.i;
};
f.N = function(a, b) {
  if (b < wa(this)) {
    return this.start + b * this.step;
  }
  if (this.start > this.end && 0 === this.step) {
    return this.start;
  }
  throw Error("Index out of bounds");
};
f.Z = function(a, b, c) {
  return b < wa(this) ? this.start + b * this.step : this.start > this.end && 0 === this.step ? this.start : c;
};
f.M = function() {
  return Kb(L, this.i);
};
var fe = function() {
  function a(a, b, c) {
    return new ee(null, a, b, c, null);
  }
  function b(a, b) {
    return e.c(a, b, 1);
  }
  function c(a) {
    return e.c(0, a, 1);
  }
  function d() {
    return e.c(0, Number.MAX_VALUE, 1);
  }
  var e = null, e = function(e, h, k) {
    switch(arguments.length) {
      case 0:
        return d.call(this);
      case 1:
        return c.call(this, e);
      case 2:
        return b.call(this, e, h);
      case 3:
        return a.call(this, e, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.k = d;
  e.b = c;
  e.a = b;
  e.c = a;
  return e;
}();
function ge(a) {
  return Cc(Yb.c(function(a, c) {
    return Dc.c(a, c, R.c(a, c, 0) + 1);
  }, fb(Dd), a));
}
function Y(a, b, c, d, e, g, h) {
  var k = ia;
  try {
    ia = null == ia ? null : ia - 1;
    if (null != ia && 0 > ia) {
      return C(a, "#");
    }
    C(a, c);
    F(h) && (b.c ? b.c(G(h), a, g) : b.call(null, G(h), a, g));
    for (var l = M(h), n = oa.b(g);l && (null == n || 0 !== n);) {
      C(a, d);
      b.c ? b.c(G(l), a, g) : b.call(null, G(l), a, g);
      var p = M(l);
      c = n - 1;
      l = p;
      n = c;
    }
    r(oa.b(g)) && (C(a, d), b.c ? b.c("...", a, g) : b.call(null, "...", a, g));
    return C(a, e);
  } finally {
    ia = k;
  }
}
var he = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = N(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = F(b), g = null, h = 0, k = 0;;) {
      if (k < h) {
        var l = g.N(null, k);
        C(a, l);
        k += 1;
      } else {
        if (e = F(e)) {
          g = e, Rb(g) ? (e = lb(g), h = mb(g), g = e, l = P(e), e = h, h = l) : (l = G(g), C(a, l), e = M(g), g = null, h = 0), k = 0;
        } else {
          return null;
        }
      }
    }
  }
  a.m = 1;
  a.h = function(a) {
    var d = G(a);
    a = J(a);
    return b(d, a);
  };
  a.e = b;
  return a;
}(), ie = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function je(a) {
  return[w('"'), w(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return ie[a];
  })), w('"')].join("");
}
var Z = function ke(b, c, d) {
  if (null == b) {
    return C(c, "nil");
  }
  if (void 0 === b) {
    return C(c, "#\x3cundefined\x3e");
  }
  if (t) {
    r(function() {
      var c = R.a(d, ma);
      return r(c) ? (c = b ? b.g & 131072 || b.Hb ? !0 : b.g ? !1 : s(Ra, b) : s(Ra, b)) ? Lb(b) : c : c;
    }()) && (C(c, "^"), ke(Lb(b), c, d), C(c, " "));
    if (null == b) {
      return C(c, "nil");
    }
    if (b.Qa) {
      return b.qb(b, c, d);
    }
    if (b && (b.g & 2147483648 || b.O)) {
      return b.s(null, c, d);
    }
    if (sa(b) === Boolean || "number" === typeof b) {
      return C(c, "" + w(b));
    }
    if (null != b && b.constructor === Object) {
      return C(c, "#js "), le.j ? le.j(Lc.a(function(c) {
        return new W(null, 2, 5, X, [oc.b(c), b[c]], null);
      }, Sb(b)), ke, c, d) : le.call(null, Lc.a(function(c) {
        return new W(null, 2, 5, X, [oc.b(c), b[c]], null);
      }, Sb(b)), ke, c, d);
    }
    if (b instanceof Array) {
      return Y(c, ke, "#js [", " ", "]", d, b);
    }
    if ("string" == typeof b) {
      return r(la.b(d)) ? C(c, je(b)) : C(c, b);
    }
    if (Ib(b)) {
      return he.e(c, N(["#\x3c", "" + w(b), "\x3e"], 0));
    }
    if (b instanceof Date) {
      var e = function(b, c) {
        for (var d = "" + w(b);;) {
          if (P(d) < c) {
            d = [w("0"), w(d)].join("");
          } else {
            return d;
          }
        }
      };
      return he.e(c, N(['#inst "', "" + w(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0));
    }
    return b instanceof RegExp ? he.e(c, N(['#"', b.source, '"'], 0)) : (b ? b.g & 2147483648 || b.O || (b.g ? 0 : s(cb, b)) : s(cb, b)) ? db(b, c, d) : t ? he.e(c, N(["#\x3c", "" + w(b), "\x3e"], 0)) : null;
  }
  return null;
}, me = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (null == a || ra(F(a))) {
      b = "";
    } else {
      b = w;
      var e = ja(), g = new ga;
      a: {
        var h = new ob(g);
        Z(G(a), h, e);
        a = F(M(a));
        for (var k = null, l = 0, n = 0;;) {
          if (n < l) {
            var p = k.N(null, n);
            C(h, " ");
            Z(p, h, e);
            n += 1;
          } else {
            if (a = F(a)) {
              k = a, Rb(k) ? (a = lb(k), l = mb(k), k = a, p = P(a), a = l, l = p) : (p = G(k), C(h, " "), Z(p, h, e), a = M(k), k = null, l = 0), n = 0;
            } else {
              break a;
            }
          }
        }
      }
      b = "" + b(g);
    }
    return b;
  }
  a.m = 0;
  a.h = function(a) {
    a = F(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function le(a, b, c, d) {
  return Y(c, function(a, c, d) {
    b.c ? b.c(Ia(a), c, d) : b.call(null, Ia(a), c, d);
    C(c, " ");
    return b.c ? b.c(Ja(a), c, d) : b.call(null, Ja(a), c, d);
  }, "{", ", ", "}", d, F(a));
}
Yd.prototype.O = !0;
Yd.prototype.s = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
vb.prototype.O = !0;
vb.prototype.s = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
rd.prototype.O = !0;
rd.prototype.s = function(a, b, c) {
  return Y(b, Z, "[", " ", "]", c, this);
};
uc.prototype.O = !0;
uc.prototype.s = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
q.prototype.O = !0;
q.prototype.s = function(a, b, c) {
  return le(this, Z, b, c);
};
V.prototype.O = !0;
V.prototype.s = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
Sd.prototype.O = !0;
Sd.prototype.s = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
pd.prototype.O = !0;
pd.prototype.s = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
Ud.prototype.O = !0;
Ud.prototype.s = function(a, b, c) {
  return le(this, Z, b, c);
};
$d.prototype.O = !0;
$d.prototype.s = function(a, b, c) {
  return Y(b, Z, "#{", " ", "}", c, this);
};
W.prototype.O = !0;
W.prototype.s = function(a, b, c) {
  return Y(b, Z, "[", " ", "]", c, this);
};
ic.prototype.O = !0;
ic.prototype.s = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
zd.prototype.O = !0;
zd.prototype.s = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
jc.prototype.O = !0;
jc.prototype.s = function(a, b) {
  return C(b, "()");
};
lc.prototype.O = !0;
lc.prototype.s = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
ee.prototype.O = !0;
ee.prototype.s = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
Td.prototype.O = !0;
Td.prototype.s = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, this);
};
W.prototype.Ma = !0;
W.prototype.Na = function(a, b) {
  return Xb.a(this, b);
};
rd.prototype.Ma = !0;
rd.prototype.Na = function(a, b) {
  return Xb.a(this, b);
};
U.prototype.Ma = !0;
U.prototype.Na = function(a, b) {
  return qb(this, b);
};
D.prototype.Ma = !0;
D.prototype.Na = function(a, b) {
  return qb(this, b);
};
function ne(a, b, c, d) {
  this.state = a;
  this.i = b;
  this.Tb = c;
  this.Bb = d;
  this.g = 2153938944;
  this.o = 2;
}
f = ne.prototype;
f.w = function() {
  return this[ca] || (this[ca] = ++ea);
};
f.xb = function(a, b, c) {
  a = F(this.Bb);
  for (var d = null, e = 0, g = 0;;) {
    if (g < e) {
      var h = d.N(null, g), k = Q.c(h, 0, null), h = Q.c(h, 1, null);
      h.j ? h.j(k, this, b, c) : h.call(null, k, this, b, c);
      g += 1;
    } else {
      if (a = F(a)) {
        Rb(a) ? (d = lb(a), a = mb(a), k = d, e = P(d), d = k) : (d = G(a), k = Q.c(d, 0, null), h = Q.c(d, 1, null), h.j ? h.j(k, this, b, c) : h.call(null, k, this, b, c), a = M(a), d = null, e = 0), g = 0;
      } else {
        return null;
      }
    }
  }
};
f.s = function(a, b, c) {
  C(b, "#\x3cAtom: ");
  Z(this.state, b, c);
  return C(b, "\x3e");
};
f.A = function() {
  return this.i;
};
f.Oa = function() {
  return this.state;
};
f.v = function(a, b) {
  return this === b;
};
var pe = function() {
  function a(a) {
    return new ne(a, null, null, null);
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k);
    }
    function b(a, c) {
      var d = Vb(c) ? T.a(Xd, c) : c, e = R.a(d, oe), d = R.a(d, ma);
      return new ne(a, d, e, null);
    }
    a.m = 1;
    a.h = function(a) {
      var c = G(a);
      a = J(a);
      return b(c, a);
    };
    a.e = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, N(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 1;
  b.h = c.h;
  b.b = a;
  b.e = c.e;
  return b;
}();
function qe(a, b) {
  var c = a.Tb;
  if (null != c && !r(c.b ? c.b(b) : c.call(null, b))) {
    throw Error([w("Assert failed: "), w("Validator rejected reference state"), w("\n"), w(me.e(N([kc(new D(null, "validate", "validate", 1233162959, null), new D(null, "new-value", "new-value", 972165309, null))], 0)))].join(""));
  }
  c = a.state;
  a.state = b;
  null != a.Bb && eb(a, c, b);
  return b;
}
var re = function() {
  function a(a, b, c, d, e) {
    return qe(a, b.j ? b.j(a.state, c, d, e) : b.call(null, a.state, c, d, e));
  }
  function b(a, b, c, d) {
    return qe(a, b.c ? b.c(a.state, c, d) : b.call(null, a.state, c, d));
  }
  function c(a, b, c) {
    return qe(a, b.a ? b.a(a.state, c) : b.call(null, a.state, c));
  }
  function d(a, b) {
    return qe(a, b.b ? b.b(a.state) : b.call(null, a.state));
  }
  var e = null, g = function() {
    function a(c, d, e, g, h, K) {
      var I = null;
      5 < arguments.length && (I = N(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, g, h, I);
    }
    function b(a, c, d, e, g, h) {
      return qe(a, T.e(c, a.state, d, e, g, N([h], 0)));
    }
    a.m = 5;
    a.h = function(a) {
      var c = G(a);
      a = M(a);
      var d = G(a);
      a = M(a);
      var e = G(a);
      a = M(a);
      var g = G(a);
      a = M(a);
      var h = G(a);
      a = J(a);
      return b(c, d, e, g, h, a);
    };
    a.e = b;
    return a;
  }(), e = function(e, k, l, n, p, v) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, n);
      case 5:
        return a.call(this, e, k, l, n, p);
      default:
        return g.e(e, k, l, n, p, N(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.m = 5;
  e.h = g.h;
  e.a = d;
  e.c = c;
  e.j = b;
  e.D = a;
  e.e = g.e;
  return e;
}();
function se(a, b) {
  this.state = a;
  this.ya = b;
  this.o = 1;
  this.g = 32768;
}
se.prototype.Oa = function() {
  var a = this;
  return te.b(re.a(a.state, function(b) {
    b = Vb(b) ? T.a(Xd, b) : b;
    var c = R.a(b, ue);
    return r(c) ? b : new q(null, 2, [ue, !0, te, a.ya.k ? a.ya.k() : a.ya.call(null)], null);
  }));
};
bc = function() {
  function a(a) {
    return(Math.random.k ? Math.random.k() : Math.random.call(null)) * a;
  }
  function b() {
    return c.b(1);
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.k = b;
  c.b = a;
  return c;
}();
cc = function(a) {
  return Math.floor.b ? Math.floor.b((Math.random.k ? Math.random.k() : Math.random.call(null)) * a) : Math.floor.call(null, (Math.random.k ? Math.random.k() : Math.random.call(null)) * a);
};
var ve = new U(null, "update-channel", "update-channel"), na = new U(null, "dup", "dup"), we = new U(null, "path", "path"), xe = new U(null, "finished", "finished"), tb = new U(null, "default", "default"), $ = new U(null, "recur", "recur"), ye = new U(null, "outer-walls", "outer-walls"), ze = new U(null, "visited", "visited"), Ae = new U(null, "finally-block", "finally-block"), Be = new U(null, "catch-block", "catch-block"), ka = new U(null, "flush-on-newline", "flush-on-newline"), Ce = new U(null, 
"location", "location"), De = new U(null, "catch-exception", "catch-exception"), Ee = new U(null, "continue-block", "continue-block"), Fe = new U(null, "prev", "prev"), Ge = new U(null, "y2", "y2"), He = new U(null, "y1", "y1"), Ie = new U(null, "size", "size"), Je = new U(null, "finished-fn", "finished-fn"), Ke = new U(null, "walls", "walls"), ue = new U(null, "done", "done"), Le = new U(null, "next-location-fn", "next-location-fn"), oa = new U(null, "print-length", "print-length"), Me = new U(null, 
"x2", "x2"), t = new U(null, "else", "else"), la = new U(null, "readably", "readably"), Ne = new U(null, "x1", "x1"), oe = new U(null, "validator", "validator"), ma = new U(null, "meta", "meta"), Oe = new U(null, "doors", "doors"), te = new U(null, "value", "value");
function Pe(a) {
  var b = Q.c(a, 0, null), c = Q.c(a, 1, null);
  return de(function() {
    return function e(a) {
      return new V(null, function() {
        for (var h = a;;) {
          var k = F(h);
          if (k) {
            var l = k, n = G(l);
            if (k = F(function(a, e, g, h) {
              return function S(k) {
                return new V(null, function(a, e) {
                  return function() {
                    for (var a = k;;) {
                      if (a = F(a)) {
                        if (Rb(a)) {
                          var g = lb(a), h = P(g), l = sc(h);
                          a: {
                            for (var n = 0;;) {
                              if (n < h) {
                                var p = y.a(g, n);
                                Fc.e(0, e, N([p], 0)) && l.add(new W(null, 2, 5, X, [e + b, p + c], null));
                                n += 1;
                              } else {
                                g = !0;
                                break a;
                              }
                            }
                            g = void 0;
                          }
                          return g ? vc(l.L(), S(mb(a))) : vc(l.L(), null);
                        }
                        l = G(a);
                        if (Fc.e(0, e, N([l], 0))) {
                          return O(new W(null, 2, 5, X, [e + b, l + c], null), S(J(a)));
                        }
                        a = J(a);
                      } else {
                        return null;
                      }
                    }
                  };
                }(a, e, g, h), null, null);
              };
            }(h, n, l, k)(new W(null, 3, 5, X, [-1, 0, 1], null)))) {
              return Ac.a(k, e(J(h)));
            }
            h = J(h);
          } else {
            return null;
          }
        }
      }, null, null);
    }(new W(null, 3, 5, X, [-1, 0, 1], null));
  }());
}
function Qe(a, b) {
  var c = Q.c(b, 0, null), d = Q.c(b, 1, null), e = rb.a(d, 3);
  return e ? e : (d = rb.a(d, 2)) ? a.b ? a.b(c) : a.call(null, c) : d;
}
;function Re(a) {
  if (a ? a.Lb : a) {
    return!0;
  }
  var b;
  b = Re[m(null == a ? null : a)];
  if (!b && (b = Re._, !b)) {
    throw u("Handler.active?", a);
  }
  return b.call(null, a);
}
function Se(a) {
  if (a ? a.ob : a) {
    return a.ob();
  }
  var b;
  b = Se[m(null == a ? null : a)];
  if (!b && (b = Se._, !b)) {
    throw u("Buffer.full?", a);
  }
  return b.call(null, a);
}
;function Te(a, b, c, d, e) {
  for (var g = 0;;) {
    if (g < e) {
      c[d + g] = a[b + g], g += 1;
    } else {
      break;
    }
  }
}
function Ue(a, b, c, d) {
  this.head = a;
  this.p = b;
  this.length = c;
  this.d = d;
}
Ue.prototype.pop = function() {
  if (0 === this.length) {
    return null;
  }
  var a = this.d[this.p];
  this.d[this.p] = null;
  this.p = (this.p + 1) % this.d.length;
  this.length -= 1;
  return a;
};
Ue.prototype.unshift = function(a) {
  this.d[this.head] = a;
  this.head = (this.head + 1) % this.d.length;
  this.length += 1;
  return null;
};
function Ve(a, b) {
  a.length + 1 === a.d.length && a.resize();
  a.unshift(b);
}
Ue.prototype.resize = function() {
  var a = Array(2 * this.d.length);
  return this.p < this.head ? (Te(this.d, this.p, a, 0, this.length), this.p = 0, this.head = this.length, this.d = a) : this.p > this.head ? (Te(this.d, this.p, a, 0, this.d.length - this.p), Te(this.d, 0, a, this.d.length - this.p, this.head), this.p = 0, this.head = this.length, this.d = a) : this.p === this.head ? (this.head = this.p = 0, this.d = a) : null;
};
function We(a, b) {
  for (var c = a.length, d = 0;;) {
    if (d < c) {
      var e = a.pop();
      (b.b ? b.b(e) : b.call(null, e)) && a.unshift(e);
      d += 1;
    } else {
      break;
    }
  }
}
function Xe(a) {
  if (!(0 < a)) {
    throw Error([w("Assert failed: "), w("Can't create a ring buffer of size 0"), w("\n"), w(me.e(N([kc(new D(null, "\x3e", "\x3e", -1640531465, null), new D(null, "n", "n", -1640531417, null), 0)], 0)))].join(""));
  }
  return new Ue(0, 0, 0, Array(a));
}
function Ye(a, b) {
  this.U = a;
  this.Rb = b;
  this.o = 0;
  this.g = 2;
}
Ye.prototype.I = function() {
  return this.U.length;
};
Ye.prototype.ob = function() {
  return this.U.length === this.Rb;
};
Ye.prototype.Kb = function() {
  return this.U.pop();
};
function Ze(a, b) {
  if (!ra(Se(a))) {
    throw Error([w("Assert failed: "), w("Can't add to a full buffer"), w("\n"), w(me.e(N([kc(new D(null, "not", "not", -1640422260, null), kc(new D("impl", "full?", "impl/full?", -1337857039, null), new D(null, "this", "this", -1636972457, null)))], 0)))].join(""));
  }
  a.U.unshift(b);
}
;var $e = null, af = Xe(32), bf = !1, cf = !1;
function df() {
  bf = !0;
  cf = !1;
  for (var a = 0;;) {
    var b = af.pop();
    if (null != b && (b.k ? b.k() : b.call(null), 1024 > a)) {
      a += 1;
      continue;
    }
    break;
  }
  bf = !1;
  return 0 < af.length ? ef.k ? ef.k() : ef.call(null) : null;
}
"undefined" !== typeof MessageChannel && ($e = new MessageChannel, $e.port1.onmessage = function() {
  return df();
});
function ef() {
  var a = cf;
  if (r(a ? bf : a)) {
    return null;
  }
  cf = !0;
  return "undefined" !== typeof MessageChannel ? $e.port2.postMessage(0) : "undefined" !== typeof setImmediate ? setImmediate(df) : t ? setTimeout(df, 0) : null;
}
function ff(a) {
  Ve(af, a);
  return ef();
}
;var gf, jf = function hf(b) {
  "undefined" === typeof gf && (gf = function(b, d, e) {
    this.ya = b;
    this.Nb = d;
    this.Pb = e;
    this.o = 0;
    this.g = 393216;
  }, gf.Qa = !0, gf.Pa = "cljs.core.async.impl.ioc-helpers/t12377", gf.qb = function(b, d) {
    return C(d, "cljs.core.async.impl.ioc-helpers/t12377");
  }, gf.prototype.Lb = function() {
    return!0;
  }, gf.prototype.la = function() {
    return this.ya;
  }, gf.prototype.A = function() {
    return this.Pb;
  }, gf.prototype.C = function(b, d) {
    return new gf(this.ya, this.Nb, d);
  });
  return new gf(b, hf, null);
};
function kf(a) {
  try {
    return a[0].call(null, a);
  } catch (b) {
    if (b instanceof Object) {
      throw a[6].pb(), b;
    }
    if (t) {
      throw b;
    }
    return null;
  }
}
function lf(a, b, c) {
  c = c.Mb(jf(function(c) {
    a[2] = c;
    a[1] = b;
    return kf(a);
  }));
  return r(c) ? (a[2] = Qa(c), a[1] = b, $) : null;
}
function mf(a, b, c, d) {
  c = c.zb(d, jf(function() {
    a[2] = null;
    a[1] = b;
    return kf(a);
  }));
  return r(c) ? (a[2] = Qa(c), a[1] = b, $) : null;
}
function nf(a, b) {
  var c = a[6];
  null != b && c.zb(b, jf(function() {
    return null;
  }));
  c.pb();
  return c;
}
function of(a) {
  for (;;) {
    var b = a[4], c = Be.b(b), d = De.b(b), e = a[5];
    if (r(function() {
      var a = e;
      return r(a) ? ra(b) : a;
    }())) {
      throw e;
    }
    if (r(function() {
      var a = e;
      return r(a) ? (a = c, r(a) ? e instanceof d : a) : a;
    }())) {
      return a[1] = c, a[2] = e, a[5] = null, a[4] = Hb.e(b, Be, null, N([De, null], 0)), a;
    }
    if (r(function() {
      var a = e;
      return r(a) ? ra(c) && ra(Ae.b(b)) : a;
    }())) {
      a[4] = Fe.b(b);
    } else {
      if (r(function() {
        var a = e;
        return r(a) ? (a = ra(c)) ? Ae.b(b) : a : a;
      }()) || r(function() {
        var a = ra(e);
        return a ? Ae.b(b) : a;
      }())) {
        return a[1] = Ae.b(b), a[4] = Hb.c(b, Ae, null), a;
      }
      if (ra(e) && ra(Ae.b(b))) {
        return a[1] = Ee.b(b), a[4] = Fe.b(b), a;
      }
      if (t) {
        throw Error([w("Assert failed: "), w("No matching clause"), w("\n"), w(me.e(N([!1], 0)))].join(""));
      }
      return null;
    }
  }
}
;var pf, rf = function qf(b) {
  "undefined" === typeof pf && (pf = function(b, d, e) {
    this.F = b;
    this.Cb = d;
    this.Ob = e;
    this.o = 0;
    this.g = 425984;
  }, pf.Qa = !0, pf.Pa = "cljs.core.async.impl.channels/t12366", pf.qb = function(b, d) {
    return C(d, "cljs.core.async.impl.channels/t12366");
  }, pf.prototype.Oa = function() {
    return this.F;
  }, pf.prototype.A = function() {
    return this.Ob;
  }, pf.prototype.C = function(b, d) {
    return new pf(this.F, this.Cb, d);
  });
  return new pf(b, qf, null);
};
function sf(a, b) {
  this.Ab = a;
  this.F = b;
}
function tf(a) {
  return Re(a.Ab);
}
function uf(a, b, c, d, e, g) {
  this.La = a;
  this.Sa = b;
  this.Ta = c;
  this.Ra = d;
  this.U = e;
  this.closed = g;
}
uf.prototype.pb = function() {
  if (!this.closed) {
    for (this.closed = !0;;) {
      var a = this.La.pop();
      if (null != a) {
        var b = a.la();
        ff(function(a) {
          return function() {
            return a.b ? a.b(null) : a.call(null, null);
          };
        }(b, a));
      } else {
        break;
      }
    }
  }
  return null;
};
uf.prototype.Mb = function(a) {
  if (null != this.U && 0 < P(this.U)) {
    return a.la(), rf(this.U.Kb());
  }
  for (;;) {
    var b = this.Ta.pop();
    if (null != b) {
      var c = b.F, b = b.Ab.la();
      a.la();
      ff(b);
      return rf(c);
    }
    if (this.closed) {
      return a.la(), rf(null);
    }
    64 < this.Sa ? (this.Sa = 0, We(this.La, Re)) : this.Sa += 1;
    if (!(1024 > this.La.length)) {
      throw Error([w("Assert failed: "), w([w("No more than "), w(1024), w(" pending takes are allowed on a single channel.")].join("")), w("\n"), w(me.e(N([kc(new D(null, "\x3c", "\x3c", -1640531467, null), kc(new D(null, ".-length", ".-length", 1395928862, null), new D(null, "takes", "takes", -1530407291, null)), new D("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", -1989946393, null))], 0)))].join(""));
    }
    Ve(this.La, a);
    return null;
  }
};
uf.prototype.zb = function(a, b) {
  if (null == a) {
    throw Error([w("Assert failed: "), w("Can't put nil in on a channel"), w("\n"), w(me.e(N([kc(new D(null, "not", "not", -1640422260, null), kc(new D(null, "nil?", "nil?", -1637150201, null), new D(null, "val", "val", -1640415014, null)))], 0)))].join(""));
  }
  if (this.closed) {
    return rf(null);
  }
  for (;;) {
    var c = this.La.pop();
    if (null != c) {
      var d = c.la(), e = b.la();
      ff(function(b) {
        return function() {
          return b.b ? b.b(a) : b.call(null, a);
        };
      }(d, e, c));
    } else {
      if (null == this.U || this.U.ob()) {
        64 < this.Ra ? (this.Ra = 0, We(this.Ta, tf)) : this.Ra += 1;
        if (!(1024 > this.Ta.length)) {
          throw Error([w("Assert failed: "), w([w("No more than "), w(1024), w(" pending puts are allowed on a single channel."), w(" Consider using a windowed buffer.")].join("")), w("\n"), w(me.e(N([kc(new D(null, "\x3c", "\x3c", -1640531467, null), kc(new D(null, ".-length", ".-length", 1395928862, null), new D(null, "puts", "puts", -1637078787, null)), new D("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", -1989946393, null))], 0)))].join(""));
        }
        Ve(this.Ta, new sf(b, a));
        return null;
      }
      e = b.la();
      Ze(this.U, a);
    }
    return rf(null);
  }
};
function vf(a) {
  return new uf(Xe(32), 0, Xe(32), 0, a, null);
}
;var wf = function() {
  function a(a) {
    for (;;) {
      if (0.5 > Math.random() && 15 > a) {
        a += 1;
      } else {
        return a;
      }
    }
  }
  function b() {
    return c.b(0);
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.k = b;
  c.b = a;
  return c;
}();
function xf(a, b, c) {
  this.key = a;
  this.F = b;
  this.forward = c;
  this.o = 0;
  this.g = 2155872256;
}
xf.prototype.s = function(a, b, c) {
  return Y(b, Z, "[", " ", "]", c, this);
};
xf.prototype.B = function() {
  return ya(ya(L, this.F), this.key);
};
var yf = function() {
  function a(a, b, c) {
    c = Array(c + 1);
    for (var h = 0;;) {
      if (h < c.length) {
        c[h] = null, h += 1;
      } else {
        break;
      }
    }
    return new xf(a, b, c);
  }
  function b(a) {
    return c.c(null, null, a);
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.c = a;
  return c;
}(), zf = function() {
  function a(a, b, c, h) {
    for (;;) {
      if (0 > c) {
        return a;
      }
      a: {
        for (;;) {
          var k = a.forward[c];
          if (r(k)) {
            if (k.key < b) {
              a = k;
            } else {
              break a;
            }
          } else {
            break a;
          }
        }
        a = void 0;
      }
      null != h && (h[c] = a);
      c -= 1;
    }
  }
  function b(a, b, g) {
    return c.j(a, b, g, null);
  }
  var c = null, c = function(c, e, g, h) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, g);
      case 4:
        return a.call(this, c, e, g, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.j = a;
  return c;
}();
function Af(a, b) {
  this.ua = a;
  this.$ = b;
  this.o = 0;
  this.g = 2155872256;
}
Af.prototype.s = function(a, b, c) {
  return Y(b, function(a) {
    return Y(b, Z, "", " ", "", c, a);
  }, "{", ", ", "}", c, this);
};
Af.prototype.B = function() {
  return function b(c) {
    return new V(null, function() {
      return null == c ? null : O(new W(null, 2, 5, X, [c.key, c.F], null), b(c.forward[0]));
    }, null, null);
  }(this.ua.forward[0]);
};
Af.prototype.put = function(a, b) {
  var c = Array(15), d = zf.j(this.ua, a, this.$, c).forward[0];
  if (null != d && d.key === a) {
    return d.F = b;
  }
  d = wf.k();
  if (d > this.$) {
    for (var e = this.$ + 1;;) {
      if (e <= d + 1) {
        c[e] = this.ua, e += 1;
      } else {
        break;
      }
    }
    this.$ = d;
  }
  for (d = yf.c(a, b, Array(d));;) {
    return 0 <= this.$ ? (c = c[0].forward, d.forward[0] = c[0], c[0] = d) : null;
  }
};
Af.prototype.remove = function(a) {
  var b = Array(15), c = zf.j(this.ua, a, this.$, b).forward[0];
  if (null != c && c.key === a) {
    for (a = 0;;) {
      if (a <= this.$) {
        var d = b[a].forward;
        d[a] === c && (d[a] = c.forward[a]);
        a += 1;
      } else {
        break;
      }
    }
    for (;;) {
      if (0 < this.$ && null == this.ua.forward[this.$]) {
        this.$ -= 1;
      } else {
        return null;
      }
    }
  } else {
    return null;
  }
};
function Bf(a) {
  for (var b = Cf, c = b.ua, d = b.$;;) {
    if (0 > d) {
      return c === b.ua ? null : c;
    }
    var e;
    a: {
      for (e = c;;) {
        e = e.forward[d];
        if (null == e) {
          e = null;
          break a;
        }
        if (e.key >= a) {
          break a;
        }
      }
      e = void 0;
    }
    null != e ? (d -= 1, c = e) : d -= 1;
  }
}
var Cf = new Af(yf.b(0), 0);
function Df() {
  var a = (new Date).valueOf() + 10, b = Bf(a), b = r(r(b) ? b.key < a + 10 : b) ? b.F : null;
  if (r(b)) {
    return b;
  }
  var c = vf(null);
  Cf.put(a, c);
  setTimeout(function() {
    Cf.remove(a);
    return c.pb();
  }, 10);
  return c;
}
;var Ef = function() {
  function a(a) {
    a = rb.a(a, 0) ? null : a;
    return vf("number" === typeof a ? new Ye(Xe(a), a) : a);
  }
  function b() {
    return c.b(null);
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.k = b;
  c.b = a;
  return c;
}();
var Ff = function() {
  function a(a, b) {
    return P(a) < P(b) ? Yb.c(function(a, c) {
      return R.c(b, c, Ub) !== Ub ? Mb.a(a, c) : a;
    }, a, a) : Yb.c(Mb, a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      return Yb.c(b, a, Eb.a(e, d));
    }
    a.m = 2;
    a.h = function(a) {
      var b = G(a);
      a = M(a);
      var d = G(a);
      a = J(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 2;
  b.h = c.h;
  b.b = function(a) {
    return a;
  };
  b.a = a;
  b.e = c.e;
  return b;
}();
function Gf(a) {
  var b = Q.c(a, 0, null), c = Q.c(a, 1, null);
  return de(function() {
    return function e(a) {
      return new V(null, function() {
        for (var h = a;;) {
          var k = F(h);
          if (k) {
            var l = k, n = G(l);
            if (k = F(function(a, e, g, h) {
              return function S(k) {
                return new V(null, function(a, e) {
                  return function() {
                    for (var a = k;;) {
                      if (a = F(a)) {
                        if (Rb(a)) {
                          var g = lb(a), h = P(g), l = sc(h);
                          a: {
                            for (var n = 0;;) {
                              if (n < h) {
                                var p = y.a(g, n);
                                Fc.a(Math.abs(e), Math.abs(p)) && l.add(new W(null, 2, 5, X, [b + e, c + p], null));
                                n += 1;
                              } else {
                                g = !0;
                                break a;
                              }
                            }
                            g = void 0;
                          }
                          return g ? vc(l.L(), S(mb(a))) : vc(l.L(), null);
                        }
                        l = G(a);
                        if (Fc.a(Math.abs(e), Math.abs(l))) {
                          return O(new W(null, 2, 5, X, [b + e, c + l], null), S(J(a)));
                        }
                        a = J(a);
                      } else {
                        return null;
                      }
                    }
                  };
                }(a, e, g, h), null, null);
              };
            }(h, n, l, k)(new W(null, 3, 5, X, [-1, 0, 1], null)))) {
              return Ac.a(k, e(J(h)));
            }
            h = J(h);
          } else {
            return null;
          }
        }
      }, null, null);
    }(new W(null, 3, 5, X, [-1, 0, 1], null));
  }());
}
function Hf(a) {
  var b = Vb(a) ? T.a(Xd, a) : a;
  a = R.a(b, ze);
  b = R.a(b, Ce);
  return de(Tc(a, Gf(b)));
}
function If(a) {
  a = Vb(a) ? T.a(Xd, a) : a;
  var b = R.a(a, Ke), c = R.a(a, ze), d = R.a(a, Ce);
  return de(Tc(function(a) {
    return b.b ? b.b(ce([a, d])) : b.call(null, ce([a, d]));
  }, Hf(new q(null, 2, [Ce, d, ze, c], null))));
}
function Jf(a) {
  return Lc.a(Kc.c(Eb, be, a), Gf(a));
}
function Kf(a) {
  var b = Vb(a) ? T.a(Xd, a) : a;
  a = R.a(b, Oe);
  var b = R.a(b, ye), c = T.a($b, Vc(Lc.a(F, b))), b = function() {
    return function(a) {
      return function g(b) {
        return new V(null, function(a) {
          return function() {
            for (var c = b;;) {
              var d = F(c);
              if (d) {
                var p = d, v = G(p);
                if (d = F(function(a, b, c, d, g) {
                  return function qa(h) {
                    return new V(null, function(a, b) {
                      return function() {
                        for (;;) {
                          var a = F(h);
                          if (a) {
                            if (Rb(a)) {
                              var c = lb(a), d = P(c), g = sc(d);
                              a: {
                                for (var k = 0;;) {
                                  if (k < d) {
                                    var l = y.a(c, k);
                                    g.add(new W(null, 2, 5, X, [b, l], null));
                                    k += 1;
                                  } else {
                                    c = !0;
                                    break a;
                                  }
                                }
                                c = void 0;
                              }
                              return c ? vc(g.L(), qa(mb(a))) : vc(g.L(), null);
                            }
                            g = G(a);
                            return O(new W(null, 2, 5, X, [b, g], null), qa(J(a)));
                          }
                          return null;
                        }
                      };
                    }(a, b, c, d, g), null, null);
                  };
                }(c, v, p, d, a)(fe.b(a)))) {
                  return Ac.a(d, g(J(c)));
                }
                c = J(c);
              } else {
                return null;
              }
            }
          };
        }(a), null, null);
      };
    }(c)(fe.b(c));
  }(), b = Yb.c(Wc, be, Lc.a(Jf, b));
  return Ff.a(b, a);
}
function Lf(a) {
  var b = Vb(a) ? T.a(Xd, a) : a;
  a = R.a(b, Ke);
  var c = R.a(b, ze), b = R.a(b, Ce);
  a = F(If(new q(null, 3, [Ce, b, ze, c, Ke, a], null)));
  return Q.a(a, cc(P(a)));
}
var Nf = function Mf(b) {
  var c = Vb(b) ? T.a(Xd, b) : b, d = R.a(c, Je), e = R.c(c, Le, Lf), g = R.a(c, ve);
  b = R.c(c, Oe, be);
  var h = R.a(c, Ke), k = R.c(c, ze, be), l = R.c(c, we, new W(null, 1, 5, X, [new W(null, 2, 5, X, [0, 0], null)], null)), n = null == l ? null : Ma(l);
  if (r(g)) {
    var p = Ef.b ? Ef.b(1) : Ef.call(null, 1);
    ff.b ? ff.b(function() {
      var b = function() {
        return function(b) {
          return function() {
            function c(d) {
              for (;;) {
                var e = function() {
                  try {
                    for (;;) {
                      var c = b(d);
                      if (!mc(c, $)) {
                        return c;
                      }
                    }
                  } catch (e) {
                    if (e instanceof Object) {
                      return d[5] = e, of.b ? of.b(d) : of.call(null, d), $;
                    }
                    if (t) {
                      throw e;
                    }
                    return null;
                  }
                }();
                if (!mc(e, $)) {
                  return e;
                }
              }
            }
            function d() {
              var b = [null, null, null, null, null, null, null];
              b[0] = e;
              b[1] = 1;
              return b;
            }
            var e = null, e = function(b) {
              switch(arguments.length) {
                case 0:
                  return d.call(this);
                case 1:
                  return c.call(this, b);
              }
              throw Error("Invalid arity: " + arguments.length);
            };
            e.k = d;
            e.b = c;
            return e;
          }();
        }(function(b) {
          var d = b[1];
          return 2 === d ? (d = b[2], nf.a ? nf.a(b, d) : nf.call(null, b, d)) : 1 === d ? mf.j ? mf.j(b, 2, g, c) : mf.call(null, b, 2, g, c) : null;
        });
      }(), d = function() {
        var c = b.k ? b.k() : b.call(null);
        c[6] = p;
        return c;
      }();
      return kf.b ? kf.b(d) : kf.call(null, d);
    }) : ff.call(null, function() {
      var b = function() {
        return function(b) {
          return function() {
            function c(d) {
              for (;;) {
                var e = function() {
                  try {
                    for (;;) {
                      var c = b(d);
                      if (!mc(c, $)) {
                        return c;
                      }
                    }
                  } catch (e) {
                    if (e instanceof Object) {
                      return d[5] = e, of.b ? of.b(d) : of.call(null, d), $;
                    }
                    if (t) {
                      throw e;
                    }
                    return null;
                  }
                }();
                if (!mc(e, $)) {
                  return e;
                }
              }
            }
            function d() {
              var b = [null, null, null, null, null, null, null];
              b[0] = e;
              b[1] = 1;
              return b;
            }
            var e = null, e = function(b) {
              switch(arguments.length) {
                case 0:
                  return d.call(this);
                case 1:
                  return c.call(this, b);
              }
              throw Error("Invalid arity: " + arguments.length);
            };
            e.k = d;
            e.b = c;
            return e;
          }();
        }(function(b) {
          var d = b[1];
          return 2 === d ? (d = b[2], nf.a ? nf.a(b, d) : nf.call(null, b, d)) : 1 === d ? mf.j ? mf.j(b, 2, g, c) : mf.call(null, b, 2, g, c) : null;
        });
      }(), d = function() {
        var c = b.k ? b.k() : b.call(null);
        c[6] = p;
        return c;
      }();
      return kf.b ? kf.b(d) : kf.call(null, d);
    });
  }
  if (r(d.b ? d.b(Zd.e(N([c, new q(null, 1, [we, l], null)], 0))) : d.call(null, Zd.e(N([c, new q(null, 1, [we, l], null)], 0))))) {
    if (r(g)) {
      var v = Ef.b ? Ef.b(1) : Ef.call(null, 1);
      ff.b ? ff.b(function() {
        var b = function() {
          return function(b) {
            return function() {
              function c(d) {
                for (;;) {
                  var e = function() {
                    try {
                      for (;;) {
                        var c = b(d);
                        if (!mc(c, $)) {
                          return c;
                        }
                      }
                    } catch (e) {
                      if (e instanceof Object) {
                        return d[5] = e, of.b ? of.b(d) : of.call(null, d), $;
                      }
                      if (t) {
                        throw e;
                      }
                      return null;
                    }
                  }();
                  if (!mc(e, $)) {
                    return e;
                  }
                }
              }
              function d() {
                var b = [null, null, null, null, null, null, null];
                b[0] = e;
                b[1] = 1;
                return b;
              }
              var e = null, e = function(b) {
                switch(arguments.length) {
                  case 0:
                    return d.call(this);
                  case 1:
                    return c.call(this, b);
                }
                throw Error("Invalid arity: " + arguments.length);
              };
              e.k = d;
              e.b = c;
              return e;
            }();
          }(function(b) {
            var c = b[1];
            return 2 === c ? (c = b[2], nf.a ? nf.a(b, c) : nf.call(null, b, c)) : 1 === c ? mf.j ? mf.j(b, 2, g, xe) : mf.call(null, b, 2, g, xe) : null;
          });
        }(), c = function() {
          var c = b.k ? b.k() : b.call(null);
          c[6] = v;
          return c;
        }();
        return kf.b ? kf.b(c) : kf.call(null, c);
      }) : ff.call(null, function() {
        var b = function() {
          return function(b) {
            return function() {
              function c(d) {
                for (;;) {
                  var e = function() {
                    try {
                      for (;;) {
                        var c = b(d);
                        if (!mc(c, $)) {
                          return c;
                        }
                      }
                    } catch (e) {
                      if (e instanceof Object) {
                        return d[5] = e, of.b ? of.b(d) : of.call(null, d), $;
                      }
                      if (t) {
                        throw e;
                      }
                      return null;
                    }
                  }();
                  if (!mc(e, $)) {
                    return e;
                  }
                }
              }
              function d() {
                var b = [null, null, null, null, null, null, null];
                b[0] = e;
                b[1] = 1;
                return b;
              }
              var e = null, e = function(b) {
                switch(arguments.length) {
                  case 0:
                    return d.call(this);
                  case 1:
                    return c.call(this, b);
                }
                throw Error("Invalid arity: " + arguments.length);
              };
              e.k = d;
              e.b = c;
              return e;
            }();
          }(function(b) {
            var c = b[1];
            return 2 === c ? (c = b[2], nf.a ? nf.a(b, c) : nf.call(null, b, c)) : 1 === c ? mf.j ? mf.j(b, 2, g, xe) : mf.call(null, b, 2, g, xe) : null;
          });
        }(), c = function() {
          var c = b.k ? b.k() : b.call(null);
          c[6] = v;
          return c;
        }();
        return kf.b ? kf.b(c) : kf.call(null, c);
      });
    }
    return Zd.e(N([c, new q(null, 1, [Ke, Kf(new q(null, 2, [ye, h, Oe, b], null))], null)], 0));
  }
  d = Zd.e(N([c, new q(null, 1, [ze, Eb.a(k, n)], null)], 0));
  e = e.b ? e.b(Zd.e(N([d, new q(null, 1, [Ce, n], null)], 0))) : e.call(null, Zd.e(N([d, new q(null, 1, [Ce, n], null)], 0)));
  return r(e) ? Mf(Zd.e(N([d, new q(null, 2, [we, Eb.a(l, e), Oe, Eb.a(b, ce([e, n]))], null)], 0))) : Mf(Zd.e(N([d, new q(null, 1, [we, null == l ? null : Na(l)], null)], 0)));
};
function Of(a) {
  a = Vb(a) ? T.a(Xd, a) : a;
  a = R.a(a, we);
  return null == a || ra(F(a));
}
function Pf(a) {
  var b = Vb(a) ? T.a(Xd, a) : a;
  a = R.a(b, we);
  b = R.a(b, Ie);
  return rb.a(null == a ? null : Ma(a), new W(null, 2, 5, X, [b - 1, b - 1], null));
}
function Qf(a) {
  a = Vb(a) ? T.a(Xd, a) : a;
  var b = R.a(a, Ie);
  return de(Vc(Ac.b(function() {
    return function d(a) {
      return new V(null, function() {
        for (var g = a;;) {
          var h = F(g);
          if (h) {
            var k = h, l = G(k);
            if (h = F(function(a, d, e, g) {
              return function I(h) {
                return new V(null, function(a, d) {
                  return function() {
                    for (;;) {
                      var a = F(h);
                      if (a) {
                        if (Rb(a)) {
                          var e = lb(a), g = P(e), k = sc(g);
                          a: {
                            for (var l = 0;;) {
                              if (l < g) {
                                var n = y.a(e, l), n = new W(null, 4, 5, X, [ce([new W(null, 2, 5, X, [0, n], null), new W(null, 2, 5, X, [-1, n], null)]), ce([new W(null, 2, 5, X, [b - 1, n], null), new W(null, 2, 5, X, [b, n], null)]), ce([new W(null, 2, 5, X, [d, 0], null), new W(null, 2, 5, X, [d, -1], null)]), ce([new W(null, 2, 5, X, [d, b], null), new W(null, 2, 5, X, [d, b - 1], null)])], null);
                                k.add(n);
                                l += 1;
                              } else {
                                e = !0;
                                break a;
                              }
                            }
                            e = void 0;
                          }
                          return e ? vc(k.L(), I(mb(a))) : vc(k.L(), null);
                        }
                        k = G(a);
                        return O(new W(null, 4, 5, X, [ce([new W(null, 2, 5, X, [0, k], null), new W(null, 2, 5, X, [-1, k], null)]), ce([new W(null, 2, 5, X, [b - 1, k], null), new W(null, 2, 5, X, [b, k], null)]), ce([new W(null, 2, 5, X, [d, 0], null), new W(null, 2, 5, X, [d, -1], null)]), ce([new W(null, 2, 5, X, [d, b], null), new W(null, 2, 5, X, [d, b - 1], null)])], null), I(J(a)));
                      }
                      return null;
                    }
                  };
                }(a, d, e, g), null, null);
              };
            }(g, l, k, h)(fe.b(b)))) {
              return Ac.a(h, d(J(g)));
            }
            g = J(g);
          } else {
            return null;
          }
        }
      }, null, null);
    }(fe.b(b));
  }())));
}
function Rf() {
  var a = new q(null, 1, [Ie, 20], null);
  return Nf(Zd.e(N([a, new q(null, 2, [Ke, Qf(a), Je, Of], null)], 0)));
}
function Sf(a) {
  return Nf(Zd.e(N([a, new q(null, 1, [Je, Pf], null)], 0)));
}
;function Tf(a) {
  var b = Q.c(a, 0, null), c = Q.c(b, 0, null), b = Q.c(b, 1, null);
  a = Q.c(a, 1, null);
  var d = Q.c(a, 0, null), e = Q.c(a, 1, null);
  a = c > d ? c : d;
  b = b > e ? b : e;
  d = rb.a(c, d) ? new W(null, 2, 5, X, [a + 1, b], null) : new W(null, 2, 5, X, [a, b + 1], null);
  c = Q.c(d, 0, null);
  d = Q.c(d, 1, null);
  return new q(null, 4, [Ne, a, He, b, Me, c, Ge, d], null);
}
function Uf(a, b) {
  var c = Vb(a) ? T.a(Xd, a) : a, d = R.a(c, Ge), e = R.a(c, Me), g = R.a(c, He), c = R.a(c, Ne);
  b.beginPath();
  b.moveTo(25 * c, 25 * g);
  b.lineTo(25 * e, 25 * d);
  b.stroke();
}
function Vf(a, b) {
  var c = Q.c(a, 0, null), d = Q.c(a, 1, null);
  b.fillRect(25 * c, 25 * d, 25, 25);
}
function Wf(a, b) {
  for (var c = F(a), d = null, e = 0, g = 0;;) {
    if (g < e) {
      var h = d.N(null, g);
      Vf(h, b);
      g += 1;
    } else {
      if (c = F(c)) {
        d = c, Rb(d) ? (c = lb(d), e = mb(d), d = c, h = P(c), c = e, e = h) : (h = G(d), Vf(h, b), c = M(d), d = null, e = 0), g = 0;
      } else {
        break;
      }
    }
  }
}
function Xf(a, b) {
  var c = Vb(b) ? T.a(Xd, b) : b, d = R.a(c, we), e = R.a(c, ze), c = R.a(c, Ke);
  a.fillStyle = "rgb(255, 180, 180)";
  Wf(e, a);
  a.fillStyle = "rgb(180, 255, 180)";
  Wf(d, a);
  a.fillStyle = "rgb(100, 255, 100)";
  Wf(new W(null, 1, 5, X, [null == d ? null : Ma(d)], null), a);
  a.fillStyle = "rgb(0,0,0)";
  a: {
    for (var d = Lc.a(Tf, Lc.a(F, c)), d = F(d), e = null, g = 0, h = 0;;) {
      if (h < g) {
        c = e.N(null, h), Uf(c, a), h += 1;
      } else {
        if (d = F(d)) {
          e = d, Rb(e) ? (d = lb(e), g = mb(e), e = d, c = P(d), d = g, g = c) : (c = G(e), Uf(c, a), d = M(e), e = null, g = 0), h = 0;
        } else {
          d = null;
          break a;
        }
      }
    }
    d = void 0;
  }
  return d;
}
function Yf() {
  var a = Qa(Zf), b = a.canvas;
  a.clearRect(0, 0, b.width, b.height);
}
;var $f = pe.b(0), ag = ce([new W(null, 2, 5, X, [3, 2], null), new W(null, 2, 5, X, [2, 2], null), new W(null, 2, 5, X, [1, 1], null), new W(null, 2, 5, X, [2, 3], null), new W(null, 2, 5, X, [1, 3], null)]);
function bg(a, b) {
  b.clearRect(0, 0, 500, 500);
  for (var c = F(a), d = null, e = 0, g = 0;;) {
    if (g < e) {
      var h = d.N(null, g), k = Q.c(h, 0, null), h = Q.c(h, 1, null);
      b.fillRect(10 * k, 10 * h, 10, 10);
      g += 1;
    } else {
      if (c = F(c)) {
        Rb(c) ? (d = lb(c), c = mb(c), k = d, e = P(d), d = k) : (d = G(c), k = Q.c(d, 0, null), h = Q.c(d, 1, null), b.fillRect(10 * k, 10 * h, 10, 10), c = M(c), d = null, e = 0), g = 0;
      } else {
        break;
      }
    }
  }
}
var dg = function cg(b, c, d) {
  return rb.a(d, Qa($f)) ? (bg(b, c), setTimeout(function() {
    return cg(de(Lc.a(G, Sc(Kc.a(Qe, b), ge(Qc.a(Pe, b))))), c, d);
  }, 70)) : null;
};
function eg() {
  return de(Oc.a(375, function(a) {
    return function() {
      return Oc.a(2, function() {
        return function() {
          return cc(50);
        };
      }(a));
    };
  }(375)));
}
function fg(a) {
  re.a($f, wb);
  var b = document.getElementById("game-of-life-canvas"), c = b.getContext("2d");
  b.width = 500;
  b.height = 500;
  c.fillStyle = "rgb(0, 0, 0)";
  return dg(a, c, Qa($f));
}
ba("game_of_life.draw.start_glider", function() {
  return fg(ag);
});
ba("game_of_life.draw.start_random", function() {
  return fg(eg());
});
var Zf = new se(pe.b(new q(null, 2, [ue, !1, te, null], null)), function() {
  var a = document.getElementById("maze-canvas"), b = a.getContext("2d");
  a.width = 500;
  a.height = 500;
  b.fillStyle = "rgb(0, 0, 0)";
  b.lineWidth = 2;
  return b;
});
ba("maze.top_level.start", function gg() {
  var b = Ef.k(), c = Ef.b(1);
  ff(function() {
    var d = function() {
      return function(b) {
        return function() {
          function c(d) {
            for (;;) {
              var e = function() {
                try {
                  for (;;) {
                    var c = b(d);
                    if (!mc(c, $)) {
                      return c;
                    }
                  }
                } catch (e) {
                  if (e instanceof Object) {
                    return d[5] = e, of(d), $;
                  }
                  if (t) {
                    throw e;
                  }
                  return null;
                }
              }();
              if (!mc(e, $)) {
                return e;
              }
            }
          }
          function d() {
            var b = [null, null, null, null, null, null, null, null, null, null, null];
            b[0] = e;
            b[1] = 1;
            return b;
          }
          var e = null, e = function(b) {
            switch(arguments.length) {
              case 0:
                return d.call(this);
              case 1:
                return c.call(this, b);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          e.k = d;
          e.b = c;
          return e;
        }();
      }(function(c) {
        var d = c[1];
        if (1 === d) {
          return c[2] = null, c[1] = 2, $;
        }
        if (2 === d) {
          return c[1] = 4, $;
        }
        if (3 === d) {
          var e = c[2];
          return nf(c, e);
        }
        if (4 === d) {
          return lf(c, 7, b);
        }
        if (5 === d) {
          return c[2] = null, c[1] = 6, $;
        }
        if (6 === d) {
          return e = c[2], c[2] = e, c[1] = 3, $;
        }
        if (7 === d) {
          var l = c[7], n = c[2], e = function() {
            return function(b) {
              return function() {
                return rb.a(b, xe);
              };
            }(n, l, n, d);
          }(), p = Df();
          c[7] = n;
          c[8] = e;
          return lf(c, 8, p);
        }
        return 8 === d ? (e = c[8], p = c[2], e = e.k ? e.k() : e.call(null), c[9] = p, c[1] = r(e) ? 9 : 10, $) : 9 === d ? (e = gg(), c[2] = e, c[1] = 11, $) : 10 === d ? (l = c[7], e = Qa(Zf), e = Xf(e, l), c[2] = e, c[1] = 11, $) : 11 === d ? (c[10] = c[2], c[2] = null, c[1] = 2, $) : null;
      });
    }(), e = function() {
      var b = d.k ? d.k() : d.call(null);
      b[6] = c;
      return b;
    }();
    return kf(e);
  });
  Yf();
  return Sf(new q(null, 3, [Ke, Ke.b(Rf()), Ie, 20, ve, b], null));
});

})();
