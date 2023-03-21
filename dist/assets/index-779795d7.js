function ZE(t, e) {
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
function eS(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default') ? t.default : t;
}
var _s = {},
  tS = {
    get exports() {
      return _s;
    },
    set exports(t) {
      _s = t;
    }
  },
  Sl = {},
  I = {},
  nS = {
    get exports() {
      return I;
    },
    set exports(t) {
      I = t;
    }
  },
  B = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var to = Symbol.for('react.element'),
  rS = Symbol.for('react.portal'),
  iS = Symbol.for('react.fragment'),
  sS = Symbol.for('react.strict_mode'),
  oS = Symbol.for('react.profiler'),
  aS = Symbol.for('react.provider'),
  lS = Symbol.for('react.context'),
  uS = Symbol.for('react.forward_ref'),
  cS = Symbol.for('react.suspense'),
  hS = Symbol.for('react.memo'),
  dS = Symbol.for('react.lazy'),
  Op = Symbol.iterator;
function fS(t) {
  return t === null || typeof t != 'object'
    ? null
    : ((t = (Op && t[Op]) || t['@@iterator']), typeof t == 'function' ? t : null);
}
var xy = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  },
  Dy = Object.assign,
  $y = {};
function $i(t, e, n) {
  (this.props = t), (this.context = e), (this.refs = $y), (this.updater = n || xy);
}
$i.prototype.isReactComponent = {};
$i.prototype.setState = function (t, e) {
  if (typeof t != 'object' && typeof t != 'function' && t != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, t, e, 'setState');
};
$i.prototype.forceUpdate = function (t) {
  this.updater.enqueueForceUpdate(this, t, 'forceUpdate');
};
function Ly() {}
Ly.prototype = $i.prototype;
function kd(t, e, n) {
  (this.props = t), (this.context = e), (this.refs = $y), (this.updater = n || xy);
}
var Cd = (kd.prototype = new Ly());
Cd.constructor = kd;
Dy(Cd, $i.prototype);
Cd.isPureReactComponent = !0;
var xp = Array.isArray,
  My = Object.prototype.hasOwnProperty,
  Ad = { current: null },
  by = { key: !0, ref: !0, __self: !0, __source: !0 };
function Uy(t, e, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (e != null)
    for (r in (e.ref !== void 0 && (o = e.ref), e.key !== void 0 && (s = '' + e.key), e))
      My.call(e, r) && !by.hasOwnProperty(r) && (i[r] = e[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (t && t.defaultProps) for (r in ((a = t.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return { $$typeof: to, type: t, key: s, ref: o, props: i, _owner: Ad.current };
}
function pS(t, e) {
  return { $$typeof: to, type: t.type, key: e, ref: t.ref, props: t.props, _owner: t._owner };
}
function Nd(t) {
  return typeof t == 'object' && t !== null && t.$$typeof === to;
}
function mS(t) {
  var e = { '=': '=0', ':': '=2' };
  return (
    '$' +
    t.replace(/[=:]/g, function (n) {
      return e[n];
    })
  );
}
var Dp = /\/+/g;
function Fu(t, e) {
  return typeof t == 'object' && t !== null && t.key != null ? mS('' + t.key) : e.toString(36);
}
function ea(t, e, n, r, i) {
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
          case to:
          case rS:
            o = !0;
        }
    }
  if (o)
    return (
      (o = t),
      (i = i(o)),
      (t = r === '' ? '.' + Fu(o, 0) : r),
      xp(i)
        ? ((n = ''),
          t != null && (n = t.replace(Dp, '$&/') + '/'),
          ea(i, e, n, '', function (u) {
            return u;
          }))
        : i != null &&
          (Nd(i) &&
            (i = pS(
              i,
              n +
                (!i.key || (o && o.key === i.key) ? '' : ('' + i.key).replace(Dp, '$&/') + '/') +
                t
            )),
          e.push(i)),
      1
    );
  if (((o = 0), (r = r === '' ? '.' : r + ':'), xp(t)))
    for (var a = 0; a < t.length; a++) {
      s = t[a];
      var l = r + Fu(s, a);
      o += ea(s, e, n, l, i);
    }
  else if (((l = fS(t)), typeof l == 'function'))
    for (t = l.call(t), a = 0; !(s = t.next()).done; )
      (s = s.value), (l = r + Fu(s, a++)), (o += ea(s, e, n, l, i));
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
function No(t, e, n) {
  if (t == null) return t;
  var r = [],
    i = 0;
  return (
    ea(t, r, '', '', function (s) {
      return e.call(n, s, i++);
    }),
    r
  );
}
function gS(t) {
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
var Je = { current: null },
  ta = { transition: null },
  yS = { ReactCurrentDispatcher: Je, ReactCurrentBatchConfig: ta, ReactCurrentOwner: Ad };
B.Children = {
  map: No,
  forEach: function (t, e, n) {
    No(
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
      No(t, function () {
        e++;
      }),
      e
    );
  },
  toArray: function (t) {
    return (
      No(t, function (e) {
        return e;
      }) || []
    );
  },
  only: function (t) {
    if (!Nd(t))
      throw Error('React.Children.only expected to receive a single React element child.');
    return t;
  }
};
B.Component = $i;
B.Fragment = iS;
B.Profiler = oS;
B.PureComponent = kd;
B.StrictMode = sS;
B.Suspense = cS;
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yS;
B.cloneElement = function (t, e, n) {
  if (t == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' + t + '.'
    );
  var r = Dy({}, t.props),
    i = t.key,
    s = t.ref,
    o = t._owner;
  if (e != null) {
    if (
      (e.ref !== void 0 && ((s = e.ref), (o = Ad.current)),
      e.key !== void 0 && (i = '' + e.key),
      t.type && t.type.defaultProps)
    )
      var a = t.type.defaultProps;
    for (l in e)
      My.call(e, l) &&
        !by.hasOwnProperty(l) &&
        (r[l] = e[l] === void 0 && a !== void 0 ? a[l] : e[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: to, type: t.type, key: i, ref: s, props: r, _owner: o };
};
B.createContext = function (t) {
  return (
    (t = {
      $$typeof: lS,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }),
    (t.Provider = { $$typeof: aS, _context: t }),
    (t.Consumer = t)
  );
};
B.createElement = Uy;
B.createFactory = function (t) {
  var e = Uy.bind(null, t);
  return (e.type = t), e;
};
B.createRef = function () {
  return { current: null };
};
B.forwardRef = function (t) {
  return { $$typeof: uS, render: t };
};
B.isValidElement = Nd;
B.lazy = function (t) {
  return { $$typeof: dS, _payload: { _status: -1, _result: t }, _init: gS };
};
B.memo = function (t, e) {
  return { $$typeof: hS, type: t, compare: e === void 0 ? null : e };
};
B.startTransition = function (t) {
  var e = ta.transition;
  ta.transition = {};
  try {
    t();
  } finally {
    ta.transition = e;
  }
};
B.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
B.useCallback = function (t, e) {
  return Je.current.useCallback(t, e);
};
B.useContext = function (t) {
  return Je.current.useContext(t);
};
B.useDebugValue = function () {};
B.useDeferredValue = function (t) {
  return Je.current.useDeferredValue(t);
};
B.useEffect = function (t, e) {
  return Je.current.useEffect(t, e);
};
B.useId = function () {
  return Je.current.useId();
};
B.useImperativeHandle = function (t, e, n) {
  return Je.current.useImperativeHandle(t, e, n);
};
B.useInsertionEffect = function (t, e) {
  return Je.current.useInsertionEffect(t, e);
};
B.useLayoutEffect = function (t, e) {
  return Je.current.useLayoutEffect(t, e);
};
B.useMemo = function (t, e) {
  return Je.current.useMemo(t, e);
};
B.useReducer = function (t, e, n) {
  return Je.current.useReducer(t, e, n);
};
B.useRef = function (t) {
  return Je.current.useRef(t);
};
B.useState = function (t) {
  return Je.current.useState(t);
};
B.useSyncExternalStore = function (t, e, n) {
  return Je.current.useSyncExternalStore(t, e, n);
};
B.useTransition = function () {
  return Je.current.useTransition();
};
B.version = '18.2.0';
(function (t) {
  t.exports = B;
})(nS);
const Z = eS(I),
  Vc = ZE({ __proto__: null, default: Z }, [I]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vS = I,
  wS = Symbol.for('react.element'),
  ES = Symbol.for('react.fragment'),
  SS = Object.prototype.hasOwnProperty,
  _S = vS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  TS = { key: !0, ref: !0, __self: !0, __source: !0 };
function Fy(t, e, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = '' + n),
    e.key !== void 0 && (s = '' + e.key),
    e.ref !== void 0 && (o = e.ref);
  for (r in e) SS.call(e, r) && !TS.hasOwnProperty(r) && (i[r] = e[r]);
  if (t && t.defaultProps) for (r in ((e = t.defaultProps), e)) i[r] === void 0 && (i[r] = e[r]);
  return { $$typeof: wS, type: t, key: s, ref: o, props: i, _owner: _S.current };
}
Sl.Fragment = ES;
Sl.jsx = Fy;
Sl.jsxs = Fy;
(function (t) {
  t.exports = Sl;
})(tS);
const IS = _s.Fragment,
  Tt = _s.jsx,
  jy = _s.jsxs;
var zc = {},
  Sa = {},
  kS = {
    get exports() {
      return Sa;
    },
    set exports(t) {
      Sa = t;
    }
  },
  vt = {},
  Bc = {},
  CS = {
    get exports() {
      return Bc;
    },
    set exports(t) {
      Bc = t;
    }
  },
  Vy = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (t) {
  function e(N, M) {
    var z = N.length;
    N.push(M);
    e: for (; 0 < z; ) {
      var fe = (z - 1) >>> 1,
        Te = N[fe];
      if (0 < i(Te, M)) (N[fe] = M), (N[z] = Te), (z = fe);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var M = N[0],
      z = N.pop();
    if (z !== M) {
      N[0] = z;
      e: for (var fe = 0, Te = N.length, Co = Te >>> 1; fe < Co; ) {
        var ir = 2 * (fe + 1) - 1,
          Uu = N[ir],
          sr = ir + 1,
          Ao = N[sr];
        if (0 > i(Uu, z))
          sr < Te && 0 > i(Ao, Uu)
            ? ((N[fe] = Ao), (N[sr] = z), (fe = sr))
            : ((N[fe] = Uu), (N[ir] = z), (fe = ir));
        else if (sr < Te && 0 > i(Ao, z)) (N[fe] = Ao), (N[sr] = z), (fe = sr);
        else break e;
      }
    }
    return M;
  }
  function i(N, M) {
    var z = N.sortIndex - M.sortIndex;
    return z !== 0 ? z : N.id - M.id;
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
    E = typeof setTimeout == 'function' ? setTimeout : null,
    p = typeof clearTimeout == 'function' ? clearTimeout : null,
    f = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(N) {
    for (var M = n(u); M !== null; ) {
      if (M.callback === null) r(u);
      else if (M.startTime <= N) r(u), (M.sortIndex = M.expirationTime), e(l, M);
      else break;
      M = n(u);
    }
  }
  function w(N) {
    if (((v = !1), g(N), !y))
      if (n(l) !== null) (y = !0), Re(S);
      else {
        var M = n(u);
        M !== null && ct(w, M.startTime - N);
      }
  }
  function S(N, M) {
    (y = !1), v && ((v = !1), p(A), (A = -1)), (m = !0);
    var z = d;
    try {
      for (g(M), h = n(l); h !== null && (!(h.expirationTime > M) || (N && !te())); ) {
        var fe = h.callback;
        if (typeof fe == 'function') {
          (h.callback = null), (d = h.priorityLevel);
          var Te = fe(h.expirationTime <= M);
          (M = t.unstable_now()),
            typeof Te == 'function' ? (h.callback = Te) : h === n(l) && r(l),
            g(M);
        } else r(l);
        h = n(l);
      }
      if (h !== null) var Co = !0;
      else {
        var ir = n(u);
        ir !== null && ct(w, ir.startTime - M), (Co = !1);
      }
      return Co;
    } finally {
      (h = null), (d = z), (m = !1);
    }
  }
  var k = !1,
    C = null,
    A = -1,
    V = 5,
    x = -1;
  function te() {
    return !(t.unstable_now() - x < V);
  }
  function be() {
    if (C !== null) {
      var N = t.unstable_now();
      x = N;
      var M = !0;
      try {
        M = C(!0, N);
      } finally {
        M ? et() : ((k = !1), (C = null));
      }
    } else k = !1;
  }
  var et;
  if (typeof f == 'function')
    et = function () {
      f(be);
    };
  else if (typeof MessageChannel < 'u') {
    var tt = new MessageChannel(),
      Qt = tt.port2;
    (tt.port1.onmessage = be),
      (et = function () {
        Qt.postMessage(null);
      });
  } else
    et = function () {
      E(be, 0);
    };
  function Re(N) {
    (C = N), k || ((k = !0), et());
  }
  function ct(N, M) {
    A = E(function () {
      N(t.unstable_now());
    }, M);
  }
  (t.unstable_IdlePriority = 5),
    (t.unstable_ImmediatePriority = 1),
    (t.unstable_LowPriority = 4),
    (t.unstable_NormalPriority = 3),
    (t.unstable_Profiling = null),
    (t.unstable_UserBlockingPriority = 2),
    (t.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (t.unstable_continueExecution = function () {
      y || m || ((y = !0), Re(S));
    }),
    (t.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (V = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (t.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (t.unstable_next = function (N) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var M = 3;
          break;
        default:
          M = d;
      }
      var z = d;
      d = M;
      try {
        return N();
      } finally {
        d = z;
      }
    }),
    (t.unstable_pauseExecution = function () {}),
    (t.unstable_requestPaint = function () {}),
    (t.unstable_runWithPriority = function (N, M) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var z = d;
      d = N;
      try {
        return M();
      } finally {
        d = z;
      }
    }),
    (t.unstable_scheduleCallback = function (N, M, z) {
      var fe = t.unstable_now();
      switch (
        (typeof z == 'object' && z !== null
          ? ((z = z.delay), (z = typeof z == 'number' && 0 < z ? fe + z : fe))
          : (z = fe),
        N)
      ) {
        case 1:
          var Te = -1;
          break;
        case 2:
          Te = 250;
          break;
        case 5:
          Te = 1073741823;
          break;
        case 4:
          Te = 1e4;
          break;
        default:
          Te = 5e3;
      }
      return (
        (Te = z + Te),
        (N = {
          id: c++,
          callback: M,
          priorityLevel: N,
          startTime: z,
          expirationTime: Te,
          sortIndex: -1
        }),
        z > fe
          ? ((N.sortIndex = z),
            e(u, N),
            n(l) === null && N === n(u) && (v ? (p(A), (A = -1)) : (v = !0), ct(w, z - fe)))
          : ((N.sortIndex = Te), e(l, N), y || m || ((y = !0), Re(S))),
        N
      );
    }),
    (t.unstable_shouldYield = te),
    (t.unstable_wrapCallback = function (N) {
      var M = d;
      return function () {
        var z = d;
        d = M;
        try {
          return N.apply(this, arguments);
        } finally {
          d = z;
        }
      };
    });
})(Vy);
(function (t) {
  t.exports = Vy;
})(CS);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zy = I,
  mt = Bc;
function _(t) {
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
var By = new Set(),
  Ts = {};
function Lr(t, e) {
  gi(t, e), gi(t + 'Capture', e);
}
function gi(t, e) {
  for (Ts[t] = e, t = 0; t < e.length; t++) By.add(e[t]);
}
var sn = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Hc = Object.prototype.hasOwnProperty,
  AS =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  $p = {},
  Lp = {};
function NS(t) {
  return Hc.call(Lp, t) ? !0 : Hc.call($p, t) ? !1 : AS.test(t) ? (Lp[t] = !0) : (($p[t] = !0), !1);
}
function RS(t, e, n, r) {
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
function PS(t, e, n, r) {
  if (e === null || typeof e > 'u' || RS(t, e, n, r)) return !0;
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
function Ze(t, e, n, r, i, s, o) {
  (this.acceptsBooleans = e === 2 || e === 3 || e === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = t),
    (this.type = e),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var $e = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (t) {
    $e[t] = new Ze(t, 0, !1, t, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv']
].forEach(function (t) {
  var e = t[0];
  $e[e] = new Ze(e, 1, !1, t[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (t) {
  $e[t] = new Ze(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (t) {
  $e[t] = new Ze(t, 2, !1, t, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (t) {
    $e[t] = new Ze(t, 3, !1, t.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (t) {
  $e[t] = new Ze(t, 3, !0, t, null, !1, !1);
});
['capture', 'download'].forEach(function (t) {
  $e[t] = new Ze(t, 4, !1, t, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (t) {
  $e[t] = new Ze(t, 6, !1, t, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (t) {
  $e[t] = new Ze(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var Rd = /[\-:]([a-z])/g;
function Pd(t) {
  return t[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (t) {
    var e = t.replace(Rd, Pd);
    $e[e] = new Ze(e, 1, !1, t, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (t) {
    var e = t.replace(Rd, Pd);
    $e[e] = new Ze(e, 1, !1, t, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (t) {
  var e = t.replace(Rd, Pd);
  $e[e] = new Ze(e, 1, !1, t, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (t) {
  $e[t] = new Ze(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
$e.xlinkHref = new Ze('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1);
['src', 'href', 'action', 'formAction'].forEach(function (t) {
  $e[t] = new Ze(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function Od(t, e, n, r) {
  var i = $e.hasOwnProperty(e) ? $e[e] : null;
  (i !== null
    ? i.type !== 0
    : r || !(2 < e.length) || (e[0] !== 'o' && e[0] !== 'O') || (e[1] !== 'n' && e[1] !== 'N')) &&
    (PS(e, n, i, r) && (n = null),
    r || i === null
      ? NS(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, '' + n))
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
var mn = zy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ro = Symbol.for('react.element'),
  Vr = Symbol.for('react.portal'),
  zr = Symbol.for('react.fragment'),
  xd = Symbol.for('react.strict_mode'),
  Kc = Symbol.for('react.profiler'),
  Hy = Symbol.for('react.provider'),
  Ky = Symbol.for('react.context'),
  Dd = Symbol.for('react.forward_ref'),
  Wc = Symbol.for('react.suspense'),
  qc = Symbol.for('react.suspense_list'),
  $d = Symbol.for('react.memo'),
  wn = Symbol.for('react.lazy'),
  Wy = Symbol.for('react.offscreen'),
  Mp = Symbol.iterator;
function Hi(t) {
  return t === null || typeof t != 'object'
    ? null
    : ((t = (Mp && t[Mp]) || t['@@iterator']), typeof t == 'function' ? t : null);
}
var ue = Object.assign,
  ju;
function Zi(t) {
  if (ju === void 0)
    try {
      throw Error();
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/);
      ju = (e && e[1]) || '';
    }
  return (
    `
` +
    ju +
    t
  );
}
var Vu = !1;
function zu(t, e) {
  if (!t || Vu) return '';
  Vu = !0;
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
    (Vu = !1), (Error.prepareStackTrace = n);
  }
  return (t = t ? t.displayName || t.name : '') ? Zi(t) : '';
}
function OS(t) {
  switch (t.tag) {
    case 5:
      return Zi(t.type);
    case 16:
      return Zi('Lazy');
    case 13:
      return Zi('Suspense');
    case 19:
      return Zi('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (t = zu(t.type, !1)), t;
    case 11:
      return (t = zu(t.type.render, !1)), t;
    case 1:
      return (t = zu(t.type, !0)), t;
    default:
      return '';
  }
}
function Gc(t) {
  if (t == null) return null;
  if (typeof t == 'function') return t.displayName || t.name || null;
  if (typeof t == 'string') return t;
  switch (t) {
    case zr:
      return 'Fragment';
    case Vr:
      return 'Portal';
    case Kc:
      return 'Profiler';
    case xd:
      return 'StrictMode';
    case Wc:
      return 'Suspense';
    case qc:
      return 'SuspenseList';
  }
  if (typeof t == 'object')
    switch (t.$$typeof) {
      case Ky:
        return (t.displayName || 'Context') + '.Consumer';
      case Hy:
        return (t._context.displayName || 'Context') + '.Provider';
      case Dd:
        var e = t.render;
        return (
          (t = t.displayName),
          t ||
            ((t = e.displayName || e.name || ''),
            (t = t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')),
          t
        );
      case $d:
        return (e = t.displayName || null), e !== null ? e : Gc(t.type) || 'Memo';
      case wn:
        (e = t._payload), (t = t._init);
        try {
          return Gc(t(e));
        } catch {}
    }
  return null;
}
function xS(t) {
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
      return Gc(e);
    case 8:
      return e === xd ? 'StrictMode' : 'Mode';
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
function Wn(t) {
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
function qy(t) {
  var e = t.type;
  return (t = t.nodeName) && t.toLowerCase() === 'input' && (e === 'checkbox' || e === 'radio');
}
function DS(t) {
  var e = qy(t) ? 'checked' : 'value',
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
function Po(t) {
  t._valueTracker || (t._valueTracker = DS(t));
}
function Gy(t) {
  if (!t) return !1;
  var e = t._valueTracker;
  if (!e) return !0;
  var n = e.getValue(),
    r = '';
  return (
    t && (r = qy(t) ? (t.checked ? 'true' : 'false') : t.value),
    (t = r),
    t !== n ? (e.setValue(t), !0) : !1
  );
}
function _a(t) {
  if (((t = t || (typeof document < 'u' ? document : void 0)), typeof t > 'u')) return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
function Qc(t, e) {
  var n = e.checked;
  return ue({}, e, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? t._wrapperState.initialChecked
  });
}
function bp(t, e) {
  var n = e.defaultValue == null ? '' : e.defaultValue,
    r = e.checked != null ? e.checked : e.defaultChecked;
  (n = Wn(e.value != null ? e.value : n)),
    (t._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: e.type === 'checkbox' || e.type === 'radio' ? e.checked != null : e.value != null
    });
}
function Qy(t, e) {
  (e = e.checked), e != null && Od(t, 'checked', e, !1);
}
function Xc(t, e) {
  Qy(t, e);
  var n = Wn(e.value),
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
    ? Yc(t, e.type, n)
    : e.hasOwnProperty('defaultValue') && Yc(t, e.type, Wn(e.defaultValue)),
    e.checked == null && e.defaultChecked != null && (t.defaultChecked = !!e.defaultChecked);
}
function Up(t, e, n) {
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
function Yc(t, e, n) {
  (e !== 'number' || _a(t.ownerDocument) !== t) &&
    (n == null
      ? (t.defaultValue = '' + t._wrapperState.initialValue)
      : t.defaultValue !== '' + n && (t.defaultValue = '' + n));
}
var es = Array.isArray;
function ti(t, e, n, r) {
  if (((t = t.options), e)) {
    e = {};
    for (var i = 0; i < n.length; i++) e['$' + n[i]] = !0;
    for (n = 0; n < t.length; n++)
      (i = e.hasOwnProperty('$' + t[n].value)),
        t[n].selected !== i && (t[n].selected = i),
        i && r && (t[n].defaultSelected = !0);
  } else {
    for (n = '' + Wn(n), e = null, i = 0; i < t.length; i++) {
      if (t[i].value === n) {
        (t[i].selected = !0), r && (t[i].defaultSelected = !0);
        return;
      }
      e !== null || t[i].disabled || (e = t[i]);
    }
    e !== null && (e.selected = !0);
  }
}
function Jc(t, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(_(91));
  return ue({}, e, {
    value: void 0,
    defaultValue: void 0,
    children: '' + t._wrapperState.initialValue
  });
}
function Fp(t, e) {
  var n = e.value;
  if (n == null) {
    if (((n = e.children), (e = e.defaultValue), n != null)) {
      if (e != null) throw Error(_(92));
      if (es(n)) {
        if (1 < n.length) throw Error(_(93));
        n = n[0];
      }
      e = n;
    }
    e == null && (e = ''), (n = e);
  }
  t._wrapperState = { initialValue: Wn(n) };
}
function Xy(t, e) {
  var n = Wn(e.value),
    r = Wn(e.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== t.value && (t.value = n),
    e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
    r != null && (t.defaultValue = '' + r);
}
function jp(t) {
  var e = t.textContent;
  e === t._wrapperState.initialValue && e !== '' && e !== null && (t.value = e);
}
function Yy(t) {
  switch (t) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Zc(t, e) {
  return t == null || t === 'http://www.w3.org/1999/xhtml'
    ? Yy(e)
    : t === 'http://www.w3.org/2000/svg' && e === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : t;
}
var Oo,
  Jy = (function (t) {
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
        Oo = Oo || document.createElement('div'),
          Oo.innerHTML = '<svg>' + e.valueOf().toString() + '</svg>',
          e = Oo.firstChild;
        t.firstChild;

      )
        t.removeChild(t.firstChild);
      for (; e.firstChild; ) t.appendChild(e.firstChild);
    }
  });
function Is(t, e) {
  if (e) {
    var n = t.firstChild;
    if (n && n === t.lastChild && n.nodeType === 3) {
      n.nodeValue = e;
      return;
    }
  }
  t.textContent = e;
}
var as = {
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
  $S = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(as).forEach(function (t) {
  $S.forEach(function (e) {
    (e = e + t.charAt(0).toUpperCase() + t.substring(1)), (as[e] = as[t]);
  });
});
function Zy(t, e, n) {
  return e == null || typeof e == 'boolean' || e === ''
    ? ''
    : n || typeof e != 'number' || e === 0 || (as.hasOwnProperty(t) && as[t])
    ? ('' + e).trim()
    : e + 'px';
}
function ev(t, e) {
  t = t.style;
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        i = Zy(n, e[n], r);
      n === 'float' && (n = 'cssFloat'), r ? t.setProperty(n, i) : (t[n] = i);
    }
}
var LS = ue(
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
function eh(t, e) {
  if (e) {
    if (LS[t] && (e.children != null || e.dangerouslySetInnerHTML != null)) throw Error(_(137, t));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(_(60));
      if (typeof e.dangerouslySetInnerHTML != 'object' || !('__html' in e.dangerouslySetInnerHTML))
        throw Error(_(61));
    }
    if (e.style != null && typeof e.style != 'object') throw Error(_(62));
  }
}
function th(t, e) {
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
var nh = null;
function Ld(t) {
  return (
    (t = t.target || t.srcElement || window),
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
  );
}
var rh = null,
  ni = null,
  ri = null;
function Vp(t) {
  if ((t = io(t))) {
    if (typeof rh != 'function') throw Error(_(280));
    var e = t.stateNode;
    e && ((e = Cl(e)), rh(t.stateNode, t.type, e));
  }
}
function tv(t) {
  ni ? (ri ? ri.push(t) : (ri = [t])) : (ni = t);
}
function nv() {
  if (ni) {
    var t = ni,
      e = ri;
    if (((ri = ni = null), Vp(t), e)) for (t = 0; t < e.length; t++) Vp(e[t]);
  }
}
function rv(t, e) {
  return t(e);
}
function iv() {}
var Bu = !1;
function sv(t, e, n) {
  if (Bu) return t(e, n);
  Bu = !0;
  try {
    return rv(t, e, n);
  } finally {
    (Bu = !1), (ni !== null || ri !== null) && (iv(), nv());
  }
}
function ks(t, e) {
  var n = t.stateNode;
  if (n === null) return null;
  var r = Cl(n);
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
  if (n && typeof n != 'function') throw Error(_(231, e, typeof n));
  return n;
}
var ih = !1;
if (sn)
  try {
    var Ki = {};
    Object.defineProperty(Ki, 'passive', {
      get: function () {
        ih = !0;
      }
    }),
      window.addEventListener('test', Ki, Ki),
      window.removeEventListener('test', Ki, Ki);
  } catch {
    ih = !1;
  }
function MS(t, e, n, r, i, s, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var ls = !1,
  Ta = null,
  Ia = !1,
  sh = null,
  bS = {
    onError: function (t) {
      (ls = !0), (Ta = t);
    }
  };
function US(t, e, n, r, i, s, o, a, l) {
  (ls = !1), (Ta = null), MS.apply(bS, arguments);
}
function FS(t, e, n, r, i, s, o, a, l) {
  if ((US.apply(this, arguments), ls)) {
    if (ls) {
      var u = Ta;
      (ls = !1), (Ta = null);
    } else throw Error(_(198));
    Ia || ((Ia = !0), (sh = u));
  }
}
function Mr(t) {
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
function ov(t) {
  if (t.tag === 13) {
    var e = t.memoizedState;
    if ((e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)), e !== null))
      return e.dehydrated;
  }
  return null;
}
function zp(t) {
  if (Mr(t) !== t) throw Error(_(188));
}
function jS(t) {
  var e = t.alternate;
  if (!e) {
    if (((e = Mr(t)), e === null)) throw Error(_(188));
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
        if (s === n) return zp(i), t;
        if (s === r) return zp(i), e;
        s = s.sibling;
      }
      throw Error(_(188));
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
        if (!o) throw Error(_(189));
      }
    }
    if (n.alternate !== r) throw Error(_(190));
  }
  if (n.tag !== 3) throw Error(_(188));
  return n.stateNode.current === n ? t : e;
}
function av(t) {
  return (t = jS(t)), t !== null ? lv(t) : null;
}
function lv(t) {
  if (t.tag === 5 || t.tag === 6) return t;
  for (t = t.child; t !== null; ) {
    var e = lv(t);
    if (e !== null) return e;
    t = t.sibling;
  }
  return null;
}
var uv = mt.unstable_scheduleCallback,
  Bp = mt.unstable_cancelCallback,
  VS = mt.unstable_shouldYield,
  zS = mt.unstable_requestPaint,
  pe = mt.unstable_now,
  BS = mt.unstable_getCurrentPriorityLevel,
  Md = mt.unstable_ImmediatePriority,
  cv = mt.unstable_UserBlockingPriority,
  ka = mt.unstable_NormalPriority,
  HS = mt.unstable_LowPriority,
  hv = mt.unstable_IdlePriority,
  _l = null,
  zt = null;
function KS(t) {
  if (zt && typeof zt.onCommitFiberRoot == 'function')
    try {
      zt.onCommitFiberRoot(_l, t, void 0, (t.current.flags & 128) === 128);
    } catch {}
}
var $t = Math.clz32 ? Math.clz32 : GS,
  WS = Math.log,
  qS = Math.LN2;
function GS(t) {
  return (t >>>= 0), t === 0 ? 32 : (31 - ((WS(t) / qS) | 0)) | 0;
}
var xo = 64,
  Do = 4194304;
function ts(t) {
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
function Ca(t, e) {
  var n = t.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = t.suspendedLanes,
    s = t.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~i;
    a !== 0 ? (r = ts(a)) : ((s &= o), s !== 0 && (r = ts(s)));
  } else (o = n & ~i), o !== 0 ? (r = ts(o)) : s !== 0 && (r = ts(s));
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
      (n = 31 - $t(e)), (i = 1 << n), (r |= t[n]), (e &= ~i);
  return r;
}
function QS(t, e) {
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
function XS(t, e) {
  for (
    var n = t.suspendedLanes, r = t.pingedLanes, i = t.expirationTimes, s = t.pendingLanes;
    0 < s;

  ) {
    var o = 31 - $t(s),
      a = 1 << o,
      l = i[o];
    l === -1 ? (!(a & n) || a & r) && (i[o] = QS(a, e)) : l <= e && (t.expiredLanes |= a),
      (s &= ~a);
  }
}
function oh(t) {
  return (t = t.pendingLanes & -1073741825), t !== 0 ? t : t & 1073741824 ? 1073741824 : 0;
}
function dv() {
  var t = xo;
  return (xo <<= 1), !(xo & 4194240) && (xo = 64), t;
}
function Hu(t) {
  for (var e = [], n = 0; 31 > n; n++) e.push(t);
  return e;
}
function no(t, e, n) {
  (t.pendingLanes |= e),
    e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
    (t = t.eventTimes),
    (e = 31 - $t(e)),
    (t[e] = n);
}
function YS(t, e) {
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
    var i = 31 - $t(n),
      s = 1 << i;
    (e[i] = 0), (r[i] = -1), (t[i] = -1), (n &= ~s);
  }
}
function bd(t, e) {
  var n = (t.entangledLanes |= e);
  for (t = t.entanglements; n; ) {
    var r = 31 - $t(n),
      i = 1 << r;
    (i & e) | (t[r] & e) && (t[r] |= e), (n &= ~i);
  }
}
var X = 0;
function fv(t) {
  return (t &= -t), 1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1;
}
var pv,
  Ud,
  mv,
  gv,
  yv,
  ah = !1,
  $o = [],
  Dn = null,
  $n = null,
  Ln = null,
  Cs = new Map(),
  As = new Map(),
  Sn = [],
  JS =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function Hp(t, e) {
  switch (t) {
    case 'focusin':
    case 'focusout':
      Dn = null;
      break;
    case 'dragenter':
    case 'dragleave':
      $n = null;
      break;
    case 'mouseover':
    case 'mouseout':
      Ln = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Cs.delete(e.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      As.delete(e.pointerId);
  }
}
function Wi(t, e, n, r, i, s) {
  return t === null || t.nativeEvent !== s
    ? ((t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i]
      }),
      e !== null && ((e = io(e)), e !== null && Ud(e)),
      t)
    : ((t.eventSystemFlags |= r),
      (e = t.targetContainers),
      i !== null && e.indexOf(i) === -1 && e.push(i),
      t);
}
function ZS(t, e, n, r, i) {
  switch (e) {
    case 'focusin':
      return (Dn = Wi(Dn, t, e, n, r, i)), !0;
    case 'dragenter':
      return ($n = Wi($n, t, e, n, r, i)), !0;
    case 'mouseover':
      return (Ln = Wi(Ln, t, e, n, r, i)), !0;
    case 'pointerover':
      var s = i.pointerId;
      return Cs.set(s, Wi(Cs.get(s) || null, t, e, n, r, i)), !0;
    case 'gotpointercapture':
      return (s = i.pointerId), As.set(s, Wi(As.get(s) || null, t, e, n, r, i)), !0;
  }
  return !1;
}
function vv(t) {
  var e = cr(t.target);
  if (e !== null) {
    var n = Mr(e);
    if (n !== null) {
      if (((e = n.tag), e === 13)) {
        if (((e = ov(n)), e !== null)) {
          (t.blockedOn = e),
            yv(t.priority, function () {
              mv(n);
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
function na(t) {
  if (t.blockedOn !== null) return !1;
  for (var e = t.targetContainers; 0 < e.length; ) {
    var n = lh(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
    if (n === null) {
      n = t.nativeEvent;
      var r = new n.constructor(n.type, n);
      (nh = r), n.target.dispatchEvent(r), (nh = null);
    } else return (e = io(n)), e !== null && Ud(e), (t.blockedOn = n), !1;
    e.shift();
  }
  return !0;
}
function Kp(t, e, n) {
  na(t) && n.delete(e);
}
function e_() {
  (ah = !1),
    Dn !== null && na(Dn) && (Dn = null),
    $n !== null && na($n) && ($n = null),
    Ln !== null && na(Ln) && (Ln = null),
    Cs.forEach(Kp),
    As.forEach(Kp);
}
function qi(t, e) {
  t.blockedOn === e &&
    ((t.blockedOn = null),
    ah || ((ah = !0), mt.unstable_scheduleCallback(mt.unstable_NormalPriority, e_)));
}
function Ns(t) {
  function e(i) {
    return qi(i, t);
  }
  if (0 < $o.length) {
    qi($o[0], t);
    for (var n = 1; n < $o.length; n++) {
      var r = $o[n];
      r.blockedOn === t && (r.blockedOn = null);
    }
  }
  for (
    Dn !== null && qi(Dn, t),
      $n !== null && qi($n, t),
      Ln !== null && qi(Ln, t),
      Cs.forEach(e),
      As.forEach(e),
      n = 0;
    n < Sn.length;
    n++
  )
    (r = Sn[n]), r.blockedOn === t && (r.blockedOn = null);
  for (; 0 < Sn.length && ((n = Sn[0]), n.blockedOn === null); )
    vv(n), n.blockedOn === null && Sn.shift();
}
var ii = mn.ReactCurrentBatchConfig,
  Aa = !0;
function t_(t, e, n, r) {
  var i = X,
    s = ii.transition;
  ii.transition = null;
  try {
    (X = 1), Fd(t, e, n, r);
  } finally {
    (X = i), (ii.transition = s);
  }
}
function n_(t, e, n, r) {
  var i = X,
    s = ii.transition;
  ii.transition = null;
  try {
    (X = 4), Fd(t, e, n, r);
  } finally {
    (X = i), (ii.transition = s);
  }
}
function Fd(t, e, n, r) {
  if (Aa) {
    var i = lh(t, e, n, r);
    if (i === null) ec(t, e, r, Na, n), Hp(t, r);
    else if (ZS(i, t, e, n, r)) r.stopPropagation();
    else if ((Hp(t, r), e & 4 && -1 < JS.indexOf(t))) {
      for (; i !== null; ) {
        var s = io(i);
        if ((s !== null && pv(s), (s = lh(t, e, n, r)), s === null && ec(t, e, r, Na, n), s === i))
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else ec(t, e, r, null, n);
  }
}
var Na = null;
function lh(t, e, n, r) {
  if (((Na = null), (t = Ld(r)), (t = cr(t)), t !== null))
    if (((e = Mr(t)), e === null)) t = null;
    else if (((n = e.tag), n === 13)) {
      if (((t = ov(e)), t !== null)) return t;
      t = null;
    } else if (n === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null;
      t = null;
    } else e !== t && (t = null);
  return (Na = t), null;
}
function wv(t) {
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
      switch (BS()) {
        case Md:
          return 1;
        case cv:
          return 4;
        case ka:
        case HS:
          return 16;
        case hv:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Nn = null,
  jd = null,
  ra = null;
function Ev() {
  if (ra) return ra;
  var t,
    e = jd,
    n = e.length,
    r,
    i = 'value' in Nn ? Nn.value : Nn.textContent,
    s = i.length;
  for (t = 0; t < n && e[t] === i[t]; t++);
  var o = n - t;
  for (r = 1; r <= o && e[n - r] === i[s - r]; r++);
  return (ra = i.slice(t, 1 < r ? 1 - r : void 0));
}
function ia(t) {
  var e = t.keyCode;
  return (
    'charCode' in t ? ((t = t.charCode), t === 0 && e === 13 && (t = 13)) : (t = e),
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
  );
}
function Lo() {
  return !0;
}
function Wp() {
  return !1;
}
function wt(t) {
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
        ? Lo
        : Wp),
      (this.isPropagationStopped = Wp),
      this
    );
  }
  return (
    ue(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Lo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Lo));
      },
      persist: function () {},
      isPersistent: Lo
    }),
    e
  );
}
var Li = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  },
  Vd = wt(Li),
  ro = ue({}, Li, { view: 0, detail: 0 }),
  r_ = wt(ro),
  Ku,
  Wu,
  Gi,
  Tl = ue({}, ro, {
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
    getModifierState: zd,
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
        : (t !== Gi &&
            (Gi && t.type === 'mousemove'
              ? ((Ku = t.screenX - Gi.screenX), (Wu = t.screenY - Gi.screenY))
              : (Wu = Ku = 0),
            (Gi = t)),
          Ku);
    },
    movementY: function (t) {
      return 'movementY' in t ? t.movementY : Wu;
    }
  }),
  qp = wt(Tl),
  i_ = ue({}, Tl, { dataTransfer: 0 }),
  s_ = wt(i_),
  o_ = ue({}, ro, { relatedTarget: 0 }),
  qu = wt(o_),
  a_ = ue({}, Li, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  l_ = wt(a_),
  u_ = ue({}, Li, {
    clipboardData: function (t) {
      return 'clipboardData' in t ? t.clipboardData : window.clipboardData;
    }
  }),
  c_ = wt(u_),
  h_ = ue({}, Li, { data: 0 }),
  Gp = wt(h_),
  d_ = {
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
  f_ = {
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
  p_ = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function m_(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = p_[t]) ? !!e[t] : !1;
}
function zd() {
  return m_;
}
var g_ = ue({}, ro, {
    key: function (t) {
      if (t.key) {
        var e = d_[t.key] || t.key;
        if (e !== 'Unidentified') return e;
      }
      return t.type === 'keypress'
        ? ((t = ia(t)), t === 13 ? 'Enter' : String.fromCharCode(t))
        : t.type === 'keydown' || t.type === 'keyup'
        ? f_[t.keyCode] || 'Unidentified'
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
    getModifierState: zd,
    charCode: function (t) {
      return t.type === 'keypress' ? ia(t) : 0;
    },
    keyCode: function (t) {
      return t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0;
    },
    which: function (t) {
      return t.type === 'keypress'
        ? ia(t)
        : t.type === 'keydown' || t.type === 'keyup'
        ? t.keyCode
        : 0;
    }
  }),
  y_ = wt(g_),
  v_ = ue({}, Tl, {
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
  Qp = wt(v_),
  w_ = ue({}, ro, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: zd
  }),
  E_ = wt(w_),
  S_ = ue({}, Li, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  __ = wt(S_),
  T_ = ue({}, Tl, {
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
  I_ = wt(T_),
  k_ = [9, 13, 27, 32],
  Bd = sn && 'CompositionEvent' in window,
  us = null;
sn && 'documentMode' in document && (us = document.documentMode);
var C_ = sn && 'TextEvent' in window && !us,
  Sv = sn && (!Bd || (us && 8 < us && 11 >= us)),
  Xp = String.fromCharCode(32),
  Yp = !1;
function _v(t, e) {
  switch (t) {
    case 'keyup':
      return k_.indexOf(e.keyCode) !== -1;
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
function Tv(t) {
  return (t = t.detail), typeof t == 'object' && 'data' in t ? t.data : null;
}
var Br = !1;
function A_(t, e) {
  switch (t) {
    case 'compositionend':
      return Tv(e);
    case 'keypress':
      return e.which !== 32 ? null : ((Yp = !0), Xp);
    case 'textInput':
      return (t = e.data), t === Xp && Yp ? null : t;
    default:
      return null;
  }
}
function N_(t, e) {
  if (Br)
    return t === 'compositionend' || (!Bd && _v(t, e))
      ? ((t = Ev()), (ra = jd = Nn = null), (Br = !1), t)
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
      return Sv && e.locale !== 'ko' ? null : e.data;
    default:
      return null;
  }
}
var R_ = {
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
function Jp(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === 'input' ? !!R_[t.type] : e === 'textarea';
}
function Iv(t, e, n, r) {
  tv(r),
    (e = Ra(e, 'onChange')),
    0 < e.length &&
      ((n = new Vd('onChange', 'change', null, n, r)), t.push({ event: n, listeners: e }));
}
var cs = null,
  Rs = null;
function P_(t) {
  Lv(t, 0);
}
function Il(t) {
  var e = Wr(t);
  if (Gy(e)) return t;
}
function O_(t, e) {
  if (t === 'change') return e;
}
var kv = !1;
if (sn) {
  var Gu;
  if (sn) {
    var Qu = 'oninput' in document;
    if (!Qu) {
      var Zp = document.createElement('div');
      Zp.setAttribute('oninput', 'return;'), (Qu = typeof Zp.oninput == 'function');
    }
    Gu = Qu;
  } else Gu = !1;
  kv = Gu && (!document.documentMode || 9 < document.documentMode);
}
function em() {
  cs && (cs.detachEvent('onpropertychange', Cv), (Rs = cs = null));
}
function Cv(t) {
  if (t.propertyName === 'value' && Il(Rs)) {
    var e = [];
    Iv(e, Rs, t, Ld(t)), sv(P_, e);
  }
}
function x_(t, e, n) {
  t === 'focusin'
    ? (em(), (cs = e), (Rs = n), cs.attachEvent('onpropertychange', Cv))
    : t === 'focusout' && em();
}
function D_(t) {
  if (t === 'selectionchange' || t === 'keyup' || t === 'keydown') return Il(Rs);
}
function $_(t, e) {
  if (t === 'click') return Il(e);
}
function L_(t, e) {
  if (t === 'input' || t === 'change') return Il(e);
}
function M_(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var Mt = typeof Object.is == 'function' ? Object.is : M_;
function Ps(t, e) {
  if (Mt(t, e)) return !0;
  if (typeof t != 'object' || t === null || typeof e != 'object' || e === null) return !1;
  var n = Object.keys(t),
    r = Object.keys(e);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Hc.call(e, i) || !Mt(t[i], e[i])) return !1;
  }
  return !0;
}
function tm(t) {
  for (; t && t.firstChild; ) t = t.firstChild;
  return t;
}
function nm(t, e) {
  var n = tm(t);
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
    n = tm(n);
  }
}
function Av(t, e) {
  return t && e
    ? t === e
      ? !0
      : t && t.nodeType === 3
      ? !1
      : e && e.nodeType === 3
      ? Av(t, e.parentNode)
      : 'contains' in t
      ? t.contains(e)
      : t.compareDocumentPosition
      ? !!(t.compareDocumentPosition(e) & 16)
      : !1
    : !1;
}
function Nv() {
  for (var t = window, e = _a(); e instanceof t.HTMLIFrameElement; ) {
    try {
      var n = typeof e.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) t = e.contentWindow;
    else break;
    e = _a(t.document);
  }
  return e;
}
function Hd(t) {
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
function b_(t) {
  var e = Nv(),
    n = t.focusedElem,
    r = t.selectionRange;
  if (e !== n && n && n.ownerDocument && Av(n.ownerDocument.documentElement, n)) {
    if (r !== null && Hd(n)) {
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
          (i = nm(n, s));
        var o = nm(n, r);
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
var U_ = sn && 'documentMode' in document && 11 >= document.documentMode,
  Hr = null,
  uh = null,
  hs = null,
  ch = !1;
function rm(t, e, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ch ||
    Hr == null ||
    Hr !== _a(r) ||
    ((r = Hr),
    'selectionStart' in r && Hd(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset
        })),
    (hs && Ps(hs, r)) ||
      ((hs = r),
      (r = Ra(uh, 'onSelect')),
      0 < r.length &&
        ((e = new Vd('onSelect', 'select', null, e, n)),
        t.push({ event: e, listeners: r }),
        (e.target = Hr))));
}
function Mo(t, e) {
  var n = {};
  return (
    (n[t.toLowerCase()] = e.toLowerCase()),
    (n['Webkit' + t] = 'webkit' + e),
    (n['Moz' + t] = 'moz' + e),
    n
  );
}
var Kr = {
    animationend: Mo('Animation', 'AnimationEnd'),
    animationiteration: Mo('Animation', 'AnimationIteration'),
    animationstart: Mo('Animation', 'AnimationStart'),
    transitionend: Mo('Transition', 'TransitionEnd')
  },
  Xu = {},
  Rv = {};
sn &&
  ((Rv = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Kr.animationend.animation,
    delete Kr.animationiteration.animation,
    delete Kr.animationstart.animation),
  'TransitionEvent' in window || delete Kr.transitionend.transition);
function kl(t) {
  if (Xu[t]) return Xu[t];
  if (!Kr[t]) return t;
  var e = Kr[t],
    n;
  for (n in e) if (e.hasOwnProperty(n) && n in Rv) return (Xu[t] = e[n]);
  return t;
}
var Pv = kl('animationend'),
  Ov = kl('animationiteration'),
  xv = kl('animationstart'),
  Dv = kl('transitionend'),
  $v = new Map(),
  im =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function Jn(t, e) {
  $v.set(t, e), Lr(e, [t]);
}
for (var Yu = 0; Yu < im.length; Yu++) {
  var Ju = im[Yu],
    F_ = Ju.toLowerCase(),
    j_ = Ju[0].toUpperCase() + Ju.slice(1);
  Jn(F_, 'on' + j_);
}
Jn(Pv, 'onAnimationEnd');
Jn(Ov, 'onAnimationIteration');
Jn(xv, 'onAnimationStart');
Jn('dblclick', 'onDoubleClick');
Jn('focusin', 'onFocus');
Jn('focusout', 'onBlur');
Jn(Dv, 'onTransitionEnd');
gi('onMouseEnter', ['mouseout', 'mouseover']);
gi('onMouseLeave', ['mouseout', 'mouseover']);
gi('onPointerEnter', ['pointerout', 'pointerover']);
gi('onPointerLeave', ['pointerout', 'pointerover']);
Lr('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '));
Lr(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')
);
Lr('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Lr('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '));
Lr('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '));
Lr('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
var ns =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  V_ = new Set('cancel close invalid load scroll toggle'.split(' ').concat(ns));
function sm(t, e, n) {
  var r = t.type || 'unknown-event';
  (t.currentTarget = n), FS(r, e, void 0, t), (t.currentTarget = null);
}
function Lv(t, e) {
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
          sm(i, a, u), (s = l);
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
          sm(i, a, u), (s = l);
        }
    }
  }
  if (Ia) throw ((t = sh), (Ia = !1), (sh = null), t);
}
function ne(t, e) {
  var n = e[mh];
  n === void 0 && (n = e[mh] = new Set());
  var r = t + '__bubble';
  n.has(r) || (Mv(e, t, 2, !1), n.add(r));
}
function Zu(t, e, n) {
  var r = 0;
  e && (r |= 4), Mv(n, t, r, e);
}
var bo = '_reactListening' + Math.random().toString(36).slice(2);
function Os(t) {
  if (!t[bo]) {
    (t[bo] = !0),
      By.forEach(function (n) {
        n !== 'selectionchange' && (V_.has(n) || Zu(n, !1, t), Zu(n, !0, t));
      });
    var e = t.nodeType === 9 ? t : t.ownerDocument;
    e === null || e[bo] || ((e[bo] = !0), Zu('selectionchange', !1, e));
  }
}
function Mv(t, e, n, r) {
  switch (wv(e)) {
    case 1:
      var i = t_;
      break;
    case 4:
      i = n_;
      break;
    default:
      i = Fd;
  }
  (n = i.bind(null, e, n, t)),
    (i = void 0),
    !ih || (e !== 'touchstart' && e !== 'touchmove' && e !== 'wheel') || (i = !0),
    r
      ? i !== void 0
        ? t.addEventListener(e, n, { capture: !0, passive: i })
        : t.addEventListener(e, n, !0)
      : i !== void 0
      ? t.addEventListener(e, n, { passive: i })
      : t.addEventListener(e, n, !1);
}
function ec(t, e, n, r, i) {
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
          if (((o = cr(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = s = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  sv(function () {
    var u = s,
      c = Ld(n),
      h = [];
    e: {
      var d = $v.get(t);
      if (d !== void 0) {
        var m = Vd,
          y = t;
        switch (t) {
          case 'keypress':
            if (ia(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            m = y_;
            break;
          case 'focusin':
            (y = 'focus'), (m = qu);
            break;
          case 'focusout':
            (y = 'blur'), (m = qu);
            break;
          case 'beforeblur':
          case 'afterblur':
            m = qu;
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
            m = qp;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            m = s_;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            m = E_;
            break;
          case Pv:
          case Ov:
          case xv:
            m = l_;
            break;
          case Dv:
            m = __;
            break;
          case 'scroll':
            m = r_;
            break;
          case 'wheel':
            m = I_;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            m = c_;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            m = Qp;
        }
        var v = (e & 4) !== 0,
          E = !v && t === 'scroll',
          p = v ? (d !== null ? d + 'Capture' : null) : d;
        v = [];
        for (var f = u, g; f !== null; ) {
          g = f;
          var w = g.stateNode;
          if (
            (g.tag === 5 &&
              w !== null &&
              ((g = w), p !== null && ((w = ks(f, p)), w != null && v.push(xs(f, w, g)))),
            E)
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
          d && n !== nh && (y = n.relatedTarget || n.fromElement) && (cr(y) || y[on]))
        )
          break e;
        if (
          (m || d) &&
          ((d =
            c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window),
          m
            ? ((y = n.relatedTarget || n.toElement),
              (m = u),
              (y = y ? cr(y) : null),
              y !== null && ((E = Mr(y)), y !== E || (y.tag !== 5 && y.tag !== 6)) && (y = null))
            : ((m = null), (y = u)),
          m !== y)
        ) {
          if (
            ((v = qp),
            (w = 'onMouseLeave'),
            (p = 'onMouseEnter'),
            (f = 'mouse'),
            (t === 'pointerout' || t === 'pointerover') &&
              ((v = Qp), (w = 'onPointerLeave'), (p = 'onPointerEnter'), (f = 'pointer')),
            (E = m == null ? d : Wr(m)),
            (g = y == null ? d : Wr(y)),
            (d = new v(w, f + 'leave', m, n, c)),
            (d.target = E),
            (d.relatedTarget = g),
            (w = null),
            cr(c) === u &&
              ((v = new v(p, f + 'enter', y, n, c)),
              (v.target = g),
              (v.relatedTarget = E),
              (w = v)),
            (E = w),
            m && y)
          )
            t: {
              for (v = m, p = y, f = 0, g = v; g; g = Ur(g)) f++;
              for (g = 0, w = p; w; w = Ur(w)) g++;
              for (; 0 < f - g; ) (v = Ur(v)), f--;
              for (; 0 < g - f; ) (p = Ur(p)), g--;
              for (; f--; ) {
                if (v === p || (p !== null && v === p.alternate)) break t;
                (v = Ur(v)), (p = Ur(p));
              }
              v = null;
            }
          else v = null;
          m !== null && om(h, d, m, v, !1), y !== null && E !== null && om(h, E, y, v, !0);
        }
      }
      e: {
        if (
          ((d = u ? Wr(u) : window),
          (m = d.nodeName && d.nodeName.toLowerCase()),
          m === 'select' || (m === 'input' && d.type === 'file'))
        )
          var S = O_;
        else if (Jp(d))
          if (kv) S = L_;
          else {
            S = D_;
            var k = x_;
          }
        else
          (m = d.nodeName) &&
            m.toLowerCase() === 'input' &&
            (d.type === 'checkbox' || d.type === 'radio') &&
            (S = $_);
        if (S && (S = S(t, u))) {
          Iv(h, S, n, c);
          break e;
        }
        k && k(t, d, u),
          t === 'focusout' &&
            (k = d._wrapperState) &&
            k.controlled &&
            d.type === 'number' &&
            Yc(d, 'number', d.value);
      }
      switch (((k = u ? Wr(u) : window), t)) {
        case 'focusin':
          (Jp(k) || k.contentEditable === 'true') && ((Hr = k), (uh = u), (hs = null));
          break;
        case 'focusout':
          hs = uh = Hr = null;
          break;
        case 'mousedown':
          ch = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (ch = !1), rm(h, n, c);
          break;
        case 'selectionchange':
          if (U_) break;
        case 'keydown':
        case 'keyup':
          rm(h, n, c);
      }
      var C;
      if (Bd)
        e: {
          switch (t) {
            case 'compositionstart':
              var A = 'onCompositionStart';
              break e;
            case 'compositionend':
              A = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              A = 'onCompositionUpdate';
              break e;
          }
          A = void 0;
        }
      else
        Br
          ? _v(t, n) && (A = 'onCompositionEnd')
          : t === 'keydown' && n.keyCode === 229 && (A = 'onCompositionStart');
      A &&
        (Sv &&
          n.locale !== 'ko' &&
          (Br || A !== 'onCompositionStart'
            ? A === 'onCompositionEnd' && Br && (C = Ev())
            : ((Nn = c), (jd = 'value' in Nn ? Nn.value : Nn.textContent), (Br = !0))),
        (k = Ra(u, A)),
        0 < k.length &&
          ((A = new Gp(A, t, null, n, c)),
          h.push({ event: A, listeners: k }),
          C ? (A.data = C) : ((C = Tv(n)), C !== null && (A.data = C)))),
        (C = C_ ? A_(t, n) : N_(t, n)) &&
          ((u = Ra(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new Gp('onBeforeInput', 'beforeinput', null, n, c)),
            h.push({ event: c, listeners: u }),
            (c.data = C)));
    }
    Lv(h, e);
  });
}
function xs(t, e, n) {
  return { instance: t, listener: e, currentTarget: n };
}
function Ra(t, e) {
  for (var n = e + 'Capture', r = []; t !== null; ) {
    var i = t,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = ks(t, n)),
      s != null && r.unshift(xs(t, s, i)),
      (s = ks(t, e)),
      s != null && r.push(xs(t, s, i))),
      (t = t.return);
  }
  return r;
}
function Ur(t) {
  if (t === null) return null;
  do t = t.return;
  while (t && t.tag !== 5);
  return t || null;
}
function om(t, e, n, r, i) {
  for (var s = e._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = ks(n, s)), l != null && o.unshift(xs(n, l, a)))
        : i || ((l = ks(n, s)), l != null && o.push(xs(n, l, a)))),
      (n = n.return);
  }
  o.length !== 0 && t.push({ event: e, listeners: o });
}
var z_ = /\r\n?/g,
  B_ = /\u0000|\uFFFD/g;
function am(t) {
  return (typeof t == 'string' ? t : '' + t)
    .replace(
      z_,
      `
`
    )
    .replace(B_, '');
}
function Uo(t, e, n) {
  if (((e = am(e)), am(t) !== e && n)) throw Error(_(425));
}
function Pa() {}
var hh = null,
  dh = null;
function fh(t, e) {
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
var ph = typeof setTimeout == 'function' ? setTimeout : void 0,
  H_ = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  lm = typeof Promise == 'function' ? Promise : void 0,
  K_ =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof lm < 'u'
      ? function (t) {
          return lm.resolve(null).then(t).catch(W_);
        }
      : ph;
function W_(t) {
  setTimeout(function () {
    throw t;
  });
}
function tc(t, e) {
  var n = e,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((t.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === '/$')) {
        if (r === 0) {
          t.removeChild(i), Ns(e);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = i;
  } while (n);
  Ns(e);
}
function Mn(t) {
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
function um(t) {
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
var Mi = Math.random().toString(36).slice(2),
  Ft = '__reactFiber$' + Mi,
  Ds = '__reactProps$' + Mi,
  on = '__reactContainer$' + Mi,
  mh = '__reactEvents$' + Mi,
  q_ = '__reactListeners$' + Mi,
  G_ = '__reactHandles$' + Mi;
function cr(t) {
  var e = t[Ft];
  if (e) return e;
  for (var n = t.parentNode; n; ) {
    if ((e = n[on] || n[Ft])) {
      if (((n = e.alternate), e.child !== null || (n !== null && n.child !== null)))
        for (t = um(t); t !== null; ) {
          if ((n = t[Ft])) return n;
          t = um(t);
        }
      return e;
    }
    (t = n), (n = t.parentNode);
  }
  return null;
}
function io(t) {
  return (
    (t = t[Ft] || t[on]),
    !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t
  );
}
function Wr(t) {
  if (t.tag === 5 || t.tag === 6) return t.stateNode;
  throw Error(_(33));
}
function Cl(t) {
  return t[Ds] || null;
}
var gh = [],
  qr = -1;
function Zn(t) {
  return { current: t };
}
function re(t) {
  0 > qr || ((t.current = gh[qr]), (gh[qr] = null), qr--);
}
function ee(t, e) {
  qr++, (gh[qr] = t.current), (t.current = e);
}
var qn = {},
  We = Zn(qn),
  st = Zn(!1),
  Ir = qn;
function yi(t, e) {
  var n = t.type.contextTypes;
  if (!n) return qn;
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
function ot(t) {
  return (t = t.childContextTypes), t != null;
}
function Oa() {
  re(st), re(We);
}
function cm(t, e, n) {
  if (We.current !== qn) throw Error(_(168));
  ee(We, e), ee(st, n);
}
function bv(t, e, n) {
  var r = t.stateNode;
  if (((e = e.childContextTypes), typeof r.getChildContext != 'function')) return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in e)) throw Error(_(108, xS(t) || 'Unknown', i));
  return ue({}, n, r);
}
function xa(t) {
  return (
    (t = ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || qn),
    (Ir = We.current),
    ee(We, t),
    ee(st, st.current),
    !0
  );
}
function hm(t, e, n) {
  var r = t.stateNode;
  if (!r) throw Error(_(169));
  n
    ? ((t = bv(t, e, Ir)),
      (r.__reactInternalMemoizedMergedChildContext = t),
      re(st),
      re(We),
      ee(We, t))
    : re(st),
    ee(st, n);
}
var Yt = null,
  Al = !1,
  nc = !1;
function Uv(t) {
  Yt === null ? (Yt = [t]) : Yt.push(t);
}
function Q_(t) {
  (Al = !0), Uv(t);
}
function er() {
  if (!nc && Yt !== null) {
    nc = !0;
    var t = 0,
      e = X;
    try {
      var n = Yt;
      for (X = 1; t < n.length; t++) {
        var r = n[t];
        do r = r(!0);
        while (r !== null);
      }
      (Yt = null), (Al = !1);
    } catch (i) {
      throw (Yt !== null && (Yt = Yt.slice(t + 1)), uv(Md, er), i);
    } finally {
      (X = e), (nc = !1);
    }
  }
  return null;
}
var Gr = [],
  Qr = 0,
  Da = null,
  $a = 0,
  St = [],
  _t = 0,
  kr = null,
  Jt = 1,
  Zt = '';
function or(t, e) {
  (Gr[Qr++] = $a), (Gr[Qr++] = Da), (Da = t), ($a = e);
}
function Fv(t, e, n) {
  (St[_t++] = Jt), (St[_t++] = Zt), (St[_t++] = kr), (kr = t);
  var r = Jt;
  t = Zt;
  var i = 32 - $t(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - $t(e) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (Jt = (1 << (32 - $t(e) + i)) | (n << i) | r),
      (Zt = s + t);
  } else (Jt = (1 << s) | (n << i) | r), (Zt = t);
}
function Kd(t) {
  t.return !== null && (or(t, 1), Fv(t, 1, 0));
}
function Wd(t) {
  for (; t === Da; ) (Da = Gr[--Qr]), (Gr[Qr] = null), ($a = Gr[--Qr]), (Gr[Qr] = null);
  for (; t === kr; )
    (kr = St[--_t]),
      (St[_t] = null),
      (Zt = St[--_t]),
      (St[_t] = null),
      (Jt = St[--_t]),
      (St[_t] = null);
}
var pt = null,
  dt = null,
  se = !1,
  xt = null;
function jv(t, e) {
  var n = It(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = e),
    (n.return = t),
    (e = t.deletions),
    e === null ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n);
}
function dm(t, e) {
  switch (t.tag) {
    case 5:
      var n = t.type;
      return (
        (e = e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase() ? null : e),
        e !== null ? ((t.stateNode = e), (pt = t), (dt = Mn(e.firstChild)), !0) : !1
      );
    case 6:
      return (
        (e = t.pendingProps === '' || e.nodeType !== 3 ? null : e),
        e !== null ? ((t.stateNode = e), (pt = t), (dt = null), !0) : !1
      );
    case 13:
      return (
        (e = e.nodeType !== 8 ? null : e),
        e !== null
          ? ((n = kr !== null ? { id: Jt, overflow: Zt } : null),
            (t.memoizedState = { dehydrated: e, treeContext: n, retryLane: 1073741824 }),
            (n = It(18, null, null, 0)),
            (n.stateNode = e),
            (n.return = t),
            (t.child = n),
            (pt = t),
            (dt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function yh(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function vh(t) {
  if (se) {
    var e = dt;
    if (e) {
      var n = e;
      if (!dm(t, e)) {
        if (yh(t)) throw Error(_(418));
        e = Mn(n.nextSibling);
        var r = pt;
        e && dm(t, e) ? jv(r, n) : ((t.flags = (t.flags & -4097) | 2), (se = !1), (pt = t));
      }
    } else {
      if (yh(t)) throw Error(_(418));
      (t.flags = (t.flags & -4097) | 2), (se = !1), (pt = t);
    }
  }
}
function fm(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; ) t = t.return;
  pt = t;
}
function Fo(t) {
  if (t !== pt) return !1;
  if (!se) return fm(t), (se = !0), !1;
  var e;
  if (
    ((e = t.tag !== 3) &&
      !(e = t.tag !== 5) &&
      ((e = t.type), (e = e !== 'head' && e !== 'body' && !fh(t.type, t.memoizedProps))),
    e && (e = dt))
  ) {
    if (yh(t)) throw (Vv(), Error(_(418)));
    for (; e; ) jv(t, e), (e = Mn(e.nextSibling));
  }
  if ((fm(t), t.tag === 13)) {
    if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(_(317));
    e: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (n === '/$') {
            if (e === 0) {
              dt = Mn(t.nextSibling);
              break e;
            }
            e--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || e++;
        }
        t = t.nextSibling;
      }
      dt = null;
    }
  } else dt = pt ? Mn(t.stateNode.nextSibling) : null;
  return !0;
}
function Vv() {
  for (var t = dt; t; ) t = Mn(t.nextSibling);
}
function vi() {
  (dt = pt = null), (se = !1);
}
function qd(t) {
  xt === null ? (xt = [t]) : xt.push(t);
}
var X_ = mn.ReactCurrentBatchConfig;
function Pt(t, e) {
  if (t && t.defaultProps) {
    (e = ue({}, e)), (t = t.defaultProps);
    for (var n in t) e[n] === void 0 && (e[n] = t[n]);
    return e;
  }
  return e;
}
var La = Zn(null),
  Ma = null,
  Xr = null,
  Gd = null;
function Qd() {
  Gd = Xr = Ma = null;
}
function Xd(t) {
  var e = La.current;
  re(La), (t._currentValue = e);
}
function wh(t, e, n) {
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
function si(t, e) {
  (Ma = t),
    (Gd = Xr = null),
    (t = t.dependencies),
    t !== null && t.firstContext !== null && (t.lanes & e && (it = !0), (t.firstContext = null));
}
function Ct(t) {
  var e = t._currentValue;
  if (Gd !== t)
    if (((t = { context: t, memoizedValue: e, next: null }), Xr === null)) {
      if (Ma === null) throw Error(_(308));
      (Xr = t), (Ma.dependencies = { lanes: 0, firstContext: t });
    } else Xr = Xr.next = t;
  return e;
}
var hr = null;
function Yd(t) {
  hr === null ? (hr = [t]) : hr.push(t);
}
function zv(t, e, n, r) {
  var i = e.interleaved;
  return (
    i === null ? ((n.next = n), Yd(e)) : ((n.next = i.next), (i.next = n)),
    (e.interleaved = n),
    an(t, r)
  );
}
function an(t, e) {
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
var En = !1;
function Jd(t) {
  t.updateQueue = {
    baseState: t.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null
  };
}
function Bv(t, e) {
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
function rn(t, e) {
  return { eventTime: t, lane: e, tag: 0, payload: null, callback: null, next: null };
}
function bn(t, e, n) {
  var r = t.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), W & 2)) {
    var i = r.pending;
    return i === null ? (e.next = e) : ((e.next = i.next), (i.next = e)), (r.pending = e), an(t, n);
  }
  return (
    (i = r.interleaved),
    i === null ? ((e.next = e), Yd(r)) : ((e.next = i.next), (i.next = e)),
    (r.interleaved = e),
    an(t, n)
  );
}
function sa(t, e, n) {
  if (((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194240) !== 0))) {
    var r = e.lanes;
    (r &= t.pendingLanes), (n |= r), (e.lanes = n), bd(t, n);
  }
}
function pm(t, e) {
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
function ba(t, e, n, r) {
  var i = t.updateQueue;
  En = !1;
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
              h = ue({}, h, d);
              break e;
            case 2:
              En = !0;
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
    (Ar |= o), (t.lanes = o), (t.memoizedState = h);
  }
}
function mm(t, e, n) {
  if (((t = e.effects), (e.effects = null), t !== null))
    for (e = 0; e < t.length; e++) {
      var r = t[e],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != 'function')) throw Error(_(191, i));
        i.call(r);
      }
    }
}
var Hv = new zy.Component().refs;
function Eh(t, e, n, r) {
  (e = t.memoizedState),
    (n = n(r, e)),
    (n = n == null ? e : ue({}, e, n)),
    (t.memoizedState = n),
    t.lanes === 0 && (t.updateQueue.baseState = n);
}
var Nl = {
  isMounted: function (t) {
    return (t = t._reactInternals) ? Mr(t) === t : !1;
  },
  enqueueSetState: function (t, e, n) {
    t = t._reactInternals;
    var r = Ye(),
      i = Fn(t),
      s = rn(r, i);
    (s.payload = e),
      n != null && (s.callback = n),
      (e = bn(t, s, i)),
      e !== null && (Lt(e, t, i, r), sa(e, t, i));
  },
  enqueueReplaceState: function (t, e, n) {
    t = t._reactInternals;
    var r = Ye(),
      i = Fn(t),
      s = rn(r, i);
    (s.tag = 1),
      (s.payload = e),
      n != null && (s.callback = n),
      (e = bn(t, s, i)),
      e !== null && (Lt(e, t, i, r), sa(e, t, i));
  },
  enqueueForceUpdate: function (t, e) {
    t = t._reactInternals;
    var n = Ye(),
      r = Fn(t),
      i = rn(n, r);
    (i.tag = 2),
      e != null && (i.callback = e),
      (e = bn(t, i, r)),
      e !== null && (Lt(e, t, r, n), sa(e, t, r));
  }
};
function gm(t, e, n, r, i, s, o) {
  return (
    (t = t.stateNode),
    typeof t.shouldComponentUpdate == 'function'
      ? t.shouldComponentUpdate(r, s, o)
      : e.prototype && e.prototype.isPureReactComponent
      ? !Ps(n, r) || !Ps(i, s)
      : !0
  );
}
function Kv(t, e, n) {
  var r = !1,
    i = qn,
    s = e.contextType;
  return (
    typeof s == 'object' && s !== null
      ? (s = Ct(s))
      : ((i = ot(e) ? Ir : We.current),
        (r = e.contextTypes),
        (s = (r = r != null) ? yi(t, i) : qn)),
    (e = new e(n, s)),
    (t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
    (e.updater = Nl),
    (t.stateNode = e),
    (e._reactInternals = t),
    r &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = i),
      (t.__reactInternalMemoizedMaskedChildContext = s)),
    e
  );
}
function ym(t, e, n, r) {
  (t = e.state),
    typeof e.componentWillReceiveProps == 'function' && e.componentWillReceiveProps(n, r),
    typeof e.UNSAFE_componentWillReceiveProps == 'function' &&
      e.UNSAFE_componentWillReceiveProps(n, r),
    e.state !== t && Nl.enqueueReplaceState(e, e.state, null);
}
function Sh(t, e, n, r) {
  var i = t.stateNode;
  (i.props = n), (i.state = t.memoizedState), (i.refs = Hv), Jd(t);
  var s = e.contextType;
  typeof s == 'object' && s !== null
    ? (i.context = Ct(s))
    : ((s = ot(e) ? Ir : We.current), (i.context = yi(t, s))),
    (i.state = t.memoizedState),
    (s = e.getDerivedStateFromProps),
    typeof s == 'function' && (Eh(t, e, s, n), (i.state = t.memoizedState)),
    typeof e.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' &&
        typeof i.componentWillMount != 'function') ||
      ((e = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' && i.UNSAFE_componentWillMount(),
      e !== i.state && Nl.enqueueReplaceState(i, i.state, null),
      ba(t, n, i, r),
      (i.state = t.memoizedState)),
    typeof i.componentDidMount == 'function' && (t.flags |= 4194308);
}
function Qi(t, e, n) {
  if (((t = n.ref), t !== null && typeof t != 'function' && typeof t != 'object')) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(_(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(_(147, t));
      var i = r,
        s = '' + t;
      return e !== null && e.ref !== null && typeof e.ref == 'function' && e.ref._stringRef === s
        ? e.ref
        : ((e = function (o) {
            var a = i.refs;
            a === Hv && (a = i.refs = {}), o === null ? delete a[s] : (a[s] = o);
          }),
          (e._stringRef = s),
          e);
    }
    if (typeof t != 'string') throw Error(_(284));
    if (!n._owner) throw Error(_(290, t));
  }
  return t;
}
function jo(t, e) {
  throw (
    ((t = Object.prototype.toString.call(e)),
    Error(
      _(31, t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t)
    ))
  );
}
function vm(t) {
  var e = t._init;
  return e(t._payload);
}
function Wv(t) {
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
    return (p = jn(p, f)), (p.index = 0), (p.sibling = null), p;
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
  function a(p, f, g, w) {
    return f === null || f.tag !== 6
      ? ((f = uc(g, p.mode, w)), (f.return = p), f)
      : ((f = i(f, g)), (f.return = p), f);
  }
  function l(p, f, g, w) {
    var S = g.type;
    return S === zr
      ? c(p, f, g.props.children, w, g.key)
      : f !== null &&
        (f.elementType === S ||
          (typeof S == 'object' && S !== null && S.$$typeof === wn && vm(S) === f.type))
      ? ((w = i(f, g.props)), (w.ref = Qi(p, f, g)), (w.return = p), w)
      : ((w = ha(g.type, g.key, g.props, null, p.mode, w)),
        (w.ref = Qi(p, f, g)),
        (w.return = p),
        w);
  }
  function u(p, f, g, w) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== g.containerInfo ||
      f.stateNode.implementation !== g.implementation
      ? ((f = cc(g, p.mode, w)), (f.return = p), f)
      : ((f = i(f, g.children || [])), (f.return = p), f);
  }
  function c(p, f, g, w, S) {
    return f === null || f.tag !== 7
      ? ((f = vr(g, p.mode, w, S)), (f.return = p), f)
      : ((f = i(f, g)), (f.return = p), f);
  }
  function h(p, f, g) {
    if ((typeof f == 'string' && f !== '') || typeof f == 'number')
      return (f = uc('' + f, p.mode, g)), (f.return = p), f;
    if (typeof f == 'object' && f !== null) {
      switch (f.$$typeof) {
        case Ro:
          return (
            (g = ha(f.type, f.key, f.props, null, p.mode, g)),
            (g.ref = Qi(p, null, f)),
            (g.return = p),
            g
          );
        case Vr:
          return (f = cc(f, p.mode, g)), (f.return = p), f;
        case wn:
          var w = f._init;
          return h(p, w(f._payload), g);
      }
      if (es(f) || Hi(f)) return (f = vr(f, p.mode, g, null)), (f.return = p), f;
      jo(p, f);
    }
    return null;
  }
  function d(p, f, g, w) {
    var S = f !== null ? f.key : null;
    if ((typeof g == 'string' && g !== '') || typeof g == 'number')
      return S !== null ? null : a(p, f, '' + g, w);
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case Ro:
          return g.key === S ? l(p, f, g, w) : null;
        case Vr:
          return g.key === S ? u(p, f, g, w) : null;
        case wn:
          return (S = g._init), d(p, f, S(g._payload), w);
      }
      if (es(g) || Hi(g)) return S !== null ? null : c(p, f, g, w, null);
      jo(p, g);
    }
    return null;
  }
  function m(p, f, g, w, S) {
    if ((typeof w == 'string' && w !== '') || typeof w == 'number')
      return (p = p.get(g) || null), a(f, p, '' + w, S);
    if (typeof w == 'object' && w !== null) {
      switch (w.$$typeof) {
        case Ro:
          return (p = p.get(w.key === null ? g : w.key) || null), l(f, p, w, S);
        case Vr:
          return (p = p.get(w.key === null ? g : w.key) || null), u(f, p, w, S);
        case wn:
          var k = w._init;
          return m(p, f, g, k(w._payload), S);
      }
      if (es(w) || Hi(w)) return (p = p.get(g) || null), c(f, p, w, S, null);
      jo(f, w);
    }
    return null;
  }
  function y(p, f, g, w) {
    for (var S = null, k = null, C = f, A = (f = 0), V = null; C !== null && A < g.length; A++) {
      C.index > A ? ((V = C), (C = null)) : (V = C.sibling);
      var x = d(p, C, g[A], w);
      if (x === null) {
        C === null && (C = V);
        break;
      }
      t && C && x.alternate === null && e(p, C),
        (f = s(x, f, A)),
        k === null ? (S = x) : (k.sibling = x),
        (k = x),
        (C = V);
    }
    if (A === g.length) return n(p, C), se && or(p, A), S;
    if (C === null) {
      for (; A < g.length; A++)
        (C = h(p, g[A], w)),
          C !== null && ((f = s(C, f, A)), k === null ? (S = C) : (k.sibling = C), (k = C));
      return se && or(p, A), S;
    }
    for (C = r(p, C); A < g.length; A++)
      (V = m(C, p, A, g[A], w)),
        V !== null &&
          (t && V.alternate !== null && C.delete(V.key === null ? A : V.key),
          (f = s(V, f, A)),
          k === null ? (S = V) : (k.sibling = V),
          (k = V));
    return (
      t &&
        C.forEach(function (te) {
          return e(p, te);
        }),
      se && or(p, A),
      S
    );
  }
  function v(p, f, g, w) {
    var S = Hi(g);
    if (typeof S != 'function') throw Error(_(150));
    if (((g = S.call(g)), g == null)) throw Error(_(151));
    for (
      var k = (S = null), C = f, A = (f = 0), V = null, x = g.next();
      C !== null && !x.done;
      A++, x = g.next()
    ) {
      C.index > A ? ((V = C), (C = null)) : (V = C.sibling);
      var te = d(p, C, x.value, w);
      if (te === null) {
        C === null && (C = V);
        break;
      }
      t && C && te.alternate === null && e(p, C),
        (f = s(te, f, A)),
        k === null ? (S = te) : (k.sibling = te),
        (k = te),
        (C = V);
    }
    if (x.done) return n(p, C), se && or(p, A), S;
    if (C === null) {
      for (; !x.done; A++, x = g.next())
        (x = h(p, x.value, w)),
          x !== null && ((f = s(x, f, A)), k === null ? (S = x) : (k.sibling = x), (k = x));
      return se && or(p, A), S;
    }
    for (C = r(p, C); !x.done; A++, x = g.next())
      (x = m(C, p, A, x.value, w)),
        x !== null &&
          (t && x.alternate !== null && C.delete(x.key === null ? A : x.key),
          (f = s(x, f, A)),
          k === null ? (S = x) : (k.sibling = x),
          (k = x));
    return (
      t &&
        C.forEach(function (be) {
          return e(p, be);
        }),
      se && or(p, A),
      S
    );
  }
  function E(p, f, g, w) {
    if (
      (typeof g == 'object' &&
        g !== null &&
        g.type === zr &&
        g.key === null &&
        (g = g.props.children),
      typeof g == 'object' && g !== null)
    ) {
      switch (g.$$typeof) {
        case Ro:
          e: {
            for (var S = g.key, k = f; k !== null; ) {
              if (k.key === S) {
                if (((S = g.type), S === zr)) {
                  if (k.tag === 7) {
                    n(p, k.sibling), (f = i(k, g.props.children)), (f.return = p), (p = f);
                    break e;
                  }
                } else if (
                  k.elementType === S ||
                  (typeof S == 'object' && S !== null && S.$$typeof === wn && vm(S) === k.type)
                ) {
                  n(p, k.sibling),
                    (f = i(k, g.props)),
                    (f.ref = Qi(p, k, g)),
                    (f.return = p),
                    (p = f);
                  break e;
                }
                n(p, k);
                break;
              } else e(p, k);
              k = k.sibling;
            }
            g.type === zr
              ? ((f = vr(g.props.children, p.mode, w, g.key)), (f.return = p), (p = f))
              : ((w = ha(g.type, g.key, g.props, null, p.mode, w)),
                (w.ref = Qi(p, f, g)),
                (w.return = p),
                (p = w));
          }
          return o(p);
        case Vr:
          e: {
            for (k = g.key; f !== null; ) {
              if (f.key === k)
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
            (f = cc(g, p.mode, w)), (f.return = p), (p = f);
          }
          return o(p);
        case wn:
          return (k = g._init), E(p, f, k(g._payload), w);
      }
      if (es(g)) return y(p, f, g, w);
      if (Hi(g)) return v(p, f, g, w);
      jo(p, g);
    }
    return (typeof g == 'string' && g !== '') || typeof g == 'number'
      ? ((g = '' + g),
        f !== null && f.tag === 6
          ? (n(p, f.sibling), (f = i(f, g)), (f.return = p), (p = f))
          : (n(p, f), (f = uc(g, p.mode, w)), (f.return = p), (p = f)),
        o(p))
      : n(p, f);
  }
  return E;
}
var wi = Wv(!0),
  qv = Wv(!1),
  so = {},
  Bt = Zn(so),
  $s = Zn(so),
  Ls = Zn(so);
function dr(t) {
  if (t === so) throw Error(_(174));
  return t;
}
function Zd(t, e) {
  switch ((ee(Ls, e), ee($s, t), ee(Bt, so), (t = e.nodeType), t)) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : Zc(null, '');
      break;
    default:
      (t = t === 8 ? e.parentNode : e),
        (e = t.namespaceURI || null),
        (t = t.tagName),
        (e = Zc(e, t));
  }
  re(Bt), ee(Bt, e);
}
function Ei() {
  re(Bt), re($s), re(Ls);
}
function Gv(t) {
  dr(Ls.current);
  var e = dr(Bt.current),
    n = Zc(e, t.type);
  e !== n && (ee($s, t), ee(Bt, n));
}
function ef(t) {
  $s.current === t && (re(Bt), re($s));
}
var ae = Zn(0);
function Ua(t) {
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
var rc = [];
function tf() {
  for (var t = 0; t < rc.length; t++) rc[t]._workInProgressVersionPrimary = null;
  rc.length = 0;
}
var oa = mn.ReactCurrentDispatcher,
  ic = mn.ReactCurrentBatchConfig,
  Cr = 0,
  le = null,
  we = null,
  ke = null,
  Fa = !1,
  ds = !1,
  Ms = 0,
  Y_ = 0;
function Ue() {
  throw Error(_(321));
}
function nf(t, e) {
  if (e === null) return !1;
  for (var n = 0; n < e.length && n < t.length; n++) if (!Mt(t[n], e[n])) return !1;
  return !0;
}
function rf(t, e, n, r, i, s) {
  if (
    ((Cr = s),
    (le = e),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.lanes = 0),
    (oa.current = t === null || t.memoizedState === null ? tT : nT),
    (t = n(r, i)),
    ds)
  ) {
    s = 0;
    do {
      if (((ds = !1), (Ms = 0), 25 <= s)) throw Error(_(301));
      (s += 1), (ke = we = null), (e.updateQueue = null), (oa.current = rT), (t = n(r, i));
    } while (ds);
  }
  if (
    ((oa.current = ja),
    (e = we !== null && we.next !== null),
    (Cr = 0),
    (ke = we = le = null),
    (Fa = !1),
    e)
  )
    throw Error(_(300));
  return t;
}
function sf() {
  var t = Ms !== 0;
  return (Ms = 0), t;
}
function Ut() {
  var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ke === null ? (le.memoizedState = ke = t) : (ke = ke.next = t), ke;
}
function At() {
  if (we === null) {
    var t = le.alternate;
    t = t !== null ? t.memoizedState : null;
  } else t = we.next;
  var e = ke === null ? le.memoizedState : ke.next;
  if (e !== null) (ke = e), (we = t);
  else {
    if (t === null) throw Error(_(310));
    (we = t),
      (t = {
        memoizedState: we.memoizedState,
        baseState: we.baseState,
        baseQueue: we.baseQueue,
        queue: we.queue,
        next: null
      }),
      ke === null ? (le.memoizedState = ke = t) : (ke = ke.next = t);
  }
  return ke;
}
function bs(t, e) {
  return typeof e == 'function' ? e(t) : e;
}
function sc(t) {
  var e = At(),
    n = e.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = t;
  var r = we,
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
      if ((Cr & c) === c)
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
        l === null ? ((a = l = h), (o = r)) : (l = l.next = h), (le.lanes |= c), (Ar |= c);
      }
      u = u.next;
    } while (u !== null && u !== s);
    l === null ? (o = r) : (l.next = a),
      Mt(r, e.memoizedState) || (it = !0),
      (e.memoizedState = r),
      (e.baseState = o),
      (e.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((t = n.interleaved), t !== null)) {
    i = t;
    do (s = i.lane), (le.lanes |= s), (Ar |= s), (i = i.next);
    while (i !== t);
  } else i === null && (n.lanes = 0);
  return [e.memoizedState, n.dispatch];
}
function oc(t) {
  var e = At(),
    n = e.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = t;
  var r = n.dispatch,
    i = n.pending,
    s = e.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (s = t(s, o.action)), (o = o.next);
    while (o !== i);
    Mt(s, e.memoizedState) || (it = !0),
      (e.memoizedState = s),
      e.baseQueue === null && (e.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function Qv() {}
function Xv(t, e) {
  var n = le,
    r = At(),
    i = e(),
    s = !Mt(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (it = !0)),
    (r = r.queue),
    of(Zv.bind(null, n, r, t), [t]),
    r.getSnapshot !== e || s || (ke !== null && ke.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), Us(9, Jv.bind(null, n, r, i, e), void 0, null), Ce === null))
      throw Error(_(349));
    Cr & 30 || Yv(n, e, i);
  }
  return i;
}
function Yv(t, e, n) {
  (t.flags |= 16384),
    (t = { getSnapshot: e, value: n }),
    (e = le.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }), (le.updateQueue = e), (e.stores = [t]))
      : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
}
function Jv(t, e, n, r) {
  (e.value = n), (e.getSnapshot = r), e0(e) && t0(t);
}
function Zv(t, e, n) {
  return n(function () {
    e0(e) && t0(t);
  });
}
function e0(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !Mt(t, n);
  } catch {
    return !0;
  }
}
function t0(t) {
  var e = an(t, 1);
  e !== null && Lt(e, t, 1, -1);
}
function wm(t) {
  var e = Ut();
  return (
    typeof t == 'function' && (t = t()),
    (e.memoizedState = e.baseState = t),
    (t = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: bs,
      lastRenderedState: t
    }),
    (e.queue = t),
    (t = t.dispatch = eT.bind(null, le, t)),
    [e.memoizedState, t]
  );
}
function Us(t, e, n, r) {
  return (
    (t = { tag: t, create: e, destroy: n, deps: r, next: null }),
    (e = le.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (le.updateQueue = e),
        (e.lastEffect = t.next = t))
      : ((n = e.lastEffect),
        n === null
          ? (e.lastEffect = t.next = t)
          : ((r = n.next), (n.next = t), (t.next = r), (e.lastEffect = t))),
    t
  );
}
function n0() {
  return At().memoizedState;
}
function aa(t, e, n, r) {
  var i = Ut();
  (le.flags |= t), (i.memoizedState = Us(1 | e, n, void 0, r === void 0 ? null : r));
}
function Rl(t, e, n, r) {
  var i = At();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (we !== null) {
    var o = we.memoizedState;
    if (((s = o.destroy), r !== null && nf(r, o.deps))) {
      i.memoizedState = Us(e, n, s, r);
      return;
    }
  }
  (le.flags |= t), (i.memoizedState = Us(1 | e, n, s, r));
}
function Em(t, e) {
  return aa(8390656, 8, t, e);
}
function of(t, e) {
  return Rl(2048, 8, t, e);
}
function r0(t, e) {
  return Rl(4, 2, t, e);
}
function i0(t, e) {
  return Rl(4, 4, t, e);
}
function s0(t, e) {
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
function o0(t, e, n) {
  return (n = n != null ? n.concat([t]) : null), Rl(4, 4, s0.bind(null, e, t), n);
}
function af() {}
function a0(t, e) {
  var n = At();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && nf(e, r[1]) ? r[0] : ((n.memoizedState = [t, e]), t);
}
function l0(t, e) {
  var n = At();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && nf(e, r[1])
    ? r[0]
    : ((t = t()), (n.memoizedState = [t, e]), t);
}
function u0(t, e, n) {
  return Cr & 21
    ? (Mt(n, e) || ((n = dv()), (le.lanes |= n), (Ar |= n), (t.baseState = !0)), e)
    : (t.baseState && ((t.baseState = !1), (it = !0)), (t.memoizedState = n));
}
function J_(t, e) {
  var n = X;
  (X = n !== 0 && 4 > n ? n : 4), t(!0);
  var r = ic.transition;
  ic.transition = {};
  try {
    t(!1), e();
  } finally {
    (X = n), (ic.transition = r);
  }
}
function c0() {
  return At().memoizedState;
}
function Z_(t, e, n) {
  var r = Fn(t);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), h0(t)))
    d0(e, n);
  else if (((n = zv(t, e, n, r)), n !== null)) {
    var i = Ye();
    Lt(n, t, r, i), f0(n, e, r);
  }
}
function eT(t, e, n) {
  var r = Fn(t),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (h0(t)) d0(e, i);
  else {
    var s = t.alternate;
    if (t.lanes === 0 && (s === null || s.lanes === 0) && ((s = e.lastRenderedReducer), s !== null))
      try {
        var o = e.lastRenderedState,
          a = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), Mt(a, o))) {
          var l = e.interleaved;
          l === null ? ((i.next = i), Yd(e)) : ((i.next = l.next), (l.next = i)),
            (e.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = zv(t, e, i, r)), n !== null && ((i = Ye()), Lt(n, t, r, i), f0(n, e, r));
  }
}
function h0(t) {
  var e = t.alternate;
  return t === le || (e !== null && e === le);
}
function d0(t, e) {
  ds = Fa = !0;
  var n = t.pending;
  n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)), (t.pending = e);
}
function f0(t, e, n) {
  if (n & 4194240) {
    var r = e.lanes;
    (r &= t.pendingLanes), (n |= r), (e.lanes = n), bd(t, n);
  }
}
var ja = {
    readContext: Ct,
    useCallback: Ue,
    useContext: Ue,
    useEffect: Ue,
    useImperativeHandle: Ue,
    useInsertionEffect: Ue,
    useLayoutEffect: Ue,
    useMemo: Ue,
    useReducer: Ue,
    useRef: Ue,
    useState: Ue,
    useDebugValue: Ue,
    useDeferredValue: Ue,
    useTransition: Ue,
    useMutableSource: Ue,
    useSyncExternalStore: Ue,
    useId: Ue,
    unstable_isNewReconciler: !1
  },
  tT = {
    readContext: Ct,
    useCallback: function (t, e) {
      return (Ut().memoizedState = [t, e === void 0 ? null : e]), t;
    },
    useContext: Ct,
    useEffect: Em,
    useImperativeHandle: function (t, e, n) {
      return (n = n != null ? n.concat([t]) : null), aa(4194308, 4, s0.bind(null, e, t), n);
    },
    useLayoutEffect: function (t, e) {
      return aa(4194308, 4, t, e);
    },
    useInsertionEffect: function (t, e) {
      return aa(4, 2, t, e);
    },
    useMemo: function (t, e) {
      var n = Ut();
      return (e = e === void 0 ? null : e), (t = t()), (n.memoizedState = [t, e]), t;
    },
    useReducer: function (t, e, n) {
      var r = Ut();
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
        (t = t.dispatch = Z_.bind(null, le, t)),
        [r.memoizedState, t]
      );
    },
    useRef: function (t) {
      var e = Ut();
      return (t = { current: t }), (e.memoizedState = t);
    },
    useState: wm,
    useDebugValue: af,
    useDeferredValue: function (t) {
      return (Ut().memoizedState = t);
    },
    useTransition: function () {
      var t = wm(!1),
        e = t[0];
      return (t = J_.bind(null, t[1])), (Ut().memoizedState = t), [e, t];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (t, e, n) {
      var r = le,
        i = Ut();
      if (se) {
        if (n === void 0) throw Error(_(407));
        n = n();
      } else {
        if (((n = e()), Ce === null)) throw Error(_(349));
        Cr & 30 || Yv(r, e, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: e };
      return (
        (i.queue = s),
        Em(Zv.bind(null, r, s, t), [t]),
        (r.flags |= 2048),
        Us(9, Jv.bind(null, r, s, n, e), void 0, null),
        n
      );
    },
    useId: function () {
      var t = Ut(),
        e = Ce.identifierPrefix;
      if (se) {
        var n = Zt,
          r = Jt;
        (n = (r & ~(1 << (32 - $t(r) - 1))).toString(32) + n),
          (e = ':' + e + 'R' + n),
          (n = Ms++),
          0 < n && (e += 'H' + n.toString(32)),
          (e += ':');
      } else (n = Y_++), (e = ':' + e + 'r' + n.toString(32) + ':');
      return (t.memoizedState = e);
    },
    unstable_isNewReconciler: !1
  },
  nT = {
    readContext: Ct,
    useCallback: a0,
    useContext: Ct,
    useEffect: of,
    useImperativeHandle: o0,
    useInsertionEffect: r0,
    useLayoutEffect: i0,
    useMemo: l0,
    useReducer: sc,
    useRef: n0,
    useState: function () {
      return sc(bs);
    },
    useDebugValue: af,
    useDeferredValue: function (t) {
      var e = At();
      return u0(e, we.memoizedState, t);
    },
    useTransition: function () {
      var t = sc(bs)[0],
        e = At().memoizedState;
      return [t, e];
    },
    useMutableSource: Qv,
    useSyncExternalStore: Xv,
    useId: c0,
    unstable_isNewReconciler: !1
  },
  rT = {
    readContext: Ct,
    useCallback: a0,
    useContext: Ct,
    useEffect: of,
    useImperativeHandle: o0,
    useInsertionEffect: r0,
    useLayoutEffect: i0,
    useMemo: l0,
    useReducer: oc,
    useRef: n0,
    useState: function () {
      return oc(bs);
    },
    useDebugValue: af,
    useDeferredValue: function (t) {
      var e = At();
      return we === null ? (e.memoizedState = t) : u0(e, we.memoizedState, t);
    },
    useTransition: function () {
      var t = oc(bs)[0],
        e = At().memoizedState;
      return [t, e];
    },
    useMutableSource: Qv,
    useSyncExternalStore: Xv,
    useId: c0,
    unstable_isNewReconciler: !1
  };
function Si(t, e) {
  try {
    var n = '',
      r = e;
    do (n += OS(r)), (r = r.return);
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
function ac(t, e, n) {
  return { value: t, source: null, stack: n ?? null, digest: e ?? null };
}
function _h(t, e) {
  try {
    console.error(e.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var iT = typeof WeakMap == 'function' ? WeakMap : Map;
function p0(t, e, n) {
  (n = rn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = e.value;
  return (
    (n.callback = function () {
      za || ((za = !0), (xh = r)), _h(t, e);
    }),
    n
  );
}
function m0(t, e, n) {
  (n = rn(-1, n)), (n.tag = 3);
  var r = t.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var i = e.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        _h(t, e);
      });
  }
  var s = t.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == 'function' &&
      (n.callback = function () {
        _h(t, e), typeof r != 'function' && (Un === null ? (Un = new Set([this])) : Un.add(this));
        var o = e.stack;
        this.componentDidCatch(e.value, { componentStack: o !== null ? o : '' });
      }),
    n
  );
}
function Sm(t, e, n) {
  var r = t.pingCache;
  if (r === null) {
    r = t.pingCache = new iT();
    var i = new Set();
    r.set(e, i);
  } else (i = r.get(e)), i === void 0 && ((i = new Set()), r.set(e, i));
  i.has(n) || (i.add(n), (t = vT.bind(null, t, e, n)), e.then(t, t));
}
function _m(t) {
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
function Tm(t, e, n, r, i) {
  return t.mode & 1
    ? ((t.flags |= 65536), (t.lanes = i), t)
    : (t === e
        ? (t.flags |= 65536)
        : ((t.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null ? (n.tag = 17) : ((e = rn(-1, 1)), (e.tag = 2), bn(n, e, 1))),
          (n.lanes |= 1)),
      t);
}
var sT = mn.ReactCurrentOwner,
  it = !1;
function Qe(t, e, n, r) {
  e.child = t === null ? qv(e, null, n, r) : wi(e, t.child, n, r);
}
function Im(t, e, n, r, i) {
  n = n.render;
  var s = e.ref;
  return (
    si(e, i),
    (r = rf(t, e, n, r, s, i)),
    (n = sf()),
    t !== null && !it
      ? ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~i), ln(t, e, i))
      : (se && n && Kd(e), (e.flags |= 1), Qe(t, e, r, i), e.child)
  );
}
function km(t, e, n, r, i) {
  if (t === null) {
    var s = n.type;
    return typeof s == 'function' &&
      !mf(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((e.tag = 15), (e.type = s), g0(t, e, s, r, i))
      : ((t = ha(n.type, null, r, e, e.mode, i)), (t.ref = e.ref), (t.return = e), (e.child = t));
  }
  if (((s = t.child), !(t.lanes & i))) {
    var o = s.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : Ps), n(o, r) && t.ref === e.ref))
      return ln(t, e, i);
  }
  return (e.flags |= 1), (t = jn(s, r)), (t.ref = e.ref), (t.return = e), (e.child = t);
}
function g0(t, e, n, r, i) {
  if (t !== null) {
    var s = t.memoizedProps;
    if (Ps(s, r) && t.ref === e.ref)
      if (((it = !1), (e.pendingProps = r = s), (t.lanes & i) !== 0)) t.flags & 131072 && (it = !0);
      else return (e.lanes = t.lanes), ln(t, e, i);
  }
  return Th(t, e, n, r, i);
}
function y0(t, e, n) {
  var r = e.pendingProps,
    i = r.children,
    s = t !== null ? t.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(e.mode & 1))
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ee(Jr, ht),
        (ht |= n);
    else {
      if (!(n & 1073741824))
        return (
          (t = s !== null ? s.baseLanes | n : n),
          (e.lanes = e.childLanes = 1073741824),
          (e.memoizedState = { baseLanes: t, cachePool: null, transitions: null }),
          (e.updateQueue = null),
          ee(Jr, ht),
          (ht |= t),
          null
        );
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        ee(Jr, ht),
        (ht |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (e.memoizedState = null)) : (r = n), ee(Jr, ht), (ht |= r);
  return Qe(t, e, i, n), e.child;
}
function v0(t, e) {
  var n = e.ref;
  ((t === null && n !== null) || (t !== null && t.ref !== n)) &&
    ((e.flags |= 512), (e.flags |= 2097152));
}
function Th(t, e, n, r, i) {
  var s = ot(n) ? Ir : We.current;
  return (
    (s = yi(e, s)),
    si(e, i),
    (n = rf(t, e, n, r, s, i)),
    (r = sf()),
    t !== null && !it
      ? ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~i), ln(t, e, i))
      : (se && r && Kd(e), (e.flags |= 1), Qe(t, e, n, i), e.child)
  );
}
function Cm(t, e, n, r, i) {
  if (ot(n)) {
    var s = !0;
    xa(e);
  } else s = !1;
  if ((si(e, i), e.stateNode === null)) la(t, e), Kv(e, n, r), Sh(e, n, r, i), (r = !0);
  else if (t === null) {
    var o = e.stateNode,
      a = e.memoizedProps;
    o.props = a;
    var l = o.context,
      u = n.contextType;
    typeof u == 'object' && u !== null
      ? (u = Ct(u))
      : ((u = ot(n) ? Ir : We.current), (u = yi(e, u)));
    var c = n.getDerivedStateFromProps,
      h = typeof c == 'function' || typeof o.getSnapshotBeforeUpdate == 'function';
    h ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((a !== r || l !== u) && ym(e, o, r, u)),
      (En = !1);
    var d = e.memoizedState;
    (o.state = d),
      ba(e, r, o, i),
      (l = e.memoizedState),
      a !== r || d !== l || st.current || En
        ? (typeof c == 'function' && (Eh(e, n, c, r), (l = e.memoizedState)),
          (a = En || gm(e, n, a, r, d, l, u))
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
      Bv(t, e),
      (a = e.memoizedProps),
      (u = e.type === e.elementType ? a : Pt(e.type, a)),
      (o.props = u),
      (h = e.pendingProps),
      (d = o.context),
      (l = n.contextType),
      typeof l == 'object' && l !== null
        ? (l = Ct(l))
        : ((l = ot(n) ? Ir : We.current), (l = yi(e, l)));
    var m = n.getDerivedStateFromProps;
    (c = typeof m == 'function' || typeof o.getSnapshotBeforeUpdate == 'function') ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((a !== h || d !== l) && ym(e, o, r, l)),
      (En = !1),
      (d = e.memoizedState),
      (o.state = d),
      ba(e, r, o, i);
    var y = e.memoizedState;
    a !== h || d !== y || st.current || En
      ? (typeof m == 'function' && (Eh(e, n, m, r), (y = e.memoizedState)),
        (u = En || gm(e, n, u, r, d, y, l) || !1)
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
  return Ih(t, e, n, r, s, i);
}
function Ih(t, e, n, r, i, s) {
  v0(t, e);
  var o = (e.flags & 128) !== 0;
  if (!r && !o) return i && hm(e, n, !1), ln(t, e, s);
  (r = e.stateNode), (sT.current = e);
  var a = o && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (e.flags |= 1),
    t !== null && o
      ? ((e.child = wi(e, t.child, null, s)), (e.child = wi(e, null, a, s)))
      : Qe(t, e, a, s),
    (e.memoizedState = r.state),
    i && hm(e, n, !0),
    e.child
  );
}
function w0(t) {
  var e = t.stateNode;
  e.pendingContext
    ? cm(t, e.pendingContext, e.pendingContext !== e.context)
    : e.context && cm(t, e.context, !1),
    Zd(t, e.containerInfo);
}
function Am(t, e, n, r, i) {
  return vi(), qd(i), (e.flags |= 256), Qe(t, e, n, r), e.child;
}
var kh = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ch(t) {
  return { baseLanes: t, cachePool: null, transitions: null };
}
function E0(t, e, n) {
  var r = e.pendingProps,
    i = ae.current,
    s = !1,
    o = (e.flags & 128) !== 0,
    a;
  if (
    ((a = o) || (a = t !== null && t.memoizedState === null ? !1 : (i & 2) !== 0),
    a ? ((s = !0), (e.flags &= -129)) : (t === null || t.memoizedState !== null) && (i |= 1),
    ee(ae, i & 1),
    t === null)
  )
    return (
      vh(e),
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
                : (s = xl(o, r, 0, null)),
              (t = vr(t, r, n, null)),
              (s.return = e),
              (t.return = e),
              (s.sibling = t),
              (e.child = s),
              (e.child.memoizedState = Ch(n)),
              (e.memoizedState = kh),
              t)
            : lf(e, o))
    );
  if (((i = t.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return oT(t, e, o, r, a, i, n);
  if (s) {
    (s = r.fallback), (o = e.mode), (i = t.child), (a = i.sibling);
    var l = { mode: 'hidden', children: r.children };
    return (
      !(o & 1) && e.child !== i
        ? ((r = e.child), (r.childLanes = 0), (r.pendingProps = l), (e.deletions = null))
        : ((r = jn(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (s = jn(a, s)) : ((s = vr(s, o, n, null)), (s.flags |= 2)),
      (s.return = e),
      (r.return = e),
      (r.sibling = s),
      (e.child = r),
      (r = s),
      (s = e.child),
      (o = t.child.memoizedState),
      (o =
        o === null
          ? Ch(n)
          : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }),
      (s.memoizedState = o),
      (s.childLanes = t.childLanes & ~n),
      (e.memoizedState = kh),
      r
    );
  }
  return (
    (s = t.child),
    (t = s.sibling),
    (r = jn(s, { mode: 'visible', children: r.children })),
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
function lf(t, e) {
  return (e = xl({ mode: 'visible', children: e }, t.mode, 0, null)), (e.return = t), (t.child = e);
}
function Vo(t, e, n, r) {
  return (
    r !== null && qd(r),
    wi(e, t.child, null, n),
    (t = lf(e, e.pendingProps.children)),
    (t.flags |= 2),
    (e.memoizedState = null),
    t
  );
}
function oT(t, e, n, r, i, s, o) {
  if (n)
    return e.flags & 256
      ? ((e.flags &= -257), (r = ac(Error(_(422)))), Vo(t, e, o, r))
      : e.memoizedState !== null
      ? ((e.child = t.child), (e.flags |= 128), null)
      : ((s = r.fallback),
        (i = e.mode),
        (r = xl({ mode: 'visible', children: r.children }, i, 0, null)),
        (s = vr(s, i, o, null)),
        (s.flags |= 2),
        (r.return = e),
        (s.return = e),
        (r.sibling = s),
        (e.child = r),
        e.mode & 1 && wi(e, t.child, null, o),
        (e.child.memoizedState = Ch(o)),
        (e.memoizedState = kh),
        s);
  if (!(e.mode & 1)) return Vo(t, e, o, null);
  if (i.data === '$!') {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (s = Error(_(419))), (r = ac(s, r, void 0)), Vo(t, e, o, r);
  }
  if (((a = (o & t.childLanes) !== 0), it || a)) {
    if (((r = Ce), r !== null)) {
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
        i !== 0 && i !== s.retryLane && ((s.retryLane = i), an(t, i), Lt(r, t, i, -1));
    }
    return pf(), (r = ac(Error(_(421)))), Vo(t, e, o, r);
  }
  return i.data === '$?'
    ? ((e.flags |= 128), (e.child = t.child), (e = wT.bind(null, t)), (i._reactRetry = e), null)
    : ((t = s.treeContext),
      (dt = Mn(i.nextSibling)),
      (pt = e),
      (se = !0),
      (xt = null),
      t !== null &&
        ((St[_t++] = Jt),
        (St[_t++] = Zt),
        (St[_t++] = kr),
        (Jt = t.id),
        (Zt = t.overflow),
        (kr = e)),
      (e = lf(e, r.children)),
      (e.flags |= 4096),
      e);
}
function Nm(t, e, n) {
  t.lanes |= e;
  var r = t.alternate;
  r !== null && (r.lanes |= e), wh(t.return, e, n);
}
function lc(t, e, n, r, i) {
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
function S0(t, e, n) {
  var r = e.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((Qe(t, e, r.children, n), (r = ae.current), r & 2)) (r = (r & 1) | 2), (e.flags |= 128);
  else {
    if (t !== null && t.flags & 128)
      e: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Nm(t, n, e);
        else if (t.tag === 19) Nm(t, n, e);
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
  if ((ee(ae, r), !(e.mode & 1))) e.memoizedState = null;
  else
    switch (i) {
      case 'forwards':
        for (n = e.child, i = null; n !== null; )
          (t = n.alternate), t !== null && Ua(t) === null && (i = n), (n = n.sibling);
        (n = i),
          n === null ? ((i = e.child), (e.child = null)) : ((i = n.sibling), (n.sibling = null)),
          lc(e, !1, i, n, s);
        break;
      case 'backwards':
        for (n = null, i = e.child, e.child = null; i !== null; ) {
          if (((t = i.alternate), t !== null && Ua(t) === null)) {
            e.child = i;
            break;
          }
          (t = i.sibling), (i.sibling = n), (n = i), (i = t);
        }
        lc(e, !0, n, null, s);
        break;
      case 'together':
        lc(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  return e.child;
}
function la(t, e) {
  !(e.mode & 1) && t !== null && ((t.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function ln(t, e, n) {
  if ((t !== null && (e.dependencies = t.dependencies), (Ar |= e.lanes), !(n & e.childLanes)))
    return null;
  if (t !== null && e.child !== t.child) throw Error(_(153));
  if (e.child !== null) {
    for (t = e.child, n = jn(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; )
      (t = t.sibling), (n = n.sibling = jn(t, t.pendingProps)), (n.return = e);
    n.sibling = null;
  }
  return e.child;
}
function aT(t, e, n) {
  switch (e.tag) {
    case 3:
      w0(e), vi();
      break;
    case 5:
      Gv(e);
      break;
    case 1:
      ot(e.type) && xa(e);
      break;
    case 4:
      Zd(e, e.stateNode.containerInfo);
      break;
    case 10:
      var r = e.type._context,
        i = e.memoizedProps.value;
      ee(La, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = e.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ee(ae, ae.current & 1), (e.flags |= 128), null)
          : n & e.child.childLanes
          ? E0(t, e, n)
          : (ee(ae, ae.current & 1), (t = ln(t, e, n)), t !== null ? t.sibling : null);
      ee(ae, ae.current & 1);
      break;
    case 19:
      if (((r = (n & e.childLanes) !== 0), t.flags & 128)) {
        if (r) return S0(t, e, n);
        e.flags |= 128;
      }
      if (
        ((i = e.memoizedState),
        i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        ee(ae, ae.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (e.lanes = 0), y0(t, e, n);
  }
  return ln(t, e, n);
}
var _0, Ah, T0, I0;
_0 = function (t, e) {
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
Ah = function () {};
T0 = function (t, e, n, r) {
  var i = t.memoizedProps;
  if (i !== r) {
    (t = e.stateNode), dr(Bt.current);
    var s = null;
    switch (n) {
      case 'input':
        (i = Qc(t, i)), (r = Qc(t, r)), (s = []);
        break;
      case 'select':
        (i = ue({}, i, { value: void 0 })), (r = ue({}, r, { value: void 0 })), (s = []);
        break;
      case 'textarea':
        (i = Jc(t, i)), (r = Jc(t, r)), (s = []);
        break;
      default:
        typeof i.onClick != 'function' && typeof r.onClick == 'function' && (t.onclick = Pa);
    }
    eh(n, r);
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
            (Ts.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
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
              (Ts.hasOwnProperty(u)
                ? (l != null && u === 'onScroll' && ne('scroll', t), s || a === l || (s = []))
                : (s = s || []).push(u, l));
    }
    n && (s = s || []).push('style', n);
    var u = s;
    (e.updateQueue = u) && (e.flags |= 4);
  }
};
I0 = function (t, e, n, r) {
  n !== r && (e.flags |= 4);
};
function Xi(t, e) {
  if (!se)
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
function Fe(t) {
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
function lT(t, e, n) {
  var r = e.pendingProps;
  switch ((Wd(e), e.tag)) {
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
      return Fe(e), null;
    case 1:
      return ot(e.type) && Oa(), Fe(e), null;
    case 3:
      return (
        (r = e.stateNode),
        Ei(),
        re(st),
        re(We),
        tf(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (t === null || t.child === null) &&
          (Fo(e)
            ? (e.flags |= 4)
            : t === null ||
              (t.memoizedState.isDehydrated && !(e.flags & 256)) ||
              ((e.flags |= 1024), xt !== null && (Lh(xt), (xt = null)))),
        Ah(t, e),
        Fe(e),
        null
      );
    case 5:
      ef(e);
      var i = dr(Ls.current);
      if (((n = e.type), t !== null && e.stateNode != null))
        T0(t, e, n, r, i), t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
      else {
        if (!r) {
          if (e.stateNode === null) throw Error(_(166));
          return Fe(e), null;
        }
        if (((t = dr(Bt.current)), Fo(e))) {
          (r = e.stateNode), (n = e.type);
          var s = e.memoizedProps;
          switch (((r[Ft] = e), (r[Ds] = s), (t = (e.mode & 1) !== 0), n)) {
            case 'dialog':
              ne('cancel', r), ne('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              ne('load', r);
              break;
            case 'video':
            case 'audio':
              for (i = 0; i < ns.length; i++) ne(ns[i], r);
              break;
            case 'source':
              ne('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              ne('error', r), ne('load', r);
              break;
            case 'details':
              ne('toggle', r);
              break;
            case 'input':
              bp(r, s), ne('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!s.multiple }), ne('invalid', r);
              break;
            case 'textarea':
              Fp(r, s), ne('invalid', r);
          }
          eh(n, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === 'children'
                ? typeof a == 'string'
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 && Uo(r.textContent, a, t),
                    (i = ['children', a]))
                  : typeof a == 'number' &&
                    r.textContent !== '' + a &&
                    (s.suppressHydrationWarning !== !0 && Uo(r.textContent, a, t),
                    (i = ['children', '' + a]))
                : Ts.hasOwnProperty(o) && a != null && o === 'onScroll' && ne('scroll', r);
            }
          switch (n) {
            case 'input':
              Po(r), Up(r, s, !0);
              break;
            case 'textarea':
              Po(r), jp(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof s.onClick == 'function' && (r.onclick = Pa);
          }
          (r = i), (e.updateQueue = r), r !== null && (e.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            t === 'http://www.w3.org/1999/xhtml' && (t = Yy(n)),
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
            (t[Ft] = e),
            (t[Ds] = r),
            _0(t, e, !1, !1),
            (e.stateNode = t);
          e: {
            switch (((o = th(n, r)), n)) {
              case 'dialog':
                ne('cancel', t), ne('close', t), (i = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                ne('load', t), (i = r);
                break;
              case 'video':
              case 'audio':
                for (i = 0; i < ns.length; i++) ne(ns[i], t);
                i = r;
                break;
              case 'source':
                ne('error', t), (i = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                ne('error', t), ne('load', t), (i = r);
                break;
              case 'details':
                ne('toggle', t), (i = r);
                break;
              case 'input':
                bp(t, r), (i = Qc(t, r)), ne('invalid', t);
                break;
              case 'option':
                i = r;
                break;
              case 'select':
                (t._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = ue({}, r, { value: void 0 })),
                  ne('invalid', t);
                break;
              case 'textarea':
                Fp(t, r), (i = Jc(t, r)), ne('invalid', t);
                break;
              default:
                i = r;
            }
            eh(n, i), (a = i);
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var l = a[s];
                s === 'style'
                  ? ev(t, l)
                  : s === 'dangerouslySetInnerHTML'
                  ? ((l = l ? l.__html : void 0), l != null && Jy(t, l))
                  : s === 'children'
                  ? typeof l == 'string'
                    ? (n !== 'textarea' || l !== '') && Is(t, l)
                    : typeof l == 'number' && Is(t, '' + l)
                  : s !== 'suppressContentEditableWarning' &&
                    s !== 'suppressHydrationWarning' &&
                    s !== 'autoFocus' &&
                    (Ts.hasOwnProperty(s)
                      ? l != null && s === 'onScroll' && ne('scroll', t)
                      : l != null && Od(t, s, l, o));
              }
            switch (n) {
              case 'input':
                Po(t), Up(t, r, !1);
                break;
              case 'textarea':
                Po(t), jp(t);
                break;
              case 'option':
                r.value != null && t.setAttribute('value', '' + Wn(r.value));
                break;
              case 'select':
                (t.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? ti(t, !!r.multiple, s, !1)
                    : r.defaultValue != null && ti(t, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == 'function' && (t.onclick = Pa);
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
      return Fe(e), null;
    case 6:
      if (t && e.stateNode != null) I0(t, e, t.memoizedProps, r);
      else {
        if (typeof r != 'string' && e.stateNode === null) throw Error(_(166));
        if (((n = dr(Ls.current)), dr(Bt.current), Fo(e))) {
          if (
            ((r = e.stateNode),
            (n = e.memoizedProps),
            (r[Ft] = e),
            (s = r.nodeValue !== n) && ((t = pt), t !== null))
          )
            switch (t.tag) {
              case 3:
                Uo(r.nodeValue, n, (t.mode & 1) !== 0);
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 &&
                  Uo(r.nodeValue, n, (t.mode & 1) !== 0);
            }
          s && (e.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ft] = e),
            (e.stateNode = r);
      }
      return Fe(e), null;
    case 13:
      if (
        (re(ae),
        (r = e.memoizedState),
        t === null || (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
      ) {
        if (se && dt !== null && e.mode & 1 && !(e.flags & 128))
          Vv(), vi(), (e.flags |= 98560), (s = !1);
        else if (((s = Fo(e)), r !== null && r.dehydrated !== null)) {
          if (t === null) {
            if (!s) throw Error(_(318));
            if (((s = e.memoizedState), (s = s !== null ? s.dehydrated : null), !s))
              throw Error(_(317));
            s[Ft] = e;
          } else vi(), !(e.flags & 128) && (e.memoizedState = null), (e.flags |= 4);
          Fe(e), (s = !1);
        } else xt !== null && (Lh(xt), (xt = null)), (s = !0);
        if (!s) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128
        ? ((e.lanes = n), e)
        : ((r = r !== null),
          r !== (t !== null && t.memoizedState !== null) &&
            r &&
            ((e.child.flags |= 8192),
            e.mode & 1 && (t === null || ae.current & 1 ? Se === 0 && (Se = 3) : pf())),
          e.updateQueue !== null && (e.flags |= 4),
          Fe(e),
          null);
    case 4:
      return Ei(), Ah(t, e), t === null && Os(e.stateNode.containerInfo), Fe(e), null;
    case 10:
      return Xd(e.type._context), Fe(e), null;
    case 17:
      return ot(e.type) && Oa(), Fe(e), null;
    case 19:
      if ((re(ae), (s = e.memoizedState), s === null)) return Fe(e), null;
      if (((r = (e.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) Xi(s, !1);
        else {
          if (Se !== 0 || (t !== null && t.flags & 128))
            for (t = e.child; t !== null; ) {
              if (((o = Ua(t)), o !== null)) {
                for (
                  e.flags |= 128,
                    Xi(s, !1),
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
                return ee(ae, (ae.current & 1) | 2), e.child;
              }
              t = t.sibling;
            }
          s.tail !== null &&
            pe() > _i &&
            ((e.flags |= 128), (r = !0), Xi(s, !1), (e.lanes = 4194304));
        }
      else {
        if (!r)
          if (((t = Ua(o)), t !== null)) {
            if (
              ((e.flags |= 128),
              (r = !0),
              (n = t.updateQueue),
              n !== null && ((e.updateQueue = n), (e.flags |= 4)),
              Xi(s, !0),
              s.tail === null && s.tailMode === 'hidden' && !o.alternate && !se)
            )
              return Fe(e), null;
          } else
            2 * pe() - s.renderingStartTime > _i &&
              n !== 1073741824 &&
              ((e.flags |= 128), (r = !0), Xi(s, !1), (e.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = e.child), (e.child = o))
          : ((n = s.last), n !== null ? (n.sibling = o) : (e.child = o), (s.last = o));
      }
      return s.tail !== null
        ? ((e = s.tail),
          (s.rendering = e),
          (s.tail = e.sibling),
          (s.renderingStartTime = pe()),
          (e.sibling = null),
          (n = ae.current),
          ee(ae, r ? (n & 1) | 2 : n & 1),
          e)
        : (Fe(e), null);
    case 22:
    case 23:
      return (
        ff(),
        (r = e.memoizedState !== null),
        t !== null && (t.memoizedState !== null) !== r && (e.flags |= 8192),
        r && e.mode & 1
          ? ht & 1073741824 && (Fe(e), e.subtreeFlags & 6 && (e.flags |= 8192))
          : Fe(e),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(_(156, e.tag));
}
function uT(t, e) {
  switch ((Wd(e), e.tag)) {
    case 1:
      return (
        ot(e.type) && Oa(), (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 3:
      return (
        Ei(),
        re(st),
        re(We),
        tf(),
        (t = e.flags),
        t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 5:
      return ef(e), null;
    case 13:
      if ((re(ae), (t = e.memoizedState), t !== null && t.dehydrated !== null)) {
        if (e.alternate === null) throw Error(_(340));
        vi();
      }
      return (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null;
    case 19:
      return re(ae), null;
    case 4:
      return Ei(), null;
    case 10:
      return Xd(e.type._context), null;
    case 22:
    case 23:
      return ff(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var zo = !1,
  ze = !1,
  cT = typeof WeakSet == 'function' ? WeakSet : Set,
  P = null;
function Yr(t, e) {
  var n = t.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        ce(t, e, r);
      }
    else n.current = null;
}
function Nh(t, e, n) {
  try {
    n();
  } catch (r) {
    ce(t, e, r);
  }
}
var Rm = !1;
function hT(t, e) {
  if (((hh = Aa), (t = Nv()), Hd(t))) {
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
  for (dh = { focusedElem: t, selectionRange: n }, Aa = !1, P = e; P !== null; )
    if (((e = P), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
      (t.return = e), (P = t);
    else
      for (; P !== null; ) {
        e = P;
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
                    E = y.memoizedState,
                    p = e.stateNode,
                    f = p.getSnapshotBeforeUpdate(e.elementType === e.type ? v : Pt(e.type, v), E);
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
                throw Error(_(163));
            }
        } catch (w) {
          ce(e, e.return, w);
        }
        if (((t = e.sibling), t !== null)) {
          (t.return = e.return), (P = t);
          break;
        }
        P = e.return;
      }
  return (y = Rm), (Rm = !1), y;
}
function fs(t, e, n) {
  var r = e.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & t) === t) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && Nh(e, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Pl(t, e) {
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
function Rh(t) {
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
function k0(t) {
  var e = t.alternate;
  e !== null && ((t.alternate = null), k0(e)),
    (t.child = null),
    (t.deletions = null),
    (t.sibling = null),
    t.tag === 5 &&
      ((e = t.stateNode),
      e !== null && (delete e[Ft], delete e[Ds], delete e[mh], delete e[q_], delete e[G_])),
    (t.stateNode = null),
    (t.return = null),
    (t.dependencies = null),
    (t.memoizedProps = null),
    (t.memoizedState = null),
    (t.pendingProps = null),
    (t.stateNode = null),
    (t.updateQueue = null);
}
function C0(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function Pm(t) {
  e: for (;;) {
    for (; t.sibling === null; ) {
      if (t.return === null || C0(t.return)) return null;
      t = t.return;
    }
    for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
      if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
      (t.child.return = t), (t = t.child);
    }
    if (!(t.flags & 2)) return t.stateNode;
  }
}
function Ph(t, e, n) {
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
          n != null || e.onclick !== null || (e.onclick = Pa));
  else if (r !== 4 && ((t = t.child), t !== null))
    for (Ph(t, e, n), t = t.sibling; t !== null; ) Ph(t, e, n), (t = t.sibling);
}
function Oh(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6) (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
  else if (r !== 4 && ((t = t.child), t !== null))
    for (Oh(t, e, n), t = t.sibling; t !== null; ) Oh(t, e, n), (t = t.sibling);
}
var Pe = null,
  Ot = !1;
function yn(t, e, n) {
  for (n = n.child; n !== null; ) A0(t, e, n), (n = n.sibling);
}
function A0(t, e, n) {
  if (zt && typeof zt.onCommitFiberUnmount == 'function')
    try {
      zt.onCommitFiberUnmount(_l, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ze || Yr(n, e);
    case 6:
      var r = Pe,
        i = Ot;
      (Pe = null),
        yn(t, e, n),
        (Pe = r),
        (Ot = i),
        Pe !== null &&
          (Ot
            ? ((t = Pe),
              (n = n.stateNode),
              t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n))
            : Pe.removeChild(n.stateNode));
      break;
    case 18:
      Pe !== null &&
        (Ot
          ? ((t = Pe),
            (n = n.stateNode),
            t.nodeType === 8 ? tc(t.parentNode, n) : t.nodeType === 1 && tc(t, n),
            Ns(t))
          : tc(Pe, n.stateNode));
      break;
    case 4:
      (r = Pe),
        (i = Ot),
        (Pe = n.stateNode.containerInfo),
        (Ot = !0),
        yn(t, e, n),
        (Pe = r),
        (Ot = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ze && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag), o !== void 0 && (s & 2 || s & 4) && Nh(n, e, o), (i = i.next);
        } while (i !== r);
      }
      yn(t, e, n);
      break;
    case 1:
      if (!ze && (Yr(n, e), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
        try {
          (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
        } catch (a) {
          ce(n, e, a);
        }
      yn(t, e, n);
      break;
    case 21:
      yn(t, e, n);
      break;
    case 22:
      n.mode & 1
        ? ((ze = (r = ze) || n.memoizedState !== null), yn(t, e, n), (ze = r))
        : yn(t, e, n);
      break;
    default:
      yn(t, e, n);
  }
}
function Om(t) {
  var e = t.updateQueue;
  if (e !== null) {
    t.updateQueue = null;
    var n = t.stateNode;
    n === null && (n = t.stateNode = new cT()),
      e.forEach(function (r) {
        var i = ET.bind(null, t, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Rt(t, e) {
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
              (Pe = a.stateNode), (Ot = !1);
              break e;
            case 3:
              (Pe = a.stateNode.containerInfo), (Ot = !0);
              break e;
            case 4:
              (Pe = a.stateNode.containerInfo), (Ot = !0);
              break e;
          }
          a = a.return;
        }
        if (Pe === null) throw Error(_(160));
        A0(s, o, i), (Pe = null), (Ot = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        ce(i, e, u);
      }
    }
  if (e.subtreeFlags & 12854) for (e = e.child; e !== null; ) N0(e, t), (e = e.sibling);
}
function N0(t, e) {
  var n = t.alternate,
    r = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Rt(e, t), bt(t), r & 4)) {
        try {
          fs(3, t, t.return), Pl(3, t);
        } catch (v) {
          ce(t, t.return, v);
        }
        try {
          fs(5, t, t.return);
        } catch (v) {
          ce(t, t.return, v);
        }
      }
      break;
    case 1:
      Rt(e, t), bt(t), r & 512 && n !== null && Yr(n, n.return);
      break;
    case 5:
      if ((Rt(e, t), bt(t), r & 512 && n !== null && Yr(n, n.return), t.flags & 32)) {
        var i = t.stateNode;
        try {
          Is(i, '');
        } catch (v) {
          ce(t, t.return, v);
        }
      }
      if (r & 4 && ((i = t.stateNode), i != null)) {
        var s = t.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          a = t.type,
          l = t.updateQueue;
        if (((t.updateQueue = null), l !== null))
          try {
            a === 'input' && s.type === 'radio' && s.name != null && Qy(i, s), th(a, o);
            var u = th(a, s);
            for (o = 0; o < l.length; o += 2) {
              var c = l[o],
                h = l[o + 1];
              c === 'style'
                ? ev(i, h)
                : c === 'dangerouslySetInnerHTML'
                ? Jy(i, h)
                : c === 'children'
                ? Is(i, h)
                : Od(i, c, h, u);
            }
            switch (a) {
              case 'input':
                Xc(i, s);
                break;
              case 'textarea':
                Xy(i, s);
                break;
              case 'select':
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var m = s.value;
                m != null
                  ? ti(i, !!s.multiple, m, !1)
                  : d !== !!s.multiple &&
                    (s.defaultValue != null
                      ? ti(i, !!s.multiple, s.defaultValue, !0)
                      : ti(i, !!s.multiple, s.multiple ? [] : '', !1));
            }
            i[Ds] = s;
          } catch (v) {
            ce(t, t.return, v);
          }
      }
      break;
    case 6:
      if ((Rt(e, t), bt(t), r & 4)) {
        if (t.stateNode === null) throw Error(_(162));
        (i = t.stateNode), (s = t.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (v) {
          ce(t, t.return, v);
        }
      }
      break;
    case 3:
      if ((Rt(e, t), bt(t), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          Ns(e.containerInfo);
        } catch (v) {
          ce(t, t.return, v);
        }
      break;
    case 4:
      Rt(e, t), bt(t);
      break;
    case 13:
      Rt(e, t),
        bt(t),
        (i = t.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s || (i.alternate !== null && i.alternate.memoizedState !== null) || (hf = pe())),
        r & 4 && Om(t);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        t.mode & 1 ? ((ze = (u = ze) || c), Rt(e, t), (ze = u)) : Rt(e, t),
        bt(t),
        r & 8192)
      ) {
        if (((u = t.memoizedState !== null), (t.stateNode.isHidden = u) && !c && t.mode & 1))
          for (P = t, c = t.child; c !== null; ) {
            for (h = P = c; P !== null; ) {
              switch (((d = P), (m = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  fs(4, d, d.return);
                  break;
                case 1:
                  Yr(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == 'function') {
                    (r = d), (n = d.return);
                    try {
                      (e = r),
                        (y.props = e.memoizedProps),
                        (y.state = e.memoizedState),
                        y.componentWillUnmount();
                    } catch (v) {
                      ce(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Yr(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Dm(h);
                    continue;
                  }
              }
              m !== null ? ((m.return = d), (P = m)) : Dm(h);
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
                      (a.style.display = Zy('display', o)));
              } catch (v) {
                ce(t, t.return, v);
              }
            }
          } else if (h.tag === 6) {
            if (c === null)
              try {
                h.stateNode.nodeValue = u ? '' : h.memoizedProps;
              } catch (v) {
                ce(t, t.return, v);
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
      Rt(e, t), bt(t), r & 4 && Om(t);
      break;
    case 21:
      break;
    default:
      Rt(e, t), bt(t);
  }
}
function bt(t) {
  var e = t.flags;
  if (e & 2) {
    try {
      e: {
        for (var n = t.return; n !== null; ) {
          if (C0(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(_(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Is(i, ''), (r.flags &= -33));
          var s = Pm(t);
          Oh(t, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = Pm(t);
          Ph(t, a, o);
          break;
        default:
          throw Error(_(161));
      }
    } catch (l) {
      ce(t, t.return, l);
    }
    t.flags &= -3;
  }
  e & 4096 && (t.flags &= -4097);
}
function dT(t, e, n) {
  (P = t), R0(t);
}
function R0(t, e, n) {
  for (var r = (t.mode & 1) !== 0; P !== null; ) {
    var i = P,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || zo;
      if (!o) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || ze;
        a = zo;
        var u = ze;
        if (((zo = o), (ze = l) && !u))
          for (P = i; P !== null; )
            (o = P),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? $m(i)
                : l !== null
                ? ((l.return = o), (P = l))
                : $m(i);
        for (; s !== null; ) (P = s), R0(s), (s = s.sibling);
        (P = i), (zo = a), (ze = u);
      }
      xm(t);
    } else i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (P = s)) : xm(t);
  }
}
function xm(t) {
  for (; P !== null; ) {
    var e = P;
    if (e.flags & 8772) {
      var n = e.alternate;
      try {
        if (e.flags & 8772)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              ze || Pl(5, e);
              break;
            case 1:
              var r = e.stateNode;
              if (e.flags & 4 && !ze)
                if (n === null) r.componentDidMount();
                else {
                  var i = e.elementType === e.type ? n.memoizedProps : Pt(e.type, n.memoizedProps);
                  r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var s = e.updateQueue;
              s !== null && mm(e, s, r);
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
                mm(e, o, n);
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
                    h !== null && Ns(h);
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
              throw Error(_(163));
          }
        ze || (e.flags & 512 && Rh(e));
      } catch (d) {
        ce(e, e.return, d);
      }
    }
    if (e === t) {
      P = null;
      break;
    }
    if (((n = e.sibling), n !== null)) {
      (n.return = e.return), (P = n);
      break;
    }
    P = e.return;
  }
}
function Dm(t) {
  for (; P !== null; ) {
    var e = P;
    if (e === t) {
      P = null;
      break;
    }
    var n = e.sibling;
    if (n !== null) {
      (n.return = e.return), (P = n);
      break;
    }
    P = e.return;
  }
}
function $m(t) {
  for (; P !== null; ) {
    var e = P;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var n = e.return;
          try {
            Pl(4, e);
          } catch (l) {
            ce(e, n, l);
          }
          break;
        case 1:
          var r = e.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var i = e.return;
            try {
              r.componentDidMount();
            } catch (l) {
              ce(e, i, l);
            }
          }
          var s = e.return;
          try {
            Rh(e);
          } catch (l) {
            ce(e, s, l);
          }
          break;
        case 5:
          var o = e.return;
          try {
            Rh(e);
          } catch (l) {
            ce(e, o, l);
          }
      }
    } catch (l) {
      ce(e, e.return, l);
    }
    if (e === t) {
      P = null;
      break;
    }
    var a = e.sibling;
    if (a !== null) {
      (a.return = e.return), (P = a);
      break;
    }
    P = e.return;
  }
}
var fT = Math.ceil,
  Va = mn.ReactCurrentDispatcher,
  uf = mn.ReactCurrentOwner,
  kt = mn.ReactCurrentBatchConfig,
  W = 0,
  Ce = null,
  ye = null,
  xe = 0,
  ht = 0,
  Jr = Zn(0),
  Se = 0,
  Fs = null,
  Ar = 0,
  Ol = 0,
  cf = 0,
  ps = null,
  nt = null,
  hf = 0,
  _i = 1 / 0,
  Xt = null,
  za = !1,
  xh = null,
  Un = null,
  Bo = !1,
  Rn = null,
  Ba = 0,
  ms = 0,
  Dh = null,
  ua = -1,
  ca = 0;
function Ye() {
  return W & 6 ? pe() : ua !== -1 ? ua : (ua = pe());
}
function Fn(t) {
  return t.mode & 1
    ? W & 2 && xe !== 0
      ? xe & -xe
      : X_.transition !== null
      ? (ca === 0 && (ca = dv()), ca)
      : ((t = X), t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : wv(t.type))), t)
    : 1;
}
function Lt(t, e, n, r) {
  if (50 < ms) throw ((ms = 0), (Dh = null), Error(_(185)));
  no(t, n, r),
    (!(W & 2) || t !== Ce) &&
      (t === Ce && (!(W & 2) && (Ol |= n), Se === 4 && _n(t, xe)),
      at(t, r),
      n === 1 && W === 0 && !(e.mode & 1) && ((_i = pe() + 500), Al && er()));
}
function at(t, e) {
  var n = t.callbackNode;
  XS(t, e);
  var r = Ca(t, t === Ce ? xe : 0);
  if (r === 0) n !== null && Bp(n), (t.callbackNode = null), (t.callbackPriority = 0);
  else if (((e = r & -r), t.callbackPriority !== e)) {
    if ((n != null && Bp(n), e === 1))
      t.tag === 0 ? Q_(Lm.bind(null, t)) : Uv(Lm.bind(null, t)),
        K_(function () {
          !(W & 6) && er();
        }),
        (n = null);
    else {
      switch (fv(r)) {
        case 1:
          n = Md;
          break;
        case 4:
          n = cv;
          break;
        case 16:
          n = ka;
          break;
        case 536870912:
          n = hv;
          break;
        default:
          n = ka;
      }
      n = b0(n, P0.bind(null, t));
    }
    (t.callbackPriority = e), (t.callbackNode = n);
  }
}
function P0(t, e) {
  if (((ua = -1), (ca = 0), W & 6)) throw Error(_(327));
  var n = t.callbackNode;
  if (oi() && t.callbackNode !== n) return null;
  var r = Ca(t, t === Ce ? xe : 0);
  if (r === 0) return null;
  if (r & 30 || r & t.expiredLanes || e) e = Ha(t, r);
  else {
    e = r;
    var i = W;
    W |= 2;
    var s = x0();
    (Ce !== t || xe !== e) && ((Xt = null), (_i = pe() + 500), yr(t, e));
    do
      try {
        gT();
        break;
      } catch (a) {
        O0(t, a);
      }
    while (1);
    Qd(), (Va.current = s), (W = i), ye !== null ? (e = 0) : ((Ce = null), (xe = 0), (e = Se));
  }
  if (e !== 0) {
    if ((e === 2 && ((i = oh(t)), i !== 0 && ((r = i), (e = $h(t, i)))), e === 1))
      throw ((n = Fs), yr(t, 0), _n(t, r), at(t, pe()), n);
    if (e === 6) _n(t, r);
    else {
      if (
        ((i = t.current.alternate),
        !(r & 30) &&
          !pT(i) &&
          ((e = Ha(t, r)), e === 2 && ((s = oh(t)), s !== 0 && ((r = s), (e = $h(t, s)))), e === 1))
      )
        throw ((n = Fs), yr(t, 0), _n(t, r), at(t, pe()), n);
      switch (((t.finishedWork = i), (t.finishedLanes = r), e)) {
        case 0:
        case 1:
          throw Error(_(345));
        case 2:
          ar(t, nt, Xt);
          break;
        case 3:
          if ((_n(t, r), (r & 130023424) === r && ((e = hf + 500 - pe()), 10 < e))) {
            if (Ca(t, 0) !== 0) break;
            if (((i = t.suspendedLanes), (i & r) !== r)) {
              Ye(), (t.pingedLanes |= t.suspendedLanes & i);
              break;
            }
            t.timeoutHandle = ph(ar.bind(null, t, nt, Xt), e);
            break;
          }
          ar(t, nt, Xt);
          break;
        case 4:
          if ((_n(t, r), (r & 4194240) === r)) break;
          for (e = t.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - $t(r);
            (s = 1 << o), (o = e[o]), o > i && (i = o), (r &= ~s);
          }
          if (
            ((r = i),
            (r = pe() - r),
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
                : 1960 * fT(r / 1960)) - r),
            10 < r)
          ) {
            t.timeoutHandle = ph(ar.bind(null, t, nt, Xt), r);
            break;
          }
          ar(t, nt, Xt);
          break;
        case 5:
          ar(t, nt, Xt);
          break;
        default:
          throw Error(_(329));
      }
    }
  }
  return at(t, pe()), t.callbackNode === n ? P0.bind(null, t) : null;
}
function $h(t, e) {
  var n = ps;
  return (
    t.current.memoizedState.isDehydrated && (yr(t, e).flags |= 256),
    (t = Ha(t, e)),
    t !== 2 && ((e = nt), (nt = n), e !== null && Lh(e)),
    t
  );
}
function Lh(t) {
  nt === null ? (nt = t) : nt.push.apply(nt, t);
}
function pT(t) {
  for (var e = t; ; ) {
    if (e.flags & 16384) {
      var n = e.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!Mt(s(), i)) return !1;
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
function _n(t, e) {
  for (
    e &= ~cf, e &= ~Ol, t.suspendedLanes |= e, t.pingedLanes &= ~e, t = t.expirationTimes;
    0 < e;

  ) {
    var n = 31 - $t(e),
      r = 1 << n;
    (t[n] = -1), (e &= ~r);
  }
}
function Lm(t) {
  if (W & 6) throw Error(_(327));
  oi();
  var e = Ca(t, 0);
  if (!(e & 1)) return at(t, pe()), null;
  var n = Ha(t, e);
  if (t.tag !== 0 && n === 2) {
    var r = oh(t);
    r !== 0 && ((e = r), (n = $h(t, r)));
  }
  if (n === 1) throw ((n = Fs), yr(t, 0), _n(t, e), at(t, pe()), n);
  if (n === 6) throw Error(_(345));
  return (
    (t.finishedWork = t.current.alternate), (t.finishedLanes = e), ar(t, nt, Xt), at(t, pe()), null
  );
}
function df(t, e) {
  var n = W;
  W |= 1;
  try {
    return t(e);
  } finally {
    (W = n), W === 0 && ((_i = pe() + 500), Al && er());
  }
}
function Nr(t) {
  Rn !== null && Rn.tag === 0 && !(W & 6) && oi();
  var e = W;
  W |= 1;
  var n = kt.transition,
    r = X;
  try {
    if (((kt.transition = null), (X = 1), t)) return t();
  } finally {
    (X = r), (kt.transition = n), (W = e), !(W & 6) && er();
  }
}
function ff() {
  (ht = Jr.current), re(Jr);
}
function yr(t, e) {
  (t.finishedWork = null), (t.finishedLanes = 0);
  var n = t.timeoutHandle;
  if ((n !== -1 && ((t.timeoutHandle = -1), H_(n)), ye !== null))
    for (n = ye.return; n !== null; ) {
      var r = n;
      switch ((Wd(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Oa();
          break;
        case 3:
          Ei(), re(st), re(We), tf();
          break;
        case 5:
          ef(r);
          break;
        case 4:
          Ei();
          break;
        case 13:
          re(ae);
          break;
        case 19:
          re(ae);
          break;
        case 10:
          Xd(r.type._context);
          break;
        case 22:
        case 23:
          ff();
      }
      n = n.return;
    }
  if (
    ((Ce = t),
    (ye = t = jn(t.current, null)),
    (xe = ht = e),
    (Se = 0),
    (Fs = null),
    (cf = Ol = Ar = 0),
    (nt = ps = null),
    hr !== null)
  ) {
    for (e = 0; e < hr.length; e++)
      if (((n = hr[e]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (r.next = o);
        }
        n.pending = r;
      }
    hr = null;
  }
  return t;
}
function O0(t, e) {
  do {
    var n = ye;
    try {
      if ((Qd(), (oa.current = ja), Fa)) {
        for (var r = le.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Fa = !1;
      }
      if (
        ((Cr = 0),
        (ke = we = le = null),
        (ds = !1),
        (Ms = 0),
        (uf.current = null),
        n === null || n.return === null)
      ) {
        (Se = 1), (Fs = e), (ye = null);
        break;
      }
      e: {
        var s = t,
          o = n.return,
          a = n,
          l = e;
        if (
          ((e = xe),
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
          var m = _m(o);
          if (m !== null) {
            (m.flags &= -257), Tm(m, o, a, s, e), m.mode & 1 && Sm(s, u, e), (e = m), (l = u);
            var y = e.updateQueue;
            if (y === null) {
              var v = new Set();
              v.add(l), (e.updateQueue = v);
            } else y.add(l);
            break e;
          } else {
            if (!(e & 1)) {
              Sm(s, u, e), pf();
              break e;
            }
            l = Error(_(426));
          }
        } else if (se && a.mode & 1) {
          var E = _m(o);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256), Tm(E, o, a, s, e), qd(Si(l, a));
            break e;
          }
        }
        (s = l = Si(l, a)), Se !== 4 && (Se = 2), ps === null ? (ps = [s]) : ps.push(s), (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (e &= -e), (s.lanes |= e);
              var p = p0(s, l, e);
              pm(s, p);
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
                    (Un === null || !Un.has(g))))
              ) {
                (s.flags |= 65536), (e &= -e), (s.lanes |= e);
                var w = m0(s, a, e);
                pm(s, w);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      $0(n);
    } catch (S) {
      (e = S), ye === n && n !== null && (ye = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function x0() {
  var t = Va.current;
  return (Va.current = ja), t === null ? ja : t;
}
function pf() {
  (Se === 0 || Se === 3 || Se === 2) && (Se = 4),
    Ce === null || (!(Ar & 268435455) && !(Ol & 268435455)) || _n(Ce, xe);
}
function Ha(t, e) {
  var n = W;
  W |= 2;
  var r = x0();
  (Ce !== t || xe !== e) && ((Xt = null), yr(t, e));
  do
    try {
      mT();
      break;
    } catch (i) {
      O0(t, i);
    }
  while (1);
  if ((Qd(), (W = n), (Va.current = r), ye !== null)) throw Error(_(261));
  return (Ce = null), (xe = 0), Se;
}
function mT() {
  for (; ye !== null; ) D0(ye);
}
function gT() {
  for (; ye !== null && !VS(); ) D0(ye);
}
function D0(t) {
  var e = M0(t.alternate, t, ht);
  (t.memoizedProps = t.pendingProps), e === null ? $0(t) : (ye = e), (uf.current = null);
}
function $0(t) {
  var e = t;
  do {
    var n = e.alternate;
    if (((t = e.return), e.flags & 32768)) {
      if (((n = uT(n, e)), n !== null)) {
        (n.flags &= 32767), (ye = n);
        return;
      }
      if (t !== null) (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
      else {
        (Se = 6), (ye = null);
        return;
      }
    } else if (((n = lT(n, e, ht)), n !== null)) {
      ye = n;
      return;
    }
    if (((e = e.sibling), e !== null)) {
      ye = e;
      return;
    }
    ye = e = t;
  } while (e !== null);
  Se === 0 && (Se = 5);
}
function ar(t, e, n) {
  var r = X,
    i = kt.transition;
  try {
    (kt.transition = null), (X = 1), yT(t, e, n, r);
  } finally {
    (kt.transition = i), (X = r);
  }
  return null;
}
function yT(t, e, n, r) {
  do oi();
  while (Rn !== null);
  if (W & 6) throw Error(_(327));
  n = t.finishedWork;
  var i = t.finishedLanes;
  if (n === null) return null;
  if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current)) throw Error(_(177));
  (t.callbackNode = null), (t.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (YS(t, s),
    t === Ce && ((ye = Ce = null), (xe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Bo ||
      ((Bo = !0),
      b0(ka, function () {
        return oi(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = kt.transition), (kt.transition = null);
    var o = X;
    X = 1;
    var a = W;
    (W |= 4),
      (uf.current = null),
      hT(t, n),
      N0(n, t),
      b_(dh),
      (Aa = !!hh),
      (dh = hh = null),
      (t.current = n),
      dT(n),
      zS(),
      (W = a),
      (X = o),
      (kt.transition = s);
  } else t.current = n;
  if (
    (Bo && ((Bo = !1), (Rn = t), (Ba = i)),
    (s = t.pendingLanes),
    s === 0 && (Un = null),
    KS(n.stateNode),
    at(t, pe()),
    e !== null)
  )
    for (r = t.onRecoverableError, n = 0; n < e.length; n++)
      (i = e[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (za) throw ((za = !1), (t = xh), (xh = null), t);
  return (
    Ba & 1 && t.tag !== 0 && oi(),
    (s = t.pendingLanes),
    s & 1 ? (t === Dh ? ms++ : ((ms = 0), (Dh = t))) : (ms = 0),
    er(),
    null
  );
}
function oi() {
  if (Rn !== null) {
    var t = fv(Ba),
      e = kt.transition,
      n = X;
    try {
      if (((kt.transition = null), (X = 16 > t ? 16 : t), Rn === null)) var r = !1;
      else {
        if (((t = Rn), (Rn = null), (Ba = 0), W & 6)) throw Error(_(331));
        var i = W;
        for (W |= 4, P = t.current; P !== null; ) {
          var s = P,
            o = s.child;
          if (P.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (P = u; P !== null; ) {
                  var c = P;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      fs(8, c, s);
                  }
                  var h = c.child;
                  if (h !== null) (h.return = c), (P = h);
                  else
                    for (; P !== null; ) {
                      c = P;
                      var d = c.sibling,
                        m = c.return;
                      if ((k0(c), c === u)) {
                        P = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = m), (P = d);
                        break;
                      }
                      P = m;
                    }
                }
              }
              var y = s.alternate;
              if (y !== null) {
                var v = y.child;
                if (v !== null) {
                  y.child = null;
                  do {
                    var E = v.sibling;
                    (v.sibling = null), (v = E);
                  } while (v !== null);
                }
              }
              P = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (P = o);
          else
            e: for (; P !== null; ) {
              if (((s = P), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    fs(9, s, s.return);
                }
              var p = s.sibling;
              if (p !== null) {
                (p.return = s.return), (P = p);
                break e;
              }
              P = s.return;
            }
        }
        var f = t.current;
        for (P = f; P !== null; ) {
          o = P;
          var g = o.child;
          if (o.subtreeFlags & 2064 && g !== null) (g.return = o), (P = g);
          else
            e: for (o = f; P !== null; ) {
              if (((a = P), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pl(9, a);
                  }
                } catch (S) {
                  ce(a, a.return, S);
                }
              if (a === o) {
                P = null;
                break e;
              }
              var w = a.sibling;
              if (w !== null) {
                (w.return = a.return), (P = w);
                break e;
              }
              P = a.return;
            }
        }
        if (((W = i), er(), zt && typeof zt.onPostCommitFiberRoot == 'function'))
          try {
            zt.onPostCommitFiberRoot(_l, t);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (X = n), (kt.transition = e);
    }
  }
  return !1;
}
function Mm(t, e, n) {
  (e = Si(n, e)),
    (e = p0(t, e, 1)),
    (t = bn(t, e, 1)),
    (e = Ye()),
    t !== null && (no(t, 1, e), at(t, e));
}
function ce(t, e, n) {
  if (t.tag === 3) Mm(t, t, n);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        Mm(e, t, n);
        break;
      } else if (e.tag === 1) {
        var r = e.stateNode;
        if (
          typeof e.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' && (Un === null || !Un.has(r)))
        ) {
          (t = Si(n, t)),
            (t = m0(e, t, 1)),
            (e = bn(e, t, 1)),
            (t = Ye()),
            e !== null && (no(e, 1, t), at(e, t));
          break;
        }
      }
      e = e.return;
    }
}
function vT(t, e, n) {
  var r = t.pingCache;
  r !== null && r.delete(e),
    (e = Ye()),
    (t.pingedLanes |= t.suspendedLanes & n),
    Ce === t &&
      (xe & n) === n &&
      (Se === 4 || (Se === 3 && (xe & 130023424) === xe && 500 > pe() - hf) ? yr(t, 0) : (cf |= n)),
    at(t, e);
}
function L0(t, e) {
  e === 0 && (t.mode & 1 ? ((e = Do), (Do <<= 1), !(Do & 130023424) && (Do = 4194304)) : (e = 1));
  var n = Ye();
  (t = an(t, e)), t !== null && (no(t, e, n), at(t, n));
}
function wT(t) {
  var e = t.memoizedState,
    n = 0;
  e !== null && (n = e.retryLane), L0(t, n);
}
function ET(t, e) {
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
      throw Error(_(314));
  }
  r !== null && r.delete(e), L0(t, n);
}
var M0;
M0 = function (t, e, n) {
  if (t !== null)
    if (t.memoizedProps !== e.pendingProps || st.current) it = !0;
    else {
      if (!(t.lanes & n) && !(e.flags & 128)) return (it = !1), aT(t, e, n);
      it = !!(t.flags & 131072);
    }
  else (it = !1), se && e.flags & 1048576 && Fv(e, $a, e.index);
  switch (((e.lanes = 0), e.tag)) {
    case 2:
      var r = e.type;
      la(t, e), (t = e.pendingProps);
      var i = yi(e, We.current);
      si(e, n), (i = rf(null, e, r, t, i, n));
      var s = sf();
      return (
        (e.flags |= 1),
        typeof i == 'object' && i !== null && typeof i.render == 'function' && i.$$typeof === void 0
          ? ((e.tag = 1),
            (e.memoizedState = null),
            (e.updateQueue = null),
            ot(r) ? ((s = !0), xa(e)) : (s = !1),
            (e.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
            Jd(e),
            (i.updater = Nl),
            (e.stateNode = i),
            (i._reactInternals = e),
            Sh(e, r, t, n),
            (e = Ih(null, e, r, !0, s, n)))
          : ((e.tag = 0), se && s && Kd(e), Qe(null, e, i, n), (e = e.child)),
        e
      );
    case 16:
      r = e.elementType;
      e: {
        switch (
          (la(t, e),
          (t = e.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (e.type = r),
          (i = e.tag = _T(r)),
          (t = Pt(r, t)),
          i)
        ) {
          case 0:
            e = Th(null, e, r, t, n);
            break e;
          case 1:
            e = Cm(null, e, r, t, n);
            break e;
          case 11:
            e = Im(null, e, r, t, n);
            break e;
          case 14:
            e = km(null, e, r, Pt(r.type, t), n);
            break e;
        }
        throw Error(_(306, r, ''));
      }
      return e;
    case 0:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : Pt(r, i)),
        Th(t, e, r, i, n)
      );
    case 1:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : Pt(r, i)),
        Cm(t, e, r, i, n)
      );
    case 3:
      e: {
        if ((w0(e), t === null)) throw Error(_(387));
        (r = e.pendingProps), (s = e.memoizedState), (i = s.element), Bv(t, e), ba(e, r, null, n);
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
            (i = Si(Error(_(423)), e)), (e = Am(t, e, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Si(Error(_(424)), e)), (e = Am(t, e, r, n, i));
            break e;
          } else
            for (
              dt = Mn(e.stateNode.containerInfo.firstChild),
                pt = e,
                se = !0,
                xt = null,
                n = qv(e, null, r, n),
                e.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((vi(), r === i)) {
            e = ln(t, e, n);
            break e;
          }
          Qe(t, e, r, n);
        }
        e = e.child;
      }
      return e;
    case 5:
      return (
        Gv(e),
        t === null && vh(e),
        (r = e.type),
        (i = e.pendingProps),
        (s = t !== null ? t.memoizedProps : null),
        (o = i.children),
        fh(r, i) ? (o = null) : s !== null && fh(r, s) && (e.flags |= 32),
        v0(t, e),
        Qe(t, e, o, n),
        e.child
      );
    case 6:
      return t === null && vh(e), null;
    case 13:
      return E0(t, e, n);
    case 4:
      return (
        Zd(e, e.stateNode.containerInfo),
        (r = e.pendingProps),
        t === null ? (e.child = wi(e, null, r, n)) : Qe(t, e, r, n),
        e.child
      );
    case 11:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : Pt(r, i)),
        Im(t, e, r, i, n)
      );
    case 7:
      return Qe(t, e, e.pendingProps, n), e.child;
    case 8:
      return Qe(t, e, e.pendingProps.children, n), e.child;
    case 12:
      return Qe(t, e, e.pendingProps.children, n), e.child;
    case 10:
      e: {
        if (
          ((r = e.type._context),
          (i = e.pendingProps),
          (s = e.memoizedProps),
          (o = i.value),
          ee(La, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (Mt(s.value, o)) {
            if (s.children === i.children && !st.current) {
              e = ln(t, e, n);
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
                      (l = rn(-1, n & -n)), (l.tag = 2);
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
                      wh(s.return, n, e),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (s.tag === 10) o = s.type === e.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(_(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  wh(o, n, e),
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
        Qe(t, e, i.children, n), (e = e.child);
      }
      return e;
    case 9:
      return (
        (i = e.type),
        (r = e.pendingProps.children),
        si(e, n),
        (i = Ct(i)),
        (r = r(i)),
        (e.flags |= 1),
        Qe(t, e, r, n),
        e.child
      );
    case 14:
      return (r = e.type), (i = Pt(r, e.pendingProps)), (i = Pt(r.type, i)), km(t, e, r, i, n);
    case 15:
      return g0(t, e, e.type, e.pendingProps, n);
    case 17:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : Pt(r, i)),
        la(t, e),
        (e.tag = 1),
        ot(r) ? ((t = !0), xa(e)) : (t = !1),
        si(e, n),
        Kv(e, r, i),
        Sh(e, r, i, n),
        Ih(null, e, r, !0, t, n)
      );
    case 19:
      return S0(t, e, n);
    case 22:
      return y0(t, e, n);
  }
  throw Error(_(156, e.tag));
};
function b0(t, e) {
  return uv(t, e);
}
function ST(t, e, n, r) {
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
function It(t, e, n, r) {
  return new ST(t, e, n, r);
}
function mf(t) {
  return (t = t.prototype), !(!t || !t.isReactComponent);
}
function _T(t) {
  if (typeof t == 'function') return mf(t) ? 1 : 0;
  if (t != null) {
    if (((t = t.$$typeof), t === Dd)) return 11;
    if (t === $d) return 14;
  }
  return 2;
}
function jn(t, e) {
  var n = t.alternate;
  return (
    n === null
      ? ((n = It(t.tag, e, t.key, t.mode)),
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
function ha(t, e, n, r, i, s) {
  var o = 2;
  if (((r = t), typeof t == 'function')) mf(t) && (o = 1);
  else if (typeof t == 'string') o = 5;
  else
    e: switch (t) {
      case zr:
        return vr(n.children, i, s, e);
      case xd:
        (o = 8), (i |= 8);
        break;
      case Kc:
        return (t = It(12, n, e, i | 2)), (t.elementType = Kc), (t.lanes = s), t;
      case Wc:
        return (t = It(13, n, e, i)), (t.elementType = Wc), (t.lanes = s), t;
      case qc:
        return (t = It(19, n, e, i)), (t.elementType = qc), (t.lanes = s), t;
      case Wy:
        return xl(n, i, s, e);
      default:
        if (typeof t == 'object' && t !== null)
          switch (t.$$typeof) {
            case Hy:
              o = 10;
              break e;
            case Ky:
              o = 9;
              break e;
            case Dd:
              o = 11;
              break e;
            case $d:
              o = 14;
              break e;
            case wn:
              (o = 16), (r = null);
              break e;
          }
        throw Error(_(130, t == null ? t : typeof t, ''));
    }
  return (e = It(o, n, e, i)), (e.elementType = t), (e.type = r), (e.lanes = s), e;
}
function vr(t, e, n, r) {
  return (t = It(7, t, r, e)), (t.lanes = n), t;
}
function xl(t, e, n, r) {
  return (
    (t = It(22, t, r, e)), (t.elementType = Wy), (t.lanes = n), (t.stateNode = { isHidden: !1 }), t
  );
}
function uc(t, e, n) {
  return (t = It(6, t, null, e)), (t.lanes = n), t;
}
function cc(t, e, n) {
  return (
    (e = It(4, t.children !== null ? t.children : [], t.key, e)),
    (e.lanes = n),
    (e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }),
    e
  );
}
function TT(t, e, n, r, i) {
  (this.tag = e),
    (this.containerInfo = t),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Hu(0)),
    (this.expirationTimes = Hu(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Hu(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function gf(t, e, n, r, i, s, o, a, l) {
  return (
    (t = new TT(t, e, n, a, l)),
    e === 1 ? ((e = 1), s === !0 && (e |= 8)) : (e = 0),
    (s = It(3, null, null, e)),
    (t.current = s),
    (s.stateNode = t),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    }),
    Jd(s),
    t
  );
}
function IT(t, e, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Vr,
    key: r == null ? null : '' + r,
    children: t,
    containerInfo: e,
    implementation: n
  };
}
function U0(t) {
  if (!t) return qn;
  t = t._reactInternals;
  e: {
    if (Mr(t) !== t || t.tag !== 1) throw Error(_(170));
    var e = t;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break e;
        case 1:
          if (ot(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(_(171));
  }
  if (t.tag === 1) {
    var n = t.type;
    if (ot(n)) return bv(t, n, e);
  }
  return e;
}
function F0(t, e, n, r, i, s, o, a, l) {
  return (
    (t = gf(n, r, !0, t, i, s, o, a, l)),
    (t.context = U0(null)),
    (n = t.current),
    (r = Ye()),
    (i = Fn(n)),
    (s = rn(r, i)),
    (s.callback = e ?? null),
    bn(n, s, i),
    (t.current.lanes = i),
    no(t, i, r),
    at(t, r),
    t
  );
}
function Dl(t, e, n, r) {
  var i = e.current,
    s = Ye(),
    o = Fn(i);
  return (
    (n = U0(n)),
    e.context === null ? (e.context = n) : (e.pendingContext = n),
    (e = rn(s, o)),
    (e.payload = { element: t }),
    (r = r === void 0 ? null : r),
    r !== null && (e.callback = r),
    (t = bn(i, e, o)),
    t !== null && (Lt(t, i, o, s), sa(t, i, o)),
    o
  );
}
function Ka(t) {
  if (((t = t.current), !t.child)) return null;
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode;
    default:
      return t.child.stateNode;
  }
}
function bm(t, e) {
  if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
    var n = t.retryLane;
    t.retryLane = n !== 0 && n < e ? n : e;
  }
}
function yf(t, e) {
  bm(t, e), (t = t.alternate) && bm(t, e);
}
function kT() {
  return null;
}
var j0 =
  typeof reportError == 'function'
    ? reportError
    : function (t) {
        console.error(t);
      };
function vf(t) {
  this._internalRoot = t;
}
$l.prototype.render = vf.prototype.render = function (t) {
  var e = this._internalRoot;
  if (e === null) throw Error(_(409));
  Dl(t, e, null, null);
};
$l.prototype.unmount = vf.prototype.unmount = function () {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var e = t.containerInfo;
    Nr(function () {
      Dl(null, t, null, null);
    }),
      (e[on] = null);
  }
};
function $l(t) {
  this._internalRoot = t;
}
$l.prototype.unstable_scheduleHydration = function (t) {
  if (t) {
    var e = gv();
    t = { blockedOn: null, target: t, priority: e };
    for (var n = 0; n < Sn.length && e !== 0 && e < Sn[n].priority; n++);
    Sn.splice(n, 0, t), n === 0 && vv(t);
  }
};
function wf(t) {
  return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
}
function Ll(t) {
  return !(
    !t ||
    (t.nodeType !== 1 &&
      t.nodeType !== 9 &&
      t.nodeType !== 11 &&
      (t.nodeType !== 8 || t.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Um() {}
function CT(t, e, n, r, i) {
  if (i) {
    if (typeof r == 'function') {
      var s = r;
      r = function () {
        var u = Ka(o);
        s.call(u);
      };
    }
    var o = F0(e, r, t, 0, null, !1, !1, '', Um);
    return (
      (t._reactRootContainer = o),
      (t[on] = o.current),
      Os(t.nodeType === 8 ? t.parentNode : t),
      Nr(),
      o
    );
  }
  for (; (i = t.lastChild); ) t.removeChild(i);
  if (typeof r == 'function') {
    var a = r;
    r = function () {
      var u = Ka(l);
      a.call(u);
    };
  }
  var l = gf(t, 0, !1, null, null, !1, !1, '', Um);
  return (
    (t._reactRootContainer = l),
    (t[on] = l.current),
    Os(t.nodeType === 8 ? t.parentNode : t),
    Nr(function () {
      Dl(e, l, n, r);
    }),
    l
  );
}
function Ml(t, e, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == 'function') {
      var a = i;
      i = function () {
        var l = Ka(o);
        a.call(l);
      };
    }
    Dl(e, o, t, i);
  } else o = CT(n, e, t, i, r);
  return Ka(o);
}
pv = function (t) {
  switch (t.tag) {
    case 3:
      var e = t.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var n = ts(e.pendingLanes);
        n !== 0 && (bd(e, n | 1), at(e, pe()), !(W & 6) && ((_i = pe() + 500), er()));
      }
      break;
    case 13:
      Nr(function () {
        var r = an(t, 1);
        if (r !== null) {
          var i = Ye();
          Lt(r, t, 1, i);
        }
      }),
        yf(t, 1);
  }
};
Ud = function (t) {
  if (t.tag === 13) {
    var e = an(t, 134217728);
    if (e !== null) {
      var n = Ye();
      Lt(e, t, 134217728, n);
    }
    yf(t, 134217728);
  }
};
mv = function (t) {
  if (t.tag === 13) {
    var e = Fn(t),
      n = an(t, e);
    if (n !== null) {
      var r = Ye();
      Lt(n, t, e, r);
    }
    yf(t, e);
  }
};
gv = function () {
  return X;
};
yv = function (t, e) {
  var n = X;
  try {
    return (X = t), e();
  } finally {
    X = n;
  }
};
rh = function (t, e, n) {
  switch (e) {
    case 'input':
      if ((Xc(t, n), (e = n.name), n.type === 'radio' && e != null)) {
        for (n = t; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll('input[name=' + JSON.stringify('' + e) + '][type="radio"]'), e = 0;
          e < n.length;
          e++
        ) {
          var r = n[e];
          if (r !== t && r.form === t.form) {
            var i = Cl(r);
            if (!i) throw Error(_(90));
            Gy(r), Xc(r, i);
          }
        }
      }
      break;
    case 'textarea':
      Xy(t, n);
      break;
    case 'select':
      (e = n.value), e != null && ti(t, !!n.multiple, e, !1);
  }
};
rv = df;
iv = Nr;
var AT = { usingClientEntryPoint: !1, Events: [io, Wr, Cl, tv, nv, df] },
  Yi = {
    findFiberByHostInstance: cr,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom'
  },
  NT = {
    bundleType: Yi.bundleType,
    version: Yi.version,
    rendererPackageName: Yi.rendererPackageName,
    rendererConfig: Yi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: mn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (t) {
      return (t = av(t)), t === null ? null : t.stateNode;
    },
    findFiberByHostInstance: Yi.findFiberByHostInstance || kT,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608'
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Ho = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ho.isDisabled && Ho.supportsFiber)
    try {
      (_l = Ho.inject(NT)), (zt = Ho);
    } catch {}
}
vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = AT;
vt.createPortal = function (t, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!wf(e)) throw Error(_(200));
  return IT(t, e, null, n);
};
vt.createRoot = function (t, e) {
  if (!wf(t)) throw Error(_(299));
  var n = !1,
    r = '',
    i = j0;
  return (
    e != null &&
      (e.unstable_strictMode === !0 && (n = !0),
      e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
      e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
    (e = gf(t, 1, !1, null, null, n, !1, r, i)),
    (t[on] = e.current),
    Os(t.nodeType === 8 ? t.parentNode : t),
    new vf(e)
  );
};
vt.findDOMNode = function (t) {
  if (t == null) return null;
  if (t.nodeType === 1) return t;
  var e = t._reactInternals;
  if (e === void 0)
    throw typeof t.render == 'function'
      ? Error(_(188))
      : ((t = Object.keys(t).join(',')), Error(_(268, t)));
  return (t = av(e)), (t = t === null ? null : t.stateNode), t;
};
vt.flushSync = function (t) {
  return Nr(t);
};
vt.hydrate = function (t, e, n) {
  if (!Ll(e)) throw Error(_(200));
  return Ml(null, t, e, !0, n);
};
vt.hydrateRoot = function (t, e, n) {
  if (!wf(t)) throw Error(_(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = '',
    o = j0;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (e = F0(e, null, t, 1, n ?? null, i, !1, s, o)),
    (t[on] = e.current),
    Os(t),
    r)
  )
    for (t = 0; t < r.length; t++)
      (n = r[t]),
        (i = n._getVersion),
        (i = i(n._source)),
        e.mutableSourceEagerHydrationData == null
          ? (e.mutableSourceEagerHydrationData = [n, i])
          : e.mutableSourceEagerHydrationData.push(n, i);
  return new $l(e);
};
vt.render = function (t, e, n) {
  if (!Ll(e)) throw Error(_(200));
  return Ml(null, t, e, !1, n);
};
vt.unmountComponentAtNode = function (t) {
  if (!Ll(t)) throw Error(_(40));
  return t._reactRootContainer
    ? (Nr(function () {
        Ml(null, null, t, !1, function () {
          (t._reactRootContainer = null), (t[on] = null);
        });
      }),
      !0)
    : !1;
};
vt.unstable_batchedUpdates = df;
vt.unstable_renderSubtreeIntoContainer = function (t, e, n, r) {
  if (!Ll(n)) throw Error(_(200));
  if (t == null || t._reactInternals === void 0) throw Error(_(38));
  return Ml(t, e, n, !1, r);
};
vt.version = '18.2.0-next-9e3b772b8-20220608';
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
  e(), (t.exports = vt);
})(kS);
var Fm = Sa;
(zc.createRoot = Fm.createRoot), (zc.hydrateRoot = Fm.hydrateRoot);
function Dt(t) {
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
function Gn(t) {
  return !!t && !!t[ie];
}
function un(t) {
  var e;
  return (
    !!t &&
    ((function (n) {
      if (!n || typeof n != 'object') return !1;
      var r = Object.getPrototypeOf(n);
      if (r === null) return !0;
      var i = Object.hasOwnProperty.call(r, 'constructor') && r.constructor;
      return i === Object || (typeof i == 'function' && Function.toString.call(i) === bT);
    })(t) ||
      Array.isArray(t) ||
      !!t[Wm] ||
      !!(!((e = t.constructor) === null || e === void 0) && e[Wm]) ||
      Ef(t) ||
      Sf(t))
  );
}
function Rr(t, e, n) {
  n === void 0 && (n = !1),
    bi(t) === 0
      ? (n ? Object.keys : li)(t).forEach(function (r) {
          (n && typeof r == 'symbol') || e(r, t[r], t);
        })
      : t.forEach(function (r, i) {
          return e(i, r, t);
        });
}
function bi(t) {
  var e = t[ie];
  return e ? (e.i > 3 ? e.i - 4 : e.i) : Array.isArray(t) ? 1 : Ef(t) ? 2 : Sf(t) ? 3 : 0;
}
function ai(t, e) {
  return bi(t) === 2 ? t.has(e) : Object.prototype.hasOwnProperty.call(t, e);
}
function RT(t, e) {
  return bi(t) === 2 ? t.get(e) : t[e];
}
function V0(t, e, n) {
  var r = bi(t);
  r === 2 ? t.set(e, n) : r === 3 ? t.add(n) : (t[e] = n);
}
function z0(t, e) {
  return t === e ? t !== 0 || 1 / t == 1 / e : t != t && e != e;
}
function Ef(t) {
  return LT && t instanceof Map;
}
function Sf(t) {
  return MT && t instanceof Set;
}
function lr(t) {
  return t.o || t.t;
}
function _f(t) {
  if (Array.isArray(t)) return Array.prototype.slice.call(t);
  var e = H0(t);
  delete e[ie];
  for (var n = li(e), r = 0; r < n.length; r++) {
    var i = n[r],
      s = e[i];
    s.writable === !1 && ((s.writable = !0), (s.configurable = !0)),
      (s.get || s.set) &&
        (e[i] = { configurable: !0, writable: !0, enumerable: s.enumerable, value: t[i] });
  }
  return Object.create(Object.getPrototypeOf(t), e);
}
function Tf(t, e) {
  return (
    e === void 0 && (e = !1),
    If(t) ||
      Gn(t) ||
      !un(t) ||
      (bi(t) > 1 && (t.set = t.add = t.clear = t.delete = PT),
      Object.freeze(t),
      e &&
        Rr(
          t,
          function (n, r) {
            return Tf(r, !0);
          },
          !0
        )),
    t
  );
}
function PT() {
  Dt(2);
}
function If(t) {
  return t == null || typeof t != 'object' || Object.isFrozen(t);
}
function Ht(t) {
  var e = Fh[t];
  return e || Dt(18, t), e;
}
function OT(t, e) {
  Fh[t] || (Fh[t] = e);
}
function Mh() {
  return js;
}
function hc(t, e) {
  e && (Ht('Patches'), (t.u = []), (t.s = []), (t.v = e));
}
function Wa(t) {
  bh(t), t.p.forEach(xT), (t.p = null);
}
function bh(t) {
  t === js && (js = t.l);
}
function jm(t) {
  return (js = { p: [], l: js, h: t, m: !0, _: 0 });
}
function xT(t) {
  var e = t[ie];
  e.i === 0 || e.i === 1 ? e.j() : (e.O = !0);
}
function dc(t, e) {
  e._ = e.p.length;
  var n = e.p[0],
    r = t !== void 0 && t !== n;
  return (
    e.h.g || Ht('ES5').S(e, t, r),
    r
      ? (n[ie].P && (Wa(e), Dt(4)),
        un(t) && ((t = qa(e, t)), e.l || Ga(e, t)),
        e.u && Ht('Patches').M(n[ie].t, t, e.u, e.s))
      : (t = qa(e, n, [])),
    Wa(e),
    e.u && e.v(e.u, e.s),
    t !== B0 ? t : void 0
  );
}
function qa(t, e, n) {
  if (If(e)) return e;
  var r = e[ie];
  if (!r)
    return (
      Rr(
        e,
        function (a, l) {
          return Vm(t, r, e, a, l, n);
        },
        !0
      ),
      e
    );
  if (r.A !== t) return e;
  if (!r.P) return Ga(t, r.t, !0), r.t;
  if (!r.I) {
    (r.I = !0), r.A._--;
    var i = r.i === 4 || r.i === 5 ? (r.o = _f(r.k)) : r.o,
      s = i,
      o = !1;
    r.i === 3 && ((s = new Set(i)), i.clear(), (o = !0)),
      Rr(s, function (a, l) {
        return Vm(t, r, i, a, l, n, o);
      }),
      Ga(t, i, !1),
      n && t.u && Ht('Patches').N(r, n, t.u, t.s);
  }
  return r.o;
}
function Vm(t, e, n, r, i, s, o) {
  if (Gn(i)) {
    var a = qa(t, i, s && e && e.i !== 3 && !ai(e.R, r) ? s.concat(r) : void 0);
    if ((V0(n, r, a), !Gn(a))) return;
    t.m = !1;
  } else o && n.add(i);
  if (un(i) && !If(i)) {
    if (!t.h.D && t._ < 1) return;
    qa(t, i), (e && e.A.l) || Ga(t, i);
  }
}
function Ga(t, e, n) {
  n === void 0 && (n = !1), !t.l && t.h.D && t.m && Tf(e, n);
}
function fc(t, e) {
  var n = t[ie];
  return (n ? lr(n) : t)[e];
}
function zm(t, e) {
  if (e in t)
    for (var n = Object.getPrototypeOf(t); n; ) {
      var r = Object.getOwnPropertyDescriptor(n, e);
      if (r) return r;
      n = Object.getPrototypeOf(n);
    }
}
function Tn(t) {
  t.P || ((t.P = !0), t.l && Tn(t.l));
}
function pc(t) {
  t.o || (t.o = _f(t.t));
}
function Uh(t, e, n) {
  var r = Ef(e)
    ? Ht('MapSet').F(e, n)
    : Sf(e)
    ? Ht('MapSet').T(e, n)
    : t.g
    ? (function (i, s) {
        var o = Array.isArray(i),
          a = {
            i: o ? 1 : 0,
            A: s ? s.A : Mh(),
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
          u = Vs;
        o && ((l = [a]), (u = rs));
        var c = Proxy.revocable(l, u),
          h = c.revoke,
          d = c.proxy;
        return (a.k = d), (a.j = h), d;
      })(e, n)
    : Ht('ES5').J(e, n);
  return (n ? n.A : Mh()).p.push(r), r;
}
function DT(t) {
  return (
    Gn(t) || Dt(22, t),
    (function e(n) {
      if (!un(n)) return n;
      var r,
        i = n[ie],
        s = bi(n);
      if (i) {
        if (!i.P && (i.i < 4 || !Ht('ES5').K(i))) return i.t;
        (i.I = !0), (r = Bm(n, s)), (i.I = !1);
      } else r = Bm(n, s);
      return (
        Rr(r, function (o, a) {
          (i && RT(i.t, o) === a) || V0(r, o, e(a));
        }),
        s === 3 ? new Set(r) : r
      );
    })(t)
  );
}
function Bm(t, e) {
  switch (e) {
    case 2:
      return new Map(t);
    case 3:
      return Array.from(t);
  }
  return _f(t);
}
function $T() {
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
                var l = this[ie];
                return Vs.get(l, s);
              },
              set: function (l) {
                var u = this[ie];
                Vs.set(u, s, l);
              }
            }),
      a
    );
  }
  function e(s) {
    for (var o = s.length - 1; o >= 0; o--) {
      var a = s[o][ie];
      if (!a.P)
        switch (a.i) {
          case 5:
            r(a) && Tn(a);
            break;
          case 4:
            n(a) && Tn(a);
        }
    }
  }
  function n(s) {
    for (var o = s.t, a = s.k, l = li(a), u = l.length - 1; u >= 0; u--) {
      var c = l[u];
      if (c !== ie) {
        var h = o[c];
        if (h === void 0 && !ai(o, c)) return !0;
        var d = a[c],
          m = d && d[ie];
        if (m ? m.t !== h : !z0(d, h)) return !0;
      }
    }
    var y = !!o[ie];
    return l.length !== li(o).length + (y ? 0 : 1);
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
  OT('ES5', {
    J: function (s, o) {
      var a = Array.isArray(s),
        l = (function (c, h) {
          if (c) {
            for (var d = Array(h.length), m = 0; m < h.length; m++)
              Object.defineProperty(d, '' + m, t(m, !0));
            return d;
          }
          var y = H0(h);
          delete y[ie];
          for (var v = li(y), E = 0; E < v.length; E++) {
            var p = v[E];
            y[p] = t(p, c || !!y[p].enumerable);
          }
          return Object.create(Object.getPrototypeOf(h), y);
        })(a, s),
        u = {
          i: a ? 5 : 4,
          A: o ? o.A : Mh(),
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
      return Object.defineProperty(l, ie, { value: u, writable: !0 }), l;
    },
    S: function (s, o, a) {
      a
        ? Gn(o) && o[ie].A === s && e(s.p)
        : (s.u &&
            (function l(u) {
              if (u && typeof u == 'object') {
                var c = u[ie];
                if (c) {
                  var h = c.t,
                    d = c.k,
                    m = c.R,
                    y = c.i;
                  if (y === 4)
                    Rr(d, function (g) {
                      g !== ie &&
                        (h[g] !== void 0 || ai(h, g) ? m[g] || l(d[g]) : ((m[g] = !0), Tn(c)));
                    }),
                      Rr(h, function (g) {
                        d[g] !== void 0 || ai(d, g) || ((m[g] = !1), Tn(c));
                      });
                  else if (y === 5) {
                    if ((r(c) && (Tn(c), (m.length = !0)), d.length < h.length))
                      for (var v = d.length; v < h.length; v++) m[v] = !1;
                    else for (var E = h.length; E < d.length; E++) m[E] = !0;
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
var Hm,
  js,
  kf = typeof Symbol < 'u' && typeof Symbol('x') == 'symbol',
  LT = typeof Map < 'u',
  MT = typeof Set < 'u',
  Km = typeof Proxy < 'u' && Proxy.revocable !== void 0 && typeof Reflect < 'u',
  B0 = kf ? Symbol.for('immer-nothing') : (((Hm = {})['immer-nothing'] = !0), Hm),
  Wm = kf ? Symbol.for('immer-draftable') : '__$immer_draftable',
  ie = kf ? Symbol.for('immer-state') : '__$immer_state',
  bT = '' + Object.prototype.constructor,
  li =
    typeof Reflect < 'u' && Reflect.ownKeys
      ? Reflect.ownKeys
      : Object.getOwnPropertySymbols !== void 0
      ? function (t) {
          return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
        }
      : Object.getOwnPropertyNames,
  H0 =
    Object.getOwnPropertyDescriptors ||
    function (t) {
      var e = {};
      return (
        li(t).forEach(function (n) {
          e[n] = Object.getOwnPropertyDescriptor(t, n);
        }),
        e
      );
    },
  Fh = {},
  Vs = {
    get: function (t, e) {
      if (e === ie) return t;
      var n = lr(t);
      if (!ai(n, e))
        return (function (i, s, o) {
          var a,
            l = zm(s, o);
          return l
            ? 'value' in l
              ? l.value
              : (a = l.get) === null || a === void 0
              ? void 0
              : a.call(i.k)
            : void 0;
        })(t, n, e);
      var r = n[e];
      return t.I || !un(r) ? r : r === fc(t.t, e) ? (pc(t), (t.o[e] = Uh(t.A.h, r, t))) : r;
    },
    has: function (t, e) {
      return e in lr(t);
    },
    ownKeys: function (t) {
      return Reflect.ownKeys(lr(t));
    },
    set: function (t, e, n) {
      var r = zm(lr(t), e);
      if (r != null && r.set) return r.set.call(t.k, n), !0;
      if (!t.P) {
        var i = fc(lr(t), e),
          s = i == null ? void 0 : i[ie];
        if (s && s.t === n) return (t.o[e] = n), (t.R[e] = !1), !0;
        if (z0(n, i) && (n !== void 0 || ai(t.t, e))) return !0;
        pc(t), Tn(t);
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
        fc(t.t, e) !== void 0 || e in t.t ? ((t.R[e] = !1), pc(t), Tn(t)) : delete t.R[e],
        t.o && delete t.o[e],
        !0
      );
    },
    getOwnPropertyDescriptor: function (t, e) {
      var n = lr(t),
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
      Dt(11);
    },
    getPrototypeOf: function (t) {
      return Object.getPrototypeOf(t.t);
    },
    setPrototypeOf: function () {
      Dt(12);
    }
  },
  rs = {};
Rr(Vs, function (t, e) {
  rs[t] = function () {
    return (arguments[0] = arguments[0][0]), e.apply(this, arguments);
  };
}),
  (rs.deleteProperty = function (t, e) {
    return rs.set.call(this, t, e, void 0);
  }),
  (rs.set = function (t, e, n) {
    return Vs.set.call(this, t[0], e, n, t[0]);
  });
var UT = (function () {
    function t(n) {
      var r = this;
      (this.g = Km),
        (this.D = !0),
        (this.produce = function (i, s, o) {
          if (typeof i == 'function' && typeof s != 'function') {
            var a = s;
            s = i;
            var l = r;
            return function (v) {
              var E = this;
              v === void 0 && (v = a);
              for (var p = arguments.length, f = Array(p > 1 ? p - 1 : 0), g = 1; g < p; g++)
                f[g - 1] = arguments[g];
              return l.produce(v, function (w) {
                var S;
                return (S = s).call.apply(S, [E, w].concat(f));
              });
            };
          }
          var u;
          if (
            (typeof s != 'function' && Dt(6),
            o !== void 0 && typeof o != 'function' && Dt(7),
            un(i))
          ) {
            var c = jm(r),
              h = Uh(r, i, void 0),
              d = !0;
            try {
              (u = s(h)), (d = !1);
            } finally {
              d ? Wa(c) : bh(c);
            }
            return typeof Promise < 'u' && u instanceof Promise
              ? u.then(
                  function (v) {
                    return hc(c, o), dc(v, c);
                  },
                  function (v) {
                    throw (Wa(c), v);
                  }
                )
              : (hc(c, o), dc(u, c));
          }
          if (!i || typeof i != 'object') {
            if (((u = s(i)) === void 0 && (u = i), u === B0 && (u = void 0), r.D && Tf(u, !0), o)) {
              var m = [],
                y = [];
              Ht('Patches').M(i, u, m, y), o(m, y);
            }
            return u;
          }
          Dt(21, i);
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
        un(n) || Dt(8), Gn(n) && (n = DT(n));
        var r = jm(this),
          i = Uh(this, n, void 0);
        return (i[ie].C = !0), bh(r), i;
      }),
      (e.finishDraft = function (n, r) {
        var i = n && n[ie],
          s = i.A;
        return hc(s, r), dc(void 0, s);
      }),
      (e.setAutoFreeze = function (n) {
        this.D = n;
      }),
      (e.setUseProxies = function (n) {
        n && !Km && Dt(20), (this.g = n);
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
        var o = Ht('Patches').$;
        return Gn(n)
          ? o(n, r)
          : this.produce(n, function (a) {
              return o(a, r);
            });
      }),
      t
    );
  })(),
  gt = new UT(),
  K0 = gt.produce;
gt.produceWithPatches.bind(gt);
gt.setAutoFreeze.bind(gt);
gt.setUseProxies.bind(gt);
gt.applyPatches.bind(gt);
gt.createDraft.bind(gt);
gt.finishDraft.bind(gt);
function zs(t) {
  return (
    (zs =
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
    zs(t)
  );
}
function FT(t, e) {
  if (zs(t) !== 'object' || t === null) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || 'default');
    if (zs(r) !== 'object') return r;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(t);
}
function jT(t) {
  var e = FT(t, 'string');
  return zs(e) === 'symbol' ? e : String(e);
}
function VT(t, e, n) {
  return (
    (e = jT(e)),
    e in t
      ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = n),
    t
  );
}
function qm(t, e) {
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
function Gm(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? qm(Object(n), !0).forEach(function (r) {
          VT(t, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
      : qm(Object(n)).forEach(function (r) {
          Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return t;
}
function je(t) {
  return (
    'Minified Redux error #' +
    t +
    '; visit https://redux.js.org/Errors?code=' +
    t +
    ' for the full message or use the non-minified dev environment for full errors. '
  );
}
var Qm = (function () {
    return (typeof Symbol == 'function' && Symbol.observable) || '@@observable';
  })(),
  mc = function () {
    return Math.random().toString(36).substring(7).split('').join('.');
  },
  Qa = {
    INIT: '@@redux/INIT' + mc(),
    REPLACE: '@@redux/REPLACE' + mc(),
    PROBE_UNKNOWN_ACTION: function () {
      return '@@redux/PROBE_UNKNOWN_ACTION' + mc();
    }
  };
function zT(t) {
  if (typeof t != 'object' || t === null) return !1;
  for (var e = t; Object.getPrototypeOf(e) !== null; ) e = Object.getPrototypeOf(e);
  return Object.getPrototypeOf(t) === e;
}
function W0(t, e, n) {
  var r;
  if (
    (typeof e == 'function' && typeof n == 'function') ||
    (typeof n == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(je(0));
  if ((typeof e == 'function' && typeof n > 'u' && ((n = e), (e = void 0)), typeof n < 'u')) {
    if (typeof n != 'function') throw new Error(je(1));
    return n(W0)(t, e);
  }
  if (typeof t != 'function') throw new Error(je(2));
  var i = t,
    s = e,
    o = [],
    a = o,
    l = !1;
  function u() {
    a === o && (a = o.slice());
  }
  function c() {
    if (l) throw new Error(je(3));
    return s;
  }
  function h(v) {
    if (typeof v != 'function') throw new Error(je(4));
    if (l) throw new Error(je(5));
    var E = !0;
    return (
      u(),
      a.push(v),
      function () {
        if (E) {
          if (l) throw new Error(je(6));
          (E = !1), u();
          var f = a.indexOf(v);
          a.splice(f, 1), (o = null);
        }
      }
    );
  }
  function d(v) {
    if (!zT(v)) throw new Error(je(7));
    if (typeof v.type > 'u') throw new Error(je(8));
    if (l) throw new Error(je(9));
    try {
      (l = !0), (s = i(s, v));
    } finally {
      l = !1;
    }
    for (var E = (o = a), p = 0; p < E.length; p++) {
      var f = E[p];
      f();
    }
    return v;
  }
  function m(v) {
    if (typeof v != 'function') throw new Error(je(10));
    (i = v), d({ type: Qa.REPLACE });
  }
  function y() {
    var v,
      E = h;
    return (
      (v = {
        subscribe: function (f) {
          if (typeof f != 'object' || f === null) throw new Error(je(11));
          function g() {
            f.next && f.next(c());
          }
          g();
          var w = E(g);
          return { unsubscribe: w };
        }
      }),
      (v[Qm] = function () {
        return this;
      }),
      v
    );
  }
  return (
    d({ type: Qa.INIT }),
    (r = { dispatch: d, subscribe: h, getState: c, replaceReducer: m }),
    (r[Qm] = y),
    r
  );
}
function BT(t) {
  Object.keys(t).forEach(function (e) {
    var n = t[e],
      r = n(void 0, { type: Qa.INIT });
    if (typeof r > 'u') throw new Error(je(12));
    if (typeof n(void 0, { type: Qa.PROBE_UNKNOWN_ACTION() }) > 'u') throw new Error(je(13));
  });
}
function q0(t) {
  for (var e = Object.keys(t), n = {}, r = 0; r < e.length; r++) {
    var i = e[r];
    typeof t[i] == 'function' && (n[i] = t[i]);
  }
  var s = Object.keys(n),
    o;
  try {
    BT(n);
  } catch (a) {
    o = a;
  }
  return function (l, u) {
    if ((l === void 0 && (l = {}), o)) throw o;
    for (var c = !1, h = {}, d = 0; d < s.length; d++) {
      var m = s[d],
        y = n[m],
        v = l[m],
        E = y(v, u);
      if (typeof E > 'u') throw (u && u.type, new Error(je(14)));
      (h[m] = E), (c = c || E !== v);
    }
    return (c = c || s.length !== Object.keys(l).length), c ? h : l;
  };
}
function Xa() {
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
function HT() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
  return function (r) {
    return function () {
      var i = r.apply(void 0, arguments),
        s = function () {
          throw new Error(je(15));
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
      return (s = Xa.apply(void 0, a)(i.dispatch)), Gm(Gm({}, i), {}, { dispatch: s });
    };
  };
}
function G0(t) {
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
var Q0 = G0();
Q0.withExtraArgument = G0;
const Xm = Q0;
var KT =
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
  WT =
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
  Ya =
    (globalThis && globalThis.__spreadArray) ||
    function (t, e) {
      for (var n = 0, r = e.length, i = t.length; n < r; n++, i++) t[i] = e[n];
      return t;
    },
  qT = Object.defineProperty,
  GT = Object.defineProperties,
  QT = Object.getOwnPropertyDescriptors,
  Ym = Object.getOwnPropertySymbols,
  XT = Object.prototype.hasOwnProperty,
  YT = Object.prototype.propertyIsEnumerable,
  Jm = function (t, e, n) {
    return e in t
      ? qT(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n);
  },
  Vn = function (t, e) {
    for (var n in e || (e = {})) XT.call(e, n) && Jm(t, n, e[n]);
    if (Ym)
      for (var r = 0, i = Ym(e); r < i.length; r++) {
        var n = i[r];
        YT.call(e, n) && Jm(t, n, e[n]);
      }
    return t;
  },
  gc = function (t, e) {
    return GT(t, QT(e));
  },
  JT = function (t, e, n) {
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
  ZT =
    typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == 'object' ? Xa : Xa.apply(null, arguments);
        };
function eI(t) {
  if (typeof t != 'object' || t === null) return !1;
  var e = Object.getPrototypeOf(t);
  if (e === null) return !0;
  for (var n = e; Object.getPrototypeOf(n) !== null; ) n = Object.getPrototypeOf(n);
  return e === n;
}
var tI = (function (t) {
  KT(e, t);
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
        ? new (e.bind.apply(e, Ya([void 0], n[0].concat(this))))()
        : new (e.bind.apply(e, Ya([void 0], n.concat(this))))();
    }),
    e
  );
})(Array);
function jh(t) {
  return un(t) ? K0(t, function () {}) : t;
}
function nI(t) {
  return typeof t == 'boolean';
}
function rI() {
  return function (e) {
    return iI(e);
  };
}
function iI(t) {
  t === void 0 && (t = {});
  var e = t.thunk,
    n = e === void 0 ? !0 : e;
  t.immutableCheck, t.serializableCheck;
  var r = new tI();
  return n && (nI(n) ? r.push(Xm) : r.push(Xm.withExtraArgument(n.extraArgument))), r;
}
var sI = !0;
function oI(t) {
  var e = rI(),
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
  else if (eI(i)) m = q0(i);
  else
    throw new Error(
      '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
    );
  var y = o;
  typeof y == 'function' && (y = y(e));
  var v = HT.apply(void 0, y),
    E = Xa;
  l && (E = ZT(Vn({ trace: !sI }, typeof l == 'object' && l)));
  var p = [v];
  Array.isArray(d) ? (p = Ya([v], d)) : typeof d == 'function' && (p = d(p));
  var f = E.apply(void 0, p);
  return W0(m, c, f);
}
function zn(t, e) {
  function n() {
    for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
    if (e) {
      var s = e.apply(void 0, r);
      if (!s) throw new Error('prepareAction did not return an object');
      return Vn(
        Vn({ type: t, payload: s.payload }, 'meta' in s && { meta: s.meta }),
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
function X0(t) {
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
function aI(t) {
  return typeof t == 'function';
}
function lI(t, e, n, r) {
  n === void 0 && (n = []);
  var i = typeof e == 'function' ? X0(e) : [e, n, r],
    s = i[0],
    o = i[1],
    a = i[2],
    l;
  if (aI(t))
    l = function () {
      return jh(t());
    };
  else {
    var u = jh(t);
    l = function () {
      return u;
    };
  }
  function c(h, d) {
    h === void 0 && (h = l());
    var m = Ya(
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
          if (Gn(y)) {
            var E = y,
              p = v(E, d);
            return p === void 0 ? y : p;
          } else {
            if (un(y))
              return K0(y, function (f) {
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
function uI(t, e) {
  return t + '/' + e;
}
function cI(t) {
  var e = t.name;
  if (!e) throw new Error('`name` is a required option for createSlice');
  typeof process < 'u';
  var n = typeof t.initialState == 'function' ? t.initialState : jh(t.initialState),
    r = t.reducers || {},
    i = Object.keys(r),
    s = {},
    o = {},
    a = {};
  i.forEach(function (c) {
    var h = r[c],
      d = uI(e, c),
      m,
      y;
    'reducer' in h ? ((m = h.reducer), (y = h.prepare)) : (m = h),
      (s[c] = m),
      (o[d] = m),
      (a[c] = y ? zn(d, y) : zn(d));
  });
  function l() {
    var c = typeof t.extraReducers == 'function' ? X0(t.extraReducers) : [t.extraReducers],
      h = c[0],
      d = h === void 0 ? {} : h,
      m = c[1],
      y = m === void 0 ? [] : m,
      v = c[2],
      E = v === void 0 ? void 0 : v,
      p = Vn(Vn({}, d), o);
    return lI(n, function (f) {
      for (var g in p) f.addCase(g, p[g]);
      for (var w = 0, S = y; w < S.length; w++) {
        var k = S[w];
        f.addMatcher(k.matcher, k.reducer);
      }
      E && f.addDefaultCase(E);
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
var hI = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW',
  dI = function (t) {
    t === void 0 && (t = 21);
    for (var e = '', n = t; n--; ) e += hI[(Math.random() * 64) | 0];
    return e;
  },
  fI = ['name', 'message', 'stack', 'code'],
  yc = (function () {
    function t(e, n) {
      (this.payload = e), (this.meta = n);
    }
    return t;
  })(),
  Zm = (function () {
    function t(e, n) {
      (this.payload = e), (this.meta = n);
    }
    return t;
  })(),
  pI = function (t) {
    if (typeof t == 'object' && t !== null) {
      for (var e = {}, n = 0, r = fI; n < r.length; n++) {
        var i = r[n];
        typeof t[i] == 'string' && (e[i] = t[i]);
      }
      return e;
    }
    return { message: String(t) };
  },
  Y0 = (function () {
    function t(e, n, r) {
      var i = zn(e + '/fulfilled', function (u, c, h, d) {
          return {
            payload: u,
            meta: gc(Vn({}, d || {}), { arg: h, requestId: c, requestStatus: 'fulfilled' })
          };
        }),
        s = zn(e + '/pending', function (u, c, h) {
          return {
            payload: void 0,
            meta: gc(Vn({}, h || {}), { arg: c, requestId: u, requestStatus: 'pending' })
          };
        }),
        o = zn(e + '/rejected', function (u, c, h, d, m) {
          return {
            payload: d,
            error: ((r && r.serializeError) || pI)(u || 'Rejected'),
            meta: gc(Vn({}, m || {}), {
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
          var m = r != null && r.idGenerator ? r.idGenerator(u) : dI(),
            y = new a(),
            v;
          function E(f) {
            (v = f), y.abort();
          }
          var p = (function () {
            return JT(this, null, function () {
              var f, g, w, S, k, C, A;
              return WT(this, function (V) {
                switch (V.label) {
                  case 0:
                    return (
                      V.trys.push([0, 4, , 5]),
                      (S =
                        (f = r == null ? void 0 : r.condition) == null
                          ? void 0
                          : f.call(r, u, { getState: h, extra: d })),
                      gI(S) ? [4, S] : [3, 2]
                    );
                  case 1:
                    (S = V.sent()), (V.label = 2);
                  case 2:
                    if (S === !1 || y.signal.aborted)
                      throw {
                        name: 'ConditionError',
                        message: 'Aborted due to condition callback returning false.'
                      };
                    return (
                      (k = new Promise(function (x, te) {
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
                          k,
                          Promise.resolve(
                            n(u, {
                              dispatch: c,
                              getState: h,
                              extra: d,
                              requestId: m,
                              signal: y.signal,
                              abort: E,
                              rejectWithValue: function (x, te) {
                                return new yc(x, te);
                              },
                              fulfillWithValue: function (x, te) {
                                return new Zm(x, te);
                              }
                            })
                          ).then(function (x) {
                            if (x instanceof yc) throw x;
                            return x instanceof Zm ? i(x.payload, m, u, x.meta) : i(x, m, u);
                          })
                        ])
                      ]
                    );
                  case 3:
                    return (w = V.sent()), [3, 5];
                  case 4:
                    return (
                      (C = V.sent()),
                      (w = C instanceof yc ? o(null, m, u, C.payload, C.meta) : o(C, m, u)),
                      [3, 5]
                    );
                  case 5:
                    return (
                      (A = r && !r.dispatchConditionRejection && o.match(w) && w.meta.condition),
                      A || c(w),
                      [2, w]
                    );
                }
              });
            });
          })();
          return Object.assign(p, {
            abort: E,
            requestId: m,
            arg: u,
            unwrap: function () {
              return p.then(mI);
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
function mI(t) {
  if (t.meta && t.meta.rejectedWithValue) throw t.payload;
  if (t.error) throw t.error;
  return t.payload;
}
function gI(t) {
  return t !== null && typeof t == 'object' && typeof t.then == 'function';
}
var Cf = 'listenerMiddleware';
zn(Cf + '/add');
zn(Cf + '/removeAll');
zn(Cf + '/remove');
var eg;
typeof queueMicrotask == 'function' &&
  queueMicrotask.bind(typeof window < 'u' ? window : typeof global < 'u' ? global : globalThis);
$T();
var Vh = {},
  yI = {
    get exports() {
      return Vh;
    },
    set exports(t) {
      Vh = t;
    }
  },
  J0 = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ti = I;
function vI(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var wI = typeof Object.is == 'function' ? Object.is : vI,
  EI = Ti.useState,
  SI = Ti.useEffect,
  _I = Ti.useLayoutEffect,
  TI = Ti.useDebugValue;
function II(t, e) {
  var n = e(),
    r = EI({ inst: { value: n, getSnapshot: e } }),
    i = r[0].inst,
    s = r[1];
  return (
    _I(
      function () {
        (i.value = n), (i.getSnapshot = e), vc(i) && s({ inst: i });
      },
      [t, n, e]
    ),
    SI(
      function () {
        return (
          vc(i) && s({ inst: i }),
          t(function () {
            vc(i) && s({ inst: i });
          })
        );
      },
      [t]
    ),
    TI(n),
    n
  );
}
function vc(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !wI(t, n);
  } catch {
    return !0;
  }
}
function kI(t, e) {
  return e();
}
var CI =
  typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'
    ? kI
    : II;
J0.useSyncExternalStore = Ti.useSyncExternalStore !== void 0 ? Ti.useSyncExternalStore : CI;
(function (t) {
  t.exports = J0;
})(yI);
var tg = {},
  AI = {
    get exports() {
      return tg;
    },
    set exports(t) {
      tg = t;
    }
  },
  Z0 = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bl = I,
  NI = Vh;
function RI(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var PI = typeof Object.is == 'function' ? Object.is : RI,
  OI = NI.useSyncExternalStore,
  xI = bl.useRef,
  DI = bl.useEffect,
  $I = bl.useMemo,
  LI = bl.useDebugValue;
Z0.useSyncExternalStoreWithSelector = function (t, e, n, r, i) {
  var s = xI(null);
  if (s.current === null) {
    var o = { hasValue: !1, value: null };
    s.current = o;
  } else o = s.current;
  s = $I(
    function () {
      function l(m) {
        if (!u) {
          if (((u = !0), (c = m), (m = r(m)), i !== void 0 && o.hasValue)) {
            var y = o.value;
            if (i(y, m)) return (h = y);
          }
          return (h = m);
        }
        if (((y = h), PI(c, m))) return y;
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
  var a = OI(t, s[0], s[1]);
  return (
    DI(
      function () {
        (o.hasValue = !0), (o.value = a);
      },
      [a]
    ),
    LI(a),
    a
  );
};
(function (t) {
  t.exports = Z0;
})(AI);
function MI(t) {
  t();
}
let e1 = MI;
const bI = (t) => (e1 = t),
  UI = () => e1,
  Ii = I.createContext(null);
function FI() {
  return I.useContext(Ii);
}
var zh = {},
  jI = {
    get exports() {
      return zh;
    },
    set exports(t) {
      zh = t;
    }
  },
  Y = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ne = typeof Symbol == 'function' && Symbol.for,
  Af = Ne ? Symbol.for('react.element') : 60103,
  Nf = Ne ? Symbol.for('react.portal') : 60106,
  Ul = Ne ? Symbol.for('react.fragment') : 60107,
  Fl = Ne ? Symbol.for('react.strict_mode') : 60108,
  jl = Ne ? Symbol.for('react.profiler') : 60114,
  Vl = Ne ? Symbol.for('react.provider') : 60109,
  zl = Ne ? Symbol.for('react.context') : 60110,
  Rf = Ne ? Symbol.for('react.async_mode') : 60111,
  Bl = Ne ? Symbol.for('react.concurrent_mode') : 60111,
  Hl = Ne ? Symbol.for('react.forward_ref') : 60112,
  Kl = Ne ? Symbol.for('react.suspense') : 60113,
  VI = Ne ? Symbol.for('react.suspense_list') : 60120,
  Wl = Ne ? Symbol.for('react.memo') : 60115,
  ql = Ne ? Symbol.for('react.lazy') : 60116,
  zI = Ne ? Symbol.for('react.block') : 60121,
  BI = Ne ? Symbol.for('react.fundamental') : 60117,
  HI = Ne ? Symbol.for('react.responder') : 60118,
  KI = Ne ? Symbol.for('react.scope') : 60119;
function Et(t) {
  if (typeof t == 'object' && t !== null) {
    var e = t.$$typeof;
    switch (e) {
      case Af:
        switch (((t = t.type), t)) {
          case Rf:
          case Bl:
          case Ul:
          case jl:
          case Fl:
          case Kl:
            return t;
          default:
            switch (((t = t && t.$$typeof), t)) {
              case zl:
              case Hl:
              case ql:
              case Wl:
              case Vl:
                return t;
              default:
                return e;
            }
        }
      case Nf:
        return e;
    }
  }
}
function t1(t) {
  return Et(t) === Bl;
}
Y.AsyncMode = Rf;
Y.ConcurrentMode = Bl;
Y.ContextConsumer = zl;
Y.ContextProvider = Vl;
Y.Element = Af;
Y.ForwardRef = Hl;
Y.Fragment = Ul;
Y.Lazy = ql;
Y.Memo = Wl;
Y.Portal = Nf;
Y.Profiler = jl;
Y.StrictMode = Fl;
Y.Suspense = Kl;
Y.isAsyncMode = function (t) {
  return t1(t) || Et(t) === Rf;
};
Y.isConcurrentMode = t1;
Y.isContextConsumer = function (t) {
  return Et(t) === zl;
};
Y.isContextProvider = function (t) {
  return Et(t) === Vl;
};
Y.isElement = function (t) {
  return typeof t == 'object' && t !== null && t.$$typeof === Af;
};
Y.isForwardRef = function (t) {
  return Et(t) === Hl;
};
Y.isFragment = function (t) {
  return Et(t) === Ul;
};
Y.isLazy = function (t) {
  return Et(t) === ql;
};
Y.isMemo = function (t) {
  return Et(t) === Wl;
};
Y.isPortal = function (t) {
  return Et(t) === Nf;
};
Y.isProfiler = function (t) {
  return Et(t) === jl;
};
Y.isStrictMode = function (t) {
  return Et(t) === Fl;
};
Y.isSuspense = function (t) {
  return Et(t) === Kl;
};
Y.isValidElementType = function (t) {
  return (
    typeof t == 'string' ||
    typeof t == 'function' ||
    t === Ul ||
    t === Bl ||
    t === jl ||
    t === Fl ||
    t === Kl ||
    t === VI ||
    (typeof t == 'object' &&
      t !== null &&
      (t.$$typeof === ql ||
        t.$$typeof === Wl ||
        t.$$typeof === Vl ||
        t.$$typeof === zl ||
        t.$$typeof === Hl ||
        t.$$typeof === BI ||
        t.$$typeof === HI ||
        t.$$typeof === KI ||
        t.$$typeof === zI))
  );
};
Y.typeOf = Et;
(function (t) {
  t.exports = Y;
})(jI);
var n1 = zh,
  WI = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
  qI = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
  r1 = {};
r1[n1.ForwardRef] = WI;
r1[n1.Memo] = qI;
var ng = {},
  GI = {
    get exports() {
      return ng;
    },
    set exports(t) {
      ng = t;
    }
  },
  J = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pf = Symbol.for('react.element'),
  Of = Symbol.for('react.portal'),
  Gl = Symbol.for('react.fragment'),
  Ql = Symbol.for('react.strict_mode'),
  Xl = Symbol.for('react.profiler'),
  Yl = Symbol.for('react.provider'),
  Jl = Symbol.for('react.context'),
  QI = Symbol.for('react.server_context'),
  Zl = Symbol.for('react.forward_ref'),
  eu = Symbol.for('react.suspense'),
  tu = Symbol.for('react.suspense_list'),
  nu = Symbol.for('react.memo'),
  ru = Symbol.for('react.lazy'),
  XI = Symbol.for('react.offscreen'),
  i1;
i1 = Symbol.for('react.module.reference');
function Nt(t) {
  if (typeof t == 'object' && t !== null) {
    var e = t.$$typeof;
    switch (e) {
      case Pf:
        switch (((t = t.type), t)) {
          case Gl:
          case Xl:
          case Ql:
          case eu:
          case tu:
            return t;
          default:
            switch (((t = t && t.$$typeof), t)) {
              case QI:
              case Jl:
              case Zl:
              case ru:
              case nu:
              case Yl:
                return t;
              default:
                return e;
            }
        }
      case Of:
        return e;
    }
  }
}
J.ContextConsumer = Jl;
J.ContextProvider = Yl;
J.Element = Pf;
J.ForwardRef = Zl;
J.Fragment = Gl;
J.Lazy = ru;
J.Memo = nu;
J.Portal = Of;
J.Profiler = Xl;
J.StrictMode = Ql;
J.Suspense = eu;
J.SuspenseList = tu;
J.isAsyncMode = function () {
  return !1;
};
J.isConcurrentMode = function () {
  return !1;
};
J.isContextConsumer = function (t) {
  return Nt(t) === Jl;
};
J.isContextProvider = function (t) {
  return Nt(t) === Yl;
};
J.isElement = function (t) {
  return typeof t == 'object' && t !== null && t.$$typeof === Pf;
};
J.isForwardRef = function (t) {
  return Nt(t) === Zl;
};
J.isFragment = function (t) {
  return Nt(t) === Gl;
};
J.isLazy = function (t) {
  return Nt(t) === ru;
};
J.isMemo = function (t) {
  return Nt(t) === nu;
};
J.isPortal = function (t) {
  return Nt(t) === Of;
};
J.isProfiler = function (t) {
  return Nt(t) === Xl;
};
J.isStrictMode = function (t) {
  return Nt(t) === Ql;
};
J.isSuspense = function (t) {
  return Nt(t) === eu;
};
J.isSuspenseList = function (t) {
  return Nt(t) === tu;
};
J.isValidElementType = function (t) {
  return (
    typeof t == 'string' ||
    typeof t == 'function' ||
    t === Gl ||
    t === Xl ||
    t === Ql ||
    t === eu ||
    t === tu ||
    t === XI ||
    (typeof t == 'object' &&
      t !== null &&
      (t.$$typeof === ru ||
        t.$$typeof === nu ||
        t.$$typeof === Yl ||
        t.$$typeof === Jl ||
        t.$$typeof === Zl ||
        t.$$typeof === i1 ||
        t.getModuleId !== void 0))
  );
};
J.typeOf = Nt;
(function (t) {
  t.exports = J;
})(GI);
function YI() {
  const t = UI();
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
const rg = { notify() {}, get: () => [] };
function JI(t, e) {
  let n,
    r = rg;
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
    n || ((n = e ? e.addNestedSub(o) : t.subscribe(o)), (r = YI()));
  }
  function u() {
    n && (n(), (n = void 0), r.clear(), (r = rg));
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
const ZI =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  ek = ZI ? I.useLayoutEffect : I.useEffect;
function tk({ store: t, context: e, children: n, serverState: r }) {
  const i = I.useMemo(() => {
      const a = JI(t);
      return { store: t, subscription: a, getServerState: r ? () => r : void 0 };
    }, [t, r]),
    s = I.useMemo(() => t.getState(), [t]);
  ek(() => {
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
  const o = e || Ii;
  return Z.createElement(o.Provider, { value: i }, n);
}
function s1(t = Ii) {
  const e = t === Ii ? FI : () => I.useContext(t);
  return function () {
    const { store: r } = e();
    return r;
  };
}
const nk = s1();
function rk(t = Ii) {
  const e = t === Ii ? nk : s1(t);
  return function () {
    return e().dispatch;
  };
}
const ik = rk();
bI(Sa.unstable_batchedUpdates);
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
 */ const o1 = function (t) {
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
  sk = function (t) {
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
  a1 = {
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
      return this.HAS_NATIVE_SUPPORT && !e ? btoa(t) : this.encodeByteArray(o1(t), e);
    },
    decodeString(t, e) {
      return this.HAS_NATIVE_SUPPORT && !e ? atob(t) : sk(this.decodeStringToByteArray(t, e));
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
        if ((++i, s == null || a == null || u == null || h == null)) throw new ok();
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
class ok extends Error {
  constructor() {
    super(...arguments), (this.name = 'DecodeBase64StringError');
  }
}
const ak = function (t) {
    const e = o1(t);
    return a1.encodeByteArray(e, !0);
  },
  Ja = function (t) {
    return ak(t).replace(/\./g, '');
  },
  l1 = function (t) {
    try {
      return a1.decodeString(t, !0);
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
 */ function lk() {
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
 */ const uk = () => lk().__FIREBASE_DEFAULTS__,
  ck = () => {
    if (typeof process > 'u' || typeof process.env > 'u') return;
    const t = {}.__FIREBASE_DEFAULTS__;
    if (t) return JSON.parse(t);
  },
  hk = () => {
    if (typeof document > 'u') return;
    let t;
    try {
      t = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const e = t && l1(t[1]);
    return e && JSON.parse(e);
  },
  xf = () => {
    try {
      return uk() || ck() || hk();
    } catch (t) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);
      return;
    }
  },
  u1 = (t) => {
    var e, n;
    return (n = (e = xf()) === null || e === void 0 ? void 0 : e.emulatorHosts) === null ||
      n === void 0
      ? void 0
      : n[t];
  },
  dk = (t) => {
    const e = u1(t);
    if (!e) return;
    const n = e.lastIndexOf(':');
    if (n <= 0 || n + 1 === e.length)
      throw new Error(`Invalid host ${e} with no separate hostname and port!`);
    const r = parseInt(e.substring(n + 1), 10);
    return e[0] === '[' ? [e.substring(1, n - 1), r] : [e.substring(0, n), r];
  },
  fk = () => {
    var t;
    return (t = xf()) === null || t === void 0 ? void 0 : t.config;
  },
  c1 = (t) => {
    var e;
    return (e = xf()) === null || e === void 0 ? void 0 : e[`_${t}`];
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
 */ class pk {
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
 */ function mk(t, e) {
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
  return [Ja(JSON.stringify(n)), Ja(JSON.stringify(o)), a].join('.');
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
 */ function qe() {
  return typeof navigator < 'u' && typeof navigator.userAgent == 'string'
    ? navigator.userAgent
    : '';
}
function gk() {
  return (
    typeof window < 'u' &&
    !!(window.cordova || window.phonegap || window.PhoneGap) &&
    /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qe())
  );
}
function yk() {
  const t =
    typeof chrome == 'object'
      ? chrome.runtime
      : typeof browser == 'object'
      ? browser.runtime
      : void 0;
  return typeof t == 'object' && t.id !== void 0;
}
function vk() {
  return typeof navigator == 'object' && navigator.product === 'ReactNative';
}
function wk() {
  const t = qe();
  return t.indexOf('MSIE ') >= 0 || t.indexOf('Trident/') >= 0;
}
function Ek() {
  try {
    return typeof indexedDB == 'object';
  } catch {
    return !1;
  }
}
function Sk() {
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
 */ const _k = 'FirebaseError';
class gn extends Error {
  constructor(e, n, r) {
    super(n),
      (this.code = e),
      (this.customData = r),
      (this.name = _k),
      Object.setPrototypeOf(this, gn.prototype),
      Error.captureStackTrace && Error.captureStackTrace(this, oo.prototype.create);
  }
}
class oo {
  constructor(e, n, r) {
    (this.service = e), (this.serviceName = n), (this.errors = r);
  }
  create(e, ...n) {
    const r = n[0] || {},
      i = `${this.service}/${e}`,
      s = this.errors[e],
      o = s ? Tk(s, r) : 'Error',
      a = `${this.serviceName}: ${o} (${i}).`;
    return new gn(i, a, r);
  }
}
function Tk(t, e) {
  return t.replace(Ik, (n, r) => {
    const i = e[r];
    return i != null ? String(i) : `<${r}?>`;
  });
}
const Ik = /\{\$([^}]+)}/g;
function kk(t) {
  for (const e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
  return !0;
}
function Za(t, e) {
  if (t === e) return !0;
  const n = Object.keys(t),
    r = Object.keys(e);
  for (const i of n) {
    if (!r.includes(i)) return !1;
    const s = t[i],
      o = e[i];
    if (ig(s) && ig(o)) {
      if (!Za(s, o)) return !1;
    } else if (s !== o) return !1;
  }
  for (const i of r) if (!n.includes(i)) return !1;
  return !0;
}
function ig(t) {
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
 */ function ao(t) {
  const e = [];
  for (const [n, r] of Object.entries(t))
    Array.isArray(r)
      ? r.forEach((i) => {
          e.push(encodeURIComponent(n) + '=' + encodeURIComponent(i));
        })
      : e.push(encodeURIComponent(n) + '=' + encodeURIComponent(r));
  return e.length ? '&' + e.join('&') : '';
}
function Ck(t, e) {
  const n = new Ak(t, e);
  return n.subscribe.bind(n);
}
class Ak {
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
    Nk(e, ['next', 'error', 'complete']) ? (i = e) : (i = { next: e, error: n, complete: r }),
      i.next === void 0 && (i.next = wc),
      i.error === void 0 && (i.error = wc),
      i.complete === void 0 && (i.complete = wc);
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
function Nk(t, e) {
  if (typeof t != 'object' || t === null) return !1;
  for (const n of e) if (n in t && typeof t[n] == 'function') return !0;
  return !1;
}
function wc() {}
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
 */ function tr(t) {
  return t && t._delegate ? t._delegate : t;
}
class Pr {
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
 */ const ur = '[DEFAULT]';
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
 */ class Rk {
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
      const r = new pk();
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
      if (Ok(e))
        try {
          this.getOrInitializeService({ instanceIdentifier: ur });
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
  clearInstance(e = ur) {
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
  isInitialized(e = ur) {
    return this.instances.has(e);
  }
  getOptions(e = ur) {
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
        instanceIdentifier: Pk(e),
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
  normalizeInstanceIdentifier(e = ur) {
    return this.component ? (this.component.multipleInstances ? e : ur) : e;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== 'EXPLICIT';
  }
}
function Pk(t) {
  return t === ur ? void 0 : t;
}
function Ok(t) {
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
 */ class xk {
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
    const n = new Rk(e, this);
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
 */ var G;
(function (t) {
  (t[(t.DEBUG = 0)] = 'DEBUG'),
    (t[(t.VERBOSE = 1)] = 'VERBOSE'),
    (t[(t.INFO = 2)] = 'INFO'),
    (t[(t.WARN = 3)] = 'WARN'),
    (t[(t.ERROR = 4)] = 'ERROR'),
    (t[(t.SILENT = 5)] = 'SILENT');
})(G || (G = {}));
const Dk = {
    debug: G.DEBUG,
    verbose: G.VERBOSE,
    info: G.INFO,
    warn: G.WARN,
    error: G.ERROR,
    silent: G.SILENT
  },
  $k = G.INFO,
  Lk = {
    [G.DEBUG]: 'log',
    [G.VERBOSE]: 'log',
    [G.INFO]: 'info',
    [G.WARN]: 'warn',
    [G.ERROR]: 'error'
  },
  Mk = (t, e, ...n) => {
    if (e < t.logLevel) return;
    const r = new Date().toISOString(),
      i = Lk[e];
    if (i) console[i](`[${r}]  ${t.name}:`, ...n);
    else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);
  };
class Df {
  constructor(e) {
    (this.name = e), (this._logLevel = $k), (this._logHandler = Mk), (this._userLogHandler = null);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(e) {
    if (!(e in G)) throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
    this._logLevel = e;
  }
  setLogLevel(e) {
    this._logLevel = typeof e == 'string' ? Dk[e] : e;
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
    this._userLogHandler && this._userLogHandler(this, G.DEBUG, ...e),
      this._logHandler(this, G.DEBUG, ...e);
  }
  log(...e) {
    this._userLogHandler && this._userLogHandler(this, G.VERBOSE, ...e),
      this._logHandler(this, G.VERBOSE, ...e);
  }
  info(...e) {
    this._userLogHandler && this._userLogHandler(this, G.INFO, ...e),
      this._logHandler(this, G.INFO, ...e);
  }
  warn(...e) {
    this._userLogHandler && this._userLogHandler(this, G.WARN, ...e),
      this._logHandler(this, G.WARN, ...e);
  }
  error(...e) {
    this._userLogHandler && this._userLogHandler(this, G.ERROR, ...e),
      this._logHandler(this, G.ERROR, ...e);
  }
}
const bk = (t, e) => e.some((n) => t instanceof n);
let sg, og;
function Uk() {
  return sg || (sg = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction]);
}
function Fk() {
  return (
    og ||
    (og = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey
    ])
  );
}
const h1 = new WeakMap(),
  Bh = new WeakMap(),
  d1 = new WeakMap(),
  Ec = new WeakMap(),
  $f = new WeakMap();
function jk(t) {
  const e = new Promise((n, r) => {
    const i = () => {
        t.removeEventListener('success', s), t.removeEventListener('error', o);
      },
      s = () => {
        n(Bn(t.result)), i();
      },
      o = () => {
        r(t.error), i();
      };
    t.addEventListener('success', s), t.addEventListener('error', o);
  });
  return (
    e
      .then((n) => {
        n instanceof IDBCursor && h1.set(n, t);
      })
      .catch(() => {}),
    $f.set(e, t),
    e
  );
}
function Vk(t) {
  if (Bh.has(t)) return;
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
  Bh.set(t, e);
}
let Hh = {
  get(t, e, n) {
    if (t instanceof IDBTransaction) {
      if (e === 'done') return Bh.get(t);
      if (e === 'objectStoreNames') return t.objectStoreNames || d1.get(t);
      if (e === 'store')
        return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0]);
    }
    return Bn(t[e]);
  },
  set(t, e, n) {
    return (t[e] = n), !0;
  },
  has(t, e) {
    return t instanceof IDBTransaction && (e === 'done' || e === 'store') ? !0 : e in t;
  }
};
function zk(t) {
  Hh = t(Hh);
}
function Bk(t) {
  return t === IDBDatabase.prototype.transaction &&
    !('objectStoreNames' in IDBTransaction.prototype)
    ? function (e, ...n) {
        const r = t.call(Sc(this), e, ...n);
        return d1.set(r, e.sort ? e.sort() : [e]), Bn(r);
      }
    : Fk().includes(t)
    ? function (...e) {
        return t.apply(Sc(this), e), Bn(h1.get(this));
      }
    : function (...e) {
        return Bn(t.apply(Sc(this), e));
      };
}
function Hk(t) {
  return typeof t == 'function'
    ? Bk(t)
    : (t instanceof IDBTransaction && Vk(t), bk(t, Uk()) ? new Proxy(t, Hh) : t);
}
function Bn(t) {
  if (t instanceof IDBRequest) return jk(t);
  if (Ec.has(t)) return Ec.get(t);
  const e = Hk(t);
  return e !== t && (Ec.set(t, e), $f.set(e, t)), e;
}
const Sc = (t) => $f.get(t);
function Kk(t, e, { blocked: n, upgrade: r, blocking: i, terminated: s } = {}) {
  const o = indexedDB.open(t, e),
    a = Bn(o);
  return (
    r &&
      o.addEventListener('upgradeneeded', (l) => {
        r(Bn(o.result), l.oldVersion, l.newVersion, Bn(o.transaction));
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
const Wk = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'],
  qk = ['put', 'add', 'delete', 'clear'],
  _c = new Map();
function ag(t, e) {
  if (!(t instanceof IDBDatabase && !(e in t) && typeof e == 'string')) return;
  if (_c.get(e)) return _c.get(e);
  const n = e.replace(/FromIndex$/, ''),
    r = e !== n,
    i = qk.includes(n);
  if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !(i || Wk.includes(n))) return;
  const s = async function (o, ...a) {
    const l = this.transaction(o, i ? 'readwrite' : 'readonly');
    let u = l.store;
    return r && (u = u.index(a.shift())), (await Promise.all([u[n](...a), i && l.done]))[0];
  };
  return _c.set(e, s), s;
}
zk((t) => ({
  ...t,
  get: (e, n, r) => ag(e, n) || t.get(e, n, r),
  has: (e, n) => !!ag(e, n) || t.has(e, n)
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
 */ class Gk {
  constructor(e) {
    this.container = e;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((n) => {
        if (Qk(n)) {
          const r = n.getImmediate();
          return `${r.library}/${r.version}`;
        } else return null;
      })
      .filter((n) => n)
      .join(' ');
  }
}
function Qk(t) {
  const e = t.getComponent();
  return (e == null ? void 0 : e.type) === 'VERSION';
}
const Kh = '@firebase/app',
  lg = '0.9.4';
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
 */ const Or = new Df('@firebase/app'),
  Xk = '@firebase/app-compat',
  Yk = '@firebase/analytics-compat',
  Jk = '@firebase/analytics',
  Zk = '@firebase/app-check-compat',
  eC = '@firebase/app-check',
  tC = '@firebase/auth',
  nC = '@firebase/auth-compat',
  rC = '@firebase/database',
  iC = '@firebase/database-compat',
  sC = '@firebase/functions',
  oC = '@firebase/functions-compat',
  aC = '@firebase/installations',
  lC = '@firebase/installations-compat',
  uC = '@firebase/messaging',
  cC = '@firebase/messaging-compat',
  hC = '@firebase/performance',
  dC = '@firebase/performance-compat',
  fC = '@firebase/remote-config',
  pC = '@firebase/remote-config-compat',
  mC = '@firebase/storage',
  gC = '@firebase/storage-compat',
  yC = '@firebase/firestore',
  vC = '@firebase/firestore-compat',
  wC = 'firebase',
  EC = '9.17.2';
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
 */ const Wh = '[DEFAULT]',
  SC = {
    [Kh]: 'fire-core',
    [Xk]: 'fire-core-compat',
    [Jk]: 'fire-analytics',
    [Yk]: 'fire-analytics-compat',
    [eC]: 'fire-app-check',
    [Zk]: 'fire-app-check-compat',
    [tC]: 'fire-auth',
    [nC]: 'fire-auth-compat',
    [rC]: 'fire-rtdb',
    [iC]: 'fire-rtdb-compat',
    [sC]: 'fire-fn',
    [oC]: 'fire-fn-compat',
    [aC]: 'fire-iid',
    [lC]: 'fire-iid-compat',
    [uC]: 'fire-fcm',
    [cC]: 'fire-fcm-compat',
    [hC]: 'fire-perf',
    [dC]: 'fire-perf-compat',
    [fC]: 'fire-rc',
    [pC]: 'fire-rc-compat',
    [mC]: 'fire-gcs',
    [gC]: 'fire-gcs-compat',
    [yC]: 'fire-fst',
    [vC]: 'fire-fst-compat',
    'fire-js': 'fire-js',
    [wC]: 'fire-js-all'
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
 */ const el = new Map(),
  qh = new Map();
function _C(t, e) {
  try {
    t.container.addComponent(e);
  } catch (n) {
    Or.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`, n);
  }
}
function ki(t) {
  const e = t.name;
  if (qh.has(e)) return Or.debug(`There were multiple attempts to register component ${e}.`), !1;
  qh.set(e, t);
  for (const n of el.values()) _C(n, t);
  return !0;
}
function Lf(t, e) {
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
 */ const TC = {
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
  Hn = new oo('app', 'Firebase', TC);
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
 */ class IC {
  constructor(e, n, r) {
    (this._isDeleted = !1),
      (this._options = Object.assign({}, e)),
      (this._config = Object.assign({}, n)),
      (this._name = n.name),
      (this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled),
      (this._container = r),
      this.container.addComponent(new Pr('app', () => this, 'PUBLIC'));
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
    if (this.isDeleted) throw Hn.create('app-deleted', { appName: this._name });
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
 */ const lo = EC;
function f1(t, e = {}) {
  let n = t;
  typeof e != 'object' && (e = { name: e });
  const r = Object.assign({ name: Wh, automaticDataCollectionEnabled: !1 }, e),
    i = r.name;
  if (typeof i != 'string' || !i) throw Hn.create('bad-app-name', { appName: String(i) });
  if ((n || (n = fk()), !n)) throw Hn.create('no-options');
  const s = el.get(i);
  if (s) {
    if (Za(n, s.options) && Za(r, s.config)) return s;
    throw Hn.create('duplicate-app', { appName: i });
  }
  const o = new xk(i);
  for (const l of qh.values()) o.addComponent(l);
  const a = new IC(n, r, o);
  return el.set(i, a), a;
}
function p1(t = Wh) {
  const e = el.get(t);
  if (!e && t === Wh) return f1();
  if (!e) throw Hn.create('no-app', { appName: t });
  return e;
}
function Kn(t, e, n) {
  var r;
  let i = (r = SC[t]) !== null && r !== void 0 ? r : t;
  n && (i += `-${n}`);
  const s = i.match(/\s|\//),
    o = e.match(/\s|\//);
  if (s || o) {
    const a = [`Unable to register library "${i}" with version "${e}":`];
    s && a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),
      s && o && a.push('and'),
      o && a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),
      Or.warn(a.join(' '));
    return;
  }
  ki(new Pr(`${i}-version`, () => ({ library: i, version: e }), 'VERSION'));
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
 */ const kC = 'firebase-heartbeat-database',
  CC = 1,
  Bs = 'firebase-heartbeat-store';
let Tc = null;
function m1() {
  return (
    Tc ||
      (Tc = Kk(kC, CC, {
        upgrade: (t, e) => {
          switch (e) {
            case 0:
              t.createObjectStore(Bs);
          }
        }
      }).catch((t) => {
        throw Hn.create('idb-open', { originalErrorMessage: t.message });
      })),
    Tc
  );
}
async function AC(t) {
  try {
    return (await m1()).transaction(Bs).objectStore(Bs).get(g1(t));
  } catch (e) {
    if (e instanceof gn) Or.warn(e.message);
    else {
      const n = Hn.create('idb-get', { originalErrorMessage: e == null ? void 0 : e.message });
      Or.warn(n.message);
    }
  }
}
async function ug(t, e) {
  try {
    const r = (await m1()).transaction(Bs, 'readwrite');
    return await r.objectStore(Bs).put(e, g1(t)), r.done;
  } catch (n) {
    if (n instanceof gn) Or.warn(n.message);
    else {
      const r = Hn.create('idb-set', { originalErrorMessage: n == null ? void 0 : n.message });
      Or.warn(r.message);
    }
  }
}
function g1(t) {
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
 */ const NC = 1024,
  RC = 30 * 24 * 60 * 60 * 1e3;
class PC {
  constructor(e) {
    (this.container = e), (this._heartbeatsCache = null);
    const n = this.container.getProvider('app').getImmediate();
    (this._storage = new xC(n)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((r) => ((this._heartbeatsCache = r), r)));
  }
  async triggerHeartbeat() {
    const n = this.container.getProvider('platform-logger').getImmediate().getPlatformInfoString(),
      r = cg();
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
          return Date.now() - s <= RC;
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
    const e = cg(),
      { heartbeatsToSend: n, unsentEntries: r } = OC(this._heartbeatsCache.heartbeats),
      i = Ja(JSON.stringify({ version: 2, heartbeats: n }));
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
function cg() {
  return new Date().toISOString().substring(0, 10);
}
function OC(t, e = NC) {
  const n = [];
  let r = t.slice();
  for (const i of t) {
    const s = n.find((o) => o.agent === i.agent);
    if (s) {
      if ((s.dates.push(i.date), hg(n) > e)) {
        s.dates.pop();
        break;
      }
    } else if ((n.push({ agent: i.agent, dates: [i.date] }), hg(n) > e)) {
      n.pop();
      break;
    }
    r = r.slice(1);
  }
  return { heartbeatsToSend: n, unsentEntries: r };
}
class xC {
  constructor(e) {
    (this.app = e), (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return Ek()
      ? Sk()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    return (await this._canUseIndexedDBPromise)
      ? (await AC(this.app)) || { heartbeats: [] }
      : { heartbeats: [] };
  }
  async overwrite(e) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return ug(this.app, {
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
      return ug(this.app, {
        lastSentHeartbeatDate:
          (n = e.lastSentHeartbeatDate) !== null && n !== void 0 ? n : i.lastSentHeartbeatDate,
        heartbeats: [...i.heartbeats, ...e.heartbeats]
      });
    } else return;
  }
}
function hg(t) {
  return Ja(JSON.stringify({ version: 2, heartbeats: t })).length;
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
 */ function DC(t) {
  ki(new Pr('platform-logger', (e) => new Gk(e), 'PRIVATE')),
    ki(new Pr('heartbeat', (e) => new PC(e), 'PRIVATE')),
    Kn(Kh, lg, t),
    Kn(Kh, lg, 'esm2017'),
    Kn('fire-js', '');
}
DC('');
var $C = 'firebase',
  LC = '9.17.2';
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
 */ Kn($C, LC, 'app');
var MC =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : typeof self < 'u'
      ? self
      : {},
  O,
  Mf = Mf || {},
  U = MC || self;
function tl() {}
function iu(t) {
  var e = typeof t;
  return (
    (e = e != 'object' ? e : t ? (Array.isArray(t) ? 'array' : e) : 'null'),
    e == 'array' || (e == 'object' && typeof t.length == 'number')
  );
}
function uo(t) {
  var e = typeof t;
  return (e == 'object' && t != null) || e == 'function';
}
function bC(t) {
  return (Object.prototype.hasOwnProperty.call(t, Ic) && t[Ic]) || (t[Ic] = ++UC);
}
var Ic = 'closure_uid_' + ((1e9 * Math.random()) >>> 0),
  UC = 0;
function FC(t, e, n) {
  return t.call.apply(t.bind, arguments);
}
function jC(t, e, n) {
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
function He(t, e, n) {
  return (
    Function.prototype.bind && Function.prototype.bind.toString().indexOf('native code') != -1
      ? (He = FC)
      : (He = jC),
    He.apply(null, arguments)
  );
}
function Ko(t, e) {
  var n = Array.prototype.slice.call(arguments, 1);
  return function () {
    var r = n.slice();
    return r.push.apply(r, arguments), t.apply(this, r);
  };
}
function Me(t, e) {
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
function nr() {
  (this.s = this.s), (this.o = this.o);
}
var VC = 0;
nr.prototype.s = !1;
nr.prototype.na = function () {
  !this.s && ((this.s = !0), this.M(), VC != 0) && bC(this);
};
nr.prototype.M = function () {
  if (this.o) for (; this.o.length; ) this.o.shift()();
};
const y1 = Array.prototype.indexOf
  ? function (t, e) {
      return Array.prototype.indexOf.call(t, e, void 0);
    }
  : function (t, e) {
      if (typeof t == 'string') return typeof e != 'string' || e.length != 1 ? -1 : t.indexOf(e, 0);
      for (let n = 0; n < t.length; n++) if (n in t && t[n] === e) return n;
      return -1;
    };
function bf(t) {
  const e = t.length;
  if (0 < e) {
    const n = Array(e);
    for (let r = 0; r < e; r++) n[r] = t[r];
    return n;
  }
  return [];
}
function dg(t, e) {
  for (let n = 1; n < arguments.length; n++) {
    const r = arguments[n];
    if (iu(r)) {
      const i = t.length || 0,
        s = r.length || 0;
      t.length = i + s;
      for (let o = 0; o < s; o++) t[i + o] = r[o];
    } else t.push(r);
  }
}
function Ke(t, e) {
  (this.type = t), (this.g = this.target = e), (this.defaultPrevented = !1);
}
Ke.prototype.h = function () {
  this.defaultPrevented = !0;
};
var zC = (function () {
  if (!U.addEventListener || !Object.defineProperty) return !1;
  var t = !1,
    e = Object.defineProperty({}, 'passive', {
      get: function () {
        t = !0;
      }
    });
  try {
    U.addEventListener('test', tl, e), U.removeEventListener('test', tl, e);
  } catch {}
  return t;
})();
function nl(t) {
  return /^[\s\xa0]*$/.test(t);
}
var fg = String.prototype.trim
  ? function (t) {
      return t.trim();
    }
  : function (t) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1];
    };
function kc(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
function su() {
  var t = U.navigator;
  return t && (t = t.userAgent) ? t : '';
}
function jt(t) {
  return su().indexOf(t) != -1;
}
function Uf(t) {
  return Uf[' '](t), t;
}
Uf[' '] = tl;
function BC(t) {
  var e = WC;
  return Object.prototype.hasOwnProperty.call(e, 9) ? e[9] : (e[9] = t(9));
}
var HC = jt('Opera'),
  Ci = jt('Trident') || jt('MSIE'),
  v1 = jt('Edge'),
  Gh = v1 || Ci,
  w1 =
    jt('Gecko') &&
    !(su().toLowerCase().indexOf('webkit') != -1 && !jt('Edge')) &&
    !(jt('Trident') || jt('MSIE')) &&
    !jt('Edge'),
  KC = su().toLowerCase().indexOf('webkit') != -1 && !jt('Edge');
function E1() {
  var t = U.document;
  return t ? t.documentMode : void 0;
}
var rl;
e: {
  var Cc = '',
    Ac = (function () {
      var t = su();
      if (w1) return /rv:([^\);]+)(\)|;)/.exec(t);
      if (v1) return /Edge\/([\d\.]+)/.exec(t);
      if (Ci) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);
      if (KC) return /WebKit\/(\S+)/.exec(t);
      if (HC) return /(?:Version)[ \/]?(\S+)/.exec(t);
    })();
  if ((Ac && (Cc = Ac ? Ac[1] : ''), Ci)) {
    var Nc = E1();
    if (Nc != null && Nc > parseFloat(Cc)) {
      rl = String(Nc);
      break e;
    }
  }
  rl = Cc;
}
var WC = {};
function qC() {
  return BC(function () {
    let t = 0;
    const e = fg(String(rl)).split('.'),
      n = fg('9').split('.'),
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
          kc(
            i[1].length == 0 ? 0 : parseInt(i[1], 10),
            s[1].length == 0 ? 0 : parseInt(s[1], 10)
          ) ||
          kc(i[2].length == 0, s[2].length == 0) ||
          kc(i[2], s[2])),
          (i = i[3]),
          (s = s[3]);
      } while (t == 0);
    }
    return 0 <= t;
  });
}
var Qh;
if (U.document && Ci) {
  var pg = E1();
  Qh = pg || parseInt(rl, 10) || void 0;
} else Qh = void 0;
var GC = Qh;
function Hs(t, e) {
  if (
    (Ke.call(this, t ? t.type : ''),
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
      if (w1) {
        e: {
          try {
            Uf(e.nodeName);
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
        typeof t.pointerType == 'string' ? t.pointerType : QC[t.pointerType] || ''),
      (this.state = t.state),
      (this.i = t),
      t.defaultPrevented && Hs.X.h.call(this);
  }
}
Me(Hs, Ke);
var QC = { 2: 'touch', 3: 'pen', 4: 'mouse' };
Hs.prototype.h = function () {
  Hs.X.h.call(this);
  var t = this.i;
  t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
};
var co = 'closure_listenable_' + ((1e6 * Math.random()) | 0),
  XC = 0;
function YC(t, e, n, r, i) {
  (this.listener = t),
    (this.proxy = null),
    (this.src = e),
    (this.type = n),
    (this.capture = !!r),
    (this.ha = i),
    (this.key = ++XC),
    (this.ba = this.ea = !1);
}
function ou(t) {
  (t.ba = !0), (t.listener = null), (t.proxy = null), (t.src = null), (t.ha = null);
}
function Ff(t, e, n) {
  for (const r in t) e.call(n, t[r], r, t);
}
function S1(t) {
  const e = {};
  for (const n in t) e[n] = t[n];
  return e;
}
const mg =
  'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
    ' '
  );
function _1(t, e) {
  let n, r;
  for (let i = 1; i < arguments.length; i++) {
    r = arguments[i];
    for (n in r) t[n] = r[n];
    for (let s = 0; s < mg.length; s++)
      (n = mg[s]), Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }
}
function au(t) {
  (this.src = t), (this.g = {}), (this.h = 0);
}
au.prototype.add = function (t, e, n, r, i) {
  var s = t.toString();
  (t = this.g[s]), t || ((t = this.g[s] = []), this.h++);
  var o = Yh(t, e, r, i);
  return (
    -1 < o
      ? ((e = t[o]), n || (e.ea = !1))
      : ((e = new YC(e, this.src, s, !!r, i)), (e.ea = n), t.push(e)),
    e
  );
};
function Xh(t, e) {
  var n = e.type;
  if (n in t.g) {
    var r = t.g[n],
      i = y1(r, e),
      s;
    (s = 0 <= i) && Array.prototype.splice.call(r, i, 1),
      s && (ou(e), t.g[n].length == 0 && (delete t.g[n], t.h--));
  }
}
function Yh(t, e, n, r) {
  for (var i = 0; i < t.length; ++i) {
    var s = t[i];
    if (!s.ba && s.listener == e && s.capture == !!n && s.ha == r) return i;
  }
  return -1;
}
var jf = 'closure_lm_' + ((1e6 * Math.random()) | 0),
  Rc = {};
function T1(t, e, n, r, i) {
  if (r && r.once) return k1(t, e, n, r, i);
  if (Array.isArray(e)) {
    for (var s = 0; s < e.length; s++) T1(t, e[s], n, r, i);
    return null;
  }
  return (n = Bf(n)), t && t[co] ? t.N(e, n, uo(r) ? !!r.capture : !!r, i) : I1(t, e, n, !1, r, i);
}
function I1(t, e, n, r, i, s) {
  if (!e) throw Error('Invalid event type');
  var o = uo(i) ? !!i.capture : !!i,
    a = zf(t);
  if ((a || (t[jf] = a = new au(t)), (n = a.add(e, n, r, o, s)), n.proxy)) return n;
  if (((r = JC()), (n.proxy = r), (r.src = t), (r.listener = n), t.addEventListener))
    zC || (i = o), i === void 0 && (i = !1), t.addEventListener(e.toString(), r, i);
  else if (t.attachEvent) t.attachEvent(A1(e.toString()), r);
  else if (t.addListener && t.removeListener) t.addListener(r);
  else throw Error('addEventListener and attachEvent are unavailable.');
  return n;
}
function JC() {
  function t(n) {
    return e.call(t.src, t.listener, n);
  }
  const e = ZC;
  return t;
}
function k1(t, e, n, r, i) {
  if (Array.isArray(e)) {
    for (var s = 0; s < e.length; s++) k1(t, e[s], n, r, i);
    return null;
  }
  return (n = Bf(n)), t && t[co] ? t.O(e, n, uo(r) ? !!r.capture : !!r, i) : I1(t, e, n, !0, r, i);
}
function C1(t, e, n, r, i) {
  if (Array.isArray(e)) for (var s = 0; s < e.length; s++) C1(t, e[s], n, r, i);
  else
    (r = uo(r) ? !!r.capture : !!r),
      (n = Bf(n)),
      t && t[co]
        ? ((t = t.i),
          (e = String(e).toString()),
          e in t.g &&
            ((s = t.g[e]),
            (n = Yh(s, n, r, i)),
            -1 < n &&
              (ou(s[n]),
              Array.prototype.splice.call(s, n, 1),
              s.length == 0 && (delete t.g[e], t.h--))))
        : t &&
          (t = zf(t)) &&
          ((e = t.g[e.toString()]),
          (t = -1),
          e && (t = Yh(e, n, r, i)),
          (n = -1 < t ? e[t] : null) && Vf(n));
}
function Vf(t) {
  if (typeof t != 'number' && t && !t.ba) {
    var e = t.src;
    if (e && e[co]) Xh(e.i, t);
    else {
      var n = t.type,
        r = t.proxy;
      e.removeEventListener
        ? e.removeEventListener(n, r, t.capture)
        : e.detachEvent
        ? e.detachEvent(A1(n), r)
        : e.addListener && e.removeListener && e.removeListener(r),
        (n = zf(e)) ? (Xh(n, t), n.h == 0 && ((n.src = null), (e[jf] = null))) : ou(t);
    }
  }
}
function A1(t) {
  return t in Rc ? Rc[t] : (Rc[t] = 'on' + t);
}
function ZC(t, e) {
  if (t.ba) t = !0;
  else {
    e = new Hs(e, this);
    var n = t.listener,
      r = t.ha || t.src;
    t.ea && Vf(t), (t = n.call(r, e));
  }
  return t;
}
function zf(t) {
  return (t = t[jf]), t instanceof au ? t : null;
}
var Pc = '__closure_events_fn_' + ((1e9 * Math.random()) >>> 0);
function Bf(t) {
  return typeof t == 'function'
    ? t
    : (t[Pc] ||
        (t[Pc] = function (e) {
          return t.handleEvent(e);
        }),
      t[Pc]);
}
function Ae() {
  nr.call(this), (this.i = new au(this)), (this.P = this), (this.I = null);
}
Me(Ae, nr);
Ae.prototype[co] = !0;
Ae.prototype.removeEventListener = function (t, e, n, r) {
  C1(this, t, e, n, r);
};
function De(t, e) {
  var n,
    r = t.I;
  if (r) for (n = []; r; r = r.I) n.push(r);
  if (((t = t.P), (r = e.type || e), typeof e == 'string')) e = new Ke(e, t);
  else if (e instanceof Ke) e.target = e.target || t;
  else {
    var i = e;
    (e = new Ke(r, t)), _1(e, i);
  }
  if (((i = !0), n))
    for (var s = n.length - 1; 0 <= s; s--) {
      var o = (e.g = n[s]);
      i = Wo(o, r, !0, e) && i;
    }
  if (((o = e.g = t), (i = Wo(o, r, !0, e) && i), (i = Wo(o, r, !1, e) && i), n))
    for (s = 0; s < n.length; s++) (o = e.g = n[s]), (i = Wo(o, r, !1, e) && i);
}
Ae.prototype.M = function () {
  if ((Ae.X.M.call(this), this.i)) {
    var t = this.i,
      e;
    for (e in t.g) {
      for (var n = t.g[e], r = 0; r < n.length; r++) ou(n[r]);
      delete t.g[e], t.h--;
    }
  }
  this.I = null;
};
Ae.prototype.N = function (t, e, n, r) {
  return this.i.add(String(t), e, !1, n, r);
};
Ae.prototype.O = function (t, e, n, r) {
  return this.i.add(String(t), e, !0, n, r);
};
function Wo(t, e, n, r) {
  if (((e = t.i.g[String(e)]), !e)) return !0;
  e = e.concat();
  for (var i = !0, s = 0; s < e.length; ++s) {
    var o = e[s];
    if (o && !o.ba && o.capture == n) {
      var a = o.listener,
        l = o.ha || o.src;
      o.ea && Xh(t.i, o), (i = a.call(l, r) !== !1 && i);
    }
  }
  return i && !r.defaultPrevented;
}
var Hf = U.JSON.stringify;
function eA() {
  var t = P1;
  let e = null;
  return t.g && ((e = t.g), (t.g = t.g.next), t.g || (t.h = null), (e.next = null)), e;
}
class tA {
  constructor() {
    this.h = this.g = null;
  }
  add(e, n) {
    const r = N1.get();
    r.set(e, n), this.h ? (this.h.next = r) : (this.g = r), (this.h = r);
  }
}
var N1 = new (class {
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
  () => new nA(),
  (t) => t.reset()
);
class nA {
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
function rA(t) {
  U.setTimeout(() => {
    throw t;
  }, 0);
}
function R1(t, e) {
  Jh || iA(), Zh || (Jh(), (Zh = !0)), P1.add(t, e);
}
var Jh;
function iA() {
  var t = U.Promise.resolve(void 0);
  Jh = function () {
    t.then(sA);
  };
}
var Zh = !1,
  P1 = new tA();
function sA() {
  for (var t; (t = eA()); ) {
    try {
      t.h.call(t.g);
    } catch (n) {
      rA(n);
    }
    var e = N1;
    e.j(t), 100 > e.h && (e.h++, (t.next = e.g), (e.g = t));
  }
  Zh = !1;
}
function lu(t, e) {
  Ae.call(this),
    (this.h = t || 1),
    (this.g = e || U),
    (this.j = He(this.lb, this)),
    (this.l = Date.now());
}
Me(lu, Ae);
O = lu.prototype;
O.ca = !1;
O.R = null;
O.lb = function () {
  if (this.ca) {
    var t = Date.now() - this.l;
    0 < t && t < 0.8 * this.h
      ? (this.R = this.g.setTimeout(this.j, this.h - t))
      : (this.R && (this.g.clearTimeout(this.R), (this.R = null)),
        De(this, 'tick'),
        this.ca && (Kf(this), this.start()));
  }
};
O.start = function () {
  (this.ca = !0), this.R || ((this.R = this.g.setTimeout(this.j, this.h)), (this.l = Date.now()));
};
function Kf(t) {
  (t.ca = !1), t.R && (t.g.clearTimeout(t.R), (t.R = null));
}
O.M = function () {
  lu.X.M.call(this), Kf(this), delete this.g;
};
function Wf(t, e, n) {
  if (typeof t == 'function') n && (t = He(t, n));
  else if (t && typeof t.handleEvent == 'function') t = He(t.handleEvent, t);
  else throw Error('Invalid listener argument');
  return 2147483647 < Number(e) ? -1 : U.setTimeout(t, e || 0);
}
function O1(t) {
  t.g = Wf(() => {
    (t.g = null), t.i && ((t.i = !1), O1(t));
  }, t.j);
  const e = t.h;
  (t.h = null), t.m.apply(null, e);
}
class oA extends nr {
  constructor(e, n) {
    super(), (this.m = e), (this.j = n), (this.h = null), (this.i = !1), (this.g = null);
  }
  l(e) {
    (this.h = arguments), this.g ? (this.i = !0) : O1(this);
  }
  M() {
    super.M(), this.g && (U.clearTimeout(this.g), (this.g = null), (this.i = !1), (this.h = null));
  }
}
function Ks(t) {
  nr.call(this), (this.h = t), (this.g = {});
}
Me(Ks, nr);
var gg = [];
function x1(t, e, n, r) {
  Array.isArray(n) || (n && (gg[0] = n.toString()), (n = gg));
  for (var i = 0; i < n.length; i++) {
    var s = T1(e, n[i], r || t.handleEvent, !1, t.h || t);
    if (!s) break;
    t.g[s.key] = s;
  }
}
function D1(t) {
  Ff(
    t.g,
    function (e, n) {
      this.g.hasOwnProperty(n) && Vf(e);
    },
    t
  ),
    (t.g = {});
}
Ks.prototype.M = function () {
  Ks.X.M.call(this), D1(this);
};
Ks.prototype.handleEvent = function () {
  throw Error('EventHandler.handleEvent not implemented');
};
function uu() {
  this.g = !0;
}
uu.prototype.Aa = function () {
  this.g = !1;
};
function aA(t, e, n, r, i, s) {
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
function lA(t, e, n, r, i, s, o) {
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
function Zr(t, e, n, r) {
  t.info(function () {
    return 'XMLHTTP TEXT (' + e + '): ' + cA(t, n) + (r ? ' ' + r : '');
  });
}
function uA(t, e) {
  t.info(function () {
    return 'TIMEOUT: ' + e;
  });
}
uu.prototype.info = function () {};
function cA(t, e) {
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
    return Hf(n);
  } catch {
    return e;
  }
}
var br = {},
  yg = null;
function cu() {
  return (yg = yg || new Ae());
}
br.Pa = 'serverreachability';
function $1(t) {
  Ke.call(this, br.Pa, t);
}
Me($1, Ke);
function Ws(t) {
  const e = cu();
  De(e, new $1(e));
}
br.STAT_EVENT = 'statevent';
function L1(t, e) {
  Ke.call(this, br.STAT_EVENT, t), (this.stat = e);
}
Me(L1, Ke);
function Xe(t) {
  const e = cu();
  De(e, new L1(e, t));
}
br.Qa = 'timingevent';
function M1(t, e) {
  Ke.call(this, br.Qa, t), (this.size = e);
}
Me(M1, Ke);
function ho(t, e) {
  if (typeof t != 'function') throw Error('Fn must not be null and must be a function');
  return U.setTimeout(function () {
    t();
  }, e);
}
var hu = { NO_ERROR: 0, mb: 1, zb: 2, yb: 3, tb: 4, xb: 5, Ab: 6, Ma: 7, TIMEOUT: 8, Db: 9 },
  b1 = {
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
function qf() {}
qf.prototype.h = null;
function vg(t) {
  return t.h || (t.h = t.i());
}
function U1() {}
var fo = { OPEN: 'a', qb: 'b', Na: 'c', Cb: 'd' };
function Gf() {
  Ke.call(this, 'd');
}
Me(Gf, Ke);
function Qf() {
  Ke.call(this, 'c');
}
Me(Qf, Ke);
var ed;
function du() {}
Me(du, qf);
du.prototype.g = function () {
  return new XMLHttpRequest();
};
du.prototype.i = function () {
  return {};
};
ed = new du();
function po(t, e, n, r) {
  (this.l = t),
    (this.j = e),
    (this.m = n),
    (this.U = r || 1),
    (this.S = new Ks(this)),
    (this.O = hA),
    (t = Gh ? 125 : void 0),
    (this.T = new lu(t)),
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
    (this.h = new F1());
}
function F1() {
  (this.i = null), (this.g = ''), (this.h = !1);
}
var hA = 45e3,
  td = {},
  il = {};
O = po.prototype;
O.setTimeout = function (t) {
  this.O = t;
};
function nd(t, e, n) {
  (t.K = 1), (t.v = pu(cn(e))), (t.s = n), (t.P = !0), j1(t, null);
}
function j1(t, e) {
  (t.F = Date.now()), mo(t), (t.A = cn(t.v));
  var n = t.A,
    r = t.U;
  Array.isArray(r) || (r = [String(r)]),
    G1(n.i, 't', r),
    (t.C = 0),
    (n = t.l.H),
    (t.h = new F1()),
    (t.g = mw(t.l, n ? e : null, !t.s)),
    0 < t.N && (t.L = new oA(He(t.La, t, t.g), t.N)),
    x1(t.S, t.g, 'readystatechange', t.ib),
    (e = t.H ? S1(t.H) : {}),
    t.s
      ? (t.u || (t.u = 'POST'),
        (e['Content-Type'] = 'application/x-www-form-urlencoded'),
        t.g.da(t.A, t.u, t.s, e))
      : ((t.u = 'GET'), t.g.da(t.A, t.u, null, e)),
    Ws(),
    aA(t.j, t.u, t.A, t.m, t.U, t.s);
}
O.ib = function (t) {
  t = t.target;
  const e = this.L;
  e && en(t) == 3 ? e.l() : this.La(t);
};
O.La = function (t) {
  try {
    if (t == this.g)
      e: {
        const c = en(this.g);
        var e = this.g.Ea();
        const h = this.g.aa();
        if (!(3 > c) && (c != 3 || Gh || (this.g && (this.h.h || this.g.fa() || _g(this.g))))) {
          this.I || c != 4 || e == 7 || (e == 8 || 0 >= h ? Ws(3) : Ws(2)), fu(this);
          var n = this.g.aa();
          this.Y = n;
          t: if (V1(this)) {
            var r = _g(this.g);
            t = '';
            var i = r.length,
              s = en(this.g) == 4;
            if (!this.h.i) {
              if (typeof TextDecoder > 'u') {
                fr(this), gs(this);
                var o = '';
                break t;
              }
              this.h.i = new U.TextDecoder();
            }
            for (e = 0; e < i; e++)
              (this.h.h = !0), (t += this.h.i.decode(r[e], { stream: s && e == i - 1 }));
            r.splice(0, i), (this.h.g += t), (this.C = 0), (o = this.h.g);
          } else o = this.g.fa();
          if (((this.i = n == 200), lA(this.j, this.u, this.A, this.m, this.U, c, n), this.i)) {
            if (this.Z && !this.J) {
              t: {
                if (this.g) {
                  var a,
                    l = this.g;
                  if (
                    (a = l.g ? l.g.getResponseHeader('X-HTTP-Initial-Response') : null) &&
                    !nl(a)
                  ) {
                    var u = a;
                    break t;
                  }
                }
                u = null;
              }
              if ((n = u))
                Zr(this.j, this.m, n, 'Initial handshake response via X-HTTP-Initial-Response'),
                  (this.J = !0),
                  rd(this, n);
              else {
                (this.i = !1), (this.o = 3), Xe(12), fr(this), gs(this);
                break e;
              }
            }
            this.P
              ? (z1(this, c, o),
                Gh && this.i && c == 3 && (x1(this.S, this.T, 'tick', this.hb), this.T.start()))
              : (Zr(this.j, this.m, o, null), rd(this, o)),
              c == 4 && fr(this),
              this.i && !this.I && (c == 4 ? hw(this.l, this) : ((this.i = !1), mo(this)));
          } else
            n == 400 && 0 < o.indexOf('Unknown SID')
              ? ((this.o = 3), Xe(12))
              : ((this.o = 0), Xe(13)),
              fr(this),
              gs(this);
        }
      }
  } catch {
  } finally {
  }
};
function V1(t) {
  return t.g ? t.u == 'GET' && t.K != 2 && t.l.Da : !1;
}
function z1(t, e, n) {
  let r = !0,
    i;
  for (; !t.I && t.C < n.length; )
    if (((i = dA(t, n)), i == il)) {
      e == 4 && ((t.o = 4), Xe(14), (r = !1)), Zr(t.j, t.m, null, '[Incomplete Response]');
      break;
    } else if (i == td) {
      (t.o = 4), Xe(15), Zr(t.j, t.m, n, '[Invalid Chunk]'), (r = !1);
      break;
    } else Zr(t.j, t.m, i, null), rd(t, i);
  V1(t) && i != il && i != td && ((t.h.g = ''), (t.C = 0)),
    e != 4 || n.length != 0 || t.h.h || ((t.o = 1), Xe(16), (r = !1)),
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
          np(e),
          (e.K = !0),
          Xe(11)))
      : (Zr(t.j, t.m, n, '[Invalid Chunked Response]'), fr(t), gs(t));
}
O.hb = function () {
  if (this.g) {
    var t = en(this.g),
      e = this.g.fa();
    this.C < e.length && (fu(this), z1(this, t, e), this.i && t != 4 && mo(this));
  }
};
function dA(t, e) {
  var n = t.C,
    r = e.indexOf(
      `
`,
      n
    );
  return r == -1
    ? il
    : ((n = Number(e.substring(n, r))),
      isNaN(n) ? td : ((r += 1), r + n > e.length ? il : ((e = e.substr(r, n)), (t.C = r + n), e)));
}
O.cancel = function () {
  (this.I = !0), fr(this);
};
function mo(t) {
  (t.V = Date.now() + t.O), B1(t, t.O);
}
function B1(t, e) {
  if (t.B != null) throw Error('WatchDog timer not null');
  t.B = ho(He(t.gb, t), e);
}
function fu(t) {
  t.B && (U.clearTimeout(t.B), (t.B = null));
}
O.gb = function () {
  this.B = null;
  const t = Date.now();
  0 <= t - this.V
    ? (uA(this.j, this.A), this.K != 2 && (Ws(), Xe(17)), fr(this), (this.o = 2), gs(this))
    : B1(this, this.V - t);
};
function gs(t) {
  t.l.G == 0 || t.I || hw(t.l, t);
}
function fr(t) {
  fu(t);
  var e = t.L;
  e && typeof e.na == 'function' && e.na(),
    (t.L = null),
    Kf(t.T),
    D1(t.S),
    t.g && ((e = t.g), (t.g = null), e.abort(), e.na());
}
function rd(t, e) {
  try {
    var n = t.l;
    if (n.G != 0 && (n.g == t || id(n.h, t))) {
      if (!t.J && id(n.h, t) && n.G == 3) {
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
                if (n.g.F + 3e3 < t.F) al(n), yu(n);
                else break e;
              tp(n), Xe(18);
            }
          } else
            (n.Ba = i[1]),
              0 < n.Ba - n.T &&
                37500 > i[2] &&
                n.L &&
                n.A == 0 &&
                !n.v &&
                (n.v = ho(He(n.cb, n), 6e3));
          if (1 >= Y1(n.h) && n.ja) {
            try {
              n.ja();
            } catch {}
            n.ja = void 0;
          }
        } else pr(n, 11);
      } else if (((t.J || n.g == t) && al(n), !nl(e)))
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
                    ((s.j = s.l), (s.g = new Set()), s.h && (Xf(s, s.h), (s.h = null)));
                }
                if (r.D) {
                  const v = m.g ? m.g.getResponseHeader('X-HTTP-Session-Id') : null;
                  v && ((r.za = v), oe(r.F, r.D, v));
                }
              }
              (n.G = 3),
                n.l && n.l.xa(),
                n.$ && ((n.P = Date.now() - t.F), n.j.info('Handshake RTT: ' + n.P + 'ms')),
                (r = n);
              var o = t;
              if (((r.sa = pw(r, r.H ? r.ka : null, r.V)), o.J)) {
                J1(r.h, o);
                var a = o,
                  l = r.J;
                l && a.setTimeout(l), a.B && (fu(a), mo(a)), (r.g = o);
              } else uw(r);
              0 < n.i.length && vu(n);
            } else (u[0] != 'stop' && u[0] != 'close') || pr(n, 7);
          else
            n.G == 3 &&
              (u[0] == 'stop' || u[0] == 'close'
                ? u[0] == 'stop'
                  ? pr(n, 7)
                  : ep(n)
                : u[0] != 'noop' && n.l && n.l.wa(u),
              (n.A = 0));
        }
    }
    Ws(4);
  } catch {}
}
function fA(t) {
  if (t.W && typeof t.W == 'function') return t.W();
  if ((typeof Map < 'u' && t instanceof Map) || (typeof Set < 'u' && t instanceof Set))
    return Array.from(t.values());
  if (typeof t == 'string') return t.split('');
  if (iu(t)) {
    for (var e = [], n = t.length, r = 0; r < n; r++) e.push(t[r]);
    return e;
  }
  (e = []), (n = 0);
  for (r in t) e[n++] = t[r];
  return e;
}
function pA(t) {
  if (t.oa && typeof t.oa == 'function') return t.oa();
  if (!t.W || typeof t.W != 'function') {
    if (typeof Map < 'u' && t instanceof Map) return Array.from(t.keys());
    if (!(typeof Set < 'u' && t instanceof Set)) {
      if (iu(t) || typeof t == 'string') {
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
function H1(t, e) {
  if (t.forEach && typeof t.forEach == 'function') t.forEach(e, void 0);
  else if (iu(t) || typeof t == 'string') Array.prototype.forEach.call(t, e, void 0);
  else
    for (var n = pA(t), r = fA(t), i = r.length, s = 0; s < i; s++)
      e.call(void 0, r[s], n && n[s], t);
}
var K1 = RegExp(
  '^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$'
);
function mA(t, e) {
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
function wr(t, e) {
  if (
    ((this.g = this.s = this.j = ''),
    (this.m = null),
    (this.o = this.l = ''),
    (this.h = !1),
    t instanceof wr)
  ) {
    (this.h = e !== void 0 ? e : t.h),
      sl(this, t.j),
      (this.s = t.s),
      (this.g = t.g),
      ol(this, t.m),
      (this.l = t.l),
      (e = t.i);
    var n = new qs();
    (n.i = e.i), e.g && ((n.g = new Map(e.g)), (n.h = e.h)), wg(this, n), (this.o = t.o);
  } else
    t && (n = String(t).match(K1))
      ? ((this.h = !!e),
        sl(this, n[1] || '', !0),
        (this.s = is(n[2] || '')),
        (this.g = is(n[3] || '', !0)),
        ol(this, n[4]),
        (this.l = is(n[5] || '', !0)),
        wg(this, n[6] || '', !0),
        (this.o = is(n[7] || '')))
      : ((this.h = !!e), (this.i = new qs(null, this.h)));
}
wr.prototype.toString = function () {
  var t = [],
    e = this.j;
  e && t.push(ss(e, Eg, !0), ':');
  var n = this.g;
  return (
    (n || e == 'file') &&
      (t.push('//'),
      (e = this.s) && t.push(ss(e, Eg, !0), '@'),
      t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, '%$1')),
      (n = this.m),
      n != null && t.push(':', String(n))),
    (n = this.l) &&
      (this.g && n.charAt(0) != '/' && t.push('/'),
      t.push(ss(n, n.charAt(0) == '/' ? vA : yA, !0))),
    (n = this.i.toString()) && t.push('?', n),
    (n = this.o) && t.push('#', ss(n, EA)),
    t.join('')
  );
};
function cn(t) {
  return new wr(t);
}
function sl(t, e, n) {
  (t.j = n ? is(e, !0) : e), t.j && (t.j = t.j.replace(/:$/, ''));
}
function ol(t, e) {
  if (e) {
    if (((e = Number(e)), isNaN(e) || 0 > e)) throw Error('Bad port number ' + e);
    t.m = e;
  } else t.m = null;
}
function wg(t, e, n) {
  e instanceof qs ? ((t.i = e), SA(t.i, t.h)) : (n || (e = ss(e, wA)), (t.i = new qs(e, t.h)));
}
function oe(t, e, n) {
  t.i.set(e, n);
}
function pu(t) {
  return (
    oe(
      t,
      'zx',
      Math.floor(2147483648 * Math.random()).toString(36) +
        Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)
    ),
    t
  );
}
function is(t, e) {
  return t ? (e ? decodeURI(t.replace(/%25/g, '%2525')) : decodeURIComponent(t)) : '';
}
function ss(t, e, n) {
  return typeof t == 'string'
    ? ((t = encodeURI(t).replace(e, gA)), n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, '%$1')), t)
    : null;
}
function gA(t) {
  return (t = t.charCodeAt(0)), '%' + ((t >> 4) & 15).toString(16) + (t & 15).toString(16);
}
var Eg = /[#\/\?@]/g,
  yA = /[#\?:]/g,
  vA = /[#\?]/g,
  wA = /[#\?@]/g,
  EA = /#/g;
function qs(t, e) {
  (this.h = this.g = null), (this.i = t || null), (this.j = !!e);
}
function rr(t) {
  t.g ||
    ((t.g = new Map()),
    (t.h = 0),
    t.i &&
      mA(t.i, function (e, n) {
        t.add(decodeURIComponent(e.replace(/\+/g, ' ')), n);
      }));
}
O = qs.prototype;
O.add = function (t, e) {
  rr(this), (this.i = null), (t = Ui(this, t));
  var n = this.g.get(t);
  return n || this.g.set(t, (n = [])), n.push(e), (this.h += 1), this;
};
function W1(t, e) {
  rr(t), (e = Ui(t, e)), t.g.has(e) && ((t.i = null), (t.h -= t.g.get(e).length), t.g.delete(e));
}
function q1(t, e) {
  return rr(t), (e = Ui(t, e)), t.g.has(e);
}
O.forEach = function (t, e) {
  rr(this),
    this.g.forEach(function (n, r) {
      n.forEach(function (i) {
        t.call(e, i, r, this);
      }, this);
    }, this);
};
O.oa = function () {
  rr(this);
  const t = Array.from(this.g.values()),
    e = Array.from(this.g.keys()),
    n = [];
  for (let r = 0; r < e.length; r++) {
    const i = t[r];
    for (let s = 0; s < i.length; s++) n.push(e[r]);
  }
  return n;
};
O.W = function (t) {
  rr(this);
  let e = [];
  if (typeof t == 'string') q1(this, t) && (e = e.concat(this.g.get(Ui(this, t))));
  else {
    t = Array.from(this.g.values());
    for (let n = 0; n < t.length; n++) e = e.concat(t[n]);
  }
  return e;
};
O.set = function (t, e) {
  return (
    rr(this),
    (this.i = null),
    (t = Ui(this, t)),
    q1(this, t) && (this.h -= this.g.get(t).length),
    this.g.set(t, [e]),
    (this.h += 1),
    this
  );
};
O.get = function (t, e) {
  return t ? ((t = this.W(t)), 0 < t.length ? String(t[0]) : e) : e;
};
function G1(t, e, n) {
  W1(t, e), 0 < n.length && ((t.i = null), t.g.set(Ui(t, e), bf(n)), (t.h += n.length));
}
O.toString = function () {
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
function Ui(t, e) {
  return (e = String(e)), t.j && (e = e.toLowerCase()), e;
}
function SA(t, e) {
  e &&
    !t.j &&
    (rr(t),
    (t.i = null),
    t.g.forEach(function (n, r) {
      var i = r.toLowerCase();
      r != i && (W1(this, r), G1(this, i, n));
    }, t)),
    (t.j = e);
}
var _A = class {
  constructor(e, n) {
    (this.h = e), (this.g = n);
  }
};
function Q1(t) {
  (this.l = t || TA),
    U.PerformanceNavigationTiming
      ? ((t = U.performance.getEntriesByType('navigation')),
        (t = 0 < t.length && (t[0].nextHopProtocol == 'hq' || t[0].nextHopProtocol == 'h2')))
      : (t = !!(U.g && U.g.Ga && U.g.Ga() && U.g.Ga().$b)),
    (this.j = t ? this.l : 1),
    (this.g = null),
    1 < this.j && (this.g = new Set()),
    (this.h = null),
    (this.i = []);
}
var TA = 10;
function X1(t) {
  return t.h ? !0 : t.g ? t.g.size >= t.j : !1;
}
function Y1(t) {
  return t.h ? 1 : t.g ? t.g.size : 0;
}
function id(t, e) {
  return t.h ? t.h == e : t.g ? t.g.has(e) : !1;
}
function Xf(t, e) {
  t.g ? t.g.add(e) : (t.h = e);
}
function J1(t, e) {
  t.h && t.h == e ? (t.h = null) : t.g && t.g.has(e) && t.g.delete(e);
}
Q1.prototype.cancel = function () {
  if (((this.i = Z1(this)), this.h)) this.h.cancel(), (this.h = null);
  else if (this.g && this.g.size !== 0) {
    for (const t of this.g.values()) t.cancel();
    this.g.clear();
  }
};
function Z1(t) {
  if (t.h != null) return t.i.concat(t.h.D);
  if (t.g != null && t.g.size !== 0) {
    let e = t.i;
    for (const n of t.g.values()) e = e.concat(n.D);
    return e;
  }
  return bf(t.i);
}
function Yf() {}
Yf.prototype.stringify = function (t) {
  return U.JSON.stringify(t, void 0);
};
Yf.prototype.parse = function (t) {
  return U.JSON.parse(t, void 0);
};
function IA() {
  this.g = new Yf();
}
function kA(t, e, n) {
  const r = n || '';
  try {
    H1(t, function (i, s) {
      let o = i;
      uo(i) && (o = Hf(i)), e.push(r + s + '=' + encodeURIComponent(o));
    });
  } catch (i) {
    throw (e.push(r + 'type=' + encodeURIComponent('_badmap')), i);
  }
}
function CA(t, e) {
  const n = new uu();
  if (U.Image) {
    const r = new Image();
    (r.onload = Ko(qo, n, r, 'TestLoadImage: loaded', !0, e)),
      (r.onerror = Ko(qo, n, r, 'TestLoadImage: error', !1, e)),
      (r.onabort = Ko(qo, n, r, 'TestLoadImage: abort', !1, e)),
      (r.ontimeout = Ko(qo, n, r, 'TestLoadImage: timeout', !1, e)),
      U.setTimeout(function () {
        r.ontimeout && r.ontimeout();
      }, 1e4),
      (r.src = t);
  } else e(!1);
}
function qo(t, e, n, r, i) {
  try {
    (e.onload = null), (e.onerror = null), (e.onabort = null), (e.ontimeout = null), i(r);
  } catch {}
}
function go(t) {
  (this.l = t.ac || null), (this.j = t.jb || !1);
}
Me(go, qf);
go.prototype.g = function () {
  return new mu(this.l, this.j);
};
go.prototype.i = (function (t) {
  return function () {
    return t;
  };
})({});
function mu(t, e) {
  Ae.call(this),
    (this.D = t),
    (this.u = e),
    (this.m = void 0),
    (this.readyState = Jf),
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
Me(mu, Ae);
var Jf = 0;
O = mu.prototype;
O.open = function (t, e) {
  if (this.readyState != Jf) throw (this.abort(), Error('Error reopening a connection'));
  (this.C = t), (this.B = e), (this.readyState = 1), Gs(this);
};
O.send = function (t) {
  if (this.readyState != 1) throw (this.abort(), Error('need to call open() first. '));
  this.g = !0;
  const e = { headers: this.v, method: this.C, credentials: this.m, cache: void 0 };
  t && (e.body = t),
    (this.D || U).fetch(new Request(this.B, e)).then(this.Wa.bind(this), this.ga.bind(this));
};
O.abort = function () {
  (this.response = this.responseText = ''),
    (this.v = new Headers()),
    (this.status = 0),
    this.j && this.j.cancel('Request was aborted.').catch(() => {}),
    1 <= this.readyState && this.g && this.readyState != 4 && ((this.g = !1), yo(this)),
    (this.readyState = Jf);
};
O.Wa = function (t) {
  if (
    this.g &&
    ((this.l = t),
    this.h ||
      ((this.status = this.l.status),
      (this.statusText = this.l.statusText),
      (this.h = t.headers),
      (this.readyState = 2),
      Gs(this)),
    this.g && ((this.readyState = 3), Gs(this), this.g))
  )
    if (this.responseType === 'arraybuffer')
      t.arrayBuffer().then(this.Ua.bind(this), this.ga.bind(this));
    else if (typeof U.ReadableStream < 'u' && 'body' in t) {
      if (((this.j = t.body.getReader()), this.u)) {
        if (this.responseType)
          throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');
        this.response = [];
      } else (this.response = this.responseText = ''), (this.A = new TextDecoder());
      ew(this);
    } else t.text().then(this.Va.bind(this), this.ga.bind(this));
};
function ew(t) {
  t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t));
}
O.Ta = function (t) {
  if (this.g) {
    if (this.u && t.value) this.response.push(t.value);
    else if (!this.u) {
      var e = t.value ? t.value : new Uint8Array(0);
      (e = this.A.decode(e, { stream: !t.done })) && (this.response = this.responseText += e);
    }
    t.done ? yo(this) : Gs(this), this.readyState == 3 && ew(this);
  }
};
O.Va = function (t) {
  this.g && ((this.response = this.responseText = t), yo(this));
};
O.Ua = function (t) {
  this.g && ((this.response = t), yo(this));
};
O.ga = function () {
  this.g && yo(this);
};
function yo(t) {
  (t.readyState = 4), (t.l = null), (t.j = null), (t.A = null), Gs(t);
}
O.setRequestHeader = function (t, e) {
  this.v.append(t, e);
};
O.getResponseHeader = function (t) {
  return (this.h && this.h.get(t.toLowerCase())) || '';
};
O.getAllResponseHeaders = function () {
  if (!this.h) return '';
  const t = [],
    e = this.h.entries();
  for (var n = e.next(); !n.done; ) (n = n.value), t.push(n[0] + ': ' + n[1]), (n = e.next());
  return t.join(`\r
`);
};
function Gs(t) {
  t.onreadystatechange && t.onreadystatechange.call(t);
}
Object.defineProperty(mu.prototype, 'withCredentials', {
  get: function () {
    return this.m === 'include';
  },
  set: function (t) {
    this.m = t ? 'include' : 'same-origin';
  }
});
var AA = U.JSON.parse;
function de(t) {
  Ae.call(this),
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
    (this.J = tw),
    (this.K = this.L = !1);
}
Me(de, Ae);
var tw = '',
  NA = /^https?$/i,
  RA = ['POST', 'PUT'];
O = de.prototype;
O.Ka = function (t) {
  this.L = t;
};
O.da = function (t, e, n, r) {
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
    (this.g = this.u ? this.u.g() : ed.g()),
    (this.C = this.u ? vg(this.u) : vg(ed)),
    (this.g.onreadystatechange = He(this.Ha, this));
  try {
    (this.F = !0), this.g.open(e, String(t), !0), (this.F = !1);
  } catch (s) {
    Sg(this, s);
    return;
  }
  if (((t = n || ''), (n = new Map(this.headers)), r))
    if (Object.getPrototypeOf(r) === Object.prototype) for (var i in r) n.set(i, r[i]);
    else if (typeof r.keys == 'function' && typeof r.get == 'function')
      for (const s of r.keys()) n.set(s, r.get(s));
    else throw Error('Unknown input type for opt_headers: ' + String(r));
  (r = Array.from(n.keys()).find((s) => s.toLowerCase() == 'content-type')),
    (i = U.FormData && t instanceof U.FormData),
    !(0 <= y1(RA, e)) ||
      r ||
      i ||
      n.set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
  for (const [s, o] of n) this.g.setRequestHeader(s, o);
  this.J && (this.g.responseType = this.J),
    'withCredentials' in this.g &&
      this.g.withCredentials !== this.L &&
      (this.g.withCredentials = this.L);
  try {
    iw(this),
      0 < this.B &&
        ((this.K = PA(this.g))
          ? ((this.g.timeout = this.B), (this.g.ontimeout = He(this.qa, this)))
          : (this.A = Wf(this.qa, this.B, this))),
      (this.v = !0),
      this.g.send(t),
      (this.v = !1);
  } catch (s) {
    Sg(this, s);
  }
};
function PA(t) {
  return Ci && qC() && typeof t.timeout == 'number' && t.ontimeout !== void 0;
}
O.qa = function () {
  typeof Mf < 'u' &&
    this.g &&
    ((this.j = 'Timed out after ' + this.B + 'ms, aborting'),
    (this.m = 8),
    De(this, 'timeout'),
    this.abort(8));
};
function Sg(t, e) {
  (t.h = !1), t.g && ((t.l = !0), t.g.abort(), (t.l = !1)), (t.j = e), (t.m = 5), nw(t), gu(t);
}
function nw(t) {
  t.D || ((t.D = !0), De(t, 'complete'), De(t, 'error'));
}
O.abort = function (t) {
  this.g &&
    this.h &&
    ((this.h = !1),
    (this.l = !0),
    this.g.abort(),
    (this.l = !1),
    (this.m = t || 7),
    De(this, 'complete'),
    De(this, 'abort'),
    gu(this));
};
O.M = function () {
  this.g && (this.h && ((this.h = !1), (this.l = !0), this.g.abort(), (this.l = !1)), gu(this, !0)),
    de.X.M.call(this);
};
O.Ha = function () {
  this.s || (this.F || this.v || this.l ? rw(this) : this.fb());
};
O.fb = function () {
  rw(this);
};
function rw(t) {
  if (t.h && typeof Mf < 'u' && (!t.C[1] || en(t) != 4 || t.aa() != 2)) {
    if (t.v && en(t) == 4) Wf(t.Ha, 0, t);
    else if ((De(t, 'readystatechange'), en(t) == 4)) {
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
            var i = String(t.H).match(K1)[1] || null;
            if (!i && U.self && U.self.location) {
              var s = U.self.location.protocol;
              i = s.substr(0, s.length - 1);
            }
            r = !NA.test(i ? i.toLowerCase() : '');
          }
          n = r;
        }
        if (n) De(t, 'complete'), De(t, 'success');
        else {
          t.m = 6;
          try {
            var o = 2 < en(t) ? t.g.statusText : '';
          } catch {
            o = '';
          }
          (t.j = o + ' [' + t.aa() + ']'), nw(t);
        }
      } finally {
        gu(t);
      }
    }
  }
}
function gu(t, e) {
  if (t.g) {
    iw(t);
    const n = t.g,
      r = t.C[0] ? tl : null;
    (t.g = null), (t.C = null), e || De(t, 'ready');
    try {
      n.onreadystatechange = r;
    } catch {}
  }
}
function iw(t) {
  t.g && t.K && (t.g.ontimeout = null), t.A && (U.clearTimeout(t.A), (t.A = null));
}
function en(t) {
  return t.g ? t.g.readyState : 0;
}
O.aa = function () {
  try {
    return 2 < en(this) ? this.g.status : -1;
  } catch {
    return -1;
  }
};
O.fa = function () {
  try {
    return this.g ? this.g.responseText : '';
  } catch {
    return '';
  }
};
O.Sa = function (t) {
  if (this.g) {
    var e = this.g.responseText;
    return t && e.indexOf(t) == 0 && (e = e.substring(t.length)), AA(e);
  }
};
function _g(t) {
  try {
    if (!t.g) return null;
    if ('response' in t.g) return t.g.response;
    switch (t.J) {
      case tw:
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
O.Ea = function () {
  return this.m;
};
O.Oa = function () {
  return typeof this.j == 'string' ? this.j : String(this.j);
};
function sw(t) {
  let e = '';
  return (
    Ff(t, function (n, r) {
      (e += r),
        (e += ':'),
        (e += n),
        (e += `\r
`);
    }),
    e
  );
}
function Zf(t, e, n) {
  e: {
    for (r in n) {
      var r = !1;
      break e;
    }
    r = !0;
  }
  r ||
    ((n = sw(n)), typeof t == 'string' ? n != null && encodeURIComponent(String(n)) : oe(t, e, n));
}
function Ji(t, e, n) {
  return (n && n.internalChannelParams && n.internalChannelParams[t]) || e;
}
function ow(t) {
  (this.Ca = 0),
    (this.i = []),
    (this.j = new uu()),
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
    (this.Za = Ji('failFast', !1, t)),
    (this.L = this.v = this.u = this.m = this.l = null),
    (this.Y = !0),
    (this.pa = this.Ba = this.T = -1),
    (this.Z = this.A = this.C = 0),
    (this.Xa = Ji('baseRetryDelayMs', 5e3, t)),
    (this.bb = Ji('retryDelaySeedMs', 1e4, t)),
    (this.$a = Ji('forwardChannelMaxRetries', 2, t)),
    (this.ta = Ji('forwardChannelRequestTimeoutMs', 2e4, t)),
    (this.ra = (t && t.xmlHttpFactory) || void 0),
    (this.Da = (t && t.Zb) || !1),
    (this.J = void 0),
    (this.H = (t && t.supportsCrossDomainXhr) || !1),
    (this.I = ''),
    (this.h = new Q1(t && t.concurrentRequestLimit)),
    (this.Fa = new IA()),
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
O = ow.prototype;
O.ma = 8;
O.G = 1;
function ep(t) {
  if ((aw(t), t.G == 3)) {
    var e = t.U++,
      n = cn(t.F);
    oe(n, 'SID', t.I),
      oe(n, 'RID', e),
      oe(n, 'TYPE', 'terminate'),
      vo(t, n),
      (e = new po(t, t.j, e, void 0)),
      (e.K = 2),
      (e.v = pu(cn(n))),
      (n = !1),
      U.navigator && U.navigator.sendBeacon && (n = U.navigator.sendBeacon(e.v.toString(), '')),
      !n && U.Image && ((new Image().src = e.v), (n = !0)),
      n || ((e.g = mw(e.l, null)), e.g.da(e.v)),
      (e.F = Date.now()),
      mo(e);
  }
  fw(t);
}
function yu(t) {
  t.g && (np(t), t.g.cancel(), (t.g = null));
}
function aw(t) {
  yu(t),
    t.u && (U.clearTimeout(t.u), (t.u = null)),
    al(t),
    t.h.cancel(),
    t.m && (typeof t.m == 'number' && U.clearTimeout(t.m), (t.m = null));
}
function vu(t) {
  X1(t.h) || t.m || ((t.m = !0), R1(t.Ja, t), (t.C = 0));
}
function OA(t, e) {
  return Y1(t.h) >= t.h.j - (t.m ? 1 : 0)
    ? !1
    : t.m
    ? ((t.i = e.D.concat(t.i)), !0)
    : t.G == 1 || t.G == 2 || t.C >= (t.Za ? 0 : t.$a)
    ? !1
    : ((t.m = ho(He(t.Ja, t, e), dw(t, t.C))), t.C++, !0);
}
O.Ja = function (t) {
  if (this.m)
    if (((this.m = null), this.G == 1)) {
      if (!t) {
        (this.U = Math.floor(1e5 * Math.random())), (t = this.U++);
        const i = new po(this, this.j, t, void 0);
        let s = this.s;
        if (
          (this.S && (s ? ((s = S1(s)), _1(s, this.S)) : (s = this.S)),
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
        (e = lw(this, i, e)),
          (n = cn(this.F)),
          oe(n, 'RID', t),
          oe(n, 'CVER', 22),
          this.D && oe(n, 'X-HTTP-Session-Id', this.D),
          vo(this, n),
          s &&
            (this.N
              ? (e = 'headers=' + encodeURIComponent(String(sw(s))) + '&' + e)
              : this.o && Zf(n, this.o, s)),
          Xf(this.h, i),
          this.Ya && oe(n, 'TYPE', 'init'),
          this.O
            ? (oe(n, '$req', e), oe(n, 'SID', 'null'), (i.Z = !0), nd(i, n, null))
            : nd(i, n, e),
          (this.G = 2);
      }
    } else this.G == 3 && (t ? Tg(this, t) : this.i.length == 0 || X1(this.h) || Tg(this));
};
function Tg(t, e) {
  var n;
  e ? (n = e.m) : (n = t.U++);
  const r = cn(t.F);
  oe(r, 'SID', t.I),
    oe(r, 'RID', n),
    oe(r, 'AID', t.T),
    vo(t, r),
    t.o && t.s && Zf(r, t.o, t.s),
    (n = new po(t, t.j, n, t.C + 1)),
    t.o === null && (n.H = t.s),
    e && (t.i = e.D.concat(t.i)),
    (e = lw(t, n, 1e3)),
    n.setTimeout(Math.round(0.5 * t.ta) + Math.round(0.5 * t.ta * Math.random())),
    Xf(t.h, n),
    nd(n, r, e);
}
function vo(t, e) {
  t.ia &&
    Ff(t.ia, function (n, r) {
      oe(e, r, n);
    }),
    t.l &&
      H1({}, function (n, r) {
        oe(e, r, n);
      });
}
function lw(t, e, n) {
  n = Math.min(t.i.length, n);
  var r = t.l ? He(t.l.Ra, t.l, t) : null;
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
            kA(c, o, 'req' + u + '_');
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
function uw(t) {
  t.g || t.u || ((t.Z = 1), R1(t.Ia, t), (t.A = 0));
}
function tp(t) {
  return t.g || t.u || 3 <= t.A ? !1 : (t.Z++, (t.u = ho(He(t.Ia, t), dw(t, t.A))), t.A++, !0);
}
O.Ia = function () {
  if (((this.u = null), cw(this), this.$ && !(this.K || this.g == null || 0 >= this.P))) {
    var t = 2 * this.P;
    this.j.info('BP detection timer enabled: ' + t), (this.B = ho(He(this.eb, this), t));
  }
};
O.eb = function () {
  this.B &&
    ((this.B = null),
    this.j.info('BP detection timeout reached.'),
    this.j.info('Buffering proxy detected and switch to long-polling!'),
    (this.L = !1),
    (this.K = !0),
    Xe(10),
    yu(this),
    cw(this));
};
function np(t) {
  t.B != null && (U.clearTimeout(t.B), (t.B = null));
}
function cw(t) {
  (t.g = new po(t, t.j, 'rpc', t.Z)), t.o === null && (t.g.H = t.s), (t.g.N = 0);
  var e = cn(t.sa);
  oe(e, 'RID', 'rpc'),
    oe(e, 'SID', t.I),
    oe(e, 'CI', t.L ? '0' : '1'),
    oe(e, 'AID', t.T),
    oe(e, 'TYPE', 'xmlhttp'),
    vo(t, e),
    t.o && t.s && Zf(e, t.o, t.s),
    t.J && t.g.setTimeout(t.J);
  var n = t.g;
  (t = t.ka), (n.K = 1), (n.v = pu(cn(e))), (n.s = null), (n.P = !0), j1(n, t);
}
O.cb = function () {
  this.v != null && ((this.v = null), yu(this), tp(this), Xe(19));
};
function al(t) {
  t.v != null && (U.clearTimeout(t.v), (t.v = null));
}
function hw(t, e) {
  var n = null;
  if (t.g == e) {
    al(t), np(t), (t.g = null);
    var r = 2;
  } else if (id(t.h, e)) (n = e.D), J1(t.h, e), (r = 1);
  else return;
  if (t.G != 0) {
    if (((t.pa = e.Y), e.i))
      if (r == 1) {
        (n = e.s ? e.s.length : 0), (e = Date.now() - e.F);
        var i = t.C;
        (r = cu()), De(r, new M1(r, n)), vu(t);
      } else uw(t);
    else if (
      ((i = e.o), i == 3 || (i == 0 && 0 < t.pa) || !((r == 1 && OA(t, e)) || (r == 2 && tp(t))))
    )
      switch ((n && 0 < n.length && ((e = t.h), (e.i = e.i.concat(n))), i)) {
        case 1:
          pr(t, 5);
          break;
        case 4:
          pr(t, 10);
          break;
        case 3:
          pr(t, 6);
          break;
        default:
          pr(t, 2);
      }
  }
}
function dw(t, e) {
  let n = t.Xa + Math.floor(Math.random() * t.bb);
  return t.l || (n *= 2), n * e;
}
function pr(t, e) {
  if ((t.j.info('Error code ' + e), e == 2)) {
    var n = null;
    t.l && (n = null);
    var r = He(t.kb, t);
    n ||
      ((n = new wr('//www.google.com/images/cleardot.gif')),
      (U.location && U.location.protocol == 'http') || sl(n, 'https'),
      pu(n)),
      CA(n.toString(), r);
  } else Xe(2);
  (t.G = 0), t.l && t.l.va(e), fw(t), aw(t);
}
O.kb = function (t) {
  t
    ? (this.j.info('Successfully pinged google.com'), Xe(2))
    : (this.j.info('Failed to ping google.com'), Xe(1));
};
function fw(t) {
  if (((t.G = 0), (t.la = []), t.l)) {
    const e = Z1(t.h);
    (e.length != 0 || t.i.length != 0) &&
      (dg(t.la, e), dg(t.la, t.i), (t.h.i.length = 0), bf(t.i), (t.i.length = 0)),
      t.l.ua();
  }
}
function pw(t, e, n) {
  var r = n instanceof wr ? cn(n) : new wr(n, void 0);
  if (r.g != '') e && (r.g = e + '.' + r.g), ol(r, r.m);
  else {
    var i = U.location;
    (r = i.protocol), (e = e ? e + '.' + i.hostname : i.hostname), (i = +i.port);
    var s = new wr(null, void 0);
    r && sl(s, r), e && (s.g = e), i && ol(s, i), n && (s.l = n), (r = s);
  }
  return (n = t.D), (e = t.za), n && e && oe(r, n, e), oe(r, 'VER', t.ma), vo(t, r), r;
}
function mw(t, e, n) {
  if (e && !t.H) throw Error("Can't create secondary domain capable XhrIo object.");
  return (e = n && t.Da && !t.ra ? new de(new go({ jb: !0 })) : new de(t.ra)), e.Ka(t.H), e;
}
function gw() {}
O = gw.prototype;
O.xa = function () {};
O.wa = function () {};
O.va = function () {};
O.ua = function () {};
O.Ra = function () {};
function ll() {
  if (Ci && !(10 <= Number(GC))) throw Error('Environmental error: no available transport.');
}
ll.prototype.g = function (t, e) {
  return new yt(t, e);
};
function yt(t, e) {
  Ae.call(this),
    (this.g = new ow(e)),
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
    (t = e && e.Yb) && !nl(t) && (this.g.o = t),
    (this.A = (e && e.supportsCrossDomainXhr) || !1),
    (this.v = (e && e.sendRawJson) || !1),
    (e = e && e.httpSessionIdParam) &&
      !nl(e) &&
      ((this.g.D = e), (t = this.h), t !== null && e in t && ((t = this.h), e in t && delete t[e])),
    (this.j = new Fi(this));
}
Me(yt, Ae);
yt.prototype.m = function () {
  (this.g.l = this.j), this.A && (this.g.H = !0);
  var t = this.g,
    e = this.l,
    n = this.h || void 0;
  Xe(0), (t.V = e), (t.ia = n || {}), (t.L = t.Y), (t.F = pw(t, null, t.V)), vu(t);
};
yt.prototype.close = function () {
  ep(this.g);
};
yt.prototype.u = function (t) {
  var e = this.g;
  if (typeof t == 'string') {
    var n = {};
    (n.__data__ = t), (t = n);
  } else this.v && ((n = {}), (n.__data__ = Hf(t)), (t = n));
  e.i.push(new _A(e.ab++, t)), e.G == 3 && vu(e);
};
yt.prototype.M = function () {
  (this.g.l = null), delete this.j, ep(this.g), delete this.g, yt.X.M.call(this);
};
function yw(t) {
  Gf.call(this);
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
Me(yw, Gf);
function vw() {
  Qf.call(this), (this.status = 1);
}
Me(vw, Qf);
function Fi(t) {
  this.g = t;
}
Me(Fi, gw);
Fi.prototype.xa = function () {
  De(this.g, 'a');
};
Fi.prototype.wa = function (t) {
  De(this.g, new yw(t));
};
Fi.prototype.va = function (t) {
  De(this.g, new vw());
};
Fi.prototype.ua = function () {
  De(this.g, 'b');
};
ll.prototype.createWebChannel = ll.prototype.g;
yt.prototype.send = yt.prototype.u;
yt.prototype.open = yt.prototype.m;
yt.prototype.close = yt.prototype.close;
hu.NO_ERROR = 0;
hu.TIMEOUT = 8;
hu.HTTP_ERROR = 6;
b1.COMPLETE = 'complete';
U1.EventType = fo;
fo.OPEN = 'a';
fo.CLOSE = 'b';
fo.ERROR = 'c';
fo.MESSAGE = 'd';
Ae.prototype.listen = Ae.prototype.N;
de.prototype.listenOnce = de.prototype.O;
de.prototype.getLastError = de.prototype.Oa;
de.prototype.getLastErrorCode = de.prototype.Ea;
de.prototype.getStatus = de.prototype.aa;
de.prototype.getResponseJson = de.prototype.Sa;
de.prototype.getResponseText = de.prototype.fa;
de.prototype.send = de.prototype.da;
de.prototype.setWithCredentials = de.prototype.Ka;
var xA = function () {
    return new ll();
  },
  DA = function () {
    return cu();
  },
  Oc = hu,
  $A = b1,
  LA = br,
  Ig = {
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
  MA = go,
  Go = U1,
  bA = de;
const kg = '@firebase/firestore';
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
 */ let Ve = class {
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
(Ve.UNAUTHENTICATED = new Ve(null)),
  (Ve.GOOGLE_CREDENTIALS = new Ve('google-credentials-uid')),
  (Ve.FIRST_PARTY = new Ve('first-party-uid')),
  (Ve.MOCK_USER = new Ve('mock-user'));
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
 */ let ji = '9.17.2';
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
 */ const xr = new Df('@firebase/firestore');
function Cg() {
  return xr.logLevel;
}
function D(t, ...e) {
  if (xr.logLevel <= G.DEBUG) {
    const n = e.map(rp);
    xr.debug(`Firestore (${ji}): ${t}`, ...n);
  }
}
function hn(t, ...e) {
  if (xr.logLevel <= G.ERROR) {
    const n = e.map(rp);
    xr.error(`Firestore (${ji}): ${t}`, ...n);
  }
}
function sd(t, ...e) {
  if (xr.logLevel <= G.WARN) {
    const n = e.map(rp);
    xr.warn(`Firestore (${ji}): ${t}`, ...n);
  }
}
function rp(t) {
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
 */ function j(t = 'Unexpected state') {
  const e = `FIRESTORE (${ji}) INTERNAL ASSERTION FAILED: ` + t;
  throw (hn(e), new Error(e));
}
function ve(t, e) {
  t || j();
}
function q(t, e) {
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
 */ const R = {
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
let L = class extends gn {
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
 */ class Er {
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
 */ class ww {
  constructor(e, n) {
    (this.user = n),
      (this.type = 'OAuth'),
      (this.headers = new Map()),
      this.headers.set('Authorization', `Bearer ${e}`);
  }
}
class UA {
  getToken() {
    return Promise.resolve(null);
  }
  invalidateToken() {}
  start(e, n) {
    e.enqueueRetryable(() => n(Ve.UNAUTHENTICATED));
  }
  shutdown() {}
}
class FA {
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
class jA {
  constructor(e) {
    (this.t = e),
      (this.currentUser = Ve.UNAUTHENTICATED),
      (this.i = 0),
      (this.forceRefresh = !1),
      (this.auth = null);
  }
  start(e, n) {
    let r = this.i;
    const i = (l) => (this.i !== r ? ((r = this.i), n(l)) : Promise.resolve());
    let s = new Er();
    this.o = () => {
      this.i++,
        (this.currentUser = this.u()),
        s.resolve(),
        (s = new Er()),
        e.enqueueRetryable(() => i(this.currentUser));
    };
    const o = () => {
        const l = s;
        e.enqueueRetryable(async () => {
          await l.promise, await i(this.currentUser);
        });
      },
      a = (l) => {
        D('FirebaseAuthCredentialsProvider', 'Auth detected'),
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
            : (D('FirebaseAuthCredentialsProvider', 'Auth not yet detected'),
              s.resolve(),
              (s = new Er()));
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
                ? (D('FirebaseAuthCredentialsProvider', 'getToken aborted due to token change.'),
                  this.getToken())
                : r
                ? (ve(typeof r.accessToken == 'string'), new ww(r.accessToken, this.currentUser))
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
    return ve(e === null || typeof e == 'string'), new Ve(e);
  }
}
class VA {
  constructor(e, n, r, i) {
    (this.h = e),
      (this.l = n),
      (this.m = r),
      (this.g = i),
      (this.type = 'FirstParty'),
      (this.user = Ve.FIRST_PARTY),
      (this.p = new Map());
  }
  I() {
    return this.g
      ? this.g()
      : (ve(
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
class zA {
  constructor(e, n, r, i) {
    (this.h = e), (this.l = n), (this.m = r), (this.g = i);
  }
  getToken() {
    return Promise.resolve(new VA(this.h, this.l, this.m, this.g));
  }
  start(e, n) {
    e.enqueueRetryable(() => n(Ve.FIRST_PARTY));
  }
  shutdown() {}
  invalidateToken() {}
}
class BA {
  constructor(e) {
    (this.value = e),
      (this.type = 'AppCheck'),
      (this.headers = new Map()),
      e && e.length > 0 && this.headers.set('x-firebase-appcheck', this.value);
  }
}
class HA {
  constructor(e) {
    (this.T = e), (this.forceRefresh = !1), (this.appCheck = null), (this.A = null);
  }
  start(e, n) {
    const r = (s) => {
      s.error != null &&
        D(
          'FirebaseAppCheckTokenProvider',
          `Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`
        );
      const o = s.token !== this.A;
      return (
        (this.A = s.token),
        D('FirebaseAppCheckTokenProvider', `Received ${o ? 'new' : 'existing'} token.`),
        o ? n(s.token) : Promise.resolve()
      );
    };
    this.o = (s) => {
      e.enqueueRetryable(() => r(s));
    };
    const i = (s) => {
      D('FirebaseAppCheckTokenProvider', 'AppCheck detected'),
        (this.appCheck = s),
        this.appCheck.addTokenListener(this.o);
    };
    this.T.onInit((s) => i(s)),
      setTimeout(() => {
        if (!this.appCheck) {
          const s = this.T.getImmediate({ optional: !0 });
          s ? i(s) : D('FirebaseAppCheckTokenProvider', 'AppCheck not yet detected');
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
              n ? (ve(typeof n.token == 'string'), (this.A = n.token), new BA(n.token)) : null
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
 */ function KA(t) {
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
 */ class WA {
  static R() {
    const e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
      n = Math.floor(256 / e.length) * e.length;
    let r = '';
    for (; r.length < 20; ) {
      const i = KA(40);
      for (let s = 0; s < i.length; ++s)
        r.length < 20 && i[s] < n && (r += e.charAt(i[s] % e.length));
    }
    return r;
  }
}
function Q(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
function Ai(t, e, n) {
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
 */ class lt {
  constructor(e, n) {
    if (((this.seconds = e), (this.nanoseconds = n), n < 0))
      throw new L(R.INVALID_ARGUMENT, 'Timestamp nanoseconds out of range: ' + n);
    if (n >= 1e9) throw new L(R.INVALID_ARGUMENT, 'Timestamp nanoseconds out of range: ' + n);
    if (e < -62135596800) throw new L(R.INVALID_ARGUMENT, 'Timestamp seconds out of range: ' + e);
    if (e >= 253402300800) throw new L(R.INVALID_ARGUMENT, 'Timestamp seconds out of range: ' + e);
  }
  static now() {
    return lt.fromMillis(Date.now());
  }
  static fromDate(e) {
    return lt.fromMillis(e.getTime());
  }
  static fromMillis(e) {
    const n = Math.floor(e / 1e3),
      r = Math.floor(1e6 * (e - 1e3 * n));
    return new lt(n, r);
  }
  toDate() {
    return new Date(this.toMillis());
  }
  toMillis() {
    return 1e3 * this.seconds + this.nanoseconds / 1e6;
  }
  _compareTo(e) {
    return this.seconds === e.seconds
      ? Q(this.nanoseconds, e.nanoseconds)
      : Q(this.seconds, e.seconds);
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
 */ class F {
  constructor(e) {
    this.timestamp = e;
  }
  static fromTimestamp(e) {
    return new F(e);
  }
  static min() {
    return new F(new lt(0, 0));
  }
  static max() {
    return new F(new lt(253402300799, 999999999));
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
 */ class Qs {
  constructor(e, n, r) {
    n === void 0 ? (n = 0) : n > e.length && j(),
      r === void 0 ? (r = e.length - n) : r > e.length - n && j(),
      (this.segments = e),
      (this.offset = n),
      (this.len = r);
  }
  get length() {
    return this.len;
  }
  isEqual(e) {
    return Qs.comparator(this, e) === 0;
  }
  child(e) {
    const n = this.segments.slice(this.offset, this.limit());
    return (
      e instanceof Qs
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
class he extends Qs {
  construct(e, n, r) {
    return new he(e, n, r);
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
        throw new L(
          R.INVALID_ARGUMENT,
          `Invalid segment (${r}). Paths must not contain // in them.`
        );
      n.push(...r.split('/').filter((i) => i.length > 0));
    }
    return new he(n);
  }
  static emptyPath() {
    return new he([]);
  }
}
const qA = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
class rt extends Qs {
  construct(e, n, r) {
    return new rt(e, n, r);
  }
  static isValidIdentifier(e) {
    return qA.test(e);
  }
  canonicalString() {
    return this.toArray()
      .map(
        (e) => (
          (e = e.replace(/\\/g, '\\\\').replace(/`/g, '\\`')),
          rt.isValidIdentifier(e) || (e = '`' + e + '`'),
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
    return new rt(['__name__']);
  }
  static fromServerFormat(e) {
    const n = [];
    let r = '',
      i = 0;
    const s = () => {
      if (r.length === 0)
        throw new L(
          R.INVALID_ARGUMENT,
          `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`
        );
      n.push(r), (r = '');
    };
    let o = !1;
    for (; i < e.length; ) {
      const a = e[i];
      if (a === '\\') {
        if (i + 1 === e.length)
          throw new L(R.INVALID_ARGUMENT, 'Path has trailing escape character: ' + e);
        const l = e[i + 1];
        if (l !== '\\' && l !== '.' && l !== '`')
          throw new L(R.INVALID_ARGUMENT, 'Path has invalid escape sequence: ' + e);
        (r += l), (i += 2);
      } else a === '`' ? ((o = !o), i++) : a !== '.' || o ? ((r += a), i++) : (s(), i++);
    }
    if ((s(), o)) throw new L(R.INVALID_ARGUMENT, 'Unterminated ` in path: ' + e);
    return new rt(n);
  }
  static emptyPath() {
    return new rt([]);
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
 */ class $ {
  constructor(e) {
    this.path = e;
  }
  static fromPath(e) {
    return new $(he.fromString(e));
  }
  static fromName(e) {
    return new $(he.fromString(e).popFirst(5));
  }
  static empty() {
    return new $(he.emptyPath());
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
    return e !== null && he.comparator(this.path, e.path) === 0;
  }
  toString() {
    return this.path.toString();
  }
  static comparator(e, n) {
    return he.comparator(e.path, n.path);
  }
  static isDocumentKey(e) {
    return e.length % 2 == 0;
  }
  static fromSegments(e) {
    return new $(new he(e.slice()));
  }
}
function GA(t, e) {
  const n = t.toTimestamp().seconds,
    r = t.toTimestamp().nanoseconds + 1,
    i = F.fromTimestamp(r === 1e9 ? new lt(n + 1, 0) : new lt(n, r));
  return new Qn(i, $.empty(), e);
}
function QA(t) {
  return new Qn(t.readTime, t.key, -1);
}
class Qn {
  constructor(e, n, r) {
    (this.readTime = e), (this.documentKey = n), (this.largestBatchId = r);
  }
  static min() {
    return new Qn(F.min(), $.empty(), -1);
  }
  static max() {
    return new Qn(F.max(), $.empty(), -1);
  }
}
function XA(t, e) {
  let n = t.readTime.compareTo(e.readTime);
  return n !== 0
    ? n
    : ((n = $.comparator(t.documentKey, e.documentKey)),
      n !== 0 ? n : Q(t.largestBatchId, e.largestBatchId));
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
 */ const YA =
  'The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.';
class JA {
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
 */ async function ip(t) {
  if (t.code !== R.FAILED_PRECONDITION || t.message !== YA) throw t;
  D('LocalStore', 'Unexpectedly lost primary lease');
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
 */ class T {
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
      this.callbackAttached && j(),
      (this.callbackAttached = !0),
      this.isDone
        ? this.error
          ? this.wrapFailure(n, this.error)
          : this.wrapSuccess(e, this.result)
        : new T((r, i) => {
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
      return n instanceof T ? n : T.resolve(n);
    } catch (n) {
      return T.reject(n);
    }
  }
  wrapSuccess(e, n) {
    return e ? this.wrapUserFunction(() => e(n)) : T.resolve(n);
  }
  wrapFailure(e, n) {
    return e ? this.wrapUserFunction(() => e(n)) : T.reject(n);
  }
  static resolve(e) {
    return new T((n, r) => {
      n(e);
    });
  }
  static reject(e) {
    return new T((n, r) => {
      r(e);
    });
  }
  static waitFor(e) {
    return new T((n, r) => {
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
    let n = T.resolve(!1);
    for (const r of e) n = n.next((i) => (i ? T.resolve(i) : r()));
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
    return new T((r, i) => {
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
    return new T((r, i) => {
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
function wo(t) {
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
 */ class sp {
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
sp.at = -1;
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
 */ class ZA {
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
class Xs {
  constructor(e, n) {
    (this.projectId = e), (this.database = n || '(default)');
  }
  static empty() {
    return new Xs('', '');
  }
  get isDefaultDatabase() {
    return this.database === '(default)';
  }
  isEqual(e) {
    return e instanceof Xs && e.projectId === this.projectId && e.database === this.database;
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
 */ function Ag(t) {
  let e = 0;
  for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
  return e;
}
function wu(t, e) {
  for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
}
function eN(t) {
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
 */ function Eu(t) {
  return t == null;
}
function od(t) {
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
 */ class tN extends Error {
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
 */ class Ge {
  constructor(e) {
    this.binaryString = e;
  }
  static fromBase64String(e) {
    const n = (function (r) {
      try {
        return atob(r);
      } catch (i) {
        throw i instanceof DOMException ? new tN('Invalid base64 string: ' + i) : i;
      }
    })(e);
    return new Ge(n);
  }
  static fromUint8Array(e) {
    const n = (function (r) {
      let i = '';
      for (let s = 0; s < r.length; ++s) i += String.fromCharCode(r[s]);
      return i;
    })(e);
    return new Ge(n);
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
    return Q(this.binaryString, e.binaryString);
  }
  isEqual(e) {
    return this.binaryString === e.binaryString;
  }
}
Ge.EMPTY_BYTE_STRING = new Ge('');
const nN = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function Xn(t) {
  if ((ve(!!t), typeof t == 'string')) {
    let e = 0;
    const n = nN.exec(t);
    if ((ve(!!n), n[1])) {
      let i = n[1];
      (i = (i + '000000000').substr(0, 9)), (e = Number(i));
    }
    const r = new Date(t);
    return { seconds: Math.floor(r.getTime() / 1e3), nanos: e };
  }
  return { seconds: ge(t.seconds), nanos: ge(t.nanos) };
}
function ge(t) {
  return typeof t == 'number' ? t : typeof t == 'string' ? Number(t) : 0;
}
function Ni(t) {
  return typeof t == 'string' ? Ge.fromBase64String(t) : Ge.fromUint8Array(t);
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
 */ function Ew(t) {
  var e, n;
  return (
    ((n = (
      ((e = t == null ? void 0 : t.mapValue) === null || e === void 0 ? void 0 : e.fields) || {}
    ).__type__) === null || n === void 0
      ? void 0
      : n.stringValue) === 'server_timestamp'
  );
}
function Sw(t) {
  const e = t.mapValue.fields.__previous_value__;
  return Ew(e) ? Sw(e) : e;
}
function Ys(t) {
  const e = Xn(t.mapValue.fields.__local_write_time__.timestampValue);
  return new lt(e.seconds, e.nanos);
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
 */ const Qo = { mapValue: { fields: { __type__: { stringValue: '__max__' } } } };
function Dr(t) {
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
    ? Ew(t)
      ? 4
      : rN(t)
      ? 9007199254740991
      : 10
    : j();
}
function qt(t, e) {
  if (t === e) return !0;
  const n = Dr(t);
  if (n !== Dr(e)) return !1;
  switch (n) {
    case 0:
    case 9007199254740991:
      return !0;
    case 1:
      return t.booleanValue === e.booleanValue;
    case 4:
      return Ys(t).isEqual(Ys(e));
    case 3:
      return (function (r, i) {
        if (
          typeof r.timestampValue == 'string' &&
          typeof i.timestampValue == 'string' &&
          r.timestampValue.length === i.timestampValue.length
        )
          return r.timestampValue === i.timestampValue;
        const s = Xn(r.timestampValue),
          o = Xn(i.timestampValue);
        return s.seconds === o.seconds && s.nanos === o.nanos;
      })(t, e);
    case 5:
      return t.stringValue === e.stringValue;
    case 6:
      return (function (r, i) {
        return Ni(r.bytesValue).isEqual(Ni(i.bytesValue));
      })(t, e);
    case 7:
      return t.referenceValue === e.referenceValue;
    case 8:
      return (function (r, i) {
        return (
          ge(r.geoPointValue.latitude) === ge(i.geoPointValue.latitude) &&
          ge(r.geoPointValue.longitude) === ge(i.geoPointValue.longitude)
        );
      })(t, e);
    case 2:
      return (function (r, i) {
        if ('integerValue' in r && 'integerValue' in i)
          return ge(r.integerValue) === ge(i.integerValue);
        if ('doubleValue' in r && 'doubleValue' in i) {
          const s = ge(r.doubleValue),
            o = ge(i.doubleValue);
          return s === o ? od(s) === od(o) : isNaN(s) && isNaN(o);
        }
        return !1;
      })(t, e);
    case 9:
      return Ai(t.arrayValue.values || [], e.arrayValue.values || [], qt);
    case 10:
      return (function (r, i) {
        const s = r.mapValue.fields || {},
          o = i.mapValue.fields || {};
        if (Ag(s) !== Ag(o)) return !1;
        for (const a in s)
          if (s.hasOwnProperty(a) && (o[a] === void 0 || !qt(s[a], o[a]))) return !1;
        return !0;
      })(t, e);
    default:
      return j();
  }
}
function Js(t, e) {
  return (t.values || []).find((n) => qt(n, e)) !== void 0;
}
function Ri(t, e) {
  if (t === e) return 0;
  const n = Dr(t),
    r = Dr(e);
  if (n !== r) return Q(n, r);
  switch (n) {
    case 0:
    case 9007199254740991:
      return 0;
    case 1:
      return Q(t.booleanValue, e.booleanValue);
    case 2:
      return (function (i, s) {
        const o = ge(i.integerValue || i.doubleValue),
          a = ge(s.integerValue || s.doubleValue);
        return o < a ? -1 : o > a ? 1 : o === a ? 0 : isNaN(o) ? (isNaN(a) ? 0 : -1) : 1;
      })(t, e);
    case 3:
      return Ng(t.timestampValue, e.timestampValue);
    case 4:
      return Ng(Ys(t), Ys(e));
    case 5:
      return Q(t.stringValue, e.stringValue);
    case 6:
      return (function (i, s) {
        const o = Ni(i),
          a = Ni(s);
        return o.compareTo(a);
      })(t.bytesValue, e.bytesValue);
    case 7:
      return (function (i, s) {
        const o = i.split('/'),
          a = s.split('/');
        for (let l = 0; l < o.length && l < a.length; l++) {
          const u = Q(o[l], a[l]);
          if (u !== 0) return u;
        }
        return Q(o.length, a.length);
      })(t.referenceValue, e.referenceValue);
    case 8:
      return (function (i, s) {
        const o = Q(ge(i.latitude), ge(s.latitude));
        return o !== 0 ? o : Q(ge(i.longitude), ge(s.longitude));
      })(t.geoPointValue, e.geoPointValue);
    case 9:
      return (function (i, s) {
        const o = i.values || [],
          a = s.values || [];
        for (let l = 0; l < o.length && l < a.length; ++l) {
          const u = Ri(o[l], a[l]);
          if (u) return u;
        }
        return Q(o.length, a.length);
      })(t.arrayValue, e.arrayValue);
    case 10:
      return (function (i, s) {
        if (i === Qo.mapValue && s === Qo.mapValue) return 0;
        if (i === Qo.mapValue) return 1;
        if (s === Qo.mapValue) return -1;
        const o = i.fields || {},
          a = Object.keys(o),
          l = s.fields || {},
          u = Object.keys(l);
        a.sort(), u.sort();
        for (let c = 0; c < a.length && c < u.length; ++c) {
          const h = Q(a[c], u[c]);
          if (h !== 0) return h;
          const d = Ri(o[a[c]], l[u[c]]);
          if (d !== 0) return d;
        }
        return Q(a.length, u.length);
      })(t.mapValue, e.mapValue);
    default:
      throw j();
  }
}
function Ng(t, e) {
  if (typeof t == 'string' && typeof e == 'string' && t.length === e.length) return Q(t, e);
  const n = Xn(t),
    r = Xn(e),
    i = Q(n.seconds, r.seconds);
  return i !== 0 ? i : Q(n.nanos, r.nanos);
}
function Pi(t) {
  return ad(t);
}
function ad(t) {
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
        const i = Xn(r);
        return `time(${i.seconds},${i.nanos})`;
      })(t.timestampValue)
    : 'stringValue' in t
    ? t.stringValue
    : 'bytesValue' in t
    ? Ni(t.bytesValue).toBase64()
    : 'referenceValue' in t
    ? ((n = t.referenceValue), $.fromName(n).toString())
    : 'geoPointValue' in t
    ? `geo(${(e = t.geoPointValue).latitude},${e.longitude})`
    : 'arrayValue' in t
    ? (function (r) {
        let i = '[',
          s = !0;
        for (const o of r.values || []) s ? (s = !1) : (i += ','), (i += ad(o));
        return i + ']';
      })(t.arrayValue)
    : 'mapValue' in t
    ? (function (r) {
        const i = Object.keys(r.fields || {}).sort();
        let s = '{',
          o = !0;
        for (const a of i) o ? (o = !1) : (s += ','), (s += `${a}:${ad(r.fields[a])}`);
        return s + '}';
      })(t.mapValue)
    : j();
  var e, n;
}
function ld(t) {
  return !!t && 'integerValue' in t;
}
function op(t) {
  return !!t && 'arrayValue' in t;
}
function Rg(t) {
  return !!t && 'nullValue' in t;
}
function Pg(t) {
  return !!t && 'doubleValue' in t && isNaN(Number(t.doubleValue));
}
function xc(t) {
  return !!t && 'mapValue' in t;
}
function ys(t) {
  if (t.geoPointValue) return { geoPointValue: Object.assign({}, t.geoPointValue) };
  if (t.timestampValue && typeof t.timestampValue == 'object')
    return { timestampValue: Object.assign({}, t.timestampValue) };
  if (t.mapValue) {
    const e = { mapValue: { fields: {} } };
    return wu(t.mapValue.fields, (n, r) => (e.mapValue.fields[n] = ys(r))), e;
  }
  if (t.arrayValue) {
    const e = { arrayValue: { values: [] } };
    for (let n = 0; n < (t.arrayValue.values || []).length; ++n)
      e.arrayValue.values[n] = ys(t.arrayValue.values[n]);
    return e;
  }
  return Object.assign({}, t);
}
function rN(t) {
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
 */ class ul {
  constructor(e, n) {
    (this.position = e), (this.inclusive = n);
  }
}
function Og(t, e, n) {
  let r = 0;
  for (let i = 0; i < t.position.length; i++) {
    const s = e[i],
      o = t.position[i];
    if (
      (s.field.isKeyField()
        ? (r = $.comparator($.fromName(o.referenceValue), n.key))
        : (r = Ri(o, n.data.field(s.field))),
      s.dir === 'desc' && (r *= -1),
      r !== 0)
    )
      break;
  }
  return r;
}
function xg(t, e) {
  if (t === null) return e === null;
  if (e === null || t.inclusive !== e.inclusive || t.position.length !== e.position.length)
    return !1;
  for (let n = 0; n < t.position.length; n++) if (!qt(t.position[n], e.position[n])) return !1;
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
 */ class _w {}
class Ee extends _w {
  constructor(e, n, r) {
    super(), (this.field = e), (this.op = n), (this.value = r);
  }
  static create(e, n, r) {
    return e.isKeyField()
      ? n === 'in' || n === 'not-in'
        ? this.createKeyFieldInFilter(e, n, r)
        : new sN(e, n, r)
      : n === 'array-contains'
      ? new lN(e, r)
      : n === 'in'
      ? new uN(e, r)
      : n === 'not-in'
      ? new cN(e, r)
      : n === 'array-contains-any'
      ? new hN(e, r)
      : new Ee(e, n, r);
  }
  static createKeyFieldInFilter(e, n, r) {
    return n === 'in' ? new oN(e, r) : new aN(e, r);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return this.op === '!='
      ? n !== null && this.matchesComparison(Ri(n, this.value))
      : n !== null && Dr(this.value) === Dr(n) && this.matchesComparison(Ri(n, this.value));
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
        return j();
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
class Gt extends _w {
  constructor(e, n) {
    super(), (this.filters = e), (this.op = n), (this.ft = null);
  }
  static create(e, n) {
    return new Gt(e, n);
  }
  matches(e) {
    return Tw(this)
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
function Tw(t) {
  return t.op === 'and';
}
function Iw(t) {
  return iN(t) && Tw(t);
}
function iN(t) {
  for (const e of t.filters) if (e instanceof Gt) return !1;
  return !0;
}
function ud(t) {
  if (t instanceof Ee) return t.field.canonicalString() + t.op.toString() + Pi(t.value);
  if (Iw(t)) return t.filters.map((e) => ud(e)).join(',');
  {
    const e = t.filters.map((n) => ud(n)).join(',');
    return `${t.op}(${e})`;
  }
}
function kw(t, e) {
  return t instanceof Ee
    ? (function (n, r) {
        return r instanceof Ee && n.op === r.op && n.field.isEqual(r.field) && qt(n.value, r.value);
      })(t, e)
    : t instanceof Gt
    ? (function (n, r) {
        return r instanceof Gt && n.op === r.op && n.filters.length === r.filters.length
          ? n.filters.reduce((i, s, o) => i && kw(s, r.filters[o]), !0)
          : !1;
      })(t, e)
    : void j();
}
function Cw(t) {
  return t instanceof Ee
    ? (function (e) {
        return `${e.field.canonicalString()} ${e.op} ${Pi(e.value)}`;
      })(t)
    : t instanceof Gt
    ? (function (e) {
        return e.op.toString() + ' {' + e.getFilters().map(Cw).join(' ,') + '}';
      })(t)
    : 'Filter';
}
class sN extends Ee {
  constructor(e, n, r) {
    super(e, n, r), (this.key = $.fromName(r.referenceValue));
  }
  matches(e) {
    const n = $.comparator(e.key, this.key);
    return this.matchesComparison(n);
  }
}
class oN extends Ee {
  constructor(e, n) {
    super(e, 'in', n), (this.keys = Aw('in', n));
  }
  matches(e) {
    return this.keys.some((n) => n.isEqual(e.key));
  }
}
class aN extends Ee {
  constructor(e, n) {
    super(e, 'not-in', n), (this.keys = Aw('not-in', n));
  }
  matches(e) {
    return !this.keys.some((n) => n.isEqual(e.key));
  }
}
function Aw(t, e) {
  var n;
  return (((n = e.arrayValue) === null || n === void 0 ? void 0 : n.values) || []).map((r) =>
    $.fromName(r.referenceValue)
  );
}
class lN extends Ee {
  constructor(e, n) {
    super(e, 'array-contains', n);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return op(n) && Js(n.arrayValue, this.value);
  }
}
class uN extends Ee {
  constructor(e, n) {
    super(e, 'in', n);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return n !== null && Js(this.value.arrayValue, n);
  }
}
class cN extends Ee {
  constructor(e, n) {
    super(e, 'not-in', n);
  }
  matches(e) {
    if (Js(this.value.arrayValue, { nullValue: 'NULL_VALUE' })) return !1;
    const n = e.data.field(this.field);
    return n !== null && !Js(this.value.arrayValue, n);
  }
}
class hN extends Ee {
  constructor(e, n) {
    super(e, 'array-contains-any', n);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return (
      !(!op(n) || !n.arrayValue.values) &&
      n.arrayValue.values.some((r) => Js(this.value.arrayValue, r))
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
 */ class vs {
  constructor(e, n = 'asc') {
    (this.field = e), (this.dir = n);
  }
}
function dN(t, e) {
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
 */ class Le {
  constructor(e, n) {
    (this.comparator = e), (this.root = n || Oe.EMPTY);
  }
  insert(e, n) {
    return new Le(
      this.comparator,
      this.root.insert(e, n, this.comparator).copy(null, null, Oe.BLACK, null, null)
    );
  }
  remove(e) {
    return new Le(
      this.comparator,
      this.root.remove(e, this.comparator).copy(null, null, Oe.BLACK, null, null)
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
    return new Xo(this.root, null, this.comparator, !1);
  }
  getIteratorFrom(e) {
    return new Xo(this.root, e, this.comparator, !1);
  }
  getReverseIterator() {
    return new Xo(this.root, null, this.comparator, !0);
  }
  getReverseIteratorFrom(e) {
    return new Xo(this.root, e, this.comparator, !0);
  }
}
class Xo {
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
class Oe {
  constructor(e, n, r, i, s) {
    (this.key = e),
      (this.value = n),
      (this.color = r ?? Oe.RED),
      (this.left = i ?? Oe.EMPTY),
      (this.right = s ?? Oe.EMPTY),
      (this.size = this.left.size + 1 + this.right.size);
  }
  copy(e, n, r, i, s) {
    return new Oe(e ?? this.key, n ?? this.value, r ?? this.color, i ?? this.left, s ?? this.right);
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
    if (this.left.isEmpty()) return Oe.EMPTY;
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
        if (i.right.isEmpty()) return Oe.EMPTY;
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
    const e = this.copy(null, null, Oe.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, e, null);
  }
  rotateRight() {
    const e = this.copy(null, null, Oe.RED, this.left.right, null);
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
    if ((this.isRed() && this.left.isRed()) || this.right.isRed()) throw j();
    const e = this.left.check();
    if (e !== this.right.check()) throw j();
    return e + (this.isRed() ? 0 : 1);
  }
}
(Oe.EMPTY = null), (Oe.RED = !0), (Oe.BLACK = !1);
Oe.EMPTY = new (class {
  constructor() {
    this.size = 0;
  }
  get key() {
    throw j();
  }
  get value() {
    throw j();
  }
  get color() {
    throw j();
  }
  get left() {
    throw j();
  }
  get right() {
    throw j();
  }
  copy(t, e, n, r, i) {
    return this;
  }
  insert(t, e, n) {
    return new Oe(t, e);
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
 */ class _e {
  constructor(e) {
    (this.comparator = e), (this.data = new Le(this.comparator));
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
    return new Dg(this.data.getIterator());
  }
  getIteratorFrom(e) {
    return new Dg(this.data.getIteratorFrom(e));
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
    if (!(e instanceof _e) || this.size !== e.size) return !1;
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
    const n = new _e(this.comparator);
    return (n.data = e), n;
  }
}
class Dg {
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
 */ class Pn {
  constructor(e) {
    (this.fields = e), e.sort(rt.comparator);
  }
  static empty() {
    return new Pn([]);
  }
  unionWith(e) {
    let n = new _e(rt.comparator);
    for (const r of this.fields) n = n.add(r);
    for (const r of e) n = n.add(r);
    return new Pn(n.toArray());
  }
  covers(e) {
    for (const n of this.fields) if (n.isPrefixOf(e)) return !0;
    return !1;
  }
  isEqual(e) {
    return Ai(this.fields, e.fields, (n, r) => n.isEqual(r));
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
 */ class Vt {
  constructor(e) {
    this.value = e;
  }
  static empty() {
    return new Vt({ mapValue: {} });
  }
  field(e) {
    if (e.isEmpty()) return this.value;
    {
      let n = this.value;
      for (let r = 0; r < e.length - 1; ++r)
        if (((n = (n.mapValue.fields || {})[e.get(r)]), !xc(n))) return null;
      return (n = (n.mapValue.fields || {})[e.lastSegment()]), n || null;
    }
  }
  set(e, n) {
    this.getFieldsMap(e.popLast())[e.lastSegment()] = ys(n);
  }
  setAll(e) {
    let n = rt.emptyPath(),
      r = {},
      i = [];
    e.forEach((o, a) => {
      if (!n.isImmediateParentOf(a)) {
        const l = this.getFieldsMap(n);
        this.applyChanges(l, r, i), (r = {}), (i = []), (n = a.popLast());
      }
      o ? (r[a.lastSegment()] = ys(o)) : i.push(a.lastSegment());
    });
    const s = this.getFieldsMap(n);
    this.applyChanges(s, r, i);
  }
  delete(e) {
    const n = this.field(e.popLast());
    xc(n) && n.mapValue.fields && delete n.mapValue.fields[e.lastSegment()];
  }
  isEqual(e) {
    return qt(this.value, e.value);
  }
  getFieldsMap(e) {
    let n = this.value;
    n.mapValue.fields || (n.mapValue = { fields: {} });
    for (let r = 0; r < e.length; ++r) {
      let i = n.mapValue.fields[e.get(r)];
      (xc(i) && i.mapValue.fields) ||
        ((i = { mapValue: { fields: {} } }), (n.mapValue.fields[e.get(r)] = i)),
        (n = i);
    }
    return n.mapValue.fields;
  }
  applyChanges(e, n, r) {
    wu(n, (i, s) => (e[i] = s));
    for (const i of r) delete e[i];
  }
  clone() {
    return new Vt(ys(this.value));
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
 */ class Be {
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
    return new Be(e, 0, F.min(), F.min(), F.min(), Vt.empty(), 0);
  }
  static newFoundDocument(e, n, r, i) {
    return new Be(e, 1, n, F.min(), r, i, 0);
  }
  static newNoDocument(e, n) {
    return new Be(e, 2, n, F.min(), F.min(), Vt.empty(), 0);
  }
  static newUnknownDocument(e, n) {
    return new Be(e, 3, n, F.min(), F.min(), Vt.empty(), 2);
  }
  convertToFoundDocument(e, n) {
    return (
      !this.createTime.isEqual(F.min()) ||
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
      (this.data = Vt.empty()),
      (this.documentState = 0),
      this
    );
  }
  convertToUnknownDocument(e) {
    return (
      (this.version = e),
      (this.documentType = 3),
      (this.data = Vt.empty()),
      (this.documentState = 2),
      this
    );
  }
  setHasCommittedMutations() {
    return (this.documentState = 2), this;
  }
  setHasLocalMutations() {
    return (this.documentState = 1), (this.version = F.min()), this;
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
      e instanceof Be &&
      this.key.isEqual(e.key) &&
      this.version.isEqual(e.version) &&
      this.documentType === e.documentType &&
      this.documentState === e.documentState &&
      this.data.isEqual(e.data)
    );
  }
  mutableCopy() {
    return new Be(
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
 */ class fN {
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
function $g(t, e = null, n = [], r = [], i = null, s = null, o = null) {
  return new fN(t, e, n, r, i, s, o);
}
function ap(t) {
  const e = q(t);
  if (e._t === null) {
    let n = e.path.canonicalString();
    e.collectionGroup !== null && (n += '|cg:' + e.collectionGroup),
      (n += '|f:'),
      (n += e.filters.map((r) => ud(r)).join(',')),
      (n += '|ob:'),
      (n += e.orderBy
        .map((r) =>
          (function (i) {
            return i.field.canonicalString() + i.dir;
          })(r)
        )
        .join(',')),
      Eu(e.limit) || ((n += '|l:'), (n += e.limit)),
      e.startAt &&
        ((n += '|lb:'),
        (n += e.startAt.inclusive ? 'b:' : 'a:'),
        (n += e.startAt.position.map((r) => Pi(r)).join(','))),
      e.endAt &&
        ((n += '|ub:'),
        (n += e.endAt.inclusive ? 'a:' : 'b:'),
        (n += e.endAt.position.map((r) => Pi(r)).join(','))),
      (e._t = n);
  }
  return e._t;
}
function lp(t, e) {
  if (t.limit !== e.limit || t.orderBy.length !== e.orderBy.length) return !1;
  for (let n = 0; n < t.orderBy.length; n++) if (!dN(t.orderBy[n], e.orderBy[n])) return !1;
  if (t.filters.length !== e.filters.length) return !1;
  for (let n = 0; n < t.filters.length; n++) if (!kw(t.filters[n], e.filters[n])) return !1;
  return (
    t.collectionGroup === e.collectionGroup &&
    !!t.path.isEqual(e.path) &&
    !!xg(t.startAt, e.startAt) &&
    xg(t.endAt, e.endAt)
  );
}
function cd(t) {
  return $.isDocumentKey(t.path) && t.collectionGroup === null && t.filters.length === 0;
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
 */ class Su {
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
function pN(t, e, n, r, i, s, o, a) {
  return new Su(t, e, n, r, i, s, o, a);
}
function Nw(t) {
  return new Su(t);
}
function Lg(t) {
  return (
    t.filters.length === 0 &&
    t.limit === null &&
    t.startAt == null &&
    t.endAt == null &&
    (t.explicitOrderBy.length === 0 ||
      (t.explicitOrderBy.length === 1 && t.explicitOrderBy[0].field.isKeyField()))
  );
}
function mN(t) {
  return t.explicitOrderBy.length > 0 ? t.explicitOrderBy[0].field : null;
}
function gN(t) {
  for (const e of t.filters) {
    const n = e.getFirstInequalityField();
    if (n !== null) return n;
  }
  return null;
}
function yN(t) {
  return t.collectionGroup !== null;
}
function ui(t) {
  const e = q(t);
  if (e.wt === null) {
    e.wt = [];
    const n = gN(e),
      r = mN(e);
    if (n !== null && r === null)
      n.isKeyField() || e.wt.push(new vs(n)), e.wt.push(new vs(rt.keyField(), 'asc'));
    else {
      let i = !1;
      for (const s of e.explicitOrderBy) e.wt.push(s), s.field.isKeyField() && (i = !0);
      if (!i) {
        const s =
          e.explicitOrderBy.length > 0
            ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir
            : 'asc';
        e.wt.push(new vs(rt.keyField(), s));
      }
    }
  }
  return e.wt;
}
function dn(t) {
  const e = q(t);
  if (!e.gt)
    if (e.limitType === 'F')
      e.gt = $g(e.path, e.collectionGroup, ui(e), e.filters, e.limit, e.startAt, e.endAt);
    else {
      const n = [];
      for (const s of ui(e)) {
        const o = s.dir === 'desc' ? 'asc' : 'desc';
        n.push(new vs(s.field, o));
      }
      const r = e.endAt ? new ul(e.endAt.position, e.endAt.inclusive) : null,
        i = e.startAt ? new ul(e.startAt.position, e.startAt.inclusive) : null;
      e.gt = $g(e.path, e.collectionGroup, n, e.filters, e.limit, r, i);
    }
  return e.gt;
}
function hd(t, e, n) {
  return new Su(
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
function _u(t, e) {
  return lp(dn(t), dn(e)) && t.limitType === e.limitType;
}
function Rw(t) {
  return `${ap(dn(t))}|lt:${t.limitType}`;
}
function dd(t) {
  return `Query(target=${(function (e) {
    let n = e.path.canonicalString();
    return (
      e.collectionGroup !== null && (n += ' collectionGroup=' + e.collectionGroup),
      e.filters.length > 0 && (n += `, filters: [${e.filters.map((r) => Cw(r)).join(', ')}]`),
      Eu(e.limit) || (n += ', limit: ' + e.limit),
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
        (n += e.startAt.position.map((r) => Pi(r)).join(','))),
      e.endAt &&
        ((n += ', endAt: '),
        (n += e.endAt.inclusive ? 'a:' : 'b:'),
        (n += e.endAt.position.map((r) => Pi(r)).join(','))),
      `Target(${n})`
    );
  })(dn(t))}; limitType=${t.limitType})`;
}
function Tu(t, e) {
  return (
    e.isFoundDocument() &&
    (function (n, r) {
      const i = r.key.path;
      return n.collectionGroup !== null
        ? r.key.hasCollectionId(n.collectionGroup) && n.path.isPrefixOf(i)
        : $.isDocumentKey(n.path)
        ? n.path.isEqual(i)
        : n.path.isImmediateParentOf(i);
    })(t, e) &&
    (function (n, r) {
      for (const i of ui(n)) if (!i.field.isKeyField() && r.data.field(i.field) === null) return !1;
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
            const a = Og(i, s, o);
            return i.inclusive ? a <= 0 : a < 0;
          })(n.startAt, ui(n), r)) ||
        (n.endAt &&
          !(function (i, s, o) {
            const a = Og(i, s, o);
            return i.inclusive ? a >= 0 : a > 0;
          })(n.endAt, ui(n), r))
      );
    })(t, e)
  );
}
function vN(t) {
  return (
    t.collectionGroup ||
    (t.path.length % 2 == 1 ? t.path.lastSegment() : t.path.get(t.path.length - 2))
  );
}
function Pw(t) {
  return (e, n) => {
    let r = !1;
    for (const i of ui(t)) {
      const s = wN(i, e, n);
      if (s !== 0) return s;
      r = r || i.field.isKeyField();
    }
    return 0;
  };
}
function wN(t, e, n) {
  const r = t.field.isKeyField()
    ? $.comparator(e.key, n.key)
    : (function (i, s, o) {
        const a = s.data.field(i),
          l = o.data.field(i);
        return a !== null && l !== null ? Ri(a, l) : j();
      })(t.field, e, n);
  switch (t.dir) {
    case 'asc':
      return r;
    case 'desc':
      return -1 * r;
    default:
      return j();
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
 */ function EN(t, e) {
  if (t.yt) {
    if (isNaN(e)) return { doubleValue: 'NaN' };
    if (e === 1 / 0) return { doubleValue: 'Infinity' };
    if (e === -1 / 0) return { doubleValue: '-Infinity' };
  }
  return { doubleValue: od(e) ? '-0' : e };
}
function SN(t) {
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
 */ class Iu {
  constructor() {
    this._ = void 0;
  }
}
function _N(t, e, n) {
  return t instanceof fd
    ? (function (r, i) {
        const s = {
          fields: {
            __type__: { stringValue: 'server_timestamp' },
            __local_write_time__: { timestampValue: { seconds: r.seconds, nanos: r.nanoseconds } }
          }
        };
        return i && (s.fields.__previous_value__ = i), { mapValue: s };
      })(n, e)
    : t instanceof cl
    ? Ow(t, e)
    : t instanceof hl
    ? xw(t, e)
    : (function (r, i) {
        const s = IN(r, i),
          o = Mg(s) + Mg(r.It);
        return ld(s) && ld(r.It) ? SN(o) : EN(r.Tt, o);
      })(t, e);
}
function TN(t, e, n) {
  return t instanceof cl ? Ow(t, e) : t instanceof hl ? xw(t, e) : n;
}
function IN(t, e) {
  return t instanceof pd
    ? ld((n = e)) ||
      (function (r) {
        return !!r && 'doubleValue' in r;
      })(n)
      ? e
      : { integerValue: 0 }
    : null;
  var n;
}
class fd extends Iu {}
class cl extends Iu {
  constructor(e) {
    super(), (this.elements = e);
  }
}
function Ow(t, e) {
  const n = Dw(e);
  for (const r of t.elements) n.some((i) => qt(i, r)) || n.push(r);
  return { arrayValue: { values: n } };
}
class hl extends Iu {
  constructor(e) {
    super(), (this.elements = e);
  }
}
function xw(t, e) {
  let n = Dw(e);
  for (const r of t.elements) n = n.filter((i) => !qt(i, r));
  return { arrayValue: { values: n } };
}
class pd extends Iu {
  constructor(e, n) {
    super(), (this.Tt = e), (this.It = n);
  }
}
function Mg(t) {
  return ge(t.integerValue || t.doubleValue);
}
function Dw(t) {
  return op(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
}
function kN(t, e) {
  return (
    t.field.isEqual(e.field) &&
    (function (n, r) {
      return (n instanceof cl && r instanceof cl) || (n instanceof hl && r instanceof hl)
        ? Ai(n.elements, r.elements, qt)
        : n instanceof pd && r instanceof pd
        ? qt(n.It, r.It)
        : n instanceof fd && r instanceof fd;
    })(t.transform, e.transform)
  );
}
class Sr {
  constructor(e, n) {
    (this.updateTime = e), (this.exists = n);
  }
  static none() {
    return new Sr();
  }
  static exists(e) {
    return new Sr(void 0, e);
  }
  static updateTime(e) {
    return new Sr(e);
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
function da(t, e) {
  return t.updateTime !== void 0
    ? e.isFoundDocument() && e.version.isEqual(t.updateTime)
    : t.exists === void 0 || t.exists === e.isFoundDocument();
}
class up {}
function $w(t, e) {
  if (!t.hasLocalMutations || (e && e.fields.length === 0)) return null;
  if (e === null)
    return t.isNoDocument() ? new AN(t.key, Sr.none()) : new cp(t.key, t.data, Sr.none());
  {
    const n = t.data,
      r = Vt.empty();
    let i = new _e(rt.comparator);
    for (let s of e.fields)
      if (!i.has(s)) {
        let o = n.field(s);
        o === null && s.length > 1 && ((s = s.popLast()), (o = n.field(s))),
          o === null ? r.delete(s) : r.set(s, o),
          (i = i.add(s));
      }
    return new ku(t.key, r, new Pn(i.toArray()), Sr.none());
  }
}
function CN(t, e, n) {
  t instanceof cp
    ? (function (r, i, s) {
        const o = r.value.clone(),
          a = Ug(r.fieldTransforms, i, s.transformResults);
        o.setAll(a), i.convertToFoundDocument(s.version, o).setHasCommittedMutations();
      })(t, e, n)
    : t instanceof ku
    ? (function (r, i, s) {
        if (!da(r.precondition, i)) return void i.convertToUnknownDocument(s.version);
        const o = Ug(r.fieldTransforms, i, s.transformResults),
          a = i.data;
        a.setAll(Lw(r)),
          a.setAll(o),
          i.convertToFoundDocument(s.version, a).setHasCommittedMutations();
      })(t, e, n)
    : (function (r, i, s) {
        i.convertToNoDocument(s.version).setHasCommittedMutations();
      })(0, e, n);
}
function ws(t, e, n, r) {
  return t instanceof cp
    ? (function (i, s, o, a) {
        if (!da(i.precondition, s)) return o;
        const l = i.value.clone(),
          u = Fg(i.fieldTransforms, a, s);
        return l.setAll(u), s.convertToFoundDocument(s.version, l).setHasLocalMutations(), null;
      })(t, e, n, r)
    : t instanceof ku
    ? (function (i, s, o, a) {
        if (!da(i.precondition, s)) return o;
        const l = Fg(i.fieldTransforms, a, s),
          u = s.data;
        return (
          u.setAll(Lw(i)),
          u.setAll(l),
          s.convertToFoundDocument(s.version, u).setHasLocalMutations(),
          o === null
            ? null
            : o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((c) => c.field))
        );
      })(t, e, n, r)
    : (function (i, s, o) {
        return da(i.precondition, s)
          ? (s.convertToNoDocument(s.version).setHasLocalMutations(), null)
          : o;
      })(t, e, n);
}
function bg(t, e) {
  return (
    t.type === e.type &&
    !!t.key.isEqual(e.key) &&
    !!t.precondition.isEqual(e.precondition) &&
    !!(function (n, r) {
      return (n === void 0 && r === void 0) || (!(!n || !r) && Ai(n, r, (i, s) => kN(i, s)));
    })(t.fieldTransforms, e.fieldTransforms) &&
    (t.type === 0
      ? t.value.isEqual(e.value)
      : t.type !== 1 || (t.data.isEqual(e.data) && t.fieldMask.isEqual(e.fieldMask)))
  );
}
class cp extends up {
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
let ku = class extends up {
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
function Lw(t) {
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
function Ug(t, e, n) {
  const r = new Map();
  ve(t.length === n.length);
  for (let i = 0; i < n.length; i++) {
    const s = t[i],
      o = s.transform,
      a = e.data.field(s.field);
    r.set(s.field, TN(o, a, n[i]));
  }
  return r;
}
function Fg(t, e, n) {
  const r = new Map();
  for (const i of t) {
    const s = i.transform,
      o = n.data.field(i.field);
    r.set(i.field, _N(s, o, e));
  }
  return r;
}
class AN extends up {
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
 */ class NN {
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
 */ var me, H;
function Mw(t) {
  if (t === void 0) return hn('GRPC error has no .code'), R.UNKNOWN;
  switch (t) {
    case me.OK:
      return R.OK;
    case me.CANCELLED:
      return R.CANCELLED;
    case me.UNKNOWN:
      return R.UNKNOWN;
    case me.DEADLINE_EXCEEDED:
      return R.DEADLINE_EXCEEDED;
    case me.RESOURCE_EXHAUSTED:
      return R.RESOURCE_EXHAUSTED;
    case me.INTERNAL:
      return R.INTERNAL;
    case me.UNAVAILABLE:
      return R.UNAVAILABLE;
    case me.UNAUTHENTICATED:
      return R.UNAUTHENTICATED;
    case me.INVALID_ARGUMENT:
      return R.INVALID_ARGUMENT;
    case me.NOT_FOUND:
      return R.NOT_FOUND;
    case me.ALREADY_EXISTS:
      return R.ALREADY_EXISTS;
    case me.PERMISSION_DENIED:
      return R.PERMISSION_DENIED;
    case me.FAILED_PRECONDITION:
      return R.FAILED_PRECONDITION;
    case me.ABORTED:
      return R.ABORTED;
    case me.OUT_OF_RANGE:
      return R.OUT_OF_RANGE;
    case me.UNIMPLEMENTED:
      return R.UNIMPLEMENTED;
    case me.DATA_LOSS:
      return R.DATA_LOSS;
    default:
      return j();
  }
}
((H = me || (me = {}))[(H.OK = 0)] = 'OK'),
  (H[(H.CANCELLED = 1)] = 'CANCELLED'),
  (H[(H.UNKNOWN = 2)] = 'UNKNOWN'),
  (H[(H.INVALID_ARGUMENT = 3)] = 'INVALID_ARGUMENT'),
  (H[(H.DEADLINE_EXCEEDED = 4)] = 'DEADLINE_EXCEEDED'),
  (H[(H.NOT_FOUND = 5)] = 'NOT_FOUND'),
  (H[(H.ALREADY_EXISTS = 6)] = 'ALREADY_EXISTS'),
  (H[(H.PERMISSION_DENIED = 7)] = 'PERMISSION_DENIED'),
  (H[(H.UNAUTHENTICATED = 16)] = 'UNAUTHENTICATED'),
  (H[(H.RESOURCE_EXHAUSTED = 8)] = 'RESOURCE_EXHAUSTED'),
  (H[(H.FAILED_PRECONDITION = 9)] = 'FAILED_PRECONDITION'),
  (H[(H.ABORTED = 10)] = 'ABORTED'),
  (H[(H.OUT_OF_RANGE = 11)] = 'OUT_OF_RANGE'),
  (H[(H.UNIMPLEMENTED = 12)] = 'UNIMPLEMENTED'),
  (H[(H.INTERNAL = 13)] = 'INTERNAL'),
  (H[(H.UNAVAILABLE = 14)] = 'UNAVAILABLE'),
  (H[(H.DATA_LOSS = 15)] = 'DATA_LOSS');
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
 */ class Vi {
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
    wu(this.inner, (n, r) => {
      for (const [i, s] of r) e(i, s);
    });
  }
  isEmpty() {
    return eN(this.inner);
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
 */ const RN = new Le($.comparator);
function Yn() {
  return RN;
}
const bw = new Le($.comparator);
function os(...t) {
  let e = bw;
  for (const n of t) e = e.insert(n.key, n);
  return e;
}
function PN(t) {
  let e = bw;
  return t.forEach((n, r) => (e = e.insert(n, r.overlayedDocument))), e;
}
function mr() {
  return Es();
}
function Uw() {
  return Es();
}
function Es() {
  return new Vi(
    (t) => t.toString(),
    (t, e) => t.isEqual(e)
  );
}
const ON = new _e($.comparator);
function K(...t) {
  let e = ON;
  for (const n of t) e = e.add(n);
  return e;
}
const xN = new _e(Q);
function Fw() {
  return xN;
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
 */ class Cu {
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
      i.set(e, Eo.createSynthesizedTargetChangeForCurrentChange(e, n, r)),
      new Cu(F.min(), i, Fw(), Yn(), K())
    );
  }
}
class Eo {
  constructor(e, n, r, i, s) {
    (this.resumeToken = e),
      (this.current = n),
      (this.addedDocuments = r),
      (this.modifiedDocuments = i),
      (this.removedDocuments = s);
  }
  static createSynthesizedTargetChangeForCurrentChange(e, n, r) {
    return new Eo(r, n, K(), K(), K());
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
 */ class fa {
  constructor(e, n, r, i) {
    (this.Et = e), (this.removedTargetIds = n), (this.key = r), (this.At = i);
  }
}
class jw {
  constructor(e, n) {
    (this.targetId = e), (this.Rt = n);
  }
}
class Vw {
  constructor(e, n, r = Ge.EMPTY_BYTE_STRING, i = null) {
    (this.state = e), (this.targetIds = n), (this.resumeToken = r), (this.cause = i);
  }
}
class jg {
  constructor() {
    (this.bt = 0),
      (this.vt = zg()),
      (this.Pt = Ge.EMPTY_BYTE_STRING),
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
    let e = K(),
      n = K(),
      r = K();
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
            j();
        }
      }),
      new Eo(this.Pt, this.Vt, e, n, r)
    );
  }
  kt() {
    (this.St = !1), (this.vt = zg());
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
class DN {
  constructor(e) {
    (this.Lt = e), (this.qt = new Map()), (this.Ut = Yn()), (this.Kt = Vg()), (this.Gt = new _e(Q));
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
          j();
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
      if (cd(s))
        if (r === 0) {
          const o = new $(s.path);
          this.zt(n, o, Be.newNoDocument(o, F.min()));
        } else ve(r === 1);
      else this.te(n) !== r && (this.Yt(n), (this.Gt = this.Gt.add(n)));
    }
  }
  ee(e) {
    const n = new Map();
    this.qt.forEach((s, o) => {
      const a = this.Xt(o);
      if (a) {
        if (s.current && cd(a.target)) {
          const l = new $(a.target.path);
          this.Ut.get(l) !== null || this.ne(o, l) || this.zt(o, l, Be.newNoDocument(l, e));
        }
        s.Ct && (n.set(o, s.Nt()), s.kt());
      }
    });
    let r = K();
    this.Kt.forEach((s, o) => {
      let a = !0;
      o.forEachWhile((l) => {
        const u = this.Xt(l);
        return !u || u.purpose === 2 || ((a = !1), !1);
      }),
        a && (r = r.add(s));
    }),
      this.Ut.forEach((s, o) => o.setReadTime(e));
    const i = new Cu(e, n, this.Gt, this.Ut, r);
    return (this.Ut = Yn()), (this.Kt = Vg()), (this.Gt = new _e(Q)), i;
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
    return n || ((n = new jg()), this.qt.set(e, n)), n;
  }
  se(e) {
    let n = this.Kt.get(e);
    return n || ((n = new _e(Q)), (this.Kt = this.Kt.insert(e, n))), n;
  }
  Jt(e) {
    const n = this.Xt(e) !== null;
    return n || D('WatchChangeAggregator', 'Detected inactive target', e), n;
  }
  Xt(e) {
    const n = this.qt.get(e);
    return n && n.Dt ? null : this.Lt.ie(e);
  }
  Yt(e) {
    this.qt.set(e, new jg()),
      this.Lt.getRemoteKeysForTarget(e).forEach((n) => {
        this.zt(e, n, null);
      });
  }
  ne(e, n) {
    return this.Lt.getRemoteKeysForTarget(e).has(n);
  }
}
function Vg() {
  return new Le($.comparator);
}
function zg() {
  return new Le($.comparator);
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
 */ const $N = (() => ({ asc: 'ASCENDING', desc: 'DESCENDING' }))(),
  LN = (() => ({
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
  MN = (() => ({ and: 'AND', or: 'OR' }))();
class bN {
  constructor(e, n) {
    (this.databaseId = e), (this.yt = n);
  }
}
function UN(t, e) {
  return t.yt
    ? `${new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, '').replace('Z', '')}.${(
        '000000000' + e.nanoseconds
      ).slice(-9)}Z`
    : { seconds: '' + e.seconds, nanos: e.nanoseconds };
}
function FN(t, e) {
  return t.yt ? e.toBase64() : e.toUint8Array();
}
function ci(t) {
  return (
    ve(!!t),
    F.fromTimestamp(
      (function (e) {
        const n = Xn(e);
        return new lt(n.seconds, n.nanos);
      })(t)
    )
  );
}
function jN(t, e) {
  return (function (n) {
    return new he(['projects', n.projectId, 'databases', n.database]);
  })(t)
    .child('documents')
    .child(e)
    .canonicalString();
}
function zw(t) {
  const e = he.fromString(t);
  return ve(Ww(e)), e;
}
function Dc(t, e) {
  const n = zw(e);
  if (n.get(1) !== t.databaseId.projectId)
    throw new L(
      R.INVALID_ARGUMENT,
      'Tried to deserialize key from different project: ' +
        n.get(1) +
        ' vs ' +
        t.databaseId.projectId
    );
  if (n.get(3) !== t.databaseId.database)
    throw new L(
      R.INVALID_ARGUMENT,
      'Tried to deserialize key from different database: ' +
        n.get(3) +
        ' vs ' +
        t.databaseId.database
    );
  return new $(Bw(n));
}
function md(t, e) {
  return jN(t.databaseId, e);
}
function VN(t) {
  const e = zw(t);
  return e.length === 4 ? he.emptyPath() : Bw(e);
}
function Bg(t) {
  return new he([
    'projects',
    t.databaseId.projectId,
    'databases',
    t.databaseId.database
  ]).canonicalString();
}
function Bw(t) {
  return ve(t.length > 4 && t.get(4) === 'documents'), t.popFirst(5);
}
function zN(t, e) {
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
          : j();
      })(e.targetChange.targetChangeType || 'NO_CHANGE'),
      i = e.targetChange.targetIds || [],
      s = (function (l, u) {
        return l.yt
          ? (ve(u === void 0 || typeof u == 'string'), Ge.fromBase64String(u || ''))
          : (ve(u === void 0 || u instanceof Uint8Array), Ge.fromUint8Array(u || new Uint8Array()));
      })(t, e.targetChange.resumeToken),
      o = e.targetChange.cause,
      a =
        o &&
        (function (l) {
          const u = l.code === void 0 ? R.UNKNOWN : Mw(l.code);
          return new L(u, l.message || '');
        })(o);
    n = new Vw(r, i, s, a || null);
  } else if ('documentChange' in e) {
    e.documentChange;
    const r = e.documentChange;
    r.document, r.document.name, r.document.updateTime;
    const i = Dc(t, r.document.name),
      s = ci(r.document.updateTime),
      o = r.document.createTime ? ci(r.document.createTime) : F.min(),
      a = new Vt({ mapValue: { fields: r.document.fields } }),
      l = Be.newFoundDocument(i, s, o, a),
      u = r.targetIds || [],
      c = r.removedTargetIds || [];
    n = new fa(u, c, l.key, l);
  } else if ('documentDelete' in e) {
    e.documentDelete;
    const r = e.documentDelete;
    r.document;
    const i = Dc(t, r.document),
      s = r.readTime ? ci(r.readTime) : F.min(),
      o = Be.newNoDocument(i, s),
      a = r.removedTargetIds || [];
    n = new fa([], a, o.key, o);
  } else if ('documentRemove' in e) {
    e.documentRemove;
    const r = e.documentRemove;
    r.document;
    const i = Dc(t, r.document),
      s = r.removedTargetIds || [];
    n = new fa([], s, i, null);
  } else {
    if (!('filter' in e)) return j();
    {
      e.filter;
      const r = e.filter;
      r.targetId;
      const i = r.count || 0,
        s = new NN(i),
        o = r.targetId;
      n = new jw(o, s);
    }
  }
  return n;
}
function BN(t, e) {
  return { documents: [md(t, e.path)] };
}
function HN(t, e) {
  const n = { structuredQuery: {} },
    r = e.path;
  e.collectionGroup !== null
    ? ((n.parent = md(t, r)),
      (n.structuredQuery.from = [{ collectionId: e.collectionGroup, allDescendants: !0 }]))
    : ((n.parent = md(t, r.popLast())),
      (n.structuredQuery.from = [{ collectionId: r.lastSegment() }]));
  const i = (function (l) {
    if (l.length !== 0) return Kw(Gt.create(l, 'and'));
  })(e.filters);
  i && (n.structuredQuery.where = i);
  const s = (function (l) {
    if (l.length !== 0)
      return l.map((u) =>
        (function (c) {
          return { field: Fr(c.field), direction: qN(c.dir) };
        })(u)
      );
  })(e.orderBy);
  s && (n.structuredQuery.orderBy = s);
  const o = (function (l, u) {
    return l.yt || Eu(u) ? u : { value: u };
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
function KN(t) {
  let e = VN(t.parent);
  const n = t.structuredQuery,
    r = n.from ? n.from.length : 0;
  let i = null;
  if (r > 0) {
    ve(r === 1);
    const c = n.from[0];
    c.allDescendants ? (i = c.collectionId) : (e = e.child(c.collectionId));
  }
  let s = [];
  n.where &&
    (s = (function (c) {
      const h = Hw(c);
      return h instanceof Gt && Iw(h) ? h.getFilters() : [h];
    })(n.where));
  let o = [];
  n.orderBy &&
    (o = n.orderBy.map((c) =>
      (function (h) {
        return new vs(
          jr(h.field),
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
      return (h = typeof c == 'object' ? c.value : c), Eu(h) ? null : h;
    })(n.limit));
  let l = null;
  n.startAt &&
    (l = (function (c) {
      const h = !!c.before,
        d = c.values || [];
      return new ul(d, h);
    })(n.startAt));
  let u = null;
  return (
    n.endAt &&
      (u = (function (c) {
        const h = !c.before,
          d = c.values || [];
        return new ul(d, h);
      })(n.endAt)),
    pN(e, i, o, s, a, 'F', l, u)
  );
}
function WN(t, e) {
  const n = (function (r, i) {
    switch (i) {
      case 0:
        return null;
      case 1:
        return 'existence-filter-mismatch';
      case 2:
        return 'limbo-document';
      default:
        return j();
    }
  })(0, e.purpose);
  return n == null ? null : { 'goog-listen-tags': n };
}
function Hw(t) {
  return t.unaryFilter !== void 0
    ? (function (e) {
        switch (e.unaryFilter.op) {
          case 'IS_NAN':
            const n = jr(e.unaryFilter.field);
            return Ee.create(n, '==', { doubleValue: NaN });
          case 'IS_NULL':
            const r = jr(e.unaryFilter.field);
            return Ee.create(r, '==', { nullValue: 'NULL_VALUE' });
          case 'IS_NOT_NAN':
            const i = jr(e.unaryFilter.field);
            return Ee.create(i, '!=', { doubleValue: NaN });
          case 'IS_NOT_NULL':
            const s = jr(e.unaryFilter.field);
            return Ee.create(s, '!=', { nullValue: 'NULL_VALUE' });
          default:
            return j();
        }
      })(t)
    : t.fieldFilter !== void 0
    ? (function (e) {
        return Ee.create(
          jr(e.fieldFilter.field),
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
                return j();
            }
          })(e.fieldFilter.op),
          e.fieldFilter.value
        );
      })(t)
    : t.compositeFilter !== void 0
    ? (function (e) {
        return Gt.create(
          e.compositeFilter.filters.map((n) => Hw(n)),
          (function (n) {
            switch (n) {
              case 'AND':
                return 'and';
              case 'OR':
                return 'or';
              default:
                return j();
            }
          })(e.compositeFilter.op)
        );
      })(t)
    : j();
}
function qN(t) {
  return $N[t];
}
function GN(t) {
  return LN[t];
}
function QN(t) {
  return MN[t];
}
function Fr(t) {
  return { fieldPath: t.canonicalString() };
}
function jr(t) {
  return rt.fromServerFormat(t.fieldPath);
}
function Kw(t) {
  return t instanceof Ee
    ? (function (e) {
        if (e.op === '==') {
          if (Pg(e.value)) return { unaryFilter: { field: Fr(e.field), op: 'IS_NAN' } };
          if (Rg(e.value)) return { unaryFilter: { field: Fr(e.field), op: 'IS_NULL' } };
        } else if (e.op === '!=') {
          if (Pg(e.value)) return { unaryFilter: { field: Fr(e.field), op: 'IS_NOT_NAN' } };
          if (Rg(e.value)) return { unaryFilter: { field: Fr(e.field), op: 'IS_NOT_NULL' } };
        }
        return { fieldFilter: { field: Fr(e.field), op: GN(e.op), value: e.value } };
      })(t)
    : t instanceof Gt
    ? (function (e) {
        const n = e.getFilters().map((r) => Kw(r));
        return n.length === 1 ? n[0] : { compositeFilter: { op: QN(e.op), filters: n } };
      })(t)
    : j();
}
function Ww(t) {
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
 */ class XN {
  constructor(e, n, r, i) {
    (this.batchId = e), (this.localWriteTime = n), (this.baseMutations = r), (this.mutations = i);
  }
  applyToRemoteDocument(e, n) {
    const r = n.mutationResults;
    for (let i = 0; i < this.mutations.length; i++) {
      const s = this.mutations[i];
      s.key.isEqual(e.key) && CN(s, e, r[i]);
    }
  }
  applyToLocalView(e, n) {
    for (const r of this.baseMutations)
      r.key.isEqual(e.key) && (n = ws(r, e, n, this.localWriteTime));
    for (const r of this.mutations) r.key.isEqual(e.key) && (n = ws(r, e, n, this.localWriteTime));
    return n;
  }
  applyToLocalDocumentSet(e, n) {
    const r = Uw();
    return (
      this.mutations.forEach((i) => {
        const s = e.get(i.key),
          o = s.overlayedDocument;
        let a = this.applyToLocalView(o, s.mutatedFields);
        a = n.has(i.key) ? null : a;
        const l = $w(o, a);
        l !== null && r.set(i.key, l), o.isValidDocument() || o.convertToNoDocument(F.min());
      }),
      r
    );
  }
  keys() {
    return this.mutations.reduce((e, n) => e.add(n.key), K());
  }
  isEqual(e) {
    return (
      this.batchId === e.batchId &&
      Ai(this.mutations, e.mutations, (n, r) => bg(n, r)) &&
      Ai(this.baseMutations, e.baseMutations, (n, r) => bg(n, r))
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
 */ class YN {
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
 */ class _r {
  constructor(e, n, r, i, s = F.min(), o = F.min(), a = Ge.EMPTY_BYTE_STRING) {
    (this.target = e),
      (this.targetId = n),
      (this.purpose = r),
      (this.sequenceNumber = i),
      (this.snapshotVersion = s),
      (this.lastLimboFreeSnapshotVersion = o),
      (this.resumeToken = a);
  }
  withSequenceNumber(e) {
    return new _r(
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
    return new _r(
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
    return new _r(
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
 */ class JN {
  constructor(e) {
    this.oe = e;
  }
}
function ZN(t) {
  const e = KN({ parent: t.parent, structuredQuery: t.structuredQuery });
  return t.limitType === 'LAST' ? hd(e, e.limit, 'L') : e;
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
 */ class eR {
  constructor() {
    this.Ze = new tR();
  }
  addToCollectionParentIndex(e, n) {
    return this.Ze.add(n), T.resolve();
  }
  getCollectionParents(e, n) {
    return T.resolve(this.Ze.getEntries(n));
  }
  addFieldIndex(e, n) {
    return T.resolve();
  }
  deleteFieldIndex(e, n) {
    return T.resolve();
  }
  getDocumentsMatchingTarget(e, n) {
    return T.resolve(null);
  }
  getIndexType(e, n) {
    return T.resolve(0);
  }
  getFieldIndexes(e, n) {
    return T.resolve([]);
  }
  getNextCollectionGroupToUpdate(e) {
    return T.resolve(null);
  }
  getMinOffset(e, n) {
    return T.resolve(Qn.min());
  }
  getMinOffsetFromCollectionGroup(e, n) {
    return T.resolve(Qn.min());
  }
  updateCollectionGroup(e, n, r) {
    return T.resolve();
  }
  updateIndexEntries(e, n) {
    return T.resolve();
  }
}
class tR {
  constructor() {
    this.index = {};
  }
  add(e) {
    const n = e.lastSegment(),
      r = e.popLast(),
      i = this.index[n] || new _e(he.comparator),
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
    return (this.index[e] || new _e(he.comparator)).toArray();
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
 */ class Oi {
  constructor(e) {
    this.Pn = e;
  }
  next() {
    return (this.Pn += 2), this.Pn;
  }
  static Vn() {
    return new Oi(0);
  }
  static Sn() {
    return new Oi(-1);
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
 */ class nR {
  constructor() {
    (this.changes = new Vi(
      (e) => e.toString(),
      (e, n) => e.isEqual(n)
    )),
      (this.changesApplied = !1);
  }
  addEntry(e) {
    this.assertNotApplied(), this.changes.set(e.key, e);
  }
  removeEntry(e, n) {
    this.assertNotApplied(), this.changes.set(e, Be.newInvalidDocument(e).setReadTime(n));
  }
  getEntry(e, n) {
    this.assertNotApplied();
    const r = this.changes.get(n);
    return r !== void 0 ? T.resolve(r) : this.getFromCache(e, n);
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
 */ class rR {
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
 */ class iR {
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
      .next((i) => (r !== null && ws(r.mutation, i, Pn.empty(), lt.now()), i));
  }
  getDocuments(e, n) {
    return this.remoteDocumentCache
      .getEntries(e, n)
      .next((r) => this.getLocalViewOfDocuments(e, r, K()).next(() => r));
  }
  getLocalViewOfDocuments(e, n, r = K()) {
    const i = mr();
    return this.populateOverlays(e, i, n).next(() =>
      this.computeViews(e, n, i, r).next((s) => {
        let o = os();
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
    const r = mr();
    return this.populateOverlays(e, r, n).next(() => this.computeViews(e, n, r, K()));
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
    let s = Yn();
    const o = Es(),
      a = Es();
    return (
      n.forEach((l, u) => {
        const c = r.get(u.key);
        i.has(u.key) && (c === void 0 || c.mutation instanceof ku)
          ? (s = s.insert(u.key, u))
          : c !== void 0
          ? (o.set(u.key, c.mutation.getFieldMask()),
            ws(c.mutation, u, c.mutation.getFieldMask(), lt.now()))
          : o.set(u.key, Pn.empty());
      }),
      this.recalculateAndSaveOverlays(e, s).next(
        (l) => (
          l.forEach((u, c) => o.set(u, c)),
          n.forEach((u, c) => {
            var h;
            return a.set(u, new rR(c, (h = o.get(u)) !== null && h !== void 0 ? h : null));
          }),
          a
        )
      )
    );
  }
  recalculateAndSaveOverlays(e, n) {
    const r = Es();
    let i = new Le((o, a) => o - a),
      s = K();
    return this.mutationQueue
      .getAllMutationBatchesAffectingDocumentKeys(e, n)
      .next((o) => {
        for (const a of o)
          a.keys().forEach((l) => {
            const u = n.get(l);
            if (u === null) return;
            let c = r.get(l) || Pn.empty();
            (c = a.applyToLocalView(u, c)), r.set(l, c);
            const h = (i.get(a.batchId) || K()).add(l);
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
            h = Uw();
          c.forEach((d) => {
            if (!s.has(d)) {
              const m = $w(n.get(d), r.get(d));
              m !== null && h.set(d, m), (s = s.add(d));
            }
          }),
            o.push(this.documentOverlayCache.saveOverlays(e, u, h));
        }
        return T.waitFor(o);
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
      return $.isDocumentKey(i.path) && i.collectionGroup === null && i.filters.length === 0;
    })(n)
      ? this.getDocumentsMatchingDocumentQuery(e, n.path)
      : yN(n)
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
          : T.resolve(mr());
      let a = -1,
        l = s;
      return o.next((u) =>
        T.forEach(
          u,
          (c, h) => (
            a < h.largestBatchId && (a = h.largestBatchId),
            s.get(c)
              ? T.resolve()
              : this.remoteDocumentCache.getEntry(e, c).next((d) => {
                  l = l.insert(c, d);
                })
          )
        )
          .next(() => this.populateOverlays(e, u, s))
          .next(() => this.computeViews(e, l, u, K()))
          .next((c) => ({ batchId: a, changes: PN(c) }))
      );
    });
  }
  getDocumentsMatchingDocumentQuery(e, n) {
    return this.getDocument(e, new $(n)).next((r) => {
      let i = os();
      return r.isFoundDocument() && (i = i.insert(r.key, r)), i;
    });
  }
  getDocumentsMatchingCollectionGroupQuery(e, n, r) {
    const i = n.collectionGroup;
    let s = os();
    return this.indexManager.getCollectionParents(e, i).next((o) =>
      T.forEach(o, (a) => {
        const l = (function (u, c) {
          return new Su(
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
          s.get(u) === null && (s = s.insert(u, Be.newInvalidDocument(u)));
        });
        let o = os();
        return (
          s.forEach((a, l) => {
            const u = i.get(a);
            u !== void 0 && ws(u.mutation, l, Pn.empty(), lt.now()),
              Tu(n, l) && (o = o.insert(a, l));
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
 */ class sR {
  constructor(e) {
    (this.Tt = e), (this.es = new Map()), (this.ns = new Map());
  }
  getBundleMetadata(e, n) {
    return T.resolve(this.es.get(n));
  }
  saveBundleMetadata(e, n) {
    var r;
    return (
      this.es.set(n.id, { id: (r = n).id, version: r.version, createTime: ci(r.createTime) }),
      T.resolve()
    );
  }
  getNamedQuery(e, n) {
    return T.resolve(this.ns.get(n));
  }
  saveNamedQuery(e, n) {
    return (
      this.ns.set(
        n.name,
        (function (r) {
          return { name: r.name, query: ZN(r.bundledQuery), readTime: ci(r.readTime) };
        })(n)
      ),
      T.resolve()
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
 */ class oR {
  constructor() {
    (this.overlays = new Le($.comparator)), (this.ss = new Map());
  }
  getOverlay(e, n) {
    return T.resolve(this.overlays.get(n));
  }
  getOverlays(e, n) {
    const r = mr();
    return T.forEach(n, (i) =>
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
      T.resolve()
    );
  }
  removeOverlaysForBatchId(e, n, r) {
    const i = this.ss.get(r);
    return (
      i !== void 0 &&
        (i.forEach((s) => (this.overlays = this.overlays.remove(s))), this.ss.delete(r)),
      T.resolve()
    );
  }
  getOverlaysForCollection(e, n, r) {
    const i = mr(),
      s = n.length + 1,
      o = new $(n.child('')),
      a = this.overlays.getIteratorFrom(o);
    for (; a.hasNext(); ) {
      const l = a.getNext().value,
        u = l.getKey();
      if (!n.isPrefixOf(u.path)) break;
      u.path.length === s && l.largestBatchId > r && i.set(l.getKey(), l);
    }
    return T.resolve(i);
  }
  getOverlaysForCollectionGroup(e, n, r, i) {
    let s = new Le((u, c) => u - c);
    const o = this.overlays.getIterator();
    for (; o.hasNext(); ) {
      const u = o.getNext().value;
      if (u.getKey().getCollectionGroup() === n && u.largestBatchId > r) {
        let c = s.get(u.largestBatchId);
        c === null && ((c = mr()), (s = s.insert(u.largestBatchId, c))), c.set(u.getKey(), u);
      }
    }
    const a = mr(),
      l = s.getIterator();
    for (; l.hasNext() && (l.getNext().value.forEach((u, c) => a.set(u, c)), !(a.size() >= i)); );
    return T.resolve(a);
  }
  ce(e, n, r) {
    const i = this.overlays.get(r.key);
    if (i !== null) {
      const o = this.ss.get(i.largestBatchId).delete(r.key);
      this.ss.set(i.largestBatchId, o);
    }
    this.overlays = this.overlays.insert(r.key, new YN(n, r));
    let s = this.ss.get(n);
    s === void 0 && ((s = K()), this.ss.set(n, s)), this.ss.set(n, s.add(r.key));
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
 */ class hp {
  constructor() {
    (this.rs = new _e(Ie.os)), (this.us = new _e(Ie.cs));
  }
  isEmpty() {
    return this.rs.isEmpty();
  }
  addReference(e, n) {
    const r = new Ie(e, n);
    (this.rs = this.rs.add(r)), (this.us = this.us.add(r));
  }
  hs(e, n) {
    e.forEach((r) => this.addReference(r, n));
  }
  removeReference(e, n) {
    this.ls(new Ie(e, n));
  }
  fs(e, n) {
    e.forEach((r) => this.removeReference(r, n));
  }
  ds(e) {
    const n = new $(new he([])),
      r = new Ie(n, e),
      i = new Ie(n, e + 1),
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
    const n = new $(new he([])),
      r = new Ie(n, e),
      i = new Ie(n, e + 1);
    let s = K();
    return (
      this.us.forEachInRange([r, i], (o) => {
        s = s.add(o.key);
      }),
      s
    );
  }
  containsKey(e) {
    const n = new Ie(e, 0),
      r = this.rs.firstAfterOrEqual(n);
    return r !== null && e.isEqual(r.key);
  }
}
class Ie {
  constructor(e, n) {
    (this.key = e), (this.gs = n);
  }
  static os(e, n) {
    return $.comparator(e.key, n.key) || Q(e.gs, n.gs);
  }
  static cs(e, n) {
    return Q(e.gs, n.gs) || $.comparator(e.key, n.key);
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
 */ class aR {
  constructor(e, n) {
    (this.indexManager = e),
      (this.referenceDelegate = n),
      (this.mutationQueue = []),
      (this.ys = 1),
      (this.ps = new _e(Ie.os));
  }
  checkEmpty(e) {
    return T.resolve(this.mutationQueue.length === 0);
  }
  addMutationBatch(e, n, r, i) {
    const s = this.ys;
    this.ys++, this.mutationQueue.length > 0 && this.mutationQueue[this.mutationQueue.length - 1];
    const o = new XN(s, n, r, i);
    this.mutationQueue.push(o);
    for (const a of i)
      (this.ps = this.ps.add(new Ie(a.key, s))),
        this.indexManager.addToCollectionParentIndex(e, a.key.path.popLast());
    return T.resolve(o);
  }
  lookupMutationBatch(e, n) {
    return T.resolve(this.Is(n));
  }
  getNextMutationBatchAfterBatchId(e, n) {
    const r = n + 1,
      i = this.Ts(r),
      s = i < 0 ? 0 : i;
    return T.resolve(this.mutationQueue.length > s ? this.mutationQueue[s] : null);
  }
  getHighestUnacknowledgedBatchId() {
    return T.resolve(this.mutationQueue.length === 0 ? -1 : this.ys - 1);
  }
  getAllMutationBatches(e) {
    return T.resolve(this.mutationQueue.slice());
  }
  getAllMutationBatchesAffectingDocumentKey(e, n) {
    const r = new Ie(n, 0),
      i = new Ie(n, Number.POSITIVE_INFINITY),
      s = [];
    return (
      this.ps.forEachInRange([r, i], (o) => {
        const a = this.Is(o.gs);
        s.push(a);
      }),
      T.resolve(s)
    );
  }
  getAllMutationBatchesAffectingDocumentKeys(e, n) {
    let r = new _e(Q);
    return (
      n.forEach((i) => {
        const s = new Ie(i, 0),
          o = new Ie(i, Number.POSITIVE_INFINITY);
        this.ps.forEachInRange([s, o], (a) => {
          r = r.add(a.gs);
        });
      }),
      T.resolve(this.Es(r))
    );
  }
  getAllMutationBatchesAffectingQuery(e, n) {
    const r = n.path,
      i = r.length + 1;
    let s = r;
    $.isDocumentKey(s) || (s = s.child(''));
    const o = new Ie(new $(s), 0);
    let a = new _e(Q);
    return (
      this.ps.forEachWhile((l) => {
        const u = l.key.path;
        return !!r.isPrefixOf(u) && (u.length === i && (a = a.add(l.gs)), !0);
      }, o),
      T.resolve(this.Es(a))
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
    ve(this.As(n.batchId, 'removed') === 0), this.mutationQueue.shift();
    let r = this.ps;
    return T.forEach(n.mutations, (i) => {
      const s = new Ie(i.key, n.batchId);
      return (r = r.delete(s)), this.referenceDelegate.markPotentiallyOrphaned(e, i.key);
    }).next(() => {
      this.ps = r;
    });
  }
  bn(e) {}
  containsKey(e, n) {
    const r = new Ie(n, 0),
      i = this.ps.firstAfterOrEqual(r);
    return T.resolve(n.isEqual(i && i.key));
  }
  performConsistencyCheck(e) {
    return this.mutationQueue.length, T.resolve();
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
 */ class lR {
  constructor(e) {
    (this.Rs = e), (this.docs = new Le($.comparator)), (this.size = 0);
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
    return T.resolve(r ? r.document.mutableCopy() : Be.newInvalidDocument(n));
  }
  getEntries(e, n) {
    let r = Yn();
    return (
      n.forEach((i) => {
        const s = this.docs.get(i);
        r = r.insert(i, s ? s.document.mutableCopy() : Be.newInvalidDocument(i));
      }),
      T.resolve(r)
    );
  }
  getDocumentsMatchingQuery(e, n, r, i) {
    let s = Yn();
    const o = n.path,
      a = new $(o.child('')),
      l = this.docs.getIteratorFrom(a);
    for (; l.hasNext(); ) {
      const {
        key: u,
        value: { document: c }
      } = l.getNext();
      if (!o.isPrefixOf(u.path)) break;
      u.path.length > o.length + 1 ||
        XA(QA(c), r) <= 0 ||
        ((i.has(c.key) || Tu(n, c)) && (s = s.insert(c.key, c.mutableCopy())));
    }
    return T.resolve(s);
  }
  getAllFromCollectionGroup(e, n, r, i) {
    j();
  }
  bs(e, n) {
    return T.forEach(this.docs, (r) => n(r));
  }
  newChangeBuffer(e) {
    return new uR(this);
  }
  getSize(e) {
    return T.resolve(this.size);
  }
}
class uR extends nR {
  constructor(e) {
    super(), (this.Xn = e);
  }
  applyChanges(e) {
    const n = [];
    return (
      this.changes.forEach((r, i) => {
        i.isValidDocument() ? n.push(this.Xn.addEntry(e, i)) : this.Xn.removeEntry(r);
      }),
      T.waitFor(n)
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
 */ class cR {
  constructor(e) {
    (this.persistence = e),
      (this.vs = new Vi((n) => ap(n), lp)),
      (this.lastRemoteSnapshotVersion = F.min()),
      (this.highestTargetId = 0),
      (this.Ps = 0),
      (this.Vs = new hp()),
      (this.targetCount = 0),
      (this.Ss = Oi.Vn());
  }
  forEachTarget(e, n) {
    return this.vs.forEach((r, i) => n(i)), T.resolve();
  }
  getLastRemoteSnapshotVersion(e) {
    return T.resolve(this.lastRemoteSnapshotVersion);
  }
  getHighestSequenceNumber(e) {
    return T.resolve(this.Ps);
  }
  allocateTargetId(e) {
    return (this.highestTargetId = this.Ss.next()), T.resolve(this.highestTargetId);
  }
  setTargetsMetadata(e, n, r) {
    return r && (this.lastRemoteSnapshotVersion = r), n > this.Ps && (this.Ps = n), T.resolve();
  }
  xn(e) {
    this.vs.set(e.target, e);
    const n = e.targetId;
    n > this.highestTargetId && ((this.Ss = new Oi(n)), (this.highestTargetId = n)),
      e.sequenceNumber > this.Ps && (this.Ps = e.sequenceNumber);
  }
  addTargetData(e, n) {
    return this.xn(n), (this.targetCount += 1), T.resolve();
  }
  updateTargetData(e, n) {
    return this.xn(n), T.resolve();
  }
  removeTargetData(e, n) {
    return this.vs.delete(n.target), this.Vs.ds(n.targetId), (this.targetCount -= 1), T.resolve();
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
      T.waitFor(s).next(() => i)
    );
  }
  getTargetCount(e) {
    return T.resolve(this.targetCount);
  }
  getTargetData(e, n) {
    const r = this.vs.get(n) || null;
    return T.resolve(r);
  }
  addMatchingKeys(e, n, r) {
    return this.Vs.hs(n, r), T.resolve();
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
      T.waitFor(s)
    );
  }
  removeMatchingKeysForTargetId(e, n) {
    return this.Vs.ds(n), T.resolve();
  }
  getMatchingKeysForTargetId(e, n) {
    const r = this.Vs.ws(n);
    return T.resolve(r);
  }
  containsKey(e, n) {
    return T.resolve(this.Vs.containsKey(n));
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
 */ class hR {
  constructor(e, n) {
    (this.Ds = {}),
      (this.overlays = {}),
      (this.Cs = new sp(0)),
      (this.xs = !1),
      (this.xs = !0),
      (this.referenceDelegate = e(this)),
      (this.Ns = new cR(this)),
      (this.indexManager = new eR()),
      (this.remoteDocumentCache = (function (r) {
        return new lR(r);
      })((r) => this.referenceDelegate.ks(r))),
      (this.Tt = new JN(n)),
      (this.Os = new sR(this.Tt));
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
    return n || ((n = new oR()), (this.overlays[e.toKey()] = n)), n;
  }
  getMutationQueue(e, n) {
    let r = this.Ds[e.toKey()];
    return r || ((r = new aR(n, this.referenceDelegate)), (this.Ds[e.toKey()] = r)), r;
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
    D('MemoryPersistence', 'Starting transaction:', e);
    const i = new dR(this.Cs.next());
    return (
      this.referenceDelegate.Ms(),
      r(i)
        .next((s) => this.referenceDelegate.Fs(i).next(() => s))
        .toPromise()
        .then((s) => (i.raiseOnCommittedEvent(), s))
    );
  }
  $s(e, n) {
    return T.or(Object.values(this.Ds).map((r) => () => r.containsKey(e, n)));
  }
}
class dR extends JA {
  constructor(e) {
    super(), (this.currentSequenceNumber = e);
  }
}
class dp {
  constructor(e) {
    (this.persistence = e), (this.Bs = new hp()), (this.Ls = null);
  }
  static qs(e) {
    return new dp(e);
  }
  get Us() {
    if (this.Ls) return this.Ls;
    throw j();
  }
  addReference(e, n, r) {
    return this.Bs.addReference(r, n), this.Us.delete(r.toString()), T.resolve();
  }
  removeReference(e, n, r) {
    return this.Bs.removeReference(r, n), this.Us.add(r.toString()), T.resolve();
  }
  markPotentiallyOrphaned(e, n) {
    return this.Us.add(n.toString()), T.resolve();
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
    return T.forEach(this.Us, (r) => {
      const i = $.fromPath(r);
      return this.Ks(e, i).next((s) => {
        s || n.removeEntry(i, F.min());
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
    return T.or([
      () => T.resolve(this.Bs.containsKey(n)),
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
 */ class fp {
  constructor(e, n, r, i) {
    (this.targetId = e), (this.fromCache = n), (this.Ci = r), (this.xi = i);
  }
  static Ni(e, n) {
    let r = K(),
      i = K();
    for (const s of n.docChanges)
      switch (s.type) {
        case 0:
          r = r.add(s.doc.key);
          break;
        case 1:
          i = i.add(s.doc.key);
      }
    return new fp(e, n.fromCache, r, i);
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
 */ class fR {
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
    if (Lg(n)) return T.resolve(null);
    let r = dn(n);
    return this.indexManager.getIndexType(e, r).next((i) =>
      i === 0
        ? null
        : (n.limit !== null && i === 1 && ((n = hd(n, null, 'F')), (r = dn(n))),
          this.indexManager.getDocumentsMatchingTarget(e, r).next((s) => {
            const o = K(...s);
            return this.Oi.getDocuments(e, o).next((a) =>
              this.indexManager.getMinOffset(e, r).next((l) => {
                const u = this.Bi(n, a);
                return this.Li(n, u, o, l.readTime)
                  ? this.Mi(e, hd(n, null, 'F'))
                  : this.qi(e, u, n, l);
              })
            );
          }))
    );
  }
  Fi(e, n, r, i) {
    return Lg(n) || i.isEqual(F.min())
      ? this.$i(e, n)
      : this.Oi.getDocuments(e, r).next((s) => {
          const o = this.Bi(n, s);
          return this.Li(n, o, r, i)
            ? this.$i(e, n)
            : (Cg() <= G.DEBUG &&
                D(
                  'QueryEngine',
                  'Re-using previous result from %s to execute query: %s',
                  i.toString(),
                  dd(n)
                ),
              this.qi(e, o, n, GA(i, -1)));
        });
  }
  Bi(e, n) {
    let r = new _e(Pw(e));
    return (
      n.forEach((i, s) => {
        Tu(e, s) && (r = r.add(s));
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
      Cg() <= G.DEBUG && D('QueryEngine', 'Using full collection scan to execute query:', dd(n)),
      this.Oi.getDocumentsMatchingQuery(e, n, Qn.min())
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
 */ class pR {
  constructor(e, n, r, i) {
    (this.persistence = e),
      (this.Ui = n),
      (this.Tt = i),
      (this.Ki = new Le(Q)),
      (this.Gi = new Vi((s) => ap(s), lp)),
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
      (this.localDocuments = new iR(
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
function mR(t, e, n, r) {
  return new pR(t, e, n, r);
}
async function qw(t, e) {
  const n = q(t);
  return await n.persistence.runTransaction('Handle user change', 'readonly', (r) => {
    let i;
    return n.mutationQueue
      .getAllMutationBatches(r)
      .next((s) => ((i = s), n.zi(e), n.mutationQueue.getAllMutationBatches(r)))
      .next((s) => {
        const o = [],
          a = [];
        let l = K();
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
function Gw(t) {
  const e = q(t);
  return e.persistence.runTransaction('Get last remote snapshot version', 'readonly', (n) =>
    e.Ns.getLastRemoteSnapshotVersion(n)
  );
}
function gR(t, e) {
  const n = q(t),
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
              .withResumeToken(Ge.EMPTY_BYTE_STRING, F.min())
              .withLastLimboFreeSnapshotVersion(F.min()))
          : c.resumeToken.approximateByteSize() > 0 && (m = m.withResumeToken(c.resumeToken, r)),
          (i = i.insert(h, m)),
          (function (y, v, E) {
            return y.resumeToken.approximateByteSize() === 0 ||
              v.snapshotVersion.toMicroseconds() - y.snapshotVersion.toMicroseconds() >= 3e8
              ? !0
              : E.addedDocuments.size + E.modifiedDocuments.size + E.removedDocuments.size > 0;
          })(d, m, c) && a.push(n.Ns.updateTargetData(s, m));
      });
      let l = Yn(),
        u = K();
      if (
        (e.documentUpdates.forEach((c) => {
          e.resolvedLimboDocuments.has(c) &&
            a.push(n.persistence.referenceDelegate.updateLimboDocument(s, c));
        }),
        a.push(
          yR(s, o, e.documentUpdates).next((c) => {
            (l = c.Hi), (u = c.Ji);
          })
        ),
        !r.isEqual(F.min()))
      ) {
        const c = n.Ns.getLastRemoteSnapshotVersion(s).next((h) =>
          n.Ns.setTargetsMetadata(s, s.currentSequenceNumber, r)
        );
        a.push(c);
      }
      return T.waitFor(a)
        .next(() => o.apply(s))
        .next(() => n.localDocuments.getLocalViewOfDocuments(s, l, u))
        .next(() => l);
    })
    .then((s) => ((n.Ki = i), s));
}
function yR(t, e, n) {
  let r = K(),
    i = K();
  return (
    n.forEach((s) => (r = r.add(s))),
    e.getEntries(t, r).next((s) => {
      let o = Yn();
      return (
        n.forEach((a, l) => {
          const u = s.get(a);
          l.isFoundDocument() !== u.isFoundDocument() && (i = i.add(a)),
            l.isNoDocument() && l.version.isEqual(F.min())
              ? (e.removeEntry(a, l.readTime), (o = o.insert(a, l)))
              : !u.isValidDocument() ||
                l.version.compareTo(u.version) > 0 ||
                (l.version.compareTo(u.version) === 0 && u.hasPendingWrites)
              ? (e.addEntry(l), (o = o.insert(a, l)))
              : D(
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
function vR(t, e) {
  const n = q(t);
  return n.persistence
    .runTransaction('Allocate target', 'readwrite', (r) => {
      let i;
      return n.Ns.getTargetData(r, e).next((s) =>
        s
          ? ((i = s), T.resolve(i))
          : n.Ns.allocateTargetId(r).next(
              (o) => (
                (i = new _r(e, o, 0, r.currentSequenceNumber)),
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
async function gd(t, e, n) {
  const r = q(t),
    i = r.Ki.get(e),
    s = n ? 'readwrite' : 'readwrite-primary';
  try {
    n ||
      (await r.persistence.runTransaction('Release target', s, (o) =>
        r.persistence.referenceDelegate.removeTarget(o, i)
      ));
  } catch (o) {
    if (!wo(o)) throw o;
    D('LocalStore', `Failed to update sequence numbers for target ${e}: ${o}`);
  }
  (r.Ki = r.Ki.remove(e)), r.Gi.delete(i.target);
}
function Hg(t, e, n) {
  const r = q(t);
  let i = F.min(),
    s = K();
  return r.persistence.runTransaction('Execute query', 'readonly', (o) =>
    (function (a, l, u) {
      const c = q(a),
        h = c.Gi.get(u);
      return h !== void 0 ? T.resolve(c.Ki.get(h)) : c.Ns.getTargetData(l, u);
    })(r, o, dn(e))
      .next((a) => {
        if (a)
          return (
            (i = a.lastLimboFreeSnapshotVersion),
            r.Ns.getMatchingKeysForTargetId(o, a.targetId).next((l) => {
              s = l;
            })
          );
      })
      .next(() => r.Ui.getDocumentsMatchingQuery(o, e, n ? i : F.min(), n ? s : K()))
      .next((a) => (wR(r, vN(e), a), { documents: a, Yi: s }))
  );
}
function wR(t, e, n) {
  let r = t.Qi.get(e) || F.min();
  n.forEach((i, s) => {
    s.readTime.compareTo(r) > 0 && (r = s.readTime);
  }),
    t.Qi.set(e, r);
}
class Kg {
  constructor() {
    this.activeTargetIds = Fw();
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
class ER {
  constructor() {
    (this.Ur = new Kg()),
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
    return (this.Ur = new Kg()), Promise.resolve();
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
 */ class SR {
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
 */ class Wg {
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
    D('ConnectivityMonitor', 'Network connectivity changed: AVAILABLE');
    for (const e of this.Hr) e(0);
  }
  Wr() {
    D('ConnectivityMonitor', 'Network connectivity changed: UNAVAILABLE');
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
 */ const _R = {
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
 */ class TR {
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
 */ class IR extends class {
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
    D('RestConnection', 'Sending: ', o, r);
    const a = {};
    return (
      this._o(a, i, s),
      this.wo(e, o, a, r).then(
        (l) => (D('RestConnection', 'Received: ', l), l),
        (l) => {
          throw (sd('RestConnection', `${e} failed with error: `, l, 'url: ', o, 'request:', r), l);
        }
      )
    );
  }
  mo(e, n, r, i, s, o) {
    return this.lo(e, n, r, i, s);
  }
  _o(e, n, r) {
    (e['X-Goog-Api-Client'] = 'gl-js/ fire/' + ji),
      (e['Content-Type'] = 'text/plain'),
      this.databaseInfo.appId && (e['X-Firebase-GMPID'] = this.databaseInfo.appId),
      n && n.headers.forEach((i, s) => (e[s] = i)),
      r && r.headers.forEach((i, s) => (e[s] = i));
  }
  fo(e, n) {
    const r = _R[e];
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
      const a = new bA();
      a.setWithCredentials(!0),
        a.listenOnce($A.COMPLETE, () => {
          try {
            switch (a.getLastErrorCode()) {
              case Oc.NO_ERROR:
                const u = a.getResponseJson();
                D('Connection', 'XHR received:', JSON.stringify(u)), s(u);
                break;
              case Oc.TIMEOUT:
                D('Connection', 'RPC "' + e + '" timed out'),
                  o(new L(R.DEADLINE_EXCEEDED, 'Request time out'));
                break;
              case Oc.HTTP_ERROR:
                const c = a.getStatus();
                if (
                  (D(
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
                      return Object.values(R).indexOf(v) >= 0 ? v : R.UNKNOWN;
                    })(d.status);
                    o(new L(m, d.message));
                  } else o(new L(R.UNKNOWN, 'Server responded with status ' + a.getStatus()));
                } else o(new L(R.UNAVAILABLE, 'Connection failed.'));
                break;
              default:
                j();
            }
          } finally {
            D('Connection', 'RPC "' + e + '" completed.');
          }
        });
      const l = JSON.stringify(i);
      a.send(n, 'POST', l, r, 15);
    });
  }
  yo(e, n, r) {
    const i = [this.co, '/', 'google.firestore.v1.Firestore', '/', e, '/channel'],
      s = xA(),
      o = DA(),
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
    this.useFetchStreams && (a.xmlHttpFactory = new MA({})),
      this._o(a.initMessageHeaders, n, r),
      (a.encodeInitMessageHeaders = !0);
    const l = i.join('');
    D('Connection', 'Creating WebChannel: ' + l, a);
    const u = s.createWebChannel(l, a);
    let c = !1,
      h = !1;
    const d = new TR({
        Yr: (y) => {
          h
            ? D('Connection', 'Not sending because WebChannel is closed:', y)
            : (c || (D('Connection', 'Opening WebChannel transport.'), u.open(), (c = !0)),
              D('Connection', 'WebChannel sending:', y),
              u.send(y));
        },
        Zr: () => u.close()
      }),
      m = (y, v, E) => {
        y.listen(v, (p) => {
          try {
            E(p);
          } catch (f) {
            setTimeout(() => {
              throw f;
            }, 0);
          }
        });
      };
    return (
      m(u, Go.EventType.OPEN, () => {
        h || D('Connection', 'WebChannel transport opened.');
      }),
      m(u, Go.EventType.CLOSE, () => {
        h || ((h = !0), D('Connection', 'WebChannel transport closed'), d.oo());
      }),
      m(u, Go.EventType.ERROR, (y) => {
        h ||
          ((h = !0),
          sd('Connection', 'WebChannel transport errored:', y),
          d.oo(new L(R.UNAVAILABLE, 'The operation could not be completed')));
      }),
      m(u, Go.EventType.MESSAGE, (y) => {
        var v;
        if (!h) {
          const E = y.data[0];
          ve(!!E);
          const p = E,
            f = p.error || ((v = p[0]) === null || v === void 0 ? void 0 : v.error);
          if (f) {
            D('Connection', 'WebChannel received error:', f);
            const g = f.status;
            let w = (function (k) {
                const C = me[k];
                if (C !== void 0) return Mw(C);
              })(g),
              S = f.message;
            w === void 0 &&
              ((w = R.INTERNAL), (S = 'Unknown error status: ' + g + ' with message ' + f.message)),
              (h = !0),
              d.oo(new L(w, S)),
              u.close();
          } else D('Connection', 'WebChannel received:', E), d.uo(E);
        }
      }),
      m(o, LA.STAT_EVENT, (y) => {
        y.stat === Ig.PROXY
          ? D('Connection', 'Detected buffering proxy')
          : y.stat === Ig.NOPROXY && D('Connection', 'Detected no buffering proxy');
      }),
      setTimeout(() => {
        d.ro();
      }, 0),
      d
    );
  }
}
function $c() {
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
 */ function Qw(t) {
  return new bN(t, !0);
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
 */ class Xw {
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
      D(
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
 */ class kR {
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
      (this.ko = new Xw(e, n));
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
        : n && n.code === R.RESOURCE_EXHAUSTED
        ? (hn(n.toString()),
          hn('Using maximum backoff delay to prevent overloading the backend.'),
          this.ko.bo())
        : n &&
          n.code === R.UNAUTHENTICATED &&
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
          const i = new L(R.UNKNOWN, 'Fetching auth token failed: ' + r.message);
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
    return D('PersistentStream', `close with error: ${e}`), (this.stream = null), this.close(4, e);
  }
  Qo(e) {
    return (n) => {
      this.Ys.enqueueAndForget(() =>
        this.Co === e
          ? n()
          : (D('PersistentStream', 'stream callback skipped by getCloseGuardedDispatcher.'),
            Promise.resolve())
      );
    };
  }
}
class CR extends kR {
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
    const n = zN(this.Tt, e),
      r = (function (i) {
        if (!('targetChange' in i)) return F.min();
        const s = i.targetChange;
        return s.targetIds && s.targetIds.length ? F.min() : s.readTime ? ci(s.readTime) : F.min();
      })(e);
    return this.listener.Ho(n, r);
  }
  Jo(e) {
    const n = {};
    (n.database = Bg(this.Tt)),
      (n.addTarget = (function (i, s) {
        let o;
        const a = s.target;
        return (
          (o = cd(a) ? { documents: BN(i, a) } : { query: HN(i, a) }),
          (o.targetId = s.targetId),
          s.resumeToken.approximateByteSize() > 0
            ? (o.resumeToken = FN(i, s.resumeToken))
            : s.snapshotVersion.compareTo(F.min()) > 0 &&
              (o.readTime = UN(i, s.snapshotVersion.toTimestamp())),
          o
        );
      })(this.Tt, e));
    const r = WN(this.Tt, e);
    r && (n.labels = r), this.qo(n);
  }
  Yo(e) {
    const n = {};
    (n.database = Bg(this.Tt)), (n.removeTarget = e), this.qo(n);
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
 */ class AR extends class {} {
  constructor(e, n, r, i) {
    super(),
      (this.authCredentials = e),
      (this.appCheckCredentials = n),
      (this.connection = r),
      (this.Tt = i),
      (this.iu = !1);
  }
  ru() {
    if (this.iu) throw new L(R.FAILED_PRECONDITION, 'The client has already been terminated.');
  }
  lo(e, n, r) {
    return (
      this.ru(),
      Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()])
        .then(([i, s]) => this.connection.lo(e, n, r, i, s))
        .catch((i) => {
          throw i.name === 'FirebaseError'
            ? (i.code === R.UNAUTHENTICATED &&
                (this.authCredentials.invalidateToken(),
                this.appCheckCredentials.invalidateToken()),
              i)
            : new L(R.UNKNOWN, i.toString());
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
            ? (s.code === R.UNAUTHENTICATED &&
                (this.authCredentials.invalidateToken(),
                this.appCheckCredentials.invalidateToken()),
              s)
            : new L(R.UNKNOWN, s.toString());
        })
    );
  }
  terminate() {
    this.iu = !0;
  }
}
class NR {
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
    this.cu ? (hn(n), (this.cu = !1)) : D('OnlineStateTracker', n);
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
 */ class RR {
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
          _o(this) &&
            (D('RemoteStore', 'Restarting streams for network reachability change.'),
            await (async function (a) {
              const l = q(a);
              l.mu.add(4), await So(l), l.pu.set('Unknown'), l.mu.delete(4), await Au(l);
            })(this));
        });
      }),
      (this.pu = new NR(r, i));
  }
}
async function Au(t) {
  if (_o(t)) for (const e of t.gu) await e(!0);
}
async function So(t) {
  for (const e of t.gu) await e(!1);
}
function Yw(t, e) {
  const n = q(t);
  n.wu.has(e.targetId) || (n.wu.set(e.targetId, e), gp(n) ? mp(n) : zi(n).Mo() && pp(n, e));
}
function Jw(t, e) {
  const n = q(t),
    r = zi(n);
  n.wu.delete(e),
    r.Mo() && Zw(n, e),
    n.wu.size === 0 && (r.Mo() ? r.Bo() : _o(n) && n.pu.set('Unknown'));
}
function pp(t, e) {
  t.Iu.Ft(e.targetId), zi(t).Jo(e);
}
function Zw(t, e) {
  t.Iu.Ft(e), zi(t).Yo(e);
}
function mp(t) {
  (t.Iu = new DN({
    getRemoteKeysForTarget: (e) => t.remoteSyncer.getRemoteKeysForTarget(e),
    ie: (e) => t.wu.get(e) || null
  })),
    zi(t).start(),
    t.pu.au();
}
function gp(t) {
  return _o(t) && !zi(t).Oo() && t.wu.size > 0;
}
function _o(t) {
  return q(t).mu.size === 0;
}
function eE(t) {
  t.Iu = void 0;
}
async function PR(t) {
  t.wu.forEach((e, n) => {
    pp(t, e);
  });
}
async function OR(t, e) {
  eE(t), gp(t) ? (t.pu.fu(e), mp(t)) : t.pu.set('Unknown');
}
async function xR(t, e, n) {
  if ((t.pu.set('Online'), e instanceof Vw && e.state === 2 && e.cause))
    try {
      await (async function (r, i) {
        const s = i.cause;
        for (const o of i.targetIds)
          r.wu.has(o) &&
            (await r.remoteSyncer.rejectListen(o, s), r.wu.delete(o), r.Iu.removeTarget(o));
      })(t, e);
    } catch (r) {
      D('RemoteStore', 'Failed to remove targets %s: %s ', e.targetIds.join(','), r),
        await qg(t, r);
    }
  else if (
    (e instanceof fa ? t.Iu.Qt(e) : e instanceof jw ? t.Iu.Zt(e) : t.Iu.Wt(e), !n.isEqual(F.min()))
  )
    try {
      const r = await Gw(t.localStore);
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
              i.wu.set(a, l.withResumeToken(Ge.EMPTY_BYTE_STRING, l.snapshotVersion)), Zw(i, a);
              const u = new _r(l.target, a, 1, l.sequenceNumber);
              pp(i, u);
            }),
            i.remoteSyncer.applyRemoteEvent(o)
          );
        })(t, n));
    } catch (r) {
      D('RemoteStore', 'Failed to raise snapshot:', r), await qg(t, r);
    }
}
async function qg(t, e, n) {
  if (!wo(e)) throw e;
  t.mu.add(1),
    await So(t),
    t.pu.set('Offline'),
    n || (n = () => Gw(t.localStore)),
    t.asyncQueue.enqueueRetryable(async () => {
      D('RemoteStore', 'Retrying IndexedDB access'), await n(), t.mu.delete(1), await Au(t);
    });
}
async function Gg(t, e) {
  const n = q(t);
  n.asyncQueue.verifyOperationInProgress(),
    D('RemoteStore', 'RemoteStore received new credentials');
  const r = _o(n);
  n.mu.add(3),
    await So(n),
    r && n.pu.set('Unknown'),
    await n.remoteSyncer.handleCredentialChange(e),
    n.mu.delete(3),
    await Au(n);
}
async function DR(t, e) {
  const n = q(t);
  e ? (n.mu.delete(2), await Au(n)) : e || (n.mu.add(2), await So(n), n.pu.set('Unknown'));
}
function zi(t) {
  return (
    t.Tu ||
      ((t.Tu = (function (e, n, r) {
        const i = q(e);
        return i.ru(), new CR(n, i.connection, i.authCredentials, i.appCheckCredentials, i.Tt, r);
      })(t.datastore, t.asyncQueue, {
        Xr: PR.bind(null, t),
        no: OR.bind(null, t),
        Ho: xR.bind(null, t)
      })),
      t.gu.push(async (e) => {
        e ? (t.Tu.$o(), gp(t) ? mp(t) : t.pu.set('Unknown')) : (await t.Tu.stop(), eE(t));
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
 */ class yp {
  constructor(e, n, r, i, s) {
    (this.asyncQueue = e),
      (this.timerId = n),
      (this.targetTimeMs = r),
      (this.op = i),
      (this.removalCallback = s),
      (this.deferred = new Er()),
      (this.then = this.deferred.promise.then.bind(this.deferred.promise)),
      this.deferred.promise.catch((o) => {});
  }
  static createAndSchedule(e, n, r, i, s) {
    const o = Date.now() + r,
      a = new yp(e, n, o, i, s);
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
      this.deferred.reject(new L(R.CANCELLED, 'Operation cancelled' + (e ? ': ' + e : ''))));
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
function tE(t, e) {
  if ((hn('AsyncQueue', `${e}: ${t}`), wo(t))) return new L(R.UNAVAILABLE, `${e}: ${t}`);
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
 */ class hi {
  constructor(e) {
    (this.comparator = e
      ? (n, r) => e(n, r) || $.comparator(n.key, r.key)
      : (n, r) => $.comparator(n.key, r.key)),
      (this.keyedMap = os()),
      (this.sortedSet = new Le(this.comparator));
  }
  static emptySet(e) {
    return new hi(e.comparator);
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
    if (!(e instanceof hi) || this.size !== e.size) return !1;
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
    const r = new hi();
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
 */ class Qg {
  constructor() {
    this.Au = new Le($.comparator);
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
        : j()
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
class xi {
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
      new xi(e, n, hi.emptySet(n), o, r, i, !0, !1, s)
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
        _u(this.query, e.query) &&
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
 */ class $R {
  constructor() {
    (this.bu = void 0), (this.listeners = []);
  }
}
class LR {
  constructor() {
    (this.queries = new Vi((e) => Rw(e), _u)),
      (this.onlineState = 'Unknown'),
      (this.vu = new Set());
  }
}
async function MR(t, e) {
  const n = q(t),
    r = e.query;
  let i = !1,
    s = n.queries.get(r);
  if ((s || ((i = !0), (s = new $R())), i))
    try {
      s.bu = await n.onListen(r);
    } catch (o) {
      const a = tE(o, `Initialization of query '${dd(e.query)}' failed`);
      return void e.onError(a);
    }
  n.queries.set(r, s), s.listeners.push(e), e.Pu(n.onlineState), s.bu && e.Vu(s.bu) && vp(n);
}
async function bR(t, e) {
  const n = q(t),
    r = e.query;
  let i = !1;
  const s = n.queries.get(r);
  if (s) {
    const o = s.listeners.indexOf(e);
    o >= 0 && (s.listeners.splice(o, 1), (i = s.listeners.length === 0));
  }
  if (i) return n.queries.delete(r), n.onUnlisten(r);
}
function UR(t, e) {
  const n = q(t);
  let r = !1;
  for (const i of e) {
    const s = i.query,
      o = n.queries.get(s);
    if (o) {
      for (const a of o.listeners) a.Vu(i) && (r = !0);
      o.bu = i;
    }
  }
  r && vp(n);
}
function FR(t, e, n) {
  const r = q(t),
    i = r.queries.get(e);
  if (i) for (const s of i.listeners) s.onError(n);
  r.queries.delete(e);
}
function vp(t) {
  t.vu.forEach((e) => {
    e.next();
  });
}
class jR {
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
      e = new xi(
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
    (e = xi.fromInitialDocuments(e.query, e.docs, e.mutatedKeys, e.fromCache, e.hasCachedResults)),
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
 */ class nE {
  constructor(e) {
    this.key = e;
  }
}
class rE {
  constructor(e) {
    this.key = e;
  }
}
class VR {
  constructor(e, n) {
    (this.query = e),
      (this.Ku = n),
      (this.Gu = null),
      (this.hasCachedResults = !1),
      (this.current = !1),
      (this.Qu = K()),
      (this.mutatedKeys = K()),
      (this.ju = Pw(e)),
      (this.zu = new hi(this.ju));
  }
  get Wu() {
    return this.Ku;
  }
  Hu(e, n) {
    const r = n ? n.Ju : new Qg(),
      i = n ? n.zu : this.zu;
    let s = n ? n.mutatedKeys : this.mutatedKeys,
      o = i,
      a = !1;
    const l = this.query.limitType === 'F' && i.size === this.query.limit ? i.last() : null,
      u = this.query.limitType === 'L' && i.size === this.query.limit ? i.first() : null;
    if (
      (e.inorderTraversal((c, h) => {
        const d = i.get(c),
          m = Tu(this.query, h) ? h : null,
          y = !!d && this.mutatedKeys.has(d.key),
          v =
            !!m &&
            (m.hasLocalMutations || (this.mutatedKeys.has(m.key) && m.hasCommittedMutations));
        let E = !1;
        d && m
          ? d.data.isEqual(m.data)
            ? y !== v && (r.track({ type: 3, doc: m }), (E = !0))
            : this.Yu(d, m) ||
              (r.track({ type: 2, doc: m }),
              (E = !0),
              ((l && this.ju(m, l) > 0) || (u && this.ju(m, u) < 0)) && (a = !0))
          : !d && m
          ? (r.track({ type: 0, doc: m }), (E = !0))
          : d && !m && (r.track({ type: 1, doc: d }), (E = !0), (l || u) && (a = !0)),
          E &&
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
                return j();
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
            snapshot: new xi(
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
        this.applyChanges({ zu: this.zu, Ju: new Qg(), mutatedKeys: this.mutatedKeys, Li: !1 }, !1))
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
    (this.Qu = K()),
      this.zu.forEach((r) => {
        this.ec(r.key) && (this.Qu = this.Qu.add(r.key));
      });
    const n = [];
    return (
      e.forEach((r) => {
        this.Qu.has(r) || n.push(new rE(r));
      }),
      this.Qu.forEach((r) => {
        e.has(r) || n.push(new nE(r));
      }),
      n
    );
  }
  nc(e) {
    (this.Ku = e.Yi), (this.Qu = K());
    const n = this.Hu(e.documents);
    return this.applyChanges(n, !0);
  }
  sc() {
    return xi.fromInitialDocuments(
      this.query,
      this.zu,
      this.mutatedKeys,
      this.Gu === 0,
      this.hasCachedResults
    );
  }
}
class zR {
  constructor(e, n, r) {
    (this.query = e), (this.targetId = n), (this.view = r);
  }
}
class BR {
  constructor(e) {
    (this.key = e), (this.ic = !1);
  }
}
class HR {
  constructor(e, n, r, i, s, o) {
    (this.localStore = e),
      (this.remoteStore = n),
      (this.eventManager = r),
      (this.sharedClientState = i),
      (this.currentUser = s),
      (this.maxConcurrentLimboResolutions = o),
      (this.rc = {}),
      (this.oc = new Vi((a) => Rw(a), _u)),
      (this.uc = new Map()),
      (this.cc = new Set()),
      (this.ac = new Le($.comparator)),
      (this.hc = new Map()),
      (this.lc = new hp()),
      (this.fc = {}),
      (this.dc = new Map()),
      (this._c = Oi.Sn()),
      (this.onlineState = 'Unknown'),
      (this.wc = void 0);
  }
  get isPrimaryClient() {
    return this.wc === !0;
  }
}
async function KR(t, e) {
  const n = JR(t);
  let r, i;
  const s = n.oc.get(e);
  if (s) (r = s.targetId), n.sharedClientState.addLocalQueryTarget(r), (i = s.view.sc());
  else {
    const o = await vR(n.localStore, dn(e));
    n.isPrimaryClient && Yw(n.remoteStore, o);
    const a = n.sharedClientState.addLocalQueryTarget(o.targetId);
    (r = o.targetId), (i = await WR(n, e, r, a === 'current', o.resumeToken));
  }
  return i;
}
async function WR(t, e, n, r, i) {
  t.mc = (h, d, m) =>
    (async function (y, v, E, p) {
      let f = v.view.Hu(E);
      f.Li && (f = await Hg(y.localStore, v.query, !1).then(({ documents: S }) => v.view.Hu(S, f)));
      const g = p && p.targetChanges.get(v.targetId),
        w = v.view.applyChanges(f, y.isPrimaryClient, g);
      return Yg(y, v.targetId, w.tc), w.snapshot;
    })(t, h, d, m);
  const s = await Hg(t.localStore, e, !0),
    o = new VR(e, s.Yi),
    a = o.Hu(s.documents),
    l = Eo.createSynthesizedTargetChangeForCurrentChange(n, r && t.onlineState !== 'Offline', i),
    u = o.applyChanges(a, t.isPrimaryClient, l);
  Yg(t, n, u.tc);
  const c = new zR(e, n, o);
  return t.oc.set(e, c), t.uc.has(n) ? t.uc.get(n).push(e) : t.uc.set(n, [e]), u.snapshot;
}
async function qR(t, e) {
  const n = q(t),
    r = n.oc.get(e),
    i = n.uc.get(r.targetId);
  if (i.length > 1)
    return (
      n.uc.set(
        r.targetId,
        i.filter((s) => !_u(s, e))
      ),
      void n.oc.delete(e)
    );
  n.isPrimaryClient
    ? (n.sharedClientState.removeLocalQueryTarget(r.targetId),
      n.sharedClientState.isActiveQueryTarget(r.targetId) ||
        (await gd(n.localStore, r.targetId, !1)
          .then(() => {
            n.sharedClientState.clearQueryState(r.targetId),
              Jw(n.remoteStore, r.targetId),
              yd(n, r.targetId);
          })
          .catch(ip)))
    : (yd(n, r.targetId), await gd(n.localStore, r.targetId, !0));
}
async function iE(t, e) {
  const n = q(t);
  try {
    const r = await gR(n.localStore, e);
    e.targetChanges.forEach((i, s) => {
      const o = n.hc.get(s);
      o &&
        (ve(i.addedDocuments.size + i.modifiedDocuments.size + i.removedDocuments.size <= 1),
        i.addedDocuments.size > 0
          ? (o.ic = !0)
          : i.modifiedDocuments.size > 0
          ? ve(o.ic)
          : i.removedDocuments.size > 0 && (ve(o.ic), (o.ic = !1)));
    }),
      await oE(n, r, e);
  } catch (r) {
    await ip(r);
  }
}
function Xg(t, e, n) {
  const r = q(t);
  if ((r.isPrimaryClient && n === 0) || (!r.isPrimaryClient && n === 1)) {
    const i = [];
    r.oc.forEach((s, o) => {
      const a = o.view.Pu(e);
      a.snapshot && i.push(a.snapshot);
    }),
      (function (s, o) {
        const a = q(s);
        a.onlineState = o;
        let l = !1;
        a.queries.forEach((u, c) => {
          for (const h of c.listeners) h.Pu(o) && (l = !0);
        }),
          l && vp(a);
      })(r.eventManager, e),
      i.length && r.rc.Ho(i),
      (r.onlineState = e),
      r.isPrimaryClient && r.sharedClientState.setOnlineState(e);
  }
}
async function GR(t, e, n) {
  const r = q(t);
  r.sharedClientState.updateQueryState(e, 'rejected', n);
  const i = r.hc.get(e),
    s = i && i.key;
  if (s) {
    let o = new Le($.comparator);
    o = o.insert(s, Be.newNoDocument(s, F.min()));
    const a = K().add(s),
      l = new Cu(F.min(), new Map(), new _e(Q), o, a);
    await iE(r, l), (r.ac = r.ac.remove(s)), r.hc.delete(e), wp(r);
  } else
    await gd(r.localStore, e, !1)
      .then(() => yd(r, e, n))
      .catch(ip);
}
function yd(t, e, n = null) {
  t.sharedClientState.removeLocalQueryTarget(e);
  for (const r of t.uc.get(e)) t.oc.delete(r), n && t.rc.gc(r, n);
  t.uc.delete(e),
    t.isPrimaryClient &&
      t.lc.ds(e).forEach((r) => {
        t.lc.containsKey(r) || sE(t, r);
      });
}
function sE(t, e) {
  t.cc.delete(e.path.canonicalString());
  const n = t.ac.get(e);
  n !== null && (Jw(t.remoteStore, n), (t.ac = t.ac.remove(e)), t.hc.delete(n), wp(t));
}
function Yg(t, e, n) {
  for (const r of n)
    r instanceof nE
      ? (t.lc.addReference(r.key, e), QR(t, r))
      : r instanceof rE
      ? (D('SyncEngine', 'Document no longer in limbo: ' + r.key),
        t.lc.removeReference(r.key, e),
        t.lc.containsKey(r.key) || sE(t, r.key))
      : j();
}
function QR(t, e) {
  const n = e.key,
    r = n.path.canonicalString();
  t.ac.get(n) ||
    t.cc.has(r) ||
    (D('SyncEngine', 'New document in limbo: ' + n), t.cc.add(r), wp(t));
}
function wp(t) {
  for (; t.cc.size > 0 && t.ac.size < t.maxConcurrentLimboResolutions; ) {
    const e = t.cc.values().next().value;
    t.cc.delete(e);
    const n = new $(he.fromString(e)),
      r = t._c.next();
    t.hc.set(r, new BR(n)),
      (t.ac = t.ac.insert(n, r)),
      Yw(t.remoteStore, new _r(dn(Nw(n.path)), r, 2, sp.at));
  }
}
async function oE(t, e, n) {
  const r = q(t),
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
            const c = fp.Ni(l.targetId, u);
            s.push(c);
          }
        })
      );
    }),
    await Promise.all(o),
    r.rc.Ho(i),
    await (async function (a, l) {
      const u = q(a);
      try {
        await u.persistence.runTransaction('notifyLocalViewChanges', 'readwrite', (c) =>
          T.forEach(l, (h) =>
            T.forEach(h.Ci, (d) =>
              u.persistence.referenceDelegate.addReference(c, h.targetId, d)
            ).next(() =>
              T.forEach(h.xi, (d) =>
                u.persistence.referenceDelegate.removeReference(c, h.targetId, d)
              )
            )
          )
        );
      } catch (c) {
        if (!wo(c)) throw c;
        D('LocalStore', 'Failed to update sequence numbers: ' + c);
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
async function XR(t, e) {
  const n = q(t);
  if (!n.currentUser.isEqual(e)) {
    D('SyncEngine', 'User change. New user:', e.toKey());
    const r = await qw(n.localStore, e);
    (n.currentUser = e),
      (function (i, s) {
        i.dc.forEach((o) => {
          o.forEach((a) => {
            a.reject(new L(R.CANCELLED, s));
          });
        }),
          i.dc.clear();
      })(n, "'waitForPendingWrites' promise is rejected due to a user change."),
      n.sharedClientState.handleUserChange(e, r.removedBatchIds, r.addedBatchIds),
      await oE(n, r.Wi);
  }
}
function YR(t, e) {
  const n = q(t),
    r = n.hc.get(e);
  if (r && r.ic) return K().add(r.key);
  {
    let i = K();
    const s = n.uc.get(e);
    if (!s) return i;
    for (const o of s) {
      const a = n.oc.get(o);
      i = i.unionWith(a.view.Wu);
    }
    return i;
  }
}
function JR(t) {
  const e = q(t);
  return (
    (e.remoteStore.remoteSyncer.applyRemoteEvent = iE.bind(null, e)),
    (e.remoteStore.remoteSyncer.getRemoteKeysForTarget = YR.bind(null, e)),
    (e.remoteStore.remoteSyncer.rejectListen = GR.bind(null, e)),
    (e.rc.Ho = UR.bind(null, e.eventManager)),
    (e.rc.gc = FR.bind(null, e.eventManager)),
    e
  );
}
class ZR {
  constructor() {
    this.synchronizeTabs = !1;
  }
  async initialize(e) {
    (this.Tt = Qw(e.databaseInfo.databaseId)),
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
    return mR(this.persistence, new fR(), e.initialUser, this.Tt);
  }
  Tc(e) {
    return new hR(dp.qs, this.Tt);
  }
  Ic(e) {
    return new ER();
  }
  async terminate() {
    this.gcScheduler && this.gcScheduler.stop(),
      await this.sharedClientState.shutdown(),
      await this.persistence.shutdown();
  }
}
class eP {
  async initialize(e, n) {
    this.localStore ||
      ((this.localStore = e.localStore),
      (this.sharedClientState = e.sharedClientState),
      (this.datastore = this.createDatastore(n)),
      (this.remoteStore = this.createRemoteStore(n)),
      (this.eventManager = this.createEventManager(n)),
      (this.syncEngine = this.createSyncEngine(n, !e.synchronizeTabs)),
      (this.sharedClientState.onlineStateHandler = (r) => Xg(this.syncEngine, r, 1)),
      (this.remoteStore.remoteSyncer.handleCredentialChange = XR.bind(null, this.syncEngine)),
      await DR(this.remoteStore, this.syncEngine.isPrimaryClient));
  }
  createEventManager(e) {
    return new LR();
  }
  createDatastore(e) {
    const n = Qw(e.databaseInfo.databaseId),
      r = ((i = e.databaseInfo), new IR(i));
    var i;
    return (function (s, o, a, l) {
      return new AR(s, o, a, l);
    })(e.authCredentials, e.appCheckCredentials, r, n);
  }
  createRemoteStore(e) {
    return (
      (n = this.localStore),
      (r = this.datastore),
      (i = e.asyncQueue),
      (s = (a) => Xg(this.syncEngine, a, 0)),
      (o = Wg.C() ? new Wg() : new SR()),
      new RR(n, r, i, s, o)
    );
    var n, r, i, s, o;
  }
  createSyncEngine(e, n) {
    return (function (r, i, s, o, a, l, u) {
      const c = new HR(r, i, s, o, a, l);
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
      const n = q(e);
      D('RemoteStore', 'RemoteStore shutting down.'),
        n.mu.add(5),
        await So(n),
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
 */ class tP {
  constructor(e) {
    (this.observer = e), (this.muted = !1);
  }
  next(e) {
    this.observer.next && this.vc(this.observer.next, e);
  }
  error(e) {
    this.observer.error
      ? this.vc(this.observer.error, e)
      : hn('Uncaught Error in snapshot listener:', e.toString());
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
 */ class nP {
  constructor(e, n, r, i) {
    (this.authCredentials = e),
      (this.appCheckCredentials = n),
      (this.asyncQueue = r),
      (this.databaseInfo = i),
      (this.user = Ve.UNAUTHENTICATED),
      (this.clientId = WA.R()),
      (this.authCredentialListener = () => Promise.resolve()),
      (this.appCheckCredentialListener = () => Promise.resolve()),
      this.authCredentials.start(r, async (s) => {
        D('FirestoreClient', 'Received user=', s.uid),
          await this.authCredentialListener(s),
          (this.user = s);
      }),
      this.appCheckCredentials.start(
        r,
        (s) => (
          D('FirestoreClient', 'Received new app check token=', s),
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
      throw new L(R.FAILED_PRECONDITION, 'The client has already been terminated.');
  }
  terminate() {
    this.asyncQueue.enterRestrictedMode();
    const e = new Er();
    return (
      this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
        try {
          this.onlineComponents && (await this.onlineComponents.terminate()),
            this.offlineComponents && (await this.offlineComponents.terminate()),
            this.authCredentials.shutdown(),
            this.appCheckCredentials.shutdown(),
            e.resolve();
        } catch (n) {
          const r = tE(n, 'Failed to shutdown persistence');
          e.reject(r);
        }
      }),
      e.promise
    );
  }
}
async function rP(t, e) {
  t.asyncQueue.verifyOperationInProgress(),
    D('FirestoreClient', 'Initializing OfflineComponentProvider');
  const n = await t.getConfiguration();
  await e.initialize(n);
  let r = n.initialUser;
  t.setCredentialChangeListener(async (i) => {
    r.isEqual(i) || (await qw(e.localStore, i), (r = i));
  }),
    e.persistence.setDatabaseDeletedListener(() => t.terminate()),
    (t.offlineComponents = e);
}
async function iP(t, e) {
  t.asyncQueue.verifyOperationInProgress();
  const n = await sP(t);
  D('FirestoreClient', 'Initializing OnlineComponentProvider');
  const r = await t.getConfiguration();
  await e.initialize(n, r),
    t.setCredentialChangeListener((i) => Gg(e.remoteStore, i)),
    t.setAppCheckTokenChangeListener((i, s) => Gg(e.remoteStore, s)),
    (t.onlineComponents = e);
}
async function sP(t) {
  return (
    t.offlineComponents ||
      (D('FirestoreClient', 'Using default OfflineComponentProvider'), await rP(t, new ZR())),
    t.offlineComponents
  );
}
async function oP(t) {
  return (
    t.onlineComponents ||
      (D('FirestoreClient', 'Using default OnlineComponentProvider'), await iP(t, new eP())),
    t.onlineComponents
  );
}
async function aP(t) {
  const e = await oP(t),
    n = e.eventManager;
  return (
    (n.onListen = KR.bind(null, e.syncEngine)), (n.onUnlisten = qR.bind(null, e.syncEngine)), n
  );
}
function lP(t, e, n = {}) {
  const r = new Er();
  return (
    t.asyncQueue.enqueueAndForget(async () =>
      (function (i, s, o, a, l) {
        const u = new tP({
            next: (h) => {
              s.enqueueAndForget(() => bR(i, c)),
                h.fromCache && a.source === 'server'
                  ? l.reject(
                      new L(
                        R.UNAVAILABLE,
                        'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)'
                      )
                    )
                  : l.resolve(h);
            },
            error: (h) => l.reject(h)
          }),
          c = new jR(o, u, { includeMetadataChanges: !0, Ou: !0 });
        return MR(i, c);
      })(await aP(t), t.asyncQueue, e, n, r)
    ),
    r.promise
  );
}
const Jg = new Map();
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
 */ function uP(t, e, n) {
  if (!n) throw new L(R.INVALID_ARGUMENT, `Function ${t}() cannot be called with an empty ${e}.`);
}
function cP(t, e, n, r) {
  if (e === !0 && r === !0)
    throw new L(R.INVALID_ARGUMENT, `${t} and ${n} cannot be used together.`);
}
function Zg(t) {
  if ($.isDocumentKey(t))
    throw new L(
      R.INVALID_ARGUMENT,
      `Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`
    );
}
function hP(t) {
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
  return typeof t == 'function' ? 'a function' : j();
}
function vd(t, e) {
  if (('_delegate' in t && (t = t._delegate), !(t instanceof e))) {
    if (e.name === t.constructor.name)
      throw new L(
        R.INVALID_ARGUMENT,
        'Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?'
      );
    {
      const n = hP(t);
      throw new L(R.INVALID_ARGUMENT, `Expected type '${e.name}', but it was: ${n}`);
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
 */ class ey {
  constructor(e) {
    var n;
    if (e.host === void 0) {
      if (e.ssl !== void 0)
        throw new L(R.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
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
        throw new L(R.INVALID_ARGUMENT, 'cacheSizeBytes must be at least 1048576');
      this.cacheSizeBytes = e.cacheSizeBytes;
    }
    (this.experimentalForceLongPolling = !!e.experimentalForceLongPolling),
      (this.experimentalAutoDetectLongPolling = !!e.experimentalAutoDetectLongPolling),
      (this.useFetchStreams = !!e.useFetchStreams),
      cP(
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
 */ class Ep {
  constructor(e, n, r, i) {
    (this._authCredentials = e),
      (this._appCheckCredentials = n),
      (this._databaseId = r),
      (this._app = i),
      (this.type = 'firestore-lite'),
      (this._persistenceKey = '(lite)'),
      (this._settings = new ey({})),
      (this._settingsFrozen = !1);
  }
  get app() {
    if (!this._app)
      throw new L(
        R.FAILED_PRECONDITION,
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
      throw new L(
        R.FAILED_PRECONDITION,
        'Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.'
      );
    (this._settings = new ey(e)),
      e.credentials !== void 0 &&
        (this._authCredentials = (function (n) {
          if (!n) return new UA();
          switch (n.type) {
            case 'gapi':
              const r = n.client;
              return new zA(
                r,
                n.sessionIndex || '0',
                n.iamToken || null,
                n.authTokenFactory || null
              );
            case 'provider':
              return n.client;
            default:
              throw new L(
                R.INVALID_ARGUMENT,
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
        const n = Jg.get(e);
        n && (D('ComponentProvider', 'Removing Datastore'), Jg.delete(e), n.terminate());
      })(this),
      Promise.resolve()
    );
  }
}
function dP(t, e, n, r = {}) {
  var i;
  const s = (t = vd(t, Ep))._getSettings();
  if (
    (s.host !== 'firestore.googleapis.com' &&
      s.host !== e &&
      sd('Host has been set in both settings() and useEmulator(), emulator host will be used'),
    t._setSettings(Object.assign(Object.assign({}, s), { host: `${e}:${n}`, ssl: !1 })),
    r.mockUserToken)
  ) {
    let o, a;
    if (typeof r.mockUserToken == 'string') (o = r.mockUserToken), (a = Ve.MOCK_USER);
    else {
      o = mk(r.mockUserToken, (i = t._app) === null || i === void 0 ? void 0 : i.options.projectId);
      const l = r.mockUserToken.sub || r.mockUserToken.user_id;
      if (!l)
        throw new L(R.INVALID_ARGUMENT, "mockUserToken must contain 'sub' or 'user_id' field!");
      a = new Ve(l);
    }
    t._authCredentials = new FA(new ww(o, a));
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
 */ class Bi {
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
    return new di(this.firestore, this.converter, this._key.path.popLast());
  }
  withConverter(e) {
    return new Bi(this.firestore, e, this._key);
  }
}
class Nu {
  constructor(e, n, r) {
    (this.converter = n), (this._query = r), (this.type = 'query'), (this.firestore = e);
  }
  withConverter(e) {
    return new Nu(this.firestore, e, this._query);
  }
}
class di extends Nu {
  constructor(e, n, r) {
    super(e, n, Nw(r)), (this._path = r), (this.type = 'collection');
  }
  get id() {
    return this._query.path.lastSegment();
  }
  get path() {
    return this._query.path.canonicalString();
  }
  get parent() {
    const e = this._path.popLast();
    return e.isEmpty() ? null : new Bi(this.firestore, null, new $(e));
  }
  withConverter(e) {
    return new di(this.firestore, e, this._path);
  }
}
function fP(t, e, ...n) {
  if (((t = tr(t)), uP('collection', 'path', e), t instanceof Ep)) {
    const r = he.fromString(e, ...n);
    return Zg(r), new di(t, null, r);
  }
  {
    if (!(t instanceof Bi || t instanceof di))
      throw new L(
        R.INVALID_ARGUMENT,
        'Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore'
      );
    const r = t._path.child(he.fromString(e, ...n));
    return Zg(r), new di(t.firestore, null, r);
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
 */ class pP {
  constructor() {
    (this.qc = Promise.resolve()),
      (this.Uc = []),
      (this.Kc = !1),
      (this.Gc = []),
      (this.Qc = null),
      (this.jc = !1),
      (this.zc = !1),
      (this.Wc = []),
      (this.ko = new Xw(this, 'async_queue_retry')),
      (this.Hc = () => {
        const n = $c();
        n && D('AsyncQueue', 'Visibility state changed to ' + n.visibilityState), this.ko.Vo();
      });
    const e = $c();
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
      const n = $c();
      n &&
        typeof n.removeEventListener == 'function' &&
        n.removeEventListener('visibilitychange', this.Hc);
    }
  }
  enqueue(e) {
    if ((this.Jc(), this.Kc)) return new Promise(() => {});
    const n = new Er();
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
        if (!wo(e)) throw e;
        D('AsyncQueue', 'Operation failed with retryable error: ' + e);
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
            throw (hn('INTERNAL UNHANDLED ERROR: ', i), r);
          })
          .then((r) => ((this.jc = !1), r))
      )
    );
    return (this.qc = n), n;
  }
  enqueueAfterDelay(e, n, r) {
    this.Jc(), this.Wc.indexOf(e) > -1 && (n = 0);
    const i = yp.createAndSchedule(this, e, n, r, (s) => this.Xc(s));
    return this.Gc.push(i), i;
  }
  Jc() {
    this.Qc && j();
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
class aE extends Ep {
  constructor(e, n, r, i) {
    super(e, n, r, i),
      (this.type = 'firestore'),
      (this._queue = new pP()),
      (this._persistenceKey = (i == null ? void 0 : i.name) || '[DEFAULT]');
  }
  _terminate() {
    return this._firestoreClient || lE(this), this._firestoreClient.terminate();
  }
}
function mP(t, e) {
  const n = typeof t == 'object' ? t : p1(),
    r = typeof t == 'string' ? t : e || '(default)',
    i = Lf(n, 'firestore').getImmediate({ identifier: r });
  if (!i._initialized) {
    const s = dk('firestore');
    s && dP(i, ...s);
  }
  return i;
}
function gP(t) {
  return t._firestoreClient || lE(t), t._firestoreClient.verifyNotTerminated(), t._firestoreClient;
}
function lE(t) {
  var e;
  const n = t._freezeSettings(),
    r = (function (i, s, o, a) {
      return new ZA(
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
  t._firestoreClient = new nP(t._authCredentials, t._appCheckCredentials, t._queue, r);
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
 */ class dl {
  constructor(e) {
    this._byteString = e;
  }
  static fromBase64String(e) {
    try {
      return new dl(Ge.fromBase64String(e));
    } catch (n) {
      throw new L(R.INVALID_ARGUMENT, 'Failed to construct data from Base64 string: ' + n);
    }
  }
  static fromUint8Array(e) {
    return new dl(Ge.fromUint8Array(e));
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
 */ class uE {
  constructor(...e) {
    for (let n = 0; n < e.length; ++n)
      if (e[n].length === 0)
        throw new L(
          R.INVALID_ARGUMENT,
          'Invalid field name at argument $(i + 1). Field names must not be empty.'
        );
    this._internalPath = new rt(e);
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
 */ class yP {
  constructor(e, n) {
    if (!isFinite(e) || e < -90 || e > 90)
      throw new L(
        R.INVALID_ARGUMENT,
        'Latitude must be a number between -90 and 90, but was: ' + e
      );
    if (!isFinite(n) || n < -180 || n > 180)
      throw new L(
        R.INVALID_ARGUMENT,
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
    return Q(this._lat, e._lat) || Q(this._long, e._long);
  }
}
const vP = new RegExp('[~\\*/\\[\\]]');
function wP(t, e, n) {
  if (e.search(vP) >= 0)
    throw ty(
      `Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,
      t,
      !1,
      void 0,
      n
    );
  try {
    return new uE(...e.split('.'))._internalPath;
  } catch {
    throw ty(
      `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
      t,
      !1,
      void 0,
      n
    );
  }
}
function ty(t, e, n, r, i) {
  const s = r && !r.isEmpty(),
    o = i !== void 0;
  let a = `Function ${e}() called with invalid data`;
  n && (a += ' (via `toFirestore()`)'), (a += '. ');
  let l = '';
  return (
    (s || o) &&
      ((l += ' (found'), s && (l += ` in field ${r}`), o && (l += ` in document ${i}`), (l += ')')),
    new L(R.INVALID_ARGUMENT, a + t + l)
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
 */ class cE {
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
    return new Bi(this._firestore, this._converter, this._key);
  }
  exists() {
    return this._document !== null;
  }
  data() {
    if (this._document) {
      if (this._converter) {
        const e = new EP(this._firestore, this._userDataWriter, this._key, this._document, null);
        return this._converter.fromFirestore(e);
      }
      return this._userDataWriter.convertValue(this._document.data.value);
    }
  }
  get(e) {
    if (this._document) {
      const n = this._document.data.field(hE('DocumentSnapshot.get', e));
      if (n !== null) return this._userDataWriter.convertValue(n);
    }
  }
}
class EP extends cE {
  data() {
    return super.data();
  }
}
function hE(t, e) {
  return typeof e == 'string'
    ? wP(t, e)
    : e instanceof uE
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
 */ function SP(t) {
  if (t.limitType === 'L' && t.explicitOrderBy.length === 0)
    throw new L(
      R.UNIMPLEMENTED,
      'limitToLast() queries require specifying at least one orderBy() clause'
    );
}
class _P {
  convertValue(e, n = 'none') {
    switch (Dr(e)) {
      case 0:
        return null;
      case 1:
        return e.booleanValue;
      case 2:
        return ge(e.integerValue || e.doubleValue);
      case 3:
        return this.convertTimestamp(e.timestampValue);
      case 4:
        return this.convertServerTimestamp(e, n);
      case 5:
        return e.stringValue;
      case 6:
        return this.convertBytes(Ni(e.bytesValue));
      case 7:
        return this.convertReference(e.referenceValue);
      case 8:
        return this.convertGeoPoint(e.geoPointValue);
      case 9:
        return this.convertArray(e.arrayValue, n);
      case 10:
        return this.convertObject(e.mapValue, n);
      default:
        throw j();
    }
  }
  convertObject(e, n) {
    const r = {};
    return (
      wu(e.fields, (i, s) => {
        r[i] = this.convertValue(s, n);
      }),
      r
    );
  }
  convertGeoPoint(e) {
    return new yP(ge(e.latitude), ge(e.longitude));
  }
  convertArray(e, n) {
    return (e.values || []).map((r) => this.convertValue(r, n));
  }
  convertServerTimestamp(e, n) {
    switch (n) {
      case 'previous':
        const r = Sw(e);
        return r == null ? null : this.convertValue(r, n);
      case 'estimate':
        return this.convertTimestamp(Ys(e));
      default:
        return null;
    }
  }
  convertTimestamp(e) {
    const n = Xn(e);
    return new lt(n.seconds, n.nanos);
  }
  convertDocumentKey(e, n) {
    const r = he.fromString(e);
    ve(Ww(r));
    const i = new Xs(r.get(1), r.get(3)),
      s = new $(r.popFirst(5));
    return (
      i.isEqual(n) ||
        hn(
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
 */ class Yo {
  constructor(e, n) {
    (this.hasPendingWrites = e), (this.fromCache = n);
  }
  isEqual(e) {
    return this.hasPendingWrites === e.hasPendingWrites && this.fromCache === e.fromCache;
  }
}
class TP extends cE {
  constructor(e, n, r, i, s, o) {
    super(e, n, r, i, o), (this._firestore = e), (this._firestoreImpl = e), (this.metadata = s);
  }
  exists() {
    return super.exists();
  }
  data(e = {}) {
    if (this._document) {
      if (this._converter) {
        const n = new pa(
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
      const r = this._document.data.field(hE('DocumentSnapshot.get', e));
      if (r !== null) return this._userDataWriter.convertValue(r, n.serverTimestamps);
    }
  }
}
class pa extends TP {
  data(e = {}) {
    return super.data(e);
  }
}
class IP {
  constructor(e, n, r, i) {
    (this._firestore = e),
      (this._userDataWriter = n),
      (this._snapshot = i),
      (this.metadata = new Yo(i.hasPendingWrites, i.fromCache)),
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
        new pa(
          this._firestore,
          this._userDataWriter,
          r.key,
          r,
          new Yo(this._snapshot.mutatedKeys.has(r.key), this._snapshot.fromCache),
          this.query.converter
        )
      );
    });
  }
  docChanges(e = {}) {
    const n = !!e.includeMetadataChanges;
    if (n && this._snapshot.excludesMetadataChanges)
      throw new L(
        R.INVALID_ARGUMENT,
        'To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().'
      );
    return (
      (this._cachedChanges && this._cachedChangesIncludeMetadataChanges === n) ||
        ((this._cachedChanges = (function (r, i) {
          if (r._snapshot.oldDocs.isEmpty()) {
            let s = 0;
            return r._snapshot.docChanges.map((o) => {
              const a = new pa(
                r._firestore,
                r._userDataWriter,
                o.doc.key,
                o.doc,
                new Yo(r._snapshot.mutatedKeys.has(o.doc.key), r._snapshot.fromCache),
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
                const a = new pa(
                  r._firestore,
                  r._userDataWriter,
                  o.doc.key,
                  o.doc,
                  new Yo(r._snapshot.mutatedKeys.has(o.doc.key), r._snapshot.fromCache),
                  r.query.converter
                );
                let l = -1,
                  u = -1;
                return (
                  o.type !== 0 && ((l = s.indexOf(o.doc.key)), (s = s.delete(o.doc.key))),
                  o.type !== 1 && ((s = s.add(o.doc)), (u = s.indexOf(o.doc.key))),
                  { type: kP(o.type), doc: a, oldIndex: l, newIndex: u }
                );
              });
          }
        })(this, n)),
        (this._cachedChangesIncludeMetadataChanges = n)),
      this._cachedChanges
    );
  }
}
function kP(t) {
  switch (t) {
    case 0:
      return 'added';
    case 2:
    case 3:
      return 'modified';
    case 1:
      return 'removed';
    default:
      return j();
  }
}
class CP extends _P {
  constructor(e) {
    super(), (this.firestore = e);
  }
  convertBytes(e) {
    return new dl(e);
  }
  convertReference(e) {
    const n = this.convertDocumentKey(e, this.firestore._databaseId);
    return new Bi(this.firestore, null, n);
  }
}
function AP(t) {
  t = vd(t, Nu);
  const e = vd(t.firestore, aE),
    n = gP(e),
    r = new CP(e);
  return SP(t._query), lP(n, t._query).then((i) => new IP(e, r, t, i));
}
(function (t, e = !0) {
  (function (n) {
    ji = n;
  })(lo),
    ki(
      new Pr(
        'firestore',
        (n, { instanceIdentifier: r, options: i }) => {
          const s = n.getProvider('app').getImmediate(),
            o = new aE(
              new jA(n.getProvider('auth-internal')),
              new HA(n.getProvider('app-check-internal')),
              (function (a, l) {
                if (!Object.prototype.hasOwnProperty.apply(a.options, ['projectId']))
                  throw new L(
                    R.INVALID_ARGUMENT,
                    '"projectId" not provided in firebase.initializeApp.'
                  );
                return new Xs(a.options.projectId, l);
              })(s, r),
              s
            );
          return (i = Object.assign({ useFetchStreams: e }, i)), o._setSettings(i), o;
        },
        'PUBLIC'
      ).setMultipleInstances(!0)
    ),
    Kn(kg, '3.8.4', t),
    Kn(kg, '3.8.4', 'esm2017');
})();
function Sp(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
        (n[r[i]] = t[r[i]]);
  return n;
}
function dE() {
  return {
    ['dependent-sdk-initialized-before-auth']:
      'Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.'
  };
}
const NP = dE,
  fE = new oo('auth', 'Firebase', dE());
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
 */ const ny = new Df('@firebase/auth');
function ma(t, ...e) {
  ny.logLevel <= G.ERROR && ny.error(`Auth (${lo}): ${t}`, ...e);
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
 */ function fn(t, ...e) {
  throw _p(t, ...e);
}
function Kt(t, ...e) {
  return _p(t, ...e);
}
function RP(t, e, n) {
  const r = Object.assign(Object.assign({}, NP()), { [e]: n });
  return new oo('auth', 'Firebase', r).create(e, { appName: t.name });
}
function _p(t, ...e) {
  if (typeof t != 'string') {
    const n = e[0],
      r = [...e.slice(1)];
    return r[0] && (r[0].appName = t.name), t._errorFactory.create(n, ...r);
  }
  return fE.create(t, ...e);
}
function b(t, e, ...n) {
  if (!t) throw _p(e, ...n);
}
function tn(t) {
  const e = 'INTERNAL ASSERTION FAILED: ' + t;
  throw (ma(e), new Error(e));
}
function pn(t, e) {
  t || tn(e);
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
 */ const ry = new Map();
function nn(t) {
  pn(t instanceof Function, 'Expected a class definition');
  let e = ry.get(t);
  return e
    ? (pn(e instanceof t, 'Instance stored in cache mismatched with class'), e)
    : ((e = new t()), ry.set(t, e), e);
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
 */ function PP(t, e) {
  const n = Lf(t, 'auth');
  if (n.isInitialized()) {
    const i = n.getImmediate(),
      s = n.getOptions();
    if (Za(s, e ?? {})) return i;
    fn(i, 'already-initialized');
  }
  return n.initialize({ options: e });
}
function OP(t, e) {
  const n = (e == null ? void 0 : e.persistence) || [],
    r = (Array.isArray(n) ? n : [n]).map(nn);
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
 */ function wd() {
  var t;
  return (
    (typeof self < 'u' && ((t = self.location) === null || t === void 0 ? void 0 : t.href)) || ''
  );
}
function xP() {
  return iy() === 'http:' || iy() === 'https:';
}
function iy() {
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
 */ function DP() {
  return typeof navigator < 'u' &&
    navigator &&
    'onLine' in navigator &&
    typeof navigator.onLine == 'boolean' &&
    (xP() || yk() || 'connection' in navigator)
    ? navigator.onLine
    : !0;
}
function $P() {
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
 */ class To {
  constructor(e, n) {
    (this.shortDelay = e),
      (this.longDelay = n),
      pn(n > e, 'Short delay should be less than long delay!'),
      (this.isMobile = gk() || vk());
  }
  get() {
    return DP()
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
 */ function Tp(t, e) {
  pn(t.emulator, 'Emulator should always be set here');
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
 */ class pE {
  static initialize(e, n, r) {
    (this.fetchImpl = e), n && (this.headersImpl = n), r && (this.responseImpl = r);
  }
  static fetch() {
    if (this.fetchImpl) return this.fetchImpl;
    if (typeof self < 'u' && 'fetch' in self) return self.fetch;
    tn(
      'Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill'
    );
  }
  static headers() {
    if (this.headersImpl) return this.headersImpl;
    if (typeof self < 'u' && 'Headers' in self) return self.Headers;
    tn(
      'Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill'
    );
  }
  static response() {
    if (this.responseImpl) return this.responseImpl;
    if (typeof self < 'u' && 'Response' in self) return self.Response;
    tn(
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
 */ const LP = {
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
 */ const MP = new To(3e4, 6e4);
function bP(t, e) {
  return t.tenantId && !e.tenantId
    ? Object.assign(Object.assign({}, e), { tenantId: t.tenantId })
    : e;
}
async function Ru(t, e, n, r, i = {}) {
  return mE(t, i, async () => {
    let s = {},
      o = {};
    r && (e === 'GET' ? (o = r) : (s = { body: JSON.stringify(r) }));
    const a = ao(Object.assign({ key: t.config.apiKey }, o)).slice(1),
      l = await t._getAdditionalHeaders();
    return (
      (l['Content-Type'] = 'application/json'),
      t.languageCode && (l['X-Firebase-Locale'] = t.languageCode),
      pE.fetch()(
        gE(t, t.config.apiHost, n, a),
        Object.assign({ method: e, headers: l, referrerPolicy: 'no-referrer' }, s)
      )
    );
  });
}
async function mE(t, e, n) {
  t._canInitEmulator = !1;
  const r = Object.assign(Object.assign({}, LP), e);
  try {
    const i = new FP(t),
      s = await Promise.race([n(), i.promise]);
    i.clearNetworkTimeout();
    const o = await s.json();
    if ('needConfirmation' in o) throw Jo(t, 'account-exists-with-different-credential', o);
    if (s.ok && !('errorMessage' in o)) return o;
    {
      const a = s.ok ? o.errorMessage : o.error.message,
        [l, u] = a.split(' : ');
      if (l === 'FEDERATED_USER_ID_ALREADY_LINKED') throw Jo(t, 'credential-already-in-use', o);
      if (l === 'EMAIL_EXISTS') throw Jo(t, 'email-already-in-use', o);
      if (l === 'USER_DISABLED') throw Jo(t, 'user-disabled', o);
      const c = r[l] || l.toLowerCase().replace(/[_\s]+/g, '-');
      if (u) throw RP(t, c, u);
      fn(t, c);
    }
  } catch (i) {
    if (i instanceof gn) throw i;
    fn(t, 'internal-error', { message: String(i) });
  }
}
async function UP(t, e, n, r, i = {}) {
  const s = await Ru(t, e, n, r, i);
  return (
    'mfaPendingCredential' in s && fn(t, 'multi-factor-auth-required', { _serverResponse: s }), s
  );
}
function gE(t, e, n, r) {
  const i = `${e}${n}?${r}`;
  return t.config.emulator ? Tp(t.config, i) : `${t.config.apiScheme}://${i}`;
}
class FP {
  constructor(e) {
    (this.auth = e),
      (this.timer = null),
      (this.promise = new Promise((n, r) => {
        this.timer = setTimeout(() => r(Kt(this.auth, 'network-request-failed')), MP.get());
      }));
  }
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
}
function Jo(t, e, n) {
  const r = { appName: t.name };
  n.email && (r.email = n.email), n.phoneNumber && (r.phoneNumber = n.phoneNumber);
  const i = Kt(t, e, r);
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
 */ async function jP(t, e) {
  return Ru(t, 'POST', '/v1/accounts:delete', e);
}
async function VP(t, e) {
  return Ru(t, 'POST', '/v1/accounts:lookup', e);
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
 */ function Ss(t) {
  if (t)
    try {
      const e = new Date(Number(t));
      if (!isNaN(e.getTime())) return e.toUTCString();
    } catch {}
}
async function zP(t, e = !1) {
  const n = tr(t),
    r = await n.getIdToken(e),
    i = Ip(r);
  b(i && i.exp && i.auth_time && i.iat, n.auth, 'internal-error');
  const s = typeof i.firebase == 'object' ? i.firebase : void 0,
    o = s == null ? void 0 : s.sign_in_provider;
  return {
    claims: i,
    token: r,
    authTime: Ss(Lc(i.auth_time)),
    issuedAtTime: Ss(Lc(i.iat)),
    expirationTime: Ss(Lc(i.exp)),
    signInProvider: o || null,
    signInSecondFactor: (s == null ? void 0 : s.sign_in_second_factor) || null
  };
}
function Lc(t) {
  return Number(t) * 1e3;
}
function Ip(t) {
  const [e, n, r] = t.split('.');
  if (e === void 0 || n === void 0 || r === void 0)
    return ma('JWT malformed, contained fewer than 3 sections'), null;
  try {
    const i = l1(n);
    return i ? JSON.parse(i) : (ma('Failed to decode base64 JWT payload'), null);
  } catch (i) {
    return ma('Caught error parsing JWT payload as JSON', i == null ? void 0 : i.toString()), null;
  }
}
function BP(t) {
  const e = Ip(t);
  return (
    b(e, 'internal-error'),
    b(typeof e.exp < 'u', 'internal-error'),
    b(typeof e.iat < 'u', 'internal-error'),
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
 */ async function Zs(t, e, n = !1) {
  if (n) return e;
  try {
    return await e;
  } catch (r) {
    throw (r instanceof gn && HP(r) && t.auth.currentUser === t && (await t.auth.signOut()), r);
  }
}
function HP({ code: t }) {
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
 */ class KP {
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
 */ class yE {
  constructor(e, n) {
    (this.createdAt = e), (this.lastLoginAt = n), this._initializeTime();
  }
  _initializeTime() {
    (this.lastSignInTime = Ss(this.lastLoginAt)), (this.creationTime = Ss(this.createdAt));
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
 */ async function fl(t) {
  var e;
  const n = t.auth,
    r = await t.getIdToken(),
    i = await Zs(t, VP(n, { idToken: r }));
  b(i == null ? void 0 : i.users.length, n, 'internal-error');
  const s = i.users[0];
  t._notifyReloadListener(s);
  const o =
      !((e = s.providerUserInfo) === null || e === void 0) && e.length
        ? GP(s.providerUserInfo)
        : [],
    a = qP(t.providerData, o),
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
      metadata: new yE(s.createdAt, s.lastLoginAt),
      isAnonymous: c
    };
  Object.assign(t, h);
}
async function WP(t) {
  const e = tr(t);
  await fl(e), await e.auth._persistUserIfCurrent(e), e.auth._notifyListenersIfCurrent(e);
}
function qP(t, e) {
  return [...t.filter((r) => !e.some((i) => i.providerId === r.providerId)), ...e];
}
function GP(t) {
  return t.map((e) => {
    var { providerId: n } = e,
      r = Sp(e, ['providerId']);
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
 */ async function QP(t, e) {
  const n = await mE(t, {}, async () => {
    const r = ao({ grant_type: 'refresh_token', refresh_token: e }).slice(1),
      { tokenApiHost: i, apiKey: s } = t.config,
      o = gE(t, i, '/v1/token', `key=${s}`),
      a = await t._getAdditionalHeaders();
    return (
      (a['Content-Type'] = 'application/x-www-form-urlencoded'),
      pE.fetch()(o, { method: 'POST', headers: a, body: r })
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
 */ class eo {
  constructor() {
    (this.refreshToken = null), (this.accessToken = null), (this.expirationTime = null);
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(e) {
    b(e.idToken, 'internal-error'),
      b(typeof e.idToken < 'u', 'internal-error'),
      b(typeof e.refreshToken < 'u', 'internal-error');
    const n = 'expiresIn' in e && typeof e.expiresIn < 'u' ? Number(e.expiresIn) : BP(e.idToken);
    this.updateTokensAndExpiration(e.idToken, e.refreshToken, n);
  }
  async getToken(e, n = !1) {
    return (
      b(!this.accessToken || this.refreshToken, e, 'user-token-expired'),
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
    const { accessToken: r, refreshToken: i, expiresIn: s } = await QP(e, n);
    this.updateTokensAndExpiration(r, i, Number(s));
  }
  updateTokensAndExpiration(e, n, r) {
    (this.refreshToken = n || null),
      (this.accessToken = e || null),
      (this.expirationTime = Date.now() + r * 1e3);
  }
  static fromJSON(e, n) {
    const { refreshToken: r, accessToken: i, expirationTime: s } = n,
      o = new eo();
    return (
      r && (b(typeof r == 'string', 'internal-error', { appName: e }), (o.refreshToken = r)),
      i && (b(typeof i == 'string', 'internal-error', { appName: e }), (o.accessToken = i)),
      s && (b(typeof s == 'number', 'internal-error', { appName: e }), (o.expirationTime = s)),
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
    return Object.assign(new eo(), this.toJSON());
  }
  _performRefresh() {
    return tn('not implemented');
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
 */ function vn(t, e) {
  b(typeof t == 'string' || typeof t > 'u', 'internal-error', { appName: e });
}
class Tr {
  constructor(e) {
    var { uid: n, auth: r, stsTokenManager: i } = e,
      s = Sp(e, ['uid', 'auth', 'stsTokenManager']);
    (this.providerId = 'firebase'),
      (this.proactiveRefresh = new KP(this)),
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
      (this.metadata = new yE(s.createdAt || void 0, s.lastLoginAt || void 0));
  }
  async getIdToken(e) {
    const n = await Zs(this, this.stsTokenManager.getToken(this.auth, e));
    return (
      b(n, this.auth, 'internal-error'),
      this.accessToken !== n &&
        ((this.accessToken = n),
        await this.auth._persistUserIfCurrent(this),
        this.auth._notifyListenersIfCurrent(this)),
      n
    );
  }
  getIdTokenResult(e) {
    return zP(this, e);
  }
  reload() {
    return WP(this);
  }
  _assign(e) {
    this !== e &&
      (b(this.uid === e.uid, this.auth, 'internal-error'),
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
    return new Tr(
      Object.assign(Object.assign({}, this), {
        auth: e,
        stsTokenManager: this.stsTokenManager._clone()
      })
    );
  }
  _onReload(e) {
    b(!this.reloadListener, this.auth, 'internal-error'),
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
      n && (await fl(this)),
      await this.auth._persistUserIfCurrent(this),
      r && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    const e = await this.getIdToken();
    return (
      await Zs(this, jP(this.auth, { idToken: e })),
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
      E = (l = n._redirectEventId) !== null && l !== void 0 ? l : void 0,
      p = (u = n.createdAt) !== null && u !== void 0 ? u : void 0,
      f = (c = n.lastLoginAt) !== null && c !== void 0 ? c : void 0,
      { uid: g, emailVerified: w, isAnonymous: S, providerData: k, stsTokenManager: C } = n;
    b(g && C, e, 'internal-error');
    const A = eo.fromJSON(this.name, C);
    b(typeof g == 'string', e, 'internal-error'),
      vn(h, e.name),
      vn(d, e.name),
      b(typeof w == 'boolean', e, 'internal-error'),
      b(typeof S == 'boolean', e, 'internal-error'),
      vn(m, e.name),
      vn(y, e.name),
      vn(v, e.name),
      vn(E, e.name),
      vn(p, e.name),
      vn(f, e.name);
    const V = new Tr({
      uid: g,
      auth: e,
      email: d,
      emailVerified: w,
      displayName: h,
      isAnonymous: S,
      photoURL: y,
      phoneNumber: m,
      tenantId: v,
      stsTokenManager: A,
      createdAt: p,
      lastLoginAt: f
    });
    return (
      k && Array.isArray(k) && (V.providerData = k.map((x) => Object.assign({}, x))),
      E && (V._redirectEventId = E),
      V
    );
  }
  static async _fromIdTokenResponse(e, n, r = !1) {
    const i = new eo();
    i.updateFromServerResponse(n);
    const s = new Tr({ uid: n.localId, auth: e, stsTokenManager: i, isAnonymous: r });
    return await fl(s), s;
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
 */ class vE {
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
vE.type = 'NONE';
const sy = vE;
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
 */ function ga(t, e, n) {
  return `firebase:${t}:${e}:${n}`;
}
class fi {
  constructor(e, n, r) {
    (this.persistence = e), (this.auth = n), (this.userKey = r);
    const { config: i, name: s } = this.auth;
    (this.fullUserKey = ga(this.userKey, i.apiKey, s)),
      (this.fullPersistenceKey = ga('persistence', i.apiKey, s)),
      (this.boundEventHandler = n._onStorageEvent.bind(n)),
      this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(e) {
    return this.persistence._set(this.fullUserKey, e.toJSON());
  }
  async getCurrentUser() {
    const e = await this.persistence._get(this.fullUserKey);
    return e ? Tr._fromJSON(this.auth, e) : null;
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
    if (!n.length) return new fi(nn(sy), e, r);
    const i = (
      await Promise.all(
        n.map(async (u) => {
          if (await u._isAvailable()) return u;
        })
      )
    ).filter((u) => u);
    let s = i[0] || nn(sy);
    const o = ga(r, e.config.apiKey, e.name);
    let a = null;
    for (const u of n)
      try {
        const c = await u._get(o);
        if (c) {
          const h = Tr._fromJSON(e, c);
          u !== s && (a = h), (s = u);
          break;
        }
      } catch {}
    const l = i.filter((u) => u._shouldAllowMigration);
    return !s._shouldAllowMigration || !l.length
      ? new fi(s, e, r)
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
        new fi(s, e, r));
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
 */ function oy(t) {
  const e = t.toLowerCase();
  if (e.includes('opera/') || e.includes('opr/') || e.includes('opios/')) return 'Opera';
  if (SE(e)) return 'IEMobile';
  if (e.includes('msie') || e.includes('trident/')) return 'IE';
  if (e.includes('edge/')) return 'Edge';
  if (wE(e)) return 'Firefox';
  if (e.includes('silk/')) return 'Silk';
  if (TE(e)) return 'Blackberry';
  if (IE(e)) return 'Webos';
  if (kp(e)) return 'Safari';
  if ((e.includes('chrome/') || EE(e)) && !e.includes('edge/')) return 'Chrome';
  if (_E(e)) return 'Android';
  {
    const n = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
      r = t.match(n);
    if ((r == null ? void 0 : r.length) === 2) return r[1];
  }
  return 'Other';
}
function wE(t = qe()) {
  return /firefox\//i.test(t);
}
function kp(t = qe()) {
  const e = t.toLowerCase();
  return (
    e.includes('safari/') &&
    !e.includes('chrome/') &&
    !e.includes('crios/') &&
    !e.includes('android')
  );
}
function EE(t = qe()) {
  return /crios\//i.test(t);
}
function SE(t = qe()) {
  return /iemobile/i.test(t);
}
function _E(t = qe()) {
  return /android/i.test(t);
}
function TE(t = qe()) {
  return /blackberry/i.test(t);
}
function IE(t = qe()) {
  return /webos/i.test(t);
}
function Pu(t = qe()) {
  return /iphone|ipad|ipod/i.test(t) || (/macintosh/i.test(t) && /mobile/i.test(t));
}
function XP(t = qe()) {
  var e;
  return Pu(t) && !!(!((e = window.navigator) === null || e === void 0) && e.standalone);
}
function YP() {
  return wk() && document.documentMode === 10;
}
function kE(t = qe()) {
  return Pu(t) || _E(t) || IE(t) || TE(t) || /windows phone/i.test(t) || SE(t);
}
function JP() {
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
 */ function CE(t, e = []) {
  let n;
  switch (t) {
    case 'Browser':
      n = oy(qe());
      break;
    case 'Worker':
      n = `${oy(qe())}-${t}`;
      break;
    default:
      n = t;
  }
  const r = e.length ? e.join(',') : 'FirebaseCore-web';
  return `${n}/JsCore/${lo}/${r}`;
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
 */ class ZP {
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
 */ class eO {
  constructor(e, n, r) {
    (this.app = e),
      (this.heartbeatServiceProvider = n),
      (this.config = r),
      (this.currentUser = null),
      (this.emulatorConfig = null),
      (this.operations = Promise.resolve()),
      (this.authStateSubscription = new ay(this)),
      (this.idTokenSubscription = new ay(this)),
      (this.beforeStateQueue = new ZP(this)),
      (this.redirectUser = null),
      (this.isProactiveRefreshEnabled = !1),
      (this._canInitEmulator = !0),
      (this._isInitialized = !1),
      (this._deleted = !1),
      (this._initializationPromise = null),
      (this._popupRedirectResolver = null),
      (this._errorFactory = fE),
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
      n && (this._popupRedirectResolver = nn(n)),
      (this._initializationPromise = this.queue(async () => {
        var r, i;
        if (
          !this._deleted &&
          ((this.persistenceManager = await fi.create(this, e)), !this._deleted)
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
      b(this._popupRedirectResolver, this, 'argument-error'),
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
      await fl(e);
    } catch (n) {
      if ((n == null ? void 0 : n.code) !== 'auth/network-request-failed')
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(e);
  }
  useDeviceLanguage() {
    this.languageCode = $P();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(e) {
    const n = e ? tr(e) : null;
    return (
      n && b(n.auth.config.apiKey === this.config.apiKey, this, 'invalid-user-token'),
      this._updateCurrentUser(n && n._clone(this))
    );
  }
  async _updateCurrentUser(e, n = !1) {
    if (!this._deleted)
      return (
        e && b(this.tenantId === e.tenantId, this, 'tenant-id-mismatch'),
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
      await this.assertedPersistence.setPersistence(nn(e));
    });
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(e) {
    this._errorFactory = new oo('auth', 'Firebase', e());
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
      const n = (e && nn(e)) || this._popupRedirectResolver;
      b(n, this, 'argument-error'),
        (this.redirectPersistenceManager = await fi.create(
          this,
          [nn(n._redirectPersistence)],
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
      b(o, this, 'internal-error'),
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
    return b(this.persistenceManager, this, 'internal-error'), this.persistenceManager;
  }
  _logFramework(e) {
    !e ||
      this.frameworks.includes(e) ||
      (this.frameworks.push(e),
      this.frameworks.sort(),
      (this.clientVersion = CE(this.config.clientPlatform, this._getFrameworks())));
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
function Cp(t) {
  return tr(t);
}
class ay {
  constructor(e) {
    (this.auth = e), (this.observer = null), (this.addObserver = Ck((n) => (this.observer = n)));
  }
  get next() {
    return b(this.observer, this.auth, 'internal-error'), this.observer.next.bind(this.observer);
  }
}
function tO(t, e, n) {
  const r = Cp(t);
  b(r._canInitEmulator, r, 'emulator-config-failed'),
    b(/^https?:\/\//.test(e), r, 'invalid-emulator-scheme');
  const i = !!(n != null && n.disableWarnings),
    s = AE(e),
    { host: o, port: a } = nO(e),
    l = a === null ? '' : `:${a}`;
  (r.config.emulator = { url: `${s}//${o}${l}/` }),
    (r.settings.appVerificationDisabledForTesting = !0),
    (r.emulatorConfig = Object.freeze({
      host: o,
      port: a,
      protocol: s.replace(':', ''),
      options: Object.freeze({ disableWarnings: i })
    })),
    i || rO();
}
function AE(t) {
  const e = t.indexOf(':');
  return e < 0 ? '' : t.substr(0, e + 1);
}
function nO(t) {
  const e = AE(t),
    n = /(\/\/)?([^?#/]+)/.exec(t.substr(e.length));
  if (!n) return { host: '', port: null };
  const r = n[2].split('@').pop() || '',
    i = /^(\[[^\]]+\])(:|$)/.exec(r);
  if (i) {
    const s = i[1];
    return { host: s, port: ly(r.substr(s.length + 1)) };
  } else {
    const [s, o] = r.split(':');
    return { host: s, port: ly(o) };
  }
}
function ly(t) {
  if (!t) return null;
  const e = Number(t);
  return isNaN(e) ? null : e;
}
function rO() {
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
 */ class NE {
  constructor(e, n) {
    (this.providerId = e), (this.signInMethod = n);
  }
  toJSON() {
    return tn('not implemented');
  }
  _getIdTokenResponse(e) {
    return tn('not implemented');
  }
  _linkToIdToken(e, n) {
    return tn('not implemented');
  }
  _getReauthenticationResolver(e) {
    return tn('not implemented');
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
 */ async function pi(t, e) {
  return UP(t, 'POST', '/v1/accounts:signInWithIdp', bP(t, e));
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
 */ const iO = 'http://localhost';
class $r extends NE {
  constructor() {
    super(...arguments), (this.pendingToken = null);
  }
  static _fromParams(e) {
    const n = new $r(e.providerId, e.signInMethod);
    return (
      e.idToken || e.accessToken
        ? (e.idToken && (n.idToken = e.idToken),
          e.accessToken && (n.accessToken = e.accessToken),
          e.nonce && !e.pendingToken && (n.nonce = e.nonce),
          e.pendingToken && (n.pendingToken = e.pendingToken))
        : e.oauthToken && e.oauthTokenSecret
        ? ((n.accessToken = e.oauthToken), (n.secret = e.oauthTokenSecret))
        : fn('argument-error'),
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
      s = Sp(n, ['providerId', 'signInMethod']);
    if (!r || !i) return null;
    const o = new $r(r, i);
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
    return pi(e, n);
  }
  _linkToIdToken(e, n) {
    const r = this.buildRequest();
    return (r.idToken = n), pi(e, r);
  }
  _getReauthenticationResolver(e) {
    const n = this.buildRequest();
    return (n.autoCreate = !1), pi(e, n);
  }
  buildRequest() {
    const e = { requestUri: iO, returnSecureToken: !0 };
    if (this.pendingToken) e.pendingToken = this.pendingToken;
    else {
      const n = {};
      this.idToken && (n.id_token = this.idToken),
        this.accessToken && (n.access_token = this.accessToken),
        this.secret && (n.oauth_token_secret = this.secret),
        (n.providerId = this.providerId),
        this.nonce && !this.pendingToken && (n.nonce = this.nonce),
        (e.postBody = ao(n));
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
 */ class RE {
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
 */ class Io extends RE {
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
 */ class In extends Io {
  constructor() {
    super('facebook.com');
  }
  static credential(e) {
    return $r._fromParams({
      providerId: In.PROVIDER_ID,
      signInMethod: In.FACEBOOK_SIGN_IN_METHOD,
      accessToken: e
    });
  }
  static credentialFromResult(e) {
    return In.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return In.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !('oauthAccessToken' in e) || !e.oauthAccessToken) return null;
    try {
      return In.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
In.FACEBOOK_SIGN_IN_METHOD = 'facebook.com';
In.PROVIDER_ID = 'facebook.com';
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
 */ class kn extends Io {
  constructor() {
    super('google.com'), this.addScope('profile');
  }
  static credential(e, n) {
    return $r._fromParams({
      providerId: kn.PROVIDER_ID,
      signInMethod: kn.GOOGLE_SIGN_IN_METHOD,
      idToken: e,
      accessToken: n
    });
  }
  static credentialFromResult(e) {
    return kn.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return kn.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e) return null;
    const { oauthIdToken: n, oauthAccessToken: r } = e;
    if (!n && !r) return null;
    try {
      return kn.credential(n, r);
    } catch {
      return null;
    }
  }
}
kn.GOOGLE_SIGN_IN_METHOD = 'google.com';
kn.PROVIDER_ID = 'google.com';
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
 */ class Cn extends Io {
  constructor() {
    super('github.com');
  }
  static credential(e) {
    return $r._fromParams({
      providerId: Cn.PROVIDER_ID,
      signInMethod: Cn.GITHUB_SIGN_IN_METHOD,
      accessToken: e
    });
  }
  static credentialFromResult(e) {
    return Cn.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return Cn.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !('oauthAccessToken' in e) || !e.oauthAccessToken) return null;
    try {
      return Cn.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Cn.GITHUB_SIGN_IN_METHOD = 'github.com';
Cn.PROVIDER_ID = 'github.com';
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
 */ class An extends Io {
  constructor() {
    super('twitter.com');
  }
  static credential(e, n) {
    return $r._fromParams({
      providerId: An.PROVIDER_ID,
      signInMethod: An.TWITTER_SIGN_IN_METHOD,
      oauthToken: e,
      oauthTokenSecret: n
    });
  }
  static credentialFromResult(e) {
    return An.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return An.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e) return null;
    const { oauthAccessToken: n, oauthTokenSecret: r } = e;
    if (!n || !r) return null;
    try {
      return An.credential(n, r);
    } catch {
      return null;
    }
  }
}
An.TWITTER_SIGN_IN_METHOD = 'twitter.com';
An.PROVIDER_ID = 'twitter.com';
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
 */ class Di {
  constructor(e) {
    (this.user = e.user),
      (this.providerId = e.providerId),
      (this._tokenResponse = e._tokenResponse),
      (this.operationType = e.operationType);
  }
  static async _fromIdTokenResponse(e, n, r, i = !1) {
    const s = await Tr._fromIdTokenResponse(e, r, i),
      o = uy(r);
    return new Di({ user: s, providerId: o, _tokenResponse: r, operationType: n });
  }
  static async _forOperation(e, n, r) {
    await e._updateTokensIfNecessary(r, !0);
    const i = uy(r);
    return new Di({ user: e, providerId: i, _tokenResponse: r, operationType: n });
  }
}
function uy(t) {
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
 */ class pl extends gn {
  constructor(e, n, r, i) {
    var s;
    super(n.code, n.message),
      (this.operationType = r),
      (this.user = i),
      Object.setPrototypeOf(this, pl.prototype),
      (this.customData = {
        appName: e.name,
        tenantId: (s = e.tenantId) !== null && s !== void 0 ? s : void 0,
        _serverResponse: n.customData._serverResponse,
        operationType: r
      });
  }
  static _fromErrorAndOperation(e, n, r, i) {
    return new pl(e, n, r, i);
  }
}
function PE(t, e, n, r) {
  return (
    e === 'reauthenticate' ? n._getReauthenticationResolver(t) : n._getIdTokenResponse(t)
  ).catch((s) => {
    throw s.code === 'auth/multi-factor-auth-required' ? pl._fromErrorAndOperation(t, s, e, r) : s;
  });
}
async function sO(t, e, n = !1) {
  const r = await Zs(t, e._linkToIdToken(t.auth, await t.getIdToken()), n);
  return Di._forOperation(t, 'link', r);
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
 */ async function oO(t, e, n = !1) {
  const { auth: r } = t,
    i = 'reauthenticate';
  try {
    const s = await Zs(t, PE(r, i, e, t), n);
    b(s.idToken, r, 'internal-error');
    const o = Ip(s.idToken);
    b(o, r, 'internal-error');
    const { sub: a } = o;
    return b(t.uid === a, r, 'user-mismatch'), Di._forOperation(t, i, s);
  } catch (s) {
    throw ((s == null ? void 0 : s.code) === 'auth/user-not-found' && fn(r, 'user-mismatch'), s);
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
 */ async function aO(t, e, n = !1) {
  const r = 'signIn',
    i = await PE(t, r, e),
    s = await Di._fromIdTokenResponse(t, r, i);
  return n || (await t._updateCurrentUser(s.user)), s;
}
function lO(t, e, n, r) {
  return tr(t).onIdTokenChanged(e, n, r);
}
function uO(t, e, n) {
  return tr(t).beforeAuthStateChanged(e, n);
}
function cO(t, e, n, r) {
  return tr(t).onAuthStateChanged(e, n, r);
}
const ml = '__sak';
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
 */ class OE {
  constructor(e, n) {
    (this.storageRetriever = e), (this.type = n);
  }
  _isAvailable() {
    try {
      return this.storage
        ? (this.storage.setItem(ml, '1'), this.storage.removeItem(ml), Promise.resolve(!0))
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
 */ function hO() {
  const t = qe();
  return kp(t) || Pu(t);
}
const dO = 1e3,
  fO = 10;
class xE extends OE {
  constructor() {
    super(() => window.localStorage, 'LOCAL'),
      (this.boundEventHandler = (e, n) => this.onStorageEvent(e, n)),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.safariLocalStorageNotSynced = hO() && JP()),
      (this.fallbackToPolling = kE()),
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
    YP() && s !== e.newValue && e.newValue !== e.oldValue ? setTimeout(i, fO) : i();
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
      }, dO));
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
xE.type = 'LOCAL';
const pO = xE;
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
 */ class DE extends OE {
  constructor() {
    super(() => window.sessionStorage, 'SESSION');
  }
  _addListener(e, n) {}
  _removeListener(e, n) {}
}
DE.type = 'SESSION';
const $E = DE;
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
 */ function mO(t) {
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
 */ class Ou {
  constructor(e) {
    (this.eventTarget = e),
      (this.handlersMap = {}),
      (this.boundEventHandler = this.handleEvent.bind(this));
  }
  static _getInstance(e) {
    const n = this.receivers.find((i) => i.isListeningto(e));
    if (n) return n;
    const r = new Ou(e);
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
      l = await mO(a);
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
Ou.receivers = [];
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
 */ function Ap(t = '', e = 10) {
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
 */ class gO {
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
      const u = Ap('', 20);
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
 */ function Wt() {
  return window;
}
function yO(t) {
  Wt().location.href = t;
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
 */ function LE() {
  return typeof Wt().WorkerGlobalScope < 'u' && typeof Wt().importScripts == 'function';
}
async function vO() {
  if (!(navigator != null && navigator.serviceWorker)) return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function wO() {
  var t;
  return (
    ((t = navigator == null ? void 0 : navigator.serviceWorker) === null || t === void 0
      ? void 0
      : t.controller) || null
  );
}
function EO() {
  return LE() ? self : null;
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
 */ const ME = 'firebaseLocalStorageDb',
  SO = 1,
  gl = 'firebaseLocalStorage',
  bE = 'fbase_key';
class ko {
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
function xu(t, e) {
  return t.transaction([gl], e ? 'readwrite' : 'readonly').objectStore(gl);
}
function _O() {
  const t = indexedDB.deleteDatabase(ME);
  return new ko(t).toPromise();
}
function Ed() {
  const t = indexedDB.open(ME, SO);
  return new Promise((e, n) => {
    t.addEventListener('error', () => {
      n(t.error);
    }),
      t.addEventListener('upgradeneeded', () => {
        const r = t.result;
        try {
          r.createObjectStore(gl, { keyPath: bE });
        } catch (i) {
          n(i);
        }
      }),
      t.addEventListener('success', async () => {
        const r = t.result;
        r.objectStoreNames.contains(gl) ? e(r) : (r.close(), await _O(), e(await Ed()));
      });
  });
}
async function cy(t, e, n) {
  const r = xu(t, !0).put({ [bE]: e, value: n });
  return new ko(r).toPromise();
}
async function TO(t, e) {
  const n = xu(t, !1).get(e),
    r = await new ko(n).toPromise();
  return r === void 0 ? null : r.value;
}
function hy(t, e) {
  const n = xu(t, !0).delete(e);
  return new ko(n).toPromise();
}
const IO = 800,
  kO = 3;
class UE {
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
    return this.db ? this.db : ((this.db = await Ed()), this.db);
  }
  async _withRetries(e) {
    let n = 0;
    for (;;)
      try {
        const r = await this._openDb();
        return await e(r);
      } catch (r) {
        if (n++ > kO) throw r;
        this.db && (this.db.close(), (this.db = void 0));
      }
  }
  async initializeServiceWorkerMessaging() {
    return LE() ? this.initializeReceiver() : this.initializeSender();
  }
  async initializeReceiver() {
    (this.receiver = Ou._getInstance(EO())),
      this.receiver._subscribe('keyChanged', async (e, n) => ({
        keyProcessed: (await this._poll()).includes(n.key)
      })),
      this.receiver._subscribe('ping', async (e, n) => ['keyChanged']);
  }
  async initializeSender() {
    var e, n;
    if (((this.activeServiceWorker = await vO()), !this.activeServiceWorker)) return;
    this.sender = new gO(this.activeServiceWorker);
    const r = await this.sender._send('ping', {}, 800);
    r &&
      !((e = r[0]) === null || e === void 0) &&
      e.fulfilled &&
      !((n = r[0]) === null || n === void 0) &&
      n.value.includes('keyChanged') &&
      (this.serviceWorkerReceiverAvailable = !0);
  }
  async notifyServiceWorker(e) {
    if (!(!this.sender || !this.activeServiceWorker || wO() !== this.activeServiceWorker))
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
      const e = await Ed();
      return await cy(e, ml, '1'), await hy(e, ml), !0;
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
        await this._withRetries((r) => cy(r, e, n)),
        (this.localCache[e] = n),
        this.notifyServiceWorker(e)
      )
    );
  }
  async _get(e) {
    const n = await this._withRetries((r) => TO(r, e));
    return (this.localCache[e] = n), n;
  }
  async _remove(e) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((n) => hy(n, e)),
        delete this.localCache[e],
        this.notifyServiceWorker(e)
      )
    );
  }
  async _poll() {
    const e = await this._withRetries((i) => {
      const s = xu(i, !1).getAll();
      return new ko(s).toPromise();
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
    this.stopPolling(), (this.pollTimer = setInterval(async () => this._poll(), IO));
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
UE.type = 'LOCAL';
const CO = UE;
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
 */ function AO() {
  var t, e;
  return (e =
    (t = document.getElementsByTagName('head')) === null || t === void 0 ? void 0 : t[0]) !==
    null && e !== void 0
    ? e
    : document;
}
function NO(t) {
  return new Promise((e, n) => {
    const r = document.createElement('script');
    r.setAttribute('src', t),
      (r.onload = e),
      (r.onerror = (i) => {
        const s = Kt('internal-error');
        (s.customData = i), n(s);
      }),
      (r.type = 'text/javascript'),
      (r.charset = 'UTF-8'),
      AO().appendChild(r);
  });
}
function RO(t) {
  return `__${t}${Math.floor(Math.random() * 1e6)}`;
}
new To(3e4, 6e4);
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
 */ function PO(t, e) {
  return e ? nn(e) : (b(t._popupRedirectResolver, t, 'argument-error'), t._popupRedirectResolver);
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
 */ class Np extends NE {
  constructor(e) {
    super('custom', 'custom'), (this.params = e);
  }
  _getIdTokenResponse(e) {
    return pi(e, this._buildIdpRequest());
  }
  _linkToIdToken(e, n) {
    return pi(e, this._buildIdpRequest(n));
  }
  _getReauthenticationResolver(e) {
    return pi(e, this._buildIdpRequest());
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
function OO(t) {
  return aO(t.auth, new Np(t), t.bypassAuthState);
}
function xO(t) {
  const { auth: e, user: n } = t;
  return b(n, e, 'internal-error'), oO(n, new Np(t), t.bypassAuthState);
}
async function DO(t) {
  const { auth: e, user: n } = t;
  return b(n, e, 'internal-error'), sO(n, new Np(t), t.bypassAuthState);
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
 */ class FE {
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
        return OO;
      case 'linkViaPopup':
      case 'linkViaRedirect':
        return DO;
      case 'reauthViaPopup':
      case 'reauthViaRedirect':
        return xO;
      default:
        fn(this.auth, 'internal-error');
    }
  }
  resolve(e) {
    pn(this.pendingPromise, 'Pending promise was never set'),
      this.pendingPromise.resolve(e),
      this.unregisterAndCleanUp();
  }
  reject(e) {
    pn(this.pendingPromise, 'Pending promise was never set'),
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
 */ const $O = new To(2e3, 1e4);
class ei extends FE {
  constructor(e, n, r, i, s) {
    super(e, n, i, s),
      (this.provider = r),
      (this.authWindow = null),
      (this.pollId = null),
      ei.currentPopupAction && ei.currentPopupAction.cancel(),
      (ei.currentPopupAction = this);
  }
  async executeNotNull() {
    const e = await this.execute();
    return b(e, this.auth, 'internal-error'), e;
  }
  async onExecution() {
    pn(this.filter.length === 1, 'Popup operations only handle one event');
    const e = Ap();
    (this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], e)),
      (this.authWindow.associatedEvent = e),
      this.resolver._originValidation(this.auth).catch((n) => {
        this.reject(n);
      }),
      this.resolver._isIframeWebStorageSupported(this.auth, (n) => {
        n || this.reject(Kt(this.auth, 'web-storage-unsupported'));
      }),
      this.pollUserCancellation();
  }
  get eventId() {
    var e;
    return ((e = this.authWindow) === null || e === void 0 ? void 0 : e.associatedEvent) || null;
  }
  cancel() {
    this.reject(Kt(this.auth, 'cancelled-popup-request'));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(),
      this.pollId && window.clearTimeout(this.pollId),
      (this.authWindow = null),
      (this.pollId = null),
      (ei.currentPopupAction = null);
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
          (this.pollId = null), this.reject(Kt(this.auth, 'popup-closed-by-user'));
        }, 2e3);
        return;
      }
      this.pollId = window.setTimeout(e, $O.get());
    };
    e();
  }
}
ei.currentPopupAction = null;
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
 */ const LO = 'pendingRedirect',
  ya = new Map();
class MO extends FE {
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
    let e = ya.get(this.auth._key());
    if (!e) {
      try {
        const r = (await bO(this.resolver, this.auth)) ? await super.execute() : null;
        e = () => Promise.resolve(r);
      } catch (n) {
        e = () => Promise.reject(n);
      }
      ya.set(this.auth._key(), e);
    }
    return this.bypassAuthState || ya.set(this.auth._key(), () => Promise.resolve(null)), e();
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
async function bO(t, e) {
  const n = jO(e),
    r = FO(t);
  if (!(await r._isAvailable())) return !1;
  const i = (await r._get(n)) === 'true';
  return await r._remove(n), i;
}
function UO(t, e) {
  ya.set(t._key(), e);
}
function FO(t) {
  return nn(t._redirectPersistence);
}
function jO(t) {
  return ga(LO, t.config.apiKey, t.name);
}
async function VO(t, e, n = !1) {
  const r = Cp(t),
    i = PO(r, e),
    o = await new MO(r, i, n).execute();
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
 */ const zO = 10 * 60 * 1e3;
class BO {
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
        !HO(e) ||
        ((this.hasHandledPotentialRedirect = !0), n || ((this.queuedRedirectEvent = e), (n = !0))),
      n
    );
  }
  sendToConsumer(e, n) {
    var r;
    if (e.error && !jE(e)) {
      const i =
        ((r = e.error.code) === null || r === void 0 ? void 0 : r.split('auth/')[1]) ||
        'internal-error';
      n.onError(Kt(this.auth, i));
    } else n.onAuthEvent(e);
  }
  isEventForConsumer(e, n) {
    const r = n.eventId === null || (!!e.eventId && e.eventId === n.eventId);
    return n.filter.includes(e.type) && r;
  }
  hasEventBeenHandled(e) {
    return (
      Date.now() - this.lastProcessedEventTime >= zO && this.cachedEventUids.clear(),
      this.cachedEventUids.has(dy(e))
    );
  }
  saveEventToCache(e) {
    this.cachedEventUids.add(dy(e)), (this.lastProcessedEventTime = Date.now());
  }
}
function dy(t) {
  return [t.type, t.eventId, t.sessionId, t.tenantId].filter((e) => e).join('-');
}
function jE({ type: t, error: e }) {
  return t === 'unknown' && (e == null ? void 0 : e.code) === 'auth/no-auth-event';
}
function HO(t) {
  switch (t.type) {
    case 'signInViaRedirect':
    case 'linkViaRedirect':
    case 'reauthViaRedirect':
      return !0;
    case 'unknown':
      return jE(t);
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
 */ async function KO(t, e = {}) {
  return Ru(t, 'GET', '/v1/projects', e);
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
 */ const WO = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
  qO = /^https?/;
async function GO(t) {
  if (t.config.emulator) return;
  const { authorizedDomains: e } = await KO(t);
  for (const n of e)
    try {
      if (QO(n)) return;
    } catch {}
  fn(t, 'unauthorized-domain');
}
function QO(t) {
  const e = wd(),
    { protocol: n, hostname: r } = new URL(e);
  if (t.startsWith('chrome-extension://')) {
    const o = new URL(t);
    return o.hostname === '' && r === ''
      ? n === 'chrome-extension:' &&
          t.replace('chrome-extension://', '') === e.replace('chrome-extension://', '')
      : n === 'chrome-extension:' && o.hostname === r;
  }
  if (!qO.test(n)) return !1;
  if (WO.test(t)) return r === t;
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
 */ const XO = new To(3e4, 6e4);
function fy() {
  const t = Wt().___jsl;
  if (t != null && t.H) {
    for (const e of Object.keys(t.H))
      if (
        ((t.H[e].r = t.H[e].r || []), (t.H[e].L = t.H[e].L || []), (t.H[e].r = [...t.H[e].L]), t.CP)
      )
        for (let n = 0; n < t.CP.length; n++) t.CP[n] = null;
  }
}
function YO(t) {
  return new Promise((e, n) => {
    var r, i, s;
    function o() {
      fy(),
        gapi.load('gapi.iframes', {
          callback: () => {
            e(gapi.iframes.getContext());
          },
          ontimeout: () => {
            fy(), n(Kt(t, 'network-request-failed'));
          },
          timeout: XO.get()
        });
    }
    if (
      !(
        (i = (r = Wt().gapi) === null || r === void 0 ? void 0 : r.iframes) === null || i === void 0
      ) &&
      i.Iframe
    )
      e(gapi.iframes.getContext());
    else if (!((s = Wt().gapi) === null || s === void 0) && s.load) o();
    else {
      const a = RO('iframefcb');
      return (
        (Wt()[a] = () => {
          gapi.load ? o() : n(Kt(t, 'network-request-failed'));
        }),
        NO(`https://apis.google.com/js/api.js?onload=${a}`).catch((l) => n(l))
      );
    }
  }).catch((e) => {
    throw ((va = null), e);
  });
}
let va = null;
function JO(t) {
  return (va = va || YO(t)), va;
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
 */ const ZO = new To(5e3, 15e3),
  ex = '__/auth/iframe',
  tx = 'emulator/auth/iframe',
  nx = {
    style: { position: 'absolute', top: '-100px', width: '1px', height: '1px' },
    'aria-hidden': 'true',
    tabindex: '-1'
  },
  rx = new Map([
    ['identitytoolkit.googleapis.com', 'p'],
    ['staging-identitytoolkit.sandbox.googleapis.com', 's'],
    ['test-identitytoolkit.sandbox.googleapis.com', 't']
  ]);
function ix(t) {
  const e = t.config;
  b(e.authDomain, t, 'auth-domain-config-required');
  const n = e.emulator ? Tp(e, tx) : `https://${t.config.authDomain}/${ex}`,
    r = { apiKey: e.apiKey, appName: t.name, v: lo },
    i = rx.get(t.config.apiHost);
  i && (r.eid = i);
  const s = t._getFrameworks();
  return s.length && (r.fw = s.join(',')), `${n}?${ao(r).slice(1)}`;
}
async function sx(t) {
  const e = await JO(t),
    n = Wt().gapi;
  return (
    b(n, t, 'internal-error'),
    e.open(
      {
        where: document.body,
        url: ix(t),
        messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: nx,
        dontclear: !0
      },
      (r) =>
        new Promise(async (i, s) => {
          await r.restyle({ setHideOnLeave: !1 });
          const o = Kt(t, 'network-request-failed'),
            a = Wt().setTimeout(() => {
              s(o);
            }, ZO.get());
          function l() {
            Wt().clearTimeout(a), i(r);
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
 */ const ox = { location: 'yes', resizable: 'yes', statusbar: 'yes', toolbar: 'no' },
  ax = 500,
  lx = 600,
  ux = '_blank',
  cx = 'http://localhost';
class py {
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
function hx(t, e, n, r = ax, i = lx) {
  const s = Math.max((window.screen.availHeight - i) / 2, 0).toString(),
    o = Math.max((window.screen.availWidth - r) / 2, 0).toString();
  let a = '';
  const l = Object.assign(Object.assign({}, ox), {
      width: r.toString(),
      height: i.toString(),
      top: s,
      left: o
    }),
    u = qe().toLowerCase();
  n && (a = EE(u) ? ux : n), wE(u) && ((e = e || cx), (l.scrollbars = 'yes'));
  const c = Object.entries(l).reduce((d, [m, y]) => `${d}${m}=${y},`, '');
  if (XP(u) && a !== '_self') return dx(e || '', a), new py(null);
  const h = window.open(e || '', a, c);
  b(h, t, 'popup-blocked');
  try {
    h.focus();
  } catch {}
  return new py(h);
}
function dx(t, e) {
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
 */ const fx = '__/auth/handler',
  px = 'emulator/auth/handler';
function my(t, e, n, r, i, s) {
  b(t.config.authDomain, t, 'auth-domain-config-required'),
    b(t.config.apiKey, t, 'invalid-api-key');
  const o = {
    apiKey: t.config.apiKey,
    appName: t.name,
    authType: n,
    redirectUrl: r,
    v: lo,
    eventId: i
  };
  if (e instanceof RE) {
    e.setDefaultLanguage(t.languageCode),
      (o.providerId = e.providerId || ''),
      kk(e.getCustomParameters()) || (o.customParameters = JSON.stringify(e.getCustomParameters()));
    for (const [l, u] of Object.entries(s || {})) o[l] = u;
  }
  if (e instanceof Io) {
    const l = e.getScopes().filter((u) => u !== '');
    l.length > 0 && (o.scopes = l.join(','));
  }
  t.tenantId && (o.tid = t.tenantId);
  const a = o;
  for (const l of Object.keys(a)) a[l] === void 0 && delete a[l];
  return `${mx(t)}?${ao(a).slice(1)}`;
}
function mx({ config: t }) {
  return t.emulator ? Tp(t, px) : `https://${t.authDomain}/${fx}`;
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
 */ const Mc = 'webStorageSupport';
class gx {
  constructor() {
    (this.eventManagers = {}),
      (this.iframes = {}),
      (this.originValidationPromises = {}),
      (this._redirectPersistence = $E),
      (this._completeRedirectFn = VO),
      (this._overrideRedirectResult = UO);
  }
  async _openPopup(e, n, r, i) {
    var s;
    pn(
      (s = this.eventManagers[e._key()]) === null || s === void 0 ? void 0 : s.manager,
      '_initialize() not called before _openPopup()'
    );
    const o = my(e, n, r, wd(), i);
    return hx(e, o, Ap());
  }
  async _openRedirect(e, n, r, i) {
    return await this._originValidation(e), yO(my(e, n, r, wd(), i)), new Promise(() => {});
  }
  _initialize(e) {
    const n = e._key();
    if (this.eventManagers[n]) {
      const { manager: i, promise: s } = this.eventManagers[n];
      return i ? Promise.resolve(i) : (pn(s, 'If manager is not set, promise should be'), s);
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
    const n = await sx(e),
      r = new BO(e);
    return (
      n.register(
        'authEvent',
        (i) => (
          b(i == null ? void 0 : i.authEvent, e, 'invalid-auth-event'),
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
      Mc,
      { type: Mc },
      (i) => {
        var s;
        const o = (s = i == null ? void 0 : i[0]) === null || s === void 0 ? void 0 : s[Mc];
        o !== void 0 && n(!!o), fn(e, 'internal-error');
      },
      gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
    );
  }
  _originValidation(e) {
    const n = e._key();
    return (
      this.originValidationPromises[n] || (this.originValidationPromises[n] = GO(e)),
      this.originValidationPromises[n]
    );
  }
  get _shouldInitProactively() {
    return kE() || kp() || Pu();
  }
}
const yx = gx;
var gy = '@firebase/auth',
  yy = '0.21.4';
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
 */ class vx {
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
    b(this.auth._initializationPromise, 'dependent-sdk-initialized-before-auth');
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
 */ function wx(t) {
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
function Ex(t) {
  ki(
    new Pr(
      'auth',
      (e, { options: n }) => {
        const r = e.getProvider('app').getImmediate(),
          i = e.getProvider('heartbeat'),
          { apiKey: s, authDomain: o } = r.options;
        return ((a, l) => {
          b(s && !s.includes(':'), 'invalid-api-key', { appName: a.name }),
            b(!(o != null && o.includes(':')), 'argument-error', { appName: a.name });
          const u = {
              apiKey: s,
              authDomain: o,
              clientPlatform: t,
              apiHost: 'identitytoolkit.googleapis.com',
              tokenApiHost: 'securetoken.googleapis.com',
              apiScheme: 'https',
              sdkClientVersion: CE(t)
            },
            c = new eO(a, l, u);
          return OP(c, n), c;
        })(r, i);
      },
      'PUBLIC'
    )
      .setInstantiationMode('EXPLICIT')
      .setInstanceCreatedCallback((e, n, r) => {
        e.getProvider('auth-internal').initialize();
      })
  ),
    ki(
      new Pr(
        'auth-internal',
        (e) => {
          const n = Cp(e.getProvider('auth').getImmediate());
          return ((r) => new vx(r))(n);
        },
        'PRIVATE'
      ).setInstantiationMode('EXPLICIT')
    ),
    Kn(gy, yy, wx(t)),
    Kn(gy, yy, 'esm2017');
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
 */ const Sx = 5 * 60,
  _x = c1('authIdTokenMaxAge') || Sx;
let vy = null;
const Tx = (t) => async (e) => {
  const n = e && (await e.getIdTokenResult()),
    r = n && (new Date().getTime() - Date.parse(n.issuedAtTime)) / 1e3;
  if (r && r > _x) return;
  const i = n == null ? void 0 : n.token;
  vy !== i &&
    ((vy = i),
    await fetch(t, {
      method: i ? 'POST' : 'DELETE',
      headers: i ? { Authorization: `Bearer ${i}` } : {}
    }));
};
function Ix(t = p1()) {
  const e = Lf(t, 'auth');
  if (e.isInitialized()) return e.getImmediate();
  const n = PP(t, { popupRedirectResolver: yx, persistence: [CO, pO, $E] }),
    r = c1('authTokenSyncURL');
  if (r) {
    const s = Tx(r);
    uO(n, s, () => s(n.currentUser)), lO(n, (o) => s(o));
  }
  const i = u1('auth');
  return i && tO(n, `http://${i}`), n;
}
Ex('Browser');
const kx = {
    apiKey: 'AIzaSyBJjwj12LEJT2EsEP_hEz9k_63KPu5lDyU',
    authDomain: 'chatapp-3aac4.firebaseapp.com',
    databaseURL: 'https://chatapp-3aac4-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'chatapp-3aac4',
    storageBucket: 'chatapp-3aac4.appspot.com',
    messagingSenderId: '478305703317',
    appId: '1:478305703317:web:94d0307ae5053b5409129c'
  },
  VE = f1(kx),
  Cx = mP(VE),
  Ax = Ix(VE),
  Sd = Y0('data/fetchData', async () => {
    const t = [];
    try {
      return (
        (await AP(fP(Cx, 'test_data'))).forEach((n) => {
          t.push({ id: n.id, ...n.data() });
        }),
        t
      );
    } catch (e) {
      console.log(e);
    }
    return t;
  });
Y0('data/fetchSignedInUser', async () => {
  const t = [];
  try {
    cO(Ax, (e) => (e ? t.push(e) : console.log('User is not signed in'), t));
  } catch (e) {
    console.log(e);
  }
  return t;
});
const Nx = cI({
    name: 'data',
    initialState: { data: [], isLoading: !1, hasError: !1 },
    reducers: { setData: (t, e) => ({ ...t, ...e.payload }) },
    extraReducers(t) {
      t.addCase(Sd.pending, (e, n) => {
        e.isLoading = !0;
      }),
        t.addCase(Sd.rejected, (e, n) => {
          (e.hasError = !0), (e.isLoading = !1);
        });
    }
  }),
  Rx = Nx.reducer,
  Px = q0({ globalState: Rx }),
  Ox = oI({ reducer: Px }),
  xx = ({ children: t }) => Tt(tk, { store: Ox, children: t });
/**
 * @remix-run/router v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function yl() {
  return (
    (yl = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    yl.apply(this, arguments)
  );
}
var On;
(function (t) {
  (t.Pop = 'POP'), (t.Push = 'PUSH'), (t.Replace = 'REPLACE');
})(On || (On = {}));
const wy = 'popstate';
function Dx(t) {
  t === void 0 && (t = {});
  function e(r, i) {
    let { pathname: s, search: o, hash: a } = r.location;
    return _d(
      '',
      { pathname: s, search: o, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || 'default'
    );
  }
  function n(r, i) {
    return typeof i == 'string' ? i : zE(i);
  }
  return Lx(e, n, null, t);
}
function ut(t, e) {
  if (t === !1 || t === null || typeof t > 'u') throw new Error(e);
}
function $x() {
  return Math.random().toString(36).substr(2, 8);
}
function Ey(t, e) {
  return { usr: t.state, key: t.key, idx: e };
}
function _d(t, e, n, r) {
  return (
    n === void 0 && (n = null),
    yl(
      { pathname: typeof t == 'string' ? t : t.pathname, search: '', hash: '' },
      typeof e == 'string' ? Du(e) : e,
      { state: n, key: (e && e.key) || r || $x() }
    )
  );
}
function zE(t) {
  let { pathname: e = '/', search: n = '', hash: r = '' } = t;
  return (
    n && n !== '?' && (e += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (e += r.charAt(0) === '#' ? r : '#' + r),
    e
  );
}
function Du(t) {
  let e = {};
  if (t) {
    let n = t.indexOf('#');
    n >= 0 && ((e.hash = t.substr(n)), (t = t.substr(0, n)));
    let r = t.indexOf('?');
    r >= 0 && ((e.search = t.substr(r)), (t = t.substr(0, r))), t && (e.pathname = t);
  }
  return e;
}
function Lx(t, e, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: s = !1 } = r,
    o = i.history,
    a = On.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), o.replaceState(yl({}, o.state, { idx: u }), ''));
  function c() {
    return (o.state || { idx: null }).idx;
  }
  function h() {
    a = On.Pop;
    let E = c(),
      p = E == null ? null : E - u;
    (u = E), l && l({ action: a, location: v.location, delta: p });
  }
  function d(E, p) {
    a = On.Push;
    let f = _d(v.location, E, p);
    n && n(f, E), (u = c() + 1);
    let g = Ey(f, u),
      w = v.createHref(f);
    try {
      o.pushState(g, '', w);
    } catch {
      i.location.assign(w);
    }
    s && l && l({ action: a, location: v.location, delta: 1 });
  }
  function m(E, p) {
    a = On.Replace;
    let f = _d(v.location, E, p);
    n && n(f, E), (u = c());
    let g = Ey(f, u),
      w = v.createHref(f);
    o.replaceState(g, '', w), s && l && l({ action: a, location: v.location, delta: 0 });
  }
  function y(E) {
    let p = i.location.origin !== 'null' ? i.location.origin : i.location.href,
      f = typeof E == 'string' ? E : zE(E);
    return (
      ut(p, 'No window.location.(origin|href) available to create URL for href: ' + f),
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
    listen(E) {
      if (l) throw new Error('A history only accepts one active listener');
      return (
        i.addEventListener(wy, h),
        (l = E),
        () => {
          i.removeEventListener(wy, h), (l = null);
        }
      );
    },
    createHref(E) {
      return e(i, E);
    },
    createURL: y,
    encodeLocation(E) {
      let p = y(E);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: d,
    replace: m,
    go(E) {
      return o.go(E);
    }
  };
  return v;
}
var Sy;
(function (t) {
  (t.data = 'data'), (t.deferred = 'deferred'), (t.redirect = 'redirect'), (t.error = 'error');
})(Sy || (Sy = {}));
function Mx(t, e, n) {
  n === void 0 && (n = '/');
  let r = typeof e == 'string' ? Du(e) : e,
    i = KE(r.pathname || '/', n);
  if (i == null) return null;
  let s = BE(t);
  bx(s);
  let o = null;
  for (let a = 0; o == null && a < s.length; ++a) o = Wx(s[a], Qx(i));
  return o;
}
function BE(t, e, n, r) {
  e === void 0 && (e = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let i = (s, o, a) => {
    let l = {
      relativePath: a === void 0 ? s.path || '' : a,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: o,
      route: s
    };
    l.relativePath.startsWith('/') &&
      (ut(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = mi([r, l.relativePath]),
      c = n.concat(l);
    s.children &&
      s.children.length > 0 &&
      (ut(
        s.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + u + '".')
      ),
      BE(s.children, e, c, u)),
      !(s.path == null && !s.index) && e.push({ path: u, score: Hx(u, s.index), routesMeta: c });
  };
  return (
    t.forEach((s, o) => {
      var a;
      if (s.path === '' || !((a = s.path) != null && a.includes('?'))) i(s, o);
      else for (let l of HE(s.path)) i(s, o, l);
    }),
    e
  );
}
function HE(t) {
  let e = t.split('/');
  if (e.length === 0) return [];
  let [n, ...r] = e,
    i = n.endsWith('?'),
    s = n.replace(/\?$/, '');
  if (r.length === 0) return i ? [s, ''] : [s];
  let o = HE(r.join('/')),
    a = [];
  return (
    a.push(...o.map((l) => (l === '' ? s : [s, l].join('/')))),
    i && a.push(...o),
    a.map((l) => (t.startsWith('/') && l === '' ? '/' : l))
  );
}
function bx(t) {
  t.sort((e, n) =>
    e.score !== n.score
      ? n.score - e.score
      : Kx(
          e.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Ux = /^:\w+$/,
  Fx = 3,
  jx = 2,
  Vx = 1,
  zx = 10,
  Bx = -2,
  _y = (t) => t === '*';
function Hx(t, e) {
  let n = t.split('/'),
    r = n.length;
  return (
    n.some(_y) && (r += Bx),
    e && (r += jx),
    n.filter((i) => !_y(i)).reduce((i, s) => i + (Ux.test(s) ? Fx : s === '' ? Vx : zx), r)
  );
}
function Kx(t, e) {
  return t.length === e.length && t.slice(0, -1).every((r, i) => r === e[i])
    ? t[t.length - 1] - e[e.length - 1]
    : 0;
}
function Wx(t, e) {
  let { routesMeta: n } = t,
    r = {},
    i = '/',
    s = [];
  for (let o = 0; o < n.length; ++o) {
    let a = n[o],
      l = o === n.length - 1,
      u = i === '/' ? e : e.slice(i.length) || '/',
      c = qx({ path: a.relativePath, caseSensitive: a.caseSensitive, end: l }, u);
    if (!c) return null;
    Object.assign(r, c.params);
    let h = a.route;
    s.push({
      params: r,
      pathname: mi([i, c.pathname]),
      pathnameBase: Yx(mi([i, c.pathnameBase])),
      route: h
    }),
      c.pathnameBase !== '/' && (i = mi([i, c.pathnameBase]));
  }
  return s;
}
function qx(t, e) {
  typeof t == 'string' && (t = { path: t, caseSensitive: !1, end: !0 });
  let [n, r] = Gx(t.path, t.caseSensitive, t.end),
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
      return (u[c] = Xx(a[h] || '', c)), u;
    }, {}),
    pathname: s,
    pathnameBase: o,
    pattern: t
  };
}
function Gx(t, e, n) {
  e === void 0 && (e = !1),
    n === void 0 && (n = !0),
    Rp(
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
function Qx(t) {
  try {
    return decodeURI(t);
  } catch (e) {
    return (
      Rp(
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
function Xx(t, e) {
  try {
    return decodeURIComponent(t);
  } catch (n) {
    return (
      Rp(
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
function KE(t, e) {
  if (e === '/') return t;
  if (!t.toLowerCase().startsWith(e.toLowerCase())) return null;
  let n = e.endsWith('/') ? e.length - 1 : e.length,
    r = t.charAt(n);
  return r && r !== '/' ? null : t.slice(n) || '/';
}
function Rp(t, e) {
  if (!t) {
    typeof console < 'u' && console.warn(e);
    try {
      throw new Error(e);
    } catch {}
  }
}
const mi = (t) => t.join('/').replace(/\/\/+/g, '/'),
  Yx = (t) => t.replace(/\/+$/, '').replace(/^\/*/, '/');
function Jx(t) {
  return (
    t != null &&
    typeof t.status == 'number' &&
    typeof t.statusText == 'string' &&
    typeof t.internal == 'boolean' &&
    'data' in t
  );
}
const Zx = ['post', 'put', 'patch', 'delete'];
[...Zx];
/**
 * React Router v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Td() {
  return (
    (Td = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    Td.apply(this, arguments)
  );
}
function eD(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
const tD = typeof Object.is == 'function' ? Object.is : eD,
  { useState: nD, useEffect: rD, useLayoutEffect: iD, useDebugValue: sD } = Vc;
function oD(t, e, n) {
  const r = e(),
    [{ inst: i }, s] = nD({ inst: { value: r, getSnapshot: e } });
  return (
    iD(() => {
      (i.value = r), (i.getSnapshot = e), bc(i) && s({ inst: i });
    }, [t, r, e]),
    rD(
      () => (
        bc(i) && s({ inst: i }),
        t(() => {
          bc(i) && s({ inst: i });
        })
      ),
      [t]
    ),
    sD(r),
    r
  );
}
function bc(t) {
  const e = t.getSnapshot,
    n = t.value;
  try {
    const r = e();
    return !tD(n, r);
  } catch {
    return !0;
  }
}
function aD(t, e, n) {
  return e();
}
const lD =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  uD = !lD,
  cD = uD ? aD : oD;
'useSyncExternalStore' in Vc && ((t) => t.useSyncExternalStore)(Vc);
const WE = I.createContext(null),
  qE = I.createContext(null),
  GE = I.createContext(null),
  $u = I.createContext(null),
  Lu = I.createContext({ outlet: null, matches: [] }),
  QE = I.createContext(null);
function Pp() {
  return I.useContext($u) != null;
}
function hD() {
  return Pp() || ut(!1), I.useContext($u).location;
}
function dD(t, e) {
  Pp() || ut(!1);
  let { navigator: n } = I.useContext(GE),
    r = I.useContext(qE),
    { matches: i } = I.useContext(Lu),
    s = i[i.length - 1],
    o = s ? s.params : {};
  s && s.pathname;
  let a = s ? s.pathnameBase : '/';
  s && s.route;
  let l = hD(),
    u;
  if (e) {
    var c;
    let v = typeof e == 'string' ? Du(e) : e;
    a === '/' || ((c = v.pathname) != null && c.startsWith(a)) || ut(!1), (u = v);
  } else u = l;
  let h = u.pathname || '/',
    d = a === '/' ? h : h.slice(a.length) || '/',
    m = Mx(t, { pathname: d }),
    y = gD(
      m &&
        m.map((v) =>
          Object.assign({}, v, {
            params: Object.assign({}, o, v.params),
            pathname: mi([
              a,
              n.encodeLocation ? n.encodeLocation(v.pathname).pathname : v.pathname
            ]),
            pathnameBase:
              v.pathnameBase === '/'
                ? a
                : mi([
                    a,
                    n.encodeLocation ? n.encodeLocation(v.pathnameBase).pathname : v.pathnameBase
                  ])
          })
        ),
      i,
      r || void 0
    );
  return e && y
    ? I.createElement(
        $u.Provider,
        {
          value: {
            location: Td({ pathname: '/', search: '', hash: '', state: null, key: 'default' }, u),
            navigationType: On.Pop
          }
        },
        y
      )
    : y;
}
function fD() {
  let t = ED(),
    e = Jx(t) ? t.status + ' ' + t.statusText : t instanceof Error ? t.message : JSON.stringify(t),
    n = t instanceof Error ? t.stack : null,
    i = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
    s = null;
  return I.createElement(
    I.Fragment,
    null,
    I.createElement('h2', null, 'Unexpected Application Error!'),
    I.createElement('h3', { style: { fontStyle: 'italic' } }, e),
    n ? I.createElement('pre', { style: i }, n) : null,
    s
  );
}
class pD extends I.Component {
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
      ? I.createElement(
          Lu.Provider,
          { value: this.props.routeContext },
          I.createElement(QE.Provider, { value: this.state.error, children: this.props.component })
        )
      : this.props.children;
  }
}
function mD(t) {
  let { routeContext: e, match: n, children: r } = t,
    i = I.useContext(WE);
  return (
    i &&
      i.static &&
      i.staticContext &&
      n.route.errorElement &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    I.createElement(Lu.Provider, { value: e }, r)
  );
}
function gD(t, e, n) {
  if ((e === void 0 && (e = []), t == null))
    if (n != null && n.errors) t = n.matches;
    else return null;
  let r = t,
    i = n == null ? void 0 : n.errors;
  if (i != null) {
    let s = r.findIndex((o) => o.route.id && (i == null ? void 0 : i[o.route.id]));
    s >= 0 || ut(!1), (r = r.slice(0, Math.min(r.length, s + 1)));
  }
  return r.reduceRight((s, o, a) => {
    let l = o.route.id ? (i == null ? void 0 : i[o.route.id]) : null,
      u = n ? o.route.errorElement || I.createElement(fD, null) : null,
      c = e.concat(r.slice(0, a + 1)),
      h = () =>
        I.createElement(
          mD,
          { match: o, routeContext: { outlet: s, matches: c } },
          l ? u : o.route.element !== void 0 ? o.route.element : s
        );
    return n && (o.route.errorElement || a === 0)
      ? I.createElement(pD, {
          location: n.location,
          component: u,
          error: l,
          children: h(),
          routeContext: { outlet: null, matches: c }
        })
      : h();
  }, null);
}
var Ty;
(function (t) {
  (t.UseBlocker = 'useBlocker'), (t.UseRevalidator = 'useRevalidator');
})(Ty || (Ty = {}));
var vl;
(function (t) {
  (t.UseLoaderData = 'useLoaderData'),
    (t.UseActionData = 'useActionData'),
    (t.UseRouteError = 'useRouteError'),
    (t.UseNavigation = 'useNavigation'),
    (t.UseRouteLoaderData = 'useRouteLoaderData'),
    (t.UseMatches = 'useMatches'),
    (t.UseRevalidator = 'useRevalidator');
})(vl || (vl = {}));
function yD(t) {
  let e = I.useContext(qE);
  return e || ut(!1), e;
}
function vD(t) {
  let e = I.useContext(Lu);
  return e || ut(!1), e;
}
function wD(t) {
  let e = vD(),
    n = e.matches[e.matches.length - 1];
  return n.route.id || ut(!1), n.route.id;
}
function ED() {
  var t;
  let e = I.useContext(QE),
    n = yD(vl.UseRouteError),
    r = wD(vl.UseRouteError);
  return e || ((t = n.errors) == null ? void 0 : t[r]);
}
function XE(t) {
  ut(!1);
}
function SD(t) {
  let {
    basename: e = '/',
    children: n = null,
    location: r,
    navigationType: i = On.Pop,
    navigator: s,
    static: o = !1
  } = t;
  Pp() && ut(!1);
  let a = e.replace(/^\/*/, '/'),
    l = I.useMemo(() => ({ basename: a, navigator: s, static: o }), [a, s, o]);
  typeof r == 'string' && (r = Du(r));
  let { pathname: u = '/', search: c = '', hash: h = '', state: d = null, key: m = 'default' } = r,
    y = I.useMemo(() => {
      let v = KE(u, a);
      return v == null ? null : { pathname: v, search: c, hash: h, state: d, key: m };
    }, [a, u, c, h, d, m]);
  return y == null
    ? null
    : I.createElement(
        GE.Provider,
        { value: l },
        I.createElement($u.Provider, { children: n, value: { location: y, navigationType: i } })
      );
}
function _D(t) {
  let { children: e, location: n } = t,
    r = I.useContext(WE),
    i = r && !e ? r.router.routes : Id(e);
  return dD(i, n);
}
var Iy;
(function (t) {
  (t[(t.pending = 0)] = 'pending'), (t[(t.success = 1)] = 'success'), (t[(t.error = 2)] = 'error');
})(Iy || (Iy = {}));
new Promise(() => {});
function Id(t, e) {
  e === void 0 && (e = []);
  let n = [];
  return (
    I.Children.forEach(t, (r, i) => {
      if (!I.isValidElement(r)) return;
      if (r.type === I.Fragment) {
        n.push.apply(n, Id(r.props.children, e));
        return;
      }
      r.type !== XE && ut(!1), !r.props.index || !r.props.children || ut(!1);
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
      r.props.children && (o.children = Id(r.props.children, s)), n.push(o);
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
 */ function TD(t) {
  let { basename: e, children: n, window: r } = t,
    i = I.useRef();
  i.current == null && (i.current = Dx({ window: r, v5Compat: !0 }));
  let s = i.current,
    [o, a] = I.useState({ action: s.action, location: s.location });
  return (
    I.useLayoutEffect(() => s.listen(a), [s]),
    I.createElement(SD, {
      basename: e,
      children: n,
      location: o.location,
      navigationType: o.action,
      navigator: s
    })
  );
}
var ky;
(function (t) {
  (t.UseScrollRestoration = 'useScrollRestoration'),
    (t.UseSubmitImpl = 'useSubmitImpl'),
    (t.UseFetcher = 'useFetcher');
})(ky || (ky = {}));
var Cy;
(function (t) {
  (t.UseFetchers = 'useFetchers'), (t.UseScrollRestoration = 'useScrollRestoration');
})(Cy || (Cy = {}));
function ID() {
  return Tt('div', { className: 'App' });
}
const kD = () =>
  Tt(TD, { children: Tt(_D, { children: Tt(XE, { path: '/', element: Tt(ID, {}) }) }) });
function YE(t) {
  var e,
    n,
    r = '';
  if (typeof t == 'string' || typeof t == 'number') r += t;
  else if (typeof t == 'object')
    if (Array.isArray(t))
      for (e = 0; e < t.length; e++) t[e] && (n = YE(t[e])) && (r && (r += ' '), (r += n));
    else for (e in t) t[e] && (r && (r += ' '), (r += e));
  return r;
}
function xn() {
  for (var t, e, n = 0, r = ''; n < arguments.length; )
    (t = arguments[n++]) && (e = YE(t)) && (r && (r += ' '), (r += e));
  return r;
}
const wa = (t) => typeof t == 'number' && !isNaN(t),
  wl = (t) => typeof t == 'string',
  ft = (t) => typeof t == 'function',
  Ea = (t) => (wl(t) || ft(t) ? t : null),
  Uc = (t) => I.isValidElement(t) || wl(t) || ft(t) || wa(t);
function CD(t, e, n) {
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
function Mu(t) {
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
      v = I.useRef(0);
    return (
      I.useLayoutEffect(() => {
        const E = h.current,
          p = m.split(' '),
          f = (g) => {
            g.target === h.current &&
              (E.dispatchEvent(new Event('d')),
              E.removeEventListener('animationend', f),
              E.removeEventListener('animationcancel', f),
              v.current === 0 && g.type !== 'animationcancel' && E.classList.remove(...p));
          };
        E.classList.add(...p),
          E.addEventListener('animationend', f),
          E.addEventListener('animationcancel', f);
      }, []),
      I.useEffect(() => {
        const E = h.current,
          p = () => {
            E.removeEventListener('animationend', p), i ? CD(E, c, s) : c();
          };
        d ||
          (u
            ? p()
            : ((v.current = 1), (E.className += ` ${y}`), E.addEventListener('animationend', p)));
      }, [d]),
      Z.createElement(Z.Fragment, null, a)
    );
  };
}
function Ay(t, e) {
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
const gr = {
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
  Zo = (t) => {
    let { theme: e, type: n, ...r } = t;
    return Z.createElement('svg', {
      viewBox: '0 0 24 24',
      width: '100%',
      height: '100%',
      fill: e === 'colored' ? 'currentColor' : `var(--toastify-icon-color-${n})`,
      ...r
    });
  },
  Fc = {
    info: function (t) {
      return Z.createElement(
        Zo,
        { ...t },
        Z.createElement('path', {
          d: 'M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z'
        })
      );
    },
    warning: function (t) {
      return Z.createElement(
        Zo,
        { ...t },
        Z.createElement('path', {
          d: 'M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z'
        })
      );
    },
    success: function (t) {
      return Z.createElement(
        Zo,
        { ...t },
        Z.createElement('path', {
          d: 'M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z'
        })
      );
    },
    error: function (t) {
      return Z.createElement(
        Zo,
        { ...t },
        Z.createElement('path', {
          d: 'M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z'
        })
      );
    },
    spinner: function () {
      return Z.createElement('div', { className: 'Toastify__spinner' });
    }
  };
function AD(t) {
  const [, e] = I.useReducer((m) => m + 1, 0),
    [n, r] = I.useState([]),
    i = I.useRef(null),
    s = I.useRef(new Map()).current,
    o = (m) => n.indexOf(m) !== -1,
    a = I.useRef({
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
    let { delay: v, staleId: E, ...p } = y;
    if (
      !Uc(m) ||
      (function (be) {
        return (
          !i.current ||
          (a.props.enableMultiContainer && be.containerId !== a.props.containerId) ||
          (s.has(be.toastId) && be.updateId == null)
        );
      })(p)
    )
      return;
    const { toastId: f, updateId: g, data: w } = p,
      { props: S } = a,
      k = () => u(f),
      C = g == null;
    C && a.count++;
    const A = {
      ...S,
      style: S.toastStyle,
      key: a.toastKey++,
      ...p,
      toastId: f,
      updateId: g,
      data: w,
      closeToast: k,
      isIn: !1,
      className: Ea(p.className || S.toastClassName),
      bodyClassName: Ea(p.bodyClassName || S.bodyClassName),
      progressClassName: Ea(p.progressClassName || S.progressClassName),
      autoClose:
        !p.isLoading &&
        ((V = p.autoClose), (x = S.autoClose), V === !1 || (wa(V) && V > 0) ? V : x),
      deleteToast() {
        const be = Ay(s.get(f), 'removed');
        s.delete(f), gr.emit(4, be);
        const et = a.queue.length;
        if (
          ((a.count = f == null ? a.count - a.displayedToast : a.count - 1),
          a.count < 0 && (a.count = 0),
          et > 0)
        ) {
          const tt = f == null ? a.props.limit : 1;
          if (et === 1 || tt === 1) a.displayedToast++, c();
          else {
            const Qt = tt > et ? et : tt;
            a.displayedToast = Qt;
            for (let Re = 0; Re < Qt; Re++) c();
          }
        } else e();
      }
    };
    var V, x;
    (A.iconOut = (function (be) {
      let { theme: et, type: tt, isLoading: Qt, icon: Re } = be,
        ct = null;
      const N = { theme: et, type: tt };
      return (
        Re === !1 ||
          (ft(Re)
            ? (ct = Re(N))
            : I.isValidElement(Re)
            ? (ct = I.cloneElement(Re, N))
            : wl(Re) || wa(Re)
            ? (ct = Re)
            : Qt
            ? (ct = Fc.spinner())
            : ((M) => M in Fc)(tt) && (ct = Fc[tt](N))),
        ct
      );
    })(A)),
      ft(p.onOpen) && (A.onOpen = p.onOpen),
      ft(p.onClose) && (A.onClose = p.onClose),
      (A.closeButton = S.closeButton),
      p.closeButton === !1 || Uc(p.closeButton)
        ? (A.closeButton = p.closeButton)
        : p.closeButton === !0 && (A.closeButton = !Uc(S.closeButton) || S.closeButton);
    let te = m;
    I.isValidElement(m) && !wl(m.type)
      ? (te = I.cloneElement(m, { closeToast: k, toastProps: A, data: w }))
      : ft(m) && (te = m({ closeToast: k, toastProps: A, data: w })),
      S.limit && S.limit > 0 && a.count > S.limit && C
        ? a.queue.push({ toastContent: te, toastProps: A, staleId: E })
        : wa(v)
        ? setTimeout(() => {
            d(te, A, E);
          }, v)
        : d(te, A, E);
  }
  function d(m, y, v) {
    const { toastId: E } = y;
    v && s.delete(v);
    const p = { content: m, props: y };
    s.set(E, p),
      r((f) => [...f, E].filter((g) => g !== v)),
      gr.emit(4, Ay(p, p.props.updateId == null ? 'added' : 'updated'));
  }
  return (
    I.useEffect(
      () => (
        (a.containerId = t.containerId),
        gr
          .cancelEmit(3)
          .on(0, h)
          .on(1, (m) => i.current && u(m))
          .on(5, l)
          .emit(2, a),
        () => {
          s.clear(), gr.emit(3, a);
        }
      ),
      []
    ),
    I.useEffect(() => {
      (a.props = t), (a.isToastActive = o), (a.displayedToast = n.length);
    }),
    {
      getToastToRender: function (m) {
        const y = new Map(),
          v = Array.from(s.values());
        return (
          t.newestOnTop && v.reverse(),
          v.forEach((E) => {
            const { position: p } = E.props;
            y.has(p) || y.set(p, []), y.get(p).push(E);
          }),
          Array.from(y, (E) => m(E[0], E[1]))
        );
      },
      containerRef: i,
      isToastActive: o
    }
  );
}
function Ny(t) {
  return t.targetTouches && t.targetTouches.length >= 1 ? t.targetTouches[0].clientX : t.clientX;
}
function Ry(t) {
  return t.targetTouches && t.targetTouches.length >= 1 ? t.targetTouches[0].clientY : t.clientY;
}
function ND(t) {
  const [e, n] = I.useState(!1),
    [r, i] = I.useState(!1),
    s = I.useRef(null),
    o = I.useRef({
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
    a = I.useRef(t),
    { autoClose: l, pauseOnHover: u, closeToast: c, onClick: h, closeOnClick: d } = t;
  function m(w) {
    if (t.draggable) {
      w.nativeEvent.type === 'touchstart' && w.nativeEvent.preventDefault(),
        (o.didMove = !1),
        document.addEventListener('mousemove', p),
        document.addEventListener('mouseup', f),
        document.addEventListener('touchmove', p),
        document.addEventListener('touchend', f);
      const S = s.current;
      (o.canCloseOnClick = !0),
        (o.canDrag = !0),
        (o.boundingRect = S.getBoundingClientRect()),
        (S.style.transition = ''),
        (o.x = Ny(w.nativeEvent)),
        (o.y = Ry(w.nativeEvent)),
        t.draggableDirection === 'x'
          ? ((o.start = o.x), (o.removalDistance = S.offsetWidth * (t.draggablePercent / 100)))
          : ((o.start = o.y),
            (o.removalDistance =
              S.offsetHeight *
              (t.draggablePercent === 80 ? 1.5 * t.draggablePercent : t.draggablePercent / 100)));
    }
  }
  function y(w) {
    if (o.boundingRect) {
      const { top: S, bottom: k, left: C, right: A } = o.boundingRect;
      w.nativeEvent.type !== 'touchend' &&
      t.pauseOnHover &&
      o.x >= C &&
      o.x <= A &&
      o.y >= S &&
      o.y <= k
        ? E()
        : v();
    }
  }
  function v() {
    n(!0);
  }
  function E() {
    n(!1);
  }
  function p(w) {
    const S = s.current;
    o.canDrag &&
      S &&
      ((o.didMove = !0),
      e && E(),
      (o.x = Ny(w)),
      (o.y = Ry(w)),
      (o.delta = t.draggableDirection === 'x' ? o.x - o.start : o.y - o.start),
      o.start !== o.x && (o.canCloseOnClick = !1),
      (S.style.transform = `translate${t.draggableDirection}(${o.delta}px)`),
      (S.style.opacity = '' + (1 - Math.abs(o.delta / o.removalDistance))));
  }
  function f() {
    document.removeEventListener('mousemove', p),
      document.removeEventListener('mouseup', f),
      document.removeEventListener('touchmove', p),
      document.removeEventListener('touchend', f);
    const w = s.current;
    if (o.canDrag && o.didMove && w) {
      if (((o.canDrag = !1), Math.abs(o.delta) > o.removalDistance))
        return i(!0), void t.closeToast();
      (w.style.transition = 'transform 0.2s, opacity 0.2s'),
        (w.style.transform = `translate${t.draggableDirection}(0)`),
        (w.style.opacity = '1');
    }
  }
  I.useEffect(() => {
    a.current = t;
  }),
    I.useEffect(
      () => (
        s.current && s.current.addEventListener('d', v, { once: !0 }),
        ft(t.onOpen) && t.onOpen(I.isValidElement(t.children) && t.children.props),
        () => {
          const w = a.current;
          ft(w.onClose) && w.onClose(I.isValidElement(w.children) && w.children.props);
        }
      ),
      []
    ),
    I.useEffect(
      () => (
        t.pauseOnFocusLoss &&
          (document.hasFocus() || E(),
          window.addEventListener('focus', v),
          window.addEventListener('blur', E)),
        () => {
          t.pauseOnFocusLoss &&
            (window.removeEventListener('focus', v), window.removeEventListener('blur', E));
        }
      ),
      [t.pauseOnFocusLoss]
    );
  const g = { onMouseDown: m, onTouchStart: m, onMouseUp: y, onTouchEnd: y };
  return (
    l && u && ((g.onMouseEnter = E), (g.onMouseLeave = v)),
    d &&
      (g.onClick = (w) => {
        h && h(w), o.canCloseOnClick && c();
      }),
    {
      playToast: v,
      pauseToast: E,
      isRunning: e,
      preventExitTransition: r,
      toastRef: s,
      eventHandlers: g
    }
  );
}
function JE(t) {
  let { closeToast: e, theme: n, ariaLabel: r = 'close' } = t;
  return Z.createElement(
    'button',
    {
      className: `Toastify__close-button Toastify__close-button--${n}`,
      type: 'button',
      onClick: (i) => {
        i.stopPropagation(), e(i);
      },
      'aria-label': r
    },
    Z.createElement(
      'svg',
      { 'aria-hidden': 'true', viewBox: '0 0 14 16' },
      Z.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z'
      })
    )
  );
}
function RD(t) {
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
  const v = xn(
      'Toastify__progress-bar',
      l ? 'Toastify__progress-bar--controlled' : 'Toastify__progress-bar--animated',
      `Toastify__progress-bar-theme--${d}`,
      `Toastify__progress-bar--${i}`,
      { 'Toastify__progress-bar--rtl': c }
    ),
    E = ft(o) ? o({ rtl: c, type: i, defaultClassName: v }) : xn(v, o);
  return Z.createElement('div', {
    role: 'progressbar',
    'aria-hidden': m ? 'true' : 'false',
    'aria-label': 'notification timer',
    className: E,
    style: y,
    [l && u >= 1 ? 'onTransitionEnd' : 'onAnimationEnd']:
      l && u < 1
        ? null
        : () => {
            h && r();
          }
  });
}
const PD = (t) => {
    const { isRunning: e, preventExitTransition: n, toastRef: r, eventHandlers: i } = ND(t),
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
        bodyClassName: E,
        bodyStyle: p,
        progressClassName: f,
        progressStyle: g,
        updateId: w,
        role: S,
        progress: k,
        rtl: C,
        toastId: A,
        deleteToast: V,
        isIn: x,
        isLoading: te,
        iconOut: be,
        closeOnClick: et,
        theme: tt
      } = t,
      Qt = xn(
        'Toastify__toast',
        `Toastify__toast-theme--${tt}`,
        `Toastify__toast--${u}`,
        { 'Toastify__toast--rtl': C },
        { 'Toastify__toast--close-on-click': et }
      ),
      Re = ft(y) ? y({ rtl: C, position: m, type: u, defaultClassName: Qt }) : xn(Qt, y),
      ct = !!k || !a,
      N = { closeToast: h, type: u, theme: tt };
    let M = null;
    return (
      s === !1 || (M = ft(s) ? s(N) : I.isValidElement(s) ? I.cloneElement(s, N) : JE(N)),
      Z.createElement(
        d,
        { isIn: x, done: V, position: m, preventExitTransition: n, nodeRef: r },
        Z.createElement(
          'div',
          { id: A, onClick: l, className: Re, ...i, style: v, ref: r },
          Z.createElement(
            'div',
            {
              ...(x && { role: S }),
              className: ft(E) ? E({ type: u }) : xn('Toastify__toast-body', E),
              style: p
            },
            be != null &&
              Z.createElement(
                'div',
                {
                  className: xn('Toastify__toast-icon', {
                    'Toastify--animate-icon Toastify__zoom-enter': !te
                  })
                },
                be
              ),
            Z.createElement('div', null, o)
          ),
          M,
          Z.createElement(RD, {
            ...(w && !ct ? { key: `pb-${w}` } : {}),
            rtl: C,
            theme: tt,
            delay: a,
            isRunning: e,
            isIn: x,
            closeToast: h,
            hide: c,
            type: u,
            style: g,
            className: f,
            controlledProgress: ct,
            progress: k || 0
          })
        )
      )
    );
  },
  bu = function (t, e) {
    return (
      e === void 0 && (e = !1),
      {
        enter: `Toastify--animate Toastify__${t}-enter`,
        exit: `Toastify--animate Toastify__${t}-exit`,
        appendPosition: e
      }
    );
  },
  OD = Mu(bu('bounce', !0));
Mu(bu('slide', !0));
Mu(bu('zoom'));
Mu(bu('flip'));
const El = I.forwardRef((t, e) => {
  const { getToastToRender: n, containerRef: r, isToastActive: i } = AD(t),
    { className: s, style: o, rtl: a, containerId: l } = t;
  function u(c) {
    const h = xn('Toastify__toast-container', `Toastify__toast-container--${c}`, {
      'Toastify__toast-container--rtl': a
    });
    return ft(s) ? s({ position: c, rtl: a, defaultClassName: h }) : xn(h, Ea(s));
  }
  return (
    I.useEffect(() => {
      e && (e.current = r.current);
    }, []),
    Z.createElement(
      'div',
      { ref: r, className: 'Toastify', id: l },
      n((c, h) => {
        const d = h.length ? { ...o } : { ...o, pointerEvents: 'none' };
        return Z.createElement(
          'div',
          { className: u(c), style: d, key: `container-${c}` },
          h.map((m, y) => {
            let { content: v, props: E } = m;
            return Z.createElement(
              PD,
              {
                ...E,
                isIn: i(E.toastId),
                style: { ...E.style, '--nth': y + 1, '--len': h.length },
                key: `toast-${E.key}`
              },
              v
            );
          })
        );
      })
    )
  );
});
(El.displayName = 'ToastContainer'),
  (El.defaultProps = {
    position: 'top-right',
    transition: OD,
    autoClose: 5e3,
    closeButton: JE,
    pauseOnHover: !0,
    pauseOnFocusLoss: !0,
    closeOnClick: !0,
    draggable: !0,
    draggablePercent: 80,
    draggableDirection: 'x',
    role: 'alert',
    theme: 'light'
  });
let Py,
  jc = new Map(),
  Oy = [];
gr.on(2, (t) => {
  (Py = t.containerId || t),
    jc.set(Py, t),
    Oy.forEach((e) => {
      gr.emit(0, e.content, e.options);
    }),
    (Oy = []);
}).on(3, (t) => {
  jc.delete(t.containerId || t), jc.size === 0 && gr.off(0).off(1).off(5);
});
const xD = () =>
    jy(IS, {
      children: [
        Tt(El, {
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
        Tt(El, {})
      ]
    }),
  DD = () => ik(),
  $D = () => {
    const t = DD();
    return (
      I.useEffect(() => {
        t(Sd());
      }, []),
      Tt(Z.Fragment, {})
    );
  },
  LD = zc.createRoot(document.getElementById('root'));
LD.render(jy(xx, { children: [Tt(xD, {}), Tt($D, {}), Tt(kD, {})] }));
