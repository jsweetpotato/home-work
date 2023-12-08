# 네이버 로그인 페이지 구현

---

로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.

---

- [x] 재사용 가능한 함수를 분리하고 함수를 중심으로 설계하는 방법에 대해 학습합니다.

1. email 정규표현식을 사용한 조건처리

```jsx
//   - false면 해당 input에 is--invalid 추가
node.classList.remove("is--invalid");
//  - true면 해당 input에 is--invalid 제거
node.classList.add("is--invalid");
```

2. pw 정규표현식을 사용한 validation

```jsx
//   - false면 해당 input에 is--invalid 추가
node.classList.remove("is--invalid");
//  - true면 해당 input에 is--invalid 제거
node.classList.add("is--invalid");
```

1. 로그인 버튼을 클릭시 user.id의 값과 input의 값을 비교

```jsx
value === user.id;
```

1. 두 값이 일치 한다면 다음 페이지(welcome.html)로 이동

```jsx
window.location.href = "welcome.html";
```
