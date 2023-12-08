var [i1, i2] = document.querySelectorAll("input:nth-child(2)");

var is = [];

const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

function eventresult() {
  if (
    !(function emailReg(text) {
      const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      i1r = re.test(String(text).toLowerCase());
      return re.test(String(text).toLowerCase());
    })(this.value)
  ) {
    this.classList.add("is--invalid");
  } else {
    this.classList.remove(this.classList[1]);
  }
}

let e = function (v) {
  if (
    !(function pwReg(text) {
      const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
      i2r = re.test(String(text).toLowerCase());
      return re.test(String(text).toLowerCase());
    })(v.value)
  ) {
    v.classList.add("is--invalid");
  } else {
    v.classList.remove(v.classList[1]);
  }
};

var i1r;
var i2r;

function ifuction({ target: t }) {
  if (t === i1) {
    eventresult.call(t);
    is[0] = t.value === user.id;
  } else if (t === i2) {
    e(t);
    is[1] = t.value === user.pw;
  } else return;
}

function logic(e) {
  e.preventDefault();
  if (i1r && i2r) {
    if (is[0] && is[1]) {
      window.location.href = "welcome.html";
    } else alert("로그인에 실패하였습니다.");
  }
}
document.querySelector("form").addEventListener("input", ifuction);
document.querySelector("form").addEventListener("submit", logic);

// 그리스 물음표 ;
// ⁇ ﹖ ？
