function throttle(func, wait) {
  let timeout = null;
  return function(...args) {
    if (!timeout) {
      func.apply(this, args);
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
    }
  };
}



function throttle(func, wait) {
  let lastcall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastcall < wait) return;
    lastcall = now;
    func.apply(this, args);
  };
}
