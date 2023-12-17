# 카드 슬라이더 구현

## [데모페이지](https://js-homework-mission-02.vercel.app/)

nav에 포함된 이미지를 클릭하면 visual영역 이미지와 nickname이 변경됩니다.

---

## 메인코드

[메인 코드 바로가기](./js/main.js)

<br>
<br>

1. 클릭 이벤트 활성화

```js
const handleNavClick = (e) => {
  e.preventDefault();

  const li = e.target.closest("li");

  if (!li) return;

  const idx = li.dataset.index - 1;

  removeClass(seletedElem(), ACTIVE_CLASS);

  setCardMaskImg(name[idx]);
  setInnerText(title, name[idx]);
  setImageElemAttr(visualImg, idx);
  body.style.background = `linear-gradient(to bottom, ${data[idx].color[0]}, ${data[idx].color[1]})`;

  setSelectedElem(li);
  addClass(seletedElem(), ACTIVE_CLASS);
};

nav.addEventListener("click", handleNavClick);
```

<br>

2. nav 클릭시 배경 색상 변경

```js
body.style.background = `linear-gradient(to bottom, ${data[idx].color[0]}, ${data[idx].color[1]})`;
```

<br>

3. 이미지 변경

```js
/**
 * 이미지&비디오 엘리먼트 src 설정
 * @param {HTMLImageElement | HTMLVideoElement } elem
 * @param {string} src
 */
const setSrcAttribute = (elem, src) => {
  if (!(elem instanceof HTMLImageElement || elem instanceof HTMLVideoElement)) {
    throw new Error("HTMLImageElement와 HTMLVideoElement만 가능합니다.");
  }

  if (typeof src !== "string") {
    throw new Error("string 타입만 가능합니다.");
  }

  elem.src = src;
};

/**
 * 이미지 엘리먼트 alt 설정
 * @param {HTMLImageElement} elem
 * @param {string} alt
 */
const setAltAttribute = (elem, alt) => {
  if (!(elem instanceof HTMLImageElement)) {
    throw new Error("HTMLImageElement만 가능합니다.");
  }

  if (typeof alt !== "string") {
    throw new Error("string 타입만 가능합니다.");
  }

  elem.alt = alt;
};

const setImageElemAttr = (elem, idx) => {
  setSrcAttribute(elem, `./assets/${name[idx]}.jpeg`);
  setAltAttribute(elem, data[idx].alt);
};
```

<br>

4. 텍스트 변경

```js
/**
 * 엘리먼트 innerText 설정
 * @param {HTMLElement} elem
 * @param {String} text
 */
const setInnerText = (elem, text) => {
  if (typeof text !== "string") throw Error("text는 string 타입만 가능합니다.");
  elem.innerText = text;
};
```

<br>

5. 함수 분리

[main 코드 전문 확인 바람](#메인코드)

<br>

6. (+추가) 오디오 삽입

오디오 객체 생성

```js
const createAudio = (source) => new AudioPlayer(`./assets/audio/${source}.mp3`);
const audios = audiosSource.map((source) => createAudio(source));
audios.forEach((item) => item.volume(options.volume));
```

<br>

nav 클릭 이벤트 시 재생중이던 오디오를 멈추고 새 오디오 재생

```js
if (currentAudio().isPlaying()) currentAudio().stop();
setCurrentAudio(audios[idx]);
currentAudio().play();
```

<br>

visual 이미지 클릭시 오디오 일시정지 토글

```js
const handleVisualClick = (e) => {
  e.preventDefault();
  currentAudio().isPlaying() ? currentAudio().pause() : currentAudio().play();
};

visual.addEventListener("click", handleVisualClick);
```
