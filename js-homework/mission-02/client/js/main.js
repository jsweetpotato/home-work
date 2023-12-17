import { data } from "./data.js";
import { useState, $ } from "./utils.js";
import AudioPlayer from "./audio.js";

/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리
*/

const root = "./assets/audio/";
const items = [
  `${root}sunrise-groove.mp3`,
  `${root}titanium.mp3`,
  `${root}enchanted-chimes.mp3`,
  `${root}drive-breakbeat.mp3`,
].map((item) => new AudioPlayer(item));

items.forEach((item) => item.volume(0.05));

// 데이터 가공
const name = data.map((item) => item.name.toLocaleLowerCase());

const title = $("h1");
const nav = $("nav");
const body = $("body");
const visualImg = $(".visual img");
const visual = $(".visual");

title.style.textTransform = "uppercase";

const ACTIVE_CLASS = "is-active";

const [seletedElem, setSelectedElem] = useState($(`.${ACTIVE_CLASS}`));
const [currentAudio, setCurrentAudio] = useState(items[0]);

/**
 * class 제거 함수
 * @param {HTMLElement} elem
 * @param {String} className
 */
const removeClass = (elem, className) => {
  elem.classList.remove(className);
};

/**
 * class 추가 함수
 * @param {HTMLElement} elem
 * * @param {String} className
 */
const addClass = (elem, className) => {
  elem.classList.add(className);
};

/**
 * 주소 설정
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
 * 주소 설정
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

/**
 *
 * @param {HTMLElement} elem
 * @param {String} text
 */
const setInnerText = (elem, text) => {
  if (typeof text !== "string") throw Error("text는 string 타입만 가능합니다.");
  elem.innerText = text;
};

nav.addEventListener("click", (e) => {
  e.preventDefault();

  const li = e.target.closest("li");

  if (!li) return;

  const idx = li.dataset.index - 1;

  visual.style.setProperty("--mask", `url(../assets/${name[idx]}_mask.png)`);

  removeClass(seletedElem(), ACTIVE_CLASS);

  setSrcAttribute(visualImg, `./assets/${name[idx]}.jpeg`);
  setAltAttribute(visualImg, data[idx].alt);

  setInnerText(title, name[idx]);
  body.style.background = `linear-gradient(to bottom, ${data[idx].color[0]}, ${data[idx].color[1]})`;

  if (currentAudio().isPlaying()) {
    // currentAudio().pause();
    currentAudio().stop();
  }

  items[idx].play();

  setSelectedElem(li);
  setCurrentAudio(items[idx]);

  currentAudio().play();
  addClass(seletedElem(), ACTIVE_CLASS);
});

visual.onclick = () => {
  currentAudio().isPlaying() ? currentAudio().pause() : currentAudio().play();
};
