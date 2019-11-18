export function debounce(fn, delay = 300) {
    let timer;
    return function () {
        let _this = this;
        let arg = arguments;

        if (timer) {
            clearTimeout(timer);
            return timer = null;
        }

        timer = setTimeout(() => {
            timer = null;
            fn.apply(_this, arg)
        }, delay)
    }
}
