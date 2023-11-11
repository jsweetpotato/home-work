# 로그인 창 구현

## overview

- [마크업](#마크업)
- [CSS](#css)
- [Validate HTML](#validate-html)

<br>
<br>
<br>

# 마크업

![Alt text](../readme-images/mission-02-main.png)

### [Mission2 Demo](https://jsweetpotato.github.io/home-work/mission-02/mission-02.html)

## 아이디 입력 인풋

<br>
<br>
<br>

# CSS

최대한 공통 속성으로 묶어서 사용하고, 상태에 따라 바뀌는 아이콘은 부모 엘리먼트에 상태클래스를 줘서 변경했습니다.

### 상태 결과 미리보기

기본 상태 (empty)
![default](../readme-images/mission-02-id-default.png)

focus 상태
![focusOn](../readme-images/mission-02-id-focusOn.png)

![Invalid](../readme-images/mission-02-id-invalid.png)

![valid](../readme-images/mission-02-id-valid.png)

```css
/* 이메일, 패스워드 */
.email + label,
.password + label {
  transition: 100ms ease-in;
  transform: translate(4px, -14px);
}

/* 이메일, 패스워드 라벨*/
.email:focus + label,
.password:focus + label,
.input-wrapper:not(.empty) .email + label,
.input-wrapper:not(.empty) .password + label {
  color: #dfdfdf;
  transform: scale(0.8) translate(-8px, -250%);
}

/* validation icon */
.valid-icon {
  content: "";
  position: absolute;
  display: inline-block;
  top: 25%;
  right: 8px;
  width: var(--icon-box-size);
  height: var(--icon-box-size);
  background: no-repeat center / var(--icon-image-size);
}
/* valid 상태 */
.valid .valid-icon {
  background-image: url("./assets/check.svg");
}
/* invalid 상태 */
.invalid .valid-icon {
  background-image: url("./assets/warn.svg");
}
/* empty 상태 */
.empty .valid-icon {
  background-image: none;
}
```

<br>
<br>
<br>

# Validate HTML

![Alt text](../readme-images/mission-02-validate.png)
