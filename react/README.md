# React 1주차 과제

## Preview
<img src="https://github.com/jsweetpotato/home-work/assets/60402888/a9a56695-fed8-4f04-9c48-e3a10be992d9" width="300px"/>

<br>

## 스캐폴딩
![image](https://github.com/jsweetpotato/home-work/assets/60402888/09536fde-1dc6-4cf7-9f20-28f40a235cf2)


<br>

## 구현 방식

### 1. 중복 사용 항목 컴포넌트로 분리
input요소와 버튼 요소는 중복된 스타일과 기능을 가지고 있어 컴포넌트로 분리해서 구현했습니다.

```jsx
// login/index.jsx
<TextInput
  id={"이름인풋"}
  label={"이름(별명)"}
  text="이름이나 별명을 입력해주세요"
  max={8}
  ariaLabel={"이름, 별명 입력칸"}
/>
```

```jsx
// src/components/TextInput.jsx
import React from "react";

const styleWrapper = { display: "flex", flexDirection: "column", gap: "4px", marginBlock: "12px" };
const styleLabel = { fontWeight: "600", fontSize: "0.875rem", marginBottom: "4px" };
const styleInput = { border: "1px solid #9DA1B4", borderRadius: "4px", padding: "8px 4px", width: "100%" };
const styleSpan = { color: "#9DA1B4", alignSelf: "flex-end", fontSize: "0.875rem" };

export const TextInput = ({ id, label, text = "여기에 글을 입력해주세요", max = 10, ariaLabel }) => {
  return (
    <div style={styleWrapper}>
      <label style={styleLabel} htmlFor={id}>
        {label}
      </label>
      <input id={id} type="text" style={styleInput} placeholder={text} maxLength={max} aria-label={ariaLabel} />
      <span style={styleSpan} aria-hidden={true}>
        {0}/{max}
      </span>
    </div>
  );
```

<br>

### 2. 최종 페이지와 Header를 조립해 App으로 export
```jsx
import React from "react";
import { Fragment } from "react";
import { Header } from "./components/Header";
import { Login } from "./pages/login";

export const App = () => {
  return (
    <Fragment>
      <Header />
      <Login />
    </Fragment>
  );
};
```

<br>

### 3. createRoot로 #app에 렌더
```jsx
import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const rootElement = document.getElementById("app");
const reactDomRoot = createRoot(rootElement);

reactDomRoot.render(<App />);
```

