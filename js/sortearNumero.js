function gerarNumeroAleatorio() {
  return parseInt(Math.random() * maiorValor + 1);
}

const menorValor = 10;
const maiorValor = 1000;

const numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor;
const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;
