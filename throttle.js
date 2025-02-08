function throttle(func, wait) {
  let lastcall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastcall < wait) return;
    lastcall = now;
    func.apply(this, args);
  };
}
