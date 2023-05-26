const left = document.querySelector(".left");
const right = document.querySelector(".right");

const container = document.querySelector(".container");

left?.addEventListener("mouseenter", () => {
  container?.classList.add("hover-left");
});
left?.addEventListener("mouseleave", () => {
  container?.classList.remove("hover-left");
});

right?.addEventListener("mouseenter", () => {
  container?.classList.add("hover-right");
});

right?.addEventListener("mouseleave", () => {
  container?.classList.remove("hover-right");
});
// console.log(splitLeft);
// splitLeft?.addEventListener("mouseover", () => {
//   // @ts-ignore
//   splitLeft.style.width = "75%";
// });

// splitRight?.addEventListener("mouseover", () => {
// //   console.log("run");
//   // @ts-ignore

//   splitRight.style.width = "75%";
// });
