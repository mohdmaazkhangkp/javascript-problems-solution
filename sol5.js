// Memoisation

const memoize = (fn)=> {
    let cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) return cache.get(key);
        else {
            let ans = fn(...args);
            cache.set(key, ans);
            return ans;
        }
    }
}