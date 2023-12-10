# 네이버 로그인 페이지 구현

## [데모페이지](https://js-homework-mission-01.vercel.app/)

로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.

---

- [x] 재사용 가능한 함수를 분리하고 함수를 중심으로 설계하는 방법에 대해 학습합니다.
      <br>
      <br>

## 메인 코드

[메인 코드 바로가기](./js/main.js)

유틸

```js
// 클로저 상태관리 함수 (react 처럼)
export const useState = (v) => {
  let value = v;
  const state = () => value;
  const setState = (newValue) => {
    value = newValue;
  };
  return [state, setState];
};

// 돔요소 가져오는 함수
export const $ = (nodeName) => document.querySelector(nodeName);
```

<br>

input 데이터 객체로 관리

```js
// 로그인 input 리스트
const inputList = [
  { input: "#userEmail", regFunc: emailReg, type: "id" },
  { input: "#userPassword", regFunc: pwReg, type: "pw" },
];
```

<br>

상태 변수 설정

```js
// 상태 변수 관리
const [idValidState, setIdValidState] = useState(false);
const [pwVaildState, setPwValidState] = useState(false);
```

<br>

email, pw 정규표현식을 사용한 조건처리 <br>
→ 정규표현식 조건처리 결과값으로 <code>is--invalid</code> 클래스 토글 <br>
→ 조건 처리 && user[type] 이면, state = true로 변경

```js
const handleInput = ({ input, regFunc, type }) => {
  $(input).oninput = ({ target }) => {
    // regex함수 실행
    const passReg = regFunc(target.value);

    // regex 통과 결과 값에 따른 class 토글
    passReg && !(target.value === "")
      ? target.classList.remove("is--invalid")
      : target.classList.add("is--invalid");

    // type에따라 state 설정
    const validState = passReg && target.value === user[type];
    type === "id" ? setIdValidState(validState) : setPwValidState(validState);
  };
};

inputList.forEach((item) => handleInput(item));
```

<br>
두 값이 일치 한다면 다음 페이지(welcome.html)로 이동

```js
// 로그인 버튼을 클릭시 조건처리
const handleSubmit = (e) => {
  e.preventDefault();
  if (!idValidState() && !pwVaildState()) return alert("로그인에 실패했습니다.");
  window.location.href = "welcome.html";
};

$(".login-form").onsubmit = handleSubmit;
```

<br>
<br>
<br>

---

## ★☆★닌자 코드★☆★

[닌자 코드 바로가기](./js/ninja.js)

<br>

nth-child로 어떤 인풋을 가져오는지 알지 못하게 하기

```js
var i = document.querySelectorAll("input:nth-child(2)");
```

<br>
다국어 처리를 위한 유니코드 ^.~

```js
var p = "\uc544\uc774\ub514";
var ĩ = "\ube44\ubc00\ubc88\ud638";
//...

? (window.location.href = "welcome.html")
      : alert("\ub85c\uadf8\uc778\uc5d0\u0020\uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4\u002e")
    : alert(
        `${!ಠ_ಠ ? p : ĩ}\ub97c\u0020\uc798\ubabb\uc785\ub825\ud558\uc600\uc2b5\ub2c8\ub2e4\u002e`
      );
```

<br>

변수명을 귀엽고 예쁜 이모지로

```js
var /* 이모지는 무조건 이쁜걸로 사용해야 변수명을 지을때 기분이 좋죠! */ ಠ_ಠ;
var łļľ;
```

<br>
인풋 처리

```js
function foo({ target: t }) {
  if (t === i[0]) {
    eventresult.call(t);
    is[0] = t.value === user.id;
  } else if (t === i[1]) {
    e(t);
    is[1] = t.value === user.pw;
  } else return;
}
```

<br>
this 바인딩으로 실행한 함수와 그냥 함수로 같은 처리도 다르게 보이게 하기!
클래스 위치를 remove해서 무슨 클래스가 빠지는지 모르게 만들기~

```js
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
```

<br>

이벤트 위임

```js
document.querySelector("form").addEventListener("input", foo);
document.querySelector("form").addEventListener("submit", bar);
```
