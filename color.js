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

//func to generate rgba value
function hexChange() {
  let randomColorHex = '#' + hexGen() + hexGen() + hexGen() + hexGen() + hexGen() + hexGen();
  body.style.background = randomColorHex;
  colorName2.innerText = randomColorHex;
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
