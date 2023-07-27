function validaChute(chute) {
  const numero = parseInt(chute);

  if (Number.isNaN(numero)) {
    console.log('valor inválido');
  }

  if (numero > maiorValor || numero < menorValor) {
    console.log(
      `valor inválido. o número precisa estar entre ${menorValor} e ${maiorValor}`,
    );
  }
}
