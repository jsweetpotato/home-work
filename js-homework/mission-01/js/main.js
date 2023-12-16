import { useState, $ } from "./utils.js";

/**
 *
 * @param {string} text
 * @returns
 */
function validateEmail(text) {
  const emailReg =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return emailReg.test(String(text).toLowerCase());
}

/**
 *
 * @param {string} text
 * @returns
 */
function validatePasword(text) {
  const passwordReg = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return passwordReg.test(String(text).toLowerCase());
}

// user 정보
const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

// 로그인 input 리스트
const inputList = [
  { input: "#userEmail", regFunc: validateEmail, type: "id" },
  { input: "#userPassword", regFunc: validatePasword, type: "pw" },
];

// 상태 변수 관리
const [isValidID, setIsValidID] = useState(false);
const [isValidPassword, setIsValidPassword] = useState(false);

/**
 *
 * @param {string} type
 * @returns
 */
const isIDType = (type) => {
  return type === "id";
};

/**
 *
 * @param {string} value
 * @returns
 */
const isEmpty = (value) => {
  return value === "";
};

/**
 *
 * @param {HTMLElement} target
 */
const markValid = (target) => {
  target.classList.remove("is--invalid");
};

/**
 *
 * @param {HTMLElement} target
 */
const markInvalid = (target) => {
  target.classList.add("is--invalid");
};

/**
 *
 * @param {{ isRegPassed: boolean, target: HTMLElement }} param0
 * @returns
 */
const toggleValidMark = ({ isRegPassed, target }) => {
  if (isRegPassed && !isEmpty(target.value)) {
    markValid(target);

    return;
  }

  markInvalid(target);
};

/**
 *
 * @param {{ input: HTMLInputElement, regFunc: Function, type: 'pw' | 'id' }} param0
 */
const handleInput = ({ input, regFunc, type }) => {
  $(input).oninput = ({ target }) => {
    // regex함수 실행
    const isRegPassed = regFunc(target.value);

    // regex 통과 결과 값에 따른 class 토글
    toggleValidMark({ isRegPassed, target });
    // type에따라 state 설정

    const isValid = isRegPassed && target.value === user[type];

    if (isIDType(type)) {
      setIsValidID(isValid);

      return;
    }

    setIsValidPassword(isValid);
  };
};

inputList.forEach((item) => handleInput(item));

/**
 *
 * @param {string} href
 */
function goTo(href) {
  window.location.href = href;
}

/**
 *
 * @param {string} href
 */
function goToWelcome(href) {
  goTo(href);
}

function isValidUser() {
  return isValidID() && isValidPassword();
}

/**
 *
 * @param {Event} e
 */
const handleSubmit = (e) => {
  e.preventDefault();
  // 긍정표현
  if (!isValidUser()) {
    return alert("로그인에 실패했습니다.");
  }

  goToWelcome("welcome.html");
};

$(".login-form").onsubmit = handleSubmit;
