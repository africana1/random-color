//audio files
const long_audio = new Audio('feelings.aac');
const short_audio = new Audio('short.wav');

//getting all elements

let body = document.querySelector('#body');

let btnRGB = document.querySelector('#btnColorRGB');
let colorName1 = document.querySelector('#colorName1');

let btnHex = document.querySelector('#btnColorHex');
let colorName2 = document.querySelector('#colorName2');

let btnRGBA = document.querySelector('#btnColorRGBA');
let colorName3 = document.querySelector('#colorName3');

let btnHSL = document.querySelector('#btnColorHSL');
let colorName4 = document.querySelector('#colorName4');

let btnHSLA = document.querySelector('#btnColorHSLA');
let colorName5 = document.querySelector('#colorName5');

let btnRandomColor = document.querySelector('#btnRandomColor');
let randomDiv = document.querySelector('#random-div');

btnRandomColor.addEventListener('click', randomColorSound);

function randomHslPair() {
  let h = Math.floor(Math.random() * 360);
  let s = Math.floor(Math.random() * 100);
  let l = Math.floor(Math.random() * 100);

  let ch = () => (h <= 180 ? h + 180 : h - 180);
  let cs = () => (s <= 50 ? s + 50 : s - 50);
  let cl = () => (l <= 50 ? l + 50 : l - 50);

  return [`hsl(${h},${s}%,${l}%)`, `hsl(${ch()},${cs()}%,${cl()}%)`];
}

function helpChangeColor(prim, compliment) {
  body.style.backgroundColor = prim;
  randomDiv.style.background = hexGenValue();
  btnRandomColor.style.cssText = 'color: ' + prim + ';background-color: ' + compliment + ';';
}

function randomColorSound() {
  let r = Math.floor(Math.random() * 10);

  if (r >= 7) {
    long_audio.play();

    let [pri, comp] = randomHslPair();
    helpChangeColor(pri, comp);

    (function delayedLoop(i) {
      setTimeout(function () {
        let [pri, comp] = randomHslPair();
        helpChangeColor(pri, comp);
        if (--i) {
          delayedLoop(i);
        } else {
          long_audio.pause();
          long_audio.currentTime = 0;
        }
      }, 1500);
    })(r);
  } else {
    short_audio.play();
    let [pri, comp] = randomHslPair();
    helpChangeColor(pri, comp);
  }
}

//adding event listeners
btnRGB.addEventListener('click', rgbChange);
btnHex.addEventListener('click', hexChange);
btnRGBA.addEventListener('click', rgbaChange);
btnHSL.addEventListener('click', hslChange);
btnHSLA.addEventListener('click', hslaChange);

//func to generate rgb value
function rgbChange() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let randomColorRGB = `rgb(${red},${green},${blue})`;
  body.style.background = randomColorRGB;
  colorName1.innerText = randomColorRGB;
}

//func to generate (a-f) && (0-9)
function hexGen() {
  let n1 = String.fromCharCode(Math.floor(Math.random() * 6) + 97); // returns 0 - 9
  let a1 = String.fromCharCode(Math.floor(Math.random() * 9) + 48); // returns a - f

  //pushed into array
  let hex = [n1, a1];
  hexValue = hex[Math.floor(Math.random() * hex.length)]; //use hex length to randomize either n1 or a1

  return hexValue;
}

//hsl value
function hexGenValue() {
  return `#${hexGen()}${hexGen()}${hexGen()}${hexGen()}${hexGen()}${hexGen()}`;
}

//func to generate rgba value
function hexChange() {
  let randomColorHex = hexGenValue();
  body.style.background = randomColorHex;
  colorName2.innerText = randomColorHex;
}

//func to generate rgba value
function rgbaChange() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let alpha = Math.random(0.1, 1.0).toString();
  alpha = alpha.slice(0, 4);
  let randomColorRGBA = `rgba(${red},${green},${blue}, ${alpha})`;
  body.style.background = randomColorRGBA;
  colorName3.innerText = randomColorRGBA;
}

//func to generate hsl value
function hslChange() {
  let hue = Math.floor(Math.random() * 360);
  let saturation = Math.floor(Math.random() * 100);
  let lightness = Math.floor(Math.random() * 100);
  let randomColorHSL = `hsl(${hue},${saturation}%,${lightness}%)`;
  body.style.background = randomColorHSL;
  colorName4.innerText = randomColorHSL;
}

//func to generate hsl value
function hslaChange() {
  let hue = Math.floor(Math.random() * 360);
  let saturation = Math.floor(Math.random() * 100);
  let lightness = Math.floor(Math.random() * 100);
  let alpha = Math.random(0.1, 1.0).toString();
  alpha = alpha.slice(0, 4);
  let randomColorHSLA = `hsla(${hue},${saturation}%,${lightness}%, ${alpha})`;
  body.style.background = randomColorHSLA;
  colorName5.innerText = randomColorHSLA;
}

function timer() {
  console.time('For Loop');
  for (let i = 0; i < 2001; i++) {
    console.log(i);
  }
  console.timeEnd('For Loop');
}

//window.addEventListener('DOMContentLoaded', () => rgbChange());

// timer();
