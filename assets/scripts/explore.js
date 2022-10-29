// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Populate voices
  let voices = [];
  const synth = window.speechSynthesis;
  function populateVoiceList() {
    voices = synth.getVoices();
    for (let i = 0; i < voices.length; i ++){
      const option = document.createElement('option');
      option.textContent =  `${voices[i].name} (${voices[i].lang})`;
      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      document.getElementById("voice-select").appendChild(option);
    }
  }
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  const button = document.querySelector("button");
  const inputTxt = document.querySelector("textarea");
  const select = document.getElementById("voice-select");

  button.addEventListener('click', function() {
    const index = select.selectedIndex;
    const speak = new SpeechSynthesisUtterance(inputTxt.value);
    const selectedOption = select[index].getAttribute('data-name');
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name == selectedOption) {
        speak.voice = voices[i];
      }
    }
    const synth = window.speechSynthesis;
    synth.speak(speak);
    const img = document.querySelector("img"); 
    img.src = "assets/images/smiling-open.png"
    const speakCheck = setInterval(function(){
      if(synth.speaking == false){
        img.src = "assets/images/smiling.png";
        clearInterval(speakCheck);
      }
    }, 1)
  });
}

