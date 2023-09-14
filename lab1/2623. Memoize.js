/**
 * @param {Function} fn
 */
function memoize(fn) {
    const cached = new Map();

    return function (...args) {
        const key = JSON.stringify(args)

        if (!cached.has(key)) {
            const result = fn(...args)

            cached.set(key, result)
        }

        return cached.get(key)
    };
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */ 