// 클로저 상태관리 함수 (react 처럼)
export const useState = (v) => {
  let value = v;
  const state = () => value;
  const setState = (newValue) => {
    value = newValue;
  };
  return [state, setState];
};

/**
 * 돔요소 가져오는 함수
 * @param {HTMLElement} nodeName
 * @returns {HTMLElement}
 */
export const $ = (nodeName) => document.querySelector(nodeName);

export function throttle(func, delay) {
  let isThrottled = false;

  return function (...args) {
    if (isThrottled) return;
    func.apply(this, args);
    isThrottled = true;
    setTimeout(() => {
      isThrottled = false;
    }, delay);
  };
}
