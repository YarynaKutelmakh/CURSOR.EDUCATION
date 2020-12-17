const btns = document.querySelectorAll(".btns");
const audio = new Audio();

btns.forEach((btn)=>btn.addEventListener('click', function(e){
    audio.src = `sounds/${e.target.id}.mp3`;
    audio.play();
}))

document.addEventListener('keydown', function(e){
    audio.src = `sounds/${e.code}.mp3`;
    audio.play();
})