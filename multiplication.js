function mul(n) {
    times = n;
    const proxy = new Proxy(function a () {}, {
        get (obj, key) {
            return () => times;
        },
        apply (receiver, ...args) {
        times *= args[1][0];
        return proxy;
    },
    });
    return proxy;
}


console.log(mul(2)(4)(5));
