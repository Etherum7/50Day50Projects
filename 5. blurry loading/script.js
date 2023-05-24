const bg = document.querySelector(".bg");
const loadText = document.querySelector(".loading-text");

let load = 0;

let int = setInterval(blurring, 30);
function blurring() {
  load += 1;
  if (load == 100) {
    clearInterval(int);
  }

  // @ts-ignore
  loadText.innerText = `${load}%`;
  // @ts-ignore
  loadText.style.opacity = (100 - load) / 100;
  // @ts-ignore
  bg.style.filter = `blur(${30 - load * 0.3}px)`;
}
