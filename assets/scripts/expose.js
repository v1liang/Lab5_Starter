// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  //CORRECT IMAGE + AUDIO SECTION
  const hornDOM = document.getElementById('horn-select');
  const imgDOM = document.querySelector('img');
  const audioDOM = document.querySelector('audio');

  hornDOM.addEventListener('change', function(){
    console.log(hornDOM.value);
    if(hornDOM.value == 'air-horn') {
      imgDOM.src="assets/images/air-horn.svg";
      audioDOM.src="assets/audio/air-horn.mp3";
      console.log(audioDOM.src);
    }
    if(hornDOM.value == 'car-horn') {
      imgDOM.src="assets/images/car-horn.svg";
      audioDOM.src="assets/audio/car-horn.mp3";
    }
    if(hornDOM.value == 'party-horn') {
      imgDOM.src="assets/images/party-horn.svg";
      audioDOM.src="assets/audio/party-horn.mp3";
    }
  });
  //CORRECT VOLUME SECTION
  const volumeDOM = document.getElementById('volume-controls');
  const volumeInput = volumeDOM.querySelector("input[value='50']");
  const volumeImg = volumeDOM.querySelector('img');

  volumeInput.addEventListener('click', function() {
    let audioVal = volumeInput.value;
    audioDOM.volume = audioVal*0.01;
    if(audioVal == 0) {
      volumeImg.src="assets/icons/volume-level-0.svg";
      volumeImg.alt="Volume level 0";
    }
    if(audioVal >= 1 && audioVal < 33) {
      volumeImg.src="assets/icons/volume-level-1.svg";
      volumeImg.alt="Volume level 1";
    }
    if(audioVal >= 33 && audioVal < 67) {
      volumeImg.src="assets/icons/volume-level-2.svg";
      volumeImg.alt="Volume level 2";
    }
    if(audioVal >= 67) {
      volumeImg.src="assets/icons/volume-level-3.svg";
      volumeImg.alt="Volume level 3";
    }
    // console.log(volumeImg);
    // console.log(audioVal.value);
  });
  // Play Sound
  const buttonDOM = document.querySelector('button');
  buttonDOM.addEventListener('click', function() {
    audioDOM.play();
    if(hornDOM.value == 'party-horn') {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti({
        confettiRadius: 50
      });
    }
    console.log(audioDOM);
  });
}