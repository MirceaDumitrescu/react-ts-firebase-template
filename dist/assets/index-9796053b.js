function b_(t, e) {
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
function M_(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default') ? t.default : t;
}
var to = {},
  F_ = {
    get exports() {
      return to;
    },
    set exports(t) {
      to = t;
    }
  },
  fu = {},
  N = {},
  U_ = {
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
 */ var bo = Symbol.for('react.element'),
  V_ = Symbol.for('react.portal'),
  j_ = Symbol.for('react.fragment'),
  z_ = Symbol.for('react.strict_mode'),
  B_ = Symbol.for('react.profiler'),
  H_ = Symbol.for('react.provider'),
  K_ = Symbol.for('react.context'),
  W_ = Symbol.for('react.forward_ref'),
  q_ = Symbol.for('react.suspense'),
  G_ = Symbol.for('react.memo'),
  Q_ = Symbol.for('react.lazy'),
  zm = Symbol.iterator;
function Y_(t) {
  return t === null || typeof t != 'object'
    ? null
    : ((t = (zm && t[zm]) || t['@@iterator']), typeof t == 'function' ? t : null);
}
var Xv = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  },
  Jv = Object.assign,
  Zv = {};
function ls(t, e, n) {
  (this.props = t), (this.context = e), (this.refs = Zv), (this.updater = n || Xv);
}
ls.prototype.isReactComponent = {};
ls.prototype.setState = function (t, e) {
  if (typeof t != 'object' && typeof t != 'function' && t != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, t, e, 'setState');
};
ls.prototype.forceUpdate = function (t) {
  this.updater.enqueueForceUpdate(this, t, 'forceUpdate');
};
function e0() {}
e0.prototype = ls.prototype;
function kf(t, e, n) {
  (this.props = t), (this.context = e), (this.refs = Zv), (this.updater = n || Xv);
}
var Cf = (kf.prototype = new e0());
Cf.constructor = kf;
Jv(Cf, ls.prototype);
Cf.isPureReactComponent = !0;
var Bm = Array.isArray,
  t0 = Object.prototype.hasOwnProperty,
  Af = { current: null },
  n0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function r0(t, e, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (e != null)
    for (r in (e.ref !== void 0 && (o = e.ref), e.key !== void 0 && (s = '' + e.key), e))
      t0.call(e, r) && !n0.hasOwnProperty(r) && (i[r] = e[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (t && t.defaultProps) for (r in ((a = t.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return { $$typeof: bo, type: t, key: s, ref: o, props: i, _owner: Af.current };
}
function X_(t, e) {
  return { $$typeof: bo, type: t.type, key: e, ref: t.ref, props: t.props, _owner: t._owner };
}
function Nf(t) {
  return typeof t == 'object' && t !== null && t.$$typeof === bo;
}
function J_(t) {
  var e = { '=': '=0', ':': '=2' };
  return (
    '$' +
    t.replace(/[=:]/g, function (n) {
      return e[n];
    })
  );
}
var Hm = /\/+/g;
function Oc(t, e) {
  return typeof t == 'object' && t !== null && t.key != null ? J_('' + t.key) : e.toString(36);
}
function Fa(t, e, n, r, i) {
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
          case bo:
          case V_:
            o = !0;
        }
    }
  if (o)
    return (
      (o = t),
      (i = i(o)),
      (t = r === '' ? '.' + Oc(o, 0) : r),
      Bm(i)
        ? ((n = ''),
          t != null && (n = t.replace(Hm, '$&/') + '/'),
          Fa(i, e, n, '', function (u) {
            return u;
          }))
        : i != null &&
          (Nf(i) &&
            (i = X_(
              i,
              n +
                (!i.key || (o && o.key === i.key) ? '' : ('' + i.key).replace(Hm, '$&/') + '/') +
                t
            )),
          e.push(i)),
      1
    );
  if (((o = 0), (r = r === '' ? '.' : r + ':'), Bm(t)))
    for (var a = 0; a < t.length; a++) {
      s = t[a];
      var l = r + Oc(s, a);
      o += Fa(s, e, n, l, i);
    }
  else if (((l = Y_(t)), typeof l == 'function'))
    for (t = l.call(t), a = 0; !(s = t.next()).done; )
      (s = s.value), (l = r + Oc(s, a++)), (o += Fa(s, e, n, l, i));
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
function da(t, e, n) {
  if (t == null) return t;
  var r = [],
    i = 0;
  return (
    Fa(t, r, '', '', function (s) {
      return e.call(n, s, i++);
    }),
    r
  );
}
function Z_(t) {
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
  Ua = { transition: null },
  eT = { ReactCurrentDispatcher: vt, ReactCurrentBatchConfig: Ua, ReactCurrentOwner: Af };
ee.Children = {
  map: da,
  forEach: function (t, e, n) {
    da(
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
      da(t, function () {
        e++;
      }),
      e
    );
  },
  toArray: function (t) {
    return (
      da(t, function (e) {
        return e;
      }) || []
    );
  },
  only: function (t) {
    if (!Nf(t))
      throw Error('React.Children.only expected to receive a single React element child.');
    return t;
  }
};
ee.Component = ls;
ee.Fragment = j_;
ee.Profiler = B_;
ee.PureComponent = kf;
ee.StrictMode = z_;
ee.Suspense = q_;
ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eT;
ee.cloneElement = function (t, e, n) {
  if (t == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' + t + '.'
    );
  var r = Jv({}, t.props),
    i = t.key,
    s = t.ref,
    o = t._owner;
  if (e != null) {
    if (
      (e.ref !== void 0 && ((s = e.ref), (o = Af.current)),
      e.key !== void 0 && (i = '' + e.key),
      t.type && t.type.defaultProps)
    )
      var a = t.type.defaultProps;
    for (l in e)
      t0.call(e, l) &&
        !n0.hasOwnProperty(l) &&
        (r[l] = e[l] === void 0 && a !== void 0 ? a[l] : e[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: bo, type: t.type, key: i, ref: s, props: r, _owner: o };
};
ee.createContext = function (t) {
  return (
    (t = {
      $$typeof: K_,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }),
    (t.Provider = { $$typeof: H_, _context: t }),
    (t.Consumer = t)
  );
};
ee.createElement = r0;
ee.createFactory = function (t) {
  var e = r0.bind(null, t);
  return (e.type = t), e;
};
ee.createRef = function () {
  return { current: null };
};
ee.forwardRef = function (t) {
  return { $$typeof: W_, render: t };
};
ee.isValidElement = Nf;
ee.lazy = function (t) {
  return { $$typeof: Q_, _payload: { _status: -1, _result: t }, _init: Z_ };
};
ee.memo = function (t, e) {
  return { $$typeof: G_, type: t, compare: e === void 0 ? null : e };
};
ee.startTransition = function (t) {
  var e = Ua.transition;
  Ua.transition = {};
  try {
    t();
  } finally {
    Ua.transition = e;
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
})(U_);
const ne = M_(N),
  Uh = b_({ __proto__: null, default: ne }, [N]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tT = N,
  nT = Symbol.for('react.element'),
  rT = Symbol.for('react.fragment'),
  iT = Object.prototype.hasOwnProperty,
  sT = tT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  oT = { key: !0, ref: !0, __self: !0, __source: !0 };
function i0(t, e, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = '' + n),
    e.key !== void 0 && (s = '' + e.key),
    e.ref !== void 0 && (o = e.ref);
  for (r in e) iT.call(e, r) && !oT.hasOwnProperty(r) && (i[r] = e[r]);
  if (t && t.defaultProps) for (r in ((e = t.defaultProps), e)) i[r] === void 0 && (i[r] = e[r]);
  return { $$typeof: nT, type: t, key: s, ref: o, props: i, _owner: sT.current };
}
fu.Fragment = rT;
fu.jsx = i0;
fu.jsxs = i0;
(function (t) {
  t.exports = fu;
})(F_);
const s0 = to.Fragment,
  Se = to.jsx,
  Ni = to.jsxs;
var Vh = {},
  ul = {},
  aT = {
    get exports() {
      return ul;
    },
    set exports(t) {
      ul = t;
    }
  },
  $t = {},
  jh = {},
  lT = {
    get exports() {
      return jh;
    },
    set exports(t) {
      jh = t;
    }
  },
  o0 = {};
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
    var Y = D.length;
    D.push(j);
    e: for (; 0 < Y; ) {
      var ve = (Y - 1) >>> 1,
        De = D[ve];
      if (0 < i(De, j)) (D[ve] = j), (D[Y] = De), (Y = ve);
      else break e;
    }
  }
  function n(D) {
    return D.length === 0 ? null : D[0];
  }
  function r(D) {
    if (D.length === 0) return null;
    var j = D[0],
      Y = D.pop();
    if (Y !== j) {
      D[0] = Y;
      e: for (var ve = 0, De = D.length, li = De >>> 1; ve < li; ) {
        var yn = 2 * (ve + 1) - 1,
          ws = D[yn],
          Wt = yn + 1,
          Un = D[Wt];
        if (0 > i(ws, Y))
          Wt < De && 0 > i(Un, ws)
            ? ((D[ve] = Un), (D[Wt] = Y), (ve = Wt))
            : ((D[ve] = ws), (D[yn] = Y), (ve = yn));
        else if (Wt < De && 0 > i(Un, Y)) (D[ve] = Un), (D[Wt] = Y), (ve = Wt);
        else break e;
      }
    }
    return j;
  }
  function i(D, j) {
    var Y = D.sortIndex - j.sortIndex;
    return Y !== 0 ? Y : D.id - j.id;
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
    (y = !1), v && ((v = !1), p(O), (O = -1)), (m = !0);
    var Y = d;
    try {
      for (g(j), h = n(l); h !== null && (!(h.expirationTime > j) || (D && !te())); ) {
        var ve = h.callback;
        if (typeof ve == 'function') {
          (h.callback = null), (d = h.priorityLevel);
          var De = ve(h.expirationTime <= j);
          (j = t.unstable_now()),
            typeof De == 'function' ? (h.callback = De) : h === n(l) && r(l),
            g(j);
        } else r(l);
        h = n(l);
      }
      if (h !== null) var li = !0;
      else {
        var yn = n(u);
        yn !== null && ye(E, yn.startTime - j), (li = !1);
      }
      return li;
    } finally {
      (h = null), (d = Y), (m = !1);
    }
  }
  var R = !1,
    x = null,
    O = -1,
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
    O = S(function () {
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
      var Y = d;
      d = j;
      try {
        return D();
      } finally {
        d = Y;
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
      var Y = d;
      d = D;
      try {
        return j();
      } finally {
        d = Y;
      }
    }),
    (t.unstable_scheduleCallback = function (D, j, Y) {
      var ve = t.unstable_now();
      switch (
        (typeof Y == 'object' && Y !== null
          ? ((Y = Y.delay), (Y = typeof Y == 'number' && 0 < Y ? ve + Y : ve))
          : (Y = ve),
        D)
      ) {
        case 1:
          var De = -1;
          break;
        case 2:
          De = 250;
          break;
        case 5:
          De = 1073741823;
          break;
        case 4:
          De = 1e4;
          break;
        default:
          De = 5e3;
      }
      return (
        (De = Y + De),
        (D = {
          id: c++,
          callback: j,
          priorityLevel: D,
          startTime: Y,
          expirationTime: De,
          sortIndex: -1
        }),
        Y > ve
          ? ((D.sortIndex = Y),
            e(u, D),
            n(l) === null && D === n(u) && (v ? (p(O), (O = -1)) : (v = !0), ye(E, Y - ve)))
          : ((D.sortIndex = De), e(l, D), y || m || ((y = !0), le(_))),
        D
      );
    }),
    (t.unstable_shouldYield = te),
    (t.unstable_wrapCallback = function (D) {
      var j = d;
      return function () {
        var Y = d;
        d = j;
        try {
          return D.apply(this, arguments);
        } finally {
          d = Y;
        }
      };
    });
})(o0);
(function (t) {
  t.exports = o0;
})(lT);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var a0 = N,
  Ot = jh;
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
var l0 = new Set(),
  no = {};
function si(t, e) {
  Wi(t, e), Wi(t + 'Capture', e);
}
function Wi(t, e) {
  for (no[t] = e, t = 0; t < e.length; t++) l0.add(e[t]);
}
var An = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  zh = Object.prototype.hasOwnProperty,
  uT =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Km = {},
  Wm = {};
function cT(t) {
  return zh.call(Wm, t) ? !0 : zh.call(Km, t) ? !1 : uT.test(t) ? (Wm[t] = !0) : ((Km[t] = !0), !1);
}
function hT(t, e, n, r) {
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
function dT(t, e, n, r) {
  if (e === null || typeof e > 'u' || hT(t, e, n, r)) return !0;
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
var Rf = /[\-:]([a-z])/g;
function xf(t) {
  return t[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (t) {
    var e = t.replace(Rf, xf);
    et[e] = new wt(e, 1, !1, t, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (t) {
    var e = t.replace(Rf, xf);
    et[e] = new wt(e, 1, !1, t, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (t) {
  var e = t.replace(Rf, xf);
  et[e] = new wt(e, 1, !1, t, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (t) {
  et[t] = new wt(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
et.xlinkHref = new wt('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1);
['src', 'href', 'action', 'formAction'].forEach(function (t) {
  et[t] = new wt(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function Df(t, e, n, r) {
  var i = et.hasOwnProperty(e) ? et[e] : null;
  (i !== null
    ? i.type !== 0
    : r || !(2 < e.length) || (e[0] !== 'o' && e[0] !== 'O') || (e[1] !== 'n' && e[1] !== 'N')) &&
    (dT(e, n, i, r) && (n = null),
    r || i === null
      ? cT(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, '' + n))
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
var bn = a0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  fa = Symbol.for('react.element'),
  fi = Symbol.for('react.portal'),
  pi = Symbol.for('react.fragment'),
  Of = Symbol.for('react.strict_mode'),
  Bh = Symbol.for('react.profiler'),
  u0 = Symbol.for('react.provider'),
  c0 = Symbol.for('react.context'),
  Pf = Symbol.for('react.forward_ref'),
  Hh = Symbol.for('react.suspense'),
  Kh = Symbol.for('react.suspense_list'),
  Lf = Symbol.for('react.memo'),
  zn = Symbol.for('react.lazy'),
  h0 = Symbol.for('react.offscreen'),
  qm = Symbol.iterator;
function Es(t) {
  return t === null || typeof t != 'object'
    ? null
    : ((t = (qm && t[qm]) || t['@@iterator']), typeof t == 'function' ? t : null);
}
var Ce = Object.assign,
  Pc;
function xs(t) {
  if (Pc === void 0)
    try {
      throw Error();
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/);
      Pc = (e && e[1]) || '';
    }
  return (
    `
` +
    Pc +
    t
  );
}
var Lc = !1;
function $c(t, e) {
  if (!t || Lc) return '';
  Lc = !0;
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
    (Lc = !1), (Error.prepareStackTrace = n);
  }
  return (t = t ? t.displayName || t.name : '') ? xs(t) : '';
}
function fT(t) {
  switch (t.tag) {
    case 5:
      return xs(t.type);
    case 16:
      return xs('Lazy');
    case 13:
      return xs('Suspense');
    case 19:
      return xs('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (t = $c(t.type, !1)), t;
    case 11:
      return (t = $c(t.type.render, !1)), t;
    case 1:
      return (t = $c(t.type, !0)), t;
    default:
      return '';
  }
}
function Wh(t) {
  if (t == null) return null;
  if (typeof t == 'function') return t.displayName || t.name || null;
  if (typeof t == 'string') return t;
  switch (t) {
    case pi:
      return 'Fragment';
    case fi:
      return 'Portal';
    case Bh:
      return 'Profiler';
    case Of:
      return 'StrictMode';
    case Hh:
      return 'Suspense';
    case Kh:
      return 'SuspenseList';
  }
  if (typeof t == 'object')
    switch (t.$$typeof) {
      case c0:
        return (t.displayName || 'Context') + '.Consumer';
      case u0:
        return (t._context.displayName || 'Context') + '.Provider';
      case Pf:
        var e = t.render;
        return (
          (t = t.displayName),
          t ||
            ((t = e.displayName || e.name || ''),
            (t = t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')),
          t
        );
      case Lf:
        return (e = t.displayName || null), e !== null ? e : Wh(t.type) || 'Memo';
      case zn:
        (e = t._payload), (t = t._init);
        try {
          return Wh(t(e));
        } catch {}
    }
  return null;
}
function pT(t) {
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
      return Wh(e);
    case 8:
      return e === Of ? 'StrictMode' : 'Mode';
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
function mr(t) {
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
function d0(t) {
  var e = t.type;
  return (t = t.nodeName) && t.toLowerCase() === 'input' && (e === 'checkbox' || e === 'radio');
}
function mT(t) {
  var e = d0(t) ? 'checked' : 'value',
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
function pa(t) {
  t._valueTracker || (t._valueTracker = mT(t));
}
function f0(t) {
  if (!t) return !1;
  var e = t._valueTracker;
  if (!e) return !0;
  var n = e.getValue(),
    r = '';
  return (
    t && (r = d0(t) ? (t.checked ? 'true' : 'false') : t.value),
    (t = r),
    t !== n ? (e.setValue(t), !0) : !1
  );
}
function cl(t) {
  if (((t = t || (typeof document < 'u' ? document : void 0)), typeof t > 'u')) return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
function qh(t, e) {
  var n = e.checked;
  return Ce({}, e, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? t._wrapperState.initialChecked
  });
}
function Gm(t, e) {
  var n = e.defaultValue == null ? '' : e.defaultValue,
    r = e.checked != null ? e.checked : e.defaultChecked;
  (n = mr(e.value != null ? e.value : n)),
    (t._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: e.type === 'checkbox' || e.type === 'radio' ? e.checked != null : e.value != null
    });
}
function p0(t, e) {
  (e = e.checked), e != null && Df(t, 'checked', e, !1);
}
function Gh(t, e) {
  p0(t, e);
  var n = mr(e.value),
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
    ? Qh(t, e.type, n)
    : e.hasOwnProperty('defaultValue') && Qh(t, e.type, mr(e.defaultValue)),
    e.checked == null && e.defaultChecked != null && (t.defaultChecked = !!e.defaultChecked);
}
function Qm(t, e, n) {
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
function Qh(t, e, n) {
  (e !== 'number' || cl(t.ownerDocument) !== t) &&
    (n == null
      ? (t.defaultValue = '' + t._wrapperState.initialValue)
      : t.defaultValue !== '' + n && (t.defaultValue = '' + n));
}
var Ds = Array.isArray;
function Ri(t, e, n, r) {
  if (((t = t.options), e)) {
    e = {};
    for (var i = 0; i < n.length; i++) e['$' + n[i]] = !0;
    for (n = 0; n < t.length; n++)
      (i = e.hasOwnProperty('$' + t[n].value)),
        t[n].selected !== i && (t[n].selected = i),
        i && r && (t[n].defaultSelected = !0);
  } else {
    for (n = '' + mr(n), e = null, i = 0; i < t.length; i++) {
      if (t[i].value === n) {
        (t[i].selected = !0), r && (t[i].defaultSelected = !0);
        return;
      }
      e !== null || t[i].disabled || (e = t[i]);
    }
    e !== null && (e.selected = !0);
  }
}
function Yh(t, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(k(91));
  return Ce({}, e, {
    value: void 0,
    defaultValue: void 0,
    children: '' + t._wrapperState.initialValue
  });
}
function Ym(t, e) {
  var n = e.value;
  if (n == null) {
    if (((n = e.children), (e = e.defaultValue), n != null)) {
      if (e != null) throw Error(k(92));
      if (Ds(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      e = n;
    }
    e == null && (e = ''), (n = e);
  }
  t._wrapperState = { initialValue: mr(n) };
}
function m0(t, e) {
  var n = mr(e.value),
    r = mr(e.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== t.value && (t.value = n),
    e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
    r != null && (t.defaultValue = '' + r);
}
function Xm(t) {
  var e = t.textContent;
  e === t._wrapperState.initialValue && e !== '' && e !== null && (t.value = e);
}
function g0(t) {
  switch (t) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Xh(t, e) {
  return t == null || t === 'http://www.w3.org/1999/xhtml'
    ? g0(e)
    : t === 'http://www.w3.org/2000/svg' && e === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : t;
}
var ma,
  y0 = (function (t) {
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
        ma = ma || document.createElement('div'),
          ma.innerHTML = '<svg>' + e.valueOf().toString() + '</svg>',
          e = ma.firstChild;
        t.firstChild;

      )
        t.removeChild(t.firstChild);
      for (; e.firstChild; ) t.appendChild(e.firstChild);
    }
  });
function ro(t, e) {
  if (e) {
    var n = t.firstChild;
    if (n && n === t.lastChild && n.nodeType === 3) {
      n.nodeValue = e;
      return;
    }
  }
  t.textContent = e;
}
var Vs = {
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
  gT = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Vs).forEach(function (t) {
  gT.forEach(function (e) {
    (e = e + t.charAt(0).toUpperCase() + t.substring(1)), (Vs[e] = Vs[t]);
  });
});
function v0(t, e, n) {
  return e == null || typeof e == 'boolean' || e === ''
    ? ''
    : n || typeof e != 'number' || e === 0 || (Vs.hasOwnProperty(t) && Vs[t])
    ? ('' + e).trim()
    : e + 'px';
}
function w0(t, e) {
  t = t.style;
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        i = v0(n, e[n], r);
      n === 'float' && (n = 'cssFloat'), r ? t.setProperty(n, i) : (t[n] = i);
    }
}
var yT = Ce(
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
function Jh(t, e) {
  if (e) {
    if (yT[t] && (e.children != null || e.dangerouslySetInnerHTML != null)) throw Error(k(137, t));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(k(60));
      if (typeof e.dangerouslySetInnerHTML != 'object' || !('__html' in e.dangerouslySetInnerHTML))
        throw Error(k(61));
    }
    if (e.style != null && typeof e.style != 'object') throw Error(k(62));
  }
}
function Zh(t, e) {
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
var ed = null;
function $f(t) {
  return (
    (t = t.target || t.srcElement || window),
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
  );
}
var td = null,
  xi = null,
  Di = null;
function Jm(t) {
  if ((t = Uo(t))) {
    if (typeof td != 'function') throw Error(k(280));
    var e = t.stateNode;
    e && ((e = vu(e)), td(t.stateNode, t.type, e));
  }
}
function E0(t) {
  xi ? (Di ? Di.push(t) : (Di = [t])) : (xi = t);
}
function S0() {
  if (xi) {
    var t = xi,
      e = Di;
    if (((Di = xi = null), Jm(t), e)) for (t = 0; t < e.length; t++) Jm(e[t]);
  }
}
function _0(t, e) {
  return t(e);
}
function T0() {}
var bc = !1;
function I0(t, e, n) {
  if (bc) return t(e, n);
  bc = !0;
  try {
    return _0(t, e, n);
  } finally {
    (bc = !1), (xi !== null || Di !== null) && (T0(), S0());
  }
}
function io(t, e) {
  var n = t.stateNode;
  if (n === null) return null;
  var r = vu(n);
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
var nd = !1;
if (An)
  try {
    var Ss = {};
    Object.defineProperty(Ss, 'passive', {
      get: function () {
        nd = !0;
      }
    }),
      window.addEventListener('test', Ss, Ss),
      window.removeEventListener('test', Ss, Ss);
  } catch {
    nd = !1;
  }
function vT(t, e, n, r, i, s, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var js = !1,
  hl = null,
  dl = !1,
  rd = null,
  wT = {
    onError: function (t) {
      (js = !0), (hl = t);
    }
  };
function ET(t, e, n, r, i, s, o, a, l) {
  (js = !1), (hl = null), vT.apply(wT, arguments);
}
function ST(t, e, n, r, i, s, o, a, l) {
  if ((ET.apply(this, arguments), js)) {
    if (js) {
      var u = hl;
      (js = !1), (hl = null);
    } else throw Error(k(198));
    dl || ((dl = !0), (rd = u));
  }
}
function oi(t) {
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
function k0(t) {
  if (t.tag === 13) {
    var e = t.memoizedState;
    if ((e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)), e !== null))
      return e.dehydrated;
  }
  return null;
}
function Zm(t) {
  if (oi(t) !== t) throw Error(k(188));
}
function _T(t) {
  var e = t.alternate;
  if (!e) {
    if (((e = oi(t)), e === null)) throw Error(k(188));
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
        if (s === n) return Zm(i), t;
        if (s === r) return Zm(i), e;
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
function C0(t) {
  return (t = _T(t)), t !== null ? A0(t) : null;
}
function A0(t) {
  if (t.tag === 5 || t.tag === 6) return t;
  for (t = t.child; t !== null; ) {
    var e = A0(t);
    if (e !== null) return e;
    t = t.sibling;
  }
  return null;
}
var N0 = Ot.unstable_scheduleCallback,
  eg = Ot.unstable_cancelCallback,
  TT = Ot.unstable_shouldYield,
  IT = Ot.unstable_requestPaint,
  Oe = Ot.unstable_now,
  kT = Ot.unstable_getCurrentPriorityLevel,
  bf = Ot.unstable_ImmediatePriority,
  R0 = Ot.unstable_UserBlockingPriority,
  fl = Ot.unstable_NormalPriority,
  CT = Ot.unstable_LowPriority,
  x0 = Ot.unstable_IdlePriority,
  pu = null,
  cn = null;
function AT(t) {
  if (cn && typeof cn.onCommitFiberRoot == 'function')
    try {
      cn.onCommitFiberRoot(pu, t, void 0, (t.current.flags & 128) === 128);
    } catch {}
}
var Zt = Math.clz32 ? Math.clz32 : xT,
  NT = Math.log,
  RT = Math.LN2;
function xT(t) {
  return (t >>>= 0), t === 0 ? 32 : (31 - ((NT(t) / RT) | 0)) | 0;
}
var ga = 64,
  ya = 4194304;
function Os(t) {
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
function pl(t, e) {
  var n = t.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = t.suspendedLanes,
    s = t.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~i;
    a !== 0 ? (r = Os(a)) : ((s &= o), s !== 0 && (r = Os(s)));
  } else (o = n & ~i), o !== 0 ? (r = Os(o)) : s !== 0 && (r = Os(s));
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
function DT(t, e) {
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
function OT(t, e) {
  for (
    var n = t.suspendedLanes, r = t.pingedLanes, i = t.expirationTimes, s = t.pendingLanes;
    0 < s;

  ) {
    var o = 31 - Zt(s),
      a = 1 << o,
      l = i[o];
    l === -1 ? (!(a & n) || a & r) && (i[o] = DT(a, e)) : l <= e && (t.expiredLanes |= a),
      (s &= ~a);
  }
}
function id(t) {
  return (t = t.pendingLanes & -1073741825), t !== 0 ? t : t & 1073741824 ? 1073741824 : 0;
}
function D0() {
  var t = ga;
  return (ga <<= 1), !(ga & 4194240) && (ga = 64), t;
}
function Mc(t) {
  for (var e = [], n = 0; 31 > n; n++) e.push(t);
  return e;
}
function Mo(t, e, n) {
  (t.pendingLanes |= e),
    e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
    (t = t.eventTimes),
    (e = 31 - Zt(e)),
    (t[e] = n);
}
function PT(t, e) {
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
function Mf(t, e) {
  var n = (t.entangledLanes |= e);
  for (t = t.entanglements; n; ) {
    var r = 31 - Zt(n),
      i = 1 << r;
    (i & e) | (t[r] & e) && (t[r] |= e), (n &= ~i);
  }
}
var ce = 0;
function O0(t) {
  return (t &= -t), 1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1;
}
var P0,
  Ff,
  L0,
  $0,
  b0,
  sd = !1,
  va = [],
  nr = null,
  rr = null,
  ir = null,
  so = new Map(),
  oo = new Map(),
  Hn = [],
  LT =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function tg(t, e) {
  switch (t) {
    case 'focusin':
    case 'focusout':
      nr = null;
      break;
    case 'dragenter':
    case 'dragleave':
      rr = null;
      break;
    case 'mouseover':
    case 'mouseout':
      ir = null;
      break;
    case 'pointerover':
    case 'pointerout':
      so.delete(e.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      oo.delete(e.pointerId);
  }
}
function _s(t, e, n, r, i, s) {
  return t === null || t.nativeEvent !== s
    ? ((t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i]
      }),
      e !== null && ((e = Uo(e)), e !== null && Ff(e)),
      t)
    : ((t.eventSystemFlags |= r),
      (e = t.targetContainers),
      i !== null && e.indexOf(i) === -1 && e.push(i),
      t);
}
function $T(t, e, n, r, i) {
  switch (e) {
    case 'focusin':
      return (nr = _s(nr, t, e, n, r, i)), !0;
    case 'dragenter':
      return (rr = _s(rr, t, e, n, r, i)), !0;
    case 'mouseover':
      return (ir = _s(ir, t, e, n, r, i)), !0;
    case 'pointerover':
      var s = i.pointerId;
      return so.set(s, _s(so.get(s) || null, t, e, n, r, i)), !0;
    case 'gotpointercapture':
      return (s = i.pointerId), oo.set(s, _s(oo.get(s) || null, t, e, n, r, i)), !0;
  }
  return !1;
}
function M0(t) {
  var e = Or(t.target);
  if (e !== null) {
    var n = oi(e);
    if (n !== null) {
      if (((e = n.tag), e === 13)) {
        if (((e = k0(n)), e !== null)) {
          (t.blockedOn = e),
            b0(t.priority, function () {
              L0(n);
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
function Va(t) {
  if (t.blockedOn !== null) return !1;
  for (var e = t.targetContainers; 0 < e.length; ) {
    var n = od(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
    if (n === null) {
      n = t.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ed = r), n.target.dispatchEvent(r), (ed = null);
    } else return (e = Uo(n)), e !== null && Ff(e), (t.blockedOn = n), !1;
    e.shift();
  }
  return !0;
}
function ng(t, e, n) {
  Va(t) && n.delete(e);
}
function bT() {
  (sd = !1),
    nr !== null && Va(nr) && (nr = null),
    rr !== null && Va(rr) && (rr = null),
    ir !== null && Va(ir) && (ir = null),
    so.forEach(ng),
    oo.forEach(ng);
}
function Ts(t, e) {
  t.blockedOn === e &&
    ((t.blockedOn = null),
    sd || ((sd = !0), Ot.unstable_scheduleCallback(Ot.unstable_NormalPriority, bT)));
}
function ao(t) {
  function e(i) {
    return Ts(i, t);
  }
  if (0 < va.length) {
    Ts(va[0], t);
    for (var n = 1; n < va.length; n++) {
      var r = va[n];
      r.blockedOn === t && (r.blockedOn = null);
    }
  }
  for (
    nr !== null && Ts(nr, t),
      rr !== null && Ts(rr, t),
      ir !== null && Ts(ir, t),
      so.forEach(e),
      oo.forEach(e),
      n = 0;
    n < Hn.length;
    n++
  )
    (r = Hn[n]), r.blockedOn === t && (r.blockedOn = null);
  for (; 0 < Hn.length && ((n = Hn[0]), n.blockedOn === null); )
    M0(n), n.blockedOn === null && Hn.shift();
}
var Oi = bn.ReactCurrentBatchConfig,
  ml = !0;
function MT(t, e, n, r) {
  var i = ce,
    s = Oi.transition;
  Oi.transition = null;
  try {
    (ce = 1), Uf(t, e, n, r);
  } finally {
    (ce = i), (Oi.transition = s);
  }
}
function FT(t, e, n, r) {
  var i = ce,
    s = Oi.transition;
  Oi.transition = null;
  try {
    (ce = 4), Uf(t, e, n, r);
  } finally {
    (ce = i), (Oi.transition = s);
  }
}
function Uf(t, e, n, r) {
  if (ml) {
    var i = od(t, e, n, r);
    if (i === null) qc(t, e, r, gl, n), tg(t, r);
    else if ($T(i, t, e, n, r)) r.stopPropagation();
    else if ((tg(t, r), e & 4 && -1 < LT.indexOf(t))) {
      for (; i !== null; ) {
        var s = Uo(i);
        if ((s !== null && P0(s), (s = od(t, e, n, r)), s === null && qc(t, e, r, gl, n), s === i))
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else qc(t, e, r, null, n);
  }
}
var gl = null;
function od(t, e, n, r) {
  if (((gl = null), (t = $f(r)), (t = Or(t)), t !== null))
    if (((e = oi(t)), e === null)) t = null;
    else if (((n = e.tag), n === 13)) {
      if (((t = k0(e)), t !== null)) return t;
      t = null;
    } else if (n === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null;
      t = null;
    } else e !== t && (t = null);
  return (gl = t), null;
}
function F0(t) {
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
      switch (kT()) {
        case bf:
          return 1;
        case R0:
          return 4;
        case fl:
        case CT:
          return 16;
        case x0:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Xn = null,
  Vf = null,
  ja = null;
function U0() {
  if (ja) return ja;
  var t,
    e = Vf,
    n = e.length,
    r,
    i = 'value' in Xn ? Xn.value : Xn.textContent,
    s = i.length;
  for (t = 0; t < n && e[t] === i[t]; t++);
  var o = n - t;
  for (r = 1; r <= o && e[n - r] === i[s - r]; r++);
  return (ja = i.slice(t, 1 < r ? 1 - r : void 0));
}
function za(t) {
  var e = t.keyCode;
  return (
    'charCode' in t ? ((t = t.charCode), t === 0 && e === 13 && (t = 13)) : (t = e),
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
  );
}
function wa() {
  return !0;
}
function rg() {
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
        ? wa
        : rg),
      (this.isPropagationStopped = rg),
      this
    );
  }
  return (
    Ce(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = wa));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = wa));
      },
      persist: function () {},
      isPersistent: wa
    }),
    e
  );
}
var us = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  },
  jf = bt(us),
  Fo = Ce({}, us, { view: 0, detail: 0 }),
  UT = bt(Fo),
  Fc,
  Uc,
  Is,
  mu = Ce({}, Fo, {
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
    getModifierState: zf,
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
        : (t !== Is &&
            (Is && t.type === 'mousemove'
              ? ((Fc = t.screenX - Is.screenX), (Uc = t.screenY - Is.screenY))
              : (Uc = Fc = 0),
            (Is = t)),
          Fc);
    },
    movementY: function (t) {
      return 'movementY' in t ? t.movementY : Uc;
    }
  }),
  ig = bt(mu),
  VT = Ce({}, mu, { dataTransfer: 0 }),
  jT = bt(VT),
  zT = Ce({}, Fo, { relatedTarget: 0 }),
  Vc = bt(zT),
  BT = Ce({}, us, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  HT = bt(BT),
  KT = Ce({}, us, {
    clipboardData: function (t) {
      return 'clipboardData' in t ? t.clipboardData : window.clipboardData;
    }
  }),
  WT = bt(KT),
  qT = Ce({}, us, { data: 0 }),
  sg = bt(qT),
  GT = {
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
  QT = {
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
  YT = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function XT(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = YT[t]) ? !!e[t] : !1;
}
function zf() {
  return XT;
}
var JT = Ce({}, Fo, {
    key: function (t) {
      if (t.key) {
        var e = GT[t.key] || t.key;
        if (e !== 'Unidentified') return e;
      }
      return t.type === 'keypress'
        ? ((t = za(t)), t === 13 ? 'Enter' : String.fromCharCode(t))
        : t.type === 'keydown' || t.type === 'keyup'
        ? QT[t.keyCode] || 'Unidentified'
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
    getModifierState: zf,
    charCode: function (t) {
      return t.type === 'keypress' ? za(t) : 0;
    },
    keyCode: function (t) {
      return t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0;
    },
    which: function (t) {
      return t.type === 'keypress'
        ? za(t)
        : t.type === 'keydown' || t.type === 'keyup'
        ? t.keyCode
        : 0;
    }
  }),
  ZT = bt(JT),
  eI = Ce({}, mu, {
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
  og = bt(eI),
  tI = Ce({}, Fo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: zf
  }),
  nI = bt(tI),
  rI = Ce({}, us, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  iI = bt(rI),
  sI = Ce({}, mu, {
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
  oI = bt(sI),
  aI = [9, 13, 27, 32],
  Bf = An && 'CompositionEvent' in window,
  zs = null;
An && 'documentMode' in document && (zs = document.documentMode);
var lI = An && 'TextEvent' in window && !zs,
  V0 = An && (!Bf || (zs && 8 < zs && 11 >= zs)),
  ag = String.fromCharCode(32),
  lg = !1;
function j0(t, e) {
  switch (t) {
    case 'keyup':
      return aI.indexOf(e.keyCode) !== -1;
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
function z0(t) {
  return (t = t.detail), typeof t == 'object' && 'data' in t ? t.data : null;
}
var mi = !1;
function uI(t, e) {
  switch (t) {
    case 'compositionend':
      return z0(e);
    case 'keypress':
      return e.which !== 32 ? null : ((lg = !0), ag);
    case 'textInput':
      return (t = e.data), t === ag && lg ? null : t;
    default:
      return null;
  }
}
function cI(t, e) {
  if (mi)
    return t === 'compositionend' || (!Bf && j0(t, e))
      ? ((t = U0()), (ja = Vf = Xn = null), (mi = !1), t)
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
      return V0 && e.locale !== 'ko' ? null : e.data;
    default:
      return null;
  }
}
var hI = {
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
function ug(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === 'input' ? !!hI[t.type] : e === 'textarea';
}
function B0(t, e, n, r) {
  E0(r),
    (e = yl(e, 'onChange')),
    0 < e.length &&
      ((n = new jf('onChange', 'change', null, n, r)), t.push({ event: n, listeners: e }));
}
var Bs = null,
  lo = null;
function dI(t) {
  ew(t, 0);
}
function gu(t) {
  var e = vi(t);
  if (f0(e)) return t;
}
function fI(t, e) {
  if (t === 'change') return e;
}
var H0 = !1;
if (An) {
  var jc;
  if (An) {
    var zc = 'oninput' in document;
    if (!zc) {
      var cg = document.createElement('div');
      cg.setAttribute('oninput', 'return;'), (zc = typeof cg.oninput == 'function');
    }
    jc = zc;
  } else jc = !1;
  H0 = jc && (!document.documentMode || 9 < document.documentMode);
}
function hg() {
  Bs && (Bs.detachEvent('onpropertychange', K0), (lo = Bs = null));
}
function K0(t) {
  if (t.propertyName === 'value' && gu(lo)) {
    var e = [];
    B0(e, lo, t, $f(t)), I0(dI, e);
  }
}
function pI(t, e, n) {
  t === 'focusin'
    ? (hg(), (Bs = e), (lo = n), Bs.attachEvent('onpropertychange', K0))
    : t === 'focusout' && hg();
}
function mI(t) {
  if (t === 'selectionchange' || t === 'keyup' || t === 'keydown') return gu(lo);
}
function gI(t, e) {
  if (t === 'click') return gu(e);
}
function yI(t, e) {
  if (t === 'input' || t === 'change') return gu(e);
}
function vI(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var tn = typeof Object.is == 'function' ? Object.is : vI;
function uo(t, e) {
  if (tn(t, e)) return !0;
  if (typeof t != 'object' || t === null || typeof e != 'object' || e === null) return !1;
  var n = Object.keys(t),
    r = Object.keys(e);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!zh.call(e, i) || !tn(t[i], e[i])) return !1;
  }
  return !0;
}
function dg(t) {
  for (; t && t.firstChild; ) t = t.firstChild;
  return t;
}
function fg(t, e) {
  var n = dg(t);
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
    n = dg(n);
  }
}
function W0(t, e) {
  return t && e
    ? t === e
      ? !0
      : t && t.nodeType === 3
      ? !1
      : e && e.nodeType === 3
      ? W0(t, e.parentNode)
      : 'contains' in t
      ? t.contains(e)
      : t.compareDocumentPosition
      ? !!(t.compareDocumentPosition(e) & 16)
      : !1
    : !1;
}
function q0() {
  for (var t = window, e = cl(); e instanceof t.HTMLIFrameElement; ) {
    try {
      var n = typeof e.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) t = e.contentWindow;
    else break;
    e = cl(t.document);
  }
  return e;
}
function Hf(t) {
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
function wI(t) {
  var e = q0(),
    n = t.focusedElem,
    r = t.selectionRange;
  if (e !== n && n && n.ownerDocument && W0(n.ownerDocument.documentElement, n)) {
    if (r !== null && Hf(n)) {
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
          (i = fg(n, s));
        var o = fg(n, r);
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
var EI = An && 'documentMode' in document && 11 >= document.documentMode,
  gi = null,
  ad = null,
  Hs = null,
  ld = !1;
function pg(t, e, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ld ||
    gi == null ||
    gi !== cl(r) ||
    ((r = gi),
    'selectionStart' in r && Hf(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset
        })),
    (Hs && uo(Hs, r)) ||
      ((Hs = r),
      (r = yl(ad, 'onSelect')),
      0 < r.length &&
        ((e = new jf('onSelect', 'select', null, e, n)),
        t.push({ event: e, listeners: r }),
        (e.target = gi))));
}
function Ea(t, e) {
  var n = {};
  return (
    (n[t.toLowerCase()] = e.toLowerCase()),
    (n['Webkit' + t] = 'webkit' + e),
    (n['Moz' + t] = 'moz' + e),
    n
  );
}
var yi = {
    animationend: Ea('Animation', 'AnimationEnd'),
    animationiteration: Ea('Animation', 'AnimationIteration'),
    animationstart: Ea('Animation', 'AnimationStart'),
    transitionend: Ea('Transition', 'TransitionEnd')
  },
  Bc = {},
  G0 = {};
An &&
  ((G0 = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete yi.animationend.animation,
    delete yi.animationiteration.animation,
    delete yi.animationstart.animation),
  'TransitionEvent' in window || delete yi.transitionend.transition);
function yu(t) {
  if (Bc[t]) return Bc[t];
  if (!yi[t]) return t;
  var e = yi[t],
    n;
  for (n in e) if (e.hasOwnProperty(n) && n in G0) return (Bc[t] = e[n]);
  return t;
}
var Q0 = yu('animationend'),
  Y0 = yu('animationiteration'),
  X0 = yu('animationstart'),
  J0 = yu('transitionend'),
  Z0 = new Map(),
  mg =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function _r(t, e) {
  Z0.set(t, e), si(e, [t]);
}
for (var Hc = 0; Hc < mg.length; Hc++) {
  var Kc = mg[Hc],
    SI = Kc.toLowerCase(),
    _I = Kc[0].toUpperCase() + Kc.slice(1);
  _r(SI, 'on' + _I);
}
_r(Q0, 'onAnimationEnd');
_r(Y0, 'onAnimationIteration');
_r(X0, 'onAnimationStart');
_r('dblclick', 'onDoubleClick');
_r('focusin', 'onFocus');
_r('focusout', 'onBlur');
_r(J0, 'onTransitionEnd');
Wi('onMouseEnter', ['mouseout', 'mouseover']);
Wi('onMouseLeave', ['mouseout', 'mouseover']);
Wi('onPointerEnter', ['pointerout', 'pointerover']);
Wi('onPointerLeave', ['pointerout', 'pointerover']);
si('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '));
si(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')
);
si('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
si('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '));
si('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '));
si('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
var Ps =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  TI = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Ps));
function gg(t, e, n) {
  var r = t.type || 'unknown-event';
  (t.currentTarget = n), ST(r, e, void 0, t), (t.currentTarget = null);
}
function ew(t, e) {
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
          gg(i, a, u), (s = l);
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
          gg(i, a, u), (s = l);
        }
    }
  }
  if (dl) throw ((t = rd), (dl = !1), (rd = null), t);
}
function pe(t, e) {
  var n = e[fd];
  n === void 0 && (n = e[fd] = new Set());
  var r = t + '__bubble';
  n.has(r) || (tw(e, t, 2, !1), n.add(r));
}
function Wc(t, e, n) {
  var r = 0;
  e && (r |= 4), tw(n, t, r, e);
}
var Sa = '_reactListening' + Math.random().toString(36).slice(2);
function co(t) {
  if (!t[Sa]) {
    (t[Sa] = !0),
      l0.forEach(function (n) {
        n !== 'selectionchange' && (TI.has(n) || Wc(n, !1, t), Wc(n, !0, t));
      });
    var e = t.nodeType === 9 ? t : t.ownerDocument;
    e === null || e[Sa] || ((e[Sa] = !0), Wc('selectionchange', !1, e));
  }
}
function tw(t, e, n, r) {
  switch (F0(e)) {
    case 1:
      var i = MT;
      break;
    case 4:
      i = FT;
      break;
    default:
      i = Uf;
  }
  (n = i.bind(null, e, n, t)),
    (i = void 0),
    !nd || (e !== 'touchstart' && e !== 'touchmove' && e !== 'wheel') || (i = !0),
    r
      ? i !== void 0
        ? t.addEventListener(e, n, { capture: !0, passive: i })
        : t.addEventListener(e, n, !0)
      : i !== void 0
      ? t.addEventListener(e, n, { passive: i })
      : t.addEventListener(e, n, !1);
}
function qc(t, e, n, r, i) {
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
          if (((o = Or(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = s = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  I0(function () {
    var u = s,
      c = $f(n),
      h = [];
    e: {
      var d = Z0.get(t);
      if (d !== void 0) {
        var m = jf,
          y = t;
        switch (t) {
          case 'keypress':
            if (za(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            m = ZT;
            break;
          case 'focusin':
            (y = 'focus'), (m = Vc);
            break;
          case 'focusout':
            (y = 'blur'), (m = Vc);
            break;
          case 'beforeblur':
          case 'afterblur':
            m = Vc;
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
            m = ig;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            m = jT;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            m = nI;
            break;
          case Q0:
          case Y0:
          case X0:
            m = HT;
            break;
          case J0:
            m = iI;
            break;
          case 'scroll':
            m = UT;
            break;
          case 'wheel':
            m = oI;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            m = WT;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            m = og;
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
              ((g = E), p !== null && ((E = io(f, p)), E != null && v.push(ho(f, E, g)))),
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
          d && n !== ed && (y = n.relatedTarget || n.fromElement) && (Or(y) || y[Nn]))
        )
          break e;
        if (
          (m || d) &&
          ((d =
            c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window),
          m
            ? ((y = n.relatedTarget || n.toElement),
              (m = u),
              (y = y ? Or(y) : null),
              y !== null && ((S = oi(y)), y !== S || (y.tag !== 5 && y.tag !== 6)) && (y = null))
            : ((m = null), (y = u)),
          m !== y)
        ) {
          if (
            ((v = ig),
            (E = 'onMouseLeave'),
            (p = 'onMouseEnter'),
            (f = 'mouse'),
            (t === 'pointerout' || t === 'pointerover') &&
              ((v = og), (E = 'onPointerLeave'), (p = 'onPointerEnter'), (f = 'pointer')),
            (S = m == null ? d : vi(m)),
            (g = y == null ? d : vi(y)),
            (d = new v(E, f + 'leave', m, n, c)),
            (d.target = S),
            (d.relatedTarget = g),
            (E = null),
            Or(c) === u &&
              ((v = new v(p, f + 'enter', y, n, c)),
              (v.target = g),
              (v.relatedTarget = S),
              (E = v)),
            (S = E),
            m && y)
          )
            t: {
              for (v = m, p = y, f = 0, g = v; g; g = ui(g)) f++;
              for (g = 0, E = p; E; E = ui(E)) g++;
              for (; 0 < f - g; ) (v = ui(v)), f--;
              for (; 0 < g - f; ) (p = ui(p)), g--;
              for (; f--; ) {
                if (v === p || (p !== null && v === p.alternate)) break t;
                (v = ui(v)), (p = ui(p));
              }
              v = null;
            }
          else v = null;
          m !== null && yg(h, d, m, v, !1), y !== null && S !== null && yg(h, S, y, v, !0);
        }
      }
      e: {
        if (
          ((d = u ? vi(u) : window),
          (m = d.nodeName && d.nodeName.toLowerCase()),
          m === 'select' || (m === 'input' && d.type === 'file'))
        )
          var _ = fI;
        else if (ug(d))
          if (H0) _ = yI;
          else {
            _ = mI;
            var R = pI;
          }
        else
          (m = d.nodeName) &&
            m.toLowerCase() === 'input' &&
            (d.type === 'checkbox' || d.type === 'radio') &&
            (_ = gI);
        if (_ && (_ = _(t, u))) {
          B0(h, _, n, c);
          break e;
        }
        R && R(t, d, u),
          t === 'focusout' &&
            (R = d._wrapperState) &&
            R.controlled &&
            d.type === 'number' &&
            Qh(d, 'number', d.value);
      }
      switch (((R = u ? vi(u) : window), t)) {
        case 'focusin':
          (ug(R) || R.contentEditable === 'true') && ((gi = R), (ad = u), (Hs = null));
          break;
        case 'focusout':
          Hs = ad = gi = null;
          break;
        case 'mousedown':
          ld = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (ld = !1), pg(h, n, c);
          break;
        case 'selectionchange':
          if (EI) break;
        case 'keydown':
        case 'keyup':
          pg(h, n, c);
      }
      var x;
      if (Bf)
        e: {
          switch (t) {
            case 'compositionstart':
              var O = 'onCompositionStart';
              break e;
            case 'compositionend':
              O = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              O = 'onCompositionUpdate';
              break e;
          }
          O = void 0;
        }
      else
        mi
          ? j0(t, n) && (O = 'onCompositionEnd')
          : t === 'keydown' && n.keyCode === 229 && (O = 'onCompositionStart');
      O &&
        (V0 &&
          n.locale !== 'ko' &&
          (mi || O !== 'onCompositionStart'
            ? O === 'onCompositionEnd' && mi && (x = U0())
            : ((Xn = c), (Vf = 'value' in Xn ? Xn.value : Xn.textContent), (mi = !0))),
        (R = yl(u, O)),
        0 < R.length &&
          ((O = new sg(O, t, null, n, c)),
          h.push({ event: O, listeners: R }),
          x ? (O.data = x) : ((x = z0(n)), x !== null && (O.data = x)))),
        (x = lI ? uI(t, n) : cI(t, n)) &&
          ((u = yl(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new sg('onBeforeInput', 'beforeinput', null, n, c)),
            h.push({ event: c, listeners: u }),
            (c.data = x)));
    }
    ew(h, e);
  });
}
function ho(t, e, n) {
  return { instance: t, listener: e, currentTarget: n };
}
function yl(t, e) {
  for (var n = e + 'Capture', r = []; t !== null; ) {
    var i = t,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = io(t, n)),
      s != null && r.unshift(ho(t, s, i)),
      (s = io(t, e)),
      s != null && r.push(ho(t, s, i))),
      (t = t.return);
  }
  return r;
}
function ui(t) {
  if (t === null) return null;
  do t = t.return;
  while (t && t.tag !== 5);
  return t || null;
}
function yg(t, e, n, r, i) {
  for (var s = e._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = io(n, s)), l != null && o.unshift(ho(n, l, a)))
        : i || ((l = io(n, s)), l != null && o.push(ho(n, l, a)))),
      (n = n.return);
  }
  o.length !== 0 && t.push({ event: e, listeners: o });
}
var II = /\r\n?/g,
  kI = /\u0000|\uFFFD/g;
function vg(t) {
  return (typeof t == 'string' ? t : '' + t)
    .replace(
      II,
      `
`
    )
    .replace(kI, '');
}
function _a(t, e, n) {
  if (((e = vg(e)), vg(t) !== e && n)) throw Error(k(425));
}
function vl() {}
var ud = null,
  cd = null;
function hd(t, e) {
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
var dd = typeof setTimeout == 'function' ? setTimeout : void 0,
  CI = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  wg = typeof Promise == 'function' ? Promise : void 0,
  AI =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof wg < 'u'
      ? function (t) {
          return wg.resolve(null).then(t).catch(NI);
        }
      : dd;
function NI(t) {
  setTimeout(function () {
    throw t;
  });
}
function Gc(t, e) {
  var n = e,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((t.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === '/$')) {
        if (r === 0) {
          t.removeChild(i), ao(e);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = i;
  } while (n);
  ao(e);
}
function sr(t) {
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
function Eg(t) {
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
var cs = Math.random().toString(36).slice(2),
  on = '__reactFiber$' + cs,
  fo = '__reactProps$' + cs,
  Nn = '__reactContainer$' + cs,
  fd = '__reactEvents$' + cs,
  RI = '__reactListeners$' + cs,
  xI = '__reactHandles$' + cs;
function Or(t) {
  var e = t[on];
  if (e) return e;
  for (var n = t.parentNode; n; ) {
    if ((e = n[Nn] || n[on])) {
      if (((n = e.alternate), e.child !== null || (n !== null && n.child !== null)))
        for (t = Eg(t); t !== null; ) {
          if ((n = t[on])) return n;
          t = Eg(t);
        }
      return e;
    }
    (t = n), (n = t.parentNode);
  }
  return null;
}
function Uo(t) {
  return (
    (t = t[on] || t[Nn]),
    !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t
  );
}
function vi(t) {
  if (t.tag === 5 || t.tag === 6) return t.stateNode;
  throw Error(k(33));
}
function vu(t) {
  return t[fo] || null;
}
var pd = [],
  wi = -1;
function Tr(t) {
  return { current: t };
}
function me(t) {
  0 > wi || ((t.current = pd[wi]), (pd[wi] = null), wi--);
}
function fe(t, e) {
  wi++, (pd[wi] = t.current), (t.current = e);
}
var gr = {},
  ht = Tr(gr),
  Tt = Tr(!1),
  qr = gr;
function qi(t, e) {
  var n = t.type.contextTypes;
  if (!n) return gr;
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
function wl() {
  me(Tt), me(ht);
}
function Sg(t, e, n) {
  if (ht.current !== gr) throw Error(k(168));
  fe(ht, e), fe(Tt, n);
}
function nw(t, e, n) {
  var r = t.stateNode;
  if (((e = e.childContextTypes), typeof r.getChildContext != 'function')) return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in e)) throw Error(k(108, pT(t) || 'Unknown', i));
  return Ce({}, n, r);
}
function El(t) {
  return (
    (t = ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || gr),
    (qr = ht.current),
    fe(ht, t),
    fe(Tt, Tt.current),
    !0
  );
}
function _g(t, e, n) {
  var r = t.stateNode;
  if (!r) throw Error(k(169));
  n
    ? ((t = nw(t, e, qr)),
      (r.__reactInternalMemoizedMergedChildContext = t),
      me(Tt),
      me(ht),
      fe(ht, t))
    : me(Tt),
    fe(Tt, n);
}
var En = null,
  wu = !1,
  Qc = !1;
function rw(t) {
  En === null ? (En = [t]) : En.push(t);
}
function DI(t) {
  (wu = !0), rw(t);
}
function Ir() {
  if (!Qc && En !== null) {
    Qc = !0;
    var t = 0,
      e = ce;
    try {
      var n = En;
      for (ce = 1; t < n.length; t++) {
        var r = n[t];
        do r = r(!0);
        while (r !== null);
      }
      (En = null), (wu = !1);
    } catch (i) {
      throw (En !== null && (En = En.slice(t + 1)), N0(bf, Ir), i);
    } finally {
      (ce = e), (Qc = !1);
    }
  }
  return null;
}
var Ei = [],
  Si = 0,
  Sl = null,
  _l = 0,
  Ut = [],
  Vt = 0,
  Gr = null,
  Sn = 1,
  _n = '';
function Ar(t, e) {
  (Ei[Si++] = _l), (Ei[Si++] = Sl), (Sl = t), (_l = e);
}
function iw(t, e, n) {
  (Ut[Vt++] = Sn), (Ut[Vt++] = _n), (Ut[Vt++] = Gr), (Gr = t);
  var r = Sn;
  t = _n;
  var i = 32 - Zt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - Zt(e) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (Sn = (1 << (32 - Zt(e) + i)) | (n << i) | r),
      (_n = s + t);
  } else (Sn = (1 << s) | (n << i) | r), (_n = t);
}
function Kf(t) {
  t.return !== null && (Ar(t, 1), iw(t, 1, 0));
}
function Wf(t) {
  for (; t === Sl; ) (Sl = Ei[--Si]), (Ei[Si] = null), (_l = Ei[--Si]), (Ei[Si] = null);
  for (; t === Gr; )
    (Gr = Ut[--Vt]),
      (Ut[Vt] = null),
      (_n = Ut[--Vt]),
      (Ut[Vt] = null),
      (Sn = Ut[--Vt]),
      (Ut[Vt] = null);
}
var Dt = null,
  Rt = null,
  _e = !1,
  Yt = null;
function sw(t, e) {
  var n = jt(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = e),
    (n.return = t),
    (e = t.deletions),
    e === null ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n);
}
function Tg(t, e) {
  switch (t.tag) {
    case 5:
      var n = t.type;
      return (
        (e = e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase() ? null : e),
        e !== null ? ((t.stateNode = e), (Dt = t), (Rt = sr(e.firstChild)), !0) : !1
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
          ? ((n = Gr !== null ? { id: Sn, overflow: _n } : null),
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
function md(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function gd(t) {
  if (_e) {
    var e = Rt;
    if (e) {
      var n = e;
      if (!Tg(t, e)) {
        if (md(t)) throw Error(k(418));
        e = sr(n.nextSibling);
        var r = Dt;
        e && Tg(t, e) ? sw(r, n) : ((t.flags = (t.flags & -4097) | 2), (_e = !1), (Dt = t));
      }
    } else {
      if (md(t)) throw Error(k(418));
      (t.flags = (t.flags & -4097) | 2), (_e = !1), (Dt = t);
    }
  }
}
function Ig(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; ) t = t.return;
  Dt = t;
}
function Ta(t) {
  if (t !== Dt) return !1;
  if (!_e) return Ig(t), (_e = !0), !1;
  var e;
  if (
    ((e = t.tag !== 3) &&
      !(e = t.tag !== 5) &&
      ((e = t.type), (e = e !== 'head' && e !== 'body' && !hd(t.type, t.memoizedProps))),
    e && (e = Rt))
  ) {
    if (md(t)) throw (ow(), Error(k(418)));
    for (; e; ) sw(t, e), (e = sr(e.nextSibling));
  }
  if ((Ig(t), t.tag === 13)) {
    if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(k(317));
    e: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (n === '/$') {
            if (e === 0) {
              Rt = sr(t.nextSibling);
              break e;
            }
            e--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || e++;
        }
        t = t.nextSibling;
      }
      Rt = null;
    }
  } else Rt = Dt ? sr(t.stateNode.nextSibling) : null;
  return !0;
}
function ow() {
  for (var t = Rt; t; ) t = sr(t.nextSibling);
}
function Gi() {
  (Rt = Dt = null), (_e = !1);
}
function qf(t) {
  Yt === null ? (Yt = [t]) : Yt.push(t);
}
var OI = bn.ReactCurrentBatchConfig;
function Gt(t, e) {
  if (t && t.defaultProps) {
    (e = Ce({}, e)), (t = t.defaultProps);
    for (var n in t) e[n] === void 0 && (e[n] = t[n]);
    return e;
  }
  return e;
}
var Tl = Tr(null),
  Il = null,
  _i = null,
  Gf = null;
function Qf() {
  Gf = _i = Il = null;
}
function Yf(t) {
  var e = Tl.current;
  me(Tl), (t._currentValue = e);
}
function yd(t, e, n) {
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
function Pi(t, e) {
  (Il = t),
    (Gf = _i = null),
    (t = t.dependencies),
    t !== null && t.firstContext !== null && (t.lanes & e && (_t = !0), (t.firstContext = null));
}
function Bt(t) {
  var e = t._currentValue;
  if (Gf !== t)
    if (((t = { context: t, memoizedValue: e, next: null }), _i === null)) {
      if (Il === null) throw Error(k(308));
      (_i = t), (Il.dependencies = { lanes: 0, firstContext: t });
    } else _i = _i.next = t;
  return e;
}
var Pr = null;
function Xf(t) {
  Pr === null ? (Pr = [t]) : Pr.push(t);
}
function aw(t, e, n, r) {
  var i = e.interleaved;
  return (
    i === null ? ((n.next = n), Xf(e)) : ((n.next = i.next), (i.next = n)),
    (e.interleaved = n),
    Rn(t, r)
  );
}
function Rn(t, e) {
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
var Bn = !1;
function Jf(t) {
  t.updateQueue = {
    baseState: t.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null
  };
}
function lw(t, e) {
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
function Cn(t, e) {
  return { eventTime: t, lane: e, tag: 0, payload: null, callback: null, next: null };
}
function or(t, e, n) {
  var r = t.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), se & 2)) {
    var i = r.pending;
    return i === null ? (e.next = e) : ((e.next = i.next), (i.next = e)), (r.pending = e), Rn(t, n);
  }
  return (
    (i = r.interleaved),
    i === null ? ((e.next = e), Xf(r)) : ((e.next = i.next), (i.next = e)),
    (r.interleaved = e),
    Rn(t, n)
  );
}
function Ba(t, e, n) {
  if (((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194240) !== 0))) {
    var r = e.lanes;
    (r &= t.pendingLanes), (n |= r), (e.lanes = n), Mf(t, n);
  }
}
function kg(t, e) {
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
function kl(t, e, n, r) {
  var i = t.updateQueue;
  Bn = !1;
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
              h = Ce({}, h, d);
              break e;
            case 2:
              Bn = !0;
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
    (Yr |= o), (t.lanes = o), (t.memoizedState = h);
  }
}
function Cg(t, e, n) {
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
var uw = new a0.Component().refs;
function vd(t, e, n, r) {
  (e = t.memoizedState),
    (n = n(r, e)),
    (n = n == null ? e : Ce({}, e, n)),
    (t.memoizedState = n),
    t.lanes === 0 && (t.updateQueue.baseState = n);
}
var Eu = {
  isMounted: function (t) {
    return (t = t._reactInternals) ? oi(t) === t : !1;
  },
  enqueueSetState: function (t, e, n) {
    t = t._reactInternals;
    var r = yt(),
      i = lr(t),
      s = Cn(r, i);
    (s.payload = e),
      n != null && (s.callback = n),
      (e = or(t, s, i)),
      e !== null && (en(e, t, i, r), Ba(e, t, i));
  },
  enqueueReplaceState: function (t, e, n) {
    t = t._reactInternals;
    var r = yt(),
      i = lr(t),
      s = Cn(r, i);
    (s.tag = 1),
      (s.payload = e),
      n != null && (s.callback = n),
      (e = or(t, s, i)),
      e !== null && (en(e, t, i, r), Ba(e, t, i));
  },
  enqueueForceUpdate: function (t, e) {
    t = t._reactInternals;
    var n = yt(),
      r = lr(t),
      i = Cn(n, r);
    (i.tag = 2),
      e != null && (i.callback = e),
      (e = or(t, i, r)),
      e !== null && (en(e, t, r, n), Ba(e, t, r));
  }
};
function Ag(t, e, n, r, i, s, o) {
  return (
    (t = t.stateNode),
    typeof t.shouldComponentUpdate == 'function'
      ? t.shouldComponentUpdate(r, s, o)
      : e.prototype && e.prototype.isPureReactComponent
      ? !uo(n, r) || !uo(i, s)
      : !0
  );
}
function cw(t, e, n) {
  var r = !1,
    i = gr,
    s = e.contextType;
  return (
    typeof s == 'object' && s !== null
      ? (s = Bt(s))
      : ((i = It(e) ? qr : ht.current),
        (r = e.contextTypes),
        (s = (r = r != null) ? qi(t, i) : gr)),
    (e = new e(n, s)),
    (t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
    (e.updater = Eu),
    (t.stateNode = e),
    (e._reactInternals = t),
    r &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = i),
      (t.__reactInternalMemoizedMaskedChildContext = s)),
    e
  );
}
function Ng(t, e, n, r) {
  (t = e.state),
    typeof e.componentWillReceiveProps == 'function' && e.componentWillReceiveProps(n, r),
    typeof e.UNSAFE_componentWillReceiveProps == 'function' &&
      e.UNSAFE_componentWillReceiveProps(n, r),
    e.state !== t && Eu.enqueueReplaceState(e, e.state, null);
}
function wd(t, e, n, r) {
  var i = t.stateNode;
  (i.props = n), (i.state = t.memoizedState), (i.refs = uw), Jf(t);
  var s = e.contextType;
  typeof s == 'object' && s !== null
    ? (i.context = Bt(s))
    : ((s = It(e) ? qr : ht.current), (i.context = qi(t, s))),
    (i.state = t.memoizedState),
    (s = e.getDerivedStateFromProps),
    typeof s == 'function' && (vd(t, e, s, n), (i.state = t.memoizedState)),
    typeof e.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' &&
        typeof i.componentWillMount != 'function') ||
      ((e = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' && i.UNSAFE_componentWillMount(),
      e !== i.state && Eu.enqueueReplaceState(i, i.state, null),
      kl(t, n, i, r),
      (i.state = t.memoizedState)),
    typeof i.componentDidMount == 'function' && (t.flags |= 4194308);
}
function ks(t, e, n) {
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
            a === uw && (a = i.refs = {}), o === null ? delete a[s] : (a[s] = o);
          }),
          (e._stringRef = s),
          e);
    }
    if (typeof t != 'string') throw Error(k(284));
    if (!n._owner) throw Error(k(290, t));
  }
  return t;
}
function Ia(t, e) {
  throw (
    ((t = Object.prototype.toString.call(e)),
    Error(
      k(31, t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t)
    ))
  );
}
function Rg(t) {
  var e = t._init;
  return e(t._payload);
}
function hw(t) {
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
    return (p = ur(p, f)), (p.index = 0), (p.sibling = null), p;
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
      ? ((f = nh(g, p.mode, E)), (f.return = p), f)
      : ((f = i(f, g)), (f.return = p), f);
  }
  function l(p, f, g, E) {
    var _ = g.type;
    return _ === pi
      ? c(p, f, g.props.children, E, g.key)
      : f !== null &&
        (f.elementType === _ ||
          (typeof _ == 'object' && _ !== null && _.$$typeof === zn && Rg(_) === f.type))
      ? ((E = i(f, g.props)), (E.ref = ks(p, f, g)), (E.return = p), E)
      : ((E = Qa(g.type, g.key, g.props, null, p.mode, E)),
        (E.ref = ks(p, f, g)),
        (E.return = p),
        E);
  }
  function u(p, f, g, E) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== g.containerInfo ||
      f.stateNode.implementation !== g.implementation
      ? ((f = rh(g, p.mode, E)), (f.return = p), f)
      : ((f = i(f, g.children || [])), (f.return = p), f);
  }
  function c(p, f, g, E, _) {
    return f === null || f.tag !== 7
      ? ((f = jr(g, p.mode, E, _)), (f.return = p), f)
      : ((f = i(f, g)), (f.return = p), f);
  }
  function h(p, f, g) {
    if ((typeof f == 'string' && f !== '') || typeof f == 'number')
      return (f = nh('' + f, p.mode, g)), (f.return = p), f;
    if (typeof f == 'object' && f !== null) {
      switch (f.$$typeof) {
        case fa:
          return (
            (g = Qa(f.type, f.key, f.props, null, p.mode, g)),
            (g.ref = ks(p, null, f)),
            (g.return = p),
            g
          );
        case fi:
          return (f = rh(f, p.mode, g)), (f.return = p), f;
        case zn:
          var E = f._init;
          return h(p, E(f._payload), g);
      }
      if (Ds(f) || Es(f)) return (f = jr(f, p.mode, g, null)), (f.return = p), f;
      Ia(p, f);
    }
    return null;
  }
  function d(p, f, g, E) {
    var _ = f !== null ? f.key : null;
    if ((typeof g == 'string' && g !== '') || typeof g == 'number')
      return _ !== null ? null : a(p, f, '' + g, E);
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case fa:
          return g.key === _ ? l(p, f, g, E) : null;
        case fi:
          return g.key === _ ? u(p, f, g, E) : null;
        case zn:
          return (_ = g._init), d(p, f, _(g._payload), E);
      }
      if (Ds(g) || Es(g)) return _ !== null ? null : c(p, f, g, E, null);
      Ia(p, g);
    }
    return null;
  }
  function m(p, f, g, E, _) {
    if ((typeof E == 'string' && E !== '') || typeof E == 'number')
      return (p = p.get(g) || null), a(f, p, '' + E, _);
    if (typeof E == 'object' && E !== null) {
      switch (E.$$typeof) {
        case fa:
          return (p = p.get(E.key === null ? g : E.key) || null), l(f, p, E, _);
        case fi:
          return (p = p.get(E.key === null ? g : E.key) || null), u(f, p, E, _);
        case zn:
          var R = E._init;
          return m(p, f, g, R(E._payload), _);
      }
      if (Ds(E) || Es(E)) return (p = p.get(g) || null), c(f, p, E, _, null);
      Ia(f, E);
    }
    return null;
  }
  function y(p, f, g, E) {
    for (var _ = null, R = null, x = f, O = (f = 0), B = null; x !== null && O < g.length; O++) {
      x.index > O ? ((B = x), (x = null)) : (B = x.sibling);
      var b = d(p, x, g[O], E);
      if (b === null) {
        x === null && (x = B);
        break;
      }
      t && x && b.alternate === null && e(p, x),
        (f = s(b, f, O)),
        R === null ? (_ = b) : (R.sibling = b),
        (R = b),
        (x = B);
    }
    if (O === g.length) return n(p, x), _e && Ar(p, O), _;
    if (x === null) {
      for (; O < g.length; O++)
        (x = h(p, g[O], E)),
          x !== null && ((f = s(x, f, O)), R === null ? (_ = x) : (R.sibling = x), (R = x));
      return _e && Ar(p, O), _;
    }
    for (x = r(p, x); O < g.length; O++)
      (B = m(x, p, O, g[O], E)),
        B !== null &&
          (t && B.alternate !== null && x.delete(B.key === null ? O : B.key),
          (f = s(B, f, O)),
          R === null ? (_ = B) : (R.sibling = B),
          (R = B));
    return (
      t &&
        x.forEach(function (te) {
          return e(p, te);
        }),
      _e && Ar(p, O),
      _
    );
  }
  function v(p, f, g, E) {
    var _ = Es(g);
    if (typeof _ != 'function') throw Error(k(150));
    if (((g = _.call(g)), g == null)) throw Error(k(151));
    for (
      var R = (_ = null), x = f, O = (f = 0), B = null, b = g.next();
      x !== null && !b.done;
      O++, b = g.next()
    ) {
      x.index > O ? ((B = x), (x = null)) : (B = x.sibling);
      var te = d(p, x, b.value, E);
      if (te === null) {
        x === null && (x = B);
        break;
      }
      t && x && te.alternate === null && e(p, x),
        (f = s(te, f, O)),
        R === null ? (_ = te) : (R.sibling = te),
        (R = te),
        (x = B);
    }
    if (b.done) return n(p, x), _e && Ar(p, O), _;
    if (x === null) {
      for (; !b.done; O++, b = g.next())
        (b = h(p, b.value, E)),
          b !== null && ((f = s(b, f, O)), R === null ? (_ = b) : (R.sibling = b), (R = b));
      return _e && Ar(p, O), _;
    }
    for (x = r(p, x); !b.done; O++, b = g.next())
      (b = m(x, p, O, b.value, E)),
        b !== null &&
          (t && b.alternate !== null && x.delete(b.key === null ? O : b.key),
          (f = s(b, f, O)),
          R === null ? (_ = b) : (R.sibling = b),
          (R = b));
    return (
      t &&
        x.forEach(function (W) {
          return e(p, W);
        }),
      _e && Ar(p, O),
      _
    );
  }
  function S(p, f, g, E) {
    if (
      (typeof g == 'object' &&
        g !== null &&
        g.type === pi &&
        g.key === null &&
        (g = g.props.children),
      typeof g == 'object' && g !== null)
    ) {
      switch (g.$$typeof) {
        case fa:
          e: {
            for (var _ = g.key, R = f; R !== null; ) {
              if (R.key === _) {
                if (((_ = g.type), _ === pi)) {
                  if (R.tag === 7) {
                    n(p, R.sibling), (f = i(R, g.props.children)), (f.return = p), (p = f);
                    break e;
                  }
                } else if (
                  R.elementType === _ ||
                  (typeof _ == 'object' && _ !== null && _.$$typeof === zn && Rg(_) === R.type)
                ) {
                  n(p, R.sibling),
                    (f = i(R, g.props)),
                    (f.ref = ks(p, R, g)),
                    (f.return = p),
                    (p = f);
                  break e;
                }
                n(p, R);
                break;
              } else e(p, R);
              R = R.sibling;
            }
            g.type === pi
              ? ((f = jr(g.props.children, p.mode, E, g.key)), (f.return = p), (p = f))
              : ((E = Qa(g.type, g.key, g.props, null, p.mode, E)),
                (E.ref = ks(p, f, g)),
                (E.return = p),
                (p = E));
          }
          return o(p);
        case fi:
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
            (f = rh(g, p.mode, E)), (f.return = p), (p = f);
          }
          return o(p);
        case zn:
          return (R = g._init), S(p, f, R(g._payload), E);
      }
      if (Ds(g)) return y(p, f, g, E);
      if (Es(g)) return v(p, f, g, E);
      Ia(p, g);
    }
    return (typeof g == 'string' && g !== '') || typeof g == 'number'
      ? ((g = '' + g),
        f !== null && f.tag === 6
          ? (n(p, f.sibling), (f = i(f, g)), (f.return = p), (p = f))
          : (n(p, f), (f = nh(g, p.mode, E)), (f.return = p), (p = f)),
        o(p))
      : n(p, f);
  }
  return S;
}
var Qi = hw(!0),
  dw = hw(!1),
  Vo = {},
  hn = Tr(Vo),
  po = Tr(Vo),
  mo = Tr(Vo);
function Lr(t) {
  if (t === Vo) throw Error(k(174));
  return t;
}
function Zf(t, e) {
  switch ((fe(mo, e), fe(po, t), fe(hn, Vo), (t = e.nodeType), t)) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : Xh(null, '');
      break;
    default:
      (t = t === 8 ? e.parentNode : e),
        (e = t.namespaceURI || null),
        (t = t.tagName),
        (e = Xh(e, t));
  }
  me(hn), fe(hn, e);
}
function Yi() {
  me(hn), me(po), me(mo);
}
function fw(t) {
  Lr(mo.current);
  var e = Lr(hn.current),
    n = Xh(e, t.type);
  e !== n && (fe(po, t), fe(hn, n));
}
function ep(t) {
  po.current === t && (me(hn), me(po));
}
var Ie = Tr(0);
function Cl(t) {
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
var Yc = [];
function tp() {
  for (var t = 0; t < Yc.length; t++) Yc[t]._workInProgressVersionPrimary = null;
  Yc.length = 0;
}
var Ha = bn.ReactCurrentDispatcher,
  Xc = bn.ReactCurrentBatchConfig,
  Qr = 0,
  ke = null,
  Ue = null,
  Ke = null,
  Al = !1,
  Ks = !1,
  go = 0,
  PI = 0;
function rt() {
  throw Error(k(321));
}
function np(t, e) {
  if (e === null) return !1;
  for (var n = 0; n < e.length && n < t.length; n++) if (!tn(t[n], e[n])) return !1;
  return !0;
}
function rp(t, e, n, r, i, s) {
  if (
    ((Qr = s),
    (ke = e),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.lanes = 0),
    (Ha.current = t === null || t.memoizedState === null ? MI : FI),
    (t = n(r, i)),
    Ks)
  ) {
    s = 0;
    do {
      if (((Ks = !1), (go = 0), 25 <= s)) throw Error(k(301));
      (s += 1), (Ke = Ue = null), (e.updateQueue = null), (Ha.current = UI), (t = n(r, i));
    } while (Ks);
  }
  if (
    ((Ha.current = Nl),
    (e = Ue !== null && Ue.next !== null),
    (Qr = 0),
    (Ke = Ue = ke = null),
    (Al = !1),
    e)
  )
    throw Error(k(300));
  return t;
}
function ip() {
  var t = go !== 0;
  return (go = 0), t;
}
function sn() {
  var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Ke === null ? (ke.memoizedState = Ke = t) : (Ke = Ke.next = t), Ke;
}
function Ht() {
  if (Ue === null) {
    var t = ke.alternate;
    t = t !== null ? t.memoizedState : null;
  } else t = Ue.next;
  var e = Ke === null ? ke.memoizedState : Ke.next;
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
      Ke === null ? (ke.memoizedState = Ke = t) : (Ke = Ke.next = t);
  }
  return Ke;
}
function yo(t, e) {
  return typeof e == 'function' ? e(t) : e;
}
function Jc(t) {
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
      if ((Qr & c) === c)
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
        l === null ? ((a = l = h), (o = r)) : (l = l.next = h), (ke.lanes |= c), (Yr |= c);
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
    do (s = i.lane), (ke.lanes |= s), (Yr |= s), (i = i.next);
    while (i !== t);
  } else i === null && (n.lanes = 0);
  return [e.memoizedState, n.dispatch];
}
function Zc(t) {
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
function pw() {}
function mw(t, e) {
  var n = ke,
    r = Ht(),
    i = e(),
    s = !tn(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (_t = !0)),
    (r = r.queue),
    sp(vw.bind(null, n, r, t), [t]),
    r.getSnapshot !== e || s || (Ke !== null && Ke.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), vo(9, yw.bind(null, n, r, i, e), void 0, null), We === null))
      throw Error(k(349));
    Qr & 30 || gw(n, e, i);
  }
  return i;
}
function gw(t, e, n) {
  (t.flags |= 16384),
    (t = { getSnapshot: e, value: n }),
    (e = ke.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }), (ke.updateQueue = e), (e.stores = [t]))
      : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
}
function yw(t, e, n, r) {
  (e.value = n), (e.getSnapshot = r), ww(e) && Ew(t);
}
function vw(t, e, n) {
  return n(function () {
    ww(e) && Ew(t);
  });
}
function ww(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !tn(t, n);
  } catch {
    return !0;
  }
}
function Ew(t) {
  var e = Rn(t, 1);
  e !== null && en(e, t, 1, -1);
}
function xg(t) {
  var e = sn();
  return (
    typeof t == 'function' && (t = t()),
    (e.memoizedState = e.baseState = t),
    (t = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: yo,
      lastRenderedState: t
    }),
    (e.queue = t),
    (t = t.dispatch = bI.bind(null, ke, t)),
    [e.memoizedState, t]
  );
}
function vo(t, e, n, r) {
  return (
    (t = { tag: t, create: e, destroy: n, deps: r, next: null }),
    (e = ke.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (ke.updateQueue = e),
        (e.lastEffect = t.next = t))
      : ((n = e.lastEffect),
        n === null
          ? (e.lastEffect = t.next = t)
          : ((r = n.next), (n.next = t), (t.next = r), (e.lastEffect = t))),
    t
  );
}
function Sw() {
  return Ht().memoizedState;
}
function Ka(t, e, n, r) {
  var i = sn();
  (ke.flags |= t), (i.memoizedState = vo(1 | e, n, void 0, r === void 0 ? null : r));
}
function Su(t, e, n, r) {
  var i = Ht();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (Ue !== null) {
    var o = Ue.memoizedState;
    if (((s = o.destroy), r !== null && np(r, o.deps))) {
      i.memoizedState = vo(e, n, s, r);
      return;
    }
  }
  (ke.flags |= t), (i.memoizedState = vo(1 | e, n, s, r));
}
function Dg(t, e) {
  return Ka(8390656, 8, t, e);
}
function sp(t, e) {
  return Su(2048, 8, t, e);
}
function _w(t, e) {
  return Su(4, 2, t, e);
}
function Tw(t, e) {
  return Su(4, 4, t, e);
}
function Iw(t, e) {
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
function kw(t, e, n) {
  return (n = n != null ? n.concat([t]) : null), Su(4, 4, Iw.bind(null, e, t), n);
}
function op() {}
function Cw(t, e) {
  var n = Ht();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && np(e, r[1]) ? r[0] : ((n.memoizedState = [t, e]), t);
}
function Aw(t, e) {
  var n = Ht();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && np(e, r[1])
    ? r[0]
    : ((t = t()), (n.memoizedState = [t, e]), t);
}
function Nw(t, e, n) {
  return Qr & 21
    ? (tn(n, e) || ((n = D0()), (ke.lanes |= n), (Yr |= n), (t.baseState = !0)), e)
    : (t.baseState && ((t.baseState = !1), (_t = !0)), (t.memoizedState = n));
}
function LI(t, e) {
  var n = ce;
  (ce = n !== 0 && 4 > n ? n : 4), t(!0);
  var r = Xc.transition;
  Xc.transition = {};
  try {
    t(!1), e();
  } finally {
    (ce = n), (Xc.transition = r);
  }
}
function Rw() {
  return Ht().memoizedState;
}
function $I(t, e, n) {
  var r = lr(t);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), xw(t)))
    Dw(e, n);
  else if (((n = aw(t, e, n, r)), n !== null)) {
    var i = yt();
    en(n, t, r, i), Ow(n, e, r);
  }
}
function bI(t, e, n) {
  var r = lr(t),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (xw(t)) Dw(e, i);
  else {
    var s = t.alternate;
    if (t.lanes === 0 && (s === null || s.lanes === 0) && ((s = e.lastRenderedReducer), s !== null))
      try {
        var o = e.lastRenderedState,
          a = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), tn(a, o))) {
          var l = e.interleaved;
          l === null ? ((i.next = i), Xf(e)) : ((i.next = l.next), (l.next = i)),
            (e.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = aw(t, e, i, r)), n !== null && ((i = yt()), en(n, t, r, i), Ow(n, e, r));
  }
}
function xw(t) {
  var e = t.alternate;
  return t === ke || (e !== null && e === ke);
}
function Dw(t, e) {
  Ks = Al = !0;
  var n = t.pending;
  n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)), (t.pending = e);
}
function Ow(t, e, n) {
  if (n & 4194240) {
    var r = e.lanes;
    (r &= t.pendingLanes), (n |= r), (e.lanes = n), Mf(t, n);
  }
}
var Nl = {
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
  MI = {
    readContext: Bt,
    useCallback: function (t, e) {
      return (sn().memoizedState = [t, e === void 0 ? null : e]), t;
    },
    useContext: Bt,
    useEffect: Dg,
    useImperativeHandle: function (t, e, n) {
      return (n = n != null ? n.concat([t]) : null), Ka(4194308, 4, Iw.bind(null, e, t), n);
    },
    useLayoutEffect: function (t, e) {
      return Ka(4194308, 4, t, e);
    },
    useInsertionEffect: function (t, e) {
      return Ka(4, 2, t, e);
    },
    useMemo: function (t, e) {
      var n = sn();
      return (e = e === void 0 ? null : e), (t = t()), (n.memoizedState = [t, e]), t;
    },
    useReducer: function (t, e, n) {
      var r = sn();
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
        (t = t.dispatch = $I.bind(null, ke, t)),
        [r.memoizedState, t]
      );
    },
    useRef: function (t) {
      var e = sn();
      return (t = { current: t }), (e.memoizedState = t);
    },
    useState: xg,
    useDebugValue: op,
    useDeferredValue: function (t) {
      return (sn().memoizedState = t);
    },
    useTransition: function () {
      var t = xg(!1),
        e = t[0];
      return (t = LI.bind(null, t[1])), (sn().memoizedState = t), [e, t];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (t, e, n) {
      var r = ke,
        i = sn();
      if (_e) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = e()), We === null)) throw Error(k(349));
        Qr & 30 || gw(r, e, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: e };
      return (
        (i.queue = s),
        Dg(vw.bind(null, r, s, t), [t]),
        (r.flags |= 2048),
        vo(9, yw.bind(null, r, s, n, e), void 0, null),
        n
      );
    },
    useId: function () {
      var t = sn(),
        e = We.identifierPrefix;
      if (_e) {
        var n = _n,
          r = Sn;
        (n = (r & ~(1 << (32 - Zt(r) - 1))).toString(32) + n),
          (e = ':' + e + 'R' + n),
          (n = go++),
          0 < n && (e += 'H' + n.toString(32)),
          (e += ':');
      } else (n = PI++), (e = ':' + e + 'r' + n.toString(32) + ':');
      return (t.memoizedState = e);
    },
    unstable_isNewReconciler: !1
  },
  FI = {
    readContext: Bt,
    useCallback: Cw,
    useContext: Bt,
    useEffect: sp,
    useImperativeHandle: kw,
    useInsertionEffect: _w,
    useLayoutEffect: Tw,
    useMemo: Aw,
    useReducer: Jc,
    useRef: Sw,
    useState: function () {
      return Jc(yo);
    },
    useDebugValue: op,
    useDeferredValue: function (t) {
      var e = Ht();
      return Nw(e, Ue.memoizedState, t);
    },
    useTransition: function () {
      var t = Jc(yo)[0],
        e = Ht().memoizedState;
      return [t, e];
    },
    useMutableSource: pw,
    useSyncExternalStore: mw,
    useId: Rw,
    unstable_isNewReconciler: !1
  },
  UI = {
    readContext: Bt,
    useCallback: Cw,
    useContext: Bt,
    useEffect: sp,
    useImperativeHandle: kw,
    useInsertionEffect: _w,
    useLayoutEffect: Tw,
    useMemo: Aw,
    useReducer: Zc,
    useRef: Sw,
    useState: function () {
      return Zc(yo);
    },
    useDebugValue: op,
    useDeferredValue: function (t) {
      var e = Ht();
      return Ue === null ? (e.memoizedState = t) : Nw(e, Ue.memoizedState, t);
    },
    useTransition: function () {
      var t = Zc(yo)[0],
        e = Ht().memoizedState;
      return [t, e];
    },
    useMutableSource: pw,
    useSyncExternalStore: mw,
    useId: Rw,
    unstable_isNewReconciler: !1
  };
function Xi(t, e) {
  try {
    var n = '',
      r = e;
    do (n += fT(r)), (r = r.return);
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
function eh(t, e, n) {
  return { value: t, source: null, stack: n ?? null, digest: e ?? null };
}
function Ed(t, e) {
  try {
    console.error(e.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var VI = typeof WeakMap == 'function' ? WeakMap : Map;
function Pw(t, e, n) {
  (n = Cn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = e.value;
  return (
    (n.callback = function () {
      xl || ((xl = !0), (xd = r)), Ed(t, e);
    }),
    n
  );
}
function Lw(t, e, n) {
  (n = Cn(-1, n)), (n.tag = 3);
  var r = t.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var i = e.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Ed(t, e);
      });
  }
  var s = t.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == 'function' &&
      (n.callback = function () {
        Ed(t, e), typeof r != 'function' && (ar === null ? (ar = new Set([this])) : ar.add(this));
        var o = e.stack;
        this.componentDidCatch(e.value, { componentStack: o !== null ? o : '' });
      }),
    n
  );
}
function Og(t, e, n) {
  var r = t.pingCache;
  if (r === null) {
    r = t.pingCache = new VI();
    var i = new Set();
    r.set(e, i);
  } else (i = r.get(e)), i === void 0 && ((i = new Set()), r.set(e, i));
  i.has(n) || (i.add(n), (t = ek.bind(null, t, e, n)), e.then(t, t));
}
function Pg(t) {
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
function Lg(t, e, n, r, i) {
  return t.mode & 1
    ? ((t.flags |= 65536), (t.lanes = i), t)
    : (t === e
        ? (t.flags |= 65536)
        : ((t.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null ? (n.tag = 17) : ((e = Cn(-1, 1)), (e.tag = 2), or(n, e, 1))),
          (n.lanes |= 1)),
      t);
}
var jI = bn.ReactCurrentOwner,
  _t = !1;
function pt(t, e, n, r) {
  e.child = t === null ? dw(e, null, n, r) : Qi(e, t.child, n, r);
}
function $g(t, e, n, r, i) {
  n = n.render;
  var s = e.ref;
  return (
    Pi(e, i),
    (r = rp(t, e, n, r, s, i)),
    (n = ip()),
    t !== null && !_t
      ? ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~i), xn(t, e, i))
      : (_e && n && Kf(e), (e.flags |= 1), pt(t, e, r, i), e.child)
  );
}
function bg(t, e, n, r, i) {
  if (t === null) {
    var s = n.type;
    return typeof s == 'function' &&
      !pp(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((e.tag = 15), (e.type = s), $w(t, e, s, r, i))
      : ((t = Qa(n.type, null, r, e, e.mode, i)), (t.ref = e.ref), (t.return = e), (e.child = t));
  }
  if (((s = t.child), !(t.lanes & i))) {
    var o = s.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : uo), n(o, r) && t.ref === e.ref))
      return xn(t, e, i);
  }
  return (e.flags |= 1), (t = ur(s, r)), (t.ref = e.ref), (t.return = e), (e.child = t);
}
function $w(t, e, n, r, i) {
  if (t !== null) {
    var s = t.memoizedProps;
    if (uo(s, r) && t.ref === e.ref)
      if (((_t = !1), (e.pendingProps = r = s), (t.lanes & i) !== 0)) t.flags & 131072 && (_t = !0);
      else return (e.lanes = t.lanes), xn(t, e, i);
  }
  return Sd(t, e, n, r, i);
}
function bw(t, e, n) {
  var r = e.pendingProps,
    i = r.children,
    s = t !== null ? t.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(e.mode & 1))
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        fe(Ii, Nt),
        (Nt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (t = s !== null ? s.baseLanes | n : n),
          (e.lanes = e.childLanes = 1073741824),
          (e.memoizedState = { baseLanes: t, cachePool: null, transitions: null }),
          (e.updateQueue = null),
          fe(Ii, Nt),
          (Nt |= t),
          null
        );
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        fe(Ii, Nt),
        (Nt |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (e.memoizedState = null)) : (r = n), fe(Ii, Nt), (Nt |= r);
  return pt(t, e, i, n), e.child;
}
function Mw(t, e) {
  var n = e.ref;
  ((t === null && n !== null) || (t !== null && t.ref !== n)) &&
    ((e.flags |= 512), (e.flags |= 2097152));
}
function Sd(t, e, n, r, i) {
  var s = It(n) ? qr : ht.current;
  return (
    (s = qi(e, s)),
    Pi(e, i),
    (n = rp(t, e, n, r, s, i)),
    (r = ip()),
    t !== null && !_t
      ? ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~i), xn(t, e, i))
      : (_e && r && Kf(e), (e.flags |= 1), pt(t, e, n, i), e.child)
  );
}
function Mg(t, e, n, r, i) {
  if (It(n)) {
    var s = !0;
    El(e);
  } else s = !1;
  if ((Pi(e, i), e.stateNode === null)) Wa(t, e), cw(e, n, r), wd(e, n, r, i), (r = !0);
  else if (t === null) {
    var o = e.stateNode,
      a = e.memoizedProps;
    o.props = a;
    var l = o.context,
      u = n.contextType;
    typeof u == 'object' && u !== null
      ? (u = Bt(u))
      : ((u = It(n) ? qr : ht.current), (u = qi(e, u)));
    var c = n.getDerivedStateFromProps,
      h = typeof c == 'function' || typeof o.getSnapshotBeforeUpdate == 'function';
    h ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((a !== r || l !== u) && Ng(e, o, r, u)),
      (Bn = !1);
    var d = e.memoizedState;
    (o.state = d),
      kl(e, r, o, i),
      (l = e.memoizedState),
      a !== r || d !== l || Tt.current || Bn
        ? (typeof c == 'function' && (vd(e, n, c, r), (l = e.memoizedState)),
          (a = Bn || Ag(e, n, a, r, d, l, u))
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
      lw(t, e),
      (a = e.memoizedProps),
      (u = e.type === e.elementType ? a : Gt(e.type, a)),
      (o.props = u),
      (h = e.pendingProps),
      (d = o.context),
      (l = n.contextType),
      typeof l == 'object' && l !== null
        ? (l = Bt(l))
        : ((l = It(n) ? qr : ht.current), (l = qi(e, l)));
    var m = n.getDerivedStateFromProps;
    (c = typeof m == 'function' || typeof o.getSnapshotBeforeUpdate == 'function') ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((a !== h || d !== l) && Ng(e, o, r, l)),
      (Bn = !1),
      (d = e.memoizedState),
      (o.state = d),
      kl(e, r, o, i);
    var y = e.memoizedState;
    a !== h || d !== y || Tt.current || Bn
      ? (typeof m == 'function' && (vd(e, n, m, r), (y = e.memoizedState)),
        (u = Bn || Ag(e, n, u, r, d, y, l) || !1)
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
  return _d(t, e, n, r, s, i);
}
function _d(t, e, n, r, i, s) {
  Mw(t, e);
  var o = (e.flags & 128) !== 0;
  if (!r && !o) return i && _g(e, n, !1), xn(t, e, s);
  (r = e.stateNode), (jI.current = e);
  var a = o && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (e.flags |= 1),
    t !== null && o
      ? ((e.child = Qi(e, t.child, null, s)), (e.child = Qi(e, null, a, s)))
      : pt(t, e, a, s),
    (e.memoizedState = r.state),
    i && _g(e, n, !0),
    e.child
  );
}
function Fw(t) {
  var e = t.stateNode;
  e.pendingContext
    ? Sg(t, e.pendingContext, e.pendingContext !== e.context)
    : e.context && Sg(t, e.context, !1),
    Zf(t, e.containerInfo);
}
function Fg(t, e, n, r, i) {
  return Gi(), qf(i), (e.flags |= 256), pt(t, e, n, r), e.child;
}
var Td = { dehydrated: null, treeContext: null, retryLane: 0 };
function Id(t) {
  return { baseLanes: t, cachePool: null, transitions: null };
}
function Uw(t, e, n) {
  var r = e.pendingProps,
    i = Ie.current,
    s = !1,
    o = (e.flags & 128) !== 0,
    a;
  if (
    ((a = o) || (a = t !== null && t.memoizedState === null ? !1 : (i & 2) !== 0),
    a ? ((s = !0), (e.flags &= -129)) : (t === null || t.memoizedState !== null) && (i |= 1),
    fe(Ie, i & 1),
    t === null)
  )
    return (
      gd(e),
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
                : (s = Iu(o, r, 0, null)),
              (t = jr(t, r, n, null)),
              (s.return = e),
              (t.return = e),
              (s.sibling = t),
              (e.child = s),
              (e.child.memoizedState = Id(n)),
              (e.memoizedState = Td),
              t)
            : ap(e, o))
    );
  if (((i = t.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return zI(t, e, o, r, a, i, n);
  if (s) {
    (s = r.fallback), (o = e.mode), (i = t.child), (a = i.sibling);
    var l = { mode: 'hidden', children: r.children };
    return (
      !(o & 1) && e.child !== i
        ? ((r = e.child), (r.childLanes = 0), (r.pendingProps = l), (e.deletions = null))
        : ((r = ur(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (s = ur(a, s)) : ((s = jr(s, o, n, null)), (s.flags |= 2)),
      (s.return = e),
      (r.return = e),
      (r.sibling = s),
      (e.child = r),
      (r = s),
      (s = e.child),
      (o = t.child.memoizedState),
      (o =
        o === null
          ? Id(n)
          : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }),
      (s.memoizedState = o),
      (s.childLanes = t.childLanes & ~n),
      (e.memoizedState = Td),
      r
    );
  }
  return (
    (s = t.child),
    (t = s.sibling),
    (r = ur(s, { mode: 'visible', children: r.children })),
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
function ap(t, e) {
  return (e = Iu({ mode: 'visible', children: e }, t.mode, 0, null)), (e.return = t), (t.child = e);
}
function ka(t, e, n, r) {
  return (
    r !== null && qf(r),
    Qi(e, t.child, null, n),
    (t = ap(e, e.pendingProps.children)),
    (t.flags |= 2),
    (e.memoizedState = null),
    t
  );
}
function zI(t, e, n, r, i, s, o) {
  if (n)
    return e.flags & 256
      ? ((e.flags &= -257), (r = eh(Error(k(422)))), ka(t, e, o, r))
      : e.memoizedState !== null
      ? ((e.child = t.child), (e.flags |= 128), null)
      : ((s = r.fallback),
        (i = e.mode),
        (r = Iu({ mode: 'visible', children: r.children }, i, 0, null)),
        (s = jr(s, i, o, null)),
        (s.flags |= 2),
        (r.return = e),
        (s.return = e),
        (r.sibling = s),
        (e.child = r),
        e.mode & 1 && Qi(e, t.child, null, o),
        (e.child.memoizedState = Id(o)),
        (e.memoizedState = Td),
        s);
  if (!(e.mode & 1)) return ka(t, e, o, null);
  if (i.data === '$!') {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (s = Error(k(419))), (r = eh(s, r, void 0)), ka(t, e, o, r);
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
        i !== 0 && i !== s.retryLane && ((s.retryLane = i), Rn(t, i), en(r, t, i, -1));
    }
    return fp(), (r = eh(Error(k(421)))), ka(t, e, o, r);
  }
  return i.data === '$?'
    ? ((e.flags |= 128), (e.child = t.child), (e = tk.bind(null, t)), (i._reactRetry = e), null)
    : ((t = s.treeContext),
      (Rt = sr(i.nextSibling)),
      (Dt = e),
      (_e = !0),
      (Yt = null),
      t !== null &&
        ((Ut[Vt++] = Sn),
        (Ut[Vt++] = _n),
        (Ut[Vt++] = Gr),
        (Sn = t.id),
        (_n = t.overflow),
        (Gr = e)),
      (e = ap(e, r.children)),
      (e.flags |= 4096),
      e);
}
function Ug(t, e, n) {
  t.lanes |= e;
  var r = t.alternate;
  r !== null && (r.lanes |= e), yd(t.return, e, n);
}
function th(t, e, n, r, i) {
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
function Vw(t, e, n) {
  var r = e.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((pt(t, e, r.children, n), (r = Ie.current), r & 2)) (r = (r & 1) | 2), (e.flags |= 128);
  else {
    if (t !== null && t.flags & 128)
      e: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Ug(t, n, e);
        else if (t.tag === 19) Ug(t, n, e);
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
  if ((fe(Ie, r), !(e.mode & 1))) e.memoizedState = null;
  else
    switch (i) {
      case 'forwards':
        for (n = e.child, i = null; n !== null; )
          (t = n.alternate), t !== null && Cl(t) === null && (i = n), (n = n.sibling);
        (n = i),
          n === null ? ((i = e.child), (e.child = null)) : ((i = n.sibling), (n.sibling = null)),
          th(e, !1, i, n, s);
        break;
      case 'backwards':
        for (n = null, i = e.child, e.child = null; i !== null; ) {
          if (((t = i.alternate), t !== null && Cl(t) === null)) {
            e.child = i;
            break;
          }
          (t = i.sibling), (i.sibling = n), (n = i), (i = t);
        }
        th(e, !0, n, null, s);
        break;
      case 'together':
        th(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  return e.child;
}
function Wa(t, e) {
  !(e.mode & 1) && t !== null && ((t.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function xn(t, e, n) {
  if ((t !== null && (e.dependencies = t.dependencies), (Yr |= e.lanes), !(n & e.childLanes)))
    return null;
  if (t !== null && e.child !== t.child) throw Error(k(153));
  if (e.child !== null) {
    for (t = e.child, n = ur(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; )
      (t = t.sibling), (n = n.sibling = ur(t, t.pendingProps)), (n.return = e);
    n.sibling = null;
  }
  return e.child;
}
function BI(t, e, n) {
  switch (e.tag) {
    case 3:
      Fw(e), Gi();
      break;
    case 5:
      fw(e);
      break;
    case 1:
      It(e.type) && El(e);
      break;
    case 4:
      Zf(e, e.stateNode.containerInfo);
      break;
    case 10:
      var r = e.type._context,
        i = e.memoizedProps.value;
      fe(Tl, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = e.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (fe(Ie, Ie.current & 1), (e.flags |= 128), null)
          : n & e.child.childLanes
          ? Uw(t, e, n)
          : (fe(Ie, Ie.current & 1), (t = xn(t, e, n)), t !== null ? t.sibling : null);
      fe(Ie, Ie.current & 1);
      break;
    case 19:
      if (((r = (n & e.childLanes) !== 0), t.flags & 128)) {
        if (r) return Vw(t, e, n);
        e.flags |= 128;
      }
      if (
        ((i = e.memoizedState),
        i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        fe(Ie, Ie.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (e.lanes = 0), bw(t, e, n);
  }
  return xn(t, e, n);
}
var jw, kd, zw, Bw;
jw = function (t, e) {
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
kd = function () {};
zw = function (t, e, n, r) {
  var i = t.memoizedProps;
  if (i !== r) {
    (t = e.stateNode), Lr(hn.current);
    var s = null;
    switch (n) {
      case 'input':
        (i = qh(t, i)), (r = qh(t, r)), (s = []);
        break;
      case 'select':
        (i = Ce({}, i, { value: void 0 })), (r = Ce({}, r, { value: void 0 })), (s = []);
        break;
      case 'textarea':
        (i = Yh(t, i)), (r = Yh(t, r)), (s = []);
        break;
      default:
        typeof i.onClick != 'function' && typeof r.onClick == 'function' && (t.onclick = vl);
    }
    Jh(n, r);
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
            (no.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
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
              (no.hasOwnProperty(u)
                ? (l != null && u === 'onScroll' && pe('scroll', t), s || a === l || (s = []))
                : (s = s || []).push(u, l));
    }
    n && (s = s || []).push('style', n);
    var u = s;
    (e.updateQueue = u) && (e.flags |= 4);
  }
};
Bw = function (t, e, n, r) {
  n !== r && (e.flags |= 4);
};
function Cs(t, e) {
  if (!_e)
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
function HI(t, e, n) {
  var r = e.pendingProps;
  switch ((Wf(e), e.tag)) {
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
      return It(e.type) && wl(), it(e), null;
    case 3:
      return (
        (r = e.stateNode),
        Yi(),
        me(Tt),
        me(ht),
        tp(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (t === null || t.child === null) &&
          (Ta(e)
            ? (e.flags |= 4)
            : t === null ||
              (t.memoizedState.isDehydrated && !(e.flags & 256)) ||
              ((e.flags |= 1024), Yt !== null && (Pd(Yt), (Yt = null)))),
        kd(t, e),
        it(e),
        null
      );
    case 5:
      ep(e);
      var i = Lr(mo.current);
      if (((n = e.type), t !== null && e.stateNode != null))
        zw(t, e, n, r, i), t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
      else {
        if (!r) {
          if (e.stateNode === null) throw Error(k(166));
          return it(e), null;
        }
        if (((t = Lr(hn.current)), Ta(e))) {
          (r = e.stateNode), (n = e.type);
          var s = e.memoizedProps;
          switch (((r[on] = e), (r[fo] = s), (t = (e.mode & 1) !== 0), n)) {
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
              for (i = 0; i < Ps.length; i++) pe(Ps[i], r);
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
              Gm(r, s), pe('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!s.multiple }), pe('invalid', r);
              break;
            case 'textarea':
              Ym(r, s), pe('invalid', r);
          }
          Jh(n, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === 'children'
                ? typeof a == 'string'
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 && _a(r.textContent, a, t),
                    (i = ['children', a]))
                  : typeof a == 'number' &&
                    r.textContent !== '' + a &&
                    (s.suppressHydrationWarning !== !0 && _a(r.textContent, a, t),
                    (i = ['children', '' + a]))
                : no.hasOwnProperty(o) && a != null && o === 'onScroll' && pe('scroll', r);
            }
          switch (n) {
            case 'input':
              pa(r), Qm(r, s, !0);
              break;
            case 'textarea':
              pa(r), Xm(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof s.onClick == 'function' && (r.onclick = vl);
          }
          (r = i), (e.updateQueue = r), r !== null && (e.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            t === 'http://www.w3.org/1999/xhtml' && (t = g0(n)),
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
            (t[on] = e),
            (t[fo] = r),
            jw(t, e, !1, !1),
            (e.stateNode = t);
          e: {
            switch (((o = Zh(n, r)), n)) {
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
                for (i = 0; i < Ps.length; i++) pe(Ps[i], t);
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
                Gm(t, r), (i = qh(t, r)), pe('invalid', t);
                break;
              case 'option':
                i = r;
                break;
              case 'select':
                (t._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Ce({}, r, { value: void 0 })),
                  pe('invalid', t);
                break;
              case 'textarea':
                Ym(t, r), (i = Yh(t, r)), pe('invalid', t);
                break;
              default:
                i = r;
            }
            Jh(n, i), (a = i);
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var l = a[s];
                s === 'style'
                  ? w0(t, l)
                  : s === 'dangerouslySetInnerHTML'
                  ? ((l = l ? l.__html : void 0), l != null && y0(t, l))
                  : s === 'children'
                  ? typeof l == 'string'
                    ? (n !== 'textarea' || l !== '') && ro(t, l)
                    : typeof l == 'number' && ro(t, '' + l)
                  : s !== 'suppressContentEditableWarning' &&
                    s !== 'suppressHydrationWarning' &&
                    s !== 'autoFocus' &&
                    (no.hasOwnProperty(s)
                      ? l != null && s === 'onScroll' && pe('scroll', t)
                      : l != null && Df(t, s, l, o));
              }
            switch (n) {
              case 'input':
                pa(t), Qm(t, r, !1);
                break;
              case 'textarea':
                pa(t), Xm(t);
                break;
              case 'option':
                r.value != null && t.setAttribute('value', '' + mr(r.value));
                break;
              case 'select':
                (t.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Ri(t, !!r.multiple, s, !1)
                    : r.defaultValue != null && Ri(t, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == 'function' && (t.onclick = vl);
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
      if (t && e.stateNode != null) Bw(t, e, t.memoizedProps, r);
      else {
        if (typeof r != 'string' && e.stateNode === null) throw Error(k(166));
        if (((n = Lr(mo.current)), Lr(hn.current), Ta(e))) {
          if (
            ((r = e.stateNode),
            (n = e.memoizedProps),
            (r[on] = e),
            (s = r.nodeValue !== n) && ((t = Dt), t !== null))
          )
            switch (t.tag) {
              case 3:
                _a(r.nodeValue, n, (t.mode & 1) !== 0);
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 &&
                  _a(r.nodeValue, n, (t.mode & 1) !== 0);
            }
          s && (e.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[on] = e),
            (e.stateNode = r);
      }
      return it(e), null;
    case 13:
      if (
        (me(Ie),
        (r = e.memoizedState),
        t === null || (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
      ) {
        if (_e && Rt !== null && e.mode & 1 && !(e.flags & 128))
          ow(), Gi(), (e.flags |= 98560), (s = !1);
        else if (((s = Ta(e)), r !== null && r.dehydrated !== null)) {
          if (t === null) {
            if (!s) throw Error(k(318));
            if (((s = e.memoizedState), (s = s !== null ? s.dehydrated : null), !s))
              throw Error(k(317));
            s[on] = e;
          } else Gi(), !(e.flags & 128) && (e.memoizedState = null), (e.flags |= 4);
          it(e), (s = !1);
        } else Yt !== null && (Pd(Yt), (Yt = null)), (s = !0);
        if (!s) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128
        ? ((e.lanes = n), e)
        : ((r = r !== null),
          r !== (t !== null && t.memoizedState !== null) &&
            r &&
            ((e.child.flags |= 8192),
            e.mode & 1 && (t === null || Ie.current & 1 ? je === 0 && (je = 3) : fp())),
          e.updateQueue !== null && (e.flags |= 4),
          it(e),
          null);
    case 4:
      return Yi(), kd(t, e), t === null && co(e.stateNode.containerInfo), it(e), null;
    case 10:
      return Yf(e.type._context), it(e), null;
    case 17:
      return It(e.type) && wl(), it(e), null;
    case 19:
      if ((me(Ie), (s = e.memoizedState), s === null)) return it(e), null;
      if (((r = (e.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) Cs(s, !1);
        else {
          if (je !== 0 || (t !== null && t.flags & 128))
            for (t = e.child; t !== null; ) {
              if (((o = Cl(t)), o !== null)) {
                for (
                  e.flags |= 128,
                    Cs(s, !1),
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
                return fe(Ie, (Ie.current & 1) | 2), e.child;
              }
              t = t.sibling;
            }
          s.tail !== null &&
            Oe() > Ji &&
            ((e.flags |= 128), (r = !0), Cs(s, !1), (e.lanes = 4194304));
        }
      else {
        if (!r)
          if (((t = Cl(o)), t !== null)) {
            if (
              ((e.flags |= 128),
              (r = !0),
              (n = t.updateQueue),
              n !== null && ((e.updateQueue = n), (e.flags |= 4)),
              Cs(s, !0),
              s.tail === null && s.tailMode === 'hidden' && !o.alternate && !_e)
            )
              return it(e), null;
          } else
            2 * Oe() - s.renderingStartTime > Ji &&
              n !== 1073741824 &&
              ((e.flags |= 128), (r = !0), Cs(s, !1), (e.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = e.child), (e.child = o))
          : ((n = s.last), n !== null ? (n.sibling = o) : (e.child = o), (s.last = o));
      }
      return s.tail !== null
        ? ((e = s.tail),
          (s.rendering = e),
          (s.tail = e.sibling),
          (s.renderingStartTime = Oe()),
          (e.sibling = null),
          (n = Ie.current),
          fe(Ie, r ? (n & 1) | 2 : n & 1),
          e)
        : (it(e), null);
    case 22:
    case 23:
      return (
        dp(),
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
function KI(t, e) {
  switch ((Wf(e), e.tag)) {
    case 1:
      return (
        It(e.type) && wl(), (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 3:
      return (
        Yi(),
        me(Tt),
        me(ht),
        tp(),
        (t = e.flags),
        t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 5:
      return ep(e), null;
    case 13:
      if ((me(Ie), (t = e.memoizedState), t !== null && t.dehydrated !== null)) {
        if (e.alternate === null) throw Error(k(340));
        Gi();
      }
      return (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null;
    case 19:
      return me(Ie), null;
    case 4:
      return Yi(), null;
    case 10:
      return Yf(e.type._context), null;
    case 22:
    case 23:
      return dp(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ca = !1,
  at = !1,
  WI = typeof WeakSet == 'function' ? WeakSet : Set,
  $ = null;
function Ti(t, e) {
  var n = t.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        Ne(t, e, r);
      }
    else n.current = null;
}
function Cd(t, e, n) {
  try {
    n();
  } catch (r) {
    Ne(t, e, r);
  }
}
var Vg = !1;
function qI(t, e) {
  if (((ud = ml), (t = q0()), Hf(t))) {
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
  for (cd = { focusedElem: t, selectionRange: n }, ml = !1, $ = e; $ !== null; )
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
          Ne(e, e.return, E);
        }
        if (((t = e.sibling), t !== null)) {
          (t.return = e.return), ($ = t);
          break;
        }
        $ = e.return;
      }
  return (y = Vg), (Vg = !1), y;
}
function Ws(t, e, n) {
  var r = e.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & t) === t) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && Cd(e, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function _u(t, e) {
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
function Ad(t) {
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
function Hw(t) {
  var e = t.alternate;
  e !== null && ((t.alternate = null), Hw(e)),
    (t.child = null),
    (t.deletions = null),
    (t.sibling = null),
    t.tag === 5 &&
      ((e = t.stateNode),
      e !== null && (delete e[on], delete e[fo], delete e[fd], delete e[RI], delete e[xI])),
    (t.stateNode = null),
    (t.return = null),
    (t.dependencies = null),
    (t.memoizedProps = null),
    (t.memoizedState = null),
    (t.pendingProps = null),
    (t.stateNode = null),
    (t.updateQueue = null);
}
function Kw(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function jg(t) {
  e: for (;;) {
    for (; t.sibling === null; ) {
      if (t.return === null || Kw(t.return)) return null;
      t = t.return;
    }
    for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
      if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
      (t.child.return = t), (t = t.child);
    }
    if (!(t.flags & 2)) return t.stateNode;
  }
}
function Nd(t, e, n) {
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
          n != null || e.onclick !== null || (e.onclick = vl));
  else if (r !== 4 && ((t = t.child), t !== null))
    for (Nd(t, e, n), t = t.sibling; t !== null; ) Nd(t, e, n), (t = t.sibling);
}
function Rd(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6) (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
  else if (r !== 4 && ((t = t.child), t !== null))
    for (Rd(t, e, n), t = t.sibling; t !== null; ) Rd(t, e, n), (t = t.sibling);
}
var Ye = null,
  Qt = !1;
function Vn(t, e, n) {
  for (n = n.child; n !== null; ) Ww(t, e, n), (n = n.sibling);
}
function Ww(t, e, n) {
  if (cn && typeof cn.onCommitFiberUnmount == 'function')
    try {
      cn.onCommitFiberUnmount(pu, n);
    } catch {}
  switch (n.tag) {
    case 5:
      at || Ti(n, e);
    case 6:
      var r = Ye,
        i = Qt;
      (Ye = null),
        Vn(t, e, n),
        (Ye = r),
        (Qt = i),
        Ye !== null &&
          (Qt
            ? ((t = Ye),
              (n = n.stateNode),
              t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n))
            : Ye.removeChild(n.stateNode));
      break;
    case 18:
      Ye !== null &&
        (Qt
          ? ((t = Ye),
            (n = n.stateNode),
            t.nodeType === 8 ? Gc(t.parentNode, n) : t.nodeType === 1 && Gc(t, n),
            ao(t))
          : Gc(Ye, n.stateNode));
      break;
    case 4:
      (r = Ye),
        (i = Qt),
        (Ye = n.stateNode.containerInfo),
        (Qt = !0),
        Vn(t, e, n),
        (Ye = r),
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
          (s = s.tag), o !== void 0 && (s & 2 || s & 4) && Cd(n, e, o), (i = i.next);
        } while (i !== r);
      }
      Vn(t, e, n);
      break;
    case 1:
      if (!at && (Ti(n, e), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
        try {
          (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
        } catch (a) {
          Ne(n, e, a);
        }
      Vn(t, e, n);
      break;
    case 21:
      Vn(t, e, n);
      break;
    case 22:
      n.mode & 1
        ? ((at = (r = at) || n.memoizedState !== null), Vn(t, e, n), (at = r))
        : Vn(t, e, n);
      break;
    default:
      Vn(t, e, n);
  }
}
function zg(t) {
  var e = t.updateQueue;
  if (e !== null) {
    t.updateQueue = null;
    var n = t.stateNode;
    n === null && (n = t.stateNode = new WI()),
      e.forEach(function (r) {
        var i = nk.bind(null, t, r);
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
              (Ye = a.stateNode), (Qt = !1);
              break e;
            case 3:
              (Ye = a.stateNode.containerInfo), (Qt = !0);
              break e;
            case 4:
              (Ye = a.stateNode.containerInfo), (Qt = !0);
              break e;
          }
          a = a.return;
        }
        if (Ye === null) throw Error(k(160));
        Ww(s, o, i), (Ye = null), (Qt = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        Ne(i, e, u);
      }
    }
  if (e.subtreeFlags & 12854) for (e = e.child; e !== null; ) qw(e, t), (e = e.sibling);
}
function qw(t, e) {
  var n = t.alternate,
    r = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((qt(e, t), rn(t), r & 4)) {
        try {
          Ws(3, t, t.return), _u(3, t);
        } catch (v) {
          Ne(t, t.return, v);
        }
        try {
          Ws(5, t, t.return);
        } catch (v) {
          Ne(t, t.return, v);
        }
      }
      break;
    case 1:
      qt(e, t), rn(t), r & 512 && n !== null && Ti(n, n.return);
      break;
    case 5:
      if ((qt(e, t), rn(t), r & 512 && n !== null && Ti(n, n.return), t.flags & 32)) {
        var i = t.stateNode;
        try {
          ro(i, '');
        } catch (v) {
          Ne(t, t.return, v);
        }
      }
      if (r & 4 && ((i = t.stateNode), i != null)) {
        var s = t.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          a = t.type,
          l = t.updateQueue;
        if (((t.updateQueue = null), l !== null))
          try {
            a === 'input' && s.type === 'radio' && s.name != null && p0(i, s), Zh(a, o);
            var u = Zh(a, s);
            for (o = 0; o < l.length; o += 2) {
              var c = l[o],
                h = l[o + 1];
              c === 'style'
                ? w0(i, h)
                : c === 'dangerouslySetInnerHTML'
                ? y0(i, h)
                : c === 'children'
                ? ro(i, h)
                : Df(i, c, h, u);
            }
            switch (a) {
              case 'input':
                Gh(i, s);
                break;
              case 'textarea':
                m0(i, s);
                break;
              case 'select':
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var m = s.value;
                m != null
                  ? Ri(i, !!s.multiple, m, !1)
                  : d !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Ri(i, !!s.multiple, s.defaultValue, !0)
                      : Ri(i, !!s.multiple, s.multiple ? [] : '', !1));
            }
            i[fo] = s;
          } catch (v) {
            Ne(t, t.return, v);
          }
      }
      break;
    case 6:
      if ((qt(e, t), rn(t), r & 4)) {
        if (t.stateNode === null) throw Error(k(162));
        (i = t.stateNode), (s = t.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (v) {
          Ne(t, t.return, v);
        }
      }
      break;
    case 3:
      if ((qt(e, t), rn(t), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          ao(e.containerInfo);
        } catch (v) {
          Ne(t, t.return, v);
        }
      break;
    case 4:
      qt(e, t), rn(t);
      break;
    case 13:
      qt(e, t),
        rn(t),
        (i = t.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s || (i.alternate !== null && i.alternate.memoizedState !== null) || (cp = Oe())),
        r & 4 && zg(t);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        t.mode & 1 ? ((at = (u = at) || c), qt(e, t), (at = u)) : qt(e, t),
        rn(t),
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
                  Ws(4, d, d.return);
                  break;
                case 1:
                  Ti(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == 'function') {
                    (r = d), (n = d.return);
                    try {
                      (e = r),
                        (y.props = e.memoizedProps),
                        (y.state = e.memoizedState),
                        y.componentWillUnmount();
                    } catch (v) {
                      Ne(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Ti(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Hg(h);
                    continue;
                  }
              }
              m !== null ? ((m.return = d), ($ = m)) : Hg(h);
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
                      (a.style.display = v0('display', o)));
              } catch (v) {
                Ne(t, t.return, v);
              }
            }
          } else if (h.tag === 6) {
            if (c === null)
              try {
                h.stateNode.nodeValue = u ? '' : h.memoizedProps;
              } catch (v) {
                Ne(t, t.return, v);
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
      qt(e, t), rn(t), r & 4 && zg(t);
      break;
    case 21:
      break;
    default:
      qt(e, t), rn(t);
  }
}
function rn(t) {
  var e = t.flags;
  if (e & 2) {
    try {
      e: {
        for (var n = t.return; n !== null; ) {
          if (Kw(n)) {
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
          r.flags & 32 && (ro(i, ''), (r.flags &= -33));
          var s = jg(t);
          Rd(t, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = jg(t);
          Nd(t, a, o);
          break;
        default:
          throw Error(k(161));
      }
    } catch (l) {
      Ne(t, t.return, l);
    }
    t.flags &= -3;
  }
  e & 4096 && (t.flags &= -4097);
}
function GI(t, e, n) {
  ($ = t), Gw(t);
}
function Gw(t, e, n) {
  for (var r = (t.mode & 1) !== 0; $ !== null; ) {
    var i = $,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || Ca;
      if (!o) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || at;
        a = Ca;
        var u = at;
        if (((Ca = o), (at = l) && !u))
          for ($ = i; $ !== null; )
            (o = $),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Kg(i)
                : l !== null
                ? ((l.return = o), ($ = l))
                : Kg(i);
        for (; s !== null; ) ($ = s), Gw(s), (s = s.sibling);
        ($ = i), (Ca = a), (at = u);
      }
      Bg(t);
    } else i.subtreeFlags & 8772 && s !== null ? ((s.return = i), ($ = s)) : Bg(t);
  }
}
function Bg(t) {
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
              at || _u(5, e);
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
              s !== null && Cg(e, s, r);
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
                Cg(e, o, n);
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
                    h !== null && ao(h);
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
        at || (e.flags & 512 && Ad(e));
      } catch (d) {
        Ne(e, e.return, d);
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
function Hg(t) {
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
function Kg(t) {
  for (; $ !== null; ) {
    var e = $;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var n = e.return;
          try {
            _u(4, e);
          } catch (l) {
            Ne(e, n, l);
          }
          break;
        case 1:
          var r = e.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var i = e.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Ne(e, i, l);
            }
          }
          var s = e.return;
          try {
            Ad(e);
          } catch (l) {
            Ne(e, s, l);
          }
          break;
        case 5:
          var o = e.return;
          try {
            Ad(e);
          } catch (l) {
            Ne(e, o, l);
          }
      }
    } catch (l) {
      Ne(e, e.return, l);
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
var QI = Math.ceil,
  Rl = bn.ReactCurrentDispatcher,
  lp = bn.ReactCurrentOwner,
  zt = bn.ReactCurrentBatchConfig,
  se = 0,
  We = null,
  Me = null,
  Je = 0,
  Nt = 0,
  Ii = Tr(0),
  je = 0,
  wo = null,
  Yr = 0,
  Tu = 0,
  up = 0,
  qs = null,
  Et = null,
  cp = 0,
  Ji = 1 / 0,
  wn = null,
  xl = !1,
  xd = null,
  ar = null,
  Aa = !1,
  Jn = null,
  Dl = 0,
  Gs = 0,
  Dd = null,
  qa = -1,
  Ga = 0;
function yt() {
  return se & 6 ? Oe() : qa !== -1 ? qa : (qa = Oe());
}
function lr(t) {
  return t.mode & 1
    ? se & 2 && Je !== 0
      ? Je & -Je
      : OI.transition !== null
      ? (Ga === 0 && (Ga = D0()), Ga)
      : ((t = ce), t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : F0(t.type))), t)
    : 1;
}
function en(t, e, n, r) {
  if (50 < Gs) throw ((Gs = 0), (Dd = null), Error(k(185)));
  Mo(t, n, r),
    (!(se & 2) || t !== We) &&
      (t === We && (!(se & 2) && (Tu |= n), je === 4 && Kn(t, Je)),
      kt(t, r),
      n === 1 && se === 0 && !(e.mode & 1) && ((Ji = Oe() + 500), wu && Ir()));
}
function kt(t, e) {
  var n = t.callbackNode;
  OT(t, e);
  var r = pl(t, t === We ? Je : 0);
  if (r === 0) n !== null && eg(n), (t.callbackNode = null), (t.callbackPriority = 0);
  else if (((e = r & -r), t.callbackPriority !== e)) {
    if ((n != null && eg(n), e === 1))
      t.tag === 0 ? DI(Wg.bind(null, t)) : rw(Wg.bind(null, t)),
        AI(function () {
          !(se & 6) && Ir();
        }),
        (n = null);
    else {
      switch (O0(r)) {
        case 1:
          n = bf;
          break;
        case 4:
          n = R0;
          break;
        case 16:
          n = fl;
          break;
        case 536870912:
          n = x0;
          break;
        default:
          n = fl;
      }
      n = n1(n, Qw.bind(null, t));
    }
    (t.callbackPriority = e), (t.callbackNode = n);
  }
}
function Qw(t, e) {
  if (((qa = -1), (Ga = 0), se & 6)) throw Error(k(327));
  var n = t.callbackNode;
  if (Li() && t.callbackNode !== n) return null;
  var r = pl(t, t === We ? Je : 0);
  if (r === 0) return null;
  if (r & 30 || r & t.expiredLanes || e) e = Ol(t, r);
  else {
    e = r;
    var i = se;
    se |= 2;
    var s = Xw();
    (We !== t || Je !== e) && ((wn = null), (Ji = Oe() + 500), Vr(t, e));
    do
      try {
        JI();
        break;
      } catch (a) {
        Yw(t, a);
      }
    while (1);
    Qf(), (Rl.current = s), (se = i), Me !== null ? (e = 0) : ((We = null), (Je = 0), (e = je));
  }
  if (e !== 0) {
    if ((e === 2 && ((i = id(t)), i !== 0 && ((r = i), (e = Od(t, i)))), e === 1))
      throw ((n = wo), Vr(t, 0), Kn(t, r), kt(t, Oe()), n);
    if (e === 6) Kn(t, r);
    else {
      if (
        ((i = t.current.alternate),
        !(r & 30) &&
          !YI(i) &&
          ((e = Ol(t, r)), e === 2 && ((s = id(t)), s !== 0 && ((r = s), (e = Od(t, s)))), e === 1))
      )
        throw ((n = wo), Vr(t, 0), Kn(t, r), kt(t, Oe()), n);
      switch (((t.finishedWork = i), (t.finishedLanes = r), e)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Nr(t, Et, wn);
          break;
        case 3:
          if ((Kn(t, r), (r & 130023424) === r && ((e = cp + 500 - Oe()), 10 < e))) {
            if (pl(t, 0) !== 0) break;
            if (((i = t.suspendedLanes), (i & r) !== r)) {
              yt(), (t.pingedLanes |= t.suspendedLanes & i);
              break;
            }
            t.timeoutHandle = dd(Nr.bind(null, t, Et, wn), e);
            break;
          }
          Nr(t, Et, wn);
          break;
        case 4:
          if ((Kn(t, r), (r & 4194240) === r)) break;
          for (e = t.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - Zt(r);
            (s = 1 << o), (o = e[o]), o > i && (i = o), (r &= ~s);
          }
          if (
            ((r = i),
            (r = Oe() - r),
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
                : 1960 * QI(r / 1960)) - r),
            10 < r)
          ) {
            t.timeoutHandle = dd(Nr.bind(null, t, Et, wn), r);
            break;
          }
          Nr(t, Et, wn);
          break;
        case 5:
          Nr(t, Et, wn);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return kt(t, Oe()), t.callbackNode === n ? Qw.bind(null, t) : null;
}
function Od(t, e) {
  var n = qs;
  return (
    t.current.memoizedState.isDehydrated && (Vr(t, e).flags |= 256),
    (t = Ol(t, e)),
    t !== 2 && ((e = Et), (Et = n), e !== null && Pd(e)),
    t
  );
}
function Pd(t) {
  Et === null ? (Et = t) : Et.push.apply(Et, t);
}
function YI(t) {
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
function Kn(t, e) {
  for (
    e &= ~up, e &= ~Tu, t.suspendedLanes |= e, t.pingedLanes &= ~e, t = t.expirationTimes;
    0 < e;

  ) {
    var n = 31 - Zt(e),
      r = 1 << n;
    (t[n] = -1), (e &= ~r);
  }
}
function Wg(t) {
  if (se & 6) throw Error(k(327));
  Li();
  var e = pl(t, 0);
  if (!(e & 1)) return kt(t, Oe()), null;
  var n = Ol(t, e);
  if (t.tag !== 0 && n === 2) {
    var r = id(t);
    r !== 0 && ((e = r), (n = Od(t, r)));
  }
  if (n === 1) throw ((n = wo), Vr(t, 0), Kn(t, e), kt(t, Oe()), n);
  if (n === 6) throw Error(k(345));
  return (
    (t.finishedWork = t.current.alternate), (t.finishedLanes = e), Nr(t, Et, wn), kt(t, Oe()), null
  );
}
function hp(t, e) {
  var n = se;
  se |= 1;
  try {
    return t(e);
  } finally {
    (se = n), se === 0 && ((Ji = Oe() + 500), wu && Ir());
  }
}
function Xr(t) {
  Jn !== null && Jn.tag === 0 && !(se & 6) && Li();
  var e = se;
  se |= 1;
  var n = zt.transition,
    r = ce;
  try {
    if (((zt.transition = null), (ce = 1), t)) return t();
  } finally {
    (ce = r), (zt.transition = n), (se = e), !(se & 6) && Ir();
  }
}
function dp() {
  (Nt = Ii.current), me(Ii);
}
function Vr(t, e) {
  (t.finishedWork = null), (t.finishedLanes = 0);
  var n = t.timeoutHandle;
  if ((n !== -1 && ((t.timeoutHandle = -1), CI(n)), Me !== null))
    for (n = Me.return; n !== null; ) {
      var r = n;
      switch ((Wf(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && wl();
          break;
        case 3:
          Yi(), me(Tt), me(ht), tp();
          break;
        case 5:
          ep(r);
          break;
        case 4:
          Yi();
          break;
        case 13:
          me(Ie);
          break;
        case 19:
          me(Ie);
          break;
        case 10:
          Yf(r.type._context);
          break;
        case 22:
        case 23:
          dp();
      }
      n = n.return;
    }
  if (
    ((We = t),
    (Me = t = ur(t.current, null)),
    (Je = Nt = e),
    (je = 0),
    (wo = null),
    (up = Tu = Yr = 0),
    (Et = qs = null),
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
function Yw(t, e) {
  do {
    var n = Me;
    try {
      if ((Qf(), (Ha.current = Nl), Al)) {
        for (var r = ke.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Al = !1;
      }
      if (
        ((Qr = 0),
        (Ke = Ue = ke = null),
        (Ks = !1),
        (go = 0),
        (lp.current = null),
        n === null || n.return === null)
      ) {
        (je = 1), (wo = e), (Me = null);
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
          var m = Pg(o);
          if (m !== null) {
            (m.flags &= -257), Lg(m, o, a, s, e), m.mode & 1 && Og(s, u, e), (e = m), (l = u);
            var y = e.updateQueue;
            if (y === null) {
              var v = new Set();
              v.add(l), (e.updateQueue = v);
            } else y.add(l);
            break e;
          } else {
            if (!(e & 1)) {
              Og(s, u, e), fp();
              break e;
            }
            l = Error(k(426));
          }
        } else if (_e && a.mode & 1) {
          var S = Pg(o);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), Lg(S, o, a, s, e), qf(Xi(l, a));
            break e;
          }
        }
        (s = l = Xi(l, a)), je !== 4 && (je = 2), qs === null ? (qs = [s]) : qs.push(s), (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (e &= -e), (s.lanes |= e);
              var p = Pw(s, l, e);
              kg(s, p);
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
                    (ar === null || !ar.has(g))))
              ) {
                (s.flags |= 65536), (e &= -e), (s.lanes |= e);
                var E = Lw(s, a, e);
                kg(s, E);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Zw(n);
    } catch (_) {
      (e = _), Me === n && n !== null && (Me = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Xw() {
  var t = Rl.current;
  return (Rl.current = Nl), t === null ? Nl : t;
}
function fp() {
  (je === 0 || je === 3 || je === 2) && (je = 4),
    We === null || (!(Yr & 268435455) && !(Tu & 268435455)) || Kn(We, Je);
}
function Ol(t, e) {
  var n = se;
  se |= 2;
  var r = Xw();
  (We !== t || Je !== e) && ((wn = null), Vr(t, e));
  do
    try {
      XI();
      break;
    } catch (i) {
      Yw(t, i);
    }
  while (1);
  if ((Qf(), (se = n), (Rl.current = r), Me !== null)) throw Error(k(261));
  return (We = null), (Je = 0), je;
}
function XI() {
  for (; Me !== null; ) Jw(Me);
}
function JI() {
  for (; Me !== null && !TT(); ) Jw(Me);
}
function Jw(t) {
  var e = t1(t.alternate, t, Nt);
  (t.memoizedProps = t.pendingProps), e === null ? Zw(t) : (Me = e), (lp.current = null);
}
function Zw(t) {
  var e = t;
  do {
    var n = e.alternate;
    if (((t = e.return), e.flags & 32768)) {
      if (((n = KI(n, e)), n !== null)) {
        (n.flags &= 32767), (Me = n);
        return;
      }
      if (t !== null) (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
      else {
        (je = 6), (Me = null);
        return;
      }
    } else if (((n = HI(n, e, Nt)), n !== null)) {
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
function Nr(t, e, n) {
  var r = ce,
    i = zt.transition;
  try {
    (zt.transition = null), (ce = 1), ZI(t, e, n, r);
  } finally {
    (zt.transition = i), (ce = r);
  }
  return null;
}
function ZI(t, e, n, r) {
  do Li();
  while (Jn !== null);
  if (se & 6) throw Error(k(327));
  n = t.finishedWork;
  var i = t.finishedLanes;
  if (n === null) return null;
  if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current)) throw Error(k(177));
  (t.callbackNode = null), (t.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (PT(t, s),
    t === We && ((Me = We = null), (Je = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Aa ||
      ((Aa = !0),
      n1(fl, function () {
        return Li(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = zt.transition), (zt.transition = null);
    var o = ce;
    ce = 1;
    var a = se;
    (se |= 4),
      (lp.current = null),
      qI(t, n),
      qw(n, t),
      wI(cd),
      (ml = !!ud),
      (cd = ud = null),
      (t.current = n),
      GI(n),
      IT(),
      (se = a),
      (ce = o),
      (zt.transition = s);
  } else t.current = n;
  if (
    (Aa && ((Aa = !1), (Jn = t), (Dl = i)),
    (s = t.pendingLanes),
    s === 0 && (ar = null),
    AT(n.stateNode),
    kt(t, Oe()),
    e !== null)
  )
    for (r = t.onRecoverableError, n = 0; n < e.length; n++)
      (i = e[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (xl) throw ((xl = !1), (t = xd), (xd = null), t);
  return (
    Dl & 1 && t.tag !== 0 && Li(),
    (s = t.pendingLanes),
    s & 1 ? (t === Dd ? Gs++ : ((Gs = 0), (Dd = t))) : (Gs = 0),
    Ir(),
    null
  );
}
function Li() {
  if (Jn !== null) {
    var t = O0(Dl),
      e = zt.transition,
      n = ce;
    try {
      if (((zt.transition = null), (ce = 16 > t ? 16 : t), Jn === null)) var r = !1;
      else {
        if (((t = Jn), (Jn = null), (Dl = 0), se & 6)) throw Error(k(331));
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
                      Ws(8, c, s);
                  }
                  var h = c.child;
                  if (h !== null) (h.return = c), ($ = h);
                  else
                    for (; $ !== null; ) {
                      c = $;
                      var d = c.sibling,
                        m = c.return;
                      if ((Hw(c), c === u)) {
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
                    Ws(9, s, s.return);
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
                      _u(9, a);
                  }
                } catch (_) {
                  Ne(a, a.return, _);
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
        if (((se = i), Ir(), cn && typeof cn.onPostCommitFiberRoot == 'function'))
          try {
            cn.onPostCommitFiberRoot(pu, t);
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
function qg(t, e, n) {
  (e = Xi(n, e)),
    (e = Pw(t, e, 1)),
    (t = or(t, e, 1)),
    (e = yt()),
    t !== null && (Mo(t, 1, e), kt(t, e));
}
function Ne(t, e, n) {
  if (t.tag === 3) qg(t, t, n);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        qg(e, t, n);
        break;
      } else if (e.tag === 1) {
        var r = e.stateNode;
        if (
          typeof e.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' && (ar === null || !ar.has(r)))
        ) {
          (t = Xi(n, t)),
            (t = Lw(e, t, 1)),
            (e = or(e, t, 1)),
            (t = yt()),
            e !== null && (Mo(e, 1, t), kt(e, t));
          break;
        }
      }
      e = e.return;
    }
}
function ek(t, e, n) {
  var r = t.pingCache;
  r !== null && r.delete(e),
    (e = yt()),
    (t.pingedLanes |= t.suspendedLanes & n),
    We === t &&
      (Je & n) === n &&
      (je === 4 || (je === 3 && (Je & 130023424) === Je && 500 > Oe() - cp) ? Vr(t, 0) : (up |= n)),
    kt(t, e);
}
function e1(t, e) {
  e === 0 && (t.mode & 1 ? ((e = ya), (ya <<= 1), !(ya & 130023424) && (ya = 4194304)) : (e = 1));
  var n = yt();
  (t = Rn(t, e)), t !== null && (Mo(t, e, n), kt(t, n));
}
function tk(t) {
  var e = t.memoizedState,
    n = 0;
  e !== null && (n = e.retryLane), e1(t, n);
}
function nk(t, e) {
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
  r !== null && r.delete(e), e1(t, n);
}
var t1;
t1 = function (t, e, n) {
  if (t !== null)
    if (t.memoizedProps !== e.pendingProps || Tt.current) _t = !0;
    else {
      if (!(t.lanes & n) && !(e.flags & 128)) return (_t = !1), BI(t, e, n);
      _t = !!(t.flags & 131072);
    }
  else (_t = !1), _e && e.flags & 1048576 && iw(e, _l, e.index);
  switch (((e.lanes = 0), e.tag)) {
    case 2:
      var r = e.type;
      Wa(t, e), (t = e.pendingProps);
      var i = qi(e, ht.current);
      Pi(e, n), (i = rp(null, e, r, t, i, n));
      var s = ip();
      return (
        (e.flags |= 1),
        typeof i == 'object' && i !== null && typeof i.render == 'function' && i.$$typeof === void 0
          ? ((e.tag = 1),
            (e.memoizedState = null),
            (e.updateQueue = null),
            It(r) ? ((s = !0), El(e)) : (s = !1),
            (e.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
            Jf(e),
            (i.updater = Eu),
            (e.stateNode = i),
            (i._reactInternals = e),
            wd(e, r, t, n),
            (e = _d(null, e, r, !0, s, n)))
          : ((e.tag = 0), _e && s && Kf(e), pt(null, e, i, n), (e = e.child)),
        e
      );
    case 16:
      r = e.elementType;
      e: {
        switch (
          (Wa(t, e),
          (t = e.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (e.type = r),
          (i = e.tag = ik(r)),
          (t = Gt(r, t)),
          i)
        ) {
          case 0:
            e = Sd(null, e, r, t, n);
            break e;
          case 1:
            e = Mg(null, e, r, t, n);
            break e;
          case 11:
            e = $g(null, e, r, t, n);
            break e;
          case 14:
            e = bg(null, e, r, Gt(r.type, t), n);
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
        Sd(t, e, r, i, n)
      );
    case 1:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : Gt(r, i)),
        Mg(t, e, r, i, n)
      );
    case 3:
      e: {
        if ((Fw(e), t === null)) throw Error(k(387));
        (r = e.pendingProps), (s = e.memoizedState), (i = s.element), lw(t, e), kl(e, r, null, n);
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
            (i = Xi(Error(k(423)), e)), (e = Fg(t, e, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Xi(Error(k(424)), e)), (e = Fg(t, e, r, n, i));
            break e;
          } else
            for (
              Rt = sr(e.stateNode.containerInfo.firstChild),
                Dt = e,
                _e = !0,
                Yt = null,
                n = dw(e, null, r, n),
                e.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Gi(), r === i)) {
            e = xn(t, e, n);
            break e;
          }
          pt(t, e, r, n);
        }
        e = e.child;
      }
      return e;
    case 5:
      return (
        fw(e),
        t === null && gd(e),
        (r = e.type),
        (i = e.pendingProps),
        (s = t !== null ? t.memoizedProps : null),
        (o = i.children),
        hd(r, i) ? (o = null) : s !== null && hd(r, s) && (e.flags |= 32),
        Mw(t, e),
        pt(t, e, o, n),
        e.child
      );
    case 6:
      return t === null && gd(e), null;
    case 13:
      return Uw(t, e, n);
    case 4:
      return (
        Zf(e, e.stateNode.containerInfo),
        (r = e.pendingProps),
        t === null ? (e.child = Qi(e, null, r, n)) : pt(t, e, r, n),
        e.child
      );
    case 11:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : Gt(r, i)),
        $g(t, e, r, i, n)
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
          fe(Tl, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (tn(s.value, o)) {
            if (s.children === i.children && !Tt.current) {
              e = xn(t, e, n);
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
                      (l = Cn(-1, n & -n)), (l.tag = 2);
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
                      yd(s.return, n, e),
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
                  yd(o, n, e),
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
        Pi(e, n),
        (i = Bt(i)),
        (r = r(i)),
        (e.flags |= 1),
        pt(t, e, r, n),
        e.child
      );
    case 14:
      return (r = e.type), (i = Gt(r, e.pendingProps)), (i = Gt(r.type, i)), bg(t, e, r, i, n);
    case 15:
      return $w(t, e, e.type, e.pendingProps, n);
    case 17:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : Gt(r, i)),
        Wa(t, e),
        (e.tag = 1),
        It(r) ? ((t = !0), El(e)) : (t = !1),
        Pi(e, n),
        cw(e, r, i),
        wd(e, r, i, n),
        _d(null, e, r, !0, t, n)
      );
    case 19:
      return Vw(t, e, n);
    case 22:
      return bw(t, e, n);
  }
  throw Error(k(156, e.tag));
};
function n1(t, e) {
  return N0(t, e);
}
function rk(t, e, n, r) {
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
  return new rk(t, e, n, r);
}
function pp(t) {
  return (t = t.prototype), !(!t || !t.isReactComponent);
}
function ik(t) {
  if (typeof t == 'function') return pp(t) ? 1 : 0;
  if (t != null) {
    if (((t = t.$$typeof), t === Pf)) return 11;
    if (t === Lf) return 14;
  }
  return 2;
}
function ur(t, e) {
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
function Qa(t, e, n, r, i, s) {
  var o = 2;
  if (((r = t), typeof t == 'function')) pp(t) && (o = 1);
  else if (typeof t == 'string') o = 5;
  else
    e: switch (t) {
      case pi:
        return jr(n.children, i, s, e);
      case Of:
        (o = 8), (i |= 8);
        break;
      case Bh:
        return (t = jt(12, n, e, i | 2)), (t.elementType = Bh), (t.lanes = s), t;
      case Hh:
        return (t = jt(13, n, e, i)), (t.elementType = Hh), (t.lanes = s), t;
      case Kh:
        return (t = jt(19, n, e, i)), (t.elementType = Kh), (t.lanes = s), t;
      case h0:
        return Iu(n, i, s, e);
      default:
        if (typeof t == 'object' && t !== null)
          switch (t.$$typeof) {
            case u0:
              o = 10;
              break e;
            case c0:
              o = 9;
              break e;
            case Pf:
              o = 11;
              break e;
            case Lf:
              o = 14;
              break e;
            case zn:
              (o = 16), (r = null);
              break e;
          }
        throw Error(k(130, t == null ? t : typeof t, ''));
    }
  return (e = jt(o, n, e, i)), (e.elementType = t), (e.type = r), (e.lanes = s), e;
}
function jr(t, e, n, r) {
  return (t = jt(7, t, r, e)), (t.lanes = n), t;
}
function Iu(t, e, n, r) {
  return (
    (t = jt(22, t, r, e)), (t.elementType = h0), (t.lanes = n), (t.stateNode = { isHidden: !1 }), t
  );
}
function nh(t, e, n) {
  return (t = jt(6, t, null, e)), (t.lanes = n), t;
}
function rh(t, e, n) {
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
function sk(t, e, n, r, i) {
  (this.tag = e),
    (this.containerInfo = t),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Mc(0)),
    (this.expirationTimes = Mc(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Mc(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function mp(t, e, n, r, i, s, o, a, l) {
  return (
    (t = new sk(t, e, n, a, l)),
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
    Jf(s),
    t
  );
}
function ok(t, e, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: fi,
    key: r == null ? null : '' + r,
    children: t,
    containerInfo: e,
    implementation: n
  };
}
function r1(t) {
  if (!t) return gr;
  t = t._reactInternals;
  e: {
    if (oi(t) !== t || t.tag !== 1) throw Error(k(170));
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
    if (It(n)) return nw(t, n, e);
  }
  return e;
}
function i1(t, e, n, r, i, s, o, a, l) {
  return (
    (t = mp(n, r, !0, t, i, s, o, a, l)),
    (t.context = r1(null)),
    (n = t.current),
    (r = yt()),
    (i = lr(n)),
    (s = Cn(r, i)),
    (s.callback = e ?? null),
    or(n, s, i),
    (t.current.lanes = i),
    Mo(t, i, r),
    kt(t, r),
    t
  );
}
function ku(t, e, n, r) {
  var i = e.current,
    s = yt(),
    o = lr(i);
  return (
    (n = r1(n)),
    e.context === null ? (e.context = n) : (e.pendingContext = n),
    (e = Cn(s, o)),
    (e.payload = { element: t }),
    (r = r === void 0 ? null : r),
    r !== null && (e.callback = r),
    (t = or(i, e, o)),
    t !== null && (en(t, i, o, s), Ba(t, i, o)),
    o
  );
}
function Pl(t) {
  if (((t = t.current), !t.child)) return null;
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode;
    default:
      return t.child.stateNode;
  }
}
function Gg(t, e) {
  if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
    var n = t.retryLane;
    t.retryLane = n !== 0 && n < e ? n : e;
  }
}
function gp(t, e) {
  Gg(t, e), (t = t.alternate) && Gg(t, e);
}
function ak() {
  return null;
}
var s1 =
  typeof reportError == 'function'
    ? reportError
    : function (t) {
        console.error(t);
      };
function yp(t) {
  this._internalRoot = t;
}
Cu.prototype.render = yp.prototype.render = function (t) {
  var e = this._internalRoot;
  if (e === null) throw Error(k(409));
  ku(t, e, null, null);
};
Cu.prototype.unmount = yp.prototype.unmount = function () {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var e = t.containerInfo;
    Xr(function () {
      ku(null, t, null, null);
    }),
      (e[Nn] = null);
  }
};
function Cu(t) {
  this._internalRoot = t;
}
Cu.prototype.unstable_scheduleHydration = function (t) {
  if (t) {
    var e = $0();
    t = { blockedOn: null, target: t, priority: e };
    for (var n = 0; n < Hn.length && e !== 0 && e < Hn[n].priority; n++);
    Hn.splice(n, 0, t), n === 0 && M0(t);
  }
};
function vp(t) {
  return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
}
function Au(t) {
  return !(
    !t ||
    (t.nodeType !== 1 &&
      t.nodeType !== 9 &&
      t.nodeType !== 11 &&
      (t.nodeType !== 8 || t.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Qg() {}
function lk(t, e, n, r, i) {
  if (i) {
    if (typeof r == 'function') {
      var s = r;
      r = function () {
        var u = Pl(o);
        s.call(u);
      };
    }
    var o = i1(e, r, t, 0, null, !1, !1, '', Qg);
    return (
      (t._reactRootContainer = o),
      (t[Nn] = o.current),
      co(t.nodeType === 8 ? t.parentNode : t),
      Xr(),
      o
    );
  }
  for (; (i = t.lastChild); ) t.removeChild(i);
  if (typeof r == 'function') {
    var a = r;
    r = function () {
      var u = Pl(l);
      a.call(u);
    };
  }
  var l = mp(t, 0, !1, null, null, !1, !1, '', Qg);
  return (
    (t._reactRootContainer = l),
    (t[Nn] = l.current),
    co(t.nodeType === 8 ? t.parentNode : t),
    Xr(function () {
      ku(e, l, n, r);
    }),
    l
  );
}
function Nu(t, e, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == 'function') {
      var a = i;
      i = function () {
        var l = Pl(o);
        a.call(l);
      };
    }
    ku(e, o, t, i);
  } else o = lk(n, e, t, i, r);
  return Pl(o);
}
P0 = function (t) {
  switch (t.tag) {
    case 3:
      var e = t.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var n = Os(e.pendingLanes);
        n !== 0 && (Mf(e, n | 1), kt(e, Oe()), !(se & 6) && ((Ji = Oe() + 500), Ir()));
      }
      break;
    case 13:
      Xr(function () {
        var r = Rn(t, 1);
        if (r !== null) {
          var i = yt();
          en(r, t, 1, i);
        }
      }),
        gp(t, 1);
  }
};
Ff = function (t) {
  if (t.tag === 13) {
    var e = Rn(t, 134217728);
    if (e !== null) {
      var n = yt();
      en(e, t, 134217728, n);
    }
    gp(t, 134217728);
  }
};
L0 = function (t) {
  if (t.tag === 13) {
    var e = lr(t),
      n = Rn(t, e);
    if (n !== null) {
      var r = yt();
      en(n, t, e, r);
    }
    gp(t, e);
  }
};
$0 = function () {
  return ce;
};
b0 = function (t, e) {
  var n = ce;
  try {
    return (ce = t), e();
  } finally {
    ce = n;
  }
};
td = function (t, e, n) {
  switch (e) {
    case 'input':
      if ((Gh(t, n), (e = n.name), n.type === 'radio' && e != null)) {
        for (n = t; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll('input[name=' + JSON.stringify('' + e) + '][type="radio"]'), e = 0;
          e < n.length;
          e++
        ) {
          var r = n[e];
          if (r !== t && r.form === t.form) {
            var i = vu(r);
            if (!i) throw Error(k(90));
            f0(r), Gh(r, i);
          }
        }
      }
      break;
    case 'textarea':
      m0(t, n);
      break;
    case 'select':
      (e = n.value), e != null && Ri(t, !!n.multiple, e, !1);
  }
};
_0 = hp;
T0 = Xr;
var uk = { usingClientEntryPoint: !1, Events: [Uo, vi, vu, E0, S0, hp] },
  As = {
    findFiberByHostInstance: Or,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom'
  },
  ck = {
    bundleType: As.bundleType,
    version: As.version,
    rendererPackageName: As.rendererPackageName,
    rendererConfig: As.rendererConfig,
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
      return (t = C0(t)), t === null ? null : t.stateNode;
    },
    findFiberByHostInstance: As.findFiberByHostInstance || ak,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608'
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Na = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Na.isDisabled && Na.supportsFiber)
    try {
      (pu = Na.inject(ck)), (cn = Na);
    } catch {}
}
$t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = uk;
$t.createPortal = function (t, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!vp(e)) throw Error(k(200));
  return ok(t, e, null, n);
};
$t.createRoot = function (t, e) {
  if (!vp(t)) throw Error(k(299));
  var n = !1,
    r = '',
    i = s1;
  return (
    e != null &&
      (e.unstable_strictMode === !0 && (n = !0),
      e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
      e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
    (e = mp(t, 1, !1, null, null, n, !1, r, i)),
    (t[Nn] = e.current),
    co(t.nodeType === 8 ? t.parentNode : t),
    new yp(e)
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
  return (t = C0(e)), (t = t === null ? null : t.stateNode), t;
};
$t.flushSync = function (t) {
  return Xr(t);
};
$t.hydrate = function (t, e, n) {
  if (!Au(e)) throw Error(k(200));
  return Nu(null, t, e, !0, n);
};
$t.hydrateRoot = function (t, e, n) {
  if (!vp(t)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = '',
    o = s1;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (e = i1(e, null, t, 1, n ?? null, i, !1, s, o)),
    (t[Nn] = e.current),
    co(t),
    r)
  )
    for (t = 0; t < r.length; t++)
      (n = r[t]),
        (i = n._getVersion),
        (i = i(n._source)),
        e.mutableSourceEagerHydrationData == null
          ? (e.mutableSourceEagerHydrationData = [n, i])
          : e.mutableSourceEagerHydrationData.push(n, i);
  return new Cu(e);
};
$t.render = function (t, e, n) {
  if (!Au(e)) throw Error(k(200));
  return Nu(null, t, e, !1, n);
};
$t.unmountComponentAtNode = function (t) {
  if (!Au(t)) throw Error(k(40));
  return t._reactRootContainer
    ? (Xr(function () {
        Nu(null, null, t, !1, function () {
          (t._reactRootContainer = null), (t[Nn] = null);
        });
      }),
      !0)
    : !1;
};
$t.unstable_batchedUpdates = hp;
$t.unstable_renderSubtreeIntoContainer = function (t, e, n, r) {
  if (!Au(n)) throw Error(k(200));
  if (t == null || t._reactInternals === void 0) throw Error(k(38));
  return Nu(t, e, n, !1, r);
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
})(aT);
var Yg = ul;
(Vh.createRoot = Yg.createRoot), (Vh.hydrateRoot = Yg.hydrateRoot);
function Xt(t) {
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
function yr(t) {
  return !!t && !!t[Ee];
}
function Dn(t) {
  var e;
  return (
    !!t &&
    ((function (n) {
      if (!n || typeof n != 'object') return !1;
      var r = Object.getPrototypeOf(n);
      if (r === null) return !0;
      var i = Object.hasOwnProperty.call(r, 'constructor') && r.constructor;
      return i === Object || (typeof i == 'function' && Function.toString.call(i) === wk);
    })(t) ||
      Array.isArray(t) ||
      !!t[ry] ||
      !!(!((e = t.constructor) === null || e === void 0) && e[ry]) ||
      wp(t) ||
      Ep(t))
  );
}
function Jr(t, e, n) {
  n === void 0 && (n = !1),
    hs(t) === 0
      ? (n ? Object.keys : bi)(t).forEach(function (r) {
          (n && typeof r == 'symbol') || e(r, t[r], t);
        })
      : t.forEach(function (r, i) {
          return e(i, r, t);
        });
}
function hs(t) {
  var e = t[Ee];
  return e ? (e.i > 3 ? e.i - 4 : e.i) : Array.isArray(t) ? 1 : wp(t) ? 2 : Ep(t) ? 3 : 0;
}
function $i(t, e) {
  return hs(t) === 2 ? t.has(e) : Object.prototype.hasOwnProperty.call(t, e);
}
function hk(t, e) {
  return hs(t) === 2 ? t.get(e) : t[e];
}
function o1(t, e, n) {
  var r = hs(t);
  r === 2 ? t.set(e, n) : r === 3 ? t.add(n) : (t[e] = n);
}
function a1(t, e) {
  return t === e ? t !== 0 || 1 / t == 1 / e : t != t && e != e;
}
function wp(t) {
  return yk && t instanceof Map;
}
function Ep(t) {
  return vk && t instanceof Set;
}
function Rr(t) {
  return t.o || t.t;
}
function Sp(t) {
  if (Array.isArray(t)) return Array.prototype.slice.call(t);
  var e = u1(t);
  delete e[Ee];
  for (var n = bi(e), r = 0; r < n.length; r++) {
    var i = n[r],
      s = e[i];
    s.writable === !1 && ((s.writable = !0), (s.configurable = !0)),
      (s.get || s.set) &&
        (e[i] = { configurable: !0, writable: !0, enumerable: s.enumerable, value: t[i] });
  }
  return Object.create(Object.getPrototypeOf(t), e);
}
function _p(t, e) {
  return (
    e === void 0 && (e = !1),
    Tp(t) ||
      yr(t) ||
      !Dn(t) ||
      (hs(t) > 1 && (t.set = t.add = t.clear = t.delete = dk),
      Object.freeze(t),
      e &&
        Jr(
          t,
          function (n, r) {
            return _p(r, !0);
          },
          !0
        )),
    t
  );
}
function dk() {
  Xt(2);
}
function Tp(t) {
  return t == null || typeof t != 'object' || Object.isFrozen(t);
}
function dn(t) {
  var e = Md[t];
  return e || Xt(18, t), e;
}
function fk(t, e) {
  Md[t] || (Md[t] = e);
}
function Ld() {
  return Eo;
}
function ih(t, e) {
  e && (dn('Patches'), (t.u = []), (t.s = []), (t.v = e));
}
function Ll(t) {
  $d(t), t.p.forEach(pk), (t.p = null);
}
function $d(t) {
  t === Eo && (Eo = t.l);
}
function Xg(t) {
  return (Eo = { p: [], l: Eo, h: t, m: !0, _: 0 });
}
function pk(t) {
  var e = t[Ee];
  e.i === 0 || e.i === 1 ? e.j() : (e.O = !0);
}
function sh(t, e) {
  e._ = e.p.length;
  var n = e.p[0],
    r = t !== void 0 && t !== n;
  return (
    e.h.g || dn('ES5').S(e, t, r),
    r
      ? (n[Ee].P && (Ll(e), Xt(4)),
        Dn(t) && ((t = $l(e, t)), e.l || bl(e, t)),
        e.u && dn('Patches').M(n[Ee].t, t, e.u, e.s))
      : (t = $l(e, n, [])),
    Ll(e),
    e.u && e.v(e.u, e.s),
    t !== l1 ? t : void 0
  );
}
function $l(t, e, n) {
  if (Tp(e)) return e;
  var r = e[Ee];
  if (!r)
    return (
      Jr(
        e,
        function (a, l) {
          return Jg(t, r, e, a, l, n);
        },
        !0
      ),
      e
    );
  if (r.A !== t) return e;
  if (!r.P) return bl(t, r.t, !0), r.t;
  if (!r.I) {
    (r.I = !0), r.A._--;
    var i = r.i === 4 || r.i === 5 ? (r.o = Sp(r.k)) : r.o,
      s = i,
      o = !1;
    r.i === 3 && ((s = new Set(i)), i.clear(), (o = !0)),
      Jr(s, function (a, l) {
        return Jg(t, r, i, a, l, n, o);
      }),
      bl(t, i, !1),
      n && t.u && dn('Patches').N(r, n, t.u, t.s);
  }
  return r.o;
}
function Jg(t, e, n, r, i, s, o) {
  if (yr(i)) {
    var a = $l(t, i, s && e && e.i !== 3 && !$i(e.R, r) ? s.concat(r) : void 0);
    if ((o1(n, r, a), !yr(a))) return;
    t.m = !1;
  } else o && n.add(i);
  if (Dn(i) && !Tp(i)) {
    if (!t.h.D && t._ < 1) return;
    $l(t, i), (e && e.A.l) || bl(t, i);
  }
}
function bl(t, e, n) {
  n === void 0 && (n = !1), !t.l && t.h.D && t.m && _p(e, n);
}
function oh(t, e) {
  var n = t[Ee];
  return (n ? Rr(n) : t)[e];
}
function Zg(t, e) {
  if (e in t)
    for (var n = Object.getPrototypeOf(t); n; ) {
      var r = Object.getOwnPropertyDescriptor(n, e);
      if (r) return r;
      n = Object.getPrototypeOf(n);
    }
}
function Wn(t) {
  t.P || ((t.P = !0), t.l && Wn(t.l));
}
function ah(t) {
  t.o || (t.o = Sp(t.t));
}
function bd(t, e, n) {
  var r = wp(e)
    ? dn('MapSet').F(e, n)
    : Ep(e)
    ? dn('MapSet').T(e, n)
    : t.g
    ? (function (i, s) {
        var o = Array.isArray(i),
          a = {
            i: o ? 1 : 0,
            A: s ? s.A : Ld(),
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
          u = So;
        o && ((l = [a]), (u = Ls));
        var c = Proxy.revocable(l, u),
          h = c.revoke,
          d = c.proxy;
        return (a.k = d), (a.j = h), d;
      })(e, n)
    : dn('ES5').J(e, n);
  return (n ? n.A : Ld()).p.push(r), r;
}
function mk(t) {
  return (
    yr(t) || Xt(22, t),
    (function e(n) {
      if (!Dn(n)) return n;
      var r,
        i = n[Ee],
        s = hs(n);
      if (i) {
        if (!i.P && (i.i < 4 || !dn('ES5').K(i))) return i.t;
        (i.I = !0), (r = ey(n, s)), (i.I = !1);
      } else r = ey(n, s);
      return (
        Jr(r, function (o, a) {
          (i && hk(i.t, o) === a) || o1(r, o, e(a));
        }),
        s === 3 ? new Set(r) : r
      );
    })(t)
  );
}
function ey(t, e) {
  switch (e) {
    case 2:
      return new Map(t);
    case 3:
      return Array.from(t);
  }
  return Sp(t);
}
function gk() {
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
                return So.get(l, s);
              },
              set: function (l) {
                var u = this[Ee];
                So.set(u, s, l);
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
            r(a) && Wn(a);
            break;
          case 4:
            n(a) && Wn(a);
        }
    }
  }
  function n(s) {
    for (var o = s.t, a = s.k, l = bi(a), u = l.length - 1; u >= 0; u--) {
      var c = l[u];
      if (c !== Ee) {
        var h = o[c];
        if (h === void 0 && !$i(o, c)) return !0;
        var d = a[c],
          m = d && d[Ee];
        if (m ? m.t !== h : !a1(d, h)) return !0;
      }
    }
    var y = !!o[Ee];
    return l.length !== bi(o).length + (y ? 0 : 1);
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
  fk('ES5', {
    J: function (s, o) {
      var a = Array.isArray(s),
        l = (function (c, h) {
          if (c) {
            for (var d = Array(h.length), m = 0; m < h.length; m++)
              Object.defineProperty(d, '' + m, t(m, !0));
            return d;
          }
          var y = u1(h);
          delete y[Ee];
          for (var v = bi(y), S = 0; S < v.length; S++) {
            var p = v[S];
            y[p] = t(p, c || !!y[p].enumerable);
          }
          return Object.create(Object.getPrototypeOf(h), y);
        })(a, s),
        u = {
          i: a ? 5 : 4,
          A: o ? o.A : Ld(),
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
        ? yr(o) && o[Ee].A === s && e(s.p)
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
                    Jr(d, function (g) {
                      g !== Ee &&
                        (h[g] !== void 0 || $i(h, g) ? m[g] || l(d[g]) : ((m[g] = !0), Wn(c)));
                    }),
                      Jr(h, function (g) {
                        d[g] !== void 0 || $i(d, g) || ((m[g] = !1), Wn(c));
                      });
                  else if (y === 5) {
                    if ((r(c) && (Wn(c), (m.length = !0)), d.length < h.length))
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
var ty,
  Eo,
  Ip = typeof Symbol < 'u' && typeof Symbol('x') == 'symbol',
  yk = typeof Map < 'u',
  vk = typeof Set < 'u',
  ny = typeof Proxy < 'u' && Proxy.revocable !== void 0 && typeof Reflect < 'u',
  l1 = Ip ? Symbol.for('immer-nothing') : (((ty = {})['immer-nothing'] = !0), ty),
  ry = Ip ? Symbol.for('immer-draftable') : '__$immer_draftable',
  Ee = Ip ? Symbol.for('immer-state') : '__$immer_state',
  wk = '' + Object.prototype.constructor,
  bi =
    typeof Reflect < 'u' && Reflect.ownKeys
      ? Reflect.ownKeys
      : Object.getOwnPropertySymbols !== void 0
      ? function (t) {
          return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
        }
      : Object.getOwnPropertyNames,
  u1 =
    Object.getOwnPropertyDescriptors ||
    function (t) {
      var e = {};
      return (
        bi(t).forEach(function (n) {
          e[n] = Object.getOwnPropertyDescriptor(t, n);
        }),
        e
      );
    },
  Md = {},
  So = {
    get: function (t, e) {
      if (e === Ee) return t;
      var n = Rr(t);
      if (!$i(n, e))
        return (function (i, s, o) {
          var a,
            l = Zg(s, o);
          return l
            ? 'value' in l
              ? l.value
              : (a = l.get) === null || a === void 0
              ? void 0
              : a.call(i.k)
            : void 0;
        })(t, n, e);
      var r = n[e];
      return t.I || !Dn(r) ? r : r === oh(t.t, e) ? (ah(t), (t.o[e] = bd(t.A.h, r, t))) : r;
    },
    has: function (t, e) {
      return e in Rr(t);
    },
    ownKeys: function (t) {
      return Reflect.ownKeys(Rr(t));
    },
    set: function (t, e, n) {
      var r = Zg(Rr(t), e);
      if (r != null && r.set) return r.set.call(t.k, n), !0;
      if (!t.P) {
        var i = oh(Rr(t), e),
          s = i == null ? void 0 : i[Ee];
        if (s && s.t === n) return (t.o[e] = n), (t.R[e] = !1), !0;
        if (a1(n, i) && (n !== void 0 || $i(t.t, e))) return !0;
        ah(t), Wn(t);
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
        oh(t.t, e) !== void 0 || e in t.t ? ((t.R[e] = !1), ah(t), Wn(t)) : delete t.R[e],
        t.o && delete t.o[e],
        !0
      );
    },
    getOwnPropertyDescriptor: function (t, e) {
      var n = Rr(t),
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
      Xt(11);
    },
    getPrototypeOf: function (t) {
      return Object.getPrototypeOf(t.t);
    },
    setPrototypeOf: function () {
      Xt(12);
    }
  },
  Ls = {};
Jr(So, function (t, e) {
  Ls[t] = function () {
    return (arguments[0] = arguments[0][0]), e.apply(this, arguments);
  };
}),
  (Ls.deleteProperty = function (t, e) {
    return Ls.set.call(this, t, e, void 0);
  }),
  (Ls.set = function (t, e, n) {
    return So.set.call(this, t[0], e, n, t[0]);
  });
var Ek = (function () {
    function t(n) {
      var r = this;
      (this.g = ny),
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
            (typeof s != 'function' && Xt(6),
            o !== void 0 && typeof o != 'function' && Xt(7),
            Dn(i))
          ) {
            var c = Xg(r),
              h = bd(r, i, void 0),
              d = !0;
            try {
              (u = s(h)), (d = !1);
            } finally {
              d ? Ll(c) : $d(c);
            }
            return typeof Promise < 'u' && u instanceof Promise
              ? u.then(
                  function (v) {
                    return ih(c, o), sh(v, c);
                  },
                  function (v) {
                    throw (Ll(c), v);
                  }
                )
              : (ih(c, o), sh(u, c));
          }
          if (!i || typeof i != 'object') {
            if (((u = s(i)) === void 0 && (u = i), u === l1 && (u = void 0), r.D && _p(u, !0), o)) {
              var m = [],
                y = [];
              dn('Patches').M(i, u, m, y), o(m, y);
            }
            return u;
          }
          Xt(21, i);
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
        Dn(n) || Xt(8), yr(n) && (n = mk(n));
        var r = Xg(this),
          i = bd(this, n, void 0);
        return (i[Ee].C = !0), $d(r), i;
      }),
      (e.finishDraft = function (n, r) {
        var i = n && n[Ee],
          s = i.A;
        return ih(s, r), sh(void 0, s);
      }),
      (e.setAutoFreeze = function (n) {
        this.D = n;
      }),
      (e.setUseProxies = function (n) {
        n && !ny && Xt(20), (this.g = n);
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
        var o = dn('Patches').$;
        return yr(n)
          ? o(n, r)
          : this.produce(n, function (a) {
              return o(a, r);
            });
      }),
      t
    );
  })(),
  Pt = new Ek(),
  c1 = Pt.produce;
Pt.produceWithPatches.bind(Pt);
Pt.setAutoFreeze.bind(Pt);
Pt.setUseProxies.bind(Pt);
Pt.applyPatches.bind(Pt);
Pt.createDraft.bind(Pt);
Pt.finishDraft.bind(Pt);
function _o(t) {
  return (
    (_o =
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
    _o(t)
  );
}
function Sk(t, e) {
  if (_o(t) !== 'object' || t === null) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || 'default');
    if (_o(r) !== 'object') return r;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(t);
}
function _k(t) {
  var e = Sk(t, 'string');
  return _o(e) === 'symbol' ? e : String(e);
}
function Tk(t, e, n) {
  return (
    (e = _k(e)),
    e in t
      ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = n),
    t
  );
}
function iy(t, e) {
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
function sy(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? iy(Object(n), !0).forEach(function (r) {
          Tk(t, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
      : iy(Object(n)).forEach(function (r) {
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
var oy = (function () {
    return (typeof Symbol == 'function' && Symbol.observable) || '@@observable';
  })(),
  lh = function () {
    return Math.random().toString(36).substring(7).split('').join('.');
  },
  Ml = {
    INIT: '@@redux/INIT' + lh(),
    REPLACE: '@@redux/REPLACE' + lh(),
    PROBE_UNKNOWN_ACTION: function () {
      return '@@redux/PROBE_UNKNOWN_ACTION' + lh();
    }
  };
function Ik(t) {
  if (typeof t != 'object' || t === null) return !1;
  for (var e = t; Object.getPrototypeOf(e) !== null; ) e = Object.getPrototypeOf(e);
  return Object.getPrototypeOf(t) === e;
}
function h1(t, e, n) {
  var r;
  if (
    (typeof e == 'function' && typeof n == 'function') ||
    (typeof n == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(st(0));
  if ((typeof e == 'function' && typeof n > 'u' && ((n = e), (e = void 0)), typeof n < 'u')) {
    if (typeof n != 'function') throw new Error(st(1));
    return n(h1)(t, e);
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
    if (!Ik(v)) throw new Error(st(7));
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
    (i = v), d({ type: Ml.REPLACE });
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
      (v[oy] = function () {
        return this;
      }),
      v
    );
  }
  return (
    d({ type: Ml.INIT }),
    (r = { dispatch: d, subscribe: h, getState: c, replaceReducer: m }),
    (r[oy] = y),
    r
  );
}
function kk(t) {
  Object.keys(t).forEach(function (e) {
    var n = t[e],
      r = n(void 0, { type: Ml.INIT });
    if (typeof r > 'u') throw new Error(st(12));
    if (typeof n(void 0, { type: Ml.PROBE_UNKNOWN_ACTION() }) > 'u') throw new Error(st(13));
  });
}
function d1(t) {
  for (var e = Object.keys(t), n = {}, r = 0; r < e.length; r++) {
    var i = e[r];
    typeof t[i] == 'function' && (n[i] = t[i]);
  }
  var s = Object.keys(n),
    o;
  try {
    kk(n);
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
function Fl() {
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
function Ck() {
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
      return (s = Fl.apply(void 0, a)(i.dispatch)), sy(sy({}, i), {}, { dispatch: s });
    };
  };
}
function f1(t) {
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
var p1 = f1();
p1.withExtraArgument = f1;
const ay = p1;
var Ak =
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
  Nk =
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
  Ul =
    (globalThis && globalThis.__spreadArray) ||
    function (t, e) {
      for (var n = 0, r = e.length, i = t.length; n < r; n++, i++) t[i] = e[n];
      return t;
    },
  Rk = Object.defineProperty,
  xk = Object.defineProperties,
  Dk = Object.getOwnPropertyDescriptors,
  ly = Object.getOwnPropertySymbols,
  Ok = Object.prototype.hasOwnProperty,
  Pk = Object.prototype.propertyIsEnumerable,
  uy = function (t, e, n) {
    return e in t
      ? Rk(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n);
  },
  cr = function (t, e) {
    for (var n in e || (e = {})) Ok.call(e, n) && uy(t, n, e[n]);
    if (ly)
      for (var r = 0, i = ly(e); r < i.length; r++) {
        var n = i[r];
        Pk.call(e, n) && uy(t, n, e[n]);
      }
    return t;
  },
  uh = function (t, e) {
    return xk(t, Dk(e));
  },
  Lk = function (t, e, n) {
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
  $k =
    typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == 'object' ? Fl : Fl.apply(null, arguments);
        };
function bk(t) {
  if (typeof t != 'object' || t === null) return !1;
  var e = Object.getPrototypeOf(t);
  if (e === null) return !0;
  for (var n = e; Object.getPrototypeOf(n) !== null; ) n = Object.getPrototypeOf(n);
  return e === n;
}
var Mk = (function (t) {
  Ak(e, t);
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
        ? new (e.bind.apply(e, Ul([void 0], n[0].concat(this))))()
        : new (e.bind.apply(e, Ul([void 0], n.concat(this))))();
    }),
    e
  );
})(Array);
function Fd(t) {
  return Dn(t) ? c1(t, function () {}) : t;
}
function Fk(t) {
  return typeof t == 'boolean';
}
function Uk() {
  return function (e) {
    return Vk(e);
  };
}
function Vk(t) {
  t === void 0 && (t = {});
  var e = t.thunk,
    n = e === void 0 ? !0 : e;
  t.immutableCheck, t.serializableCheck;
  var r = new Mk();
  return n && (Fk(n) ? r.push(ay) : r.push(ay.withExtraArgument(n.extraArgument))), r;
}
var jk = !0;
function zk(t) {
  var e = Uk(),
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
  else if (bk(i)) m = d1(i);
  else
    throw new Error(
      '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
    );
  var y = o;
  typeof y == 'function' && (y = y(e));
  var v = Ck.apply(void 0, y),
    S = Fl;
  l && (S = $k(cr({ trace: !jk }, typeof l == 'object' && l)));
  var p = [v];
  Array.isArray(d) ? (p = Ul([v], d)) : typeof d == 'function' && (p = d(p));
  var f = S.apply(void 0, p);
  return h1(m, c, f);
}
function hr(t, e) {
  function n() {
    for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
    if (e) {
      var s = e.apply(void 0, r);
      if (!s) throw new Error('prepareAction did not return an object');
      return cr(
        cr({ type: t, payload: s.payload }, 'meta' in s && { meta: s.meta }),
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
function m1(t) {
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
function Bk(t) {
  return typeof t == 'function';
}
function Hk(t, e, n, r) {
  n === void 0 && (n = []);
  var i = typeof e == 'function' ? m1(e) : [e, n, r],
    s = i[0],
    o = i[1],
    a = i[2],
    l;
  if (Bk(t))
    l = function () {
      return Fd(t());
    };
  else {
    var u = Fd(t);
    l = function () {
      return u;
    };
  }
  function c(h, d) {
    h === void 0 && (h = l());
    var m = Ul(
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
          if (yr(y)) {
            var S = y,
              p = v(S, d);
            return p === void 0 ? y : p;
          } else {
            if (Dn(y))
              return c1(y, function (f) {
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
function Kk(t, e) {
  return t + '/' + e;
}
function g1(t) {
  var e = t.name;
  if (!e) throw new Error('`name` is a required option for createSlice');
  typeof process < 'u';
  var n = typeof t.initialState == 'function' ? t.initialState : Fd(t.initialState),
    r = t.reducers || {},
    i = Object.keys(r),
    s = {},
    o = {},
    a = {};
  i.forEach(function (c) {
    var h = r[c],
      d = Kk(e, c),
      m,
      y;
    'reducer' in h ? ((m = h.reducer), (y = h.prepare)) : (m = h),
      (s[c] = m),
      (o[d] = m),
      (a[c] = y ? hr(d, y) : hr(d));
  });
  function l() {
    var c = typeof t.extraReducers == 'function' ? m1(t.extraReducers) : [t.extraReducers],
      h = c[0],
      d = h === void 0 ? {} : h,
      m = c[1],
      y = m === void 0 ? [] : m,
      v = c[2],
      S = v === void 0 ? void 0 : v,
      p = cr(cr({}, d), o);
    return Hk(n, function (f) {
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
var Wk = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW',
  qk = function (t) {
    t === void 0 && (t = 21);
    for (var e = '', n = t; n--; ) e += Wk[(Math.random() * 64) | 0];
    return e;
  },
  Gk = ['name', 'message', 'stack', 'code'],
  ch = (function () {
    function t(e, n) {
      (this.payload = e), (this.meta = n);
    }
    return t;
  })(),
  cy = (function () {
    function t(e, n) {
      (this.payload = e), (this.meta = n);
    }
    return t;
  })(),
  Qk = function (t) {
    if (typeof t == 'object' && t !== null) {
      for (var e = {}, n = 0, r = Gk; n < r.length; n++) {
        var i = r[n];
        typeof t[i] == 'string' && (e[i] = t[i]);
      }
      return e;
    }
    return { message: String(t) };
  },
  Ru = (function () {
    function t(e, n, r) {
      var i = hr(e + '/fulfilled', function (u, c, h, d) {
          return {
            payload: u,
            meta: uh(cr({}, d || {}), { arg: h, requestId: c, requestStatus: 'fulfilled' })
          };
        }),
        s = hr(e + '/pending', function (u, c, h) {
          return {
            payload: void 0,
            meta: uh(cr({}, h || {}), { arg: c, requestId: u, requestStatus: 'pending' })
          };
        }),
        o = hr(e + '/rejected', function (u, c, h, d, m) {
          return {
            payload: d,
            error: ((r && r.serializeError) || Qk)(u || 'Rejected'),
            meta: uh(cr({}, m || {}), {
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
          var m = r != null && r.idGenerator ? r.idGenerator(u) : qk(),
            y = new a(),
            v;
          function S(f) {
            (v = f), y.abort();
          }
          var p = (function () {
            return Lk(this, null, function () {
              var f, g, E, _, R, x, O;
              return Nk(this, function (B) {
                switch (B.label) {
                  case 0:
                    return (
                      B.trys.push([0, 4, , 5]),
                      (_ =
                        (f = r == null ? void 0 : r.condition) == null
                          ? void 0
                          : f.call(r, u, { getState: h, extra: d })),
                      Xk(_) ? [4, _] : [3, 2]
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
                                return new ch(b, te);
                              },
                              fulfillWithValue: function (b, te) {
                                return new cy(b, te);
                              }
                            })
                          ).then(function (b) {
                            if (b instanceof ch) throw b;
                            return b instanceof cy ? i(b.payload, m, u, b.meta) : i(b, m, u);
                          })
                        ])
                      ]
                    );
                  case 3:
                    return (E = B.sent()), [3, 5];
                  case 4:
                    return (
                      (x = B.sent()),
                      (E = x instanceof ch ? o(null, m, u, x.payload, x.meta) : o(x, m, u)),
                      [3, 5]
                    );
                  case 5:
                    return (
                      (O = r && !r.dispatchConditionRejection && o.match(E) && E.meta.condition),
                      O || c(E),
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
              return p.then(Yk);
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
function Yk(t) {
  if (t.meta && t.meta.rejectedWithValue) throw t.payload;
  if (t.error) throw t.error;
  return t.payload;
}
function Xk(t) {
  return t !== null && typeof t == 'object' && typeof t.then == 'function';
}
var kp = 'listenerMiddleware';
hr(kp + '/add');
hr(kp + '/removeAll');
hr(kp + '/remove');
var hy;
typeof queueMicrotask == 'function' &&
  queueMicrotask.bind(typeof window < 'u' ? window : typeof global < 'u' ? global : globalThis);
gk();
var Ud = {},
  Jk = {
    get exports() {
      return Ud;
    },
    set exports(t) {
      Ud = t;
    }
  },
  y1 = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zi = N;
function Zk(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var eC = typeof Object.is == 'function' ? Object.is : Zk,
  tC = Zi.useState,
  nC = Zi.useEffect,
  rC = Zi.useLayoutEffect,
  iC = Zi.useDebugValue;
function sC(t, e) {
  var n = e(),
    r = tC({ inst: { value: n, getSnapshot: e } }),
    i = r[0].inst,
    s = r[1];
  return (
    rC(
      function () {
        (i.value = n), (i.getSnapshot = e), hh(i) && s({ inst: i });
      },
      [t, n, e]
    ),
    nC(
      function () {
        return (
          hh(i) && s({ inst: i }),
          t(function () {
            hh(i) && s({ inst: i });
          })
        );
      },
      [t]
    ),
    iC(n),
    n
  );
}
function hh(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !eC(t, n);
  } catch {
    return !0;
  }
}
function oC(t, e) {
  return e();
}
var aC =
  typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'
    ? oC
    : sC;
y1.useSyncExternalStore = Zi.useSyncExternalStore !== void 0 ? Zi.useSyncExternalStore : aC;
(function (t) {
  t.exports = y1;
})(Jk);
var Vd = {},
  lC = {
    get exports() {
      return Vd;
    },
    set exports(t) {
      Vd = t;
    }
  },
  v1 = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xu = N,
  uC = Ud;
function cC(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var hC = typeof Object.is == 'function' ? Object.is : cC,
  dC = uC.useSyncExternalStore,
  fC = xu.useRef,
  pC = xu.useEffect,
  mC = xu.useMemo,
  gC = xu.useDebugValue;
v1.useSyncExternalStoreWithSelector = function (t, e, n, r, i) {
  var s = fC(null);
  if (s.current === null) {
    var o = { hasValue: !1, value: null };
    s.current = o;
  } else o = s.current;
  s = mC(
    function () {
      function l(m) {
        if (!u) {
          if (((u = !0), (c = m), (m = r(m)), i !== void 0 && o.hasValue)) {
            var y = o.value;
            if (i(y, m)) return (h = y);
          }
          return (h = m);
        }
        if (((y = h), hC(c, m))) return y;
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
  var a = dC(t, s[0], s[1]);
  return (
    pC(
      function () {
        (o.hasValue = !0), (o.value = a);
      },
      [a]
    ),
    gC(a),
    a
  );
};
(function (t) {
  t.exports = v1;
})(lC);
function yC(t) {
  t();
}
let w1 = yC;
const vC = (t) => (w1 = t),
  wC = () => w1,
  vr = N.createContext(null);
function E1() {
  return N.useContext(vr);
}
const EC = () => {
  throw new Error('uSES not initialized!');
};
let S1 = EC;
const SC = (t) => {
    S1 = t;
  },
  _C = (t, e) => t === e;
function TC(t = vr) {
  const e = t === vr ? E1 : () => N.useContext(t);
  return function (r, i = _C) {
    const { store: s, subscription: o, getServerState: a } = e(),
      l = S1(o.addNestedSub, s.getState, a || s.getState, r, i);
    return N.useDebugValue(l), l;
  };
}
const IC = TC();
var jd = {},
  kC = {
    get exports() {
      return jd;
    },
    set exports(t) {
      jd = t;
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
  Cp = Ge ? Symbol.for('react.element') : 60103,
  Ap = Ge ? Symbol.for('react.portal') : 60106,
  Du = Ge ? Symbol.for('react.fragment') : 60107,
  Ou = Ge ? Symbol.for('react.strict_mode') : 60108,
  Pu = Ge ? Symbol.for('react.profiler') : 60114,
  Lu = Ge ? Symbol.for('react.provider') : 60109,
  $u = Ge ? Symbol.for('react.context') : 60110,
  Np = Ge ? Symbol.for('react.async_mode') : 60111,
  bu = Ge ? Symbol.for('react.concurrent_mode') : 60111,
  Mu = Ge ? Symbol.for('react.forward_ref') : 60112,
  Fu = Ge ? Symbol.for('react.suspense') : 60113,
  CC = Ge ? Symbol.for('react.suspense_list') : 60120,
  Uu = Ge ? Symbol.for('react.memo') : 60115,
  Vu = Ge ? Symbol.for('react.lazy') : 60116,
  AC = Ge ? Symbol.for('react.block') : 60121,
  NC = Ge ? Symbol.for('react.fundamental') : 60117,
  RC = Ge ? Symbol.for('react.responder') : 60118,
  xC = Ge ? Symbol.for('react.scope') : 60119;
function Mt(t) {
  if (typeof t == 'object' && t !== null) {
    var e = t.$$typeof;
    switch (e) {
      case Cp:
        switch (((t = t.type), t)) {
          case Np:
          case bu:
          case Du:
          case Pu:
          case Ou:
          case Fu:
            return t;
          default:
            switch (((t = t && t.$$typeof), t)) {
              case $u:
              case Mu:
              case Vu:
              case Uu:
              case Lu:
                return t;
              default:
                return e;
            }
        }
      case Ap:
        return e;
    }
  }
}
function _1(t) {
  return Mt(t) === bu;
}
he.AsyncMode = Np;
he.ConcurrentMode = bu;
he.ContextConsumer = $u;
he.ContextProvider = Lu;
he.Element = Cp;
he.ForwardRef = Mu;
he.Fragment = Du;
he.Lazy = Vu;
he.Memo = Uu;
he.Portal = Ap;
he.Profiler = Pu;
he.StrictMode = Ou;
he.Suspense = Fu;
he.isAsyncMode = function (t) {
  return _1(t) || Mt(t) === Np;
};
he.isConcurrentMode = _1;
he.isContextConsumer = function (t) {
  return Mt(t) === $u;
};
he.isContextProvider = function (t) {
  return Mt(t) === Lu;
};
he.isElement = function (t) {
  return typeof t == 'object' && t !== null && t.$$typeof === Cp;
};
he.isForwardRef = function (t) {
  return Mt(t) === Mu;
};
he.isFragment = function (t) {
  return Mt(t) === Du;
};
he.isLazy = function (t) {
  return Mt(t) === Vu;
};
he.isMemo = function (t) {
  return Mt(t) === Uu;
};
he.isPortal = function (t) {
  return Mt(t) === Ap;
};
he.isProfiler = function (t) {
  return Mt(t) === Pu;
};
he.isStrictMode = function (t) {
  return Mt(t) === Ou;
};
he.isSuspense = function (t) {
  return Mt(t) === Fu;
};
he.isValidElementType = function (t) {
  return (
    typeof t == 'string' ||
    typeof t == 'function' ||
    t === Du ||
    t === bu ||
    t === Pu ||
    t === Ou ||
    t === Fu ||
    t === CC ||
    (typeof t == 'object' &&
      t !== null &&
      (t.$$typeof === Vu ||
        t.$$typeof === Uu ||
        t.$$typeof === Lu ||
        t.$$typeof === $u ||
        t.$$typeof === Mu ||
        t.$$typeof === NC ||
        t.$$typeof === RC ||
        t.$$typeof === xC ||
        t.$$typeof === AC))
  );
};
he.typeOf = Mt;
(function (t) {
  t.exports = he;
})(kC);
var T1 = jd,
  DC = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
  OC = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
  I1 = {};
I1[T1.ForwardRef] = DC;
I1[T1.Memo] = OC;
var dy = {},
  PC = {
    get exports() {
      return dy;
    },
    set exports(t) {
      dy = t;
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
 */ var Rp = Symbol.for('react.element'),
  xp = Symbol.for('react.portal'),
  ju = Symbol.for('react.fragment'),
  zu = Symbol.for('react.strict_mode'),
  Bu = Symbol.for('react.profiler'),
  Hu = Symbol.for('react.provider'),
  Ku = Symbol.for('react.context'),
  LC = Symbol.for('react.server_context'),
  Wu = Symbol.for('react.forward_ref'),
  qu = Symbol.for('react.suspense'),
  Gu = Symbol.for('react.suspense_list'),
  Qu = Symbol.for('react.memo'),
  Yu = Symbol.for('react.lazy'),
  $C = Symbol.for('react.offscreen'),
  k1;
k1 = Symbol.for('react.module.reference');
function Kt(t) {
  if (typeof t == 'object' && t !== null) {
    var e = t.$$typeof;
    switch (e) {
      case Rp:
        switch (((t = t.type), t)) {
          case ju:
          case Bu:
          case zu:
          case qu:
          case Gu:
            return t;
          default:
            switch (((t = t && t.$$typeof), t)) {
              case LC:
              case Ku:
              case Wu:
              case Yu:
              case Qu:
              case Hu:
                return t;
              default:
                return e;
            }
        }
      case xp:
        return e;
    }
  }
}
de.ContextConsumer = Ku;
de.ContextProvider = Hu;
de.Element = Rp;
de.ForwardRef = Wu;
de.Fragment = ju;
de.Lazy = Yu;
de.Memo = Qu;
de.Portal = xp;
de.Profiler = Bu;
de.StrictMode = zu;
de.Suspense = qu;
de.SuspenseList = Gu;
de.isAsyncMode = function () {
  return !1;
};
de.isConcurrentMode = function () {
  return !1;
};
de.isContextConsumer = function (t) {
  return Kt(t) === Ku;
};
de.isContextProvider = function (t) {
  return Kt(t) === Hu;
};
de.isElement = function (t) {
  return typeof t == 'object' && t !== null && t.$$typeof === Rp;
};
de.isForwardRef = function (t) {
  return Kt(t) === Wu;
};
de.isFragment = function (t) {
  return Kt(t) === ju;
};
de.isLazy = function (t) {
  return Kt(t) === Yu;
};
de.isMemo = function (t) {
  return Kt(t) === Qu;
};
de.isPortal = function (t) {
  return Kt(t) === xp;
};
de.isProfiler = function (t) {
  return Kt(t) === Bu;
};
de.isStrictMode = function (t) {
  return Kt(t) === zu;
};
de.isSuspense = function (t) {
  return Kt(t) === qu;
};
de.isSuspenseList = function (t) {
  return Kt(t) === Gu;
};
de.isValidElementType = function (t) {
  return (
    typeof t == 'string' ||
    typeof t == 'function' ||
    t === ju ||
    t === Bu ||
    t === zu ||
    t === qu ||
    t === Gu ||
    t === $C ||
    (typeof t == 'object' &&
      t !== null &&
      (t.$$typeof === Yu ||
        t.$$typeof === Qu ||
        t.$$typeof === Hu ||
        t.$$typeof === Ku ||
        t.$$typeof === Wu ||
        t.$$typeof === k1 ||
        t.getModuleId !== void 0))
  );
};
de.typeOf = Kt;
(function (t) {
  t.exports = de;
})(PC);
function bC() {
  const t = wC();
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
const fy = { notify() {}, get: () => [] };
function MC(t, e) {
  let n,
    r = fy;
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
    n || ((n = e ? e.addNestedSub(o) : t.subscribe(o)), (r = bC()));
  }
  function u() {
    n && (n(), (n = void 0), r.clear(), (r = fy));
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
const FC =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  UC = FC ? N.useLayoutEffect : N.useEffect;
function VC({ store: t, context: e, children: n, serverState: r }) {
  const i = N.useMemo(() => {
      const a = MC(t);
      return { store: t, subscription: a, getServerState: r ? () => r : void 0 };
    }, [t, r]),
    s = N.useMemo(() => t.getState(), [t]);
  UC(() => {
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
  const o = e || vr;
  return ne.createElement(o.Provider, { value: i }, n);
}
function C1(t = vr) {
  const e = t === vr ? E1 : () => N.useContext(t);
  return function () {
    const { store: r } = e();
    return r;
  };
}
const jC = C1();
function zC(t = vr) {
  const e = t === vr ? jC : C1(t);
  return function () {
    return e().dispatch;
  };
}
const BC = zC();
SC(Vd.useSyncExternalStoreWithSelector);
vC(ul.unstable_batchedUpdates);
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
 */ const A1 = function (t) {
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
  HC = function (t) {
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
  N1 = {
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
      return this.HAS_NATIVE_SUPPORT && !e ? btoa(t) : this.encodeByteArray(A1(t), e);
    },
    decodeString(t, e) {
      return this.HAS_NATIVE_SUPPORT && !e ? atob(t) : HC(this.decodeStringToByteArray(t, e));
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
        if ((++i, s == null || a == null || u == null || h == null)) throw new KC();
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
class KC extends Error {
  constructor() {
    super(...arguments), (this.name = 'DecodeBase64StringError');
  }
}
const WC = function (t) {
    const e = A1(t);
    return N1.encodeByteArray(e, !0);
  },
  Vl = function (t) {
    return WC(t).replace(/\./g, '');
  },
  R1 = function (t) {
    try {
      return N1.decodeString(t, !0);
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
 */ function qC() {
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
 */ const GC = () => qC().__FIREBASE_DEFAULTS__,
  QC = () => {
    if (typeof process > 'u' || typeof process.env > 'u') return;
    const t = {}.__FIREBASE_DEFAULTS__;
    if (t) return JSON.parse(t);
  },
  YC = () => {
    if (typeof document > 'u') return;
    let t;
    try {
      t = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const e = t && R1(t[1]);
    return e && JSON.parse(e);
  },
  Dp = () => {
    try {
      return GC() || QC() || YC();
    } catch (t) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);
      return;
    }
  },
  x1 = (t) => {
    var e, n;
    return (n = (e = Dp()) === null || e === void 0 ? void 0 : e.emulatorHosts) === null ||
      n === void 0
      ? void 0
      : n[t];
  },
  XC = (t) => {
    const e = x1(t);
    if (!e) return;
    const n = e.lastIndexOf(':');
    if (n <= 0 || n + 1 === e.length)
      throw new Error(`Invalid host ${e} with no separate hostname and port!`);
    const r = parseInt(e.substring(n + 1), 10);
    return e[0] === '[' ? [e.substring(1, n - 1), r] : [e.substring(0, n), r];
  },
  JC = () => {
    var t;
    return (t = Dp()) === null || t === void 0 ? void 0 : t.config;
  },
  D1 = (t) => {
    var e;
    return (e = Dp()) === null || e === void 0 ? void 0 : e[`_${t}`];
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
 */ class ZC {
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
 */ function eA(t, e) {
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
  return [Vl(JSON.stringify(n)), Vl(JSON.stringify(o)), a].join('.');
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
function tA() {
  return (
    typeof window < 'u' &&
    !!(window.cordova || window.phonegap || window.PhoneGap) &&
    /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())
  );
}
function nA() {
  const t =
    typeof chrome == 'object'
      ? chrome.runtime
      : typeof browser == 'object'
      ? browser.runtime
      : void 0;
  return typeof t == 'object' && t.id !== void 0;
}
function rA() {
  return typeof navigator == 'object' && navigator.product === 'ReactNative';
}
function iA() {
  const t = dt();
  return t.indexOf('MSIE ') >= 0 || t.indexOf('Trident/') >= 0;
}
function sA() {
  try {
    return typeof indexedDB == 'object';
  } catch {
    return !1;
  }
}
function oA() {
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
 */ const aA = 'FirebaseError';
class Mn extends Error {
  constructor(e, n, r) {
    super(n),
      (this.code = e),
      (this.customData = r),
      (this.name = aA),
      Object.setPrototypeOf(this, Mn.prototype),
      Error.captureStackTrace && Error.captureStackTrace(this, jo.prototype.create);
  }
}
class jo {
  constructor(e, n, r) {
    (this.service = e), (this.serviceName = n), (this.errors = r);
  }
  create(e, ...n) {
    const r = n[0] || {},
      i = `${this.service}/${e}`,
      s = this.errors[e],
      o = s ? lA(s, r) : 'Error',
      a = `${this.serviceName}: ${o} (${i}).`;
    return new Mn(i, a, r);
  }
}
function lA(t, e) {
  return t.replace(uA, (n, r) => {
    const i = e[r];
    return i != null ? String(i) : `<${r}?>`;
  });
}
const uA = /\{\$([^}]+)}/g;
function cA(t) {
  for (const e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
  return !0;
}
function jl(t, e) {
  if (t === e) return !0;
  const n = Object.keys(t),
    r = Object.keys(e);
  for (const i of n) {
    if (!r.includes(i)) return !1;
    const s = t[i],
      o = e[i];
    if (py(s) && py(o)) {
      if (!jl(s, o)) return !1;
    } else if (s !== o) return !1;
  }
  for (const i of r) if (!n.includes(i)) return !1;
  return !0;
}
function py(t) {
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
 */ function zo(t) {
  const e = [];
  for (const [n, r] of Object.entries(t))
    Array.isArray(r)
      ? r.forEach((i) => {
          e.push(encodeURIComponent(n) + '=' + encodeURIComponent(i));
        })
      : e.push(encodeURIComponent(n) + '=' + encodeURIComponent(r));
  return e.length ? '&' + e.join('&') : '';
}
function $s(t) {
  const e = {};
  return (
    t
      .replace(/^\?/, '')
      .split('&')
      .forEach((r) => {
        if (r) {
          const [i, s] = r.split('=');
          e[decodeURIComponent(i)] = decodeURIComponent(s);
        }
      }),
    e
  );
}
function bs(t) {
  const e = t.indexOf('?');
  if (!e) return '';
  const n = t.indexOf('#', e);
  return t.substring(e, n > 0 ? n : void 0);
}
function hA(t, e) {
  const n = new dA(t, e);
  return n.subscribe.bind(n);
}
class dA {
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
    fA(e, ['next', 'error', 'complete']) ? (i = e) : (i = { next: e, error: n, complete: r }),
      i.next === void 0 && (i.next = dh),
      i.error === void 0 && (i.error = dh),
      i.complete === void 0 && (i.complete = dh);
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
function fA(t, e) {
  if (typeof t != 'object' || t === null) return !1;
  for (const n of e) if (n in t && typeof t[n] == 'function') return !0;
  return !1;
}
function dh() {}
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
 */ function Fn(t) {
  return t && t._delegate ? t._delegate : t;
}
class Zr {
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
 */ const xr = '[DEFAULT]';
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
 */ class pA {
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
      const r = new ZC();
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
      if (gA(e))
        try {
          this.getOrInitializeService({ instanceIdentifier: xr });
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
  clearInstance(e = xr) {
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
  isInitialized(e = xr) {
    return this.instances.has(e);
  }
  getOptions(e = xr) {
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
        instanceIdentifier: mA(e),
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
  normalizeInstanceIdentifier(e = xr) {
    return this.component ? (this.component.multipleInstances ? e : xr) : e;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== 'EXPLICIT';
  }
}
function mA(t) {
  return t === xr ? void 0 : t;
}
function gA(t) {
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
 */ class yA {
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
    const n = new pA(e, this);
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
const vA = {
    debug: ae.DEBUG,
    verbose: ae.VERBOSE,
    info: ae.INFO,
    warn: ae.WARN,
    error: ae.ERROR,
    silent: ae.SILENT
  },
  wA = ae.INFO,
  EA = {
    [ae.DEBUG]: 'log',
    [ae.VERBOSE]: 'log',
    [ae.INFO]: 'info',
    [ae.WARN]: 'warn',
    [ae.ERROR]: 'error'
  },
  SA = (t, e, ...n) => {
    if (e < t.logLevel) return;
    const r = new Date().toISOString(),
      i = EA[e];
    if (i) console[i](`[${r}]  ${t.name}:`, ...n);
    else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);
  };
class Op {
  constructor(e) {
    (this.name = e), (this._logLevel = wA), (this._logHandler = SA), (this._userLogHandler = null);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(e) {
    if (!(e in ae)) throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
    this._logLevel = e;
  }
  setLogLevel(e) {
    this._logLevel = typeof e == 'string' ? vA[e] : e;
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
const _A = (t, e) => e.some((n) => t instanceof n);
let my, gy;
function TA() {
  return my || (my = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction]);
}
function IA() {
  return (
    gy ||
    (gy = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey
    ])
  );
}
const O1 = new WeakMap(),
  zd = new WeakMap(),
  P1 = new WeakMap(),
  fh = new WeakMap(),
  Pp = new WeakMap();
function kA(t) {
  const e = new Promise((n, r) => {
    const i = () => {
        t.removeEventListener('success', s), t.removeEventListener('error', o);
      },
      s = () => {
        n(dr(t.result)), i();
      },
      o = () => {
        r(t.error), i();
      };
    t.addEventListener('success', s), t.addEventListener('error', o);
  });
  return (
    e
      .then((n) => {
        n instanceof IDBCursor && O1.set(n, t);
      })
      .catch(() => {}),
    Pp.set(e, t),
    e
  );
}
function CA(t) {
  if (zd.has(t)) return;
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
  zd.set(t, e);
}
let Bd = {
  get(t, e, n) {
    if (t instanceof IDBTransaction) {
      if (e === 'done') return zd.get(t);
      if (e === 'objectStoreNames') return t.objectStoreNames || P1.get(t);
      if (e === 'store')
        return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0]);
    }
    return dr(t[e]);
  },
  set(t, e, n) {
    return (t[e] = n), !0;
  },
  has(t, e) {
    return t instanceof IDBTransaction && (e === 'done' || e === 'store') ? !0 : e in t;
  }
};
function AA(t) {
  Bd = t(Bd);
}
function NA(t) {
  return t === IDBDatabase.prototype.transaction &&
    !('objectStoreNames' in IDBTransaction.prototype)
    ? function (e, ...n) {
        const r = t.call(ph(this), e, ...n);
        return P1.set(r, e.sort ? e.sort() : [e]), dr(r);
      }
    : IA().includes(t)
    ? function (...e) {
        return t.apply(ph(this), e), dr(O1.get(this));
      }
    : function (...e) {
        return dr(t.apply(ph(this), e));
      };
}
function RA(t) {
  return typeof t == 'function'
    ? NA(t)
    : (t instanceof IDBTransaction && CA(t), _A(t, TA()) ? new Proxy(t, Bd) : t);
}
function dr(t) {
  if (t instanceof IDBRequest) return kA(t);
  if (fh.has(t)) return fh.get(t);
  const e = RA(t);
  return e !== t && (fh.set(t, e), Pp.set(e, t)), e;
}
const ph = (t) => Pp.get(t);
function xA(t, e, { blocked: n, upgrade: r, blocking: i, terminated: s } = {}) {
  const o = indexedDB.open(t, e),
    a = dr(o);
  return (
    r &&
      o.addEventListener('upgradeneeded', (l) => {
        r(dr(o.result), l.oldVersion, l.newVersion, dr(o.transaction));
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
const DA = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'],
  OA = ['put', 'add', 'delete', 'clear'],
  mh = new Map();
function yy(t, e) {
  if (!(t instanceof IDBDatabase && !(e in t) && typeof e == 'string')) return;
  if (mh.get(e)) return mh.get(e);
  const n = e.replace(/FromIndex$/, ''),
    r = e !== n,
    i = OA.includes(n);
  if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !(i || DA.includes(n))) return;
  const s = async function (o, ...a) {
    const l = this.transaction(o, i ? 'readwrite' : 'readonly');
    let u = l.store;
    return r && (u = u.index(a.shift())), (await Promise.all([u[n](...a), i && l.done]))[0];
  };
  return mh.set(e, s), s;
}
AA((t) => ({
  ...t,
  get: (e, n, r) => yy(e, n) || t.get(e, n, r),
  has: (e, n) => !!yy(e, n) || t.has(e, n)
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
 */ class PA {
  constructor(e) {
    this.container = e;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((n) => {
        if (LA(n)) {
          const r = n.getImmediate();
          return `${r.library}/${r.version}`;
        } else return null;
      })
      .filter((n) => n)
      .join(' ');
  }
}
function LA(t) {
  const e = t.getComponent();
  return (e == null ? void 0 : e.type) === 'VERSION';
}
const Hd = '@firebase/app',
  vy = '0.9.4';
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
 */ const ei = new Op('@firebase/app'),
  $A = '@firebase/app-compat',
  bA = '@firebase/analytics-compat',
  MA = '@firebase/analytics',
  FA = '@firebase/app-check-compat',
  UA = '@firebase/app-check',
  VA = '@firebase/auth',
  jA = '@firebase/auth-compat',
  zA = '@firebase/database',
  BA = '@firebase/database-compat',
  HA = '@firebase/functions',
  KA = '@firebase/functions-compat',
  WA = '@firebase/installations',
  qA = '@firebase/installations-compat',
  GA = '@firebase/messaging',
  QA = '@firebase/messaging-compat',
  YA = '@firebase/performance',
  XA = '@firebase/performance-compat',
  JA = '@firebase/remote-config',
  ZA = '@firebase/remote-config-compat',
  eN = '@firebase/storage',
  tN = '@firebase/storage-compat',
  nN = '@firebase/firestore',
  rN = '@firebase/firestore-compat',
  iN = 'firebase',
  sN = '9.17.2';
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
 */ const Kd = '[DEFAULT]',
  oN = {
    [Hd]: 'fire-core',
    [$A]: 'fire-core-compat',
    [MA]: 'fire-analytics',
    [bA]: 'fire-analytics-compat',
    [UA]: 'fire-app-check',
    [FA]: 'fire-app-check-compat',
    [VA]: 'fire-auth',
    [jA]: 'fire-auth-compat',
    [zA]: 'fire-rtdb',
    [BA]: 'fire-rtdb-compat',
    [HA]: 'fire-fn',
    [KA]: 'fire-fn-compat',
    [WA]: 'fire-iid',
    [qA]: 'fire-iid-compat',
    [GA]: 'fire-fcm',
    [QA]: 'fire-fcm-compat',
    [YA]: 'fire-perf',
    [XA]: 'fire-perf-compat',
    [JA]: 'fire-rc',
    [ZA]: 'fire-rc-compat',
    [eN]: 'fire-gcs',
    [tN]: 'fire-gcs-compat',
    [nN]: 'fire-fst',
    [rN]: 'fire-fst-compat',
    'fire-js': 'fire-js',
    [iN]: 'fire-js-all'
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
 */ const zl = new Map(),
  Wd = new Map();
function aN(t, e) {
  try {
    t.container.addComponent(e);
  } catch (n) {
    ei.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`, n);
  }
}
function es(t) {
  const e = t.name;
  if (Wd.has(e)) return ei.debug(`There were multiple attempts to register component ${e}.`), !1;
  Wd.set(e, t);
  for (const n of zl.values()) aN(n, t);
  return !0;
}
function Lp(t, e) {
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
 */ const lN = {
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
  fr = new jo('app', 'Firebase', lN);
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
 */ class uN {
  constructor(e, n, r) {
    (this._isDeleted = !1),
      (this._options = Object.assign({}, e)),
      (this._config = Object.assign({}, n)),
      (this._name = n.name),
      (this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled),
      (this._container = r),
      this.container.addComponent(new Zr('app', () => this, 'PUBLIC'));
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
    if (this.isDeleted) throw fr.create('app-deleted', { appName: this._name });
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
 */ const Bo = sN;
function L1(t, e = {}) {
  let n = t;
  typeof e != 'object' && (e = { name: e });
  const r = Object.assign({ name: Kd, automaticDataCollectionEnabled: !1 }, e),
    i = r.name;
  if (typeof i != 'string' || !i) throw fr.create('bad-app-name', { appName: String(i) });
  if ((n || (n = JC()), !n)) throw fr.create('no-options');
  const s = zl.get(i);
  if (s) {
    if (jl(n, s.options) && jl(r, s.config)) return s;
    throw fr.create('duplicate-app', { appName: i });
  }
  const o = new yA(i);
  for (const l of Wd.values()) o.addComponent(l);
  const a = new uN(n, r, o);
  return zl.set(i, a), a;
}
function $1(t = Kd) {
  const e = zl.get(t);
  if (!e && t === Kd) return L1();
  if (!e) throw fr.create('no-app', { appName: t });
  return e;
}
function pr(t, e, n) {
  var r;
  let i = (r = oN[t]) !== null && r !== void 0 ? r : t;
  n && (i += `-${n}`);
  const s = i.match(/\s|\//),
    o = e.match(/\s|\//);
  if (s || o) {
    const a = [`Unable to register library "${i}" with version "${e}":`];
    s && a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),
      s && o && a.push('and'),
      o && a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),
      ei.warn(a.join(' '));
    return;
  }
  es(new Zr(`${i}-version`, () => ({ library: i, version: e }), 'VERSION'));
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
 */ const cN = 'firebase-heartbeat-database',
  hN = 1,
  To = 'firebase-heartbeat-store';
let gh = null;
function b1() {
  return (
    gh ||
      (gh = xA(cN, hN, {
        upgrade: (t, e) => {
          switch (e) {
            case 0:
              t.createObjectStore(To);
          }
        }
      }).catch((t) => {
        throw fr.create('idb-open', { originalErrorMessage: t.message });
      })),
    gh
  );
}
async function dN(t) {
  try {
    return (await b1()).transaction(To).objectStore(To).get(M1(t));
  } catch (e) {
    if (e instanceof Mn) ei.warn(e.message);
    else {
      const n = fr.create('idb-get', { originalErrorMessage: e == null ? void 0 : e.message });
      ei.warn(n.message);
    }
  }
}
async function wy(t, e) {
  try {
    const r = (await b1()).transaction(To, 'readwrite');
    return await r.objectStore(To).put(e, M1(t)), r.done;
  } catch (n) {
    if (n instanceof Mn) ei.warn(n.message);
    else {
      const r = fr.create('idb-set', { originalErrorMessage: n == null ? void 0 : n.message });
      ei.warn(r.message);
    }
  }
}
function M1(t) {
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
 */ const fN = 1024,
  pN = 30 * 24 * 60 * 60 * 1e3;
class mN {
  constructor(e) {
    (this.container = e), (this._heartbeatsCache = null);
    const n = this.container.getProvider('app').getImmediate();
    (this._storage = new yN(n)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((r) => ((this._heartbeatsCache = r), r)));
  }
  async triggerHeartbeat() {
    const n = this.container.getProvider('platform-logger').getImmediate().getPlatformInfoString(),
      r = Ey();
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
          return Date.now() - s <= pN;
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
    const e = Ey(),
      { heartbeatsToSend: n, unsentEntries: r } = gN(this._heartbeatsCache.heartbeats),
      i = Vl(JSON.stringify({ version: 2, heartbeats: n }));
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
function Ey() {
  return new Date().toISOString().substring(0, 10);
}
function gN(t, e = fN) {
  const n = [];
  let r = t.slice();
  for (const i of t) {
    const s = n.find((o) => o.agent === i.agent);
    if (s) {
      if ((s.dates.push(i.date), Sy(n) > e)) {
        s.dates.pop();
        break;
      }
    } else if ((n.push({ agent: i.agent, dates: [i.date] }), Sy(n) > e)) {
      n.pop();
      break;
    }
    r = r.slice(1);
  }
  return { heartbeatsToSend: n, unsentEntries: r };
}
class yN {
  constructor(e) {
    (this.app = e), (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return sA()
      ? oA()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    return (await this._canUseIndexedDBPromise)
      ? (await dN(this.app)) || { heartbeats: [] }
      : { heartbeats: [] };
  }
  async overwrite(e) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return wy(this.app, {
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
      return wy(this.app, {
        lastSentHeartbeatDate:
          (n = e.lastSentHeartbeatDate) !== null && n !== void 0 ? n : i.lastSentHeartbeatDate,
        heartbeats: [...i.heartbeats, ...e.heartbeats]
      });
    } else return;
  }
}
function Sy(t) {
  return Vl(JSON.stringify({ version: 2, heartbeats: t })).length;
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
 */ function vN(t) {
  es(new Zr('platform-logger', (e) => new PA(e), 'PRIVATE')),
    es(new Zr('heartbeat', (e) => new mN(e), 'PRIVATE')),
    pr(Hd, vy, t),
    pr(Hd, vy, 'esm2017'),
    pr('fire-js', '');
}
vN('');
var wN = 'firebase',
  EN = '9.17.2';
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
 */ pr(wN, EN, 'app');
var SN =
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
  $p = $p || {},
  Q = SN || self;
function Bl() {}
function Xu(t) {
  var e = typeof t;
  return (
    (e = e != 'object' ? e : t ? (Array.isArray(t) ? 'array' : e) : 'null'),
    e == 'array' || (e == 'object' && typeof t.length == 'number')
  );
}
function Ho(t) {
  var e = typeof t;
  return (e == 'object' && t != null) || e == 'function';
}
function _N(t) {
  return (Object.prototype.hasOwnProperty.call(t, yh) && t[yh]) || (t[yh] = ++TN);
}
var yh = 'closure_uid_' + ((1e9 * Math.random()) >>> 0),
  TN = 0;
function IN(t, e, n) {
  return t.call.apply(t.bind, arguments);
}
function kN(t, e, n) {
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
      ? (ut = IN)
      : (ut = kN),
    ut.apply(null, arguments)
  );
}
function Ra(t, e) {
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
function kr() {
  (this.s = this.s), (this.o = this.o);
}
var CN = 0;
kr.prototype.s = !1;
kr.prototype.na = function () {
  !this.s && ((this.s = !0), this.M(), CN != 0) && _N(this);
};
kr.prototype.M = function () {
  if (this.o) for (; this.o.length; ) this.o.shift()();
};
const F1 = Array.prototype.indexOf
  ? function (t, e) {
      return Array.prototype.indexOf.call(t, e, void 0);
    }
  : function (t, e) {
      if (typeof t == 'string') return typeof e != 'string' || e.length != 1 ? -1 : t.indexOf(e, 0);
      for (let n = 0; n < t.length; n++) if (n in t && t[n] === e) return n;
      return -1;
    };
function bp(t) {
  const e = t.length;
  if (0 < e) {
    const n = Array(e);
    for (let r = 0; r < e; r++) n[r] = t[r];
    return n;
  }
  return [];
}
function _y(t, e) {
  for (let n = 1; n < arguments.length; n++) {
    const r = arguments[n];
    if (Xu(r)) {
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
var AN = (function () {
  if (!Q.addEventListener || !Object.defineProperty) return !1;
  var t = !1,
    e = Object.defineProperty({}, 'passive', {
      get: function () {
        t = !0;
      }
    });
  try {
    Q.addEventListener('test', Bl, e), Q.removeEventListener('test', Bl, e);
  } catch {}
  return t;
})();
function Hl(t) {
  return /^[\s\xa0]*$/.test(t);
}
var Ty = String.prototype.trim
  ? function (t) {
      return t.trim();
    }
  : function (t) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1];
    };
function vh(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
function Ju() {
  var t = Q.navigator;
  return t && (t = t.userAgent) ? t : '';
}
function an(t) {
  return Ju().indexOf(t) != -1;
}
function Mp(t) {
  return Mp[' '](t), t;
}
Mp[' '] = Bl;
function NN(t) {
  var e = DN;
  return Object.prototype.hasOwnProperty.call(e, 9) ? e[9] : (e[9] = t(9));
}
var RN = an('Opera'),
  ts = an('Trident') || an('MSIE'),
  U1 = an('Edge'),
  qd = U1 || ts,
  V1 =
    an('Gecko') &&
    !(Ju().toLowerCase().indexOf('webkit') != -1 && !an('Edge')) &&
    !(an('Trident') || an('MSIE')) &&
    !an('Edge'),
  xN = Ju().toLowerCase().indexOf('webkit') != -1 && !an('Edge');
function j1() {
  var t = Q.document;
  return t ? t.documentMode : void 0;
}
var Kl;
e: {
  var wh = '',
    Eh = (function () {
      var t = Ju();
      if (V1) return /rv:([^\);]+)(\)|;)/.exec(t);
      if (U1) return /Edge\/([\d\.]+)/.exec(t);
      if (ts) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);
      if (xN) return /WebKit\/(\S+)/.exec(t);
      if (RN) return /(?:Version)[ \/]?(\S+)/.exec(t);
    })();
  if ((Eh && (wh = Eh ? Eh[1] : ''), ts)) {
    var Sh = j1();
    if (Sh != null && Sh > parseFloat(wh)) {
      Kl = String(Sh);
      break e;
    }
  }
  Kl = wh;
}
var DN = {};
function ON() {
  return NN(function () {
    let t = 0;
    const e = Ty(String(Kl)).split('.'),
      n = Ty('9').split('.'),
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
          vh(
            i[1].length == 0 ? 0 : parseInt(i[1], 10),
            s[1].length == 0 ? 0 : parseInt(s[1], 10)
          ) ||
          vh(i[2].length == 0, s[2].length == 0) ||
          vh(i[2], s[2])),
          (i = i[3]),
          (s = s[3]);
      } while (t == 0);
    }
    return 0 <= t;
  });
}
var Gd;
if (Q.document && ts) {
  var Iy = j1();
  Gd = Iy || parseInt(Kl, 10) || void 0;
} else Gd = void 0;
var PN = Gd;
function Io(t, e) {
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
      if (V1) {
        e: {
          try {
            Mp(e.nodeName);
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
        typeof t.pointerType == 'string' ? t.pointerType : LN[t.pointerType] || ''),
      (this.state = t.state),
      (this.i = t),
      t.defaultPrevented && Io.X.h.call(this);
  }
}
nt(Io, ct);
var LN = { 2: 'touch', 3: 'pen', 4: 'mouse' };
Io.prototype.h = function () {
  Io.X.h.call(this);
  var t = this.i;
  t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
};
var Ko = 'closure_listenable_' + ((1e6 * Math.random()) | 0),
  $N = 0;
function bN(t, e, n, r, i) {
  (this.listener = t),
    (this.proxy = null),
    (this.src = e),
    (this.type = n),
    (this.capture = !!r),
    (this.ha = i),
    (this.key = ++$N),
    (this.ba = this.ea = !1);
}
function Zu(t) {
  (t.ba = !0), (t.listener = null), (t.proxy = null), (t.src = null), (t.ha = null);
}
function Fp(t, e, n) {
  for (const r in t) e.call(n, t[r], r, t);
}
function z1(t) {
  const e = {};
  for (const n in t) e[n] = t[n];
  return e;
}
const ky =
  'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
    ' '
  );
function B1(t, e) {
  let n, r;
  for (let i = 1; i < arguments.length; i++) {
    r = arguments[i];
    for (n in r) t[n] = r[n];
    for (let s = 0; s < ky.length; s++)
      (n = ky[s]), Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }
}
function ec(t) {
  (this.src = t), (this.g = {}), (this.h = 0);
}
ec.prototype.add = function (t, e, n, r, i) {
  var s = t.toString();
  (t = this.g[s]), t || ((t = this.g[s] = []), this.h++);
  var o = Yd(t, e, r, i);
  return (
    -1 < o
      ? ((e = t[o]), n || (e.ea = !1))
      : ((e = new bN(e, this.src, s, !!r, i)), (e.ea = n), t.push(e)),
    e
  );
};
function Qd(t, e) {
  var n = e.type;
  if (n in t.g) {
    var r = t.g[n],
      i = F1(r, e),
      s;
    (s = 0 <= i) && Array.prototype.splice.call(r, i, 1),
      s && (Zu(e), t.g[n].length == 0 && (delete t.g[n], t.h--));
  }
}
function Yd(t, e, n, r) {
  for (var i = 0; i < t.length; ++i) {
    var s = t[i];
    if (!s.ba && s.listener == e && s.capture == !!n && s.ha == r) return i;
  }
  return -1;
}
var Up = 'closure_lm_' + ((1e6 * Math.random()) | 0),
  _h = {};
function H1(t, e, n, r, i) {
  if (r && r.once) return W1(t, e, n, r, i);
  if (Array.isArray(e)) {
    for (var s = 0; s < e.length; s++) H1(t, e[s], n, r, i);
    return null;
  }
  return (n = zp(n)), t && t[Ko] ? t.N(e, n, Ho(r) ? !!r.capture : !!r, i) : K1(t, e, n, !1, r, i);
}
function K1(t, e, n, r, i, s) {
  if (!e) throw Error('Invalid event type');
  var o = Ho(i) ? !!i.capture : !!i,
    a = jp(t);
  if ((a || (t[Up] = a = new ec(t)), (n = a.add(e, n, r, o, s)), n.proxy)) return n;
  if (((r = MN()), (n.proxy = r), (r.src = t), (r.listener = n), t.addEventListener))
    AN || (i = o), i === void 0 && (i = !1), t.addEventListener(e.toString(), r, i);
  else if (t.attachEvent) t.attachEvent(G1(e.toString()), r);
  else if (t.addListener && t.removeListener) t.addListener(r);
  else throw Error('addEventListener and attachEvent are unavailable.');
  return n;
}
function MN() {
  function t(n) {
    return e.call(t.src, t.listener, n);
  }
  const e = FN;
  return t;
}
function W1(t, e, n, r, i) {
  if (Array.isArray(e)) {
    for (var s = 0; s < e.length; s++) W1(t, e[s], n, r, i);
    return null;
  }
  return (n = zp(n)), t && t[Ko] ? t.O(e, n, Ho(r) ? !!r.capture : !!r, i) : K1(t, e, n, !0, r, i);
}
function q1(t, e, n, r, i) {
  if (Array.isArray(e)) for (var s = 0; s < e.length; s++) q1(t, e[s], n, r, i);
  else
    (r = Ho(r) ? !!r.capture : !!r),
      (n = zp(n)),
      t && t[Ko]
        ? ((t = t.i),
          (e = String(e).toString()),
          e in t.g &&
            ((s = t.g[e]),
            (n = Yd(s, n, r, i)),
            -1 < n &&
              (Zu(s[n]),
              Array.prototype.splice.call(s, n, 1),
              s.length == 0 && (delete t.g[e], t.h--))))
        : t &&
          (t = jp(t)) &&
          ((e = t.g[e.toString()]),
          (t = -1),
          e && (t = Yd(e, n, r, i)),
          (n = -1 < t ? e[t] : null) && Vp(n));
}
function Vp(t) {
  if (typeof t != 'number' && t && !t.ba) {
    var e = t.src;
    if (e && e[Ko]) Qd(e.i, t);
    else {
      var n = t.type,
        r = t.proxy;
      e.removeEventListener
        ? e.removeEventListener(n, r, t.capture)
        : e.detachEvent
        ? e.detachEvent(G1(n), r)
        : e.addListener && e.removeListener && e.removeListener(r),
        (n = jp(e)) ? (Qd(n, t), n.h == 0 && ((n.src = null), (e[Up] = null))) : Zu(t);
    }
  }
}
function G1(t) {
  return t in _h ? _h[t] : (_h[t] = 'on' + t);
}
function FN(t, e) {
  if (t.ba) t = !0;
  else {
    e = new Io(e, this);
    var n = t.listener,
      r = t.ha || t.src;
    t.ea && Vp(t), (t = n.call(r, e));
  }
  return t;
}
function jp(t) {
  return (t = t[Up]), t instanceof ec ? t : null;
}
var Th = '__closure_events_fn_' + ((1e9 * Math.random()) >>> 0);
function zp(t) {
  return typeof t == 'function'
    ? t
    : (t[Th] ||
        (t[Th] = function (e) {
          return t.handleEvent(e);
        }),
      t[Th]);
}
function qe() {
  kr.call(this), (this.i = new ec(this)), (this.P = this), (this.I = null);
}
nt(qe, kr);
qe.prototype[Ko] = !0;
qe.prototype.removeEventListener = function (t, e, n, r) {
  q1(this, t, e, n, r);
};
function Ze(t, e) {
  var n,
    r = t.I;
  if (r) for (n = []; r; r = r.I) n.push(r);
  if (((t = t.P), (r = e.type || e), typeof e == 'string')) e = new ct(e, t);
  else if (e instanceof ct) e.target = e.target || t;
  else {
    var i = e;
    (e = new ct(r, t)), B1(e, i);
  }
  if (((i = !0), n))
    for (var s = n.length - 1; 0 <= s; s--) {
      var o = (e.g = n[s]);
      i = xa(o, r, !0, e) && i;
    }
  if (((o = e.g = t), (i = xa(o, r, !0, e) && i), (i = xa(o, r, !1, e) && i), n))
    for (s = 0; s < n.length; s++) (o = e.g = n[s]), (i = xa(o, r, !1, e) && i);
}
qe.prototype.M = function () {
  if ((qe.X.M.call(this), this.i)) {
    var t = this.i,
      e;
    for (e in t.g) {
      for (var n = t.g[e], r = 0; r < n.length; r++) Zu(n[r]);
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
function xa(t, e, n, r) {
  if (((e = t.i.g[String(e)]), !e)) return !0;
  e = e.concat();
  for (var i = !0, s = 0; s < e.length; ++s) {
    var o = e[s];
    if (o && !o.ba && o.capture == n) {
      var a = o.listener,
        l = o.ha || o.src;
      o.ea && Qd(t.i, o), (i = a.call(l, r) !== !1 && i);
    }
  }
  return i && !r.defaultPrevented;
}
var Bp = Q.JSON.stringify;
function UN() {
  var t = X1;
  let e = null;
  return t.g && ((e = t.g), (t.g = t.g.next), t.g || (t.h = null), (e.next = null)), e;
}
class VN {
  constructor() {
    this.h = this.g = null;
  }
  add(e, n) {
    const r = Q1.get();
    r.set(e, n), this.h ? (this.h.next = r) : (this.g = r), (this.h = r);
  }
}
var Q1 = new (class {
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
  () => new jN(),
  (t) => t.reset()
);
class jN {
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
function zN(t) {
  Q.setTimeout(() => {
    throw t;
  }, 0);
}
function Y1(t, e) {
  Xd || BN(), Jd || (Xd(), (Jd = !0)), X1.add(t, e);
}
var Xd;
function BN() {
  var t = Q.Promise.resolve(void 0);
  Xd = function () {
    t.then(HN);
  };
}
var Jd = !1,
  X1 = new VN();
function HN() {
  for (var t; (t = UN()); ) {
    try {
      t.h.call(t.g);
    } catch (n) {
      zN(n);
    }
    var e = Q1;
    e.j(t), 100 > e.h && (e.h++, (t.next = e.g), (e.g = t));
  }
  Jd = !1;
}
function tc(t, e) {
  qe.call(this),
    (this.h = t || 1),
    (this.g = e || Q),
    (this.j = ut(this.lb, this)),
    (this.l = Date.now());
}
nt(tc, qe);
M = tc.prototype;
M.ca = !1;
M.R = null;
M.lb = function () {
  if (this.ca) {
    var t = Date.now() - this.l;
    0 < t && t < 0.8 * this.h
      ? (this.R = this.g.setTimeout(this.j, this.h - t))
      : (this.R && (this.g.clearTimeout(this.R), (this.R = null)),
        Ze(this, 'tick'),
        this.ca && (Hp(this), this.start()));
  }
};
M.start = function () {
  (this.ca = !0), this.R || ((this.R = this.g.setTimeout(this.j, this.h)), (this.l = Date.now()));
};
function Hp(t) {
  (t.ca = !1), t.R && (t.g.clearTimeout(t.R), (t.R = null));
}
M.M = function () {
  tc.X.M.call(this), Hp(this), delete this.g;
};
function Kp(t, e, n) {
  if (typeof t == 'function') n && (t = ut(t, n));
  else if (t && typeof t.handleEvent == 'function') t = ut(t.handleEvent, t);
  else throw Error('Invalid listener argument');
  return 2147483647 < Number(e) ? -1 : Q.setTimeout(t, e || 0);
}
function J1(t) {
  t.g = Kp(() => {
    (t.g = null), t.i && ((t.i = !1), J1(t));
  }, t.j);
  const e = t.h;
  (t.h = null), t.m.apply(null, e);
}
class KN extends kr {
  constructor(e, n) {
    super(), (this.m = e), (this.j = n), (this.h = null), (this.i = !1), (this.g = null);
  }
  l(e) {
    (this.h = arguments), this.g ? (this.i = !0) : J1(this);
  }
  M() {
    super.M(), this.g && (Q.clearTimeout(this.g), (this.g = null), (this.i = !1), (this.h = null));
  }
}
function ko(t) {
  kr.call(this), (this.h = t), (this.g = {});
}
nt(ko, kr);
var Cy = [];
function Z1(t, e, n, r) {
  Array.isArray(n) || (n && (Cy[0] = n.toString()), (n = Cy));
  for (var i = 0; i < n.length; i++) {
    var s = H1(e, n[i], r || t.handleEvent, !1, t.h || t);
    if (!s) break;
    t.g[s.key] = s;
  }
}
function eE(t) {
  Fp(
    t.g,
    function (e, n) {
      this.g.hasOwnProperty(n) && Vp(e);
    },
    t
  ),
    (t.g = {});
}
ko.prototype.M = function () {
  ko.X.M.call(this), eE(this);
};
ko.prototype.handleEvent = function () {
  throw Error('EventHandler.handleEvent not implemented');
};
function nc() {
  this.g = !0;
}
nc.prototype.Aa = function () {
  this.g = !1;
};
function WN(t, e, n, r, i, s) {
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
function qN(t, e, n, r, i, s, o) {
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
function ki(t, e, n, r) {
  t.info(function () {
    return 'XMLHTTP TEXT (' + e + '): ' + QN(t, n) + (r ? ' ' + r : '');
  });
}
function GN(t, e) {
  t.info(function () {
    return 'TIMEOUT: ' + e;
  });
}
nc.prototype.info = function () {};
function QN(t, e) {
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
    return Bp(n);
  } catch {
    return e;
  }
}
var ai = {},
  Ay = null;
function rc() {
  return (Ay = Ay || new qe());
}
ai.Pa = 'serverreachability';
function tE(t) {
  ct.call(this, ai.Pa, t);
}
nt(tE, ct);
function Co(t) {
  const e = rc();
  Ze(e, new tE(e));
}
ai.STAT_EVENT = 'statevent';
function nE(t, e) {
  ct.call(this, ai.STAT_EVENT, t), (this.stat = e);
}
nt(nE, ct);
function gt(t) {
  const e = rc();
  Ze(e, new nE(e, t));
}
ai.Qa = 'timingevent';
function rE(t, e) {
  ct.call(this, ai.Qa, t), (this.size = e);
}
nt(rE, ct);
function Wo(t, e) {
  if (typeof t != 'function') throw Error('Fn must not be null and must be a function');
  return Q.setTimeout(function () {
    t();
  }, e);
}
var ic = { NO_ERROR: 0, mb: 1, zb: 2, yb: 3, tb: 4, xb: 5, Ab: 6, Ma: 7, TIMEOUT: 8, Db: 9 },
  iE = {
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
function Wp() {}
Wp.prototype.h = null;
function Ny(t) {
  return t.h || (t.h = t.i());
}
function sE() {}
var qo = { OPEN: 'a', qb: 'b', Na: 'c', Cb: 'd' };
function qp() {
  ct.call(this, 'd');
}
nt(qp, ct);
function Gp() {
  ct.call(this, 'c');
}
nt(Gp, ct);
var Zd;
function sc() {}
nt(sc, Wp);
sc.prototype.g = function () {
  return new XMLHttpRequest();
};
sc.prototype.i = function () {
  return {};
};
Zd = new sc();
function Go(t, e, n, r) {
  (this.l = t),
    (this.j = e),
    (this.m = n),
    (this.U = r || 1),
    (this.S = new ko(this)),
    (this.O = YN),
    (t = qd ? 125 : void 0),
    (this.T = new tc(t)),
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
    (this.h = new oE());
}
function oE() {
  (this.i = null), (this.g = ''), (this.h = !1);
}
var YN = 45e3,
  ef = {},
  Wl = {};
M = Go.prototype;
M.setTimeout = function (t) {
  this.O = t;
};
function tf(t, e, n) {
  (t.K = 1), (t.v = ac(On(e))), (t.s = n), (t.P = !0), aE(t, null);
}
function aE(t, e) {
  (t.F = Date.now()), Qo(t), (t.A = On(t.v));
  var n = t.A,
    r = t.U;
  Array.isArray(r) || (r = [String(r)]),
    mE(n.i, 't', r),
    (t.C = 0),
    (n = t.l.H),
    (t.h = new oE()),
    (t.g = bE(t.l, n ? e : null, !t.s)),
    0 < t.N && (t.L = new KN(ut(t.La, t, t.g), t.N)),
    Z1(t.S, t.g, 'readystatechange', t.ib),
    (e = t.H ? z1(t.H) : {}),
    t.s
      ? (t.u || (t.u = 'POST'),
        (e['Content-Type'] = 'application/x-www-form-urlencoded'),
        t.g.da(t.A, t.u, t.s, e))
      : ((t.u = 'GET'), t.g.da(t.A, t.u, null, e)),
    Co(),
    WN(t.j, t.u, t.A, t.m, t.U, t.s);
}
M.ib = function (t) {
  t = t.target;
  const e = this.L;
  e && Tn(t) == 3 ? e.l() : this.La(t);
};
M.La = function (t) {
  try {
    if (t == this.g)
      e: {
        const c = Tn(this.g);
        var e = this.g.Ea();
        const h = this.g.aa();
        if (!(3 > c) && (c != 3 || qd || (this.g && (this.h.h || this.g.fa() || Oy(this.g))))) {
          this.I || c != 4 || e == 7 || (e == 8 || 0 >= h ? Co(3) : Co(2)), oc(this);
          var n = this.g.aa();
          this.Y = n;
          t: if (lE(this)) {
            var r = Oy(this.g);
            t = '';
            var i = r.length,
              s = Tn(this.g) == 4;
            if (!this.h.i) {
              if (typeof TextDecoder > 'u') {
                $r(this), Qs(this);
                var o = '';
                break t;
              }
              this.h.i = new Q.TextDecoder();
            }
            for (e = 0; e < i; e++)
              (this.h.h = !0), (t += this.h.i.decode(r[e], { stream: s && e == i - 1 }));
            r.splice(0, i), (this.h.g += t), (this.C = 0), (o = this.h.g);
          } else o = this.g.fa();
          if (((this.i = n == 200), qN(this.j, this.u, this.A, this.m, this.U, c, n), this.i)) {
            if (this.Z && !this.J) {
              t: {
                if (this.g) {
                  var a,
                    l = this.g;
                  if (
                    (a = l.g ? l.g.getResponseHeader('X-HTTP-Initial-Response') : null) &&
                    !Hl(a)
                  ) {
                    var u = a;
                    break t;
                  }
                }
                u = null;
              }
              if ((n = u))
                ki(this.j, this.m, n, 'Initial handshake response via X-HTTP-Initial-Response'),
                  (this.J = !0),
                  nf(this, n);
              else {
                (this.i = !1), (this.o = 3), gt(12), $r(this), Qs(this);
                break e;
              }
            }
            this.P
              ? (uE(this, c, o),
                qd && this.i && c == 3 && (Z1(this.S, this.T, 'tick', this.hb), this.T.start()))
              : (ki(this.j, this.m, o, null), nf(this, o)),
              c == 4 && $r(this),
              this.i && !this.I && (c == 4 ? OE(this.l, this) : ((this.i = !1), Qo(this)));
          } else
            n == 400 && 0 < o.indexOf('Unknown SID')
              ? ((this.o = 3), gt(12))
              : ((this.o = 0), gt(13)),
              $r(this),
              Qs(this);
        }
      }
  } catch {
  } finally {
  }
};
function lE(t) {
  return t.g ? t.u == 'GET' && t.K != 2 && t.l.Da : !1;
}
function uE(t, e, n) {
  let r = !0,
    i;
  for (; !t.I && t.C < n.length; )
    if (((i = XN(t, n)), i == Wl)) {
      e == 4 && ((t.o = 4), gt(14), (r = !1)), ki(t.j, t.m, null, '[Incomplete Response]');
      break;
    } else if (i == ef) {
      (t.o = 4), gt(15), ki(t.j, t.m, n, '[Invalid Chunk]'), (r = !1);
      break;
    } else ki(t.j, t.m, i, null), nf(t, i);
  lE(t) && i != Wl && i != ef && ((t.h.g = ''), (t.C = 0)),
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
          tm(e),
          (e.K = !0),
          gt(11)))
      : (ki(t.j, t.m, n, '[Invalid Chunked Response]'), $r(t), Qs(t));
}
M.hb = function () {
  if (this.g) {
    var t = Tn(this.g),
      e = this.g.fa();
    this.C < e.length && (oc(this), uE(this, t, e), this.i && t != 4 && Qo(this));
  }
};
function XN(t, e) {
  var n = t.C,
    r = e.indexOf(
      `
`,
      n
    );
  return r == -1
    ? Wl
    : ((n = Number(e.substring(n, r))),
      isNaN(n) ? ef : ((r += 1), r + n > e.length ? Wl : ((e = e.substr(r, n)), (t.C = r + n), e)));
}
M.cancel = function () {
  (this.I = !0), $r(this);
};
function Qo(t) {
  (t.V = Date.now() + t.O), cE(t, t.O);
}
function cE(t, e) {
  if (t.B != null) throw Error('WatchDog timer not null');
  t.B = Wo(ut(t.gb, t), e);
}
function oc(t) {
  t.B && (Q.clearTimeout(t.B), (t.B = null));
}
M.gb = function () {
  this.B = null;
  const t = Date.now();
  0 <= t - this.V
    ? (GN(this.j, this.A), this.K != 2 && (Co(), gt(17)), $r(this), (this.o = 2), Qs(this))
    : cE(this, this.V - t);
};
function Qs(t) {
  t.l.G == 0 || t.I || OE(t.l, t);
}
function $r(t) {
  oc(t);
  var e = t.L;
  e && typeof e.na == 'function' && e.na(),
    (t.L = null),
    Hp(t.T),
    eE(t.S),
    t.g && ((e = t.g), (t.g = null), e.abort(), e.na());
}
function nf(t, e) {
  try {
    var n = t.l;
    if (n.G != 0 && (n.g == t || rf(n.h, t))) {
      if (!t.J && rf(n.h, t) && n.G == 3) {
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
                if (n.g.F + 3e3 < t.F) Ql(n), cc(n);
                else break e;
              em(n), gt(18);
            }
          } else
            (n.Ba = i[1]),
              0 < n.Ba - n.T &&
                37500 > i[2] &&
                n.L &&
                n.A == 0 &&
                !n.v &&
                (n.v = Wo(ut(n.cb, n), 6e3));
          if (1 >= vE(n.h) && n.ja) {
            try {
              n.ja();
            } catch {}
            n.ja = void 0;
          }
        } else br(n, 11);
      } else if (((t.J || n.g == t) && Ql(n), !Hl(e)))
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
                    ((s.j = s.l), (s.g = new Set()), s.h && (Qp(s, s.h), (s.h = null)));
                }
                if (r.D) {
                  const v = m.g ? m.g.getResponseHeader('X-HTTP-Session-Id') : null;
                  v && ((r.za = v), Te(r.F, r.D, v));
                }
              }
              (n.G = 3),
                n.l && n.l.xa(),
                n.$ && ((n.P = Date.now() - t.F), n.j.info('Handshake RTT: ' + n.P + 'ms')),
                (r = n);
              var o = t;
              if (((r.sa = $E(r, r.H ? r.ka : null, r.V)), o.J)) {
                wE(r.h, o);
                var a = o,
                  l = r.J;
                l && a.setTimeout(l), a.B && (oc(a), Qo(a)), (r.g = o);
              } else xE(r);
              0 < n.i.length && hc(n);
            } else (u[0] != 'stop' && u[0] != 'close') || br(n, 7);
          else
            n.G == 3 &&
              (u[0] == 'stop' || u[0] == 'close'
                ? u[0] == 'stop'
                  ? br(n, 7)
                  : Zp(n)
                : u[0] != 'noop' && n.l && n.l.wa(u),
              (n.A = 0));
        }
    }
    Co(4);
  } catch {}
}
function JN(t) {
  if (t.W && typeof t.W == 'function') return t.W();
  if ((typeof Map < 'u' && t instanceof Map) || (typeof Set < 'u' && t instanceof Set))
    return Array.from(t.values());
  if (typeof t == 'string') return t.split('');
  if (Xu(t)) {
    for (var e = [], n = t.length, r = 0; r < n; r++) e.push(t[r]);
    return e;
  }
  (e = []), (n = 0);
  for (r in t) e[n++] = t[r];
  return e;
}
function ZN(t) {
  if (t.oa && typeof t.oa == 'function') return t.oa();
  if (!t.W || typeof t.W != 'function') {
    if (typeof Map < 'u' && t instanceof Map) return Array.from(t.keys());
    if (!(typeof Set < 'u' && t instanceof Set)) {
      if (Xu(t) || typeof t == 'string') {
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
function hE(t, e) {
  if (t.forEach && typeof t.forEach == 'function') t.forEach(e, void 0);
  else if (Xu(t) || typeof t == 'string') Array.prototype.forEach.call(t, e, void 0);
  else
    for (var n = ZN(t), r = JN(t), i = r.length, s = 0; s < i; s++)
      e.call(void 0, r[s], n && n[s], t);
}
var dE = RegExp(
  '^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$'
);
function eR(t, e) {
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
function zr(t, e) {
  if (
    ((this.g = this.s = this.j = ''),
    (this.m = null),
    (this.o = this.l = ''),
    (this.h = !1),
    t instanceof zr)
  ) {
    (this.h = e !== void 0 ? e : t.h),
      ql(this, t.j),
      (this.s = t.s),
      (this.g = t.g),
      Gl(this, t.m),
      (this.l = t.l),
      (e = t.i);
    var n = new Ao();
    (n.i = e.i), e.g && ((n.g = new Map(e.g)), (n.h = e.h)), Ry(this, n), (this.o = t.o);
  } else
    t && (n = String(t).match(dE))
      ? ((this.h = !!e),
        ql(this, n[1] || '', !0),
        (this.s = Ms(n[2] || '')),
        (this.g = Ms(n[3] || '', !0)),
        Gl(this, n[4]),
        (this.l = Ms(n[5] || '', !0)),
        Ry(this, n[6] || '', !0),
        (this.o = Ms(n[7] || '')))
      : ((this.h = !!e), (this.i = new Ao(null, this.h)));
}
zr.prototype.toString = function () {
  var t = [],
    e = this.j;
  e && t.push(Fs(e, xy, !0), ':');
  var n = this.g;
  return (
    (n || e == 'file') &&
      (t.push('//'),
      (e = this.s) && t.push(Fs(e, xy, !0), '@'),
      t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, '%$1')),
      (n = this.m),
      n != null && t.push(':', String(n))),
    (n = this.l) &&
      (this.g && n.charAt(0) != '/' && t.push('/'),
      t.push(Fs(n, n.charAt(0) == '/' ? rR : nR, !0))),
    (n = this.i.toString()) && t.push('?', n),
    (n = this.o) && t.push('#', Fs(n, sR)),
    t.join('')
  );
};
function On(t) {
  return new zr(t);
}
function ql(t, e, n) {
  (t.j = n ? Ms(e, !0) : e), t.j && (t.j = t.j.replace(/:$/, ''));
}
function Gl(t, e) {
  if (e) {
    if (((e = Number(e)), isNaN(e) || 0 > e)) throw Error('Bad port number ' + e);
    t.m = e;
  } else t.m = null;
}
function Ry(t, e, n) {
  e instanceof Ao ? ((t.i = e), oR(t.i, t.h)) : (n || (e = Fs(e, iR)), (t.i = new Ao(e, t.h)));
}
function Te(t, e, n) {
  t.i.set(e, n);
}
function ac(t) {
  return (
    Te(
      t,
      'zx',
      Math.floor(2147483648 * Math.random()).toString(36) +
        Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)
    ),
    t
  );
}
function Ms(t, e) {
  return t ? (e ? decodeURI(t.replace(/%25/g, '%2525')) : decodeURIComponent(t)) : '';
}
function Fs(t, e, n) {
  return typeof t == 'string'
    ? ((t = encodeURI(t).replace(e, tR)), n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, '%$1')), t)
    : null;
}
function tR(t) {
  return (t = t.charCodeAt(0)), '%' + ((t >> 4) & 15).toString(16) + (t & 15).toString(16);
}
var xy = /[#\/\?@]/g,
  nR = /[#\?:]/g,
  rR = /[#\?]/g,
  iR = /[#\?@]/g,
  sR = /#/g;
function Ao(t, e) {
  (this.h = this.g = null), (this.i = t || null), (this.j = !!e);
}
function Cr(t) {
  t.g ||
    ((t.g = new Map()),
    (t.h = 0),
    t.i &&
      eR(t.i, function (e, n) {
        t.add(decodeURIComponent(e.replace(/\+/g, ' ')), n);
      }));
}
M = Ao.prototype;
M.add = function (t, e) {
  Cr(this), (this.i = null), (t = ds(this, t));
  var n = this.g.get(t);
  return n || this.g.set(t, (n = [])), n.push(e), (this.h += 1), this;
};
function fE(t, e) {
  Cr(t), (e = ds(t, e)), t.g.has(e) && ((t.i = null), (t.h -= t.g.get(e).length), t.g.delete(e));
}
function pE(t, e) {
  return Cr(t), (e = ds(t, e)), t.g.has(e);
}
M.forEach = function (t, e) {
  Cr(this),
    this.g.forEach(function (n, r) {
      n.forEach(function (i) {
        t.call(e, i, r, this);
      }, this);
    }, this);
};
M.oa = function () {
  Cr(this);
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
  Cr(this);
  let e = [];
  if (typeof t == 'string') pE(this, t) && (e = e.concat(this.g.get(ds(this, t))));
  else {
    t = Array.from(this.g.values());
    for (let n = 0; n < t.length; n++) e = e.concat(t[n]);
  }
  return e;
};
M.set = function (t, e) {
  return (
    Cr(this),
    (this.i = null),
    (t = ds(this, t)),
    pE(this, t) && (this.h -= this.g.get(t).length),
    this.g.set(t, [e]),
    (this.h += 1),
    this
  );
};
M.get = function (t, e) {
  return t ? ((t = this.W(t)), 0 < t.length ? String(t[0]) : e) : e;
};
function mE(t, e, n) {
  fE(t, e), 0 < n.length && ((t.i = null), t.g.set(ds(t, e), bp(n)), (t.h += n.length));
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
function ds(t, e) {
  return (e = String(e)), t.j && (e = e.toLowerCase()), e;
}
function oR(t, e) {
  e &&
    !t.j &&
    (Cr(t),
    (t.i = null),
    t.g.forEach(function (n, r) {
      var i = r.toLowerCase();
      r != i && (fE(this, r), mE(this, i, n));
    }, t)),
    (t.j = e);
}
var aR = class {
  constructor(e, n) {
    (this.h = e), (this.g = n);
  }
};
function gE(t) {
  (this.l = t || lR),
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
var lR = 10;
function yE(t) {
  return t.h ? !0 : t.g ? t.g.size >= t.j : !1;
}
function vE(t) {
  return t.h ? 1 : t.g ? t.g.size : 0;
}
function rf(t, e) {
  return t.h ? t.h == e : t.g ? t.g.has(e) : !1;
}
function Qp(t, e) {
  t.g ? t.g.add(e) : (t.h = e);
}
function wE(t, e) {
  t.h && t.h == e ? (t.h = null) : t.g && t.g.has(e) && t.g.delete(e);
}
gE.prototype.cancel = function () {
  if (((this.i = EE(this)), this.h)) this.h.cancel(), (this.h = null);
  else if (this.g && this.g.size !== 0) {
    for (const t of this.g.values()) t.cancel();
    this.g.clear();
  }
};
function EE(t) {
  if (t.h != null) return t.i.concat(t.h.D);
  if (t.g != null && t.g.size !== 0) {
    let e = t.i;
    for (const n of t.g.values()) e = e.concat(n.D);
    return e;
  }
  return bp(t.i);
}
function Yp() {}
Yp.prototype.stringify = function (t) {
  return Q.JSON.stringify(t, void 0);
};
Yp.prototype.parse = function (t) {
  return Q.JSON.parse(t, void 0);
};
function uR() {
  this.g = new Yp();
}
function cR(t, e, n) {
  const r = n || '';
  try {
    hE(t, function (i, s) {
      let o = i;
      Ho(i) && (o = Bp(i)), e.push(r + s + '=' + encodeURIComponent(o));
    });
  } catch (i) {
    throw (e.push(r + 'type=' + encodeURIComponent('_badmap')), i);
  }
}
function hR(t, e) {
  const n = new nc();
  if (Q.Image) {
    const r = new Image();
    (r.onload = Ra(Da, n, r, 'TestLoadImage: loaded', !0, e)),
      (r.onerror = Ra(Da, n, r, 'TestLoadImage: error', !1, e)),
      (r.onabort = Ra(Da, n, r, 'TestLoadImage: abort', !1, e)),
      (r.ontimeout = Ra(Da, n, r, 'TestLoadImage: timeout', !1, e)),
      Q.setTimeout(function () {
        r.ontimeout && r.ontimeout();
      }, 1e4),
      (r.src = t);
  } else e(!1);
}
function Da(t, e, n, r, i) {
  try {
    (e.onload = null), (e.onerror = null), (e.onabort = null), (e.ontimeout = null), i(r);
  } catch {}
}
function Yo(t) {
  (this.l = t.ac || null), (this.j = t.jb || !1);
}
nt(Yo, Wp);
Yo.prototype.g = function () {
  return new lc(this.l, this.j);
};
Yo.prototype.i = (function (t) {
  return function () {
    return t;
  };
})({});
function lc(t, e) {
  qe.call(this),
    (this.D = t),
    (this.u = e),
    (this.m = void 0),
    (this.readyState = Xp),
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
nt(lc, qe);
var Xp = 0;
M = lc.prototype;
M.open = function (t, e) {
  if (this.readyState != Xp) throw (this.abort(), Error('Error reopening a connection'));
  (this.C = t), (this.B = e), (this.readyState = 1), No(this);
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
    1 <= this.readyState && this.g && this.readyState != 4 && ((this.g = !1), Xo(this)),
    (this.readyState = Xp);
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
      No(this)),
    this.g && ((this.readyState = 3), No(this), this.g))
  )
    if (this.responseType === 'arraybuffer')
      t.arrayBuffer().then(this.Ua.bind(this), this.ga.bind(this));
    else if (typeof Q.ReadableStream < 'u' && 'body' in t) {
      if (((this.j = t.body.getReader()), this.u)) {
        if (this.responseType)
          throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');
        this.response = [];
      } else (this.response = this.responseText = ''), (this.A = new TextDecoder());
      SE(this);
    } else t.text().then(this.Va.bind(this), this.ga.bind(this));
};
function SE(t) {
  t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t));
}
M.Ta = function (t) {
  if (this.g) {
    if (this.u && t.value) this.response.push(t.value);
    else if (!this.u) {
      var e = t.value ? t.value : new Uint8Array(0);
      (e = this.A.decode(e, { stream: !t.done })) && (this.response = this.responseText += e);
    }
    t.done ? Xo(this) : No(this), this.readyState == 3 && SE(this);
  }
};
M.Va = function (t) {
  this.g && ((this.response = this.responseText = t), Xo(this));
};
M.Ua = function (t) {
  this.g && ((this.response = t), Xo(this));
};
M.ga = function () {
  this.g && Xo(this);
};
function Xo(t) {
  (t.readyState = 4), (t.l = null), (t.j = null), (t.A = null), No(t);
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
function No(t) {
  t.onreadystatechange && t.onreadystatechange.call(t);
}
Object.defineProperty(lc.prototype, 'withCredentials', {
  get: function () {
    return this.m === 'include';
  },
  set: function (t) {
    this.m = t ? 'include' : 'same-origin';
  }
});
var dR = Q.JSON.parse;
function xe(t) {
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
    (this.J = _E),
    (this.K = this.L = !1);
}
nt(xe, qe);
var _E = '',
  fR = /^https?$/i,
  pR = ['POST', 'PUT'];
M = xe.prototype;
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
    (this.g = this.u ? this.u.g() : Zd.g()),
    (this.C = this.u ? Ny(this.u) : Ny(Zd)),
    (this.g.onreadystatechange = ut(this.Ha, this));
  try {
    (this.F = !0), this.g.open(e, String(t), !0), (this.F = !1);
  } catch (s) {
    Dy(this, s);
    return;
  }
  if (((t = n || ''), (n = new Map(this.headers)), r))
    if (Object.getPrototypeOf(r) === Object.prototype) for (var i in r) n.set(i, r[i]);
    else if (typeof r.keys == 'function' && typeof r.get == 'function')
      for (const s of r.keys()) n.set(s, r.get(s));
    else throw Error('Unknown input type for opt_headers: ' + String(r));
  (r = Array.from(n.keys()).find((s) => s.toLowerCase() == 'content-type')),
    (i = Q.FormData && t instanceof Q.FormData),
    !(0 <= F1(pR, e)) ||
      r ||
      i ||
      n.set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
  for (const [s, o] of n) this.g.setRequestHeader(s, o);
  this.J && (this.g.responseType = this.J),
    'withCredentials' in this.g &&
      this.g.withCredentials !== this.L &&
      (this.g.withCredentials = this.L);
  try {
    kE(this),
      0 < this.B &&
        ((this.K = mR(this.g))
          ? ((this.g.timeout = this.B), (this.g.ontimeout = ut(this.qa, this)))
          : (this.A = Kp(this.qa, this.B, this))),
      (this.v = !0),
      this.g.send(t),
      (this.v = !1);
  } catch (s) {
    Dy(this, s);
  }
};
function mR(t) {
  return ts && ON() && typeof t.timeout == 'number' && t.ontimeout !== void 0;
}
M.qa = function () {
  typeof $p < 'u' &&
    this.g &&
    ((this.j = 'Timed out after ' + this.B + 'ms, aborting'),
    (this.m = 8),
    Ze(this, 'timeout'),
    this.abort(8));
};
function Dy(t, e) {
  (t.h = !1), t.g && ((t.l = !0), t.g.abort(), (t.l = !1)), (t.j = e), (t.m = 5), TE(t), uc(t);
}
function TE(t) {
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
    uc(this));
};
M.M = function () {
  this.g && (this.h && ((this.h = !1), (this.l = !0), this.g.abort(), (this.l = !1)), uc(this, !0)),
    xe.X.M.call(this);
};
M.Ha = function () {
  this.s || (this.F || this.v || this.l ? IE(this) : this.fb());
};
M.fb = function () {
  IE(this);
};
function IE(t) {
  if (t.h && typeof $p < 'u' && (!t.C[1] || Tn(t) != 4 || t.aa() != 2)) {
    if (t.v && Tn(t) == 4) Kp(t.Ha, 0, t);
    else if ((Ze(t, 'readystatechange'), Tn(t) == 4)) {
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
            var i = String(t.H).match(dE)[1] || null;
            if (!i && Q.self && Q.self.location) {
              var s = Q.self.location.protocol;
              i = s.substr(0, s.length - 1);
            }
            r = !fR.test(i ? i.toLowerCase() : '');
          }
          n = r;
        }
        if (n) Ze(t, 'complete'), Ze(t, 'success');
        else {
          t.m = 6;
          try {
            var o = 2 < Tn(t) ? t.g.statusText : '';
          } catch {
            o = '';
          }
          (t.j = o + ' [' + t.aa() + ']'), TE(t);
        }
      } finally {
        uc(t);
      }
    }
  }
}
function uc(t, e) {
  if (t.g) {
    kE(t);
    const n = t.g,
      r = t.C[0] ? Bl : null;
    (t.g = null), (t.C = null), e || Ze(t, 'ready');
    try {
      n.onreadystatechange = r;
    } catch {}
  }
}
function kE(t) {
  t.g && t.K && (t.g.ontimeout = null), t.A && (Q.clearTimeout(t.A), (t.A = null));
}
function Tn(t) {
  return t.g ? t.g.readyState : 0;
}
M.aa = function () {
  try {
    return 2 < Tn(this) ? this.g.status : -1;
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
    return t && e.indexOf(t) == 0 && (e = e.substring(t.length)), dR(e);
  }
};
function Oy(t) {
  try {
    if (!t.g) return null;
    if ('response' in t.g) return t.g.response;
    switch (t.J) {
      case _E:
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
function CE(t) {
  let e = '';
  return (
    Fp(t, function (n, r) {
      (e += r),
        (e += ':'),
        (e += n),
        (e += `\r
`);
    }),
    e
  );
}
function Jp(t, e, n) {
  e: {
    for (r in n) {
      var r = !1;
      break e;
    }
    r = !0;
  }
  r ||
    ((n = CE(n)), typeof t == 'string' ? n != null && encodeURIComponent(String(n)) : Te(t, e, n));
}
function Ns(t, e, n) {
  return (n && n.internalChannelParams && n.internalChannelParams[t]) || e;
}
function AE(t) {
  (this.Ca = 0),
    (this.i = []),
    (this.j = new nc()),
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
    (this.Za = Ns('failFast', !1, t)),
    (this.L = this.v = this.u = this.m = this.l = null),
    (this.Y = !0),
    (this.pa = this.Ba = this.T = -1),
    (this.Z = this.A = this.C = 0),
    (this.Xa = Ns('baseRetryDelayMs', 5e3, t)),
    (this.bb = Ns('retryDelaySeedMs', 1e4, t)),
    (this.$a = Ns('forwardChannelMaxRetries', 2, t)),
    (this.ta = Ns('forwardChannelRequestTimeoutMs', 2e4, t)),
    (this.ra = (t && t.xmlHttpFactory) || void 0),
    (this.Da = (t && t.Zb) || !1),
    (this.J = void 0),
    (this.H = (t && t.supportsCrossDomainXhr) || !1),
    (this.I = ''),
    (this.h = new gE(t && t.concurrentRequestLimit)),
    (this.Fa = new uR()),
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
M = AE.prototype;
M.ma = 8;
M.G = 1;
function Zp(t) {
  if ((NE(t), t.G == 3)) {
    var e = t.U++,
      n = On(t.F);
    Te(n, 'SID', t.I),
      Te(n, 'RID', e),
      Te(n, 'TYPE', 'terminate'),
      Jo(t, n),
      (e = new Go(t, t.j, e, void 0)),
      (e.K = 2),
      (e.v = ac(On(n))),
      (n = !1),
      Q.navigator && Q.navigator.sendBeacon && (n = Q.navigator.sendBeacon(e.v.toString(), '')),
      !n && Q.Image && ((new Image().src = e.v), (n = !0)),
      n || ((e.g = bE(e.l, null)), e.g.da(e.v)),
      (e.F = Date.now()),
      Qo(e);
  }
  LE(t);
}
function cc(t) {
  t.g && (tm(t), t.g.cancel(), (t.g = null));
}
function NE(t) {
  cc(t),
    t.u && (Q.clearTimeout(t.u), (t.u = null)),
    Ql(t),
    t.h.cancel(),
    t.m && (typeof t.m == 'number' && Q.clearTimeout(t.m), (t.m = null));
}
function hc(t) {
  yE(t.h) || t.m || ((t.m = !0), Y1(t.Ja, t), (t.C = 0));
}
function gR(t, e) {
  return vE(t.h) >= t.h.j - (t.m ? 1 : 0)
    ? !1
    : t.m
    ? ((t.i = e.D.concat(t.i)), !0)
    : t.G == 1 || t.G == 2 || t.C >= (t.Za ? 0 : t.$a)
    ? !1
    : ((t.m = Wo(ut(t.Ja, t, e), PE(t, t.C))), t.C++, !0);
}
M.Ja = function (t) {
  if (this.m)
    if (((this.m = null), this.G == 1)) {
      if (!t) {
        (this.U = Math.floor(1e5 * Math.random())), (t = this.U++);
        const i = new Go(this, this.j, t, void 0);
        let s = this.s;
        if (
          (this.S && (s ? ((s = z1(s)), B1(s, this.S)) : (s = this.S)),
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
        (e = RE(this, i, e)),
          (n = On(this.F)),
          Te(n, 'RID', t),
          Te(n, 'CVER', 22),
          this.D && Te(n, 'X-HTTP-Session-Id', this.D),
          Jo(this, n),
          s &&
            (this.N
              ? (e = 'headers=' + encodeURIComponent(String(CE(s))) + '&' + e)
              : this.o && Jp(n, this.o, s)),
          Qp(this.h, i),
          this.Ya && Te(n, 'TYPE', 'init'),
          this.O
            ? (Te(n, '$req', e), Te(n, 'SID', 'null'), (i.Z = !0), tf(i, n, null))
            : tf(i, n, e),
          (this.G = 2);
      }
    } else this.G == 3 && (t ? Py(this, t) : this.i.length == 0 || yE(this.h) || Py(this));
};
function Py(t, e) {
  var n;
  e ? (n = e.m) : (n = t.U++);
  const r = On(t.F);
  Te(r, 'SID', t.I),
    Te(r, 'RID', n),
    Te(r, 'AID', t.T),
    Jo(t, r),
    t.o && t.s && Jp(r, t.o, t.s),
    (n = new Go(t, t.j, n, t.C + 1)),
    t.o === null && (n.H = t.s),
    e && (t.i = e.D.concat(t.i)),
    (e = RE(t, n, 1e3)),
    n.setTimeout(Math.round(0.5 * t.ta) + Math.round(0.5 * t.ta * Math.random())),
    Qp(t.h, n),
    tf(n, r, e);
}
function Jo(t, e) {
  t.ia &&
    Fp(t.ia, function (n, r) {
      Te(e, r, n);
    }),
    t.l &&
      hE({}, function (n, r) {
        Te(e, r, n);
      });
}
function RE(t, e, n) {
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
            cR(c, o, 'req' + u + '_');
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
function xE(t) {
  t.g || t.u || ((t.Z = 1), Y1(t.Ia, t), (t.A = 0));
}
function em(t) {
  return t.g || t.u || 3 <= t.A ? !1 : (t.Z++, (t.u = Wo(ut(t.Ia, t), PE(t, t.A))), t.A++, !0);
}
M.Ia = function () {
  if (((this.u = null), DE(this), this.$ && !(this.K || this.g == null || 0 >= this.P))) {
    var t = 2 * this.P;
    this.j.info('BP detection timer enabled: ' + t), (this.B = Wo(ut(this.eb, this), t));
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
    cc(this),
    DE(this));
};
function tm(t) {
  t.B != null && (Q.clearTimeout(t.B), (t.B = null));
}
function DE(t) {
  (t.g = new Go(t, t.j, 'rpc', t.Z)), t.o === null && (t.g.H = t.s), (t.g.N = 0);
  var e = On(t.sa);
  Te(e, 'RID', 'rpc'),
    Te(e, 'SID', t.I),
    Te(e, 'CI', t.L ? '0' : '1'),
    Te(e, 'AID', t.T),
    Te(e, 'TYPE', 'xmlhttp'),
    Jo(t, e),
    t.o && t.s && Jp(e, t.o, t.s),
    t.J && t.g.setTimeout(t.J);
  var n = t.g;
  (t = t.ka), (n.K = 1), (n.v = ac(On(e))), (n.s = null), (n.P = !0), aE(n, t);
}
M.cb = function () {
  this.v != null && ((this.v = null), cc(this), em(this), gt(19));
};
function Ql(t) {
  t.v != null && (Q.clearTimeout(t.v), (t.v = null));
}
function OE(t, e) {
  var n = null;
  if (t.g == e) {
    Ql(t), tm(t), (t.g = null);
    var r = 2;
  } else if (rf(t.h, e)) (n = e.D), wE(t.h, e), (r = 1);
  else return;
  if (t.G != 0) {
    if (((t.pa = e.Y), e.i))
      if (r == 1) {
        (n = e.s ? e.s.length : 0), (e = Date.now() - e.F);
        var i = t.C;
        (r = rc()), Ze(r, new rE(r, n)), hc(t);
      } else xE(t);
    else if (
      ((i = e.o), i == 3 || (i == 0 && 0 < t.pa) || !((r == 1 && gR(t, e)) || (r == 2 && em(t))))
    )
      switch ((n && 0 < n.length && ((e = t.h), (e.i = e.i.concat(n))), i)) {
        case 1:
          br(t, 5);
          break;
        case 4:
          br(t, 10);
          break;
        case 3:
          br(t, 6);
          break;
        default:
          br(t, 2);
      }
  }
}
function PE(t, e) {
  let n = t.Xa + Math.floor(Math.random() * t.bb);
  return t.l || (n *= 2), n * e;
}
function br(t, e) {
  if ((t.j.info('Error code ' + e), e == 2)) {
    var n = null;
    t.l && (n = null);
    var r = ut(t.kb, t);
    n ||
      ((n = new zr('//www.google.com/images/cleardot.gif')),
      (Q.location && Q.location.protocol == 'http') || ql(n, 'https'),
      ac(n)),
      hR(n.toString(), r);
  } else gt(2);
  (t.G = 0), t.l && t.l.va(e), LE(t), NE(t);
}
M.kb = function (t) {
  t
    ? (this.j.info('Successfully pinged google.com'), gt(2))
    : (this.j.info('Failed to ping google.com'), gt(1));
};
function LE(t) {
  if (((t.G = 0), (t.la = []), t.l)) {
    const e = EE(t.h);
    (e.length != 0 || t.i.length != 0) &&
      (_y(t.la, e), _y(t.la, t.i), (t.h.i.length = 0), bp(t.i), (t.i.length = 0)),
      t.l.ua();
  }
}
function $E(t, e, n) {
  var r = n instanceof zr ? On(n) : new zr(n, void 0);
  if (r.g != '') e && (r.g = e + '.' + r.g), Gl(r, r.m);
  else {
    var i = Q.location;
    (r = i.protocol), (e = e ? e + '.' + i.hostname : i.hostname), (i = +i.port);
    var s = new zr(null, void 0);
    r && ql(s, r), e && (s.g = e), i && Gl(s, i), n && (s.l = n), (r = s);
  }
  return (n = t.D), (e = t.za), n && e && Te(r, n, e), Te(r, 'VER', t.ma), Jo(t, r), r;
}
function bE(t, e, n) {
  if (e && !t.H) throw Error("Can't create secondary domain capable XhrIo object.");
  return (e = n && t.Da && !t.ra ? new xe(new Yo({ jb: !0 })) : new xe(t.ra)), e.Ka(t.H), e;
}
function ME() {}
M = ME.prototype;
M.xa = function () {};
M.wa = function () {};
M.va = function () {};
M.ua = function () {};
M.Ra = function () {};
function Yl() {
  if (ts && !(10 <= Number(PN))) throw Error('Environmental error: no available transport.');
}
Yl.prototype.g = function (t, e) {
  return new Lt(t, e);
};
function Lt(t, e) {
  qe.call(this),
    (this.g = new AE(e)),
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
    (t = e && e.Yb) && !Hl(t) && (this.g.o = t),
    (this.A = (e && e.supportsCrossDomainXhr) || !1),
    (this.v = (e && e.sendRawJson) || !1),
    (e = e && e.httpSessionIdParam) &&
      !Hl(e) &&
      ((this.g.D = e), (t = this.h), t !== null && e in t && ((t = this.h), e in t && delete t[e])),
    (this.j = new fs(this));
}
nt(Lt, qe);
Lt.prototype.m = function () {
  (this.g.l = this.j), this.A && (this.g.H = !0);
  var t = this.g,
    e = this.l,
    n = this.h || void 0;
  gt(0), (t.V = e), (t.ia = n || {}), (t.L = t.Y), (t.F = $E(t, null, t.V)), hc(t);
};
Lt.prototype.close = function () {
  Zp(this.g);
};
Lt.prototype.u = function (t) {
  var e = this.g;
  if (typeof t == 'string') {
    var n = {};
    (n.__data__ = t), (t = n);
  } else this.v && ((n = {}), (n.__data__ = Bp(t)), (t = n));
  e.i.push(new aR(e.ab++, t)), e.G == 3 && hc(e);
};
Lt.prototype.M = function () {
  (this.g.l = null), delete this.j, Zp(this.g), delete this.g, Lt.X.M.call(this);
};
function FE(t) {
  qp.call(this);
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
nt(FE, qp);
function UE() {
  Gp.call(this), (this.status = 1);
}
nt(UE, Gp);
function fs(t) {
  this.g = t;
}
nt(fs, ME);
fs.prototype.xa = function () {
  Ze(this.g, 'a');
};
fs.prototype.wa = function (t) {
  Ze(this.g, new FE(t));
};
fs.prototype.va = function (t) {
  Ze(this.g, new UE());
};
fs.prototype.ua = function () {
  Ze(this.g, 'b');
};
Yl.prototype.createWebChannel = Yl.prototype.g;
Lt.prototype.send = Lt.prototype.u;
Lt.prototype.open = Lt.prototype.m;
Lt.prototype.close = Lt.prototype.close;
ic.NO_ERROR = 0;
ic.TIMEOUT = 8;
ic.HTTP_ERROR = 6;
iE.COMPLETE = 'complete';
sE.EventType = qo;
qo.OPEN = 'a';
qo.CLOSE = 'b';
qo.ERROR = 'c';
qo.MESSAGE = 'd';
qe.prototype.listen = qe.prototype.N;
xe.prototype.listenOnce = xe.prototype.O;
xe.prototype.getLastError = xe.prototype.Oa;
xe.prototype.getLastErrorCode = xe.prototype.Ea;
xe.prototype.getStatus = xe.prototype.aa;
xe.prototype.getResponseJson = xe.prototype.Sa;
xe.prototype.getResponseText = xe.prototype.fa;
xe.prototype.send = xe.prototype.da;
xe.prototype.setWithCredentials = xe.prototype.Ka;
var yR = function () {
    return new Yl();
  },
  vR = function () {
    return rc();
  },
  Ih = ic,
  wR = iE,
  ER = ai,
  Ly = {
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
  SR = Yo,
  Oa = sE,
  _R = xe;
const $y = '@firebase/firestore';
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
 */ let ps = '9.17.2';
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
 */ const ti = new Op('@firebase/firestore');
function by() {
  return ti.logLevel;
}
function V(t, ...e) {
  if (ti.logLevel <= ae.DEBUG) {
    const n = e.map(nm);
    ti.debug(`Firestore (${ps}): ${t}`, ...n);
  }
}
function Pn(t, ...e) {
  if (ti.logLevel <= ae.ERROR) {
    const n = e.map(nm);
    ti.error(`Firestore (${ps}): ${t}`, ...n);
  }
}
function sf(t, ...e) {
  if (ti.logLevel <= ae.WARN) {
    const n = e.map(nm);
    ti.warn(`Firestore (${ps}): ${t}`, ...n);
  }
}
function nm(t) {
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
  const e = `FIRESTORE (${ps}) INTERNAL ASSERTION FAILED: ` + t;
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
 */ const P = {
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
let G = class extends Mn {
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
 */ class Br {
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
 */ class VE {
  constructor(e, n) {
    (this.user = n),
      (this.type = 'OAuth'),
      (this.headers = new Map()),
      this.headers.set('Authorization', `Bearer ${e}`);
  }
}
class TR {
  getToken() {
    return Promise.resolve(null);
  }
  invalidateToken() {}
  start(e, n) {
    e.enqueueRetryable(() => n(ot.UNAUTHENTICATED));
  }
  shutdown() {}
}
class IR {
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
class kR {
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
    let s = new Br();
    this.o = () => {
      this.i++,
        (this.currentUser = this.u()),
        s.resolve(),
        (s = new Br()),
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
              (s = new Br()));
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
                ? (Fe(typeof r.accessToken == 'string'), new VE(r.accessToken, this.currentUser))
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
class CR {
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
class AR {
  constructor(e, n, r, i) {
    (this.h = e), (this.l = n), (this.m = r), (this.g = i);
  }
  getToken() {
    return Promise.resolve(new CR(this.h, this.l, this.m, this.g));
  }
  start(e, n) {
    e.enqueueRetryable(() => n(ot.FIRST_PARTY));
  }
  shutdown() {}
  invalidateToken() {}
}
class NR {
  constructor(e) {
    (this.value = e),
      (this.type = 'AppCheck'),
      (this.headers = new Map()),
      e && e.length > 0 && this.headers.set('x-firebase-appcheck', this.value);
  }
}
class RR {
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
              n ? (Fe(typeof n.token == 'string'), (this.A = n.token), new NR(n.token)) : null
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
 */ function xR(t) {
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
 */ class DR {
  static R() {
    const e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
      n = Math.floor(256 / e.length) * e.length;
    let r = '';
    for (; r.length < 20; ) {
      const i = xR(40);
      for (let s = 0; s < i.length; ++s)
        r.length < 20 && i[s] < n && (r += e.charAt(i[s] % e.length));
    }
    return r;
  }
}
function ue(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
function ns(t, e, n) {
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
      throw new G(P.INVALID_ARGUMENT, 'Timestamp nanoseconds out of range: ' + n);
    if (n >= 1e9) throw new G(P.INVALID_ARGUMENT, 'Timestamp nanoseconds out of range: ' + n);
    if (e < -62135596800) throw new G(P.INVALID_ARGUMENT, 'Timestamp seconds out of range: ' + e);
    if (e >= 253402300800) throw new G(P.INVALID_ARGUMENT, 'Timestamp seconds out of range: ' + e);
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
 */ class X {
  constructor(e) {
    this.timestamp = e;
  }
  static fromTimestamp(e) {
    return new X(e);
  }
  static min() {
    return new X(new Ct(0, 0));
  }
  static max() {
    return new X(new Ct(253402300799, 999999999));
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
 */ class Ro {
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
    return Ro.comparator(this, e) === 0;
  }
  child(e) {
    const n = this.segments.slice(this.offset, this.limit());
    return (
      e instanceof Ro
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
class Re extends Ro {
  construct(e, n, r) {
    return new Re(e, n, r);
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
        throw new G(
          P.INVALID_ARGUMENT,
          `Invalid segment (${r}). Paths must not contain // in them.`
        );
      n.push(...r.split('/').filter((i) => i.length > 0));
    }
    return new Re(n);
  }
  static emptyPath() {
    return new Re([]);
  }
}
const OR = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
class St extends Ro {
  construct(e, n, r) {
    return new St(e, n, r);
  }
  static isValidIdentifier(e) {
    return OR.test(e);
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
        throw new G(
          P.INVALID_ARGUMENT,
          `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`
        );
      n.push(r), (r = '');
    };
    let o = !1;
    for (; i < e.length; ) {
      const a = e[i];
      if (a === '\\') {
        if (i + 1 === e.length)
          throw new G(P.INVALID_ARGUMENT, 'Path has trailing escape character: ' + e);
        const l = e[i + 1];
        if (l !== '\\' && l !== '.' && l !== '`')
          throw new G(P.INVALID_ARGUMENT, 'Path has invalid escape sequence: ' + e);
        (r += l), (i += 2);
      } else a === '`' ? ((o = !o), i++) : a !== '.' || o ? ((r += a), i++) : (s(), i++);
    }
    if ((s(), o)) throw new G(P.INVALID_ARGUMENT, 'Unterminated ` in path: ' + e);
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
    return new K(Re.fromString(e));
  }
  static fromName(e) {
    return new K(Re.fromString(e).popFirst(5));
  }
  static empty() {
    return new K(Re.emptyPath());
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
    return e !== null && Re.comparator(this.path, e.path) === 0;
  }
  toString() {
    return this.path.toString();
  }
  static comparator(e, n) {
    return Re.comparator(e.path, n.path);
  }
  static isDocumentKey(e) {
    return e.length % 2 == 0;
  }
  static fromSegments(e) {
    return new K(new Re(e.slice()));
  }
}
function PR(t, e) {
  const n = t.toTimestamp().seconds,
    r = t.toTimestamp().nanoseconds + 1,
    i = X.fromTimestamp(r === 1e9 ? new Ct(n + 1, 0) : new Ct(n, r));
  return new wr(i, K.empty(), e);
}
function LR(t) {
  return new wr(t.readTime, t.key, -1);
}
class wr {
  constructor(e, n, r) {
    (this.readTime = e), (this.documentKey = n), (this.largestBatchId = r);
  }
  static min() {
    return new wr(X.min(), K.empty(), -1);
  }
  static max() {
    return new wr(X.max(), K.empty(), -1);
  }
}
function $R(t, e) {
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
 */ const bR =
  'The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.';
class MR {
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
 */ async function rm(t) {
  if (t.code !== P.FAILED_PRECONDITION || t.message !== bR) throw t;
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
function Zo(t) {
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
 */ class im {
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
im.at = -1;
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
 */ class FR {
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
class xo {
  constructor(e, n) {
    (this.projectId = e), (this.database = n || '(default)');
  }
  static empty() {
    return new xo('', '');
  }
  get isDefaultDatabase() {
    return this.database === '(default)';
  }
  isEqual(e) {
    return e instanceof xo && e.projectId === this.projectId && e.database === this.database;
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
 */ function My(t) {
  let e = 0;
  for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
  return e;
}
function dc(t, e) {
  for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
}
function UR(t) {
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
 */ function fc(t) {
  return t == null;
}
function of(t) {
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
 */ class VR extends Error {
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
        throw i instanceof DOMException ? new VR('Invalid base64 string: ' + i) : i;
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
const jR = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function Er(t) {
  if ((Fe(!!t), typeof t == 'string')) {
    let e = 0;
    const n = jR.exec(t);
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
function rs(t) {
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
 */ function jE(t) {
  var e, n;
  return (
    ((n = (
      ((e = t == null ? void 0 : t.mapValue) === null || e === void 0 ? void 0 : e.fields) || {}
    ).__type__) === null || n === void 0
      ? void 0
      : n.stringValue) === 'server_timestamp'
  );
}
function zE(t) {
  const e = t.mapValue.fields.__previous_value__;
  return jE(e) ? zE(e) : e;
}
function Do(t) {
  const e = Er(t.mapValue.fields.__local_write_time__.timestampValue);
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
 */ const Pa = { mapValue: { fields: { __type__: { stringValue: '__max__' } } } };
function ni(t) {
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
    ? jE(t)
      ? 4
      : zR(t)
      ? 9007199254740991
      : 10
    : J();
}
function mn(t, e) {
  if (t === e) return !0;
  const n = ni(t);
  if (n !== ni(e)) return !1;
  switch (n) {
    case 0:
    case 9007199254740991:
      return !0;
    case 1:
      return t.booleanValue === e.booleanValue;
    case 4:
      return Do(t).isEqual(Do(e));
    case 3:
      return (function (r, i) {
        if (
          typeof r.timestampValue == 'string' &&
          typeof i.timestampValue == 'string' &&
          r.timestampValue.length === i.timestampValue.length
        )
          return r.timestampValue === i.timestampValue;
        const s = Er(r.timestampValue),
          o = Er(i.timestampValue);
        return s.seconds === o.seconds && s.nanos === o.nanos;
      })(t, e);
    case 5:
      return t.stringValue === e.stringValue;
    case 6:
      return (function (r, i) {
        return rs(r.bytesValue).isEqual(rs(i.bytesValue));
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
          return s === o ? of(s) === of(o) : isNaN(s) && isNaN(o);
        }
        return !1;
      })(t, e);
    case 9:
      return ns(t.arrayValue.values || [], e.arrayValue.values || [], mn);
    case 10:
      return (function (r, i) {
        const s = r.mapValue.fields || {},
          o = i.mapValue.fields || {};
        if (My(s) !== My(o)) return !1;
        for (const a in s)
          if (s.hasOwnProperty(a) && (o[a] === void 0 || !mn(s[a], o[a]))) return !1;
        return !0;
      })(t, e);
    default:
      return J();
  }
}
function Oo(t, e) {
  return (t.values || []).find((n) => mn(n, e)) !== void 0;
}
function is(t, e) {
  if (t === e) return 0;
  const n = ni(t),
    r = ni(e);
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
      return Fy(t.timestampValue, e.timestampValue);
    case 4:
      return Fy(Do(t), Do(e));
    case 5:
      return ue(t.stringValue, e.stringValue);
    case 6:
      return (function (i, s) {
        const o = rs(i),
          a = rs(s);
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
          const u = is(o[l], a[l]);
          if (u) return u;
        }
        return ue(o.length, a.length);
      })(t.arrayValue, e.arrayValue);
    case 10:
      return (function (i, s) {
        if (i === Pa.mapValue && s === Pa.mapValue) return 0;
        if (i === Pa.mapValue) return 1;
        if (s === Pa.mapValue) return -1;
        const o = i.fields || {},
          a = Object.keys(o),
          l = s.fields || {},
          u = Object.keys(l);
        a.sort(), u.sort();
        for (let c = 0; c < a.length && c < u.length; ++c) {
          const h = ue(a[c], u[c]);
          if (h !== 0) return h;
          const d = is(o[a[c]], l[u[c]]);
          if (d !== 0) return d;
        }
        return ue(a.length, u.length);
      })(t.mapValue, e.mapValue);
    default:
      throw J();
  }
}
function Fy(t, e) {
  if (typeof t == 'string' && typeof e == 'string' && t.length === e.length) return ue(t, e);
  const n = Er(t),
    r = Er(e),
    i = ue(n.seconds, r.seconds);
  return i !== 0 ? i : ue(n.nanos, r.nanos);
}
function ss(t) {
  return af(t);
}
function af(t) {
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
        const i = Er(r);
        return `time(${i.seconds},${i.nanos})`;
      })(t.timestampValue)
    : 'stringValue' in t
    ? t.stringValue
    : 'bytesValue' in t
    ? rs(t.bytesValue).toBase64()
    : 'referenceValue' in t
    ? ((n = t.referenceValue), K.fromName(n).toString())
    : 'geoPointValue' in t
    ? `geo(${(e = t.geoPointValue).latitude},${e.longitude})`
    : 'arrayValue' in t
    ? (function (r) {
        let i = '[',
          s = !0;
        for (const o of r.values || []) s ? (s = !1) : (i += ','), (i += af(o));
        return i + ']';
      })(t.arrayValue)
    : 'mapValue' in t
    ? (function (r) {
        const i = Object.keys(r.fields || {}).sort();
        let s = '{',
          o = !0;
        for (const a of i) o ? (o = !1) : (s += ','), (s += `${a}:${af(r.fields[a])}`);
        return s + '}';
      })(t.mapValue)
    : J();
  var e, n;
}
function lf(t) {
  return !!t && 'integerValue' in t;
}
function sm(t) {
  return !!t && 'arrayValue' in t;
}
function Uy(t) {
  return !!t && 'nullValue' in t;
}
function Vy(t) {
  return !!t && 'doubleValue' in t && isNaN(Number(t.doubleValue));
}
function kh(t) {
  return !!t && 'mapValue' in t;
}
function Ys(t) {
  if (t.geoPointValue) return { geoPointValue: Object.assign({}, t.geoPointValue) };
  if (t.timestampValue && typeof t.timestampValue == 'object')
    return { timestampValue: Object.assign({}, t.timestampValue) };
  if (t.mapValue) {
    const e = { mapValue: { fields: {} } };
    return dc(t.mapValue.fields, (n, r) => (e.mapValue.fields[n] = Ys(r))), e;
  }
  if (t.arrayValue) {
    const e = { arrayValue: { values: [] } };
    for (let n = 0; n < (t.arrayValue.values || []).length; ++n)
      e.arrayValue.values[n] = Ys(t.arrayValue.values[n]);
    return e;
  }
  return Object.assign({}, t);
}
function zR(t) {
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
 */ class Xl {
  constructor(e, n) {
    (this.position = e), (this.inclusive = n);
  }
}
function jy(t, e, n) {
  let r = 0;
  for (let i = 0; i < t.position.length; i++) {
    const s = e[i],
      o = t.position[i];
    if (
      (s.field.isKeyField()
        ? (r = K.comparator(K.fromName(o.referenceValue), n.key))
        : (r = is(o, n.data.field(s.field))),
      s.dir === 'desc' && (r *= -1),
      r !== 0)
    )
      break;
  }
  return r;
}
function zy(t, e) {
  if (t === null) return e === null;
  if (e === null || t.inclusive !== e.inclusive || t.position.length !== e.position.length)
    return !1;
  for (let n = 0; n < t.position.length; n++) if (!mn(t.position[n], e.position[n])) return !1;
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
 */ class BE {}
class Ve extends BE {
  constructor(e, n, r) {
    super(), (this.field = e), (this.op = n), (this.value = r);
  }
  static create(e, n, r) {
    return e.isKeyField()
      ? n === 'in' || n === 'not-in'
        ? this.createKeyFieldInFilter(e, n, r)
        : new HR(e, n, r)
      : n === 'array-contains'
      ? new qR(e, r)
      : n === 'in'
      ? new GR(e, r)
      : n === 'not-in'
      ? new QR(e, r)
      : n === 'array-contains-any'
      ? new YR(e, r)
      : new Ve(e, n, r);
  }
  static createKeyFieldInFilter(e, n, r) {
    return n === 'in' ? new KR(e, r) : new WR(e, r);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return this.op === '!='
      ? n !== null && this.matchesComparison(is(n, this.value))
      : n !== null && ni(this.value) === ni(n) && this.matchesComparison(is(n, this.value));
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
class gn extends BE {
  constructor(e, n) {
    super(), (this.filters = e), (this.op = n), (this.ft = null);
  }
  static create(e, n) {
    return new gn(e, n);
  }
  matches(e) {
    return HE(this)
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
function HE(t) {
  return t.op === 'and';
}
function KE(t) {
  return BR(t) && HE(t);
}
function BR(t) {
  for (const e of t.filters) if (e instanceof gn) return !1;
  return !0;
}
function uf(t) {
  if (t instanceof Ve) return t.field.canonicalString() + t.op.toString() + ss(t.value);
  if (KE(t)) return t.filters.map((e) => uf(e)).join(',');
  {
    const e = t.filters.map((n) => uf(n)).join(',');
    return `${t.op}(${e})`;
  }
}
function WE(t, e) {
  return t instanceof Ve
    ? (function (n, r) {
        return r instanceof Ve && n.op === r.op && n.field.isEqual(r.field) && mn(n.value, r.value);
      })(t, e)
    : t instanceof gn
    ? (function (n, r) {
        return r instanceof gn && n.op === r.op && n.filters.length === r.filters.length
          ? n.filters.reduce((i, s, o) => i && WE(s, r.filters[o]), !0)
          : !1;
      })(t, e)
    : void J();
}
function qE(t) {
  return t instanceof Ve
    ? (function (e) {
        return `${e.field.canonicalString()} ${e.op} ${ss(e.value)}`;
      })(t)
    : t instanceof gn
    ? (function (e) {
        return e.op.toString() + ' {' + e.getFilters().map(qE).join(' ,') + '}';
      })(t)
    : 'Filter';
}
class HR extends Ve {
  constructor(e, n, r) {
    super(e, n, r), (this.key = K.fromName(r.referenceValue));
  }
  matches(e) {
    const n = K.comparator(e.key, this.key);
    return this.matchesComparison(n);
  }
}
class KR extends Ve {
  constructor(e, n) {
    super(e, 'in', n), (this.keys = GE('in', n));
  }
  matches(e) {
    return this.keys.some((n) => n.isEqual(e.key));
  }
}
class WR extends Ve {
  constructor(e, n) {
    super(e, 'not-in', n), (this.keys = GE('not-in', n));
  }
  matches(e) {
    return !this.keys.some((n) => n.isEqual(e.key));
  }
}
function GE(t, e) {
  var n;
  return (((n = e.arrayValue) === null || n === void 0 ? void 0 : n.values) || []).map((r) =>
    K.fromName(r.referenceValue)
  );
}
class qR extends Ve {
  constructor(e, n) {
    super(e, 'array-contains', n);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return sm(n) && Oo(n.arrayValue, this.value);
  }
}
class GR extends Ve {
  constructor(e, n) {
    super(e, 'in', n);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return n !== null && Oo(this.value.arrayValue, n);
  }
}
class QR extends Ve {
  constructor(e, n) {
    super(e, 'not-in', n);
  }
  matches(e) {
    if (Oo(this.value.arrayValue, { nullValue: 'NULL_VALUE' })) return !1;
    const n = e.data.field(this.field);
    return n !== null && !Oo(this.value.arrayValue, n);
  }
}
class YR extends Ve {
  constructor(e, n) {
    super(e, 'array-contains-any', n);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return (
      !(!sm(n) || !n.arrayValue.values) &&
      n.arrayValue.values.some((r) => Oo(this.value.arrayValue, r))
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
 */ class Xs {
  constructor(e, n = 'asc') {
    (this.field = e), (this.dir = n);
  }
}
function XR(t, e) {
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
    (this.comparator = e), (this.root = n || Xe.EMPTY);
  }
  insert(e, n) {
    return new tt(
      this.comparator,
      this.root.insert(e, n, this.comparator).copy(null, null, Xe.BLACK, null, null)
    );
  }
  remove(e) {
    return new tt(
      this.comparator,
      this.root.remove(e, this.comparator).copy(null, null, Xe.BLACK, null, null)
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
    return new La(this.root, null, this.comparator, !1);
  }
  getIteratorFrom(e) {
    return new La(this.root, e, this.comparator, !1);
  }
  getReverseIterator() {
    return new La(this.root, null, this.comparator, !0);
  }
  getReverseIteratorFrom(e) {
    return new La(this.root, e, this.comparator, !0);
  }
}
class La {
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
class Xe {
  constructor(e, n, r, i, s) {
    (this.key = e),
      (this.value = n),
      (this.color = r ?? Xe.RED),
      (this.left = i ?? Xe.EMPTY),
      (this.right = s ?? Xe.EMPTY),
      (this.size = this.left.size + 1 + this.right.size);
  }
  copy(e, n, r, i, s) {
    return new Xe(e ?? this.key, n ?? this.value, r ?? this.color, i ?? this.left, s ?? this.right);
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
    if (this.left.isEmpty()) return Xe.EMPTY;
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
        if (i.right.isEmpty()) return Xe.EMPTY;
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
    const e = this.copy(null, null, Xe.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, e, null);
  }
  rotateRight() {
    const e = this.copy(null, null, Xe.RED, this.left.right, null);
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
(Xe.EMPTY = null), (Xe.RED = !0), (Xe.BLACK = !1);
Xe.EMPTY = new (class {
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
    return new Xe(t, e);
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
    return new By(this.data.getIterator());
  }
  getIteratorFrom(e) {
    return new By(this.data.getIteratorFrom(e));
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
class By {
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
 */ class Zn {
  constructor(e) {
    (this.fields = e), e.sort(St.comparator);
  }
  static empty() {
    return new Zn([]);
  }
  unionWith(e) {
    let n = new ze(St.comparator);
    for (const r of this.fields) n = n.add(r);
    for (const r of e) n = n.add(r);
    return new Zn(n.toArray());
  }
  covers(e) {
    for (const n of this.fields) if (n.isPrefixOf(e)) return !0;
    return !1;
  }
  isEqual(e) {
    return ns(this.fields, e.fields, (n, r) => n.isEqual(r));
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
 */ class ln {
  constructor(e) {
    this.value = e;
  }
  static empty() {
    return new ln({ mapValue: {} });
  }
  field(e) {
    if (e.isEmpty()) return this.value;
    {
      let n = this.value;
      for (let r = 0; r < e.length - 1; ++r)
        if (((n = (n.mapValue.fields || {})[e.get(r)]), !kh(n))) return null;
      return (n = (n.mapValue.fields || {})[e.lastSegment()]), n || null;
    }
  }
  set(e, n) {
    this.getFieldsMap(e.popLast())[e.lastSegment()] = Ys(n);
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
      o ? (r[a.lastSegment()] = Ys(o)) : i.push(a.lastSegment());
    });
    const s = this.getFieldsMap(n);
    this.applyChanges(s, r, i);
  }
  delete(e) {
    const n = this.field(e.popLast());
    kh(n) && n.mapValue.fields && delete n.mapValue.fields[e.lastSegment()];
  }
  isEqual(e) {
    return mn(this.value, e.value);
  }
  getFieldsMap(e) {
    let n = this.value;
    n.mapValue.fields || (n.mapValue = { fields: {} });
    for (let r = 0; r < e.length; ++r) {
      let i = n.mapValue.fields[e.get(r)];
      (kh(i) && i.mapValue.fields) ||
        ((i = { mapValue: { fields: {} } }), (n.mapValue.fields[e.get(r)] = i)),
        (n = i);
    }
    return n.mapValue.fields;
  }
  applyChanges(e, n, r) {
    dc(n, (i, s) => (e[i] = s));
    for (const i of r) delete e[i];
  }
  clone() {
    return new ln(Ys(this.value));
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
    return new lt(e, 0, X.min(), X.min(), X.min(), ln.empty(), 0);
  }
  static newFoundDocument(e, n, r, i) {
    return new lt(e, 1, n, X.min(), r, i, 0);
  }
  static newNoDocument(e, n) {
    return new lt(e, 2, n, X.min(), X.min(), ln.empty(), 0);
  }
  static newUnknownDocument(e, n) {
    return new lt(e, 3, n, X.min(), X.min(), ln.empty(), 2);
  }
  convertToFoundDocument(e, n) {
    return (
      !this.createTime.isEqual(X.min()) ||
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
      (this.data = ln.empty()),
      (this.documentState = 0),
      this
    );
  }
  convertToUnknownDocument(e) {
    return (
      (this.version = e),
      (this.documentType = 3),
      (this.data = ln.empty()),
      (this.documentState = 2),
      this
    );
  }
  setHasCommittedMutations() {
    return (this.documentState = 2), this;
  }
  setHasLocalMutations() {
    return (this.documentState = 1), (this.version = X.min()), this;
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
 */ class JR {
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
function Hy(t, e = null, n = [], r = [], i = null, s = null, o = null) {
  return new JR(t, e, n, r, i, s, o);
}
function om(t) {
  const e = oe(t);
  if (e._t === null) {
    let n = e.path.canonicalString();
    e.collectionGroup !== null && (n += '|cg:' + e.collectionGroup),
      (n += '|f:'),
      (n += e.filters.map((r) => uf(r)).join(',')),
      (n += '|ob:'),
      (n += e.orderBy
        .map((r) =>
          (function (i) {
            return i.field.canonicalString() + i.dir;
          })(r)
        )
        .join(',')),
      fc(e.limit) || ((n += '|l:'), (n += e.limit)),
      e.startAt &&
        ((n += '|lb:'),
        (n += e.startAt.inclusive ? 'b:' : 'a:'),
        (n += e.startAt.position.map((r) => ss(r)).join(','))),
      e.endAt &&
        ((n += '|ub:'),
        (n += e.endAt.inclusive ? 'a:' : 'b:'),
        (n += e.endAt.position.map((r) => ss(r)).join(','))),
      (e._t = n);
  }
  return e._t;
}
function am(t, e) {
  if (t.limit !== e.limit || t.orderBy.length !== e.orderBy.length) return !1;
  for (let n = 0; n < t.orderBy.length; n++) if (!XR(t.orderBy[n], e.orderBy[n])) return !1;
  if (t.filters.length !== e.filters.length) return !1;
  for (let n = 0; n < t.filters.length; n++) if (!WE(t.filters[n], e.filters[n])) return !1;
  return (
    t.collectionGroup === e.collectionGroup &&
    !!t.path.isEqual(e.path) &&
    !!zy(t.startAt, e.startAt) &&
    zy(t.endAt, e.endAt)
  );
}
function cf(t) {
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
 */ class pc {
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
function ZR(t, e, n, r, i, s, o, a) {
  return new pc(t, e, n, r, i, s, o, a);
}
function QE(t) {
  return new pc(t);
}
function Ky(t) {
  return (
    t.filters.length === 0 &&
    t.limit === null &&
    t.startAt == null &&
    t.endAt == null &&
    (t.explicitOrderBy.length === 0 ||
      (t.explicitOrderBy.length === 1 && t.explicitOrderBy[0].field.isKeyField()))
  );
}
function ex(t) {
  return t.explicitOrderBy.length > 0 ? t.explicitOrderBy[0].field : null;
}
function tx(t) {
  for (const e of t.filters) {
    const n = e.getFirstInequalityField();
    if (n !== null) return n;
  }
  return null;
}
function nx(t) {
  return t.collectionGroup !== null;
}
function Mi(t) {
  const e = oe(t);
  if (e.wt === null) {
    e.wt = [];
    const n = tx(e),
      r = ex(e);
    if (n !== null && r === null)
      n.isKeyField() || e.wt.push(new Xs(n)), e.wt.push(new Xs(St.keyField(), 'asc'));
    else {
      let i = !1;
      for (const s of e.explicitOrderBy) e.wt.push(s), s.field.isKeyField() && (i = !0);
      if (!i) {
        const s =
          e.explicitOrderBy.length > 0
            ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir
            : 'asc';
        e.wt.push(new Xs(St.keyField(), s));
      }
    }
  }
  return e.wt;
}
function Ln(t) {
  const e = oe(t);
  if (!e.gt)
    if (e.limitType === 'F')
      e.gt = Hy(e.path, e.collectionGroup, Mi(e), e.filters, e.limit, e.startAt, e.endAt);
    else {
      const n = [];
      for (const s of Mi(e)) {
        const o = s.dir === 'desc' ? 'asc' : 'desc';
        n.push(new Xs(s.field, o));
      }
      const r = e.endAt ? new Xl(e.endAt.position, e.endAt.inclusive) : null,
        i = e.startAt ? new Xl(e.startAt.position, e.startAt.inclusive) : null;
      e.gt = Hy(e.path, e.collectionGroup, n, e.filters, e.limit, r, i);
    }
  return e.gt;
}
function hf(t, e, n) {
  return new pc(
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
function mc(t, e) {
  return am(Ln(t), Ln(e)) && t.limitType === e.limitType;
}
function YE(t) {
  return `${om(Ln(t))}|lt:${t.limitType}`;
}
function df(t) {
  return `Query(target=${(function (e) {
    let n = e.path.canonicalString();
    return (
      e.collectionGroup !== null && (n += ' collectionGroup=' + e.collectionGroup),
      e.filters.length > 0 && (n += `, filters: [${e.filters.map((r) => qE(r)).join(', ')}]`),
      fc(e.limit) || (n += ', limit: ' + e.limit),
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
        (n += e.startAt.position.map((r) => ss(r)).join(','))),
      e.endAt &&
        ((n += ', endAt: '),
        (n += e.endAt.inclusive ? 'a:' : 'b:'),
        (n += e.endAt.position.map((r) => ss(r)).join(','))),
      `Target(${n})`
    );
  })(Ln(t))}; limitType=${t.limitType})`;
}
function gc(t, e) {
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
      for (const i of Mi(n)) if (!i.field.isKeyField() && r.data.field(i.field) === null) return !1;
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
            const a = jy(i, s, o);
            return i.inclusive ? a <= 0 : a < 0;
          })(n.startAt, Mi(n), r)) ||
        (n.endAt &&
          !(function (i, s, o) {
            const a = jy(i, s, o);
            return i.inclusive ? a >= 0 : a > 0;
          })(n.endAt, Mi(n), r))
      );
    })(t, e)
  );
}
function rx(t) {
  return (
    t.collectionGroup ||
    (t.path.length % 2 == 1 ? t.path.lastSegment() : t.path.get(t.path.length - 2))
  );
}
function XE(t) {
  return (e, n) => {
    let r = !1;
    for (const i of Mi(t)) {
      const s = ix(i, e, n);
      if (s !== 0) return s;
      r = r || i.field.isKeyField();
    }
    return 0;
  };
}
function ix(t, e, n) {
  const r = t.field.isKeyField()
    ? K.comparator(e.key, n.key)
    : (function (i, s, o) {
        const a = s.data.field(i),
          l = o.data.field(i);
        return a !== null && l !== null ? is(a, l) : J();
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
 */ function sx(t, e) {
  if (t.yt) {
    if (isNaN(e)) return { doubleValue: 'NaN' };
    if (e === 1 / 0) return { doubleValue: 'Infinity' };
    if (e === -1 / 0) return { doubleValue: '-Infinity' };
  }
  return { doubleValue: of(e) ? '-0' : e };
}
function ox(t) {
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
 */ class yc {
  constructor() {
    this._ = void 0;
  }
}
function ax(t, e, n) {
  return t instanceof ff
    ? (function (r, i) {
        const s = {
          fields: {
            __type__: { stringValue: 'server_timestamp' },
            __local_write_time__: { timestampValue: { seconds: r.seconds, nanos: r.nanoseconds } }
          }
        };
        return i && (s.fields.__previous_value__ = i), { mapValue: s };
      })(n, e)
    : t instanceof Jl
    ? JE(t, e)
    : t instanceof Zl
    ? ZE(t, e)
    : (function (r, i) {
        const s = ux(r, i),
          o = Wy(s) + Wy(r.It);
        return lf(s) && lf(r.It) ? ox(o) : sx(r.Tt, o);
      })(t, e);
}
function lx(t, e, n) {
  return t instanceof Jl ? JE(t, e) : t instanceof Zl ? ZE(t, e) : n;
}
function ux(t, e) {
  return t instanceof pf
    ? lf((n = e)) ||
      (function (r) {
        return !!r && 'doubleValue' in r;
      })(n)
      ? e
      : { integerValue: 0 }
    : null;
  var n;
}
class ff extends yc {}
class Jl extends yc {
  constructor(e) {
    super(), (this.elements = e);
  }
}
function JE(t, e) {
  const n = eS(e);
  for (const r of t.elements) n.some((i) => mn(i, r)) || n.push(r);
  return { arrayValue: { values: n } };
}
class Zl extends yc {
  constructor(e) {
    super(), (this.elements = e);
  }
}
function ZE(t, e) {
  let n = eS(e);
  for (const r of t.elements) n = n.filter((i) => !mn(i, r));
  return { arrayValue: { values: n } };
}
class pf extends yc {
  constructor(e, n) {
    super(), (this.Tt = e), (this.It = n);
  }
}
function Wy(t) {
  return $e(t.integerValue || t.doubleValue);
}
function eS(t) {
  return sm(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
}
function cx(t, e) {
  return (
    t.field.isEqual(e.field) &&
    (function (n, r) {
      return (n instanceof Jl && r instanceof Jl) || (n instanceof Zl && r instanceof Zl)
        ? ns(n.elements, r.elements, mn)
        : n instanceof pf && r instanceof pf
        ? mn(n.It, r.It)
        : n instanceof ff && r instanceof ff;
    })(t.transform, e.transform)
  );
}
class Hr {
  constructor(e, n) {
    (this.updateTime = e), (this.exists = n);
  }
  static none() {
    return new Hr();
  }
  static exists(e) {
    return new Hr(void 0, e);
  }
  static updateTime(e) {
    return new Hr(e);
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
function Ya(t, e) {
  return t.updateTime !== void 0
    ? e.isFoundDocument() && e.version.isEqual(t.updateTime)
    : t.exists === void 0 || t.exists === e.isFoundDocument();
}
class lm {}
function tS(t, e) {
  if (!t.hasLocalMutations || (e && e.fields.length === 0)) return null;
  if (e === null)
    return t.isNoDocument() ? new dx(t.key, Hr.none()) : new um(t.key, t.data, Hr.none());
  {
    const n = t.data,
      r = ln.empty();
    let i = new ze(St.comparator);
    for (let s of e.fields)
      if (!i.has(s)) {
        let o = n.field(s);
        o === null && s.length > 1 && ((s = s.popLast()), (o = n.field(s))),
          o === null ? r.delete(s) : r.set(s, o),
          (i = i.add(s));
      }
    return new vc(t.key, r, new Zn(i.toArray()), Hr.none());
  }
}
function hx(t, e, n) {
  t instanceof um
    ? (function (r, i, s) {
        const o = r.value.clone(),
          a = Gy(r.fieldTransforms, i, s.transformResults);
        o.setAll(a), i.convertToFoundDocument(s.version, o).setHasCommittedMutations();
      })(t, e, n)
    : t instanceof vc
    ? (function (r, i, s) {
        if (!Ya(r.precondition, i)) return void i.convertToUnknownDocument(s.version);
        const o = Gy(r.fieldTransforms, i, s.transformResults),
          a = i.data;
        a.setAll(nS(r)),
          a.setAll(o),
          i.convertToFoundDocument(s.version, a).setHasCommittedMutations();
      })(t, e, n)
    : (function (r, i, s) {
        i.convertToNoDocument(s.version).setHasCommittedMutations();
      })(0, e, n);
}
function Js(t, e, n, r) {
  return t instanceof um
    ? (function (i, s, o, a) {
        if (!Ya(i.precondition, s)) return o;
        const l = i.value.clone(),
          u = Qy(i.fieldTransforms, a, s);
        return l.setAll(u), s.convertToFoundDocument(s.version, l).setHasLocalMutations(), null;
      })(t, e, n, r)
    : t instanceof vc
    ? (function (i, s, o, a) {
        if (!Ya(i.precondition, s)) return o;
        const l = Qy(i.fieldTransforms, a, s),
          u = s.data;
        return (
          u.setAll(nS(i)),
          u.setAll(l),
          s.convertToFoundDocument(s.version, u).setHasLocalMutations(),
          o === null
            ? null
            : o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((c) => c.field))
        );
      })(t, e, n, r)
    : (function (i, s, o) {
        return Ya(i.precondition, s)
          ? (s.convertToNoDocument(s.version).setHasLocalMutations(), null)
          : o;
      })(t, e, n);
}
function qy(t, e) {
  return (
    t.type === e.type &&
    !!t.key.isEqual(e.key) &&
    !!t.precondition.isEqual(e.precondition) &&
    !!(function (n, r) {
      return (n === void 0 && r === void 0) || (!(!n || !r) && ns(n, r, (i, s) => cx(i, s)));
    })(t.fieldTransforms, e.fieldTransforms) &&
    (t.type === 0
      ? t.value.isEqual(e.value)
      : t.type !== 1 || (t.data.isEqual(e.data) && t.fieldMask.isEqual(e.fieldMask)))
  );
}
class um extends lm {
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
let vc = class extends lm {
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
function nS(t) {
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
function Gy(t, e, n) {
  const r = new Map();
  Fe(t.length === n.length);
  for (let i = 0; i < n.length; i++) {
    const s = t[i],
      o = s.transform,
      a = e.data.field(s.field);
    r.set(s.field, lx(o, a, n[i]));
  }
  return r;
}
function Qy(t, e, n) {
  const r = new Map();
  for (const i of t) {
    const s = i.transform,
      o = n.data.field(i.field);
    r.set(i.field, ax(s, o, e));
  }
  return r;
}
class dx extends lm {
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
 */ class fx {
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
function rS(t) {
  if (t === void 0) return Pn('GRPC error has no .code'), P.UNKNOWN;
  switch (t) {
    case Le.OK:
      return P.OK;
    case Le.CANCELLED:
      return P.CANCELLED;
    case Le.UNKNOWN:
      return P.UNKNOWN;
    case Le.DEADLINE_EXCEEDED:
      return P.DEADLINE_EXCEEDED;
    case Le.RESOURCE_EXHAUSTED:
      return P.RESOURCE_EXHAUSTED;
    case Le.INTERNAL:
      return P.INTERNAL;
    case Le.UNAVAILABLE:
      return P.UNAVAILABLE;
    case Le.UNAUTHENTICATED:
      return P.UNAUTHENTICATED;
    case Le.INVALID_ARGUMENT:
      return P.INVALID_ARGUMENT;
    case Le.NOT_FOUND:
      return P.NOT_FOUND;
    case Le.ALREADY_EXISTS:
      return P.ALREADY_EXISTS;
    case Le.PERMISSION_DENIED:
      return P.PERMISSION_DENIED;
    case Le.FAILED_PRECONDITION:
      return P.FAILED_PRECONDITION;
    case Le.ABORTED:
      return P.ABORTED;
    case Le.OUT_OF_RANGE:
      return P.OUT_OF_RANGE;
    case Le.UNIMPLEMENTED:
      return P.UNIMPLEMENTED;
    case Le.DATA_LOSS:
      return P.DATA_LOSS;
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
 */ class ms {
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
    dc(this.inner, (n, r) => {
      for (const [i, s] of r) e(i, s);
    });
  }
  isEmpty() {
    return UR(this.inner);
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
 */ const px = new tt(K.comparator);
function Sr() {
  return px;
}
const iS = new tt(K.comparator);
function Us(...t) {
  let e = iS;
  for (const n of t) e = e.insert(n.key, n);
  return e;
}
function mx(t) {
  let e = iS;
  return t.forEach((n, r) => (e = e.insert(n, r.overlayedDocument))), e;
}
function Mr() {
  return Zs();
}
function sS() {
  return Zs();
}
function Zs() {
  return new ms(
    (t) => t.toString(),
    (t, e) => t.isEqual(e)
  );
}
const gx = new ze(K.comparator);
function ie(...t) {
  let e = gx;
  for (const n of t) e = e.add(n);
  return e;
}
const yx = new ze(ue);
function oS() {
  return yx;
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
 */ class wc {
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
      i.set(e, ea.createSynthesizedTargetChangeForCurrentChange(e, n, r)),
      new wc(X.min(), i, oS(), Sr(), ie())
    );
  }
}
class ea {
  constructor(e, n, r, i, s) {
    (this.resumeToken = e),
      (this.current = n),
      (this.addedDocuments = r),
      (this.modifiedDocuments = i),
      (this.removedDocuments = s);
  }
  static createSynthesizedTargetChangeForCurrentChange(e, n, r) {
    return new ea(r, n, ie(), ie(), ie());
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
 */ class Xa {
  constructor(e, n, r, i) {
    (this.Et = e), (this.removedTargetIds = n), (this.key = r), (this.At = i);
  }
}
class aS {
  constructor(e, n) {
    (this.targetId = e), (this.Rt = n);
  }
}
class lS {
  constructor(e, n, r = ft.EMPTY_BYTE_STRING, i = null) {
    (this.state = e), (this.targetIds = n), (this.resumeToken = r), (this.cause = i);
  }
}
class Yy {
  constructor() {
    (this.bt = 0),
      (this.vt = Jy()),
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
      new ea(this.Pt, this.Vt, e, n, r)
    );
  }
  kt() {
    (this.St = !1), (this.vt = Jy());
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
class vx {
  constructor(e) {
    (this.Lt = e),
      (this.qt = new Map()),
      (this.Ut = Sr()),
      (this.Kt = Xy()),
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
      if (cf(s))
        if (r === 0) {
          const o = new K(s.path);
          this.zt(n, o, lt.newNoDocument(o, X.min()));
        } else Fe(r === 1);
      else this.te(n) !== r && (this.Yt(n), (this.Gt = this.Gt.add(n)));
    }
  }
  ee(e) {
    const n = new Map();
    this.qt.forEach((s, o) => {
      const a = this.Xt(o);
      if (a) {
        if (s.current && cf(a.target)) {
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
    const i = new wc(e, n, this.Gt, this.Ut, r);
    return (this.Ut = Sr()), (this.Kt = Xy()), (this.Gt = new ze(ue)), i;
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
    return n || ((n = new Yy()), this.qt.set(e, n)), n;
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
    this.qt.set(e, new Yy()),
      this.Lt.getRemoteKeysForTarget(e).forEach((n) => {
        this.zt(e, n, null);
      });
  }
  ne(e, n) {
    return this.Lt.getRemoteKeysForTarget(e).has(n);
  }
}
function Xy() {
  return new tt(K.comparator);
}
function Jy() {
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
 */ const wx = (() => ({ asc: 'ASCENDING', desc: 'DESCENDING' }))(),
  Ex = (() => ({
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
  Sx = (() => ({ and: 'AND', or: 'OR' }))();
class _x {
  constructor(e, n) {
    (this.databaseId = e), (this.yt = n);
  }
}
function Tx(t, e) {
  return t.yt
    ? `${new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, '').replace('Z', '')}.${(
        '000000000' + e.nanoseconds
      ).slice(-9)}Z`
    : { seconds: '' + e.seconds, nanos: e.nanoseconds };
}
function Ix(t, e) {
  return t.yt ? e.toBase64() : e.toUint8Array();
}
function Fi(t) {
  return (
    Fe(!!t),
    X.fromTimestamp(
      (function (e) {
        const n = Er(e);
        return new Ct(n.seconds, n.nanos);
      })(t)
    )
  );
}
function kx(t, e) {
  return (function (n) {
    return new Re(['projects', n.projectId, 'databases', n.database]);
  })(t)
    .child('documents')
    .child(e)
    .canonicalString();
}
function uS(t) {
  const e = Re.fromString(t);
  return Fe(fS(e)), e;
}
function Ch(t, e) {
  const n = uS(e);
  if (n.get(1) !== t.databaseId.projectId)
    throw new G(
      P.INVALID_ARGUMENT,
      'Tried to deserialize key from different project: ' +
        n.get(1) +
        ' vs ' +
        t.databaseId.projectId
    );
  if (n.get(3) !== t.databaseId.database)
    throw new G(
      P.INVALID_ARGUMENT,
      'Tried to deserialize key from different database: ' +
        n.get(3) +
        ' vs ' +
        t.databaseId.database
    );
  return new K(cS(n));
}
function mf(t, e) {
  return kx(t.databaseId, e);
}
function Cx(t) {
  const e = uS(t);
  return e.length === 4 ? Re.emptyPath() : cS(e);
}
function Zy(t) {
  return new Re([
    'projects',
    t.databaseId.projectId,
    'databases',
    t.databaseId.database
  ]).canonicalString();
}
function cS(t) {
  return Fe(t.length > 4 && t.get(4) === 'documents'), t.popFirst(5);
}
function Ax(t, e) {
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
          const u = l.code === void 0 ? P.UNKNOWN : rS(l.code);
          return new G(u, l.message || '');
        })(o);
    n = new lS(r, i, s, a || null);
  } else if ('documentChange' in e) {
    e.documentChange;
    const r = e.documentChange;
    r.document, r.document.name, r.document.updateTime;
    const i = Ch(t, r.document.name),
      s = Fi(r.document.updateTime),
      o = r.document.createTime ? Fi(r.document.createTime) : X.min(),
      a = new ln({ mapValue: { fields: r.document.fields } }),
      l = lt.newFoundDocument(i, s, o, a),
      u = r.targetIds || [],
      c = r.removedTargetIds || [];
    n = new Xa(u, c, l.key, l);
  } else if ('documentDelete' in e) {
    e.documentDelete;
    const r = e.documentDelete;
    r.document;
    const i = Ch(t, r.document),
      s = r.readTime ? Fi(r.readTime) : X.min(),
      o = lt.newNoDocument(i, s),
      a = r.removedTargetIds || [];
    n = new Xa([], a, o.key, o);
  } else if ('documentRemove' in e) {
    e.documentRemove;
    const r = e.documentRemove;
    r.document;
    const i = Ch(t, r.document),
      s = r.removedTargetIds || [];
    n = new Xa([], s, i, null);
  } else {
    if (!('filter' in e)) return J();
    {
      e.filter;
      const r = e.filter;
      r.targetId;
      const i = r.count || 0,
        s = new fx(i),
        o = r.targetId;
      n = new aS(o, s);
    }
  }
  return n;
}
function Nx(t, e) {
  return { documents: [mf(t, e.path)] };
}
function Rx(t, e) {
  const n = { structuredQuery: {} },
    r = e.path;
  e.collectionGroup !== null
    ? ((n.parent = mf(t, r)),
      (n.structuredQuery.from = [{ collectionId: e.collectionGroup, allDescendants: !0 }]))
    : ((n.parent = mf(t, r.popLast())),
      (n.structuredQuery.from = [{ collectionId: r.lastSegment() }]));
  const i = (function (l) {
    if (l.length !== 0) return dS(gn.create(l, 'and'));
  })(e.filters);
  i && (n.structuredQuery.where = i);
  const s = (function (l) {
    if (l.length !== 0)
      return l.map((u) =>
        (function (c) {
          return { field: hi(c.field), direction: Ox(c.dir) };
        })(u)
      );
  })(e.orderBy);
  s && (n.structuredQuery.orderBy = s);
  const o = (function (l, u) {
    return l.yt || fc(u) ? u : { value: u };
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
function xx(t) {
  let e = Cx(t.parent);
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
      const h = hS(c);
      return h instanceof gn && KE(h) ? h.getFilters() : [h];
    })(n.where));
  let o = [];
  n.orderBy &&
    (o = n.orderBy.map((c) =>
      (function (h) {
        return new Xs(
          di(h.field),
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
      return (h = typeof c == 'object' ? c.value : c), fc(h) ? null : h;
    })(n.limit));
  let l = null;
  n.startAt &&
    (l = (function (c) {
      const h = !!c.before,
        d = c.values || [];
      return new Xl(d, h);
    })(n.startAt));
  let u = null;
  return (
    n.endAt &&
      (u = (function (c) {
        const h = !c.before,
          d = c.values || [];
        return new Xl(d, h);
      })(n.endAt)),
    ZR(e, i, o, s, a, 'F', l, u)
  );
}
function Dx(t, e) {
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
function hS(t) {
  return t.unaryFilter !== void 0
    ? (function (e) {
        switch (e.unaryFilter.op) {
          case 'IS_NAN':
            const n = di(e.unaryFilter.field);
            return Ve.create(n, '==', { doubleValue: NaN });
          case 'IS_NULL':
            const r = di(e.unaryFilter.field);
            return Ve.create(r, '==', { nullValue: 'NULL_VALUE' });
          case 'IS_NOT_NAN':
            const i = di(e.unaryFilter.field);
            return Ve.create(i, '!=', { doubleValue: NaN });
          case 'IS_NOT_NULL':
            const s = di(e.unaryFilter.field);
            return Ve.create(s, '!=', { nullValue: 'NULL_VALUE' });
          default:
            return J();
        }
      })(t)
    : t.fieldFilter !== void 0
    ? (function (e) {
        return Ve.create(
          di(e.fieldFilter.field),
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
        return gn.create(
          e.compositeFilter.filters.map((n) => hS(n)),
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
function Ox(t) {
  return wx[t];
}
function Px(t) {
  return Ex[t];
}
function Lx(t) {
  return Sx[t];
}
function hi(t) {
  return { fieldPath: t.canonicalString() };
}
function di(t) {
  return St.fromServerFormat(t.fieldPath);
}
function dS(t) {
  return t instanceof Ve
    ? (function (e) {
        if (e.op === '==') {
          if (Vy(e.value)) return { unaryFilter: { field: hi(e.field), op: 'IS_NAN' } };
          if (Uy(e.value)) return { unaryFilter: { field: hi(e.field), op: 'IS_NULL' } };
        } else if (e.op === '!=') {
          if (Vy(e.value)) return { unaryFilter: { field: hi(e.field), op: 'IS_NOT_NAN' } };
          if (Uy(e.value)) return { unaryFilter: { field: hi(e.field), op: 'IS_NOT_NULL' } };
        }
        return { fieldFilter: { field: hi(e.field), op: Px(e.op), value: e.value } };
      })(t)
    : t instanceof gn
    ? (function (e) {
        const n = e.getFilters().map((r) => dS(r));
        return n.length === 1 ? n[0] : { compositeFilter: { op: Lx(e.op), filters: n } };
      })(t)
    : J();
}
function fS(t) {
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
 */ class $x {
  constructor(e, n, r, i) {
    (this.batchId = e), (this.localWriteTime = n), (this.baseMutations = r), (this.mutations = i);
  }
  applyToRemoteDocument(e, n) {
    const r = n.mutationResults;
    for (let i = 0; i < this.mutations.length; i++) {
      const s = this.mutations[i];
      s.key.isEqual(e.key) && hx(s, e, r[i]);
    }
  }
  applyToLocalView(e, n) {
    for (const r of this.baseMutations)
      r.key.isEqual(e.key) && (n = Js(r, e, n, this.localWriteTime));
    for (const r of this.mutations) r.key.isEqual(e.key) && (n = Js(r, e, n, this.localWriteTime));
    return n;
  }
  applyToLocalDocumentSet(e, n) {
    const r = sS();
    return (
      this.mutations.forEach((i) => {
        const s = e.get(i.key),
          o = s.overlayedDocument;
        let a = this.applyToLocalView(o, s.mutatedFields);
        a = n.has(i.key) ? null : a;
        const l = tS(o, a);
        l !== null && r.set(i.key, l), o.isValidDocument() || o.convertToNoDocument(X.min());
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
      ns(this.mutations, e.mutations, (n, r) => qy(n, r)) &&
      ns(this.baseMutations, e.baseMutations, (n, r) => qy(n, r))
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
 */ class bx {
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
 */ class Kr {
  constructor(e, n, r, i, s = X.min(), o = X.min(), a = ft.EMPTY_BYTE_STRING) {
    (this.target = e),
      (this.targetId = n),
      (this.purpose = r),
      (this.sequenceNumber = i),
      (this.snapshotVersion = s),
      (this.lastLimboFreeSnapshotVersion = o),
      (this.resumeToken = a);
  }
  withSequenceNumber(e) {
    return new Kr(
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
    return new Kr(
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
    return new Kr(
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
 */ class Mx {
  constructor(e) {
    this.oe = e;
  }
}
function Fx(t) {
  const e = xx({ parent: t.parent, structuredQuery: t.structuredQuery });
  return t.limitType === 'LAST' ? hf(e, e.limit, 'L') : e;
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
 */ class Ux {
  constructor() {
    this.Ze = new Vx();
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
    return C.resolve(wr.min());
  }
  getMinOffsetFromCollectionGroup(e, n) {
    return C.resolve(wr.min());
  }
  updateCollectionGroup(e, n, r) {
    return C.resolve();
  }
  updateIndexEntries(e, n) {
    return C.resolve();
  }
}
class Vx {
  constructor() {
    this.index = {};
  }
  add(e) {
    const n = e.lastSegment(),
      r = e.popLast(),
      i = this.index[n] || new ze(Re.comparator),
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
    return (this.index[e] || new ze(Re.comparator)).toArray();
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
 */ class os {
  constructor(e) {
    this.Pn = e;
  }
  next() {
    return (this.Pn += 2), this.Pn;
  }
  static Vn() {
    return new os(0);
  }
  static Sn() {
    return new os(-1);
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
 */ class jx {
  constructor() {
    (this.changes = new ms(
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
 */ class zx {
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
 */ class Bx {
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
      .next((i) => (r !== null && Js(r.mutation, i, Zn.empty(), Ct.now()), i));
  }
  getDocuments(e, n) {
    return this.remoteDocumentCache
      .getEntries(e, n)
      .next((r) => this.getLocalViewOfDocuments(e, r, ie()).next(() => r));
  }
  getLocalViewOfDocuments(e, n, r = ie()) {
    const i = Mr();
    return this.populateOverlays(e, i, n).next(() =>
      this.computeViews(e, n, i, r).next((s) => {
        let o = Us();
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
    const r = Mr();
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
    let s = Sr();
    const o = Zs(),
      a = Zs();
    return (
      n.forEach((l, u) => {
        const c = r.get(u.key);
        i.has(u.key) && (c === void 0 || c.mutation instanceof vc)
          ? (s = s.insert(u.key, u))
          : c !== void 0
          ? (o.set(u.key, c.mutation.getFieldMask()),
            Js(c.mutation, u, c.mutation.getFieldMask(), Ct.now()))
          : o.set(u.key, Zn.empty());
      }),
      this.recalculateAndSaveOverlays(e, s).next(
        (l) => (
          l.forEach((u, c) => o.set(u, c)),
          n.forEach((u, c) => {
            var h;
            return a.set(u, new zx(c, (h = o.get(u)) !== null && h !== void 0 ? h : null));
          }),
          a
        )
      )
    );
  }
  recalculateAndSaveOverlays(e, n) {
    const r = Zs();
    let i = new tt((o, a) => o - a),
      s = ie();
    return this.mutationQueue
      .getAllMutationBatchesAffectingDocumentKeys(e, n)
      .next((o) => {
        for (const a of o)
          a.keys().forEach((l) => {
            const u = n.get(l);
            if (u === null) return;
            let c = r.get(l) || Zn.empty();
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
            h = sS();
          c.forEach((d) => {
            if (!s.has(d)) {
              const m = tS(n.get(d), r.get(d));
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
      : nx(n)
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
          : C.resolve(Mr());
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
          .next((c) => ({ batchId: a, changes: mx(c) }))
      );
    });
  }
  getDocumentsMatchingDocumentQuery(e, n) {
    return this.getDocument(e, new K(n)).next((r) => {
      let i = Us();
      return r.isFoundDocument() && (i = i.insert(r.key, r)), i;
    });
  }
  getDocumentsMatchingCollectionGroupQuery(e, n, r) {
    const i = n.collectionGroup;
    let s = Us();
    return this.indexManager.getCollectionParents(e, i).next((o) =>
      C.forEach(o, (a) => {
        const l = (function (u, c) {
          return new pc(
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
        let o = Us();
        return (
          s.forEach((a, l) => {
            const u = i.get(a);
            u !== void 0 && Js(u.mutation, l, Zn.empty(), Ct.now()),
              gc(n, l) && (o = o.insert(a, l));
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
 */ class Hx {
  constructor(e) {
    (this.Tt = e), (this.es = new Map()), (this.ns = new Map());
  }
  getBundleMetadata(e, n) {
    return C.resolve(this.es.get(n));
  }
  saveBundleMetadata(e, n) {
    var r;
    return (
      this.es.set(n.id, { id: (r = n).id, version: r.version, createTime: Fi(r.createTime) }),
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
          return { name: r.name, query: Fx(r.bundledQuery), readTime: Fi(r.readTime) };
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
 */ class Kx {
  constructor() {
    (this.overlays = new tt(K.comparator)), (this.ss = new Map());
  }
  getOverlay(e, n) {
    return C.resolve(this.overlays.get(n));
  }
  getOverlays(e, n) {
    const r = Mr();
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
    const i = Mr(),
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
        c === null && ((c = Mr()), (s = s.insert(u.largestBatchId, c))), c.set(u.getKey(), u);
      }
    }
    const a = Mr(),
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
    this.overlays = this.overlays.insert(r.key, new bx(n, r));
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
 */ class cm {
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
    const n = new K(new Re([])),
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
    const n = new K(new Re([])),
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
 */ class Wx {
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
    const o = new $x(s, n, r, i);
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
 */ class qx {
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
    let r = Sr();
    return (
      n.forEach((i) => {
        const s = this.docs.get(i);
        r = r.insert(i, s ? s.document.mutableCopy() : lt.newInvalidDocument(i));
      }),
      C.resolve(r)
    );
  }
  getDocumentsMatchingQuery(e, n, r, i) {
    let s = Sr();
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
        $R(LR(c), r) <= 0 ||
        ((i.has(c.key) || gc(n, c)) && (s = s.insert(c.key, c.mutableCopy())));
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
    return new Gx(this);
  }
  getSize(e) {
    return C.resolve(this.size);
  }
}
class Gx extends jx {
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
 */ class Qx {
  constructor(e) {
    (this.persistence = e),
      (this.vs = new ms((n) => om(n), am)),
      (this.lastRemoteSnapshotVersion = X.min()),
      (this.highestTargetId = 0),
      (this.Ps = 0),
      (this.Vs = new cm()),
      (this.targetCount = 0),
      (this.Ss = os.Vn());
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
    n > this.highestTargetId && ((this.Ss = new os(n)), (this.highestTargetId = n)),
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
 */ class Yx {
  constructor(e, n) {
    (this.Ds = {}),
      (this.overlays = {}),
      (this.Cs = new im(0)),
      (this.xs = !1),
      (this.xs = !0),
      (this.referenceDelegate = e(this)),
      (this.Ns = new Qx(this)),
      (this.indexManager = new Ux()),
      (this.remoteDocumentCache = (function (r) {
        return new qx(r);
      })((r) => this.referenceDelegate.ks(r))),
      (this.Tt = new Mx(n)),
      (this.Os = new Hx(this.Tt));
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
    return n || ((n = new Kx()), (this.overlays[e.toKey()] = n)), n;
  }
  getMutationQueue(e, n) {
    let r = this.Ds[e.toKey()];
    return r || ((r = new Wx(n, this.referenceDelegate)), (this.Ds[e.toKey()] = r)), r;
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
    const i = new Xx(this.Cs.next());
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
class Xx extends MR {
  constructor(e) {
    super(), (this.currentSequenceNumber = e);
  }
}
class hm {
  constructor(e) {
    (this.persistence = e), (this.Bs = new cm()), (this.Ls = null);
  }
  static qs(e) {
    return new hm(e);
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
        s || n.removeEntry(i, X.min());
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
 */ class dm {
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
    return new dm(e, n.fromCache, r, i);
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
 */ class Jx {
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
    if (Ky(n)) return C.resolve(null);
    let r = Ln(n);
    return this.indexManager.getIndexType(e, r).next((i) =>
      i === 0
        ? null
        : (n.limit !== null && i === 1 && ((n = hf(n, null, 'F')), (r = Ln(n))),
          this.indexManager.getDocumentsMatchingTarget(e, r).next((s) => {
            const o = ie(...s);
            return this.Oi.getDocuments(e, o).next((a) =>
              this.indexManager.getMinOffset(e, r).next((l) => {
                const u = this.Bi(n, a);
                return this.Li(n, u, o, l.readTime)
                  ? this.Mi(e, hf(n, null, 'F'))
                  : this.qi(e, u, n, l);
              })
            );
          }))
    );
  }
  Fi(e, n, r, i) {
    return Ky(n) || i.isEqual(X.min())
      ? this.$i(e, n)
      : this.Oi.getDocuments(e, r).next((s) => {
          const o = this.Bi(n, s);
          return this.Li(n, o, r, i)
            ? this.$i(e, n)
            : (by() <= ae.DEBUG &&
                V(
                  'QueryEngine',
                  'Re-using previous result from %s to execute query: %s',
                  i.toString(),
                  df(n)
                ),
              this.qi(e, o, n, PR(i, -1)));
        });
  }
  Bi(e, n) {
    let r = new ze(XE(e));
    return (
      n.forEach((i, s) => {
        gc(e, s) && (r = r.add(s));
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
      by() <= ae.DEBUG && V('QueryEngine', 'Using full collection scan to execute query:', df(n)),
      this.Oi.getDocumentsMatchingQuery(e, n, wr.min())
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
 */ class Zx {
  constructor(e, n, r, i) {
    (this.persistence = e),
      (this.Ui = n),
      (this.Tt = i),
      (this.Ki = new tt(ue)),
      (this.Gi = new ms((s) => om(s), am)),
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
      (this.localDocuments = new Bx(
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
function eD(t, e, n, r) {
  return new Zx(t, e, n, r);
}
async function pS(t, e) {
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
function mS(t) {
  const e = oe(t);
  return e.persistence.runTransaction('Get last remote snapshot version', 'readonly', (n) =>
    e.Ns.getLastRemoteSnapshotVersion(n)
  );
}
function tD(t, e) {
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
              .withResumeToken(ft.EMPTY_BYTE_STRING, X.min())
              .withLastLimboFreeSnapshotVersion(X.min()))
          : c.resumeToken.approximateByteSize() > 0 && (m = m.withResumeToken(c.resumeToken, r)),
          (i = i.insert(h, m)),
          (function (y, v, S) {
            return y.resumeToken.approximateByteSize() === 0 ||
              v.snapshotVersion.toMicroseconds() - y.snapshotVersion.toMicroseconds() >= 3e8
              ? !0
              : S.addedDocuments.size + S.modifiedDocuments.size + S.removedDocuments.size > 0;
          })(d, m, c) && a.push(n.Ns.updateTargetData(s, m));
      });
      let l = Sr(),
        u = ie();
      if (
        (e.documentUpdates.forEach((c) => {
          e.resolvedLimboDocuments.has(c) &&
            a.push(n.persistence.referenceDelegate.updateLimboDocument(s, c));
        }),
        a.push(
          nD(s, o, e.documentUpdates).next((c) => {
            (l = c.Hi), (u = c.Ji);
          })
        ),
        !r.isEqual(X.min()))
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
function nD(t, e, n) {
  let r = ie(),
    i = ie();
  return (
    n.forEach((s) => (r = r.add(s))),
    e.getEntries(t, r).next((s) => {
      let o = Sr();
      return (
        n.forEach((a, l) => {
          const u = s.get(a);
          l.isFoundDocument() !== u.isFoundDocument() && (i = i.add(a)),
            l.isNoDocument() && l.version.isEqual(X.min())
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
function rD(t, e) {
  const n = oe(t);
  return n.persistence
    .runTransaction('Allocate target', 'readwrite', (r) => {
      let i;
      return n.Ns.getTargetData(r, e).next((s) =>
        s
          ? ((i = s), C.resolve(i))
          : n.Ns.allocateTargetId(r).next(
              (o) => (
                (i = new Kr(e, o, 0, r.currentSequenceNumber)),
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
async function gf(t, e, n) {
  const r = oe(t),
    i = r.Ki.get(e),
    s = n ? 'readwrite' : 'readwrite-primary';
  try {
    n ||
      (await r.persistence.runTransaction('Release target', s, (o) =>
        r.persistence.referenceDelegate.removeTarget(o, i)
      ));
  } catch (o) {
    if (!Zo(o)) throw o;
    V('LocalStore', `Failed to update sequence numbers for target ${e}: ${o}`);
  }
  (r.Ki = r.Ki.remove(e)), r.Gi.delete(i.target);
}
function ev(t, e, n) {
  const r = oe(t);
  let i = X.min(),
    s = ie();
  return r.persistence.runTransaction('Execute query', 'readonly', (o) =>
    (function (a, l, u) {
      const c = oe(a),
        h = c.Gi.get(u);
      return h !== void 0 ? C.resolve(c.Ki.get(h)) : c.Ns.getTargetData(l, u);
    })(r, o, Ln(e))
      .next((a) => {
        if (a)
          return (
            (i = a.lastLimboFreeSnapshotVersion),
            r.Ns.getMatchingKeysForTargetId(o, a.targetId).next((l) => {
              s = l;
            })
          );
      })
      .next(() => r.Ui.getDocumentsMatchingQuery(o, e, n ? i : X.min(), n ? s : ie()))
      .next((a) => (iD(r, rx(e), a), { documents: a, Yi: s }))
  );
}
function iD(t, e, n) {
  let r = t.Qi.get(e) || X.min();
  n.forEach((i, s) => {
    s.readTime.compareTo(r) > 0 && (r = s.readTime);
  }),
    t.Qi.set(e, r);
}
class tv {
  constructor() {
    this.activeTargetIds = oS();
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
class sD {
  constructor() {
    (this.Ur = new tv()),
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
    return (this.Ur = new tv()), Promise.resolve();
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
 */ class oD {
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
 */ class nv {
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
 */ const aD = {
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
 */ class lD {
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
 */ class uD extends class {
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
          throw (sf('RestConnection', `${e} failed with error: `, l, 'url: ', o, 'request:', r), l);
        }
      )
    );
  }
  mo(e, n, r, i, s, o) {
    return this.lo(e, n, r, i, s);
  }
  _o(e, n, r) {
    (e['X-Goog-Api-Client'] = 'gl-js/ fire/' + ps),
      (e['Content-Type'] = 'text/plain'),
      this.databaseInfo.appId && (e['X-Firebase-GMPID'] = this.databaseInfo.appId),
      n && n.headers.forEach((i, s) => (e[s] = i)),
      r && r.headers.forEach((i, s) => (e[s] = i));
  }
  fo(e, n) {
    const r = aD[e];
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
      const a = new _R();
      a.setWithCredentials(!0),
        a.listenOnce(wR.COMPLETE, () => {
          try {
            switch (a.getLastErrorCode()) {
              case Ih.NO_ERROR:
                const u = a.getResponseJson();
                V('Connection', 'XHR received:', JSON.stringify(u)), s(u);
                break;
              case Ih.TIMEOUT:
                V('Connection', 'RPC "' + e + '" timed out'),
                  o(new G(P.DEADLINE_EXCEEDED, 'Request time out'));
                break;
              case Ih.HTTP_ERROR:
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
                      return Object.values(P).indexOf(v) >= 0 ? v : P.UNKNOWN;
                    })(d.status);
                    o(new G(m, d.message));
                  } else o(new G(P.UNKNOWN, 'Server responded with status ' + a.getStatus()));
                } else o(new G(P.UNAVAILABLE, 'Connection failed.'));
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
      s = yR(),
      o = vR(),
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
    this.useFetchStreams && (a.xmlHttpFactory = new SR({})),
      this._o(a.initMessageHeaders, n, r),
      (a.encodeInitMessageHeaders = !0);
    const l = i.join('');
    V('Connection', 'Creating WebChannel: ' + l, a);
    const u = s.createWebChannel(l, a);
    let c = !1,
      h = !1;
    const d = new lD({
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
      m(u, Oa.EventType.OPEN, () => {
        h || V('Connection', 'WebChannel transport opened.');
      }),
      m(u, Oa.EventType.CLOSE, () => {
        h || ((h = !0), V('Connection', 'WebChannel transport closed'), d.oo());
      }),
      m(u, Oa.EventType.ERROR, (y) => {
        h ||
          ((h = !0),
          sf('Connection', 'WebChannel transport errored:', y),
          d.oo(new G(P.UNAVAILABLE, 'The operation could not be completed')));
      }),
      m(u, Oa.EventType.MESSAGE, (y) => {
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
                if (x !== void 0) return rS(x);
              })(g),
              _ = f.message;
            E === void 0 &&
              ((E = P.INTERNAL), (_ = 'Unknown error status: ' + g + ' with message ' + f.message)),
              (h = !0),
              d.oo(new G(E, _)),
              u.close();
          } else V('Connection', 'WebChannel received:', S), d.uo(S);
        }
      }),
      m(o, ER.STAT_EVENT, (y) => {
        y.stat === Ly.PROXY
          ? V('Connection', 'Detected buffering proxy')
          : y.stat === Ly.NOPROXY && V('Connection', 'Detected no buffering proxy');
      }),
      setTimeout(() => {
        d.ro();
      }, 0),
      d
    );
  }
}
function Ah() {
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
 */ function gS(t) {
  return new _x(t, !0);
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
 */ class yS {
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
 */ class cD {
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
      (this.ko = new yS(e, n));
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
        : n && n.code === P.RESOURCE_EXHAUSTED
        ? (Pn(n.toString()),
          Pn('Using maximum backoff delay to prevent overloading the backend.'),
          this.ko.bo())
        : n &&
          n.code === P.UNAUTHENTICATED &&
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
          const i = new G(P.UNKNOWN, 'Fetching auth token failed: ' + r.message);
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
class hD extends cD {
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
    const n = Ax(this.Tt, e),
      r = (function (i) {
        if (!('targetChange' in i)) return X.min();
        const s = i.targetChange;
        return s.targetIds && s.targetIds.length ? X.min() : s.readTime ? Fi(s.readTime) : X.min();
      })(e);
    return this.listener.Ho(n, r);
  }
  Jo(e) {
    const n = {};
    (n.database = Zy(this.Tt)),
      (n.addTarget = (function (i, s) {
        let o;
        const a = s.target;
        return (
          (o = cf(a) ? { documents: Nx(i, a) } : { query: Rx(i, a) }),
          (o.targetId = s.targetId),
          s.resumeToken.approximateByteSize() > 0
            ? (o.resumeToken = Ix(i, s.resumeToken))
            : s.snapshotVersion.compareTo(X.min()) > 0 &&
              (o.readTime = Tx(i, s.snapshotVersion.toTimestamp())),
          o
        );
      })(this.Tt, e));
    const r = Dx(this.Tt, e);
    r && (n.labels = r), this.qo(n);
  }
  Yo(e) {
    const n = {};
    (n.database = Zy(this.Tt)), (n.removeTarget = e), this.qo(n);
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
 */ class dD extends class {} {
  constructor(e, n, r, i) {
    super(),
      (this.authCredentials = e),
      (this.appCheckCredentials = n),
      (this.connection = r),
      (this.Tt = i),
      (this.iu = !1);
  }
  ru() {
    if (this.iu) throw new G(P.FAILED_PRECONDITION, 'The client has already been terminated.');
  }
  lo(e, n, r) {
    return (
      this.ru(),
      Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()])
        .then(([i, s]) => this.connection.lo(e, n, r, i, s))
        .catch((i) => {
          throw i.name === 'FirebaseError'
            ? (i.code === P.UNAUTHENTICATED &&
                (this.authCredentials.invalidateToken(),
                this.appCheckCredentials.invalidateToken()),
              i)
            : new G(P.UNKNOWN, i.toString());
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
            ? (s.code === P.UNAUTHENTICATED &&
                (this.authCredentials.invalidateToken(),
                this.appCheckCredentials.invalidateToken()),
              s)
            : new G(P.UNKNOWN, s.toString());
        })
    );
  }
  terminate() {
    this.iu = !0;
  }
}
class fD {
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
 */ class pD {
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
          na(this) &&
            (V('RemoteStore', 'Restarting streams for network reachability change.'),
            await (async function (a) {
              const l = oe(a);
              l.mu.add(4), await ta(l), l.pu.set('Unknown'), l.mu.delete(4), await Ec(l);
            })(this));
        });
      }),
      (this.pu = new fD(r, i));
  }
}
async function Ec(t) {
  if (na(t)) for (const e of t.gu) await e(!0);
}
async function ta(t) {
  for (const e of t.gu) await e(!1);
}
function vS(t, e) {
  const n = oe(t);
  n.wu.has(e.targetId) || (n.wu.set(e.targetId, e), mm(n) ? pm(n) : gs(n).Mo() && fm(n, e));
}
function wS(t, e) {
  const n = oe(t),
    r = gs(n);
  n.wu.delete(e),
    r.Mo() && ES(n, e),
    n.wu.size === 0 && (r.Mo() ? r.Bo() : na(n) && n.pu.set('Unknown'));
}
function fm(t, e) {
  t.Iu.Ft(e.targetId), gs(t).Jo(e);
}
function ES(t, e) {
  t.Iu.Ft(e), gs(t).Yo(e);
}
function pm(t) {
  (t.Iu = new vx({
    getRemoteKeysForTarget: (e) => t.remoteSyncer.getRemoteKeysForTarget(e),
    ie: (e) => t.wu.get(e) || null
  })),
    gs(t).start(),
    t.pu.au();
}
function mm(t) {
  return na(t) && !gs(t).Oo() && t.wu.size > 0;
}
function na(t) {
  return oe(t).mu.size === 0;
}
function SS(t) {
  t.Iu = void 0;
}
async function mD(t) {
  t.wu.forEach((e, n) => {
    fm(t, e);
  });
}
async function gD(t, e) {
  SS(t), mm(t) ? (t.pu.fu(e), pm(t)) : t.pu.set('Unknown');
}
async function yD(t, e, n) {
  if ((t.pu.set('Online'), e instanceof lS && e.state === 2 && e.cause))
    try {
      await (async function (r, i) {
        const s = i.cause;
        for (const o of i.targetIds)
          r.wu.has(o) &&
            (await r.remoteSyncer.rejectListen(o, s), r.wu.delete(o), r.Iu.removeTarget(o));
      })(t, e);
    } catch (r) {
      V('RemoteStore', 'Failed to remove targets %s: %s ', e.targetIds.join(','), r),
        await rv(t, r);
    }
  else if (
    (e instanceof Xa ? t.Iu.Qt(e) : e instanceof aS ? t.Iu.Zt(e) : t.Iu.Wt(e), !n.isEqual(X.min()))
  )
    try {
      const r = await mS(t.localStore);
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
              i.wu.set(a, l.withResumeToken(ft.EMPTY_BYTE_STRING, l.snapshotVersion)), ES(i, a);
              const u = new Kr(l.target, a, 1, l.sequenceNumber);
              fm(i, u);
            }),
            i.remoteSyncer.applyRemoteEvent(o)
          );
        })(t, n));
    } catch (r) {
      V('RemoteStore', 'Failed to raise snapshot:', r), await rv(t, r);
    }
}
async function rv(t, e, n) {
  if (!Zo(e)) throw e;
  t.mu.add(1),
    await ta(t),
    t.pu.set('Offline'),
    n || (n = () => mS(t.localStore)),
    t.asyncQueue.enqueueRetryable(async () => {
      V('RemoteStore', 'Retrying IndexedDB access'), await n(), t.mu.delete(1), await Ec(t);
    });
}
async function iv(t, e) {
  const n = oe(t);
  n.asyncQueue.verifyOperationInProgress(),
    V('RemoteStore', 'RemoteStore received new credentials');
  const r = na(n);
  n.mu.add(3),
    await ta(n),
    r && n.pu.set('Unknown'),
    await n.remoteSyncer.handleCredentialChange(e),
    n.mu.delete(3),
    await Ec(n);
}
async function vD(t, e) {
  const n = oe(t);
  e ? (n.mu.delete(2), await Ec(n)) : e || (n.mu.add(2), await ta(n), n.pu.set('Unknown'));
}
function gs(t) {
  return (
    t.Tu ||
      ((t.Tu = (function (e, n, r) {
        const i = oe(e);
        return i.ru(), new hD(n, i.connection, i.authCredentials, i.appCheckCredentials, i.Tt, r);
      })(t.datastore, t.asyncQueue, {
        Xr: mD.bind(null, t),
        no: gD.bind(null, t),
        Ho: yD.bind(null, t)
      })),
      t.gu.push(async (e) => {
        e ? (t.Tu.$o(), mm(t) ? pm(t) : t.pu.set('Unknown')) : (await t.Tu.stop(), SS(t));
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
 */ class gm {
  constructor(e, n, r, i, s) {
    (this.asyncQueue = e),
      (this.timerId = n),
      (this.targetTimeMs = r),
      (this.op = i),
      (this.removalCallback = s),
      (this.deferred = new Br()),
      (this.then = this.deferred.promise.then.bind(this.deferred.promise)),
      this.deferred.promise.catch((o) => {});
  }
  static createAndSchedule(e, n, r, i, s) {
    const o = Date.now() + r,
      a = new gm(e, n, o, i, s);
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
      this.deferred.reject(new G(P.CANCELLED, 'Operation cancelled' + (e ? ': ' + e : ''))));
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
function _S(t, e) {
  if ((Pn('AsyncQueue', `${e}: ${t}`), Zo(t))) return new G(P.UNAVAILABLE, `${e}: ${t}`);
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
 */ class Ui {
  constructor(e) {
    (this.comparator = e
      ? (n, r) => e(n, r) || K.comparator(n.key, r.key)
      : (n, r) => K.comparator(n.key, r.key)),
      (this.keyedMap = Us()),
      (this.sortedSet = new tt(this.comparator));
  }
  static emptySet(e) {
    return new Ui(e.comparator);
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
    if (!(e instanceof Ui) || this.size !== e.size) return !1;
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
    const r = new Ui();
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
 */ class sv {
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
class as {
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
      new as(e, n, Ui.emptySet(n), o, r, i, !0, !1, s)
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
        mc(this.query, e.query) &&
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
 */ class wD {
  constructor() {
    (this.bu = void 0), (this.listeners = []);
  }
}
class ED {
  constructor() {
    (this.queries = new ms((e) => YE(e), mc)),
      (this.onlineState = 'Unknown'),
      (this.vu = new Set());
  }
}
async function SD(t, e) {
  const n = oe(t),
    r = e.query;
  let i = !1,
    s = n.queries.get(r);
  if ((s || ((i = !0), (s = new wD())), i))
    try {
      s.bu = await n.onListen(r);
    } catch (o) {
      const a = _S(o, `Initialization of query '${df(e.query)}' failed`);
      return void e.onError(a);
    }
  n.queries.set(r, s), s.listeners.push(e), e.Pu(n.onlineState), s.bu && e.Vu(s.bu) && ym(n);
}
async function _D(t, e) {
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
function TD(t, e) {
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
  r && ym(n);
}
function ID(t, e, n) {
  const r = oe(t),
    i = r.queries.get(e);
  if (i) for (const s of i.listeners) s.onError(n);
  r.queries.delete(e);
}
function ym(t) {
  t.vu.forEach((e) => {
    e.next();
  });
}
class kD {
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
      e = new as(
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
    (e = as.fromInitialDocuments(e.query, e.docs, e.mutatedKeys, e.fromCache, e.hasCachedResults)),
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
 */ class TS {
  constructor(e) {
    this.key = e;
  }
}
class IS {
  constructor(e) {
    this.key = e;
  }
}
class CD {
  constructor(e, n) {
    (this.query = e),
      (this.Ku = n),
      (this.Gu = null),
      (this.hasCachedResults = !1),
      (this.current = !1),
      (this.Qu = ie()),
      (this.mutatedKeys = ie()),
      (this.ju = XE(e)),
      (this.zu = new Ui(this.ju));
  }
  get Wu() {
    return this.Ku;
  }
  Hu(e, n) {
    const r = n ? n.Ju : new sv(),
      i = n ? n.zu : this.zu;
    let s = n ? n.mutatedKeys : this.mutatedKeys,
      o = i,
      a = !1;
    const l = this.query.limitType === 'F' && i.size === this.query.limit ? i.last() : null,
      u = this.query.limitType === 'L' && i.size === this.query.limit ? i.first() : null;
    if (
      (e.inorderTraversal((c, h) => {
        const d = i.get(c),
          m = gc(this.query, h) ? h : null,
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
            snapshot: new as(
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
        this.applyChanges({ zu: this.zu, Ju: new sv(), mutatedKeys: this.mutatedKeys, Li: !1 }, !1))
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
        this.Qu.has(r) || n.push(new IS(r));
      }),
      this.Qu.forEach((r) => {
        e.has(r) || n.push(new TS(r));
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
    return as.fromInitialDocuments(
      this.query,
      this.zu,
      this.mutatedKeys,
      this.Gu === 0,
      this.hasCachedResults
    );
  }
}
class AD {
  constructor(e, n, r) {
    (this.query = e), (this.targetId = n), (this.view = r);
  }
}
class ND {
  constructor(e) {
    (this.key = e), (this.ic = !1);
  }
}
class RD {
  constructor(e, n, r, i, s, o) {
    (this.localStore = e),
      (this.remoteStore = n),
      (this.eventManager = r),
      (this.sharedClientState = i),
      (this.currentUser = s),
      (this.maxConcurrentLimboResolutions = o),
      (this.rc = {}),
      (this.oc = new ms((a) => YE(a), mc)),
      (this.uc = new Map()),
      (this.cc = new Set()),
      (this.ac = new tt(K.comparator)),
      (this.hc = new Map()),
      (this.lc = new cm()),
      (this.fc = {}),
      (this.dc = new Map()),
      (this._c = os.Sn()),
      (this.onlineState = 'Unknown'),
      (this.wc = void 0);
  }
  get isPrimaryClient() {
    return this.wc === !0;
  }
}
async function xD(t, e) {
  const n = MD(t);
  let r, i;
  const s = n.oc.get(e);
  if (s) (r = s.targetId), n.sharedClientState.addLocalQueryTarget(r), (i = s.view.sc());
  else {
    const o = await rD(n.localStore, Ln(e));
    n.isPrimaryClient && vS(n.remoteStore, o);
    const a = n.sharedClientState.addLocalQueryTarget(o.targetId);
    (r = o.targetId), (i = await DD(n, e, r, a === 'current', o.resumeToken));
  }
  return i;
}
async function DD(t, e, n, r, i) {
  t.mc = (h, d, m) =>
    (async function (y, v, S, p) {
      let f = v.view.Hu(S);
      f.Li && (f = await ev(y.localStore, v.query, !1).then(({ documents: _ }) => v.view.Hu(_, f)));
      const g = p && p.targetChanges.get(v.targetId),
        E = v.view.applyChanges(f, y.isPrimaryClient, g);
      return av(y, v.targetId, E.tc), E.snapshot;
    })(t, h, d, m);
  const s = await ev(t.localStore, e, !0),
    o = new CD(e, s.Yi),
    a = o.Hu(s.documents),
    l = ea.createSynthesizedTargetChangeForCurrentChange(n, r && t.onlineState !== 'Offline', i),
    u = o.applyChanges(a, t.isPrimaryClient, l);
  av(t, n, u.tc);
  const c = new AD(e, n, o);
  return t.oc.set(e, c), t.uc.has(n) ? t.uc.get(n).push(e) : t.uc.set(n, [e]), u.snapshot;
}
async function OD(t, e) {
  const n = oe(t),
    r = n.oc.get(e),
    i = n.uc.get(r.targetId);
  if (i.length > 1)
    return (
      n.uc.set(
        r.targetId,
        i.filter((s) => !mc(s, e))
      ),
      void n.oc.delete(e)
    );
  n.isPrimaryClient
    ? (n.sharedClientState.removeLocalQueryTarget(r.targetId),
      n.sharedClientState.isActiveQueryTarget(r.targetId) ||
        (await gf(n.localStore, r.targetId, !1)
          .then(() => {
            n.sharedClientState.clearQueryState(r.targetId),
              wS(n.remoteStore, r.targetId),
              yf(n, r.targetId);
          })
          .catch(rm)))
    : (yf(n, r.targetId), await gf(n.localStore, r.targetId, !0));
}
async function kS(t, e) {
  const n = oe(t);
  try {
    const r = await tD(n.localStore, e);
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
      await AS(n, r, e);
  } catch (r) {
    await rm(r);
  }
}
function ov(t, e, n) {
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
          l && ym(a);
      })(r.eventManager, e),
      i.length && r.rc.Ho(i),
      (r.onlineState = e),
      r.isPrimaryClient && r.sharedClientState.setOnlineState(e);
  }
}
async function PD(t, e, n) {
  const r = oe(t);
  r.sharedClientState.updateQueryState(e, 'rejected', n);
  const i = r.hc.get(e),
    s = i && i.key;
  if (s) {
    let o = new tt(K.comparator);
    o = o.insert(s, lt.newNoDocument(s, X.min()));
    const a = ie().add(s),
      l = new wc(X.min(), new Map(), new ze(ue), o, a);
    await kS(r, l), (r.ac = r.ac.remove(s)), r.hc.delete(e), vm(r);
  } else
    await gf(r.localStore, e, !1)
      .then(() => yf(r, e, n))
      .catch(rm);
}
function yf(t, e, n = null) {
  t.sharedClientState.removeLocalQueryTarget(e);
  for (const r of t.uc.get(e)) t.oc.delete(r), n && t.rc.gc(r, n);
  t.uc.delete(e),
    t.isPrimaryClient &&
      t.lc.ds(e).forEach((r) => {
        t.lc.containsKey(r) || CS(t, r);
      });
}
function CS(t, e) {
  t.cc.delete(e.path.canonicalString());
  const n = t.ac.get(e);
  n !== null && (wS(t.remoteStore, n), (t.ac = t.ac.remove(e)), t.hc.delete(n), vm(t));
}
function av(t, e, n) {
  for (const r of n)
    r instanceof TS
      ? (t.lc.addReference(r.key, e), LD(t, r))
      : r instanceof IS
      ? (V('SyncEngine', 'Document no longer in limbo: ' + r.key),
        t.lc.removeReference(r.key, e),
        t.lc.containsKey(r.key) || CS(t, r.key))
      : J();
}
function LD(t, e) {
  const n = e.key,
    r = n.path.canonicalString();
  t.ac.get(n) ||
    t.cc.has(r) ||
    (V('SyncEngine', 'New document in limbo: ' + n), t.cc.add(r), vm(t));
}
function vm(t) {
  for (; t.cc.size > 0 && t.ac.size < t.maxConcurrentLimboResolutions; ) {
    const e = t.cc.values().next().value;
    t.cc.delete(e);
    const n = new K(Re.fromString(e)),
      r = t._c.next();
    t.hc.set(r, new ND(n)),
      (t.ac = t.ac.insert(n, r)),
      vS(t.remoteStore, new Kr(Ln(QE(n.path)), r, 2, im.at));
  }
}
async function AS(t, e, n) {
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
            const c = dm.Ni(l.targetId, u);
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
        if (!Zo(c)) throw c;
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
async function $D(t, e) {
  const n = oe(t);
  if (!n.currentUser.isEqual(e)) {
    V('SyncEngine', 'User change. New user:', e.toKey());
    const r = await pS(n.localStore, e);
    (n.currentUser = e),
      (function (i, s) {
        i.dc.forEach((o) => {
          o.forEach((a) => {
            a.reject(new G(P.CANCELLED, s));
          });
        }),
          i.dc.clear();
      })(n, "'waitForPendingWrites' promise is rejected due to a user change."),
      n.sharedClientState.handleUserChange(e, r.removedBatchIds, r.addedBatchIds),
      await AS(n, r.Wi);
  }
}
function bD(t, e) {
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
function MD(t) {
  const e = oe(t);
  return (
    (e.remoteStore.remoteSyncer.applyRemoteEvent = kS.bind(null, e)),
    (e.remoteStore.remoteSyncer.getRemoteKeysForTarget = bD.bind(null, e)),
    (e.remoteStore.remoteSyncer.rejectListen = PD.bind(null, e)),
    (e.rc.Ho = TD.bind(null, e.eventManager)),
    (e.rc.gc = ID.bind(null, e.eventManager)),
    e
  );
}
class FD {
  constructor() {
    this.synchronizeTabs = !1;
  }
  async initialize(e) {
    (this.Tt = gS(e.databaseInfo.databaseId)),
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
    return eD(this.persistence, new Jx(), e.initialUser, this.Tt);
  }
  Tc(e) {
    return new Yx(hm.qs, this.Tt);
  }
  Ic(e) {
    return new sD();
  }
  async terminate() {
    this.gcScheduler && this.gcScheduler.stop(),
      await this.sharedClientState.shutdown(),
      await this.persistence.shutdown();
  }
}
class UD {
  async initialize(e, n) {
    this.localStore ||
      ((this.localStore = e.localStore),
      (this.sharedClientState = e.sharedClientState),
      (this.datastore = this.createDatastore(n)),
      (this.remoteStore = this.createRemoteStore(n)),
      (this.eventManager = this.createEventManager(n)),
      (this.syncEngine = this.createSyncEngine(n, !e.synchronizeTabs)),
      (this.sharedClientState.onlineStateHandler = (r) => ov(this.syncEngine, r, 1)),
      (this.remoteStore.remoteSyncer.handleCredentialChange = $D.bind(null, this.syncEngine)),
      await vD(this.remoteStore, this.syncEngine.isPrimaryClient));
  }
  createEventManager(e) {
    return new ED();
  }
  createDatastore(e) {
    const n = gS(e.databaseInfo.databaseId),
      r = ((i = e.databaseInfo), new uD(i));
    var i;
    return (function (s, o, a, l) {
      return new dD(s, o, a, l);
    })(e.authCredentials, e.appCheckCredentials, r, n);
  }
  createRemoteStore(e) {
    return (
      (n = this.localStore),
      (r = this.datastore),
      (i = e.asyncQueue),
      (s = (a) => ov(this.syncEngine, a, 0)),
      (o = nv.C() ? new nv() : new oD()),
      new pD(n, r, i, s, o)
    );
    var n, r, i, s, o;
  }
  createSyncEngine(e, n) {
    return (function (r, i, s, o, a, l, u) {
      const c = new RD(r, i, s, o, a, l);
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
        await ta(n),
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
 */ class VD {
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
 */ class jD {
  constructor(e, n, r, i) {
    (this.authCredentials = e),
      (this.appCheckCredentials = n),
      (this.asyncQueue = r),
      (this.databaseInfo = i),
      (this.user = ot.UNAUTHENTICATED),
      (this.clientId = DR.R()),
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
      throw new G(P.FAILED_PRECONDITION, 'The client has already been terminated.');
  }
  terminate() {
    this.asyncQueue.enterRestrictedMode();
    const e = new Br();
    return (
      this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
        try {
          this.onlineComponents && (await this.onlineComponents.terminate()),
            this.offlineComponents && (await this.offlineComponents.terminate()),
            this.authCredentials.shutdown(),
            this.appCheckCredentials.shutdown(),
            e.resolve();
        } catch (n) {
          const r = _S(n, 'Failed to shutdown persistence');
          e.reject(r);
        }
      }),
      e.promise
    );
  }
}
async function zD(t, e) {
  t.asyncQueue.verifyOperationInProgress(),
    V('FirestoreClient', 'Initializing OfflineComponentProvider');
  const n = await t.getConfiguration();
  await e.initialize(n);
  let r = n.initialUser;
  t.setCredentialChangeListener(async (i) => {
    r.isEqual(i) || (await pS(e.localStore, i), (r = i));
  }),
    e.persistence.setDatabaseDeletedListener(() => t.terminate()),
    (t.offlineComponents = e);
}
async function BD(t, e) {
  t.asyncQueue.verifyOperationInProgress();
  const n = await HD(t);
  V('FirestoreClient', 'Initializing OnlineComponentProvider');
  const r = await t.getConfiguration();
  await e.initialize(n, r),
    t.setCredentialChangeListener((i) => iv(e.remoteStore, i)),
    t.setAppCheckTokenChangeListener((i, s) => iv(e.remoteStore, s)),
    (t.onlineComponents = e);
}
async function HD(t) {
  return (
    t.offlineComponents ||
      (V('FirestoreClient', 'Using default OfflineComponentProvider'), await zD(t, new FD())),
    t.offlineComponents
  );
}
async function KD(t) {
  return (
    t.onlineComponents ||
      (V('FirestoreClient', 'Using default OnlineComponentProvider'), await BD(t, new UD())),
    t.onlineComponents
  );
}
async function WD(t) {
  const e = await KD(t),
    n = e.eventManager;
  return (
    (n.onListen = xD.bind(null, e.syncEngine)), (n.onUnlisten = OD.bind(null, e.syncEngine)), n
  );
}
function qD(t, e, n = {}) {
  const r = new Br();
  return (
    t.asyncQueue.enqueueAndForget(async () =>
      (function (i, s, o, a, l) {
        const u = new VD({
            next: (h) => {
              s.enqueueAndForget(() => _D(i, c)),
                h.fromCache && a.source === 'server'
                  ? l.reject(
                      new G(
                        P.UNAVAILABLE,
                        'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)'
                      )
                    )
                  : l.resolve(h);
            },
            error: (h) => l.reject(h)
          }),
          c = new kD(o, u, { includeMetadataChanges: !0, Ou: !0 });
        return SD(i, c);
      })(await WD(t), t.asyncQueue, e, n, r)
    ),
    r.promise
  );
}
const lv = new Map();
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
 */ function GD(t, e, n) {
  if (!n) throw new G(P.INVALID_ARGUMENT, `Function ${t}() cannot be called with an empty ${e}.`);
}
function QD(t, e, n, r) {
  if (e === !0 && r === !0)
    throw new G(P.INVALID_ARGUMENT, `${t} and ${n} cannot be used together.`);
}
function uv(t) {
  if (K.isDocumentKey(t))
    throw new G(
      P.INVALID_ARGUMENT,
      `Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`
    );
}
function YD(t) {
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
function vf(t, e) {
  if (('_delegate' in t && (t = t._delegate), !(t instanceof e))) {
    if (e.name === t.constructor.name)
      throw new G(
        P.INVALID_ARGUMENT,
        'Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?'
      );
    {
      const n = YD(t);
      throw new G(P.INVALID_ARGUMENT, `Expected type '${e.name}', but it was: ${n}`);
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
 */ class cv {
  constructor(e) {
    var n;
    if (e.host === void 0) {
      if (e.ssl !== void 0)
        throw new G(P.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
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
        throw new G(P.INVALID_ARGUMENT, 'cacheSizeBytes must be at least 1048576');
      this.cacheSizeBytes = e.cacheSizeBytes;
    }
    (this.experimentalForceLongPolling = !!e.experimentalForceLongPolling),
      (this.experimentalAutoDetectLongPolling = !!e.experimentalAutoDetectLongPolling),
      (this.useFetchStreams = !!e.useFetchStreams),
      QD(
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
 */ class wm {
  constructor(e, n, r, i) {
    (this._authCredentials = e),
      (this._appCheckCredentials = n),
      (this._databaseId = r),
      (this._app = i),
      (this.type = 'firestore-lite'),
      (this._persistenceKey = '(lite)'),
      (this._settings = new cv({})),
      (this._settingsFrozen = !1);
  }
  get app() {
    if (!this._app)
      throw new G(
        P.FAILED_PRECONDITION,
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
      throw new G(
        P.FAILED_PRECONDITION,
        'Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.'
      );
    (this._settings = new cv(e)),
      e.credentials !== void 0 &&
        (this._authCredentials = (function (n) {
          if (!n) return new TR();
          switch (n.type) {
            case 'gapi':
              const r = n.client;
              return new AR(
                r,
                n.sessionIndex || '0',
                n.iamToken || null,
                n.authTokenFactory || null
              );
            case 'provider':
              return n.client;
            default:
              throw new G(
                P.INVALID_ARGUMENT,
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
        const n = lv.get(e);
        n && (V('ComponentProvider', 'Removing Datastore'), lv.delete(e), n.terminate());
      })(this),
      Promise.resolve()
    );
  }
}
function XD(t, e, n, r = {}) {
  var i;
  const s = (t = vf(t, wm))._getSettings();
  if (
    (s.host !== 'firestore.googleapis.com' &&
      s.host !== e &&
      sf('Host has been set in both settings() and useEmulator(), emulator host will be used'),
    t._setSettings(Object.assign(Object.assign({}, s), { host: `${e}:${n}`, ssl: !1 })),
    r.mockUserToken)
  ) {
    let o, a;
    if (typeof r.mockUserToken == 'string') (o = r.mockUserToken), (a = ot.MOCK_USER);
    else {
      o = eA(r.mockUserToken, (i = t._app) === null || i === void 0 ? void 0 : i.options.projectId);
      const l = r.mockUserToken.sub || r.mockUserToken.user_id;
      if (!l)
        throw new G(P.INVALID_ARGUMENT, "mockUserToken must contain 'sub' or 'user_id' field!");
      a = new ot(l);
    }
    t._authCredentials = new IR(new VE(o, a));
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
 */ class ys {
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
    return new Vi(this.firestore, this.converter, this._key.path.popLast());
  }
  withConverter(e) {
    return new ys(this.firestore, e, this._key);
  }
}
class Sc {
  constructor(e, n, r) {
    (this.converter = n), (this._query = r), (this.type = 'query'), (this.firestore = e);
  }
  withConverter(e) {
    return new Sc(this.firestore, e, this._query);
  }
}
class Vi extends Sc {
  constructor(e, n, r) {
    super(e, n, QE(r)), (this._path = r), (this.type = 'collection');
  }
  get id() {
    return this._query.path.lastSegment();
  }
  get path() {
    return this._query.path.canonicalString();
  }
  get parent() {
    const e = this._path.popLast();
    return e.isEmpty() ? null : new ys(this.firestore, null, new K(e));
  }
  withConverter(e) {
    return new Vi(this.firestore, e, this._path);
  }
}
function JD(t, e, ...n) {
  if (((t = Fn(t)), GD('collection', 'path', e), t instanceof wm)) {
    const r = Re.fromString(e, ...n);
    return uv(r), new Vi(t, null, r);
  }
  {
    if (!(t instanceof ys || t instanceof Vi))
      throw new G(
        P.INVALID_ARGUMENT,
        'Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore'
      );
    const r = t._path.child(Re.fromString(e, ...n));
    return uv(r), new Vi(t.firestore, null, r);
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
 */ class ZD {
  constructor() {
    (this.qc = Promise.resolve()),
      (this.Uc = []),
      (this.Kc = !1),
      (this.Gc = []),
      (this.Qc = null),
      (this.jc = !1),
      (this.zc = !1),
      (this.Wc = []),
      (this.ko = new yS(this, 'async_queue_retry')),
      (this.Hc = () => {
        const n = Ah();
        n && V('AsyncQueue', 'Visibility state changed to ' + n.visibilityState), this.ko.Vo();
      });
    const e = Ah();
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
      const n = Ah();
      n &&
        typeof n.removeEventListener == 'function' &&
        n.removeEventListener('visibilitychange', this.Hc);
    }
  }
  enqueue(e) {
    if ((this.Jc(), this.Kc)) return new Promise(() => {});
    const n = new Br();
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
        if (!Zo(e)) throw e;
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
    const i = gm.createAndSchedule(this, e, n, r, (s) => this.Xc(s));
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
class NS extends wm {
  constructor(e, n, r, i) {
    super(e, n, r, i),
      (this.type = 'firestore'),
      (this._queue = new ZD()),
      (this._persistenceKey = (i == null ? void 0 : i.name) || '[DEFAULT]');
  }
  _terminate() {
    return this._firestoreClient || RS(this), this._firestoreClient.terminate();
  }
}
function eO(t, e) {
  const n = typeof t == 'object' ? t : $1(),
    r = typeof t == 'string' ? t : e || '(default)',
    i = Lp(n, 'firestore').getImmediate({ identifier: r });
  if (!i._initialized) {
    const s = XC('firestore');
    s && XD(i, ...s);
  }
  return i;
}
function tO(t) {
  return t._firestoreClient || RS(t), t._firestoreClient.verifyNotTerminated(), t._firestoreClient;
}
function RS(t) {
  var e;
  const n = t._freezeSettings(),
    r = (function (i, s, o, a) {
      return new FR(
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
  t._firestoreClient = new jD(t._authCredentials, t._appCheckCredentials, t._queue, r);
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
 */ class eu {
  constructor(e) {
    this._byteString = e;
  }
  static fromBase64String(e) {
    try {
      return new eu(ft.fromBase64String(e));
    } catch (n) {
      throw new G(P.INVALID_ARGUMENT, 'Failed to construct data from Base64 string: ' + n);
    }
  }
  static fromUint8Array(e) {
    return new eu(ft.fromUint8Array(e));
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
 */ class xS {
  constructor(...e) {
    for (let n = 0; n < e.length; ++n)
      if (e[n].length === 0)
        throw new G(
          P.INVALID_ARGUMENT,
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
 */ class nO {
  constructor(e, n) {
    if (!isFinite(e) || e < -90 || e > 90)
      throw new G(
        P.INVALID_ARGUMENT,
        'Latitude must be a number between -90 and 90, but was: ' + e
      );
    if (!isFinite(n) || n < -180 || n > 180)
      throw new G(
        P.INVALID_ARGUMENT,
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
const rO = new RegExp('[~\\*/\\[\\]]');
function iO(t, e, n) {
  if (e.search(rO) >= 0)
    throw hv(
      `Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,
      t,
      !1,
      void 0,
      n
    );
  try {
    return new xS(...e.split('.'))._internalPath;
  } catch {
    throw hv(
      `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
      t,
      !1,
      void 0,
      n
    );
  }
}
function hv(t, e, n, r, i) {
  const s = r && !r.isEmpty(),
    o = i !== void 0;
  let a = `Function ${e}() called with invalid data`;
  n && (a += ' (via `toFirestore()`)'), (a += '. ');
  let l = '';
  return (
    (s || o) &&
      ((l += ' (found'), s && (l += ` in field ${r}`), o && (l += ` in document ${i}`), (l += ')')),
    new G(P.INVALID_ARGUMENT, a + t + l)
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
 */ class DS {
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
    return new ys(this._firestore, this._converter, this._key);
  }
  exists() {
    return this._document !== null;
  }
  data() {
    if (this._document) {
      if (this._converter) {
        const e = new sO(this._firestore, this._userDataWriter, this._key, this._document, null);
        return this._converter.fromFirestore(e);
      }
      return this._userDataWriter.convertValue(this._document.data.value);
    }
  }
  get(e) {
    if (this._document) {
      const n = this._document.data.field(OS('DocumentSnapshot.get', e));
      if (n !== null) return this._userDataWriter.convertValue(n);
    }
  }
}
class sO extends DS {
  data() {
    return super.data();
  }
}
function OS(t, e) {
  return typeof e == 'string'
    ? iO(t, e)
    : e instanceof xS
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
 */ function oO(t) {
  if (t.limitType === 'L' && t.explicitOrderBy.length === 0)
    throw new G(
      P.UNIMPLEMENTED,
      'limitToLast() queries require specifying at least one orderBy() clause'
    );
}
class aO {
  convertValue(e, n = 'none') {
    switch (ni(e)) {
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
        return this.convertBytes(rs(e.bytesValue));
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
      dc(e.fields, (i, s) => {
        r[i] = this.convertValue(s, n);
      }),
      r
    );
  }
  convertGeoPoint(e) {
    return new nO($e(e.latitude), $e(e.longitude));
  }
  convertArray(e, n) {
    return (e.values || []).map((r) => this.convertValue(r, n));
  }
  convertServerTimestamp(e, n) {
    switch (n) {
      case 'previous':
        const r = zE(e);
        return r == null ? null : this.convertValue(r, n);
      case 'estimate':
        return this.convertTimestamp(Do(e));
      default:
        return null;
    }
  }
  convertTimestamp(e) {
    const n = Er(e);
    return new Ct(n.seconds, n.nanos);
  }
  convertDocumentKey(e, n) {
    const r = Re.fromString(e);
    Fe(fS(r));
    const i = new xo(r.get(1), r.get(3)),
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
 */ class $a {
  constructor(e, n) {
    (this.hasPendingWrites = e), (this.fromCache = n);
  }
  isEqual(e) {
    return this.hasPendingWrites === e.hasPendingWrites && this.fromCache === e.fromCache;
  }
}
class lO extends DS {
  constructor(e, n, r, i, s, o) {
    super(e, n, r, i, o), (this._firestore = e), (this._firestoreImpl = e), (this.metadata = s);
  }
  exists() {
    return super.exists();
  }
  data(e = {}) {
    if (this._document) {
      if (this._converter) {
        const n = new Ja(
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
      const r = this._document.data.field(OS('DocumentSnapshot.get', e));
      if (r !== null) return this._userDataWriter.convertValue(r, n.serverTimestamps);
    }
  }
}
class Ja extends lO {
  data(e = {}) {
    return super.data(e);
  }
}
class uO {
  constructor(e, n, r, i) {
    (this._firestore = e),
      (this._userDataWriter = n),
      (this._snapshot = i),
      (this.metadata = new $a(i.hasPendingWrites, i.fromCache)),
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
        new Ja(
          this._firestore,
          this._userDataWriter,
          r.key,
          r,
          new $a(this._snapshot.mutatedKeys.has(r.key), this._snapshot.fromCache),
          this.query.converter
        )
      );
    });
  }
  docChanges(e = {}) {
    const n = !!e.includeMetadataChanges;
    if (n && this._snapshot.excludesMetadataChanges)
      throw new G(
        P.INVALID_ARGUMENT,
        'To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().'
      );
    return (
      (this._cachedChanges && this._cachedChangesIncludeMetadataChanges === n) ||
        ((this._cachedChanges = (function (r, i) {
          if (r._snapshot.oldDocs.isEmpty()) {
            let s = 0;
            return r._snapshot.docChanges.map((o) => {
              const a = new Ja(
                r._firestore,
                r._userDataWriter,
                o.doc.key,
                o.doc,
                new $a(r._snapshot.mutatedKeys.has(o.doc.key), r._snapshot.fromCache),
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
                const a = new Ja(
                  r._firestore,
                  r._userDataWriter,
                  o.doc.key,
                  o.doc,
                  new $a(r._snapshot.mutatedKeys.has(o.doc.key), r._snapshot.fromCache),
                  r.query.converter
                );
                let l = -1,
                  u = -1;
                return (
                  o.type !== 0 && ((l = s.indexOf(o.doc.key)), (s = s.delete(o.doc.key))),
                  o.type !== 1 && ((s = s.add(o.doc)), (u = s.indexOf(o.doc.key))),
                  { type: cO(o.type), doc: a, oldIndex: l, newIndex: u }
                );
              });
          }
        })(this, n)),
        (this._cachedChangesIncludeMetadataChanges = n)),
      this._cachedChanges
    );
  }
}
function cO(t) {
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
class hO extends aO {
  constructor(e) {
    super(), (this.firestore = e);
  }
  convertBytes(e) {
    return new eu(e);
  }
  convertReference(e) {
    const n = this.convertDocumentKey(e, this.firestore._databaseId);
    return new ys(this.firestore, null, n);
  }
}
function dO(t) {
  t = vf(t, Sc);
  const e = vf(t.firestore, NS),
    n = tO(e),
    r = new hO(e);
  return oO(t._query), qD(n, t._query).then((i) => new uO(e, r, t, i));
}
(function (t, e = !0) {
  (function (n) {
    ps = n;
  })(Bo),
    es(
      new Zr(
        'firestore',
        (n, { instanceIdentifier: r, options: i }) => {
          const s = n.getProvider('app').getImmediate(),
            o = new NS(
              new kR(n.getProvider('auth-internal')),
              new RR(n.getProvider('app-check-internal')),
              (function (a, l) {
                if (!Object.prototype.hasOwnProperty.apply(a.options, ['projectId']))
                  throw new G(
                    P.INVALID_ARGUMENT,
                    '"projectId" not provided in firebase.initializeApp.'
                  );
                return new xo(a.options.projectId, l);
              })(s, r),
              s
            );
          return (i = Object.assign({ useFetchStreams: e }, i)), o._setSettings(i), o;
        },
        'PUBLIC'
      ).setMultipleInstances(!0)
    ),
    pr($y, '3.8.4', t),
    pr($y, '3.8.4', 'esm2017');
})();
function Em(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
        (n[r[i]] = t[r[i]]);
  return n;
}
function PS() {
  return {
    ['dependent-sdk-initialized-before-auth']:
      'Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.'
  };
}
const fO = PS,
  LS = new jo('auth', 'Firebase', PS());
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
 */ const dv = new Op('@firebase/auth');
function Za(t, ...e) {
  dv.logLevel <= ae.ERROR && dv.error(`Auth (${Bo}): ${t}`, ...e);
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
 */ function nn(t, ...e) {
  throw Sm(t, ...e);
}
function fn(t, ...e) {
  return Sm(t, ...e);
}
function pO(t, e, n) {
  const r = Object.assign(Object.assign({}, fO()), { [e]: n });
  return new jo('auth', 'Firebase', r).create(e, { appName: t.name });
}
function Sm(t, ...e) {
  if (typeof t != 'string') {
    const n = e[0],
      r = [...e.slice(1)];
    return r[0] && (r[0].appName = t.name), t._errorFactory.create(n, ...r);
  }
  return LS.create(t, ...e);
}
function q(t, e, ...n) {
  if (!t) throw Sm(e, ...n);
}
function In(t) {
  const e = 'INTERNAL ASSERTION FAILED: ' + t;
  throw (Za(e), new Error(e));
}
function $n(t, e) {
  t || In(e);
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
 */ const fv = new Map();
function kn(t) {
  $n(t instanceof Function, 'Expected a class definition');
  let e = fv.get(t);
  return e
    ? ($n(e instanceof t, 'Instance stored in cache mismatched with class'), e)
    : ((e = new t()), fv.set(t, e), e);
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
 */ function mO(t, e) {
  const n = Lp(t, 'auth');
  if (n.isInitialized()) {
    const i = n.getImmediate(),
      s = n.getOptions();
    if (jl(s, e ?? {})) return i;
    nn(i, 'already-initialized');
  }
  return n.initialize({ options: e });
}
function gO(t, e) {
  const n = (e == null ? void 0 : e.persistence) || [],
    r = (Array.isArray(n) ? n : [n]).map(kn);
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
 */ function wf() {
  var t;
  return (
    (typeof self < 'u' && ((t = self.location) === null || t === void 0 ? void 0 : t.href)) || ''
  );
}
function yO() {
  return pv() === 'http:' || pv() === 'https:';
}
function pv() {
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
 */ function vO() {
  return typeof navigator < 'u' &&
    navigator &&
    'onLine' in navigator &&
    typeof navigator.onLine == 'boolean' &&
    (yO() || nA() || 'connection' in navigator)
    ? navigator.onLine
    : !0;
}
function wO() {
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
 */ class ra {
  constructor(e, n) {
    (this.shortDelay = e),
      (this.longDelay = n),
      $n(n > e, 'Short delay should be less than long delay!'),
      (this.isMobile = tA() || rA());
  }
  get() {
    return vO()
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
 */ function _m(t, e) {
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
 */ class $S {
  static initialize(e, n, r) {
    (this.fetchImpl = e), n && (this.headersImpl = n), r && (this.responseImpl = r);
  }
  static fetch() {
    if (this.fetchImpl) return this.fetchImpl;
    if (typeof self < 'u' && 'fetch' in self) return self.fetch;
    In(
      'Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill'
    );
  }
  static headers() {
    if (this.headersImpl) return this.headersImpl;
    if (typeof self < 'u' && 'Headers' in self) return self.Headers;
    In(
      'Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill'
    );
  }
  static response() {
    if (this.responseImpl) return this.responseImpl;
    if (typeof self < 'u' && 'Response' in self) return self.Response;
    In(
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
 */ const EO = {
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
 */ const SO = new ra(3e4, 6e4);
function ia(t, e) {
  return t.tenantId && !e.tenantId
    ? Object.assign(Object.assign({}, e), { tenantId: t.tenantId })
    : e;
}
async function sa(t, e, n, r, i = {}) {
  return bS(t, i, async () => {
    let s = {},
      o = {};
    r && (e === 'GET' ? (o = r) : (s = { body: JSON.stringify(r) }));
    const a = zo(Object.assign({ key: t.config.apiKey }, o)).slice(1),
      l = await t._getAdditionalHeaders();
    return (
      (l['Content-Type'] = 'application/json'),
      t.languageCode && (l['X-Firebase-Locale'] = t.languageCode),
      $S.fetch()(
        MS(t, t.config.apiHost, n, a),
        Object.assign({ method: e, headers: l, referrerPolicy: 'no-referrer' }, s)
      )
    );
  });
}
async function bS(t, e, n) {
  t._canInitEmulator = !1;
  const r = Object.assign(Object.assign({}, EO), e);
  try {
    const i = new _O(t),
      s = await Promise.race([n(), i.promise]);
    i.clearNetworkTimeout();
    const o = await s.json();
    if ('needConfirmation' in o) throw ba(t, 'account-exists-with-different-credential', o);
    if (s.ok && !('errorMessage' in o)) return o;
    {
      const a = s.ok ? o.errorMessage : o.error.message,
        [l, u] = a.split(' : ');
      if (l === 'FEDERATED_USER_ID_ALREADY_LINKED') throw ba(t, 'credential-already-in-use', o);
      if (l === 'EMAIL_EXISTS') throw ba(t, 'email-already-in-use', o);
      if (l === 'USER_DISABLED') throw ba(t, 'user-disabled', o);
      const c = r[l] || l.toLowerCase().replace(/[_\s]+/g, '-');
      if (u) throw pO(t, c, u);
      nn(t, c);
    }
  } catch (i) {
    if (i instanceof Mn) throw i;
    nn(t, 'internal-error', { message: String(i) });
  }
}
async function oa(t, e, n, r, i = {}) {
  const s = await sa(t, e, n, r, i);
  return (
    'mfaPendingCredential' in s && nn(t, 'multi-factor-auth-required', { _serverResponse: s }), s
  );
}
function MS(t, e, n, r) {
  const i = `${e}${n}?${r}`;
  return t.config.emulator ? _m(t.config, i) : `${t.config.apiScheme}://${i}`;
}
class _O {
  constructor(e) {
    (this.auth = e),
      (this.timer = null),
      (this.promise = new Promise((n, r) => {
        this.timer = setTimeout(() => r(fn(this.auth, 'network-request-failed')), SO.get());
      }));
  }
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
}
function ba(t, e, n) {
  const r = { appName: t.name };
  n.email && (r.email = n.email), n.phoneNumber && (r.phoneNumber = n.phoneNumber);
  const i = fn(t, e, r);
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
 */ async function TO(t, e) {
  return sa(t, 'POST', '/v1/accounts:delete', e);
}
async function IO(t, e) {
  return sa(t, 'POST', '/v1/accounts:lookup', e);
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
 */ function eo(t) {
  if (t)
    try {
      const e = new Date(Number(t));
      if (!isNaN(e.getTime())) return e.toUTCString();
    } catch {}
}
async function kO(t, e = !1) {
  const n = Fn(t),
    r = await n.getIdToken(e),
    i = Tm(r);
  q(i && i.exp && i.auth_time && i.iat, n.auth, 'internal-error');
  const s = typeof i.firebase == 'object' ? i.firebase : void 0,
    o = s == null ? void 0 : s.sign_in_provider;
  return {
    claims: i,
    token: r,
    authTime: eo(Nh(i.auth_time)),
    issuedAtTime: eo(Nh(i.iat)),
    expirationTime: eo(Nh(i.exp)),
    signInProvider: o || null,
    signInSecondFactor: (s == null ? void 0 : s.sign_in_second_factor) || null
  };
}
function Nh(t) {
  return Number(t) * 1e3;
}
function Tm(t) {
  const [e, n, r] = t.split('.');
  if (e === void 0 || n === void 0 || r === void 0)
    return Za('JWT malformed, contained fewer than 3 sections'), null;
  try {
    const i = R1(n);
    return i ? JSON.parse(i) : (Za('Failed to decode base64 JWT payload'), null);
  } catch (i) {
    return Za('Caught error parsing JWT payload as JSON', i == null ? void 0 : i.toString()), null;
  }
}
function CO(t) {
  const e = Tm(t);
  return (
    q(e, 'internal-error'),
    q(typeof e.exp < 'u', 'internal-error'),
    q(typeof e.iat < 'u', 'internal-error'),
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
 */ async function Po(t, e, n = !1) {
  if (n) return e;
  try {
    return await e;
  } catch (r) {
    throw (r instanceof Mn && AO(r) && t.auth.currentUser === t && (await t.auth.signOut()), r);
  }
}
function AO({ code: t }) {
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
 */ class NO {
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
 */ class FS {
  constructor(e, n) {
    (this.createdAt = e), (this.lastLoginAt = n), this._initializeTime();
  }
  _initializeTime() {
    (this.lastSignInTime = eo(this.lastLoginAt)), (this.creationTime = eo(this.createdAt));
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
 */ async function tu(t) {
  var e;
  const n = t.auth,
    r = await t.getIdToken(),
    i = await Po(t, IO(n, { idToken: r }));
  q(i == null ? void 0 : i.users.length, n, 'internal-error');
  const s = i.users[0];
  t._notifyReloadListener(s);
  const o =
      !((e = s.providerUserInfo) === null || e === void 0) && e.length
        ? DO(s.providerUserInfo)
        : [],
    a = xO(t.providerData, o),
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
      metadata: new FS(s.createdAt, s.lastLoginAt),
      isAnonymous: c
    };
  Object.assign(t, h);
}
async function RO(t) {
  const e = Fn(t);
  await tu(e), await e.auth._persistUserIfCurrent(e), e.auth._notifyListenersIfCurrent(e);
}
function xO(t, e) {
  return [...t.filter((r) => !e.some((i) => i.providerId === r.providerId)), ...e];
}
function DO(t) {
  return t.map((e) => {
    var { providerId: n } = e,
      r = Em(e, ['providerId']);
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
 */ async function OO(t, e) {
  const n = await bS(t, {}, async () => {
    const r = zo({ grant_type: 'refresh_token', refresh_token: e }).slice(1),
      { tokenApiHost: i, apiKey: s } = t.config,
      o = MS(t, i, '/v1/token', `key=${s}`),
      a = await t._getAdditionalHeaders();
    return (
      (a['Content-Type'] = 'application/x-www-form-urlencoded'),
      $S.fetch()(o, { method: 'POST', headers: a, body: r })
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
 */ class Lo {
  constructor() {
    (this.refreshToken = null), (this.accessToken = null), (this.expirationTime = null);
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(e) {
    q(e.idToken, 'internal-error'),
      q(typeof e.idToken < 'u', 'internal-error'),
      q(typeof e.refreshToken < 'u', 'internal-error');
    const n = 'expiresIn' in e && typeof e.expiresIn < 'u' ? Number(e.expiresIn) : CO(e.idToken);
    this.updateTokensAndExpiration(e.idToken, e.refreshToken, n);
  }
  async getToken(e, n = !1) {
    return (
      q(!this.accessToken || this.refreshToken, e, 'user-token-expired'),
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
    const { accessToken: r, refreshToken: i, expiresIn: s } = await OO(e, n);
    this.updateTokensAndExpiration(r, i, Number(s));
  }
  updateTokensAndExpiration(e, n, r) {
    (this.refreshToken = n || null),
      (this.accessToken = e || null),
      (this.expirationTime = Date.now() + r * 1e3);
  }
  static fromJSON(e, n) {
    const { refreshToken: r, accessToken: i, expirationTime: s } = n,
      o = new Lo();
    return (
      r && (q(typeof r == 'string', 'internal-error', { appName: e }), (o.refreshToken = r)),
      i && (q(typeof i == 'string', 'internal-error', { appName: e }), (o.accessToken = i)),
      s && (q(typeof s == 'number', 'internal-error', { appName: e }), (o.expirationTime = s)),
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
    return Object.assign(new Lo(), this.toJSON());
  }
  _performRefresh() {
    return In('not implemented');
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
 */ function jn(t, e) {
  q(typeof t == 'string' || typeof t > 'u', 'internal-error', { appName: e });
}
class Wr {
  constructor(e) {
    var { uid: n, auth: r, stsTokenManager: i } = e,
      s = Em(e, ['uid', 'auth', 'stsTokenManager']);
    (this.providerId = 'firebase'),
      (this.proactiveRefresh = new NO(this)),
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
      (this.metadata = new FS(s.createdAt || void 0, s.lastLoginAt || void 0));
  }
  async getIdToken(e) {
    const n = await Po(this, this.stsTokenManager.getToken(this.auth, e));
    return (
      q(n, this.auth, 'internal-error'),
      this.accessToken !== n &&
        ((this.accessToken = n),
        await this.auth._persistUserIfCurrent(this),
        this.auth._notifyListenersIfCurrent(this)),
      n
    );
  }
  getIdTokenResult(e) {
    return kO(this, e);
  }
  reload() {
    return RO(this);
  }
  _assign(e) {
    this !== e &&
      (q(this.uid === e.uid, this.auth, 'internal-error'),
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
    return new Wr(
      Object.assign(Object.assign({}, this), {
        auth: e,
        stsTokenManager: this.stsTokenManager._clone()
      })
    );
  }
  _onReload(e) {
    q(!this.reloadListener, this.auth, 'internal-error'),
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
      n && (await tu(this)),
      await this.auth._persistUserIfCurrent(this),
      r && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    const e = await this.getIdToken();
    return (
      await Po(this, TO(this.auth, { idToken: e })),
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
    q(g && x, e, 'internal-error');
    const O = Lo.fromJSON(this.name, x);
    q(typeof g == 'string', e, 'internal-error'),
      jn(h, e.name),
      jn(d, e.name),
      q(typeof E == 'boolean', e, 'internal-error'),
      q(typeof _ == 'boolean', e, 'internal-error'),
      jn(m, e.name),
      jn(y, e.name),
      jn(v, e.name),
      jn(S, e.name),
      jn(p, e.name),
      jn(f, e.name);
    const B = new Wr({
      uid: g,
      auth: e,
      email: d,
      emailVerified: E,
      displayName: h,
      isAnonymous: _,
      photoURL: y,
      phoneNumber: m,
      tenantId: v,
      stsTokenManager: O,
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
    const i = new Lo();
    i.updateFromServerResponse(n);
    const s = new Wr({ uid: n.localId, auth: e, stsTokenManager: i, isAnonymous: r });
    return await tu(s), s;
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
 */ class US {
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
US.type = 'NONE';
const mv = US;
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
 */ function el(t, e, n) {
  return `firebase:${t}:${e}:${n}`;
}
class ji {
  constructor(e, n, r) {
    (this.persistence = e), (this.auth = n), (this.userKey = r);
    const { config: i, name: s } = this.auth;
    (this.fullUserKey = el(this.userKey, i.apiKey, s)),
      (this.fullPersistenceKey = el('persistence', i.apiKey, s)),
      (this.boundEventHandler = n._onStorageEvent.bind(n)),
      this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(e) {
    return this.persistence._set(this.fullUserKey, e.toJSON());
  }
  async getCurrentUser() {
    const e = await this.persistence._get(this.fullUserKey);
    return e ? Wr._fromJSON(this.auth, e) : null;
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
    if (!n.length) return new ji(kn(mv), e, r);
    const i = (
      await Promise.all(
        n.map(async (u) => {
          if (await u._isAvailable()) return u;
        })
      )
    ).filter((u) => u);
    let s = i[0] || kn(mv);
    const o = el(r, e.config.apiKey, e.name);
    let a = null;
    for (const u of n)
      try {
        const c = await u._get(o);
        if (c) {
          const h = Wr._fromJSON(e, c);
          u !== s && (a = h), (s = u);
          break;
        }
      } catch {}
    const l = i.filter((u) => u._shouldAllowMigration);
    return !s._shouldAllowMigration || !l.length
      ? new ji(s, e, r)
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
        new ji(s, e, r));
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
 */ function gv(t) {
  const e = t.toLowerCase();
  if (e.includes('opera/') || e.includes('opr/') || e.includes('opios/')) return 'Opera';
  if (zS(e)) return 'IEMobile';
  if (e.includes('msie') || e.includes('trident/')) return 'IE';
  if (e.includes('edge/')) return 'Edge';
  if (VS(e)) return 'Firefox';
  if (e.includes('silk/')) return 'Silk';
  if (HS(e)) return 'Blackberry';
  if (KS(e)) return 'Webos';
  if (Im(e)) return 'Safari';
  if ((e.includes('chrome/') || jS(e)) && !e.includes('edge/')) return 'Chrome';
  if (BS(e)) return 'Android';
  {
    const n = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
      r = t.match(n);
    if ((r == null ? void 0 : r.length) === 2) return r[1];
  }
  return 'Other';
}
function VS(t = dt()) {
  return /firefox\//i.test(t);
}
function Im(t = dt()) {
  const e = t.toLowerCase();
  return (
    e.includes('safari/') &&
    !e.includes('chrome/') &&
    !e.includes('crios/') &&
    !e.includes('android')
  );
}
function jS(t = dt()) {
  return /crios\//i.test(t);
}
function zS(t = dt()) {
  return /iemobile/i.test(t);
}
function BS(t = dt()) {
  return /android/i.test(t);
}
function HS(t = dt()) {
  return /blackberry/i.test(t);
}
function KS(t = dt()) {
  return /webos/i.test(t);
}
function _c(t = dt()) {
  return /iphone|ipad|ipod/i.test(t) || (/macintosh/i.test(t) && /mobile/i.test(t));
}
function PO(t = dt()) {
  var e;
  return _c(t) && !!(!((e = window.navigator) === null || e === void 0) && e.standalone);
}
function LO() {
  return iA() && document.documentMode === 10;
}
function WS(t = dt()) {
  return _c(t) || BS(t) || KS(t) || HS(t) || /windows phone/i.test(t) || zS(t);
}
function $O() {
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
 */ function qS(t, e = []) {
  let n;
  switch (t) {
    case 'Browser':
      n = gv(dt());
      break;
    case 'Worker':
      n = `${gv(dt())}-${t}`;
      break;
    default:
      n = t;
  }
  const r = e.length ? e.join(',') : 'FirebaseCore-web';
  return `${n}/JsCore/${Bo}/${r}`;
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
 */ class bO {
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
 */ class MO {
  constructor(e, n, r) {
    (this.app = e),
      (this.heartbeatServiceProvider = n),
      (this.config = r),
      (this.currentUser = null),
      (this.emulatorConfig = null),
      (this.operations = Promise.resolve()),
      (this.authStateSubscription = new yv(this)),
      (this.idTokenSubscription = new yv(this)),
      (this.beforeStateQueue = new bO(this)),
      (this.redirectUser = null),
      (this.isProactiveRefreshEnabled = !1),
      (this._canInitEmulator = !0),
      (this._isInitialized = !1),
      (this._deleted = !1),
      (this._initializationPromise = null),
      (this._popupRedirectResolver = null),
      (this._errorFactory = LS),
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
      n && (this._popupRedirectResolver = kn(n)),
      (this._initializationPromise = this.queue(async () => {
        var r, i;
        if (
          !this._deleted &&
          ((this.persistenceManager = await ji.create(this, e)), !this._deleted)
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
      q(this._popupRedirectResolver, this, 'argument-error'),
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
      await tu(e);
    } catch (n) {
      if ((n == null ? void 0 : n.code) !== 'auth/network-request-failed')
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(e);
  }
  useDeviceLanguage() {
    this.languageCode = wO();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(e) {
    const n = e ? Fn(e) : null;
    return (
      n && q(n.auth.config.apiKey === this.config.apiKey, this, 'invalid-user-token'),
      this._updateCurrentUser(n && n._clone(this))
    );
  }
  async _updateCurrentUser(e, n = !1) {
    if (!this._deleted)
      return (
        e && q(this.tenantId === e.tenantId, this, 'tenant-id-mismatch'),
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
      await this.assertedPersistence.setPersistence(kn(e));
    });
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(e) {
    this._errorFactory = new jo('auth', 'Firebase', e());
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
      const n = (e && kn(e)) || this._popupRedirectResolver;
      q(n, this, 'argument-error'),
        (this.redirectPersistenceManager = await ji.create(
          this,
          [kn(n._redirectPersistence)],
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
      q(o, this, 'internal-error'),
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
    return q(this.persistenceManager, this, 'internal-error'), this.persistenceManager;
  }
  _logFramework(e) {
    !e ||
      this.frameworks.includes(e) ||
      (this.frameworks.push(e),
      this.frameworks.sort(),
      (this.clientVersion = qS(this.config.clientPlatform, this._getFrameworks())));
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
function aa(t) {
  return Fn(t);
}
class yv {
  constructor(e) {
    (this.auth = e), (this.observer = null), (this.addObserver = hA((n) => (this.observer = n)));
  }
  get next() {
    return q(this.observer, this.auth, 'internal-error'), this.observer.next.bind(this.observer);
  }
}
function FO(t, e, n) {
  const r = aa(t);
  q(r._canInitEmulator, r, 'emulator-config-failed'),
    q(/^https?:\/\//.test(e), r, 'invalid-emulator-scheme');
  const i = !!(n != null && n.disableWarnings),
    s = GS(e),
    { host: o, port: a } = UO(e),
    l = a === null ? '' : `:${a}`;
  (r.config.emulator = { url: `${s}//${o}${l}/` }),
    (r.settings.appVerificationDisabledForTesting = !0),
    (r.emulatorConfig = Object.freeze({
      host: o,
      port: a,
      protocol: s.replace(':', ''),
      options: Object.freeze({ disableWarnings: i })
    })),
    i || VO();
}
function GS(t) {
  const e = t.indexOf(':');
  return e < 0 ? '' : t.substr(0, e + 1);
}
function UO(t) {
  const e = GS(t),
    n = /(\/\/)?([^?#/]+)/.exec(t.substr(e.length));
  if (!n) return { host: '', port: null };
  const r = n[2].split('@').pop() || '',
    i = /^(\[[^\]]+\])(:|$)/.exec(r);
  if (i) {
    const s = i[1];
    return { host: s, port: vv(r.substr(s.length + 1)) };
  } else {
    const [s, o] = r.split(':');
    return { host: s, port: vv(o) };
  }
}
function vv(t) {
  if (!t) return null;
  const e = Number(t);
  return isNaN(e) ? null : e;
}
function VO() {
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
 */ class km {
  constructor(e, n) {
    (this.providerId = e), (this.signInMethod = n);
  }
  toJSON() {
    return In('not implemented');
  }
  _getIdTokenResponse(e) {
    return In('not implemented');
  }
  _linkToIdToken(e, n) {
    return In('not implemented');
  }
  _getReauthenticationResolver(e) {
    return In('not implemented');
  }
}
async function jO(t, e) {
  return sa(t, 'POST', '/v1/accounts:update', e);
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
 */ async function zO(t, e) {
  return oa(t, 'POST', '/v1/accounts:signInWithPassword', ia(t, e));
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
 */ async function BO(t, e) {
  return oa(t, 'POST', '/v1/accounts:signInWithEmailLink', ia(t, e));
}
async function HO(t, e) {
  return oa(t, 'POST', '/v1/accounts:signInWithEmailLink', ia(t, e));
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
 */ class $o extends km {
  constructor(e, n, r, i = null) {
    super('password', r), (this._email = e), (this._password = n), (this._tenantId = i);
  }
  static _fromEmailAndPassword(e, n) {
    return new $o(e, n, 'password');
  }
  static _fromEmailAndCode(e, n, r = null) {
    return new $o(e, n, 'emailLink', r);
  }
  toJSON() {
    return {
      email: this._email,
      password: this._password,
      signInMethod: this.signInMethod,
      tenantId: this._tenantId
    };
  }
  static fromJSON(e) {
    const n = typeof e == 'string' ? JSON.parse(e) : e;
    if (n != null && n.email && n != null && n.password) {
      if (n.signInMethod === 'password') return this._fromEmailAndPassword(n.email, n.password);
      if (n.signInMethod === 'emailLink')
        return this._fromEmailAndCode(n.email, n.password, n.tenantId);
    }
    return null;
  }
  async _getIdTokenResponse(e) {
    switch (this.signInMethod) {
      case 'password':
        return zO(e, { returnSecureToken: !0, email: this._email, password: this._password });
      case 'emailLink':
        return BO(e, { email: this._email, oobCode: this._password });
      default:
        nn(e, 'internal-error');
    }
  }
  async _linkToIdToken(e, n) {
    switch (this.signInMethod) {
      case 'password':
        return jO(e, {
          idToken: n,
          returnSecureToken: !0,
          email: this._email,
          password: this._password
        });
      case 'emailLink':
        return HO(e, { idToken: n, email: this._email, oobCode: this._password });
      default:
        nn(e, 'internal-error');
    }
  }
  _getReauthenticationResolver(e) {
    return this._getIdTokenResponse(e);
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
 */ async function zi(t, e) {
  return oa(t, 'POST', '/v1/accounts:signInWithIdp', ia(t, e));
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
 */ const KO = 'http://localhost';
class ri extends km {
  constructor() {
    super(...arguments), (this.pendingToken = null);
  }
  static _fromParams(e) {
    const n = new ri(e.providerId, e.signInMethod);
    return (
      e.idToken || e.accessToken
        ? (e.idToken && (n.idToken = e.idToken),
          e.accessToken && (n.accessToken = e.accessToken),
          e.nonce && !e.pendingToken && (n.nonce = e.nonce),
          e.pendingToken && (n.pendingToken = e.pendingToken))
        : e.oauthToken && e.oauthTokenSecret
        ? ((n.accessToken = e.oauthToken), (n.secret = e.oauthTokenSecret))
        : nn('argument-error'),
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
      s = Em(n, ['providerId', 'signInMethod']);
    if (!r || !i) return null;
    const o = new ri(r, i);
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
    return zi(e, n);
  }
  _linkToIdToken(e, n) {
    const r = this.buildRequest();
    return (r.idToken = n), zi(e, r);
  }
  _getReauthenticationResolver(e) {
    const n = this.buildRequest();
    return (n.autoCreate = !1), zi(e, n);
  }
  buildRequest() {
    const e = { requestUri: KO, returnSecureToken: !0 };
    if (this.pendingToken) e.pendingToken = this.pendingToken;
    else {
      const n = {};
      this.idToken && (n.id_token = this.idToken),
        this.accessToken && (n.access_token = this.accessToken),
        this.secret && (n.oauth_token_secret = this.secret),
        (n.providerId = this.providerId),
        this.nonce && !this.pendingToken && (n.nonce = this.nonce),
        (e.postBody = zo(n));
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
 */ function WO(t) {
  switch (t) {
    case 'recoverEmail':
      return 'RECOVER_EMAIL';
    case 'resetPassword':
      return 'PASSWORD_RESET';
    case 'signIn':
      return 'EMAIL_SIGNIN';
    case 'verifyEmail':
      return 'VERIFY_EMAIL';
    case 'verifyAndChangeEmail':
      return 'VERIFY_AND_CHANGE_EMAIL';
    case 'revertSecondFactorAddition':
      return 'REVERT_SECOND_FACTOR_ADDITION';
    default:
      return null;
  }
}
function qO(t) {
  const e = $s(bs(t)).link,
    n = e ? $s(bs(e)).deep_link_id : null,
    r = $s(bs(t)).deep_link_id;
  return (r ? $s(bs(r)).link : null) || r || n || e || t;
}
class Cm {
  constructor(e) {
    var n, r, i, s, o, a;
    const l = $s(bs(e)),
      u = (n = l.apiKey) !== null && n !== void 0 ? n : null,
      c = (r = l.oobCode) !== null && r !== void 0 ? r : null,
      h = WO((i = l.mode) !== null && i !== void 0 ? i : null);
    q(u && c && h, 'argument-error'),
      (this.apiKey = u),
      (this.operation = h),
      (this.code = c),
      (this.continueUrl = (s = l.continueUrl) !== null && s !== void 0 ? s : null),
      (this.languageCode = (o = l.languageCode) !== null && o !== void 0 ? o : null),
      (this.tenantId = (a = l.tenantId) !== null && a !== void 0 ? a : null);
  }
  static parseLink(e) {
    const n = qO(e);
    try {
      return new Cm(n);
    } catch {
      return null;
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
 */ class vs {
  constructor() {
    this.providerId = vs.PROVIDER_ID;
  }
  static credential(e, n) {
    return $o._fromEmailAndPassword(e, n);
  }
  static credentialWithLink(e, n) {
    const r = Cm.parseLink(n);
    return q(r, 'argument-error'), $o._fromEmailAndCode(e, r.code, r.tenantId);
  }
}
vs.PROVIDER_ID = 'password';
vs.EMAIL_PASSWORD_SIGN_IN_METHOD = 'password';
vs.EMAIL_LINK_SIGN_IN_METHOD = 'emailLink';
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
 */ class QS {
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
 */ class la extends QS {
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
 */ class qn extends la {
  constructor() {
    super('facebook.com');
  }
  static credential(e) {
    return ri._fromParams({
      providerId: qn.PROVIDER_ID,
      signInMethod: qn.FACEBOOK_SIGN_IN_METHOD,
      accessToken: e
    });
  }
  static credentialFromResult(e) {
    return qn.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return qn.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !('oauthAccessToken' in e) || !e.oauthAccessToken) return null;
    try {
      return qn.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
qn.FACEBOOK_SIGN_IN_METHOD = 'facebook.com';
qn.PROVIDER_ID = 'facebook.com';
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
 */ class Gn extends la {
  constructor() {
    super('google.com'), this.addScope('profile');
  }
  static credential(e, n) {
    return ri._fromParams({
      providerId: Gn.PROVIDER_ID,
      signInMethod: Gn.GOOGLE_SIGN_IN_METHOD,
      idToken: e,
      accessToken: n
    });
  }
  static credentialFromResult(e) {
    return Gn.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return Gn.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e) return null;
    const { oauthIdToken: n, oauthAccessToken: r } = e;
    if (!n && !r) return null;
    try {
      return Gn.credential(n, r);
    } catch {
      return null;
    }
  }
}
Gn.GOOGLE_SIGN_IN_METHOD = 'google.com';
Gn.PROVIDER_ID = 'google.com';
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
 */ class Qn extends la {
  constructor() {
    super('github.com');
  }
  static credential(e) {
    return ri._fromParams({
      providerId: Qn.PROVIDER_ID,
      signInMethod: Qn.GITHUB_SIGN_IN_METHOD,
      accessToken: e
    });
  }
  static credentialFromResult(e) {
    return Qn.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return Qn.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !('oauthAccessToken' in e) || !e.oauthAccessToken) return null;
    try {
      return Qn.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Qn.GITHUB_SIGN_IN_METHOD = 'github.com';
Qn.PROVIDER_ID = 'github.com';
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
 */ class Yn extends la {
  constructor() {
    super('twitter.com');
  }
  static credential(e, n) {
    return ri._fromParams({
      providerId: Yn.PROVIDER_ID,
      signInMethod: Yn.TWITTER_SIGN_IN_METHOD,
      oauthToken: e,
      oauthTokenSecret: n
    });
  }
  static credentialFromResult(e) {
    return Yn.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return Yn.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e) return null;
    const { oauthAccessToken: n, oauthTokenSecret: r } = e;
    if (!n || !r) return null;
    try {
      return Yn.credential(n, r);
    } catch {
      return null;
    }
  }
}
Yn.TWITTER_SIGN_IN_METHOD = 'twitter.com';
Yn.PROVIDER_ID = 'twitter.com';
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
 */ async function GO(t, e) {
  return oa(t, 'POST', '/v1/accounts:signUp', ia(t, e));
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
 */ class ii {
  constructor(e) {
    (this.user = e.user),
      (this.providerId = e.providerId),
      (this._tokenResponse = e._tokenResponse),
      (this.operationType = e.operationType);
  }
  static async _fromIdTokenResponse(e, n, r, i = !1) {
    const s = await Wr._fromIdTokenResponse(e, r, i),
      o = wv(r);
    return new ii({ user: s, providerId: o, _tokenResponse: r, operationType: n });
  }
  static async _forOperation(e, n, r) {
    await e._updateTokensIfNecessary(r, !0);
    const i = wv(r);
    return new ii({ user: e, providerId: i, _tokenResponse: r, operationType: n });
  }
}
function wv(t) {
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
 */ class nu extends Mn {
  constructor(e, n, r, i) {
    var s;
    super(n.code, n.message),
      (this.operationType = r),
      (this.user = i),
      Object.setPrototypeOf(this, nu.prototype),
      (this.customData = {
        appName: e.name,
        tenantId: (s = e.tenantId) !== null && s !== void 0 ? s : void 0,
        _serverResponse: n.customData._serverResponse,
        operationType: r
      });
  }
  static _fromErrorAndOperation(e, n, r, i) {
    return new nu(e, n, r, i);
  }
}
function YS(t, e, n, r) {
  return (
    e === 'reauthenticate' ? n._getReauthenticationResolver(t) : n._getIdTokenResponse(t)
  ).catch((s) => {
    throw s.code === 'auth/multi-factor-auth-required' ? nu._fromErrorAndOperation(t, s, e, r) : s;
  });
}
async function QO(t, e, n = !1) {
  const r = await Po(t, e._linkToIdToken(t.auth, await t.getIdToken()), n);
  return ii._forOperation(t, 'link', r);
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
 */ async function YO(t, e, n = !1) {
  const { auth: r } = t,
    i = 'reauthenticate';
  try {
    const s = await Po(t, YS(r, i, e, t), n);
    q(s.idToken, r, 'internal-error');
    const o = Tm(s.idToken);
    q(o, r, 'internal-error');
    const { sub: a } = o;
    return q(t.uid === a, r, 'user-mismatch'), ii._forOperation(t, i, s);
  } catch (s) {
    throw ((s == null ? void 0 : s.code) === 'auth/user-not-found' && nn(r, 'user-mismatch'), s);
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
 */ async function XS(t, e, n = !1) {
  const r = 'signIn',
    i = await YS(t, r, e),
    s = await ii._fromIdTokenResponse(t, r, i);
  return n || (await t._updateCurrentUser(s.user)), s;
}
async function XO(t, e) {
  return XS(aa(t), e);
}
async function JO(t, e, n) {
  const r = aa(t),
    i = await GO(r, { returnSecureToken: !0, email: e, password: n }),
    s = await ii._fromIdTokenResponse(r, 'signIn', i);
  return await r._updateCurrentUser(s.user), s;
}
function ZO(t, e, n) {
  return XO(Fn(t), vs.credential(e, n));
}
function eP(t, e, n, r) {
  return Fn(t).onIdTokenChanged(e, n, r);
}
function tP(t, e, n) {
  return Fn(t).beforeAuthStateChanged(e, n);
}
function nP(t, e, n, r) {
  return Fn(t).onAuthStateChanged(e, n, r);
}
const ru = '__sak';
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
 */ class JS {
  constructor(e, n) {
    (this.storageRetriever = e), (this.type = n);
  }
  _isAvailable() {
    try {
      return this.storage
        ? (this.storage.setItem(ru, '1'), this.storage.removeItem(ru), Promise.resolve(!0))
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
 */ function rP() {
  const t = dt();
  return Im(t) || _c(t);
}
const iP = 1e3,
  sP = 10;
class ZS extends JS {
  constructor() {
    super(() => window.localStorage, 'LOCAL'),
      (this.boundEventHandler = (e, n) => this.onStorageEvent(e, n)),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.safariLocalStorageNotSynced = rP() && $O()),
      (this.fallbackToPolling = WS()),
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
    LO() && s !== e.newValue && e.newValue !== e.oldValue ? setTimeout(i, sP) : i();
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
      }, iP));
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
ZS.type = 'LOCAL';
const oP = ZS;
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
 */ class e_ extends JS {
  constructor() {
    super(() => window.sessionStorage, 'SESSION');
  }
  _addListener(e, n) {}
  _removeListener(e, n) {}
}
e_.type = 'SESSION';
const t_ = e_;
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
 */ function aP(t) {
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
 */ class Tc {
  constructor(e) {
    (this.eventTarget = e),
      (this.handlersMap = {}),
      (this.boundEventHandler = this.handleEvent.bind(this));
  }
  static _getInstance(e) {
    const n = this.receivers.find((i) => i.isListeningto(e));
    if (n) return n;
    const r = new Tc(e);
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
      l = await aP(a);
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
Tc.receivers = [];
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
 */ function Am(t = '', e = 10) {
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
 */ class lP {
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
      const u = Am('', 20);
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
 */ function pn() {
  return window;
}
function uP(t) {
  pn().location.href = t;
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
 */ function n_() {
  return typeof pn().WorkerGlobalScope < 'u' && typeof pn().importScripts == 'function';
}
async function cP() {
  if (!(navigator != null && navigator.serviceWorker)) return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function hP() {
  var t;
  return (
    ((t = navigator == null ? void 0 : navigator.serviceWorker) === null || t === void 0
      ? void 0
      : t.controller) || null
  );
}
function dP() {
  return n_() ? self : null;
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
 */ const r_ = 'firebaseLocalStorageDb',
  fP = 1,
  iu = 'firebaseLocalStorage',
  i_ = 'fbase_key';
class ua {
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
function Ic(t, e) {
  return t.transaction([iu], e ? 'readwrite' : 'readonly').objectStore(iu);
}
function pP() {
  const t = indexedDB.deleteDatabase(r_);
  return new ua(t).toPromise();
}
function Ef() {
  const t = indexedDB.open(r_, fP);
  return new Promise((e, n) => {
    t.addEventListener('error', () => {
      n(t.error);
    }),
      t.addEventListener('upgradeneeded', () => {
        const r = t.result;
        try {
          r.createObjectStore(iu, { keyPath: i_ });
        } catch (i) {
          n(i);
        }
      }),
      t.addEventListener('success', async () => {
        const r = t.result;
        r.objectStoreNames.contains(iu) ? e(r) : (r.close(), await pP(), e(await Ef()));
      });
  });
}
async function Ev(t, e, n) {
  const r = Ic(t, !0).put({ [i_]: e, value: n });
  return new ua(r).toPromise();
}
async function mP(t, e) {
  const n = Ic(t, !1).get(e),
    r = await new ua(n).toPromise();
  return r === void 0 ? null : r.value;
}
function Sv(t, e) {
  const n = Ic(t, !0).delete(e);
  return new ua(n).toPromise();
}
const gP = 800,
  yP = 3;
class s_ {
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
    return this.db ? this.db : ((this.db = await Ef()), this.db);
  }
  async _withRetries(e) {
    let n = 0;
    for (;;)
      try {
        const r = await this._openDb();
        return await e(r);
      } catch (r) {
        if (n++ > yP) throw r;
        this.db && (this.db.close(), (this.db = void 0));
      }
  }
  async initializeServiceWorkerMessaging() {
    return n_() ? this.initializeReceiver() : this.initializeSender();
  }
  async initializeReceiver() {
    (this.receiver = Tc._getInstance(dP())),
      this.receiver._subscribe('keyChanged', async (e, n) => ({
        keyProcessed: (await this._poll()).includes(n.key)
      })),
      this.receiver._subscribe('ping', async (e, n) => ['keyChanged']);
  }
  async initializeSender() {
    var e, n;
    if (((this.activeServiceWorker = await cP()), !this.activeServiceWorker)) return;
    this.sender = new lP(this.activeServiceWorker);
    const r = await this.sender._send('ping', {}, 800);
    r &&
      !((e = r[0]) === null || e === void 0) &&
      e.fulfilled &&
      !((n = r[0]) === null || n === void 0) &&
      n.value.includes('keyChanged') &&
      (this.serviceWorkerReceiverAvailable = !0);
  }
  async notifyServiceWorker(e) {
    if (!(!this.sender || !this.activeServiceWorker || hP() !== this.activeServiceWorker))
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
      const e = await Ef();
      return await Ev(e, ru, '1'), await Sv(e, ru), !0;
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
        await this._withRetries((r) => Ev(r, e, n)),
        (this.localCache[e] = n),
        this.notifyServiceWorker(e)
      )
    );
  }
  async _get(e) {
    const n = await this._withRetries((r) => mP(r, e));
    return (this.localCache[e] = n), n;
  }
  async _remove(e) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((n) => Sv(n, e)),
        delete this.localCache[e],
        this.notifyServiceWorker(e)
      )
    );
  }
  async _poll() {
    const e = await this._withRetries((i) => {
      const s = Ic(i, !1).getAll();
      return new ua(s).toPromise();
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
    this.stopPolling(), (this.pollTimer = setInterval(async () => this._poll(), gP));
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
s_.type = 'LOCAL';
const vP = s_;
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
 */ function wP() {
  var t, e;
  return (e =
    (t = document.getElementsByTagName('head')) === null || t === void 0 ? void 0 : t[0]) !==
    null && e !== void 0
    ? e
    : document;
}
function EP(t) {
  return new Promise((e, n) => {
    const r = document.createElement('script');
    r.setAttribute('src', t),
      (r.onload = e),
      (r.onerror = (i) => {
        const s = fn('internal-error');
        (s.customData = i), n(s);
      }),
      (r.type = 'text/javascript'),
      (r.charset = 'UTF-8'),
      wP().appendChild(r);
  });
}
function SP(t) {
  return `__${t}${Math.floor(Math.random() * 1e6)}`;
}
new ra(3e4, 6e4);
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
 */ function _P(t, e) {
  return e ? kn(e) : (q(t._popupRedirectResolver, t, 'argument-error'), t._popupRedirectResolver);
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
 */ class Nm extends km {
  constructor(e) {
    super('custom', 'custom'), (this.params = e);
  }
  _getIdTokenResponse(e) {
    return zi(e, this._buildIdpRequest());
  }
  _linkToIdToken(e, n) {
    return zi(e, this._buildIdpRequest(n));
  }
  _getReauthenticationResolver(e) {
    return zi(e, this._buildIdpRequest());
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
function TP(t) {
  return XS(t.auth, new Nm(t), t.bypassAuthState);
}
function IP(t) {
  const { auth: e, user: n } = t;
  return q(n, e, 'internal-error'), YO(n, new Nm(t), t.bypassAuthState);
}
async function kP(t) {
  const { auth: e, user: n } = t;
  return q(n, e, 'internal-error'), QO(n, new Nm(t), t.bypassAuthState);
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
 */ class o_ {
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
        return TP;
      case 'linkViaPopup':
      case 'linkViaRedirect':
        return kP;
      case 'reauthViaPopup':
      case 'reauthViaRedirect':
        return IP;
      default:
        nn(this.auth, 'internal-error');
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
 */ const CP = new ra(2e3, 1e4);
class Ci extends o_ {
  constructor(e, n, r, i, s) {
    super(e, n, i, s),
      (this.provider = r),
      (this.authWindow = null),
      (this.pollId = null),
      Ci.currentPopupAction && Ci.currentPopupAction.cancel(),
      (Ci.currentPopupAction = this);
  }
  async executeNotNull() {
    const e = await this.execute();
    return q(e, this.auth, 'internal-error'), e;
  }
  async onExecution() {
    $n(this.filter.length === 1, 'Popup operations only handle one event');
    const e = Am();
    (this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], e)),
      (this.authWindow.associatedEvent = e),
      this.resolver._originValidation(this.auth).catch((n) => {
        this.reject(n);
      }),
      this.resolver._isIframeWebStorageSupported(this.auth, (n) => {
        n || this.reject(fn(this.auth, 'web-storage-unsupported'));
      }),
      this.pollUserCancellation();
  }
  get eventId() {
    var e;
    return ((e = this.authWindow) === null || e === void 0 ? void 0 : e.associatedEvent) || null;
  }
  cancel() {
    this.reject(fn(this.auth, 'cancelled-popup-request'));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(),
      this.pollId && window.clearTimeout(this.pollId),
      (this.authWindow = null),
      (this.pollId = null),
      (Ci.currentPopupAction = null);
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
          (this.pollId = null), this.reject(fn(this.auth, 'popup-closed-by-user'));
        }, 2e3);
        return;
      }
      this.pollId = window.setTimeout(e, CP.get());
    };
    e();
  }
}
Ci.currentPopupAction = null;
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
 */ const AP = 'pendingRedirect',
  tl = new Map();
class NP extends o_ {
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
    let e = tl.get(this.auth._key());
    if (!e) {
      try {
        const r = (await RP(this.resolver, this.auth)) ? await super.execute() : null;
        e = () => Promise.resolve(r);
      } catch (n) {
        e = () => Promise.reject(n);
      }
      tl.set(this.auth._key(), e);
    }
    return this.bypassAuthState || tl.set(this.auth._key(), () => Promise.resolve(null)), e();
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
async function RP(t, e) {
  const n = OP(e),
    r = DP(t);
  if (!(await r._isAvailable())) return !1;
  const i = (await r._get(n)) === 'true';
  return await r._remove(n), i;
}
function xP(t, e) {
  tl.set(t._key(), e);
}
function DP(t) {
  return kn(t._redirectPersistence);
}
function OP(t) {
  return el(AP, t.config.apiKey, t.name);
}
async function PP(t, e, n = !1) {
  const r = aa(t),
    i = _P(r, e),
    o = await new NP(r, i, n).execute();
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
 */ const LP = 10 * 60 * 1e3;
class $P {
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
        !bP(e) ||
        ((this.hasHandledPotentialRedirect = !0), n || ((this.queuedRedirectEvent = e), (n = !0))),
      n
    );
  }
  sendToConsumer(e, n) {
    var r;
    if (e.error && !a_(e)) {
      const i =
        ((r = e.error.code) === null || r === void 0 ? void 0 : r.split('auth/')[1]) ||
        'internal-error';
      n.onError(fn(this.auth, i));
    } else n.onAuthEvent(e);
  }
  isEventForConsumer(e, n) {
    const r = n.eventId === null || (!!e.eventId && e.eventId === n.eventId);
    return n.filter.includes(e.type) && r;
  }
  hasEventBeenHandled(e) {
    return (
      Date.now() - this.lastProcessedEventTime >= LP && this.cachedEventUids.clear(),
      this.cachedEventUids.has(_v(e))
    );
  }
  saveEventToCache(e) {
    this.cachedEventUids.add(_v(e)), (this.lastProcessedEventTime = Date.now());
  }
}
function _v(t) {
  return [t.type, t.eventId, t.sessionId, t.tenantId].filter((e) => e).join('-');
}
function a_({ type: t, error: e }) {
  return t === 'unknown' && (e == null ? void 0 : e.code) === 'auth/no-auth-event';
}
function bP(t) {
  switch (t.type) {
    case 'signInViaRedirect':
    case 'linkViaRedirect':
    case 'reauthViaRedirect':
      return !0;
    case 'unknown':
      return a_(t);
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
 */ async function MP(t, e = {}) {
  return sa(t, 'GET', '/v1/projects', e);
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
 */ const FP = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
  UP = /^https?/;
async function VP(t) {
  if (t.config.emulator) return;
  const { authorizedDomains: e } = await MP(t);
  for (const n of e)
    try {
      if (jP(n)) return;
    } catch {}
  nn(t, 'unauthorized-domain');
}
function jP(t) {
  const e = wf(),
    { protocol: n, hostname: r } = new URL(e);
  if (t.startsWith('chrome-extension://')) {
    const o = new URL(t);
    return o.hostname === '' && r === ''
      ? n === 'chrome-extension:' &&
          t.replace('chrome-extension://', '') === e.replace('chrome-extension://', '')
      : n === 'chrome-extension:' && o.hostname === r;
  }
  if (!UP.test(n)) return !1;
  if (FP.test(t)) return r === t;
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
 */ const zP = new ra(3e4, 6e4);
function Tv() {
  const t = pn().___jsl;
  if (t != null && t.H) {
    for (const e of Object.keys(t.H))
      if (
        ((t.H[e].r = t.H[e].r || []), (t.H[e].L = t.H[e].L || []), (t.H[e].r = [...t.H[e].L]), t.CP)
      )
        for (let n = 0; n < t.CP.length; n++) t.CP[n] = null;
  }
}
function BP(t) {
  return new Promise((e, n) => {
    var r, i, s;
    function o() {
      Tv(),
        gapi.load('gapi.iframes', {
          callback: () => {
            e(gapi.iframes.getContext());
          },
          ontimeout: () => {
            Tv(), n(fn(t, 'network-request-failed'));
          },
          timeout: zP.get()
        });
    }
    if (
      !(
        (i = (r = pn().gapi) === null || r === void 0 ? void 0 : r.iframes) === null || i === void 0
      ) &&
      i.Iframe
    )
      e(gapi.iframes.getContext());
    else if (!((s = pn().gapi) === null || s === void 0) && s.load) o();
    else {
      const a = SP('iframefcb');
      return (
        (pn()[a] = () => {
          gapi.load ? o() : n(fn(t, 'network-request-failed'));
        }),
        EP(`https://apis.google.com/js/api.js?onload=${a}`).catch((l) => n(l))
      );
    }
  }).catch((e) => {
    throw ((nl = null), e);
  });
}
let nl = null;
function HP(t) {
  return (nl = nl || BP(t)), nl;
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
 */ const KP = new ra(5e3, 15e3),
  WP = '__/auth/iframe',
  qP = 'emulator/auth/iframe',
  GP = {
    style: { position: 'absolute', top: '-100px', width: '1px', height: '1px' },
    'aria-hidden': 'true',
    tabindex: '-1'
  },
  QP = new Map([
    ['identitytoolkit.googleapis.com', 'p'],
    ['staging-identitytoolkit.sandbox.googleapis.com', 's'],
    ['test-identitytoolkit.sandbox.googleapis.com', 't']
  ]);
function YP(t) {
  const e = t.config;
  q(e.authDomain, t, 'auth-domain-config-required');
  const n = e.emulator ? _m(e, qP) : `https://${t.config.authDomain}/${WP}`,
    r = { apiKey: e.apiKey, appName: t.name, v: Bo },
    i = QP.get(t.config.apiHost);
  i && (r.eid = i);
  const s = t._getFrameworks();
  return s.length && (r.fw = s.join(',')), `${n}?${zo(r).slice(1)}`;
}
async function XP(t) {
  const e = await HP(t),
    n = pn().gapi;
  return (
    q(n, t, 'internal-error'),
    e.open(
      {
        where: document.body,
        url: YP(t),
        messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: GP,
        dontclear: !0
      },
      (r) =>
        new Promise(async (i, s) => {
          await r.restyle({ setHideOnLeave: !1 });
          const o = fn(t, 'network-request-failed'),
            a = pn().setTimeout(() => {
              s(o);
            }, KP.get());
          function l() {
            pn().clearTimeout(a), i(r);
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
 */ const JP = { location: 'yes', resizable: 'yes', statusbar: 'yes', toolbar: 'no' },
  ZP = 500,
  eL = 600,
  tL = '_blank',
  nL = 'http://localhost';
class Iv {
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
function rL(t, e, n, r = ZP, i = eL) {
  const s = Math.max((window.screen.availHeight - i) / 2, 0).toString(),
    o = Math.max((window.screen.availWidth - r) / 2, 0).toString();
  let a = '';
  const l = Object.assign(Object.assign({}, JP), {
      width: r.toString(),
      height: i.toString(),
      top: s,
      left: o
    }),
    u = dt().toLowerCase();
  n && (a = jS(u) ? tL : n), VS(u) && ((e = e || nL), (l.scrollbars = 'yes'));
  const c = Object.entries(l).reduce((d, [m, y]) => `${d}${m}=${y},`, '');
  if (PO(u) && a !== '_self') return iL(e || '', a), new Iv(null);
  const h = window.open(e || '', a, c);
  q(h, t, 'popup-blocked');
  try {
    h.focus();
  } catch {}
  return new Iv(h);
}
function iL(t, e) {
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
 */ const sL = '__/auth/handler',
  oL = 'emulator/auth/handler';
function kv(t, e, n, r, i, s) {
  q(t.config.authDomain, t, 'auth-domain-config-required'),
    q(t.config.apiKey, t, 'invalid-api-key');
  const o = {
    apiKey: t.config.apiKey,
    appName: t.name,
    authType: n,
    redirectUrl: r,
    v: Bo,
    eventId: i
  };
  if (e instanceof QS) {
    e.setDefaultLanguage(t.languageCode),
      (o.providerId = e.providerId || ''),
      cA(e.getCustomParameters()) || (o.customParameters = JSON.stringify(e.getCustomParameters()));
    for (const [l, u] of Object.entries(s || {})) o[l] = u;
  }
  if (e instanceof la) {
    const l = e.getScopes().filter((u) => u !== '');
    l.length > 0 && (o.scopes = l.join(','));
  }
  t.tenantId && (o.tid = t.tenantId);
  const a = o;
  for (const l of Object.keys(a)) a[l] === void 0 && delete a[l];
  return `${aL(t)}?${zo(a).slice(1)}`;
}
function aL({ config: t }) {
  return t.emulator ? _m(t, oL) : `https://${t.authDomain}/${sL}`;
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
 */ const Rh = 'webStorageSupport';
class lL {
  constructor() {
    (this.eventManagers = {}),
      (this.iframes = {}),
      (this.originValidationPromises = {}),
      (this._redirectPersistence = t_),
      (this._completeRedirectFn = PP),
      (this._overrideRedirectResult = xP);
  }
  async _openPopup(e, n, r, i) {
    var s;
    $n(
      (s = this.eventManagers[e._key()]) === null || s === void 0 ? void 0 : s.manager,
      '_initialize() not called before _openPopup()'
    );
    const o = kv(e, n, r, wf(), i);
    return rL(e, o, Am());
  }
  async _openRedirect(e, n, r, i) {
    return await this._originValidation(e), uP(kv(e, n, r, wf(), i)), new Promise(() => {});
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
    const n = await XP(e),
      r = new $P(e);
    return (
      n.register(
        'authEvent',
        (i) => (
          q(i == null ? void 0 : i.authEvent, e, 'invalid-auth-event'),
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
      Rh,
      { type: Rh },
      (i) => {
        var s;
        const o = (s = i == null ? void 0 : i[0]) === null || s === void 0 ? void 0 : s[Rh];
        o !== void 0 && n(!!o), nn(e, 'internal-error');
      },
      gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
    );
  }
  _originValidation(e) {
    const n = e._key();
    return (
      this.originValidationPromises[n] || (this.originValidationPromises[n] = VP(e)),
      this.originValidationPromises[n]
    );
  }
  get _shouldInitProactively() {
    return WS() || Im() || _c();
  }
}
const uL = lL;
var Cv = '@firebase/auth',
  Av = '0.21.4';
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
 */ class cL {
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
    q(this.auth._initializationPromise, 'dependent-sdk-initialized-before-auth');
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
 */ function hL(t) {
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
function dL(t) {
  es(
    new Zr(
      'auth',
      (e, { options: n }) => {
        const r = e.getProvider('app').getImmediate(),
          i = e.getProvider('heartbeat'),
          { apiKey: s, authDomain: o } = r.options;
        return ((a, l) => {
          q(s && !s.includes(':'), 'invalid-api-key', { appName: a.name }),
            q(!(o != null && o.includes(':')), 'argument-error', { appName: a.name });
          const u = {
              apiKey: s,
              authDomain: o,
              clientPlatform: t,
              apiHost: 'identitytoolkit.googleapis.com',
              tokenApiHost: 'securetoken.googleapis.com',
              apiScheme: 'https',
              sdkClientVersion: qS(t)
            },
            c = new MO(a, l, u);
          return gO(c, n), c;
        })(r, i);
      },
      'PUBLIC'
    )
      .setInstantiationMode('EXPLICIT')
      .setInstanceCreatedCallback((e, n, r) => {
        e.getProvider('auth-internal').initialize();
      })
  ),
    es(
      new Zr(
        'auth-internal',
        (e) => {
          const n = aa(e.getProvider('auth').getImmediate());
          return ((r) => new cL(r))(n);
        },
        'PRIVATE'
      ).setInstantiationMode('EXPLICIT')
    ),
    pr(Cv, Av, hL(t)),
    pr(Cv, Av, 'esm2017');
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
 */ const fL = 5 * 60,
  pL = D1('authIdTokenMaxAge') || fL;
let Nv = null;
const mL = (t) => async (e) => {
  const n = e && (await e.getIdTokenResult()),
    r = n && (new Date().getTime() - Date.parse(n.issuedAtTime)) / 1e3;
  if (r && r > pL) return;
  const i = n == null ? void 0 : n.token;
  Nv !== i &&
    ((Nv = i),
    await fetch(t, {
      method: i ? 'POST' : 'DELETE',
      headers: i ? { Authorization: `Bearer ${i}` } : {}
    }));
};
function gL(t = $1()) {
  const e = Lp(t, 'auth');
  if (e.isInitialized()) return e.getImmediate();
  const n = mO(t, { popupRedirectResolver: uL, persistence: [vP, oP, t_] }),
    r = D1('authTokenSyncURL');
  if (r) {
    const s = mL(r);
    tP(n, s, () => s(n.currentUser)), eP(n, (o) => s(o));
  }
  const i = x1('auth');
  return i && FO(n, `http://${i}`), n;
}
dL('Browser');
const yL = {
    apiKey: 'AIzaSyBJjwj12LEJT2EsEP_hEz9k_63KPu5lDyU',
    authDomain: 'chatapp-3aac4.firebaseapp.com',
    databaseURL: 'https://chatapp-3aac4-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'chatapp-3aac4',
    storageBucket: 'chatapp-3aac4.appspot.com',
    messagingSenderId: '478305703317',
    appId: '1:478305703317:web:94d0307ae5053b5409129c'
  },
  l_ = L1(yL),
  vL = eO(l_),
  Rm = gL(l_),
  rl = Ru('usersService/fetchUserArray', async () => {
    const t = [];
    try {
      return (
        (await dO(JD(vL, 'users'))).forEach((n) => {
          t.push({ id: n.id, ...n.data() });
        }),
        t
      );
    } catch (e) {
      console.log(e);
    }
    return t;
  });
Ru('usersService/fetchSignedInUserData', async () => {
  const t = [];
  try {
    nP(Rm, (e) => (e ? t.push(e) : console.log('User is not signed in'), t));
  } catch (e) {
    console.log(e);
  }
  return t;
});
const wL = g1({
    name: 'data',
    initialState: { data: [], isLoading: !1, hasError: !1 },
    reducers: { setData: (t, e) => ({ ...t, ...e.payload }) },
    extraReducers(t) {
      t.addCase(rl.pending, (e, n) => {
        e.isLoading = !0;
      }),
        t.addCase(rl.fulfilled, (e, n) => {
          (e.isLoading = !1), (e.data = n.payload);
        }),
        t.addCase(rl.rejected, (e, n) => {
          (e.hasError = !0), (e.isLoading = !1);
        });
    }
  }),
  EL = wL.reducer,
  il = Ru('authService/signInUser', async (t) => {
    const e = { user: {}, isLoggedIn: !1 };
    return (
      await ZO(Rm, t.email, t.password)
        .then((n) => {
          (e.user = {
            email: n.user.email,
            uid: n.user.uid,
            displayName: n.user.displayName,
            photoURL: n.user.photoURL,
            phoneNumber: n.user.phoneNumber,
            emailVerified: n.user.emailVerified,
            isAnonymous: n.user.isAnonymous,
            metadata: n.user.metadata
          }),
            (e.isLoggedIn = !0);
        })
        .catch((n) => {
          console.log(n.message);
        }),
      e
    );
  }),
  SL = Ru(
    'authService/registerUser',
    async (t) => (
      await JO(Rm, t.email, t.password)
        .then(() => t)
        .catch((e) => {
          console.log(e.message);
        }),
      t
    )
  ),
  _L = g1({
    name: 'user',
    initialState: { loginData: {}, isLoggedIn: !1, isLoading: !1, hasError: !1 },
    reducers: {},
    extraReducers(t) {
      t.addCase(il.pending, (e, n) => {
        e.isLoading = !0;
      }),
        t.addCase(il.fulfilled, (e, n) => {
          (e.isLoading = !1), (e.isLoggedIn = n.payload.isLoggedIn), (e.loginData = n.payload.user);
        }),
        t.addCase(il.rejected, (e, n) => {
          (e.hasError = !0), (e.isLoading = !1);
        });
    }
  }),
  TL = _L.reducer,
  IL = d1({ users: EL, user: TL }),
  kL = zk({ reducer: IL, middleware: (t) => t() }),
  CL = ({ children: t }) => Se(VC, { store: kL, children: t });
/**
 * @remix-run/router v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function su() {
  return (
    (su = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    su.apply(this, arguments)
  );
}
var er;
(function (t) {
  (t.Pop = 'POP'), (t.Push = 'PUSH'), (t.Replace = 'REPLACE');
})(er || (er = {}));
const Rv = 'popstate';
function AL(t) {
  t === void 0 && (t = {});
  function e(r, i) {
    let { pathname: s, search: o, hash: a } = r.location;
    return Sf(
      '',
      { pathname: s, search: o, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || 'default'
    );
  }
  function n(r, i) {
    return typeof i == 'string' ? i : u_(i);
  }
  return RL(e, n, null, t);
}
function At(t, e) {
  if (t === !1 || t === null || typeof t > 'u') throw new Error(e);
}
function NL() {
  return Math.random().toString(36).substr(2, 8);
}
function xv(t, e) {
  return { usr: t.state, key: t.key, idx: e };
}
function Sf(t, e, n, r) {
  return (
    n === void 0 && (n = null),
    su(
      { pathname: typeof t == 'string' ? t : t.pathname, search: '', hash: '' },
      typeof e == 'string' ? kc(e) : e,
      { state: n, key: (e && e.key) || r || NL() }
    )
  );
}
function u_(t) {
  let { pathname: e = '/', search: n = '', hash: r = '' } = t;
  return (
    n && n !== '?' && (e += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (e += r.charAt(0) === '#' ? r : '#' + r),
    e
  );
}
function kc(t) {
  let e = {};
  if (t) {
    let n = t.indexOf('#');
    n >= 0 && ((e.hash = t.substr(n)), (t = t.substr(0, n)));
    let r = t.indexOf('?');
    r >= 0 && ((e.search = t.substr(r)), (t = t.substr(0, r))), t && (e.pathname = t);
  }
  return e;
}
function RL(t, e, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: s = !1 } = r,
    o = i.history,
    a = er.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), o.replaceState(su({}, o.state, { idx: u }), ''));
  function c() {
    return (o.state || { idx: null }).idx;
  }
  function h() {
    a = er.Pop;
    let S = c(),
      p = S == null ? null : S - u;
    (u = S), l && l({ action: a, location: v.location, delta: p });
  }
  function d(S, p) {
    a = er.Push;
    let f = Sf(v.location, S, p);
    n && n(f, S), (u = c() + 1);
    let g = xv(f, u),
      E = v.createHref(f);
    try {
      o.pushState(g, '', E);
    } catch {
      i.location.assign(E);
    }
    s && l && l({ action: a, location: v.location, delta: 1 });
  }
  function m(S, p) {
    a = er.Replace;
    let f = Sf(v.location, S, p);
    n && n(f, S), (u = c());
    let g = xv(f, u),
      E = v.createHref(f);
    o.replaceState(g, '', E), s && l && l({ action: a, location: v.location, delta: 0 });
  }
  function y(S) {
    let p = i.location.origin !== 'null' ? i.location.origin : i.location.href,
      f = typeof S == 'string' ? S : u_(S);
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
        i.addEventListener(Rv, h),
        (l = S),
        () => {
          i.removeEventListener(Rv, h), (l = null);
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
var Dv;
(function (t) {
  (t.data = 'data'), (t.deferred = 'deferred'), (t.redirect = 'redirect'), (t.error = 'error');
})(Dv || (Dv = {}));
function xL(t, e, n) {
  n === void 0 && (n = '/');
  let r = typeof e == 'string' ? kc(e) : e,
    i = d_(r.pathname || '/', n);
  if (i == null) return null;
  let s = c_(t);
  DL(s);
  let o = null;
  for (let a = 0; o == null && a < s.length; ++a) o = VL(s[a], BL(i));
  return o;
}
function c_(t, e, n, r) {
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
    let u = Bi([r, l.relativePath]),
      c = n.concat(l);
    s.children &&
      s.children.length > 0 &&
      (At(
        s.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + u + '".')
      ),
      c_(s.children, e, c, u)),
      !(s.path == null && !s.index) && e.push({ path: u, score: FL(u, s.index), routesMeta: c });
  };
  return (
    t.forEach((s, o) => {
      var a;
      if (s.path === '' || !((a = s.path) != null && a.includes('?'))) i(s, o);
      else for (let l of h_(s.path)) i(s, o, l);
    }),
    e
  );
}
function h_(t) {
  let e = t.split('/');
  if (e.length === 0) return [];
  let [n, ...r] = e,
    i = n.endsWith('?'),
    s = n.replace(/\?$/, '');
  if (r.length === 0) return i ? [s, ''] : [s];
  let o = h_(r.join('/')),
    a = [];
  return (
    a.push(...o.map((l) => (l === '' ? s : [s, l].join('/')))),
    i && a.push(...o),
    a.map((l) => (t.startsWith('/') && l === '' ? '/' : l))
  );
}
function DL(t) {
  t.sort((e, n) =>
    e.score !== n.score
      ? n.score - e.score
      : UL(
          e.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const OL = /^:\w+$/,
  PL = 3,
  LL = 2,
  $L = 1,
  bL = 10,
  ML = -2,
  Ov = (t) => t === '*';
function FL(t, e) {
  let n = t.split('/'),
    r = n.length;
  return (
    n.some(Ov) && (r += ML),
    e && (r += LL),
    n.filter((i) => !Ov(i)).reduce((i, s) => i + (OL.test(s) ? PL : s === '' ? $L : bL), r)
  );
}
function UL(t, e) {
  return t.length === e.length && t.slice(0, -1).every((r, i) => r === e[i])
    ? t[t.length - 1] - e[e.length - 1]
    : 0;
}
function VL(t, e) {
  let { routesMeta: n } = t,
    r = {},
    i = '/',
    s = [];
  for (let o = 0; o < n.length; ++o) {
    let a = n[o],
      l = o === n.length - 1,
      u = i === '/' ? e : e.slice(i.length) || '/',
      c = jL({ path: a.relativePath, caseSensitive: a.caseSensitive, end: l }, u);
    if (!c) return null;
    Object.assign(r, c.params);
    let h = a.route;
    s.push({
      params: r,
      pathname: Bi([i, c.pathname]),
      pathnameBase: KL(Bi([i, c.pathnameBase])),
      route: h
    }),
      c.pathnameBase !== '/' && (i = Bi([i, c.pathnameBase]));
  }
  return s;
}
function jL(t, e) {
  typeof t == 'string' && (t = { path: t, caseSensitive: !1, end: !0 });
  let [n, r] = zL(t.path, t.caseSensitive, t.end),
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
      return (u[c] = HL(a[h] || '', c)), u;
    }, {}),
    pathname: s,
    pathnameBase: o,
    pattern: t
  };
}
function zL(t, e, n) {
  e === void 0 && (e = !1),
    n === void 0 && (n = !0),
    xm(
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
function BL(t) {
  try {
    return decodeURI(t);
  } catch (e) {
    return (
      xm(
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
function HL(t, e) {
  try {
    return decodeURIComponent(t);
  } catch (n) {
    return (
      xm(
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
function d_(t, e) {
  if (e === '/') return t;
  if (!t.toLowerCase().startsWith(e.toLowerCase())) return null;
  let n = e.endsWith('/') ? e.length - 1 : e.length,
    r = t.charAt(n);
  return r && r !== '/' ? null : t.slice(n) || '/';
}
function xm(t, e) {
  if (!t) {
    typeof console < 'u' && console.warn(e);
    try {
      throw new Error(e);
    } catch {}
  }
}
const Bi = (t) => t.join('/').replace(/\/\/+/g, '/'),
  KL = (t) => t.replace(/\/+$/, '').replace(/^\/*/, '/');
function WL(t) {
  return (
    t != null &&
    typeof t.status == 'number' &&
    typeof t.statusText == 'string' &&
    typeof t.internal == 'boolean' &&
    'data' in t
  );
}
const qL = ['post', 'put', 'patch', 'delete'];
[...qL];
/**
 * React Router v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function _f() {
  return (
    (_f = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    _f.apply(this, arguments)
  );
}
function GL(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
const QL = typeof Object.is == 'function' ? Object.is : GL,
  { useState: YL, useEffect: XL, useLayoutEffect: JL, useDebugValue: ZL } = Uh;
function e$(t, e, n) {
  const r = e(),
    [{ inst: i }, s] = YL({ inst: { value: r, getSnapshot: e } });
  return (
    JL(() => {
      (i.value = r), (i.getSnapshot = e), xh(i) && s({ inst: i });
    }, [t, r, e]),
    XL(
      () => (
        xh(i) && s({ inst: i }),
        t(() => {
          xh(i) && s({ inst: i });
        })
      ),
      [t]
    ),
    ZL(r),
    r
  );
}
function xh(t) {
  const e = t.getSnapshot,
    n = t.value;
  try {
    const r = e();
    return !QL(n, r);
  } catch {
    return !0;
  }
}
function t$(t, e, n) {
  return e();
}
const n$ =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  r$ = !n$,
  i$ = r$ ? t$ : e$;
'useSyncExternalStore' in Uh && ((t) => t.useSyncExternalStore)(Uh);
const f_ = N.createContext(null),
  p_ = N.createContext(null),
  m_ = N.createContext(null),
  Cc = N.createContext(null),
  Ac = N.createContext({ outlet: null, matches: [] }),
  g_ = N.createContext(null);
function Dm() {
  return N.useContext(Cc) != null;
}
function s$() {
  return Dm() || At(!1), N.useContext(Cc).location;
}
function o$(t, e) {
  Dm() || At(!1);
  let { navigator: n } = N.useContext(m_),
    r = N.useContext(p_),
    { matches: i } = N.useContext(Ac),
    s = i[i.length - 1],
    o = s ? s.params : {};
  s && s.pathname;
  let a = s ? s.pathnameBase : '/';
  s && s.route;
  let l = s$(),
    u;
  if (e) {
    var c;
    let v = typeof e == 'string' ? kc(e) : e;
    a === '/' || ((c = v.pathname) != null && c.startsWith(a)) || At(!1), (u = v);
  } else u = l;
  let h = u.pathname || '/',
    d = a === '/' ? h : h.slice(a.length) || '/',
    m = xL(t, { pathname: d }),
    y = c$(
      m &&
        m.map((v) =>
          Object.assign({}, v, {
            params: Object.assign({}, o, v.params),
            pathname: Bi([
              a,
              n.encodeLocation ? n.encodeLocation(v.pathname).pathname : v.pathname
            ]),
            pathnameBase:
              v.pathnameBase === '/'
                ? a
                : Bi([
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
        Cc.Provider,
        {
          value: {
            location: _f({ pathname: '/', search: '', hash: '', state: null, key: 'default' }, u),
            navigationType: er.Pop
          }
        },
        y
      )
    : y;
}
function a$() {
  let t = p$(),
    e = WL(t) ? t.status + ' ' + t.statusText : t instanceof Error ? t.message : JSON.stringify(t),
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
class l$ extends N.Component {
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
          Ac.Provider,
          { value: this.props.routeContext },
          N.createElement(g_.Provider, { value: this.state.error, children: this.props.component })
        )
      : this.props.children;
  }
}
function u$(t) {
  let { routeContext: e, match: n, children: r } = t,
    i = N.useContext(f_);
  return (
    i &&
      i.static &&
      i.staticContext &&
      n.route.errorElement &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    N.createElement(Ac.Provider, { value: e }, r)
  );
}
function c$(t, e, n) {
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
      u = n ? o.route.errorElement || N.createElement(a$, null) : null,
      c = e.concat(r.slice(0, a + 1)),
      h = () =>
        N.createElement(
          u$,
          { match: o, routeContext: { outlet: s, matches: c } },
          l ? u : o.route.element !== void 0 ? o.route.element : s
        );
    return n && (o.route.errorElement || a === 0)
      ? N.createElement(l$, {
          location: n.location,
          component: u,
          error: l,
          children: h(),
          routeContext: { outlet: null, matches: c }
        })
      : h();
  }, null);
}
var Pv;
(function (t) {
  (t.UseBlocker = 'useBlocker'), (t.UseRevalidator = 'useRevalidator');
})(Pv || (Pv = {}));
var ou;
(function (t) {
  (t.UseLoaderData = 'useLoaderData'),
    (t.UseActionData = 'useActionData'),
    (t.UseRouteError = 'useRouteError'),
    (t.UseNavigation = 'useNavigation'),
    (t.UseRouteLoaderData = 'useRouteLoaderData'),
    (t.UseMatches = 'useMatches'),
    (t.UseRevalidator = 'useRevalidator');
})(ou || (ou = {}));
function h$(t) {
  let e = N.useContext(p_);
  return e || At(!1), e;
}
function d$(t) {
  let e = N.useContext(Ac);
  return e || At(!1), e;
}
function f$(t) {
  let e = d$(),
    n = e.matches[e.matches.length - 1];
  return n.route.id || At(!1), n.route.id;
}
function p$() {
  var t;
  let e = N.useContext(g_),
    n = h$(ou.UseRouteError),
    r = f$(ou.UseRouteError);
  return e || ((t = n.errors) == null ? void 0 : t[r]);
}
function sl(t) {
  At(!1);
}
function m$(t) {
  let {
    basename: e = '/',
    children: n = null,
    location: r,
    navigationType: i = er.Pop,
    navigator: s,
    static: o = !1
  } = t;
  Dm() && At(!1);
  let a = e.replace(/^\/*/, '/'),
    l = N.useMemo(() => ({ basename: a, navigator: s, static: o }), [a, s, o]);
  typeof r == 'string' && (r = kc(r));
  let { pathname: u = '/', search: c = '', hash: h = '', state: d = null, key: m = 'default' } = r,
    y = N.useMemo(() => {
      let v = d_(u, a);
      return v == null ? null : { pathname: v, search: c, hash: h, state: d, key: m };
    }, [a, u, c, h, d, m]);
  return y == null
    ? null
    : N.createElement(
        m_.Provider,
        { value: l },
        N.createElement(Cc.Provider, { children: n, value: { location: y, navigationType: i } })
      );
}
function g$(t) {
  let { children: e, location: n } = t,
    r = N.useContext(f_),
    i = r && !e ? r.router.routes : Tf(e);
  return o$(i, n);
}
var Lv;
(function (t) {
  (t[(t.pending = 0)] = 'pending'), (t[(t.success = 1)] = 'success'), (t[(t.error = 2)] = 'error');
})(Lv || (Lv = {}));
new Promise(() => {});
function Tf(t, e) {
  e === void 0 && (e = []);
  let n = [];
  return (
    N.Children.forEach(t, (r, i) => {
      if (!N.isValidElement(r)) return;
      if (r.type === N.Fragment) {
        n.push.apply(n, Tf(r.props.children, e));
        return;
      }
      r.type !== sl && At(!1), !r.props.index || !r.props.children || At(!1);
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
      r.props.children && (o.children = Tf(r.props.children, s)), n.push(o);
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
 */ function y$(t) {
  let { basename: e, children: n, window: r } = t,
    i = N.useRef();
  i.current == null && (i.current = AL({ window: r, v5Compat: !0 }));
  let s = i.current,
    [o, a] = N.useState({ action: s.action, location: s.location });
  return (
    N.useLayoutEffect(() => s.listen(a), [s]),
    N.createElement(m$, {
      basename: e,
      children: n,
      location: o.location,
      navigationType: o.action,
      navigator: s
    })
  );
}
var $v;
(function (t) {
  (t.UseScrollRestoration = 'useScrollRestoration'),
    (t.UseSubmitImpl = 'useSubmitImpl'),
    (t.UseFetcher = 'useFetcher');
})($v || ($v = {}));
var bv;
(function (t) {
  (t.UseFetchers = 'useFetchers'), (t.UseScrollRestoration = 'useScrollRestoration');
})(bv || (bv = {}));
var ca = (t) => t.type === 'checkbox',
  Ai = (t) => t instanceof Date,
  mt = (t) => t == null;
const y_ = (t) => typeof t == 'object';
var Be = (t) => !mt(t) && !Array.isArray(t) && y_(t) && !Ai(t),
  v$ = (t) => (Be(t) && t.target ? (ca(t.target) ? t.target.checked : t.target.value) : t),
  w$ = (t) => t.substring(0, t.search(/\.\d+(\.|$)/)) || t,
  E$ = (t, e) => t.has(w$(e)),
  S$ = (t) => {
    const e = t.constructor && t.constructor.prototype;
    return Be(e) && e.hasOwnProperty('isPrototypeOf');
  },
  Om = typeof window < 'u' && typeof window.HTMLElement < 'u' && typeof document < 'u';
function Dr(t) {
  let e;
  const n = Array.isArray(t);
  if (t instanceof Date) e = new Date(t);
  else if (t instanceof Set) e = new Set(t);
  else if (!(Om && (t instanceof Blob || t instanceof FileList)) && (n || Be(t)))
    if (((e = n ? [] : {}), !Array.isArray(t) && !S$(t))) e = t;
    else for (const r in t) e[r] = Dr(t[r]);
  else return t;
  return e;
}
var ha = (t) => (Array.isArray(t) ? t.filter(Boolean) : []),
  be = (t) => t === void 0,
  F = (t, e, n) => {
    if (!e || !Be(t)) return n;
    const r = ha(e.split(/[,[\].]+?/)).reduce((i, s) => (mt(i) ? i : i[s]), t);
    return be(r) || r === t ? (be(t[e]) ? n : t[e]) : r;
  };
const Mv = { BLUR: 'blur', FOCUS_OUT: 'focusout', CHANGE: 'change' },
  Jt = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
    onTouched: 'onTouched',
    all: 'all'
  },
  vn = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate'
  };
ne.createContext(null);
var _$ = (t, e, n, r = !0) => {
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
  T$ = (t, e, n, r) => {
    n(t);
    const { name: i, ...s } = t;
    return (
      Ft(s) ||
      Object.keys(s).length >= Object.keys(e).length ||
      Object.keys(s).find((o) => e[o] === (!r || Jt.all))
    );
  },
  Dh = (t) => (Array.isArray(t) ? t : [t]);
function I$(t) {
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
var un = (t) => typeof t == 'string',
  k$ = (t, e, n, r, i) =>
    un(t)
      ? (r && e.watch.add(t), F(n, t, i))
      : Array.isArray(t)
      ? t.map((s) => (r && e.watch.add(s), F(n, s)))
      : (r && (e.watchAll = !0), n),
  Pm = (t) => /^\w*$/.test(t),
  v_ = (t) => ha(t.replace(/["|']|\]/g, '').split(/\.|\[/));
function we(t, e, n) {
  let r = -1;
  const i = Pm(e) ? [e] : v_(e),
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
var C$ = (t, e, n, r, i) =>
  e ? { ...n[t], types: { ...(n[t] && n[t].types ? n[t].types : {}), [r]: i || !0 } } : {};
const If = (t, e, n) => {
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
      } else Be(o) && If(o, e);
    }
  }
};
var Fv = (t) => ({
    isOnSubmit: !t || t === Jt.onSubmit,
    isOnBlur: t === Jt.onBlur,
    isOnChange: t === Jt.onChange,
    isOnAll: t === Jt.all,
    isOnTouch: t === Jt.onTouched
  }),
  Uv = (t, e, n) =>
    !n &&
    (e.watchAll ||
      e.watch.has(t) ||
      [...e.watch].some((r) => t.startsWith(r) && /^\.\w+/.test(t.slice(r.length)))),
  A$ = (t, e, n) => {
    const r = ha(F(t, n));
    return we(r, 'root', e[n]), we(t, n, r), t;
  },
  Hi = (t) => typeof t == 'boolean',
  Lm = (t) => t.type === 'file',
  Ki = (t) => typeof t == 'function',
  au = (t) => {
    if (!Om) return !1;
    const e = t ? t.ownerDocument : 0;
    return t instanceof (e && e.defaultView ? e.defaultView.HTMLElement : HTMLElement);
  },
  ol = (t) => un(t),
  $m = (t) => t.type === 'radio',
  lu = (t) => t instanceof RegExp;
const Vv = { value: !1, isValid: !1 },
  jv = { value: !0, isValid: !0 };
var w_ = (t) => {
  if (Array.isArray(t)) {
    if (t.length > 1) {
      const e = t.filter((n) => n && n.checked && !n.disabled).map((n) => n.value);
      return { value: e, isValid: !!e.length };
    }
    return t[0].checked && !t[0].disabled
      ? t[0].attributes && !be(t[0].attributes.value)
        ? be(t[0].value) || t[0].value === ''
          ? jv
          : { value: t[0].value, isValid: !0 }
        : jv
      : Vv;
  }
  return Vv;
};
const zv = { isValid: !1, value: null };
var E_ = (t) =>
  Array.isArray(t)
    ? t.reduce((e, n) => (n && n.checked && !n.disabled ? { isValid: !0, value: n.value } : e), zv)
    : zv;
function Bv(t, e, n = 'validate') {
  if (ol(t) || (Array.isArray(t) && t.every(ol)) || (Hi(t) && !t))
    return { type: n, message: ol(t) ? t : '', ref: e };
}
var ci = (t) => (Be(t) && !lu(t) ? t : { value: t, message: '' }),
  Hv = async (t, e, n, r, i) => {
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
        r && g.reportValidity && (g.setCustomValidity(Hi(W) ? '' : W || ''), g.reportValidity());
      },
      _ = {},
      R = $m(s),
      x = ca(s),
      O = R || x,
      B =
        ((v || Lm(s)) && be(s.value) && be(f)) ||
        (au(s) && s.value === '') ||
        f === '' ||
        (Array.isArray(f) && !f.length),
      b = C$.bind(null, y, n, _),
      te = (W, H, Z, ge = vn.maxLength, le = vn.minLength) => {
        const ye = W ? H : Z;
        _[y] = { type: W ? ge : le, message: ye, ref: s, ...b(W ? ge : le, ye) };
      };
    if (
      i
        ? !Array.isArray(f) || !f.length
        : a &&
          ((!O && (B || mt(f))) || (Hi(f) && !f) || (x && !w_(o).isValid) || (R && !E_(o).isValid))
    ) {
      const { value: W, message: H } = ol(a) ? { value: !!a, message: a } : ci(a);
      if (W && ((_[y] = { type: vn.required, message: H, ref: g, ...b(vn.required, H) }), !n))
        return E(H), _;
    }
    if (!B && (!mt(c) || !mt(h))) {
      let W, H;
      const Z = ci(h),
        ge = ci(c);
      if (!mt(f) && !isNaN(f)) {
        const le = s.valueAsNumber || (f && +f);
        mt(Z.value) || (W = le > Z.value), mt(ge.value) || (H = le < ge.value);
      } else {
        const le = s.valueAsDate || new Date(f),
          ye = (Y) => new Date(new Date().toDateString() + ' ' + Y),
          D = s.type == 'time',
          j = s.type == 'week';
        un(Z.value) &&
          f &&
          (W = D ? ye(f) > ye(Z.value) : j ? f > Z.value : le > new Date(Z.value)),
          un(ge.value) &&
            f &&
            (H = D ? ye(f) < ye(ge.value) : j ? f < ge.value : le < new Date(ge.value));
      }
      if ((W || H) && (te(!!W, Z.message, ge.message, vn.max, vn.min), !n))
        return E(_[y].message), _;
    }
    if ((l || u) && !B && (un(f) || (i && Array.isArray(f)))) {
      const W = ci(l),
        H = ci(u),
        Z = !mt(W.value) && f.length > W.value,
        ge = !mt(H.value) && f.length < H.value;
      if ((Z || ge) && (te(Z, W.message, H.message), !n)) return E(_[y].message), _;
    }
    if (d && !B && un(f)) {
      const { value: W, message: H } = ci(d);
      if (
        lu(W) &&
        !f.match(W) &&
        ((_[y] = { type: vn.pattern, message: H, ref: s, ...b(vn.pattern, H) }), !n)
      )
        return E(H), _;
    }
    if (m) {
      if (Ki(m)) {
        const W = await m(f, e),
          H = Bv(W, g);
        if (H && ((_[y] = { ...H, ...b(vn.validate, H.message) }), !n)) return E(H.message), _;
      } else if (Be(m)) {
        let W = {};
        for (const H in m) {
          if (!Ft(W) && !n) break;
          const Z = Bv(await m[H](f, e), g, H);
          Z && ((W = { ...Z, ...b(H, Z.message) }), E(Z.message), n && (_[y] = W));
        }
        if (!Ft(W) && ((_[y] = { ref: g, ...W }), !n)) return _;
      }
    }
    return E(!0), _;
  };
function N$(t, e) {
  const n = e.slice(0, -1).length;
  let r = 0;
  for (; r < n; ) t = be(t) ? r++ : t[e[r++]];
  return t;
}
function R$(t) {
  for (const e in t) if (!be(t[e])) return !1;
  return !0;
}
function Qe(t, e) {
  const n = Array.isArray(e) ? e : Pm(e) ? [e] : v_(e),
    r = n.length === 1 ? t : N$(t, n),
    i = n.length - 1,
    s = n[i];
  return (
    r && delete r[s],
    i !== 0 && ((Be(r) && Ft(r)) || (Array.isArray(r) && R$(r))) && Qe(t, n.slice(0, -1)),
    t
  );
}
function Oh() {
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
var uu = (t) => mt(t) || !y_(t);
function Fr(t, e) {
  if (uu(t) || uu(e)) return t === e;
  if (Ai(t) && Ai(e)) return t.getTime() === e.getTime();
  const n = Object.keys(t),
    r = Object.keys(e);
  if (n.length !== r.length) return !1;
  for (const i of n) {
    const s = t[i];
    if (!r.includes(i)) return !1;
    if (i !== 'ref') {
      const o = e[i];
      if (
        (Ai(s) && Ai(o)) || (Be(s) && Be(o)) || (Array.isArray(s) && Array.isArray(o))
          ? !Fr(s, o)
          : s !== o
      )
        return !1;
    }
  }
  return !0;
}
var S_ = (t) => t.type === 'select-multiple',
  x$ = (t) => $m(t) || ca(t),
  Ph = (t) => au(t) && t.isConnected,
  __ = (t) => {
    for (const e in t) if (Ki(t[e])) return !0;
    return !1;
  };
function cu(t, e = {}) {
  const n = Array.isArray(t);
  if (Be(t) || n)
    for (const r in t)
      Array.isArray(t[r]) || (Be(t[r]) && !__(t[r]))
        ? ((e[r] = Array.isArray(t[r]) ? [] : {}), cu(t[r], e[r]))
        : mt(t[r]) || (e[r] = !0);
  return e;
}
function T_(t, e, n) {
  const r = Array.isArray(t);
  if (Be(t) || r)
    for (const i in t)
      Array.isArray(t[i]) || (Be(t[i]) && !__(t[i]))
        ? be(e) || uu(n[i])
          ? (n[i] = Array.isArray(t[i]) ? cu(t[i], []) : { ...cu(t[i]) })
          : T_(t[i], mt(e) ? {} : e[i], n[i])
        : (n[i] = !Fr(t[i], e[i]));
  return n;
}
var Lh = (t, e) => T_(t, e, cu(e)),
  I_ = (t, { valueAsNumber: e, valueAsDate: n, setValueAs: r }) =>
    be(t) ? t : e ? (t === '' ? NaN : t && +t) : n && un(t) ? new Date(t) : r ? r(t) : t;
function $h(t) {
  const e = t.ref;
  if (!(t.refs ? t.refs.every((n) => n.disabled) : e.disabled))
    return Lm(e)
      ? e.files
      : $m(e)
      ? E_(t.refs).value
      : S_(e)
      ? [...e.selectedOptions].map(({ value: n }) => n)
      : ca(e)
      ? w_(t.refs).value
      : I_(be(e.value) ? t.ref.value : e.value, t);
}
var D$ = (t, e, n, r) => {
    const i = {};
    for (const s of t) {
      const o = F(e, s);
      o && we(i, s, o._f);
    }
    return { criteriaMode: n, names: [...t], fields: i, shouldUseNativeValidation: r };
  },
  Rs = (t) => (be(t) ? t : lu(t) ? t.source : Be(t) ? (lu(t.value) ? t.value.source : t.value) : t),
  O$ = (t) =>
    t.mount &&
    (t.required || t.min || t.max || t.maxLength || t.minLength || t.pattern || t.validate);
function Kv(t, e, n) {
  const r = F(t, n);
  if (r || Pm(n)) return { error: r, name: n };
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
var P$ = (t, e, n, r, i) =>
    i.isOnAll
      ? !1
      : !n && i.isOnTouch
      ? !(e || t)
      : (n ? r.isOnBlur : i.isOnBlur)
      ? !t
      : (n ? r.isOnChange : i.isOnChange)
      ? t
      : !0,
  L$ = (t, e) => !ha(F(t, e)).length && Qe(t, e);
const $$ = { mode: Jt.onSubmit, reValidateMode: Jt.onChange, shouldFocusError: !0 };
function b$(t = {}, e) {
  let n = { ...$$, ...t },
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
    s = Be(n.defaultValues) || Be(n.values) ? Dr(n.defaultValues || n.values) || {} : {},
    o = n.shouldUnregister ? {} : Dr(s),
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
    d = { values: Oh(), array: Oh(), state: Oh() },
    m = t.resetOptions && t.resetOptions.keepDirtyValues,
    y = Fv(n.mode),
    v = Fv(n.reValidateMode),
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
          U && we(r.errors, w, z), L$(r.errors, w);
        }
        if (h.touchedFields && A && Array.isArray(F(r.touchedFields, w))) {
          const z = I(F(r.touchedFields, w), L.argA, L.argB);
          U && we(r.touchedFields, w, z);
        }
        h.dirtyFields && (r.dirtyFields = Lh(s, o)),
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
        be(A) || (L && L.defaultChecked) || T ? we(o, w, T ? A : $h(U._f)) : le(w, A),
          a.mount && f();
      }
    },
    x = (w, T, I, L, U) => {
      let A = !1,
        z = !1;
      const Pe = { name: w };
      if (!I || L) {
        h.isDirty && ((z = r.isDirty), (r.isDirty = Pe.isDirty = H()), (A = z !== Pe.isDirty));
        const Ae = Fr(F(s, w), T);
        (z = F(r.dirtyFields, w)),
          Ae ? Qe(r.dirtyFields, w) : we(r.dirtyFields, w, !0),
          (Pe.dirtyFields = r.dirtyFields),
          (A = A || (h.dirtyFields && z !== !Ae));
      }
      if (I) {
        const Ae = F(r.touchedFields, w);
        Ae ||
          (we(r.touchedFields, w, I),
          (Pe.touchedFields = r.touchedFields),
          (A = A || (h.touchedFields && Ae !== I)));
      }
      return A && U && d.state.next(Pe), A ? Pe : {};
    },
    O = (w, T, I, L) => {
      const U = F(r.errors, w),
        A = h.isValid && Hi(T) && r.isValid !== T;
      if (
        (t.delayError && I
          ? ((u = p(() => _(w, I))), u(t.delayError))
          : (clearTimeout(c), (u = null), I ? we(r.errors, w, I) : Qe(r.errors, w)),
        (I ? !Fr(U, I) : U) || !Ft(L) || A)
      ) {
        const z = { ...L, ...(A && Hi(T) ? { isValid: T } : {}), errors: r.errors, name: w };
        (r = { ...r, ...z }), d.state.next(z);
      }
      g(!1);
    },
    B = async (w) =>
      n.resolver(o, n.context, D$(w || l.mount, i, n.criteriaMode, n.shouldUseNativeValidation)),
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
            const Pe = l.array.has(A.name),
              Ae = await Hv(U, o, S, n.shouldUseNativeValidation, Pe);
            if (Ae[A.name] && ((I.valid = !1), T)) break;
            !T &&
              (F(Ae, A.name)
                ? Pe
                  ? A$(r.errors, Ae, A.name)
                  : we(r.errors, A.name, Ae[A.name])
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
        T && (T._f.refs ? T._f.refs.every((I) => !Ph(I)) : !Ph(T._f.ref)) && Wt(w);
      }
      l.unMount = new Set();
    },
    H = (w, T) => (w && T && we(o, w, T), !Fr(ve(), s)),
    Z = (w, T, I) => k$(w, l, { ...(a.mount ? o : be(T) ? s : un(w) ? { [w]: T } : T) }, I, T),
    ge = (w) => ha(F(a.mount ? o : s, w, t.shouldUnregister ? F(s, w, []) : [])),
    le = (w, T, I = {}) => {
      const L = F(i, w);
      let U = T;
      if (L) {
        const A = L._f;
        A &&
          (!A.disabled && we(o, w, I_(T, A)),
          (U = au(A.ref) && mt(T) ? '' : T),
          S_(A.ref)
            ? [...A.ref.options].forEach((z) => (z.selected = U.includes(z.value)))
            : A.refs
            ? ca(A.ref)
              ? A.refs.length > 1
                ? A.refs.forEach(
                    (z) =>
                      (!z.defaultChecked || !z.disabled) &&
                      (z.checked = Array.isArray(U)
                        ? !!U.find((Pe) => Pe === z.value)
                        : U === z.value)
                  )
                : A.refs[0] && (A.refs[0].checked = !!U)
              : A.refs.forEach((z) => (z.checked = z.value === U))
            : Lm(A.ref)
            ? (A.ref.value = '')
            : ((A.ref.value = U), A.ref.type || d.values.next({ name: w, values: { ...o } })));
      }
      (I.shouldDirty || I.shouldTouch) && x(w, U, I.shouldTouch, I.shouldDirty, !0),
        I.shouldValidate && Y(w);
    },
    ye = (w, T, I) => {
      for (const L in T) {
        const U = T[L],
          A = `${w}.${L}`,
          z = F(i, A);
        (l.array.has(w) || !uu(U) || (z && !z._f)) && !Ai(U) ? ye(A, U, I) : le(A, U, I);
      }
    },
    D = (w, T, I = {}) => {
      const L = F(i, w),
        U = l.array.has(w),
        A = Dr(T);
      we(o, w, A),
        U
          ? (d.array.next({ name: w, values: { ...o } }),
            (h.isDirty || h.dirtyFields) &&
              I.shouldDirty &&
              d.state.next({ name: w, dirtyFields: Lh(s, o), isDirty: H(w, A) }))
          : L && !L._f && !mt(A)
          ? ye(w, A, I)
          : le(w, A, I),
        Uv(w, l) && d.state.next({ ...r }),
        d.values.next({ name: w, values: { ...o } }),
        !a.mount && e();
    },
    j = async (w) => {
      const T = w.target;
      let I = T.name;
      const L = F(i, I),
        U = () => (T.type ? $h(L._f) : v$(w));
      if (L) {
        let A, z;
        const Pe = U(),
          Ae = w.type === Mv.BLUR || w.type === Mv.FOCUS_OUT,
          P_ =
            (!O$(L._f) && !n.resolver && !F(r.errors, I) && !L._f.deps) ||
            P$(Ae, F(r.touchedFields, I), r.isSubmitted, v, y),
          xc = Uv(I, l, Ae);
        we(o, I, Pe),
          Ae ? (L._f.onBlur && L._f.onBlur(w), u && u(0)) : L._f.onChange && L._f.onChange(w);
        const Dc = x(I, Pe, Ae, !1),
          L_ = !Ft(Dc) || xc;
        if ((!Ae && d.values.next({ name: I, type: w.type, values: { ...o } }), P_))
          return h.isValid && f(), L_ && d.state.next({ name: I, ...(xc ? {} : Dc) });
        if ((!Ae && xc && d.state.next({ ...r }), g(!0), n.resolver)) {
          const { errors: Vm } = await B([I]),
            $_ = Kv(r.errors, i, I),
            jm = Kv(Vm, i, $_.name || I);
          (A = jm.error), (I = jm.name), (z = Ft(Vm));
        } else
          (A = (await Hv(L, o, S, n.shouldUseNativeValidation))[I]),
            A ? (z = !1) : h.isValid && (z = await te(i, !0));
        L._f.deps && Y(L._f.deps), O(I, z, A, Dc);
      }
    },
    Y = async (w, T = {}) => {
      let I, L;
      const U = Dh(w);
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
          ...(!un(w) || (h.isValid && I !== r.isValid) ? {} : { name: w }),
          ...(n.resolver || !w ? { isValid: I } : {}),
          errors: r.errors,
          isValidating: !1
        }),
        T.shouldFocus && !L && If(i, (A) => A && F(r.errors, A), w ? U : l.mount),
        L
      );
    },
    ve = (w) => {
      const T = { ...s, ...(a.mount ? o : {}) };
      return be(w) ? T : un(w) ? F(T, w) : w.map((I) => F(T, I));
    },
    De = (w, T) => ({
      invalid: !!F((T || r).errors, w),
      isDirty: !!F((T || r).dirtyFields, w),
      isTouched: !!F((T || r).touchedFields, w),
      error: F((T || r).errors, w)
    }),
    li = (w) => {
      w && Dh(w).forEach((T) => Qe(r.errors, T)), d.state.next({ errors: w ? r.errors : {} });
    },
    yn = (w, T, I) => {
      const L = (F(i, w, { _f: {} })._f || {}).ref;
      we(r.errors, w, { ...T, ref: L }),
        d.state.next({ name: w, errors: r.errors, isValid: !1 }),
        I && I.shouldFocus && L && L.focus && L.focus();
    },
    ws = (w, T) => (Ki(w) ? d.values.subscribe({ next: (I) => w(Z(void 0, T), I) }) : Z(w, T, !0)),
    Wt = (w, T = {}) => {
      for (const I of w ? Dh(w) : l.mount)
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
    Un = (w, T = {}) => {
      let I = F(i, w);
      const L = Hi(T.disabled);
      return (
        we(i, w, {
          ...(I || {}),
          _f: { ...(I && I._f ? I._f : { ref: { name: w } }), name: w, mount: !0, ...T }
        }),
        l.mount.add(w),
        I ? L && we(o, w, T.disabled ? void 0 : F(o, w, $h(I._f))) : R(w, !0, T.value),
        {
          ...(L ? { disabled: T.disabled } : {}),
          ...(n.shouldUseNativeValidation
            ? {
                required: !!T.required,
                min: Rs(T.min),
                max: Rs(T.max),
                minLength: Rs(T.minLength),
                maxLength: Rs(T.maxLength),
                pattern: Rs(T.pattern)
              }
            : {}),
          name: w,
          onChange: j,
          onBlur: j,
          ref: (U) => {
            if (U) {
              Un(w, T), (I = F(i, w));
              const A =
                  (be(U.value) &&
                    U.querySelectorAll &&
                    U.querySelectorAll('input,select,textarea')[0]) ||
                  U,
                z = x$(A),
                Pe = I._f.refs || [];
              if (z ? Pe.find((Ae) => Ae === A) : A === I._f.ref) return;
              we(i, w, {
                _f: {
                  ...I._f,
                  ...(z
                    ? {
                        refs: [...Pe.filter(Ph), A, ...(Array.isArray(F(s, w)) ? [{}] : [])],
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
                  !(E$(l.array, w) && a.action) &&
                  l.unMount.add(w);
          }
        }
      );
    },
    Mm = () => n.shouldFocusError && If(i, (w) => w && F(r.errors, w), l.mount),
    R_ = (w, T) => async (I) => {
      I && (I.preventDefault && I.preventDefault(), I.persist && I.persist());
      let L = Dr(o);
      if ((d.state.next({ isSubmitting: !0 }), n.resolver)) {
        const { errors: U, values: A } = await B();
        (r.errors = U), (L = A);
      } else await te(i);
      Qe(r.errors, 'root'),
        Ft(r.errors)
          ? (d.state.next({ errors: {} }), await w(L, I))
          : (T && (await T({ ...r.errors }, I)), Mm(), setTimeout(Mm)),
        d.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: Ft(r.errors),
          submitCount: r.submitCount + 1,
          errors: r.errors
        });
    },
    x_ = (w, T = {}) => {
      F(i, w) &&
        (be(T.defaultValue) ? D(w, F(s, w)) : (D(w, T.defaultValue), we(s, w, T.defaultValue)),
        T.keepTouched || Qe(r.touchedFields, w),
        T.keepDirty || (Qe(r.dirtyFields, w), (r.isDirty = T.defaultValue ? H(w, F(s, w)) : H())),
        T.keepError || (Qe(r.errors, w), h.isValid && f()),
        d.state.next({ ...r }));
    },
    Fm = (w, T = {}) => {
      const I = w || s,
        L = Dr(I),
        U = w && !Ft(w) ? L : s;
      if ((T.keepDefaultValues || (s = I), !T.keepValues)) {
        if (T.keepDirtyValues || m)
          for (const A of l.mount) F(r.dirtyFields, A) ? we(U, A, F(o, A)) : D(A, F(U, A));
        else {
          if (Om && be(w))
            for (const A of l.mount) {
              const z = F(i, A);
              if (z && z._f) {
                const Pe = Array.isArray(z._f.refs) ? z._f.refs[0] : z._f.ref;
                if (au(Pe)) {
                  const Ae = Pe.closest('form');
                  if (Ae) {
                    Ae.reset();
                    break;
                  }
                }
              }
            }
          i = {};
        }
        (o = t.shouldUnregister ? (T.keepDefaultValues ? Dr(s) : {}) : L),
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
          isDirty: T.keepDirty ? r.isDirty : !!(T.keepDefaultValues && !Fr(w, s)),
          isSubmitted: T.keepIsSubmitted ? r.isSubmitted : !1,
          dirtyFields: T.keepDirtyValues ? r.dirtyFields : T.keepDefaultValues && w ? Lh(s, w) : {},
          touchedFields: T.keepTouched ? r.touchedFields : {},
          errors: T.keepErrors ? r.errors : {},
          isSubmitting: !1,
          isSubmitSuccessful: !1
        });
    },
    Um = (w, T) => Fm(Ki(w) ? w(o) : w, T),
    D_ = (w, T = {}) => {
      const I = F(i, w),
        L = I && I._f;
      if (L) {
        const U = L.refs ? L.refs[0] : L.ref;
        U.focus && (U.focus(), T.shouldSelect && U.select());
      }
    },
    O_ = (w) => {
      r = { ...r, ...w };
    };
  return (
    Ki(n.defaultValues) &&
      n.defaultValues().then((w) => {
        Um(w, n.resetOptions), d.state.next({ isLoading: !1 });
      }),
    {
      control: {
        register: Un,
        unregister: Wt,
        getFieldState: De,
        _executeSchema: B,
        _getWatch: Z,
        _getDirty: H,
        _updateValid: f,
        _removeUnmounted: W,
        _updateFieldArray: E,
        _getFieldArray: ge,
        _reset: Fm,
        _updateFormState: O_,
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
      trigger: Y,
      register: Un,
      handleSubmit: R_,
      watch: ws,
      setValue: D,
      getValues: ve,
      reset: Um,
      resetField: x_,
      clearErrors: li,
      unregister: Wt,
      setError: yn,
      setFocus: D_,
      getFieldState: De
    }
  );
}
function M$(t = {}) {
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
      defaultValues: Ki(t.defaultValues) ? void 0 : t.defaultValues
    });
  e.current || (e.current = { ...b$(t, () => r((s) => ({ ...s }))), formState: n });
  const i = e.current.control;
  return (
    (i._options = t),
    I$({
      subject: i._subjects.state,
      next: (s) => {
        T$(s, i._proxyFormState, i._updateFormState, !0) && r({ ...i._formState });
      }
    }),
    ne.useEffect(() => {
      t.values && !Fr(t.values, i._defaultValues) && i._reset(t.values, i._options.resetOptions);
    }, [t.values, i]),
    ne.useEffect(() => {
      i._state.mount || (i._updateValid(), (i._state.mount = !0)),
        i._state.watch && ((i._state.watch = !1), i._subjects.state.next({ ...i._formState })),
        i._removeUnmounted();
    }),
    (e.current.formState = _$(n, i)),
    e.current
  );
}
const k_ = ({ formConfig: t, onSubmit: e }) => {
    const {
        register: n,
        handleSubmit: r,
        formState: { errors: i },
        watch: s
      } = M$(),
      o = s(),
      a = Object.keys(i).length === 0;
    return Ni('form', {
      onSubmit: r(() => e(o)),
      className: 'form-generator',
      children: [
        t.map((l) =>
          Ni(
            'div',
            {
              className: 'form-generator',
              children: [
                i[l.name] &&
                  Se('span', { className: 'input-error', children: 'This field is required' }),
                l.type &&
                  Ni(s0, {
                    children: [
                      Se('label', { htmlFor: l.name, children: l.label }),
                      Se('input', {
                        disabled: l.disabled,
                        type: l.type,
                        placeholder: l.placeholder,
                        className: `w-100 input-field ${l.className}`,
                        value: l.value,
                        ...n(l.name, l.validation)
                      })
                    ]
                  })
              ]
            },
            l.name
          )
        ),
        Se('input', { type: 'submit', disabled: !a, className: 'form-button', value: 'Submit' })
      ]
    });
  },
  F$ = [
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
    }
  ],
  bm = () => BC(),
  C_ = () => {
    const t = bm();
    return Se('div', {
      children: Se(k_, {
        formConfig: F$,
        onSubmit: async (n) => {
          t(SL(n));
        }
      })
    });
  };
function U$() {
  return Se('div', { className: 'App', children: Se(C_, {}) });
}
const V$ = [
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
    }
  ],
  j$ = () => {
    const t = bm(),
      e = async (r) => {
        t(il(r));
      },
      n = IC((r) => r.user.loginData);
    return n && console.log(n), Se('div', { children: Se(k_, { formConfig: V$, onSubmit: e }) });
  },
  z$ = () =>
    Se(y$, {
      children: Ni(g$, {
        children: [
          Se(sl, { path: '/', element: Se(U$, {}) }),
          Se(sl, { path: '/login', element: Se(j$, {}) }),
          Se(sl, { path: '/register', element: Se(C_, {}) })
        ]
      })
    });
function A_(t) {
  var e,
    n,
    r = '';
  if (typeof t == 'string' || typeof t == 'number') r += t;
  else if (typeof t == 'object')
    if (Array.isArray(t))
      for (e = 0; e < t.length; e++) t[e] && (n = A_(t[e])) && (r && (r += ' '), (r += n));
    else for (e in t) t[e] && (r && (r += ' '), (r += e));
  return r;
}
function tr() {
  for (var t, e, n = 0, r = ''; n < arguments.length; )
    (t = arguments[n++]) && (e = A_(t)) && (r && (r += ' '), (r += e));
  return r;
}
const al = (t) => typeof t == 'number' && !isNaN(t),
  hu = (t) => typeof t == 'string',
  xt = (t) => typeof t == 'function',
  ll = (t) => (hu(t) || xt(t) ? t : null),
  bh = (t) => N.isValidElement(t) || hu(t) || xt(t) || al(t);
function B$(t, e, n) {
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
function Nc(t) {
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
            S.removeEventListener('animationend', p), i ? B$(S, c, s) : c();
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
function Wv(t, e) {
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
const Ur = {
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
  Ma = (t) => {
    let { theme: e, type: n, ...r } = t;
    return ne.createElement('svg', {
      viewBox: '0 0 24 24',
      width: '100%',
      height: '100%',
      fill: e === 'colored' ? 'currentColor' : `var(--toastify-icon-color-${n})`,
      ...r
    });
  },
  Mh = {
    info: function (t) {
      return ne.createElement(
        Ma,
        { ...t },
        ne.createElement('path', {
          d: 'M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z'
        })
      );
    },
    warning: function (t) {
      return ne.createElement(
        Ma,
        { ...t },
        ne.createElement('path', {
          d: 'M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z'
        })
      );
    },
    success: function (t) {
      return ne.createElement(
        Ma,
        { ...t },
        ne.createElement('path', {
          d: 'M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z'
        })
      );
    },
    error: function (t) {
      return ne.createElement(
        Ma,
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
function H$(t) {
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
      !bh(m) ||
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
    const O = {
      ..._,
      style: _.toastStyle,
      key: a.toastKey++,
      ...p,
      toastId: f,
      updateId: g,
      data: E,
      closeToast: R,
      isIn: !1,
      className: ll(p.className || _.toastClassName),
      bodyClassName: ll(p.bodyClassName || _.bodyClassName),
      progressClassName: ll(p.progressClassName || _.progressClassName),
      autoClose:
        !p.isLoading &&
        ((B = p.autoClose), (b = _.autoClose), B === !1 || (al(B) && B > 0) ? B : b),
      deleteToast() {
        const W = Wv(s.get(f), 'removed');
        s.delete(f), Ur.emit(4, W);
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
    (O.iconOut = (function (W) {
      let { theme: H, type: Z, isLoading: ge, icon: le } = W,
        ye = null;
      const D = { theme: H, type: Z };
      return (
        le === !1 ||
          (xt(le)
            ? (ye = le(D))
            : N.isValidElement(le)
            ? (ye = N.cloneElement(le, D))
            : hu(le) || al(le)
            ? (ye = le)
            : ge
            ? (ye = Mh.spinner())
            : ((j) => j in Mh)(Z) && (ye = Mh[Z](D))),
        ye
      );
    })(O)),
      xt(p.onOpen) && (O.onOpen = p.onOpen),
      xt(p.onClose) && (O.onClose = p.onClose),
      (O.closeButton = _.closeButton),
      p.closeButton === !1 || bh(p.closeButton)
        ? (O.closeButton = p.closeButton)
        : p.closeButton === !0 && (O.closeButton = !bh(_.closeButton) || _.closeButton);
    let te = m;
    N.isValidElement(m) && !hu(m.type)
      ? (te = N.cloneElement(m, { closeToast: R, toastProps: O, data: E }))
      : xt(m) && (te = m({ closeToast: R, toastProps: O, data: E })),
      _.limit && _.limit > 0 && a.count > _.limit && x
        ? a.queue.push({ toastContent: te, toastProps: O, staleId: S })
        : al(v)
        ? setTimeout(() => {
            d(te, O, S);
          }, v)
        : d(te, O, S);
  }
  function d(m, y, v) {
    const { toastId: S } = y;
    v && s.delete(v);
    const p = { content: m, props: y };
    s.set(S, p),
      r((f) => [...f, S].filter((g) => g !== v)),
      Ur.emit(4, Wv(p, p.props.updateId == null ? 'added' : 'updated'));
  }
  return (
    N.useEffect(
      () => (
        (a.containerId = t.containerId),
        Ur.cancelEmit(3)
          .on(0, h)
          .on(1, (m) => i.current && u(m))
          .on(5, l)
          .emit(2, a),
        () => {
          s.clear(), Ur.emit(3, a);
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
function qv(t) {
  return t.targetTouches && t.targetTouches.length >= 1 ? t.targetTouches[0].clientX : t.clientX;
}
function Gv(t) {
  return t.targetTouches && t.targetTouches.length >= 1 ? t.targetTouches[0].clientY : t.clientY;
}
function K$(t) {
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
        (o.x = qv(E.nativeEvent)),
        (o.y = Gv(E.nativeEvent)),
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
      const { top: _, bottom: R, left: x, right: O } = o.boundingRect;
      E.nativeEvent.type !== 'touchend' &&
      t.pauseOnHover &&
      o.x >= x &&
      o.x <= O &&
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
      (o.x = qv(E)),
      (o.y = Gv(E)),
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
function N_(t) {
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
function W$(t) {
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
  const v = tr(
      'Toastify__progress-bar',
      l ? 'Toastify__progress-bar--controlled' : 'Toastify__progress-bar--animated',
      `Toastify__progress-bar-theme--${d}`,
      `Toastify__progress-bar--${i}`,
      { 'Toastify__progress-bar--rtl': c }
    ),
    S = xt(o) ? o({ rtl: c, type: i, defaultClassName: v }) : tr(v, o);
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
const q$ = (t) => {
    const { isRunning: e, preventExitTransition: n, toastRef: r, eventHandlers: i } = K$(t),
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
        toastId: O,
        deleteToast: B,
        isIn: b,
        isLoading: te,
        iconOut: W,
        closeOnClick: H,
        theme: Z
      } = t,
      ge = tr(
        'Toastify__toast',
        `Toastify__toast-theme--${Z}`,
        `Toastify__toast--${u}`,
        { 'Toastify__toast--rtl': x },
        { 'Toastify__toast--close-on-click': H }
      ),
      le = xt(y) ? y({ rtl: x, position: m, type: u, defaultClassName: ge }) : tr(ge, y),
      ye = !!R || !a,
      D = { closeToast: h, type: u, theme: Z };
    let j = null;
    return (
      s === !1 || (j = xt(s) ? s(D) : N.isValidElement(s) ? N.cloneElement(s, D) : N_(D)),
      ne.createElement(
        d,
        { isIn: b, done: B, position: m, preventExitTransition: n, nodeRef: r },
        ne.createElement(
          'div',
          { id: O, onClick: l, className: le, ...i, style: v, ref: r },
          ne.createElement(
            'div',
            {
              ...(b && { role: _ }),
              className: xt(S) ? S({ type: u }) : tr('Toastify__toast-body', S),
              style: p
            },
            W != null &&
              ne.createElement(
                'div',
                {
                  className: tr('Toastify__toast-icon', {
                    'Toastify--animate-icon Toastify__zoom-enter': !te
                  })
                },
                W
              ),
            ne.createElement('div', null, o)
          ),
          j,
          ne.createElement(W$, {
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
  Rc = function (t, e) {
    return (
      e === void 0 && (e = !1),
      {
        enter: `Toastify--animate Toastify__${t}-enter`,
        exit: `Toastify--animate Toastify__${t}-exit`,
        appendPosition: e
      }
    );
  },
  G$ = Nc(Rc('bounce', !0));
Nc(Rc('slide', !0));
Nc(Rc('zoom'));
Nc(Rc('flip'));
const du = N.forwardRef((t, e) => {
  const { getToastToRender: n, containerRef: r, isToastActive: i } = H$(t),
    { className: s, style: o, rtl: a, containerId: l } = t;
  function u(c) {
    const h = tr('Toastify__toast-container', `Toastify__toast-container--${c}`, {
      'Toastify__toast-container--rtl': a
    });
    return xt(s) ? s({ position: c, rtl: a, defaultClassName: h }) : tr(h, ll(s));
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
              q$,
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
(du.displayName = 'ToastContainer'),
  (du.defaultProps = {
    position: 'top-right',
    transition: G$,
    autoClose: 5e3,
    closeButton: N_,
    pauseOnHover: !0,
    pauseOnFocusLoss: !0,
    closeOnClick: !0,
    draggable: !0,
    draggablePercent: 80,
    draggableDirection: 'x',
    role: 'alert',
    theme: 'light'
  });
let Qv,
  Fh = new Map(),
  Yv = [];
Ur.on(2, (t) => {
  (Qv = t.containerId || t),
    Fh.set(Qv, t),
    Yv.forEach((e) => {
      Ur.emit(0, e.content, e.options);
    }),
    (Yv = []);
}).on(3, (t) => {
  Fh.delete(t.containerId || t), Fh.size === 0 && Ur.off(0).off(1).off(5);
});
const Q$ = () =>
    Ni(s0, {
      children: [
        Se(du, {
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
        Se(du, {})
      ]
    }),
  Y$ = () => {
    const t = bm();
    return (
      N.useEffect(() => {
        t(rl());
      }, []),
      Se(ne.Fragment, {})
    );
  },
  X$ = Vh.createRoot(document.getElementById('root'));
X$.render(Ni(CL, { children: [Se(Q$, {}), Se(Y$, {}), Se(z$, {})] }));
