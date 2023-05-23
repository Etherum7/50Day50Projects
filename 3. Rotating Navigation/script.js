const op = document.getElementById("open");
const cl = document.getElementById("close");

const container = document.querySelector(".container");

op?.addEventListener("click", () => container?.classList.add("show-nav"));

cl?.addEventListener('click', ()=> container?.classList.remove("show-nav"));