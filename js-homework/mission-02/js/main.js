import { audiosSource, data } from "./data.js";
import { useState, $, gui } from "./utils.js";
import AudioPlayer from "./audio.js";

/* 
1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리
*/
// 데이터 가공
const name = data.map((item) => item.name.toLocaleLowerCase());

const options = {
  volume: 0.02,
};

const createAudio = (source) => new AudioPlayer(`./assets/audio/${source}.mp3`);

const audios = audiosSource.map((source) => createAudio(source));
audios.forEach((item) => item.volume(options.volume));

gui
  .add(options, "volume", 0.01, 1, 0.01)
  .onFinishChange((v) => audios.forEach((item) => item.volume(v)));

const title = $("h1");
const nav = $("nav");
const body = $("body");
const visualImg = $(".visual img");
const visual = $(".visual");

const ACTIVE_CLASS = "is-active";

const [seletedElem, setSelectedElem] = useState($(`.${ACTIVE_CLASS}`));
const [currentAudio, setCurrentAudio] = useState(audios[0]);

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

/**
 * 엘리먼트 innerText 설정
 * @param {HTMLElement} elem
 * @param {String} text
 */
const setInnerText = (elem, text) => {
  if (typeof text !== "string") throw Error("text는 string 타입만 가능합니다.");
  elem.innerText = text;
};

const setCardMaskImg = (name) => {
  visual.style.setProperty("--mask", `url(../assets/${name}_mask.png)`);
};

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

  if (currentAudio().isPlaying()) currentAudio().stop();
  setCurrentAudio(audios[idx]);
  currentAudio().play();
};

const handleVisualClick = (e) => {
  e.preventDefault();
  currentAudio().isPlaying() ? currentAudio().pause() : currentAudio().play();
};

nav.addEventListener("click", handleNavClick);
visual.addEventListener("click", handleVisualClick);
