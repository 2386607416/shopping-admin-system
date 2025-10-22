export function throttle(callback, duration) {
    let timer = null;

    return function (...args) {
        if (timer) {
            return;
        }

        timer = setTimeout(() => {
            callback.call(this, ...args);
        }, duration);
    };
}
