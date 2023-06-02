// @ts-ignore
const joke = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");

const renderJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  });
  // @ts-ignore
  const data = await response.json();
  console.log(data.joke);
  // @ts-ignore
  joke.innerText = data.joke || "";

};

window.addEventListener("load", () => renderJoke());

jokeBtn?.addEventListener("click", () => {
  renderJoke();
});
