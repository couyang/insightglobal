function mul(a) {
    return function (b) {
        if (typeof b !== 'undefined') {
            a = a * b;
            return (function fn(c) {
                if (typeof c !== 'undefined') {
                    a = a * c;
                    return fn();
                } else {
                    return a;
                }
            });
        } else {
            return a;
        }
    };
}

console.log(mul(2)(4)(5));
