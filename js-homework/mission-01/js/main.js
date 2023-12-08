import { useState, $ } from "./utils.js";

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

// user 정보
const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

// 로그인 input 리스트
const inputList = [
  { input: "#userEmail", regFunc: emailReg, type: "id" },
  { input: "#userPassword", regFunc: pwReg, type: "pw" },
];

// 상태 변수 관리
const [idValidState, setIdValidState] = useState(false);
const [pwVaildState, setPwValidState] = useState(false);

// 인풋 처리
const handleInput = ({ input, regFunc, type }) => {
  $(input).oninput = ({ target }) => {
    // regex함수 실행
    const passReg = regFunc(target.value);
    // regex 통과 결과 값에 따른 class 토글
    passReg ? target.classList.remove("is--invalid") : target.classList.add("is--invalid");
    // type에따라 state 설정
    type === "id"
      ? setIdValidState(passReg && target.value === user[type])
      : setPwValidState(passReg && target.value === user[type]);
  };
};

inputList.forEach((item) => handleInput(item));

// 로그인 버튼을 클릭시 조건처리
const handleSubmit = (e) => {
  e.preventDefault();
  if (!idValidState() && !pwVaildState()) return alert("로그인에 실패했습니다.");
  window.location.href = "welcome.html";
};

$(".btn-login").onclick = handleSubmit;
