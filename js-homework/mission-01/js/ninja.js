var i = document.querySelectorAll('input:nth-child(2)');

const user = {
  id: 'asd@naver.com',
  pw: 'spdlqj123!@',
};

function eventresult() {
  // 아 치킨 먹고싶다.
  // 아 피자 먹고싶다.
  if (
    !(function emailReg(text) {
      const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      ಠ_ಠ = re.test(String(text).toLowerCase());
      return re.test(String(text).toLowerCase());
    })(this.value) &&
    !(this.value === '')
  ) {
    // 꾸미기 좋은 주석
    // 그리스 물음표 ;
    // ⁇ ﹖ ？
    this.classList.add('is--invalid');
  } else {
    // 쿠쿠루삥뽕
    this.classList.remove(this.classList[1]);
  }
}

// 카레 레시피
// 1. 준비된 야채를 썬다.
// 2.

let e = function (iloveyou) {
  if (
    !(function pwReg(text) {
      const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
      łļľ = re.test(String(text).toLowerCase());
      return re.test(String(text).toLowerCase());
    })(iloveyou.value) &&
    !(iloveyou.value === '')
  ) {
    console.log(iloveyou.value);
    v.classList.add('is--invalid');
  } else {
    v.classList.remove(iloveyou.classList[1]);
  }
};

var p = '\uc544\uc774\ub514';
let ĩ = '\ube44\ubc00\ubc88\ud638';

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

function bar(아) {
  아.preventDefault();
  ಠ_ಠ && łļľ
    ? is[0] && is[1]
      ? (window.location.href = 'welcome.html')
      : // 다국어 처리를 위한 유니코드 ^.~
        alert(
          '\ub85c\uadf8\uc778\uc5d0\u0020\uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4\u002e'
        )
    : alert(
        `${
          !ಠ_ಠ ? p : ĩ
        }\ub97c\u0020\uc798\ubabb\uc785\ub825\ud558\uc600\uc2b5\ub2c8\ub2e4\u002e`
      );
}
// dasdasdadasds

var is = [];

document.querySelector('form').addEventListener('input', foo);
document.querySelector('form').addEventListener('submit', bar);
