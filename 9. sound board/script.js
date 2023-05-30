const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const buttons = document.querySelector("#buttons");

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText=sound;
  btn.onclick=()=>{
    stopSongs();
    const song= document.getElementById(sound); 
    
    // @ts-ignore
    song.play();

  }

  buttons?.appendChild(btn);

});

function stopSongs(){
    sounds.forEach(sound=>{
        const song= document.getElementById(sound); 
        // @ts-ignore
        song.pause();
        // @ts-ignore
        song.currentTime=0;
    })
}