let tvStats = false;
let channel = 1;
let currentVolume = 5;

let tvPowerState = 'Ligar';

const canalSpan = document.getElementById('canal');
const volumeSpan = document.getElementById('volume');

const tvPowerButton = document.getElementById('tvPower');
document.getElementById("tvPower").innerHTML = 'Ligar';
const changeChannelButton = document.getElementById('changeChannel');
const volPlusButton = document.getElementById('volPlus');
const volMinusButton = document.getElementById('volMinus');

    tvPowerButton.addEventListener('click', function() {
        tvStats = !tvStats;
        if (tvStats) {
          document.getElementById("tvImg").src="../../images/tvImgs/tvOn.jpeg"
        }else{
          document.getElementById("tvImg").src="../../images/tvImgs/tvOff.png"
        }
        document.getElementById("tvPower").innerHTML = tvStats ? 'Desligar' : 'Ligar';
    });

    changeChannelButton.addEventListener('click', function() {
      if (tvStats && channel != 1) {
        channel = Math.max(1, channel - 1);
        canalSpan.textContent = channel;
      }else if(tvLigada && channel == 1){
        channel = 10;
        canalSpan.textContent = channel;
      }
    });

    volPlusButton.addEventListener('click', function() {
      if (tvLigada) {
        currentVolume = Math.min(5, currentVolume + 1);
        volumeSpan.textContent = currentVolume;
      }
    });

    volMinusButton.addEventListener('click', function() {
      if (tvLigada) {
        currentVolume = Math.max(0, currentVolume - 1);
        volumeSpan.textContent = currentVolume;
      }
    });