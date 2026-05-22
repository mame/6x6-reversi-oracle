(async ()=>{
    var u = "" + new URL("o66_bg-Czr1ZcfQ.wasm", import.meta.url).href, w = async (e = {}, t)=>{
        let n;
        if (t.startsWith("data:")) {
            const a = t.replace(/^data:.*?base64,/, "");
            let _;
            if (typeof Buffer == "function" && typeof Buffer.from == "function") _ = Buffer.from(a, "base64");
            else if (typeof atob == "function") {
                const o = atob(a);
                _ = new Uint8Array(o.length);
                for(let s = 0; s < o.length; s++)_[s] = o.charCodeAt(s);
            } else throw new Error("Cannot decode base64-encoded data URL");
            n = await WebAssembly.instantiate(_, e);
        } else {
            const a = await fetch(t), _ = a.headers.get("Content-Type") || "";
            if ("instantiateStreaming" in WebAssembly && _.startsWith("application/wasm")) n = await WebAssembly.instantiateStreaming(a, e);
            else {
                const o = await a.arrayBuffer();
                n = await WebAssembly.instantiate(o, e);
            }
        }
        return n.instance.exports;
    };
    function m(e) {
        const t = r.get_black_moves(e);
        var n = l(t[0], t[1]).slice();
        return r.__wbindgen_free(t[0], t[1] * 1, 1), n;
    }
    function y(e) {
        return r.get_white_move(e);
    }
    function h(e, t) {
        throw new Error(M(e, t));
    }
    function A(e) {
        return e.length;
    }
    function v(e, t, n) {
        Int8Array.prototype.set.call(l(e, t), n);
    }
    function p() {
        const e = r.__wbindgen_externrefs, t = e.grow(4);
        e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, !0), e.set(t + 3, !1);
    }
    function l(e, t) {
        return e = e >>> 0, x().subarray(e / 1, e / 1 + t);
    }
    let i = null;
    function x() {
        return (i === null || i.byteLength === 0) && (i = new Int8Array(r.memory.buffer)), i;
    }
    function M(e, t) {
        return B(e >>> 0, t);
    }
    let c = null;
    function U() {
        return (c === null || c.byteLength === 0) && (c = new Uint8Array(r.memory.buffer)), c;
    }
    let f = new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
    });
    f.decode();
    const W = 2146435072;
    let b = 0;
    function B(e, t) {
        return b += t, b >= W && (f = new TextDecoder("utf-8", {
            ignoreBOM: !0,
            fatal: !0
        }), f.decode(), b = t), f.decode(U().subarray(e, e + t));
    }
    let r;
    function T(e) {
        r = e;
    }
    URL = globalThis.URL;
    const I = await w({
        "./o66_bg.js": {
            __wbg_length_efe2271ed86b56cc: A,
            __wbg_prototypesetcall_b3a1a4dde5e03219: v,
            __wbg___wbindgen_throw_9c31b086c2b26051: h,
            __wbindgen_init_externref_table: p
        }
    }, u), { memory: L, get_black_moves: C, get_white_move: D, __wbindgen_externrefs: E, __wbindgen_free: S, __wbindgen_start: d } = I;
    var R = Object.freeze({
        __proto__: null,
        __wbindgen_externrefs: E,
        __wbindgen_free: S,
        __wbindgen_start: d,
        get_black_moves: C,
        get_white_move: D,
        memory: L
    });
    T(R);
    d();
    const g = (e)=>{
        const t = new Int8Array(e);
        let n;
        e.length % 2 == 0 ? n = m(t) : n = y(t), self.postMessage([
            e,
            n
        ]);
    };
    self.addEventListener("message", (e)=>{
        g(e.data);
    });
    g([]);
})();
