var i = document.querySelectorAll("input:nth-child(2)");

const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

function eventresult() {
  // 아 치킨 먹고싶다.
  if (
    !(function emailReg(text) {
      const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      ಠ_ಠ = re.test(String(text).toLowerCase());
      return re.test(String(text).toLowerCase());
    })(this.value)
  ) {
    // 꾸미기 좋은 주석
    // 그리스 물음표 ;
    // ⁇ ﹖ ？
    this.classList.add("is--invalid");
  } else {
    // 쿠쿠루삥뽕
    this.classList.remove(this.classList[1]);
  }
}

// 카레 레시피
// 1. 준비된 야채를 썬다.
// 2.

let e = function (v) {
  if (
    !(function pwReg(text) {
      const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
      łļľ = re.test(String(text).toLowerCase());
      return re.test(String(text).toLowerCase());
    })(v.value)
  ) {
    v.classList.add("is--invalid");
  } else {
    v.classList.remove(v.classList[1]);
  }
};

var p = "아이디";
var ĩ = "비밀번호";

var /* 이모지는 무조건 이쁜걸로 사용해야 변수명을 지을때 기분이 좋죠! */ ಠ_ಠ;
var łļľ;

function foo({ target: t }) {
  if (t === i[0]) {
    eventresult.call(t);
    is[0] = t.value === user.id;
  } else if (t === i[1]) {
    e(t);
    is[1] = t.value === user.pw;
  } else return;
}

function logic(e) {
  e.preventDefault();
  ಠ_ಠ && łļľ
    ? is[0] && is[1]
      ? (window.location.href = "welcome.html")
      : alert("로그인에 실패하였습니다.")
    : alert(`${!ಠ_ಠ ? p : ĩ}를 잘못입력하였습니다.`);
}

var is = [];

document.querySelector("form").addEventListener("input", foo);
document.querySelector("form").addEventListener("submit", logic);