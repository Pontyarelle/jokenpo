var elementos = document.querySelectorAll(".player-options div > img");
var playerOpt = "";
var inimigoOpt = "";
var pontosPlayer = 0; // Pontos do jogador
var pontosInimigo = 0; // Pontos da IA

// Função para atualizar o placar na tela
function atualizarPlacar() {
  document.querySelector(".pontos-player").innerText = pontosPlayer;
  document.querySelector(".pontos-inimigo").innerText = pontosInimigo;
}

//função para validar quem ganhou
function validarVitoria() {
  let vencedor = document.querySelector(".vencedor");

  if (playerOpt == "papel") {
    if (inimigoOpt == "papel") {
      vencedor.innerHTML = "EMPATE";
    } else if (inimigoOpt == "tesoura") {
      vencedor.innerHTML = " VITORIA DA IA!";
      pontosInimigo++; // Incrementa os pontos da IA
    } else if (inimigoOpt == "pedra") {
      vencedor.innerHTML = "VOCÊ GANHOU!";
      pontosPlayer++; // Incrementa os pontos do jogador
    }
  }

  if (playerOpt == "pedra") {
    if (inimigoOpt == "pedra") {
      vencedor.innerHTML = "EMPATE";
    } else if (inimigoOpt == "papel") {
      vencedor.innerHTML = " VITORIA DA IA!";
      pontosInimigo++; // Incrementa os pontos da IA
    } else if (inimigoOpt == "tesoura") {
      vencedor.innerHTML = "VOCÊ GANHOU!";
      pontosPlayer++; // Incrementa os pontos do jogador
    }
  }

  if (playerOpt == "tesoura") {
    if (inimigoOpt == "tesoura") {
      vencedor.innerHTML = "EMPATE";
    } else if (inimigoOpt == "pedra") {
      vencedor.innerHTML = " VITORIA DA IA!";
      pontosInimigo++; // Incrementa os pontos da IA
    } else if (inimigoOpt == "papel") {
      vencedor.innerHTML = "VOCÊ GANHOU!";
      pontosPlayer++; // Incrementa os pontos do jogador
    }
  }

  atualizarPlacar();
}

//função para resetar o inimigo
function resetInimigo() {
  const enemyOptions = document.querySelectorAll(".enemy-options div");
  for (var i = 0; i < enemyOptions.length; i++) {
    enemyOptions[i].childNodes[0].style.opacity = 0.3;
  }
}

//função para o inimigo jogar
function inimigoJogar() {
  let rand = Math.floor(Math.random() * 3);

  const enemyOptions = document.querySelectorAll(".enemy-options div");
  resetInimigo();
  for (var i = 0; i < enemyOptions.length; i++) {
    if (i == rand) {
      enemyOptions[i].childNodes[0].style.opacity = 1;
      inimigoOpt = enemyOptions[i].childNodes[0].getAttribute("opt");
    }
  }
  validarVitoria();
}

//função para diminuir a opacidade da seleção do player
function resetOpacityPlayer() {
  for (var i = 0; i < elementos.length; i++) {
    elementos[i].style.opacity = 0.3;
  }
}

//função para exibir o elemento selecionado do player
for (var i = 0; i < elementos.length; i++) {
  elementos[i].addEventListener("click", function (t) {
    resetOpacityPlayer();
    t.target.style.opacity = 1;
    playerOpt = t.target.getAttribute("opt");

    inimigoJogar();
  });
}
