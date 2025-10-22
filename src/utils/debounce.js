export function debounce(callback, duration) {
    let timer = null;

    return function (...args) {
        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            callback.apply(this, ...args);
        }, duration);
    };
}
