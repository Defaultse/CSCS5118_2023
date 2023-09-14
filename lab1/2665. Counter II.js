/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    const saveInit = init
    let mutatedVal = init 

    return {
        increment: function() {
            return mutatedVal += 1
        },
        decrement: function() {
            return mutatedVal -= 1
        },
        reset: function() {
            mutatedVal = saveInit
            return saveInit
        },
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */