function __(t, e) {
  for (var n = 0; n < e.length; n++) {
    const r = e[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const i in r)
        if (i !== 'default' && !(i in t)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s && Object.defineProperty(t, i, s.get ? s : { enumerable: !0, get: () => r[i] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }));
}
(function () {
  const e = document.createElement('link').relList;
  if (e && e.supports && e.supports('modulepreload')) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === 'childList')
        for (const o of s.addedNodes) o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (s.credentials = 'include')
        : i.crossOrigin === 'anonymous'
        ? (s.credentials = 'omit')
        : (s.credentials = 'same-origin'),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
function T_(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default') ? t.default : t;
}
var Ys = {},
  I_ = {
    get exports() {
      return Ys;
    },
    set exports(t) {
      Ys = t;
    }
  },
  tu = {},
  N = {},
  k_ = {
    get exports() {
      return N;
    },
    set exports(t) {
      N = t;
    }
  },
  ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Do = Symbol.for('react.element'),
  C_ = Symbol.for('react.portal'),
  A_ = Symbol.for('react.fragment'),
  N_ = Symbol.for('react.strict_mode'),
  R_ = Symbol.for('react.profiler'),
  x_ = Symbol.for('react.provider'),
  D_ = Symbol.for('react.context'),
  P_ = Symbol.for('react.forward_ref'),
  O_ = Symbol.for('react.suspense'),
  L_ = Symbol.for('react.memo'),
  $_ = Symbol.for('react.lazy'),
  Nm = Symbol.iterator;
function b_(t) {
  return t === null || typeof t != 'object'
    ? null
    : ((t = (Nm && t[Nm]) || t['@@iterator']), typeof t == 'function' ? t : null);
}
var Fv = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  },
  Uv = Object.assign,
  Vv = {};
function as(t, e, n) {
  (this.props = t), (this.context = e), (this.refs = Vv), (this.updater = n || Fv);
}
as.prototype.isReactComponent = {};
as.prototype.setState = function (t, e) {
  if (typeof t != 'object' && typeof t != 'function' && t != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, t, e, 'setState');
};
as.prototype.forceUpdate = function (t) {
  this.updater.enqueueForceUpdate(this, t, 'forceUpdate');
};
function jv() {}
jv.prototype = as.prototype;
function pf(t, e, n) {
  (this.props = t), (this.context = e), (this.refs = Vv), (this.updater = n || Fv);
}
var mf = (pf.prototype = new jv());
mf.constructor = pf;
Uv(mf, as.prototype);
mf.isPureReactComponent = !0;
var Rm = Array.isArray,
  zv = Object.prototype.hasOwnProperty,
  gf = { current: null },
  Bv = { key: !0, ref: !0, __self: !0, __source: !0 };
function Hv(t, e, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (e != null)
    for (r in (e.ref !== void 0 && (o = e.ref), e.key !== void 0 && (s = '' + e.key), e))
      zv.call(e, r) && !Bv.hasOwnProperty(r) && (i[r] = e[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (t && t.defaultProps) for (r in ((a = t.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return { $$typeof: Do, type: t, key: s, ref: o, props: i, _owner: gf.current };
}
function M_(t, e) {
  return { $$typeof: Do, type: t.type, key: e, ref: t.ref, props: t.props, _owner: t._owner };
}
function yf(t) {
  return typeof t == 'object' && t !== null && t.$$typeof === Do;
}
function F_(t) {
  var e = { '=': '=0', ':': '=2' };
  return (
    '$' +
    t.replace(/[=:]/g, function (n) {
      return e[n];
    })
  );
}
var xm = /\/+/g;
function Sc(t, e) {
  return typeof t == 'object' && t !== null && t.key != null ? F_('' + t.key) : e.toString(36);
}
function Ra(t, e, n, r, i) {
  var s = typeof t;
  (s === 'undefined' || s === 'boolean') && (t = null);
  var o = !1;
  if (t === null) o = !0;
  else
    switch (s) {
      case 'string':
      case 'number':
        o = !0;
        break;
      case 'object':
        switch (t.$$typeof) {
          case Do:
          case C_:
            o = !0;
        }
    }
  if (o)
    return (
      (o = t),
      (i = i(o)),
      (t = r === '' ? '.' + Sc(o, 0) : r),
      Rm(i)
        ? ((n = ''),
          t != null && (n = t.replace(xm, '$&/') + '/'),
          Ra(i, e, n, '', function (u) {
            return u;
          }))
        : i != null &&
          (yf(i) &&
            (i = M_(
              i,
              n +
                (!i.key || (o && o.key === i.key) ? '' : ('' + i.key).replace(xm, '$&/') + '/') +
                t
            )),
          e.push(i)),
      1
    );
  if (((o = 0), (r = r === '' ? '.' : r + ':'), Rm(t)))
    for (var a = 0; a < t.length; a++) {
      s = t[a];
      var l = r + Sc(s, a);
      o += Ra(s, e, n, l, i);
    }
  else if (((l = b_(t)), typeof l == 'function'))
    for (t = l.call(t), a = 0; !(s = t.next()).done; )
      (s = s.value), (l = r + Sc(s, a++)), (o += Ra(s, e, n, l, i));
  else if (s === 'object')
    throw (
      ((e = String(t)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return o;
}
function ra(t, e, n) {
  if (t == null) return t;
  var r = [],
    i = 0;
  return (
    Ra(t, r, '', '', function (s) {
      return e.call(n, s, i++);
    }),
    r
  );
}
function U_(t) {
  if (t._status === -1) {
    var e = t._result;
    (e = e()),
      e.then(
        function (n) {
          (t._status === 0 || t._status === -1) && ((t._status = 1), (t._result = n));
        },
        function (n) {
          (t._status === 0 || t._status === -1) && ((t._status = 2), (t._result = n));
        }
      ),
      t._status === -1 && ((t._status = 0), (t._result = e));
  }
  if (t._status === 1) return t._result.default;
  throw t._result;
}
var vt = { current: null },
  xa = { transition: null },
  V_ = { ReactCurrentDispatcher: vt, ReactCurrentBatchConfig: xa, ReactCurrentOwner: gf };
ee.Children = {
  map: ra,
  forEach: function (t, e, n) {
    ra(
      t,
      function () {
        e.apply(this, arguments);
      },
      n
    );
  },
  count: function (t) {
    var e = 0;
    return (
      ra(t, function () {
        e++;
      }),
      e
    );
  },
  toArray: function (t) {
    return (
      ra(t, function (e) {
        return e;
      }) || []
    );
  },
  only: function (t) {
    if (!yf(t))
      throw Error('React.Children.only expected to receive a single React element child.');
    return t;
  }
};
ee.Component = as;
ee.Fragment = A_;
ee.Profiler = R_;
ee.PureComponent = pf;
ee.StrictMode = N_;
ee.Suspense = O_;
ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = V_;
ee.cloneElement = function (t, e, n) {
  if (t == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' + t + '.'
    );
  var r = Uv({}, t.props),
    i = t.key,
    s = t.ref,
    o = t._owner;
  if (e != null) {
    if (
      (e.ref !== void 0 && ((s = e.ref), (o = gf.current)),
      e.key !== void 0 && (i = '' + e.key),
      t.type && t.type.defaultProps)
    )
      var a = t.type.defaultProps;
    for (l in e)
      zv.call(e, l) &&
        !Bv.hasOwnProperty(l) &&
        (r[l] = e[l] === void 0 && a !== void 0 ? a[l] : e[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Do, type: t.type, key: i, ref: s, props: r, _owner: o };
};
ee.createContext = function (t) {
  return (
    (t = {
      $$typeof: D_,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }),
    (t.Provider = { $$typeof: x_, _context: t }),
    (t.Consumer = t)
  );
};
ee.createElement = Hv;
ee.createFactory = function (t) {
  var e = Hv.bind(null, t);
  return (e.type = t), e;
};
ee.createRef = function () {
  return { current: null };
};
ee.forwardRef = function (t) {
  return { $$typeof: P_, render: t };
};
ee.isValidElement = yf;
ee.lazy = function (t) {
  return { $$typeof: $_, _payload: { _status: -1, _result: t }, _init: U_ };
};
ee.memo = function (t, e) {
  return { $$typeof: L_, type: t, compare: e === void 0 ? null : e };
};
ee.startTransition = function (t) {
  var e = xa.transition;
  xa.transition = {};
  try {
    t();
  } finally {
    xa.transition = e;
  }
};
ee.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
ee.useCallback = function (t, e) {
  return vt.current.useCallback(t, e);
};
ee.useContext = function (t) {
  return vt.current.useContext(t);
};
ee.useDebugValue = function () {};
ee.useDeferredValue = function (t) {
  return vt.current.useDeferredValue(t);
};
ee.useEffect = function (t, e) {
  return vt.current.useEffect(t, e);
};
ee.useId = function () {
  return vt.current.useId();
};
ee.useImperativeHandle = function (t, e, n) {
  return vt.current.useImperativeHandle(t, e, n);
};
ee.useInsertionEffect = function (t, e) {
  return vt.current.useInsertionEffect(t, e);
};
ee.useLayoutEffect = function (t, e) {
  return vt.current.useLayoutEffect(t, e);
};
ee.useMemo = function (t, e) {
  return vt.current.useMemo(t, e);
};
ee.useReducer = function (t, e, n) {
  return vt.current.useReducer(t, e, n);
};
ee.useRef = function (t) {
  return vt.current.useRef(t);
};
ee.useState = function (t) {
  return vt.current.useState(t);
};
ee.useSyncExternalStore = function (t, e, n) {
  return vt.current.useSyncExternalStore(t, e, n);
};
ee.useTransition = function () {
  return vt.current.useTransition();
};
ee.version = '18.2.0';
(function (t) {
  t.exports = ee;
})(k_);
const ne = T_(N),
  Nh = __({ __proto__: null, default: ne }, [N]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var j_ = N,
  z_ = Symbol.for('react.element'),
  B_ = Symbol.for('react.fragment'),
  H_ = Object.prototype.hasOwnProperty,
  K_ = j_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  W_ = { key: !0, ref: !0, __self: !0, __source: !0 };
function Kv(t, e, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = '' + n),
    e.key !== void 0 && (s = '' + e.key),
    e.ref !== void 0 && (o = e.ref);
  for (r in e) H_.call(e, r) && !W_.hasOwnProperty(r) && (i[r] = e[r]);
  if (t && t.defaultProps) for (r in ((e = t.defaultProps), e)) i[r] === void 0 && (i[r] = e[r]);
  return { $$typeof: z_, type: t, key: s, ref: o, props: i, _owner: K_.current };
}
tu.Fragment = B_;
tu.jsx = Kv;
tu.jsxs = Kv;
(function (t) {
  t.exports = tu;
})(I_);
const q_ = Ys.Fragment,
  De = Ys.jsx,
  vf = Ys.jsxs;
var Rh = {},
  Ya = {},
  G_ = {
    get exports() {
      return Ya;
    },
    set exports(t) {
      Ya = t;
    }
  },
  $t = {},
  xh = {},
  Q_ = {
    get exports() {
      return xh;
    },
    set exports(t) {
      xh = t;
    }
  },
  Wv = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (t) {
  function e(D, j) {
    var X = D.length;
    D.push(j);
    e: for (; 0 < X; ) {
      var ve = (X - 1) >>> 1,
        xe = D[ve];
      if (0 < i(xe, j)) (D[ve] = j), (D[X] = xe), (X = ve);
      else break e;
    }
  }
  function n(D) {
    return D.length === 0 ? null : D[0];
  }
  function r(D) {
    if (D.length === 0) return null;
    var j = D[0],
      X = D.pop();
    if (X !== j) {
      D[0] = X;
      e: for (var ve = 0, xe = D.length, ai = xe >>> 1; ve < ai; ) {
        var gn = 2 * (ve + 1) - 1,
          ys = D[gn],
          Wt = gn + 1,
          Fn = D[Wt];
        if (0 > i(ys, X))
          Wt < xe && 0 > i(Fn, ys)
            ? ((D[ve] = Fn), (D[Wt] = X), (ve = Wt))
            : ((D[ve] = ys), (D[gn] = X), (ve = gn));
        else if (Wt < xe && 0 > i(Fn, X)) (D[ve] = Fn), (D[Wt] = X), (ve = Wt);
        else break e;
      }
    }
    return j;
  }
  function i(D, j) {
    var X = D.sortIndex - j.sortIndex;
    return X !== 0 ? X : D.id - j.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var s = performance;
    t.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      a = o.now();
    t.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    h = null,
    d = 3,
    m = !1,
    y = !1,
    v = !1,
    S = typeof setTimeout == 'function' ? setTimeout : null,
    p = typeof clearTimeout == 'function' ? clearTimeout : null,
    f = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(D) {
    for (var j = n(u); j !== null; ) {
      if (j.callback === null) r(u);
      else if (j.startTime <= D) r(u), (j.sortIndex = j.expirationTime), e(l, j);
      else break;
      j = n(u);
    }
  }
  function E(D) {
    if (((v = !1), g(D), !y))
      if (n(l) !== null) (y = !0), le(_);
      else {
        var j = n(u);
        j !== null && ye(E, j.startTime - D);
      }
  }
  function _(D, j) {
    (y = !1), v && ((v = !1), p(P), (P = -1)), (m = !0);
    var X = d;
    try {
      for (g(j), h = n(l); h !== null && (!(h.expirationTime > j) || (D && !te())); ) {
        var ve = h.callback;
        if (typeof ve == 'function') {
          (h.callback = null), (d = h.priorityLevel);
          var xe = ve(h.expirationTime <= j);
          (j = t.unstable_now()),
            typeof xe == 'function' ? (h.callback = xe) : h === n(l) && r(l),
            g(j);
        } else r(l);
        h = n(l);
      }
      if (h !== null) var ai = !0;
      else {
        var gn = n(u);
        gn !== null && ye(E, gn.startTime - j), (ai = !1);
      }
      return ai;
    } finally {
      (h = null), (d = X), (m = !1);
    }
  }
  var R = !1,
    x = null,
    P = -1,
    B = 5,
    b = -1;
  function te() {
    return !(t.unstable_now() - b < B);
  }
  function W() {
    if (x !== null) {
      var D = t.unstable_now();
      b = D;
      var j = !0;
      try {
        j = x(!0, D);
      } finally {
        j ? H() : ((R = !1), (x = null));
      }
    } else R = !1;
  }
  var H;
  if (typeof f == 'function')
    H = function () {
      f(W);
    };
  else if (typeof MessageChannel < 'u') {
    var Z = new MessageChannel(),
      ge = Z.port2;
    (Z.port1.onmessage = W),
      (H = function () {
        ge.postMessage(null);
      });
  } else
    H = function () {
      S(W, 0);
    };
  function le(D) {
    (x = D), R || ((R = !0), H());
  }
  function ye(D, j) {
    P = S(function () {
      D(t.unstable_now());
    }, j);
  }
  (t.unstable_IdlePriority = 5),
    (t.unstable_ImmediatePriority = 1),
    (t.unstable_LowPriority = 4),
    (t.unstable_NormalPriority = 3),
    (t.unstable_Profiling = null),
    (t.unstable_UserBlockingPriority = 2),
    (t.unstable_cancelCallback = function (D) {
      D.callback = null;
    }),
    (t.unstable_continueExecution = function () {
      y || m || ((y = !0), le(_));
    }),
    (t.unstable_forceFrameRate = function (D) {
      0 > D || 125 < D
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (B = 0 < D ? Math.floor(1e3 / D) : 5);
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (t.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (t.unstable_next = function (D) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = d;
      }
      var X = d;
      d = j;
      try {
        return D();
      } finally {
        d = X;
      }
    }),
    (t.unstable_pauseExecution = function () {}),
    (t.unstable_requestPaint = function () {}),
    (t.unstable_runWithPriority = function (D, j) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var X = d;
      d = D;
      try {
        return j();
      } finally {
        d = X;
      }
    }),
    (t.unstable_scheduleCallback = function (D, j, X) {
      var ve = t.unstable_now();
      switch (
        (typeof X == 'object' && X !== null
          ? ((X = X.delay), (X = typeof X == 'number' && 0 < X ? ve + X : ve))
          : (X = ve),
        D)
      ) {
        case 1:
          var xe = -1;
          break;
        case 2:
          xe = 250;
          break;
        case 5:
          xe = 1073741823;
          break;
        case 4:
          xe = 1e4;
          break;
        default:
          xe = 5e3;
      }
      return (
        (xe = X + xe),
        (D = {
          id: c++,
          callback: j,
          priorityLevel: D,
          startTime: X,
          expirationTime: xe,
          sortIndex: -1
        }),
        X > ve
          ? ((D.sortIndex = X),
            e(u, D),
            n(l) === null && D === n(u) && (v ? (p(P), (P = -1)) : (v = !0), ye(E, X - ve)))
          : ((D.sortIndex = xe), e(l, D), y || m || ((y = !0), le(_))),
        D
      );
    }),
    (t.unstable_shouldYield = te),
    (t.unstable_wrapCallback = function (D) {
      var j = d;
      return function () {
        var X = d;
        d = j;
        try {
          return D.apply(this, arguments);
        } finally {
          d = X;
        }
      };
    });
})(Wv);
(function (t) {
  t.exports = Wv;
})(Q_);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qv = N,
  Pt = xh;
function k(t) {
  for (
    var e = 'https://reactjs.org/docs/error-decoder.html?invariant=' + t, n = 1;
    n < arguments.length;
    n++
  )
    e += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    t +
    '; visit ' +
    e +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var Gv = new Set(),
  Js = {};
function ii(t, e) {
  Hi(t, e), Hi(t + 'Capture', e);
}
function Hi(t, e) {
  for (Js[t] = e, t = 0; t < e.length; t++) Gv.add(e[t]);
}
var Cn = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Dh = Object.prototype.hasOwnProperty,
  X_ =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Dm = {},
  Pm = {};
function Y_(t) {
  return Dh.call(Pm, t) ? !0 : Dh.call(Dm, t) ? !1 : X_.test(t) ? (Pm[t] = !0) : ((Dm[t] = !0), !1);
}
function J_(t, e, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof e) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((t = t.toLowerCase().slice(0, 5)), t !== 'data-' && t !== 'aria-');
    default:
      return !1;
  }
}
function Z_(t, e, n, r) {
  if (e === null || typeof e > 'u' || J_(t, e, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !e;
      case 4:
        return e === !1;
      case 5:
        return isNaN(e);
      case 6:
        return isNaN(e) || 1 > e;
    }
  return !1;
}
function wt(t, e, n, r, i, s, o) {
  (this.acceptsBooleans = e === 2 || e === 3 || e === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = t),
    (this.type = e),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var et = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (t) {
    et[t] = new wt(t, 0, !1, t, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv']
].forEach(function (t) {
  var e = t[0];
  et[e] = new wt(e, 1, !1, t[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (t) {
  et[t] = new wt(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (t) {
  et[t] = new wt(t, 2, !1, t, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (t) {
    et[t] = new wt(t, 3, !1, t.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (t) {
  et[t] = new wt(t, 3, !0, t, null, !1, !1);
});
['capture', 'download'].forEach(function (t) {
  et[t] = new wt(t, 4, !1, t, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (t) {
  et[t] = new wt(t, 6, !1, t, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (t) {
  et[t] = new wt(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var wf = /[\-:]([a-z])/g;
function Ef(t) {
  return t[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (t) {
    var e = t.replace(wf, Ef);
    et[e] = new wt(e, 1, !1, t, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (t) {
    var e = t.replace(wf, Ef);
    et[e] = new wt(e, 1, !1, t, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (t) {
  var e = t.replace(wf, Ef);
  et[e] = new wt(e, 1, !1, t, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (t) {
  et[t] = new wt(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
et.xlinkHref = new wt('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1);
['src', 'href', 'action', 'formAction'].forEach(function (t) {
  et[t] = new wt(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function Sf(t, e, n, r) {
  var i = et.hasOwnProperty(e) ? et[e] : null;
  (i !== null
    ? i.type !== 0
    : r || !(2 < e.length) || (e[0] !== 'o' && e[0] !== 'O') || (e[1] !== 'n' && e[1] !== 'N')) &&
    (Z_(e, n, i, r) && (n = null),
    r || i === null
      ? Y_(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, '' + n))
      : i.mustUseProperty
      ? (t[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
      : ((e = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? t.removeAttribute(e)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
            r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))));
}
var bn = qv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ia = Symbol.for('react.element'),
  di = Symbol.for('react.portal'),
  fi = Symbol.for('react.fragment'),
  _f = Symbol.for('react.strict_mode'),
  Ph = Symbol.for('react.profiler'),
  Qv = Symbol.for('react.provider'),
  Xv = Symbol.for('react.context'),
  Tf = Symbol.for('react.forward_ref'),
  Oh = Symbol.for('react.suspense'),
  Lh = Symbol.for('react.suspense_list'),
  If = Symbol.for('react.memo'),
  jn = Symbol.for('react.lazy'),
  Yv = Symbol.for('react.offscreen'),
  Om = Symbol.iterator;
function vs(t) {
  return t === null || typeof t != 'object'
    ? null
    : ((t = (Om && t[Om]) || t['@@iterator']), typeof t == 'function' ? t : null);
}
var ke = Object.assign,
  _c;
function Ns(t) {
  if (_c === void 0)
    try {
      throw Error();
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/);
      _c = (e && e[1]) || '';
    }
  return (
    `
` +
    _c +
    t
  );
}
var Tc = !1;
function Ic(t, e) {
  if (!t || Tc) return '';
  Tc = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e)
      if (
        ((e = function () {
          throw Error();
        }),
        Object.defineProperty(e.prototype, 'props', {
          set: function () {
            throw Error();
          }
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(e, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(t, [], e);
      } else {
        try {
          e.call();
        } catch (u) {
          r = u;
        }
        t.call(e.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      t();
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          a = s.length - 1;
        1 <= o && 0 <= a && i[o] !== s[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (i[o] !== s[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || i[o] !== s[a])) {
                var l =
                  `
` + i[o].replace(' at new ', ' at ');
                return (
                  t.displayName &&
                    l.includes('<anonymous>') &&
                    (l = l.replace('<anonymous>', t.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (Tc = !1), (Error.prepareStackTrace = n);
  }
  return (t = t ? t.displayName || t.name : '') ? Ns(t) : '';
}
function eT(t) {
  switch (t.tag) {
    case 5:
      return Ns(t.type);
    case 16:
      return Ns('Lazy');
    case 13:
      return Ns('Suspense');
    case 19:
      return Ns('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (t = Ic(t.type, !1)), t;
    case 11:
      return (t = Ic(t.type.render, !1)), t;
    case 1:
      return (t = Ic(t.type, !0)), t;
    default:
      return '';
  }
}
function $h(t) {
  if (t == null) return null;
  if (typeof t == 'function') return t.displayName || t.name || null;
  if (typeof t == 'string') return t;
  switch (t) {
    case fi:
      return 'Fragment';
    case di:
      return 'Portal';
    case Ph:
      return 'Profiler';
    case _f:
      return 'StrictMode';
    case Oh:
      return 'Suspense';
    case Lh:
      return 'SuspenseList';
  }
  if (typeof t == 'object')
    switch (t.$$typeof) {
      case Xv:
        return (t.displayName || 'Context') + '.Consumer';
      case Qv:
        return (t._context.displayName || 'Context') + '.Provider';
      case Tf:
        var e = t.render;
        return (
          (t = t.displayName),
          t ||
            ((t = e.displayName || e.name || ''),
            (t = t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')),
          t
        );
      case If:
        return (e = t.displayName || null), e !== null ? e : $h(t.type) || 'Memo';
      case jn:
        (e = t._payload), (t = t._init);
        try {
          return $h(t(e));
        } catch {}
    }
  return null;
}
function tT(t) {
  var e = t.type;
  switch (t.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (e.displayName || 'Context') + '.Consumer';
    case 10:
      return (e._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (t = e.render),
        (t = t.displayName || t.name || ''),
        e.displayName || (t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return e;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return $h(e);
    case 8:
      return e === _f ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof e == 'function') return e.displayName || e.name || null;
      if (typeof e == 'string') return e;
  }
  return null;
}
function pr(t) {
  switch (typeof t) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return t;
    case 'object':
      return t;
    default:
      return '';
  }
}
function Jv(t) {
  var e = t.type;
  return (t = t.nodeName) && t.toLowerCase() === 'input' && (e === 'checkbox' || e === 'radio');
}
function nT(t) {
  var e = Jv(t) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
    r = '' + t[e];
  if (
    !t.hasOwnProperty(e) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(t, e, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = '' + o), s.call(this, o);
        }
      }),
      Object.defineProperty(t, e, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = '' + o;
        },
        stopTracking: function () {
          (t._valueTracker = null), delete t[e];
        }
      }
    );
  }
}
function sa(t) {
  t._valueTracker || (t._valueTracker = nT(t));
}
function Zv(t) {
  if (!t) return !1;
  var e = t._valueTracker;
  if (!e) return !0;
  var n = e.getValue(),
    r = '';
  return (
    t && (r = Jv(t) ? (t.checked ? 'true' : 'false') : t.value),
    (t = r),
    t !== n ? (e.setValue(t), !0) : !1
  );
}
function Ja(t) {
  if (((t = t || (typeof document < 'u' ? document : void 0)), typeof t > 'u')) return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
function bh(t, e) {
  var n = e.checked;
  return ke({}, e, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? t._wrapperState.initialChecked
  });
}
function Lm(t, e) {
  var n = e.defaultValue == null ? '' : e.defaultValue,
    r = e.checked != null ? e.checked : e.defaultChecked;
  (n = pr(e.value != null ? e.value : n)),
    (t._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: e.type === 'checkbox' || e.type === 'radio' ? e.checked != null : e.value != null
    });
}
function e0(t, e) {
  (e = e.checked), e != null && Sf(t, 'checked', e, !1);
}
function Mh(t, e) {
  e0(t, e);
  var n = pr(e.value),
    r = e.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && t.value === '') || t.value != n) && (t.value = '' + n)
      : t.value !== '' + n && (t.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    t.removeAttribute('value');
    return;
  }
  e.hasOwnProperty('value')
    ? Fh(t, e.type, n)
    : e.hasOwnProperty('defaultValue') && Fh(t, e.type, pr(e.defaultValue)),
    e.checked == null && e.defaultChecked != null && (t.defaultChecked = !!e.defaultChecked);
}
function $m(t, e, n) {
  if (e.hasOwnProperty('value') || e.hasOwnProperty('defaultValue')) {
    var r = e.type;
    if (!((r !== 'submit' && r !== 'reset') || (e.value !== void 0 && e.value !== null))) return;
    (e = '' + t._wrapperState.initialValue),
      n || e === t.value || (t.value = e),
      (t.defaultValue = e);
  }
  (n = t.name),
    n !== '' && (t.name = ''),
    (t.defaultChecked = !!t._wrapperState.initialChecked),
    n !== '' && (t.name = n);
}
function Fh(t, e, n) {
  (e !== 'number' || Ja(t.ownerDocument) !== t) &&
    (n == null
      ? (t.defaultValue = '' + t._wrapperState.initialValue)
      : t.defaultValue !== '' + n && (t.defaultValue = '' + n));
}
var Rs = Array.isArray;
function Ai(t, e, n, r) {
  if (((t = t.options), e)) {
    e = {};
    for (var i = 0; i < n.length; i++) e['$' + n[i]] = !0;
    for (n = 0; n < t.length; n++)
      (i = e.hasOwnProperty('$' + t[n].value)),
        t[n].selected !== i && (t[n].selected = i),
        i && r && (t[n].defaultSelected = !0);
  } else {
    for (n = '' + pr(n), e = null, i = 0; i < t.length; i++) {
      if (t[i].value === n) {
        (t[i].selected = !0), r && (t[i].defaultSelected = !0);
        return;
      }
      e !== null || t[i].disabled || (e = t[i]);
    }
    e !== null && (e.selected = !0);
  }
}
function Uh(t, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(k(91));
  return ke({}, e, {
    value: void 0,
    defaultValue: void 0,
    children: '' + t._wrapperState.initialValue
  });
}
function bm(t, e) {
  var n = e.value;
  if (n == null) {
    if (((n = e.children), (e = e.defaultValue), n != null)) {
      if (e != null) throw Error(k(92));
      if (Rs(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      e = n;
    }
    e == null && (e = ''), (n = e);
  }
  t._wrapperState = { initialValue: pr(n) };
}
function t0(t, e) {
  var n = pr(e.value),
    r = pr(e.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== t.value && (t.value = n),
    e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
    r != null && (t.defaultValue = '' + r);
}
function Mm(t) {
  var e = t.textContent;
  e === t._wrapperState.initialValue && e !== '' && e !== null && (t.value = e);
}
function n0(t) {
  switch (t) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Vh(t, e) {
  return t == null || t === 'http://www.w3.org/1999/xhtml'
    ? n0(e)
    : t === 'http://www.w3.org/2000/svg' && e === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : t;
}
var oa,
  r0 = (function (t) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (e, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return t(e, n, r, i);
          });
        }
      : t;
  })(function (t, e) {
    if (t.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in t) t.innerHTML = e;
    else {
      for (
        oa = oa || document.createElement('div'),
          oa.innerHTML = '<svg>' + e.valueOf().toString() + '</svg>',
          e = oa.firstChild;
        t.firstChild;

      )
        t.removeChild(t.firstChild);
      for (; e.firstChild; ) t.appendChild(e.firstChild);
    }
  });
function Zs(t, e) {
  if (e) {
    var n = t.firstChild;
    if (n && n === t.lastChild && n.nodeType === 3) {
      n.nodeValue = e;
      return;
    }
  }
  t.textContent = e;
}
var bs = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  },
  rT = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(bs).forEach(function (t) {
  rT.forEach(function (e) {
    (e = e + t.charAt(0).toUpperCase() + t.substring(1)), (bs[e] = bs[t]);
  });
});
function i0(t, e, n) {
  return e == null || typeof e == 'boolean' || e === ''
    ? ''
    : n || typeof e != 'number' || e === 0 || (bs.hasOwnProperty(t) && bs[t])
    ? ('' + e).trim()
    : e + 'px';
}
function s0(t, e) {
  t = t.style;
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        i = i0(n, e[n], r);
      n === 'float' && (n = 'cssFloat'), r ? t.setProperty(n, i) : (t[n] = i);
    }
}
var iT = ke(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
  }
);
function jh(t, e) {
  if (e) {
    if (iT[t] && (e.children != null || e.dangerouslySetInnerHTML != null)) throw Error(k(137, t));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(k(60));
      if (typeof e.dangerouslySetInnerHTML != 'object' || !('__html' in e.dangerouslySetInnerHTML))
        throw Error(k(61));
    }
    if (e.style != null && typeof e.style != 'object') throw Error(k(62));
  }
}
function zh(t, e) {
  if (t.indexOf('-') === -1) return typeof e.is == 'string';
  switch (t) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var Bh = null;
function kf(t) {
  return (
    (t = t.target || t.srcElement || window),
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
  );
}
var Hh = null,
  Ni = null,
  Ri = null;
function Fm(t) {
  if ((t = Lo(t))) {
    if (typeof Hh != 'function') throw Error(k(280));
    var e = t.stateNode;
    e && ((e = ou(e)), Hh(t.stateNode, t.type, e));
  }
}
function o0(t) {
  Ni ? (Ri ? Ri.push(t) : (Ri = [t])) : (Ni = t);
}
function a0() {
  if (Ni) {
    var t = Ni,
      e = Ri;
    if (((Ri = Ni = null), Fm(t), e)) for (t = 0; t < e.length; t++) Fm(e[t]);
  }
}
function l0(t, e) {
  return t(e);
}
function u0() {}
var kc = !1;
function c0(t, e, n) {
  if (kc) return t(e, n);
  kc = !0;
  try {
    return l0(t, e, n);
  } finally {
    (kc = !1), (Ni !== null || Ri !== null) && (u0(), a0());
  }
}
function eo(t, e) {
  var n = t.stateNode;
  if (n === null) return null;
  var r = ou(n);
  if (r === null) return null;
  n = r[e];
  e: switch (e) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((t = t.type),
        (r = !(t === 'button' || t === 'input' || t === 'select' || t === 'textarea'))),
        (t = !r);
      break e;
    default:
      t = !1;
  }
  if (t) return null;
  if (n && typeof n != 'function') throw Error(k(231, e, typeof n));
  return n;
}
var Kh = !1;
if (Cn)
  try {
    var ws = {};
    Object.defineProperty(ws, 'passive', {
      get: function () {
        Kh = !0;
      }
    }),
      window.addEventListener('test', ws, ws),
      window.removeEventListener('test', ws, ws);
  } catch {
    Kh = !1;
  }
function sT(t, e, n, r, i, s, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Ms = !1,
  Za = null,
  el = !1,
  Wh = null,
  oT = {
    onError: function (t) {
      (Ms = !0), (Za = t);
    }
  };
function aT(t, e, n, r, i, s, o, a, l) {
  (Ms = !1), (Za = null), sT.apply(oT, arguments);
}
function lT(t, e, n, r, i, s, o, a, l) {
  if ((aT.apply(this, arguments), Ms)) {
    if (Ms) {
      var u = Za;
      (Ms = !1), (Za = null);
    } else throw Error(k(198));
    el || ((el = !0), (Wh = u));
  }
}
function si(t) {
  var e = t,
    n = t;
  if (t.alternate) for (; e.return; ) e = e.return;
  else {
    t = e;
    do (e = t), e.flags & 4098 && (n = e.return), (t = e.return);
    while (t);
  }
  return e.tag === 3 ? n : null;
}
function h0(t) {
  if (t.tag === 13) {
    var e = t.memoizedState;
    if ((e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)), e !== null))
      return e.dehydrated;
  }
  return null;
}
function Um(t) {
  if (si(t) !== t) throw Error(k(188));
}
function uT(t) {
  var e = t.alternate;
  if (!e) {
    if (((e = si(t)), e === null)) throw Error(k(188));
    return e !== t ? null : t;
  }
  for (var n = t, r = e; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return Um(i), t;
        if (s === r) return Um(i), e;
        s = s.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var o = !1, a = i.child; a; ) {
        if (a === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        if (a === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          if (a === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? t : e;
}
function d0(t) {
  return (t = uT(t)), t !== null ? f0(t) : null;
}
function f0(t) {
  if (t.tag === 5 || t.tag === 6) return t;
  for (t = t.child; t !== null; ) {
    var e = f0(t);
    if (e !== null) return e;
    t = t.sibling;
  }
  return null;
}
var p0 = Pt.unstable_scheduleCallback,
  Vm = Pt.unstable_cancelCallback,
  cT = Pt.unstable_shouldYield,
  hT = Pt.unstable_requestPaint,
  Pe = Pt.unstable_now,
  dT = Pt.unstable_getCurrentPriorityLevel,
  Cf = Pt.unstable_ImmediatePriority,
  m0 = Pt.unstable_UserBlockingPriority,
  tl = Pt.unstable_NormalPriority,
  fT = Pt.unstable_LowPriority,
  g0 = Pt.unstable_IdlePriority,
  nu = null,
  un = null;
function pT(t) {
  if (un && typeof un.onCommitFiberRoot == 'function')
    try {
      un.onCommitFiberRoot(nu, t, void 0, (t.current.flags & 128) === 128);
    } catch {}
}
var Zt = Math.clz32 ? Math.clz32 : yT,
  mT = Math.log,
  gT = Math.LN2;
function yT(t) {
  return (t >>>= 0), t === 0 ? 32 : (31 - ((mT(t) / gT) | 0)) | 0;
}
var aa = 64,
  la = 4194304;
function xs(t) {
  switch (t & -t) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return t & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return t;
  }
}
function nl(t, e) {
  var n = t.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = t.suspendedLanes,
    s = t.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~i;
    a !== 0 ? (r = xs(a)) : ((s &= o), s !== 0 && (r = xs(s)));
  } else (o = n & ~i), o !== 0 ? (r = xs(o)) : s !== 0 && (r = xs(s));
  if (r === 0) return 0;
  if (
    e !== 0 &&
    e !== r &&
    !(e & i) &&
    ((i = r & -r), (s = e & -e), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return e;
  if ((r & 4 && (r |= n & 16), (e = t.entangledLanes), e !== 0))
    for (t = t.entanglements, e &= r; 0 < e; )
      (n = 31 - Zt(e)), (i = 1 << n), (r |= t[n]), (e &= ~i);
  return r;
}
function vT(t, e) {
  switch (t) {
    case 1:
    case 2:
    case 4:
      return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wT(t, e) {
  for (
    var n = t.suspendedLanes, r = t.pingedLanes, i = t.expirationTimes, s = t.pendingLanes;
    0 < s;

  ) {
    var o = 31 - Zt(s),
      a = 1 << o,
      l = i[o];
    l === -1 ? (!(a & n) || a & r) && (i[o] = vT(a, e)) : l <= e && (t.expiredLanes |= a),
      (s &= ~a);
  }
}
function qh(t) {
  return (t = t.pendingLanes & -1073741825), t !== 0 ? t : t & 1073741824 ? 1073741824 : 0;
}
function y0() {
  var t = aa;
  return (aa <<= 1), !(aa & 4194240) && (aa = 64), t;
}
function Cc(t) {
  for (var e = [], n = 0; 31 > n; n++) e.push(t);
  return e;
}
function Po(t, e, n) {
  (t.pendingLanes |= e),
    e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
    (t = t.eventTimes),
    (e = 31 - Zt(e)),
    (t[e] = n);
}
function ET(t, e) {
  var n = t.pendingLanes & ~e;
  (t.pendingLanes = e),
    (t.suspendedLanes = 0),
    (t.pingedLanes = 0),
    (t.expiredLanes &= e),
    (t.mutableReadLanes &= e),
    (t.entangledLanes &= e),
    (e = t.entanglements);
  var r = t.eventTimes;
  for (t = t.expirationTimes; 0 < n; ) {
    var i = 31 - Zt(n),
      s = 1 << i;
    (e[i] = 0), (r[i] = -1), (t[i] = -1), (n &= ~s);
  }
}
function Af(t, e) {
  var n = (t.entangledLanes |= e);
  for (t = t.entanglements; n; ) {
    var r = 31 - Zt(n),
      i = 1 << r;
    (i & e) | (t[r] & e) && (t[r] |= e), (n &= ~i);
  }
}
var ce = 0;
function v0(t) {
  return (t &= -t), 1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1;
}
var w0,
  Nf,
  E0,
  S0,
  _0,
  Gh = !1,
  ua = [],
  tr = null,
  nr = null,
  rr = null,
  to = new Map(),
  no = new Map(),
  Bn = [],
  ST =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function jm(t, e) {
  switch (t) {
    case 'focusin':
    case 'focusout':
      tr = null;
      break;
    case 'dragenter':
    case 'dragleave':
      nr = null;
      break;
    case 'mouseover':
    case 'mouseout':
      rr = null;
      break;
    case 'pointerover':
    case 'pointerout':
      to.delete(e.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      no.delete(e.pointerId);
  }
}
function Es(t, e, n, r, i, s) {
  return t === null || t.nativeEvent !== s
    ? ((t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i]
      }),
      e !== null && ((e = Lo(e)), e !== null && Nf(e)),
      t)
    : ((t.eventSystemFlags |= r),
      (e = t.targetContainers),
      i !== null && e.indexOf(i) === -1 && e.push(i),
      t);
}
function _T(t, e, n, r, i) {
  switch (e) {
    case 'focusin':
      return (tr = Es(tr, t, e, n, r, i)), !0;
    case 'dragenter':
      return (nr = Es(nr, t, e, n, r, i)), !0;
    case 'mouseover':
      return (rr = Es(rr, t, e, n, r, i)), !0;
    case 'pointerover':
      var s = i.pointerId;
      return to.set(s, Es(to.get(s) || null, t, e, n, r, i)), !0;
    case 'gotpointercapture':
      return (s = i.pointerId), no.set(s, Es(no.get(s) || null, t, e, n, r, i)), !0;
  }
  return !1;
}
function T0(t) {
  var e = Dr(t.target);
  if (e !== null) {
    var n = si(e);
    if (n !== null) {
      if (((e = n.tag), e === 13)) {
        if (((e = h0(n)), e !== null)) {
          (t.blockedOn = e),
            _0(t.priority, function () {
              E0(n);
            });
          return;
        }
      } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  t.blockedOn = null;
}
function Da(t) {
  if (t.blockedOn !== null) return !1;
  for (var e = t.targetContainers; 0 < e.length; ) {
    var n = Qh(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
    if (n === null) {
      n = t.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Bh = r), n.target.dispatchEvent(r), (Bh = null);
    } else return (e = Lo(n)), e !== null && Nf(e), (t.blockedOn = n), !1;
    e.shift();
  }
  return !0;
}
function zm(t, e, n) {
  Da(t) && n.delete(e);
}
function TT() {
  (Gh = !1),
    tr !== null && Da(tr) && (tr = null),
    nr !== null && Da(nr) && (nr = null),
    rr !== null && Da(rr) && (rr = null),
    to.forEach(zm),
    no.forEach(zm);
}
function Ss(t, e) {
  t.blockedOn === e &&
    ((t.blockedOn = null),
    Gh || ((Gh = !0), Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority, TT)));
}
function ro(t) {
  function e(i) {
    return Ss(i, t);
  }
  if (0 < ua.length) {
    Ss(ua[0], t);
    for (var n = 1; n < ua.length; n++) {
      var r = ua[n];
      r.blockedOn === t && (r.blockedOn = null);
    }
  }
  for (
    tr !== null && Ss(tr, t),
      nr !== null && Ss(nr, t),
      rr !== null && Ss(rr, t),
      to.forEach(e),
      no.forEach(e),
      n = 0;
    n < Bn.length;
    n++
  )
    (r = Bn[n]), r.blockedOn === t && (r.blockedOn = null);
  for (; 0 < Bn.length && ((n = Bn[0]), n.blockedOn === null); )
    T0(n), n.blockedOn === null && Bn.shift();
}
var xi = bn.ReactCurrentBatchConfig,
  rl = !0;
function IT(t, e, n, r) {
  var i = ce,
    s = xi.transition;
  xi.transition = null;
  try {
    (ce = 1), Rf(t, e, n, r);
  } finally {
    (ce = i), (xi.transition = s);
  }
}
function kT(t, e, n, r) {
  var i = ce,
    s = xi.transition;
  xi.transition = null;
  try {
    (ce = 4), Rf(t, e, n, r);
  } finally {
    (ce = i), (xi.transition = s);
  }
}
function Rf(t, e, n, r) {
  if (rl) {
    var i = Qh(t, e, n, r);
    if (i === null) bc(t, e, r, il, n), jm(t, r);
    else if (_T(i, t, e, n, r)) r.stopPropagation();
    else if ((jm(t, r), e & 4 && -1 < ST.indexOf(t))) {
      for (; i !== null; ) {
        var s = Lo(i);
        if ((s !== null && w0(s), (s = Qh(t, e, n, r)), s === null && bc(t, e, r, il, n), s === i))
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else bc(t, e, r, null, n);
  }
}
var il = null;
function Qh(t, e, n, r) {
  if (((il = null), (t = kf(r)), (t = Dr(t)), t !== null))
    if (((e = si(t)), e === null)) t = null;
    else if (((n = e.tag), n === 13)) {
      if (((t = h0(e)), t !== null)) return t;
      t = null;
    } else if (n === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null;
      t = null;
    } else e !== t && (t = null);
  return (il = t), null;
}
function I0(t) {
  switch (t) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (dT()) {
        case Cf:
          return 1;
        case m0:
          return 4;
        case tl:
        case fT:
          return 16;
        case g0:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Xn = null,
  xf = null,
  Pa = null;
function k0() {
  if (Pa) return Pa;
  var t,
    e = xf,
    n = e.length,
    r,
    i = 'value' in Xn ? Xn.value : Xn.textContent,
    s = i.length;
  for (t = 0; t < n && e[t] === i[t]; t++);
  var o = n - t;
  for (r = 1; r <= o && e[n - r] === i[s - r]; r++);
  return (Pa = i.slice(t, 1 < r ? 1 - r : void 0));
}
function Oa(t) {
  var e = t.keyCode;
  return (
    'charCode' in t ? ((t = t.charCode), t === 0 && e === 13 && (t = 13)) : (t = e),
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
  );
}
function ca() {
  return !0;
}
function Bm() {
  return !1;
}
function bt(t) {
  function e(n, r, i, s, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in t) t.hasOwnProperty(a) && ((n = t[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? ca
        : Bm),
      (this.isPropagationStopped = Bm),
      this
    );
  }
  return (
    ke(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = ca));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = ca));
      },
      persist: function () {},
      isPersistent: ca
    }),
    e
  );
}
var ls = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  },
  Df = bt(ls),
  Oo = ke({}, ls, { view: 0, detail: 0 }),
  CT = bt(Oo),
  Ac,
  Nc,
  _s,
  ru = ke({}, Oo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Pf,
    button: 0,
    buttons: 0,
    relatedTarget: function (t) {
      return t.relatedTarget === void 0
        ? t.fromElement === t.srcElement
          ? t.toElement
          : t.fromElement
        : t.relatedTarget;
    },
    movementX: function (t) {
      return 'movementX' in t
        ? t.movementX
        : (t !== _s &&
            (_s && t.type === 'mousemove'
              ? ((Ac = t.screenX - _s.screenX), (Nc = t.screenY - _s.screenY))
              : (Nc = Ac = 0),
            (_s = t)),
          Ac);
    },
    movementY: function (t) {
      return 'movementY' in t ? t.movementY : Nc;
    }
  }),
  Hm = bt(ru),
  AT = ke({}, ru, { dataTransfer: 0 }),
  NT = bt(AT),
  RT = ke({}, Oo, { relatedTarget: 0 }),
  Rc = bt(RT),
  xT = ke({}, ls, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  DT = bt(xT),
  PT = ke({}, ls, {
    clipboardData: function (t) {
      return 'clipboardData' in t ? t.clipboardData : window.clipboardData;
    }
  }),
  OT = bt(PT),
  LT = ke({}, ls, { data: 0 }),
  Km = bt(LT),
  $T = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified'
  },
  bT = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta'
  },
  MT = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function FT(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = MT[t]) ? !!e[t] : !1;
}
function Pf() {
  return FT;
}
var UT = ke({}, Oo, {
    key: function (t) {
      if (t.key) {
        var e = $T[t.key] || t.key;
        if (e !== 'Unidentified') return e;
      }
      return t.type === 'keypress'
        ? ((t = Oa(t)), t === 13 ? 'Enter' : String.fromCharCode(t))
        : t.type === 'keydown' || t.type === 'keyup'
        ? bT[t.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Pf,
    charCode: function (t) {
      return t.type === 'keypress' ? Oa(t) : 0;
    },
    keyCode: function (t) {
      return t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0;
    },
    which: function (t) {
      return t.type === 'keypress'
        ? Oa(t)
        : t.type === 'keydown' || t.type === 'keyup'
        ? t.keyCode
        : 0;
    }
  }),
  VT = bt(UT),
  jT = ke({}, ru, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }),
  Wm = bt(jT),
  zT = ke({}, Oo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Pf
  }),
  BT = bt(zT),
  HT = ke({}, ls, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  KT = bt(HT),
  WT = ke({}, ru, {
    deltaX: function (t) {
      return 'deltaX' in t ? t.deltaX : 'wheelDeltaX' in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function (t) {
      return 'deltaY' in t
        ? t.deltaY
        : 'wheelDeltaY' in t
        ? -t.wheelDeltaY
        : 'wheelDelta' in t
        ? -t.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }),
  qT = bt(WT),
  GT = [9, 13, 27, 32],
  Of = Cn && 'CompositionEvent' in window,
  Fs = null;
Cn && 'documentMode' in document && (Fs = document.documentMode);
var QT = Cn && 'TextEvent' in window && !Fs,
  C0 = Cn && (!Of || (Fs && 8 < Fs && 11 >= Fs)),
  qm = String.fromCharCode(32),
  Gm = !1;
function A0(t, e) {
  switch (t) {
    case 'keyup':
      return GT.indexOf(e.keyCode) !== -1;
    case 'keydown':
      return e.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function N0(t) {
  return (t = t.detail), typeof t == 'object' && 'data' in t ? t.data : null;
}
var pi = !1;
function XT(t, e) {
  switch (t) {
    case 'compositionend':
      return N0(e);
    case 'keypress':
      return e.which !== 32 ? null : ((Gm = !0), qm);
    case 'textInput':
      return (t = e.data), t === qm && Gm ? null : t;
    default:
      return null;
  }
}
function YT(t, e) {
  if (pi)
    return t === 'compositionend' || (!Of && A0(t, e))
      ? ((t = k0()), (Pa = xf = Xn = null), (pi = !1), t)
      : null;
  switch (t) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case 'compositionend':
      return C0 && e.locale !== 'ko' ? null : e.data;
    default:
      return null;
  }
}
var JT = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
};
function Qm(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === 'input' ? !!JT[t.type] : e === 'textarea';
}
function R0(t, e, n, r) {
  o0(r),
    (e = sl(e, 'onChange')),
    0 < e.length &&
      ((n = new Df('onChange', 'change', null, n, r)), t.push({ event: n, listeners: e }));
}
var Us = null,
  io = null;
function ZT(t) {
  V0(t, 0);
}
function iu(t) {
  var e = yi(t);
  if (Zv(e)) return t;
}
function eI(t, e) {
  if (t === 'change') return e;
}
var x0 = !1;
if (Cn) {
  var xc;
  if (Cn) {
    var Dc = 'oninput' in document;
    if (!Dc) {
      var Xm = document.createElement('div');
      Xm.setAttribute('oninput', 'return;'), (Dc = typeof Xm.oninput == 'function');
    }
    xc = Dc;
  } else xc = !1;
  x0 = xc && (!document.documentMode || 9 < document.documentMode);
}
function Ym() {
  Us && (Us.detachEvent('onpropertychange', D0), (io = Us = null));
}
function D0(t) {
  if (t.propertyName === 'value' && iu(io)) {
    var e = [];
    R0(e, io, t, kf(t)), c0(ZT, e);
  }
}
function tI(t, e, n) {
  t === 'focusin'
    ? (Ym(), (Us = e), (io = n), Us.attachEvent('onpropertychange', D0))
    : t === 'focusout' && Ym();
}
function nI(t) {
  if (t === 'selectionchange' || t === 'keyup' || t === 'keydown') return iu(io);
}
function rI(t, e) {
  if (t === 'click') return iu(e);
}
function iI(t, e) {
  if (t === 'input' || t === 'change') return iu(e);
}
function sI(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var tn = typeof Object.is == 'function' ? Object.is : sI;
function so(t, e) {
  if (tn(t, e)) return !0;
  if (typeof t != 'object' || t === null || typeof e != 'object' || e === null) return !1;
  var n = Object.keys(t),
    r = Object.keys(e);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Dh.call(e, i) || !tn(t[i], e[i])) return !1;
  }
  return !0;
}
function Jm(t) {
  for (; t && t.firstChild; ) t = t.firstChild;
  return t;
}
function Zm(t, e) {
  var n = Jm(t);
  t = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = t + n.textContent.length), t <= e && r >= e)) return { node: n, offset: e - t };
      t = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Jm(n);
  }
}
function P0(t, e) {
  return t && e
    ? t === e
      ? !0
      : t && t.nodeType === 3
      ? !1
      : e && e.nodeType === 3
      ? P0(t, e.parentNode)
      : 'contains' in t
      ? t.contains(e)
      : t.compareDocumentPosition
      ? !!(t.compareDocumentPosition(e) & 16)
      : !1
    : !1;
}
function O0() {
  for (var t = window, e = Ja(); e instanceof t.HTMLIFrameElement; ) {
    try {
      var n = typeof e.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) t = e.contentWindow;
    else break;
    e = Ja(t.document);
  }
  return e;
}
function Lf(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return (
    e &&
    ((e === 'input' &&
      (t.type === 'text' ||
        t.type === 'search' ||
        t.type === 'tel' ||
        t.type === 'url' ||
        t.type === 'password')) ||
      e === 'textarea' ||
      t.contentEditable === 'true')
  );
}
function oI(t) {
  var e = O0(),
    n = t.focusedElem,
    r = t.selectionRange;
  if (e !== n && n && n.ownerDocument && P0(n.ownerDocument.documentElement, n)) {
    if (r !== null && Lf(n)) {
      if (((e = r.start), (t = r.end), t === void 0 && (t = e), 'selectionStart' in n))
        (n.selectionStart = e), (n.selectionEnd = Math.min(t, n.value.length));
      else if (
        ((t = ((e = n.ownerDocument || document) && e.defaultView) || window), t.getSelection)
      ) {
        t = t.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !t.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = Zm(n, s));
        var o = Zm(n, r);
        i &&
          o &&
          (t.rangeCount !== 1 ||
            t.anchorNode !== i.node ||
            t.anchorOffset !== i.offset ||
            t.focusNode !== o.node ||
            t.focusOffset !== o.offset) &&
          ((e = e.createRange()),
          e.setStart(i.node, i.offset),
          t.removeAllRanges(),
          s > r
            ? (t.addRange(e), t.extend(o.node, o.offset))
            : (e.setEnd(o.node, o.offset), t.addRange(e)));
      }
    }
    for (e = [], t = n; (t = t.parentNode); )
      t.nodeType === 1 && e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < e.length; n++)
      (t = e[n]), (t.element.scrollLeft = t.left), (t.element.scrollTop = t.top);
  }
}
var aI = Cn && 'documentMode' in document && 11 >= document.documentMode,
  mi = null,
  Xh = null,
  Vs = null,
  Yh = !1;
function eg(t, e, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Yh ||
    mi == null ||
    mi !== Ja(r) ||
    ((r = mi),
    'selectionStart' in r && Lf(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset
        })),
    (Vs && so(Vs, r)) ||
      ((Vs = r),
      (r = sl(Xh, 'onSelect')),
      0 < r.length &&
        ((e = new Df('onSelect', 'select', null, e, n)),
        t.push({ event: e, listeners: r }),
        (e.target = mi))));
}
function ha(t, e) {
  var n = {};
  return (
    (n[t.toLowerCase()] = e.toLowerCase()),
    (n['Webkit' + t] = 'webkit' + e),
    (n['Moz' + t] = 'moz' + e),
    n
  );
}
var gi = {
    animationend: ha('Animation', 'AnimationEnd'),
    animationiteration: ha('Animation', 'AnimationIteration'),
    animationstart: ha('Animation', 'AnimationStart'),
    transitionend: ha('Transition', 'TransitionEnd')
  },
  Pc = {},
  L0 = {};
Cn &&
  ((L0 = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete gi.animationend.animation,
    delete gi.animationiteration.animation,
    delete gi.animationstart.animation),
  'TransitionEvent' in window || delete gi.transitionend.transition);
function su(t) {
  if (Pc[t]) return Pc[t];
  if (!gi[t]) return t;
  var e = gi[t],
    n;
  for (n in e) if (e.hasOwnProperty(n) && n in L0) return (Pc[t] = e[n]);
  return t;
}
var $0 = su('animationend'),
  b0 = su('animationiteration'),
  M0 = su('animationstart'),
  F0 = su('transitionend'),
  U0 = new Map(),
  tg =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function Er(t, e) {
  U0.set(t, e), ii(e, [t]);
}
for (var Oc = 0; Oc < tg.length; Oc++) {
  var Lc = tg[Oc],
    lI = Lc.toLowerCase(),
    uI = Lc[0].toUpperCase() + Lc.slice(1);
  Er(lI, 'on' + uI);
}
Er($0, 'onAnimationEnd');
Er(b0, 'onAnimationIteration');
Er(M0, 'onAnimationStart');
Er('dblclick', 'onDoubleClick');
Er('focusin', 'onFocus');
Er('focusout', 'onBlur');
Er(F0, 'onTransitionEnd');
Hi('onMouseEnter', ['mouseout', 'mouseover']);
Hi('onMouseLeave', ['mouseout', 'mouseover']);
Hi('onPointerEnter', ['pointerout', 'pointerover']);
Hi('onPointerLeave', ['pointerout', 'pointerover']);
ii('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '));
ii(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')
);
ii('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
ii('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '));
ii('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '));
ii('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
var Ds =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  cI = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Ds));
function ng(t, e, n) {
  var r = t.type || 'unknown-event';
  (t.currentTarget = n), lT(r, e, void 0, t), (t.currentTarget = null);
}
function V0(t, e) {
  e = (e & 4) !== 0;
  for (var n = 0; n < t.length; n++) {
    var r = t[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (e)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== s && i.isPropagationStopped())) break e;
          ng(i, a, u), (s = l);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== s && i.isPropagationStopped())
          )
            break e;
          ng(i, a, u), (s = l);
        }
    }
  }
  if (el) throw ((t = Wh), (el = !1), (Wh = null), t);
}
function pe(t, e) {
  var n = e[nd];
  n === void 0 && (n = e[nd] = new Set());
  var r = t + '__bubble';
  n.has(r) || (j0(e, t, 2, !1), n.add(r));
}
function $c(t, e, n) {
  var r = 0;
  e && (r |= 4), j0(n, t, r, e);
}
var da = '_reactListening' + Math.random().toString(36).slice(2);
function oo(t) {
  if (!t[da]) {
    (t[da] = !0),
      Gv.forEach(function (n) {
        n !== 'selectionchange' && (cI.has(n) || $c(n, !1, t), $c(n, !0, t));
      });
    var e = t.nodeType === 9 ? t : t.ownerDocument;
    e === null || e[da] || ((e[da] = !0), $c('selectionchange', !1, e));
  }
}
function j0(t, e, n, r) {
  switch (I0(e)) {
    case 1:
      var i = IT;
      break;
    case 4:
      i = kT;
      break;
    default:
      i = Rf;
  }
  (n = i.bind(null, e, n, t)),
    (i = void 0),
    !Kh || (e !== 'touchstart' && e !== 'touchmove' && e !== 'wheel') || (i = !0),
    r
      ? i !== void 0
        ? t.addEventListener(e, n, { capture: !0, passive: i })
        : t.addEventListener(e, n, !0)
      : i !== void 0
      ? t.addEventListener(e, n, { passive: i })
      : t.addEventListener(e, n, !1);
}
function bc(t, e, n, r, i) {
  var s = r;
  if (!(e & 1) && !(e & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo), l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = Dr(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = s = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  c0(function () {
    var u = s,
      c = kf(n),
      h = [];
    e: {
      var d = U0.get(t);
      if (d !== void 0) {
        var m = Df,
          y = t;
        switch (t) {
          case 'keypress':
            if (Oa(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            m = VT;
            break;
          case 'focusin':
            (y = 'focus'), (m = Rc);
            break;
          case 'focusout':
            (y = 'blur'), (m = Rc);
            break;
          case 'beforeblur':
          case 'afterblur':
            m = Rc;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            m = Hm;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            m = NT;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            m = BT;
            break;
          case $0:
          case b0:
          case M0:
            m = DT;
            break;
          case F0:
            m = KT;
            break;
          case 'scroll':
            m = CT;
            break;
          case 'wheel':
            m = qT;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            m = OT;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            m = Wm;
        }
        var v = (e & 4) !== 0,
          S = !v && t === 'scroll',
          p = v ? (d !== null ? d + 'Capture' : null) : d;
        v = [];
        for (var f = u, g; f !== null; ) {
          g = f;
          var E = g.stateNode;
          if (
            (g.tag === 5 &&
              E !== null &&
              ((g = E), p !== null && ((E = eo(f, p)), E != null && v.push(ao(f, E, g)))),
            S)
          )
            break;
          f = f.return;
        }
        0 < v.length && ((d = new m(d, y, null, n, c)), h.push({ event: d, listeners: v }));
      }
    }
    if (!(e & 7)) {
      e: {
        if (
          ((d = t === 'mouseover' || t === 'pointerover'),
          (m = t === 'mouseout' || t === 'pointerout'),
          d && n !== Bh && (y = n.relatedTarget || n.fromElement) && (Dr(y) || y[An]))
        )
          break e;
        if (
          (m || d) &&
          ((d =
            c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window),
          m
            ? ((y = n.relatedTarget || n.toElement),
              (m = u),
              (y = y ? Dr(y) : null),
              y !== null && ((S = si(y)), y !== S || (y.tag !== 5 && y.tag !== 6)) && (y = null))
            : ((m = null), (y = u)),
          m !== y)
        ) {
          if (
            ((v = Hm),
            (E = 'onMouseLeave'),
            (p = 'onMouseEnter'),
            (f = 'mouse'),
            (t === 'pointerout' || t === 'pointerover') &&
              ((v = Wm), (E = 'onPointerLeave'), (p = 'onPointerEnter'), (f = 'pointer')),
            (S = m == null ? d : yi(m)),
            (g = y == null ? d : yi(y)),
            (d = new v(E, f + 'leave', m, n, c)),
            (d.target = S),
            (d.relatedTarget = g),
            (E = null),
            Dr(c) === u &&
              ((v = new v(p, f + 'enter', y, n, c)),
              (v.target = g),
              (v.relatedTarget = S),
              (E = v)),
            (S = E),
            m && y)
          )
            t: {
              for (v = m, p = y, f = 0, g = v; g; g = li(g)) f++;
              for (g = 0, E = p; E; E = li(E)) g++;
              for (; 0 < f - g; ) (v = li(v)), f--;
              for (; 0 < g - f; ) (p = li(p)), g--;
              for (; f--; ) {
                if (v === p || (p !== null && v === p.alternate)) break t;
                (v = li(v)), (p = li(p));
              }
              v = null;
            }
          else v = null;
          m !== null && rg(h, d, m, v, !1), y !== null && S !== null && rg(h, S, y, v, !0);
        }
      }
      e: {
        if (
          ((d = u ? yi(u) : window),
          (m = d.nodeName && d.nodeName.toLowerCase()),
          m === 'select' || (m === 'input' && d.type === 'file'))
        )
          var _ = eI;
        else if (Qm(d))
          if (x0) _ = iI;
          else {
            _ = nI;
            var R = tI;
          }
        else
          (m = d.nodeName) &&
            m.toLowerCase() === 'input' &&
            (d.type === 'checkbox' || d.type === 'radio') &&
            (_ = rI);
        if (_ && (_ = _(t, u))) {
          R0(h, _, n, c);
          break e;
        }
        R && R(t, d, u),
          t === 'focusout' &&
            (R = d._wrapperState) &&
            R.controlled &&
            d.type === 'number' &&
            Fh(d, 'number', d.value);
      }
      switch (((R = u ? yi(u) : window), t)) {
        case 'focusin':
          (Qm(R) || R.contentEditable === 'true') && ((mi = R), (Xh = u), (Vs = null));
          break;
        case 'focusout':
          Vs = Xh = mi = null;
          break;
        case 'mousedown':
          Yh = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Yh = !1), eg(h, n, c);
          break;
        case 'selectionchange':
          if (aI) break;
        case 'keydown':
        case 'keyup':
          eg(h, n, c);
      }
      var x;
      if (Of)
        e: {
          switch (t) {
            case 'compositionstart':
              var P = 'onCompositionStart';
              break e;
            case 'compositionend':
              P = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              P = 'onCompositionUpdate';
              break e;
          }
          P = void 0;
        }
      else
        pi
          ? A0(t, n) && (P = 'onCompositionEnd')
          : t === 'keydown' && n.keyCode === 229 && (P = 'onCompositionStart');
      P &&
        (C0 &&
          n.locale !== 'ko' &&
          (pi || P !== 'onCompositionStart'
            ? P === 'onCompositionEnd' && pi && (x = k0())
            : ((Xn = c), (xf = 'value' in Xn ? Xn.value : Xn.textContent), (pi = !0))),
        (R = sl(u, P)),
        0 < R.length &&
          ((P = new Km(P, t, null, n, c)),
          h.push({ event: P, listeners: R }),
          x ? (P.data = x) : ((x = N0(n)), x !== null && (P.data = x)))),
        (x = QT ? XT(t, n) : YT(t, n)) &&
          ((u = sl(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new Km('onBeforeInput', 'beforeinput', null, n, c)),
            h.push({ event: c, listeners: u }),
            (c.data = x)));
    }
    V0(h, e);
  });
}
function ao(t, e, n) {
  return { instance: t, listener: e, currentTarget: n };
}
function sl(t, e) {
  for (var n = e + 'Capture', r = []; t !== null; ) {
    var i = t,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = eo(t, n)),
      s != null && r.unshift(ao(t, s, i)),
      (s = eo(t, e)),
      s != null && r.push(ao(t, s, i))),
      (t = t.return);
  }
  return r;
}
function li(t) {
  if (t === null) return null;
  do t = t.return;
  while (t && t.tag !== 5);
  return t || null;
}
function rg(t, e, n, r, i) {
  for (var s = e._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = eo(n, s)), l != null && o.unshift(ao(n, l, a)))
        : i || ((l = eo(n, s)), l != null && o.push(ao(n, l, a)))),
      (n = n.return);
  }
  o.length !== 0 && t.push({ event: e, listeners: o });
}
var hI = /\r\n?/g,
  dI = /\u0000|\uFFFD/g;
function ig(t) {
  return (typeof t == 'string' ? t : '' + t)
    .replace(
      hI,
      `
`
    )
    .replace(dI, '');
}
function fa(t, e, n) {
  if (((e = ig(e)), ig(t) !== e && n)) throw Error(k(425));
}
function ol() {}
var Jh = null,
  Zh = null;
function ed(t, e) {
  return (
    t === 'textarea' ||
    t === 'noscript' ||
    typeof e.children == 'string' ||
    typeof e.children == 'number' ||
    (typeof e.dangerouslySetInnerHTML == 'object' &&
      e.dangerouslySetInnerHTML !== null &&
      e.dangerouslySetInnerHTML.__html != null)
  );
}
var td = typeof setTimeout == 'function' ? setTimeout : void 0,
  fI = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  sg = typeof Promise == 'function' ? Promise : void 0,
  pI =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof sg < 'u'
      ? function (t) {
          return sg.resolve(null).then(t).catch(mI);
        }
      : td;
function mI(t) {
  setTimeout(function () {
    throw t;
  });
}
function Mc(t, e) {
  var n = e,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((t.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === '/$')) {
        if (r === 0) {
          t.removeChild(i), ro(e);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = i;
  } while (n);
  ro(e);
}
function ir(t) {
  for (; t != null; t = t.nextSibling) {
    var e = t.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (((e = t.data), e === '$' || e === '$!' || e === '$?')) break;
      if (e === '/$') return null;
    }
  }
  return t;
}
function og(t) {
  t = t.previousSibling;
  for (var e = 0; t; ) {
    if (t.nodeType === 8) {
      var n = t.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (e === 0) return t;
        e--;
      } else n === '/$' && e++;
    }
    t = t.previousSibling;
  }
  return null;
}
var us = Math.random().toString(36).slice(2),
  sn = '__reactFiber$' + us,
  lo = '__reactProps$' + us,
  An = '__reactContainer$' + us,
  nd = '__reactEvents$' + us,
  gI = '__reactListeners$' + us,
  yI = '__reactHandles$' + us;
function Dr(t) {
  var e = t[sn];
  if (e) return e;
  for (var n = t.parentNode; n; ) {
    if ((e = n[An] || n[sn])) {
      if (((n = e.alternate), e.child !== null || (n !== null && n.child !== null)))
        for (t = og(t); t !== null; ) {
          if ((n = t[sn])) return n;
          t = og(t);
        }
      return e;
    }
    (t = n), (n = t.parentNode);
  }
  return null;
}
function Lo(t) {
  return (
    (t = t[sn] || t[An]),
    !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t
  );
}
function yi(t) {
  if (t.tag === 5 || t.tag === 6) return t.stateNode;
  throw Error(k(33));
}
function ou(t) {
  return t[lo] || null;
}
var rd = [],
  vi = -1;
function Sr(t) {
  return { current: t };
}
function me(t) {
  0 > vi || ((t.current = rd[vi]), (rd[vi] = null), vi--);
}
function fe(t, e) {
  vi++, (rd[vi] = t.current), (t.current = e);
}
var mr = {},
  ht = Sr(mr),
  Tt = Sr(!1),
  Wr = mr;
function Ki(t, e) {
  var n = t.type.contextTypes;
  if (!n) return mr;
  var r = t.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = e[s];
  return (
    r &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = e),
      (t.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function It(t) {
  return (t = t.childContextTypes), t != null;
}
function al() {
  me(Tt), me(ht);
}
function ag(t, e, n) {
  if (ht.current !== mr) throw Error(k(168));
  fe(ht, e), fe(Tt, n);
}
function z0(t, e, n) {
  var r = t.stateNode;
  if (((e = e.childContextTypes), typeof r.getChildContext != 'function')) return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in e)) throw Error(k(108, tT(t) || 'Unknown', i));
  return ke({}, n, r);
}
function ll(t) {
  return (
    (t = ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || mr),
    (Wr = ht.current),
    fe(ht, t),
    fe(Tt, Tt.current),
    !0
  );
}
function lg(t, e, n) {
  var r = t.stateNode;
  if (!r) throw Error(k(169));
  n
    ? ((t = z0(t, e, Wr)),
      (r.__reactInternalMemoizedMergedChildContext = t),
      me(Tt),
      me(ht),
      fe(ht, t))
    : me(Tt),
    fe(Tt, n);
}
var wn = null,
  au = !1,
  Fc = !1;
function B0(t) {
  wn === null ? (wn = [t]) : wn.push(t);
}
function vI(t) {
  (au = !0), B0(t);
}
function _r() {
  if (!Fc && wn !== null) {
    Fc = !0;
    var t = 0,
      e = ce;
    try {
      var n = wn;
      for (ce = 1; t < n.length; t++) {
        var r = n[t];
        do r = r(!0);
        while (r !== null);
      }
      (wn = null), (au = !1);
    } catch (i) {
      throw (wn !== null && (wn = wn.slice(t + 1)), p0(Cf, _r), i);
    } finally {
      (ce = e), (Fc = !1);
    }
  }
  return null;
}
var wi = [],
  Ei = 0,
  ul = null,
  cl = 0,
  Ut = [],
  Vt = 0,
  qr = null,
  En = 1,
  Sn = '';
function Cr(t, e) {
  (wi[Ei++] = cl), (wi[Ei++] = ul), (ul = t), (cl = e);
}
function H0(t, e, n) {
  (Ut[Vt++] = En), (Ut[Vt++] = Sn), (Ut[Vt++] = qr), (qr = t);
  var r = En;
  t = Sn;
  var i = 32 - Zt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - Zt(e) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (En = (1 << (32 - Zt(e) + i)) | (n << i) | r),
      (Sn = s + t);
  } else (En = (1 << s) | (n << i) | r), (Sn = t);
}
function $f(t) {
  t.return !== null && (Cr(t, 1), H0(t, 1, 0));
}
function bf(t) {
  for (; t === ul; ) (ul = wi[--Ei]), (wi[Ei] = null), (cl = wi[--Ei]), (wi[Ei] = null);
  for (; t === qr; )
    (qr = Ut[--Vt]),
      (Ut[Vt] = null),
      (Sn = Ut[--Vt]),
      (Ut[Vt] = null),
      (En = Ut[--Vt]),
      (Ut[Vt] = null);
}
var Dt = null,
  Rt = null,
  Se = !1,
  Xt = null;
function K0(t, e) {
  var n = jt(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = e),
    (n.return = t),
    (e = t.deletions),
    e === null ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n);
}
function ug(t, e) {
  switch (t.tag) {
    case 5:
      var n = t.type;
      return (
        (e = e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase() ? null : e),
        e !== null ? ((t.stateNode = e), (Dt = t), (Rt = ir(e.firstChild)), !0) : !1
      );
    case 6:
      return (
        (e = t.pendingProps === '' || e.nodeType !== 3 ? null : e),
        e !== null ? ((t.stateNode = e), (Dt = t), (Rt = null), !0) : !1
      );
    case 13:
      return (
        (e = e.nodeType !== 8 ? null : e),
        e !== null
          ? ((n = qr !== null ? { id: En, overflow: Sn } : null),
            (t.memoizedState = { dehydrated: e, treeContext: n, retryLane: 1073741824 }),
            (n = jt(18, null, null, 0)),
            (n.stateNode = e),
            (n.return = t),
            (t.child = n),
            (Dt = t),
            (Rt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function id(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function sd(t) {
  if (Se) {
    var e = Rt;
    if (e) {
      var n = e;
      if (!ug(t, e)) {
        if (id(t)) throw Error(k(418));
        e = ir(n.nextSibling);
        var r = Dt;
        e && ug(t, e) ? K0(r, n) : ((t.flags = (t.flags & -4097) | 2), (Se = !1), (Dt = t));
      }
    } else {
      if (id(t)) throw Error(k(418));
      (t.flags = (t.flags & -4097) | 2), (Se = !1), (Dt = t);
    }
  }
}
function cg(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; ) t = t.return;
  Dt = t;
}
function pa(t) {
  if (t !== Dt) return !1;
  if (!Se) return cg(t), (Se = !0), !1;
  var e;
  if (
    ((e = t.tag !== 3) &&
      !(e = t.tag !== 5) &&
      ((e = t.type), (e = e !== 'head' && e !== 'body' && !ed(t.type, t.memoizedProps))),
    e && (e = Rt))
  ) {
    if (id(t)) throw (W0(), Error(k(418)));
    for (; e; ) K0(t, e), (e = ir(e.nextSibling));
  }
  if ((cg(t), t.tag === 13)) {
    if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(k(317));
    e: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (n === '/$') {
            if (e === 0) {
              Rt = ir(t.nextSibling);
              break e;
            }
            e--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || e++;
        }
        t = t.nextSibling;
      }
      Rt = null;
    }
  } else Rt = Dt ? ir(t.stateNode.nextSibling) : null;
  return !0;
}
function W0() {
  for (var t = Rt; t; ) t = ir(t.nextSibling);
}
function Wi() {
  (Rt = Dt = null), (Se = !1);
}
function Mf(t) {
  Xt === null ? (Xt = [t]) : Xt.push(t);
}
var wI = bn.ReactCurrentBatchConfig;
function Gt(t, e) {
  if (t && t.defaultProps) {
    (e = ke({}, e)), (t = t.defaultProps);
    for (var n in t) e[n] === void 0 && (e[n] = t[n]);
    return e;
  }
  return e;
}
var hl = Sr(null),
  dl = null,
  Si = null,
  Ff = null;
function Uf() {
  Ff = Si = dl = null;
}
function Vf(t) {
  var e = hl.current;
  me(hl), (t._currentValue = e);
}
function od(t, e, n) {
  for (; t !== null; ) {
    var r = t.alternate;
    if (
      ((t.childLanes & e) !== e
        ? ((t.childLanes |= e), r !== null && (r.childLanes |= e))
        : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e),
      t === n)
    )
      break;
    t = t.return;
  }
}
function Di(t, e) {
  (dl = t),
    (Ff = Si = null),
    (t = t.dependencies),
    t !== null && t.firstContext !== null && (t.lanes & e && (_t = !0), (t.firstContext = null));
}
function Bt(t) {
  var e = t._currentValue;
  if (Ff !== t)
    if (((t = { context: t, memoizedValue: e, next: null }), Si === null)) {
      if (dl === null) throw Error(k(308));
      (Si = t), (dl.dependencies = { lanes: 0, firstContext: t });
    } else Si = Si.next = t;
  return e;
}
var Pr = null;
function jf(t) {
  Pr === null ? (Pr = [t]) : Pr.push(t);
}
function q0(t, e, n, r) {
  var i = e.interleaved;
  return (
    i === null ? ((n.next = n), jf(e)) : ((n.next = i.next), (i.next = n)),
    (e.interleaved = n),
    Nn(t, r)
  );
}
function Nn(t, e) {
  t.lanes |= e;
  var n = t.alternate;
  for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; )
    (t.childLanes |= e),
      (n = t.alternate),
      n !== null && (n.childLanes |= e),
      (n = t),
      (t = t.return);
  return n.tag === 3 ? n.stateNode : null;
}
var zn = !1;
function zf(t) {
  t.updateQueue = {
    baseState: t.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null
  };
}
function G0(t, e) {
  (t = t.updateQueue),
    e.updateQueue === t &&
      (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects
      });
}
function kn(t, e) {
  return { eventTime: t, lane: e, tag: 0, payload: null, callback: null, next: null };
}
function sr(t, e, n) {
  var r = t.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), se & 2)) {
    var i = r.pending;
    return i === null ? (e.next = e) : ((e.next = i.next), (i.next = e)), (r.pending = e), Nn(t, n);
  }
  return (
    (i = r.interleaved),
    i === null ? ((e.next = e), jf(r)) : ((e.next = i.next), (i.next = e)),
    (r.interleaved = e),
    Nn(t, n)
  );
}
function La(t, e, n) {
  if (((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194240) !== 0))) {
    var r = e.lanes;
    (r &= t.pendingLanes), (n |= r), (e.lanes = n), Af(t, n);
  }
}
function hg(t, e) {
  var n = t.updateQueue,
    r = t.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null
        };
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = e) : (s = s.next = e);
    } else i = s = e;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects
    }),
      (t.updateQueue = n);
    return;
  }
  (t = n.lastBaseUpdate),
    t === null ? (n.firstBaseUpdate = e) : (t.next = e),
    (n.lastBaseUpdate = e);
}
function fl(t, e, n, r) {
  var i = t.updateQueue;
  zn = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), o === null ? (s = u) : (o.next = u), (o = l);
    var c = t.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== o && (a === null ? (c.firstBaseUpdate = u) : (a.next = u), (c.lastBaseUpdate = l)));
  }
  if (s !== null) {
    var h = i.baseState;
    (o = 0), (c = u = l = null), (a = s);
    do {
      var d = a.lane,
        m = a.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: m,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null
            });
        e: {
          var y = t,
            v = a;
          switch (((d = e), (m = n), v.tag)) {
            case 1:
              if (((y = v.payload), typeof y == 'function')) {
                h = y.call(m, h, d);
                break e;
              }
              h = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (((y = v.payload), (d = typeof y == 'function' ? y.call(m, h, d) : y), d == null))
                break e;
              h = ke({}, h, d);
              break e;
            case 2:
              zn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((t.flags |= 64), (d = i.effects), d === null ? (i.effects = [a]) : d.push(a));
      } else
        (m = {
          eventTime: m,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        }),
          c === null ? ((u = c = m), (l = h)) : (c = c.next = m),
          (o |= d);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (d = a), (a = d.next), (d.next = null), (i.lastBaseUpdate = d), (i.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (l = h),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (e = i.shared.interleaved),
      e !== null)
    ) {
      i = e;
      do (o |= i.lane), (i = i.next);
      while (i !== e);
    } else s === null && (i.shared.lanes = 0);
    (Qr |= o), (t.lanes = o), (t.memoizedState = h);
  }
}
function dg(t, e, n) {
  if (((t = e.effects), (e.effects = null), t !== null))
    for (e = 0; e < t.length; e++) {
      var r = t[e],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != 'function')) throw Error(k(191, i));
        i.call(r);
      }
    }
}
var Q0 = new qv.Component().refs;
function ad(t, e, n, r) {
  (e = t.memoizedState),
    (n = n(r, e)),
    (n = n == null ? e : ke({}, e, n)),
    (t.memoizedState = n),
    t.lanes === 0 && (t.updateQueue.baseState = n);
}
var lu = {
  isMounted: function (t) {
    return (t = t._reactInternals) ? si(t) === t : !1;
  },
  enqueueSetState: function (t, e, n) {
    t = t._reactInternals;
    var r = yt(),
      i = ar(t),
      s = kn(r, i);
    (s.payload = e),
      n != null && (s.callback = n),
      (e = sr(t, s, i)),
      e !== null && (en(e, t, i, r), La(e, t, i));
  },
  enqueueReplaceState: function (t, e, n) {
    t = t._reactInternals;
    var r = yt(),
      i = ar(t),
      s = kn(r, i);
    (s.tag = 1),
      (s.payload = e),
      n != null && (s.callback = n),
      (e = sr(t, s, i)),
      e !== null && (en(e, t, i, r), La(e, t, i));
  },
  enqueueForceUpdate: function (t, e) {
    t = t._reactInternals;
    var n = yt(),
      r = ar(t),
      i = kn(n, r);
    (i.tag = 2),
      e != null && (i.callback = e),
      (e = sr(t, i, r)),
      e !== null && (en(e, t, r, n), La(e, t, r));
  }
};
function fg(t, e, n, r, i, s, o) {
  return (
    (t = t.stateNode),
    typeof t.shouldComponentUpdate == 'function'
      ? t.shouldComponentUpdate(r, s, o)
      : e.prototype && e.prototype.isPureReactComponent
      ? !so(n, r) || !so(i, s)
      : !0
  );
}
function X0(t, e, n) {
  var r = !1,
    i = mr,
    s = e.contextType;
  return (
    typeof s == 'object' && s !== null
      ? (s = Bt(s))
      : ((i = It(e) ? Wr : ht.current),
        (r = e.contextTypes),
        (s = (r = r != null) ? Ki(t, i) : mr)),
    (e = new e(n, s)),
    (t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
    (e.updater = lu),
    (t.stateNode = e),
    (e._reactInternals = t),
    r &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = i),
      (t.__reactInternalMemoizedMaskedChildContext = s)),
    e
  );
}
function pg(t, e, n, r) {
  (t = e.state),
    typeof e.componentWillReceiveProps == 'function' && e.componentWillReceiveProps(n, r),
    typeof e.UNSAFE_componentWillReceiveProps == 'function' &&
      e.UNSAFE_componentWillReceiveProps(n, r),
    e.state !== t && lu.enqueueReplaceState(e, e.state, null);
}
function ld(t, e, n, r) {
  var i = t.stateNode;
  (i.props = n), (i.state = t.memoizedState), (i.refs = Q0), zf(t);
  var s = e.contextType;
  typeof s == 'object' && s !== null
    ? (i.context = Bt(s))
    : ((s = It(e) ? Wr : ht.current), (i.context = Ki(t, s))),
    (i.state = t.memoizedState),
    (s = e.getDerivedStateFromProps),
    typeof s == 'function' && (ad(t, e, s, n), (i.state = t.memoizedState)),
    typeof e.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' &&
        typeof i.componentWillMount != 'function') ||
      ((e = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' && i.UNSAFE_componentWillMount(),
      e !== i.state && lu.enqueueReplaceState(i, i.state, null),
      fl(t, n, i, r),
      (i.state = t.memoizedState)),
    typeof i.componentDidMount == 'function' && (t.flags |= 4194308);
}
function Ts(t, e, n) {
  if (((t = n.ref), t !== null && typeof t != 'function' && typeof t != 'object')) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, t));
      var i = r,
        s = '' + t;
      return e !== null && e.ref !== null && typeof e.ref == 'function' && e.ref._stringRef === s
        ? e.ref
        : ((e = function (o) {
            var a = i.refs;
            a === Q0 && (a = i.refs = {}), o === null ? delete a[s] : (a[s] = o);
          }),
          (e._stringRef = s),
          e);
    }
    if (typeof t != 'string') throw Error(k(284));
    if (!n._owner) throw Error(k(290, t));
  }
  return t;
}
function ma(t, e) {
  throw (
    ((t = Object.prototype.toString.call(e)),
    Error(
      k(31, t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t)
    ))
  );
}
function mg(t) {
  var e = t._init;
  return e(t._payload);
}
function Y0(t) {
  function e(p, f) {
    if (t) {
      var g = p.deletions;
      g === null ? ((p.deletions = [f]), (p.flags |= 16)) : g.push(f);
    }
  }
  function n(p, f) {
    if (!t) return null;
    for (; f !== null; ) e(p, f), (f = f.sibling);
    return null;
  }
  function r(p, f) {
    for (p = new Map(); f !== null; )
      f.key !== null ? p.set(f.key, f) : p.set(f.index, f), (f = f.sibling);
    return p;
  }
  function i(p, f) {
    return (p = lr(p, f)), (p.index = 0), (p.sibling = null), p;
  }
  function s(p, f, g) {
    return (
      (p.index = g),
      t
        ? ((g = p.alternate),
          g !== null ? ((g = g.index), g < f ? ((p.flags |= 2), f) : g) : ((p.flags |= 2), f))
        : ((p.flags |= 1048576), f)
    );
  }
  function o(p) {
    return t && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, f, g, E) {
    return f === null || f.tag !== 6
      ? ((f = Kc(g, p.mode, E)), (f.return = p), f)
      : ((f = i(f, g)), (f.return = p), f);
  }
  function l(p, f, g, E) {
    var _ = g.type;
    return _ === fi
      ? c(p, f, g.props.children, E, g.key)
      : f !== null &&
        (f.elementType === _ ||
          (typeof _ == 'object' && _ !== null && _.$$typeof === jn && mg(_) === f.type))
      ? ((E = i(f, g.props)), (E.ref = Ts(p, f, g)), (E.return = p), E)
      : ((E = Va(g.type, g.key, g.props, null, p.mode, E)),
        (E.ref = Ts(p, f, g)),
        (E.return = p),
        E);
  }
  function u(p, f, g, E) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== g.containerInfo ||
      f.stateNode.implementation !== g.implementation
      ? ((f = Wc(g, p.mode, E)), (f.return = p), f)
      : ((f = i(f, g.children || [])), (f.return = p), f);
  }
  function c(p, f, g, E, _) {
    return f === null || f.tag !== 7
      ? ((f = Vr(g, p.mode, E, _)), (f.return = p), f)
      : ((f = i(f, g)), (f.return = p), f);
  }
  function h(p, f, g) {
    if ((typeof f == 'string' && f !== '') || typeof f == 'number')
      return (f = Kc('' + f, p.mode, g)), (f.return = p), f;
    if (typeof f == 'object' && f !== null) {
      switch (f.$$typeof) {
        case ia:
          return (
            (g = Va(f.type, f.key, f.props, null, p.mode, g)),
            (g.ref = Ts(p, null, f)),
            (g.return = p),
            g
          );
        case di:
          return (f = Wc(f, p.mode, g)), (f.return = p), f;
        case jn:
          var E = f._init;
          return h(p, E(f._payload), g);
      }
      if (Rs(f) || vs(f)) return (f = Vr(f, p.mode, g, null)), (f.return = p), f;
      ma(p, f);
    }
    return null;
  }
  function d(p, f, g, E) {
    var _ = f !== null ? f.key : null;
    if ((typeof g == 'string' && g !== '') || typeof g == 'number')
      return _ !== null ? null : a(p, f, '' + g, E);
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case ia:
          return g.key === _ ? l(p, f, g, E) : null;
        case di:
          return g.key === _ ? u(p, f, g, E) : null;
        case jn:
          return (_ = g._init), d(p, f, _(g._payload), E);
      }
      if (Rs(g) || vs(g)) return _ !== null ? null : c(p, f, g, E, null);
      ma(p, g);
    }
    return null;
  }
  function m(p, f, g, E, _) {
    if ((typeof E == 'string' && E !== '') || typeof E == 'number')
      return (p = p.get(g) || null), a(f, p, '' + E, _);
    if (typeof E == 'object' && E !== null) {
      switch (E.$$typeof) {
        case ia:
          return (p = p.get(E.key === null ? g : E.key) || null), l(f, p, E, _);
        case di:
          return (p = p.get(E.key === null ? g : E.key) || null), u(f, p, E, _);
        case jn:
          var R = E._init;
          return m(p, f, g, R(E._payload), _);
      }
      if (Rs(E) || vs(E)) return (p = p.get(g) || null), c(f, p, E, _, null);
      ma(f, E);
    }
    return null;
  }
  function y(p, f, g, E) {
    for (var _ = null, R = null, x = f, P = (f = 0), B = null; x !== null && P < g.length; P++) {
      x.index > P ? ((B = x), (x = null)) : (B = x.sibling);
      var b = d(p, x, g[P], E);
      if (b === null) {
        x === null && (x = B);
        break;
      }
      t && x && b.alternate === null && e(p, x),
        (f = s(b, f, P)),
        R === null ? (_ = b) : (R.sibling = b),
        (R = b),
        (x = B);
    }
    if (P === g.length) return n(p, x), Se && Cr(p, P), _;
    if (x === null) {
      for (; P < g.length; P++)
        (x = h(p, g[P], E)),
          x !== null && ((f = s(x, f, P)), R === null ? (_ = x) : (R.sibling = x), (R = x));
      return Se && Cr(p, P), _;
    }
    for (x = r(p, x); P < g.length; P++)
      (B = m(x, p, P, g[P], E)),
        B !== null &&
          (t && B.alternate !== null && x.delete(B.key === null ? P : B.key),
          (f = s(B, f, P)),
          R === null ? (_ = B) : (R.sibling = B),
          (R = B));
    return (
      t &&
        x.forEach(function (te) {
          return e(p, te);
        }),
      Se && Cr(p, P),
      _
    );
  }
  function v(p, f, g, E) {
    var _ = vs(g);
    if (typeof _ != 'function') throw Error(k(150));
    if (((g = _.call(g)), g == null)) throw Error(k(151));
    for (
      var R = (_ = null), x = f, P = (f = 0), B = null, b = g.next();
      x !== null && !b.done;
      P++, b = g.next()
    ) {
      x.index > P ? ((B = x), (x = null)) : (B = x.sibling);
      var te = d(p, x, b.value, E);
      if (te === null) {
        x === null && (x = B);
        break;
      }
      t && x && te.alternate === null && e(p, x),
        (f = s(te, f, P)),
        R === null ? (_ = te) : (R.sibling = te),
        (R = te),
        (x = B);
    }
    if (b.done) return n(p, x), Se && Cr(p, P), _;
    if (x === null) {
      for (; !b.done; P++, b = g.next())
        (b = h(p, b.value, E)),
          b !== null && ((f = s(b, f, P)), R === null ? (_ = b) : (R.sibling = b), (R = b));
      return Se && Cr(p, P), _;
    }
    for (x = r(p, x); !b.done; P++, b = g.next())
      (b = m(x, p, P, b.value, E)),
        b !== null &&
          (t && b.alternate !== null && x.delete(b.key === null ? P : b.key),
          (f = s(b, f, P)),
          R === null ? (_ = b) : (R.sibling = b),
          (R = b));
    return (
      t &&
        x.forEach(function (W) {
          return e(p, W);
        }),
      Se && Cr(p, P),
      _
    );
  }
  function S(p, f, g, E) {
    if (
      (typeof g == 'object' &&
        g !== null &&
        g.type === fi &&
        g.key === null &&
        (g = g.props.children),
      typeof g == 'object' && g !== null)
    ) {
      switch (g.$$typeof) {
        case ia:
          e: {
            for (var _ = g.key, R = f; R !== null; ) {
              if (R.key === _) {
                if (((_ = g.type), _ === fi)) {
                  if (R.tag === 7) {
                    n(p, R.sibling), (f = i(R, g.props.children)), (f.return = p), (p = f);
                    break e;
                  }
                } else if (
                  R.elementType === _ ||
                  (typeof _ == 'object' && _ !== null && _.$$typeof === jn && mg(_) === R.type)
                ) {
                  n(p, R.sibling),
                    (f = i(R, g.props)),
                    (f.ref = Ts(p, R, g)),
                    (f.return = p),
                    (p = f);
                  break e;
                }
                n(p, R);
                break;
              } else e(p, R);
              R = R.sibling;
            }
            g.type === fi
              ? ((f = Vr(g.props.children, p.mode, E, g.key)), (f.return = p), (p = f))
              : ((E = Va(g.type, g.key, g.props, null, p.mode, E)),
                (E.ref = Ts(p, f, g)),
                (E.return = p),
                (p = E));
          }
          return o(p);
        case di:
          e: {
            for (R = g.key; f !== null; ) {
              if (f.key === R)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === g.containerInfo &&
                  f.stateNode.implementation === g.implementation
                ) {
                  n(p, f.sibling), (f = i(f, g.children || [])), (f.return = p), (p = f);
                  break e;
                } else {
                  n(p, f);
                  break;
                }
              else e(p, f);
              f = f.sibling;
            }
            (f = Wc(g, p.mode, E)), (f.return = p), (p = f);
          }
          return o(p);
        case jn:
          return (R = g._init), S(p, f, R(g._payload), E);
      }
      if (Rs(g)) return y(p, f, g, E);
      if (vs(g)) return v(p, f, g, E);
      ma(p, g);
    }
    return (typeof g == 'string' && g !== '') || typeof g == 'number'
      ? ((g = '' + g),
        f !== null && f.tag === 6
          ? (n(p, f.sibling), (f = i(f, g)), (f.return = p), (p = f))
          : (n(p, f), (f = Kc(g, p.mode, E)), (f.return = p), (p = f)),
        o(p))
      : n(p, f);
  }
  return S;
}
var qi = Y0(!0),
  J0 = Y0(!1),
  $o = {},
  cn = Sr($o),
  uo = Sr($o),
  co = Sr($o);
function Or(t) {
  if (t === $o) throw Error(k(174));
  return t;
}
function Bf(t, e) {
  switch ((fe(co, e), fe(uo, t), fe(cn, $o), (t = e.nodeType), t)) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : Vh(null, '');
      break;
    default:
      (t = t === 8 ? e.parentNode : e),
        (e = t.namespaceURI || null),
        (t = t.tagName),
        (e = Vh(e, t));
  }
  me(cn), fe(cn, e);
}
function Gi() {
  me(cn), me(uo), me(co);
}
function Z0(t) {
  Or(co.current);
  var e = Or(cn.current),
    n = Vh(e, t.type);
  e !== n && (fe(uo, t), fe(cn, n));
}
function Hf(t) {
  uo.current === t && (me(cn), me(uo));
}
var Te = Sr(0);
function pl(t) {
  for (var e = t; e !== null; ) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!'))
        return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e;
    } else if (e.child !== null) {
      (e.child.return = e), (e = e.child);
      continue;
    }
    if (e === t) break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === t) return null;
      e = e.return;
    }
    (e.sibling.return = e.return), (e = e.sibling);
  }
  return null;
}
var Uc = [];
function Kf() {
  for (var t = 0; t < Uc.length; t++) Uc[t]._workInProgressVersionPrimary = null;
  Uc.length = 0;
}
var $a = bn.ReactCurrentDispatcher,
  Vc = bn.ReactCurrentBatchConfig,
  Gr = 0,
  Ie = null,
  Ue = null,
  Ke = null,
  ml = !1,
  js = !1,
  ho = 0,
  EI = 0;
function rt() {
  throw Error(k(321));
}
function Wf(t, e) {
  if (e === null) return !1;
  for (var n = 0; n < e.length && n < t.length; n++) if (!tn(t[n], e[n])) return !1;
  return !0;
}
function qf(t, e, n, r, i, s) {
  if (
    ((Gr = s),
    (Ie = e),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.lanes = 0),
    ($a.current = t === null || t.memoizedState === null ? II : kI),
    (t = n(r, i)),
    js)
  ) {
    s = 0;
    do {
      if (((js = !1), (ho = 0), 25 <= s)) throw Error(k(301));
      (s += 1), (Ke = Ue = null), (e.updateQueue = null), ($a.current = CI), (t = n(r, i));
    } while (js);
  }
  if (
    (($a.current = gl),
    (e = Ue !== null && Ue.next !== null),
    (Gr = 0),
    (Ke = Ue = Ie = null),
    (ml = !1),
    e)
  )
    throw Error(k(300));
  return t;
}
function Gf() {
  var t = ho !== 0;
  return (ho = 0), t;
}
function rn() {
  var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Ke === null ? (Ie.memoizedState = Ke = t) : (Ke = Ke.next = t), Ke;
}
function Ht() {
  if (Ue === null) {
    var t = Ie.alternate;
    t = t !== null ? t.memoizedState : null;
  } else t = Ue.next;
  var e = Ke === null ? Ie.memoizedState : Ke.next;
  if (e !== null) (Ke = e), (Ue = t);
  else {
    if (t === null) throw Error(k(310));
    (Ue = t),
      (t = {
        memoizedState: Ue.memoizedState,
        baseState: Ue.baseState,
        baseQueue: Ue.baseQueue,
        queue: Ue.queue,
        next: null
      }),
      Ke === null ? (Ie.memoizedState = Ke = t) : (Ke = Ke.next = t);
  }
  return Ke;
}
function fo(t, e) {
  return typeof e == 'function' ? e(t) : e;
}
function jc(t) {
  var e = Ht(),
    n = e.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = t;
  var r = Ue,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var a = (o = null),
      l = null,
      u = s;
    do {
      var c = u.lane;
      if ((Gr & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null
            }),
          (r = u.hasEagerState ? u.eagerState : t(r, u.action));
      else {
        var h = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? ((a = l = h), (o = r)) : (l = l.next = h), (Ie.lanes |= c), (Qr |= c);
      }
      u = u.next;
    } while (u !== null && u !== s);
    l === null ? (o = r) : (l.next = a),
      tn(r, e.memoizedState) || (_t = !0),
      (e.memoizedState = r),
      (e.baseState = o),
      (e.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((t = n.interleaved), t !== null)) {
    i = t;
    do (s = i.lane), (Ie.lanes |= s), (Qr |= s), (i = i.next);
    while (i !== t);
  } else i === null && (n.lanes = 0);
  return [e.memoizedState, n.dispatch];
}
function zc(t) {
  var e = Ht(),
    n = e.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = t;
  var r = n.dispatch,
    i = n.pending,
    s = e.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (s = t(s, o.action)), (o = o.next);
    while (o !== i);
    tn(s, e.memoizedState) || (_t = !0),
      (e.memoizedState = s),
      e.baseQueue === null && (e.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function ew() {}
function tw(t, e) {
  var n = Ie,
    r = Ht(),
    i = e(),
    s = !tn(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (_t = !0)),
    (r = r.queue),
    Qf(iw.bind(null, n, r, t), [t]),
    r.getSnapshot !== e || s || (Ke !== null && Ke.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), po(9, rw.bind(null, n, r, i, e), void 0, null), We === null))
      throw Error(k(349));
    Gr & 30 || nw(n, e, i);
  }
  return i;
}
function nw(t, e, n) {
  (t.flags |= 16384),
    (t = { getSnapshot: e, value: n }),
    (e = Ie.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }), (Ie.updateQueue = e), (e.stores = [t]))
      : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
}
function rw(t, e, n, r) {
  (e.value = n), (e.getSnapshot = r), sw(e) && ow(t);
}
function iw(t, e, n) {
  return n(function () {
    sw(e) && ow(t);
  });
}
function sw(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !tn(t, n);
  } catch {
    return !0;
  }
}
function ow(t) {
  var e = Nn(t, 1);
  e !== null && en(e, t, 1, -1);
}
function gg(t) {
  var e = rn();
  return (
    typeof t == 'function' && (t = t()),
    (e.memoizedState = e.baseState = t),
    (t = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: fo,
      lastRenderedState: t
    }),
    (e.queue = t),
    (t = t.dispatch = TI.bind(null, Ie, t)),
    [e.memoizedState, t]
  );
}
function po(t, e, n, r) {
  return (
    (t = { tag: t, create: e, destroy: n, deps: r, next: null }),
    (e = Ie.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (Ie.updateQueue = e),
        (e.lastEffect = t.next = t))
      : ((n = e.lastEffect),
        n === null
          ? (e.lastEffect = t.next = t)
          : ((r = n.next), (n.next = t), (t.next = r), (e.lastEffect = t))),
    t
  );
}
function aw() {
  return Ht().memoizedState;
}
function ba(t, e, n, r) {
  var i = rn();
  (Ie.flags |= t), (i.memoizedState = po(1 | e, n, void 0, r === void 0 ? null : r));
}
function uu(t, e, n, r) {
  var i = Ht();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (Ue !== null) {
    var o = Ue.memoizedState;
    if (((s = o.destroy), r !== null && Wf(r, o.deps))) {
      i.memoizedState = po(e, n, s, r);
      return;
    }
  }
  (Ie.flags |= t), (i.memoizedState = po(1 | e, n, s, r));
}
function yg(t, e) {
  return ba(8390656, 8, t, e);
}
function Qf(t, e) {
  return uu(2048, 8, t, e);
}
function lw(t, e) {
  return uu(4, 2, t, e);
}
function uw(t, e) {
  return uu(4, 4, t, e);
}
function cw(t, e) {
  if (typeof e == 'function')
    return (
      (t = t()),
      e(t),
      function () {
        e(null);
      }
    );
  if (e != null)
    return (
      (t = t()),
      (e.current = t),
      function () {
        e.current = null;
      }
    );
}
function hw(t, e, n) {
  return (n = n != null ? n.concat([t]) : null), uu(4, 4, cw.bind(null, e, t), n);
}
function Xf() {}
function dw(t, e) {
  var n = Ht();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && Wf(e, r[1]) ? r[0] : ((n.memoizedState = [t, e]), t);
}
function fw(t, e) {
  var n = Ht();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && Wf(e, r[1])
    ? r[0]
    : ((t = t()), (n.memoizedState = [t, e]), t);
}
function pw(t, e, n) {
  return Gr & 21
    ? (tn(n, e) || ((n = y0()), (Ie.lanes |= n), (Qr |= n), (t.baseState = !0)), e)
    : (t.baseState && ((t.baseState = !1), (_t = !0)), (t.memoizedState = n));
}
function SI(t, e) {
  var n = ce;
  (ce = n !== 0 && 4 > n ? n : 4), t(!0);
  var r = Vc.transition;
  Vc.transition = {};
  try {
    t(!1), e();
  } finally {
    (ce = n), (Vc.transition = r);
  }
}
function mw() {
  return Ht().memoizedState;
}
function _I(t, e, n) {
  var r = ar(t);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), gw(t)))
    yw(e, n);
  else if (((n = q0(t, e, n, r)), n !== null)) {
    var i = yt();
    en(n, t, r, i), vw(n, e, r);
  }
}
function TI(t, e, n) {
  var r = ar(t),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (gw(t)) yw(e, i);
  else {
    var s = t.alternate;
    if (t.lanes === 0 && (s === null || s.lanes === 0) && ((s = e.lastRenderedReducer), s !== null))
      try {
        var o = e.lastRenderedState,
          a = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), tn(a, o))) {
          var l = e.interleaved;
          l === null ? ((i.next = i), jf(e)) : ((i.next = l.next), (l.next = i)),
            (e.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = q0(t, e, i, r)), n !== null && ((i = yt()), en(n, t, r, i), vw(n, e, r));
  }
}
function gw(t) {
  var e = t.alternate;
  return t === Ie || (e !== null && e === Ie);
}
function yw(t, e) {
  js = ml = !0;
  var n = t.pending;
  n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)), (t.pending = e);
}
function vw(t, e, n) {
  if (n & 4194240) {
    var r = e.lanes;
    (r &= t.pendingLanes), (n |= r), (e.lanes = n), Af(t, n);
  }
}
var gl = {
    readContext: Bt,
    useCallback: rt,
    useContext: rt,
    useEffect: rt,
    useImperativeHandle: rt,
    useInsertionEffect: rt,
    useLayoutEffect: rt,
    useMemo: rt,
    useReducer: rt,
    useRef: rt,
    useState: rt,
    useDebugValue: rt,
    useDeferredValue: rt,
    useTransition: rt,
    useMutableSource: rt,
    useSyncExternalStore: rt,
    useId: rt,
    unstable_isNewReconciler: !1
  },
  II = {
    readContext: Bt,
    useCallback: function (t, e) {
      return (rn().memoizedState = [t, e === void 0 ? null : e]), t;
    },
    useContext: Bt,
    useEffect: yg,
    useImperativeHandle: function (t, e, n) {
      return (n = n != null ? n.concat([t]) : null), ba(4194308, 4, cw.bind(null, e, t), n);
    },
    useLayoutEffect: function (t, e) {
      return ba(4194308, 4, t, e);
    },
    useInsertionEffect: function (t, e) {
      return ba(4, 2, t, e);
    },
    useMemo: function (t, e) {
      var n = rn();
      return (e = e === void 0 ? null : e), (t = t()), (n.memoizedState = [t, e]), t;
    },
    useReducer: function (t, e, n) {
      var r = rn();
      return (
        (e = n !== void 0 ? n(e) : e),
        (r.memoizedState = r.baseState = e),
        (t = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: e
        }),
        (r.queue = t),
        (t = t.dispatch = _I.bind(null, Ie, t)),
        [r.memoizedState, t]
      );
    },
    useRef: function (t) {
      var e = rn();
      return (t = { current: t }), (e.memoizedState = t);
    },
    useState: gg,
    useDebugValue: Xf,
    useDeferredValue: function (t) {
      return (rn().memoizedState = t);
    },
    useTransition: function () {
      var t = gg(!1),
        e = t[0];
      return (t = SI.bind(null, t[1])), (rn().memoizedState = t), [e, t];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (t, e, n) {
      var r = Ie,
        i = rn();
      if (Se) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = e()), We === null)) throw Error(k(349));
        Gr & 30 || nw(r, e, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: e };
      return (
        (i.queue = s),
        yg(iw.bind(null, r, s, t), [t]),
        (r.flags |= 2048),
        po(9, rw.bind(null, r, s, n, e), void 0, null),
        n
      );
    },
    useId: function () {
      var t = rn(),
        e = We.identifierPrefix;
      if (Se) {
        var n = Sn,
          r = En;
        (n = (r & ~(1 << (32 - Zt(r) - 1))).toString(32) + n),
          (e = ':' + e + 'R' + n),
          (n = ho++),
          0 < n && (e += 'H' + n.toString(32)),
          (e += ':');
      } else (n = EI++), (e = ':' + e + 'r' + n.toString(32) + ':');
      return (t.memoizedState = e);
    },
    unstable_isNewReconciler: !1
  },
  kI = {
    readContext: Bt,
    useCallback: dw,
    useContext: Bt,
    useEffect: Qf,
    useImperativeHandle: hw,
    useInsertionEffect: lw,
    useLayoutEffect: uw,
    useMemo: fw,
    useReducer: jc,
    useRef: aw,
    useState: function () {
      return jc(fo);
    },
    useDebugValue: Xf,
    useDeferredValue: function (t) {
      var e = Ht();
      return pw(e, Ue.memoizedState, t);
    },
    useTransition: function () {
      var t = jc(fo)[0],
        e = Ht().memoizedState;
      return [t, e];
    },
    useMutableSource: ew,
    useSyncExternalStore: tw,
    useId: mw,
    unstable_isNewReconciler: !1
  },
  CI = {
    readContext: Bt,
    useCallback: dw,
    useContext: Bt,
    useEffect: Qf,
    useImperativeHandle: hw,
    useInsertionEffect: lw,
    useLayoutEffect: uw,
    useMemo: fw,
    useReducer: zc,
    useRef: aw,
    useState: function () {
      return zc(fo);
    },
    useDebugValue: Xf,
    useDeferredValue: function (t) {
      var e = Ht();
      return Ue === null ? (e.memoizedState = t) : pw(e, Ue.memoizedState, t);
    },
    useTransition: function () {
      var t = zc(fo)[0],
        e = Ht().memoizedState;
      return [t, e];
    },
    useMutableSource: ew,
    useSyncExternalStore: tw,
    useId: mw,
    unstable_isNewReconciler: !1
  };
function Qi(t, e) {
  try {
    var n = '',
      r = e;
    do (n += eT(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: t, source: e, stack: i, digest: null };
}
function Bc(t, e, n) {
  return { value: t, source: null, stack: n ?? null, digest: e ?? null };
}
function ud(t, e) {
  try {
    console.error(e.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var AI = typeof WeakMap == 'function' ? WeakMap : Map;
function ww(t, e, n) {
  (n = kn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = e.value;
  return (
    (n.callback = function () {
      vl || ((vl = !0), (wd = r)), ud(t, e);
    }),
    n
  );
}
function Ew(t, e, n) {
  (n = kn(-1, n)), (n.tag = 3);
  var r = t.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var i = e.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        ud(t, e);
      });
  }
  var s = t.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == 'function' &&
      (n.callback = function () {
        ud(t, e), typeof r != 'function' && (or === null ? (or = new Set([this])) : or.add(this));
        var o = e.stack;
        this.componentDidCatch(e.value, { componentStack: o !== null ? o : '' });
      }),
    n
  );
}
function vg(t, e, n) {
  var r = t.pingCache;
  if (r === null) {
    r = t.pingCache = new AI();
    var i = new Set();
    r.set(e, i);
  } else (i = r.get(e)), i === void 0 && ((i = new Set()), r.set(e, i));
  i.has(n) || (i.add(n), (t = jI.bind(null, t, e, n)), e.then(t, t));
}
function wg(t) {
  do {
    var e;
    if (
      ((e = t.tag === 13) && ((e = t.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)),
      e)
    )
      return t;
    t = t.return;
  } while (t !== null);
  return null;
}
function Eg(t, e, n, r, i) {
  return t.mode & 1
    ? ((t.flags |= 65536), (t.lanes = i), t)
    : (t === e
        ? (t.flags |= 65536)
        : ((t.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null ? (n.tag = 17) : ((e = kn(-1, 1)), (e.tag = 2), sr(n, e, 1))),
          (n.lanes |= 1)),
      t);
}
var NI = bn.ReactCurrentOwner,
  _t = !1;
function pt(t, e, n, r) {
  e.child = t === null ? J0(e, null, n, r) : qi(e, t.child, n, r);
}
function Sg(t, e, n, r, i) {
  n = n.render;
  var s = e.ref;
  return (
    Di(e, i),
    (r = qf(t, e, n, r, s, i)),
    (n = Gf()),
    t !== null && !_t
      ? ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~i), Rn(t, e, i))
      : (Se && n && $f(e), (e.flags |= 1), pt(t, e, r, i), e.child)
  );
}
function _g(t, e, n, r, i) {
  if (t === null) {
    var s = n.type;
    return typeof s == 'function' &&
      !ip(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((e.tag = 15), (e.type = s), Sw(t, e, s, r, i))
      : ((t = Va(n.type, null, r, e, e.mode, i)), (t.ref = e.ref), (t.return = e), (e.child = t));
  }
  if (((s = t.child), !(t.lanes & i))) {
    var o = s.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : so), n(o, r) && t.ref === e.ref))
      return Rn(t, e, i);
  }
  return (e.flags |= 1), (t = lr(s, r)), (t.ref = e.ref), (t.return = e), (e.child = t);
}
function Sw(t, e, n, r, i) {
  if (t !== null) {
    var s = t.memoizedProps;
    if (so(s, r) && t.ref === e.ref)
      if (((_t = !1), (e.pendingProps = r = s), (t.lanes & i) !== 0)) t.flags & 131072 && (_t = !0);
      else return (e.lanes = t.lanes), Rn(t, e, i);
  }
  return cd(t, e, n, r, i);
}
function _w(t, e, n) {
  var r = e.pendingProps,
    i = r.children,
    s = t !== null ? t.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(e.mode & 1))
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        fe(Ti, Nt),
        (Nt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (t = s !== null ? s.baseLanes | n : n),
          (e.lanes = e.childLanes = 1073741824),
          (e.memoizedState = { baseLanes: t, cachePool: null, transitions: null }),
          (e.updateQueue = null),
          fe(Ti, Nt),
          (Nt |= t),
          null
        );
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        fe(Ti, Nt),
        (Nt |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (e.memoizedState = null)) : (r = n), fe(Ti, Nt), (Nt |= r);
  return pt(t, e, i, n), e.child;
}
function Tw(t, e) {
  var n = e.ref;
  ((t === null && n !== null) || (t !== null && t.ref !== n)) &&
    ((e.flags |= 512), (e.flags |= 2097152));
}
function cd(t, e, n, r, i) {
  var s = It(n) ? Wr : ht.current;
  return (
    (s = Ki(e, s)),
    Di(e, i),
    (n = qf(t, e, n, r, s, i)),
    (r = Gf()),
    t !== null && !_t
      ? ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~i), Rn(t, e, i))
      : (Se && r && $f(e), (e.flags |= 1), pt(t, e, n, i), e.child)
  );
}
function Tg(t, e, n, r, i) {
  if (It(n)) {
    var s = !0;
    ll(e);
  } else s = !1;
  if ((Di(e, i), e.stateNode === null)) Ma(t, e), X0(e, n, r), ld(e, n, r, i), (r = !0);
  else if (t === null) {
    var o = e.stateNode,
      a = e.memoizedProps;
    o.props = a;
    var l = o.context,
      u = n.contextType;
    typeof u == 'object' && u !== null
      ? (u = Bt(u))
      : ((u = It(n) ? Wr : ht.current), (u = Ki(e, u)));
    var c = n.getDerivedStateFromProps,
      h = typeof c == 'function' || typeof o.getSnapshotBeforeUpdate == 'function';
    h ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((a !== r || l !== u) && pg(e, o, r, u)),
      (zn = !1);
    var d = e.memoizedState;
    (o.state = d),
      fl(e, r, o, i),
      (l = e.memoizedState),
      a !== r || d !== l || Tt.current || zn
        ? (typeof c == 'function' && (ad(e, n, c, r), (l = e.memoizedState)),
          (a = zn || fg(e, n, a, r, d, l, u))
            ? (h ||
                (typeof o.UNSAFE_componentWillMount != 'function' &&
                  typeof o.componentWillMount != 'function') ||
                (typeof o.componentWillMount == 'function' && o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == 'function' && (e.flags |= 4194308))
            : (typeof o.componentDidMount == 'function' && (e.flags |= 4194308),
              (e.memoizedProps = r),
              (e.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = u),
          (r = a))
        : (typeof o.componentDidMount == 'function' && (e.flags |= 4194308), (r = !1));
  } else {
    (o = e.stateNode),
      G0(t, e),
      (a = e.memoizedProps),
      (u = e.type === e.elementType ? a : Gt(e.type, a)),
      (o.props = u),
      (h = e.pendingProps),
      (d = o.context),
      (l = n.contextType),
      typeof l == 'object' && l !== null
        ? (l = Bt(l))
        : ((l = It(n) ? Wr : ht.current), (l = Ki(e, l)));
    var m = n.getDerivedStateFromProps;
    (c = typeof m == 'function' || typeof o.getSnapshotBeforeUpdate == 'function') ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((a !== h || d !== l) && pg(e, o, r, l)),
      (zn = !1),
      (d = e.memoizedState),
      (o.state = d),
      fl(e, r, o, i);
    var y = e.memoizedState;
    a !== h || d !== y || Tt.current || zn
      ? (typeof m == 'function' && (ad(e, n, m, r), (y = e.memoizedState)),
        (u = zn || fg(e, n, u, r, d, y, l) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != 'function' &&
                typeof o.componentWillUpdate != 'function') ||
              (typeof o.componentWillUpdate == 'function' && o.componentWillUpdate(r, y, l),
              typeof o.UNSAFE_componentWillUpdate == 'function' &&
                o.UNSAFE_componentWillUpdate(r, y, l)),
            typeof o.componentDidUpdate == 'function' && (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == 'function' && (e.flags |= 1024))
          : (typeof o.componentDidUpdate != 'function' ||
              (a === t.memoizedProps && d === t.memoizedState) ||
              (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != 'function' ||
              (a === t.memoizedProps && d === t.memoizedState) ||
              (e.flags |= 1024),
            (e.memoizedProps = r),
            (e.memoizedState = y)),
        (o.props = r),
        (o.state = y),
        (o.context = l),
        (r = u))
      : (typeof o.componentDidUpdate != 'function' ||
          (a === t.memoizedProps && d === t.memoizedState) ||
          (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != 'function' ||
          (a === t.memoizedProps && d === t.memoizedState) ||
          (e.flags |= 1024),
        (r = !1));
  }
  return hd(t, e, n, r, s, i);
}
function hd(t, e, n, r, i, s) {
  Tw(t, e);
  var o = (e.flags & 128) !== 0;
  if (!r && !o) return i && lg(e, n, !1), Rn(t, e, s);
  (r = e.stateNode), (NI.current = e);
  var a = o && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (e.flags |= 1),
    t !== null && o
      ? ((e.child = qi(e, t.child, null, s)), (e.child = qi(e, null, a, s)))
      : pt(t, e, a, s),
    (e.memoizedState = r.state),
    i && lg(e, n, !0),
    e.child
  );
}
function Iw(t) {
  var e = t.stateNode;
  e.pendingContext
    ? ag(t, e.pendingContext, e.pendingContext !== e.context)
    : e.context && ag(t, e.context, !1),
    Bf(t, e.containerInfo);
}
function Ig(t, e, n, r, i) {
  return Wi(), Mf(i), (e.flags |= 256), pt(t, e, n, r), e.child;
}
var dd = { dehydrated: null, treeContext: null, retryLane: 0 };
function fd(t) {
  return { baseLanes: t, cachePool: null, transitions: null };
}
function kw(t, e, n) {
  var r = e.pendingProps,
    i = Te.current,
    s = !1,
    o = (e.flags & 128) !== 0,
    a;
  if (
    ((a = o) || (a = t !== null && t.memoizedState === null ? !1 : (i & 2) !== 0),
    a ? ((s = !0), (e.flags &= -129)) : (t === null || t.memoizedState !== null) && (i |= 1),
    fe(Te, i & 1),
    t === null)
  )
    return (
      sd(e),
      (t = e.memoizedState),
      t !== null && ((t = t.dehydrated), t !== null)
        ? (e.mode & 1 ? (t.data === '$!' ? (e.lanes = 8) : (e.lanes = 1073741824)) : (e.lanes = 1),
          null)
        : ((o = r.children),
          (t = r.fallback),
          s
            ? ((r = e.mode),
              (s = e.child),
              (o = { mode: 'hidden', children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = du(o, r, 0, null)),
              (t = Vr(t, r, n, null)),
              (s.return = e),
              (t.return = e),
              (s.sibling = t),
              (e.child = s),
              (e.child.memoizedState = fd(n)),
              (e.memoizedState = dd),
              t)
            : Yf(e, o))
    );
  if (((i = t.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return RI(t, e, o, r, a, i, n);
  if (s) {
    (s = r.fallback), (o = e.mode), (i = t.child), (a = i.sibling);
    var l = { mode: 'hidden', children: r.children };
    return (
      !(o & 1) && e.child !== i
        ? ((r = e.child), (r.childLanes = 0), (r.pendingProps = l), (e.deletions = null))
        : ((r = lr(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (s = lr(a, s)) : ((s = Vr(s, o, n, null)), (s.flags |= 2)),
      (s.return = e),
      (r.return = e),
      (r.sibling = s),
      (e.child = r),
      (r = s),
      (s = e.child),
      (o = t.child.memoizedState),
      (o =
        o === null
          ? fd(n)
          : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }),
      (s.memoizedState = o),
      (s.childLanes = t.childLanes & ~n),
      (e.memoizedState = dd),
      r
    );
  }
  return (
    (s = t.child),
    (t = s.sibling),
    (r = lr(s, { mode: 'visible', children: r.children })),
    !(e.mode & 1) && (r.lanes = n),
    (r.return = e),
    (r.sibling = null),
    t !== null &&
      ((n = e.deletions), n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t)),
    (e.child = r),
    (e.memoizedState = null),
    r
  );
}
function Yf(t, e) {
  return (e = du({ mode: 'visible', children: e }, t.mode, 0, null)), (e.return = t), (t.child = e);
}
function ga(t, e, n, r) {
  return (
    r !== null && Mf(r),
    qi(e, t.child, null, n),
    (t = Yf(e, e.pendingProps.children)),
    (t.flags |= 2),
    (e.memoizedState = null),
    t
  );
}
function RI(t, e, n, r, i, s, o) {
  if (n)
    return e.flags & 256
      ? ((e.flags &= -257), (r = Bc(Error(k(422)))), ga(t, e, o, r))
      : e.memoizedState !== null
      ? ((e.child = t.child), (e.flags |= 128), null)
      : ((s = r.fallback),
        (i = e.mode),
        (r = du({ mode: 'visible', children: r.children }, i, 0, null)),
        (s = Vr(s, i, o, null)),
        (s.flags |= 2),
        (r.return = e),
        (s.return = e),
        (r.sibling = s),
        (e.child = r),
        e.mode & 1 && qi(e, t.child, null, o),
        (e.child.memoizedState = fd(o)),
        (e.memoizedState = dd),
        s);
  if (!(e.mode & 1)) return ga(t, e, o, null);
  if (i.data === '$!') {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (s = Error(k(419))), (r = Bc(s, r, void 0)), ga(t, e, o, r);
  }
  if (((a = (o & t.childLanes) !== 0), _t || a)) {
    if (((r = We), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 && i !== s.retryLane && ((s.retryLane = i), Nn(t, i), en(r, t, i, -1));
    }
    return rp(), (r = Bc(Error(k(421)))), ga(t, e, o, r);
  }
  return i.data === '$?'
    ? ((e.flags |= 128), (e.child = t.child), (e = zI.bind(null, t)), (i._reactRetry = e), null)
    : ((t = s.treeContext),
      (Rt = ir(i.nextSibling)),
      (Dt = e),
      (Se = !0),
      (Xt = null),
      t !== null &&
        ((Ut[Vt++] = En),
        (Ut[Vt++] = Sn),
        (Ut[Vt++] = qr),
        (En = t.id),
        (Sn = t.overflow),
        (qr = e)),
      (e = Yf(e, r.children)),
      (e.flags |= 4096),
      e);
}
function kg(t, e, n) {
  t.lanes |= e;
  var r = t.alternate;
  r !== null && (r.lanes |= e), od(t.return, e, n);
}
function Hc(t, e, n, r, i) {
  var s = t.memoizedState;
  s === null
    ? (t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
      })
    : ((s.isBackwards = e),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function Cw(t, e, n) {
  var r = e.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((pt(t, e, r.children, n), (r = Te.current), r & 2)) (r = (r & 1) | 2), (e.flags |= 128);
  else {
    if (t !== null && t.flags & 128)
      e: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && kg(t, n, e);
        else if (t.tag === 19) kg(t, n, e);
        else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break e;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break e;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    r &= 1;
  }
  if ((fe(Te, r), !(e.mode & 1))) e.memoizedState = null;
  else
    switch (i) {
      case 'forwards':
        for (n = e.child, i = null; n !== null; )
          (t = n.alternate), t !== null && pl(t) === null && (i = n), (n = n.sibling);
        (n = i),
          n === null ? ((i = e.child), (e.child = null)) : ((i = n.sibling), (n.sibling = null)),
          Hc(e, !1, i, n, s);
        break;
      case 'backwards':
        for (n = null, i = e.child, e.child = null; i !== null; ) {
          if (((t = i.alternate), t !== null && pl(t) === null)) {
            e.child = i;
            break;
          }
          (t = i.sibling), (i.sibling = n), (n = i), (i = t);
        }
        Hc(e, !0, n, null, s);
        break;
      case 'together':
        Hc(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  return e.child;
}
function Ma(t, e) {
  !(e.mode & 1) && t !== null && ((t.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function Rn(t, e, n) {
  if ((t !== null && (e.dependencies = t.dependencies), (Qr |= e.lanes), !(n & e.childLanes)))
    return null;
  if (t !== null && e.child !== t.child) throw Error(k(153));
  if (e.child !== null) {
    for (t = e.child, n = lr(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; )
      (t = t.sibling), (n = n.sibling = lr(t, t.pendingProps)), (n.return = e);
    n.sibling = null;
  }
  return e.child;
}
function xI(t, e, n) {
  switch (e.tag) {
    case 3:
      Iw(e), Wi();
      break;
    case 5:
      Z0(e);
      break;
    case 1:
      It(e.type) && ll(e);
      break;
    case 4:
      Bf(e, e.stateNode.containerInfo);
      break;
    case 10:
      var r = e.type._context,
        i = e.memoizedProps.value;
      fe(hl, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = e.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (fe(Te, Te.current & 1), (e.flags |= 128), null)
          : n & e.child.childLanes
          ? kw(t, e, n)
          : (fe(Te, Te.current & 1), (t = Rn(t, e, n)), t !== null ? t.sibling : null);
      fe(Te, Te.current & 1);
      break;
    case 19:
      if (((r = (n & e.childLanes) !== 0), t.flags & 128)) {
        if (r) return Cw(t, e, n);
        e.flags |= 128;
      }
      if (
        ((i = e.memoizedState),
        i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        fe(Te, Te.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (e.lanes = 0), _w(t, e, n);
  }
  return Rn(t, e, n);
}
var Aw, pd, Nw, Rw;
Aw = function (t, e) {
  for (var n = e.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
pd = function () {};
Nw = function (t, e, n, r) {
  var i = t.memoizedProps;
  if (i !== r) {
    (t = e.stateNode), Or(cn.current);
    var s = null;
    switch (n) {
      case 'input':
        (i = bh(t, i)), (r = bh(t, r)), (s = []);
        break;
      case 'select':
        (i = ke({}, i, { value: void 0 })), (r = ke({}, r, { value: void 0 })), (s = []);
        break;
      case 'textarea':
        (i = Uh(t, i)), (r = Uh(t, r)), (s = []);
        break;
      default:
        typeof i.onClick != 'function' && typeof r.onClick == 'function' && (t.onclick = ol);
    }
    jh(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === 'style') {
          var a = i[u];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (Js.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === 'style')
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) || (l && l.hasOwnProperty(o)) || (n || (n = {}), (n[o] = ''));
            for (o in l) l.hasOwnProperty(o) && a[o] !== l[o] && (n || (n = {}), (n[o] = l[o]));
          } else n || (s || (s = []), s.push(u, n)), (n = l);
        else
          u === 'dangerouslySetInnerHTML'
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (s = s || []).push(u, l))
            : u === 'children'
            ? (typeof l != 'string' && typeof l != 'number') || (s = s || []).push(u, '' + l)
            : u !== 'suppressContentEditableWarning' &&
              u !== 'suppressHydrationWarning' &&
              (Js.hasOwnProperty(u)
                ? (l != null && u === 'onScroll' && pe('scroll', t), s || a === l || (s = []))
                : (s = s || []).push(u, l));
    }
    n && (s = s || []).push('style', n);
    var u = s;
    (e.updateQueue = u) && (e.flags |= 4);
  }
};
Rw = function (t, e, n, r) {
  n !== r && (e.flags |= 4);
};
function Is(t, e) {
  if (!Se)
    switch (t.tailMode) {
      case 'hidden':
        e = t.tail;
        for (var n = null; e !== null; ) e.alternate !== null && (n = e), (e = e.sibling);
        n === null ? (t.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = t.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? e || t.tail === null
            ? (t.tail = null)
            : (t.tail.sibling = null)
          : (r.sibling = null);
    }
}
function it(t) {
  var e = t.alternate !== null && t.alternate.child === t.child,
    n = 0,
    r = 0;
  if (e)
    for (var i = t.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = t),
        (i = i.sibling);
  else
    for (i = t.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = t),
        (i = i.sibling);
  return (t.subtreeFlags |= r), (t.childLanes = n), e;
}
function DI(t, e, n) {
  var r = e.pendingProps;
  switch ((bf(e), e.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return it(e), null;
    case 1:
      return It(e.type) && al(), it(e), null;
    case 3:
      return (
        (r = e.stateNode),
        Gi(),
        me(Tt),
        me(ht),
        Kf(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (t === null || t.child === null) &&
          (pa(e)
            ? (e.flags |= 4)
            : t === null ||
              (t.memoizedState.isDehydrated && !(e.flags & 256)) ||
              ((e.flags |= 1024), Xt !== null && (_d(Xt), (Xt = null)))),
        pd(t, e),
        it(e),
        null
      );
    case 5:
      Hf(e);
      var i = Or(co.current);
      if (((n = e.type), t !== null && e.stateNode != null))
        Nw(t, e, n, r, i), t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
      else {
        if (!r) {
          if (e.stateNode === null) throw Error(k(166));
          return it(e), null;
        }
        if (((t = Or(cn.current)), pa(e))) {
          (r = e.stateNode), (n = e.type);
          var s = e.memoizedProps;
          switch (((r[sn] = e), (r[lo] = s), (t = (e.mode & 1) !== 0), n)) {
            case 'dialog':
              pe('cancel', r), pe('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              pe('load', r);
              break;
            case 'video':
            case 'audio':
              for (i = 0; i < Ds.length; i++) pe(Ds[i], r);
              break;
            case 'source':
              pe('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              pe('error', r), pe('load', r);
              break;
            case 'details':
              pe('toggle', r);
              break;
            case 'input':
              Lm(r, s), pe('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!s.multiple }), pe('invalid', r);
              break;
            case 'textarea':
              bm(r, s), pe('invalid', r);
          }
          jh(n, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === 'children'
                ? typeof a == 'string'
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 && fa(r.textContent, a, t),
                    (i = ['children', a]))
                  : typeof a == 'number' &&
                    r.textContent !== '' + a &&
                    (s.suppressHydrationWarning !== !0 && fa(r.textContent, a, t),
                    (i = ['children', '' + a]))
                : Js.hasOwnProperty(o) && a != null && o === 'onScroll' && pe('scroll', r);
            }
          switch (n) {
            case 'input':
              sa(r), $m(r, s, !0);
              break;
            case 'textarea':
              sa(r), Mm(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof s.onClick == 'function' && (r.onclick = ol);
          }
          (r = i), (e.updateQueue = r), r !== null && (e.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            t === 'http://www.w3.org/1999/xhtml' && (t = n0(n)),
            t === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((t = o.createElement('div')),
                  (t.innerHTML = '<script></script>'),
                  (t = t.removeChild(t.firstChild)))
                : typeof r.is == 'string'
                ? (t = o.createElement(n, { is: r.is }))
                : ((t = o.createElement(n)),
                  n === 'select' &&
                    ((o = t), r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size)))
              : (t = o.createElementNS(t, n)),
            (t[sn] = e),
            (t[lo] = r),
            Aw(t, e, !1, !1),
            (e.stateNode = t);
          e: {
            switch (((o = zh(n, r)), n)) {
              case 'dialog':
                pe('cancel', t), pe('close', t), (i = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                pe('load', t), (i = r);
                break;
              case 'video':
              case 'audio':
                for (i = 0; i < Ds.length; i++) pe(Ds[i], t);
                i = r;
                break;
              case 'source':
                pe('error', t), (i = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                pe('error', t), pe('load', t), (i = r);
                break;
              case 'details':
                pe('toggle', t), (i = r);
                break;
              case 'input':
                Lm(t, r), (i = bh(t, r)), pe('invalid', t);
                break;
              case 'option':
                i = r;
                break;
              case 'select':
                (t._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = ke({}, r, { value: void 0 })),
                  pe('invalid', t);
                break;
              case 'textarea':
                bm(t, r), (i = Uh(t, r)), pe('invalid', t);
                break;
              default:
                i = r;
            }
            jh(n, i), (a = i);
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var l = a[s];
                s === 'style'
                  ? s0(t, l)
                  : s === 'dangerouslySetInnerHTML'
                  ? ((l = l ? l.__html : void 0), l != null && r0(t, l))
                  : s === 'children'
                  ? typeof l == 'string'
                    ? (n !== 'textarea' || l !== '') && Zs(t, l)
                    : typeof l == 'number' && Zs(t, '' + l)
                  : s !== 'suppressContentEditableWarning' &&
                    s !== 'suppressHydrationWarning' &&
                    s !== 'autoFocus' &&
                    (Js.hasOwnProperty(s)
                      ? l != null && s === 'onScroll' && pe('scroll', t)
                      : l != null && Sf(t, s, l, o));
              }
            switch (n) {
              case 'input':
                sa(t), $m(t, r, !1);
                break;
              case 'textarea':
                sa(t), Mm(t);
                break;
              case 'option':
                r.value != null && t.setAttribute('value', '' + pr(r.value));
                break;
              case 'select':
                (t.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Ai(t, !!r.multiple, s, !1)
                    : r.defaultValue != null && Ai(t, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == 'function' && (t.onclick = ol);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (e.flags |= 4);
        }
        e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152));
      }
      return it(e), null;
    case 6:
      if (t && e.stateNode != null) Rw(t, e, t.memoizedProps, r);
      else {
        if (typeof r != 'string' && e.stateNode === null) throw Error(k(166));
        if (((n = Or(co.current)), Or(cn.current), pa(e))) {
          if (
            ((r = e.stateNode),
            (n = e.memoizedProps),
            (r[sn] = e),
            (s = r.nodeValue !== n) && ((t = Dt), t !== null))
          )
            switch (t.tag) {
              case 3:
                fa(r.nodeValue, n, (t.mode & 1) !== 0);
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 &&
                  fa(r.nodeValue, n, (t.mode & 1) !== 0);
            }
          s && (e.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[sn] = e),
            (e.stateNode = r);
      }
      return it(e), null;
    case 13:
      if (
        (me(Te),
        (r = e.memoizedState),
        t === null || (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
      ) {
        if (Se && Rt !== null && e.mode & 1 && !(e.flags & 128))
          W0(), Wi(), (e.flags |= 98560), (s = !1);
        else if (((s = pa(e)), r !== null && r.dehydrated !== null)) {
          if (t === null) {
            if (!s) throw Error(k(318));
            if (((s = e.memoizedState), (s = s !== null ? s.dehydrated : null), !s))
              throw Error(k(317));
            s[sn] = e;
          } else Wi(), !(e.flags & 128) && (e.memoizedState = null), (e.flags |= 4);
          it(e), (s = !1);
        } else Xt !== null && (_d(Xt), (Xt = null)), (s = !0);
        if (!s) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128
        ? ((e.lanes = n), e)
        : ((r = r !== null),
          r !== (t !== null && t.memoizedState !== null) &&
            r &&
            ((e.child.flags |= 8192),
            e.mode & 1 && (t === null || Te.current & 1 ? je === 0 && (je = 3) : rp())),
          e.updateQueue !== null && (e.flags |= 4),
          it(e),
          null);
    case 4:
      return Gi(), pd(t, e), t === null && oo(e.stateNode.containerInfo), it(e), null;
    case 10:
      return Vf(e.type._context), it(e), null;
    case 17:
      return It(e.type) && al(), it(e), null;
    case 19:
      if ((me(Te), (s = e.memoizedState), s === null)) return it(e), null;
      if (((r = (e.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) Is(s, !1);
        else {
          if (je !== 0 || (t !== null && t.flags & 128))
            for (t = e.child; t !== null; ) {
              if (((o = pl(t)), o !== null)) {
                for (
                  e.flags |= 128,
                    Is(s, !1),
                    r = o.updateQueue,
                    r !== null && ((e.updateQueue = r), (e.flags |= 4)),
                    e.subtreeFlags = 0,
                    r = n,
                    n = e.child;
                  n !== null;

                )
                  (s = n),
                    (t = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = t),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (t = o.dependencies),
                        (s.dependencies =
                          t === null ? null : { lanes: t.lanes, firstContext: t.firstContext })),
                    (n = n.sibling);
                return fe(Te, (Te.current & 1) | 2), e.child;
              }
              t = t.sibling;
            }
          s.tail !== null &&
            Pe() > Xi &&
            ((e.flags |= 128), (r = !0), Is(s, !1), (e.lanes = 4194304));
        }
      else {
        if (!r)
          if (((t = pl(o)), t !== null)) {
            if (
              ((e.flags |= 128),
              (r = !0),
              (n = t.updateQueue),
              n !== null && ((e.updateQueue = n), (e.flags |= 4)),
              Is(s, !0),
              s.tail === null && s.tailMode === 'hidden' && !o.alternate && !Se)
            )
              return it(e), null;
          } else
            2 * Pe() - s.renderingStartTime > Xi &&
              n !== 1073741824 &&
              ((e.flags |= 128), (r = !0), Is(s, !1), (e.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = e.child), (e.child = o))
          : ((n = s.last), n !== null ? (n.sibling = o) : (e.child = o), (s.last = o));
      }
      return s.tail !== null
        ? ((e = s.tail),
          (s.rendering = e),
          (s.tail = e.sibling),
          (s.renderingStartTime = Pe()),
          (e.sibling = null),
          (n = Te.current),
          fe(Te, r ? (n & 1) | 2 : n & 1),
          e)
        : (it(e), null);
    case 22:
    case 23:
      return (
        np(),
        (r = e.memoizedState !== null),
        t !== null && (t.memoizedState !== null) !== r && (e.flags |= 8192),
        r && e.mode & 1
          ? Nt & 1073741824 && (it(e), e.subtreeFlags & 6 && (e.flags |= 8192))
          : it(e),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, e.tag));
}
function PI(t, e) {
  switch ((bf(e), e.tag)) {
    case 1:
      return (
        It(e.type) && al(), (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 3:
      return (
        Gi(),
        me(Tt),
        me(ht),
        Kf(),
        (t = e.flags),
        t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 5:
      return Hf(e), null;
    case 13:
      if ((me(Te), (t = e.memoizedState), t !== null && t.dehydrated !== null)) {
        if (e.alternate === null) throw Error(k(340));
        Wi();
      }
      return (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null;
    case 19:
      return me(Te), null;
    case 4:
      return Gi(), null;
    case 10:
      return Vf(e.type._context), null;
    case 22:
    case 23:
      return np(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ya = !1,
  at = !1,
  OI = typeof WeakSet == 'function' ? WeakSet : Set,
  $ = null;
function _i(t, e) {
  var n = t.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        Ae(t, e, r);
      }
    else n.current = null;
}
function md(t, e, n) {
  try {
    n();
  } catch (r) {
    Ae(t, e, r);
  }
}
var Cg = !1;
function LI(t, e) {
  if (((Jh = rl), (t = O0()), Lf(t))) {
    if ('selectionStart' in t) var n = { start: t.selectionStart, end: t.selectionEnd };
    else
      e: {
        n = ((n = t.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            h = t,
            d = null;
          t: for (;;) {
            for (
              var m;
              h !== n || (i !== 0 && h.nodeType !== 3) || (a = o + i),
                h !== s || (r !== 0 && h.nodeType !== 3) || (l = o + r),
                h.nodeType === 3 && (o += h.nodeValue.length),
                (m = h.firstChild) !== null;

            )
              (d = h), (h = m);
            for (;;) {
              if (h === t) break t;
              if (
                (d === n && ++u === i && (a = o),
                d === s && ++c === r && (l = o),
                (m = h.nextSibling) !== null)
              )
                break;
              (h = d), (d = h.parentNode);
            }
            h = m;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Zh = { focusedElem: t, selectionRange: n }, rl = !1, $ = e; $ !== null; )
    if (((e = $), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
      (t.return = e), ($ = t);
    else
      for (; $ !== null; ) {
        e = $;
        try {
          var y = e.alternate;
          if (e.flags & 1024)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var v = y.memoizedProps,
                    S = y.memoizedState,
                    p = e.stateNode,
                    f = p.getSnapshotBeforeUpdate(e.elementType === e.type ? v : Gt(e.type, v), S);
                  p.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var g = e.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = '')
                  : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (E) {
          Ae(e, e.return, E);
        }
        if (((t = e.sibling), t !== null)) {
          (t.return = e.return), ($ = t);
          break;
        }
        $ = e.return;
      }
  return (y = Cg), (Cg = !1), y;
}
function zs(t, e, n) {
  var r = e.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & t) === t) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && md(e, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function cu(t, e) {
  if (((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)) {
    var n = (e = e.next);
    do {
      if ((n.tag & t) === t) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== e);
  }
}
function gd(t) {
  var e = t.ref;
  if (e !== null) {
    var n = t.stateNode;
    switch (t.tag) {
      case 5:
        t = n;
        break;
      default:
        t = n;
    }
    typeof e == 'function' ? e(t) : (e.current = t);
  }
}
function xw(t) {
  var e = t.alternate;
  e !== null && ((t.alternate = null), xw(e)),
    (t.child = null),
    (t.deletions = null),
    (t.sibling = null),
    t.tag === 5 &&
      ((e = t.stateNode),
      e !== null && (delete e[sn], delete e[lo], delete e[nd], delete e[gI], delete e[yI])),
    (t.stateNode = null),
    (t.return = null),
    (t.dependencies = null),
    (t.memoizedProps = null),
    (t.memoizedState = null),
    (t.pendingProps = null),
    (t.stateNode = null),
    (t.updateQueue = null);
}
function Dw(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function Ag(t) {
  e: for (;;) {
    for (; t.sibling === null; ) {
      if (t.return === null || Dw(t.return)) return null;
      t = t.return;
    }
    for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
      if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
      (t.child.return = t), (t = t.child);
    }
    if (!(t.flags & 2)) return t.stateNode;
  }
}
function yd(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
    (t = t.stateNode),
      e
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(t, e)
          : n.insertBefore(t, e)
        : (n.nodeType === 8
            ? ((e = n.parentNode), e.insertBefore(t, n))
            : ((e = n), e.appendChild(t)),
          (n = n._reactRootContainer),
          n != null || e.onclick !== null || (e.onclick = ol));
  else if (r !== 4 && ((t = t.child), t !== null))
    for (yd(t, e, n), t = t.sibling; t !== null; ) yd(t, e, n), (t = t.sibling);
}
function vd(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6) (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
  else if (r !== 4 && ((t = t.child), t !== null))
    for (vd(t, e, n), t = t.sibling; t !== null; ) vd(t, e, n), (t = t.sibling);
}
var Xe = null,
  Qt = !1;
function Un(t, e, n) {
  for (n = n.child; n !== null; ) Pw(t, e, n), (n = n.sibling);
}
function Pw(t, e, n) {
  if (un && typeof un.onCommitFiberUnmount == 'function')
    try {
      un.onCommitFiberUnmount(nu, n);
    } catch {}
  switch (n.tag) {
    case 5:
      at || _i(n, e);
    case 6:
      var r = Xe,
        i = Qt;
      (Xe = null),
        Un(t, e, n),
        (Xe = r),
        (Qt = i),
        Xe !== null &&
          (Qt
            ? ((t = Xe),
              (n = n.stateNode),
              t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n))
            : Xe.removeChild(n.stateNode));
      break;
    case 18:
      Xe !== null &&
        (Qt
          ? ((t = Xe),
            (n = n.stateNode),
            t.nodeType === 8 ? Mc(t.parentNode, n) : t.nodeType === 1 && Mc(t, n),
            ro(t))
          : Mc(Xe, n.stateNode));
      break;
    case 4:
      (r = Xe),
        (i = Qt),
        (Xe = n.stateNode.containerInfo),
        (Qt = !0),
        Un(t, e, n),
        (Xe = r),
        (Qt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!at && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag), o !== void 0 && (s & 2 || s & 4) && md(n, e, o), (i = i.next);
        } while (i !== r);
      }
      Un(t, e, n);
      break;
    case 1:
      if (!at && (_i(n, e), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
        try {
          (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
        } catch (a) {
          Ae(n, e, a);
        }
      Un(t, e, n);
      break;
    case 21:
      Un(t, e, n);
      break;
    case 22:
      n.mode & 1
        ? ((at = (r = at) || n.memoizedState !== null), Un(t, e, n), (at = r))
        : Un(t, e, n);
      break;
    default:
      Un(t, e, n);
  }
}
function Ng(t) {
  var e = t.updateQueue;
  if (e !== null) {
    t.updateQueue = null;
    var n = t.stateNode;
    n === null && (n = t.stateNode = new OI()),
      e.forEach(function (r) {
        var i = BI.bind(null, t, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function qt(t, e) {
  var n = e.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = t,
          o = e,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Xe = a.stateNode), (Qt = !1);
              break e;
            case 3:
              (Xe = a.stateNode.containerInfo), (Qt = !0);
              break e;
            case 4:
              (Xe = a.stateNode.containerInfo), (Qt = !0);
              break e;
          }
          a = a.return;
        }
        if (Xe === null) throw Error(k(160));
        Pw(s, o, i), (Xe = null), (Qt = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        Ae(i, e, u);
      }
    }
  if (e.subtreeFlags & 12854) for (e = e.child; e !== null; ) Ow(e, t), (e = e.sibling);
}
function Ow(t, e) {
  var n = t.alternate,
    r = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((qt(e, t), nn(t), r & 4)) {
        try {
          zs(3, t, t.return), cu(3, t);
        } catch (v) {
          Ae(t, t.return, v);
        }
        try {
          zs(5, t, t.return);
        } catch (v) {
          Ae(t, t.return, v);
        }
      }
      break;
    case 1:
      qt(e, t), nn(t), r & 512 && n !== null && _i(n, n.return);
      break;
    case 5:
      if ((qt(e, t), nn(t), r & 512 && n !== null && _i(n, n.return), t.flags & 32)) {
        var i = t.stateNode;
        try {
          Zs(i, '');
        } catch (v) {
          Ae(t, t.return, v);
        }
      }
      if (r & 4 && ((i = t.stateNode), i != null)) {
        var s = t.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          a = t.type,
          l = t.updateQueue;
        if (((t.updateQueue = null), l !== null))
          try {
            a === 'input' && s.type === 'radio' && s.name != null && e0(i, s), zh(a, o);
            var u = zh(a, s);
            for (o = 0; o < l.length; o += 2) {
              var c = l[o],
                h = l[o + 1];
              c === 'style'
                ? s0(i, h)
                : c === 'dangerouslySetInnerHTML'
                ? r0(i, h)
                : c === 'children'
                ? Zs(i, h)
                : Sf(i, c, h, u);
            }
            switch (a) {
              case 'input':
                Mh(i, s);
                break;
              case 'textarea':
                t0(i, s);
                break;
              case 'select':
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var m = s.value;
                m != null
                  ? Ai(i, !!s.multiple, m, !1)
                  : d !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Ai(i, !!s.multiple, s.defaultValue, !0)
                      : Ai(i, !!s.multiple, s.multiple ? [] : '', !1));
            }
            i[lo] = s;
          } catch (v) {
            Ae(t, t.return, v);
          }
      }
      break;
    case 6:
      if ((qt(e, t), nn(t), r & 4)) {
        if (t.stateNode === null) throw Error(k(162));
        (i = t.stateNode), (s = t.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (v) {
          Ae(t, t.return, v);
        }
      }
      break;
    case 3:
      if ((qt(e, t), nn(t), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          ro(e.containerInfo);
        } catch (v) {
          Ae(t, t.return, v);
        }
      break;
    case 4:
      qt(e, t), nn(t);
      break;
    case 13:
      qt(e, t),
        nn(t),
        (i = t.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s || (i.alternate !== null && i.alternate.memoizedState !== null) || (ep = Pe())),
        r & 4 && Ng(t);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        t.mode & 1 ? ((at = (u = at) || c), qt(e, t), (at = u)) : qt(e, t),
        nn(t),
        r & 8192)
      ) {
        if (((u = t.memoizedState !== null), (t.stateNode.isHidden = u) && !c && t.mode & 1))
          for ($ = t, c = t.child; c !== null; ) {
            for (h = $ = c; $ !== null; ) {
              switch (((d = $), (m = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  zs(4, d, d.return);
                  break;
                case 1:
                  _i(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == 'function') {
                    (r = d), (n = d.return);
                    try {
                      (e = r),
                        (y.props = e.memoizedProps),
                        (y.state = e.memoizedState),
                        y.componentWillUnmount();
                    } catch (v) {
                      Ae(r, n, v);
                    }
                  }
                  break;
                case 5:
                  _i(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    xg(h);
                    continue;
                  }
              }
              m !== null ? ((m.return = d), ($ = m)) : xg(h);
            }
            c = c.sibling;
          }
        e: for (c = null, h = t; ; ) {
          if (h.tag === 5) {
            if (c === null) {
              c = h;
              try {
                (i = h.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == 'function'
                        ? s.setProperty('display', 'none', 'important')
                        : (s.display = 'none'))
                    : ((a = h.stateNode),
                      (l = h.memoizedProps.style),
                      (o = l != null && l.hasOwnProperty('display') ? l.display : null),
                      (a.style.display = i0('display', o)));
              } catch (v) {
                Ae(t, t.return, v);
              }
            }
          } else if (h.tag === 6) {
            if (c === null)
              try {
                h.stateNode.nodeValue = u ? '' : h.memoizedProps;
              } catch (v) {
                Ae(t, t.return, v);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) || h.memoizedState === null || h === t) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === t) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === t) break e;
            c === h && (c = null), (h = h.return);
          }
          c === h && (c = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      qt(e, t), nn(t), r & 4 && Ng(t);
      break;
    case 21:
      break;
    default:
      qt(e, t), nn(t);
  }
}
function nn(t) {
  var e = t.flags;
  if (e & 2) {
    try {
      e: {
        for (var n = t.return; n !== null; ) {
          if (Dw(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Zs(i, ''), (r.flags &= -33));
          var s = Ag(t);
          vd(t, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = Ag(t);
          yd(t, a, o);
          break;
        default:
          throw Error(k(161));
      }
    } catch (l) {
      Ae(t, t.return, l);
    }
    t.flags &= -3;
  }
  e & 4096 && (t.flags &= -4097);
}
function $I(t, e, n) {
  ($ = t), Lw(t);
}
function Lw(t, e, n) {
  for (var r = (t.mode & 1) !== 0; $ !== null; ) {
    var i = $,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || ya;
      if (!o) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || at;
        a = ya;
        var u = at;
        if (((ya = o), (at = l) && !u))
          for ($ = i; $ !== null; )
            (o = $),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Dg(i)
                : l !== null
                ? ((l.return = o), ($ = l))
                : Dg(i);
        for (; s !== null; ) ($ = s), Lw(s), (s = s.sibling);
        ($ = i), (ya = a), (at = u);
      }
      Rg(t);
    } else i.subtreeFlags & 8772 && s !== null ? ((s.return = i), ($ = s)) : Rg(t);
  }
}
function Rg(t) {
  for (; $ !== null; ) {
    var e = $;
    if (e.flags & 8772) {
      var n = e.alternate;
      try {
        if (e.flags & 8772)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              at || cu(5, e);
              break;
            case 1:
              var r = e.stateNode;
              if (e.flags & 4 && !at)
                if (n === null) r.componentDidMount();
                else {
                  var i = e.elementType === e.type ? n.memoizedProps : Gt(e.type, n.memoizedProps);
                  r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var s = e.updateQueue;
              s !== null && dg(e, s, r);
              break;
            case 3:
              var o = e.updateQueue;
              if (o !== null) {
                if (((n = null), e.child !== null))
                  switch (e.child.tag) {
                    case 5:
                      n = e.child.stateNode;
                      break;
                    case 1:
                      n = e.child.stateNode;
                  }
                dg(e, o, n);
              }
              break;
            case 5:
              var a = e.stateNode;
              if (n === null && e.flags & 4) {
                n = a;
                var l = e.memoizedProps;
                switch (e.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    l.autoFocus && n.focus();
                    break;
                  case 'img':
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (e.memoizedState === null) {
                var u = e.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var h = c.dehydrated;
                    h !== null && ro(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(k(163));
          }
        at || (e.flags & 512 && gd(e));
      } catch (d) {
        Ae(e, e.return, d);
      }
    }
    if (e === t) {
      $ = null;
      break;
    }
    if (((n = e.sibling), n !== null)) {
      (n.return = e.return), ($ = n);
      break;
    }
    $ = e.return;
  }
}
function xg(t) {
  for (; $ !== null; ) {
    var e = $;
    if (e === t) {
      $ = null;
      break;
    }
    var n = e.sibling;
    if (n !== null) {
      (n.return = e.return), ($ = n);
      break;
    }
    $ = e.return;
  }
}
function Dg(t) {
  for (; $ !== null; ) {
    var e = $;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var n = e.return;
          try {
            cu(4, e);
          } catch (l) {
            Ae(e, n, l);
          }
          break;
        case 1:
          var r = e.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var i = e.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Ae(e, i, l);
            }
          }
          var s = e.return;
          try {
            gd(e);
          } catch (l) {
            Ae(e, s, l);
          }
          break;
        case 5:
          var o = e.return;
          try {
            gd(e);
          } catch (l) {
            Ae(e, o, l);
          }
      }
    } catch (l) {
      Ae(e, e.return, l);
    }
    if (e === t) {
      $ = null;
      break;
    }
    var a = e.sibling;
    if (a !== null) {
      (a.return = e.return), ($ = a);
      break;
    }
    $ = e.return;
  }
}
var bI = Math.ceil,
  yl = bn.ReactCurrentDispatcher,
  Jf = bn.ReactCurrentOwner,
  zt = bn.ReactCurrentBatchConfig,
  se = 0,
  We = null,
  Me = null,
  Je = 0,
  Nt = 0,
  Ti = Sr(0),
  je = 0,
  mo = null,
  Qr = 0,
  hu = 0,
  Zf = 0,
  Bs = null,
  Et = null,
  ep = 0,
  Xi = 1 / 0,
  vn = null,
  vl = !1,
  wd = null,
  or = null,
  va = !1,
  Yn = null,
  wl = 0,
  Hs = 0,
  Ed = null,
  Fa = -1,
  Ua = 0;
function yt() {
  return se & 6 ? Pe() : Fa !== -1 ? Fa : (Fa = Pe());
}
function ar(t) {
  return t.mode & 1
    ? se & 2 && Je !== 0
      ? Je & -Je
      : wI.transition !== null
      ? (Ua === 0 && (Ua = y0()), Ua)
      : ((t = ce), t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : I0(t.type))), t)
    : 1;
}
function en(t, e, n, r) {
  if (50 < Hs) throw ((Hs = 0), (Ed = null), Error(k(185)));
  Po(t, n, r),
    (!(se & 2) || t !== We) &&
      (t === We && (!(se & 2) && (hu |= n), je === 4 && Hn(t, Je)),
      kt(t, r),
      n === 1 && se === 0 && !(e.mode & 1) && ((Xi = Pe() + 500), au && _r()));
}
function kt(t, e) {
  var n = t.callbackNode;
  wT(t, e);
  var r = nl(t, t === We ? Je : 0);
  if (r === 0) n !== null && Vm(n), (t.callbackNode = null), (t.callbackPriority = 0);
  else if (((e = r & -r), t.callbackPriority !== e)) {
    if ((n != null && Vm(n), e === 1))
      t.tag === 0 ? vI(Pg.bind(null, t)) : B0(Pg.bind(null, t)),
        pI(function () {
          !(se & 6) && _r();
        }),
        (n = null);
    else {
      switch (v0(r)) {
        case 1:
          n = Cf;
          break;
        case 4:
          n = m0;
          break;
        case 16:
          n = tl;
          break;
        case 536870912:
          n = g0;
          break;
        default:
          n = tl;
      }
      n = zw(n, $w.bind(null, t));
    }
    (t.callbackPriority = e), (t.callbackNode = n);
  }
}
function $w(t, e) {
  if (((Fa = -1), (Ua = 0), se & 6)) throw Error(k(327));
  var n = t.callbackNode;
  if (Pi() && t.callbackNode !== n) return null;
  var r = nl(t, t === We ? Je : 0);
  if (r === 0) return null;
  if (r & 30 || r & t.expiredLanes || e) e = El(t, r);
  else {
    e = r;
    var i = se;
    se |= 2;
    var s = Mw();
    (We !== t || Je !== e) && ((vn = null), (Xi = Pe() + 500), Ur(t, e));
    do
      try {
        UI();
        break;
      } catch (a) {
        bw(t, a);
      }
    while (1);
    Uf(), (yl.current = s), (se = i), Me !== null ? (e = 0) : ((We = null), (Je = 0), (e = je));
  }
  if (e !== 0) {
    if ((e === 2 && ((i = qh(t)), i !== 0 && ((r = i), (e = Sd(t, i)))), e === 1))
      throw ((n = mo), Ur(t, 0), Hn(t, r), kt(t, Pe()), n);
    if (e === 6) Hn(t, r);
    else {
      if (
        ((i = t.current.alternate),
        !(r & 30) &&
          !MI(i) &&
          ((e = El(t, r)), e === 2 && ((s = qh(t)), s !== 0 && ((r = s), (e = Sd(t, s)))), e === 1))
      )
        throw ((n = mo), Ur(t, 0), Hn(t, r), kt(t, Pe()), n);
      switch (((t.finishedWork = i), (t.finishedLanes = r), e)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Ar(t, Et, vn);
          break;
        case 3:
          if ((Hn(t, r), (r & 130023424) === r && ((e = ep + 500 - Pe()), 10 < e))) {
            if (nl(t, 0) !== 0) break;
            if (((i = t.suspendedLanes), (i & r) !== r)) {
              yt(), (t.pingedLanes |= t.suspendedLanes & i);
              break;
            }
            t.timeoutHandle = td(Ar.bind(null, t, Et, vn), e);
            break;
          }
          Ar(t, Et, vn);
          break;
        case 4:
          if ((Hn(t, r), (r & 4194240) === r)) break;
          for (e = t.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - Zt(r);
            (s = 1 << o), (o = e[o]), o > i && (i = o), (r &= ~s);
          }
          if (
            ((r = i),
            (r = Pe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * bI(r / 1960)) - r),
            10 < r)
          ) {
            t.timeoutHandle = td(Ar.bind(null, t, Et, vn), r);
            break;
          }
          Ar(t, Et, vn);
          break;
        case 5:
          Ar(t, Et, vn);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return kt(t, Pe()), t.callbackNode === n ? $w.bind(null, t) : null;
}
function Sd(t, e) {
  var n = Bs;
  return (
    t.current.memoizedState.isDehydrated && (Ur(t, e).flags |= 256),
    (t = El(t, e)),
    t !== 2 && ((e = Et), (Et = n), e !== null && _d(e)),
    t
  );
}
function _d(t) {
  Et === null ? (Et = t) : Et.push.apply(Et, t);
}
function MI(t) {
  for (var e = t; ; ) {
    if (e.flags & 16384) {
      var n = e.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!tn(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = e.child), e.subtreeFlags & 16384 && n !== null)) (n.return = e), (e = n);
    else {
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return !0;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
  }
  return !0;
}
function Hn(t, e) {
  for (
    e &= ~Zf, e &= ~hu, t.suspendedLanes |= e, t.pingedLanes &= ~e, t = t.expirationTimes;
    0 < e;

  ) {
    var n = 31 - Zt(e),
      r = 1 << n;
    (t[n] = -1), (e &= ~r);
  }
}
function Pg(t) {
  if (se & 6) throw Error(k(327));
  Pi();
  var e = nl(t, 0);
  if (!(e & 1)) return kt(t, Pe()), null;
  var n = El(t, e);
  if (t.tag !== 0 && n === 2) {
    var r = qh(t);
    r !== 0 && ((e = r), (n = Sd(t, r)));
  }
  if (n === 1) throw ((n = mo), Ur(t, 0), Hn(t, e), kt(t, Pe()), n);
  if (n === 6) throw Error(k(345));
  return (
    (t.finishedWork = t.current.alternate), (t.finishedLanes = e), Ar(t, Et, vn), kt(t, Pe()), null
  );
}
function tp(t, e) {
  var n = se;
  se |= 1;
  try {
    return t(e);
  } finally {
    (se = n), se === 0 && ((Xi = Pe() + 500), au && _r());
  }
}
function Xr(t) {
  Yn !== null && Yn.tag === 0 && !(se & 6) && Pi();
  var e = se;
  se |= 1;
  var n = zt.transition,
    r = ce;
  try {
    if (((zt.transition = null), (ce = 1), t)) return t();
  } finally {
    (ce = r), (zt.transition = n), (se = e), !(se & 6) && _r();
  }
}
function np() {
  (Nt = Ti.current), me(Ti);
}
function Ur(t, e) {
  (t.finishedWork = null), (t.finishedLanes = 0);
  var n = t.timeoutHandle;
  if ((n !== -1 && ((t.timeoutHandle = -1), fI(n)), Me !== null))
    for (n = Me.return; n !== null; ) {
      var r = n;
      switch ((bf(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && al();
          break;
        case 3:
          Gi(), me(Tt), me(ht), Kf();
          break;
        case 5:
          Hf(r);
          break;
        case 4:
          Gi();
          break;
        case 13:
          me(Te);
          break;
        case 19:
          me(Te);
          break;
        case 10:
          Vf(r.type._context);
          break;
        case 22:
        case 23:
          np();
      }
      n = n.return;
    }
  if (
    ((We = t),
    (Me = t = lr(t.current, null)),
    (Je = Nt = e),
    (je = 0),
    (mo = null),
    (Zf = hu = Qr = 0),
    (Et = Bs = null),
    Pr !== null)
  ) {
    for (e = 0; e < Pr.length; e++)
      if (((n = Pr[e]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (r.next = o);
        }
        n.pending = r;
      }
    Pr = null;
  }
  return t;
}
function bw(t, e) {
  do {
    var n = Me;
    try {
      if ((Uf(), ($a.current = gl), ml)) {
        for (var r = Ie.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        ml = !1;
      }
      if (
        ((Gr = 0),
        (Ke = Ue = Ie = null),
        (js = !1),
        (ho = 0),
        (Jf.current = null),
        n === null || n.return === null)
      ) {
        (je = 1), (mo = e), (Me = null);
        break;
      }
      e: {
        var s = t,
          o = n.return,
          a = n,
          l = e;
        if (
          ((e = Je),
          (a.flags |= 32768),
          l !== null && typeof l == 'object' && typeof l.then == 'function')
        ) {
          var u = l,
            c = a,
            h = c.tag;
          if (!(c.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var m = wg(o);
          if (m !== null) {
            (m.flags &= -257), Eg(m, o, a, s, e), m.mode & 1 && vg(s, u, e), (e = m), (l = u);
            var y = e.updateQueue;
            if (y === null) {
              var v = new Set();
              v.add(l), (e.updateQueue = v);
            } else y.add(l);
            break e;
          } else {
            if (!(e & 1)) {
              vg(s, u, e), rp();
              break e;
            }
            l = Error(k(426));
          }
        } else if (Se && a.mode & 1) {
          var S = wg(o);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), Eg(S, o, a, s, e), Mf(Qi(l, a));
            break e;
          }
        }
        (s = l = Qi(l, a)), je !== 4 && (je = 2), Bs === null ? (Bs = [s]) : Bs.push(s), (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (e &= -e), (s.lanes |= e);
              var p = ww(s, l, e);
              hg(s, p);
              break e;
            case 1:
              a = l;
              var f = s.type,
                g = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof f.getDerivedStateFromError == 'function' ||
                  (g !== null &&
                    typeof g.componentDidCatch == 'function' &&
                    (or === null || !or.has(g))))
              ) {
                (s.flags |= 65536), (e &= -e), (s.lanes |= e);
                var E = Ew(s, a, e);
                hg(s, E);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Uw(n);
    } catch (_) {
      (e = _), Me === n && n !== null && (Me = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Mw() {
  var t = yl.current;
  return (yl.current = gl), t === null ? gl : t;
}
function rp() {
  (je === 0 || je === 3 || je === 2) && (je = 4),
    We === null || (!(Qr & 268435455) && !(hu & 268435455)) || Hn(We, Je);
}
function El(t, e) {
  var n = se;
  se |= 2;
  var r = Mw();
  (We !== t || Je !== e) && ((vn = null), Ur(t, e));
  do
    try {
      FI();
      break;
    } catch (i) {
      bw(t, i);
    }
  while (1);
  if ((Uf(), (se = n), (yl.current = r), Me !== null)) throw Error(k(261));
  return (We = null), (Je = 0), je;
}
function FI() {
  for (; Me !== null; ) Fw(Me);
}
function UI() {
  for (; Me !== null && !cT(); ) Fw(Me);
}
function Fw(t) {
  var e = jw(t.alternate, t, Nt);
  (t.memoizedProps = t.pendingProps), e === null ? Uw(t) : (Me = e), (Jf.current = null);
}
function Uw(t) {
  var e = t;
  do {
    var n = e.alternate;
    if (((t = e.return), e.flags & 32768)) {
      if (((n = PI(n, e)), n !== null)) {
        (n.flags &= 32767), (Me = n);
        return;
      }
      if (t !== null) (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
      else {
        (je = 6), (Me = null);
        return;
      }
    } else if (((n = DI(n, e, Nt)), n !== null)) {
      Me = n;
      return;
    }
    if (((e = e.sibling), e !== null)) {
      Me = e;
      return;
    }
    Me = e = t;
  } while (e !== null);
  je === 0 && (je = 5);
}
function Ar(t, e, n) {
  var r = ce,
    i = zt.transition;
  try {
    (zt.transition = null), (ce = 1), VI(t, e, n, r);
  } finally {
    (zt.transition = i), (ce = r);
  }
  return null;
}
function VI(t, e, n, r) {
  do Pi();
  while (Yn !== null);
  if (se & 6) throw Error(k(327));
  n = t.finishedWork;
  var i = t.finishedLanes;
  if (n === null) return null;
  if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current)) throw Error(k(177));
  (t.callbackNode = null), (t.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (ET(t, s),
    t === We && ((Me = We = null), (Je = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      va ||
      ((va = !0),
      zw(tl, function () {
        return Pi(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = zt.transition), (zt.transition = null);
    var o = ce;
    ce = 1;
    var a = se;
    (se |= 4),
      (Jf.current = null),
      LI(t, n),
      Ow(n, t),
      oI(Zh),
      (rl = !!Jh),
      (Zh = Jh = null),
      (t.current = n),
      $I(n),
      hT(),
      (se = a),
      (ce = o),
      (zt.transition = s);
  } else t.current = n;
  if (
    (va && ((va = !1), (Yn = t), (wl = i)),
    (s = t.pendingLanes),
    s === 0 && (or = null),
    pT(n.stateNode),
    kt(t, Pe()),
    e !== null)
  )
    for (r = t.onRecoverableError, n = 0; n < e.length; n++)
      (i = e[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (vl) throw ((vl = !1), (t = wd), (wd = null), t);
  return (
    wl & 1 && t.tag !== 0 && Pi(),
    (s = t.pendingLanes),
    s & 1 ? (t === Ed ? Hs++ : ((Hs = 0), (Ed = t))) : (Hs = 0),
    _r(),
    null
  );
}
function Pi() {
  if (Yn !== null) {
    var t = v0(wl),
      e = zt.transition,
      n = ce;
    try {
      if (((zt.transition = null), (ce = 16 > t ? 16 : t), Yn === null)) var r = !1;
      else {
        if (((t = Yn), (Yn = null), (wl = 0), se & 6)) throw Error(k(331));
        var i = se;
        for (se |= 4, $ = t.current; $ !== null; ) {
          var s = $,
            o = s.child;
          if ($.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for ($ = u; $ !== null; ) {
                  var c = $;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zs(8, c, s);
                  }
                  var h = c.child;
                  if (h !== null) (h.return = c), ($ = h);
                  else
                    for (; $ !== null; ) {
                      c = $;
                      var d = c.sibling,
                        m = c.return;
                      if ((xw(c), c === u)) {
                        $ = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = m), ($ = d);
                        break;
                      }
                      $ = m;
                    }
                }
              }
              var y = s.alternate;
              if (y !== null) {
                var v = y.child;
                if (v !== null) {
                  y.child = null;
                  do {
                    var S = v.sibling;
                    (v.sibling = null), (v = S);
                  } while (v !== null);
                }
              }
              $ = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), ($ = o);
          else
            e: for (; $ !== null; ) {
              if (((s = $), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    zs(9, s, s.return);
                }
              var p = s.sibling;
              if (p !== null) {
                (p.return = s.return), ($ = p);
                break e;
              }
              $ = s.return;
            }
        }
        var f = t.current;
        for ($ = f; $ !== null; ) {
          o = $;
          var g = o.child;
          if (o.subtreeFlags & 2064 && g !== null) (g.return = o), ($ = g);
          else
            e: for (o = f; $ !== null; ) {
              if (((a = $), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      cu(9, a);
                  }
                } catch (_) {
                  Ae(a, a.return, _);
                }
              if (a === o) {
                $ = null;
                break e;
              }
              var E = a.sibling;
              if (E !== null) {
                (E.return = a.return), ($ = E);
                break e;
              }
              $ = a.return;
            }
        }
        if (((se = i), _r(), un && typeof un.onPostCommitFiberRoot == 'function'))
          try {
            un.onPostCommitFiberRoot(nu, t);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ce = n), (zt.transition = e);
    }
  }
  return !1;
}
function Og(t, e, n) {
  (e = Qi(n, e)),
    (e = ww(t, e, 1)),
    (t = sr(t, e, 1)),
    (e = yt()),
    t !== null && (Po(t, 1, e), kt(t, e));
}
function Ae(t, e, n) {
  if (t.tag === 3) Og(t, t, n);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        Og(e, t, n);
        break;
      } else if (e.tag === 1) {
        var r = e.stateNode;
        if (
          typeof e.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' && (or === null || !or.has(r)))
        ) {
          (t = Qi(n, t)),
            (t = Ew(e, t, 1)),
            (e = sr(e, t, 1)),
            (t = yt()),
            e !== null && (Po(e, 1, t), kt(e, t));
          break;
        }
      }
      e = e.return;
    }
}
function jI(t, e, n) {
  var r = t.pingCache;
  r !== null && r.delete(e),
    (e = yt()),
    (t.pingedLanes |= t.suspendedLanes & n),
    We === t &&
      (Je & n) === n &&
      (je === 4 || (je === 3 && (Je & 130023424) === Je && 500 > Pe() - ep) ? Ur(t, 0) : (Zf |= n)),
    kt(t, e);
}
function Vw(t, e) {
  e === 0 && (t.mode & 1 ? ((e = la), (la <<= 1), !(la & 130023424) && (la = 4194304)) : (e = 1));
  var n = yt();
  (t = Nn(t, e)), t !== null && (Po(t, e, n), kt(t, n));
}
function zI(t) {
  var e = t.memoizedState,
    n = 0;
  e !== null && (n = e.retryLane), Vw(t, n);
}
function BI(t, e) {
  var n = 0;
  switch (t.tag) {
    case 13:
      var r = t.stateNode,
        i = t.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = t.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  r !== null && r.delete(e), Vw(t, n);
}
var jw;
jw = function (t, e, n) {
  if (t !== null)
    if (t.memoizedProps !== e.pendingProps || Tt.current) _t = !0;
    else {
      if (!(t.lanes & n) && !(e.flags & 128)) return (_t = !1), xI(t, e, n);
      _t = !!(t.flags & 131072);
    }
  else (_t = !1), Se && e.flags & 1048576 && H0(e, cl, e.index);
  switch (((e.lanes = 0), e.tag)) {
    case 2:
      var r = e.type;
      Ma(t, e), (t = e.pendingProps);
      var i = Ki(e, ht.current);
      Di(e, n), (i = qf(null, e, r, t, i, n));
      var s = Gf();
      return (
        (e.flags |= 1),
        typeof i == 'object' && i !== null && typeof i.render == 'function' && i.$$typeof === void 0
          ? ((e.tag = 1),
            (e.memoizedState = null),
            (e.updateQueue = null),
            It(r) ? ((s = !0), ll(e)) : (s = !1),
            (e.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
            zf(e),
            (i.updater = lu),
            (e.stateNode = i),
            (i._reactInternals = e),
            ld(e, r, t, n),
            (e = hd(null, e, r, !0, s, n)))
          : ((e.tag = 0), Se && s && $f(e), pt(null, e, i, n), (e = e.child)),
        e
      );
    case 16:
      r = e.elementType;
      e: {
        switch (
          (Ma(t, e),
          (t = e.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (e.type = r),
          (i = e.tag = KI(r)),
          (t = Gt(r, t)),
          i)
        ) {
          case 0:
            e = cd(null, e, r, t, n);
            break e;
          case 1:
            e = Tg(null, e, r, t, n);
            break e;
          case 11:
            e = Sg(null, e, r, t, n);
            break e;
          case 14:
            e = _g(null, e, r, Gt(r.type, t), n);
            break e;
        }
        throw Error(k(306, r, ''));
      }
      return e;
    case 0:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : Gt(r, i)),
        cd(t, e, r, i, n)
      );
    case 1:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : Gt(r, i)),
        Tg(t, e, r, i, n)
      );
    case 3:
      e: {
        if ((Iw(e), t === null)) throw Error(k(387));
        (r = e.pendingProps), (s = e.memoizedState), (i = s.element), G0(t, e), fl(e, r, null, n);
        var o = e.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions
            }),
            (e.updateQueue.baseState = s),
            (e.memoizedState = s),
            e.flags & 256)
          ) {
            (i = Qi(Error(k(423)), e)), (e = Ig(t, e, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Qi(Error(k(424)), e)), (e = Ig(t, e, r, n, i));
            break e;
          } else
            for (
              Rt = ir(e.stateNode.containerInfo.firstChild),
                Dt = e,
                Se = !0,
                Xt = null,
                n = J0(e, null, r, n),
                e.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Wi(), r === i)) {
            e = Rn(t, e, n);
            break e;
          }
          pt(t, e, r, n);
        }
        e = e.child;
      }
      return e;
    case 5:
      return (
        Z0(e),
        t === null && sd(e),
        (r = e.type),
        (i = e.pendingProps),
        (s = t !== null ? t.memoizedProps : null),
        (o = i.children),
        ed(r, i) ? (o = null) : s !== null && ed(r, s) && (e.flags |= 32),
        Tw(t, e),
        pt(t, e, o, n),
        e.child
      );
    case 6:
      return t === null && sd(e), null;
    case 13:
      return kw(t, e, n);
    case 4:
      return (
        Bf(e, e.stateNode.containerInfo),
        (r = e.pendingProps),
        t === null ? (e.child = qi(e, null, r, n)) : pt(t, e, r, n),
        e.child
      );
    case 11:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : Gt(r, i)),
        Sg(t, e, r, i, n)
      );
    case 7:
      return pt(t, e, e.pendingProps, n), e.child;
    case 8:
      return pt(t, e, e.pendingProps.children, n), e.child;
    case 12:
      return pt(t, e, e.pendingProps.children, n), e.child;
    case 10:
      e: {
        if (
          ((r = e.type._context),
          (i = e.pendingProps),
          (s = e.memoizedProps),
          (o = i.value),
          fe(hl, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (tn(s.value, o)) {
            if (s.children === i.children && !Tt.current) {
              e = Rn(t, e, n);
              break e;
            }
          } else
            for (s = e.child, s !== null && (s.return = e); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                o = s.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (s.tag === 1) {
                      (l = kn(-1, n & -n)), (l.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? (l.next = l) : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (s.lanes |= n),
                      (l = s.alternate),
                      l !== null && (l.lanes |= n),
                      od(s.return, n, e),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (s.tag === 10) o = s.type === e.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(k(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  od(o, n, e),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === e) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        pt(t, e, i.children, n), (e = e.child);
      }
      return e;
    case 9:
      return (
        (i = e.type),
        (r = e.pendingProps.children),
        Di(e, n),
        (i = Bt(i)),
        (r = r(i)),
        (e.flags |= 1),
        pt(t, e, r, n),
        e.child
      );
    case 14:
      return (r = e.type), (i = Gt(r, e.pendingProps)), (i = Gt(r.type, i)), _g(t, e, r, i, n);
    case 15:
      return Sw(t, e, e.type, e.pendingProps, n);
    case 17:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : Gt(r, i)),
        Ma(t, e),
        (e.tag = 1),
        It(r) ? ((t = !0), ll(e)) : (t = !1),
        Di(e, n),
        X0(e, r, i),
        ld(e, r, i, n),
        hd(null, e, r, !0, t, n)
      );
    case 19:
      return Cw(t, e, n);
    case 22:
      return _w(t, e, n);
  }
  throw Error(k(156, e.tag));
};
function zw(t, e) {
  return p0(t, e);
}
function HI(t, e, n, r) {
  (this.tag = t),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = e),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function jt(t, e, n, r) {
  return new HI(t, e, n, r);
}
function ip(t) {
  return (t = t.prototype), !(!t || !t.isReactComponent);
}
function KI(t) {
  if (typeof t == 'function') return ip(t) ? 1 : 0;
  if (t != null) {
    if (((t = t.$$typeof), t === Tf)) return 11;
    if (t === If) return 14;
  }
  return 2;
}
function lr(t, e) {
  var n = t.alternate;
  return (
    n === null
      ? ((n = jt(t.tag, e, t.key, t.mode)),
        (n.elementType = t.elementType),
        (n.type = t.type),
        (n.stateNode = t.stateNode),
        (n.alternate = t),
        (t.alternate = n))
      : ((n.pendingProps = e),
        (n.type = t.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = t.flags & 14680064),
    (n.childLanes = t.childLanes),
    (n.lanes = t.lanes),
    (n.child = t.child),
    (n.memoizedProps = t.memoizedProps),
    (n.memoizedState = t.memoizedState),
    (n.updateQueue = t.updateQueue),
    (e = t.dependencies),
    (n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
    (n.sibling = t.sibling),
    (n.index = t.index),
    (n.ref = t.ref),
    n
  );
}
function Va(t, e, n, r, i, s) {
  var o = 2;
  if (((r = t), typeof t == 'function')) ip(t) && (o = 1);
  else if (typeof t == 'string') o = 5;
  else
    e: switch (t) {
      case fi:
        return Vr(n.children, i, s, e);
      case _f:
        (o = 8), (i |= 8);
        break;
      case Ph:
        return (t = jt(12, n, e, i | 2)), (t.elementType = Ph), (t.lanes = s), t;
      case Oh:
        return (t = jt(13, n, e, i)), (t.elementType = Oh), (t.lanes = s), t;
      case Lh:
        return (t = jt(19, n, e, i)), (t.elementType = Lh), (t.lanes = s), t;
      case Yv:
        return du(n, i, s, e);
      default:
        if (typeof t == 'object' && t !== null)
          switch (t.$$typeof) {
            case Qv:
              o = 10;
              break e;
            case Xv:
              o = 9;
              break e;
            case Tf:
              o = 11;
              break e;
            case If:
              o = 14;
              break e;
            case jn:
              (o = 16), (r = null);
              break e;
          }
        throw Error(k(130, t == null ? t : typeof t, ''));
    }
  return (e = jt(o, n, e, i)), (e.elementType = t), (e.type = r), (e.lanes = s), e;
}
function Vr(t, e, n, r) {
  return (t = jt(7, t, r, e)), (t.lanes = n), t;
}
function du(t, e, n, r) {
  return (
    (t = jt(22, t, r, e)), (t.elementType = Yv), (t.lanes = n), (t.stateNode = { isHidden: !1 }), t
  );
}
function Kc(t, e, n) {
  return (t = jt(6, t, null, e)), (t.lanes = n), t;
}
function Wc(t, e, n) {
  return (
    (e = jt(4, t.children !== null ? t.children : [], t.key, e)),
    (e.lanes = n),
    (e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }),
    e
  );
}
function WI(t, e, n, r, i) {
  (this.tag = e),
    (this.containerInfo = t),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Cc(0)),
    (this.expirationTimes = Cc(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Cc(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function sp(t, e, n, r, i, s, o, a, l) {
  return (
    (t = new WI(t, e, n, a, l)),
    e === 1 ? ((e = 1), s === !0 && (e |= 8)) : (e = 0),
    (s = jt(3, null, null, e)),
    (t.current = s),
    (s.stateNode = t),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    }),
    zf(s),
    t
  );
}
function qI(t, e, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: di,
    key: r == null ? null : '' + r,
    children: t,
    containerInfo: e,
    implementation: n
  };
}
function Bw(t) {
  if (!t) return mr;
  t = t._reactInternals;
  e: {
    if (si(t) !== t || t.tag !== 1) throw Error(k(170));
    var e = t;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break e;
        case 1:
          if (It(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(k(171));
  }
  if (t.tag === 1) {
    var n = t.type;
    if (It(n)) return z0(t, n, e);
  }
  return e;
}
function Hw(t, e, n, r, i, s, o, a, l) {
  return (
    (t = sp(n, r, !0, t, i, s, o, a, l)),
    (t.context = Bw(null)),
    (n = t.current),
    (r = yt()),
    (i = ar(n)),
    (s = kn(r, i)),
    (s.callback = e ?? null),
    sr(n, s, i),
    (t.current.lanes = i),
    Po(t, i, r),
    kt(t, r),
    t
  );
}
function fu(t, e, n, r) {
  var i = e.current,
    s = yt(),
    o = ar(i);
  return (
    (n = Bw(n)),
    e.context === null ? (e.context = n) : (e.pendingContext = n),
    (e = kn(s, o)),
    (e.payload = { element: t }),
    (r = r === void 0 ? null : r),
    r !== null && (e.callback = r),
    (t = sr(i, e, o)),
    t !== null && (en(t, i, o, s), La(t, i, o)),
    o
  );
}
function Sl(t) {
  if (((t = t.current), !t.child)) return null;
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode;
    default:
      return t.child.stateNode;
  }
}
function Lg(t, e) {
  if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
    var n = t.retryLane;
    t.retryLane = n !== 0 && n < e ? n : e;
  }
}
function op(t, e) {
  Lg(t, e), (t = t.alternate) && Lg(t, e);
}
function GI() {
  return null;
}
var Kw =
  typeof reportError == 'function'
    ? reportError
    : function (t) {
        console.error(t);
      };
function ap(t) {
  this._internalRoot = t;
}
pu.prototype.render = ap.prototype.render = function (t) {
  var e = this._internalRoot;
  if (e === null) throw Error(k(409));
  fu(t, e, null, null);
};
pu.prototype.unmount = ap.prototype.unmount = function () {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var e = t.containerInfo;
    Xr(function () {
      fu(null, t, null, null);
    }),
      (e[An] = null);
  }
};
function pu(t) {
  this._internalRoot = t;
}
pu.prototype.unstable_scheduleHydration = function (t) {
  if (t) {
    var e = S0();
    t = { blockedOn: null, target: t, priority: e };
    for (var n = 0; n < Bn.length && e !== 0 && e < Bn[n].priority; n++);
    Bn.splice(n, 0, t), n === 0 && T0(t);
  }
};
function lp(t) {
  return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
}
function mu(t) {
  return !(
    !t ||
    (t.nodeType !== 1 &&
      t.nodeType !== 9 &&
      t.nodeType !== 11 &&
      (t.nodeType !== 8 || t.nodeValue !== ' react-mount-point-unstable '))
  );
}
function $g() {}
function QI(t, e, n, r, i) {
  if (i) {
    if (typeof r == 'function') {
      var s = r;
      r = function () {
        var u = Sl(o);
        s.call(u);
      };
    }
    var o = Hw(e, r, t, 0, null, !1, !1, '', $g);
    return (
      (t._reactRootContainer = o),
      (t[An] = o.current),
      oo(t.nodeType === 8 ? t.parentNode : t),
      Xr(),
      o
    );
  }
  for (; (i = t.lastChild); ) t.removeChild(i);
  if (typeof r == 'function') {
    var a = r;
    r = function () {
      var u = Sl(l);
      a.call(u);
    };
  }
  var l = sp(t, 0, !1, null, null, !1, !1, '', $g);
  return (
    (t._reactRootContainer = l),
    (t[An] = l.current),
    oo(t.nodeType === 8 ? t.parentNode : t),
    Xr(function () {
      fu(e, l, n, r);
    }),
    l
  );
}
function gu(t, e, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == 'function') {
      var a = i;
      i = function () {
        var l = Sl(o);
        a.call(l);
      };
    }
    fu(e, o, t, i);
  } else o = QI(n, e, t, i, r);
  return Sl(o);
}
w0 = function (t) {
  switch (t.tag) {
    case 3:
      var e = t.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var n = xs(e.pendingLanes);
        n !== 0 && (Af(e, n | 1), kt(e, Pe()), !(se & 6) && ((Xi = Pe() + 500), _r()));
      }
      break;
    case 13:
      Xr(function () {
        var r = Nn(t, 1);
        if (r !== null) {
          var i = yt();
          en(r, t, 1, i);
        }
      }),
        op(t, 1);
  }
};
Nf = function (t) {
  if (t.tag === 13) {
    var e = Nn(t, 134217728);
    if (e !== null) {
      var n = yt();
      en(e, t, 134217728, n);
    }
    op(t, 134217728);
  }
};
E0 = function (t) {
  if (t.tag === 13) {
    var e = ar(t),
      n = Nn(t, e);
    if (n !== null) {
      var r = yt();
      en(n, t, e, r);
    }
    op(t, e);
  }
};
S0 = function () {
  return ce;
};
_0 = function (t, e) {
  var n = ce;
  try {
    return (ce = t), e();
  } finally {
    ce = n;
  }
};
Hh = function (t, e, n) {
  switch (e) {
    case 'input':
      if ((Mh(t, n), (e = n.name), n.type === 'radio' && e != null)) {
        for (n = t; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll('input[name=' + JSON.stringify('' + e) + '][type="radio"]'), e = 0;
          e < n.length;
          e++
        ) {
          var r = n[e];
          if (r !== t && r.form === t.form) {
            var i = ou(r);
            if (!i) throw Error(k(90));
            Zv(r), Mh(r, i);
          }
        }
      }
      break;
    case 'textarea':
      t0(t, n);
      break;
    case 'select':
      (e = n.value), e != null && Ai(t, !!n.multiple, e, !1);
  }
};
l0 = tp;
u0 = Xr;
var XI = { usingClientEntryPoint: !1, Events: [Lo, yi, ou, o0, a0, tp] },
  ks = {
    findFiberByHostInstance: Dr,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom'
  },
  YI = {
    bundleType: ks.bundleType,
    version: ks.version,
    rendererPackageName: ks.rendererPackageName,
    rendererConfig: ks.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: bn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (t) {
      return (t = d0(t)), t === null ? null : t.stateNode;
    },
    findFiberByHostInstance: ks.findFiberByHostInstance || GI,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608'
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var wa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wa.isDisabled && wa.supportsFiber)
    try {
      (nu = wa.inject(YI)), (un = wa);
    } catch {}
}
$t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = XI;
$t.createPortal = function (t, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!lp(e)) throw Error(k(200));
  return qI(t, e, null, n);
};
$t.createRoot = function (t, e) {
  if (!lp(t)) throw Error(k(299));
  var n = !1,
    r = '',
    i = Kw;
  return (
    e != null &&
      (e.unstable_strictMode === !0 && (n = !0),
      e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
      e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
    (e = sp(t, 1, !1, null, null, n, !1, r, i)),
    (t[An] = e.current),
    oo(t.nodeType === 8 ? t.parentNode : t),
    new ap(e)
  );
};
$t.findDOMNode = function (t) {
  if (t == null) return null;
  if (t.nodeType === 1) return t;
  var e = t._reactInternals;
  if (e === void 0)
    throw typeof t.render == 'function'
      ? Error(k(188))
      : ((t = Object.keys(t).join(',')), Error(k(268, t)));
  return (t = d0(e)), (t = t === null ? null : t.stateNode), t;
};
$t.flushSync = function (t) {
  return Xr(t);
};
$t.hydrate = function (t, e, n) {
  if (!mu(e)) throw Error(k(200));
  return gu(null, t, e, !0, n);
};
$t.hydrateRoot = function (t, e, n) {
  if (!lp(t)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = '',
    o = Kw;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (e = Hw(e, null, t, 1, n ?? null, i, !1, s, o)),
    (t[An] = e.current),
    oo(t),
    r)
  )
    for (t = 0; t < r.length; t++)
      (n = r[t]),
        (i = n._getVersion),
        (i = i(n._source)),
        e.mutableSourceEagerHydrationData == null
          ? (e.mutableSourceEagerHydrationData = [n, i])
          : e.mutableSourceEagerHydrationData.push(n, i);
  return new pu(e);
};
$t.render = function (t, e, n) {
  if (!mu(e)) throw Error(k(200));
  return gu(null, t, e, !1, n);
};
$t.unmountComponentAtNode = function (t) {
  if (!mu(t)) throw Error(k(40));
  return t._reactRootContainer
    ? (Xr(function () {
        gu(null, null, t, !1, function () {
          (t._reactRootContainer = null), (t[An] = null);
        });
      }),
      !0)
    : !1;
};
$t.unstable_batchedUpdates = tp;
$t.unstable_renderSubtreeIntoContainer = function (t, e, n, r) {
  if (!mu(n)) throw Error(k(200));
  if (t == null || t._reactInternals === void 0) throw Error(k(38));
  return gu(t, e, n, !1, r);
};
$t.version = '18.2.0-next-9e3b772b8-20220608';
(function (t) {
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (n) {
        console.error(n);
      }
  }
  e(), (t.exports = $t);
})(G_);
var bg = Ya;
(Rh.createRoot = bg.createRoot), (Rh.hydrateRoot = bg.hydrateRoot);
function Yt(t) {
  for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
    n[r - 1] = arguments[r];
  throw Error(
    '[Immer] minified error nr: ' +
      t +
      (n.length
        ? ' ' +
          n
            .map(function (i) {
              return "'" + i + "'";
            })
            .join(',')
        : '') +
      '. Find the full error at: https://bit.ly/3cXEKWf'
  );
}
function gr(t) {
  return !!t && !!t[Ee];
}
function xn(t) {
  var e;
  return (
    !!t &&
    ((function (n) {
      if (!n || typeof n != 'object') return !1;
      var r = Object.getPrototypeOf(n);
      if (r === null) return !0;
      var i = Object.hasOwnProperty.call(r, 'constructor') && r.constructor;
      return i === Object || (typeof i == 'function' && Function.toString.call(i) === ok);
    })(t) ||
      Array.isArray(t) ||
      !!t[Bg] ||
      !!(!((e = t.constructor) === null || e === void 0) && e[Bg]) ||
      up(t) ||
      cp(t))
  );
}
function Yr(t, e, n) {
  n === void 0 && (n = !1),
    cs(t) === 0
      ? (n ? Object.keys : Li)(t).forEach(function (r) {
          (n && typeof r == 'symbol') || e(r, t[r], t);
        })
      : t.forEach(function (r, i) {
          return e(i, r, t);
        });
}
function cs(t) {
  var e = t[Ee];
  return e ? (e.i > 3 ? e.i - 4 : e.i) : Array.isArray(t) ? 1 : up(t) ? 2 : cp(t) ? 3 : 0;
}
function Oi(t, e) {
  return cs(t) === 2 ? t.has(e) : Object.prototype.hasOwnProperty.call(t, e);
}
function JI(t, e) {
  return cs(t) === 2 ? t.get(e) : t[e];
}
function Ww(t, e, n) {
  var r = cs(t);
  r === 2 ? t.set(e, n) : r === 3 ? t.add(n) : (t[e] = n);
}
function qw(t, e) {
  return t === e ? t !== 0 || 1 / t == 1 / e : t != t && e != e;
}
function up(t) {
  return ik && t instanceof Map;
}
function cp(t) {
  return sk && t instanceof Set;
}
function Nr(t) {
  return t.o || t.t;
}
function hp(t) {
  if (Array.isArray(t)) return Array.prototype.slice.call(t);
  var e = Qw(t);
  delete e[Ee];
  for (var n = Li(e), r = 0; r < n.length; r++) {
    var i = n[r],
      s = e[i];
    s.writable === !1 && ((s.writable = !0), (s.configurable = !0)),
      (s.get || s.set) &&
        (e[i] = { configurable: !0, writable: !0, enumerable: s.enumerable, value: t[i] });
  }
  return Object.create(Object.getPrototypeOf(t), e);
}
function dp(t, e) {
  return (
    e === void 0 && (e = !1),
    fp(t) ||
      gr(t) ||
      !xn(t) ||
      (cs(t) > 1 && (t.set = t.add = t.clear = t.delete = ZI),
      Object.freeze(t),
      e &&
        Yr(
          t,
          function (n, r) {
            return dp(r, !0);
          },
          !0
        )),
    t
  );
}
function ZI() {
  Yt(2);
}
function fp(t) {
  return t == null || typeof t != 'object' || Object.isFrozen(t);
}
function hn(t) {
  var e = Cd[t];
  return e || Yt(18, t), e;
}
function ek(t, e) {
  Cd[t] || (Cd[t] = e);
}
function Td() {
  return go;
}
function qc(t, e) {
  e && (hn('Patches'), (t.u = []), (t.s = []), (t.v = e));
}
function _l(t) {
  Id(t), t.p.forEach(tk), (t.p = null);
}
function Id(t) {
  t === go && (go = t.l);
}
function Mg(t) {
  return (go = { p: [], l: go, h: t, m: !0, _: 0 });
}
function tk(t) {
  var e = t[Ee];
  e.i === 0 || e.i === 1 ? e.j() : (e.O = !0);
}
function Gc(t, e) {
  e._ = e.p.length;
  var n = e.p[0],
    r = t !== void 0 && t !== n;
  return (
    e.h.g || hn('ES5').S(e, t, r),
    r
      ? (n[Ee].P && (_l(e), Yt(4)),
        xn(t) && ((t = Tl(e, t)), e.l || Il(e, t)),
        e.u && hn('Patches').M(n[Ee].t, t, e.u, e.s))
      : (t = Tl(e, n, [])),
    _l(e),
    e.u && e.v(e.u, e.s),
    t !== Gw ? t : void 0
  );
}
function Tl(t, e, n) {
  if (fp(e)) return e;
  var r = e[Ee];
  if (!r)
    return (
      Yr(
        e,
        function (a, l) {
          return Fg(t, r, e, a, l, n);
        },
        !0
      ),
      e
    );
  if (r.A !== t) return e;
  if (!r.P) return Il(t, r.t, !0), r.t;
  if (!r.I) {
    (r.I = !0), r.A._--;
    var i = r.i === 4 || r.i === 5 ? (r.o = hp(r.k)) : r.o,
      s = i,
      o = !1;
    r.i === 3 && ((s = new Set(i)), i.clear(), (o = !0)),
      Yr(s, function (a, l) {
        return Fg(t, r, i, a, l, n, o);
      }),
      Il(t, i, !1),
      n && t.u && hn('Patches').N(r, n, t.u, t.s);
  }
  return r.o;
}
function Fg(t, e, n, r, i, s, o) {
  if (gr(i)) {
    var a = Tl(t, i, s && e && e.i !== 3 && !Oi(e.R, r) ? s.concat(r) : void 0);
    if ((Ww(n, r, a), !gr(a))) return;
    t.m = !1;
  } else o && n.add(i);
  if (xn(i) && !fp(i)) {
    if (!t.h.D && t._ < 1) return;
    Tl(t, i), (e && e.A.l) || Il(t, i);
  }
}
function Il(t, e, n) {
  n === void 0 && (n = !1), !t.l && t.h.D && t.m && dp(e, n);
}
function Qc(t, e) {
  var n = t[Ee];
  return (n ? Nr(n) : t)[e];
}
function Ug(t, e) {
  if (e in t)
    for (var n = Object.getPrototypeOf(t); n; ) {
      var r = Object.getOwnPropertyDescriptor(n, e);
      if (r) return r;
      n = Object.getPrototypeOf(n);
    }
}
function Kn(t) {
  t.P || ((t.P = !0), t.l && Kn(t.l));
}
function Xc(t) {
  t.o || (t.o = hp(t.t));
}
function kd(t, e, n) {
  var r = up(e)
    ? hn('MapSet').F(e, n)
    : cp(e)
    ? hn('MapSet').T(e, n)
    : t.g
    ? (function (i, s) {
        var o = Array.isArray(i),
          a = {
            i: o ? 1 : 0,
            A: s ? s.A : Td(),
            P: !1,
            I: !1,
            R: {},
            l: s,
            t: i,
            k: null,
            o: null,
            j: null,
            C: !1
          },
          l = a,
          u = yo;
        o && ((l = [a]), (u = Ps));
        var c = Proxy.revocable(l, u),
          h = c.revoke,
          d = c.proxy;
        return (a.k = d), (a.j = h), d;
      })(e, n)
    : hn('ES5').J(e, n);
  return (n ? n.A : Td()).p.push(r), r;
}
function nk(t) {
  return (
    gr(t) || Yt(22, t),
    (function e(n) {
      if (!xn(n)) return n;
      var r,
        i = n[Ee],
        s = cs(n);
      if (i) {
        if (!i.P && (i.i < 4 || !hn('ES5').K(i))) return i.t;
        (i.I = !0), (r = Vg(n, s)), (i.I = !1);
      } else r = Vg(n, s);
      return (
        Yr(r, function (o, a) {
          (i && JI(i.t, o) === a) || Ww(r, o, e(a));
        }),
        s === 3 ? new Set(r) : r
      );
    })(t)
  );
}
function Vg(t, e) {
  switch (e) {
    case 2:
      return new Map(t);
    case 3:
      return Array.from(t);
  }
  return hp(t);
}
function rk() {
  function t(s, o) {
    var a = i[s];
    return (
      a
        ? (a.enumerable = o)
        : (i[s] = a =
            {
              configurable: !0,
              enumerable: o,
              get: function () {
                var l = this[Ee];
                return yo.get(l, s);
              },
              set: function (l) {
                var u = this[Ee];
                yo.set(u, s, l);
              }
            }),
      a
    );
  }
  function e(s) {
    for (var o = s.length - 1; o >= 0; o--) {
      var a = s[o][Ee];
      if (!a.P)
        switch (a.i) {
          case 5:
            r(a) && Kn(a);
            break;
          case 4:
            n(a) && Kn(a);
        }
    }
  }
  function n(s) {
    for (var o = s.t, a = s.k, l = Li(a), u = l.length - 1; u >= 0; u--) {
      var c = l[u];
      if (c !== Ee) {
        var h = o[c];
        if (h === void 0 && !Oi(o, c)) return !0;
        var d = a[c],
          m = d && d[Ee];
        if (m ? m.t !== h : !qw(d, h)) return !0;
      }
    }
    var y = !!o[Ee];
    return l.length !== Li(o).length + (y ? 0 : 1);
  }
  function r(s) {
    var o = s.k;
    if (o.length !== s.t.length) return !0;
    var a = Object.getOwnPropertyDescriptor(o, o.length - 1);
    if (a && !a.get) return !0;
    for (var l = 0; l < o.length; l++) if (!o.hasOwnProperty(l)) return !0;
    return !1;
  }
  var i = {};
  ek('ES5', {
    J: function (s, o) {
      var a = Array.isArray(s),
        l = (function (c, h) {
          if (c) {
            for (var d = Array(h.length), m = 0; m < h.length; m++)
              Object.defineProperty(d, '' + m, t(m, !0));
            return d;
          }
          var y = Qw(h);
          delete y[Ee];
          for (var v = Li(y), S = 0; S < v.length; S++) {
            var p = v[S];
            y[p] = t(p, c || !!y[p].enumerable);
          }
          return Object.create(Object.getPrototypeOf(h), y);
        })(a, s),
        u = {
          i: a ? 5 : 4,
          A: o ? o.A : Td(),
          P: !1,
          I: !1,
          R: {},
          l: o,
          t: s,
          k: l,
          o: null,
          O: !1,
          C: !1
        };
      return Object.defineProperty(l, Ee, { value: u, writable: !0 }), l;
    },
    S: function (s, o, a) {
      a
        ? gr(o) && o[Ee].A === s && e(s.p)
        : (s.u &&
            (function l(u) {
              if (u && typeof u == 'object') {
                var c = u[Ee];
                if (c) {
                  var h = c.t,
                    d = c.k,
                    m = c.R,
                    y = c.i;
                  if (y === 4)
                    Yr(d, function (g) {
                      g !== Ee &&
                        (h[g] !== void 0 || Oi(h, g) ? m[g] || l(d[g]) : ((m[g] = !0), Kn(c)));
                    }),
                      Yr(h, function (g) {
                        d[g] !== void 0 || Oi(d, g) || ((m[g] = !1), Kn(c));
                      });
                  else if (y === 5) {
                    if ((r(c) && (Kn(c), (m.length = !0)), d.length < h.length))
                      for (var v = d.length; v < h.length; v++) m[v] = !1;
                    else for (var S = h.length; S < d.length; S++) m[S] = !0;
                    for (var p = Math.min(d.length, h.length), f = 0; f < p; f++)
                      d.hasOwnProperty(f) || (m[f] = !0), m[f] === void 0 && l(d[f]);
                  }
                }
              }
            })(s.p[0]),
          e(s.p));
    },
    K: function (s) {
      return s.i === 4 ? n(s) : r(s);
    }
  });
}
var jg,
  go,
  pp = typeof Symbol < 'u' && typeof Symbol('x') == 'symbol',
  ik = typeof Map < 'u',
  sk = typeof Set < 'u',
  zg = typeof Proxy < 'u' && Proxy.revocable !== void 0 && typeof Reflect < 'u',
  Gw = pp ? Symbol.for('immer-nothing') : (((jg = {})['immer-nothing'] = !0), jg),
  Bg = pp ? Symbol.for('immer-draftable') : '__$immer_draftable',
  Ee = pp ? Symbol.for('immer-state') : '__$immer_state',
  ok = '' + Object.prototype.constructor,
  Li =
    typeof Reflect < 'u' && Reflect.ownKeys
      ? Reflect.ownKeys
      : Object.getOwnPropertySymbols !== void 0
      ? function (t) {
          return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
        }
      : Object.getOwnPropertyNames,
  Qw =
    Object.getOwnPropertyDescriptors ||
    function (t) {
      var e = {};
      return (
        Li(t).forEach(function (n) {
          e[n] = Object.getOwnPropertyDescriptor(t, n);
        }),
        e
      );
    },
  Cd = {},
  yo = {
    get: function (t, e) {
      if (e === Ee) return t;
      var n = Nr(t);
      if (!Oi(n, e))
        return (function (i, s, o) {
          var a,
            l = Ug(s, o);
          return l
            ? 'value' in l
              ? l.value
              : (a = l.get) === null || a === void 0
              ? void 0
              : a.call(i.k)
            : void 0;
        })(t, n, e);
      var r = n[e];
      return t.I || !xn(r) ? r : r === Qc(t.t, e) ? (Xc(t), (t.o[e] = kd(t.A.h, r, t))) : r;
    },
    has: function (t, e) {
      return e in Nr(t);
    },
    ownKeys: function (t) {
      return Reflect.ownKeys(Nr(t));
    },
    set: function (t, e, n) {
      var r = Ug(Nr(t), e);
      if (r != null && r.set) return r.set.call(t.k, n), !0;
      if (!t.P) {
        var i = Qc(Nr(t), e),
          s = i == null ? void 0 : i[Ee];
        if (s && s.t === n) return (t.o[e] = n), (t.R[e] = !1), !0;
        if (qw(n, i) && (n !== void 0 || Oi(t.t, e))) return !0;
        Xc(t), Kn(t);
      }
      return (
        (t.o[e] === n && (n !== void 0 || e in t.o)) ||
          (Number.isNaN(n) && Number.isNaN(t.o[e])) ||
          ((t.o[e] = n), (t.R[e] = !0)),
        !0
      );
    },
    deleteProperty: function (t, e) {
      return (
        Qc(t.t, e) !== void 0 || e in t.t ? ((t.R[e] = !1), Xc(t), Kn(t)) : delete t.R[e],
        t.o && delete t.o[e],
        !0
      );
    },
    getOwnPropertyDescriptor: function (t, e) {
      var n = Nr(t),
        r = Reflect.getOwnPropertyDescriptor(n, e);
      return (
        r && {
          writable: !0,
          configurable: t.i !== 1 || e !== 'length',
          enumerable: r.enumerable,
          value: n[e]
        }
      );
    },
    defineProperty: function () {
      Yt(11);
    },
    getPrototypeOf: function (t) {
      return Object.getPrototypeOf(t.t);
    },
    setPrototypeOf: function () {
      Yt(12);
    }
  },
  Ps = {};
Yr(yo, function (t, e) {
  Ps[t] = function () {
    return (arguments[0] = arguments[0][0]), e.apply(this, arguments);
  };
}),
  (Ps.deleteProperty = function (t, e) {
    return Ps.set.call(this, t, e, void 0);
  }),
  (Ps.set = function (t, e, n) {
    return yo.set.call(this, t[0], e, n, t[0]);
  });
var ak = (function () {
    function t(n) {
      var r = this;
      (this.g = zg),
        (this.D = !0),
        (this.produce = function (i, s, o) {
          if (typeof i == 'function' && typeof s != 'function') {
            var a = s;
            s = i;
            var l = r;
            return function (v) {
              var S = this;
              v === void 0 && (v = a);
              for (var p = arguments.length, f = Array(p > 1 ? p - 1 : 0), g = 1; g < p; g++)
                f[g - 1] = arguments[g];
              return l.produce(v, function (E) {
                var _;
                return (_ = s).call.apply(_, [S, E].concat(f));
              });
            };
          }
          var u;
          if (
            (typeof s != 'function' && Yt(6),
            o !== void 0 && typeof o != 'function' && Yt(7),
            xn(i))
          ) {
            var c = Mg(r),
              h = kd(r, i, void 0),
              d = !0;
            try {
              (u = s(h)), (d = !1);
            } finally {
              d ? _l(c) : Id(c);
            }
            return typeof Promise < 'u' && u instanceof Promise
              ? u.then(
                  function (v) {
                    return qc(c, o), Gc(v, c);
                  },
                  function (v) {
                    throw (_l(c), v);
                  }
                )
              : (qc(c, o), Gc(u, c));
          }
          if (!i || typeof i != 'object') {
            if (((u = s(i)) === void 0 && (u = i), u === Gw && (u = void 0), r.D && dp(u, !0), o)) {
              var m = [],
                y = [];
              hn('Patches').M(i, u, m, y), o(m, y);
            }
            return u;
          }
          Yt(21, i);
        }),
        (this.produceWithPatches = function (i, s) {
          if (typeof i == 'function')
            return function (u) {
              for (var c = arguments.length, h = Array(c > 1 ? c - 1 : 0), d = 1; d < c; d++)
                h[d - 1] = arguments[d];
              return r.produceWithPatches(u, function (m) {
                return i.apply(void 0, [m].concat(h));
              });
            };
          var o,
            a,
            l = r.produce(i, s, function (u, c) {
              (o = u), (a = c);
            });
          return typeof Promise < 'u' && l instanceof Promise
            ? l.then(function (u) {
                return [u, o, a];
              })
            : [l, o, a];
        }),
        typeof (n == null ? void 0 : n.useProxies) == 'boolean' && this.setUseProxies(n.useProxies),
        typeof (n == null ? void 0 : n.autoFreeze) == 'boolean' && this.setAutoFreeze(n.autoFreeze);
    }
    var e = t.prototype;
    return (
      (e.createDraft = function (n) {
        xn(n) || Yt(8), gr(n) && (n = nk(n));
        var r = Mg(this),
          i = kd(this, n, void 0);
        return (i[Ee].C = !0), Id(r), i;
      }),
      (e.finishDraft = function (n, r) {
        var i = n && n[Ee],
          s = i.A;
        return qc(s, r), Gc(void 0, s);
      }),
      (e.setAutoFreeze = function (n) {
        this.D = n;
      }),
      (e.setUseProxies = function (n) {
        n && !zg && Yt(20), (this.g = n);
      }),
      (e.applyPatches = function (n, r) {
        var i;
        for (i = r.length - 1; i >= 0; i--) {
          var s = r[i];
          if (s.path.length === 0 && s.op === 'replace') {
            n = s.value;
            break;
          }
        }
        i > -1 && (r = r.slice(i + 1));
        var o = hn('Patches').$;
        return gr(n)
          ? o(n, r)
          : this.produce(n, function (a) {
              return o(a, r);
            });
      }),
      t
    );
  })(),
  Ot = new ak(),
  Xw = Ot.produce;
Ot.produceWithPatches.bind(Ot);
Ot.setAutoFreeze.bind(Ot);
Ot.setUseProxies.bind(Ot);
Ot.applyPatches.bind(Ot);
Ot.createDraft.bind(Ot);
Ot.finishDraft.bind(Ot);
function vo(t) {
  return (
    (vo =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == 'function' &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          }),
    vo(t)
  );
}
function lk(t, e) {
  if (vo(t) !== 'object' || t === null) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || 'default');
    if (vo(r) !== 'object') return r;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(t);
}
function uk(t) {
  var e = lk(t, 'string');
  return vo(e) === 'symbol' ? e : String(e);
}
function ck(t, e, n) {
  return (
    (e = uk(e)),
    e in t
      ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = n),
    t
  );
}
function Hg(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Kg(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Hg(Object(n), !0).forEach(function (r) {
          ck(t, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
      : Hg(Object(n)).forEach(function (r) {
          Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return t;
}
function st(t) {
  return (
    'Minified Redux error #' +
    t +
    '; visit https://redux.js.org/Errors?code=' +
    t +
    ' for the full message or use the non-minified dev environment for full errors. '
  );
}
var Wg = (function () {
    return (typeof Symbol == 'function' && Symbol.observable) || '@@observable';
  })(),
  Yc = function () {
    return Math.random().toString(36).substring(7).split('').join('.');
  },
  kl = {
    INIT: '@@redux/INIT' + Yc(),
    REPLACE: '@@redux/REPLACE' + Yc(),
    PROBE_UNKNOWN_ACTION: function () {
      return '@@redux/PROBE_UNKNOWN_ACTION' + Yc();
    }
  };
function hk(t) {
  if (typeof t != 'object' || t === null) return !1;
  for (var e = t; Object.getPrototypeOf(e) !== null; ) e = Object.getPrototypeOf(e);
  return Object.getPrototypeOf(t) === e;
}
function Yw(t, e, n) {
  var r;
  if (
    (typeof e == 'function' && typeof n == 'function') ||
    (typeof n == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(st(0));
  if ((typeof e == 'function' && typeof n > 'u' && ((n = e), (e = void 0)), typeof n < 'u')) {
    if (typeof n != 'function') throw new Error(st(1));
    return n(Yw)(t, e);
  }
  if (typeof t != 'function') throw new Error(st(2));
  var i = t,
    s = e,
    o = [],
    a = o,
    l = !1;
  function u() {
    a === o && (a = o.slice());
  }
  function c() {
    if (l) throw new Error(st(3));
    return s;
  }
  function h(v) {
    if (typeof v != 'function') throw new Error(st(4));
    if (l) throw new Error(st(5));
    var S = !0;
    return (
      u(),
      a.push(v),
      function () {
        if (S) {
          if (l) throw new Error(st(6));
          (S = !1), u();
          var f = a.indexOf(v);
          a.splice(f, 1), (o = null);
        }
      }
    );
  }
  function d(v) {
    if (!hk(v)) throw new Error(st(7));
    if (typeof v.type > 'u') throw new Error(st(8));
    if (l) throw new Error(st(9));
    try {
      (l = !0), (s = i(s, v));
    } finally {
      l = !1;
    }
    for (var S = (o = a), p = 0; p < S.length; p++) {
      var f = S[p];
      f();
    }
    return v;
  }
  function m(v) {
    if (typeof v != 'function') throw new Error(st(10));
    (i = v), d({ type: kl.REPLACE });
  }
  function y() {
    var v,
      S = h;
    return (
      (v = {
        subscribe: function (f) {
          if (typeof f != 'object' || f === null) throw new Error(st(11));
          function g() {
            f.next && f.next(c());
          }
          g();
          var E = S(g);
          return { unsubscribe: E };
        }
      }),
      (v[Wg] = function () {
        return this;
      }),
      v
    );
  }
  return (
    d({ type: kl.INIT }),
    (r = { dispatch: d, subscribe: h, getState: c, replaceReducer: m }),
    (r[Wg] = y),
    r
  );
}
function dk(t) {
  Object.keys(t).forEach(function (e) {
    var n = t[e],
      r = n(void 0, { type: kl.INIT });
    if (typeof r > 'u') throw new Error(st(12));
    if (typeof n(void 0, { type: kl.PROBE_UNKNOWN_ACTION() }) > 'u') throw new Error(st(13));
  });
}
function Jw(t) {
  for (var e = Object.keys(t), n = {}, r = 0; r < e.length; r++) {
    var i = e[r];
    typeof t[i] == 'function' && (n[i] = t[i]);
  }
  var s = Object.keys(n),
    o;
  try {
    dk(n);
  } catch (a) {
    o = a;
  }
  return function (l, u) {
    if ((l === void 0 && (l = {}), o)) throw o;
    for (var c = !1, h = {}, d = 0; d < s.length; d++) {
      var m = s[d],
        y = n[m],
        v = l[m],
        S = y(v, u);
      if (typeof S > 'u') throw (u && u.type, new Error(st(14)));
      (h[m] = S), (c = c || S !== v);
    }
    return (c = c || s.length !== Object.keys(l).length), c ? h : l;
  };
}
function Cl() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
  return e.length === 0
    ? function (r) {
        return r;
      }
    : e.length === 1
    ? e[0]
    : e.reduce(function (r, i) {
        return function () {
          return r(i.apply(void 0, arguments));
        };
      });
}
function fk() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
  return function (r) {
    return function () {
      var i = r.apply(void 0, arguments),
        s = function () {
          throw new Error(st(15));
        },
        o = {
          getState: i.getState,
          dispatch: function () {
            return s.apply(void 0, arguments);
          }
        },
        a = e.map(function (l) {
          return l(o);
        });
      return (s = Cl.apply(void 0, a)(i.dispatch)), Kg(Kg({}, i), {}, { dispatch: s });
    };
  };
}
function Zw(t) {
  var e = function (r) {
    var i = r.dispatch,
      s = r.getState;
    return function (o) {
      return function (a) {
        return typeof a == 'function' ? a(i, s, t) : o(a);
      };
    };
  };
  return e;
}
var e1 = Zw();
e1.withExtraArgument = Zw;
const qg = e1;
var pk =
    (globalThis && globalThis.__extends) ||
    (function () {
      var t = function (e, n) {
        return (
          (t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (r, i) {
                r.__proto__ = i;
              }) ||
            function (r, i) {
              for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (r[s] = i[s]);
            }),
          t(e, n)
        );
      };
      return function (e, n) {
        if (typeof n != 'function' && n !== null)
          throw new TypeError('Class extends value ' + String(n) + ' is not a constructor or null');
        t(e, n);
        function r() {
          this.constructor = e;
        }
        e.prototype = n === null ? Object.create(n) : ((r.prototype = n.prototype), new r());
      };
    })(),
  mk =
    (globalThis && globalThis.__generator) ||
    function (t, e) {
      var n = {
          label: 0,
          sent: function () {
            if (s[0] & 1) throw s[1];
            return s[1];
          },
          trys: [],
          ops: []
        },
        r,
        i,
        s,
        o;
      return (
        (o = { next: a(0), throw: a(1), return: a(2) }),
        typeof Symbol == 'function' &&
          (o[Symbol.iterator] = function () {
            return this;
          }),
        o
      );
      function a(u) {
        return function (c) {
          return l([u, c]);
        };
      }
      function l(u) {
        if (r) throw new TypeError('Generator is already executing.');
        for (; n; )
          try {
            if (
              ((r = 1),
              i &&
                (s =
                  u[0] & 2
                    ? i.return
                    : u[0]
                    ? i.throw || ((s = i.return) && s.call(i), 0)
                    : i.next) &&
                !(s = s.call(i, u[1])).done)
            )
              return s;
            switch (((i = 0), s && (u = [u[0] & 2, s.value]), u[0])) {
              case 0:
              case 1:
                s = u;
                break;
              case 4:
                return n.label++, { value: u[1], done: !1 };
              case 5:
                n.label++, (i = u[1]), (u = [0]);
                continue;
              case 7:
                (u = n.ops.pop()), n.trys.pop();
                continue;
              default:
                if (
                  ((s = n.trys),
                  !(s = s.length > 0 && s[s.length - 1]) && (u[0] === 6 || u[0] === 2))
                ) {
                  n = 0;
                  continue;
                }
                if (u[0] === 3 && (!s || (u[1] > s[0] && u[1] < s[3]))) {
                  n.label = u[1];
                  break;
                }
                if (u[0] === 6 && n.label < s[1]) {
                  (n.label = s[1]), (s = u);
                  break;
                }
                if (s && n.label < s[2]) {
                  (n.label = s[2]), n.ops.push(u);
                  break;
                }
                s[2] && n.ops.pop(), n.trys.pop();
                continue;
            }
            u = e.call(t, n);
          } catch (c) {
            (u = [6, c]), (i = 0);
          } finally {
            r = s = 0;
          }
        if (u[0] & 5) throw u[1];
        return { value: u[0] ? u[1] : void 0, done: !0 };
      }
    },
  Al =
    (globalThis && globalThis.__spreadArray) ||
    function (t, e) {
      for (var n = 0, r = e.length, i = t.length; n < r; n++, i++) t[i] = e[n];
      return t;
    },
  gk = Object.defineProperty,
  yk = Object.defineProperties,
  vk = Object.getOwnPropertyDescriptors,
  Gg = Object.getOwnPropertySymbols,
  wk = Object.prototype.hasOwnProperty,
  Ek = Object.prototype.propertyIsEnumerable,
  Qg = function (t, e, n) {
    return e in t
      ? gk(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n);
  },
  ur = function (t, e) {
    for (var n in e || (e = {})) wk.call(e, n) && Qg(t, n, e[n]);
    if (Gg)
      for (var r = 0, i = Gg(e); r < i.length; r++) {
        var n = i[r];
        Ek.call(e, n) && Qg(t, n, e[n]);
      }
    return t;
  },
  Jc = function (t, e) {
    return yk(t, vk(e));
  },
  Sk = function (t, e, n) {
    return new Promise(function (r, i) {
      var s = function (l) {
          try {
            a(n.next(l));
          } catch (u) {
            i(u);
          }
        },
        o = function (l) {
          try {
            a(n.throw(l));
          } catch (u) {
            i(u);
          }
        },
        a = function (l) {
          return l.done ? r(l.value) : Promise.resolve(l.value).then(s, o);
        };
      a((n = n.apply(t, e)).next());
    });
  },
  _k =
    typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == 'object' ? Cl : Cl.apply(null, arguments);
        };
function Tk(t) {
  if (typeof t != 'object' || t === null) return !1;
  var e = Object.getPrototypeOf(t);
  if (e === null) return !0;
  for (var n = e; Object.getPrototypeOf(n) !== null; ) n = Object.getPrototypeOf(n);
  return e === n;
}
var Ik = (function (t) {
  pk(e, t);
  function e() {
    for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
    var i = t.apply(this, n) || this;
    return Object.setPrototypeOf(i, e.prototype), i;
  }
  return (
    Object.defineProperty(e, Symbol.species, {
      get: function () {
        return e;
      },
      enumerable: !1,
      configurable: !0
    }),
    (e.prototype.concat = function () {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      return t.prototype.concat.apply(this, n);
    }),
    (e.prototype.prepend = function () {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      return n.length === 1 && Array.isArray(n[0])
        ? new (e.bind.apply(e, Al([void 0], n[0].concat(this))))()
        : new (e.bind.apply(e, Al([void 0], n.concat(this))))();
    }),
    e
  );
})(Array);
function Ad(t) {
  return xn(t) ? Xw(t, function () {}) : t;
}
function kk(t) {
  return typeof t == 'boolean';
}
function Ck() {
  return function (e) {
    return Ak(e);
  };
}
function Ak(t) {
  t === void 0 && (t = {});
  var e = t.thunk,
    n = e === void 0 ? !0 : e;
  t.immutableCheck, t.serializableCheck;
  var r = new Ik();
  return n && (kk(n) ? r.push(qg) : r.push(qg.withExtraArgument(n.extraArgument))), r;
}
var Nk = !0;
function Rk(t) {
  var e = Ck(),
    n = t || {},
    r = n.reducer,
    i = r === void 0 ? void 0 : r,
    s = n.middleware,
    o = s === void 0 ? e() : s,
    a = n.devTools,
    l = a === void 0 ? !0 : a,
    u = n.preloadedState,
    c = u === void 0 ? void 0 : u,
    h = n.enhancers,
    d = h === void 0 ? void 0 : h,
    m;
  if (typeof i == 'function') m = i;
  else if (Tk(i)) m = Jw(i);
  else
    throw new Error(
      '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
    );
  var y = o;
  typeof y == 'function' && (y = y(e));
  var v = fk.apply(void 0, y),
    S = Cl;
  l && (S = _k(ur({ trace: !Nk }, typeof l == 'object' && l)));
  var p = [v];
  Array.isArray(d) ? (p = Al([v], d)) : typeof d == 'function' && (p = d(p));
  var f = S.apply(void 0, p);
  return Yw(m, c, f);
}
function cr(t, e) {
  function n() {
    for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
    if (e) {
      var s = e.apply(void 0, r);
      if (!s) throw new Error('prepareAction did not return an object');
      return ur(
        ur({ type: t, payload: s.payload }, 'meta' in s && { meta: s.meta }),
        'error' in s && { error: s.error }
      );
    }
    return { type: t, payload: r[0] };
  }
  return (
    (n.toString = function () {
      return '' + t;
    }),
    (n.type = t),
    (n.match = function (r) {
      return r.type === t;
    }),
    n
  );
}
function t1(t) {
  var e = {},
    n = [],
    r,
    i = {
      addCase: function (s, o) {
        var a = typeof s == 'string' ? s : s.type;
        if (a in e)
          throw new Error('addCase cannot be called with two reducers for the same action type');
        return (e[a] = o), i;
      },
      addMatcher: function (s, o) {
        return n.push({ matcher: s, reducer: o }), i;
      },
      addDefaultCase: function (s) {
        return (r = s), i;
      }
    };
  return t(i), [e, n, r];
}
function xk(t) {
  return typeof t == 'function';
}
function Dk(t, e, n, r) {
  n === void 0 && (n = []);
  var i = typeof e == 'function' ? t1(e) : [e, n, r],
    s = i[0],
    o = i[1],
    a = i[2],
    l;
  if (xk(t))
    l = function () {
      return Ad(t());
    };
  else {
    var u = Ad(t);
    l = function () {
      return u;
    };
  }
  function c(h, d) {
    h === void 0 && (h = l());
    var m = Al(
      [s[d.type]],
      o
        .filter(function (y) {
          var v = y.matcher;
          return v(d);
        })
        .map(function (y) {
          var v = y.reducer;
          return v;
        })
    );
    return (
      m.filter(function (y) {
        return !!y;
      }).length === 0 && (m = [a]),
      m.reduce(function (y, v) {
        if (v)
          if (gr(y)) {
            var S = y,
              p = v(S, d);
            return p === void 0 ? y : p;
          } else {
            if (xn(y))
              return Xw(y, function (f) {
                return v(f, d);
              });
            var p = v(y, d);
            if (p === void 0) {
              if (y === null) return y;
              throw Error('A case reducer on a non-draftable value must not return undefined');
            }
            return p;
          }
        return y;
      }, h)
    );
  }
  return (c.getInitialState = l), c;
}
function Pk(t, e) {
  return t + '/' + e;
}
function Ok(t) {
  var e = t.name;
  if (!e) throw new Error('`name` is a required option for createSlice');
  typeof process < 'u';
  var n = typeof t.initialState == 'function' ? t.initialState : Ad(t.initialState),
    r = t.reducers || {},
    i = Object.keys(r),
    s = {},
    o = {},
    a = {};
  i.forEach(function (c) {
    var h = r[c],
      d = Pk(e, c),
      m,
      y;
    'reducer' in h ? ((m = h.reducer), (y = h.prepare)) : (m = h),
      (s[c] = m),
      (o[d] = m),
      (a[c] = y ? cr(d, y) : cr(d));
  });
  function l() {
    var c = typeof t.extraReducers == 'function' ? t1(t.extraReducers) : [t.extraReducers],
      h = c[0],
      d = h === void 0 ? {} : h,
      m = c[1],
      y = m === void 0 ? [] : m,
      v = c[2],
      S = v === void 0 ? void 0 : v,
      p = ur(ur({}, d), o);
    return Dk(n, function (f) {
      for (var g in p) f.addCase(g, p[g]);
      for (var E = 0, _ = y; E < _.length; E++) {
        var R = _[E];
        f.addMatcher(R.matcher, R.reducer);
      }
      S && f.addDefaultCase(S);
    });
  }
  var u;
  return {
    name: e,
    reducer: function (c, h) {
      return u || (u = l()), u(c, h);
    },
    actions: a,
    caseReducers: s,
    getInitialState: function () {
      return u || (u = l()), u.getInitialState();
    }
  };
}
var Lk = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW',
  $k = function (t) {
    t === void 0 && (t = 21);
    for (var e = '', n = t; n--; ) e += Lk[(Math.random() * 64) | 0];
    return e;
  },
  bk = ['name', 'message', 'stack', 'code'],
  Zc = (function () {
    function t(e, n) {
      (this.payload = e), (this.meta = n);
    }
    return t;
  })(),
  Xg = (function () {
    function t(e, n) {
      (this.payload = e), (this.meta = n);
    }
    return t;
  })(),
  Mk = function (t) {
    if (typeof t == 'object' && t !== null) {
      for (var e = {}, n = 0, r = bk; n < r.length; n++) {
        var i = r[n];
        typeof t[i] == 'string' && (e[i] = t[i]);
      }
      return e;
    }
    return { message: String(t) };
  },
  n1 = (function () {
    function t(e, n, r) {
      var i = cr(e + '/fulfilled', function (u, c, h, d) {
          return {
            payload: u,
            meta: Jc(ur({}, d || {}), { arg: h, requestId: c, requestStatus: 'fulfilled' })
          };
        }),
        s = cr(e + '/pending', function (u, c, h) {
          return {
            payload: void 0,
            meta: Jc(ur({}, h || {}), { arg: c, requestId: u, requestStatus: 'pending' })
          };
        }),
        o = cr(e + '/rejected', function (u, c, h, d, m) {
          return {
            payload: d,
            error: ((r && r.serializeError) || Mk)(u || 'Rejected'),
            meta: Jc(ur({}, m || {}), {
              arg: h,
              requestId: c,
              rejectedWithValue: !!d,
              requestStatus: 'rejected',
              aborted: (u == null ? void 0 : u.name) === 'AbortError',
              condition: (u == null ? void 0 : u.name) === 'ConditionError'
            })
          };
        }),
        a =
          typeof AbortController < 'u'
            ? AbortController
            : (function () {
                function u() {
                  this.signal = {
                    aborted: !1,
                    addEventListener: function () {},
                    dispatchEvent: function () {
                      return !1;
                    },
                    onabort: function () {},
                    removeEventListener: function () {},
                    reason: void 0,
                    throwIfAborted: function () {}
                  };
                }
                return (u.prototype.abort = function () {}), u;
              })();
      function l(u) {
        return function (c, h, d) {
          var m = r != null && r.idGenerator ? r.idGenerator(u) : $k(),
            y = new a(),
            v;
          function S(f) {
            (v = f), y.abort();
          }
          var p = (function () {
            return Sk(this, null, function () {
              var f, g, E, _, R, x, P;
              return mk(this, function (B) {
                switch (B.label) {
                  case 0:
                    return (
                      B.trys.push([0, 4, , 5]),
                      (_ =
                        (f = r == null ? void 0 : r.condition) == null
                          ? void 0
                          : f.call(r, u, { getState: h, extra: d })),
                      Uk(_) ? [4, _] : [3, 2]
                    );
                  case 1:
                    (_ = B.sent()), (B.label = 2);
                  case 2:
                    if (_ === !1 || y.signal.aborted)
                      throw {
                        name: 'ConditionError',
                        message: 'Aborted due to condition callback returning false.'
                      };
                    return (
                      (R = new Promise(function (b, te) {
                        return y.signal.addEventListener('abort', function () {
                          return te({ name: 'AbortError', message: v || 'Aborted' });
                        });
                      })),
                      c(
                        s(
                          m,
                          u,
                          (g = r == null ? void 0 : r.getPendingMeta) == null
                            ? void 0
                            : g.call(r, { requestId: m, arg: u }, { getState: h, extra: d })
                        )
                      ),
                      [
                        4,
                        Promise.race([
                          R,
                          Promise.resolve(
                            n(u, {
                              dispatch: c,
                              getState: h,
                              extra: d,
                              requestId: m,
                              signal: y.signal,
                              abort: S,
                              rejectWithValue: function (b, te) {
                                return new Zc(b, te);
                              },
                              fulfillWithValue: function (b, te) {
                                return new Xg(b, te);
                              }
                            })
                          ).then(function (b) {
                            if (b instanceof Zc) throw b;
                            return b instanceof Xg ? i(b.payload, m, u, b.meta) : i(b, m, u);
                          })
                        ])
                      ]
                    );
                  case 3:
                    return (E = B.sent()), [3, 5];
                  case 4:
                    return (
                      (x = B.sent()),
                      (E = x instanceof Zc ? o(null, m, u, x.payload, x.meta) : o(x, m, u)),
                      [3, 5]
                    );
                  case 5:
                    return (
                      (P = r && !r.dispatchConditionRejection && o.match(E) && E.meta.condition),
                      P || c(E),
                      [2, E]
                    );
                }
              });
            });
          })();
          return Object.assign(p, {
            abort: S,
            requestId: m,
            arg: u,
            unwrap: function () {
              return p.then(Fk);
            }
          });
        };
      }
      return Object.assign(l, { pending: s, rejected: o, fulfilled: i, typePrefix: e });
    }
    return (
      (t.withTypes = function () {
        return t;
      }),
      t
    );
  })();
function Fk(t) {
  if (t.meta && t.meta.rejectedWithValue) throw t.payload;
  if (t.error) throw t.error;
  return t.payload;
}
function Uk(t) {
  return t !== null && typeof t == 'object' && typeof t.then == 'function';
}
var mp = 'listenerMiddleware';
cr(mp + '/add');
cr(mp + '/removeAll');
cr(mp + '/remove');
var Yg;
typeof queueMicrotask == 'function' &&
  queueMicrotask.bind(typeof window < 'u' ? window : typeof global < 'u' ? global : globalThis);
rk();
var Nd = {},
  Vk = {
    get exports() {
      return Nd;
    },
    set exports(t) {
      Nd = t;
    }
  },
  r1 = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yi = N;
function jk(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var zk = typeof Object.is == 'function' ? Object.is : jk,
  Bk = Yi.useState,
  Hk = Yi.useEffect,
  Kk = Yi.useLayoutEffect,
  Wk = Yi.useDebugValue;
function qk(t, e) {
  var n = e(),
    r = Bk({ inst: { value: n, getSnapshot: e } }),
    i = r[0].inst,
    s = r[1];
  return (
    Kk(
      function () {
        (i.value = n), (i.getSnapshot = e), eh(i) && s({ inst: i });
      },
      [t, n, e]
    ),
    Hk(
      function () {
        return (
          eh(i) && s({ inst: i }),
          t(function () {
            eh(i) && s({ inst: i });
          })
        );
      },
      [t]
    ),
    Wk(n),
    n
  );
}
function eh(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !zk(t, n);
  } catch {
    return !0;
  }
}
function Gk(t, e) {
  return e();
}
var Qk =
  typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'
    ? Gk
    : qk;
r1.useSyncExternalStore = Yi.useSyncExternalStore !== void 0 ? Yi.useSyncExternalStore : Qk;
(function (t) {
  t.exports = r1;
})(Vk);
var Jg = {},
  Xk = {
    get exports() {
      return Jg;
    },
    set exports(t) {
      Jg = t;
    }
  },
  i1 = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yu = N,
  Yk = Nd;
function Jk(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var Zk = typeof Object.is == 'function' ? Object.is : Jk,
  eC = Yk.useSyncExternalStore,
  tC = yu.useRef,
  nC = yu.useEffect,
  rC = yu.useMemo,
  iC = yu.useDebugValue;
i1.useSyncExternalStoreWithSelector = function (t, e, n, r, i) {
  var s = tC(null);
  if (s.current === null) {
    var o = { hasValue: !1, value: null };
    s.current = o;
  } else o = s.current;
  s = rC(
    function () {
      function l(m) {
        if (!u) {
          if (((u = !0), (c = m), (m = r(m)), i !== void 0 && o.hasValue)) {
            var y = o.value;
            if (i(y, m)) return (h = y);
          }
          return (h = m);
        }
        if (((y = h), Zk(c, m))) return y;
        var v = r(m);
        return i !== void 0 && i(y, v) ? y : ((c = m), (h = v));
      }
      var u = !1,
        c,
        h,
        d = n === void 0 ? null : n;
      return [
        function () {
          return l(e());
        },
        d === null
          ? void 0
          : function () {
              return l(d());
            }
      ];
    },
    [e, n, r, i]
  );
  var a = eC(t, s[0], s[1]);
  return (
    nC(
      function () {
        (o.hasValue = !0), (o.value = a);
      },
      [a]
    ),
    iC(a),
    a
  );
};
(function (t) {
  t.exports = i1;
})(Xk);
function sC(t) {
  t();
}
let s1 = sC;
const oC = (t) => (s1 = t),
  aC = () => s1,
  Ji = N.createContext(null);
function lC() {
  return N.useContext(Ji);
}
var Rd = {},
  uC = {
    get exports() {
      return Rd;
    },
    set exports(t) {
      Rd = t;
    }
  },
  he = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ge = typeof Symbol == 'function' && Symbol.for,
  gp = Ge ? Symbol.for('react.element') : 60103,
  yp = Ge ? Symbol.for('react.portal') : 60106,
  vu = Ge ? Symbol.for('react.fragment') : 60107,
  wu = Ge ? Symbol.for('react.strict_mode') : 60108,
  Eu = Ge ? Symbol.for('react.profiler') : 60114,
  Su = Ge ? Symbol.for('react.provider') : 60109,
  _u = Ge ? Symbol.for('react.context') : 60110,
  vp = Ge ? Symbol.for('react.async_mode') : 60111,
  Tu = Ge ? Symbol.for('react.concurrent_mode') : 60111,
  Iu = Ge ? Symbol.for('react.forward_ref') : 60112,
  ku = Ge ? Symbol.for('react.suspense') : 60113,
  cC = Ge ? Symbol.for('react.suspense_list') : 60120,
  Cu = Ge ? Symbol.for('react.memo') : 60115,
  Au = Ge ? Symbol.for('react.lazy') : 60116,
  hC = Ge ? Symbol.for('react.block') : 60121,
  dC = Ge ? Symbol.for('react.fundamental') : 60117,
  fC = Ge ? Symbol.for('react.responder') : 60118,
  pC = Ge ? Symbol.for('react.scope') : 60119;
function Mt(t) {
  if (typeof t == 'object' && t !== null) {
    var e = t.$$typeof;
    switch (e) {
      case gp:
        switch (((t = t.type), t)) {
          case vp:
          case Tu:
          case vu:
          case Eu:
          case wu:
          case ku:
            return t;
          default:
            switch (((t = t && t.$$typeof), t)) {
              case _u:
              case Iu:
              case Au:
              case Cu:
              case Su:
                return t;
              default:
                return e;
            }
        }
      case yp:
        return e;
    }
  }
}
function o1(t) {
  return Mt(t) === Tu;
}
he.AsyncMode = vp;
he.ConcurrentMode = Tu;
he.ContextConsumer = _u;
he.ContextProvider = Su;
he.Element = gp;
he.ForwardRef = Iu;
he.Fragment = vu;
he.Lazy = Au;
he.Memo = Cu;
he.Portal = yp;
he.Profiler = Eu;
he.StrictMode = wu;
he.Suspense = ku;
he.isAsyncMode = function (t) {
  return o1(t) || Mt(t) === vp;
};
he.isConcurrentMode = o1;
he.isContextConsumer = function (t) {
  return Mt(t) === _u;
};
he.isContextProvider = function (t) {
  return Mt(t) === Su;
};
he.isElement = function (t) {
  return typeof t == 'object' && t !== null && t.$$typeof === gp;
};
he.isForwardRef = function (t) {
  return Mt(t) === Iu;
};
he.isFragment = function (t) {
  return Mt(t) === vu;
};
he.isLazy = function (t) {
  return Mt(t) === Au;
};
he.isMemo = function (t) {
  return Mt(t) === Cu;
};
he.isPortal = function (t) {
  return Mt(t) === yp;
};
he.isProfiler = function (t) {
  return Mt(t) === Eu;
};
he.isStrictMode = function (t) {
  return Mt(t) === wu;
};
he.isSuspense = function (t) {
  return Mt(t) === ku;
};
he.isValidElementType = function (t) {
  return (
    typeof t == 'string' ||
    typeof t == 'function' ||
    t === vu ||
    t === Tu ||
    t === Eu ||
    t === wu ||
    t === ku ||
    t === cC ||
    (typeof t == 'object' &&
      t !== null &&
      (t.$$typeof === Au ||
        t.$$typeof === Cu ||
        t.$$typeof === Su ||
        t.$$typeof === _u ||
        t.$$typeof === Iu ||
        t.$$typeof === dC ||
        t.$$typeof === fC ||
        t.$$typeof === pC ||
        t.$$typeof === hC))
  );
};
he.typeOf = Mt;
(function (t) {
  t.exports = he;
})(uC);
var a1 = Rd,
  mC = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
  gC = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
  l1 = {};
l1[a1.ForwardRef] = mC;
l1[a1.Memo] = gC;
var Zg = {},
  yC = {
    get exports() {
      return Zg;
    },
    set exports(t) {
      Zg = t;
    }
  },
  de = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wp = Symbol.for('react.element'),
  Ep = Symbol.for('react.portal'),
  Nu = Symbol.for('react.fragment'),
  Ru = Symbol.for('react.strict_mode'),
  xu = Symbol.for('react.profiler'),
  Du = Symbol.for('react.provider'),
  Pu = Symbol.for('react.context'),
  vC = Symbol.for('react.server_context'),
  Ou = Symbol.for('react.forward_ref'),
  Lu = Symbol.for('react.suspense'),
  $u = Symbol.for('react.suspense_list'),
  bu = Symbol.for('react.memo'),
  Mu = Symbol.for('react.lazy'),
  wC = Symbol.for('react.offscreen'),
  u1;
u1 = Symbol.for('react.module.reference');
function Kt(t) {
  if (typeof t == 'object' && t !== null) {
    var e = t.$$typeof;
    switch (e) {
      case wp:
        switch (((t = t.type), t)) {
          case Nu:
          case xu:
          case Ru:
          case Lu:
          case $u:
            return t;
          default:
            switch (((t = t && t.$$typeof), t)) {
              case vC:
              case Pu:
              case Ou:
              case Mu:
              case bu:
              case Du:
                return t;
              default:
                return e;
            }
        }
      case Ep:
        return e;
    }
  }
}
de.ContextConsumer = Pu;
de.ContextProvider = Du;
de.Element = wp;
de.ForwardRef = Ou;
de.Fragment = Nu;
de.Lazy = Mu;
de.Memo = bu;
de.Portal = Ep;
de.Profiler = xu;
de.StrictMode = Ru;
de.Suspense = Lu;
de.SuspenseList = $u;
de.isAsyncMode = function () {
  return !1;
};
de.isConcurrentMode = function () {
  return !1;
};
de.isContextConsumer = function (t) {
  return Kt(t) === Pu;
};
de.isContextProvider = function (t) {
  return Kt(t) === Du;
};
de.isElement = function (t) {
  return typeof t == 'object' && t !== null && t.$$typeof === wp;
};
de.isForwardRef = function (t) {
  return Kt(t) === Ou;
};
de.isFragment = function (t) {
  return Kt(t) === Nu;
};
de.isLazy = function (t) {
  return Kt(t) === Mu;
};
de.isMemo = function (t) {
  return Kt(t) === bu;
};
de.isPortal = function (t) {
  return Kt(t) === Ep;
};
de.isProfiler = function (t) {
  return Kt(t) === xu;
};
de.isStrictMode = function (t) {
  return Kt(t) === Ru;
};
de.isSuspense = function (t) {
  return Kt(t) === Lu;
};
de.isSuspenseList = function (t) {
  return Kt(t) === $u;
};
de.isValidElementType = function (t) {
  return (
    typeof t == 'string' ||
    typeof t == 'function' ||
    t === Nu ||
    t === xu ||
    t === Ru ||
    t === Lu ||
    t === $u ||
    t === wC ||
    (typeof t == 'object' &&
      t !== null &&
      (t.$$typeof === Mu ||
        t.$$typeof === bu ||
        t.$$typeof === Du ||
        t.$$typeof === Pu ||
        t.$$typeof === Ou ||
        t.$$typeof === u1 ||
        t.getModuleId !== void 0))
  );
};
de.typeOf = Kt;
(function (t) {
  t.exports = de;
})(yC);
function EC() {
  const t = aC();
  let e = null,
    n = null;
  return {
    clear() {
      (e = null), (n = null);
    },
    notify() {
      t(() => {
        let r = e;
        for (; r; ) r.callback(), (r = r.next);
      });
    },
    get() {
      let r = [],
        i = e;
      for (; i; ) r.push(i), (i = i.next);
      return r;
    },
    subscribe(r) {
      let i = !0,
        s = (n = { callback: r, next: null, prev: n });
      return (
        s.prev ? (s.prev.next = s) : (e = s),
        function () {
          !i ||
            e === null ||
            ((i = !1),
            s.next ? (s.next.prev = s.prev) : (n = s.prev),
            s.prev ? (s.prev.next = s.next) : (e = s.next));
        }
      );
    }
  };
}
const ey = { notify() {}, get: () => [] };
function SC(t, e) {
  let n,
    r = ey;
  function i(h) {
    return l(), r.subscribe(h);
  }
  function s() {
    r.notify();
  }
  function o() {
    c.onStateChange && c.onStateChange();
  }
  function a() {
    return Boolean(n);
  }
  function l() {
    n || ((n = e ? e.addNestedSub(o) : t.subscribe(o)), (r = EC()));
  }
  function u() {
    n && (n(), (n = void 0), r.clear(), (r = ey));
  }
  const c = {
    addNestedSub: i,
    notifyNestedSubs: s,
    handleChangeWrapper: o,
    isSubscribed: a,
    trySubscribe: l,
    tryUnsubscribe: u,
    getListeners: () => r
  };
  return c;
}
const _C =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  TC = _C ? N.useLayoutEffect : N.useEffect;
function IC({ store: t, context: e, children: n, serverState: r }) {
  const i = N.useMemo(() => {
      const a = SC(t);
      return { store: t, subscription: a, getServerState: r ? () => r : void 0 };
    }, [t, r]),
    s = N.useMemo(() => t.getState(), [t]);
  TC(() => {
    const { subscription: a } = i;
    return (
      (a.onStateChange = a.notifyNestedSubs),
      a.trySubscribe(),
      s !== t.getState() && a.notifyNestedSubs(),
      () => {
        a.tryUnsubscribe(), (a.onStateChange = void 0);
      }
    );
  }, [i, s]);
  const o = e || Ji;
  return ne.createElement(o.Provider, { value: i }, n);
}
function c1(t = Ji) {
  const e = t === Ji ? lC : () => N.useContext(t);
  return function () {
    const { store: r } = e();
    return r;
  };
}
const kC = c1();
function CC(t = Ji) {
  const e = t === Ji ? kC : c1(t);
  return function () {
    return e().dispatch;
  };
}
const AC = CC();
oC(Ya.unstable_batchedUpdates);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const h1 = function (t) {
    const e = [];
    let n = 0;
    for (let r = 0; r < t.length; r++) {
      let i = t.charCodeAt(r);
      i < 128
        ? (e[n++] = i)
        : i < 2048
        ? ((e[n++] = (i >> 6) | 192), (e[n++] = (i & 63) | 128))
        : (i & 64512) === 55296 && r + 1 < t.length && (t.charCodeAt(r + 1) & 64512) === 56320
        ? ((i = 65536 + ((i & 1023) << 10) + (t.charCodeAt(++r) & 1023)),
          (e[n++] = (i >> 18) | 240),
          (e[n++] = ((i >> 12) & 63) | 128),
          (e[n++] = ((i >> 6) & 63) | 128),
          (e[n++] = (i & 63) | 128))
        : ((e[n++] = (i >> 12) | 224), (e[n++] = ((i >> 6) & 63) | 128), (e[n++] = (i & 63) | 128));
    }
    return e;
  },
  NC = function (t) {
    const e = [];
    let n = 0,
      r = 0;
    for (; n < t.length; ) {
      const i = t[n++];
      if (i < 128) e[r++] = String.fromCharCode(i);
      else if (i > 191 && i < 224) {
        const s = t[n++];
        e[r++] = String.fromCharCode(((i & 31) << 6) | (s & 63));
      } else if (i > 239 && i < 365) {
        const s = t[n++],
          o = t[n++],
          a = t[n++],
          l = (((i & 7) << 18) | ((s & 63) << 12) | ((o & 63) << 6) | (a & 63)) - 65536;
        (e[r++] = String.fromCharCode(55296 + (l >> 10))),
          (e[r++] = String.fromCharCode(56320 + (l & 1023)));
      } else {
        const s = t[n++],
          o = t[n++];
        e[r++] = String.fromCharCode(((i & 15) << 12) | ((s & 63) << 6) | (o & 63));
      }
    }
    return e.join('');
  },
  d1 = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + '+/=';
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + '-_.';
    },
    HAS_NATIVE_SUPPORT: typeof atob == 'function',
    encodeByteArray(t, e) {
      if (!Array.isArray(t)) throw Error('encodeByteArray takes an array as a parameter');
      this.init_();
      const n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        r = [];
      for (let i = 0; i < t.length; i += 3) {
        const s = t[i],
          o = i + 1 < t.length,
          a = o ? t[i + 1] : 0,
          l = i + 2 < t.length,
          u = l ? t[i + 2] : 0,
          c = s >> 2,
          h = ((s & 3) << 4) | (a >> 4);
        let d = ((a & 15) << 2) | (u >> 6),
          m = u & 63;
        l || ((m = 64), o || (d = 64)), r.push(n[c], n[h], n[d], n[m]);
      }
      return r.join('');
    },
    encodeString(t, e) {
      return this.HAS_NATIVE_SUPPORT && !e ? btoa(t) : this.encodeByteArray(h1(t), e);
    },
    decodeString(t, e) {
      return this.HAS_NATIVE_SUPPORT && !e ? atob(t) : NC(this.decodeStringToByteArray(t, e));
    },
    decodeStringToByteArray(t, e) {
      this.init_();
      const n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        r = [];
      for (let i = 0; i < t.length; ) {
        const s = n[t.charAt(i++)],
          a = i < t.length ? n[t.charAt(i)] : 0;
        ++i;
        const u = i < t.length ? n[t.charAt(i)] : 64;
        ++i;
        const h = i < t.length ? n[t.charAt(i)] : 64;
        if ((++i, s == null || a == null || u == null || h == null)) throw new RC();
        const d = (s << 2) | (a >> 4);
        if ((r.push(d), u !== 64)) {
          const m = ((a << 4) & 240) | (u >> 2);
          if ((r.push(m), h !== 64)) {
            const y = ((u << 6) & 192) | h;
            r.push(y);
          }
        }
      }
      return r;
    },
    init_() {
      if (!this.byteToCharMap_) {
        (this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {});
        for (let t = 0; t < this.ENCODED_VALS.length; t++)
          (this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t)),
            (this.charToByteMap_[this.byteToCharMap_[t]] = t),
            (this.byteToCharMapWebSafe_[t] = this.ENCODED_VALS_WEBSAFE.charAt(t)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t),
            t >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t));
      }
    }
  };
class RC extends Error {
  constructor() {
    super(...arguments), (this.name = 'DecodeBase64StringError');
  }
}
const xC = function (t) {
    const e = h1(t);
    return d1.encodeByteArray(e, !0);
  },
  Nl = function (t) {
    return xC(t).replace(/\./g, '');
  },
  f1 = function (t) {
    try {
      return d1.decodeString(t, !0);
    } catch (e) {
      console.error('base64Decode failed: ', e);
    }
    return null;
  };
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function DC() {
  if (typeof self < 'u') return self;
  if (typeof window < 'u') return window;
  if (typeof global < 'u') return global;
  throw new Error('Unable to locate global object.');
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const PC = () => DC().__FIREBASE_DEFAULTS__,
  OC = () => {
    if (typeof process > 'u' || typeof process.env > 'u') return;
    const t = {}.__FIREBASE_DEFAULTS__;
    if (t) return JSON.parse(t);
  },
  LC = () => {
    if (typeof document > 'u') return;
    let t;
    try {
      t = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const e = t && f1(t[1]);
    return e && JSON.parse(e);
  },
  Sp = () => {
    try {
      return PC() || OC() || LC();
    } catch (t) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);
      return;
    }
  },
  p1 = (t) => {
    var e, n;
    return (n = (e = Sp()) === null || e === void 0 ? void 0 : e.emulatorHosts) === null ||
      n === void 0
      ? void 0
      : n[t];
  },
  $C = (t) => {
    const e = p1(t);
    if (!e) return;
    const n = e.lastIndexOf(':');
    if (n <= 0 || n + 1 === e.length)
      throw new Error(`Invalid host ${e} with no separate hostname and port!`);
    const r = parseInt(e.substring(n + 1), 10);
    return e[0] === '[' ? [e.substring(1, n - 1), r] : [e.substring(0, n), r];
  },
  bC = () => {
    var t;
    return (t = Sp()) === null || t === void 0 ? void 0 : t.config;
  },
  m1 = (t) => {
    var e;
    return (e = Sp()) === null || e === void 0 ? void 0 : e[`_${t}`];
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class MC {
  constructor() {
    (this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((e, n) => {
        (this.resolve = e), (this.reject = n);
      }));
  }
  wrapCallback(e) {
    return (n, r) => {
      n ? this.reject(n) : this.resolve(r),
        typeof e == 'function' && (this.promise.catch(() => {}), e.length === 1 ? e(n) : e(n, r));
    };
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function FC(t, e) {
  if (t.uid)
    throw new Error(
      'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.'
    );
  const n = { alg: 'none', type: 'JWT' },
    r = e || 'demo-project',
    i = t.iat || 0,
    s = t.sub || t.user_id;
  if (!s) throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
  const o = Object.assign(
      {
        iss: `https://securetoken.google.com/${r}`,
        aud: r,
        iat: i,
        exp: i + 3600,
        auth_time: i,
        sub: s,
        user_id: s,
        firebase: { sign_in_provider: 'custom', identities: {} }
      },
      t
    ),
    a = '';
  return [Nl(JSON.stringify(n)), Nl(JSON.stringify(o)), a].join('.');
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function dt() {
  return typeof navigator < 'u' && typeof navigator.userAgent == 'string'
    ? navigator.userAgent
    : '';
}
function UC() {
  return (
    typeof window < 'u' &&
    !!(window.cordova || window.phonegap || window.PhoneGap) &&
    /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())
  );
}
function VC() {
  const t =
    typeof chrome == 'object'
      ? chrome.runtime
      : typeof browser == 'object'
      ? browser.runtime
      : void 0;
  return typeof t == 'object' && t.id !== void 0;
}
function jC() {
  return typeof navigator == 'object' && navigator.product === 'ReactNative';
}
function zC() {
  const t = dt();
  return t.indexOf('MSIE ') >= 0 || t.indexOf('Trident/') >= 0;
}
function BC() {
  try {
    return typeof indexedDB == 'object';
  } catch {
    return !1;
  }
}
function HC() {
  return new Promise((t, e) => {
    try {
      let n = !0;
      const r = 'validate-browser-context-for-indexeddb-analytics-module',
        i = self.indexedDB.open(r);
      (i.onsuccess = () => {
        i.result.close(), n || self.indexedDB.deleteDatabase(r), t(!0);
      }),
        (i.onupgradeneeded = () => {
          n = !1;
        }),
        (i.onerror = () => {
          var s;
          e(((s = i.error) === null || s === void 0 ? void 0 : s.message) || '');
        });
    } catch (n) {
      e(n);
    }
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const KC = 'FirebaseError';
class Mn extends Error {
  constructor(e, n, r) {
    super(n),
      (this.code = e),
      (this.customData = r),
      (this.name = KC),
      Object.setPrototypeOf(this, Mn.prototype),
      Error.captureStackTrace && Error.captureStackTrace(this, bo.prototype.create);
  }
}
class bo {
  constructor(e, n, r) {
    (this.service = e), (this.serviceName = n), (this.errors = r);
  }
  create(e, ...n) {
    const r = n[0] || {},
      i = `${this.service}/${e}`,
      s = this.errors[e],
      o = s ? WC(s, r) : 'Error',
      a = `${this.serviceName}: ${o} (${i}).`;
    return new Mn(i, a, r);
  }
}
function WC(t, e) {
  return t.replace(qC, (n, r) => {
    const i = e[r];
    return i != null ? String(i) : `<${r}?>`;
  });
}
const qC = /\{\$([^}]+)}/g;
function GC(t) {
  for (const e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
  return !0;
}
function Rl(t, e) {
  if (t === e) return !0;
  const n = Object.keys(t),
    r = Object.keys(e);
  for (const i of n) {
    if (!r.includes(i)) return !1;
    const s = t[i],
      o = e[i];
    if (ty(s) && ty(o)) {
      if (!Rl(s, o)) return !1;
    } else if (s !== o) return !1;
  }
  for (const i of r) if (!n.includes(i)) return !1;
  return !0;
}
function ty(t) {
  return t !== null && typeof t == 'object';
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Mo(t) {
  const e = [];
  for (const [n, r] of Object.entries(t))
    Array.isArray(r)
      ? r.forEach((i) => {
          e.push(encodeURIComponent(n) + '=' + encodeURIComponent(i));
        })
      : e.push(encodeURIComponent(n) + '=' + encodeURIComponent(r));
  return e.length ? '&' + e.join('&') : '';
}
function QC(t, e) {
  const n = new XC(t, e);
  return n.subscribe.bind(n);
}
class XC {
  constructor(e, n) {
    (this.observers = []),
      (this.unsubscribes = []),
      (this.observerCount = 0),
      (this.task = Promise.resolve()),
      (this.finalized = !1),
      (this.onNoObservers = n),
      this.task
        .then(() => {
          e(this);
        })
        .catch((r) => {
          this.error(r);
        });
  }
  next(e) {
    this.forEachObserver((n) => {
      n.next(e);
    });
  }
  error(e) {
    this.forEachObserver((n) => {
      n.error(e);
    }),
      this.close(e);
  }
  complete() {
    this.forEachObserver((e) => {
      e.complete();
    }),
      this.close();
  }
  subscribe(e, n, r) {
    let i;
    if (e === void 0 && n === void 0 && r === void 0) throw new Error('Missing Observer.');
    YC(e, ['next', 'error', 'complete']) ? (i = e) : (i = { next: e, error: n, complete: r }),
      i.next === void 0 && (i.next = th),
      i.error === void 0 && (i.error = th),
      i.complete === void 0 && (i.complete = th);
    const s = this.unsubscribeOne.bind(this, this.observers.length);
    return (
      this.finalized &&
        this.task.then(() => {
          try {
            this.finalError ? i.error(this.finalError) : i.complete();
          } catch {}
        }),
      this.observers.push(i),
      s
    );
  }
  unsubscribeOne(e) {
    this.observers === void 0 ||
      this.observers[e] === void 0 ||
      (delete this.observers[e],
      (this.observerCount -= 1),
      this.observerCount === 0 && this.onNoObservers !== void 0 && this.onNoObservers(this));
  }
  forEachObserver(e) {
    if (!this.finalized) for (let n = 0; n < this.observers.length; n++) this.sendOne(n, e);
  }
  sendOne(e, n) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[e] !== void 0)
        try {
          n(this.observers[e]);
        } catch (r) {
          typeof console < 'u' && console.error && console.error(r);
        }
    });
  }
  close(e) {
    this.finalized ||
      ((this.finalized = !0),
      e !== void 0 && (this.finalError = e),
      this.task.then(() => {
        (this.observers = void 0), (this.onNoObservers = void 0);
      }));
  }
}
function YC(t, e) {
  if (typeof t != 'object' || t === null) return !1;
  for (const n of e) if (n in t && typeof t[n] == 'function') return !0;
  return !1;
}
function th() {}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Tr(t) {
  return t && t._delegate ? t._delegate : t;
}
class Jr {
  constructor(e, n, r) {
    (this.name = e),
      (this.instanceFactory = n),
      (this.type = r),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = 'LAZY'),
      (this.onInstanceCreated = null);
  }
  setInstantiationMode(e) {
    return (this.instantiationMode = e), this;
  }
  setMultipleInstances(e) {
    return (this.multipleInstances = e), this;
  }
  setServiceProps(e) {
    return (this.serviceProps = e), this;
  }
  setInstanceCreatedCallback(e) {
    return (this.onInstanceCreated = e), this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Rr = '[DEFAULT]';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class JC {
  constructor(e, n) {
    (this.name = e),
      (this.container = n),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map());
  }
  get(e) {
    const n = this.normalizeInstanceIdentifier(e);
    if (!this.instancesDeferred.has(n)) {
      const r = new MC();
      if ((this.instancesDeferred.set(n, r), this.isInitialized(n) || this.shouldAutoInitialize()))
        try {
          const i = this.getOrInitializeService({ instanceIdentifier: n });
          i && r.resolve(i);
        } catch {}
    }
    return this.instancesDeferred.get(n).promise;
  }
  getImmediate(e) {
    var n;
    const r = this.normalizeInstanceIdentifier(e == null ? void 0 : e.identifier),
      i = (n = e == null ? void 0 : e.optional) !== null && n !== void 0 ? n : !1;
    if (this.isInitialized(r) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: r });
      } catch (s) {
        if (i) return null;
        throw s;
      }
    else {
      if (i) return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(e) {
    if (e.name !== this.name)
      throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
    if (this.component) throw Error(`Component for ${this.name} has already been provided`);
    if (((this.component = e), !!this.shouldAutoInitialize())) {
      if (eA(e))
        try {
          this.getOrInitializeService({ instanceIdentifier: Rr });
        } catch {}
      for (const [n, r] of this.instancesDeferred.entries()) {
        const i = this.normalizeInstanceIdentifier(n);
        try {
          const s = this.getOrInitializeService({ instanceIdentifier: i });
          r.resolve(s);
        } catch {}
      }
    }
  }
  clearInstance(e = Rr) {
    this.instancesDeferred.delete(e), this.instancesOptions.delete(e), this.instances.delete(e);
  }
  async delete() {
    const e = Array.from(this.instances.values());
    await Promise.all([
      ...e.filter((n) => 'INTERNAL' in n).map((n) => n.INTERNAL.delete()),
      ...e.filter((n) => '_delete' in n).map((n) => n._delete())
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(e = Rr) {
    return this.instances.has(e);
  }
  getOptions(e = Rr) {
    return this.instancesOptions.get(e) || {};
  }
  initialize(e = {}) {
    const { options: n = {} } = e,
      r = this.normalizeInstanceIdentifier(e.instanceIdentifier);
    if (this.isInitialized(r)) throw Error(`${this.name}(${r}) has already been initialized`);
    if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
    const i = this.getOrInitializeService({ instanceIdentifier: r, options: n });
    for (const [s, o] of this.instancesDeferred.entries()) {
      const a = this.normalizeInstanceIdentifier(s);
      r === a && o.resolve(i);
    }
    return i;
  }
  onInit(e, n) {
    var r;
    const i = this.normalizeInstanceIdentifier(n),
      s = (r = this.onInitCallbacks.get(i)) !== null && r !== void 0 ? r : new Set();
    s.add(e), this.onInitCallbacks.set(i, s);
    const o = this.instances.get(i);
    return (
      o && e(o, i),
      () => {
        s.delete(e);
      }
    );
  }
  invokeOnInitCallbacks(e, n) {
    const r = this.onInitCallbacks.get(n);
    if (r)
      for (const i of r)
        try {
          i(e, n);
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: e, options: n = {} }) {
    let r = this.instances.get(e);
    if (
      !r &&
      this.component &&
      ((r = this.component.instanceFactory(this.container, {
        instanceIdentifier: ZC(e),
        options: n
      })),
      this.instances.set(e, r),
      this.instancesOptions.set(e, n),
      this.invokeOnInitCallbacks(r, e),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, e, r);
      } catch {}
    return r || null;
  }
  normalizeInstanceIdentifier(e = Rr) {
    return this.component ? (this.component.multipleInstances ? e : Rr) : e;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== 'EXPLICIT';
  }
}
function ZC(t) {
  return t === Rr ? void 0 : t;
}
function eA(t) {
  return t.instantiationMode === 'EAGER';
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tA {
  constructor(e) {
    (this.name = e), (this.providers = new Map());
  }
  addComponent(e) {
    const n = this.getProvider(e.name);
    if (n.isComponentSet())
      throw new Error(`Component ${e.name} has already been registered with ${this.name}`);
    n.setComponent(e);
  }
  addOrOverwriteComponent(e) {
    this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name),
      this.addComponent(e);
  }
  getProvider(e) {
    if (this.providers.has(e)) return this.providers.get(e);
    const n = new JC(e, this);
    return this.providers.set(e, n), n;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var ae;
(function (t) {
  (t[(t.DEBUG = 0)] = 'DEBUG'),
    (t[(t.VERBOSE = 1)] = 'VERBOSE'),
    (t[(t.INFO = 2)] = 'INFO'),
    (t[(t.WARN = 3)] = 'WARN'),
    (t[(t.ERROR = 4)] = 'ERROR'),
    (t[(t.SILENT = 5)] = 'SILENT');
})(ae || (ae = {}));
const nA = {
    debug: ae.DEBUG,
    verbose: ae.VERBOSE,
    info: ae.INFO,
    warn: ae.WARN,
    error: ae.ERROR,
    silent: ae.SILENT
  },
  rA = ae.INFO,
  iA = {
    [ae.DEBUG]: 'log',
    [ae.VERBOSE]: 'log',
    [ae.INFO]: 'info',
    [ae.WARN]: 'warn',
    [ae.ERROR]: 'error'
  },
  sA = (t, e, ...n) => {
    if (e < t.logLevel) return;
    const r = new Date().toISOString(),
      i = iA[e];
    if (i) console[i](`[${r}]  ${t.name}:`, ...n);
    else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);
  };
class _p {
  constructor(e) {
    (this.name = e), (this._logLevel = rA), (this._logHandler = sA), (this._userLogHandler = null);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(e) {
    if (!(e in ae)) throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
    this._logLevel = e;
  }
  setLogLevel(e) {
    this._logLevel = typeof e == 'string' ? nA[e] : e;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(e) {
    if (typeof e != 'function')
      throw new TypeError('Value assigned to `logHandler` must be a function');
    this._logHandler = e;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(e) {
    this._userLogHandler = e;
  }
  debug(...e) {
    this._userLogHandler && this._userLogHandler(this, ae.DEBUG, ...e),
      this._logHandler(this, ae.DEBUG, ...e);
  }
  log(...e) {
    this._userLogHandler && this._userLogHandler(this, ae.VERBOSE, ...e),
      this._logHandler(this, ae.VERBOSE, ...e);
  }
  info(...e) {
    this._userLogHandler && this._userLogHandler(this, ae.INFO, ...e),
      this._logHandler(this, ae.INFO, ...e);
  }
  warn(...e) {
    this._userLogHandler && this._userLogHandler(this, ae.WARN, ...e),
      this._logHandler(this, ae.WARN, ...e);
  }
  error(...e) {
    this._userLogHandler && this._userLogHandler(this, ae.ERROR, ...e),
      this._logHandler(this, ae.ERROR, ...e);
  }
}
const oA = (t, e) => e.some((n) => t instanceof n);
let ny, ry;
function aA() {
  return ny || (ny = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction]);
}
function lA() {
  return (
    ry ||
    (ry = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey
    ])
  );
}
const g1 = new WeakMap(),
  xd = new WeakMap(),
  y1 = new WeakMap(),
  nh = new WeakMap(),
  Tp = new WeakMap();
function uA(t) {
  const e = new Promise((n, r) => {
    const i = () => {
        t.removeEventListener('success', s), t.removeEventListener('error', o);
      },
      s = () => {
        n(hr(t.result)), i();
      },
      o = () => {
        r(t.error), i();
      };
    t.addEventListener('success', s), t.addEventListener('error', o);
  });
  return (
    e
      .then((n) => {
        n instanceof IDBCursor && g1.set(n, t);
      })
      .catch(() => {}),
    Tp.set(e, t),
    e
  );
}
function cA(t) {
  if (xd.has(t)) return;
  const e = new Promise((n, r) => {
    const i = () => {
        t.removeEventListener('complete', s),
          t.removeEventListener('error', o),
          t.removeEventListener('abort', o);
      },
      s = () => {
        n(), i();
      },
      o = () => {
        r(t.error || new DOMException('AbortError', 'AbortError')), i();
      };
    t.addEventListener('complete', s),
      t.addEventListener('error', o),
      t.addEventListener('abort', o);
  });
  xd.set(t, e);
}
let Dd = {
  get(t, e, n) {
    if (t instanceof IDBTransaction) {
      if (e === 'done') return xd.get(t);
      if (e === 'objectStoreNames') return t.objectStoreNames || y1.get(t);
      if (e === 'store')
        return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0]);
    }
    return hr(t[e]);
  },
  set(t, e, n) {
    return (t[e] = n), !0;
  },
  has(t, e) {
    return t instanceof IDBTransaction && (e === 'done' || e === 'store') ? !0 : e in t;
  }
};
function hA(t) {
  Dd = t(Dd);
}
function dA(t) {
  return t === IDBDatabase.prototype.transaction &&
    !('objectStoreNames' in IDBTransaction.prototype)
    ? function (e, ...n) {
        const r = t.call(rh(this), e, ...n);
        return y1.set(r, e.sort ? e.sort() : [e]), hr(r);
      }
    : lA().includes(t)
    ? function (...e) {
        return t.apply(rh(this), e), hr(g1.get(this));
      }
    : function (...e) {
        return hr(t.apply(rh(this), e));
      };
}
function fA(t) {
  return typeof t == 'function'
    ? dA(t)
    : (t instanceof IDBTransaction && cA(t), oA(t, aA()) ? new Proxy(t, Dd) : t);
}
function hr(t) {
  if (t instanceof IDBRequest) return uA(t);
  if (nh.has(t)) return nh.get(t);
  const e = fA(t);
  return e !== t && (nh.set(t, e), Tp.set(e, t)), e;
}
const rh = (t) => Tp.get(t);
function pA(t, e, { blocked: n, upgrade: r, blocking: i, terminated: s } = {}) {
  const o = indexedDB.open(t, e),
    a = hr(o);
  return (
    r &&
      o.addEventListener('upgradeneeded', (l) => {
        r(hr(o.result), l.oldVersion, l.newVersion, hr(o.transaction));
      }),
    n && o.addEventListener('blocked', () => n()),
    a
      .then((l) => {
        s && l.addEventListener('close', () => s()),
          i && l.addEventListener('versionchange', () => i());
      })
      .catch(() => {}),
    a
  );
}
const mA = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'],
  gA = ['put', 'add', 'delete', 'clear'],
  ih = new Map();
function iy(t, e) {
  if (!(t instanceof IDBDatabase && !(e in t) && typeof e == 'string')) return;
  if (ih.get(e)) return ih.get(e);
  const n = e.replace(/FromIndex$/, ''),
    r = e !== n,
    i = gA.includes(n);
  if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !(i || mA.includes(n))) return;
  const s = async function (o, ...a) {
    const l = this.transaction(o, i ? 'readwrite' : 'readonly');
    let u = l.store;
    return r && (u = u.index(a.shift())), (await Promise.all([u[n](...a), i && l.done]))[0];
  };
  return ih.set(e, s), s;
}
hA((t) => ({
  ...t,
  get: (e, n, r) => iy(e, n) || t.get(e, n, r),
  has: (e, n) => !!iy(e, n) || t.has(e, n)
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yA {
  constructor(e) {
    this.container = e;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((n) => {
        if (vA(n)) {
          const r = n.getImmediate();
          return `${r.library}/${r.version}`;
        } else return null;
      })
      .filter((n) => n)
      .join(' ');
  }
}
function vA(t) {
  const e = t.getComponent();
  return (e == null ? void 0 : e.type) === 'VERSION';
}
const Pd = '@firebase/app',
  sy = '0.9.4';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Zr = new _p('@firebase/app'),
  wA = '@firebase/app-compat',
  EA = '@firebase/analytics-compat',
  SA = '@firebase/analytics',
  _A = '@firebase/app-check-compat',
  TA = '@firebase/app-check',
  IA = '@firebase/auth',
  kA = '@firebase/auth-compat',
  CA = '@firebase/database',
  AA = '@firebase/database-compat',
  NA = '@firebase/functions',
  RA = '@firebase/functions-compat',
  xA = '@firebase/installations',
  DA = '@firebase/installations-compat',
  PA = '@firebase/messaging',
  OA = '@firebase/messaging-compat',
  LA = '@firebase/performance',
  $A = '@firebase/performance-compat',
  bA = '@firebase/remote-config',
  MA = '@firebase/remote-config-compat',
  FA = '@firebase/storage',
  UA = '@firebase/storage-compat',
  VA = '@firebase/firestore',
  jA = '@firebase/firestore-compat',
  zA = 'firebase',
  BA = '9.17.2';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Od = '[DEFAULT]',
  HA = {
    [Pd]: 'fire-core',
    [wA]: 'fire-core-compat',
    [SA]: 'fire-analytics',
    [EA]: 'fire-analytics-compat',
    [TA]: 'fire-app-check',
    [_A]: 'fire-app-check-compat',
    [IA]: 'fire-auth',
    [kA]: 'fire-auth-compat',
    [CA]: 'fire-rtdb',
    [AA]: 'fire-rtdb-compat',
    [NA]: 'fire-fn',
    [RA]: 'fire-fn-compat',
    [xA]: 'fire-iid',
    [DA]: 'fire-iid-compat',
    [PA]: 'fire-fcm',
    [OA]: 'fire-fcm-compat',
    [LA]: 'fire-perf',
    [$A]: 'fire-perf-compat',
    [bA]: 'fire-rc',
    [MA]: 'fire-rc-compat',
    [FA]: 'fire-gcs',
    [UA]: 'fire-gcs-compat',
    [VA]: 'fire-fst',
    [jA]: 'fire-fst-compat',
    'fire-js': 'fire-js',
    [zA]: 'fire-js-all'
  };
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const xl = new Map(),
  Ld = new Map();
function KA(t, e) {
  try {
    t.container.addComponent(e);
  } catch (n) {
    Zr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`, n);
  }
}
function Zi(t) {
  const e = t.name;
  if (Ld.has(e)) return Zr.debug(`There were multiple attempts to register component ${e}.`), !1;
  Ld.set(e, t);
  for (const n of xl.values()) KA(n, t);
  return !0;
}
function Ip(t, e) {
  const n = t.container.getProvider('heartbeat').getImmediate({ optional: !0 });
  return n && n.triggerHeartbeat(), t.container.getProvider(e);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const WA = {
    ['no-app']: "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
    ['bad-app-name']: "Illegal App name: '{$appName}",
    ['duplicate-app']:
      "Firebase App named '{$appName}' already exists with different options or config",
    ['app-deleted']: "Firebase App named '{$appName}' already deleted",
    ['no-options']: 'Need to provide options, when not being deployed to hosting via source.',
    ['invalid-app-argument']:
      'firebase.{$appName}() takes either no argument or a Firebase App instance.',
    ['invalid-log-argument']: 'First argument to `onLog` must be null or a function.',
    ['idb-open']: 'Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.',
    ['idb-get']:
      'Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.',
    ['idb-set']: 'Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.',
    ['idb-delete']:
      'Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.'
  },
  dr = new bo('app', 'Firebase', WA);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class qA {
  constructor(e, n, r) {
    (this._isDeleted = !1),
      (this._options = Object.assign({}, e)),
      (this._config = Object.assign({}, n)),
      (this._name = n.name),
      (this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled),
      (this._container = r),
      this.container.addComponent(new Jr('app', () => this, 'PUBLIC'));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(e) {
    this.checkDestroyed(), (this._automaticDataCollectionEnabled = e);
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(e) {
    this._isDeleted = e;
  }
  checkDestroyed() {
    if (this.isDeleted) throw dr.create('app-deleted', { appName: this._name });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Fo = BA;
function v1(t, e = {}) {
  let n = t;
  typeof e != 'object' && (e = { name: e });
  const r = Object.assign({ name: Od, automaticDataCollectionEnabled: !1 }, e),
    i = r.name;
  if (typeof i != 'string' || !i) throw dr.create('bad-app-name', { appName: String(i) });
  if ((n || (n = bC()), !n)) throw dr.create('no-options');
  const s = xl.get(i);
  if (s) {
    if (Rl(n, s.options) && Rl(r, s.config)) return s;
    throw dr.create('duplicate-app', { appName: i });
  }
  const o = new tA(i);
  for (const l of Ld.values()) o.addComponent(l);
  const a = new qA(n, r, o);
  return xl.set(i, a), a;
}
function w1(t = Od) {
  const e = xl.get(t);
  if (!e && t === Od) return v1();
  if (!e) throw dr.create('no-app', { appName: t });
  return e;
}
function fr(t, e, n) {
  var r;
  let i = (r = HA[t]) !== null && r !== void 0 ? r : t;
  n && (i += `-${n}`);
  const s = i.match(/\s|\//),
    o = e.match(/\s|\//);
  if (s || o) {
    const a = [`Unable to register library "${i}" with version "${e}":`];
    s && a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),
      s && o && a.push('and'),
      o && a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),
      Zr.warn(a.join(' '));
    return;
  }
  Zi(new Jr(`${i}-version`, () => ({ library: i, version: e }), 'VERSION'));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const GA = 'firebase-heartbeat-database',
  QA = 1,
  wo = 'firebase-heartbeat-store';
let sh = null;
function E1() {
  return (
    sh ||
      (sh = pA(GA, QA, {
        upgrade: (t, e) => {
          switch (e) {
            case 0:
              t.createObjectStore(wo);
          }
        }
      }).catch((t) => {
        throw dr.create('idb-open', { originalErrorMessage: t.message });
      })),
    sh
  );
}
async function XA(t) {
  try {
    return (await E1()).transaction(wo).objectStore(wo).get(S1(t));
  } catch (e) {
    if (e instanceof Mn) Zr.warn(e.message);
    else {
      const n = dr.create('idb-get', { originalErrorMessage: e == null ? void 0 : e.message });
      Zr.warn(n.message);
    }
  }
}
async function oy(t, e) {
  try {
    const r = (await E1()).transaction(wo, 'readwrite');
    return await r.objectStore(wo).put(e, S1(t)), r.done;
  } catch (n) {
    if (n instanceof Mn) Zr.warn(n.message);
    else {
      const r = dr.create('idb-set', { originalErrorMessage: n == null ? void 0 : n.message });
      Zr.warn(r.message);
    }
  }
}
function S1(t) {
  return `${t.name}!${t.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const YA = 1024,
  JA = 30 * 24 * 60 * 60 * 1e3;
class ZA {
  constructor(e) {
    (this.container = e), (this._heartbeatsCache = null);
    const n = this.container.getProvider('app').getImmediate();
    (this._storage = new tN(n)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((r) => ((this._heartbeatsCache = r), r)));
  }
  async triggerHeartbeat() {
    const n = this.container.getProvider('platform-logger').getImmediate().getPlatformInfoString(),
      r = ay();
    if (
      (this._heartbeatsCache === null &&
        (this._heartbeatsCache = await this._heartbeatsCachePromise),
      !(
        this._heartbeatsCache.lastSentHeartbeatDate === r ||
        this._heartbeatsCache.heartbeats.some((i) => i.date === r)
      ))
    )
      return (
        this._heartbeatsCache.heartbeats.push({ date: r, agent: n }),
        (this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((i) => {
          const s = new Date(i.date).valueOf();
          return Date.now() - s <= JA;
        })),
        this._storage.overwrite(this._heartbeatsCache)
      );
  }
  async getHeartbeatsHeader() {
    if (
      (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
      this._heartbeatsCache === null || this._heartbeatsCache.heartbeats.length === 0)
    )
      return '';
    const e = ay(),
      { heartbeatsToSend: n, unsentEntries: r } = eN(this._heartbeatsCache.heartbeats),
      i = Nl(JSON.stringify({ version: 2, heartbeats: n }));
    return (
      (this._heartbeatsCache.lastSentHeartbeatDate = e),
      r.length > 0
        ? ((this._heartbeatsCache.heartbeats = r),
          await this._storage.overwrite(this._heartbeatsCache))
        : ((this._heartbeatsCache.heartbeats = []), this._storage.overwrite(this._heartbeatsCache)),
      i
    );
  }
}
function ay() {
  return new Date().toISOString().substring(0, 10);
}
function eN(t, e = YA) {
  const n = [];
  let r = t.slice();
  for (const i of t) {
    const s = n.find((o) => o.agent === i.agent);
    if (s) {
      if ((s.dates.push(i.date), ly(n) > e)) {
        s.dates.pop();
        break;
      }
    } else if ((n.push({ agent: i.agent, dates: [i.date] }), ly(n) > e)) {
      n.pop();
      break;
    }
    r = r.slice(1);
  }
  return { heartbeatsToSend: n, unsentEntries: r };
}
class tN {
  constructor(e) {
    (this.app = e), (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return BC()
      ? HC()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    return (await this._canUseIndexedDBPromise)
      ? (await XA(this.app)) || { heartbeats: [] }
      : { heartbeats: [] };
  }
  async overwrite(e) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return oy(this.app, {
        lastSentHeartbeatDate:
          (n = e.lastSentHeartbeatDate) !== null && n !== void 0 ? n : i.lastSentHeartbeatDate,
        heartbeats: e.heartbeats
      });
    } else return;
  }
  async add(e) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return oy(this.app, {
        lastSentHeartbeatDate:
          (n = e.lastSentHeartbeatDate) !== null && n !== void 0 ? n : i.lastSentHeartbeatDate,
        heartbeats: [...i.heartbeats, ...e.heartbeats]
      });
    } else return;
  }
}
function ly(t) {
  return Nl(JSON.stringify({ version: 2, heartbeats: t })).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function nN(t) {
  Zi(new Jr('platform-logger', (e) => new yA(e), 'PRIVATE')),
    Zi(new Jr('heartbeat', (e) => new ZA(e), 'PRIVATE')),
    fr(Pd, sy, t),
    fr(Pd, sy, 'esm2017'),
    fr('fire-js', '');
}
nN('');
var rN = 'firebase',
  iN = '9.17.2';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ fr(rN, iN, 'app');
var sN =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : typeof self < 'u'
      ? self
      : {},
  M,
  kp = kp || {},
  Q = sN || self;
function Dl() {}
function Fu(t) {
  var e = typeof t;
  return (
    (e = e != 'object' ? e : t ? (Array.isArray(t) ? 'array' : e) : 'null'),
    e == 'array' || (e == 'object' && typeof t.length == 'number')
  );
}
function Uo(t) {
  var e = typeof t;
  return (e == 'object' && t != null) || e == 'function';
}
function oN(t) {
  return (Object.prototype.hasOwnProperty.call(t, oh) && t[oh]) || (t[oh] = ++aN);
}
var oh = 'closure_uid_' + ((1e9 * Math.random()) >>> 0),
  aN = 0;
function lN(t, e, n) {
  return t.call.apply(t.bind, arguments);
}
function uN(t, e, n) {
  if (!t) throw Error();
  if (2 < arguments.length) {
    var r = Array.prototype.slice.call(arguments, 2);
    return function () {
      var i = Array.prototype.slice.call(arguments);
      return Array.prototype.unshift.apply(i, r), t.apply(e, i);
    };
  }
  return function () {
    return t.apply(e, arguments);
  };
}
function ut(t, e, n) {
  return (
    Function.prototype.bind && Function.prototype.bind.toString().indexOf('native code') != -1
      ? (ut = lN)
      : (ut = uN),
    ut.apply(null, arguments)
  );
}
function Ea(t, e) {
  var n = Array.prototype.slice.call(arguments, 1);
  return function () {
    var r = n.slice();
    return r.push.apply(r, arguments), t.apply(this, r);
  };
}
function nt(t, e) {
  function n() {}
  (n.prototype = e.prototype),
    (t.X = e.prototype),
    (t.prototype = new n()),
    (t.prototype.constructor = t),
    (t.Wb = function (r, i, s) {
      for (var o = Array(arguments.length - 2), a = 2; a < arguments.length; a++)
        o[a - 2] = arguments[a];
      return e.prototype[i].apply(r, o);
    });
}
function Ir() {
  (this.s = this.s), (this.o = this.o);
}
var cN = 0;
Ir.prototype.s = !1;
Ir.prototype.na = function () {
  !this.s && ((this.s = !0), this.M(), cN != 0) && oN(this);
};
Ir.prototype.M = function () {
  if (this.o) for (; this.o.length; ) this.o.shift()();
};
const _1 = Array.prototype.indexOf
  ? function (t, e) {
      return Array.prototype.indexOf.call(t, e, void 0);
    }
  : function (t, e) {
      if (typeof t == 'string') return typeof e != 'string' || e.length != 1 ? -1 : t.indexOf(e, 0);
      for (let n = 0; n < t.length; n++) if (n in t && t[n] === e) return n;
      return -1;
    };
function Cp(t) {
  const e = t.length;
  if (0 < e) {
    const n = Array(e);
    for (let r = 0; r < e; r++) n[r] = t[r];
    return n;
  }
  return [];
}
function uy(t, e) {
  for (let n = 1; n < arguments.length; n++) {
    const r = arguments[n];
    if (Fu(r)) {
      const i = t.length || 0,
        s = r.length || 0;
      t.length = i + s;
      for (let o = 0; o < s; o++) t[i + o] = r[o];
    } else t.push(r);
  }
}
function ct(t, e) {
  (this.type = t), (this.g = this.target = e), (this.defaultPrevented = !1);
}
ct.prototype.h = function () {
  this.defaultPrevented = !0;
};
var hN = (function () {
  if (!Q.addEventListener || !Object.defineProperty) return !1;
  var t = !1,
    e = Object.defineProperty({}, 'passive', {
      get: function () {
        t = !0;
      }
    });
  try {
    Q.addEventListener('test', Dl, e), Q.removeEventListener('test', Dl, e);
  } catch {}
  return t;
})();
function Pl(t) {
  return /^[\s\xa0]*$/.test(t);
}
var cy = String.prototype.trim
  ? function (t) {
      return t.trim();
    }
  : function (t) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1];
    };
function ah(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
function Uu() {
  var t = Q.navigator;
  return t && (t = t.userAgent) ? t : '';
}
function on(t) {
  return Uu().indexOf(t) != -1;
}
function Ap(t) {
  return Ap[' '](t), t;
}
Ap[' '] = Dl;
function dN(t) {
  var e = mN;
  return Object.prototype.hasOwnProperty.call(e, 9) ? e[9] : (e[9] = t(9));
}
var fN = on('Opera'),
  es = on('Trident') || on('MSIE'),
  T1 = on('Edge'),
  $d = T1 || es,
  I1 =
    on('Gecko') &&
    !(Uu().toLowerCase().indexOf('webkit') != -1 && !on('Edge')) &&
    !(on('Trident') || on('MSIE')) &&
    !on('Edge'),
  pN = Uu().toLowerCase().indexOf('webkit') != -1 && !on('Edge');
function k1() {
  var t = Q.document;
  return t ? t.documentMode : void 0;
}
var Ol;
e: {
  var lh = '',
    uh = (function () {
      var t = Uu();
      if (I1) return /rv:([^\);]+)(\)|;)/.exec(t);
      if (T1) return /Edge\/([\d\.]+)/.exec(t);
      if (es) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);
      if (pN) return /WebKit\/(\S+)/.exec(t);
      if (fN) return /(?:Version)[ \/]?(\S+)/.exec(t);
    })();
  if ((uh && (lh = uh ? uh[1] : ''), es)) {
    var ch = k1();
    if (ch != null && ch > parseFloat(lh)) {
      Ol = String(ch);
      break e;
    }
  }
  Ol = lh;
}
var mN = {};
function gN() {
  return dN(function () {
    let t = 0;
    const e = cy(String(Ol)).split('.'),
      n = cy('9').split('.'),
      r = Math.max(e.length, n.length);
    for (let o = 0; t == 0 && o < r; o++) {
      var i = e[o] || '',
        s = n[o] || '';
      do {
        if (
          ((i = /(\d*)(\D*)(.*)/.exec(i) || ['', '', '', '']),
          (s = /(\d*)(\D*)(.*)/.exec(s) || ['', '', '', '']),
          i[0].length == 0 && s[0].length == 0)
        )
          break;
        (t =
          ah(
            i[1].length == 0 ? 0 : parseInt(i[1], 10),
            s[1].length == 0 ? 0 : parseInt(s[1], 10)
          ) ||
          ah(i[2].length == 0, s[2].length == 0) ||
          ah(i[2], s[2])),
          (i = i[3]),
          (s = s[3]);
      } while (t == 0);
    }
    return 0 <= t;
  });
}
var bd;
if (Q.document && es) {
  var hy = k1();
  bd = hy || parseInt(Ol, 10) || void 0;
} else bd = void 0;
var yN = bd;
function Eo(t, e) {
  if (
    (ct.call(this, t ? t.type : ''),
    (this.relatedTarget = this.g = this.target = null),
    (this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0),
    (this.key = ''),
    (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
    (this.state = null),
    (this.pointerId = 0),
    (this.pointerType = ''),
    (this.i = null),
    t)
  ) {
    var n = (this.type = t.type),
      r = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : null;
    if (((this.target = t.target || t.srcElement), (this.g = e), (e = t.relatedTarget))) {
      if (I1) {
        e: {
          try {
            Ap(e.nodeName);
            var i = !0;
            break e;
          } catch {}
          i = !1;
        }
        i || (e = null);
      }
    } else n == 'mouseover' ? (e = t.fromElement) : n == 'mouseout' && (e = t.toElement);
    (this.relatedTarget = e),
      r
        ? ((this.clientX = r.clientX !== void 0 ? r.clientX : r.pageX),
          (this.clientY = r.clientY !== void 0 ? r.clientY : r.pageY),
          (this.screenX = r.screenX || 0),
          (this.screenY = r.screenY || 0))
        : ((this.clientX = t.clientX !== void 0 ? t.clientX : t.pageX),
          (this.clientY = t.clientY !== void 0 ? t.clientY : t.pageY),
          (this.screenX = t.screenX || 0),
          (this.screenY = t.screenY || 0)),
      (this.button = t.button),
      (this.key = t.key || ''),
      (this.ctrlKey = t.ctrlKey),
      (this.altKey = t.altKey),
      (this.shiftKey = t.shiftKey),
      (this.metaKey = t.metaKey),
      (this.pointerId = t.pointerId || 0),
      (this.pointerType =
        typeof t.pointerType == 'string' ? t.pointerType : vN[t.pointerType] || ''),
      (this.state = t.state),
      (this.i = t),
      t.defaultPrevented && Eo.X.h.call(this);
  }
}
nt(Eo, ct);
var vN = { 2: 'touch', 3: 'pen', 4: 'mouse' };
Eo.prototype.h = function () {
  Eo.X.h.call(this);
  var t = this.i;
  t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
};
var Vo = 'closure_listenable_' + ((1e6 * Math.random()) | 0),
  wN = 0;
function EN(t, e, n, r, i) {
  (this.listener = t),
    (this.proxy = null),
    (this.src = e),
    (this.type = n),
    (this.capture = !!r),
    (this.ha = i),
    (this.key = ++wN),
    (this.ba = this.ea = !1);
}
function Vu(t) {
  (t.ba = !0), (t.listener = null), (t.proxy = null), (t.src = null), (t.ha = null);
}
function Np(t, e, n) {
  for (const r in t) e.call(n, t[r], r, t);
}
function C1(t) {
  const e = {};
  for (const n in t) e[n] = t[n];
  return e;
}
const dy =
  'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
    ' '
  );
function A1(t, e) {
  let n, r;
  for (let i = 1; i < arguments.length; i++) {
    r = arguments[i];
    for (n in r) t[n] = r[n];
    for (let s = 0; s < dy.length; s++)
      (n = dy[s]), Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }
}
function ju(t) {
  (this.src = t), (this.g = {}), (this.h = 0);
}
ju.prototype.add = function (t, e, n, r, i) {
  var s = t.toString();
  (t = this.g[s]), t || ((t = this.g[s] = []), this.h++);
  var o = Fd(t, e, r, i);
  return (
    -1 < o
      ? ((e = t[o]), n || (e.ea = !1))
      : ((e = new EN(e, this.src, s, !!r, i)), (e.ea = n), t.push(e)),
    e
  );
};
function Md(t, e) {
  var n = e.type;
  if (n in t.g) {
    var r = t.g[n],
      i = _1(r, e),
      s;
    (s = 0 <= i) && Array.prototype.splice.call(r, i, 1),
      s && (Vu(e), t.g[n].length == 0 && (delete t.g[n], t.h--));
  }
}
function Fd(t, e, n, r) {
  for (var i = 0; i < t.length; ++i) {
    var s = t[i];
    if (!s.ba && s.listener == e && s.capture == !!n && s.ha == r) return i;
  }
  return -1;
}
var Rp = 'closure_lm_' + ((1e6 * Math.random()) | 0),
  hh = {};
function N1(t, e, n, r, i) {
  if (r && r.once) return x1(t, e, n, r, i);
  if (Array.isArray(e)) {
    for (var s = 0; s < e.length; s++) N1(t, e[s], n, r, i);
    return null;
  }
  return (n = Pp(n)), t && t[Vo] ? t.N(e, n, Uo(r) ? !!r.capture : !!r, i) : R1(t, e, n, !1, r, i);
}
function R1(t, e, n, r, i, s) {
  if (!e) throw Error('Invalid event type');
  var o = Uo(i) ? !!i.capture : !!i,
    a = Dp(t);
  if ((a || (t[Rp] = a = new ju(t)), (n = a.add(e, n, r, o, s)), n.proxy)) return n;
  if (((r = SN()), (n.proxy = r), (r.src = t), (r.listener = n), t.addEventListener))
    hN || (i = o), i === void 0 && (i = !1), t.addEventListener(e.toString(), r, i);
  else if (t.attachEvent) t.attachEvent(P1(e.toString()), r);
  else if (t.addListener && t.removeListener) t.addListener(r);
  else throw Error('addEventListener and attachEvent are unavailable.');
  return n;
}
function SN() {
  function t(n) {
    return e.call(t.src, t.listener, n);
  }
  const e = _N;
  return t;
}
function x1(t, e, n, r, i) {
  if (Array.isArray(e)) {
    for (var s = 0; s < e.length; s++) x1(t, e[s], n, r, i);
    return null;
  }
  return (n = Pp(n)), t && t[Vo] ? t.O(e, n, Uo(r) ? !!r.capture : !!r, i) : R1(t, e, n, !0, r, i);
}
function D1(t, e, n, r, i) {
  if (Array.isArray(e)) for (var s = 0; s < e.length; s++) D1(t, e[s], n, r, i);
  else
    (r = Uo(r) ? !!r.capture : !!r),
      (n = Pp(n)),
      t && t[Vo]
        ? ((t = t.i),
          (e = String(e).toString()),
          e in t.g &&
            ((s = t.g[e]),
            (n = Fd(s, n, r, i)),
            -1 < n &&
              (Vu(s[n]),
              Array.prototype.splice.call(s, n, 1),
              s.length == 0 && (delete t.g[e], t.h--))))
        : t &&
          (t = Dp(t)) &&
          ((e = t.g[e.toString()]),
          (t = -1),
          e && (t = Fd(e, n, r, i)),
          (n = -1 < t ? e[t] : null) && xp(n));
}
function xp(t) {
  if (typeof t != 'number' && t && !t.ba) {
    var e = t.src;
    if (e && e[Vo]) Md(e.i, t);
    else {
      var n = t.type,
        r = t.proxy;
      e.removeEventListener
        ? e.removeEventListener(n, r, t.capture)
        : e.detachEvent
        ? e.detachEvent(P1(n), r)
        : e.addListener && e.removeListener && e.removeListener(r),
        (n = Dp(e)) ? (Md(n, t), n.h == 0 && ((n.src = null), (e[Rp] = null))) : Vu(t);
    }
  }
}
function P1(t) {
  return t in hh ? hh[t] : (hh[t] = 'on' + t);
}
function _N(t, e) {
  if (t.ba) t = !0;
  else {
    e = new Eo(e, this);
    var n = t.listener,
      r = t.ha || t.src;
    t.ea && xp(t), (t = n.call(r, e));
  }
  return t;
}
function Dp(t) {
  return (t = t[Rp]), t instanceof ju ? t : null;
}
var dh = '__closure_events_fn_' + ((1e9 * Math.random()) >>> 0);
function Pp(t) {
  return typeof t == 'function'
    ? t
    : (t[dh] ||
        (t[dh] = function (e) {
          return t.handleEvent(e);
        }),
      t[dh]);
}
function qe() {
  Ir.call(this), (this.i = new ju(this)), (this.P = this), (this.I = null);
}
nt(qe, Ir);
qe.prototype[Vo] = !0;
qe.prototype.removeEventListener = function (t, e, n, r) {
  D1(this, t, e, n, r);
};
function Ze(t, e) {
  var n,
    r = t.I;
  if (r) for (n = []; r; r = r.I) n.push(r);
  if (((t = t.P), (r = e.type || e), typeof e == 'string')) e = new ct(e, t);
  else if (e instanceof ct) e.target = e.target || t;
  else {
    var i = e;
    (e = new ct(r, t)), A1(e, i);
  }
  if (((i = !0), n))
    for (var s = n.length - 1; 0 <= s; s--) {
      var o = (e.g = n[s]);
      i = Sa(o, r, !0, e) && i;
    }
  if (((o = e.g = t), (i = Sa(o, r, !0, e) && i), (i = Sa(o, r, !1, e) && i), n))
    for (s = 0; s < n.length; s++) (o = e.g = n[s]), (i = Sa(o, r, !1, e) && i);
}
qe.prototype.M = function () {
  if ((qe.X.M.call(this), this.i)) {
    var t = this.i,
      e;
    for (e in t.g) {
      for (var n = t.g[e], r = 0; r < n.length; r++) Vu(n[r]);
      delete t.g[e], t.h--;
    }
  }
  this.I = null;
};
qe.prototype.N = function (t, e, n, r) {
  return this.i.add(String(t), e, !1, n, r);
};
qe.prototype.O = function (t, e, n, r) {
  return this.i.add(String(t), e, !0, n, r);
};
function Sa(t, e, n, r) {
  if (((e = t.i.g[String(e)]), !e)) return !0;
  e = e.concat();
  for (var i = !0, s = 0; s < e.length; ++s) {
    var o = e[s];
    if (o && !o.ba && o.capture == n) {
      var a = o.listener,
        l = o.ha || o.src;
      o.ea && Md(t.i, o), (i = a.call(l, r) !== !1 && i);
    }
  }
  return i && !r.defaultPrevented;
}
var Op = Q.JSON.stringify;
function TN() {
  var t = $1;
  let e = null;
  return t.g && ((e = t.g), (t.g = t.g.next), t.g || (t.h = null), (e.next = null)), e;
}
class IN {
  constructor() {
    this.h = this.g = null;
  }
  add(e, n) {
    const r = O1.get();
    r.set(e, n), this.h ? (this.h.next = r) : (this.g = r), (this.h = r);
  }
}
var O1 = new (class {
  constructor(t, e) {
    (this.i = t), (this.j = e), (this.h = 0), (this.g = null);
  }
  get() {
    let t;
    return (
      0 < this.h ? (this.h--, (t = this.g), (this.g = t.next), (t.next = null)) : (t = this.i()), t
    );
  }
})(
  () => new kN(),
  (t) => t.reset()
);
class kN {
  constructor() {
    this.next = this.g = this.h = null;
  }
  set(e, n) {
    (this.h = e), (this.g = n), (this.next = null);
  }
  reset() {
    this.next = this.g = this.h = null;
  }
}
function CN(t) {
  Q.setTimeout(() => {
    throw t;
  }, 0);
}
function L1(t, e) {
  Ud || AN(), Vd || (Ud(), (Vd = !0)), $1.add(t, e);
}
var Ud;
function AN() {
  var t = Q.Promise.resolve(void 0);
  Ud = function () {
    t.then(NN);
  };
}
var Vd = !1,
  $1 = new IN();
function NN() {
  for (var t; (t = TN()); ) {
    try {
      t.h.call(t.g);
    } catch (n) {
      CN(n);
    }
    var e = O1;
    e.j(t), 100 > e.h && (e.h++, (t.next = e.g), (e.g = t));
  }
  Vd = !1;
}
function zu(t, e) {
  qe.call(this),
    (this.h = t || 1),
    (this.g = e || Q),
    (this.j = ut(this.lb, this)),
    (this.l = Date.now());
}
nt(zu, qe);
M = zu.prototype;
M.ca = !1;
M.R = null;
M.lb = function () {
  if (this.ca) {
    var t = Date.now() - this.l;
    0 < t && t < 0.8 * this.h
      ? (this.R = this.g.setTimeout(this.j, this.h - t))
      : (this.R && (this.g.clearTimeout(this.R), (this.R = null)),
        Ze(this, 'tick'),
        this.ca && (Lp(this), this.start()));
  }
};
M.start = function () {
  (this.ca = !0), this.R || ((this.R = this.g.setTimeout(this.j, this.h)), (this.l = Date.now()));
};
function Lp(t) {
  (t.ca = !1), t.R && (t.g.clearTimeout(t.R), (t.R = null));
}
M.M = function () {
  zu.X.M.call(this), Lp(this), delete this.g;
};
function $p(t, e, n) {
  if (typeof t == 'function') n && (t = ut(t, n));
  else if (t && typeof t.handleEvent == 'function') t = ut(t.handleEvent, t);
  else throw Error('Invalid listener argument');
  return 2147483647 < Number(e) ? -1 : Q.setTimeout(t, e || 0);
}
function b1(t) {
  t.g = $p(() => {
    (t.g = null), t.i && ((t.i = !1), b1(t));
  }, t.j);
  const e = t.h;
  (t.h = null), t.m.apply(null, e);
}
class RN extends Ir {
  constructor(e, n) {
    super(), (this.m = e), (this.j = n), (this.h = null), (this.i = !1), (this.g = null);
  }
  l(e) {
    (this.h = arguments), this.g ? (this.i = !0) : b1(this);
  }
  M() {
    super.M(), this.g && (Q.clearTimeout(this.g), (this.g = null), (this.i = !1), (this.h = null));
  }
}
function So(t) {
  Ir.call(this), (this.h = t), (this.g = {});
}
nt(So, Ir);
var fy = [];
function M1(t, e, n, r) {
  Array.isArray(n) || (n && (fy[0] = n.toString()), (n = fy));
  for (var i = 0; i < n.length; i++) {
    var s = N1(e, n[i], r || t.handleEvent, !1, t.h || t);
    if (!s) break;
    t.g[s.key] = s;
  }
}
function F1(t) {
  Np(
    t.g,
    function (e, n) {
      this.g.hasOwnProperty(n) && xp(e);
    },
    t
  ),
    (t.g = {});
}
So.prototype.M = function () {
  So.X.M.call(this), F1(this);
};
So.prototype.handleEvent = function () {
  throw Error('EventHandler.handleEvent not implemented');
};
function Bu() {
  this.g = !0;
}
Bu.prototype.Aa = function () {
  this.g = !1;
};
function xN(t, e, n, r, i, s) {
  t.info(function () {
    if (t.g)
      if (s)
        for (var o = '', a = s.split('&'), l = 0; l < a.length; l++) {
          var u = a[l].split('=');
          if (1 < u.length) {
            var c = u[0];
            u = u[1];
            var h = c.split('_');
            o = 2 <= h.length && h[1] == 'type' ? o + (c + '=' + u + '&') : o + (c + '=redacted&');
          }
        }
      else o = null;
    else o = s;
    return (
      'XMLHTTP REQ (' +
      r +
      ') [attempt ' +
      i +
      ']: ' +
      e +
      `
` +
      n +
      `
` +
      o
    );
  });
}
function DN(t, e, n, r, i, s, o) {
  t.info(function () {
    return (
      'XMLHTTP RESP (' +
      r +
      ') [ attempt ' +
      i +
      ']: ' +
      e +
      `
` +
      n +
      `
` +
      s +
      ' ' +
      o
    );
  });
}
function Ii(t, e, n, r) {
  t.info(function () {
    return 'XMLHTTP TEXT (' + e + '): ' + ON(t, n) + (r ? ' ' + r : '');
  });
}
function PN(t, e) {
  t.info(function () {
    return 'TIMEOUT: ' + e;
  });
}
Bu.prototype.info = function () {};
function ON(t, e) {
  if (!t.g) return e;
  if (!e) return null;
  try {
    var n = JSON.parse(e);
    if (n) {
      for (t = 0; t < n.length; t++)
        if (Array.isArray(n[t])) {
          var r = n[t];
          if (!(2 > r.length)) {
            var i = r[1];
            if (Array.isArray(i) && !(1 > i.length)) {
              var s = i[0];
              if (s != 'noop' && s != 'stop' && s != 'close')
                for (var o = 1; o < i.length; o++) i[o] = '';
            }
          }
        }
    }
    return Op(n);
  } catch {
    return e;
  }
}
var oi = {},
  py = null;
function Hu() {
  return (py = py || new qe());
}
oi.Pa = 'serverreachability';
function U1(t) {
  ct.call(this, oi.Pa, t);
}
nt(U1, ct);
function _o(t) {
  const e = Hu();
  Ze(e, new U1(e));
}
oi.STAT_EVENT = 'statevent';
function V1(t, e) {
  ct.call(this, oi.STAT_EVENT, t), (this.stat = e);
}
nt(V1, ct);
function gt(t) {
  const e = Hu();
  Ze(e, new V1(e, t));
}
oi.Qa = 'timingevent';
function j1(t, e) {
  ct.call(this, oi.Qa, t), (this.size = e);
}
nt(j1, ct);
function jo(t, e) {
  if (typeof t != 'function') throw Error('Fn must not be null and must be a function');
  return Q.setTimeout(function () {
    t();
  }, e);
}
var Ku = { NO_ERROR: 0, mb: 1, zb: 2, yb: 3, tb: 4, xb: 5, Ab: 6, Ma: 7, TIMEOUT: 8, Db: 9 },
  z1 = {
    rb: 'complete',
    Nb: 'success',
    Na: 'error',
    Ma: 'abort',
    Fb: 'ready',
    Gb: 'readystatechange',
    TIMEOUT: 'timeout',
    Bb: 'incrementaldata',
    Eb: 'progress',
    ub: 'downloadprogress',
    Vb: 'uploadprogress'
  };
function bp() {}
bp.prototype.h = null;
function my(t) {
  return t.h || (t.h = t.i());
}
function B1() {}
var zo = { OPEN: 'a', qb: 'b', Na: 'c', Cb: 'd' };
function Mp() {
  ct.call(this, 'd');
}
nt(Mp, ct);
function Fp() {
  ct.call(this, 'c');
}
nt(Fp, ct);
var jd;
function Wu() {}
nt(Wu, bp);
Wu.prototype.g = function () {
  return new XMLHttpRequest();
};
Wu.prototype.i = function () {
  return {};
};
jd = new Wu();
function Bo(t, e, n, r) {
  (this.l = t),
    (this.j = e),
    (this.m = n),
    (this.U = r || 1),
    (this.S = new So(this)),
    (this.O = LN),
    (t = $d ? 125 : void 0),
    (this.T = new zu(t)),
    (this.H = null),
    (this.i = !1),
    (this.s = this.A = this.v = this.K = this.F = this.V = this.B = null),
    (this.D = []),
    (this.g = null),
    (this.C = 0),
    (this.o = this.u = null),
    (this.Y = -1),
    (this.I = !1),
    (this.N = 0),
    (this.L = null),
    (this.$ = this.J = this.Z = this.P = !1),
    (this.h = new H1());
}
function H1() {
  (this.i = null), (this.g = ''), (this.h = !1);
}
var LN = 45e3,
  zd = {},
  Ll = {};
M = Bo.prototype;
M.setTimeout = function (t) {
  this.O = t;
};
function Bd(t, e, n) {
  (t.K = 1), (t.v = Gu(Dn(e))), (t.s = n), (t.P = !0), K1(t, null);
}
function K1(t, e) {
  (t.F = Date.now()), Ho(t), (t.A = Dn(t.v));
  var n = t.A,
    r = t.U;
  Array.isArray(r) || (r = [String(r)]),
    Z1(n.i, 't', r),
    (t.C = 0),
    (n = t.l.H),
    (t.h = new H1()),
    (t.g = EE(t.l, n ? e : null, !t.s)),
    0 < t.N && (t.L = new RN(ut(t.La, t, t.g), t.N)),
    M1(t.S, t.g, 'readystatechange', t.ib),
    (e = t.H ? C1(t.H) : {}),
    t.s
      ? (t.u || (t.u = 'POST'),
        (e['Content-Type'] = 'application/x-www-form-urlencoded'),
        t.g.da(t.A, t.u, t.s, e))
      : ((t.u = 'GET'), t.g.da(t.A, t.u, null, e)),
    _o(),
    xN(t.j, t.u, t.A, t.m, t.U, t.s);
}
M.ib = function (t) {
  t = t.target;
  const e = this.L;
  e && _n(t) == 3 ? e.l() : this.La(t);
};
M.La = function (t) {
  try {
    if (t == this.g)
      e: {
        const c = _n(this.g);
        var e = this.g.Ea();
        const h = this.g.aa();
        if (!(3 > c) && (c != 3 || $d || (this.g && (this.h.h || this.g.fa() || wy(this.g))))) {
          this.I || c != 4 || e == 7 || (e == 8 || 0 >= h ? _o(3) : _o(2)), qu(this);
          var n = this.g.aa();
          this.Y = n;
          t: if (W1(this)) {
            var r = wy(this.g);
            t = '';
            var i = r.length,
              s = _n(this.g) == 4;
            if (!this.h.i) {
              if (typeof TextDecoder > 'u') {
                Lr(this), Ks(this);
                var o = '';
                break t;
              }
              this.h.i = new Q.TextDecoder();
            }
            for (e = 0; e < i; e++)
              (this.h.h = !0), (t += this.h.i.decode(r[e], { stream: s && e == i - 1 }));
            r.splice(0, i), (this.h.g += t), (this.C = 0), (o = this.h.g);
          } else o = this.g.fa();
          if (((this.i = n == 200), DN(this.j, this.u, this.A, this.m, this.U, c, n), this.i)) {
            if (this.Z && !this.J) {
              t: {
                if (this.g) {
                  var a,
                    l = this.g;
                  if (
                    (a = l.g ? l.g.getResponseHeader('X-HTTP-Initial-Response') : null) &&
                    !Pl(a)
                  ) {
                    var u = a;
                    break t;
                  }
                }
                u = null;
              }
              if ((n = u))
                Ii(this.j, this.m, n, 'Initial handshake response via X-HTTP-Initial-Response'),
                  (this.J = !0),
                  Hd(this, n);
              else {
                (this.i = !1), (this.o = 3), gt(12), Lr(this), Ks(this);
                break e;
              }
            }
            this.P
              ? (q1(this, c, o),
                $d && this.i && c == 3 && (M1(this.S, this.T, 'tick', this.hb), this.T.start()))
              : (Ii(this.j, this.m, o, null), Hd(this, o)),
              c == 4 && Lr(this),
              this.i && !this.I && (c == 4 ? gE(this.l, this) : ((this.i = !1), Ho(this)));
          } else
            n == 400 && 0 < o.indexOf('Unknown SID')
              ? ((this.o = 3), gt(12))
              : ((this.o = 0), gt(13)),
              Lr(this),
              Ks(this);
        }
      }
  } catch {
  } finally {
  }
};
function W1(t) {
  return t.g ? t.u == 'GET' && t.K != 2 && t.l.Da : !1;
}
function q1(t, e, n) {
  let r = !0,
    i;
  for (; !t.I && t.C < n.length; )
    if (((i = $N(t, n)), i == Ll)) {
      e == 4 && ((t.o = 4), gt(14), (r = !1)), Ii(t.j, t.m, null, '[Incomplete Response]');
      break;
    } else if (i == zd) {
      (t.o = 4), gt(15), Ii(t.j, t.m, n, '[Invalid Chunk]'), (r = !1);
      break;
    } else Ii(t.j, t.m, i, null), Hd(t, i);
  W1(t) && i != Ll && i != zd && ((t.h.g = ''), (t.C = 0)),
    e != 4 || n.length != 0 || t.h.h || ((t.o = 1), gt(16), (r = !1)),
    (t.i = t.i && r),
    r
      ? 0 < n.length &&
        !t.$ &&
        ((t.$ = !0),
        (e = t.l),
        e.g == t &&
          e.$ &&
          !e.K &&
          (e.j.info('Great, no buffering proxy detected. Bytes received: ' + n.length),
          Kp(e),
          (e.K = !0),
          gt(11)))
      : (Ii(t.j, t.m, n, '[Invalid Chunked Response]'), Lr(t), Ks(t));
}
M.hb = function () {
  if (this.g) {
    var t = _n(this.g),
      e = this.g.fa();
    this.C < e.length && (qu(this), q1(this, t, e), this.i && t != 4 && Ho(this));
  }
};
function $N(t, e) {
  var n = t.C,
    r = e.indexOf(
      `
`,
      n
    );
  return r == -1
    ? Ll
    : ((n = Number(e.substring(n, r))),
      isNaN(n) ? zd : ((r += 1), r + n > e.length ? Ll : ((e = e.substr(r, n)), (t.C = r + n), e)));
}
M.cancel = function () {
  (this.I = !0), Lr(this);
};
function Ho(t) {
  (t.V = Date.now() + t.O), G1(t, t.O);
}
function G1(t, e) {
  if (t.B != null) throw Error('WatchDog timer not null');
  t.B = jo(ut(t.gb, t), e);
}
function qu(t) {
  t.B && (Q.clearTimeout(t.B), (t.B = null));
}
M.gb = function () {
  this.B = null;
  const t = Date.now();
  0 <= t - this.V
    ? (PN(this.j, this.A), this.K != 2 && (_o(), gt(17)), Lr(this), (this.o = 2), Ks(this))
    : G1(this, this.V - t);
};
function Ks(t) {
  t.l.G == 0 || t.I || gE(t.l, t);
}
function Lr(t) {
  qu(t);
  var e = t.L;
  e && typeof e.na == 'function' && e.na(),
    (t.L = null),
    Lp(t.T),
    F1(t.S),
    t.g && ((e = t.g), (t.g = null), e.abort(), e.na());
}
function Hd(t, e) {
  try {
    var n = t.l;
    if (n.G != 0 && (n.g == t || Kd(n.h, t))) {
      if (!t.J && Kd(n.h, t) && n.G == 3) {
        try {
          var r = n.Fa.g.parse(e);
        } catch {
          r = null;
        }
        if (Array.isArray(r) && r.length == 3) {
          var i = r;
          if (i[0] == 0) {
            e: if (!n.u) {
              if (n.g)
                if (n.g.F + 3e3 < t.F) Ml(n), Yu(n);
                else break e;
              Hp(n), gt(18);
            }
          } else
            (n.Ba = i[1]),
              0 < n.Ba - n.T &&
                37500 > i[2] &&
                n.L &&
                n.A == 0 &&
                !n.v &&
                (n.v = jo(ut(n.cb, n), 6e3));
          if (1 >= nE(n.h) && n.ja) {
            try {
              n.ja();
            } catch {}
            n.ja = void 0;
          }
        } else $r(n, 11);
      } else if (((t.J || n.g == t) && Ml(n), !Pl(e)))
        for (i = n.Fa.g.parse(e), e = 0; e < i.length; e++) {
          let u = i[e];
          if (((n.T = u[0]), (u = u[1]), n.G == 2))
            if (u[0] == 'c') {
              (n.I = u[1]), (n.ka = u[2]);
              const c = u[3];
              c != null && ((n.ma = c), n.j.info('VER=' + n.ma));
              const h = u[4];
              h != null && ((n.Ca = h), n.j.info('SVER=' + n.Ca));
              const d = u[5];
              d != null &&
                typeof d == 'number' &&
                0 < d &&
                ((r = 1.5 * d), (n.J = r), n.j.info('backChannelRequestTimeoutMs_=' + r)),
                (r = n);
              const m = t.g;
              if (m) {
                const y = m.g ? m.g.getResponseHeader('X-Client-Wire-Protocol') : null;
                if (y) {
                  var s = r.h;
                  s.g ||
                    (y.indexOf('spdy') == -1 && y.indexOf('quic') == -1 && y.indexOf('h2') == -1) ||
                    ((s.j = s.l), (s.g = new Set()), s.h && (Up(s, s.h), (s.h = null)));
                }
                if (r.D) {
                  const v = m.g ? m.g.getResponseHeader('X-HTTP-Session-Id') : null;
                  v && ((r.za = v), _e(r.F, r.D, v));
                }
              }
              (n.G = 3),
                n.l && n.l.xa(),
                n.$ && ((n.P = Date.now() - t.F), n.j.info('Handshake RTT: ' + n.P + 'ms')),
                (r = n);
              var o = t;
              if (((r.sa = wE(r, r.H ? r.ka : null, r.V)), o.J)) {
                rE(r.h, o);
                var a = o,
                  l = r.J;
                l && a.setTimeout(l), a.B && (qu(a), Ho(a)), (r.g = o);
              } else pE(r);
              0 < n.i.length && Ju(n);
            } else (u[0] != 'stop' && u[0] != 'close') || $r(n, 7);
          else
            n.G == 3 &&
              (u[0] == 'stop' || u[0] == 'close'
                ? u[0] == 'stop'
                  ? $r(n, 7)
                  : Bp(n)
                : u[0] != 'noop' && n.l && n.l.wa(u),
              (n.A = 0));
        }
    }
    _o(4);
  } catch {}
}
function bN(t) {
  if (t.W && typeof t.W == 'function') return t.W();
  if ((typeof Map < 'u' && t instanceof Map) || (typeof Set < 'u' && t instanceof Set))
    return Array.from(t.values());
  if (typeof t == 'string') return t.split('');
  if (Fu(t)) {
    for (var e = [], n = t.length, r = 0; r < n; r++) e.push(t[r]);
    return e;
  }
  (e = []), (n = 0);
  for (r in t) e[n++] = t[r];
  return e;
}
function MN(t) {
  if (t.oa && typeof t.oa == 'function') return t.oa();
  if (!t.W || typeof t.W != 'function') {
    if (typeof Map < 'u' && t instanceof Map) return Array.from(t.keys());
    if (!(typeof Set < 'u' && t instanceof Set)) {
      if (Fu(t) || typeof t == 'string') {
        var e = [];
        t = t.length;
        for (var n = 0; n < t; n++) e.push(n);
        return e;
      }
      (e = []), (n = 0);
      for (const r in t) e[n++] = r;
      return e;
    }
  }
}
function Q1(t, e) {
  if (t.forEach && typeof t.forEach == 'function') t.forEach(e, void 0);
  else if (Fu(t) || typeof t == 'string') Array.prototype.forEach.call(t, e, void 0);
  else
    for (var n = MN(t), r = bN(t), i = r.length, s = 0; s < i; s++)
      e.call(void 0, r[s], n && n[s], t);
}
var X1 = RegExp(
  '^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$'
);
function FN(t, e) {
  if (t) {
    t = t.split('&');
    for (var n = 0; n < t.length; n++) {
      var r = t[n].indexOf('='),
        i = null;
      if (0 <= r) {
        var s = t[n].substring(0, r);
        i = t[n].substring(r + 1);
      } else s = t[n];
      e(s, i ? decodeURIComponent(i.replace(/\+/g, ' ')) : '');
    }
  }
}
function jr(t, e) {
  if (
    ((this.g = this.s = this.j = ''),
    (this.m = null),
    (this.o = this.l = ''),
    (this.h = !1),
    t instanceof jr)
  ) {
    (this.h = e !== void 0 ? e : t.h),
      $l(this, t.j),
      (this.s = t.s),
      (this.g = t.g),
      bl(this, t.m),
      (this.l = t.l),
      (e = t.i);
    var n = new To();
    (n.i = e.i), e.g && ((n.g = new Map(e.g)), (n.h = e.h)), gy(this, n), (this.o = t.o);
  } else
    t && (n = String(t).match(X1))
      ? ((this.h = !!e),
        $l(this, n[1] || '', !0),
        (this.s = Os(n[2] || '')),
        (this.g = Os(n[3] || '', !0)),
        bl(this, n[4]),
        (this.l = Os(n[5] || '', !0)),
        gy(this, n[6] || '', !0),
        (this.o = Os(n[7] || '')))
      : ((this.h = !!e), (this.i = new To(null, this.h)));
}
jr.prototype.toString = function () {
  var t = [],
    e = this.j;
  e && t.push(Ls(e, yy, !0), ':');
  var n = this.g;
  return (
    (n || e == 'file') &&
      (t.push('//'),
      (e = this.s) && t.push(Ls(e, yy, !0), '@'),
      t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, '%$1')),
      (n = this.m),
      n != null && t.push(':', String(n))),
    (n = this.l) &&
      (this.g && n.charAt(0) != '/' && t.push('/'),
      t.push(Ls(n, n.charAt(0) == '/' ? jN : VN, !0))),
    (n = this.i.toString()) && t.push('?', n),
    (n = this.o) && t.push('#', Ls(n, BN)),
    t.join('')
  );
};
function Dn(t) {
  return new jr(t);
}
function $l(t, e, n) {
  (t.j = n ? Os(e, !0) : e), t.j && (t.j = t.j.replace(/:$/, ''));
}
function bl(t, e) {
  if (e) {
    if (((e = Number(e)), isNaN(e) || 0 > e)) throw Error('Bad port number ' + e);
    t.m = e;
  } else t.m = null;
}
function gy(t, e, n) {
  e instanceof To ? ((t.i = e), HN(t.i, t.h)) : (n || (e = Ls(e, zN)), (t.i = new To(e, t.h)));
}
function _e(t, e, n) {
  t.i.set(e, n);
}
function Gu(t) {
  return (
    _e(
      t,
      'zx',
      Math.floor(2147483648 * Math.random()).toString(36) +
        Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)
    ),
    t
  );
}
function Os(t, e) {
  return t ? (e ? decodeURI(t.replace(/%25/g, '%2525')) : decodeURIComponent(t)) : '';
}
function Ls(t, e, n) {
  return typeof t == 'string'
    ? ((t = encodeURI(t).replace(e, UN)), n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, '%$1')), t)
    : null;
}
function UN(t) {
  return (t = t.charCodeAt(0)), '%' + ((t >> 4) & 15).toString(16) + (t & 15).toString(16);
}
var yy = /[#\/\?@]/g,
  VN = /[#\?:]/g,
  jN = /[#\?]/g,
  zN = /[#\?@]/g,
  BN = /#/g;
function To(t, e) {
  (this.h = this.g = null), (this.i = t || null), (this.j = !!e);
}
function kr(t) {
  t.g ||
    ((t.g = new Map()),
    (t.h = 0),
    t.i &&
      FN(t.i, function (e, n) {
        t.add(decodeURIComponent(e.replace(/\+/g, ' ')), n);
      }));
}
M = To.prototype;
M.add = function (t, e) {
  kr(this), (this.i = null), (t = hs(this, t));
  var n = this.g.get(t);
  return n || this.g.set(t, (n = [])), n.push(e), (this.h += 1), this;
};
function Y1(t, e) {
  kr(t), (e = hs(t, e)), t.g.has(e) && ((t.i = null), (t.h -= t.g.get(e).length), t.g.delete(e));
}
function J1(t, e) {
  return kr(t), (e = hs(t, e)), t.g.has(e);
}
M.forEach = function (t, e) {
  kr(this),
    this.g.forEach(function (n, r) {
      n.forEach(function (i) {
        t.call(e, i, r, this);
      }, this);
    }, this);
};
M.oa = function () {
  kr(this);
  const t = Array.from(this.g.values()),
    e = Array.from(this.g.keys()),
    n = [];
  for (let r = 0; r < e.length; r++) {
    const i = t[r];
    for (let s = 0; s < i.length; s++) n.push(e[r]);
  }
  return n;
};
M.W = function (t) {
  kr(this);
  let e = [];
  if (typeof t == 'string') J1(this, t) && (e = e.concat(this.g.get(hs(this, t))));
  else {
    t = Array.from(this.g.values());
    for (let n = 0; n < t.length; n++) e = e.concat(t[n]);
  }
  return e;
};
M.set = function (t, e) {
  return (
    kr(this),
    (this.i = null),
    (t = hs(this, t)),
    J1(this, t) && (this.h -= this.g.get(t).length),
    this.g.set(t, [e]),
    (this.h += 1),
    this
  );
};
M.get = function (t, e) {
  return t ? ((t = this.W(t)), 0 < t.length ? String(t[0]) : e) : e;
};
function Z1(t, e, n) {
  Y1(t, e), 0 < n.length && ((t.i = null), t.g.set(hs(t, e), Cp(n)), (t.h += n.length));
}
M.toString = function () {
  if (this.i) return this.i;
  if (!this.g) return '';
  const t = [],
    e = Array.from(this.g.keys());
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    const s = encodeURIComponent(String(r)),
      o = this.W(r);
    for (r = 0; r < o.length; r++) {
      var i = s;
      o[r] !== '' && (i += '=' + encodeURIComponent(String(o[r]))), t.push(i);
    }
  }
  return (this.i = t.join('&'));
};
function hs(t, e) {
  return (e = String(e)), t.j && (e = e.toLowerCase()), e;
}
function HN(t, e) {
  e &&
    !t.j &&
    (kr(t),
    (t.i = null),
    t.g.forEach(function (n, r) {
      var i = r.toLowerCase();
      r != i && (Y1(this, r), Z1(this, i, n));
    }, t)),
    (t.j = e);
}
var KN = class {
  constructor(e, n) {
    (this.h = e), (this.g = n);
  }
};
function eE(t) {
  (this.l = t || WN),
    Q.PerformanceNavigationTiming
      ? ((t = Q.performance.getEntriesByType('navigation')),
        (t = 0 < t.length && (t[0].nextHopProtocol == 'hq' || t[0].nextHopProtocol == 'h2')))
      : (t = !!(Q.g && Q.g.Ga && Q.g.Ga() && Q.g.Ga().$b)),
    (this.j = t ? this.l : 1),
    (this.g = null),
    1 < this.j && (this.g = new Set()),
    (this.h = null),
    (this.i = []);
}
var WN = 10;
function tE(t) {
  return t.h ? !0 : t.g ? t.g.size >= t.j : !1;
}
function nE(t) {
  return t.h ? 1 : t.g ? t.g.size : 0;
}
function Kd(t, e) {
  return t.h ? t.h == e : t.g ? t.g.has(e) : !1;
}
function Up(t, e) {
  t.g ? t.g.add(e) : (t.h = e);
}
function rE(t, e) {
  t.h && t.h == e ? (t.h = null) : t.g && t.g.has(e) && t.g.delete(e);
}
eE.prototype.cancel = function () {
  if (((this.i = iE(this)), this.h)) this.h.cancel(), (this.h = null);
  else if (this.g && this.g.size !== 0) {
    for (const t of this.g.values()) t.cancel();
    this.g.clear();
  }
};
function iE(t) {
  if (t.h != null) return t.i.concat(t.h.D);
  if (t.g != null && t.g.size !== 0) {
    let e = t.i;
    for (const n of t.g.values()) e = e.concat(n.D);
    return e;
  }
  return Cp(t.i);
}
function Vp() {}
Vp.prototype.stringify = function (t) {
  return Q.JSON.stringify(t, void 0);
};
Vp.prototype.parse = function (t) {
  return Q.JSON.parse(t, void 0);
};
function qN() {
  this.g = new Vp();
}
function GN(t, e, n) {
  const r = n || '';
  try {
    Q1(t, function (i, s) {
      let o = i;
      Uo(i) && (o = Op(i)), e.push(r + s + '=' + encodeURIComponent(o));
    });
  } catch (i) {
    throw (e.push(r + 'type=' + encodeURIComponent('_badmap')), i);
  }
}
function QN(t, e) {
  const n = new Bu();
  if (Q.Image) {
    const r = new Image();
    (r.onload = Ea(_a, n, r, 'TestLoadImage: loaded', !0, e)),
      (r.onerror = Ea(_a, n, r, 'TestLoadImage: error', !1, e)),
      (r.onabort = Ea(_a, n, r, 'TestLoadImage: abort', !1, e)),
      (r.ontimeout = Ea(_a, n, r, 'TestLoadImage: timeout', !1, e)),
      Q.setTimeout(function () {
        r.ontimeout && r.ontimeout();
      }, 1e4),
      (r.src = t);
  } else e(!1);
}
function _a(t, e, n, r, i) {
  try {
    (e.onload = null), (e.onerror = null), (e.onabort = null), (e.ontimeout = null), i(r);
  } catch {}
}
function Ko(t) {
  (this.l = t.ac || null), (this.j = t.jb || !1);
}
nt(Ko, bp);
Ko.prototype.g = function () {
  return new Qu(this.l, this.j);
};
Ko.prototype.i = (function (t) {
  return function () {
    return t;
  };
})({});
function Qu(t, e) {
  qe.call(this),
    (this.D = t),
    (this.u = e),
    (this.m = void 0),
    (this.readyState = jp),
    (this.status = 0),
    (this.responseType = this.responseText = this.response = this.statusText = ''),
    (this.onreadystatechange = null),
    (this.v = new Headers()),
    (this.h = null),
    (this.C = 'GET'),
    (this.B = ''),
    (this.g = !1),
    (this.A = this.j = this.l = null);
}
nt(Qu, qe);
var jp = 0;
M = Qu.prototype;
M.open = function (t, e) {
  if (this.readyState != jp) throw (this.abort(), Error('Error reopening a connection'));
  (this.C = t), (this.B = e), (this.readyState = 1), Io(this);
};
M.send = function (t) {
  if (this.readyState != 1) throw (this.abort(), Error('need to call open() first. '));
  this.g = !0;
  const e = { headers: this.v, method: this.C, credentials: this.m, cache: void 0 };
  t && (e.body = t),
    (this.D || Q).fetch(new Request(this.B, e)).then(this.Wa.bind(this), this.ga.bind(this));
};
M.abort = function () {
  (this.response = this.responseText = ''),
    (this.v = new Headers()),
    (this.status = 0),
    this.j && this.j.cancel('Request was aborted.').catch(() => {}),
    1 <= this.readyState && this.g && this.readyState != 4 && ((this.g = !1), Wo(this)),
    (this.readyState = jp);
};
M.Wa = function (t) {
  if (
    this.g &&
    ((this.l = t),
    this.h ||
      ((this.status = this.l.status),
      (this.statusText = this.l.statusText),
      (this.h = t.headers),
      (this.readyState = 2),
      Io(this)),
    this.g && ((this.readyState = 3), Io(this), this.g))
  )
    if (this.responseType === 'arraybuffer')
      t.arrayBuffer().then(this.Ua.bind(this), this.ga.bind(this));
    else if (typeof Q.ReadableStream < 'u' && 'body' in t) {
      if (((this.j = t.body.getReader()), this.u)) {
        if (this.responseType)
          throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');
        this.response = [];
      } else (this.response = this.responseText = ''), (this.A = new TextDecoder());
      sE(this);
    } else t.text().then(this.Va.bind(this), this.ga.bind(this));
};
function sE(t) {
  t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t));
}
M.Ta = function (t) {
  if (this.g) {
    if (this.u && t.value) this.response.push(t.value);
    else if (!this.u) {
      var e = t.value ? t.value : new Uint8Array(0);
      (e = this.A.decode(e, { stream: !t.done })) && (this.response = this.responseText += e);
    }
    t.done ? Wo(this) : Io(this), this.readyState == 3 && sE(this);
  }
};
M.Va = function (t) {
  this.g && ((this.response = this.responseText = t), Wo(this));
};
M.Ua = function (t) {
  this.g && ((this.response = t), Wo(this));
};
M.ga = function () {
  this.g && Wo(this);
};
function Wo(t) {
  (t.readyState = 4), (t.l = null), (t.j = null), (t.A = null), Io(t);
}
M.setRequestHeader = function (t, e) {
  this.v.append(t, e);
};
M.getResponseHeader = function (t) {
  return (this.h && this.h.get(t.toLowerCase())) || '';
};
M.getAllResponseHeaders = function () {
  if (!this.h) return '';
  const t = [],
    e = this.h.entries();
  for (var n = e.next(); !n.done; ) (n = n.value), t.push(n[0] + ': ' + n[1]), (n = e.next());
  return t.join(`\r
`);
};
function Io(t) {
  t.onreadystatechange && t.onreadystatechange.call(t);
}
Object.defineProperty(Qu.prototype, 'withCredentials', {
  get: function () {
    return this.m === 'include';
  },
  set: function (t) {
    this.m = t ? 'include' : 'same-origin';
  }
});
var XN = Q.JSON.parse;
function Re(t) {
  qe.call(this),
    (this.headers = new Map()),
    (this.u = t || null),
    (this.h = !1),
    (this.C = this.g = null),
    (this.H = ''),
    (this.m = 0),
    (this.j = ''),
    (this.l = this.F = this.v = this.D = !1),
    (this.B = 0),
    (this.A = null),
    (this.J = oE),
    (this.K = this.L = !1);
}
nt(Re, qe);
var oE = '',
  YN = /^https?$/i,
  JN = ['POST', 'PUT'];
M = Re.prototype;
M.Ka = function (t) {
  this.L = t;
};
M.da = function (t, e, n, r) {
  if (this.g)
    throw Error(
      '[goog.net.XhrIo] Object is active with another request=' + this.H + '; newUri=' + t
    );
  (e = e ? e.toUpperCase() : 'GET'),
    (this.H = t),
    (this.j = ''),
    (this.m = 0),
    (this.D = !1),
    (this.h = !0),
    (this.g = this.u ? this.u.g() : jd.g()),
    (this.C = this.u ? my(this.u) : my(jd)),
    (this.g.onreadystatechange = ut(this.Ha, this));
  try {
    (this.F = !0), this.g.open(e, String(t), !0), (this.F = !1);
  } catch (s) {
    vy(this, s);
    return;
  }
  if (((t = n || ''), (n = new Map(this.headers)), r))
    if (Object.getPrototypeOf(r) === Object.prototype) for (var i in r) n.set(i, r[i]);
    else if (typeof r.keys == 'function' && typeof r.get == 'function')
      for (const s of r.keys()) n.set(s, r.get(s));
    else throw Error('Unknown input type for opt_headers: ' + String(r));
  (r = Array.from(n.keys()).find((s) => s.toLowerCase() == 'content-type')),
    (i = Q.FormData && t instanceof Q.FormData),
    !(0 <= _1(JN, e)) ||
      r ||
      i ||
      n.set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
  for (const [s, o] of n) this.g.setRequestHeader(s, o);
  this.J && (this.g.responseType = this.J),
    'withCredentials' in this.g &&
      this.g.withCredentials !== this.L &&
      (this.g.withCredentials = this.L);
  try {
    uE(this),
      0 < this.B &&
        ((this.K = ZN(this.g))
          ? ((this.g.timeout = this.B), (this.g.ontimeout = ut(this.qa, this)))
          : (this.A = $p(this.qa, this.B, this))),
      (this.v = !0),
      this.g.send(t),
      (this.v = !1);
  } catch (s) {
    vy(this, s);
  }
};
function ZN(t) {
  return es && gN() && typeof t.timeout == 'number' && t.ontimeout !== void 0;
}
M.qa = function () {
  typeof kp < 'u' &&
    this.g &&
    ((this.j = 'Timed out after ' + this.B + 'ms, aborting'),
    (this.m = 8),
    Ze(this, 'timeout'),
    this.abort(8));
};
function vy(t, e) {
  (t.h = !1), t.g && ((t.l = !0), t.g.abort(), (t.l = !1)), (t.j = e), (t.m = 5), aE(t), Xu(t);
}
function aE(t) {
  t.D || ((t.D = !0), Ze(t, 'complete'), Ze(t, 'error'));
}
M.abort = function (t) {
  this.g &&
    this.h &&
    ((this.h = !1),
    (this.l = !0),
    this.g.abort(),
    (this.l = !1),
    (this.m = t || 7),
    Ze(this, 'complete'),
    Ze(this, 'abort'),
    Xu(this));
};
M.M = function () {
  this.g && (this.h && ((this.h = !1), (this.l = !0), this.g.abort(), (this.l = !1)), Xu(this, !0)),
    Re.X.M.call(this);
};
M.Ha = function () {
  this.s || (this.F || this.v || this.l ? lE(this) : this.fb());
};
M.fb = function () {
  lE(this);
};
function lE(t) {
  if (t.h && typeof kp < 'u' && (!t.C[1] || _n(t) != 4 || t.aa() != 2)) {
    if (t.v && _n(t) == 4) $p(t.Ha, 0, t);
    else if ((Ze(t, 'readystatechange'), _n(t) == 4)) {
      t.h = !1;
      try {
        const a = t.aa();
        e: switch (a) {
          case 200:
          case 201:
          case 202:
          case 204:
          case 206:
          case 304:
          case 1223:
            var e = !0;
            break e;
          default:
            e = !1;
        }
        var n;
        if (!(n = e)) {
          var r;
          if ((r = a === 0)) {
            var i = String(t.H).match(X1)[1] || null;
            if (!i && Q.self && Q.self.location) {
              var s = Q.self.location.protocol;
              i = s.substr(0, s.length - 1);
            }
            r = !YN.test(i ? i.toLowerCase() : '');
          }
          n = r;
        }
        if (n) Ze(t, 'complete'), Ze(t, 'success');
        else {
          t.m = 6;
          try {
            var o = 2 < _n(t) ? t.g.statusText : '';
          } catch {
            o = '';
          }
          (t.j = o + ' [' + t.aa() + ']'), aE(t);
        }
      } finally {
        Xu(t);
      }
    }
  }
}
function Xu(t, e) {
  if (t.g) {
    uE(t);
    const n = t.g,
      r = t.C[0] ? Dl : null;
    (t.g = null), (t.C = null), e || Ze(t, 'ready');
    try {
      n.onreadystatechange = r;
    } catch {}
  }
}
function uE(t) {
  t.g && t.K && (t.g.ontimeout = null), t.A && (Q.clearTimeout(t.A), (t.A = null));
}
function _n(t) {
  return t.g ? t.g.readyState : 0;
}
M.aa = function () {
  try {
    return 2 < _n(this) ? this.g.status : -1;
  } catch {
    return -1;
  }
};
M.fa = function () {
  try {
    return this.g ? this.g.responseText : '';
  } catch {
    return '';
  }
};
M.Sa = function (t) {
  if (this.g) {
    var e = this.g.responseText;
    return t && e.indexOf(t) == 0 && (e = e.substring(t.length)), XN(e);
  }
};
function wy(t) {
  try {
    if (!t.g) return null;
    if ('response' in t.g) return t.g.response;
    switch (t.J) {
      case oE:
      case 'text':
        return t.g.responseText;
      case 'arraybuffer':
        if ('mozResponseArrayBuffer' in t.g) return t.g.mozResponseArrayBuffer;
    }
    return null;
  } catch {
    return null;
  }
}
M.Ea = function () {
  return this.m;
};
M.Oa = function () {
  return typeof this.j == 'string' ? this.j : String(this.j);
};
function cE(t) {
  let e = '';
  return (
    Np(t, function (n, r) {
      (e += r),
        (e += ':'),
        (e += n),
        (e += `\r
`);
    }),
    e
  );
}
function zp(t, e, n) {
  e: {
    for (r in n) {
      var r = !1;
      break e;
    }
    r = !0;
  }
  r ||
    ((n = cE(n)), typeof t == 'string' ? n != null && encodeURIComponent(String(n)) : _e(t, e, n));
}
function Cs(t, e, n) {
  return (n && n.internalChannelParams && n.internalChannelParams[t]) || e;
}
function hE(t) {
  (this.Ca = 0),
    (this.i = []),
    (this.j = new Bu()),
    (this.ka =
      this.sa =
      this.F =
      this.V =
      this.g =
      this.za =
      this.D =
      this.ia =
      this.o =
      this.S =
      this.s =
        null),
    (this.ab = this.U = 0),
    (this.Za = Cs('failFast', !1, t)),
    (this.L = this.v = this.u = this.m = this.l = null),
    (this.Y = !0),
    (this.pa = this.Ba = this.T = -1),
    (this.Z = this.A = this.C = 0),
    (this.Xa = Cs('baseRetryDelayMs', 5e3, t)),
    (this.bb = Cs('retryDelaySeedMs', 1e4, t)),
    (this.$a = Cs('forwardChannelMaxRetries', 2, t)),
    (this.ta = Cs('forwardChannelRequestTimeoutMs', 2e4, t)),
    (this.ra = (t && t.xmlHttpFactory) || void 0),
    (this.Da = (t && t.Zb) || !1),
    (this.J = void 0),
    (this.H = (t && t.supportsCrossDomainXhr) || !1),
    (this.I = ''),
    (this.h = new eE(t && t.concurrentRequestLimit)),
    (this.Fa = new qN()),
    (this.O = (t && t.fastHandshake) || !1),
    (this.N = (t && t.encodeInitMessageHeaders) || !1),
    this.O && this.N && (this.N = !1),
    (this.Ya = (t && t.Xb) || !1),
    t && t.Aa && this.j.Aa(),
    t && t.forceLongPolling && (this.Y = !1),
    (this.$ = (!this.O && this.Y && t && t.detectBufferingProxy) || !1),
    (this.ja = void 0),
    (this.P = 0),
    (this.K = !1),
    (this.la = this.B = null);
}
M = hE.prototype;
M.ma = 8;
M.G = 1;
function Bp(t) {
  if ((dE(t), t.G == 3)) {
    var e = t.U++,
      n = Dn(t.F);
    _e(n, 'SID', t.I),
      _e(n, 'RID', e),
      _e(n, 'TYPE', 'terminate'),
      qo(t, n),
      (e = new Bo(t, t.j, e, void 0)),
      (e.K = 2),
      (e.v = Gu(Dn(n))),
      (n = !1),
      Q.navigator && Q.navigator.sendBeacon && (n = Q.navigator.sendBeacon(e.v.toString(), '')),
      !n && Q.Image && ((new Image().src = e.v), (n = !0)),
      n || ((e.g = EE(e.l, null)), e.g.da(e.v)),
      (e.F = Date.now()),
      Ho(e);
  }
  vE(t);
}
function Yu(t) {
  t.g && (Kp(t), t.g.cancel(), (t.g = null));
}
function dE(t) {
  Yu(t),
    t.u && (Q.clearTimeout(t.u), (t.u = null)),
    Ml(t),
    t.h.cancel(),
    t.m && (typeof t.m == 'number' && Q.clearTimeout(t.m), (t.m = null));
}
function Ju(t) {
  tE(t.h) || t.m || ((t.m = !0), L1(t.Ja, t), (t.C = 0));
}
function eR(t, e) {
  return nE(t.h) >= t.h.j - (t.m ? 1 : 0)
    ? !1
    : t.m
    ? ((t.i = e.D.concat(t.i)), !0)
    : t.G == 1 || t.G == 2 || t.C >= (t.Za ? 0 : t.$a)
    ? !1
    : ((t.m = jo(ut(t.Ja, t, e), yE(t, t.C))), t.C++, !0);
}
M.Ja = function (t) {
  if (this.m)
    if (((this.m = null), this.G == 1)) {
      if (!t) {
        (this.U = Math.floor(1e5 * Math.random())), (t = this.U++);
        const i = new Bo(this, this.j, t, void 0);
        let s = this.s;
        if (
          (this.S && (s ? ((s = C1(s)), A1(s, this.S)) : (s = this.S)),
          this.o !== null || this.N || ((i.H = s), (s = null)),
          this.O)
        )
          e: {
            for (var e = 0, n = 0; n < this.i.length; n++) {
              t: {
                var r = this.i[n];
                if ('__data__' in r.g && ((r = r.g.__data__), typeof r == 'string')) {
                  r = r.length;
                  break t;
                }
                r = void 0;
              }
              if (r === void 0) break;
              if (((e += r), 4096 < e)) {
                e = n;
                break e;
              }
              if (e === 4096 || n === this.i.length - 1) {
                e = n + 1;
                break e;
              }
            }
            e = 1e3;
          }
        else e = 1e3;
        (e = fE(this, i, e)),
          (n = Dn(this.F)),
          _e(n, 'RID', t),
          _e(n, 'CVER', 22),
          this.D && _e(n, 'X-HTTP-Session-Id', this.D),
          qo(this, n),
          s &&
            (this.N
              ? (e = 'headers=' + encodeURIComponent(String(cE(s))) + '&' + e)
              : this.o && zp(n, this.o, s)),
          Up(this.h, i),
          this.Ya && _e(n, 'TYPE', 'init'),
          this.O
            ? (_e(n, '$req', e), _e(n, 'SID', 'null'), (i.Z = !0), Bd(i, n, null))
            : Bd(i, n, e),
          (this.G = 2);
      }
    } else this.G == 3 && (t ? Ey(this, t) : this.i.length == 0 || tE(this.h) || Ey(this));
};
function Ey(t, e) {
  var n;
  e ? (n = e.m) : (n = t.U++);
  const r = Dn(t.F);
  _e(r, 'SID', t.I),
    _e(r, 'RID', n),
    _e(r, 'AID', t.T),
    qo(t, r),
    t.o && t.s && zp(r, t.o, t.s),
    (n = new Bo(t, t.j, n, t.C + 1)),
    t.o === null && (n.H = t.s),
    e && (t.i = e.D.concat(t.i)),
    (e = fE(t, n, 1e3)),
    n.setTimeout(Math.round(0.5 * t.ta) + Math.round(0.5 * t.ta * Math.random())),
    Up(t.h, n),
    Bd(n, r, e);
}
function qo(t, e) {
  t.ia &&
    Np(t.ia, function (n, r) {
      _e(e, r, n);
    }),
    t.l &&
      Q1({}, function (n, r) {
        _e(e, r, n);
      });
}
function fE(t, e, n) {
  n = Math.min(t.i.length, n);
  var r = t.l ? ut(t.l.Ra, t.l, t) : null;
  e: {
    var i = t.i;
    let s = -1;
    for (;;) {
      const o = ['count=' + n];
      s == -1 ? (0 < n ? ((s = i[0].h), o.push('ofs=' + s)) : (s = 0)) : o.push('ofs=' + s);
      let a = !0;
      for (let l = 0; l < n; l++) {
        let u = i[l].h;
        const c = i[l].g;
        if (((u -= s), 0 > u)) (s = Math.max(0, i[l].h - 100)), (a = !1);
        else
          try {
            GN(c, o, 'req' + u + '_');
          } catch {
            r && r(c);
          }
      }
      if (a) {
        r = o.join('&');
        break e;
      }
    }
  }
  return (t = t.i.splice(0, n)), (e.D = t), r;
}
function pE(t) {
  t.g || t.u || ((t.Z = 1), L1(t.Ia, t), (t.A = 0));
}
function Hp(t) {
  return t.g || t.u || 3 <= t.A ? !1 : (t.Z++, (t.u = jo(ut(t.Ia, t), yE(t, t.A))), t.A++, !0);
}
M.Ia = function () {
  if (((this.u = null), mE(this), this.$ && !(this.K || this.g == null || 0 >= this.P))) {
    var t = 2 * this.P;
    this.j.info('BP detection timer enabled: ' + t), (this.B = jo(ut(this.eb, this), t));
  }
};
M.eb = function () {
  this.B &&
    ((this.B = null),
    this.j.info('BP detection timeout reached.'),
    this.j.info('Buffering proxy detected and switch to long-polling!'),
    (this.L = !1),
    (this.K = !0),
    gt(10),
    Yu(this),
    mE(this));
};
function Kp(t) {
  t.B != null && (Q.clearTimeout(t.B), (t.B = null));
}
function mE(t) {
  (t.g = new Bo(t, t.j, 'rpc', t.Z)), t.o === null && (t.g.H = t.s), (t.g.N = 0);
  var e = Dn(t.sa);
  _e(e, 'RID', 'rpc'),
    _e(e, 'SID', t.I),
    _e(e, 'CI', t.L ? '0' : '1'),
    _e(e, 'AID', t.T),
    _e(e, 'TYPE', 'xmlhttp'),
    qo(t, e),
    t.o && t.s && zp(e, t.o, t.s),
    t.J && t.g.setTimeout(t.J);
  var n = t.g;
  (t = t.ka), (n.K = 1), (n.v = Gu(Dn(e))), (n.s = null), (n.P = !0), K1(n, t);
}
M.cb = function () {
  this.v != null && ((this.v = null), Yu(this), Hp(this), gt(19));
};
function Ml(t) {
  t.v != null && (Q.clearTimeout(t.v), (t.v = null));
}
function gE(t, e) {
  var n = null;
  if (t.g == e) {
    Ml(t), Kp(t), (t.g = null);
    var r = 2;
  } else if (Kd(t.h, e)) (n = e.D), rE(t.h, e), (r = 1);
  else return;
  if (t.G != 0) {
    if (((t.pa = e.Y), e.i))
      if (r == 1) {
        (n = e.s ? e.s.length : 0), (e = Date.now() - e.F);
        var i = t.C;
        (r = Hu()), Ze(r, new j1(r, n)), Ju(t);
      } else pE(t);
    else if (
      ((i = e.o), i == 3 || (i == 0 && 0 < t.pa) || !((r == 1 && eR(t, e)) || (r == 2 && Hp(t))))
    )
      switch ((n && 0 < n.length && ((e = t.h), (e.i = e.i.concat(n))), i)) {
        case 1:
          $r(t, 5);
          break;
        case 4:
          $r(t, 10);
          break;
        case 3:
          $r(t, 6);
          break;
        default:
          $r(t, 2);
      }
  }
}
function yE(t, e) {
  let n = t.Xa + Math.floor(Math.random() * t.bb);
  return t.l || (n *= 2), n * e;
}
function $r(t, e) {
  if ((t.j.info('Error code ' + e), e == 2)) {
    var n = null;
    t.l && (n = null);
    var r = ut(t.kb, t);
    n ||
      ((n = new jr('//www.google.com/images/cleardot.gif')),
      (Q.location && Q.location.protocol == 'http') || $l(n, 'https'),
      Gu(n)),
      QN(n.toString(), r);
  } else gt(2);
  (t.G = 0), t.l && t.l.va(e), vE(t), dE(t);
}
M.kb = function (t) {
  t
    ? (this.j.info('Successfully pinged google.com'), gt(2))
    : (this.j.info('Failed to ping google.com'), gt(1));
};
function vE(t) {
  if (((t.G = 0), (t.la = []), t.l)) {
    const e = iE(t.h);
    (e.length != 0 || t.i.length != 0) &&
      (uy(t.la, e), uy(t.la, t.i), (t.h.i.length = 0), Cp(t.i), (t.i.length = 0)),
      t.l.ua();
  }
}
function wE(t, e, n) {
  var r = n instanceof jr ? Dn(n) : new jr(n, void 0);
  if (r.g != '') e && (r.g = e + '.' + r.g), bl(r, r.m);
  else {
    var i = Q.location;
    (r = i.protocol), (e = e ? e + '.' + i.hostname : i.hostname), (i = +i.port);
    var s = new jr(null, void 0);
    r && $l(s, r), e && (s.g = e), i && bl(s, i), n && (s.l = n), (r = s);
  }
  return (n = t.D), (e = t.za), n && e && _e(r, n, e), _e(r, 'VER', t.ma), qo(t, r), r;
}
function EE(t, e, n) {
  if (e && !t.H) throw Error("Can't create secondary domain capable XhrIo object.");
  return (e = n && t.Da && !t.ra ? new Re(new Ko({ jb: !0 })) : new Re(t.ra)), e.Ka(t.H), e;
}
function SE() {}
M = SE.prototype;
M.xa = function () {};
M.wa = function () {};
M.va = function () {};
M.ua = function () {};
M.Ra = function () {};
function Fl() {
  if (es && !(10 <= Number(yN))) throw Error('Environmental error: no available transport.');
}
Fl.prototype.g = function (t, e) {
  return new Lt(t, e);
};
function Lt(t, e) {
  qe.call(this),
    (this.g = new hE(e)),
    (this.l = t),
    (this.h = (e && e.messageUrlParams) || null),
    (t = (e && e.messageHeaders) || null),
    e &&
      e.clientProtocolHeaderRequired &&
      (t ? (t['X-Client-Protocol'] = 'webchannel') : (t = { 'X-Client-Protocol': 'webchannel' })),
    (this.g.s = t),
    (t = (e && e.initMessageHeaders) || null),
    e &&
      e.messageContentType &&
      (t
        ? (t['X-WebChannel-Content-Type'] = e.messageContentType)
        : (t = { 'X-WebChannel-Content-Type': e.messageContentType })),
    e &&
      e.ya &&
      (t
        ? (t['X-WebChannel-Client-Profile'] = e.ya)
        : (t = { 'X-WebChannel-Client-Profile': e.ya })),
    (this.g.S = t),
    (t = e && e.Yb) && !Pl(t) && (this.g.o = t),
    (this.A = (e && e.supportsCrossDomainXhr) || !1),
    (this.v = (e && e.sendRawJson) || !1),
    (e = e && e.httpSessionIdParam) &&
      !Pl(e) &&
      ((this.g.D = e), (t = this.h), t !== null && e in t && ((t = this.h), e in t && delete t[e])),
    (this.j = new ds(this));
}
nt(Lt, qe);
Lt.prototype.m = function () {
  (this.g.l = this.j), this.A && (this.g.H = !0);
  var t = this.g,
    e = this.l,
    n = this.h || void 0;
  gt(0), (t.V = e), (t.ia = n || {}), (t.L = t.Y), (t.F = wE(t, null, t.V)), Ju(t);
};
Lt.prototype.close = function () {
  Bp(this.g);
};
Lt.prototype.u = function (t) {
  var e = this.g;
  if (typeof t == 'string') {
    var n = {};
    (n.__data__ = t), (t = n);
  } else this.v && ((n = {}), (n.__data__ = Op(t)), (t = n));
  e.i.push(new KN(e.ab++, t)), e.G == 3 && Ju(e);
};
Lt.prototype.M = function () {
  (this.g.l = null), delete this.j, Bp(this.g), delete this.g, Lt.X.M.call(this);
};
function _E(t) {
  Mp.call(this);
  var e = t.__sm__;
  if (e) {
    e: {
      for (const n in e) {
        t = n;
        break e;
      }
      t = void 0;
    }
    (this.i = t) && ((t = this.i), (e = e !== null && t in e ? e[t] : void 0)), (this.data = e);
  } else this.data = t;
}
nt(_E, Mp);
function TE() {
  Fp.call(this), (this.status = 1);
}
nt(TE, Fp);
function ds(t) {
  this.g = t;
}
nt(ds, SE);
ds.prototype.xa = function () {
  Ze(this.g, 'a');
};
ds.prototype.wa = function (t) {
  Ze(this.g, new _E(t));
};
ds.prototype.va = function (t) {
  Ze(this.g, new TE());
};
ds.prototype.ua = function () {
  Ze(this.g, 'b');
};
Fl.prototype.createWebChannel = Fl.prototype.g;
Lt.prototype.send = Lt.prototype.u;
Lt.prototype.open = Lt.prototype.m;
Lt.prototype.close = Lt.prototype.close;
Ku.NO_ERROR = 0;
Ku.TIMEOUT = 8;
Ku.HTTP_ERROR = 6;
z1.COMPLETE = 'complete';
B1.EventType = zo;
zo.OPEN = 'a';
zo.CLOSE = 'b';
zo.ERROR = 'c';
zo.MESSAGE = 'd';
qe.prototype.listen = qe.prototype.N;
Re.prototype.listenOnce = Re.prototype.O;
Re.prototype.getLastError = Re.prototype.Oa;
Re.prototype.getLastErrorCode = Re.prototype.Ea;
Re.prototype.getStatus = Re.prototype.aa;
Re.prototype.getResponseJson = Re.prototype.Sa;
Re.prototype.getResponseText = Re.prototype.fa;
Re.prototype.send = Re.prototype.da;
Re.prototype.setWithCredentials = Re.prototype.Ka;
var tR = function () {
    return new Fl();
  },
  nR = function () {
    return Hu();
  },
  fh = Ku,
  rR = z1,
  iR = oi,
  Sy = {
    sb: 0,
    vb: 1,
    wb: 2,
    Pb: 3,
    Ub: 4,
    Rb: 5,
    Sb: 6,
    Qb: 7,
    Ob: 8,
    Tb: 9,
    PROXY: 10,
    NOPROXY: 11,
    Mb: 12,
    Ib: 13,
    Jb: 14,
    Hb: 15,
    Kb: 16,
    Lb: 17,
    ob: 18,
    nb: 19,
    pb: 20
  },
  sR = Ko,
  Ta = B1,
  oR = Re;
const _y = '@firebase/firestore';
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let ot = class {
  constructor(e) {
    this.uid = e;
  }
  isAuthenticated() {
    return this.uid != null;
  }
  toKey() {
    return this.isAuthenticated() ? 'uid:' + this.uid : 'anonymous-user';
  }
  isEqual(e) {
    return e.uid === this.uid;
  }
};
(ot.UNAUTHENTICATED = new ot(null)),
  (ot.GOOGLE_CREDENTIALS = new ot('google-credentials-uid')),
  (ot.FIRST_PARTY = new ot('first-party-uid')),
  (ot.MOCK_USER = new ot('mock-user'));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let fs = '9.17.2';
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ei = new _p('@firebase/firestore');
function Ty() {
  return ei.logLevel;
}
function V(t, ...e) {
  if (ei.logLevel <= ae.DEBUG) {
    const n = e.map(Wp);
    ei.debug(`Firestore (${fs}): ${t}`, ...n);
  }
}
function Pn(t, ...e) {
  if (ei.logLevel <= ae.ERROR) {
    const n = e.map(Wp);
    ei.error(`Firestore (${fs}): ${t}`, ...n);
  }
}
function Wd(t, ...e) {
  if (ei.logLevel <= ae.WARN) {
    const n = e.map(Wp);
    ei.warn(`Firestore (${fs}): ${t}`, ...n);
  }
}
function Wp(t) {
  if (typeof t == 'string') return t;
  try {
    return (e = t), JSON.stringify(e);
  } catch {
    return t;
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var e;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function J(t = 'Unexpected state') {
  const e = `FIRESTORE (${fs}) INTERNAL ASSERTION FAILED: ` + t;
  throw (Pn(e), new Error(e));
}
function Fe(t, e) {
  t || J();
}
function oe(t, e) {
  return t;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const O = {
  OK: 'ok',
  CANCELLED: 'cancelled',
  UNKNOWN: 'unknown',
  INVALID_ARGUMENT: 'invalid-argument',
  DEADLINE_EXCEEDED: 'deadline-exceeded',
  NOT_FOUND: 'not-found',
  ALREADY_EXISTS: 'already-exists',
  PERMISSION_DENIED: 'permission-denied',
  UNAUTHENTICATED: 'unauthenticated',
  RESOURCE_EXHAUSTED: 'resource-exhausted',
  FAILED_PRECONDITION: 'failed-precondition',
  ABORTED: 'aborted',
  OUT_OF_RANGE: 'out-of-range',
  UNIMPLEMENTED: 'unimplemented',
  INTERNAL: 'internal',
  UNAVAILABLE: 'unavailable',
  DATA_LOSS: 'data-loss'
};
let q = class extends Mn {
  constructor(e, n) {
    super(e, n),
      (this.code = e),
      (this.message = n),
      (this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`);
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class zr {
  constructor() {
    this.promise = new Promise((e, n) => {
      (this.resolve = e), (this.reject = n);
    });
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class IE {
  constructor(e, n) {
    (this.user = n),
      (this.type = 'OAuth'),
      (this.headers = new Map()),
      this.headers.set('Authorization', `Bearer ${e}`);
  }
}
class aR {
  getToken() {
    return Promise.resolve(null);
  }
  invalidateToken() {}
  start(e, n) {
    e.enqueueRetryable(() => n(ot.UNAUTHENTICATED));
  }
  shutdown() {}
}
class lR {
  constructor(e) {
    (this.token = e), (this.changeListener = null);
  }
  getToken() {
    return Promise.resolve(this.token);
  }
  invalidateToken() {}
  start(e, n) {
    (this.changeListener = n), e.enqueueRetryable(() => n(this.token.user));
  }
  shutdown() {
    this.changeListener = null;
  }
}
class uR {
  constructor(e) {
    (this.t = e),
      (this.currentUser = ot.UNAUTHENTICATED),
      (this.i = 0),
      (this.forceRefresh = !1),
      (this.auth = null);
  }
  start(e, n) {
    let r = this.i;
    const i = (l) => (this.i !== r ? ((r = this.i), n(l)) : Promise.resolve());
    let s = new zr();
    this.o = () => {
      this.i++,
        (this.currentUser = this.u()),
        s.resolve(),
        (s = new zr()),
        e.enqueueRetryable(() => i(this.currentUser));
    };
    const o = () => {
        const l = s;
        e.enqueueRetryable(async () => {
          await l.promise, await i(this.currentUser);
        });
      },
      a = (l) => {
        V('FirebaseAuthCredentialsProvider', 'Auth detected'),
          (this.auth = l),
          this.auth.addAuthTokenListener(this.o),
          o();
      };
    this.t.onInit((l) => a(l)),
      setTimeout(() => {
        if (!this.auth) {
          const l = this.t.getImmediate({ optional: !0 });
          l
            ? a(l)
            : (V('FirebaseAuthCredentialsProvider', 'Auth not yet detected'),
              s.resolve(),
              (s = new zr()));
        }
      }, 0),
      o();
  }
  getToken() {
    const e = this.i,
      n = this.forceRefresh;
    return (
      (this.forceRefresh = !1),
      this.auth
        ? this.auth
            .getToken(n)
            .then((r) =>
              this.i !== e
                ? (V('FirebaseAuthCredentialsProvider', 'getToken aborted due to token change.'),
                  this.getToken())
                : r
                ? (Fe(typeof r.accessToken == 'string'), new IE(r.accessToken, this.currentUser))
                : null
            )
        : Promise.resolve(null)
    );
  }
  invalidateToken() {
    this.forceRefresh = !0;
  }
  shutdown() {
    this.auth && this.auth.removeAuthTokenListener(this.o);
  }
  u() {
    const e = this.auth && this.auth.getUid();
    return Fe(e === null || typeof e == 'string'), new ot(e);
  }
}
class cR {
  constructor(e, n, r, i) {
    (this.h = e),
      (this.l = n),
      (this.m = r),
      (this.g = i),
      (this.type = 'FirstParty'),
      (this.user = ot.FIRST_PARTY),
      (this.p = new Map());
  }
  I() {
    return this.g
      ? this.g()
      : (Fe(
          !(
            typeof this.h != 'object' ||
            this.h === null ||
            !this.h.auth ||
            !this.h.auth.getAuthHeaderValueForFirstParty
          )
        ),
        this.h.auth.getAuthHeaderValueForFirstParty([]));
  }
  get headers() {
    this.p.set('X-Goog-AuthUser', this.l);
    const e = this.I();
    return (
      e && this.p.set('Authorization', e),
      this.m && this.p.set('X-Goog-Iam-Authorization-Token', this.m),
      this.p
    );
  }
}
class hR {
  constructor(e, n, r, i) {
    (this.h = e), (this.l = n), (this.m = r), (this.g = i);
  }
  getToken() {
    return Promise.resolve(new cR(this.h, this.l, this.m, this.g));
  }
  start(e, n) {
    e.enqueueRetryable(() => n(ot.FIRST_PARTY));
  }
  shutdown() {}
  invalidateToken() {}
}
class dR {
  constructor(e) {
    (this.value = e),
      (this.type = 'AppCheck'),
      (this.headers = new Map()),
      e && e.length > 0 && this.headers.set('x-firebase-appcheck', this.value);
  }
}
class fR {
  constructor(e) {
    (this.T = e), (this.forceRefresh = !1), (this.appCheck = null), (this.A = null);
  }
  start(e, n) {
    const r = (s) => {
      s.error != null &&
        V(
          'FirebaseAppCheckTokenProvider',
          `Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`
        );
      const o = s.token !== this.A;
      return (
        (this.A = s.token),
        V('FirebaseAppCheckTokenProvider', `Received ${o ? 'new' : 'existing'} token.`),
        o ? n(s.token) : Promise.resolve()
      );
    };
    this.o = (s) => {
      e.enqueueRetryable(() => r(s));
    };
    const i = (s) => {
      V('FirebaseAppCheckTokenProvider', 'AppCheck detected'),
        (this.appCheck = s),
        this.appCheck.addTokenListener(this.o);
    };
    this.T.onInit((s) => i(s)),
      setTimeout(() => {
        if (!this.appCheck) {
          const s = this.T.getImmediate({ optional: !0 });
          s ? i(s) : V('FirebaseAppCheckTokenProvider', 'AppCheck not yet detected');
        }
      }, 0);
  }
  getToken() {
    const e = this.forceRefresh;
    return (
      (this.forceRefresh = !1),
      this.appCheck
        ? this.appCheck
            .getToken(e)
            .then((n) =>
              n ? (Fe(typeof n.token == 'string'), (this.A = n.token), new dR(n.token)) : null
            )
        : Promise.resolve(null)
    );
  }
  invalidateToken() {
    this.forceRefresh = !0;
  }
  shutdown() {
    this.appCheck && this.appCheck.removeTokenListener(this.o);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function pR(t) {
  const e = typeof self < 'u' && (self.crypto || self.msCrypto),
    n = new Uint8Array(t);
  if (e && typeof e.getRandomValues == 'function') e.getRandomValues(n);
  else for (let r = 0; r < t; r++) n[r] = Math.floor(256 * Math.random());
  return n;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class mR {
  static R() {
    const e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
      n = Math.floor(256 / e.length) * e.length;
    let r = '';
    for (; r.length < 20; ) {
      const i = pR(40);
      for (let s = 0; s < i.length; ++s)
        r.length < 20 && i[s] < n && (r += e.charAt(i[s] % e.length));
    }
    return r;
  }
}
function ue(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
function ts(t, e, n) {
  return t.length === e.length && t.every((r, i) => n(r, e[i]));
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ct {
  constructor(e, n) {
    if (((this.seconds = e), (this.nanoseconds = n), n < 0))
      throw new q(O.INVALID_ARGUMENT, 'Timestamp nanoseconds out of range: ' + n);
    if (n >= 1e9) throw new q(O.INVALID_ARGUMENT, 'Timestamp nanoseconds out of range: ' + n);
    if (e < -62135596800) throw new q(O.INVALID_ARGUMENT, 'Timestamp seconds out of range: ' + e);
    if (e >= 253402300800) throw new q(O.INVALID_ARGUMENT, 'Timestamp seconds out of range: ' + e);
  }
  static now() {
    return Ct.fromMillis(Date.now());
  }
  static fromDate(e) {
    return Ct.fromMillis(e.getTime());
  }
  static fromMillis(e) {
    const n = Math.floor(e / 1e3),
      r = Math.floor(1e6 * (e - 1e3 * n));
    return new Ct(n, r);
  }
  toDate() {
    return new Date(this.toMillis());
  }
  toMillis() {
    return 1e3 * this.seconds + this.nanoseconds / 1e6;
  }
  _compareTo(e) {
    return this.seconds === e.seconds
      ? ue(this.nanoseconds, e.nanoseconds)
      : ue(this.seconds, e.seconds);
  }
  isEqual(e) {
    return e.seconds === this.seconds && e.nanoseconds === this.nanoseconds;
  }
  toString() {
    return 'Timestamp(seconds=' + this.seconds + ', nanoseconds=' + this.nanoseconds + ')';
  }
  toJSON() {
    return { seconds: this.seconds, nanoseconds: this.nanoseconds };
  }
  valueOf() {
    const e = this.seconds - -62135596800;
    return String(e).padStart(12, '0') + '.' + String(this.nanoseconds).padStart(9, '0');
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Y {
  constructor(e) {
    this.timestamp = e;
  }
  static fromTimestamp(e) {
    return new Y(e);
  }
  static min() {
    return new Y(new Ct(0, 0));
  }
  static max() {
    return new Y(new Ct(253402300799, 999999999));
  }
  compareTo(e) {
    return this.timestamp._compareTo(e.timestamp);
  }
  isEqual(e) {
    return this.timestamp.isEqual(e.timestamp);
  }
  toMicroseconds() {
    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
  }
  toString() {
    return 'SnapshotVersion(' + this.timestamp.toString() + ')';
  }
  toTimestamp() {
    return this.timestamp;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ko {
  constructor(e, n, r) {
    n === void 0 ? (n = 0) : n > e.length && J(),
      r === void 0 ? (r = e.length - n) : r > e.length - n && J(),
      (this.segments = e),
      (this.offset = n),
      (this.len = r);
  }
  get length() {
    return this.len;
  }
  isEqual(e) {
    return ko.comparator(this, e) === 0;
  }
  child(e) {
    const n = this.segments.slice(this.offset, this.limit());
    return (
      e instanceof ko
        ? e.forEach((r) => {
            n.push(r);
          })
        : n.push(e),
      this.construct(n)
    );
  }
  limit() {
    return this.offset + this.length;
  }
  popFirst(e) {
    return (
      (e = e === void 0 ? 1 : e), this.construct(this.segments, this.offset + e, this.length - e)
    );
  }
  popLast() {
    return this.construct(this.segments, this.offset, this.length - 1);
  }
  firstSegment() {
    return this.segments[this.offset];
  }
  lastSegment() {
    return this.get(this.length - 1);
  }
  get(e) {
    return this.segments[this.offset + e];
  }
  isEmpty() {
    return this.length === 0;
  }
  isPrefixOf(e) {
    if (e.length < this.length) return !1;
    for (let n = 0; n < this.length; n++) if (this.get(n) !== e.get(n)) return !1;
    return !0;
  }
  isImmediateParentOf(e) {
    if (this.length + 1 !== e.length) return !1;
    for (let n = 0; n < this.length; n++) if (this.get(n) !== e.get(n)) return !1;
    return !0;
  }
  forEach(e) {
    for (let n = this.offset, r = this.limit(); n < r; n++) e(this.segments[n]);
  }
  toArray() {
    return this.segments.slice(this.offset, this.limit());
  }
  static comparator(e, n) {
    const r = Math.min(e.length, n.length);
    for (let i = 0; i < r; i++) {
      const s = e.get(i),
        o = n.get(i);
      if (s < o) return -1;
      if (s > o) return 1;
    }
    return e.length < n.length ? -1 : e.length > n.length ? 1 : 0;
  }
}
class Ne extends ko {
  construct(e, n, r) {
    return new Ne(e, n, r);
  }
  canonicalString() {
    return this.toArray().join('/');
  }
  toString() {
    return this.canonicalString();
  }
  static fromString(...e) {
    const n = [];
    for (const r of e) {
      if (r.indexOf('//') >= 0)
        throw new q(
          O.INVALID_ARGUMENT,
          `Invalid segment (${r}). Paths must not contain // in them.`
        );
      n.push(...r.split('/').filter((i) => i.length > 0));
    }
    return new Ne(n);
  }
  static emptyPath() {
    return new Ne([]);
  }
}
const gR = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
class St extends ko {
  construct(e, n, r) {
    return new St(e, n, r);
  }
  static isValidIdentifier(e) {
    return gR.test(e);
  }
  canonicalString() {
    return this.toArray()
      .map(
        (e) => (
          (e = e.replace(/\\/g, '\\\\').replace(/`/g, '\\`')),
          St.isValidIdentifier(e) || (e = '`' + e + '`'),
          e
        )
      )
      .join('.');
  }
  toString() {
    return this.canonicalString();
  }
  isKeyField() {
    return this.length === 1 && this.get(0) === '__name__';
  }
  static keyField() {
    return new St(['__name__']);
  }
  static fromServerFormat(e) {
    const n = [];
    let r = '',
      i = 0;
    const s = () => {
      if (r.length === 0)
        throw new q(
          O.INVALID_ARGUMENT,
          `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`
        );
      n.push(r), (r = '');
    };
    let o = !1;
    for (; i < e.length; ) {
      const a = e[i];
      if (a === '\\') {
        if (i + 1 === e.length)
          throw new q(O.INVALID_ARGUMENT, 'Path has trailing escape character: ' + e);
        const l = e[i + 1];
        if (l !== '\\' && l !== '.' && l !== '`')
          throw new q(O.INVALID_ARGUMENT, 'Path has invalid escape sequence: ' + e);
        (r += l), (i += 2);
      } else a === '`' ? ((o = !o), i++) : a !== '.' || o ? ((r += a), i++) : (s(), i++);
    }
    if ((s(), o)) throw new q(O.INVALID_ARGUMENT, 'Unterminated ` in path: ' + e);
    return new St(n);
  }
  static emptyPath() {
    return new St([]);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class K {
  constructor(e) {
    this.path = e;
  }
  static fromPath(e) {
    return new K(Ne.fromString(e));
  }
  static fromName(e) {
    return new K(Ne.fromString(e).popFirst(5));
  }
  static empty() {
    return new K(Ne.emptyPath());
  }
  get collectionGroup() {
    return this.path.popLast().lastSegment();
  }
  hasCollectionId(e) {
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === e;
  }
  getCollectionGroup() {
    return this.path.get(this.path.length - 2);
  }
  getCollectionPath() {
    return this.path.popLast();
  }
  isEqual(e) {
    return e !== null && Ne.comparator(this.path, e.path) === 0;
  }
  toString() {
    return this.path.toString();
  }
  static comparator(e, n) {
    return Ne.comparator(e.path, n.path);
  }
  static isDocumentKey(e) {
    return e.length % 2 == 0;
  }
  static fromSegments(e) {
    return new K(new Ne(e.slice()));
  }
}
function yR(t, e) {
  const n = t.toTimestamp().seconds,
    r = t.toTimestamp().nanoseconds + 1,
    i = Y.fromTimestamp(r === 1e9 ? new Ct(n + 1, 0) : new Ct(n, r));
  return new yr(i, K.empty(), e);
}
function vR(t) {
  return new yr(t.readTime, t.key, -1);
}
class yr {
  constructor(e, n, r) {
    (this.readTime = e), (this.documentKey = n), (this.largestBatchId = r);
  }
  static min() {
    return new yr(Y.min(), K.empty(), -1);
  }
  static max() {
    return new yr(Y.max(), K.empty(), -1);
  }
}
function wR(t, e) {
  let n = t.readTime.compareTo(e.readTime);
  return n !== 0
    ? n
    : ((n = K.comparator(t.documentKey, e.documentKey)),
      n !== 0 ? n : ue(t.largestBatchId, e.largestBatchId));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ER =
  'The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.';
class SR {
  constructor() {
    this.onCommittedListeners = [];
  }
  addOnCommittedListener(e) {
    this.onCommittedListeners.push(e);
  }
  raiseOnCommittedEvent() {
    this.onCommittedListeners.forEach((e) => e());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function qp(t) {
  if (t.code !== O.FAILED_PRECONDITION || t.message !== ER) throw t;
  V('LocalStore', 'Unexpectedly lost primary lease');
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class C {
  constructor(e) {
    (this.nextCallback = null),
      (this.catchCallback = null),
      (this.result = void 0),
      (this.error = void 0),
      (this.isDone = !1),
      (this.callbackAttached = !1),
      e(
        (n) => {
          (this.isDone = !0), (this.result = n), this.nextCallback && this.nextCallback(n);
        },
        (n) => {
          (this.isDone = !0), (this.error = n), this.catchCallback && this.catchCallback(n);
        }
      );
  }
  catch(e) {
    return this.next(void 0, e);
  }
  next(e, n) {
    return (
      this.callbackAttached && J(),
      (this.callbackAttached = !0),
      this.isDone
        ? this.error
          ? this.wrapFailure(n, this.error)
          : this.wrapSuccess(e, this.result)
        : new C((r, i) => {
            (this.nextCallback = (s) => {
              this.wrapSuccess(e, s).next(r, i);
            }),
              (this.catchCallback = (s) => {
                this.wrapFailure(n, s).next(r, i);
              });
          })
    );
  }
  toPromise() {
    return new Promise((e, n) => {
      this.next(e, n);
    });
  }
  wrapUserFunction(e) {
    try {
      const n = e();
      return n instanceof C ? n : C.resolve(n);
    } catch (n) {
      return C.reject(n);
    }
  }
  wrapSuccess(e, n) {
    return e ? this.wrapUserFunction(() => e(n)) : C.resolve(n);
  }
  wrapFailure(e, n) {
    return e ? this.wrapUserFunction(() => e(n)) : C.reject(n);
  }
  static resolve(e) {
    return new C((n, r) => {
      n(e);
    });
  }
  static reject(e) {
    return new C((n, r) => {
      r(e);
    });
  }
  static waitFor(e) {
    return new C((n, r) => {
      let i = 0,
        s = 0,
        o = !1;
      e.forEach((a) => {
        ++i,
          a.next(
            () => {
              ++s, o && s === i && n();
            },
            (l) => r(l)
          );
      }),
        (o = !0),
        s === i && n();
    });
  }
  static or(e) {
    let n = C.resolve(!1);
    for (const r of e) n = n.next((i) => (i ? C.resolve(i) : r()));
    return n;
  }
  static forEach(e, n) {
    const r = [];
    return (
      e.forEach((i, s) => {
        r.push(n.call(this, i, s));
      }),
      this.waitFor(r)
    );
  }
  static mapArray(e, n) {
    return new C((r, i) => {
      const s = e.length,
        o = new Array(s);
      let a = 0;
      for (let l = 0; l < s; l++) {
        const u = l;
        n(e[u]).next(
          (c) => {
            (o[u] = c), ++a, a === s && r(o);
          },
          (c) => i(c)
        );
      }
    });
  }
  static doWhile(e, n) {
    return new C((r, i) => {
      const s = () => {
        e() === !0
          ? n().next(() => {
              s();
            }, i)
          : r();
      };
      s();
    });
  }
}
function Go(t) {
  return t.name === 'IndexedDbTransactionError';
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Gp {
  constructor(e, n) {
    (this.previousValue = e),
      n &&
        ((n.sequenceNumberHandler = (r) => this.ut(r)),
        (this.ct = (r) => n.writeSequenceNumber(r)));
  }
  ut(e) {
    return (this.previousValue = Math.max(e, this.previousValue)), this.previousValue;
  }
  next() {
    const e = ++this.previousValue;
    return this.ct && this.ct(e), e;
  }
}
Gp.at = -1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _R {
  constructor(e, n, r, i, s, o, a, l) {
    (this.databaseId = e),
      (this.appId = n),
      (this.persistenceKey = r),
      (this.host = i),
      (this.ssl = s),
      (this.forceLongPolling = o),
      (this.autoDetectLongPolling = a),
      (this.useFetchStreams = l);
  }
}
class Co {
  constructor(e, n) {
    (this.projectId = e), (this.database = n || '(default)');
  }
  static empty() {
    return new Co('', '');
  }
  get isDefaultDatabase() {
    return this.database === '(default)';
  }
  isEqual(e) {
    return e instanceof Co && e.projectId === this.projectId && e.database === this.database;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Iy(t) {
  let e = 0;
  for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
  return e;
}
function Zu(t, e) {
  for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
}
function TR(t) {
  for (const e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
  return !0;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ec(t) {
  return t == null;
}
function qd(t) {
  return t === 0 && 1 / t == -1 / 0;
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class IR extends Error {
  constructor() {
    super(...arguments), (this.name = 'Base64DecodeError');
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ft {
  constructor(e) {
    this.binaryString = e;
  }
  static fromBase64String(e) {
    const n = (function (r) {
      try {
        return atob(r);
      } catch (i) {
        throw i instanceof DOMException ? new IR('Invalid base64 string: ' + i) : i;
      }
    })(e);
    return new ft(n);
  }
  static fromUint8Array(e) {
    const n = (function (r) {
      let i = '';
      for (let s = 0; s < r.length; ++s) i += String.fromCharCode(r[s]);
      return i;
    })(e);
    return new ft(n);
  }
  [Symbol.iterator]() {
    let e = 0;
    return {
      next: () =>
        e < this.binaryString.length
          ? { value: this.binaryString.charCodeAt(e++), done: !1 }
          : { value: void 0, done: !0 }
    };
  }
  toBase64() {
    return (e = this.binaryString), btoa(e);
    var e;
  }
  toUint8Array() {
    return (function (e) {
      const n = new Uint8Array(e.length);
      for (let r = 0; r < e.length; r++) n[r] = e.charCodeAt(r);
      return n;
    })(this.binaryString);
  }
  approximateByteSize() {
    return 2 * this.binaryString.length;
  }
  compareTo(e) {
    return ue(this.binaryString, e.binaryString);
  }
  isEqual(e) {
    return this.binaryString === e.binaryString;
  }
}
ft.EMPTY_BYTE_STRING = new ft('');
const kR = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function vr(t) {
  if ((Fe(!!t), typeof t == 'string')) {
    let e = 0;
    const n = kR.exec(t);
    if ((Fe(!!n), n[1])) {
      let i = n[1];
      (i = (i + '000000000').substr(0, 9)), (e = Number(i));
    }
    const r = new Date(t);
    return { seconds: Math.floor(r.getTime() / 1e3), nanos: e };
  }
  return { seconds: $e(t.seconds), nanos: $e(t.nanos) };
}
function $e(t) {
  return typeof t == 'number' ? t : typeof t == 'string' ? Number(t) : 0;
}
function ns(t) {
  return typeof t == 'string' ? ft.fromBase64String(t) : ft.fromUint8Array(t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function kE(t) {
  var e, n;
  return (
    ((n = (
      ((e = t == null ? void 0 : t.mapValue) === null || e === void 0 ? void 0 : e.fields) || {}
    ).__type__) === null || n === void 0
      ? void 0
      : n.stringValue) === 'server_timestamp'
  );
}
function CE(t) {
  const e = t.mapValue.fields.__previous_value__;
  return kE(e) ? CE(e) : e;
}
function Ao(t) {
  const e = vr(t.mapValue.fields.__local_write_time__.timestampValue);
  return new Ct(e.seconds, e.nanos);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ia = { mapValue: { fields: { __type__: { stringValue: '__max__' } } } };
function ti(t) {
  return 'nullValue' in t
    ? 0
    : 'booleanValue' in t
    ? 1
    : 'integerValue' in t || 'doubleValue' in t
    ? 2
    : 'timestampValue' in t
    ? 3
    : 'stringValue' in t
    ? 5
    : 'bytesValue' in t
    ? 6
    : 'referenceValue' in t
    ? 7
    : 'geoPointValue' in t
    ? 8
    : 'arrayValue' in t
    ? 9
    : 'mapValue' in t
    ? kE(t)
      ? 4
      : CR(t)
      ? 9007199254740991
      : 10
    : J();
}
function pn(t, e) {
  if (t === e) return !0;
  const n = ti(t);
  if (n !== ti(e)) return !1;
  switch (n) {
    case 0:
    case 9007199254740991:
      return !0;
    case 1:
      return t.booleanValue === e.booleanValue;
    case 4:
      return Ao(t).isEqual(Ao(e));
    case 3:
      return (function (r, i) {
        if (
          typeof r.timestampValue == 'string' &&
          typeof i.timestampValue == 'string' &&
          r.timestampValue.length === i.timestampValue.length
        )
          return r.timestampValue === i.timestampValue;
        const s = vr(r.timestampValue),
          o = vr(i.timestampValue);
        return s.seconds === o.seconds && s.nanos === o.nanos;
      })(t, e);
    case 5:
      return t.stringValue === e.stringValue;
    case 6:
      return (function (r, i) {
        return ns(r.bytesValue).isEqual(ns(i.bytesValue));
      })(t, e);
    case 7:
      return t.referenceValue === e.referenceValue;
    case 8:
      return (function (r, i) {
        return (
          $e(r.geoPointValue.latitude) === $e(i.geoPointValue.latitude) &&
          $e(r.geoPointValue.longitude) === $e(i.geoPointValue.longitude)
        );
      })(t, e);
    case 2:
      return (function (r, i) {
        if ('integerValue' in r && 'integerValue' in i)
          return $e(r.integerValue) === $e(i.integerValue);
        if ('doubleValue' in r && 'doubleValue' in i) {
          const s = $e(r.doubleValue),
            o = $e(i.doubleValue);
          return s === o ? qd(s) === qd(o) : isNaN(s) && isNaN(o);
        }
        return !1;
      })(t, e);
    case 9:
      return ts(t.arrayValue.values || [], e.arrayValue.values || [], pn);
    case 10:
      return (function (r, i) {
        const s = r.mapValue.fields || {},
          o = i.mapValue.fields || {};
        if (Iy(s) !== Iy(o)) return !1;
        for (const a in s)
          if (s.hasOwnProperty(a) && (o[a] === void 0 || !pn(s[a], o[a]))) return !1;
        return !0;
      })(t, e);
    default:
      return J();
  }
}
function No(t, e) {
  return (t.values || []).find((n) => pn(n, e)) !== void 0;
}
function rs(t, e) {
  if (t === e) return 0;
  const n = ti(t),
    r = ti(e);
  if (n !== r) return ue(n, r);
  switch (n) {
    case 0:
    case 9007199254740991:
      return 0;
    case 1:
      return ue(t.booleanValue, e.booleanValue);
    case 2:
      return (function (i, s) {
        const o = $e(i.integerValue || i.doubleValue),
          a = $e(s.integerValue || s.doubleValue);
        return o < a ? -1 : o > a ? 1 : o === a ? 0 : isNaN(o) ? (isNaN(a) ? 0 : -1) : 1;
      })(t, e);
    case 3:
      return ky(t.timestampValue, e.timestampValue);
    case 4:
      return ky(Ao(t), Ao(e));
    case 5:
      return ue(t.stringValue, e.stringValue);
    case 6:
      return (function (i, s) {
        const o = ns(i),
          a = ns(s);
        return o.compareTo(a);
      })(t.bytesValue, e.bytesValue);
    case 7:
      return (function (i, s) {
        const o = i.split('/'),
          a = s.split('/');
        for (let l = 0; l < o.length && l < a.length; l++) {
          const u = ue(o[l], a[l]);
          if (u !== 0) return u;
        }
        return ue(o.length, a.length);
      })(t.referenceValue, e.referenceValue);
    case 8:
      return (function (i, s) {
        const o = ue($e(i.latitude), $e(s.latitude));
        return o !== 0 ? o : ue($e(i.longitude), $e(s.longitude));
      })(t.geoPointValue, e.geoPointValue);
    case 9:
      return (function (i, s) {
        const o = i.values || [],
          a = s.values || [];
        for (let l = 0; l < o.length && l < a.length; ++l) {
          const u = rs(o[l], a[l]);
          if (u) return u;
        }
        return ue(o.length, a.length);
      })(t.arrayValue, e.arrayValue);
    case 10:
      return (function (i, s) {
        if (i === Ia.mapValue && s === Ia.mapValue) return 0;
        if (i === Ia.mapValue) return 1;
        if (s === Ia.mapValue) return -1;
        const o = i.fields || {},
          a = Object.keys(o),
          l = s.fields || {},
          u = Object.keys(l);
        a.sort(), u.sort();
        for (let c = 0; c < a.length && c < u.length; ++c) {
          const h = ue(a[c], u[c]);
          if (h !== 0) return h;
          const d = rs(o[a[c]], l[u[c]]);
          if (d !== 0) return d;
        }
        return ue(a.length, u.length);
      })(t.mapValue, e.mapValue);
    default:
      throw J();
  }
}
function ky(t, e) {
  if (typeof t == 'string' && typeof e == 'string' && t.length === e.length) return ue(t, e);
  const n = vr(t),
    r = vr(e),
    i = ue(n.seconds, r.seconds);
  return i !== 0 ? i : ue(n.nanos, r.nanos);
}
function is(t) {
  return Gd(t);
}
function Gd(t) {
  return 'nullValue' in t
    ? 'null'
    : 'booleanValue' in t
    ? '' + t.booleanValue
    : 'integerValue' in t
    ? '' + t.integerValue
    : 'doubleValue' in t
    ? '' + t.doubleValue
    : 'timestampValue' in t
    ? (function (r) {
        const i = vr(r);
        return `time(${i.seconds},${i.nanos})`;
      })(t.timestampValue)
    : 'stringValue' in t
    ? t.stringValue
    : 'bytesValue' in t
    ? ns(t.bytesValue).toBase64()
    : 'referenceValue' in t
    ? ((n = t.referenceValue), K.fromName(n).toString())
    : 'geoPointValue' in t
    ? `geo(${(e = t.geoPointValue).latitude},${e.longitude})`
    : 'arrayValue' in t
    ? (function (r) {
        let i = '[',
          s = !0;
        for (const o of r.values || []) s ? (s = !1) : (i += ','), (i += Gd(o));
        return i + ']';
      })(t.arrayValue)
    : 'mapValue' in t
    ? (function (r) {
        const i = Object.keys(r.fields || {}).sort();
        let s = '{',
          o = !0;
        for (const a of i) o ? (o = !1) : (s += ','), (s += `${a}:${Gd(r.fields[a])}`);
        return s + '}';
      })(t.mapValue)
    : J();
  var e, n;
}
function Qd(t) {
  return !!t && 'integerValue' in t;
}
function Qp(t) {
  return !!t && 'arrayValue' in t;
}
function Cy(t) {
  return !!t && 'nullValue' in t;
}
function Ay(t) {
  return !!t && 'doubleValue' in t && isNaN(Number(t.doubleValue));
}
function ph(t) {
  return !!t && 'mapValue' in t;
}
function Ws(t) {
  if (t.geoPointValue) return { geoPointValue: Object.assign({}, t.geoPointValue) };
  if (t.timestampValue && typeof t.timestampValue == 'object')
    return { timestampValue: Object.assign({}, t.timestampValue) };
  if (t.mapValue) {
    const e = { mapValue: { fields: {} } };
    return Zu(t.mapValue.fields, (n, r) => (e.mapValue.fields[n] = Ws(r))), e;
  }
  if (t.arrayValue) {
    const e = { arrayValue: { values: [] } };
    for (let n = 0; n < (t.arrayValue.values || []).length; ++n)
      e.arrayValue.values[n] = Ws(t.arrayValue.values[n]);
    return e;
  }
  return Object.assign({}, t);
}
function CR(t) {
  return (((t.mapValue || {}).fields || {}).__type__ || {}).stringValue === '__max__';
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ul {
  constructor(e, n) {
    (this.position = e), (this.inclusive = n);
  }
}
function Ny(t, e, n) {
  let r = 0;
  for (let i = 0; i < t.position.length; i++) {
    const s = e[i],
      o = t.position[i];
    if (
      (s.field.isKeyField()
        ? (r = K.comparator(K.fromName(o.referenceValue), n.key))
        : (r = rs(o, n.data.field(s.field))),
      s.dir === 'desc' && (r *= -1),
      r !== 0)
    )
      break;
  }
  return r;
}
function Ry(t, e) {
  if (t === null) return e === null;
  if (e === null || t.inclusive !== e.inclusive || t.position.length !== e.position.length)
    return !1;
  for (let n = 0; n < t.position.length; n++) if (!pn(t.position[n], e.position[n])) return !1;
  return !0;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class AE {}
class Ve extends AE {
  constructor(e, n, r) {
    super(), (this.field = e), (this.op = n), (this.value = r);
  }
  static create(e, n, r) {
    return e.isKeyField()
      ? n === 'in' || n === 'not-in'
        ? this.createKeyFieldInFilter(e, n, r)
        : new NR(e, n, r)
      : n === 'array-contains'
      ? new DR(e, r)
      : n === 'in'
      ? new PR(e, r)
      : n === 'not-in'
      ? new OR(e, r)
      : n === 'array-contains-any'
      ? new LR(e, r)
      : new Ve(e, n, r);
  }
  static createKeyFieldInFilter(e, n, r) {
    return n === 'in' ? new RR(e, r) : new xR(e, r);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return this.op === '!='
      ? n !== null && this.matchesComparison(rs(n, this.value))
      : n !== null && ti(this.value) === ti(n) && this.matchesComparison(rs(n, this.value));
  }
  matchesComparison(e) {
    switch (this.op) {
      case '<':
        return e < 0;
      case '<=':
        return e <= 0;
      case '==':
        return e === 0;
      case '!=':
        return e !== 0;
      case '>':
        return e > 0;
      case '>=':
        return e >= 0;
      default:
        return J();
    }
  }
  isInequality() {
    return ['<', '<=', '>', '>=', '!=', 'not-in'].indexOf(this.op) >= 0;
  }
  getFlattenedFilters() {
    return [this];
  }
  getFilters() {
    return [this];
  }
  getFirstInequalityField() {
    return this.isInequality() ? this.field : null;
  }
}
class mn extends AE {
  constructor(e, n) {
    super(), (this.filters = e), (this.op = n), (this.ft = null);
  }
  static create(e, n) {
    return new mn(e, n);
  }
  matches(e) {
    return NE(this)
      ? this.filters.find((n) => !n.matches(e)) === void 0
      : this.filters.find((n) => n.matches(e)) !== void 0;
  }
  getFlattenedFilters() {
    return (
      this.ft !== null ||
        (this.ft = this.filters.reduce((e, n) => e.concat(n.getFlattenedFilters()), [])),
      this.ft
    );
  }
  getFilters() {
    return Object.assign([], this.filters);
  }
  getFirstInequalityField() {
    const e = this.dt((n) => n.isInequality());
    return e !== null ? e.field : null;
  }
  dt(e) {
    for (const n of this.getFlattenedFilters()) if (e(n)) return n;
    return null;
  }
}
function NE(t) {
  return t.op === 'and';
}
function RE(t) {
  return AR(t) && NE(t);
}
function AR(t) {
  for (const e of t.filters) if (e instanceof mn) return !1;
  return !0;
}
function Xd(t) {
  if (t instanceof Ve) return t.field.canonicalString() + t.op.toString() + is(t.value);
  if (RE(t)) return t.filters.map((e) => Xd(e)).join(',');
  {
    const e = t.filters.map((n) => Xd(n)).join(',');
    return `${t.op}(${e})`;
  }
}
function xE(t, e) {
  return t instanceof Ve
    ? (function (n, r) {
        return r instanceof Ve && n.op === r.op && n.field.isEqual(r.field) && pn(n.value, r.value);
      })(t, e)
    : t instanceof mn
    ? (function (n, r) {
        return r instanceof mn && n.op === r.op && n.filters.length === r.filters.length
          ? n.filters.reduce((i, s, o) => i && xE(s, r.filters[o]), !0)
          : !1;
      })(t, e)
    : void J();
}
function DE(t) {
  return t instanceof Ve
    ? (function (e) {
        return `${e.field.canonicalString()} ${e.op} ${is(e.value)}`;
      })(t)
    : t instanceof mn
    ? (function (e) {
        return e.op.toString() + ' {' + e.getFilters().map(DE).join(' ,') + '}';
      })(t)
    : 'Filter';
}
class NR extends Ve {
  constructor(e, n, r) {
    super(e, n, r), (this.key = K.fromName(r.referenceValue));
  }
  matches(e) {
    const n = K.comparator(e.key, this.key);
    return this.matchesComparison(n);
  }
}
class RR extends Ve {
  constructor(e, n) {
    super(e, 'in', n), (this.keys = PE('in', n));
  }
  matches(e) {
    return this.keys.some((n) => n.isEqual(e.key));
  }
}
class xR extends Ve {
  constructor(e, n) {
    super(e, 'not-in', n), (this.keys = PE('not-in', n));
  }
  matches(e) {
    return !this.keys.some((n) => n.isEqual(e.key));
  }
}
function PE(t, e) {
  var n;
  return (((n = e.arrayValue) === null || n === void 0 ? void 0 : n.values) || []).map((r) =>
    K.fromName(r.referenceValue)
  );
}
class DR extends Ve {
  constructor(e, n) {
    super(e, 'array-contains', n);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return Qp(n) && No(n.arrayValue, this.value);
  }
}
class PR extends Ve {
  constructor(e, n) {
    super(e, 'in', n);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return n !== null && No(this.value.arrayValue, n);
  }
}
class OR extends Ve {
  constructor(e, n) {
    super(e, 'not-in', n);
  }
  matches(e) {
    if (No(this.value.arrayValue, { nullValue: 'NULL_VALUE' })) return !1;
    const n = e.data.field(this.field);
    return n !== null && !No(this.value.arrayValue, n);
  }
}
class LR extends Ve {
  constructor(e, n) {
    super(e, 'array-contains-any', n);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return (
      !(!Qp(n) || !n.arrayValue.values) &&
      n.arrayValue.values.some((r) => No(this.value.arrayValue, r))
    );
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class qs {
  constructor(e, n = 'asc') {
    (this.field = e), (this.dir = n);
  }
}
function $R(t, e) {
  return t.dir === e.dir && t.field.isEqual(e.field);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tt {
  constructor(e, n) {
    (this.comparator = e), (this.root = n || Ye.EMPTY);
  }
  insert(e, n) {
    return new tt(
      this.comparator,
      this.root.insert(e, n, this.comparator).copy(null, null, Ye.BLACK, null, null)
    );
  }
  remove(e) {
    return new tt(
      this.comparator,
      this.root.remove(e, this.comparator).copy(null, null, Ye.BLACK, null, null)
    );
  }
  get(e) {
    let n = this.root;
    for (; !n.isEmpty(); ) {
      const r = this.comparator(e, n.key);
      if (r === 0) return n.value;
      r < 0 ? (n = n.left) : r > 0 && (n = n.right);
    }
    return null;
  }
  indexOf(e) {
    let n = 0,
      r = this.root;
    for (; !r.isEmpty(); ) {
      const i = this.comparator(e, r.key);
      if (i === 0) return n + r.left.size;
      i < 0 ? (r = r.left) : ((n += r.left.size + 1), (r = r.right));
    }
    return -1;
  }
  isEmpty() {
    return this.root.isEmpty();
  }
  get size() {
    return this.root.size;
  }
  minKey() {
    return this.root.minKey();
  }
  maxKey() {
    return this.root.maxKey();
  }
  inorderTraversal(e) {
    return this.root.inorderTraversal(e);
  }
  forEach(e) {
    this.inorderTraversal((n, r) => (e(n, r), !1));
  }
  toString() {
    const e = [];
    return this.inorderTraversal((n, r) => (e.push(`${n}:${r}`), !1)), `{${e.join(', ')}}`;
  }
  reverseTraversal(e) {
    return this.root.reverseTraversal(e);
  }
  getIterator() {
    return new ka(this.root, null, this.comparator, !1);
  }
  getIteratorFrom(e) {
    return new ka(this.root, e, this.comparator, !1);
  }
  getReverseIterator() {
    return new ka(this.root, null, this.comparator, !0);
  }
  getReverseIteratorFrom(e) {
    return new ka(this.root, e, this.comparator, !0);
  }
}
class ka {
  constructor(e, n, r, i) {
    (this.isReverse = i), (this.nodeStack = []);
    let s = 1;
    for (; !e.isEmpty(); )
      if (((s = n ? r(e.key, n) : 1), n && i && (s *= -1), s < 0))
        e = this.isReverse ? e.left : e.right;
      else {
        if (s === 0) {
          this.nodeStack.push(e);
          break;
        }
        this.nodeStack.push(e), (e = this.isReverse ? e.right : e.left);
      }
  }
  getNext() {
    let e = this.nodeStack.pop();
    const n = { key: e.key, value: e.value };
    if (this.isReverse) for (e = e.left; !e.isEmpty(); ) this.nodeStack.push(e), (e = e.right);
    else for (e = e.right; !e.isEmpty(); ) this.nodeStack.push(e), (e = e.left);
    return n;
  }
  hasNext() {
    return this.nodeStack.length > 0;
  }
  peek() {
    if (this.nodeStack.length === 0) return null;
    const e = this.nodeStack[this.nodeStack.length - 1];
    return { key: e.key, value: e.value };
  }
}
class Ye {
  constructor(e, n, r, i, s) {
    (this.key = e),
      (this.value = n),
      (this.color = r ?? Ye.RED),
      (this.left = i ?? Ye.EMPTY),
      (this.right = s ?? Ye.EMPTY),
      (this.size = this.left.size + 1 + this.right.size);
  }
  copy(e, n, r, i, s) {
    return new Ye(e ?? this.key, n ?? this.value, r ?? this.color, i ?? this.left, s ?? this.right);
  }
  isEmpty() {
    return !1;
  }
  inorderTraversal(e) {
    return (
      this.left.inorderTraversal(e) || e(this.key, this.value) || this.right.inorderTraversal(e)
    );
  }
  reverseTraversal(e) {
    return (
      this.right.reverseTraversal(e) || e(this.key, this.value) || this.left.reverseTraversal(e)
    );
  }
  min() {
    return this.left.isEmpty() ? this : this.left.min();
  }
  minKey() {
    return this.min().key;
  }
  maxKey() {
    return this.right.isEmpty() ? this.key : this.right.maxKey();
  }
  insert(e, n, r) {
    let i = this;
    const s = r(e, i.key);
    return (
      (i =
        s < 0
          ? i.copy(null, null, null, i.left.insert(e, n, r), null)
          : s === 0
          ? i.copy(null, n, null, null, null)
          : i.copy(null, null, null, null, i.right.insert(e, n, r))),
      i.fixUp()
    );
  }
  removeMin() {
    if (this.left.isEmpty()) return Ye.EMPTY;
    let e = this;
    return (
      e.left.isRed() || e.left.left.isRed() || (e = e.moveRedLeft()),
      (e = e.copy(null, null, null, e.left.removeMin(), null)),
      e.fixUp()
    );
  }
  remove(e, n) {
    let r,
      i = this;
    if (n(e, i.key) < 0)
      i.left.isEmpty() || i.left.isRed() || i.left.left.isRed() || (i = i.moveRedLeft()),
        (i = i.copy(null, null, null, i.left.remove(e, n), null));
    else {
      if (
        (i.left.isRed() && (i = i.rotateRight()),
        i.right.isEmpty() || i.right.isRed() || i.right.left.isRed() || (i = i.moveRedRight()),
        n(e, i.key) === 0)
      ) {
        if (i.right.isEmpty()) return Ye.EMPTY;
        (r = i.right.min()), (i = i.copy(r.key, r.value, null, null, i.right.removeMin()));
      }
      i = i.copy(null, null, null, null, i.right.remove(e, n));
    }
    return i.fixUp();
  }
  isRed() {
    return this.color;
  }
  fixUp() {
    let e = this;
    return (
      e.right.isRed() && !e.left.isRed() && (e = e.rotateLeft()),
      e.left.isRed() && e.left.left.isRed() && (e = e.rotateRight()),
      e.left.isRed() && e.right.isRed() && (e = e.colorFlip()),
      e
    );
  }
  moveRedLeft() {
    let e = this.colorFlip();
    return (
      e.right.left.isRed() &&
        ((e = e.copy(null, null, null, null, e.right.rotateRight())),
        (e = e.rotateLeft()),
        (e = e.colorFlip())),
      e
    );
  }
  moveRedRight() {
    let e = this.colorFlip();
    return e.left.left.isRed() && ((e = e.rotateRight()), (e = e.colorFlip())), e;
  }
  rotateLeft() {
    const e = this.copy(null, null, Ye.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, e, null);
  }
  rotateRight() {
    const e = this.copy(null, null, Ye.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, e);
  }
  colorFlip() {
    const e = this.left.copy(null, null, !this.left.color, null, null),
      n = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, e, n);
  }
  checkMaxDepth() {
    const e = this.check();
    return Math.pow(2, e) <= this.size + 1;
  }
  check() {
    if ((this.isRed() && this.left.isRed()) || this.right.isRed()) throw J();
    const e = this.left.check();
    if (e !== this.right.check()) throw J();
    return e + (this.isRed() ? 0 : 1);
  }
}
(Ye.EMPTY = null), (Ye.RED = !0), (Ye.BLACK = !1);
Ye.EMPTY = new (class {
  constructor() {
    this.size = 0;
  }
  get key() {
    throw J();
  }
  get value() {
    throw J();
  }
  get color() {
    throw J();
  }
  get left() {
    throw J();
  }
  get right() {
    throw J();
  }
  copy(t, e, n, r, i) {
    return this;
  }
  insert(t, e, n) {
    return new Ye(t, e);
  }
  remove(t, e) {
    return this;
  }
  isEmpty() {
    return !0;
  }
  inorderTraversal(t) {
    return !1;
  }
  reverseTraversal(t) {
    return !1;
  }
  minKey() {
    return null;
  }
  maxKey() {
    return null;
  }
  isRed() {
    return !1;
  }
  checkMaxDepth() {
    return !0;
  }
  check() {
    return 0;
  }
})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ze {
  constructor(e) {
    (this.comparator = e), (this.data = new tt(this.comparator));
  }
  has(e) {
    return this.data.get(e) !== null;
  }
  first() {
    return this.data.minKey();
  }
  last() {
    return this.data.maxKey();
  }
  get size() {
    return this.data.size;
  }
  indexOf(e) {
    return this.data.indexOf(e);
  }
  forEach(e) {
    this.data.inorderTraversal((n, r) => (e(n), !1));
  }
  forEachInRange(e, n) {
    const r = this.data.getIteratorFrom(e[0]);
    for (; r.hasNext(); ) {
      const i = r.getNext();
      if (this.comparator(i.key, e[1]) >= 0) return;
      n(i.key);
    }
  }
  forEachWhile(e, n) {
    let r;
    for (r = n !== void 0 ? this.data.getIteratorFrom(n) : this.data.getIterator(); r.hasNext(); )
      if (!e(r.getNext().key)) return;
  }
  firstAfterOrEqual(e) {
    const n = this.data.getIteratorFrom(e);
    return n.hasNext() ? n.getNext().key : null;
  }
  getIterator() {
    return new xy(this.data.getIterator());
  }
  getIteratorFrom(e) {
    return new xy(this.data.getIteratorFrom(e));
  }
  add(e) {
    return this.copy(this.data.remove(e).insert(e, !0));
  }
  delete(e) {
    return this.has(e) ? this.copy(this.data.remove(e)) : this;
  }
  isEmpty() {
    return this.data.isEmpty();
  }
  unionWith(e) {
    let n = this;
    return (
      n.size < e.size && ((n = e), (e = this)),
      e.forEach((r) => {
        n = n.add(r);
      }),
      n
    );
  }
  isEqual(e) {
    if (!(e instanceof ze) || this.size !== e.size) return !1;
    const n = this.data.getIterator(),
      r = e.data.getIterator();
    for (; n.hasNext(); ) {
      const i = n.getNext().key,
        s = r.getNext().key;
      if (this.comparator(i, s) !== 0) return !1;
    }
    return !0;
  }
  toArray() {
    const e = [];
    return (
      this.forEach((n) => {
        e.push(n);
      }),
      e
    );
  }
  toString() {
    const e = [];
    return this.forEach((n) => e.push(n)), 'SortedSet(' + e.toString() + ')';
  }
  copy(e) {
    const n = new ze(this.comparator);
    return (n.data = e), n;
  }
}
class xy {
  constructor(e) {
    this.iter = e;
  }
  getNext() {
    return this.iter.getNext().key;
  }
  hasNext() {
    return this.iter.hasNext();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Jn {
  constructor(e) {
    (this.fields = e), e.sort(St.comparator);
  }
  static empty() {
    return new Jn([]);
  }
  unionWith(e) {
    let n = new ze(St.comparator);
    for (const r of this.fields) n = n.add(r);
    for (const r of e) n = n.add(r);
    return new Jn(n.toArray());
  }
  covers(e) {
    for (const n of this.fields) if (n.isPrefixOf(e)) return !0;
    return !1;
  }
  isEqual(e) {
    return ts(this.fields, e.fields, (n, r) => n.isEqual(r));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class an {
  constructor(e) {
    this.value = e;
  }
  static empty() {
    return new an({ mapValue: {} });
  }
  field(e) {
    if (e.isEmpty()) return this.value;
    {
      let n = this.value;
      for (let r = 0; r < e.length - 1; ++r)
        if (((n = (n.mapValue.fields || {})[e.get(r)]), !ph(n))) return null;
      return (n = (n.mapValue.fields || {})[e.lastSegment()]), n || null;
    }
  }
  set(e, n) {
    this.getFieldsMap(e.popLast())[e.lastSegment()] = Ws(n);
  }
  setAll(e) {
    let n = St.emptyPath(),
      r = {},
      i = [];
    e.forEach((o, a) => {
      if (!n.isImmediateParentOf(a)) {
        const l = this.getFieldsMap(n);
        this.applyChanges(l, r, i), (r = {}), (i = []), (n = a.popLast());
      }
      o ? (r[a.lastSegment()] = Ws(o)) : i.push(a.lastSegment());
    });
    const s = this.getFieldsMap(n);
    this.applyChanges(s, r, i);
  }
  delete(e) {
    const n = this.field(e.popLast());
    ph(n) && n.mapValue.fields && delete n.mapValue.fields[e.lastSegment()];
  }
  isEqual(e) {
    return pn(this.value, e.value);
  }
  getFieldsMap(e) {
    let n = this.value;
    n.mapValue.fields || (n.mapValue = { fields: {} });
    for (let r = 0; r < e.length; ++r) {
      let i = n.mapValue.fields[e.get(r)];
      (ph(i) && i.mapValue.fields) ||
        ((i = { mapValue: { fields: {} } }), (n.mapValue.fields[e.get(r)] = i)),
        (n = i);
    }
    return n.mapValue.fields;
  }
  applyChanges(e, n, r) {
    Zu(n, (i, s) => (e[i] = s));
    for (const i of r) delete e[i];
  }
  clone() {
    return new an(Ws(this.value));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class lt {
  constructor(e, n, r, i, s, o, a) {
    (this.key = e),
      (this.documentType = n),
      (this.version = r),
      (this.readTime = i),
      (this.createTime = s),
      (this.data = o),
      (this.documentState = a);
  }
  static newInvalidDocument(e) {
    return new lt(e, 0, Y.min(), Y.min(), Y.min(), an.empty(), 0);
  }
  static newFoundDocument(e, n, r, i) {
    return new lt(e, 1, n, Y.min(), r, i, 0);
  }
  static newNoDocument(e, n) {
    return new lt(e, 2, n, Y.min(), Y.min(), an.empty(), 0);
  }
  static newUnknownDocument(e, n) {
    return new lt(e, 3, n, Y.min(), Y.min(), an.empty(), 2);
  }
  convertToFoundDocument(e, n) {
    return (
      !this.createTime.isEqual(Y.min()) ||
        (this.documentType !== 2 && this.documentType !== 0) ||
        (this.createTime = e),
      (this.version = e),
      (this.documentType = 1),
      (this.data = n),
      (this.documentState = 0),
      this
    );
  }
  convertToNoDocument(e) {
    return (
      (this.version = e),
      (this.documentType = 2),
      (this.data = an.empty()),
      (this.documentState = 0),
      this
    );
  }
  convertToUnknownDocument(e) {
    return (
      (this.version = e),
      (this.documentType = 3),
      (this.data = an.empty()),
      (this.documentState = 2),
      this
    );
  }
  setHasCommittedMutations() {
    return (this.documentState = 2), this;
  }
  setHasLocalMutations() {
    return (this.documentState = 1), (this.version = Y.min()), this;
  }
  setReadTime(e) {
    return (this.readTime = e), this;
  }
  get hasLocalMutations() {
    return this.documentState === 1;
  }
  get hasCommittedMutations() {
    return this.documentState === 2;
  }
  get hasPendingWrites() {
    return this.hasLocalMutations || this.hasCommittedMutations;
  }
  isValidDocument() {
    return this.documentType !== 0;
  }
  isFoundDocument() {
    return this.documentType === 1;
  }
  isNoDocument() {
    return this.documentType === 2;
  }
  isUnknownDocument() {
    return this.documentType === 3;
  }
  isEqual(e) {
    return (
      e instanceof lt &&
      this.key.isEqual(e.key) &&
      this.version.isEqual(e.version) &&
      this.documentType === e.documentType &&
      this.documentState === e.documentState &&
      this.data.isEqual(e.data)
    );
  }
  mutableCopy() {
    return new lt(
      this.key,
      this.documentType,
      this.version,
      this.readTime,
      this.createTime,
      this.data.clone(),
      this.documentState
    );
  }
  toString() {
    return `Document(${this.key}, ${this.version}, ${JSON.stringify(
      this.data.value
    )}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${
      this.documentState
    }})`;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bR {
  constructor(e, n = null, r = [], i = [], s = null, o = null, a = null) {
    (this.path = e),
      (this.collectionGroup = n),
      (this.orderBy = r),
      (this.filters = i),
      (this.limit = s),
      (this.startAt = o),
      (this.endAt = a),
      (this._t = null);
  }
}
function Dy(t, e = null, n = [], r = [], i = null, s = null, o = null) {
  return new bR(t, e, n, r, i, s, o);
}
function Xp(t) {
  const e = oe(t);
  if (e._t === null) {
    let n = e.path.canonicalString();
    e.collectionGroup !== null && (n += '|cg:' + e.collectionGroup),
      (n += '|f:'),
      (n += e.filters.map((r) => Xd(r)).join(',')),
      (n += '|ob:'),
      (n += e.orderBy
        .map((r) =>
          (function (i) {
            return i.field.canonicalString() + i.dir;
          })(r)
        )
        .join(',')),
      ec(e.limit) || ((n += '|l:'), (n += e.limit)),
      e.startAt &&
        ((n += '|lb:'),
        (n += e.startAt.inclusive ? 'b:' : 'a:'),
        (n += e.startAt.position.map((r) => is(r)).join(','))),
      e.endAt &&
        ((n += '|ub:'),
        (n += e.endAt.inclusive ? 'a:' : 'b:'),
        (n += e.endAt.position.map((r) => is(r)).join(','))),
      (e._t = n);
  }
  return e._t;
}
function Yp(t, e) {
  if (t.limit !== e.limit || t.orderBy.length !== e.orderBy.length) return !1;
  for (let n = 0; n < t.orderBy.length; n++) if (!$R(t.orderBy[n], e.orderBy[n])) return !1;
  if (t.filters.length !== e.filters.length) return !1;
  for (let n = 0; n < t.filters.length; n++) if (!xE(t.filters[n], e.filters[n])) return !1;
  return (
    t.collectionGroup === e.collectionGroup &&
    !!t.path.isEqual(e.path) &&
    !!Ry(t.startAt, e.startAt) &&
    Ry(t.endAt, e.endAt)
  );
}
function Yd(t) {
  return K.isDocumentKey(t.path) && t.collectionGroup === null && t.filters.length === 0;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tc {
  constructor(e, n = null, r = [], i = [], s = null, o = 'F', a = null, l = null) {
    (this.path = e),
      (this.collectionGroup = n),
      (this.explicitOrderBy = r),
      (this.filters = i),
      (this.limit = s),
      (this.limitType = o),
      (this.startAt = a),
      (this.endAt = l),
      (this.wt = null),
      (this.gt = null),
      this.startAt,
      this.endAt;
  }
}
function MR(t, e, n, r, i, s, o, a) {
  return new tc(t, e, n, r, i, s, o, a);
}
function OE(t) {
  return new tc(t);
}
function Py(t) {
  return (
    t.filters.length === 0 &&
    t.limit === null &&
    t.startAt == null &&
    t.endAt == null &&
    (t.explicitOrderBy.length === 0 ||
      (t.explicitOrderBy.length === 1 && t.explicitOrderBy[0].field.isKeyField()))
  );
}
function FR(t) {
  return t.explicitOrderBy.length > 0 ? t.explicitOrderBy[0].field : null;
}
function UR(t) {
  for (const e of t.filters) {
    const n = e.getFirstInequalityField();
    if (n !== null) return n;
  }
  return null;
}
function VR(t) {
  return t.collectionGroup !== null;
}
function $i(t) {
  const e = oe(t);
  if (e.wt === null) {
    e.wt = [];
    const n = UR(e),
      r = FR(e);
    if (n !== null && r === null)
      n.isKeyField() || e.wt.push(new qs(n)), e.wt.push(new qs(St.keyField(), 'asc'));
    else {
      let i = !1;
      for (const s of e.explicitOrderBy) e.wt.push(s), s.field.isKeyField() && (i = !0);
      if (!i) {
        const s =
          e.explicitOrderBy.length > 0
            ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir
            : 'asc';
        e.wt.push(new qs(St.keyField(), s));
      }
    }
  }
  return e.wt;
}
function On(t) {
  const e = oe(t);
  if (!e.gt)
    if (e.limitType === 'F')
      e.gt = Dy(e.path, e.collectionGroup, $i(e), e.filters, e.limit, e.startAt, e.endAt);
    else {
      const n = [];
      for (const s of $i(e)) {
        const o = s.dir === 'desc' ? 'asc' : 'desc';
        n.push(new qs(s.field, o));
      }
      const r = e.endAt ? new Ul(e.endAt.position, e.endAt.inclusive) : null,
        i = e.startAt ? new Ul(e.startAt.position, e.startAt.inclusive) : null;
      e.gt = Dy(e.path, e.collectionGroup, n, e.filters, e.limit, r, i);
    }
  return e.gt;
}
function Jd(t, e, n) {
  return new tc(
    t.path,
    t.collectionGroup,
    t.explicitOrderBy.slice(),
    t.filters.slice(),
    e,
    n,
    t.startAt,
    t.endAt
  );
}
function nc(t, e) {
  return Yp(On(t), On(e)) && t.limitType === e.limitType;
}
function LE(t) {
  return `${Xp(On(t))}|lt:${t.limitType}`;
}
function Zd(t) {
  return `Query(target=${(function (e) {
    let n = e.path.canonicalString();
    return (
      e.collectionGroup !== null && (n += ' collectionGroup=' + e.collectionGroup),
      e.filters.length > 0 && (n += `, filters: [${e.filters.map((r) => DE(r)).join(', ')}]`),
      ec(e.limit) || (n += ', limit: ' + e.limit),
      e.orderBy.length > 0 &&
        (n += `, orderBy: [${e.orderBy
          .map((r) =>
            (function (i) {
              return `${i.field.canonicalString()} (${i.dir})`;
            })(r)
          )
          .join(', ')}]`),
      e.startAt &&
        ((n += ', startAt: '),
        (n += e.startAt.inclusive ? 'b:' : 'a:'),
        (n += e.startAt.position.map((r) => is(r)).join(','))),
      e.endAt &&
        ((n += ', endAt: '),
        (n += e.endAt.inclusive ? 'a:' : 'b:'),
        (n += e.endAt.position.map((r) => is(r)).join(','))),
      `Target(${n})`
    );
  })(On(t))}; limitType=${t.limitType})`;
}
function rc(t, e) {
  return (
    e.isFoundDocument() &&
    (function (n, r) {
      const i = r.key.path;
      return n.collectionGroup !== null
        ? r.key.hasCollectionId(n.collectionGroup) && n.path.isPrefixOf(i)
        : K.isDocumentKey(n.path)
        ? n.path.isEqual(i)
        : n.path.isImmediateParentOf(i);
    })(t, e) &&
    (function (n, r) {
      for (const i of $i(n)) if (!i.field.isKeyField() && r.data.field(i.field) === null) return !1;
      return !0;
    })(t, e) &&
    (function (n, r) {
      for (const i of n.filters) if (!i.matches(r)) return !1;
      return !0;
    })(t, e) &&
    (function (n, r) {
      return !(
        (n.startAt &&
          !(function (i, s, o) {
            const a = Ny(i, s, o);
            return i.inclusive ? a <= 0 : a < 0;
          })(n.startAt, $i(n), r)) ||
        (n.endAt &&
          !(function (i, s, o) {
            const a = Ny(i, s, o);
            return i.inclusive ? a >= 0 : a > 0;
          })(n.endAt, $i(n), r))
      );
    })(t, e)
  );
}
function jR(t) {
  return (
    t.collectionGroup ||
    (t.path.length % 2 == 1 ? t.path.lastSegment() : t.path.get(t.path.length - 2))
  );
}
function $E(t) {
  return (e, n) => {
    let r = !1;
    for (const i of $i(t)) {
      const s = zR(i, e, n);
      if (s !== 0) return s;
      r = r || i.field.isKeyField();
    }
    return 0;
  };
}
function zR(t, e, n) {
  const r = t.field.isKeyField()
    ? K.comparator(e.key, n.key)
    : (function (i, s, o) {
        const a = s.data.field(i),
          l = o.data.field(i);
        return a !== null && l !== null ? rs(a, l) : J();
      })(t.field, e, n);
  switch (t.dir) {
    case 'asc':
      return r;
    case 'desc':
      return -1 * r;
    default:
      return J();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function BR(t, e) {
  if (t.yt) {
    if (isNaN(e)) return { doubleValue: 'NaN' };
    if (e === 1 / 0) return { doubleValue: 'Infinity' };
    if (e === -1 / 0) return { doubleValue: '-Infinity' };
  }
  return { doubleValue: qd(e) ? '-0' : e };
}
function HR(t) {
  return { integerValue: '' + t };
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ic {
  constructor() {
    this._ = void 0;
  }
}
function KR(t, e, n) {
  return t instanceof ef
    ? (function (r, i) {
        const s = {
          fields: {
            __type__: { stringValue: 'server_timestamp' },
            __local_write_time__: { timestampValue: { seconds: r.seconds, nanos: r.nanoseconds } }
          }
        };
        return i && (s.fields.__previous_value__ = i), { mapValue: s };
      })(n, e)
    : t instanceof Vl
    ? bE(t, e)
    : t instanceof jl
    ? ME(t, e)
    : (function (r, i) {
        const s = qR(r, i),
          o = Oy(s) + Oy(r.It);
        return Qd(s) && Qd(r.It) ? HR(o) : BR(r.Tt, o);
      })(t, e);
}
function WR(t, e, n) {
  return t instanceof Vl ? bE(t, e) : t instanceof jl ? ME(t, e) : n;
}
function qR(t, e) {
  return t instanceof tf
    ? Qd((n = e)) ||
      (function (r) {
        return !!r && 'doubleValue' in r;
      })(n)
      ? e
      : { integerValue: 0 }
    : null;
  var n;
}
class ef extends ic {}
class Vl extends ic {
  constructor(e) {
    super(), (this.elements = e);
  }
}
function bE(t, e) {
  const n = FE(e);
  for (const r of t.elements) n.some((i) => pn(i, r)) || n.push(r);
  return { arrayValue: { values: n } };
}
class jl extends ic {
  constructor(e) {
    super(), (this.elements = e);
  }
}
function ME(t, e) {
  let n = FE(e);
  for (const r of t.elements) n = n.filter((i) => !pn(i, r));
  return { arrayValue: { values: n } };
}
class tf extends ic {
  constructor(e, n) {
    super(), (this.Tt = e), (this.It = n);
  }
}
function Oy(t) {
  return $e(t.integerValue || t.doubleValue);
}
function FE(t) {
  return Qp(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
}
function GR(t, e) {
  return (
    t.field.isEqual(e.field) &&
    (function (n, r) {
      return (n instanceof Vl && r instanceof Vl) || (n instanceof jl && r instanceof jl)
        ? ts(n.elements, r.elements, pn)
        : n instanceof tf && r instanceof tf
        ? pn(n.It, r.It)
        : n instanceof ef && r instanceof ef;
    })(t.transform, e.transform)
  );
}
class Br {
  constructor(e, n) {
    (this.updateTime = e), (this.exists = n);
  }
  static none() {
    return new Br();
  }
  static exists(e) {
    return new Br(void 0, e);
  }
  static updateTime(e) {
    return new Br(e);
  }
  get isNone() {
    return this.updateTime === void 0 && this.exists === void 0;
  }
  isEqual(e) {
    return (
      this.exists === e.exists &&
      (this.updateTime ? !!e.updateTime && this.updateTime.isEqual(e.updateTime) : !e.updateTime)
    );
  }
}
function ja(t, e) {
  return t.updateTime !== void 0
    ? e.isFoundDocument() && e.version.isEqual(t.updateTime)
    : t.exists === void 0 || t.exists === e.isFoundDocument();
}
class Jp {}
function UE(t, e) {
  if (!t.hasLocalMutations || (e && e.fields.length === 0)) return null;
  if (e === null)
    return t.isNoDocument() ? new XR(t.key, Br.none()) : new Zp(t.key, t.data, Br.none());
  {
    const n = t.data,
      r = an.empty();
    let i = new ze(St.comparator);
    for (let s of e.fields)
      if (!i.has(s)) {
        let o = n.field(s);
        o === null && s.length > 1 && ((s = s.popLast()), (o = n.field(s))),
          o === null ? r.delete(s) : r.set(s, o),
          (i = i.add(s));
      }
    return new sc(t.key, r, new Jn(i.toArray()), Br.none());
  }
}
function QR(t, e, n) {
  t instanceof Zp
    ? (function (r, i, s) {
        const o = r.value.clone(),
          a = $y(r.fieldTransforms, i, s.transformResults);
        o.setAll(a), i.convertToFoundDocument(s.version, o).setHasCommittedMutations();
      })(t, e, n)
    : t instanceof sc
    ? (function (r, i, s) {
        if (!ja(r.precondition, i)) return void i.convertToUnknownDocument(s.version);
        const o = $y(r.fieldTransforms, i, s.transformResults),
          a = i.data;
        a.setAll(VE(r)),
          a.setAll(o),
          i.convertToFoundDocument(s.version, a).setHasCommittedMutations();
      })(t, e, n)
    : (function (r, i, s) {
        i.convertToNoDocument(s.version).setHasCommittedMutations();
      })(0, e, n);
}
function Gs(t, e, n, r) {
  return t instanceof Zp
    ? (function (i, s, o, a) {
        if (!ja(i.precondition, s)) return o;
        const l = i.value.clone(),
          u = by(i.fieldTransforms, a, s);
        return l.setAll(u), s.convertToFoundDocument(s.version, l).setHasLocalMutations(), null;
      })(t, e, n, r)
    : t instanceof sc
    ? (function (i, s, o, a) {
        if (!ja(i.precondition, s)) return o;
        const l = by(i.fieldTransforms, a, s),
          u = s.data;
        return (
          u.setAll(VE(i)),
          u.setAll(l),
          s.convertToFoundDocument(s.version, u).setHasLocalMutations(),
          o === null
            ? null
            : o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((c) => c.field))
        );
      })(t, e, n, r)
    : (function (i, s, o) {
        return ja(i.precondition, s)
          ? (s.convertToNoDocument(s.version).setHasLocalMutations(), null)
          : o;
      })(t, e, n);
}
function Ly(t, e) {
  return (
    t.type === e.type &&
    !!t.key.isEqual(e.key) &&
    !!t.precondition.isEqual(e.precondition) &&
    !!(function (n, r) {
      return (n === void 0 && r === void 0) || (!(!n || !r) && ts(n, r, (i, s) => GR(i, s)));
    })(t.fieldTransforms, e.fieldTransforms) &&
    (t.type === 0
      ? t.value.isEqual(e.value)
      : t.type !== 1 || (t.data.isEqual(e.data) && t.fieldMask.isEqual(e.fieldMask)))
  );
}
class Zp extends Jp {
  constructor(e, n, r, i = []) {
    super(),
      (this.key = e),
      (this.value = n),
      (this.precondition = r),
      (this.fieldTransforms = i),
      (this.type = 0);
  }
  getFieldMask() {
    return null;
  }
}
let sc = class extends Jp {
  constructor(e, n, r, i, s = []) {
    super(),
      (this.key = e),
      (this.data = n),
      (this.fieldMask = r),
      (this.precondition = i),
      (this.fieldTransforms = s),
      (this.type = 1);
  }
  getFieldMask() {
    return this.fieldMask;
  }
};
function VE(t) {
  const e = new Map();
  return (
    t.fieldMask.fields.forEach((n) => {
      if (!n.isEmpty()) {
        const r = t.data.field(n);
        e.set(n, r);
      }
    }),
    e
  );
}
function $y(t, e, n) {
  const r = new Map();
  Fe(t.length === n.length);
  for (let i = 0; i < n.length; i++) {
    const s = t[i],
      o = s.transform,
      a = e.data.field(s.field);
    r.set(s.field, WR(o, a, n[i]));
  }
  return r;
}
function by(t, e, n) {
  const r = new Map();
  for (const i of t) {
    const s = i.transform,
      o = n.data.field(i.field);
    r.set(i.field, KR(s, o, e));
  }
  return r;
}
class XR extends Jp {
  constructor(e, n) {
    super(), (this.key = e), (this.precondition = n), (this.type = 2), (this.fieldTransforms = []);
  }
  getFieldMask() {
    return null;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class YR {
  constructor(e) {
    this.count = e;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Le, re;
function jE(t) {
  if (t === void 0) return Pn('GRPC error has no .code'), O.UNKNOWN;
  switch (t) {
    case Le.OK:
      return O.OK;
    case Le.CANCELLED:
      return O.CANCELLED;
    case Le.UNKNOWN:
      return O.UNKNOWN;
    case Le.DEADLINE_EXCEEDED:
      return O.DEADLINE_EXCEEDED;
    case Le.RESOURCE_EXHAUSTED:
      return O.RESOURCE_EXHAUSTED;
    case Le.INTERNAL:
      return O.INTERNAL;
    case Le.UNAVAILABLE:
      return O.UNAVAILABLE;
    case Le.UNAUTHENTICATED:
      return O.UNAUTHENTICATED;
    case Le.INVALID_ARGUMENT:
      return O.INVALID_ARGUMENT;
    case Le.NOT_FOUND:
      return O.NOT_FOUND;
    case Le.ALREADY_EXISTS:
      return O.ALREADY_EXISTS;
    case Le.PERMISSION_DENIED:
      return O.PERMISSION_DENIED;
    case Le.FAILED_PRECONDITION:
      return O.FAILED_PRECONDITION;
    case Le.ABORTED:
      return O.ABORTED;
    case Le.OUT_OF_RANGE:
      return O.OUT_OF_RANGE;
    case Le.UNIMPLEMENTED:
      return O.UNIMPLEMENTED;
    case Le.DATA_LOSS:
      return O.DATA_LOSS;
    default:
      return J();
  }
}
((re = Le || (Le = {}))[(re.OK = 0)] = 'OK'),
  (re[(re.CANCELLED = 1)] = 'CANCELLED'),
  (re[(re.UNKNOWN = 2)] = 'UNKNOWN'),
  (re[(re.INVALID_ARGUMENT = 3)] = 'INVALID_ARGUMENT'),
  (re[(re.DEADLINE_EXCEEDED = 4)] = 'DEADLINE_EXCEEDED'),
  (re[(re.NOT_FOUND = 5)] = 'NOT_FOUND'),
  (re[(re.ALREADY_EXISTS = 6)] = 'ALREADY_EXISTS'),
  (re[(re.PERMISSION_DENIED = 7)] = 'PERMISSION_DENIED'),
  (re[(re.UNAUTHENTICATED = 16)] = 'UNAUTHENTICATED'),
  (re[(re.RESOURCE_EXHAUSTED = 8)] = 'RESOURCE_EXHAUSTED'),
  (re[(re.FAILED_PRECONDITION = 9)] = 'FAILED_PRECONDITION'),
  (re[(re.ABORTED = 10)] = 'ABORTED'),
  (re[(re.OUT_OF_RANGE = 11)] = 'OUT_OF_RANGE'),
  (re[(re.UNIMPLEMENTED = 12)] = 'UNIMPLEMENTED'),
  (re[(re.INTERNAL = 13)] = 'INTERNAL'),
  (re[(re.UNAVAILABLE = 14)] = 'UNAVAILABLE'),
  (re[(re.DATA_LOSS = 15)] = 'DATA_LOSS');
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ps {
  constructor(e, n) {
    (this.mapKeyFn = e), (this.equalsFn = n), (this.inner = {}), (this.innerSize = 0);
  }
  get(e) {
    const n = this.mapKeyFn(e),
      r = this.inner[n];
    if (r !== void 0) {
      for (const [i, s] of r) if (this.equalsFn(i, e)) return s;
    }
  }
  has(e) {
    return this.get(e) !== void 0;
  }
  set(e, n) {
    const r = this.mapKeyFn(e),
      i = this.inner[r];
    if (i === void 0) return (this.inner[r] = [[e, n]]), void this.innerSize++;
    for (let s = 0; s < i.length; s++) if (this.equalsFn(i[s][0], e)) return void (i[s] = [e, n]);
    i.push([e, n]), this.innerSize++;
  }
  delete(e) {
    const n = this.mapKeyFn(e),
      r = this.inner[n];
    if (r === void 0) return !1;
    for (let i = 0; i < r.length; i++)
      if (this.equalsFn(r[i][0], e))
        return r.length === 1 ? delete this.inner[n] : r.splice(i, 1), this.innerSize--, !0;
    return !1;
  }
  forEach(e) {
    Zu(this.inner, (n, r) => {
      for (const [i, s] of r) e(i, s);
    });
  }
  isEmpty() {
    return TR(this.inner);
  }
  size() {
    return this.innerSize;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const JR = new tt(K.comparator);
function wr() {
  return JR;
}
const zE = new tt(K.comparator);
function $s(...t) {
  let e = zE;
  for (const n of t) e = e.insert(n.key, n);
  return e;
}
function ZR(t) {
  let e = zE;
  return t.forEach((n, r) => (e = e.insert(n, r.overlayedDocument))), e;
}
function br() {
  return Qs();
}
function BE() {
  return Qs();
}
function Qs() {
  return new ps(
    (t) => t.toString(),
    (t, e) => t.isEqual(e)
  );
}
const ex = new ze(K.comparator);
function ie(...t) {
  let e = ex;
  for (const n of t) e = e.add(n);
  return e;
}
const tx = new ze(ue);
function HE() {
  return tx;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oc {
  constructor(e, n, r, i, s) {
    (this.snapshotVersion = e),
      (this.targetChanges = n),
      (this.targetMismatches = r),
      (this.documentUpdates = i),
      (this.resolvedLimboDocuments = s);
  }
  static createSynthesizedRemoteEventForCurrentChange(e, n, r) {
    const i = new Map();
    return (
      i.set(e, Qo.createSynthesizedTargetChangeForCurrentChange(e, n, r)),
      new oc(Y.min(), i, HE(), wr(), ie())
    );
  }
}
class Qo {
  constructor(e, n, r, i, s) {
    (this.resumeToken = e),
      (this.current = n),
      (this.addedDocuments = r),
      (this.modifiedDocuments = i),
      (this.removedDocuments = s);
  }
  static createSynthesizedTargetChangeForCurrentChange(e, n, r) {
    return new Qo(r, n, ie(), ie(), ie());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class za {
  constructor(e, n, r, i) {
    (this.Et = e), (this.removedTargetIds = n), (this.key = r), (this.At = i);
  }
}
class KE {
  constructor(e, n) {
    (this.targetId = e), (this.Rt = n);
  }
}
class WE {
  constructor(e, n, r = ft.EMPTY_BYTE_STRING, i = null) {
    (this.state = e), (this.targetIds = n), (this.resumeToken = r), (this.cause = i);
  }
}
class My {
  constructor() {
    (this.bt = 0),
      (this.vt = Uy()),
      (this.Pt = ft.EMPTY_BYTE_STRING),
      (this.Vt = !1),
      (this.St = !0);
  }
  get current() {
    return this.Vt;
  }
  get resumeToken() {
    return this.Pt;
  }
  get Dt() {
    return this.bt !== 0;
  }
  get Ct() {
    return this.St;
  }
  xt(e) {
    e.approximateByteSize() > 0 && ((this.St = !0), (this.Pt = e));
  }
  Nt() {
    let e = ie(),
      n = ie(),
      r = ie();
    return (
      this.vt.forEach((i, s) => {
        switch (s) {
          case 0:
            e = e.add(i);
            break;
          case 2:
            n = n.add(i);
            break;
          case 1:
            r = r.add(i);
            break;
          default:
            J();
        }
      }),
      new Qo(this.Pt, this.Vt, e, n, r)
    );
  }
  kt() {
    (this.St = !1), (this.vt = Uy());
  }
  Ot(e, n) {
    (this.St = !0), (this.vt = this.vt.insert(e, n));
  }
  Mt(e) {
    (this.St = !0), (this.vt = this.vt.remove(e));
  }
  Ft() {
    this.bt += 1;
  }
  $t() {
    this.bt -= 1;
  }
  Bt() {
    (this.St = !0), (this.Vt = !0);
  }
}
class nx {
  constructor(e) {
    (this.Lt = e),
      (this.qt = new Map()),
      (this.Ut = wr()),
      (this.Kt = Fy()),
      (this.Gt = new ze(ue));
  }
  Qt(e) {
    for (const n of e.Et)
      e.At && e.At.isFoundDocument() ? this.jt(n, e.At) : this.zt(n, e.key, e.At);
    for (const n of e.removedTargetIds) this.zt(n, e.key, e.At);
  }
  Wt(e) {
    this.forEachTarget(e, (n) => {
      const r = this.Ht(n);
      switch (e.state) {
        case 0:
          this.Jt(n) && r.xt(e.resumeToken);
          break;
        case 1:
          r.$t(), r.Dt || r.kt(), r.xt(e.resumeToken);
          break;
        case 2:
          r.$t(), r.Dt || this.removeTarget(n);
          break;
        case 3:
          this.Jt(n) && (r.Bt(), r.xt(e.resumeToken));
          break;
        case 4:
          this.Jt(n) && (this.Yt(n), r.xt(e.resumeToken));
          break;
        default:
          J();
      }
    });
  }
  forEachTarget(e, n) {
    e.targetIds.length > 0
      ? e.targetIds.forEach(n)
      : this.qt.forEach((r, i) => {
          this.Jt(i) && n(i);
        });
  }
  Zt(e) {
    const n = e.targetId,
      r = e.Rt.count,
      i = this.Xt(n);
    if (i) {
      const s = i.target;
      if (Yd(s))
        if (r === 0) {
          const o = new K(s.path);
          this.zt(n, o, lt.newNoDocument(o, Y.min()));
        } else Fe(r === 1);
      else this.te(n) !== r && (this.Yt(n), (this.Gt = this.Gt.add(n)));
    }
  }
  ee(e) {
    const n = new Map();
    this.qt.forEach((s, o) => {
      const a = this.Xt(o);
      if (a) {
        if (s.current && Yd(a.target)) {
          const l = new K(a.target.path);
          this.Ut.get(l) !== null || this.ne(o, l) || this.zt(o, l, lt.newNoDocument(l, e));
        }
        s.Ct && (n.set(o, s.Nt()), s.kt());
      }
    });
    let r = ie();
    this.Kt.forEach((s, o) => {
      let a = !0;
      o.forEachWhile((l) => {
        const u = this.Xt(l);
        return !u || u.purpose === 2 || ((a = !1), !1);
      }),
        a && (r = r.add(s));
    }),
      this.Ut.forEach((s, o) => o.setReadTime(e));
    const i = new oc(e, n, this.Gt, this.Ut, r);
    return (this.Ut = wr()), (this.Kt = Fy()), (this.Gt = new ze(ue)), i;
  }
  jt(e, n) {
    if (!this.Jt(e)) return;
    const r = this.ne(e, n.key) ? 2 : 0;
    this.Ht(e).Ot(n.key, r),
      (this.Ut = this.Ut.insert(n.key, n)),
      (this.Kt = this.Kt.insert(n.key, this.se(n.key).add(e)));
  }
  zt(e, n, r) {
    if (!this.Jt(e)) return;
    const i = this.Ht(e);
    this.ne(e, n) ? i.Ot(n, 1) : i.Mt(n),
      (this.Kt = this.Kt.insert(n, this.se(n).delete(e))),
      r && (this.Ut = this.Ut.insert(n, r));
  }
  removeTarget(e) {
    this.qt.delete(e);
  }
  te(e) {
    const n = this.Ht(e).Nt();
    return this.Lt.getRemoteKeysForTarget(e).size + n.addedDocuments.size - n.removedDocuments.size;
  }
  Ft(e) {
    this.Ht(e).Ft();
  }
  Ht(e) {
    let n = this.qt.get(e);
    return n || ((n = new My()), this.qt.set(e, n)), n;
  }
  se(e) {
    let n = this.Kt.get(e);
    return n || ((n = new ze(ue)), (this.Kt = this.Kt.insert(e, n))), n;
  }
  Jt(e) {
    const n = this.Xt(e) !== null;
    return n || V('WatchChangeAggregator', 'Detected inactive target', e), n;
  }
  Xt(e) {
    const n = this.qt.get(e);
    return n && n.Dt ? null : this.Lt.ie(e);
  }
  Yt(e) {
    this.qt.set(e, new My()),
      this.Lt.getRemoteKeysForTarget(e).forEach((n) => {
        this.zt(e, n, null);
      });
  }
  ne(e, n) {
    return this.Lt.getRemoteKeysForTarget(e).has(n);
  }
}
function Fy() {
  return new tt(K.comparator);
}
function Uy() {
  return new tt(K.comparator);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const rx = (() => ({ asc: 'ASCENDING', desc: 'DESCENDING' }))(),
  ix = (() => ({
    '<': 'LESS_THAN',
    '<=': 'LESS_THAN_OR_EQUAL',
    '>': 'GREATER_THAN',
    '>=': 'GREATER_THAN_OR_EQUAL',
    '==': 'EQUAL',
    '!=': 'NOT_EQUAL',
    'array-contains': 'ARRAY_CONTAINS',
    in: 'IN',
    'not-in': 'NOT_IN',
    'array-contains-any': 'ARRAY_CONTAINS_ANY'
  }))(),
  sx = (() => ({ and: 'AND', or: 'OR' }))();
class ox {
  constructor(e, n) {
    (this.databaseId = e), (this.yt = n);
  }
}
function ax(t, e) {
  return t.yt
    ? `${new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, '').replace('Z', '')}.${(
        '000000000' + e.nanoseconds
      ).slice(-9)}Z`
    : { seconds: '' + e.seconds, nanos: e.nanoseconds };
}
function lx(t, e) {
  return t.yt ? e.toBase64() : e.toUint8Array();
}
function bi(t) {
  return (
    Fe(!!t),
    Y.fromTimestamp(
      (function (e) {
        const n = vr(e);
        return new Ct(n.seconds, n.nanos);
      })(t)
    )
  );
}
function ux(t, e) {
  return (function (n) {
    return new Ne(['projects', n.projectId, 'databases', n.database]);
  })(t)
    .child('documents')
    .child(e)
    .canonicalString();
}
function qE(t) {
  const e = Ne.fromString(t);
  return Fe(YE(e)), e;
}
function mh(t, e) {
  const n = qE(e);
  if (n.get(1) !== t.databaseId.projectId)
    throw new q(
      O.INVALID_ARGUMENT,
      'Tried to deserialize key from different project: ' +
        n.get(1) +
        ' vs ' +
        t.databaseId.projectId
    );
  if (n.get(3) !== t.databaseId.database)
    throw new q(
      O.INVALID_ARGUMENT,
      'Tried to deserialize key from different database: ' +
        n.get(3) +
        ' vs ' +
        t.databaseId.database
    );
  return new K(GE(n));
}
function nf(t, e) {
  return ux(t.databaseId, e);
}
function cx(t) {
  const e = qE(t);
  return e.length === 4 ? Ne.emptyPath() : GE(e);
}
function Vy(t) {
  return new Ne([
    'projects',
    t.databaseId.projectId,
    'databases',
    t.databaseId.database
  ]).canonicalString();
}
function GE(t) {
  return Fe(t.length > 4 && t.get(4) === 'documents'), t.popFirst(5);
}
function hx(t, e) {
  let n;
  if ('targetChange' in e) {
    e.targetChange;
    const r = (function (l) {
        return l === 'NO_CHANGE'
          ? 0
          : l === 'ADD'
          ? 1
          : l === 'REMOVE'
          ? 2
          : l === 'CURRENT'
          ? 3
          : l === 'RESET'
          ? 4
          : J();
      })(e.targetChange.targetChangeType || 'NO_CHANGE'),
      i = e.targetChange.targetIds || [],
      s = (function (l, u) {
        return l.yt
          ? (Fe(u === void 0 || typeof u == 'string'), ft.fromBase64String(u || ''))
          : (Fe(u === void 0 || u instanceof Uint8Array), ft.fromUint8Array(u || new Uint8Array()));
      })(t, e.targetChange.resumeToken),
      o = e.targetChange.cause,
      a =
        o &&
        (function (l) {
          const u = l.code === void 0 ? O.UNKNOWN : jE(l.code);
          return new q(u, l.message || '');
        })(o);
    n = new WE(r, i, s, a || null);
  } else if ('documentChange' in e) {
    e.documentChange;
    const r = e.documentChange;
    r.document, r.document.name, r.document.updateTime;
    const i = mh(t, r.document.name),
      s = bi(r.document.updateTime),
      o = r.document.createTime ? bi(r.document.createTime) : Y.min(),
      a = new an({ mapValue: { fields: r.document.fields } }),
      l = lt.newFoundDocument(i, s, o, a),
      u = r.targetIds || [],
      c = r.removedTargetIds || [];
    n = new za(u, c, l.key, l);
  } else if ('documentDelete' in e) {
    e.documentDelete;
    const r = e.documentDelete;
    r.document;
    const i = mh(t, r.document),
      s = r.readTime ? bi(r.readTime) : Y.min(),
      o = lt.newNoDocument(i, s),
      a = r.removedTargetIds || [];
    n = new za([], a, o.key, o);
  } else if ('documentRemove' in e) {
    e.documentRemove;
    const r = e.documentRemove;
    r.document;
    const i = mh(t, r.document),
      s = r.removedTargetIds || [];
    n = new za([], s, i, null);
  } else {
    if (!('filter' in e)) return J();
    {
      e.filter;
      const r = e.filter;
      r.targetId;
      const i = r.count || 0,
        s = new YR(i),
        o = r.targetId;
      n = new KE(o, s);
    }
  }
  return n;
}
function dx(t, e) {
  return { documents: [nf(t, e.path)] };
}
function fx(t, e) {
  const n = { structuredQuery: {} },
    r = e.path;
  e.collectionGroup !== null
    ? ((n.parent = nf(t, r)),
      (n.structuredQuery.from = [{ collectionId: e.collectionGroup, allDescendants: !0 }]))
    : ((n.parent = nf(t, r.popLast())),
      (n.structuredQuery.from = [{ collectionId: r.lastSegment() }]));
  const i = (function (l) {
    if (l.length !== 0) return XE(mn.create(l, 'and'));
  })(e.filters);
  i && (n.structuredQuery.where = i);
  const s = (function (l) {
    if (l.length !== 0)
      return l.map((u) =>
        (function (c) {
          return { field: ci(c.field), direction: gx(c.dir) };
        })(u)
      );
  })(e.orderBy);
  s && (n.structuredQuery.orderBy = s);
  const o = (function (l, u) {
    return l.yt || ec(u) ? u : { value: u };
  })(t, e.limit);
  var a;
  return (
    o !== null && (n.structuredQuery.limit = o),
    e.startAt &&
      (n.structuredQuery.startAt = { before: (a = e.startAt).inclusive, values: a.position }),
    e.endAt &&
      (n.structuredQuery.endAt = (function (l) {
        return { before: !l.inclusive, values: l.position };
      })(e.endAt)),
    n
  );
}
function px(t) {
  let e = cx(t.parent);
  const n = t.structuredQuery,
    r = n.from ? n.from.length : 0;
  let i = null;
  if (r > 0) {
    Fe(r === 1);
    const c = n.from[0];
    c.allDescendants ? (i = c.collectionId) : (e = e.child(c.collectionId));
  }
  let s = [];
  n.where &&
    (s = (function (c) {
      const h = QE(c);
      return h instanceof mn && RE(h) ? h.getFilters() : [h];
    })(n.where));
  let o = [];
  n.orderBy &&
    (o = n.orderBy.map((c) =>
      (function (h) {
        return new qs(
          hi(h.field),
          (function (d) {
            switch (d) {
              case 'ASCENDING':
                return 'asc';
              case 'DESCENDING':
                return 'desc';
              default:
                return;
            }
          })(h.direction)
        );
      })(c)
    ));
  let a = null;
  n.limit &&
    (a = (function (c) {
      let h;
      return (h = typeof c == 'object' ? c.value : c), ec(h) ? null : h;
    })(n.limit));
  let l = null;
  n.startAt &&
    (l = (function (c) {
      const h = !!c.before,
        d = c.values || [];
      return new Ul(d, h);
    })(n.startAt));
  let u = null;
  return (
    n.endAt &&
      (u = (function (c) {
        const h = !c.before,
          d = c.values || [];
        return new Ul(d, h);
      })(n.endAt)),
    MR(e, i, o, s, a, 'F', l, u)
  );
}
function mx(t, e) {
  const n = (function (r, i) {
    switch (i) {
      case 0:
        return null;
      case 1:
        return 'existence-filter-mismatch';
      case 2:
        return 'limbo-document';
      default:
        return J();
    }
  })(0, e.purpose);
  return n == null ? null : { 'goog-listen-tags': n };
}
function QE(t) {
  return t.unaryFilter !== void 0
    ? (function (e) {
        switch (e.unaryFilter.op) {
          case 'IS_NAN':
            const n = hi(e.unaryFilter.field);
            return Ve.create(n, '==', { doubleValue: NaN });
          case 'IS_NULL':
            const r = hi(e.unaryFilter.field);
            return Ve.create(r, '==', { nullValue: 'NULL_VALUE' });
          case 'IS_NOT_NAN':
            const i = hi(e.unaryFilter.field);
            return Ve.create(i, '!=', { doubleValue: NaN });
          case 'IS_NOT_NULL':
            const s = hi(e.unaryFilter.field);
            return Ve.create(s, '!=', { nullValue: 'NULL_VALUE' });
          default:
            return J();
        }
      })(t)
    : t.fieldFilter !== void 0
    ? (function (e) {
        return Ve.create(
          hi(e.fieldFilter.field),
          (function (n) {
            switch (n) {
              case 'EQUAL':
                return '==';
              case 'NOT_EQUAL':
                return '!=';
              case 'GREATER_THAN':
                return '>';
              case 'GREATER_THAN_OR_EQUAL':
                return '>=';
              case 'LESS_THAN':
                return '<';
              case 'LESS_THAN_OR_EQUAL':
                return '<=';
              case 'ARRAY_CONTAINS':
                return 'array-contains';
              case 'IN':
                return 'in';
              case 'NOT_IN':
                return 'not-in';
              case 'ARRAY_CONTAINS_ANY':
                return 'array-contains-any';
              default:
                return J();
            }
          })(e.fieldFilter.op),
          e.fieldFilter.value
        );
      })(t)
    : t.compositeFilter !== void 0
    ? (function (e) {
        return mn.create(
          e.compositeFilter.filters.map((n) => QE(n)),
          (function (n) {
            switch (n) {
              case 'AND':
                return 'and';
              case 'OR':
                return 'or';
              default:
                return J();
            }
          })(e.compositeFilter.op)
        );
      })(t)
    : J();
}
function gx(t) {
  return rx[t];
}
function yx(t) {
  return ix[t];
}
function vx(t) {
  return sx[t];
}
function ci(t) {
  return { fieldPath: t.canonicalString() };
}
function hi(t) {
  return St.fromServerFormat(t.fieldPath);
}
function XE(t) {
  return t instanceof Ve
    ? (function (e) {
        if (e.op === '==') {
          if (Ay(e.value)) return { unaryFilter: { field: ci(e.field), op: 'IS_NAN' } };
          if (Cy(e.value)) return { unaryFilter: { field: ci(e.field), op: 'IS_NULL' } };
        } else if (e.op === '!=') {
          if (Ay(e.value)) return { unaryFilter: { field: ci(e.field), op: 'IS_NOT_NAN' } };
          if (Cy(e.value)) return { unaryFilter: { field: ci(e.field), op: 'IS_NOT_NULL' } };
        }
        return { fieldFilter: { field: ci(e.field), op: yx(e.op), value: e.value } };
      })(t)
    : t instanceof mn
    ? (function (e) {
        const n = e.getFilters().map((r) => XE(r));
        return n.length === 1 ? n[0] : { compositeFilter: { op: vx(e.op), filters: n } };
      })(t)
    : J();
}
function YE(t) {
  return t.length >= 4 && t.get(0) === 'projects' && t.get(2) === 'databases';
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class wx {
  constructor(e, n, r, i) {
    (this.batchId = e), (this.localWriteTime = n), (this.baseMutations = r), (this.mutations = i);
  }
  applyToRemoteDocument(e, n) {
    const r = n.mutationResults;
    for (let i = 0; i < this.mutations.length; i++) {
      const s = this.mutations[i];
      s.key.isEqual(e.key) && QR(s, e, r[i]);
    }
  }
  applyToLocalView(e, n) {
    for (const r of this.baseMutations)
      r.key.isEqual(e.key) && (n = Gs(r, e, n, this.localWriteTime));
    for (const r of this.mutations) r.key.isEqual(e.key) && (n = Gs(r, e, n, this.localWriteTime));
    return n;
  }
  applyToLocalDocumentSet(e, n) {
    const r = BE();
    return (
      this.mutations.forEach((i) => {
        const s = e.get(i.key),
          o = s.overlayedDocument;
        let a = this.applyToLocalView(o, s.mutatedFields);
        a = n.has(i.key) ? null : a;
        const l = UE(o, a);
        l !== null && r.set(i.key, l), o.isValidDocument() || o.convertToNoDocument(Y.min());
      }),
      r
    );
  }
  keys() {
    return this.mutations.reduce((e, n) => e.add(n.key), ie());
  }
  isEqual(e) {
    return (
      this.batchId === e.batchId &&
      ts(this.mutations, e.mutations, (n, r) => Ly(n, r)) &&
      ts(this.baseMutations, e.baseMutations, (n, r) => Ly(n, r))
    );
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ex {
  constructor(e, n) {
    (this.largestBatchId = e), (this.mutation = n);
  }
  getKey() {
    return this.mutation.key;
  }
  isEqual(e) {
    return e !== null && this.mutation === e.mutation;
  }
  toString() {
    return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Hr {
  constructor(e, n, r, i, s = Y.min(), o = Y.min(), a = ft.EMPTY_BYTE_STRING) {
    (this.target = e),
      (this.targetId = n),
      (this.purpose = r),
      (this.sequenceNumber = i),
      (this.snapshotVersion = s),
      (this.lastLimboFreeSnapshotVersion = o),
      (this.resumeToken = a);
  }
  withSequenceNumber(e) {
    return new Hr(
      this.target,
      this.targetId,
      this.purpose,
      e,
      this.snapshotVersion,
      this.lastLimboFreeSnapshotVersion,
      this.resumeToken
    );
  }
  withResumeToken(e, n) {
    return new Hr(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      n,
      this.lastLimboFreeSnapshotVersion,
      e
    );
  }
  withLastLimboFreeSnapshotVersion(e) {
    return new Hr(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      this.snapshotVersion,
      e,
      this.resumeToken
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Sx {
  constructor(e) {
    this.oe = e;
  }
}
function _x(t) {
  const e = px({ parent: t.parent, structuredQuery: t.structuredQuery });
  return t.limitType === 'LAST' ? Jd(e, e.limit, 'L') : e;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Tx {
  constructor() {
    this.Ze = new Ix();
  }
  addToCollectionParentIndex(e, n) {
    return this.Ze.add(n), C.resolve();
  }
  getCollectionParents(e, n) {
    return C.resolve(this.Ze.getEntries(n));
  }
  addFieldIndex(e, n) {
    return C.resolve();
  }
  deleteFieldIndex(e, n) {
    return C.resolve();
  }
  getDocumentsMatchingTarget(e, n) {
    return C.resolve(null);
  }
  getIndexType(e, n) {
    return C.resolve(0);
  }
  getFieldIndexes(e, n) {
    return C.resolve([]);
  }
  getNextCollectionGroupToUpdate(e) {
    return C.resolve(null);
  }
  getMinOffset(e, n) {
    return C.resolve(yr.min());
  }
  getMinOffsetFromCollectionGroup(e, n) {
    return C.resolve(yr.min());
  }
  updateCollectionGroup(e, n, r) {
    return C.resolve();
  }
  updateIndexEntries(e, n) {
    return C.resolve();
  }
}
class Ix {
  constructor() {
    this.index = {};
  }
  add(e) {
    const n = e.lastSegment(),
      r = e.popLast(),
      i = this.index[n] || new ze(Ne.comparator),
      s = !i.has(r);
    return (this.index[n] = i.add(r)), s;
  }
  has(e) {
    const n = e.lastSegment(),
      r = e.popLast(),
      i = this.index[n];
    return i && i.has(r);
  }
  getEntries(e) {
    return (this.index[e] || new ze(Ne.comparator)).toArray();
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ss {
  constructor(e) {
    this.Pn = e;
  }
  next() {
    return (this.Pn += 2), this.Pn;
  }
  static Vn() {
    return new ss(0);
  }
  static Sn() {
    return new ss(-1);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class kx {
  constructor() {
    (this.changes = new ps(
      (e) => e.toString(),
      (e, n) => e.isEqual(n)
    )),
      (this.changesApplied = !1);
  }
  addEntry(e) {
    this.assertNotApplied(), this.changes.set(e.key, e);
  }
  removeEntry(e, n) {
    this.assertNotApplied(), this.changes.set(e, lt.newInvalidDocument(e).setReadTime(n));
  }
  getEntry(e, n) {
    this.assertNotApplied();
    const r = this.changes.get(n);
    return r !== void 0 ? C.resolve(r) : this.getFromCache(e, n);
  }
  getEntries(e, n) {
    return this.getAllFromCache(e, n);
  }
  apply(e) {
    return this.assertNotApplied(), (this.changesApplied = !0), this.applyChanges(e);
  }
  assertNotApplied() {}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Cx {
  constructor(e, n) {
    (this.overlayedDocument = e), (this.mutatedFields = n);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ax {
  constructor(e, n, r, i) {
    (this.remoteDocumentCache = e),
      (this.mutationQueue = n),
      (this.documentOverlayCache = r),
      (this.indexManager = i);
  }
  getDocument(e, n) {
    let r = null;
    return this.documentOverlayCache
      .getOverlay(e, n)
      .next((i) => ((r = i), this.remoteDocumentCache.getEntry(e, n)))
      .next((i) => (r !== null && Gs(r.mutation, i, Jn.empty(), Ct.now()), i));
  }
  getDocuments(e, n) {
    return this.remoteDocumentCache
      .getEntries(e, n)
      .next((r) => this.getLocalViewOfDocuments(e, r, ie()).next(() => r));
  }
  getLocalViewOfDocuments(e, n, r = ie()) {
    const i = br();
    return this.populateOverlays(e, i, n).next(() =>
      this.computeViews(e, n, i, r).next((s) => {
        let o = $s();
        return (
          s.forEach((a, l) => {
            o = o.insert(a, l.overlayedDocument);
          }),
          o
        );
      })
    );
  }
  getOverlayedDocuments(e, n) {
    const r = br();
    return this.populateOverlays(e, r, n).next(() => this.computeViews(e, n, r, ie()));
  }
  populateOverlays(e, n, r) {
    const i = [];
    return (
      r.forEach((s) => {
        n.has(s) || i.push(s);
      }),
      this.documentOverlayCache.getOverlays(e, i).next((s) => {
        s.forEach((o, a) => {
          n.set(o, a);
        });
      })
    );
  }
  computeViews(e, n, r, i) {
    let s = wr();
    const o = Qs(),
      a = Qs();
    return (
      n.forEach((l, u) => {
        const c = r.get(u.key);
        i.has(u.key) && (c === void 0 || c.mutation instanceof sc)
          ? (s = s.insert(u.key, u))
          : c !== void 0
          ? (o.set(u.key, c.mutation.getFieldMask()),
            Gs(c.mutation, u, c.mutation.getFieldMask(), Ct.now()))
          : o.set(u.key, Jn.empty());
      }),
      this.recalculateAndSaveOverlays(e, s).next(
        (l) => (
          l.forEach((u, c) => o.set(u, c)),
          n.forEach((u, c) => {
            var h;
            return a.set(u, new Cx(c, (h = o.get(u)) !== null && h !== void 0 ? h : null));
          }),
          a
        )
      )
    );
  }
  recalculateAndSaveOverlays(e, n) {
    const r = Qs();
    let i = new tt((o, a) => o - a),
      s = ie();
    return this.mutationQueue
      .getAllMutationBatchesAffectingDocumentKeys(e, n)
      .next((o) => {
        for (const a of o)
          a.keys().forEach((l) => {
            const u = n.get(l);
            if (u === null) return;
            let c = r.get(l) || Jn.empty();
            (c = a.applyToLocalView(u, c)), r.set(l, c);
            const h = (i.get(a.batchId) || ie()).add(l);
            i = i.insert(a.batchId, h);
          });
      })
      .next(() => {
        const o = [],
          a = i.getReverseIterator();
        for (; a.hasNext(); ) {
          const l = a.getNext(),
            u = l.key,
            c = l.value,
            h = BE();
          c.forEach((d) => {
            if (!s.has(d)) {
              const m = UE(n.get(d), r.get(d));
              m !== null && h.set(d, m), (s = s.add(d));
            }
          }),
            o.push(this.documentOverlayCache.saveOverlays(e, u, h));
        }
        return C.waitFor(o);
      })
      .next(() => r);
  }
  recalculateAndSaveOverlaysForDocumentKeys(e, n) {
    return this.remoteDocumentCache
      .getEntries(e, n)
      .next((r) => this.recalculateAndSaveOverlays(e, r));
  }
  getDocumentsMatchingQuery(e, n, r) {
    return (function (i) {
      return K.isDocumentKey(i.path) && i.collectionGroup === null && i.filters.length === 0;
    })(n)
      ? this.getDocumentsMatchingDocumentQuery(e, n.path)
      : VR(n)
      ? this.getDocumentsMatchingCollectionGroupQuery(e, n, r)
      : this.getDocumentsMatchingCollectionQuery(e, n, r);
  }
  getNextDocuments(e, n, r, i) {
    return this.remoteDocumentCache.getAllFromCollectionGroup(e, n, r, i).next((s) => {
      const o =
        i - s.size > 0
          ? this.documentOverlayCache.getOverlaysForCollectionGroup(
              e,
              n,
              r.largestBatchId,
              i - s.size
            )
          : C.resolve(br());
      let a = -1,
        l = s;
      return o.next((u) =>
        C.forEach(
          u,
          (c, h) => (
            a < h.largestBatchId && (a = h.largestBatchId),
            s.get(c)
              ? C.resolve()
              : this.remoteDocumentCache.getEntry(e, c).next((d) => {
                  l = l.insert(c, d);
                })
          )
        )
          .next(() => this.populateOverlays(e, u, s))
          .next(() => this.computeViews(e, l, u, ie()))
          .next((c) => ({ batchId: a, changes: ZR(c) }))
      );
    });
  }
  getDocumentsMatchingDocumentQuery(e, n) {
    return this.getDocument(e, new K(n)).next((r) => {
      let i = $s();
      return r.isFoundDocument() && (i = i.insert(r.key, r)), i;
    });
  }
  getDocumentsMatchingCollectionGroupQuery(e, n, r) {
    const i = n.collectionGroup;
    let s = $s();
    return this.indexManager.getCollectionParents(e, i).next((o) =>
      C.forEach(o, (a) => {
        const l = (function (u, c) {
          return new tc(
            c,
            null,
            u.explicitOrderBy.slice(),
            u.filters.slice(),
            u.limit,
            u.limitType,
            u.startAt,
            u.endAt
          );
        })(n, a.child(i));
        return this.getDocumentsMatchingCollectionQuery(e, l, r).next((u) => {
          u.forEach((c, h) => {
            s = s.insert(c, h);
          });
        });
      }).next(() => s)
    );
  }
  getDocumentsMatchingCollectionQuery(e, n, r) {
    let i;
    return this.documentOverlayCache
      .getOverlaysForCollection(e, n.path, r.largestBatchId)
      .next((s) => ((i = s), this.remoteDocumentCache.getDocumentsMatchingQuery(e, n, r, i)))
      .next((s) => {
        i.forEach((a, l) => {
          const u = l.getKey();
          s.get(u) === null && (s = s.insert(u, lt.newInvalidDocument(u)));
        });
        let o = $s();
        return (
          s.forEach((a, l) => {
            const u = i.get(a);
            u !== void 0 && Gs(u.mutation, l, Jn.empty(), Ct.now()),
              rc(n, l) && (o = o.insert(a, l));
          }),
          o
        );
      });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Nx {
  constructor(e) {
    (this.Tt = e), (this.es = new Map()), (this.ns = new Map());
  }
  getBundleMetadata(e, n) {
    return C.resolve(this.es.get(n));
  }
  saveBundleMetadata(e, n) {
    var r;
    return (
      this.es.set(n.id, { id: (r = n).id, version: r.version, createTime: bi(r.createTime) }),
      C.resolve()
    );
  }
  getNamedQuery(e, n) {
    return C.resolve(this.ns.get(n));
  }
  saveNamedQuery(e, n) {
    return (
      this.ns.set(
        n.name,
        (function (r) {
          return { name: r.name, query: _x(r.bundledQuery), readTime: bi(r.readTime) };
        })(n)
      ),
      C.resolve()
    );
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Rx {
  constructor() {
    (this.overlays = new tt(K.comparator)), (this.ss = new Map());
  }
  getOverlay(e, n) {
    return C.resolve(this.overlays.get(n));
  }
  getOverlays(e, n) {
    const r = br();
    return C.forEach(n, (i) =>
      this.getOverlay(e, i).next((s) => {
        s !== null && r.set(i, s);
      })
    ).next(() => r);
  }
  saveOverlays(e, n, r) {
    return (
      r.forEach((i, s) => {
        this.ce(e, n, s);
      }),
      C.resolve()
    );
  }
  removeOverlaysForBatchId(e, n, r) {
    const i = this.ss.get(r);
    return (
      i !== void 0 &&
        (i.forEach((s) => (this.overlays = this.overlays.remove(s))), this.ss.delete(r)),
      C.resolve()
    );
  }
  getOverlaysForCollection(e, n, r) {
    const i = br(),
      s = n.length + 1,
      o = new K(n.child('')),
      a = this.overlays.getIteratorFrom(o);
    for (; a.hasNext(); ) {
      const l = a.getNext().value,
        u = l.getKey();
      if (!n.isPrefixOf(u.path)) break;
      u.path.length === s && l.largestBatchId > r && i.set(l.getKey(), l);
    }
    return C.resolve(i);
  }
  getOverlaysForCollectionGroup(e, n, r, i) {
    let s = new tt((u, c) => u - c);
    const o = this.overlays.getIterator();
    for (; o.hasNext(); ) {
      const u = o.getNext().value;
      if (u.getKey().getCollectionGroup() === n && u.largestBatchId > r) {
        let c = s.get(u.largestBatchId);
        c === null && ((c = br()), (s = s.insert(u.largestBatchId, c))), c.set(u.getKey(), u);
      }
    }
    const a = br(),
      l = s.getIterator();
    for (; l.hasNext() && (l.getNext().value.forEach((u, c) => a.set(u, c)), !(a.size() >= i)); );
    return C.resolve(a);
  }
  ce(e, n, r) {
    const i = this.overlays.get(r.key);
    if (i !== null) {
      const o = this.ss.get(i.largestBatchId).delete(r.key);
      this.ss.set(i.largestBatchId, o);
    }
    this.overlays = this.overlays.insert(r.key, new Ex(n, r));
    let s = this.ss.get(n);
    s === void 0 && ((s = ie()), this.ss.set(n, s)), this.ss.set(n, s.add(r.key));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class em {
  constructor() {
    (this.rs = new ze(He.os)), (this.us = new ze(He.cs));
  }
  isEmpty() {
    return this.rs.isEmpty();
  }
  addReference(e, n) {
    const r = new He(e, n);
    (this.rs = this.rs.add(r)), (this.us = this.us.add(r));
  }
  hs(e, n) {
    e.forEach((r) => this.addReference(r, n));
  }
  removeReference(e, n) {
    this.ls(new He(e, n));
  }
  fs(e, n) {
    e.forEach((r) => this.removeReference(r, n));
  }
  ds(e) {
    const n = new K(new Ne([])),
      r = new He(n, e),
      i = new He(n, e + 1),
      s = [];
    return (
      this.us.forEachInRange([r, i], (o) => {
        this.ls(o), s.push(o.key);
      }),
      s
    );
  }
  _s() {
    this.rs.forEach((e) => this.ls(e));
  }
  ls(e) {
    (this.rs = this.rs.delete(e)), (this.us = this.us.delete(e));
  }
  ws(e) {
    const n = new K(new Ne([])),
      r = new He(n, e),
      i = new He(n, e + 1);
    let s = ie();
    return (
      this.us.forEachInRange([r, i], (o) => {
        s = s.add(o.key);
      }),
      s
    );
  }
  containsKey(e) {
    const n = new He(e, 0),
      r = this.rs.firstAfterOrEqual(n);
    return r !== null && e.isEqual(r.key);
  }
}
class He {
  constructor(e, n) {
    (this.key = e), (this.gs = n);
  }
  static os(e, n) {
    return K.comparator(e.key, n.key) || ue(e.gs, n.gs);
  }
  static cs(e, n) {
    return ue(e.gs, n.gs) || K.comparator(e.key, n.key);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class xx {
  constructor(e, n) {
    (this.indexManager = e),
      (this.referenceDelegate = n),
      (this.mutationQueue = []),
      (this.ys = 1),
      (this.ps = new ze(He.os));
  }
  checkEmpty(e) {
    return C.resolve(this.mutationQueue.length === 0);
  }
  addMutationBatch(e, n, r, i) {
    const s = this.ys;
    this.ys++, this.mutationQueue.length > 0 && this.mutationQueue[this.mutationQueue.length - 1];
    const o = new wx(s, n, r, i);
    this.mutationQueue.push(o);
    for (const a of i)
      (this.ps = this.ps.add(new He(a.key, s))),
        this.indexManager.addToCollectionParentIndex(e, a.key.path.popLast());
    return C.resolve(o);
  }
  lookupMutationBatch(e, n) {
    return C.resolve(this.Is(n));
  }
  getNextMutationBatchAfterBatchId(e, n) {
    const r = n + 1,
      i = this.Ts(r),
      s = i < 0 ? 0 : i;
    return C.resolve(this.mutationQueue.length > s ? this.mutationQueue[s] : null);
  }
  getHighestUnacknowledgedBatchId() {
    return C.resolve(this.mutationQueue.length === 0 ? -1 : this.ys - 1);
  }
  getAllMutationBatches(e) {
    return C.resolve(this.mutationQueue.slice());
  }
  getAllMutationBatchesAffectingDocumentKey(e, n) {
    const r = new He(n, 0),
      i = new He(n, Number.POSITIVE_INFINITY),
      s = [];
    return (
      this.ps.forEachInRange([r, i], (o) => {
        const a = this.Is(o.gs);
        s.push(a);
      }),
      C.resolve(s)
    );
  }
  getAllMutationBatchesAffectingDocumentKeys(e, n) {
    let r = new ze(ue);
    return (
      n.forEach((i) => {
        const s = new He(i, 0),
          o = new He(i, Number.POSITIVE_INFINITY);
        this.ps.forEachInRange([s, o], (a) => {
          r = r.add(a.gs);
        });
      }),
      C.resolve(this.Es(r))
    );
  }
  getAllMutationBatchesAffectingQuery(e, n) {
    const r = n.path,
      i = r.length + 1;
    let s = r;
    K.isDocumentKey(s) || (s = s.child(''));
    const o = new He(new K(s), 0);
    let a = new ze(ue);
    return (
      this.ps.forEachWhile((l) => {
        const u = l.key.path;
        return !!r.isPrefixOf(u) && (u.length === i && (a = a.add(l.gs)), !0);
      }, o),
      C.resolve(this.Es(a))
    );
  }
  Es(e) {
    const n = [];
    return (
      e.forEach((r) => {
        const i = this.Is(r);
        i !== null && n.push(i);
      }),
      n
    );
  }
  removeMutationBatch(e, n) {
    Fe(this.As(n.batchId, 'removed') === 0), this.mutationQueue.shift();
    let r = this.ps;
    return C.forEach(n.mutations, (i) => {
      const s = new He(i.key, n.batchId);
      return (r = r.delete(s)), this.referenceDelegate.markPotentiallyOrphaned(e, i.key);
    }).next(() => {
      this.ps = r;
    });
  }
  bn(e) {}
  containsKey(e, n) {
    const r = new He(n, 0),
      i = this.ps.firstAfterOrEqual(r);
    return C.resolve(n.isEqual(i && i.key));
  }
  performConsistencyCheck(e) {
    return this.mutationQueue.length, C.resolve();
  }
  As(e, n) {
    return this.Ts(e);
  }
  Ts(e) {
    return this.mutationQueue.length === 0 ? 0 : e - this.mutationQueue[0].batchId;
  }
  Is(e) {
    const n = this.Ts(e);
    return n < 0 || n >= this.mutationQueue.length ? null : this.mutationQueue[n];
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Dx {
  constructor(e) {
    (this.Rs = e), (this.docs = new tt(K.comparator)), (this.size = 0);
  }
  setIndexManager(e) {
    this.indexManager = e;
  }
  addEntry(e, n) {
    const r = n.key,
      i = this.docs.get(r),
      s = i ? i.size : 0,
      o = this.Rs(n);
    return (
      (this.docs = this.docs.insert(r, { document: n.mutableCopy(), size: o })),
      (this.size += o - s),
      this.indexManager.addToCollectionParentIndex(e, r.path.popLast())
    );
  }
  removeEntry(e) {
    const n = this.docs.get(e);
    n && ((this.docs = this.docs.remove(e)), (this.size -= n.size));
  }
  getEntry(e, n) {
    const r = this.docs.get(n);
    return C.resolve(r ? r.document.mutableCopy() : lt.newInvalidDocument(n));
  }
  getEntries(e, n) {
    let r = wr();
    return (
      n.forEach((i) => {
        const s = this.docs.get(i);
        r = r.insert(i, s ? s.document.mutableCopy() : lt.newInvalidDocument(i));
      }),
      C.resolve(r)
    );
  }
  getDocumentsMatchingQuery(e, n, r, i) {
    let s = wr();
    const o = n.path,
      a = new K(o.child('')),
      l = this.docs.getIteratorFrom(a);
    for (; l.hasNext(); ) {
      const {
        key: u,
        value: { document: c }
      } = l.getNext();
      if (!o.isPrefixOf(u.path)) break;
      u.path.length > o.length + 1 ||
        wR(vR(c), r) <= 0 ||
        ((i.has(c.key) || rc(n, c)) && (s = s.insert(c.key, c.mutableCopy())));
    }
    return C.resolve(s);
  }
  getAllFromCollectionGroup(e, n, r, i) {
    J();
  }
  bs(e, n) {
    return C.forEach(this.docs, (r) => n(r));
  }
  newChangeBuffer(e) {
    return new Px(this);
  }
  getSize(e) {
    return C.resolve(this.size);
  }
}
class Px extends kx {
  constructor(e) {
    super(), (this.Xn = e);
  }
  applyChanges(e) {
    const n = [];
    return (
      this.changes.forEach((r, i) => {
        i.isValidDocument() ? n.push(this.Xn.addEntry(e, i)) : this.Xn.removeEntry(r);
      }),
      C.waitFor(n)
    );
  }
  getFromCache(e, n) {
    return this.Xn.getEntry(e, n);
  }
  getAllFromCache(e, n) {
    return this.Xn.getEntries(e, n);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ox {
  constructor(e) {
    (this.persistence = e),
      (this.vs = new ps((n) => Xp(n), Yp)),
      (this.lastRemoteSnapshotVersion = Y.min()),
      (this.highestTargetId = 0),
      (this.Ps = 0),
      (this.Vs = new em()),
      (this.targetCount = 0),
      (this.Ss = ss.Vn());
  }
  forEachTarget(e, n) {
    return this.vs.forEach((r, i) => n(i)), C.resolve();
  }
  getLastRemoteSnapshotVersion(e) {
    return C.resolve(this.lastRemoteSnapshotVersion);
  }
  getHighestSequenceNumber(e) {
    return C.resolve(this.Ps);
  }
  allocateTargetId(e) {
    return (this.highestTargetId = this.Ss.next()), C.resolve(this.highestTargetId);
  }
  setTargetsMetadata(e, n, r) {
    return r && (this.lastRemoteSnapshotVersion = r), n > this.Ps && (this.Ps = n), C.resolve();
  }
  xn(e) {
    this.vs.set(e.target, e);
    const n = e.targetId;
    n > this.highestTargetId && ((this.Ss = new ss(n)), (this.highestTargetId = n)),
      e.sequenceNumber > this.Ps && (this.Ps = e.sequenceNumber);
  }
  addTargetData(e, n) {
    return this.xn(n), (this.targetCount += 1), C.resolve();
  }
  updateTargetData(e, n) {
    return this.xn(n), C.resolve();
  }
  removeTargetData(e, n) {
    return this.vs.delete(n.target), this.Vs.ds(n.targetId), (this.targetCount -= 1), C.resolve();
  }
  removeTargets(e, n, r) {
    let i = 0;
    const s = [];
    return (
      this.vs.forEach((o, a) => {
        a.sequenceNumber <= n &&
          r.get(a.targetId) === null &&
          (this.vs.delete(o), s.push(this.removeMatchingKeysForTargetId(e, a.targetId)), i++);
      }),
      C.waitFor(s).next(() => i)
    );
  }
  getTargetCount(e) {
    return C.resolve(this.targetCount);
  }
  getTargetData(e, n) {
    const r = this.vs.get(n) || null;
    return C.resolve(r);
  }
  addMatchingKeys(e, n, r) {
    return this.Vs.hs(n, r), C.resolve();
  }
  removeMatchingKeys(e, n, r) {
    this.Vs.fs(n, r);
    const i = this.persistence.referenceDelegate,
      s = [];
    return (
      i &&
        n.forEach((o) => {
          s.push(i.markPotentiallyOrphaned(e, o));
        }),
      C.waitFor(s)
    );
  }
  removeMatchingKeysForTargetId(e, n) {
    return this.Vs.ds(n), C.resolve();
  }
  getMatchingKeysForTargetId(e, n) {
    const r = this.Vs.ws(n);
    return C.resolve(r);
  }
  containsKey(e, n) {
    return C.resolve(this.Vs.containsKey(n));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Lx {
  constructor(e, n) {
    (this.Ds = {}),
      (this.overlays = {}),
      (this.Cs = new Gp(0)),
      (this.xs = !1),
      (this.xs = !0),
      (this.referenceDelegate = e(this)),
      (this.Ns = new Ox(this)),
      (this.indexManager = new Tx()),
      (this.remoteDocumentCache = (function (r) {
        return new Dx(r);
      })((r) => this.referenceDelegate.ks(r))),
      (this.Tt = new Sx(n)),
      (this.Os = new Nx(this.Tt));
  }
  start() {
    return Promise.resolve();
  }
  shutdown() {
    return (this.xs = !1), Promise.resolve();
  }
  get started() {
    return this.xs;
  }
  setDatabaseDeletedListener() {}
  setNetworkEnabled() {}
  getIndexManager(e) {
    return this.indexManager;
  }
  getDocumentOverlayCache(e) {
    let n = this.overlays[e.toKey()];
    return n || ((n = new Rx()), (this.overlays[e.toKey()] = n)), n;
  }
  getMutationQueue(e, n) {
    let r = this.Ds[e.toKey()];
    return r || ((r = new xx(n, this.referenceDelegate)), (this.Ds[e.toKey()] = r)), r;
  }
  getTargetCache() {
    return this.Ns;
  }
  getRemoteDocumentCache() {
    return this.remoteDocumentCache;
  }
  getBundleCache() {
    return this.Os;
  }
  runTransaction(e, n, r) {
    V('MemoryPersistence', 'Starting transaction:', e);
    const i = new $x(this.Cs.next());
    return (
      this.referenceDelegate.Ms(),
      r(i)
        .next((s) => this.referenceDelegate.Fs(i).next(() => s))
        .toPromise()
        .then((s) => (i.raiseOnCommittedEvent(), s))
    );
  }
  $s(e, n) {
    return C.or(Object.values(this.Ds).map((r) => () => r.containsKey(e, n)));
  }
}
class $x extends SR {
  constructor(e) {
    super(), (this.currentSequenceNumber = e);
  }
}
class tm {
  constructor(e) {
    (this.persistence = e), (this.Bs = new em()), (this.Ls = null);
  }
  static qs(e) {
    return new tm(e);
  }
  get Us() {
    if (this.Ls) return this.Ls;
    throw J();
  }
  addReference(e, n, r) {
    return this.Bs.addReference(r, n), this.Us.delete(r.toString()), C.resolve();
  }
  removeReference(e, n, r) {
    return this.Bs.removeReference(r, n), this.Us.add(r.toString()), C.resolve();
  }
  markPotentiallyOrphaned(e, n) {
    return this.Us.add(n.toString()), C.resolve();
  }
  removeTarget(e, n) {
    this.Bs.ds(n.targetId).forEach((i) => this.Us.add(i.toString()));
    const r = this.persistence.getTargetCache();
    return r
      .getMatchingKeysForTargetId(e, n.targetId)
      .next((i) => {
        i.forEach((s) => this.Us.add(s.toString()));
      })
      .next(() => r.removeTargetData(e, n));
  }
  Ms() {
    this.Ls = new Set();
  }
  Fs(e) {
    const n = this.persistence.getRemoteDocumentCache().newChangeBuffer();
    return C.forEach(this.Us, (r) => {
      const i = K.fromPath(r);
      return this.Ks(e, i).next((s) => {
        s || n.removeEntry(i, Y.min());
      });
    }).next(() => ((this.Ls = null), n.apply(e)));
  }
  updateLimboDocument(e, n) {
    return this.Ks(e, n).next((r) => {
      r ? this.Us.delete(n.toString()) : this.Us.add(n.toString());
    });
  }
  ks(e) {
    return 0;
  }
  Ks(e, n) {
    return C.or([
      () => C.resolve(this.Bs.containsKey(n)),
      () => this.persistence.getTargetCache().containsKey(e, n),
      () => this.persistence.$s(e, n)
    ]);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nm {
  constructor(e, n, r, i) {
    (this.targetId = e), (this.fromCache = n), (this.Ci = r), (this.xi = i);
  }
  static Ni(e, n) {
    let r = ie(),
      i = ie();
    for (const s of n.docChanges)
      switch (s.type) {
        case 0:
          r = r.add(s.doc.key);
          break;
        case 1:
          i = i.add(s.doc.key);
      }
    return new nm(e, n.fromCache, r, i);
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bx {
  constructor() {
    this.ki = !1;
  }
  initialize(e, n) {
    (this.Oi = e), (this.indexManager = n), (this.ki = !0);
  }
  getDocumentsMatchingQuery(e, n, r, i) {
    return this.Mi(e, n)
      .next((s) => s || this.Fi(e, n, i, r))
      .next((s) => s || this.$i(e, n));
  }
  Mi(e, n) {
    if (Py(n)) return C.resolve(null);
    let r = On(n);
    return this.indexManager.getIndexType(e, r).next((i) =>
      i === 0
        ? null
        : (n.limit !== null && i === 1 && ((n = Jd(n, null, 'F')), (r = On(n))),
          this.indexManager.getDocumentsMatchingTarget(e, r).next((s) => {
            const o = ie(...s);
            return this.Oi.getDocuments(e, o).next((a) =>
              this.indexManager.getMinOffset(e, r).next((l) => {
                const u = this.Bi(n, a);
                return this.Li(n, u, o, l.readTime)
                  ? this.Mi(e, Jd(n, null, 'F'))
                  : this.qi(e, u, n, l);
              })
            );
          }))
    );
  }
  Fi(e, n, r, i) {
    return Py(n) || i.isEqual(Y.min())
      ? this.$i(e, n)
      : this.Oi.getDocuments(e, r).next((s) => {
          const o = this.Bi(n, s);
          return this.Li(n, o, r, i)
            ? this.$i(e, n)
            : (Ty() <= ae.DEBUG &&
                V(
                  'QueryEngine',
                  'Re-using previous result from %s to execute query: %s',
                  i.toString(),
                  Zd(n)
                ),
              this.qi(e, o, n, yR(i, -1)));
        });
  }
  Bi(e, n) {
    let r = new ze($E(e));
    return (
      n.forEach((i, s) => {
        rc(e, s) && (r = r.add(s));
      }),
      r
    );
  }
  Li(e, n, r, i) {
    if (e.limit === null) return !1;
    if (r.size !== n.size) return !0;
    const s = e.limitType === 'F' ? n.last() : n.first();
    return !!s && (s.hasPendingWrites || s.version.compareTo(i) > 0);
  }
  $i(e, n) {
    return (
      Ty() <= ae.DEBUG && V('QueryEngine', 'Using full collection scan to execute query:', Zd(n)),
      this.Oi.getDocumentsMatchingQuery(e, n, yr.min())
    );
  }
  qi(e, n, r, i) {
    return this.Oi.getDocumentsMatchingQuery(e, r, i).next(
      (s) => (
        n.forEach((o) => {
          s = s.insert(o.key, o);
        }),
        s
      )
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Mx {
  constructor(e, n, r, i) {
    (this.persistence = e),
      (this.Ui = n),
      (this.Tt = i),
      (this.Ki = new tt(ue)),
      (this.Gi = new ps((s) => Xp(s), Yp)),
      (this.Qi = new Map()),
      (this.ji = e.getRemoteDocumentCache()),
      (this.Ns = e.getTargetCache()),
      (this.Os = e.getBundleCache()),
      this.zi(r);
  }
  zi(e) {
    (this.documentOverlayCache = this.persistence.getDocumentOverlayCache(e)),
      (this.indexManager = this.persistence.getIndexManager(e)),
      (this.mutationQueue = this.persistence.getMutationQueue(e, this.indexManager)),
      (this.localDocuments = new Ax(
        this.ji,
        this.mutationQueue,
        this.documentOverlayCache,
        this.indexManager
      )),
      this.ji.setIndexManager(this.indexManager),
      this.Ui.initialize(this.localDocuments, this.indexManager);
  }
  collectGarbage(e) {
    return this.persistence.runTransaction('Collect garbage', 'readwrite-primary', (n) =>
      e.collect(n, this.Ki)
    );
  }
}
function Fx(t, e, n, r) {
  return new Mx(t, e, n, r);
}
async function JE(t, e) {
  const n = oe(t);
  return await n.persistence.runTransaction('Handle user change', 'readonly', (r) => {
    let i;
    return n.mutationQueue
      .getAllMutationBatches(r)
      .next((s) => ((i = s), n.zi(e), n.mutationQueue.getAllMutationBatches(r)))
      .next((s) => {
        const o = [],
          a = [];
        let l = ie();
        for (const u of i) {
          o.push(u.batchId);
          for (const c of u.mutations) l = l.add(c.key);
        }
        for (const u of s) {
          a.push(u.batchId);
          for (const c of u.mutations) l = l.add(c.key);
        }
        return n.localDocuments
          .getDocuments(r, l)
          .next((u) => ({ Wi: u, removedBatchIds: o, addedBatchIds: a }));
      });
  });
}
function ZE(t) {
  const e = oe(t);
  return e.persistence.runTransaction('Get last remote snapshot version', 'readonly', (n) =>
    e.Ns.getLastRemoteSnapshotVersion(n)
  );
}
function Ux(t, e) {
  const n = oe(t),
    r = e.snapshotVersion;
  let i = n.Ki;
  return n.persistence
    .runTransaction('Apply remote event', 'readwrite-primary', (s) => {
      const o = n.ji.newChangeBuffer({ trackRemovals: !0 });
      i = n.Ki;
      const a = [];
      e.targetChanges.forEach((c, h) => {
        const d = i.get(h);
        if (!d) return;
        a.push(
          n.Ns.removeMatchingKeys(s, c.removedDocuments, h).next(() =>
            n.Ns.addMatchingKeys(s, c.addedDocuments, h)
          )
        );
        let m = d.withSequenceNumber(s.currentSequenceNumber);
        e.targetMismatches.has(h)
          ? (m = m
              .withResumeToken(ft.EMPTY_BYTE_STRING, Y.min())
              .withLastLimboFreeSnapshotVersion(Y.min()))
          : c.resumeToken.approximateByteSize() > 0 && (m = m.withResumeToken(c.resumeToken, r)),
          (i = i.insert(h, m)),
          (function (y, v, S) {
            return y.resumeToken.approximateByteSize() === 0 ||
              v.snapshotVersion.toMicroseconds() - y.snapshotVersion.toMicroseconds() >= 3e8
              ? !0
              : S.addedDocuments.size + S.modifiedDocuments.size + S.removedDocuments.size > 0;
          })(d, m, c) && a.push(n.Ns.updateTargetData(s, m));
      });
      let l = wr(),
        u = ie();
      if (
        (e.documentUpdates.forEach((c) => {
          e.resolvedLimboDocuments.has(c) &&
            a.push(n.persistence.referenceDelegate.updateLimboDocument(s, c));
        }),
        a.push(
          Vx(s, o, e.documentUpdates).next((c) => {
            (l = c.Hi), (u = c.Ji);
          })
        ),
        !r.isEqual(Y.min()))
      ) {
        const c = n.Ns.getLastRemoteSnapshotVersion(s).next((h) =>
          n.Ns.setTargetsMetadata(s, s.currentSequenceNumber, r)
        );
        a.push(c);
      }
      return C.waitFor(a)
        .next(() => o.apply(s))
        .next(() => n.localDocuments.getLocalViewOfDocuments(s, l, u))
        .next(() => l);
    })
    .then((s) => ((n.Ki = i), s));
}
function Vx(t, e, n) {
  let r = ie(),
    i = ie();
  return (
    n.forEach((s) => (r = r.add(s))),
    e.getEntries(t, r).next((s) => {
      let o = wr();
      return (
        n.forEach((a, l) => {
          const u = s.get(a);
          l.isFoundDocument() !== u.isFoundDocument() && (i = i.add(a)),
            l.isNoDocument() && l.version.isEqual(Y.min())
              ? (e.removeEntry(a, l.readTime), (o = o.insert(a, l)))
              : !u.isValidDocument() ||
                l.version.compareTo(u.version) > 0 ||
                (l.version.compareTo(u.version) === 0 && u.hasPendingWrites)
              ? (e.addEntry(l), (o = o.insert(a, l)))
              : V(
                  'LocalStore',
                  'Ignoring outdated watch update for ',
                  a,
                  '. Current version:',
                  u.version,
                  ' Watch version:',
                  l.version
                );
        }),
        { Hi: o, Ji: i }
      );
    })
  );
}
function jx(t, e) {
  const n = oe(t);
  return n.persistence
    .runTransaction('Allocate target', 'readwrite', (r) => {
      let i;
      return n.Ns.getTargetData(r, e).next((s) =>
        s
          ? ((i = s), C.resolve(i))
          : n.Ns.allocateTargetId(r).next(
              (o) => (
                (i = new Hr(e, o, 0, r.currentSequenceNumber)),
                n.Ns.addTargetData(r, i).next(() => i)
              )
            )
      );
    })
    .then((r) => {
      const i = n.Ki.get(r.targetId);
      return (
        (i === null || r.snapshotVersion.compareTo(i.snapshotVersion) > 0) &&
          ((n.Ki = n.Ki.insert(r.targetId, r)), n.Gi.set(e, r.targetId)),
        r
      );
    });
}
async function rf(t, e, n) {
  const r = oe(t),
    i = r.Ki.get(e),
    s = n ? 'readwrite' : 'readwrite-primary';
  try {
    n ||
      (await r.persistence.runTransaction('Release target', s, (o) =>
        r.persistence.referenceDelegate.removeTarget(o, i)
      ));
  } catch (o) {
    if (!Go(o)) throw o;
    V('LocalStore', `Failed to update sequence numbers for target ${e}: ${o}`);
  }
  (r.Ki = r.Ki.remove(e)), r.Gi.delete(i.target);
}
function jy(t, e, n) {
  const r = oe(t);
  let i = Y.min(),
    s = ie();
  return r.persistence.runTransaction('Execute query', 'readonly', (o) =>
    (function (a, l, u) {
      const c = oe(a),
        h = c.Gi.get(u);
      return h !== void 0 ? C.resolve(c.Ki.get(h)) : c.Ns.getTargetData(l, u);
    })(r, o, On(e))
      .next((a) => {
        if (a)
          return (
            (i = a.lastLimboFreeSnapshotVersion),
            r.Ns.getMatchingKeysForTargetId(o, a.targetId).next((l) => {
              s = l;
            })
          );
      })
      .next(() => r.Ui.getDocumentsMatchingQuery(o, e, n ? i : Y.min(), n ? s : ie()))
      .next((a) => (zx(r, jR(e), a), { documents: a, Yi: s }))
  );
}
function zx(t, e, n) {
  let r = t.Qi.get(e) || Y.min();
  n.forEach((i, s) => {
    s.readTime.compareTo(r) > 0 && (r = s.readTime);
  }),
    t.Qi.set(e, r);
}
class zy {
  constructor() {
    this.activeTargetIds = HE();
  }
  sr(e) {
    this.activeTargetIds = this.activeTargetIds.add(e);
  }
  ir(e) {
    this.activeTargetIds = this.activeTargetIds.delete(e);
  }
  nr() {
    const e = { activeTargetIds: this.activeTargetIds.toArray(), updateTimeMs: Date.now() };
    return JSON.stringify(e);
  }
}
class Bx {
  constructor() {
    (this.Ur = new zy()),
      (this.Kr = {}),
      (this.onlineStateHandler = null),
      (this.sequenceNumberHandler = null);
  }
  addPendingMutation(e) {}
  updateMutationState(e, n, r) {}
  addLocalQueryTarget(e) {
    return this.Ur.sr(e), this.Kr[e] || 'not-current';
  }
  updateQueryState(e, n, r) {
    this.Kr[e] = n;
  }
  removeLocalQueryTarget(e) {
    this.Ur.ir(e);
  }
  isLocalQueryTarget(e) {
    return this.Ur.activeTargetIds.has(e);
  }
  clearQueryState(e) {
    delete this.Kr[e];
  }
  getAllActiveQueryTargets() {
    return this.Ur.activeTargetIds;
  }
  isActiveQueryTarget(e) {
    return this.Ur.activeTargetIds.has(e);
  }
  start() {
    return (this.Ur = new zy()), Promise.resolve();
  }
  handleUserChange(e, n, r) {}
  setOnlineState(e) {}
  shutdown() {}
  writeSequenceNumber(e) {}
  notifyBundleLoaded(e) {}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Hx {
  Gr(e) {}
  shutdown() {}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class By {
  constructor() {
    (this.Qr = () => this.jr()), (this.zr = () => this.Wr()), (this.Hr = []), this.Jr();
  }
  Gr(e) {
    this.Hr.push(e);
  }
  shutdown() {
    window.removeEventListener('online', this.Qr), window.removeEventListener('offline', this.zr);
  }
  Jr() {
    window.addEventListener('online', this.Qr), window.addEventListener('offline', this.zr);
  }
  jr() {
    V('ConnectivityMonitor', 'Network connectivity changed: AVAILABLE');
    for (const e of this.Hr) e(0);
  }
  Wr() {
    V('ConnectivityMonitor', 'Network connectivity changed: UNAVAILABLE');
    for (const e of this.Hr) e(1);
  }
  static C() {
    return (
      typeof window < 'u' &&
      window.addEventListener !== void 0 &&
      window.removeEventListener !== void 0
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Kx = {
  BatchGetDocuments: 'batchGet',
  Commit: 'commit',
  RunQuery: 'runQuery',
  RunAggregationQuery: 'runAggregationQuery'
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Wx {
  constructor(e) {
    (this.Yr = e.Yr), (this.Zr = e.Zr);
  }
  Xr(e) {
    this.eo = e;
  }
  no(e) {
    this.so = e;
  }
  onMessage(e) {
    this.io = e;
  }
  close() {
    this.Zr();
  }
  send(e) {
    this.Yr(e);
  }
  ro() {
    this.eo();
  }
  oo(e) {
    this.so(e);
  }
  uo(e) {
    this.io(e);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class qx extends class {
  constructor(e) {
    (this.databaseInfo = e), (this.databaseId = e.databaseId);
    const n = e.ssl ? 'https' : 'http';
    (this.co = n + '://' + e.host),
      (this.ao =
        'projects/' +
        this.databaseId.projectId +
        '/databases/' +
        this.databaseId.database +
        '/documents');
  }
  get ho() {
    return !1;
  }
  lo(e, n, r, i, s) {
    const o = this.fo(e, n);
    V('RestConnection', 'Sending: ', o, r);
    const a = {};
    return (
      this._o(a, i, s),
      this.wo(e, o, a, r).then(
        (l) => (V('RestConnection', 'Received: ', l), l),
        (l) => {
          throw (Wd('RestConnection', `${e} failed with error: `, l, 'url: ', o, 'request:', r), l);
        }
      )
    );
  }
  mo(e, n, r, i, s, o) {
    return this.lo(e, n, r, i, s);
  }
  _o(e, n, r) {
    (e['X-Goog-Api-Client'] = 'gl-js/ fire/' + fs),
      (e['Content-Type'] = 'text/plain'),
      this.databaseInfo.appId && (e['X-Firebase-GMPID'] = this.databaseInfo.appId),
      n && n.headers.forEach((i, s) => (e[s] = i)),
      r && r.headers.forEach((i, s) => (e[s] = i));
  }
  fo(e, n) {
    const r = Kx[e];
    return `${this.co}/v1/${n}:${r}`;
  }
} {
  constructor(e) {
    super(e),
      (this.forceLongPolling = e.forceLongPolling),
      (this.autoDetectLongPolling = e.autoDetectLongPolling),
      (this.useFetchStreams = e.useFetchStreams);
  }
  wo(e, n, r, i) {
    return new Promise((s, o) => {
      const a = new oR();
      a.setWithCredentials(!0),
        a.listenOnce(rR.COMPLETE, () => {
          try {
            switch (a.getLastErrorCode()) {
              case fh.NO_ERROR:
                const u = a.getResponseJson();
                V('Connection', 'XHR received:', JSON.stringify(u)), s(u);
                break;
              case fh.TIMEOUT:
                V('Connection', 'RPC "' + e + '" timed out'),
                  o(new q(O.DEADLINE_EXCEEDED, 'Request time out'));
                break;
              case fh.HTTP_ERROR:
                const c = a.getStatus();
                if (
                  (V(
                    'Connection',
                    'RPC "' + e + '" failed with status:',
                    c,
                    'response text:',
                    a.getResponseText()
                  ),
                  c > 0)
                ) {
                  let h = a.getResponseJson();
                  Array.isArray(h) && (h = h[0]);
                  const d = h == null ? void 0 : h.error;
                  if (d && d.status && d.message) {
                    const m = (function (y) {
                      const v = y.toLowerCase().replace(/_/g, '-');
                      return Object.values(O).indexOf(v) >= 0 ? v : O.UNKNOWN;
                    })(d.status);
                    o(new q(m, d.message));
                  } else o(new q(O.UNKNOWN, 'Server responded with status ' + a.getStatus()));
                } else o(new q(O.UNAVAILABLE, 'Connection failed.'));
                break;
              default:
                J();
            }
          } finally {
            V('Connection', 'RPC "' + e + '" completed.');
          }
        });
      const l = JSON.stringify(i);
      a.send(n, 'POST', l, r, 15);
    });
  }
  yo(e, n, r) {
    const i = [this.co, '/', 'google.firestore.v1.Firestore', '/', e, '/channel'],
      s = tR(),
      o = nR(),
      a = {
        httpSessionIdParam: 'gsessionid',
        initMessageHeaders: {},
        messageUrlParams: {
          database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`
        },
        sendRawJson: !0,
        supportsCrossDomainXhr: !0,
        internalChannelParams: { forwardChannelRequestTimeoutMs: 6e5 },
        forceLongPolling: this.forceLongPolling,
        detectBufferingProxy: this.autoDetectLongPolling
      };
    this.useFetchStreams && (a.xmlHttpFactory = new sR({})),
      this._o(a.initMessageHeaders, n, r),
      (a.encodeInitMessageHeaders = !0);
    const l = i.join('');
    V('Connection', 'Creating WebChannel: ' + l, a);
    const u = s.createWebChannel(l, a);
    let c = !1,
      h = !1;
    const d = new Wx({
        Yr: (y) => {
          h
            ? V('Connection', 'Not sending because WebChannel is closed:', y)
            : (c || (V('Connection', 'Opening WebChannel transport.'), u.open(), (c = !0)),
              V('Connection', 'WebChannel sending:', y),
              u.send(y));
        },
        Zr: () => u.close()
      }),
      m = (y, v, S) => {
        y.listen(v, (p) => {
          try {
            S(p);
          } catch (f) {
            setTimeout(() => {
              throw f;
            }, 0);
          }
        });
      };
    return (
      m(u, Ta.EventType.OPEN, () => {
        h || V('Connection', 'WebChannel transport opened.');
      }),
      m(u, Ta.EventType.CLOSE, () => {
        h || ((h = !0), V('Connection', 'WebChannel transport closed'), d.oo());
      }),
      m(u, Ta.EventType.ERROR, (y) => {
        h ||
          ((h = !0),
          Wd('Connection', 'WebChannel transport errored:', y),
          d.oo(new q(O.UNAVAILABLE, 'The operation could not be completed')));
      }),
      m(u, Ta.EventType.MESSAGE, (y) => {
        var v;
        if (!h) {
          const S = y.data[0];
          Fe(!!S);
          const p = S,
            f = p.error || ((v = p[0]) === null || v === void 0 ? void 0 : v.error);
          if (f) {
            V('Connection', 'WebChannel received error:', f);
            const g = f.status;
            let E = (function (R) {
                const x = Le[R];
                if (x !== void 0) return jE(x);
              })(g),
              _ = f.message;
            E === void 0 &&
              ((E = O.INTERNAL), (_ = 'Unknown error status: ' + g + ' with message ' + f.message)),
              (h = !0),
              d.oo(new q(E, _)),
              u.close();
          } else V('Connection', 'WebChannel received:', S), d.uo(S);
        }
      }),
      m(o, iR.STAT_EVENT, (y) => {
        y.stat === Sy.PROXY
          ? V('Connection', 'Detected buffering proxy')
          : y.stat === Sy.NOPROXY && V('Connection', 'Detected no buffering proxy');
      }),
      setTimeout(() => {
        d.ro();
      }, 0),
      d
    );
  }
}
function gh() {
  return typeof document < 'u' ? document : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function eS(t) {
  return new ox(t, !0);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tS {
  constructor(e, n, r = 1e3, i = 1.5, s = 6e4) {
    (this.Ys = e),
      (this.timerId = n),
      (this.po = r),
      (this.Io = i),
      (this.To = s),
      (this.Eo = 0),
      (this.Ao = null),
      (this.Ro = Date.now()),
      this.reset();
  }
  reset() {
    this.Eo = 0;
  }
  bo() {
    this.Eo = this.To;
  }
  vo(e) {
    this.cancel();
    const n = Math.floor(this.Eo + this.Po()),
      r = Math.max(0, Date.now() - this.Ro),
      i = Math.max(0, n - r);
    i > 0 &&
      V(
        'ExponentialBackoff',
        `Backing off for ${i} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`
      ),
      (this.Ao = this.Ys.enqueueAfterDelay(this.timerId, i, () => ((this.Ro = Date.now()), e()))),
      (this.Eo *= this.Io),
      this.Eo < this.po && (this.Eo = this.po),
      this.Eo > this.To && (this.Eo = this.To);
  }
  Vo() {
    this.Ao !== null && (this.Ao.skipDelay(), (this.Ao = null));
  }
  cancel() {
    this.Ao !== null && (this.Ao.cancel(), (this.Ao = null));
  }
  Po() {
    return (Math.random() - 0.5) * this.Eo;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Gx {
  constructor(e, n, r, i, s, o, a, l) {
    (this.Ys = e),
      (this.So = r),
      (this.Do = i),
      (this.connection = s),
      (this.authCredentialsProvider = o),
      (this.appCheckCredentialsProvider = a),
      (this.listener = l),
      (this.state = 0),
      (this.Co = 0),
      (this.xo = null),
      (this.No = null),
      (this.stream = null),
      (this.ko = new tS(e, n));
  }
  Oo() {
    return this.state === 1 || this.state === 5 || this.Mo();
  }
  Mo() {
    return this.state === 2 || this.state === 3;
  }
  start() {
    this.state !== 4 ? this.auth() : this.Fo();
  }
  async stop() {
    this.Oo() && (await this.close(0));
  }
  $o() {
    (this.state = 0), this.ko.reset();
  }
  Bo() {
    this.Mo() &&
      this.xo === null &&
      (this.xo = this.Ys.enqueueAfterDelay(this.So, 6e4, () => this.Lo()));
  }
  qo(e) {
    this.Uo(), this.stream.send(e);
  }
  async Lo() {
    if (this.Mo()) return this.close(0);
  }
  Uo() {
    this.xo && (this.xo.cancel(), (this.xo = null));
  }
  Ko() {
    this.No && (this.No.cancel(), (this.No = null));
  }
  async close(e, n) {
    this.Uo(),
      this.Ko(),
      this.ko.cancel(),
      this.Co++,
      e !== 4
        ? this.ko.reset()
        : n && n.code === O.RESOURCE_EXHAUSTED
        ? (Pn(n.toString()),
          Pn('Using maximum backoff delay to prevent overloading the backend.'),
          this.ko.bo())
        : n &&
          n.code === O.UNAUTHENTICATED &&
          this.state !== 3 &&
          (this.authCredentialsProvider.invalidateToken(),
          this.appCheckCredentialsProvider.invalidateToken()),
      this.stream !== null && (this.Go(), this.stream.close(), (this.stream = null)),
      (this.state = e),
      await this.listener.no(n);
  }
  Go() {}
  auth() {
    this.state = 1;
    const e = this.Qo(this.Co),
      n = this.Co;
    Promise.all([
      this.authCredentialsProvider.getToken(),
      this.appCheckCredentialsProvider.getToken()
    ]).then(
      ([r, i]) => {
        this.Co === n && this.jo(r, i);
      },
      (r) => {
        e(() => {
          const i = new q(O.UNKNOWN, 'Fetching auth token failed: ' + r.message);
          return this.zo(i);
        });
      }
    );
  }
  jo(e, n) {
    const r = this.Qo(this.Co);
    (this.stream = this.Wo(e, n)),
      this.stream.Xr(() => {
        r(
          () => (
            (this.state = 2),
            (this.No = this.Ys.enqueueAfterDelay(
              this.Do,
              1e4,
              () => (this.Mo() && (this.state = 3), Promise.resolve())
            )),
            this.listener.Xr()
          )
        );
      }),
      this.stream.no((i) => {
        r(() => this.zo(i));
      }),
      this.stream.onMessage((i) => {
        r(() => this.onMessage(i));
      });
  }
  Fo() {
    (this.state = 5),
      this.ko.vo(async () => {
        (this.state = 0), this.start();
      });
  }
  zo(e) {
    return V('PersistentStream', `close with error: ${e}`), (this.stream = null), this.close(4, e);
  }
  Qo(e) {
    return (n) => {
      this.Ys.enqueueAndForget(() =>
        this.Co === e
          ? n()
          : (V('PersistentStream', 'stream callback skipped by getCloseGuardedDispatcher.'),
            Promise.resolve())
      );
    };
  }
}
class Qx extends Gx {
  constructor(e, n, r, i, s, o) {
    super(
      e,
      'listen_stream_connection_backoff',
      'listen_stream_idle',
      'health_check_timeout',
      n,
      r,
      i,
      o
    ),
      (this.Tt = s);
  }
  Wo(e, n) {
    return this.connection.yo('Listen', e, n);
  }
  onMessage(e) {
    this.ko.reset();
    const n = hx(this.Tt, e),
      r = (function (i) {
        if (!('targetChange' in i)) return Y.min();
        const s = i.targetChange;
        return s.targetIds && s.targetIds.length ? Y.min() : s.readTime ? bi(s.readTime) : Y.min();
      })(e);
    return this.listener.Ho(n, r);
  }
  Jo(e) {
    const n = {};
    (n.database = Vy(this.Tt)),
      (n.addTarget = (function (i, s) {
        let o;
        const a = s.target;
        return (
          (o = Yd(a) ? { documents: dx(i, a) } : { query: fx(i, a) }),
          (o.targetId = s.targetId),
          s.resumeToken.approximateByteSize() > 0
            ? (o.resumeToken = lx(i, s.resumeToken))
            : s.snapshotVersion.compareTo(Y.min()) > 0 &&
              (o.readTime = ax(i, s.snapshotVersion.toTimestamp())),
          o
        );
      })(this.Tt, e));
    const r = mx(this.Tt, e);
    r && (n.labels = r), this.qo(n);
  }
  Yo(e) {
    const n = {};
    (n.database = Vy(this.Tt)), (n.removeTarget = e), this.qo(n);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Xx extends class {} {
  constructor(e, n, r, i) {
    super(),
      (this.authCredentials = e),
      (this.appCheckCredentials = n),
      (this.connection = r),
      (this.Tt = i),
      (this.iu = !1);
  }
  ru() {
    if (this.iu) throw new q(O.FAILED_PRECONDITION, 'The client has already been terminated.');
  }
  lo(e, n, r) {
    return (
      this.ru(),
      Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()])
        .then(([i, s]) => this.connection.lo(e, n, r, i, s))
        .catch((i) => {
          throw i.name === 'FirebaseError'
            ? (i.code === O.UNAUTHENTICATED &&
                (this.authCredentials.invalidateToken(),
                this.appCheckCredentials.invalidateToken()),
              i)
            : new q(O.UNKNOWN, i.toString());
        })
    );
  }
  mo(e, n, r, i) {
    return (
      this.ru(),
      Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()])
        .then(([s, o]) => this.connection.mo(e, n, r, s, o, i))
        .catch((s) => {
          throw s.name === 'FirebaseError'
            ? (s.code === O.UNAUTHENTICATED &&
                (this.authCredentials.invalidateToken(),
                this.appCheckCredentials.invalidateToken()),
              s)
            : new q(O.UNKNOWN, s.toString());
        })
    );
  }
  terminate() {
    this.iu = !0;
  }
}
class Yx {
  constructor(e, n) {
    (this.asyncQueue = e),
      (this.onlineStateHandler = n),
      (this.state = 'Unknown'),
      (this.ou = 0),
      (this.uu = null),
      (this.cu = !0);
  }
  au() {
    this.ou === 0 &&
      (this.hu('Unknown'),
      (this.uu = this.asyncQueue.enqueueAfterDelay(
        'online_state_timeout',
        1e4,
        () => (
          (this.uu = null),
          this.lu("Backend didn't respond within 10 seconds."),
          this.hu('Offline'),
          Promise.resolve()
        )
      )));
  }
  fu(e) {
    this.state === 'Online'
      ? this.hu('Unknown')
      : (this.ou++,
        this.ou >= 1 &&
          (this.du(),
          this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),
          this.hu('Offline')));
  }
  set(e) {
    this.du(), (this.ou = 0), e === 'Online' && (this.cu = !1), this.hu(e);
  }
  hu(e) {
    e !== this.state && ((this.state = e), this.onlineStateHandler(e));
  }
  lu(e) {
    const n = `Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
    this.cu ? (Pn(n), (this.cu = !1)) : V('OnlineStateTracker', n);
  }
  du() {
    this.uu !== null && (this.uu.cancel(), (this.uu = null));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Jx {
  constructor(e, n, r, i, s) {
    (this.localStore = e),
      (this.datastore = n),
      (this.asyncQueue = r),
      (this.remoteSyncer = {}),
      (this._u = []),
      (this.wu = new Map()),
      (this.mu = new Set()),
      (this.gu = []),
      (this.yu = s),
      this.yu.Gr((o) => {
        r.enqueueAndForget(async () => {
          Yo(this) &&
            (V('RemoteStore', 'Restarting streams for network reachability change.'),
            await (async function (a) {
              const l = oe(a);
              l.mu.add(4), await Xo(l), l.pu.set('Unknown'), l.mu.delete(4), await ac(l);
            })(this));
        });
      }),
      (this.pu = new Yx(r, i));
  }
}
async function ac(t) {
  if (Yo(t)) for (const e of t.gu) await e(!0);
}
async function Xo(t) {
  for (const e of t.gu) await e(!1);
}
function nS(t, e) {
  const n = oe(t);
  n.wu.has(e.targetId) || (n.wu.set(e.targetId, e), sm(n) ? im(n) : ms(n).Mo() && rm(n, e));
}
function rS(t, e) {
  const n = oe(t),
    r = ms(n);
  n.wu.delete(e),
    r.Mo() && iS(n, e),
    n.wu.size === 0 && (r.Mo() ? r.Bo() : Yo(n) && n.pu.set('Unknown'));
}
function rm(t, e) {
  t.Iu.Ft(e.targetId), ms(t).Jo(e);
}
function iS(t, e) {
  t.Iu.Ft(e), ms(t).Yo(e);
}
function im(t) {
  (t.Iu = new nx({
    getRemoteKeysForTarget: (e) => t.remoteSyncer.getRemoteKeysForTarget(e),
    ie: (e) => t.wu.get(e) || null
  })),
    ms(t).start(),
    t.pu.au();
}
function sm(t) {
  return Yo(t) && !ms(t).Oo() && t.wu.size > 0;
}
function Yo(t) {
  return oe(t).mu.size === 0;
}
function sS(t) {
  t.Iu = void 0;
}
async function Zx(t) {
  t.wu.forEach((e, n) => {
    rm(t, e);
  });
}
async function eD(t, e) {
  sS(t), sm(t) ? (t.pu.fu(e), im(t)) : t.pu.set('Unknown');
}
async function tD(t, e, n) {
  if ((t.pu.set('Online'), e instanceof WE && e.state === 2 && e.cause))
    try {
      await (async function (r, i) {
        const s = i.cause;
        for (const o of i.targetIds)
          r.wu.has(o) &&
            (await r.remoteSyncer.rejectListen(o, s), r.wu.delete(o), r.Iu.removeTarget(o));
      })(t, e);
    } catch (r) {
      V('RemoteStore', 'Failed to remove targets %s: %s ', e.targetIds.join(','), r),
        await Hy(t, r);
    }
  else if (
    (e instanceof za ? t.Iu.Qt(e) : e instanceof KE ? t.Iu.Zt(e) : t.Iu.Wt(e), !n.isEqual(Y.min()))
  )
    try {
      const r = await ZE(t.localStore);
      n.compareTo(r) >= 0 &&
        (await (function (i, s) {
          const o = i.Iu.ee(s);
          return (
            o.targetChanges.forEach((a, l) => {
              if (a.resumeToken.approximateByteSize() > 0) {
                const u = i.wu.get(l);
                u && i.wu.set(l, u.withResumeToken(a.resumeToken, s));
              }
            }),
            o.targetMismatches.forEach((a) => {
              const l = i.wu.get(a);
              if (!l) return;
              i.wu.set(a, l.withResumeToken(ft.EMPTY_BYTE_STRING, l.snapshotVersion)), iS(i, a);
              const u = new Hr(l.target, a, 1, l.sequenceNumber);
              rm(i, u);
            }),
            i.remoteSyncer.applyRemoteEvent(o)
          );
        })(t, n));
    } catch (r) {
      V('RemoteStore', 'Failed to raise snapshot:', r), await Hy(t, r);
    }
}
async function Hy(t, e, n) {
  if (!Go(e)) throw e;
  t.mu.add(1),
    await Xo(t),
    t.pu.set('Offline'),
    n || (n = () => ZE(t.localStore)),
    t.asyncQueue.enqueueRetryable(async () => {
      V('RemoteStore', 'Retrying IndexedDB access'), await n(), t.mu.delete(1), await ac(t);
    });
}
async function Ky(t, e) {
  const n = oe(t);
  n.asyncQueue.verifyOperationInProgress(),
    V('RemoteStore', 'RemoteStore received new credentials');
  const r = Yo(n);
  n.mu.add(3),
    await Xo(n),
    r && n.pu.set('Unknown'),
    await n.remoteSyncer.handleCredentialChange(e),
    n.mu.delete(3),
    await ac(n);
}
async function nD(t, e) {
  const n = oe(t);
  e ? (n.mu.delete(2), await ac(n)) : e || (n.mu.add(2), await Xo(n), n.pu.set('Unknown'));
}
function ms(t) {
  return (
    t.Tu ||
      ((t.Tu = (function (e, n, r) {
        const i = oe(e);
        return i.ru(), new Qx(n, i.connection, i.authCredentials, i.appCheckCredentials, i.Tt, r);
      })(t.datastore, t.asyncQueue, {
        Xr: Zx.bind(null, t),
        no: eD.bind(null, t),
        Ho: tD.bind(null, t)
      })),
      t.gu.push(async (e) => {
        e ? (t.Tu.$o(), sm(t) ? im(t) : t.pu.set('Unknown')) : (await t.Tu.stop(), sS(t));
      })),
    t.Tu
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class om {
  constructor(e, n, r, i, s) {
    (this.asyncQueue = e),
      (this.timerId = n),
      (this.targetTimeMs = r),
      (this.op = i),
      (this.removalCallback = s),
      (this.deferred = new zr()),
      (this.then = this.deferred.promise.then.bind(this.deferred.promise)),
      this.deferred.promise.catch((o) => {});
  }
  static createAndSchedule(e, n, r, i, s) {
    const o = Date.now() + r,
      a = new om(e, n, o, i, s);
    return a.start(r), a;
  }
  start(e) {
    this.timerHandle = setTimeout(() => this.handleDelayElapsed(), e);
  }
  skipDelay() {
    return this.handleDelayElapsed();
  }
  cancel(e) {
    this.timerHandle !== null &&
      (this.clearTimeout(),
      this.deferred.reject(new q(O.CANCELLED, 'Operation cancelled' + (e ? ': ' + e : ''))));
  }
  handleDelayElapsed() {
    this.asyncQueue.enqueueAndForget(() =>
      this.timerHandle !== null
        ? (this.clearTimeout(), this.op().then((e) => this.deferred.resolve(e)))
        : Promise.resolve()
    );
  }
  clearTimeout() {
    this.timerHandle !== null &&
      (this.removalCallback(this), clearTimeout(this.timerHandle), (this.timerHandle = null));
  }
}
function oS(t, e) {
  if ((Pn('AsyncQueue', `${e}: ${t}`), Go(t))) return new q(O.UNAVAILABLE, `${e}: ${t}`);
  throw t;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Mi {
  constructor(e) {
    (this.comparator = e
      ? (n, r) => e(n, r) || K.comparator(n.key, r.key)
      : (n, r) => K.comparator(n.key, r.key)),
      (this.keyedMap = $s()),
      (this.sortedSet = new tt(this.comparator));
  }
  static emptySet(e) {
    return new Mi(e.comparator);
  }
  has(e) {
    return this.keyedMap.get(e) != null;
  }
  get(e) {
    return this.keyedMap.get(e);
  }
  first() {
    return this.sortedSet.minKey();
  }
  last() {
    return this.sortedSet.maxKey();
  }
  isEmpty() {
    return this.sortedSet.isEmpty();
  }
  indexOf(e) {
    const n = this.keyedMap.get(e);
    return n ? this.sortedSet.indexOf(n) : -1;
  }
  get size() {
    return this.sortedSet.size;
  }
  forEach(e) {
    this.sortedSet.inorderTraversal((n, r) => (e(n), !1));
  }
  add(e) {
    const n = this.delete(e.key);
    return n.copy(n.keyedMap.insert(e.key, e), n.sortedSet.insert(e, null));
  }
  delete(e) {
    const n = this.get(e);
    return n ? this.copy(this.keyedMap.remove(e), this.sortedSet.remove(n)) : this;
  }
  isEqual(e) {
    if (!(e instanceof Mi) || this.size !== e.size) return !1;
    const n = this.sortedSet.getIterator(),
      r = e.sortedSet.getIterator();
    for (; n.hasNext(); ) {
      const i = n.getNext().key,
        s = r.getNext().key;
      if (!i.isEqual(s)) return !1;
    }
    return !0;
  }
  toString() {
    const e = [];
    return (
      this.forEach((n) => {
        e.push(n.toString());
      }),
      e.length === 0
        ? 'DocumentSet ()'
        : `DocumentSet (
  ` +
          e.join(`  
`) +
          `
)`
    );
  }
  copy(e, n) {
    const r = new Mi();
    return (r.comparator = this.comparator), (r.keyedMap = e), (r.sortedSet = n), r;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Wy {
  constructor() {
    this.Au = new tt(K.comparator);
  }
  track(e) {
    const n = e.doc.key,
      r = this.Au.get(n);
    r
      ? e.type !== 0 && r.type === 3
        ? (this.Au = this.Au.insert(n, e))
        : e.type === 3 && r.type !== 1
        ? (this.Au = this.Au.insert(n, { type: r.type, doc: e.doc }))
        : e.type === 2 && r.type === 2
        ? (this.Au = this.Au.insert(n, { type: 2, doc: e.doc }))
        : e.type === 2 && r.type === 0
        ? (this.Au = this.Au.insert(n, { type: 0, doc: e.doc }))
        : e.type === 1 && r.type === 0
        ? (this.Au = this.Au.remove(n))
        : e.type === 1 && r.type === 2
        ? (this.Au = this.Au.insert(n, { type: 1, doc: r.doc }))
        : e.type === 0 && r.type === 1
        ? (this.Au = this.Au.insert(n, { type: 2, doc: e.doc }))
        : J()
      : (this.Au = this.Au.insert(n, e));
  }
  Ru() {
    const e = [];
    return (
      this.Au.inorderTraversal((n, r) => {
        e.push(r);
      }),
      e
    );
  }
}
class os {
  constructor(e, n, r, i, s, o, a, l, u) {
    (this.query = e),
      (this.docs = n),
      (this.oldDocs = r),
      (this.docChanges = i),
      (this.mutatedKeys = s),
      (this.fromCache = o),
      (this.syncStateChanged = a),
      (this.excludesMetadataChanges = l),
      (this.hasCachedResults = u);
  }
  static fromInitialDocuments(e, n, r, i, s) {
    const o = [];
    return (
      n.forEach((a) => {
        o.push({ type: 0, doc: a });
      }),
      new os(e, n, Mi.emptySet(n), o, r, i, !0, !1, s)
    );
  }
  get hasPendingWrites() {
    return !this.mutatedKeys.isEmpty();
  }
  isEqual(e) {
    if (
      !(
        this.fromCache === e.fromCache &&
        this.hasCachedResults === e.hasCachedResults &&
        this.syncStateChanged === e.syncStateChanged &&
        this.mutatedKeys.isEqual(e.mutatedKeys) &&
        nc(this.query, e.query) &&
        this.docs.isEqual(e.docs) &&
        this.oldDocs.isEqual(e.oldDocs)
      )
    )
      return !1;
    const n = this.docChanges,
      r = e.docChanges;
    if (n.length !== r.length) return !1;
    for (let i = 0; i < n.length; i++)
      if (n[i].type !== r[i].type || !n[i].doc.isEqual(r[i].doc)) return !1;
    return !0;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rD {
  constructor() {
    (this.bu = void 0), (this.listeners = []);
  }
}
class iD {
  constructor() {
    (this.queries = new ps((e) => LE(e), nc)),
      (this.onlineState = 'Unknown'),
      (this.vu = new Set());
  }
}
async function sD(t, e) {
  const n = oe(t),
    r = e.query;
  let i = !1,
    s = n.queries.get(r);
  if ((s || ((i = !0), (s = new rD())), i))
    try {
      s.bu = await n.onListen(r);
    } catch (o) {
      const a = oS(o, `Initialization of query '${Zd(e.query)}' failed`);
      return void e.onError(a);
    }
  n.queries.set(r, s), s.listeners.push(e), e.Pu(n.onlineState), s.bu && e.Vu(s.bu) && am(n);
}
async function oD(t, e) {
  const n = oe(t),
    r = e.query;
  let i = !1;
  const s = n.queries.get(r);
  if (s) {
    const o = s.listeners.indexOf(e);
    o >= 0 && (s.listeners.splice(o, 1), (i = s.listeners.length === 0));
  }
  if (i) return n.queries.delete(r), n.onUnlisten(r);
}
function aD(t, e) {
  const n = oe(t);
  let r = !1;
  for (const i of e) {
    const s = i.query,
      o = n.queries.get(s);
    if (o) {
      for (const a of o.listeners) a.Vu(i) && (r = !0);
      o.bu = i;
    }
  }
  r && am(n);
}
function lD(t, e, n) {
  const r = oe(t),
    i = r.queries.get(e);
  if (i) for (const s of i.listeners) s.onError(n);
  r.queries.delete(e);
}
function am(t) {
  t.vu.forEach((e) => {
    e.next();
  });
}
class uD {
  constructor(e, n, r) {
    (this.query = e),
      (this.Su = n),
      (this.Du = !1),
      (this.Cu = null),
      (this.onlineState = 'Unknown'),
      (this.options = r || {});
  }
  Vu(e) {
    if (!this.options.includeMetadataChanges) {
      const r = [];
      for (const i of e.docChanges) i.type !== 3 && r.push(i);
      e = new os(
        e.query,
        e.docs,
        e.oldDocs,
        r,
        e.mutatedKeys,
        e.fromCache,
        e.syncStateChanged,
        !0,
        e.hasCachedResults
      );
    }
    let n = !1;
    return (
      this.Du
        ? this.xu(e) && (this.Su.next(e), (n = !0))
        : this.Nu(e, this.onlineState) && (this.ku(e), (n = !0)),
      (this.Cu = e),
      n
    );
  }
  onError(e) {
    this.Su.error(e);
  }
  Pu(e) {
    this.onlineState = e;
    let n = !1;
    return this.Cu && !this.Du && this.Nu(this.Cu, e) && (this.ku(this.Cu), (n = !0)), n;
  }
  Nu(e, n) {
    if (!e.fromCache) return !0;
    const r = n !== 'Offline';
    return (!this.options.Ou || !r) && (!e.docs.isEmpty() || e.hasCachedResults || n === 'Offline');
  }
  xu(e) {
    if (e.docChanges.length > 0) return !0;
    const n = this.Cu && this.Cu.hasPendingWrites !== e.hasPendingWrites;
    return !(!e.syncStateChanged && !n) && this.options.includeMetadataChanges === !0;
  }
  ku(e) {
    (e = os.fromInitialDocuments(e.query, e.docs, e.mutatedKeys, e.fromCache, e.hasCachedResults)),
      (this.Du = !0),
      this.Su.next(e);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aS {
  constructor(e) {
    this.key = e;
  }
}
class lS {
  constructor(e) {
    this.key = e;
  }
}
class cD {
  constructor(e, n) {
    (this.query = e),
      (this.Ku = n),
      (this.Gu = null),
      (this.hasCachedResults = !1),
      (this.current = !1),
      (this.Qu = ie()),
      (this.mutatedKeys = ie()),
      (this.ju = $E(e)),
      (this.zu = new Mi(this.ju));
  }
  get Wu() {
    return this.Ku;
  }
  Hu(e, n) {
    const r = n ? n.Ju : new Wy(),
      i = n ? n.zu : this.zu;
    let s = n ? n.mutatedKeys : this.mutatedKeys,
      o = i,
      a = !1;
    const l = this.query.limitType === 'F' && i.size === this.query.limit ? i.last() : null,
      u = this.query.limitType === 'L' && i.size === this.query.limit ? i.first() : null;
    if (
      (e.inorderTraversal((c, h) => {
        const d = i.get(c),
          m = rc(this.query, h) ? h : null,
          y = !!d && this.mutatedKeys.has(d.key),
          v =
            !!m &&
            (m.hasLocalMutations || (this.mutatedKeys.has(m.key) && m.hasCommittedMutations));
        let S = !1;
        d && m
          ? d.data.isEqual(m.data)
            ? y !== v && (r.track({ type: 3, doc: m }), (S = !0))
            : this.Yu(d, m) ||
              (r.track({ type: 2, doc: m }),
              (S = !0),
              ((l && this.ju(m, l) > 0) || (u && this.ju(m, u) < 0)) && (a = !0))
          : !d && m
          ? (r.track({ type: 0, doc: m }), (S = !0))
          : d && !m && (r.track({ type: 1, doc: d }), (S = !0), (l || u) && (a = !0)),
          S &&
            (m
              ? ((o = o.add(m)), (s = v ? s.add(c) : s.delete(c)))
              : ((o = o.delete(c)), (s = s.delete(c))));
      }),
      this.query.limit !== null)
    )
      for (; o.size > this.query.limit; ) {
        const c = this.query.limitType === 'F' ? o.last() : o.first();
        (o = o.delete(c.key)), (s = s.delete(c.key)), r.track({ type: 1, doc: c });
      }
    return { zu: o, Ju: r, Li: a, mutatedKeys: s };
  }
  Yu(e, n) {
    return e.hasLocalMutations && n.hasCommittedMutations && !n.hasLocalMutations;
  }
  applyChanges(e, n, r) {
    const i = this.zu;
    (this.zu = e.zu), (this.mutatedKeys = e.mutatedKeys);
    const s = e.Ju.Ru();
    s.sort(
      (u, c) =>
        (function (h, d) {
          const m = (y) => {
            switch (y) {
              case 0:
                return 1;
              case 2:
              case 3:
                return 2;
              case 1:
                return 0;
              default:
                return J();
            }
          };
          return m(h) - m(d);
        })(u.type, c.type) || this.ju(u.doc, c.doc)
    ),
      this.Zu(r);
    const o = n ? this.Xu() : [],
      a = this.Qu.size === 0 && this.current ? 1 : 0,
      l = a !== this.Gu;
    return (
      (this.Gu = a),
      s.length !== 0 || l
        ? {
            snapshot: new os(
              this.query,
              e.zu,
              i,
              s,
              e.mutatedKeys,
              a === 0,
              l,
              !1,
              !!r && r.resumeToken.approximateByteSize() > 0
            ),
            tc: o
          }
        : { tc: o }
    );
  }
  Pu(e) {
    return this.current && e === 'Offline'
      ? ((this.current = !1),
        this.applyChanges({ zu: this.zu, Ju: new Wy(), mutatedKeys: this.mutatedKeys, Li: !1 }, !1))
      : { tc: [] };
  }
  ec(e) {
    return !this.Ku.has(e) && !!this.zu.has(e) && !this.zu.get(e).hasLocalMutations;
  }
  Zu(e) {
    e &&
      (e.addedDocuments.forEach((n) => (this.Ku = this.Ku.add(n))),
      e.modifiedDocuments.forEach((n) => {}),
      e.removedDocuments.forEach((n) => (this.Ku = this.Ku.delete(n))),
      (this.current = e.current));
  }
  Xu() {
    if (!this.current) return [];
    const e = this.Qu;
    (this.Qu = ie()),
      this.zu.forEach((r) => {
        this.ec(r.key) && (this.Qu = this.Qu.add(r.key));
      });
    const n = [];
    return (
      e.forEach((r) => {
        this.Qu.has(r) || n.push(new lS(r));
      }),
      this.Qu.forEach((r) => {
        e.has(r) || n.push(new aS(r));
      }),
      n
    );
  }
  nc(e) {
    (this.Ku = e.Yi), (this.Qu = ie());
    const n = this.Hu(e.documents);
    return this.applyChanges(n, !0);
  }
  sc() {
    return os.fromInitialDocuments(
      this.query,
      this.zu,
      this.mutatedKeys,
      this.Gu === 0,
      this.hasCachedResults
    );
  }
}
class hD {
  constructor(e, n, r) {
    (this.query = e), (this.targetId = n), (this.view = r);
  }
}
class dD {
  constructor(e) {
    (this.key = e), (this.ic = !1);
  }
}
class fD {
  constructor(e, n, r, i, s, o) {
    (this.localStore = e),
      (this.remoteStore = n),
      (this.eventManager = r),
      (this.sharedClientState = i),
      (this.currentUser = s),
      (this.maxConcurrentLimboResolutions = o),
      (this.rc = {}),
      (this.oc = new ps((a) => LE(a), nc)),
      (this.uc = new Map()),
      (this.cc = new Set()),
      (this.ac = new tt(K.comparator)),
      (this.hc = new Map()),
      (this.lc = new em()),
      (this.fc = {}),
      (this.dc = new Map()),
      (this._c = ss.Sn()),
      (this.onlineState = 'Unknown'),
      (this.wc = void 0);
  }
  get isPrimaryClient() {
    return this.wc === !0;
  }
}
async function pD(t, e) {
  const n = SD(t);
  let r, i;
  const s = n.oc.get(e);
  if (s) (r = s.targetId), n.sharedClientState.addLocalQueryTarget(r), (i = s.view.sc());
  else {
    const o = await jx(n.localStore, On(e));
    n.isPrimaryClient && nS(n.remoteStore, o);
    const a = n.sharedClientState.addLocalQueryTarget(o.targetId);
    (r = o.targetId), (i = await mD(n, e, r, a === 'current', o.resumeToken));
  }
  return i;
}
async function mD(t, e, n, r, i) {
  t.mc = (h, d, m) =>
    (async function (y, v, S, p) {
      let f = v.view.Hu(S);
      f.Li && (f = await jy(y.localStore, v.query, !1).then(({ documents: _ }) => v.view.Hu(_, f)));
      const g = p && p.targetChanges.get(v.targetId),
        E = v.view.applyChanges(f, y.isPrimaryClient, g);
      return Gy(y, v.targetId, E.tc), E.snapshot;
    })(t, h, d, m);
  const s = await jy(t.localStore, e, !0),
    o = new cD(e, s.Yi),
    a = o.Hu(s.documents),
    l = Qo.createSynthesizedTargetChangeForCurrentChange(n, r && t.onlineState !== 'Offline', i),
    u = o.applyChanges(a, t.isPrimaryClient, l);
  Gy(t, n, u.tc);
  const c = new hD(e, n, o);
  return t.oc.set(e, c), t.uc.has(n) ? t.uc.get(n).push(e) : t.uc.set(n, [e]), u.snapshot;
}
async function gD(t, e) {
  const n = oe(t),
    r = n.oc.get(e),
    i = n.uc.get(r.targetId);
  if (i.length > 1)
    return (
      n.uc.set(
        r.targetId,
        i.filter((s) => !nc(s, e))
      ),
      void n.oc.delete(e)
    );
  n.isPrimaryClient
    ? (n.sharedClientState.removeLocalQueryTarget(r.targetId),
      n.sharedClientState.isActiveQueryTarget(r.targetId) ||
        (await rf(n.localStore, r.targetId, !1)
          .then(() => {
            n.sharedClientState.clearQueryState(r.targetId),
              rS(n.remoteStore, r.targetId),
              sf(n, r.targetId);
          })
          .catch(qp)))
    : (sf(n, r.targetId), await rf(n.localStore, r.targetId, !0));
}
async function uS(t, e) {
  const n = oe(t);
  try {
    const r = await Ux(n.localStore, e);
    e.targetChanges.forEach((i, s) => {
      const o = n.hc.get(s);
      o &&
        (Fe(i.addedDocuments.size + i.modifiedDocuments.size + i.removedDocuments.size <= 1),
        i.addedDocuments.size > 0
          ? (o.ic = !0)
          : i.modifiedDocuments.size > 0
          ? Fe(o.ic)
          : i.removedDocuments.size > 0 && (Fe(o.ic), (o.ic = !1)));
    }),
      await hS(n, r, e);
  } catch (r) {
    await qp(r);
  }
}
function qy(t, e, n) {
  const r = oe(t);
  if ((r.isPrimaryClient && n === 0) || (!r.isPrimaryClient && n === 1)) {
    const i = [];
    r.oc.forEach((s, o) => {
      const a = o.view.Pu(e);
      a.snapshot && i.push(a.snapshot);
    }),
      (function (s, o) {
        const a = oe(s);
        a.onlineState = o;
        let l = !1;
        a.queries.forEach((u, c) => {
          for (const h of c.listeners) h.Pu(o) && (l = !0);
        }),
          l && am(a);
      })(r.eventManager, e),
      i.length && r.rc.Ho(i),
      (r.onlineState = e),
      r.isPrimaryClient && r.sharedClientState.setOnlineState(e);
  }
}
async function yD(t, e, n) {
  const r = oe(t);
  r.sharedClientState.updateQueryState(e, 'rejected', n);
  const i = r.hc.get(e),
    s = i && i.key;
  if (s) {
    let o = new tt(K.comparator);
    o = o.insert(s, lt.newNoDocument(s, Y.min()));
    const a = ie().add(s),
      l = new oc(Y.min(), new Map(), new ze(ue), o, a);
    await uS(r, l), (r.ac = r.ac.remove(s)), r.hc.delete(e), lm(r);
  } else
    await rf(r.localStore, e, !1)
      .then(() => sf(r, e, n))
      .catch(qp);
}
function sf(t, e, n = null) {
  t.sharedClientState.removeLocalQueryTarget(e);
  for (const r of t.uc.get(e)) t.oc.delete(r), n && t.rc.gc(r, n);
  t.uc.delete(e),
    t.isPrimaryClient &&
      t.lc.ds(e).forEach((r) => {
        t.lc.containsKey(r) || cS(t, r);
      });
}
function cS(t, e) {
  t.cc.delete(e.path.canonicalString());
  const n = t.ac.get(e);
  n !== null && (rS(t.remoteStore, n), (t.ac = t.ac.remove(e)), t.hc.delete(n), lm(t));
}
function Gy(t, e, n) {
  for (const r of n)
    r instanceof aS
      ? (t.lc.addReference(r.key, e), vD(t, r))
      : r instanceof lS
      ? (V('SyncEngine', 'Document no longer in limbo: ' + r.key),
        t.lc.removeReference(r.key, e),
        t.lc.containsKey(r.key) || cS(t, r.key))
      : J();
}
function vD(t, e) {
  const n = e.key,
    r = n.path.canonicalString();
  t.ac.get(n) ||
    t.cc.has(r) ||
    (V('SyncEngine', 'New document in limbo: ' + n), t.cc.add(r), lm(t));
}
function lm(t) {
  for (; t.cc.size > 0 && t.ac.size < t.maxConcurrentLimboResolutions; ) {
    const e = t.cc.values().next().value;
    t.cc.delete(e);
    const n = new K(Ne.fromString(e)),
      r = t._c.next();
    t.hc.set(r, new dD(n)),
      (t.ac = t.ac.insert(n, r)),
      nS(t.remoteStore, new Hr(On(OE(n.path)), r, 2, Gp.at));
  }
}
async function hS(t, e, n) {
  const r = oe(t),
    i = [],
    s = [],
    o = [];
  r.oc.isEmpty() ||
    (r.oc.forEach((a, l) => {
      o.push(
        r.mc(l, e, n).then((u) => {
          if (
            ((u || n) &&
              r.isPrimaryClient &&
              r.sharedClientState.updateQueryState(
                l.targetId,
                u != null && u.fromCache ? 'not-current' : 'current'
              ),
            u)
          ) {
            i.push(u);
            const c = nm.Ni(l.targetId, u);
            s.push(c);
          }
        })
      );
    }),
    await Promise.all(o),
    r.rc.Ho(i),
    await (async function (a, l) {
      const u = oe(a);
      try {
        await u.persistence.runTransaction('notifyLocalViewChanges', 'readwrite', (c) =>
          C.forEach(l, (h) =>
            C.forEach(h.Ci, (d) =>
              u.persistence.referenceDelegate.addReference(c, h.targetId, d)
            ).next(() =>
              C.forEach(h.xi, (d) =>
                u.persistence.referenceDelegate.removeReference(c, h.targetId, d)
              )
            )
          )
        );
      } catch (c) {
        if (!Go(c)) throw c;
        V('LocalStore', 'Failed to update sequence numbers: ' + c);
      }
      for (const c of l) {
        const h = c.targetId;
        if (!c.fromCache) {
          const d = u.Ki.get(h),
            m = d.snapshotVersion,
            y = d.withLastLimboFreeSnapshotVersion(m);
          u.Ki = u.Ki.insert(h, y);
        }
      }
    })(r.localStore, s));
}
async function wD(t, e) {
  const n = oe(t);
  if (!n.currentUser.isEqual(e)) {
    V('SyncEngine', 'User change. New user:', e.toKey());
    const r = await JE(n.localStore, e);
    (n.currentUser = e),
      (function (i, s) {
        i.dc.forEach((o) => {
          o.forEach((a) => {
            a.reject(new q(O.CANCELLED, s));
          });
        }),
          i.dc.clear();
      })(n, "'waitForPendingWrites' promise is rejected due to a user change."),
      n.sharedClientState.handleUserChange(e, r.removedBatchIds, r.addedBatchIds),
      await hS(n, r.Wi);
  }
}
function ED(t, e) {
  const n = oe(t),
    r = n.hc.get(e);
  if (r && r.ic) return ie().add(r.key);
  {
    let i = ie();
    const s = n.uc.get(e);
    if (!s) return i;
    for (const o of s) {
      const a = n.oc.get(o);
      i = i.unionWith(a.view.Wu);
    }
    return i;
  }
}
function SD(t) {
  const e = oe(t);
  return (
    (e.remoteStore.remoteSyncer.applyRemoteEvent = uS.bind(null, e)),
    (e.remoteStore.remoteSyncer.getRemoteKeysForTarget = ED.bind(null, e)),
    (e.remoteStore.remoteSyncer.rejectListen = yD.bind(null, e)),
    (e.rc.Ho = aD.bind(null, e.eventManager)),
    (e.rc.gc = lD.bind(null, e.eventManager)),
    e
  );
}
class _D {
  constructor() {
    this.synchronizeTabs = !1;
  }
  async initialize(e) {
    (this.Tt = eS(e.databaseInfo.databaseId)),
      (this.sharedClientState = this.Ic(e)),
      (this.persistence = this.Tc(e)),
      await this.persistence.start(),
      (this.localStore = this.Ec(e)),
      (this.gcScheduler = this.Ac(e, this.localStore)),
      (this.indexBackfillerScheduler = this.Rc(e, this.localStore));
  }
  Ac(e, n) {
    return null;
  }
  Rc(e, n) {
    return null;
  }
  Ec(e) {
    return Fx(this.persistence, new bx(), e.initialUser, this.Tt);
  }
  Tc(e) {
    return new Lx(tm.qs, this.Tt);
  }
  Ic(e) {
    return new Bx();
  }
  async terminate() {
    this.gcScheduler && this.gcScheduler.stop(),
      await this.sharedClientState.shutdown(),
      await this.persistence.shutdown();
  }
}
class TD {
  async initialize(e, n) {
    this.localStore ||
      ((this.localStore = e.localStore),
      (this.sharedClientState = e.sharedClientState),
      (this.datastore = this.createDatastore(n)),
      (this.remoteStore = this.createRemoteStore(n)),
      (this.eventManager = this.createEventManager(n)),
      (this.syncEngine = this.createSyncEngine(n, !e.synchronizeTabs)),
      (this.sharedClientState.onlineStateHandler = (r) => qy(this.syncEngine, r, 1)),
      (this.remoteStore.remoteSyncer.handleCredentialChange = wD.bind(null, this.syncEngine)),
      await nD(this.remoteStore, this.syncEngine.isPrimaryClient));
  }
  createEventManager(e) {
    return new iD();
  }
  createDatastore(e) {
    const n = eS(e.databaseInfo.databaseId),
      r = ((i = e.databaseInfo), new qx(i));
    var i;
    return (function (s, o, a, l) {
      return new Xx(s, o, a, l);
    })(e.authCredentials, e.appCheckCredentials, r, n);
  }
  createRemoteStore(e) {
    return (
      (n = this.localStore),
      (r = this.datastore),
      (i = e.asyncQueue),
      (s = (a) => qy(this.syncEngine, a, 0)),
      (o = By.C() ? new By() : new Hx()),
      new Jx(n, r, i, s, o)
    );
    var n, r, i, s, o;
  }
  createSyncEngine(e, n) {
    return (function (r, i, s, o, a, l, u) {
      const c = new fD(r, i, s, o, a, l);
      return u && (c.wc = !0), c;
    })(
      this.localStore,
      this.remoteStore,
      this.eventManager,
      this.sharedClientState,
      e.initialUser,
      e.maxConcurrentLimboResolutions,
      n
    );
  }
  terminate() {
    return (async function (e) {
      const n = oe(e);
      V('RemoteStore', 'RemoteStore shutting down.'),
        n.mu.add(5),
        await Xo(n),
        n.yu.shutdown(),
        n.pu.set('Unknown');
    })(this.remoteStore);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ID {
  constructor(e) {
    (this.observer = e), (this.muted = !1);
  }
  next(e) {
    this.observer.next && this.vc(this.observer.next, e);
  }
  error(e) {
    this.observer.error
      ? this.vc(this.observer.error, e)
      : Pn('Uncaught Error in snapshot listener:', e.toString());
  }
  Pc() {
    this.muted = !0;
  }
  vc(e, n) {
    this.muted ||
      setTimeout(() => {
        this.muted || e(n);
      }, 0);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class kD {
  constructor(e, n, r, i) {
    (this.authCredentials = e),
      (this.appCheckCredentials = n),
      (this.asyncQueue = r),
      (this.databaseInfo = i),
      (this.user = ot.UNAUTHENTICATED),
      (this.clientId = mR.R()),
      (this.authCredentialListener = () => Promise.resolve()),
      (this.appCheckCredentialListener = () => Promise.resolve()),
      this.authCredentials.start(r, async (s) => {
        V('FirestoreClient', 'Received user=', s.uid),
          await this.authCredentialListener(s),
          (this.user = s);
      }),
      this.appCheckCredentials.start(
        r,
        (s) => (
          V('FirestoreClient', 'Received new app check token=', s),
          this.appCheckCredentialListener(s, this.user)
        )
      );
  }
  async getConfiguration() {
    return {
      asyncQueue: this.asyncQueue,
      databaseInfo: this.databaseInfo,
      clientId: this.clientId,
      authCredentials: this.authCredentials,
      appCheckCredentials: this.appCheckCredentials,
      initialUser: this.user,
      maxConcurrentLimboResolutions: 100
    };
  }
  setCredentialChangeListener(e) {
    this.authCredentialListener = e;
  }
  setAppCheckTokenChangeListener(e) {
    this.appCheckCredentialListener = e;
  }
  verifyNotTerminated() {
    if (this.asyncQueue.isShuttingDown)
      throw new q(O.FAILED_PRECONDITION, 'The client has already been terminated.');
  }
  terminate() {
    this.asyncQueue.enterRestrictedMode();
    const e = new zr();
    return (
      this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
        try {
          this.onlineComponents && (await this.onlineComponents.terminate()),
            this.offlineComponents && (await this.offlineComponents.terminate()),
            this.authCredentials.shutdown(),
            this.appCheckCredentials.shutdown(),
            e.resolve();
        } catch (n) {
          const r = oS(n, 'Failed to shutdown persistence');
          e.reject(r);
        }
      }),
      e.promise
    );
  }
}
async function CD(t, e) {
  t.asyncQueue.verifyOperationInProgress(),
    V('FirestoreClient', 'Initializing OfflineComponentProvider');
  const n = await t.getConfiguration();
  await e.initialize(n);
  let r = n.initialUser;
  t.setCredentialChangeListener(async (i) => {
    r.isEqual(i) || (await JE(e.localStore, i), (r = i));
  }),
    e.persistence.setDatabaseDeletedListener(() => t.terminate()),
    (t.offlineComponents = e);
}
async function AD(t, e) {
  t.asyncQueue.verifyOperationInProgress();
  const n = await ND(t);
  V('FirestoreClient', 'Initializing OnlineComponentProvider');
  const r = await t.getConfiguration();
  await e.initialize(n, r),
    t.setCredentialChangeListener((i) => Ky(e.remoteStore, i)),
    t.setAppCheckTokenChangeListener((i, s) => Ky(e.remoteStore, s)),
    (t.onlineComponents = e);
}
async function ND(t) {
  return (
    t.offlineComponents ||
      (V('FirestoreClient', 'Using default OfflineComponentProvider'), await CD(t, new _D())),
    t.offlineComponents
  );
}
async function RD(t) {
  return (
    t.onlineComponents ||
      (V('FirestoreClient', 'Using default OnlineComponentProvider'), await AD(t, new TD())),
    t.onlineComponents
  );
}
async function xD(t) {
  const e = await RD(t),
    n = e.eventManager;
  return (
    (n.onListen = pD.bind(null, e.syncEngine)), (n.onUnlisten = gD.bind(null, e.syncEngine)), n
  );
}
function DD(t, e, n = {}) {
  const r = new zr();
  return (
    t.asyncQueue.enqueueAndForget(async () =>
      (function (i, s, o, a, l) {
        const u = new ID({
            next: (h) => {
              s.enqueueAndForget(() => oD(i, c)),
                h.fromCache && a.source === 'server'
                  ? l.reject(
                      new q(
                        O.UNAVAILABLE,
                        'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)'
                      )
                    )
                  : l.resolve(h);
            },
            error: (h) => l.reject(h)
          }),
          c = new uD(o, u, { includeMetadataChanges: !0, Ou: !0 });
        return sD(i, c);
      })(await xD(t), t.asyncQueue, e, n, r)
    ),
    r.promise
  );
}
const Qy = new Map();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function PD(t, e, n) {
  if (!n) throw new q(O.INVALID_ARGUMENT, `Function ${t}() cannot be called with an empty ${e}.`);
}
function OD(t, e, n, r) {
  if (e === !0 && r === !0)
    throw new q(O.INVALID_ARGUMENT, `${t} and ${n} cannot be used together.`);
}
function Xy(t) {
  if (K.isDocumentKey(t))
    throw new q(
      O.INVALID_ARGUMENT,
      `Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`
    );
}
function LD(t) {
  if (t === void 0) return 'undefined';
  if (t === null) return 'null';
  if (typeof t == 'string')
    return t.length > 20 && (t = `${t.substring(0, 20)}...`), JSON.stringify(t);
  if (typeof t == 'number' || typeof t == 'boolean') return '' + t;
  if (typeof t == 'object') {
    if (t instanceof Array) return 'an array';
    {
      const e = (function (n) {
        return n.constructor ? n.constructor.name : null;
      })(t);
      return e ? `a custom ${e} object` : 'an object';
    }
  }
  return typeof t == 'function' ? 'a function' : J();
}
function of(t, e) {
  if (('_delegate' in t && (t = t._delegate), !(t instanceof e))) {
    if (e.name === t.constructor.name)
      throw new q(
        O.INVALID_ARGUMENT,
        'Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?'
      );
    {
      const n = LD(t);
      throw new q(O.INVALID_ARGUMENT, `Expected type '${e.name}', but it was: ${n}`);
    }
  }
  return t;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Yy {
  constructor(e) {
    var n;
    if (e.host === void 0) {
      if (e.ssl !== void 0)
        throw new q(O.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
      (this.host = 'firestore.googleapis.com'), (this.ssl = !0);
    } else (this.host = e.host), (this.ssl = (n = e.ssl) === null || n === void 0 || n);
    if (
      ((this.credentials = e.credentials),
      (this.ignoreUndefinedProperties = !!e.ignoreUndefinedProperties),
      e.cacheSizeBytes === void 0)
    )
      this.cacheSizeBytes = 41943040;
    else {
      if (e.cacheSizeBytes !== -1 && e.cacheSizeBytes < 1048576)
        throw new q(O.INVALID_ARGUMENT, 'cacheSizeBytes must be at least 1048576');
      this.cacheSizeBytes = e.cacheSizeBytes;
    }
    (this.experimentalForceLongPolling = !!e.experimentalForceLongPolling),
      (this.experimentalAutoDetectLongPolling = !!e.experimentalAutoDetectLongPolling),
      (this.useFetchStreams = !!e.useFetchStreams),
      OD(
        'experimentalForceLongPolling',
        e.experimentalForceLongPolling,
        'experimentalAutoDetectLongPolling',
        e.experimentalAutoDetectLongPolling
      );
  }
  isEqual(e) {
    return (
      this.host === e.host &&
      this.ssl === e.ssl &&
      this.credentials === e.credentials &&
      this.cacheSizeBytes === e.cacheSizeBytes &&
      this.experimentalForceLongPolling === e.experimentalForceLongPolling &&
      this.experimentalAutoDetectLongPolling === e.experimentalAutoDetectLongPolling &&
      this.ignoreUndefinedProperties === e.ignoreUndefinedProperties &&
      this.useFetchStreams === e.useFetchStreams
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class um {
  constructor(e, n, r, i) {
    (this._authCredentials = e),
      (this._appCheckCredentials = n),
      (this._databaseId = r),
      (this._app = i),
      (this.type = 'firestore-lite'),
      (this._persistenceKey = '(lite)'),
      (this._settings = new Yy({})),
      (this._settingsFrozen = !1);
  }
  get app() {
    if (!this._app)
      throw new q(
        O.FAILED_PRECONDITION,
        "Firestore was not initialized using the Firebase SDK. 'app' is not available"
      );
    return this._app;
  }
  get _initialized() {
    return this._settingsFrozen;
  }
  get _terminated() {
    return this._terminateTask !== void 0;
  }
  _setSettings(e) {
    if (this._settingsFrozen)
      throw new q(
        O.FAILED_PRECONDITION,
        'Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.'
      );
    (this._settings = new Yy(e)),
      e.credentials !== void 0 &&
        (this._authCredentials = (function (n) {
          if (!n) return new aR();
          switch (n.type) {
            case 'gapi':
              const r = n.client;
              return new hR(
                r,
                n.sessionIndex || '0',
                n.iamToken || null,
                n.authTokenFactory || null
              );
            case 'provider':
              return n.client;
            default:
              throw new q(
                O.INVALID_ARGUMENT,
                'makeAuthCredentialsProvider failed due to invalid credential type'
              );
          }
        })(e.credentials));
  }
  _getSettings() {
    return this._settings;
  }
  _freezeSettings() {
    return (this._settingsFrozen = !0), this._settings;
  }
  _delete() {
    return this._terminateTask || (this._terminateTask = this._terminate()), this._terminateTask;
  }
  toJSON() {
    return { app: this._app, databaseId: this._databaseId, settings: this._settings };
  }
  _terminate() {
    return (
      (function (e) {
        const n = Qy.get(e);
        n && (V('ComponentProvider', 'Removing Datastore'), Qy.delete(e), n.terminate());
      })(this),
      Promise.resolve()
    );
  }
}
function $D(t, e, n, r = {}) {
  var i;
  const s = (t = of(t, um))._getSettings();
  if (
    (s.host !== 'firestore.googleapis.com' &&
      s.host !== e &&
      Wd('Host has been set in both settings() and useEmulator(), emulator host will be used'),
    t._setSettings(Object.assign(Object.assign({}, s), { host: `${e}:${n}`, ssl: !1 })),
    r.mockUserToken)
  ) {
    let o, a;
    if (typeof r.mockUserToken == 'string') (o = r.mockUserToken), (a = ot.MOCK_USER);
    else {
      o = FC(r.mockUserToken, (i = t._app) === null || i === void 0 ? void 0 : i.options.projectId);
      const l = r.mockUserToken.sub || r.mockUserToken.user_id;
      if (!l)
        throw new q(O.INVALID_ARGUMENT, "mockUserToken must contain 'sub' or 'user_id' field!");
      a = new ot(l);
    }
    t._authCredentials = new lR(new IE(o, a));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class gs {
  constructor(e, n, r) {
    (this.converter = n), (this._key = r), (this.type = 'document'), (this.firestore = e);
  }
  get _path() {
    return this._key.path;
  }
  get id() {
    return this._key.path.lastSegment();
  }
  get path() {
    return this._key.path.canonicalString();
  }
  get parent() {
    return new Fi(this.firestore, this.converter, this._key.path.popLast());
  }
  withConverter(e) {
    return new gs(this.firestore, e, this._key);
  }
}
class lc {
  constructor(e, n, r) {
    (this.converter = n), (this._query = r), (this.type = 'query'), (this.firestore = e);
  }
  withConverter(e) {
    return new lc(this.firestore, e, this._query);
  }
}
class Fi extends lc {
  constructor(e, n, r) {
    super(e, n, OE(r)), (this._path = r), (this.type = 'collection');
  }
  get id() {
    return this._query.path.lastSegment();
  }
  get path() {
    return this._query.path.canonicalString();
  }
  get parent() {
    const e = this._path.popLast();
    return e.isEmpty() ? null : new gs(this.firestore, null, new K(e));
  }
  withConverter(e) {
    return new Fi(this.firestore, e, this._path);
  }
}
function bD(t, e, ...n) {
  if (((t = Tr(t)), PD('collection', 'path', e), t instanceof um)) {
    const r = Ne.fromString(e, ...n);
    return Xy(r), new Fi(t, null, r);
  }
  {
    if (!(t instanceof gs || t instanceof Fi))
      throw new q(
        O.INVALID_ARGUMENT,
        'Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore'
      );
    const r = t._path.child(Ne.fromString(e, ...n));
    return Xy(r), new Fi(t.firestore, null, r);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class MD {
  constructor() {
    (this.qc = Promise.resolve()),
      (this.Uc = []),
      (this.Kc = !1),
      (this.Gc = []),
      (this.Qc = null),
      (this.jc = !1),
      (this.zc = !1),
      (this.Wc = []),
      (this.ko = new tS(this, 'async_queue_retry')),
      (this.Hc = () => {
        const n = gh();
        n && V('AsyncQueue', 'Visibility state changed to ' + n.visibilityState), this.ko.Vo();
      });
    const e = gh();
    e && typeof e.addEventListener == 'function' && e.addEventListener('visibilitychange', this.Hc);
  }
  get isShuttingDown() {
    return this.Kc;
  }
  enqueueAndForget(e) {
    this.enqueue(e);
  }
  enqueueAndForgetEvenWhileRestricted(e) {
    this.Jc(), this.Yc(e);
  }
  enterRestrictedMode(e) {
    if (!this.Kc) {
      (this.Kc = !0), (this.zc = e || !1);
      const n = gh();
      n &&
        typeof n.removeEventListener == 'function' &&
        n.removeEventListener('visibilitychange', this.Hc);
    }
  }
  enqueue(e) {
    if ((this.Jc(), this.Kc)) return new Promise(() => {});
    const n = new zr();
    return this.Yc(() =>
      this.Kc && this.zc ? Promise.resolve() : (e().then(n.resolve, n.reject), n.promise)
    ).then(() => n.promise);
  }
  enqueueRetryable(e) {
    this.enqueueAndForget(() => (this.Uc.push(e), this.Zc()));
  }
  async Zc() {
    if (this.Uc.length !== 0) {
      try {
        await this.Uc[0](), this.Uc.shift(), this.ko.reset();
      } catch (e) {
        if (!Go(e)) throw e;
        V('AsyncQueue', 'Operation failed with retryable error: ' + e);
      }
      this.Uc.length > 0 && this.ko.vo(() => this.Zc());
    }
  }
  Yc(e) {
    const n = this.qc.then(
      () => (
        (this.jc = !0),
        e()
          .catch((r) => {
            (this.Qc = r), (this.jc = !1);
            const i = (function (s) {
              let o = s.message || '';
              return (
                s.stack &&
                  (o = s.stack.includes(s.message)
                    ? s.stack
                    : s.message +
                      `
` +
                      s.stack),
                o
              );
            })(r);
            throw (Pn('INTERNAL UNHANDLED ERROR: ', i), r);
          })
          .then((r) => ((this.jc = !1), r))
      )
    );
    return (this.qc = n), n;
  }
  enqueueAfterDelay(e, n, r) {
    this.Jc(), this.Wc.indexOf(e) > -1 && (n = 0);
    const i = om.createAndSchedule(this, e, n, r, (s) => this.Xc(s));
    return this.Gc.push(i), i;
  }
  Jc() {
    this.Qc && J();
  }
  verifyOperationInProgress() {}
  async ta() {
    let e;
    do (e = this.qc), await e;
    while (e !== this.qc);
  }
  ea(e) {
    for (const n of this.Gc) if (n.timerId === e) return !0;
    return !1;
  }
  na(e) {
    return this.ta().then(() => {
      this.Gc.sort((n, r) => n.targetTimeMs - r.targetTimeMs);
      for (const n of this.Gc) if ((n.skipDelay(), e !== 'all' && n.timerId === e)) break;
      return this.ta();
    });
  }
  sa(e) {
    this.Wc.push(e);
  }
  Xc(e) {
    const n = this.Gc.indexOf(e);
    this.Gc.splice(n, 1);
  }
}
class dS extends um {
  constructor(e, n, r, i) {
    super(e, n, r, i),
      (this.type = 'firestore'),
      (this._queue = new MD()),
      (this._persistenceKey = (i == null ? void 0 : i.name) || '[DEFAULT]');
  }
  _terminate() {
    return this._firestoreClient || fS(this), this._firestoreClient.terminate();
  }
}
function FD(t, e) {
  const n = typeof t == 'object' ? t : w1(),
    r = typeof t == 'string' ? t : e || '(default)',
    i = Ip(n, 'firestore').getImmediate({ identifier: r });
  if (!i._initialized) {
    const s = $C('firestore');
    s && $D(i, ...s);
  }
  return i;
}
function UD(t) {
  return t._firestoreClient || fS(t), t._firestoreClient.verifyNotTerminated(), t._firestoreClient;
}
function fS(t) {
  var e;
  const n = t._freezeSettings(),
    r = (function (i, s, o, a) {
      return new _R(
        i,
        s,
        o,
        a.host,
        a.ssl,
        a.experimentalForceLongPolling,
        a.experimentalAutoDetectLongPolling,
        a.useFetchStreams
      );
    })(
      t._databaseId,
      ((e = t._app) === null || e === void 0 ? void 0 : e.options.appId) || '',
      t._persistenceKey,
      n
    );
  t._firestoreClient = new kD(t._authCredentials, t._appCheckCredentials, t._queue, r);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class zl {
  constructor(e) {
    this._byteString = e;
  }
  static fromBase64String(e) {
    try {
      return new zl(ft.fromBase64String(e));
    } catch (n) {
      throw new q(O.INVALID_ARGUMENT, 'Failed to construct data from Base64 string: ' + n);
    }
  }
  static fromUint8Array(e) {
    return new zl(ft.fromUint8Array(e));
  }
  toBase64() {
    return this._byteString.toBase64();
  }
  toUint8Array() {
    return this._byteString.toUint8Array();
  }
  toString() {
    return 'Bytes(base64: ' + this.toBase64() + ')';
  }
  isEqual(e) {
    return this._byteString.isEqual(e._byteString);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class pS {
  constructor(...e) {
    for (let n = 0; n < e.length; ++n)
      if (e[n].length === 0)
        throw new q(
          O.INVALID_ARGUMENT,
          'Invalid field name at argument $(i + 1). Field names must not be empty.'
        );
    this._internalPath = new St(e);
  }
  isEqual(e) {
    return this._internalPath.isEqual(e._internalPath);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class VD {
  constructor(e, n) {
    if (!isFinite(e) || e < -90 || e > 90)
      throw new q(
        O.INVALID_ARGUMENT,
        'Latitude must be a number between -90 and 90, but was: ' + e
      );
    if (!isFinite(n) || n < -180 || n > 180)
      throw new q(
        O.INVALID_ARGUMENT,
        'Longitude must be a number between -180 and 180, but was: ' + n
      );
    (this._lat = e), (this._long = n);
  }
  get latitude() {
    return this._lat;
  }
  get longitude() {
    return this._long;
  }
  isEqual(e) {
    return this._lat === e._lat && this._long === e._long;
  }
  toJSON() {
    return { latitude: this._lat, longitude: this._long };
  }
  _compareTo(e) {
    return ue(this._lat, e._lat) || ue(this._long, e._long);
  }
}
const jD = new RegExp('[~\\*/\\[\\]]');
function zD(t, e, n) {
  if (e.search(jD) >= 0)
    throw Jy(
      `Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,
      t,
      !1,
      void 0,
      n
    );
  try {
    return new pS(...e.split('.'))._internalPath;
  } catch {
    throw Jy(
      `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
      t,
      !1,
      void 0,
      n
    );
  }
}
function Jy(t, e, n, r, i) {
  const s = r && !r.isEmpty(),
    o = i !== void 0;
  let a = `Function ${e}() called with invalid data`;
  n && (a += ' (via `toFirestore()`)'), (a += '. ');
  let l = '';
  return (
    (s || o) &&
      ((l += ' (found'), s && (l += ` in field ${r}`), o && (l += ` in document ${i}`), (l += ')')),
    new q(O.INVALID_ARGUMENT, a + t + l)
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class mS {
  constructor(e, n, r, i, s) {
    (this._firestore = e),
      (this._userDataWriter = n),
      (this._key = r),
      (this._document = i),
      (this._converter = s);
  }
  get id() {
    return this._key.path.lastSegment();
  }
  get ref() {
    return new gs(this._firestore, this._converter, this._key);
  }
  exists() {
    return this._document !== null;
  }
  data() {
    if (this._document) {
      if (this._converter) {
        const e = new BD(this._firestore, this._userDataWriter, this._key, this._document, null);
        return this._converter.fromFirestore(e);
      }
      return this._userDataWriter.convertValue(this._document.data.value);
    }
  }
  get(e) {
    if (this._document) {
      const n = this._document.data.field(gS('DocumentSnapshot.get', e));
      if (n !== null) return this._userDataWriter.convertValue(n);
    }
  }
}
class BD extends mS {
  data() {
    return super.data();
  }
}
function gS(t, e) {
  return typeof e == 'string'
    ? zD(t, e)
    : e instanceof pS
    ? e._internalPath
    : e._delegate._internalPath;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function HD(t) {
  if (t.limitType === 'L' && t.explicitOrderBy.length === 0)
    throw new q(
      O.UNIMPLEMENTED,
      'limitToLast() queries require specifying at least one orderBy() clause'
    );
}
class KD {
  convertValue(e, n = 'none') {
    switch (ti(e)) {
      case 0:
        return null;
      case 1:
        return e.booleanValue;
      case 2:
        return $e(e.integerValue || e.doubleValue);
      case 3:
        return this.convertTimestamp(e.timestampValue);
      case 4:
        return this.convertServerTimestamp(e, n);
      case 5:
        return e.stringValue;
      case 6:
        return this.convertBytes(ns(e.bytesValue));
      case 7:
        return this.convertReference(e.referenceValue);
      case 8:
        return this.convertGeoPoint(e.geoPointValue);
      case 9:
        return this.convertArray(e.arrayValue, n);
      case 10:
        return this.convertObject(e.mapValue, n);
      default:
        throw J();
    }
  }
  convertObject(e, n) {
    const r = {};
    return (
      Zu(e.fields, (i, s) => {
        r[i] = this.convertValue(s, n);
      }),
      r
    );
  }
  convertGeoPoint(e) {
    return new VD($e(e.latitude), $e(e.longitude));
  }
  convertArray(e, n) {
    return (e.values || []).map((r) => this.convertValue(r, n));
  }
  convertServerTimestamp(e, n) {
    switch (n) {
      case 'previous':
        const r = CE(e);
        return r == null ? null : this.convertValue(r, n);
      case 'estimate':
        return this.convertTimestamp(Ao(e));
      default:
        return null;
    }
  }
  convertTimestamp(e) {
    const n = vr(e);
    return new Ct(n.seconds, n.nanos);
  }
  convertDocumentKey(e, n) {
    const r = Ne.fromString(e);
    Fe(YE(r));
    const i = new Co(r.get(1), r.get(3)),
      s = new K(r.popFirst(5));
    return (
      i.isEqual(n) ||
        Pn(
          `Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`
        ),
      s
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ca {
  constructor(e, n) {
    (this.hasPendingWrites = e), (this.fromCache = n);
  }
  isEqual(e) {
    return this.hasPendingWrites === e.hasPendingWrites && this.fromCache === e.fromCache;
  }
}
class WD extends mS {
  constructor(e, n, r, i, s, o) {
    super(e, n, r, i, o), (this._firestore = e), (this._firestoreImpl = e), (this.metadata = s);
  }
  exists() {
    return super.exists();
  }
  data(e = {}) {
    if (this._document) {
      if (this._converter) {
        const n = new Ba(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          this.metadata,
          null
        );
        return this._converter.fromFirestore(n, e);
      }
      return this._userDataWriter.convertValue(this._document.data.value, e.serverTimestamps);
    }
  }
  get(e, n = {}) {
    if (this._document) {
      const r = this._document.data.field(gS('DocumentSnapshot.get', e));
      if (r !== null) return this._userDataWriter.convertValue(r, n.serverTimestamps);
    }
  }
}
class Ba extends WD {
  data(e = {}) {
    return super.data(e);
  }
}
class qD {
  constructor(e, n, r, i) {
    (this._firestore = e),
      (this._userDataWriter = n),
      (this._snapshot = i),
      (this.metadata = new Ca(i.hasPendingWrites, i.fromCache)),
      (this.query = r);
  }
  get docs() {
    const e = [];
    return this.forEach((n) => e.push(n)), e;
  }
  get size() {
    return this._snapshot.docs.size;
  }
  get empty() {
    return this.size === 0;
  }
  forEach(e, n) {
    this._snapshot.docs.forEach((r) => {
      e.call(
        n,
        new Ba(
          this._firestore,
          this._userDataWriter,
          r.key,
          r,
          new Ca(this._snapshot.mutatedKeys.has(r.key), this._snapshot.fromCache),
          this.query.converter
        )
      );
    });
  }
  docChanges(e = {}) {
    const n = !!e.includeMetadataChanges;
    if (n && this._snapshot.excludesMetadataChanges)
      throw new q(
        O.INVALID_ARGUMENT,
        'To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().'
      );
    return (
      (this._cachedChanges && this._cachedChangesIncludeMetadataChanges === n) ||
        ((this._cachedChanges = (function (r, i) {
          if (r._snapshot.oldDocs.isEmpty()) {
            let s = 0;
            return r._snapshot.docChanges.map((o) => {
              const a = new Ba(
                r._firestore,
                r._userDataWriter,
                o.doc.key,
                o.doc,
                new Ca(r._snapshot.mutatedKeys.has(o.doc.key), r._snapshot.fromCache),
                r.query.converter
              );
              return o.doc, { type: 'added', doc: a, oldIndex: -1, newIndex: s++ };
            });
          }
          {
            let s = r._snapshot.oldDocs;
            return r._snapshot.docChanges
              .filter((o) => i || o.type !== 3)
              .map((o) => {
                const a = new Ba(
                  r._firestore,
                  r._userDataWriter,
                  o.doc.key,
                  o.doc,
                  new Ca(r._snapshot.mutatedKeys.has(o.doc.key), r._snapshot.fromCache),
                  r.query.converter
                );
                let l = -1,
                  u = -1;
                return (
                  o.type !== 0 && ((l = s.indexOf(o.doc.key)), (s = s.delete(o.doc.key))),
                  o.type !== 1 && ((s = s.add(o.doc)), (u = s.indexOf(o.doc.key))),
                  { type: GD(o.type), doc: a, oldIndex: l, newIndex: u }
                );
              });
          }
        })(this, n)),
        (this._cachedChangesIncludeMetadataChanges = n)),
      this._cachedChanges
    );
  }
}
function GD(t) {
  switch (t) {
    case 0:
      return 'added';
    case 2:
    case 3:
      return 'modified';
    case 1:
      return 'removed';
    default:
      return J();
  }
}
class QD extends KD {
  constructor(e) {
    super(), (this.firestore = e);
  }
  convertBytes(e) {
    return new zl(e);
  }
  convertReference(e) {
    const n = this.convertDocumentKey(e, this.firestore._databaseId);
    return new gs(this.firestore, null, n);
  }
}
function XD(t) {
  t = of(t, lc);
  const e = of(t.firestore, dS),
    n = UD(e),
    r = new QD(e);
  return HD(t._query), DD(n, t._query).then((i) => new qD(e, r, t, i));
}
(function (t, e = !0) {
  (function (n) {
    fs = n;
  })(Fo),
    Zi(
      new Jr(
        'firestore',
        (n, { instanceIdentifier: r, options: i }) => {
          const s = n.getProvider('app').getImmediate(),
            o = new dS(
              new uR(n.getProvider('auth-internal')),
              new fR(n.getProvider('app-check-internal')),
              (function (a, l) {
                if (!Object.prototype.hasOwnProperty.apply(a.options, ['projectId']))
                  throw new q(
                    O.INVALID_ARGUMENT,
                    '"projectId" not provided in firebase.initializeApp.'
                  );
                return new Co(a.options.projectId, l);
              })(s, r),
              s
            );
          return (i = Object.assign({ useFetchStreams: e }, i)), o._setSettings(i), o;
        },
        'PUBLIC'
      ).setMultipleInstances(!0)
    ),
    fr(_y, '3.8.4', t),
    fr(_y, '3.8.4', 'esm2017');
})();
function cm(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
        (n[r[i]] = t[r[i]]);
  return n;
}
function yS() {
  return {
    ['dependent-sdk-initialized-before-auth']:
      'Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.'
  };
}
const YD = yS,
  vS = new bo('auth', 'Firebase', yS());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Zy = new _p('@firebase/auth');
function Ha(t, ...e) {
  Zy.logLevel <= ae.ERROR && Zy.error(`Auth (${Fo}): ${t}`, ...e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ln(t, ...e) {
  throw hm(t, ...e);
}
function dn(t, ...e) {
  return hm(t, ...e);
}
function JD(t, e, n) {
  const r = Object.assign(Object.assign({}, YD()), { [e]: n });
  return new bo('auth', 'Firebase', r).create(e, { appName: t.name });
}
function hm(t, ...e) {
  if (typeof t != 'string') {
    const n = e[0],
      r = [...e.slice(1)];
    return r[0] && (r[0].appName = t.name), t._errorFactory.create(n, ...r);
  }
  return vS.create(t, ...e);
}
function G(t, e, ...n) {
  if (!t) throw hm(e, ...n);
}
function Tn(t) {
  const e = 'INTERNAL ASSERTION FAILED: ' + t;
  throw (Ha(e), new Error(e));
}
function $n(t, e) {
  t || Tn(e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ev = new Map();
function In(t) {
  $n(t instanceof Function, 'Expected a class definition');
  let e = ev.get(t);
  return e
    ? ($n(e instanceof t, 'Instance stored in cache mismatched with class'), e)
    : ((e = new t()), ev.set(t, e), e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ZD(t, e) {
  const n = Ip(t, 'auth');
  if (n.isInitialized()) {
    const i = n.getImmediate(),
      s = n.getOptions();
    if (Rl(s, e ?? {})) return i;
    Ln(i, 'already-initialized');
  }
  return n.initialize({ options: e });
}
function eP(t, e) {
  const n = (e == null ? void 0 : e.persistence) || [],
    r = (Array.isArray(n) ? n : [n]).map(In);
  e != null && e.errorMap && t._updateErrorMap(e.errorMap),
    t._initializeWithPersistence(r, e == null ? void 0 : e.popupRedirectResolver);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function af() {
  var t;
  return (
    (typeof self < 'u' && ((t = self.location) === null || t === void 0 ? void 0 : t.href)) || ''
  );
}
function tP() {
  return tv() === 'http:' || tv() === 'https:';
}
function tv() {
  var t;
  return (
    (typeof self < 'u' && ((t = self.location) === null || t === void 0 ? void 0 : t.protocol)) ||
    null
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function nP() {
  return typeof navigator < 'u' &&
    navigator &&
    'onLine' in navigator &&
    typeof navigator.onLine == 'boolean' &&
    (tP() || VC() || 'connection' in navigator)
    ? navigator.onLine
    : !0;
}
function rP() {
  if (typeof navigator > 'u') return null;
  const t = navigator;
  return (t.languages && t.languages[0]) || t.language || null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Jo {
  constructor(e, n) {
    (this.shortDelay = e),
      (this.longDelay = n),
      $n(n > e, 'Short delay should be less than long delay!'),
      (this.isMobile = UC() || jC());
  }
  get() {
    return nP()
      ? this.isMobile
        ? this.longDelay
        : this.shortDelay
      : Math.min(5e3, this.shortDelay);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function dm(t, e) {
  $n(t.emulator, 'Emulator should always be set here');
  const { url: n } = t.emulator;
  return e ? `${n}${e.startsWith('/') ? e.slice(1) : e}` : n;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class wS {
  static initialize(e, n, r) {
    (this.fetchImpl = e), n && (this.headersImpl = n), r && (this.responseImpl = r);
  }
  static fetch() {
    if (this.fetchImpl) return this.fetchImpl;
    if (typeof self < 'u' && 'fetch' in self) return self.fetch;
    Tn(
      'Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill'
    );
  }
  static headers() {
    if (this.headersImpl) return this.headersImpl;
    if (typeof self < 'u' && 'Headers' in self) return self.Headers;
    Tn(
      'Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill'
    );
  }
  static response() {
    if (this.responseImpl) return this.responseImpl;
    if (typeof self < 'u' && 'Response' in self) return self.Response;
    Tn(
      'Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill'
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const iP = {
  CREDENTIAL_MISMATCH: 'custom-token-mismatch',
  MISSING_CUSTOM_TOKEN: 'internal-error',
  INVALID_IDENTIFIER: 'invalid-email',
  MISSING_CONTINUE_URI: 'internal-error',
  INVALID_PASSWORD: 'wrong-password',
  MISSING_PASSWORD: 'internal-error',
  EMAIL_EXISTS: 'email-already-in-use',
  PASSWORD_LOGIN_DISABLED: 'operation-not-allowed',
  INVALID_IDP_RESPONSE: 'invalid-credential',
  INVALID_PENDING_TOKEN: 'invalid-credential',
  FEDERATED_USER_ID_ALREADY_LINKED: 'credential-already-in-use',
  MISSING_REQ_TYPE: 'internal-error',
  EMAIL_NOT_FOUND: 'user-not-found',
  RESET_PASSWORD_EXCEED_LIMIT: 'too-many-requests',
  EXPIRED_OOB_CODE: 'expired-action-code',
  INVALID_OOB_CODE: 'invalid-action-code',
  MISSING_OOB_CODE: 'internal-error',
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: 'requires-recent-login',
  INVALID_ID_TOKEN: 'invalid-user-token',
  TOKEN_EXPIRED: 'user-token-expired',
  USER_NOT_FOUND: 'user-token-expired',
  TOO_MANY_ATTEMPTS_TRY_LATER: 'too-many-requests',
  INVALID_CODE: 'invalid-verification-code',
  INVALID_SESSION_INFO: 'invalid-verification-id',
  INVALID_TEMPORARY_PROOF: 'invalid-credential',
  MISSING_SESSION_INFO: 'missing-verification-id',
  SESSION_EXPIRED: 'code-expired',
  MISSING_ANDROID_PACKAGE_NAME: 'missing-android-pkg-name',
  UNAUTHORIZED_DOMAIN: 'unauthorized-continue-uri',
  INVALID_OAUTH_CLIENT_ID: 'invalid-oauth-client-id',
  ADMIN_ONLY_OPERATION: 'admin-restricted-operation',
  INVALID_MFA_PENDING_CREDENTIAL: 'invalid-multi-factor-session',
  MFA_ENROLLMENT_NOT_FOUND: 'multi-factor-info-not-found',
  MISSING_MFA_ENROLLMENT_ID: 'missing-multi-factor-info',
  MISSING_MFA_PENDING_CREDENTIAL: 'missing-multi-factor-session',
  SECOND_FACTOR_EXISTS: 'second-factor-already-in-use',
  SECOND_FACTOR_LIMIT_EXCEEDED: 'maximum-second-factor-count-exceeded',
  BLOCKING_FUNCTION_ERROR_RESPONSE: 'internal-error'
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const sP = new Jo(3e4, 6e4);
function ES(t, e) {
  return t.tenantId && !e.tenantId
    ? Object.assign(Object.assign({}, e), { tenantId: t.tenantId })
    : e;
}
async function uc(t, e, n, r, i = {}) {
  return SS(t, i, async () => {
    let s = {},
      o = {};
    r && (e === 'GET' ? (o = r) : (s = { body: JSON.stringify(r) }));
    const a = Mo(Object.assign({ key: t.config.apiKey }, o)).slice(1),
      l = await t._getAdditionalHeaders();
    return (
      (l['Content-Type'] = 'application/json'),
      t.languageCode && (l['X-Firebase-Locale'] = t.languageCode),
      wS.fetch()(
        TS(t, t.config.apiHost, n, a),
        Object.assign({ method: e, headers: l, referrerPolicy: 'no-referrer' }, s)
      )
    );
  });
}
async function SS(t, e, n) {
  t._canInitEmulator = !1;
  const r = Object.assign(Object.assign({}, iP), e);
  try {
    const i = new oP(t),
      s = await Promise.race([n(), i.promise]);
    i.clearNetworkTimeout();
    const o = await s.json();
    if ('needConfirmation' in o) throw Aa(t, 'account-exists-with-different-credential', o);
    if (s.ok && !('errorMessage' in o)) return o;
    {
      const a = s.ok ? o.errorMessage : o.error.message,
        [l, u] = a.split(' : ');
      if (l === 'FEDERATED_USER_ID_ALREADY_LINKED') throw Aa(t, 'credential-already-in-use', o);
      if (l === 'EMAIL_EXISTS') throw Aa(t, 'email-already-in-use', o);
      if (l === 'USER_DISABLED') throw Aa(t, 'user-disabled', o);
      const c = r[l] || l.toLowerCase().replace(/[_\s]+/g, '-');
      if (u) throw JD(t, c, u);
      Ln(t, c);
    }
  } catch (i) {
    if (i instanceof Mn) throw i;
    Ln(t, 'internal-error', { message: String(i) });
  }
}
async function _S(t, e, n, r, i = {}) {
  const s = await uc(t, e, n, r, i);
  return (
    'mfaPendingCredential' in s && Ln(t, 'multi-factor-auth-required', { _serverResponse: s }), s
  );
}
function TS(t, e, n, r) {
  const i = `${e}${n}?${r}`;
  return t.config.emulator ? dm(t.config, i) : `${t.config.apiScheme}://${i}`;
}
class oP {
  constructor(e) {
    (this.auth = e),
      (this.timer = null),
      (this.promise = new Promise((n, r) => {
        this.timer = setTimeout(() => r(dn(this.auth, 'network-request-failed')), sP.get());
      }));
  }
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
}
function Aa(t, e, n) {
  const r = { appName: t.name };
  n.email && (r.email = n.email), n.phoneNumber && (r.phoneNumber = n.phoneNumber);
  const i = dn(t, e, r);
  return (i.customData._tokenResponse = n), i;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function aP(t, e) {
  return uc(t, 'POST', '/v1/accounts:delete', e);
}
async function lP(t, e) {
  return uc(t, 'POST', '/v1/accounts:lookup', e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Xs(t) {
  if (t)
    try {
      const e = new Date(Number(t));
      if (!isNaN(e.getTime())) return e.toUTCString();
    } catch {}
}
async function uP(t, e = !1) {
  const n = Tr(t),
    r = await n.getIdToken(e),
    i = fm(r);
  G(i && i.exp && i.auth_time && i.iat, n.auth, 'internal-error');
  const s = typeof i.firebase == 'object' ? i.firebase : void 0,
    o = s == null ? void 0 : s.sign_in_provider;
  return {
    claims: i,
    token: r,
    authTime: Xs(yh(i.auth_time)),
    issuedAtTime: Xs(yh(i.iat)),
    expirationTime: Xs(yh(i.exp)),
    signInProvider: o || null,
    signInSecondFactor: (s == null ? void 0 : s.sign_in_second_factor) || null
  };
}
function yh(t) {
  return Number(t) * 1e3;
}
function fm(t) {
  const [e, n, r] = t.split('.');
  if (e === void 0 || n === void 0 || r === void 0)
    return Ha('JWT malformed, contained fewer than 3 sections'), null;
  try {
    const i = f1(n);
    return i ? JSON.parse(i) : (Ha('Failed to decode base64 JWT payload'), null);
  } catch (i) {
    return Ha('Caught error parsing JWT payload as JSON', i == null ? void 0 : i.toString()), null;
  }
}
function cP(t) {
  const e = fm(t);
  return (
    G(e, 'internal-error'),
    G(typeof e.exp < 'u', 'internal-error'),
    G(typeof e.iat < 'u', 'internal-error'),
    Number(e.exp) - Number(e.iat)
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Ro(t, e, n = !1) {
  if (n) return e;
  try {
    return await e;
  } catch (r) {
    throw (r instanceof Mn && hP(r) && t.auth.currentUser === t && (await t.auth.signOut()), r);
  }
}
function hP({ code: t }) {
  return t === 'auth/user-disabled' || t === 'auth/user-token-expired';
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class dP {
  constructor(e) {
    (this.user = e), (this.isRunning = !1), (this.timerId = null), (this.errorBackoff = 3e4);
  }
  _start() {
    this.isRunning || ((this.isRunning = !0), this.schedule());
  }
  _stop() {
    this.isRunning && ((this.isRunning = !1), this.timerId !== null && clearTimeout(this.timerId));
  }
  getInterval(e) {
    var n;
    if (e) {
      const r = this.errorBackoff;
      return (this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4)), r;
    } else {
      this.errorBackoff = 3e4;
      const i =
        ((n = this.user.stsTokenManager.expirationTime) !== null && n !== void 0 ? n : 0) -
        Date.now() -
        3e5;
      return Math.max(0, i);
    }
  }
  schedule(e = !1) {
    if (!this.isRunning) return;
    const n = this.getInterval(e);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, n);
  }
  async iteration() {
    try {
      await this.user.getIdToken(!0);
    } catch (e) {
      (e == null ? void 0 : e.code) === 'auth/network-request-failed' && this.schedule(!0);
      return;
    }
    this.schedule();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class IS {
  constructor(e, n) {
    (this.createdAt = e), (this.lastLoginAt = n), this._initializeTime();
  }
  _initializeTime() {
    (this.lastSignInTime = Xs(this.lastLoginAt)), (this.creationTime = Xs(this.createdAt));
  }
  _copy(e) {
    (this.createdAt = e.createdAt), (this.lastLoginAt = e.lastLoginAt), this._initializeTime();
  }
  toJSON() {
    return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt };
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Bl(t) {
  var e;
  const n = t.auth,
    r = await t.getIdToken(),
    i = await Ro(t, lP(n, { idToken: r }));
  G(i == null ? void 0 : i.users.length, n, 'internal-error');
  const s = i.users[0];
  t._notifyReloadListener(s);
  const o =
      !((e = s.providerUserInfo) === null || e === void 0) && e.length
        ? mP(s.providerUserInfo)
        : [],
    a = pP(t.providerData, o),
    l = t.isAnonymous,
    u = !(t.email && s.passwordHash) && !(a != null && a.length),
    c = l ? u : !1,
    h = {
      uid: s.localId,
      displayName: s.displayName || null,
      photoURL: s.photoUrl || null,
      email: s.email || null,
      emailVerified: s.emailVerified || !1,
      phoneNumber: s.phoneNumber || null,
      tenantId: s.tenantId || null,
      providerData: a,
      metadata: new IS(s.createdAt, s.lastLoginAt),
      isAnonymous: c
    };
  Object.assign(t, h);
}
async function fP(t) {
  const e = Tr(t);
  await Bl(e), await e.auth._persistUserIfCurrent(e), e.auth._notifyListenersIfCurrent(e);
}
function pP(t, e) {
  return [...t.filter((r) => !e.some((i) => i.providerId === r.providerId)), ...e];
}
function mP(t) {
  return t.map((e) => {
    var { providerId: n } = e,
      r = cm(e, ['providerId']);
    return {
      providerId: n,
      uid: r.rawId || '',
      displayName: r.displayName || null,
      email: r.email || null,
      phoneNumber: r.phoneNumber || null,
      photoURL: r.photoUrl || null
    };
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function gP(t, e) {
  const n = await SS(t, {}, async () => {
    const r = Mo({ grant_type: 'refresh_token', refresh_token: e }).slice(1),
      { tokenApiHost: i, apiKey: s } = t.config,
      o = TS(t, i, '/v1/token', `key=${s}`),
      a = await t._getAdditionalHeaders();
    return (
      (a['Content-Type'] = 'application/x-www-form-urlencoded'),
      wS.fetch()(o, { method: 'POST', headers: a, body: r })
    );
  });
  return { accessToken: n.access_token, expiresIn: n.expires_in, refreshToken: n.refresh_token };
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class xo {
  constructor() {
    (this.refreshToken = null), (this.accessToken = null), (this.expirationTime = null);
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(e) {
    G(e.idToken, 'internal-error'),
      G(typeof e.idToken < 'u', 'internal-error'),
      G(typeof e.refreshToken < 'u', 'internal-error');
    const n = 'expiresIn' in e && typeof e.expiresIn < 'u' ? Number(e.expiresIn) : cP(e.idToken);
    this.updateTokensAndExpiration(e.idToken, e.refreshToken, n);
  }
  async getToken(e, n = !1) {
    return (
      G(!this.accessToken || this.refreshToken, e, 'user-token-expired'),
      !n && this.accessToken && !this.isExpired
        ? this.accessToken
        : this.refreshToken
        ? (await this.refresh(e, this.refreshToken), this.accessToken)
        : null
    );
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(e, n) {
    const { accessToken: r, refreshToken: i, expiresIn: s } = await gP(e, n);
    this.updateTokensAndExpiration(r, i, Number(s));
  }
  updateTokensAndExpiration(e, n, r) {
    (this.refreshToken = n || null),
      (this.accessToken = e || null),
      (this.expirationTime = Date.now() + r * 1e3);
  }
  static fromJSON(e, n) {
    const { refreshToken: r, accessToken: i, expirationTime: s } = n,
      o = new xo();
    return (
      r && (G(typeof r == 'string', 'internal-error', { appName: e }), (o.refreshToken = r)),
      i && (G(typeof i == 'string', 'internal-error', { appName: e }), (o.accessToken = i)),
      s && (G(typeof s == 'number', 'internal-error', { appName: e }), (o.expirationTime = s)),
      o
    );
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime
    };
  }
  _assign(e) {
    (this.accessToken = e.accessToken),
      (this.refreshToken = e.refreshToken),
      (this.expirationTime = e.expirationTime);
  }
  _clone() {
    return Object.assign(new xo(), this.toJSON());
  }
  _performRefresh() {
    return Tn('not implemented');
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Vn(t, e) {
  G(typeof t == 'string' || typeof t > 'u', 'internal-error', { appName: e });
}
class Kr {
  constructor(e) {
    var { uid: n, auth: r, stsTokenManager: i } = e,
      s = cm(e, ['uid', 'auth', 'stsTokenManager']);
    (this.providerId = 'firebase'),
      (this.proactiveRefresh = new dP(this)),
      (this.reloadUserInfo = null),
      (this.reloadListener = null),
      (this.uid = n),
      (this.auth = r),
      (this.stsTokenManager = i),
      (this.accessToken = i.accessToken),
      (this.displayName = s.displayName || null),
      (this.email = s.email || null),
      (this.emailVerified = s.emailVerified || !1),
      (this.phoneNumber = s.phoneNumber || null),
      (this.photoURL = s.photoURL || null),
      (this.isAnonymous = s.isAnonymous || !1),
      (this.tenantId = s.tenantId || null),
      (this.providerData = s.providerData ? [...s.providerData] : []),
      (this.metadata = new IS(s.createdAt || void 0, s.lastLoginAt || void 0));
  }
  async getIdToken(e) {
    const n = await Ro(this, this.stsTokenManager.getToken(this.auth, e));
    return (
      G(n, this.auth, 'internal-error'),
      this.accessToken !== n &&
        ((this.accessToken = n),
        await this.auth._persistUserIfCurrent(this),
        this.auth._notifyListenersIfCurrent(this)),
      n
    );
  }
  getIdTokenResult(e) {
    return uP(this, e);
  }
  reload() {
    return fP(this);
  }
  _assign(e) {
    this !== e &&
      (G(this.uid === e.uid, this.auth, 'internal-error'),
      (this.displayName = e.displayName),
      (this.photoURL = e.photoURL),
      (this.email = e.email),
      (this.emailVerified = e.emailVerified),
      (this.phoneNumber = e.phoneNumber),
      (this.isAnonymous = e.isAnonymous),
      (this.tenantId = e.tenantId),
      (this.providerData = e.providerData.map((n) => Object.assign({}, n))),
      this.metadata._copy(e.metadata),
      this.stsTokenManager._assign(e.stsTokenManager));
  }
  _clone(e) {
    return new Kr(
      Object.assign(Object.assign({}, this), {
        auth: e,
        stsTokenManager: this.stsTokenManager._clone()
      })
    );
  }
  _onReload(e) {
    G(!this.reloadListener, this.auth, 'internal-error'),
      (this.reloadListener = e),
      this.reloadUserInfo &&
        (this._notifyReloadListener(this.reloadUserInfo), (this.reloadUserInfo = null));
  }
  _notifyReloadListener(e) {
    this.reloadListener ? this.reloadListener(e) : (this.reloadUserInfo = e);
  }
  _startProactiveRefresh() {
    this.proactiveRefresh._start();
  }
  _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  }
  async _updateTokensIfNecessary(e, n = !1) {
    let r = !1;
    e.idToken &&
      e.idToken !== this.stsTokenManager.accessToken &&
      (this.stsTokenManager.updateFromServerResponse(e), (r = !0)),
      n && (await Bl(this)),
      await this.auth._persistUserIfCurrent(this),
      r && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    const e = await this.getIdToken();
    return (
      await Ro(this, aP(this.auth, { idToken: e })),
      this.stsTokenManager.clearRefreshToken(),
      this.auth.signOut()
    );
  }
  toJSON() {
    return Object.assign(
      Object.assign(
        {
          uid: this.uid,
          email: this.email || void 0,
          emailVerified: this.emailVerified,
          displayName: this.displayName || void 0,
          isAnonymous: this.isAnonymous,
          photoURL: this.photoURL || void 0,
          phoneNumber: this.phoneNumber || void 0,
          tenantId: this.tenantId || void 0,
          providerData: this.providerData.map((e) => Object.assign({}, e)),
          stsTokenManager: this.stsTokenManager.toJSON(),
          _redirectEventId: this._redirectEventId
        },
        this.metadata.toJSON()
      ),
      { apiKey: this.auth.config.apiKey, appName: this.auth.name }
    );
  }
  get refreshToken() {
    return this.stsTokenManager.refreshToken || '';
  }
  static _fromJSON(e, n) {
    var r, i, s, o, a, l, u, c;
    const h = (r = n.displayName) !== null && r !== void 0 ? r : void 0,
      d = (i = n.email) !== null && i !== void 0 ? i : void 0,
      m = (s = n.phoneNumber) !== null && s !== void 0 ? s : void 0,
      y = (o = n.photoURL) !== null && o !== void 0 ? o : void 0,
      v = (a = n.tenantId) !== null && a !== void 0 ? a : void 0,
      S = (l = n._redirectEventId) !== null && l !== void 0 ? l : void 0,
      p = (u = n.createdAt) !== null && u !== void 0 ? u : void 0,
      f = (c = n.lastLoginAt) !== null && c !== void 0 ? c : void 0,
      { uid: g, emailVerified: E, isAnonymous: _, providerData: R, stsTokenManager: x } = n;
    G(g && x, e, 'internal-error');
    const P = xo.fromJSON(this.name, x);
    G(typeof g == 'string', e, 'internal-error'),
      Vn(h, e.name),
      Vn(d, e.name),
      G(typeof E == 'boolean', e, 'internal-error'),
      G(typeof _ == 'boolean', e, 'internal-error'),
      Vn(m, e.name),
      Vn(y, e.name),
      Vn(v, e.name),
      Vn(S, e.name),
      Vn(p, e.name),
      Vn(f, e.name);
    const B = new Kr({
      uid: g,
      auth: e,
      email: d,
      emailVerified: E,
      displayName: h,
      isAnonymous: _,
      photoURL: y,
      phoneNumber: m,
      tenantId: v,
      stsTokenManager: P,
      createdAt: p,
      lastLoginAt: f
    });
    return (
      R && Array.isArray(R) && (B.providerData = R.map((b) => Object.assign({}, b))),
      S && (B._redirectEventId = S),
      B
    );
  }
  static async _fromIdTokenResponse(e, n, r = !1) {
    const i = new xo();
    i.updateFromServerResponse(n);
    const s = new Kr({ uid: n.localId, auth: e, stsTokenManager: i, isAnonymous: r });
    return await Bl(s), s;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class kS {
  constructor() {
    (this.type = 'NONE'), (this.storage = {});
  }
  async _isAvailable() {
    return !0;
  }
  async _set(e, n) {
    this.storage[e] = n;
  }
  async _get(e) {
    const n = this.storage[e];
    return n === void 0 ? null : n;
  }
  async _remove(e) {
    delete this.storage[e];
  }
  _addListener(e, n) {}
  _removeListener(e, n) {}
}
kS.type = 'NONE';
const nv = kS;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ka(t, e, n) {
  return `firebase:${t}:${e}:${n}`;
}
class Ui {
  constructor(e, n, r) {
    (this.persistence = e), (this.auth = n), (this.userKey = r);
    const { config: i, name: s } = this.auth;
    (this.fullUserKey = Ka(this.userKey, i.apiKey, s)),
      (this.fullPersistenceKey = Ka('persistence', i.apiKey, s)),
      (this.boundEventHandler = n._onStorageEvent.bind(n)),
      this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(e) {
    return this.persistence._set(this.fullUserKey, e.toJSON());
  }
  async getCurrentUser() {
    const e = await this.persistence._get(this.fullUserKey);
    return e ? Kr._fromJSON(this.auth, e) : null;
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(this.fullPersistenceKey, this.persistence.type);
  }
  async setPersistence(e) {
    if (this.persistence === e) return;
    const n = await this.getCurrentUser();
    if ((await this.removeCurrentUser(), (this.persistence = e), n)) return this.setCurrentUser(n);
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(e, n, r = 'authUser') {
    if (!n.length) return new Ui(In(nv), e, r);
    const i = (
      await Promise.all(
        n.map(async (u) => {
          if (await u._isAvailable()) return u;
        })
      )
    ).filter((u) => u);
    let s = i[0] || In(nv);
    const o = Ka(r, e.config.apiKey, e.name);
    let a = null;
    for (const u of n)
      try {
        const c = await u._get(o);
        if (c) {
          const h = Kr._fromJSON(e, c);
          u !== s && (a = h), (s = u);
          break;
        }
      } catch {}
    const l = i.filter((u) => u._shouldAllowMigration);
    return !s._shouldAllowMigration || !l.length
      ? new Ui(s, e, r)
      : ((s = l[0]),
        a && (await s._set(o, a.toJSON())),
        await Promise.all(
          n.map(async (u) => {
            if (u !== s)
              try {
                await u._remove(o);
              } catch {}
          })
        ),
        new Ui(s, e, r));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function rv(t) {
  const e = t.toLowerCase();
  if (e.includes('opera/') || e.includes('opr/') || e.includes('opios/')) return 'Opera';
  if (NS(e)) return 'IEMobile';
  if (e.includes('msie') || e.includes('trident/')) return 'IE';
  if (e.includes('edge/')) return 'Edge';
  if (CS(e)) return 'Firefox';
  if (e.includes('silk/')) return 'Silk';
  if (xS(e)) return 'Blackberry';
  if (DS(e)) return 'Webos';
  if (pm(e)) return 'Safari';
  if ((e.includes('chrome/') || AS(e)) && !e.includes('edge/')) return 'Chrome';
  if (RS(e)) return 'Android';
  {
    const n = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
      r = t.match(n);
    if ((r == null ? void 0 : r.length) === 2) return r[1];
  }
  return 'Other';
}
function CS(t = dt()) {
  return /firefox\//i.test(t);
}
function pm(t = dt()) {
  const e = t.toLowerCase();
  return (
    e.includes('safari/') &&
    !e.includes('chrome/') &&
    !e.includes('crios/') &&
    !e.includes('android')
  );
}
function AS(t = dt()) {
  return /crios\//i.test(t);
}
function NS(t = dt()) {
  return /iemobile/i.test(t);
}
function RS(t = dt()) {
  return /android/i.test(t);
}
function xS(t = dt()) {
  return /blackberry/i.test(t);
}
function DS(t = dt()) {
  return /webos/i.test(t);
}
function cc(t = dt()) {
  return /iphone|ipad|ipod/i.test(t) || (/macintosh/i.test(t) && /mobile/i.test(t));
}
function yP(t = dt()) {
  var e;
  return cc(t) && !!(!((e = window.navigator) === null || e === void 0) && e.standalone);
}
function vP() {
  return zC() && document.documentMode === 10;
}
function PS(t = dt()) {
  return cc(t) || RS(t) || DS(t) || xS(t) || /windows phone/i.test(t) || NS(t);
}
function wP() {
  try {
    return !!(window && window !== window.top);
  } catch {
    return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function OS(t, e = []) {
  let n;
  switch (t) {
    case 'Browser':
      n = rv(dt());
      break;
    case 'Worker':
      n = `${rv(dt())}-${t}`;
      break;
    default:
      n = t;
  }
  const r = e.length ? e.join(',') : 'FirebaseCore-web';
  return `${n}/JsCore/${Fo}/${r}`;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class EP {
  constructor(e) {
    (this.auth = e), (this.queue = []);
  }
  pushCallback(e, n) {
    const r = (s) =>
      new Promise((o, a) => {
        try {
          const l = e(s);
          o(l);
        } catch (l) {
          a(l);
        }
      });
    (r.onAbort = n), this.queue.push(r);
    const i = this.queue.length - 1;
    return () => {
      this.queue[i] = () => Promise.resolve();
    };
  }
  async runMiddleware(e) {
    if (this.auth.currentUser === e) return;
    const n = [];
    try {
      for (const r of this.queue) await r(e), r.onAbort && n.push(r.onAbort);
    } catch (r) {
      n.reverse();
      for (const i of n)
        try {
          i();
        } catch {}
      throw this.auth._errorFactory.create('login-blocked', {
        originalMessage: r == null ? void 0 : r.message
      });
    }
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class SP {
  constructor(e, n, r) {
    (this.app = e),
      (this.heartbeatServiceProvider = n),
      (this.config = r),
      (this.currentUser = null),
      (this.emulatorConfig = null),
      (this.operations = Promise.resolve()),
      (this.authStateSubscription = new iv(this)),
      (this.idTokenSubscription = new iv(this)),
      (this.beforeStateQueue = new EP(this)),
      (this.redirectUser = null),
      (this.isProactiveRefreshEnabled = !1),
      (this._canInitEmulator = !0),
      (this._isInitialized = !1),
      (this._deleted = !1),
      (this._initializationPromise = null),
      (this._popupRedirectResolver = null),
      (this._errorFactory = vS),
      (this.lastNotifiedUid = void 0),
      (this.languageCode = null),
      (this.tenantId = null),
      (this.settings = { appVerificationDisabledForTesting: !1 }),
      (this.frameworks = []),
      (this.name = e.name),
      (this.clientVersion = r.sdkClientVersion);
  }
  _initializeWithPersistence(e, n) {
    return (
      n && (this._popupRedirectResolver = In(n)),
      (this._initializationPromise = this.queue(async () => {
        var r, i;
        if (
          !this._deleted &&
          ((this.persistenceManager = await Ui.create(this, e)), !this._deleted)
        ) {
          if (
            !((r = this._popupRedirectResolver) === null || r === void 0) &&
            r._shouldInitProactively
          )
            try {
              await this._popupRedirectResolver._initialize(this);
            } catch {}
          await this.initializeCurrentUser(n),
            (this.lastNotifiedUid =
              ((i = this.currentUser) === null || i === void 0 ? void 0 : i.uid) || null),
            !this._deleted && (this._isInitialized = !0);
        }
      })),
      this._initializationPromise
    );
  }
  async _onStorageEvent() {
    if (this._deleted) return;
    const e = await this.assertedPersistence.getCurrentUser();
    if (!(!this.currentUser && !e)) {
      if (this.currentUser && e && this.currentUser.uid === e.uid) {
        this._currentUser._assign(e), await this.currentUser.getIdToken();
        return;
      }
      await this._updateCurrentUser(e, !0);
    }
  }
  async initializeCurrentUser(e) {
    var n;
    const r = await this.assertedPersistence.getCurrentUser();
    let i = r,
      s = !1;
    if (e && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const o = (n = this.redirectUser) === null || n === void 0 ? void 0 : n._redirectEventId,
        a = i == null ? void 0 : i._redirectEventId,
        l = await this.tryRedirectSignIn(e);
      (!o || o === a) && l != null && l.user && ((i = l.user), (s = !0));
    }
    if (!i) return this.directlySetCurrentUser(null);
    if (!i._redirectEventId) {
      if (s)
        try {
          await this.beforeStateQueue.runMiddleware(i);
        } catch (o) {
          (i = r),
            this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(o));
        }
      return i ? this.reloadAndSetCurrentUserOrClear(i) : this.directlySetCurrentUser(null);
    }
    return (
      G(this._popupRedirectResolver, this, 'argument-error'),
      await this.getOrInitRedirectPersistenceManager(),
      this.redirectUser && this.redirectUser._redirectEventId === i._redirectEventId
        ? this.directlySetCurrentUser(i)
        : this.reloadAndSetCurrentUserOrClear(i)
    );
  }
  async tryRedirectSignIn(e) {
    let n = null;
    try {
      n = await this._popupRedirectResolver._completeRedirectFn(this, e, !0);
    } catch {
      await this._setRedirectUser(null);
    }
    return n;
  }
  async reloadAndSetCurrentUserOrClear(e) {
    try {
      await Bl(e);
    } catch (n) {
      if ((n == null ? void 0 : n.code) !== 'auth/network-request-failed')
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(e);
  }
  useDeviceLanguage() {
    this.languageCode = rP();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(e) {
    const n = e ? Tr(e) : null;
    return (
      n && G(n.auth.config.apiKey === this.config.apiKey, this, 'invalid-user-token'),
      this._updateCurrentUser(n && n._clone(this))
    );
  }
  async _updateCurrentUser(e, n = !1) {
    if (!this._deleted)
      return (
        e && G(this.tenantId === e.tenantId, this, 'tenant-id-mismatch'),
        n || (await this.beforeStateQueue.runMiddleware(e)),
        this.queue(async () => {
          await this.directlySetCurrentUser(e), this.notifyAuthListeners();
        })
      );
  }
  async signOut() {
    return (
      await this.beforeStateQueue.runMiddleware(null),
      (this.redirectPersistenceManager || this._popupRedirectResolver) &&
        (await this._setRedirectUser(null)),
      this._updateCurrentUser(null, !0)
    );
  }
  setPersistence(e) {
    return this.queue(async () => {
      await this.assertedPersistence.setPersistence(In(e));
    });
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(e) {
    this._errorFactory = new bo('auth', 'Firebase', e());
  }
  onAuthStateChanged(e, n, r) {
    return this.registerStateListener(this.authStateSubscription, e, n, r);
  }
  beforeAuthStateChanged(e, n) {
    return this.beforeStateQueue.pushCallback(e, n);
  }
  onIdTokenChanged(e, n, r) {
    return this.registerStateListener(this.idTokenSubscription, e, n, r);
  }
  toJSON() {
    var e;
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser: (e = this._currentUser) === null || e === void 0 ? void 0 : e.toJSON()
    };
  }
  async _setRedirectUser(e, n) {
    const r = await this.getOrInitRedirectPersistenceManager(n);
    return e === null ? r.removeCurrentUser() : r.setCurrentUser(e);
  }
  async getOrInitRedirectPersistenceManager(e) {
    if (!this.redirectPersistenceManager) {
      const n = (e && In(e)) || this._popupRedirectResolver;
      G(n, this, 'argument-error'),
        (this.redirectPersistenceManager = await Ui.create(
          this,
          [In(n._redirectPersistence)],
          'redirectUser'
        )),
        (this.redirectUser = await this.redirectPersistenceManager.getCurrentUser());
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(e) {
    var n, r;
    return (
      this._isInitialized && (await this.queue(async () => {})),
      ((n = this._currentUser) === null || n === void 0 ? void 0 : n._redirectEventId) === e
        ? this._currentUser
        : ((r = this.redirectUser) === null || r === void 0 ? void 0 : r._redirectEventId) === e
        ? this.redirectUser
        : null
    );
  }
  async _persistUserIfCurrent(e) {
    if (e === this.currentUser) return this.queue(async () => this.directlySetCurrentUser(e));
  }
  _notifyListenersIfCurrent(e) {
    e === this.currentUser && this.notifyAuthListeners();
  }
  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
  }
  _startProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !0),
      this.currentUser && this._currentUser._startProactiveRefresh();
  }
  _stopProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !1),
      this.currentUser && this._currentUser._stopProactiveRefresh();
  }
  get _currentUser() {
    return this.currentUser;
  }
  notifyAuthListeners() {
    var e, n;
    if (!this._isInitialized) return;
    this.idTokenSubscription.next(this.currentUser);
    const r =
      (n = (e = this.currentUser) === null || e === void 0 ? void 0 : e.uid) !== null &&
      n !== void 0
        ? n
        : null;
    this.lastNotifiedUid !== r &&
      ((this.lastNotifiedUid = r), this.authStateSubscription.next(this.currentUser));
  }
  registerStateListener(e, n, r, i) {
    if (this._deleted) return () => {};
    const s = typeof n == 'function' ? n : n.next.bind(n),
      o = this._isInitialized ? Promise.resolve() : this._initializationPromise;
    return (
      G(o, this, 'internal-error'),
      o.then(() => s(this.currentUser)),
      typeof n == 'function' ? e.addObserver(n, r, i) : e.addObserver(n)
    );
  }
  async directlySetCurrentUser(e) {
    this.currentUser && this.currentUser !== e && this._currentUser._stopProactiveRefresh(),
      e && this.isProactiveRefreshEnabled && e._startProactiveRefresh(),
      (this.currentUser = e),
      e
        ? await this.assertedPersistence.setCurrentUser(e)
        : await this.assertedPersistence.removeCurrentUser();
  }
  queue(e) {
    return (this.operations = this.operations.then(e, e)), this.operations;
  }
  get assertedPersistence() {
    return G(this.persistenceManager, this, 'internal-error'), this.persistenceManager;
  }
  _logFramework(e) {
    !e ||
      this.frameworks.includes(e) ||
      (this.frameworks.push(e),
      this.frameworks.sort(),
      (this.clientVersion = OS(this.config.clientPlatform, this._getFrameworks())));
  }
  _getFrameworks() {
    return this.frameworks;
  }
  async _getAdditionalHeaders() {
    var e;
    const n = { ['X-Client-Version']: this.clientVersion };
    this.app.options.appId && (n['X-Firebase-gmpid'] = this.app.options.appId);
    const r = await ((e = this.heartbeatServiceProvider.getImmediate({ optional: !0 })) === null ||
    e === void 0
      ? void 0
      : e.getHeartbeatsHeader());
    return r && (n['X-Firebase-Client'] = r), n;
  }
}
function hc(t) {
  return Tr(t);
}
class iv {
  constructor(e) {
    (this.auth = e), (this.observer = null), (this.addObserver = QC((n) => (this.observer = n)));
  }
  get next() {
    return G(this.observer, this.auth, 'internal-error'), this.observer.next.bind(this.observer);
  }
}
function _P(t, e, n) {
  const r = hc(t);
  G(r._canInitEmulator, r, 'emulator-config-failed'),
    G(/^https?:\/\//.test(e), r, 'invalid-emulator-scheme');
  const i = !!(n != null && n.disableWarnings),
    s = LS(e),
    { host: o, port: a } = TP(e),
    l = a === null ? '' : `:${a}`;
  (r.config.emulator = { url: `${s}//${o}${l}/` }),
    (r.settings.appVerificationDisabledForTesting = !0),
    (r.emulatorConfig = Object.freeze({
      host: o,
      port: a,
      protocol: s.replace(':', ''),
      options: Object.freeze({ disableWarnings: i })
    })),
    i || IP();
}
function LS(t) {
  const e = t.indexOf(':');
  return e < 0 ? '' : t.substr(0, e + 1);
}
function TP(t) {
  const e = LS(t),
    n = /(\/\/)?([^?#/]+)/.exec(t.substr(e.length));
  if (!n) return { host: '', port: null };
  const r = n[2].split('@').pop() || '',
    i = /^(\[[^\]]+\])(:|$)/.exec(r);
  if (i) {
    const s = i[1];
    return { host: s, port: sv(r.substr(s.length + 1)) };
  } else {
    const [s, o] = r.split(':');
    return { host: s, port: sv(o) };
  }
}
function sv(t) {
  if (!t) return null;
  const e = Number(t);
  return isNaN(e) ? null : e;
}
function IP() {
  function t() {
    const e = document.createElement('p'),
      n = e.style;
    (e.innerText = 'Running in emulator mode. Do not use with production credentials.'),
      (n.position = 'fixed'),
      (n.width = '100%'),
      (n.backgroundColor = '#ffffff'),
      (n.border = '.1em solid #000000'),
      (n.color = '#b50000'),
      (n.bottom = '0px'),
      (n.left = '0px'),
      (n.margin = '0px'),
      (n.zIndex = '10000'),
      (n.textAlign = 'center'),
      e.classList.add('firebase-emulator-warning'),
      document.body.appendChild(e);
  }
  typeof console < 'u' &&
    typeof console.info == 'function' &&
    console.info(
      'WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.'
    ),
    typeof window < 'u' &&
      typeof document < 'u' &&
      (document.readyState === 'loading' ? window.addEventListener('DOMContentLoaded', t) : t());
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $S {
  constructor(e, n) {
    (this.providerId = e), (this.signInMethod = n);
  }
  toJSON() {
    return Tn('not implemented');
  }
  _getIdTokenResponse(e) {
    return Tn('not implemented');
  }
  _linkToIdToken(e, n) {
    return Tn('not implemented');
  }
  _getReauthenticationResolver(e) {
    return Tn('not implemented');
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Vi(t, e) {
  return _S(t, 'POST', '/v1/accounts:signInWithIdp', ES(t, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const kP = 'http://localhost';
class ni extends $S {
  constructor() {
    super(...arguments), (this.pendingToken = null);
  }
  static _fromParams(e) {
    const n = new ni(e.providerId, e.signInMethod);
    return (
      e.idToken || e.accessToken
        ? (e.idToken && (n.idToken = e.idToken),
          e.accessToken && (n.accessToken = e.accessToken),
          e.nonce && !e.pendingToken && (n.nonce = e.nonce),
          e.pendingToken && (n.pendingToken = e.pendingToken))
        : e.oauthToken && e.oauthTokenSecret
        ? ((n.accessToken = e.oauthToken), (n.secret = e.oauthTokenSecret))
        : Ln('argument-error'),
      n
    );
  }
  toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod
    };
  }
  static fromJSON(e) {
    const n = typeof e == 'string' ? JSON.parse(e) : e,
      { providerId: r, signInMethod: i } = n,
      s = cm(n, ['providerId', 'signInMethod']);
    if (!r || !i) return null;
    const o = new ni(r, i);
    return (
      (o.idToken = s.idToken || void 0),
      (o.accessToken = s.accessToken || void 0),
      (o.secret = s.secret),
      (o.nonce = s.nonce),
      (o.pendingToken = s.pendingToken || null),
      o
    );
  }
  _getIdTokenResponse(e) {
    const n = this.buildRequest();
    return Vi(e, n);
  }
  _linkToIdToken(e, n) {
    const r = this.buildRequest();
    return (r.idToken = n), Vi(e, r);
  }
  _getReauthenticationResolver(e) {
    const n = this.buildRequest();
    return (n.autoCreate = !1), Vi(e, n);
  }
  buildRequest() {
    const e = { requestUri: kP, returnSecureToken: !0 };
    if (this.pendingToken) e.pendingToken = this.pendingToken;
    else {
      const n = {};
      this.idToken && (n.id_token = this.idToken),
        this.accessToken && (n.access_token = this.accessToken),
        this.secret && (n.oauth_token_secret = this.secret),
        (n.providerId = this.providerId),
        this.nonce && !this.pendingToken && (n.nonce = this.nonce),
        (e.postBody = Mo(n));
    }
    return e;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bS {
  constructor(e) {
    (this.providerId = e), (this.defaultLanguageCode = null), (this.customParameters = {});
  }
  setDefaultLanguage(e) {
    this.defaultLanguageCode = e;
  }
  setCustomParameters(e) {
    return (this.customParameters = e), this;
  }
  getCustomParameters() {
    return this.customParameters;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Zo extends bS {
  constructor() {
    super(...arguments), (this.scopes = []);
  }
  addScope(e) {
    return this.scopes.includes(e) || this.scopes.push(e), this;
  }
  getScopes() {
    return [...this.scopes];
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Wn extends Zo {
  constructor() {
    super('facebook.com');
  }
  static credential(e) {
    return ni._fromParams({
      providerId: Wn.PROVIDER_ID,
      signInMethod: Wn.FACEBOOK_SIGN_IN_METHOD,
      accessToken: e
    });
  }
  static credentialFromResult(e) {
    return Wn.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return Wn.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !('oauthAccessToken' in e) || !e.oauthAccessToken) return null;
    try {
      return Wn.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Wn.FACEBOOK_SIGN_IN_METHOD = 'facebook.com';
Wn.PROVIDER_ID = 'facebook.com';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class qn extends Zo {
  constructor() {
    super('google.com'), this.addScope('profile');
  }
  static credential(e, n) {
    return ni._fromParams({
      providerId: qn.PROVIDER_ID,
      signInMethod: qn.GOOGLE_SIGN_IN_METHOD,
      idToken: e,
      accessToken: n
    });
  }
  static credentialFromResult(e) {
    return qn.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return qn.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e) return null;
    const { oauthIdToken: n, oauthAccessToken: r } = e;
    if (!n && !r) return null;
    try {
      return qn.credential(n, r);
    } catch {
      return null;
    }
  }
}
qn.GOOGLE_SIGN_IN_METHOD = 'google.com';
qn.PROVIDER_ID = 'google.com';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Gn extends Zo {
  constructor() {
    super('github.com');
  }
  static credential(e) {
    return ni._fromParams({
      providerId: Gn.PROVIDER_ID,
      signInMethod: Gn.GITHUB_SIGN_IN_METHOD,
      accessToken: e
    });
  }
  static credentialFromResult(e) {
    return Gn.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return Gn.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !('oauthAccessToken' in e) || !e.oauthAccessToken) return null;
    try {
      return Gn.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Gn.GITHUB_SIGN_IN_METHOD = 'github.com';
Gn.PROVIDER_ID = 'github.com';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Qn extends Zo {
  constructor() {
    super('twitter.com');
  }
  static credential(e, n) {
    return ni._fromParams({
      providerId: Qn.PROVIDER_ID,
      signInMethod: Qn.TWITTER_SIGN_IN_METHOD,
      oauthToken: e,
      oauthTokenSecret: n
    });
  }
  static credentialFromResult(e) {
    return Qn.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return Qn.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e) return null;
    const { oauthAccessToken: n, oauthTokenSecret: r } = e;
    if (!n || !r) return null;
    try {
      return Qn.credential(n, r);
    } catch {
      return null;
    }
  }
}
Qn.TWITTER_SIGN_IN_METHOD = 'twitter.com';
Qn.PROVIDER_ID = 'twitter.com';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function CP(t, e) {
  return _S(t, 'POST', '/v1/accounts:signUp', ES(t, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ri {
  constructor(e) {
    (this.user = e.user),
      (this.providerId = e.providerId),
      (this._tokenResponse = e._tokenResponse),
      (this.operationType = e.operationType);
  }
  static async _fromIdTokenResponse(e, n, r, i = !1) {
    const s = await Kr._fromIdTokenResponse(e, r, i),
      o = ov(r);
    return new ri({ user: s, providerId: o, _tokenResponse: r, operationType: n });
  }
  static async _forOperation(e, n, r) {
    await e._updateTokensIfNecessary(r, !0);
    const i = ov(r);
    return new ri({ user: e, providerId: i, _tokenResponse: r, operationType: n });
  }
}
function ov(t) {
  return t.providerId ? t.providerId : 'phoneNumber' in t ? 'phone' : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Hl extends Mn {
  constructor(e, n, r, i) {
    var s;
    super(n.code, n.message),
      (this.operationType = r),
      (this.user = i),
      Object.setPrototypeOf(this, Hl.prototype),
      (this.customData = {
        appName: e.name,
        tenantId: (s = e.tenantId) !== null && s !== void 0 ? s : void 0,
        _serverResponse: n.customData._serverResponse,
        operationType: r
      });
  }
  static _fromErrorAndOperation(e, n, r, i) {
    return new Hl(e, n, r, i);
  }
}
function MS(t, e, n, r) {
  return (
    e === 'reauthenticate' ? n._getReauthenticationResolver(t) : n._getIdTokenResponse(t)
  ).catch((s) => {
    throw s.code === 'auth/multi-factor-auth-required' ? Hl._fromErrorAndOperation(t, s, e, r) : s;
  });
}
async function AP(t, e, n = !1) {
  const r = await Ro(t, e._linkToIdToken(t.auth, await t.getIdToken()), n);
  return ri._forOperation(t, 'link', r);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function NP(t, e, n = !1) {
  const { auth: r } = t,
    i = 'reauthenticate';
  try {
    const s = await Ro(t, MS(r, i, e, t), n);
    G(s.idToken, r, 'internal-error');
    const o = fm(s.idToken);
    G(o, r, 'internal-error');
    const { sub: a } = o;
    return G(t.uid === a, r, 'user-mismatch'), ri._forOperation(t, i, s);
  } catch (s) {
    throw ((s == null ? void 0 : s.code) === 'auth/user-not-found' && Ln(r, 'user-mismatch'), s);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function RP(t, e, n = !1) {
  const r = 'signIn',
    i = await MS(t, r, e),
    s = await ri._fromIdTokenResponse(t, r, i);
  return n || (await t._updateCurrentUser(s.user)), s;
}
async function xP(t, e, n) {
  const r = hc(t),
    i = await CP(r, { returnSecureToken: !0, email: e, password: n }),
    s = await ri._fromIdTokenResponse(r, 'signIn', i);
  return await r._updateCurrentUser(s.user), s;
}
function DP(t, e, n, r) {
  return Tr(t).onIdTokenChanged(e, n, r);
}
function PP(t, e, n) {
  return Tr(t).beforeAuthStateChanged(e, n);
}
function OP(t, e, n, r) {
  return Tr(t).onAuthStateChanged(e, n, r);
}
const Kl = '__sak';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class FS {
  constructor(e, n) {
    (this.storageRetriever = e), (this.type = n);
  }
  _isAvailable() {
    try {
      return this.storage
        ? (this.storage.setItem(Kl, '1'), this.storage.removeItem(Kl), Promise.resolve(!0))
        : Promise.resolve(!1);
    } catch {
      return Promise.resolve(!1);
    }
  }
  _set(e, n) {
    return this.storage.setItem(e, JSON.stringify(n)), Promise.resolve();
  }
  _get(e) {
    const n = this.storage.getItem(e);
    return Promise.resolve(n ? JSON.parse(n) : null);
  }
  _remove(e) {
    return this.storage.removeItem(e), Promise.resolve();
  }
  get storage() {
    return this.storageRetriever();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function LP() {
  const t = dt();
  return pm(t) || cc(t);
}
const $P = 1e3,
  bP = 10;
class US extends FS {
  constructor() {
    super(() => window.localStorage, 'LOCAL'),
      (this.boundEventHandler = (e, n) => this.onStorageEvent(e, n)),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.safariLocalStorageNotSynced = LP() && wP()),
      (this.fallbackToPolling = PS()),
      (this._shouldAllowMigration = !0);
  }
  forAllChangedKeys(e) {
    for (const n of Object.keys(this.listeners)) {
      const r = this.storage.getItem(n),
        i = this.localCache[n];
      r !== i && e(n, i, r);
    }
  }
  onStorageEvent(e, n = !1) {
    if (!e.key) {
      this.forAllChangedKeys((o, a, l) => {
        this.notifyListeners(o, l);
      });
      return;
    }
    const r = e.key;
    if ((n ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced)) {
      const o = this.storage.getItem(r);
      if (e.newValue !== o)
        e.newValue !== null ? this.storage.setItem(r, e.newValue) : this.storage.removeItem(r);
      else if (this.localCache[r] === e.newValue && !n) return;
    }
    const i = () => {
        const o = this.storage.getItem(r);
        (!n && this.localCache[r] === o) || this.notifyListeners(r, o);
      },
      s = this.storage.getItem(r);
    vP() && s !== e.newValue && e.newValue !== e.oldValue ? setTimeout(i, bP) : i();
  }
  notifyListeners(e, n) {
    this.localCache[e] = n;
    const r = this.listeners[e];
    if (r) for (const i of Array.from(r)) i(n && JSON.parse(n));
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(() => {
        this.forAllChangedKeys((e, n, r) => {
          this.onStorageEvent(
            new StorageEvent('storage', { key: e, oldValue: n, newValue: r }),
            !0
          );
        });
      }, $P));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  attachListener() {
    window.addEventListener('storage', this.boundEventHandler);
  }
  detachListener() {
    window.removeEventListener('storage', this.boundEventHandler);
  }
  _addListener(e, n) {
    Object.keys(this.listeners).length === 0 &&
      (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
      this.listeners[e] ||
        ((this.listeners[e] = new Set()), (this.localCache[e] = this.storage.getItem(e))),
      this.listeners[e].add(n);
  }
  _removeListener(e, n) {
    this.listeners[e] &&
      (this.listeners[e].delete(n), this.listeners[e].size === 0 && delete this.listeners[e]),
      Object.keys(this.listeners).length === 0 && (this.detachListener(), this.stopPolling());
  }
  async _set(e, n) {
    await super._set(e, n), (this.localCache[e] = JSON.stringify(n));
  }
  async _get(e) {
    const n = await super._get(e);
    return (this.localCache[e] = JSON.stringify(n)), n;
  }
  async _remove(e) {
    await super._remove(e), delete this.localCache[e];
  }
}
US.type = 'LOCAL';
const MP = US;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class VS extends FS {
  constructor() {
    super(() => window.sessionStorage, 'SESSION');
  }
  _addListener(e, n) {}
  _removeListener(e, n) {}
}
VS.type = 'SESSION';
const jS = VS;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function FP(t) {
  return Promise.all(
    t.map(async (e) => {
      try {
        return { fulfilled: !0, value: await e };
      } catch (n) {
        return { fulfilled: !1, reason: n };
      }
    })
  );
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class dc {
  constructor(e) {
    (this.eventTarget = e),
      (this.handlersMap = {}),
      (this.boundEventHandler = this.handleEvent.bind(this));
  }
  static _getInstance(e) {
    const n = this.receivers.find((i) => i.isListeningto(e));
    if (n) return n;
    const r = new dc(e);
    return this.receivers.push(r), r;
  }
  isListeningto(e) {
    return this.eventTarget === e;
  }
  async handleEvent(e) {
    const n = e,
      { eventId: r, eventType: i, data: s } = n.data,
      o = this.handlersMap[i];
    if (!(o != null && o.size)) return;
    n.ports[0].postMessage({ status: 'ack', eventId: r, eventType: i });
    const a = Array.from(o).map(async (u) => u(n.origin, s)),
      l = await FP(a);
    n.ports[0].postMessage({ status: 'done', eventId: r, eventType: i, response: l });
  }
  _subscribe(e, n) {
    Object.keys(this.handlersMap).length === 0 &&
      this.eventTarget.addEventListener('message', this.boundEventHandler),
      this.handlersMap[e] || (this.handlersMap[e] = new Set()),
      this.handlersMap[e].add(n);
  }
  _unsubscribe(e, n) {
    this.handlersMap[e] && n && this.handlersMap[e].delete(n),
      (!n || this.handlersMap[e].size === 0) && delete this.handlersMap[e],
      Object.keys(this.handlersMap).length === 0 &&
        this.eventTarget.removeEventListener('message', this.boundEventHandler);
  }
}
dc.receivers = [];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function mm(t = '', e = 10) {
  let n = '';
  for (let r = 0; r < e; r++) n += Math.floor(Math.random() * 10);
  return t + n;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class UP {
  constructor(e) {
    (this.target = e), (this.handlers = new Set());
  }
  removeMessageHandler(e) {
    e.messageChannel &&
      (e.messageChannel.port1.removeEventListener('message', e.onMessage),
      e.messageChannel.port1.close()),
      this.handlers.delete(e);
  }
  async _send(e, n, r = 50) {
    const i = typeof MessageChannel < 'u' ? new MessageChannel() : null;
    if (!i) throw new Error('connection_unavailable');
    let s, o;
    return new Promise((a, l) => {
      const u = mm('', 20);
      i.port1.start();
      const c = setTimeout(() => {
        l(new Error('unsupported_event'));
      }, r);
      (o = {
        messageChannel: i,
        onMessage(h) {
          const d = h;
          if (d.data.eventId === u)
            switch (d.data.status) {
              case 'ack':
                clearTimeout(c),
                  (s = setTimeout(() => {
                    l(new Error('timeout'));
                  }, 3e3));
                break;
              case 'done':
                clearTimeout(s), a(d.data.response);
                break;
              default:
                clearTimeout(c), clearTimeout(s), l(new Error('invalid_response'));
                break;
            }
        }
      }),
        this.handlers.add(o),
        i.port1.addEventListener('message', o.onMessage),
        this.target.postMessage({ eventType: e, eventId: u, data: n }, [i.port2]);
    }).finally(() => {
      o && this.removeMessageHandler(o);
    });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function fn() {
  return window;
}
function VP(t) {
  fn().location.href = t;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function zS() {
  return typeof fn().WorkerGlobalScope < 'u' && typeof fn().importScripts == 'function';
}
async function jP() {
  if (!(navigator != null && navigator.serviceWorker)) return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function zP() {
  var t;
  return (
    ((t = navigator == null ? void 0 : navigator.serviceWorker) === null || t === void 0
      ? void 0
      : t.controller) || null
  );
}
function BP() {
  return zS() ? self : null;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const BS = 'firebaseLocalStorageDb',
  HP = 1,
  Wl = 'firebaseLocalStorage',
  HS = 'fbase_key';
class ea {
  constructor(e) {
    this.request = e;
  }
  toPromise() {
    return new Promise((e, n) => {
      this.request.addEventListener('success', () => {
        e(this.request.result);
      }),
        this.request.addEventListener('error', () => {
          n(this.request.error);
        });
    });
  }
}
function fc(t, e) {
  return t.transaction([Wl], e ? 'readwrite' : 'readonly').objectStore(Wl);
}
function KP() {
  const t = indexedDB.deleteDatabase(BS);
  return new ea(t).toPromise();
}
function lf() {
  const t = indexedDB.open(BS, HP);
  return new Promise((e, n) => {
    t.addEventListener('error', () => {
      n(t.error);
    }),
      t.addEventListener('upgradeneeded', () => {
        const r = t.result;
        try {
          r.createObjectStore(Wl, { keyPath: HS });
        } catch (i) {
          n(i);
        }
      }),
      t.addEventListener('success', async () => {
        const r = t.result;
        r.objectStoreNames.contains(Wl) ? e(r) : (r.close(), await KP(), e(await lf()));
      });
  });
}
async function av(t, e, n) {
  const r = fc(t, !0).put({ [HS]: e, value: n });
  return new ea(r).toPromise();
}
async function WP(t, e) {
  const n = fc(t, !1).get(e),
    r = await new ea(n).toPromise();
  return r === void 0 ? null : r.value;
}
function lv(t, e) {
  const n = fc(t, !0).delete(e);
  return new ea(n).toPromise();
}
const qP = 800,
  GP = 3;
class KS {
  constructor() {
    (this.type = 'LOCAL'),
      (this._shouldAllowMigration = !0),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.pendingWrites = 0),
      (this.receiver = null),
      (this.sender = null),
      (this.serviceWorkerReceiverAvailable = !1),
      (this.activeServiceWorker = null),
      (this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(
        () => {},
        () => {}
      ));
  }
  async _openDb() {
    return this.db ? this.db : ((this.db = await lf()), this.db);
  }
  async _withRetries(e) {
    let n = 0;
    for (;;)
      try {
        const r = await this._openDb();
        return await e(r);
      } catch (r) {
        if (n++ > GP) throw r;
        this.db && (this.db.close(), (this.db = void 0));
      }
  }
  async initializeServiceWorkerMessaging() {
    return zS() ? this.initializeReceiver() : this.initializeSender();
  }
  async initializeReceiver() {
    (this.receiver = dc._getInstance(BP())),
      this.receiver._subscribe('keyChanged', async (e, n) => ({
        keyProcessed: (await this._poll()).includes(n.key)
      })),
      this.receiver._subscribe('ping', async (e, n) => ['keyChanged']);
  }
  async initializeSender() {
    var e, n;
    if (((this.activeServiceWorker = await jP()), !this.activeServiceWorker)) return;
    this.sender = new UP(this.activeServiceWorker);
    const r = await this.sender._send('ping', {}, 800);
    r &&
      !((e = r[0]) === null || e === void 0) &&
      e.fulfilled &&
      !((n = r[0]) === null || n === void 0) &&
      n.value.includes('keyChanged') &&
      (this.serviceWorkerReceiverAvailable = !0);
  }
  async notifyServiceWorker(e) {
    if (!(!this.sender || !this.activeServiceWorker || zP() !== this.activeServiceWorker))
      try {
        await this.sender._send(
          'keyChanged',
          { key: e },
          this.serviceWorkerReceiverAvailable ? 800 : 50
        );
      } catch {}
  }
  async _isAvailable() {
    try {
      if (!indexedDB) return !1;
      const e = await lf();
      return await av(e, Kl, '1'), await lv(e, Kl), !0;
    } catch {}
    return !1;
  }
  async _withPendingWrite(e) {
    this.pendingWrites++;
    try {
      await e();
    } finally {
      this.pendingWrites--;
    }
  }
  async _set(e, n) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((r) => av(r, e, n)),
        (this.localCache[e] = n),
        this.notifyServiceWorker(e)
      )
    );
  }
  async _get(e) {
    const n = await this._withRetries((r) => WP(r, e));
    return (this.localCache[e] = n), n;
  }
  async _remove(e) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((n) => lv(n, e)),
        delete this.localCache[e],
        this.notifyServiceWorker(e)
      )
    );
  }
  async _poll() {
    const e = await this._withRetries((i) => {
      const s = fc(i, !1).getAll();
      return new ea(s).toPromise();
    });
    if (!e) return [];
    if (this.pendingWrites !== 0) return [];
    const n = [],
      r = new Set();
    for (const { fbase_key: i, value: s } of e)
      r.add(i),
        JSON.stringify(this.localCache[i]) !== JSON.stringify(s) &&
          (this.notifyListeners(i, s), n.push(i));
    for (const i of Object.keys(this.localCache))
      this.localCache[i] && !r.has(i) && (this.notifyListeners(i, null), n.push(i));
    return n;
  }
  notifyListeners(e, n) {
    this.localCache[e] = n;
    const r = this.listeners[e];
    if (r) for (const i of Array.from(r)) i(n);
  }
  startPolling() {
    this.stopPolling(), (this.pollTimer = setInterval(async () => this._poll(), qP));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  _addListener(e, n) {
    Object.keys(this.listeners).length === 0 && this.startPolling(),
      this.listeners[e] || ((this.listeners[e] = new Set()), this._get(e)),
      this.listeners[e].add(n);
  }
  _removeListener(e, n) {
    this.listeners[e] &&
      (this.listeners[e].delete(n), this.listeners[e].size === 0 && delete this.listeners[e]),
      Object.keys(this.listeners).length === 0 && this.stopPolling();
  }
}
KS.type = 'LOCAL';
const QP = KS;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function XP() {
  var t, e;
  return (e =
    (t = document.getElementsByTagName('head')) === null || t === void 0 ? void 0 : t[0]) !==
    null && e !== void 0
    ? e
    : document;
}
function YP(t) {
  return new Promise((e, n) => {
    const r = document.createElement('script');
    r.setAttribute('src', t),
      (r.onload = e),
      (r.onerror = (i) => {
        const s = dn('internal-error');
        (s.customData = i), n(s);
      }),
      (r.type = 'text/javascript'),
      (r.charset = 'UTF-8'),
      XP().appendChild(r);
  });
}
function JP(t) {
  return `__${t}${Math.floor(Math.random() * 1e6)}`;
}
new Jo(3e4, 6e4);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ZP(t, e) {
  return e ? In(e) : (G(t._popupRedirectResolver, t, 'argument-error'), t._popupRedirectResolver);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class gm extends $S {
  constructor(e) {
    super('custom', 'custom'), (this.params = e);
  }
  _getIdTokenResponse(e) {
    return Vi(e, this._buildIdpRequest());
  }
  _linkToIdToken(e, n) {
    return Vi(e, this._buildIdpRequest(n));
  }
  _getReauthenticationResolver(e) {
    return Vi(e, this._buildIdpRequest());
  }
  _buildIdpRequest(e) {
    const n = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: !0,
      returnIdpCredential: !0
    };
    return e && (n.idToken = e), n;
  }
}
function eO(t) {
  return RP(t.auth, new gm(t), t.bypassAuthState);
}
function tO(t) {
  const { auth: e, user: n } = t;
  return G(n, e, 'internal-error'), NP(n, new gm(t), t.bypassAuthState);
}
async function nO(t) {
  const { auth: e, user: n } = t;
  return G(n, e, 'internal-error'), AP(n, new gm(t), t.bypassAuthState);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class WS {
  constructor(e, n, r, i, s = !1) {
    (this.auth = e),
      (this.resolver = r),
      (this.user = i),
      (this.bypassAuthState = s),
      (this.pendingPromise = null),
      (this.eventManager = null),
      (this.filter = Array.isArray(n) ? n : [n]);
  }
  execute() {
    return new Promise(async (e, n) => {
      this.pendingPromise = { resolve: e, reject: n };
      try {
        (this.eventManager = await this.resolver._initialize(this.auth)),
          await this.onExecution(),
          this.eventManager.registerConsumer(this);
      } catch (r) {
        this.reject(r);
      }
    });
  }
  async onAuthEvent(e) {
    const { urlResponse: n, sessionId: r, postBody: i, tenantId: s, error: o, type: a } = e;
    if (o) {
      this.reject(o);
      return;
    }
    const l = {
      auth: this.auth,
      requestUri: n,
      sessionId: r,
      tenantId: s || void 0,
      postBody: i || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState
    };
    try {
      this.resolve(await this.getIdpTask(a)(l));
    } catch (u) {
      this.reject(u);
    }
  }
  onError(e) {
    this.reject(e);
  }
  getIdpTask(e) {
    switch (e) {
      case 'signInViaPopup':
      case 'signInViaRedirect':
        return eO;
      case 'linkViaPopup':
      case 'linkViaRedirect':
        return nO;
      case 'reauthViaPopup':
      case 'reauthViaRedirect':
        return tO;
      default:
        Ln(this.auth, 'internal-error');
    }
  }
  resolve(e) {
    $n(this.pendingPromise, 'Pending promise was never set'),
      this.pendingPromise.resolve(e),
      this.unregisterAndCleanUp();
  }
  reject(e) {
    $n(this.pendingPromise, 'Pending promise was never set'),
      this.pendingPromise.reject(e),
      this.unregisterAndCleanUp();
  }
  unregisterAndCleanUp() {
    this.eventManager && this.eventManager.unregisterConsumer(this),
      (this.pendingPromise = null),
      this.cleanUp();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const rO = new Jo(2e3, 1e4);
class ki extends WS {
  constructor(e, n, r, i, s) {
    super(e, n, i, s),
      (this.provider = r),
      (this.authWindow = null),
      (this.pollId = null),
      ki.currentPopupAction && ki.currentPopupAction.cancel(),
      (ki.currentPopupAction = this);
  }
  async executeNotNull() {
    const e = await this.execute();
    return G(e, this.auth, 'internal-error'), e;
  }
  async onExecution() {
    $n(this.filter.length === 1, 'Popup operations only handle one event');
    const e = mm();
    (this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], e)),
      (this.authWindow.associatedEvent = e),
      this.resolver._originValidation(this.auth).catch((n) => {
        this.reject(n);
      }),
      this.resolver._isIframeWebStorageSupported(this.auth, (n) => {
        n || this.reject(dn(this.auth, 'web-storage-unsupported'));
      }),
      this.pollUserCancellation();
  }
  get eventId() {
    var e;
    return ((e = this.authWindow) === null || e === void 0 ? void 0 : e.associatedEvent) || null;
  }
  cancel() {
    this.reject(dn(this.auth, 'cancelled-popup-request'));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(),
      this.pollId && window.clearTimeout(this.pollId),
      (this.authWindow = null),
      (this.pollId = null),
      (ki.currentPopupAction = null);
  }
  pollUserCancellation() {
    const e = () => {
      var n, r;
      if (
        !(
          (r = (n = this.authWindow) === null || n === void 0 ? void 0 : n.window) === null ||
          r === void 0
        ) &&
        r.closed
      ) {
        this.pollId = window.setTimeout(() => {
          (this.pollId = null), this.reject(dn(this.auth, 'popup-closed-by-user'));
        }, 2e3);
        return;
      }
      this.pollId = window.setTimeout(e, rO.get());
    };
    e();
  }
}
ki.currentPopupAction = null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const iO = 'pendingRedirect',
  Wa = new Map();
class sO extends WS {
  constructor(e, n, r = !1) {
    super(
      e,
      ['signInViaRedirect', 'linkViaRedirect', 'reauthViaRedirect', 'unknown'],
      n,
      void 0,
      r
    ),
      (this.eventId = null);
  }
  async execute() {
    let e = Wa.get(this.auth._key());
    if (!e) {
      try {
        const r = (await oO(this.resolver, this.auth)) ? await super.execute() : null;
        e = () => Promise.resolve(r);
      } catch (n) {
        e = () => Promise.reject(n);
      }
      Wa.set(this.auth._key(), e);
    }
    return this.bypassAuthState || Wa.set(this.auth._key(), () => Promise.resolve(null)), e();
  }
  async onAuthEvent(e) {
    if (e.type === 'signInViaRedirect') return super.onAuthEvent(e);
    if (e.type === 'unknown') {
      this.resolve(null);
      return;
    }
    if (e.eventId) {
      const n = await this.auth._redirectUserForId(e.eventId);
      if (n) return (this.user = n), super.onAuthEvent(e);
      this.resolve(null);
    }
  }
  async onExecution() {}
  cleanUp() {}
}
async function oO(t, e) {
  const n = uO(e),
    r = lO(t);
  if (!(await r._isAvailable())) return !1;
  const i = (await r._get(n)) === 'true';
  return await r._remove(n), i;
}
function aO(t, e) {
  Wa.set(t._key(), e);
}
function lO(t) {
  return In(t._redirectPersistence);
}
function uO(t) {
  return Ka(iO, t.config.apiKey, t.name);
}
async function cO(t, e, n = !1) {
  const r = hc(t),
    i = ZP(r, e),
    o = await new sO(r, i, n).execute();
  return (
    o &&
      !n &&
      (delete o.user._redirectEventId,
      await r._persistUserIfCurrent(o.user),
      await r._setRedirectUser(null, e)),
    o
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const hO = 10 * 60 * 1e3;
class dO {
  constructor(e) {
    (this.auth = e),
      (this.cachedEventUids = new Set()),
      (this.consumers = new Set()),
      (this.queuedRedirectEvent = null),
      (this.hasHandledPotentialRedirect = !1),
      (this.lastProcessedEventTime = Date.now());
  }
  registerConsumer(e) {
    this.consumers.add(e),
      this.queuedRedirectEvent &&
        this.isEventForConsumer(this.queuedRedirectEvent, e) &&
        (this.sendToConsumer(this.queuedRedirectEvent, e),
        this.saveEventToCache(this.queuedRedirectEvent),
        (this.queuedRedirectEvent = null));
  }
  unregisterConsumer(e) {
    this.consumers.delete(e);
  }
  onEvent(e) {
    if (this.hasEventBeenHandled(e)) return !1;
    let n = !1;
    return (
      this.consumers.forEach((r) => {
        this.isEventForConsumer(e, r) &&
          ((n = !0), this.sendToConsumer(e, r), this.saveEventToCache(e));
      }),
      this.hasHandledPotentialRedirect ||
        !fO(e) ||
        ((this.hasHandledPotentialRedirect = !0), n || ((this.queuedRedirectEvent = e), (n = !0))),
      n
    );
  }
  sendToConsumer(e, n) {
    var r;
    if (e.error && !qS(e)) {
      const i =
        ((r = e.error.code) === null || r === void 0 ? void 0 : r.split('auth/')[1]) ||
        'internal-error';
      n.onError(dn(this.auth, i));
    } else n.onAuthEvent(e);
  }
  isEventForConsumer(e, n) {
    const r = n.eventId === null || (!!e.eventId && e.eventId === n.eventId);
    return n.filter.includes(e.type) && r;
  }
  hasEventBeenHandled(e) {
    return (
      Date.now() - this.lastProcessedEventTime >= hO && this.cachedEventUids.clear(),
      this.cachedEventUids.has(uv(e))
    );
  }
  saveEventToCache(e) {
    this.cachedEventUids.add(uv(e)), (this.lastProcessedEventTime = Date.now());
  }
}
function uv(t) {
  return [t.type, t.eventId, t.sessionId, t.tenantId].filter((e) => e).join('-');
}
function qS({ type: t, error: e }) {
  return t === 'unknown' && (e == null ? void 0 : e.code) === 'auth/no-auth-event';
}
function fO(t) {
  switch (t.type) {
    case 'signInViaRedirect':
    case 'linkViaRedirect':
    case 'reauthViaRedirect':
      return !0;
    case 'unknown':
      return qS(t);
    default:
      return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function pO(t, e = {}) {
  return uc(t, 'GET', '/v1/projects', e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const mO = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
  gO = /^https?/;
async function yO(t) {
  if (t.config.emulator) return;
  const { authorizedDomains: e } = await pO(t);
  for (const n of e)
    try {
      if (vO(n)) return;
    } catch {}
  Ln(t, 'unauthorized-domain');
}
function vO(t) {
  const e = af(),
    { protocol: n, hostname: r } = new URL(e);
  if (t.startsWith('chrome-extension://')) {
    const o = new URL(t);
    return o.hostname === '' && r === ''
      ? n === 'chrome-extension:' &&
          t.replace('chrome-extension://', '') === e.replace('chrome-extension://', '')
      : n === 'chrome-extension:' && o.hostname === r;
  }
  if (!gO.test(n)) return !1;
  if (mO.test(t)) return r === t;
  const i = t.replace(/\./g, '\\.');
  return new RegExp('^(.+\\.' + i + '|' + i + ')$', 'i').test(r);
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const wO = new Jo(3e4, 6e4);
function cv() {
  const t = fn().___jsl;
  if (t != null && t.H) {
    for (const e of Object.keys(t.H))
      if (
        ((t.H[e].r = t.H[e].r || []), (t.H[e].L = t.H[e].L || []), (t.H[e].r = [...t.H[e].L]), t.CP)
      )
        for (let n = 0; n < t.CP.length; n++) t.CP[n] = null;
  }
}
function EO(t) {
  return new Promise((e, n) => {
    var r, i, s;
    function o() {
      cv(),
        gapi.load('gapi.iframes', {
          callback: () => {
            e(gapi.iframes.getContext());
          },
          ontimeout: () => {
            cv(), n(dn(t, 'network-request-failed'));
          },
          timeout: wO.get()
        });
    }
    if (
      !(
        (i = (r = fn().gapi) === null || r === void 0 ? void 0 : r.iframes) === null || i === void 0
      ) &&
      i.Iframe
    )
      e(gapi.iframes.getContext());
    else if (!((s = fn().gapi) === null || s === void 0) && s.load) o();
    else {
      const a = JP('iframefcb');
      return (
        (fn()[a] = () => {
          gapi.load ? o() : n(dn(t, 'network-request-failed'));
        }),
        YP(`https://apis.google.com/js/api.js?onload=${a}`).catch((l) => n(l))
      );
    }
  }).catch((e) => {
    throw ((qa = null), e);
  });
}
let qa = null;
function SO(t) {
  return (qa = qa || EO(t)), qa;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const _O = new Jo(5e3, 15e3),
  TO = '__/auth/iframe',
  IO = 'emulator/auth/iframe',
  kO = {
    style: { position: 'absolute', top: '-100px', width: '1px', height: '1px' },
    'aria-hidden': 'true',
    tabindex: '-1'
  },
  CO = new Map([
    ['identitytoolkit.googleapis.com', 'p'],
    ['staging-identitytoolkit.sandbox.googleapis.com', 's'],
    ['test-identitytoolkit.sandbox.googleapis.com', 't']
  ]);
function AO(t) {
  const e = t.config;
  G(e.authDomain, t, 'auth-domain-config-required');
  const n = e.emulator ? dm(e, IO) : `https://${t.config.authDomain}/${TO}`,
    r = { apiKey: e.apiKey, appName: t.name, v: Fo },
    i = CO.get(t.config.apiHost);
  i && (r.eid = i);
  const s = t._getFrameworks();
  return s.length && (r.fw = s.join(',')), `${n}?${Mo(r).slice(1)}`;
}
async function NO(t) {
  const e = await SO(t),
    n = fn().gapi;
  return (
    G(n, t, 'internal-error'),
    e.open(
      {
        where: document.body,
        url: AO(t),
        messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: kO,
        dontclear: !0
      },
      (r) =>
        new Promise(async (i, s) => {
          await r.restyle({ setHideOnLeave: !1 });
          const o = dn(t, 'network-request-failed'),
            a = fn().setTimeout(() => {
              s(o);
            }, _O.get());
          function l() {
            fn().clearTimeout(a), i(r);
          }
          r.ping(l).then(l, () => {
            s(o);
          });
        })
    )
  );
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const RO = { location: 'yes', resizable: 'yes', statusbar: 'yes', toolbar: 'no' },
  xO = 500,
  DO = 600,
  PO = '_blank',
  OO = 'http://localhost';
class hv {
  constructor(e) {
    (this.window = e), (this.associatedEvent = null);
  }
  close() {
    if (this.window)
      try {
        this.window.close();
      } catch {}
  }
}
function LO(t, e, n, r = xO, i = DO) {
  const s = Math.max((window.screen.availHeight - i) / 2, 0).toString(),
    o = Math.max((window.screen.availWidth - r) / 2, 0).toString();
  let a = '';
  const l = Object.assign(Object.assign({}, RO), {
      width: r.toString(),
      height: i.toString(),
      top: s,
      left: o
    }),
    u = dt().toLowerCase();
  n && (a = AS(u) ? PO : n), CS(u) && ((e = e || OO), (l.scrollbars = 'yes'));
  const c = Object.entries(l).reduce((d, [m, y]) => `${d}${m}=${y},`, '');
  if (yP(u) && a !== '_self') return $O(e || '', a), new hv(null);
  const h = window.open(e || '', a, c);
  G(h, t, 'popup-blocked');
  try {
    h.focus();
  } catch {}
  return new hv(h);
}
function $O(t, e) {
  const n = document.createElement('a');
  (n.href = t), (n.target = e);
  const r = document.createEvent('MouseEvent');
  r.initMouseEvent('click', !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null),
    n.dispatchEvent(r);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const bO = '__/auth/handler',
  MO = 'emulator/auth/handler';
function dv(t, e, n, r, i, s) {
  G(t.config.authDomain, t, 'auth-domain-config-required'),
    G(t.config.apiKey, t, 'invalid-api-key');
  const o = {
    apiKey: t.config.apiKey,
    appName: t.name,
    authType: n,
    redirectUrl: r,
    v: Fo,
    eventId: i
  };
  if (e instanceof bS) {
    e.setDefaultLanguage(t.languageCode),
      (o.providerId = e.providerId || ''),
      GC(e.getCustomParameters()) || (o.customParameters = JSON.stringify(e.getCustomParameters()));
    for (const [l, u] of Object.entries(s || {})) o[l] = u;
  }
  if (e instanceof Zo) {
    const l = e.getScopes().filter((u) => u !== '');
    l.length > 0 && (o.scopes = l.join(','));
  }
  t.tenantId && (o.tid = t.tenantId);
  const a = o;
  for (const l of Object.keys(a)) a[l] === void 0 && delete a[l];
  return `${FO(t)}?${Mo(a).slice(1)}`;
}
function FO({ config: t }) {
  return t.emulator ? dm(t, MO) : `https://${t.authDomain}/${bO}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const vh = 'webStorageSupport';
class UO {
  constructor() {
    (this.eventManagers = {}),
      (this.iframes = {}),
      (this.originValidationPromises = {}),
      (this._redirectPersistence = jS),
      (this._completeRedirectFn = cO),
      (this._overrideRedirectResult = aO);
  }
  async _openPopup(e, n, r, i) {
    var s;
    $n(
      (s = this.eventManagers[e._key()]) === null || s === void 0 ? void 0 : s.manager,
      '_initialize() not called before _openPopup()'
    );
    const o = dv(e, n, r, af(), i);
    return LO(e, o, mm());
  }
  async _openRedirect(e, n, r, i) {
    return await this._originValidation(e), VP(dv(e, n, r, af(), i)), new Promise(() => {});
  }
  _initialize(e) {
    const n = e._key();
    if (this.eventManagers[n]) {
      const { manager: i, promise: s } = this.eventManagers[n];
      return i ? Promise.resolve(i) : ($n(s, 'If manager is not set, promise should be'), s);
    }
    const r = this.initAndGetManager(e);
    return (
      (this.eventManagers[n] = { promise: r }),
      r.catch(() => {
        delete this.eventManagers[n];
      }),
      r
    );
  }
  async initAndGetManager(e) {
    const n = await NO(e),
      r = new dO(e);
    return (
      n.register(
        'authEvent',
        (i) => (
          G(i == null ? void 0 : i.authEvent, e, 'invalid-auth-event'),
          { status: r.onEvent(i.authEvent) ? 'ACK' : 'ERROR' }
        ),
        gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
      ),
      (this.eventManagers[e._key()] = { manager: r }),
      (this.iframes[e._key()] = n),
      r
    );
  }
  _isIframeWebStorageSupported(e, n) {
    this.iframes[e._key()].send(
      vh,
      { type: vh },
      (i) => {
        var s;
        const o = (s = i == null ? void 0 : i[0]) === null || s === void 0 ? void 0 : s[vh];
        o !== void 0 && n(!!o), Ln(e, 'internal-error');
      },
      gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
    );
  }
  _originValidation(e) {
    const n = e._key();
    return (
      this.originValidationPromises[n] || (this.originValidationPromises[n] = yO(e)),
      this.originValidationPromises[n]
    );
  }
  get _shouldInitProactively() {
    return PS() || pm() || cc();
  }
}
const VO = UO;
var fv = '@firebase/auth',
  pv = '0.21.4';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class jO {
  constructor(e) {
    (this.auth = e), (this.internalListeners = new Map());
  }
  getUid() {
    var e;
    return (
      this.assertAuthConfigured(),
      ((e = this.auth.currentUser) === null || e === void 0 ? void 0 : e.uid) || null
    );
  }
  async getToken(e) {
    return (
      this.assertAuthConfigured(),
      await this.auth._initializationPromise,
      this.auth.currentUser ? { accessToken: await this.auth.currentUser.getIdToken(e) } : null
    );
  }
  addAuthTokenListener(e) {
    if ((this.assertAuthConfigured(), this.internalListeners.has(e))) return;
    const n = this.auth.onIdTokenChanged((r) => {
      e((r == null ? void 0 : r.stsTokenManager.accessToken) || null);
    });
    this.internalListeners.set(e, n), this.updateProactiveRefresh();
  }
  removeAuthTokenListener(e) {
    this.assertAuthConfigured();
    const n = this.internalListeners.get(e);
    n && (this.internalListeners.delete(e), n(), this.updateProactiveRefresh());
  }
  assertAuthConfigured() {
    G(this.auth._initializationPromise, 'dependent-sdk-initialized-before-auth');
  }
  updateProactiveRefresh() {
    this.internalListeners.size > 0
      ? this.auth._startProactiveRefresh()
      : this.auth._stopProactiveRefresh();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function zO(t) {
  switch (t) {
    case 'Node':
      return 'node';
    case 'ReactNative':
      return 'rn';
    case 'Worker':
      return 'webworker';
    case 'Cordova':
      return 'cordova';
    default:
      return;
  }
}
function BO(t) {
  Zi(
    new Jr(
      'auth',
      (e, { options: n }) => {
        const r = e.getProvider('app').getImmediate(),
          i = e.getProvider('heartbeat'),
          { apiKey: s, authDomain: o } = r.options;
        return ((a, l) => {
          G(s && !s.includes(':'), 'invalid-api-key', { appName: a.name }),
            G(!(o != null && o.includes(':')), 'argument-error', { appName: a.name });
          const u = {
              apiKey: s,
              authDomain: o,
              clientPlatform: t,
              apiHost: 'identitytoolkit.googleapis.com',
              tokenApiHost: 'securetoken.googleapis.com',
              apiScheme: 'https',
              sdkClientVersion: OS(t)
            },
            c = new SP(a, l, u);
          return eP(c, n), c;
        })(r, i);
      },
      'PUBLIC'
    )
      .setInstantiationMode('EXPLICIT')
      .setInstanceCreatedCallback((e, n, r) => {
        e.getProvider('auth-internal').initialize();
      })
  ),
    Zi(
      new Jr(
        'auth-internal',
        (e) => {
          const n = hc(e.getProvider('auth').getImmediate());
          return ((r) => new jO(r))(n);
        },
        'PRIVATE'
      ).setInstantiationMode('EXPLICIT')
    ),
    fr(fv, pv, zO(t)),
    fr(fv, pv, 'esm2017');
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const HO = 5 * 60,
  KO = m1('authIdTokenMaxAge') || HO;
let mv = null;
const WO = (t) => async (e) => {
  const n = e && (await e.getIdTokenResult()),
    r = n && (new Date().getTime() - Date.parse(n.issuedAtTime)) / 1e3;
  if (r && r > KO) return;
  const i = n == null ? void 0 : n.token;
  mv !== i &&
    ((mv = i),
    await fetch(t, {
      method: i ? 'POST' : 'DELETE',
      headers: i ? { Authorization: `Bearer ${i}` } : {}
    }));
};
function qO(t = w1()) {
  const e = Ip(t, 'auth');
  if (e.isInitialized()) return e.getImmediate();
  const n = ZD(t, { popupRedirectResolver: VO, persistence: [QP, MP, jS] }),
    r = m1('authTokenSyncURL');
  if (r) {
    const s = WO(r);
    PP(n, s, () => s(n.currentUser)), DP(n, (o) => s(o));
  }
  const i = p1('auth');
  return i && _P(n, `http://${i}`), n;
}
BO('Browser');
const GO = {
    apiKey: 'AIzaSyATow4W6K0muvDxEQkIiXL3y7FdjuW2wP8',
    authDomain: 'testmd-test.firebaseapp.com',
    databaseURL: 'https://testmd-test-default-rtdb.europe-west1.firebasedatabase.app/',
    projectId: 'testmd-test',
    storageBucket: 'testmd-test.appspot.com',
    messagingSenderId: '280000667878',
    appId: '1:280000667878:web:29d4522bed0ae269f1db27'
  },
  GS = v1(GO),
  QO = FD(GS),
  QS = qO(GS),
  uf = n1('data/fetchData', async () => {
    const t = [];
    try {
      return (
        (await XD(bD(QO, 'test_data'))).forEach((n) => {
          t.push({ id: n.id, ...n.data() });
        }),
        t
      );
    } catch (e) {
      console.log(e);
    }
    return t;
  });
n1('data/fetchSignedInUser', async () => {
  const t = [];
  try {
    OP(QS, (e) => (e ? t.push(e) : console.log('User is not signed in'), t));
  } catch (e) {
    console.log(e);
  }
  return t;
});
const XO = Ok({
    name: 'data',
    initialState: { data: [], isLoading: !1, hasError: !1 },
    reducers: { setData: (t, e) => ({ ...t, ...e.payload }) },
    extraReducers(t) {
      t.addCase(uf.pending, (e, n) => {
        e.isLoading = !0;
      }),
        t.addCase(uf.rejected, (e, n) => {
          (e.hasError = !0), (e.isLoading = !1);
        });
    }
  }),
  YO = XO.reducer,
  JO = Jw({ globalState: YO }),
  ZO = Rk({ reducer: JO }),
  eL = ({ children: t }) => De(IC, { store: ZO, children: t });
/**
 * @remix-run/router v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ql() {
  return (
    (ql = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    ql.apply(this, arguments)
  );
}
var Zn;
(function (t) {
  (t.Pop = 'POP'), (t.Push = 'PUSH'), (t.Replace = 'REPLACE');
})(Zn || (Zn = {}));
const gv = 'popstate';
function tL(t) {
  t === void 0 && (t = {});
  function e(r, i) {
    let { pathname: s, search: o, hash: a } = r.location;
    return cf(
      '',
      { pathname: s, search: o, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || 'default'
    );
  }
  function n(r, i) {
    return typeof i == 'string' ? i : XS(i);
  }
  return rL(e, n, null, t);
}
function At(t, e) {
  if (t === !1 || t === null || typeof t > 'u') throw new Error(e);
}
function nL() {
  return Math.random().toString(36).substr(2, 8);
}
function yv(t, e) {
  return { usr: t.state, key: t.key, idx: e };
}
function cf(t, e, n, r) {
  return (
    n === void 0 && (n = null),
    ql(
      { pathname: typeof t == 'string' ? t : t.pathname, search: '', hash: '' },
      typeof e == 'string' ? pc(e) : e,
      { state: n, key: (e && e.key) || r || nL() }
    )
  );
}
function XS(t) {
  let { pathname: e = '/', search: n = '', hash: r = '' } = t;
  return (
    n && n !== '?' && (e += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (e += r.charAt(0) === '#' ? r : '#' + r),
    e
  );
}
function pc(t) {
  let e = {};
  if (t) {
    let n = t.indexOf('#');
    n >= 0 && ((e.hash = t.substr(n)), (t = t.substr(0, n)));
    let r = t.indexOf('?');
    r >= 0 && ((e.search = t.substr(r)), (t = t.substr(0, r))), t && (e.pathname = t);
  }
  return e;
}
function rL(t, e, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: s = !1 } = r,
    o = i.history,
    a = Zn.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), o.replaceState(ql({}, o.state, { idx: u }), ''));
  function c() {
    return (o.state || { idx: null }).idx;
  }
  function h() {
    a = Zn.Pop;
    let S = c(),
      p = S == null ? null : S - u;
    (u = S), l && l({ action: a, location: v.location, delta: p });
  }
  function d(S, p) {
    a = Zn.Push;
    let f = cf(v.location, S, p);
    n && n(f, S), (u = c() + 1);
    let g = yv(f, u),
      E = v.createHref(f);
    try {
      o.pushState(g, '', E);
    } catch {
      i.location.assign(E);
    }
    s && l && l({ action: a, location: v.location, delta: 1 });
  }
  function m(S, p) {
    a = Zn.Replace;
    let f = cf(v.location, S, p);
    n && n(f, S), (u = c());
    let g = yv(f, u),
      E = v.createHref(f);
    o.replaceState(g, '', E), s && l && l({ action: a, location: v.location, delta: 0 });
  }
  function y(S) {
    let p = i.location.origin !== 'null' ? i.location.origin : i.location.href,
      f = typeof S == 'string' ? S : XS(S);
    return (
      At(p, 'No window.location.(origin|href) available to create URL for href: ' + f),
      new URL(f, p)
    );
  }
  let v = {
    get action() {
      return a;
    },
    get location() {
      return t(i, o);
    },
    listen(S) {
      if (l) throw new Error('A history only accepts one active listener');
      return (
        i.addEventListener(gv, h),
        (l = S),
        () => {
          i.removeEventListener(gv, h), (l = null);
        }
      );
    },
    createHref(S) {
      return e(i, S);
    },
    createURL: y,
    encodeLocation(S) {
      let p = y(S);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: d,
    replace: m,
    go(S) {
      return o.go(S);
    }
  };
  return v;
}
var vv;
(function (t) {
  (t.data = 'data'), (t.deferred = 'deferred'), (t.redirect = 'redirect'), (t.error = 'error');
})(vv || (vv = {}));
function iL(t, e, n) {
  n === void 0 && (n = '/');
  let r = typeof e == 'string' ? pc(e) : e,
    i = ZS(r.pathname || '/', n);
  if (i == null) return null;
  let s = YS(t);
  sL(s);
  let o = null;
  for (let a = 0; o == null && a < s.length; ++a) o = pL(s[a], yL(i));
  return o;
}
function YS(t, e, n, r) {
  e === void 0 && (e = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let i = (s, o, a) => {
    let l = {
      relativePath: a === void 0 ? s.path || '' : a,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: o,
      route: s
    };
    l.relativePath.startsWith('/') &&
      (At(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = ji([r, l.relativePath]),
      c = n.concat(l);
    s.children &&
      s.children.length > 0 &&
      (At(
        s.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + u + '".')
      ),
      YS(s.children, e, c, u)),
      !(s.path == null && !s.index) && e.push({ path: u, score: dL(u, s.index), routesMeta: c });
  };
  return (
    t.forEach((s, o) => {
      var a;
      if (s.path === '' || !((a = s.path) != null && a.includes('?'))) i(s, o);
      else for (let l of JS(s.path)) i(s, o, l);
    }),
    e
  );
}
function JS(t) {
  let e = t.split('/');
  if (e.length === 0) return [];
  let [n, ...r] = e,
    i = n.endsWith('?'),
    s = n.replace(/\?$/, '');
  if (r.length === 0) return i ? [s, ''] : [s];
  let o = JS(r.join('/')),
    a = [];
  return (
    a.push(...o.map((l) => (l === '' ? s : [s, l].join('/')))),
    i && a.push(...o),
    a.map((l) => (t.startsWith('/') && l === '' ? '/' : l))
  );
}
function sL(t) {
  t.sort((e, n) =>
    e.score !== n.score
      ? n.score - e.score
      : fL(
          e.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const oL = /^:\w+$/,
  aL = 3,
  lL = 2,
  uL = 1,
  cL = 10,
  hL = -2,
  wv = (t) => t === '*';
function dL(t, e) {
  let n = t.split('/'),
    r = n.length;
  return (
    n.some(wv) && (r += hL),
    e && (r += lL),
    n.filter((i) => !wv(i)).reduce((i, s) => i + (oL.test(s) ? aL : s === '' ? uL : cL), r)
  );
}
function fL(t, e) {
  return t.length === e.length && t.slice(0, -1).every((r, i) => r === e[i])
    ? t[t.length - 1] - e[e.length - 1]
    : 0;
}
function pL(t, e) {
  let { routesMeta: n } = t,
    r = {},
    i = '/',
    s = [];
  for (let o = 0; o < n.length; ++o) {
    let a = n[o],
      l = o === n.length - 1,
      u = i === '/' ? e : e.slice(i.length) || '/',
      c = mL({ path: a.relativePath, caseSensitive: a.caseSensitive, end: l }, u);
    if (!c) return null;
    Object.assign(r, c.params);
    let h = a.route;
    s.push({
      params: r,
      pathname: ji([i, c.pathname]),
      pathnameBase: wL(ji([i, c.pathnameBase])),
      route: h
    }),
      c.pathnameBase !== '/' && (i = ji([i, c.pathnameBase]));
  }
  return s;
}
function mL(t, e) {
  typeof t == 'string' && (t = { path: t, caseSensitive: !1, end: !0 });
  let [n, r] = gL(t.path, t.caseSensitive, t.end),
    i = e.match(n);
  if (!i) return null;
  let s = i[0],
    o = s.replace(/(.)\/+$/, '$1'),
    a = i.slice(1);
  return {
    params: r.reduce((u, c, h) => {
      if (c === '*') {
        let d = a[h] || '';
        o = s.slice(0, s.length - d.length).replace(/(.)\/+$/, '$1');
      }
      return (u[c] = vL(a[h] || '', c)), u;
    }, {}),
    pathname: s,
    pathnameBase: o,
    pattern: t
  };
}
function gL(t, e, n) {
  e === void 0 && (e = !1),
    n === void 0 && (n = !0),
    ym(
      t === '*' || !t.endsWith('*') || t.endsWith('/*'),
      'Route path "' +
        t +
        '" will be treated as if it were ' +
        ('"' + t.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + t.replace(/\*$/, '/*') + '".')
    );
  let r = [],
    i =
      '^' +
      t
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
        .replace(/\/:(\w+)/g, (o, a) => (r.push(a), '/([^\\/]+)'));
  return (
    t.endsWith('*')
      ? (r.push('*'), (i += t === '*' || t === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
      ? (i += '\\/*$')
      : t !== '' && t !== '/' && (i += '(?:(?=\\/|$))'),
    [new RegExp(i, e ? void 0 : 'i'), r]
  );
}
function yL(t) {
  try {
    return decodeURI(t);
  } catch (e) {
    return (
      ym(
        !1,
        'The URL path "' +
          t +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + e + ').')
      ),
      t
    );
  }
}
function vL(t, e) {
  try {
    return decodeURIComponent(t);
  } catch (n) {
    return (
      ym(
        !1,
        'The value for the URL param "' +
          e +
          '" will not be decoded because' +
          (' the string "' + t + '" is a malformed URL segment. This is probably') +
          (' due to a bad percent encoding (' + n + ').')
      ),
      t
    );
  }
}
function ZS(t, e) {
  if (e === '/') return t;
  if (!t.toLowerCase().startsWith(e.toLowerCase())) return null;
  let n = e.endsWith('/') ? e.length - 1 : e.length,
    r = t.charAt(n);
  return r && r !== '/' ? null : t.slice(n) || '/';
}
function ym(t, e) {
  if (!t) {
    typeof console < 'u' && console.warn(e);
    try {
      throw new Error(e);
    } catch {}
  }
}
const ji = (t) => t.join('/').replace(/\/\/+/g, '/'),
  wL = (t) => t.replace(/\/+$/, '').replace(/^\/*/, '/');
function EL(t) {
  return (
    t != null &&
    typeof t.status == 'number' &&
    typeof t.statusText == 'string' &&
    typeof t.internal == 'boolean' &&
    'data' in t
  );
}
const SL = ['post', 'put', 'patch', 'delete'];
[...SL];
/**
 * React Router v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function hf() {
  return (
    (hf = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    hf.apply(this, arguments)
  );
}
function _L(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
const TL = typeof Object.is == 'function' ? Object.is : _L,
  { useState: IL, useEffect: kL, useLayoutEffect: CL, useDebugValue: AL } = Nh;
function NL(t, e, n) {
  const r = e(),
    [{ inst: i }, s] = IL({ inst: { value: r, getSnapshot: e } });
  return (
    CL(() => {
      (i.value = r), (i.getSnapshot = e), wh(i) && s({ inst: i });
    }, [t, r, e]),
    kL(
      () => (
        wh(i) && s({ inst: i }),
        t(() => {
          wh(i) && s({ inst: i });
        })
      ),
      [t]
    ),
    AL(r),
    r
  );
}
function wh(t) {
  const e = t.getSnapshot,
    n = t.value;
  try {
    const r = e();
    return !TL(n, r);
  } catch {
    return !0;
  }
}
function RL(t, e, n) {
  return e();
}
const xL =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  DL = !xL,
  PL = DL ? RL : NL;
'useSyncExternalStore' in Nh && ((t) => t.useSyncExternalStore)(Nh);
const e_ = N.createContext(null),
  t_ = N.createContext(null),
  n_ = N.createContext(null),
  mc = N.createContext(null),
  gc = N.createContext({ outlet: null, matches: [] }),
  r_ = N.createContext(null);
function vm() {
  return N.useContext(mc) != null;
}
function OL() {
  return vm() || At(!1), N.useContext(mc).location;
}
function LL(t, e) {
  vm() || At(!1);
  let { navigator: n } = N.useContext(n_),
    r = N.useContext(t_),
    { matches: i } = N.useContext(gc),
    s = i[i.length - 1],
    o = s ? s.params : {};
  s && s.pathname;
  let a = s ? s.pathnameBase : '/';
  s && s.route;
  let l = OL(),
    u;
  if (e) {
    var c;
    let v = typeof e == 'string' ? pc(e) : e;
    a === '/' || ((c = v.pathname) != null && c.startsWith(a)) || At(!1), (u = v);
  } else u = l;
  let h = u.pathname || '/',
    d = a === '/' ? h : h.slice(a.length) || '/',
    m = iL(t, { pathname: d }),
    y = FL(
      m &&
        m.map((v) =>
          Object.assign({}, v, {
            params: Object.assign({}, o, v.params),
            pathname: ji([
              a,
              n.encodeLocation ? n.encodeLocation(v.pathname).pathname : v.pathname
            ]),
            pathnameBase:
              v.pathnameBase === '/'
                ? a
                : ji([
                    a,
                    n.encodeLocation ? n.encodeLocation(v.pathnameBase).pathname : v.pathnameBase
                  ])
          })
        ),
      i,
      r || void 0
    );
  return e && y
    ? N.createElement(
        mc.Provider,
        {
          value: {
            location: hf({ pathname: '/', search: '', hash: '', state: null, key: 'default' }, u),
            navigationType: Zn.Pop
          }
        },
        y
      )
    : y;
}
function $L() {
  let t = zL(),
    e = EL(t) ? t.status + ' ' + t.statusText : t instanceof Error ? t.message : JSON.stringify(t),
    n = t instanceof Error ? t.stack : null,
    i = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
    s = null;
  return N.createElement(
    N.Fragment,
    null,
    N.createElement('h2', null, 'Unexpected Application Error!'),
    N.createElement('h3', { style: { fontStyle: 'italic' } }, e),
    n ? N.createElement('pre', { style: i }, n) : null,
    s
  );
}
class bL extends N.Component {
  constructor(e) {
    super(e), (this.state = { location: e.location, error: e.error });
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, n) {
    return n.location !== e.location
      ? { error: e.error, location: e.location }
      : { error: e.error || n.error, location: n.location };
  }
  componentDidCatch(e, n) {
    console.error('React Router caught the following error during render', e, n);
  }
  render() {
    return this.state.error
      ? N.createElement(
          gc.Provider,
          { value: this.props.routeContext },
          N.createElement(r_.Provider, { value: this.state.error, children: this.props.component })
        )
      : this.props.children;
  }
}
function ML(t) {
  let { routeContext: e, match: n, children: r } = t,
    i = N.useContext(e_);
  return (
    i &&
      i.static &&
      i.staticContext &&
      n.route.errorElement &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    N.createElement(gc.Provider, { value: e }, r)
  );
}
function FL(t, e, n) {
  if ((e === void 0 && (e = []), t == null))
    if (n != null && n.errors) t = n.matches;
    else return null;
  let r = t,
    i = n == null ? void 0 : n.errors;
  if (i != null) {
    let s = r.findIndex((o) => o.route.id && (i == null ? void 0 : i[o.route.id]));
    s >= 0 || At(!1), (r = r.slice(0, Math.min(r.length, s + 1)));
  }
  return r.reduceRight((s, o, a) => {
    let l = o.route.id ? (i == null ? void 0 : i[o.route.id]) : null,
      u = n ? o.route.errorElement || N.createElement($L, null) : null,
      c = e.concat(r.slice(0, a + 1)),
      h = () =>
        N.createElement(
          ML,
          { match: o, routeContext: { outlet: s, matches: c } },
          l ? u : o.route.element !== void 0 ? o.route.element : s
        );
    return n && (o.route.errorElement || a === 0)
      ? N.createElement(bL, {
          location: n.location,
          component: u,
          error: l,
          children: h(),
          routeContext: { outlet: null, matches: c }
        })
      : h();
  }, null);
}
var Ev;
(function (t) {
  (t.UseBlocker = 'useBlocker'), (t.UseRevalidator = 'useRevalidator');
})(Ev || (Ev = {}));
var Gl;
(function (t) {
  (t.UseLoaderData = 'useLoaderData'),
    (t.UseActionData = 'useActionData'),
    (t.UseRouteError = 'useRouteError'),
    (t.UseNavigation = 'useNavigation'),
    (t.UseRouteLoaderData = 'useRouteLoaderData'),
    (t.UseMatches = 'useMatches'),
    (t.UseRevalidator = 'useRevalidator');
})(Gl || (Gl = {}));
function UL(t) {
  let e = N.useContext(t_);
  return e || At(!1), e;
}
function VL(t) {
  let e = N.useContext(gc);
  return e || At(!1), e;
}
function jL(t) {
  let e = VL(),
    n = e.matches[e.matches.length - 1];
  return n.route.id || At(!1), n.route.id;
}
function zL() {
  var t;
  let e = N.useContext(r_),
    n = UL(Gl.UseRouteError),
    r = jL(Gl.UseRouteError);
  return e || ((t = n.errors) == null ? void 0 : t[r]);
}
function i_(t) {
  At(!1);
}
function BL(t) {
  let {
    basename: e = '/',
    children: n = null,
    location: r,
    navigationType: i = Zn.Pop,
    navigator: s,
    static: o = !1
  } = t;
  vm() && At(!1);
  let a = e.replace(/^\/*/, '/'),
    l = N.useMemo(() => ({ basename: a, navigator: s, static: o }), [a, s, o]);
  typeof r == 'string' && (r = pc(r));
  let { pathname: u = '/', search: c = '', hash: h = '', state: d = null, key: m = 'default' } = r,
    y = N.useMemo(() => {
      let v = ZS(u, a);
      return v == null ? null : { pathname: v, search: c, hash: h, state: d, key: m };
    }, [a, u, c, h, d, m]);
  return y == null
    ? null
    : N.createElement(
        n_.Provider,
        { value: l },
        N.createElement(mc.Provider, { children: n, value: { location: y, navigationType: i } })
      );
}
function HL(t) {
  let { children: e, location: n } = t,
    r = N.useContext(e_),
    i = r && !e ? r.router.routes : df(e);
  return LL(i, n);
}
var Sv;
(function (t) {
  (t[(t.pending = 0)] = 'pending'), (t[(t.success = 1)] = 'success'), (t[(t.error = 2)] = 'error');
})(Sv || (Sv = {}));
new Promise(() => {});
function df(t, e) {
  e === void 0 && (e = []);
  let n = [];
  return (
    N.Children.forEach(t, (r, i) => {
      if (!N.isValidElement(r)) return;
      if (r.type === N.Fragment) {
        n.push.apply(n, df(r.props.children, e));
        return;
      }
      r.type !== i_ && At(!1), !r.props.index || !r.props.children || At(!1);
      let s = [...e, i],
        o = {
          id: r.props.id || s.join('-'),
          caseSensitive: r.props.caseSensitive,
          element: r.props.element,
          index: r.props.index,
          path: r.props.path,
          loader: r.props.loader,
          action: r.props.action,
          errorElement: r.props.errorElement,
          hasErrorBoundary: r.props.errorElement != null,
          shouldRevalidate: r.props.shouldRevalidate,
          handle: r.props.handle
        };
      r.props.children && (o.children = df(r.props.children, s)), n.push(o);
    }),
    n
  );
}
/**
 * React Router DOM v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function KL(t) {
  let { basename: e, children: n, window: r } = t,
    i = N.useRef();
  i.current == null && (i.current = tL({ window: r, v5Compat: !0 }));
  let s = i.current,
    [o, a] = N.useState({ action: s.action, location: s.location });
  return (
    N.useLayoutEffect(() => s.listen(a), [s]),
    N.createElement(BL, {
      basename: e,
      children: n,
      location: o.location,
      navigationType: o.action,
      navigator: s
    })
  );
}
var _v;
(function (t) {
  (t.UseScrollRestoration = 'useScrollRestoration'),
    (t.UseSubmitImpl = 'useSubmitImpl'),
    (t.UseFetcher = 'useFetcher');
})(_v || (_v = {}));
var Tv;
(function (t) {
  (t.UseFetchers = 'useFetchers'), (t.UseScrollRestoration = 'useScrollRestoration');
})(Tv || (Tv = {}));
var ta = (t) => t.type === 'checkbox',
  Ci = (t) => t instanceof Date,
  mt = (t) => t == null;
const s_ = (t) => typeof t == 'object';
var Be = (t) => !mt(t) && !Array.isArray(t) && s_(t) && !Ci(t),
  WL = (t) => (Be(t) && t.target ? (ta(t.target) ? t.target.checked : t.target.value) : t),
  qL = (t) => t.substring(0, t.search(/\.\d+(\.|$)/)) || t,
  GL = (t, e) => t.has(qL(e)),
  QL = (t) => {
    const e = t.constructor && t.constructor.prototype;
    return Be(e) && e.hasOwnProperty('isPrototypeOf');
  },
  wm = typeof window < 'u' && typeof window.HTMLElement < 'u' && typeof document < 'u';
function xr(t) {
  let e;
  const n = Array.isArray(t);
  if (t instanceof Date) e = new Date(t);
  else if (t instanceof Set) e = new Set(t);
  else if (!(wm && (t instanceof Blob || t instanceof FileList)) && (n || Be(t)))
    if (((e = n ? [] : {}), !Array.isArray(t) && !QL(t))) e = t;
    else for (const r in t) e[r] = xr(t[r]);
  else return t;
  return e;
}
var na = (t) => (Array.isArray(t) ? t.filter(Boolean) : []),
  be = (t) => t === void 0,
  F = (t, e, n) => {
    if (!e || !Be(t)) return n;
    const r = na(e.split(/[,[\].]+?/)).reduce((i, s) => (mt(i) ? i : i[s]), t);
    return be(r) || r === t ? (be(t[e]) ? n : t[e]) : r;
  };
const Iv = { BLUR: 'blur', FOCUS_OUT: 'focusout', CHANGE: 'change' },
  Jt = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
    onTouched: 'onTouched',
    all: 'all'
  },
  yn = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate'
  };
ne.createContext(null);
var XL = (t, e, n, r = !0) => {
    const i = { defaultValues: e._defaultValues };
    for (const s in t)
      Object.defineProperty(i, s, {
        get: () => {
          const o = s;
          return (
            e._proxyFormState[o] !== Jt.all && (e._proxyFormState[o] = !r || Jt.all),
            n && (n[o] = !0),
            t[o]
          );
        }
      });
    return i;
  },
  Ft = (t) => Be(t) && !Object.keys(t).length,
  YL = (t, e, n, r) => {
    n(t);
    const { name: i, ...s } = t;
    return (
      Ft(s) ||
      Object.keys(s).length >= Object.keys(e).length ||
      Object.keys(s).find((o) => e[o] === (!r || Jt.all))
    );
  },
  Eh = (t) => (Array.isArray(t) ? t : [t]);
function JL(t) {
  const e = ne.useRef(t);
  (e.current = t),
    ne.useEffect(() => {
      const n =
        !t.disabled && e.current.subject && e.current.subject.subscribe({ next: e.current.next });
      return () => {
        n && n.unsubscribe();
      };
    }, [t.disabled]);
}
var ln = (t) => typeof t == 'string',
  ZL = (t, e, n, r, i) =>
    ln(t)
      ? (r && e.watch.add(t), F(n, t, i))
      : Array.isArray(t)
      ? t.map((s) => (r && e.watch.add(s), F(n, s)))
      : (r && (e.watchAll = !0), n),
  Em = (t) => /^\w*$/.test(t),
  o_ = (t) => na(t.replace(/["|']|\]/g, '').split(/\.|\[/));
function we(t, e, n) {
  let r = -1;
  const i = Em(e) ? [e] : o_(e),
    s = i.length,
    o = s - 1;
  for (; ++r < s; ) {
    const a = i[r];
    let l = n;
    if (r !== o) {
      const u = t[a];
      l = Be(u) || Array.isArray(u) ? u : isNaN(+i[r + 1]) ? {} : [];
    }
    (t[a] = l), (t = t[a]);
  }
  return t;
}
var e$ = (t, e, n, r, i) =>
  e ? { ...n[t], types: { ...(n[t] && n[t].types ? n[t].types : {}), [r]: i || !0 } } : {};
const ff = (t, e, n) => {
  for (const r of n || Object.keys(t)) {
    const i = F(t, r);
    if (i) {
      const { _f: s, ...o } = i;
      if (s && e(s.name)) {
        if (s.ref.focus) {
          s.ref.focus();
          break;
        } else if (s.refs && s.refs[0].focus) {
          s.refs[0].focus();
          break;
        }
      } else Be(o) && ff(o, e);
    }
  }
};
var kv = (t) => ({
    isOnSubmit: !t || t === Jt.onSubmit,
    isOnBlur: t === Jt.onBlur,
    isOnChange: t === Jt.onChange,
    isOnAll: t === Jt.all,
    isOnTouch: t === Jt.onTouched
  }),
  Cv = (t, e, n) =>
    !n &&
    (e.watchAll ||
      e.watch.has(t) ||
      [...e.watch].some((r) => t.startsWith(r) && /^\.\w+/.test(t.slice(r.length)))),
  t$ = (t, e, n) => {
    const r = na(F(t, n));
    return we(r, 'root', e[n]), we(t, n, r), t;
  },
  zi = (t) => typeof t == 'boolean',
  Sm = (t) => t.type === 'file',
  Bi = (t) => typeof t == 'function',
  Ql = (t) => {
    if (!wm) return !1;
    const e = t ? t.ownerDocument : 0;
    return t instanceof (e && e.defaultView ? e.defaultView.HTMLElement : HTMLElement);
  },
  Ga = (t) => ln(t),
  _m = (t) => t.type === 'radio',
  Xl = (t) => t instanceof RegExp;
const Av = { value: !1, isValid: !1 },
  Nv = { value: !0, isValid: !0 };
var a_ = (t) => {
  if (Array.isArray(t)) {
    if (t.length > 1) {
      const e = t.filter((n) => n && n.checked && !n.disabled).map((n) => n.value);
      return { value: e, isValid: !!e.length };
    }
    return t[0].checked && !t[0].disabled
      ? t[0].attributes && !be(t[0].attributes.value)
        ? be(t[0].value) || t[0].value === ''
          ? Nv
          : { value: t[0].value, isValid: !0 }
        : Nv
      : Av;
  }
  return Av;
};
const Rv = { isValid: !1, value: null };
var l_ = (t) =>
  Array.isArray(t)
    ? t.reduce((e, n) => (n && n.checked && !n.disabled ? { isValid: !0, value: n.value } : e), Rv)
    : Rv;
function xv(t, e, n = 'validate') {
  if (Ga(t) || (Array.isArray(t) && t.every(Ga)) || (zi(t) && !t))
    return { type: n, message: Ga(t) ? t : '', ref: e };
}
var ui = (t) => (Be(t) && !Xl(t) ? t : { value: t, message: '' }),
  Dv = async (t, e, n, r, i) => {
    const {
        ref: s,
        refs: o,
        required: a,
        maxLength: l,
        minLength: u,
        min: c,
        max: h,
        pattern: d,
        validate: m,
        name: y,
        valueAsNumber: v,
        mount: S,
        disabled: p
      } = t._f,
      f = F(e, y);
    if (!S || p) return {};
    const g = o ? o[0] : s,
      E = (W) => {
        r && g.reportValidity && (g.setCustomValidity(zi(W) ? '' : W || ''), g.reportValidity());
      },
      _ = {},
      R = _m(s),
      x = ta(s),
      P = R || x,
      B =
        ((v || Sm(s)) && be(s.value) && be(f)) ||
        (Ql(s) && s.value === '') ||
        f === '' ||
        (Array.isArray(f) && !f.length),
      b = e$.bind(null, y, n, _),
      te = (W, H, Z, ge = yn.maxLength, le = yn.minLength) => {
        const ye = W ? H : Z;
        _[y] = { type: W ? ge : le, message: ye, ref: s, ...b(W ? ge : le, ye) };
      };
    if (
      i
        ? !Array.isArray(f) || !f.length
        : a &&
          ((!P && (B || mt(f))) || (zi(f) && !f) || (x && !a_(o).isValid) || (R && !l_(o).isValid))
    ) {
      const { value: W, message: H } = Ga(a) ? { value: !!a, message: a } : ui(a);
      if (W && ((_[y] = { type: yn.required, message: H, ref: g, ...b(yn.required, H) }), !n))
        return E(H), _;
    }
    if (!B && (!mt(c) || !mt(h))) {
      let W, H;
      const Z = ui(h),
        ge = ui(c);
      if (!mt(f) && !isNaN(f)) {
        const le = s.valueAsNumber || (f && +f);
        mt(Z.value) || (W = le > Z.value), mt(ge.value) || (H = le < ge.value);
      } else {
        const le = s.valueAsDate || new Date(f),
          ye = (X) => new Date(new Date().toDateString() + ' ' + X),
          D = s.type == 'time',
          j = s.type == 'week';
        ln(Z.value) &&
          f &&
          (W = D ? ye(f) > ye(Z.value) : j ? f > Z.value : le > new Date(Z.value)),
          ln(ge.value) &&
            f &&
            (H = D ? ye(f) < ye(ge.value) : j ? f < ge.value : le < new Date(ge.value));
      }
      if ((W || H) && (te(!!W, Z.message, ge.message, yn.max, yn.min), !n))
        return E(_[y].message), _;
    }
    if ((l || u) && !B && (ln(f) || (i && Array.isArray(f)))) {
      const W = ui(l),
        H = ui(u),
        Z = !mt(W.value) && f.length > W.value,
        ge = !mt(H.value) && f.length < H.value;
      if ((Z || ge) && (te(Z, W.message, H.message), !n)) return E(_[y].message), _;
    }
    if (d && !B && ln(f)) {
      const { value: W, message: H } = ui(d);
      if (
        Xl(W) &&
        !f.match(W) &&
        ((_[y] = { type: yn.pattern, message: H, ref: s, ...b(yn.pattern, H) }), !n)
      )
        return E(H), _;
    }
    if (m) {
      if (Bi(m)) {
        const W = await m(f, e),
          H = xv(W, g);
        if (H && ((_[y] = { ...H, ...b(yn.validate, H.message) }), !n)) return E(H.message), _;
      } else if (Be(m)) {
        let W = {};
        for (const H in m) {
          if (!Ft(W) && !n) break;
          const Z = xv(await m[H](f, e), g, H);
          Z && ((W = { ...Z, ...b(H, Z.message) }), E(Z.message), n && (_[y] = W));
        }
        if (!Ft(W) && ((_[y] = { ref: g, ...W }), !n)) return _;
      }
    }
    return E(!0), _;
  };
function n$(t, e) {
  const n = e.slice(0, -1).length;
  let r = 0;
  for (; r < n; ) t = be(t) ? r++ : t[e[r++]];
  return t;
}
function r$(t) {
  for (const e in t) if (!be(t[e])) return !1;
  return !0;
}
function Qe(t, e) {
  const n = Array.isArray(e) ? e : Em(e) ? [e] : o_(e),
    r = n.length === 1 ? t : n$(t, n),
    i = n.length - 1,
    s = n[i];
  return (
    r && delete r[s],
    i !== 0 && ((Be(r) && Ft(r)) || (Array.isArray(r) && r$(r))) && Qe(t, n.slice(0, -1)),
    t
  );
}
function Sh() {
  let t = [];
  return {
    get observers() {
      return t;
    },
    next: (i) => {
      for (const s of t) s.next && s.next(i);
    },
    subscribe: (i) => (
      t.push(i),
      {
        unsubscribe: () => {
          t = t.filter((s) => s !== i);
        }
      }
    ),
    unsubscribe: () => {
      t = [];
    }
  };
}
var Yl = (t) => mt(t) || !s_(t);
function Mr(t, e) {
  if (Yl(t) || Yl(e)) return t === e;
  if (Ci(t) && Ci(e)) return t.getTime() === e.getTime();
  const n = Object.keys(t),
    r = Object.keys(e);
  if (n.length !== r.length) return !1;
  for (const i of n) {
    const s = t[i];
    if (!r.includes(i)) return !1;
    if (i !== 'ref') {
      const o = e[i];
      if (
        (Ci(s) && Ci(o)) || (Be(s) && Be(o)) || (Array.isArray(s) && Array.isArray(o))
          ? !Mr(s, o)
          : s !== o
      )
        return !1;
    }
  }
  return !0;
}
var u_ = (t) => t.type === 'select-multiple',
  i$ = (t) => _m(t) || ta(t),
  _h = (t) => Ql(t) && t.isConnected,
  c_ = (t) => {
    for (const e in t) if (Bi(t[e])) return !0;
    return !1;
  };
function Jl(t, e = {}) {
  const n = Array.isArray(t);
  if (Be(t) || n)
    for (const r in t)
      Array.isArray(t[r]) || (Be(t[r]) && !c_(t[r]))
        ? ((e[r] = Array.isArray(t[r]) ? [] : {}), Jl(t[r], e[r]))
        : mt(t[r]) || (e[r] = !0);
  return e;
}
function h_(t, e, n) {
  const r = Array.isArray(t);
  if (Be(t) || r)
    for (const i in t)
      Array.isArray(t[i]) || (Be(t[i]) && !c_(t[i]))
        ? be(e) || Yl(n[i])
          ? (n[i] = Array.isArray(t[i]) ? Jl(t[i], []) : { ...Jl(t[i]) })
          : h_(t[i], mt(e) ? {} : e[i], n[i])
        : (n[i] = !Mr(t[i], e[i]));
  return n;
}
var Th = (t, e) => h_(t, e, Jl(e)),
  d_ = (t, { valueAsNumber: e, valueAsDate: n, setValueAs: r }) =>
    be(t) ? t : e ? (t === '' ? NaN : t && +t) : n && ln(t) ? new Date(t) : r ? r(t) : t;
function Ih(t) {
  const e = t.ref;
  if (!(t.refs ? t.refs.every((n) => n.disabled) : e.disabled))
    return Sm(e)
      ? e.files
      : _m(e)
      ? l_(t.refs).value
      : u_(e)
      ? [...e.selectedOptions].map(({ value: n }) => n)
      : ta(e)
      ? a_(t.refs).value
      : d_(be(e.value) ? t.ref.value : e.value, t);
}
var s$ = (t, e, n, r) => {
    const i = {};
    for (const s of t) {
      const o = F(e, s);
      o && we(i, s, o._f);
    }
    return { criteriaMode: n, names: [...t], fields: i, shouldUseNativeValidation: r };
  },
  As = (t) => (be(t) ? t : Xl(t) ? t.source : Be(t) ? (Xl(t.value) ? t.value.source : t.value) : t),
  o$ = (t) =>
    t.mount &&
    (t.required || t.min || t.max || t.maxLength || t.minLength || t.pattern || t.validate);
function Pv(t, e, n) {
  const r = F(t, n);
  if (r || Em(n)) return { error: r, name: n };
  const i = n.split('.');
  for (; i.length; ) {
    const s = i.join('.'),
      o = F(e, s),
      a = F(t, s);
    if (o && !Array.isArray(o) && n !== s) return { name: n };
    if (a && a.type) return { name: s, error: a };
    i.pop();
  }
  return { name: n };
}
var a$ = (t, e, n, r, i) =>
    i.isOnAll
      ? !1
      : !n && i.isOnTouch
      ? !(e || t)
      : (n ? r.isOnBlur : i.isOnBlur)
      ? !t
      : (n ? r.isOnChange : i.isOnChange)
      ? t
      : !0,
  l$ = (t, e) => !na(F(t, e)).length && Qe(t, e);
const u$ = { mode: Jt.onSubmit, reValidateMode: Jt.onChange, shouldFocusError: !0 };
function c$(t = {}, e) {
  let n = { ...u$, ...t },
    r = {
      submitCount: 0,
      isDirty: !1,
      isLoading: !0,
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      errors: {}
    },
    i = {},
    s = Be(n.defaultValues) || Be(n.values) ? xr(n.defaultValues || n.values) || {} : {},
    o = n.shouldUnregister ? {} : xr(s),
    a = { action: !1, mount: !1, watch: !1 },
    l = { mount: new Set(), unMount: new Set(), array: new Set(), watch: new Set() },
    u,
    c = 0;
  const h = {
      isDirty: !1,
      dirtyFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1
    },
    d = { values: Sh(), array: Sh(), state: Sh() },
    m = t.resetOptions && t.resetOptions.keepDirtyValues,
    y = kv(n.mode),
    v = kv(n.reValidateMode),
    S = n.criteriaMode === Jt.all,
    p = (w) => (T) => {
      clearTimeout(c), (c = setTimeout(w, T));
    },
    f = async (w) => {
      if (h.isValid || w) {
        const T = n.resolver ? Ft((await B()).errors) : await te(i, !0);
        T !== r.isValid && d.state.next({ isValid: T });
      }
    },
    g = (w) => h.isValidating && d.state.next({ isValidating: w }),
    E = (w, T = [], I, L, U = !0, A = !0) => {
      if (L && I) {
        if (((a.action = !0), A && Array.isArray(F(i, w)))) {
          const z = I(F(i, w), L.argA, L.argB);
          U && we(i, w, z);
        }
        if (A && Array.isArray(F(r.errors, w))) {
          const z = I(F(r.errors, w), L.argA, L.argB);
          U && we(r.errors, w, z), l$(r.errors, w);
        }
        if (h.touchedFields && A && Array.isArray(F(r.touchedFields, w))) {
          const z = I(F(r.touchedFields, w), L.argA, L.argB);
          U && we(r.touchedFields, w, z);
        }
        h.dirtyFields && (r.dirtyFields = Th(s, o)),
          d.state.next({
            name: w,
            isDirty: H(w, T),
            dirtyFields: r.dirtyFields,
            errors: r.errors,
            isValid: r.isValid
          });
      } else we(o, w, T);
    },
    _ = (w, T) => {
      we(r.errors, w, T), d.state.next({ errors: r.errors });
    },
    R = (w, T, I, L) => {
      const U = F(i, w);
      if (U) {
        const A = F(o, w, be(I) ? F(s, w) : I);
        be(A) || (L && L.defaultChecked) || T ? we(o, w, T ? A : Ih(U._f)) : le(w, A),
          a.mount && f();
      }
    },
    x = (w, T, I, L, U) => {
      let A = !1,
        z = !1;
      const Oe = { name: w };
      if (!I || L) {
        h.isDirty && ((z = r.isDirty), (r.isDirty = Oe.isDirty = H()), (A = z !== Oe.isDirty));
        const Ce = Mr(F(s, w), T);
        (z = F(r.dirtyFields, w)),
          Ce ? Qe(r.dirtyFields, w) : we(r.dirtyFields, w, !0),
          (Oe.dirtyFields = r.dirtyFields),
          (A = A || (h.dirtyFields && z !== !Ce));
      }
      if (I) {
        const Ce = F(r.touchedFields, w);
        Ce ||
          (we(r.touchedFields, w, I),
          (Oe.touchedFields = r.touchedFields),
          (A = A || (h.touchedFields && Ce !== I)));
      }
      return A && U && d.state.next(Oe), A ? Oe : {};
    },
    P = (w, T, I, L) => {
      const U = F(r.errors, w),
        A = h.isValid && zi(T) && r.isValid !== T;
      if (
        (t.delayError && I
          ? ((u = p(() => _(w, I))), u(t.delayError))
          : (clearTimeout(c), (u = null), I ? we(r.errors, w, I) : Qe(r.errors, w)),
        (I ? !Mr(U, I) : U) || !Ft(L) || A)
      ) {
        const z = { ...L, ...(A && zi(T) ? { isValid: T } : {}), errors: r.errors, name: w };
        (r = { ...r, ...z }), d.state.next(z);
      }
      g(!1);
    },
    B = async (w) =>
      n.resolver(o, n.context, s$(w || l.mount, i, n.criteriaMode, n.shouldUseNativeValidation)),
    b = async (w) => {
      const { errors: T } = await B();
      if (w)
        for (const I of w) {
          const L = F(T, I);
          L ? we(r.errors, I, L) : Qe(r.errors, I);
        }
      else r.errors = T;
      return T;
    },
    te = async (w, T, I = { valid: !0 }) => {
      for (const L in w) {
        const U = w[L];
        if (U) {
          const { _f: A, ...z } = U;
          if (A) {
            const Oe = l.array.has(A.name),
              Ce = await Dv(U, o, S, n.shouldUseNativeValidation, Oe);
            if (Ce[A.name] && ((I.valid = !1), T)) break;
            !T &&
              (F(Ce, A.name)
                ? Oe
                  ? t$(r.errors, Ce, A.name)
                  : we(r.errors, A.name, Ce[A.name])
                : Qe(r.errors, A.name));
          }
          z && (await te(z, T, I));
        }
      }
      return I.valid;
    },
    W = () => {
      for (const w of l.unMount) {
        const T = F(i, w);
        T && (T._f.refs ? T._f.refs.every((I) => !_h(I)) : !_h(T._f.ref)) && Wt(w);
      }
      l.unMount = new Set();
    },
    H = (w, T) => (w && T && we(o, w, T), !Mr(ve(), s)),
    Z = (w, T, I) => ZL(w, l, { ...(a.mount ? o : be(T) ? s : ln(w) ? { [w]: T } : T) }, I, T),
    ge = (w) => na(F(a.mount ? o : s, w, t.shouldUnregister ? F(s, w, []) : [])),
    le = (w, T, I = {}) => {
      const L = F(i, w);
      let U = T;
      if (L) {
        const A = L._f;
        A &&
          (!A.disabled && we(o, w, d_(T, A)),
          (U = Ql(A.ref) && mt(T) ? '' : T),
          u_(A.ref)
            ? [...A.ref.options].forEach((z) => (z.selected = U.includes(z.value)))
            : A.refs
            ? ta(A.ref)
              ? A.refs.length > 1
                ? A.refs.forEach(
                    (z) =>
                      (!z.defaultChecked || !z.disabled) &&
                      (z.checked = Array.isArray(U)
                        ? !!U.find((Oe) => Oe === z.value)
                        : U === z.value)
                  )
                : A.refs[0] && (A.refs[0].checked = !!U)
              : A.refs.forEach((z) => (z.checked = z.value === U))
            : Sm(A.ref)
            ? (A.ref.value = '')
            : ((A.ref.value = U), A.ref.type || d.values.next({ name: w, values: { ...o } })));
      }
      (I.shouldDirty || I.shouldTouch) && x(w, U, I.shouldTouch, I.shouldDirty, !0),
        I.shouldValidate && X(w);
    },
    ye = (w, T, I) => {
      for (const L in T) {
        const U = T[L],
          A = `${w}.${L}`,
          z = F(i, A);
        (l.array.has(w) || !Yl(U) || (z && !z._f)) && !Ci(U) ? ye(A, U, I) : le(A, U, I);
      }
    },
    D = (w, T, I = {}) => {
      const L = F(i, w),
        U = l.array.has(w),
        A = xr(T);
      we(o, w, A),
        U
          ? (d.array.next({ name: w, values: { ...o } }),
            (h.isDirty || h.dirtyFields) &&
              I.shouldDirty &&
              d.state.next({ name: w, dirtyFields: Th(s, o), isDirty: H(w, A) }))
          : L && !L._f && !mt(A)
          ? ye(w, A, I)
          : le(w, A, I),
        Cv(w, l) && d.state.next({ ...r }),
        d.values.next({ name: w, values: { ...o } }),
        !a.mount && e();
    },
    j = async (w) => {
      const T = w.target;
      let I = T.name;
      const L = F(i, I),
        U = () => (T.type ? Ih(L._f) : WL(w));
      if (L) {
        let A, z;
        const Oe = U(),
          Ce = w.type === Iv.BLUR || w.type === Iv.FOCUS_OUT,
          w_ =
            (!o$(L._f) && !n.resolver && !F(r.errors, I) && !L._f.deps) ||
            a$(Ce, F(r.touchedFields, I), r.isSubmitted, v, y),
          wc = Cv(I, l, Ce);
        we(o, I, Oe),
          Ce ? (L._f.onBlur && L._f.onBlur(w), u && u(0)) : L._f.onChange && L._f.onChange(w);
        const Ec = x(I, Oe, Ce, !1),
          E_ = !Ft(Ec) || wc;
        if ((!Ce && d.values.next({ name: I, type: w.type, values: { ...o } }), w_))
          return h.isValid && f(), E_ && d.state.next({ name: I, ...(wc ? {} : Ec) });
        if ((!Ce && wc && d.state.next({ ...r }), g(!0), n.resolver)) {
          const { errors: Cm } = await B([I]),
            S_ = Pv(r.errors, i, I),
            Am = Pv(Cm, i, S_.name || I);
          (A = Am.error), (I = Am.name), (z = Ft(Cm));
        } else
          (A = (await Dv(L, o, S, n.shouldUseNativeValidation))[I]),
            A ? (z = !1) : h.isValid && (z = await te(i, !0));
        L._f.deps && X(L._f.deps), P(I, z, A, Ec);
      }
    },
    X = async (w, T = {}) => {
      let I, L;
      const U = Eh(w);
      if ((g(!0), n.resolver)) {
        const A = await b(be(w) ? w : U);
        (I = Ft(A)), (L = w ? !U.some((z) => F(A, z)) : I);
      } else
        w
          ? ((L = (
              await Promise.all(
                U.map(async (A) => {
                  const z = F(i, A);
                  return await te(z && z._f ? { [A]: z } : z);
                })
              )
            ).every(Boolean)),
            !(!L && !r.isValid) && f())
          : (L = I = await te(i));
      return (
        d.state.next({
          ...(!ln(w) || (h.isValid && I !== r.isValid) ? {} : { name: w }),
          ...(n.resolver || !w ? { isValid: I } : {}),
          errors: r.errors,
          isValidating: !1
        }),
        T.shouldFocus && !L && ff(i, (A) => A && F(r.errors, A), w ? U : l.mount),
        L
      );
    },
    ve = (w) => {
      const T = { ...s, ...(a.mount ? o : {}) };
      return be(w) ? T : ln(w) ? F(T, w) : w.map((I) => F(T, I));
    },
    xe = (w, T) => ({
      invalid: !!F((T || r).errors, w),
      isDirty: !!F((T || r).dirtyFields, w),
      isTouched: !!F((T || r).touchedFields, w),
      error: F((T || r).errors, w)
    }),
    ai = (w) => {
      w && Eh(w).forEach((T) => Qe(r.errors, T)), d.state.next({ errors: w ? r.errors : {} });
    },
    gn = (w, T, I) => {
      const L = (F(i, w, { _f: {} })._f || {}).ref;
      we(r.errors, w, { ...T, ref: L }),
        d.state.next({ name: w, errors: r.errors, isValid: !1 }),
        I && I.shouldFocus && L && L.focus && L.focus();
    },
    ys = (w, T) => (Bi(w) ? d.values.subscribe({ next: (I) => w(Z(void 0, T), I) }) : Z(w, T, !0)),
    Wt = (w, T = {}) => {
      for (const I of w ? Eh(w) : l.mount)
        l.mount.delete(I),
          l.array.delete(I),
          F(i, I) &&
            (T.keepValue || (Qe(i, I), Qe(o, I)),
            !T.keepError && Qe(r.errors, I),
            !T.keepDirty && Qe(r.dirtyFields, I),
            !T.keepTouched && Qe(r.touchedFields, I),
            !n.shouldUnregister && !T.keepDefaultValue && Qe(s, I));
      d.values.next({ values: { ...o } }),
        d.state.next({ ...r, ...(T.keepDirty ? { isDirty: H() } : {}) }),
        !T.keepIsValid && f();
    },
    Fn = (w, T = {}) => {
      let I = F(i, w);
      const L = zi(T.disabled);
      return (
        we(i, w, {
          ...(I || {}),
          _f: { ...(I && I._f ? I._f : { ref: { name: w } }), name: w, mount: !0, ...T }
        }),
        l.mount.add(w),
        I ? L && we(o, w, T.disabled ? void 0 : F(o, w, Ih(I._f))) : R(w, !0, T.value),
        {
          ...(L ? { disabled: T.disabled } : {}),
          ...(n.shouldUseNativeValidation
            ? {
                required: !!T.required,
                min: As(T.min),
                max: As(T.max),
                minLength: As(T.minLength),
                maxLength: As(T.maxLength),
                pattern: As(T.pattern)
              }
            : {}),
          name: w,
          onChange: j,
          onBlur: j,
          ref: (U) => {
            if (U) {
              Fn(w, T), (I = F(i, w));
              const A =
                  (be(U.value) &&
                    U.querySelectorAll &&
                    U.querySelectorAll('input,select,textarea')[0]) ||
                  U,
                z = i$(A),
                Oe = I._f.refs || [];
              if (z ? Oe.find((Ce) => Ce === A) : A === I._f.ref) return;
              we(i, w, {
                _f: {
                  ...I._f,
                  ...(z
                    ? {
                        refs: [...Oe.filter(_h), A, ...(Array.isArray(F(s, w)) ? [{}] : [])],
                        ref: { type: A.type, name: w }
                      }
                    : { ref: A })
                }
              }),
                R(w, !1, void 0, A);
            } else
              (I = F(i, w, {})),
                I._f && (I._f.mount = !1),
                (n.shouldUnregister || T.shouldUnregister) &&
                  !(GL(l.array, w) && a.action) &&
                  l.unMount.add(w);
          }
        }
      );
    },
    Tm = () => n.shouldFocusError && ff(i, (w) => w && F(r.errors, w), l.mount),
    m_ = (w, T) => async (I) => {
      I && (I.preventDefault && I.preventDefault(), I.persist && I.persist());
      let L = xr(o);
      if ((d.state.next({ isSubmitting: !0 }), n.resolver)) {
        const { errors: U, values: A } = await B();
        (r.errors = U), (L = A);
      } else await te(i);
      Qe(r.errors, 'root'),
        Ft(r.errors)
          ? (d.state.next({ errors: {} }), await w(L, I))
          : (T && (await T({ ...r.errors }, I)), Tm(), setTimeout(Tm)),
        d.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: Ft(r.errors),
          submitCount: r.submitCount + 1,
          errors: r.errors
        });
    },
    g_ = (w, T = {}) => {
      F(i, w) &&
        (be(T.defaultValue) ? D(w, F(s, w)) : (D(w, T.defaultValue), we(s, w, T.defaultValue)),
        T.keepTouched || Qe(r.touchedFields, w),
        T.keepDirty || (Qe(r.dirtyFields, w), (r.isDirty = T.defaultValue ? H(w, F(s, w)) : H())),
        T.keepError || (Qe(r.errors, w), h.isValid && f()),
        d.state.next({ ...r }));
    },
    Im = (w, T = {}) => {
      const I = w || s,
        L = xr(I),
        U = w && !Ft(w) ? L : s;
      if ((T.keepDefaultValues || (s = I), !T.keepValues)) {
        if (T.keepDirtyValues || m)
          for (const A of l.mount) F(r.dirtyFields, A) ? we(U, A, F(o, A)) : D(A, F(U, A));
        else {
          if (wm && be(w))
            for (const A of l.mount) {
              const z = F(i, A);
              if (z && z._f) {
                const Oe = Array.isArray(z._f.refs) ? z._f.refs[0] : z._f.ref;
                if (Ql(Oe)) {
                  const Ce = Oe.closest('form');
                  if (Ce) {
                    Ce.reset();
                    break;
                  }
                }
              }
            }
          i = {};
        }
        (o = t.shouldUnregister ? (T.keepDefaultValues ? xr(s) : {}) : L),
          d.array.next({ values: { ...U } }),
          d.values.next({ values: { ...U } });
      }
      (l = {
        mount: new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: ''
      }),
        !a.mount && e(),
        (a.mount = !h.isValid || !!T.keepIsValid),
        (a.watch = !!t.shouldUnregister),
        d.state.next({
          submitCount: T.keepSubmitCount ? r.submitCount : 0,
          isDirty: T.keepDirty ? r.isDirty : !!(T.keepDefaultValues && !Mr(w, s)),
          isSubmitted: T.keepIsSubmitted ? r.isSubmitted : !1,
          dirtyFields: T.keepDirtyValues ? r.dirtyFields : T.keepDefaultValues && w ? Th(s, w) : {},
          touchedFields: T.keepTouched ? r.touchedFields : {},
          errors: T.keepErrors ? r.errors : {},
          isSubmitting: !1,
          isSubmitSuccessful: !1
        });
    },
    km = (w, T) => Im(Bi(w) ? w(o) : w, T),
    y_ = (w, T = {}) => {
      const I = F(i, w),
        L = I && I._f;
      if (L) {
        const U = L.refs ? L.refs[0] : L.ref;
        U.focus && (U.focus(), T.shouldSelect && U.select());
      }
    },
    v_ = (w) => {
      r = { ...r, ...w };
    };
  return (
    Bi(n.defaultValues) &&
      n.defaultValues().then((w) => {
        km(w, n.resetOptions), d.state.next({ isLoading: !1 });
      }),
    {
      control: {
        register: Fn,
        unregister: Wt,
        getFieldState: xe,
        _executeSchema: B,
        _getWatch: Z,
        _getDirty: H,
        _updateValid: f,
        _removeUnmounted: W,
        _updateFieldArray: E,
        _getFieldArray: ge,
        _reset: Im,
        _updateFormState: v_,
        _subjects: d,
        _proxyFormState: h,
        get _fields() {
          return i;
        },
        get _formValues() {
          return o;
        },
        get _state() {
          return a;
        },
        set _state(w) {
          a = w;
        },
        get _defaultValues() {
          return s;
        },
        get _names() {
          return l;
        },
        set _names(w) {
          l = w;
        },
        get _formState() {
          return r;
        },
        set _formState(w) {
          r = w;
        },
        get _options() {
          return n;
        },
        set _options(w) {
          n = { ...n, ...w };
        }
      },
      trigger: X,
      register: Fn,
      handleSubmit: m_,
      watch: ys,
      setValue: D,
      getValues: ve,
      reset: km,
      resetField: g_,
      clearErrors: ai,
      unregister: Wt,
      setError: gn,
      setFocus: y_,
      getFieldState: xe
    }
  );
}
function h$(t = {}) {
  const e = ne.useRef(),
    [n, r] = ne.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: !0,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      errors: {},
      defaultValues: Bi(t.defaultValues) ? void 0 : t.defaultValues
    });
  e.current || (e.current = { ...c$(t, () => r((s) => ({ ...s }))), formState: n });
  const i = e.current.control;
  return (
    (i._options = t),
    JL({
      subject: i._subjects.state,
      next: (s) => {
        YL(s, i._proxyFormState, i._updateFormState, !0) && r({ ...i._formState });
      }
    }),
    ne.useEffect(() => {
      t.values && !Mr(t.values, i._defaultValues) && i._reset(t.values, i._options.resetOptions);
    }, [t.values, i]),
    ne.useEffect(() => {
      i._state.mount || (i._updateValid(), (i._state.mount = !0)),
        i._state.watch && ((i._state.watch = !1), i._subjects.state.next({ ...i._formState })),
        i._removeUnmounted();
    }),
    (e.current.formState = XL(n, i)),
    e.current
  );
}
const d$ = (t) => {
    const {
        register: e,
        handleSubmit: n,
        formState: { errors: r },
        watch: i
      } = h$(),
      s = i();
    return De('div', {
      className: 'container',
      children: De('form', {
        className: 'form',
        onSubmit: n((a) => ((a = { ...s }), console.log(a), t.onSubmit(a), a)),
        children: t.formConfig.map((a) => {
          var l, u, c;
          return vf(
            'div',
            {
              className: 'form__group',
              children: [
                De('input', {
                  type: a.type,
                  className: a.className,
                  placeholder: a.placeholder,
                  value: a.value,
                  ...e(a.name, a.validation)
                }),
                ((l = r[a.name]) == null ? void 0 : l.type) === 'required' &&
                  De('span', { role: 'alert', children: 'This field is required!' }),
                ((u = r[a.name]) == null ? void 0 : u.type) === 'minLength' &&
                  De('span', {
                    role: 'alert',
                    children: 'Password cannot be shorter than 8 characters!'
                  }),
                ((c = r[a.name]) == null ? void 0 : c.type) === 'maxLength' &&
                  De('span', {
                    role: 'alert',
                    children: 'Password cannot be longer than 20 characters!'
                  })
              ]
            },
            a.name
          );
        })
      })
    });
  },
  f$ = [
    {
      name: 'email',
      type: 'email',
      className: 'form__group__input',
      placeholder: 'Enter your email',
      validation: { required: !0 }
    },
    {
      name: 'password',
      className: 'form__group__input',
      type: 'password',
      placeholder: 'Enter your password',
      validation: { required: !0 }
    },
    {
      name: 'firstName',
      type: 'text',
      className: 'form__group__input',
      placeholder: 'Enter your first name',
      validation: { required: !0 }
    },
    {
      name: 'lastName',
      type: 'text',
      className: 'form__group__input',
      placeholder: 'Enter your last name',
      validation: { required: !0 }
    },
    {
      name: 'button',
      className: 'form__group__button',
      type: 'submit',
      value: 'Register',
      placeholder: 'Register',
      validation: { required: '' }
    }
  ],
  p$ = async (t) =>
    await xP(QS, t.email, t.password)
      .then(() => t)
      .catch((n) => {
        console.log(n.message);
      }),
  m$ = () => De('div', { children: De(d$, { formConfig: f$, onSubmit: p$ }) });
function g$() {
  return De('div', { className: 'App', children: De(m$, {}) });
}
const y$ = () =>
  De(KL, { children: De(HL, { children: De(i_, { path: '/', element: De(g$, {}) }) }) });
function f_(t) {
  var e,
    n,
    r = '';
  if (typeof t == 'string' || typeof t == 'number') r += t;
  else if (typeof t == 'object')
    if (Array.isArray(t))
      for (e = 0; e < t.length; e++) t[e] && (n = f_(t[e])) && (r && (r += ' '), (r += n));
    else for (e in t) t[e] && (r && (r += ' '), (r += e));
  return r;
}
function er() {
  for (var t, e, n = 0, r = ''; n < arguments.length; )
    (t = arguments[n++]) && (e = f_(t)) && (r && (r += ' '), (r += e));
  return r;
}
const Qa = (t) => typeof t == 'number' && !isNaN(t),
  Zl = (t) => typeof t == 'string',
  xt = (t) => typeof t == 'function',
  Xa = (t) => (Zl(t) || xt(t) ? t : null),
  kh = (t) => N.isValidElement(t) || Zl(t) || xt(t) || Qa(t);
function v$(t, e, n) {
  n === void 0 && (n = 300);
  const { scrollHeight: r, style: i } = t;
  requestAnimationFrame(() => {
    (i.minHeight = 'initial'),
      (i.height = r + 'px'),
      (i.transition = `all ${n}ms`),
      requestAnimationFrame(() => {
        (i.height = '0'), (i.padding = '0'), (i.margin = '0'), setTimeout(e, n);
      });
  });
}
function yc(t) {
  let {
    enter: e,
    exit: n,
    appendPosition: r = !1,
    collapse: i = !0,
    collapseDuration: s = 300
  } = t;
  return function (o) {
    let { children: a, position: l, preventExitTransition: u, done: c, nodeRef: h, isIn: d } = o;
    const m = r ? `${e}--${l}` : e,
      y = r ? `${n}--${l}` : n,
      v = N.useRef(0);
    return (
      N.useLayoutEffect(() => {
        const S = h.current,
          p = m.split(' '),
          f = (g) => {
            g.target === h.current &&
              (S.dispatchEvent(new Event('d')),
              S.removeEventListener('animationend', f),
              S.removeEventListener('animationcancel', f),
              v.current === 0 && g.type !== 'animationcancel' && S.classList.remove(...p));
          };
        S.classList.add(...p),
          S.addEventListener('animationend', f),
          S.addEventListener('animationcancel', f);
      }, []),
      N.useEffect(() => {
        const S = h.current,
          p = () => {
            S.removeEventListener('animationend', p), i ? v$(S, c, s) : c();
          };
        d ||
          (u
            ? p()
            : ((v.current = 1), (S.className += ` ${y}`), S.addEventListener('animationend', p)));
      }, [d]),
      ne.createElement(ne.Fragment, null, a)
    );
  };
}
function Ov(t, e) {
  return {
    content: t.content,
    containerId: t.props.containerId,
    id: t.props.toastId,
    theme: t.props.theme,
    type: t.props.type,
    data: t.props.data || {},
    isLoading: t.props.isLoading,
    icon: t.props.icon,
    status: e
  };
}
const Fr = {
    list: new Map(),
    emitQueue: new Map(),
    on(t, e) {
      return this.list.has(t) || this.list.set(t, []), this.list.get(t).push(e), this;
    },
    off(t, e) {
      if (e) {
        const n = this.list.get(t).filter((r) => r !== e);
        return this.list.set(t, n), this;
      }
      return this.list.delete(t), this;
    },
    cancelEmit(t) {
      const e = this.emitQueue.get(t);
      return e && (e.forEach(clearTimeout), this.emitQueue.delete(t)), this;
    },
    emit(t) {
      this.list.has(t) &&
        this.list.get(t).forEach((e) => {
          const n = setTimeout(() => {
            e(...[].slice.call(arguments, 1));
          }, 0);
          this.emitQueue.has(t) || this.emitQueue.set(t, []), this.emitQueue.get(t).push(n);
        });
    }
  },
  Na = (t) => {
    let { theme: e, type: n, ...r } = t;
    return ne.createElement('svg', {
      viewBox: '0 0 24 24',
      width: '100%',
      height: '100%',
      fill: e === 'colored' ? 'currentColor' : `var(--toastify-icon-color-${n})`,
      ...r
    });
  },
  Ch = {
    info: function (t) {
      return ne.createElement(
        Na,
        { ...t },
        ne.createElement('path', {
          d: 'M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z'
        })
      );
    },
    warning: function (t) {
      return ne.createElement(
        Na,
        { ...t },
        ne.createElement('path', {
          d: 'M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z'
        })
      );
    },
    success: function (t) {
      return ne.createElement(
        Na,
        { ...t },
        ne.createElement('path', {
          d: 'M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z'
        })
      );
    },
    error: function (t) {
      return ne.createElement(
        Na,
        { ...t },
        ne.createElement('path', {
          d: 'M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z'
        })
      );
    },
    spinner: function () {
      return ne.createElement('div', { className: 'Toastify__spinner' });
    }
  };
function w$(t) {
  const [, e] = N.useReducer((m) => m + 1, 0),
    [n, r] = N.useState([]),
    i = N.useRef(null),
    s = N.useRef(new Map()).current,
    o = (m) => n.indexOf(m) !== -1,
    a = N.useRef({
      toastKey: 1,
      displayedToast: 0,
      count: 0,
      queue: [],
      props: t,
      containerId: null,
      isToastActive: o,
      getToast: (m) => s.get(m)
    }).current;
  function l(m) {
    let { containerId: y } = m;
    const { limit: v } = a.props;
    !v || (y && a.containerId !== y) || ((a.count -= a.queue.length), (a.queue = []));
  }
  function u(m) {
    r((y) => (m == null ? [] : y.filter((v) => v !== m)));
  }
  function c() {
    const { toastContent: m, toastProps: y, staleId: v } = a.queue.shift();
    d(m, y, v);
  }
  function h(m, y) {
    let { delay: v, staleId: S, ...p } = y;
    if (
      !kh(m) ||
      (function (W) {
        return (
          !i.current ||
          (a.props.enableMultiContainer && W.containerId !== a.props.containerId) ||
          (s.has(W.toastId) && W.updateId == null)
        );
      })(p)
    )
      return;
    const { toastId: f, updateId: g, data: E } = p,
      { props: _ } = a,
      R = () => u(f),
      x = g == null;
    x && a.count++;
    const P = {
      ..._,
      style: _.toastStyle,
      key: a.toastKey++,
      ...p,
      toastId: f,
      updateId: g,
      data: E,
      closeToast: R,
      isIn: !1,
      className: Xa(p.className || _.toastClassName),
      bodyClassName: Xa(p.bodyClassName || _.bodyClassName),
      progressClassName: Xa(p.progressClassName || _.progressClassName),
      autoClose:
        !p.isLoading &&
        ((B = p.autoClose), (b = _.autoClose), B === !1 || (Qa(B) && B > 0) ? B : b),
      deleteToast() {
        const W = Ov(s.get(f), 'removed');
        s.delete(f), Fr.emit(4, W);
        const H = a.queue.length;
        if (
          ((a.count = f == null ? a.count - a.displayedToast : a.count - 1),
          a.count < 0 && (a.count = 0),
          H > 0)
        ) {
          const Z = f == null ? a.props.limit : 1;
          if (H === 1 || Z === 1) a.displayedToast++, c();
          else {
            const ge = Z > H ? H : Z;
            a.displayedToast = ge;
            for (let le = 0; le < ge; le++) c();
          }
        } else e();
      }
    };
    var B, b;
    (P.iconOut = (function (W) {
      let { theme: H, type: Z, isLoading: ge, icon: le } = W,
        ye = null;
      const D = { theme: H, type: Z };
      return (
        le === !1 ||
          (xt(le)
            ? (ye = le(D))
            : N.isValidElement(le)
            ? (ye = N.cloneElement(le, D))
            : Zl(le) || Qa(le)
            ? (ye = le)
            : ge
            ? (ye = Ch.spinner())
            : ((j) => j in Ch)(Z) && (ye = Ch[Z](D))),
        ye
      );
    })(P)),
      xt(p.onOpen) && (P.onOpen = p.onOpen),
      xt(p.onClose) && (P.onClose = p.onClose),
      (P.closeButton = _.closeButton),
      p.closeButton === !1 || kh(p.closeButton)
        ? (P.closeButton = p.closeButton)
        : p.closeButton === !0 && (P.closeButton = !kh(_.closeButton) || _.closeButton);
    let te = m;
    N.isValidElement(m) && !Zl(m.type)
      ? (te = N.cloneElement(m, { closeToast: R, toastProps: P, data: E }))
      : xt(m) && (te = m({ closeToast: R, toastProps: P, data: E })),
      _.limit && _.limit > 0 && a.count > _.limit && x
        ? a.queue.push({ toastContent: te, toastProps: P, staleId: S })
        : Qa(v)
        ? setTimeout(() => {
            d(te, P, S);
          }, v)
        : d(te, P, S);
  }
  function d(m, y, v) {
    const { toastId: S } = y;
    v && s.delete(v);
    const p = { content: m, props: y };
    s.set(S, p),
      r((f) => [...f, S].filter((g) => g !== v)),
      Fr.emit(4, Ov(p, p.props.updateId == null ? 'added' : 'updated'));
  }
  return (
    N.useEffect(
      () => (
        (a.containerId = t.containerId),
        Fr.cancelEmit(3)
          .on(0, h)
          .on(1, (m) => i.current && u(m))
          .on(5, l)
          .emit(2, a),
        () => {
          s.clear(), Fr.emit(3, a);
        }
      ),
      []
    ),
    N.useEffect(() => {
      (a.props = t), (a.isToastActive = o), (a.displayedToast = n.length);
    }),
    {
      getToastToRender: function (m) {
        const y = new Map(),
          v = Array.from(s.values());
        return (
          t.newestOnTop && v.reverse(),
          v.forEach((S) => {
            const { position: p } = S.props;
            y.has(p) || y.set(p, []), y.get(p).push(S);
          }),
          Array.from(y, (S) => m(S[0], S[1]))
        );
      },
      containerRef: i,
      isToastActive: o
    }
  );
}
function Lv(t) {
  return t.targetTouches && t.targetTouches.length >= 1 ? t.targetTouches[0].clientX : t.clientX;
}
function $v(t) {
  return t.targetTouches && t.targetTouches.length >= 1 ? t.targetTouches[0].clientY : t.clientY;
}
function E$(t) {
  const [e, n] = N.useState(!1),
    [r, i] = N.useState(!1),
    s = N.useRef(null),
    o = N.useRef({
      start: 0,
      x: 0,
      y: 0,
      delta: 0,
      removalDistance: 0,
      canCloseOnClick: !0,
      canDrag: !1,
      boundingRect: null,
      didMove: !1
    }).current,
    a = N.useRef(t),
    { autoClose: l, pauseOnHover: u, closeToast: c, onClick: h, closeOnClick: d } = t;
  function m(E) {
    if (t.draggable) {
      E.nativeEvent.type === 'touchstart' && E.nativeEvent.preventDefault(),
        (o.didMove = !1),
        document.addEventListener('mousemove', p),
        document.addEventListener('mouseup', f),
        document.addEventListener('touchmove', p),
        document.addEventListener('touchend', f);
      const _ = s.current;
      (o.canCloseOnClick = !0),
        (o.canDrag = !0),
        (o.boundingRect = _.getBoundingClientRect()),
        (_.style.transition = ''),
        (o.x = Lv(E.nativeEvent)),
        (o.y = $v(E.nativeEvent)),
        t.draggableDirection === 'x'
          ? ((o.start = o.x), (o.removalDistance = _.offsetWidth * (t.draggablePercent / 100)))
          : ((o.start = o.y),
            (o.removalDistance =
              _.offsetHeight *
              (t.draggablePercent === 80 ? 1.5 * t.draggablePercent : t.draggablePercent / 100)));
    }
  }
  function y(E) {
    if (o.boundingRect) {
      const { top: _, bottom: R, left: x, right: P } = o.boundingRect;
      E.nativeEvent.type !== 'touchend' &&
      t.pauseOnHover &&
      o.x >= x &&
      o.x <= P &&
      o.y >= _ &&
      o.y <= R
        ? S()
        : v();
    }
  }
  function v() {
    n(!0);
  }
  function S() {
    n(!1);
  }
  function p(E) {
    const _ = s.current;
    o.canDrag &&
      _ &&
      ((o.didMove = !0),
      e && S(),
      (o.x = Lv(E)),
      (o.y = $v(E)),
      (o.delta = t.draggableDirection === 'x' ? o.x - o.start : o.y - o.start),
      o.start !== o.x && (o.canCloseOnClick = !1),
      (_.style.transform = `translate${t.draggableDirection}(${o.delta}px)`),
      (_.style.opacity = '' + (1 - Math.abs(o.delta / o.removalDistance))));
  }
  function f() {
    document.removeEventListener('mousemove', p),
      document.removeEventListener('mouseup', f),
      document.removeEventListener('touchmove', p),
      document.removeEventListener('touchend', f);
    const E = s.current;
    if (o.canDrag && o.didMove && E) {
      if (((o.canDrag = !1), Math.abs(o.delta) > o.removalDistance))
        return i(!0), void t.closeToast();
      (E.style.transition = 'transform 0.2s, opacity 0.2s'),
        (E.style.transform = `translate${t.draggableDirection}(0)`),
        (E.style.opacity = '1');
    }
  }
  N.useEffect(() => {
    a.current = t;
  }),
    N.useEffect(
      () => (
        s.current && s.current.addEventListener('d', v, { once: !0 }),
        xt(t.onOpen) && t.onOpen(N.isValidElement(t.children) && t.children.props),
        () => {
          const E = a.current;
          xt(E.onClose) && E.onClose(N.isValidElement(E.children) && E.children.props);
        }
      ),
      []
    ),
    N.useEffect(
      () => (
        t.pauseOnFocusLoss &&
          (document.hasFocus() || S(),
          window.addEventListener('focus', v),
          window.addEventListener('blur', S)),
        () => {
          t.pauseOnFocusLoss &&
            (window.removeEventListener('focus', v), window.removeEventListener('blur', S));
        }
      ),
      [t.pauseOnFocusLoss]
    );
  const g = { onMouseDown: m, onTouchStart: m, onMouseUp: y, onTouchEnd: y };
  return (
    l && u && ((g.onMouseEnter = S), (g.onMouseLeave = v)),
    d &&
      (g.onClick = (E) => {
        h && h(E), o.canCloseOnClick && c();
      }),
    {
      playToast: v,
      pauseToast: S,
      isRunning: e,
      preventExitTransition: r,
      toastRef: s,
      eventHandlers: g
    }
  );
}
function p_(t) {
  let { closeToast: e, theme: n, ariaLabel: r = 'close' } = t;
  return ne.createElement(
    'button',
    {
      className: `Toastify__close-button Toastify__close-button--${n}`,
      type: 'button',
      onClick: (i) => {
        i.stopPropagation(), e(i);
      },
      'aria-label': r
    },
    ne.createElement(
      'svg',
      { 'aria-hidden': 'true', viewBox: '0 0 14 16' },
      ne.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z'
      })
    )
  );
}
function S$(t) {
  let {
    delay: e,
    isRunning: n,
    closeToast: r,
    type: i = 'default',
    hide: s,
    className: o,
    style: a,
    controlledProgress: l,
    progress: u,
    rtl: c,
    isIn: h,
    theme: d
  } = t;
  const m = s || (l && u === 0),
    y = {
      ...a,
      animationDuration: `${e}ms`,
      animationPlayState: n ? 'running' : 'paused',
      opacity: m ? 0 : 1
    };
  l && (y.transform = `scaleX(${u})`);
  const v = er(
      'Toastify__progress-bar',
      l ? 'Toastify__progress-bar--controlled' : 'Toastify__progress-bar--animated',
      `Toastify__progress-bar-theme--${d}`,
      `Toastify__progress-bar--${i}`,
      { 'Toastify__progress-bar--rtl': c }
    ),
    S = xt(o) ? o({ rtl: c, type: i, defaultClassName: v }) : er(v, o);
  return ne.createElement('div', {
    role: 'progressbar',
    'aria-hidden': m ? 'true' : 'false',
    'aria-label': 'notification timer',
    className: S,
    style: y,
    [l && u >= 1 ? 'onTransitionEnd' : 'onAnimationEnd']:
      l && u < 1
        ? null
        : () => {
            h && r();
          }
  });
}
const _$ = (t) => {
    const { isRunning: e, preventExitTransition: n, toastRef: r, eventHandlers: i } = E$(t),
      {
        closeButton: s,
        children: o,
        autoClose: a,
        onClick: l,
        type: u,
        hideProgressBar: c,
        closeToast: h,
        transition: d,
        position: m,
        className: y,
        style: v,
        bodyClassName: S,
        bodyStyle: p,
        progressClassName: f,
        progressStyle: g,
        updateId: E,
        role: _,
        progress: R,
        rtl: x,
        toastId: P,
        deleteToast: B,
        isIn: b,
        isLoading: te,
        iconOut: W,
        closeOnClick: H,
        theme: Z
      } = t,
      ge = er(
        'Toastify__toast',
        `Toastify__toast-theme--${Z}`,
        `Toastify__toast--${u}`,
        { 'Toastify__toast--rtl': x },
        { 'Toastify__toast--close-on-click': H }
      ),
      le = xt(y) ? y({ rtl: x, position: m, type: u, defaultClassName: ge }) : er(ge, y),
      ye = !!R || !a,
      D = { closeToast: h, type: u, theme: Z };
    let j = null;
    return (
      s === !1 || (j = xt(s) ? s(D) : N.isValidElement(s) ? N.cloneElement(s, D) : p_(D)),
      ne.createElement(
        d,
        { isIn: b, done: B, position: m, preventExitTransition: n, nodeRef: r },
        ne.createElement(
          'div',
          { id: P, onClick: l, className: le, ...i, style: v, ref: r },
          ne.createElement(
            'div',
            {
              ...(b && { role: _ }),
              className: xt(S) ? S({ type: u }) : er('Toastify__toast-body', S),
              style: p
            },
            W != null &&
              ne.createElement(
                'div',
                {
                  className: er('Toastify__toast-icon', {
                    'Toastify--animate-icon Toastify__zoom-enter': !te
                  })
                },
                W
              ),
            ne.createElement('div', null, o)
          ),
          j,
          ne.createElement(S$, {
            ...(E && !ye ? { key: `pb-${E}` } : {}),
            rtl: x,
            theme: Z,
            delay: a,
            isRunning: e,
            isIn: b,
            closeToast: h,
            hide: c,
            type: u,
            style: g,
            className: f,
            controlledProgress: ye,
            progress: R || 0
          })
        )
      )
    );
  },
  vc = function (t, e) {
    return (
      e === void 0 && (e = !1),
      {
        enter: `Toastify--animate Toastify__${t}-enter`,
        exit: `Toastify--animate Toastify__${t}-exit`,
        appendPosition: e
      }
    );
  },
  T$ = yc(vc('bounce', !0));
yc(vc('slide', !0));
yc(vc('zoom'));
yc(vc('flip'));
const eu = N.forwardRef((t, e) => {
  const { getToastToRender: n, containerRef: r, isToastActive: i } = w$(t),
    { className: s, style: o, rtl: a, containerId: l } = t;
  function u(c) {
    const h = er('Toastify__toast-container', `Toastify__toast-container--${c}`, {
      'Toastify__toast-container--rtl': a
    });
    return xt(s) ? s({ position: c, rtl: a, defaultClassName: h }) : er(h, Xa(s));
  }
  return (
    N.useEffect(() => {
      e && (e.current = r.current);
    }, []),
    ne.createElement(
      'div',
      { ref: r, className: 'Toastify', id: l },
      n((c, h) => {
        const d = h.length ? { ...o } : { ...o, pointerEvents: 'none' };
        return ne.createElement(
          'div',
          { className: u(c), style: d, key: `container-${c}` },
          h.map((m, y) => {
            let { content: v, props: S } = m;
            return ne.createElement(
              _$,
              {
                ...S,
                isIn: i(S.toastId),
                style: { ...S.style, '--nth': y + 1, '--len': h.length },
                key: `toast-${S.key}`
              },
              v
            );
          })
        );
      })
    )
  );
});
(eu.displayName = 'ToastContainer'),
  (eu.defaultProps = {
    position: 'top-right',
    transition: T$,
    autoClose: 5e3,
    closeButton: p_,
    pauseOnHover: !0,
    pauseOnFocusLoss: !0,
    closeOnClick: !0,
    draggable: !0,
    draggablePercent: 80,
    draggableDirection: 'x',
    role: 'alert',
    theme: 'light'
  });
let bv,
  Ah = new Map(),
  Mv = [];
Fr.on(2, (t) => {
  (bv = t.containerId || t),
    Ah.set(bv, t),
    Mv.forEach((e) => {
      Fr.emit(0, e.content, e.options);
    }),
    (Mv = []);
}).on(3, (t) => {
  Ah.delete(t.containerId || t), Ah.size === 0 && Fr.off(0).off(1).off(5);
});
const I$ = () =>
    vf(q_, {
      children: [
        De(eu, {
          position: 'bottom-right',
          autoClose: 5e3,
          hideProgressBar: !1,
          newestOnTop: !1,
          closeOnClick: !0,
          rtl: !1,
          pauseOnFocusLoss: !0,
          draggable: !0,
          pauseOnHover: !0,
          theme: 'light'
        }),
        De(eu, {})
      ]
    }),
  k$ = () => AC(),
  C$ = () => {
    const t = k$();
    return (
      N.useEffect(() => {
        t(uf());
      }, []),
      De(ne.Fragment, {})
    );
  },
  A$ = Rh.createRoot(document.getElementById('root'));
A$.render(vf(eL, { children: [De(I$, {}), De(C$, {}), De(y$, {})] }));