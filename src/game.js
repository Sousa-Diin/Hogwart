class Player {
  constructor(name, pos){
    this.createPlayer(name, pos);
  }

  createPlayer(name, pos){ // Recebe a posição inicial e nome do jogador
    const player = document.createElement('div');
    player.id = 'player';
    player.classList.add('player');
    player.innerText = name;
    player.style.left = `${pos}'%`;

    document.getElementById('game').appendChild(player);
  }

  movePlayer(pos){ // Recebe a posição final do jogador
    var player = document.getElementById("player");
    var currentPosition = player.getBoundingClientRect();
    let worldDirection = 'container-cmd-info';
    //console.log(currentPosition);
    if (pos !== "WE") {
       playSoundGame(14);
    } else {
       playSoundGame(20);
    }
    switch (pos){
      case 'SW':
        player.style.left = (currentPosition.left - 60) + "px";
        player.style.top = (currentPosition.top + 20) + "px";
        worldDirection = "Suldoeste";
        break;
      case 'W':
        player.style.left = (currentPosition.left - 30) + "px";
        worldDirection = "Oeste";
        break;
      case 'NW':
        player.style.left = (currentPosition.left - 40) + "px";
        player.style.top = (currentPosition.top - 30) + "px";
        worldDirection = "Noroeste"
        break;
      case 'N':
        player.style.top = (currentPosition.top - 30) + "px";
        worldDirection = "Norte";
        break;
      case 'NE':
        player.style.top = (currentPosition.top - 30) + "px";
        player.style.left = (currentPosition.left + 10) + "px";
        worldDirection = "Nordeste";
        break;
      case 'E':
        player.style.left = (currentPosition.left + 10) + "px";
        worldDirection = "Leste";
        break;
      case 'SE':  
        player.style.top = (currentPosition.top + 10) + "px";
        player.style.left = (currentPosition.left + 10) + "px";
        worldDirection = "Suldeste";
        break;
      case 'S':
        player.style.top = (currentPosition.top + 10) + "px";
        worldDirection = "Sul";
        break;
      case 'WE':
        player.classList.add('especial');
        worldDirection = "Especial";
        break;
      default:
         playSoundGame(20);
        break;
    }
    document.getElementById('container-cmd-info').innerText = worldDirection;
  }
};



function createScreenCMD () {
  const sectionCMD = document.createElement('section');
  const divCMD = document.createElement('div');
  const divInfo = document.createElement('div');
  sectionCMD.id = 'container-cmd';
  divCMD.id = 'container-cmd-control';
  divInfo.id = 'container-cmd-info';

  sectionCMD.classList.add('game-cmd');
  divCMD.classList.add('div-control');
  divInfo.classList.add('div-info');

  const nameBtn = ['NW','N','NE','W','WE','E','SW','S','SE'];
  for ( let i = 0; i < nameBtn.length; i++ ){
    let btnCMD = document.createElement('button');
    btnCMD.id = 'btn-cmd' + i;
    btnCMD.classList.add('btn-cmd');
    if (nameBtn[i].length === 1 ){
      btnCMD.classList.add('btn-cmd-aux');
    }
    btnCMD.innerHTML = nameBtn[i];
    divCMD.appendChild(btnCMD);
  }
  divInfo.innerText = "Welcome to the game !!";
  sectionCMD.appendChild(divCMD);
  sectionCMD.appendChild(divInfo);
  document.body.appendChild(sectionCMD);
}


function listenToButtonClicks(player1){
  const buttons = document.querySelectorAll('.btn-cmd');
  
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // your action here
      player1.movePlayer(button.innerText);
      //trocarMusica();
      //playSoundGame(14);
     
    });
  });
}

function changeBackGroundImg(){
  const img = document.getElementById('game');
  img.classList.add('gameR');
}
window.onload = function(){ 
  document
    .getElementById('game')
    .classList.add('game'); 
  playSoundGame(15);
}

/* chat  */



createScreenCMD();
const player1 = new Player('Harry', 350);
listenToButtonClicks(player1);

setTimeout(()=>{changeBackGroundImg()} ,7000);