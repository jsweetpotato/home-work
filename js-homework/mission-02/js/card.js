import { $, throttle, gui } from "./utils.js";

const visual = document.querySelector(".visual");

const size = {
  x: visual.clientWidth,
  y: visual.clientHeight
};

const options = {
  speed: 0.15,
  throttleTime: 15,
  blendType: getComputedStyle(visual).getPropertyValue("--blend-type"),
  blendTypes: {
    colorDodge: "color-dodge",
    colorBurn: "color-burn",
    difference: "difference",
    saturation: "saturation",
    luminosity: "luminosity",
    softLight: "soft-light",
    hardLight: "hard-light",
    exclusion: "exclusion",
    overlay: "overlay",
    lighten: "lighten",
    screen: "screen",
    normal: "normal",
    hue: "hue"
  }
};

let opacity = 0;

gui.add(options, "speed", 0.05, 0.5, 0.01);
gui.add(options, "blendType", options.blendTypes).onFinishChange((value) => {
  visual.style.setProperty("--blend-type", value);
});

function getRange(min, max, value) {
  return value * (max - min) + min;
}

function handlemove({ offsetX, offsetY }) {
  if (offsetX <= -1 || offsetY <= -1) return;
  const x = offsetX / size.x;
  const y = offsetY / size.y;

  visual.style.setProperty("--pointer-x", `${x * 100}%`);
  visual.style.setProperty("--pointer-y", `${y * 100}%`);
  visual.style.setProperty("--background-x", `${getRange(40, 60, x)}%`);
  visual.style.setProperty("--background-y", `${getRange(40, 60, y)}%`);
  visual.style.setProperty("--rotate-y", `${(size.x * 0.5 - offsetX) * options.speed}deg`);
  visual.style.setProperty("--rotate-x", `${(size.y * 0.5 - offsetY) * -options.speed}deg`);
}

const resize = () => {
  size.x = visual.clientWidth;
  size.y = visual.clientHeight;
};

const handleEnter = () => (visual.className += " hovered");
const handleLeave = () => (visual.className = "visual");

window.addEventListener("resize", resize);
visual.addEventListener("mouseenter", handleEnter);
visual.addEventListener("mouseleave", handleLeave);
visual.addEventListener("mousemove", throttle(handlemove, options.throttleTime));
