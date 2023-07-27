const elementoChute = document.getElementById('chute');

const speechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition();

recognition.lang = 'pt-BR';

recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
  let chute = e.results[0][0].transcript;
  exibeChute(chute);
  validaChute(chute);
}

function exibeChute(chute) {
  elementoChute.innerHTML = `
    <div>Você disse</div>
    <span class ="box">${chute}</span>
`;
}
