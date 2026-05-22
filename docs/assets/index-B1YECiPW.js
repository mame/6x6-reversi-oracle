(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r);
  new MutationObserver((r) => {
    for (const s of r) if (s.type === "childList") for (const a of s.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && n(a);
  }).observe(document, { childList: true, subtree: true });
  function e(r) {
    const s = {};
    return r.integrity && (s.integrity = r.integrity), r.referrerPolicy && (s.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? s.credentials = "include" : r.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s;
  }
  function n(r) {
    if (r.ep) return;
    r.ep = true;
    const s = e(r);
    fetch(r.href, s);
  }
})();
const hl = () => {
  const i = [];
  for (let t = 0; t < 6; t++) {
    i[t] = [];
    for (let e = 0; e < 6; e++) i[t][e] = { kind: "empty", state: { kind: "unplaceable" } };
  }
  return i[2][2] = { kind: "white", state: { kind: "turning", dir: 7, order: 0 } }, i[2][3] = { kind: "black", state: { kind: "turning", dir: 5, order: 0 } }, i[3][2] = { kind: "black", state: { kind: "turning", dir: 1, order: 0 } }, i[3][3] = { kind: "white", state: { kind: "turning", dir: 3, order: 0 } }, i;
}, ul = [[-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]], Ao = (i, t, e, n, r, s, a) => {
  const [o, c] = ul[s];
  if (n += o, r += c, n < 0 || 5 < n || r < 0 || 5 < r) return false;
  switch (i[r][n].kind) {
    case t:
      return true;
    case e:
      return Ao(i, t, e, n, r, s, a + 1) ? (i[r][n] = { kind: t, state: { kind: "turning", dir: s, order: a } }, true) : false;
    default:
      return false;
  }
}, pr = (i) => {
  let t = hl(), e = "black", n = "white";
  for (const r of i) {
    const s = t.map((o) => o.map(({ kind: c }) => c == "empty" ? { kind: c, state: { kind: "unplaceable" } } : { kind: c, state: { kind: "still" } }));
    if (r >= 0) {
      const o = r % 6, c = Math.floor(r / 6);
      for (let l = 0; l < 8; l++) Ao(s, e, n, o, c, l, 0);
      s[c][o] = { kind: e, state: { kind: "placing" } };
    }
    t = s;
    const a = e;
    e = n, n = a;
  }
  return t;
}, wo = (i, t) => {
  const e = pr(i);
  for (const [n, r] of t) {
    if (n < 0) break;
    const s = n % 6, a = Math.floor(n / 6);
    e[a][s].kind == "empty" && (e[a][s].state = { kind: "placeable", value: r });
  }
  return e;
}, dl = (i) => {
  for (let t = 0; t < 6; t++) for (let e = 0; e < 6; e++) {
    const n = i[t][e];
    if (n.kind == "empty" && n.state.kind == "placeable") return true;
  }
  return false;
};
/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/
const qs = "180", ri = { ROTATE: 0, DOLLY: 1, PAN: 2 }, ni = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, fl = 0, ga = 1, pl = 2, Ro = 1, ml = 2, nn = 3, gn = 0, Re = 1, rn = 2, mn = 0, si = 1, va = 2, xa = 3, Ma = 4, _l = 5, Rn = 100, gl = 101, vl = 102, xl = 103, Ml = 104, Sl = 200, El = 201, yl = 202, Tl = 203, is = 204, rs = 205, bl = 206, Al = 207, wl = 208, Rl = 209, Cl = 210, Pl = 211, Dl = 212, Ll = 213, Ul = 214, ss = 0, as = 1, os = 2, oi = 3, ls = 4, cs = 5, hs = 6, us = 7, vr = 0, Il = 1, Nl = 2, _n = 0, Fl = 1, Ol = 2, Bl = 3, zl = 4, Hl = 5, kl = 6, Vl = 7, Co = 300, li = 301, ci = 302, ds = 303, fs = 304, xr = 306, ps = 1e3, Pn = 1001, ms = 1002, Ue = 1003, Gl = 1004, Oi = 1005, Ye = 1006, Tr = 1007, Dn = 1008, je = 1009, Po = 1010, Do = 1011, wi = 1012, Ks = 1013, Un = 1014, qe = 1015, Li = 1016, js = 1017, Zs = 1018, Ri = 1020, Lo = 35902, Uo = 35899, Io = 1021, No = 1022, Ve = 1023, Ci = 1026, Pi = 1027, $s = 1028, Js = 1029, Fo = 1030, Qs = 1031, ta = 1033, or = 33776, lr = 33777, cr = 33778, hr = 33779, _s = 35840, gs = 35841, vs = 35842, xs = 35843, Ms = 36196, Ss = 37492, Es = 37496, ys = 37808, Ts = 37809, bs = 37810, As = 37811, ws = 37812, Rs = 37813, Cs = 37814, Ps = 37815, Ds = 37816, Ls = 37817, Us = 37818, Is = 37819, Ns = 37820, Fs = 37821, Os = 36492, Bs = 36494, zs = 36495, Hs = 36283, ks = 36284, Vs = 36285, Gs = 36286, Wl = 3200, Xl = 3201, ea = 0, Yl = 1, pn = "", be = "srgb", hi = "srgb-linear", mr = "linear", qt = "srgb", Hn = 7680, Sa = 519, ql = 512, Kl = 513, jl = 514, Oo = 515, Zl = 516, $l = 517, Jl = 518, Ql = 519, Ea = 35044, ya = "300 es", Ke = 2e3, _r = 2001;
class Fn {
  addEventListener(t, e) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[t] === void 0 && (n[t] = []), n[t].indexOf(e) === -1 && n[t].push(e);
  }
  hasEventListener(t, e) {
    const n = this._listeners;
    return n === void 0 ? false : n[t] !== void 0 && n[t].indexOf(e) !== -1;
  }
  removeEventListener(t, e) {
    const n = this._listeners;
    if (n === void 0) return;
    const r = n[t];
    if (r !== void 0) {
      const s = r.indexOf(e);
      s !== -1 && r.splice(s, 1);
    }
  }
  dispatchEvent(t) {
    const e = this._listeners;
    if (e === void 0) return;
    const n = e[t.type];
    if (n !== void 0) {
      t.target = this;
      const r = n.slice(0);
      for (let s = 0, a = r.length; s < a; s++) r[s].call(this, t);
      t.target = null;
    }
  }
}
const ge = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let Ta = 1234567;
const bi = Math.PI / 180, ui = 180 / Math.PI;
function fi() {
  const i = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (ge[i & 255] + ge[i >> 8 & 255] + ge[i >> 16 & 255] + ge[i >> 24 & 255] + "-" + ge[t & 255] + ge[t >> 8 & 255] + "-" + ge[t >> 16 & 15 | 64] + ge[t >> 24 & 255] + "-" + ge[e & 63 | 128] + ge[e >> 8 & 255] + "-" + ge[e >> 16 & 255] + ge[e >> 24 & 255] + ge[n & 255] + ge[n >> 8 & 255] + ge[n >> 16 & 255] + ge[n >> 24 & 255]).toLowerCase();
}
function Ot(i, t, e) {
  return Math.max(t, Math.min(e, i));
}
function na(i, t) {
  return (i % t + t) % t;
}
function tc(i, t, e, n, r) {
  return n + (i - t) * (r - n) / (e - t);
}
function ec(i, t, e) {
  return i !== t ? (e - i) / (t - i) : 0;
}
function Ai(i, t, e) {
  return (1 - e) * i + e * t;
}
function nc(i, t, e, n) {
  return Ai(i, t, 1 - Math.exp(-e * n));
}
function ic(i, t = 1) {
  return t - Math.abs(na(i, t * 2) - t);
}
function rc(i, t, e) {
  return i <= t ? 0 : i >= e ? 1 : (i = (i - t) / (e - t), i * i * (3 - 2 * i));
}
function sc(i, t, e) {
  return i <= t ? 0 : i >= e ? 1 : (i = (i - t) / (e - t), i * i * i * (i * (i * 6 - 15) + 10));
}
function ac(i, t) {
  return i + Math.floor(Math.random() * (t - i + 1));
}
function oc(i, t) {
  return i + Math.random() * (t - i);
}
function lc(i) {
  return i * (0.5 - Math.random());
}
function cc(i) {
  i !== void 0 && (Ta = i);
  let t = Ta += 1831565813;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function hc(i) {
  return i * bi;
}
function uc(i) {
  return i * ui;
}
function dc(i) {
  return (i & i - 1) === 0 && i !== 0;
}
function fc(i) {
  return Math.pow(2, Math.ceil(Math.log(i) / Math.LN2));
}
function pc(i) {
  return Math.pow(2, Math.floor(Math.log(i) / Math.LN2));
}
function mc(i, t, e, n, r) {
  const s = Math.cos, a = Math.sin, o = s(e / 2), c = a(e / 2), l = s((t + n) / 2), u = a((t + n) / 2), d = s((t - n) / 2), f = a((t - n) / 2), p = s((n - t) / 2), g = a((n - t) / 2);
  switch (r) {
    case "XYX":
      i.set(o * u, c * d, c * f, o * l);
      break;
    case "YZY":
      i.set(c * f, o * u, c * d, o * l);
      break;
    case "ZXZ":
      i.set(c * d, c * f, o * u, o * l);
      break;
    case "XZX":
      i.set(o * u, c * g, c * p, o * l);
      break;
    case "YXY":
      i.set(c * p, o * u, c * g, o * l);
      break;
    case "ZYZ":
      i.set(c * g, c * p, o * u, o * l);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r);
  }
}
function ei(i, t) {
  switch (t.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return i / 4294967295;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int32Array:
      return Math.max(i / 2147483647, -1);
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Se(i, t) {
  switch (t.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return Math.round(i * 4294967295);
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
      return Math.round(i * 255);
    case Int32Array:
      return Math.round(i * 2147483647);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const ur = { DEG2RAD: bi, RAD2DEG: ui, generateUUID: fi, clamp: Ot, euclideanModulo: na, mapLinear: tc, inverseLerp: ec, lerp: Ai, damp: nc, pingpong: ic, smoothstep: rc, smootherstep: sc, randInt: ac, randFloat: oc, randFloatSpread: lc, seededRandom: cc, degToRad: hc, radToDeg: uc, isPowerOfTwo: dc, ceilPowerOfTwo: fc, floorPowerOfTwo: pc, setQuaternionFromProperEuler: mc, normalize: Se, denormalize: ei };
class Pt {
  constructor(t = 0, e = 0) {
    Pt.prototype.isVector2 = true, this.x = t, this.y = e;
  }
  get width() {
    return this.x;
  }
  set width(t) {
    this.x = t;
  }
  get height() {
    return this.y;
  }
  set height(t) {
    this.y = t;
  }
  set(t, e) {
    return this.x = t, this.y = e, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this;
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  applyMatrix3(t) {
    const e = this.x, n = this.y, r = t.elements;
    return this.x = r[0] * e + r[3] * n + r[6], this.y = r[1] * e + r[4] * n + r[7], this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this;
  }
  clamp(t, e) {
    return this.x = Ot(this.x, t.x, e.x), this.y = Ot(this.y, t.y, e.y), this;
  }
  clampScalar(t, e) {
    return this.x = Ot(this.x, t, e), this.y = Ot(this.y, t, e), this;
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Ot(n, t, e));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y;
  }
  cross(t) {
    return this.x * t.y - this.y * t.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0) return Math.PI / 2;
    const n = this.dot(t) / e;
    return Math.acos(Ot(n, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x, n = this.y - t.y;
    return e * e + n * n;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this;
  }
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this;
  }
  rotateAround(t, e) {
    const n = Math.cos(e), r = Math.sin(e), s = this.x - t.x, a = this.y - t.y;
    return this.x = s * n - a * r + t.x, this.y = s * r + a * n + t.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class In {
  constructor(t = 0, e = 0, n = 0, r = 1) {
    this.isQuaternion = true, this._x = t, this._y = e, this._z = n, this._w = r;
  }
  static slerpFlat(t, e, n, r, s, a, o) {
    let c = n[r + 0], l = n[r + 1], u = n[r + 2], d = n[r + 3];
    const f = s[a + 0], p = s[a + 1], g = s[a + 2], M = s[a + 3];
    if (o === 0) {
      t[e + 0] = c, t[e + 1] = l, t[e + 2] = u, t[e + 3] = d;
      return;
    }
    if (o === 1) {
      t[e + 0] = f, t[e + 1] = p, t[e + 2] = g, t[e + 3] = M;
      return;
    }
    if (d !== M || c !== f || l !== p || u !== g) {
      let m = 1 - o;
      const h = c * f + l * p + u * g + d * M, w = h >= 0 ? 1 : -1, T = 1 - h * h;
      if (T > Number.EPSILON) {
        const C = Math.sqrt(T), A = Math.atan2(C, h * w);
        m = Math.sin(m * A) / C, o = Math.sin(o * A) / C;
      }
      const E = o * w;
      if (c = c * m + f * E, l = l * m + p * E, u = u * m + g * E, d = d * m + M * E, m === 1 - o) {
        const C = 1 / Math.sqrt(c * c + l * l + u * u + d * d);
        c *= C, l *= C, u *= C, d *= C;
      }
    }
    t[e] = c, t[e + 1] = l, t[e + 2] = u, t[e + 3] = d;
  }
  static multiplyQuaternionsFlat(t, e, n, r, s, a) {
    const o = n[r], c = n[r + 1], l = n[r + 2], u = n[r + 3], d = s[a], f = s[a + 1], p = s[a + 2], g = s[a + 3];
    return t[e] = o * g + u * d + c * p - l * f, t[e + 1] = c * g + u * f + l * d - o * p, t[e + 2] = l * g + u * p + o * f - c * d, t[e + 3] = u * g - o * d - c * f - l * p, t;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(t) {
    this._w = t, this._onChangeCallback();
  }
  set(t, e, n, r) {
    return this._x = t, this._y = e, this._z = n, this._w = r, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(t) {
    return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this;
  }
  setFromEuler(t, e = true) {
    const n = t._x, r = t._y, s = t._z, a = t._order, o = Math.cos, c = Math.sin, l = o(n / 2), u = o(r / 2), d = o(s / 2), f = c(n / 2), p = c(r / 2), g = c(s / 2);
    switch (a) {
      case "XYZ":
        this._x = f * u * d + l * p * g, this._y = l * p * d - f * u * g, this._z = l * u * g + f * p * d, this._w = l * u * d - f * p * g;
        break;
      case "YXZ":
        this._x = f * u * d + l * p * g, this._y = l * p * d - f * u * g, this._z = l * u * g - f * p * d, this._w = l * u * d + f * p * g;
        break;
      case "ZXY":
        this._x = f * u * d - l * p * g, this._y = l * p * d + f * u * g, this._z = l * u * g + f * p * d, this._w = l * u * d - f * p * g;
        break;
      case "ZYX":
        this._x = f * u * d - l * p * g, this._y = l * p * d + f * u * g, this._z = l * u * g - f * p * d, this._w = l * u * d + f * p * g;
        break;
      case "YZX":
        this._x = f * u * d + l * p * g, this._y = l * p * d + f * u * g, this._z = l * u * g - f * p * d, this._w = l * u * d - f * p * g;
        break;
      case "XZY":
        this._x = f * u * d - l * p * g, this._y = l * p * d - f * u * g, this._z = l * u * g + f * p * d, this._w = l * u * d + f * p * g;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return e === true && this._onChangeCallback(), this;
  }
  setFromAxisAngle(t, e) {
    const n = e / 2, r = Math.sin(n);
    return this._x = t.x * r, this._y = t.y * r, this._z = t.z * r, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t) {
    const e = t.elements, n = e[0], r = e[4], s = e[8], a = e[1], o = e[5], c = e[9], l = e[2], u = e[6], d = e[10], f = n + o + d;
    if (f > 0) {
      const p = 0.5 / Math.sqrt(f + 1);
      this._w = 0.25 / p, this._x = (u - c) * p, this._y = (s - l) * p, this._z = (a - r) * p;
    } else if (n > o && n > d) {
      const p = 2 * Math.sqrt(1 + n - o - d);
      this._w = (u - c) / p, this._x = 0.25 * p, this._y = (r + a) / p, this._z = (s + l) / p;
    } else if (o > d) {
      const p = 2 * Math.sqrt(1 + o - n - d);
      this._w = (s - l) / p, this._x = (r + a) / p, this._y = 0.25 * p, this._z = (c + u) / p;
    } else {
      const p = 2 * Math.sqrt(1 + d - n - o);
      this._w = (a - r) / p, this._x = (s + l) / p, this._y = (c + u) / p, this._z = 0.25 * p;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(t, e) {
    let n = t.dot(e) + 1;
    return n < 1e-8 ? (n = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = n)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = n), this.normalize();
  }
  angleTo(t) {
    return 2 * Math.acos(Math.abs(Ot(this.dot(t), -1, 1)));
  }
  rotateTowards(t, e) {
    const n = this.angleTo(t);
    if (n === 0) return this;
    const r = Math.min(1, e / n);
    return this.slerp(t, r), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(t) {
    return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let t = this.length();
    return t === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this;
  }
  multiply(t) {
    return this.multiplyQuaternions(this, t);
  }
  premultiply(t) {
    return this.multiplyQuaternions(t, this);
  }
  multiplyQuaternions(t, e) {
    const n = t._x, r = t._y, s = t._z, a = t._w, o = e._x, c = e._y, l = e._z, u = e._w;
    return this._x = n * u + a * o + r * l - s * c, this._y = r * u + a * c + s * o - n * l, this._z = s * u + a * l + n * c - r * o, this._w = a * u - n * o - r * c - s * l, this._onChangeCallback(), this;
  }
  slerp(t, e) {
    if (e === 0) return this;
    if (e === 1) return this.copy(t);
    const n = this._x, r = this._y, s = this._z, a = this._w;
    let o = a * t._w + n * t._x + r * t._y + s * t._z;
    if (o < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, o = -o) : this.copy(t), o >= 1) return this._w = a, this._x = n, this._y = r, this._z = s, this;
    const c = 1 - o * o;
    if (c <= Number.EPSILON) {
      const p = 1 - e;
      return this._w = p * a + e * this._w, this._x = p * n + e * this._x, this._y = p * r + e * this._y, this._z = p * s + e * this._z, this.normalize(), this;
    }
    const l = Math.sqrt(c), u = Math.atan2(l, o), d = Math.sin((1 - e) * u) / l, f = Math.sin(e * u) / l;
    return this._w = a * d + this._w * f, this._x = n * d + this._x * f, this._y = r * d + this._y * f, this._z = s * d + this._z * f, this._onChangeCallback(), this;
  }
  slerpQuaternions(t, e, n) {
    return this.copy(t).slerp(e, n);
  }
  random() {
    const t = 2 * Math.PI * Math.random(), e = 2 * Math.PI * Math.random(), n = Math.random(), r = Math.sqrt(1 - n), s = Math.sqrt(n);
    return this.set(r * Math.sin(t), r * Math.cos(t), s * Math.sin(e), s * Math.cos(e));
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
  }
  fromArray(t, e = 0) {
    return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t;
  }
  fromBufferAttribute(t, e) {
    return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class U {
  constructor(t = 0, e = 0, n = 0) {
    U.prototype.isVector3 = true, this.x = t, this.y = e, this.z = n;
  }
  set(t, e, n) {
    return n === void 0 && (n = this.z), this.x = t, this.y = e, this.z = n, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this;
  }
  multiplyVectors(t, e) {
    return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this;
  }
  applyEuler(t) {
    return this.applyQuaternion(ba.setFromEuler(t));
  }
  applyAxisAngle(t, e) {
    return this.applyQuaternion(ba.setFromAxisAngle(t, e));
  }
  applyMatrix3(t) {
    const e = this.x, n = this.y, r = this.z, s = t.elements;
    return this.x = s[0] * e + s[3] * n + s[6] * r, this.y = s[1] * e + s[4] * n + s[7] * r, this.z = s[2] * e + s[5] * n + s[8] * r, this;
  }
  applyNormalMatrix(t) {
    return this.applyMatrix3(t).normalize();
  }
  applyMatrix4(t) {
    const e = this.x, n = this.y, r = this.z, s = t.elements, a = 1 / (s[3] * e + s[7] * n + s[11] * r + s[15]);
    return this.x = (s[0] * e + s[4] * n + s[8] * r + s[12]) * a, this.y = (s[1] * e + s[5] * n + s[9] * r + s[13]) * a, this.z = (s[2] * e + s[6] * n + s[10] * r + s[14]) * a, this;
  }
  applyQuaternion(t) {
    const e = this.x, n = this.y, r = this.z, s = t.x, a = t.y, o = t.z, c = t.w, l = 2 * (a * r - o * n), u = 2 * (o * e - s * r), d = 2 * (s * n - a * e);
    return this.x = e + c * l + a * d - o * u, this.y = n + c * u + o * l - s * d, this.z = r + c * d + s * u - a * l, this;
  }
  project(t) {
    return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
  }
  unproject(t) {
    return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
  }
  transformDirection(t) {
    const e = this.x, n = this.y, r = this.z, s = t.elements;
    return this.x = s[0] * e + s[4] * n + s[8] * r, this.y = s[1] * e + s[5] * n + s[9] * r, this.z = s[2] * e + s[6] * n + s[10] * r, this.normalize();
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this;
  }
  clamp(t, e) {
    return this.x = Ot(this.x, t.x, e.x), this.y = Ot(this.y, t.y, e.y), this.z = Ot(this.z, t.z, e.z), this;
  }
  clampScalar(t, e) {
    return this.x = Ot(this.x, t, e), this.y = Ot(this.y, t, e), this.z = Ot(this.z, t, e), this;
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Ot(n, t, e));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this;
  }
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this;
  }
  cross(t) {
    return this.crossVectors(this, t);
  }
  crossVectors(t, e) {
    const n = t.x, r = t.y, s = t.z, a = e.x, o = e.y, c = e.z;
    return this.x = r * c - s * o, this.y = s * a - n * c, this.z = n * o - r * a, this;
  }
  projectOnVector(t) {
    const e = t.lengthSq();
    if (e === 0) return this.set(0, 0, 0);
    const n = t.dot(this) / e;
    return this.copy(t).multiplyScalar(n);
  }
  projectOnPlane(t) {
    return br.copy(this).projectOnVector(t), this.sub(br);
  }
  reflect(t) {
    return this.sub(br.copy(t).multiplyScalar(2 * this.dot(t)));
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0) return Math.PI / 2;
    const n = this.dot(t) / e;
    return Math.acos(Ot(n, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x, n = this.y - t.y, r = this.z - t.z;
    return e * e + n * n + r * r;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
  }
  setFromSpherical(t) {
    return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
  }
  setFromSphericalCoords(t, e, n) {
    const r = Math.sin(e) * t;
    return this.x = r * Math.sin(n), this.y = Math.cos(e) * t, this.z = r * Math.cos(n), this;
  }
  setFromCylindrical(t) {
    return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
  }
  setFromCylindricalCoords(t, e, n) {
    return this.x = t * Math.sin(e), this.y = n, this.z = t * Math.cos(e), this;
  }
  setFromMatrixPosition(t) {
    const e = t.elements;
    return this.x = e[12], this.y = e[13], this.z = e[14], this;
  }
  setFromMatrixScale(t) {
    const e = this.setFromMatrixColumn(t, 0).length(), n = this.setFromMatrixColumn(t, 1).length(), r = this.setFromMatrixColumn(t, 2).length();
    return this.x = e, this.y = n, this.z = r, this;
  }
  setFromMatrixColumn(t, e) {
    return this.fromArray(t.elements, e * 4);
  }
  setFromMatrix3Column(t, e) {
    return this.fromArray(t.elements, e * 3);
  }
  setFromEuler(t) {
    return this.x = t._x, this.y = t._y, this.z = t._z, this;
  }
  setFromColor(t) {
    return this.x = t.r, this.y = t.g, this.z = t.b, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const t = Math.random() * Math.PI * 2, e = Math.random() * 2 - 1, n = Math.sqrt(1 - e * e);
    return this.x = n * Math.cos(t), this.y = e, this.z = n * Math.sin(t), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const br = new U(), ba = new In();
class It {
  constructor(t, e, n, r, s, a, o, c, l) {
    It.prototype.isMatrix3 = true, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], t !== void 0 && this.set(t, e, n, r, s, a, o, c, l);
  }
  set(t, e, n, r, s, a, o, c, l) {
    const u = this.elements;
    return u[0] = t, u[1] = r, u[2] = o, u[3] = e, u[4] = s, u[5] = c, u[6] = n, u[7] = a, u[8] = l, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(t) {
    const e = this.elements, n = t.elements;
    return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this;
  }
  extractBasis(t, e, n) {
    return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(t) {
    const e = t.elements;
    return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const n = t.elements, r = e.elements, s = this.elements, a = n[0], o = n[3], c = n[6], l = n[1], u = n[4], d = n[7], f = n[2], p = n[5], g = n[8], M = r[0], m = r[3], h = r[6], w = r[1], T = r[4], E = r[7], C = r[2], A = r[5], P = r[8];
    return s[0] = a * M + o * w + c * C, s[3] = a * m + o * T + c * A, s[6] = a * h + o * E + c * P, s[1] = l * M + u * w + d * C, s[4] = l * m + u * T + d * A, s[7] = l * h + u * E + d * P, s[2] = f * M + p * w + g * C, s[5] = f * m + p * T + g * A, s[8] = f * h + p * E + g * P, this;
  }
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this;
  }
  determinant() {
    const t = this.elements, e = t[0], n = t[1], r = t[2], s = t[3], a = t[4], o = t[5], c = t[6], l = t[7], u = t[8];
    return e * a * u - e * o * l - n * s * u + n * o * c + r * s * l - r * a * c;
  }
  invert() {
    const t = this.elements, e = t[0], n = t[1], r = t[2], s = t[3], a = t[4], o = t[5], c = t[6], l = t[7], u = t[8], d = u * a - o * l, f = o * c - u * s, p = l * s - a * c, g = e * d + n * f + r * p;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const M = 1 / g;
    return t[0] = d * M, t[1] = (r * l - u * n) * M, t[2] = (o * n - r * a) * M, t[3] = f * M, t[4] = (u * e - r * c) * M, t[5] = (r * s - o * e) * M, t[6] = p * M, t[7] = (n * c - l * e) * M, t[8] = (a * e - n * s) * M, this;
  }
  transpose() {
    let t;
    const e = this.elements;
    return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this;
  }
  getNormalMatrix(t) {
    return this.setFromMatrix4(t).invert().transpose();
  }
  transposeIntoArray(t) {
    const e = this.elements;
    return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this;
  }
  setUvTransform(t, e, n, r, s, a, o) {
    const c = Math.cos(s), l = Math.sin(s);
    return this.set(n * c, n * l, -n * (c * a + l * o) + a + t, -r * l, r * c, -r * (-l * a + c * o) + o + e, 0, 0, 1), this;
  }
  scale(t, e) {
    return this.premultiply(Ar.makeScale(t, e)), this;
  }
  rotate(t) {
    return this.premultiply(Ar.makeRotation(-t)), this;
  }
  translate(t, e) {
    return this.premultiply(Ar.makeTranslation(t, e)), this;
  }
  makeTranslation(t, e) {
    return t.isVector2 ? this.set(1, 0, t.x, 0, 1, t.y, 0, 0, 1) : this.set(1, 0, t, 0, 1, e, 0, 0, 1), this;
  }
  makeRotation(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(e, -n, 0, n, e, 0, 0, 0, 1), this;
  }
  makeScale(t, e) {
    return this.set(t, 0, 0, 0, e, 0, 0, 0, 1), this;
  }
  equals(t) {
    const e = this.elements, n = t.elements;
    for (let r = 0; r < 9; r++) if (e[r] !== n[r]) return false;
    return true;
  }
  fromArray(t, e = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = t[n + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const n = this.elements;
    return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Ar = new It();
function Bo(i) {
  for (let t = i.length - 1; t >= 0; --t) if (i[t] >= 65535) return true;
  return false;
}
function gr(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function _c() {
  const i = gr("canvas");
  return i.style.display = "block", i;
}
const Aa = {};
function Di(i) {
  i in Aa || (Aa[i] = true, console.warn(i));
}
function gc(i, t, e) {
  return new Promise(function(n, r) {
    function s() {
      switch (i.clientWaitSync(t, i.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case i.WAIT_FAILED:
          r();
          break;
        case i.TIMEOUT_EXPIRED:
          setTimeout(s, e);
          break;
        default:
          n();
      }
    }
    setTimeout(s, e);
  });
}
const wa = new It().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322), Ra = new It().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
function vc() {
  const i = { enabled: true, workingColorSpace: hi, spaces: {}, convert: function(r, s, a) {
    return this.enabled === false || s === a || !s || !a || (this.spaces[s].transfer === qt && (r.r = sn(r.r), r.g = sn(r.g), r.b = sn(r.b)), this.spaces[s].primaries !== this.spaces[a].primaries && (r.applyMatrix3(this.spaces[s].toXYZ), r.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === qt && (r.r = ai(r.r), r.g = ai(r.g), r.b = ai(r.b))), r;
  }, workingToColorSpace: function(r, s) {
    return this.convert(r, this.workingColorSpace, s);
  }, colorSpaceToWorking: function(r, s) {
    return this.convert(r, s, this.workingColorSpace);
  }, getPrimaries: function(r) {
    return this.spaces[r].primaries;
  }, getTransfer: function(r) {
    return r === pn ? mr : this.spaces[r].transfer;
  }, getToneMappingMode: function(r) {
    return this.spaces[r].outputColorSpaceConfig.toneMappingMode || "standard";
  }, getLuminanceCoefficients: function(r, s = this.workingColorSpace) {
    return r.fromArray(this.spaces[s].luminanceCoefficients);
  }, define: function(r) {
    Object.assign(this.spaces, r);
  }, _getMatrix: function(r, s, a) {
    return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ);
  }, _getDrawingBufferColorSpace: function(r) {
    return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace;
  }, _getUnpackColorSpace: function(r = this.workingColorSpace) {
    return this.spaces[r].workingColorSpaceConfig.unpackColorSpace;
  }, fromWorkingColorSpace: function(r, s) {
    return Di("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), i.workingToColorSpace(r, s);
  }, toWorkingColorSpace: function(r, s) {
    return Di("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), i.colorSpaceToWorking(r, s);
  } }, t = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], e = [0.2126, 0.7152, 0.0722], n = [0.3127, 0.329];
  return i.define({ [hi]: { primaries: t, whitePoint: n, transfer: mr, toXYZ: wa, fromXYZ: Ra, luminanceCoefficients: e, workingColorSpaceConfig: { unpackColorSpace: be }, outputColorSpaceConfig: { drawingBufferColorSpace: be } }, [be]: { primaries: t, whitePoint: n, transfer: qt, toXYZ: wa, fromXYZ: Ra, luminanceCoefficients: e, outputColorSpaceConfig: { drawingBufferColorSpace: be } } }), i;
}
const Gt = vc();
function sn(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function ai(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let kn;
class xc {
  static getDataURL(t, e = "image/png") {
    if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u") return t.src;
    let n;
    if (t instanceof HTMLCanvasElement) n = t;
    else {
      kn === void 0 && (kn = gr("canvas")), kn.width = t.width, kn.height = t.height;
      const r = kn.getContext("2d");
      t instanceof ImageData ? r.putImageData(t, 0, 0) : r.drawImage(t, 0, 0, t.width, t.height), n = kn;
    }
    return n.toDataURL(e);
  }
  static sRGBToLinear(t) {
    if (typeof HTMLImageElement < "u" && t instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap) {
      const e = gr("canvas");
      e.width = t.width, e.height = t.height;
      const n = e.getContext("2d");
      n.drawImage(t, 0, 0, t.width, t.height);
      const r = n.getImageData(0, 0, t.width, t.height), s = r.data;
      for (let a = 0; a < s.length; a++) s[a] = sn(s[a] / 255) * 255;
      return n.putImageData(r, 0, 0), e;
    } else if (t.data) {
      const e = t.data.slice(0);
      for (let n = 0; n < e.length; n++) e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[n] = Math.floor(sn(e[n] / 255) * 255) : e[n] = sn(e[n]);
      return { data: e, width: t.width, height: t.height };
    } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t;
  }
}
let Mc = 0;
class ia {
  constructor(t = null) {
    this.isSource = true, Object.defineProperty(this, "id", { value: Mc++ }), this.uuid = fi(), this.data = t, this.dataReady = true, this.version = 0;
  }
  getSize(t) {
    const e = this.data;
    return typeof HTMLVideoElement < "u" && e instanceof HTMLVideoElement ? t.set(e.videoWidth, e.videoHeight, 0) : e instanceof VideoFrame ? t.set(e.displayHeight, e.displayWidth, 0) : e !== null ? t.set(e.width, e.height, e.depth || 0) : t.set(0, 0, 0), t;
  }
  set needsUpdate(t) {
    t === true && this.version++;
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    if (!e && t.images[this.uuid] !== void 0) return t.images[this.uuid];
    const n = { uuid: this.uuid, url: "" }, r = this.data;
    if (r !== null) {
      let s;
      if (Array.isArray(r)) {
        s = [];
        for (let a = 0, o = r.length; a < o; a++) r[a].isDataTexture ? s.push(wr(r[a].image)) : s.push(wr(r[a]));
      } else s = wr(r);
      n.url = s;
    }
    return e || (t.images[this.uuid] = n), n;
  }
}
function wr(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? xc.getDataURL(i) : i.data ? { data: Array.from(i.data), width: i.width, height: i.height, type: i.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Sc = 0;
const Rr = new U();
class xe extends Fn {
  constructor(t = xe.DEFAULT_IMAGE, e = xe.DEFAULT_MAPPING, n = Pn, r = Pn, s = Ye, a = Dn, o = Ve, c = je, l = xe.DEFAULT_ANISOTROPY, u = pn) {
    super(), this.isTexture = true, Object.defineProperty(this, "id", { value: Sc++ }), this.uuid = fi(), this.name = "", this.source = new ia(t), this.mipmaps = [], this.mapping = e, this.channel = 0, this.wrapS = n, this.wrapT = r, this.magFilter = s, this.minFilter = a, this.anisotropy = l, this.format = o, this.internalFormat = null, this.type = c, this.offset = new Pt(0, 0), this.repeat = new Pt(1, 1), this.center = new Pt(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new It(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, this.colorSpace = u, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = false, this.isArrayTexture = !!(t && t.depth && t.depth > 1), this.pmremVersion = 0;
  }
  get width() {
    return this.source.getSize(Rr).x;
  }
  get height() {
    return this.source.getSize(Rr).y;
  }
  get depth() {
    return this.source.getSize(Rr).z;
  }
  get image() {
    return this.source.data;
  }
  set image(t = null) {
    this.source.data = t;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  addUpdateRange(t, e) {
    this.updateRanges.push({ start: t, count: e });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.channel = t.channel, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.colorSpace = t.colorSpace, this.renderTarget = t.renderTarget, this.isRenderTargetTexture = t.isRenderTargetTexture, this.isArrayTexture = t.isArrayTexture, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = true, this;
  }
  setValues(t) {
    for (const e in t) {
      const n = t[e];
      if (n === void 0) {
        console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);
        continue;
      }
      const r = this[e];
      if (r === void 0) {
        console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);
        continue;
      }
      r && n && r.isVector2 && n.isVector2 || r && n && r.isVector3 && n.isVector3 || r && n && r.isMatrix3 && n.isMatrix3 ? r.copy(n) : this[e] = n;
    }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    if (!e && t.textures[this.uuid] !== void 0) return t.textures[this.uuid];
    const n = { metadata: { version: 4.7, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(t).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), e || (t.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(t) {
    if (this.mapping !== Co) return t;
    if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch (this.wrapS) {
      case ps:
        t.x = t.x - Math.floor(t.x);
        break;
      case Pn:
        t.x = t.x < 0 ? 0 : 1;
        break;
      case ms:
        Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
        break;
    }
    if (t.y < 0 || t.y > 1) switch (this.wrapT) {
      case ps:
        t.y = t.y - Math.floor(t.y);
        break;
      case Pn:
        t.y = t.y < 0 ? 0 : 1;
        break;
      case ms:
        Math.abs(Math.floor(t.y) % 2) === 1 ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y);
        break;
    }
    return this.flipY && (t.y = 1 - t.y), t;
  }
  set needsUpdate(t) {
    t === true && (this.version++, this.source.needsUpdate = true);
  }
  set needsPMREMUpdate(t) {
    t === true && this.pmremVersion++;
  }
}
xe.DEFAULT_IMAGE = null;
xe.DEFAULT_MAPPING = Co;
xe.DEFAULT_ANISOTROPY = 1;
class jt {
  constructor(t = 0, e = 0, n = 0, r = 1) {
    jt.prototype.isVector4 = true, this.x = t, this.y = e, this.z = n, this.w = r;
  }
  get width() {
    return this.z;
  }
  set width(t) {
    this.z = t;
  }
  get height() {
    return this.w;
  }
  set height(t) {
    this.w = t;
  }
  set(t, e, n, r) {
    return this.x = t, this.y = e, this.z = n, this.w = r, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this.w = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
  setW(t) {
    return this.w = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      case 3:
        this.w = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w !== void 0 ? t.w : 1, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this.w += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this;
  }
  applyMatrix4(t) {
    const e = this.x, n = this.y, r = this.z, s = this.w, a = t.elements;
    return this.x = a[0] * e + a[4] * n + a[8] * r + a[12] * s, this.y = a[1] * e + a[5] * n + a[9] * r + a[13] * s, this.z = a[2] * e + a[6] * n + a[10] * r + a[14] * s, this.w = a[3] * e + a[7] * n + a[11] * r + a[15] * s, this;
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this.w /= t.w, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  setAxisAngleFromQuaternion(t) {
    this.w = 2 * Math.acos(t.w);
    const e = Math.sqrt(1 - t.w * t.w);
    return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this;
  }
  setAxisAngleFromRotationMatrix(t) {
    let e, n, r, s;
    const c = t.elements, l = c[0], u = c[4], d = c[8], f = c[1], p = c[5], g = c[9], M = c[2], m = c[6], h = c[10];
    if (Math.abs(u - f) < 0.01 && Math.abs(d - M) < 0.01 && Math.abs(g - m) < 0.01) {
      if (Math.abs(u + f) < 0.1 && Math.abs(d + M) < 0.1 && Math.abs(g + m) < 0.1 && Math.abs(l + p + h - 3) < 0.1) return this.set(1, 0, 0, 0), this;
      e = Math.PI;
      const T = (l + 1) / 2, E = (p + 1) / 2, C = (h + 1) / 2, A = (u + f) / 4, P = (d + M) / 4, F = (g + m) / 4;
      return T > E && T > C ? T < 0.01 ? (n = 0, r = 0.707106781, s = 0.707106781) : (n = Math.sqrt(T), r = A / n, s = P / n) : E > C ? E < 0.01 ? (n = 0.707106781, r = 0, s = 0.707106781) : (r = Math.sqrt(E), n = A / r, s = F / r) : C < 0.01 ? (n = 0.707106781, r = 0.707106781, s = 0) : (s = Math.sqrt(C), n = P / s, r = F / s), this.set(n, r, s, e), this;
    }
    let w = Math.sqrt((m - g) * (m - g) + (d - M) * (d - M) + (f - u) * (f - u));
    return Math.abs(w) < 1e-3 && (w = 1), this.x = (m - g) / w, this.y = (d - M) / w, this.z = (f - u) / w, this.w = Math.acos((l + p + h - 1) / 2), this;
  }
  setFromMatrixPosition(t) {
    const e = t.elements;
    return this.x = e[12], this.y = e[13], this.z = e[14], this.w = e[15], this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this;
  }
  clamp(t, e) {
    return this.x = Ot(this.x, t.x, e.x), this.y = Ot(this.y, t.y, e.y), this.z = Ot(this.z, t.z, e.z), this.w = Ot(this.w, t.w, e.w), this;
  }
  clampScalar(t, e) {
    return this.x = Ot(this.x, t, e), this.y = Ot(this.y, t, e), this.z = Ot(this.z, t, e), this.w = Ot(this.w, t, e), this;
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Ot(n, t, e));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this;
  }
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this.w = t.w + (e.w - t.w) * n, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Ec extends Fn {
  constructor(t = 1, e = 1, n = {}) {
    super(), n = Object.assign({ generateMipmaps: false, internalFormat: null, minFilter: Ye, depthBuffer: true, stencilBuffer: false, resolveDepthBuffer: true, resolveStencilBuffer: true, depthTexture: null, samples: 0, count: 1, depth: 1, multiview: false }, n), this.isRenderTarget = true, this.width = t, this.height = e, this.depth = n.depth, this.scissor = new jt(0, 0, t, e), this.scissorTest = false, this.viewport = new jt(0, 0, t, e);
    const r = { width: t, height: e, depth: n.depth }, s = new xe(r);
    this.textures = [];
    const a = n.count;
    for (let o = 0; o < a; o++) this.textures[o] = s.clone(), this.textures[o].isRenderTargetTexture = true, this.textures[o].renderTarget = this;
    this._setTextureOptions(n), this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = n.depthTexture, this.samples = n.samples, this.multiview = n.multiview;
  }
  _setTextureOptions(t = {}) {
    const e = { minFilter: Ye, generateMipmaps: false, flipY: false, internalFormat: null };
    t.mapping !== void 0 && (e.mapping = t.mapping), t.wrapS !== void 0 && (e.wrapS = t.wrapS), t.wrapT !== void 0 && (e.wrapT = t.wrapT), t.wrapR !== void 0 && (e.wrapR = t.wrapR), t.magFilter !== void 0 && (e.magFilter = t.magFilter), t.minFilter !== void 0 && (e.minFilter = t.minFilter), t.format !== void 0 && (e.format = t.format), t.type !== void 0 && (e.type = t.type), t.anisotropy !== void 0 && (e.anisotropy = t.anisotropy), t.colorSpace !== void 0 && (e.colorSpace = t.colorSpace), t.flipY !== void 0 && (e.flipY = t.flipY), t.generateMipmaps !== void 0 && (e.generateMipmaps = t.generateMipmaps), t.internalFormat !== void 0 && (e.internalFormat = t.internalFormat);
    for (let n = 0; n < this.textures.length; n++) this.textures[n].setValues(e);
  }
  get texture() {
    return this.textures[0];
  }
  set texture(t) {
    this.textures[0] = t;
  }
  set depthTexture(t) {
    this._depthTexture !== null && (this._depthTexture.renderTarget = null), t !== null && (t.renderTarget = this), this._depthTexture = t;
  }
  get depthTexture() {
    return this._depthTexture;
  }
  setSize(t, e, n = 1) {
    if (this.width !== t || this.height !== e || this.depth !== n) {
      this.width = t, this.height = e, this.depth = n;
      for (let r = 0, s = this.textures.length; r < s; r++) this.textures[r].image.width = t, this.textures[r].image.height = e, this.textures[r].image.depth = n, this.textures[r].isArrayTexture = this.textures[r].image.depth > 1;
      this.dispose();
    }
    this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.width = t.width, this.height = t.height, this.depth = t.depth, this.scissor.copy(t.scissor), this.scissorTest = t.scissorTest, this.viewport.copy(t.viewport), this.textures.length = 0;
    for (let e = 0, n = t.textures.length; e < n; e++) {
      this.textures[e] = t.textures[e].clone(), this.textures[e].isRenderTargetTexture = true, this.textures[e].renderTarget = this;
      const r = Object.assign({}, t.textures[e].image);
      this.textures[e].source = new ia(r);
    }
    return this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.resolveDepthBuffer = t.resolveDepthBuffer, this.resolveStencilBuffer = t.resolveStencilBuffer, t.depthTexture !== null && (this.depthTexture = t.depthTexture.clone()), this.samples = t.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Nn extends Ec {
  constructor(t = 1, e = 1, n = {}) {
    super(t, e, n), this.isWebGLRenderTarget = true;
  }
}
class zo extends xe {
  constructor(t = null, e = 1, n = 1, r = 1) {
    super(null), this.isDataArrayTexture = true, this.image = { data: t, width: e, height: n, depth: r }, this.magFilter = Ue, this.minFilter = Ue, this.wrapR = Pn, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(t) {
    this.layerUpdates.add(t);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class yc extends xe {
  constructor(t = null, e = 1, n = 1, r = 1) {
    super(null), this.isData3DTexture = true, this.image = { data: t, width: e, height: n, depth: r }, this.magFilter = Ue, this.minFilter = Ue, this.wrapR = Pn, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
class On {
  constructor(t = new U(1 / 0, 1 / 0, 1 / 0), e = new U(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = true, this.min = t, this.max = e;
  }
  set(t, e) {
    return this.min.copy(t), this.max.copy(e), this;
  }
  setFromArray(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; e < n; e += 3) this.expandByPoint(Be.fromArray(t, e));
    return this;
  }
  setFromBufferAttribute(t) {
    this.makeEmpty();
    for (let e = 0, n = t.count; e < n; e++) this.expandByPoint(Be.fromBufferAttribute(t, e));
    return this;
  }
  setFromPoints(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
    return this;
  }
  setFromCenterAndSize(t, e) {
    const n = Be.copy(e).multiplyScalar(0.5);
    return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
  }
  setFromObject(t, e = false) {
    return this.makeEmpty(), this.expandByObject(t, e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.min.copy(t.min), this.max.copy(t.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
  }
  expandByPoint(t) {
    return this.min.min(t), this.max.max(t), this;
  }
  expandByVector(t) {
    return this.min.sub(t), this.max.add(t), this;
  }
  expandByScalar(t) {
    return this.min.addScalar(-t), this.max.addScalar(t), this;
  }
  expandByObject(t, e = false) {
    t.updateWorldMatrix(false, false);
    const n = t.geometry;
    if (n !== void 0) {
      const s = n.getAttribute("position");
      if (e === true && s !== void 0 && t.isInstancedMesh !== true) for (let a = 0, o = s.count; a < o; a++) t.isMesh === true ? t.getVertexPosition(a, Be) : Be.fromBufferAttribute(s, a), Be.applyMatrix4(t.matrixWorld), this.expandByPoint(Be);
      else t.boundingBox !== void 0 ? (t.boundingBox === null && t.computeBoundingBox(), Bi.copy(t.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Bi.copy(n.boundingBox)), Bi.applyMatrix4(t.matrixWorld), this.union(Bi);
    }
    const r = t.children;
    for (let s = 0, a = r.length; s < a; s++) this.expandByObject(r[s], e);
    return this;
  }
  containsPoint(t) {
    return t.x >= this.min.x && t.x <= this.max.x && t.y >= this.min.y && t.y <= this.max.y && t.z >= this.min.z && t.z <= this.max.z;
  }
  containsBox(t) {
    return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z;
  }
  getParameter(t, e) {
    return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z));
  }
  intersectsBox(t) {
    return t.max.x >= this.min.x && t.min.x <= this.max.x && t.max.y >= this.min.y && t.min.y <= this.max.y && t.max.z >= this.min.z && t.min.z <= this.max.z;
  }
  intersectsSphere(t) {
    return this.clampPoint(t.center, Be), Be.distanceToSquared(t.center) <= t.radius * t.radius;
  }
  intersectsPlane(t) {
    let e, n;
    return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= -t.constant && n >= -t.constant;
  }
  intersectsTriangle(t) {
    if (this.isEmpty()) return false;
    this.getCenter(gi), zi.subVectors(this.max, gi), Vn.subVectors(t.a, gi), Gn.subVectors(t.b, gi), Wn.subVectors(t.c, gi), on.subVectors(Gn, Vn), ln.subVectors(Wn, Gn), Sn.subVectors(Vn, Wn);
    let e = [0, -on.z, on.y, 0, -ln.z, ln.y, 0, -Sn.z, Sn.y, on.z, 0, -on.x, ln.z, 0, -ln.x, Sn.z, 0, -Sn.x, -on.y, on.x, 0, -ln.y, ln.x, 0, -Sn.y, Sn.x, 0];
    return !Cr(e, Vn, Gn, Wn, zi) || (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Cr(e, Vn, Gn, Wn, zi)) ? false : (Hi.crossVectors(on, ln), e = [Hi.x, Hi.y, Hi.z], Cr(e, Vn, Gn, Wn, zi));
  }
  clampPoint(t, e) {
    return e.copy(t).clamp(this.min, this.max);
  }
  distanceToPoint(t) {
    return this.clampPoint(t, Be).distanceTo(t);
  }
  getBoundingSphere(t) {
    return this.isEmpty() ? t.makeEmpty() : (this.getCenter(t.center), t.radius = this.getSize(Be).length() * 0.5), t;
  }
  intersect(t) {
    return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(t) {
    return this.min.min(t.min), this.max.max(t.max), this;
  }
  applyMatrix4(t) {
    return this.isEmpty() ? this : ($e[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), $e[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), $e[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), $e[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), $e[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), $e[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), $e[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), $e[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints($e), this);
  }
  translate(t) {
    return this.min.add(t), this.max.add(t), this;
  }
  equals(t) {
    return t.min.equals(this.min) && t.max.equals(this.max);
  }
  toJSON() {
    return { min: this.min.toArray(), max: this.max.toArray() };
  }
  fromJSON(t) {
    return this.min.fromArray(t.min), this.max.fromArray(t.max), this;
  }
}
const $e = [new U(), new U(), new U(), new U(), new U(), new U(), new U(), new U()], Be = new U(), Bi = new On(), Vn = new U(), Gn = new U(), Wn = new U(), on = new U(), ln = new U(), Sn = new U(), gi = new U(), zi = new U(), Hi = new U(), En = new U();
function Cr(i, t, e, n, r) {
  for (let s = 0, a = i.length - 3; s <= a; s += 3) {
    En.fromArray(i, s);
    const o = r.x * Math.abs(En.x) + r.y * Math.abs(En.y) + r.z * Math.abs(En.z), c = t.dot(En), l = e.dot(En), u = n.dot(En);
    if (Math.max(-Math.max(c, l, u), Math.min(c, l, u)) > o) return false;
  }
  return true;
}
const Tc = new On(), vi = new U(), Pr = new U();
class Ui {
  constructor(t = new U(), e = -1) {
    this.isSphere = true, this.center = t, this.radius = e;
  }
  set(t, e) {
    return this.center.copy(t), this.radius = e, this;
  }
  setFromPoints(t, e) {
    const n = this.center;
    e !== void 0 ? n.copy(e) : Tc.setFromPoints(t).getCenter(n);
    let r = 0;
    for (let s = 0, a = t.length; s < a; s++) r = Math.max(r, n.distanceToSquared(t[s]));
    return this.radius = Math.sqrt(r), this;
  }
  copy(t) {
    return this.center.copy(t.center), this.radius = t.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(t) {
    return t.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(t) {
    return t.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(t) {
    const e = this.radius + t.radius;
    return t.center.distanceToSquared(this.center) <= e * e;
  }
  intersectsBox(t) {
    return t.intersectsSphere(this);
  }
  intersectsPlane(t) {
    return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(t, e) {
    const n = this.center.distanceToSquared(t);
    return e.copy(t), n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e;
  }
  getBoundingBox(t) {
    return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
  }
  applyMatrix4(t) {
    return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this;
  }
  translate(t) {
    return this.center.add(t), this;
  }
  expandByPoint(t) {
    if (this.isEmpty()) return this.center.copy(t), this.radius = 0, this;
    vi.subVectors(t, this.center);
    const e = vi.lengthSq();
    if (e > this.radius * this.radius) {
      const n = Math.sqrt(e), r = (n - this.radius) * 0.5;
      this.center.addScaledVector(vi, r / n), this.radius += r;
    }
    return this;
  }
  union(t) {
    return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (this.center.equals(t.center) === true ? this.radius = Math.max(this.radius, t.radius) : (Pr.subVectors(t.center, this.center).setLength(t.radius), this.expandByPoint(vi.copy(t.center).add(Pr)), this.expandByPoint(vi.copy(t.center).sub(Pr))), this);
  }
  equals(t) {
    return t.center.equals(this.center) && t.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    return { radius: this.radius, center: this.center.toArray() };
  }
  fromJSON(t) {
    return this.radius = t.radius, this.center.fromArray(t.center), this;
  }
}
const Je = new U(), Dr = new U(), ki = new U(), cn = new U(), Lr = new U(), Vi = new U(), Ur = new U();
class ra {
  constructor(t = new U(), e = new U(0, 0, -1)) {
    this.origin = t, this.direction = e;
  }
  set(t, e) {
    return this.origin.copy(t), this.direction.copy(e), this;
  }
  copy(t) {
    return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
  }
  at(t, e) {
    return e.copy(this.origin).addScaledVector(this.direction, t);
  }
  lookAt(t) {
    return this.direction.copy(t).sub(this.origin).normalize(), this;
  }
  recast(t) {
    return this.origin.copy(this.at(t, Je)), this;
  }
  closestPointToPoint(t, e) {
    e.subVectors(t, this.origin);
    const n = e.dot(this.direction);
    return n < 0 ? e.copy(this.origin) : e.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(t) {
    return Math.sqrt(this.distanceSqToPoint(t));
  }
  distanceSqToPoint(t) {
    const e = Je.subVectors(t, this.origin).dot(this.direction);
    return e < 0 ? this.origin.distanceToSquared(t) : (Je.copy(this.origin).addScaledVector(this.direction, e), Je.distanceToSquared(t));
  }
  distanceSqToSegment(t, e, n, r) {
    Dr.copy(t).add(e).multiplyScalar(0.5), ki.copy(e).sub(t).normalize(), cn.copy(this.origin).sub(Dr);
    const s = t.distanceTo(e) * 0.5, a = -this.direction.dot(ki), o = cn.dot(this.direction), c = -cn.dot(ki), l = cn.lengthSq(), u = Math.abs(1 - a * a);
    let d, f, p, g;
    if (u > 0) if (d = a * c - o, f = a * o - c, g = s * u, d >= 0) if (f >= -g) if (f <= g) {
      const M = 1 / u;
      d *= M, f *= M, p = d * (d + a * f + 2 * o) + f * (a * d + f + 2 * c) + l;
    } else f = s, d = Math.max(0, -(a * f + o)), p = -d * d + f * (f + 2 * c) + l;
    else f = -s, d = Math.max(0, -(a * f + o)), p = -d * d + f * (f + 2 * c) + l;
    else f <= -g ? (d = Math.max(0, -(-a * s + o)), f = d > 0 ? -s : Math.min(Math.max(-s, -c), s), p = -d * d + f * (f + 2 * c) + l) : f <= g ? (d = 0, f = Math.min(Math.max(-s, -c), s), p = f * (f + 2 * c) + l) : (d = Math.max(0, -(a * s + o)), f = d > 0 ? s : Math.min(Math.max(-s, -c), s), p = -d * d + f * (f + 2 * c) + l);
    else f = a > 0 ? -s : s, d = Math.max(0, -(a * f + o)), p = -d * d + f * (f + 2 * c) + l;
    return n && n.copy(this.origin).addScaledVector(this.direction, d), r && r.copy(Dr).addScaledVector(ki, f), p;
  }
  intersectSphere(t, e) {
    Je.subVectors(t.center, this.origin);
    const n = Je.dot(this.direction), r = Je.dot(Je) - n * n, s = t.radius * t.radius;
    if (r > s) return null;
    const a = Math.sqrt(s - r), o = n - a, c = n + a;
    return c < 0 ? null : o < 0 ? this.at(c, e) : this.at(o, e);
  }
  intersectsSphere(t) {
    return t.radius < 0 ? false : this.distanceSqToPoint(t.center) <= t.radius * t.radius;
  }
  distanceToPlane(t) {
    const e = t.normal.dot(this.direction);
    if (e === 0) return t.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(t.normal) + t.constant) / e;
    return n >= 0 ? n : null;
  }
  intersectPlane(t, e) {
    const n = this.distanceToPlane(t);
    return n === null ? null : this.at(n, e);
  }
  intersectsPlane(t) {
    const e = t.distanceToPoint(this.origin);
    return e === 0 || t.normal.dot(this.direction) * e < 0;
  }
  intersectBox(t, e) {
    let n, r, s, a, o, c;
    const l = 1 / this.direction.x, u = 1 / this.direction.y, d = 1 / this.direction.z, f = this.origin;
    return l >= 0 ? (n = (t.min.x - f.x) * l, r = (t.max.x - f.x) * l) : (n = (t.max.x - f.x) * l, r = (t.min.x - f.x) * l), u >= 0 ? (s = (t.min.y - f.y) * u, a = (t.max.y - f.y) * u) : (s = (t.max.y - f.y) * u, a = (t.min.y - f.y) * u), n > a || s > r || ((s > n || isNaN(n)) && (n = s), (a < r || isNaN(r)) && (r = a), d >= 0 ? (o = (t.min.z - f.z) * d, c = (t.max.z - f.z) * d) : (o = (t.max.z - f.z) * d, c = (t.min.z - f.z) * d), n > c || o > r) || ((o > n || n !== n) && (n = o), (c < r || r !== r) && (r = c), r < 0) ? null : this.at(n >= 0 ? n : r, e);
  }
  intersectsBox(t) {
    return this.intersectBox(t, Je) !== null;
  }
  intersectTriangle(t, e, n, r, s) {
    Lr.subVectors(e, t), Vi.subVectors(n, t), Ur.crossVectors(Lr, Vi);
    let a = this.direction.dot(Ur), o;
    if (a > 0) {
      if (r) return null;
      o = 1;
    } else if (a < 0) o = -1, a = -a;
    else return null;
    cn.subVectors(this.origin, t);
    const c = o * this.direction.dot(Vi.crossVectors(cn, Vi));
    if (c < 0) return null;
    const l = o * this.direction.dot(Lr.cross(cn));
    if (l < 0 || c + l > a) return null;
    const u = -o * cn.dot(Ur);
    return u < 0 ? null : this.at(u / a, s);
  }
  applyMatrix4(t) {
    return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this;
  }
  equals(t) {
    return t.origin.equals(this.origin) && t.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Qt {
  constructor(t, e, n, r, s, a, o, c, l, u, d, f, p, g, M, m) {
    Qt.prototype.isMatrix4 = true, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], t !== void 0 && this.set(t, e, n, r, s, a, o, c, l, u, d, f, p, g, M, m);
  }
  set(t, e, n, r, s, a, o, c, l, u, d, f, p, g, M, m) {
    const h = this.elements;
    return h[0] = t, h[4] = e, h[8] = n, h[12] = r, h[1] = s, h[5] = a, h[9] = o, h[13] = c, h[2] = l, h[6] = u, h[10] = d, h[14] = f, h[3] = p, h[7] = g, h[11] = M, h[15] = m, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new Qt().fromArray(this.elements);
  }
  copy(t) {
    const e = this.elements, n = t.elements;
    return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this;
  }
  copyPosition(t) {
    const e = this.elements, n = t.elements;
    return e[12] = n[12], e[13] = n[13], e[14] = n[14], this;
  }
  setFromMatrix3(t) {
    const e = t.elements;
    return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), this;
  }
  extractBasis(t, e, n) {
    return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(t, e, n) {
    return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1), this;
  }
  extractRotation(t) {
    const e = this.elements, n = t.elements, r = 1 / Xn.setFromMatrixColumn(t, 0).length(), s = 1 / Xn.setFromMatrixColumn(t, 1).length(), a = 1 / Xn.setFromMatrixColumn(t, 2).length();
    return e[0] = n[0] * r, e[1] = n[1] * r, e[2] = n[2] * r, e[3] = 0, e[4] = n[4] * s, e[5] = n[5] * s, e[6] = n[6] * s, e[7] = 0, e[8] = n[8] * a, e[9] = n[9] * a, e[10] = n[10] * a, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  makeRotationFromEuler(t) {
    const e = this.elements, n = t.x, r = t.y, s = t.z, a = Math.cos(n), o = Math.sin(n), c = Math.cos(r), l = Math.sin(r), u = Math.cos(s), d = Math.sin(s);
    if (t.order === "XYZ") {
      const f = a * u, p = a * d, g = o * u, M = o * d;
      e[0] = c * u, e[4] = -c * d, e[8] = l, e[1] = p + g * l, e[5] = f - M * l, e[9] = -o * c, e[2] = M - f * l, e[6] = g + p * l, e[10] = a * c;
    } else if (t.order === "YXZ") {
      const f = c * u, p = c * d, g = l * u, M = l * d;
      e[0] = f + M * o, e[4] = g * o - p, e[8] = a * l, e[1] = a * d, e[5] = a * u, e[9] = -o, e[2] = p * o - g, e[6] = M + f * o, e[10] = a * c;
    } else if (t.order === "ZXY") {
      const f = c * u, p = c * d, g = l * u, M = l * d;
      e[0] = f - M * o, e[4] = -a * d, e[8] = g + p * o, e[1] = p + g * o, e[5] = a * u, e[9] = M - f * o, e[2] = -a * l, e[6] = o, e[10] = a * c;
    } else if (t.order === "ZYX") {
      const f = a * u, p = a * d, g = o * u, M = o * d;
      e[0] = c * u, e[4] = g * l - p, e[8] = f * l + M, e[1] = c * d, e[5] = M * l + f, e[9] = p * l - g, e[2] = -l, e[6] = o * c, e[10] = a * c;
    } else if (t.order === "YZX") {
      const f = a * c, p = a * l, g = o * c, M = o * l;
      e[0] = c * u, e[4] = M - f * d, e[8] = g * d + p, e[1] = d, e[5] = a * u, e[9] = -o * u, e[2] = -l * u, e[6] = p * d + g, e[10] = f - M * d;
    } else if (t.order === "XZY") {
      const f = a * c, p = a * l, g = o * c, M = o * l;
      e[0] = c * u, e[4] = -d, e[8] = l * u, e[1] = f * d + M, e[5] = a * u, e[9] = p * d - g, e[2] = g * d - p, e[6] = o * u, e[10] = M * d + f;
    }
    return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  makeRotationFromQuaternion(t) {
    return this.compose(bc, t, Ac);
  }
  lookAt(t, e, n) {
    const r = this.elements;
    return De.subVectors(t, e), De.lengthSq() === 0 && (De.z = 1), De.normalize(), hn.crossVectors(n, De), hn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? De.x += 1e-4 : De.z += 1e-4, De.normalize(), hn.crossVectors(n, De)), hn.normalize(), Gi.crossVectors(De, hn), r[0] = hn.x, r[4] = Gi.x, r[8] = De.x, r[1] = hn.y, r[5] = Gi.y, r[9] = De.y, r[2] = hn.z, r[6] = Gi.z, r[10] = De.z, this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const n = t.elements, r = e.elements, s = this.elements, a = n[0], o = n[4], c = n[8], l = n[12], u = n[1], d = n[5], f = n[9], p = n[13], g = n[2], M = n[6], m = n[10], h = n[14], w = n[3], T = n[7], E = n[11], C = n[15], A = r[0], P = r[4], F = r[8], S = r[12], x = r[1], D = r[5], z = r[9], V = r[13], X = r[2], K = r[6], W = r[10], et = r[14], H = r[3], st = r[7], ct = r[11], Et = r[15];
    return s[0] = a * A + o * x + c * X + l * H, s[4] = a * P + o * D + c * K + l * st, s[8] = a * F + o * z + c * W + l * ct, s[12] = a * S + o * V + c * et + l * Et, s[1] = u * A + d * x + f * X + p * H, s[5] = u * P + d * D + f * K + p * st, s[9] = u * F + d * z + f * W + p * ct, s[13] = u * S + d * V + f * et + p * Et, s[2] = g * A + M * x + m * X + h * H, s[6] = g * P + M * D + m * K + h * st, s[10] = g * F + M * z + m * W + h * ct, s[14] = g * S + M * V + m * et + h * Et, s[3] = w * A + T * x + E * X + C * H, s[7] = w * P + T * D + E * K + C * st, s[11] = w * F + T * z + E * W + C * ct, s[15] = w * S + T * V + E * et + C * Et, this;
  }
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this;
  }
  determinant() {
    const t = this.elements, e = t[0], n = t[4], r = t[8], s = t[12], a = t[1], o = t[5], c = t[9], l = t[13], u = t[2], d = t[6], f = t[10], p = t[14], g = t[3], M = t[7], m = t[11], h = t[15];
    return g * (+s * c * d - r * l * d - s * o * f + n * l * f + r * o * p - n * c * p) + M * (+e * c * p - e * l * f + s * a * f - r * a * p + r * l * u - s * c * u) + m * (+e * l * d - e * o * p - s * a * d + n * a * p + s * o * u - n * l * u) + h * (-r * o * u - e * c * d + e * o * f + r * a * d - n * a * f + n * c * u);
  }
  transpose() {
    const t = this.elements;
    let e;
    return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this;
  }
  setPosition(t, e, n) {
    const r = this.elements;
    return t.isVector3 ? (r[12] = t.x, r[13] = t.y, r[14] = t.z) : (r[12] = t, r[13] = e, r[14] = n), this;
  }
  invert() {
    const t = this.elements, e = t[0], n = t[1], r = t[2], s = t[3], a = t[4], o = t[5], c = t[6], l = t[7], u = t[8], d = t[9], f = t[10], p = t[11], g = t[12], M = t[13], m = t[14], h = t[15], w = d * m * l - M * f * l + M * c * p - o * m * p - d * c * h + o * f * h, T = g * f * l - u * m * l - g * c * p + a * m * p + u * c * h - a * f * h, E = u * M * l - g * d * l + g * o * p - a * M * p - u * o * h + a * d * h, C = g * d * c - u * M * c - g * o * f + a * M * f + u * o * m - a * d * m, A = e * w + n * T + r * E + s * C;
    if (A === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const P = 1 / A;
    return t[0] = w * P, t[1] = (M * f * s - d * m * s - M * r * p + n * m * p + d * r * h - n * f * h) * P, t[2] = (o * m * s - M * c * s + M * r * l - n * m * l - o * r * h + n * c * h) * P, t[3] = (d * c * s - o * f * s - d * r * l + n * f * l + o * r * p - n * c * p) * P, t[4] = T * P, t[5] = (u * m * s - g * f * s + g * r * p - e * m * p - u * r * h + e * f * h) * P, t[6] = (g * c * s - a * m * s - g * r * l + e * m * l + a * r * h - e * c * h) * P, t[7] = (a * f * s - u * c * s + u * r * l - e * f * l - a * r * p + e * c * p) * P, t[8] = E * P, t[9] = (g * d * s - u * M * s - g * n * p + e * M * p + u * n * h - e * d * h) * P, t[10] = (a * M * s - g * o * s + g * n * l - e * M * l - a * n * h + e * o * h) * P, t[11] = (u * o * s - a * d * s - u * n * l + e * d * l + a * n * p - e * o * p) * P, t[12] = C * P, t[13] = (u * M * r - g * d * r + g * n * f - e * M * f - u * n * m + e * d * m) * P, t[14] = (g * o * r - a * M * r - g * n * c + e * M * c + a * n * m - e * o * m) * P, t[15] = (a * d * r - u * o * r + u * n * c - e * d * c - a * n * f + e * o * f) * P, this;
  }
  scale(t) {
    const e = this.elements, n = t.x, r = t.y, s = t.z;
    return e[0] *= n, e[4] *= r, e[8] *= s, e[1] *= n, e[5] *= r, e[9] *= s, e[2] *= n, e[6] *= r, e[10] *= s, e[3] *= n, e[7] *= r, e[11] *= s, this;
  }
  getMaxScaleOnAxis() {
    const t = this.elements, e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], r = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
    return Math.sqrt(Math.max(e, n, r));
  }
  makeTranslation(t, e, n) {
    return t.isVector3 ? this.set(1, 0, 0, t.x, 0, 1, 0, t.y, 0, 0, 1, t.z, 0, 0, 0, 1) : this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this;
  }
  makeRotationX(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(t, e) {
    const n = Math.cos(e), r = Math.sin(e), s = 1 - n, a = t.x, o = t.y, c = t.z, l = s * a, u = s * o;
    return this.set(l * a + n, l * o - r * c, l * c + r * o, 0, l * o + r * c, u * o + n, u * c - r * a, 0, l * c - r * o, u * c + r * a, s * c * c + n, 0, 0, 0, 0, 1), this;
  }
  makeScale(t, e, n) {
    return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(t, e, n, r, s, a) {
    return this.set(1, n, s, 0, t, 1, a, 0, e, r, 1, 0, 0, 0, 0, 1), this;
  }
  compose(t, e, n) {
    const r = this.elements, s = e._x, a = e._y, o = e._z, c = e._w, l = s + s, u = a + a, d = o + o, f = s * l, p = s * u, g = s * d, M = a * u, m = a * d, h = o * d, w = c * l, T = c * u, E = c * d, C = n.x, A = n.y, P = n.z;
    return r[0] = (1 - (M + h)) * C, r[1] = (p + E) * C, r[2] = (g - T) * C, r[3] = 0, r[4] = (p - E) * A, r[5] = (1 - (f + h)) * A, r[6] = (m + w) * A, r[7] = 0, r[8] = (g + T) * P, r[9] = (m - w) * P, r[10] = (1 - (f + M)) * P, r[11] = 0, r[12] = t.x, r[13] = t.y, r[14] = t.z, r[15] = 1, this;
  }
  decompose(t, e, n) {
    const r = this.elements;
    let s = Xn.set(r[0], r[1], r[2]).length();
    const a = Xn.set(r[4], r[5], r[6]).length(), o = Xn.set(r[8], r[9], r[10]).length();
    this.determinant() < 0 && (s = -s), t.x = r[12], t.y = r[13], t.z = r[14], ze.copy(this);
    const l = 1 / s, u = 1 / a, d = 1 / o;
    return ze.elements[0] *= l, ze.elements[1] *= l, ze.elements[2] *= l, ze.elements[4] *= u, ze.elements[5] *= u, ze.elements[6] *= u, ze.elements[8] *= d, ze.elements[9] *= d, ze.elements[10] *= d, e.setFromRotationMatrix(ze), n.x = s, n.y = a, n.z = o, this;
  }
  makePerspective(t, e, n, r, s, a, o = Ke, c = false) {
    const l = this.elements, u = 2 * s / (e - t), d = 2 * s / (n - r), f = (e + t) / (e - t), p = (n + r) / (n - r);
    let g, M;
    if (c) g = s / (a - s), M = a * s / (a - s);
    else if (o === Ke) g = -(a + s) / (a - s), M = -2 * a * s / (a - s);
    else if (o === _r) g = -a / (a - s), M = -a * s / (a - s);
    else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return l[0] = u, l[4] = 0, l[8] = f, l[12] = 0, l[1] = 0, l[5] = d, l[9] = p, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = g, l[14] = M, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(t, e, n, r, s, a, o = Ke, c = false) {
    const l = this.elements, u = 2 / (e - t), d = 2 / (n - r), f = -(e + t) / (e - t), p = -(n + r) / (n - r);
    let g, M;
    if (c) g = 1 / (a - s), M = a / (a - s);
    else if (o === Ke) g = -2 / (a - s), M = -(a + s) / (a - s);
    else if (o === _r) g = -1 / (a - s), M = -s / (a - s);
    else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return l[0] = u, l[4] = 0, l[8] = 0, l[12] = f, l[1] = 0, l[5] = d, l[9] = 0, l[13] = p, l[2] = 0, l[6] = 0, l[10] = g, l[14] = M, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  equals(t) {
    const e = this.elements, n = t.elements;
    for (let r = 0; r < 16; r++) if (e[r] !== n[r]) return false;
    return true;
  }
  fromArray(t, e = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = t[n + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const n = this.elements;
    return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t[e + 9] = n[9], t[e + 10] = n[10], t[e + 11] = n[11], t[e + 12] = n[12], t[e + 13] = n[13], t[e + 14] = n[14], t[e + 15] = n[15], t;
  }
}
const Xn = new U(), ze = new Qt(), bc = new U(0, 0, 0), Ac = new U(1, 1, 1), hn = new U(), Gi = new U(), De = new U(), Ca = new Qt(), Pa = new In();
class Ge {
  constructor(t = 0, e = 0, n = 0, r = Ge.DEFAULT_ORDER) {
    this.isEuler = true, this._x = t, this._y = e, this._z = n, this._order = r;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(t) {
    this._order = t, this._onChangeCallback();
  }
  set(t, e, n, r = this._order) {
    return this._x = t, this._y = e, this._z = n, this._order = r, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(t) {
    return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t, e = this._order, n = true) {
    const r = t.elements, s = r[0], a = r[4], o = r[8], c = r[1], l = r[5], u = r[9], d = r[2], f = r[6], p = r[10];
    switch (e) {
      case "XYZ":
        this._y = Math.asin(Ot(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-u, p), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(f, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Ot(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(o, p), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-d, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Ot(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(-d, p), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(c, s));
        break;
      case "ZYX":
        this._y = Math.asin(-Ot(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._x = Math.atan2(f, p), this._z = Math.atan2(c, s)) : (this._x = 0, this._z = Math.atan2(-a, l));
        break;
      case "YZX":
        this._z = Math.asin(Ot(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-u, l), this._y = Math.atan2(-d, s)) : (this._x = 0, this._y = Math.atan2(o, p));
        break;
      case "XZY":
        this._z = Math.asin(-Ot(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(f, l), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-u, p), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
    }
    return this._order = e, n === true && this._onChangeCallback(), this;
  }
  setFromQuaternion(t, e, n) {
    return Ca.makeRotationFromQuaternion(t), this.setFromRotationMatrix(Ca, e, n);
  }
  setFromVector3(t, e = this._order) {
    return this.set(t.x, t.y, t.z, e);
  }
  reorder(t) {
    return Pa.setFromEuler(this), this.setFromQuaternion(Pa, t);
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
  }
  fromArray(t) {
    return this._x = t[0], this._y = t[1], this._z = t[2], t[3] !== void 0 && (this._order = t[3]), this._onChangeCallback(), this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t;
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
Ge.DEFAULT_ORDER = "XYZ";
class sa {
  constructor() {
    this.mask = 1;
  }
  set(t) {
    this.mask = (1 << t | 0) >>> 0;
  }
  enable(t) {
    this.mask |= 1 << t | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(t) {
    this.mask ^= 1 << t | 0;
  }
  disable(t) {
    this.mask &= ~(1 << t | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(t) {
    return (this.mask & t.mask) !== 0;
  }
  isEnabled(t) {
    return (this.mask & (1 << t | 0)) !== 0;
  }
}
let wc = 0;
const Da = new U(), Yn = new In(), Qe = new Qt(), Wi = new U(), xi = new U(), Rc = new U(), Cc = new In(), La = new U(1, 0, 0), Ua = new U(0, 1, 0), Ia = new U(0, 0, 1), Na = { type: "added" }, Pc = { type: "removed" }, qn = { type: "childadded", child: null }, Ir = { type: "childremoved", child: null };
class me extends Fn {
  constructor() {
    super(), this.isObject3D = true, Object.defineProperty(this, "id", { value: wc++ }), this.uuid = fi(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = me.DEFAULT_UP.clone();
    const t = new U(), e = new Ge(), n = new In(), r = new U(1, 1, 1);
    function s() {
      n.setFromEuler(e, false);
    }
    function a() {
      e.setFromQuaternion(n, void 0, false);
    }
    e._onChange(s), n._onChange(a), Object.defineProperties(this, { position: { configurable: true, enumerable: true, value: t }, rotation: { configurable: true, enumerable: true, value: e }, quaternion: { configurable: true, enumerable: true, value: n }, scale: { configurable: true, enumerable: true, value: r }, modelViewMatrix: { value: new Qt() }, normalMatrix: { value: new It() } }), this.matrix = new Qt(), this.matrixWorld = new Qt(), this.matrixAutoUpdate = me.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.layers = new sa(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(t) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(t) {
    return this.quaternion.premultiply(t), this;
  }
  setRotationFromAxisAngle(t, e) {
    this.quaternion.setFromAxisAngle(t, e);
  }
  setRotationFromEuler(t) {
    this.quaternion.setFromEuler(t, true);
  }
  setRotationFromMatrix(t) {
    this.quaternion.setFromRotationMatrix(t);
  }
  setRotationFromQuaternion(t) {
    this.quaternion.copy(t);
  }
  rotateOnAxis(t, e) {
    return Yn.setFromAxisAngle(t, e), this.quaternion.multiply(Yn), this;
  }
  rotateOnWorldAxis(t, e) {
    return Yn.setFromAxisAngle(t, e), this.quaternion.premultiply(Yn), this;
  }
  rotateX(t) {
    return this.rotateOnAxis(La, t);
  }
  rotateY(t) {
    return this.rotateOnAxis(Ua, t);
  }
  rotateZ(t) {
    return this.rotateOnAxis(Ia, t);
  }
  translateOnAxis(t, e) {
    return Da.copy(t).applyQuaternion(this.quaternion), this.position.add(Da.multiplyScalar(e)), this;
  }
  translateX(t) {
    return this.translateOnAxis(La, t);
  }
  translateY(t) {
    return this.translateOnAxis(Ua, t);
  }
  translateZ(t) {
    return this.translateOnAxis(Ia, t);
  }
  localToWorld(t) {
    return this.updateWorldMatrix(true, false), t.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(t) {
    return this.updateWorldMatrix(true, false), t.applyMatrix4(Qe.copy(this.matrixWorld).invert());
  }
  lookAt(t, e, n) {
    t.isVector3 ? Wi.copy(t) : Wi.set(t, e, n);
    const r = this.parent;
    this.updateWorldMatrix(true, false), xi.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Qe.lookAt(xi, Wi, this.up) : Qe.lookAt(Wi, xi, this.up), this.quaternion.setFromRotationMatrix(Qe), r && (Qe.extractRotation(r.matrixWorld), Yn.setFromRotationMatrix(Qe), this.quaternion.premultiply(Yn.invert()));
  }
  add(t) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
      return this;
    }
    return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.removeFromParent(), t.parent = this, this.children.push(t), t.dispatchEvent(Na), qn.child = t, this.dispatchEvent(qn), qn.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this);
  }
  remove(t) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const e = this.children.indexOf(t);
    return e !== -1 && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(Pc), Ir.child = t, this.dispatchEvent(Ir), Ir.child = null), this;
  }
  removeFromParent() {
    const t = this.parent;
    return t !== null && t.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(t) {
    return this.updateWorldMatrix(true, false), Qe.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(true, false), Qe.multiply(t.parent.matrixWorld)), t.applyMatrix4(Qe), t.removeFromParent(), t.parent = this, this.children.push(t), t.updateWorldMatrix(false, true), t.dispatchEvent(Na), qn.child = t, this.dispatchEvent(qn), qn.child = null, this;
  }
  getObjectById(t) {
    return this.getObjectByProperty("id", t);
  }
  getObjectByName(t) {
    return this.getObjectByProperty("name", t);
  }
  getObjectByProperty(t, e) {
    if (this[t] === e) return this;
    for (let n = 0, r = this.children.length; n < r; n++) {
      const a = this.children[n].getObjectByProperty(t, e);
      if (a !== void 0) return a;
    }
  }
  getObjectsByProperty(t, e, n = []) {
    this[t] === e && n.push(this);
    const r = this.children;
    for (let s = 0, a = r.length; s < a; s++) r[s].getObjectsByProperty(t, e, n);
    return n;
  }
  getWorldPosition(t) {
    return this.updateWorldMatrix(true, false), t.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(t) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(xi, t, Rc), t;
  }
  getWorldScale(t) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(xi, Cc, t), t;
  }
  getWorldDirection(t) {
    this.updateWorldMatrix(true, false);
    const e = this.matrixWorld.elements;
    return t.set(e[8], e[9], e[10]).normalize();
  }
  raycast() {
  }
  traverse(t) {
    t(this);
    const e = this.children;
    for (let n = 0, r = e.length; n < r; n++) e[n].traverse(t);
  }
  traverseVisible(t) {
    if (this.visible === false) return;
    t(this);
    const e = this.children;
    for (let n = 0, r = e.length; n < r; n++) e[n].traverseVisible(t);
  }
  traverseAncestors(t) {
    const e = this.parent;
    e !== null && (t(e), e.traverseAncestors(t));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = true;
  }
  updateMatrixWorld(t) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = false, t = true);
    const e = this.children;
    for (let n = 0, r = e.length; n < r; n++) e[n].updateMatrixWorld(t);
  }
  updateWorldMatrix(t, e) {
    const n = this.parent;
    if (t === true && n !== null && n.updateWorldMatrix(true, false), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), e === true) {
      const r = this.children;
      for (let s = 0, a = r.length; s < a; s++) r[s].updateWorldMatrix(false, true);
    }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string", n = {};
    e && (t = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, n.metadata = { version: 4.7, type: "Object", generator: "Object3D.toJSON" });
    const r = {};
    r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.castShadow === true && (r.castShadow = true), this.receiveShadow === true && (r.receiveShadow = true), this.visible === false && (r.visible = false), this.frustumCulled === false && (r.frustumCulled = false), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.matrixAutoUpdate === false && (r.matrixAutoUpdate = false), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (r.type = "BatchedMesh", r.perObjectFrustumCulled = this.perObjectFrustumCulled, r.sortObjects = this.sortObjects, r.drawRanges = this._drawRanges, r.reservedRanges = this._reservedRanges, r.geometryInfo = this._geometryInfo.map((o) => ({ ...o, boundingBox: o.boundingBox ? o.boundingBox.toJSON() : void 0, boundingSphere: o.boundingSphere ? o.boundingSphere.toJSON() : void 0 })), r.instanceInfo = this._instanceInfo.map((o) => ({ ...o })), r.availableInstanceIds = this._availableInstanceIds.slice(), r.availableGeometryIds = this._availableGeometryIds.slice(), r.nextIndexStart = this._nextIndexStart, r.nextVertexStart = this._nextVertexStart, r.geometryCount = this._geometryCount, r.maxInstanceCount = this._maxInstanceCount, r.maxVertexCount = this._maxVertexCount, r.maxIndexCount = this._maxIndexCount, r.geometryInitialized = this._geometryInitialized, r.matricesTexture = this._matricesTexture.toJSON(t), r.indirectTexture = this._indirectTexture.toJSON(t), this._colorsTexture !== null && (r.colorsTexture = this._colorsTexture.toJSON(t)), this.boundingSphere !== null && (r.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (r.boundingBox = this.boundingBox.toJSON()));
    function s(o, c) {
      return o[c.uuid] === void 0 && (o[c.uuid] = c.toJSON(t)), c.uuid;
    }
    if (this.isScene) this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true && (r.environment = this.environment.toJSON(t).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = s(t.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const c = o.shapes;
        if (Array.isArray(c)) for (let l = 0, u = c.length; l < u; l++) {
          const d = c[l];
          s(t.shapes, d);
        }
        else s(t.shapes, c);
      }
    }
    if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(t.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
      const o = [];
      for (let c = 0, l = this.material.length; c < l; c++) o.push(s(t.materials, this.material[c]));
      r.material = o;
    } else r.material = s(t.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let o = 0; o < this.children.length; o++) r.children.push(this.children[o].toJSON(t).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const c = this.animations[o];
        r.animations.push(s(t.animations, c));
      }
    }
    if (e) {
      const o = a(t.geometries), c = a(t.materials), l = a(t.textures), u = a(t.images), d = a(t.shapes), f = a(t.skeletons), p = a(t.animations), g = a(t.nodes);
      o.length > 0 && (n.geometries = o), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), u.length > 0 && (n.images = u), d.length > 0 && (n.shapes = d), f.length > 0 && (n.skeletons = f), p.length > 0 && (n.animations = p), g.length > 0 && (n.nodes = g);
    }
    return n.object = r, n;
    function a(o) {
      const c = [];
      for (const l in o) {
        const u = o[l];
        delete u.metadata, c.push(u);
      }
      return c;
    }
  }
  clone(t) {
    return new this.constructor().copy(this, t);
  }
  copy(t, e = true) {
    if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.animations = t.animations.slice(), this.userData = JSON.parse(JSON.stringify(t.userData)), e === true) for (let n = 0; n < t.children.length; n++) {
      const r = t.children[n];
      this.add(r.clone());
    }
    return this;
  }
}
me.DEFAULT_UP = new U(0, 1, 0);
me.DEFAULT_MATRIX_AUTO_UPDATE = true;
me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
const He = new U(), tn = new U(), Nr = new U(), en = new U(), Kn = new U(), jn = new U(), Fa = new U(), Fr = new U(), Or = new U(), Br = new U(), zr = new jt(), Hr = new jt(), kr = new jt();
class ke {
  constructor(t = new U(), e = new U(), n = new U()) {
    this.a = t, this.b = e, this.c = n;
  }
  static getNormal(t, e, n, r) {
    r.subVectors(n, e), He.subVectors(t, e), r.cross(He);
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  static getBarycoord(t, e, n, r, s) {
    He.subVectors(r, e), tn.subVectors(n, e), Nr.subVectors(t, e);
    const a = He.dot(He), o = He.dot(tn), c = He.dot(Nr), l = tn.dot(tn), u = tn.dot(Nr), d = a * l - o * o;
    if (d === 0) return s.set(0, 0, 0), null;
    const f = 1 / d, p = (l * c - o * u) * f, g = (a * u - o * c) * f;
    return s.set(1 - p - g, g, p);
  }
  static containsPoint(t, e, n, r) {
    return this.getBarycoord(t, e, n, r, en) === null ? false : en.x >= 0 && en.y >= 0 && en.x + en.y <= 1;
  }
  static getInterpolation(t, e, n, r, s, a, o, c) {
    return this.getBarycoord(t, e, n, r, en) === null ? (c.x = 0, c.y = 0, "z" in c && (c.z = 0), "w" in c && (c.w = 0), null) : (c.setScalar(0), c.addScaledVector(s, en.x), c.addScaledVector(a, en.y), c.addScaledVector(o, en.z), c);
  }
  static getInterpolatedAttribute(t, e, n, r, s, a) {
    return zr.setScalar(0), Hr.setScalar(0), kr.setScalar(0), zr.fromBufferAttribute(t, e), Hr.fromBufferAttribute(t, n), kr.fromBufferAttribute(t, r), a.setScalar(0), a.addScaledVector(zr, s.x), a.addScaledVector(Hr, s.y), a.addScaledVector(kr, s.z), a;
  }
  static isFrontFacing(t, e, n, r) {
    return He.subVectors(n, e), tn.subVectors(t, e), He.cross(tn).dot(r) < 0;
  }
  set(t, e, n) {
    return this.a.copy(t), this.b.copy(e), this.c.copy(n), this;
  }
  setFromPointsAndIndices(t, e, n, r) {
    return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[r]), this;
  }
  setFromAttributeAndIndices(t, e, n, r) {
    return this.a.fromBufferAttribute(t, e), this.b.fromBufferAttribute(t, n), this.c.fromBufferAttribute(t, r), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
  }
  getArea() {
    return He.subVectors(this.c, this.b), tn.subVectors(this.a, this.b), He.cross(tn).length() * 0.5;
  }
  getMidpoint(t) {
    return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(t) {
    return ke.getNormal(this.a, this.b, this.c, t);
  }
  getPlane(t) {
    return t.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(t, e) {
    return ke.getBarycoord(t, this.a, this.b, this.c, e);
  }
  getInterpolation(t, e, n, r, s) {
    return ke.getInterpolation(t, this.a, this.b, this.c, e, n, r, s);
  }
  containsPoint(t) {
    return ke.containsPoint(t, this.a, this.b, this.c);
  }
  isFrontFacing(t) {
    return ke.isFrontFacing(this.a, this.b, this.c, t);
  }
  intersectsBox(t) {
    return t.intersectsTriangle(this);
  }
  closestPointToPoint(t, e) {
    const n = this.a, r = this.b, s = this.c;
    let a, o;
    Kn.subVectors(r, n), jn.subVectors(s, n), Fr.subVectors(t, n);
    const c = Kn.dot(Fr), l = jn.dot(Fr);
    if (c <= 0 && l <= 0) return e.copy(n);
    Or.subVectors(t, r);
    const u = Kn.dot(Or), d = jn.dot(Or);
    if (u >= 0 && d <= u) return e.copy(r);
    const f = c * d - u * l;
    if (f <= 0 && c >= 0 && u <= 0) return a = c / (c - u), e.copy(n).addScaledVector(Kn, a);
    Br.subVectors(t, s);
    const p = Kn.dot(Br), g = jn.dot(Br);
    if (g >= 0 && p <= g) return e.copy(s);
    const M = p * l - c * g;
    if (M <= 0 && l >= 0 && g <= 0) return o = l / (l - g), e.copy(n).addScaledVector(jn, o);
    const m = u * g - p * d;
    if (m <= 0 && d - u >= 0 && p - g >= 0) return Fa.subVectors(s, r), o = (d - u) / (d - u + (p - g)), e.copy(r).addScaledVector(Fa, o);
    const h = 1 / (m + M + f);
    return a = M * h, o = f * h, e.copy(n).addScaledVector(Kn, a).addScaledVector(jn, o);
  }
  equals(t) {
    return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
  }
}
const Ho = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, un = { h: 0, s: 0, l: 0 }, Xi = { h: 0, s: 0, l: 0 };
function Vr(i, t, e) {
  return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? i + (t - i) * 6 * e : e < 1 / 2 ? t : e < 2 / 3 ? i + (t - i) * 6 * (2 / 3 - e) : i;
}
class Ht {
  constructor(t, e, n) {
    return this.isColor = true, this.r = 1, this.g = 1, this.b = 1, this.set(t, e, n);
  }
  set(t, e, n) {
    if (e === void 0 && n === void 0) {
      const r = t;
      r && r.isColor ? this.copy(r) : typeof r == "number" ? this.setHex(r) : typeof r == "string" && this.setStyle(r);
    } else this.setRGB(t, e, n);
    return this;
  }
  setScalar(t) {
    return this.r = t, this.g = t, this.b = t, this;
  }
  setHex(t, e = be) {
    return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (t & 255) / 255, Gt.colorSpaceToWorking(this, e), this;
  }
  setRGB(t, e, n, r = Gt.workingColorSpace) {
    return this.r = t, this.g = e, this.b = n, Gt.colorSpaceToWorking(this, r), this;
  }
  setHSL(t, e, n, r = Gt.workingColorSpace) {
    if (t = na(t, 1), e = Ot(e, 0, 1), n = Ot(n, 0, 1), e === 0) this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + e) : n + e - n * e, a = 2 * n - s;
      this.r = Vr(a, s, t + 1 / 3), this.g = Vr(a, s, t), this.b = Vr(a, s, t - 1 / 3);
    }
    return Gt.colorSpaceToWorking(this, r), this;
  }
  setStyle(t, e = be) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.");
    }
    let r;
    if (r = /^(\w+)\(([^\)]*)\)/.exec(t)) {
      let s;
      const a = r[1], o = r[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(s[4]), this.setRGB(Math.min(255, parseInt(s[1], 10)) / 255, Math.min(255, parseInt(s[2], 10)) / 255, Math.min(255, parseInt(s[3], 10)) / 255, e);
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(s[4]), this.setRGB(Math.min(100, parseInt(s[1], 10)) / 100, Math.min(100, parseInt(s[2], 10)) / 100, Math.min(100, parseInt(s[3], 10)) / 100, e);
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(s[4]), this.setHSL(parseFloat(s[1]) / 360, parseFloat(s[2]) / 100, parseFloat(s[3]) / 100, e);
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + t);
      }
    } else if (r = /^\#([A-Fa-f\d]+)$/.exec(t)) {
      const s = r[1], a = s.length;
      if (a === 3) return this.setRGB(parseInt(s.charAt(0), 16) / 15, parseInt(s.charAt(1), 16) / 15, parseInt(s.charAt(2), 16) / 15, e);
      if (a === 6) return this.setHex(parseInt(s, 16), e);
      console.warn("THREE.Color: Invalid hex color " + t);
    } else if (t && t.length > 0) return this.setColorName(t, e);
    return this;
  }
  setColorName(t, e = be) {
    const n = Ho[t.toLowerCase()];
    return n !== void 0 ? this.setHex(n, e) : console.warn("THREE.Color: Unknown color " + t), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(t) {
    return this.r = t.r, this.g = t.g, this.b = t.b, this;
  }
  copySRGBToLinear(t) {
    return this.r = sn(t.r), this.g = sn(t.g), this.b = sn(t.b), this;
  }
  copyLinearToSRGB(t) {
    return this.r = ai(t.r), this.g = ai(t.g), this.b = ai(t.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(t = be) {
    return Gt.workingToColorSpace(ve.copy(this), t), Math.round(Ot(ve.r * 255, 0, 255)) * 65536 + Math.round(Ot(ve.g * 255, 0, 255)) * 256 + Math.round(Ot(ve.b * 255, 0, 255));
  }
  getHexString(t = be) {
    return ("000000" + this.getHex(t).toString(16)).slice(-6);
  }
  getHSL(t, e = Gt.workingColorSpace) {
    Gt.workingToColorSpace(ve.copy(this), e);
    const n = ve.r, r = ve.g, s = ve.b, a = Math.max(n, r, s), o = Math.min(n, r, s);
    let c, l;
    const u = (o + a) / 2;
    if (o === a) c = 0, l = 0;
    else {
      const d = a - o;
      switch (l = u <= 0.5 ? d / (a + o) : d / (2 - a - o), a) {
        case n:
          c = (r - s) / d + (r < s ? 6 : 0);
          break;
        case r:
          c = (s - n) / d + 2;
          break;
        case s:
          c = (n - r) / d + 4;
          break;
      }
      c /= 6;
    }
    return t.h = c, t.s = l, t.l = u, t;
  }
  getRGB(t, e = Gt.workingColorSpace) {
    return Gt.workingToColorSpace(ve.copy(this), e), t.r = ve.r, t.g = ve.g, t.b = ve.b, t;
  }
  getStyle(t = be) {
    Gt.workingToColorSpace(ve.copy(this), t);
    const e = ve.r, n = ve.g, r = ve.b;
    return t !== be ? `color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(e * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`;
  }
  offsetHSL(t, e, n) {
    return this.getHSL(un), this.setHSL(un.h + t, un.s + e, un.l + n);
  }
  add(t) {
    return this.r += t.r, this.g += t.g, this.b += t.b, this;
  }
  addColors(t, e) {
    return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this;
  }
  addScalar(t) {
    return this.r += t, this.g += t, this.b += t, this;
  }
  sub(t) {
    return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this;
  }
  multiply(t) {
    return this.r *= t.r, this.g *= t.g, this.b *= t.b, this;
  }
  multiplyScalar(t) {
    return this.r *= t, this.g *= t, this.b *= t, this;
  }
  lerp(t, e) {
    return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this;
  }
  lerpColors(t, e, n) {
    return this.r = t.r + (e.r - t.r) * n, this.g = t.g + (e.g - t.g) * n, this.b = t.b + (e.b - t.b) * n, this;
  }
  lerpHSL(t, e) {
    this.getHSL(un), t.getHSL(Xi);
    const n = Ai(un.h, Xi.h, e), r = Ai(un.s, Xi.s, e), s = Ai(un.l, Xi.l, e);
    return this.setHSL(n, r, s), this;
  }
  setFromVector3(t) {
    return this.r = t.x, this.g = t.y, this.b = t.z, this;
  }
  applyMatrix3(t) {
    const e = this.r, n = this.g, r = this.b, s = t.elements;
    return this.r = s[0] * e + s[3] * n + s[6] * r, this.g = s[1] * e + s[4] * n + s[7] * r, this.b = s[2] * e + s[5] * n + s[8] * r, this;
  }
  equals(t) {
    return t.r === this.r && t.g === this.g && t.b === this.b;
  }
  fromArray(t, e = 0) {
    return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t;
  }
  fromBufferAttribute(t, e) {
    return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const ve = new Ht();
Ht.NAMES = Ho;
let Dc = 0;
class pi extends Fn {
  constructor() {
    super(), this.isMaterial = true, Object.defineProperty(this, "id", { value: Dc++ }), this.uuid = fi(), this.name = "", this.type = "Material", this.blending = si, this.side = gn, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.alphaHash = false, this.blendSrc = is, this.blendDst = rs, this.blendEquation = Rn, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Ht(0, 0, 0), this.blendAlpha = 0, this.depthFunc = oi, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = Sa, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Hn, this.stencilZFail = Hn, this.stencilZPass = Hn, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.allowOverride = true, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(t) {
    this._alphaTest > 0 != t > 0 && this.version++, this._alphaTest = t;
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(t) {
    if (t !== void 0) for (const e in t) {
      const n = t[e];
      if (n === void 0) {
        console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);
        continue;
      }
      const r = this[e];
      if (r === void 0) {
        console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);
        continue;
      }
      r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[e] = n;
    }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    e && (t = { textures: {}, images: {} });
    const n = { metadata: { version: 4.7, type: "Material", generator: "Material.toJSON" } };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (n.sheenColorMap = this.sheenColorMap.toJSON(t).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(t).uuid), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(t).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== si && (n.blending = this.blending), this.side !== gn && (n.side = this.side), this.vertexColors === true && (n.vertexColors = true), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === true && (n.transparent = true), this.blendSrc !== is && (n.blendSrc = this.blendSrc), this.blendDst !== rs && (n.blendDst = this.blendDst), this.blendEquation !== Rn && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== oi && (n.depthFunc = this.depthFunc), this.depthTest === false && (n.depthTest = this.depthTest), this.depthWrite === false && (n.depthWrite = this.depthWrite), this.colorWrite === false && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== Sa && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Hn && (n.stencilFail = this.stencilFail), this.stencilZFail !== Hn && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== Hn && (n.stencilZPass = this.stencilZPass), this.stencilWrite === true && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === true && (n.polygonOffset = true), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === true && (n.dithering = true), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === true && (n.alphaHash = true), this.alphaToCoverage === true && (n.alphaToCoverage = true), this.premultipliedAlpha === true && (n.premultipliedAlpha = true), this.forceSinglePass === true && (n.forceSinglePass = true), this.wireframe === true && (n.wireframe = true), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === true && (n.flatShading = true), this.visible === false && (n.visible = false), this.toneMapped === false && (n.toneMapped = false), this.fog === false && (n.fog = false), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function r(s) {
      const a = [];
      for (const o in s) {
        const c = s[o];
        delete c.metadata, a.push(c);
      }
      return a;
    }
    if (e) {
      const s = r(t.textures), a = r(t.images);
      s.length > 0 && (n.textures = s), a.length > 0 && (n.images = a);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.name = t.name, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.blendColor.copy(t.blendColor), this.blendAlpha = t.blendAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
    const e = t.clippingPlanes;
    let n = null;
    if (e !== null) {
      const r = e.length;
      n = new Array(r);
      for (let s = 0; s !== r; ++s) n[s] = e[s].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaHash = t.alphaHash, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.forceSinglePass = t.forceSinglePass, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(t) {
    t === true && this.version++;
  }
}
class Mr extends pi {
  constructor(t) {
    super(), this.isMeshBasicMaterial = true, this.type = "MeshBasicMaterial", this.color = new Ht(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Ge(), this.combine = vr, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this;
  }
}
const ce = new U(), Yi = new Pt();
let Lc = 0;
class Ie {
  constructor(t, e, n = false) {
    if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = true, Object.defineProperty(this, "id", { value: Lc++ }), this.name = "", this.array = t, this.itemSize = e, this.count = t !== void 0 ? t.length / e : 0, this.normalized = n, this.usage = Ea, this.updateRanges = [], this.gpuType = qe, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(t) {
    t === true && this.version++;
  }
  setUsage(t) {
    return this.usage = t, this;
  }
  addUpdateRange(t, e) {
    this.updateRanges.push({ start: t, count: e });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(t) {
    return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this.gpuType = t.gpuType, this;
  }
  copyAt(t, e, n) {
    t *= this.itemSize, n *= e.itemSize;
    for (let r = 0, s = this.itemSize; r < s; r++) this.array[t + r] = e.array[n + r];
    return this;
  }
  copyArray(t) {
    return this.array.set(t), this;
  }
  applyMatrix3(t) {
    if (this.itemSize === 2) for (let e = 0, n = this.count; e < n; e++) Yi.fromBufferAttribute(this, e), Yi.applyMatrix3(t), this.setXY(e, Yi.x, Yi.y);
    else if (this.itemSize === 3) for (let e = 0, n = this.count; e < n; e++) ce.fromBufferAttribute(this, e), ce.applyMatrix3(t), this.setXYZ(e, ce.x, ce.y, ce.z);
    return this;
  }
  applyMatrix4(t) {
    for (let e = 0, n = this.count; e < n; e++) ce.fromBufferAttribute(this, e), ce.applyMatrix4(t), this.setXYZ(e, ce.x, ce.y, ce.z);
    return this;
  }
  applyNormalMatrix(t) {
    for (let e = 0, n = this.count; e < n; e++) ce.fromBufferAttribute(this, e), ce.applyNormalMatrix(t), this.setXYZ(e, ce.x, ce.y, ce.z);
    return this;
  }
  transformDirection(t) {
    for (let e = 0, n = this.count; e < n; e++) ce.fromBufferAttribute(this, e), ce.transformDirection(t), this.setXYZ(e, ce.x, ce.y, ce.z);
    return this;
  }
  set(t, e = 0) {
    return this.array.set(t, e), this;
  }
  getComponent(t, e) {
    let n = this.array[t * this.itemSize + e];
    return this.normalized && (n = ei(n, this.array)), n;
  }
  setComponent(t, e, n) {
    return this.normalized && (n = Se(n, this.array)), this.array[t * this.itemSize + e] = n, this;
  }
  getX(t) {
    let e = this.array[t * this.itemSize];
    return this.normalized && (e = ei(e, this.array)), e;
  }
  setX(t, e) {
    return this.normalized && (e = Se(e, this.array)), this.array[t * this.itemSize] = e, this;
  }
  getY(t) {
    let e = this.array[t * this.itemSize + 1];
    return this.normalized && (e = ei(e, this.array)), e;
  }
  setY(t, e) {
    return this.normalized && (e = Se(e, this.array)), this.array[t * this.itemSize + 1] = e, this;
  }
  getZ(t) {
    let e = this.array[t * this.itemSize + 2];
    return this.normalized && (e = ei(e, this.array)), e;
  }
  setZ(t, e) {
    return this.normalized && (e = Se(e, this.array)), this.array[t * this.itemSize + 2] = e, this;
  }
  getW(t) {
    let e = this.array[t * this.itemSize + 3];
    return this.normalized && (e = ei(e, this.array)), e;
  }
  setW(t, e) {
    return this.normalized && (e = Se(e, this.array)), this.array[t * this.itemSize + 3] = e, this;
  }
  setXY(t, e, n) {
    return t *= this.itemSize, this.normalized && (e = Se(e, this.array), n = Se(n, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this;
  }
  setXYZ(t, e, n, r) {
    return t *= this.itemSize, this.normalized && (e = Se(e, this.array), n = Se(n, this.array), r = Se(r, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = r, this;
  }
  setXYZW(t, e, n, r, s) {
    return t *= this.itemSize, this.normalized && (e = Se(e, this.array), n = Se(n, this.array), r = Se(r, this.array), s = Se(s, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = r, this.array[t + 3] = s, this;
  }
  onUpload(t) {
    return this.onUploadCallback = t, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const t = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
    return this.name !== "" && (t.name = this.name), this.usage !== Ea && (t.usage = this.usage), t;
  }
}
class ko extends Ie {
  constructor(t, e, n) {
    super(new Uint16Array(t), e, n);
  }
}
class Vo extends Ie {
  constructor(t, e, n) {
    super(new Uint32Array(t), e, n);
  }
}
class Ln extends Ie {
  constructor(t, e, n) {
    super(new Float32Array(t), e, n);
  }
}
let Uc = 0;
const Oe = new Qt(), Gr = new me(), Zn = new U(), Le = new On(), Mi = new On(), pe = new U();
class an extends Fn {
  constructor() {
    super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", { value: Uc++ }), this.uuid = fi(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(t) {
    return Array.isArray(t) ? this.index = new (Bo(t) ? Vo : ko)(t, 1) : this.index = t, this;
  }
  setIndirect(t) {
    return this.indirect = t, this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(t) {
    return this.attributes[t];
  }
  setAttribute(t, e) {
    return this.attributes[t] = e, this;
  }
  deleteAttribute(t) {
    return delete this.attributes[t], this;
  }
  hasAttribute(t) {
    return this.attributes[t] !== void 0;
  }
  addGroup(t, e, n = 0) {
    this.groups.push({ start: t, count: e, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(t, e) {
    this.drawRange.start = t, this.drawRange.count = e;
  }
  applyMatrix4(t) {
    const e = this.attributes.position;
    e !== void 0 && (e.applyMatrix4(t), e.needsUpdate = true);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new It().getNormalMatrix(t);
      n.applyNormalMatrix(s), n.needsUpdate = true;
    }
    const r = this.attributes.tangent;
    return r !== void 0 && (r.transformDirection(t), r.needsUpdate = true), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(t) {
    return Oe.makeRotationFromQuaternion(t), this.applyMatrix4(Oe), this;
  }
  rotateX(t) {
    return Oe.makeRotationX(t), this.applyMatrix4(Oe), this;
  }
  rotateY(t) {
    return Oe.makeRotationY(t), this.applyMatrix4(Oe), this;
  }
  rotateZ(t) {
    return Oe.makeRotationZ(t), this.applyMatrix4(Oe), this;
  }
  translate(t, e, n) {
    return Oe.makeTranslation(t, e, n), this.applyMatrix4(Oe), this;
  }
  scale(t, e, n) {
    return Oe.makeScale(t, e, n), this.applyMatrix4(Oe), this;
  }
  lookAt(t) {
    return Gr.lookAt(t), Gr.updateMatrix(), this.applyMatrix4(Gr.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Zn).negate(), this.translate(Zn.x, Zn.y, Zn.z), this;
  }
  setFromPoints(t) {
    const e = this.getAttribute("position");
    if (e === void 0) {
      const n = [];
      for (let r = 0, s = t.length; r < s; r++) {
        const a = t[r];
        n.push(a.x, a.y, a.z || 0);
      }
      this.setAttribute("position", new Ln(n, 3));
    } else {
      const n = Math.min(t.length, e.count);
      for (let r = 0; r < n; r++) {
        const s = t[r];
        e.setXYZ(r, s.x, s.y, s.z || 0);
      }
      t.length > e.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), e.needsUpdate = true;
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new On());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new U(-1 / 0, -1 / 0, -1 / 0), new U(1 / 0, 1 / 0, 1 / 0));
      return;
    }
    if (t !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(t), e) for (let n = 0, r = e.length; n < r; n++) {
        const s = e[n];
        Le.setFromBufferAttribute(s), this.morphTargetsRelative ? (pe.addVectors(this.boundingBox.min, Le.min), this.boundingBox.expandByPoint(pe), pe.addVectors(this.boundingBox.max, Le.max), this.boundingBox.expandByPoint(pe)) : (this.boundingBox.expandByPoint(Le.min), this.boundingBox.expandByPoint(Le.max));
      }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Ui());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new U(), 1 / 0);
      return;
    }
    if (t) {
      const n = this.boundingSphere.center;
      if (Le.setFromBufferAttribute(t), e) for (let s = 0, a = e.length; s < a; s++) {
        const o = e[s];
        Mi.setFromBufferAttribute(o), this.morphTargetsRelative ? (pe.addVectors(Le.min, Mi.min), Le.expandByPoint(pe), pe.addVectors(Le.max, Mi.max), Le.expandByPoint(pe)) : (Le.expandByPoint(Mi.min), Le.expandByPoint(Mi.max));
      }
      Le.getCenter(n);
      let r = 0;
      for (let s = 0, a = t.count; s < a; s++) pe.fromBufferAttribute(t, s), r = Math.max(r, n.distanceToSquared(pe));
      if (e) for (let s = 0, a = e.length; s < a; s++) {
        const o = e[s], c = this.morphTargetsRelative;
        for (let l = 0, u = o.count; l < u; l++) pe.fromBufferAttribute(o, l), c && (Zn.fromBufferAttribute(t, l), pe.add(Zn)), r = Math.max(r, n.distanceToSquared(pe));
      }
      this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const t = this.index, e = this.attributes;
    if (t === null || e.position === void 0 || e.normal === void 0 || e.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = e.position, r = e.normal, s = e.uv;
    this.hasAttribute("tangent") === false && this.setAttribute("tangent", new Ie(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"), o = [], c = [];
    for (let F = 0; F < n.count; F++) o[F] = new U(), c[F] = new U();
    const l = new U(), u = new U(), d = new U(), f = new Pt(), p = new Pt(), g = new Pt(), M = new U(), m = new U();
    function h(F, S, x) {
      l.fromBufferAttribute(n, F), u.fromBufferAttribute(n, S), d.fromBufferAttribute(n, x), f.fromBufferAttribute(s, F), p.fromBufferAttribute(s, S), g.fromBufferAttribute(s, x), u.sub(l), d.sub(l), p.sub(f), g.sub(f);
      const D = 1 / (p.x * g.y - g.x * p.y);
      isFinite(D) && (M.copy(u).multiplyScalar(g.y).addScaledVector(d, -p.y).multiplyScalar(D), m.copy(d).multiplyScalar(p.x).addScaledVector(u, -g.x).multiplyScalar(D), o[F].add(M), o[S].add(M), o[x].add(M), c[F].add(m), c[S].add(m), c[x].add(m));
    }
    let w = this.groups;
    w.length === 0 && (w = [{ start: 0, count: t.count }]);
    for (let F = 0, S = w.length; F < S; ++F) {
      const x = w[F], D = x.start, z = x.count;
      for (let V = D, X = D + z; V < X; V += 3) h(t.getX(V + 0), t.getX(V + 1), t.getX(V + 2));
    }
    const T = new U(), E = new U(), C = new U(), A = new U();
    function P(F) {
      C.fromBufferAttribute(r, F), A.copy(C);
      const S = o[F];
      T.copy(S), T.sub(C.multiplyScalar(C.dot(S))).normalize(), E.crossVectors(A, S);
      const D = E.dot(c[F]) < 0 ? -1 : 1;
      a.setXYZW(F, T.x, T.y, T.z, D);
    }
    for (let F = 0, S = w.length; F < S; ++F) {
      const x = w[F], D = x.start, z = x.count;
      for (let V = D, X = D + z; V < X; V += 3) P(t.getX(V + 0)), P(t.getX(V + 1)), P(t.getX(V + 2));
    }
  }
  computeVertexNormals() {
    const t = this.index, e = this.getAttribute("position");
    if (e !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0) n = new Ie(new Float32Array(e.count * 3), 3), this.setAttribute("normal", n);
      else for (let f = 0, p = n.count; f < p; f++) n.setXYZ(f, 0, 0, 0);
      const r = new U(), s = new U(), a = new U(), o = new U(), c = new U(), l = new U(), u = new U(), d = new U();
      if (t) for (let f = 0, p = t.count; f < p; f += 3) {
        const g = t.getX(f + 0), M = t.getX(f + 1), m = t.getX(f + 2);
        r.fromBufferAttribute(e, g), s.fromBufferAttribute(e, M), a.fromBufferAttribute(e, m), u.subVectors(a, s), d.subVectors(r, s), u.cross(d), o.fromBufferAttribute(n, g), c.fromBufferAttribute(n, M), l.fromBufferAttribute(n, m), o.add(u), c.add(u), l.add(u), n.setXYZ(g, o.x, o.y, o.z), n.setXYZ(M, c.x, c.y, c.z), n.setXYZ(m, l.x, l.y, l.z);
      }
      else for (let f = 0, p = e.count; f < p; f += 3) r.fromBufferAttribute(e, f + 0), s.fromBufferAttribute(e, f + 1), a.fromBufferAttribute(e, f + 2), u.subVectors(a, s), d.subVectors(r, s), u.cross(d), n.setXYZ(f + 0, u.x, u.y, u.z), n.setXYZ(f + 1, u.x, u.y, u.z), n.setXYZ(f + 2, u.x, u.y, u.z);
      this.normalizeNormals(), n.needsUpdate = true;
    }
  }
  normalizeNormals() {
    const t = this.attributes.normal;
    for (let e = 0, n = t.count; e < n; e++) pe.fromBufferAttribute(t, e), pe.normalize(), t.setXYZ(e, pe.x, pe.y, pe.z);
  }
  toNonIndexed() {
    function t(o, c) {
      const l = o.array, u = o.itemSize, d = o.normalized, f = new l.constructor(c.length * u);
      let p = 0, g = 0;
      for (let M = 0, m = c.length; M < m; M++) {
        o.isInterleavedBufferAttribute ? p = c[M] * o.data.stride + o.offset : p = c[M] * u;
        for (let h = 0; h < u; h++) f[g++] = l[p++];
      }
      return new Ie(f, u, d);
    }
    if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const e = new an(), n = this.index.array, r = this.attributes;
    for (const o in r) {
      const c = r[o], l = t(c, n);
      e.setAttribute(o, l);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const c = [], l = s[o];
      for (let u = 0, d = l.length; u < d; u++) {
        const f = l[u], p = t(f, n);
        c.push(p);
      }
      e.morphAttributes[o] = c;
    }
    e.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, c = a.length; o < c; o++) {
      const l = a[o];
      e.addGroup(l.start, l.count, l.materialIndex);
    }
    return e;
  }
  toJSON() {
    const t = { metadata: { version: 4.7, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } };
    if (t.uuid = this.uuid, t.type = this.type, this.name !== "" && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), this.parameters !== void 0) {
      const c = this.parameters;
      for (const l in c) c[l] !== void 0 && (t[l] = c[l]);
      return t;
    }
    t.data = { attributes: {} };
    const e = this.index;
    e !== null && (t.data.index = { type: e.array.constructor.name, array: Array.prototype.slice.call(e.array) });
    const n = this.attributes;
    for (const c in n) {
      const l = n[c];
      t.data.attributes[c] = l.toJSON(t.data);
    }
    const r = {};
    let s = false;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c], u = [];
      for (let d = 0, f = l.length; d < f; d++) {
        const p = l[d];
        u.push(p.toJSON(t.data));
      }
      u.length > 0 && (r[c] = u, s = true);
    }
    s && (t.data.morphAttributes = r, t.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (t.data.boundingSphere = o.toJSON()), t;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const e = {};
    this.name = t.name;
    const n = t.index;
    n !== null && this.setIndex(n.clone());
    const r = t.attributes;
    for (const l in r) {
      const u = r[l];
      this.setAttribute(l, u.clone(e));
    }
    const s = t.morphAttributes;
    for (const l in s) {
      const u = [], d = s[l];
      for (let f = 0, p = d.length; f < p; f++) u.push(d[f].clone(e));
      this.morphAttributes[l] = u;
    }
    this.morphTargetsRelative = t.morphTargetsRelative;
    const a = t.groups;
    for (let l = 0, u = a.length; l < u; l++) {
      const d = a[l];
      this.addGroup(d.start, d.count, d.materialIndex);
    }
    const o = t.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const c = t.boundingSphere;
    return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Oa = new Qt(), yn = new ra(), qi = new Ui(), Ba = new U(), Ki = new U(), ji = new U(), Zi = new U(), Wr = new U(), $i = new U(), za = new U(), Ji = new U();
class we extends me {
  constructor(t = new an(), e = new Mr()) {
    super(), this.isMesh = true, this.type = "Mesh", this.geometry = t, this.material = e, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets();
  }
  copy(t, e) {
    return super.copy(t, e), t.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), t.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, n = Object.keys(e);
    if (n.length > 0) {
      const r = e[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
  getVertexPosition(t, e) {
    const n = this.geometry, r = n.attributes.position, s = n.morphAttributes.position, a = n.morphTargetsRelative;
    e.fromBufferAttribute(r, t);
    const o = this.morphTargetInfluences;
    if (s && o) {
      $i.set(0, 0, 0);
      for (let c = 0, l = s.length; c < l; c++) {
        const u = o[c], d = s[c];
        u !== 0 && (Wr.fromBufferAttribute(d, t), a ? $i.addScaledVector(Wr, u) : $i.addScaledVector(Wr.sub(e), u));
      }
      e.add($i);
    }
    return e;
  }
  raycast(t, e) {
    const n = this.geometry, r = this.material, s = this.matrixWorld;
    r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), qi.copy(n.boundingSphere), qi.applyMatrix4(s), yn.copy(t.ray).recast(t.near), !(qi.containsPoint(yn.origin) === false && (yn.intersectSphere(qi, Ba) === null || yn.origin.distanceToSquared(Ba) > (t.far - t.near) ** 2)) && (Oa.copy(s).invert(), yn.copy(t.ray).applyMatrix4(Oa), !(n.boundingBox !== null && yn.intersectsBox(n.boundingBox) === false) && this._computeIntersections(t, e, yn)));
  }
  _computeIntersections(t, e, n) {
    let r;
    const s = this.geometry, a = this.material, o = s.index, c = s.attributes.position, l = s.attributes.uv, u = s.attributes.uv1, d = s.attributes.normal, f = s.groups, p = s.drawRange;
    if (o !== null) if (Array.isArray(a)) for (let g = 0, M = f.length; g < M; g++) {
      const m = f[g], h = a[m.materialIndex], w = Math.max(m.start, p.start), T = Math.min(o.count, Math.min(m.start + m.count, p.start + p.count));
      for (let E = w, C = T; E < C; E += 3) {
        const A = o.getX(E), P = o.getX(E + 1), F = o.getX(E + 2);
        r = Qi(this, h, t, n, l, u, d, A, P, F), r && (r.faceIndex = Math.floor(E / 3), r.face.materialIndex = m.materialIndex, e.push(r));
      }
    }
    else {
      const g = Math.max(0, p.start), M = Math.min(o.count, p.start + p.count);
      for (let m = g, h = M; m < h; m += 3) {
        const w = o.getX(m), T = o.getX(m + 1), E = o.getX(m + 2);
        r = Qi(this, a, t, n, l, u, d, w, T, E), r && (r.faceIndex = Math.floor(m / 3), e.push(r));
      }
    }
    else if (c !== void 0) if (Array.isArray(a)) for (let g = 0, M = f.length; g < M; g++) {
      const m = f[g], h = a[m.materialIndex], w = Math.max(m.start, p.start), T = Math.min(c.count, Math.min(m.start + m.count, p.start + p.count));
      for (let E = w, C = T; E < C; E += 3) {
        const A = E, P = E + 1, F = E + 2;
        r = Qi(this, h, t, n, l, u, d, A, P, F), r && (r.faceIndex = Math.floor(E / 3), r.face.materialIndex = m.materialIndex, e.push(r));
      }
    }
    else {
      const g = Math.max(0, p.start), M = Math.min(c.count, p.start + p.count);
      for (let m = g, h = M; m < h; m += 3) {
        const w = m, T = m + 1, E = m + 2;
        r = Qi(this, a, t, n, l, u, d, w, T, E), r && (r.faceIndex = Math.floor(m / 3), e.push(r));
      }
    }
  }
}
function Ic(i, t, e, n, r, s, a, o) {
  let c;
  if (t.side === Re ? c = n.intersectTriangle(a, s, r, true, o) : c = n.intersectTriangle(r, s, a, t.side === gn, o), c === null) return null;
  Ji.copy(o), Ji.applyMatrix4(i.matrixWorld);
  const l = e.ray.origin.distanceTo(Ji);
  return l < e.near || l > e.far ? null : { distance: l, point: Ji.clone(), object: i };
}
function Qi(i, t, e, n, r, s, a, o, c, l) {
  i.getVertexPosition(o, Ki), i.getVertexPosition(c, ji), i.getVertexPosition(l, Zi);
  const u = Ic(i, t, e, n, Ki, ji, Zi, za);
  if (u) {
    const d = new U();
    ke.getBarycoord(za, Ki, ji, Zi, d), r && (u.uv = ke.getInterpolatedAttribute(r, o, c, l, d, new Pt())), s && (u.uv1 = ke.getInterpolatedAttribute(s, o, c, l, d, new Pt())), a && (u.normal = ke.getInterpolatedAttribute(a, o, c, l, d, new U()), u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1));
    const f = { a: o, b: c, c: l, normal: new U(), materialIndex: 0 };
    ke.getNormal(Ki, ji, Zi, f.normal), u.face = f, u.barycoord = d;
  }
  return u;
}
class Ii extends an {
  constructor(t = 1, e = 1, n = 1, r = 1, s = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = { width: t, height: e, depth: n, widthSegments: r, heightSegments: s, depthSegments: a };
    const o = this;
    r = Math.floor(r), s = Math.floor(s), a = Math.floor(a);
    const c = [], l = [], u = [], d = [];
    let f = 0, p = 0;
    g("z", "y", "x", -1, -1, n, e, t, a, s, 0), g("z", "y", "x", 1, -1, n, e, -t, a, s, 1), g("x", "z", "y", 1, 1, t, n, e, r, a, 2), g("x", "z", "y", 1, -1, t, n, -e, r, a, 3), g("x", "y", "z", 1, -1, t, e, n, r, s, 4), g("x", "y", "z", -1, -1, t, e, -n, r, s, 5), this.setIndex(c), this.setAttribute("position", new Ln(l, 3)), this.setAttribute("normal", new Ln(u, 3)), this.setAttribute("uv", new Ln(d, 2));
    function g(M, m, h, w, T, E, C, A, P, F, S) {
      const x = E / P, D = C / F, z = E / 2, V = C / 2, X = A / 2, K = P + 1, W = F + 1;
      let et = 0, H = 0;
      const st = new U();
      for (let ct = 0; ct < W; ct++) {
        const Et = ct * D - V;
        for (let Bt = 0; Bt < K; Bt++) {
          const $t = Bt * x - z;
          st[M] = $t * w, st[m] = Et * T, st[h] = X, l.push(st.x, st.y, st.z), st[M] = 0, st[m] = 0, st[h] = A > 0 ? 1 : -1, u.push(st.x, st.y, st.z), d.push(Bt / P), d.push(1 - ct / F), et += 1;
        }
      }
      for (let ct = 0; ct < F; ct++) for (let Et = 0; Et < P; Et++) {
        const Bt = f + Et + K * ct, $t = f + Et + K * (ct + 1), ee = f + (Et + 1) + K * (ct + 1), Wt = f + (Et + 1) + K * ct;
        c.push(Bt, $t, Wt), c.push($t, ee, Wt), H += 6;
      }
      o.addGroup(p, H, S), p += H, f += et;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Ii(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
  }
}
function di(i) {
  const t = {};
  for (const e in i) {
    t[e] = {};
    for (const n in i[e]) {
      const r = i[e][n];
      r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? r.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t[e][n] = null) : t[e][n] = r.clone() : Array.isArray(r) ? t[e][n] = r.slice() : t[e][n] = r;
    }
  }
  return t;
}
function Ee(i) {
  const t = {};
  for (let e = 0; e < i.length; e++) {
    const n = di(i[e]);
    for (const r in n) t[r] = n[r];
  }
  return t;
}
function Nc(i) {
  const t = [];
  for (let e = 0; e < i.length; e++) t.push(i[e].clone());
  return t;
}
function Go(i) {
  const t = i.getRenderTarget();
  return t === null ? i.outputColorSpace : t.isXRRenderTarget === true ? t.texture.colorSpace : Gt.workingColorSpace;
}
const Fc = { clone: di, merge: Ee };
var Oc = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Bc = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class vn extends pi {
  constructor(t) {
    super(), this.isShaderMaterial = true, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Oc, this.fragmentShader = Bc, this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.forceSinglePass = true, this.extensions = { clipCullDistance: false, multiDraw: false }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, t !== void 0 && this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = di(t.uniforms), this.uniformsGroups = Nc(t.uniformsGroups), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    e.glslVersion = this.glslVersion, e.uniforms = {};
    for (const r in this.uniforms) {
      const a = this.uniforms[r].value;
      a && a.isTexture ? e.uniforms[r] = { type: "t", value: a.toJSON(t).uuid } : a && a.isColor ? e.uniforms[r] = { type: "c", value: a.getHex() } : a && a.isVector2 ? e.uniforms[r] = { type: "v2", value: a.toArray() } : a && a.isVector3 ? e.uniforms[r] = { type: "v3", value: a.toArray() } : a && a.isVector4 ? e.uniforms[r] = { type: "v4", value: a.toArray() } : a && a.isMatrix3 ? e.uniforms[r] = { type: "m3", value: a.toArray() } : a && a.isMatrix4 ? e.uniforms[r] = { type: "m4", value: a.toArray() } : e.uniforms[r] = { value: a };
    }
    Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e.lights = this.lights, e.clipping = this.clipping;
    const n = {};
    for (const r in this.extensions) this.extensions[r] === true && (n[r] = true);
    return Object.keys(n).length > 0 && (e.extensions = n), e;
  }
}
class Wo extends me {
  constructor() {
    super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new Qt(), this.projectionMatrix = new Qt(), this.projectionMatrixInverse = new Qt(), this.coordinateSystem = Ke, this._reversedDepth = false;
  }
  get reversedDepth() {
    return this._reversedDepth;
  }
  copy(t, e) {
    return super.copy(t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this.coordinateSystem = t.coordinateSystem, this;
  }
  getWorldDirection(t) {
    return super.getWorldDirection(t).negate();
  }
  updateMatrixWorld(t) {
    super.updateMatrixWorld(t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(t, e) {
    super.updateWorldMatrix(t, e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const dn = new U(), Ha = new Pt(), ka = new Pt();
class Ae extends Wo {
  constructor(t = 50, e = 1, n = 0.1, r = 2e3) {
    super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(t, e) {
    return super.copy(t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = t.view === null ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this;
  }
  setFocalLength(t) {
    const e = 0.5 * this.getFilmHeight() / t;
    this.fov = ui * 2 * Math.atan(e), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const t = Math.tan(bi * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / t;
  }
  getEffectiveFOV() {
    return ui * 2 * Math.atan(Math.tan(bi * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(t, e, n) {
    dn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), e.set(dn.x, dn.y).multiplyScalar(-t / dn.z), dn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(dn.x, dn.y).multiplyScalar(-t / dn.z);
  }
  getViewSize(t, e) {
    return this.getViewBounds(t, Ha, ka), e.subVectors(ka, Ha);
  }
  setViewOffset(t, e, n, r, s, a) {
    this.aspect = t / e, this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const t = this.near;
    let e = t * Math.tan(bi * 0.5 * this.fov) / this.zoom, n = 2 * e, r = this.aspect * n, s = -0.5 * r;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = a.fullWidth, l = a.fullHeight;
      s += a.offsetX * r / c, e -= a.offsetY * n / l, r *= a.width / c, n *= a.height / l;
    }
    const o = this.filmOffset;
    o !== 0 && (s += t * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + r, e, e - n, t, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, this.view !== null && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e;
  }
}
const $n = -90, Jn = 1;
class zc extends me {
  constructor(t, e, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const r = new Ae($n, Jn, t, e);
    r.layers = this.layers, this.add(r);
    const s = new Ae($n, Jn, t, e);
    s.layers = this.layers, this.add(s);
    const a = new Ae($n, Jn, t, e);
    a.layers = this.layers, this.add(a);
    const o = new Ae($n, Jn, t, e);
    o.layers = this.layers, this.add(o);
    const c = new Ae($n, Jn, t, e);
    c.layers = this.layers, this.add(c);
    const l = new Ae($n, Jn, t, e);
    l.layers = this.layers, this.add(l);
  }
  updateCoordinateSystem() {
    const t = this.coordinateSystem, e = this.children.concat(), [n, r, s, a, o, c] = e;
    for (const l of e) this.remove(l);
    if (t === Ke) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), c.up.set(0, 1, 0), c.lookAt(0, 0, -1);
    else if (t === _r) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), c.up.set(0, -1, 0), c.lookAt(0, 0, -1);
    else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + t);
    for (const l of e) this.add(l), l.updateMatrixWorld();
  }
  update(t, e) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: r } = this;
    this.coordinateSystem !== t.coordinateSystem && (this.coordinateSystem = t.coordinateSystem, this.updateCoordinateSystem());
    const [s, a, o, c, l, u] = this.children, d = t.getRenderTarget(), f = t.getActiveCubeFace(), p = t.getActiveMipmapLevel(), g = t.xr.enabled;
    t.xr.enabled = false;
    const M = n.texture.generateMipmaps;
    n.texture.generateMipmaps = false, t.setRenderTarget(n, 0, r), t.render(e, s), t.setRenderTarget(n, 1, r), t.render(e, a), t.setRenderTarget(n, 2, r), t.render(e, o), t.setRenderTarget(n, 3, r), t.render(e, c), t.setRenderTarget(n, 4, r), t.render(e, l), n.texture.generateMipmaps = M, t.setRenderTarget(n, 5, r), t.render(e, u), t.setRenderTarget(d, f, p), t.xr.enabled = g, n.texture.needsPMREMUpdate = true;
  }
}
class Xo extends xe {
  constructor(t = [], e = li, n, r, s, a, o, c, l, u) {
    super(t, e, n, r, s, a, o, c, l, u), this.isCubeTexture = true, this.flipY = false;
  }
  get images() {
    return this.image;
  }
  set images(t) {
    this.image = t;
  }
}
class Hc extends Nn {
  constructor(t = 1, e = {}) {
    super(t, t, e), this.isWebGLCubeRenderTarget = true;
    const n = { width: t, height: t, depth: 1 }, r = [n, n, n, n, n, n];
    this.texture = new Xo(r), this._setTextureOptions(e), this.texture.isRenderTargetTexture = true;
  }
  fromEquirectangularTexture(t, e) {
    this.texture.type = e.type, this.texture.colorSpace = e.colorSpace, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
    const n = { uniforms: { tEquirect: { value: null } }, vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`, fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			` }, r = new Ii(5, 5, 5), s = new vn({ name: "CubemapFromEquirect", uniforms: di(n.uniforms), vertexShader: n.vertexShader, fragmentShader: n.fragmentShader, side: Re, blending: mn });
    s.uniforms.tEquirect.value = e;
    const a = new we(r, s), o = e.minFilter;
    return e.minFilter === Dn && (e.minFilter = Ye), new zc(1, 10, this).update(t, a), e.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(t, e = true, n = true, r = true) {
    const s = t.getRenderTarget();
    for (let a = 0; a < 6; a++) t.setRenderTarget(this, a), t.clear(e, n, r);
    t.setRenderTarget(s);
  }
}
class tr extends me {
  constructor() {
    super(), this.isGroup = true, this.type = "Group";
  }
}
const kc = { type: "move" };
class Xr {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new tr(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = { pinching: false }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new tr(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new U(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new U()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new tr(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new U(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new U()), this._grip;
  }
  dispatchEvent(t) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(t), this._grip !== null && this._grip.dispatchEvent(t), this._hand !== null && this._hand.dispatchEvent(t), this;
  }
  connect(t) {
    if (t && t.hand) {
      const e = this._hand;
      if (e) for (const n of t.hand.values()) this._getHandJoint(e, n);
    }
    return this.dispatchEvent({ type: "connected", data: t }), this;
  }
  disconnect(t) {
    return this.dispatchEvent({ type: "disconnected", data: t }), this._targetRay !== null && (this._targetRay.visible = false), this._grip !== null && (this._grip.visible = false), this._hand !== null && (this._hand.visible = false), this;
  }
  update(t, e, n) {
    let r = null, s = null, a = null;
    const o = this._targetRay, c = this._grip, l = this._hand;
    if (t && e.session.visibilityState !== "visible-blurred") {
      if (l && t.hand) {
        a = true;
        for (const M of t.hand.values()) {
          const m = e.getJointPose(M, n), h = this._getHandJoint(l, M);
          m !== null && (h.matrix.fromArray(m.transform.matrix), h.matrix.decompose(h.position, h.rotation, h.scale), h.matrixWorldNeedsUpdate = true, h.jointRadius = m.radius), h.visible = m !== null;
        }
        const u = l.joints["index-finger-tip"], d = l.joints["thumb-tip"], f = u.position.distanceTo(d.position), p = 0.02, g = 5e-3;
        l.inputState.pinching && f > p + g ? (l.inputState.pinching = false, this.dispatchEvent({ type: "pinchend", handedness: t.handedness, target: this })) : !l.inputState.pinching && f <= p - g && (l.inputState.pinching = true, this.dispatchEvent({ type: "pinchstart", handedness: t.handedness, target: this }));
      } else c !== null && t.gripSpace && (s = e.getPose(t.gripSpace, n), s !== null && (c.matrix.fromArray(s.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), c.matrixWorldNeedsUpdate = true, s.linearVelocity ? (c.hasLinearVelocity = true, c.linearVelocity.copy(s.linearVelocity)) : c.hasLinearVelocity = false, s.angularVelocity ? (c.hasAngularVelocity = true, c.angularVelocity.copy(s.angularVelocity)) : c.hasAngularVelocity = false));
      o !== null && (r = e.getPose(t.targetRaySpace, n), r === null && s !== null && (r = s), r !== null && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = true, r.linearVelocity ? (o.hasLinearVelocity = true, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = false, r.angularVelocity ? (o.hasAngularVelocity = true, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = false, this.dispatchEvent(kc)));
    }
    return o !== null && (o.visible = r !== null), c !== null && (c.visible = s !== null), l !== null && (l.visible = a !== null), this;
  }
  _getHandJoint(t, e) {
    if (t.joints[e.jointName] === void 0) {
      const n = new tr();
      n.matrixAutoUpdate = false, n.visible = false, t.joints[e.jointName] = n, t.add(n);
    }
    return t.joints[e.jointName];
  }
}
class aa {
  constructor(t, e = 1, n = 1e3) {
    this.isFog = true, this.name = "", this.color = new Ht(t), this.near = e, this.far = n;
  }
  clone() {
    return new aa(this.color, this.near, this.far);
  }
  toJSON() {
    return { type: "Fog", name: this.name, color: this.color.getHex(), near: this.near, far: this.far };
  }
}
class Vc extends me {
  constructor() {
    super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new Ge(), this.environmentIntensity = 1, this.environmentRotation = new Ge(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(t, e) {
    return super.copy(t, e), t.background !== null && (this.background = t.background.clone()), t.environment !== null && (this.environment = t.environment.clone()), t.fog !== null && (this.fog = t.fog.clone()), this.backgroundBlurriness = t.backgroundBlurriness, this.backgroundIntensity = t.backgroundIntensity, this.backgroundRotation.copy(t.backgroundRotation), this.environmentIntensity = t.environmentIntensity, this.environmentRotation.copy(t.environmentRotation), t.overrideMaterial !== null && (this.overrideMaterial = t.overrideMaterial.clone()), this.matrixAutoUpdate = t.matrixAutoUpdate, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.fog !== null && (e.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (e.object.backgroundIntensity = this.backgroundIntensity), e.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (e.object.environmentIntensity = this.environmentIntensity), e.object.environmentRotation = this.environmentRotation.toArray(), e;
  }
}
class Gc extends xe {
  constructor(t = null, e = 1, n = 1, r, s, a, o, c, l = Ue, u = Ue, d, f) {
    super(null, a, o, c, l, u, r, s, d, f), this.isDataTexture = true, this.image = { data: t, width: e, height: n }, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
class Va extends Ie {
  constructor(t, e, n, r = 1) {
    super(t, e, n), this.isInstancedBufferAttribute = true, this.meshPerAttribute = r;
  }
  copy(t) {
    return super.copy(t), this.meshPerAttribute = t.meshPerAttribute, this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.meshPerAttribute = this.meshPerAttribute, t.isInstancedBufferAttribute = true, t;
  }
}
const Qn = new Qt(), Ga = new Qt(), er = [], Wa = new On(), Wc = new Qt(), Si = new we(), Ei = new Ui();
class Yo extends we {
  constructor(t, e, n) {
    super(t, e), this.isInstancedMesh = true, this.instanceMatrix = new Va(new Float32Array(n * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let r = 0; r < n; r++) this.setMatrixAt(r, Wc);
  }
  computeBoundingBox() {
    const t = this.geometry, e = this.count;
    this.boundingBox === null && (this.boundingBox = new On()), t.boundingBox === null && t.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < e; n++) this.getMatrixAt(n, Qn), Wa.copy(t.boundingBox).applyMatrix4(Qn), this.boundingBox.union(Wa);
  }
  computeBoundingSphere() {
    const t = this.geometry, e = this.count;
    this.boundingSphere === null && (this.boundingSphere = new Ui()), t.boundingSphere === null && t.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < e; n++) this.getMatrixAt(n, Qn), Ei.copy(t.boundingSphere).applyMatrix4(Qn), this.boundingSphere.union(Ei);
  }
  copy(t, e) {
    return super.copy(t, e), this.instanceMatrix.copy(t.instanceMatrix), t.morphTexture !== null && (this.morphTexture = t.morphTexture.clone()), t.instanceColor !== null && (this.instanceColor = t.instanceColor.clone()), this.count = t.count, t.boundingBox !== null && (this.boundingBox = t.boundingBox.clone()), t.boundingSphere !== null && (this.boundingSphere = t.boundingSphere.clone()), this;
  }
  getColorAt(t, e) {
    e.fromArray(this.instanceColor.array, t * 3);
  }
  getMatrixAt(t, e) {
    e.fromArray(this.instanceMatrix.array, t * 16);
  }
  getMorphAt(t, e) {
    const n = e.morphTargetInfluences, r = this.morphTexture.source.data.data, s = n.length + 1, a = t * s + 1;
    for (let o = 0; o < n.length; o++) n[o] = r[a + o];
  }
  raycast(t, e) {
    const n = this.matrixWorld, r = this.count;
    if (Si.geometry = this.geometry, Si.material = this.material, Si.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Ei.copy(this.boundingSphere), Ei.applyMatrix4(n), t.ray.intersectsSphere(Ei) !== false)) for (let s = 0; s < r; s++) {
      this.getMatrixAt(s, Qn), Ga.multiplyMatrices(n, Qn), Si.matrixWorld = Ga, Si.raycast(t, er);
      for (let a = 0, o = er.length; a < o; a++) {
        const c = er[a];
        c.instanceId = s, c.object = this, e.push(c);
      }
      er.length = 0;
    }
  }
  setColorAt(t, e) {
    this.instanceColor === null && (this.instanceColor = new Va(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), e.toArray(this.instanceColor.array, t * 3);
  }
  setMatrixAt(t, e) {
    e.toArray(this.instanceMatrix.array, t * 16);
  }
  setMorphAt(t, e) {
    const n = e.morphTargetInfluences, r = n.length + 1;
    this.morphTexture === null && (this.morphTexture = new Gc(new Float32Array(r * this.count), r, this.count, $s, qe));
    const s = this.morphTexture.source.data.data;
    let a = 0;
    for (let l = 0; l < n.length; l++) a += n[l];
    const o = this.geometry.morphTargetsRelative ? 1 : 1 - a, c = r * t;
    s[c] = o, s.set(n, c + 1);
  }
  updateMorphTargets() {
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" }), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null);
  }
}
const Yr = new U(), Xc = new U(), Yc = new It();
class fn {
  constructor(t = new U(1, 0, 0), e = 0) {
    this.isPlane = true, this.normal = t, this.constant = e;
  }
  set(t, e) {
    return this.normal.copy(t), this.constant = e, this;
  }
  setComponents(t, e, n, r) {
    return this.normal.set(t, e, n), this.constant = r, this;
  }
  setFromNormalAndCoplanarPoint(t, e) {
    return this.normal.copy(t), this.constant = -e.dot(this.normal), this;
  }
  setFromCoplanarPoints(t, e, n) {
    const r = Yr.subVectors(n, e).cross(Xc.subVectors(t, e)).normalize();
    return this.setFromNormalAndCoplanarPoint(r, t), this;
  }
  copy(t) {
    return this.normal.copy(t.normal), this.constant = t.constant, this;
  }
  normalize() {
    const t = 1 / this.normal.length();
    return this.normal.multiplyScalar(t), this.constant *= t, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(t) {
    return this.normal.dot(t) + this.constant;
  }
  distanceToSphere(t) {
    return this.distanceToPoint(t.center) - t.radius;
  }
  projectPoint(t, e) {
    return e.copy(t).addScaledVector(this.normal, -this.distanceToPoint(t));
  }
  intersectLine(t, e) {
    const n = t.delta(Yr), r = this.normal.dot(n);
    if (r === 0) return this.distanceToPoint(t.start) === 0 ? e.copy(t.start) : null;
    const s = -(t.start.dot(this.normal) + this.constant) / r;
    return s < 0 || s > 1 ? null : e.copy(t.start).addScaledVector(n, s);
  }
  intersectsLine(t) {
    const e = this.distanceToPoint(t.start), n = this.distanceToPoint(t.end);
    return e < 0 && n > 0 || n < 0 && e > 0;
  }
  intersectsBox(t) {
    return t.intersectsPlane(this);
  }
  intersectsSphere(t) {
    return t.intersectsPlane(this);
  }
  coplanarPoint(t) {
    return t.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(t, e) {
    const n = e || Yc.getNormalMatrix(t), r = this.coplanarPoint(Yr).applyMatrix4(t), s = this.normal.applyMatrix3(n).normalize();
    return this.constant = -r.dot(s), this;
  }
  translate(t) {
    return this.constant -= t.dot(this.normal), this;
  }
  equals(t) {
    return t.normal.equals(this.normal) && t.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Tn = new Ui(), qc = new Pt(0.5, 0.5), nr = new U();
class oa {
  constructor(t = new fn(), e = new fn(), n = new fn(), r = new fn(), s = new fn(), a = new fn()) {
    this.planes = [t, e, n, r, s, a];
  }
  set(t, e, n, r, s, a) {
    const o = this.planes;
    return o[0].copy(t), o[1].copy(e), o[2].copy(n), o[3].copy(r), o[4].copy(s), o[5].copy(a), this;
  }
  copy(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++) e[n].copy(t.planes[n]);
    return this;
  }
  setFromProjectionMatrix(t, e = Ke, n = false) {
    const r = this.planes, s = t.elements, a = s[0], o = s[1], c = s[2], l = s[3], u = s[4], d = s[5], f = s[6], p = s[7], g = s[8], M = s[9], m = s[10], h = s[11], w = s[12], T = s[13], E = s[14], C = s[15];
    if (r[0].setComponents(l - a, p - u, h - g, C - w).normalize(), r[1].setComponents(l + a, p + u, h + g, C + w).normalize(), r[2].setComponents(l + o, p + d, h + M, C + T).normalize(), r[3].setComponents(l - o, p - d, h - M, C - T).normalize(), n) r[4].setComponents(c, f, m, E).normalize(), r[5].setComponents(l - c, p - f, h - m, C - E).normalize();
    else if (r[4].setComponents(l - c, p - f, h - m, C - E).normalize(), e === Ke) r[5].setComponents(l + c, p + f, h + m, C + E).normalize();
    else if (e === _r) r[5].setComponents(c, f, m, E).normalize();
    else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + e);
    return this;
  }
  intersectsObject(t) {
    if (t.boundingSphere !== void 0) t.boundingSphere === null && t.computeBoundingSphere(), Tn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);
    else {
      const e = t.geometry;
      e.boundingSphere === null && e.computeBoundingSphere(), Tn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld);
    }
    return this.intersectsSphere(Tn);
  }
  intersectsSprite(t) {
    Tn.center.set(0, 0, 0);
    const e = qc.distanceTo(t.center);
    return Tn.radius = 0.7071067811865476 + e, Tn.applyMatrix4(t.matrixWorld), this.intersectsSphere(Tn);
  }
  intersectsSphere(t) {
    const e = this.planes, n = t.center, r = -t.radius;
    for (let s = 0; s < 6; s++) if (e[s].distanceToPoint(n) < r) return false;
    return true;
  }
  intersectsBox(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++) {
      const r = e[n];
      if (nr.x = r.normal.x > 0 ? t.max.x : t.min.x, nr.y = r.normal.y > 0 ? t.max.y : t.min.y, nr.z = r.normal.z > 0 ? t.max.z : t.min.z, r.distanceToPoint(nr) < 0) return false;
    }
    return true;
  }
  containsPoint(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++) if (e[n].distanceToPoint(t) < 0) return false;
    return true;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Kc extends xe {
  constructor(t, e, n, r, s, a, o, c, l) {
    super(t, e, n, r, s, a, o, c, l), this.isCanvasTexture = true, this.needsUpdate = true;
  }
}
class qo extends xe {
  constructor(t, e, n = Un, r, s, a, o = Ue, c = Ue, l, u = Ci, d = 1) {
    if (u !== Ci && u !== Pi) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    const f = { width: t, height: e, depth: d };
    super(f, r, s, a, o, c, u, n, l), this.isDepthTexture = true, this.flipY = false, this.generateMipmaps = false, this.compareFunction = null;
  }
  copy(t) {
    return super.copy(t), this.source = new ia(Object.assign({}, t.image)), this.compareFunction = t.compareFunction, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.compareFunction !== null && (e.compareFunction = this.compareFunction), e;
  }
}
class Ko extends xe {
  constructor(t = null) {
    super(), this.sourceTexture = t, this.isExternalTexture = true;
  }
  copy(t) {
    return super.copy(t), this.sourceTexture = t.sourceTexture, this;
  }
}
class Bn extends an {
  constructor(t = 1, e = 1, n = 1, r = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = { width: t, height: e, widthSegments: n, heightSegments: r };
    const s = t / 2, a = e / 2, o = Math.floor(n), c = Math.floor(r), l = o + 1, u = c + 1, d = t / o, f = e / c, p = [], g = [], M = [], m = [];
    for (let h = 0; h < u; h++) {
      const w = h * f - a;
      for (let T = 0; T < l; T++) {
        const E = T * d - s;
        g.push(E, -w, 0), M.push(0, 0, 1), m.push(T / o), m.push(1 - h / c);
      }
    }
    for (let h = 0; h < c; h++) for (let w = 0; w < o; w++) {
      const T = w + l * h, E = w + l * (h + 1), C = w + 1 + l * (h + 1), A = w + 1 + l * h;
      p.push(T, E, A), p.push(E, C, A);
    }
    this.setIndex(p), this.setAttribute("position", new Ln(g, 3)), this.setAttribute("normal", new Ln(M, 3)), this.setAttribute("uv", new Ln(m, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Bn(t.width, t.height, t.widthSegments, t.heightSegments);
  }
}
class jc extends pi {
  constructor(t) {
    super(), this.isMeshPhongMaterial = true, this.type = "MeshPhongMaterial", this.color = new Ht(16777215), this.specular = new Ht(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ht(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ea, this.normalScale = new Pt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Ge(), this.combine = vr, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this.fog = t.fog, this;
  }
}
class Ws extends pi {
  constructor(t) {
    super(), this.isMeshLambertMaterial = true, this.type = "MeshLambertMaterial", this.color = new Ht(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ht(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ea, this.normalScale = new Pt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Ge(), this.combine = vr, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this.fog = t.fog, this;
  }
}
class Zc extends pi {
  constructor(t) {
    super(), this.isMeshDepthMaterial = true, this.type = "MeshDepthMaterial", this.depthPacking = Wl, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.depthPacking = t.depthPacking, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this;
  }
}
class $c extends pi {
  constructor(t) {
    super(), this.isMeshDistanceMaterial = true, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this;
  }
}
class la extends me {
  constructor(t, e = 1) {
    super(), this.isLight = true, this.type = "Light", this.color = new Ht(t), this.intensity = e;
  }
  dispose() {
  }
  copy(t, e) {
    return super.copy(t, e), this.color.copy(t.color), this.intensity = t.intensity, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, this.groundColor !== void 0 && (e.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (e.object.distance = this.distance), this.angle !== void 0 && (e.object.angle = this.angle), this.decay !== void 0 && (e.object.decay = this.decay), this.penumbra !== void 0 && (e.object.penumbra = this.penumbra), this.shadow !== void 0 && (e.object.shadow = this.shadow.toJSON()), this.target !== void 0 && (e.object.target = this.target.uuid), e;
  }
}
const qr = new Qt(), Xa = new U(), Ya = new U();
class jo {
  constructor(t) {
    this.camera = t, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Pt(512, 512), this.mapType = je, this.map = null, this.mapPass = null, this.matrix = new Qt(), this.autoUpdate = true, this.needsUpdate = false, this._frustum = new oa(), this._frameExtents = new Pt(1, 1), this._viewportCount = 1, this._viewports = [new jt(0, 0, 1, 1)];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(t) {
    const e = this.camera, n = this.matrix;
    Xa.setFromMatrixPosition(t.matrixWorld), e.position.copy(Xa), Ya.setFromMatrixPosition(t.target.matrixWorld), e.lookAt(Ya), e.updateMatrixWorld(), qr.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix(qr, e.coordinateSystem, e.reversedDepth), e.reversedDepth ? n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 1, 0, 0, 0, 0, 1) : n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), n.multiply(qr);
  }
  getViewport(t) {
    return this._viewports[t];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(t) {
    return this.camera = t.camera.clone(), this.intensity = t.intensity, this.bias = t.bias, this.radius = t.radius, this.autoUpdate = t.autoUpdate, this.needsUpdate = t.needsUpdate, this.normalBias = t.normalBias, this.blurSamples = t.blurSamples, this.mapSize.copy(t.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const t = {};
    return this.intensity !== 1 && (t.intensity = this.intensity), this.bias !== 0 && (t.bias = this.bias), this.normalBias !== 0 && (t.normalBias = this.normalBias), this.radius !== 1 && (t.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(false).object, delete t.camera.matrix, t;
  }
}
class Jc extends jo {
  constructor() {
    super(new Ae(50, 1, 0.5, 500)), this.isSpotLightShadow = true, this.focus = 1, this.aspect = 1;
  }
  updateMatrices(t) {
    const e = this.camera, n = ui * 2 * t.angle * this.focus, r = this.mapSize.width / this.mapSize.height * this.aspect, s = t.distance || e.far;
    (n !== e.fov || r !== e.aspect || s !== e.far) && (e.fov = n, e.aspect = r, e.far = s, e.updateProjectionMatrix()), super.updateMatrices(t);
  }
  copy(t) {
    return super.copy(t), this.focus = t.focus, this;
  }
}
class qa extends la {
  constructor(t, e, n = 0, r = Math.PI / 3, s = 0, a = 2) {
    super(t, e), this.isSpotLight = true, this.type = "SpotLight", this.position.copy(me.DEFAULT_UP), this.updateMatrix(), this.target = new me(), this.distance = n, this.angle = r, this.penumbra = s, this.decay = a, this.map = null, this.shadow = new Jc();
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(t) {
    this.intensity = t / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(t, e) {
    return super.copy(t, e), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this.shadow = t.shadow.clone(), this;
  }
}
const Ka = new Qt(), yi = new U(), Kr = new U();
class Qc extends jo {
  constructor() {
    super(new Ae(90, 1, 0.5, 500)), this.isPointLightShadow = true, this._frameExtents = new Pt(4, 2), this._viewportCount = 6, this._viewports = [new jt(2, 1, 1, 1), new jt(0, 1, 1, 1), new jt(3, 1, 1, 1), new jt(1, 1, 1, 1), new jt(3, 0, 1, 1), new jt(1, 0, 1, 1)], this._cubeDirections = [new U(1, 0, 0), new U(-1, 0, 0), new U(0, 0, 1), new U(0, 0, -1), new U(0, 1, 0), new U(0, -1, 0)], this._cubeUps = [new U(0, 1, 0), new U(0, 1, 0), new U(0, 1, 0), new U(0, 1, 0), new U(0, 0, 1), new U(0, 0, -1)];
  }
  updateMatrices(t, e = 0) {
    const n = this.camera, r = this.matrix, s = t.distance || n.far;
    s !== n.far && (n.far = s, n.updateProjectionMatrix()), yi.setFromMatrixPosition(t.matrixWorld), n.position.copy(yi), Kr.copy(n.position), Kr.add(this._cubeDirections[e]), n.up.copy(this._cubeUps[e]), n.lookAt(Kr), n.updateMatrixWorld(), r.makeTranslation(-yi.x, -yi.y, -yi.z), Ka.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Ka, n.coordinateSystem, n.reversedDepth);
  }
}
class th extends la {
  constructor(t, e, n = 0, r = 2) {
    super(t, e), this.isPointLight = true, this.type = "PointLight", this.distance = n, this.decay = r, this.shadow = new Qc();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(t) {
    this.intensity = t / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(t, e) {
    return super.copy(t, e), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this;
  }
}
class eh extends Wo {
  constructor(t = -1, e = 1, n = 1, r = -1, s = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = true, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = n, this.bottom = r, this.near = s, this.far = a, this.updateProjectionMatrix();
  }
  copy(t, e) {
    return super.copy(t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = t.view === null ? null : Object.assign({}, t.view), this;
  }
  setViewOffset(t, e, n, r, s, a) {
    this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const t = (this.right - this.left) / (2 * this.zoom), e = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2;
    let s = n - t, a = n + t, o = r + e, c = r - e;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += l * this.view.offsetX, a = s + l * this.view.width, o -= u * this.view.offsetY, c = o - u * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, a, o, c, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, this.view !== null && (e.object.view = Object.assign({}, this.view)), e;
  }
}
class nh extends la {
  constructor(t, e) {
    super(t, e), this.isAmbientLight = true, this.type = "AmbientLight";
  }
}
class ih extends Ae {
  constructor(t = []) {
    super(), this.isArrayCamera = true, this.isMultiViewCamera = false, this.cameras = t;
  }
}
const ja = new Qt();
class rh {
  constructor(t, e, n = 0, r = 1 / 0) {
    this.ray = new ra(t, e), this.near = n, this.far = r, this.camera = null, this.layers = new sa(), this.params = { Mesh: {}, Line: { threshold: 1 }, LOD: {}, Points: { threshold: 1 }, Sprite: {} };
  }
  set(t, e) {
    this.ray.set(t, e);
  }
  setFromCamera(t, e) {
    e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t.x, t.y, 0.5).unproject(e).sub(this.ray.origin).normalize(), this.camera = e) : e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld), this.camera = e) : console.error("THREE.Raycaster: Unsupported camera type: " + e.type);
  }
  setFromXRController(t) {
    return ja.identity().extractRotation(t.matrixWorld), this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(ja), this;
  }
  intersectObject(t, e = true, n = []) {
    return Xs(t, this, n, e), n.sort(Za), n;
  }
  intersectObjects(t, e = true, n = []) {
    for (let r = 0, s = t.length; r < s; r++) Xs(t[r], this, n, e);
    return n.sort(Za), n;
  }
}
function Za(i, t) {
  return i.distance - t.distance;
}
function Xs(i, t, e, n) {
  let r = true;
  if (i.layers.test(t.layers) && i.raycast(t, e) === false && (r = false), r === true && n === true) {
    const s = i.children;
    for (let a = 0, o = s.length; a < o; a++) Xs(s[a], t, e, true);
  }
}
class $a {
  constructor(t = 1, e = 0, n = 0) {
    this.radius = t, this.phi = e, this.theta = n;
  }
  set(t, e, n) {
    return this.radius = t, this.phi = e, this.theta = n, this;
  }
  copy(t) {
    return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this;
  }
  makeSafe() {
    return this.phi = Ot(this.phi, 1e-6, Math.PI - 1e-6), this;
  }
  setFromVector3(t) {
    return this.setFromCartesianCoords(t.x, t.y, t.z);
  }
  setFromCartesianCoords(t, e, n) {
    return this.radius = Math.sqrt(t * t + e * e + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, n), this.phi = Math.acos(Ot(e / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class sh extends Fn {
  constructor(t, e = null) {
    super(), this.object = t, this.domElement = e, this.enabled = true, this.state = -1, this.keys = {}, this.mouseButtons = { LEFT: null, MIDDLE: null, RIGHT: null }, this.touches = { ONE: null, TWO: null };
  }
  connect(t) {
    if (t === void 0) {
      console.warn("THREE.Controls: connect() now requires an element.");
      return;
    }
    this.domElement !== null && this.disconnect(), this.domElement = t;
  }
  disconnect() {
  }
  dispose() {
  }
  update() {
  }
}
function Ja(i, t, e, n) {
  const r = ah(n);
  switch (e) {
    case Io:
      return i * t;
    case $s:
      return i * t / r.components * r.byteLength;
    case Js:
      return i * t / r.components * r.byteLength;
    case Fo:
      return i * t * 2 / r.components * r.byteLength;
    case Qs:
      return i * t * 2 / r.components * r.byteLength;
    case No:
      return i * t * 3 / r.components * r.byteLength;
    case Ve:
      return i * t * 4 / r.components * r.byteLength;
    case ta:
      return i * t * 4 / r.components * r.byteLength;
    case or:
    case lr:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case cr:
    case hr:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case gs:
    case xs:
      return Math.max(i, 16) * Math.max(t, 8) / 4;
    case _s:
    case vs:
      return Math.max(i, 8) * Math.max(t, 8) / 2;
    case Ms:
    case Ss:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case Es:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case ys:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case Ts:
      return Math.floor((i + 4) / 5) * Math.floor((t + 3) / 4) * 16;
    case bs:
      return Math.floor((i + 4) / 5) * Math.floor((t + 4) / 5) * 16;
    case As:
      return Math.floor((i + 5) / 6) * Math.floor((t + 4) / 5) * 16;
    case ws:
      return Math.floor((i + 5) / 6) * Math.floor((t + 5) / 6) * 16;
    case Rs:
      return Math.floor((i + 7) / 8) * Math.floor((t + 4) / 5) * 16;
    case Cs:
      return Math.floor((i + 7) / 8) * Math.floor((t + 5) / 6) * 16;
    case Ps:
      return Math.floor((i + 7) / 8) * Math.floor((t + 7) / 8) * 16;
    case Ds:
      return Math.floor((i + 9) / 10) * Math.floor((t + 4) / 5) * 16;
    case Ls:
      return Math.floor((i + 9) / 10) * Math.floor((t + 5) / 6) * 16;
    case Us:
      return Math.floor((i + 9) / 10) * Math.floor((t + 7) / 8) * 16;
    case Is:
      return Math.floor((i + 9) / 10) * Math.floor((t + 9) / 10) * 16;
    case Ns:
      return Math.floor((i + 11) / 12) * Math.floor((t + 9) / 10) * 16;
    case Fs:
      return Math.floor((i + 11) / 12) * Math.floor((t + 11) / 12) * 16;
    case Os:
    case Bs:
    case zs:
      return Math.ceil(i / 4) * Math.ceil(t / 4) * 16;
    case Hs:
    case ks:
      return Math.ceil(i / 4) * Math.ceil(t / 4) * 8;
    case Vs:
    case Gs:
      return Math.ceil(i / 4) * Math.ceil(t / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${e} format.`);
}
function ah(i) {
  switch (i) {
    case je:
    case Po:
      return { byteLength: 1, components: 1 };
    case wi:
    case Do:
    case Li:
      return { byteLength: 2, components: 1 };
    case js:
    case Zs:
      return { byteLength: 2, components: 4 };
    case Un:
    case Ks:
    case qe:
      return { byteLength: 4, components: 1 };
    case Lo:
    case Uo:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${i}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: qs } }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = qs);
/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/
function Zo() {
  let i = null, t = false, e = null, n = null;
  function r(s, a) {
    e(s, a), n = i.requestAnimationFrame(r);
  }
  return { start: function() {
    t !== true && e !== null && (n = i.requestAnimationFrame(r), t = true);
  }, stop: function() {
    i.cancelAnimationFrame(n), t = false;
  }, setAnimationLoop: function(s) {
    e = s;
  }, setContext: function(s) {
    i = s;
  } };
}
function oh(i) {
  const t = /* @__PURE__ */ new WeakMap();
  function e(o, c) {
    const l = o.array, u = o.usage, d = l.byteLength, f = i.createBuffer();
    i.bindBuffer(c, f), i.bufferData(c, l, u), o.onUploadCallback();
    let p;
    if (l instanceof Float32Array) p = i.FLOAT;
    else if (typeof Float16Array < "u" && l instanceof Float16Array) p = i.HALF_FLOAT;
    else if (l instanceof Uint16Array) o.isFloat16BufferAttribute ? p = i.HALF_FLOAT : p = i.UNSIGNED_SHORT;
    else if (l instanceof Int16Array) p = i.SHORT;
    else if (l instanceof Uint32Array) p = i.UNSIGNED_INT;
    else if (l instanceof Int32Array) p = i.INT;
    else if (l instanceof Int8Array) p = i.BYTE;
    else if (l instanceof Uint8Array) p = i.UNSIGNED_BYTE;
    else if (l instanceof Uint8ClampedArray) p = i.UNSIGNED_BYTE;
    else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + l);
    return { buffer: f, type: p, bytesPerElement: l.BYTES_PER_ELEMENT, version: o.version, size: d };
  }
  function n(o, c, l) {
    const u = c.array, d = c.updateRanges;
    if (i.bindBuffer(l, o), d.length === 0) i.bufferSubData(l, 0, u);
    else {
      d.sort((p, g) => p.start - g.start);
      let f = 0;
      for (let p = 1; p < d.length; p++) {
        const g = d[f], M = d[p];
        M.start <= g.start + g.count + 1 ? g.count = Math.max(g.count, M.start + M.count - g.start) : (++f, d[f] = M);
      }
      d.length = f + 1;
      for (let p = 0, g = d.length; p < g; p++) {
        const M = d[p];
        i.bufferSubData(l, M.start * u.BYTES_PER_ELEMENT, u, M.start, M.count);
      }
      c.clearUpdateRanges();
    }
    c.onUploadCallback();
  }
  function r(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), t.get(o);
  }
  function s(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const c = t.get(o);
    c && (i.deleteBuffer(c.buffer), t.delete(o));
  }
  function a(o, c) {
    if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
      const u = t.get(o);
      (!u || u.version < o.version) && t.set(o, { buffer: o.buffer, type: o.type, bytesPerElement: o.elementSize, version: o.version });
      return;
    }
    const l = t.get(o);
    if (l === void 0) t.set(o, e(o, c));
    else if (l.version < o.version) {
      if (l.size !== o.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(l.buffer, o, c), l.version = o.version;
    }
  }
  return { get: r, remove: s, update: a };
}
var lh = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, ch = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, hh = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, uh = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, dh = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, fh = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, ph = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, mh = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, _h = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`, gh = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, vh = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, xh = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Mh = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, Sh = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, Eh = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, yh = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, Th = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, bh = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Ah = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, wh = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Rh = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Ch = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, Ph = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`, Dh = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, Lh = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, Uh = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, Ih = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Nh = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Fh = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Oh = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Bh = "gl_FragColor = linearToOutputTexel( gl_FragColor );", zh = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Hh = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, kh = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Vh = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, Gh = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Wh = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, Xh = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Yh = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, qh = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Kh = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, jh = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, Zh = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, $h = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Jh = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Qh = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, tu = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, eu = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, nu = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, iu = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, ru = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, su = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, au = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, ou = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, lu = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, cu = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, hu = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, uu = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, du = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, fu = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, pu = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, mu = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, _u = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, gu = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, vu = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, xu = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Mu = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, Su = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Eu = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, yu = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, Tu = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, bu = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, Au = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, wu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Ru = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Cu = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Pu = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, Du = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, Lu = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Uu = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Iu = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Nu = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Fu = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, Ou = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Bu = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, zu = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Hu = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, ku = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Vu = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Gu = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`, Wu = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, Xu = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, Yu = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, qu = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Ku = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, ju = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Zu = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, $u = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Ju = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Qu = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, td = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, ed = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, nd = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, id = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, rd = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, sd = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, ad = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const od = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, ld = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, cd = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, hd = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, ud = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, dd = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, fd = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, pd = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, md = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, _d = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, gd = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, vd = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, xd = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Md = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Sd = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, Ed = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, yd = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Td = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, bd = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Ad = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, wd = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Rd = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, Cd = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Pd = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Dd = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, Ld = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Ud = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Id = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Nd = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Fd = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Od = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Bd = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, zd = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Hd = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Ft = { alphahash_fragment: lh, alphahash_pars_fragment: ch, alphamap_fragment: hh, alphamap_pars_fragment: uh, alphatest_fragment: dh, alphatest_pars_fragment: fh, aomap_fragment: ph, aomap_pars_fragment: mh, batching_pars_vertex: _h, batching_vertex: gh, begin_vertex: vh, beginnormal_vertex: xh, bsdfs: Mh, iridescence_fragment: Sh, bumpmap_pars_fragment: Eh, clipping_planes_fragment: yh, clipping_planes_pars_fragment: Th, clipping_planes_pars_vertex: bh, clipping_planes_vertex: Ah, color_fragment: wh, color_pars_fragment: Rh, color_pars_vertex: Ch, color_vertex: Ph, common: Dh, cube_uv_reflection_fragment: Lh, defaultnormal_vertex: Uh, displacementmap_pars_vertex: Ih, displacementmap_vertex: Nh, emissivemap_fragment: Fh, emissivemap_pars_fragment: Oh, colorspace_fragment: Bh, colorspace_pars_fragment: zh, envmap_fragment: Hh, envmap_common_pars_fragment: kh, envmap_pars_fragment: Vh, envmap_pars_vertex: Gh, envmap_physical_pars_fragment: tu, envmap_vertex: Wh, fog_vertex: Xh, fog_pars_vertex: Yh, fog_fragment: qh, fog_pars_fragment: Kh, gradientmap_pars_fragment: jh, lightmap_pars_fragment: Zh, lights_lambert_fragment: $h, lights_lambert_pars_fragment: Jh, lights_pars_begin: Qh, lights_toon_fragment: eu, lights_toon_pars_fragment: nu, lights_phong_fragment: iu, lights_phong_pars_fragment: ru, lights_physical_fragment: su, lights_physical_pars_fragment: au, lights_fragment_begin: ou, lights_fragment_maps: lu, lights_fragment_end: cu, logdepthbuf_fragment: hu, logdepthbuf_pars_fragment: uu, logdepthbuf_pars_vertex: du, logdepthbuf_vertex: fu, map_fragment: pu, map_pars_fragment: mu, map_particle_fragment: _u, map_particle_pars_fragment: gu, metalnessmap_fragment: vu, metalnessmap_pars_fragment: xu, morphinstance_vertex: Mu, morphcolor_vertex: Su, morphnormal_vertex: Eu, morphtarget_pars_vertex: yu, morphtarget_vertex: Tu, normal_fragment_begin: bu, normal_fragment_maps: Au, normal_pars_fragment: wu, normal_pars_vertex: Ru, normal_vertex: Cu, normalmap_pars_fragment: Pu, clearcoat_normal_fragment_begin: Du, clearcoat_normal_fragment_maps: Lu, clearcoat_pars_fragment: Uu, iridescence_pars_fragment: Iu, opaque_fragment: Nu, packing: Fu, premultiplied_alpha_fragment: Ou, project_vertex: Bu, dithering_fragment: zu, dithering_pars_fragment: Hu, roughnessmap_fragment: ku, roughnessmap_pars_fragment: Vu, shadowmap_pars_fragment: Gu, shadowmap_pars_vertex: Wu, shadowmap_vertex: Xu, shadowmask_pars_fragment: Yu, skinbase_vertex: qu, skinning_pars_vertex: Ku, skinning_vertex: ju, skinnormal_vertex: Zu, specularmap_fragment: $u, specularmap_pars_fragment: Ju, tonemapping_fragment: Qu, tonemapping_pars_fragment: td, transmission_fragment: ed, transmission_pars_fragment: nd, uv_pars_fragment: id, uv_pars_vertex: rd, uv_vertex: sd, worldpos_vertex: ad, background_vert: od, background_frag: ld, backgroundCube_vert: cd, backgroundCube_frag: hd, cube_vert: ud, cube_frag: dd, depth_vert: fd, depth_frag: pd, distanceRGBA_vert: md, distanceRGBA_frag: _d, equirect_vert: gd, equirect_frag: vd, linedashed_vert: xd, linedashed_frag: Md, meshbasic_vert: Sd, meshbasic_frag: Ed, meshlambert_vert: yd, meshlambert_frag: Td, meshmatcap_vert: bd, meshmatcap_frag: Ad, meshnormal_vert: wd, meshnormal_frag: Rd, meshphong_vert: Cd, meshphong_frag: Pd, meshphysical_vert: Dd, meshphysical_frag: Ld, meshtoon_vert: Ud, meshtoon_frag: Id, points_vert: Nd, points_frag: Fd, shadow_vert: Od, shadow_frag: Bd, sprite_vert: zd, sprite_frag: Hd }, rt = { common: { diffuse: { value: new Ht(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new It() }, alphaMap: { value: null }, alphaMapTransform: { value: new It() }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new It() } }, envmap: { envMap: { value: null }, envMapRotation: { value: new It() }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new It() } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new It() } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new It() }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new It() }, normalScale: { value: new Pt(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new It() }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new It() } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new It() } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new It() } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new Ht(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new Ht(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new It() }, alphaTest: { value: 0 }, uvTransform: { value: new It() } }, sprite: { diffuse: { value: new Ht(16777215) }, opacity: { value: 1 }, center: { value: new Pt(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new It() }, alphaMap: { value: null }, alphaMapTransform: { value: new It() }, alphaTest: { value: 0 } } }, Xe = { basic: { uniforms: Ee([rt.common, rt.specularmap, rt.envmap, rt.aomap, rt.lightmap, rt.fog]), vertexShader: Ft.meshbasic_vert, fragmentShader: Ft.meshbasic_frag }, lambert: { uniforms: Ee([rt.common, rt.specularmap, rt.envmap, rt.aomap, rt.lightmap, rt.emissivemap, rt.bumpmap, rt.normalmap, rt.displacementmap, rt.fog, rt.lights, { emissive: { value: new Ht(0) } }]), vertexShader: Ft.meshlambert_vert, fragmentShader: Ft.meshlambert_frag }, phong: { uniforms: Ee([rt.common, rt.specularmap, rt.envmap, rt.aomap, rt.lightmap, rt.emissivemap, rt.bumpmap, rt.normalmap, rt.displacementmap, rt.fog, rt.lights, { emissive: { value: new Ht(0) }, specular: { value: new Ht(1118481) }, shininess: { value: 30 } }]), vertexShader: Ft.meshphong_vert, fragmentShader: Ft.meshphong_frag }, standard: { uniforms: Ee([rt.common, rt.envmap, rt.aomap, rt.lightmap, rt.emissivemap, rt.bumpmap, rt.normalmap, rt.displacementmap, rt.roughnessmap, rt.metalnessmap, rt.fog, rt.lights, { emissive: { value: new Ht(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: Ft.meshphysical_vert, fragmentShader: Ft.meshphysical_frag }, toon: { uniforms: Ee([rt.common, rt.aomap, rt.lightmap, rt.emissivemap, rt.bumpmap, rt.normalmap, rt.displacementmap, rt.gradientmap, rt.fog, rt.lights, { emissive: { value: new Ht(0) } }]), vertexShader: Ft.meshtoon_vert, fragmentShader: Ft.meshtoon_frag }, matcap: { uniforms: Ee([rt.common, rt.bumpmap, rt.normalmap, rt.displacementmap, rt.fog, { matcap: { value: null } }]), vertexShader: Ft.meshmatcap_vert, fragmentShader: Ft.meshmatcap_frag }, points: { uniforms: Ee([rt.points, rt.fog]), vertexShader: Ft.points_vert, fragmentShader: Ft.points_frag }, dashed: { uniforms: Ee([rt.common, rt.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Ft.linedashed_vert, fragmentShader: Ft.linedashed_frag }, depth: { uniforms: Ee([rt.common, rt.displacementmap]), vertexShader: Ft.depth_vert, fragmentShader: Ft.depth_frag }, normal: { uniforms: Ee([rt.common, rt.bumpmap, rt.normalmap, rt.displacementmap, { opacity: { value: 1 } }]), vertexShader: Ft.meshnormal_vert, fragmentShader: Ft.meshnormal_frag }, sprite: { uniforms: Ee([rt.sprite, rt.fog]), vertexShader: Ft.sprite_vert, fragmentShader: Ft.sprite_frag }, background: { uniforms: { uvTransform: { value: new It() }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: Ft.background_vert, fragmentShader: Ft.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new It() } }, vertexShader: Ft.backgroundCube_vert, fragmentShader: Ft.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: Ft.cube_vert, fragmentShader: Ft.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Ft.equirect_vert, fragmentShader: Ft.equirect_frag }, distanceRGBA: { uniforms: Ee([rt.common, rt.displacementmap, { referencePosition: { value: new U() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Ft.distanceRGBA_vert, fragmentShader: Ft.distanceRGBA_frag }, shadow: { uniforms: Ee([rt.lights, rt.fog, { color: { value: new Ht(0) }, opacity: { value: 1 } }]), vertexShader: Ft.shadow_vert, fragmentShader: Ft.shadow_frag } };
Xe.physical = { uniforms: Ee([Xe.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new It() }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new It() }, clearcoatNormalScale: { value: new Pt(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new It() }, dispersion: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new It() }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new It() }, sheen: { value: 0 }, sheenColor: { value: new Ht(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new It() }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new It() }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new It() }, transmissionSamplerSize: { value: new Pt() }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new It() }, attenuationDistance: { value: 0 }, attenuationColor: { value: new Ht(0) }, specularColor: { value: new Ht(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new It() }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new It() }, anisotropyVector: { value: new Pt() }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new It() } }]), vertexShader: Ft.meshphysical_vert, fragmentShader: Ft.meshphysical_frag };
const ir = { r: 0, b: 0, g: 0 }, bn = new Ge(), kd = new Qt();
function Vd(i, t, e, n, r, s, a) {
  const o = new Ht(0);
  let c = s === true ? 0 : 1, l, u, d = null, f = 0, p = null;
  function g(T) {
    let E = T.isScene === true ? T.background : null;
    return E && E.isTexture && (E = (T.backgroundBlurriness > 0 ? e : t).get(E)), E;
  }
  function M(T) {
    let E = false;
    const C = g(T);
    C === null ? h(o, c) : C && C.isColor && (h(C, 1), E = true);
    const A = i.xr.getEnvironmentBlendMode();
    A === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : A === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (i.autoClear || E) && (n.buffers.depth.setTest(true), n.buffers.depth.setMask(true), n.buffers.color.setMask(true), i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil));
  }
  function m(T, E) {
    const C = g(E);
    C && (C.isCubeTexture || C.mapping === xr) ? (u === void 0 && (u = new we(new Ii(1, 1, 1), new vn({ name: "BackgroundCubeMaterial", uniforms: di(Xe.backgroundCube.uniforms), vertexShader: Xe.backgroundCube.vertexShader, fragmentShader: Xe.backgroundCube.fragmentShader, side: Re, depthTest: false, depthWrite: false, fog: false, allowOverride: false })), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function(A, P, F) {
      this.matrixWorld.copyPosition(F.matrixWorld);
    }, Object.defineProperty(u.material, "envMap", { get: function() {
      return this.uniforms.envMap.value;
    } }), r.update(u)), bn.copy(E.backgroundRotation), bn.x *= -1, bn.y *= -1, bn.z *= -1, C.isCubeTexture && C.isRenderTargetTexture === false && (bn.y *= -1, bn.z *= -1), u.material.uniforms.envMap.value = C, u.material.uniforms.flipEnvMap.value = C.isCubeTexture && C.isRenderTargetTexture === false ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = E.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = E.backgroundIntensity, u.material.uniforms.backgroundRotation.value.setFromMatrix4(kd.makeRotationFromEuler(bn)), u.material.toneMapped = Gt.getTransfer(C.colorSpace) !== qt, (d !== C || f !== C.version || p !== i.toneMapping) && (u.material.needsUpdate = true, d = C, f = C.version, p = i.toneMapping), u.layers.enableAll(), T.unshift(u, u.geometry, u.material, 0, 0, null)) : C && C.isTexture && (l === void 0 && (l = new we(new Bn(2, 2), new vn({ name: "BackgroundMaterial", uniforms: di(Xe.background.uniforms), vertexShader: Xe.background.vertexShader, fragmentShader: Xe.background.fragmentShader, side: gn, depthTest: false, depthWrite: false, fog: false, allowOverride: false })), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", { get: function() {
      return this.uniforms.t2D.value;
    } }), r.update(l)), l.material.uniforms.t2D.value = C, l.material.uniforms.backgroundIntensity.value = E.backgroundIntensity, l.material.toneMapped = Gt.getTransfer(C.colorSpace) !== qt, C.matrixAutoUpdate === true && C.updateMatrix(), l.material.uniforms.uvTransform.value.copy(C.matrix), (d !== C || f !== C.version || p !== i.toneMapping) && (l.material.needsUpdate = true, d = C, f = C.version, p = i.toneMapping), l.layers.enableAll(), T.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function h(T, E) {
    T.getRGB(ir, Go(i)), n.buffers.color.setClear(ir.r, ir.g, ir.b, E, a);
  }
  function w() {
    u !== void 0 && (u.geometry.dispose(), u.material.dispose(), u = void 0), l !== void 0 && (l.geometry.dispose(), l.material.dispose(), l = void 0);
  }
  return { getClearColor: function() {
    return o;
  }, setClearColor: function(T, E = 1) {
    o.set(T), c = E, h(o, c);
  }, getClearAlpha: function() {
    return c;
  }, setClearAlpha: function(T) {
    c = T, h(o, c);
  }, render: M, addToRenderList: m, dispose: w };
}
function Gd(i, t) {
  const e = i.getParameter(i.MAX_VERTEX_ATTRIBS), n = {}, r = f(null);
  let s = r, a = false;
  function o(x, D, z, V, X) {
    let K = false;
    const W = d(V, z, D);
    s !== W && (s = W, l(s.object)), K = p(x, V, z, X), K && g(x, V, z, X), X !== null && t.update(X, i.ELEMENT_ARRAY_BUFFER), (K || a) && (a = false, E(x, D, z, V), X !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t.get(X).buffer));
  }
  function c() {
    return i.createVertexArray();
  }
  function l(x) {
    return i.bindVertexArray(x);
  }
  function u(x) {
    return i.deleteVertexArray(x);
  }
  function d(x, D, z) {
    const V = z.wireframe === true;
    let X = n[x.id];
    X === void 0 && (X = {}, n[x.id] = X);
    let K = X[D.id];
    K === void 0 && (K = {}, X[D.id] = K);
    let W = K[V];
    return W === void 0 && (W = f(c()), K[V] = W), W;
  }
  function f(x) {
    const D = [], z = [], V = [];
    for (let X = 0; X < e; X++) D[X] = 0, z[X] = 0, V[X] = 0;
    return { geometry: null, program: null, wireframe: false, newAttributes: D, enabledAttributes: z, attributeDivisors: V, object: x, attributes: {}, index: null };
  }
  function p(x, D, z, V) {
    const X = s.attributes, K = D.attributes;
    let W = 0;
    const et = z.getAttributes();
    for (const H in et) if (et[H].location >= 0) {
      const ct = X[H];
      let Et = K[H];
      if (Et === void 0 && (H === "instanceMatrix" && x.instanceMatrix && (Et = x.instanceMatrix), H === "instanceColor" && x.instanceColor && (Et = x.instanceColor)), ct === void 0 || ct.attribute !== Et || Et && ct.data !== Et.data) return true;
      W++;
    }
    return s.attributesNum !== W || s.index !== V;
  }
  function g(x, D, z, V) {
    const X = {}, K = D.attributes;
    let W = 0;
    const et = z.getAttributes();
    for (const H in et) if (et[H].location >= 0) {
      let ct = K[H];
      ct === void 0 && (H === "instanceMatrix" && x.instanceMatrix && (ct = x.instanceMatrix), H === "instanceColor" && x.instanceColor && (ct = x.instanceColor));
      const Et = {};
      Et.attribute = ct, ct && ct.data && (Et.data = ct.data), X[H] = Et, W++;
    }
    s.attributes = X, s.attributesNum = W, s.index = V;
  }
  function M() {
    const x = s.newAttributes;
    for (let D = 0, z = x.length; D < z; D++) x[D] = 0;
  }
  function m(x) {
    h(x, 0);
  }
  function h(x, D) {
    const z = s.newAttributes, V = s.enabledAttributes, X = s.attributeDivisors;
    z[x] = 1, V[x] === 0 && (i.enableVertexAttribArray(x), V[x] = 1), X[x] !== D && (i.vertexAttribDivisor(x, D), X[x] = D);
  }
  function w() {
    const x = s.newAttributes, D = s.enabledAttributes;
    for (let z = 0, V = D.length; z < V; z++) D[z] !== x[z] && (i.disableVertexAttribArray(z), D[z] = 0);
  }
  function T(x, D, z, V, X, K, W) {
    W === true ? i.vertexAttribIPointer(x, D, z, X, K) : i.vertexAttribPointer(x, D, z, V, X, K);
  }
  function E(x, D, z, V) {
    M();
    const X = V.attributes, K = z.getAttributes(), W = D.defaultAttributeValues;
    for (const et in K) {
      const H = K[et];
      if (H.location >= 0) {
        let st = X[et];
        if (st === void 0 && (et === "instanceMatrix" && x.instanceMatrix && (st = x.instanceMatrix), et === "instanceColor" && x.instanceColor && (st = x.instanceColor)), st !== void 0) {
          const ct = st.normalized, Et = st.itemSize, Bt = t.get(st);
          if (Bt === void 0) continue;
          const $t = Bt.buffer, ee = Bt.type, Wt = Bt.bytesPerElement, Y = ee === i.INT || ee === i.UNSIGNED_INT || st.gpuType === Ks;
          if (st.isInterleavedBufferAttribute) {
            const Z = st.data, dt = Z.stride, Ct = st.offset;
            if (Z.isInstancedInterleavedBuffer) {
              for (let St = 0; St < H.locationSize; St++) h(H.location + St, Z.meshPerAttribute);
              x.isInstancedMesh !== true && V._maxInstanceCount === void 0 && (V._maxInstanceCount = Z.meshPerAttribute * Z.count);
            } else for (let St = 0; St < H.locationSize; St++) m(H.location + St);
            i.bindBuffer(i.ARRAY_BUFFER, $t);
            for (let St = 0; St < H.locationSize; St++) T(H.location + St, Et / H.locationSize, ee, ct, dt * Wt, (Ct + Et / H.locationSize * St) * Wt, Y);
          } else {
            if (st.isInstancedBufferAttribute) {
              for (let Z = 0; Z < H.locationSize; Z++) h(H.location + Z, st.meshPerAttribute);
              x.isInstancedMesh !== true && V._maxInstanceCount === void 0 && (V._maxInstanceCount = st.meshPerAttribute * st.count);
            } else for (let Z = 0; Z < H.locationSize; Z++) m(H.location + Z);
            i.bindBuffer(i.ARRAY_BUFFER, $t);
            for (let Z = 0; Z < H.locationSize; Z++) T(H.location + Z, Et / H.locationSize, ee, ct, Et * Wt, Et / H.locationSize * Z * Wt, Y);
          }
        } else if (W !== void 0) {
          const ct = W[et];
          if (ct !== void 0) switch (ct.length) {
            case 2:
              i.vertexAttrib2fv(H.location, ct);
              break;
            case 3:
              i.vertexAttrib3fv(H.location, ct);
              break;
            case 4:
              i.vertexAttrib4fv(H.location, ct);
              break;
            default:
              i.vertexAttrib1fv(H.location, ct);
          }
        }
      }
    }
    w();
  }
  function C() {
    F();
    for (const x in n) {
      const D = n[x];
      for (const z in D) {
        const V = D[z];
        for (const X in V) u(V[X].object), delete V[X];
        delete D[z];
      }
      delete n[x];
    }
  }
  function A(x) {
    if (n[x.id] === void 0) return;
    const D = n[x.id];
    for (const z in D) {
      const V = D[z];
      for (const X in V) u(V[X].object), delete V[X];
      delete D[z];
    }
    delete n[x.id];
  }
  function P(x) {
    for (const D in n) {
      const z = n[D];
      if (z[x.id] === void 0) continue;
      const V = z[x.id];
      for (const X in V) u(V[X].object), delete V[X];
      delete z[x.id];
    }
  }
  function F() {
    S(), a = true, s !== r && (s = r, l(s.object));
  }
  function S() {
    r.geometry = null, r.program = null, r.wireframe = false;
  }
  return { setup: o, reset: F, resetDefaultState: S, dispose: C, releaseStatesOfGeometry: A, releaseStatesOfProgram: P, initAttributes: M, enableAttribute: m, disableUnusedAttributes: w };
}
function Wd(i, t, e) {
  let n;
  function r(l) {
    n = l;
  }
  function s(l, u) {
    i.drawArrays(n, l, u), e.update(u, n, 1);
  }
  function a(l, u, d) {
    d !== 0 && (i.drawArraysInstanced(n, l, u, d), e.update(u, n, d));
  }
  function o(l, u, d) {
    if (d === 0) return;
    t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, l, 0, u, 0, d);
    let p = 0;
    for (let g = 0; g < d; g++) p += u[g];
    e.update(p, n, 1);
  }
  function c(l, u, d, f) {
    if (d === 0) return;
    const p = t.get("WEBGL_multi_draw");
    if (p === null) for (let g = 0; g < l.length; g++) a(l[g], u[g], f[g]);
    else {
      p.multiDrawArraysInstancedWEBGL(n, l, 0, u, 0, f, 0, d);
      let g = 0;
      for (let M = 0; M < d; M++) g += u[M] * f[M];
      e.update(g, n, 1);
    }
  }
  this.setMode = r, this.render = s, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = c;
}
function Xd(i, t, e, n) {
  let r;
  function s() {
    if (r !== void 0) return r;
    if (t.has("EXT_texture_filter_anisotropic") === true) {
      const P = t.get("EXT_texture_filter_anisotropic");
      r = i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else r = 0;
    return r;
  }
  function a(P) {
    return !(P !== Ve && n.convert(P) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(P) {
    const F = P === Li && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
    return !(P !== je && n.convert(P) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) && P !== qe && !F);
  }
  function c(P) {
    if (P === "highp") {
      if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0) return "highp";
      P = "mediump";
    }
    return P === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let l = e.precision !== void 0 ? e.precision : "highp";
  const u = c(l);
  u !== l && (console.warn("THREE.WebGLRenderer:", l, "not supported, using", u, "instead."), l = u);
  const d = e.logarithmicDepthBuffer === true, f = e.reversedDepthBuffer === true && t.has("EXT_clip_control"), p = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), g = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), M = i.getParameter(i.MAX_TEXTURE_SIZE), m = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), h = i.getParameter(i.MAX_VERTEX_ATTRIBS), w = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), T = i.getParameter(i.MAX_VARYING_VECTORS), E = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), C = g > 0, A = i.getParameter(i.MAX_SAMPLES);
  return { isWebGL2: true, getMaxAnisotropy: s, getMaxPrecision: c, textureFormatReadable: a, textureTypeReadable: o, precision: l, logarithmicDepthBuffer: d, reversedDepthBuffer: f, maxTextures: p, maxVertexTextures: g, maxTextureSize: M, maxCubemapSize: m, maxAttributes: h, maxVertexUniforms: w, maxVaryings: T, maxFragmentUniforms: E, vertexTextures: C, maxSamples: A };
}
function Yd(i) {
  const t = this;
  let e = null, n = 0, r = false, s = false;
  const a = new fn(), o = new It(), c = { value: null, needsUpdate: false };
  this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(d, f) {
    const p = d.length !== 0 || f || n !== 0 || r;
    return r = f, n = d.length, p;
  }, this.beginShadows = function() {
    s = true, u(null);
  }, this.endShadows = function() {
    s = false;
  }, this.setGlobalState = function(d, f) {
    e = u(d, f, 0);
  }, this.setState = function(d, f, p) {
    const g = d.clippingPlanes, M = d.clipIntersection, m = d.clipShadows, h = i.get(d);
    if (!r || g === null || g.length === 0 || s && !m) s ? u(null) : l();
    else {
      const w = s ? 0 : n, T = w * 4;
      let E = h.clippingState || null;
      c.value = E, E = u(g, f, T, p);
      for (let C = 0; C !== T; ++C) E[C] = e[C];
      h.clippingState = E, this.numIntersection = M ? this.numPlanes : 0, this.numPlanes += w;
    }
  };
  function l() {
    c.value !== e && (c.value = e, c.needsUpdate = n > 0), t.numPlanes = n, t.numIntersection = 0;
  }
  function u(d, f, p, g) {
    const M = d !== null ? d.length : 0;
    let m = null;
    if (M !== 0) {
      if (m = c.value, g !== true || m === null) {
        const h = p + M * 4, w = f.matrixWorldInverse;
        o.getNormalMatrix(w), (m === null || m.length < h) && (m = new Float32Array(h));
        for (let T = 0, E = p; T !== M; ++T, E += 4) a.copy(d[T]).applyMatrix4(w, o), a.normal.toArray(m, E), m[E + 3] = a.constant;
      }
      c.value = m, c.needsUpdate = true;
    }
    return t.numPlanes = M, t.numIntersection = 0, m;
  }
}
function qd(i) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(a, o) {
    return o === ds ? a.mapping = li : o === fs && (a.mapping = ci), a;
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === ds || o === fs) if (t.has(a)) {
        const c = t.get(a).texture;
        return e(c, a.mapping);
      } else {
        const c = a.image;
        if (c && c.height > 0) {
          const l = new Hc(c.height);
          return l.fromEquirectangularTexture(i, a), t.set(a, l), a.addEventListener("dispose", r), e(l.texture, a.mapping);
        } else return null;
      }
    }
    return a;
  }
  function r(a) {
    const o = a.target;
    o.removeEventListener("dispose", r);
    const c = t.get(o);
    c !== void 0 && (t.delete(o), c.dispose());
  }
  function s() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return { get: n, dispose: s };
}
const ii = 4, Qa = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], Cn = 20, jr = new eh(), to = new Ht();
let Zr = null, $r = 0, Jr = 0, Qr = false;
const wn = (1 + Math.sqrt(5)) / 2, ti = 1 / wn, eo = [new U(-wn, ti, 0), new U(wn, ti, 0), new U(-ti, 0, wn), new U(ti, 0, wn), new U(0, wn, -ti), new U(0, wn, ti), new U(-1, 1, -1), new U(1, 1, -1), new U(-1, 1, 1), new U(1, 1, 1)], Kd = new U();
class no {
  constructor(t) {
    this._renderer = t, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  fromScene(t, e = 0, n = 0.1, r = 100, s = {}) {
    const { size: a = 256, position: o = Kd } = s;
    Zr = this._renderer.getRenderTarget(), $r = this._renderer.getActiveCubeFace(), Jr = this._renderer.getActiveMipmapLevel(), Qr = this._renderer.xr.enabled, this._renderer.xr.enabled = false, this._setSize(a);
    const c = this._allocateTargets();
    return c.depthBuffer = true, this._sceneToCubeUV(t, n, r, c, o), e > 0 && this._blur(c, 0, 0, e), this._applyPMREM(c), this._cleanup(c), c;
  }
  fromEquirectangular(t, e = null) {
    return this._fromTexture(t, e);
  }
  fromCubemap(t, e = null) {
    return this._fromTexture(t, e);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = so(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = ro(), this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(t) {
    this._lodMax = Math.floor(Math.log2(t)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let t = 0; t < this._lodPlanes.length; t++) this._lodPlanes[t].dispose();
  }
  _cleanup(t) {
    this._renderer.setRenderTarget(Zr, $r, Jr), this._renderer.xr.enabled = Qr, t.scissorTest = false, rr(t, 0, 0, t.width, t.height);
  }
  _fromTexture(t, e) {
    t.mapping === li || t.mapping === ci ? this._setSize(t.image.length === 0 ? 16 : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4), Zr = this._renderer.getRenderTarget(), $r = this._renderer.getActiveCubeFace(), Jr = this._renderer.getActiveMipmapLevel(), Qr = this._renderer.xr.enabled, this._renderer.xr.enabled = false;
    const n = e || this._allocateTargets();
    return this._textureToCubeUV(t, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const t = 3 * Math.max(this._cubeSize, 112), e = 4 * this._cubeSize, n = { magFilter: Ye, minFilter: Ye, generateMipmaps: false, type: Li, format: Ve, colorSpace: hi, depthBuffer: false }, r = io(t, e, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== t || this._pingPongRenderTarget.height !== e) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = io(t, e, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = jd(s)), this._blurMaterial = Zd(s, t, e);
    }
    return r;
  }
  _compileMaterial(t) {
    const e = new we(this._lodPlanes[0], t);
    this._renderer.compile(e, jr);
  }
  _sceneToCubeUV(t, e, n, r, s) {
    const c = new Ae(90, 1, e, n), l = [1, -1, 1, 1, 1, 1], u = [1, 1, 1, -1, -1, -1], d = this._renderer, f = d.autoClear, p = d.toneMapping;
    d.getClearColor(to), d.toneMapping = _n, d.autoClear = false, d.state.buffers.depth.getReversed() && (d.setRenderTarget(r), d.clearDepth(), d.setRenderTarget(null));
    const M = new Mr({ name: "PMREM.Background", side: Re, depthWrite: false, depthTest: false }), m = new we(new Ii(), M);
    let h = false;
    const w = t.background;
    w ? w.isColor && (M.color.copy(w), t.background = null, h = true) : (M.color.copy(to), h = true);
    for (let T = 0; T < 6; T++) {
      const E = T % 3;
      E === 0 ? (c.up.set(0, l[T], 0), c.position.set(s.x, s.y, s.z), c.lookAt(s.x + u[T], s.y, s.z)) : E === 1 ? (c.up.set(0, 0, l[T]), c.position.set(s.x, s.y, s.z), c.lookAt(s.x, s.y + u[T], s.z)) : (c.up.set(0, l[T], 0), c.position.set(s.x, s.y, s.z), c.lookAt(s.x, s.y, s.z + u[T]));
      const C = this._cubeSize;
      rr(r, E * C, T > 2 ? C : 0, C, C), d.setRenderTarget(r), h && d.render(m, c), d.render(t, c);
    }
    m.geometry.dispose(), m.material.dispose(), d.toneMapping = p, d.autoClear = f, t.background = w;
  }
  _textureToCubeUV(t, e) {
    const n = this._renderer, r = t.mapping === li || t.mapping === ci;
    r ? (this._cubemapMaterial === null && (this._cubemapMaterial = so()), this._cubemapMaterial.uniforms.flipEnvMap.value = t.isRenderTargetTexture === false ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = ro());
    const s = r ? this._cubemapMaterial : this._equirectMaterial, a = new we(this._lodPlanes[0], s), o = s.uniforms;
    o.envMap.value = t;
    const c = this._cubeSize;
    rr(e, 0, 0, 3 * c, 2 * c), n.setRenderTarget(e), n.render(a, jr);
  }
  _applyPMREM(t) {
    const e = this._renderer, n = e.autoClear;
    e.autoClear = false;
    const r = this._lodPlanes.length;
    for (let s = 1; s < r; s++) {
      const a = Math.sqrt(this._sigmas[s] * this._sigmas[s] - this._sigmas[s - 1] * this._sigmas[s - 1]), o = eo[(r - s - 1) % eo.length];
      this._blur(t, s - 1, s, a, o);
    }
    e.autoClear = n;
  }
  _blur(t, e, n, r, s) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(t, a, e, n, r, "latitudinal", s), this._halfBlur(a, t, n, n, r, "longitudinal", s);
  }
  _halfBlur(t, e, n, r, s, a, o) {
    const c = this._renderer, l = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
    const u = 3, d = new we(this._lodPlanes[r], l), f = l.uniforms, p = this._sizeLods[n] - 1, g = isFinite(s) ? Math.PI / (2 * p) : 2 * Math.PI / (2 * Cn - 1), M = s / g, m = isFinite(s) ? 1 + Math.floor(u * M) : Cn;
    m > Cn && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Cn}`);
    const h = [];
    let w = 0;
    for (let P = 0; P < Cn; ++P) {
      const F = P / M, S = Math.exp(-F * F / 2);
      h.push(S), P === 0 ? w += S : P < m && (w += 2 * S);
    }
    for (let P = 0; P < h.length; P++) h[P] = h[P] / w;
    f.envMap.value = t.texture, f.samples.value = m, f.weights.value = h, f.latitudinal.value = a === "latitudinal", o && (f.poleAxis.value = o);
    const { _lodMax: T } = this;
    f.dTheta.value = g, f.mipInt.value = T - n;
    const E = this._sizeLods[r], C = 3 * E * (r > T - ii ? r - T + ii : 0), A = 4 * (this._cubeSize - E);
    rr(e, C, A, 3 * E, 2 * E), c.setRenderTarget(e), c.render(d, jr);
  }
}
function jd(i) {
  const t = [], e = [], n = [];
  let r = i;
  const s = i - ii + 1 + Qa.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, r);
    e.push(o);
    let c = 1 / o;
    a > i - ii ? c = Qa[a - i + ii - 1] : a === 0 && (c = 0), n.push(c);
    const l = 1 / (o - 2), u = -l, d = 1 + l, f = [u, u, d, u, d, d, u, u, d, d, u, d], p = 6, g = 6, M = 3, m = 2, h = 1, w = new Float32Array(M * g * p), T = new Float32Array(m * g * p), E = new Float32Array(h * g * p);
    for (let A = 0; A < p; A++) {
      const P = A % 3 * 2 / 3 - 1, F = A > 2 ? 0 : -1, S = [P, F, 0, P + 2 / 3, F, 0, P + 2 / 3, F + 1, 0, P, F, 0, P + 2 / 3, F + 1, 0, P, F + 1, 0];
      w.set(S, M * g * A), T.set(f, m * g * A);
      const x = [A, A, A, A, A, A];
      E.set(x, h * g * A);
    }
    const C = new an();
    C.setAttribute("position", new Ie(w, M)), C.setAttribute("uv", new Ie(T, m)), C.setAttribute("faceIndex", new Ie(E, h)), t.push(C), r > ii && r--;
  }
  return { lodPlanes: t, sizeLods: e, sigmas: n };
}
function io(i, t, e) {
  const n = new Nn(i, t, e);
  return n.texture.mapping = xr, n.texture.name = "PMREM.cubeUv", n.scissorTest = true, n;
}
function rr(i, t, e, n, r) {
  i.viewport.set(t, e, n, r), i.scissor.set(t, e, n, r);
}
function Zd(i, t, e) {
  const n = new Float32Array(Cn), r = new U(0, 1, 0);
  return new vn({ name: "SphericalGaussianBlur", defines: { n: Cn, CUBEUV_TEXEL_WIDTH: 1 / t, CUBEUV_TEXEL_HEIGHT: 1 / e, CUBEUV_MAX_MIP: `${i}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: n }, latitudinal: { value: false }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: r } }, vertexShader: ca(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`, blending: mn, depthTest: false, depthWrite: false });
}
function ro() {
  return new vn({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: ca(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`, blending: mn, depthTest: false, depthWrite: false });
}
function so() {
  return new vn({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: ca(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: mn, depthTest: false, depthWrite: false });
}
function ca() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function $d(i) {
  let t = /* @__PURE__ */ new WeakMap(), e = null;
  function n(o) {
    if (o && o.isTexture) {
      const c = o.mapping, l = c === ds || c === fs, u = c === li || c === ci;
      if (l || u) {
        let d = t.get(o);
        const f = d !== void 0 ? d.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== f) return e === null && (e = new no(i)), d = l ? e.fromEquirectangular(o, d) : e.fromCubemap(o, d), d.texture.pmremVersion = o.pmremVersion, t.set(o, d), d.texture;
        if (d !== void 0) return d.texture;
        {
          const p = o.image;
          return l && p && p.height > 0 || u && p && r(p) ? (e === null && (e = new no(i)), d = l ? e.fromEquirectangular(o) : e.fromCubemap(o), d.texture.pmremVersion = o.pmremVersion, t.set(o, d), o.addEventListener("dispose", s), d.texture) : null;
        }
      }
    }
    return o;
  }
  function r(o) {
    let c = 0;
    const l = 6;
    for (let u = 0; u < l; u++) o[u] !== void 0 && c++;
    return c === l;
  }
  function s(o) {
    const c = o.target;
    c.removeEventListener("dispose", s);
    const l = t.get(c);
    l !== void 0 && (t.delete(c), l.dispose());
  }
  function a() {
    t = /* @__PURE__ */ new WeakMap(), e !== null && (e.dispose(), e = null);
  }
  return { get: n, dispose: a };
}
function Jd(i) {
  const t = {};
  function e(n) {
    if (t[n] !== void 0) return t[n];
    let r;
    switch (n) {
      case "WEBGL_depth_texture":
        r = i.getExtension("WEBGL_depth_texture") || i.getExtension("MOZ_WEBGL_depth_texture") || i.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        r = i.getExtension("EXT_texture_filter_anisotropic") || i.getExtension("MOZ_EXT_texture_filter_anisotropic") || i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        r = i.getExtension("WEBGL_compressed_texture_s3tc") || i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        r = i.getExtension("WEBGL_compressed_texture_pvrtc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        r = i.getExtension(n);
    }
    return t[n] = r, r;
  }
  return { has: function(n) {
    return e(n) !== null;
  }, init: function() {
    e("EXT_color_buffer_float"), e("WEBGL_clip_cull_distance"), e("OES_texture_float_linear"), e("EXT_color_buffer_half_float"), e("WEBGL_multisampled_render_to_texture"), e("WEBGL_render_shared_exponent");
  }, get: function(n) {
    const r = e(n);
    return r === null && Di("THREE.WebGLRenderer: " + n + " extension not supported."), r;
  } };
}
function Qd(i, t, e, n) {
  const r = {}, s = /* @__PURE__ */ new WeakMap();
  function a(d) {
    const f = d.target;
    f.index !== null && t.remove(f.index);
    for (const g in f.attributes) t.remove(f.attributes[g]);
    f.removeEventListener("dispose", a), delete r[f.id];
    const p = s.get(f);
    p && (t.remove(p), s.delete(f)), n.releaseStatesOfGeometry(f), f.isInstancedBufferGeometry === true && delete f._maxInstanceCount, e.memory.geometries--;
  }
  function o(d, f) {
    return r[f.id] === true || (f.addEventListener("dispose", a), r[f.id] = true, e.memory.geometries++), f;
  }
  function c(d) {
    const f = d.attributes;
    for (const p in f) t.update(f[p], i.ARRAY_BUFFER);
  }
  function l(d) {
    const f = [], p = d.index, g = d.attributes.position;
    let M = 0;
    if (p !== null) {
      const w = p.array;
      M = p.version;
      for (let T = 0, E = w.length; T < E; T += 3) {
        const C = w[T + 0], A = w[T + 1], P = w[T + 2];
        f.push(C, A, A, P, P, C);
      }
    } else if (g !== void 0) {
      const w = g.array;
      M = g.version;
      for (let T = 0, E = w.length / 3 - 1; T < E; T += 3) {
        const C = T + 0, A = T + 1, P = T + 2;
        f.push(C, A, A, P, P, C);
      }
    } else return;
    const m = new (Bo(f) ? Vo : ko)(f, 1);
    m.version = M;
    const h = s.get(d);
    h && t.remove(h), s.set(d, m);
  }
  function u(d) {
    const f = s.get(d);
    if (f) {
      const p = d.index;
      p !== null && f.version < p.version && l(d);
    } else l(d);
    return s.get(d);
  }
  return { get: o, update: c, getWireframeAttribute: u };
}
function tf(i, t, e) {
  let n;
  function r(f) {
    n = f;
  }
  let s, a;
  function o(f) {
    s = f.type, a = f.bytesPerElement;
  }
  function c(f, p) {
    i.drawElements(n, p, s, f * a), e.update(p, n, 1);
  }
  function l(f, p, g) {
    g !== 0 && (i.drawElementsInstanced(n, p, s, f * a, g), e.update(p, n, g));
  }
  function u(f, p, g) {
    if (g === 0) return;
    t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, p, 0, s, f, 0, g);
    let m = 0;
    for (let h = 0; h < g; h++) m += p[h];
    e.update(m, n, 1);
  }
  function d(f, p, g, M) {
    if (g === 0) return;
    const m = t.get("WEBGL_multi_draw");
    if (m === null) for (let h = 0; h < f.length; h++) l(f[h] / a, p[h], M[h]);
    else {
      m.multiDrawElementsInstancedWEBGL(n, p, 0, s, f, 0, M, 0, g);
      let h = 0;
      for (let w = 0; w < g; w++) h += p[w] * M[w];
      e.update(h, n, 1);
    }
  }
  this.setMode = r, this.setIndex = o, this.render = c, this.renderInstances = l, this.renderMultiDraw = u, this.renderMultiDrawInstances = d;
}
function ef(i) {
  const t = { geometries: 0, textures: 0 }, e = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(s, a, o) {
    switch (e.calls++, a) {
      case i.TRIANGLES:
        e.triangles += o * (s / 3);
        break;
      case i.LINES:
        e.lines += o * (s / 2);
        break;
      case i.LINE_STRIP:
        e.lines += o * (s - 1);
        break;
      case i.LINE_LOOP:
        e.lines += o * s;
        break;
      case i.POINTS:
        e.points += o * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function r() {
    e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0;
  }
  return { memory: t, render: e, programs: null, autoReset: true, reset: r, update: n };
}
function nf(i, t, e) {
  const n = /* @__PURE__ */ new WeakMap(), r = new jt();
  function s(a, o, c) {
    const l = a.morphTargetInfluences, u = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, d = u !== void 0 ? u.length : 0;
    let f = n.get(o);
    if (f === void 0 || f.count !== d) {
      let S = function() {
        P.dispose(), n.delete(o), o.removeEventListener("dispose", S);
      };
      f !== void 0 && f.texture.dispose();
      const p = o.morphAttributes.position !== void 0, g = o.morphAttributes.normal !== void 0, M = o.morphAttributes.color !== void 0, m = o.morphAttributes.position || [], h = o.morphAttributes.normal || [], w = o.morphAttributes.color || [];
      let T = 0;
      p === true && (T = 1), g === true && (T = 2), M === true && (T = 3);
      let E = o.attributes.position.count * T, C = 1;
      E > t.maxTextureSize && (C = Math.ceil(E / t.maxTextureSize), E = t.maxTextureSize);
      const A = new Float32Array(E * C * 4 * d), P = new zo(A, E, C, d);
      P.type = qe, P.needsUpdate = true;
      const F = T * 4;
      for (let x = 0; x < d; x++) {
        const D = m[x], z = h[x], V = w[x], X = E * C * 4 * x;
        for (let K = 0; K < D.count; K++) {
          const W = K * F;
          p === true && (r.fromBufferAttribute(D, K), A[X + W + 0] = r.x, A[X + W + 1] = r.y, A[X + W + 2] = r.z, A[X + W + 3] = 0), g === true && (r.fromBufferAttribute(z, K), A[X + W + 4] = r.x, A[X + W + 5] = r.y, A[X + W + 6] = r.z, A[X + W + 7] = 0), M === true && (r.fromBufferAttribute(V, K), A[X + W + 8] = r.x, A[X + W + 9] = r.y, A[X + W + 10] = r.z, A[X + W + 11] = V.itemSize === 4 ? r.w : 1);
        }
      }
      f = { count: d, texture: P, size: new Pt(E, C) }, n.set(o, f), o.addEventListener("dispose", S);
    }
    if (a.isInstancedMesh === true && a.morphTexture !== null) c.getUniforms().setValue(i, "morphTexture", a.morphTexture, e);
    else {
      let p = 0;
      for (let M = 0; M < l.length; M++) p += l[M];
      const g = o.morphTargetsRelative ? 1 : 1 - p;
      c.getUniforms().setValue(i, "morphTargetBaseInfluence", g), c.getUniforms().setValue(i, "morphTargetInfluences", l);
    }
    c.getUniforms().setValue(i, "morphTargetsTexture", f.texture, e), c.getUniforms().setValue(i, "morphTargetsTextureSize", f.size);
  }
  return { update: s };
}
function rf(i, t, e, n) {
  let r = /* @__PURE__ */ new WeakMap();
  function s(c) {
    const l = n.render.frame, u = c.geometry, d = t.get(c, u);
    if (r.get(d) !== l && (t.update(d), r.set(d, l)), c.isInstancedMesh && (c.hasEventListener("dispose", o) === false && c.addEventListener("dispose", o), r.get(c) !== l && (e.update(c.instanceMatrix, i.ARRAY_BUFFER), c.instanceColor !== null && e.update(c.instanceColor, i.ARRAY_BUFFER), r.set(c, l))), c.isSkinnedMesh) {
      const f = c.skeleton;
      r.get(f) !== l && (f.update(), r.set(f, l));
    }
    return d;
  }
  function a() {
    r = /* @__PURE__ */ new WeakMap();
  }
  function o(c) {
    const l = c.target;
    l.removeEventListener("dispose", o), e.remove(l.instanceMatrix), l.instanceColor !== null && e.remove(l.instanceColor);
  }
  return { update: s, dispose: a };
}
const $o = new xe(), ao = new qo(1, 1), Jo = new zo(), Qo = new yc(), tl = new Xo(), oo = [], lo = [], co = new Float32Array(16), ho = new Float32Array(9), uo = new Float32Array(4);
function mi(i, t, e) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const r = t * e;
  let s = oo[r];
  if (s === void 0 && (s = new Float32Array(r), oo[r] = s), t !== 0) {
    n.toArray(s, 0);
    for (let a = 1, o = 0; a !== t; ++a) o += e, i[a].toArray(s, o);
  }
  return s;
}
function ue(i, t) {
  if (i.length !== t.length) return false;
  for (let e = 0, n = i.length; e < n; e++) if (i[e] !== t[e]) return false;
  return true;
}
function de(i, t) {
  for (let e = 0, n = t.length; e < n; e++) i[e] = t[e];
}
function Sr(i, t) {
  let e = lo[t];
  e === void 0 && (e = new Int32Array(t), lo[t] = e);
  for (let n = 0; n !== t; ++n) e[n] = i.allocateTextureUnit();
  return e;
}
function sf(i, t) {
  const e = this.cache;
  e[0] !== t && (i.uniform1f(this.addr, t), e[0] = t);
}
function af(i, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y) && (i.uniform2f(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (ue(e, t)) return;
    i.uniform2fv(this.addr, t), de(e, t);
  }
}
function of(i, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3f(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else if (t.r !== void 0) (e[0] !== t.r || e[1] !== t.g || e[2] !== t.b) && (i.uniform3f(this.addr, t.r, t.g, t.b), e[0] = t.r, e[1] = t.g, e[2] = t.b);
  else {
    if (ue(e, t)) return;
    i.uniform3fv(this.addr, t), de(e, t);
  }
}
function lf(i, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4f(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (ue(e, t)) return;
    i.uniform4fv(this.addr, t), de(e, t);
  }
}
function cf(i, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (ue(e, t)) return;
    i.uniformMatrix2fv(this.addr, false, t), de(e, t);
  } else {
    if (ue(e, n)) return;
    uo.set(n), i.uniformMatrix2fv(this.addr, false, uo), de(e, n);
  }
}
function hf(i, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (ue(e, t)) return;
    i.uniformMatrix3fv(this.addr, false, t), de(e, t);
  } else {
    if (ue(e, n)) return;
    ho.set(n), i.uniformMatrix3fv(this.addr, false, ho), de(e, n);
  }
}
function uf(i, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (ue(e, t)) return;
    i.uniformMatrix4fv(this.addr, false, t), de(e, t);
  } else {
    if (ue(e, n)) return;
    co.set(n), i.uniformMatrix4fv(this.addr, false, co), de(e, n);
  }
}
function df(i, t) {
  const e = this.cache;
  e[0] !== t && (i.uniform1i(this.addr, t), e[0] = t);
}
function ff(i, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y) && (i.uniform2i(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (ue(e, t)) return;
    i.uniform2iv(this.addr, t), de(e, t);
  }
}
function pf(i, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3i(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (ue(e, t)) return;
    i.uniform3iv(this.addr, t), de(e, t);
  }
}
function mf(i, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4i(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (ue(e, t)) return;
    i.uniform4iv(this.addr, t), de(e, t);
  }
}
function _f(i, t) {
  const e = this.cache;
  e[0] !== t && (i.uniform1ui(this.addr, t), e[0] = t);
}
function gf(i, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y) && (i.uniform2ui(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (ue(e, t)) return;
    i.uniform2uiv(this.addr, t), de(e, t);
  }
}
function vf(i, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3ui(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (ue(e, t)) return;
    i.uniform3uiv(this.addr, t), de(e, t);
  }
}
function xf(i, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4ui(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (ue(e, t)) return;
    i.uniform4uiv(this.addr, t), de(e, t);
  }
}
function Mf(i, t, e) {
  const n = this.cache, r = e.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r);
  let s;
  this.type === i.SAMPLER_2D_SHADOW ? (ao.compareFunction = Oo, s = ao) : s = $o, e.setTexture2D(t || s, r);
}
function Sf(i, t, e) {
  const n = this.cache, r = e.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), e.setTexture3D(t || Qo, r);
}
function Ef(i, t, e) {
  const n = this.cache, r = e.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), e.setTextureCube(t || tl, r);
}
function yf(i, t, e) {
  const n = this.cache, r = e.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), e.setTexture2DArray(t || Jo, r);
}
function Tf(i) {
  switch (i) {
    case 5126:
      return sf;
    case 35664:
      return af;
    case 35665:
      return of;
    case 35666:
      return lf;
    case 35674:
      return cf;
    case 35675:
      return hf;
    case 35676:
      return uf;
    case 5124:
    case 35670:
      return df;
    case 35667:
    case 35671:
      return ff;
    case 35668:
    case 35672:
      return pf;
    case 35669:
    case 35673:
      return mf;
    case 5125:
      return _f;
    case 36294:
      return gf;
    case 36295:
      return vf;
    case 36296:
      return xf;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Mf;
    case 35679:
    case 36299:
    case 36307:
      return Sf;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Ef;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return yf;
  }
}
function bf(i, t) {
  i.uniform1fv(this.addr, t);
}
function Af(i, t) {
  const e = mi(t, this.size, 2);
  i.uniform2fv(this.addr, e);
}
function wf(i, t) {
  const e = mi(t, this.size, 3);
  i.uniform3fv(this.addr, e);
}
function Rf(i, t) {
  const e = mi(t, this.size, 4);
  i.uniform4fv(this.addr, e);
}
function Cf(i, t) {
  const e = mi(t, this.size, 4);
  i.uniformMatrix2fv(this.addr, false, e);
}
function Pf(i, t) {
  const e = mi(t, this.size, 9);
  i.uniformMatrix3fv(this.addr, false, e);
}
function Df(i, t) {
  const e = mi(t, this.size, 16);
  i.uniformMatrix4fv(this.addr, false, e);
}
function Lf(i, t) {
  i.uniform1iv(this.addr, t);
}
function Uf(i, t) {
  i.uniform2iv(this.addr, t);
}
function If(i, t) {
  i.uniform3iv(this.addr, t);
}
function Nf(i, t) {
  i.uniform4iv(this.addr, t);
}
function Ff(i, t) {
  i.uniform1uiv(this.addr, t);
}
function Of(i, t) {
  i.uniform2uiv(this.addr, t);
}
function Bf(i, t) {
  i.uniform3uiv(this.addr, t);
}
function zf(i, t) {
  i.uniform4uiv(this.addr, t);
}
function Hf(i, t, e) {
  const n = this.cache, r = t.length, s = Sr(e, r);
  ue(n, s) || (i.uniform1iv(this.addr, s), de(n, s));
  for (let a = 0; a !== r; ++a) e.setTexture2D(t[a] || $o, s[a]);
}
function kf(i, t, e) {
  const n = this.cache, r = t.length, s = Sr(e, r);
  ue(n, s) || (i.uniform1iv(this.addr, s), de(n, s));
  for (let a = 0; a !== r; ++a) e.setTexture3D(t[a] || Qo, s[a]);
}
function Vf(i, t, e) {
  const n = this.cache, r = t.length, s = Sr(e, r);
  ue(n, s) || (i.uniform1iv(this.addr, s), de(n, s));
  for (let a = 0; a !== r; ++a) e.setTextureCube(t[a] || tl, s[a]);
}
function Gf(i, t, e) {
  const n = this.cache, r = t.length, s = Sr(e, r);
  ue(n, s) || (i.uniform1iv(this.addr, s), de(n, s));
  for (let a = 0; a !== r; ++a) e.setTexture2DArray(t[a] || Jo, s[a]);
}
function Wf(i) {
  switch (i) {
    case 5126:
      return bf;
    case 35664:
      return Af;
    case 35665:
      return wf;
    case 35666:
      return Rf;
    case 35674:
      return Cf;
    case 35675:
      return Pf;
    case 35676:
      return Df;
    case 5124:
    case 35670:
      return Lf;
    case 35667:
    case 35671:
      return Uf;
    case 35668:
    case 35672:
      return If;
    case 35669:
    case 35673:
      return Nf;
    case 5125:
      return Ff;
    case 36294:
      return Of;
    case 36295:
      return Bf;
    case 36296:
      return zf;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Hf;
    case 35679:
    case 36299:
    case 36307:
      return kf;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Vf;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Gf;
  }
}
class Xf {
  constructor(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.setValue = Tf(e.type);
  }
}
class Yf {
  constructor(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.size = e.size, this.setValue = Wf(e.type);
  }
}
class qf {
  constructor(t) {
    this.id = t, this.seq = [], this.map = {};
  }
  setValue(t, e, n) {
    const r = this.seq;
    for (let s = 0, a = r.length; s !== a; ++s) {
      const o = r[s];
      o.setValue(t, e[o.id], n);
    }
  }
}
const ts = /(\w+)(\])?(\[|\.)?/g;
function fo(i, t) {
  i.seq.push(t), i.map[t.id] = t;
}
function Kf(i, t, e) {
  const n = i.name, r = n.length;
  for (ts.lastIndex = 0; ; ) {
    const s = ts.exec(n), a = ts.lastIndex;
    let o = s[1];
    const c = s[2] === "]", l = s[3];
    if (c && (o = o | 0), l === void 0 || l === "[" && a + 2 === r) {
      fo(e, l === void 0 ? new Xf(o, i, t) : new Yf(o, i, t));
      break;
    } else {
      let d = e.map[o];
      d === void 0 && (d = new qf(o), fo(e, d)), e = d;
    }
  }
}
class dr {
  constructor(t, e) {
    this.seq = [], this.map = {};
    const n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
    for (let r = 0; r < n; ++r) {
      const s = t.getActiveUniform(e, r), a = t.getUniformLocation(e, s.name);
      Kf(s, a, this);
    }
  }
  setValue(t, e, n, r) {
    const s = this.map[e];
    s !== void 0 && s.setValue(t, n, r);
  }
  setOptional(t, e, n) {
    const r = e[n];
    r !== void 0 && this.setValue(t, n, r);
  }
  static upload(t, e, n, r) {
    for (let s = 0, a = e.length; s !== a; ++s) {
      const o = e[s], c = n[o.id];
      c.needsUpdate !== false && o.setValue(t, c.value, r);
    }
  }
  static seqWithValue(t, e) {
    const n = [];
    for (let r = 0, s = t.length; r !== s; ++r) {
      const a = t[r];
      a.id in e && n.push(a);
    }
    return n;
  }
}
function po(i, t, e) {
  const n = i.createShader(t);
  return i.shaderSource(n, e), i.compileShader(n), n;
}
const jf = 37297;
let Zf = 0;
function $f(i, t) {
  const e = i.split(`
`), n = [], r = Math.max(t - 6, 0), s = Math.min(t + 6, e.length);
  for (let a = r; a < s; a++) {
    const o = a + 1;
    n.push(`${o === t ? ">" : " "} ${o}: ${e[a]}`);
  }
  return n.join(`
`);
}
const mo = new It();
function Jf(i) {
  Gt._getMatrix(mo, Gt.workingColorSpace, i);
  const t = `mat3( ${mo.elements.map((e) => e.toFixed(4))} )`;
  switch (Gt.getTransfer(i)) {
    case mr:
      return [t, "LinearTransferOETF"];
    case qt:
      return [t, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space: ", i), [t, "LinearTransferOETF"];
  }
}
function _o(i, t, e) {
  const n = i.getShaderParameter(t, i.COMPILE_STATUS), s = (i.getShaderInfoLog(t) || "").trim();
  if (n && s === "") return "";
  const a = /ERROR: 0:(\d+)/.exec(s);
  if (a) {
    const o = parseInt(a[1]);
    return e.toUpperCase() + `

` + s + `

` + $f(i.getShaderSource(t), o);
  } else return s;
}
function Qf(i, t) {
  const e = Jf(t);
  return [`vec4 ${i}( vec4 value ) {`, `	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`, "}"].join(`
`);
}
function tp(i, t) {
  let e;
  switch (t) {
    case Fl:
      e = "Linear";
      break;
    case Ol:
      e = "Reinhard";
      break;
    case Bl:
      e = "Cineon";
      break;
    case zl:
      e = "ACESFilmic";
      break;
    case kl:
      e = "AgX";
      break;
    case Vl:
      e = "Neutral";
      break;
    case Hl:
      e = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t), e = "Linear";
  }
  return "vec3 " + i + "( vec3 color ) { return " + e + "ToneMapping( color ); }";
}
const sr = new U();
function ep() {
  Gt.getLuminanceCoefficients(sr);
  const i = sr.x.toFixed(4), t = sr.y.toFixed(4), e = sr.z.toFixed(4);
  return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${i}, ${t}, ${e} );`, "	return dot( weights, rgb );", "}"].join(`
`);
}
function np(i) {
  return [i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(Ti).join(`
`);
}
function ip(i) {
  const t = [];
  for (const e in i) {
    const n = i[e];
    n !== false && t.push("#define " + e + " " + n);
  }
  return t.join(`
`);
}
function rp(i, t) {
  const e = {}, n = i.getProgramParameter(t, i.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < n; r++) {
    const s = i.getActiveAttrib(t, r), a = s.name;
    let o = 1;
    s.type === i.FLOAT_MAT2 && (o = 2), s.type === i.FLOAT_MAT3 && (o = 3), s.type === i.FLOAT_MAT4 && (o = 4), e[a] = { type: s.type, location: i.getAttribLocation(t, a), locationSize: o };
  }
  return e;
}
function Ti(i) {
  return i !== "";
}
function go(i, t) {
  const e = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, e).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function vo(i, t) {
  return i.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
const sp = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Ys(i) {
  return i.replace(sp, op);
}
const ap = /* @__PURE__ */ new Map();
function op(i, t) {
  let e = Ft[t];
  if (e === void 0) {
    const n = ap.get(t);
    if (n !== void 0) e = Ft[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', t, n);
    else throw new Error("Can not resolve #include <" + t + ">");
  }
  return Ys(e);
}
const lp = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function xo(i) {
  return i.replace(lp, cp);
}
function cp(i, t, e, n) {
  let r = "";
  for (let s = parseInt(t); s < parseInt(e); s++) r += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function Mo(i) {
  let t = `precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;
  return i.precision === "highp" ? t += `
#define HIGH_PRECISION` : i.precision === "mediump" ? t += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (t += `
#define LOW_PRECISION`), t;
}
function hp(i) {
  let t = "SHADOWMAP_TYPE_BASIC";
  return i.shadowMapType === Ro ? t = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === ml ? t = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === nn && (t = "SHADOWMAP_TYPE_VSM"), t;
}
function up(i) {
  let t = "ENVMAP_TYPE_CUBE";
  if (i.envMap) switch (i.envMapMode) {
    case li:
    case ci:
      t = "ENVMAP_TYPE_CUBE";
      break;
    case xr:
      t = "ENVMAP_TYPE_CUBE_UV";
      break;
  }
  return t;
}
function dp(i) {
  let t = "ENVMAP_MODE_REFLECTION";
  if (i.envMap) switch (i.envMapMode) {
    case ci:
      t = "ENVMAP_MODE_REFRACTION";
      break;
  }
  return t;
}
function fp(i) {
  let t = "ENVMAP_BLENDING_NONE";
  if (i.envMap) switch (i.combine) {
    case vr:
      t = "ENVMAP_BLENDING_MULTIPLY";
      break;
    case Il:
      t = "ENVMAP_BLENDING_MIX";
      break;
    case Nl:
      t = "ENVMAP_BLENDING_ADD";
      break;
  }
  return t;
}
function pp(i) {
  const t = i.envMapCubeUVHeight;
  if (t === null) return null;
  const e = Math.log2(t) - 2, n = 1 / t;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, e), 112)), texelHeight: n, maxMip: e };
}
function mp(i, t, e, n) {
  const r = i.getContext(), s = e.defines;
  let a = e.vertexShader, o = e.fragmentShader;
  const c = hp(e), l = up(e), u = dp(e), d = fp(e), f = pp(e), p = np(e), g = ip(s), M = r.createProgram();
  let m, h, w = e.glslVersion ? "#version " + e.glslVersion + `
` : "";
  e.isRawShaderMaterial ? (m = ["#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, g].filter(Ti).join(`
`), m.length > 0 && (m += `
`), h = ["#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, g].filter(Ti).join(`
`), h.length > 0 && (h += `
`)) : (m = [Mo(e), "#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, g, e.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", e.batching ? "#define USE_BATCHING" : "", e.batchingColor ? "#define USE_BATCHING_COLOR" : "", e.instancing ? "#define USE_INSTANCING" : "", e.instancingColor ? "#define USE_INSTANCING_COLOR" : "", e.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", e.useFog && e.fog ? "#define USE_FOG" : "", e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "", e.map ? "#define USE_MAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.envMap ? "#define " + u : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.aoMap ? "#define USE_AOMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", e.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", e.emissiveMap ? "#define USE_EMISSIVEMAP" : "", e.anisotropy ? "#define USE_ANISOTROPY" : "", e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", e.metalnessMap ? "#define USE_METALNESSMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.alphaHash ? "#define USE_ALPHAHASH" : "", e.transmission ? "#define USE_TRANSMISSION" : "", e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", e.thicknessMap ? "#define USE_THICKNESSMAP" : "", e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", e.mapUv ? "#define MAP_UV " + e.mapUv : "", e.alphaMapUv ? "#define ALPHAMAP_UV " + e.alphaMapUv : "", e.lightMapUv ? "#define LIGHTMAP_UV " + e.lightMapUv : "", e.aoMapUv ? "#define AOMAP_UV " + e.aoMapUv : "", e.emissiveMapUv ? "#define EMISSIVEMAP_UV " + e.emissiveMapUv : "", e.bumpMapUv ? "#define BUMPMAP_UV " + e.bumpMapUv : "", e.normalMapUv ? "#define NORMALMAP_UV " + e.normalMapUv : "", e.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + e.displacementMapUv : "", e.metalnessMapUv ? "#define METALNESSMAP_UV " + e.metalnessMapUv : "", e.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + e.roughnessMapUv : "", e.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + e.anisotropyMapUv : "", e.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + e.clearcoatMapUv : "", e.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + e.clearcoatNormalMapUv : "", e.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + e.clearcoatRoughnessMapUv : "", e.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + e.iridescenceMapUv : "", e.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + e.iridescenceThicknessMapUv : "", e.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + e.sheenColorMapUv : "", e.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + e.sheenRoughnessMapUv : "", e.specularMapUv ? "#define SPECULARMAP_UV " + e.specularMapUv : "", e.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + e.specularColorMapUv : "", e.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + e.specularIntensityMapUv : "", e.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + e.transmissionMapUv : "", e.thicknessMapUv ? "#define THICKNESSMAP_UV " + e.thicknessMapUv : "", e.vertexTangents && e.flatShading === false ? "#define USE_TANGENT" : "", e.vertexColors ? "#define USE_COLOR" : "", e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", e.vertexUv1s ? "#define USE_UV1" : "", e.vertexUv2s ? "#define USE_UV2" : "", e.vertexUv3s ? "#define USE_UV3" : "", e.pointsUvs ? "#define USE_POINTS_UV" : "", e.flatShading ? "#define FLAT_SHADED" : "", e.skinning ? "#define USE_SKINNING" : "", e.morphTargets ? "#define USE_MORPHTARGETS" : "", e.morphNormals && e.flatShading === false ? "#define USE_MORPHNORMALS" : "", e.morphColors ? "#define USE_MORPHCOLORS" : "", e.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + e.morphTextureStride : "", e.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + e.morphTargetsCount : "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapEnabled ? "#define " + c : "", e.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", e.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", e.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(Ti).join(`
`), h = [Mo(e), "#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, g, e.useFog && e.fog ? "#define USE_FOG" : "", e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "", e.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", e.map ? "#define USE_MAP" : "", e.matcap ? "#define USE_MATCAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.envMap ? "#define " + l : "", e.envMap ? "#define " + u : "", e.envMap ? "#define " + d : "", f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "", f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "", f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.aoMap ? "#define USE_AOMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", e.emissiveMap ? "#define USE_EMISSIVEMAP" : "", e.anisotropy ? "#define USE_ANISOTROPY" : "", e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", e.clearcoat ? "#define USE_CLEARCOAT" : "", e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", e.dispersion ? "#define USE_DISPERSION" : "", e.iridescence ? "#define USE_IRIDESCENCE" : "", e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", e.metalnessMap ? "#define USE_METALNESSMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.alphaTest ? "#define USE_ALPHATEST" : "", e.alphaHash ? "#define USE_ALPHAHASH" : "", e.sheen ? "#define USE_SHEEN" : "", e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", e.transmission ? "#define USE_TRANSMISSION" : "", e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", e.thicknessMap ? "#define USE_THICKNESSMAP" : "", e.vertexTangents && e.flatShading === false ? "#define USE_TANGENT" : "", e.vertexColors || e.instancingColor || e.batchingColor ? "#define USE_COLOR" : "", e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", e.vertexUv1s ? "#define USE_UV1" : "", e.vertexUv2s ? "#define USE_UV2" : "", e.vertexUv3s ? "#define USE_UV3" : "", e.pointsUvs ? "#define USE_POINTS_UV" : "", e.gradientMap ? "#define USE_GRADIENTMAP" : "", e.flatShading ? "#define FLAT_SHADED" : "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapEnabled ? "#define " + c : "", e.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", e.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", e.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", e.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", e.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", e.toneMapping !== _n ? "#define TONE_MAPPING" : "", e.toneMapping !== _n ? Ft.tonemapping_pars_fragment : "", e.toneMapping !== _n ? tp("toneMapping", e.toneMapping) : "", e.dithering ? "#define DITHERING" : "", e.opaque ? "#define OPAQUE" : "", Ft.colorspace_pars_fragment, Qf("linearToOutputTexel", e.outputColorSpace), ep(), e.useDepthPacking ? "#define DEPTH_PACKING " + e.depthPacking : "", `
`].filter(Ti).join(`
`)), a = Ys(a), a = go(a, e), a = vo(a, e), o = Ys(o), o = go(o, e), o = vo(o, e), a = xo(a), o = xo(o), e.isRawShaderMaterial !== true && (w = `#version 300 es
`, m = [p, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + m, h = ["#define varying in", e.glslVersion === ya ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", e.glslVersion === ya ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + h);
  const T = w + m + a, E = w + h + o, C = po(r, r.VERTEX_SHADER, T), A = po(r, r.FRAGMENT_SHADER, E);
  r.attachShader(M, C), r.attachShader(M, A), e.index0AttributeName !== void 0 ? r.bindAttribLocation(M, 0, e.index0AttributeName) : e.morphTargets === true && r.bindAttribLocation(M, 0, "position"), r.linkProgram(M);
  function P(D) {
    if (i.debug.checkShaderErrors) {
      const z = r.getProgramInfoLog(M) || "", V = r.getShaderInfoLog(C) || "", X = r.getShaderInfoLog(A) || "", K = z.trim(), W = V.trim(), et = X.trim();
      let H = true, st = true;
      if (r.getProgramParameter(M, r.LINK_STATUS) === false) if (H = false, typeof i.debug.onShaderError == "function") i.debug.onShaderError(r, M, C, A);
      else {
        const ct = _o(r, C, "vertex"), Et = _o(r, A, "fragment");
        console.error("THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(M, r.VALIDATE_STATUS) + `

Material Name: ` + D.name + `
Material Type: ` + D.type + `

Program Info Log: ` + K + `
` + ct + `
` + Et);
      }
      else K !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", K) : (W === "" || et === "") && (st = false);
      st && (D.diagnostics = { runnable: H, programLog: K, vertexShader: { log: W, prefix: m }, fragmentShader: { log: et, prefix: h } });
    }
    r.deleteShader(C), r.deleteShader(A), F = new dr(r, M), S = rp(r, M);
  }
  let F;
  this.getUniforms = function() {
    return F === void 0 && P(this), F;
  };
  let S;
  this.getAttributes = function() {
    return S === void 0 && P(this), S;
  };
  let x = e.rendererExtensionParallelShaderCompile === false;
  return this.isReady = function() {
    return x === false && (x = r.getProgramParameter(M, jf)), x;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), r.deleteProgram(M), this.program = void 0;
  }, this.type = e.shaderType, this.name = e.shaderName, this.id = Zf++, this.cacheKey = t, this.usedTimes = 1, this.program = M, this.vertexShader = C, this.fragmentShader = A, this;
}
let _p = 0;
class gp {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(t) {
    const e = t.vertexShader, n = t.fragmentShader, r = this._getShaderStage(e), s = this._getShaderStage(n), a = this._getShaderCacheForMaterial(t);
    return a.has(r) === false && (a.add(r), r.usedTimes++), a.has(s) === false && (a.add(s), s.usedTimes++), this;
  }
  remove(t) {
    const e = this.materialCache.get(t);
    for (const n of e) n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(t), this;
  }
  getVertexShaderID(t) {
    return this._getShaderStage(t.vertexShader).id;
  }
  getFragmentShaderID(t) {
    return this._getShaderStage(t.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(t) {
    const e = this.materialCache;
    let n = e.get(t);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), e.set(t, n)), n;
  }
  _getShaderStage(t) {
    const e = this.shaderCache;
    let n = e.get(t);
    return n === void 0 && (n = new vp(t), e.set(t, n)), n;
  }
}
class vp {
  constructor(t) {
    this.id = _p++, this.code = t, this.usedTimes = 0;
  }
}
function xp(i, t, e, n, r, s, a) {
  const o = new sa(), c = new gp(), l = /* @__PURE__ */ new Set(), u = [], d = r.logarithmicDepthBuffer, f = r.vertexTextures;
  let p = r.precision;
  const g = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };
  function M(S) {
    return l.add(S), S === 0 ? "uv" : `uv${S}`;
  }
  function m(S, x, D, z, V) {
    const X = z.fog, K = V.geometry, W = S.isMeshStandardMaterial ? z.environment : null, et = (S.isMeshStandardMaterial ? e : t).get(S.envMap || W), H = et && et.mapping === xr ? et.image.height : null, st = g[S.type];
    S.precision !== null && (p = r.getMaxPrecision(S.precision), p !== S.precision && console.warn("THREE.WebGLProgram.getParameters:", S.precision, "not supported, using", p, "instead."));
    const ct = K.morphAttributes.position || K.morphAttributes.normal || K.morphAttributes.color, Et = ct !== void 0 ? ct.length : 0;
    let Bt = 0;
    K.morphAttributes.position !== void 0 && (Bt = 1), K.morphAttributes.normal !== void 0 && (Bt = 2), K.morphAttributes.color !== void 0 && (Bt = 3);
    let $t, ee, Wt, Y;
    if (st) {
      const Xt = Xe[st];
      $t = Xt.vertexShader, ee = Xt.fragmentShader;
    } else $t = S.vertexShader, ee = S.fragmentShader, c.update(S), Wt = c.getVertexShaderID(S), Y = c.getFragmentShaderID(S);
    const Z = i.getRenderTarget(), dt = i.state.buffers.depth.getReversed(), Ct = V.isInstancedMesh === true, St = V.isBatchedMesh === true, kt = !!S.map, _e = !!S.matcap, b = !!et, ne = !!S.aoMap, Lt = !!S.lightMap, wt = !!S.bumpMap, mt = !!S.normalMap, ie = !!S.displacementMap, _t = !!S.emissiveMap, Nt = !!S.metalnessMap, fe = !!S.roughnessMap, oe = S.anisotropy > 0, y = S.clearcoat > 0, _ = S.dispersion > 0, N = S.iridescence > 0, G = S.sheen > 0, j = S.transmission > 0, k = oe && !!S.anisotropyMap, Mt = y && !!S.clearcoatMap, nt = y && !!S.clearcoatNormalMap, gt = y && !!S.clearcoatRoughnessMap, vt = N && !!S.iridescenceMap, Q = N && !!S.iridescenceThicknessMap, lt = G && !!S.sheenColorMap, At = G && !!S.sheenRoughnessMap, xt = !!S.specularMap, at = !!S.specularColorMap, Ut = !!S.specularIntensityMap, R = j && !!S.transmissionMap, tt = j && !!S.thicknessMap, it = !!S.gradientMap, ut = !!S.alphaMap, $ = S.alphaTest > 0, q = !!S.alphaHash, pt = !!S.extensions;
    let Dt = _n;
    S.toneMapped && (Z === null || Z.isXRRenderTarget === true) && (Dt = i.toneMapping);
    const Jt = { shaderID: st, shaderType: S.type, shaderName: S.name, vertexShader: $t, fragmentShader: ee, defines: S.defines, customVertexShaderID: Wt, customFragmentShaderID: Y, isRawShaderMaterial: S.isRawShaderMaterial === true, glslVersion: S.glslVersion, precision: p, batching: St, batchingColor: St && V._colorsTexture !== null, instancing: Ct, instancingColor: Ct && V.instanceColor !== null, instancingMorph: Ct && V.morphTexture !== null, supportsVertexTextures: f, outputColorSpace: Z === null ? i.outputColorSpace : Z.isXRRenderTarget === true ? Z.texture.colorSpace : hi, alphaToCoverage: !!S.alphaToCoverage, map: kt, matcap: _e, envMap: b, envMapMode: b && et.mapping, envMapCubeUVHeight: H, aoMap: ne, lightMap: Lt, bumpMap: wt, normalMap: mt, displacementMap: f && ie, emissiveMap: _t, normalMapObjectSpace: mt && S.normalMapType === Yl, normalMapTangentSpace: mt && S.normalMapType === ea, metalnessMap: Nt, roughnessMap: fe, anisotropy: oe, anisotropyMap: k, clearcoat: y, clearcoatMap: Mt, clearcoatNormalMap: nt, clearcoatRoughnessMap: gt, dispersion: _, iridescence: N, iridescenceMap: vt, iridescenceThicknessMap: Q, sheen: G, sheenColorMap: lt, sheenRoughnessMap: At, specularMap: xt, specularColorMap: at, specularIntensityMap: Ut, transmission: j, transmissionMap: R, thicknessMap: tt, gradientMap: it, opaque: S.transparent === false && S.blending === si && S.alphaToCoverage === false, alphaMap: ut, alphaTest: $, alphaHash: q, combine: S.combine, mapUv: kt && M(S.map.channel), aoMapUv: ne && M(S.aoMap.channel), lightMapUv: Lt && M(S.lightMap.channel), bumpMapUv: wt && M(S.bumpMap.channel), normalMapUv: mt && M(S.normalMap.channel), displacementMapUv: ie && M(S.displacementMap.channel), emissiveMapUv: _t && M(S.emissiveMap.channel), metalnessMapUv: Nt && M(S.metalnessMap.channel), roughnessMapUv: fe && M(S.roughnessMap.channel), anisotropyMapUv: k && M(S.anisotropyMap.channel), clearcoatMapUv: Mt && M(S.clearcoatMap.channel), clearcoatNormalMapUv: nt && M(S.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: gt && M(S.clearcoatRoughnessMap.channel), iridescenceMapUv: vt && M(S.iridescenceMap.channel), iridescenceThicknessMapUv: Q && M(S.iridescenceThicknessMap.channel), sheenColorMapUv: lt && M(S.sheenColorMap.channel), sheenRoughnessMapUv: At && M(S.sheenRoughnessMap.channel), specularMapUv: xt && M(S.specularMap.channel), specularColorMapUv: at && M(S.specularColorMap.channel), specularIntensityMapUv: Ut && M(S.specularIntensityMap.channel), transmissionMapUv: R && M(S.transmissionMap.channel), thicknessMapUv: tt && M(S.thicknessMap.channel), alphaMapUv: ut && M(S.alphaMap.channel), vertexTangents: !!K.attributes.tangent && (mt || oe), vertexColors: S.vertexColors, vertexAlphas: S.vertexColors === true && !!K.attributes.color && K.attributes.color.itemSize === 4, pointsUvs: V.isPoints === true && !!K.attributes.uv && (kt || ut), fog: !!X, useFog: S.fog === true, fogExp2: !!X && X.isFogExp2, flatShading: S.flatShading === true && S.wireframe === false, sizeAttenuation: S.sizeAttenuation === true, logarithmicDepthBuffer: d, reversedDepthBuffer: dt, skinning: V.isSkinnedMesh === true, morphTargets: K.morphAttributes.position !== void 0, morphNormals: K.morphAttributes.normal !== void 0, morphColors: K.morphAttributes.color !== void 0, morphTargetsCount: Et, morphTextureStride: Bt, numDirLights: x.directional.length, numPointLights: x.point.length, numSpotLights: x.spot.length, numSpotLightMaps: x.spotLightMap.length, numRectAreaLights: x.rectArea.length, numHemiLights: x.hemi.length, numDirLightShadows: x.directionalShadowMap.length, numPointLightShadows: x.pointShadowMap.length, numSpotLightShadows: x.spotShadowMap.length, numSpotLightShadowsWithMaps: x.numSpotLightShadowsWithMaps, numLightProbes: x.numLightProbes, numClippingPlanes: a.numPlanes, numClipIntersection: a.numIntersection, dithering: S.dithering, shadowMapEnabled: i.shadowMap.enabled && D.length > 0, shadowMapType: i.shadowMap.type, toneMapping: Dt, decodeVideoTexture: kt && S.map.isVideoTexture === true && Gt.getTransfer(S.map.colorSpace) === qt, decodeVideoTextureEmissive: _t && S.emissiveMap.isVideoTexture === true && Gt.getTransfer(S.emissiveMap.colorSpace) === qt, premultipliedAlpha: S.premultipliedAlpha, doubleSided: S.side === rn, flipSided: S.side === Re, useDepthPacking: S.depthPacking >= 0, depthPacking: S.depthPacking || 0, index0AttributeName: S.index0AttributeName, extensionClipCullDistance: pt && S.extensions.clipCullDistance === true && n.has("WEBGL_clip_cull_distance"), extensionMultiDraw: (pt && S.extensions.multiDraw === true || St) && n.has("WEBGL_multi_draw"), rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"), customProgramCacheKey: S.customProgramCacheKey() };
    return Jt.vertexUv1s = l.has(1), Jt.vertexUv2s = l.has(2), Jt.vertexUv3s = l.has(3), l.clear(), Jt;
  }
  function h(S) {
    const x = [];
    if (S.shaderID ? x.push(S.shaderID) : (x.push(S.customVertexShaderID), x.push(S.customFragmentShaderID)), S.defines !== void 0) for (const D in S.defines) x.push(D), x.push(S.defines[D]);
    return S.isRawShaderMaterial === false && (w(x, S), T(x, S), x.push(i.outputColorSpace)), x.push(S.customProgramCacheKey), x.join();
  }
  function w(S, x) {
    S.push(x.precision), S.push(x.outputColorSpace), S.push(x.envMapMode), S.push(x.envMapCubeUVHeight), S.push(x.mapUv), S.push(x.alphaMapUv), S.push(x.lightMapUv), S.push(x.aoMapUv), S.push(x.bumpMapUv), S.push(x.normalMapUv), S.push(x.displacementMapUv), S.push(x.emissiveMapUv), S.push(x.metalnessMapUv), S.push(x.roughnessMapUv), S.push(x.anisotropyMapUv), S.push(x.clearcoatMapUv), S.push(x.clearcoatNormalMapUv), S.push(x.clearcoatRoughnessMapUv), S.push(x.iridescenceMapUv), S.push(x.iridescenceThicknessMapUv), S.push(x.sheenColorMapUv), S.push(x.sheenRoughnessMapUv), S.push(x.specularMapUv), S.push(x.specularColorMapUv), S.push(x.specularIntensityMapUv), S.push(x.transmissionMapUv), S.push(x.thicknessMapUv), S.push(x.combine), S.push(x.fogExp2), S.push(x.sizeAttenuation), S.push(x.morphTargetsCount), S.push(x.morphAttributeCount), S.push(x.numDirLights), S.push(x.numPointLights), S.push(x.numSpotLights), S.push(x.numSpotLightMaps), S.push(x.numHemiLights), S.push(x.numRectAreaLights), S.push(x.numDirLightShadows), S.push(x.numPointLightShadows), S.push(x.numSpotLightShadows), S.push(x.numSpotLightShadowsWithMaps), S.push(x.numLightProbes), S.push(x.shadowMapType), S.push(x.toneMapping), S.push(x.numClippingPlanes), S.push(x.numClipIntersection), S.push(x.depthPacking);
  }
  function T(S, x) {
    o.disableAll(), x.supportsVertexTextures && o.enable(0), x.instancing && o.enable(1), x.instancingColor && o.enable(2), x.instancingMorph && o.enable(3), x.matcap && o.enable(4), x.envMap && o.enable(5), x.normalMapObjectSpace && o.enable(6), x.normalMapTangentSpace && o.enable(7), x.clearcoat && o.enable(8), x.iridescence && o.enable(9), x.alphaTest && o.enable(10), x.vertexColors && o.enable(11), x.vertexAlphas && o.enable(12), x.vertexUv1s && o.enable(13), x.vertexUv2s && o.enable(14), x.vertexUv3s && o.enable(15), x.vertexTangents && o.enable(16), x.anisotropy && o.enable(17), x.alphaHash && o.enable(18), x.batching && o.enable(19), x.dispersion && o.enable(20), x.batchingColor && o.enable(21), x.gradientMap && o.enable(22), S.push(o.mask), o.disableAll(), x.fog && o.enable(0), x.useFog && o.enable(1), x.flatShading && o.enable(2), x.logarithmicDepthBuffer && o.enable(3), x.reversedDepthBuffer && o.enable(4), x.skinning && o.enable(5), x.morphTargets && o.enable(6), x.morphNormals && o.enable(7), x.morphColors && o.enable(8), x.premultipliedAlpha && o.enable(9), x.shadowMapEnabled && o.enable(10), x.doubleSided && o.enable(11), x.flipSided && o.enable(12), x.useDepthPacking && o.enable(13), x.dithering && o.enable(14), x.transmission && o.enable(15), x.sheen && o.enable(16), x.opaque && o.enable(17), x.pointsUvs && o.enable(18), x.decodeVideoTexture && o.enable(19), x.decodeVideoTextureEmissive && o.enable(20), x.alphaToCoverage && o.enable(21), S.push(o.mask);
  }
  function E(S) {
    const x = g[S.type];
    let D;
    if (x) {
      const z = Xe[x];
      D = Fc.clone(z.uniforms);
    } else D = S.uniforms;
    return D;
  }
  function C(S, x) {
    let D;
    for (let z = 0, V = u.length; z < V; z++) {
      const X = u[z];
      if (X.cacheKey === x) {
        D = X, ++D.usedTimes;
        break;
      }
    }
    return D === void 0 && (D = new mp(i, x, S, s), u.push(D)), D;
  }
  function A(S) {
    if (--S.usedTimes === 0) {
      const x = u.indexOf(S);
      u[x] = u[u.length - 1], u.pop(), S.destroy();
    }
  }
  function P(S) {
    c.remove(S);
  }
  function F() {
    c.dispose();
  }
  return { getParameters: m, getProgramCacheKey: h, getUniforms: E, acquireProgram: C, releaseProgram: A, releaseShaderCache: P, programs: u, dispose: F };
}
function Mp() {
  let i = /* @__PURE__ */ new WeakMap();
  function t(a) {
    return i.has(a);
  }
  function e(a) {
    let o = i.get(a);
    return o === void 0 && (o = {}, i.set(a, o)), o;
  }
  function n(a) {
    i.delete(a);
  }
  function r(a, o, c) {
    i.get(a)[o] = c;
  }
  function s() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return { has: t, get: e, remove: n, update: r, dispose: s };
}
function Sp(i, t) {
  return i.groupOrder !== t.groupOrder ? i.groupOrder - t.groupOrder : i.renderOrder !== t.renderOrder ? i.renderOrder - t.renderOrder : i.material.id !== t.material.id ? i.material.id - t.material.id : i.z !== t.z ? i.z - t.z : i.id - t.id;
}
function So(i, t) {
  return i.groupOrder !== t.groupOrder ? i.groupOrder - t.groupOrder : i.renderOrder !== t.renderOrder ? i.renderOrder - t.renderOrder : i.z !== t.z ? t.z - i.z : i.id - t.id;
}
function Eo() {
  const i = [];
  let t = 0;
  const e = [], n = [], r = [];
  function s() {
    t = 0, e.length = 0, n.length = 0, r.length = 0;
  }
  function a(d, f, p, g, M, m) {
    let h = i[t];
    return h === void 0 ? (h = { id: d.id, object: d, geometry: f, material: p, groupOrder: g, renderOrder: d.renderOrder, z: M, group: m }, i[t] = h) : (h.id = d.id, h.object = d, h.geometry = f, h.material = p, h.groupOrder = g, h.renderOrder = d.renderOrder, h.z = M, h.group = m), t++, h;
  }
  function o(d, f, p, g, M, m) {
    const h = a(d, f, p, g, M, m);
    p.transmission > 0 ? n.push(h) : p.transparent === true ? r.push(h) : e.push(h);
  }
  function c(d, f, p, g, M, m) {
    const h = a(d, f, p, g, M, m);
    p.transmission > 0 ? n.unshift(h) : p.transparent === true ? r.unshift(h) : e.unshift(h);
  }
  function l(d, f) {
    e.length > 1 && e.sort(d || Sp), n.length > 1 && n.sort(f || So), r.length > 1 && r.sort(f || So);
  }
  function u() {
    for (let d = t, f = i.length; d < f; d++) {
      const p = i[d];
      if (p.id === null) break;
      p.id = null, p.object = null, p.geometry = null, p.material = null, p.group = null;
    }
  }
  return { opaque: e, transmissive: n, transparent: r, init: s, push: o, unshift: c, finish: u, sort: l };
}
function Ep() {
  let i = /* @__PURE__ */ new WeakMap();
  function t(n, r) {
    const s = i.get(n);
    let a;
    return s === void 0 ? (a = new Eo(), i.set(n, [a])) : r >= s.length ? (a = new Eo(), s.push(a)) : a = s[r], a;
  }
  function e() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return { get: t, dispose: e };
}
function yp() {
  const i = {};
  return { get: function(t) {
    if (i[t.id] !== void 0) return i[t.id];
    let e;
    switch (t.type) {
      case "DirectionalLight":
        e = { direction: new U(), color: new Ht() };
        break;
      case "SpotLight":
        e = { position: new U(), direction: new U(), color: new Ht(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
        break;
      case "PointLight":
        e = { position: new U(), color: new Ht(), distance: 0, decay: 0 };
        break;
      case "HemisphereLight":
        e = { direction: new U(), skyColor: new Ht(), groundColor: new Ht() };
        break;
      case "RectAreaLight":
        e = { color: new Ht(), position: new U(), halfWidth: new U(), halfHeight: new U() };
        break;
    }
    return i[t.id] = e, e;
  } };
}
function Tp() {
  const i = {};
  return { get: function(t) {
    if (i[t.id] !== void 0) return i[t.id];
    let e;
    switch (t.type) {
      case "DirectionalLight":
        e = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Pt() };
        break;
      case "SpotLight":
        e = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Pt() };
        break;
      case "PointLight":
        e = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Pt(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
        break;
    }
    return i[t.id] = e, e;
  } };
}
let bp = 0;
function Ap(i, t) {
  return (t.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (t.map ? 1 : 0) - (i.map ? 1 : 0);
}
function wp(i) {
  const t = new yp(), e = Tp(), n = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 };
  for (let l = 0; l < 9; l++) n.probe.push(new U());
  const r = new U(), s = new Qt(), a = new Qt();
  function o(l) {
    let u = 0, d = 0, f = 0;
    for (let S = 0; S < 9; S++) n.probe[S].set(0, 0, 0);
    let p = 0, g = 0, M = 0, m = 0, h = 0, w = 0, T = 0, E = 0, C = 0, A = 0, P = 0;
    l.sort(Ap);
    for (let S = 0, x = l.length; S < x; S++) {
      const D = l[S], z = D.color, V = D.intensity, X = D.distance, K = D.shadow && D.shadow.map ? D.shadow.map.texture : null;
      if (D.isAmbientLight) u += z.r * V, d += z.g * V, f += z.b * V;
      else if (D.isLightProbe) {
        for (let W = 0; W < 9; W++) n.probe[W].addScaledVector(D.sh.coefficients[W], V);
        P++;
      } else if (D.isDirectionalLight) {
        const W = t.get(D);
        if (W.color.copy(D.color).multiplyScalar(D.intensity), D.castShadow) {
          const et = D.shadow, H = e.get(D);
          H.shadowIntensity = et.intensity, H.shadowBias = et.bias, H.shadowNormalBias = et.normalBias, H.shadowRadius = et.radius, H.shadowMapSize = et.mapSize, n.directionalShadow[p] = H, n.directionalShadowMap[p] = K, n.directionalShadowMatrix[p] = D.shadow.matrix, w++;
        }
        n.directional[p] = W, p++;
      } else if (D.isSpotLight) {
        const W = t.get(D);
        W.position.setFromMatrixPosition(D.matrixWorld), W.color.copy(z).multiplyScalar(V), W.distance = X, W.coneCos = Math.cos(D.angle), W.penumbraCos = Math.cos(D.angle * (1 - D.penumbra)), W.decay = D.decay, n.spot[M] = W;
        const et = D.shadow;
        if (D.map && (n.spotLightMap[C] = D.map, C++, et.updateMatrices(D), D.castShadow && A++), n.spotLightMatrix[M] = et.matrix, D.castShadow) {
          const H = e.get(D);
          H.shadowIntensity = et.intensity, H.shadowBias = et.bias, H.shadowNormalBias = et.normalBias, H.shadowRadius = et.radius, H.shadowMapSize = et.mapSize, n.spotShadow[M] = H, n.spotShadowMap[M] = K, E++;
        }
        M++;
      } else if (D.isRectAreaLight) {
        const W = t.get(D);
        W.color.copy(z).multiplyScalar(V), W.halfWidth.set(D.width * 0.5, 0, 0), W.halfHeight.set(0, D.height * 0.5, 0), n.rectArea[m] = W, m++;
      } else if (D.isPointLight) {
        const W = t.get(D);
        if (W.color.copy(D.color).multiplyScalar(D.intensity), W.distance = D.distance, W.decay = D.decay, D.castShadow) {
          const et = D.shadow, H = e.get(D);
          H.shadowIntensity = et.intensity, H.shadowBias = et.bias, H.shadowNormalBias = et.normalBias, H.shadowRadius = et.radius, H.shadowMapSize = et.mapSize, H.shadowCameraNear = et.camera.near, H.shadowCameraFar = et.camera.far, n.pointShadow[g] = H, n.pointShadowMap[g] = K, n.pointShadowMatrix[g] = D.shadow.matrix, T++;
        }
        n.point[g] = W, g++;
      } else if (D.isHemisphereLight) {
        const W = t.get(D);
        W.skyColor.copy(D.color).multiplyScalar(V), W.groundColor.copy(D.groundColor).multiplyScalar(V), n.hemi[h] = W, h++;
      }
    }
    m > 0 && (i.has("OES_texture_float_linear") === true ? (n.rectAreaLTC1 = rt.LTC_FLOAT_1, n.rectAreaLTC2 = rt.LTC_FLOAT_2) : (n.rectAreaLTC1 = rt.LTC_HALF_1, n.rectAreaLTC2 = rt.LTC_HALF_2)), n.ambient[0] = u, n.ambient[1] = d, n.ambient[2] = f;
    const F = n.hash;
    (F.directionalLength !== p || F.pointLength !== g || F.spotLength !== M || F.rectAreaLength !== m || F.hemiLength !== h || F.numDirectionalShadows !== w || F.numPointShadows !== T || F.numSpotShadows !== E || F.numSpotMaps !== C || F.numLightProbes !== P) && (n.directional.length = p, n.spot.length = M, n.rectArea.length = m, n.point.length = g, n.hemi.length = h, n.directionalShadow.length = w, n.directionalShadowMap.length = w, n.pointShadow.length = T, n.pointShadowMap.length = T, n.spotShadow.length = E, n.spotShadowMap.length = E, n.directionalShadowMatrix.length = w, n.pointShadowMatrix.length = T, n.spotLightMatrix.length = E + C - A, n.spotLightMap.length = C, n.numSpotLightShadowsWithMaps = A, n.numLightProbes = P, F.directionalLength = p, F.pointLength = g, F.spotLength = M, F.rectAreaLength = m, F.hemiLength = h, F.numDirectionalShadows = w, F.numPointShadows = T, F.numSpotShadows = E, F.numSpotMaps = C, F.numLightProbes = P, n.version = bp++);
  }
  function c(l, u) {
    let d = 0, f = 0, p = 0, g = 0, M = 0;
    const m = u.matrixWorldInverse;
    for (let h = 0, w = l.length; h < w; h++) {
      const T = l[h];
      if (T.isDirectionalLight) {
        const E = n.directional[d];
        E.direction.setFromMatrixPosition(T.matrixWorld), r.setFromMatrixPosition(T.target.matrixWorld), E.direction.sub(r), E.direction.transformDirection(m), d++;
      } else if (T.isSpotLight) {
        const E = n.spot[p];
        E.position.setFromMatrixPosition(T.matrixWorld), E.position.applyMatrix4(m), E.direction.setFromMatrixPosition(T.matrixWorld), r.setFromMatrixPosition(T.target.matrixWorld), E.direction.sub(r), E.direction.transformDirection(m), p++;
      } else if (T.isRectAreaLight) {
        const E = n.rectArea[g];
        E.position.setFromMatrixPosition(T.matrixWorld), E.position.applyMatrix4(m), a.identity(), s.copy(T.matrixWorld), s.premultiply(m), a.extractRotation(s), E.halfWidth.set(T.width * 0.5, 0, 0), E.halfHeight.set(0, T.height * 0.5, 0), E.halfWidth.applyMatrix4(a), E.halfHeight.applyMatrix4(a), g++;
      } else if (T.isPointLight) {
        const E = n.point[f];
        E.position.setFromMatrixPosition(T.matrixWorld), E.position.applyMatrix4(m), f++;
      } else if (T.isHemisphereLight) {
        const E = n.hemi[M];
        E.direction.setFromMatrixPosition(T.matrixWorld), E.direction.transformDirection(m), M++;
      }
    }
  }
  return { setup: o, setupView: c, state: n };
}
function yo(i) {
  const t = new wp(i), e = [], n = [];
  function r(u) {
    l.camera = u, e.length = 0, n.length = 0;
  }
  function s(u) {
    e.push(u);
  }
  function a(u) {
    n.push(u);
  }
  function o() {
    t.setup(e);
  }
  function c(u) {
    t.setupView(e, u);
  }
  const l = { lightsArray: e, shadowsArray: n, camera: null, lights: t, transmissionRenderTarget: {} };
  return { init: r, state: l, setupLights: o, setupLightsView: c, pushLight: s, pushShadow: a };
}
function Rp(i) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(r, s = 0) {
    const a = t.get(r);
    let o;
    return a === void 0 ? (o = new yo(i), t.set(r, [o])) : s >= a.length ? (o = new yo(i), a.push(o)) : o = a[s], o;
  }
  function n() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return { get: e, dispose: n };
}
const Cp = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Pp = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Dp(i, t, e) {
  let n = new oa();
  const r = new Pt(), s = new Pt(), a = new jt(), o = new Zc({ depthPacking: Xl }), c = new $c(), l = {}, u = e.maxTextureSize, d = { [gn]: Re, [Re]: gn, [rn]: rn }, f = new vn({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new Pt() }, radius: { value: 4 } }, vertexShader: Cp, fragmentShader: Pp }), p = f.clone();
  p.defines.HORIZONTAL_PASS = 1;
  const g = new an();
  g.setAttribute("position", new Ie(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
  const M = new we(g, f), m = this;
  this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = Ro;
  let h = this.type;
  this.render = function(A, P, F) {
    if (m.enabled === false || m.autoUpdate === false && m.needsUpdate === false || A.length === 0) return;
    const S = i.getRenderTarget(), x = i.getActiveCubeFace(), D = i.getActiveMipmapLevel(), z = i.state;
    z.setBlending(mn), z.buffers.depth.getReversed() === true ? z.buffers.color.setClear(0, 0, 0, 0) : z.buffers.color.setClear(1, 1, 1, 1), z.buffers.depth.setTest(true), z.setScissorTest(false);
    const V = h !== nn && this.type === nn, X = h === nn && this.type !== nn;
    for (let K = 0, W = A.length; K < W; K++) {
      const et = A[K], H = et.shadow;
      if (H === void 0) {
        console.warn("THREE.WebGLShadowMap:", et, "has no shadow.");
        continue;
      }
      if (H.autoUpdate === false && H.needsUpdate === false) continue;
      r.copy(H.mapSize);
      const st = H.getFrameExtents();
      if (r.multiply(st), s.copy(H.mapSize), (r.x > u || r.y > u) && (r.x > u && (s.x = Math.floor(u / st.x), r.x = s.x * st.x, H.mapSize.x = s.x), r.y > u && (s.y = Math.floor(u / st.y), r.y = s.y * st.y, H.mapSize.y = s.y)), H.map === null || V === true || X === true) {
        const Et = this.type !== nn ? { minFilter: Ue, magFilter: Ue } : {};
        H.map !== null && H.map.dispose(), H.map = new Nn(r.x, r.y, Et), H.map.texture.name = et.name + ".shadowMap", H.camera.updateProjectionMatrix();
      }
      i.setRenderTarget(H.map), i.clear();
      const ct = H.getViewportCount();
      for (let Et = 0; Et < ct; Et++) {
        const Bt = H.getViewport(Et);
        a.set(s.x * Bt.x, s.y * Bt.y, s.x * Bt.z, s.y * Bt.w), z.viewport(a), H.updateMatrices(et, Et), n = H.getFrustum(), E(P, F, H.camera, et, this.type);
      }
      H.isPointLightShadow !== true && this.type === nn && w(H, F), H.needsUpdate = false;
    }
    h = this.type, m.needsUpdate = false, i.setRenderTarget(S, x, D);
  };
  function w(A, P) {
    const F = t.update(M);
    f.defines.VSM_SAMPLES !== A.blurSamples && (f.defines.VSM_SAMPLES = A.blurSamples, p.defines.VSM_SAMPLES = A.blurSamples, f.needsUpdate = true, p.needsUpdate = true), A.mapPass === null && (A.mapPass = new Nn(r.x, r.y)), f.uniforms.shadow_pass.value = A.map.texture, f.uniforms.resolution.value = A.mapSize, f.uniforms.radius.value = A.radius, i.setRenderTarget(A.mapPass), i.clear(), i.renderBufferDirect(P, null, F, f, M, null), p.uniforms.shadow_pass.value = A.mapPass.texture, p.uniforms.resolution.value = A.mapSize, p.uniforms.radius.value = A.radius, i.setRenderTarget(A.map), i.clear(), i.renderBufferDirect(P, null, F, p, M, null);
  }
  function T(A, P, F, S) {
    let x = null;
    const D = F.isPointLight === true ? A.customDistanceMaterial : A.customDepthMaterial;
    if (D !== void 0) x = D;
    else if (x = F.isPointLight === true ? c : o, i.localClippingEnabled && P.clipShadows === true && Array.isArray(P.clippingPlanes) && P.clippingPlanes.length !== 0 || P.displacementMap && P.displacementScale !== 0 || P.alphaMap && P.alphaTest > 0 || P.map && P.alphaTest > 0 || P.alphaToCoverage === true) {
      const z = x.uuid, V = P.uuid;
      let X = l[z];
      X === void 0 && (X = {}, l[z] = X);
      let K = X[V];
      K === void 0 && (K = x.clone(), X[V] = K, P.addEventListener("dispose", C)), x = K;
    }
    if (x.visible = P.visible, x.wireframe = P.wireframe, S === nn ? x.side = P.shadowSide !== null ? P.shadowSide : P.side : x.side = P.shadowSide !== null ? P.shadowSide : d[P.side], x.alphaMap = P.alphaMap, x.alphaTest = P.alphaToCoverage === true ? 0.5 : P.alphaTest, x.map = P.map, x.clipShadows = P.clipShadows, x.clippingPlanes = P.clippingPlanes, x.clipIntersection = P.clipIntersection, x.displacementMap = P.displacementMap, x.displacementScale = P.displacementScale, x.displacementBias = P.displacementBias, x.wireframeLinewidth = P.wireframeLinewidth, x.linewidth = P.linewidth, F.isPointLight === true && x.isMeshDistanceMaterial === true) {
      const z = i.properties.get(x);
      z.light = F;
    }
    return x;
  }
  function E(A, P, F, S, x) {
    if (A.visible === false) return;
    if (A.layers.test(P.layers) && (A.isMesh || A.isLine || A.isPoints) && (A.castShadow || A.receiveShadow && x === nn) && (!A.frustumCulled || n.intersectsObject(A))) {
      A.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse, A.matrixWorld);
      const V = t.update(A), X = A.material;
      if (Array.isArray(X)) {
        const K = V.groups;
        for (let W = 0, et = K.length; W < et; W++) {
          const H = K[W], st = X[H.materialIndex];
          if (st && st.visible) {
            const ct = T(A, st, S, x);
            A.onBeforeShadow(i, A, P, F, V, ct, H), i.renderBufferDirect(F, null, V, ct, A, H), A.onAfterShadow(i, A, P, F, V, ct, H);
          }
        }
      } else if (X.visible) {
        const K = T(A, X, S, x);
        A.onBeforeShadow(i, A, P, F, V, K, null), i.renderBufferDirect(F, null, V, K, A, null), A.onAfterShadow(i, A, P, F, V, K, null);
      }
    }
    const z = A.children;
    for (let V = 0, X = z.length; V < X; V++) E(z[V], P, F, S, x);
  }
  function C(A) {
    A.target.removeEventListener("dispose", C);
    for (const F in l) {
      const S = l[F], x = A.target.uuid;
      x in S && (S[x].dispose(), delete S[x]);
    }
  }
}
const Lp = { [ss]: as, [os]: hs, [ls]: us, [oi]: cs, [as]: ss, [hs]: os, [us]: ls, [cs]: oi };
function Up(i, t) {
  function e() {
    let R = false;
    const tt = new jt();
    let it = null;
    const ut = new jt(0, 0, 0, 0);
    return { setMask: function($) {
      it !== $ && !R && (i.colorMask($, $, $, $), it = $);
    }, setLocked: function($) {
      R = $;
    }, setClear: function($, q, pt, Dt, Jt) {
      Jt === true && ($ *= Dt, q *= Dt, pt *= Dt), tt.set($, q, pt, Dt), ut.equals(tt) === false && (i.clearColor($, q, pt, Dt), ut.copy(tt));
    }, reset: function() {
      R = false, it = null, ut.set(-1, 0, 0, 0);
    } };
  }
  function n() {
    let R = false, tt = false, it = null, ut = null, $ = null;
    return { setReversed: function(q) {
      if (tt !== q) {
        const pt = t.get("EXT_clip_control");
        q ? pt.clipControlEXT(pt.LOWER_LEFT_EXT, pt.ZERO_TO_ONE_EXT) : pt.clipControlEXT(pt.LOWER_LEFT_EXT, pt.NEGATIVE_ONE_TO_ONE_EXT), tt = q;
        const Dt = $;
        $ = null, this.setClear(Dt);
      }
    }, getReversed: function() {
      return tt;
    }, setTest: function(q) {
      q ? Z(i.DEPTH_TEST) : dt(i.DEPTH_TEST);
    }, setMask: function(q) {
      it !== q && !R && (i.depthMask(q), it = q);
    }, setFunc: function(q) {
      if (tt && (q = Lp[q]), ut !== q) {
        switch (q) {
          case ss:
            i.depthFunc(i.NEVER);
            break;
          case as:
            i.depthFunc(i.ALWAYS);
            break;
          case os:
            i.depthFunc(i.LESS);
            break;
          case oi:
            i.depthFunc(i.LEQUAL);
            break;
          case ls:
            i.depthFunc(i.EQUAL);
            break;
          case cs:
            i.depthFunc(i.GEQUAL);
            break;
          case hs:
            i.depthFunc(i.GREATER);
            break;
          case us:
            i.depthFunc(i.NOTEQUAL);
            break;
          default:
            i.depthFunc(i.LEQUAL);
        }
        ut = q;
      }
    }, setLocked: function(q) {
      R = q;
    }, setClear: function(q) {
      $ !== q && (tt && (q = 1 - q), i.clearDepth(q), $ = q);
    }, reset: function() {
      R = false, it = null, ut = null, $ = null, tt = false;
    } };
  }
  function r() {
    let R = false, tt = null, it = null, ut = null, $ = null, q = null, pt = null, Dt = null, Jt = null;
    return { setTest: function(Xt) {
      R || (Xt ? Z(i.STENCIL_TEST) : dt(i.STENCIL_TEST));
    }, setMask: function(Xt) {
      tt !== Xt && !R && (i.stencilMask(Xt), tt = Xt);
    }, setFunc: function(Xt, Ze, We) {
      (it !== Xt || ut !== Ze || $ !== We) && (i.stencilFunc(Xt, Ze, We), it = Xt, ut = Ze, $ = We);
    }, setOp: function(Xt, Ze, We) {
      (q !== Xt || pt !== Ze || Dt !== We) && (i.stencilOp(Xt, Ze, We), q = Xt, pt = Ze, Dt = We);
    }, setLocked: function(Xt) {
      R = Xt;
    }, setClear: function(Xt) {
      Jt !== Xt && (i.clearStencil(Xt), Jt = Xt);
    }, reset: function() {
      R = false, tt = null, it = null, ut = null, $ = null, q = null, pt = null, Dt = null, Jt = null;
    } };
  }
  const s = new e(), a = new n(), o = new r(), c = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap();
  let u = {}, d = {}, f = /* @__PURE__ */ new WeakMap(), p = [], g = null, M = false, m = null, h = null, w = null, T = null, E = null, C = null, A = null, P = new Ht(0, 0, 0), F = 0, S = false, x = null, D = null, z = null, V = null, X = null;
  const K = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let W = false, et = 0;
  const H = i.getParameter(i.VERSION);
  H.indexOf("WebGL") !== -1 ? (et = parseFloat(/^WebGL (\d)/.exec(H)[1]), W = et >= 1) : H.indexOf("OpenGL ES") !== -1 && (et = parseFloat(/^OpenGL ES (\d)/.exec(H)[1]), W = et >= 2);
  let st = null, ct = {};
  const Et = i.getParameter(i.SCISSOR_BOX), Bt = i.getParameter(i.VIEWPORT), $t = new jt().fromArray(Et), ee = new jt().fromArray(Bt);
  function Wt(R, tt, it, ut) {
    const $ = new Uint8Array(4), q = i.createTexture();
    i.bindTexture(R, q), i.texParameteri(R, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(R, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let pt = 0; pt < it; pt++) R === i.TEXTURE_3D || R === i.TEXTURE_2D_ARRAY ? i.texImage3D(tt, 0, i.RGBA, 1, 1, ut, 0, i.RGBA, i.UNSIGNED_BYTE, $) : i.texImage2D(tt + pt, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, $);
    return q;
  }
  const Y = {};
  Y[i.TEXTURE_2D] = Wt(i.TEXTURE_2D, i.TEXTURE_2D, 1), Y[i.TEXTURE_CUBE_MAP] = Wt(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), Y[i.TEXTURE_2D_ARRAY] = Wt(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), Y[i.TEXTURE_3D] = Wt(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1), s.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), Z(i.DEPTH_TEST), a.setFunc(oi), wt(false), mt(ga), Z(i.CULL_FACE), ne(mn);
  function Z(R) {
    u[R] !== true && (i.enable(R), u[R] = true);
  }
  function dt(R) {
    u[R] !== false && (i.disable(R), u[R] = false);
  }
  function Ct(R, tt) {
    return d[R] !== tt ? (i.bindFramebuffer(R, tt), d[R] = tt, R === i.DRAW_FRAMEBUFFER && (d[i.FRAMEBUFFER] = tt), R === i.FRAMEBUFFER && (d[i.DRAW_FRAMEBUFFER] = tt), true) : false;
  }
  function St(R, tt) {
    let it = p, ut = false;
    if (R) {
      it = f.get(tt), it === void 0 && (it = [], f.set(tt, it));
      const $ = R.textures;
      if (it.length !== $.length || it[0] !== i.COLOR_ATTACHMENT0) {
        for (let q = 0, pt = $.length; q < pt; q++) it[q] = i.COLOR_ATTACHMENT0 + q;
        it.length = $.length, ut = true;
      }
    } else it[0] !== i.BACK && (it[0] = i.BACK, ut = true);
    ut && i.drawBuffers(it);
  }
  function kt(R) {
    return g !== R ? (i.useProgram(R), g = R, true) : false;
  }
  const _e = { [Rn]: i.FUNC_ADD, [gl]: i.FUNC_SUBTRACT, [vl]: i.FUNC_REVERSE_SUBTRACT };
  _e[xl] = i.MIN, _e[Ml] = i.MAX;
  const b = { [Sl]: i.ZERO, [El]: i.ONE, [yl]: i.SRC_COLOR, [is]: i.SRC_ALPHA, [Cl]: i.SRC_ALPHA_SATURATE, [wl]: i.DST_COLOR, [bl]: i.DST_ALPHA, [Tl]: i.ONE_MINUS_SRC_COLOR, [rs]: i.ONE_MINUS_SRC_ALPHA, [Rl]: i.ONE_MINUS_DST_COLOR, [Al]: i.ONE_MINUS_DST_ALPHA, [Pl]: i.CONSTANT_COLOR, [Dl]: i.ONE_MINUS_CONSTANT_COLOR, [Ll]: i.CONSTANT_ALPHA, [Ul]: i.ONE_MINUS_CONSTANT_ALPHA };
  function ne(R, tt, it, ut, $, q, pt, Dt, Jt, Xt) {
    if (R === mn) {
      M === true && (dt(i.BLEND), M = false);
      return;
    }
    if (M === false && (Z(i.BLEND), M = true), R !== _l) {
      if (R !== m || Xt !== S) {
        if ((h !== Rn || E !== Rn) && (i.blendEquation(i.FUNC_ADD), h = Rn, E = Rn), Xt) switch (R) {
          case si:
            i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
            break;
          case va:
            i.blendFunc(i.ONE, i.ONE);
            break;
          case xa:
            i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
            break;
          case Ma:
            i.blendFuncSeparate(i.DST_COLOR, i.ONE_MINUS_SRC_ALPHA, i.ZERO, i.ONE);
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", R);
            break;
        }
        else switch (R) {
          case si:
            i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
            break;
          case va:
            i.blendFuncSeparate(i.SRC_ALPHA, i.ONE, i.ONE, i.ONE);
            break;
          case xa:
            console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
            break;
          case Ma:
            console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", R);
            break;
        }
        w = null, T = null, C = null, A = null, P.set(0, 0, 0), F = 0, m = R, S = Xt;
      }
      return;
    }
    $ = $ || tt, q = q || it, pt = pt || ut, (tt !== h || $ !== E) && (i.blendEquationSeparate(_e[tt], _e[$]), h = tt, E = $), (it !== w || ut !== T || q !== C || pt !== A) && (i.blendFuncSeparate(b[it], b[ut], b[q], b[pt]), w = it, T = ut, C = q, A = pt), (Dt.equals(P) === false || Jt !== F) && (i.blendColor(Dt.r, Dt.g, Dt.b, Jt), P.copy(Dt), F = Jt), m = R, S = false;
  }
  function Lt(R, tt) {
    R.side === rn ? dt(i.CULL_FACE) : Z(i.CULL_FACE);
    let it = R.side === Re;
    tt && (it = !it), wt(it), R.blending === si && R.transparent === false ? ne(mn) : ne(R.blending, R.blendEquation, R.blendSrc, R.blendDst, R.blendEquationAlpha, R.blendSrcAlpha, R.blendDstAlpha, R.blendColor, R.blendAlpha, R.premultipliedAlpha), a.setFunc(R.depthFunc), a.setTest(R.depthTest), a.setMask(R.depthWrite), s.setMask(R.colorWrite);
    const ut = R.stencilWrite;
    o.setTest(ut), ut && (o.setMask(R.stencilWriteMask), o.setFunc(R.stencilFunc, R.stencilRef, R.stencilFuncMask), o.setOp(R.stencilFail, R.stencilZFail, R.stencilZPass)), _t(R.polygonOffset, R.polygonOffsetFactor, R.polygonOffsetUnits), R.alphaToCoverage === true ? Z(i.SAMPLE_ALPHA_TO_COVERAGE) : dt(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function wt(R) {
    x !== R && (R ? i.frontFace(i.CW) : i.frontFace(i.CCW), x = R);
  }
  function mt(R) {
    R !== fl ? (Z(i.CULL_FACE), R !== D && (R === ga ? i.cullFace(i.BACK) : R === pl ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : dt(i.CULL_FACE), D = R;
  }
  function ie(R) {
    R !== z && (W && i.lineWidth(R), z = R);
  }
  function _t(R, tt, it) {
    R ? (Z(i.POLYGON_OFFSET_FILL), (V !== tt || X !== it) && (i.polygonOffset(tt, it), V = tt, X = it)) : dt(i.POLYGON_OFFSET_FILL);
  }
  function Nt(R) {
    R ? Z(i.SCISSOR_TEST) : dt(i.SCISSOR_TEST);
  }
  function fe(R) {
    R === void 0 && (R = i.TEXTURE0 + K - 1), st !== R && (i.activeTexture(R), st = R);
  }
  function oe(R, tt, it) {
    it === void 0 && (st === null ? it = i.TEXTURE0 + K - 1 : it = st);
    let ut = ct[it];
    ut === void 0 && (ut = { type: void 0, texture: void 0 }, ct[it] = ut), (ut.type !== R || ut.texture !== tt) && (st !== it && (i.activeTexture(it), st = it), i.bindTexture(R, tt || Y[R]), ut.type = R, ut.texture = tt);
  }
  function y() {
    const R = ct[st];
    R !== void 0 && R.type !== void 0 && (i.bindTexture(R.type, null), R.type = void 0, R.texture = void 0);
  }
  function _() {
    try {
      i.compressedTexImage2D(...arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function N() {
    try {
      i.compressedTexImage3D(...arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function G() {
    try {
      i.texSubImage2D(...arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function j() {
    try {
      i.texSubImage3D(...arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function k() {
    try {
      i.compressedTexSubImage2D(...arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function Mt() {
    try {
      i.compressedTexSubImage3D(...arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function nt() {
    try {
      i.texStorage2D(...arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function gt() {
    try {
      i.texStorage3D(...arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function vt() {
    try {
      i.texImage2D(...arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function Q() {
    try {
      i.texImage3D(...arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function lt(R) {
    $t.equals(R) === false && (i.scissor(R.x, R.y, R.z, R.w), $t.copy(R));
  }
  function At(R) {
    ee.equals(R) === false && (i.viewport(R.x, R.y, R.z, R.w), ee.copy(R));
  }
  function xt(R, tt) {
    let it = l.get(tt);
    it === void 0 && (it = /* @__PURE__ */ new WeakMap(), l.set(tt, it));
    let ut = it.get(R);
    ut === void 0 && (ut = i.getUniformBlockIndex(tt, R.name), it.set(R, ut));
  }
  function at(R, tt) {
    const ut = l.get(tt).get(R);
    c.get(tt) !== ut && (i.uniformBlockBinding(tt, ut, R.__bindingPointIndex), c.set(tt, ut));
  }
  function Ut() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(true, true, true, true), i.clearColor(0, 0, 0, 0), i.depthMask(true), i.depthFunc(i.LESS), a.setReversed(false), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), u = {}, st = null, ct = {}, d = {}, f = /* @__PURE__ */ new WeakMap(), p = [], g = null, M = false, m = null, h = null, w = null, T = null, E = null, C = null, A = null, P = new Ht(0, 0, 0), F = 0, S = false, x = null, D = null, z = null, V = null, X = null, $t.set(0, 0, i.canvas.width, i.canvas.height), ee.set(0, 0, i.canvas.width, i.canvas.height), s.reset(), a.reset(), o.reset();
  }
  return { buffers: { color: s, depth: a, stencil: o }, enable: Z, disable: dt, bindFramebuffer: Ct, drawBuffers: St, useProgram: kt, setBlending: ne, setMaterial: Lt, setFlipSided: wt, setCullFace: mt, setLineWidth: ie, setPolygonOffset: _t, setScissorTest: Nt, activeTexture: fe, bindTexture: oe, unbindTexture: y, compressedTexImage2D: _, compressedTexImage3D: N, texImage2D: vt, texImage3D: Q, updateUBOMapping: xt, uniformBlockBinding: at, texStorage2D: nt, texStorage3D: gt, texSubImage2D: G, texSubImage3D: j, compressedTexSubImage2D: k, compressedTexSubImage3D: Mt, scissor: lt, viewport: At, reset: Ut };
}
function Ip(i, t, e, n, r, s, a) {
  const o = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, c = typeof navigator > "u" ? false : /OculusBrowser/g.test(navigator.userAgent), l = new Pt(), u = /* @__PURE__ */ new WeakMap();
  let d;
  const f = /* @__PURE__ */ new WeakMap();
  let p = false;
  try {
    p = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function g(y, _) {
    return p ? new OffscreenCanvas(y, _) : gr("canvas");
  }
  function M(y, _, N) {
    let G = 1;
    const j = oe(y);
    if ((j.width > N || j.height > N) && (G = N / Math.max(j.width, j.height)), G < 1) if (typeof HTMLImageElement < "u" && y instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && y instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && y instanceof ImageBitmap || typeof VideoFrame < "u" && y instanceof VideoFrame) {
      const k = Math.floor(G * j.width), Mt = Math.floor(G * j.height);
      d === void 0 && (d = g(k, Mt));
      const nt = _ ? g(k, Mt) : d;
      return nt.width = k, nt.height = Mt, nt.getContext("2d").drawImage(y, 0, 0, k, Mt), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + j.width + "x" + j.height + ") to (" + k + "x" + Mt + ")."), nt;
    } else return "data" in y && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + j.width + "x" + j.height + ")."), y;
    return y;
  }
  function m(y) {
    return y.generateMipmaps;
  }
  function h(y) {
    i.generateMipmap(y);
  }
  function w(y) {
    return y.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : y.isWebGL3DRenderTarget ? i.TEXTURE_3D : y.isWebGLArrayRenderTarget || y.isCompressedArrayTexture ? i.TEXTURE_2D_ARRAY : i.TEXTURE_2D;
  }
  function T(y, _, N, G, j = false) {
    if (y !== null) {
      if (i[y] !== void 0) return i[y];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + y + "'");
    }
    let k = _;
    if (_ === i.RED && (N === i.FLOAT && (k = i.R32F), N === i.HALF_FLOAT && (k = i.R16F), N === i.UNSIGNED_BYTE && (k = i.R8)), _ === i.RED_INTEGER && (N === i.UNSIGNED_BYTE && (k = i.R8UI), N === i.UNSIGNED_SHORT && (k = i.R16UI), N === i.UNSIGNED_INT && (k = i.R32UI), N === i.BYTE && (k = i.R8I), N === i.SHORT && (k = i.R16I), N === i.INT && (k = i.R32I)), _ === i.RG && (N === i.FLOAT && (k = i.RG32F), N === i.HALF_FLOAT && (k = i.RG16F), N === i.UNSIGNED_BYTE && (k = i.RG8)), _ === i.RG_INTEGER && (N === i.UNSIGNED_BYTE && (k = i.RG8UI), N === i.UNSIGNED_SHORT && (k = i.RG16UI), N === i.UNSIGNED_INT && (k = i.RG32UI), N === i.BYTE && (k = i.RG8I), N === i.SHORT && (k = i.RG16I), N === i.INT && (k = i.RG32I)), _ === i.RGB_INTEGER && (N === i.UNSIGNED_BYTE && (k = i.RGB8UI), N === i.UNSIGNED_SHORT && (k = i.RGB16UI), N === i.UNSIGNED_INT && (k = i.RGB32UI), N === i.BYTE && (k = i.RGB8I), N === i.SHORT && (k = i.RGB16I), N === i.INT && (k = i.RGB32I)), _ === i.RGBA_INTEGER && (N === i.UNSIGNED_BYTE && (k = i.RGBA8UI), N === i.UNSIGNED_SHORT && (k = i.RGBA16UI), N === i.UNSIGNED_INT && (k = i.RGBA32UI), N === i.BYTE && (k = i.RGBA8I), N === i.SHORT && (k = i.RGBA16I), N === i.INT && (k = i.RGBA32I)), _ === i.RGB && (N === i.UNSIGNED_INT_5_9_9_9_REV && (k = i.RGB9_E5), N === i.UNSIGNED_INT_10F_11F_11F_REV && (k = i.R11F_G11F_B10F)), _ === i.RGBA) {
      const Mt = j ? mr : Gt.getTransfer(G);
      N === i.FLOAT && (k = i.RGBA32F), N === i.HALF_FLOAT && (k = i.RGBA16F), N === i.UNSIGNED_BYTE && (k = Mt === qt ? i.SRGB8_ALPHA8 : i.RGBA8), N === i.UNSIGNED_SHORT_4_4_4_4 && (k = i.RGBA4), N === i.UNSIGNED_SHORT_5_5_5_1 && (k = i.RGB5_A1);
    }
    return (k === i.R16F || k === i.R32F || k === i.RG16F || k === i.RG32F || k === i.RGBA16F || k === i.RGBA32F) && t.get("EXT_color_buffer_float"), k;
  }
  function E(y, _) {
    let N;
    return y ? _ === null || _ === Un || _ === Ri ? N = i.DEPTH24_STENCIL8 : _ === qe ? N = i.DEPTH32F_STENCIL8 : _ === wi && (N = i.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : _ === null || _ === Un || _ === Ri ? N = i.DEPTH_COMPONENT24 : _ === qe ? N = i.DEPTH_COMPONENT32F : _ === wi && (N = i.DEPTH_COMPONENT16), N;
  }
  function C(y, _) {
    return m(y) === true || y.isFramebufferTexture && y.minFilter !== Ue && y.minFilter !== Ye ? Math.log2(Math.max(_.width, _.height)) + 1 : y.mipmaps !== void 0 && y.mipmaps.length > 0 ? y.mipmaps.length : y.isCompressedTexture && Array.isArray(y.image) ? _.mipmaps.length : 1;
  }
  function A(y) {
    const _ = y.target;
    _.removeEventListener("dispose", A), F(_), _.isVideoTexture && u.delete(_);
  }
  function P(y) {
    const _ = y.target;
    _.removeEventListener("dispose", P), x(_);
  }
  function F(y) {
    const _ = n.get(y);
    if (_.__webglInit === void 0) return;
    const N = y.source, G = f.get(N);
    if (G) {
      const j = G[_.__cacheKey];
      j.usedTimes--, j.usedTimes === 0 && S(y), Object.keys(G).length === 0 && f.delete(N);
    }
    n.remove(y);
  }
  function S(y) {
    const _ = n.get(y);
    i.deleteTexture(_.__webglTexture);
    const N = y.source, G = f.get(N);
    delete G[_.__cacheKey], a.memory.textures--;
  }
  function x(y) {
    const _ = n.get(y);
    if (y.depthTexture && (y.depthTexture.dispose(), n.remove(y.depthTexture)), y.isWebGLCubeRenderTarget) for (let G = 0; G < 6; G++) {
      if (Array.isArray(_.__webglFramebuffer[G])) for (let j = 0; j < _.__webglFramebuffer[G].length; j++) i.deleteFramebuffer(_.__webglFramebuffer[G][j]);
      else i.deleteFramebuffer(_.__webglFramebuffer[G]);
      _.__webglDepthbuffer && i.deleteRenderbuffer(_.__webglDepthbuffer[G]);
    }
    else {
      if (Array.isArray(_.__webglFramebuffer)) for (let G = 0; G < _.__webglFramebuffer.length; G++) i.deleteFramebuffer(_.__webglFramebuffer[G]);
      else i.deleteFramebuffer(_.__webglFramebuffer);
      if (_.__webglDepthbuffer && i.deleteRenderbuffer(_.__webglDepthbuffer), _.__webglMultisampledFramebuffer && i.deleteFramebuffer(_.__webglMultisampledFramebuffer), _.__webglColorRenderbuffer) for (let G = 0; G < _.__webglColorRenderbuffer.length; G++) _.__webglColorRenderbuffer[G] && i.deleteRenderbuffer(_.__webglColorRenderbuffer[G]);
      _.__webglDepthRenderbuffer && i.deleteRenderbuffer(_.__webglDepthRenderbuffer);
    }
    const N = y.textures;
    for (let G = 0, j = N.length; G < j; G++) {
      const k = n.get(N[G]);
      k.__webglTexture && (i.deleteTexture(k.__webglTexture), a.memory.textures--), n.remove(N[G]);
    }
    n.remove(y);
  }
  let D = 0;
  function z() {
    D = 0;
  }
  function V() {
    const y = D;
    return y >= r.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + y + " texture units while this GPU supports only " + r.maxTextures), D += 1, y;
  }
  function X(y) {
    const _ = [];
    return _.push(y.wrapS), _.push(y.wrapT), _.push(y.wrapR || 0), _.push(y.magFilter), _.push(y.minFilter), _.push(y.anisotropy), _.push(y.internalFormat), _.push(y.format), _.push(y.type), _.push(y.generateMipmaps), _.push(y.premultiplyAlpha), _.push(y.flipY), _.push(y.unpackAlignment), _.push(y.colorSpace), _.join();
  }
  function K(y, _) {
    const N = n.get(y);
    if (y.isVideoTexture && Nt(y), y.isRenderTargetTexture === false && y.isExternalTexture !== true && y.version > 0 && N.__version !== y.version) {
      const G = y.image;
      if (G === null) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (G.complete === false) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        Y(N, y, _);
        return;
      }
    } else y.isExternalTexture && (N.__webglTexture = y.sourceTexture ? y.sourceTexture : null);
    e.bindTexture(i.TEXTURE_2D, N.__webglTexture, i.TEXTURE0 + _);
  }
  function W(y, _) {
    const N = n.get(y);
    if (y.isRenderTargetTexture === false && y.version > 0 && N.__version !== y.version) {
      Y(N, y, _);
      return;
    }
    e.bindTexture(i.TEXTURE_2D_ARRAY, N.__webglTexture, i.TEXTURE0 + _);
  }
  function et(y, _) {
    const N = n.get(y);
    if (y.isRenderTargetTexture === false && y.version > 0 && N.__version !== y.version) {
      Y(N, y, _);
      return;
    }
    e.bindTexture(i.TEXTURE_3D, N.__webglTexture, i.TEXTURE0 + _);
  }
  function H(y, _) {
    const N = n.get(y);
    if (y.version > 0 && N.__version !== y.version) {
      Z(N, y, _);
      return;
    }
    e.bindTexture(i.TEXTURE_CUBE_MAP, N.__webglTexture, i.TEXTURE0 + _);
  }
  const st = { [ps]: i.REPEAT, [Pn]: i.CLAMP_TO_EDGE, [ms]: i.MIRRORED_REPEAT }, ct = { [Ue]: i.NEAREST, [Gl]: i.NEAREST_MIPMAP_NEAREST, [Oi]: i.NEAREST_MIPMAP_LINEAR, [Ye]: i.LINEAR, [Tr]: i.LINEAR_MIPMAP_NEAREST, [Dn]: i.LINEAR_MIPMAP_LINEAR }, Et = { [ql]: i.NEVER, [Ql]: i.ALWAYS, [Kl]: i.LESS, [Oo]: i.LEQUAL, [jl]: i.EQUAL, [Jl]: i.GEQUAL, [Zl]: i.GREATER, [$l]: i.NOTEQUAL };
  function Bt(y, _) {
    if (_.type === qe && t.has("OES_texture_float_linear") === false && (_.magFilter === Ye || _.magFilter === Tr || _.magFilter === Oi || _.magFilter === Dn || _.minFilter === Ye || _.minFilter === Tr || _.minFilter === Oi || _.minFilter === Dn) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i.texParameteri(y, i.TEXTURE_WRAP_S, st[_.wrapS]), i.texParameteri(y, i.TEXTURE_WRAP_T, st[_.wrapT]), (y === i.TEXTURE_3D || y === i.TEXTURE_2D_ARRAY) && i.texParameteri(y, i.TEXTURE_WRAP_R, st[_.wrapR]), i.texParameteri(y, i.TEXTURE_MAG_FILTER, ct[_.magFilter]), i.texParameteri(y, i.TEXTURE_MIN_FILTER, ct[_.minFilter]), _.compareFunction && (i.texParameteri(y, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(y, i.TEXTURE_COMPARE_FUNC, Et[_.compareFunction])), t.has("EXT_texture_filter_anisotropic") === true) {
      if (_.magFilter === Ue || _.minFilter !== Oi && _.minFilter !== Dn || _.type === qe && t.has("OES_texture_float_linear") === false) return;
      if (_.anisotropy > 1 || n.get(_).__currentAnisotropy) {
        const N = t.get("EXT_texture_filter_anisotropic");
        i.texParameterf(y, N.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(_.anisotropy, r.getMaxAnisotropy())), n.get(_).__currentAnisotropy = _.anisotropy;
      }
    }
  }
  function $t(y, _) {
    let N = false;
    y.__webglInit === void 0 && (y.__webglInit = true, _.addEventListener("dispose", A));
    const G = _.source;
    let j = f.get(G);
    j === void 0 && (j = {}, f.set(G, j));
    const k = X(_);
    if (k !== y.__cacheKey) {
      j[k] === void 0 && (j[k] = { texture: i.createTexture(), usedTimes: 0 }, a.memory.textures++, N = true), j[k].usedTimes++;
      const Mt = j[y.__cacheKey];
      Mt !== void 0 && (j[y.__cacheKey].usedTimes--, Mt.usedTimes === 0 && S(_)), y.__cacheKey = k, y.__webglTexture = j[k].texture;
    }
    return N;
  }
  function ee(y, _, N) {
    return Math.floor(Math.floor(y / N) / _);
  }
  function Wt(y, _, N, G) {
    const k = y.updateRanges;
    if (k.length === 0) e.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, _.width, _.height, N, G, _.data);
    else {
      k.sort((Q, lt) => Q.start - lt.start);
      let Mt = 0;
      for (let Q = 1; Q < k.length; Q++) {
        const lt = k[Mt], At = k[Q], xt = lt.start + lt.count, at = ee(At.start, _.width, 4), Ut = ee(lt.start, _.width, 4);
        At.start <= xt + 1 && at === Ut && ee(At.start + At.count - 1, _.width, 4) === at ? lt.count = Math.max(lt.count, At.start + At.count - lt.start) : (++Mt, k[Mt] = At);
      }
      k.length = Mt + 1;
      const nt = i.getParameter(i.UNPACK_ROW_LENGTH), gt = i.getParameter(i.UNPACK_SKIP_PIXELS), vt = i.getParameter(i.UNPACK_SKIP_ROWS);
      i.pixelStorei(i.UNPACK_ROW_LENGTH, _.width);
      for (let Q = 0, lt = k.length; Q < lt; Q++) {
        const At = k[Q], xt = Math.floor(At.start / 4), at = Math.ceil(At.count / 4), Ut = xt % _.width, R = Math.floor(xt / _.width), tt = at, it = 1;
        i.pixelStorei(i.UNPACK_SKIP_PIXELS, Ut), i.pixelStorei(i.UNPACK_SKIP_ROWS, R), e.texSubImage2D(i.TEXTURE_2D, 0, Ut, R, tt, it, N, G, _.data);
      }
      y.clearUpdateRanges(), i.pixelStorei(i.UNPACK_ROW_LENGTH, nt), i.pixelStorei(i.UNPACK_SKIP_PIXELS, gt), i.pixelStorei(i.UNPACK_SKIP_ROWS, vt);
    }
  }
  function Y(y, _, N) {
    let G = i.TEXTURE_2D;
    (_.isDataArrayTexture || _.isCompressedArrayTexture) && (G = i.TEXTURE_2D_ARRAY), _.isData3DTexture && (G = i.TEXTURE_3D);
    const j = $t(y, _), k = _.source;
    e.bindTexture(G, y.__webglTexture, i.TEXTURE0 + N);
    const Mt = n.get(k);
    if (k.version !== Mt.__version || j === true) {
      e.activeTexture(i.TEXTURE0 + N);
      const nt = Gt.getPrimaries(Gt.workingColorSpace), gt = _.colorSpace === pn ? null : Gt.getPrimaries(_.colorSpace), vt = _.colorSpace === pn || nt === gt ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, vt);
      let Q = M(_.image, false, r.maxTextureSize);
      Q = fe(_, Q);
      const lt = s.convert(_.format, _.colorSpace), At = s.convert(_.type);
      let xt = T(_.internalFormat, lt, At, _.colorSpace, _.isVideoTexture);
      Bt(G, _);
      let at;
      const Ut = _.mipmaps, R = _.isVideoTexture !== true, tt = Mt.__version === void 0 || j === true, it = k.dataReady, ut = C(_, Q);
      if (_.isDepthTexture) xt = E(_.format === Pi, _.type), tt && (R ? e.texStorage2D(i.TEXTURE_2D, 1, xt, Q.width, Q.height) : e.texImage2D(i.TEXTURE_2D, 0, xt, Q.width, Q.height, 0, lt, At, null));
      else if (_.isDataTexture) if (Ut.length > 0) {
        R && tt && e.texStorage2D(i.TEXTURE_2D, ut, xt, Ut[0].width, Ut[0].height);
        for (let $ = 0, q = Ut.length; $ < q; $++) at = Ut[$], R ? it && e.texSubImage2D(i.TEXTURE_2D, $, 0, 0, at.width, at.height, lt, At, at.data) : e.texImage2D(i.TEXTURE_2D, $, xt, at.width, at.height, 0, lt, At, at.data);
        _.generateMipmaps = false;
      } else R ? (tt && e.texStorage2D(i.TEXTURE_2D, ut, xt, Q.width, Q.height), it && Wt(_, Q, lt, At)) : e.texImage2D(i.TEXTURE_2D, 0, xt, Q.width, Q.height, 0, lt, At, Q.data);
      else if (_.isCompressedTexture) if (_.isCompressedArrayTexture) {
        R && tt && e.texStorage3D(i.TEXTURE_2D_ARRAY, ut, xt, Ut[0].width, Ut[0].height, Q.depth);
        for (let $ = 0, q = Ut.length; $ < q; $++) if (at = Ut[$], _.format !== Ve) if (lt !== null) if (R) {
          if (it) if (_.layerUpdates.size > 0) {
            const pt = Ja(at.width, at.height, _.format, _.type);
            for (const Dt of _.layerUpdates) {
              const Jt = at.data.subarray(Dt * pt / at.data.BYTES_PER_ELEMENT, (Dt + 1) * pt / at.data.BYTES_PER_ELEMENT);
              e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, $, 0, 0, Dt, at.width, at.height, 1, lt, Jt);
            }
            _.clearLayerUpdates();
          } else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, $, 0, 0, 0, at.width, at.height, Q.depth, lt, at.data);
        } else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY, $, xt, at.width, at.height, Q.depth, 0, at.data, 0, 0);
        else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
        else R ? it && e.texSubImage3D(i.TEXTURE_2D_ARRAY, $, 0, 0, 0, at.width, at.height, Q.depth, lt, At, at.data) : e.texImage3D(i.TEXTURE_2D_ARRAY, $, xt, at.width, at.height, Q.depth, 0, lt, At, at.data);
      } else {
        R && tt && e.texStorage2D(i.TEXTURE_2D, ut, xt, Ut[0].width, Ut[0].height);
        for (let $ = 0, q = Ut.length; $ < q; $++) at = Ut[$], _.format !== Ve ? lt !== null ? R ? it && e.compressedTexSubImage2D(i.TEXTURE_2D, $, 0, 0, at.width, at.height, lt, at.data) : e.compressedTexImage2D(i.TEXTURE_2D, $, xt, at.width, at.height, 0, at.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : R ? it && e.texSubImage2D(i.TEXTURE_2D, $, 0, 0, at.width, at.height, lt, At, at.data) : e.texImage2D(i.TEXTURE_2D, $, xt, at.width, at.height, 0, lt, At, at.data);
      }
      else if (_.isDataArrayTexture) if (R) {
        if (tt && e.texStorage3D(i.TEXTURE_2D_ARRAY, ut, xt, Q.width, Q.height, Q.depth), it) if (_.layerUpdates.size > 0) {
          const $ = Ja(Q.width, Q.height, _.format, _.type);
          for (const q of _.layerUpdates) {
            const pt = Q.data.subarray(q * $ / Q.data.BYTES_PER_ELEMENT, (q + 1) * $ / Q.data.BYTES_PER_ELEMENT);
            e.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, q, Q.width, Q.height, 1, lt, At, pt);
          }
          _.clearLayerUpdates();
        } else e.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, Q.width, Q.height, Q.depth, lt, At, Q.data);
      } else e.texImage3D(i.TEXTURE_2D_ARRAY, 0, xt, Q.width, Q.height, Q.depth, 0, lt, At, Q.data);
      else if (_.isData3DTexture) R ? (tt && e.texStorage3D(i.TEXTURE_3D, ut, xt, Q.width, Q.height, Q.depth), it && e.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, Q.width, Q.height, Q.depth, lt, At, Q.data)) : e.texImage3D(i.TEXTURE_3D, 0, xt, Q.width, Q.height, Q.depth, 0, lt, At, Q.data);
      else if (_.isFramebufferTexture) {
        if (tt) if (R) e.texStorage2D(i.TEXTURE_2D, ut, xt, Q.width, Q.height);
        else {
          let $ = Q.width, q = Q.height;
          for (let pt = 0; pt < ut; pt++) e.texImage2D(i.TEXTURE_2D, pt, xt, $, q, 0, lt, At, null), $ >>= 1, q >>= 1;
        }
      } else if (Ut.length > 0) {
        if (R && tt) {
          const $ = oe(Ut[0]);
          e.texStorage2D(i.TEXTURE_2D, ut, xt, $.width, $.height);
        }
        for (let $ = 0, q = Ut.length; $ < q; $++) at = Ut[$], R ? it && e.texSubImage2D(i.TEXTURE_2D, $, 0, 0, lt, At, at) : e.texImage2D(i.TEXTURE_2D, $, xt, lt, At, at);
        _.generateMipmaps = false;
      } else if (R) {
        if (tt) {
          const $ = oe(Q);
          e.texStorage2D(i.TEXTURE_2D, ut, xt, $.width, $.height);
        }
        it && e.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, lt, At, Q);
      } else e.texImage2D(i.TEXTURE_2D, 0, xt, lt, At, Q);
      m(_) && h(G), Mt.__version = k.version, _.onUpdate && _.onUpdate(_);
    }
    y.__version = _.version;
  }
  function Z(y, _, N) {
    if (_.image.length !== 6) return;
    const G = $t(y, _), j = _.source;
    e.bindTexture(i.TEXTURE_CUBE_MAP, y.__webglTexture, i.TEXTURE0 + N);
    const k = n.get(j);
    if (j.version !== k.__version || G === true) {
      e.activeTexture(i.TEXTURE0 + N);
      const Mt = Gt.getPrimaries(Gt.workingColorSpace), nt = _.colorSpace === pn ? null : Gt.getPrimaries(_.colorSpace), gt = _.colorSpace === pn || Mt === nt ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, gt);
      const vt = _.isCompressedTexture || _.image[0].isCompressedTexture, Q = _.image[0] && _.image[0].isDataTexture, lt = [];
      for (let q = 0; q < 6; q++) !vt && !Q ? lt[q] = M(_.image[q], true, r.maxCubemapSize) : lt[q] = Q ? _.image[q].image : _.image[q], lt[q] = fe(_, lt[q]);
      const At = lt[0], xt = s.convert(_.format, _.colorSpace), at = s.convert(_.type), Ut = T(_.internalFormat, xt, at, _.colorSpace), R = _.isVideoTexture !== true, tt = k.__version === void 0 || G === true, it = j.dataReady;
      let ut = C(_, At);
      Bt(i.TEXTURE_CUBE_MAP, _);
      let $;
      if (vt) {
        R && tt && e.texStorage2D(i.TEXTURE_CUBE_MAP, ut, Ut, At.width, At.height);
        for (let q = 0; q < 6; q++) {
          $ = lt[q].mipmaps;
          for (let pt = 0; pt < $.length; pt++) {
            const Dt = $[pt];
            _.format !== Ve ? xt !== null ? R ? it && e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, pt, 0, 0, Dt.width, Dt.height, xt, Dt.data) : e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, pt, Ut, Dt.width, Dt.height, 0, Dt.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : R ? it && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, pt, 0, 0, Dt.width, Dt.height, xt, at, Dt.data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, pt, Ut, Dt.width, Dt.height, 0, xt, at, Dt.data);
          }
        }
      } else {
        if ($ = _.mipmaps, R && tt) {
          $.length > 0 && ut++;
          const q = oe(lt[0]);
          e.texStorage2D(i.TEXTURE_CUBE_MAP, ut, Ut, q.width, q.height);
        }
        for (let q = 0; q < 6; q++) if (Q) {
          R ? it && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, 0, 0, 0, lt[q].width, lt[q].height, xt, at, lt[q].data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, 0, Ut, lt[q].width, lt[q].height, 0, xt, at, lt[q].data);
          for (let pt = 0; pt < $.length; pt++) {
            const Jt = $[pt].image[q].image;
            R ? it && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, pt + 1, 0, 0, Jt.width, Jt.height, xt, at, Jt.data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, pt + 1, Ut, Jt.width, Jt.height, 0, xt, at, Jt.data);
          }
        } else {
          R ? it && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, 0, 0, 0, xt, at, lt[q]) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, 0, Ut, xt, at, lt[q]);
          for (let pt = 0; pt < $.length; pt++) {
            const Dt = $[pt];
            R ? it && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, pt + 1, 0, 0, xt, at, Dt.image[q]) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, pt + 1, Ut, xt, at, Dt.image[q]);
          }
        }
      }
      m(_) && h(i.TEXTURE_CUBE_MAP), k.__version = j.version, _.onUpdate && _.onUpdate(_);
    }
    y.__version = _.version;
  }
  function dt(y, _, N, G, j, k) {
    const Mt = s.convert(N.format, N.colorSpace), nt = s.convert(N.type), gt = T(N.internalFormat, Mt, nt, N.colorSpace), vt = n.get(_), Q = n.get(N);
    if (Q.__renderTarget = _, !vt.__hasExternalTextures) {
      const lt = Math.max(1, _.width >> k), At = Math.max(1, _.height >> k);
      j === i.TEXTURE_3D || j === i.TEXTURE_2D_ARRAY ? e.texImage3D(j, k, gt, lt, At, _.depth, 0, Mt, nt, null) : e.texImage2D(j, k, gt, lt, At, 0, Mt, nt, null);
    }
    e.bindFramebuffer(i.FRAMEBUFFER, y), _t(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, G, j, Q.__webglTexture, 0, ie(_)) : (j === i.TEXTURE_2D || j >= i.TEXTURE_CUBE_MAP_POSITIVE_X && j <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, G, j, Q.__webglTexture, k), e.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Ct(y, _, N) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, y), _.depthBuffer) {
      const G = _.depthTexture, j = G && G.isDepthTexture ? G.type : null, k = E(_.stencilBuffer, j), Mt = _.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, nt = ie(_);
      _t(_) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, nt, k, _.width, _.height) : N ? i.renderbufferStorageMultisample(i.RENDERBUFFER, nt, k, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, k, _.width, _.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, Mt, i.RENDERBUFFER, y);
    } else {
      const G = _.textures;
      for (let j = 0; j < G.length; j++) {
        const k = G[j], Mt = s.convert(k.format, k.colorSpace), nt = s.convert(k.type), gt = T(k.internalFormat, Mt, nt, k.colorSpace), vt = ie(_);
        N && _t(_) === false ? i.renderbufferStorageMultisample(i.RENDERBUFFER, vt, gt, _.width, _.height) : _t(_) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, vt, gt, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, gt, _.width, _.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function St(y, _) {
    if (_ && _.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (e.bindFramebuffer(i.FRAMEBUFFER, y), !(_.depthTexture && _.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const G = n.get(_.depthTexture);
    G.__renderTarget = _, (!G.__webglTexture || _.depthTexture.image.width !== _.width || _.depthTexture.image.height !== _.height) && (_.depthTexture.image.width = _.width, _.depthTexture.image.height = _.height, _.depthTexture.needsUpdate = true), K(_.depthTexture, 0);
    const j = G.__webglTexture, k = ie(_);
    if (_.depthTexture.format === Ci) _t(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, j, 0, k) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, j, 0);
    else if (_.depthTexture.format === Pi) _t(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, j, 0, k) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, j, 0);
    else throw new Error("Unknown depthTexture format");
  }
  function kt(y) {
    const _ = n.get(y), N = y.isWebGLCubeRenderTarget === true;
    if (_.__boundDepthTexture !== y.depthTexture) {
      const G = y.depthTexture;
      if (_.__depthDisposeCallback && _.__depthDisposeCallback(), G) {
        const j = () => {
          delete _.__boundDepthTexture, delete _.__depthDisposeCallback, G.removeEventListener("dispose", j);
        };
        G.addEventListener("dispose", j), _.__depthDisposeCallback = j;
      }
      _.__boundDepthTexture = G;
    }
    if (y.depthTexture && !_.__autoAllocateDepthBuffer) {
      if (N) throw new Error("target.depthTexture not supported in Cube render targets");
      const G = y.texture.mipmaps;
      G && G.length > 0 ? St(_.__webglFramebuffer[0], y) : St(_.__webglFramebuffer, y);
    } else if (N) {
      _.__webglDepthbuffer = [];
      for (let G = 0; G < 6; G++) if (e.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer[G]), _.__webglDepthbuffer[G] === void 0) _.__webglDepthbuffer[G] = i.createRenderbuffer(), Ct(_.__webglDepthbuffer[G], y, false);
      else {
        const j = y.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, k = _.__webglDepthbuffer[G];
        i.bindRenderbuffer(i.RENDERBUFFER, k), i.framebufferRenderbuffer(i.FRAMEBUFFER, j, i.RENDERBUFFER, k);
      }
    } else {
      const G = y.texture.mipmaps;
      if (G && G.length > 0 ? e.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer[0]) : e.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer), _.__webglDepthbuffer === void 0) _.__webglDepthbuffer = i.createRenderbuffer(), Ct(_.__webglDepthbuffer, y, false);
      else {
        const j = y.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, k = _.__webglDepthbuffer;
        i.bindRenderbuffer(i.RENDERBUFFER, k), i.framebufferRenderbuffer(i.FRAMEBUFFER, j, i.RENDERBUFFER, k);
      }
    }
    e.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function _e(y, _, N) {
    const G = n.get(y);
    _ !== void 0 && dt(G.__webglFramebuffer, y, y.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), N !== void 0 && kt(y);
  }
  function b(y) {
    const _ = y.texture, N = n.get(y), G = n.get(_);
    y.addEventListener("dispose", P);
    const j = y.textures, k = y.isWebGLCubeRenderTarget === true, Mt = j.length > 1;
    if (Mt || (G.__webglTexture === void 0 && (G.__webglTexture = i.createTexture()), G.__version = _.version, a.memory.textures++), k) {
      N.__webglFramebuffer = [];
      for (let nt = 0; nt < 6; nt++) if (_.mipmaps && _.mipmaps.length > 0) {
        N.__webglFramebuffer[nt] = [];
        for (let gt = 0; gt < _.mipmaps.length; gt++) N.__webglFramebuffer[nt][gt] = i.createFramebuffer();
      } else N.__webglFramebuffer[nt] = i.createFramebuffer();
    } else {
      if (_.mipmaps && _.mipmaps.length > 0) {
        N.__webglFramebuffer = [];
        for (let nt = 0; nt < _.mipmaps.length; nt++) N.__webglFramebuffer[nt] = i.createFramebuffer();
      } else N.__webglFramebuffer = i.createFramebuffer();
      if (Mt) for (let nt = 0, gt = j.length; nt < gt; nt++) {
        const vt = n.get(j[nt]);
        vt.__webglTexture === void 0 && (vt.__webglTexture = i.createTexture(), a.memory.textures++);
      }
      if (y.samples > 0 && _t(y) === false) {
        N.__webglMultisampledFramebuffer = i.createFramebuffer(), N.__webglColorRenderbuffer = [], e.bindFramebuffer(i.FRAMEBUFFER, N.__webglMultisampledFramebuffer);
        for (let nt = 0; nt < j.length; nt++) {
          const gt = j[nt];
          N.__webglColorRenderbuffer[nt] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, N.__webglColorRenderbuffer[nt]);
          const vt = s.convert(gt.format, gt.colorSpace), Q = s.convert(gt.type), lt = T(gt.internalFormat, vt, Q, gt.colorSpace, y.isXRRenderTarget === true), At = ie(y);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, At, lt, y.width, y.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + nt, i.RENDERBUFFER, N.__webglColorRenderbuffer[nt]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), y.depthBuffer && (N.__webglDepthRenderbuffer = i.createRenderbuffer(), Ct(N.__webglDepthRenderbuffer, y, true)), e.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (k) {
      e.bindTexture(i.TEXTURE_CUBE_MAP, G.__webglTexture), Bt(i.TEXTURE_CUBE_MAP, _);
      for (let nt = 0; nt < 6; nt++) if (_.mipmaps && _.mipmaps.length > 0) for (let gt = 0; gt < _.mipmaps.length; gt++) dt(N.__webglFramebuffer[nt][gt], y, _, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + nt, gt);
      else dt(N.__webglFramebuffer[nt], y, _, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + nt, 0);
      m(_) && h(i.TEXTURE_CUBE_MAP), e.unbindTexture();
    } else if (Mt) {
      for (let nt = 0, gt = j.length; nt < gt; nt++) {
        const vt = j[nt], Q = n.get(vt);
        let lt = i.TEXTURE_2D;
        (y.isWebGL3DRenderTarget || y.isWebGLArrayRenderTarget) && (lt = y.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), e.bindTexture(lt, Q.__webglTexture), Bt(lt, vt), dt(N.__webglFramebuffer, y, vt, i.COLOR_ATTACHMENT0 + nt, lt, 0), m(vt) && h(lt);
      }
      e.unbindTexture();
    } else {
      let nt = i.TEXTURE_2D;
      if ((y.isWebGL3DRenderTarget || y.isWebGLArrayRenderTarget) && (nt = y.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), e.bindTexture(nt, G.__webglTexture), Bt(nt, _), _.mipmaps && _.mipmaps.length > 0) for (let gt = 0; gt < _.mipmaps.length; gt++) dt(N.__webglFramebuffer[gt], y, _, i.COLOR_ATTACHMENT0, nt, gt);
      else dt(N.__webglFramebuffer, y, _, i.COLOR_ATTACHMENT0, nt, 0);
      m(_) && h(nt), e.unbindTexture();
    }
    y.depthBuffer && kt(y);
  }
  function ne(y) {
    const _ = y.textures;
    for (let N = 0, G = _.length; N < G; N++) {
      const j = _[N];
      if (m(j)) {
        const k = w(y), Mt = n.get(j).__webglTexture;
        e.bindTexture(k, Mt), h(k), e.unbindTexture();
      }
    }
  }
  const Lt = [], wt = [];
  function mt(y) {
    if (y.samples > 0) {
      if (_t(y) === false) {
        const _ = y.textures, N = y.width, G = y.height;
        let j = i.COLOR_BUFFER_BIT;
        const k = y.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, Mt = n.get(y), nt = _.length > 1;
        if (nt) for (let vt = 0; vt < _.length; vt++) e.bindFramebuffer(i.FRAMEBUFFER, Mt.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + vt, i.RENDERBUFFER, null), e.bindFramebuffer(i.FRAMEBUFFER, Mt.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + vt, i.TEXTURE_2D, null, 0);
        e.bindFramebuffer(i.READ_FRAMEBUFFER, Mt.__webglMultisampledFramebuffer);
        const gt = y.texture.mipmaps;
        gt && gt.length > 0 ? e.bindFramebuffer(i.DRAW_FRAMEBUFFER, Mt.__webglFramebuffer[0]) : e.bindFramebuffer(i.DRAW_FRAMEBUFFER, Mt.__webglFramebuffer);
        for (let vt = 0; vt < _.length; vt++) {
          if (y.resolveDepthBuffer && (y.depthBuffer && (j |= i.DEPTH_BUFFER_BIT), y.stencilBuffer && y.resolveStencilBuffer && (j |= i.STENCIL_BUFFER_BIT)), nt) {
            i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, Mt.__webglColorRenderbuffer[vt]);
            const Q = n.get(_[vt]).__webglTexture;
            i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, Q, 0);
          }
          i.blitFramebuffer(0, 0, N, G, 0, 0, N, G, j, i.NEAREST), c === true && (Lt.length = 0, wt.length = 0, Lt.push(i.COLOR_ATTACHMENT0 + vt), y.depthBuffer && y.resolveDepthBuffer === false && (Lt.push(k), wt.push(k), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, wt)), i.invalidateFramebuffer(i.READ_FRAMEBUFFER, Lt));
        }
        if (e.bindFramebuffer(i.READ_FRAMEBUFFER, null), e.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), nt) for (let vt = 0; vt < _.length; vt++) {
          e.bindFramebuffer(i.FRAMEBUFFER, Mt.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + vt, i.RENDERBUFFER, Mt.__webglColorRenderbuffer[vt]);
          const Q = n.get(_[vt]).__webglTexture;
          e.bindFramebuffer(i.FRAMEBUFFER, Mt.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + vt, i.TEXTURE_2D, Q, 0);
        }
        e.bindFramebuffer(i.DRAW_FRAMEBUFFER, Mt.__webglMultisampledFramebuffer);
      } else if (y.depthBuffer && y.resolveDepthBuffer === false && c) {
        const _ = y.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [_]);
      }
    }
  }
  function ie(y) {
    return Math.min(r.maxSamples, y.samples);
  }
  function _t(y) {
    const _ = n.get(y);
    return y.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === true && _.__useRenderToTexture !== false;
  }
  function Nt(y) {
    const _ = a.render.frame;
    u.get(y) !== _ && (u.set(y, _), y.update());
  }
  function fe(y, _) {
    const N = y.colorSpace, G = y.format, j = y.type;
    return y.isCompressedTexture === true || y.isVideoTexture === true || N !== hi && N !== pn && (Gt.getTransfer(N) === qt ? (G !== Ve || j !== je) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", N)), _;
  }
  function oe(y) {
    return typeof HTMLImageElement < "u" && y instanceof HTMLImageElement ? (l.width = y.naturalWidth || y.width, l.height = y.naturalHeight || y.height) : typeof VideoFrame < "u" && y instanceof VideoFrame ? (l.width = y.displayWidth, l.height = y.displayHeight) : (l.width = y.width, l.height = y.height), l;
  }
  this.allocateTextureUnit = V, this.resetTextureUnits = z, this.setTexture2D = K, this.setTexture2DArray = W, this.setTexture3D = et, this.setTextureCube = H, this.rebindTextures = _e, this.setupRenderTarget = b, this.updateRenderTargetMipmap = ne, this.updateMultisampleRenderTarget = mt, this.setupDepthRenderbuffer = kt, this.setupFrameBufferTexture = dt, this.useMultisampledRTT = _t;
}
function Np(i, t) {
  function e(n, r = pn) {
    let s;
    const a = Gt.getTransfer(r);
    if (n === je) return i.UNSIGNED_BYTE;
    if (n === js) return i.UNSIGNED_SHORT_4_4_4_4;
    if (n === Zs) return i.UNSIGNED_SHORT_5_5_5_1;
    if (n === Lo) return i.UNSIGNED_INT_5_9_9_9_REV;
    if (n === Uo) return i.UNSIGNED_INT_10F_11F_11F_REV;
    if (n === Po) return i.BYTE;
    if (n === Do) return i.SHORT;
    if (n === wi) return i.UNSIGNED_SHORT;
    if (n === Ks) return i.INT;
    if (n === Un) return i.UNSIGNED_INT;
    if (n === qe) return i.FLOAT;
    if (n === Li) return i.HALF_FLOAT;
    if (n === Io) return i.ALPHA;
    if (n === No) return i.RGB;
    if (n === Ve) return i.RGBA;
    if (n === Ci) return i.DEPTH_COMPONENT;
    if (n === Pi) return i.DEPTH_STENCIL;
    if (n === $s) return i.RED;
    if (n === Js) return i.RED_INTEGER;
    if (n === Fo) return i.RG;
    if (n === Qs) return i.RG_INTEGER;
    if (n === ta) return i.RGBA_INTEGER;
    if (n === or || n === lr || n === cr || n === hr) if (a === qt) if (s = t.get("WEBGL_compressed_texture_s3tc_srgb"), s !== null) {
      if (n === or) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
      if (n === lr) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
      if (n === cr) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
      if (n === hr) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
    } else return null;
    else if (s = t.get("WEBGL_compressed_texture_s3tc"), s !== null) {
      if (n === or) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
      if (n === lr) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
      if (n === cr) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      if (n === hr) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
    } else return null;
    if (n === _s || n === gs || n === vs || n === xs) if (s = t.get("WEBGL_compressed_texture_pvrtc"), s !== null) {
      if (n === _s) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
      if (n === gs) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
      if (n === vs) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
      if (n === xs) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
    } else return null;
    if (n === Ms || n === Ss || n === Es) if (s = t.get("WEBGL_compressed_texture_etc"), s !== null) {
      if (n === Ms || n === Ss) return a === qt ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
      if (n === Es) return a === qt ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
    } else return null;
    if (n === ys || n === Ts || n === bs || n === As || n === ws || n === Rs || n === Cs || n === Ps || n === Ds || n === Ls || n === Us || n === Is || n === Ns || n === Fs) if (s = t.get("WEBGL_compressed_texture_astc"), s !== null) {
      if (n === ys) return a === qt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
      if (n === Ts) return a === qt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
      if (n === bs) return a === qt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
      if (n === As) return a === qt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
      if (n === ws) return a === qt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
      if (n === Rs) return a === qt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
      if (n === Cs) return a === qt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
      if (n === Ps) return a === qt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
      if (n === Ds) return a === qt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
      if (n === Ls) return a === qt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
      if (n === Us) return a === qt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
      if (n === Is) return a === qt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
      if (n === Ns) return a === qt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
      if (n === Fs) return a === qt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
    } else return null;
    if (n === Os || n === Bs || n === zs) if (s = t.get("EXT_texture_compression_bptc"), s !== null) {
      if (n === Os) return a === qt ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      if (n === Bs) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
      if (n === zs) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
    } else return null;
    if (n === Hs || n === ks || n === Vs || n === Gs) if (s = t.get("EXT_texture_compression_rgtc"), s !== null) {
      if (n === Hs) return s.COMPRESSED_RED_RGTC1_EXT;
      if (n === ks) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
      if (n === Vs) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
      if (n === Gs) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
    } else return null;
    return n === Ri ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null;
  }
  return { convert: e };
}
const Fp = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, Op = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class Bp {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(t, e) {
    if (this.texture === null) {
      const n = new Ko(t.texture);
      (t.depthNear !== e.depthNear || t.depthFar !== e.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = n;
    }
  }
  getMesh(t) {
    if (this.texture !== null && this.mesh === null) {
      const e = t.cameras[0].viewport, n = new vn({ vertexShader: Fp, fragmentShader: Op, uniforms: { depthColor: { value: this.texture }, depthWidth: { value: e.z }, depthHeight: { value: e.w } } });
      this.mesh = new we(new Bn(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}
class zp extends Fn {
  constructor(t, e) {
    super();
    const n = this;
    let r = null, s = 1, a = null, o = "local-floor", c = 1, l = null, u = null, d = null, f = null, p = null, g = null;
    const M = typeof XRWebGLBinding < "u", m = new Bp(), h = {}, w = e.getContextAttributes();
    let T = null, E = null;
    const C = [], A = [], P = new Pt();
    let F = null;
    const S = new Ae();
    S.viewport = new jt();
    const x = new Ae();
    x.viewport = new jt();
    const D = [S, x], z = new ih();
    let V = null, X = null;
    this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(Y) {
      let Z = C[Y];
      return Z === void 0 && (Z = new Xr(), C[Y] = Z), Z.getTargetRaySpace();
    }, this.getControllerGrip = function(Y) {
      let Z = C[Y];
      return Z === void 0 && (Z = new Xr(), C[Y] = Z), Z.getGripSpace();
    }, this.getHand = function(Y) {
      let Z = C[Y];
      return Z === void 0 && (Z = new Xr(), C[Y] = Z), Z.getHandSpace();
    };
    function K(Y) {
      const Z = A.indexOf(Y.inputSource);
      if (Z === -1) return;
      const dt = C[Z];
      dt !== void 0 && (dt.update(Y.inputSource, Y.frame, l || a), dt.dispatchEvent({ type: Y.type, data: Y.inputSource }));
    }
    function W() {
      r.removeEventListener("select", K), r.removeEventListener("selectstart", K), r.removeEventListener("selectend", K), r.removeEventListener("squeeze", K), r.removeEventListener("squeezestart", K), r.removeEventListener("squeezeend", K), r.removeEventListener("end", W), r.removeEventListener("inputsourceschange", et);
      for (let Y = 0; Y < C.length; Y++) {
        const Z = A[Y];
        Z !== null && (A[Y] = null, C[Y].disconnect(Z));
      }
      V = null, X = null, m.reset();
      for (const Y in h) delete h[Y];
      t.setRenderTarget(T), p = null, f = null, d = null, r = null, E = null, Wt.stop(), n.isPresenting = false, t.setPixelRatio(F), t.setSize(P.width, P.height, false), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(Y) {
      s = Y, n.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(Y) {
      o = Y, n.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || a;
    }, this.setReferenceSpace = function(Y) {
      l = Y;
    }, this.getBaseLayer = function() {
      return f !== null ? f : p;
    }, this.getBinding = function() {
      return d === null && M && (d = new XRWebGLBinding(r, e)), d;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return r;
    }, this.setSession = async function(Y) {
      if (r = Y, r !== null) {
        if (T = t.getRenderTarget(), r.addEventListener("select", K), r.addEventListener("selectstart", K), r.addEventListener("selectend", K), r.addEventListener("squeeze", K), r.addEventListener("squeezestart", K), r.addEventListener("squeezeend", K), r.addEventListener("end", W), r.addEventListener("inputsourceschange", et), w.xrCompatible !== true && await e.makeXRCompatible(), F = t.getPixelRatio(), t.getSize(P), M && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let dt = null, Ct = null, St = null;
          w.depth && (St = w.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24, dt = w.stencil ? Pi : Ci, Ct = w.stencil ? Ri : Un);
          const kt = { colorFormat: e.RGBA8, depthFormat: St, scaleFactor: s };
          d = this.getBinding(), f = d.createProjectionLayer(kt), r.updateRenderState({ layers: [f] }), t.setPixelRatio(1), t.setSize(f.textureWidth, f.textureHeight, false), E = new Nn(f.textureWidth, f.textureHeight, { format: Ve, type: je, depthTexture: new qo(f.textureWidth, f.textureHeight, Ct, void 0, void 0, void 0, void 0, void 0, void 0, dt), stencilBuffer: w.stencil, colorSpace: t.outputColorSpace, samples: w.antialias ? 4 : 0, resolveDepthBuffer: f.ignoreDepthValues === false, resolveStencilBuffer: f.ignoreDepthValues === false });
        } else {
          const dt = { antialias: w.antialias, alpha: true, depth: w.depth, stencil: w.stencil, framebufferScaleFactor: s };
          p = new XRWebGLLayer(r, e, dt), r.updateRenderState({ baseLayer: p }), t.setPixelRatio(1), t.setSize(p.framebufferWidth, p.framebufferHeight, false), E = new Nn(p.framebufferWidth, p.framebufferHeight, { format: Ve, type: je, colorSpace: t.outputColorSpace, stencilBuffer: w.stencil, resolveDepthBuffer: p.ignoreDepthValues === false, resolveStencilBuffer: p.ignoreDepthValues === false });
        }
        E.isXRRenderTarget = true, this.setFoveation(c), l = null, a = await r.requestReferenceSpace(o), Wt.setContext(r), Wt.start(), n.isPresenting = true, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (r !== null) return r.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return m.getDepthTexture();
    };
    function et(Y) {
      for (let Z = 0; Z < Y.removed.length; Z++) {
        const dt = Y.removed[Z], Ct = A.indexOf(dt);
        Ct >= 0 && (A[Ct] = null, C[Ct].disconnect(dt));
      }
      for (let Z = 0; Z < Y.added.length; Z++) {
        const dt = Y.added[Z];
        let Ct = A.indexOf(dt);
        if (Ct === -1) {
          for (let kt = 0; kt < C.length; kt++) if (kt >= A.length) {
            A.push(dt), Ct = kt;
            break;
          } else if (A[kt] === null) {
            A[kt] = dt, Ct = kt;
            break;
          }
          if (Ct === -1) break;
        }
        const St = C[Ct];
        St && St.connect(dt);
      }
    }
    const H = new U(), st = new U();
    function ct(Y, Z, dt) {
      H.setFromMatrixPosition(Z.matrixWorld), st.setFromMatrixPosition(dt.matrixWorld);
      const Ct = H.distanceTo(st), St = Z.projectionMatrix.elements, kt = dt.projectionMatrix.elements, _e = St[14] / (St[10] - 1), b = St[14] / (St[10] + 1), ne = (St[9] + 1) / St[5], Lt = (St[9] - 1) / St[5], wt = (St[8] - 1) / St[0], mt = (kt[8] + 1) / kt[0], ie = _e * wt, _t = _e * mt, Nt = Ct / (-wt + mt), fe = Nt * -wt;
      if (Z.matrixWorld.decompose(Y.position, Y.quaternion, Y.scale), Y.translateX(fe), Y.translateZ(Nt), Y.matrixWorld.compose(Y.position, Y.quaternion, Y.scale), Y.matrixWorldInverse.copy(Y.matrixWorld).invert(), St[10] === -1) Y.projectionMatrix.copy(Z.projectionMatrix), Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse);
      else {
        const oe = _e + Nt, y = b + Nt, _ = ie - fe, N = _t + (Ct - fe), G = ne * b / y * oe, j = Lt * b / y * oe;
        Y.projectionMatrix.makePerspective(_, N, G, j, oe, y), Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert();
      }
    }
    function Et(Y, Z) {
      Z === null ? Y.matrixWorld.copy(Y.matrix) : Y.matrixWorld.multiplyMatrices(Z.matrixWorld, Y.matrix), Y.matrixWorldInverse.copy(Y.matrixWorld).invert();
    }
    this.updateCamera = function(Y) {
      if (r === null) return;
      let Z = Y.near, dt = Y.far;
      m.texture !== null && (m.depthNear > 0 && (Z = m.depthNear), m.depthFar > 0 && (dt = m.depthFar)), z.near = x.near = S.near = Z, z.far = x.far = S.far = dt, (V !== z.near || X !== z.far) && (r.updateRenderState({ depthNear: z.near, depthFar: z.far }), V = z.near, X = z.far), z.layers.mask = Y.layers.mask | 6, S.layers.mask = z.layers.mask & 3, x.layers.mask = z.layers.mask & 5;
      const Ct = Y.parent, St = z.cameras;
      Et(z, Ct);
      for (let kt = 0; kt < St.length; kt++) Et(St[kt], Ct);
      St.length === 2 ? ct(z, S, x) : z.projectionMatrix.copy(S.projectionMatrix), Bt(Y, z, Ct);
    };
    function Bt(Y, Z, dt) {
      dt === null ? Y.matrix.copy(Z.matrixWorld) : (Y.matrix.copy(dt.matrixWorld), Y.matrix.invert(), Y.matrix.multiply(Z.matrixWorld)), Y.matrix.decompose(Y.position, Y.quaternion, Y.scale), Y.updateMatrixWorld(true), Y.projectionMatrix.copy(Z.projectionMatrix), Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse), Y.isPerspectiveCamera && (Y.fov = ui * 2 * Math.atan(1 / Y.projectionMatrix.elements[5]), Y.zoom = 1);
    }
    this.getCamera = function() {
      return z;
    }, this.getFoveation = function() {
      if (!(f === null && p === null)) return c;
    }, this.setFoveation = function(Y) {
      c = Y, f !== null && (f.fixedFoveation = Y), p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = Y);
    }, this.hasDepthSensing = function() {
      return m.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return m.getMesh(z);
    }, this.getCameraTexture = function(Y) {
      return h[Y];
    };
    let $t = null;
    function ee(Y, Z) {
      if (u = Z.getViewerPose(l || a), g = Z, u !== null) {
        const dt = u.views;
        p !== null && (t.setRenderTargetFramebuffer(E, p.framebuffer), t.setRenderTarget(E));
        let Ct = false;
        dt.length !== z.cameras.length && (z.cameras.length = 0, Ct = true);
        for (let b = 0; b < dt.length; b++) {
          const ne = dt[b];
          let Lt = null;
          if (p !== null) Lt = p.getViewport(ne);
          else {
            const mt = d.getViewSubImage(f, ne);
            Lt = mt.viewport, b === 0 && (t.setRenderTargetTextures(E, mt.colorTexture, mt.depthStencilTexture), t.setRenderTarget(E));
          }
          let wt = D[b];
          wt === void 0 && (wt = new Ae(), wt.layers.enable(b), wt.viewport = new jt(), D[b] = wt), wt.matrix.fromArray(ne.transform.matrix), wt.matrix.decompose(wt.position, wt.quaternion, wt.scale), wt.projectionMatrix.fromArray(ne.projectionMatrix), wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(), wt.viewport.set(Lt.x, Lt.y, Lt.width, Lt.height), b === 0 && (z.matrix.copy(wt.matrix), z.matrix.decompose(z.position, z.quaternion, z.scale)), Ct === true && z.cameras.push(wt);
        }
        const St = r.enabledFeatures;
        if (St && St.includes("depth-sensing") && r.depthUsage == "gpu-optimized" && M) {
          d = n.getBinding();
          const b = d.getDepthInformation(dt[0]);
          b && b.isValid && b.texture && m.init(b, r.renderState);
        }
        if (St && St.includes("camera-access") && M) {
          t.state.unbindTexture(), d = n.getBinding();
          for (let b = 0; b < dt.length; b++) {
            const ne = dt[b].camera;
            if (ne) {
              let Lt = h[ne];
              Lt || (Lt = new Ko(), h[ne] = Lt);
              const wt = d.getCameraImage(ne);
              Lt.sourceTexture = wt;
            }
          }
        }
      }
      for (let dt = 0; dt < C.length; dt++) {
        const Ct = A[dt], St = C[dt];
        Ct !== null && St !== void 0 && St.update(Ct, Z, l || a);
      }
      $t && $t(Y, Z), Z.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: Z }), g = null;
    }
    const Wt = new Zo();
    Wt.setAnimationLoop(ee), this.setAnimationLoop = function(Y) {
      $t = Y;
    }, this.dispose = function() {
    };
  }
}
const An = new Ge(), Hp = new Qt();
function kp(i, t) {
  function e(m, h) {
    m.matrixAutoUpdate === true && m.updateMatrix(), h.value.copy(m.matrix);
  }
  function n(m, h) {
    h.color.getRGB(m.fogColor.value, Go(i)), h.isFog ? (m.fogNear.value = h.near, m.fogFar.value = h.far) : h.isFogExp2 && (m.fogDensity.value = h.density);
  }
  function r(m, h, w, T, E) {
    h.isMeshBasicMaterial || h.isMeshLambertMaterial ? s(m, h) : h.isMeshToonMaterial ? (s(m, h), d(m, h)) : h.isMeshPhongMaterial ? (s(m, h), u(m, h)) : h.isMeshStandardMaterial ? (s(m, h), f(m, h), h.isMeshPhysicalMaterial && p(m, h, E)) : h.isMeshMatcapMaterial ? (s(m, h), g(m, h)) : h.isMeshDepthMaterial ? s(m, h) : h.isMeshDistanceMaterial ? (s(m, h), M(m, h)) : h.isMeshNormalMaterial ? s(m, h) : h.isLineBasicMaterial ? (a(m, h), h.isLineDashedMaterial && o(m, h)) : h.isPointsMaterial ? c(m, h, w, T) : h.isSpriteMaterial ? l(m, h) : h.isShadowMaterial ? (m.color.value.copy(h.color), m.opacity.value = h.opacity) : h.isShaderMaterial && (h.uniformsNeedUpdate = false);
  }
  function s(m, h) {
    m.opacity.value = h.opacity, h.color && m.diffuse.value.copy(h.color), h.emissive && m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity), h.map && (m.map.value = h.map, e(h.map, m.mapTransform)), h.alphaMap && (m.alphaMap.value = h.alphaMap, e(h.alphaMap, m.alphaMapTransform)), h.bumpMap && (m.bumpMap.value = h.bumpMap, e(h.bumpMap, m.bumpMapTransform), m.bumpScale.value = h.bumpScale, h.side === Re && (m.bumpScale.value *= -1)), h.normalMap && (m.normalMap.value = h.normalMap, e(h.normalMap, m.normalMapTransform), m.normalScale.value.copy(h.normalScale), h.side === Re && m.normalScale.value.negate()), h.displacementMap && (m.displacementMap.value = h.displacementMap, e(h.displacementMap, m.displacementMapTransform), m.displacementScale.value = h.displacementScale, m.displacementBias.value = h.displacementBias), h.emissiveMap && (m.emissiveMap.value = h.emissiveMap, e(h.emissiveMap, m.emissiveMapTransform)), h.specularMap && (m.specularMap.value = h.specularMap, e(h.specularMap, m.specularMapTransform)), h.alphaTest > 0 && (m.alphaTest.value = h.alphaTest);
    const w = t.get(h), T = w.envMap, E = w.envMapRotation;
    T && (m.envMap.value = T, An.copy(E), An.x *= -1, An.y *= -1, An.z *= -1, T.isCubeTexture && T.isRenderTargetTexture === false && (An.y *= -1, An.z *= -1), m.envMapRotation.value.setFromMatrix4(Hp.makeRotationFromEuler(An)), m.flipEnvMap.value = T.isCubeTexture && T.isRenderTargetTexture === false ? -1 : 1, m.reflectivity.value = h.reflectivity, m.ior.value = h.ior, m.refractionRatio.value = h.refractionRatio), h.lightMap && (m.lightMap.value = h.lightMap, m.lightMapIntensity.value = h.lightMapIntensity, e(h.lightMap, m.lightMapTransform)), h.aoMap && (m.aoMap.value = h.aoMap, m.aoMapIntensity.value = h.aoMapIntensity, e(h.aoMap, m.aoMapTransform));
  }
  function a(m, h) {
    m.diffuse.value.copy(h.color), m.opacity.value = h.opacity, h.map && (m.map.value = h.map, e(h.map, m.mapTransform));
  }
  function o(m, h) {
    m.dashSize.value = h.dashSize, m.totalSize.value = h.dashSize + h.gapSize, m.scale.value = h.scale;
  }
  function c(m, h, w, T) {
    m.diffuse.value.copy(h.color), m.opacity.value = h.opacity, m.size.value = h.size * w, m.scale.value = T * 0.5, h.map && (m.map.value = h.map, e(h.map, m.uvTransform)), h.alphaMap && (m.alphaMap.value = h.alphaMap, e(h.alphaMap, m.alphaMapTransform)), h.alphaTest > 0 && (m.alphaTest.value = h.alphaTest);
  }
  function l(m, h) {
    m.diffuse.value.copy(h.color), m.opacity.value = h.opacity, m.rotation.value = h.rotation, h.map && (m.map.value = h.map, e(h.map, m.mapTransform)), h.alphaMap && (m.alphaMap.value = h.alphaMap, e(h.alphaMap, m.alphaMapTransform)), h.alphaTest > 0 && (m.alphaTest.value = h.alphaTest);
  }
  function u(m, h) {
    m.specular.value.copy(h.specular), m.shininess.value = Math.max(h.shininess, 1e-4);
  }
  function d(m, h) {
    h.gradientMap && (m.gradientMap.value = h.gradientMap);
  }
  function f(m, h) {
    m.metalness.value = h.metalness, h.metalnessMap && (m.metalnessMap.value = h.metalnessMap, e(h.metalnessMap, m.metalnessMapTransform)), m.roughness.value = h.roughness, h.roughnessMap && (m.roughnessMap.value = h.roughnessMap, e(h.roughnessMap, m.roughnessMapTransform)), h.envMap && (m.envMapIntensity.value = h.envMapIntensity);
  }
  function p(m, h, w) {
    m.ior.value = h.ior, h.sheen > 0 && (m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen), m.sheenRoughness.value = h.sheenRoughness, h.sheenColorMap && (m.sheenColorMap.value = h.sheenColorMap, e(h.sheenColorMap, m.sheenColorMapTransform)), h.sheenRoughnessMap && (m.sheenRoughnessMap.value = h.sheenRoughnessMap, e(h.sheenRoughnessMap, m.sheenRoughnessMapTransform))), h.clearcoat > 0 && (m.clearcoat.value = h.clearcoat, m.clearcoatRoughness.value = h.clearcoatRoughness, h.clearcoatMap && (m.clearcoatMap.value = h.clearcoatMap, e(h.clearcoatMap, m.clearcoatMapTransform)), h.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = h.clearcoatRoughnessMap, e(h.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)), h.clearcoatNormalMap && (m.clearcoatNormalMap.value = h.clearcoatNormalMap, e(h.clearcoatNormalMap, m.clearcoatNormalMapTransform), m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale), h.side === Re && m.clearcoatNormalScale.value.negate())), h.dispersion > 0 && (m.dispersion.value = h.dispersion), h.iridescence > 0 && (m.iridescence.value = h.iridescence, m.iridescenceIOR.value = h.iridescenceIOR, m.iridescenceThicknessMinimum.value = h.iridescenceThicknessRange[0], m.iridescenceThicknessMaximum.value = h.iridescenceThicknessRange[1], h.iridescenceMap && (m.iridescenceMap.value = h.iridescenceMap, e(h.iridescenceMap, m.iridescenceMapTransform)), h.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = h.iridescenceThicknessMap, e(h.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))), h.transmission > 0 && (m.transmission.value = h.transmission, m.transmissionSamplerMap.value = w.texture, m.transmissionSamplerSize.value.set(w.width, w.height), h.transmissionMap && (m.transmissionMap.value = h.transmissionMap, e(h.transmissionMap, m.transmissionMapTransform)), m.thickness.value = h.thickness, h.thicknessMap && (m.thicknessMap.value = h.thicknessMap, e(h.thicknessMap, m.thicknessMapTransform)), m.attenuationDistance.value = h.attenuationDistance, m.attenuationColor.value.copy(h.attenuationColor)), h.anisotropy > 0 && (m.anisotropyVector.value.set(h.anisotropy * Math.cos(h.anisotropyRotation), h.anisotropy * Math.sin(h.anisotropyRotation)), h.anisotropyMap && (m.anisotropyMap.value = h.anisotropyMap, e(h.anisotropyMap, m.anisotropyMapTransform))), m.specularIntensity.value = h.specularIntensity, m.specularColor.value.copy(h.specularColor), h.specularColorMap && (m.specularColorMap.value = h.specularColorMap, e(h.specularColorMap, m.specularColorMapTransform)), h.specularIntensityMap && (m.specularIntensityMap.value = h.specularIntensityMap, e(h.specularIntensityMap, m.specularIntensityMapTransform));
  }
  function g(m, h) {
    h.matcap && (m.matcap.value = h.matcap);
  }
  function M(m, h) {
    const w = t.get(h).light;
    m.referencePosition.value.setFromMatrixPosition(w.matrixWorld), m.nearDistance.value = w.shadow.camera.near, m.farDistance.value = w.shadow.camera.far;
  }
  return { refreshFogUniforms: n, refreshMaterialUniforms: r };
}
function Vp(i, t, e, n) {
  let r = {}, s = {}, a = [];
  const o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function c(w, T) {
    const E = T.program;
    n.uniformBlockBinding(w, E);
  }
  function l(w, T) {
    let E = r[w.id];
    E === void 0 && (g(w), E = u(w), r[w.id] = E, w.addEventListener("dispose", m));
    const C = T.program;
    n.updateUBOMapping(w, C);
    const A = t.render.frame;
    s[w.id] !== A && (f(w), s[w.id] = A);
  }
  function u(w) {
    const T = d();
    w.__bindingPointIndex = T;
    const E = i.createBuffer(), C = w.__size, A = w.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, E), i.bufferData(i.UNIFORM_BUFFER, C, A), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, T, E), E;
  }
  function d() {
    for (let w = 0; w < o; w++) if (a.indexOf(w) === -1) return a.push(w), w;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function f(w) {
    const T = r[w.id], E = w.uniforms, C = w.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, T);
    for (let A = 0, P = E.length; A < P; A++) {
      const F = Array.isArray(E[A]) ? E[A] : [E[A]];
      for (let S = 0, x = F.length; S < x; S++) {
        const D = F[S];
        if (p(D, A, S, C) === true) {
          const z = D.__offset, V = Array.isArray(D.value) ? D.value : [D.value];
          let X = 0;
          for (let K = 0; K < V.length; K++) {
            const W = V[K], et = M(W);
            typeof W == "number" || typeof W == "boolean" ? (D.__data[0] = W, i.bufferSubData(i.UNIFORM_BUFFER, z + X, D.__data)) : W.isMatrix3 ? (D.__data[0] = W.elements[0], D.__data[1] = W.elements[1], D.__data[2] = W.elements[2], D.__data[3] = 0, D.__data[4] = W.elements[3], D.__data[5] = W.elements[4], D.__data[6] = W.elements[5], D.__data[7] = 0, D.__data[8] = W.elements[6], D.__data[9] = W.elements[7], D.__data[10] = W.elements[8], D.__data[11] = 0) : (W.toArray(D.__data, X), X += et.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          i.bufferSubData(i.UNIFORM_BUFFER, z, D.__data);
        }
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function p(w, T, E, C) {
    const A = w.value, P = T + "_" + E;
    if (C[P] === void 0) return typeof A == "number" || typeof A == "boolean" ? C[P] = A : C[P] = A.clone(), true;
    {
      const F = C[P];
      if (typeof A == "number" || typeof A == "boolean") {
        if (F !== A) return C[P] = A, true;
      } else if (F.equals(A) === false) return F.copy(A), true;
    }
    return false;
  }
  function g(w) {
    const T = w.uniforms;
    let E = 0;
    const C = 16;
    for (let P = 0, F = T.length; P < F; P++) {
      const S = Array.isArray(T[P]) ? T[P] : [T[P]];
      for (let x = 0, D = S.length; x < D; x++) {
        const z = S[x], V = Array.isArray(z.value) ? z.value : [z.value];
        for (let X = 0, K = V.length; X < K; X++) {
          const W = V[X], et = M(W), H = E % C, st = H % et.boundary, ct = H + st;
          E += st, ct !== 0 && C - ct < et.storage && (E += C - ct), z.__data = new Float32Array(et.storage / Float32Array.BYTES_PER_ELEMENT), z.__offset = E, E += et.storage;
        }
      }
    }
    const A = E % C;
    return A > 0 && (E += C - A), w.__size = E, w.__cache = {}, this;
  }
  function M(w) {
    const T = { boundary: 0, storage: 0 };
    return typeof w == "number" || typeof w == "boolean" ? (T.boundary = 4, T.storage = 4) : w.isVector2 ? (T.boundary = 8, T.storage = 8) : w.isVector3 || w.isColor ? (T.boundary = 16, T.storage = 12) : w.isVector4 ? (T.boundary = 16, T.storage = 16) : w.isMatrix3 ? (T.boundary = 48, T.storage = 48) : w.isMatrix4 ? (T.boundary = 64, T.storage = 64) : w.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", w), T;
  }
  function m(w) {
    const T = w.target;
    T.removeEventListener("dispose", m);
    const E = a.indexOf(T.__bindingPointIndex);
    a.splice(E, 1), i.deleteBuffer(r[T.id]), delete r[T.id], delete s[T.id];
  }
  function h() {
    for (const w in r) i.deleteBuffer(r[w]);
    a = [], r = {}, s = {};
  }
  return { bind: c, update: l, dispose: h };
}
class Gp {
  constructor(t = {}) {
    const { canvas: e = _c(), context: n = null, depth: r = true, stencil: s = false, alpha: a = false, antialias: o = false, premultipliedAlpha: c = true, preserveDrawingBuffer: l = false, powerPreference: u = "default", failIfMajorPerformanceCaveat: d = false, reversedDepthBuffer: f = false } = t;
    this.isWebGLRenderer = true;
    let p;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      p = n.getContextAttributes().alpha;
    } else p = a;
    const g = new Uint32Array(4), M = new Int32Array(4);
    let m = null, h = null;
    const w = [], T = [];
    this.domElement = e, this.debug = { checkShaderErrors: true, onShaderError: null }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this.toneMapping = _n, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
    const E = this;
    let C = false;
    this._outputColorSpace = be;
    let A = 0, P = 0, F = null, S = -1, x = null;
    const D = new jt(), z = new jt();
    let V = null;
    const X = new Ht(0);
    let K = 0, W = e.width, et = e.height, H = 1, st = null, ct = null;
    const Et = new jt(0, 0, W, et), Bt = new jt(0, 0, W, et);
    let $t = false;
    const ee = new oa();
    let Wt = false, Y = false;
    const Z = new Qt(), dt = new U(), Ct = new jt(), St = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true };
    let kt = false;
    function _e() {
      return F === null ? H : 1;
    }
    let b = n;
    function ne(v, L) {
      return e.getContext(v, L);
    }
    try {
      const v = { alpha: true, depth: r, stencil: s, antialias: o, premultipliedAlpha: c, preserveDrawingBuffer: l, powerPreference: u, failIfMajorPerformanceCaveat: d };
      if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${qs}`), e.addEventListener("webglcontextlost", it, false), e.addEventListener("webglcontextrestored", ut, false), e.addEventListener("webglcontextcreationerror", $, false), b === null) {
        const L = "webgl2";
        if (b = ne(L, v), b === null) throw ne(L) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (v) {
      throw console.error("THREE.WebGLRenderer: " + v.message), v;
    }
    let Lt, wt, mt, ie, _t, Nt, fe, oe, y, _, N, G, j, k, Mt, nt, gt, vt, Q, lt, At, xt, at, Ut;
    function R() {
      Lt = new Jd(b), Lt.init(), xt = new Np(b, Lt), wt = new Xd(b, Lt, t, xt), mt = new Up(b, Lt), wt.reversedDepthBuffer && f && mt.buffers.depth.setReversed(true), ie = new ef(b), _t = new Mp(), Nt = new Ip(b, Lt, mt, _t, wt, xt, ie), fe = new qd(E), oe = new $d(E), y = new oh(b), at = new Gd(b, y), _ = new Qd(b, y, ie, at), N = new rf(b, _, y, ie), Q = new nf(b, wt, Nt), nt = new Yd(_t), G = new xp(E, fe, oe, Lt, wt, at, nt), j = new kp(E, _t), k = new Ep(), Mt = new Rp(Lt), vt = new Vd(E, fe, oe, mt, N, p, c), gt = new Dp(E, N, wt), Ut = new Vp(b, ie, wt, mt), lt = new Wd(b, Lt, ie), At = new tf(b, Lt, ie), ie.programs = G.programs, E.capabilities = wt, E.extensions = Lt, E.properties = _t, E.renderLists = k, E.shadowMap = gt, E.state = mt, E.info = ie;
    }
    R();
    const tt = new zp(E, b);
    this.xr = tt, this.getContext = function() {
      return b;
    }, this.getContextAttributes = function() {
      return b.getContextAttributes();
    }, this.forceContextLoss = function() {
      const v = Lt.get("WEBGL_lose_context");
      v && v.loseContext();
    }, this.forceContextRestore = function() {
      const v = Lt.get("WEBGL_lose_context");
      v && v.restoreContext();
    }, this.getPixelRatio = function() {
      return H;
    }, this.setPixelRatio = function(v) {
      v !== void 0 && (H = v, this.setSize(W, et, false));
    }, this.getSize = function(v) {
      return v.set(W, et);
    }, this.setSize = function(v, L, O = true) {
      if (tt.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      W = v, et = L, e.width = Math.floor(v * H), e.height = Math.floor(L * H), O === true && (e.style.width = v + "px", e.style.height = L + "px"), this.setViewport(0, 0, v, L);
    }, this.getDrawingBufferSize = function(v) {
      return v.set(W * H, et * H).floor();
    }, this.setDrawingBufferSize = function(v, L, O) {
      W = v, et = L, H = O, e.width = Math.floor(v * O), e.height = Math.floor(L * O), this.setViewport(0, 0, v, L);
    }, this.getCurrentViewport = function(v) {
      return v.copy(D);
    }, this.getViewport = function(v) {
      return v.copy(Et);
    }, this.setViewport = function(v, L, O, B) {
      v.isVector4 ? Et.set(v.x, v.y, v.z, v.w) : Et.set(v, L, O, B), mt.viewport(D.copy(Et).multiplyScalar(H).round());
    }, this.getScissor = function(v) {
      return v.copy(Bt);
    }, this.setScissor = function(v, L, O, B) {
      v.isVector4 ? Bt.set(v.x, v.y, v.z, v.w) : Bt.set(v, L, O, B), mt.scissor(z.copy(Bt).multiplyScalar(H).round());
    }, this.getScissorTest = function() {
      return $t;
    }, this.setScissorTest = function(v) {
      mt.setScissorTest($t = v);
    }, this.setOpaqueSort = function(v) {
      st = v;
    }, this.setTransparentSort = function(v) {
      ct = v;
    }, this.getClearColor = function(v) {
      return v.copy(vt.getClearColor());
    }, this.setClearColor = function() {
      vt.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return vt.getClearAlpha();
    }, this.setClearAlpha = function() {
      vt.setClearAlpha(...arguments);
    }, this.clear = function(v = true, L = true, O = true) {
      let B = 0;
      if (v) {
        let I = false;
        if (F !== null) {
          const J = F.texture.format;
          I = J === ta || J === Qs || J === Js;
        }
        if (I) {
          const J = F.texture.type, ot = J === je || J === Un || J === wi || J === Ri || J === js || J === Zs, ft = vt.getClearColor(), ht = vt.getClearAlpha(), bt = ft.r, Rt = ft.g, yt = ft.b;
          ot ? (g[0] = bt, g[1] = Rt, g[2] = yt, g[3] = ht, b.clearBufferuiv(b.COLOR, 0, g)) : (M[0] = bt, M[1] = Rt, M[2] = yt, M[3] = ht, b.clearBufferiv(b.COLOR, 0, M));
        } else B |= b.COLOR_BUFFER_BIT;
      }
      L && (B |= b.DEPTH_BUFFER_BIT), O && (B |= b.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), b.clear(B);
    }, this.clearColor = function() {
      this.clear(true, false, false);
    }, this.clearDepth = function() {
      this.clear(false, true, false);
    }, this.clearStencil = function() {
      this.clear(false, false, true);
    }, this.dispose = function() {
      e.removeEventListener("webglcontextlost", it, false), e.removeEventListener("webglcontextrestored", ut, false), e.removeEventListener("webglcontextcreationerror", $, false), vt.dispose(), k.dispose(), Mt.dispose(), _t.dispose(), fe.dispose(), oe.dispose(), N.dispose(), at.dispose(), Ut.dispose(), G.dispose(), tt.dispose(), tt.removeEventListener("sessionstart", We), tt.removeEventListener("sessionend", ua), xn.stop();
    };
    function it(v) {
      v.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), C = true;
    }
    function ut() {
      console.log("THREE.WebGLRenderer: Context Restored."), C = false;
      const v = ie.autoReset, L = gt.enabled, O = gt.autoUpdate, B = gt.needsUpdate, I = gt.type;
      R(), ie.autoReset = v, gt.enabled = L, gt.autoUpdate = O, gt.needsUpdate = B, gt.type = I;
    }
    function $(v) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", v.statusMessage);
    }
    function q(v) {
      const L = v.target;
      L.removeEventListener("dispose", q), pt(L);
    }
    function pt(v) {
      Dt(v), _t.remove(v);
    }
    function Dt(v) {
      const L = _t.get(v).programs;
      L !== void 0 && (L.forEach(function(O) {
        G.releaseProgram(O);
      }), v.isShaderMaterial && G.releaseShaderCache(v));
    }
    this.renderBufferDirect = function(v, L, O, B, I, J) {
      L === null && (L = St);
      const ot = I.isMesh && I.matrixWorld.determinant() < 0, ft = rl(v, L, O, B, I);
      mt.setMaterial(B, ot);
      let ht = O.index, bt = 1;
      if (B.wireframe === true) {
        if (ht = _.getWireframeAttribute(O), ht === void 0) return;
        bt = 2;
      }
      const Rt = O.drawRange, yt = O.attributes.position;
      let zt = Rt.start * bt, Yt = (Rt.start + Rt.count) * bt;
      J !== null && (zt = Math.max(zt, J.start * bt), Yt = Math.min(Yt, (J.start + J.count) * bt)), ht !== null ? (zt = Math.max(zt, 0), Yt = Math.min(Yt, ht.count)) : yt != null && (zt = Math.max(zt, 0), Yt = Math.min(Yt, yt.count));
      const ae = Yt - zt;
      if (ae < 0 || ae === 1 / 0) return;
      at.setup(I, B, ft, O, ht);
      let te, Zt = lt;
      if (ht !== null && (te = y.get(ht), Zt = At, Zt.setIndex(te)), I.isMesh) B.wireframe === true ? (mt.setLineWidth(B.wireframeLinewidth * _e()), Zt.setMode(b.LINES)) : Zt.setMode(b.TRIANGLES);
      else if (I.isLine) {
        let Tt = B.linewidth;
        Tt === void 0 && (Tt = 1), mt.setLineWidth(Tt * _e()), I.isLineSegments ? Zt.setMode(b.LINES) : I.isLineLoop ? Zt.setMode(b.LINE_LOOP) : Zt.setMode(b.LINE_STRIP);
      } else I.isPoints ? Zt.setMode(b.POINTS) : I.isSprite && Zt.setMode(b.TRIANGLES);
      if (I.isBatchedMesh) if (I._multiDrawInstances !== null) Di("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."), Zt.renderMultiDrawInstances(I._multiDrawStarts, I._multiDrawCounts, I._multiDrawCount, I._multiDrawInstances);
      else if (Lt.get("WEBGL_multi_draw")) Zt.renderMultiDraw(I._multiDrawStarts, I._multiDrawCounts, I._multiDrawCount);
      else {
        const Tt = I._multiDrawStarts, re = I._multiDrawCounts, Vt = I._multiDrawCount, Ce = ht ? y.get(ht).bytesPerElement : 1, zn = _t.get(B).currentProgram.getUniforms();
        for (let Pe = 0; Pe < Vt; Pe++) zn.setValue(b, "_gl_DrawID", Pe), Zt.render(Tt[Pe] / Ce, re[Pe]);
      }
      else if (I.isInstancedMesh) Zt.renderInstances(zt, ae, I.count);
      else if (O.isInstancedBufferGeometry) {
        const Tt = O._maxInstanceCount !== void 0 ? O._maxInstanceCount : 1 / 0, re = Math.min(O.instanceCount, Tt);
        Zt.renderInstances(zt, ae, re);
      } else Zt.render(zt, ae);
    };
    function Jt(v, L, O) {
      v.transparent === true && v.side === rn && v.forceSinglePass === false ? (v.side = Re, v.needsUpdate = true, Fi(v, L, O), v.side = gn, v.needsUpdate = true, Fi(v, L, O), v.side = rn) : Fi(v, L, O);
    }
    this.compile = function(v, L, O = null) {
      O === null && (O = v), h = Mt.get(O), h.init(L), T.push(h), O.traverseVisible(function(I) {
        I.isLight && I.layers.test(L.layers) && (h.pushLight(I), I.castShadow && h.pushShadow(I));
      }), v !== O && v.traverseVisible(function(I) {
        I.isLight && I.layers.test(L.layers) && (h.pushLight(I), I.castShadow && h.pushShadow(I));
      }), h.setupLights();
      const B = /* @__PURE__ */ new Set();
      return v.traverse(function(I) {
        if (!(I.isMesh || I.isPoints || I.isLine || I.isSprite)) return;
        const J = I.material;
        if (J) if (Array.isArray(J)) for (let ot = 0; ot < J.length; ot++) {
          const ft = J[ot];
          Jt(ft, O, I), B.add(ft);
        }
        else Jt(J, O, I), B.add(J);
      }), h = T.pop(), B;
    }, this.compileAsync = function(v, L, O = null) {
      const B = this.compile(v, L, O);
      return new Promise((I) => {
        function J() {
          if (B.forEach(function(ot) {
            _t.get(ot).currentProgram.isReady() && B.delete(ot);
          }), B.size === 0) {
            I(v);
            return;
          }
          setTimeout(J, 10);
        }
        Lt.get("KHR_parallel_shader_compile") !== null ? J() : setTimeout(J, 10);
      });
    };
    let Xt = null;
    function Ze(v) {
      Xt && Xt(v);
    }
    function We() {
      xn.stop();
    }
    function ua() {
      xn.start();
    }
    const xn = new Zo();
    xn.setAnimationLoop(Ze), typeof self < "u" && xn.setContext(self), this.setAnimationLoop = function(v) {
      Xt = v, tt.setAnimationLoop(v), v === null ? xn.stop() : xn.start();
    }, tt.addEventListener("sessionstart", We), tt.addEventListener("sessionend", ua), this.render = function(v, L) {
      if (L !== void 0 && L.isCamera !== true) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (C === true) return;
      if (v.matrixWorldAutoUpdate === true && v.updateMatrixWorld(), L.parent === null && L.matrixWorldAutoUpdate === true && L.updateMatrixWorld(), tt.enabled === true && tt.isPresenting === true && (tt.cameraAutoUpdate === true && tt.updateCamera(L), L = tt.getCamera()), v.isScene === true && v.onBeforeRender(E, v, L, F), h = Mt.get(v, T.length), h.init(L), T.push(h), Z.multiplyMatrices(L.projectionMatrix, L.matrixWorldInverse), ee.setFromProjectionMatrix(Z, Ke, L.reversedDepth), Y = this.localClippingEnabled, Wt = nt.init(this.clippingPlanes, Y), m = k.get(v, w.length), m.init(), w.push(m), tt.enabled === true && tt.isPresenting === true) {
        const J = E.xr.getDepthSensingMesh();
        J !== null && Er(J, L, -1 / 0, E.sortObjects);
      }
      Er(v, L, 0, E.sortObjects), m.finish(), E.sortObjects === true && m.sort(st, ct), kt = tt.enabled === false || tt.isPresenting === false || tt.hasDepthSensing() === false, kt && vt.addToRenderList(m, v), this.info.render.frame++, Wt === true && nt.beginShadows();
      const O = h.state.shadowsArray;
      gt.render(O, v, L), Wt === true && nt.endShadows(), this.info.autoReset === true && this.info.reset();
      const B = m.opaque, I = m.transmissive;
      if (h.setupLights(), L.isArrayCamera) {
        const J = L.cameras;
        if (I.length > 0) for (let ot = 0, ft = J.length; ot < ft; ot++) {
          const ht = J[ot];
          fa(B, I, v, ht);
        }
        kt && vt.render(v);
        for (let ot = 0, ft = J.length; ot < ft; ot++) {
          const ht = J[ot];
          da(m, v, ht, ht.viewport);
        }
      } else I.length > 0 && fa(B, I, v, L), kt && vt.render(v), da(m, v, L);
      F !== null && P === 0 && (Nt.updateMultisampleRenderTarget(F), Nt.updateRenderTargetMipmap(F)), v.isScene === true && v.onAfterRender(E, v, L), at.resetDefaultState(), S = -1, x = null, T.pop(), T.length > 0 ? (h = T[T.length - 1], Wt === true && nt.setGlobalState(E.clippingPlanes, h.state.camera)) : h = null, w.pop(), w.length > 0 ? m = w[w.length - 1] : m = null;
    };
    function Er(v, L, O, B) {
      if (v.visible === false) return;
      if (v.layers.test(L.layers)) {
        if (v.isGroup) O = v.renderOrder;
        else if (v.isLOD) v.autoUpdate === true && v.update(L);
        else if (v.isLight) h.pushLight(v), v.castShadow && h.pushShadow(v);
        else if (v.isSprite) {
          if (!v.frustumCulled || ee.intersectsSprite(v)) {
            B && Ct.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Z);
            const ot = N.update(v), ft = v.material;
            ft.visible && m.push(v, ot, ft, O, Ct.z, null);
          }
        } else if ((v.isMesh || v.isLine || v.isPoints) && (!v.frustumCulled || ee.intersectsObject(v))) {
          const ot = N.update(v), ft = v.material;
          if (B && (v.boundingSphere !== void 0 ? (v.boundingSphere === null && v.computeBoundingSphere(), Ct.copy(v.boundingSphere.center)) : (ot.boundingSphere === null && ot.computeBoundingSphere(), Ct.copy(ot.boundingSphere.center)), Ct.applyMatrix4(v.matrixWorld).applyMatrix4(Z)), Array.isArray(ft)) {
            const ht = ot.groups;
            for (let bt = 0, Rt = ht.length; bt < Rt; bt++) {
              const yt = ht[bt], zt = ft[yt.materialIndex];
              zt && zt.visible && m.push(v, ot, zt, O, Ct.z, yt);
            }
          } else ft.visible && m.push(v, ot, ft, O, Ct.z, null);
        }
      }
      const J = v.children;
      for (let ot = 0, ft = J.length; ot < ft; ot++) Er(J[ot], L, O, B);
    }
    function da(v, L, O, B) {
      const I = v.opaque, J = v.transmissive, ot = v.transparent;
      h.setupLightsView(O), Wt === true && nt.setGlobalState(E.clippingPlanes, O), B && mt.viewport(D.copy(B)), I.length > 0 && Ni(I, L, O), J.length > 0 && Ni(J, L, O), ot.length > 0 && Ni(ot, L, O), mt.buffers.depth.setTest(true), mt.buffers.depth.setMask(true), mt.buffers.color.setMask(true), mt.setPolygonOffset(false);
    }
    function fa(v, L, O, B) {
      if ((O.isScene === true ? O.overrideMaterial : null) !== null) return;
      h.state.transmissionRenderTarget[B.id] === void 0 && (h.state.transmissionRenderTarget[B.id] = new Nn(1, 1, { generateMipmaps: true, type: Lt.has("EXT_color_buffer_half_float") || Lt.has("EXT_color_buffer_float") ? Li : je, minFilter: Dn, samples: 4, stencilBuffer: s, resolveDepthBuffer: false, resolveStencilBuffer: false, colorSpace: Gt.workingColorSpace }));
      const J = h.state.transmissionRenderTarget[B.id], ot = B.viewport || D;
      J.setSize(ot.z * E.transmissionResolutionScale, ot.w * E.transmissionResolutionScale);
      const ft = E.getRenderTarget(), ht = E.getActiveCubeFace(), bt = E.getActiveMipmapLevel();
      E.setRenderTarget(J), E.getClearColor(X), K = E.getClearAlpha(), K < 1 && E.setClearColor(16777215, 0.5), E.clear(), kt && vt.render(O);
      const Rt = E.toneMapping;
      E.toneMapping = _n;
      const yt = B.viewport;
      if (B.viewport !== void 0 && (B.viewport = void 0), h.setupLightsView(B), Wt === true && nt.setGlobalState(E.clippingPlanes, B), Ni(v, O, B), Nt.updateMultisampleRenderTarget(J), Nt.updateRenderTargetMipmap(J), Lt.has("WEBGL_multisampled_render_to_texture") === false) {
        let zt = false;
        for (let Yt = 0, ae = L.length; Yt < ae; Yt++) {
          const te = L[Yt], Zt = te.object, Tt = te.geometry, re = te.material, Vt = te.group;
          if (re.side === rn && Zt.layers.test(B.layers)) {
            const Ce = re.side;
            re.side = Re, re.needsUpdate = true, pa(Zt, O, B, Tt, re, Vt), re.side = Ce, re.needsUpdate = true, zt = true;
          }
        }
        zt === true && (Nt.updateMultisampleRenderTarget(J), Nt.updateRenderTargetMipmap(J));
      }
      E.setRenderTarget(ft, ht, bt), E.setClearColor(X, K), yt !== void 0 && (B.viewport = yt), E.toneMapping = Rt;
    }
    function Ni(v, L, O) {
      const B = L.isScene === true ? L.overrideMaterial : null;
      for (let I = 0, J = v.length; I < J; I++) {
        const ot = v[I], ft = ot.object, ht = ot.geometry, bt = ot.group;
        let Rt = ot.material;
        Rt.allowOverride === true && B !== null && (Rt = B), ft.layers.test(O.layers) && pa(ft, L, O, ht, Rt, bt);
      }
    }
    function pa(v, L, O, B, I, J) {
      v.onBeforeRender(E, L, O, B, I, J), v.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse, v.matrixWorld), v.normalMatrix.getNormalMatrix(v.modelViewMatrix), I.onBeforeRender(E, L, O, B, v, J), I.transparent === true && I.side === rn && I.forceSinglePass === false ? (I.side = Re, I.needsUpdate = true, E.renderBufferDirect(O, L, B, I, v, J), I.side = gn, I.needsUpdate = true, E.renderBufferDirect(O, L, B, I, v, J), I.side = rn) : E.renderBufferDirect(O, L, B, I, v, J), v.onAfterRender(E, L, O, B, I, J);
    }
    function Fi(v, L, O) {
      L.isScene !== true && (L = St);
      const B = _t.get(v), I = h.state.lights, J = h.state.shadowsArray, ot = I.state.version, ft = G.getParameters(v, I.state, J, L, O), ht = G.getProgramCacheKey(ft);
      let bt = B.programs;
      B.environment = v.isMeshStandardMaterial ? L.environment : null, B.fog = L.fog, B.envMap = (v.isMeshStandardMaterial ? oe : fe).get(v.envMap || B.environment), B.envMapRotation = B.environment !== null && v.envMap === null ? L.environmentRotation : v.envMapRotation, bt === void 0 && (v.addEventListener("dispose", q), bt = /* @__PURE__ */ new Map(), B.programs = bt);
      let Rt = bt.get(ht);
      if (Rt !== void 0) {
        if (B.currentProgram === Rt && B.lightsStateVersion === ot) return _a(v, ft), Rt;
      } else ft.uniforms = G.getUniforms(v), v.onBeforeCompile(ft, E), Rt = G.acquireProgram(ft, ht), bt.set(ht, Rt), B.uniforms = ft.uniforms;
      const yt = B.uniforms;
      return (!v.isShaderMaterial && !v.isRawShaderMaterial || v.clipping === true) && (yt.clippingPlanes = nt.uniform), _a(v, ft), B.needsLights = al(v), B.lightsStateVersion = ot, B.needsLights && (yt.ambientLightColor.value = I.state.ambient, yt.lightProbe.value = I.state.probe, yt.directionalLights.value = I.state.directional, yt.directionalLightShadows.value = I.state.directionalShadow, yt.spotLights.value = I.state.spot, yt.spotLightShadows.value = I.state.spotShadow, yt.rectAreaLights.value = I.state.rectArea, yt.ltc_1.value = I.state.rectAreaLTC1, yt.ltc_2.value = I.state.rectAreaLTC2, yt.pointLights.value = I.state.point, yt.pointLightShadows.value = I.state.pointShadow, yt.hemisphereLights.value = I.state.hemi, yt.directionalShadowMap.value = I.state.directionalShadowMap, yt.directionalShadowMatrix.value = I.state.directionalShadowMatrix, yt.spotShadowMap.value = I.state.spotShadowMap, yt.spotLightMatrix.value = I.state.spotLightMatrix, yt.spotLightMap.value = I.state.spotLightMap, yt.pointShadowMap.value = I.state.pointShadowMap, yt.pointShadowMatrix.value = I.state.pointShadowMatrix), B.currentProgram = Rt, B.uniformsList = null, Rt;
    }
    function ma(v) {
      if (v.uniformsList === null) {
        const L = v.currentProgram.getUniforms();
        v.uniformsList = dr.seqWithValue(L.seq, v.uniforms);
      }
      return v.uniformsList;
    }
    function _a(v, L) {
      const O = _t.get(v);
      O.outputColorSpace = L.outputColorSpace, O.batching = L.batching, O.batchingColor = L.batchingColor, O.instancing = L.instancing, O.instancingColor = L.instancingColor, O.instancingMorph = L.instancingMorph, O.skinning = L.skinning, O.morphTargets = L.morphTargets, O.morphNormals = L.morphNormals, O.morphColors = L.morphColors, O.morphTargetsCount = L.morphTargetsCount, O.numClippingPlanes = L.numClippingPlanes, O.numIntersection = L.numClipIntersection, O.vertexAlphas = L.vertexAlphas, O.vertexTangents = L.vertexTangents, O.toneMapping = L.toneMapping;
    }
    function rl(v, L, O, B, I) {
      L.isScene !== true && (L = St), Nt.resetTextureUnits();
      const J = L.fog, ot = B.isMeshStandardMaterial ? L.environment : null, ft = F === null ? E.outputColorSpace : F.isXRRenderTarget === true ? F.texture.colorSpace : hi, ht = (B.isMeshStandardMaterial ? oe : fe).get(B.envMap || ot), bt = B.vertexColors === true && !!O.attributes.color && O.attributes.color.itemSize === 4, Rt = !!O.attributes.tangent && (!!B.normalMap || B.anisotropy > 0), yt = !!O.morphAttributes.position, zt = !!O.morphAttributes.normal, Yt = !!O.morphAttributes.color;
      let ae = _n;
      B.toneMapped && (F === null || F.isXRRenderTarget === true) && (ae = E.toneMapping);
      const te = O.morphAttributes.position || O.morphAttributes.normal || O.morphAttributes.color, Zt = te !== void 0 ? te.length : 0, Tt = _t.get(B), re = h.state.lights;
      if (Wt === true && (Y === true || v !== x)) {
        const Me = v === x && B.id === S;
        nt.setState(B, v, Me);
      }
      let Vt = false;
      B.version === Tt.__version ? (Tt.needsLights && Tt.lightsStateVersion !== re.state.version || Tt.outputColorSpace !== ft || I.isBatchedMesh && Tt.batching === false || !I.isBatchedMesh && Tt.batching === true || I.isBatchedMesh && Tt.batchingColor === true && I.colorTexture === null || I.isBatchedMesh && Tt.batchingColor === false && I.colorTexture !== null || I.isInstancedMesh && Tt.instancing === false || !I.isInstancedMesh && Tt.instancing === true || I.isSkinnedMesh && Tt.skinning === false || !I.isSkinnedMesh && Tt.skinning === true || I.isInstancedMesh && Tt.instancingColor === true && I.instanceColor === null || I.isInstancedMesh && Tt.instancingColor === false && I.instanceColor !== null || I.isInstancedMesh && Tt.instancingMorph === true && I.morphTexture === null || I.isInstancedMesh && Tt.instancingMorph === false && I.morphTexture !== null || Tt.envMap !== ht || B.fog === true && Tt.fog !== J || Tt.numClippingPlanes !== void 0 && (Tt.numClippingPlanes !== nt.numPlanes || Tt.numIntersection !== nt.numIntersection) || Tt.vertexAlphas !== bt || Tt.vertexTangents !== Rt || Tt.morphTargets !== yt || Tt.morphNormals !== zt || Tt.morphColors !== Yt || Tt.toneMapping !== ae || Tt.morphTargetsCount !== Zt) && (Vt = true) : (Vt = true, Tt.__version = B.version);
      let Ce = Tt.currentProgram;
      Vt === true && (Ce = Fi(B, L, I));
      let zn = false, Pe = false, _i = false;
      const se = Ce.getUniforms(), Ne = Tt.uniforms;
      if (mt.useProgram(Ce.program) && (zn = true, Pe = true, _i = true), B.id !== S && (S = B.id, Pe = true), zn || x !== v) {
        mt.buffers.depth.getReversed() && v.reversedDepth !== true && (v._reversedDepth = true, v.updateProjectionMatrix()), se.setValue(b, "projectionMatrix", v.projectionMatrix), se.setValue(b, "viewMatrix", v.matrixWorldInverse);
        const ye = se.map.cameraPosition;
        ye !== void 0 && ye.setValue(b, dt.setFromMatrixPosition(v.matrixWorld)), wt.logarithmicDepthBuffer && se.setValue(b, "logDepthBufFC", 2 / (Math.log(v.far + 1) / Math.LN2)), (B.isMeshPhongMaterial || B.isMeshToonMaterial || B.isMeshLambertMaterial || B.isMeshBasicMaterial || B.isMeshStandardMaterial || B.isShaderMaterial) && se.setValue(b, "isOrthographic", v.isOrthographicCamera === true), x !== v && (x = v, Pe = true, _i = true);
      }
      if (I.isSkinnedMesh) {
        se.setOptional(b, I, "bindMatrix"), se.setOptional(b, I, "bindMatrixInverse");
        const Me = I.skeleton;
        Me && (Me.boneTexture === null && Me.computeBoneTexture(), se.setValue(b, "boneTexture", Me.boneTexture, Nt));
      }
      I.isBatchedMesh && (se.setOptional(b, I, "batchingTexture"), se.setValue(b, "batchingTexture", I._matricesTexture, Nt), se.setOptional(b, I, "batchingIdTexture"), se.setValue(b, "batchingIdTexture", I._indirectTexture, Nt), se.setOptional(b, I, "batchingColorTexture"), I._colorsTexture !== null && se.setValue(b, "batchingColorTexture", I._colorsTexture, Nt));
      const Fe = O.morphAttributes;
      if ((Fe.position !== void 0 || Fe.normal !== void 0 || Fe.color !== void 0) && Q.update(I, O, Ce), (Pe || Tt.receiveShadow !== I.receiveShadow) && (Tt.receiveShadow = I.receiveShadow, se.setValue(b, "receiveShadow", I.receiveShadow)), B.isMeshGouraudMaterial && B.envMap !== null && (Ne.envMap.value = ht, Ne.flipEnvMap.value = ht.isCubeTexture && ht.isRenderTargetTexture === false ? -1 : 1), B.isMeshStandardMaterial && B.envMap === null && L.environment !== null && (Ne.envMapIntensity.value = L.environmentIntensity), Pe && (se.setValue(b, "toneMappingExposure", E.toneMappingExposure), Tt.needsLights && sl(Ne, _i), J && B.fog === true && j.refreshFogUniforms(Ne, J), j.refreshMaterialUniforms(Ne, B, H, et, h.state.transmissionRenderTarget[v.id]), dr.upload(b, ma(Tt), Ne, Nt)), B.isShaderMaterial && B.uniformsNeedUpdate === true && (dr.upload(b, ma(Tt), Ne, Nt), B.uniformsNeedUpdate = false), B.isSpriteMaterial && se.setValue(b, "center", I.center), se.setValue(b, "modelViewMatrix", I.modelViewMatrix), se.setValue(b, "normalMatrix", I.normalMatrix), se.setValue(b, "modelMatrix", I.matrixWorld), B.isShaderMaterial || B.isRawShaderMaterial) {
        const Me = B.uniformsGroups;
        for (let ye = 0, yr = Me.length; ye < yr; ye++) {
          const Mn = Me[ye];
          Ut.update(Mn, Ce), Ut.bind(Mn, Ce);
        }
      }
      return Ce;
    }
    function sl(v, L) {
      v.ambientLightColor.needsUpdate = L, v.lightProbe.needsUpdate = L, v.directionalLights.needsUpdate = L, v.directionalLightShadows.needsUpdate = L, v.pointLights.needsUpdate = L, v.pointLightShadows.needsUpdate = L, v.spotLights.needsUpdate = L, v.spotLightShadows.needsUpdate = L, v.rectAreaLights.needsUpdate = L, v.hemisphereLights.needsUpdate = L;
    }
    function al(v) {
      return v.isMeshLambertMaterial || v.isMeshToonMaterial || v.isMeshPhongMaterial || v.isMeshStandardMaterial || v.isShadowMaterial || v.isShaderMaterial && v.lights === true;
    }
    this.getActiveCubeFace = function() {
      return A;
    }, this.getActiveMipmapLevel = function() {
      return P;
    }, this.getRenderTarget = function() {
      return F;
    }, this.setRenderTargetTextures = function(v, L, O) {
      const B = _t.get(v);
      B.__autoAllocateDepthBuffer = v.resolveDepthBuffer === false, B.__autoAllocateDepthBuffer === false && (B.__useRenderToTexture = false), _t.get(v.texture).__webglTexture = L, _t.get(v.depthTexture).__webglTexture = B.__autoAllocateDepthBuffer ? void 0 : O, B.__hasExternalTextures = true;
    }, this.setRenderTargetFramebuffer = function(v, L) {
      const O = _t.get(v);
      O.__webglFramebuffer = L, O.__useDefaultFramebuffer = L === void 0;
    };
    const ol = b.createFramebuffer();
    this.setRenderTarget = function(v, L = 0, O = 0) {
      F = v, A = L, P = O;
      let B = true, I = null, J = false, ot = false;
      if (v) {
        const ht = _t.get(v);
        if (ht.__useDefaultFramebuffer !== void 0) mt.bindFramebuffer(b.FRAMEBUFFER, null), B = false;
        else if (ht.__webglFramebuffer === void 0) Nt.setupRenderTarget(v);
        else if (ht.__hasExternalTextures) Nt.rebindTextures(v, _t.get(v.texture).__webglTexture, _t.get(v.depthTexture).__webglTexture);
        else if (v.depthBuffer) {
          const yt = v.depthTexture;
          if (ht.__boundDepthTexture !== yt) {
            if (yt !== null && _t.has(yt) && (v.width !== yt.image.width || v.height !== yt.image.height)) throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            Nt.setupDepthRenderbuffer(v);
          }
        }
        const bt = v.texture;
        (bt.isData3DTexture || bt.isDataArrayTexture || bt.isCompressedArrayTexture) && (ot = true);
        const Rt = _t.get(v).__webglFramebuffer;
        v.isWebGLCubeRenderTarget ? (Array.isArray(Rt[L]) ? I = Rt[L][O] : I = Rt[L], J = true) : v.samples > 0 && Nt.useMultisampledRTT(v) === false ? I = _t.get(v).__webglMultisampledFramebuffer : Array.isArray(Rt) ? I = Rt[O] : I = Rt, D.copy(v.viewport), z.copy(v.scissor), V = v.scissorTest;
      } else D.copy(Et).multiplyScalar(H).floor(), z.copy(Bt).multiplyScalar(H).floor(), V = $t;
      if (O !== 0 && (I = ol), mt.bindFramebuffer(b.FRAMEBUFFER, I) && B && mt.drawBuffers(v, I), mt.viewport(D), mt.scissor(z), mt.setScissorTest(V), J) {
        const ht = _t.get(v.texture);
        b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_CUBE_MAP_POSITIVE_X + L, ht.__webglTexture, O);
      } else if (ot) {
        const ht = L;
        for (let bt = 0; bt < v.textures.length; bt++) {
          const Rt = _t.get(v.textures[bt]);
          b.framebufferTextureLayer(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0 + bt, Rt.__webglTexture, O, ht);
        }
      } else if (v !== null && O !== 0) {
        const ht = _t.get(v.texture);
        b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, ht.__webglTexture, O);
      }
      S = -1;
    }, this.readRenderTargetPixels = function(v, L, O, B, I, J, ot, ft = 0) {
      if (!(v && v.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let ht = _t.get(v).__webglFramebuffer;
      if (v.isWebGLCubeRenderTarget && ot !== void 0 && (ht = ht[ot]), ht) {
        mt.bindFramebuffer(b.FRAMEBUFFER, ht);
        try {
          const bt = v.textures[ft], Rt = bt.format, yt = bt.type;
          if (!wt.textureFormatReadable(Rt)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!wt.textureTypeReadable(yt)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          L >= 0 && L <= v.width - B && O >= 0 && O <= v.height - I && (v.textures.length > 1 && b.readBuffer(b.COLOR_ATTACHMENT0 + ft), b.readPixels(L, O, B, I, xt.convert(Rt), xt.convert(yt), J));
        } finally {
          const bt = F !== null ? _t.get(F).__webglFramebuffer : null;
          mt.bindFramebuffer(b.FRAMEBUFFER, bt);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(v, L, O, B, I, J, ot, ft = 0) {
      if (!(v && v.isWebGLRenderTarget)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let ht = _t.get(v).__webglFramebuffer;
      if (v.isWebGLCubeRenderTarget && ot !== void 0 && (ht = ht[ot]), ht) if (L >= 0 && L <= v.width - B && O >= 0 && O <= v.height - I) {
        mt.bindFramebuffer(b.FRAMEBUFFER, ht);
        const bt = v.textures[ft], Rt = bt.format, yt = bt.type;
        if (!wt.textureFormatReadable(Rt)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!wt.textureTypeReadable(yt)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        const zt = b.createBuffer();
        b.bindBuffer(b.PIXEL_PACK_BUFFER, zt), b.bufferData(b.PIXEL_PACK_BUFFER, J.byteLength, b.STREAM_READ), v.textures.length > 1 && b.readBuffer(b.COLOR_ATTACHMENT0 + ft), b.readPixels(L, O, B, I, xt.convert(Rt), xt.convert(yt), 0);
        const Yt = F !== null ? _t.get(F).__webglFramebuffer : null;
        mt.bindFramebuffer(b.FRAMEBUFFER, Yt);
        const ae = b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return b.flush(), await gc(b, ae, 4), b.bindBuffer(b.PIXEL_PACK_BUFFER, zt), b.getBufferSubData(b.PIXEL_PACK_BUFFER, 0, J), b.deleteBuffer(zt), b.deleteSync(ae), J;
      } else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
    }, this.copyFramebufferToTexture = function(v, L = null, O = 0) {
      const B = Math.pow(2, -O), I = Math.floor(v.image.width * B), J = Math.floor(v.image.height * B), ot = L !== null ? L.x : 0, ft = L !== null ? L.y : 0;
      Nt.setTexture2D(v, 0), b.copyTexSubImage2D(b.TEXTURE_2D, O, 0, 0, ot, ft, I, J), mt.unbindTexture();
    };
    const ll = b.createFramebuffer(), cl = b.createFramebuffer();
    this.copyTextureToTexture = function(v, L, O = null, B = null, I = 0, J = null) {
      J === null && (I !== 0 ? (Di("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), J = I, I = 0) : J = 0);
      let ot, ft, ht, bt, Rt, yt, zt, Yt, ae;
      const te = v.isCompressedTexture ? v.mipmaps[J] : v.image;
      if (O !== null) ot = O.max.x - O.min.x, ft = O.max.y - O.min.y, ht = O.isBox3 ? O.max.z - O.min.z : 1, bt = O.min.x, Rt = O.min.y, yt = O.isBox3 ? O.min.z : 0;
      else {
        const Fe = Math.pow(2, -I);
        ot = Math.floor(te.width * Fe), ft = Math.floor(te.height * Fe), v.isDataArrayTexture ? ht = te.depth : v.isData3DTexture ? ht = Math.floor(te.depth * Fe) : ht = 1, bt = 0, Rt = 0, yt = 0;
      }
      B !== null ? (zt = B.x, Yt = B.y, ae = B.z) : (zt = 0, Yt = 0, ae = 0);
      const Zt = xt.convert(L.format), Tt = xt.convert(L.type);
      let re;
      L.isData3DTexture ? (Nt.setTexture3D(L, 0), re = b.TEXTURE_3D) : L.isDataArrayTexture || L.isCompressedArrayTexture ? (Nt.setTexture2DArray(L, 0), re = b.TEXTURE_2D_ARRAY) : (Nt.setTexture2D(L, 0), re = b.TEXTURE_2D), b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, L.flipY), b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL, L.premultiplyAlpha), b.pixelStorei(b.UNPACK_ALIGNMENT, L.unpackAlignment);
      const Vt = b.getParameter(b.UNPACK_ROW_LENGTH), Ce = b.getParameter(b.UNPACK_IMAGE_HEIGHT), zn = b.getParameter(b.UNPACK_SKIP_PIXELS), Pe = b.getParameter(b.UNPACK_SKIP_ROWS), _i = b.getParameter(b.UNPACK_SKIP_IMAGES);
      b.pixelStorei(b.UNPACK_ROW_LENGTH, te.width), b.pixelStorei(b.UNPACK_IMAGE_HEIGHT, te.height), b.pixelStorei(b.UNPACK_SKIP_PIXELS, bt), b.pixelStorei(b.UNPACK_SKIP_ROWS, Rt), b.pixelStorei(b.UNPACK_SKIP_IMAGES, yt);
      const se = v.isDataArrayTexture || v.isData3DTexture, Ne = L.isDataArrayTexture || L.isData3DTexture;
      if (v.isDepthTexture) {
        const Fe = _t.get(v), Me = _t.get(L), ye = _t.get(Fe.__renderTarget), yr = _t.get(Me.__renderTarget);
        mt.bindFramebuffer(b.READ_FRAMEBUFFER, ye.__webglFramebuffer), mt.bindFramebuffer(b.DRAW_FRAMEBUFFER, yr.__webglFramebuffer);
        for (let Mn = 0; Mn < ht; Mn++) se && (b.framebufferTextureLayer(b.READ_FRAMEBUFFER, b.COLOR_ATTACHMENT0, _t.get(v).__webglTexture, I, yt + Mn), b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER, b.COLOR_ATTACHMENT0, _t.get(L).__webglTexture, J, ae + Mn)), b.blitFramebuffer(bt, Rt, ot, ft, zt, Yt, ot, ft, b.DEPTH_BUFFER_BIT, b.NEAREST);
        mt.bindFramebuffer(b.READ_FRAMEBUFFER, null), mt.bindFramebuffer(b.DRAW_FRAMEBUFFER, null);
      } else if (I !== 0 || v.isRenderTargetTexture || _t.has(v)) {
        const Fe = _t.get(v), Me = _t.get(L);
        mt.bindFramebuffer(b.READ_FRAMEBUFFER, ll), mt.bindFramebuffer(b.DRAW_FRAMEBUFFER, cl);
        for (let ye = 0; ye < ht; ye++) se ? b.framebufferTextureLayer(b.READ_FRAMEBUFFER, b.COLOR_ATTACHMENT0, Fe.__webglTexture, I, yt + ye) : b.framebufferTexture2D(b.READ_FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, Fe.__webglTexture, I), Ne ? b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER, b.COLOR_ATTACHMENT0, Me.__webglTexture, J, ae + ye) : b.framebufferTexture2D(b.DRAW_FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, Me.__webglTexture, J), I !== 0 ? b.blitFramebuffer(bt, Rt, ot, ft, zt, Yt, ot, ft, b.COLOR_BUFFER_BIT, b.NEAREST) : Ne ? b.copyTexSubImage3D(re, J, zt, Yt, ae + ye, bt, Rt, ot, ft) : b.copyTexSubImage2D(re, J, zt, Yt, bt, Rt, ot, ft);
        mt.bindFramebuffer(b.READ_FRAMEBUFFER, null), mt.bindFramebuffer(b.DRAW_FRAMEBUFFER, null);
      } else Ne ? v.isDataTexture || v.isData3DTexture ? b.texSubImage3D(re, J, zt, Yt, ae, ot, ft, ht, Zt, Tt, te.data) : L.isCompressedArrayTexture ? b.compressedTexSubImage3D(re, J, zt, Yt, ae, ot, ft, ht, Zt, te.data) : b.texSubImage3D(re, J, zt, Yt, ae, ot, ft, ht, Zt, Tt, te) : v.isDataTexture ? b.texSubImage2D(b.TEXTURE_2D, J, zt, Yt, ot, ft, Zt, Tt, te.data) : v.isCompressedTexture ? b.compressedTexSubImage2D(b.TEXTURE_2D, J, zt, Yt, te.width, te.height, Zt, te.data) : b.texSubImage2D(b.TEXTURE_2D, J, zt, Yt, ot, ft, Zt, Tt, te);
      b.pixelStorei(b.UNPACK_ROW_LENGTH, Vt), b.pixelStorei(b.UNPACK_IMAGE_HEIGHT, Ce), b.pixelStorei(b.UNPACK_SKIP_PIXELS, zn), b.pixelStorei(b.UNPACK_SKIP_ROWS, Pe), b.pixelStorei(b.UNPACK_SKIP_IMAGES, _i), J === 0 && L.generateMipmaps && b.generateMipmap(re), mt.unbindTexture();
    }, this.initRenderTarget = function(v) {
      _t.get(v).__webglFramebuffer === void 0 && Nt.setupRenderTarget(v);
    }, this.initTexture = function(v) {
      v.isCubeTexture ? Nt.setTextureCube(v, 0) : v.isData3DTexture ? Nt.setTexture3D(v, 0) : v.isDataArrayTexture || v.isCompressedArrayTexture ? Nt.setTexture2DArray(v, 0) : Nt.setTexture2D(v, 0), mt.unbindTexture();
    }, this.resetState = function() {
      A = 0, P = 0, F = null, mt.reset(), at.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return Ke;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(t) {
    this._outputColorSpace = t;
    const e = this.getContext();
    e.drawingBufferColorSpace = Gt._getDrawingBufferColorSpace(t), e.unpackColorSpace = Gt._getUnpackColorSpace();
  }
}
const To = { type: "change" }, ha = { type: "start" }, el = { type: "end" }, ar = new ra(), bo = new fn(), Wp = Math.cos(70 * ur.DEG2RAD), he = new U(), Te = 2 * Math.PI, Kt = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_PAN: 4, TOUCH_DOLLY_PAN: 5, TOUCH_DOLLY_ROTATE: 6 }, es = 1e-6;
class Xp extends sh {
  constructor(t, e = null) {
    super(t, e), this.state = Kt.NONE, this.target = new U(), this.cursor = new U(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = false, this.dampingFactor = 0.05, this.enableZoom = true, this.zoomSpeed = 1, this.enableRotate = true, this.rotateSpeed = 1, this.keyRotateSpeed = 1, this.enablePan = true, this.panSpeed = 1, this.screenSpacePanning = true, this.keyPanSpeed = 7, this.zoomToCursor = false, this.autoRotate = false, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: ri.ROTATE, MIDDLE: ri.DOLLY, RIGHT: ri.PAN }, this.touches = { ONE: ni.ROTATE, TWO: ni.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new U(), this._lastQuaternion = new In(), this._lastTargetPosition = new U(), this._quat = new In().setFromUnitVectors(t.up, new U(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new $a(), this._sphericalDelta = new $a(), this._scale = 1, this._panOffset = new U(), this._rotateStart = new Pt(), this._rotateEnd = new Pt(), this._rotateDelta = new Pt(), this._panStart = new Pt(), this._panEnd = new Pt(), this._panDelta = new Pt(), this._dollyStart = new Pt(), this._dollyEnd = new Pt(), this._dollyDelta = new Pt(), this._dollyDirection = new U(), this._mouse = new Pt(), this._performCursorZoom = false, this._pointers = [], this._pointerPositions = {}, this._controlActive = false, this._onPointerMove = qp.bind(this), this._onPointerDown = Yp.bind(this), this._onPointerUp = Kp.bind(this), this._onContextMenu = em.bind(this), this._onMouseWheel = $p.bind(this), this._onKeyDown = Jp.bind(this), this._onTouchStart = Qp.bind(this), this._onTouchMove = tm.bind(this), this._onMouseDown = jp.bind(this), this._onMouseMove = Zp.bind(this), this._interceptControlDown = nm.bind(this), this._interceptControlUp = im.bind(this), this.domElement !== null && this.connect(this.domElement), this.update();
  }
  connect(t) {
    super.connect(t), this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onMouseWheel, { passive: false }), this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, { passive: true, capture: true }), this.domElement.style.touchAction = "none";
  }
  disconnect() {
    this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerUp), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.stopListenToKeyEvents(), this.domElement.getRootNode().removeEventListener("keydown", this._interceptControlDown, { capture: true }), this.domElement.style.touchAction = "auto";
  }
  dispose() {
    this.disconnect();
  }
  getPolarAngle() {
    return this._spherical.phi;
  }
  getAzimuthalAngle() {
    return this._spherical.theta;
  }
  getDistance() {
    return this.object.position.distanceTo(this.target);
  }
  listenToKeyEvents(t) {
    t.addEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = t;
  }
  stopListenToKeyEvents() {
    this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = null);
  }
  saveState() {
    this.target0.copy(this.target), this.position0.copy(this.object.position), this.zoom0 = this.object.zoom;
  }
  reset() {
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(To), this.update(), this.state = Kt.NONE;
  }
  update(t = null) {
    const e = this.object.position;
    he.copy(e).sub(this.target), he.applyQuaternion(this._quat), this._spherical.setFromVector3(he), this.autoRotate && this.state === Kt.NONE && this._rotateLeft(this._getAutoRotationAngle(t)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let n = this.minAzimuthAngle, r = this.maxAzimuthAngle;
    isFinite(n) && isFinite(r) && (n < -Math.PI ? n += Te : n > Math.PI && (n -= Te), r < -Math.PI ? r += Te : r > Math.PI && (r -= Te), n <= r ? this._spherical.theta = Math.max(n, Math.min(r, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (n + r) / 2 ? Math.max(n, this._spherical.theta) : Math.min(r, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === true ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
    let s = false;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera) this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const a = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), s = a != this._spherical.radius;
    }
    if (he.setFromSpherical(this._spherical), he.applyQuaternion(this._quatInverse), e.copy(this.target).add(he), this.object.lookAt(this.target), this.enableDamping === true ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let a = null;
      if (this.object.isPerspectiveCamera) {
        const o = he.length();
        a = this._clampDistance(o * this._scale);
        const c = o - a;
        this.object.position.addScaledVector(this._dollyDirection, c), this.object.updateMatrixWorld(), s = !!c;
      } else if (this.object.isOrthographicCamera) {
        const o = new U(this._mouse.x, this._mouse.y, 0);
        o.unproject(this.object);
        const c = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), s = c !== this.object.zoom;
        const l = new U(this._mouse.x, this._mouse.y, 0);
        l.unproject(this.object), this.object.position.sub(l).add(o), this.object.updateMatrixWorld(), a = he.length();
      } else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = false;
      a !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position) : (ar.origin.copy(this.object.position), ar.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(ar.direction)) < Wp ? this.object.lookAt(this.target) : (bo.setFromNormalAndCoplanarPoint(this.object.up, this.target), ar.intersectPlane(bo, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const a = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), a !== this.object.zoom && (this.object.updateProjectionMatrix(), s = true);
    }
    return this._scale = 1, this._performCursorZoom = false, s || this._lastPosition.distanceToSquared(this.object.position) > es || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > es || this._lastTargetPosition.distanceToSquared(this.target) > es ? (this.dispatchEvent(To), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), true) : false;
  }
  _getAutoRotationAngle(t) {
    return t !== null ? Te / 60 * this.autoRotateSpeed * t : Te / 60 / 60 * this.autoRotateSpeed;
  }
  _getZoomScale(t) {
    const e = Math.abs(t * 0.01);
    return Math.pow(0.95, this.zoomSpeed * e);
  }
  _rotateLeft(t) {
    this._sphericalDelta.theta -= t;
  }
  _rotateUp(t) {
    this._sphericalDelta.phi -= t;
  }
  _panLeft(t, e) {
    he.setFromMatrixColumn(e, 0), he.multiplyScalar(-t), this._panOffset.add(he);
  }
  _panUp(t, e) {
    this.screenSpacePanning === true ? he.setFromMatrixColumn(e, 1) : (he.setFromMatrixColumn(e, 0), he.crossVectors(this.object.up, he)), he.multiplyScalar(t), this._panOffset.add(he);
  }
  _pan(t, e) {
    const n = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const r = this.object.position;
      he.copy(r).sub(this.target);
      let s = he.length();
      s *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * t * s / n.clientHeight, this.object.matrix), this._panUp(2 * e * s / n.clientHeight, this.object.matrix);
    } else this.object.isOrthographicCamera ? (this._panLeft(t * (this.object.right - this.object.left) / this.object.zoom / n.clientWidth, this.object.matrix), this._panUp(e * (this.object.top - this.object.bottom) / this.object.zoom / n.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = false);
  }
  _dollyOut(t) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= t : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = false);
  }
  _dollyIn(t) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= t : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = false);
  }
  _updateZoomParameters(t, e) {
    if (!this.zoomToCursor) return;
    this._performCursorZoom = true;
    const n = this.domElement.getBoundingClientRect(), r = t - n.left, s = e - n.top, a = n.width, o = n.height;
    this._mouse.x = r / a * 2 - 1, this._mouse.y = -(s / o) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
  }
  _clampDistance(t) {
    return Math.max(this.minDistance, Math.min(this.maxDistance, t));
  }
  _handleMouseDownRotate(t) {
    this._rotateStart.set(t.clientX, t.clientY);
  }
  _handleMouseDownDolly(t) {
    this._updateZoomParameters(t.clientX, t.clientX), this._dollyStart.set(t.clientX, t.clientY);
  }
  _handleMouseDownPan(t) {
    this._panStart.set(t.clientX, t.clientY);
  }
  _handleMouseMoveRotate(t) {
    this._rotateEnd.set(t.clientX, t.clientY), this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const e = this.domElement;
    this._rotateLeft(Te * this._rotateDelta.x / e.clientHeight), this._rotateUp(Te * this._rotateDelta.y / e.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
  }
  _handleMouseMoveDolly(t) {
    this._dollyEnd.set(t.clientX, t.clientY), this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart), this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)), this._dollyStart.copy(this._dollyEnd), this.update();
  }
  _handleMouseMovePan(t) {
    this._panEnd.set(t.clientX, t.clientY), this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd), this.update();
  }
  _handleMouseWheel(t) {
    this._updateZoomParameters(t.clientX, t.clientY), t.deltaY < 0 ? this._dollyIn(this._getZoomScale(t.deltaY)) : t.deltaY > 0 && this._dollyOut(this._getZoomScale(t.deltaY)), this.update();
  }
  _handleKeyDown(t) {
    let e = false;
    switch (t.code) {
      case this.keys.UP:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateUp(Te * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed), e = true;
        break;
      case this.keys.BOTTOM:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateUp(-Te * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed), e = true;
        break;
      case this.keys.LEFT:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateLeft(Te * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0), e = true;
        break;
      case this.keys.RIGHT:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateLeft(-Te * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0), e = true;
        break;
    }
    e && (t.preventDefault(), this.update());
  }
  _handleTouchStartRotate(t) {
    if (this._pointers.length === 1) this._rotateStart.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t), n = 0.5 * (t.pageX + e.x), r = 0.5 * (t.pageY + e.y);
      this._rotateStart.set(n, r);
    }
  }
  _handleTouchStartPan(t) {
    if (this._pointers.length === 1) this._panStart.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t), n = 0.5 * (t.pageX + e.x), r = 0.5 * (t.pageY + e.y);
      this._panStart.set(n, r);
    }
  }
  _handleTouchStartDolly(t) {
    const e = this._getSecondPointerPosition(t), n = t.pageX - e.x, r = t.pageY - e.y, s = Math.sqrt(n * n + r * r);
    this._dollyStart.set(0, s);
  }
  _handleTouchStartDollyPan(t) {
    this.enableZoom && this._handleTouchStartDolly(t), this.enablePan && this._handleTouchStartPan(t);
  }
  _handleTouchStartDollyRotate(t) {
    this.enableZoom && this._handleTouchStartDolly(t), this.enableRotate && this._handleTouchStartRotate(t);
  }
  _handleTouchMoveRotate(t) {
    if (this._pointers.length == 1) this._rotateEnd.set(t.pageX, t.pageY);
    else {
      const n = this._getSecondPointerPosition(t), r = 0.5 * (t.pageX + n.x), s = 0.5 * (t.pageY + n.y);
      this._rotateEnd.set(r, s);
    }
    this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const e = this.domElement;
    this._rotateLeft(Te * this._rotateDelta.x / e.clientHeight), this._rotateUp(Te * this._rotateDelta.y / e.clientHeight), this._rotateStart.copy(this._rotateEnd);
  }
  _handleTouchMovePan(t) {
    if (this._pointers.length === 1) this._panEnd.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t), n = 0.5 * (t.pageX + e.x), r = 0.5 * (t.pageY + e.y);
      this._panEnd.set(n, r);
    }
    this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
  }
  _handleTouchMoveDolly(t) {
    const e = this._getSecondPointerPosition(t), n = t.pageX - e.x, r = t.pageY - e.y, s = Math.sqrt(n * n + r * r);
    this._dollyEnd.set(0, s), this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
    const a = (t.pageX + e.x) * 0.5, o = (t.pageY + e.y) * 0.5;
    this._updateZoomParameters(a, o);
  }
  _handleTouchMoveDollyPan(t) {
    this.enableZoom && this._handleTouchMoveDolly(t), this.enablePan && this._handleTouchMovePan(t);
  }
  _handleTouchMoveDollyRotate(t) {
    this.enableZoom && this._handleTouchMoveDolly(t), this.enableRotate && this._handleTouchMoveRotate(t);
  }
  _addPointer(t) {
    this._pointers.push(t.pointerId);
  }
  _removePointer(t) {
    delete this._pointerPositions[t.pointerId];
    for (let e = 0; e < this._pointers.length; e++) if (this._pointers[e] == t.pointerId) {
      this._pointers.splice(e, 1);
      return;
    }
  }
  _isTrackingPointer(t) {
    for (let e = 0; e < this._pointers.length; e++) if (this._pointers[e] == t.pointerId) return true;
    return false;
  }
  _trackPointer(t) {
    let e = this._pointerPositions[t.pointerId];
    e === void 0 && (e = new Pt(), this._pointerPositions[t.pointerId] = e), e.set(t.pageX, t.pageY);
  }
  _getSecondPointerPosition(t) {
    const e = t.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
    return this._pointerPositions[e];
  }
  _customWheelEvent(t) {
    const e = t.deltaMode, n = { clientX: t.clientX, clientY: t.clientY, deltaY: t.deltaY };
    switch (e) {
      case 1:
        n.deltaY *= 16;
        break;
      case 2:
        n.deltaY *= 100;
        break;
    }
    return t.ctrlKey && !this._controlActive && (n.deltaY *= 10), n;
  }
}
function Yp(i) {
  this.enabled !== false && (this._pointers.length === 0 && (this.domElement.setPointerCapture(i.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(i) && (this._addPointer(i), i.pointerType === "touch" ? this._onTouchStart(i) : this._onMouseDown(i)));
}
function qp(i) {
  this.enabled !== false && (i.pointerType === "touch" ? this._onTouchMove(i) : this._onMouseMove(i));
}
function Kp(i) {
  switch (this._removePointer(i), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(i.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(el), this.state = Kt.NONE;
      break;
    case 1:
      const t = this._pointers[0], e = this._pointerPositions[t];
      this._onTouchStart({ pointerId: t, pageX: e.x, pageY: e.y });
      break;
  }
}
function jp(i) {
  let t;
  switch (i.button) {
    case 0:
      t = this.mouseButtons.LEFT;
      break;
    case 1:
      t = this.mouseButtons.MIDDLE;
      break;
    case 2:
      t = this.mouseButtons.RIGHT;
      break;
    default:
      t = -1;
  }
  switch (t) {
    case ri.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseDownDolly(i), this.state = Kt.DOLLY;
      break;
    case ri.ROTATE:
      if (i.ctrlKey || i.metaKey || i.shiftKey) {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(i), this.state = Kt.PAN;
      } else {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(i), this.state = Kt.ROTATE;
      }
      break;
    case ri.PAN:
      if (i.ctrlKey || i.metaKey || i.shiftKey) {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(i), this.state = Kt.ROTATE;
      } else {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(i), this.state = Kt.PAN;
      }
      break;
    default:
      this.state = Kt.NONE;
  }
  this.state !== Kt.NONE && this.dispatchEvent(ha);
}
function Zp(i) {
  switch (this.state) {
    case Kt.ROTATE:
      if (this.enableRotate === false) return;
      this._handleMouseMoveRotate(i);
      break;
    case Kt.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseMoveDolly(i);
      break;
    case Kt.PAN:
      if (this.enablePan === false) return;
      this._handleMouseMovePan(i);
      break;
  }
}
function $p(i) {
  this.enabled === false || this.enableZoom === false || this.state !== Kt.NONE || (i.preventDefault(), this.dispatchEvent(ha), this._handleMouseWheel(this._customWheelEvent(i)), this.dispatchEvent(el));
}
function Jp(i) {
  this.enabled !== false && this._handleKeyDown(i);
}
function Qp(i) {
  switch (this._trackPointer(i), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case ni.ROTATE:
          if (this.enableRotate === false) return;
          this._handleTouchStartRotate(i), this.state = Kt.TOUCH_ROTATE;
          break;
        case ni.PAN:
          if (this.enablePan === false) return;
          this._handleTouchStartPan(i), this.state = Kt.TOUCH_PAN;
          break;
        default:
          this.state = Kt.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case ni.DOLLY_PAN:
          if (this.enableZoom === false && this.enablePan === false) return;
          this._handleTouchStartDollyPan(i), this.state = Kt.TOUCH_DOLLY_PAN;
          break;
        case ni.DOLLY_ROTATE:
          if (this.enableZoom === false && this.enableRotate === false) return;
          this._handleTouchStartDollyRotate(i), this.state = Kt.TOUCH_DOLLY_ROTATE;
          break;
        default:
          this.state = Kt.NONE;
      }
      break;
    default:
      this.state = Kt.NONE;
  }
  this.state !== Kt.NONE && this.dispatchEvent(ha);
}
function tm(i) {
  switch (this._trackPointer(i), this.state) {
    case Kt.TOUCH_ROTATE:
      if (this.enableRotate === false) return;
      this._handleTouchMoveRotate(i), this.update();
      break;
    case Kt.TOUCH_PAN:
      if (this.enablePan === false) return;
      this._handleTouchMovePan(i), this.update();
      break;
    case Kt.TOUCH_DOLLY_PAN:
      if (this.enableZoom === false && this.enablePan === false) return;
      this._handleTouchMoveDollyPan(i), this.update();
      break;
    case Kt.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === false && this.enableRotate === false) return;
      this._handleTouchMoveDollyRotate(i), this.update();
      break;
    default:
      this.state = Kt.NONE;
  }
}
function em(i) {
  this.enabled !== false && i.preventDefault();
}
function nm(i) {
  i.key === "Control" && (this._controlActive = true, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
function im(i) {
  i.key === "Control" && (this._controlActive = false, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
const le = 32, ns = 0.2, rm = () => {
  const i = [];
  i.push(0, ns, 0);
  for (let r = 0; r < le; r++) {
    const s = r / le * Math.PI * 2;
    i.push(Math.sin(s), ns, Math.cos(s));
  }
  for (let r = 0; r < le; r++) {
    const s = r / le * Math.PI * 2;
    i.push(Math.sin(s), ns, Math.cos(s));
  }
  for (let r = 0; r < le; r++) {
    const s = r / le * Math.PI * 2;
    i.push(Math.sin(s), 0, Math.cos(s));
  }
  const t = [];
  for (let r = 0; r < le; r++) t.push(0), t.push(r + 1), t.push((r + 1) % le + 1);
  for (let r = 0; r < le; r++) t.push(r + le + 1), t.push(r + le + 1 + le), t.push((r + 1) % le + le + 1), t.push((r + 1) % le + le + 1), t.push(r + le + 1 + le), t.push((r + 1) % le + le + 1 + le);
  const e = new an();
  e.setAttribute("position", new Ie(new Float32Array(i), 3)), e.setIndex(t), e.computeVertexNormals(), e.scale(0.4, 0.4, 0.4);
  const n = e.clone();
  return n.rotateX(Math.PI), [e, n];
}, sm = (i) => {
  const t = [], e = rm();
  for (let a = 0; a < 2; a++) {
    const o = e[a], c = a == 0 ? new jc({ color: "#333333" }) : new Ws({ color: "#cccccc" }), l = new Yo(o, c, 36);
    i.add(l), t.push(l);
  }
  const n = t[0], r = t[1], s = new me();
  return { tick: (a, o) => {
    for (let c = 0; c < 6; c++) for (let l = 0; l < 6; l++) {
      const u = a[c][l];
      if (u.kind == "empty") s.scale.setScalar(0);
      else switch (s.position.set(l - 2.5, 0.4 * 0.2, c - 2.5), s.rotation.x = 0, s.rotation.y = 0, s.rotation.z = u.kind == "black" ? 0 : Math.PI, s.scale.setScalar(1), u.state.kind) {
        case "placing": {
          const f = Math.max(Math.min(1, (o - 100) / 100), 0);
          s.scale.setScalar(f);
          break;
        }
        case "turning": {
          const f = u.state.order * 50 + 300 - o, p = Math.min(Math.max(0, f), 300) / 300, g = p * Math.PI, M = u.state.dir * Math.PI / 4;
          s.rotation.y = M, s.rotation.z -= g, s.position.y -= -Math.sin(g);
          const m = Math.cos(g) - 1 + 2 - Math.pow(1 - p, 2) * 2;
          s.position.x -= Math.cos(-M) * m, s.position.z -= Math.sin(-M) * m;
          break;
        }
      }
      s.updateMatrix();
      const d = l + c * 6;
      n.setMatrixAt(d, s.matrix), r.setMatrixAt(d, s.matrix);
    }
    n.instanceMatrix.needsUpdate = true, r.instanceMatrix.needsUpdate = true;
  }, getMeshes: () => [n, r] };
}, am = (i) => {
  const t = new Bn(1, 1), e = new Mr(), n = new Yo(t, e, 36);
  i.add(n);
  const r = new me(), s = new Ht();
  return { tick: (a, o) => {
    const c = Math.min(Math.max((o - 500) / 500, 0), 1);
    for (let l = 0; l < 6; l++) for (let u = 0; u < 6; u++) {
      const d = a[l][u], f = u + l * 6;
      d.kind == "empty" && d.state.kind == "placeable" && d.state.value, r.position.set(u - 2.5, 0, l - 2.5), r.rotation.x = -Math.PI / 2, r.rotation.y = 0, r.rotation.z = 0, r.scale.setScalar(1), r.updateMatrix(), n.setMatrixAt(f, r.matrix);
      const p = d.kind == "empty" && d.state.kind == "placeable" ? c : 0;
      s.setRGB(ur.lerp(46, 9, p) / 255, ur.lerp(103, 238, p) / 255, ur.lerp(76, 150, p) / 255, be), n.setColorAt(f, s);
    }
    n.instanceMatrix.needsUpdate = true, n.instanceColor && (n.instanceColor.needsUpdate = true);
  }, pick: (a, o, c, l) => {
    const u = new Pt();
    u.x = o, u.y = -c;
    const d = new rh();
    d.setFromCamera(u, a);
    const f = [n].concat(l), p = d.intersectObjects(f);
    if (p.length > 0 && p[0].object == n) {
      const g = p[0].instanceId;
      return typeof g > "u" ? null : g;
    }
    return null;
  } };
}, om = () => {
  const i = [];
  for (let r = -2; r <= 2; r++) i.push(r - 0.01, 0.01, -3), i.push(r - 0.01, 0.01, 3), i.push(r + 0.01, 0.01, -3), i.push(r + 0.01, 0.01, 3), i.push(-3, 0.01, r - 0.01), i.push(-3, 0.01, r + 0.01), i.push(3, 0.01, r - 0.01), i.push(3, 0.01, r + 0.01);
  const t = new U(0, 1, 0);
  for (let r = 0; r < 4; r++) {
    const s = [new U(2.99, 0.01, -2.99), new U(2.99, 0.01, 2.99), new U(3.3, 0.01, 3.3), new U(3.3, 0.01, -3.3), new U(3.7, -0.4, 3.7), new U(3.7, -0.4, -3.7)];
    for (const a of s) {
      const o = a.applyAxisAngle(t, Math.PI / 2 * r);
      i.push(...o.toArray());
    }
  }
  const e = [];
  for (let r = 0; r < 5; r++) e.push(r * 8, r * 8 + 1, r * 8 + 2), e.push(r * 8 + 1, r * 8 + 3, r * 8 + 2), e.push(r * 8 + 4, r * 8 + 5, r * 8 + 6), e.push(r * 8 + 5, r * 8 + 7, r * 8 + 6);
  for (let r = 0; r < 4; r++) e.push(40 + r * 6, 41 + r * 6, 42 + r * 6), e.push(40 + r * 6, 42 + r * 6, 43 + r * 6), e.push(42 + r * 6, 44 + r * 6, 43 + r * 6), e.push(44 + r * 6, 45 + r * 6, 43 + r * 6);
  const n = new an();
  return n.setAttribute("position", new Ie(new Float32Array(i), 3)), n.setIndex(e), n.computeVertexNormals(), n;
}, lm = (i) => {
  const t = om();
  t.computeVertexNormals();
  const e = new Ws({ color: "#333333" });
  i.add(new we(t, e));
  const n = new Bn(1e3, 1e3);
  n.rotateX(-Math.PI / 2), n.translate(0, -0.4, 0);
  const r = new Ws({ color: "#DED2BF" });
  i.add(new we(n, r));
}, cm = (i) => {
  const t = document.createElement("canvas");
  t.width = t.height = 600;
  const e = t.getContext("2d");
  if (!e) throw "failed to getContext of canvas";
  e.fillStyle = "#2e674c", e.font = "16px sans-serif";
  const n = new Bn(6, 6), r = new Kc(t);
  r.colorSpace = be;
  const s = new Mr({ map: r, transparent: true }), a = new we(n, s);
  return a.rotation.x = -Math.PI / 2, a.position.y = 1e-3, i.add(a), { update: (o) => {
    e.clearRect(0, 0, 600, 600);
    for (let c = 0; c < 6; c++) for (let l = 0; l < 6; l++) {
      const u = o[l + c * 6];
      if (u !== null) {
        const d = "" + u;
        e.fillText(d, 100 * l + 100 - e.measureText(d).width - 4, 100 * c + 100 - 8);
      }
    }
    s.map && (s.map.needsUpdate = true);
  } };
}, hm = () => {
  const i = new Gp({ antialias: true });
  i.setSize(600, 600);
  const t = new Vc();
  t.fog = new aa(16777215, 5, 40);
  const e = (p) => Math.pow(p, 2.2) * Math.PI, n = new nh(16777215, e(0.5));
  t.add(n);
  const r = new qa(16777215, e(1));
  r.position.set(10, -10, 20), r.angle = 0.15, r.penumbra = 1, r.decay = 0, t.add(r);
  const s = new th(16777215, e(1));
  s.position.set(-10, 10, -10), t.add(s);
  const a = new qa(16777215, e(0.95));
  a.position.set(5, 18, 5), a.angle = 0.2, a.penumbra = 1, a.decay = 0, t.add(a);
  const o = 50, c = new Ae();
  c.fov = o, c.position.set(0, 10, 2), c.lookAt(0, 0, 0);
  const l = new Xp(c, i.domElement);
  l.enablePan = false, l.enableZoom = false, l.maxPolarAngle = Math.PI / 3;
  const u = sm(t), d = am(t), f = cm(t);
  return lm(t), { getDomElement: () => i.domElement, setAnimationLoop: (p) => i.setAnimationLoop(p), resize: (p, g, M) => {
    if (i.setPixelRatio(M), i.setSize(p, g), c.aspect = p / g, p > g) c.fov = o;
    else {
      const m = o / 2 * Math.PI / 180;
      c.fov = 2 * Math.atan2(g * Math.sin(m), p * Math.cos(m)) * 180 / Math.PI;
    }
    c.updateProjectionMatrix();
  }, tick: (p, g) => {
    u.tick(p, g), d.tick(p, g), l.update(), i.render(t, c);
  }, updateValues: f.update, pickCell: (p, g) => d.pick(c, p, g, u.getMeshes()) };
}, um = () => {
  const i = document.querySelector("#black-disc-count"), t = document.querySelector("#white-disc-count"), e = document.querySelector("#black-percent"), n = document.querySelector("#white-percent"), r = document.querySelector("#evaluator"), s = document.querySelector("#info"), a = document.querySelector("#message"), o = document.querySelector("#thinking");
  let c = 50, l = 50;
  const u = () => {
    l = (l * 9 + c) / 10;
    const d = Math.round(l);
    e.textContent = `${100 - d}%`, n.textContent = `${d}%`, r.style.width = `${l}%`, requestAnimationFrame(u);
  };
  return requestAnimationFrame(u), { update: (d, f, p, g) => {
    d ? (s.style.display = "none", a.style.display = "inline", o.style.display = "none") : (s.style.display = "flex", a.style.display = "none", o.style.display = g !== null ? "none" : "inline"), i.textContent = "" + f, t.textContent = "" + p, g !== null && (c = (37 - g) / 74 * 100);
  } };
}, dm = [[8, -4], [13, -4], [22, -4], [27, -4]], fm = (i) => {
  const t = [], e = () => {
    const n = hm(), r = um();
    let s = { state: { moves: [], board: wo([], dm) }, prevHead: null }, a = Date.now();
    const o = (T) => {
      const E = T.length;
      return E >= 2 && T[E - 2] < 0 && T[E - 1] < 0;
    }, c = () => {
      let T = 0, E = 0, C = null;
      const A = [];
      for (let P = 0; P < 6; P++) for (let F = 0; F < 6; F++) {
        const S = s.state.board[P][F];
        let x = null;
        switch (S.kind) {
          case "black":
            T++;
            break;
          case "white":
            E++;
            break;
          case "empty":
            S.state.kind == "placeable" && (x = S.state.value, C = C ? Math.max(C, x) : x);
        }
        A.push(x);
      }
      n.updateValues(A), r.update(o(s.state.moves), T, E, C);
    };
    c();
    const l = (T) => {
      s = { state: T, prevHead: s }, c();
    }, u = () => {
      for (; t.length >= 1; ) {
        const { moves: T, board: E } = t.shift();
        if (s.state.moves.length == T.length - 1 && s.state.moves.every((C, A) => C == T[A])) {
          a = Date.now(), l({ moves: T, board: E });
          return;
        }
      }
    }, d = (T) => {
      if (Date.now() - a < 500 || !(T instanceof MouseEvent)) return;
      const C = T.offsetX / window.innerWidth * 2 - 1, A = T.offsetY / window.innerHeight * 2 - 1, P = n.pickCell(C, A);
      if (P !== null) {
        const F = P % 6, S = Math.floor(P / 6), x = s.state.board[S][F];
        x.kind == "empty" && x.state.kind == "placeable" && i(s.state.moves, P);
      }
    }, f = document.querySelector("#about-modal"), p = () => {
      f.classList.toggle("modal-enabled");
    };
    f.addEventListener("click", p);
    const g = () => {
      if (s.prevHead !== null) {
        for (s = s.prevHead; s.prevHead; ) {
          const { state: T, prevHead: E } = s;
          if (s = E, dl(T.board)) return l(T);
        }
        return l(s.state);
      }
    }, M = () => {
      n.resize(window.innerWidth, window.innerHeight, window.devicePixelRatio);
    };
    M(), window.addEventListener("resize", M), n.setAnimationLoop(() => {
      let T = Date.now() - a;
      T > 500 && u(), T = Date.now() - a, n.tick(s.state.board, T);
    });
    const m = document.querySelector("#canvas-container");
    m.appendChild(n.getDomElement()), m.addEventListener("click", d), document.querySelector("#about-button").addEventListener("click", p), document.querySelector("#undo-button").addEventListener("click", g);
  };
  return document.readyState === "loading" ? window.addEventListener("DOMContentLoaded", e) : e(), { enqueue: (n, r) => {
    t.push({ moves: n, board: r });
  } };
};
function pm(i) {
  return new Worker("" + new URL("o66.worker-BZ6snYwF.js", import.meta.url).href, { type: "module", name: i?.name });
}
const mm = (i, t) => {
  const e = new pm();
  return e.addEventListener("message", (n) => {
    const r = n.data[0], s = n.data[1];
    if (typeof s == "object") {
      const a = s, o = [];
      for (let c = 0; c < a.length; c += 2) o.push([a[c], a[c + 1]]);
      i(r, o);
    } else typeof s == "number" && t(r, s);
  }), { request: (n) => e.postMessage(n) };
}, nl = (i, t) => {
  const e = i.slice().concat([t]);
  il.request(e), fr.enqueue(e, pr(e));
}, fr = fm(nl), _m = (i, t) => {
  if (t[0][0] < 0 && i[i.length - 1] < 0) {
    fr.enqueue(i, pr(i));
    const e = i.slice().concat([-1]);
    fr.enqueue(e, pr(e));
  } else fr.enqueue(i, wo(i, t)), t[0][0] < 0 && nl(i, -1);
}, gm = (i, t) => {
  const e = i.slice().concat([t]);
  il.request(e);
}, il = mm(_m, gm);
