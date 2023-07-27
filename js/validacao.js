function validaChute(chute) {
  const numero = parseInt(chute);

  if (Number.isNaN(numero)) {
    elementoChute.innerHTML += '<div>Valor inválido</div>';
    return;
  }

  if (numero > maiorValor || numero < menorValor) {
    elementoChute.innerHTML += `<div>Valor inválido: O número secreto precisa estar entre ${menorValor} e ${maiorValor}`;
    return;
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
      <h2>Você acertou!!</h2> 
      <h3>O número secreto era ${numeroSecreto}</h3>
      <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
    `;
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`;
  } else {
    elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`;
  }
}

document.body.addEventListener('click', (e) => {
  if (e.target.id == 'jogar-novamente') {
    window.location.reload();
  }
});
