let musicaAtual = 0;
var audioPlayer = document.getElementById("audioPlayer");
var audioSource = document.getElementById("audioSource");

const playlist = [
    "../assets/sounds/achado-2.mp3",//1
    "../assets/sounds/cinematic-impact-climax-intro.mp3",//2
    "../assets/sounds/collect-ring.mp3",//3
    "../assets/sounds/collectcoin.mp3",//4
    "../assets/sounds/decidemp3-choose-item.mp3",//5
    "../assets/sounds/collectcoin.mp3",//6
    "../assets/sounds/friend-request.mp3",//7
    "../assets/sounds/game-bonus.mp3",//8
    "../assets/sounds/game-level-complete.mp3",//9
    "../assets/sounds/halloween-impact.mp3",//10
    "../assets/sounds/interface-open-item.mp3",//11
    "../assets/sounds/item-equip.mp3",//12
    "../assets/sounds/natural-thunder.mp3",//13
    "../assets/sounds/open-and-closed-door.mp3",//14
    "../assets/sounds/punch-2-walking.mp3",//15
    "../assets/sounds/scary-music-box-for-spooky-scenes-dangero-place.mp3",//16
    "../assets/sounds/select-sound.mp3",//17
    "../assets/sounds/sinister-laugh-chefão.mp3",//18
    "../assets/sounds/sinister-laugh-chefão.mp3",//19
    "../assets/sounds/success-1.mp3",//20
    "../assets/sounds/teleport.mp3",//21
    "../assets/sounds/wrong-buzzer-lose-live.mp3",//22
    "../assets/sounds/wrong-place.mp3",//23
    "../songs/Harry-Potter.mp3",//24
    "../songs/Pokémon X and Y - Title Theme.mp4",//25
];


function trocarMusica() {
    if (musicaAtual < playlist.length - 1) {
        musicaAtual++;
    } else {
        musicaAtual = 0;
    }
    audioSource.src = playlist[musicaAtual];
    audioPlayer.load(); // Recarrega o áudio para tocar a nova música
    audioPlayer.play(); // Inicia a reprodução da nova música
}


let titleGame = "Hogwarts";
const h1 = document.createElement("h1");
h1.innerText = titleGame.toUpperCase();
const mainSection = document.getElementById("main-section");
mainSection.appendChild(h1);


function playSoundGame(track){ 
  audioSource.src = playlist[track];
  audioPlayer.load(); // Recarrega o áudio para tocar a nova música
  audioPlayer.play(); // Inicia a reprodução da nova música
}

const pauseSoundGame = () => {
  document.getElementById("audioPlayer").pause();
};

function changePage() {
  const newSound = document.getElementById("audioSource");
  newSound.src = "../assets/sounds/success-1.mp3";
  window.location.pathname = "src/game.html";
}

function createSplashGame (track) {
  let button = document.createElement("button");
  titleGame = "Start Game";
  button.innerText = titleGame.toUpperCase();
  button.id = "start-game";
  button.onclick = changePage;
  document.getElementById("main-section").appendChild(button);
  playSoundGame(track);
}

function hadlleButtonAction() {
  //playSoundGame(16);
}


//window.onload = createSplashGame(23);
createSplashGame(23);
 
hadlleButtonAction();